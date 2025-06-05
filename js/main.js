$(function() {

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteDropdown = function() {

		$('nav .dropdown').hover(function(){
			var $this = $(this);
			$this.addClass('show');
			$this.find('> a').attr('aria-expanded', true);
			$this.find('.dropdown-menu').addClass('show');
		}, function(){
			var $this = $(this);
				$this.removeClass('show');
				$this.find('> a').attr('aria-expanded', false);
				$this.find('.dropdown-menu').removeClass('show');
		});


		$('#dropdown04').on('show.bs.dropdown', function () {
		  console.log('show');
		});

	  $('.navbar .dropdown > a').click(function(){
	    location.href = this.href;
	  });
	}; 
	siteDropdown();

});



document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector('.mob-show-box');
  if (!target) return;

  // Calculate original position relative to page top
  const originalTop = target.getBoundingClientRect().top + window.scrollY;

  window.addEventListener('scroll', () => {
    const rect = target.getBoundingClientRect();
    const scrollY = window.scrollY;

    // When the element's top reaches bottom of viewport or above, fix it at bottom
    if (rect.top <= window.innerHeight && scrollY > originalTop) {
      target.classList.add('fixed-bottom-visible');
    }

    // When scroll is above original position, remove fixed class
    if (scrollY <= originalTop) {
      target.classList.remove('fixed-bottom-visible');
    }
  });
});


