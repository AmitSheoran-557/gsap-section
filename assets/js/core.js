const tl = gsap.timeline();
const mm = gsap.matchMedia();

// mm.add("(min-width:1600.98px)", () => {
//     ScrollTrigger.create({
//         trigger: ".section-1",
//         start: "top top",
//         end: "400%",
//         pin: true,
//         animation: tl,
//         scrub: 3,
//     });

//     tl.fromTo(".text-content-1", {
//         opacity: 0,
//     }, {
//         opacity: 1,
//     }, 0.25);
//     tl.fromTo(".img-content-1", {
//         opacity: 0,
//     }, {
//         opacity: 1,
//     }, 0.25);
//     tl.fromTo(".card-1-common-content", {
//         opacity: 0,
//         display:"none"
//     }, {
//         display:"block",
//         opacity: 1,
//     }, 0.25);
//     tl.fromTo(".text-content-1", {
//         opacity: 1,
//     }, {
//         opacity: 0,
//     }, 0.75);
//     tl.fromTo(".text-content-2", {
//         opacity: 0,
//     }, {
//         opacity: 1,
//     }, 1.25);
//     tl.fromTo(".text-content-2", {
//         opacity: 1,
//     }, {
//         opacity: 0,
//     }, 1.75);
//     tl.fromTo(".text-content-3", {
//         opacity: 0,
//     }, {
//         opacity: 1,
//     }, 2.30);
//     tl.fromTo(".text-content-3", {
//         opacity: 1,
//     }, {
//         opacity: 0,
//     }, 3.10);
//     tl.fromTo(".text-content-4", {
//         opacity: 0,
//     }, {
//         opacity: 1,
//     }, 3.75);
//     tl.fromTo(".text-content-4", {
//         opacity: 1,
//     }, {
//         opacity: 0,
//     }, 4.25);
//     tl.fromTo(".text-content-5", {
//         opacity: 0,
//     }, {
//         opacity: 1,
//     }, 4.75);
//     tl.fromTo(".text-content-5", {
//         opacity: 1,
//     }, {
//         opacity: 0,
//     }, 5.25);
//     tl.fromTo(".text-content-6", {
//         opacity: 0,
//     }, {
//         opacity: 1,
//     }, 5.75);
//     tl.fromTo(".text-content-6", {
//         opacity: 1,
//     }, {
//         opacity: 0,
//     }, 6);
//     tl.fromTo(".card-1-common-content", {
//         display: "block",
//     }, {
//         display: "none",
//     }, 5.75);
//     tl.fromTo(".img-content-1", {
//         opacity: 1,
//     }, {
//         opacity: 0,
//     }, 6);
//     tl.fromTo(".img-content-2", {
//         opacity: 0,
//     }, {
//         opacity: 1,
//     }, 6.55);
//     tl.fromTo(".card-2-content", {
//         opacity: 0,
//     }, {
//         opacity: 1,
//     }, 6.55);
//     tl.fromTo(".img-content-2", {
//         opacity: 1,
//     }, {
//         opacity: 0,
//     }, 7.25);
//     tl.fromTo(".card-2-content", {
//         opacity: 1,
//     }, {
//         opacity: 0,
//     }, 7.25);
//     tl.fromTo(".img-content-3", {
//         opacity: 0,
//     }, {
//         opacity: 1,
//     }, 7.75);
//     tl.fromTo(".card-3-content", {
//         opacity: 0,
//     }, {
//         opacity: 1,
//     }, 7.75);

// });

mm.add("(min-width:767.98px)", () => {
    ScrollTrigger.create({
        trigger: ".section-1",
        start: "top top",
        end: "600%",
        pin: true,
        animation: tl,
        scrub: 3,
    });

    tl.fromTo(".text-content-1", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 0.25);
    tl.fromTo(".img-content-1", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 0.25);
    tl.fromTo(".card-1-common-content", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 0.25);
    tl.fromTo(".text-content-1", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 0.75);
    tl.fromTo(".text-content-2", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 1.25);
    tl.fromTo(".text-content-2", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 1.75);
    tl.fromTo(".text-content-3", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 2.30);
    tl.fromTo(".text-content-3", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 3.10);
    tl.fromTo(".text-content-4", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 3.75);
    tl.fromTo(".text-content-4", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 4.25);
    tl.fromTo(".text-content-5", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 4.75);
    tl.fromTo(".text-content-5", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 5.25);
    tl.fromTo(".text-content-6", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 5.75);
    tl.fromTo(".text-content-6", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 6);
    tl.fromTo(".card-1-common-content", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 6);
    tl.fromTo(".img-content-1", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 6);
    tl.fromTo(".img-content-2", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 6.55);
    tl.fromTo(".card-2-content", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 6.55);
    tl.fromTo(".img-content-2", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 7.25);
    tl.fromTo(".card-2-content", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 7.25);
    tl.fromTo(".img-content-3", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 7.75);
    tl.fromTo(".card-3-content", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 7.75);

});

mm.add("(max-width:767.98px)", () => {
    ScrollTrigger.create({
        trigger: ".section-1",
        start: "top top",
        end: "600%",
        pin: true,
        animation: tl,
        scrub: 3,
    });

    tl.fromTo(".text-content-1", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 0.25);
    tl.fromTo(".img-content-1", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 0.25);
    tl.fromTo(".card-1-common-content", {
        opacity: 0,
        display: "none"
    }, {
        display: "block",
        opacity: 1,
    }, 0.25);
    tl.fromTo(".text-content-1", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 0.75);
    tl.fromTo(".text-content-2", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 1.25);
    tl.fromTo(".text-content-2", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 1.75);
    tl.fromTo(".text-content-3", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 2.30);
    tl.fromTo(".text-content-3", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 3.10);
    tl.fromTo(".text-content-4", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 3.75);
    tl.fromTo(".text-content-4", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 4.25);
    tl.fromTo(".text-content-5", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 4.75);
    tl.fromTo(".text-content-5", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 5.25);
    tl.fromTo(".text-content-6", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 5.75);
    tl.fromTo(".text-content-6", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 5.75);
    tl.fromTo(".card-1-common-content", {
        display: "block",
    }, {
        display: "none",
    }, 5.75);
    tl.fromTo(".img-content-1", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 6);
    tl.fromTo(".img-content-2", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 6.55);
    tl.fromTo(".card-2-content", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 6.55);
    tl.fromTo(".img-content-2", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 7.25);
    tl.fromTo(".card-2-content", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 7.25);
    tl.fromTo(".img-content-3", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 7.75);
    tl.fromTo(".card-3-content", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 7.75);
});
