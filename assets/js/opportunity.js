gsap.registerPlugin(ScrollTrigger);

const cardImages = document.querySelectorAll('.card-img-1, .card-img-2, .card-img-3, .card-img-4, .card-img-5, .card-img-6, .card-img-7, .card-img-8');
gsap.from(cardImages, {
    x: 400,
    opacity: 0,
    duration: 2,
    ease: "power4.out",
    stagger: {
        amount: 3,
        start: 0.9,
        from: "start"
    },
    scrollTrigger: {
        trigger: '.section-1',
        start: "top 60%",
        end: "top 0%",
        scrub: 3,
    }
});
 
gsap.from(".heading", {
    y: -100,  
    opacity: 0,  
    duration: 2, 
    ease: "power4.out",  
    scrollTrigger: {
        trigger: '.section-1', 
        start: "top 50%",
        end: "top 0%", 
        scrub: 3, 
    }
});