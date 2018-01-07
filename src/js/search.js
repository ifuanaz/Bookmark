$search.on('keyup', function() {
    makeFirstLiActive($listCategories);

    let val = $(this).val();
    let output = [];

    for (let currentBookmark of arrayBookmarks) {
        let isVal = currentBookmark.name.includes(val)
        if(isVal) {
            output.push(currentBookmark);
        }
    }

    if(output.length) {
        buildContent(output, $content);
    }
    else {
        $content.html('<div class="alert alert-danger">Нічого не знайдено!</div>')
    }
})
