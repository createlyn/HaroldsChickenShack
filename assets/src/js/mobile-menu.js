// Application Topbar Interaction

var $mobileTrigger = $('.mobile-navigation__trigger'),
    $mobileMenu = $('.mobile-navigation__list'),
    active = 'active'

$mobileTrigger.on('click', function (e) {
  e.preventDefault();
  $(this).parents().siblings($mobileMenu).toggleClass(active);

  $('body').toggleClass('is-fixed');
});
