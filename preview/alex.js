window.THEMES = window.THEMES || {};
window.THEMES.alex = {
  label: "Alex",
  css: "alex.css",
  render: function (d, h) {
    var e = h.esc;
    var links = h.list(d.links).map(function (l) {
      return '<a href="' + h.url(l.url) + '"' + h.ext(l.url) + '>' + e(l.label) + '</a>';
    }).join('');
    var proof = h.list(d.proofPoints).map(function (p) { return '<li>' + e(p) + '</li>'; }).join('');
    var xp = h.list(d.experience).map(function (j) {
      return '<article class="timeline-item"><div class="timeline-dot"></div><div class="timeline-body">' +
        '<div class="eyebrow">' + e(j.dates) + '</div><h3>' + e(j.role) + '</h3>' +
        '<div class="subhead">' + e(j.org) + (j.place ? ' · ' + e(j.place) : '') + '</div>' +
        '<p>' + e(j.summary) + '</p><div class="tag-row">' + h.list(j.tags).map(function (t) { return '<span>' + e(t) + '</span>'; }).join('') + '</div></div></article>';
    }).join('');
    var projects = h.list(d.projects).map(function (p, i) {
      var media = p.image ? '<img src="' + h.url(p.image) + '" alt="' + e(p.name) + '">' :
        '<div class="project-placeholder"><span>IMAGE PLACEHOLDER · PROJECT ' + String(i + 1).padStart(2, '0') + '</span><strong>' + e(p.name) + '</strong></div>';
      return '<article class="project-card"><div class="project-media">' + media + '</div><div class="project-copy">' +
        '<div class="eyebrow">' + e(p.when) + '</div><h3>' + e(p.name) + '</h3><p>' + e(p.summary) + '</p>' +
        (p.result ? '<p class="result"><b>Result</b> ' + e(p.result) + '</p>' : '') +
        '<div class="tag-row">' + h.list(p.stack).map(function (t) { return '<span>' + e(t) + '</span>'; }).join('') + '</div></div></article>';
    }).join('');
    var skills = h.list(d.skills).map(function (s) {
      return '<div class="skill-group"><h3>' + e(s.group) + '</h3><div class="skill-list">' +
        h.list(s.items).map(function (x) { return '<span>' + e(x) + '</span>'; }).join('') + '</div></div>';
    }).join('');
    var awards = h.list(d.awards).map(function (a) { return '<li>' + e(a) + '</li>'; }).join('');

    return '<aside class="sidebar"><div class="brand"><div class="monogram">' + e(d.initials || 'AS') + '</div><div><strong>' + e(d.name) + '</strong><span>Mechanical Engineering</span></div></div>' +
      '<nav><a href="#home">Home</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#portfolio">Portfolio</a><a href="#skills">Skills</a><a href="#contact">Contact</a></nav>' +
      '<div class="sidebar-bottom">' + links + '</div></aside>' +
      '<main><section id="home" class="hero section-dark"><div class="hero-copy"><div class="eyebrow light">AUSTIN, TEXAS · MECHANICAL ENGINEER</div><h1>' + e(d.name) + '</h1><h2>' + e(d.tagline) + '</h2><p>' + e(d.headline) + '</p>' +
      '<div class="hero-actions"><a class="button primary" href="#portfolio">View Projects</a>' + (d.resume ? '<a class="button ghost" href="' + h.url(d.resume) + '">Resume</a>' : '') + '</div></div>' +
      '<div class="hero-panel"><div class="hero-frame">' + (d.photo ? h.avatar('hero-photo') : '<div class="hero-placeholder"><span>PORTRAIT / ACTION PHOTO</span><strong>' + e(d.initials || 'AS') + '</strong></div>') + '</div>' +
      '<div class="status-dot"><i></i>' + e(d.status || '') + '</div></div></section>' +
      '<section id="about" class="section-light content-section"><div class="section-label">01 / ABOUT</div><div class="two-col"><div><h2>Engineering profile</h2><p class="lead">' + e(d.about) + '</p>' +
      '<div class="education"><b>' + e(d.school) + '</b><span>' + e(d.degree || '') + '</span><span>' + e(d.focus || '') + '</span></div></div><div><h3>Proof points</h3><ul class="proof-list">' + proof + '</ul></div></div></section>' +
      '<section id="experience" class="section-muted content-section"><div class="section-label">02 / EXPERIENCE</div><h2>Where I have worked</h2><div class="timeline">' + xp + '</div></section>' +
      '<section id="portfolio" class="section-light content-section"><div class="section-label">03 / PORTFOLIO</div><h2>Selected engineering work</h2><p class="section-intro">Mechanical systems, autonomous platforms, machine design, aerospace reliability, and hands-on hardware.</p><div class="projects">' + projects + '</div></section>' +
      '<section id="skills" class="section-dark content-section"><div class="section-label light">04 / SKILLS</div><h2>Technical toolkit</h2><div class="skills-grid">' + skills + '</div>' + (awards ? '<div class="recognition"><h3>Recognition</h3><ul>' + awards + '</ul></div>' : '') + '</section>' +
      '<section id="contact" class="section-light content-section contact-section"><div class="section-label">05 / CONTACT</div><h2>Let’s build something real.</h2><p>I am interested in mechanical design, systems engineering, test and evaluation, robotics, electromechanical hardware, and hardware reliability.</p><div class="contact-links">' +
      (d.email ? '<a class="button primary" href="mailto:' + e(d.email) + '">' + e(d.email) + '</a>' : '') + links + '</div></section><footer>© ' + new Date().getFullYear() + ' ' + e(d.name) + '</footer></main>';
  }
};
