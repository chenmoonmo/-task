var eg={};
    eg.$=function(id){
        return document.getElementById(id);
    };
    eg.regCheck=function(){
        var uid=eg.$("userid");
        var upwd=eg.$("userpwd");
        var upwd2=eg.$("userwd2");
        if(uid.value==""){
            alert('账户不能为空');
            eg.err();
            return false;
        }
        if(upwd.value==""){
            alert('密码不能为空')
            eg.err();
            return false;
        }
        if(upwd.value!=upwd2.value){
            alert('两次输入密码不同')
            eg.err();
            return false;
        }
        var about=eg.$("about");
        if(about.value.length>60){
            alert("简介太长")
            eg.err();
            return false;
        }
        return ture
    }