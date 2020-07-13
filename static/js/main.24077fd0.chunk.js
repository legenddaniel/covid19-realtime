(this["webpackJsonpcovid19-realtime"]=this["webpackJsonpcovid19-realtime"]||[]).push([[0],{23:function(e,t,a){e.exports=a(54)},28:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),s=a.n(o),c=(a(28),a(11)),i=a(10),l=a(5),u=a(6),d=a(4),h=a(8),m=a(7),p=a(21),f=a.n(p),v=a(9);function b(e){return r.a.createElement(f.a,{url:"https://www.youtube.com/embed/3tBk7ONm95Q",width:"100%",height:"100%",playing:!0,loop:!0,muted:e.muted,controls:!1,className:"video"})}var y=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={muted:!0},n.toggleVolume=n.toggleVolume.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"toggleVolume",value:function(){this.setState((function(e){return{muted:!e.muted}}))}},{key:"render",value:function(){var e=this.state.muted;return r.a.createElement("header",{className:"content-wrapper"},r.a.createElement("h1",{className:"txt-jumbo"},"C",r.a.createElement(v.a,{icon:"virus",className:"virus spin"}),"vid-19"),r.a.createElement("div",{className:"txt-subjumbo triangle-area"},r.a.createElement("p",{className:"triangles"},r.a.createElement("span",{className:"triangle"},"Wash ",r.a.createElement(v.a,{icon:"hands-wash",className:"triangle-icon"})),r.a.createElement("span",{className:"triangle"},"Wear ",r.a.createElement(v.a,{icon:"head-side-mask",className:"triangle-icon"})),r.a.createElement("span",{className:"triangle"},"Stay ",r.a.createElement(v.a,{icon:"house-user",className:"triangle-icon"})))),r.a.createElement(v.a,{icon:e?"volume-mute":"volume-up",onClick:this.toggleVolume,className:"video-icon"}),r.a.createElement(b,{muted:e}))}}]),a}(r.a.Component),g=a(12),E=a.n(g),w=a(15);function k(e,t){(0,function(e){var t=e.url,a=e.option,n=function(){var e=Object(w.a)(E.a.mark((function e(){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,a);case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{showJSONData:function(){return Object(w.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))()}}}(e).showJSONData)().then(t)}var C="covid-19-data.p.rapidapi.com",j="Your API Key",D="https://".concat(C,"/totals?format=json"),O="https://".concat(C,"/help/countries?format=json"),N="https://".concat(C,"/country?format=json&name="),S={url:D,option:{method:"GET",headers:{"x-rapidapi-host":C,"x-rapidapi-key":j}}},x={url:O,option:{method:"GET",headers:{"x-rapidapi-host":C,"x-rapidapi-key":j}}},T={url:N,option:{method:"GET",headers:{"x-rapidapi-host":C,"x-rapidapi-key":j}}},U=r.a.createElement("span",null,"Loading ",r.a.createElement(v.a,{icon:"spinner",className:"spin"}));function B(e){var t=""===e.num?U:e.num;return r.a.createElement("div",{className:"dashboard ".concat({Confirmed:"dashboard-confirmed",Recovered:"dashboard-recovered",Deaths:"dashboard-deaths"}[e.type])},e.type,": ",r.a.createElement("br",null),r.a.createElement("span",null,t))}var I=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={data:{lastUpdate:"",confirmed:"",recovered:"",deaths:""}},n}return Object(u.a)(a,[{key:"getLastUpdate",value:function(e){var t=new Date(e).toLocaleString("en-CA");return null===e?"N/A":"".concat(t," (EST)")}},{key:"componentDidMount",value:function(){var e=this;"data"in this.props||k(S,(function(t){var a=t[0];e.setState({data:{lastUpdate:e.getLastUpdate(a.lastUpdate),confirmed:a.confirmed,recovered:a.recovered,deaths:a.deaths}})}))}},{key:"componentDidUpdate",value:function(e){if("data"in this.props&&this.props.data!==e.data){var t=this.props.data;this.setState({data:{lastUpdate:this.getLastUpdate(t.lastUpdate),confirmed:t.confirmed,recovered:t.recovered,deaths:t.deaths}})}}},{key:"render",value:function(){var e="visible"in this.props&&!this.props.visible,t=""===this.state.data.lastUpdate?U:this.state.data.lastUpdate;return r.a.createElement("section",{className:"dashboard-area".concat(e?" invisible":"")},r.a.createElement("p",null,"Last Update: ",t),r.a.createElement("div",{className:"dashboards"},r.a.createElement(B,{num:this.state.data.confirmed,type:"Confirmed"}),r.a.createElement(B,{num:this.state.data.recovered,type:"Recovered"}),r.a.createElement(B,{num:this.state.data.deaths,type:"Deaths"})))}}]),a}(r.a.Component),A=a(22),L=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={countries:[],currentCountry:"",btnTxt:"Search",color:"green",btnDisabled:!1},n.ref=r.a.createRef(),n.handleClick=n.handleClick.bind(Object(d.a)(n)),n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleBlur=n.handleBlur.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"handleClick",value:function(){var e=this;if(this.state.countries.some((function(t){return t.name===e.state.currentCountry}))){var t=Object(A.a)({},T),a=encodeURI(this.state.currentCountry);t.url=T.url+a,k(t,(function(t){var a=t[0];e.passCountryData(a)})),this.passToggleDashboard(!0),this.fakeThrottling(3)}else this.setState({btnTxt:"Invalid Value",color:"red",btnDisabled:!0}),this.focusInput()}},{key:"handleChange",value:function(e){this.state.btnTxt.includes("After")||(this.setState({btnTxt:"Search",color:"green",btnDisabled:!1}),this.passToggleDashboard(!1)),this.setState({currentCountry:e.target.value})}},{key:"handleBlur",value:function(){window.scrollTo(0,window.offsetHeight)}},{key:"focusInput",value:function(){this.ref.current.focus()}},{key:"switchColor",value:function(e){this.setState({color:e})}},{key:"inCooldown",value:function(e){this.setState({btnTxt:"After ".concat(e,"s"),color:"red",btnDisabled:!0})}},{key:"fakeThrottling",value:function(e){var t=this,a=e;this.inCooldown(a);var n=setInterval((function(){a>1?(--a,t.inCooldown(a)):(clearInterval(n),t.setState({btnTxt:"Search",color:"green",btnDisabled:!1}))}),1e3)}},{key:"passCountryData",value:function(e){this.props.onSetCountryData(e)}},{key:"passToggleDashboard",value:function(e){this.props.onShowDashboard(e)}},{key:"componentDidMount",value:function(){var e=this,t=setTimeout((function(){k(x,(function(t){var a=t.map((function(e){return e}));e.setState({countries:a})})),clearTimeout(t)}),2e3)}},{key:"render",value:function(){return r.a.createElement("section",{className:"dropdown-area"},r.a.createElement("div",{className:"dropdown"},r.a.createElement("input",{type:"search",placeholder:"Select Country",list:"countries",name:"country",id:"country",className:"input input-".concat(this.state.color),onChange:this.handleChange,onBlur:this.handleBlur,ref:this.ref}),r.a.createElement("datalist",{id:"countries",required:!0},this.state.countries.length?this.state.countries.map((function(e){return r.a.createElement("option",{key:e.name},e.name)})):r.a.createElement("option",{disabled:!0},"Loading"))),r.a.createElement("button",{className:"btn-search btn-search-".concat(this.state.color),onClick:this.handleClick,disabled:this.state.btnDisabled},this.state.btnTxt))}}]),a}(r.a.Component),R=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={data:{lastUpdate:"",confirmed:"",recovered:"",deaths:""},showDashboard:!1},n.setCountryData=n.setCountryData.bind(Object(d.a)(n)),n.showDashboard=n.showDashboard.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"setCountryData",value:function(e){this.setState({data:{lastUpdate:e.lastUpdate,confirmed:e.confirmed,recovered:e.recovered,deaths:e.deaths}})}},{key:"showDashboard",value:function(e){this.setState({showDashboard:e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(L,{onSetCountryData:this.setCountryData,onShowDashboard:this.showDashboard}),r.a.createElement(I,{data:this.state.data,visible:this.state.showDashboard}))}}]),a}(r.a.Component),V=a(13),W=a.n(V),G=(a(52),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){!this.detectKey()&&setTimeout((function(){W.a.mixin({customClass:{popup:"toast-popup"}}).fire({title:"No API key detected!",html:'You can either go to <a href="https://rapidapi.com/Gramzivi/api/covid-19-data/pricing">RapidAPI</a> and apply for one, <br />or go on without a key',position:"top",showConfirmButton:!1,timer:5e3,timerProgressBar:!0,showClass:{popup:"swal2-show"},hideClass:{popup:"swal2-hide"},onOpen:function(e){e.onmouseenter=W.a.stopTimer,e.onmouseleave=W.a.resumeTimer}})}),5e3)}},{key:"detectKey",value:function(){return!1}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),a}(r.a.Component));a(53);c.b.add(i.d,i.e,i.a,i.b,i.c,i.g,i.f);var J=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(y,null),r.a.createElement("main",{className:"content-wrapper"},r.a.createElement("article",{className:"data-area"},r.a.createElement("h2",{className:"txt-topic-local"},"Worldwide:"),r.a.createElement(I,null)),r.a.createElement("article",{className:"data-area"},r.a.createElement("h2",{className:"txt-topic-local"},"Or by country:"),r.a.createElement(R,null))),r.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.24077fd0.chunk.js.map