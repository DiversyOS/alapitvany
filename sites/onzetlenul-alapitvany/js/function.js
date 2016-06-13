(function($){

	var $navToggleBtn = $('.nav--toggle'),
			$body,
			$window,
			$settings = {
				scrollDuration: 400
			};

	function onClick () {
		var $this = $(this),
				$menu = $('.nav ul');

		$this.toggleClass('close');
		$menu.toggleClass('open');
	}

	function linkClick(e) {
		var $this = $(this),
				href = $this.attr('href'),
				$target = $(href);

		if ($target.length == 0)
			return;

		e.preventDefault();

		$body.animate({
				scrollTop: $target.offset().top
			}, $settings.duration);
		}

		function bindings () {
			$navToggleBtn.on('click', onClick);
			$('a[href^="#"]').on('click', linkClick);
		}

	$(document).ready(function(){
		$body = $('html, body');
		$window = $(window);

		bindings();
	});

})(jQuery);
