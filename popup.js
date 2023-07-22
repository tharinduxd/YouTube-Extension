document.addEventListener('DOMContentLoaded', function() {
    var videoButton = document.getElementById('videoButton');
    var mp3Button = document.getElementById('mp3Button');
  
    videoButton.addEventListener('click', function() {
      var youtubeLink = document.getElementById('youtubeLink').value;
      var saveFromUrl = 'https://en.savefrom.net/1-youtube-video-downloader-510by/?url=' + encodeURIComponent(youtubeLink);
      openUrl(saveFromUrl);
    });
  
    mp3Button.addEventListener('click', function() {
      var youtubeLink = document.getElementById('youtubeLink').value;
      var x2downloadUrl = 'https://x2download.app/en98/download-youtube-to-mp3?url=' + encodeURIComponent(youtubeLink);
      openUrl(x2downloadUrl);
    });
  
    function openUrl(url) {
      chrome.tabs.create({ url: url });
    }
  
    // Automatically paste the copied link into the input field
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'getYouTubeLink' }, function(response) {
        if (response && response.youtubeLink) {
          document.getElementById('youtubeLink').value = response.youtubeLink;
        }
      });
    });
  });
  