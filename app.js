/* ─── i18n ─── */
const translations = {
  es: {
    "nav.services": "Servicios",
    "nav.why": "Por qué nosotros",
    "nav.testimonials": "Clientes",
    "nav.contact": "Contacto",
    "hero.badge": "El aliado tech #1 de Puerto Rico",
    "hero.slogan": "Tu negocio merece tecnología que sí funciona",
    "hero.sub": "Cada minuto de falla tecnológica te cuesta dinero.<br />Nosotros lo evitamos — para siempre.",
    "hero.cta1": "Obtén una consulta gratis",
    "hero.cta2": "¿Qué podemos hacer por ti?",
    "hero.stat1": "Negocios atendidos",
    "hero.stat3": "Años de experiencia",
    "hero.scroll": "Descubre más",
    "services.tag": "Lo que hacemos",
    "services.title": "Soluciones que mueven tu negocio",
    "services.sub": "Tecnología que trabaja para ti — no al revés.",
    "svc.it.title": "Soporte IT",
    "svc.it.desc": "Problemas resueltos antes de que los notes. Soporte remoto y presencial para que tu negocio nunca pare.",
    "svc.net.title": "Redes y Wi-Fi",
    "svc.net.desc": "Una red lenta mata ventas. Te damos la infraestructura que tu negocio necesita para operar rápido y sin caídas.",
    "svc.sec.title": "Ciberseguridad",
    "svc.sec.desc": "Un solo ataque puede cerrar tu negocio. Te blindamos con auditorías, firewalls y respuesta ante incidentes para que duermas tranquilo.",
    "svc.app.title": "Desarrollo de Aplicaciones",
    "svc.app.desc": "Convierte procesos manuales en una máquina automática. Apps web y móviles que trabajan para ti mientras atiendes tu negocio.",
    "svc.con.title": "Consultoría Tecnológica",
    "svc.con.desc": "No compres tecnología a ciegas. Te decimos exactamente qué necesitas, qué te sobra y cómo ahorrar sin sacrificar resultados.",
    "why.tag": "Nuestra diferencia",
    "why.title": "¿Por qué EasyTechPR?",
    "why.sub": "No somos solo técnicos — somos el equipo que hace crecer tu negocio.",
    "why.r1.title": "Sin jerigonza técnica",
    "why.r1.desc": "Te hablamos en tu idioma. Soluciones que tu equipo entiende y usa desde el primer día, sin curva de aprendizaje.",
    "why.r2.title": "Obsesionados con tu éxito",
    "why.r2.desc": "No instalamos tecnología por instalarla. Cada decisión que tomamos tiene un solo objetivo: que tu negocio gane más.",
    "why.r3.title": "Aquí cuando más lo necesitas",
    "why.r3.desc": "Soporte local en Puerto Rico. Cuando algo falla, no esperas horas — estamos ahí, rápido y de verdad.",
    "why.r4.title": "Precios sin letra pequeña",
    "why.r4.desc": "Cero sorpresas. Sabes exactamente lo que pagas, lo que obtienes y el resultado que puedes esperar.",
    "why.cta": "Empieza hoy — es gratis",
    "testi.tag": "Lo que dicen nuestros clientes",
    "testi.title": "Resultados reales, negocios reales",
    "testi.sub": "Más de 150 negocios en Puerto Rico ya confían en nosotros.",
    "testi.q1": "\"EasyTechPR nos desarrolló un sistema completo para manejar estudiantes, cursos, pagos y eventos. Transformaron toda la operación del conservatorio en una plataforma que realmente funciona.\"",
    "testi.q2": "\"Desde Pennsylvania confío en EasyTechPR para todo: las computadoras, las cuentas de Microsoft 365 y el dominio de H3Homecare. Responden rápido y nunca me han fallado.\"",
    "testi.q3": "\"EasyTechPR maneja todas nuestras computadoras, la red y nos asesora cuando necesitamos crecer. Gracias a ellos el laboratorio opera sin interrupciones todos los días.\"",
    "contact.tag": "Hablemos",
    "contact.title": "Da el primer paso hoy",
    "contact.sub": "Una conversación puede cambiar el rumbo de tu negocio. Y es completamente gratis.",
    "contact.email": "Email",
    "contact.phone": "Teléfono",
    "contact.location": "Ubicación",
    "contact.promise": "¿Listo para crecer? Escríbenos ahora — respondemos hoy mismo y la primera consulta es completamente gratis.",
    "form.name": "Nombre / Empresa",
    "form.email": "Correo electrónico",
    "form.phone": "Teléfono",
    "form.service": "Servicio de interés",
    "form.select": "-- Selecciona un servicio --",
    "form.message": "Mensaje",
    "form.submit": "Enviar mensaje",
    "form.success": "¡Mensaje enviado! Te contactaremos pronto.",
    "footer.slogan": "Tu negocio merece tecnología que sí funciona",
    "footer.copy": "© 2025 EasyTechPR. Todos los derechos reservados.",
  },
  en: {
    "nav.services": "Services",
    "nav.why": "Why us",
    "nav.testimonials": "Clients",
    "nav.contact": "Contact",
    "hero.badge": "Puerto Rico's #1 Tech Partner",
    "hero.slogan": "Your business deserves technology that actually works",
    "hero.sub": "Every minute of tech failure costs you money.<br />We prevent it — for good.",
    "hero.cta1": "Get a free consultation",
    "hero.cta2": "What can we do for you?",
    "hero.stat1": "Businesses served",
    "hero.stat3": "Years of experience",
    "hero.scroll": "Discover more",
    "services.tag": "What we do",
    "services.title": "Solutions that move your business",
    "services.sub": "Technology that works for you — not the other way around.",
    "svc.it.title": "IT Support",
    "svc.it.desc": "Problems solved before you notice them. Remote and on-site support so your business never stops.",
    "svc.net.title": "Networks & Wi-Fi",
    "svc.net.desc": "A slow network kills sales. We give you the infrastructure your business needs to run fast without downtime.",
    "svc.sec.title": "Cybersecurity",
    "svc.sec.desc": "One attack can shut down your business. We protect you with audits, firewalls, and incident response so you can sleep easy.",
    "svc.app.title": "App Development",
    "svc.app.desc": "Turn manual processes into an automated machine. Web and mobile apps that work for you while you focus on your business.",
    "svc.con.title": "Technology Consulting",
    "svc.con.desc": "Don't buy technology blindly. We tell you exactly what you need, what you don't, and how to save money without sacrificing results.",
    "why.tag": "Our difference",
    "why.title": "Why EasyTechPR?",
    "why.sub": "We're not just technicians — we're the team that grows your business.",
    "why.r1.title": "No tech jargon",
    "why.r1.desc": "We speak your language. Solutions your team understands and uses from day one, with no learning curve.",
    "why.r2.title": "Obsessed with your success",
    "why.r2.desc": "We don't install technology for the sake of it. Every decision we make has one goal: making your business more profitable.",
    "why.r3.title": "Here when you need us most",
    "why.r3.desc": "Local support in Puerto Rico. When something fails, you don't wait hours — we're there, fast and for real.",
    "why.r4.title": "No hidden fees",
    "why.r4.desc": "Zero surprises. You know exactly what you pay, what you get, and what results to expect.",
    "why.cta": "Start today — it's free",
    "testi.tag": "What our clients say",
    "testi.title": "Real results, real businesses",
    "testi.sub": "Over 150 businesses in Puerto Rico already trust us.",
    "testi.q1": "\"EasyTechPR built us a complete system to manage students, courses, payments, and events. They transformed the conservatory's entire operation into a platform that truly works.\"",
    "testi.q2": "\"From Pennsylvania I trust EasyTechPR with everything: computers, Microsoft 365 accounts, and the H3Homecare domain. They respond fast and have never let me down.\"",
    "testi.q3": "\"EasyTechPR handles all our computers, the network, and advises us when we need to grow. Thanks to them, the lab runs without interruptions every day.\"",
    "contact.tag": "Let's talk",
    "contact.title": "Take the first step today",
    "contact.sub": "One conversation can change the direction of your business. And it's completely free.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.promise": "Ready to grow? Write to us now — we respond today and the first consultation is completely free.",
    "form.name": "Name / Company",
    "form.email": "Email address",
    "form.phone": "Phone number",
    "form.service": "Service of interest",
    "form.select": "-- Select a service --",
    "form.message": "Message",
    "form.submit": "Send message",
    "form.success": "Message sent! We'll be in touch soon.",
    "footer.slogan": "Your business deserves technology that actually works",
    "footer.copy": "© 2025 EasyTechPR. All rights reserved.",
  }
};

