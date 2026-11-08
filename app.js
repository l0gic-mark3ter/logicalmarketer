const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('#navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.querySelector('#year').textContent=new Date().getFullYear();
const dialog=document.querySelector('#image-dialog');let imageTrigger;
document.querySelectorAll('[data-lightbox]').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();imageTrigger=link;const img=document.querySelector('#dialog-image');img.src=link.href;img.alt=link.querySelector('img').alt;document.querySelector('#image-caption').textContent=link.dataset.caption;dialog.showModal();}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});dialog.addEventListener('close',()=>imageTrigger?.focus());
document.querySelector('#inquiry-form').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);const body=`Hi Amir,\n\nName: ${d.get('name').trim()}\nEmail: ${d.get('email').trim()}\nBusiness: ${d.get('business').trim()}\n\n${d.get('message').trim()}\n\nI'm interested in the $750 starting package: website, Google Business Profile optimization, and initial basic website SEO. I understand ongoing SEO and long-term plans are separate.`;document.querySelector('#brief-text').value=body;document.querySelector('#email-draft').href=`mailto:amir@logicalmarketer.net?subject=${encodeURIComponent('Website inquiry — '+d.get('business').trim())}&body=${encodeURIComponent(body)}`;document.querySelector('#brief-result').hidden=false;document.querySelector('#email-draft').focus();});
document.querySelector('#copy-brief').addEventListener('click',async()=>{const field=document.querySelector('#brief-text');try{await navigator.clipboard.writeText(field.value);document.querySelector('#copy-status').textContent='Copied. Paste it into an email to amir@logicalmarketer.net.';}catch{field.focus();field.select();document.querySelector('#copy-status').textContent='Select and copy the message above.';}});

// Progressive motion: content stays visible if JavaScript or observation is unavailable.
const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
let runningAnimations=[];
function animateOnce(element,delay=0){
  if(motionPreference.matches||!element.animate)return;
  const restingTransform=getComputedStyle(element).transform;
  const base=restingTransform==='none'?'':restingTransform;
  const animation=element.animate([
    {opacity:0,transform:`translateY(24px) ${base}`.trim()},
    {opacity:1,transform:restingTransform}
  ],{duration:720,delay,easing:'cubic-bezier(.22,1,.36,1)',fill:'backwards'});
  runningAnimations.push(animation);
  animation.finished.then(()=>{runningAnimations=runningAnimations.filter(a=>a!==animation);}).catch(()=>{});
}
if(!motionPreference.matches){
  document.querySelectorAll('.hero-words > *, .hero-evidence').forEach((el,i)=>animateOnce(el,Math.min(i*75,400)));
  if('IntersectionObserver' in window){
    const revealObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{if(!entry.isIntersecting)return;
        const el=entry.target;const siblings=[...el.parentElement.children];
        const stagger=el.matches('.result-card,.features article,.steps article')?Math.min(siblings.indexOf(el)*90,270):0;
        animateOnce(el,stagger);revealObserver.unobserve(el);
      });
    },{threshold:.08,rootMargin:'0px 0px -35px 0px'});
    document.querySelectorAll('.section-heading > *, .result-card, .features article, .price-strip, .search-story .split > *, .center-heading, .steps article, .about-section .split > *, .support, .faq-grid > *, .contact-grid > *').forEach(el=>revealObserver.observe(el));
    motionPreference.addEventListener('change',event=>{if(event.matches){revealObserver.disconnect();runningAnimations.forEach(a=>a.cancel());runningAnimations=[];}});
  }
}
const siteHeader=document.querySelector('.header');
let headerFramePending=false;
function updateHeader(){siteHeader.classList.toggle('is-scrolled',window.scrollY>20);headerFramePending=false;}
window.addEventListener('scroll',()=>{if(!headerFramePending){headerFramePending=true;requestAnimationFrame(updateHeader);}},{passive:true});
updateHeader();
