const tl = gsap.timeline();
const mm = gsap.matchMedia();

mm.add("(min-width:1023.98px)", () => {
 

    ScrollTrigger.create({
        trigger: ".section-1",
        start: "top top",
        end: "600%",
        pin: true,
        animation: tl,
        scrub: 3,
    });


    tl.fromTo(".text-content-1", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 0.25);
    tl.fromTo(".img-content-1", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 0.25);
   
    
    tl.fromTo(".text-content-2", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 0.50);
    tl.fromTo(".img-content-2", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 0.50);
    tl.fromTo(".text-content-2", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 1.50);
    tl.fromTo(".img-content-2", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 1.50);
    tl.fromTo(".text-content-3", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 1.70);
    tl.fromTo(".img-content-3", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 1.70);
    tl.fromTo(".text-content-3", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 2.50);
    tl.fromTo(".img-content-3", {
        opacity: 1,
    }, {
        opacity: 0,
    }, 2.50);
    tl.fromTo(".text-content-4", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 2.75);
    tl.fromTo(".img-content-4", {
        opacity: 0,
    }, {
        opacity: 1,
    }, 2.75);
   
});

// mm.add("(max-width:767.98px)", () => {
 

//     ScrollTrigger.create({
//         trigger: ".section-1",
//         start: "top top",
//         end: "600%",
//         pin: true,
//         animation: tl,
//         scrub: 3,
//     });


//     tl.fromTo(".text-content-1", {
//         opacity: 1,
//     }, {
//         opacity: 0,
//     }, 0.25);
//     tl.fromTo(".img-content-1", {
//         opacity: 1,
//     }, {
//         opacity: 0,
//     }, 0.25);
   
    
//     tl.fromTo(".text-content-2", {
//         opacity: 0,
//     }, {
//         opacity: 1,
//     }, 0.50);
//     tl.fromTo(".img-content-2", {
//         opacity: 0,
//     }, {
//         opacity: 1,
//     }, 0.50);
//     tl.fromTo(".text-content-2", {
//         opacity: 1,
//     }, {
//         opacity: 0,
//     }, 1.50);
//     tl.fromTo(".img-content-2", {
//         opacity: 1,
//     }, {
//         opacity: 0,
//     }, 1.50);
//     tl.fromTo(".text-content-3", {
//         opacity: 0,
//     }, {
//         opacity: 1,
//     }, 1.70);
//     tl.fromTo(".img-content-3", {
//         opacity: 0,
//     }, {
//         opacity: 1,
//     }, 1.70);
//     tl.fromTo(".text-content-3", {
//         opacity: 1,
//     }, {
//         opacity: 0,
//     }, 2.50);
//     tl.fromTo(".img-content-3", {
//         opacity: 1,
//     }, {
//         opacity: 0,
//     }, 2.50);
//     tl.fromTo(".text-content-4", {
//         opacity: 0,
//     }, {
//         opacity: 1,
//     }, 2.75);
//     tl.fromTo(".img-content-4", {
//         opacity: 0,
//     }, {
//         opacity: 1,
//     }, 2.75);
   
// });
