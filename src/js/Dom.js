'use strict';

let Dom = function() {
    this.title = 'Dom';
    this.copyright = '2018';
}

Dom.prototype.getDomBookmarks = function(data) {
    templateBookmarks(data, $contentBookmarks);
};

Dom.prototype.getDomCategories = function(data) {
    templateCategories(data, $listCategories);
    templateSelectCategories(data, $selectCategories);
};

Dom.prototype.makeFirstLiActive = function () {
    $listCategories.find('li').removeClass('active');
    $listCategories.find('li:first-child').addClass('active');
};

let dom = new Dom();

dom.onRemoveBookmark = function(id) {
    dom.classBookmark.prototype.removeBookmark({id: id, action: 'delete'});
    this.makeFirstLiActive();
};

dom.onEditBookmark = function(id) {
    $('.js-edit-form').remove();
    let block;

    dom.classBookmark.prototype.getBookmarkById(id)
        .then(obj => {
            $('.js-bookmark').each(function() {
                let index = $(this).attr('data-index');
                if(index == id) {
                    block = $(this);
                }
            });
            return {obj: obj, block: block}
        })
        .then(data => {
            templateEditForm(data.obj, data.block)
        });
};

dom.onCancel = function() {
    $('.js-edit-form').remove();
}

dom.onSave = function(elem, id) {
    let form = $('.js-edit-form');
    let name = form.find('input[name="name"]').val(),
        link = form.find('input[name="link"]').val();

    dom.classBookmark.prototype.saveBookmark(
        {id: id, name: name, link: link, action: 'edit'}
    );
    this.makeFirstLiActive();
};

dom.searchBookmarks = function(input) {
    let val = input.value;
    dom.classBookmark.prototype.searchBookmarks(val);
}

dom.sortByCategories = function(id) {
    if(id == 'all') {
        dom.classBookmark.prototype.getAllBookmarks();
    }
    else {
        dom.classBookmark.prototype.getBookmarksByCategoryId(id);
    }

    // add active class
    $listCategories.find('li').each(function(item) {
        $(this).removeClass('active');
        let dataID = $(this).attr('data-id');
        if(dataID == id) {
            $(this).addClass('active');
        }
    });
}

$formCreate.submit(function(event) {
    event.preventDefault();
    let form = $(this);
    let name = form.find('input[name="name"]').val(),
        link = form.find('input[name="link"]').val(),
        categoryId = $(this).find('#select-categories option:checked').val();

    if(name == '' || link == '') {
        alert('Заповніть всі поля!');
    }
    else {
        dom.classBookmark.prototype.createBookmark(
            {name: name, link: link, categoryid: categoryId, action: 'add'}
        )
        $formCreate.find('input[type="text"]').val('');
        dom.makeFirstLiActive();
    }
});
