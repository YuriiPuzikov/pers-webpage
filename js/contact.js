 /**
   * @section BXSLIDER
   */
  /**
   * @subsection FEEDBACK SLIDER
   */
  var feedbackSlider = $('.js-feedback-slider').bxSlider({
    mode: 'fade',
    pager: false,

    auto: true,
    paude: 100000,
    autoHover: true,

    controls: false,

    onSliderLoad: function() {
      /**
       * bxslider next/prev svg button
       */
      $.get("/img/svg/arrow_right.svg", function(data) {
        $('#feedback__slider-next').html(data.documentElement);
      });
      $.get("/img/svg/arrow_left.svg", function(data) {
        $('#feedback__slider-prev').html(data.documentElement);
      });
    }
  });

  $('#feedback__slider-next').click(function() {
    feedbackSlider.goToNextSlide();
    return false;
  });

  $('#feedback__slider-prev').click(function() {
    feedbackSlider.goToPrevSlide();
    return false;
  });