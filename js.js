'use strict';
let input=document.querySelector('.input');
let btn=document.querySelector('.btn');
let main1=document.querySelector('.main1');

btn.addEventListener('click',function () {


   let result=function () {
       let div=document.createElement('div');
  let h3 =document.createElement('h3');
  let delet=document.createElement('button');
  delet.textContent="Delete";
   delet.style="background-image:linear-gradient(to top left,#6CB4EE,#F0F8FF);width:80px; height:30px;border-radius:15px;border:none";
   
   h3.textContent=input.value;
   input.value="";
    div.style="background:#ddd;width:350px;height:30px;border-radius:15px;margin:20px auto;padding:20px; display:flex; align-items:center;justify-content:space-between;";
    
    div.appendChild(h3);
    div.appendChild(delet);
    main1.appendChild(div);
    
    delet.addEventListener('click',function () {
        div.remove()
    })
   
   }
  result();
  
})






























































