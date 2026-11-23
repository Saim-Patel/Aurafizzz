"use strict";

const FLAVOURS = {
  citrus: { name: "Citrus Gold", c: ["#e0a83a", "#8a5a10"], note: "Sun-ripened lemon and orange zest.", notes: "Bright citrus peel, honeyed orange blossom, a clean golden finish.", pair: "Seafood, soft cheeses, brunch" },
  berry: { name: "Berry Bloom", c: ["#a2305a", "#4a1030"], note: "Wild berries with a floral lift.", notes: "Raspberry and blackcurrant, rose petal, a soft jammy finish.", pair: "Dark chocolate, charcuterie, desserts" },
  tropical: { name: "Tropical Luxe", c: ["#e9742c", "#8c3010"], note: "Mango, passion fruit and coconut water.", notes: "Ripe mango, passion fruit, a creamy coconut undertone.", pair: "Grilled dishes, spicy curries, sunsets" },
  lime: { name: "Classic Lime", c: ["#5f9a3a", "#1f4a1c"], note: "Crisp lime with a mint whisper.", notes: "Zesty green lime, fresh mint, a crisp and dry finish.", pair: "Salads, sushi, long summer lunches" }
};
const LIST = Object.keys(FLAVOURS);
let uid = 0;

/* Premium heritage can: forest-green body, gold frame, crest, flavour accent band */
function canSVG(key) {
  const f = FLAVOURS[key], id = "g" + uid++;
  return `<svg viewBox="0 0 200 380" role="img" aria-label="${f.name} protein sparkling can">
  <defs>
    <linearGradient id="${id}b" x1="0" x2="1"><stop offset="0" stop-color="#0c1c14"/><stop offset=".28" stop-color="#2f5a45"/><stop offset=".55" stop-color="#173528"/><stop offset="1" stop-color="#07120c"/></linearGradient>
    <linearGradient id="${id}m" x1="0" x2="1"><stop offset="0" stop-color="#8d8d8d"/><stop offset=".35" stop-color="#f4f4f4"/><stop offset=".7" stop-color="#a9a9a9"/><stop offset="1" stop-color="#6e6e6e"/></linearGradient>
    <linearGradient id="${id}g" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#a98a4e"/><stop offset=".3" stop-color="#f3e2b4"/><stop offset=".6" stop-color="#c9a96e"/><stop offset="1" stop-color="#85672f"/></linearGradient>
    <linearGradient id="${id}a" x1="0" x2="1"><stop offset="0" stop-color="${f.c[1]}"/><stop offset=".4" stop-color="${f.c[0]}"/><stop offset="1" stop-color="${f.c[1]}"/></linearGradient>
    <linearGradient id="${id}h" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".3"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
  </defs>
  <path d="M38 40Q38 26 56 22H144Q162 26 162 40V340Q162 356 144 360H56Q38 356 38 340Z" fill="url(#${id}m)"/>
  <rect x="38" y="62" width="124" height="256" fill="url(#${id}b)"/>
  <rect x="38" y="62" width="124" height="5" fill="url(#${id}g)"/>
  <rect x="38" y="313" width="124" height="5" fill="url(#${id}g)"/>
  <rect x="47" y="76" width="106" height="228" fill="none" stroke="url(#${id}g)" stroke-width="1.4"/>
  <rect x="51" y="80" width="98" height="220" fill="none" stroke="#c9a96e" stroke-width=".5" opacity=".7"/>
  <g fill="none" stroke="url(#${id}g)" stroke-width="1.6" stroke-linecap="round">
    <circle cx="100" cy="124" r="19"/>
    <path d="M77 142Q66 124 77 106M123 142Q134 124 123 106"/>
    <path d="M73 134q-5-3-6-8M73 122q-5-3-6-8M127 134q5-3 6-8M127 122q5-3 6-8" stroke-width="1.2"/>
  </g>
  <text x="100" y="133" text-anchor="middle" font-family="Georgia,serif" font-size="26" fill="url(#${id}g)">A</text>
  <text x="100" y="172" text-anchor="middle" font-family="Georgia,serif" font-size="19" letter-spacing="3" fill="url(#${id}g)">AURAFIZZ</text>
  <path d="M62 182H94M106 182H138" stroke="#c9a96e" stroke-width=".7"/>
  <path d="M100 178l3 4-3 4-3-4z" fill="#c9a96e"/>
  <text x="100" y="206" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="14" fill="#f6f0e4">${f.name}</text>
  <rect x="51" y="220" width="98" height="28" fill="url(#${id}a)"/>
  <path d="M51 220H149M51 248H149" stroke="#f3e2b4" stroke-width=".8"/>
  <text x="100" y="239" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="600" letter-spacing="2" fill="#fff8e8">10G PROTEIN</text>
  <text x="100" y="270" text-anchor="middle" font-family="Georgia,serif" font-size="8" letter-spacing="2.5" fill="#e4cf9f">HERITAGE SPARKLING</text>
  <text x="100" y="286" text-anchor="middle" font-family="sans-serif" font-size="6.5" letter-spacing="2" fill="#f6f0e4" opacity=".75">LOW SUGAR · 330 ML</text>
  <rect x="52" y="67" width="12" height="246" fill="url(#${id}h)" opacity=".75"/>
  <ellipse cx="100" cy="30" rx="50" ry="7" fill="url(#${id}m)" stroke="#777" stroke-width=".6"/>
  <ellipse cx="100" cy="30" rx="34" ry="4" fill="#9a9a9a" opacity=".6"/>
  <ellipse cx="100" cy="30" rx="9" ry="2.2" fill="#555"/>
</svg>`;
}

