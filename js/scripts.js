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

        /* Portfolio Details */

        const portfolioDetail = [
            {
                title: "Pure Products",
                imgTop: "images/pure-products-1.png",
                imgBottom: "images/pure-products-2.jpg",
                detailTop: "Pure Products is an application that helps people identify and find cosmetic products that are safe and gentle for your skin. The application uses two different database to compare and rate each ingredient in the product.",
                detailBottom: "Pure Products utilizes React.js, PHP, MySQL, AWS, and API's to help people find the right cosmetic product for their skins!",
                live: `<div><i class="fa fa-desktop"></i><a href="http://findpureproducts.com" target="_blank">Live</a></div>`,
                code: `<div><i class="fa fa-github"></i> <a href="https://github.com/aliawilkinson/c318_pureproduct" target="_blank">Github</a></div>`
            },
            {
                title: "Laguna Matata",
                imgTop:"images/laguna-matata-1.png",
                imgBottom:"images/laguna-matata-2.png",
                detailTop:"Laguna Matata is an application that helps beachgoers discover some of the more exclusive and less know beaches and coves of Laguana City, CA. Locals and visitors no longer need to worry where to go when they come visit Laguna Beach.",
                detailBottom: "Laguna Matata utilizds JavaScript, JQuery, AJAX, Goole API, Yelp API, and Dark Sky API to help poeple find the best beach and where to go around it!",
                live:`<div><i class="fa fa-desktop"></i><a href="http://laguna-matata.harrisonbchen.com" target="_blank">Live</a></div>`,
                code:`<div><i class="fa fa-github"></i> <a href="https://github.com/harrison8024/Laguna-Matata" target="_blank">Github</a></div>`,
            },
            {
                title: "Online Student Application",
                imgTop:"images/intrvws.com-page1.png",
                imgBottom:"images/intrvws.com-page2.png",
                detailTop:"This application was built for the intent to help streamline the application process for the USC Pharmaceutical Industry Fellowship programs with Allergan.",
                detailBottom: "The application was built in React.js with Materialize for the Frontend. For the Backend, we use PHP to built our RESTful APIs, and MySQL and Firebase Bucket for our database. ",
                live:`<div><i class="fa fa-desktop"></i><a href="https://allergan-usc.intrvws.com/" target="_blank">Live</a></div>`,
                code:`<div><i class="fa fa-github"></i> <a href="https://github.com/ddonjuan/candidates-interview-scheduling" target="_blank">Github</a></div>`,
            }
        ]

        $(".portfolio-popup").on("click", function(){
            let appNum = $(this).attr("number");
            let object = portfolioDetail[appNum]; 
            let modalScreen = $("<div>").addClass("modal-screen");
            let modal = $("<div>").addClass("modal-box");
            let imgTop = $("<img>").attr("src", object.imgTop);
            let imgTopDiv = $("<div>").addClass("modal-img-div");
            imgTopDiv.append(imgTop);
            let imgBottom = $("<img>").attr("src", object.imgBottom);
            let imgBottomDiv = $("<div>").addClass("modal-img-div");
            imgBottomDiv.append(imgBottom);
            let imgDiv = $("<div>").append(imgTopDiv).append(imgBottomDiv).addClass("modal-img");
            let close = $("<button>").text("×").addClass("mfp-close");
            let info = $("<div>").addClass("modal-info");
            let title = $("<h1>").addClass("modal-title").text(object.title);
            let detail = $("<div>").addClass("modal-detail");
            let detailTop = $("<p>").text(object.detailTop);
            let detailBottom = $("<p>").text(object.detailBottom);
            let live = $(object.live);
            let code = $(object.code);
            detail.append(detailTop).append(detailBottom).append(live).append(code);
            close.on("click", function(){
                modalScreen.remove();
                modal.remove();
            })
            modal.append(imgDiv);
            modal.append(info);
            info.append(close).append(title).append(detail);
            $("body").prepend(modalScreen);
            $("body").prepend(modal);
        });

        $(".portfolio-hover").on("click", function(){
            let appNum = $(this).attr("number");
            let object = portfolioDetail[appNum]; 
            let modalScreen = $("<div>").addClass("modal-screen");
            let modal = $("<div>").addClass("modal-box");
            let imgTop = $("<img>").attr("src", object.imgTop);
            let imgTopDiv = $("<div>").addClass("modal-img-div");
            imgTopDiv.append(imgTop);
            let imgBottom = $("<img>").attr("src", object.imgBottom);
            let imgBottomDiv = $("<div>").addClass("modal-img-div");
            imgBottomDiv.append(imgBottom);
            let imgDiv = $("<div>").append(imgTopDiv).append(imgBottomDiv).addClass("modal-img");
            let close = $("<button>").text("×").addClass("mfp-close");
            let info = $("<div>").addClass("modal-info");
            let title = $("<h1>").addClass("modal-title").text(object.title);
            let detail = $("<div>").addClass("modal-detail");
            let detailTop = $("<p>").text(object.detailTop);
            let detailBottom = $("<p>").text(object.detailBottom);
            let live = $(object.live);
            let code = $(object.code);
            detail.append(detailTop).append(detailBottom).append(live).append(code);
            close.on("click", function(){
                modalScreen.remove();
                modal.remove();
            })
            modal.append(imgDiv);
            modal.append(info);
            info.append(close).append(title).append(detail);
            $("body").prepend(modalScreen);
            $("body").prepend(modal);
        });


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