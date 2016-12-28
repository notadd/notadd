/**
 * Created by Cheer up on 2016/8/3.
 */
$(function () {
    $('[data-toggle="tabchang"] li').on('mouseover',function () {
        $(this).find(".out-bg").stop().animate({top:"10px",left:"10px",'z-index': 0},200);
    });
    $('[data-toggle="tabchang"] li').on('mouseout',function () {
        $(this).find(".out-bg").stop().animate({top:"0",left:"0",'z-index': 0},20);
    });

    $('[data-my-collapse]').each(function () {
        $(this).data('count', 0);
    });

    $('[data-my-collapse]').on('click', function () {
        var $collapse = $('#' +　$(this).data('my-collapse'));
        var count = $(this).data('count');
        count++;
        $(this).data('count', count);

        if(count % 2){
            $(this).stop().css("transform","rotate("+180+"deg)");
        }else {
            $(this).stop().css("transform","rotate("+0+"deg)");
        }

        if($collapse.css("hide")){
            $collapse.toggleClass('show');
        }else {
            $collapse.toggleClass('hide');
        }
    });
    /*mengceng*/
    $("a.special").on("click", function (e) {
        e.preventDefault();
        $(".donation").show("slow");
    });
    $(".donation").on("click", function (e) {
        $(".donation").hide("slow");
    });
});