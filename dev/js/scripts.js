import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools);

gsap.set("#window-scene",{transformOrigin:"60% 40%"});
gsap.set("#cabin-scene",{transformOrigin:"80% 50%"});

const mainTl = new gsap.timeline();

function scaleWindow(){
    const tl = new gsap.timeline();
    tl.to("#window-scene",{duration:5, ease:"none", scale:20})
    .to("#window-scene",{duration:0.25, alpha:0},"-=3");
    return tl;
}

function scaleHouse(){
    const tl = new gsap.timeline();
    tl.to("#cabin-scene",{duration:60, ease:"none", scale:10},"zoom")
    .from("#front-left",{duration: 10, ease:"none", y:"+=200"},"zoom")
    .from("#front-right",{duration: 10, ease:"none", y:"+=200"},"zoom")
    .from("#middle-in-front-of",{duration: 10, ease:"none", y:"+=300"},"zoom")
    .from("#house-hill",{duration: 10, ease:"none", y:"+=300"},"zoom")
    .from("#center",{duration: 10, ease:"none", y:"+=350"},"zoom")
    .from("#background-mountains",{duration: 10, ease:"none", y:"+=400"},"zoom")
    .from("#bg",{duration: 10, ease:"none", scaleY:2},"zoom");
    return tl
}

function zoomHouse(){
    const tl = new gsap.timeline();
    tl.to("#cabin-scene",{duration:20, ease:"none", scale:70, y:"-=800", x:"-=600"},"zoom");
    return tl
}

function fadeOutHouse(){
    const tl = new gsap.timeline();
    tl.to("#cabin-scene",{duration:5, alpha:0})
    .to(".snow",{duration:0.25, alpha:0});
    return tl
}

mainTl.add(scaleWindow(),"scaleFirst")
.add(scaleHouse(),"scaleFirst")
.add(zoomHouse())
.add(fadeOutHouse(),"-=15");

GSDevTools.create();

