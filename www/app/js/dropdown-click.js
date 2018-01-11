let dropdownContainer = $('[data-dropdown-container]');
let dropdownMenu = $('[data-dropdown-menu]');

dropdownContainer.on('click', function(e){

    let target = $(e.target).attr('data-dropdown');

    $(target).toggleClass('open');

});