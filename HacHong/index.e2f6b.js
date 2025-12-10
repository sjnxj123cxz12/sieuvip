window.__require = function e(t, o, n) {
function i(a, s) {
if (!o[a]) {
if (!t[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!t[c]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(c, !0);
if (r) return r(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var u = o[a] = {
exports: {}
};
t[a][0].call(u.exports, function(e) {
return i(t[a][1][e] || e);
}, u, u.exports, e, t, o, n);
}
return o[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
return i;
}({
"HacHong.Chat.NetworkClient": [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b6cdaUSJJdKUbgm0blnXvkV", "HacHong.Chat.NetworkClient");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("./HacHongChat"), s = cc._decorator, c = s.ccclass, l = (s.property, function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.mSignalr = null;
t.isConnect = !1;
return t;
}
o = t;
Object.defineProperty(t, "instance", {
get: function() {
o._instance || (o._instance = new o());
return o._instance;
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
o._instance = this;
};
t.prototype.connect = function() {
var e = {
url: "https://chat." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
ip: "http://18.138.207.162:8092/signalr/negotiate",
hub: "chatHub",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate
};
cc.systemEvent.off("OnChatHacHongSocketEvent", this.onResponeData, this);
cc.systemEvent.on("OnChatHacHongSocketEvent", this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect("OnChatHacHongSocketEvent", e.url, e.hub, e.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
t.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.connect();
};
t.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.closeWS();
};
t.prototype.onResponeData = function(e) {
this.isEmpty(e) || e.s && "error" == e.s || this.onWebSocketCallback(e);
};
t.prototype.isEmpty = function(e) {
for (var t in e) if (e.hasOwnProperty(t)) return !1;
return JSON.stringify(e) === JSON.stringify({});
};
t.prototype.onWebSocketCallback = function(e) {
if (("open" == e.s || "reconnect" == e.s || "1" == e.s) && !this.isConnect) {
this.isConnect = !0;
this.connectSuccess();
this.registerChat();
}
e.R < 0 && lngui.UITextManager.showCenterNotification("Lỗi " + e.R);
if (e.M && Array.isArray(e.M) && 0 != e.M.length) for (var t = e.M.length, o = 0; o < t; ++o) {
var n = e.M[o];
if (n.A && null != n.A[0] && null != n.A[0]) {
var i = n.A[0];
switch (n.M) {
case "receiveMessage":
a.default.instance.receiveMessage(i);
break;

case "listLastMessages":
a.default.instance.listLastMessages(i);
}
}
}
};
t.prototype.registerChat = function() {
this.sendSignalR("RegisterChat", [ a.default.instance.chatChanel ]);
};
t.prototype.pingPong = function() {
this.sendSignalR("PingPong", []);
};
t.prototype.connectSuccess = function() {
lngui.ZLog.log("Connect Sucesss");
};
t.prototype.closeWS = function() {
cc.systemEvent.off("OnChatHacHongSocketEvent", this.onResponeData, this);
this.mSignalr.close();
lngui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
this.isConnect = !1;
};
t.prototype.sendSignalR = function(e, t) {
lngui.ZLog.log("SendSocket=======>" + e + "==data==" + JSON.stringify(t));
t = t || [];
this.mSignalr && this.mSignalr.send(e, t);
};
var o;
t._instance = null;
return o = r([ c ], t);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {
"./HacHongChat": "HacHongChat"
} ],
HacHongAudioTypes: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "18687MMNkdJmrzR6RbbFgHx", "HacHongAudioTypes");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.HacHongAudioTypes = void 0;
(function(e) {
e.BACKGROUND = "BACKGROUND";
e.BET = "BET";
e.CARD_SLIDE = "CARD_SLIDE";
e.CARD_SLIDE_BURN = "CARD_SLIDE_BURN";
e.CARD_SLIDE_RONG = "CARD_SLIDE_RONG";
e.CARD_SLIDE_HO = "CARD_SLIDE_HO";
e.CARD_OPEN = "CARD_OPEN";
e.CARD_BURN_MOVE_TO_BOX = "CARD_BURN_MOVE_TO_BOX";
e.SELECT_CHIP = "SELECT_CHIP";
e.GET_COIN = "GET_COIN";
})(o.HacHongAudioTypes || (o.HacHongAudioTypes = {}));
cc._RF.pop();
}, {} ],
HacHongAudios: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "56ee0hDz/9A/q0RGACY7gXX", "HacHongAudios");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = e("./HacHongConst"), u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.backgroundSound = null;
t.betSound = null;
t.cardsSlide = null;
t.cardsSlideBurn = null;
t.cardsSlideRong = null;
t.cardsSlideHo = null;
t.cardBurnMoveToBox = null;
t.cardOpen = null;
t.selectChip = null;
t.getCoin = null;
return t;
}
t.prototype.onLoad = function() {
var e, t = null === (e = cc.AudioController) || void 0 === e ? void 0 : e.getInstance();
t && t.setAudioPool && t.setAudioPool(this);
};
t.prototype.enableMusic = function(e) {
if (this.backgroundSound) if (e) {
if (!this.backgroundSound.isPlaying) {
this.backgroundSound.play();
this.backgroundSound.volume = .5;
}
} else this.backgroundSound.stop();
};
t.prototype.enableSound = function(e) {
[ this.betSound, this.cardsSlideBurn, this.cardsSlideHo, this.cardsSlideRong, this.cardBurnMoveToBox, this.cardOpen, this.selectChip, this.getCoin ].forEach(function(t) {
t && (t.mute = !e);
});
this.betSound && (this.betSound.volume = .2);
this.getCoin && (this.getCoin.volume = .2);
this.selectChip && (this.selectChip.volume = .2);
};
t.prototype.getAudioClip = function(e) {
var t = l.HacHongConst.HacHongAudioTypes;
if (!t) return null;
switch (e) {
case t.BACKGROUND:
return this.backgroundSound;

case t.BET:
return this.betSound;

case t.CARD_SLIDE_BURN:
return this.cardsSlideBurn;

case t.CARD_SLIDE_RONG:
return this.cardsSlideRong;

case t.CARD_SLIDE_HO:
return this.cardsSlideHo;

case t.CARD_BURN_MOVE_TO_BOX:
return this.cardBurnMoveToBox;

case t.CARD_OPEN:
return this.cardOpen;

case t.SELECT_CHIP:
return this.selectChip;

case t.GET_COIN:
return this.getCoin;

default:
return null;
}
};
r([ c(cc.AudioSource) ], t.prototype, "backgroundSound", void 0);
r([ c(cc.AudioSource) ], t.prototype, "betSound", void 0);
r([ c(cc.AudioSource) ], t.prototype, "cardsSlide", void 0);
r([ c(cc.AudioSource) ], t.prototype, "cardsSlideBurn", void 0);
r([ c(cc.AudioSource) ], t.prototype, "cardsSlideRong", void 0);
r([ c(cc.AudioSource) ], t.prototype, "cardsSlideHo", void 0);
r([ c(cc.AudioSource) ], t.prototype, "cardBurnMoveToBox", void 0);
r([ c(cc.AudioSource) ], t.prototype, "cardOpen", void 0);
r([ c(cc.AudioSource) ], t.prototype, "selectChip", void 0);
r([ c(cc.AudioSource) ], t.prototype, "getCoin", void 0);
return r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./HacHongConst": "HacHongConst"
} ],
HacHongBetView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2cb35VQi+hEOLbCvsVeOYBm", "HacHongBetView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = e("./HacHongController"), u = e("./HacHongConst"), p = e("./HacHongButtonBet"), d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.layoutButtonBets = null;
t.lbBlackBet = null;
t.lbRedBet = null;
t.lbSpadeBet = null;
t.lbClobeBet = null;
t.lbDiamondBet = null;
t.lbHeartBet = null;
t.lbStraighttBet = null;
t.lbPairBet = null;
t.lbFlushtBet = null;
t.nodeBetX2 = null;
t.nodeBetAgain = null;
t.balanceBet = 5e3;
t.totalBet = 0;
t.betSide = 0;
t.listBet = [];
t.btnBetX2 = null;
t.btnBetAgain = null;
return t;
}
o = t;
t.getInstance = function() {
return this._instance;
};
t.prototype.setBetLabel = function(e, t) {
if (e && e.node) {
e.string = t;
e.node.parent && (e.node.parent.active = "" !== t);
}
};
t.prototype.onLoad = function() {
o._instance = this;
l.default.getInstance().setDragonTigerBetView(this);
this.reset();
this.balanceBet = 5e3;
this.totalBet = 0;
this.betSide = 0;
this.nodeBetX2 && (this.btnBetX2 = this.nodeBetX2.getComponent(cc.Button));
this.nodeBetAgain && (this.btnBetAgain = this.nodeBetAgain.getComponent(cc.Button));
};
t.prototype.onDestroy = function() {
o._instance === this && (o._instance = null);
l.default.getInstance().setDragonTigerBetView(null);
};
t.prototype.reset = function() {
this.setBetLabel(this.lbBlackBet, "");
this.setBetLabel(this.lbRedBet, "");
this.setBetLabel(this.lbSpadeBet, "");
this.setBetLabel(this.lbClobeBet, "");
this.setBetLabel(this.lbDiamondBet, "");
this.setBetLabel(this.lbHeartBet, "");
this.setBetLabel(this.lbStraighttBet, "");
this.setBetLabel(this.lbPairBet, "");
this.setBetLabel(this.lbFlushtBet, "");
};
t.prototype.setBalanceBet = function(e, t) {
var o, n;
if (parseInt(t.toString()) != this.balanceBet) {
var i = null === (o = cc.AudioController) || void 0 === o ? void 0 : o.getInstance();
i && i.playSound(null === (n = cc.HacHongAudioTypes_789) || void 0 === n ? void 0 : n.SELECT_CHIP);
this.resetStateBtnBet();
if (e && e.target && this.layoutButtonBets) {
var r = e.target._name || e.target.name, a = this.layoutButtonBets.getChildByName(r);
if (a) {
var s = a.getComponent(p.default);
if (s && s.spriteButtons && !(s.spriteButtons.length < 1)) {
var c = a.children[0];
if (c) {
var l = c.getComponent(cc.Sprite);
l && s.spriteButtons[0] && (l.spriteFrame = s.spriteButtons[0]);
var u = cc.scaleTo(.1, .85, .85);
u.easing(cc.easeInOut(1));
c.runAction(u);
this.balanceBet = parseInt(t.toString());
}
}
}
}
}
};
t.prototype.resetStateBtnBet = function() {
this.layoutButtonBets && this.layoutButtonBets.children.forEach(function(e) {
var t = e.getComponent(p.default);
if (t && t.spriteButtons && !(t.spriteButtons.length < 2)) {
var o = e.children[0];
if (o) {
var n = o.getComponent(cc.Sprite);
n && t.spriteButtons[1] && (n.spriteFrame = t.spriteButtons[1]);
var i = cc.scaleTo(.1, .7, .7);
i.easing(cc.easeInOut(1));
o.runAction(i);
}
}
});
};
t.prototype.updateTotalBetValue = function(e, t) {
var o = this.formatNumber(t);
switch (parseInt(e.toString())) {
case u.HacHongConst.HacHongBetSide.Black:
this.setBetLabel(this.lbBlackBet, o);
break;

case u.HacHongConst.HacHongBetSide.Red:
this.setBetLabel(this.lbRedBet, o);
break;

case u.HacHongConst.HacHongBetSide.Spade:
this.setBetLabel(this.lbSpadeBet, o);
break;

case u.HacHongConst.HacHongBetSide.Clobe:
this.setBetLabel(this.lbClobeBet, o);
break;

case u.HacHongConst.HacHongBetSide.Diamond:
this.setBetLabel(this.lbDiamondBet, o);
break;

case u.HacHongConst.HacHongBetSide.Heart:
this.setBetLabel(this.lbHeartBet, o);
break;

case u.HacHongConst.HacHongBetSide.Straight:
this.setBetLabel(this.lbStraighttBet, o);
break;

case u.HacHongConst.HacHongBetSide.Pair:
this.setBetLabel(this.lbPairBet, o);
break;

case u.HacHongConst.HacHongBetSide.Flush:
this.setBetLabel(this.lbFlushtBet, o);
}
};
t.prototype.formatNumber = function(e) {
return 0 == parseInt(e) ? "" : u.HacHongConst.formatNumberToKMB(e);
};
t.prototype.updateBetInfoFromServer = function(e) {
if (e) {
this.listBet = e;
var t = this;
e.forEach(function(e) {
t.updateBetInfo(e);
});
}
};
t.prototype.updateBetInfo = function(e) {
if (e) {
var t = this.formatNumber(e.BetValue);
switch (e.BetSide) {
case u.HacHongConst.HacHongBetSide.Black:
this.setBetLabel(this.lbBlackBet, t);
break;

case u.HacHongConst.HacHongBetSide.Red:
this.setBetLabel(this.lbRedBet, t);
break;

case u.HacHongConst.HacHongBetSide.Spade:
this.setBetLabel(this.lbSpadeBet, t);
break;

case u.HacHongConst.HacHongBetSide.Clobe:
this.setBetLabel(this.lbClobeBet, t);
break;

case u.HacHongConst.HacHongBetSide.Diamond:
this.setBetLabel(this.lbDiamondBet, t);
break;

case u.HacHongConst.HacHongBetSide.Heart:
this.setBetLabel(this.lbHeartBet, t);
break;

case u.HacHongConst.HacHongBetSide.Straight:
this.setBetLabel(this.lbStraighttBet, t);
break;

case u.HacHongConst.HacHongBetSide.Pair:
this.setBetLabel(this.lbPairBet, t);
break;

case u.HacHongConst.HacHongBetSide.Flush:
this.setBetLabel(this.lbFlushtBet, t);
}
}
};
t.prototype.setBetSide = function(e, t) {
var o, n, i;
this.betSide = parseInt(t.toString());
var r = null === (o = cc.AudioController) || void 0 === o ? void 0 : o.getInstance();
r && r.playSound(null === (n = cc.HacHongAudioTypes_789) || void 0 === n ? void 0 : n.BET);
if (lngui.UserManager.instance.mainUserInfo.Money < this.balanceBet) {
var a = null === (i = cc.PopupController) || void 0 === i ? void 0 : i.getInstance();
a && a.showMessage("Số dư không đủ");
} else {
l.default.getInstance().sendRequestOnHub(u.HacHongConst.MethodHubName.BET, this.balanceBet, this.betSide);
this.disableBetAgain(!0);
}
};
t.prototype.sendRequestBet = function(e, t) {
return l.default.getInstance().sendRequestOnHub(u.HacHongConst.MethodHubName.BET, e, t);
};
t.prototype.onBetAgain = function(e, t) {
var o = this;
t = parseInt(t.toString());
var n = l.default.getInstance().getBetLogBySessionID(l.default.getInstance().getBetLogSession());
if (0 !== n.length) {
for (var i = function(e) {
n.forEach(function(t, n) {
var i = setTimeout(function() {
if (l.default.getInstance().getCurrentState() === u.HacHongConst.HacHongState.BETTING && t.sessionID === l.default.getInstance().getBetLogSession() - 1) this.sendRequestBet(t.value, t.betSide); else try {
clearTimeout(i);
} catch (e) {
console.log(e);
}
}.bind(o), 120 * n * e);
});
}, r = 1; r <= t; r++) i(r);
this.disableBetAgain(!0);
} else lngui.UITextManager.showCenterNotification("Chưa có dữ liệu của phiên trước.");
};
t.prototype.disableBetAgain = function(e) {
this.btnBetAgain && (this.btnBetAgain.interactable = !e);
this.btnBetX2 && (this.btnBetX2.interactable = !e);
var t = cc.Color.WHITE;
e && (t = cc.Color.GRAY);
this.nodeBetX2 && (this.nodeBetX2.color = t);
this.nodeBetAgain && (this.nodeBetAgain.color = t);
};
t.prototype.getBetSide = function() {
return this.betSide;
};
var o;
t._instance = null;
r([ c(cc.Node) ], t.prototype, "layoutButtonBets", void 0);
r([ c(cc.Label) ], t.prototype, "lbBlackBet", void 0);
r([ c(cc.Label) ], t.prototype, "lbRedBet", void 0);
r([ c(cc.Label) ], t.prototype, "lbSpadeBet", void 0);
r([ c(cc.Label) ], t.prototype, "lbClobeBet", void 0);
r([ c(cc.Label) ], t.prototype, "lbDiamondBet", void 0);
r([ c(cc.Label) ], t.prototype, "lbHeartBet", void 0);
r([ c(cc.Label) ], t.prototype, "lbStraighttBet", void 0);
r([ c(cc.Label) ], t.prototype, "lbPairBet", void 0);
r([ c(cc.Label) ], t.prototype, "lbFlushtBet", void 0);
r([ c(cc.Node) ], t.prototype, "nodeBetX2", void 0);
r([ c(cc.Node) ], t.prototype, "nodeBetAgain", void 0);
return o = r([ s ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"./HacHongButtonBet": "HacHongButtonBet",
"./HacHongConst": "HacHongConst",
"./HacHongController": "HacHongController"
} ],
HacHongButtonBet: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "eb9eaieBzFDCrooJsnVRzJY", "HacHongButtonBet");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.spriteButtons = [];
return t;
}
r([ c([ cc.SpriteFrame ]) ], t.prototype, "spriteButtons", void 0);
return r([ s ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
HacHongButtonSideBet: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "53c32dXj3xLeqoLC9HcDxWr", "HacHongButtonSideBet");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.btnNodeBlack = null;
t.btnNodeRed = null;
t.btnNodeSpade = null;
t.btnNodeClobe = null;
t.btnNodeDiamond = null;
t.btnNodeHeart = null;
t.btnNodeStraight = null;
t.btnNodePair = null;
t.btnNodeFlush = null;
t.buttonSideBet = null;
return t;
}
o = t;
t.getInstance = function() {
return this._instance;
};
t.prototype.onLoad = function() {
o._instance = this;
this.buttonSideBet = this;
};
t.prototype.onDestroy = function() {
o._instance === this && (o._instance = null);
};
t.prototype.enableButtonBet = function(e) {
this.commonActive(this.btnNodeBlack, e);
this.commonActive(this.btnNodeRed, e);
this.commonActive(this.btnNodeSpade, e);
this.commonActive(this.btnNodeClobe, e);
this.commonActive(this.btnNodeDiamond, e);
this.commonActive(this.btnNodeHeart, e);
this.commonActive(this.btnNodeStraight, e);
this.commonActive(this.btnNodePair, e);
this.commonActive(this.btnNodeFlush, e);
};
t.prototype.commonActive = function(e, t) {
if (e) {
var o = e.getComponent(cc.Button);
o && (o.interactable = t);
}
};
var o;
t._instance = null;
r([ c(cc.Node) ], t.prototype, "btnNodeBlack", void 0);
r([ c(cc.Node) ], t.prototype, "btnNodeRed", void 0);
r([ c(cc.Node) ], t.prototype, "btnNodeSpade", void 0);
r([ c(cc.Node) ], t.prototype, "btnNodeClobe", void 0);
r([ c(cc.Node) ], t.prototype, "btnNodeDiamond", void 0);
r([ c(cc.Node) ], t.prototype, "btnNodeHeart", void 0);
r([ c(cc.Node) ], t.prototype, "btnNodeStraight", void 0);
r([ c(cc.Node) ], t.prototype, "btnNodePair", void 0);
r([ c(cc.Node) ], t.prototype, "btnNodeFlush", void 0);
return o = r([ s ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
HacHongCardSlide: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "93e1b+CFYZG5IovoSYHdGEI", "HacHongCardSlide");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = e("../HacHongController"), u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.skeletonBox = null;
t.skeletonBurn = null;
t.dragonTigerCardSlide = null;
return t;
}
o = t;
t.getInstance = function() {
return this._instance;
};
t.prototype.onLoad = function() {
o._instance = this;
this.dragonTigerCardSlide = this;
l.default.getInstance().dragonTigerCardSlide = this;
};
t.prototype.onDestroy = function() {
o._instance === this && (o._instance = null);
};
t.prototype.playBoxAnimation = function(e) {
e;
if (this.skeletonBox) {
this.skeletonBox.clearTracks();
this.skeletonBox.setAnimation(0, e, !1);
}
};
t.prototype.playBurnAnimation = function(e) {
var t = 0;
switch (e) {
case "down":
t = 0;
break;

case "empty":
t = 1;
break;

case "up1":
t = 2;
break;

case "up2":
t = 3;
break;

case "up3":
t = 4;
break;

case "up4":
t = 5;
break;

case "up5":
t = 6;
break;

case "up6":
t = 7;
break;

case "up7":
t = 8;
break;

case "up8":
t = 9;
break;

case "up9":
t = 10;
}
if (this.skeletonBurn) {
this.skeletonBurn.clearTracks();
this.skeletonBurn.setAnimation(t, e, !1);
}
};
t.prototype.burnStopAnimation = function() {
this.skeletonBurn && this.skeletonBurn.clearTracks();
};
var o;
t._instance = null;
r([ c(sp.Skeleton) ], t.prototype, "skeletonBox", void 0);
r([ c(sp.Skeleton) ], t.prototype, "skeletonBurn", void 0);
return o = r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../HacHongController": "HacHongController"
} ],
HacHongChatItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "333feeK235Id7i5HGrmqHzf", "HacHongChatItem");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.nodeUser = null;
t.lbSID = null;
t.lbName = null;
t.lbMessage = null;
t.rtAdmin = null;
return t;
}
t.prototype.updateItem = function(e, t) {
if (e.ad) {
this.rtAdmin.node.active = !0;
this.nodeUser.active = !1;
this.rtAdmin.string = this.formatChatUser(e);
} else {
this.nodeUser.active = !0;
this.rtAdmin.node.active = !1;
this.lbSID.string = cc.Config.getInstance().getServiceNameNoFormat(e.s);
this.lbName.string = e.n + ":";
this.lbMessage.string = e.c;
}
this.item = e;
this.itemID = t;
};
t.prototype.formatChatUser = function(e) {
var t = cc.Config.getInstance().getServiceName(e.s.toString());
return e.ad ? "<color=#ff6186>" + e.n + ": </color>" + e.c : t + "<color=#fadb32>" + e.n + ": </color>" + e.c;
};
r([ c(cc.Node) ], t.prototype, "nodeUser", void 0);
r([ c(cc.Label) ], t.prototype, "lbSID", void 0);
r([ c(cc.Label) ], t.prototype, "lbName", void 0);
r([ c(cc.Label) ], t.prototype, "lbMessage", void 0);
r([ c(cc.RichText) ], t.prototype, "rtAdmin", void 0);
return r([ s ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
HacHongChat: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a96e5pH13xB17EuNDyyqKeP", "HacHongChat");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("./HacHong.Chat.NetworkClient"), s = cc._decorator, c = s.ccclass, l = s.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.templateMessage = null;
t.templateMessageTip = null;
t.spriteFramesTip = [];
t.listChat = null;
t.NodeTip = null;
t.scrollListChat = null;
t.txtInputChat = null;
t.DealerName = null;
t.nameDealer = null;
t.itemData = [ {
iId: 1,
iN: "Bông hồng",
v: 1e3
}, {
iId: 2,
iN: "Đồng vàng",
v: 5e3
}, {
iId: 3,
iN: "Đôla",
v: 2e4
}, {
iId: 4,
iN: "Dây chuyền ngọc trai",
v: 1e5
}, {
iId: 5,
iN: "Tim ruby",
v: 5e5
}, {
iId: 6,
iN: "Kim cương",
v: 1e6
} ];
return t;
}
o = t;
t.prototype.onLoad = function() {
this.chatChanel = "HacHong";
};
t.prototype.touchSendChat = function() {
if (this.txtInputChat.string.length) {
a.default.instance.sendSignalR("SendMessage", [ this.txtInputChat.string, this.chatChanel ]);
this.txtInputChat.string = "";
}
};
t.prototype.touchShowChat = function() {
this.node.parent.active = !this.node.parent.active;
};
t.prototype.touchShowTip = function() {
var e = this;
if (this.NodeTip.active) this.NodeTip.active = !1; else {
this.NodeTip.active = !0;
setTimeout(function() {
e.NodeTip.active = !1;
}, 3e3);
}
};
t.prototype.touchSendTip = function(e, t) {
var o = this.itemData.find(function(e) {
return e.iId === parseInt(t);
});
o && a.default.instance.sendSignalR("SendTip", [ this.chatChanel, o.iId, o.iN, this.nameDealer ]);
};
t.prototype.listLastMessages = function(e) {
if (0 != e.length) {
this.listChat.removeAllChildren();
if (e) for (var t = 0; t < e.length; t++) {
var o = e[t], n = o.n, i = o.c;
if (void 0 !== n && void 0 !== i && "SYSTEM" != n && "SYSTEM" != i) {
if ("SYSTEM" != n && "SYSTEM" != i && n.length > 0 && i.length > 0) {
var r = i, a = cc.instantiate(this.templateMessage), s = o.n, c = n;
a.active = !0;
s = (s.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), c);
a.getComponent(cc.Label).string = s + ": " + r;
if (1 == e.IsVipTx) {
a.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
a.getChildByName("lb_nameVip").getComponent(cc.Label).string = s + ": ";
a.off(cc.Node.EventType.SIZE_CHANGED);
a.on(cc.Node.EventType.SIZE_CHANGED, function() {
var e = (a.getContentSize().height - a.getChildByName("lb_nameVip").getContentSize().height) / 2;
a.getChildByName("lb_nameVip").setPosition(cc.v2(0, e));
});
} else {
a.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
a.getChildByName("lb_name").getComponent(cc.Label).string = s + ": ";
a.off(cc.Node.EventType.SIZE_CHANGED);
a.on(cc.Node.EventType.SIZE_CHANGED, function() {
var e = (a.getContentSize().height - a.getChildByName("lb_name").getContentSize().height) / 2;
a.getChildByName("lb_name").setPosition(cc.v2(0, e));
});
}
this.listChat.addChild(a);
}
this.scrollListChat.scrollToTop();
}
}
}
};
t.prototype.receiveMessage = function(e) {
var t = e.n, o = e.c;
if (void 0 !== t && void 0 !== o) if ("SYSTEM" != t && "SYSTEM" != o) {
if (t.length > 0 && o.length > 0) {
var n = o, i = cc.instantiate(this.templateMessage), r = e.n, a = t;
i.active = !0;
r = (r.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), a);
i.getComponent(cc.Label).string = r + ": " + n;
if (1 == e.IsVipTx) {
i.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
i.getChildByName("lb_nameVip").getComponent(cc.Label).string = r + ": ";
i.off(cc.Node.EventType.SIZE_CHANGED);
i.on(cc.Node.EventType.SIZE_CHANGED, function() {
var e = (i.getContentSize().height - i.getChildByName("lb_nameVip").getContentSize().height) / 2;
i.getChildByName("lb_nameVip").setPosition(cc.v2(0, e));
});
} else {
i.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
i.getChildByName("lb_name").getComponent(cc.Label).string = r + ": ";
i.off(cc.Node.EventType.SIZE_CHANGED);
i.on(cc.Node.EventType.SIZE_CHANGED, function() {
var e = (i.getContentSize().height - i.getChildByName("lb_name").getContentSize().height) / 2;
i.getChildByName("lb_name").setPosition(cc.v2(0, e));
});
}
this.listChat.addChild(i);
this.scrollListChat.scrollToTop();
}
} else this.receiveMessageTip(JSON.parse(o));
};
t.prototype.receiveMessageTip = function(e) {
this.nameDealer = e.dealerName;
var t = cc.instantiate(this.templateMessageTip), o = e.giftId, n = "cho " + e.msg.split(" cho ")[1], i = e.user;
t.active = !0;
t.getChildByName("lb_name").getComponent(cc.Label).node.active = !0;
t.getChildByName("lb_name").getComponent(cc.Label).string = i;
t.getChildByName("lb_name").setPosition(cc.v2(0));
t.getChildByName("lb_msg1").getComponent(cc.Label).node.active = !0;
t.getChildByName("lb_msg1").getComponent(cc.Label).string = "đã tip";
t.getChildByName("lb_msg2").getComponent(cc.Label).node.active = !0;
t.getChildByName("lb_msg2").getComponent(cc.Label).string = n;
t.getChildByName("spriteTip").getComponent(cc.Sprite).node.active = !0;
t.getChildByName("spriteTip").getComponent(cc.Sprite).spriteFrame = this.spriteFramesTip[o - 1];
this.listChat.addChild(t);
this.scrollListChat.scrollToTop();
};
Object.defineProperty(t, "instance", {
get: function() {
o._instance || (o._instance = new o());
return o._instance;
},
enumerable: !1,
configurable: !0
});
t.prototype.onEnable = function() {
o._instance = this;
this.txtInputChat.node.on("editing-return", this.touchSendChat, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
};
t.prototype.onKeyDown = function(e) {
switch (e.keyCode) {
case cc.macro.KEY.enter:
this.txtInputChat.focus();
}
};
var o;
t._instance = null;
r([ l(cc.Node) ], t.prototype, "templateMessage", void 0);
r([ l(cc.Node) ], t.prototype, "templateMessageTip", void 0);
r([ l([ cc.SpriteFrame ]) ], t.prototype, "spriteFramesTip", void 0);
r([ l(cc.Node) ], t.prototype, "listChat", void 0);
r([ l(cc.Node) ], t.prototype, "NodeTip", void 0);
r([ l(cc.ScrollView) ], t.prototype, "scrollListChat", void 0);
r([ l(cc.EditBox) ], t.prototype, "txtInputChat", void 0);
r([ l(cc.Label) ], t.prototype, "DealerName", void 0);
return o = r([ c ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./HacHong.Chat.NetworkClient": "HacHong.Chat.NetworkClient"
} ],
HacHongConst: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "aa040UR6EdBbqsiLrLS7644", "HacHongConst");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.HacHongConst = void 0;
var n = function() {
function e() {}
e.formatNumber = function(e) {
return void 0 === e ? "0" : e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
e.formatDateTime = function(e) {
var t = (e = e.split("T"))[0].split("-");
return t[2] + "/" + t[1] + " - " + e[1].substr(0, 5);
};
e.formatDateTime2 = function(e) {
var t = (e = e.split("T"))[0], o = e[1].split(":"), n = o[0], i = o[1], r = parseInt(n, 10), a = r >= 12 ? "PM" : "AM";
return t + "\n" + (r = r % 12 || 12) + ":" + i + " " + a;
};
e.formatDateTime3 = function(e) {
var t = (e = e.split("T"))[1].split(":"), o = t[0], n = t[1], i = parseInt(o, 10), r = i >= 12 ? "PM" : "AM";
return (i = i % 12 || 12) + ":" + n + " " + r;
};
e.formatUserName = function(e) {
return e.length > 10 ? e.slice(0, 9) + "..." : e;
};
e.convertToMoney = function(e) {
var t = "", o = e < 0 ? 1 : 0;
t = (e = Math.abs(e)) >= 1e3 ? e.toFixed().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") : e.toString();
1 == o && (t = "-" + t);
return t;
};
e.formatNumberToKMB = function(e) {
var t = e < 0 ? "-" : "";
return (e = Math.abs(e)) >= 1e9 ? t + ((e /= 1e9) % 1 == 0 ? e.toFixed(0) : e.toFixed(1)) + "B" : e >= 1e6 ? t + ((e /= 1e6) % 1 == 0 ? e.toFixed(0) : e.toFixed(1)) + "M" : e >= 1e3 ? t + ((e /= 1e3) % 1 == 0 ? e.toFixed(0) : e.toFixed(1)) + "K" : t + e.toString();
};
e.formatNumberMin = function(e) {
if (e >= 1e9) {
e = Math.ceil(e / 1e3);
return this.formatNumber(e) + "B";
}
if (e >= 1e6) {
e = Math.ceil(e / 1e3);
return this.formatNumber(e) + "M";
}
if (e >= 1e3) {
e = Math.ceil(e / 1e3);
return this.formatNumber(e) + "K";
}
return this.formatNumber(e);
};
e.formatNumberString = function(e) {
if (e >= 1e9) {
e = Math.ceil(e / 1e9);
return this.formatNumber(e) + "Tỷ";
}
if (e >= 1e6) {
e = Math.ceil(e / 1);
return this.formatNumber(e) + "M";
}
if (e >= 1e3) {
e = Math.ceil(e / 1);
return this.formatNumber(e) + "K";
}
return this.formatNumber(e);
};
e.convertToK = function(e) {
var t = "", o = e < 0 ? 1 : 0;
t = (e = Math.abs(e)) >= 1e3 ? (e / 1e3).toFixed().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "K" : e.toString();
1 == o && (t = "-" + t);
return t;
};
e.cutStringWithEllipsis = function(e, t) {
return null == e ? "" : e.length > t ? e.substring(0, t) + "..." : e;
};
e.getUrl = function(e, t) {
var o = e, n = cc.loader.getXMLHttpRequest();
n.onreadystatechange = function() {
4 === n.readyState && (200 == n.status ? t(JSON.parse(n.responseText), n.status) : n.responseText.length > 0 ? t(n.responseText, n.status) : t("error_code : " + n.status, null));
};
n.ontimeout = function() {
t("Hệ thống không phản hồi.", null);
};
n.timeout = 3e4;
n.open("GET", o, !0);
n.setRequestHeader("Content-Type", "application/json");
n.withCredentials = !0;
n.send();
};
e.post = function(e, t, o) {
var n = cc.loader.getXMLHttpRequest();
n.timeout = 3e4;
n.open("POST", e);
n.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
var i = JSON.stringify(t);
n.onreadystatechange = function() {
if (4 == n.readyState) if (n.status >= 200 && n.status < 400) {
var e = n.responseText, t = JSON.parse(e);
o && o(n.status, t);
} else o && o(n.status, null);
};
n.send(i);
};
e.getImage = function(e, t) {
cc.assetManager.loadRemote(e, {
ext: ".png"
}, function(e, o) {
if (e) console.error("Lỗi rồi đại ca ơi: ", e); else {
var n = new cc.SpriteFrame(o);
t.spriteFrame = n;
}
});
};
e.loadImageFromUrl = function(e) {
return new Promise(function(t, o) {
var n = new XMLHttpRequest();
n.open("GET", e, !0);
n.responseType = "arraybuffer";
n.onload = function() {
if (200 === this.status) {
for (var e = this.response, n = new Uint8Array(e), i = "", r = 0; r < n.byteLength; r++) i += String.fromCharCode(n[r]);
var a = "data:image/png;base64," + window.btoa(i);
t(a);
} else o(new Error("Failed to load image. Status: " + this.status));
};
n.onerror = function() {
o(new Error("Failed to load image from URL"));
};
n.send();
});
};
e.setSpriteFromBase64 = function(e, t) {
var o = new Image();
o.src = e;
o.onload = function() {
var e = new cc.Texture2D();
e.initWithElement(o);
e.handleLoadedTexture();
var n = new cc.SpriteFrame(e);
t.spriteFrame = n;
};
};
e.HacHongState = {
BETTING: 0,
RESULT: 1,
PREPARE_NEW_SESSION: 2,
END_BETTING: 3
};
e.HacHongBetSide = {
Black: 1,
Red: 2,
Spade: 3,
Clobe: 4,
Diamond: 5,
Heart: 6,
Straight: 7,
Pair: 8,
Flush: 9
};
e.HacHongAudioTypes = cc.Enum({
BACKGROUND: "BACKGROUND",
BET: "BET",
CARD_SLIDE: "CARD_SLIDE",
CARD_SLIDE_BURN: "CARD_SLIDE_BURN",
CARD_SLIDE_RONG: "CARD_SLIDE_RONG",
CARD_SLIDE_HO: "CARD_SLIDE_HO",
CARD_OPEN: "CARD_OPEN",
CARD_BURN_MOVE_TO_BOX: "CARD_BURN_MOVE_TO_BOX",
SELECT_CHIP: "SELECT_CHIP",
GET_COIN: "GET_COIN"
});
e.api = (t = "https://hachong." + lngui.ConfigManager.instance.ConfigInfo.Api, {
negotiate: (o = function(e) {
return "" + t + e;
})("/signalr/negotiate"),
hub: "gamehub",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate,
GetBigWinner: o("/api/Game/GetBigWinner"),
AccountHistory: o("/api/Game/GetHistory"),
SoiCau: o("/api/Game/GetSoiCau"),
GroupUser: o("/api/Game/GetPlayersNotInGame"),
getSessionDetail: function(e) {
return o("/api/Game/GetSessionInfo?sessionId=" + e);
}
});
var t, o;
e.MethodHubOnName = {
JOIN_GAME: "joinGame",
RESULT_SPIN: "resultSpin",
RESULT_FREE_SPIN: "resultFreeSpin",
UPDATE_USER_BALANCE: "updateUserBalance",
RESULT_X2_GAME: "resultX2Game",
UPDATE_JACKPOT: "updateJackpot",
MESSAGE: "message",
BET_USER: "betUser",
REJOIN: "reJoin",
TOTAL_WIN_MONEY: "totalWinMoney",
SESSION_INFO: "sessionInfo",
GAME_HISTORY: "gameHistory",
BET_OF_ACCOUNT: "betOfAccount",
BET_SUCCESS: "betSuccess",
WIN_RESULT: "winResult",
CORD_ACCOUNT_INFO: "cordAccountInfo",
EVENT_WINNER_RESULT: "eventWinnerResult",
SUMMON_DRAGON_AWARD: "summonDragonAward",
PLAYER_LEAVE: "playerLeave",
UPDATE_CONNECTION_STATUS: "updateConnectionStatus",
PLAYER_JOIN: "playerJoin",
PLAYER_BET: "playerBet",
PLAYER_MESSAGE: "playerMessage",
OPEN_PLATE_NOW: "openPlateNow",
START_ACTION_TIMER: "startActionTimer",
UPDATE_PLAYER_STATUS: "updatePlayerStatus",
UPDATE_ROOM_TIME: "updateRoomTime",
BUY_MANUAL: "buyManual",
UPDATE_ACCOUNT: "updateAccount",
PLAYER_CHECK_AUTO: "playerCheckAuto",
NOTIFY_CHANGE_PHRASE: "notifyChangePhrase",
NOTIFY_START_ACTIONS: "notifyStartActions",
NOTIFY_FINISH_ACTIONS: "notifyFinishActions",
PLAYER_FLIP_CARDS: "playerFlipCards",
REFUND: "refund",
BET_SESSION: "betSession",
VIP_PLAYERS: "vipPlayers",
WIN_RESULT_VIP: "winResultVip",
SUMMARY_PLAYER: "summaryPlayer",
LIST_LAST_MESSAGES: "listLastMessages",
RECEIVE_MESSAGE: "receiveMessage",
SYSTEM_MESSAGE: "systemMessage",
OTHER_DEVICE: "otherDevice",
X_BOOM: "xBoom"
};
e.MethodHubName = {
ENTER_LOBBY: "EnterLobby",
EXIT_LOBBY: "ExitLobby",
PLAY_NOW: "PlayNow",
SPIN: "Spin",
FREE_SPIN: "FreeSpin",
PLAY_BONUS: "PlayBonusGame",
PLAY_X2_GAME: "PlayX2Game",
FINISH_X2_GAME: "FinishX2Game",
PLAY_TRY: "PlayTry",
SPIN_TRY: "SpinTry",
REGISTER_LEAVE_ROOM: "RegisterLeaveRoom",
UNREGISTER_LEAVE_ROOM: "UnregisterLeaveRoom",
CASH_OUT: "Cashout",
BET: "Bet",
CORD_INFO: "CordInfo",
REGISTER_CHAT: "RegisterChat",
UNREGISTER_CHAT: "UnregisterChat",
SEND_MESSAGE: "SendMessage",
PING_PONG: "PingPong"
};
e.ON_HacHong_SOCKET = "OnHacHongWebSocKet";
e.CHAT_HacHong_SOCKET_EVENT = "OnChatHacHongWebSocKet";
return e;
}();
o.HacHongConst = n;
cc._RF.pop();
}, {} ],
HacHongController: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "be279/lanpNhbPMtFIlnvcH", "HacHongController");
var n = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, r = i.ccclass, a = (i.property, function() {
function e() {
this.avatarDef = null;
this.avatars = null;
this.dragonTigerView = null;
this.dragonTigerResultView = null;
this.dragonTigerResultEffectView = null;
this.dragonTigerBetView = null;
this.dragonTigerSessionHistoryView = null;
this.dragonTigerEventView = null;
this.infoView = null;
this.positionUI = null;
this.betLog = [];
this.betLogSession = null;
this.currentState = null;
this.isNan = !1;
this.sessionId = null;
this.detailIndex = null;
this.gameHistory = null;
this.sID = null;
}
t = e;
e.getInstance = function() {
this._instance || (this._instance = new t());
return this._instance;
};
e.prototype.setAvatarDef = function(e) {
this.avatarDef = e;
};
e.prototype.getAvatarDef = function() {
return this.avatarDef;
};
e.prototype.setAvatars = function(e) {
this.avatars = e;
};
e.prototype.getAvatars = function() {
return this.avatars;
};
e.prototype.setDragonTigerView = function(e) {
this.dragonTigerView = e;
};
e.prototype.setDragonTigerResultView = function(e) {
this.dragonTigerResultView = e;
};
e.prototype.setDragonTigerResultEffectView = function(e) {
this.dragonTigerResultEffectView = e;
};
e.prototype.setDragonTigerBetView = function(e) {
this.dragonTigerBetView = e;
};
e.prototype.setDragonTigerSessionHistoryView = function(e) {
this.dragonTigerSessionHistoryView = e;
};
e.prototype.setDragonTigerEventView = function(e) {
this.dragonTigerEventView = e;
};
e.prototype.updateGameHistoryUI = function(e) {
var t;
null === (t = this.dragonTigerSessionHistoryView) || void 0 === t || t.updateGameHistoryUI(e);
};
e.prototype.reset = function() {
var e, t, o;
try {
null === (e = this.dragonTigerView) || void 0 === e || e.reset();
null === (t = this.dragonTigerBetView) || void 0 === t || t.reset();
null === (o = this.dragonTigerResultEffectView) || void 0 === o || o.reset();
} catch (e) {
cc.error(e);
}
};
e.prototype.stopResultEffect = function() {
var e;
null === (e = this.dragonTigerResultEffectView) || void 0 === e || e.stopEffect();
};
e.prototype.resetBetAndResultInfo = function() {
var e, t, o;
null === (e = this.dragonTigerResultEffectView) || void 0 === e || e.reset();
null === (t = this.dragonTigerResultView) || void 0 === t || t.reset();
null === (o = this.dragonTigerBetView) || void 0 === o || o.reset();
};
e.prototype.resetBetInfo = function() {
var e;
null === (e = this.dragonTigerBetView) || void 0 === e || e.reset();
};
e.prototype.disableBetAgain = function(e) {
var t;
null === (t = this.dragonTigerBetView) || void 0 === t || t.disableBetAgain(e);
};
e.prototype.sendRequestOnHub = function(e, t, o) {
var n;
return null === (n = this.dragonTigerView) || void 0 === n ? void 0 : n.sendRequestOnHub(e, t, o);
};
e.prototype.updateBetInfoFromServer = function(e) {
var t;
return null === (t = this.dragonTigerBetView) || void 0 === t ? void 0 : t.updateBetInfoFromServer(e);
};
e.prototype.updateTotalBetValue = function(e, t) {
var o;
return null === (o = this.dragonTigerBetView) || void 0 === o ? void 0 : o.updateTotalBetValue(e, t);
};
e.prototype.updateSessionHistory = function(e) {
var t;
null === (t = this.dragonTigerSessionHistoryView) || void 0 === t || t.updateSessionHistory(e);
};
e.prototype.playEffectWin = function(e) {
var t;
null === (t = this.dragonTigerResultEffectView) || void 0 === t || t.playEffectWin(e);
};
e.prototype.updateBetInfoView = function(e) {
var t;
null === (t = this.dragonTigerBetView) || void 0 === t || t.updateBetInfo(e);
};
e.prototype.getBetSide = function() {
var e;
return null === (e = this.dragonTigerBetView) || void 0 === e ? void 0 : e.getBetSide();
};
e.prototype.setInfoView = function(e) {
this.infoView = e;
};
e.prototype.playerShowBubbleChat = function(e) {
var t;
return null === (t = this.infoView) || void 0 === t ? void 0 : t.playerShowBubbleChat(e);
};
e.prototype.updatePlayerInfor = function(e) {
var t;
return null === (t = this.infoView) || void 0 === t ? void 0 : t.updatePlayerInfor(e);
};
e.prototype.winResult = function(e) {
var t;
return null === (t = this.infoView) || void 0 === t ? void 0 : t.winResult(e);
};
e.prototype.winResultVip = function(e) {
var t;
return null === (t = this.infoView) || void 0 === t ? void 0 : t.winResultVip(e);
};
e.prototype.updateBalanceCurrPlayer = function(e) {
var t;
return null === (t = this.infoView) || void 0 === t ? void 0 : t.updateBalanceCurrPlayer(e);
};
e.prototype.updatePlayerBalance = function(e) {
var t;
return null === (t = this.infoView) || void 0 === t ? void 0 : t.updatePlayerBalance(e);
};
e.prototype.unRegisterAllPlayer = function() {
var e;
return null === (e = this.infoView) || void 0 === e ? void 0 : e.unRegisterAllPlayer();
};
e.prototype.updatePlayersUI = function(e) {
var t;
return null === (t = this.infoView) || void 0 === t ? void 0 : t.updatePlayersUI(e);
};
e.prototype.resetPlayerUI = function() {
var e;
return null === (e = this.infoView) || void 0 === e ? void 0 : e.resetPlayerUI();
};
e.prototype.setPositionUI = function(e) {
this.positionUI = e;
};
e.prototype.getPositionUI = function() {
return this.positionUI;
};
e.prototype.setWinResult = function(e) {
this.positionUI = e;
};
e.prototype.getWinResult = function() {
return this.positionUI;
};
e.prototype.updateResultView = function(e) {
var t;
return null === (t = this.dragonTigerResultView) || void 0 === t ? void 0 : t.updateResult(e);
};
e.prototype.clearBetLog = function(e) {
this.betLog = this.betLog.filter(function(t) {
return t.sessionID > e - 1;
});
};
e.prototype.getBetLogBySessionID = function(e) {
return this.betLog.filter(function(t) {
return t.sessionID == e - 1;
});
};
e.prototype.setBetLog = function(e) {
this.betLog.push(e);
};
e.prototype.getBetLog = function() {
return this.betLog;
};
e.prototype.initBetLog = function() {
this.betLog = [];
};
e.prototype.setBetLogSession = function(e) {
this.betLogSession = e;
};
e.prototype.getBetLogSession = function() {
return this.betLogSession;
};
e.prototype.setCurrentState = function(e) {
this.currentState = e;
};
e.prototype.getCurrentState = function() {
return this.currentState;
};
e.prototype.setIsNan = function(e) {
this.isNan = e;
};
e.prototype.getIsNan = function() {
return this.isNan;
};
e.prototype.getSessionId = function() {
return this.sessionId;
};
e.prototype.setDetailIndex = function(e) {
this.detailIndex = e;
};
e.prototype.getDetailIndex = function() {
return this.detailIndex;
};
e.prototype.setGameHistory = function(e) {
this.gameHistory = e;
};
e.prototype.getGameHistory = function() {
return this.gameHistory;
};
e.prototype.setSID = function(e) {
this.sID = e;
};
e.prototype.getSID = function() {
return this.sID;
};
var t;
e._instance = null;
return t = n([ r ], e);
}());
o.default = a;
cc._RF.pop();
}, {} ],
HacHongGetBigWinnerCommand: [ function(e, t) {
"use strict";
cc._RF.push(t, "c882eViQC5DVrdZTJkKqrrX", "HacHongGetBigWinnerCommand");
var o;
o = function() {
function e() {}
e.prototype.execute = function(e) {
return cc.ServerConnector.getInstance().sendRequest(cc.SubdomainName.DRAGON_TIGER, "api/Game/GetBigWinner", function(t) {
var o = JSON.parse(t);
return e.onDragonTigerGetBigWinnerResponse(o);
});
};
return e;
}();
cc.HacHongGetBigWinnerCommand_789 = o;
cc._RF.pop();
}, {} ],
HacHongGetHistoryCommand: [ function(e, t) {
"use strict";
cc._RF.push(t, "67b08M+M7hIDJuI2mUhkxBh", "HacHongGetHistoryCommand");
var o;
o = function() {
function e() {}
e.prototype.execute = function(e) {
return cc.ServerConnector.getInstance().sendRequest(cc.SubdomainName.DRAGON_TIGER, "api/Game/GetHistory", function(t) {
var o = JSON.parse(t);
return e.onDragonTigerGetHistoryResponse(o);
});
};
return e;
}();
cc.HacHongGetHistoryCommand_789 = o;
cc._RF.pop();
}, {} ],
HacHongGetSessionInfoCommand: [ function(e, t) {
"use strict";
cc._RF.push(t, "f778097oMlHtoLWGMqHTX7u", "HacHongGetSessionInfoCommand");
var o;
o = function() {
function e() {}
e.prototype.execute = function(e, t) {
var o = "api/Game/GetSessionInfo?sessionId=" + t;
return cc.ServerConnector.getInstance().sendRequest(cc.SubdomainName.DRAGON_TIGER, o, function(t) {
var o = JSON.parse(t);
return e.onDragonTigerGetSessionInfoResponse(o);
});
};
return e;
}();
cc.DragonTigerGetSessionInfoCommand_789 = o;
cc._RF.pop();
}, {} ],
HacHongGetSoiCauCommand: [ function(e, t) {
"use strict";
cc._RF.push(t, "b592bvDXgRMOJFHW/6kGiWP", "HacHongGetSoiCauCommand");
var o;
o = function() {
function e() {}
e.prototype.execute = function(e) {
return cc.ServerConnector.getInstance().sendRequest(cc.SubdomainName.DRAGON_TIGER, "api/Game/GetSoiCau", function(t) {
var o = JSON.parse(t);
return e.onDragonTigerGetSoiCauResponse(o);
});
};
return e;
}();
cc.HacHongGetSoiCauCommand_789 = o;
cc._RF.pop();
}, {} ],
HacHongGraph100View: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e20a07sIWZID4zyc7DXE2HI", "HacHongGraph100View");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = e("../../HacHongConst"), u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.nodeParent = null;
t.nodeRongTemp = null;
t.nodeHoaTemp = null;
t.nodeHoTemp = null;
t.nodeParent2 = null;
t.nodeRongTemp2 = null;
t.nodeHoaTemp2 = null;
t.nodeHoTemp2 = null;
return t;
}
t.prototype.onLoad = function() {
this.resetDraw();
};
t.prototype.draw = function(e) {
if (!e) return {
rong: 0,
hoa: 0,
ho: 0
};
for (var t = 0, o = 0, n = 0, i = 0; i < e.length && 45 !== i; i++) switch (e[i].Result) {
case l.HacHongConst.HacHongBetSide.RONG:
t++;
this.createNode(this.nodeRongTemp, this.nodeRongTemp2);
break;

case l.HacHongConst.HacHongBetSide.HOA:
o++;
this.createNode(this.nodeHoaTemp, this.nodeHoaTemp2);
break;

case l.HacHongConst.HacHongBetSide.HO:
n++;
this.createNode(this.nodeHoTemp, this.nodeHoTemp2);
}
return {
rong: t,
hoa: o,
ho: n
};
};
t.prototype.createNode = function(e, t) {
if (e && t && this.nodeParent && this.nodeParent2) {
var o = cc.instantiate(e), n = cc.instantiate(t);
o.parent = this.nodeParent;
n.parent = this.nodeParent2;
}
};
t.prototype.resetDraw = function() {
if (this.nodeParent) for (var e = this.nodeParent.children, t = e.length - 1; t >= 0; t--) this.nodeParent.removeChild(e[t]);
if (this.nodeParent2) {
var o = this.nodeParent2.children;
for (t = o.length - 1; t >= 0; t--) this.nodeParent2.removeChild(o[t]);
}
};
r([ c(cc.Node) ], t.prototype, "nodeParent", void 0);
r([ c(cc.Node) ], t.prototype, "nodeRongTemp", void 0);
r([ c(cc.Node) ], t.prototype, "nodeHoaTemp", void 0);
r([ c(cc.Node) ], t.prototype, "nodeHoTemp", void 0);
r([ c(cc.Node) ], t.prototype, "nodeParent2", void 0);
r([ c(cc.Node) ], t.prototype, "nodeRongTemp2", void 0);
r([ c(cc.Node) ], t.prototype, "nodeHoaTemp2", void 0);
r([ c(cc.Node) ], t.prototype, "nodeHoTemp2", void 0);
return r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../HacHongConst": "HacHongConst"
} ],
HacHongGraphCard3View: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "470a9Bt4CxGtIFLIqizB3KS", "HacHongGraphCard3View");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = e("../../HacHongConst"), u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.nodeGraphics1 = null;
t.nodeGraphics2 = null;
t.nodeGraphics3 = null;
t.toggleRong = null;
t.toggleHo = null;
t.colorRong = null;
t.colorHo = null;
t.colorHoa = null;
t.lbSessionID = null;
t.lbResult = null;
t.rootPosX = -42;
t.rootPosY = -240;
t.spaceX = 40;
t.spaceY = 40;
t.listPosY = [];
t.maxItemPerCol = 5;
t.minSum = 1;
t.maxSum = 13;
t.circleRadian = 12;
t.drawing1 = null;
t.drawing3 = null;
t.cacheList = [];
t.drawPoints = [];
return t;
}
t.prototype.onLoad = function() {
this.rootPosX = -42;
this.rootPosY = -240;
this.spaceX = 40;
this.spaceY = 40;
this.listPosY = [];
for (var e = 0; e <= 12; e++) {
var t = this.rootPosY + e * this.spaceY;
this.listPosY.push(t);
}
console.log(this.listPosY);
this.maxItemPerCol = 5;
this.minSum = 1;
this.maxSum = 13;
this.circleRadian = 12;
if (this.nodeGraphics1) {
this.drawing1 = this.nodeGraphics1.getComponent(cc.Graphics);
if (this.drawing1) {
this.drawing1.lineWidth = 2;
this.drawing1.strokeColor = this.colorRong;
this.drawing1.fillColor = this.colorRong;
}
}
if (this.nodeGraphics3) {
this.drawing3 = this.nodeGraphics3.getComponent(cc.Graphics);
if (this.drawing3) {
this.drawing3.lineWidth = 2;
this.drawing3.strokeColor = this.colorHo;
this.drawing3.fillColor = this.colorHo;
}
}
};
t.prototype.draw = function(e) {
if (e && 0 !== e.length) {
var t = e[0], o = "";
switch (t.Result) {
case l.HacHongConst.HacHongBetSide.RONG:
o = "RỒNG";
this.lbResult && this.lbResult.node && (this.lbResult.node.color = cc.Color.WHITE);
break;

case l.HacHongConst.HacHongBetSide.HOA:
o = "HÒA";
this.lbResult && this.lbResult.node && (this.lbResult.node.color = cc.Color.CYAN);
break;

case l.HacHongConst.HacHongBetSide.HO:
o = "HỔ";
this.lbResult && this.lbResult.node && (this.lbResult.node.color = cc.Color.RED);
}
this.lbSessionID && (this.lbSessionID.string = "Phiên gần nhất (#" + t.SessionID + ")");
this.lbResult && (this.lbResult.string = o);
this.cacheList = e;
this.drawRong(e);
this.drawHo(e);
}
};
t.prototype.drawRong = function(e) {
if (this.drawing1 && e) {
var t = this;
t.drawPoints = [];
var o = 0;
e.forEach(function(e) {
t.createNode(t.drawing1, e, o, l.HacHongConst.HacHongBetSide.RONG);
o++;
});
this.strokeLine(t.drawing1);
}
};
t.prototype.drawHo = function(e) {
if (this.drawing3 && e) {
var t = this;
t.drawPoints = [];
var o = 0;
e.forEach(function(e) {
t.createNode(t.drawing3, e, o, l.HacHongConst.HacHongBetSide.HO);
o++;
});
t.strokeLine(t.drawing3);
}
};
t.prototype.createNode = function(e, t, o, n) {
if (e && t) {
var i = this.rootPosX - o * this.spaceX, r = this.colorRong, a = t.DragonCard;
if (n == l.HacHongConst.HacHongBetSide.HO) {
a = t.TigerCard;
r = this.colorHo;
}
t.Result == l.HacHongConst.HacHongBetSide.HOA && (r = this.colorHoa);
var s = parseInt(a) % 13;
s = 0 == s ? 13 : s;
var c = this.listPosY[s - 1];
this.drawPoints.push([ cc.v2(i, c), r ]);
}
};
t.prototype.strokeLine = function(e) {
if (e && 0 !== this.drawPoints.length) {
var t = this;
this.drawPoints.forEach(function(o) {
var n = o[0], i = o[1];
e.lineTo(n.x, n.y);
e.stroke();
e.moveTo(n.x, n.y);
e.circle(n.x, n.y, t.circleRadian);
e.fillColor = i;
e.strokeColor = i;
e.fill();
});
}
};
t.prototype.resetDraw = function() {
this.drawing1 && this.drawing1.clear();
this.drawing3 && this.drawing3.clear();
};
t.prototype.toggleDrawClicked = function() {};
t.prototype.toggleDrawRongClicked = function() {
this.toggleRong && this.drawing1 && (this.toggleRong.isChecked ? this.cacheList && this.cacheList.length > 0 && this.drawRong(this.cacheList) : this.drawing1.clear());
};
t.prototype.toggleDrawHoClicked = function() {
this.toggleHo && this.drawing3 && (this.toggleHo.isChecked ? this.cacheList && this.cacheList.length > 0 && this.drawHo(this.cacheList) : this.drawing3.clear());
};
r([ c(cc.Node) ], t.prototype, "nodeGraphics1", void 0);
r([ c(cc.Node) ], t.prototype, "nodeGraphics2", void 0);
r([ c(cc.Node) ], t.prototype, "nodeGraphics3", void 0);
r([ c(cc.Toggle) ], t.prototype, "toggleRong", void 0);
r([ c(cc.Toggle) ], t.prototype, "toggleHo", void 0);
r([ c(cc.Color) ], t.prototype, "colorRong", void 0);
r([ c(cc.Color) ], t.prototype, "colorHo", void 0);
r([ c(cc.Color) ], t.prototype, "colorHoa", void 0);
r([ c(cc.Label) ], t.prototype, "lbSessionID", void 0);
r([ c(cc.Label) ], t.prototype, "lbResult", void 0);
return r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../HacHongConst": "HacHongConst"
} ],
HacHongGraphCatCauView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fced2YhsVdA86xgbc/wkeDp", "HacHongGraphCatCauView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.nodeParent = null;
t.nodeRongTemp = null;
t.nodeHoaTemp = null;
t.nodeHoTemp = null;
return t;
}
t.prototype.onLoad = function() {
this.rootPosX = -21;
this.rootPosY = -100;
this.spaceX = 40;
this.spaceY = 40;
this.maxItemPerCol = 6;
};
t.prototype.convertToMatrix = function(e) {
var t = this, o = e[0].Result, n = [], i = [];
e.forEach(function(e) {
if (i.length === t.maxItemPerCol) {
n.push(i);
(i = []).push(e);
o = e.Result;
} else if (e.Result === o) i.push(e); else {
n.push(i);
i = [];
o = e.Result;
i.push(e);
}
});
n.push(i);
return n;
};
t.prototype.draw = function(e) {
for (var t = this.convertToMatrix(e), o = 0; o < t.length; o++) this.drawCol(t[o], o);
this.nodeParent.width = Math.max(40 * t.length, 242);
};
t.prototype.drawCol = function(e, t) {
for (var o = this.rootPosX - t * this.spaceX, n = (this.maxItemPerCol - e.length) * this.spaceY + this.rootPosY, i = 0; i < e.length; i++) this.createNode(e[i], cc.v2(o, n + this.spaceY * i));
};
t.prototype.createNode = function(e, t) {
switch (e.Result) {
case cc.HacHongBetSide_789.RONG:
var o = cc.instantiate(this.nodeRongTemp);
break;

case cc.HacHongBetSide_789.HOA:
o = cc.instantiate(this.nodeHoaTemp);
break;

case cc.HacHongBetSide_789.HO:
o = cc.instantiate(this.nodeHoTemp);
}
if (o) {
o.parent = this.nodeParent;
o.position = t;
}
};
t.prototype.resetDraw = function() {
for (var e = this.nodeParent.children, t = e.length - 1; t >= 0; t--) this.nodeParent.removeChild(e[t]);
};
r([ c(cc.Node) ], t.prototype, "nodeParent", void 0);
r([ c(cc.Node) ], t.prototype, "nodeRongTemp", void 0);
r([ c(cc.Node) ], t.prototype, "nodeHoaTemp", void 0);
r([ c(cc.Node) ], t.prototype, "nodeHoTemp", void 0);
return r([ s ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
HacHongGraphSumView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "48671xdLTtOVoDWBIdehuOw", "HacHongGraphSumView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = e("../../HacHongConst"), u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.nodeGraphics = null;
t.nodeParent = null;
t.nodeTaiTemp = null;
t.nodeXiuTemp = null;
t.toggleDiceSum = null;
t.lbSessionID = null;
t.lbResult = null;
t.rootPosX = -22;
t.rootPosY = -81;
t.spaceX = 40;
t.spaceY = 40;
t.maxItemPerCol = 5;
t.minSum = 3;
t.maxSum = 18;
t.spacePoint = 0;
t.drawing = null;
t.cacheList = [];
t.drawPoints = [];
return t;
}
t.prototype.onLoad = function() {
this.rootPosX = -22;
this.rootPosY = -81;
this.spaceX = 40;
this.spaceY = 40;
this.maxItemPerCol = 5;
this.minSum = 3;
this.maxSum = 18;
this.spacePoint = this.spaceY * this.maxItemPerCol / (this.maxSum - this.minSum);
if (this.nodeGraphics) {
this.drawing = this.nodeGraphics.getComponent(cc.Graphics);
if (this.drawing) {
this.drawing.lineWidth = 2;
this.drawing.strokeColor = cc.Color.WHITE;
}
}
};
t.prototype.draw = function(e) {
if (e && 0 !== e.length && this.drawing) {
var t = e[0];
switch (t.Result) {
case l.HacHongConst.HacHongBetSide.RONG:
case l.HacHongConst.HacHongBetSide.HOA:
break;

case l.HacHongConst.HacHongBetSide.HO:
}
this.lbSessionID && (this.lbSessionID.string = "Phiên gần nhất (#" + t.SessionId + ") - ");
this.cacheList = e;
this.drawPoints = [];
var o = this, n = 0;
e.forEach(function(e) {
o.createNode(e, n);
n++;
});
this.strokeLine();
}
};
t.prototype.createNode = function(e, t) {
var o;
if (e && this.nodeParent && this.drawing) {
var n, i = this.rootPosX - t * this.spaceX, r = this.rootPosY + (e.DiceSum - this.minSum) * this.spacePoint;
0 === t && this.drawing.moveTo(i, r);
var a = (null === (o = cc.HacHongBetSide_789) || void 0 === o ? void 0 : o.TAI) || 1;
if (n = e.BetSide === a ? cc.instantiate(this.nodeTaiTemp) : cc.instantiate(this.nodeXiuTemp)) {
n.parent = this.nodeParent;
n.position = cc.v3(i, r, 0);
this.drawPoints.push(cc.v2(i, r));
}
}
};
t.prototype.strokeLine = function() {
if (this.drawing && 0 !== this.drawPoints.length) {
var e = this;
this.drawPoints.forEach(function(t) {
e.drawing.lineTo(t.x, t.y);
e.drawing.stroke();
e.drawing.moveTo(t.x, t.y);
});
}
};
t.prototype.resetDraw = function() {
if (this.nodeParent) for (var e = this.nodeParent.children, t = e.length - 1; t >= 0; t--) this.nodeParent.removeChild(e[t]);
this.drawing && this.drawing.clear();
};
t.prototype.toggleDrawDiceSumClicked = function() {
this.toggleDiceSum && (this.toggleDiceSum.isChecked ? this.cacheList && this.cacheList.length > 0 && this.draw(this.cacheList) : this.resetDraw());
};
r([ c(cc.Node) ], t.prototype, "nodeGraphics", void 0);
r([ c(cc.Node) ], t.prototype, "nodeParent", void 0);
r([ c(cc.Node) ], t.prototype, "nodeTaiTemp", void 0);
r([ c(cc.Node) ], t.prototype, "nodeXiuTemp", void 0);
r([ c(cc.Toggle) ], t.prototype, "toggleDiceSum", void 0);
r([ c(cc.Label) ], t.prototype, "lbSessionID", void 0);
r([ c(cc.Label) ], t.prototype, "lbResult", void 0);
return r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../HacHongConst": "HacHongConst"
} ],
HacHongGraphView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fdbc3PnWm1IQZjmf8gjAMLx", "HacHongGraphView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = e("./HacHongGraph100View"), u = e("./HacHongGraphCatCauView"), p = e("./HacHongGraphSumView"), d = e("./HacHongGraphCard3View"), h = e("../../HacHongConst"), f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.dragonTigerGraph100View = null;
t.dragonTigerGraphCatCauView = null;
t.dragonTigerGraphCardSumView = null;
t.dragonTigerGraphCard3View = null;
t.pageView = null;
t.btnNext = null;
t.btnBack = null;
t.lbTotalRong = null;
t.lbTotalHoa = null;
t.lbTotalHo = null;
t.lbPercentRong = null;
t.lbPercentHo = null;
t.animation = null;
t.timeSwitchPage = .3;
t.totalPages = 2;
t.currentPageIndex = 0;
return t;
}
t.prototype.onLoad = function() {
this.animation = this.node.getComponent(cc.Animation);
this.timeSwitchPage = .3;
this.totalPages = 2;
this.pageView && (this.currentPageIndex = this.pageView.getCurrentPageIndex());
this.checkStatusButton();
this.getSoiCau();
};
t.prototype.getSoiCau = function() {
var e = this, t = h.HacHongConst.api.SoiCau;
lngui.Https.get(t, function(t) {
t && e.onDragonTigerGetSoiCauResponse(t);
});
};
t.prototype.onDragonTigerGetSoiCauResponse = function(e) {
if (this.dragonTigerGraph100View && e) {
var t = this.dragonTigerGraph100View.draw(e), o = t.rong + t.hoa + t.ho;
this.lbTotalRong && (this.lbTotalRong.string = t.rong.toString());
this.lbTotalHoa && (this.lbTotalHoa.string = t.hoa.toString());
this.lbTotalHo && (this.lbTotalHo.string = t.ho.toString());
if (o > 0) {
this.lbPercentHo && (this.lbPercentHo.string = Math.round(t.ho / o * 100) + "%");
this.lbPercentRong && (this.lbPercentRong.string = Math.round(t.rong / o * 100) + "%");
}
this.dragonTigerGraphCatCauView && this.dragonTigerGraphCatCauView.draw(e);
}
};
t.prototype.pageEvent = function() {
this.checkStatusButton();
};
t.prototype.onDestroy = function() {
this.dragonTigerGraph100View && this.dragonTigerGraph100View.resetDraw();
this.dragonTigerGraphCatCauView && this.dragonTigerGraphCatCauView.resetDraw();
this.dragonTigerGraphCardSumView && this.dragonTigerGraphCardSumView.resetDraw();
this.dragonTigerGraphCard3View && this.dragonTigerGraphCard3View.resetDraw();
};
t.prototype.nextPageClicked = function() {
if (this.pageView) {
this.currentPageIndex++;
this.pageView.scrollToPage(this.currentPageIndex, this.timeSwitchPage);
this.checkStatusButton();
}
};
t.prototype.backPageClicked = function() {
if (this.pageView) {
this.currentPageIndex--;
this.pageView.scrollToPage(this.currentPageIndex, this.timeSwitchPage);
this.checkStatusButton();
}
};
t.prototype.checkStatusButton = function() {
if (this.pageView) {
this.currentPageIndex = this.pageView.getCurrentPageIndex();
this.btnNext && (this.btnNext.interactable = this.currentPageIndex < this.totalPages - 1);
this.btnBack && (this.btnBack.interactable = this.currentPageIndex > 0);
}
};
r([ c(l.default) ], t.prototype, "dragonTigerGraph100View", void 0);
r([ c(u.default) ], t.prototype, "dragonTigerGraphCatCauView", void 0);
r([ c(p.default) ], t.prototype, "dragonTigerGraphCardSumView", void 0);
r([ c(d.default) ], t.prototype, "dragonTigerGraphCard3View", void 0);
r([ c(cc.PageView) ], t.prototype, "pageView", void 0);
r([ c(cc.Button) ], t.prototype, "btnNext", void 0);
r([ c(cc.Button) ], t.prototype, "btnBack", void 0);
r([ c(cc.Label) ], t.prototype, "lbTotalRong", void 0);
r([ c(cc.Label) ], t.prototype, "lbTotalHoa", void 0);
r([ c(cc.Label) ], t.prototype, "lbTotalHo", void 0);
r([ c(cc.Label) ], t.prototype, "lbPercentRong", void 0);
r([ c(cc.Label) ], t.prototype, "lbPercentHo", void 0);
return r([ s ], t);
}(lngui.UIPopup);
o.default = f;
cc._RF.pop();
}, {
"../../HacHongConst": "HacHongConst",
"./HacHongGraph100View": "HacHongGraph100View",
"./HacHongGraphCard3View": "HacHongGraphCard3View",
"./HacHongGraphCatCauView": "HacHongGraphCatCauView",
"./HacHongGraphSumView": "HacHongGraphSumView"
} ],
HacHongGroupItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "05151pnlsxAFbme3LuEdtJf", "HacHongGroupItem");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = e("../HacHongController"), u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.avatar = null;
t.lbNickName = null;
t.lbBalance = null;
t.item = null;
t.itemID = 0;
return t;
}
t.prototype.updateItem = function(e, t) {
var o, n, i = e.Account, r = i.Avatar;
(r <= 0 || r > 15) && (r = Math.floor(15 * Math.random()) + 1);
var a = l.default.getInstance().getAvatars();
this.avatar && a && a[r - 1] && this.avatar.setAvatar(a[r - 1]);
this.lbNickName && (this.lbNickName.string = i.NickName || "");
if (this.lbBalance) {
var s = null === (o = cc.Tool) || void 0 === o ? void 0 : o.getInstance();
s && s.formatNumber ? this.lbBalance.string = s.formatNumber(i.Balance) : this.lbBalance.string = (null === (n = i.Balance) || void 0 === n ? void 0 : n.toString()) || "0";
}
this.item = e;
this.itemID = t;
};
r([ c(cc.Avatar) ], t.prototype, "avatar", void 0);
r([ c(cc.Label) ], t.prototype, "lbNickName", void 0);
r([ c(cc.Label) ], t.prototype, "lbBalance", void 0);
return r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../HacHongController": "HacHongController"
} ],
HacHongGroupUserCommand: [ function(e, t) {
"use strict";
cc._RF.push(t, "f7c5bb5KQxPf5d3+uCEl3/a", "HacHongGroupUserCommand");
var o;
o = function() {
function e() {}
e.prototype.execute = function(e) {
var t = cc.SubdomainName.DRAGON_TIGER;
return cc.ServerConnector.getInstance().sendRequest(t, "api/Game/GetPlayersNotInGame", function(t) {
var o = JSON.parse(t);
return e.onGetGroupUserResponse(o);
});
};
return e;
}();
cc.HacHongGroupUserCommand_789 = o;
cc._RF.pop();
}, {} ],
HacHongGroupUserListView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "05bbfkO4RpB3ryfg/I2OVO0", "HacHongGroupUserListView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = e("./HacHongGroupItem"), u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.itemTemplate = null;
t.scrollView = null;
t.spawnCount = 0;
t.spacing = 0;
t.items = [];
t.content = null;
t.rootContentY = 0;
t.messages = [];
t.updateTimer = 0;
t.updateInterval = .1;
t.bufferZone = 200;
t.lastContentPosY = 0;
return t;
}
t.prototype.onLoad = function() {
this.items = [];
this.updateTimer = 0;
this.lastContentPosY = 0;
if (this.scrollView) {
this.content = this.scrollView.content;
this.rootContentY = this.content ? this.content.y : 0;
}
};
t.prototype.resetList = function() {
if (this.scrollView) {
this.items = [];
this.scrollView.stopAutoScroll();
if (this.content) {
this.content.y = this.rootContentY;
for (var e = this.content.children.slice(), t = e.length - 1; t >= 0; t--) e[t] && this.content.removeChild(e[t]);
}
}
};
t.prototype.getPositionInView = function(e) {
if (!e || !this.scrollView) return cc.v3(0, 0, 0);
var t = e.parent.convertToWorldSpaceAR(e.position);
return this.scrollView.node.convertToNodeSpaceAR(t);
};
t.prototype.initialize = function(e) {
if (e && Array.isArray(e) && 0 !== e.length && this.scrollView && this.itemTemplate && this.content) {
this.messages = e;
var t = this.messages.length, o = this.itemTemplate.height || 100;
this.content.height = t * (o + this.spacing) + this.spacing;
for (var n = Math.min(this.spawnCount, t), i = 0; i < n; ++i) {
var r = cc.instantiate(this.itemTemplate);
if (r) {
this.content.addChild(r);
r.setPosition(0, -o * (.5 + i) - this.spacing * (i + 1));
var a = r.getComponent(l.default);
a && this.messages[i] && a.updateItem(this.messages[i], i);
this.items.push(r);
}
}
this.rootContentY = this.content.y;
this.lastContentPosY = this.content.y;
}
};
t.prototype.update = function(e) {
if (this.scrollView && this.content && 0 !== this.items.length) {
this.updateTimer += e;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var t = this.items, o = this.bufferZone, n = this.scrollView.content.y < this.lastContentPosY, i = ((this.itemTemplate.height || 100) + this.spacing) * t.length, r = 0; r < t.length; ++r) if (t[r]) {
var a = this.getPositionInView(t[r]);
if (n) {
if (a.y < -o && t[r].y + i < 0) {
t[r].y = t[r].y + i;
if (c = t[r].getComponent(l.default)) {
var s = c.itemID - t.length;
void 0 !== this.messages[s] && s >= 0 && c.updateItem(this.messages[s], s);
}
}
} else if (a.y > o && t[r].y - i > -this.content.height) {
t[r].y = t[r].y - i;
var c;
if (c = t[r].getComponent(l.default)) {
s = c.itemID + t.length;
void 0 !== this.messages[s] && s < this.messages.length && c.updateItem(this.messages[s], s);
}
}
}
this.lastContentPosY = this.scrollView.content.y;
}
}
};
r([ c(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ c(cc.ScrollView) ], t.prototype, "scrollView", void 0);
r([ c ], t.prototype, "spawnCount", void 0);
r([ c ], t.prototype, "spacing", void 0);
r([ c ], t.prototype, "updateInterval", void 0);
r([ c ], t.prototype, "bufferZone", void 0);
return r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./HacHongGroupItem": "HacHongGroupItem"
} ],
HacHongGroupUserView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a1b95f5K8JFYJfk22NpkLtL", "HacHongGroupUserView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = e("./HacHongGroupUserListView"), u = e("../HacHongConst"), p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.groupUserListView = null;
t.schedulerCallback = null;
return t;
}
t.prototype.onLoad = function() {};
t.prototype.onEnable = function() {
var e = this;
this.schedulerCallback = function() {
e.getGroupUser();
};
cc.director.getScheduler().schedule(this.schedulerCallback, this, 1, 0, .2, !1);
};
t.prototype.getGroupUser = function() {
var e = this, t = u.HacHongConst.api.GroupUser;
lngui.Https.get(t, function(t) {
t && e.onGetGroupUserResponse(t);
});
};
t.prototype.onGetGroupUserResponse = function(e) {
if (e && Array.isArray(e) && 0 !== e.length && this.groupUserListView) {
this.groupUserListView.resetList();
this.groupUserListView.initialize(e);
}
};
t.prototype.onDestroy = function() {
this.groupUserListView && this.groupUserListView.resetList();
this.schedulerCallback && cc.director.getScheduler().unschedule(this.schedulerCallback, this);
};
r([ c(l.default) ], t.prototype, "groupUserListView", void 0);
return r([ s ], t);
}(lngui.UIPopup);
o.default = p;
cc._RF.pop();
}, {
"../HacHongConst": "HacHongConst",
"./HacHongGroupUserListView": "HacHongGroupUserListView"
} ],
HacHongHistoryItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c646atC/uBCTKlaYfzkFvnd", "HacHongHistoryItem");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = e("../../HacHongConst"), u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.lbSession = null;
t.lbTime = null;
t.lbSide = null;
t.lbResult = null;
t.lbBet = null;
t.lbRefund = null;
t.lbWin = null;
t.item = null;
t.itemID = 0;
return t;
}
t.prototype.getBetSideText = function(e) {
switch (e) {
case l.HacHongConst.HacHongBetSide.RONG:
return "RỒNG";

case l.HacHongConst.HacHongBetSide.HOA:
return "HÒA";

case l.HacHongConst.HacHongBetSide.HO:
return "HỔ";

default:
return "";
}
};
t.prototype.updateItem = function(e, t) {
var o, n;
if (e) {
this.lbSession && (this.lbSession.string = "#" + (e.SessionID || ""));
if (this.lbTime && e.CreateTime) {
var i = null === (o = cc.Tool) || void 0 === o ? void 0 : o.getInstance();
i && i.convertUTCTime ? this.lbTime.string = i.convertUTCTime(e.CreateTime) : this.lbTime.string = e.CreateTime || "";
}
this.lbSide && (this.lbSide.string = this.getBetSideText(e.BetSide));
this.lbResult && (this.lbResult.string = this.getBetSideText(e.Result));
var r = null === (n = cc.Tool) || void 0 === n ? void 0 : n.getInstance();
this.lbBet && (r && r.formatNumber ? this.lbBet.string = r.formatNumber(e.Bet || 0) : this.lbBet.string = (e.Bet || 0).toString());
this.lbRefund && (r && r.formatNumber ? this.lbRefund.string = r.formatNumber(e.Refund || 0) : this.lbRefund.string = (e.Refund || 0).toString());
this.lbWin && (r && r.formatNumber ? this.lbWin.string = r.formatNumber(e.Award || 0) : this.lbWin.string = (e.Award || 0).toString());
this.item = e;
this.itemID = t;
}
};
r([ c(cc.Label) ], t.prototype, "lbSession", void 0);
r([ c(cc.Label) ], t.prototype, "lbTime", void 0);
r([ c(cc.Label) ], t.prototype, "lbSide", void 0);
r([ c(cc.Label) ], t.prototype, "lbResult", void 0);
r([ c(cc.Label) ], t.prototype, "lbBet", void 0);
r([ c(cc.Label) ], t.prototype, "lbRefund", void 0);
r([ c(cc.Label) ], t.prototype, "lbWin", void 0);
return r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../HacHongConst": "HacHongConst"
} ],
HacHongHistoryListView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d1bb00erVBL07Fg6BZfgd8T", "HacHongHistoryListView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = e("./HacHongHistoryItem"), u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.itemTemplate = null;
t.scrollView = null;
t.spawnCount = 0;
t.spacing = 0;
t.items = [];
t.content = null;
t.rootContentY = 0;
t.messages = [];
t.updateTimer = 0;
t.updateInterval = .1;
t.bufferZone = 200;
t.lastContentPosY = 0;
return t;
}
t.prototype.onLoad = function() {
this.items = [];
this.updateTimer = 0;
this.lastContentPosY = 0;
if (this.scrollView) {
this.content = this.scrollView.content;
this.rootContentY = this.content ? this.content.y : 0;
}
};
t.prototype.resetList = function() {
if (this.scrollView) {
this.items = [];
this.scrollView.stopAutoScroll();
if (this.content) {
this.content.y = this.rootContentY;
for (var e = this.content.children.slice(), t = e.length - 1; t >= 0; t--) e[t] && this.content.removeChild(e[t]);
}
}
};
t.prototype.getPositionInView = function(e) {
if (!e || !this.scrollView) return cc.v3(0, 0, 0);
var t = e.parent.convertToWorldSpaceAR(e.position);
return this.scrollView.node.convertToNodeSpaceAR(t);
};
t.prototype.initialize = function(e) {
if (e && Array.isArray(e) && 0 !== e.length && this.scrollView && this.itemTemplate && this.content) {
this.messages = e;
var t = this.messages.length, o = this.itemTemplate.height || 100;
this.content.height = t * (o + this.spacing) + this.spacing;
for (var n = Math.min(this.spawnCount, t), i = 0; i < n; ++i) {
var r = cc.instantiate(this.itemTemplate);
if (r) {
this.content.addChild(r);
r.setPosition(0, -o * (.5 + i) - this.spacing * (i + 1));
var a = r.getComponent(l.default);
a && this.messages[i] && a.updateItem(this.messages[i], i);
this.items.push(r);
}
}
this.rootContentY = this.content.y;
this.lastContentPosY = this.content.y;
}
};
t.prototype.update = function(e) {
if (this.scrollView && this.content && 0 !== this.items.length) {
this.updateTimer += e;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var t = this.items, o = this.bufferZone, n = this.scrollView.content.y < this.lastContentPosY, i = ((this.itemTemplate.height || 100) + this.spacing) * t.length, r = 0; r < t.length; ++r) if (t[r]) {
var a = this.getPositionInView(t[r]);
if (n) {
if (a.y < -o && t[r].y + i < 0) {
t[r].y = t[r].y + i;
if (c = t[r].getComponent(l.default)) {
var s = c.itemID - t.length;
void 0 !== this.messages[s] && s >= 0 && c.updateItem(this.messages[s], s);
}
}
} else if (a.y > o && t[r].y - i > -this.content.height) {
t[r].y = t[r].y - i;
var c;
if (c = t[r].getComponent(l.default)) {
s = c.itemID + t.length;
void 0 !== this.messages[s] && s < this.messages.length && c.updateItem(this.messages[s], s);
}
}
}
this.lastContentPosY = this.scrollView.content.y;
}
}
};
r([ c(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ c(cc.ScrollView) ], t.prototype, "scrollView", void 0);
r([ c ], t.prototype, "spawnCount", void 0);
r([ c ], t.prototype, "spacing", void 0);
r([ c ], t.prototype, "updateInterval", void 0);
r([ c ], t.prototype, "bufferZone", void 0);
return r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./HacHongHistoryItem": "HacHongHistoryItem"
} ],
HacHongHistoryView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "44fe3ErCqdLUIgvksTNcjDy", "HacHongHistoryView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = e("../../HacHongConst"), u = e("./HacHongHistoryListView"), p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.dragonTigerHistoryListView = null;
t.schedulerCallback = null;
return t;
}
t.prototype.onLoad = function() {};
t.prototype.onEnable = function() {
var e = this;
this.schedulerCallback = function() {
e.getTopSessionHistory();
};
cc.director.getScheduler().schedule(this.schedulerCallback, this, 1, 0, .2, !1);
};
t.prototype.getTopSessionHistory = function() {
var e = this, t = l.HacHongConst.api.AccountHistory;
lngui.Https.get(t, function(t) {
t && e.onDragonTigerGetHistoryResponse(t);
});
};
t.prototype.onDragonTigerGetHistoryResponse = function(e) {
if (e && Array.isArray(e) && 0 !== e.length && this.dragonTigerHistoryListView) {
this.dragonTigerHistoryListView.resetList();
this.dragonTigerHistoryListView.initialize(e);
}
};
t.prototype.onDestroy = function() {
this.dragonTigerHistoryListView && this.dragonTigerHistoryListView.resetList();
this.schedulerCallback && cc.director.getScheduler().unschedule(this.schedulerCallback, this);
};
r([ c(u.default) ], t.prototype, "dragonTigerHistoryListView", void 0);
return r([ s ], t);
}(lngui.UIPopup);
o.default = p;
cc._RF.pop();
}, {
"../../HacHongConst": "HacHongConst",
"./HacHongHistoryListView": "HacHongHistoryListView"
} ],
HacHongInfoView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8e2d9+ip3xG/aGmF53Ub6Q1", "HacHongInfoView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = e("./HacHongController"), u = e("./player/HacHongPlayer"), p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.lstPlayers = [];
t.interval = null;
t.time = 0;
t.currPlayer = null;
t.positionsUI = [];
return t;
}
o = t;
t.getInstance = function() {
return this._instance;
};
t.prototype.onLoad = function() {
o._instance = this;
l.default.getInstance().setInfoView(this);
this.interval = null;
this.time = 0;
this.currPlayer = this.lstPlayers[0];
this.currPlayer && this.currPlayer.showPlayer(!0);
};
t.prototype.onDestroy = function() {
o._instance === this && (o._instance = null);
try {
this.interval && clearInterval(this.interval);
} catch (e) {}
};
t.prototype.resetPlayerUI = function() {
this.lstPlayers.forEach(function(e) {
e && e.resetPlayerResultUI();
});
};
t.prototype.unRegisterAllPlayer = function() {
this.lstPlayers.forEach(function(e) {
e && e.unRegisterPlayer();
});
};
t.prototype.updatePlayerInfor = function(e) {
this.currPlayer && e && e.Account && this.currPlayer.registerPlayer(e.Account);
};
t.prototype.updatePlayersUI = function(e) {
var t = this, o = 0;
this.positionsUI = [ 0, 0, 0, 0, 0, 0, 0 ];
this.positionsUI[0] = Number(lngui.UserManager.instance.mainUserInfo.AccountID);
o++;
e.forEach(function(e) {
if (e.AccountID != lngui.UserManager.instance.mainUserInfo.AccountID && o <= 6) {
t.positionsUI[o] = Number(e.AccountID);
o++;
}
});
this.positionsUI.forEach(function(o, n) {
if (0 != o) try {
var i = e.filter(function(e) {
return e.AccountID == o;
});
if (t.lstPlayers[n]) {
t.lstPlayers[n].showPlayer(!0);
if (i.length > 0 && 0 != n) {
t.lstPlayers[n].registerPlayer(i[0].Account);
t.lstPlayers[n].resetPlayerResultUI();
}
}
} catch (e) {
console.log(e);
} else if (t.lstPlayers[n]) {
t.lstPlayers[n].unRegisterPlayer();
t.lstPlayers[n].showPlayer(!1);
}
});
l.default.getInstance().setPositionUI(this.positionsUI);
};
t.prototype.updateBalanceCurrPlayer = function(e) {
this.currPlayer && this.currPlayer.updateChipNormal(e);
};
t.prototype.updatePlayerBalance = function(e) {
if (this.positionsUI && e && e.length > 2) {
var t = this.positionsUI.indexOf(e[2]);
-1 != t && this.lstPlayers[t] && e.length > 3 && this.lstPlayers[t].updateChip(e[3]);
}
};
t.prototype.winResult = function(e) {
this.currPlayer && e && this.currPlayer.playerResultUI(e.Award, e.Balance);
};
t.prototype.winResultVip = function(e) {
var t = this;
e && this.positionsUI && e.forEach(function(e) {
if (e && t.positionsUI.includes(e.AccountID) && e.AccountID != lngui.UserManager.instance.mainUserInfo.AccountID) {
var o = t.positionsUI.indexOf(e.AccountID);
-1 != o && t.lstPlayers[o] && t.lstPlayers[o].playerResultUI(e.Award, e.Balance);
}
});
};
t.prototype.playerShowBubbleChat = function(e) {
var t;
if (e && !(e.length < 5) && (0 != e[4] || e[3] == lngui.UserManager.instance.mainUserInfo.AccountID)) {
var o = null === (t = cc.ChatRoomController) || void 0 === t ? void 0 : t.getInstance();
o && (o.checkIsEmotion(e) ? this.lstPlayers.forEach(function(t) {
t && t.nickName === e[0] && t.showEmotion(o.getIndexEmotion(e), e);
}) : this.lstPlayers.forEach(function(t) {
t && t.nickName === e[0] && t.showBubbleChat(e);
}));
}
};
var o;
t._instance = null;
r([ c(u.default) ], t.prototype, "lstPlayers", void 0);
return o = r([ s ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./HacHongController": "HacHongController",
"./player/HacHongPlayer": "HacHongPlayer"
} ],
HacHongMoveChip: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "65e97BXpaFHebxqUHu4GkNL", "HacHongMoveChip");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__spreadArrays || function() {
for (var e = 0, t = 0, o = arguments.length; t < o; t++) e += arguments[t].length;
var n = Array(e), i = 0;
for (t = 0; t < o; t++) for (var r = arguments[t], a = 0, s = r.length; a < s; a++, 
i++) n[i] = r[a];
return n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, c = s.ccclass, l = s.property, u = e("../HacHongController"), p = e("../HacHongConst"), d = function(e) {
i(t, e);
function t() {
var t, o = null !== e && e.apply(this, arguments) || this;
o.prefabsChip = [];
o.nodeChipsBlack = null;
o.nodeChipsRed = null;
o.nodeChipsSpade = null;
o.nodeChipsClobe = null;
o.nodeChipsDiamond = null;
o.nodeChipsHeart = null;
o.nodeChipsStraight = null;
o.nodeChipsPair = null;
o.nodeChipsFlush = null;
o.nodeChipsStartMove = null;
o.lstPosChip = [];
o.lstPosPlayer = [];
o.posNodeDealer = null;
o.nodePosGroupUser = null;
o.lstPosPlayerUI = [];
o.listChips = [];
o.listChipsByBetSide = ((t = {})[p.HacHongConst.HacHongBetSide.Black] = [], t[p.HacHongConst.HacHongBetSide.Red] = [], 
t[p.HacHongConst.HacHongBetSide.Spade] = [], t[p.HacHongConst.HacHongBetSide.Clobe] = [], 
t[p.HacHongConst.HacHongBetSide.Diamond] = [], t[p.HacHongConst.HacHongBetSide.Heart] = [], 
t[p.HacHongConst.HacHongBetSide.Straight] = [], t[p.HacHongConst.HacHongBetSide.Pair] = [], 
t[p.HacHongConst.HacHongBetSide.Flush] = [], t);
o.listChipReward = [];
o.listChipOfUser = [];
o.listMap = {};
o.listPos = {};
o.listPools = {};
o.posDealer = null;
o.posTotalUser = null;
return o;
}
o = t;
t.getInstance = function() {
return this._instance;
};
t.prototype.onLoad = function() {
var e = this;
o._instance = this;
this.lstPosPlayerUI = [];
this.lstPosPlayer.map(function(t) {
e.lstPosPlayerUI.push(cc.v2(t.position.x, t.position.y));
}, this);
this.listChips = [];
this.listChipsByBetSide[p.HacHongConst.HacHongBetSide.Black] = [];
this.listChipsByBetSide[p.HacHongConst.HacHongBetSide.Red] = [];
this.listChipsByBetSide[p.HacHongConst.HacHongBetSide.Spade] = [];
this.listChipsByBetSide[p.HacHongConst.HacHongBetSide.Clobe] = [];
this.listChipsByBetSide[p.HacHongConst.HacHongBetSide.Diamond] = [];
this.listChipsByBetSide[p.HacHongConst.HacHongBetSide.Heart] = [];
this.listChipsByBetSide[p.HacHongConst.HacHongBetSide.Straight] = [];
this.listChipsByBetSide[p.HacHongConst.HacHongBetSide.Pair] = [];
this.listChipsByBetSide[p.HacHongConst.HacHongBetSide.Flush] = [];
this.listChipReward = [];
this.listChipOfUser = [];
this.listMap = {
1e3: 0,
5e3: 1,
1e4: 2,
5e4: 3,
1e5: 4,
2e5: 5,
5e5: 6,
1e6: 7,
5e6: 8,
1e7: 9
};
this.listPos = {};
Object.keys(this.listMap).forEach(function(t) {
e.lstPosChip[e.listMap[t]] && e.lstPosChip[e.listMap[t]].position && (e.listPos[t] = e.lstPosChip[e.listMap[t]].position.x);
});
this.listPools = [];
Object.keys(this.listPos).map(function(t) {
e.listPools[t] = new cc.NodePool();
for (var o = 0; o <= 5; o++) {
var n = e.listMap[t], i = cc.instantiate(e.prefabsChip[n]);
e.listPools[t].put(i);
}
}, this);
this.posDealer = cc.v2(this.posNodeDealer.position.x, this.posNodeDealer.position.y);
this.posTotalUser = cc.v2(this.nodePosGroupUser.position.x, this.nodePosGroupUser.position.y);
};
t.prototype.onDestroy = function() {
o._instance === this && (o._instance = null);
};
t.prototype.createListChipOfUser = function(e) {
this.listChipOfUser = [];
var t = this;
e.length > 0 && e.map(function(e) {
var o = e.BetSide, n = t.createChip(e.BetValue);
t.listChipOfUser.push([ n, o ]);
});
};
t.prototype.updateListChipOfUser = function(e, t) {
var o = this.createChip(t);
this.listChipOfUser.push([ o, e ]);
};
t.prototype.moveChipWithStartPos = function(e, t) {
var o = u.default.getInstance().getPositionUI(), n = -1;
try {
n = o.indexOf(e[0]);
} catch (e) {
n = -1;
}
var i = -1 != (n = t ? 0 : n) ? this.lstPosPlayerUI[n] : this.nodePosGroupUser.position, r = e[2], a = e[1], s = this.randomPosMove(r), c = this.createChip(a);
this.listChipsByBetSide[r] && this.listChipsByBetSide[r].push([ c, a, i ]);
this.listChips.push([ c, a ]);
c.parent = this.nodeChipsStartMove.parent;
if (t) {
c.x = this.listPos[a];
c.y = -315;
} else c.position = cc.v3(i.x, i.y, 0);
this.chipMoveTo(c, s, .3);
};
t.prototype.initChipsBet = function(e) {
var t = -1;
try {
t = u.default.getInstance().getPositionUI().indexOf(e[2]);
} catch (e) {
t = -1;
}
var o = -1 != t ? this.lstPosPlayerUI[t] : this.nodePosGroupUser.position, n = e[1], i = e[0], r = this.randomPosMove(n), a = this.createChip(i);
this.listChipsByBetSide[n] && this.listChipsByBetSide[n].push([ a, i, o ]);
this.listChips.push([ a, i ]);
a.parent = this.nodeChipsStartMove.parent;
a.position = cc.v3(r.x, r.y, 0);
};
t.prototype.randomPosMove = function(e) {
var t, o = 0, n = 0, i = null;
switch (e) {
case p.HacHongConst.HacHongBetSide.Black:
i = this.nodeChipsBlack;
break;

case p.HacHongConst.HacHongBetSide.Red:
i = this.nodeChipsRed;
break;

case p.HacHongConst.HacHongBetSide.Spade:
i = this.nodeChipsSpade;
break;

case p.HacHongConst.HacHongBetSide.Clobe:
i = this.nodeChipsClobe;
break;

case p.HacHongConst.HacHongBetSide.Diamond:
i = this.nodeChipsDiamond;
break;

case p.HacHongConst.HacHongBetSide.Heart:
i = this.nodeChipsHeart;
break;

case p.HacHongConst.HacHongBetSide.Straight:
i = this.nodeChipsStraight;
break;

case p.HacHongConst.HacHongBetSide.Pair:
i = this.nodeChipsPair;
break;

case p.HacHongConst.HacHongBetSide.Flush:
i = this.nodeChipsFlush;
}
if (i) {
o = i.width / 2;
n = i.height / 2;
t = cc.v2(i.position.x, i.position.y);
} else t = cc.v2(0, 0);
var r = -o, a = -n, s = Math.floor(Math.random() * (o - r + 1) + r), c = Math.floor(Math.random() * (n - a + 1) + a);
t.x = t.x + s;
t.y = t.y + c;
return t;
};
t.prototype.chipMoveTo = function(e, t, o) {
var n = cc.moveTo(o, t);
n.easing(cc.easeOut(1));
e.runAction(n);
};
t.prototype.chipWinAnimation = function(e, t, o) {
if ("" != e.name) {
var n = cc.moveTo(o, t), i = cc.fadeOut(2 * o);
e.runAction(cc.spawn(n, i));
}
};
t.prototype.chipRewardWinAnimation = function(e, t, o) {
if ("" != e.name) {
var n = cc.moveTo(o, t);
e.runAction(n);
}
};
t.prototype.chipMoveToSideWin = function(e) {
var t = this, o = this.listChipsByBetSide[e] || [], n = this;
o.map(function(o, i) {
var r = n.randomPosMove(e), a = n.createChip(o[1]);
a.parent = t.nodeChipsStartMove.parent;
a.position = cc.v3(-9, 153, 0);
n.listChipReward.push([ a, o[1], o[2] ]);
n.listChips.push(a);
i = i >= 5 ? 5 : i;
setTimeout(function() {
try {
n.chipRewardWinAnimation(a, r, .5);
} catch (e) {}
}, 100 * i);
});
};
t.prototype.chipMoveToCoin = function(e, t) {
var o = this;
try {
var n = this.listChipsByBetSide[e] || [], i = [];
Object.keys(this.listChipsByBetSide).forEach(function(t) {
var n = parseInt(t);
n !== e && o.listChipsByBetSide[n] && (i = i.concat(o.listChipsByBetSide[n]));
});
t ? this.commonMoveChipResultNoPositionEnd(n) : this.commonMoveChipResult(i, this.posDealer);
} catch (e) {}
};
t.prototype.removeChips = function(e) {
var t = this, o = [];
Object.keys(this.listChipsByBetSide).forEach(function(n) {
var i = parseInt(n);
i !== e && t.listChipsByBetSide[i] && (o = o.concat(t.listChipsByBetSide[i]));
});
o.length > 0 && o.map(function(e) {
return e[0].destroy();
});
};
t.prototype.commonMoveChipResult = function(e, t) {
var o = this;
(e = a(e, this.listChipReward)).map(function(e, n) {
n = n >= 5 ? 5 : n;
setTimeout(function() {
try {
o.chipWinAnimation(e[0], t, .3);
} catch (e) {}
}, 100 * n);
});
};
t.prototype.moveChipTie = function(e) {
var t = this;
e && e.map(function(e, o) {
o = o >= 5 ? 5 : o;
setTimeout(function() {
try {
t.chipWinAnimation(e[0], e[2], .5);
} catch (e) {}
}, 100 * o);
});
};
t.prototype.commonMoveChipResultNoPositionEnd = function(e) {
var t = this;
(e = a(e, this.listChipReward)).map(function(e, o) {
o = o >= 5 ? 5 : o;
setTimeout(function() {
try {
t.chipWinAnimation(e[0], e[2], .5);
} catch (e) {}
}, 100 * o);
});
};
t.prototype.createChip = function(e) {
var t = null, o = this.listMap[e];
(t = this.listPools[e].size() > 0 ? this.listPools[e].get() : cc.instantiate(this.prefabsChip[o])).opacity = 255;
try {
t.setScale(cc.v2(.8, .8));
} catch (e) {
(t = cc.instantiate(this.prefabsChip[o])).setScale(cc.v2(.8, .8));
}
return t;
};
t.prototype.clearChips = function() {
var e = this;
if (this.listChips) try {
this.listChips.map(function(t) {
if (t) {
var o = t[0], n = t[1];
n && e.listPools[n].put(o);
}
}, this);
} catch (e) {}
this.listChips = [];
Object.keys(this.listChipsByBetSide).forEach(function(t) {
var o = parseInt(t);
e.listChipsByBetSide[o] = [];
});
this.listChipReward = [];
this.listChipOfUser = [];
};
t.prototype.clearPools = function() {
this.listPools && (this.listPools = []);
};
var o;
t._instance = null;
r([ l([ cc.Prefab ]) ], t.prototype, "prefabsChip", void 0);
r([ l(cc.Node), l(cc.Node) ], t.prototype, "nodeChipsBlack", void 0);
r([ l(cc.Node) ], t.prototype, "nodeChipsRed", void 0);
r([ l(cc.Node) ], t.prototype, "nodeChipsSpade", void 0);
r([ l(cc.Node) ], t.prototype, "nodeChipsClobe", void 0);
r([ l(cc.Node) ], t.prototype, "nodeChipsDiamond", void 0);
r([ l(cc.Node) ], t.prototype, "nodeChipsHeart", void 0);
r([ l(cc.Node) ], t.prototype, "nodeChipsStraight", void 0);
r([ l(cc.Node) ], t.prototype, "nodeChipsPair", void 0);
r([ l(cc.Node) ], t.prototype, "nodeChipsFlush", void 0);
r([ l(cc.Node) ], t.prototype, "nodeChipsStartMove", void 0);
r([ l([ cc.Node ]) ], t.prototype, "lstPosChip", void 0);
r([ l([ cc.Node ]) ], t.prototype, "lstPosPlayer", void 0);
r([ l(cc.Node) ], t.prototype, "posNodeDealer", void 0);
r([ l(cc.Node) ], t.prototype, "nodePosGroupUser", void 0);
return o = r([ c ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../HacHongConst": "HacHongConst",
"../HacHongController": "HacHongController"
} ],
HacHongPlayer: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a9921Jb1FFILLA5TBx7Wyij", "HacHongPlayer");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = e("../HacHongController"), u = e("../HacHongConst"), p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.lbSID = null;
t.lbName = null;
t.nickName = "";
t.animation = null;
t.nodeChat = null;
t.nodeEmotion = null;
t.nodeBubble = null;
t.skeEmotion = null;
t.lbBubbleChat = null;
t.avatar = null;
t.lbWin = null;
t.animLbWin = null;
t.nodeInfo = null;
t.lbChip = null;
t.playerStatus = "";
return t;
}
t.prototype.onEnable = function() {
this.showPlayer(!1);
};
t.prototype.onLoad = function() {
this.animation = this.node.getComponent(cc.Animation);
this.nodeChat = this.node.getChildByName("chat");
this.nodeEmotion = this.nodeChat.getChildByName("emotion");
this.nodeBubble = this.nodeChat.getChildByName("bubble");
this.skeEmotion = this.nodeEmotion.getComponent(sp.Skeleton);
this.lbBubbleChat = this.nodeBubble.getComponentInChildren(cc.Label);
this.nodeChat.active = !1;
this.avatar = this.node.getComponentInChildren(cc.Avatar);
this.lbWin = this.node.getComponentInChildren(cc.Label);
this.animLbWin = this.node.getComponentInChildren(cc.Animation);
this.nodeInfo = this.node.getChildByName("ava_money");
this.lbChip = this.nodeInfo.getChildByName("lbChip").getComponent(cc.LabelIncrement);
this.nodeInfo.active = !1;
};
t.prototype.onDestroy = function() {
this.unRegisterPlayer();
};
t.prototype.showPlayer = function(e) {
this.node.opacity = e ? 255 : 0;
};
t.prototype.registerPlayer = function(e) {
var t = e.Avatar;
(t <= 0 || t > 15) && (t = Math.floor(15 * Math.random()));
var o = l.default.getInstance().getAvatars();
o && o[t - 1] && this.avatar.setAvatar(o[t - 1]);
this.nodeInfo.active = !0;
this.nickName = e.NickName;
if (e.ServiceID) {
this.lbSID.string = cc.Config.getInstance().getServiceNameNoFormat(e.ServiceID);
this.lbName.string = cc.Config.getInstance().formatName(e.NickName, 7);
} else {
this.lbSID.string = "";
this.lbName.string = cc.Config.getInstance().formatName(e.NickName, 10);
}
this.lbChip.tweenValueto(e.Balance);
};
t.prototype.unRegisterPlayer = function() {
this.nodeInfo.active = !1;
try {
this.lbWin && this.lbWin.node && (this.lbWin.node.active = !1);
this.nodeBubble && (this.nodeBubble.active = !1);
this.nodeEmotion && (this.nodeEmotion.active = !1);
} catch (e) {}
};
t.prototype.resetPlayerResultUI = function() {
this.lbWin && this.lbWin.node && (this.lbWin.node.active = !1);
};
t.prototype.playerResultUI = function(e, t) {
this.lbWin.string = "+" + u.HacHongConst.formatNumber(e);
this.lbWin.node.active = !0;
this.lbWin.node.scaleY = 0;
this.animLbWin.play("xxWin");
t && this.updateChip(t);
};
t.prototype.showEmotion = function(e, t) {
this.nodeBubble.active = !1;
this.nodeEmotion.active = !0;
this.skeEmotion.clearTracks();
this.skeEmotion.setToSetupPose();
15 === e ? this.skeEmotion.setAnimation(e, "16-extreme-sexy-girl", !0) : this.skeEmotion.setAnimation(e, t[1], !0);
this.animation.play("showBubbleChat");
};
t.prototype.showBubbleChat = function(e) {
this.nodeBubble.active = !0;
this.nodeEmotion.active = !1;
this.lbBubbleChat.string = e[1];
this.animation.play("showBubbleChat");
};
t.prototype.updateChip = function(e) {
this.lbChip && this.lbChip.tweenValueto(e);
};
t.prototype.updateChipNormal = function(e) {
this.lbChip && this.lbChip.label && (this.lbChip.label.string = u.HacHongConst.formatNumber(e));
};
t.prototype.updateConnectionStatus = function(e) {
switch (e) {
case cc.ConnectionStatus.DISCONNECTED:
case cc.ConnectionStatus.CONNECTED:
}
};
t.prototype.updatePlayerStatus = function(e) {
this.playerStatus = e.toString();
this.node.opacity = e.toString() === cc.PlayerStatus.INGAME ? 255 : 150;
};
r([ c(cc.Label) ], t.prototype, "lbSID", void 0);
r([ c(cc.Label) ], t.prototype, "lbName", void 0);
r([ c ], t.prototype, "nickName", void 0);
return r([ s ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../HacHongConst": "HacHongConst",
"../HacHongController": "HacHongController"
} ],
HacHongResultEffectView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bd8b7mW4KRAdr4rLbq3NpCd", "HacHongResultEffectView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = e("./HacHongController"), u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bgWin = null;
return t;
}
o = t;
t.getInstance = function() {
return this._instance;
};
t.prototype.onLoad = function() {
o._instance = this;
l.default.getInstance().setDragonTigerResultEffectView(this);
this.reset();
};
t.prototype.onDestroy = function() {
o._instance === this && (o._instance = null);
l.default.getInstance().setDragonTigerResultEffectView(null);
};
t.prototype.stopEffect = function() {
this.reset();
};
t.prototype.reset = function() {
this.bgWin.children.forEach(function(e) {
e.active = !1;
});
};
t.prototype.playEffectWin = function(e) {
var t = this;
e.forEach(function(e) {
t.bgWin && (t.bgWin.children[e - 1].active = !0);
});
};
var o;
t._instance = null;
r([ c(cc.Node) ], t.prototype, "bgWin", void 0);
return o = r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./HacHongController": "HacHongController"
} ],
HacHongSessionDetailData: [ function(e, t) {
"use strict";
cc._RF.push(t, "62beaOgEvdOC5MplG87DQT1", "HacHongSessionDetailData");
t.exports = [ {
UserName: "thuyhj189",
Bet: 23e4,
Refund: 23e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:14.253"
}, {
UserName: "pepink1993",
Bet: 21e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:14.253"
}, {
UserName: "linhsuri97",
Bet: 184e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:14.253"
}, {
UserName: "laothat",
Bet: 175e3,
Refund: 175e3,
BetSide: 0,
CreateTime: "2019-04-03T21:25:13.24"
}, {
UserName: "tiheop3",
Bet: 16e4,
Refund: 16e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:13.24"
}, {
UserName: "baumoitha",
Bet: 18e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:13.24"
}, {
UserName: "boywushuhd88",
Bet: 19e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:13.24"
}, {
UserName: "kabacotu",
Bet: 75e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:13.24"
}, {
UserName: "boacmay",
Bet: 21e4,
Refund: 21e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:13.24"
}, {
UserName: "kute1988",
Bet: 21e4,
Refund: 21e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:12.223"
}, {
UserName: "lunnho64",
Bet: 184e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:12.223"
}, {
UserName: "codonketoi123",
Bet: 28e4,
Refund: 28e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:12.223"
}, {
UserName: "1262772924",
Bet: 185e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:12.223"
}, {
UserName: "bebi986",
Bet: 37e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:12.223"
}, {
UserName: "sonantonyhp",
Bet: 15e4,
Refund: 15e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:12.223"
}, {
UserName: "kenz11o2vn",
Bet: 12e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:12.207"
}, {
UserName: "nhinlgi",
Bet: 284e3,
Refund: 284e3,
BetSide: 0,
CreateTime: "2019-04-03T21:25:12.207"
}, {
UserName: "lyhaidang1990",
Bet: 199e3,
Refund: 199e3,
BetSide: 0,
CreateTime: "2019-04-03T21:25:12.207"
}, {
UserName: "sociu6996",
Bet: 299e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:12.207"
}, {
UserName: "supermen3979",
Bet: 29e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:12.207"
}, {
UserName: "minkho0412",
Bet: 22e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:11.19"
}, {
UserName: "selina250393",
Bet: 38e4,
Refund: 38e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:11.19"
}, {
UserName: "duongsondaika1",
Bet: 35e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:11.19"
}, {
UserName: "nguyentun20",
Bet: 3e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:11.19"
}, {
UserName: "kimgioi020",
Bet: 475e3,
Refund: 475e3,
BetSide: 0,
CreateTime: "2019-04-03T21:25:11.19"
}, {
UserName: "quyetdaik1998",
Bet: 35e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:11.19"
}, {
UserName: "pepink1993",
Bet: 168e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:11.19"
}, {
UserName: "denvl000",
Bet: 175e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:11.19"
}, {
UserName: "dukypro221",
Bet: 16e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:10.177"
}, {
UserName: "fbisat1233211",
Bet: 21e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:09.16"
}, {
UserName: "tdim948",
Bet: 275e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:09.16"
}, {
UserName: "dento01",
Bet: 29e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:09.16"
}, {
UserName: "banmaixanh3",
Bet: 22e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:09.16"
}, {
UserName: "987272027",
Bet: 28e4,
Refund: 28e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:08.143"
}, {
UserName: "boylazy94",
Bet: 22e4,
Refund: 22e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:08.143"
}, {
UserName: "mygiangno1",
Bet: 33e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:07.13"
}, {
UserName: "thaobktdt",
Bet: 21e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:07.13"
}, {
UserName: "kebaothu7325",
Bet: 175e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:06.113"
}, {
UserName: "proan159",
Bet: 29e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:06.113"
}, {
UserName: "trunglo3",
Bet: 18e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:06.113"
}, {
UserName: "vippk01",
Bet: 27e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:06.113"
}, {
UserName: "bodatrolai99",
Bet: 27e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:06.113"
}, {
UserName: "dongphenghp",
Bet: 275e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:05.097"
}, {
UserName: "taokillzome",
Bet: 16e4,
Refund: 16e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:05.097"
}, {
UserName: "money6886",
Bet: 16e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:05.097"
}, {
UserName: "s0nc0nvkl",
Bet: 26e4,
Refund: 26e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:05.097"
}, {
UserName: "gioipc",
Bet: 275e3,
Refund: 275e3,
BetSide: 0,
CreateTime: "2019-04-03T21:25:04.083"
}, {
UserName: "maimaimottinhyeuhp",
Bet: 19e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:25:03.067"
}, {
UserName: "proan159",
Bet: 27e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:03.067"
}, {
UserName: "tulatao198x",
Bet: 475e3,
Refund: 49e3,
BetSide: 0,
CreateTime: "2019-04-03T21:25:03.067"
}, {
UserName: "1thu2duoi",
Bet: 35e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:03.067"
}, {
UserName: "mafiatytgame",
Bet: 33e4,
Refund: 33e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:03.067"
}, {
UserName: "trakun",
Bet: 22e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:03.067"
}, {
UserName: "balac1989",
Bet: 168e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:02.05"
}, {
UserName: "howl312",
Bet: 22e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:25:02.05"
}, {
UserName: "leemjnbj",
Bet: 19e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:25:01.037"
}, {
UserName: "945433088",
Bet: 299e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:01.037"
}, {
UserName: "thaobktdt",
Bet: 5e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:01.037"
}, {
UserName: "denlamluon",
Bet: 27e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:01.037"
}, {
UserName: "kaka616",
Bet: 294e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:00.02"
}, {
UserName: "duyduyduy34",
Bet: 32e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:25:00.02"
}, {
UserName: "tykt21",
Bet: 175e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:00.02"
}, {
UserName: "anhhiep123sd",
Bet: 18e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:25:00.02"
}, {
UserName: "daica1989hk",
Bet: 178e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:25:00.02"
}, {
UserName: "tinhkiki123",
Bet: 9e5,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:59.003"
}, {
UserName: "anhthaomy03",
Bet: 185e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:59.003"
}, {
UserName: "choixongxoay",
Bet: 28e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:59.003"
}, {
UserName: "2duoi1thu",
Bet: 19e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:57.99"
}, {
UserName: "langtuzerovd",
Bet: 111e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:57.99"
}, {
UserName: "hunghaivl",
Bet: 25e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:57.99"
}, {
UserName: "thanhden2018",
Bet: 199e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:57.99"
}, {
UserName: "sorry0000",
Bet: 4e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:56.957"
}, {
UserName: "gioipc",
Bet: 475e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:56.957"
}, {
UserName: "trandaihoan1",
Bet: 15e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:56.957"
}, {
UserName: "1226338830",
Bet: 199e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:56.957"
}, {
UserName: "follo19",
Bet: 19e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:56.957"
}, {
UserName: "lehoaihan111987",
Bet: 23e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:56.957"
}, {
UserName: "fquerne",
Bet: 17e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:56.957"
}, {
UserName: "cunbabies111",
Bet: 199e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:56.957"
}, {
UserName: "dangduyst01",
Bet: 28e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:55.94"
}, {
UserName: "tuanmusic2013",
Bet: 29e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:55.94"
}, {
UserName: "aomacanada",
Bet: 22e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:55.94"
}, {
UserName: "hoabao",
Bet: 399e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:55.94"
}, {
UserName: "phatnguyen94",
Bet: 18e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:54.927"
}, {
UserName: "anhan666",
Bet: 24e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:54.927"
}, {
UserName: "sailamlaem6561",
Bet: 168e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:54.927"
}, {
UserName: "danthuong88",
Bet: 21e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:53.91"
}, {
UserName: "tinhmong7325",
Bet: 3e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:53.91"
}, {
UserName: "9774749259",
Bet: 365e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:53.91"
}, {
UserName: "dinhthai1994",
Bet: 3e5,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:53.91"
}, {
UserName: "tuanmusic2013",
Bet: 21e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:52.893"
}, {
UserName: "hagiangsao90",
Bet: 184e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:52.893"
}, {
UserName: "KingHeisenberg",
Bet: 28e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:52.893"
}, {
UserName: "nhjmquaj",
Bet: 399e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:52.893"
}, {
UserName: "onethepha157",
Bet: 15e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:52.893"
}, {
UserName: "alexanderlop",
Bet: 29e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:52.88"
}, {
UserName: "toitoi012",
Bet: 3e5,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:51.88"
}, {
UserName: "minthu0589",
Bet: 178e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:50.863"
}, {
UserName: "gunv01",
Bet: 299e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:49.847"
}, {
UserName: "2duoi1thu",
Bet: 29e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:49.847"
}, {
UserName: "luinhutien6996",
Bet: 23e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:49.847"
}, {
UserName: "967861102",
Bet: 275e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:49.847"
}, {
UserName: "boywushuhd88",
Bet: 3e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:49.847"
}, {
UserName: "tieukaan1997",
Bet: 45e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:48.833"
}, {
UserName: "huongbaby97",
Bet: 29e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:47.817"
}, {
UserName: "alotoingay",
Bet: 56e5,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:47.8"
}, {
UserName: "vail0n89",
Bet: 25e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:47.8"
}, {
UserName: "nhinlgi",
Bet: 25e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:47.8"
}, {
UserName: "caubedonphuong",
Bet: 284e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:47.8"
}, {
UserName: "vietanh1980",
Bet: 294e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:47.8"
}, {
UserName: "pqk6789",
Bet: 184e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:47.8"
}, {
UserName: "966242177",
Bet: 18e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:47.8"
}, {
UserName: "936922936",
Bet: 26e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:46.787"
}, {
UserName: "myxinh0310hp",
Bet: 17e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:46.787"
}, {
UserName: "hungtz",
Bet: 12e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:46.787"
}, {
UserName: "thaquendidj",
Bet: 17e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:45.77"
}, {
UserName: "taoacdexoay",
Bet: 26e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:44.753"
}, {
UserName: "cuto56789",
Bet: 21e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:44.753"
}, {
UserName: "teenvyeu1996",
Bet: 16e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:44.753"
}, {
UserName: "aomacanada",
Bet: 29e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:43.74"
}, {
UserName: "prolahay001",
Bet: 19e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:43.74"
}, {
UserName: "huynhhaonam",
Bet: 18e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:43.74"
}, {
UserName: "hung651993",
Bet: 166e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:43.74"
}, {
UserName: "caubuon1991",
Bet: 3e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:43.74"
}, {
UserName: "cachua0610",
Bet: 111e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:43.74"
}, {
UserName: "ngheanwetui",
Bet: 1e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:42.723"
}, {
UserName: "huyunrin",
Bet: 27e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:42.723"
}, {
UserName: "denlamluon",
Bet: 399e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:42.723"
}, {
UserName: "trinhlxtp",
Bet: 21e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:42.723"
}, {
UserName: "linhcuuhoa1980",
Bet: 28e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:41.707"
}, {
UserName: "duocmoila",
Bet: 22e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:41.707"
}, {
UserName: "ngheomacotinh91",
Bet: 28e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:41.707"
}, {
UserName: "tyty305",
Bet: 17e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:41.707"
}, {
UserName: "daugauls",
Bet: 299e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:41.707"
}, {
UserName: "vuachoibai95",
Bet: 5e5,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:40.69"
}, {
UserName: "selina24793",
Bet: 35e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:40.69"
}, {
UserName: "dongphenghp",
Bet: 26e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:40.69"
}, {
UserName: "thuyhj189",
Bet: 168e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:40.69"
}, {
UserName: "tbbdhg",
Bet: 8e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:40.69"
}, {
UserName: "selina250393",
Bet: 19e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:39.677"
}, {
UserName: "super0professor",
Bet: 399e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:39.677"
}, {
UserName: "doilatheaaa",
Bet: 25e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:39.677"
}, {
UserName: "tuantu011991",
Bet: 184e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:39.677"
}, {
UserName: "trandaihoan1",
Bet: 75e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:38.66"
}, {
UserName: "follo19",
Bet: 184e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:38.66"
}, {
UserName: "dinhloinhoi",
Bet: 22e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:38.66"
}, {
UserName: "linhcuuhoa1980",
Bet: 38e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:37.643"
}, {
UserName: "o925355847",
Bet: 4e5,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:37.643"
}, {
UserName: "kimgioi020",
Bet: 19e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:37.643"
}, {
UserName: "hp0988880119",
Bet: 23e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:37.643"
}, {
UserName: "misyokola2710",
Bet: 28e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:37.643"
}, {
UserName: "oggyji1711",
Bet: 166e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:37.643"
}, {
UserName: "kabacotu",
Bet: 294e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:37.643"
}, {
UserName: "27071994",
Bet: 28e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:36.63"
}, {
UserName: "anvyluv90",
Bet: 23e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:36.63"
}, {
UserName: "963696359",
Bet: 22e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:36.63"
}, {
UserName: "phugiao1111",
Bet: 184e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:36.63"
}, {
UserName: "chibui6761",
Bet: 299e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:36.63"
}, {
UserName: "maxsao9999",
Bet: 28e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:36.63"
}, {
UserName: "laothat",
Bet: 199e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:35.613"
}, {
UserName: "thuongnhan86",
Bet: 399e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:35.613"
}, {
UserName: "longlee2k14",
Bet: 26e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:35.613"
}, {
UserName: "bebi986",
Bet: 25e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:35.613"
}, {
UserName: "kenshinub169",
Bet: 24e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:35.613"
}, {
UserName: "1207464321",
Bet: 22e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:34.6"
}, {
UserName: "dinhthai1994",
Bet: 199e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:34.6"
}, {
UserName: "emyeuvtc1998",
Bet: 15e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:34.6"
}, {
UserName: "dangcap873",
Bet: 29e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:34.6"
}, {
UserName: "nhithuy3793",
Bet: 2e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:33.583"
}, {
UserName: "denlamluon",
Bet: 275e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:33.583"
}, {
UserName: "kabacotu",
Bet: 16e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:33.583"
}, {
UserName: "acpzolove",
Bet: 299e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:32.567"
}, {
UserName: "booshisha11",
Bet: 22e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:32.567"
}, {
UserName: "anhthinhs2",
Bet: 3e5,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:32.567"
}, {
UserName: "vemotnucuoi",
Bet: 35e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:32.567"
}, {
UserName: "anhla93",
Bet: 22e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:32.567"
}, {
UserName: "pqk6789",
Bet: 15e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:32.567"
}, {
UserName: "botenvinhhp2",
Bet: 23e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:31.55"
}, {
UserName: "langtuzerovd",
Bet: 2e5,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:31.55"
}, {
UserName: "nungcatwavtc",
Bet: 222e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:31.55"
}, {
UserName: "964356789",
Bet: 2e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:31.55"
}, {
UserName: "dento01",
Bet: 19e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:31.55"
}, {
UserName: "kenshinub169",
Bet: 15e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:31.55"
}, {
UserName: "lastab4",
Bet: 195e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:30.537"
}, {
UserName: "laothat",
Bet: 39e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:30.537"
}, {
UserName: "loztrau9999",
Bet: 3e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:30.537"
}, {
UserName: "phungchu0610",
Bet: 18e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:30.537"
}, {
UserName: "phidaigia789",
Bet: 26e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:30.537"
}, {
UserName: "2duoi1thu",
Bet: 18e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:29.52"
}, {
UserName: "quangthu1993",
Bet: 75e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:29.52"
}, {
UserName: "facebookcye",
Bet: 16e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:29.52"
}, {
UserName: "caubuon1991",
Bet: 5e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:29.52"
}, {
UserName: "oggyji1711",
Bet: 45e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:29.52"
}, {
UserName: "o0okissloveo0o",
Bet: 16e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:29.52"
}, {
UserName: "anhthinhs2",
Bet: 375e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:29.52"
}, {
UserName: "vuachoibai95",
Bet: 29e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:28.503"
}, {
UserName: "khuyettatgiathu",
Bet: 178e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:28.503"
}, {
UserName: "nhatlong6991",
Bet: 25e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:28.503"
}, {
UserName: "tunghue8888",
Bet: 2e5,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:28.503"
}, {
UserName: "trungtienkissss",
Bet: 5e5,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:27.49"
}, {
UserName: "barbin86",
Bet: 2e5,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:27.49"
}, {
UserName: "thuongdientu",
Bet: 21e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:27.49"
} ];
cc._RF.pop();
}, {} ],
HacHongSessionDetailItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3af72571QZKRZHYmAVtTRum", "HacHongSessionDetailItem");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.lbTime = null;
t.lbSID = null;
t.lbNickName = null;
t.lbBet = null;
t.lbRefund = null;
t.item = null;
t.itemID = 0;
return t;
}
t.prototype.updateItem = function(e, t) {
var o, n, i, r;
if (e) {
if (this.lbTime && e.CreateTime) {
var a = null === (o = cc.Tool) || void 0 === o ? void 0 : o.getInstance();
a && a.convertUTCTime2 ? this.lbTime.string = a.convertUTCTime2(e.CreateTime) : this.lbTime.string = e.CreateTime || "";
}
if (this.lbSID) {
var s = null === (n = cc.Config) || void 0 === n ? void 0 : n.getInstance();
s && s.getServiceNameNoFormat && e.ServiceID ? this.lbSID.string = s.getServiceNameNoFormat(e.ServiceID) : this.lbSID.string = (null === (i = e.ServiceID) || void 0 === i ? void 0 : i.toString()) || "";
}
this.lbNickName && (this.lbNickName.string = e.UserName || e.NickName || "");
var c = null === (r = cc.Tool) || void 0 === r ? void 0 : r.getInstance();
this.lbBet && (c && c.formatNumberKTX ? this.lbBet.string = c.formatNumberKTX(e.Bet || 0) : this.lbBet.string = (e.Bet || 0).toString());
this.lbRefund && (c && c.formatNumberKTX ? this.lbRefund.string = c.formatNumberKTX(e.Refund || 0) : this.lbRefund.string = (e.Refund || 0).toString());
this.item = e;
this.itemID = t;
}
};
r([ c(cc.Label) ], t.prototype, "lbTime", void 0);
r([ c(cc.Label) ], t.prototype, "lbSID", void 0);
r([ c(cc.Label) ], t.prototype, "lbNickName", void 0);
r([ c(cc.Label) ], t.prototype, "lbBet", void 0);
r([ c(cc.Label) ], t.prototype, "lbRefund", void 0);
return r([ s ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
HacHongSessionDetailListView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "274d8RqARVJN4WrWOQSD/G8", "HacHongSessionDetailListView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = e("./HacHongSessionDetailItem"), u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.itemTemplate = null;
t.scrollView = null;
t.spawnCount = 0;
t.spacing = 0;
t.items = [];
t.content = null;
t.rootContentY = 0;
t.messages = [];
t.updateTimer = 0;
t.updateInterval = .1;
t.bufferZone = 200;
t.lastContentPosY = 0;
return t;
}
t.prototype.onLoad = function() {
this.items = [];
this.updateTimer = 0;
this.lastContentPosY = 0;
if (this.scrollView) {
this.content = this.scrollView.content;
this.rootContentY = this.content ? this.content.y : 0;
}
};
t.prototype.resetList = function() {
if (this.scrollView) {
this.items = [];
this.scrollView.stopAutoScroll();
if (this.content) {
this.content.y = this.rootContentY;
for (var e = this.content.children.slice(), t = e.length - 1; t >= 0; t--) e[t] && this.content.removeChild(e[t]);
}
}
};
t.prototype.getPositionInView = function(e) {
if (!e || !this.scrollView) return cc.v3(0, 0, 0);
var t = e.parent.convertToWorldSpaceAR(e.position);
return this.scrollView.node.convertToNodeSpaceAR(t);
};
t.prototype.initialize = function(e) {
if (e && Array.isArray(e) && 0 !== e.length && this.scrollView && this.itemTemplate && this.content) {
this.messages = e;
var t = this.messages.length, o = this.itemTemplate.height || 100;
this.content.height = t * (o + this.spacing) + this.spacing;
for (var n = Math.min(this.spawnCount, t), i = 0; i < n; ++i) {
var r = cc.instantiate(this.itemTemplate);
if (r) {
this.content.addChild(r);
r.setPosition(0, -o * (.5 + i) - this.spacing * (i + 1));
var a = r.getComponent(l.default);
a && this.messages[i] && a.updateItem(this.messages[i], i);
this.items.push(r);
}
}
this.rootContentY = this.content.y;
this.lastContentPosY = this.content.y;
}
};
t.prototype.update = function(e) {
if (this.scrollView && this.content && 0 !== this.items.length) {
this.updateTimer += e;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var t = this.items, o = this.bufferZone, n = this.scrollView.content.y < this.lastContentPosY, i = ((this.itemTemplate.height || 100) + this.spacing) * t.length, r = 0; r < t.length; ++r) if (t[r]) {
var a = this.getPositionInView(t[r]);
if (n) {
if (a.y < -o && t[r].y + i < 0) {
t[r].y = t[r].y + i;
if (c = t[r].getComponent(l.default)) {
var s = c.itemID - t.length;
void 0 !== this.messages[s] && s >= 0 && c.updateItem(this.messages[s], s);
}
}
} else if (a.y > o && t[r].y - i > -this.content.height) {
t[r].y = t[r].y - i;
var c;
if (c = t[r].getComponent(l.default)) {
s = c.itemID + t.length;
void 0 !== this.messages[s] && s < this.messages.length && c.updateItem(this.messages[s], s);
}
}
}
this.lastContentPosY = this.scrollView.content.y;
}
}
};
r([ c(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ c(cc.ScrollView) ], t.prototype, "scrollView", void 0);
r([ c ], t.prototype, "spawnCount", void 0);
r([ c ], t.prototype, "spacing", void 0);
r([ c ], t.prototype, "updateInterval", void 0);
r([ c ], t.prototype, "bufferZone", void 0);
return r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./HacHongSessionDetailItem": "HacHongSessionDetailItem"
} ],
HacHongSessionDetailView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c63799ABFBN2YqOBfIDqiZv", "HacHongSessionDetailView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = e("../../HacHongConst"), u = e("../../HacHongController"), p = e("./HacHongSessionDetailListView"), d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.rongSessionDetailListView = null;
t.hoSessionDetailListView = null;
t.lbSessionID = null;
t.nodeRong = null;
t.nodeHoa = null;
t.nodeHo = null;
t.nodeEffectRong = [];
t.nodeEffectHoa = [];
t.nodeEffectHo = [];
t.lbRong = null;
t.lbHoa = null;
t.lbHo = null;
t.spriteRong = null;
t.spriteHo = null;
t.lbTotalBetRong = null;
t.lbTotalBetHoa = null;
t.lbTotalBetHo = null;
t.lbTotalRefundRong = null;
t.lbTotalRefundHo = null;
t.btnNext = null;
t.btnBack = null;
t.animation = null;
t.index = 0;
t.gameHistory = [];
t.totalHistory = 0;
t.schedulerCallback = null;
return t;
}
t.prototype.onLoad = function() {
this.animation = this.node.getComponent(cc.Animation);
this.node.zIndex = 99;
};
t.prototype.onEnable = function() {
var e = this;
this.schedulerCallback = function() {
e.getSessionDetail();
};
cc.director.getScheduler().schedule(this.schedulerCallback, this, 1, 0, .2, !1);
this.animation && this.animation.play("openPopup");
};
t.prototype.checkStatusButton = function() {
this.btnNext && (this.btnNext.interactable = 0 !== this.index);
this.btnBack && (this.btnBack.interactable = this.index !== this.totalHistory - 1);
};
t.prototype.getSessionDetail = function() {
this.index = u.default.getInstance().getDetailIndex();
this.gameHistory = u.default.getInstance().getGameHistory() || [];
this.totalHistory = this.gameHistory.length;
this.checkStatusButton();
this.getSessionDetailById(this.index);
};
t.prototype.getSessionDetailById = function(e) {
var t, o = this;
if (!(!this.gameHistory || e < 0 || e >= this.gameHistory.length)) {
var n = this.gameHistory[e];
if (n) {
if (this.lbSessionID && n.SessionId) {
var i = null === (t = cc.Tool) || void 0 === t ? void 0 : t.getInstance();
i && i.convertUTCTime3 && n.CreatedDate ? this.lbSessionID.string = "Phiên: #" + n.SessionId + " - Ngày: " + i.convertUTCTime3(n.CreatedDate) : this.lbSessionID.string = "Phiên: #" + n.SessionId;
}
var r = n.Result || n.ResultValue, a = r === l.HacHongConst.HacHongBetSide.RONG, s = r === l.HacHongConst.HacHongBetSide.HO, c = r === l.HacHongConst.HacHongBetSide.HOA;
this.nodeRong && (this.nodeRong.active = !a);
this.nodeHo && (this.nodeHo.active = !s);
this.nodeHoa && (this.nodeHoa.active = !c);
this.nodeEffectRong.forEach(function(e) {
e && (e.active = a);
});
this.nodeEffectHo.forEach(function(e) {
e && (e.active = s);
});
this.nodeEffectHoa.forEach(function(e) {
e && (e.active = c);
});
var u = l.HacHongConst.api.getSessionDetail(n.SessionId);
lngui.Https.get(u, function(e) {
e && o.onDragonTigerGetSessionInfoResponse(e);
});
}
}
};
t.prototype.onDragonTigerGetSessionInfoResponse = function(e) {
var t;
if (e && Array.isArray(e)) {
var o = 0, n = 0, i = 0, r = 0, a = 0, s = [], c = [];
e.forEach(function(e) {
if (e.BetSide === l.HacHongConst.HacHongBetSide.RONG) {
s.push(e);
o += e.Bet || 0;
r += e.Refund || 0;
} else if (e.BetSide === l.HacHongConst.HacHongBetSide.HO) {
c.push(e);
n += e.Bet || 0;
a += e.Refund || 0;
} else e.BetSide === l.HacHongConst.HacHongBetSide.HOA && (i += e.Bet || 0);
});
if (s.length > 0 && this.rongSessionDetailListView) {
this.rongSessionDetailListView.resetList();
this.rongSessionDetailListView.initialize(s);
}
if (c.length > 0 && this.hoSessionDetailListView) {
this.hoSessionDetailListView.resetList();
this.hoSessionDetailListView.initialize(c);
}
var u = null === (t = cc.Tool) || void 0 === t ? void 0 : t.getInstance(), p = function(e) {
return u && u.formatNumberKTX ? u.formatNumberKTX(e) : e.toString();
};
this.lbTotalBetRong && (this.lbTotalBetRong.string = p(o));
this.lbTotalBetHo && (this.lbTotalBetHo.string = p(n));
this.lbTotalBetHoa && (this.lbTotalBetHoa.string = p(i));
this.lbTotalRefundRong && (this.lbTotalRefundRong.string = p(r));
this.lbTotalRefundHo && (this.lbTotalRefundHo.string = p(a));
}
};
t.prototype.nextSessionClicked = function() {
if (this.index > 0) {
this.index--;
this.rongSessionDetailListView && this.rongSessionDetailListView.resetList();
this.hoSessionDetailListView && this.hoSessionDetailListView.resetList();
this.getSessionDetailById(this.index);
this.checkStatusButton();
}
};
t.prototype.backSessionClicked = function() {
if (this.index < this.totalHistory - 1) {
this.index++;
this.rongSessionDetailListView && this.rongSessionDetailListView.resetList();
this.hoSessionDetailListView && this.hoSessionDetailListView.resetList();
this.getSessionDetailById(this.index);
this.checkStatusButton();
}
};
t.prototype.closeClicked = function() {
var e = this;
this.rongSessionDetailListView && this.rongSessionDetailListView.resetList();
this.hoSessionDetailListView && this.hoSessionDetailListView.resetList();
this.animation && this.animation.play("closePopup");
cc.director.getScheduler().schedule(function() {
var t;
e.animation && e.animation.stop();
var o = null === (t = cc.HacHongPopupController_789) || void 0 === t ? void 0 : t.getInstance();
o && o.destroySessionDetailView && o.destroySessionDetailView();
}, this, 1, 0, .12, !1);
};
t.prototype.onDestroy = function() {
this.rongSessionDetailListView && this.rongSessionDetailListView.resetList();
this.hoSessionDetailListView && this.hoSessionDetailListView.resetList();
this.schedulerCallback && cc.director.getScheduler().unschedule(this.schedulerCallback, this);
};
r([ c(p.default) ], t.prototype, "rongSessionDetailListView", void 0);
r([ c(p.default) ], t.prototype, "hoSessionDetailListView", void 0);
r([ c(cc.Label) ], t.prototype, "lbSessionID", void 0);
r([ c(cc.Node) ], t.prototype, "nodeRong", void 0);
r([ c(cc.Node) ], t.prototype, "nodeHoa", void 0);
r([ c(cc.Node) ], t.prototype, "nodeHo", void 0);
r([ c([ cc.Node ]) ], t.prototype, "nodeEffectRong", void 0);
r([ c([ cc.Node ]) ], t.prototype, "nodeEffectHoa", void 0);
r([ c([ cc.Node ]) ], t.prototype, "nodeEffectHo", void 0);
r([ c(cc.Label) ], t.prototype, "lbRong", void 0);
r([ c(cc.Label) ], t.prototype, "lbHoa", void 0);
r([ c(cc.Label) ], t.prototype, "lbHo", void 0);
r([ c(cc.Sprite) ], t.prototype, "spriteRong", void 0);
r([ c(cc.Sprite) ], t.prototype, "spriteHo", void 0);
r([ c(cc.Label) ], t.prototype, "lbTotalBetRong", void 0);
r([ c(cc.Label) ], t.prototype, "lbTotalBetHoa", void 0);
r([ c(cc.Label) ], t.prototype, "lbTotalBetHo", void 0);
r([ c(cc.Label) ], t.prototype, "lbTotalRefundRong", void 0);
r([ c(cc.Label) ], t.prototype, "lbTotalRefundHo", void 0);
r([ c(cc.Button) ], t.prototype, "btnNext", void 0);
r([ c(cc.Button) ], t.prototype, "btnBack", void 0);
return r([ s ], t);
}(lngui.UIPopup);
o.default = d;
cc._RF.pop();
}, {
"../../HacHongConst": "HacHongConst",
"../../HacHongController": "HacHongController",
"./HacHongSessionDetailListView": "HacHongSessionDetailListView"
} ],
HacHongSessionHistoryView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f9c9fd/8YhKHaEWk5sPG4sC", "HacHongSessionHistoryView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = e("./HacHongController"), u = e("./HacHongConst"), p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.SessionNode = null;
t.spSessions = [];
t.lbBlack = null;
t.lbRed = null;
t.lbSpade = null;
t.lbClobe = null;
t.lbDiamond = null;
t.lbHeart = null;
t.lbStraightt = null;
t.lbPair = null;
t.lbFlusht = null;
t.gameHistory = [];
return t;
}
o = t;
t.getInstance = function() {
return this._instance;
};
t.prototype.onLoad = function() {
o._instance = this;
};
t.prototype.onDestroy = function() {
o._instance === this && (o._instance = null);
};
t.prototype.updateGameHistoryUI = function(e) {
var t = this;
if (e) {
var o = 0, n = 0, i = 0, r = 0, a = 0, s = 0, c = 0, l = 0, p = 0, d = e.slice().reverse();
this.gameHistory = d;
d.forEach(function(e, d) {
var h;
if (e && !(d >= t.SessionNode.children.length)) {
var f = parseInt(null === (h = e.Result) || void 0 === h ? void 0 : h.toString()), g = f - 1;
switch (f) {
case u.HacHongConst.HacHongBetSide.Black:
o++;
break;

case u.HacHongConst.HacHongBetSide.Red:
n++;
break;

case u.HacHongConst.HacHongBetSide.Spade:
i++;
break;

case u.HacHongConst.HacHongBetSide.Clobe:
r++;
break;

case u.HacHongConst.HacHongBetSide.Diamond:
a++;
break;

case u.HacHongConst.HacHongBetSide.Heart:
s++;
break;

case u.HacHongConst.HacHongBetSide.Straight:
c++;
break;

case u.HacHongConst.HacHongBetSide.Pair:
l++;
break;

case u.HacHongConst.HacHongBetSide.Flush:
p++;
}
if (t.SessionNode.children[d] && t.spSessions[g]) {
var m = t.SessionNode.children[d].getComponent(cc.Sprite);
m && (m.spriteFrame = t.spSessions[g]);
}
}
});
this.lbBlack && (this.lbBlack.string = o.toString());
this.lbRed && (this.lbRed.string = n.toString());
this.lbSpade && (this.lbSpade.string = i.toString());
this.lbClobe && (this.lbClobe.string = r.toString());
this.lbDiamond && (this.lbDiamond.string = a.toString());
this.lbHeart && (this.lbHeart.string = s.toString());
this.lbStraightt && (this.lbStraightt.string = c.toString());
this.lbPair && (this.lbPair.string = l.toString());
this.lbFlusht && (this.lbFlusht.string = p.toString());
}
};
t.prototype.sessionDetailClicked = function(e, t) {
var o, n = parseInt(t.toString());
if (this.gameHistory && this.gameHistory.length > n) {
l.default.getInstance().setDetailIndex(n);
var i = null === (o = cc.HacHongPopupController_789) || void 0 === o ? void 0 : o.getInstance();
i && i.createSessionDetailView();
}
};
var o;
t._instance = null;
r([ c(cc.Node) ], t.prototype, "SessionNode", void 0);
r([ c([ cc.SpriteFrame ]) ], t.prototype, "spSessions", void 0);
r([ c(cc.Label) ], t.prototype, "lbBlack", void 0);
r([ c(cc.Label) ], t.prototype, "lbRed", void 0);
r([ c(cc.Label) ], t.prototype, "lbSpade", void 0);
r([ c(cc.Label) ], t.prototype, "lbClobe", void 0);
r([ c(cc.Label) ], t.prototype, "lbDiamond", void 0);
r([ c(cc.Label) ], t.prototype, "lbHeart", void 0);
r([ c(cc.Label) ], t.prototype, "lbStraightt", void 0);
r([ c(cc.Label) ], t.prototype, "lbPair", void 0);
r([ c(cc.Label) ], t.prototype, "lbFlusht", void 0);
return o = r([ s ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./HacHongConst": "HacHongConst",
"./HacHongController": "HacHongController"
} ],
HacHongSettingRoomView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "36529tocP5H+rDPZWrzkQd4", "HacHongSettingRoomView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.nodeOffset = null;
t.spriteSound = null;
t.spriteMusic = null;
t.sfSounds = [];
t.sfMusics = [];
t.sound = !0;
t.music = !0;
return t;
}
t.prototype.onLoad = function() {};
t.prototype.start = function() {
var e;
this.spriteSound && this.sfSounds.length >= 2 && (this.spriteSound.spriteFrame = this.sound ? this.sfSounds[0] : this.sfSounds[1]);
this.spriteMusic && this.sfMusics.length >= 2 && (this.spriteMusic.spriteFrame = this.music ? this.sfMusics[0] : this.sfMusics[1]);
null === (e = cc.AudioController) || void 0 === e || e.getInstance();
};
t.prototype.openSettingClicked = function() {
this.nodeOffset && (0 == this.nodeOffset.active ? this.nodeOffset.active = !0 : this.nodeOffset.active = !1);
};
t.prototype.closeSettingClicked = function() {
this.nodeOffset && (this.nodeOffset.active = !1);
};
t.prototype.soundClicked = function() {
var e, t;
this.sound = !this.sound;
var o = null === (e = cc.Tool) || void 0 === e ? void 0 : e.getInstance();
o && o.setItem("@Sound", this.sound);
this.spriteSound && this.sfSounds.length >= 2 && (this.spriteSound.spriteFrame = this.sound ? this.sfSounds[0] : this.sfSounds[1]);
var n = null === (t = cc.AudioController) || void 0 === t ? void 0 : t.getInstance();
n && n.enableSound(this.sound);
};
t.prototype.musicClicked = function() {
var e, t;
this.music = !this.music;
var o = null === (e = cc.Tool) || void 0 === e ? void 0 : e.getInstance();
o && o.setItem("@Music", this.music);
this.spriteMusic && this.sfMusics.length >= 2 && (this.spriteMusic.spriteFrame = this.music ? this.sfMusics[0] : this.sfMusics[1]);
var n = null === (t = cc.AudioController) || void 0 === t ? void 0 : t.getInstance();
n && n.enableMusic(this.music);
};
r([ c(cc.Node) ], t.prototype, "nodeOffset", void 0);
r([ c(cc.Sprite) ], t.prototype, "spriteSound", void 0);
r([ c(cc.Sprite) ], t.prototype, "spriteMusic", void 0);
r([ c([ cc.SpriteFrame ]) ], t.prototype, "sfSounds", void 0);
r([ c([ cc.SpriteFrame ]) ], t.prototype, "sfMusics", void 0);
return r([ s ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
HacHongShowCard: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "cf7f7XJIQpFUbL/4bv6fs8c", "HacHongShowCard");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = e("../HacHongConst"), u = e("../HacHongController"), p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.animationCard = null;
return t;
}
t.prototype.onLoad = function() {
u.default.getInstance().dragonTigerShowCard = this;
};
t.prototype.playAnimation = function(e) {
this.animationCard && (e === l.HacHongConst.HacHongBetSide.RONG ? this.animationCard.play("card-rong") : e === l.HacHongConst.HacHongBetSide.HO ? this.animationCard.play("card-ho") : this.animationCard.play("card-hoa"));
};
t.prototype.playAnimationCoin = function() {
this.animationCard && this.animationCard.play("coin");
};
t.prototype.stopAnimation = function() {
this.animationCard && this.animationCard.stop();
};
r([ c(cc.Animation) ], t.prototype, "animationCard", void 0);
return r([ s ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../HacHongConst": "HacHongConst",
"../HacHongController": "HacHongController"
} ],
HacHongTopItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bc53eLc209FYbmM+KpqZdEc", "HacHongTopItem");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.lbRank = null;
t.lbSID = null;
t.lbNickName = null;
t.lbTotalWin = null;
t.spriteTop = null;
t.spTop = [];
t.item = null;
t.itemID = 0;
return t;
}
t.prototype.updateItem = function(e, t) {
var o, n, i;
if (e) {
if (t < 3) {
this.lbRank && this.lbRank.node && (this.lbRank.node.active = !1);
if (this.spriteTop && this.spriteTop.node) {
this.spriteTop.node.active = !0;
this.spTop && this.spTop[t] && (this.spriteTop.spriteFrame = this.spTop[t]);
}
} else {
if (this.lbRank && this.lbRank.node) {
this.lbRank.node.active = !0;
this.lbRank.string = (t + 1).toString();
}
this.spriteTop && this.spriteTop.node && (this.spriteTop.node.active = !1);
}
if (this.lbSID) {
var r = null === (o = cc.Config) || void 0 === o ? void 0 : o.getInstance();
r && r.getServiceNameNoFormat && e.ServiceID ? this.lbSID.string = r.getServiceNameNoFormat(e.ServiceID) : this.lbSID.string = (null === (n = e.ServiceID) || void 0 === n ? void 0 : n.toString()) || "";
}
this.lbNickName && (this.lbNickName.string = e.DisplayName || e.NickName || "");
if (this.lbTotalWin) {
var a = null === (i = cc.Tool) || void 0 === i ? void 0 : i.getInstance();
a && a.formatNumber ? this.lbTotalWin.string = a.formatNumber(e.Award || 0) : this.lbTotalWin.string = (e.Award || 0).toString();
}
this.item = e;
this.itemID = t;
}
};
r([ c(cc.Label) ], t.prototype, "lbRank", void 0);
r([ c(cc.Label) ], t.prototype, "lbSID", void 0);
r([ c(cc.Label) ], t.prototype, "lbNickName", void 0);
r([ c(cc.Label) ], t.prototype, "lbTotalWin", void 0);
r([ c(cc.Sprite) ], t.prototype, "spriteTop", void 0);
r([ c([ cc.SpriteFrame ]) ], t.prototype, "spTop", void 0);
return r([ s ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
HacHongTopListView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "40892cFxjFC6rd3dmzpHU0o", "HacHongTopListView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = e("./HacHongTopItem"), u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.itemTemplate = null;
t.scrollView = null;
t.spawnCount = 0;
t.spacing = 0;
t.items = [];
t.content = null;
t.rootContentY = 0;
t.messages = [];
t.updateTimer = 0;
t.updateInterval = .1;
t.bufferZone = 200;
t.lastContentPosY = 0;
return t;
}
t.prototype.onLoad = function() {
this.items = [];
this.updateTimer = 0;
this.lastContentPosY = 0;
if (this.scrollView) {
this.content = this.scrollView.content;
this.rootContentY = this.content ? this.content.y : 0;
}
};
t.prototype.resetList = function() {
if (this.scrollView) {
this.items = [];
this.scrollView.stopAutoScroll();
if (this.content) {
this.content.y = this.rootContentY;
for (var e = this.content.children.slice(), t = e.length - 1; t >= 0; t--) e[t] && this.content.removeChild(e[t]);
}
}
};
t.prototype.getPositionInView = function(e) {
if (!e || !this.scrollView) return cc.v3(0, 0, 0);
var t = e.parent.convertToWorldSpaceAR(e.position);
return this.scrollView.node.convertToNodeSpaceAR(t);
};
t.prototype.initialize = function(e) {
if (e && Array.isArray(e) && 0 !== e.length && this.scrollView && this.itemTemplate && this.content) {
this.messages = e;
var t = this.messages.length, o = this.itemTemplate.height || 100;
this.content.height = t * (o + this.spacing) + this.spacing;
for (var n = Math.min(this.spawnCount, t), i = 0; i < n; ++i) {
var r = cc.instantiate(this.itemTemplate);
if (r) {
this.content.addChild(r);
r.setPosition(0, -o * (.5 + i) - this.spacing * (i + 1));
var a = r.getComponent(l.default);
a && this.messages[i] && a.updateItem(this.messages[i], i);
this.items.push(r);
}
}
this.rootContentY = this.content.y;
this.lastContentPosY = this.content.y;
}
};
t.prototype.update = function(e) {
if (this.scrollView && this.content && 0 !== this.items.length) {
this.updateTimer += e;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var t = this.items, o = this.bufferZone, n = this.scrollView.content.y < this.lastContentPosY, i = ((this.itemTemplate.height || 100) + this.spacing) * t.length, r = 0; r < t.length; ++r) if (t[r]) {
var a = this.getPositionInView(t[r]);
if (n) {
if (a.y < -o && t[r].y + i < 0) {
t[r].y = t[r].y + i;
if (c = t[r].getComponent(l.default)) {
var s = c.itemID - t.length;
void 0 !== this.messages[s] && s >= 0 && c.updateItem(this.messages[s], s);
}
}
} else if (a.y > o && t[r].y - i > -this.content.height) {
t[r].y = t[r].y - i;
var c;
if (c = t[r].getComponent(l.default)) {
s = c.itemID + t.length;
void 0 !== this.messages[s] && s < this.messages.length && c.updateItem(this.messages[s], s);
}
}
}
this.lastContentPosY = this.scrollView.content.y;
}
}
};
r([ c(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ c(cc.ScrollView) ], t.prototype, "scrollView", void 0);
r([ c ], t.prototype, "spawnCount", void 0);
r([ c ], t.prototype, "spacing", void 0);
r([ c ], t.prototype, "updateInterval", void 0);
r([ c ], t.prototype, "bufferZone", void 0);
return r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./HacHongTopItem": "HacHongTopItem"
} ],
HacHongTopView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "84259/9FCpOHYJ5KOJZv/Ld", "HacHongTopView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = e("../../HacHongConst"), u = e("./HacHongTopListView"), p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.dragonTigerTopListView = null;
t.schedulerCallback = null;
return t;
}
t.prototype.onLoad = function() {};
t.prototype.onEnable = function() {
var e = this;
this.schedulerCallback = function() {
e.getTopSessionWinners();
};
cc.director.getScheduler().schedule(this.schedulerCallback, this, 1, 0, .2, !1);
};
t.prototype.getTopSessionWinners = function() {
var e = this, t = l.HacHongConst.api.GetBigWinner;
lngui.Https.get(t, function(t) {
t && e.onDragonTigerGetBigWinnerResponse(t);
});
};
t.prototype.onDragonTigerGetBigWinnerResponse = function(e) {
if (e && Array.isArray(e) && 0 !== e.length && this.dragonTigerTopListView) {
this.dragonTigerTopListView.resetList();
this.dragonTigerTopListView.initialize(e);
}
};
t.prototype.onDestroy = function() {
this.dragonTigerTopListView && this.dragonTigerTopListView.resetList();
this.schedulerCallback && cc.director.getScheduler().unschedule(this.schedulerCallback, this);
};
r([ c(u.default) ], t.prototype, "dragonTigerTopListView", void 0);
return r([ s ], t);
}(lngui.UIPopup);
o.default = p;
cc._RF.pop();
}, {
"../../HacHongConst": "HacHongConst",
"./HacHongTopListView": "HacHongTopListView"
} ],
HacHongView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d5afdlvVwVCZoIZnAbmEAaN", "HacHongView");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = e("./HacHongController"), u = e("./HacHongConst"), p = e("./chip/HacHongMoveChip"), d = e("./HacHongButtonSideBet"), h = e("./HacHongResultEffectView"), f = e("../../framework/ui/UINumericLabelHelper"), g = e("./HacHongBetView"), m = (e("NetConfig"), 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.lbSID = null;
t.lbTimer = null;
t.lbTimerPrepare = null;
t.lbTotalUser = null;
t.lbTotalUserWin = null;
t.lbTotalBetBlack = null;
t.lbTotalBetRed = null;
t.lbTotalBetSpade = null;
t.lbTotalBetClobe = null;
t.lbTotalBetDiamond = null;
t.lbTotalBetHeart = null;
t.lbTotalBetStraight = null;
t.lbTotalBetPair = null;
t.lbTotalBetFlush = null;
t.lbJackpot = null;
t.skeCard = [];
t.spriteCard = [];
t.nodeCardStart = null;
t.prefabCardBack = null;
t.nodeBetSides = null;
t.spriteCardDefault = null;
t.prefabChat = null;
t.dealerSkeleton = null;
t.listAvatars = [];
t.altasCard = null;
t.HacHongHub = null;
t.mListenerKey = "OnDragonTigerToWebSocKet";
t.isPlaying = !1;
t.betLabelNodes = [ t.lbTotalBetBlack, t.lbTotalBetRed, t.lbTotalBetSpade, t.lbTotalBetClobe, t.lbTotalBetDiamond, t.lbTotalBetHeart, t.lbTotalBetStraight, t.lbTotalBetPair, t.lbTotalBetFlush ];
return t;
}
t.prototype.setBetLabel = function(e, t) {
if (e && e.node) {
e.string = t;
e.node.parent && (e.node.parent.active = "" !== t);
}
};
t.prototype.onLoad = function() {
this.dragonTigerController = l.default.getInstance();
this.dragonTigerController.initBetLog();
this.dragonTigerController.setBetLogSession(1);
this.dragonTigerController.setAvatars(this.listAvatars);
this.dragonTigerController.setDragonTigerView(this);
this.isPlaying = !1;
this.interval = null;
this.lastTimeReconnect = new Date().getTime();
this.connectHubDragonTiger();
this.currentState = -1;
this.currentTimeEllapse = -1;
this.dealerSkeleton.setSkin("HIT");
this.dealerSkeleton.setAnimation(0, "GIRL_Idle", !0);
this.moveCardToBurn = !1;
this.runSuffler = !1;
this.historyResult = "";
this.accountId = lngui.UserManager.instance.mainUserInfo.AccountID;
this.skeCard.forEach(function(e) {
e.getComponent(sp.Skeleton).setSkin("HIT");
});
};
t.prototype.onEnable = function() {
var e = lngui.UserManager.instance.mainUserInfo.Money;
lngui.GameCoreManager.instance.updateTotalGold(e);
};
t.prototype.playCardEffect = function() {};
t.prototype.onDestroy = function() {
var e = lngui.UserManager.instance.mainUserInfo.Money;
lngui.GameCoreManager.instance.updateTotalGold(e);
this.sendRequestOnHub(u.HacHongConst.MethodHubName.EXIT_LOBBY);
this.HacHongHub.close();
null !== this.interval && clearInterval(this.interval);
this.unscheduleAllCallbacks();
l.default.getInstance().setDragonTigerView(null);
};
t.prototype.reset = function() {
this.setBetLabel(this.lbTotalBetBlack, "");
this.setBetLabel(this.lbTotalBetRed, "");
this.setBetLabel(this.lbTotalBetSpade, "");
this.setBetLabel(this.lbTotalBetClobe, "");
this.setBetLabel(this.lbTotalBetDiamond, "");
this.setBetLabel(this.lbTotalBetHeart, "");
this.setBetLabel(this.lbTotalBetStraight, "");
this.setBetLabel(this.lbTotalBetPair, "");
this.setBetLabel(this.lbTotalBetFlush, "");
this.isTimer = !1;
this.timer = 0;
this.currentState = 999;
g.default.getInstance().reset();
h.default.getInstance().reset();
null !== this.interval && clearInterval(this.interval);
};
t.prototype.startTimer = function(e) {
null !== this.interval && clearInterval(this.interval);
var t = this;
this.timer = e;
this.isTimer = !0;
this.updateTimer(e);
this.interval = setInterval(function() {
if (t.isTimer) {
t.timer -= 1;
t.updateTimer(Math.round(t.timer));
}
}, 1e3);
};
t.prototype.stopTimer = function() {
this.isTimer = !1;
null !== this.interval && clearInterval(this.interval);
};
t.prototype.updateInfo = function(e) {
var t = e.IsShuffler, o = (e.CurrentState, e.Ellapsed);
this.currentTimeEllapse = o;
this.lbJackpot.scheduleProgress(e.JackpotAmount);
switch (e.CurrentState) {
case u.HacHongConst.HacHongState.BETTING:
if (this.currentState !== e.CurrentState) {
l.default.getInstance().stopResultEffect();
l.default.getInstance().disableBetAgain(!1);
d.default.getInstance().buttonSideBet.enableButtonBet(!0);
if (o > 7) {
this.onBeginBetting();
lngui.UITextManager.showCenterNotification("Đặt cửa");
}
o > 24 && !cc.game.isPaused() && this.cardSlide();
this.lbSID.string = "#" + e.SessionID;
}
break;

case u.HacHongConst.HacHongState.END_BETTING:
l.default.getInstance().disableBetAgain(!0);
d.default.getInstance().buttonSideBet.enableButtonBet(!1);
if (this.currentState !== e.CurrentState) {
lngui.UITextManager.showCenterNotification("Hết thời gian đặt cửa");
this.lbSID.string = "#" + e.SessionID;
o < 3 && cc.game.isPaused();
}
break;

case u.HacHongConst.HacHongState.RESULT:
d.default.getInstance().buttonSideBet.enableButtonBet(!1);
this.historyResult = e;
if (this.currentState !== e.CurrentState) {
l.default.getInstance().disableBetAgain(!0);
this.isPlaying = !1;
this.currentResult = e.Result.Result;
o > 6 && this.onOpenCard(e);
this.lbSID.string = "#" + e.SessionID;
}
6 == e.Ellapsed && cc.game.isPaused();
t && 4 == e.Ellapsed && !cc.game.isPaused() && (this.runSuffler = !0);
break;

case u.HacHongConst.HacHongState.PREPARE_NEW_SESSION:
d.default.getInstance().buttonSideBet.enableButtonBet(!1);
if (this.currentState !== e.CurrentState) {
l.default.getInstance().disableBetAgain(!0);
l.default.getInstance().resetPlayerUI();
l.default.getInstance().clearBetLog(l.default.getInstance().getBetLogSession());
l.default.getInstance().setBetLogSession(l.default.getInstance().getBetLogSession() + 1);
this.clearCard();
p.default.getInstance().clearChips();
this.reset();
this.lbSID.string = "#" + e.SessionID;
}
}
this.currentState = e.CurrentState;
l.default.getInstance().setCurrentState(parseInt(this.currentState));
this.startTimer(e.Ellapsed);
this.setBetLabel(this.lbTotalBetBlack, this.formatNumber(e.TotalBetBlack));
this.setBetLabel(this.lbTotalBetRed, this.formatNumber(e.TotalBetRed));
this.setBetLabel(this.lbTotalBetSpade, this.formatNumber(e.TotalBetSpade));
this.setBetLabel(this.lbTotalBetClobe, this.formatNumber(e.TotalBetClobe));
this.setBetLabel(this.lbTotalBetDiamond, this.formatNumber(e.TotalBetDiamond));
this.setBetLabel(this.lbTotalBetHeart, this.formatNumber(e.TotalBetHeart));
this.setBetLabel(this.lbTotalBetStraight, this.formatNumber(e.TotalBetStraight));
this.setBetLabel(this.lbTotalBetPair, this.formatNumber(e.TotalBetPair));
this.setBetLabel(this.lbTotalBetFlush, this.formatNumber(e.TotalBetFlush));
};
t.prototype.formatNumber = function(e) {
return 0 == parseInt(e) ? "" : u.HacHongConst.formatNumberToKMB(e);
};
t.prototype.updateTotalUser = function(e) {
this.lbTotalUser.string = e.toString();
};
t.prototype.cardSlide = function() {};
t.prototype.onBeginBetting = function() {
var e = this;
this.dealerSkeleton.setAnimation(0, "GIRL_DealCards", !1);
var t = !1;
this.dealerSkeleton.setCompleteListener(function() {
if (!t) {
t = !0;
console.log("Dealer RevealCard");
e.spriteCard.forEach(function(t) {
t.spriteFrame = e.altasCard.getSpriteFrame("icCardback");
t.node.active = !0;
});
e.dealerSkeleton.setCompleteListener(null);
}
});
this.dealerSkeleton.addAnimation(0, "GIRL_DealCards_end", !1);
this.dealerSkeleton.addAnimation(0, "GIRL_BeginBet", !1);
this.dealerSkeleton.addAnimation(0, "GIRL_Idle", !0);
};
t.prototype.onDealerClearCardHandle = function() {
this.spriteCard.forEach(function(e) {
e.node.stopAllActions();
e.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
e.node.active = !1;
})));
});
};
t.prototype.getSkeNameOpemCard = function(e) {
return "Cardreveal_" + (e % 4 == 0 ? "Spade" : e % 4 == 1 ? "Club" : e % 4 == 2 ? "Diamond" : "Heart") + "_" + (0 === Math.floor(e / 13) ? "A" : 1 === Math.floor(e / 13) ? "J" : 2 === Math.floor(e / 13) ? "Q" : 3 === Math.floor(e / 13) ? "K" : "0");
};
t.prototype.updateCardResult = function(e) {
try {
var t = e.Result.Card1, o = e.Result.Card2, n = e.Result.Card3;
this.spriteCard[0].spriteFrame = this.altasCard.getSpriteFrame("icCard" + t);
this.spriteCard[1].spriteFrame = this.altasCard.getSpriteFrame("icCard" + o);
this.spriteCard[2].spriteFrame = this.altasCard.getSpriteFrame("icCard" + n);
} catch (e) {}
};
t.prototype.onOpenCard = function(e) {
var t = this;
if (this.skeCard && !(this.skeCard.length < 3)) {
this.dealerSkeleton.setCompleteListener(null);
this.dealerSkeleton.setAnimation(0, "GIRL_RevealCard", !1);
this.dealerSkeleton.addAnimation(0, "GIRL_RevealCard_end", !1);
var o = [ e.Result.Card1, e.Result.Card2, e.Result.Card3 ], n = o.map(function(e) {
return t.getSkeNameOpemCard(e);
});
this.spriteCard.forEach(function(e) {
return e.node.active = !1;
});
for (var i = 0; i < 3; i++) {
this.skeCard[i].node.active = !0;
this.skeCard[i].clearTracks();
this.skeCard[i].setToSetupPose();
this.skeCard[i].setCompleteListener(null);
}
cc.Tween.stopAllByTarget(this.node);
cc.tween(this.node).delay(.33).call(function() {
t.skeCard[0].node.active = !0;
t.skeCard[0].setAnimation(0, n[0], !1);
t.spriteCard[0].spriteFrame = t.altasCard.getSpriteFrame("icCard" + o[0]);
var e = !1;
t.skeCard[0].setCompleteListener(function() {
if (!e) {
e = !0;
t.skeCard[0].node.active = !1;
t.skeCard[0].setCompleteListener(null);
}
});
t.spriteCard[0].node.active = !0;
}).delay(.6).call(function() {
t.skeCard[1].setAnimation(0, n[1], !1);
t.spriteCard[1].spriteFrame = t.altasCard.getSpriteFrame("icCard" + o[1]);
var e = !1;
t.skeCard[1].setCompleteListener(function() {
if (!e) {
e = !0;
t.skeCard[1].node.active = !1;
t.skeCard[1].setCompleteListener(null);
}
});
t.spriteCard[1].node.active = !0;
}).delay(.63).call(function() {
t.skeCard[2].setAnimation(0, n[2], !1);
t.spriteCard[2].spriteFrame = t.altasCard.getSpriteFrame("icCard" + o[2]);
var e = !1;
t.skeCard[2].setCompleteListener(function() {
if (!e) {
e = !0;
t.skeCard[2].node.active = !1;
t.skeCard[2].setCompleteListener(null);
}
});
t.spriteCard[2].node.active = !0;
}).delay(1.5).call(function() {
if (e.Ellapsed > 8) p.default.getInstance().chipMoveToCoin(t.currentResult, !1, 0); else try {
p.default.getInstance().removeChips(t.currentResult);
} catch (e) {}
try {
h.default.getInstance().playEffectWin(e.Result.BetSideWins);
} catch (e) {}
}).start();
}
};
t.prototype.runAnimationCard = function(e, t) {
e.clearTracks();
e.setAnimation(0, t, !1);
};
t.prototype.clearCard = function() {
try {
this.dealerSkeleton.setAnimation(0, "GIRL_ClearCards", !1);
this.spriteCard.forEach(function(e) {
e.node.active = !1;
});
this.dealerSkeleton.addAnimation(0, "GIRL_ClearCards_noIdle", !1);
} catch (e) {}
};
t.prototype.createNodeCardBack = function() {
var e = cc.instantiate(this.prefabCardBack), t = this.nodeCardStart.position;
e.position = t;
e.parent = this.nodeCardStart.parent;
e.rotation = -45;
e.scale = 1;
return e;
};
t.prototype.updateMoveChip = function(e, t) {
p.default.getInstance().moveChipWithStartPos(e, t);
};
t.prototype.initChipsBet = function(e) {
p.default.getInstance().initChipsBet(e);
};
t.prototype.activeCardBack = function(e) {
try {
this.listCardBack().map(function(t) {
return t.active = e;
});
} catch (e) {}
};
t.prototype.listCardBack = function() {
return [ this.nodeCard1.node, this.nodeCard2.node, this.nodeCard3.node ];
};
t.prototype.updateTimer = function(e) {
if (!(e < 1)) {
var t = e, o = cc.Color.GREEN;
switch (this.currentState) {
case u.HacHongConst.HacHongState.BETTING:
case u.HacHongConst.HacHongState.END_BETTING:
this.activeNodeTime(!0);
e <= 3 && (o = cc.Color.RED);
this.lbTimer.node.color = o;
this.lbTimer.string = t;
this.lbTimer.node.parent.active = !0;
this.lbTimerPrepare.node.parent.active = !1;
break;

case u.HacHongConst.HacHongState.RESULT:
this.activeNodeTime(!1);
o = cc.Color.WHITE;
this.lbTimer.node.parent.active = !1;
this.lbTimerPrepare.node.parent.active = !0;
this.lbTimerPrepare.string = t;
break;

case u.HacHongConst.HacHongState.PREPARE_NEW_SESSION:
this.activeNodeTime(!1);
o = cc.Color.WHITE;
this.lbTimerPrepare.node.parent.active = !0;
this.lbTimerPrepare.string = t;
this.lbTimer.node.parent.active = !1;
}
}
};
t.prototype.activeNodeTime = function(e) {
this.lbTimer.node.parent.parent.active = e;
};
t.prototype.connectHubDragonTiger = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
this.HacHongHub = new lngui.GateSignalR();
this.HacHongHub.connect(this.mListenerKey, u.HacHongConst.api.negotiate, u.HacHongConst.api.hub, u.HacHongConst.api.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
t.prototype.sendRequestOnHub = function(e, t, o) {
void 0 === e && (e = "");
void 0 === t && (t = "");
void 0 === o && (o = "");
console.log(e, t, o);
switch (e) {
case u.HacHongConst.MethodHubName.ENTER_LOBBY:
this.sendSignalR("EnterLobby", [ 4, 1 ]);
this.sendSignalR("PlayNow", []);
break;

case u.HacHongConst.MethodHubName.EXIT_LOBBY:
this.sendSignalR("ExitLobby", []);
break;

case u.HacHongConst.MethodHubName.PLAY_NOW:
this.sendSignalR("PlayNow", []);
break;

case u.HacHongConst.MethodHubName.BET:
this.sendSignalR("Bet", [ t, o ]);
break;

case u.HacHongConst.MethodHubName.REGISTER_LEAVE_ROOM:
this.sendSignalR("RegisterLeaveRoom", []);
break;

case u.HacHongConst.MethodHubName.UNREGISTER_LEAVE_ROOM:
this.sendSignalR("UnregisterLeaveRoom", []);
break;

case u.HacHongConst.MethodHubName.SEND_MESSAGE:
}
};
t.prototype.sendSignalR = function(e, t) {
lngui.ZLog.log("SendSocket==========================>" + e + "==data==" + JSON.stringify(t));
t = t || [];
this.HacHongHub && this.HacHongHub.send(e, t);
};
t.prototype.onResponeData = function(e) {
e.s && "error" == e.s || this.onHubMessage(e);
};
t.prototype.connectSuccess = function() {
console.log("connectSuccess =========>");
this.sendRequestOnHub(u.HacHongConst.MethodHubName.ENTER_LOBBY);
};
t.prototype.onHubMessage = function(e) {
var t = this;
if (("open" == e.s || "reconnect" == e.s || "1" == e.s) && !this.isConnect) {
this.isConnect = !0;
this.connectSuccess();
}
if (void 0 !== e.M && e.M.length > 0) {
var o = this;
e.M.map(function(e) {
switch (e.M) {
case u.HacHongConst.MethodHubOnName.PLAYER_LEAVE:
l.default.getInstance().unRegisterAllPlayer();
t.playerLeave(e.A);
break;

case u.HacHongConst.MethodHubOnName.JOIN_GAME:
l.default.getInstance().updatePlayerInfor(e.A[0]);
break;

case u.HacHongConst.MethodHubOnName.SESSION_INFO:
var n = e.A[0];
t.updateInfo(n);
l.default.getInstance().setSID(n.SessionID);
break;

case u.HacHongConst.MethodHubOnName.GAME_HISTORY:
break;

case u.HacHongConst.MethodHubOnName.BET_OF_ACCOUNT:
t.dragonTigerController.updateBetInfoFromServer(e.A[0]);
break;

case u.HacHongConst.MethodHubOnName.BET_SUCCESS:
n = e.A[0];
lngui.UIWaitingLayout.hideWaiting();
t.isPlaying = !0;
var i = t.dragonTigerController.getBetLogSession();
t.dragonTigerController.setBetLog({
sessionID: i,
value: e.A[0].BetValue,
betSide: e.A[0].BetSide
});
lngui.UserManager.instance.mainUserInfo.Money = e.A[1];
lngui.GameCoreManager.instance.updateTotalGold(lngui.UserManager.instance.mainUserInfo.Money);
t.dragonTigerController.updateTotalBetValue(e.A[0].BetSide, e.A[0].SumaryBet);
t.dragonTigerController.updateBalanceCurrPlayer(e.A[1]);
t.updateMoveChip([ e.A[0].AccountID, e.A[0].BetValue, e.A[0].BetSide ], !0);
lngui.UITextManager.showCenterNotification("Đặt cược thành công");
break;

case u.HacHongConst.MethodHubOnName.WIN_RESULT:
n = e.A[0];
try {
setTimeout(function() {
lngui.UserManager.instance.mainUserInfo.Money = n.Balance;
lngui.GameCoreManager.instance.updateTotalGold(lngui.UserManager.instance.mainUserInfo.Money);
l.default.getInstance().resetBetInfo();
l.default.getInstance().winResult(n);
}, 2500);
} catch (e) {}
break;

case u.HacHongConst.MethodHubOnName.WIN_RESULT_VIP:
if (e.A.length > 0) try {
setTimeout(function() {
l.default.getInstance().winResultVip(e.A[0]);
}, 2500);
} catch (e) {}
break;

case u.HacHongConst.MethodHubOnName.MESSAGE:
(n = e.A[0]).Description ? lngui.UIPopupManager.instance.showPopup(n.Description) : n.Message ? lngui.UIPopupManager.instance.showPopup(n.Message) : lngui.UIPopupManager.instance.showPopup(n);
break;

case u.HacHongConst.MethodHubOnName.TOTAL_WIN_MONEY:
var r = e.A[0];
try {
p.default.getInstance().chipMoveToSideWin(o.currentResult);
setTimeout(function() {
try {
p.default.getInstance().chipMoveToCoin(o.currentResult, !0, 0);
} catch (e) {}
}, 1500);
} catch (e) {}
parseInt(r) > 0 && setTimeout(function() {
try {
o.lbTotalUserWin.string = "+" + u.HacHongConst.formatNumber(r);
o.lbTotalUserWin.node.parent.getComponent(cc.Animation).play("total-money-animation");
} catch (e) {}
}, 2e3);
break;

case u.HacHongConst.MethodHubOnName.REJOIN:
var a = e.A[0];
if (a.length > 0) {
var s = t;
a.map(function(e) {
0 != e.length && e.map(function(e) {
var t = [ e.BetValue, e.BetSide ];
s.initChipsBet(t);
});
});
}
break;

case u.HacHongConst.MethodHubOnName.BET_SESSION:
if (e.A[0].length > 0) {
var c = t;
e.A[0].map(function(e) {
0 != e.length && e.map(function(e) {
var t = [ e.BetValue, e.BetSide, e.AccountID ];
c.initChipsBet(t);
});
});
}
break;

case u.HacHongConst.MethodHubOnName.BET_USER:
if ((n = e.A)[2] != t.accountId) {
t.updateMoveChip(n, !1);
l.default.getInstance().updatePlayerBalance(n);
}
break;

case u.HacHongConst.MethodHubOnName.SUMMARY_PLAYER:
t.updateTotalUser(e.A[0]);
break;

case u.HacHongConst.MethodHubOnName.VIP_PLAYERS:
var d = e.A[0];
d.length > 0 && l.default.getInstance().updatePlayersUI(d);
break;

case u.HacHongConst.MethodHubOnName.OTHER_DEVICE:
break;

case u.HacHongConst.MethodHubOnName.RECEIVE_MESSAGE:
l.default.getInstance().playerShowBubbleChat(e.A);
}
});
} else if (e.R && e.R.AccountID) {
this.sendRequestOnHub(u.HacHongConst.MethodHubName.PLAY_NOW);
lngui.UIWaitingLayout.hideWaiting();
} else e.I;
};
t.prototype.playerLeave = function(e) {
if (e[0] === lngui.UserManager.instance.mainUserInfo.AccountID) {
var t = e[1];
this.backClicked();
lngui.UIPopupManager.instance.showPopup(t);
}
};
t.prototype.backClicked = function() {
lngui.UIScreenManager.instance.popToRootScreen();
};
t.prototype.cardMoveTo = function(e, t, o) {
var n = cc.moveTo(o, t);
n.easing(cc.easeInOut(3));
e.runAction(n);
var i = cc.scaleTo(o, 1);
e.runAction(i);
var r = cc.scaleTo(o, 1.5, 1.5);
e.runAction(r);
var a = cc.rotateTo(o, 0);
e.runAction(a);
};
r([ c(cc.Label) ], t.prototype, "lbSID", void 0);
r([ c(cc.Label) ], t.prototype, "lbTimer", void 0);
r([ c(cc.Label) ], t.prototype, "lbTimerPrepare", void 0);
r([ c(cc.Label) ], t.prototype, "lbTotalUser", void 0);
r([ c(cc.Label) ], t.prototype, "lbTotalUserWin", void 0);
r([ c(cc.Label) ], t.prototype, "lbTotalBetBlack", void 0);
r([ c(cc.Label) ], t.prototype, "lbTotalBetRed", void 0);
r([ c(cc.Label) ], t.prototype, "lbTotalBetSpade", void 0);
r([ c(cc.Label) ], t.prototype, "lbTotalBetClobe", void 0);
r([ c(cc.Label) ], t.prototype, "lbTotalBetDiamond", void 0);
r([ c(cc.Label) ], t.prototype, "lbTotalBetHeart", void 0);
r([ c(cc.Label) ], t.prototype, "lbTotalBetStraight", void 0);
r([ c(cc.Label) ], t.prototype, "lbTotalBetPair", void 0);
r([ c(cc.Label) ], t.prototype, "lbTotalBetFlush", void 0);
r([ c(f.default) ], t.prototype, "lbJackpot", void 0);
r([ c(sp.Skeleton) ], t.prototype, "skeCard", void 0);
r([ c(cc.Sprite) ], t.prototype, "spriteCard", void 0);
r([ c(cc.Node) ], t.prototype, "nodeCardStart", void 0);
r([ c(cc.Prefab) ], t.prototype, "prefabCardBack", void 0);
r([ c(cc.Node) ], t.prototype, "nodeBetSides", void 0);
r([ c(cc.SpriteFrame) ], t.prototype, "spriteCardDefault", void 0);
r([ c(cc.Prefab) ], t.prototype, "prefabChat", void 0);
r([ c(sp.Skeleton) ], t.prototype, "dealerSkeleton", void 0);
r([ c(cc.SpriteFrame) ], t.prototype, "listAvatars", void 0);
r([ c(cc.SpriteAtlas) ], t.prototype, "altasCard", void 0);
return r([ s ], t);
}(cc.Component));
o.default = m;
cc._RF.pop();
}, {
"../../framework/ui/UINumericLabelHelper": void 0,
"./HacHongBetView": "HacHongBetView",
"./HacHongButtonSideBet": "HacHongButtonSideBet",
"./HacHongConst": "HacHongConst",
"./HacHongController": "HacHongController",
"./HacHongResultEffectView": "HacHongResultEffectView",
"./chip/HacHongMoveChip": "HacHongMoveChip",
NetConfig: void 0
} ]
}, {}, [ "HacHong.Chat.NetworkClient", "HacHongChat", "HacHongAudioTypes", "HacHongAudios", "HacHongBetView", "HacHongButtonBet", "HacHongButtonSideBet", "HacHongConst", "HacHongController", "HacHongInfoView", "HacHongResultEffectView", "HacHongSessionHistoryView", "HacHongSettingRoomView", "HacHongView", "HacHongCardSlide", "HacHongChatItem", "HacHongMoveChip", "HacHongGetBigWinnerCommand", "HacHongGetHistoryCommand", "HacHongGetSessionInfoCommand", "HacHongGetSoiCauCommand", "HacHongGroupUserCommand", "HacHongGroupItem", "HacHongGroupUserListView", "HacHongGroupUserView", "HacHongPlayer", "HacHongGraph100View", "HacHongGraphCard3View", "HacHongGraphCatCauView", "HacHongGraphSumView", "HacHongGraphView", "HacHongHistoryItem", "HacHongHistoryListView", "HacHongHistoryView", "HacHongSessionDetailData", "HacHongSessionDetailItem", "HacHongSessionDetailListView", "HacHongSessionDetailView", "HacHongTopItem", "HacHongTopListView", "HacHongTopView", "HacHongShowCard" ]);