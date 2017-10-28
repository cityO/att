define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'user/index',
                    add_url: 'user/add',
                    edit_url: 'user/edit',
                    del_url: 'user/del',
                    multi_url: 'user/multi',
                    table: 'user',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'img', title: __('Preview'), formatter: Controller.api.formatter.thumb},
                        {field: 'name', title: __('Name')},
                        {field: 'sex', title: __('Sex'),formatter: function (value) {
                            return value=='1'? '男' : '女';
                        }},
                        {field: 'phone', title: __('Phone')},
                        {field: 'room', title: __('Room')},
                        {field: 'mettingadd', title: __('Mettingadd')},
                        {field: 'seatnum', title: __('Seatnum')},
                        {field: 'groupnum', title: __('Groupnum')},
                        {field: 'groupadd', title: __('Groupadd')},
                        {field: 'th', title: __('Th')},
                        {field: 'fv', title: __('Fv')},
                        {field: 'six', title: __('Six')},
                        {field: 'isload', title: __('Isload'),formatter:function (value) {
                               return value=='1' ? '已到场' : '未到场'
                        }},
                        {field: 'loadtime', title: __('Loadtime'), formatter: Table.api.formatter.datetime},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            },
            formatter: {
                thumb: function (value, row, index) {
                        var style = value == 'upyun' ? '!/fwfh/120x90' : '';
                        return '<a href="' + value + '" target="_blank"><img src="' + value+ '" alt="" style="max-height:90px;max-width:120px"></a>';

                },
                url: function (value, row, index) {
                    return '<a href="' + row.fullurl + '" target="_blank" class="label bg-green">' + value + '</a>';
                },
            }
        }
    };
    return Controller;
});