/* Static hero cans */
document.querySelectorAll("[data-can]").forEach(el => (el.innerHTML = canSVG(el.dataset.can)));

/* Flavour cards (interactive: click/Enter to expand) */
const cards = document.getElementById("cards");
LIST.forEach(k => {
  const f = FLAVOURS[k];
  const b = document.createElement("button");
  b.className = "card reveal";
  b.setAttribute("aria-expanded", "false");
  b.innerHTML = `<div class="can">${canSVG(k)}</div><h3>${f.name}</h3><span class="badge">10g protein</span><p class="note">${f.note}</p>
    <p class="more"><b>Tasting notes:</b> ${f.notes}</p><span class="hint">Tap to discover</span>`;
  b.addEventListener("click", () => {
    const open = !b.classList.contains("open");
    cards.querySelectorAll(".card").forEach(c => { c.classList.remove("open"); c.setAttribute("aria-expanded", "false"); c.querySelector(".hint").textContent = "Tap to discover"; });
    if (open) { b.classList.add("open"); b.setAttribute("aria-expanded", "true"); b.querySelector(".hint").textContent = "Tap to close"; }
  });
  cards.appendChild(b);
});

/* Showcase tabs */
const tabs = document.getElementById("tabs"), big = document.getElementById("bigCan");
function show(k) {
  const f = FLAVOURS[k];
  big.classList.add("swap");
  setTimeout(() => {
    big.innerHTML = canSVG(k);
    document.getElementById("sName").textContent = f.name;
    document.getElementById("sDesc").textContent = f.notes;
    document.getElementById("sPair").textContent = f.pair;
    big.classList.remove("swap");
  }, 250);
  tabs.querySelectorAll("button").forEach(t => t.setAttribute("aria-selected", t.dataset.k === k));
}
LIST.forEach(k => {
  const t = document.createElement("button");
  t.textContent = FLAVOURS[k].name; t.dataset.k = k; t.setAttribute("role", "tab");
  t.onclick = () => show(k);
  tabs.appendChild(t);
});
show("citrus");

/* Nav: solid on scroll + mobile menu */
const nav = document.getElementById("nav"), burger = document.getElementById("burger"), links = document.getElementById("links");
const onScroll = () => nav.classList.toggle("solid", scrollY > 60);
addEventListener("scroll", onScroll, { passive: true }); onScroll();
const toggle = (o) => { links.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); burger.setAttribute("aria-label", o ? "Close menu" : "Open menu"); };
burger.onclick = () => toggle(!links.classList.contains("open"));
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => toggle(false)));
addEventListener("keydown", e => e.key === "Escape" && toggle(false));

/* Scroll reveal */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .15 });
document.querySelectorAll(".reveal").forEach((el, i) => { el.style.transitionDelay = (i % 4) * 90 + "ms"; io.observe(el); });

/* Newsletter form */
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  const v = document.getElementById("email").value.trim(), m = document.getElementById("msg");
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  m.textContent = ok ? "Welcome to the Circle. Your first invitation is on its way." : "Enter a valid email address, for example name@email.com.";
  if (ok) e.target.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
