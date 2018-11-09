/**
 * Created by NickanorOdumo.com on 2015/4/19.
 */
$(function(){
    NProgress.start();

    $(window).scroll(function(){  //ֻҪ���ڹ���,�ʹ����������
        var scrollt = document.documentElement.scrollTop + document.body.scrollTop; //��ȡ������ĸ߶�
        if( scrollt >200 ){  //�жϹ�����߶ȳ���200px,����ʾ
            $("#goToTop").fadeIn(400); //����
        }else{
            $("#goToTop").stop().fadeOut(400); //������ػ���û�г���,�͵���.�������stop()ֹ֮ͣǰ����,������������
        }
    });
    $("#goToTop").click(function(){ //�������ǩ��ʱ��,ʹ��animate��200�����ʱ����,��������
        $("html,body").animate({scrollTop:"0px"},200);
    });
    NProgress.done();
});
