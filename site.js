document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu(){ toggle.setAttribute('aria-expanded','false'); nav.classList.remove('open'); }
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape' && toggle.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
matchMedia('(min-width: 801px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
const email=document.querySelector('#email-project');
if(email){const service=new URLSearchParams(location.search).get('service');const subject={fixinit:'FIXINIT construction / handyman inquiry',connectsmart:'ConnectSmart project inquiry'}[service];if(subject)email.href='mailto:dustin@fixinit.us?subject='+encodeURIComponent(subject);}
