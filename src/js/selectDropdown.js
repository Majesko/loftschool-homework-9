var selectPlugin = (function() {

    var init = function() {
        console.log('Init selectPlugin');
        _setUpListeners();
    },

    _setUpListeners = function() {
        _setDefaultView();
        $('.display__select').click(_toggleAction);
        $('.display__option').click(_clickAction);

    },

    _toggleAction = function() {
        var select = $(this);
        var selectText = select.find('.display__select-text');
        var wrap = select.find('.display-wrap');
        if(wrap.is(':hidden')) {
            wrap.slideDown(150);
        } else {
            wrap.slideUp(150);
        }
    },

    _setDefaultView = function() {
        var select = $('.display__select-text');
        var startText = $('.display__option.active').text();
        select.append(startText);
    },

    _clickAction = function() {
        var option = $(this);
        var selectText = $('.display__select-text');
        var listStyle = option.data('style');

        selectText.text(option.text());
        $('.display__option').removeClass('active');
        option.addClass('active');
        // console.log(listStyle);

        if(listStyle == "0") {
            $('.products__list').fadeOut('fast',function(){
                $('.products__item').addClass('products-grid');
            });
            $('.products__list').fadeIn('fast');
        } else {
            $('.products__list').fadeOut('fast', function(){
                $('.products__item').removeClass('products-grid');
            });
            $('.products__list').fadeIn('fast');
        }
    }

    return {
        init: init
    }
}());

selectPlugin.init();
