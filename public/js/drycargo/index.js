/**
 * Created by jayan on 16-7-17.
 */
$(document).ready(function(){
    function bindEvent(){
        $('li.business').on('click', function(){
            /*更换标签颜色*/

            $(this).parents('ul').children().each(function(){
                $(this).removeClass('selected');
            });
            $(this).addClass('selected');
            var tag = $(this).data('tag');
            $.ajax('/drycargo?tag=' + tag)
                .done(function(data){
                    $('div.right-content').html(data);
                    upWindow();
                })
                .fail(function(data){
                    console.log('读取文件出错！');
                });
        });

        function upWindow(){
            /*项目展示*/
            $(".con ul li").hover(function() {
                $(this).find(".txt").stop().animate({
                    height: "100%"
                }, 400);
                $(this).find(".txt h3").stop().animate({
                    paddingTop: "60px"
                }, 400);
            }, function() {
                $(this).find(".txt").stop().animate({
                    height: "45px"
                }, 400);
                $(this).find(".txt h3").stop().animate({
                    paddingTop: "0px"
                }, 400);
            })
        }

        upWindow();

    }

    bindEvent();
});