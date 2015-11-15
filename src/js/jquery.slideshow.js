(function($){

    $.fn.slideshow = function(params){

        var defaults = {
            height: 400,
            activeClass: 'active',
            duration: 7500
        };

        params = $.extend({}, defaults, params);

        return this.each(function(){

            var $slider = $(this);
            var $items = $('.item', $slider);
            var $nextBtn = $('.next-slide', $slider);
            var $prevBtn = $('.prev-slide', $slider);
            var $selectors = $('.selectors', $slider);
            var timer = null;
            var current = 0;

            /**
            * Activate a slide.
            *
            * @param i slide position.
            */
            var activateSlide = function(i){

                // Remove active class from all slides and selectors
                $items.removeClass(params.activeClass);
                $('a', $selectors).removeClass('active');

                // Set active class on slide i
                $($items.get(i)).addClass(params.activeClass);
                $($('a', $selectors).get(i)).addClass('active');

            };

            /**
            * Activate next slide.
            */
            var nextSlide = function(){
                current++;
                if (current >= $items.length) {
                    current = 0;
                }
                activateSlide(current);
            };

            /**
            * Activate previous slide.
            */
            var prevSlide = function(){
                current--;
                if (current < 0) {
                    current = $items.length - 1;
                }
                activateSlide(current);
            };

            var resetTimer = function(){
                timer = setInterval(nextSlide, params.duration);
            };


            $nextBtn.click(function(e){
                e.preventDefault();
                clearInterval(timer);
                nextSlide();
                resetTimer();
            });

            $prevBtn.click(function(e){
                e.preventDefault();
                clearInterval(timer);
                prevSlide();
                resetTimer();
            });

            $('a', $selectors).click(function(e){
                e.preventDefault();
                clearInterval(timer);
                var i = $('a', $selectors).index(this);
                if (i === current) {
                    return;
                }
                current = i;
                activateSlide(i);
                resetTimer();
            });

            $slider.css('height', params.height);

            // Activate first slide
            activateSlide(current);

            resetTimer();

        });

    };

})(jQuery);
