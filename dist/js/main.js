'use strict';

function makeFirstLiActive(ul) {
    ul.find('li').removeClass('active');
    ul.find('li:first-child').addClass('active');
}

// ADD (CREATE)
$formCreate.submit(function (event) {
    event.preventDefault();
    var form = $(this);
    var name = form.find('input[name="name"]').val(),
        link = form.find('input[name="link"]').val(),
        categoryId = $(this).find('#select-categories option:checked').val();

    if (name == '' || link == '') {
        alert('Заповніть всі поля!');
    } else {
        $.post('./app/bookmarks.php', {
            name: name,
            link: link,
            categoryid: categoryId,
            action: 'add'
        }, function (data) {
            arrayBookmarks = data.bookmarks.map(function (obj) {
                return obj;
            });
            buildContent(arrayBookmarks, $content);
            $formCreate.find('input[type="text"]').val('');
        });
    }
});

// DELETE
function remove(id) {
    $.post('./app/bookmarks.php', { id: id, action: 'delete' }, function (data) {
        arrayBookmarks = arrayBookmarks.filter(function (obj) {
            if (obj.id != id) {
                return obj;
            }
        });

        buildContent(arrayBookmarks, $content);
        makeFirstLiActive($listCategories);
        $('.js-edit-form').remove();
    });
};

// EDIT (build form)
function edit(id) {
    $('.js-edit-form').remove();
    var block = void 0;

    $('.js-bookmark').each(function () {
        var index = $(this).attr('data-index');
        if (index == id) {
            block = $(this);
        }
    });

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arrayBookmarks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var currentBookmark = _step.value;

            if (currentBookmark.id == id) {
                buildEditForm(currentBookmark, block);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};

// SAVE
function save(id) {
    var form = $('.js-edit-form');
    var name = form.find('input[name="name"]').val(),
        link = form.find('input[name="link"]').val();

    $.post('app/bookmarks.php', { id: id, name: name, link: link, action: 'edit' }, function () {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = arrayBookmarks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var currentBookmark = _step2.value;

                if (currentBookmark.id == id) {
                    currentBookmark.name = name;
                    currentBookmark.link = link;

                    buildContent(arrayBookmarks, $content);
                    makeFirstLiActive($listCategories);
                    $('.js-edit-form').remove();
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
    });
};

function cancel() {
    $('.js-edit-form').remove();
}

// SORT by categories
function sortByCategories(id) {
    var output = [];

    if (id == 'all') {
        buildContent(arrayBookmarks, $content);
    } else {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
            for (var _iterator3 = arrayBookmarks[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var currentBookmark = _step3.value;

                if (currentBookmark.categoryid == id) {
                    output.push(currentBookmark);
                }
            }
        } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                }
            } finally {
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }

        if (output.length) buildContent(output, $content);else $content.html('<div class="alert alert-danger">Закладок немає!</div>');
    }

    // add active class
    $listCategories.find('li').each(function (item) {
        $(this).removeClass('active');
        var dataID = $(this).attr('data-id');
        if (dataID == id) {
            $(this).addClass('active');
        }
    });

    $('.js-edit-form').remove();
};

// Initiliazation
$(document).ready(function () {
    $.get('./app/categories.php', function (data) {
        arrayCategories = data.categories.map(function (obj) {
            return obj;
        });
        buildCategories(arrayCategories, $listCategories);
        buildSelectCategories(arrayCategories, $selectCategories);
    });

    $.get('./app/bookmarks.php', function (data) {
        arrayBookmarks = data.bookmarks.map(function (obj) {
            return obj;
        });
        buildContent(arrayBookmarks, $content);
    });
});