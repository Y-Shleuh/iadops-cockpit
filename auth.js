(function () {
  if (sessionStorage.getItem('iadops-auth') === '1') return;

  var style = document.createElement('style');
  style.textContent = [
    '#auth-gate{position:fixed;inset:0;z-index:99999;background:#000050;display:flex;align-items:center;justify-content:center;font-family:"Jost",system-ui,sans-serif}',
    '#auth-box{width:100%;max-width:400px;padding:0 24px;text-align:center}',
    '#auth-logo{height:28px;margin-bottom:36px;opacity:.9}',
    '#auth-title{color:#fff;font-size:22px;font-weight:700;line-height:1.2;margin-bottom:6px}',
    '#auth-sub{color:#8888BB;font-size:14px;margin-bottom:28px}',
    '#auth-input{width:100%;padding:14px 18px;border-radius:14px;border:1.5px solid #3A3A78;background:#0A0A6E;color:#fff;font-family:"Jost",system-ui,sans-serif;font-size:16px;outline:none;transition:border-color .18s;letter-spacing:.08em;text-align:center}',
    '#auth-input::placeholder{color:#5555AA;letter-spacing:normal}',
    '#auth-input:focus{border-color:#00F5BE}',
    '#auth-btn{margin-top:14px;width:100%;padding:14px;border-radius:14px;border:none;background:#00F5BE;color:#000050;font-family:"Jost",system-ui,sans-serif;font-size:15px;font-weight:700;cursor:pointer;transition:background .18s}',
    '#auth-btn:hover{background:#00C99C}',
    '#auth-err{color:#FF6B6B;font-size:13px;margin-top:10px;min-height:18px}'
  ].join('');
  document.head.appendChild(style);

  var overlay = document.createElement('div');
  overlay.id = 'auth-gate';
  overlay.innerHTML =
    '<div id="auth-box">' +
      '<img id="auth-logo" src="assets/logo-mobsuccess-white.png" alt="Mobsuccess">' +
      '<div id="auth-title">Cockpit iAdOps</div>' +
      '<div id="auth-sub">Accès réservé à l\'équipe</div>' +
      '<input id="auth-input" type="password" placeholder="Mot de passe" autocomplete="current-password">' +
      '<button id="auth-btn">Accéder</button>' +
      '<div id="auth-err"></div>' +
    '</div>';
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  var input = document.getElementById('auth-input');
  var err   = document.getElementById('auth-err');

  function check() {
    if (input.value === atob('cmF0ZG9wcw==')) {
      sessionStorage.setItem('iadops-auth', '1');
      overlay.remove();
      document.body.style.overflow = '';
    } else {
      err.textContent = 'Mot de passe incorrect.';
      input.value = '';
      input.focus();
    }
  }

  document.getElementById('auth-btn').addEventListener('click', check);
  input.addEventListener('keydown', function (e) { if (e.key === 'Enter') check(); });
  input.focus();
})();
