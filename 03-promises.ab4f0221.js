!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("h6c0i"),r={firstDelay:document.getElementsByName("delay")[0],delayStep:document.getElementsByName("step")[0],amount:document.getElementsByName("amount")[0],submitBtn:document.querySelector("button")};function a(e,t){var n=Math.random()>.3;return new Promise((function(o,i){setTimeout((function(){n?o({position:e,delay:t}):i(new Error("Promise rejected for position: ".concat(e)))}),t)}))}r.submitBtn.addEventListener("click",(function(e){e.preventDefault();for(var t=1;t<=Number(r.amount.value);t++){var n=t;a(n,Number(r.firstDelay.value)+Number(r.delayStep.value)*(n-1)).then((function(e){var t=e.position,n=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;i.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.ab4f0221.js.map
