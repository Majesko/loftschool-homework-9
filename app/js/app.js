
var catalogueDropdown = (function() {

    var init = function() {
        console.log("init dropdown plugin");
        _setUpListeners();
    },

    _setUpListeners = function() {
        $('.catalogue__category').click(_dropdownTrigger);
    },

    _clickAction = function() {
        var subcategory = $(this).find('.catalogue__subcategory');
        _dropdownTrigger;
    },

    _dropdownTrigger = function() {
        var item = $(this);
        var subcategory = $(item).find('.catalogue__subcategory');

        if(!item.hasClass('catalogue__item-active')) {
            _clearActiveItems()
            $(item).addClass('catalogue__item-active');
            subcategory.slideDown();
        } else {
            $(item).removeClass('catalogue__item-active');
            subcategory.slideUp();
        }
    }
    _clearActiveItems = function() {
        var category = $('.catalogue__category');
        category.removeClass('catalogue__item-active');
        category.find('.catalogue__subcategory').slideUp();
    }

    return {
        init: init
    }
}());

catalogueDropdown.init();
var scrollUp = (function() {

    var init = function() {
        console.log('init scrollUp plugin');

        $.scrollUp({
            scrollName: 'scrollUp',
            // topDistance: '300',
            // topSpeed: 300,
            // animation: 'fade',
            // animationInSpeed: 200,
            // animationOutSpeed: 200,
            scrollText: 'Наверх',
            // activeOverlay: false,
        });
    }

    return {
        init: init
    }
}());

scrollUp.init();
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
