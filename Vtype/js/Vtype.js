/*! Vtype 1.0 for migang */
/*
 * 获得焦点时出现提示，失去焦点时判断结果
 */

var Vtype={
    //用户名
    userName:function(a){
        var msg=a.parent().siblings(".msg");
        a.focusin(function(){
            msg.html("<span></span><i></i>以字母、数字、下划线组成的5-15字符");
        }).focusout(function(){
            var re=/^[a-zA-Z]\w{4,14}$/i;//5-15位数字或字母下划线
            if(a.val()==""){
                msg.html("<span></span><i class='error'></i>请输入用户名")
            }else if(!re.test(this.value)) {
                msg.html("<span></span><i class='error'></i>用户名格式不正确")
            }else{
                msg.html("<span></span><i class='ok'></i>ok")
            }
        })
    },
    //密码
    passWord:function(a,b){
        var msg=a.parent().siblings(".msg");
        a.focusin(function(){
            msg.html("<span></span><i></i>6-18字符，请牢记您的密码");
        }).keyup(function(){
            if(a.val().length>=8 && a.val().length<10){
                a.parent().siblings(".pwlevel").find("em").eq(1).addClass("active").next().removeClass("active")
            }else if(a.val().length>=10){
                a.parent().siblings(".pwlevel").find("em").eq(2).addClass("active")
            }else{
                a.parent().siblings(".pwlevel").find("em").eq(1).removeClass("active")
            }
            if(a.val().length>=6){b.removeAttr("disabled");}
        }).focusout(function(){
            var re=/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,18}$/i;
            if(a.val()==""){
                msg.html("<span></span><i class='error'></i>请输入密码")
            }else if(a.val().length<6) {
                msg.html("<span></span><i class='error'></i>密码太短，不太安全哦")
            }else if(a.val().length>18) {
                msg.html("<span></span><i class='error'></i>密码太短，不利于记忆哦")
            }else{
                msg.html("<span></span><i class='ok'></i>ok")
            }
        })
    },
    //重复密码
    againPw:function(a,b){
        var msg=b.parent().siblings(".msg");
        b.focusin(function(){
            msg.html("<span></span><i></i>再次输入密码");
        }).focusout(function(){
            if(b.val()==""){
                msg.html("<span></span><i class='error'></i>请再次输入密码")
            }else if(b.val()!= a.val()) {
                msg.html("<span></span><i class='error'></i>两次密码不一致")
            }else{
                msg.html("<span></span><i class='ok'></i>ok")
            }
        })
    },
    phoneCode:function(a){
        var msg=a.parent().siblings(".msg");
        var re=/^[1][3578]\d{9}$/i;
        a.focusin(function(){
            msg.html("<span></span><i></i>请输入手机号码");
        }).focusout(function(){
            if(a.val()==""){
                msg.html("<span></span><i class='error'></i>请输入手机号码")
            }else if(!re.test(a.val())){
                msg.html("<span></span><i class='error'></i>手机号格式不正确")
            }else{
                msg.html("<span></span><i class='ok'></i>ok")
            }
        })
    },
    eMail:function(a){
        var msg=a.parent().siblings(".msg");
        var re=/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/i;
        a.focusin(function(){
            msg.html("<span></span><i></i>您填写的邮箱将作为安全邮箱");
        }).focusout(function(){
            if(a.val()==""){
                msg.html("<span></span><i class='error'></i>请输入邮箱")
            }else if(!re.test(a.val())){
                msg.html("<span></span><i class='error'></i>邮箱格式不正确")
            }else{
                msg.html("<span></span><i class='ok'></i>ok")
            }
        })
    },
    idCard:function(a){
        var msg=a.parent().siblings(".msg");
        var re=/^(\d{18,18}|\d{15,15}|\d{17,17}x)$/i;
        a.focusin(function(){
            msg.html("<span></span><i></i>身份证号码将进行实名认证");
        }).focusout(function(){
            if(a.val()==""){
                msg.html("<span></span><i class='error'></i>请输入身份证号码")
            }else if(!re.test(a.val())){
                msg.html("<span></span><i class='error'></i>身份证号码格式不正确")
            }else{
                msg.html("<span></span><i class='ok'></i>ok")
            }
        })
    },
    bankCard:function(a){
        var msg=a.parent().siblings(".msg");
        var re=/^(\d{16,16}|\d{19,19})$/i;
        a.focusin(function(){
            msg.html("<span></span><i></i>请填写常用银行卡");
        }).focusout(function(){
            if(a.val()==""){
                msg.html("<span></span><i class='error'></i>请输入银行卡号")
            }else if(!re.test(a.val())){
                msg.html("<span></span><i class='error'></i>银行卡号格式不正确")
            }else{
                msg.html("<span></span><i class='ok'></i>ok")
            }
        })
    }
};
Vtype.userName($("#uName"));
Vtype.passWord($("#pWord"),$("#againPw"));
Vtype.againPw($("#pWord"),$("#againPw"));
Vtype.phoneCode($("#pCode"));
Vtype.eMail($("#eMail"));
Vtype.idCard($("#iCard"));
Vtype.bankCard($("#bCard"));