import { gsap } from "gsap";

gsap.set("#window-scene",{transformOrigin:"60% 40%"});
gsap.set("#cabin-scene",{transformOrigin:"85% 50%"});

const mainTl = new gsap.timeline();


function scaleWindow(){
    const tl = new gsap.timeline();
    tl.to("#window-scene",{duration:5, ease:"none", scale:20})
    .to("#window-scene",{duration:0.25, alpha:0});
    return tl;
}

function scaleHouse(){
    const tl = new gsap.timeline();
    tl.to("#cabin-scene",{duration:5, ease:"none", scale:10})
    .to("#cabin-scene",{duration:10, ease:"none", scale:40})
    .to("#cabin-scene",{duration:2, ease:"none", scale:45, alpha:0})
    
}

mainTl.add(scaleWindow(),"scaleFirst")
.add(scaleHouse(),"scaleFirst");

