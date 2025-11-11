window.__require = function t(e, o, n) {
function i(c, p) {
if (!o[c]) {
if (!e[c]) {
var s = c.split("/");
s = s[s.length - 1];
if (!e[s]) {
var l = "function" == typeof __require && __require;
if (!p && l) return l(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = s;
}
var a = o[c] = {
exports: {}
};
e[c][0].call(a.exports, function(t) {
return i(e[c][1][t] || t);
}, a, a.exports, t, e, o, n);
}
return o[c].exports;
}
for (var r = "function" == typeof __require && __require, c = 0; c < n.length; c++) i(n[c]);
return i;
}({
HistoryMinipokerCell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "11771wuk35BeK3ZJt0xNHd8", "HistoryMinipokerCell");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (i = t[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../../../base_slot/util/Util"), p = t("../MinipokerCardUI"), s = cc._decorator, l = s.ccclass, a = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeBg = null;
e.lblSession = null;
e.lblTime = null;
e.lblBet = null;
e.lblPrize = null;
e.arrCardUI = [];
return e;
}
e.prototype.setDataCell = function(t, e) {
this.nodeBg.active = t % 2 != 0;
var o = e.CreatedTime.split("T"), n = o[0].split("-"), i = o[1].split(":");
this.lblTime.string = i[0] + ":" + i[1] + " " + n[2] + "-" + n[1] + "-" + n[0];
this.lblSession.string = e.SpinID;
this.lblBet.string = c.default.formatNumber(e.BetValue);
this.lblPrize.string = c.default.formatNumber(e.PrizeValue);
for (var r = e.CardResult.split(","), p = 0; p < r.length; p++) this.arrCardUI[p].setCard(parseInt(r[p]));
};
r([ a(cc.Node) ], e.prototype, "nodeBg", void 0);
r([ a(cc.Label) ], e.prototype, "lblSession", void 0);
r([ a(cc.Label) ], e.prototype, "lblTime", void 0);
r([ a(cc.Label) ], e.prototype, "lblBet", void 0);
r([ a(cc.Label) ], e.prototype, "lblPrize", void 0);
r([ a(p.default) ], e.prototype, "arrCardUI", void 0);
return r([ l ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../../base_slot/util/Util": void 0,
"../MinipokerCardUI": "MinipokerCardUI"
} ],
MinipokerBigWinEffect: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5e8aa/28bdAm7XfKwJnZlz7", "MinipokerBigWinEffect");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (i = t[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../../base_slot/util/Util"), p = cc._decorator, s = p.ccclass, l = p.property, a = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.skeEffect = null;
e.lblPrizeValue = null;
return e;
}
e.prototype.init = function(t) {
this.mDelegate = t;
};
e.prototype.showEffect = function(t) {
var e = this;
this.lblPrizeValue.string = c.default.formatNumber(t);
this.lblPrizeValue.node.opacity = 0;
setTimeout(function() {
e.lblPrizeValue.node.opacity = 255;
}, 500);
this.skeEffect.setAnimation(0, "animation", !1);
setTimeout(function() {
e.mDelegate.endEffect(!1);
e.node.destroy();
}, 3e3);
};
r([ l(sp.Skeleton) ], e.prototype, "skeEffect", void 0);
r([ l(cc.Label) ], e.prototype, "lblPrizeValue", void 0);
return r([ s ], e);
}(cc.Component);
o.default = a;
cc._RF.pop();
}, {
"../../base_slot/util/Util": void 0
} ],
MinipokerCardUI: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2eeebbgsWNHq54KH2eBu7ef", "MinipokerCardUI");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (i = t[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, p = c.ccclass, s = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.sprCard = null;
e.atlasCard = null;
return e;
}
e.prototype.setCard = function(t) {
this.sprCard.spriteFrame = this.atlasCard.getSpriteFrame(this.convertCardNumber(t) + this.convertCardSuite(t));
};
e.prototype.convertCardSuite = function(t) {
var e = t - t % 13, o = "";
0 === e ? o = "b" : 13 === e ? o = "t" : 26 === e ? o = "r" : 39 === e && (o = "c");
return o;
};
e.prototype.convertCardNumber = function(t) {
var e = "" + (t % 13 + 2);
"14" === e && (e = "1");
"13" === e && (e = "k");
"12" === e && (e = "q");
"11" === e && (e = "j");
return e;
};
r([ s(cc.Sprite) ], e.prototype, "sprCard", void 0);
r([ s(cc.SpriteAtlas) ], e.prototype, "atlasCard", void 0);
return r([ p ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
MinipokerConstant: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b2883+IEZFFE5sPJ0rtrr5m", "MinipokerConstant");
var n = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (i = t[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, r = i.ccclass, c = (i.property, function() {
function t() {}
t.api = {
hub: "minipokerhub",
negotiate: "https://minipoker." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate,
portal: "https://w-minipoker.luxy.club/",
getAccountHistory: "https://w-minipoker.luxy.club/api/GameAPI/GetAccountHistory?betType=1&topCount=100",
getTopWinners: "https://w-minipoker.luxy.club/api/GameAPI/GetTopWinners?betType=1&topCount=100"
};
t.winType = {
CU_LU: 4,
DOI_10_THAP: 10,
DOI_J_CAO: 9,
HAI_DOI: 8,
MAU_THAU: 11,
SAM: 7,
SANH: 6,
SANH_CHUA: 12,
THUNG: 5,
THUNG_PHA_SANH: 13,
TU_QUY: 3
};
return n([ r ], t);
}());
o.default = c;
cc._RF.pop();
}, {} ],
MinipokerHandler: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "87e77p3hX5NpIvMVEUL0UsW", "MinipokerHandler");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (i = t[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./MinipokerConstant"), p = t("./MinipokerXPot"), s = cc._decorator, l = s.ccclass, a = (s.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.mListenerKey = "MinipokerListener";
e.mMinipokerMain = null;
e.isConnect = !1;
return e;
}
e.prototype.init = function(t) {
this.mMinipokerMain = t;
};
e.prototype.connect = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect(this.mListenerKey, c.default.api.negotiate, c.default.api.hub, c.default.api.gate, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
lngui.UIWaitingLayout.showWaiting();
};
e.prototype.closeWS = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
this.mSignalr.close();
lngui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.isConnect = !1;
this.mSignalr = null;
};
e.prototype.connectSuccess = function() {
lngui.ZLog.log("Connect Sucesss");
lngui.UIWaitingLayout.hideWaiting();
this.isConnect = !0;
};
e.prototype.onResponeData = function(t) {
this.isEmpty(t) || t.s && "error" == t.s || this.onWebSocketCallback(t);
};
e.prototype.onWebSocketCallback = function(t) {
if ("open" == t.s || "reconnect" == t.s) {
if (!this.isConnect) {
this.isConnect = !0;
this.connectSuccess();
this.sendSignalR("GetEventJackpot", []);
}
} else {
t.R && t.R.description && lngui.UITextManager.showCenterNotification(t.R.description);
-51 === t.R && lngui.UITextManager.showCenterNotification("Số dư không đủ");
if (!t.M || 0 == t.M.length) return;
for (var e = t.M.length, o = 0; o < e; ++o) {
var n = t.M[o];
if (!n.A || null == n.A[0] || null == n.A[0]) return;
var i = n.A[0];
switch (n.M) {
case "resultSpinPokerSlot":
this.mMinipokerMain.onSpinResult(i);
break;

case "jackpot":
var r = i.split("|");
this.mMinipokerMain && this.mMinipokerMain.setJackpotValue(r[this.mMinipokerMain.mTypeBet - 1]);
break;

case "message":
lngui.UITextManager.showCenterNotification(i);
break;

case "jackpot":
case "history":
case "winner":
case "Event":
break;

case "GetEventInfo":
this.onGetEventInfo(i);
break;

case "pokerSlotAccountHistory":
lngui.UIPopupManager.instance.showPopupFromPrefab(this.mMinipokerMain.prefPopupHistory, function(t) {
t.loadContent(i);
});
break;

case "pokerSlotTopWinner":
lngui.UIPopupManager.instance.showPopupFromPrefab(this.mMinipokerMain.prefPopupTop, function(t) {
t.loadContent(i);
});
}
}
}
};
e.prototype.onGetEventInfo = function(t) {
t && p.default.instance && p.default.instance.onEventXPot(t);
};
e.prototype.isEmpty = function(t) {
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return JSON.stringify(t) === JSON.stringify({});
};
e.prototype.sendSignalR = function(t, e) {
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
e.prototype.sendSpin = function(t) {
this.sendSignalR("SpinPokerSlot", [ 1, t ]);
};
e.prototype.getJackpot = function() {
this.sendSignalR("GetJackpot", [ 1, this.mMinipokerMain.mTypeBet ]);
};
return r([ l ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {
"./MinipokerConstant": "MinipokerConstant",
"./MinipokerXPot": "MinipokerXPot"
} ],
MinipokerJackpotEffect: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1bbfdVq66NCqpY1kaO5cO6H", "MinipokerJackpotEffect");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (i = t[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../../base_slot/util/Util"), p = cc._decorator, s = p.ccclass, l = p.property, a = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.skeEffect = null;
e.lblPrizeValue = null;
return e;
}
e.prototype.init = function(t) {
this.mDelegate = t;
};
e.prototype.showEffect = function(t) {
var e = this;
this.lblPrizeValue.string = c.default.formatNumber(t);
this.lblPrizeValue.node.opacity = 0;
setTimeout(function() {
e.lblPrizeValue.node.opacity = 255;
}, 500);
this.skeEffect.setAnimation(0, "idle", !1);
setTimeout(function() {
e.mDelegate.endEffect(!0);
e.node.destroy();
}, 5e3);
};
r([ l(sp.Skeleton) ], e.prototype, "skeEffect", void 0);
r([ l(cc.Label) ], e.prototype, "lblPrizeValue", void 0);
return r([ s ], e);
}(cc.Component);
o.default = a;
cc._RF.pop();
}, {
"../../base_slot/util/Util": void 0
} ],
MinipokerMain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "617bbU/uwBLhby+XSTdfbDl", "MinipokerMain");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (i = t[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./MinipokerHandler"), p = t("./MinipokerCardUI"), s = t("./MinipokerConstant"), l = t("./MinipokerJackpotEffect"), a = t("./MinipokerBigWinEffect"), u = t("../../base_slot/util/Util"), f = t("./Utils/Minipoker_UINumericLabelHelper"), h = cc._decorator, d = h.ccclass, y = h.property, _ = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeMain = null;
e.arrNodeReel = [];
e.arrBtnBet = [];
e.btnAutoSpin = null;
e.btnStopAutoSpin = null;
e.tglFastSpin = null;
e.nodeWin = null;
e.nodeEffect = null;
e.lblWinValue = null;
e.lblSession = null;
e.lblJackpot = null;
e.skeSpin = null;
e.prefCardUI = null;
e.prefBigWinEffect = null;
e.prefJackpotEffect = null;
e.prefPopupHelp = null;
e.prefPopupTop = null;
e.prefPopupHistory = null;
e.mTypeBet = 1;
e.mMinipokerHandler = null;
e.mArrCardUI = [];
e.mJackpotValue = 0;
e.mResultSpin = null;
e.mIsSpinning = !1;
e.mIsAutoPlay = !1;
e.mIsFastSpin = !1;
return e;
}
e.prototype.onLoad = function() {
this.setDefault();
this.mMinipokerHandler = new c.default();
this.mMinipokerHandler.init(this);
this.mMinipokerHandler.connect();
this.nodeMain.on(cc.Node.EventType.TOUCH_START, function() {}, this);
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.mMinipokerHandler.connect, this);
this.mMinipokerHandler.closeWS();
lngui.ZLog.log("=====================CLOSE WS NOTI===============================");
};
e.prototype.setDefault = function() {
this.lblJackpot.data = 0;
this.mIsSpinning = !1;
for (var t = 0; t < 5; t++) {
this.mArrCardUI[t] = [];
for (var e = 0; e < 10; e++) {
var o = cc.instantiate(this.prefCardUI);
this.arrNodeReel[t].addChild(o);
this.mArrCardUI[t][e] = o.getComponent(p.default);
this.mArrCardUI[t][e].setCard(u.default.random(0, 51));
}
this.arrNodeReel[t].y = 0;
}
this.lblSession.string = "#-----------";
this.btnAutoSpin.node.active = !0;
this.btnStopAutoSpin.node.active = !1;
this.tglFastSpin.isChecked = !1;
this.onTouchSelectBet(1);
};
e.prototype.setJackpotValue = function(t) {
this.mJackpotValue = t;
this.lblJackpot.scheduleProgress(this.mJackpotValue, .2);
};
e.prototype.endEffect = function(t) {
this.mIsSpinning = !1;
t ? this.onTouchStopAuto() : this.mIsAutoPlay && this.onTouchSpin();
};
e.prototype.showResultSpin = function() {
var t = this;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.mResultSpin.Balance);
var e = "";
switch (this.mResultSpin.Cards[0].CardTypeID) {
case s.default.winType.CU_LU:
e = "Cù Lũ";
break;

case s.default.winType.DOI_10_THAP:
e = "";
break;

case s.default.winType.DOI_J_CAO:
e = "J++";
break;

case s.default.winType.HAI_DOI:
e = "Hai Đôi";
break;

case s.default.winType.MAU_THAU:
e = "Mậu Thầu";
break;

case s.default.winType.SAM:
e = "Sám";
break;

case s.default.winType.SANH:
e = "Sảnh";
break;

case s.default.winType.THUNG:
e = "Thùng";
}
if (this.mResultSpin.PrizeValue > 0) if (this.mResultSpin.Cards[0].CardTypeID == s.default.winType.THUNG_PHA_SANH || this.mResultSpin.Cards[0].CardTypeID == s.default.winType.TU_QUY) {
(o = cc.instantiate(this.prefBigWinEffect)).getComponent(a.default).init(this);
o.getComponent(a.default).showEffect(this.mResultSpin.PrizeValue);
this.nodeEffect.addChild(o);
} else if (this.mResultSpin.Cards[0].CardTypeID == s.default.winType.SANH_CHUA) {
var o;
(o = cc.instantiate(this.prefJackpotEffect)).getComponent(l.default).init(this);
o.getComponent(l.default).showEffect(this.mResultSpin.PrizeValue);
this.nodeEffect.addChild(o);
} else {
this.nodeWin.active = !0;
this.nodeWin.opacity = 0;
this.lblWinValue.string = e + "  +" + u.default.formatNumber(this.mResultSpin.PrizeValue);
this.node.scale;
cc.tween(this.nodeWin).to(.25, {
opacity: 255
}).delay(1.5).to(.25, {
opacity: 0
}).call(function() {
t.nodeWin.active = !1;
t.mIsSpinning = !1;
t.mIsAutoPlay && t.onTouchSpin();
}).start();
} else {
this.mIsSpinning = !1;
this.mIsAutoPlay && this.onTouchSpin();
}
};
e.prototype.onSpinResult = function(t) {
var e = this;
switch (t.ResponseStatus) {
case -10003:
this.mResultSpin = null;
setTimeout(function() {
e.onTouchSpin();
}, 1e3);
return;

case -10004:
lngui.UITextManager.showCenterNotification("Bạn không đủ SUM để quay");
return;
}
if (t.ResponseStatus < 0) lngui.UITextManager.showCenterNotification("Có lỗi xảy ra trong quá trình quay, mời bạn thử lại"); else {
for (var o = 0; o < this.mArrCardUI.length; o++) {
this.mResultSpin && this.mArrCardUI[o][0].setCard(this.mResultSpin.Cards[0]["CardID" + (o + 1)]);
this.mArrCardUI[o][this.mArrCardUI[o].length - 1].setCard(t.Cards[0]["CardID" + (o + 1)]);
}
this.mResultSpin = t;
this.lblSession.string = "#" + this.mResultSpin.SpinID;
var n = this.mIsFastSpin ? .2 : .5;
for (o = 0; o < this.arrNodeReel.length; o++) {
this.arrNodeReel[o].y = 0;
o == this.arrNodeReel.length - 1 ? cc.tween(this.arrNodeReel[o]).delay(.15 * o).to(n, {
y: -this.arrNodeReel[o].height + this.mArrCardUI[o][this.mArrCardUI[o].length - 1].node.height
}, {
easing: "sineOut"
}).call(this.showResultSpin.bind(this)).start() : cc.tween(this.arrNodeReel[o]).delay(.15 * o).to(n, {
y: -this.arrNodeReel[o].height + this.mArrCardUI[o][this.mArrCardUI[o].length - 1].node.height
}, {
easing: "sineOut"
}).start();
}
}
};
e.prototype.onTouchAllBtn = function(t, e) {
switch (e) {
case "close":
this.onTouchClose();
break;

case "spin":
this.onTouchSpin();
break;

case "auto":
this.onTouchAutoSpin();
break;

case "stop_auto":
this.onTouchStopAuto();
break;

case "help":
this.onTouchHelp();
break;

case "top":
this.onTouchTop();
break;

case "history":
this.onTouchHistory();
break;

case "fast_spin":
this.onTouchFastSpin();
break;

case "minimize":
this.onTouchMinimize();
break;

case "select_bet_100":
this.onTouchSelectBet(1);
break;

case "select_bet_1k":
this.onTouchSelectBet(2);
break;

case "select_bet_10k":
this.onTouchSelectBet(3);
}
};
e.prototype.onTouchClose = function() {
this.mMinipokerHandler.closeWS();
this.node.destroy();
};
e.prototype.onTouchSpin = function() {
if (!this.mIsSpinning) {
this.mIsSpinning = !0;
this.skeSpin.setAnimation(0, "Spine", !1);
this.mMinipokerHandler.sendSpin(this.mTypeBet);
}
};
e.prototype.onTouchAutoSpin = function() {
this.mIsAutoPlay = !0;
this.btnAutoSpin.node.active = !1;
this.btnStopAutoSpin.node.active = !0;
this.mIsSpinning || this.onTouchSpin();
};
e.prototype.onTouchStopAuto = function() {
this.mIsAutoPlay = !1;
this.btnAutoSpin.node.active = !0;
this.btnStopAutoSpin.node.active = !1;
};
e.prototype.onTouchFastSpin = function() {
this.mIsFastSpin = this.tglFastSpin.isChecked;
};
e.prototype.onTouchHelp = function() {
cc.instantiate(this.prefPopupHelp);
};
e.prototype.onTouchTop = function() {
this.mMinipokerHandler.sendSignalR("GetTopAccounts", [ 1, 30 ]);
};
e.prototype.onTouchHistory = function() {
this.mMinipokerHandler.sendSignalR("GetAccountHistory", [ 1, 30 ]);
};
e.prototype.onTouchMinimize = function() {
this.node.scale = 0;
};
e.prototype.onTouchSelectBet = function(t) {
this.mTypeBet = parseInt(t);
for (var e = 0; e < this.arrBtnBet.length; e++) e == this.mTypeBet - 1 ? this.arrBtnBet[e].interactable = !1 : this.arrBtnBet[e].interactable = !0;
this.mMinipokerHandler && this.mMinipokerHandler.getJackpot();
};
r([ y(cc.Node) ], e.prototype, "nodeMain", void 0);
r([ y(cc.Node) ], e.prototype, "arrNodeReel", void 0);
r([ y(cc.Button) ], e.prototype, "arrBtnBet", void 0);
r([ y(cc.Button) ], e.prototype, "btnAutoSpin", void 0);
r([ y(cc.Button) ], e.prototype, "btnStopAutoSpin", void 0);
r([ y(cc.Toggle) ], e.prototype, "tglFastSpin", void 0);
r([ y(cc.Node) ], e.prototype, "nodeWin", void 0);
r([ y(cc.Node) ], e.prototype, "nodeEffect", void 0);
r([ y(cc.Label) ], e.prototype, "lblWinValue", void 0);
r([ y(cc.Label) ], e.prototype, "lblSession", void 0);
r([ y(f.default) ], e.prototype, "lblJackpot", void 0);
r([ y(sp.Skeleton) ], e.prototype, "skeSpin", void 0);
r([ y(cc.Prefab) ], e.prototype, "prefCardUI", void 0);
r([ y(cc.Prefab) ], e.prototype, "prefBigWinEffect", void 0);
r([ y(cc.Prefab) ], e.prototype, "prefJackpotEffect", void 0);
r([ y(cc.Prefab) ], e.prototype, "prefPopupHelp", void 0);
r([ y(cc.Prefab) ], e.prototype, "prefPopupTop", void 0);
r([ y(cc.Prefab) ], e.prototype, "prefPopupHistory", void 0);
return r([ d ], e);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {
"../../base_slot/util/Util": void 0,
"./MinipokerBigWinEffect": "MinipokerBigWinEffect",
"./MinipokerCardUI": "MinipokerCardUI",
"./MinipokerConstant": "MinipokerConstant",
"./MinipokerHandler": "MinipokerHandler",
"./MinipokerJackpotEffect": "MinipokerJackpotEffect",
"./Utils/Minipoker_UINumericLabelHelper": "Minipoker_UINumericLabelHelper"
} ],
MinipokerXPotCell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "cce11CTGbNMpo0KhS2Ngk2n", "MinipokerXPotCell");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (i = t[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../../base_slot/SlotXPotCell"), p = cc._decorator, s = p.ccclass, l = (p.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.updatePot = function() {};
e.prototype.setData = function(t) {
this.mData = t;
this.txtPotCount.node.active = !0;
this.txtPot.node.active = !1;
this.txtPotCount.string = "Còn " + t.EventJackpot + " <color=#00ff00> HŨ</color>";
};
return r([ s ], e);
}(c.default));
o.default = l;
cc._RF.pop();
}, {
"../../base_slot/SlotXPotCell": void 0
} ],
MinipokerXPot: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "73c57J3hoNATbr9lTfyiAqt", "MinipokerXPot");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (i = t[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../../base_slot/SlotXPot"), p = cc._decorator, s = p.ccclass, l = p.property, a = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listPotCell = [];
e.isEvent = !1;
return e;
}
e.prototype.onEventXPot = function(t) {
this.isEvent = !1;
for (var e = 0; e < t.length; e++) t[e].EventJackpot > 0 && (this.isEvent = !0);
this.node.active = this.isEvent;
if (this.isEvent) {
var o = 0;
for (e = 0; e < t.length; e++) if (this.listPotCell[o]) {
this.listPotCell[o].setData(t[e]);
o++;
}
}
};
e.instance = null;
r([ l({
override: !0
}) ], e.prototype, "listPotCell", void 0);
return r([ s ], e);
}(c.default);
o.default = a;
cc._RF.pop();
}, {
"../../base_slot/SlotXPot": void 0
} ],
Minipoker_UINumericLabelHelper: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2ad4eKGWSRFAaCoPM6Ury+D", "Minipoker_UINumericLabelHelper");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (i = t[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, p = c.ccclass, s = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ p ], e);
}(lngui.UINumericLabelHelper));
o.default = s;
cc._RF.pop();
}, {} ],
PopupHelpMinipoker: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9fa19GW6FxBCZjnc6VTKa7h", "PopupHelpMinipoker");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (i = t[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, p = c.ccclass, s = (c.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onTouchAllBtn = function(t, e) {
switch (e) {
case "close":
this.hide();
}
};
return r([ p ], e);
}(lngui.UIPopup));
o.default = s;
cc._RF.pop();
}, {} ],
PopupHistoryMinipoker: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "98f3ct4YKxM3a+ehQHwQA+F", "PopupHistoryMinipoker");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (i = t[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./HistoryMinipokerCell"), p = cc._decorator, s = p.ccclass, l = p.property, a = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scvHistory = null;
e.prefHistoryCell = null;
e.mArrCell = [];
e.mListData = [];
e.mCurrentIndex = 0;
return e;
}
e.prototype.loadContent = function(t) {
for (var e = 0; e < this.mArrCell.length; e++) this.mArrCell[e].active = !1;
this.mListData = t;
this.mCurrentIndex = 0;
};
e.prototype.onTouchAllBtn = function(t, e) {
switch (e) {
case "close":
this.hide();
}
};
e.prototype.update = function() {
if (!(this.mListData.length <= 0 || this.mCurrentIndex >= this.mListData.length)) {
if (!this.mArrCell[this.mCurrentIndex]) {
this.mArrCell[this.mCurrentIndex] = cc.instantiate(this.prefHistoryCell);
this.scvHistory.content.addChild(this.mArrCell[this.mCurrentIndex]);
}
this.mArrCell[this.mCurrentIndex].active = !0;
this.mArrCell[this.mCurrentIndex].getComponent(c.default).setDataCell(this.mCurrentIndex, this.mListData[this.mCurrentIndex]);
this.mCurrentIndex++;
}
};
r([ l(cc.ScrollView) ], e.prototype, "scvHistory", void 0);
r([ l(cc.Prefab) ], e.prototype, "prefHistoryCell", void 0);
return r([ s ], e);
}(lngui.UIPopup);
o.default = a;
cc._RF.pop();
}, {
"./HistoryMinipokerCell": "HistoryMinipokerCell"
} ],
PopupTopMinipoker: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "800cbb61GtKPK2Cea9Hc/ho", "PopupTopMinipoker");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (i = t[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./TopMinipokerCell"), p = cc._decorator, s = p.ccclass, l = p.property, a = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scvTop = null;
e.prefTopCell = null;
e.mArrCell = [];
e.mListData = [];
e.mCurrentIndex = 0;
return e;
}
e.prototype.loadContent = function(t) {
for (var e = 0; e < this.mArrCell.length; e++) this.mArrCell[e].active = !1;
this.mListData = t;
this.mCurrentIndex = 0;
};
e.prototype.onTouchAllBtn = function(t, e) {
switch (e) {
case "close":
this.hide();
}
};
e.prototype.update = function() {
if (!(this.mListData.length <= 0 || this.mCurrentIndex >= this.mListData.length)) {
if (!this.mArrCell[this.mCurrentIndex]) {
this.mArrCell[this.mCurrentIndex] = cc.instantiate(this.prefTopCell);
this.scvTop.content.addChild(this.mArrCell[this.mCurrentIndex]);
}
this.mArrCell[this.mCurrentIndex].active = !0;
this.mArrCell[this.mCurrentIndex].getComponent(c.default).setDataCell(this.mCurrentIndex, this.mListData[this.mCurrentIndex]);
this.mCurrentIndex++;
}
};
r([ l(cc.ScrollView) ], e.prototype, "scvTop", void 0);
r([ l(cc.Prefab) ], e.prototype, "prefTopCell", void 0);
return r([ s ], e);
}(lngui.UIPopup);
o.default = a;
cc._RF.pop();
}, {
"./TopMinipokerCell": "TopMinipokerCell"
} ],
TopMinipokerCell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c5cf8UQ2I9DdKQNN2lqtIbS", "TopMinipokerCell");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (i = t[p]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../../../base_slot/util/Util"), p = t("../MinipokerCardUI"), s = cc._decorator, l = s.ccclass, a = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeBg = null;
e.lblTime = null;
e.lblNickName = null;
e.lblBet = null;
e.lblPrize = null;
e.arrCardUI = [];
return e;
}
e.prototype.setDataCell = function(t, e) {
this.nodeBg.active = t % 2 != 0;
var o = e.CreatedTime.split("T"), n = o[0].split("-"), i = o[1].split(":");
this.lblTime.string = i[0] + ":" + i[1] + " " + n[2] + "-" + n[1] + "-" + n[0];
this.lblNickName.string = e.UserFullName;
this.lblBet.string = c.default.formatNumber(e.BetValue);
this.lblPrize.string = c.default.formatNumber(e.PrizeValue);
for (var r = e.CardResult.split(","), p = 0; p < r.length; p++) this.arrCardUI[p].setCard(parseInt(r[p]));
};
r([ a(cc.Node) ], e.prototype, "nodeBg", void 0);
r([ a(cc.Label) ], e.prototype, "lblTime", void 0);
r([ a(cc.Label) ], e.prototype, "lblNickName", void 0);
r([ a(cc.Label) ], e.prototype, "lblBet", void 0);
r([ a(cc.Label) ], e.prototype, "lblPrize", void 0);
r([ a(p.default) ], e.prototype, "arrCardUI", void 0);
return r([ l ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../../base_slot/util/Util": void 0,
"../MinipokerCardUI": "MinipokerCardUI"
} ]
}, {}, [ "MinipokerBigWinEffect", "MinipokerCardUI", "MinipokerConstant", "MinipokerHandler", "MinipokerJackpotEffect", "MinipokerMain", "MinipokerXPot", "MinipokerXPotCell", "Minipoker_UINumericLabelHelper", "HistoryMinipokerCell", "PopupHelpMinipoker", "PopupHistoryMinipoker", "PopupTopMinipoker", "TopMinipokerCell" ]);