/**
 * content.js - MemorySeed
 * Extracts and structures chat content from ChatGPT and Claude.
 * Separates messages by role for intelligent compression.
 */

function extractChatGPTMessages() {
  const messages = [];
  
  // Try multiple selector strategies (ChatGPT updates their DOM frequently)
  
  // Strategy 1: data-testid attribute (newer ChatGPT)
  let messageNodes = document.querySelectorAll('div[data-testid^="conversation-turn-"]');
  
  // Strategy 2: Direct article elements (common pattern)
  if (messageNodes.length === 0) {
    messageNodes = document.querySelectorAll('article[data-testid]');
  }
  
  // Strategy 3: Main chat container approach
  if (messageNodes.length === 0) {
    messageNodes = document.querySelectorAll('main article, main [class*="group"]');
  }
  
  // Strategy 4: Generic message containers
  if (messageNodes.length === 0) {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      messageNodes = mainContent.querySelectorAll('div[class*="group"], div[class*="flex"]');
    }
  }
  
  messageNodes.forEach(node => {
    // Determine if it's a user message
    const isUser = 
      node.getAttribute('data-testid')?.includes('user') ||
      node.querySelector('[data-testid*="user"]') ||
      node.querySelector('img[alt*="User"]') ||
      node.querySelector('[class*="user"]') ||
      node.textContent.trim().startsWith('You:');
    
    // Find content - try multiple approaches
    let content = '';
    
    // Try markdown/prose classes
    let contentNode = node.querySelector('.markdown, .prose');
    
    // Try direct text content
    if (!contentNode || !contentNode.textContent.trim()) {
      contentNode = node.querySelector('div[class*="text"], p');
    }
    
    // Last resort: get all text
    if (contentNode && contentNode.textContent.trim()) {
      content = contentNode.textContent.trim();
    } else if (node.textContent.trim()) {
      content = node.textContent.trim();
    }
    
    // Only add if we have actual content
    if (content && content.length > 3) {
      messages.push({
        role: isUser ? 'user' : 'assistant',
        content: content
      });
    }
  });
  
  return messages;
}

function extractClaudeMessages() {
  const messages = [];
  
  // Try multiple selector strategies for Claude
  
  // Strategy 1: Font-based classes
  let messageNodes = document.querySelectorAll('.font-claude-message, .font-user-message');
  
  // Strategy 2: Role-based attributes
  if (messageNodes.length === 0) {
    messageNodes = document.querySelectorAll('[data-role="user"], [data-role="assistant"]');
  }
  
  // Strategy 3: Common message containers
  if (messageNodes.length === 0) {
    messageNodes = document.querySelectorAll('div[class*="message"], div[class*="Message"]');
  }
  
  messageNodes.forEach(node => {
    const isUser = 
      node.classList.contains('font-user-message') ||
      node.getAttribute('data-role') === 'user' ||
      node.querySelector('[data-role="user"]') ||
      node.className.includes('user');
    
    const content = node.innerText.trim();
    
    if (content && content.length > 3) {
      messages.push({
        role: isUser ? 'user' : 'assistant',
        content: content
      });
    }
  });
  
  return messages;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "extract_chat") {
    let messages = [];
    
    console.log('[MemorySeed] Attempting to extract messages...');
    console.log('[MemorySeed] Current URL:', window.location.href);
    
    if (window.location.hostname.includes('chatgpt.com')) {
      console.log('[MemorySeed] Detected ChatGPT');
      messages = extractChatGPTMessages();
    } else if (window.location.hostname.includes('claude.ai')) {
      console.log('[MemorySeed] Detected Claude');
      messages = extractClaudeMessages();
    }
    
    console.log('[MemorySeed] Extracted messages:', messages.length);
    
    // Debug: log first message if any
    if (messages.length > 0) {
      console.log('[MemorySeed] First message preview:', messages[0]);
    } else {
      console.warn('[MemorySeed] No messages found! Trying fallback extraction...');
      
      // Fallback: Try to get any text content from the page
      const allText = document.body.innerText;
      if (allText && allText.length > 100) {
        console.log('[MemorySeed] Fallback: Found page text, length:', allText.length);
        // Create a single message with available content
        messages.push({
          role: 'user',
          content: 'Current page content (extracted as fallback): ' + allText.substring(0, 5000)
        });
      }
    }
    
    sendResponse({ messages: messages });
  }
  
  return true; // Keep message channel open for async response
});
