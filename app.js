/* ─── i18n ─── */
const translations = {
  es: {
    "nav.services": "Servicios",
    "nav.why": "Por qué nosotros",
    "nav.contact": "Contacto",
    "hero.badge": "Para Negocios en Puerto Rico",
    "hero.slogan": "Simplificando la Tecnología",
    "hero.sub": "Ayudamos a los negocios a adoptar la tecnología correcta,<br />sin complicaciones y con resultados reales.",
    "hero.cta1": "Habla con un experto",
    "hero.cta2": "Ver servicios",
    "hero.stat1": "Negocios atendidos",
    "hero.stat2": "Soporte disponible",
    "hero.stat3": "Años de experiencia",
    "hero.scroll": "Descubre más",
    "services.tag": "Lo que hacemos",
    "services.title": "Nuestros Servicios",
    "services.sub": "Soluciones tecnológicas diseñadas para que tu negocio crezca sin fricciones.",
    "svc.it.title": "Soporte IT",
    "svc.it.desc": "Mantenimiento preventivo, resolución de problemas y soporte remoto/presencial para mantener tu negocio funcionando sin interrupciones.",
    "svc.it.tag": "24/7 Disponible",
    "svc.net.title": "Redes y Wi-Fi",
    "svc.net.desc": "Diseño, instalación y configuración de redes empresariales con cobertura total, alta velocidad y máxima confiabilidad.",
    "svc.net.tag": "Empresarial",
    "svc.sec.title": "Ciberseguridad",
    "svc.sec.desc": "Protección integral de tus datos, sistemas y redes. Auditorías de seguridad, firewalls y planes de respuesta ante incidentes.",
    "svc.sec.tag": "Protección total",
    "svc.app.title": "Desarrollo de Aplicaciones",
    "svc.app.desc": "Creamos aplicaciones web y móviles a medida para automatizar procesos, mejorar la experiencia de tus clientes y escalar tu negocio.",
    "svc.app.tag": "A la medida",
    "svc.con.title": "Consultoría Tecnológica",
    "svc.con.desc": "Evaluamos tu infraestructura actual y te guiamos hacia las mejores decisiones tecnológicas para reducir costos y aumentar productividad.",
    "svc.con.tag": "Estratégica",
    "why.tag": "Nuestra diferencia",
    "why.title": "¿Por qué EasyTechPR?",
    "why.sub": "No somos solo técnicos — somos tu socio tecnológico.",
    "why.r1.title": "Soluciones simples",
    "why.r1.desc": "Traducimos el lenguaje técnico en soluciones que tu equipo puede entender y usar desde el primer día.",
    "why.r2.title": "Enfocados en tu negocio",
    "why.r2.desc": "Cada solución está diseñada con tus objetivos en mente, no solamente para instalar tecnología.",
    "why.r3.title": "Respuesta rápida",
    "why.r3.desc": "Soporte local en Puerto Rico con tiempos de respuesta reales — cuando hay un problema, estamos ahí.",
    "why.r4.title": "Precios transparentes",
    "why.r4.desc": "Sin sorpresas ni letra pequeña. Sabes exactamente lo que pagas y lo que obtienes.",
    "why.cta": "Comienza hoy",
    "contact.tag": "Hablemos",
    "contact.title": "Contáctanos",
    "contact.sub": "Cuéntanos sobre tu negocio y cómo podemos ayudarte.",
    "contact.email": "Email",
    "contact.phone": "Teléfono",
    "contact.location": "Ubicación",
    "contact.promise": "Respondemos en menos de 24 horas. Tu negocio no puede esperar, y nosotros lo sabemos.",
    "form.name": "Nombre / Empresa",
    "form.email": "Correo electrónico",
    "form.service": "Servicio de interés",
    "form.select": "-- Selecciona un servicio --",
    "form.message": "Mensaje",
    "form.submit": "Enviar mensaje",
    "form.success": "¡Mensaje enviado! Te contactaremos pronto.",
    "footer.slogan": "Simplificando la Tecnología",
    "footer.copy": "© 2025 EasyTechPR. Todos los derechos reservados.",
  },
  en: {
    "nav.services": "Services",
    "nav.why": "Why us",
    "nav.contact": "Contact",
    "hero.badge": "For Businesses in Puerto Rico",
    "hero.slogan": "Simplifying Technology",
    "hero.sub": "We help businesses adopt the right technology,<br />without the complexity and with real results.",
    "hero.cta1": "Talk to an expert",
    "hero.cta2": "View services",
    "hero.stat1": "Businesses served",
    "hero.stat2": "Support available",
    "hero.stat3": "Years of experience",
    "hero.scroll": "Discover more",
    "services.tag": "What we do",
    "services.title": "Our Services",
    "services.sub": "Technology solutions designed to help your business grow without friction.",
    "svc.it.title": "IT Support",
    "svc.it.desc": "Preventive maintenance, troubleshooting, and remote/on-site support to keep your business running without interruptions.",
    "svc.it.tag": "24/7 Available",
    "svc.net.title": "Networks & Wi-Fi",
    "svc.net.desc": "Design, installation, and configuration of enterprise networks with full coverage, high speed, and maximum reliability.",
    "svc.net.tag": "Enterprise",
    "svc.sec.title": "Cybersecurity",
    "svc.sec.desc": "Comprehensive protection for your data, systems, and networks. Security audits, firewalls, and incident response plans.",
    "svc.sec.tag": "Full protection",
    "svc.app.title": "App Development",
    "svc.app.desc": "We build custom web and mobile applications to automate processes, improve your customer experience, and scale your business.",
    "svc.app.tag": "Custom built",
    "svc.con.title": "Technology Consulting",
    "svc.con.desc": "We evaluate your current infrastructure and guide you toward the best technology decisions to reduce costs and increase productivity.",
    "svc.con.tag": "Strategic",
    "why.tag": "Our difference",
    "why.title": "Why EasyTechPR?",
    "why.sub": "We're not just technicians — we're your technology partner.",
    "why.r1.title": "Simple solutions",
    "why.r1.desc": "We translate technical language into solutions your team can understand and use from day one.",
    "why.r2.title": "Business focused",
    "why.r2.desc": "Every solution is designed with your goals in mind, not just to install technology.",
    "why.r3.title": "Fast response",
    "why.r3.desc": "Local support in Puerto Rico with real response times — when there's a problem, we're there.",
    "why.r4.title": "Transparent pricing",
    "why.r4.desc": "No surprises or fine print. You know exactly what you pay and what you get.",
    "why.cta": "Get started today",
    "contact.tag": "Let's talk",
    "contact.title": "Contact us",
    "contact.sub": "Tell us about your business and how we can help.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.promise": "We respond in less than 24 hours. Your business can't wait, and we know it.",
    "form.name": "Name / Company",
    "form.email": "Email address",
    "form.service": "Service of interest",
    "form.select": "-- Select a service --",
    "form.message": "Message",
    "form.submit": "Send message",
    "form.success": "Message sent! We'll be in touch soon.",
    "footer.slogan": "Simplifying Technology",
    "footer.copy": "© 2025 EasyTechPR. All rights reserved.",
  }
};

let lang = "es";

function applyLang() {
  const t = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!t[key]) return;
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = t[key];
    } else {
      el.innerHTML = t[key];
    }
  });
  document.documentElement.lang = lang;
  document.getElementById("langLabel").textContent = lang === "es" ? "EN" : "ES";
  document.querySelector(".lang-flag").textContent = lang === "es" ? "🇵🇷" : "🇺🇸";
}

document.getElementById("langToggle").addEventListener("click", () => {
  lang = lang === "es" ? "en" : "es";
  applyLang();
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

/* ─── SCROLL REVEAL ─── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = "1";
      e.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".service-card, .why-card, .contact-wrap").forEach(el => {
  el.style.cssText += "opacity:0; transform:translateY(30px); transition:opacity 0.6s ease, transform 0.6s ease;";
  observer.observe(el);
});

/* ─── FORM ─── */
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const success = document.getElementById("formSuccess");
  success.classList.add("show");
  e.target.reset();
  setTimeout(() => success.classList.remove("show"), 5000);
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