let lang = "es";

const HTML_KEYS = new Set(["hero.sub", "testi.q1", "testi.q2", "testi.q3"]);

function applyLang() {
  const t = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!t[key]) return;
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = t[key];
    } else if (HTML_KEYS.has(key)) {
      el.innerHTML = t[key];
    } else {
      el.textContent = t[key];
    }
  });
  document.documentElement.lang = lang;
  document.getElementById("langLabel").textContent = lang === "es" ? "EN" : "ES";
  document.querySelector(".lang-flag").textContent = lang === "es" ? "🇵🇷" : "🇺🇸";
}

document.getElementById("langToggle").addEventListener("click", () => {
  lang = lang === "es" ? "en" : "es";
  applyLang();
  startTypewriter();
});

/* ─── NAVBAR SCROLL ─── */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

/* ─── HAMBURGER ─── */
const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

/* ─── PARTICLES ─── */
const colors = ["#FF6B00","#FFB800","#4AAD00","#E91E8C","#7ED321","#FF8C00"];
const container = document.getElementById("particles");

function createParticle() {
  const p = document.createElement("div");
  p.className = "particle";
  const size = 4 + Math.random() * 8;
  p.style.cssText = `
    width:${size}px; height:${size}px;
    left:${Math.random()*100}%;
    background:${colors[Math.floor(Math.random()*colors.length)]};
    animation-duration:${8+Math.random()*12}s;
    animation-delay:${Math.random()*8}s;
  `;
  container.appendChild(p);
  setTimeout(() => p.remove(), 20000);
}

