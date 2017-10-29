document.addEventListener('click', (e) => {
  if (e.target.id === 'gotoGitHub') {
    chrome.tabs.create({
      'url': e.target.innerText
    });
  }
});