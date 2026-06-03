/* ─── MOTION ─── */
const { animate, inView, scroll, stagger, spring } = Motion;

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
  animate("#langToggle", { scale: [0.88, 1] }, {
    duration: 0.4,
    easing: spring({ stiffness: 400, damping: 15 })
  });
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
  animate("#hamburger", { scale: [0.85, 1] }, {
    duration: 0.3,
    easing: spring({ stiffness: 400, damping: 18 })
  });
});
navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

/* ─── PARTICLES ─── */
const colors = ["#FF6B00","#FFAD00","#22C55E","#F43F8D","#4ADE80","#FF8C00"];
const particleContainer = document.getElementById("particles");

function createParticle() {
  const p = document.createElement("div");
  p.className = "particle";
  const size = 3 + Math.random() * 7;
  p.style.cssText = `
    width:${size}px; height:${size}px;
    left:${Math.random()*100}%;
    background:${colors[Math.floor(Math.random()*colors.length)]};
    animation-duration:${9+Math.random()*13}s;
    animation-delay:${Math.random()*8}s;
  `;
  particleContainer.appendChild(p);
  setTimeout(() => p.remove(), 22000);
}
for (let i = 0; i < 18; i++) createParticle();
setInterval(createParticle, 1400);

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
      typewriterTimer = setTimeout(type, 44);
    }
  }
  type();
}

/* ─── HERO ENTRANCE (Motion — all parallel with staggered delays) ─── */
function heroEntrance() {
  animate(".hero-badge",
    { opacity: [0, 1], y: [-10, 0] },
    { duration: 0.5, delay: 0.05, easing: [0.22, 1, 0.36, 1] }
  );
  animate(".hero-logo-wrap",
    { opacity: [0, 1], scale: [0.82, 1] },
    { duration: 0.6, delay: 0.15, easing: spring({ stiffness: 200, damping: 16 }) }
  );
  // Make h1 visible and start typewriter after short delay
  setTimeout(() => {
    animate("#typewriterTarget", { opacity: 1 }, { duration: 0 });
    startTypewriter();
  }, 280);
  animate(".hero-sub",
    { opacity: [0, 1], y: [16, 0] },
    { duration: 0.5, delay: 0.45, easing: [0.22, 1, 0.36, 1] }
  );
  animate(".hero-cta",
    { opacity: [0, 1], y: [16, 0] },
    { duration: 0.5, delay: 0.6, easing: [0.22, 1, 0.36, 1] }
  );
  animate(".hero-stats",
    { opacity: [0, 1], y: [12, 0] },
    { duration: 0.5, delay: 0.75, easing: [0.22, 1, 0.36, 1] }
  );
  animate(".hero-scroll",
    { opacity: [0, 0.6] },
    { duration: 0.4, delay: 1.0, easing: [0.22, 1, 0.36, 1] }
  );
}

/* ─── HERO PARALLAX (Motion scroll-linked) ─── */
// Removed — caused visual jump on page load

/* ─── SCROLL REVEAL (CSS transitions + IntersectionObserver — no Motion dependency) ─── */
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

/* ─── ANIMATED COUNTERS (Motion animate with onUpdate) ─── */
document.querySelectorAll("[data-count]").forEach(el => {
  inView(el, () => {
    if (el.dataset.counted) return;
    el.dataset.counted = "1";
    const to = parseInt(el.getAttribute("data-count"), 10);
    animate(0, to, {
      duration: 1.8,
      easing: [0.22, 1, 0.36, 1],
      onUpdate: v => { el.textContent = Math.round(v); }
    });
  }, { amount: 0.5 });
});

/* ─── CARD HOVER SPRINGS (Why + Testimonial cards) ─── */
document.querySelectorAll(".why-card, .testimonial-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    animate(card, { y: -6 }, {
      duration: 0.4,
      easing: spring({ stiffness: 260, damping: 18 })
    });
  });
  card.addEventListener("mouseleave", () => {
    animate(card, { y: 0 }, {
      duration: 0.4,
      easing: spring({ stiffness: 300, damping: 22 })
    });
  });
});

/* ─── 3D TILT ON SERVICE CARDS ─── */
document.querySelectorAll(".service-card").forEach(card => {
  let tx = 0, ty = 0, rafId = null;

  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    tx = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    ty = -((e.clientY - rect.top) / rect.height - 0.5) * 12;

    if (!rafId) {
      rafId = requestAnimationFrame(() => {
        card.style.transform = `perspective(700px) rotateY(${tx}deg) rotateX(${ty}deg) translateY(-6px)`;
        rafId = null;
      });
    }
  });

  card.addEventListener("mouseleave", () => {
    cancelAnimationFrame(rafId);
    rafId = null;
    // Snapshot current values then spring back via Motion
    const fromX = tx, fromY = ty;
    tx = 0; ty = 0;
    card.style.transform = "";
    animate(card,
      { rotateY: [fromX, 0], rotateX: [fromY, 0], y: [-6, 0] },
      { easing: spring({ stiffness: 200, damping: 22 }) }
    );
  });
});

