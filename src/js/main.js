function makeFirstLiActive(ul) {
    ul.find('li').removeClass('active');
    ul.find('li:first-child').addClass('active');
}


// ADD (CREATE)
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
        $.post(
            './app/bookmarks.php',
            {
                name: name,
                link: link,
                categoryid: categoryId,
                action: 'add'
            },
            function(data) {
                arrayBookmarks = data.bookmarks.map(obj => {return obj});
                buildContent(arrayBookmarks, $content);
                $formCreate.find('input[type="text"]').val('');
            }
        );
    }

});


// DELETE
function remove(id) {
    $.delete('./app/bookmarks.php', {id: id, action: 'delete'}, function(data) {
        arrayBookmarks = arrayBookmarks.filter(obj => {
            if(obj.id != id) {
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
    let block;

    $('.js-bookmark').each(function() {
        let index = $(this).attr('data-index');
        if(index == id) {
            block = $(this);
        }
    });

    for (let currentBookmark of arrayBookmarks) {
        if(currentBookmark.id == id) {
            buildEditForm(currentBookmark, block);
        }
    }
};


// SAVE
function save(id) {
    let form = $('.js-edit-form');
    let name = form.find('input[name="name"]').val(),
        link = form.find('input[name="link"]').val();

    $.put('app/bookmarks.php', {id: id, name: name, link: link, action: 'edit'}, function () {
        for (let currentBookmark of arrayBookmarks) {
            if(currentBookmark.id == id) {
                currentBookmark.name = name;
                currentBookmark.link = link;

                buildContent(arrayBookmarks, $content);
                makeFirstLiActive($listCategories);
                $('.js-edit-form').remove();
            }
        }
    });
};


function cancel() {
    $('.js-edit-form').remove();
}


// SORT by categories
function sortByCategories(id) {
    let output = [];

    if(id == 'all') {
        buildContent(arrayBookmarks, $content);
    }
    else {
        for(let currentBookmark of arrayBookmarks) {
            if(currentBookmark.categoryid == id) {
                output.push(currentBookmark);
            }
        }
        if(output.length)
            buildContent(output, $content);
        else
            $content.html('<div class="alert alert-danger">Закладок немає!</div>');
    }

    // add active class
    $listCategories.find('li').each(function(item) {
        $(this).removeClass('active');
        let dataID = $(this).attr('data-id');
        if(dataID == id) {
            $(this).addClass('active');
        }
    });

    $('.js-edit-form').remove();
};


// Initiliazation
$(document).ready(function() {
    $.get('./app/categories.php', function(data) {
        arrayCategories = data.categories.map(obj => {return obj});
        buildCategories(arrayCategories, $listCategories);
        buildSelectCategories(arrayCategories, $selectCategories);
    });

    $.get('./app/bookmarks.php', function(data) {
        arrayBookmarks = data.bookmarks.map(obj => {return obj});
        buildContent(arrayBookmarks, $content);
    });
});
