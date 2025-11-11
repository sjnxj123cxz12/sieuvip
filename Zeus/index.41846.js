window.__require = function e(t, n, i) {
function o(s, c) {
if (!n[s]) {
if (!t[s]) {
var r = s.split("/");
r = r[r.length - 1];
if (!t[r]) {
var u = "function" == typeof __require && __require;
if (!c && u) return u(r, !0);
if (a) return a(r, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = r;
}
var h = n[s] = {
exports: {}
};
t[s][0].call(h.exports, function(e) {
return o(t[s][1][e] || e);
}, h, h.exports, e, t, n, i);
}
return n[s].exports;
}
for (var a = "function" == typeof __require && __require, s = 0; s < i.length; s++) o(i[s]);
return o;
}({
"TT.BasePopup": [ function(e, t) {
"use strict";
cc._RF.push(t, "d6a03/h2iBNwapAXRXwVSj2", "TT.BasePopup");
cc.Class({
extends: cc.Component,
properties: {
_cleanUp: !0
},
onLoad: function() {
this._cleanUp = !0;
},
destroyPopup: function() {
this.hide(!0);
},
touchBtnClose: function() {
this.hide();
},
show: function(e, t) {
e || (e = 1);
this.node.active = !0;
this.node.scale = 0;
this.node.opacity = 0;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.spawn(cc.fadeIn(.1), cc.scaleTo(.1, e, e).easing(cc.easeBackOut())), cc.callFunc(function() {
t && t();
})));
},
hide: function(e) {
void 0 === e && (e = this._cleanUp);
e && (this.node.tagName = -12121);
this.node.runAction(cc.sequence(cc.spawn(cc.fadeOut(.1), cc.scaleTo(.1, 0, 0).easing(cc.easeBackIn())), cc.callFunc(function() {
e ? this.node.removeFromParent(!0) : this.node.active = !1;
}, this)));
},
setBalance: function(e, t) {
if (!(t < 0)) {
var n = {
type: e,
balance: t
};
cc.systemEvent.emit(Global.ON_BALANCE_CHANGE, JSON.stringify(n));
}
},
active: function() {
this.node.active = !0;
},
deactive: function() {
this.hide(!1);
},
touchMainLayout: function(e) {
var t = this;
e.on(cc.Node.EventType.TOUCH_START, function(e) {
var n = e.currentTarget, i = e.touch, o = n.convertToNodeSpace(i._point), a = n.getContentSize();
if (cc.rect(0, 0, a.width, a.height).contains(o)) {
Global.localZIndexMiniGame++;
t.node.zIndex = Global.localZIndexMiniGame;
return !0;
}
return !1;
}, e);
e.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
var t = e.currentTarget, n = e.touch.getDelta();
t.x += n.x;
t.y += n.y;
}, e);
e.on(cc.Node.EventType.TOUCH_END, function() {}, e);
}
});
cc._RF.pop();
}, {} ],
"TT.BgResizer": [ function(e, t, n) {
"use strict";
cc._RF.push(t, "21477xsZdND/bCcZakESZ8w", "TT.BgResizer");
var i, o = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
i(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, i) {
var o, a = arguments.length, s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var c = e.length - 1; c >= 0; c--) (o = e[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(t, n, s) : o(t, n)) || s);
return a > 3 && s && Object.defineProperty(t, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, c = s.ccclass, r = s.property, u = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.designResolution = new cc.Size(1280, 720);
t.lastWitdh = 0;
t.lastHeight = 0;
t.isSpine = !1;
return t;
}
t.prototype.start = function() {
this.updateSize();
};
t.prototype.update = function() {
this.updateSize();
};
t.prototype.updateSize = function() {
var e = cc.view.getFrameSize();
if (this.lastWitdh !== e.width || this.lastHeight !== e.height) {
this.lastWitdh = e.width;
this.lastHeight = e.height;
if (this.designResolution.width / this.designResolution.height > e.width / e.height) {
var t = (i = this.designResolution.width * e.height / e.width) * this.designResolution.width / this.designResolution.height, n = cc.size(t, i);
this.node.setContentSize(n);
if (1 == this.isSpine) {
this.node.scaleX = n.width / this.designResolution.width;
this.node.scaleY = n.height / this.designResolution.height;
}
} else {
var i = (t = this.designResolution.height * e.width / e.height) * this.designResolution.height / this.designResolution.width;
n = cc.size(t, i);
this.node.setContentSize(n);
if (1 == this.isSpine) {
this.node.scaleX = n.width / this.designResolution.width;
this.node.scaleY = n.height / this.designResolution.height;
}
}
}
};
a([ r ], t.prototype, "designResolution", void 0);
a([ r ], t.prototype, "isSpine", void 0);
return a([ c ], t);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {} ],
"TT.CountUp": [ function(e, t) {
"use strict";
cc._RF.push(t, "5d715RG14BEWbfUoQzesrWK", "TT.CountUp");
t.exports = function(e, t, n, i, o) {
var a = this;
a.version = function() {
return "1.9.3";
};
a.options = {
useEasing: !0,
useGrouping: !0,
separator: ".",
decimal: ".",
easingFn: function(e, t, n, i) {
return n * (1 - Math.pow(2, -10 * e / i)) * 1024 / 1023 + t;
},
formattingFn: function(e) {
var t, n, i, o, s, c, r = e < 0;
e = Math.abs(e).toFixed(a.decimals);
n = (t = (e += "").split("."))[0];
i = t.length > 1 ? a.options.decimal + t[1] : "";
if (a.options.useGrouping) {
o = "";
for (s = 0, c = n.length; s < c; ++s) {
0 !== s && s % 3 == 0 && (o = a.options.separator + o);
o = n[c - s - 1] + o;
}
n = o;
}
if (a.options.numerals.length) {
n = n.replace(/[0-9]/g, function(e) {
return a.options.numerals[+e];
});
i = i.replace(/[0-9]/g, function(e) {
return a.options.numerals[+e];
});
}
return (r ? "-" : "") + a.options.prefix + n + i + a.options.suffix;
},
prefix: "",
suffix: "",
numerals: []
};
if (o && "object" == typeof o) for (var s in a.options) o.hasOwnProperty(s) && null !== o[s] && (a.options[s] = o[s]);
"" === a.options.separator ? a.options.useGrouping = !1 : a.options.separator = "" + a.options.separator;
for (var c = 0, r = [ "webkit", "moz", "ms", "o" ], u = 0; u < r.length && !window.requestAnimationFrame; ++u) {
window.requestAnimationFrame = window[r[u] + "RequestAnimationFrame"];
window.cancelAnimationFrame = window[r[u] + "CancelAnimationFrame"] || window[r[u] + "CancelRequestAnimationFrame"];
}
window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
var t = new Date().getTime(), n = Math.max(0, 16 - (t - c)), i = window.setTimeout(function() {
e(t + n);
}, n);
c = t + n;
return i;
});
window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
clearTimeout(e);
});
function h(e) {
return "number" == typeof e && !isNaN(e);
}
a.initialize = function() {
if (a.initialized) return !0;
a.error = "";
a.startVal = Number(e);
a.endVal = Number(t);
if (h(a.startVal) && h(a.endVal)) {
a.decimals = Math.max(0, n || 0);
a.dec = Math.pow(10, a.decimals);
a.duration = 1e3 * Number(i) || 2e3;
a.countDown = a.startVal > a.endVal;
a.frameVal = a.startVal;
a.initialized = !0;
return !0;
}
a.error = "[CountUp] startVal (" + e + ") or endVal (" + t + ") is not a number";
return !1;
};
a.printValue = function(e) {
var t = a.options.formattingFn(e);
this.callback && this.callback(t);
};
a.count = function(e) {
a.startTime || (a.startTime = e);
a.timestamp = e;
var t = e - a.startTime;
a.remaining = a.duration - t;
a.options.useEasing ? a.countDown ? a.frameVal = a.startVal - a.options.easingFn(t, 0, a.startVal - a.endVal, a.duration) : a.frameVal = a.options.easingFn(t, a.startVal, a.endVal - a.startVal, a.duration) : a.countDown ? a.frameVal = a.startVal - (a.startVal - a.endVal) * (t / a.duration) : a.frameVal = a.startVal + (a.endVal - a.startVal) * (t / a.duration);
a.countDown ? a.frameVal = a.frameVal < a.endVal ? a.endVal : a.frameVal : a.frameVal = a.frameVal > a.endVal ? a.endVal : a.frameVal;
a.frameVal = Math.round(a.frameVal * a.dec) / a.dec;
a.printValue(a.frameVal);
t < a.duration && (a.rAF = requestAnimationFrame(a.count));
};
a.start = function(e) {
if (a.initialize()) {
a.callback = e;
a.rAF = requestAnimationFrame(a.count);
}
};
a.pauseResume = function() {
if (a.paused) {
a.paused = !1;
delete a.startTime;
a.duration = a.remaining;
a.startVal = a.frameVal;
requestAnimationFrame(a.count);
} else {
a.paused = !0;
cancelAnimationFrame(a.rAF);
}
};
a.reset = function() {
a.paused = !1;
delete a.startTime;
a.initialized = !1;
if (a.initialize()) {
cancelAnimationFrame(a.rAF);
a.printValue(a.startVal);
}
};
a.update = function(e) {
if (a.initialize()) if (h(e = Number(e))) {
a.error = "";
if (e !== a.frameVal) {
cancelAnimationFrame(a.rAF);
a.paused = !1;
delete a.startTime;
a.startVal = a.frameVal;
a.endVal = e;
a.countDown = a.startVal > a.endVal;
a.rAF = requestAnimationFrame(a.count);
}
} else a.error = "[CountUp] update() - new endVal is not a number: " + e;
};
};
cc._RF.pop();
}, {} ],
"TT.CustomBMFont": [ function(e, t) {
"use strict";
cc._RF.push(t, "40b8dw6SDNDXZl7Ne62rlWd", "TT.CustomBMFont");
var n = e("./TT.CountUp"), i = cc.Class({
extends: cc.Component,
properties: {
bmfNumber: cc.Label
},
ctor: function() {
this._realNumber = 0;
this._currentNumber = 0;
},
onLoad: function() {
this._realNumber = 0;
this._currentNumber = 0;
this.duration || (this.duration = 3);
this.decimals || (this.decimals = 0);
this.options && (this.options = {});
this._countUp = null;
},
setRealNumber: function(e) {
this._realNumber = e;
cc.js.isNumber(this._currentNumber) || (this._currentNumber = 0);
if (this._currentNumber != this._realNumber) if (this._countUp) this._countUp.update(e); else {
this._countUp = new n(this._currentNumber, e, this.decimals, this.duration, this.options);
this._countUp.start(function(e) {
cc.sys.isObjectValid(this) && (this._currentNumber = parseInt(e.replace(/\./g, "")));
null != this.bmfNumber && (this.bmfNumber.string = e);
}.bind(this));
}
},
forceNumber: function(e) {
this._currentNumber = parseInt(e);
this._realNumber = parseInt(e);
if (this._countUp) {
this._countUp.pauseResume();
this.bmfNumber.string = this._countUp.options.formattingFn(e);
} else this.bmfNumber.string = MvUtils.formatNumber(e);
this._countUp = null;
},
setExtendsion: function(e) {
this._extendsion = e;
},
setDecima: function(e) {
this._decima = e;
},
setDuration: function(e) {
this.duration = e;
}
});
t.exports = i;
cc._RF.pop();
}, {
"./TT.CountUp": "TT.CountUp"
} ],
"TT.btnHover": [ function(e, t) {
"use strict";
cc._RF.push(t, "5fd8cammtxIpJQAMoRhsPMj", "TT.btnHover");
cc.Class({
extends: cc.Component,
properties: {
type: 1,
tabType: 0
},
onLoad: function() {
0 != this.type && this.initData(this.type);
},
initData: function(e) {
this.type = e;
this.name = "btnHover";
var t = this, n = t.node.scale;
if (this.type == Global.HOVER_BTN.SCALE) {
this.node.on(cc.Node.EventType.MOUSE_MOVE, function() {
t.node.scale = n + .05;
document.body.style.cursor = "pointer";
});
this.node.on(cc.Node.EventType.MOUSE_LEAVE, function() {
t.node.scale = n;
document.body.style.cursor = "auto";
});
} else if (this.type == Global.HOVER_BTN.COLOR) {
var i = this.node.color;
this.node.on(cc.Node.EventType.MOUSE_MOVE, function() {
t.node.color = new cc.color(136, 136, 136);
document.body.style.cursor = "pointer";
});
this.node.on(cc.Node.EventType.MOUSE_LEAVE, function() {
t.node.color = i;
document.body.style.cursor = "auto";
});
} else if (this.type == Global.HOVER_BTN.TOOLTIP) {
i = this.node.color;
this.node.on(cc.Node.EventType.MOUSE_ENTER, function() {
document.body.style.cursor = "pointer";
cc.loader.loadRes("Gate/tooltip", function(e, n) {
var i = new cc.instantiate(n);
i.getComponent("toolTipController").initData(t.node.name);
i.y += 40;
t.node.addChild(i, 9999, "15324");
i.runAction(cc.sequence(cc.delayTime(1), cc.removeSelf(!0)));
});
});
this.node.on(cc.Node.EventType.MOUSE_LEAVE, function() {
document.body.style.cursor = "auto";
t.node.removeAllChildren();
});
} else if (this.type == Global.HOVER_BTN.NORMAL_HOVER) {
this.node.on(cc.Node.EventType.MOUSE_MOVE, function() {
document.body.style.cursor = "pointer";
});
this.node.on(cc.Node.EventType.MOUSE_LEAVE, function() {
document.body.style.cursor = "auto";
});
} else if (this.type == Global.HOVER_BTN.LITTLE_SCALE) {
this.node.on(cc.Node.EventType.MOUSE_MOVE, function() {
t.node.scale = n + .03;
document.body.style.cursor = "pointer";
});
this.node.on(cc.Node.EventType.MOUSE_LEAVE, function() {
t.node.scale = n;
document.body.style.cursor = "auto";
});
}
}
});
cc._RF.pop();
}, {} ],
ThatTruyenAudioCtr: [ function(e, t) {
"use strict";
cc._RF.push(t, "03682RfKQ9Ej7/GVFzyIx7O", "ThatTruyenAudioCtr");
cc._RF.pop();
}, {} ],
ThatTruyenAudioDefined: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9d2ccYv8eZDN4swdQ6xyLzV", "ThatTruyenAudioDefined");
var i, o = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
i(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, i) {
var o, a = arguments.length, s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var c = e.length - 1; c >= 0; c--) (o = e[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(t, n, s) : o(t, n)) || s);
return a > 3 && s && Object.defineProperty(t, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, c = s.ccclass, r = s.property, u = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.Andiem = null;
t.BG_Bonus = null;
t.BG_game = null;
t.BG_lobby = null;
t.BG_spinspeed = null;
t.Bigwin = null;
t.bonus = null;
t.ClickSound = null;
t.Fail = null;
t.jackpot = null;
t.Spin = null;
t.SuperBigwin = null;
return t;
}
n = t;
Object.defineProperty(t, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
n._instance = this;
};
var n;
t._instance = null;
a([ r(cc.AudioClip) ], t.prototype, "Andiem", void 0);
a([ r(cc.AudioClip) ], t.prototype, "BG_Bonus", void 0);
a([ r(cc.AudioClip) ], t.prototype, "BG_game", void 0);
a([ r(cc.AudioClip) ], t.prototype, "BG_lobby", void 0);
a([ r(cc.AudioClip) ], t.prototype, "BG_spinspeed", void 0);
a([ r(cc.AudioClip) ], t.prototype, "Bigwin", void 0);
a([ r(cc.AudioClip) ], t.prototype, "bonus", void 0);
a([ r(cc.AudioClip) ], t.prototype, "ClickSound", void 0);
a([ r(cc.AudioClip) ], t.prototype, "Fail", void 0);
a([ r(cc.AudioClip) ], t.prototype, "jackpot", void 0);
a([ r(cc.AudioClip) ], t.prototype, "Spin", void 0);
a([ r(cc.AudioClip) ], t.prototype, "SuperBigwin", void 0);
return n = a([ c ], t);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {} ],
ThatTruyenFunc: [ function(e, t) {
"use strict";
cc._RF.push(t, "805b9QRPu5EX5L7fDT2c692", "ThatTruyenFunc");
var n, i = (n = e("./ThatTruyenAudioDefined")) && n.__esModule ? n : {
default: n
}, o = e("ThatTruyenVar"), a = {
log: function(e) {
Global.log(e);
},
shakeHorizontalAction: function(e, t, n, i) {
t = t || o.shakeTime;
n = n || o.shakeRange;
i = i || o.shakeRepeatTime;
if (0 !== e.getNumberOfRunningActions() && e.originalPos) {
e.stopAllActions();
e.setPosition(e.originalPos);
}
e.originalPos = e.getPosition();
return cc.sequence(cc.moveTo(t / 2, e.x - n, e.y), cc.sequence(cc.moveTo(t, e.x + n, e.y), cc.moveTo(t, e.x - n, e.y)).repeat(Math.floor(i / 2) - 2), cc.moveTo(t / 2, e.x, e.y));
},
shakeChaosAction: function(e, t, n, i) {
t = t || o.shakeTime;
n = n || o.shakeRange;
i = i || o.shakeRepeatTime;
if (0 !== e.getNumberOfRunningActions() && e.originalPos) {
e.stopAllActions();
e.setPosition(e.originalPos);
}
e.originalPos = e.getPosition();
for (var a = [], s = 0; s < i - 1; s++) {
var c = Math.random() * Math.PI * 2, r = cc.v2(Math.cos(c) * n, Math.sin(c) * n);
a.push(cc.moveTo(t, cc.v2Add(e.originalPos, r)));
}
a.push(cc.moveTo(t, e.originalPos));
return cc.sequence(a);
},
formatNumber: function(e) {
return MvUtils.formatNumber(e);
},
touchLock: function(e) {
if (o.mainScene.touchLockLayer) o.mainScene.touchLockLayer.active = !0; else {
var t = new ccui.Layout();
t.setCascadeOpacityEnabled(!0);
t.setTouchEnabled(!0);
t.setContentSize(o._winSize);
t.setBackGroundColorType(ccui.Layout.BG_COLOR_NONE);
t.opacity = 0;
(e = e || cc.director.getRunningScene()).addChild(t, 1e7);
o.mainLayer.touchLockLayer = t;
}
},
touchUnlock: function() {
o.mainLayer.touchLockLayer && o.mainLayer.touchLockLayer.setVisible(!1);
},
requestGet: function(e, t, n) {
e += "?access_token=" + encodeURIComponent(lngui.UserManager.instance.mainUserInfo.GameToken);
var i = cc.loader.getXMLHttpRequest();
console.log(e);
i.onreadystatechange = function() {
a.log("responseGet " + (n || "") + ": " + i.responseText);
4 == i.readyState && i.status, t && t(JSON.parse(i.responseText));
};
i.ontimeout = function() {
a.log("responseGet " + (n || "") + ": TIME OUT!");
t && t(o.REQUEST_ERROR);
};
i.onerror = function() {
a.log("responseGet " + (n || "") + ": NETWORK ERROR!");
t && t(o.REQUEST_TIMEOUT);
};
i.timeout = 2e4;
i.open("GET", e);
a.log("requestUrl " + (n || "") + ": " + e);
i.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
o.cookie && i.setRequestHeader("cookie", o.cookie);
i.send();
},
requestPost: function(e, t, n, i) {
e += "?access_token=" + encodeURIComponent(lngui.UserManager.instance.mainUserInfo.GameToken);
var s = cc.loader.getXMLHttpRequest();
s.onreadystatechange = function() {
a.log("responsePost " + (i || "") + ": " + s.responseText);
4 == s.readyState && s.status, n && n(JSON.parse(s.responseText));
};
s.ontimeout = function() {
a.log("responsePost " + (i || "") + ": TIME OUT!");
n && n(o.REQUEST_ERROR);
};
s.onerror = function() {
a.log("responsePost " + (i || "") + ": NETWORK ERROR!");
n && n(o.REQUEST_TIMEOUT);
};
s.timeout = 2e4;
s.open("POST", e);
a.log("requestPostUrl " + (i || "") + ": " + e);
s.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
o.cookie && s.setRequestHeader("cookie", o.cookie);
a.log("data: " + JSON.stringify(t));
s.send(JSON.stringify(t));
},
toast: function(e, t, n) {
MvUIUtils.toast(e, t, n);
},
getRandomInt: function(e, t) {
return Math.floor(Math.random() * (t - e + 1) + e);
},
btnShakeForeverAction: function(e, t) {
switch (t) {
case ccui.Widget.TOUCH_BEGAN:
e.runAction(a.shakeChaosAction(e).repeatForever());
break;

case ccui.Widget.TOUCH_ENDED:
lngui.AudioManager.instance.playSfx(i.default.instance.ClickSound, 1);

case ccui.Widget.TOUCH_CANCELED:
e.stopAllActions();
e.setPosition(e.originalPos);
}
},
updateBalance: function(e) {
MvUtils.updateCoin(e);
},
btnScaleDownAction: function(e, t) {
switch (t) {
case ccui.Widget.TOUCH_BEGAN:
e.stopAllActions();
e.setScale(.9);
e.runAction(cc.scaleTo(.08, .85));
break;

case ccui.Widget.TOUCH_ENDED:
lngui.AudioManager.instance.playSfx(i.default.instance.ClickSound, 1);

case ccui.Widget.TOUCH_CANCELED:
e.stopAllActions();
e.runAction(cc.scaleTo(.08, 1));
}
},
btnBasicBehaviour: function(e, t) {
switch (t) {
case ccui.Widget.TOUCH_BEGAN:
e.act.setVisible(!0);
e.dis.setVisible(!1);
break;

case ccui.Widget.TOUCH_ENDED:
lngui.AudioManager.instance.playSfx(i.default.instance.ClickSound, 1);

case ccui.Widget.TOUCH_CANCELED:
e.act.setVisible(!1);
e.dis.setVisible(!0);
}
},
sendSignalR: function(e, t) {
t = t || [];
Array.isArray(t) || (t = [ t ]);
o._signalR && o._signalR.send(e, t);
},
formatDateTime: function(e, t, n) {
var i = e.split("-"), o = i[0], a = i[1], s = i[2].substr(0, 2), c = i[2].split(":"), r = c[0].substr(c[0].length - 2, 2), u = c[1];
c[2].substr(0, 2);
return t && n ? s + "-" + a + "-" + o + " " + r + ":" + u : t ? s + "-" + a + "-" + o : n ? r + ":" + u : void 0;
},
heartBeatAction: function(e) {
e.originalScale || (e.originalScale = e.getScale());
e.setScale(e.originalScale);
return cc.sequence(cc.delayTime(2), cc.scaleTo(.123, e.originalScale + .2, e.originalScale + .2), cc.scaleTo(.08, e.originalScale, e.originalScale), cc.scaleTo(.123, e.originalScale + .2, e.originalScale + .2), cc.scaleTo(.08, e.originalScale, e.originalScale), cc.delayTime(2)).repeatForever();
},
outlineUniformCallBack: function(e, t, n) {
var i = cc.v2roperties.createNonRefCounted("res/resCode/Materials/auto_binding_test.material#sample"), o = cc.Material.createWithProperties(i).getTechniqueByName("outline").getPassByIndex(0).getGLProgramState();
e.setGLProgramState(o);
var a = t.r / 255, s = t.g / 255, c = t.b / 255;
o.setUniformCallback("u_outlineColor", function(e, i) {
if (n) {
a = t.r / 255 + Math.random() * (n.r / 255 - t.r / 255);
s = t.g / 255 + Math.random() * (n.g / 255 - t.g / 255);
c = t.b / 255 + Math.random() * (n.b / 255 - t.b / 255);
}
e.setUniformLocationWith3f(i.location, a, s, c);
});
},
parseTime: function(e, t) {
return t ? this.padString(Math.floor(e / 3600), 2) + ":" + this.padString(Math.floor(e % 3600 / 60), 2) + ":" + this.padString(e % 60, 2) : this.padString(Math.floor(e / 60), 2) + ":" + this.padString(e % 60, 2);
},
padString: function(e, t, n) {
n = n || "0";
return (e += "").length >= t ? e : new Array(t - e.length + 1).join(n) + e;
},
blurUniformCallBack: function(e) {
var t = cc.v2roperties.createNonRefCounted("res/resCode/Materials/auto_binding_test.material#sample"), n = cc.Material.createWithProperties(t).getTechniqueByName("blur").getPassByIndex(0).getGLProgramState();
e.setGLProgramState(n);
n.setUniformCallback("blurRadius", function(e, t) {
e.setUniformLocationWith1f(t.location, 10 * Math.random());
});
},
removeUniformMaterial: function(e) {
var t = cc.v2roperties.createNonRefCounted("res/resCode/Materials/2d_effects.material#sample"), n = cc.Material.createWithProperties(t);
e.setGLProgramState(n.getTechniqueByName("blur").getPassByIndex(0).getGLProgramState());
},
mergeAction: function(e) {
e.stopAllActions();
e.setScale(1);
e.runAction(cc.sequence(cc.scaleTo(.022, 1, .5), cc.scaleTo(.056, 1, 1.4), cc.scaleTo(.022, 1, 1)));
},
shuffleArray: function(e) {
for (var t = e.length - 1; t > 0; t--) {
var n = Math.floor(Math.random() * (t + 1)), i = e[t];
e[t] = e[n];
e[n] = i;
}
return e;
}
};
t.exports = a;
cc._RF.pop();
}, {
"./ThatTruyenAudioDefined": "ThatTruyenAudioDefined",
ThatTruyenVar: "ThatTruyenVar"
} ],
ThatTruyenLobbyLayer: [ function(e, t) {
"use strict";
cc._RF.push(t, "692c3U7feRJIavB7Xw4EtSB", "ThatTruyenLobbyLayer");
var n, i = (n = e("./ThatTruyenAudioDefined")) && n.__esModule ? n : {
default: n
}, o = e("TT.CustomBMFont"), a = e("ThatTruyenVar");
cc.Class({
extends: cc.Component,
properties: {
bmfJackpots: [ o ],
lblUsername: cc.Label,
bmfBalance: o
},
onLoad: function() {
console.log(lngui.UserManager.instance.mainUserInfo);
this.lblUsername.string = lngui.UserManager.instance.mainUserInfo.NickName;
this.bmfBalance.setRealNumber(lngui.UserManager.instance.mainUserInfo.Money);
a.jackpot = [ 0, 5e5, 5e6, 5e7 ];
this.setJackpot();
},
setBalance: function() {
this.bmfBalance.setRealNumber(lngui.UserManager.instance.mainUserInfo.Money);
},
setJackpot: function() {
for (var e = 0; e < 3; e++) this.bmfJackpots[e].setRealNumber(a.jackpot[e + 1]);
},
touchBtnRoom: function(e, t) {
lngui.AudioManager.instance.playSfx(i.default.instance.ClickSound, 1);
this.setBalance();
a.mainScene.showGamePlay(t);
},
show: function() {
this.node.active = !0;
MvUtils.removeWaiting();
},
hide: function() {
this.node.active = !1;
}
});
cc._RF.pop();
}, {
"./ThatTruyenAudioDefined": "ThatTruyenAudioDefined",
"TT.CustomBMFont": "TT.CustomBMFont",
ThatTruyenVar: "ThatTruyenVar"
} ],
ThatTruyenMainGame: [ function(e, t) {
"use strict";
cc._RF.push(t, "bef19V5EtBOJovciqDuK7uO", "ThatTruyenMainGame");
var n, i = (n = e("./ThatTruyenAudioDefined")) && n.__esModule ? n : {
default: n
}, o = e("TT.CustomBMFont"), a = e("ThatTruyenVar"), s = e("ThatTruyenFunc");
cc.Class({
extends: cc.Component,
properties: {
btnChonDong: cc.Button,
btnRoom: cc.Button,
bg: cc.Sprite,
bgFreeSpin: cc.Node,
lblFreeSpin: cc.Label,
bmfBalance: o,
bmfJackpot: o,
bmfMoneyWin: o,
lblNumberLine: cc.Label,
lblTotalBet: cc.Label,
lblSeesionID: cc.Label,
lblRoomValue: cc.Label,
spChar: sp.Skeleton,
spriteFrame: [ cc.SpriteFrame ],
iconEff: [ sp.SkeletonData ],
btnQuay: cc.Button,
btnTuQuay: cc.Button,
btnSieuToc: cc.Button,
btnDungTuQuay: cc.Button,
btnDungSieuToc: cc.Button,
EffLight1: cc.SpriteFrame,
EffLight2: cc.SpriteFrame
},
onLoad: function() {
this._isPlayTry = !1;
this._freeSpin = 0;
this.spinSpeed = 1;
this._chonDongNumberCounter = 25;
this.bmfBalance.setRealNumber(lngui.UserManager.instance.mainUserInfo.Money);
this.initPnlMid();
this.initPnlBottom();
},
hide: function() {
this.node.active = !1;
this._isPlayTry && s.sendSignalR("PlayTry", [ !1 ]);
},
showGamePlay: function(e) {
this.node.active = !0;
this.bmfBalance.setRealNumber(lngui.UserManager.instance.mainUserInfo.Money);
this.initRoomVar(e);
this.setJackpot();
lngui.AudioManager.instance.playMusic(i.default.instance.BG_game);
},
initRoomVar: function(e) {
this._isPlayTry = !1;
this.roomValue = Number(e);
console.log(e);
switch (this.roomValue) {
case 100:
this.roomType = 1;
break;

case 1e3:
this.roomType = 2;
break;

case 1e4:
this.roomType = 3;
break;

case 0:
this._isPlayTry = !0;
this.roomType = 3;
this.roomValue = 1e4;
s.sendSignalR("PlayTry", [ !0 ]);
break;

default:
this.roomType = 3;
}
s.sendSignalR("PlayNow", [ this.roomType ]);
this.lblRoomValue.string = MvUtils.formatNumber(this.roomValue);
this.lblTotalBet.string = MvUtils.formatNumber(this.roomValue * this._chonDongNumberCounter);
},
updateChonDong: function() {
if (this._isPlayTry) a.mainScene.showDialogNotifyNode("Bạn không thể thực hiện thao tác này trong phần chơi miễn phí"); else {
this.lblNumberLine.string = this._chonDongNumberCounter;
this._nodeLine.stopAllActions();
this._nodeLine.active = !0;
for (var e = 1; e <= 25; e++) this._sprLine[e].active = !1;
for (e = 1; e <= this._chonDongNumberCounter; e++) this._sprLine[e].active = !0;
this._nodeLine.opacity = 255;
this._nodeLine.runAction(cc.fadeOut(1.5));
this.lblTotalBet.string = MvUtils.formatNumber(this.roomValue * this._chonDongNumberCounter);
}
},
initPnlBottom: function() {
var e = this.node.getChildByName("pnlBot");
this.lblSeesionID.string = "";
this.lblFreeSpin.tring = "";
this.btnRoom.node.on(cc.Node.EventType.TOUCH_END, function() {
if (this._isPlayTry) a.mainScene.showDialogNotifyNode("Bạn không thể chọn phòng trong phần chơi miễn phí"); else if (this.isBtnClickable()) {
lngui.AudioManager.instance.playSfx(i.default.instance.ClickSound, 1);
switch (this.roomValue) {
case 100:
this.initRoomVar(100);
break;

case 1e3:
this.initRoomVar(1e3);
break;

case 1e4:
this.initRoomVar(1e4);
}
this._ItemArray = null;
this._LineArray = null;
for (var e = 1; e <= 25; e++) this._sprLine[e].active = !1;
this.bmfMoneyWin.setRealNumber(0);
}
}, this);
this.lblNumberLine.string = this._chonDongNumberCounter;
this.btnChonDong.node.on(cc.Node.EventType.TOUCH_END, function() {
if (this._isPlayTry) a.mainScene.showDialogNotifyNode("Bạn không thể chọn dòng trong phần chơi miễn phí"); else if (this.isBtnClickable()) {
lngui.AudioManager.instance.playSfx(i.default.instance.ClickSound, 1);
this._chonDongNumberCounter++;
this._chonDongNumberCounter > 25 && (this._chonDongNumberCounter = 1);
this.updateChonDong();
}
}, this);
this.bmfMoneyWin.setRealNumber(0);
var t = e.getChildByName("pnlDongTang");
t.act = t.getChildByName("act");
t.act.active = !1;
t.dis = t.getChildByName("dis");
t.dis.active = !0;
t.on(cc.Node.EventType.TOUCH_START, function() {
t.act.active = !0;
t.dis.active = !1;
});
t.on(cc.Node.EventType.TOUCH_CANCEL, function() {
t.act.active = !0;
t.dis.active = !1;
});
t.on(cc.Node.EventType.TOUCH_END, function() {
t.act.active = !1;
t.dis.active = !0;
if (this.isBtnClickable()) {
lngui.AudioManager.instance.playSfx(i.default.instance.ClickSound, 1);
this._chonDongNumberCounter++;
this._chonDongNumberCounter > 25 && (this._chonDongNumberCounter = 1);
this.updateChonDong();
}
}, this);
var n = e.getChildByName("pnlDongGiam");
n.act = n.getChildByName("act");
n.act.active = !1;
n.dis = n.getChildByName("dis");
n.dis.active = !0;
n.on(cc.Node.EventType.TOUCH_START, function() {
n.act.active = !0;
n.dis.active = !1;
});
n.on(cc.Node.EventType.TOUCH_CANCEL, function() {
n.act.active = !0;
n.dis.active = !1;
});
n.on(cc.Node.EventType.TOUCH_END, function() {
n.act.active = !1;
n.dis.active = !0;
if (this.isBtnClickable()) {
lngui.AudioManager.instance.playSfx(i.default.instance.ClickSound, 1);
this._chonDongNumberCounter--;
this._chonDongNumberCounter < 1 && (this._chonDongNumberCounter = 25);
this.updateChonDong();
}
}, this);
this.btnQuay.node.on(cc.Node.EventType.TOUCH_END, function() {
lngui.AudioManager.instance.playSfx(i.default.instance.ClickSound, 1);
this._autoSpin ? a.mainScene.showDialogNotifyNode("Hiện đang trong tiến trình quay") : this.callSpin();
}, this);
this.btnTuQuay.node.on(cc.Node.EventType.TOUCH_END, function() {
lngui.AudioManager.instance.playSfx(i.default.instance.ClickSound, 1);
if (this._isPlayTry) s.toast("Bạn không thể tự quay trong phần chơi miễn phí", this.node, cc.v2(0, 0)); else {
this._autoSpin = !0;
this.spinSpeed = 1;
this.touchBtnTuQuay();
}
}, this);
this.btnDungTuQuay.node.on(cc.Node.EventType.TOUCH_END, function() {
lngui.AudioManager.instance.playSfx(i.default.instance.ClickSound, 1);
lngui.AudioManager.instance.playMusic(i.default.instance.BG_game);
this._autoSpin = !1;
this.spinSpeed = 1;
this.touchBtnTuQuay();
}, this);
this.btnSieuToc.node.on(cc.Node.EventType.TOUCH_END, function() {
lngui.AudioManager.instance.playSfx(i.default.instance.ClickSound, 1);
if (this._isPlayTry) s.toast("Bạn không thể quay siêu tốc trong phần chơi miễn phí", this.node, cc.v2(0, 0)); else {
this._autoSpin = !0;
this.spinSpeed = 3;
this.touchBtnTuQuay();
}
}, this);
this.btnDungSieuToc.node.on(cc.Node.EventType.TOUCH_END, function() {
lngui.AudioManager.instance.playSfx(i.default.instance.ClickSound, 1);
lngui.AudioManager.instance.playMusic(i.default.instance.BG_game);
if (this._isPlayTry) s.toast("Bạn không thể chọn tự quay trong phần chơi miễn phí"); else {
this._autoSpin = !1;
this.spinSpeed = 1;
this.touchBtnTuQuay();
}
}, this);
},
touchBtnTuQuay: function() {
if (this._isPlayTry) a.mainScene.showDialogNotifyNode("Bạn không thể chọn tự quay trong phần chơi miễn phí"); else {
lngui.AudioManager.instance.playSfx(i.default.instance.ClickSound, 1);
if (this.spinSpeed > 1) {
lngui.AudioManager.instance.pauseMusic();
lngui.AudioManager.instance.playMusic(i.default.instance.BG_spinspeed);
}
this.btnTuQuay.node.active = !(this._autoSpin && 1 === this.spinSpeed);
this.btnDungTuQuay.node.active = this._autoSpin && 1 === this.spinSpeed;
this.btnSieuToc.node.active = !(this._autoSpin && 3 === this.spinSpeed);
this.btnDungSieuToc.node.active = this._autoSpin && 3 === this.spinSpeed;
null == this._resultSpin && this.callSpin();
}
},
isBtnClickable: function(e) {
if (this._freeSpin) {
e || a.mainScene.showDialogNotifyNode("Hiện đang trong tiến trình quay miễn phí");
return !1;
}
if (this._autoSpin) {
e || a.mainScene.showDialogNotifyNode("Hiện đang trong tiến trình tự động quay");
return !1;
}
if (this._resultSpin) {
e || a.mainScene.showDialogNotifyNode("Hiện đang trong tiến trình quay");
return !1;
}
return !0;
},
parseSlotInfo: function(e) {
this._chonDongNumberCounter = e.LastLines;
this.lblNumberLine.string = this._chonDongNumberCounter;
a.jackpot[this.roomType] = e.Jackpot;
this.lblTotalBet.string = MvUtils.formatNumber(this.roomValue * this._chonDongNumberCounter);
},
parseJoinTryPlay: function(e) {
this.bmfBalance.setRealNumber(e.Account.TotalStar);
this.bmfJackpot.setRealNumber(e.SlotInfo.Jackpot);
a.jackpot[0] = e.SlotInfo.Jackpot;
},
initPnlMid: function() {
this.pnlMid = this.node.getChildByName("pnlMid");
this.nodeSlot = this.pnlMid.getChildByName("ZomSlotNode");
this.pnlSlot = this.nodeSlot.getChildByName("pnlSlot");
this.pnlEffect = this.nodeSlot.getChildByName("pnlEffect");
this._spinEffect = [];
for (var e = 0; e < 5; e++) {
this._spinEffect[e] = this.pnlEffect.getChildByName("spinEffect_" + e);
this._spinEffect[e].opacity = 0;
}
this._btnEffect = [];
for (e = 0; e < 5; e++) {
this._btnEffect[e] = this.pnlEffect.getChildByName("btnEffect_" + e);
this._btnEffect[e]._tagSprite = !1;
this._btnEffect[e].opacity = 0;
}
this.initNodeSlot();
this.initGameIcon();
},
initNodeSlot: function() {
this._nodeLine = this.nodeSlot.getChildByName("nodeLine");
this._sprLine = [];
for (var e = 1; e <= 25; e++) {
this._sprLine[e] = this._nodeLine.getChildByName("sprLine" + e);
this._sprLine[e].active = !1;
}
},
initGameIcon: function() {
this._icons = [];
this._iconsPos = [];
this._nodeCol = [];
this._nodeItemDistant = 185;
this._nodeItemBottomPos = -this._nodeItemDistant;
this._nodeItemNumber = 120;
this._nodeItemScale = 1;
for (var e = 0; e < 5; e++) {
this._icons[e] = [];
this._iconsPos[e] = [];
this._nodeCol[e] = this.pnlSlot.getChildByName("nodeCol" + e);
this._nodeCol[e].y -= (this._nodeItemNumber - 3) * this._nodeItemDistant;
for (var t = 0; t < this._nodeItemNumber; t++) {
this._iconsPos[e][t] = cc.v2(0, this._nodeItemBottomPos + this._nodeItemDistant * t);
if (t >= this._nodeItemNumber - 3) {
var n = s.getRandomInt(1, this.spriteFrame.length - 1);
this._icons[e][t] = new cc.Node();
[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ].indexOf(n) >= 0 && (this._icons[e][t].addComponent(cc.Sprite).spriteFrame = this.spriteFrame[n]);
this._icons[e][t].setPosition(this._iconsPos[e][t].x, this._iconsPos[e][t].y + 500);
this._icons[e][t].runAction(cc.sequence(cc.delayTime(.1), cc.moveTo(.3, this._iconsPos[e][t]).easing(cc.easeBounceOut())));
this._icons[e][t].setScale(this._nodeItemScale);
this._nodeCol[e].addChild(this._icons[e][t]);
}
}
}
},
parseSpin: function(e) {
var t = e.SpinData.PrizeLines;
for (var n in t) 4 === t[n].PrizeID && (e.IsJackpot = !0);
if (!this._isPlayTry) {
a.mainScene._x2Data = e.X2Game;
a.mainScene._accumData = e.AccumulateGame;
}
this.lblSeesionID.string = "Phiên: #" + e.SpinData.SpinID;
a.mainScene.hideWinBigNode();
this._resultSpin = e;
this._ItemArray = null;
this._LineArray = null;
this.prepareRoll();
},
prepareRoll: function() {
for (var e = 1; e <= 25; e++) this._sprLine[e].active = !1;
var t = this._resultSpin.SpinData.Slots;
this._delayRollIndexStart = 6;
var n = 0, i = 0;
for (e = 0; e < 4; e++) {
for (var o = !1, a = !1, c = 0; c < 3; c++) {
if (2 === t[e + (10 - 5 * c)] && !o) {
n++;
o = !0;
}
if (3 === t[e + (10 - 5 * c)] && !a) {
i++;
a = !0;
}
}
(2 === n || 2 === i) && this._delayRollIndexStart > 5 && (this._delayRollIndexStart = e);
}
for (e = 0; e < 5; e++) for (c = 0; c < 3; c++) {
this._icons[e][c] && this._icons[e][c].removeFromParent();
this._icons[e][c] = this._icons[e][c + this._nodeItemNumber - 3];
this._icons[e][c].stopAllActions();
var r = new cc.Node();
[ 1, 4, 2, 3, 5, 6, 7, 8, 9, 10, 11 ].indexOf(t[e + (10 - 5 * c)]) >= 0 && (r.addComponent(cc.Sprite).spriteFrame = this.spriteFrame[t[e + (10 - 5 * c)]]);
r.setScale(this._nodeItemScale);
this._nodeCol[e].addChild(r);
this._icons[e][c + this._nodeItemNumber - 3] = r;
}
if (!this._icons[0][3]) for (e = 0; e < 5; e++) for (c = 3; c < this._nodeItemNumber - 3; c++) {
var u = s.getRandomInt(1, this.spriteFrame.length - 1);
this._icons[e][c] = new cc.Node();
[ 1, 4, 2, 3, 5, 6, 7, 8, 9, 10, 11 ].indexOf(u) >= 0 && (this._icons[e][c].addComponent(cc.Sprite).spriteFrame = this.spriteFrame[u]);
this._icons[e][c].setScale(this._nodeItemScale);
this._nodeCol[e].addChild(this._icons[e][c]);
}
for (e = 0; e < 5; e++) {
for (c = 0; c < this._nodeItemNumber; c++) this._icons[e][c].setPosition(this._iconsPos[e][c]);
for (c = 0; c < 3; c++) {
this._icons[e][c + Math.round(this._nodeItemNumber / 4) - 3].active = !0;
this._icons[e][c + Math.round(this._nodeItemNumber / 3) - 3].active = !0;
this._icons[e][c + Math.round(this._nodeItemNumber / 2) - 3].active = !0;
if (1 === this._delayRollIndexStart) {
if (0 === e || 1 === e) {
this._icons[e][c + this._nodeItemNumber - 3].setPosition(this._iconsPos[e][c + Math.round(.25 * this._nodeItemNumber) - 3]);
this._icons[e][c + Math.round(.25 * this._nodeItemNumber) - 3].active = !1;
} else if (2 === e) {
this._icons[e][c + this._nodeItemNumber - 3].setPosition(this._iconsPos[e][c + Math.round(.5 * this._nodeItemNumber) - 3]);
this._icons[e][c + Math.round(.5 * this._nodeItemNumber) - 3].active = !1;
} else if (3 === e) {
this._icons[e][c + this._nodeItemNumber - 3].setPosition(this._iconsPos[e][c + Math.round(.75 * this._nodeItemNumber) - 3]);
this._icons[e][c + Math.round(.75 * this._nodeItemNumber) - 3].active = !1;
}
} else if (2 === this._delayRollIndexStart) {
if (0 === e || 1 === e || 2 === e) {
this._icons[e][c + this._nodeItemNumber - 3].setPosition(this._iconsPos[e][c + Math.round(.25 * this._nodeItemNumber) - 3]);
this._icons[e][c + Math.round(.25 * this._nodeItemNumber) - 3].active = !1;
} else if (3 === e) {
this._icons[e][c + this._nodeItemNumber - 3].setPosition(this._iconsPos[e][c + Math.round(.5 * this._nodeItemNumber) - 3]);
this._icons[e][c + Math.round(.5 * this._nodeItemNumber) - 3].active = !1;
} else if (4 === e) {
this._icons[e][c + this._nodeItemNumber - 3].setPosition(this._iconsPos[e][c + Math.round(.75 * this._nodeItemNumber) - 3]);
this._icons[e][c + Math.round(.75 * this._nodeItemNumber) - 3].active = !1;
}
} else if (3 === this._delayRollIndexStart) {
if (0 === e || 1 === e || 2 === e || 3 === e) {
this._icons[e][c + this._nodeItemNumber - 3].setPosition(this._iconsPos[e][c + Math.round(.25 * this._nodeItemNumber) - 3]);
this._icons[e][c + Math.round(.25 * this._nodeItemNumber) - 3].active = !1;
} else if (4 === e) {
this._icons[e][c + this._nodeItemNumber - 3].setPosition(this._iconsPos[e][c + Math.round(.5 * this._nodeItemNumber) - 3]);
this._icons[e][c + Math.round(.5 * this._nodeItemNumber) - 3].active = !1;
}
} else {
this._icons[e][c + this._nodeItemNumber - 3].setPosition(this._iconsPos[e][c + Math.round(.25 * this._nodeItemNumber) - 3]);
this._icons[e][c + Math.round(.25 * this._nodeItemNumber) - 3].active = !1;
}
}
}
this.beginRoll();
},
beginRoll: function() {
for (var e = 2.44 / this.spinSpeed, t = .3 / this.spinSpeed, n = e + t, i = 0; i < 5; i++) {
this._nodeCol[i].stopAllActions();
this._nodeCol[i].y = 0;
var o = [ cc.delayTime(.125 * i) ];
if (1 === this._delayRollIndexStart) {
if (0 === i || 1 === i) o.push(cc.moveBy(1 * e, 0, -this._nodeItemDistant * (Math.round(.25 * this._nodeItemNumber) - 2.5))); else if (2 === i) {
o.push(cc.moveBy(2 * e, 0, -this._nodeItemDistant * (Math.round(.5 * this._nodeItemNumber) - 2.5)));
this._spinEffect[i].runAction(cc.sequence(cc.delayTime(n + .125 * i), cc.callFunc(function(e) {
e.opacity = 255;
}, this), cc.delayTime(n), cc.callFunc(function(e) {
e.opacity = 0;
})));
this._btnEffect[this._delayRollIndexStart].runAction(cc.sequence(cc.delayTime(n + .125 * i), cc.callFunc(function(e) {
e.opacity = 255;
e.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function(e) {
this.animationWait(e);
}, this)).repeatForever());
}, this), cc.delayTime(n), cc.callFunc(function(e) {
e.stopAllActions();
e.opacity = 0;
}, this._btnEffect[this._delayRollIndexStart])));
this._btnEffect[i].runAction(cc.sequence(cc.delayTime(n + .125 * i), cc.callFunc(function(e) {
e.opacity = 255;
e.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function(e) {
this.animationWait(e);
}, this)).repeatForever());
}, this), cc.delayTime(2 * n), cc.callFunc(function(e) {
e.opacity = 0;
e.stopAllActions();
}, this._btnEffect[i])));
} else if (3 === i) {
o.push(cc.moveBy(3 * e, 0, -this._nodeItemDistant * (Math.round(.75 * this._nodeItemNumber) - 2.5)));
this._spinEffect[i].runAction(cc.sequence(cc.delayTime(2 * n + .125 * i), cc.callFunc(function(e) {
e.opacity = 255;
}), cc.delayTime(n), cc.callFunc(function(e) {
e.opacity = 0;
})));
this._btnEffect[i].runAction(cc.sequence(cc.delayTime(2 * n + .125 * i), cc.callFunc(function(e) {
e.opacity = 255;
e.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function(e) {
this.animationWait(e);
}, this)).repeatForever());
}, this), cc.delayTime(2 * n), cc.callFunc(function(e) {
e.opacity = 0;
e.stopAllActions();
}, this._btnEffect[i])));
} else if (4 === i) {
o.push(cc.moveBy(4 * e, 0, -this._nodeItemDistant * (Math.round(1 * this._nodeItemNumber) - 2.5)));
this._spinEffect[i].runAction(cc.sequence(cc.delayTime(3 * n + .125 * i), cc.callFunc(function(e) {
e.opacity = 255;
}), cc.delayTime(n), cc.callFunc(function(e) {
e.opacity = 0;
})));
this._btnEffect[i].runAction(cc.sequence(cc.delayTime(3 * n + .125 * i), cc.callFunc(function(e) {
e.opacity = 255;
e.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function(e) {
this.animationWait(e);
}, this)).repeatForever());
}, this), cc.delayTime(n), cc.callFunc(function(e) {
e.opacity = 0;
e.stopAllActions();
}, this._btnEffect[i])));
}
} else if (2 === this._delayRollIndexStart) {
if (0 === i || 1 === i || 2 === i) o.push(cc.moveBy(1 * e, 0, -this._nodeItemDistant * (Math.round(.25 * this._nodeItemNumber) - 2.5))); else if (3 === i) {
o.push(cc.moveBy(2 * e, 0, -this._nodeItemDistant * (Math.round(.5 * this._nodeItemNumber) - 2.5)));
this._spinEffect[i].runAction(cc.sequence(cc.delayTime(n + .125 * i), cc.callFunc(function(e) {
e.opacity = 255;
}, this), cc.delayTime(n), cc.callFunc(function(e) {
e.opacity = 0;
})));
this._btnEffect[this._delayRollIndexStart].runAction(cc.sequence(cc.delayTime(n + .125 * i), cc.callFunc(function(e) {
e.opacity = 255;
e.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function(e) {
this.animationWait(e);
}, this)).repeatForever());
}, this), cc.delayTime(n), cc.callFunc(function(e) {
e.opacity = 0;
e.stopAllActions();
}, this._btnEffect[this._delayRollIndexStart])));
this._btnEffect[i].runAction(cc.sequence(cc.delayTime(n + .125 * i), cc.callFunc(function(e) {
e.opacity = 255;
e.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function(e) {
this.animationWait(e);
}, this)).repeatForever());
}, this), cc.delayTime(2 * n), cc.callFunc(function(e) {
e.opacity = 0;
e.stopAllActions();
}, this._btnEffect[i])));
} else if (4 === i) {
o.push(cc.moveBy(3 * e, 0, -this._nodeItemDistant * (Math.round(.75 * this._nodeItemNumber) - 2.5)));
this._spinEffect[i].runAction(cc.sequence(cc.delayTime(2 * n + .125 * i), cc.callFunc(function(e) {
e.opacity = 255;
}), cc.delayTime(n), cc.callFunc(function(e) {
e.opacity = 0;
})));
this._btnEffect[i].runAction(cc.sequence(cc.delayTime(2 * n + .125 * i), cc.callFunc(function(e) {
e.opacity = 255;
e.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function(e) {
this.animationWait(e);
}, this)).repeatForever());
}, this), cc.delayTime(n), cc.callFunc(function(e) {
e.opacity = 0;
e.stopAllActions();
}, this._btnEffect[i])));
}
} else if (3 === this._delayRollIndexStart) {
if (0 === i || 1 === i || 2 === i || 3 === i) o.push(cc.moveBy(1 * e, 0, -this._nodeItemDistant * (Math.round(.25 * this._nodeItemNumber) - 2.5))); else if (4 === i) {
o.push(cc.moveBy(2 * e, 0, -this._nodeItemDistant * (Math.round(.5 * this._nodeItemNumber) - 2.5)));
this._spinEffect[i].runAction(cc.sequence(cc.delayTime(n + .125 * i), cc.callFunc(function(e) {
e.opacity = 255;
}), cc.delayTime(n), cc.callFunc(function(e) {
e.opacity = 0;
})));
this._btnEffect[this._delayRollIndexStart].runAction(cc.sequence(cc.delayTime(n + .125 * i), cc.callFunc(function(e) {
e.opacity = 255;
e.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function(e) {
this.animationWait(e);
}, this)).repeatForever());
}, this), cc.delayTime(n), cc.callFunc(function(e) {
e.opacity = 0;
e.stopAllActions();
}, this._btnEffect[this._delayRollIndexStart])));
this._btnEffect[i].runAction(cc.sequence(cc.delayTime(e + .125 * i), cc.callFunc(function(e) {
e.opacity = 255;
e.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function(e) {
this.animationWait(e);
}, this)).repeatForever());
}, this), cc.delayTime(n), cc.callFunc(function(e) {
e.opacity = 0;
e.stopAllActions();
}, this._btnEffect[i])));
}
} else o.push(cc.moveBy(1 * e, 0, -this._nodeItemDistant * (Math.round(.25 * this._nodeItemNumber) - 2.5)));
o.push(cc.moveBy(t, 0, .5 * this._nodeItemDistant).easing(cc.easeElasticOut(2)));
4 === i && o.push(cc.callFunc(this.finishRoll, this));
this._nodeCol[i].runAction(cc.sequence(o));
}
},
finishRoll: function() {
if (null != this._resultSpin.SpinData.PrizeLines && this._resultSpin.SpinData.PrizeLines.length > 0) {
var e = [], t = this._resultSpin.SpinData.PrizeLines;
for (var n in t) {
var i = t[n].LineID;
i < 1 || i > 25 || t[n].PrizeValue <= 0 || e.push(i);
}
for (var n in e) this._sprLine[e[n]].active = !0;
this._LineArray = e;
var o = [], a = t;
for (var n in a) o.push(a[n].Items);
this._ItemArray = o;
var s = [];
for (var n in o) for (var c in o[n]) s[o[n][c]] = !0;
for (var r in s) {
var u = parseInt(r);
n = (u - 1) % 5, c = Math.ceil((u - n - 10) / -5);
this._icons[n][c + this._nodeItemNumber - 3].color = cc.Color.WHITE;
}
}
this.showSpecialWonLayer();
},
showSpecialWonLayer: function() {
var e, t = this._resultSpin.SpinData.PayLinePrizeValue / (this.roomValue || 1e4);
this._resultSpin.IsJackpot ? e = a.WINBIG.HUXU : this._resultSpin.BonusGame.BonusItemsData ? e = a.WINBIG.BONUS : t >= 50 && t < 100 ? e = a.WINBIG.THANGLON : t >= 100 ? e = a.WINBIG.GIAUTO : this._resultSpin.SlotInfo.FreeSpins && this._resultSpin.SpinData.TotalBetValue && (e = a.WINBIG.QUAYMIENPHI);
switch (e) {
case a.WINBIG.QUAYMIENPHI:
case a.WINBIG.BONUS:
var n = 2;
break;

case a.WINBIG.GIAUTO:
n = 5;
break;

case a.WINBIG.THANGLON:
n = 3;
break;

case a.WINBIG.HUXU:
n = 5;
break;

default:
n = 1;
}
if (this._resultSpin.SpinData.PayLinePrizeValue) switch (e) {
case a.WINBIG.GIAUTO:
lngui.AudioManager.instance.pauseMusic();
lngui.AudioManager.instance.playSfx(i.default.instance.Bigwin, 1);
this._nodeCol[0].runAction(cc.sequence(cc.delayTime(.6), cc.callFunc(function() {
a.mainScene.showWinBigNode(e, this._resultSpin.SpinData.PayLinePrizeValue);
}, this)));
break;

case a.WINBIG.HUXU:
case a.WINBIG.THANGLON:
lngui.AudioManager.instance.pauseMusic();
lngui.AudioManager.instance.playSfx(i.default.instance.Bigwin, 1);
this._nodeCol[0].runAction(cc.sequence(cc.delayTime(.33), cc.callFunc(function() {
a.mainScene.showWinBigNode(e, this._resultSpin.SpinData.PayLinePrizeValue);
}, this)));
break;

case a.WINBIG.QUAYMIENPHI:
case a.WINBIG.BONUS:
default:
a.mainScene.showWinBigNode(e, this._resultSpin.SpinData.PayLinePrizeValue);
} else a.mainScene.showWinBigNode(e, this._resultSpin.SpinData.PayLinePrizeValue);
if (e === a.WINBIG.HUXU) {
this._autoSpin = !1;
this.spinSpeed = 1;
this.touchBtnTuQuay();
lngui.AudioManager.instance.pauseMusic();
lngui.AudioManager.instance.playSfx(i.default.instance.SuperBigwin, 1);
} else this._nodeCol[0].runAction(cc.sequence(cc.delayTime(n), cc.callFunc(function() {
this._resultSpin.BonusGame.BonusItemsData && a.mainScene.showMiniGameNode(this._resultSpin.BonusGame);
a.mainScene.hideWinBigDecorLayer();
this.commitSpinResult();
}, this)));
},
commitSpinResult: function() {
if (this._resultSpin) {
var e = 0;
try {
e = this._resultSpin.BonusGame.BonusItemsData[this._resultSpin.BonusGame.BonusItemsData.length - 1].PrizeValue;
} catch (e) {}
this.setPrizeValue(this._resultSpin.SpinData.PayLinePrizeValue + e);
if (this._isPlayTry) {
this.bmfBalance.setRealNumber(this._resultSpin.Account.TotalStar);
this.bmfJackpot.setRealNumber(this._resultSpin.SlotInfo.Jackpot);
a.jackpot[0] = this._resultSpin.SlotInfo.Jackpot;
} else {
this.bmfBalance.setRealNumber(this._resultSpin.Account.TotalStar);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this._resultSpin.Account.TotalStar);
a.jackpot[this.roomType] = this._resultSpin.SlotInfo.Jackpot;
this.setJackpot();
}
this._resultSpin && (this._freeSpin = this._resultSpin.SlotInfo.FreeSpins);
0 === this._resultSpin.SlotInfo.FreeSpins && this._resultSpin.SlotInfo.TotalFreeSpins > 0 && this._resultSpin.SlotInfo.TotalFreeSpinPrizeValue && a.mainScene.showDialogNotifyNode("Chúc mừng bạn đã quay được " + this._resultSpin.SlotInfo.TotalFreeSpins + " lượt miễn phí với tổng giải thưởng là " + s.formatNumber(this._resultSpin.SlotInfo.TotalFreeSpinPrizeValue) + " " + a.balanceUnitName);
this._resultSpin = null;
this.btnQuay.interactable = !0;
this.bgFreeSpin.active = this._freeSpin > 0;
this.bgFreeSpin && (this.lblFreeSpin.string = this._freeSpin);
this._nodeCol[0].runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
(this._freeSpin || this._autoSpin) && null == this._resultSpin && this.callSpin();
a.mainScene.hideWinBigNode();
this.showWonLine();
this.schedule(this.showWonLine, 1);
}, this)));
}
},
callSpin: function() {
if (a.mainScene._miniGameNode || null != this._resultSpin) a.mainScene.showDialogNotifyNode("Hiện đang trong tiến trình quay"); else {
this._resultSpin = 1;
this.btnQuay.interactable = !1;
this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
if (1 === this._resultSpin) {
this._resultSpin = null;
this.btnQuay.interactable = !0;
}
}, this)));
this._freeSpin ? s.sendSignalR("Spin", [ 25, 1 ]) : s.sendSignalR("Spin", [ this._chonDongNumberCounter, 1 ]);
}
},
showWonLine: function() {
if (!this._resultSpin && this._ItemArray && this._LineArray) {
var e = this._LineArray[0], t = this._ItemArray[0];
this._LineArray.splice(0, 1);
this._ItemArray.splice(0, 1);
for (var n = 1; n <= 25; n++) this._sprLine[n].active = !1;
for (n = 0; n < 5; n++) for (var i = 0; i < 3; i++) {
this._icons[n][i + this._nodeItemNumber - 3].stopAllActions();
this._icons[n][i + this._nodeItemNumber - 3].color = a.colorIconDim;
}
this._sprLine[e] && (this._sprLine[e].active = !0);
for (var o in t) {
var s = t[o];
n = (s - 1) % 5, i = Math.ceil((s - n - 10) / -5);
this._icons[n][i + this._nodeItemNumber - 3].color = cc.Color.WHITE;
}
this._LineArray.push(e);
this._ItemArray.push(t);
} else this.unschedule(this.showWonLine);
},
animationWait: function(e) {
e._tagSprite ? e.getComponent(cc.Sprite).spriteFrame = this.EffLight1 : e.getComponent(cc.Sprite).spriteFrame = this.EffLight2;
e._tagSprite = !e._tagSprite;
},
setPrizeValue: function(e) {
cc.js.isNumber(e) && this.bmfMoneyWin.setRealNumber(e);
},
setJackpot: function() {
this._isPlayTry || this.bmfJackpot.setRealNumber(a.jackpot[this.roomType]);
},
setBalance: function(e) {
if (!this._isPlayTry) {
e = e || lngui.UserManager.instance.mainUserInfo.Money;
this.bmfBalance.setRealNumber(e);
}
}
});
cc._RF.pop();
}, {
"./ThatTruyenAudioDefined": "ThatTruyenAudioDefined",
"TT.CustomBMFont": "TT.CustomBMFont",
ThatTruyenFunc: "ThatTruyenFunc",
ThatTruyenVar: "ThatTruyenVar"
} ],
ThatTruyenMainScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "7b897kq3a5C7YWRjDghTOgy", "ThatTruyenMainScene");
var n, i = (n = e("./ThatTruyenAudioDefined")) && n.__esModule ? n : {
default: n
}, o = e("ThatTruyenLobbyLayer"), a = e("ThatTruyenTopBarLayer"), s = e("ThatTruyenMainGame"), c = e("ThatTruyenVar"), r = e("ThatTruyenNetwork"), u = e("ThatTruyenFunc");
cc.Class({
extends: cc.Component,
properties: {
pnlLobby: o,
pnlTopbar: a,
pnlMainGame: s,
pnlEvent: cc.Node,
rtNotification: cc.Node,
IS_CLICK: null,
PreNoti: cc.Prefab,
PreWinBig: cc.Prefab,
PreMiniGame: cc.Prefab
},
onLoad: function() {
this.pnlLobby.node.active = !0;
this.pnlMainGame.node.active = !1;
c.api = {
url: "https://zeus." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr",
ip: "http://18.138.207.162:8002/signalr",
hub: "gamehub",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate
};
c.cookie = Global.cookie || "";
c.listenerStr = "ZomListener";
this._x2Data = {};
c.mainScene = this;
c.pnlLobby = this.pnlLobby;
c.pnlTopbar = this.pnlTopbar;
c.pnlMainGame = this.pnlMainGame;
this.setActived();
this.initZomWS();
},
onDestroy: function() {
cc.systemEvent.off(c.listenerStr, null, this);
},
showLobby: function() {
this.pnlLobby.show();
this.pnlLobby.setBalance();
this.pnlMainGame.hide();
},
showGamePlay: function(e) {
this.pnlLobby.hide();
this.pnlMainGame.showGamePlay(e);
},
initZomWS: function() {
lngui.UIWaitingLayout.showWaiting();
var e = this;
cc.systemEvent.off(c.listenerStr, null, this);
cc.systemEvent.on(c.listenerStr, function(t) {
e.onWebSockeZomllback(JSON.parse(t));
});
c._signalR = new r(c.listenerStr, c.api.url, c.api.hub, c.api.gate, c.cookie, c.api.ip);
c._signalR.connect();
},
onWebSockeZomllback: function(e) {
u.log("ZomX_WS_DATA: " + JSON.stringify(e));
if (e.M && Array.isArray(e.M) && 0 !== e.M.length) for (var t = e.M.length, n = 0; n < t; ++n) {
var i = e.M[n];
if (i.A) var o = i.A[0];
switch (i.M) {
case "open":
case "connect":
lngui.UIWaitingLayout.hideWaiting();
u.sendSignalR("GetEventJackpot");
this.schedule(function() {
u.sendSignalR("GetJackpotString");
}, 5);
break;

case "joinGame":
MvUtils.removeWaiting();
u.sendSignalR("StopX2Game");
this._x2Data = o.X2Game;
o.BonusGame.BonusItemsData && u.sendSignalR("PlayBonusGameAll");
if (this.pnlMainGame) {
this.pnlMainGame.bmfMoneyWin.setRealNumber(o.X2Game.PrizeValue);
this.pnlMainGame.parseSlotInfo(o.SlotInfo);
}
o.IsPlayTry ? this.pnlMainGame.bmfBalance.setRealNumber(o.Account.TotalStar) : this.pnlMainGame.bmfBalance.setRealNumber(lngui.UserManager.instance.mainUserInfo.Money);
break;

case "resultBonusGame":
o.TotalPrizeValue && this.showDialogNotifyNode("Bạn đã chiến thắng trong phần chơi Bonus: " + u.formatNumber(o.TotalPrizeValue) + " " + c.balanceUnitName, !0, 3);
break;

case "resultX2Game":
this._x2Data = o;
if (o.Balance) {
u.updateBalance(o.Balance);
this.pnlLobby.setBalance();
this.pnlMainGame.setBalance();
}
this._x2Node && this._x2Node.getComponent("ZomX2").parseData(o);
break;

case "message":
cc.js.isString(o) ? this.showDialogNotifyNode(o) : cc.js.isString(o.description) && this.showDialogNotifyNode(o.description);
break;

case "updateJackpot":
c.jackpot[o.RoomID] = o.Jackpot;
break;

case "AllGetJackPot":
case "jackpot":
var a = o.split("|");
c.jackpot = [ c.jackpot[0], parseInt(a[0]), parseInt(a[1]), parseInt(a[2]) ];
this.pnlMainGame && this.pnlMainGame.setJackpot();
this.pnlLobby.node.active && this.pnlLobby.setJackpot();
break;

case "resultSpin":
this.pnlMainGame && this.pnlMainGame.parseSpin(o);
break;

case "jackpotHistory":
case "statistic":
(s = this.pnlTopbar.node.getChildByName("" + c.TAG_LAYER.HONOR)) && s.getComponent("ThatTruyenPopupLichSuHu").parseData(o);
break;

case "history":
var s;
(s = this.pnlTopbar.node.getChildByName("" + c.TAG_LAYER.HISTORY)) && s.getComponent("ThatTruyenPopupLichSuGiaoDich").parseData(o);
break;

case "bonus":
this._miniGameNode && this._miniGameNode.parseMiniGame(o);
break;

case "finishBonus":
this._miniGameNode && this._miniGameNode.parseFinishBonus(o);
break;

case "eventJackpot":
console.log(o);
if (o && o.length > 0) {
if (1 == new Date().getDay()) {
c.IsEvent = !0;
this.pnlEvent.active = !0;
this.checkActionBtnSuKien(o);
}
} else {
this.pnlEvent.active = !1;
c.IsEvent = !1;
}
break;

case "notification":
c.vinhDanhInfo = o;
this._popupVinhDanh && this._popupVinhDanh.rcvInfo();
}
} else e.R && e.R.IsPlayTry && this.pnlMainGame.parseJoinTryPlay(e.R);
},
setActived: function() {
var e = this;
this.pnlEvent.on(cc.Node.EventType.TOUCH_START, function(t) {
e.IS_CLICK = !0;
var n = t.currentTarget, i = t.touch, o = n.convertToNodeSpace(i._point), a = n.getContentSize();
return !!cc.rect(0, 0, a.width, a.height).contains(o);
}, this);
this.pnlEvent.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
t.currentTarget;
var n = t.touch.getDelta();
e.pnlEvent.x += n.x;
e.pnlEvent.y += n.y;
e.IS_CLICK && (n.x > 20 || n.y > 20 || n.x < -20 && n.y < -20 ? e.IS_CLICK = !1 : e.IS_CLICK = !0);
}, this);
this.pnlEvent.on(cc.Node.EventType.TOUCH_END, function() {
e.IS_CLICK && e.touchPnlEvent();
}, this);
this.pnlEvent.on(cc.Node.EventType.MOUSE_MOVE, function() {
document.body.style.cursor = "pointer";
}, this);
this.pnlEvent.on(cc.Node.EventType.MOUSE_LEAVE, function() {
document.body.style.cursor = "auto";
});
},
touchPnlEvent: function() {
var e = cc.director.getScene();
e.getChildByName("event") || cc.loader.loadRes("Gate/Event/EventPopup", function(t, n) {
if (!e.getChildByName("event")) {
var i = new cc.instantiate(n);
i.x = cc.director.getWinSize().width / 2;
i.y = cc.director.getWinSize().height / 2;
e.addChild(i, Global.localZIndexPopup, "event");
i.getComponent("EventPopup").setEventTab(6);
i.getComponent("EventPopup").show(1);
}
});
},
checkActionBtnSuKien: function(e) {
for (var t = 0; t < e.length; t++) {
var n = e[t];
console.log(n.Jackpots);
1 == n.RoomID && (this.pnlEvent.getChildByName("eventBar").getChildByName("lblHu100").string = "111");
2 == n.RoomID && (this.pnlEvent.getChildByName("eventBar").getChildByName("lblHu1000").string = n.Jackpots + " HŨ");
3 == n.RoomID && (this.pnlEvent.getChildByName("eventBar").getChildByName("lblHu10000").string = n.Jackpots + " HŨ");
}
},
showDialogNotifyNode: function(e, t, n) {
console.log("-=-=showDialogNotifyNode   ", e);
if (this._dialogNotifyNode) {
this._dialogNotifyNode.active = !0;
this._dialogNotifyNode.getComponent("ThatTruyenPopupNotify").setMsg(e, t, n);
} else {
this._dialogNotifyNode = cc.instantiate(this.PreNoti);
this.node.addChild(this._dialogNotifyNode, c.zOrder_Popup);
this._dialogNotifyNode.getComponent("ThatTruyenPopupNotify").setMsg(e, t, n);
}
},
showWinBigNode: function(e, t) {
if (this._winBig) this._winBig.getComponent("ThatTruyenWinBig").showLayer(e, t); else if (!this._winBig) {
this._winBig = cc.instantiate(this.PreWinBig);
c.pnlMainGame.node.addChild(this._winBig, c.zOrder_Win);
this._winBig.getComponent("ThatTruyenWinBig").showLayer(e, t);
}
},
showMiniGameNode: function(e) {
if (!this._miniGameNode && !this._miniGameNode) {
this._miniGameNode = cc.instantiate(this.PreMiniGame);
this._miniGameNode.getComponent("ThatTruyenMiniGame").parseMiniGame(e);
this.node.addChild(this._miniGameNode, c.zOrder_MiniGame);
}
},
closeMiniGameNode: function() {
if (this._miniGameNode) {
this._miniGameNode.removeFromParent();
this._miniGameNode = null;
}
u.sendSignalR("PlayBonusGameAll");
(this.pnlMainGame._freeSpin || this.pnlMainGame._autoSpin) && this.pnlMainGame.callSpin();
this.pnlMainGame.spinSpeed > 1 ? lngui.AudioManager.instance.playSfx(i.default.instance.BG_spinspeed, 1) : lngui.AudioManager.instance.playSfx(i.default.instance.BG_game, 1);
},
showX2Node: function() {
this._x2Node || cc.loader.loadRes("ThatTruyen/ThatTruyenX2Node", function(e, t) {
if (!this._x2Node) {
this._x2Node = cc.instantiate(t);
this.node.addChild(this._x2Node, c.zOrder_MiniGame);
}
}.bind(this));
},
closeX2Node: function() {
if (this._x2Node) {
this._x2Node.removeFromParent();
this._x2Node = null;
}
(c.pnlMainGame._freeSpin || c.pnlMainGame._autoSpin) && c.pnlMainGame.callSpin();
},
hideWinBigDecorLayer: function() {
this._winBig && this._winBig.active && this._winBig.getComponent("ThatTruyenWinBig").hideDecorLayer();
},
hideWinBigNode: function() {
this._winBig && this._winBig.active && this._winBig.getComponent("ThatTruyenWinBig").hideLayer();
}
});
cc._RF.pop();
}, {
"./ThatTruyenAudioDefined": "ThatTruyenAudioDefined",
ThatTruyenFunc: "ThatTruyenFunc",
ThatTruyenLobbyLayer: "ThatTruyenLobbyLayer",
ThatTruyenMainGame: "ThatTruyenMainGame",
ThatTruyenNetwork: "ThatTruyenNetwork",
ThatTruyenTopBarLayer: "ThatTruyenTopBarLayer",
ThatTruyenVar: "ThatTruyenVar"
} ],
ThatTruyenMiniGame: [ function(e, t) {
"use strict";
cc._RF.push(t, "d3aa1+HPGNLELVSjCIEPI9d", "ThatTruyenMiniGame");
var n;
(n = e("./ThatTruyenAudioDefined")) && n.__esModule;
var i = e("ThatTruyenVar"), o = e("ThatTruyenFunc");
cc.Class({
extends: cc.Component,
properties: {
m_pnlPhase1: cc.Node,
m_pnlPhase2: cc.Node,
m_pnlPhase3: cc.Node,
m_txtTimer: cc.Node,
txtTotalPrizeValueJumpEffect: cc.Node,
txtTotalPrizeValue: cc.Node,
m_nodeSpine: [ cc.Node ]
},
onLoad: function() {
this._pnlMiniObj = [];
this._timer = 15;
this.m_txtTimer.getComponent(cc.Label).string = this._timer;
this.schedule(this.timerEnd, 1);
this.txtTotalPrizeValueJumpEffect.getComponent(cc.Label).string = 0;
for (var e = 0; e < 12; e++) {
var t = this.m_pnlPhase1.getChildByName("miniObjNode_" + e);
t.tagName = e;
t.getChildByName("anim").getComponent(sp.Skeleton).setAnimation(0, "Idle", !0);
t.getChildByName("nodeFail").active = !1;
t.getChildByName("nodePrize").active = !1;
var n = t.getChildByName("pnlOpen");
n.tagName = e;
n.on(cc.Node.EventType.TOUCH_END, this.touchPnlOpen.bind(this));
t.nodeOpen = t.getChildByName("anim").getComponent(sp.Skeleton);
t.txtPrizeJumpEffect = t.getChildByName("nodePrize").getChildByName("txtPrize");
t.txtPrizeJumpEffect.active = !1;
this._pnlMiniObj.push(t);
}
this._pnlXObj = [];
this.txtTotalPrizeJumpEffect = this.m_pnlPhase3.getChildByName("txtTotalPrize");
this.m_pnlPhase1.active = !0;
this.m_pnlPhase2.active = !1;
this.m_pnlPhase3.active = !1;
},
touchBtnClose: function() {
i.mainScene.closeMiniGameNode();
},
touchPnlOpen: function(e) {
for (var t = this, n = 0; n < 12; n++) if (0 !== this._pnlMiniObj[n].getNumberOfRunningActions()) return;
if (!this._isMiniOpened) {
e.interactable = !1;
var a = e.target.tagName;
if (!this._pnlMiniObj[a].flagOpened) {
this._pnlMiniObj[a].flagOpened = !0;
var s = this.bonusData.BonusItemsData.shift();
if (s.PrizeValue > 0) {
this._timer = 15;
this.m_txtTimer.string = this._timer > 0 ? this._timer : "0";
e.target.parent.nodeOpen.setAnimation(0, "Attack", !1);
setTimeout(function() {
t._pnlMiniObj[a].getChildByName("nodePrize").active = !0;
t._pnlMiniObj[a].txtPrizeJumpEffect.getComponent(cc.Label).string = s.PrizeValue * s.Multiplier;
t.txtTotalPrizeValueJumpEffect.getComponent(cc.Label).string = parseInt(t.txtTotalPrizeValueJumpEffect.getComponent(cc.Label).string) + s.PrizeValue * s.Multiplier;
var e = t._pnlMiniObj[a].txtPrizeJumpEffect;
e.stopAllActions();
e.active = !0;
e.y -= 30;
e.opacity = 255;
e.setScale(0);
e.runAction(cc.spawn(cc.scaleTo(1, 1).easing(cc.easeElasticOut()), cc.moveBy(.2, 0, 30)));
}, 1e3);
} else {
this._timer = -1e3;
this._isMiniOpened = !0;
e.target.parent.nodeOpen.setAnimation(0, "Attack", !1);
setTimeout(function() {
t._pnlMiniObj[a].getChildByName("nodeFail").active = !0;
t.m_pnlPhase1.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
o.sendSignalR("PlayBonusGameAll");
this.m_pnlPhase1.active = !1;
this.m_pnlPhase2.active = !1;
this.m_pnlPhase3.active = !0;
this.txtTotalPrizeValue.getComponent(cc.Label).string = this.miniPrizeValue;
o.sendSignalR("PlayBonusGameAll");
lngui.UserManager.instance.mainUserInfo.Money = lngui.UserManager.instance.mainUserInfo.Money + this.miniPrizeValue;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
}, t), cc.delayTime(5.5), cc.callFunc(function() {}, t)));
}, 1e3), cc.delayTime(5.5), cc.callFunc(function() {
i.mainScene.closeMiniGameNode();
}, this);
}
}
}
},
timerEnd: function() {
this._timer--;
this.m_txtTimer.getComponent(cc.Label).string = this._timer > 0 ? this._timer : "0";
if (0 === this._timer) {
o.sendSignalR("PlayBonusGameAll");
this.m_pnlPhase3.active = !0;
this.txtTotalPrizeJumpEffect.getComponent(cc.Label).string = this.miniPrizeValue;
this.node.runAction(cc.sequence(cc.delayTime(5.5), cc.callFunc(function() {
i.mainScene.closeMiniGameNode();
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
}, this)));
}
-3 === this._timer && i.mainScene.closeMiniGameNode();
},
parseMiniGame: function(e) {
this.bonusData = e;
this.miniPrizeValue = e.BonusItemsData[e.BonusItemsData.length - 1].PrizeValue;
},
parseFinishBonus: function() {}
});
cc._RF.pop();
}, {
"./ThatTruyenAudioDefined": "ThatTruyenAudioDefined",
ThatTruyenFunc: "ThatTruyenFunc",
ThatTruyenVar: "ThatTruyenVar"
} ],
ThatTruyenNetwork: [ function(e, t) {
"use strict";
cc._RF.push(t, "f6a17mTYm1LIJXOR+5SgiHa", "ThatTruyenNetwork");
var n = n || window.WebSocket || window.MozWebSocket, i = cc.Class({
extends: cc.Component,
properties: {
_socketIndex: {
default: 0
},
_mvWebSocket: {
default: null
},
_currentData: {
default: ""
},
_eventName: {
default: ""
},
_url: {
default: ""
},
_hub: {
default: ""
},
_cookie: {
default: ""
},
_state: {
default: null
},
_isReconnect: {
default: !1
},
_isEndMsg: {
default: !1
},
loopConnect: 0
},
__ctor__: function(e, t, n, i, o) {
this._socketIndex = 0;
this._mvWebSocket = null;
this._currentData = "";
this._eventName = e;
this._url = t;
this._hub = n;
this._ip = o;
this._isReconnect = !1;
null != i && (this._cookie = i);
this._state = 0;
},
getState: function() {
return this._state;
},
connect: function(e) {
null != e && (this._isReconnect = e);
var t = this, n = this._url + "/negotiate", i = new XMLHttpRequest();
i.onreadystatechange = function() {
if (4 == i.readyState && 200 == i.status) {
Global.log(i.responseText);
var e = JSON.parse(i.responseText), n = t._url;
n = (n = n.replace("https://", "wss://")).replace("http://", "ws://");
t._isReconnect ? n += "/reconnect" : n += "/connect";
cc.log(t._hub);
n += "?transport=webSockets&connectionToken=" + encodeURIComponent(e.ConnectionToken) + "&connectionData=" + encodeURIComponent('[{"name":"' + t._hub + '"}]') + "&tid=" + MvUtils.random(1, 11) + "&access_token=" + encodeURIComponent(lngui.UserManager.instance.mainUserInfo.GameToken);
cc.log("---\x3e " + n);
t.connectWS(n);
t.loopConnect = 0;
}
};
i.ontimeout = function() {
if (0 == t.loopConnect) {
t.loopConnect += 1;
t.connect();
} else {
t._state = 4;
cc.systemEvent.emit(t._eventName, {
M: [ {
M: "error"
} ]
});
}
};
i.onerror = function() {
if (0 == t.loopConnect) {
t.loopConnect += 1;
t.connect();
} else {
t._state = 4;
cc.systemEvent.emit(t._eventName, {
M: [ {
M: "error"
} ]
});
}
};
i.timeout = 3e4;
i.open("GET", n, !0);
i.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
cc.sys.isNative ? i.setRequestHeader("cookie", "") : i.withCredentials = !0;
i.send();
},
reconnect: function() {
this.connect(!0);
},
connectWS: function(e) {
this._socketIndex = 0;
this._currentData = "";
this.close();
this._mvWebSocket = cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? this.ws = new n(e, [], cc.url.raw("resources/cacert.pem")) : new n(e);
var t = this;
this._mvWebSocket.onopen = function() {
t._state = 1;
cc.systemEvent.emit(t._eventName, '{"M": [{"M": "open"}]}');
};
this._mvWebSocket.onmessage = function(e) {
if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
if (!t._isEndMsg) {
t._currentData += e.data;
try {
JSON.parse(t._currentData);
t._isEndMsg = !0;
} catch (e) {
return;
}
}
t._isEndMsg && t.processMessage(t._currentData);
} else t.processMessage(e.data);
};
this._mvWebSocket.onerror = function() {
t._state = 4;
cc.systemEvent.emit(t._eventName, '{"M": [{"M": "error"}]}');
};
this._mvWebSocket.onclose = function() {
t._state = 3;
cc.systemEvent.emit(t._eventName, '{"M": [{"M": "close"}]}');
};
},
send: function(e, t) {
if (null != this._mvWebSocket && 1 == this._state) {
var n = JSON.stringify({
H: this._hub,
M: e,
A: t,
I: this._socketIndex++
});
this._mvWebSocket.send(n);
}
},
pingPong: function() {
this.send("PingPong", []);
},
close: function() {
if (this._mvWebSocket) {
this._mvWebSocket.close();
this._mvWebSocket = null;
}
},
processMessage: function(e) {
try {
cc.systemEvent.emit(this._eventName, e);
this._currentData = "";
this._isEndMsg = !1;
} catch (e) {}
}
});
t.exports = i;
cc._RF.pop();
}, {} ],
ThatTruyenPopupHelp: [ function(e, t) {
"use strict";
cc._RF.push(t, "fe783ZocENJKZF3VKSkUMdD", "ThatTruyenPopupHelp");
var n = e("TT.BasePopup");
cc.Class({
extends: n,
properties: {
pvPage: cc.PageView
},
touchBtnPage: function(e, t) {
if (1 == t) (n = this.pvPage.getCurrentPageIndex()) < this.pvPage.getPages().length - 1 && this.pvPage.setCurrentPageIndex(n + 1); else {
var n;
(n = this.pvPage.getCurrentPageIndex()) > 0 && this.pvPage.setCurrentPageIndex(n - 1);
}
}
});
cc._RF.pop();
}, {
"TT.BasePopup": "TT.BasePopup"
} ],
ThatTruyenPopupLichSuGiaoDich: [ function(e, t) {
"use strict";
cc._RF.push(t, "1044cy67tVO7qh+HMhfZtX/", "ThatTruyenPopupLichSuGiaoDich");
var n, i = (n = e("./ThatTruyenAudioDefined")) && n.__esModule ? n : {
default: n
}, o = e("TT.BasePopup"), a = e("ThatTruyenFunc");
cc.Class({
extends: o,
properties: {
pnlList: cc.Node,
pnlDetail: cc.Node,
btnPages: [ cc.Button ],
currentPage: 1,
MAX_PAGE: 4,
contentLV: cc.Node,
pnlTitle: cc.Node,
lvContent: cc.ScrollView,
lblTurn: cc.Label,
lblQThang: cc.Label,
spriteFrameList: [ cc.SpriteFrame ],
iconEff: [ sp.SkeletonData ]
},
onLoad: function() {
this.itemPerPage = 8;
var e = this.pnlDetail.getChildByName("pnlSlotNode").getChildByName("pnlSlot");
this._icons = [];
this._iconsPos = [];
this._nodeCol = [];
this._nodeItemDistant = 164;
this._nodeItemBottomPos = -this._nodeItemDistant;
this._nodeItemNumber = 3;
for (var t = 0; t < 5; t++) {
this._icons[t] = [];
this._iconsPos[t] = [];
this._nodeCol[t] = e.getChildByName("nodeCol" + t);
this._nodeCol[t].y -= (this._nodeItemNumber - 3) * this._nodeItemDistant;
for (var n = 0; n < this._nodeItemNumber; n++) this._iconsPos[t][n] = cc.v2(0, this._nodeItemBottomPos + this._nodeItemDistant * n);
}
},
touchBtnPage: function(e, t) {
lngui.AudioManager.instance.playSfx(i.default.instance.ClickSound, 1);
this.currentPage = Number(t);
for (var n = 0; n < this.btnPages.length; n++) this.btnPages[n] !== e && (this.btnPages[n].interactable = !0);
e.interactable = !1;
this.onChangePage();
},
touchBtnNextPre: function(e, t) {
lngui.AudioManager.instance.playSfx(i.default.instance.ClickSound, 1);
if (1 == t) {
this.currentPage--;
this.currentPage < 0 && (this.currentPage = this.MAX_PAGE - 1);
} else {
this.currentPage++;
this.currentPage > this.MAX_PAGE - 1 && (this.currentPage = 0);
}
this.onChangePage();
},
touchBtnDetail: function(e, t) {
this.pnlList.active = !1;
this.pnlDetail.active = !0;
this.lblQThang.string = a.formatNumber(t.TotalPrizeValue);
this.lblQThang.node.getChildByName("imgCoin").x = this.lblQThang.node.width + 20;
this.lblTurn.string = "Phiên : #" + t.SessionID;
for (var n = JSON.parse(t.SlotsData), i = 0; i < 5; i++) for (var o = 0; o < this._nodeItemNumber; o++) {
this._icons[i][o] && this._icons[i][o].removeFromParent();
this._icons[i][o] = new cc.Node();
this._icons[i][o].addComponent(cc.Sprite).spriteFrame = this.spriteFrameList[n[i + (10 - 5 * o)]];
this._icons[i][o].setPosition(this._iconsPos[i][o].x, this._iconsPos[i][o].y + 500);
this._nodeCol[i].addChild(this._icons[i][o]);
this._icons[i][o].runAction(cc.sequence(cc.delayTime(.1), cc.moveTo(.3, this._iconsPos[i][o]).easing(cc.easeBounceOut())));
}
},
touchBtnBack: function() {
this.pnlList.active = !0;
this.pnlDetail.active = !1;
},
onChangePage: function() {
this.contentLV.removeAllChildren();
if (this.arrayData) {
for (var e = this.itemPerPage * this.currentPage; e < this.itemPerPage * (this.currentPage + 1) && this.arrayData[e]; e++) this.updateToListView(this.arrayData[e], e);
this.lvContent.scrollToTop(.1);
}
},
parseData: function(e) {
e = e.Results;
this.arrayData = [];
if (e.length > 0) {
for (var t = 0; t < e.length; t++) this.arrayData.push(e[t]);
this.resetPagination();
}
},
resetPagination: function() {
this.currentPage = 0;
this.onChangePage();
},
updateToListView: function(e) {
var t = new cc.instantiate(this.pnlTitle);
t.getChildByName("txtPhien").color = cc.Color.WHITE;
t.getChildByName("txtThoiGian").color = cc.Color.WHITE;
t.getChildByName("txtQbet").color = cc.Color.YELLOW;
t.getChildByName("txtThang").color = cc.Color.YELLOW;
t.getChildByName("txtChiTiet").active = !1;
t.getChildByName("btnChiTiet").active = !0;
t.getChildByName("btnChiTiet").getComponent(cc.Button).clickEvents[0].customEventData = e;
t.getChildByName("txtPhien").getComponent(cc.Label).string = e.SessionID;
t.getChildByName("txtThoiGian").getComponent(cc.Label).string = a.formatDateTime(e.CreatedDate, !0, !0);
t.getChildByName("txtQbet").getComponent(cc.Label).string = e.BetValue;
t.getChildByName("txtThang").getComponent(cc.Label).string = a.formatNumber(e.TotalPrizeValue);
this.contentLV.addChild(t);
}
});
cc._RF.pop();
}, {
"./ThatTruyenAudioDefined": "ThatTruyenAudioDefined",
"TT.BasePopup": "TT.BasePopup",
ThatTruyenFunc: "ThatTruyenFunc"
} ],
ThatTruyenPopupLichSuHu: [ function(e, t) {
"use strict";
cc._RF.push(t, "31266m+OtdMYr+/zFCHyKab", "ThatTruyenPopupLichSuHu");
var n, i = (n = e("./ThatTruyenAudioDefined")) && n.__esModule ? n : {
default: n
}, o = e("TT.BasePopup"), a = e("ThatTruyenFunc"), s = e("ThatTruyenVar");
cc.Class({
extends: o,
properties: {
btnPages: [ cc.Button ],
currentPage: 1,
MAX_PAGE: 4,
contentLV: cc.Node,
pnlTitle: cc.Node,
lvContent: cc.ScrollView
},
onLoad: function() {
this.itemPerPage = 7;
},
touchBtnPage: function(e, t) {
lngui.AudioManager.instance.playSfx(i.default.instance.ClickSound, 1);
this.currentPage = Number(t);
for (var n = 0; n < this.btnPages.length; n++) this.btnPages[n] !== e && (this.btnPages[n].interactable = !0);
e.interactable = !1;
this.onChangePage();
},
touchBtnNextPre: function(e, t) {
lngui.AudioManager.instance.playSfx(i.default.instance.ClickSound, 1);
if (1 == t) {
this.currentPage--;
this.currentPage < 0 && (this.currentPage = this.MAX_PAGE - 1);
} else {
this.currentPage++;
this.currentPage > this.MAX_PAGE - 1 && (this.currentPage = 0);
}
this.onChangePage();
},
touchBtnLsHu: function(e, t) {
lngui.AudioManager.instance.playSfx(i.default.instance.button_click, 1);
1 == t ? s._signalR.send("GetStatistic", [ !1 ]) : a.sendSignalR("GetStatistic", !0);
},
parseData: function(e) {
console.log(e);
e = e;
this.arrayData = [];
if (e.length > 0) {
for (var t = 0; t < e.length; t++) this.arrayData.push(e[t]);
this.resetPagination();
}
},
resetPagination: function() {
this.currentPage = 0;
this.onChangePage();
},
onChangePage: function() {
this.contentLV.removeAllChildren();
if (this.arrayData) {
for (var e = this.itemPerPage * this.currentPage; e < this.itemPerPage * (this.currentPage + 1) && this.arrayData[e]; e++) this.updateToListView(this.arrayData[e], e);
this.lvContent.scrollToTop(.1);
}
},
updateToListView: function(e) {
var t = new cc.instantiate(this.pnlTitle);
t.getChildByName("txtPhien").color = cc.Color.WHITE;
t.getChildByName("txtThoiGian").color = cc.Color.WHITE;
t.getChildByName("txtTenTaiKhoan").color = cc.Color.WHITE;
t.getChildByName("txtThang").color = cc.Color.YELLOW;
t.getChildByName("txtMoTa").color = cc.Color.WHITE;
t.getChildByName("txtPhien").getComponent(cc.Label).string = e.SpinID;
t.getChildByName("txtThoiGian").getComponent(cc.Label).string = a.formatDateTime(e.CreatedTime, !0, !0);
t.getChildByName("txtTenTaiKhoan").getComponent(cc.Label).string = e.Username;
t.getChildByName("txtThang").getComponent(cc.Label).string = a.formatNumber(e.PrizeValue);
t.getChildByName("txtMoTa").getComponent(cc.Label).string = 1 == e.IsJackpot ? "Nổ hũ" : "Thắng lớn";
this.contentLV.addChild(t);
}
});
cc._RF.pop();
}, {
"./ThatTruyenAudioDefined": "ThatTruyenAudioDefined",
"TT.BasePopup": "TT.BasePopup",
ThatTruyenFunc: "ThatTruyenFunc",
ThatTruyenVar: "ThatTruyenVar"
} ],
ThatTruyenPopupNotify: [ function(e, t) {
"use strict";
cc._RF.push(t, "1c01a9s7eNL1pky/gO5rabw", "ThatTruyenPopupNotify");
cc.Class({
extends: cc.Component,
properties: {
pnlMid: cc.Node,
lblMessage: cc.Label
},
setMsg: function(e, t, n) {
e = e || "";
n = n || !0;
t = t || 3.5;
this.lblMessage.string = e;
this.pnlMid.stopAllActions();
this.pnlMid.opacity = 0;
var i = this;
this.pnlMid.runAction(cc.sequence(cc.fadeIn(.25), cc.delayTime(t), cc.fadeOut(.5), cc.callFunc(function() {
i.node.active = !1;
})));
}
});
cc._RF.pop();
}, {} ],
ThatTruyenTopBarLayer: [ function(e, t) {
"use strict";
cc._RF.push(t, "79ce4JQWxpJ+LKtAK4PT54O", "ThatTruyenTopBarLayer");
var n;
(n = e("./ThatTruyenAudioDefined")) && n.__esModule;
var i = e("ThatTruyenFunc"), o = e("ThatTruyenVar");
cc.Class({
extends: cc.Component,
properties: {
isShowSetting: !1,
btnSetting: cc.Node,
btnHistory: cc.Node,
btnSound: cc.Node,
btnMusic: cc.Node,
PreLichSu: cc.Prefab,
PreVinhDanh: cc.Prefab,
PreTheLe: cc.Prefab,
IsSoundOn: cc.SpriteFrame,
IsSoundOff: cc.SpriteFrame,
IsMusicOn: cc.SpriteFrame,
IsMusicOff: cc.SpriteFrame
},
onLoad: function() {
this.btnSound.originPos = this.btnSound.getPosition();
this.btnMusic.originPos = this.btnMusic.getPosition();
this.btnSound.active = !1;
this.btnMusic.active = !1;
},
touchBtnBack: function() {
if (o.pnlMainGame.btnQuay.interactable && o.pnlMainGame.isBtnClickable()) if (o.pnlMainGame.node.active) {
o.pnlMainGame.node.active = !1;
o.pnlLobby.node.active = !0;
lngui.AudioManager.instance.pauseMusic();
} else {
lngui.AudioManager.instance.pauseMusic();
lngui.GameCoreManager.instance.onBackToLobby();
} else o.mainScene.showDialogNotifyNode("Dừng quay trước khi thoát game !!!", !0, 3);
},
touchBtnHonor: function() {
if (!this.node.getChildByName("" + o.TAG_LAYER.HONOR) && !this.node.getChildByName("" + o.TAG_LAYER.HONOR)) {
var e = cc.instantiate(this.PreVinhDanh);
this.node.addChild(e, o.zOrder_Popup, "" + o.TAG_LAYER.HONOR);
e.getComponent("ThatTruyenPopupLichSuHu").show();
o._signalR.send("GetStatistic", [ !1 ]);
}
},
touchBtnHelp: function() {
if (!this.node.getChildByName("" + o.TAG_LAYER.HELP) && !this.node.getChildByName("" + o.TAG_LAYER.HELP)) {
var e = new cc.instantiate(this.PreTheLe);
this.node.addChild(e, o.zOrder_Popup, "" + o.TAG_LAYER.HELP);
e.getComponent("ThatTruyenPopupHelp").show();
}
},
touchBtnSetting: function() {
this.isShowSetting = !this.isShowSetting;
this.showSetting(this.isShowSetting);
},
touchBtnHistory: function() {
if (!this.node.getChildByName("" + o.TAG_LAYER.HISTORY) && !this.node.getChildByName("" + o.TAG_LAYER.HISTORY)) {
var e = new cc.instantiate(this.PreLichSu);
this.node.addChild(e, o.zOrder_Popup, "" + o.TAG_LAYER.HISTORY);
e.getComponent("ThatTruyenPopupLichSuGiaoDich").show();
i.sendSignalR("GetHistory");
}
},
touchBtnSound: function() {
if (1 == lngui.AudioManager.instance.sfxVolume) {
this.btnSound.getComponent(cc.Sprite).spriteFrame = this.IsSoundOff;
lngui.AudioManager.instance.sfxVolume = 0;
} else {
this.btnSound.getComponent(cc.Sprite).spriteFrame = this.IsSoundOn;
lngui.AudioManager.instance.sfxVolume = 1;
}
},
touchBtnMusic: function() {
if (1 == lngui.AudioManager.instance.musicVolume) {
this.btnMusic.getComponent(cc.Sprite).spriteFrame = this.IsMusicOff;
lngui.AudioManager.instance.musicVolume = 0;
} else {
this.btnMusic.getComponent(cc.Sprite).spriteFrame = this.IsMusicOn;
lngui.AudioManager.instance.musicVolume = 1;
}
},
showSetting: function(e) {
if (e) {
this.btnSound.active = !0;
this.btnMusic.active = !0;
this.btnSound.y = this.btnSound.y;
this.btnMusic.y = this.btnMusic.y;
this.btnSound.runAction(cc.sequence(cc.delayTime(.1), cc.show(), cc.moveTo(.3, this.btnSound.originPos).easing(cc.easeElasticOut())));
this.btnMusic.runAction(cc.sequence(cc.delayTime(.2), cc.show(), cc.moveTo(.3, this.btnMusic.originPos).easing(cc.easeElasticOut())));
this._timeOutHide && clearTimeout(this._timeOutHide);
this._timeOutHide = setTimeout(function() {
this.showSetting(!1);
}.bind(this), 5e3);
} else {
this.btnSound.runAction(cc.sequence(cc.delayTime(.1), cc.moveTo(.3, this.btnSetting.getPosition()).easing(cc.easeElasticIn()), cc.callFunc(function() {
this.btnSound.active = !1;
}, this)));
this.btnMusic.runAction(cc.sequence(cc.delayTime(0), cc.moveTo(.3, this.btnSetting.getPosition()).easing(cc.easeElasticIn()), cc.callFunc(function() {
this.btnMusic.active = !1;
}, this)));
}
this.isShowSetting = e;
}
});
cc._RF.pop();
}, {
"./ThatTruyenAudioDefined": "ThatTruyenAudioDefined",
ThatTruyenFunc: "ThatTruyenFunc",
ThatTruyenVar: "ThatTruyenVar"
} ],
ThatTruyenVar: [ function(e, t) {
"use strict";
cc._RF.push(t, "cd4dfnkn7hK0Ia0v+yBRu3e", "ThatTruyenVar");
var n = n || {};
n.resPath = "ThatTruyen/";
n.balanceUnitName = "Coin";
n.colorIconDim = cc.Color.WHITE;
n.shakeTime = .0225;
n.shakeRange = 8;
n.shakeRepeatTime = 16;
n.zOrder_Win = 50;
n.zOrder_MiniGame = 51;
n.zOrder_Menu = 149;
n.zOrder_Popup = 150;
n.zOrder_Guide = 1e3;
n.zOrder_ImgBg = -1;
n.zOrder_NapXu = 148;
n.REQUEST_ERROR = -872;
n.REQUEST_TIMEOUT = -873;
n.WINBIG = {
QUAYMIENPHI: 2,
BONUS: 3,
GIAUTO: 4,
THANGLON: 5,
HUXU: 6
};
n.TAG_LAYER = {
HELP: 0,
HONOR: 1,
HISTORY: 2
};
t.exports = n;
cc._RF.pop();
}, {} ],
ThatTruyenWinBig: [ function(e, t) {
"use strict";
cc._RF.push(t, "0860c3EvPROB7TT0H2LEMhw", "ThatTruyenWinBig");
var n, i = (n = e("./ThatTruyenAudioDefined")) && n.__esModule ? n : {
default: n
};
e("TT.CustomBMFont");
var o = e("ThatTruyenVar");
cc.Class({
extends: cc.Component,
properties: {
layoutTouchable: cc.Node,
skeletonDatas: [ sp.SkeletonData ]
},
onLoad: function() {
this.initLayoutTouchable();
this._pnlMid = this.node.getChildByName("pnlMid");
this._pnlDecor = this._pnlMid.getChildByName("pnlDecor");
this.node_GiauTo = this._pnlDecor.getChildByName("node_GiauTo");
this.node_NoHu = this._pnlDecor.getChildByName("node_NoHu");
this.node_ThangLon = this._pnlDecor.getChildByName("node_ThangLon");
this.node_MienPhi = this._pnlDecor.getChildByName("node_MienPhi");
this.node_Minigame = this._pnlDecor.getChildByName("node_Minigame");
this.bmfXuType1 = this._pnlMid.getChildByName("bmfXuType1");
this.bmfXuType1.getComponent("TT.CustomBMFont").setDuration(1);
this.bmfXuType1.defaultPos = this.bmfXuType1.getPosition();
this.bmfXuType1.centerPos = this.bmfXuType1.defaultPos;
cc.log(this.bmfXuType1.centerPos);
},
initLayoutTouchable: function() {
this.grapColor = this.layoutTouchable.addComponent(cc.Graphics);
this.grapColor.lineWidth = 0;
},
update: function() {
this.grapColor.clear();
this.grapColor.fillColor = new cc.Color(0, 0, 0, 51);
this.grapColor.fillRect(-this.layoutTouchable.width / 2, -this.layoutTouchable.height / 2, this.layoutTouchable.width, this.layoutTouchable.height);
},
hideDecorChild: function() {
this.node_GiauTo.active = !1;
this.node_NoHu.active = !1;
this.node_ThangLon.active = !1;
this.node_MienPhi.active = !1;
this.node_Minigame.active = !1;
this.bmfXuType1.active = !1;
this.bmfXuType1.getComponent("TT.CustomBMFont").setRealNumber(0);
this.node_GiauTo.bmfXuTypeJumpEffect && this.node_GiauTo.bmfXuTypeJumpEffect.getComponent("TT.CustomBMFont").setRealNumber(0);
this.node_NoHu.bmfXuTypeJumpEffect && this.node_NoHu.bmfXuTypeJumpEffect.getComponent("TT.CustomBMFont").setRealNumber(0);
this.node_ThangLon.bmfXuTypeJumpEffect && this.node_ThangLon.bmfXuTypeJumpEffect.getComponent("TT.CustomBMFont").setRealNumber(0);
},
hideLayer: function() {
this.layoutTouchable.runAction(cc.fadeOut(.3));
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
this.bmfXuType1.getComponent("TT.CustomBMFont").setRealNumber(0);
this.node.active = !1;
this.hideDecorChild();
}, this)));
},
hideDecorLayer: function() {
this.bmfToCenterPosAction();
this.layoutTouchable.stopAllActions();
this.layoutTouchable.runAction(cc.fadeOut(.3));
this._pnlDecor.stopAllActions();
this._pnlDecor.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
this.layoutTouchable.active = !1;
this._pnlDecor.active = !1;
}, this)));
},
showLayer: function(e, t) {
this.hideDecorChild();
this.layoutTouchable.active = !0;
this._pnlDecor.active = !0;
this.node.active = !0;
this.bmfXuType1.active = !1;
this.bmfXuType1.setPosition(this.bmfXuType1.defaultPos);
switch (e) {
case o.WINBIG.QUAYMIENPHI:
this.showQuayMienPhi(t);
break;

case o.WINBIG.BONUS:
this.showBonus(t);
break;

case o.WINBIG.GIAUTO:
this.showGiauTo(t);
lngui.AudioManager.instance.playSfx(i.default.instance.SuperBigwin, 1);
break;

case o.WINBIG.THANGLON:
this.showThangLon(t);
lngui.AudioManager.instance.playSfx(i.default.instance.Bigwin, 1);
break;

case o.WINBIG.HUXU:
this.showHuXu(t);
lngui.AudioManager.instance.playSfx(i.default.instance.Jackpot, 1);
break;

default:
this.bmfXuType1.setPosition(this.bmfXuType1.centerPos);
this.layoutTouchable.active = !1;
this._pnlDecor.active = !1;
this.useBmfXu(t);
t ? lngui.AudioManager.instance.playSfx(i.default.instance.Andiem, 1) : lngui.AudioManager.instance.playSfx(i.default.instance.Fail, 1);
}
this.node.active = !0;
this.layoutTouchable.stopAllActions();
this._pnlDecor.stopAllActions();
this.node.stopAllActions();
this.layoutTouchable.runAction(cc.fadeIn(.3));
this._pnlDecor.runAction(cc.fadeIn(.3));
this.node.runAction(cc.fadeIn(.3));
},
bmfToCenterPosAction: function() {
this.bmfXuType1.stopAllActions();
this.bmfXuType1.runAction(cc.moveTo(.3, this.bmfXuType1.centerPos));
},
showQuayMienPhi: function() {
this.node_MienPhi.active = !0;
if (!this.node_MienPhi.skeleton) {
this.node_MienPhi.skeleton = this.node_MienPhi.addComponent(sp.Skeleton);
this.node_MienPhi.skeleton.skeletonData = this.skeletonDatas[0];
}
this.node_MienPhi.skeleton.setAnimation(0, "FreeSpine", !0);
this.useBmfXu(0);
},
showBonus: function() {
this.node_Minigame.active = !0;
if (!this.node_Minigame.skeleton) {
this.node_Minigame.skeleton = this.node_Minigame.addComponent(sp.Skeleton);
this.node_Minigame.skeleton.skeletonData = this.skeletonDatas[0];
}
this.node_Minigame.skeleton.setAnimation(0, "Bonus", !0);
this.useBmfXu(0);
},
showGiauTo: function(e) {
this.node_GiauTo.active = !0;
if (!this.node_GiauTo.skeleton) {
var t = new cc.Node();
this.node_GiauTo.skeleton = t.addComponent(sp.Skeleton);
this.node_GiauTo.skeleton.skeletonData = this.skeletonDatas[1];
this.node_GiauTo.addChild(t);
}
this.node_GiauTo.skeleton.setAnimation(0, "TSL", !0);
this.node_GiauTo.bmfXuTypeJumpEffect || (this.node_GiauTo.bmfXuTypeJumpEffect = this.node_GiauTo.getChildByName("bmfXuType"));
this.node_GiauTo.bmfXuTypeJumpEffect.getComponent("TT.CustomBMFont").setRealNumber(e);
},
showThangLon: function(e) {
this.node_ThangLon.active = !0;
if (!this.node_ThangLon.skeleton) {
var t = new cc.Node();
this.node_ThangLon.skeleton = t.addComponent(sp.Skeleton);
this.node_ThangLon.skeleton.skeletonData = this.skeletonDatas[1];
this.node_ThangLon.addChild(t);
}
this.node_ThangLon.skeleton.setAnimation(0, "TL", !0);
this.node_ThangLon.bmfXuTypeJumpEffect || (this.node_ThangLon.bmfXuTypeJumpEffect = this.node_ThangLon.getChildByName("bmfXuType"));
this.node_ThangLon.bmfXuTypeJumpEffect.getComponent("TT.CustomBMFont").setRealNumber(e);
},
showHuXu: function(e) {
lngui.AudioManager.instance.playSfx(i.default.instance.jackpot, 1);
this.node_NoHu.active = !0;
if (!this.node_NoHu.skeleton) {
var t = new cc.Node();
this.node_NoHu.skeleton = t.addComponent(sp.Skeleton);
this.node_NoHu.skeleton.skeletonData = this.skeletonDatas[1];
this.node_NoHu.addChild(t);
}
this.node_NoHu.skeleton.setAnimation(0, "NH", !0);
this.node_NoHu.bmfXuTypeJumpEffect || (this.node_NoHu.bmfXuTypeJumpEffect = this.node_NoHu.getChildByName("bmfXuType"));
this.node_NoHu.bmfXuTypeJumpEffect.getComponent("TT.CustomBMFont").setRealNumber(e);
},
touchNoHu: function() {
o.pnlMainGame._isPlayTry || o.pnlMainGame.commitSpinResult();
},
useBmfXu: function(e) {
if (e > 0) {
this.bmfXuType1.getComponent("TT.CustomBMFont").setRealNumber(e);
this.bmfXuType1.active = !0;
} else this.bmfXuType1.active = !1;
}
});
cc._RF.pop();
}, {
"./ThatTruyenAudioDefined": "ThatTruyenAudioDefined",
"TT.CustomBMFont": "TT.CustomBMFont",
ThatTruyenVar: "ThatTruyenVar"
} ]
}, {}, [ "TT.btnHover", "TT.BasePopup", "ThatTruyenAudioCtr", "ThatTruyenAudioDefined", "ThatTruyenFunc", "ThatTruyenLobbyLayer", "ThatTruyenMainGame", "ThatTruyenMainScene", "ThatTruyenMiniGame", "ThatTruyenNetwork", "ThatTruyenPopupHelp", "ThatTruyenPopupLichSuGiaoDich", "ThatTruyenPopupLichSuHu", "ThatTruyenPopupNotify", "ThatTruyenTopBarLayer", "ThatTruyenVar", "ThatTruyenWinBig", "TT.BgResizer", "TT.CountUp", "TT.CustomBMFont" ]);