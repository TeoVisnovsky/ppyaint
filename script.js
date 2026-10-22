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
  const ARROW = '<svg class="arrow" viewBox="0 0 17.3 14.3" aria-hidden="true"><path fill="currentColor" d="M17.3 7c-.1-.2-.3-.3-.4-.4L9.6.2c-.3-.3-.7-.2-.9 0-.2.2-.2.7 0 .9l6.2 5.4H.6c-.3 0-.6.3-.6.7s.3.6.6.6h14.3l-6.2 5.4c-.3.2-.3.6-.1.9.1.1.3.2.5.2s.3 0 .4-.2l7.2-6.2c.3-.2.5-.4.6-.7Z"/></svg>';

  /* ---------- Media: real file, or a placeholder naming the file to upload ---------- */
  function placeholder(label, alt) {
    return `<div class="ph" role="img" aria-label="${esc(alt || "Photo placeholder")}"><span class="ph-label">${esc(label)}</span></div>`;
  }
  function media(src, alt) {
    if (!src) return placeholder("[PHOTO]", alt);
    return `<img class="media-img" src="${esc(src)}" alt="${esc(alt || "")}" loading="lazy" data-fallback="${esc(src)}">`;
  }
  // swap any image that fails to load for a placeholder (capture phase catches <img> errors)
  document.addEventListener("error", (e) => {
    const img = e.target;
    if (img.tagName !== "IMG" || !img.dataset.fallback) return;
    const tmp = document.createElement("div");
    tmp.innerHTML = placeholder(img.dataset.fallback, img.alt);
    img.replaceWith(tmp.firstElementChild);
  }, true);

  function hydrateMedia() {
    $$("[data-media]").forEach((el) => { el.innerHTML = media(SITE.media[el.dataset.media], el.dataset.mediaAlt); });
  }

  /* ---------- Site-wide values ---------- */
  function fillSiteData() {
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
  const projectMeta = (p) => `<strong>${esc(p.action)}</strong> · ${esc(p.country)} · ${esc(p.date)}`;
  const projectTitle = (p, arrow = true) => `
    <h3 class="card-title">
      <button type="button" class="stretched" data-project="${esc(p.id)}" aria-haspopup="dialog"><span class="card-title-text">${esc(p.title)}</span></button>
      ${arrow ? ARROW : ""}
    </h3>`;

  function featureCard(p, variant) {
    return `
      <article class="feature feature-${variant}">
        <div class="feature-media">${media(p.image, p.title)}<span class="pill">${STATUS_LABELS[p.status] || esc(p.status)}</span></div>
        <div class="feature-body">
          ${projectTitle(p, false)}
          <p class="card-meta">${projectMeta(p)}</p>
          <p class="card-text">${esc(p.summary)}</p>
        </div>
      </article>`;
  }

  function projectCard(p) {
    return `
      <article class="card">
        <div class="card-media">${media(p.image, p.title)}<span class="pill">${STATUS_LABELS[p.status] || esc(p.status)}</span></div>
        ${projectTitle(p)}
        <p class="card-meta">${projectMeta(p)}</p>
      </article>`;
  }

  function renderProjects(filter = "all") {
    const list = PROJECTS.filter((p) => filter === "all" || p.status === filter);
    $("#featured").innerHTML = list.slice(0, 2).map((p, i) => featureCard(p, i ? "b" : "a")).join("");
    $("#project-cards").innerHTML = list.length
      ? list.slice(2).map(projectCard).join("")
      : `<p>No ${esc((STATUS_LABELS[filter] || "").toLowerCase())} projects right now – check back soon.</p>`;
  }

  function initProjects() {
    $$(".pill-btn").forEach((btn) =>
      btn.addEventListener("click", () => {
        $$(".pill-btn").forEach((b) => {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-pressed", String(b === btn));
        });
        renderProjects(btn.dataset.filter);
      })
    );
    $("#projects").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-project]");
      if (btn) openProject(btn.dataset.project);
    });
  }

  /* ---------- Project modal ---------- */
  const modal = $("#project-modal");
  let lastFocus = null;

  function openProject(id) {
    const p = PROJECTS.find((x) => x.id === id);
    if (!p) return;
    lastFocus = document.activeElement;
    const gallery = (p.gallery || []).map((src, i) => `<div>${media(src, `${p.title} – photo ${i + 1}`)}</div>`).join("");

    $(".modal-body", modal).innerHTML = `
      <div class="m-hero">${media(p.image, p.title)}</div>
      <div class="m-body">
        <div class="m-pills"><span class="pill">${STATUS_LABELS[p.status] || esc(p.status)}</span><span class="pill">${esc(p.action)}</span></div>
        <h2 id="modal-title" class="h-section">${esc(p.title)}</h2>
        <ul class="facts">
          <li><span>Type</span>${esc(p.actionLabel || p.action)}</li>
          <li><span>Country</span>${esc(p.country)}</li>
          <li><span>Date</span>${esc(p.date)}</li>
          <li><span>Topic</span>${esc(p.topic)}</li>
        </ul>
        <div class="prose"><p>${esc(p.description)}</p></div>
        ${p.partners && p.partners.length ? `<h3>Partners</h3><ul class="m-partners">${p.partners.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
        ${gallery ? `<h3>Gallery</h3><div class="gallery">${gallery}</div>` : ""}
        <p class="m-cta"><a href="#contact" class="btn btn-peach" data-close data-subject="Question about ${esc(p.title)}">Ask about this project</a></p>
      </div>`;

    modal.showModal();
    document.body.classList.add("is-locked");
    modal.scrollTop = 0;
    $(".modal-close", modal).focus();
  }

  function initModal() {
    $(".modal-close", modal).addEventListener("click", () => modal.close());
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.close();
      const link = e.target.closest("[data-close]");
      if (link) { prefillMessage(link.dataset.subject); lastFocus = null; modal.close(); }
    });
    modal.addEventListener("close", () => {
      document.body.classList.remove("is-locked");
      if (lastFocus) lastFocus.focus();
    });
  }

  /* ---------- What we do ---------- */
  function renderPillars() {
    $("#pillars").innerHTML = PILLARS.map((p) => `
      <article class="card">
        <div class="card-media">${media(p.image, p.title)}<span class="pill">What we do</span></div>
        <h3 class="card-title"><a href="#projects" class="stretched"><span class="card-title-text">${esc(p.title)}</span></a>${ARROW}</h3>
        <p class="card-text">${esc(p.text)}</p>
      </article>`).join("");
  }

  /* ---------- Stories ---------- */
  function renderStories() {
    if (!STORIES.length) return;
    const [first, ...rest] = STORIES;
    const watch = (s) => s.video ? `<a class="btn btn-sm" href="${esc(s.video)}" target="_blank" rel="noopener">Watch the film</a>` : "";

    const wide = `
      <article class="story-wide">
        <div class="feature-media">${media(first.image, `${first.name}, ${first.project}`)}<span class="pill pill-top">Story</span></div>
        <div class="story-wide-body">
          <span class="pill">${esc(first.project)}</span>
          <div>
            <blockquote class="quote">“${esc(first.quote)}”</blockquote>
            <cite class="cite"><strong>${esc(first.name)}</strong>, ${esc(first.from)}</cite>
          </div>
          ${watch(first)}
        </div>
      </article>`;

    const cards = rest.map((s) => `
      <article class="card">
        <div class="card-media">${media(s.image, `${s.name}, ${s.project}`)}<span class="pill">${esc(s.project)}</span></div>
        <blockquote class="quote quote-small">“${esc(s.quote)}”</blockquote>
        <cite class="cite"><strong>${esc(s.name)}</strong>, ${esc(s.from)}</cite>
        ${s.video ? `<p style="margin-top:12px">${watch(s)}</p>` : ""}
      </article>`).join("");

    $("#stories").innerHTML = wide + (cards ? `<div class="cards cards-3">${cards}</div>` : "");
  }

  /* ---------- Team ---------- */
  function renderTeam() {
    $("#team-grid").innerHTML = TEAM.map((m) => `
      <li class="card">
        <div class="card-media">${media(m.image, m.name)}<span class="pill">${esc(m.role)}</span></div>
        <h3 class="card-title">
          ${m.linkedin
            ? `<a href="${esc(m.linkedin)}" target="_blank" rel="noopener" class="stretched"><span class="card-title-text">${esc(m.name)}</span><span class="sr-only"> on LinkedIn</span></a>${ARROW}`
            : `<span>${esc(m.name)}</span>`}
        </h3>
        <p class="card-text">${esc(m.bio)}</p>
      </li>`).join("");
  }

  /* ---------- News ---------- */
  function renderNews() {
    const fmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });
    const latest = [...NEWS].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
    const date = (n) => `<time class="news-date" datetime="${esc(n.date)}">${fmt.format(new Date(n.date))}</time>`;
    const tile = (n, bg, pillBg) => `
      <article class="tile news-tile ${bg}">
        <span class="pill ${pillBg}">${esc(n.tag || "News")}</span>
        <div>
          <h3 class="tile-title"><a href="${esc(n.url || "#")}" class="stretched">${esc(n.title)}</a></h3>
          ${date(n)}
        </div>
      </article>`;

    const [a, b, c] = latest;
    let html = "";
    if (a) html += `
      <article class="news-big">
        <div class="feature-media">${media(a.image, a.title)}<span class="pill">${esc(a.tag || "News")}</span></div>
        <div class="feature-body">
          <h3 class="card-title"><a href="${esc(a.url || "#")}" class="stretched"><span class="card-title-text">${esc(a.title)}</span></a></h3>
          <p class="card-text">${esc(a.excerpt)}</p>
          ${date(a)}
        </div>
      </article>`;
    if (b) html += tile(b, "bg-white", "bg-peach");
    if (c) html += tile(c, "bg-yellow", "");
    html += `
      <article class="tile bg-mint news-wide">
        <span class="pill">Instagram</span>
        <h3 class="tile-title"><a href="${esc(SITE.instagram)}" target="_blank" rel="noopener" class="stretched">Follow our projects live on Instagram ↗</a></h3>
      </article>`;
    $("#news-grid").innerHTML = html;
  }

  /* ---------- Partners ---------- */
  function logoItem(o, pillText) {
    const ext = o.url && o.url !== "#" ? 'target="_blank" rel="noopener"' : "";
    return `
      <li>
        <a class="logo-item" href="${esc(o.url || "#")}" ${ext}>
          ${o.logo ? `<img src="${esc(o.logo)}" alt="${esc(o.name)} logo" loading="lazy">` : `<span class="logo-name">${esc(o.name)}</span>`}
          <span class="pill bg-peach">${esc(pillText)}</span>
        </a>
      </li>`;
  }
  function renderPartners() {
    $("#partners-grid").innerHTML = PARTNERS.map((o) => logoItem(o, o.country)).join("");
    $("#supporters-grid").innerHTML = SUPPORTERS.map((o) => logoItem(o, "Supporter")).join("");
  }

  /* ---------- Header & navigation ---------- */
  function initHeader() {
    const header = $(".site-header");
    const burger = $(".burger");
    const nav = $("#nav");
    const desktop = window.matchMedia("(min-width: 1100px)");

    const setMenu = (open) => {
      burger.setAttribute("aria-expanded", String(open));
      $(".sr-only", burger).textContent = open ? "Close menu" : "Open menu";
      nav.classList.toggle("is-open", open);
      document.body.classList.toggle("is-locked", open);
    };
    burger.addEventListener("click", () => setMenu(burger.getAttribute("aria-expanded") !== "true"));
    $$("a", nav).forEach((a) => a.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); burger.focus(); }
    });
    desktop.addEventListener("change", () => setMenu(false));

    // hide the header when scrolling down, show it when scrolling up
    let lastY = window.scrollY, ticking = false;
    const update = () => {
      const y = window.scrollY;
      header.classList.toggle("is-scrolled", y > 4);
      if (!nav.classList.contains("is-open")) header.classList.toggle("is-unpinned", y > lastY && y > 200);
      lastY = y;
      ticking = false;
    };
    window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });

    // mark the section in view
    const links = $$(".nav-list a");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => {
          if (l.getAttribute("href") === `#${entry.target.id}`) l.setAttribute("aria-current", "true");
          else l.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach((s) => io.observe(s));

    document.addEventListener("click", (e) => {
      const a = e.target.closest("[data-subject]");
      if (a && !a.hasAttribute("data-close")) prefillMessage(a.dataset.subject);
    });
  }

  function prefillMessage(subject) {
    const msg = $("#cf-message");
    if (subject && !msg.value.trim()) msg.value = `${subject}.\n\n`;
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
      el.setAttribute("aria-invalid", String(!ok));
      if (!ok) el.setAttribute("aria-describedby", err.id); else el.removeAttribute("aria-describedby");
      return ok;
    };

    Object.keys(fields).forEach((key) => {
      fields[key].el.addEventListener(key === "gdpr" ? "change" : "blur", () => validate(key));
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.className = "form-status";
      status.textContent = "";
      const results = Object.keys(fields).map(validate);
      if (results.includes(false)) {
        Object.values(fields).find((f) => f.el.getAttribute("aria-invalid") === "true").el.focus();
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
        window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Message from the Papaya website")}&body=${encodeURIComponent(body)}`;
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
    const star = (x, y, s) => {
      const pts = [];
      for (let i = 0; i < 10; i++) {
        const a = -Math.PI / 2 + (i * Math.PI) / 5;
        const r = i % 2 ? s * 0.4 : s;
        pts.push(`${(x + r * Math.cos(a)).toFixed(2)},${(y + r * Math.sin(a)).toFixed(2)}`);
      }
      return `<polygon points="${pts.join(" ")}"/>`;
    };
    let out = "";
    for (let i = 0; i < 12; i++) {
      const a = (i * Math.PI) / 6;
      out += star(45 + 18 * Math.sin(a), 30 - 18 * Math.cos(a), 3.3);
    }
    g.innerHTML = out;
  }

  /* ---------- Init ---------- */
  document.documentElement.classList.remove("no-js");
  fillSiteData();
  hydrateMedia();
  renderProjects();
  renderPillars();
  renderStories();
  renderTeam();
  renderNews();
  renderPartners();
  initProjects();
  initModal();
  initHeader();
  initForm();
  drawEuStars();
})();
