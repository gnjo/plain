;(function(root){
'use strict';
let fn={};
 fn.i=function(html){
  if(typeof html !=='string') return html
  var el=document.createElement('table'); el.innerHTML=html.trim();
  return el.childNodes[0];
 } 
 fn.q=(d=>document.querySelector(d))
 fn.qa=((d,doc=document)=>[].slice.call(doc.querySelectorAll(d))) 
 fn.scv=(el,type='top')=>{
 if(type=='top') return el.scrollIntoView({ behavior: 'smooth',block: "start", inline: "nearest" })
 if(type=='bottom') return el.scrollIntoView({ behavior: 'smooth',block: "end", inline: "nearest" })
 /*if(type=='center')*/ return el.scrollIntoView({ behavior: 'smooth'}) 
}
 ///
 let nav=fn.q('nav[plain]')
 ,plains=fn.qa('div[plain]')
 ,body=fn.q('section[plain]')
 ;
 plains.map(d=>{
  let name=d.getAttribute('name')||''
  let el=fn.i(`<label>-${name}</label>`)
  el.onclick=function(e){ fn.scv(d) }
  nav.appendChild(el);
 })
})(this);
