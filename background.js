chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      id: "downloadYouTube",
      title: "Download This YouTube Video",
      contexts: ["page", "link"],
      documentUrlPatterns: ["*://*.youtube.com/*"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "downloadYouTube") {
      var youtubeLink = info.linkUrl || tab.url;
      var saveFromUrl = 'https://en.savefrom.net/1-youtube-video-downloader-510by/?url=' + encodeURIComponent(youtubeLink);
      openUrl(saveFromUrl);
    }
  });
  
  function openUrl(url) {
    chrome.tabs.create({ url: url });
  }
  