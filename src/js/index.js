require('../less/index.less');
import $ from 'jquery';

(function () {
    var wrapper = $('.wrapper'),
    oli = $('li');
    function init () {
        addEvent();
    }
    function addEvent () {
        var len = oli.length;
        for(var i = 0; i < len; i++){
            direction(oli[i])
        }
        
    }
    function direction(item) {
        var item = $(item);
        item.on('mouseenter',function (e){
            item.removeClass()
            item.addClass(setdirection(e,'in-',item));
        })
        item.on('mouseleave',function (e) {
            item.removeClass()
            item.addClass(setdirection(e,'out-',item));
           
        })
    }
    function getdirection(e,item){
        var x = e.pageX - item.offset().left - item.width()/2,
            y = e.pageY - item.offset().top - item.height()/2;
        return  Math.round((((Math.atan2(y,x) * (180 / Math.PI))+ 180)/90)+3)%4;
            
    }
    function setdirection(e,state,item) {
        var str = '',
            dire = getdirection(e,item);
        switch(dire){
            case 0 :
            str = 'top';
            break;
            case 1 :
            str = 'right';
            break;
            case 2 :
            str = 'bottom';
            break;
            case 3 :
            str = 'left';
            break;
        }
        return (state + str)
    }
    return init()
}())