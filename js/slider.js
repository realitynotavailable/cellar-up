document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide-first',{
        type   : 'loop',
        perPage    : 3,
        pagination: false,
        perMove: 1,
        focus  : 'center',
        gap: '1.04vw',
        breakpoints: {
            960: {
                gap: '0',
                padding: { left: '34%', right: '45%' }
            },
            479: {
                perPage: 1,
                padding: { left: '31%', right: '45%' }
            }
        }
    } );
    splide.mount();

    var splideSecond = new Splide( '.splide-second',{
        type   : 'loop',
        perPage    : 1,
        pagination: false,
        focus  : 'center',
        perMove: 1,
        gap: '3.64vw',
        padding: { left: '20%', right: '20%' },
        // gap: '35px',
        breakpoints: {
            479: {
                perPage: 1,
                padding: { left: '9%', right: '9%' }
            }
        }
    } );
    splideSecond.mount();

    var splideThird = new Splide( '.splide-third',{
        type   : 'fade',
        perPage    : 1,
        pagination: false,
        focus  : 'center',
        perMove: 1,
        arrows: false,
        // classes: {
        //     // arrows: 'quiz__arrows',
        //     arrow : 'splide__quiz__arrow',
        //     prev  : 'splide__quiz__btn-prev',
        //     next  : 'splide__quiz__btn',
        // },
        breakpoints: {
            479: {
                perPage: 1,
                padding: { left: '9%', right: '9%' }
            }
        }
    } );

    var bar= splideThird.root.querySelector( '.my-slider-progress-bar' );
    var number = document.body.querySelector('.quiz__count');
    console.log(number);

    splideThird.on( 'mounted move', function () {
        var end  = splideThird.Components.Controller.getEnd() + 1;
        var rate = Math.min( ( splideThird.index + 1 ) / end, 1 );
        bar.style.width = String( 100 * rate ) + '%';
        number.textContent = `${ splideThird.index + 1 }/${ splideThird.length }`;
    } );
    splideThird.mount();

    document.addEventListener("click", (e) => {
        const quizLink = e.target.closest(".js-next");
        if (!quizLink) return;
        console.log(`index:` + splideThird.index);
        splideThird.go( splideThird.index +1 )
        e.preventDefault();
    });

    document.addEventListener("click", (e) => {
        const quizLink = e.target.closest(".js-prev");
        if (!quizLink) return;
        console.log(`index:` + splideThird.index);
        splideThird.go( splideThird.index -1 )
        e.preventDefault();
    });
} );

