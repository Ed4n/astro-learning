import{r as i}from"./index.LFf77hJu.js";var d={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=i,a=Symbol.for("react.element"),m=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,_=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function p(t,e,n){var r,s={},c=null,u=null;n!==void 0&&(c=""+n),e.key!==void 0&&(c=""+e.key),e.ref!==void 0&&(u=e.ref);for(r in e)f.call(e,r)&&!b.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:a,type:t,key:c,ref:u,props:s,_owner:_.current}}l.Fragment=m;l.jsx=p;l.jsxs=p;d.exports=l;var o=d.exports;const v=()=>{const[t,e]=i.useState(0),n=()=>{e(t+1)},r=()=>{e(t-1)};return o.jsxs("div",{className:"counter",children:[o.jsxs("h1",{className:"text-4xl mb-4",children:["Counter: ",t]}),o.jsxs("div",{className:"flex space-x-4",children:[o.jsx("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:n,children:"Increment"}),o.jsx("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",onClick:r,children:"Decrement"})]})]})};export{v as default};
