chrome.runtime.onMessage.addListener((req, sender, res) => {
  const { url, filename } = req;
  chrome.downloads.download({url, filename});
});