/* ─── BUTTON PRESS FEEDBACK ─── */
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mousedown", () => {
    animate(btn, { scale: 0.95 }, { duration: 0.12, easing: [0.22, 1, 0.36, 1] });
  });
  btn.addEventListener("mouseup", () => {
    animate(btn, { scale: 1 }, {
      duration: 0.35,
      easing: spring({ stiffness: 400, damping: 16 })
    });
  });
  btn.addEventListener("mouseleave", () => {
    animate(btn, { scale: 1 }, { duration: 0.2 });
  });
});

/* ─── INFO ICON HOVER ─── */
document.querySelectorAll(".info-item").forEach(item => {
  const icon = item.querySelector(".info-icon");
  if (!icon) return;
  item.addEventListener("mouseenter", () => {
    animate(icon, { scale: 1.1, rotate: -5 }, {
      duration: 0.35,
      easing: spring({ stiffness: 350, damping: 15 })
    });
  });
  item.addEventListener("mouseleave", () => {
    animate(icon, { scale: 1, rotate: 0 }, {
      duration: 0.3,
      easing: spring({ stiffness: 350, damping: 20 })
    });
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
  animate(btn, { scale: [1, 0.97] }, { duration: 0.1 });

  try {
    const data = new FormData(form);
    const res  = await fetch(form.action, { method: "POST", body: data, headers: { Accept: "application/json" } });
    if (res.ok) {
      success.classList.add("show");
      animate(success, { opacity: [0, 1], y: [-8, 0] }, { duration: 0.4, easing: [0.22, 1, 0.36, 1] });
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
    animate(btn, { scale: 1 }, { duration: 0.3, easing: spring({ stiffness: 400, damping: 20 }) });
  }
});

/* ─── ACTIVE NAV LINKS ─── */
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(sec => {
    const top  = sec.offsetTop;
    const h    = sec.offsetHeight;
    const link = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
    if (link) link.style.color = scrollY >= top && scrollY < top + h ? "var(--orange)" : "";
  });
}, { passive: true });

/* ─── PARTICLE NETWORK CANVAS ─── */
(function () {
  const canvas  = document.getElementById("netCanvas");
  if (!canvas) return;
  const section = canvas.closest(".network-section");
  const ctx     = canvas.getContext("2d");

  const COUNT        = 75;
  const CONNECT_DIST = 130;
  const MOUSE_R      = 170;
  const mouse        = { x: null, y: null };
  let   animId       = null;
  let   running      = false;

  function resize() {
    canvas.width  = section.offsetWidth;
    canvas.height = section.offsetHeight;
  }
  window.addEventListener("resize", resize, { passive: true });
  resize();

  class Dot {
    constructor() { this.init(); }
    init() {
      this.x  = Math.random() * canvas.width;
      this.y  = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.r  = 1.4 + Math.random() * 1.4;
    }
    tick() {
      if (mouse.x !== null) {
        const dx   = this.x - mouse.x;
        const dy   = this.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < MOUSE_R && dist > 0) {
          const f = (MOUSE_R - dist) / MOUSE_R * 0.13;
          this.vx += (dx / dist) * f;
          this.vy += (dy / dist) * f;
        }
      }
      const spd = Math.hypot(this.vx, this.vy);
      if (spd > 1.6) { this.vx = this.vx / spd * 1.6; this.vy = this.vy / spd * 1.6; }
      this.vx *= 0.993;
      this.vy *= 0.993;
      this.x  += this.vx;
      this.y  += this.vy;
      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width)  this.x = 0;
      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;
    }
  }

  const dots = Array.from({ length: COUNT }, () => new Dot());

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < dots.length; i++) {
      dots[i].tick();

      /* draw dot */
      ctx.beginPath();
      ctx.arc(dots[i].x, dots[i].y, dots[i].r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,107,0,0.8)";
      ctx.fill();

      /* draw connecting lines */
      for (let j = i + 1; j < dots.length; j++) {
        const dx   = dots[i].x - dots[j].x;
        const dy   = dots[i].y - dots[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < CONNECT_DIST) {
          const alpha = (1 - dist / CONNECT_DIST) * 0.22;
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = `rgba(255,107,0,${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      /* glow dot near mouse */
      if (mouse.x !== null) {
        const dist = Math.hypot(dots[i].x - mouse.x, dots[i].y - mouse.y);
        if (dist < MOUSE_R) {
          ctx.beginPath();
          ctx.arc(dots[i].x, dots[i].y, dots[i].r * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,173,0,${(1 - dist / MOUSE_R) * 0.35})`;
          ctx.fill();

          /* extra line from dot to mouse */
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(255,107,0,${(1 - dist / MOUSE_R) * 0.15})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animId = requestAnimationFrame(frame);
  }

  section.addEventListener("mousemove", e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  section.addEventListener("mouseleave", () => { mouse.x = null; mouse.y = null; });

  /* Pause when off-screen for performance */
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !running) {
        running = true;
        frame();
      } else if (!e.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(animId);
      }
    });
  }, { threshold: 0.05 }).observe(section);
})();

/* ─── INIT ─── */
heroEntrance();
