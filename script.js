$('.page-scroll').on('click', function(e){

    // Ambil isi href yang di click dan ambil attribute href
    let tujuan = $(this).attr('href');

    // // tangkap elemen yang bersangkutan yang diclick (section yang punya id yang diclick)
    let elemenTujuan = $(tujuan);  

    // console.log(elemenTujuan.offset().top) // jarak dari elemen yang diclick ke atas(top)

    //pindahkan scroll
    $('body').animate({
        scrollTop: elemenTujuan.offset().top - 400  //scrollTop (jarak antara posisi body dari atas)
    });
    // e.preventDefault();
   
});

// About
$(window).scroll(function(){
    let wScroll = $(this).scrollTop();

    if(wScroll > $('.about').offset().top - 200){
        $('.about p').addClass('showPLeft')
        $('.about p').addClass('showPRight')
    }
})




// Paralax
$(window).scroll(function(){
    let wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h2').css({
        'transform' : 'translate(0px, '+ wScroll/1.3 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1 +'%)'
    });

    // Portofolio
    if(wScroll > $('.port').offset().top - 350){
        $('.port img').each(function(i){ // i adalah index dari tiap elemen
            setTimeout(function(){
                $('.port img').eq(i).addClass('showThumbnail') // eq berfungsi untuk
            }, 200 * (i+1))
        });
    };
});

$('.kolom').each(function(i){
    $('.kolom').on('click', function(){
        $('.kolom').eq(i).addClass('zoomThumbnail')
    });
});

$('.port a').on('click', function(event){
    event.preventDefault();
})
