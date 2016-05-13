/*! Vtype 1.0 for migang */
/*
 *当失焦时进行表单验证，需要给表单配置Vtype属性如下：
 *   用户名：Vtype="username"
 *     密码：Vtype="password"
 * 重复密码：Vtype="again_pw"
 * 手机号码：Vtype="moblie"
 *     邮箱：Vtype="email"
 *
 */

var Vtype={
    getTxt:function(a,b){a.next("i").addClass("error").text(b)},
    getRight:function(a){a.next("i").removeClass("error").text("√")},
    err_txt:{
        null:"不能为空",
        form:"格式不正确",
        again:"两次密码不一致"
    },
    userName:function(a){//用户名规则：5-12位数字或字母，不含符号。
        a.focusout(function(){
            if(a.val()==""){Vtype.getTxt(a,Vtype.err_txt.null)}//为空
            else if(a.val().match(/^[a-zA-Z0-9]{5,12}$/)==null){Vtype.getTxt(a,Vtype.err_txt.form)}//格式不正确
            else{Vtype.getRight(a)}
        }).focusin(function(){
            a.keyup(function(){if(a.next("i").html()!=""){Vtype.getTxt(a,"")}});//聚焦后输入时，解除验证
        })
    },
    passWord:function(a){
        a.focusout(function(){//密码规则字母开头，6-18位（含字母数字下划线）字符
            if(a.val()==""){Vtype.getTxt(a,Vtype.err_txt.null)}
            else if(a.val().match(/^[a-zA-Z]\w{5,17}$/)==null){Vtype.getTxt(a,Vtype.err_txt.form)}
            else{Vtype.getRight(a)}
        }).focusin(function(){
            a.keyup(function(){if(a.next("i").html()!=""){Vtype.getTxt(a,"")}});//聚焦后输入时，解除验证
        })
    },
    againPw:function(a,b){
        a.focusout(function(){//先保证密码合规正常，在验证重复密码
            if(b.val().match(/^\S{6,18}$/)!=null){
                if(a.val()==""){Vtype.getTxt(a,Vtype.err_txt.null)}
                else if(a.val()!= b.val()){Vtype.getTxt(a,Vtype.err_txt.again)}
                else{Vtype.getRight(a)}
            }
        }).focusin(function(){
            a.keyup(function(){if(a.next("i").html()!=""){Vtype.getTxt(a,"")}});//聚焦后输入时，解除验证
        })
    },
    mobile:function(a){
        a.focusout(function(){//手机号码规则13/15/17/18开头的11位数字
            if(a.val()==""){Vtype.getTxt(a,Vtype.err_txt.null)}
            else if(a.val().match(/^[1][3578]\d{9}$/)==null){Vtype.getTxt(a,Vtype.err_txt.form)}
            else{Vtype.getRight(a)}
        }).focusin(function(){
            a.keyup(function(){if(a.next("i").html()!=""){Vtype.getTxt(a,"")}});//聚焦后输入时，解除验证
        })
    },
    eMail:function(a){
        a.focusout(function(){//邮箱以字母数字或下划线中划线点号开头，加@，在字母数字中划线，加.,在2到6位域名后缀
            if(a.val()==""){Vtype.getTxt(a,Vtype.err_txt.null)}
            else if(a.val().match( /^([0-9]{15})+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/)==null){Vtype.getTxt(a,Vtype.err_txt.form)}
            else{Vtype.getRight(a)}
        }).focusin(function(){
            a.keyup(function(){if(a.next("i").html()!=""){Vtype.getTxt(a,"")}});//聚焦后输入时，解除验证
        })
    },
    idCard:function(a){
        a.focusout(function(){//邮箱以字母数字或下划线中划线点号开头，加@，在字母数字中划线，加.,在2到6位域名后缀
            if(a.val()==""){Vtype.getTxt(a,Vtype.err_txt.null)}
            else if(a.val().match( /^\d{15}|\d{18}$/)==null){Vtype.getTxt(a,Vtype.err_txt.form)}
            else{Vtype.getRight(a)}
        }).focusin(function(){
            a.keyup(function(){if(a.next("i").html()!=""){Vtype.getTxt(a,"")}});//聚焦后输入时，解除验证
        })
    }

};
Vtype.userName($("input[Vtype=username]"));
Vtype.passWord($("input[Vtype=password]"));
Vtype.againPw($("input[Vtype=again_pw]"),$("input[Vtype=password]"));
Vtype.mobile($("input[Vtype=mobile]"));
Vtype.eMail($("input[Vtype=email]"));
Vtype.idCard($("input[Vtype=idcard]"));