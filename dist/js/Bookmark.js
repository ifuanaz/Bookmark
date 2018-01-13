'use strict';

var Bookmark = function Bookmark() {
    this.title = 'Bookmark';
    this.copyright = '2018';
};

Bookmark.static = {
    URLS: {
        FETCH: './app/bookmarks.php'
    }
};

Bookmark.prototype = Object.create(Dom.prototype);
Dom.prototype.classBookmark = Bookmark;

Bookmark.prototype.getAllBookmarks = function () {
    $.get(this.static.URLS.FETCH, function (data) {
        // bookmark.arrayBookmarks = data.bookmarks.map(obj => obj);
        bookmark.getDomBookmarks(data.bookmarks);
    });
};

Bookmark.prototype.createBookmark = function (options) {
    // console.log(options);
    $.post(this.static.URLS.FETCH, options, function (data) {
        bookmark.getDomBookmarks(data.bookmarks);
    });
};

Bookmark.prototype.removeBookmark = function (options) {
    var bookmarks = [];
    $.post(this.static.URLS.FETCH, options, function (data) {
        bookmarks = data.bookmarks.filter(function (obj) {
            return obj.id != options.id;
        });
        bookmark.getDomBookmarks(bookmarks);
    });
};

Bookmark.prototype.saveBookmark = function (options) {
    $.post(this.static.URLS.FETCH, options, function (data) {
        bookmark.getDomBookmarks(data.bookmarks);
    });
};

Bookmark.prototype.getBookmarksByCategoryId = function (id) {
    id = id.toString();
    var bookmarks = [];
    $.get(this.static.URLS.FETCH, function (data) {
        bookmarks = data.bookmarks.filter(function (obj) {
            return obj.categoryid === id;
        });
        bookmark.getDomBookmarks(bookmarks);
    });
};

Bookmark.prototype.searchBookmarks = function (val) {
    var bookmarks = [];
    $.get(this.static.URLS.FETCH, function (data) {
        bookmarks = data.bookmarks.filter(function (obj) {
            return obj.name.includes(val);
        });
        bookmark.getDomBookmarks(bookmarks);
    });
};

Bookmark.prototype.getBookmarkById = function (id) {
    var _this = this;

    return new Promise(function (resolve) {
        id = id.toString();
        var bookmark = void 0;
        $.get(_this.static.URLS.FETCH, function (data) {
            bookmark = data.bookmarks.find(function (obj) {
                return obj.id === id;
            });
            resolve(bookmark);
        });
    });
};

Bookmark.prototype.static = Bookmark.static;

Bookmark.prototype.init = function () {
    this.getAllBookmarks();
};

var bookmark = new Bookmark();

$(document).ready(function () {
    bookmark.init();
});