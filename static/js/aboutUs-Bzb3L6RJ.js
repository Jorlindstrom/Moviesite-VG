import{f as p}from"./header-Bsyh9cf7.js";import{c as h,a as _}from"./languageToggleBtn-CJhW3R8M.js";const C=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?(t.target.classList.add("in-view"),t.target.classList.remove("not-in-view")):(t.target.classList.remove("in-view"),t.target.classList.add("not-in-view"))})},{rootMargin:"0px",threshold:[0,.1,1]}),f=document.querySelector(".about-us"),m=document.querySelector("#about-us-container"),b=async e=>{m.innerHTML="";const t=await p("/static/database/aboutUs.json");if(!t||!t.aboutUs||!t.aboutUs[e]){console.error("Invalid data or language not found");return}const g={introduction:t.aboutUs[e].introduction,origin:t.aboutUs[e].origin,vision:t.aboutUs[e].vision};Object.entries(g).forEach(([o,n])=>{const c=document.createElement("div");c.className=`about-us__container about-us__container--${o}`;const a=document.createElement("section");a.className=`about-us__section about-us__section__${o} `;const s=document.createElement("div");s.className=`about-us__section__text-container about-us__section__text-container--${o}`;const r=document.createElement("h2");r.className=`about-us__section__${o}--title`,r.textContent=n.title.charAt(0).toUpperCase()+n.title.slice(1);const u=document.createElement("p");u.classList=`about-us__section__${o}--text`,u.textContent=n.content;const d=document.createElement("div");d.classList=`about-us__section__${o}__image-container about-us__imgContainer`;const i=document.createElement("img");i.className=`about-us__section__${o}__image-container--image about-us__imgContainer__image`,i.src=n.src,i.alt=n.alt,d.appendChild(i),s.appendChild(r),s.appendChild(u),a.appendChild(s),a.appendChild(d),c.appendChild(a),m.appendChild(c),document.querySelectorAll("h2, p, img").forEach(l=>{l.classList!="header__image"&&C.observe(l)})})},v=()=>{const e=h(_,t=>{b(t)});f.prepend(e),b(_)};document.addEventListener("DOMContentLoaded",()=>{console.log("DOM fully loaded and parsed"),v()});export{C as o};
//# sourceMappingURL=aboutUs-Bzb3L6RJ.js.map