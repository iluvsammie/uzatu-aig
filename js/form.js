const SHEET_URL = 'https://script.google.com/macros/s/AKfycbwQXmYvesgYSvLUyXKFsGv1Az9h5RPAqy79ISEHo5EzMPhbLj02znZTMMrNqlY5FrGZ/exec';

document.getElementById('guestForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const attendance = document.querySelector('input[name="attendance"]:checked');
  // const message = document.getElementById('message').value.trim();
  const btn = document.getElementById('submitBtn');

  if (!name || !attendance) {
    alert('Аты-жөніңізді және қатысуыңызды таңдаңыз');
    return;
  }

  btn.querySelector('.btn-text').style.display = 'none';
  btn.querySelector('.btn-loading').style.display = 'inline';
  btn.disabled = true;

  try {
    await fetch(SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        attendance: attendance.value,
        // message: message
      })
    });

   document.querySelector('.rsvp-inner h2').style.display = 'none';
document.querySelector('.rsvp-sub').style.display = 'none';
document.getElementById('guestForm').style.display = 'none';
document.getElementById('formSuccess').style.display = 'block';

  } catch (err) {
    btn.querySelector('.btn-text').style.display = 'inline';
    btn.querySelector('.btn-loading').style.display = 'none';
    btn.disabled = false;
    alert('Қате шықты, қайталап көріңіз');
  }
});