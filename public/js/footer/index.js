/**
 * Created by jayan on 16-7-17.
 */
function bindEvent(){
    /*底部联系我们弹窗*/
    $('.contacts').on('mouseover', function(){
        $('.contact-us').removeClass('hide');
    });
    $('.contacts').on('mouseout', function(){
        $('.contact-us').addClass('hide');
    });
}

$(document).ready(function(){
    bindEvent();
});