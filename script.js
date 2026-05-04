/* ============================================================
 * Portfolio — vanilla JS controller
 * - Sticky nav state + active section highlight
 * - IntersectionObserver scroll reveal
 * - Skill bar fill on reveal
 * - Ripple effect on .btn
 * - Contact form (mailto fallback, no backend)
 * - Populates Projects / Skills / Case Study / About from data.js
 * ============================================================ */

(function () {
  "use strict";

  const { PROJECTS, SKILL_GROUPS, CASE_STUDY, PROFILE } = window.PORTFOLIO_DATA;

  /* ---------- Utilities ---------- */
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (s = "") =>
    String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));

  /* ---------- SVG icons ---------- */
  const iconGitHub = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>`;
  const iconExternal = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
  const iconLinkedIn = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;
  const iconMail = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;

  /* ============================================================
   * Populate: PROJECTS
   * ============================================================ */
  function renderProjects() {
    const host = $("#projects-grid");
    if (!host) return;
    host.innerHTML = PROJECTS.map((p, i) => {
      const idx = String(i + 1).padStart(2, "0");
      const tags = p.stack.map((t) => `<span class="tag">${esc(t)}</span>`).join("");
      return `
        <article class="project-card reveal" data-delay="${(i % 3) * 100}"
                 style="--card-accent: ${esc(p.accent || "rgba(0,212,255,0.35)")}">
          <div class="project-card__head">
            <span class="project-card__index">PRJ / ${idx}</span>
            <span class="project-card__year">${esc(p.year)}</span>
          </div>
          <h3 class="project-card__name">${esc(p.name)}</h3>
          <p class="project-card__desc">${esc(p.description)}</p>
          <div class="tag-row">${tags}</div>
          <div class="project-card__links">
            <a href="${esc(p.repo)}" target="_blank" rel="noopener">
              ${iconGitHub}<span>Código</span>
            </a>
            <a href="${esc(p.demo)}" target="_blank" rel="noopener">
              ${iconExternal}<span>Live demo</span>
            </a>
          </div>
        </article>
      `;
    }).join("");
  }

  /* ============================================================
   * Populate: CASE STUDY
   * ============================================================ */
  function renderCaseStudy() {
    const host = $("#case-study-body");
    if (!host) return;

    const decisions = CASE_STUDY.decisions
      .map((d) => `
        <li>
          <span class="d-label">${esc(d.label)}</span>
          <span class="d-reason">${esc(d.reason)}</span>
        </li>`)
      .join("");

    const results = CASE_STUDY.results
      .map((r) => `
        <div class="result">
          <span class="metric">${esc(r.metric)}</span>
          <span class="label">${esc(r.label)}</span>
        </div>`)
      .join("");

    host.innerHTML = `
      <div class="case-card reveal">
        <div class="case-card__head">
          <h3 class="case-card__title">Case Study — ${esc(CASE_STUDY.project)}</h3>
          <span class="case-card__tag">Featured · 2024</span>
        </div>
        <p class="case-card__tagline">${esc(CASE_STUDY.tagline)}</p>

        <div class="case-grid">
          <div class="case-block">
            <h4>Problema</h4>
            <p>${esc(CASE_STUDY.problem)}</p>
          </div>
          <div class="case-block">
            <h4>Solución</h4>
            <p>${esc(CASE_STUDY.solution)}</p>
          </div>
          <div class="case-block" style="grid-column: 1 / -1;">
            <h4>Decisiones Técnicas</h4>
            <ul class="decisions-list">${decisions}</ul>
          </div>
        </div>

        <div class="results-grid">${results}</div>

        <div class="screenshot-placeholder">
          [ Screenshots placeholder · 1600 × 700 · add build artifacts here ]
        </div>
      </div>
    `;
  }

  /* ============================================================
   * Populate: SKILLS
   * ============================================================ */
  function renderSkills() {
    const host = $("#skills-grid");
    if (!host) return;
    host.innerHTML = SKILL_GROUPS.map((group, i) => {
      const rows = group.items.map((s) => `
        <div class="skill-row">
          <div class="skill-row__name">
            <span>${esc(s.name)}</span>
            <span class="pct">${s.level}%</span>
          </div>
          <div class="skill-bar"><span data-level="${s.level}"></span></div>
        </div>
      `).join("");
      return `
        <article class="skill-card reveal" data-delay="${i * 100}">
          <h3>${esc(group.category)}</h3>
          ${rows}
        </article>
      `;
    }).join("");
  }

  /* ============================================================
   * Populate: ABOUT + CONTACT + HERO text bindings
   * ============================================================ */
  function renderAbout() {
    const host = $("#about-body");
    if (!host) return;
    const diffs = PROFILE.differentiators.map((d) => `
      <li class="diff">
        <span class="diff__title">${esc(d.title)}</span>
        <p>${esc(d.body)}</p>
      </li>
    `).join("");
    host.innerHTML = `
      <span class="eyebrow">About</span>
      <h2 class="section-title">${esc(PROFILE.years)} years building
        <span style="color: var(--accent)">front-ends</span> that<br>don't break at 3 a.m.</h2>
      <p>${esc(PROFILE.bio)}</p>
      <ul class="differentiators">${diffs}</ul>
    `;

    const initials = PROFILE.name.split(" ").map((w) => w[0]).join("").toUpperCase();
    const avatarInitials = $("#avatar-initials");
    if (avatarInitials) avatarInitials.textContent = initials;
    const avatarTag = $("#avatar-tag");
    if (avatarTag) avatarTag.textContent = PROFILE.location;
  }

  function renderContact() {
    const host = $("#socials");
    if (!host) return;
    const { github, linkedin, email } = PROFILE.social;
    host.innerHTML = `
      <a class="social" href="${esc(github)}" target="_blank" rel="noopener">
        ${iconGitHub}<span class="label">github.com/${esc(github.split("/").pop())}</span><span class="arrow">→</span>
      </a>
      <a class="social" href="${esc(linkedin)}" target="_blank" rel="noopener">
        ${iconLinkedIn}<span class="label">linkedin.com/in/${esc(linkedin.split("/").pop())}</span><span class="arrow">→</span>
      </a>
      <a class="social" href="mailto:${esc(email)}">
        ${iconMail}<span class="label">${esc(email)}</span><span class="arrow">→</span>
      </a>
    `;
  }

  function renderHero() {
    const roleEl = $("#hero-role");
    if (roleEl) {
      roleEl.innerHTML =
        `<span>Frontend Developer</span><span class="sep"></span>` +
        `<span>Angular Specialist</span><span class="sep"></span>` +
        `<span>${esc(PROFILE.location)}</span><span class="caret"></span>`;
    }
  }

  /* ============================================================
   * Sticky navbar + active section highlight
   * ============================================================ */
  function initNavbar() {
    const nav = $(".navbar");
    const links = $$(".nav-link, .mobile-menu a");
    const toggle = $(".nav-toggle");
    const mobile = $(".mobile-menu");

    const onScroll = () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Active section
    const sections = $$("section[id]");
    const map = new Map(sections.map((s) => [s.id, s]));
    const onActive = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0]?.id;
      sections.forEach((s) => {
        if (s.offsetTop <= y) current = s.id;
      });
      links.forEach((l) => {
        const href = l.getAttribute("href") || "";
        l.classList.toggle("is-active", href === `#${current}`);
      });
    };
    onActive();
    window.addEventListener("scroll", onActive, { passive: true });

    // Mobile menu
    if (toggle && mobile) {
      toggle.addEventListener("click", () => {
        mobile.classList.toggle("is-open");
      });
      mobile.addEventListener("click", (e) => {
        if (e.target.tagName === "A") mobile.classList.remove("is-open");
      });
    }
  }

  /* ============================================================
   * Scroll reveal + skill bar fill
   * ============================================================ */
  function initReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      fillSkillBars(document);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // If it's a skill card, animate its bars
          if (entry.target.matches(".skill-card")) {
            fillSkillBars(entry.target);
          }
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -60px 0px" });
    els.forEach((el) => io.observe(el));
  }

  function fillSkillBars(root) {
    $$(".skill-bar > span", root).forEach((bar) => {
      const level = Number(bar.dataset.level || 0);
      // Defer one frame so transition kicks in
      requestAnimationFrame(() => { bar.style.width = `${level}%`; });
    });
  }

  /* ============================================================
   * Ripple effect
   * ============================================================ */
  function initRipple() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn");
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const r = document.createElement("span");
      r.className = "ripple";
      const size = Math.max(rect.width, rect.height) * 0.5;
      r.style.width = `${size}px`;
      r.style.height = `${size}px`;
      r.style.left = `${e.clientX - rect.left}px`;
      r.style.top  = `${e.clientY - rect.top}px`;
      btn.appendChild(r);
      setTimeout(() => r.remove(), 620);
    });
  }

  /* ============================================================
   * Contact form — no backend; open mail client
   * ============================================================ */
  function initForm() {
    const form = $("#contact-form");
    if (!form) return;
    const status = $("#form-status");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get("name") || "").toString().trim();
      const email = (data.get("email") || "").toString().trim();
      const msg = (data.get("message") || "").toString().trim();
      if (!name || !email || !msg) {
        status.textContent = "— fill in all fields to send";
        status.style.color = "#FF6B9D";
        status.classList.add("is-visible");
        return;
      }

      const subject = encodeURIComponent(`Portfolio · ${name}`);
      const body = encodeURIComponent(`${msg}\n\n— ${name} <${email}>`);
      window.location.href = `mailto:${PROFILE.social.email}?subject=${subject}&body=${body}`;

      status.textContent = "✓ opening your mail client…";
      status.style.color = "#30E0A1";
      status.classList.add("is-visible");
      form.reset();
      setTimeout(() => status.classList.remove("is-visible"), 4000);
    });
  }

  /* ============================================================
   * Smooth scroll for in-page anchors (respects prefers-reduced-motion)
   * ============================================================ */
  function initSmoothScroll() {
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const prefersReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({
        behavior: prefersReduced ? "auto" : "smooth",
        block: "start",
      });
    });
  }

  /* ============================================================
   * Footer year
   * ============================================================ */
  function initFooter() {
    const y = $("#footer-year");
    if (y) y.textContent = new Date().getFullYear();
    const name = $("#footer-name");
    if (name) name.textContent = PROFILE.name;
  }

  /* ---------- Boot ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderProjects();
    renderCaseStudy();
    renderSkills();
    renderAbout();
    renderContact();
    initNavbar();
    initReveal();
    initRipple();
    initForm();
    initSmoothScroll();
    initFooter();
  });
})();
