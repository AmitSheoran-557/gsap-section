const tl = gsap.timeline();
const mm = gsap.matchMedia();

mm.add("(min-width:1600.98px)", () => {
    gsap.set(".content-img-1", {
        opacity: 0,
        top: "24%",
        left: "17%",
    });
    gsap.set(".content-img-2", {
        opacity: 0,
        top: "13%",
        left: "28%",
    });
    gsap.set(".content-img-3", {
        opacity: 0,
        top: "14%",
        left: "26%",
    });
    gsap.set(".content-img-4", {
        opacity: 0,
        top: "34%",
        left: "38%",
    });
    gsap.set(".content-img-5", {
        opacity: 0,
        top: "14%",
        left: "16%",
    });
    gsap.set(".button-1", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    });
    gsap.set(".button-2", {
        rotate: "0deg"
    });
    gsap.set(".button-3", {
        rotate: "0deg"
    });
    gsap.set(".button-4", {
        rotate: "0deg"
    });
    gsap.set(".button-5", {
        rotate: "0deg"
    });
    gsap.set("triangle-img", {
        bottom: "-50%",
    })
    gsap.set(".right-arrow-img", {
        right: '-30%',
        bottom: '-100%',
    })

    ScrollTrigger.create({
        trigger: ".section-1",
        start: "top top",
        end: "400%",
        pin: true,
        animation: tl,
        scrub: 2,
    });


    tl.fromTo(".content-img-1", {
        opacity: 0,
    }, {
        opacity: 1,

    }, 0);

    tl.fromTo(".triangle-img", {
        bottom: "-50%",
    }, {
        bottom: "-40%",
        duration: 10,
    }, 0.2);


    tl.fromTo(".right-arrow-img", {
        right: '-30%',
        bottom: '-100%',
    }, {
        bottom: '5%',
        duration: 20,
    });
    tl.fromTo(".button-1", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",
    });
    tl.fromTo(".button-1", {
        rotate: "-7deg",
        backgroundColor: "#53849980",
    }, {
        rotate: "0deg",
        duration: 25,
        backgroundColor: "#7EE49C80",
    });
    tl.fromTo(".content-img-1", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 20,
    });
    tl.fromTo(".triangle-img", {
        bottom: "-40%",
    }, {
        bottom: "-30%",
        duration: 10,
    });
    tl.fromTo(".right-arrow-img", {
        right: '-30%',
        bottom: '5%',
    }, {
        bottom: '20%',
        duration: 30,
    });
    tl.fromTo(".button-2", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",
    });
    tl.fromTo(".content-img-2", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 30,
    });
    tl.fromTo(".content-img-2", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 30,
    });
    tl.fromTo(".button-2", {
        rotate: "-7deg",
        backgroundColor: "#53849980",
    }, {
        rotate: "0deg",
        duration: 25,
        backgroundColor: "#7EE49C80",
    });
    tl.fromTo(".triangle-img", {
        bottom: "-30%",
    }, {
        bottom: "-20%",
        duration: 25,
    });
    tl.fromTo(".right-arrow-img", {
        right: '-30%',
        bottom: '20%',
    }, {
        bottom: '35%',
        duration: 30,
    });
    tl.fromTo(".button-3", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",

    });
    tl.fromTo(".content-img-3", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 25,
    });
    tl.fromTo(".content-img-3", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 10,
    });
    tl.fromTo(".button-3", {
        rotate: "-7deg",
        backgroundColor: "#53849980",
    }, {
        rotate: "0deg",
        duration: 25,
        backgroundColor: "#7EE49C80",
    });
    tl.fromTo(".triangle-img", {
        bottom: "-20%",
    }, {
        bottom: "-10%",
        duration: 25,
    });
    tl.fromTo(".right-arrow-img", {
        right: '-30%',
        bottom: '35%',
    }, {
        bottom: '50%',
        duration: 30,
    });
    tl.fromTo(".button-4", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",
    });
    tl.fromTo(".content-img-4", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 25,
    });
    tl.fromTo(".content-img-4", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 10,
    });
    tl.fromTo(".button-4", {
        rotate: "-7deg",
        backgroundColor: "#53849980",
    }, {
        rotate: "0deg",
        duration: 25,
        backgroundColor: "#7EE49C80",
    });
    tl.fromTo(".triangle-img", {
        bottom: "-10%",
    }, {
        bottom: "0",
        duration: 25,
    });
    tl.fromTo(".right-arrow-img", {
        right: '-30%',
        bottom: '50%',
    }, {
        bottom: '65%',
        duration: 30,
    });
    tl.fromTo(".button-5", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",
    });
    tl.fromTo(".content-img-5", {
        opacity: 0,
    }, {
        opacity: 2,
        duration: 25,
    })
});

