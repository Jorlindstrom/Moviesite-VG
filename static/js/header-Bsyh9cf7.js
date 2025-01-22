(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function d(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=d(e);fetch(e.href,n)}})();const u=async r=>{try{const t=await fetch(r);if(!t.ok)throw new Error(`Failed to fetch data from ${r}. HTTP status: ${t.status}`);return await t.json()}catch(t){return console.error(`Error fetching data from ${r}:`,t),null}};async function f(){const r=await u("/static/database/footer.json");if(!r){console.error("Invalid data not found");return}const t=document.createElement("footer"),d=document.createElement("div");d.className="footer__screen";const a=document.createElement("img");a.src="/static/images/filmduk.png",a.alt="Illustration of a screen",d.appendChild(a),t.appendChild(d);const e=document.createElement("div");e.className="footer__seats";const n=document.createElement("img");n.src="/static/images/stolar.png",n.alt="Illustration of a movie theater",e.appendChild(n),t.appendChild(e);const o=document.createElement("div");o.className="footer__links",t.appendChild(o),r.sections.forEach(i=>{const s=document.createElement("ul");s.className="footer__link__list";const c=document.createElement("h3");c.className="footer__link-title",c.textContent=i.title,s.appendChild(c),i.links.forEach(l=>{const p=document.createElement("li");p.className="footer__link__item";const m=document.createElement("a");m.href=l.url,m.textContent=l.text,m.className="footer__link__link",p.appendChild(m),s.appendChild(p)}),o.appendChild(s)}),document.body.appendChild(t)}f();const h=()=>{const r=document.querySelector(".header__container"),t=document.createElement("div");t.classList.add("stripe__container"),r.appendChild(t);const d=document.createElement("div");d.classList.add("stripe__container__beige"),t.appendChild(d);const a=document.createElement("div");a.classList.add("stripe__container__orange"),t.appendChild(a);const e=document.createElement("div");e.classList.add("stripe__container__red"),t.appendChild(e);const n=document.createElement("div");n.classList.add("stripe__container__cyan"),t.appendChild(n);const o=document.createElement("img");o.classList.add("header__image"),o.src="/static/images/popcorn.png",o.alt="popcorn bio",o.width="400",t.appendChild(o);const i=document.createElement("div");i.classList.add("header__logo__container");const s=document.createElement("h1");s.classList.add("header__logo"),s.innerText="Retro",i.appendChild(s);const c=document.createElement("h3");c.classList.add("header__logo__text"),c.innerText="- Filmer från förr -",i.appendChild(c),r.appendChild(i);const l=document.createElement("h1");l.classList.add("city__name"),l.innerText="VÄSTERÅS",r.appendChild(l)};async function _(){try{const r=await fetch("/static/database/nav.json");if(!r.ok)throw new Error("Something went wrong");const a=(await r.json()).NavItems["sv"],e=document.createElement("nav"),n=document.createElement("ul");a.forEach(i=>{const s=document.createElement("li"),c=document.createElement("a");c.href=i.href,c.textContent=i.name,s.appendChild(c),n.appendChild(s)}),e.appendChild(n),document.querySelector(".header__container").prepend(e);const o=document.createElement("img");o.classList.add("nav__button"),o.src="/static/images/sliders/hamburger.png",o.alt="button for navbar",document.querySelector(".header__container").prepend(o),o.addEventListener("click",function(){e.classList.toggle("navbar__visible")})}catch(r){console.error("Error:",r)}}function g(){h(),_()}g();export{u as f};
//# sourceMappingURL=header-Bsyh9cf7.js.map