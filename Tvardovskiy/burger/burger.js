// бургер на Vue

let app = new Vue({
    el: "#app",
    data: {
        test: "Hello Vue",
        totalCalories: 0,
        totalPrice: 0,
        totalText: [],

        size: "input[name='size']",
        type: "input[name='type']",
        checkbox: "input[type = 'checkbox']",
        style: {
            display: "flex",
            flexDirection: "column",
            fontSize: "15px",
            width: "400px",
            padding: "15px"
        },
        styleParagraph:{
            display: "flex",
            flexDirection: "column",
            width: "140px",
            borderColor: "lightpink"
        },

        fontStyle: "italic",
        styleDisplay: {
            display: "flex"
        },
        styleButton: {
            width: "auto",
            height: "70px",
            borderColor: "lightpink"
        }
    },
    method: {},
    computed: {

        Burger: function () {
            document.querySelectorAll(this.size).forEach(el => {

                if (el.checked) {
                    this.totalCalories = this.totalCalories+ (+(el.dataset.cal));
                    this.totalText.push(el.dataset.tex);
                    this.totalPrice = this.totalPrice+ (+(el.dataset.price))
                }
            })
        },
        Add: function () {
            document.querySelectorAll(this.type).forEach(el => {
                if (el.checked) {
                    this.totalCalories = this.totalCalories+ (+(el.dataset.cal));
                   this.totalText.push(el.dataset.tex)
                }
            })
        },
        Order: function () {
            document.querySelectorAll(this.checkbox).forEach(el => {
                if (el.checked) {
                    this.totalCalories = this.totalCalories+ (+(el.dataset.cal));
                    this.totalText.push(el.dataset.tex);
                    this.totalPrice = this.totalPrice+ (+(el.dataset.price))
                }
            })
        },
        clearBurger: function () {
            document.querySelectorAll(this.size).forEach(el => {
                if (el.checked) {
                    this.totalCalories = 0;
                    this.totalText = this.totalText.splice(this.totalText.length);
                    this.totalPrice = 0;
                }

            })
        },
        clearAdd: function () {
            document.querySelectorAll(this.type).forEach(el => {
                if (el.checked) {
                    this.totalCalories = 0;
                    this.totalText = this.totalText.splice(this.totalText.length)
                }
            })
        },
        clearOrder: function () {
            document.querySelectorAll(this.checkbox).forEach(el => {
                if (el.checked) {
                    this.totalCalories = 0;
                    this.totalText = this.totalText.splice(this.totalText.length);
                    this.totalPrice = 0;
                }

            })
        }

    },

    mounted() {

    }
})


//способ через ООП
// let totalCalories = 0
// let totalText = []
// let totalPrice = 0
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
// class Bulka {
//     constructor(burger, add, order) {
//         this.Burger = burger;
//         this.Add = add;
//         this.Order = order
//     }
//
//     getPrice() {
//         document.getElementById("price").innerText = `общая сумма:` + totalPrice
//     }
//
//     getCalories() {
//         document.getElementById("calories").innerText = `Всего каллорий:` + totalCalories
//     }
//
//     getText() {
//         document.getElementById("order").innerText = `Вaш заказ :` + totalText.toString()
//     }
//
//     sbor() {
//         let btn = document.getElementById("okBtn")
//
//         btn.addEventListener('click', function () {
//
//             this.Burger = document.querySelectorAll("input[name='size']").forEach(el => {
//
//                 caloriesText(el);
//                 price(el);
//
//             });
//             this.Add = document.querySelectorAll("input[name='type']").forEach(el => {
//                 caloriesText(el);
//             });
//
//             this.Order = document.querySelectorAll("input[type = 'checkbox']").forEach(el => {
//                 caloriesText(el);
//                 price(el);
//             });
//             new Bulka().getPrice()
//             new Bulka().getCalories()
//             new Bulka().getText()
//
//
//         });
//     }
//
//     clear() {
//         document.getElementById("clear").addEventListener("click", function () {
//             totalPrice = 0
//             totalCalories = 0
//             totalText = []
//             new Bulka().getPrice()
//             new Bulka().getCalories()
//             new Bulka().getText()
//             this.sbor()
//         })
//
//     }
// }
//
// let b = new Bulka("burger", "add", "order")
// b.sbor()
// b.clear()


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














