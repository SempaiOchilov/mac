// let num =  document.querySelector('h5')
// let minus = document.querySelector('.minus')
// let retturn = document.querySelector('.return')
// let plus = document.querySelector('.plus')



// minus.onclick = () =>{

//     num.textContent = parseInt(num.textContent) - 1;


// }
// retturn.onclick= () => {


//     num.textContent  = 0;
// }

// plus.onclick = () =>{

//     num.textContent = parseInt(num.textContent) + 1;


// }



// console.log(num);
// console.log(minus);
// console.log(retturn);
// console.log(plus);




// let button1 = document.querySelector('.one')
// let button2 = document.querySelector('.two')









// button1.onclick = () => {

//       button2.classList.add('active')
// }

// button2.onclick = () => {

//     button1.classList.add('active')


// }
// console.log(button1,button2);








// let black = document.querySelector('#black')
// let natural = document.querySelector('#titan')
// let blue = document.querySelector('#blue')
// let white = document.querySelector('#white')

// let models = document.querySelector('.models'); 



// natural.onclick = () => {
//   models.className = 'model_iphone natural'


// }


// black.onclick = () => {
//   models.className = 'model_iphone black'
// }

// white.onclick = () => {
//   models.className = 'model_iphone white'
// }

// blue.onclick = () => {
//   models.className = 'model_iphone blue'
// }4









// let storage2 = document.querySelector(".storage2 h3")

// btns.forEach(btn => {

//     btn.onclick = () => {

//         narx.innerText += storage2.innerText
//     }




// })


// let storage3 = document.querySelector(".storage3 h3")

// btns.forEach(btn => {

//     btn.onclick = () => {

//         narx.innerText += storage3.innerText
//     }




// })



// let storage4 = document.querySelector(".storage4 h3")

// btns.forEach(btn => {

//     btn.onclick = () => {

//         narx.innerText += storage4.innerText
//     }





// })
let btns = document.querySelectorAll(".storages")

let narx = document.querySelector(".texts h2");
let narxziyottar = document.querySelectorAll(".storages h3");



btns.forEach(btn => {
    btn.onclick = () => {
        narxziyottar.forEach(narxash => {
            narx.innerText += narxash.innerText
        });
    };



})





const images = {
    spacegray: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1697230830200",
    silver: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-silver-select-202310?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1697230830269 "
}

let spacegray = document.querySelector("#gray")
let silver = document.querySelector("#silver")
let img = document.querySelector(".img img") 
  

spacegray.onclick = () =>{
    img.src = images.spacegray
}

silver.onclick = () =>{
    img.src = images.silver
}