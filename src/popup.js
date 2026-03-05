/**
 * popup.js - MemorySeed v2.0
 * Context Transfer for ChatGPT and Claude conversations
 * Uses OpenRouter API with Gemma 27B model for intelligent compression.
 * 
 * ⚠️ WARNING: API key is embedded for private use only!
 * DO NOT share this extension publicly!
 */

// ⚠️ EMBEDDED API KEY - Keep this extension PRIVATE!
const EMBEDDED_API_KEY = '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';

document.addEventListener('DOMContentLoaded', () => {
  initializeChatTransfer();
});

// ============================================
//  TAB SWITCHING
// ============================================
function initializeTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.dataset.tab;
      
      // Update tab buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update tab content
      tabContents.forEach(content => {
        if (content.id === `${targetTab}Tab`) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
    });
  });
}

// ============================================
//  CHAT CONTEXT TRANSFER
// ============================================
function initializeChatTransfer() {
  const extractBtn = document.getElementById('extractBtn');
  const statusDiv = document.getElementById('status');
  const outputContainer = document.getElementById('outputContainer');
  const outputTextarea = document.getElementById('output');
  const copyBtn = document.getElementById('copyBtn');
  const tokenCount = document.getElementById('tokenCount');

  extractBtn.addEventListener('click', async () => {
    statusDiv.textContent = "Extracting chat messages...";
    extractBtn.disabled = true;

    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      if (!tab.url.includes('chatgpt.com') && !tab.url.includes('claude.ai')) {
        statusDiv.textContent = "Please use this on ChatGPT or Claude.";
        extractBtn.disabled = false;
        return;
      }

      // Try to inject content script first (in case page was loaded before extension)
      try {
        await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ['content.js']
        });
        // Wait a moment for script to initialize
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (injectionError) {
        // Content script might already be injected, continue
        console.log('Content script injection skipped:', injectionError);
      }

      chrome.tabs.sendMessage(tab.id, { action: "extract_chat" }, async (response) => {
        if (chrome.runtime.lastError) {
          statusDiv.innerHTML = "Could not communicate with page.<br>Please <strong>refresh the ChatGPT/Claude tab</strong> and try again.";
          extractBtn.disabled = false;
          return;
        }

        if (response && response.messages && response.messages.length > 0) {
          statusDiv.textContent = "Compressing context with AI...";
          
          try {
            const prompt = await generateTransferPrompt(response.messages);
            outputTextarea.value = prompt;
            
            // Estimate token count (rough approximation: 1 token ≈ 4 characters)
            const estimatedTokens = Math.ceil(prompt.length / 4);
            tokenCount.textContent = `~${estimatedTokens} tokens`;
            
            outputContainer.classList.remove('hidden');
            statusDiv.textContent = "Context transfer prompt generated successfully.";
          } catch (err) {
            statusDiv.textContent = "Error: " + err.message;
          }
        } else {
          statusDiv.textContent = "No messages found on this page.";
        }
        extractBtn.disabled = false;
      });
    } catch (err) {
      statusDiv.textContent = "Error: " + err.message;
      extractBtn.disabled = false;
    }
  });

  copyBtn.addEventListener('click', () => {
    outputTextarea.select();
    document.execCommand('copy');
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    setTimeout(() => {
      copyBtn.textContent = originalText;
      copyBtn.innerHTML = originalHTML;
    }, 2000);
  });
}

async function generateTransferPrompt(messages) {
  const chatHistory = messages.map(m => `${m.role.toUpperCase()}: ${m.content}`).join('\n\n');
  
  const systemPrompt = `You are generating a CONTEXT TRANSFER PROMPT.
From the conversation below, extract:
1. User identity facts
2. User preferences
3. Long-term goals
4. Ongoing projects
5. Technical context
6. Decisions made
7. Unresolved problems
8. Constraints and requirements
9. Communication style expectations

Then create a structured SYSTEM PROMPT that another LLM can use to continue this conversation seamlessly.`;

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${EMBEDDED_API_KEY}`,
      'HTTP-Referer': 'https://memoryseed.extension',
      'X-Title': 'MemorySeed Context Transfer'
    },
    body: JSON.stringify({
      model: "google/gemma-2-27b-it",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `CONVERSATION HISTORY:\n\n${chatHistory}` }
      ],
      temperature: 0.3
    })
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error?.message || "Failed to generate prompt");
  }

  const data = await response.json();
  return data.choices[0].message.content;
}