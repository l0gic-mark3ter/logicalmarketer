const form = document.querySelector('#contact-form');
const status = document.querySelector('#contact-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const fields = new FormData(form);
  const body = [
    'Name: ' + fields.get('name'),
    'Email: ' + fields.get('email'),
    'Phone: ' + (fields.get('phone') || 'Not provided'),
    '',
    fields.get('message'),
  ].join('\r\n');
  status.hidden = false;
  status.textContent = 'Review and send your message in your email app.';
  window.location.href = form.action + '?subject=Logical%20Marketer%20inquiry&body=' + encodeURIComponent(body);
});
