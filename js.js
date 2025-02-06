'use strict';
/*let containermovement=document.querySelector('.mainone');
*/

/*
const account1={
    owner:"jonas",
    movements:[500,450,-400,3000,-650,-130,70,1300],
    insertRate:1.2,
    pin:1111
};
const account2={
    owner:"maha",
    movements:[50,750,-900,3800,-250,-30,80,2300],
    insertRate:1.9,
    pin:222
};
const account3={
    owner:"mark",
    movements:[100,-50,-800,300,-60,-10,780,9300],
    insertRate:2.7,
    pin:333
};
const account4={
    owner:"sara",
    movements:[5000,460,-40,200,-90,-1300,710,100],
    insertRate:4.2,
    pin:4444
};
*//*
const displaymovements=function(movements) {
    movements.forEach(function (mov,i) {
 const type =mov>0?"deposite":"withdrowl";
 const html=`<div class="movement-row">
<div class="movement-type__movement-${type}">${i+1} ${type}</div>    
<div class="movement-value">${mov}</div>
          </div>`
 containermovement.insertAdjacentHTML()
    })
}

displaymovements(account1.movements)
*/
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






























































