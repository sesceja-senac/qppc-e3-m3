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

$(function () {
  $('.bt-tradicionais').click(function(){
    $(this).addClass('visitado');
  });
  $('.bt-digitais').click(function(){
    $(this).addClass('visitado');
  });
  $('.bt-externas').click(function(){
    $(this).addClass('visitado');
  });
  $('.bt-organica').click(function(){
    $(this).addClass('visitado');
  });
});