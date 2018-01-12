<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Bookmarks</title>
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="dist/css/main.css">
</head>
<body>

    <div class="main">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h3>Категорії</h3>
                    <ul id="list-categories" class="list-group">Загрузка...</ul>
                </div>
                <div class="col-md-8">
                    <h3 class="bookmarks-title">Закладки</h3>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="form-group">
                                <input type="text" onkeyup="dom.searchBookmarks(this)" class="form-control" placeholder="Пошук">
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div id="content-bookmarks" class="list-group">Загрузка...</div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-8">
                    <br>
                    <h5>Створення закладки</h5>
                    <form id="form-create">
                        <div class="form-group">
                            <input type="text" class="form-control" name="name" placeholder="Назва закладки">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="link" placeholder="Силка на закладку">
                        </div>
                        <div class="form-group">
                            <label>Виберіть категорію:</label>
                            <select id="select-categories" class="form-control" name="categories"></select>
                        </div>
                        <button type="submit" id="send-form" class="btn btn-primary">Добавити закладку</button>
                    </form>
                </div>
                <div class="col-xs-12">
                    <p class="copyright">Developed by Nazar Hamuliak.</p>
                </div>
            </div>
        </div>
    </div>

    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="dist/js/variables.js"></script>
    <script src="dist/js/templates.js" charset="utf-8"></script>
    <script src="dist/js/Dom.js" charset="utf-8"></script>
    <script src="dist/js/Bookmark.js" charset="utf-8"></script>
    <script src="dist/js/Category.js" charset="utf-8"></script>

    <!-- <script src="dist/js/buildDOM.js"></script> -->
    <!-- <script src="dist/js/search.js"></script> -->
    <!-- <script src="dist/js/main.js"></script> -->
</body>
</html>
