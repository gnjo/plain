;(function(root){
/*histroy
 v1 cut the treat
 v2 circle dot
*/
'use strict';
let fn={};
 fn.i=function(html){
  if(typeof html !=='string') return html
  var el=document.createElement('table'); el.innerHTML=html.trim();
  return el.childNodes[0];
 }
 fn.q=(d=>document.querySelector(d))
 fn.qa=((d,doc=document)=>[].slice.call(doc.querySelectorAll(d))) 
 fn.scv=(el)=>{return el.scrollIntoView({ behavior: 'smooth',block: "start", inline: "nearest" })}
 //
 fn.qa('div[plain]').map(d=>{
  let name=d.getAttribute('name')||''
  //,el=fn.i(`<label>-${name}</label>`)
    ,el=fn.i(`<label v="${}"><span class="dot"></span></label>`)
  ;
  el.onclick=function(e){ fn.scv(d) }
  fn.q('nav[plain]').appendChild(el);
 })
})(this);
