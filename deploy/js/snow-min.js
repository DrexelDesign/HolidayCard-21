!function(){"use strict";
/*!
	// Snow.js - v0.0.3
	// kurisubrooks.com
	*/var e,t,o=300,s=["#DDD","#EEE"],n=[],i=[],l=[],r=[];function d(e){return rand=Math.floor(e*Math.random()),rand}function c(){for(e=document.body.scrollHeight-5,t=document.body.clientWidth-15,a=0;a<=300;a++)l[a]=0,r[a]=15*Math.random(),i[a]=.03+Math.random()/10,n[a]=document.getElementById("flake"+a),n[a].style.fontFamily="inherit",n[a].size=d(16)+8,n[a].style.fontSize=n[a].size+"px",n[a].style.color=s[d(s.length)],n[a].style.zIndex=1e3,n[a].sink=.75*n[a].size/5,n[a].posX=d(t-n[a].size),n[a].posY=d(2*e-e-2*n[a].size),n[a].style.left=n[a].posX+"px",n[a].style.top=n[a].posY+"px";!function(){for(a=0;a<=o;a++)l[a]+=i[a],n[a].posY+=n[a].sink,n[a].style.left=n[a].posX+r[a]*Math.sin(l[a])+"px",n[a].style.top=n[a].posY+"px",(n[a].posY>=e-2*n[a].size||parseInt(n[a].style.left)>t-3*r[a])&&(n[a].posX=d(t-n[a].size),n[a].posY=0);setTimeout("moveSnow()",50)}()}for(var a=0;a<=o;a++)document.write("<span class='snow' id='flake"+a+"' style='cursor: default; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;position:absolute;top:-24'>&#x2022;</span>");window.addEventListener("resize",(function(){e=document.body.scrollHeight-5,t=document.body.clientWidth-15})),window.addEventListener("load",(function(){c()}))}();