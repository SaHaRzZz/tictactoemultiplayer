(this.webpackJsonptictactoemultiplayer=this.webpackJsonptictactoemultiplayer||[]).push([[0],{38:function(e,n,t){},63:function(e,n,t){},65:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),a=t(17),o=t.n(a),s=(t(38),t(14)),u=t(3),i=t(4),l=t(11),b=t(10),g=t.n(b),A="SET_ONLINE",j="SET_USERNAME",d="SET_SERVER",O=function(e){return{type:A,payload:e}},m=function(e){return{type:d,payload:e}},p=t(1);var f=Object(i.b)((function(e){return{username:e.online.username}}),(function(e){return{setServer:function(n){return e(m(n))}}}))((function(e){var n=Object(c.useState)(),t=Object(l.a)(n,2),r=t[0],a=t[1],o=Object(u.e)();return Object(p.jsxs)("div",{className:"d-inline text-center",children:[Object(p.jsx)("input",{placeholder:"Enter host name",className:"text-center",onChange:function(e){return a(e.target.value)}}),Object(p.jsx)("button",{className:"btn btn-danger rounded-0",onClick:function(){g.a.post("https://tictactoemultiplayerserver.herokuapp.com/join/".concat(r),{username:e.username}).then((function(e){return e.data})).then((function(n){n.bool?(e.setServer(n.server),alert(n.msg),o.push("/game")):alert(n.msg)})).catch((function(){return alert("Some error occured!")}))},children:"Join Game"})]})}));var h=Object(i.b)((function(e){return{username:e.online.username}}),(function(e){return{setServer:function(n){return e(m(n))}}}))((function(e){var n=Object(u.e)();return Object(p.jsxs)("div",{className:"d-inline text-center",children:[Object(p.jsx)("button",{className:"btn btn-danger rounded-0",onClick:function(){g.a.get("https://tictactoemultiplayerserver.herokuapp.com/host/".concat(e.username)).then((function(e){return e.data})).then((function(t){t.bool&&(e.setServer(t.server),alert(t.msg),n.push("/game"))})).catch((function(){return alert("Some error occured!")}))},children:"Host Game"}),Object(p.jsx)("p",{})]})}));var v=Object(i.b)((function(e){return{isOnline:e.online.isOnline}}),(function(e){return{setOnline:function(n){return e(O(n))},setUsername:function(n){return e({type:j,payload:n})}}}))((function(e){var n=Object(c.useState)(!1),t=Object(l.a)(n,2),r=t[0],a=t[1],o=Object(c.useState)(),s=Object(l.a)(o,2),u=s[0],i=s[1];return Object(p.jsx)("div",{children:r?Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:"Loading..."})}):Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{placeholder:"Enter username",className:"text-center",onChange:function(e){return i(e.target.value)}}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{className:"btn btn-danger",onClick:function(){return u?(g.a.get("https://tictactoemultiplayerserver.herokuapp.com/connect/".concat(u)).then((function(e){return e.data})).then((function(n){n.bool?(e.setUsername(n.username),e.setOnline(!0)):alert("User already connected!")})).catch((function(){return alert("Some error occured!")})),void a(!1)):alert("Enter a username!")},children:"Connect to server"})]})})}));var B,X=Object(i.b)((function(e){return{isOnline:e.online.isOnline,username:e.online.username}}),(function(e){return{setOnline:function(n){return e(O(n))}}}))((function(e){return Object(p.jsx)("div",{className:"text-center",children:e.isOnline?Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:["Hello ",Object(p.jsx)("strong",{children:e.username})]}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{}),Object(p.jsx)(h,{})]}):Object(p.jsx)("div",{children:Object(p.jsx)(v,{})})})})),S=(t(63),"data:image/png;base64,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"),z="data:image/png;base64,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";var w=Object(i.b)((function(e){return{server:e.online.server,username:e.online.username}}),(function(e){return{}}))((function(e){var n=Object(c.useState)({}),t=Object(l.a)(n,2),r=t[0],a=t[1],o=Object(c.useState)(!1),s=Object(l.a)(o,2),i=s[0],b=s[1],A=Object(c.useState)(!1),j=Object(l.a)(A,2),d=j[0],O=j[1],m=Object(c.useState)(e.username),f=Object(l.a)(m,2),h=f[0],v=f[1],X=Object(u.e)(),w=function(n){i&&g.a.post("https://tictactoemultiplayerserver.herokuapp.com/play",{spot:n,server:e.server,username:e.username}).then((function(e){return e.data})).then((function(e){e.bool?(a(e.game.state),console.log(r)):alert("nope")})).catch((function(){return alert("Some error occured!")}))};return Object(c.useEffect)((function(){B&&(clearInterval(B),B=void 0),B=setInterval((function(){g.a.get("https://tictactoemultiplayerserver.herokuapp.com/update/".concat(e.server)).then((function(e){return e.data})).then((function(n){b(n.game.turn==e.username),O(n.game.full),v(n.game.turn),a(n.game.state),console.log(n.win),n.win&&(clearInterval(B),B=void 0,alert("".concat(n.win," wins!")),X.push("/"))})).catch((function(){clearInterval(B),B=void 0,X.push("/"),alert("Some error occured!")}))}),500)})),Object(p.jsxs)("div",{className:"text-center",children:[d?Object(p.jsx)("p",{children:"Game on!"}):Object(p.jsx)("p",{children:"Waiting for the other player... (server: ".concat(e.username,")")}),Object(p.jsxs)("table",{className:"w-100 text-center container",children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"_br _bb",onClick:function(){return w("s1")},style:{backgroundImage:"url(".concat("X"==r.s1?S:"O"==r.s1?z:"",")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),Object(p.jsx)("td",{className:"_bx _bb",onClick:function(){return w("s2")},style:{backgroundImage:"url(".concat("X"==r.s2?S:"O"==r.s2?z:"",")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),Object(p.jsx)("td",{className:"_bl _bb",onClick:function(){return w("s3")},style:{backgroundImage:"url(".concat("X"==r.s3?S:"O"==r.s3?z:"",")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"}})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"_br _by",onClick:function(){return w("s4")},style:{backgroundImage:"url(".concat("X"==r.s4?S:"O"==r.s4?z:"",")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),Object(p.jsx)("td",{className:"_bf",onClick:function(){return w("s5")},style:{backgroundImage:"url(".concat("X"==r.s5?S:"O"==r.s5?z:"",")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),Object(p.jsx)("td",{className:"_bl _by",onClick:function(){return w("s6")},style:{backgroundImage:"url(".concat("X"==r.s6?S:"O"==r.s6?z:"",")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"}})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"_bt _br",onClick:function(){return w("s7")},style:{backgroundImage:"url(".concat("X"==r.s7?S:"O"==r.s7?z:"",")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),Object(p.jsx)("td",{className:"_bx _bt",onClick:function(){return w("s8")},style:{backgroundImage:"url(".concat("X"==r.s8?S:"O"==r.s8?z:"",")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),Object(p.jsx)("td",{className:"_bl _bt",onClick:function(){return w("s9")},style:{backgroundImage:"url(".concat("X"==r.s9?S:"O"==r.s9?z:"",")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"}})]})]}),d?Object(p.jsx)("p",{className:"".concat(h==e.username?"font-weight-bold":""),children:"Turn: ".concat(h==e.username?"Yours":"Other player")}):""]})}));var k=Object(i.b)((function(e){return{server:e.online.server,username:e.online.username}}),(function(e){return{}}))((function(e){return Object(p.jsx)("div",{children:Object(p.jsx)(w,{})})})),V=t(16),x=t(12),H={isOnline:!1,username:"",server:""},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case A:return Object(x.a)(Object(x.a)({},e),{},{isOnline:n.type});case j:return Object(x.a)(Object(x.a)({},e),{},{username:n.payload});case d:return Object(x.a)(Object(x.a)({},e),{},{server:n.payload});default:return e}},C=Object(V.b)({online:y}),U=Object(V.c)(C);var R=function(){return Object(p.jsx)(s.a,{children:Object(p.jsxs)(i.a,{store:U,children:[Object(p.jsx)(u.a,{component:X,path:"/",exact:!0}),Object(p.jsx)(u.a,{component:k,path:"/game",exact:!0})]})})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,66)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),c(e),r(e),a(e),o(e)}))};t(64);o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(R,{})}),document.getElementById("root")),F()}},[[65,1,2]]]);
//# sourceMappingURL=main.d2a6f7fa.chunk.js.map