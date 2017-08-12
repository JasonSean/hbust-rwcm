// Java Document
var id = function(el) {          return document.getElementById(el);        },
        c = id('photo-list');
    if(c) {
        var ul = id('scroll'),
            lis = ul.getElementsByTagName('li'),
            itemCount = lis.length,
            width = lis[0].offsetWidth, //获得每个img容器的宽度
            marquee = function() {
                c.scrollLeft += 0;
                if(c.scrollLeft % width <= 962){  //当 c.scrollLeft 和 width 相等时，把第一个img追加到最后面
                    ul.appendChild(ul.getElementsByTagName('li')[0]);
                    c.scrollLeft = 962;
                };
            },
            speed = 2500; //数值越大越慢
        ul.style.width = width*itemCount + 'px'; //加载完后设置容器长度        
        var timer = setInterval(marquee, speed);
        c.onmouseover = function() {
            clearInterval(timer);
        };
        c.onmouseout = function() {
            timer = setInterval(marquee, speed);
        };
    };