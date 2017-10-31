define([], function () {
    require(['../addons/wangeditor/wangEditor', 'upload'], function (Editor, Upload) {
    var editor;
    $(".editor").each(function () {
        $(this).hide();
        var that = this;
        var id = $(this).attr("id");
        $("<div />").attr("id", id).insertAfter(this);
        editor = new Editor('#' + id);
        editor.customConfig.customUploadImg = function (files, insert) {
            for (var i = 0; i < files.length; i++) {
                Upload.api.send(files[i], function (data) {
                    var url = Fast.api.cdnurl(data.url);
                    insert(url);
                });
            }
        };
        editor.customConfig.onchange = function (html) {
            $(that).val(html);
        };
        editor.customConfig.zIndex = 100;
        editor.create();
        editor.txt.html($(this).val());
        $(this).data("wangeditor", editor);
    });

});

});