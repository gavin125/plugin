/*! Vtype 1.0 for migang */
/*
 * 获得焦点时出现提示，失去焦点时判断结果
 */

window.onload=function(){
    //用户名
    var username=document.getElementById("username");
    var uName=username.getElementsByTagName("label")[0].getElementsByTagName("input")[0];
    uName.onfocus=function(){
        var msg=username.getElementsByTagName("p")[0];
        msg.innerHTML="<span></span><i></i>以字母、数字、下划线组成的5-15字符"
    };
    uName.onblur=function(){
        var msg=username.getElementsByTagName("p")[0];
        var re=/^[a-zA-Z]\w{4,14}$/i;
        if(this.value==""){//为空
            msg.innerHTML="<span></span><i class='error'></i>请输入用户名"
        }else if(!re.test(this.value)){//格式不正确
            msg.innerHTML="<span></span><i class='error'></i>用户名格式不正确"
        }else{
            msg.innerHTML="<span></span><i class='ok'></i>OK"
        }
    };

    //密码
    var password=document.getElementById("password");
    var pWord=password.getElementsByTagName("label")[0].getElementsByTagName("input")[0];
    pWord.onfocus=function(){
        var msg=password.getElementsByTagName("p")[1];
        msg.innerHTML="<span></span><i></i>6-18字符，请牢记您的密码"
    };
    pWord.onkeyup=function(){
        if(this.value.length>=8 && this.value.length<10){
            password.getElementsByTagName("p")[0].getElementsByTagName("em")[1].setAttribute('class','active');
            password.getElementsByTagName("p")[0].getElementsByTagName("em")[2].removeAttribute('class');
        }else if(this.value.length>=10){
            password.getElementsByTagName("p")[0].getElementsByTagName("em")[2].setAttribute('class','active')
        }else{
            password.getElementsByTagName("p")[0].getElementsByTagName("em")[1].removeAttribute('class');
        }
        if(this.value.length>=6){againPw.removeAttribute("disabled");}
    };
    pWord.onblur=function(){
        var msg=password.getElementsByTagName("p")[1];
        var re=/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,18}$/i;
        if(this.value==""){//为空
            msg.innerHTML="<span></span><i class='error'></i>请输入设置密码"
        }else if(this.value.length<6){//密码太短
            msg.innerHTML="<span></span><i class='error'></i>密码太短，不太安全哦"
        }else if(this.value.length>18){//密码太长
            msg.innerHTML="<span></span><i class='error'></i>密码太长，不利于记忆哦"
        }else{
            msg.innerHTML="<span></span><i class='ok'></i>OK"
        }
    };

    //重复密码
    var again_pw=document.getElementById("again_pw");
    var againPw=again_pw.getElementsByTagName("label")[0].getElementsByTagName("input")[0];
    againPw.onfocus=function(){
        var msg=again_pw.getElementsByTagName("p")[0];
        msg.innerHTML="<span></span><i></i>再次输入密码"
    };
    againPw.onblur=function(){
        var msg=again_pw.getElementsByTagName("p")[0];
        if(this.value==""){//为空
            msg.innerHTML="<span></span><i class='error'></i>请再次输入密码"
        }else if(this.value!=pWord.value){//密码太短
            msg.innerHTML="<span></span><i class='error'></i>两次密码不一致"
        }else{
            msg.innerHTML="<span></span><i class='ok'></i>OK"
        }
    };

    //手机号码
    var phonecode=document.getElementById("phonecode");
    var pCode=phonecode.getElementsByTagName("label")[0].getElementsByTagName("input")[0];
    pCode.onfocus=function(){
        var msg=phonecode.getElementsByTagName("p")[0];
        msg.innerHTML="<span></span><i></i>请输入手机号码"
    };
    pCode.onblur=function(){
        var msg=phonecode.getElementsByTagName("p")[0];
        var re=/^[1][3578]\d{9}$/i;
        if(this.value==""){//为空
            msg.innerHTML="<span></span><i class='error'></i>请输入手机号"
        }else if(!re.test(this.value)){
            msg.innerHTML="<span></span><i class='error'></i>手机号格式不正确"
        }else{
            msg.innerHTML="<span></span><i class='ok'></i>OK"
        }
    };

    //电子邮箱
    var e_mail=document.getElementById("e_mail");
    var eMail=e_mail.getElementsByTagName("label")[0].getElementsByTagName("input")[0];
    eMail.onfocus=function(){
        var msg=e_mail.getElementsByTagName("p")[0];
        msg.innerHTML="<span></span><i></i>您填写的邮箱将作为安全邮箱"
    };
    eMail.onblur=function(){
        var msg=e_mail.getElementsByTagName("p")[0];
        var re=/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/i;
        if(this.value==""){
            msg.innerHTML="<span></span><i class='error'></i>请输入邮箱"
        }else if(!re.test(this.value)){
            msg.innerHTML="<span></span><i class='error'></i>邮箱格式不正确"
        }else{
            msg.innerHTML="<span></span><i class='ok'></i>OK"
        }
    };

    //身份证
    var idcard=document.getElementById("idcard");
    var iCard=idcard.getElementsByTagName("label")[0].getElementsByTagName("input")[0];
    iCard.onfocus=function(){
        var msg=idcard.getElementsByTagName("p")[0];
        msg.innerHTML="<span></span><i></i>身份证号码将进行实名认证"
    };
    iCard.onblur=function(){
        var msg=idcard.getElementsByTagName("p")[0];
        var re=/^(\d{18,18}|\d{15,15}|\d{17,17}x)$/i;
        if(this.value==""){
            msg.innerHTML="<span></span><i class='error'></i>请输入身份证号码"
        }else if(!re.test(this.value)){
            msg.innerHTML="<span></span><i class='error'></i>身份证号码格式不正确"
        }else{
            msg.innerHTML="<span></span><i class='ok'></i>OK"
        }
    };

    //银行卡
    var bankcard=document.getElementById("bankcard");
    var bCard=bankcard.getElementsByTagName("label")[0].getElementsByTagName("input")[0];
    bCard.onfocus=function(){
        var msg=idcard.getElementsByTagName("p")[0];
        msg.innerHTML="<span></span><i></i>请填写常用银行卡"
    };
    bCard.onblur=function(){
        var msg=bankcard.getElementsByTagName("p")[0];
        var re=/^(\d{16,16}|\d{19,19})$/i;
        if(this.value==""){
            msg.innerHTML="<span></span><i class='error'></i>请输入银行卡号"
        }else if(!re.test(this.value)){
            msg.innerHTML="<span></span><i class='error'></i>银行卡号格式不正确"
        }else{
            msg.innerHTML="<span></span><i class='ok'></i>OK"
        }
    };
};

