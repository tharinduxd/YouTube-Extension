chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "downloadYouTube",
    title: "Download This YouTube Video",
    contexts: ["page", "link"],
    documentUrlPatterns: ["*://*.youtube.com/*"]
  });

  chrome.contextMenus.create({
    id: "downloadFacebook",
    title: "Download This Facebook Video",
    contexts: ["page", "link"],
    documentUrlPatterns: ["*://*.facebook.com/*"]
  });

  chrome.contextMenus.create({
    id: "downloadInstagram",
    title: "Download This Instagram Video",
    contexts: ["page", "link"],
    documentUrlPatterns: ["*://*.instagram.com/*"]
  });

  chrome.contextMenus.create({
    id: "downloadTwitter",
    title: "Download This Twitter Video",
    contexts: ["page", "link"],
    documentUrlPatterns: ["*://*.twitter.com/*"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  var url = "";
  if (info.menuItemId === "downloadYouTube") {
    url = 'https://en.savefrom.net/1-youtube-video-downloader-510by/?url=' + encodeURIComponent(info.linkUrl || tab.url);
  } else if (info.menuItemId === "downloadFacebook") {
    url = 'https://en.savefrom.net/9-how-to-download-facebook-video-217.html?url=' + encodeURIComponent(info.linkUrl || tab.url);
  } else if (info.menuItemId === "downloadInstagram") {
    url = 'https://en.savefrom.net/274/download-from-instagram?url=' + encodeURIComponent(info.linkUrl || tab.url);
  } else if (info.menuItemId === "downloadTwitter") {
    url = 'https://en.savefrom.net/233/download-from-twitter?url=' + encodeURIComponent(info.linkUrl || tab.url);
  }

  openUrl(url);
});

function openUrl(url) {
  chrome.tabs.create({ url: url });
}
