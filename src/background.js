/**
 * background.js - MemorySeed
 * Service worker for the MemorySeed extension.
 * Manages extension lifecycle and events.
 */

chrome.runtime.onInstalled.addListener(() => {
  console.log("MemorySeed Extension Installed.");
});