mm.add("(min-width:1280.98px) and (max-width:1600.98px)", () => {
    gsap.set(".content-img-1", {
        opacity: 0,
        top: "24%",
        left: "17%",
    });
    gsap.set(".content-img-2", {
        opacity: 0,
        top: "13%",
        left: "28%",
    });
    gsap.set(".content-img-3", {
        opacity: 0,
        top: "14%",
        left: "26%",
    });
    gsap.set(".content-img-4", {
        opacity: 0,
        top: "34%",
        left: "38%",
    });
    gsap.set(".content-img-5", {
        opacity: 0,
        top: "14%",
        left: "16%",
    });
    gsap.set(".button-1", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    });
    gsap.set(".button-2", {
        rotate: "0deg"
    });
    gsap.set(".button-3", {
        rotate: "0deg"
    });
    gsap.set(".button-4", {
        rotate: "0deg"
    });
    gsap.set(".button-5", {
        rotate: "0deg"
    });
    gsap.set("triangle-img", {
        bottom: "-50%",
    })
    gsap.set(".right-arrow-img", {
        right: '-20%',
        bottom: '-100%',
    })

    ScrollTrigger.create({
        trigger: ".section-1",
        start: "top top",
        end: "400%",
        pin: true,
        animation: tl,
        scrub: 2,
    });


    tl.fromTo(".content-img-1", {
        opacity: 0,
    }, {
        opacity: 1,

    }, 0);

    tl.fromTo(".triangle-img", {
        bottom: "-50%",
    }, {
        bottom: "-40%",
        duration: 10,
    }, 0.2);


    tl.fromTo(".right-arrow-img", {
        right: '-20%',
        bottom: '-100%',
    }, {
        bottom: '5%',
        duration: 20,
    });
    tl.fromTo(".button-1", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",
    });
    tl.fromTo(".button-1", {
        rotate: "-7deg",
        backgroundColor: "#53849980",
    }, {
        rotate: "0deg",
        duration: 25,
        backgroundColor: "#7EE49C80",
    });
    tl.fromTo(".content-img-1", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 20,
    });
    tl.fromTo(".triangle-img", {
        bottom: "-40%",
    }, {
        bottom: "-30%",
        duration: 10,
    });
    tl.fromTo(".right-arrow-img", {
        right: '-20%',
        bottom: '5%',
    }, {
        bottom: '20%',
        duration: 30,
    });
    tl.fromTo(".button-2", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",
    });
    tl.fromTo(".content-img-2", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 30,
    });
    tl.fromTo(".content-img-2", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 30,
    });
    tl.fromTo(".button-2", {
        rotate: "-7deg",
        backgroundColor: "#53849980",
    }, {
        rotate: "0deg",
        duration: 25,
        backgroundColor: "#7EE49C80",
    });
    tl.fromTo(".triangle-img", {
        bottom: "-30%",
    }, {
        bottom: "-20%",
        duration: 25,
    });
    tl.fromTo(".right-arrow-img", {
        right: '-20%',
        bottom: '20%',
    }, {
        bottom: '35%',
        duration: 30,
    });
    tl.fromTo(".button-3", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",

    });
    tl.fromTo(".content-img-3", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 25,
    });
    tl.fromTo(".content-img-3", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 10,
    });
    tl.fromTo(".button-3", {
        rotate: "-7deg",
        backgroundColor: "#53849980",
    }, {
        rotate: "0deg",
        duration: 25,
        backgroundColor: "#7EE49C80",
    });
    tl.fromTo(".triangle-img", {
        bottom: "-20%",
    }, {
        bottom: "-10%",
        duration: 25,
    });
    tl.fromTo(".right-arrow-img", {
        right: '-20%',
        bottom: '35%',
    }, {
        bottom: '50%',
        duration: 30,
    });
    tl.fromTo(".button-4", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",
    });
    tl.fromTo(".content-img-4", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 25,
    });
    tl.fromTo(".content-img-4", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 25,
    });
    tl.fromTo(".button-4", {
        rotate: "-7deg",
        backgroundColor: "#53849980",
    }, {
        rotate: "0deg",
        duration: 25,
        backgroundColor: "#7EE49C80",
    });
    tl.fromTo(".triangle-img", {
        bottom: "-10%",
    }, {
        bottom: "0",
        duration: 25,
    });
    tl.fromTo(".right-arrow-img", {
        right: '-20%',
        bottom: '50%',
    }, {
        bottom: '65%',
        duration: 30,
    });
    tl.fromTo(".button-5", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",
    });
    tl.fromTo(".content-img-5", {
        opacity: 0,
    }, {
        opacity: 2,
        duration: 25,
    })
});

