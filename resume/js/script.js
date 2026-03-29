$(document).ready(function () {

  /* ── Init Bootstrap Tooltips ─────────────────────── */
  $('[data-bs-toggle="tooltip"]').each(function () {
    new bootstrap.Tooltip(this);
  });

  /* ── Init Bootstrap Popovers ────────────────────── */
  $('[data-bs-toggle="popover"]').each(function () {
    new bootstrap.Popover(this);
  });

  /* ── Hire Me → open Modal (jQuery triggered) ─────── */
  $(document).on('click', '#hire-me-btn', function () {
    var modal = new bootstrap.Modal(document.getElementById('hireModal'));
    modal.show();
  });

  /* ── jQuery: Trigger dynamicModal from dropdown ──── */
  $(document).on('click', '#dynamic-modal-btn', function (e) {
    e.preventDefault();
    var modal = new bootstrap.Modal(document.getElementById('dynamicModal'));
    modal.show();
  });

  /* ── jQuery: Project card hover lift effect ─────── */
  $(document).on('mouseenter', '.project-card', function () {
    $(this).find('.card').addClass('transform-up shadow-lg');
  }).on('mouseleave', '.project-card', function () {
    $(this).find('.card').removeClass('transform-up shadow-lg');
  });

  /* ── jQuery: Toggle extra info in About ─────────── */
  $(document).on('click', '#toggle-extra-info', function () {
    $('#extra-info').toggleClass('d-none');
    var $btn = $(this);
    if ($('#extra-info').hasClass('d-none')) {
      $btn.html('<i class="bi bi-plus-circle me-1"></i>Show More');
    } else {
      $btn.html('<i class="bi bi-dash-circle me-1"></i>Show Less');
    }
  });

  /* ── jQuery: Dark / Light toggle (Interactive page) */
  $(document).on('click', '#dark-toggle-btn', function () {
    var $box = $('#toggle-box');
    $box.toggleClass('dark-toggle');
    if ($box.hasClass('dark-toggle')) {
      $(this).html('<i class="bi bi-sun me-1"></i>Light Mode');
    } else {
      $(this).html('<i class="bi bi-moon-stars me-1"></i>Dark Mode');
    }
  });

  /* ── jQuery: Show / hide elements demo ──────────── */
  $(document).on('click', '#show-secret-btn', function () {
    $('#secret-msg').fadeToggle(400);
    $(this).text($(this).text() === 'Reveal Hidden Element' ? 'Hide Element' : 'Reveal Hidden Element');
  });

  /* ── Form Validation (Contact page) ─────────────── */
  $('form.needs-validate').on('submit', function (e) {
    e.preventDefault();
    $(this).addClass('was-validated');
    if (this.checkValidity()) {
      alert('Message sent! (demo)');
      this.reset();
      $(this).removeClass('was-validated');
    }
  });

  /* ── Navbar active link highlight ───────────────── */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  $('.navbar-nav .nav-link').each(function () {
    var href = $(this).attr('href');
    if (href === currentPage) {
      $(this).addClass('active').css('color', '#4f46e5');
    }
  });

});
