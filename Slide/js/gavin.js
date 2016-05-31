var gavin={
//左右循环滚动
    scrollX:function(a,speed,t,l){//a:DOM节点,speed:自动滚动的速度（越小越快）,t:前后点击移动执行时间,l:前后点击移动距离
        var b=a.find(".visitable");
        var n=a.find("li").length;
        var s=n*a.find("li").width()+n*parseInt(a.find("li").css("marginRight"))
        a.find(".list").append(a.find(".list").html())
        function toLeft(){
            if(b.scrollLeft()>=s){
                b.scrollLeft(b.scrollLeft()-s)
            }else{
                var left=b.scrollLeft();
                left++;
                b.scrollLeft(left);
            }
        }
        var timeac=setInterval(function(){toLeft()},speed)
        a.find(".pBtn").click(function(){if(b.scrollLeft()<=l){b.scrollLeft(b.scrollLeft()+s)};b.animate({"scrollLeft":"-="+l},t)}).hover(function(){clearInterval(timeac);},function(){timeac=setInterval(function(){toLeft()},speed)})
        a.find(".nBtn").click(function(){if(b.scrollLeft()>=s){b.scrollLeft(b.scrollLeft()-s)};b.animate({"scrollLeft":"+="+l},t)}).hover(function(){clearInterval(timeac);},function(){timeac=setInterval(function(){toLeft()},speed)})
    },

//带下标左右滚动
    scrollSub:function(a,t1,t2){//a:DOM节点,t1:动画间隔时间,t2:滚动执行时间
        var b=a.find(".visitable");
        var dot=a.find(".dot").children("a");
        var n=a.find("li").length;
        var s=n*a.find("li").width()+n*parseInt(a.find("li").css("marginRight"))
        a.find(".list").append(a.find(".list").html());
        var i=0;
        function toLeft(t){
            if(i==n-1){i=0}else{i++}
            if(b.scrollLeft()>=s){b.scrollLeft(b.scrollLeft()-s);}
            b.animate({"scrollLeft":"+="+a.find("li").width()},t)
            dot.eq(i).addClass("hover").siblings().removeClass("hover")
        }
        var timeac=setInterval(function(){toLeft(t2)},t1)
        dot.hover(function(){clearInterval(timeac);},function(){timeac=setInterval(function(){toLeft(t2)},t1)}).click(function(){
            $(this).addClass("hover").siblings().removeClass("hover");
            i=$(this).index();
            b.animate({"scrollLeft":i*a.find("li").width()},t2);
        })
    },

//左右逐张滚动
    scrollOne:function(a,t1,t2){//a:DOM节点,t1:动画间隔时间,t2:滚动执行时间
        var b=a.find(".visitable");
        var n=a.find("li").length;
        var s=n*a.find("li").width()+n*parseInt(a.find("li").css("marginRight"))
        a.find(".list").append(a.find(".list").html());
        var i=0;
        function toLeft(t){
            if(i==n-1){i=0}else{i++};
            if(b.scrollLeft()>=s){b.scrollLeft(b.scrollLeft()-s);}
            b.animate({"scrollLeft":"+="+[a.find("li").width()+parseInt(a.find("li").css("marginRight"))]},t)
        }
        var timeac=setInterval(function(){toLeft(t2)},t1)
        a.find(".pBtn").click(function(){if(i==0){b.scrollLeft(b.scrollLeft()+s);i=n-1;};b.animate({"scrollLeft":"-="+[a.find("li").width()+parseInt(a.find("li").css("marginRight"))]},t2);i--;}).hover(function(){clearInterval(timeac);},function(){timeac=setInterval(function(){toLeft(t2)},t1)})
        a.find(".nBtn").click(function(){if(i==n){b.scrollLeft(0);i=0;};b.animate({"scrollLeft":"+="+[a.find("li").width()+parseInt(a.find("li").css("marginRight"))]},t2);i++;}).hover(function(){clearInterval(timeac);},function(){timeac=setInterval(function(){toLeft(t2)},t1)})
    },

//带下标图片切换
    switchAlpha:function(a,t1,t2){
        var n=a.find("li").length;
        var dot=a.find(".dot").children("a");
        a.find("li").slice(1).css("opacity","0");
        var i=0;
        function toAlpha(t){
            if(i<n-1){i++;}else{i=0;}
            a.find("li").eq(i).css("z-index","2").animate({opacity:1},t).siblings().css("z-index","1").animate({opacity:0},t)
            dot.eq(i).addClass("hover").siblings().removeClass("hover")
        }
        var timeac=setInterval(function(){toAlpha(t2)},t1);
        dot.hover(function(){clearInterval(timeac);},function(){timeac=setInterval(function(){toAlpha(t2)},t1)}).click(function(){
            $(this).addClass("hover").siblings().removeClass("hover");
            i=$(this).index();
            a.find("li").eq(i).css("z-index","2").animate({opacity:1},t2).siblings().css("z-index","1").animate({opacity:0},t2)
        })
    },

//上下逐张滚动
    scrollY:function(a,speed,t,l){//a:DOM节点,speed:自动滚动的速度（越小越快）,t:前后点击移动执行时间,l:前后点击移动距离
        var n=a.find("li").length;
        var b=a.find(".list");
        var s=n*a.find("li").height()+n*parseInt(a.find("li").css("marginBottom"));
        a.find(".list").append(a.find(".list").html());
        function toTop(){
            if(b.scrollTop()>=s){
                b.scrollTop(b.scrollTop()-s)
            }else{
                var top=b.scrollTop();
                top++;
                b.scrollTop(top);
            }
        }
        var timeac=setInterval(function(){toTop()},speed)
        a.find(".pBtn").click(function(){if(b.scrollTop()<=l){b.scrollTop(b.scrollTop()+s)};b.animate({"scrollTop":"-="+l},t)}).hover(function(){clearInterval(timeac);},function(){timeac=setInterval(function(){toTop()},speed)})
        a.find(".nBtn").click(function(){if(b.scrollTop()>=s){b.scrollTop(b.scrollTop()-s)};b.animate({"scrollTop":"+="+l},t)}).hover(function(){clearInterval(timeac);},function(){timeac=setInterval(function(){toTop()},speed)})
    },

//上下逐张滚动
    scrollOneY:function(a,t1,t2){//a:DOM节点,t1:动画间隔时间,t2:滚动执行时间
        var n=a.find("li").length;
        var b=a.find(".list");
        var s=n*a.find("li").height()+n*parseInt(a.find("li").css("marginBottom"));
        a.find(".list").append(a.find(".list").html());
        var i=0;
        function toTop(t){
            if(i==n-1){i=0}else{i++};
            if(b.scrollTop()>=s){b.scrollTop(b.scrollTop()-s);}
            b.animate({"scrollTop":"+="+[a.find("li").height()+parseInt(a.find("li").css("marginBottom"))]},t)
        }
        var timeac=setInterval(function(){toTop(t2)},t1)
        a.find(".pBtn").click(function(){if(i==0){b.scrollTop(b.scrollTop()+s);i=n-1;};b.animate({"scrollTop":"-="+[a.find("li").height()+parseInt(a.find("li").css("marginBottom"))]},t2);i--;}).hover(function(){clearInterval(timeac);},function(){timeac=setInterval(function(){toTop(t2)},t1)})
        a.find(".nBtn").click(function(){if(i==n){b.scrollTop(0);i=0;};b.animate({"scrollTop":"+="+[a.find("li").height()+parseInt(a.find("li").css("marginBottom"))]},t2);i++;}).hover(function(){clearInterval(timeac);},function(){timeac=setInterval(function(){toTop(t2)},t1)})
    },

//左右手风琴效果
    Accordion:function(a,t1,t2){//a:DOM节点,t:动画执行时间
        var n=a.find("li").length;
        var b=a.find(".list");
        var w=a.find(".list").width();
        var w1=a.find("li").width();
        var w2=parseInt([w-w1-n*parseInt(a.find("li").css("marginRight"))]/[n-1]);
        b.find("li").slice(1).width(w2);
        var i=0;
        function toNum(t){
            if(i<n-1){i++;}else{i=0;}
            b.find("li").eq(i).stop().animate({width:w1},t).siblings().stop().animate({width:w2},t)
        }
        var timeac=setInterval(function(){toNum(t2)},t1);
        b.find("li").hover(function(){
            clearInterval(timeac);
            i=$(this).index();
            $(this).stop().animate({width:w1},t2).siblings().stop().animate({width:w2},t2)
        },function(){timeac=setInterval(function(){toNum(t2)},t1)})
    },

    //带下标上下滚动
    scrollSubY:function(a,t1,t2){//a:DOM节点,t1:动画间隔时间,t2:滚动执行时间
        var n=a.find("li").length;
        var dot=a.find(".dot").children("a");
        var b=a.find(".list");
        var s=n*a.find("li").height();
        a.find(".list").append(a.find(".list").html());
        var i=0;
        function toTop(t){
            if(i==n-1){i=0}else{i++};
            if(b.scrollTop()>=s){b.scrollTop(b.scrollTop()-s);}
            b.animate({"scrollTop":"+="+[a.find("li").height()]},t);
            dot.eq(i).addClass("hover").siblings().removeClass("hover");
        }
        var timeac=setInterval(function(){toTop(t2)},t1)
        dot.hover(function(){clearInterval(timeac);},function(){timeac=setInterval(function(){toTop(t2)},t1)}).click(function(){
            $(this).addClass("hover").siblings().removeClass("hover");
            i=$(this).index();
            b.animate({"scrollTop":i*a.find("li").height()},t2);
        })
    },

    //全屏漂浮图标
    fullFly:function(a,x,y,s,m){//a:DOM节点,x:起始横坐标,y:起始纵坐标,s:每次移动的距离(px),m:动画间隔时间,c:是否带关闭按钮(0表示否，其他为是)
        a.find(".close").click(function(){a.hide();})
        a.css({left:x,top:y});
        var xx=yy=true;
        var l=t=0;
        var r=$(window).width()-a.width();
        var b =$(window).height()-a.height();
        $(window).scroll(function(){
            t=$(window).scrollTop();
            b =$(window).height()-a.height()+t;})
        var flyac=setInterval(function(){fly()},m)
        function fly(){
            x=x+s*(xx?1:-1);
            if(x>=r){xx=false;}else if(x<=l){xx=true}else{};
            y=y+s*(yy?1:-1);
            if(y>=b){yy=false;}else if(y<=t){yy=true}else{};
            a.css({left:x,top:y});
        }
        a.hover(function(){clearInterval(flyac)},function(){flyac=setInterval(function(){fly()},m)})
    },

}