mm.add("(min-width:1023.98px) and (max-width:1280.98px)", () => {
    gsap.set(".content-img-1", {
        opacity: 0,
        top: "24%",
        left: "17%",
    });
    gsap.set(".content-img-2", {
        opacity: 0,
        top: "13%",
        left: "28%",
    });
    gsap.set(".content-img-3", {
        opacity: 0,
        top: "14%",
        left: "26%",
    });
    gsap.set(".content-img-4", {
        opacity: 0,
        top: "32%",
        left: "34%",
    });
    gsap.set(".content-img-5", {
        opacity: 0,
        top: "14%",
        left: "18%",
    });
    gsap.set(".button-1", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    });
    gsap.set(".button-2", {
        rotate: "0deg"
    });
    gsap.set(".button-3", {
        rotate: "0deg"
    });
    gsap.set(".button-4", {
        rotate: "0deg"
    });
    gsap.set(".button-5", {
        rotate: "0deg"
    });
    gsap.set("triangle-img", {
        bottom: "-50%",
    })
    gsap.set(".right-arrow-img", {
        right: '-15%',
        bottom: '-100%',
    })

    ScrollTrigger.create({
        trigger: ".section-1",
        start: "top top",
        end: "100%",
        pin: true,
        animation: tl,
        scrub: 2,
    });


    tl.fromTo(".content-img-1", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 5,
    }).fromTo(".triangle-img", {
        bottom: "-50%",
    }, {
        bottom: "-40%",
        duration: 10,
    }).fromTo(".right-arrow-img", {
        right: '-30%',
        bottom: '-100%',
    }, {
        bottom: '5%',
        duration: 100,
    }).fromTo(".button-1", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",
    }).fromTo(".button-1", {
        rotate: "-7deg",
        backgroundColor: "#53849980",
    }, {
        rotate: "0deg",
        duration: 25,
        backgroundColor: "#7EE49C80",
    }).fromTo(".content-img-1", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 20,
    }).fromTo(".triangle-img", {
        bottom: "-40%",
    }, {
        bottom: "-30%",
        duration: 10,
    }).fromTo(".right-arrow-img", {
        right: '-15%',
        bottom: '5%',
    }, {
        bottom: '20%',
        duration: 30,
    }).fromTo(".button-2", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",
    }).fromTo(".content-img-2", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 30,
    }).fromTo(".content-img-2", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 30,
    }).fromTo(".button-2", {
        rotate: "-7deg",
        backgroundColor: "#53849980",
    }, {
        rotate: "0deg",
        duration: 25,
        backgroundColor: "#7EE49C80",
    }).fromTo(".triangle-img", {
        bottom: "-30%",
    }, {
        bottom: "-20%",
        duration: 25,
    }).fromTo(".right-arrow-img", {
        right: '-15%',
        bottom: '20%',
    }, {
        bottom: '35%',
        duration: 30,
    }).fromTo(".button-3", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",

    }).fromTo(".content-img-3", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 25,
    }).fromTo(".content-img-3", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 10,
    }).fromTo(".button-3", {
        rotate: "-7deg",
        backgroundColor: "#53849980",
    }, {
        rotate: "0deg",
        duration: 25,
        backgroundColor: "#7EE49C80",
    }).fromTo(".triangle-img", {
        bottom: "-20%",
    }, {
        bottom: "-10%",
        duration: 25,
    }).fromTo(".right-arrow-img", {
        right: '-15%',
        bottom: '35%',
    }, {
        bottom: '50%',
        duration: 30,
    }).fromTo(".button-4", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",
    }).fromTo(".content-img-4", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 25,
    }).fromTo(".content-img-4", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 10,
    }).fromTo(".button-4", {
        rotate: "-7deg",
        backgroundColor: "#53849980",
    }, {
        rotate: "0deg",
        duration: 25,
        backgroundColor: "#7EE49C80",
    }).fromTo(".triangle-img", {
        bottom: "-10%",
    }, {
        bottom: "0",
        duration: 25,
    }).fromTo(".right-arrow-img", {
        right: '-15%',
        bottom: '50%',
    }, {
        bottom: '65%',
        duration: 30,
    }).fromTo(".button-5", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",
    }).fromTo(".content-img-5", {
        opacity: 0,
    }, {
        opacity: 2,
        duration: 25,
    })
});

