const download = req => {
  chrome.downloads.download({
    url: req.url,
    filename: req.filename
  });
};

chrome.runtime.onMessage.addListener((req, sender, res) => {
  download(req);
});
