function proportionScale(largura, altura) {

  var larguraScreen = $(window).width();
  var alturaScreen = $(window).height();
  var proporcaoAltura = (alturaScreen * 100) / altura;
  var proporcaoLargura = (larguraScreen * 100) / largura;
  var proporcao, larguraAltura, larguraAlturaAuto;

  if (proporcaoAltura < proporcaoLargura) {
    larguraAltura = "height";
    larguraAlturaAuto = "width";
    proporcao = proporcaoAltura / 100;
  } else {
    larguraAltura = "width";
    larguraAlturaAuto = "height";
    proporcao = proporcaoLargura / 100;
  }

  console.log(proporcao, proporcaoAltura, proporcaoLargura)
  return [proporcao, larguraAltura, larguraAlturaAuto];
}

function resizeBodyComplete() {

  var proporcao1920 = proportionScale(1920, 1080)[0];

  $(".conteudo-complete-frase").css({
    "transform": "scale(" + proporcao1920 + ")",
    "transform-origin": "center center"
  });

  var proporcao900;

  if ($(window).width() < 992) {
    proporcao900 = proportionScale(900, 576)[0];
  } else {
    proporcao900 = 1;
  }

}

$(document).ready(function () {
  // resizeBodyComplete()
  // $(window).resize(function () {
  //   resizeBodyComplete()
  // })

});

function criaModalAlternativas() {
  const perguntas = [{
      pergunta: '__________ é veiculado em rádios para divulgar espetáculos, shows, exposições, feiras literárias.',
      respostaCorreta: 'spot',
      respostasIncorretas: ['story', 'cartaz', 'release', 'trend']
    },
    {
      pergunta: '__________ é realizado para ser veiculado nas redes sociais por 24h.',
      respostaCorreta: 'story',
      respostasIncorretas: ['spot', 'cartaz', 'release', 'trend']
    },
    {
      pergunta: '__________ é uma forma de divulgar o espetáculo dentro e fora de estabelecimentos parceiros.',
      respostaCorreta: 'cartaz',
      respostasIncorretas: ['spot', 'story', 'release', 'trend']
    },
    {
      pergunta: '__________ é um texto que contém informações sobre o espetáculo.',
      respostaCorreta: 'release',
      respostasIncorretas: ['spot', 'story', 'cartaz', 'trend']
    },
    {
      pergunta: '__________ aproveita a “onda do momento” para divulgar o espetáculo nas redes sociais.',
      respostaCorreta: 'trend',
      respostasIncorretas: ['spot', 'story', 'cartaz', 'release']
    }
  ];


  perguntas.forEach(function (pergunta, indice) {
    const modalId = `modal-${indice + 1}`;
    let respostas = new Array();
    let htmlModal = `
    <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header header-menu">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${pergunta.pergunta}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body color-menu random-location">`;
    respostas.push(`<button type="button" class="random btn btn-success mb-2 form-control alternativa-correta-${indice + 1}">${pergunta.respostaCorreta}</button>`);
    $.each(pergunta.respostasIncorretas, function (a, perguntaincorreta_label) {
      respostas.push(`<button type="button" class="random btn btn-success mb-2 form-control alternativa-incorreta-${indice + 1}">${perguntaincorreta_label}</button>`)
    })




    /* https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array */
    function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    }

    shuffle(respostas);
    console.log(respostas)
    respostas.forEach(function (a, b) {
      htmlModal += a;
    })


    htmlModal += `</div>
          <div class="modal-footer color-menu">
          </div>
        </div>
      </div>
    </div>
  `;
    $('body').append(htmlModal);


  });
}