for (let i = 0; i < 20; i++) createParticle();
setInterval(createParticle, 1200);

/* ─── TYPEWRITER ─── */
let typewriterTimer = null;

function startTypewriter() {
  const el = document.getElementById("typewriterTarget");
  if (!el) return;
  const text = translations[lang]["hero.slogan"];
  clearTimeout(typewriterTimer);
  el.innerHTML = '<span class="tw-cursor"></span>';
  let i = 0;
  function type() {
    if (i <= text.length) {
      el.innerHTML = text.slice(0, i) + '<span class="tw-cursor"></span>';
      i++;
      typewriterTimer = setTimeout(type, 45);
    }
  }
  type();
}

/* ─── ANIMATED COUNTERS ─── */
function animateCounter(el) {
  const target = parseInt(el.getAttribute("data-count"), 10);
  const duration = 1800;
  const step = 16;
  const increments = Math.ceil(duration / step);
  let current = 0;
  const timer = setInterval(() => {
    current++;
    el.textContent = Math.round((target / increments) * current);
    if (current >= increments) {
      el.textContent = target;
      clearInterval(timer);
    }
  }, step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting && !e.target.dataset.counted) {
      e.target.dataset.counted = "1";
      animateCounter(e.target);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll("[data-count]").forEach(el => counterObserver.observe(el));

/* ─── SCROLL REVEAL ─── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const delay = e.target.dataset.revealDelay || 0;
      setTimeout(() => e.target.classList.add("revealed"), parseInt(delay));
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll("[data-reveal]").forEach(el => revealObserver.observe(el));

/* ─── 3D TILT ON CARDS ─── */
document.querySelectorAll(".service-card").forEach(card => {
  let rafId = null;
  let tx = 0, ty = 0;

  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    tx = x * 12; ty = -y * 12;

    if (!rafId) {
      rafId = requestAnimationFrame(function tick() {
        card.style.transform = `perspective(700px) rotateY(${tx}deg) rotateX(${ty}deg) translateY(-6px)`;
        rafId = null;
      });
    }
  });

  card.addEventListener("mouseleave", () => {
    cancelAnimationFrame(rafId);
    rafId = null;
    card.style.transition = "transform 0.5s cubic-bezier(0.23,1,0.32,1), border-color 0.3s, box-shadow 0.3s";
    card.style.transform = "";
    setTimeout(() => { card.style.transition = ""; }, 500);
  });
});

/* ─── FORM ─── */
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form    = e.target;
  const btn     = form.querySelector("button[type=submit]");
  const success = document.getElementById("formSuccess");

  btn.disabled = true;
  btn.textContent = lang === "es" ? "Enviando…" : "Sending…";

  try {
    const data = new FormData(form);
    const res  = await fetch(form.action, { method: "POST", body: data, headers: { Accept: "application/json" } });
    if (res.ok) {
      success.classList.add("show");
      form.reset();
      setTimeout(() => success.classList.remove("show"), 6000);
    } else {
      alert(lang === "es" ? "Error al enviar. Intenta de nuevo." : "Send error. Please try again.");
    }
  } catch {
    alert(lang === "es" ? "Error de red. Verifica tu conexión." : "Network error. Check your connection.");
  } finally {
    btn.disabled = false;
    btn.textContent = translations[lang]["form.submit"];
  }
});

/* ─── ACTIVE NAV LINKS ─── */
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const h   = sec.offsetHeight;
    const link = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
    if (link) link.style.color = scrollY >= top && scrollY < top + h ? "var(--orange)" : "";
  });
}, { passive: true });

/* ─── INIT ─── */
startTypewriter();
