$(function () {

    $('#main').fullpage({
        anchors: ['page01', 'page02', 'page03'],
        css3: false,
        responsiveWidth: 1000,
        // navigation: true,   
        afterLoad: function (ank, idx) {
            $('.gnb li').removeClass('on');
            $('.gnb li').eq(idx - 1).addClass('on');
            $('.section').removeClass('on');
            $('.section').eq(idx - 1).addClass('on');
            idx == 3 ? $('.gnb a').addClass('w') : $('.gnb a').removeClass('w')
        }
    });
    $('.coverBtn').on('click', function () {
        $(this).toggleClass('on');
        $('.cover').toggleClass('on');
    });

    var coverContent = $('.gnb ul').clone().addClass('co');
    console.log(coverContent);

    $('.cover .case').append(coverContent)


    $('cover a').on('click', function () {
        $('.cover').toggleClass('on');
        $('.coverBtn').toggleClass('on');
    });

    $('.cover').on('scroll, wheel', function () {
        e.stopProPagation();
    })

    $('.contact').on('click', function () {
        $(this).toggleClass('on');
    })
})

//  idx == 3 || idx == 1 ? $('.gnb a').addClass('w') : $('.gnb a').removeClass('w')