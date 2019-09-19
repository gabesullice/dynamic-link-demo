const createButton = function (text, typeClass) {
  const button = document.createElement('button');
  button.textContent = text;
  button.setAttribute('type', 'button');
  button.classList.add('btn', typeClass, 'mr-2', 'mb-2');
  return button;
};

const createFromHTML = function (html) {
  const container = document.createElement('div');
  container.innerHTML = html;
  return container;
}

const onDOMChange = function (node, callback) {
  const observer = new MutationObserver(callback);
  observer.observe(node, {childList: true});
};

const onClick = function (node, callback) {
  node.addEventListener('click', callback);
};

const copyLink = function (link) {
  return JSON.parse(JSON.stringify(link));
};

const parseLink = function (linkContainer) {
  return JSON.parse(linkContainer.innerHTML);
}

const renderLink = function (link, setContent) {
  const originalLink = copyLink(link);

  const button = createButton(link.params.title, 'btn-primary');
  onClick(button, function () { processLink(link, setContent) });

  setContent(button);
}

const renderContent = function (parent, children) {
  while (parent.firstChild) {
    parent.removeChild(root.firstChild);
  }
  [children].flat().forEach(function (child) {
    parent.appendChild(child);
  });
}

const renderComponent = function (id) {
  const linkContainer = document.getElementById('json');
  const root = document.getElementById('root');
  const setContent = function (content) {
    renderContent(root, content);
  };
  onDOMChange(linkContainer, function () {
    renderLink(parseLink(linkContainer), setContent);
  });
  renderLink(parseLink(linkContainer), setContent);
};

const processLink = function (link, setContent) {
  if (link.params.confirm) {
    const confirmationText = typeof link.params.confirm === 'string' ? link.params.confirm : 'Are you sure?';
    delete(link.params.confirm);
    const confirmButton = createButton(confirmationText, 'btn-warning');
    onClick(confirmButton, function () { processLink(link, setContent) });
    const cancelButton = createButton('Cancel', 'btn-danger');
    onClick(cancelButton, function () { renderComponent() });
    setContent([confirmButton, cancelButton]);
  }
  else {
    switch (link.rel) {
      case 'add':
        setContent(createFromHTML(`POST ${link.href}<br><br><pre><code>${JSON.stringify({data: link.params.data}, null, '  ')}</code></pre>`));
        break;

      case 'alternate':
        setContent(createFromHTML(`GET ${link.href}`));
        break
    }
    setTimeout(function () {
      renderComponent();
    }, 2000);
  }
};

window.addEventListener('DOMContentLoaded', function () {
  renderComponent();
});
