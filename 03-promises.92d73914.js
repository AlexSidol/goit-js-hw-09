!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=o);var i=o("iU1Pc");function u(e,n){var r=Math.random()>.3;return new Promise((function(t,o){setTimeout((function(){r?t({index:e,delay:n}):o({index:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var r=Number(n.currentTarget.delay.value),t=Number(n.currentTarget.step.value),o=Number(n.currentTarget.amount.value),a=0;a<o;a+=1)u(a+1,r).then((function(n){var r=n.index,t=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(r," in ").concat(t,"ms"))})).catch((function(n){var r=n.index,t=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(r," in ").concat(t,"ms"))})),r+=t}))}();
//# sourceMappingURL=03-promises.92d73914.js.map