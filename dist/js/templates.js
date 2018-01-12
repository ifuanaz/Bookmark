'use strict';

function templateBookmarks(data, content) {
    var output = '';

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            output += '<div class="bookmark js-bookmark" data-index="' + item.id + '">\n                <div class="bookmark-item">\n                    <div>\n                        <a href="' + item.link + '" class="col btn">\n                            ' + item.name + '\n                        </a>\n                    </div>\n\n                    <div>\n                        <button type="button" class="btn btn-primary" onclick="dom.onEditBookmark(' + item.id + ')">\n                            <span class="glyphicon glyphicon-pencil"></span>\n                        </button>\n                        <button type="button" class="btn btn-danger" onclick="dom.onRemoveBookmark(' + item.id + ')">\n                            <span class="glyphicon glyphicon-remove"></span>\n                        </button>\n                    </div>\n                </div>\n\n            </div>';
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

    if (output) {
        content.html(output);
    } else {
        content.html('<div class="alert alert-danger">Закладок не існує!</div>');
    }
};

function templateCategories(data, content) {
    var output = '\n        <li class="list-group-item active" data-id="all">\n            <button type="button" class="btn btn-link" onclick="dom.sortByCategories(\'all\')">\n                \u0412\u0441\u0456 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457\n            </button>\n        </li>';

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;

            output += '\n            <li class="list-group-item" data-id="' + item.id + '">\n                <button type="button" class="btn btn-link" onclick="dom.sortByCategories(' + item.id + ')">\n                    ' + item.name + '\n                </button>\n            </li>';
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

    content.html(output);
}

function templateSelectCategories(data, content) {
    var output = '';

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var item = _step3.value;

            output += '<option value="' + item.id + '">' + item.name + '</option>';
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

    content.html(output);
}

function templateEditForm(obj, content) {
    var output = '\n        <form class="edit-form js-edit-form">\n            <div class="form-group">\n                <input type="text" class="form-control" value="' + obj.name + '" name="name" placeholder="\u041D\u0430\u0437\u0432\u0430 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438">\n            </div>\n            <div class="form-group">\n                <input type="text" class="form-control" value="' + obj.link + '" name="link" placeholder="\u0421\u0438\u043B\u043A\u0430 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438">\n            </div>\n            <button type="button" class="btn btn-primary" onclick="dom.onSave(this, ' + obj.id + ')">\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438</button>\n            <button type="button" class="btn btn-primary" onclick="dom.onCancel()">\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438</button>\n        </form>';

    content.append(output);
}