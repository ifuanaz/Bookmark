function templateBookmarks(data, content) {
    let output = '';

    for(let item of data) {
        output +=
            `<div class="bookmark js-bookmark" data-index="${item.id}">
                <div class="bookmark-item">
                    <div>
                        <a href="${item.link}" class="col btn">
                            ${item.name}
                        </a>
                    </div>

                    <div>
                        <button type="button" class="btn btn-primary" onclick="dom.onEditBookmark(${item.id})">
                            <span class="glyphicon glyphicon-pencil"></span>
                        </button>
                        <button type="button" class="btn btn-danger" onclick="dom.onRemoveBookmark(${item.id})">
                            <span class="glyphicon glyphicon-remove"></span>
                        </button>
                    </div>
                </div>

            </div>`;
    }

    if(output) {
        content.html(output);
    }
    else {
        content.html('<div class="alert alert-danger">Закладок не існує!</div>');
    }
};


function templateCategories(data, content) {
    let output = `
        <li class="list-group-item active" data-id="all">
            <button type="button" class="btn btn-link" onclick="dom.sortByCategories('all')">
                Всі категорії
            </button>
        </li>`;

    for(let item of data) {
        output += `
            <li class="list-group-item" data-id="${item.id}">
                <button type="button" class="btn btn-link" onclick="dom.sortByCategories(${item.id})">
                    ${item.name}
                </button>
            </li>`;
    }

    content.html(output);
}


function templateSelectCategories(data, content) {
    let output = '';

    for (let item of data) {
        output += '<option value="'+ item.id +'">'+ item.name +'</option>';
    }

    content.html(output);
}


function templateEditForm(obj, content) {
    let output = `
        <form class="edit-form js-edit-form">
            <div class="form-group">
                <input type="text" class="form-control" value="${obj.name}" name="name" placeholder="Назва закладки">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" value="${obj.link}" name="link" placeholder="Силка закладки">
            </div>
            <button type="button" class="btn btn-primary" onclick="dom.onSave(this, ${obj.id})">Зберегти</button>
            <button type="button" class="btn btn-primary" onclick="dom.onCancel()">Відмінити</button>
        </form>`;

    content.append(output);
}
