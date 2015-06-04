// проверка мобильных
window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
//пакет для декстоп
function desktop(){
  blockAnimate(
    $('.left-sidebar-presentation'),
    $('.left-sidebar-timeline'),
    $('.left-sidebar-timeline-item'), 
    $('.left-sidebar-education'),
    $('.left-sidebar-education-curse'),
    $('.left-sidebar-skills'),
    $('.left-sidebar-portfolio'),
    $('.left-sidebar-faq')
  );
  hideOnClick(
    $('.left-sidebar-hide-button')
  );
  hideSidebarOnScroll(
    $('#left-sidebar-timeline'),
    $('.right-sidebar'),
    $('.left-sidebar')
  );
  spoilerButton(
    $('.sidebar-timeline-spoiler-btn'), 
    $('.sidebar-timeline-spoiler-content')
  );
  slickSlider(
    $('.slick-slider'), 
    $('.slick-prev'), 
    $('.slick-next')
  );
  progressAnimateOnTrigger($('.skills-wrapper'))
  portfolioGallery($('.fancybox-trigger'));
  menuAnimation(
    $('.menu-button'),
    $('.modal-close'),
    $('.cd-bouncy-nav-modal'),
    $('.modal-nav-button')
  );
};
// пакет для мобильных 
function mobile(){
  mobileHideUI(
    $('.left-sidebar-hide-button'),
    $('.menu-button').children('span')
  );
  blockAnimate(
    $('.left-sidebar-presentation'),
    $('.left-sidebar-timeline'),
    $('.left-sidebar-timeline-item'), 
    $('.left-sidebar-education'),
    $('.left-sidebar-education-curse'),
    $('.left-sidebar-skills'),
    $('.left-sidebar-portfolio'),
    $('.left-sidebar-faq')
  );
  spoilerButton(
    $('.sidebar-timeline-spoiler-btn'), 
    $('.sidebar-timeline-spoiler-content')
  );
  slickSlider(
    $('.slick-slider'), 
    $('.slick-prev'), 
    $('.slick-next')
  );
  progressAnimateOnTrigger($('.skills-wrapper'))
  portfolioGallery($('.fancybox-trigger'));
  menuAnimation(
    $('.menu-button'),
    $('.modal-close'),
    $('.cd-bouncy-nav-modal'),
    $('.modal-nav-button')
  );
};
//выбираем что грузить
function start(){
  if(!mobileAndTabletcheck()){
    desktop();
  } else {
    mobile();
  }
};
/*Hide UI*/
function mobileHideUI (selector) {
  selector.addClass('hide');
};
//Появление блоков
function blockAnimate (selectorBlock){
  //передаем селекторы в качестве псевдомассива-аргументов
  for (var i = 0; i < arguments.length; i++) {
    var animateItem = arguments[i].addClass('block-hidden');
    //анимашка через CSS и плагин viewportChecker
      animateItem.viewportChecker({
        classToAdd: 'block-animate',
        offset: 100
    });
  }
};

//анимашка для скрытия бокового блока
function hideSidebar(sideBar, mainContent){
  var $sidebar = sideBar;
      $maincontent = mainContent;
        $sidebar.toggleClass('min-size', function(){
        if ($sidebar.hasClass('min-size')){
          $maincontent.animate(
            {
              marginLeft : '10px'
            }, 710
        ).addClass('max-size');
        } else {
          $maincontent.animate(
            {
              marginLeft : '340px'
            }, 710
        ).removeClass('max-size');
        };
      });
};
//меняем текст в кнопке
function textSwap(textSelector){
  if (textSelector.text() == textSelector.data("text-swap")){
    textSelector.text(textSelector.data("text-original"));
    } else {
    textSelector.data("text-original", textSelector.text());
    textSelector.text(textSelector.data("text-swap"));
  }
};
//прячем сайдбар по клику
function hideOnClick(trigger){
  trigger.on('click', function(){
       hideSidebar(
            $('.right-sidebar'),
            $('.left-sidebar')
        );
       textSwap($('.left-sidebar-hide-button-text'));
       trigger.children('i').toggleClass('check');
    });
};
//прячем сайдбар по scroll
function hideSidebarOnScroll (trigger){
    trigger.viewportChecker({
        offset: 50,
        callbackFunction: function(){
          setTimeout(function(){
            hideSidebar(
              $('.right-sidebar'),
              $('.left-sidebar')
            );
            textSwap($('.left-sidebar-hide-button-text'));
            return false;
          }, 1000)
      },
  });
};
//меняем текст в кнопке
function textSwap(textSelector){
  if (textSelector.text() == textSelector.data("text-swap")){
    textSelector.text(textSelector.data("text-original"));
    } else {
    textSelector.data("text-original", textSelector.text());
    textSelector.text(textSelector.data("text-swap"));
  }
};
//анимашка для спойлеров
function spoilerButton (button, hideContent){
      hideContent.toggle();
      button.on('click', function(){
          var spoilerButton = $(this);
              spoilerIcon = spoilerButton.children('i');
              spoilerText = spoilerButton.prev('.sidebar-timeline-spoiler-content');
        textSwap($('.sidebar-timeline-spoiler-btn-text'));  
        spoilerText.fadeToggle(600);
        spoilerIcon.toggleClass('active');
      });
};

