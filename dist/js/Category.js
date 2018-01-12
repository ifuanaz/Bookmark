'use strict';

var Category = function Category() {
    this.title = 'Category';
    this.copyright = '2018';
};

Category.static = {
    URLS: {
        FETCH: './app/categories.php'
    }
};

Category.prototype = Object.create(Dom.prototype);
Dom.prototype.classCategory = Category;

Category.prototype.getAllCategories = function () {
    $.get(this.static.URLS.FETCH, function (data) {
        category.getDomCategories(data.categories);
    });
};

Category.prototype.static = Category.static;

var category = new Category();

Category.prototype.init = function () {
    this.getAllCategories();
};

$(document).ready(function () {
    category.init();
});