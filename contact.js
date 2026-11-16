const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('formStatus').textContent = 'Thank you! This lab form has been validated locally; no message was sent.';
  });
  form.addEventListener('reset', function () { document.getElementById('formStatus').textContent = ''; });
}
