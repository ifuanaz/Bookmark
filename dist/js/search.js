'use strict';

$search.on('keyup', function () {
    makeFirstLiActive($listCategories);

    var val = $(this).val();
    var output = [];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arrayBookmarks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var currentBookmark = _step.value;

            var isVal = currentBookmark.name.includes(val);
            if (isVal) {
                output.push(currentBookmark);
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

    if (output.length) {
        buildContent(output, $content);
    } else {
        $content.html('<div class="alert alert-danger">Нічого не знайдено!</div>');
    }
});