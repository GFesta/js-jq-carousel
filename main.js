//Creare uno slider di immagini
//Utiliziamo una classe 'first' e 'last'  per capire quali sono 
//la prima e ultima immagine dello slider.
//Utilizziamo una classe 'active' per aiutarci a capire quale è 
//l’immagine attuale da visualizzare nello slider.

//Bonus:
//Clicchiamo sui pallini e mostriamo l’immagine corrispondente
//Generiamo i pallini con JS.


$(document).ready(function() {
    $('.next').click(function() {
        clickNext();
    });
    $('.prev').click(function() {
        clickPrev();
    });

});


// funzione  Next

function clickNext() {
    var imgActive = $('img.active');
    var imgNext = imgActive.next();
    var circleActive = $('i.active');
    var circleNext = circleActive.next();
    var isLast = imgActive.hasClass('last');

    imgActive.removeClass('active');
    circleActive.removeClass('active');

    if (isLast) {
        $('img.first').addClass('active');
        $('i.first').addClass('active');
    }
    else {
        imgNext.addClass('active');
        circleNext.addClass('active');
    }
}

// funzione Prev

function clickPrev() {
    var imgActive = $('img.active');
    var imgPrev = imgActive.prev();
    var circleActive = $('i.active');
    var circlePrev = circleActive.prev();
    var isFirst = imgActive.hasClass('first');

    imgActive.removeClass('active');
    circleActive.removeClass('active');

    if (isFirst) {
        
        $('img.last').addClass('active');
        $('i.last').addClass('active');
    }
    else {
        imgPrev.addClass('active');
        circlePrev.addClass('active');
    }
}





