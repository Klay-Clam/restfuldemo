// menu 界面的模板
define("menu", [], function () {

    var menuModule = {};

    var tagCloudTemp = "<div><h2 style='text-align: center'>Tag Cloud</h2><div class='container'></div></div>";
    var tagTemp = "<span class='tags-style'>taggg</span>";
    menuModule.tagCloudTemp = tagCloudTemp;
    menuModule.tagTemp = tagTemp;
    return menuModule;
});
