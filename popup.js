document.addEventListener('DOMContentLoaded', function() {
  var downloadYouTube = document.getElementById('downloadYouTube');
  var downloadFacebook = document.getElementById('downloadFacebook');
  var downloadInstagram = document.getElementById('downloadInstagram');
  var downloadTwitter = document.getElementById('downloadTwitter');
  var videoLink = document.getElementById('videoLink');

  downloadYouTube.addEventListener('click', function() {
    var saveFromUrl = 'https://en.savefrom.net/1-youtube-video-downloader-510by/?url=' + encodeURIComponent(videoLink.value);
    openUrl(saveFromUrl);
  });

  downloadFacebook.addEventListener('click', function() {
    var saveFromUrl = 'https://en.savefrom.net/9-how-to-download-facebook-video-217.html?url=' + encodeURIComponent(videoLink.value);
    openUrl(saveFromUrl);
  });

  downloadInstagram.addEventListener('click', function() {
    var saveFromUrl = 'https://en.savefrom.net/274/download-from-instagram?url=' + encodeURIComponent(videoLink.value);
    openUrl(saveFromUrl);
  });

  downloadTwitter.addEventListener('click', function() {
    var saveFromUrl = 'https://en.savefrom.net/233/download-from-twitter?url=' + encodeURIComponent(videoLink.value);
    openUrl(saveFromUrl);
  });

  function openUrl(url) {
    chrome.tabs.create({ url: url });
  }

  // Automatically paste the copied link into the input field
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'getYouTubeLink' }, function(response) {
      if (response && response.youtubeLink) {
        videoLink.value = response.youtubeLink;
      }
    });
  });
});