mm.add("(min-width:767.98px) and (max-width:1023.98px)", () => {
    gsap.set(".content-img-1", {
        opacity: 0,
        top: "24%",
        left: "17%",
    });
    gsap.set(".content-img-2", {
        opacity: 0,
        top: "13%",
        left: "28%",
    });
    gsap.set(".content-img-3", {
        opacity: 0,
        top: "14%",
        left: "26%",
    });
    gsap.set(".content-img-4", {
        opacity: 0,
        top: "32%",
        left: "34%",
    });
    gsap.set(".content-img-5", {
        opacity: 0,
        top: "14%",
        left: "18%",
    });
    gsap.set(".button-1", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    });
    gsap.set(".button-2", {
        rotate: "0deg"
    });
    gsap.set(".button-3", {
        rotate: "0deg"
    });
    gsap.set(".button-4", {
        rotate: "0deg"
    });
    gsap.set(".button-5", {
        rotate: "0deg"
    });
    gsap.set("triangle-img", {
        bottom: "-50%",
    })
    gsap.set(".right-arrow-img", {
        right: '-15%',
        bottom: '-100%',
    })

    ScrollTrigger.create({
        trigger: ".section-1",
        start: "top top",
        end: "100%",
        pin: true,
        animation: tl,
        scrub: 2,
    });


    tl.fromTo(".content-img-1", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 5,
    }).fromTo(".triangle-img", {
        bottom: "-50%",
    }, {
        bottom: "-40%",
        duration: 10,
    }).fromTo(".right-arrow-img", {
        right: '-30%',
        bottom: '-100%',
    }, {
        bottom: '5%',
        duration: 100,
    }).fromTo(".button-1", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",
    }).fromTo(".button-1", {
        rotate: "-7deg",
        backgroundColor: "#53849980",
    }, {
        rotate: "0deg",
        duration: 25,
        backgroundColor: "#7EE49C80",
    }).fromTo(".content-img-1", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 20,
    }).fromTo(".triangle-img", {
        bottom: "-40%",
    }, {
        bottom: "-30%",
        duration: 10,
    }).fromTo(".right-arrow-img", {
        right: '-15%',
        bottom: '5%',
    }, {
        bottom: '20%',
        duration: 30,
    }).fromTo(".button-2", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",
    }).fromTo(".content-img-2", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 30,
    }).fromTo(".content-img-2", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 30,
    }).fromTo(".button-2", {
        rotate: "-7deg",
        backgroundColor: "#53849980",
    }, {
        rotate: "0deg",
        duration: 25,
        backgroundColor: "#7EE49C80",
    }).fromTo(".triangle-img", {
        bottom: "-30%",
    }, {
        bottom: "-20%",
        duration: 25,
    }).fromTo(".right-arrow-img", {
        right: '-15%',
        bottom: '20%',
    }, {
        bottom: '35%',
        duration: 30,
    }).fromTo(".button-3", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",

    }).fromTo(".content-img-3", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 25,
    }).fromTo(".content-img-3", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 10,
    }).fromTo(".button-3", {
        rotate: "-7deg",
        backgroundColor: "#53849980",
    }, {
        rotate: "0deg",
        duration: 25,
        backgroundColor: "#7EE49C80",
    }).fromTo(".triangle-img", {
        bottom: "-20%",
    }, {
        bottom: "-10%",
        duration: 25,
    }).fromTo(".right-arrow-img", {
        right: '-15%',
        bottom: '35%',
    }, {
        bottom: '50%',
        duration: 30,
    }).fromTo(".button-4", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",
    }).fromTo(".content-img-4", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 25,
    }).fromTo(".content-img-4", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 10,
    }).fromTo(".button-4", {
        rotate: "-7deg",
        backgroundColor: "#53849980",
    }, {
        rotate: "0deg",
        duration: 25,
        backgroundColor: "#7EE49C80",
    }).fromTo(".triangle-img", {
        bottom: "-10%",
    }, {
        bottom: "0",
        duration: 25,
    }).fromTo(".right-arrow-img", {
        right: '-15%',
        bottom: '50%',
    }, {
        bottom: '65%',
        duration: 30,
    }).fromTo(".button-5", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",
    }).fromTo(".content-img-5", {
        opacity: 0,
    }, {
        opacity: 2,
        duration: 25,
    })
});

