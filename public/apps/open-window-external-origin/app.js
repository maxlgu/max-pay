self.addEventListener('paymentrequest', (evt) => {
  evt.respondWith(new Promise((resolve) => {
    evt.openWindow('https://maxlgu.github.io' );
  }));
});
