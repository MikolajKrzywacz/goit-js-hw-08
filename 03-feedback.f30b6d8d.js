function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=n);var r=n("kEUo3");const l=document.querySelector('[name="email"]'),u=document.querySelector('[name="message"]'),i=document.querySelector(".feedback-form"),s=e(r).throttle;i.addEventListener("input",s((function(){const e={email:l.value,message:u.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500));const d=localStorage.getItem("feedback-form-state");if(d){const e=JSON.parse(d);l.value=e.email,u.value=e.message}i.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:l.value,message:u.value}),localStorage.removeItem("feedback-form-state"),l.value="",u.value=""}));
//# sourceMappingURL=03-feedback.f30b6d8d.js.map