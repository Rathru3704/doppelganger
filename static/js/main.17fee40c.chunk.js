(this.webpackJsonpdoppelganger=this.webpackJsonpdoppelganger||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(3),c=t.n(l);t(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(4),s=t(5),m=t(7),i=t(6),h=t(8),u=(t(15),function(e){var a=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{className:"dib br3 bn pt2 ph4-ns pb3 mb3 orange bg-near-black shadow-4",type:"search",onChange:a,placeholder:"search doppelganger"}))}),p=(t(16),t(2),function(e){var a=e.id,t=e.name,n=e.email,l=e.phone,c=e.address;return r.a.createElement("div",{className:"dib br3 bw2 pt4 ph4 ma2 orange bg-near-black shadow-4 grow"},r.a.createElement("img",{className:"br-100",alt:"doppelganger",src:"https://uinames.com/api/photos/male/".concat(a,".jpg")}),r.a.createElement("h3",{className:"mv4"},t),r.a.createElement("div",{className:"tl"},r.a.createElement("p",null,r.a.createElement("em",null,r.a.createElement("strong",null,"Email:")),r.a.createElement("br",null),n),r.a.createElement("p",null,r.a.createElement("em",null,r.a.createElement("strong",null,"Phone:")),r.a.createElement("br",null),l),r.a.createElement("p",null,r.a.createElement("em",null,r.a.createElement("strong",null,"Address:")),r.a.createElement("br",null),c)),r.a.createElement("p",{className:"tr f3"},"//"))}),d=function(e){var a=e.doppelgangers;return r.a.createElement("div",{className:"mh5"},a.map((function(e,t){return r.a.createElement(p,{key:a[t].id,id:a[t].id,name:a[t].name,email:a[t].email,phone:a[t].phone,address:a[t].address.city})})))},g=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(m.a)(this,Object(i.a)(a).call(this))).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={doppelgangers:[],searchfield:""},e}return Object(h.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(a){e.setState({doppelgangers:a})}))}},{key:"render",value:function(){var e=this,a=this.state.doppelgangers.filter((function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.doppelgangers.length?r.a.createElement("h1",{className:"tc"},"loading..."):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"mt5 mb1 f1"},"- DOPPELGANGER -"),r.a.createElement("h2",{className:"mb5"},"A User Generator"),r.a.createElement(u,{searchChange:this.onSearchChange}),r.a.createElement(d,{doppelgangers:a}))}}]),a}(n.Component);c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.17fee40c.chunk.js.map