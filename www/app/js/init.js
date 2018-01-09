
$(function (){
    // init slick slider
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        arrows: false,
        dots:true
    });
    
    // init form styler for select
    $('select').styler();
});

// init modal login
let openModalsBtns = $('[data-modal]');

openModalsBtns.on('click', function() {

  let target = $(this).attr('data-target');
  $(target).bPopup();

});