import"./header-Bsyh9cf7.js";import{o as p}from"./aboutUs-Bzb3L6RJ.js";const u=document.querySelector(".ongoingMovies");let d=[],m=[];const _=async()=>{await I()};document.addEventListener("DOMContentLoaded",()=>{_().then(e=>h())});function h(){D(),L(),M();for(let e=0;e<a.movies.length;e++){const t=a.movies[e];f({src:t.coverimage,movieLabel:t.title,data:t})}}function f(e){const t=document.createElement("div");t.classList.add("ongoingMovies__card"),u.appendChild(t);const i=document.createElement("img");i.src=e.src,i.classList.add("ongoingMovies__card__image"),t.appendChild(i),i.addEventListener("click",()=>{});const n=document.createElement("h3");n.innerHTML=e.movieLabel,n.classList.add("ongoingMovies__card__label"),t.appendChild(n),n.addEventListener("click",()=>{}),p.observe(t)}function D(){for(let e=0;e<a.movies.length;e++){let t=!1;const i=a.movies[e];for(let n=0;n<d.length;n++)d[n]==i.genre&&(t=!0);t||d.push(i.genre)}}function L(){for(let e=0;e<a.movies.length;e++){let t=!1;const i=a.movies[e];for(let n=0;n<m.length;n++)m[n]==i.decade&&(t=!0);t||m.push(i.decade)}}function M(){const e=document.createElement("div");e.classList.add("ongoingMovies__filterDiv"),u.appendChild(e);const t=document.createElement("div");t.classList.add("ongoingMovies__filterDiv__selectDiv"),e.appendChild(t);const i=document.createElement("select");i.classList.add("ongoingMovies__filterDiv__selectDiv__select"),t.appendChild(i);const n=new Option("Välj genre (Ingen vald)");n.selected=!0,n.classList.add("ongoingMovies__filterDiv__selectDiv__select__option"),i.add(n);for(let c=0;c<d.length;c++){const l=d[c];let r=new Option(l,"genre_"+l);r.classList.add("ongoingMovies__filterDiv__selectDiv__select__option"),i.add(r)}let o=document.createElement("div");o.classList.add("ongoingMovies__filterDiv__genreChipDiv"),e.appendChild(o);for(let c=0;c<m.length;c++){const l=m[c];let r=document.createElement("button");r.classList.add("ongoingMovies__filterDiv__genreChipDiv__chip"),r.textContent=l+"-tal",o.appendChild(r)}for(let c=0;c<d.length;c++){const l=d[c];let r=document.createElement("button");r.classList.add("ongoingMovies__filterDiv__genreChipDiv__chip"),r.textContent=l,o.appendChild(r)}let s=document.createElement("button");s.classList.add("ongoingMovies__filterDiv__genreChipDiv__chip"),s.textContent="Svartvit",o.appendChild(s);let v=document.createElement("input");v.classList.add("ongoingMovies__filterDiv__genreChipDiv__searchfield"),v.placeholder="Sök",o.appendChild(v)}const C=document.querySelector(".upcomingMovies"),g=[{src:"https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",movieLabel:"Terminator"},{src:"https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",movieLabel:"Terminator 2 - Domedagen"},{src:"https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",movieLabel:"Robocop"},{src:"https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",movieLabel:"Terminator Salvation"}];for(let e=0;e<g.length;e++){const t=g[e];b({src:t.src,movieLabel:t.movieLabel})}function b(e){const t=document.createElement("div");t.classList.add("upcomingMovies__card"),C.appendChild(t);const i=document.createElement("img");i.src=e.src,i.classList.add("upcomingMovies__card-image"),t.appendChild(i);const n=document.createElement("h3");n.innerHTML=e.movieLabel,n.classList.add("upcomingMovies__card-label"),t.appendChild(n),p.observe(t)}const E=document.querySelectorAll("[data-carousel-button]");E.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.carouselButton==="next"?1:-1,n=e.closest(".carousel").querySelector(".slides"),o=n.querySelector("[data-active]");let s=[...n.children].indexOf(o)+t;s<0&&(s=n.children.length-1),s>=n.children.length&&(s=0),n.children[s].dataset.active=!0,delete o.dataset.active;const v=n.children[0].offsetWidth;n.style.transform=`translateX(-${s*v}px)`})});const y=async()=>{try{const t=await(await fetch("/static/database/movies.json")).json();console.log("Movies jsonData fetched:",t.movies);const i=document.querySelectorAll(".slides .slide");t.movies.slice(0,3).forEach((o,s)=>{i[s]&&(i[s].innerHTML=`
          <img src="${o.sliderimage}" alt="${o.title}" />
          <div class="movie-info">
            <h2>${o.title}</h2>
            <p>${o.hour}h ${o.minute}minutes, ${o.genre}</p>
          </div>
        `,i[s].dataset.active=s===0?!0:null)});const n=i[0].offsetWidth;document.querySelector(".slides").style.transform="translateX(0)"}catch(e){console.error("Error fetching movie data:",e)}};y();let a=[];const k=async()=>{try{a=await(await fetch("/static/database/movies.json")).json(),console.log(a)}catch(e){return console.error("Error fetching data:",e),null}},I=async()=>{await k(),console.log("Data loaded in main.js:",a)};
//# sourceMappingURL=main-DqoIbHzK.js.map