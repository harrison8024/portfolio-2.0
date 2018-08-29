/*
   
    Template Name : Rolling - Freelancer Portfolio Template
    Author : UiPasta Team
    Website : http://www.uipasta.com/
    Support : http://www.uipasta.com/support/
	
	
*/



/*
   
   Table Of Content
   
   1. Preloader
   2. Smooth Scroll
   3. Scroll Naviagation Background Change with Sticky Navigation
   4. Mobile Navigation Hide or Collapse on Click
   5. Scroll To Top
   6. Typed.js
   7. Parallax Background
   8. Portfolio Filtering
   9. Magnific Popup
  10. Testimonial Carousel/Slider
  11. Statistics Counter
  12. Google Map
 

*/


(function ($) {
    'use strict';

    jQuery(document).ready(function () {


        /* Preloader */

        $(window).on('load', function () {
            $('body').addClass('loaded');
        });



        /* Smooth Scroll */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });




        /* Scroll Naviagation Background Change with Sticky Navigation */

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });




        /* Mobile Navigation Hide or Collapse on Click */

        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195

        });




        /* Scroll To Top */

        $(window).scroll(function () {
            if ($(this).scrollTop() >= 500) {
                $('.scroll-to-top').fadeIn();
            } else {
                $('.scroll-to-top').fadeOut();
            }
        });


        $('.scroll-to-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });




        /* Typed.js */

        $(window).load(function () {
            $(".typing").typed({
                strings: ["I am A Web Developer.", "I am A Software Engineer.", "I Love Physics.", "I Solve Problems."],    /* You can change the home section typing text from
	                                                                                            here and do not use "&" use "and" */
                typeSpeed: 30
            });
        });


        /* Parallax Background */

        $(window).stellar({
            responsive: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            horizontalOffset: 0,
            verticalOffset: 0,
        });




        /* Portfolio Filtering */

        $('.portfolio-inner').mixItUp();



        /* Magnific Popup */
        // $('.portfolio-popup').magnificPopup({
        //     type: 'image',

        //     image: {
        //         markup: '<div class="mfp-figure portfolio-pop-up">' +
        //             `<div class="mfp-info"></div>` +
        //             '<div class="mfp-close"></div>' +
        //             '<div class="mfp-img"></div>' +
        //             '<div class="mfp-bottom-bar portfolio_title">' +
        //             '<div class="mfp-title"></div>' +
        //             '<div class="mfp-counter"></div>' +
        //             '</div>' +
        //             '</div>',

        //         titleSrc: function (item) {
        //             return item.el.attr('title');
        //         }
        //     },

        // });

        function popupModal(){

        }

        $(".portfolio-popup").on("click", function(){
            let modalScreen = $("<div>").addClass("modal-screen");
            let modal = $("<div>").addClass("modal-box");
            let img = $("<img>").attr("src", "images/pureproduct-screenshot.png");
            let imgDiv = $("<div>").append(img).addClass("modal-img");
            let close = $("<button>").text("×").addClass("mfp-close");
            close.on("click", function(){
                modalScreen.remove();
                modal.remove();
            })
            modal.append(imgDiv);
            imgDiv.append(close);
            $("body").prepend(modalScreen);
            $("body").prepend(modal)
        })

        $(".portfolio-hover").on("click", popupModal);


        /* Statistics Counter */

        $('.statistics').appear(function () {
            var counter = $(this).find('.statistics-count');
            var toCount = counter.data('count');

            $(counter).countTo({
                from: 0,
                to: toCount,
                speed: 5000,
                refreshInterval: 50
            })
        });


    });

    $(".form-control").on("keydown", function () {
        $(`.message-${this.id}`).empty().removeClass("message-error");
    });

    $("form").on("submit", function (event) {
        event.preventDefault();
        let name = $("#name").val();
        let email = $("#email").val();
        let subject = $("#subject").val();
        let body = $("#body").val();
        let regexLiteral = /.+@.+/;
        $(".form-message").empty().removeClass("message-error").removeClass("message-success");
        $(".message-name").empty().removeClass("message-error");
        $(".message-email").empty().removeClass("message-error");
        $(".message-subject").empty().removeClass("message-error");
        $(".message-body").empty().removeClass("message-error");
        if (name && regexLiteral.test(email) && subject && body) {
            $("html, body").addClass("waiting");
            let data = {
                name: $("#name").val(),
                email: $("#email").val(),
                subject: $("#subject").val(),
                body: $("#body").val()
            };
            $.ajax({
                type: "POST",
                url: "mail_handler.php",
                data: data,
                cache: false,
                success: function () {
                    $(".form-message").text("Message Sent!").addClass("message-success");
                    $("html, body").removeClass("waiting");
                },
                error: function () {
                    $(".form-message").text("Error: Failed to send message.").addClass("message-error");
                    $("html, body").removeClass("waiting");
                }

            });
        } else {
            if (!name) {
                $(".message-name").text("Name field empty.").addClass("message-error");
            }
            if (!email) {
                $(".message-email").text("Please enter your email").addClass("message-error");
            } else if (!regexLiteral.test(email)) {
                $(".message-email").text("Email not valid.").addClass("message-error");
            }
            if (!subject) {
                $(".message-subject").text("Subject line empty").addClass("message-error");
            }
            if (!body) {
                $(".message-body").text("Please enter a message!").addClass("message-error");

            }
        }
    });
})(jQuery);