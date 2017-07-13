$(document).ready(function(){
    var content = $('div.class_content');
    var defaultSize = content.css('fontSize');

    $('#switcher button').click(function(){
        var num = parseFloat(content.css('fontSize'));
        
        switch(this.id){
            case 'switcher-narrow':
                num = num / 1.4;
                break;

            case 'switcher-large':
                num = num * 1.4;
                break;

            default:
                num = parseFloat(defaultSize);
        }

        content.css('fontSize', num + 'px');
    });

    $('.basic_conversation_index').click(function(){
        //动画研究
        //hide和show方法会同时改变元素的宽度，高度和不透明度
        // $('.basic_conversation_content').hide();
        // $('.basic_conversation_content').hide(900);

        //fadeIn和fadeOut会改变元素的不透明度
        // $('.basic_conversation_content').fadeOut('slow');

        //slideUp和slideDown会改变元素的高度
        // $('.basic_conversation_content').slideUp('slow');

        //toggle集成了hide和show的效果，针对当前状态进行相反的变换
        // $('.basic_conversation_content').toggle('slow');

        //slideToggle集成了slideUp和slideDown，针对当前状态进行想法的变换
        // $('.basic_conversation_content').slideToggle('slow');

        //自定义动画
        //自定义动画使用animate函数，这个函数的参数可以接收两种形式的参数
        //第一种形式:可以接收四个参数
        //第一个参数：一个包含样式属性及值得对象
        //第二个参数: 可选的时长参数
        //第三个参数: 可选的缓动类型
        //第四个参数: 可选的回调函数

        //应用1:用animate实现toggle的效果（高度，宽度，不透明度三个属性同时变换）
        // $('.basic_conversation_content').animate({height: 'toggle', width: 'toggle', opacity: 'toggle'}, 'slow');

        //应用2:用animate实现slideToggle的效果（变换高度）
        // $('.basic_conversation_content').animate({height: 'toggle'}, 'slow');
         $(this).parent().children(".basic_conversation_content").animate({height: 'toggle'}, 'slow');

        //效果的实现有并发和排队两种
        //多个效果的并发的实现可以在animate方法的第一个参数的属性对象中写入需要并发改变的属性即可
        //多个效果的排队就是将不同的效果进行连缀
        
        //让连缀中的效果同时执行
        //越过队列
        //队列中只要用到这种打破队列的方式的效果都被合并到队列的第一个效果中去,而不是被合并到队列中的上一个效果中，
        //下面就是证明的例子
        // $('.basic_conversation_content').animate({height: 'toggle'}, 'slow')
        //                                 .animate({height: 'toggle'}, 'slow')
        //                                 .queue(function(next){
        //                                     $(this).css('color', 'green')
        //                                     next(); //此处必须调用next()否则，动画效果就此中断
        //                                 })
        //                                 .animate({width: 'toggle'}, 'slow')
        //                                 .animate({width: 'toggle'}, 'slow')
        // .animate({opacity: 0.2}, {duration: 'slow', queue: false}); //这里将此效果合并到了效果队列的最开始

        //效果排队不能应用到其他的非效果方法，比如css(),如果要把非效果方法添加到效果队列中，可以使用.queue()方法
        // $('.basic_conversation_content').slideToggle(2000)
        //                                 .animate({opacity: 'toggle'}, 2000)
        //                                 .queue(function(next){
        //                                     $(this).css('color', 'green')
        //                                     next(); //此处必须调用next()否则，动画效果就此中断
        //                                 })
        //                                 .slideToggle(2000);


    });

    $('.basic_conversation_index').on('dblclick', function(){

        //动画研究
        // $('.basic_conversation_content').show();
        // $('.basic_conversation_content').fadeIn('slow');
        // $('.basic_conversation_content').slideDown('slow');
        
    });

    // var height = $('.basic_conversation_content').children().eq(0).css('height');

    // var h = height.substr(0, height.length - 2);

    // var hh = h*$('.basic_conversation_content').children().length + 'px'

    // $('.basic_conversation_index').css('height', hh);

    $('.basic_conversation').each(function(index){
        var ps = $(this).find('.basic_conversation_content').children('p');
        var pNum = ps.length;
        var pHeightStr = ps.eq(pNum - 1).css('height');
        var pHeight = parseInt(pHeightStr.substr(0, pHeightStr.length - 2));
        var pMarginTopStr = ps.eq(pNum - 1).css('margin-top');
        var pMarginTop = parseInt(pMarginTopStr.substr(0, pMarginTopStr.length - 2));
        var totalHeight = pNum * (pHeight + pMarginTop);
        $(this).find('.basic_conversation_index').css('height', totalHeight + 'px');
        $(this).find('.basic_conversation_index').css('line-height', totalHeight + 'px');
        $(this).find('.basic_conversation_content').css('height', totalHeight + 'px');
    });


});