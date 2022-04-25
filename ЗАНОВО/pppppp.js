const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'
//catalogData.json

const app = new Vue({
    el: "#app",
    data: {
        goods:[],
        filteredGoods:[],
        searchLine: ""
    },
    methods: {
        loadsGoods() {
          fetch(`${API_URL}catalogData.json`)
              .then((request)=>request.json())
              .then((data)=>{
                  this.goods=data;
                  this.filteredGoods = data;
              })
        }
    },
    mounted() {
        this.loadsGoods();
    }
})




// function send(onError, onSuccess, url, method = 'GET', data = null, headers = [], timeout = 60000) {
//     let xhr;
//
//     if (window.XMLHttpRequest) {
//         // Chrome, Mozilla, Opera, Safari
//         xhr = new XMLHttpRequest();
//     }  else if (window.ActiveXObject) {
//         // Internet Explorer
//         xhr = new ActiveXObject("Microsoft.XMLHTTP");
//     }
//
//     xhr.open(method, url, true);
//
//
//     headers.forEach((header) => {
//         xhr.setRequestHeader(header.key, header.value);
//     })
//
//
//     xhr.timeout = timeout;
//
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if(xhr.status >= 400) {
//                 onError(xhr.statusText)
//             } else {
//                 onSuccess(xhr.responseText)
//             }
//         }
//     }
//
//     xhr.send(data);
// }
const searchInput = document.querySelector(".goods-search");
const searchBtn = document.querySelector(".search-button")

class GoodsItem {
    constructor(title, price, id) {
        this.title = title;
        this.price = price;
        this.id = id;
    }

    render() {
        return `<div data-id="${this.id}" class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
        this.filtred= [];
    }

    filter(searchString){
        searchString=searchString.trim()

        if (searchString===0){
            this.filtred = this.goods;
            this.render()
            return
        }
        const reg = new RegExp(searchString, "i");
        this.filtred = this.goods.filter((good)=> reg.test(good.title))
        this.render()


        let quantity = 0;
        for (let sum of this.filtred) {
            quantity += sum.price;

        }
        searchBtn.addEventListener("click", function (){
            alert(quantity)
        })
    }



    fetchGoods() {
        fetch(`${API_URL}catalogData.json`)
            .then((response) => {
                return response.json();
            })
            .then((request) => {
                this.goods = request.map(good => ({title: good.product_name, price: good.price, id: good.id_product}))
               this.filtred=this.goods;
                this.render();
            })
            .catch((err) => {
                console.log(err.text)
            })

        // new Promise((resolve, reject) => {
        //   send(
        //     reject,
        //     resolve,
        //     `${API_URL}catalogData.json`
        //   )
        // })
        // .then((request) => {
        //   this.goods = JSON.parse(request).map(good => ({title: good.product_name, price: good.price}))
        //   this.render();
        // })
        // .catch((err) => {
        //   console.log(err.text)
        // })

        // send(
        //   (err) => {
        //     console.log(err.text)
        //   },
        //   (request) => {
        //     this.goods = JSON.parse(request).map(good => ({title: good.product_name, price: good.price}))
        //     this.render();
        //   },
        //   `${API_URL}catalogData.json`
        // )

        // this.goods = [
        //   { title: 'Shirt', price: 150 },
        //   { title: 'Socks', price: 50 },
        //   { title: 'Jacket', price: 350 },
        //   { title: 'Shoes', price: 250 },
        // ];
    }

    render() {
        let listHtml = '';
        this.filtred.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price, good.id);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;

        }

}

const list = new GoodsList();
searchInput.addEventListener("input", ()=>{
    list.filter(searchInput.value);
})
list.fetchGoods();

