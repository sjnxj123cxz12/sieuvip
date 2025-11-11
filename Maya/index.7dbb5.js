window.__require = function t(e, o, n) {
function i(l, c) {
if (!o[l]) {
if (!e[l]) {
var r = l.split("/");
r = r[r.length - 1];
if (!e[r]) {
var a = "function" == typeof __require && __require;
if (!c && a) return a(r, !0);
if (s) return s(r, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = r;
}
var p = o[l] = {
exports: {}
};
e[l][0].call(p.exports, function(t) {
return i(e[l][1][t] || t);
}, p, p.exports, t, e, o, n);
}
return o[l].exports;
}
for (var s = "function" == typeof __require && __require, l = 0; l < n.length; l++) i(n[l]);
return i;
}({
SlotMayaAudio: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ba1467rf7BGsqh0ByvbF+x/", "SlotMayaAudio");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, n) {
var i, s = arguments.length, l = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(e, o, l) : i(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotAudio"), c = cc._decorator, r = c.ccclass, a = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.boom = null;
return e;
}
s([ a({
type: cc.AudioClip
}) ], e.prototype, "boom", void 0);
return s([ r ], e);
}(l.default);
o.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotAudio": void 0
} ],
SlotMayaBonusGame: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5c21f6AS+FDyb25qwKwLs7v", "SlotMayaBonusGame");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, n) {
var i, s = arguments.length, l = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(e, o, l) : i(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/util/FormatUtil"), c = t("../../base_slot/util/Util"), r = cc._decorator, a = r.ccclass, p = r.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.txtTime = null;
e.btnAuto = null;
e.listItem = [];
e.listSke = [];
e.listMoney = [];
e.mTimeout = null;
e.mTimer = null;
e.mTime = 30;
e.mMoneyWin = 0;
e.mData = null;
e.mSlotRoom = null;
return e;
}
e.prototype.onDestroy = function() {
clearTimeout(this.mTimeout);
clearInterval(this.mTimer);
this.mSlotRoom.mMoneyBonus = this.mMoneyWin;
};
e.prototype.init = function(t) {
var e = this;
this.mSlotRoom = t;
this.txtTime.string = "Tự mở sau " + this.mTime + " giây";
clearInterval(this.mTimer);
this.mTimer = setInterval(function() {
e.mTime--;
if (e.mTime < 0) {
e.onBtnAuto();
e.txtTime.node.active = !1;
clearInterval(e.mTimer);
} else e.txtTime.string = "Tự mở sau " + e.mTime + " giây";
}, 1e3);
};
e.prototype.onBtnSelectItem = function(t, e) {
switch (e) {
case "1":
this.onSelectItem(0);
break;

case "2":
this.onSelectItem(1);
break;

case "3":
this.onSelectItem(2);
}
};
e.prototype.onBtnAuto = function() {
this.btnAuto.interactable = !1;
var t = c.default.random(0, 2);
this.onSelectItem(t);
};
e.prototype.startGame = function(t) {
this.mData = t;
this.mMoneyWin = t[0];
for (var e = 0; e < this.listMoney.length; e++) this.listMoney[e].string = l.default.formatNumber(t[e]);
};
e.prototype.endGame = function() {
var t = this;
this.btnAuto.interactable = !1;
clearTimeout(this.mTimeout);
this.mTimeout = setTimeout(function() {
t.mSlotRoom.mSlot.mSlotNetwork.sendEndBonus(t.mSlotRoom.mSlot.mMoneyType, t.mSlotRoom.mDataSpin.session);
t.mSlotRoom.showResult();
t.node.destroy();
}, 3e3);
};
e.prototype.onSelectItem = function(t) {
for (var e = 1, o = 0; o < this.listItem.length; o++) {
this.listItem[o].interactable = !1;
this.listMoney[o].node.active = !0;
this.listSke[o].addAnimation(0, "animation2", !1);
if (o == t) {
this.listMoney[o].node.color = cc.color(255, 255, 255);
this.listMoney[o].string = l.default.formatNumber(this.mData[0]);
} else {
this.listMoney[o].node.color = cc.color(80, 80, 80);
this.listMoney[o].string = l.default.formatNumber(this.mData[e]);
e++;
}
}
this.endGame();
};
s([ p(cc.Label) ], e.prototype, "txtTime", void 0);
s([ p(cc.Button) ], e.prototype, "btnAuto", void 0);
s([ p([ cc.Button ]) ], e.prototype, "listItem", void 0);
s([ p([ sp.Skeleton ]) ], e.prototype, "listSke", void 0);
s([ p([ cc.Label ]) ], e.prototype, "listMoney", void 0);
return s([ a ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../base_slot/util/FormatUtil": void 0,
"../../base_slot/util/Util": void 0
} ],
SlotMayaConfig: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a986bkHe3RGLpItnO1xUlmK", "SlotMayaConfig");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, n) {
var i, s = arguments.length, l = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(e, o, l) : i(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotConfig"), c = cc._decorator, r = c.ccclass, a = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.DISTANCE = 175;
e.TIME_MOVE_ITEM_START_QUICK = 1;
e.TIME_MOVE_ITEM_START = 1;
e.TIME_MOVE_ITEM_QUICK = 1;
e.TIME_MOVE_ITEM = 1;
e.TIME_MOVE_ITEM_STOP_QUICK = 1;
e.TIME_MOVE_ITEM_STOP = 1;
e.TIME_DELAY_SPIN_REEL = 0;
e.LIST_SKE_ITEM = [];
e.LIST_SKE_KEY = [];
e.LIST_FRAME = [];
e.TIME_ANIM_FREESPIN = 2;
e.TIME_ANIM_BONUS = 10;
e.LINE = [ [ 5, 6, 7, 8, 9 ], [ 0, 1, 2, 3, 4 ], [ 10, 11, 12, 13, 14 ], [ 5, 6, 2, 8, 9 ], [ 5, 6, 12, 8, 9 ], [ 0, 1, 7, 3, 4 ], [ 10, 11, 7, 13, 14 ], [ 0, 11, 2, 13, 4 ], [ 10, 1, 12, 3, 14 ], [ 5, 1, 12, 3, 9 ], [ 10, 6, 2, 8, 14 ], [ 0, 6, 12, 8, 4 ], [ 5, 11, 7, 3, 9 ], [ 5, 1, 7, 13, 9 ], [ 10, 6, 7, 8, 14 ], [ 0, 6, 7, 8, 4 ], [ 5, 11, 12, 13, 9 ], [ 5, 1, 2, 3, 9 ], [ 10, 11, 7, 3, 4 ], [ 0, 1, 7, 13, 14 ] ];
return e;
}
s([ a(cc.Integer) ], e.prototype, "DISTANCE", void 0);
s([ a(cc.Integer) ], e.prototype, "TIME_MOVE_ITEM_START_QUICK", void 0);
s([ a(cc.Integer) ], e.prototype, "TIME_MOVE_ITEM_START", void 0);
s([ a(cc.Integer) ], e.prototype, "TIME_MOVE_ITEM_QUICK", void 0);
s([ a(cc.Integer) ], e.prototype, "TIME_MOVE_ITEM", void 0);
s([ a(cc.Integer) ], e.prototype, "TIME_MOVE_ITEM_STOP_QUICK", void 0);
s([ a(cc.Integer) ], e.prototype, "TIME_MOVE_ITEM_STOP", void 0);
s([ a(cc.Integer) ], e.prototype, "TIME_DELAY_SPIN_REEL", void 0);
s([ a([ sp.SkeletonData ]) ], e.prototype, "LIST_SKE_ITEM", void 0);
s([ a([ cc.String ]) ], e.prototype, "LIST_SKE_KEY", void 0);
s([ a([ cc.SpriteFrame ]) ], e.prototype, "LIST_FRAME", void 0);
s([ a(cc.Integer) ], e.prototype, "TIME_ANIM_FREESPIN", void 0);
s([ a(cc.Integer) ], e.prototype, "TIME_ANIM_BONUS", void 0);
return s([ r ], e);
}(l.default);
o.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotConfig": void 0
} ],
SlotMayaConst: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "21944sKh8NCw4AhhcPXQard", "SlotMayaConst");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.SlotMayaConst = void 0;
var n = function() {
function t() {}
t.jackPot = [ 0, 5e5, 5e6, 5e7 ];
return t;
}();
o.SlotMayaConst = n;
cc._RF.pop();
}, {} ],
SlotMayaEffect: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "49b18dgzOhFnqQKG9JgTWPa", "SlotMayaEffect");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, n) {
var i, s = arguments.length, l = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(e, o, l) : i(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotEffect"), c = t("../../base_slot/util/AudioUtil"), r = t("../../base_slot/util/FormatUtil"), a = cc._decorator, p = a.ccclass, u = a.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeBonus = [];
e.txtEffectBonus = null;
e.nodeEffectFreespin = null;
e.txtEffectFreespin = null;
e.nodeNumFreespin = null;
e.txtNumFreespin = null;
e.mSlot = null;
e.mSlotRoom = null;
return e;
}
e.prototype.init = function(e) {
t.prototype.init.call(this, e);
};
e.prototype.showJackpot = function(t, e, o) {
var n = this;
void 0 === t && (t = null);
void 0 === e && (e = null);
c.default.playSound(this.mSlot.mSlotAudio.jackpot, this.mSlot.mIsSound);
this.mCallback = t;
this.mTarget = e;
var i = this;
this.nodeJackpot.active = !0;
this.txtMoneyJackpot.string = r.default.formatNumber(o);
var s = function() {
i.node.stopAllActions();
i.nodeJackpot.off(cc.Node.EventType.TOUCH_END, s.bind(i), i);
i.nodeJackpot.active = !1;
n.mCallback && n.mTarget && n.mCallback.call(n.mTarget);
};
this.nodeJackpot.once(cc.Node.EventType.TOUCH_END, s.bind(this), this);
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(this.mSlot.mSlotConfig.TIME_ANIM_JACKPOT), cc.callFunc(function() {
i.mCallback && i.mTarget && i.mCallback.call(i.mTarget);
}, this)));
};
e.prototype.showBigWin = function(t, e, o) {
void 0 === t && (t = null);
void 0 === e && (e = null);
c.default.playSound(this.mSlot.mSlotAudio.bigwin, this.mSlot.mIsSound);
this.mCallback = t;
this.mTarget = e;
var n = this;
this.nodeBigwin.active = !0;
this.txtMoneyBigwin.string = r.default.formatNumber(o);
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(this.mSlot.mSlotConfig.TIME_ANIM_BIGWIN), cc.callFunc(function() {
n.mCallback && n.mTarget && n.mCallback.call(n.mTarget);
n.nodeBigwin.active = !1;
}, this)));
};
e.prototype.showWin = function(t, e, o) {
void 0 === t && (t = null);
void 0 === e && (e = null);
c.default.playSound(this.mSlot.mSlotAudio.win, this.mSlot.mIsSound);
this.mCallback = t;
this.mTarget = e;
var n = this;
this.txtMoneyWin.node.active = !0;
this.txtMoneyWin.string = r.default.formatNumber(o);
this.txtMoneyWin.node.scale = 0;
this.txtMoneyWin.node.opacity = 0;
this.txtMoneyWin.node.setPosition(80, 75);
this.txtMoneyWin.node.stopAllActions();
this.txtMoneyWin.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(.2, 1.2, 1.2), cc.moveBy(.2, 0, 50), cc.fadeIn(.2)), cc.delayTime(.3), cc.spawn(cc.moveTo(.4, 80, -225).easing(cc.easeBackIn()), cc.scaleTo(.4, 1, 1)), cc.callFunc(function() {
n.txtMoneyWin.node.active = !1;
n.mSlotRoom.updateTotalWin(o);
n.node.stopAllActions();
n.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
n.nodeWin.active = !1;
n.mCallback && n.mTarget && n.mCallback.call(n.mTarget);
}, n)));
}, n)));
};
e.prototype.showBonus = function(t, e, o, n) {
void 0 === t && (t = null);
void 0 === e && (e = null);
c.default.playSound(this.mSlot.mSlotAudio.jackpot, this.mSlot.mIsSound);
this.mCallback = t;
this.mTarget = e;
var i = this;
this.nodeBonus[o].active = !0;
this.txtEffectBonus.node.active = !0;
this.txtEffectBonus.string = r.default.formatNumber(n);
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(this.mSlot.mSlotConfig.TIME_ANIM_BONUS), cc.callFunc(function() {
i.mCallback && i.mTarget && i.mCallback.call(i.mTarget, o);
i.mSlotRoom.updateTotalWin(n);
i.nodeBonus[o].active = !1;
i.txtEffectBonus.node.active = !1;
}, this)));
};
e.prototype.showFreespin = function(t, e, o) {
void 0 === t && (t = null);
void 0 === e && (e = null);
c.default.playSound(this.mSlot.mSlotAudio.jackpot, this.mSlot.mIsSound);
this.mCallback = t;
this.mTarget = e;
var n = this;
this.nodeEffectFreespin.active = !0;
this.txtEffectFreespin.string = o.toString();
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(n.mSlot.mSlotConfig.TIME_ANIM_FREESPIN), cc.callFunc(function() {
n.mCallback && n.mTarget && n.mCallback.call(n.mTarget);
n.nodeEffectFreespin.active = !1;
n.nodeNumFreespin.active = !0;
n.txtNumFreespin.string = o.toString();
}, n)));
};
e.prototype.showNumFreespin = function(t) {
if (t <= 0) this.nodeNumFreespin.active = !1; else {
this.nodeNumFreespin.active = !0;
this.txtNumFreespin.string = t.toString();
}
};
s([ u([ cc.Node ]) ], e.prototype, "nodeBonus", void 0);
s([ u(cc.Label) ], e.prototype, "txtEffectBonus", void 0);
s([ u(cc.Node) ], e.prototype, "nodeEffectFreespin", void 0);
s([ u(cc.Label) ], e.prototype, "txtEffectFreespin", void 0);
s([ u(cc.Node) ], e.prototype, "nodeNumFreespin", void 0);
s([ u(cc.Label) ], e.prototype, "txtNumFreespin", void 0);
return s([ p ], e);
}(l.default);
o.default = h;
cc._RF.pop();
}, {
"../../base_slot/SlotEffect": void 0,
"../../base_slot/util/AudioUtil": void 0,
"../../base_slot/util/FormatUtil": void 0
} ],
SlotMayaEntity: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "06fc2FII1dPZ4W6o4/+VoTS", "SlotMayaEntity");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.DataSlotMayaHistoryCell = o.DataSlotMayaRankCell = o.DataSlotMayaPlayNow = o.DataSlotMayaLineWin = o.DataSlotMayaSpin = void 0;
var n = function() {
function t() {
this.accountId = 0;
this.session = 0;
this.listItem = [];
this.listLineWin = [];
this.totalBet = 0;
this.totalWin = 0;
this.userMoney = 0;
this.jackpotCurrent = 0;
this.maxTurn = 0;
this.posItemSpecial = -1;
}
t.prototype.getLineWinByTurn = function(t) {
for (var e = null, o = 0; o < this.listLineWin.length; o++) if (this.listLineWin[o].turn == t) {
e = this.listLineWin[o];
this.listLineWin.splice(o, 1);
break;
}
return e;
};
t.prototype.getLineWin = function() {
for (var t = null, e = 0, o = 1; o <= this.maxTurn; ) {
if (this.listLineWin[e].turn == o) {
t = this.listLineWin[e];
this.listLineWin.splice(e, 1);
break;
}
if (++e >= this.listLineWin.length) {
e = 0;
o++;
}
}
return t;
};
return t;
}();
o.DataSlotMayaSpin = n;
o.DataSlotMayaLineWin = function() {
this.id = 0;
this.bonus = 0;
this.jackpot = 0;
this.freespin = 0;
this.moneyWin = 0;
this.listIdx = [];
this.turn = -1;
};
o.DataSlotMayaPlayNow = function() {
this.accID = 0;
this.accName = "";
this.money = 0;
};
o.DataSlotMayaRankCell = function() {};
o.DataSlotMayaHistoryCell = function() {};
cc._RF.pop();
}, {} ],
SlotMayaGuide: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1c0d4KSunBNnrDe+eySGwUl", "SlotMayaGuide");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, n) {
var i, s = arguments.length, l = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(e, o, l) : i(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = cc._decorator, c = l.ccclass, r = l.property, a = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.pageview = null;
return e;
}
e.prototype.onBtnClose = function() {
this.node.destroy();
};
e.prototype.onBtnNext = function() {
var t = this.pageview.getCurrentPageIndex();
t + 1 > 0 && (t = 1);
this.pageview.scrollToPage(t, .2);
};
e.prototype.onBtnBack = function() {
var t = this.pageview.getCurrentPageIndex();
t - 1 <= 0 && (t = 0);
this.pageview.scrollToPage(t, .2);
};
s([ r(cc.PageView) ], e.prototype, "pageview", void 0);
return s([ c ], e);
}(lngui.UIPopup);
o.default = a;
cc._RF.pop();
}, {} ],
SlotMayaHandler: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f5f18ZENkJOGLl0RC1uCE5b", "SlotMayaHandler");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, n) {
var i, s = arguments.length, l = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(e, o, l) : i(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("./SlotMayaEntity"), c = t("./SlotMayaVar"), r = t("../../base_slot/SlotHandler"), a = t("../../base_slot/SlotSelectRoom"), p = cc._decorator, u = p.ccclass, h = (p.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSlot = null;
e.mListenerKey = "RungRamListener";
return e;
}
o = e;
Object.defineProperty(e, "instance", {
get: function() {
o._instance || (o._instance = new o());
return o._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
o._instance = this;
};
e.prototype.connect = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect(this.mListenerKey, c.default.api.negotiate, c.default.api.hub, c.default.api.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onWebSocketCallback = function(t) {
if ("open" == t.s || "reconnect" == t.s) {
if (!this.mSlot.isConnect) {
this.mSlot.isConnect = !0;
this.mSlot.connectSuccess();
a.default.instance.unlockBtn(!0);
}
} else {
if (!t.M || !Array.isArray(t.M) || 0 == t.M.length) return;
for (var e = t.M.length, o = 0; o < e; ++o) {
var n = t.M[o];
if ("object" == typeof n && "string" == typeof n.M && n.A && null != n.A[0] && null != n.A[0]) {
var i = n.A[0];
switch (n.M) {
case "joinGame":
this.mSignalr.send("StopX2Game");
this.onJoinGame(i);
break;

case "PlayNow":
this.onPlayNow(i);
break;

case "resultSpin":
this.onSpin(i);
break;

case "message":
this.onMessage(i);
break;

case "history":
this.onHistory(i);
break;

case "honor":
this.onGetRank(i);
break;

case "jackpotHistory":
i.IsJackport = !0;
this.onGetRank(i);
break;

case "UpdateJackPot":
this.onUpdateJackpot(n.A);
break;

case "XJackpotInfo":
this.onGetPotInfo(i);
}
}
}
}
};
e.prototype.onJoinGame = function(t) {
t && this.mSlot.onJoinGameSuccess(t);
};
e.prototype.onPlayNow = function(t) {
if (this.mSlot) {
var e = new l.DataSlotMayaPlayNow();
e.accID = t.AccountID;
e.accName = lngui.UserManager.instance.mainUserInfo.UserName;
e.money = lngui.UserManager.instance.mainUserInfo.Money;
this.mSlot.onPlayNow(e);
}
};
e.prototype.onSpin = function(t) {
if (this.mSlot) {
var e = new l.DataSlotMayaSpin();
e.accountId = t.AccountID;
e.session = t.SpinData.SpinId;
e.totalBet = t.BetValue * t.SpinData.LineData.split(",").length;
e.totalWin = t.SpinData.PrizeValue;
e.userMoney = t.Balance;
e.jackpotCurrent = t.SpinData.JackpotValue;
c.default.isPlaytryJackpotValue = t.SpinData.JackpotValue;
e.listItem = t.SpinData.SlotsDataNoSap || [];
for (var o = t.SpinData.PrizeDataNoSap || [], n = [], i = 0; i < o.length; i++) n = n.concat(o[i].map(function(t) {
t.Turn = i + 1;
return t;
}));
n.forEach(function(o) {
if (o.LineId <= 20 && o.LineId > 0) {
(s = new l.DataSlotMayaLineWin()).id = o.LineId;
s.bonus = t.BonusGame.PrizeValue;
s.jackpot = 1 == t.SpinData.IsJackPot ? t.SpinData.PrizeValue : 0;
s.freespin = t.SpinData.TotalFreeSpinPrizeValue;
s.moneyWin = o.PrizeValue;
s.turn = o.Turn;
for (var i = 0; i < o.Items.length; i++) o.Items[i] = o.Items[i] - 1;
s.listIdx = o.Items;
e.listLineWin.push(s);
e.maxTurn < s.turn && (e.maxTurn = s.turn);
} else {
lngui.ZLog.log("freespin hoac random", JSON.stringify(n));
var s;
(s = new l.DataSlotMayaLineWin()).id = o.LineId;
1 == o.PrizeId && (s.bonus = 5);
2 == o.PrizeId && (s.bonus = 4);
3 == o.PrizeId && (s.bonus = 3);
131 == o.PrizeId && (s.freespin = 6);
132 == o.PrizeId && (s.freespin = 3);
133 == o.PrizeId && (s.freespin = 1);
s.moneyWin = o.PrizeValue;
s.turn = o.Turn;
s.listIdx = [];
e.listLineWin.push(s);
e.maxTurn < s.turn && (e.maxTurn = s.turn);
}
});
var s = e.listItem[0];
s[5] == s[0] && s[5] == s[1] && s[5] == s[6] ? e.posItemSpecial = 0 : s[5] == s[10] && s[5] == s[11] && s[5] == s[6] ? e.posItemSpecial = 1 : s[6] == s[1] && s[6] == s[2] && s[6] == s[7] ? e.posItemSpecial = 2 : s[6] == s[11] && s[6] == s[12] && s[6] == s[7] ? e.posItemSpecial = 3 : s[7] == s[2] && s[7] == s[3] && s[7] == s[8] ? e.posItemSpecial = 4 : s[7] == s[12] && s[7] == s[13] && s[7] == s[8] ? e.posItemSpecial = 5 : s[8] == s[3] && s[8] == s[4] && s[8] == s[9] ? e.posItemSpecial = 6 : s[8] == s[13] && s[8] == s[14] && s[8] == s[9] && (e.posItemSpecial = 7);
0 == e.listItem.length || this.mSlot.mSlotRoom && this.mSlot.mSlotRoom.stopSpin(e);
}
};
e.prototype.onGetPotInfo = function(t) {
this.mSlot.mSlotPot.onEventXPot(t);
};
e.prototype.onUpdateJackpot = function(t) {
if (this.mSlot.isTrial()) {
c.default.jackPot[t[0]] = c.default.isPlaytryJackpotValue;
var e = c.default.jackPot;
this.mSlot.onUpdatePot(e);
} else {
c.default.jackPot[t[0]] = t[1];
e = c.default.jackPot;
this.mSlot.onUpdatePot(e);
}
};
e.prototype.onMessage = function(t) {
this.mSlot && this.mSlot.onMessage(t);
};
e.prototype.onHistory = function(t) {
this.mSlot && cc.systemEvent.emit("SlotMaya_get_history", t);
};
e.prototype.onGetRank = function(t) {
lngui.ZLog.log("onGetRank ===========================" + JSON.stringify(t));
this.mSlot && cc.systemEvent.emit("SlotMaya_get_rank", t);
};
e.prototype.sendJoinRoom = function() {
this.mSignalr.send("GetEventJackpot");
};
e.prototype.sendSpin = function(t, e, o) {
this.mSignalr.send("SpinMobile", [ o ]);
};
e.prototype.sendSpinTry = function(t, e, o, n) {
this.mSignalr.send("SpinTry", [ t, e, o, n ]);
};
e.prototype.sendGetRank = function(t) {
this.mSignalr.send(t, []);
};
e.prototype.sendHistory = function() {
this.mSignalr.send("GetHistory", []);
};
e.prototype.sendPlayNow = function() {
this.mSignalr.send("PlayGame", [ this.mSlot.mRoomId, 1 ]);
};
e.prototype.sendEndBonus = function(t, e) {
this.mSignalr.send("FinishBonusGame", [ t, e ]);
};
var o;
e._instance = null;
return o = s([ u ], e);
}(r.default));
o.default = h;
cc._RF.pop();
}, {
"../../base_slot/SlotHandler": void 0,
"../../base_slot/SlotSelectRoom": void 0,
"./SlotMayaEntity": "SlotMayaEntity",
"./SlotMayaVar": "SlotMayaVar"
} ],
SlotMayaHistoryCell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bea35glmYVLN6P6KKzIycuU", "SlotMayaHistoryCell");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, n) {
var i, s = arguments.length, l = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(e, o, l) : i(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/util/FormatUtil"), c = cc._decorator, r = c.ccclass, a = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.txtSession = null;
e.txtTime = null;
e.txtRoomBet = null;
e.txtTotalBet = null;
e.txtMoneyWin = null;
e.bg = null;
e.mIdx = 0;
return e;
}
e.prototype.setData = function(t, e) {
this.mIdx = e;
this.txtSession.string = "" + t.SpinId;
this.txtTime.string = l.default.formatDateTime(t.CreateDate, !0, !0);
this.txtTotalBet.string = l.default.formatNumber(t.TotalBetValue);
this.txtMoneyWin.string = l.default.formatNumber(t.TotalPrizeValue);
this.txtRoomBet.string = l.default.formatNumber(t.BetValue);
this.bg.active = this.mIdx % 2 == 0;
};
s([ a(cc.Label) ], e.prototype, "txtSession", void 0);
s([ a(cc.Label) ], e.prototype, "txtTime", void 0);
s([ a(cc.Label) ], e.prototype, "txtRoomBet", void 0);
s([ a(cc.Label) ], e.prototype, "txtTotalBet", void 0);
s([ a(cc.Label) ], e.prototype, "txtMoneyWin", void 0);
s([ a(cc.Node) ], e.prototype, "bg", void 0);
return s([ r ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../base_slot/util/FormatUtil": void 0
} ],
SlotMayaHistory: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e888fJeNwFKcYBweVf0yDbu", "SlotMayaHistory");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, n) {
var i, s = arguments.length, l = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(e, o, l) : i(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotHistory"), c = t("./SlotMayaHandler"), r = cc._decorator, a = r.ccclass, p = (r.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSlot = null;
return e;
}
e.prototype.onLoad = function() {
c.default.instance.sendHistory();
cc.systemEvent.on("SlotMaya_get_history", this.onEventGetHistory, this);
this.scrollview.content.destroyAllChildren();
};
e.prototype.onDestroy = function() {
cc.systemEvent.off("SlotMaya_get_history", this.onEventGetHistory, this);
};
e.prototype.onEventGetHistory = function(t) {
this.setData(1, t);
};
e.prototype.setData = function(t, e) {
this.mListDataCell = e;
this.scrollview.content.destroyAllChildren();
this.mListCell = [];
var o = e.length;
this.scrollview.content.height = o * (this.heightItem + this.spacing) + this.spacing;
for (var n = this.spawnCount <= o ? this.spawnCount : o, i = 0; i < n; i++) {
var s = cc.instantiate(this.cellHistory), l = s.getComponent("SlotMayaHistoryCell");
l.setData(this.mListDataCell[i], i);
var c = -l.node.height * (.5 + i) - this.spacing * (i + 1);
l.node.setPosition(0, c);
this.scrollview.content.addChild(s);
this.mListCell.push(l);
}
};
return s([ a ], e);
}(l.default));
o.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotHistory": void 0,
"./SlotMayaHandler": "SlotMayaHandler"
} ],
SlotMayaIconLine: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f7714ZN/XNLuYtu9Itms7qo", "SlotMayaIconLine");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, n) {
var i, s = arguments.length, l = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(e, o, l) : i(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = cc._decorator, c = l.ccclass, r = l.property, a = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.sprLine = null;
e.id = -1;
e.isReady = !0;
e.cbHover = null;
e.tgHover = null;
e.cbLeave = null;
e.tgLeave = null;
return e;
}
e.prototype.onLoad = function() {
if (!cc.sys.isNative) {
this.node.on(cc.Node.EventType.MOUSE_ENTER, this.mouseHover, this);
this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeave, this);
}
};
e.prototype.onDestroy = function() {
if (!cc.sys.isNative) {
this.node.on(cc.Node.EventType.MOUSE_ENTER, this.mouseHover, this);
this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeave, this);
}
};
e.prototype.mouseHover = function() {
if (this.isReady && this.cbHover && this.tgHover) {
this.cbHover.call(this.tgHover, this.id);
this.sprLine.node.color = cc.Color.YELLOW;
}
};
e.prototype.mouseLeave = function() {
if (this.isReady && this.cbLeave && this.tgLeave) {
this.cbLeave.call(this.tgLeave, this.id);
this.sprLine.node.color = cc.Color.WHITE;
}
};
e.prototype.setReady = function(t) {
this.isReady = t;
};
s([ r(cc.Sprite) ], e.prototype, "sprLine", void 0);
s([ r(cc.Integer) ], e.prototype, "id", void 0);
return s([ c ], e);
}(cc.Component);
o.default = a;
cc._RF.pop();
}, {} ],
SlotMayaItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "53da49J5UdPyLtIcYsxhCbX", "SlotMayaItem");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, n) {
var i, s = arguments.length, l = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(e, o, l) : i(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotItem"), c = t("../../base_slot/SlotConstant"), r = t("../../base_slot/util/AudioUtil"), a = t("../../base_slot/util/Util"), p = cc._decorator, u = p.ccclass, h = p.property, m = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.skeBorder = null;
e.skeBoomed = null;
e.sprBorder = null;
e.skeEffectVaCham = null;
e.mIsBoom = !1;
e.mSlotReel = null;
e.mSlot = null;
e.mSlotRoom = null;
return e;
}
e.prototype.init = function(t) {
this.mSlotReel = t;
this.mSlotRoom = this.mSlotReel.mSlotMachine.mSlotRoom;
this.mSlot = this.mSlotRoom.mSlot;
this.skeBoomed.timeScale = 2;
this.skeBorder.timeScale = 1;
this.skeEffectVaCham.timeScale = 3;
var e = this.getRandomId();
this.setId(e);
};
e.prototype.setId = function(t) {
if (this.mId != t) {
this.mId = t;
if (3 == this.mId) {
this.sprItem.node.active = !1;
this.skeItem.node.active = !0;
this.skeItem.node.scale = .93;
this.setSkeData(1);
} else {
this.sprItem.node.active = !0;
this.skeItem.node.active = !1;
this.setFrameItem(this.mId);
}
}
};
e.prototype.getRandomId = function() {
return a.default.random(1, this.mSlot.mSlotConfig.MAX_ITEM);
};
e.prototype.showHover = function() {
this.sprBorder.node.active = !0;
};
e.prototype.showLeave = function() {
this.sprBorder.node.active = !1;
};
e.prototype.showIdle = function() {
this.mTypeItem = c.SLOT_TYPE_ITEM.IDLE;
if (3 == this.mId) {
this.sprItem.node.active = !1;
this.sprItem.node.color = cc.color(255, 255, 255);
this.skeItem.node.active = !0;
this.skeItem.node.color = cc.color(255, 255, 255);
} else {
this.sprItem.node.active = !0;
this.sprItem.node.color = cc.color(255, 255, 255);
this.skeItem.node.active = !1;
this.skeItem.node.color = cc.color(255, 255, 255);
}
this.skeBorder.node.active = !1;
this.skeBoomed.node.active = !1;
this.sprBorder.node.active = !1;
};
e.prototype.showLose = function() {
if (this.mTypeItem != c.SLOT_TYPE_ITEM.LOSE) {
this.mTypeItem = c.SLOT_TYPE_ITEM.LOSE;
if (3 == this.mId) {
this.sprItem.node.active = !1;
this.sprItem.node.color = cc.color(100, 100, 100);
this.skeItem.node.active = !0;
this.skeItem.node.color = cc.color(100, 100, 100);
} else {
this.sprItem.node.active = !0;
this.sprItem.node.color = cc.color(100, 100, 100);
this.skeItem.node.active = !1;
this.skeItem.node.color = cc.color(100, 100, 100);
}
this.skeBorder.node.active = !1;
this.skeBoomed.node.active = !1;
this.sprBorder.node.active = !1;
}
};
e.prototype.setSkeData = function(t) {
var e = this.mSlot.mSlotConfig.LIST_SKE_ITEM[t - 1], o = this.mSlot.mSlotConfig.LIST_SKE_KEY[t - 1];
this.skeItem.loop = !0;
this.skeItem.skeletonData = e;
this.skeItem.animation = o;
};
e.prototype.setFrameItem = function(t) {
var e = -1;
1 == t ? e = 0 : 2 == t ? e = 1 : 4 == t ? e = 2 : 5 == t ? e = 3 : 6 == t ? e = 4 : 7 == t && (e = 5);
this.sprItem.spriteFrame = this.mSlot.mSlotConfig.LIST_FRAME[e];
};
e.prototype.setBoom = function(t) {
this.mIsBoom = t;
};
e.prototype.isBoom = function() {
return this.mIsBoom;
};
e.prototype.showWin = function() {
var t = this;
if (this.mTypeItem != c.SLOT_TYPE_ITEM.WIN) {
this.mTypeItem = c.SLOT_TYPE_ITEM.WIN;
if (3 == this.mId) {
this.sprItem.node.active = !1;
this.sprItem.node.color = cc.color(255, 255, 255);
this.skeItem.node.active = !0;
this.skeItem.node.color = cc.color(255, 255, 255);
} else {
this.sprItem.node.active = !0;
this.sprItem.node.color = cc.color(255, 255, 255);
this.skeItem.node.active = !1;
this.skeItem.node.color = cc.color(255, 255, 255);
}
if (this.mIsBoom) {
this.sprBorder.node.active = !1;
this.skeBorder.node.active = !0;
this.skeBorder.node.active && this.skeBorder.node.runAction(cc.callFunc(function() {
t.shakeEffect(t.sprItem.node, 1.5);
}, this));
} else {
this.sprBorder.node.active = !0;
this.skeBorder.node.active = !1;
}
}
};
e.prototype.shakeEffect = function(t, e) {
try {
t.runAction(cc.sequence(cc.rotateBy(.01, 4), cc.rotateBy(.01, -8), cc.rotateBy(.01, 8), cc.rotateBy(.01, -8), cc.rotateBy(.01, 8), cc.rotateBy(.01, -8), cc.rotateBy(.01, 8), cc.rotateBy(.01, -8), cc.rotateBy(.01, 4))).repeatForever();
} catch (t) {
return;
}
this.scheduleOnce(function() {
t.stopAllActions();
t.setPosition(cc.v2(0, 0));
t.runAction(cc.rotateTo(0, 0));
}, e);
};
e.prototype.showBoom = function() {
r.default.playSound(this.mSlot.mSlotAudio.boom, this.mSlot.mIsSound);
this.node.stopAllActions();
this.sprBorder.node.active = !1;
this.skeBorder.node.active = !1;
this.skeItem.node.active = !1;
this.sprItem.node.active = !1;
this.skeBoomed.node.active = !0;
this.skeBoomed.animation = "Idle";
this.skeBoomed.loop = !1;
this.skeBoomed.setCompleteListener(this.onEventBoomed.bind(this));
};
e.prototype.onEventBoomed = function() {
this.mSlotReel.cbCompleteBoomed();
};
e.prototype.setDefault = function() {
t.prototype.setDefault.call(this);
this.mIsBoom = !1;
};
e.prototype.moveStart = function(t) {
var e = this;
this.mIndex = this.mIndex - t;
var o = t * this.mSlot.mSlotConfig.DISTANCE, n = this.node.y - o, i = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START_QUICK : this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.moveTo(i, this.node.x, n), cc.callFunc(function() {
e.setBoom(!1);
e.resetItem();
e.mSlotReel.cbStopAllItemMoveStart();
}, this)));
};
e.prototype.moveStop = function(t) {
var e = this;
this.mIndex = this.mIndex - t;
var o = this.mSlot.mSlotConfig.POS_ITEM[this.mIndex], n = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START_QUICK : this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.moveTo(n, this.node.x, o).easing(cc.easeIn(5)), cc.callFunc(function() {
e.skeEffectVaCham.node.active = !0;
e.skeEffectVaCham.addAnimation(0, "animation", !1);
e.skeEffectVaCham.setCompleteListener(this.onEventVacham.bind(e));
e.mSlotReel.cbStopAllItemMoveStop();
}, this)));
};
e.prototype.moveBoom = function(t) {
var e = this;
this.mIndex = this.mIndex - t;
var o = this.mSlot.mSlotConfig.POS_ITEM[this.mIndex], n = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START_QUICK : this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.moveTo(n, this.node.x, o).easing(cc.easeIn(5)), cc.callFunc(function() {
e.setBoom(!1);
e.skeEffectVaCham.node.active = !0;
e.skeEffectVaCham.addAnimation(0, "animation", !1);
e.skeEffectVaCham.setCompleteListener(this.onEventVacham.bind(e));
e.mSlotReel.cbStopAllItemMoveBoom();
}, this)));
};
e.prototype.onEventVacham = function() {
this.skeEffectVaCham.node.active = !1;
};
e.prototype.resetItem = function() {
-1 == this.mIndex ? this.mIndex = 5 : -2 == this.mIndex ? this.mIndex = 4 : -3 == this.mIndex && (this.mIndex = 3);
this.node.y = this.mSlot.mSlotConfig.POS_ITEM[this.mIndex];
};
s([ h(sp.Skeleton) ], e.prototype, "skeBorder", void 0);
s([ h(sp.Skeleton) ], e.prototype, "skeBoomed", void 0);
s([ h(cc.Sprite) ], e.prototype, "sprBorder", void 0);
s([ h(sp.Skeleton) ], e.prototype, "skeEffectVaCham", void 0);
return s([ u ], e);
}(l.default);
o.default = m;
cc._RF.pop();
}, {
"../../base_slot/SlotConstant": void 0,
"../../base_slot/SlotItem": void 0,
"../../base_slot/util/AudioUtil": void 0,
"../../base_slot/util/Util": void 0
} ],
SlotMayaLine: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3a60b2ldTxEwJ37b1qKgNQH", "SlotMayaLine");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, n) {
var i, s = arguments.length, l = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(e, o, l) : i(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotLine"), c = cc._decorator, r = c.ccclass, a = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSlotMachine = null;
e.mSlot = null;
e.mListSlotItem = [];
return e;
}
e.prototype.showWin = function() {
t.prototype.showWin.call(this);
for (var e = 0; e < this.mListSlotItem.length; e++) this.mListSlotItem[e].showWin();
};
e.prototype.showHover = function() {
for (var t = 0; t < this.mListSlotItem.length; t++) this.mListSlotItem[t].showHover();
};
e.prototype.showLeave = function() {
for (var t = 0; t < this.mListSlotItem.length; t++) this.mListSlotItem[t].showLeave();
};
return s([ r ], e);
}(l.default));
o.default = a;
cc._RF.pop();
}, {
"../../base_slot/SlotLine": void 0
} ],
SlotMayaMachine: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "18368oCY6NPTryvFegrol0t", "SlotMayaMachine");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, n) {
var i, s = arguments.length, l = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(e, o, l) : i(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotMachine"), c = t("../../base_slot/util/AudioUtil"), r = cc._decorator, a = r.ccclass, p = r.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listSlotReel = [];
e.listSlotLine = [];
e.mSlot = null;
e.mSlotRoom = null;
e.mListSlotItemResult = [];
e.mCountReelStartMove = 0;
e.mCountReelStopMove = 0;
e.mCountReelStopMoveBoom = 0;
e.mCountReelCompleteBoom = 0;
e.mIsAllReelDoneStart = !1;
e.mIsAllReelDoneStop = !1;
e.mNumReelExistBoom = 0;
return e;
}
e.prototype.init = function(e) {
t.prototype.init.call(this, e);
for (var o = 0; o < 3; o++) for (var n = 0; n < 5; n++) this.mListSlotItemResult.push(this.listSlotReel[n].listItem[o]);
lngui.ZLog.log("mListSlotItemResult", this.mListSlotItemResult);
};
e.prototype.spin = function() {
this.mAudioIdSpin = c.default.playSound(this.mSlot.mSlotAudio.reelSpin, this.mSlot.mIsSound, !0);
this.setDefault();
for (var t = 0; t < this.listSlotReel.length; t++) this.listSlotReel[t].spin();
};
e.prototype.setDefault = function() {
t.prototype.setDefault.call(this);
this.mIsAllReelDoneStart = !1;
this.mIsAllReelDoneStop = !1;
};
e.prototype.setLineSelect = function(t) {
for (var e = 0; e < this.listSlotLine.length; e++) {
for (var o = !0, n = 0; n < t.length; n++) if (this.listSlotLine[e].getId() === t[n]) {
o = !1;
break;
}
o ? this.listSlotLine[e].setSelect(!1) : this.listSlotLine[e].setSelect(!0);
}
};
e.prototype.stopSpin = function() {
for (var t = this.mSlotRoom.mDataSpin.listItem[0], e = 0; e < this.listSlotReel.length; e++) {
var o = e, n = e + 5, i = e + 10;
this.listSlotReel[e].setIdItemResult([ t[i], t[n], t[o] ]);
this.listSlotReel[e].stopSpin();
}
this.showLog(0, t);
};
e.prototype.showLog = function() {};
e.prototype.showLineWin = function(t) {
for (var e = 0; e < t.listIdx.length; e++) {
var o = t.listIdx[e];
this.mListSlotItemResult[o].setBoom(!0);
}
for (e = 0; e < this.mListSlotItemResult.length; e++) this.mListSlotItemResult[e].showLose();
var n = this.getSlotLineById(t.id);
try {
n.showWin();
} catch (t) {
return;
}
};
e.prototype.showBoom = function() {
for (var t = 0; t < this.mListSlotItemResult.length; t++) this.mListSlotItemResult[t].showIdle();
for (t = 0; t < this.listSlotReel.length; t++) this.listSlotReel[t].isBoom() && this.listSlotReel[t].showBoom();
};
e.prototype.isBoom = function() {
return this.mNumReelExistBoom > 0;
};
e.prototype.checkBoom = function() {
this.mNumReelExistBoom = 0;
for (var t = 0; t < this.listSlotReel.length; t++) this.listSlotReel[t].checkBoom() && this.mNumReelExistBoom++;
return this.mNumReelExistBoom > 0;
};
e.prototype.getListLineSelect = function() {
return this.getNumLineSelect().join();
};
e.prototype.updateAllItemResult = function() {
this.mListSlotItemResult = [];
for (var t = 2; t >= 0; t--) for (var e = 0; e < this.listSlotReel.length; e++) {
var o = this.listSlotReel[e].getSlotItemByIndex(t);
this.mListSlotItemResult.push(o);
}
};
e.prototype.updateAllLine = function() {
for (var t = 0; t < this.mSlot.mSlotConfig.LINE.length; t++) {
for (var e = this.mSlot.mSlotConfig.LINE[t], o = [], n = 0; n < e.length; n++) o.push(this.mListSlotItemResult[e[n]]);
this.listSlotLine[t].updateSlotItem(o);
}
};
e.prototype.cbReelMoveStart = function() {
this.mCountReelStartMove++;
if (this.mCountReelStartMove == this.listSlotReel.length) {
this.mCountReelStartMove = 0;
this.mIsAllReelDoneStart = !0;
this.mSlotRoom.checkResult();
}
};
e.prototype.cbReelMoveStop = function() {
c.default.playSound(this.mSlot.mSlotAudio.reelStop, this.mSlot.mIsSound);
this.mCountReelStopMove++;
if (this.mCountReelStopMove == this.listSlotReel.length) {
c.default.stopSound(this.mAudioIdSpin);
this.mCountReelStopMove = 0;
this.mIsAllReelDoneStop = !0;
this.updateAllItemResult();
this.updateAllLine();
this.mSlotRoom.showResult();
}
};
e.prototype.cbReelCompleteBoom = function() {
this.mCountReelCompleteBoom++;
if (this.mCountReelCompleteBoom == this.mNumReelExistBoom) {
this.mCountReelCompleteBoom = 0;
for (var t = this.mSlotRoom.mDataSpin.listItem[this.mSlotRoom.mTurnWinCurent - 1], e = 0; e < this.listSlotReel.length; e++) {
var o = e, n = e + 5, i = e + 10;
this.listSlotReel[e].setIdItemResult([ t[o], t[n], t[i] ]);
this.listSlotReel[e].isBoom() && this.listSlotReel[e].showMoveBoom();
}
this.showLog(this.mSlotRoom.mTurnWinCurent - 1, t);
}
};
e.prototype.cbReelMoveBoomStop = function() {
this.mCountReelStopMoveBoom++;
if (this.mCountReelStopMoveBoom == this.mNumReelExistBoom) {
this.mCountReelStopMoveBoom = 0;
this.updateAllItemResult();
this.updateAllLine();
this.mSlotRoom.showResult();
}
};
s([ p({
override: !0
}) ], e.prototype, "listSlotReel", void 0);
s([ p({
override: !0
}) ], e.prototype, "listSlotLine", void 0);
return s([ a ], e);
}(l.default);
o.default = u;
cc._RF.pop();
}, {
"../../base_slot/SlotMachine": void 0,
"../../base_slot/util/AudioUtil": void 0
} ],
SlotMayaRank: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "09c698+4QtO/btCx2QTfbKa", "SlotMayaRank");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, n) {
var i, s = arguments.length, l = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(e, o, l) : i(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("./SlotMayaHandler"), c = cc._decorator, r = c.ccclass, a = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scrollview = null;
e.cellRank = null;
e.heightItem = 0;
e.spacing = 0;
e.spawnCount = 0;
e.bufferZone = 0;
e.lastContentPosY = 0;
e.updateTimer = 0;
e.updateInterval = .2;
e.mState = 0;
e.mListDataCell = [];
e.mListCell = [];
e.mSlot = null;
e.listDataBigwinCache = [];
e.listDataJackpotCache = [];
return e;
}
e.prototype.onLoad = function() {
l.default.instance.sendGetRank("GetHonor");
this.scrollview.content.destroyAllChildren();
cc.systemEvent.on("SlotMaya_get_rank", this.onEventGetRank, this);
};
e.prototype.onBtn = function(t, e) {
l.default.instance.sendGetRank(e);
};
e.prototype.onDestroy = function() {
cc.systemEvent.off("SlotMaya_get_rank", this.onEventGetRank, this);
};
e.prototype.onEventGetRank = function(t) {
this.setData(t);
};
e.prototype.update = function(t) {
if (this.node.active) {
this.updateTimer += t;
if (this.updateTimer < this.updateInterval) return;
this.updateTimer = 0;
for (var e = this.bufferZone, o = this.scrollview.content.y < this.lastContentPosY, n = (this.heightItem + this.spacing) * this.mListCell.length, i = 0; i < this.mListCell.length; ++i) {
var s = this.mListCell[i].node, l = this.getPositionInView(s);
if (o) {
if (l.y < -e && s.y + n < 0) {
s.y = s.y + n;
var c = this.mListCell[i], r = c.mIdx - this.mListCell.length;
c.setData(this.mListDataCell[r], r);
}
} else if (l.y > e && s.y - n > -this.scrollview.content.height) {
s.y = s.y - n;
var a = this.mListCell[i];
r = a.mIdx + this.mListCell.length;
a.setData(this.mListDataCell[r], r);
}
}
this.lastContentPosY = this.scrollview.content.y;
}
};
e.prototype.getPositionInView = function(t) {
var e = t.parent.convertToWorldSpaceAR(t.position);
return this.scrollview.node.convertToNodeSpaceAR(e);
};
e.prototype.setData = function(t) {
this.mListDataCell = t;
this.scrollview.content.destroyAllChildren();
this.mListCell = [];
var e = t.length;
this.scrollview.content.height = e * (this.heightItem + this.spacing) + this.spacing;
this.spawnCount <= e && this.spawnCount;
for (var o = 0; o < e; o++) {
var n = cc.instantiate(this.cellRank), i = n.getComponent("SlotRankCell");
if (t.IsJackport) {
this.mListDataCell[o].IsJackport = !0;
i.setData(this.mListDataCell[o], o);
} else i.setData(this.mListDataCell[o], o);
var s = -n.height * (.5 + o) - this.spacing * (o + 1);
n.setPosition(0, s);
this.mListCell.push(i);
this.scrollview.content.addChild(n);
}
};
e.prototype.onBtnThanglon = function() {
this.mState = 0;
this.setData(this.listDataBigwinCache);
};
e.prototype.onBtnNohu = function() {
this.mState = 1;
this.setData(this.listDataJackpotCache);
};
e.prototype.onBtnClose = function() {
this.node.destroy();
};
s([ a(cc.ScrollView) ], e.prototype, "scrollview", void 0);
s([ a(cc.Prefab) ], e.prototype, "cellRank", void 0);
s([ a(cc.Integer) ], e.prototype, "heightItem", void 0);
s([ a(cc.Integer) ], e.prototype, "spacing", void 0);
s([ a(cc.Integer) ], e.prototype, "spawnCount", void 0);
s([ a(cc.Integer) ], e.prototype, "bufferZone", void 0);
return s([ r ], e);
}(lngui.UIPopup);
o.default = p;
cc._RF.pop();
}, {
"./SlotMayaHandler": "SlotMayaHandler"
} ],
SlotMayaReel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "df9aaCrEN5DAJaWK1h8jv6G", "SlotMayaReel");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, n) {
var i, s = arguments.length, l = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(e, o, l) : i(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotReel"), c = cc._decorator, r = c.ccclass, a = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listItem = [];
e.mSlotMachine = null;
e.mSlot = null;
e.mCountItemStopMove = 0;
e.mCountItemStartMove = 0;
e.mCountItemBoomed = 0;
e.mCountMoveBoom = 0;
e.mNumItemBoomMove = 0;
e.mExistBoom = !1;
e.mNumBoom = 0;
return e;
}
e.prototype.setDefault = function() {
t.prototype.setDefault.call(this);
this.mCountItemStopMove = 0;
this.mCountItemStartMove = 0;
this.mCountItemBoomed = 0;
this.mCountMoveBoom = 0;
this.mNumItemBoomMove = 0;
this.mExistBoom = !1;
this.mNumBoom = 0;
};
e.prototype.spin = function() {
t.prototype.spin.call(this);
for (var e = 0; e < this.listItem.length; e++) ;
var o = this.getSlotItemByIndex(2), n = this.getSlotItemByIndex(1), i = this.getSlotItemByIndex(0), s = this.mSlotMachine.mSlot.mSlotConfig.TIME_DELAY_SPIN_REEL, l = 0 * s, c = 5 * s + this.mId * s * .8, r = 10 * s + this.mId * s * .7;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(l), cc.callFunc(function() {
i.moveStart(3);
}, this), cc.delayTime(c), cc.callFunc(function() {
n.moveStart(3);
}, this), cc.delayTime(r), cc.callFunc(function() {
o.moveStart(3);
}, this)));
};
e.prototype.stopSpin = function() {
for (var t = 0; t < this.listItem.length; t++) ;
var e = this.getSlotItemByIndex(5), o = this.getSlotItemByIndex(4), n = this.getSlotItemByIndex(3);
e.setId(this.listIdItemResult[2]);
o.setId(this.listIdItemResult[1]);
n.setId(this.listIdItemResult[0]);
var i = this.mSlotMachine.mSlot.mSlotConfig.TIME_DELAY_SPIN_REEL, s = 0 * i + this.mId * i, l = 5 * i + this.mId * i * .8, c = 10 * i + this.mId * i * .6;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(s), cc.callFunc(function() {
n.moveStop(3);
}, this), cc.delayTime(l), cc.callFunc(function() {
o.moveStop(3);
}, this), cc.delayTime(c), cc.callFunc(function() {
e.moveStop(3);
}, this)));
};
e.prototype.isBoom = function() {
return this.mExistBoom;
};
e.prototype.checkBoom = function() {
var t = this.getSlotItemByIndex(0), e = this.getSlotItemByIndex(1), o = this.getSlotItemByIndex(2);
this.mNumBoom = 0;
t.isBoom() && this.mNumBoom++;
e.isBoom() && this.mNumBoom++;
o.isBoom() && this.mNumBoom++;
this.mExistBoom = this.mNumBoom > 0;
return this.mExistBoom;
};
e.prototype.showBoom = function() {
var t = this.getSlotItemByIndex(2), e = this.getSlotItemByIndex(1), o = this.getSlotItemByIndex(0);
if (o.isBoom()) {
o.node.stopAllActions();
o.node.runAction(cc.sequence(cc.delayTime(0), cc.callFunc(function() {
o.showBoom();
}, this)));
}
if (e.isBoom()) {
e.node.stopAllActions();
e.node.runAction(cc.sequence(cc.delayTime(0), cc.callFunc(function() {
e.showBoom();
}, this)));
}
if (t.isBoom()) {
t.node.stopAllActions();
t.node.runAction(cc.sequence(cc.delayTime(0), cc.callFunc(function() {
t.showBoom();
}, this)));
}
};
e.prototype.showMoveBoom = function() {
for (var t = 0; t < this.listItem.length; t++) ;
this.mNumItemBoomMove = 0;
var e = 0;
for (t = 0; t < this.listItem.length; t++) {
var o = this.getSlotItemByIndex(t);
if (o.isBoom()) {
e++;
var n = this.listItem.length - 1 + e;
o.setIndex(n);
o.setBoom(!1);
o.showIdle();
o.node.active = !1;
} else if (this.listIdItemResult.length > 0) {
var i = this.listIdItemResult.pop();
o.setId(i);
if (0 != o.getIndex()) {
this.mNumItemBoomMove++;
o.moveBoom(e);
}
}
}
};
e.prototype.sortItem = function() {
for (var t = 3, e = 0; e < this.listItem.length; e++) if (this.listItem[e].getIndex() > 2) {
this.listItem[e].setIndex(t);
this.listItem[e].node.active = !0;
this.listItem[e].resetItem();
t++;
}
};
e.prototype.cbStopAllItemMoveStart = function() {
this.mCountItemStartMove++;
if (3 == this.mCountItemStartMove) {
this.mCountItemStartMove = 0;
for (var t = 0; t < this.listItem.length; t++) ;
this.mSlotMachine.cbReelMoveStart();
}
};
e.prototype.cbStopAllItemMove = function() {};
e.prototype.cbStopAllItemMoveStop = function() {
this.mCountItemStopMove++;
if (3 == this.mCountItemStopMove) {
this.mCountItemStopMove = 0;
for (var t = 0; t < this.listItem.length; t++) ;
this.mSlotMachine.cbReelMoveStop();
}
};
e.prototype.cbCompleteBoomed = function() {
this.mCountItemBoomed++;
if (this.mCountItemBoomed == this.mNumBoom) {
this.mCountItemBoomed = 0;
this.mSlotMachine.cbReelCompleteBoom();
}
};
e.prototype.cbStopAllItemMoveBoom = function() {
this.mCountMoveBoom++;
if (this.mCountMoveBoom == this.mNumItemBoomMove) {
this.mCountMoveBoom = 0;
this.sortItem();
for (var t = 0; t < this.listItem.length; t++) ;
this.mSlotMachine.cbReelMoveBoomStop();
}
};
s([ a({
override: !0
}) ], e.prototype, "listItem", void 0);
return s([ r ], e);
}(l.default);
o.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotReel": void 0
} ],
SlotMayaRoomUI: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "279a9efN/RGuKeXj4EVrS18", "SlotMayaRoomUI");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, n) {
var i, s = arguments.length, l = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(e, o, l) : i(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotRoomUI"), c = cc._decorator, r = c.ccclass, a = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.btnSelectLine = null;
e.btnBet = null;
e.btnSetting = null;
e.btnRank = null;
e.btnHistory = null;
e.btnGuide = null;
return e;
}
e.prototype.interactableBtnSelectLine = function(t) {
this.btnSelectLine.interactable = t;
};
e.prototype.interactableBtnBet = function(t) {
this.btnBet.interactable = t;
};
s([ a(cc.Button) ], e.prototype, "btnSelectLine", void 0);
s([ a(cc.Button) ], e.prototype, "btnBet", void 0);
s([ a(cc.Toggle) ], e.prototype, "btnSetting", void 0);
s([ a(cc.Button) ], e.prototype, "btnRank", void 0);
s([ a(cc.Button) ], e.prototype, "btnHistory", void 0);
s([ a(cc.Button) ], e.prototype, "btnGuide", void 0);
return s([ r ], e);
}(l.default);
o.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotRoomUI": void 0
} ],
SlotMayaRoom: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d3c3ePMlD5N9bxJFNpdZLh0", "SlotMayaRoom");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, n) {
var i, s = arguments.length, l = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(e, o, l) : i(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("./SlotMaya"), c = t("./SlotMayaIconLine"), r = t("./SlotMayaHandler"), a = t("./SlotMayaVar"), p = t("../../base_slot/SlotRoom"), u = t("../../base_slot/SlotConstant"), h = cc._decorator, m = h.ccclass, f = h.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listIconLine = [];
e.mSlotMachine = null;
e.mSlotEffect = null;
e.mSlotRoomUI = null;
e.mSlot = null;
e.mDataSpin = null;
e.mTurnWinCurent = 1;
e.mIsJackpot = !1;
e.mNumFreespin = 0;
e.mIsInit = !1;
e.mMoneyBonus = 0;
e.prbSelectLine = null;
return e;
}
o = e;
Object.defineProperty(e, "instance", {
get: function() {
o._instance || (o._instance = new o());
return o._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
o._instance = this;
};
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateGold, this);
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateGold, this);
};
e.prototype.onUpdateGold = function(t) {
lngui.UserManager.instance.mainUserInfo.Money = t;
this.updateUserMoney(t);
};
e.prototype.onDestroy = function() {
t.prototype.onDestroy.call(this);
};
e.prototype.init = function(t) {
this.mSlot = t;
if (!this.mIsInit) {
this.mIsInit = !0;
this.mSlotEffect.init(this);
this.mSlotMachine.init(this);
for (var e = 0; e < this.listIconLine.length; e++) {
this.listIconLine[e].cbHover = this.onHoverLine.bind(this);
this.listIconLine[e].tgHover = this;
this.listIconLine[e].cbLeave = this.onLeaveLine.bind(this);
this.listIconLine[e].tgLeave = this;
}
}
this.mSlot.isTrial() ? this.mUserMoney = 5e7 : this.mUserMoney = lngui.UserManager.instance.mainUserInfo.Money;
this.updateTotalWin(this.mMoneyWin);
this.updateTotalBet();
this.updateLineSelect(this.mSlotMachine.getNumLineSelect());
this.updateBet(l.default.instance.getMoneyBet());
this.updateUserMoney(this.mUserMoney);
this.onUpdatePot(this.mSlot.mListPot[this.mSlot.getIdxPot()]);
this.mSlotRoomUI.btnSound.isChecked = this.mSlot.mIsSound;
this.mSlotRoomUI.btnMusic.isChecked = this.mSlot.mIsMusic;
this.mSlotRoomUI.btnSound.target.active = !this.mSlotRoomUI.btnSound.isChecked;
this.mSlotRoomUI.btnMusic.target.active = !this.mSlotRoomUI.btnMusic.isChecked;
this.mSlotRoomUI.btnMusic.node.setPosition(cc.winSize.width / 2 + 500, this.mSlotRoomUI.btnMusic.node.y);
this.mSlotRoomUI.btnSound.node.setPosition(cc.winSize.width / 2 + 500, this.mSlotRoomUI.btnSound.node.y);
this.mSlotRoomUI.btnGuide.node.setPosition(cc.winSize.width / 2 + 500, this.mSlotRoomUI.btnGuide.node.y);
this.mSlotRoomUI.btnHistory.node.setPosition(cc.winSize.width / 2 + 500, this.mSlotRoomUI.btnHistory.node.y);
this.mSlotRoomUI.btnRank.node.setPosition(cc.winSize.width / 2 + 500, this.mSlotRoomUI.btnRank.node.y);
};
e.prototype.onHoverLine = function(t) {
for (var e = this.mSlot.mSlotConfig.LINE[t - 1], o = 0; o < e.length; o++) this.mSlotMachine.mListSlotItemResult[e[o]].showHover();
};
e.prototype.onLeaveLine = function(t) {
for (var e = this.mSlot.mSlotConfig.LINE[t - 1], o = 0; o < e.length; o++) this.mSlotMachine.mListSlotItemResult[e[o]].showLeave();
};
e.prototype.setDefault = function() {
t.prototype.setDefault.call(this);
this.mTurnWinCurent = 1;
this.mMoneyBonus = 0;
};
e.prototype.spin = function() {
t.prototype.spin.call(this);
for (var e = 0; e < this.listIconLine.length; e++) this.listIconLine[e].setReady(!1);
this.mUserMoney -= this.getTotalBet();
this.updateUserMoney(this.mUserMoney);
this.mSlotRoomUI.interactableBtnSpin(!1);
this.mSlotRoomUI.interactableBtnSelectLine(!1);
this.mSlotRoomUI.interactableBtnBet(!1);
this.mSlotRoomUI.interactableBtnBack(!1);
l.default.instance.isTrial() ? r.default.instance.sendSpinTry("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20", 5e7, a.default.isPlaytryJackpotValue, 0) : r.default.instance.sendSpin(this.mSlot.mMoneyType, this.mSlot.getBetId(), this.mSlotMachine.getListLineSelect());
};
e.prototype.stopSpin = function(e) {
t.prototype.stopSpin.call(this, e);
this.mSlotRoomUI.updateSession(e.session);
this.checkResult();
};
e.prototype.checkResult = function() {
this.mSlotMachine.mIsAllReelDoneStart && this.mDataSpin && this.mSlotMachine.stopSpin();
};
e.prototype.showResult = function() {
var t = this.mDataSpin.getLineWinByTurn(this.mTurnWinCurent);
if (t) {
if (t.jackpot > 0) {
this.mIsJackpot = !0;
this.mSlot.isTrial();
this.mSlotEffect.showJackpot(this.showResult, this, t.jackpot);
} else if (t.bonus > 2 && t.bonus < 6) {
this.mSlot.isTrial();
this.mSlotEffect.showBonus(this.showResult, this, t.bonus - 3, t.moneyWin);
} else if (t.freespin > 0) {
this.mNumFreespin += t.freespin;
this.mSlotEffect.showFreespin(this.showResult, this, this.mNumFreespin);
} else t.moneyWin > 0 && this.mSlotEffect.showWin(this.showResult, this, t.moneyWin);
this.mSlotMachine.showLineWin(t);
} else {
this.mTurnWinCurent++;
this.mSlotMachine.checkBoom() && 0 == this.mIsJackpot ? this.mSlotMachine.showBoom() : this.checkNextSpin();
}
};
e.prototype.nextSpin = function() {
var t = this;
if (this.mNumFreespin > 0) {
this.mNumFreespin--;
this.mSlotEffect.showNumFreespin(this.mNumFreespin);
clearTimeout(this.mTimeoutNextSpin);
var e = function() {
clearTimeout(t.mTimeoutNextSpin);
t.spin();
};
this.mTimeoutNextSpin = setTimeout(e.bind(this), 1e3 * this.mSlot.mSlotConfig.TIME_DELAY_NEXT_SPIN);
} else {
if (this.mSlot.isTrial()) this.mUserMoney += this.mMoneyWin + this.mMoneyBonus; else {
this.mUserMoney = this.mDataSpin.userMoney + this.mMoneyBonus;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.mUserMoney);
}
this.updateUserMoney(this.mUserMoney);
if (this.mIsAutoSpin) {
clearTimeout(this.mTimeoutNextSpin);
e = function() {
clearTimeout(t.mTimeoutNextSpin);
t.mState = u.SLOT_STATE.READY;
t.onBtnSpin();
};
this.mTimeoutNextSpin = setTimeout(e.bind(this), 1e3 * this.mSlot.mSlotConfig.TIME_DELAY_NEXT_SPIN);
} else {
this.mState = u.SLOT_STATE.READY;
for (var o = 0; o < this.listIconLine.length; o++) this.listIconLine[o].setReady(!0);
this.mSlotRoomUI.interactableBtnSpin(!0);
this.mSlotRoomUI.interactableBtnSelectLine(!0);
this.mSlotRoomUI.interactableBtnBet(!0);
this.mSlotRoomUI.interactableBtnBack(!0);
}
}
};
e.prototype.updateLineSelect = function(t) {
this.mSlotRoomUI.updateLineSelect(t.length);
this.mSlotMachine.setLineSelect(t);
this.updateTotalBet();
};
e.prototype.showMiniBonus = function() {};
e.prototype.checkNextSpin = function() {
this.mDataSpin.totalWin >= 15 * this.getTotalBet() && !this.mIsJackpot ? this.mSlotEffect.showBigWin(this.nextSpin, this, this.mMoneyWin) : this.nextSpin();
};
e.prototype.onBtnQuickSpin = function() {
if (this.mUserMoney < this.getTotalBet()) l.default.instance.mTooltip.show("Số dư không đủ để quay"); else if (this.mState == u.SLOT_STATE.READY) {
this.mIsQuickSpin = !0;
this.mIsAutoSpin = !0;
this.mSlotRoomUI.visibleBtnStopSpin(!0);
this.mSlotRoomUI.visibleBtnAutoSpin(!1);
this.mSlotRoomUI.visibleBtnQuickSpin(!1);
this.mState == u.SLOT_STATE.READY && this.spin();
} else l.default.instance.mTooltip.show("Không quay được khi chưa kết thúc phiên");
};
e.prototype.onBtnAutoSpin = function() {
if (this.mUserMoney < this.getTotalBet()) l.default.instance.mTooltip.show("Số dư không đủ để quay"); else if (this.mState == u.SLOT_STATE.READY) {
this.mIsAutoSpin = !0;
this.mSlotRoomUI.visibleBtnStopSpin(!0);
this.mSlotRoomUI.visibleBtnAutoSpin(!1);
this.mSlotRoomUI.visibleBtnQuickSpin(!1);
this.mState == u.SLOT_STATE.READY && this.spin();
} else l.default.instance.mTooltip.show("Không quay được khi chưa kết thúc phiên");
};
e.prototype.onBtnAddBet = function() {
if (this.mSlot.isTrial()) this.mSlot.mTooltip.show("Không sử dụng được chức năng này ở chơi thử"); else if (this.mState == u.SLOT_STATE.READY) {
this.mSlot.mRoomId++;
this.mSlot.mRoomId > 3 && (this.mSlot.mRoomId = 1);
this.updateBet(l.default.instance.getMoneyBet());
this.updateTotalBet();
this.onUpdatePot(this.mSlot.mListPot[this.mSlot.mRoomId - 1]);
r.default.instance.sendPlayNow();
}
};
e.prototype.onBtnSetting = function() {
if (this.mSlotRoomUI.btnSetting.isChecked) {
this.mSlotRoomUI.btnMusic.node.runAction(cc.sequence(cc.delayTime(0), cc.moveTo(.2, cc.v2(570, 260)).easing(cc.easeElasticOut(.4))));
this.mSlotRoomUI.btnSound.node.runAction(cc.sequence(cc.delayTime(.1), cc.moveTo(.2, cc.v2(570, 210)).easing(cc.easeElasticOut(.4))));
} else {
this.mSlotRoomUI.btnMusic.node.runAction(cc.sequence(cc.delayTime(0), cc.moveTo(.2, cc.v2(1e3, 260)).easing(cc.easeElasticIn(.4))));
this.mSlotRoomUI.btnSound.node.runAction(cc.sequence(cc.delayTime(.1), cc.moveTo(.2, cc.v2(1e3, 210)).easing(cc.easeElasticIn(.4))));
}
};
e.prototype.onBtnGuide = function() {};
e.prototype.onBtnHistory = function() {};
e.prototype.onBtnRank = function() {};
e.prototype.onBtnSelectLine = function() {
var t = this;
lngui.UIPopupManager.instance.showPopupFromPrefab(this.prbSelectLine, function(e) {
e.init(t);
});
};
e.prototype.onBtnBack = function() {
this.mSlot.onBtnBack();
};
e.prototype.onBtnSound = function() {
t.prototype.onBtnSound.call(this);
this.mSlotRoomUI.btnSound.target.active = !this.mSlotRoomUI.btnSound.isChecked;
};
e.prototype.onBtnMusic = function() {
t.prototype.onBtnMusic.call(this);
this.mSlotRoomUI.btnMusic.target.active = !this.mSlotRoomUI.btnMusic.isChecked;
};
var o;
e._instance = null;
s([ f([ c.default ]) ], e.prototype, "listIconLine", void 0);
s([ f({
override: !0
}) ], e.prototype, "mSlotMachine", void 0);
s([ f({
override: !0
}) ], e.prototype, "mSlotEffect", void 0);
s([ f({
override: !0
}) ], e.prototype, "mSlotRoomUI", void 0);
s([ f(cc.Prefab) ], e.prototype, "prbSelectLine", void 0);
return o = s([ m ], e);
}(p.default);
o.default = d;
cc._RF.pop();
}, {
"../../base_slot/SlotConstant": void 0,
"../../base_slot/SlotRoom": void 0,
"./SlotMaya": "SlotMaya",
"./SlotMayaHandler": "SlotMayaHandler",
"./SlotMayaIconLine": "SlotMayaIconLine",
"./SlotMayaVar": "SlotMayaVar"
} ],
SlotMayaSelectLine: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5321aGeKBlGKqFWDhLLebWz", "SlotMayaSelectLine");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, n) {
var i, s = arguments.length, l = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(e, o, l) : i(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotSelectLine"), c = t("./SlotMayaRoom"), r = cc._decorator, a = r.ccclass, p = (r.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSlotRoom = null;
e.mSlot = null;
return e;
}
e.prototype.init = function(t) {
this.mSlotRoom = t;
this.mSlot = this.mSlotRoom.mSlot;
for (var e = this.mSlotRoom.mSlotMachine.getNumLineSelect(), o = 0; o < this.listLineItem.length; o++) {
for (var n = !1, i = 0; i < e.length; i++) if (e[i] == o + 1) {
n = !0;
break;
}
this.listLineItem[o].isChecked = n;
}
};
e.prototype.hide = function() {
for (var e = [], o = 0; o < this.listLineItem.length; o++) this.listLineItem[o].isChecked && e.push(o + 1);
if (0 == e.length) this.mSlot.mTooltip.show("Bạn phải chọn ít nhất 1 dòng"); else {
c.default.instance.updateLineSelect(e);
t.prototype.hide.call(this);
}
};
e.prototype.onBtnAll = function(t, e) {
switch (e) {
case "chan":
this.onBtnChan();
break;

case "le":
this.onBtnLe();
break;

case "bochon":
this.onBtnBoChon();
break;

case "all":
this.onBtnTatCa();
break;

case "close":
this.onBtnClose();
}
};
return s([ a ], e);
}(l.default));
o.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotSelectLine": void 0,
"./SlotMayaRoom": "SlotMayaRoom"
} ],
SlotMayaSelectRoom: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c7b8cR44J1DLK0ouRlDfoMv", "SlotMayaSelectRoom");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, n) {
var i, s = arguments.length, l = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(e, o, l) : i(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotSelectRoom"), c = cc._decorator, r = c.ccclass, a = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSlot = null;
return e;
}
return s([ r ], e);
}(l.default));
o.default = a;
cc._RF.pop();
}, {
"../../base_slot/SlotSelectRoom": void 0
} ],
SlotMayaVar: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "51c42a5iydC1opF+hrGUsyb", "SlotMayaVar");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function t() {}
t.api = {
negotiate: "https://maya." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
hub: "gamehub",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate
};
t.KEY_SOUND = "SlotMaya_sound";
t.KEY_MUSIC = "SlotMaya_music";
t.jackPot = [ 0, 5e5, 5e6, 5e7 ];
t.isPlaytryJackpotValue = 5e7;
return t;
}();
o.default = n;
cc._RF.pop();
}, {} ],
SlotMayaXPotCell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "921d9diW/VLGqdjPAuwHck+", "SlotMayaXPotCell");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, n) {
var i, s = arguments.length, l = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(e, o, l) : i(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotXPotCell"), c = cc._decorator, r = c.ccclass, a = (c.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.updatePot = function() {};
e.prototype.setData = function(t) {
this.mData = t;
this.node.active = t.IsEvent;
if (1 == t.RoomID) {
this.txtPotCount.node.active = !0;
t.NormalJackpot > 0 ? this.txtPotCount.string = "X6 SAU " + t.NormalJackpot + " HŨ" : this.txtPotCount.string = "X6 CÒN LẠI " + t.EventJackpotRemain + " HŨ";
} else if (2 == t.RoomID) {
this.txtPotCount.node.active = !0;
t.NormalJackpot > 0 ? this.txtPotCount.string = "X4 SAU " + t.NormalJackpot + " HŨ" : this.txtPotCount.string = "X4 CÒN LẠI " + t.EventJackpotRemain + " HŨ";
} else if (3 == t.RoomID && t.NormalJackpot > 0) {
this.txtPotCount.node.active = !0;
t.NormalJackpot > 0 ? this.txtPotCount.string = "X2 SAU " + t.NormalJackpot + " HŨ" : this.txtPotCount.string = "X2 CÒN LẠI " + t.EventJackpotRemain + " HŨ";
} else {
this.txtPotCount.node.active = !1;
this.mSlotXPot.mSlot.onUpdatePot(this.mSlotXPot.mSlot.mListPot);
}
};
return s([ r ], e);
}(l.default));
o.default = a;
cc._RF.pop();
}, {
"../../base_slot/SlotXPotCell": void 0
} ],
SlotMayaXPot: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d523433quBOKYOoIrt9JHXi", "SlotMayaXPot");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, n) {
var i, s = arguments.length, l = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(e, o, l) : i(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotXPot"), c = cc._decorator, r = c.ccclass, a = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listPotCell = [];
e.mSlot = null;
e.mData = null;
return e;
}
e.prototype.init = function(e) {
t.prototype.init.call(this, e);
};
e.prototype.updatePot = function(t) {
if (this.mData.IsEvent) for (var e = 0; e < this.listPotCell.length; e++) this.listPotCell[e].setData(t[e]);
};
e.prototype.onEventXPot = function(t) {
if (t[0].IsEvent) {
this.mData = t;
this.node.active = !0;
for (var e = 0; e < t.length; e++) this.listPotCell[e] && this.listPotCell[e].setData(t[e]);
} else this.node.active = !1;
};
s([ a({
override: !0
}) ], e.prototype, "listPotCell", void 0);
return s([ r ], e);
}(l.default);
o.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotXPot": void 0
} ],
SlotMaya: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "df13dSHImFHd6Bds/gA/9EA", "SlotMaya");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, n) {
var i, s = arguments.length, l = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (l = (s < 3 ? i(l) : s > 3 ? i(e, o, l) : i(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("./SlotMayaSelectRoom"), c = t("./SlotMayaRoom"), r = t("./SlotMayaVar"), a = t("./SlotMayaXPot"), p = t("../../base_slot/Slot"), u = t("../../base_slot/SlotConstant"), h = cc._decorator, m = h.ccclass, f = h.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSlotPot = null;
e.mSlotNetwork = null;
e.mSlotConfig = null;
e.mSlotAudio = null;
e.mSlotSelectRoom = null;
e.mSlotRoom = null;
e.mDataJoin = null;
return e;
}
o = e;
Object.defineProperty(e, "instance", {
get: function() {
o._instance || (o._instance = new o());
return o._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
o._instance = this;
t.prototype.onLoad.call(this);
this.mIdGame = u.GAME_ID.PUBG;
var e = r.default.jackPot;
if (e && e.length > 0) {
this.mListPot[0] = e[0];
this.mListPot[1] = e[1];
this.mListPot[2] = e[2];
}
this.checkSound(r.default.KEY_SOUND, r.default.KEY_MUSIC);
this.mSlotSelectRoom.init(this);
this.mSlotPot.init(this);
};
e.prototype.onDestroy = function() {
t.prototype.onDestroy.call(this);
};
e.prototype.connectSuccess = function() {
this.mSlotNetwork.sendJoinRoom();
};
e.prototype.onJoinGameSuccess = function(t) {
this.onPlayNow(t);
};
e.prototype.onPlayNow = function(t) {
this.mDataJoin = t;
this.mSlotSelectRoom.node.active = !1;
this.mSlotRoom.node.active = !0;
this.mSlotRoom.init(this);
};
e.prototype.init = function() {};
e.prototype.onMessage = function(t) {
this.mTooltip.show(t);
this.mSlotRoom.node.active && (this.mSlotRoom.mSlotRoomUI.btnBack.interactable = !0);
};
e.prototype.onUpdatePot = function(t) {
if (t) {
var e = 0;
for (var o in t) {
var n = t[o];
if (n > 0) {
this.mListPot[e] = n;
e++;
}
}
this.mSlotSelectRoom && this.mSlotSelectRoom.onUpdatePot(this.mListPot);
this.mSlotRoom && this.mSlotRoom.onUpdatePot(this.mListPot[this.mRoomId - 1]);
}
};
e.prototype.onBtnBack = function() {
this.mSlotSelectRoom.node.active = !0;
this.mSlotRoom.node.active = !1;
};
var o;
e._instance = null;
s([ f(a.default) ], e.prototype, "mSlotPot", void 0);
s([ f({
override: !0
}) ], e.prototype, "mSlotNetwork", void 0);
s([ f({
override: !0
}) ], e.prototype, "mSlotConfig", void 0);
s([ f({
override: !0
}) ], e.prototype, "mSlotAudio", void 0);
s([ f(l.default) ], e.prototype, "mSlotSelectRoom", void 0);
s([ f(c.default) ], e.prototype, "mSlotRoom", void 0);
return o = s([ m ], e);
}(p.default);
o.default = d;
cc._RF.pop();
}, {
"../../base_slot/Slot": void 0,
"../../base_slot/SlotConstant": void 0,
"./SlotMayaRoom": "SlotMayaRoom",
"./SlotMayaSelectRoom": "SlotMayaSelectRoom",
"./SlotMayaVar": "SlotMayaVar",
"./SlotMayaXPot": "SlotMayaXPot"
} ]
}, {}, [ "SlotMaya", "SlotMayaAudio", "SlotMayaBonusGame", "SlotMayaConfig", "SlotMayaConst", "SlotMayaEffect", "SlotMayaEntity", "SlotMayaGuide", "SlotMayaHandler", "SlotMayaHistory", "SlotMayaHistoryCell", "SlotMayaIconLine", "SlotMayaItem", "SlotMayaLine", "SlotMayaMachine", "SlotMayaRank", "SlotMayaReel", "SlotMayaRoom", "SlotMayaRoomUI", "SlotMayaSelectLine", "SlotMayaSelectRoom", "SlotMayaVar", "SlotMayaXPot", "SlotMayaXPotCell" ]);