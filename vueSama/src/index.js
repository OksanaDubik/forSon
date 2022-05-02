import "./components/layout.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Vue from "vue";


// import app from "./components/main.js"
// app();

let app = new Vue ({
    el: "#app",
    data:{
        test:"Проверка связи",
        url: '/api/catalog'
    },
    mounted() {
        document.querySelector("button").addEventListener("click", function (){
            alert("Привет всем");


        })
    },
    methods:{
        url: 'http//localhost:3000/catalog'
    }
})