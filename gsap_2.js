let t1 = gsap.timeline({paused: true});

t1.to(".overlay", 1.6,{
    top: 0,
    ease: "slow.in",

});

t1.staggerFrom(".menu ul li", 1, {

    y:100,
    opacity: 0,
    ease: "slow.in",
},0.1);

t1.reverse();

$(document).on("click", ".menu-btn", () =>{
    t1.reversed(!t1.reversed());
});

t1.reverse();

$(document).on("click", "li", () =>{
    t1.reversed(!t1.reversed());
});

// PERSPECTIVE -------------------->

// const text = document.querySelectorAll('li');
// const halfX = window.innerWidth / 2;
// const halfY = window.innerHeight / 2;

// document.addEventListener('mousemove', (e) => {
//   text.forEach((el, i) => {
//     TweenMax.to(el, 0.5, {
//       x: (e.clientX - halfX) * (i + 1) * .01,
//       y: (e.clientY - halfY) * (i + 1) * .01
//     });
//   });
// });

// ------------------------------------

// Dragging heading ------------------->

Draggable.create(".heading", {type: "x,y", edgeResistance:0.65,inertia: true});

// ------------------------------------