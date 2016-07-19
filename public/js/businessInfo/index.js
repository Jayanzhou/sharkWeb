/**
 * Created by jayan on 16-7-13.
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
            $.ajax('/business_intro?tag=' + tag)
                .done(function(data){
                    $('div.right-content').html(data);
                })
                .fail(function(data){
                    console.log('读取文件出错！');
                });
        });
    }

    bindEvent();
});