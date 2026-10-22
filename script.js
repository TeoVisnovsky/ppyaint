/* =========================================================
   PAPAYA INTERNATIONAL – SCRIPT
   Renders content from data.js and handles interactions.
   ========================================================= */
(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const esc = (str = "") =>
    String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const STATUS_LABELS = { upcoming: "Upcoming", ongoing: "Ongoing", completed: "Completed" };

  const ICONS = {
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    cal: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
    tag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12V4h8l10 10-8 8L3 12z"/><circle cx="7.5" cy="8.5" r="1.5"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.63V21h-4z"/></svg>'
  };

  /** Image or grey placeholder */
  function media(src, label, alt) {
    if (src) return `<img src="${esc(src)}" alt="${esc(alt || label)}" loading="lazy">`;
    return `<div class="ph" role="img" aria-label="Placeholder: ${esc(label)}"><span>[${esc(label)}]</span></div>`;
  }

  /* ---------- Site-wide values (email, socials, IČO…) ---------- */
  function fillSiteData() {
    if (typeof SITE === "undefined") return;
    $$("[data-site]").forEach((el) => {
      const key = el.dataset.site;
      const val = SITE[key];
      if (val === undefined) return;
      if (key === "email") {
        el.href = `mailto:${val}`;
        if (!el.textContent.trim()) el.textContent = val;
      } else if (el.tagName === "A") {
        el.href = val;
      } else {
        el.textContent = val;
      }
    });
    $("#year").textContent = new Date().getFullYear();
  }

  /* ---------- Projects ---------- */
  function projectCard(p) {
    return `
      <article class="project-card reveal" data-status="${esc(p.status)}">
        <div class="project-media">
          ${media(p.image, "PROJECT PHOTO", p.title)}
          <span class="status status-${esc(p.status)}">${STATUS_LABELS[p.status] || esc(p.status)}</span>
        </div>
        <div class="project-body">
          <div class="tags">
            <span class="tag tag-action">${esc(p.action)}</span>
            <span class="tag">${esc(p.topic)}</span>
          </div>
          <h3><button type="button" data-project="${esc(p.id)}" aria-haspopup="dialog">${esc(p.title)}</button></h3>
          <p class="project-summary">${esc(p.summary)}</p>
          <ul class="project-meta">
            <li>${ICONS.pin}<span class="sr-only">Country:</span>${esc(p.country)}</li>
            <li>${ICONS.cal}<span class="sr-only">Date:</span>${esc(p.date)}</li>
          </ul>
        </div>
      </article>`;
  }

  function renderProjects(filter = "all") {
    const grid = $("#projects-grid");
    const list = PROJECTS.filter((p) => filter === "all" || p.status === filter);
    grid.innerHTML = list.length
      ? list.map(projectCard).join("")
      : `<p class="empty">No ${esc(STATUS_LABELS[filter] || "").toLowerCase()} projects right now – check back soon!</p>`;
    observeReveals(grid);
  }

  function initFilters() {
    $$(".filter").forEach((btn) =>
      btn.addEventListener("click", () => {
        $$(".filter").forEach((b) => {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-pressed", b === btn);
        });
        renderProjects(btn.dataset.filter);
      })
    );
  }

  /* ---------- Project modal ---------- */
  const modal = $("#project-modal");
  let lastFocus = null;

  function openProject(id) {
    const p = PROJECTS.find((x) => x.id === id);
    if (!p) return;
    lastFocus = document.activeElement;

    const gallery = (p.gallery || [])
      .map((src, i) => media(src, `PHOTO ${i + 1}`, `${p.title} – photo ${i + 1}`))
      .join("");

    $(".modal-body", modal).innerHTML = `
      <div class="modal-hero">${media(p.image, "PROJECT PHOTO", p.title)}</div>
      <div class="modal-content">
        <div class="tags">
          <span class="status status-${esc(p.status)}" style="position:static">${STATUS_LABELS[p.status] || esc(p.status)}</span>
          <span class="tag tag-action">${esc(p.action)}</span>
        </div>
        <h2 id="modal-title">${esc(p.title)}</h2>
        <ul class="facts">
          <li><span>Type</span>${esc(p.actionLabel || p.action)}</li>
          <li><span>Country</span>${esc(p.country)}</li>
          <li><span>Date</span>${esc(p.date)}</li>
          <li><span>Topic</span>${esc(p.topic)}</li>
        </ul>
        <p>${esc(p.description)}</p>
        ${p.partners && p.partners.length ? `
          <h3>Partners</h3>
          <ul class="partner-list">${p.partners.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
        ${gallery ? `<h3>Gallery</h3><div class="gallery">${gallery}</div>` : ""}
      </div>`;

    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
    document.body.classList.add("modal-open");
    modal.scrollTop = 0;
    $(".modal-close", modal).focus();
  }

  function closeProject() {
    if (modal.close) modal.close();
    else modal.removeAttribute("open");
  }

  function initModal() {
    $("#projects-grid").addEventListener("click", (e) => {
      const card = e.target.closest(".project-card");
      if (card) openProject($("[data-project]", card).dataset.project);
    });
    $(".modal-close", modal).addEventListener("click", closeProject);
    // click on the backdrop closes the dialog
    modal.addEventListener("click", (e) => { if (e.target === modal) closeProject(); });
    modal.addEventListener("close", () => {
      document.body.classList.remove("modal-open");
      if (lastFocus) lastFocus.focus();
    });
  }

  /* ---------- Team ---------- */
  function renderTeam() {
    $("#team-grid").innerHTML = TEAM.map((m) => `
      <li class="team-card reveal">
        <div class="team-photo">${media(m.image, "PHOTO", m.name)}</div>
        <div class="team-body">
          <h3>${esc(m.name)}</h3>
          <p class="team-role">${esc(m.role)}</p>
          <p class="team-bio">${esc(m.bio)}</p>
          ${m.linkedin ? `<a class="linkedin" href="${esc(m.linkedin)}" target="_blank" rel="noopener">${ICONS.linkedin}<span>LinkedIn<span class="sr-only"> – ${esc(m.name)}</span></span></a>` : ""}
        </div>
      </li>`).join("");
  }

  /* ---------- Partners & supporters ---------- */
  function logoCard(o, withCountry) {
    return `
      <li class="reveal">
        <a class="logo-card" href="${esc(o.url || "#")}" ${o.url && o.url !== "#" ? 'target="_blank" rel="noopener"' : ""}>
          <div class="logo-img${o.logo ? "" : " ph"}" ${o.logo ? "" : `role="img" aria-label="Placeholder logo"`}>
            ${o.logo ? `<img src="${esc(o.logo)}" alt="${esc(o.name)} logo" loading="lazy">` : "<span>[LOGO]</span>"}
          </div>
          <span class="logo-name">${esc(o.name)}</span>
          ${withCountry && o.country ? `<span class="logo-country">${esc(o.country)}</span>` : ""}
        </a>
      </li>`;
  }

  function renderPartners() {
    $("#partners-grid").innerHTML = PARTNERS.map((o) => logoCard(o, true)).join("");
    $("#supporters-grid").innerHTML = SUPPORTERS.map((o) => logoCard(o, false)).join("");
  }

  /* ---------- News (3 newest) ---------- */
  function renderNews() {
    const fmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });
    const latest = [...NEWS].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
    $("#news-grid").innerHTML = latest.map((n) => `
      <article class="news-card reveal">
        <div class="news-media">${media(n.image, "NEWS PHOTO", n.title)}</div>
        <div class="news-body">
          <time datetime="${esc(n.date)}">${fmt.format(new Date(n.date))}</time>
          <h3>${esc(n.title)}</h3>
          <p>${esc(n.excerpt)}</p>
          <a class="more" href="${esc(n.url || "#")}">Read more<span class="sr-only">: ${esc(n.title)}</span> →</a>
        </div>
      </article>`).join("");
  }

  /* ---------- Navigation ---------- */
  function initNav() {
    const toggle = $(".nav-toggle");
    const nav = $("#site-nav");
    const header = $(".site-header");

    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", open);
      nav.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    $$("a", nav).forEach((a) => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });

    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // highlight the section currently in view
    if ("IntersectionObserver" in window) {
      const links = $$('a[href^="#"]:not(.btn)', nav);
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((l) => {
            const on = l.getAttribute("href") === `#${entry.target.id}`;
            l.classList.toggle("is-current", on);
            if (on) l.setAttribute("aria-current", "true"); else l.removeAttribute("aria-current");
          });
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      $$("main section[id]").forEach((s) => io.observe(s));
    }

    // "Get involved" buttons pre-fill the contact message
    $$("[data-subject]").forEach((btn) =>
      btn.addEventListener("click", () => {
        const msg = $("#cf-message");
        if (!msg.value.trim()) msg.value = `${btn.dataset.subject}.\n\n`;
      })
    );
  }

  /* ---------- Scroll reveal ---------- */
  let revealObserver = null;
  function observeReveals(root = document) {
    const els = $$(".reveal:not(.is-visible)", root);
    if (!revealObserver) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    els.forEach((el) => revealObserver.observe(el));
  }
  function initReveal() {
    if ("IntersectionObserver" in window) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    }
    observeReveals();
  }

  /* ---------- Contact form ---------- */
  function initForm() {
    const form = $("#contact-form");
    const status = $(".form-status", form);
    const fields = {
      name: { el: $("#cf-name"), msg: "Please enter your name." },
      email: { el: $("#cf-email"), msg: "Please enter a valid e-mail address." },
      message: { el: $("#cf-message"), msg: "Please write a message." },
      gdpr: { el: $("#cf-gdpr"), msg: "Please agree to the processing of your personal data." }
    };

    const validate = (key) => {
      const { el, msg } = fields[key];
      let ok;
      if (key === "gdpr") ok = el.checked;
      else if (key === "email") ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim());
      else ok = el.value.trim().length > 0;
      const err = $(`#${el.id}-err`);
      err.textContent = ok ? "" : msg;
      el.setAttribute("aria-invalid", !ok);
      if (!ok) el.setAttribute("aria-describedby", err.id); else el.removeAttribute("aria-describedby");
      return ok;
    };

    Object.keys(fields).forEach((key) => {
      const el = fields[key].el;
      el.addEventListener(key === "gdpr" ? "change" : "blur", () => validate(key));
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.className = "form-status";
      status.textContent = "";
      const results = Object.keys(fields).map(validate);
      if (results.includes(false)) {
        const firstBad = Object.values(fields).find((f) => f.el.getAttribute("aria-invalid") === "true");
        firstBad.el.focus();
        return;
      }

      const data = {
        name: fields.name.el.value.trim(),
        email: fields.email.el.value.trim(),
        message: fields.message.el.value.trim()
      };

      // No backend configured → open the visitor's e-mail app instead
      if (!SITE.formEndpoint) {
        const body = `${data.message}\n\n— ${data.name} (${data.email})`;
        window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Message from papaya website")}&body=${encodeURIComponent(body)}`;
        status.classList.add("ok");
        status.textContent = "Your e-mail app should open now. Thank you!";
        return;
      }

      const btn = $('button[type="submit"]', form);
      btn.disabled = true;
      try {
        const res = await fetch(SITE.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error(res.status);
        form.reset();
        status.classList.add("ok");
        status.textContent = "Thank you! Your message has been sent – we’ll get back to you soon.";
      } catch (err) {
        status.classList.add("err");
        status.textContent = `Sorry, something went wrong. Please write to us at ${SITE.email}.`;
      } finally {
        btn.disabled = false;
      }
    });
  }

  /* ---------- EU flag stars ---------- */
  function drawEuStars() {
    const g = $("#eu-stars");
    if (!g) return;
    const cx = 45, cy = 30, r = 18;
    const star = (x, y, s) => {
      const pts = [];
      for (let i = 0; i < 10; i++) {
        const ang = -Math.PI / 2 + (i * Math.PI) / 5;
        const rad = i % 2 ? s * 0.4 : s;
        pts.push(`${(x + rad * Math.cos(ang)).toFixed(2)},${(y + rad * Math.sin(ang)).toFixed(2)}`);
      }
      return `<polygon points="${pts.join(" ")}"/>`;
    };
    let out = "";
    for (let i = 0; i < 12; i++) {
      const a = (i * Math.PI) / 6;
      out += star(cx + r * Math.sin(a), cy - r * Math.cos(a), 3.3);
    }
    g.innerHTML = out;
  }

  /* ---------- Init ---------- */
  document.documentElement.classList.remove("no-js");
  fillSiteData();
  renderTeam();
  renderPartners();
  renderNews();
  initReveal();
  renderProjects();
  initFilters();
  initModal();
  initNav();
  initForm();
  drawEuStars();
})();
