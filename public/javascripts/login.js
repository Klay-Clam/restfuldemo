$(function () {
    var inputEvent = new OnBlurOrFocus($("#email"));
    inputEvent._blur();
    inputEvent._focus();
});

/*
* 封装聚焦和从input移除焦点的 对象
* */
function OnBlurOrFocus(input) {
    var O = new Object();
    O.node = input;

    O._blur = function () {
        this.node.on("blur",function () {
            console.log("blur");
        });
    };
    O._focus = function () {
        this.node.on("focus",function () {
            console.log("focus");
        })
    }

    return O;
}


/*
* 用户输入e-mail之后，触发失焦事件，ajax 获取 keyToken
* */
