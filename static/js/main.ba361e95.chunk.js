(this.webpackJsonpstore=this.webpackJsonpstore||[]).push([[0],{18:function(e,t,a){e.exports=a(30)},23:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),c=a.n(r),l=(a(23),a(3)),o=a(1);var m=function(e){return i.a.createElement("div",{className:"grid"})},s={products:[{_id:1,image:"/images/candy.jpg",categorie:"1kg",name:'"THANK YOU" 8-PIECE',description:"Qui non in proident labore dolor elit adipisicing irure tempor amet do.",price:20.9,countInStock:0},{_id:2,image:"/images/candy.jpg",categorie:"500g",name:'"THANK YOU" 3-PIECE',description:"Qui non in proident labore dolor elit adipisicing irure tempor amet do.",price:12.9,countInStock:6},{_id:3,image:"/images/candy.jpg",categorie:"1kg",name:'"XOXO" 8-PIECE CANDY',description:"Qui non in proident labore dolor elit adipisicing irure tempor amet do.",price:10,countInStock:6},{_id:4,image:"/images/candy.jpg",categorie:"500g",name:'"XOXO" 3-PIECE CANDY',description:"Qui non in proident labore dolor elit adipisicing irure tempor amet do.",price:12.9,countInStock:6},{_id:5,image:"/images/candy.jpg",categorie:"1kg",name:'"CONGRATS" 8-PIECE',description:"Qui non in proident labore dolor elit adipisicing irure tempor amet do.",price:12.9,countInStock:6},{_id:6,image:"/images/candy.jpg",categorie:"500g",name:'"CONGRATS" 3-PIECE',description:"Qui non in proident labore dolor elit adipisicing irure tempor amet do.",price:12.9,countInStock:6},{_id:7,image:"/images/candy.jpg",categorie:"1kg",name:"SIGNATURE 8-PIECE CANDY",description:"Qui non in proident labore dolor elit adipisicing irure tempor amet do.",price:12.9,countInStock:6},{_id:8,image:"/images/candy.jpg",categorie:"500g",name:"SIGNATURE 3-PIECE CANDY",description:"Qui non in proident labore dolor elit adipisicing irure tempor amet do.",price:12.9,countInStock:6}]};var d=function(e){return i.a.createElement("div",null,i.a.createElement("h1",null,"Shop"),i.a.createElement("ul",{className:"products"},s.products.map((function(e){return i.a.createElement("li",{key:e._id},i.a.createElement("div",{className:"product"},i.a.createElement(l.b,{to:"/products/"+e._id},i.a.createElement("img",{className:"product-image",src:e.image,alt:"product"})),i.a.createElement("div",{className:"product-name"},i.a.createElement(l.b,{to:"/products/"+e._id},e.name)),i.a.createElement("div",null,e.description),i.a.createElement("div",{className:"product-price"},i.a.createElement("div",null,"$",e.price),i.a.createElement("a",{href:"/products",title:"ADD TO CART"},i.a.createElement("div",null,"+")))))}))))},u=a(17),p=a(12);var E=function(e){var t=Object(n.useState)(1),a=Object(p.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(0),m=Object(p.a)(o,2),d=m[0],E=m[1],g=s.products.find((function(t){return t._id==e.match.params.id}));return console.log(g),i.a.createElement("div",null,i.a.createElement("div",{className:"back-to-result"},i.a.createElement(l.b,{to:"/products"},"Back to result")),i.a.createElement("div",{className:"details"},i.a.createElement("div",{className:"details-info"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("h4",null,g.name)),i.a.createElement("li",null,"Price: ",i.a.createElement("b",null,"$",g.price)),i.a.createElement("li",null,"Description:",i.a.createElement("div",null,g.description)))),i.a.createElement("div",{className:"details-image"},i.a.createElement("img",{src:g.image,alt:"product"})),i.a.createElement("div",{className:"details-action"},i.a.createElement("ul",null,i.a.createElement("li",null,"Price: ",0===d?g.price:d),i.a.createElement("li",null,"Status:"," ",g.countInStock>0?"In Stock":"Unavailable."),i.a.createElement("li",null,"Qty:"," ",i.a.createElement("select",{value:r,onChange:function(e){c(e.target.value),function(e){E(e*g.price)}(e.target.value)}},Object(u.a)(Array(g.countInStock).keys()).map((function(e){return i.a.createElement("option",{key:e+1,value:e+1},e+1)})))),i.a.createElement("li",null,g.countInStock>0&&i.a.createElement("button",{onClick:function(){e.history.push("/cart/"+e.match.params.id+"?qty="+r)},className:"button primary"},"Add to Cart"))))))};a(29);var g=function(){return i.a.createElement(l.a,null,i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"grid-container"},i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"header-links"},i.a.createElement("button",{onClick:function(){document.querySelector(".sidebar").classList.add("open")}},"\u2630")),i.a.createElement("div",{className:"brand"},i.a.createElement(l.b,{to:"/"},"Swedish Candy Bar")),i.a.createElement("ul",{className:"categories"},i.a.createElement("li",null,i.a.createElement(l.b,{to:"/products/"},"Shop")))),i.a.createElement("aside",{className:"sidebar"},i.a.createElement("h3",null,"Categories"),i.a.createElement("button",{className:"sidebar-close-button",onClick:function(){document.querySelector(".sidebar").classList.remove("open")}},"x"),i.a.createElement("ul",{className:"categories"},i.a.createElement("li",null,i.a.createElement(l.b,{to:"/"},"Sour")),i.a.createElement("li",null,i.a.createElement(l.b,{to:"/"},"Mix")),i.a.createElement("li",null,i.a.createElement(l.b,{to:"/"},"Chocolate")))),i.a.createElement("main",{className:"main"},i.a.createElement("div",{className:"content"},i.a.createElement(o.c,null,i.a.createElement(o.a,{path:"/products/:id",component:E}),i.a.createElement(o.a,{path:"/products/",component:d}),i.a.createElement(o.a,{path:"/",exact:!0,component:m})))),i.a.createElement("footer",{className:"footer"},"All right reserved."))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.ba361e95.chunk.js.map