//слайдер
function slickSlider (selectorSlider, sliderPrev, sliderNext){
    var $slider = selectorSlider;
    $slider.slick({
      infinite: true,
      speed: 1000,
      autoplaySpeed: 3000,
      autoplay: false,
      slidesToShow: 3,
      slidesPerRow: 3,
      centerMode: true,
      variableWidth: true,
      swipe: true,
      swipeToSlide: true,
      prevArrow: sliderPrev,
      nextArrow: sliderNext
  });
};
//анимация прогрессбара
function progressAnimate (selectorAnimate, value, speed){
  var $progressSelector = selectorAnimate;
      $progressSelectorParent = $progressSelector.parent().width();
      animateBar = value * $progressSelectorParent / 100;
      speedValue = speed;
      if (animateBar > 0) {
        $progressSelector.animate({
          width: animateBar
          }, speedValue, function(){
            $(this).html(value + "%");
          }
      );
  }
};
//анимациия прогрессбара с различными значениями
function progressStart(){
   progressAnimate($('#first'), 80, 3000);
   progressAnimate($('#second'), 50, 3500);
   progressAnimate($('#third'), 65, 4000);
   progressAnimate($('#four'), 75, 4500);
   progressAnimate($('#five'), 60, 5500);
};
//запуск анимации по сроллу
function progressAnimateOnTrigger (selectorTrigger){
  var triggerSkill = selectorTrigger.addClass('block-hidden');
      triggerSkill.viewportChecker({
        classToAdd: 'block-animate',
        offset: 50,
        callbackFunction: function(){
          progressStart()
        }
      });
};
//fancy-box
function portfolioGallery(modalTrigger){
  var fancyboxStart = modalTrigger;
  modalTrigger.fancybox({
    beforeShow : function() {
        var alt = this.element.find('img').attr('alt');
        this.inner.find('img').attr('alt', alt);
        this.title = alt;
    },
    padding : 0,
    openEffect: 'elastic',
    autoResize: true,
    closeBtn: true,
    helpers : {
        overlay : {
            closeClick : true,
            speedOut   : 100,
            css : {
              'background' : 'rgba(43, 56, 41, 0.9)'
            }
         },
        title: {
            type: 'inside'
        }
      },
    tpl: {
      next : '<span class="modal-next"></span>',
      prev : '<span class="modal-prev"></span>',
      closeBtn : '<span class="modal-close"></span>'
    }
  });
};
//кнопка меню
function menuAnimation (triggerButton, triggerClose, triggerModal, modalButton){
    var menuButton = triggerButton;
        closeButton = triggerClose;
        modal = triggerModal; 
        navButton = modalButton;
    var is_bouncy_nav_animating = false;
    //open bouncy navigation
    menuButton.on('click', function(){
      triggerBouncyNav(true);
    });
    //close bouncy navigation
    closeButton.on('click', function(){
      triggerBouncyNav(false);
    });
    modal.on('click', function(event){
      if($(event.target).is(modal)) {
        triggerBouncyNav(false);
      }
    });
    navButton.on('click', function(){
      triggerBouncyNav(false);
    });

  function triggerBouncyNav($bool) {
    //check if no nav animation is ongoing
    if( !is_bouncy_nav_animating) {
      is_bouncy_nav_animating = true;
      
      //toggle list items animation
      modal.toggleClass('fade-in', $bool).toggleClass('fade-out', !$bool).find('li:last-child').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
        modal.toggleClass('is-visible', $bool);
        if(!$bool) modal.removeClass('fade-out');
        is_bouncy_nav_animating = false;
      });
      
      //check if CSS animations are supported... 
      if(menuButton.parents('.no-csstransitions').length > 0 ) {
        modal.toggleClass('is-visible', $bool);
        is_bouncy_nav_animating = false;
        }
      }
    }
};
//поехали!
$(document).ready(start());

