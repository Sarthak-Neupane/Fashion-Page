const div = document.querySelector(".cursor");
const hero = document.querySelector(".hero");
const gridImg = document.querySelectorAll(".gridLayer");
const tenImg = document.querySelectorAll(".ten-img");
const main = document.querySelector("main");

window.addEventListener("mousemove", (e) => {
	div.style.top = e.clientY + "px";
	div.style.left = e.clientX + "px";
});

// window.addEventListener("scroll", () => {
// 	console.log(window.scrollY);
// });

// hero.addEventListener("mouseover", () => {
// 	div.style.border = "2px solid white";
// });
// hero.addEventListener("mouseleave", () => {
// 	div.style.border = "2px solid black";
// });
gridImg.forEach((img) => {
	img.addEventListener("mouseover", () => {
		div.innerHTML = "Lets go";
		div.classList.add("imgHover");
	});

	img.addEventListener("mouseleave", () => {
		div.innerHTML = "";
		div.classList.remove("imgHover");
	});
});

tenImg.forEach((ten) => {
	ten.addEventListener("mouseover", () => {
		div.innerHTML = "Explore";
		div.classList.add("imgHover");
	});

	ten.addEventListener("mouseleave", () => {
		div.innerHTML = "";
		div.classList.remove("imgHover");
	});
});

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
	el: document.querySelector(".smooth-scroll"),
	smooth: true,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".smooth-scroll", {
	scrollTop(value) {
		return arguments.length
			? locoScroll.scrollTo(value, 0, 0)
			: locoScroll.scroll.instance.scroll.y;
	},
	getBoundingClientRect() {
		return {
			top: 0,
			left: 0,
			width: window.innerWidth,
			height: window.innerHeight,
		};
	},

	pinType: document.querySelector(".smooth-scroll").style.transform
		? "transform"
		: "fixed",
});

let t2 = gsap.timeline();

t2.from(".span", {
	scale: 3,
	opacity: 0,
	ease: "none",
	stagger: 0.2,
	scrollTrigger: {
		trigger: ".grid-container",
		start: "top 60%",
		end: "top 10%",
		scrub: 4,
		scroller: ".smooth-scroll",
	},
});

t2.to(".center", {
	opacity: 0,
	ease: "Power1.easeInOut",
	scrollTrigger: {
		trigger: ".grid-container",
		start: "top -30%",
		end: "top -60%",
		scroller: ".smooth-scroll",
		scrub: true,
	},
});

t2.to(
	".grid",
	{
		scale: 1,
		ease: "none",
		scrollTrigger: {
			trigger: ".grid-container",
			// onEnter: () => {
			// 	body.style.backgroundColor = "rgb(34, 32, 32)";
			// },
			// onEnterBack: () => {
			// 	body.style.backgroundColor = "rgb(34, 32, 32)";
			// },
			// onLeave: () => {
			// 	body.style.backgroundColor = "rgb(255, 248, 220)";
			// },
			// onLeaveBack: () => {
			// 	body.style.backgroundColor = "rgb(255, 248, 220)";
			// },
			start: "top -10%",
			scrub: 1,
			pin: ".grid-container",
			endTrigger: ".container",
			end: "top bottom",
			scroller: ".smooth-scroll",
		},
	},
	"-=3"
);

let sections = gsap.utils.toArray(".panel");
let sections2 = gsap.utils.toArray(".panel2");
let sections3 = gsap.utils.toArray(".panel3");

let t1 = gsap.timeline();

t1.to(".container", {
	background: "#2B2B2B",
	scrollTrigger: {
		trigger: ".container",
		start: "top top",
		scrub: true,
		scroller: ".smooth-scroll",
	},
});
t1.to(".container2", {
	background: "#2B2B2B",
	scrollTrigger: {
		trigger: ".container",
		start: "top top",
		scrub: true,
		scroller: ".smooth-scroll",
	},
});
t1.to(".container3", {
	background: "#2B2B2B",
	scrollTrigger: {
		trigger: ".container2",
		start: "top top",
		scrub: true,
		scroller: ".smooth-scroll",
	},
});

t1.from(".panel", {
	x: 1000,
	y: 500,
	scrollTrigger: {
		trigger: ".container",
		start: "top 80%",
		scrub: true,
		scroller: ".smooth-scroll",
	},
});

t1.from(".about", {
	opacity: 0,
	scale: 4,
	scrollTrigger: {
		trigger: ".container",
		start: "top 50%",
		scrub: true,
		scroller: ".smooth-scroll",
	},
});

t1.to(sections, {
	xPercent: -100 * (sections.length - 1),
	ease: "Power1.easeInOut",
	scrollTrigger: {
		trigger: ".container",
		start: "top top",
		pin: ".container",
		scrub: 1,
		end: () => "+=" + document.querySelector(".container").offsetWidth,
		scroller: ".smooth-scroll",
	},
});

t1.from(".panel2", {
	x: -4000,
	y: 1500,
	scrollTrigger: {
		trigger: ".container2",
		start: "top 80%",
		scrub: true,
		scroller: ".smooth-scroll",
	},
});

t1.from(".about2", {
	opacity: 0,
	scale: 4,
	scrollTrigger: {
		trigger: ".container2",
		start: "top 50%",
		scrub: true,
		scroller: ".smooth-scroll",
	},
});

t1.to(sections2, {
	xPercent: 100 * (sections2.length - 1),
	ease: "Power1.easeInOut",
	scrollTrigger: {
		trigger: ".container2",
		start: "top top",
		pin: ".container2",
		scrub: 1,
		end: () => "+=" + document.querySelector(".container2").offsetWidth,
		scroller: ".smooth-scroll",
	},
});

t1.from(".panel3", {
	x: 1000,
	y: 500,
	scrollTrigger: {
		trigger: ".container3",
		start: "top 80%",
		scrub: true,
		scroller: ".smooth-scroll",
	},
});

t1.from(".about3", {
	opacity: 0,
	scale: 4,
	scrollTrigger: {
		trigger: ".container3",
		start: "top 50%",
		scrub: true,
		scroller: ".smooth-scroll",
	},
});

t1.to(sections3, {
	xPercent: -100 * (sections.length - 1),
	ease: "Power1.easeInOut",
	scrollTrigger: {
		trigger: ".container3",
		start: "top top",
		pin: ".container3",
		scrub: 1,
		end: () => "+=" + document.querySelector(".container3").offsetWidth,
		scroller: ".smooth-scroll",
	},
});

let spans = gsap.utils.toArray(".span");

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
