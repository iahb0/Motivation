let sec = document.querySelector(".section");
let vid = document.querySelector(".vid");
let btn = document.querySelector(".btn");
let btnGo = document.querySelector(".go");
let btnBack = document.querySelector(".btnback");
let btnBack2 = document.querySelector(".btnback2");
let valTex = document.querySelector(".val");
let injaz = document.querySelector(".Injaz");
let war = document.querySelector(".warning");
let count = 0 ;
let btnSave = document.querySelector(".btnSave");
let sPage = document.querySelector(".sPage");
let ListInjaz = document.querySelector(".ListInjaz");
let dateToday = document.querySelector(".dateToday");
let today = new Date();


function addInjaz(){
    if(valTex.value ===''){
        alert("ضروري تكتب إنجاز  أولًا")
    }
    else {
        count++;
            let li = document.createElement("li");
            let li2 = document.createElement("li");
            li.innerHTML= valTex.value + ` -`;
            li2.innerHTML= valTex.value + ` -`;
             injaz.appendChild(li);
             ListInjaz.appendChild(li2);
            valTex.value='';

    }

}



btn.addEventListener("click",()=>{
    if(count==0){
        war.style.display="block";
        valTex.addEventListener("click",()=>{
        war.style.display="none";
        

        })
    }
    else{
        sec.style.display="none";
        vid.style.display="block";
        valTex.value=" ";

    }


});
btnBack.addEventListener("click",()=>{
sec.style.display="block";
vid.style.display="none";
war.style.display="none";
sPage.style.display="none";
location.reload();



});
btnBack2.addEventListener("click",()=>{
sec.style.display="block";
vid.style.display="none";
war.style.display="none";
sPage.style.display="none"
// injaz.style.display="none"
location.reload();


});
btnSave.addEventListener("click",()=>{

    sec.style.display="none";
    vid.style.display="none";
    sPage.style.display="block"

});

dateToday.innerHTML = today.toLocaleDateString() + '  ' + ' ';