function quizCompleteFrase() {
  var audioAcertou = new Audio('obj-encaixe/assets/audio/acertoou.wav');
  var audioErrou = new Audio('obj-encaixe/assets/audio/erroou.wav');

  $(".alternativa-correta-1").click(function () {
    audioAcertou.play();
    $("#alternativa-1").parent().remove();
    $("#res-1").parents("div.col-12").removeClass("col-md-8");
    $("#res-1").removeClass("oculto");
    $("#modal-1").modal("hide");
    $("#modal-acertou").modal("show");
  });

  $(".alternativa-incorreta-1").click(function () {
    audioErrou.play();
    $("#modal-1").modal("hide");
    $("#modal-errou-1").modal("show");
    $("#alternativa-1").find('img').attr('src', 'obj-encaixe/assets/img/erro-complete.png');
  });

  $(".alternativa-correta-2").click(function () {
    audioAcertou.play();
    $("#alternativa-2").parent().remove();
    $("#res-2").parents("div.col-12").removeClass("col-md-8");
    $("#res-2").removeClass("oculto");
    $("#res-2").removeClass("oculto");
    $("#modal-2").modal("hide");
    $("#modal-acertou").modal("show");
  });

  $(".alternativa-incorreta-2").click(function () {
    audioErrou.play();
    $("#modal-2").modal("hide");
    $("#modal-errou-2").modal("show");
    $("#alternativa-2").find('img').attr('src', 'obj-encaixe/assets/img/erro-complete.png');
  });

  $(".alternativa-correta-3").click(function () {
    audioAcertou.play();
    $("#alternativa-3").parent().remove();
    $("#res-3").parents("div.col-12").removeClass("col-md-8");
    $("#res-3").removeClass("oculto");
    $("#res-3").removeClass("oculto");
    $("#modal-3").modal("hide");
    $("#modal-acertou").modal("show");
  });

  $(".alternativa-incorreta-3").click(function () {
    audioErrou.play();
    $("#modal-3").modal("hide");
    $("#modal-errou-3").modal("show");
    $("#alternativa-3").find('img').attr('src', 'obj-encaixe/assets/img/erro-complete.png');
  });

  $(".alternativa-correta-4").click(function () {
    audioAcertou.play();
    $("#alternativa-4").parent().remove();
    $("#res-4").parents("div.col-12").removeClass("col-md-8");
    $("#res-4").removeClass("oculto");
    $("#res-4").removeClass("oculto");
    $("#modal-4").modal("hide");
    $("#modal-acertou").modal("show");
  });

  $(".alternativa-incorreta-4").click(function () {
    audioErrou.play();
    $("#modal-4").modal("hide");
    $("#modal-errou-4").modal("show");
    $("#alternativa-4").find('img').attr('src', 'obj-encaixe/assets/img/erro-complete.png');
  });

  $(".alternativa-correta-5").click(function () {
    audioAcertou.play();
    $("#alternativa-5").parent().remove();
    $("#res-5").parents("div.col-12").removeClass("col-md-8");
    $("#res-5").removeClass("oculto");
    $("#res-5").removeClass("oculto");
    $("#modal-5").modal("hide");
    $("#modal-acertou").modal("show");
  });

  $(".alternativa-incorreta-5").click(function () {
    audioErrou.play();
    $("#modal-5").modal("hide");
    $("#modal-errou-5").modal("show");
    $("#alternativa-5").find('img').attr('src', 'obj-encaixe/assets/img/erro-complete.png');
  });
}

function criaModalNegativa() {
  for (var i = 1; i <= 5; i++) {
    var modalTitle = 'Resposta incorreta!';
    var modalBody = 'Tente novamente.';
    var modalId = 'modal-errou-' + i;
    switch (i) {
      // case 1:
      //   modalTitle = 'Tente novamente!';
      //   modalBody = 'SPOT é uma material sonoro para divulgação em meios radiofônicos.';
      //   break;
      // case 2:
      //   modalTitle = 'Tente novamente!';
      //   modalBody = 'STORY são materiais audiovisuais de até 30 segundos, para divulgação em redes sociais.';
      //   break;
      // case 3:
      //   modalTitle = 'Tente novamente!';
      //   modalBody = 'CARTAZ são materiais impressos de divulgação, podendo ser fixados em diferentes lugares.';
      //   break;
      // case 4:
      //   modalTitle = 'Tente novamente!';
      //   modalBody = 'RELEASE é um texto jornalístico divulgando a obra.';
      //   break;
      // case 5:
      //   modalTitle = 'Tente novamente!';
      //   modalBody = 'TREND é um conceito usado na divulgação, que “surfa” na onda de outras divulgações, notícias e materiais.';
      //   break;
    }
    var modalHtml = '<div class="modal fade" id="' + modalId + '" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> \
    <div class="modal-dialog"> \
      <div class="modal-content"> \
        <div class="modal-header cabeca-errou"> \
          <h1 class="modal-title fs-5">' + modalTitle + '</h1> \
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> \
        </div> \
        <div class="modal-body corpo-errou"> \
          ' + modalBody + ' \
        </div> \
        <div class="modal-footer"> \
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button> \
        </div> \
      </div> \
    </div> \
  </div>';
    $('body').append(modalHtml);
  }

  $('[id^="modal-"]').modal({
    keyboard: true,
    show: false
  });
}




criaModalAlternativas();
quizCompleteFrase();
criaModalNegativa();