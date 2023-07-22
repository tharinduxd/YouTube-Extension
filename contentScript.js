chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'getYouTubeLink') {
      var youtubeLink = '';
      var activeElement = document.activeElement;
      
      if (activeElement && activeElement.tagName.toLowerCase() === 'input') {
        youtubeLink = activeElement.value;
      } else {
        var selection = window.getSelection();
        youtubeLink = selection.toString();
      }
  
      sendResponse({ youtubeLink: youtubeLink });
    }
  });
  