import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(GSDevTools,SplitText,DrawSVGPlugin);

gsap.set("#window-scene",{transformOrigin:"60% 40%"});
gsap.set("#cabin-scene",{transformOrigin:"80% 50%"});
gsap.set("#bg",{scaleY:2});


// var audio = new Audio('audio/cardMusic.mp3');
// audio.play();

const mainTl = new gsap.timeline();

function scaleWindow(){
    const tl = new gsap.timeline();
    tl.to("#window-scene",{duration:5, ease:"none", scale:20})
    .to("#window-scene",{duration:0.25, alpha:0},"-=3");
    return tl;
}

function scaleOutside(){
    const tl = new gsap.timeline();
    tl.from("#front-left",{duration: 5, y:"+=200"},"zoom")
    .from("#front-right",{duration: 5, y:"+=200"},"zoom")
    .from("#middle-in-front-of",{duration: 5,  y:"+=250"},"zoom")
    .from("#house-hill",{duration: 5,  y:"+=250"},"zoom")
    .from("#center",{duration: 5,  y:"+=300"},"zoom")
    .from("#background-mountains",{duration: 5,  y:"+=300"},"zoom")
    .from("#chimney-main",{duration: 5, alpha:0, y:"+=150"},"-=4");
    return tl;
}

function majorAniIn(){
    var splitMajors = new SplitText("#majors li",{type: "words,chars"}),
    chars = splitMajors.chars; 
    const tl = new gsap.timeline();
    tl.from("#majors",{duration:0.5, scale:0, alpha:0, xPercent:-50, yPercent:-50})
    .from(chars,{duration:0.5, y:"+=50", stagger:0.01, alpha:0});
    return tl;
}

function majorAniOut(){
    var splitMajors = new SplitText("#majors li",{type: "lines"}),
    lines = splitMajors.lines; 
    const tl = new gsap.timeline();
    tl.to(lines,{duration:0.5, y:"+=50", stagger:-0.01, alpha:0})
    .to("#majors",{duration:0.5, alpha:0},"-=50%");
    return tl;
}

function zoomIn(){
    const tl = new gsap.timeline();
    tl.to("#front-left",{duration: 4, ease:"none", y:"+=800", scale:2.5,transformOrigin:"center"},"zoom")
    .to("#front-right",{duration: 4, ease:"none", y:"+=800", scale:2.5,transformOrigin:"center"},"zoom")
    .to("#middle-in-front-of",{duration: 4, ease:"none", y:"+=850", scale:2.5,transformOrigin:"center"},"zoom")
    .to("#house-hill",{duration: 8, ease:"none", y:"+=800", scale:50,transformOrigin:"center", x:"-=1500"},"zoom")
    .to("#chimney-main",{duration: 1, alpha:0},"zoom")
    .to("#center",{duration: 8, ease:"none", y:"+=400", scale:2,transformOrigin:"center"},"zoom")
    .to("#background-mountains",{duration: 8, ease:"none", y:"+=200", scale:1.5,transformOrigin:"center"},"zoom")
    .to(".background",{duration: 2, ease:"none", alpha:0},"-=6")
    .to(".snow",{duration:0.25, alpha:0},"-=2")
    .to("#house-hill",{duration: 1, ease:"none", scale:100,transformOrigin:"center", y:"+=1000", x:"-=1000" },"fade")
    .to("#cabin-scene",{duration: 1, alpha:0},"fade")
    return tl;
}

function popcorn(){
    gsap.set("#leaf-clip-right",{transformOrigin:"left center"});
    gsap.set("#leaf-clip-left",{transformOrigin:"right center"});
    const tl = new gsap.timeline();
    tl.from(".pop",{duration: 0.25, alpha:0, stagger:-0.15})
    .from("#leaf-clip-right",{duration: 0.5, scale:0},"grow")
    .from("#leaf-clip-left",{duration: 0.5, scale:0},"grow")
    return tl;
}

function lights(){
    const tl = new gsap.timeline();
    tl.from(".wire",{duration: 1, stagger:0.5, drawSVG:"0"},"lights")
    .from(".lights",{duration: 1, stagger:0.5, scale:0, transformOrigin:"center"},"lights")
    .from("#glow",{duration: 1, alpha:0})
    return tl;
}


mainTl.add(scaleWindow(),"zoom")
.add(scaleOutside(),"zoom")
.add(majorAniIn(),"-=50%")
.add(majorAniOut(),"+=50%")
.add(zoomIn(),"fire")
// .add(firePlace(),"fire")
.add(popcorn(),"room")
.add(lights(),"room")

GSDevTools.create();

