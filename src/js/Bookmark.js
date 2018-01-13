'use strict';

let Bookmark = function() {
    this.title = 'Bookmark';
    this.copyright = '2018';
}

Bookmark.static = {
    URLS: {
        FETCH: './app/bookmarks.php'
    }
}

Bookmark.prototype = Object.create(Dom.prototype);
Dom.prototype.classBookmark = Bookmark;

Bookmark.prototype.getAllBookmarks = function() {
    $.get(this.static.URLS.FETCH, function(data) {
        // bookmark.arrayBookmarks = data.bookmarks.map(obj => obj);
        bookmark.getDomBookmarks(data.bookmarks);
    });
};

Bookmark.prototype.createBookmark = function(options) {
    // console.log(options);
    $.post(this.static.URLS.FETCH, options, function(data) {
        bookmark.getDomBookmarks(data.bookmarks);
    });
};

Bookmark.prototype.removeBookmark = function(options) {
    let bookmarks = [];
    $.post(this.static.URLS.FETCH, options, function(data) {
        bookmarks = data.bookmarks.filter(obj => obj.id != options.id);
        bookmark.getDomBookmarks(bookmarks);
    });
};

Bookmark.prototype.saveBookmark = function (options) {
    $.post(this.static.URLS.FETCH, options, function(data) {
        bookmark.getDomBookmarks(data.bookmarks);
    });
};

Bookmark.prototype.getBookmarksByCategoryId = function(id) {
    id = id.toString();
    let bookmarks = [];
    $.get(this.static.URLS.FETCH, function(data) {
        bookmarks = data.bookmarks.filter(obj => obj.categoryid === id);
        bookmark.getDomBookmarks(bookmarks);
    });
};

Bookmark.prototype.searchBookmarks = function(val) {
    let bookmarks = [];
    $.get(this.static.URLS.FETCH, function(data) {
        bookmarks = data.bookmarks.filter(obj => obj.name.includes(val));
        bookmark.getDomBookmarks(bookmarks);
    });
};

Bookmark.prototype.getBookmarkById = function(id) {
    return new Promise(resolve => {
        id = id.toString();
        let bookmark;
        $.get(this.static.URLS.FETCH, function(data) {
            bookmark = data.bookmarks.find(obj => obj.id === id);
            resolve(bookmark);
        });
    });
};

Bookmark.prototype.static = Bookmark.static;

Bookmark.prototype.init = function () {
    this.getAllBookmarks();
};

let bookmark = new Bookmark();

$(document).ready(function() {
    bookmark.init();
});
