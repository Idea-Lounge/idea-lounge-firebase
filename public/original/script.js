(function() {
    var container = document.getElementById('container'),
      trigger = container.querySelector('button.trigger');

    document.getElementById('triggerButton').click();

    function toggleContent() {
      if (classie.has(container, 'container--open')) {
        classie.remove(container, 'container--open');
        classie.remove(trigger, 'trigger--active');
        window.addEventListener('scroll', noscroll);
      }
      else {
        classie.add(container, 'container--open');
        classie.add(trigger, 'trigger--active');
        window.removeEventListener('scroll', noscroll);
      }
    }

    function noscroll () {
      window.scrollTo(0, 0);
    }

    // reset scrolling position
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    // disable scrolling
    window.addEventListener('scroll', noscroll);

    trigger.addEventListener('click', toggleContent);

    [].slice.call(document.querySelectorAll('.gallery-image')).forEach(function (el) {
      el.onclick = function () {
      }
    });
})();

var triggerState = false;

function changeState () {
  triggerState = !triggerState;
}

jQuery(document).ready(function($) {


  function triggerButton() {
    if (!triggerState) {
      $("#triggerButton").click()
    }
  };
  setTimeout(triggerButton, 4000);
  $(".scroll").click(function(event){
  event.preventDefault();
  $('html,body').animate({
    scrollTop: $(this.hash).offset().top}, 800,'swing');
  });
});






var wow = new WOW({
    boxClass:     'wowload',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true        // act on asynchronously loaded content (default is true)
  });
wow.init();




$('.carousel').swipe({
     swipeLeft: function() {
         $(this).carousel('next');
     },
     swipeRight: function() {
         $(this).carousel('prev');
     },
     allowPageScroll: 'vertical'
 });
