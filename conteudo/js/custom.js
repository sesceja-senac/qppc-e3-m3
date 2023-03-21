$(function () {

  $('footer li.active').prevAll("li").addClass("visitado");

  $('.painel-plano button').click(function(){
    $(this).addClass('visitado');
  });

  $('.collapse-dado button').click(function(){
    $('.collapse-dado button').siblings().removeClass('show');
    $(this).siblings().toggleClass('show');

    if($('.collapse-dado button').siblings().hasClass('show')){
      $(this).siblings().removeClass('show');
    }
  })

  $('.painel-estrategias button').click(function(){$(this).addClass('visitado')})
  
});