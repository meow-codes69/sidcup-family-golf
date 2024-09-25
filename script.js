var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.clientX + "px";
    crsr.style.top = dets.clientY + "px";
    blur.style.left = dets.clientX - 200 + "px";
    blur.style.top = dets.clientY - 200 + "px";
});

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.transform = "scale(3)";
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function () {
        crsr.style.transform = "scale(1)";
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    });

})
// GSAP ScrollTrigger for the #nav
gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top top",
        // end:"bottom 100%",
        scrub: true
    }
});

// GSAP ScrollTrigger for the #main
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -50%",  // Corrected format
        end: "top -51%",
        scrub: 2
    }
});
gsap.from("#about img, #about-us", {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 70%",
        end: "top 65 ",
        scrub: 1
    }
})

// gsap.from(".cards ", {
//     scale: 0.8,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.1,
//     scrollTrigger: {
//         trigger: ".cards",
//         scroller: "body",
//         start: "top 80%",
//         end: "top 75%",
//         scrub: 1
//     }
// })
gsap.from("#img1 ", {
    y: -70,
    x: -70,
    opacity: 0,
    duration: 1,
    scrollTrigger: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#img1 ",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 5
    }
})
gsap.from("#img2 ", {
    y: 70,
    x: 70,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#img1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 5
    }
})

gsap.from("#page4-h1", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page4-h1",
        scroller: "body",
        start: "top 80%",
        end: "top 75%",
        scrub: 3
    }
})