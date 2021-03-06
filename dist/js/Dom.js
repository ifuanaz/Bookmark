'use strict';

var Dom = function Dom() {
    this.title = 'Dom';
    this.copyright = '2018';

    this.$formCreate = $('#form-create');
    this.$contentBookmarks = $('#content-bookmarks');
    this.$listCategories = $('#list-categories');
    this.$selectCategories = $('#select-categories');
};

Dom.prototype.getDomBookmarks = function (data) {
    templateBookmarks(data, dom.$contentBookmarks);
};

Dom.prototype.getDomCategories = function (data) {
    templateCategories(data, dom.$listCategories);
    templateSelectCategories(data, dom.$selectCategories);
};

Dom.prototype.makeFirstLiActive = function () {
    dom.$listCategories.find('li').removeClass('active');
    dom.$listCategories.find('li:first-child').addClass('active');
};

var dom = new Dom();

dom.$formCreate.submit(function (event) {
    event.preventDefault();
    var form = $(this);
    var name = form.find('input[name="name"]').val(),
        link = form.find('input[name="link"]').val(),
        categoryId = $(this).find('#select-categories option:checked').val();

    if (name === '' || link === '') {
        alert('Заповніть всі поля!');
    } else {
        dom.classBookmark.prototype.createBookmark({ name: name, link: link, categoryid: categoryId, action: 'add' });
        dom.$formCreate.find('input[type="text"]').val('');
        dom.makeFirstLiActive();
    }
});

dom.onRemoveBookmark = function (id) {
    dom.classBookmark.prototype.removeBookmark({ id: id, action: 'delete' });
    this.makeFirstLiActive();
};

dom.onEditBookmark = function (id) {
    $('.js-edit-form').remove();
    var block = void 0;

    dom.classBookmark.prototype.getBookmarkById(id).then(function (obj) {
        id = id.toString();
        $('.js-bookmark').each(function () {
            var index = $(this).attr('data-index');
            if (index === id) {
                block = $(this);
            }
        });
        return { obj: obj, block: block };
    }).then(function (data) {
        templateEditForm(data.obj, data.block);
    });
};

dom.onCancel = function () {
    $('.js-edit-form').remove();
};

dom.onSave = function (elem, id) {
    var form = $('.js-edit-form');
    var name = form.find('input[name="name"]').val(),
        link = form.find('input[name="link"]').val();

    dom.classBookmark.prototype.saveBookmark({ id: id, name: name, link: link, action: 'edit' });
    this.makeFirstLiActive();
};

dom.searchBookmarks = function (input) {
    var val = input.value;
    dom.classBookmark.prototype.searchBookmarks(val);
};

dom.sortByCategories = function (id) {
    id = id.toString();
    if (id === 'all') {
        dom.classBookmark.prototype.getAllBookmarks();
    } else {
        dom.classBookmark.prototype.getBookmarksByCategoryId(id);
    }

    // add active class
    dom.$listCategories.find('li').each(function (item) {
        $(this).removeClass('active');
        var dataID = $(this).attr('data-id');
        if (dataID === id) {
            $(this).addClass('active');
        }
    });
};