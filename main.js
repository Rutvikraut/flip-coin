const tossBtn=document.querySelector(".js-toss-btn")
const coinImg=document.querySelector(".coin")
let headCountHtml=document.querySelector("#head-count")
let TailCountHtml=document.querySelector("#tail-count")
let resetBtn=document.querySelector(".js-reset-btn")
let headCount=0
let tailCount=0
tossBtn.addEventListener('click',()=>{
    tossCoin();
})
resetBtn.addEventListener('click',()=>{
    resetTossValue();
})


function tossCoin(){
    let randomValue=Math.floor(Math.random() * 10)
    let faceCoin=randomValue>5?"heads":"tails";

    coinImg.classList.add('flip')
    setTimeout(()=>{
        coinImg.innerHTML=`<img src="./images/${faceCoin}.png" alt="">`
        coinImg.classList.remove('flip')
    },500)

    faceCoin==="heads"?headCount=headCount+1:tailCount=tailCount+1;
    headCountHtml.innerHTML=headCount;
    TailCountHtml.innerHTML=tailCount;
}

function resetTossValue(){
    console.log("Reset")
    headCount=0;
    tailCount=0;
    headCountHtml.innerHTML=headCount;
    TailCountHtml.innerHTML=tailCount;
}