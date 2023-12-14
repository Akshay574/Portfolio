! function (e) {
    "use strict";

    function a() {
        e(window).width();
        var windowHeight = e(window).height();
        e(".error-page, .menu-full-overlay, .preloader .centrize").css({
            height: windowHeight
        })
    }

    // overmouse clientX clientY
    e(window).on("load", function () {
        e("body").imagesLoaded({}, function () {
            var a = e(".preloader");
            a.addClass("loaded"), a.find(".centrize").fadeOut(),
                function () {
                    var a = window.innerWidth / 2,
                        s = window.innerHeight / 2,
                        i = {
                            el: e(".cursor"),
                            x: window.innerWidth / 2,
                            y: window.innerHeight / 2,
                            w: 30,
                            h: 30,
                            update: function () {
                                var e = this.x - this.w / 2,
                                    a = this.y - this.h / 2;
                                this.el.css({
                                    transform: "translate3d(" + e + "px," + a + "px, 0)"
                                })
                            }
                        };
                    console.log('a width =>' + a);
                    console.log('b height =>' + s);
                    console.log('i object =>' + i);
                    console.log('i object key x =>' + i.x);
                    console.log('i object key y =>' + i.y);
                    console.log('i object key w =>' + i.w);
                    console.log('i object key h =>' + i.h);
                    console.log('i object key funtion =>' + i.update);

                    function l(e, a, s) {
                        return (1 - s) * e + s * a
                    }
                    e(window).mousemove(function (e) {
                        a = e.clientX, s = e.clientY
                        // console.log("mousemove =>", a)
                        // console.log("mousemove =>", s)
                    }), e("a, .swiper-pagination, .swiper-button-prev, .swiper-button-next, button, .button, .btn, .lnk").hover(function () {
                        e(".cursor").addClass("cursor-zoom")
                    }, function () {
                        e(".cursor").removeClass("cursor-zoom")
                    }), setInterval(function () {
                        i.x = l(i.x, a, .1), i.y = l(i.y, s, .1), i.update()
                    }, 1e3 / 60)
                }(), e(".scroll-animate").scrolla({
                    once: !0,
                    mobile: !0
                })
        })
    }),


        e(function () {

            //if gobal window resize changer // don't wait try..
            if (a(), e(window).resize(function () {
                a()
            }),

                //section 1 parallax background imgaer prepend screen changer scroll animation
                e(".js-parallax").jarallax({
                    speed: .65,
                    type: "scroll"
                }),
                e(".section-parallax-1").length && (e(".section-parallax-1").prepend('<div class="pbefore"></div><div class="pafter"></div>'), e(".section-parallax-1 .pbefore").jarallax({
                    speed: .85
                }),
                    e(".section-parallax-1 .pafter").jarallax({
                        speed: .85
                    })),


                //section 2 parallax background imgaer prepend screen changer scroll animation
                e(".section-parallax-2").length && (e(".section-parallax-2").prepend('<div class="pbefore"></div><div class="pafter"></div>'), e(".section-parallax-2 .pbefore").jarallax({
                    speed: .85
                }),
                    e(".section-parallax-2 .pafter").jarallax({
                        speed: .85
                    })),


                //section 3 parallax background imgaer prepend screen changer scroll animation
                e(".section-parallax-3").length && (e(".section-parallax-3").prepend('<div class="pbefore"></div><div class="pafter"></div>'), e(".section-parallax-3 .pbefore").jarallax({
                    speed: .85
                }),
                    e(".section-parallax-3 .pafter").jarallax({
                        speed: .85
                    })),


                //section 4 parallax background imgaer prepend screen changer scroll animation
                e(".section-parallax-4").length && (e(".section-parallax-4").prepend('<div class="pbefore"></div><div class="pafter"></div>'), e(".section-parallax-4 .pbefore").jarallax({
                    speed: .85
                }),
                    e(".section-parallax-4 .pafter").jarallax({
                        speed: .85
                    })),


                //section 5 parallax background imgaer prepend screen changer scroll animation
                e(".section-parallax-5").length && (e(".section-parallax-5").prepend('<div class="pafter"></div>'), e(".section-parallax-5 .pbefore").jarallax({
                    speed: .85
                }),
                    e(".section-parallax-5 .pafter").jarallax({
                        speed: .85
                    })),


                Splitting(), e(window).width() > 1200) skrollr.init();

            //header Stickey scroll top
            // Check if an element with class "header" exists in the DOM
            e(".header").length && e(window).on("scroll", function (a) {
                // Check if the vertical scroll position is greater than 100 pixels
                if (e(window).scrollTop() > 100) {
                    // Add classes based on scroll behavior
                    e(".header").addClass("sticky");

                    // Check if the current scroll position is greater than the previous scroll position
                    if (this.oldScroll < this.scrollY) {
                        e(".header").addClass("animate-in");
                    } else if (e(window).scrollTop() < 200) {
                        e(".header").addClass("animate-out");
                    }
                } else {
                    // Remove classes when scroll position is less than or equal to 100 pixels
                    e(".header").removeClass("sticky animate-in animate-out");
                }

                // Store the current scroll position
                this.oldScroll = this.scrollY;
            });



            //browser light cookie skin drak / light and cookie expires 7day date update color
            var s = e.cookie("skin");
            console.log(e.cookie())
            "dark" === s && e("body").removeClass("light-skin"), "light" === s && e("body").addClass("light-skin"),
                e("body").hasClass("light-skin") && e(".header .switcher-btn").addClass("active"), e(".header").on("click", ".switcher-btn", function () {
                    if (e(this).hasClass("active")) {
                        // If the clicked element has the class "active"

                        e(this).removeClass("active"); //svg toggle sun active remove
                        e("body").removeClass("light-skin"); // light white remove
                        e.cookie("skin", "dark", { // browser server local cookie skin drak
                            expires: 7, // 7 day end date update 
                            path: "/" // path loader refesh 
                        })
                    } else {
                        e(this).addClass("active"); // svg toggle drak active add
                        e("body").addClass("light-skin"); // light drak body color changer add 
                        e.cookie("skin", "light", { // browser server local cookie skin light
                            expires: 7, // 7 day end date update 
                            path: "/" // path loader refesh 
                        })
                    }
                    return false; // toggle !1



                    //Navbar menu-btn click toggle
                }), e(".header").on("click", ".menu-btn", function () {
                    // debugger
                    if (e(this).hasClass("active")) {
                        // If the clicked element has the class "active"

                        // Remove classes from the clicked element
                        e(this).removeClass("active");
                        // e(this).addClass("no-touch");

                        // Remove classes from the body element
                        e("body").removeClass("no-scroll");

                        //  Remove classes from elements with the class "menu-full-overlay"
                        e(".menu-full-overlay").removeClass("is-open");
                        e(".menu-full-overlay").removeClass("has-scroll");
                        e(".menu-full-overlay").removeClass("animate-active");

                        //  Use a setTimeout function with a delay of 1000 milliseconds (1 second)
                        setTimeout(function () {
                            // Remove classes from elements with the class "menu-full-overlay"
                            e(".menu-full-overlay").removeClass("visible");

                            // Remove the class "no-touch" from elements with the class "menu-btn"
                            e(".menu-btn").removeClass("no-touch");
                        }, 1000); //1e3 and 1000 secords
                    }
                    else {
                        // Add classes "active" and "no-touch" to the clicked element
                        e(this).addClass("active no-touch");

                        // Get the height of the window
                        var windowHeight = e(window).height();

                        // Set the height of elements with the class "menu-full-overlay"
                        e(".menu-full-overlay").css({
                            height: windowHeight
                        });

                        // // Add classes to the body element and elements with the class "menu-full-overlay"
                        e("body").addClass("no-scroll");
                        e(".menu-full-overlay").addClass("is-open visible");

                        // // Use a setTimeout function with a delay of 1000 milliseconds (1 second)
                        setTimeout(function () {
                            // Add additional classes to elements with the class "menu-full-overlay"
                            e(".menu-full-overlay").addClass("has-scroll animate-active");

                            // Remove the class "no-touch" from elements with the class "menu-btn"
                            e(".menu-btn").removeClass("no-touch");
                        }, 1000); //1e3 and 1000 secords


                    }
                    return false
                }),
                e(".menu-full").on("click", "a", function () {
                    e(".header .menu-btn.active").trigger("click")
                    // e(this).parent().hasClass("has-children") || e(".header .menu-btn.active").trigger("click")
                })



            //filter imagerloaded isotope filter
            // var i = e(".works-items");
            // i.imagesLoaded(function () {
            //     i.isotope({
            //         itemSelector: ".works-col",
            //         percentPosition: true //!0
            //     })
            // });
            var l = e(".m-gallery");
            l.imagesLoaded(function () {
                l.isotope({
                    itemSelector: ".col-lg-6",
                    percentPosition: true //!0
                })
            })

            //filter data-href "a" === "a" active
            // e(".filter-links").on("click", "a", function () {
            //     var a = e(this).attr("data-href");
            //     console.log(a)
            //     return i.isotope({
            //         filter: a
            //     }), e(".filter-links a").removeClass("active"), e(this).addClass("active"), e(a).find(".scroll-animate").hasClass("animate__active") || e(a).find(".scroll-animate").addClass("animate__active"), !1
            // })

            var copyrightdate = new Date()
            var copyYear = copyrightdate.getFullYear()
            var copyrightText = `${copyYear} © Akshay. All Rights Reserved`

            document.getElementById('copyrightdate').innerHTML = copyrightText

            const text = document.querySelector(".sec-text");
            const textLoad = () => {
                setTimeout(() => {
                    text.textContent = "Web develpment";
                }, 0);
                setTimeout(() => {
                    text.textContent = "Fontend Development";
                }, 4000); //1s = 1000 milliseconds
            }
            textLoad();
            setInterval(textLoad, 12000);
        })
}(jQuery);

