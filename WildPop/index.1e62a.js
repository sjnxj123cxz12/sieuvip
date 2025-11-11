window.__require = function t(o, e, i) {
function n(l, c) {
if (!e[l]) {
if (!o[l]) {
var r = l.split("/");
r = r[r.length - 1];
if (!o[r]) {
var a = "function" == typeof __require && __require;
if (!c && a) return a(r, !0);
if (s) return s(r, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = r;
}
var p = e[l] = {
exports: {}
};
o[l][0].call(p.exports, function(t) {
return n(o[l][1][t] || t);
}, p, p.exports, t, o, e, i);
}
return e[l].exports;
}
for (var s = "function" == typeof __require && __require, l = 0; l < i.length; l++) n(i[l]);
return n;
}({
SlotWildPopAudio: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "116987tgUlHfL3TwirAzxWy", "SlotWildPopAudio");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, i) {
var n, s = arguments.length, l = s < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotAudio"), c = cc._decorator, r = c.ccclass, a = c.property, p = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.boom = null;
return o;
}
s([ a({
type: cc.AudioClip
}) ], o.prototype, "boom", void 0);
return s([ r ], o);
}(l.default);
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotAudio": void 0
} ],
SlotWildPopConfig: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "56d681H/Z1KDr3Nl6jw7TmG", "SlotWildPopConfig");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, i) {
var n, s = arguments.length, l = s < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotConfig"), c = cc._decorator, r = c.ccclass, a = c.property, p = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.DISTANCE = 175;
o.TIME_MOVE_ITEM_START_QUICK = 1;
o.TIME_MOVE_ITEM_START = 1;
o.TIME_MOVE_ITEM_QUICK = 1;
o.TIME_MOVE_ITEM = 1;
o.TIME_MOVE_ITEM_STOP_QUICK = 1;
o.TIME_MOVE_ITEM_STOP = 1;
o.TIME_DELAY_SPIN_REEL = 0;
o.LIST_SKE_ITEM = [];
o.LIST_SKE_KEY = [];
o.LIST_FRAME = [];
o.TIME_ANIM_FREESPIN = 2;
o.TIME_ANIM_BONUS = 10;
o.TIME_SINGLE_LINE = 2;
o.TIME_SINGLE_LINE_QUICK = 1.5;
o.LINE = [ [ 5, 6, 7, 8, 9 ], [ 0, 1, 2, 3, 4 ], [ 10, 11, 12, 13, 14 ], [ 5, 6, 2, 8, 9 ], [ 5, 6, 12, 8, 9 ], [ 0, 1, 7, 3, 4 ], [ 10, 11, 7, 13, 14 ], [ 0, 11, 2, 13, 4 ], [ 10, 1, 12, 3, 14 ], [ 5, 1, 12, 3, 9 ], [ 10, 6, 2, 8, 14 ], [ 0, 6, 12, 8, 4 ], [ 5, 11, 7, 3, 9 ], [ 5, 1, 7, 13, 9 ], [ 10, 6, 7, 8, 14 ], [ 0, 6, 7, 8, 4 ], [ 5, 11, 12, 13, 9 ], [ 5, 1, 2, 3, 9 ], [ 10, 11, 7, 3, 4 ], [ 0, 1, 7, 13, 14 ] ];
return o;
}
s([ a(cc.Integer) ], o.prototype, "DISTANCE", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_MOVE_ITEM_START_QUICK", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_MOVE_ITEM_START", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_MOVE_ITEM_QUICK", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_MOVE_ITEM", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_MOVE_ITEM_STOP_QUICK", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_MOVE_ITEM_STOP", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_DELAY_SPIN_REEL", void 0);
s([ a([ sp.SkeletonData ]) ], o.prototype, "LIST_SKE_ITEM", void 0);
s([ a([ cc.String ]) ], o.prototype, "LIST_SKE_KEY", void 0);
s([ a([ cc.SpriteFrame ]) ], o.prototype, "LIST_FRAME", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_ANIM_FREESPIN", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_ANIM_BONUS", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_SINGLE_LINE", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_SINGLE_LINE_QUICK", void 0);
return s([ r ], o);
}(l.default);
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotConfig": void 0
} ],
SlotWildPopEffect: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "ec43djUtuNGcplr+qaT89sg", "SlotWildPopEffect");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, i) {
var n, s = arguments.length, l = s < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotEffect"), c = t("../../base_slot/util/AudioUtil"), r = t("../../base_slot/util/FormatUtil"), a = cc._decorator, p = a.ccclass, u = a.property, h = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.nodeBonus = [];
o.txtEffectBonus = null;
o.nodeEffectFreespin = null;
o.txtEffectFreespin = null;
o.nodeNumFreespin = null;
o.txtNumFreespin = null;
o.mSlot = null;
o.mSlotRoom = null;
return o;
}
o.prototype.init = function(o) {
t.prototype.init.call(this, o);
};
o.prototype.showJackpot = function(t, o, e) {
var i = this;
void 0 === t && (t = null);
void 0 === o && (o = null);
c.default.playSound(this.mSlot.mSlotAudio.jackpot, this.mSlot.mIsSound);
this.mCallback = t;
this.mTarget = o;
var n = this;
this.nodeJackpot.active = !0;
this.txtMoneyJackpot.string = r.default.formatNumber(e);
var s = function() {
n.node.stopAllActions();
n.nodeJackpot.off(cc.Node.EventType.TOUCH_END, s.bind(n), n);
n.nodeJackpot.active = !1;
i.mCallback && i.mTarget && i.mCallback.call(i.mTarget);
};
this.nodeJackpot.once(cc.Node.EventType.TOUCH_END, s.bind(this), this);
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(this.mSlot.mSlotConfig.TIME_ANIM_JACKPOT), cc.callFunc(function() {
n.mCallback && n.mTarget && n.mCallback.call(n.mTarget);
}, this)));
};
o.prototype.showBigWin = function(t, o, e) {
void 0 === t && (t = null);
void 0 === o && (o = null);
c.default.playSound(this.mSlot.mSlotAudio.bigwin, this.mSlot.mIsSound);
this.mCallback = t;
this.mTarget = o;
var i = this;
this.nodeBigwin.active = !0;
this.txtMoneyBigwin.string = r.default.formatNumber(e);
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(this.mSlot.mSlotConfig.TIME_ANIM_BIGWIN), cc.callFunc(function() {
i.mCallback && i.mTarget && i.mCallback.call(i.mTarget);
i.nodeBigwin.active = !1;
}, this)));
};
o.prototype.showWin = function(t, o, e) {
void 0 === t && (t = null);
void 0 === o && (o = null);
c.default.playSound(this.mSlot.mSlotAudio.win, this.mSlot.mIsSound);
this.mCallback = t;
this.mTarget = o;
var i = this;
this.txtMoneyWin.node.active = !0;
this.txtMoneyWin.string = r.default.formatNumber(e);
this.txtMoneyWin.node.scale = 0;
this.txtMoneyWin.node.opacity = 0;
this.txtMoneyWin.node.setPosition(0, 0);
this.txtMoneyWin.node.stopAllActions();
this.txtMoneyWin.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(.2, 1.2, 1.2), cc.moveBy(.2, 0, 50), cc.fadeIn(.2)), cc.delayTime(.3), cc.spawn(cc.moveTo(.4, 80, -225).easing(cc.easeBackIn()), cc.scaleTo(.4, 1, 1)), cc.callFunc(function() {
i.txtMoneyWin.node.active = !1;
i.mSlotRoom.updateTotalWin(e);
i.node.stopAllActions();
i.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
i.nodeWin.active = !1;
i.mCallback && i.mTarget && i.mCallback.call(i.mTarget);
}, i)));
}, i)));
};
o.prototype.showBonus = function(t, o, e, i) {
void 0 === t && (t = null);
void 0 === o && (o = null);
c.default.playSound(this.mSlot.mSlotAudio.jackpot, this.mSlot.mIsSound);
this.mCallback = t;
this.mTarget = o;
var n = this;
this.nodeBonus[e].active = !0;
this.txtEffectBonus.node.active = !0;
this.txtEffectBonus.string = r.default.formatNumber(i);
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(this.mSlot.mSlotConfig.TIME_ANIM_BONUS), cc.callFunc(function() {
n.mCallback && n.mTarget && n.mCallback.call(n.mTarget, e);
n.mSlotRoom.updateTotalWin(i);
n.nodeBonus[e].active = !1;
n.txtEffectBonus.node.active = !1;
}, this)));
};
o.prototype.showFreespin = function(t, o, e) {
void 0 === t && (t = null);
void 0 === o && (o = null);
c.default.playSound(this.mSlot.mSlotAudio.jackpot, this.mSlot.mIsSound);
this.mCallback = t;
this.mTarget = o;
var i = this;
this.nodeEffectFreespin.active = !0;
this.txtEffectFreespin.string = e.toString();
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(i.mSlot.mSlotConfig.TIME_ANIM_FREESPIN), cc.callFunc(function() {
i.mCallback && i.mTarget && i.mCallback.call(i.mTarget);
i.nodeEffectFreespin.active = !1;
i.nodeNumFreespin.active = !0;
i.txtNumFreespin.string = e.toString();
}, i)));
};
o.prototype.showNumFreespin = function(t) {
if (t <= 0) this.nodeNumFreespin.active = !1; else {
this.nodeNumFreespin.active = !0;
this.txtNumFreespin.string = t.toString();
}
};
s([ u([ cc.Node ]) ], o.prototype, "nodeBonus", void 0);
s([ u(cc.Label) ], o.prototype, "txtEffectBonus", void 0);
s([ u(cc.Node) ], o.prototype, "nodeEffectFreespin", void 0);
s([ u(cc.Label) ], o.prototype, "txtEffectFreespin", void 0);
s([ u(cc.Node) ], o.prototype, "nodeNumFreespin", void 0);
s([ u(cc.Label) ], o.prototype, "txtNumFreespin", void 0);
return s([ p ], o);
}(l.default);
e.default = h;
cc._RF.pop();
}, {
"../../base_slot/SlotEffect": void 0,
"../../base_slot/util/AudioUtil": void 0,
"../../base_slot/util/FormatUtil": void 0
} ],
SlotWildPopEntity: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "71c5aEZAVVHbZUBqbbIa1Yi", "SlotWildPopEntity");
Object.defineProperty(e, "__esModule", {
value: !0
});
e.DataSlotWildPopHistoryCell = e.DataSlotWildPopRankCell = e.DataSlotWildPopPlayNow = e.DataSlotWildPopLineWin = e.DataSlotWildPopSpin = void 0;
var i = function() {
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
for (var o = null, e = 0; e < this.listLineWin.length; e++) if (this.listLineWin[e].turn == t) {
o = this.listLineWin[e];
this.listLineWin.splice(e, 1);
break;
}
return o;
};
t.prototype.getLineWin = function() {
for (var t = null, o = 0, e = 1; e <= this.maxTurn; ) {
if (this.listLineWin[o].turn == e) {
t = this.listLineWin[o];
this.listLineWin.splice(o, 1);
break;
}
if (++o >= this.listLineWin.length) {
o = 0;
e++;
}
}
return t;
};
return t;
}();
e.DataSlotWildPopSpin = i;
e.DataSlotWildPopLineWin = function() {
this.id = 0;
this.bonus = 0;
this.jackpot = 0;
this.freespin = 0;
this.moneyWin = 0;
this.listIdx = [];
this.turn = -1;
};
e.DataSlotWildPopPlayNow = function() {
this.accID = 0;
this.accName = "";
this.money = 0;
};
e.DataSlotWildPopRankCell = function() {};
e.DataSlotWildPopHistoryCell = function() {};
cc._RF.pop();
}, {} ],
SlotWildPopGuide: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "5f8f9eF/p5KDbYzNI3aeVxB", "SlotWildPopGuide");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, i) {
var n, s = arguments.length, l = s < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = cc._decorator, c = l.ccclass, r = l.property, a = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.pageview = null;
return o;
}
o.prototype.onBtnClose = function() {
this.node.destroy();
};
o.prototype.onBtnNext = function() {
var t = this.pageview.getCurrentPageIndex();
t + 1 > 0 && (t = 1);
this.pageview.scrollToPage(t, .2);
};
o.prototype.onBtnBack = function() {
var t = this.pageview.getCurrentPageIndex();
t - 1 <= 0 && (t = 0);
this.pageview.scrollToPage(t, .2);
};
s([ r(cc.PageView) ], o.prototype, "pageview", void 0);
return s([ c ], o);
}(lngui.UIPopup);
e.default = a;
cc._RF.pop();
}, {} ],
SlotWildPopHandler: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "75e37HaGTJPSLy3vE6tVfoA", "SlotWildPopHandler");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, i) {
var n, s = arguments.length, l = s < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("./SlotWildPopEntity"), c = t("./SlotWildPopVar"), r = t("../../base_slot/SlotHandler"), a = t("../../base_slot/SlotSelectRoom"), p = cc._decorator, u = p.ccclass, h = (p.property, 
function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.mSlot = null;
o.mListenerKey = "WildPopListener";
return o;
}
e = o;
Object.defineProperty(o, "instance", {
get: function() {
e._instance || (e._instance = new e());
return e._instance;
},
enumerable: !1,
configurable: !0
});
o.prototype.onLoad = function() {
e._instance = this;
};
o.prototype.connect = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect(this.mListenerKey, c.default.api.negotiate, c.default.api.hub, c.default.api.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
lngui.UIWaitingLayout.showWaiting();
};
o.prototype.closeWS = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
this.mSignalr.close();
lngui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
o.prototype.onWebSocketCallback = function(t) {
if ("open" == t.s || "reconnect" == t.s) {
if (!this.mSlot.isConnect) {
this.mSlot.isConnect = !0;
this.mSlot.connectSuccess();
a.default.instance.unlockBtn(!0);
}
} else {
if (!t.M || !Array.isArray(t.M) || 0 == t.M.length) return;
for (var o = t.M.length, e = 0; e < o; ++e) {
var i = t.M[e];
if ("object" == typeof i && "string" == typeof i.M && i.A && null != i.A[0] && null != i.A[0]) {
var n = i.A[0];
switch (i.M) {
case "joinGame":
this.mSignalr.send("StopX2Game");
this.onJoinGame(n);
break;

case "PlayNow":
this.onPlayNow(n);
break;

case "resultSpin":
this.onSpin(n);
break;

case "message":
this.onMessage(n);
break;

case "history":
this.onHistory(n);
break;

case "honor":
this.onGetRank(n);
break;

case "jackpotHistory":
n.IsJackport = !0;
this.onGetRank(n);
break;

case "UpdateJackPot":
this.onUpdateJackpot(i.A);
break;

case "XJackpotInfo":
this.onGetPotInfo(n);
}
}
}
}
};
o.prototype.onJoinGame = function(t) {
t && this.mSlot.onJoinGameSuccess(t);
};
o.prototype.onPlayNow = function(t) {
if (this.mSlot) {
var o = new l.DataSlotWildPopPlayNow();
o.accID = t.AccountID;
o.accName = lngui.UserManager.instance.mainUserInfo.UserName;
o.money = lngui.UserManager.instance.mainUserInfo.Money;
this.mSlot.onPlayNow(o);
}
};
o.prototype.onSpin = function(t) {
if (this.mSlot) {
var o = new l.DataSlotWildPopSpin();
o.accountId = t.AccountID;
o.session = t.SpinData.SpinId;
o.totalBet = t.BetValue * t.SpinData.LineData.split(",").length;
o.totalWin = t.SpinData.PrizeValue;
o.userMoney = t.Balance;
o.jackpotCurrent = t.SpinData.JackpotValue;
c.default.isPlaytryJackpotValue = t.SpinData.JackpotValue;
o.listItem = t.SpinData.SlotsDataNoSap || [];
for (var e = t.SpinData.PrizeDataNoSap || [], i = [], n = 0; n < e.length; n++) i = i.concat(e[n].map(function(t) {
t.Turn = n + 1;
return t;
}));
i.forEach(function(e) {
if (e.LineId <= 20 && e.LineId > 0) {
(s = new l.DataSlotWildPopLineWin()).id = e.LineId;
s.bonus = t.BonusGame.PrizeValue;
s.jackpot = 1 == t.SpinData.IsJackPot ? t.SpinData.PrizeValue : 0;
s.freespin = t.SpinData.TotalFreeSpinPrizeValue;
s.moneyWin = e.PrizeValue;
s.turn = e.Turn;
for (var n = 0; n < e.Items.length; n++) e.Items[n] = e.Items[n] - 1;
s.listIdx = e.Items;
o.listLineWin.push(s);
o.maxTurn < s.turn && (o.maxTurn = s.turn);
} else {
lngui.ZLog.log("freespin hoac random", JSON.stringify(i));
var s;
(s = new l.DataSlotWildPopLineWin()).id = e.LineId;
1 == e.PrizeId && (s.bonus = 5);
2 == e.PrizeId && (s.bonus = 4);
3 == e.PrizeId && (s.bonus = 3);
131 == e.PrizeId && (s.freespin = 6);
132 == e.PrizeId && (s.freespin = 3);
133 == e.PrizeId && (s.freespin = 1);
s.moneyWin = e.PrizeValue;
s.turn = e.Turn;
s.listIdx = [];
o.listLineWin.push(s);
o.maxTurn < s.turn && (o.maxTurn = s.turn);
}
});
var s = o.listItem[0];
s[5] == s[0] && s[5] == s[1] && s[5] == s[6] ? o.posItemSpecial = 0 : s[5] == s[10] && s[5] == s[11] && s[5] == s[6] ? o.posItemSpecial = 1 : s[6] == s[1] && s[6] == s[2] && s[6] == s[7] ? o.posItemSpecial = 2 : s[6] == s[11] && s[6] == s[12] && s[6] == s[7] ? o.posItemSpecial = 3 : s[7] == s[2] && s[7] == s[3] && s[7] == s[8] ? o.posItemSpecial = 4 : s[7] == s[12] && s[7] == s[13] && s[7] == s[8] ? o.posItemSpecial = 5 : s[8] == s[3] && s[8] == s[4] && s[8] == s[9] ? o.posItemSpecial = 6 : s[8] == s[13] && s[8] == s[14] && s[8] == s[9] && (o.posItemSpecial = 7);
0 == o.listItem.length || this.mSlot.mSlotRoom && this.mSlot.mSlotRoom.stopSpin(o);
}
};
o.prototype.onGetPotInfo = function(t) {
this.mSlot.mSlotPot.onEventXPot(t);
};
o.prototype.onUpdateJackpot = function(t) {
if (this.mSlot.isTrial()) {
c.default.jackPot[t[0]] = c.default.isPlaytryJackpotValue;
var o = c.default.jackPot;
this.mSlot.onUpdatePot(o);
} else {
c.default.jackPot[t[0]] = t[1];
o = c.default.jackPot;
this.mSlot.onUpdatePot(o);
}
};
o.prototype.onMessage = function(t) {
this.mSlot && this.mSlot.onMessage(t);
};
o.prototype.onHistory = function(t) {
this.mSlot && cc.systemEvent.emit("SlotWildPop_get_history", t);
};
o.prototype.onGetRank = function(t) {
lngui.ZLog.log("onGetRank ===========================" + JSON.stringify(t));
this.mSlot && cc.systemEvent.emit("SlotWildPop_get_rank", t);
};
o.prototype.sendJoinRoom = function() {
this.mSignalr.send("GetEventJackpot");
};
o.prototype.sendSpin = function(t, o, e) {
this.mSignalr.send("SpinMobile", [ e ]);
};
o.prototype.sendSpinTry = function(t, o, e, i) {
this.mSignalr.send("SpinTry", [ t, o, e, i ]);
};
o.prototype.sendGetRank = function(t) {
this.mSignalr.send(t, []);
};
o.prototype.sendHistory = function() {
this.mSignalr.send("GetHistory", []);
};
o.prototype.sendPlayNow = function() {
this.mSignalr.send("PlayGame", [ this.mSlot.mRoomId, 1 ]);
};
o.prototype.sendEndBonus = function(t, o) {
this.mSignalr.send("FinishBonusGame", [ t, o ]);
};
var e;
o._instance = null;
return e = s([ u ], o);
}(r.default));
e.default = h;
cc._RF.pop();
}, {
"../../base_slot/SlotHandler": void 0,
"../../base_slot/SlotSelectRoom": void 0,
"./SlotWildPopEntity": "SlotWildPopEntity",
"./SlotWildPopVar": "SlotWildPopVar"
} ],
SlotWildPopHistoryCell: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "b1ac7iJVmBFY7Wq5xHrJtJ+", "SlotWildPopHistoryCell");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, i) {
var n, s = arguments.length, l = s < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/util/FormatUtil"), c = cc._decorator, r = c.ccclass, a = c.property, p = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.txtSession = null;
o.txtTime = null;
o.txtRoomBet = null;
o.txtTotalBet = null;
o.txtMoneyWin = null;
o.bg = null;
o.mIdx = 0;
return o;
}
o.prototype.setData = function(t, o) {
this.mIdx = o;
this.txtSession.string = "" + t.SpinId;
this.txtTime.string = l.default.formatDateTime(t.CreateDate, !0, !0);
this.txtTotalBet.string = l.default.formatNumber(t.TotalBetValue);
this.txtMoneyWin.string = l.default.formatNumber(t.TotalPrizeValue);
this.txtRoomBet.string = l.default.formatNumber(t.BetValue);
this.bg.active = this.mIdx % 2 == 0;
};
s([ a(cc.Label) ], o.prototype, "txtSession", void 0);
s([ a(cc.Label) ], o.prototype, "txtTime", void 0);
s([ a(cc.Label) ], o.prototype, "txtRoomBet", void 0);
s([ a(cc.Label) ], o.prototype, "txtTotalBet", void 0);
s([ a(cc.Label) ], o.prototype, "txtMoneyWin", void 0);
s([ a(cc.Node) ], o.prototype, "bg", void 0);
return s([ r ], o);
}(cc.Component);
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/util/FormatUtil": void 0
} ],
SlotWildPopHistory: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "3b1e2eRkQJGxbUh1VSXZXPh", "SlotWildPopHistory");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, i) {
var n, s = arguments.length, l = s < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotHistory"), c = t("./SlotWildPopHandler"), r = cc._decorator, a = r.ccclass, p = (r.property, 
function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.mSlot = null;
return o;
}
o.prototype.onLoad = function() {
c.default.instance.sendHistory();
cc.systemEvent.on("SlotWildPop_get_history", this.onEventGetHistory, this);
this.scrollview.content.destroyAllChildren();
};
o.prototype.onDestroy = function() {
cc.systemEvent.off("SlotWildPop_get_history", this.onEventGetHistory, this);
};
o.prototype.onEventGetHistory = function(t) {
this.setData(1, t);
};
o.prototype.setData = function(t, o) {
this.mListDataCell = o;
this.scrollview.content.destroyAllChildren();
this.mListCell = [];
var e = o.length;
this.scrollview.content.height = e * (this.heightItem + this.spacing) + this.spacing;
for (var i = this.spawnCount <= e ? this.spawnCount : e, n = 0; n < i; n++) {
var s = cc.instantiate(this.cellHistory), l = s.getComponent("SlotWildPopHistoryCell");
l.setData(this.mListDataCell[n], n);
var c = -l.node.height * (.5 + n) - this.spacing * (n + 1);
l.node.setPosition(0, c);
this.scrollview.content.addChild(s);
this.mListCell.push(l);
}
};
return s([ a ], o);
}(l.default));
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotHistory": void 0,
"./SlotWildPopHandler": "SlotWildPopHandler"
} ],
SlotWildPopIconLine: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "b4485O1aGVDPpCg5z6zav6v", "SlotWildPopIconLine");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, i) {
var n, s = arguments.length, l = s < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = cc._decorator, c = l.ccclass, r = l.property, a = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.sprLine = null;
o.id = -1;
o.isReady = !0;
o.cbHover = null;
o.tgHover = null;
o.cbLeave = null;
o.tgLeave = null;
return o;
}
o.prototype.onLoad = function() {
if (!cc.sys.isNative) {
this.node.on(cc.Node.EventType.MOUSE_ENTER, this.mouseHover, this);
this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeave, this);
}
};
o.prototype.onDestroy = function() {
if (!cc.sys.isNative) {
this.node.on(cc.Node.EventType.MOUSE_ENTER, this.mouseHover, this);
this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeave, this);
}
};
o.prototype.mouseHover = function() {
if (this.isReady && this.cbHover && this.tgHover) {
this.cbHover.call(this.tgHover, this.id);
this.sprLine.node.color = cc.Color.YELLOW;
}
};
o.prototype.mouseLeave = function() {
if (this.isReady && this.cbLeave && this.tgLeave) {
this.cbLeave.call(this.tgLeave, this.id);
this.sprLine.node.color = cc.Color.WHITE;
}
};
o.prototype.setReady = function(t) {
this.isReady = t;
};
s([ r(cc.Sprite) ], o.prototype, "sprLine", void 0);
s([ r(cc.Integer) ], o.prototype, "id", void 0);
return s([ c ], o);
}(cc.Component);
e.default = a;
cc._RF.pop();
}, {} ],
SlotWildPopItem: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "e91a3Qhx+lBmbBQVKwnDxVq", "SlotWildPopItem");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, i) {
var n, s = arguments.length, l = s < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotItem"), c = t("../../base_slot/SlotConstant"), r = t("../../base_slot/util/AudioUtil"), a = t("../../base_slot/util/Util"), p = cc._decorator, u = p.ccclass, h = p.property, m = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.skeBorder = null;
o.skeBoomed = null;
o.sprBorder = null;
o.skeEffectVaCham = null;
o.mIsBoom = !1;
o.mSlotReel = null;
o.mSlot = null;
o.mSlotRoom = null;
return o;
}
o.prototype.init = function(t) {
this.mSlotReel = t;
this.mSlotRoom = this.mSlotReel.mSlotMachine.mSlotRoom;
this.mSlot = this.mSlotRoom.mSlot;
this.skeBoomed.timeScale = 2;
this.skeBorder.timeScale = 1;
this.skeEffectVaCham.timeScale = 3;
var o = this.getRandomId();
this.setId(o);
};
o.prototype.setId = function(t) {
if (this.mId != t) {
this.mId = t;
this.sprItem.node.active = !1;
this.skeItem.node.active = !0;
this.setSkeData(this.mId);
}
};
o.prototype.getRandomId = function() {
return a.default.random(1, this.mSlot.mSlotConfig.MAX_ITEM);
};
o.prototype.showHover = function() {
this.sprBorder.node.active = !0;
};
o.prototype.showLeave = function() {
this.sprBorder.node.active = !1;
};
o.prototype.showIdle = function() {
this.mTypeItem = c.SLOT_TYPE_ITEM.IDLE;
this.sprItem.node.active = !1;
this.sprItem.node.color = cc.color(255, 255, 255);
this.skeItem.node.active = !0;
this.skeItem.node.color = cc.color(255, 255, 255);
this.skeBorder.node.active = !1;
this.skeBoomed.node.active = !1;
this.sprBorder.node.active = !1;
};
o.prototype.showLose = function() {
if (this.mTypeItem != c.SLOT_TYPE_ITEM.LOSE) {
this.mTypeItem = c.SLOT_TYPE_ITEM.LOSE;
this.sprItem.node.active = !1;
this.sprItem.node.color = cc.color(100, 100, 100);
this.skeItem.node.active = !0;
this.skeItem.node.color = cc.color(100, 100, 100);
this.skeBorder.node.active = !1;
this.skeBoomed.node.active = !1;
this.sprBorder.node.active = !1;
}
};
o.prototype.setSkeData = function(t) {
var o = -1;
1 == t ? o = 0 : 2 == t ? o = 1 : 4 == t ? o = 2 : 5 == t ? o = 3 : 6 == t ? o = 4 : 7 == t ? o = 5 : 3 == t && (o = 6);
this.skeItem.skeletonData = this.mSlot.mSlotConfig.LIST_SKE_ITEM[o];
this.skeItem.animation = this.mSlot.mSlotConfig.LIST_SKE_KEY[o];
this.skeItem.loop = !0;
this.skeItem.setAnimation(0, "Idle", !0);
};
o.prototype.setBoom = function(t) {
this.mIsBoom = t;
};
o.prototype.isBoom = function() {
return this.mIsBoom;
};
o.prototype.showWin = function() {
if (this.mTypeItem != c.SLOT_TYPE_ITEM.WIN) {
this.mTypeItem = c.SLOT_TYPE_ITEM.WIN;
this.sprItem.node.active = !1;
this.sprItem.node.color = cc.color(255, 255, 255);
this.skeItem.node.active = !0;
this.skeItem.node.color = cc.color(255, 255, 255);
if (this.mIsBoom) {
this.sprBorder.node.active = !1;
this.skeBorder.node.active = !0;
} else {
this.sprBorder.node.active = !0;
this.skeBorder.node.active = !1;
}
}
};
o.prototype.showBoom = function() {
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
o.prototype.onEventBoomed = function() {
this.mSlotReel.cbCompleteBoomed();
};
o.prototype.setDefault = function() {
t.prototype.setDefault.call(this);
this.mIsBoom = !1;
};
o.prototype.moveStart = function(t) {
var o = this;
this.mIndex = this.mIndex - t;
var e = t * this.mSlot.mSlotConfig.DISTANCE, i = this.node.y - e, n = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START_QUICK : this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.moveTo(n, this.node.x, i), cc.callFunc(function() {
o.setBoom(!1);
o.resetItem();
o.mSlotReel.cbStopAllItemMoveStart();
}, this)));
};
o.prototype.moveStop = function(t) {
var o = this;
this.mIndex = this.mIndex - t;
var e = this.mSlot.mSlotConfig.POS_ITEM[this.mIndex], i = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START_QUICK : this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.moveTo(i, this.node.x, e).easing(cc.easeIn(5)), cc.callFunc(function() {
o.skeEffectVaCham.node.active = !0;
o.skeEffectVaCham.addAnimation(0, "animation", !1);
o.skeEffectVaCham.setCompleteListener(this.onEventVacham.bind(o));
o.mSlotReel.cbStopAllItemMoveStop();
}, this)));
};
o.prototype.moveBoom = function(t) {
var o = this;
this.mIndex = this.mIndex - t;
var e = this.mSlot.mSlotConfig.POS_ITEM[this.mIndex], i = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START_QUICK : this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.moveTo(i, this.node.x, e).easing(cc.easeIn(5)), cc.callFunc(function() {
o.setBoom(!1);
o.skeEffectVaCham.node.active = !0;
o.skeEffectVaCham.addAnimation(0, "animation", !1);
o.skeEffectVaCham.setCompleteListener(this.onEventVacham.bind(o));
o.mSlotReel.cbStopAllItemMoveBoom();
}, this)));
};
o.prototype.onEventVacham = function() {
this.skeEffectVaCham.node.active = !1;
};
o.prototype.resetItem = function() {
-1 == this.mIndex ? this.mIndex = 5 : -2 == this.mIndex ? this.mIndex = 4 : -3 == this.mIndex && (this.mIndex = 3);
this.node.y = this.mSlot.mSlotConfig.POS_ITEM[this.mIndex];
};
s([ h(sp.Skeleton) ], o.prototype, "skeBorder", void 0);
s([ h(sp.Skeleton) ], o.prototype, "skeBoomed", void 0);
s([ h(cc.Sprite) ], o.prototype, "sprBorder", void 0);
s([ h(sp.Skeleton) ], o.prototype, "skeEffectVaCham", void 0);
return s([ u ], o);
}(l.default);
e.default = m;
cc._RF.pop();
}, {
"../../base_slot/SlotConstant": void 0,
"../../base_slot/SlotItem": void 0,
"../../base_slot/util/AudioUtil": void 0,
"../../base_slot/util/Util": void 0
} ],
SlotWildPopLine: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "59212VDPrpD2Zpz4Vjno8LV", "SlotWildPopLine");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, i) {
var n, s = arguments.length, l = s < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotLine"), c = cc._decorator, r = c.ccclass, a = (c.property, 
function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.mSlotMachine = null;
o.mSlot = null;
o.mListSlotItem = [];
return o;
}
o.prototype.showWin = function() {
t.prototype.showWin.call(this);
for (var o = 0; o < this.mListSlotItem.length; o++) this.mListSlotItem[o].showWin();
};
o.prototype.showHover = function() {
for (var t = 0; t < this.mListSlotItem.length; t++) this.mListSlotItem[t].showHover();
};
o.prototype.showLeave = function() {
for (var t = 0; t < this.mListSlotItem.length; t++) this.mListSlotItem[t].showLeave();
};
return s([ r ], o);
}(l.default));
e.default = a;
cc._RF.pop();
}, {
"../../base_slot/SlotLine": void 0
} ],
SlotWildPopMachine: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "fd43eS8/UxPva2gxN12HNu7", "SlotWildPopMachine");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, i) {
var n, s = arguments.length, l = s < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotMachine"), c = t("../../base_slot/util/AudioUtil"), r = cc._decorator, a = r.ccclass, p = r.property, u = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.listSlotReel = [];
o.listSlotLine = [];
o.mSlot = null;
o.mSlotRoom = null;
o.mListSlotItemResult = [];
o.mCountReelStartMove = 0;
o.mCountReelStopMove = 0;
o.mCountReelStopMoveBoom = 0;
o.mCountReelCompleteBoom = 0;
o.mIsAllReelDoneStart = !1;
o.mIsAllReelDoneStop = !1;
o.mNumReelExistBoom = 0;
return o;
}
o.prototype.init = function(o) {
t.prototype.init.call(this, o);
for (var e = 0; e < 3; e++) for (var i = 0; i < 5; i++) this.mListSlotItemResult.push(this.listSlotReel[i].listItem[e]);
lngui.ZLog.log("mListSlotItemResult", this.mListSlotItemResult);
};
o.prototype.spin = function() {
this.mAudioIdSpin = c.default.playSound(this.mSlot.mSlotAudio.reelSpin, this.mSlot.mIsSound, !0);
this.setDefault();
for (var t = 0; t < this.listSlotReel.length; t++) this.listSlotReel[t].spin();
};
o.prototype.setDefault = function() {
t.prototype.setDefault.call(this);
this.mIsAllReelDoneStart = !1;
this.mIsAllReelDoneStop = !1;
};
o.prototype.setLineSelect = function(t) {
for (var o = 0; o < this.listSlotLine.length; o++) {
for (var e = !0, i = 0; i < t.length; i++) if (this.listSlotLine[o].getId() === t[i]) {
e = !1;
break;
}
e ? this.listSlotLine[o].setSelect(!1) : this.listSlotLine[o].setSelect(!0);
}
};
o.prototype.stopSpin = function() {
for (var t = this.mSlotRoom.mDataSpin.listItem[0], o = 0; o < this.listSlotReel.length; o++) {
var e = o, i = o + 5, n = o + 10;
this.listSlotReel[o].setIdItemResult([ t[n], t[i], t[e] ]);
this.listSlotReel[o].stopSpin();
}
this.showLog(0, t);
};
o.prototype.showLog = function() {};
o.prototype.showLineWin = function(t) {
for (var o = 0; o < t.listIdx.length; o++) {
var e = t.listIdx[o];
this.mListSlotItemResult[e].setBoom(!0);
}
for (o = 0; o < this.mListSlotItemResult.length; o++) this.mListSlotItemResult[o].showLose();
var i = this.getSlotLineById(t.id);
try {
i.showWin();
} catch (t) {
return;
}
};
o.prototype.showBoom = function() {
for (var t = 0; t < this.mListSlotItemResult.length; t++) this.mListSlotItemResult[t].showIdle();
for (t = 0; t < this.listSlotReel.length; t++) this.listSlotReel[t].isBoom() && this.listSlotReel[t].showBoom();
};
o.prototype.isBoom = function() {
return this.mNumReelExistBoom > 0;
};
o.prototype.checkBoom = function() {
this.mNumReelExistBoom = 0;
for (var t = 0; t < this.listSlotReel.length; t++) this.listSlotReel[t].checkBoom() && this.mNumReelExistBoom++;
return this.mNumReelExistBoom > 0;
};
o.prototype.getListLineSelect = function() {
return this.getNumLineSelect().join();
};
o.prototype.updateAllItemResult = function() {
this.mListSlotItemResult = [];
for (var t = 2; t >= 0; t--) for (var o = 0; o < this.listSlotReel.length; o++) {
var e = this.listSlotReel[o].getSlotItemByIndex(t);
this.mListSlotItemResult.push(e);
}
};
o.prototype.updateAllLine = function() {
for (var t = 0; t < this.mSlot.mSlotConfig.LINE.length; t++) {
for (var o = this.mSlot.mSlotConfig.LINE[t], e = [], i = 0; i < o.length; i++) e.push(this.mListSlotItemResult[o[i]]);
this.listSlotLine[t].updateSlotItem(e);
}
};
o.prototype.cbReelMoveStart = function() {
this.mCountReelStartMove++;
if (this.mCountReelStartMove == this.listSlotReel.length) {
this.mCountReelStartMove = 0;
this.mIsAllReelDoneStart = !0;
this.mSlotRoom.checkResult();
}
};
o.prototype.cbReelMoveStop = function() {
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
o.prototype.cbReelCompleteBoom = function() {
this.mCountReelCompleteBoom++;
if (this.mCountReelCompleteBoom == this.mNumReelExistBoom) {
this.mCountReelCompleteBoom = 0;
for (var t = this.mSlotRoom.mDataSpin.listItem[this.mSlotRoom.mTurnWinCurent - 1], o = 0; o < this.listSlotReel.length; o++) {
var e = o, i = o + 5, n = o + 10;
this.listSlotReel[o].setIdItemResult([ t[e], t[i], t[n] ]);
this.listSlotReel[o].isBoom() && this.listSlotReel[o].showMoveBoom();
}
this.showLog(this.mSlotRoom.mTurnWinCurent - 1, t);
}
};
o.prototype.cbReelMoveBoomStop = function() {
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
}) ], o.prototype, "listSlotReel", void 0);
s([ p({
override: !0
}) ], o.prototype, "listSlotLine", void 0);
return s([ a ], o);
}(l.default);
e.default = u;
cc._RF.pop();
}, {
"../../base_slot/SlotMachine": void 0,
"../../base_slot/util/AudioUtil": void 0
} ],
SlotWildPopRank: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "58a98bDWohM2IoENWdc1bIv", "SlotWildPopRank");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, i) {
var n, s = arguments.length, l = s < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("./SlotWildPopHandler"), c = cc._decorator, r = c.ccclass, a = c.property, p = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.scrollview = null;
o.cellRank = null;
o.heightItem = 0;
o.spacing = 0;
o.spawnCount = 0;
o.bufferZone = 0;
o.lastContentPosY = 0;
o.updateTimer = 0;
o.updateInterval = .2;
o.mState = 0;
o.mListDataCell = [];
o.mListCell = [];
o.mSlot = null;
o.listDataBigwinCache = [];
o.listDataJackpotCache = [];
return o;
}
o.prototype.onLoad = function() {
l.default.instance.sendGetRank("GetHonor");
this.scrollview.content.destroyAllChildren();
cc.systemEvent.on("SlotWildPop_get_rank", this.onEventGetRank, this);
};
o.prototype.onBtn = function(t, o) {
l.default.instance.sendGetRank(o);
};
o.prototype.onDestroy = function() {
cc.systemEvent.off("SlotWildPop_get_rank", this.onEventGetRank, this);
};
o.prototype.onEventGetRank = function(t) {
this.setData(t);
};
o.prototype.update = function(t) {
if (this.node.active) {
this.updateTimer += t;
if (this.updateTimer < this.updateInterval) return;
this.updateTimer = 0;
for (var o = this.bufferZone, e = this.scrollview.content.y < this.lastContentPosY, i = (this.heightItem + this.spacing) * this.mListCell.length, n = 0; n < this.mListCell.length; ++n) {
var s = this.mListCell[n].node, l = this.getPositionInView(s);
if (e) {
if (l.y < -o && s.y + i < 0) {
s.y = s.y + i;
var c = this.mListCell[n], r = c.mIdx - this.mListCell.length;
c.setData(this.mListDataCell[r], r);
}
} else if (l.y > o && s.y - i > -this.scrollview.content.height) {
s.y = s.y - i;
var a = this.mListCell[n];
r = a.mIdx + this.mListCell.length;
a.setData(this.mListDataCell[r], r);
}
}
this.lastContentPosY = this.scrollview.content.y;
}
};
o.prototype.getPositionInView = function(t) {
var o = t.parent.convertToWorldSpaceAR(t.position);
return this.scrollview.node.convertToNodeSpaceAR(o);
};
o.prototype.setData = function(t) {
this.mListDataCell = t;
this.scrollview.content.destroyAllChildren();
this.mListCell = [];
var o = t.length;
this.scrollview.content.height = o * (this.heightItem + this.spacing) + this.spacing;
this.spawnCount <= o && this.spawnCount;
for (var e = 0; e < o; e++) {
var i = cc.instantiate(this.cellRank), n = i.getComponent("SlotRankCell");
if (t.IsJackport) {
this.mListDataCell[e].IsJackport = !0;
n.setData(this.mListDataCell[e], e);
} else n.setData(this.mListDataCell[e], e);
var s = -i.height * (.5 + e) - this.spacing * (e + 1);
i.setPosition(0, s);
this.mListCell.push(n);
this.scrollview.content.addChild(i);
}
};
o.prototype.onBtnThanglon = function() {
this.mState = 0;
this.setData(this.listDataBigwinCache);
};
o.prototype.onBtnNohu = function() {
this.mState = 1;
this.setData(this.listDataJackpotCache);
};
o.prototype.onBtnClose = function() {
this.node.destroy();
};
s([ a(cc.ScrollView) ], o.prototype, "scrollview", void 0);
s([ a(cc.Prefab) ], o.prototype, "cellRank", void 0);
s([ a(cc.Integer) ], o.prototype, "heightItem", void 0);
s([ a(cc.Integer) ], o.prototype, "spacing", void 0);
s([ a(cc.Integer) ], o.prototype, "spawnCount", void 0);
s([ a(cc.Integer) ], o.prototype, "bufferZone", void 0);
return s([ r ], o);
}(lngui.UIPopup);
e.default = p;
cc._RF.pop();
}, {
"./SlotWildPopHandler": "SlotWildPopHandler"
} ],
SlotWildPopReel: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "986cfjaUuJIU4dADSxryJQk", "SlotWildPopReel");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, i) {
var n, s = arguments.length, l = s < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotReel"), c = cc._decorator, r = c.ccclass, a = c.property, p = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.listItem = [];
o.mSlotMachine = null;
o.mSlot = null;
o.mCountItemStopMove = 0;
o.mCountItemStartMove = 0;
o.mCountItemBoomed = 0;
o.mCountMoveBoom = 0;
o.mNumItemBoomMove = 0;
o.mExistBoom = !1;
o.mNumBoom = 0;
return o;
}
o.prototype.setDefault = function() {
t.prototype.setDefault.call(this);
this.mCountItemStopMove = 0;
this.mCountItemStartMove = 0;
this.mCountItemBoomed = 0;
this.mCountMoveBoom = 0;
this.mNumItemBoomMove = 0;
this.mExistBoom = !1;
this.mNumBoom = 0;
};
o.prototype.spin = function() {
t.prototype.spin.call(this);
for (var o = 0; o < this.listItem.length; o++) ;
var e = this.getSlotItemByIndex(2), i = this.getSlotItemByIndex(1), n = this.getSlotItemByIndex(0), s = this.mSlotMachine.mSlot.mSlotConfig.TIME_DELAY_SPIN_REEL, l = 0 * s, c = 5 * s + this.mId * s * .8, r = 10 * s + this.mId * s * .7;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(l), cc.callFunc(function() {
n.moveStart(3);
}, this), cc.delayTime(c), cc.callFunc(function() {
i.moveStart(3);
}, this), cc.delayTime(r), cc.callFunc(function() {
e.moveStart(3);
}, this)));
};
o.prototype.stopSpin = function() {
for (var t = 0; t < this.listItem.length; t++) ;
var o = this.getSlotItemByIndex(5), e = this.getSlotItemByIndex(4), i = this.getSlotItemByIndex(3);
o.setId(this.listIdItemResult[2]);
e.setId(this.listIdItemResult[1]);
i.setId(this.listIdItemResult[0]);
var n = this.mSlotMachine.mSlot.mSlotConfig.TIME_DELAY_SPIN_REEL, s = 0 * n + this.mId * n, l = 5 * n + this.mId * n * .8, c = 10 * n + this.mId * n * .6;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(s), cc.callFunc(function() {
i.moveStop(3);
}, this), cc.delayTime(l), cc.callFunc(function() {
e.moveStop(3);
}, this), cc.delayTime(c), cc.callFunc(function() {
o.moveStop(3);
}, this)));
};
o.prototype.isBoom = function() {
return this.mExistBoom;
};
o.prototype.checkBoom = function() {
var t = this.getSlotItemByIndex(0), o = this.getSlotItemByIndex(1), e = this.getSlotItemByIndex(2);
this.mNumBoom = 0;
t.isBoom() && this.mNumBoom++;
o.isBoom() && this.mNumBoom++;
e.isBoom() && this.mNumBoom++;
this.mExistBoom = this.mNumBoom > 0;
return this.mExistBoom;
};
o.prototype.showBoom = function() {
var t = this.getSlotItemByIndex(2), o = this.getSlotItemByIndex(1), e = this.getSlotItemByIndex(0);
if (e.isBoom()) {
e.node.stopAllActions();
e.node.runAction(cc.sequence(cc.delayTime(0), cc.callFunc(function() {
e.showBoom();
}, this)));
}
if (o.isBoom()) {
o.node.stopAllActions();
o.node.runAction(cc.sequence(cc.delayTime(0), cc.callFunc(function() {
o.showBoom();
}, this)));
}
if (t.isBoom()) {
t.node.stopAllActions();
t.node.runAction(cc.sequence(cc.delayTime(0), cc.callFunc(function() {
t.showBoom();
}, this)));
}
};
o.prototype.showMoveBoom = function() {
for (var t = 0; t < this.listItem.length; t++) ;
this.mNumItemBoomMove = 0;
var o = 0;
for (t = 0; t < this.listItem.length; t++) {
var e = this.getSlotItemByIndex(t);
if (e.isBoom()) {
o++;
var i = this.listItem.length - 1 + o;
e.setIndex(i);
e.setBoom(!1);
e.showIdle();
e.node.active = !1;
} else if (this.listIdItemResult.length > 0) {
var n = this.listIdItemResult.pop();
e.setId(n);
if (0 != e.getIndex()) {
this.mNumItemBoomMove++;
e.moveBoom(o);
}
}
}
};
o.prototype.sortItem = function() {
for (var t = 3, o = 0; o < this.listItem.length; o++) if (this.listItem[o].getIndex() > 2) {
this.listItem[o].setIndex(t);
this.listItem[o].node.active = !0;
this.listItem[o].resetItem();
t++;
}
};
o.prototype.cbStopAllItemMoveStart = function() {
this.mCountItemStartMove++;
if (3 == this.mCountItemStartMove) {
this.mCountItemStartMove = 0;
for (var t = 0; t < this.listItem.length; t++) ;
this.mSlotMachine.cbReelMoveStart();
}
};
o.prototype.cbStopAllItemMove = function() {};
o.prototype.cbStopAllItemMoveStop = function() {
this.mCountItemStopMove++;
if (3 == this.mCountItemStopMove) {
this.mCountItemStopMove = 0;
for (var t = 0; t < this.listItem.length; t++) ;
this.mSlotMachine.cbReelMoveStop();
}
};
o.prototype.cbCompleteBoomed = function() {
this.mCountItemBoomed++;
if (this.mCountItemBoomed == this.mNumBoom) {
this.mCountItemBoomed = 0;
this.mSlotMachine.cbReelCompleteBoom();
}
};
o.prototype.cbStopAllItemMoveBoom = function() {
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
}) ], o.prototype, "listItem", void 0);
return s([ r ], o);
}(l.default);
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotReel": void 0
} ],
SlotWildPopRoomUI: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "f2ba90KmqlEKJ6+wZ/N/FaS", "SlotWildPopRoomUI");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, i) {
var n, s = arguments.length, l = s < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotRoomUI"), c = cc._decorator, r = c.ccclass, a = c.property, p = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.btnSelectLine = null;
o.btnBet = null;
o.btnSetting = null;
o.btnRank = null;
o.btnHistory = null;
o.btnGuide = null;
return o;
}
o.prototype.interactableBtnSelectLine = function(t) {
this.btnSelectLine.interactable = t;
};
o.prototype.interactableBtnBet = function(t) {
this.btnBet.interactable = t;
};
s([ a(cc.Button) ], o.prototype, "btnSelectLine", void 0);
s([ a(cc.Button) ], o.prototype, "btnBet", void 0);
s([ a(cc.Toggle) ], o.prototype, "btnSetting", void 0);
s([ a(cc.Button) ], o.prototype, "btnRank", void 0);
s([ a(cc.Button) ], o.prototype, "btnHistory", void 0);
s([ a(cc.Button) ], o.prototype, "btnGuide", void 0);
return s([ r ], o);
}(l.default);
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotRoomUI": void 0
} ],
SlotWildPopRoom: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "43fc0c3ZlRFeKKKP6T56LSw", "SlotWildPopRoom");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, i) {
var n, s = arguments.length, l = s < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("./SlotWildPop"), c = t("./SlotWildPopHandler"), r = t("./SlotWildPopVar"), a = t("../../base_slot/SlotRoom"), p = t("../../base_slot/SlotConstant"), u = t("./SlotWildPopIconLine"), h = cc._decorator, m = h.ccclass, d = h.property, f = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.listIconLine = [];
o.mSlotMachine = null;
o.mSlotEffect = null;
o.mSkeChar = null;
o.prbSelectLine = null;
o.mSlotRoomUI = null;
o.mSlot = null;
o.mDataSpin = null;
o.mTurnWinCurent = 1;
o.mIsJackpot = !1;
o.mNumFreespin = 0;
o.mIsInit = !1;
o.mMoneyBonus = 0;
return o;
}
e = o;
Object.defineProperty(o, "instance", {
get: function() {
e._instance || (e._instance = new e());
return e._instance;
},
enumerable: !1,
configurable: !0
});
o.prototype.onLoad = function() {
e._instance = this;
};
o.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateGold, this);
};
o.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateGold, this);
};
o.prototype.onUpdateGold = function(t) {
lngui.UserManager.instance.mainUserInfo.Money = t;
this.updateUserMoney(t);
};
o.prototype.onDestroy = function() {
t.prototype.onDestroy.call(this);
};
o.prototype.init = function(t) {
this.mSlot = t;
if (!this.mIsInit) {
this.mIsInit = !0;
this.mSlotEffect.init(this);
this.mSlotMachine.init(this);
for (var o = 0; o < this.listIconLine.length; o++) {
this.listIconLine[o].cbHover = this.onHoverLine.bind(this);
this.listIconLine[o].tgHover = this;
this.listIconLine[o].cbLeave = this.onLeaveLine.bind(this);
this.listIconLine[o].tgLeave = this;
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
o.prototype.onHoverLine = function(t) {
for (var o = this.mSlot.mSlotConfig.LINE[t - 1], e = 0; e < o.length; e++) this.mSlotMachine.mListSlotItemResult[o[e]].showHover();
};
o.prototype.onLeaveLine = function(t) {
for (var o = this.mSlot.mSlotConfig.LINE[t - 1], e = 0; e < o.length; e++) this.mSlotMachine.mListSlotItemResult[o[e]].showLeave();
};
o.prototype.setDefault = function() {
t.prototype.setDefault.call(this);
this.mTurnWinCurent = 1;
this.mMoneyBonus = 0;
};
o.prototype.spin = function() {
t.prototype.spin.call(this);
for (var o = 0; o < this.listIconLine.length; o++) this.listIconLine[o].setReady(!1);
this.mUserMoney -= this.getTotalBet();
this.updateUserMoney(this.mUserMoney);
this.mSlotRoomUI.interactableBtnSpin(!1);
this.mSlotRoomUI.interactableBtnSelectLine(!1);
this.mSlotRoomUI.interactableBtnBet(!1);
this.mSlotRoomUI.interactableBtnBack(!1);
l.default.instance.isTrial() ? c.default.instance.sendSpinTry("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20", 5e7, r.default.isPlaytryJackpotValue, 0) : c.default.instance.sendSpin(this.mSlot.mMoneyType, this.mSlot.getBetId(), this.mSlotMachine.getListLineSelect());
};
o.prototype.stopSpin = function(o) {
t.prototype.stopSpin.call(this, o);
this.mSlotRoomUI.updateSession(o.session);
this.checkResult();
};
o.prototype.checkResult = function() {
this.mSlotMachine.mIsAllReelDoneStart && this.mDataSpin && this.mSlotMachine.stopSpin();
};
o.prototype.showResult = function() {
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
o.prototype.nextSpin = function() {
var t = this;
if (this.mNumFreespin > 0) {
this.mNumFreespin--;
this.mSlotEffect.showNumFreespin(this.mNumFreespin);
clearTimeout(this.mTimeoutNextSpin);
var o = function() {
clearTimeout(t.mTimeoutNextSpin);
t.spin();
};
this.mTimeoutNextSpin = setTimeout(o.bind(this), 1e3 * this.mSlot.mSlotConfig.TIME_DELAY_NEXT_SPIN);
} else {
if (this.mSlot.isTrial()) this.mUserMoney += this.mMoneyWin + this.mMoneyBonus; else {
this.mUserMoney = this.mDataSpin.userMoney + this.mMoneyBonus;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.mUserMoney);
}
this.updateUserMoney(this.mUserMoney);
if (this.mIsAutoSpin) {
clearTimeout(this.mTimeoutNextSpin);
o = function() {
clearTimeout(t.mTimeoutNextSpin);
t.mState = p.SLOT_STATE.READY;
t.onBtnSpin();
};
this.mTimeoutNextSpin = setTimeout(o.bind(this), 1e3 * this.mSlot.mSlotConfig.TIME_DELAY_NEXT_SPIN);
} else {
this.mState = p.SLOT_STATE.READY;
for (var e = 0; e < this.listIconLine.length; e++) this.listIconLine[e].setReady(!0);
this.mSlotRoomUI.interactableBtnSpin(!0);
this.mSlotRoomUI.interactableBtnSelectLine(!0);
this.mSlotRoomUI.interactableBtnBet(!0);
this.mSlotRoomUI.interactableBtnBack(!0);
}
}
};
o.prototype.updateLineSelect = function(t) {
this.mSlotRoomUI.updateLineSelect(t.length);
this.mSlotMachine.setLineSelect(t);
this.updateTotalBet();
};
o.prototype.showMiniBonus = function() {};
o.prototype.checkNextSpin = function() {
this.mDataSpin.totalWin >= 15 * this.getTotalBet() && !this.mIsJackpot ? this.mSlotEffect.showBigWin(this.nextSpin, this, this.mMoneyWin) : this.nextSpin();
};
o.prototype.onBtnQuickSpin = function() {
if (this.mUserMoney < this.getTotalBet()) l.default.instance.mTooltip.show("Số dư không đủ để quay"); else if (this.mState == p.SLOT_STATE.READY) {
this.mIsQuickSpin = !0;
this.mIsAutoSpin = !0;
this.mSlotRoomUI.visibleBtnStopSpin(!0);
this.mSlotRoomUI.visibleBtnAutoSpin(!1);
this.mSlotRoomUI.visibleBtnQuickSpin(!1);
this.mState == p.SLOT_STATE.READY && this.spin();
} else l.default.instance.mTooltip.show("Không quay được khi chưa kết thúc phiên");
};
o.prototype.onBtnAutoSpin = function() {
if (this.mUserMoney < this.getTotalBet()) l.default.instance.mTooltip.show("Số dư không đủ để quay"); else if (this.mState == p.SLOT_STATE.READY) {
this.mIsAutoSpin = !0;
this.mSlotRoomUI.visibleBtnStopSpin(!0);
this.mSlotRoomUI.visibleBtnAutoSpin(!1);
this.mSlotRoomUI.visibleBtnQuickSpin(!1);
this.mState == p.SLOT_STATE.READY && this.spin();
} else l.default.instance.mTooltip.show("Không quay được khi chưa kết thúc phiên");
};
o.prototype.onBtnAddBet = function() {
if (this.mSlot.isTrial()) this.mSlot.mTooltip.show("Không sử dụng được chức năng này ở chơi thử"); else if (this.mState == p.SLOT_STATE.READY) {
this.mSlot.mRoomId++;
this.mSlot.mRoomId > 3 && (this.mSlot.mRoomId = 1);
this.updateBet(l.default.instance.getMoneyBet());
this.updateTotalBet();
this.onUpdatePot(this.mSlot.mListPot[this.mSlot.mRoomId - 1]);
c.default.instance.sendPlayNow();
}
};
o.prototype.onBtnSetting = function() {
if (this.mSlotRoomUI.btnSetting.isChecked) {
this.mSlotRoomUI.btnMusic.node.runAction(cc.sequence(cc.delayTime(0), cc.moveTo(.2, cc.v2(570, 220)).easing(cc.easeElasticOut(.4))));
this.mSlotRoomUI.btnSound.node.runAction(cc.sequence(cc.delayTime(.1), cc.moveTo(.2, cc.v2(570, 140)).easing(cc.easeElasticOut(.4))));
} else {
this.mSlotRoomUI.btnMusic.node.runAction(cc.sequence(cc.delayTime(0), cc.moveTo(.2, cc.v2(1e3, 260)).easing(cc.easeElasticIn(.4))));
this.mSlotRoomUI.btnSound.node.runAction(cc.sequence(cc.delayTime(.1), cc.moveTo(.2, cc.v2(1e3, 210)).easing(cc.easeElasticIn(.4))));
}
};
o.prototype.onBtnGuide = function() {};
o.prototype.onBtnHistory = function() {};
o.prototype.onBtnRank = function() {};
o.prototype.onBtnSelectLine = function() {
var t = this;
lngui.UIPopupManager.instance.showPopupFromPrefab(this.prbSelectLine, function(o) {
o.init(t);
});
};
o.prototype.onBtnBack = function() {
this.mSlot.onBtnBack();
};
o.prototype.onBtnSound = function() {
t.prototype.onBtnSound.call(this);
this.mSlotRoomUI.btnSound.target.active = !this.mSlotRoomUI.btnSound.isChecked;
};
o.prototype.onBtnMusic = function() {
t.prototype.onBtnMusic.call(this);
this.mSlotRoomUI.btnMusic.target.active = !this.mSlotRoomUI.btnMusic.isChecked;
};
var e;
o._instance = null;
s([ d([ u.default ]) ], o.prototype, "listIconLine", void 0);
s([ d({
override: !0
}) ], o.prototype, "mSlotMachine", void 0);
s([ d({
override: !0
}) ], o.prototype, "mSlotEffect", void 0);
s([ d(sp.Skeleton) ], o.prototype, "mSkeChar", void 0);
s([ d(cc.Prefab) ], o.prototype, "prbSelectLine", void 0);
s([ d({
override: !0
}) ], o.prototype, "mSlotRoomUI", void 0);
return e = s([ m ], o);
}(a.default);
e.default = f;
cc._RF.pop();
}, {
"../../base_slot/SlotConstant": void 0,
"../../base_slot/SlotRoom": void 0,
"./SlotWildPop": "SlotWildPop",
"./SlotWildPopHandler": "SlotWildPopHandler",
"./SlotWildPopIconLine": "SlotWildPopIconLine",
"./SlotWildPopVar": "SlotWildPopVar"
} ],
SlotWildPopSelectLine: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "bf2b7hWm1tAQJF23c7DE9hT", "SlotWildPopSelectLine");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, i) {
var n, s = arguments.length, l = s < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotSelectLine"), c = t("./SlotWildPopRoom"), r = cc._decorator, a = r.ccclass, p = (r.property, 
function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.mSlotRoom = null;
o.mSlot = null;
return o;
}
o.prototype.init = function(t) {
this.mSlotRoom = t;
this.mSlot = this.mSlotRoom.mSlot;
for (var o = this.mSlotRoom.mSlotMachine.getNumLineSelect(), e = 0; e < this.listLineItem.length; e++) {
for (var i = !1, n = 0; n < o.length; n++) if (o[n] == e + 1) {
i = !0;
break;
}
this.listLineItem[e].isChecked = i;
}
};
o.prototype.hide = function() {
for (var o = [], e = 0; e < this.listLineItem.length; e++) this.listLineItem[e].isChecked && o.push(e + 1);
if (0 == o.length) this.mSlot.mTooltip.show("Bạn phải chọn ít nhất 1 dòng"); else {
c.default.instance.updateLineSelect(o);
t.prototype.hide.call(this);
}
};
return s([ a ], o);
}(l.default));
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotSelectLine": void 0,
"./SlotWildPopRoom": "SlotWildPopRoom"
} ],
SlotWildPopSelectRoom: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "9b7bdStkjlBz6NTnlogyEs4", "SlotWildPopSelectRoom");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, i) {
var n, s = arguments.length, l = s < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotSelectRoom"), c = cc._decorator, r = c.ccclass, a = (c.property, 
function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.mSlot = null;
return o;
}
return s([ r ], o);
}(l.default));
e.default = a;
cc._RF.pop();
}, {
"../../base_slot/SlotSelectRoom": void 0
} ],
SlotWildPopVar: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "13d04U6T2NI5oh2YLgoUsp1", "SlotWildPopVar");
Object.defineProperty(e, "__esModule", {
value: !0
});
var i = function() {
function t() {}
t.api = {
negotiate: "https://wildpop." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
hub: "gamehub",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate
};
t.KEY_SOUND = "SlotWildPop_sound";
t.KEY_MUSIC = "SlotWildPop_music";
t.jackPot = [ 0, 5e5, 5e6, 5e7 ];
t.isPlaytryJackpotValue = 5e7;
return t;
}();
e.default = i;
cc._RF.pop();
}, {} ],
SlotWildPopXPotCell: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "a8b53KOwitM8bmkunfDCVt8", "SlotWildPopXPotCell");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, i) {
var n, s = arguments.length, l = s < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotXPotCell"), c = cc._decorator, r = c.ccclass, a = (c.property, 
function(t) {
n(o, t);
function o() {
return null !== t && t.apply(this, arguments) || this;
}
o.prototype.updatePot = function() {};
o.prototype.setData = function(t) {
this.mData = t;
this.node.active = t.IsEvent;
if (1 == t.RoomID) {
this.txtPotCount.node.active = !0;
t.NormalJackpot > 0 ? this.txtPotCount.string = "X6 SAU " + t.NormalJackpot + " HŨ" : this.txtPotCount.string = "X6 CÒN LẠI " + t.EventJackpotRemain + " HŨ";
} else if (2 == t.RoomID) {
this.txtPotCount.node.active = !0;
t.NormalJackpot > 0 ? this.txtPotCount.string = "X3 SAU " + t.NormalJackpot + " HŨ" : this.txtPotCount.string = "X3 CÒN LẠI " + t.EventJackpotRemain + " HŨ";
} else if (3 == t.RoomID && t.NormalJackpot > 0) {
this.txtPotCount.node.active = !0;
t.NormalJackpot > 0 ? this.txtPotCount.string = "X2 SAU " + t.NormalJackpot + " HŨ" : this.txtPotCount.string = "X2 CÒN LẠI " + t.EventJackpotRemain + " HŨ";
} else {
this.txtPotCount.node.active = !1;
this.mSlotXPot.mSlot.onUpdatePot(this.mSlotXPot.mSlot.mListPot);
}
};
return s([ r ], o);
}(l.default));
e.default = a;
cc._RF.pop();
}, {
"../../base_slot/SlotXPotCell": void 0
} ],
SlotWildPopXPot: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "0c99eyEkF9EeL7pIR2GGWVF", "SlotWildPopXPot");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, i) {
var n, s = arguments.length, l = s < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotXPot"), c = cc._decorator, r = c.ccclass, a = c.property, p = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.listPotCell = [];
o.mSlot = null;
o.mData = null;
return o;
}
o.prototype.init = function(o) {
t.prototype.init.call(this, o);
};
o.prototype.updatePot = function() {};
o.prototype.onEventXPot = function(t) {
if (t[0].IsEvent) {
this.mData = t;
this.node.active = !0;
for (var o = 0; o < t.length; o++) this.listPotCell[o] && this.listPotCell[o].setData(t[o]);
} else this.node.active = !1;
};
s([ a({
override: !0
}) ], o.prototype, "listPotCell", void 0);
return s([ r ], o);
}(l.default);
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotXPot": void 0
} ],
SlotWildPop: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "5bcddO/gqdKDZ0d4FH3ZqJp", "SlotWildPop");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), s = this && this.__decorate || function(t, o, e, i) {
var n, s = arguments.length, l = s < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("./SlotWildPopSelectRoom"), c = t("./SlotWildPopRoom"), r = t("./SlotWildPopVar"), a = t("./SlotWildPopXPot"), p = t("../../base_slot/SlotConstant"), u = t("../../base_slot/Slot"), h = cc._decorator, m = h.ccclass, d = h.property, f = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.mSlotPot = null;
o.mSlotNetwork = null;
o.mSlotConfig = null;
o.mSlotAudio = null;
o.mSlotSelectRoom = null;
o.mSlotRoom = null;
o.mDataJoin = null;
return o;
}
e = o;
Object.defineProperty(o, "instance", {
get: function() {
e._instance || (e._instance = new e());
return e._instance;
},
enumerable: !1,
configurable: !0
});
o.prototype.onLoad = function() {
e._instance = this;
t.prototype.onLoad.call(this);
this.mIdGame = p.GAME_ID.PUBG;
var o = r.default.jackPot;
if (o && o.length > 0) {
this.mListPot[0] = o[0];
this.mListPot[1] = o[1];
this.mListPot[2] = o[2];
}
this.checkSound(r.default.KEY_SOUND, r.default.KEY_MUSIC);
this.mSlotSelectRoom.init(this);
this.mSlotPot.init(this);
};
o.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.mSlotNetwork.connect, this);
this.mSlotNetwork.closeWS();
lngui.ZLog.log("=====================CLOSE WS NOTI===============================");
};
o.prototype.onDestroy = function() {
t.prototype.onDestroy.call(this);
};
o.prototype.connectSuccess = function() {
this.mSlotNetwork.sendJoinRoom();
lngui.UIWaitingLayout.hideWaiting();
};
o.prototype.onJoinGameSuccess = function(t) {
this.onPlayNow(t);
};
o.prototype.onPlayNow = function(t) {
this.mDataJoin = t;
this.mSlotSelectRoom.node.active = !1;
this.mSlotRoom.node.active = !0;
this.mSlotRoom.init(this);
};
o.prototype.init = function() {};
o.prototype.onMessage = function(t) {
this.mTooltip.show(t);
this.mSlotRoom.node.active && (this.mSlotRoom.mSlotRoomUI.btnBack.interactable = !0);
};
o.prototype.onUpdatePot = function(t) {
if (t) {
var o = 0;
for (var e in t) {
var i = t[e];
if (i > 0) {
this.mListPot[o] = i;
o++;
}
}
this.mSlotSelectRoom && this.mSlotSelectRoom.onUpdatePot(this.mListPot);
this.mSlotRoom && this.mSlotRoom.onUpdatePot(this.mListPot[this.mRoomId - 1]);
}
};
o.prototype.onBtnBack = function() {
this.mSlotSelectRoom.node.active = !0;
this.mSlotRoom.node.active = !1;
};
var e;
o._instance = null;
s([ d(a.default) ], o.prototype, "mSlotPot", void 0);
s([ d({
override: !0
}) ], o.prototype, "mSlotNetwork", void 0);
s([ d({
override: !0
}) ], o.prototype, "mSlotConfig", void 0);
s([ d({
override: !0
}) ], o.prototype, "mSlotAudio", void 0);
s([ d(l.default) ], o.prototype, "mSlotSelectRoom", void 0);
s([ d(c.default) ], o.prototype, "mSlotRoom", void 0);
return e = s([ m ], o);
}(u.default);
e.default = f;
cc._RF.pop();
}, {
"../../base_slot/Slot": void 0,
"../../base_slot/SlotConstant": void 0,
"./SlotWildPopRoom": "SlotWildPopRoom",
"./SlotWildPopSelectRoom": "SlotWildPopSelectRoom",
"./SlotWildPopVar": "SlotWildPopVar",
"./SlotWildPopXPot": "SlotWildPopXPot"
} ]
}, {}, [ "SlotWildPop", "SlotWildPopAudio", "SlotWildPopConfig", "SlotWildPopEffect", "SlotWildPopEntity", "SlotWildPopGuide", "SlotWildPopHandler", "SlotWildPopHistory", "SlotWildPopHistoryCell", "SlotWildPopIconLine", "SlotWildPopItem", "SlotWildPopLine", "SlotWildPopMachine", "SlotWildPopRank", "SlotWildPopReel", "SlotWildPopRoom", "SlotWildPopRoomUI", "SlotWildPopSelectLine", "SlotWildPopSelectRoom", "SlotWildPopVar", "SlotWildPopXPot", "SlotWildPopXPotCell" ]);