mm.add("(max-width:767.98px)", () => {
    gsap.set(".content-img-1", {
        opacity: 0,
        top: "24%",
        left: "17%",
    });
    gsap.set(".content-img-2", {
        opacity: 0,
        top: "13%",
        left: "28%",
    });
    gsap.set(".content-img-3", {
        opacity: 0,
        top: "14%",
        left: "26%",
    });
    gsap.set(".content-img-4", {
        opacity: 0,
        top: "32%",
        left: "34%",
    });
    gsap.set(".content-img-5", {
        opacity: 0,
        top: "14%",
        left: "18%",
    });
    gsap.set(".button-1", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    });
    gsap.set(".button-2", {
        rotate: "0deg"
    });
    gsap.set(".button-3", {
        rotate: "0deg"
    });
    gsap.set(".button-4", {
        rotate: "0deg"
    });
    gsap.set(".button-5", {
        rotate: "0deg"
    });
    gsap.set("triangle-img", {
        bottom: "-50%",
    })
    gsap.set(".right-arrow-img", {
        right: '-15%',
        bottom: '-100%',
    })

    ScrollTrigger.create({
        trigger: ".section-1",
        start: "top top",
        end: "100%",
        pin: true,
        animation: tl,
        scrub: 2,
    });


    tl.fromTo(".content-img-1", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 5,
    }).fromTo(".triangle-img", {
        bottom: "-50%",
    }, {
        bottom: "-40%",
        duration: 10,
    }).fromTo(".right-arrow-img", {
        right: '-30%',
        bottom: '-100%',
    }, {
        bottom: '5%',
        duration: 100,
    }).fromTo(".button-1", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",
    }).fromTo(".button-1", {
        rotate: "-7deg",
        backgroundColor: "#53849980",
    }, {
        rotate: "0deg",
        duration: 25,
        backgroundColor: "#7EE49C80",
    }).fromTo(".content-img-1", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 20,
    }).fromTo(".triangle-img", {
        bottom: "-40%",
    }, {
        bottom: "-30%",
        duration: 10,
    }).fromTo(".right-arrow-img", {
        right: '-15%',
        bottom: '5%',
    }, {
        bottom: '20%',
        duration: 30,
    }).fromTo(".button-2", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",
    }).fromTo(".content-img-2", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 30,
    }).fromTo(".content-img-2", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 30,
    }).fromTo(".button-2", {
        rotate: "-7deg",
        backgroundColor: "#53849980",
    }, {
        rotate: "0deg",
        duration: 25,
        backgroundColor: "#7EE49C80",
    }).fromTo(".triangle-img", {
        bottom: "-30%",
    }, {
        bottom: "-20%",
        duration: 25,
    }).fromTo(".right-arrow-img", {
        right: '-15%',
        bottom: '20%',
    }, {
        bottom: '35%',
        duration: 30,
    }).fromTo(".button-3", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",

    }).fromTo(".content-img-3", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 25,
    }).fromTo(".content-img-3", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 10,
    }).fromTo(".button-3", {
        rotate: "-7deg",
        backgroundColor: "#53849980",
    }, {
        rotate: "0deg",
        duration: 25,
        backgroundColor: "#7EE49C80",
    }).fromTo(".triangle-img", {
        bottom: "-20%",
    }, {
        bottom: "-10%",
        duration: 25,
    }).fromTo(".right-arrow-img", {
        right: '-15%',
        bottom: '35%',
    }, {
        bottom: '50%',
        duration: 30,
    }).fromTo(".button-4", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",
    }).fromTo(".content-img-4", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 25,
    }).fromTo(".content-img-4", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 10,
    }).fromTo(".button-4", {
        rotate: "-7deg",
        backgroundColor: "#53849980",
    }, {
        rotate: "0deg",
        duration: 25,
        backgroundColor: "#7EE49C80",
    }).fromTo(".triangle-img", {
        bottom: "-10%",
    }, {
        bottom: "0",
        duration: 25,
    }).fromTo(".right-arrow-img", {
        right: '-15%',
        bottom: '50%',
    }, {
        bottom: '65%',
        duration: 30,
    }).fromTo(".button-5", {
        rotate: "0deg",
        backgroundColor: "#7EE49C80",
    }, {
        rotate: "-7deg",
        duration: 25,
        backgroundColor: "#53849980",
    }).fromTo(".content-img-5", {
        opacity: 0,
    }, {
        opacity: 2,
        duration: 25,
    })
});