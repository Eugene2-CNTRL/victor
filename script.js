var t = document.getElementById('track');
var name = '<span>ONDUTO CONSULTANCIES</span><i>◆</i>';
t.innerHTML = name.repeat(8);

var root = document.documentElement;
var btn = document.getElementById('theme');
function paint(d) { btn.textContent = d ? '☀' : '☾'; }
var dark = matchMedia('(prefers-color-scheme: dark)').matches;
paint(dark);
btn.onclick = function () {
  dark = !dark;
  root.setAttribute('data-theme', dark ? 'dark' : 'light');
  paint(dark);
};

document.querySelectorAll('.svc').forEach(function (c) {
  function go() {
    c.classList.remove('clicked');
    void c.offsetWidth;
    c.classList.add('clicked');
    clearTimeout(c._t);
    c._t = setTimeout(function () { c.classList.remove('clicked'); }, 1200);
  }
  c.addEventListener('click', go);
  c.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); }
  });
});