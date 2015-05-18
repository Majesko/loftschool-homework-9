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