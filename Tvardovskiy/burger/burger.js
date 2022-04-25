//способ через ООП
let totalCalories = 0
let totalText=[]
let totalPrice=0

function caloriesText(el) {
    if (el.checked) {
        totalCalories = totalCalories + (+(el.dataset.cal));
        totalText.push(el.dataset.tex)
    }
    }

    function price(el) {
        if (el.checked) {
            totalPrice = totalPrice + (+(el.dataset.price));
        }
    }

class Bulka {
    constructor(burger, add, order) {
        this.Burger = burger;
        this.Add = add;
        this.Order = order
    }

      sbor () {
        let btn = document.querySelector("button")

            btn.addEventListener('click', function () {
                alert("привет")

                this.Burger=document.querySelectorAll("input[name='size']").forEach(el => {

                caloriesText(el);
                    price(el);

                });
                this.Add= document.querySelectorAll("input[name='type']").forEach(el => {
                    caloriesText(el);
                });

                this.Order= document.querySelectorAll("input[type = 'checkbox']").forEach(el => {
                    caloriesText(el);
                    price(el);
                });

                document.getElementById("price").innerText = `общая сумма:` + totalPrice
                document.getElementById("calories").innerText = `Всего каллорий:` + totalCalories
                document.getElementById("order").innerText = `Вaш заказ :` + totalText.toString()
                btn.setAttribute("disabled", true)
            });
        }
    }

let b = new Bulka("burger", "add", "order")
b.sbor()

//старый, способ, без ООП
//
// let btn = document.querySelector("button");
//
// let totalPrice = 0
// let totalCalories = 0;
// let totalText = []
//
// function caloriesText(el) {
//     if (el.checked) {
//         totalCalories = totalCalories + (+(el.dataset.cal));
//         totalText.push(el.dataset.tex)
//     }
// }
//
// function price(el) {
//     if (el.checked) {
//         totalPrice = totalPrice + (+(el.dataset.price));
//     }
// }
//
// btn.addEventListener('click', function () {
//
//     document.querySelectorAll("input[name='size']").forEach(el => {
//         caloriesText(el);
//         price(el);
//
//     });
//     document.querySelectorAll("input[name='type']").forEach(el => {
//         caloriesText(el);
//     });
//
//     document.querySelectorAll("input[type = 'checkbox']").forEach(el => {
//         caloriesText(el);
//         price(el);
//     });
//
//     document.getElementById("price").innerText = `общая сумма:` + totalPrice
//     document.getElementById("calories").innerText = `Всего каллорий:` + totalCalories
//     document.getElementById("order").innerText = `Вaш заказ :` + totalText.toString()
//     btn.setAttribute("disabled", true)
// });


let a;
function asinc (cb){
    setTimeout(()=>{
        a=100500;
        cb()
    },2000)
}
function calb (){
    alert("parampampam " +a);
}
asinc (calb)











