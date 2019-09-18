const links = {
  available: {
    href: "/purchases",
    rel: "add",
    params: {
      title: "Buy now!",
      confirm: "I'm sure, charge my card on file",
      data: {
        type: "product",
        id: 1,
      },
    },
  },
  unavailable: {
    href: "/wishlist/items",
    rel: "add",
    params: {
      title: "Save for later",
      confirm: false,
      data: {
        type: "product",
        id: 1,
      },
    },
  },
  discontinued: {
    href: "/products/2",
    rel: "alternate",
    params: {
      title: "See a newer version of this product",
    },
  },
};

window.addEventListener('DOMContentLoaded', function () {
  const link = document.getElementById('json');

  const stockInput = document.getElementById('stock');
  var stockQuantity = stockInput.value;
  stockInput.addEventListener('input', function () {
    stockQuantity = stockInput.value === '' ? 0 : stockInput.value;
    updateLink(stockQuantity, discontinued);
  });

  const discontinuedInput = document.getElementById('discontinued');
  var discontinued = false;
  discontinuedInput.addEventListener('input', function () {
    discontinued = !!discontinuedInput.checked;
    updateLink(stockQuantity, discontinued);
  });

  const updateLink = function (stock, discontinued) {
    const available = stock > 0;
    if (discontinued) {
      link.innerHTML = JSON.stringify(links.discontinued, null, '  ');
    }
    else if (available) {
      link.innerHTML = JSON.stringify(links.available, null, '  ');
    }
    else {
      link.innerHTML = JSON.stringify(links.unavailable, null, '  ');
    }
  }

  updateLink(stockQuantity, discontinued);
});
