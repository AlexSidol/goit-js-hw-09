function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},r.parcelRequired7c6=o);var i=o("eWCmQ");function u(e,r){const n=Math.random()>.3;return new Promise(((t,o)=>{setTimeout((()=>{n?t({index:e,delay:r}):o({index:e,delay:r})}),r)}))}document.querySelector(".form").addEventListener("submit",(function(r){r.preventDefault();let n=Number(r.currentTarget.delay.value),t=Number(r.currentTarget.step.value),o=Number(r.currentTarget.amount.value);for(let r=0;r<o;r+=1)u(r+1,n).then((({index:r,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${r} in ${n}ms`)})).catch((({index:r,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${r} in ${n}ms`)})),n+=t}));
//# sourceMappingURL=03-promises.2e897aaf.js.map
