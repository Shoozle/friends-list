(this["webpackJsonpfriends-list"]=this["webpackJsonpfriends-list"]||[]).push([[0],[,,,,,,,function(e,t,n){},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),o=n(8),s=n.n(o),a=n(2);n(15);var r=function(){return Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("div",{className:"header__textbox",children:Object(c.jsx)("h1",{className:"heading__primary",children:"2021 Video Game Predictions"})})})},u=n(4),l=n(9);n(16),n(7);function d(e){var t=Object(i.useState)(!1),n=Object(a.a)(t,2),o=n[0],s=n[1],r=Object(i.useState)(""),u=Object(a.a)(r,2),l=u[0],d=u[1];var j=Object(c.jsxs)("form",{className:"stack-small",onSubmit:function(t){t.preventDefault(),e.editPrediction(e.id,l),d(""),s(!1)},children:[Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{id:e.id,className:"text form__input",type:"text",value:l,onChange:function(e){d(e.target.value)},placeholder:e.guess,required:!0,autoComplete:"off"})}),Object(c.jsxs)("div",{className:"btn-group",children:[Object(c.jsx)("button",{type:"button",className:"btn cancel",onClick:function(){return s(!1)},children:"Cancel"}),Object(c.jsx)("button",{type:"submit",className:"btn btn__primary edit",children:"Save"})]})]}),p=Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:e.id,children:Object(c.jsxs)("p",{className:"prediction__text",children:[" ",e.guess," "]})}),Object(c.jsx)("input",{className:"prediction__checkbox",id:e.id,type:"checkbox",defaultChecked:e.outcome,onChange:function(){return e.togglePredictionOutcome(e.id,e.outcome)}})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{type:"button",className:"btn",onClick:function(){return s(!0)},children:"Edit"}),Object(c.jsx)("button",{className:"btn",type:"button",onClick:function(){return e.deletePrediction(e.id)},children:"Delete"})]})]});return Object(c.jsx)("li",{className:"prediction__item",children:o?j:p})}n(17);var j=function(e){var t=Object(i.useState)(""),n=Object(a.a)(t,2),o=n[0],s=n[1],r=Object(i.useState)(0),u=Object(a.a)(r,2),l=(u[0],u[1]);return Object(c.jsx)("form",{className:"form",onSubmit:function(t){var n=e.getid();l(n+1),t.preventDefault(),0!==o.length&&(fetch("https://glacial-castle-18259.herokuapp.com/addguess",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:n+1,guess:o,owner:e.guessOwner,outcome:!1})}).then().catch((function(e){return console.log(e)})),e.addid(),e.addPrediction(o),s(""))},children:Object(c.jsx)("input",{className:"form__input",type:"text",guess:"text",autoComplete:"off",value:o,onChange:function(t){s(t.target.value),l(e.getid)},placeholder:"Create a new prediction"})})};var p=function(e){return Object(c.jsx)("button",{className:"btn",type:"button","aria-pressed":"true",onClick:function(){return e.setFilter(e.guess)},children:Object(c.jsx)("span",{children:e.guess})})},b=(n(18),{All:function(){return!0},Correct:function(e){return e.outcome},Incorrect:function(e){return!e.outcome}}),h=Object.keys(b);var f=function(e){var t=Object(i.useState)("All"),n=Object(a.a)(t,2),o=n[0],s=n[1],r=Object(i.useState)(0),f=Object(a.a)(r,2),m=f[0],O=f[1],g=Object(i.useState)(e.predictions),x=Object(a.a)(g,2),v=x[0],N=x[1];function y(){O(m+1)}function _(){fetch("https://glacial-castle-18259.herokuapp.com/returnid").then((function(e){return e.json()})).then((function(e){O(e[0].max)})).catch((function(e){return console.log(e)}))}function C(e,t){var n=v.map((function(n){return e===n.id?(fetch("https://glacial-castle-18259.herokuapp.com/editoutcome",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:e,outcome:t})}).then().catch((function(e){return console.log(e)})),Object(u.a)(Object(u.a)({},n),{},{outcome:!n.outcome})):n}));N(n)}function S(e){fetch("https://glacial-castle-18259.herokuapp.com/delete",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:e})}).then().catch((function(e){return console.log(e)}));var t=v.filter((function(t){return e!==t.id}));N(t)}function k(e,t){var n=v.map((function(n){return e===n.id?Object(u.a)(Object(u.a)({},n),{},{guess:t}):n}));fetch("https://glacial-castle-18259.herokuapp.com/editguess",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:e,guess:t})}).then().catch((function(e){return console.log(e)})),N(n)}var P=v.filter(b[o]).map((function(e){return Object(c.jsx)(d,{id:e.id,guess:e.guess,outcome:e.outcome,togglePredictionOutcome:C,deletePrediction:S,editPrediction:k},e.id)})),w=h.map((function(e){return Object(c.jsx)(p,{guess:e,isPressed:e===o,setFilter:s},e)}));return _(),Object(c.jsxs)("div",{className:"prediction__block",children:[Object(c.jsx)("h1",{className:"prediction__heading",children:e.name}),Object(c.jsx)("div",{className:"prediction__filters",children:w}),Object(c.jsx)("ul",{className:"prediction__list","aria-labelledby":"list-heading",children:P}),Object(c.jsx)(j,{guessOwner:e.owner,addPrediction:function(e){var t={id:"prediction="+m,guess:e,outcome:!1};N([].concat(Object(l.a)(v),[t])),y()},getid:function(){return _(),m},addid:y})]})};var m=function(e){var t=Object(i.useState)([]),n=Object(a.a)(t,2),o=n[0],s=n[1],u=Object(i.useState)([]),l=Object(a.a)(u,2),d=l[0],j=l[1],p=Object(i.useState)("Sean"),b=Object(a.a)(p,2);return b[0],b[1],fetch("https://glacial-castle-18259.herokuapp.com/").then((function(e){return e.json()})).then((function(e){e.forEach((function(e){"Chris"===e.owner&&s(o.push(e)),"Sean"===e.owner&&j(d.push(e))}))})).catch((function(e){return console.log(e)})),Object(c.jsxs)("div",{children:[Object(c.jsx)(r,{}),Object(c.jsxs)("div",{className:"Apparea",children:[Object(c.jsx)(f,{owner:"Sean",name:"Sean's Predictions",predictions:d}),Object(c.jsx)(f,{owner:"Chris",name:"Chris' predictions",predictions:o})]})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),o(e),s(e)}))};s.a.render(Object(c.jsx)(m,{}),document.getElementById("root")),O()}],[[19,1,2]]]);
//# sourceMappingURL=main.2b0de4b5.chunk.js.map