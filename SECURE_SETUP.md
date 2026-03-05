# 🔐 Secure API Key Setup for MemorySeed

## Why Your API Keys Keep Getting Invalidated

When you share API keys in chat conversations or commit them to GitHub, they can be:
1. Logged by the system
2. Indexed by search engines (if public)
3. Scraped by bots
4. Accidentally shared

## ✅ The Secure Solution

We've moved the API key to a separate `config.js` file that is **NOT committed to GitHub**.

## 📋 Setup Instructions

### Step 1: Get a Fresh API Key

1. Go to [OpenRouter Keys](https://openrouter.ai/keys)
2. **Create a NEW API key** (don't reuse old ones)
3. **Copy it immediately** - it starts with `sk-or-v1-`
4. **DO NOT** paste it in any chat or public place

### Step 2: Configure Your Extension

1. Open the file: `src/config.js`
2. Replace `'PASTE_YOUR_NEW_API_KEY_HERE'` with your actual key
3. Save the file

**Example:**
```javascript
// src/config.js
const EMBEDDED_API_KEY = 'sk-or-v1-your-actual-key-here';
```

### Step 3: Verify .gitignore

The `.gitignore` file already includes `src/config.js`, which means:
- ✅ Your API key will NEVER be committed to GitHub
- ✅ Your API key stays on your local machine only
- ✅ You can safely run `git push` without exposing it

### Step 4: Reload Extension

1. Go to `chrome://extensions/`
2. Find "MemorySeed"
3. Click the refresh icon (↻)
4. Test the extension - it should work now!

## 🚨 IMPORTANT RULES

### ❌ NEVER Do This:
- Share `config.js` with anyone
- Commit `config.js` to GitHub
- Paste API keys in chat/email
- Use the same API key if it's been exposed

### ✅ ALWAYS Do This:
- Keep `config.js` local only
- Generate new keys if you suspect exposure
- Check `.gitignore` includes `config.js`
- Use different keys for different projects

## 🔍 Verify Your Setup

Run this command to make sure `config.js` won't be committed:

```bash
cd /Users/saru/Documents/MemorySeed
git status
```

You should see:
- ✅ `config.js` NOT listed (it's ignored)
- ✅ Other files CAN be listed
- ✅ "working tree clean" or only tracked files

## 📦 Sharing the Extension

If you want to share this extension with others:

1. They need their OWN API key from OpenRouter
2. Share the GitHub repo (without `config.js`)
3. They follow this SECURE_SETUP.md guide
4. Each person uses their own `config.js` with their own key

## 💰 API Key Best Practices

1. **Set spending limits** on OpenRouter
2. **Monitor usage** regularly
3. **Rotate keys** every few months
4. **Delete unused keys** immediately
5. **Use different keys** for dev/production

## 🆘 If Your Key Gets Exposed

1. **Immediately delete** the exposed key on OpenRouter
2. **Create a new key**
3. **Update your local** `config.js`
4. **Reload the extension**
5. **Never reuse** the exposed key

---

By following this guide, your API keys will remain secure and won't get invalidated! 🔒
