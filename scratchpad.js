
function handleClick() {
  browser.tabs.create({
    "url": "/docs/index.html"
  });
}

browser.browserAction.onClicked.addListener(handleClick);