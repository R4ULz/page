var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    margin: 0,
    nav:true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        960: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
});

window.sr = ScrollReveal({
    reset: true
})

sr.reveal('.sobre', {
    duration: 2000
})


const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('showEsquerda')
        }else{
            entry.target.classList.remove('showEsquerda')
        }
    })
})

const elements = document.querySelectorAll('.hiddenDir')
elements.forEach((element) => myObserver.observe(element))

const observador = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('showDireita')
        }else{
            entry.target.classList.remove('showDireita')
        }
    })
})

const elementos = document.querySelectorAll('.hiddenEsq')
elementos.forEach((element) => myObserver.observe(element))

$("#btn-home").click(function() {
    $('html, body').animate({
      scrollTop: $("#home").offset().top
    }, 2000);
  });
  $("#btn-about").click(function() {
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 2000);
  });
  $("#btn-cursos").click(function() {
    $('html, body').animate({
      scrollTop: $("#cursin").offset().top
    }, 2000);
  });

  function abreModal(){
    $('#modalEx').modal({
        show :true
    })
  }

  setTimeout(abreModal, 1000);