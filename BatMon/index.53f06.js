window.__require = function t(e, n, o) {
function i(s, r) {
if (!n[s]) {
if (!e[s]) {
var l = s.split("/");
l = l[l.length - 1];
if (!e[l]) {
var c = "function" == typeof __require && __require;
if (!r && c) return c(l, !0);
if (a) return a(l, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = l;
}
var u = n[s] = {
exports: {}
};
e[s][0].call(u.exports, function(t) {
return i(e[s][1][t] || t);
}, u, u.exports, t, e, n, o);
}
return n[s].exports;
}
for (var a = "function" == typeof __require && __require, s = 0; s < o.length; s++) i(o[s]);
return i;
}({
"BatMon.Chat.NetworkClient": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b166dKFxAhHUIRrq3VNa5h4", "BatMon.Chat.NetworkClient");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("./BatMonChat"), r = cc._decorator, l = r.ccclass, c = (r.property, function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.isConnect = !1;
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
n._instance = this;
};
e.prototype.connect = function() {
var t = {
url: "https://chat." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
ip: "http://18.138.207.162:8092/signalr/negotiate",
hub: "chatHub",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate
};
cc.systemEvent.off("OnChatBatMonSocketEvent", this.onResponeData, this);
cc.systemEvent.on("OnChatBatMonSocketEvent", this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect("OnChatBatMonSocketEvent", t.url, t.hub, t.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.connect();
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.closeWS();
};
e.prototype.onResponeData = function(t) {
this.isEmpty(t) || t.s && "error" == t.s || this.onWebSocketCallback(t);
};
e.prototype.isEmpty = function(t) {
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return JSON.stringify(t) === JSON.stringify({});
};
e.prototype.onWebSocketCallback = function(t) {
if (("open" == t.s || "reconnect" == t.s || "1" == t.s) && !this.isConnect) {
this.isConnect = !0;
this.connectSuccess();
this.registerChat();
}
t.R < 0 && lngui.UITextManager.showCenterNotification("Lỗi " + t.R);
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, n = 0; n < e; ++n) {
var o = t.M[n];
if (o.A && null != o.A[0] && null != o.A[0]) {
var i = o.A[0];
switch (o.M) {
case "receiveMessage":
s.default.instance.receiveMessage(i);
break;

case "listLastMessages":
s.default.instance.listLastMessages(i);
}
}
}
};
e.prototype.registerChat = function() {
this.sendSignalR("RegisterChat", [ s.default.instance.chatChanel ]);
};
e.prototype.pingPong = function() {
this.sendSignalR("PingPong", []);
};
e.prototype.connectSuccess = function() {
lngui.ZLog.log("Connect Sucesss");
};
e.prototype.closeWS = function() {
cc.systemEvent.off("OnChatBatMonSocketEvent", this.onResponeData, this);
this.mSignalr.close();
lngui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
this.isConnect = !1;
};
e.prototype.sendSignalR = function(t, e) {
lngui.ZLog.log("SendSocket=======>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
var n;
e._instance = null;
return n = a([ l ], e);
}(cc.Component));
n.default = c;
cc._RF.pop();
}, {
"./BatMonChat": "BatMonChat"
} ],
BatMonAudioTypes: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "130e7WCebRIPY2dF9apEXp2", "BatMonAudioTypes");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.BatMonAudioTypes = void 0;
(function(t) {
t.BACKGROUND = "BACKGROUND";
t.BET = "BET";
t.CARD_SLIDE = "CARD_SLIDE";
t.CARD_SLIDE_BURN = "CARD_SLIDE_BURN";
t.CARD_SLIDE_RONG = "CARD_SLIDE_RONG";
t.CARD_SLIDE_HO = "CARD_SLIDE_HO";
t.CARD_OPEN = "CARD_OPEN";
t.CARD_BURN_MOVE_TO_BOX = "CARD_BURN_MOVE_TO_BOX";
t.SELECT_CHIP = "SELECT_CHIP";
t.GET_COIN = "GET_COIN";
})(n.BatMonAudioTypes || (n.BatMonAudioTypes = {}));
cc._RF.pop();
}, {} ],
BatMonAudios: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "460959jG1FHTb17Vp72skh0", "BatMonAudios");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, l = s.property, c = t("./BatMonConst"), u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.backgroundSound = null;
e.betSound = null;
e.cardsSlide = null;
e.cardsSlideBurn = null;
e.cardsSlideRong = null;
e.cardsSlideHo = null;
e.cardBurnMoveToBox = null;
e.cardOpen = null;
e.selectChip = null;
e.getCoin = null;
return e;
}
e.prototype.onLoad = function() {
var t, e = null === (t = cc.AudioController) || void 0 === t ? void 0 : t.getInstance();
e && e.setAudioPool && e.setAudioPool(this);
};
e.prototype.enableMusic = function(t) {
if (this.backgroundSound) if (t) {
if (!this.backgroundSound.isPlaying) {
this.backgroundSound.play();
this.backgroundSound.volume = .5;
}
} else this.backgroundSound.stop();
};
e.prototype.enableSound = function(t) {
[ this.betSound, this.cardsSlideBurn, this.cardsSlideHo, this.cardsSlideRong, this.cardBurnMoveToBox, this.cardOpen, this.selectChip, this.getCoin ].forEach(function(e) {
e && (e.mute = !t);
});
this.betSound && (this.betSound.volume = .2);
this.getCoin && (this.getCoin.volume = .2);
this.selectChip && (this.selectChip.volume = .2);
};
e.prototype.getAudioClip = function(t) {
var e = c.BatMonConst.BatMonAudioTypes;
if (!e) return null;
switch (t) {
case e.BACKGROUND:
return this.backgroundSound;

case e.BET:
return this.betSound;

case e.CARD_SLIDE_BURN:
return this.cardsSlideBurn;

case e.CARD_SLIDE_RONG:
return this.cardsSlideRong;

case e.CARD_SLIDE_HO:
return this.cardsSlideHo;

case e.CARD_BURN_MOVE_TO_BOX:
return this.cardBurnMoveToBox;

case e.CARD_OPEN:
return this.cardOpen;

case e.SELECT_CHIP:
return this.selectChip;

case e.GET_COIN:
return this.getCoin;

default:
return null;
}
};
a([ l(cc.AudioSource) ], e.prototype, "backgroundSound", void 0);
a([ l(cc.AudioSource) ], e.prototype, "betSound", void 0);
a([ l(cc.AudioSource) ], e.prototype, "cardsSlide", void 0);
a([ l(cc.AudioSource) ], e.prototype, "cardsSlideBurn", void 0);
a([ l(cc.AudioSource) ], e.prototype, "cardsSlideRong", void 0);
a([ l(cc.AudioSource) ], e.prototype, "cardsSlideHo", void 0);
a([ l(cc.AudioSource) ], e.prototype, "cardBurnMoveToBox", void 0);
a([ l(cc.AudioSource) ], e.prototype, "cardOpen", void 0);
a([ l(cc.AudioSource) ], e.prototype, "selectChip", void 0);
a([ l(cc.AudioSource) ], e.prototype, "getCoin", void 0);
return a([ r ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"./BatMonConst": "BatMonConst"
} ],
BatMonBetView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "71bb8kjtKtC+Lgc3m+xdBBs", "BatMonBetView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, l = s.property, c = t("./BatMonController"), u = t("./BatMonConst"), p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.layoutButtonChips = null;
e.lbYellowBet = null;
e.lbGreenBet = null;
e.lbTurqousieBet = null;
e.lbBlueBet = null;
e.lbRedBet = null;
e.lbPinkBet = null;
e.lbPurpleBet = null;
e.lbWhiteBet = null;
e.nodeBetX2 = null;
e.nodeBetAgain = null;
e.balanceBet = 5e3;
e.totalBet = 0;
e.betSide = 0;
e.listBet = [];
e.btnBetX2 = null;
e.btnBetAgain = null;
return e;
}
n = e;
e.getInstance = function() {
return this._instance;
};
e.prototype.setBetLabel = function(t, e) {
if (t && t.node) {
t.string = e;
t.node.parent && (t.node.parent.active = "" !== e);
}
};
e.prototype.onLoad = function() {
n._instance = this;
c.default.getInstance().setBatMonBetView(this);
this.reset();
this.balanceBet = 1e3;
this.totalBet = 0;
this.betSide = 0;
this.nodeBetX2 && (this.btnBetX2 = this.nodeBetX2.getComponent(cc.Button));
this.nodeBetAgain && (this.btnBetAgain = this.nodeBetAgain.getComponent(cc.Button));
};
e.prototype.onDestroy = function() {
n._instance === this && (n._instance = null);
c.default.getInstance().setBatMonBetView(null);
};
e.prototype.reset = function() {
this.setBetLabel(this.lbYellowBet, "");
this.setBetLabel(this.lbGreenBet, "");
this.setBetLabel(this.lbTurqousieBet, "");
this.setBetLabel(this.lbBlueBet, "");
this.setBetLabel(this.lbRedBet, "");
this.setBetLabel(this.lbPinkBet, "");
this.setBetLabel(this.lbPurpleBet, "");
this.setBetLabel(this.lbWhiteBet, "");
};
e.prototype.setBalanceBet = function(t, e) {
if (parseInt(e.toString()) != this.balanceBet) {
this.resetStateBtnBet();
if (t && t.target && this.layoutButtonChips) {
var n = t.target._name || t.target.name, o = this.layoutButtonChips.getChildByName(n);
if (o) {
t.target.children[0].active = !0;
var i = cc.moveTo(.2, o.position.x, -32.5);
i.easing(cc.easeInOut(.3));
t.target.runAction(i);
this.balanceBet = parseInt(e.toString());
}
}
}
};
e.prototype.resetStateBtnBet = function() {
this.layoutButtonChips && this.layoutButtonChips.children.forEach(function(t) {
t.children[0].active = !1;
var e = cc.moveTo(.2, t.position.x, -42.5);
e.easing(cc.easeInOut(.3));
t.runAction(e);
});
};
e.prototype.updateTotalBetValue = function(t, e) {
var n = this.formatNumber(e);
switch (parseInt(t.toString())) {
case u.BatMonConst.BatMonBetSide.Yellow:
this.setBetLabel(this.lbYellowBet, n);
break;

case u.BatMonConst.BatMonBetSide.Green:
this.setBetLabel(this.lbGreenBet, n);
break;

case u.BatMonConst.BatMonBetSide.Turqouise:
this.setBetLabel(this.lbTurqousieBet, n);
break;

case u.BatMonConst.BatMonBetSide.Blue:
this.setBetLabel(this.lbBlueBet, n);
break;

case u.BatMonConst.BatMonBetSide.Red:
this.setBetLabel(this.lbRedBet, n);
break;

case u.BatMonConst.BatMonBetSide.Pink:
this.setBetLabel(this.lbPinkBet, n);
break;

case u.BatMonConst.BatMonBetSide.Purple:
this.setBetLabel(this.lbPurpleBet, n);
break;

case u.BatMonConst.BatMonBetSide.White:
this.setBetLabel(this.lbWhiteBet, n);
}
};
e.prototype.formatNumber = function(t) {
return 0 == parseInt(t) ? "" : u.BatMonConst.formatNumberToKMB(t);
};
e.prototype.updateBetInfoFromServer = function(t) {
if (t) {
this.listBet = t;
var e = this;
t.forEach(function(t) {
e.updateBetInfo(t);
});
}
};
e.prototype.updateBetInfo = function(t) {
if (t) {
var e = this.formatNumber(t.BetValue);
switch (t.BetSide) {
case u.BatMonConst.BatMonBetSide.Yellow:
this.setBetLabel(this.lbYellowBet, e);
break;

case u.BatMonConst.BatMonBetSide.Green:
this.setBetLabel(this.lbGreenBet, e);
break;

case u.BatMonConst.BatMonBetSide.Turqouise:
this.setBetLabel(this.lbTurqousieBet, e);
break;

case u.BatMonConst.BatMonBetSide.Blue:
this.setBetLabel(this.lbBlueBet, e);
break;

case u.BatMonConst.BatMonBetSide.Red:
this.setBetLabel(this.lbRedBet, e);
break;

case u.BatMonConst.BatMonBetSide.Pink:
this.setBetLabel(this.lbPinkBet, e);
break;

case u.BatMonConst.BatMonBetSide.Purple:
this.setBetLabel(this.lbPurpleBet, e);
break;

case u.BatMonConst.BatMonBetSide.White:
this.setBetLabel(this.lbWhiteBet, e);
}
}
};
e.prototype.setBetSide = function(t, e) {
var n;
this.betSide = parseInt(e.toString());
if (lngui.UserManager.instance.mainUserInfo.Money < this.balanceBet) lngui.UIPopupManager.instance.showPopup("Số dư không đủ"); else {
var o = this.betSide - 1, i = (t.target || t).parent;
if (i) {
var a = null === (n = i.getChildByName("ngoc")) || void 0 === n ? void 0 : n.getComponent(sp.Skeleton);
if (a && o >= 0 && o < u.BatMonConst.BatMonAnimName.animChonNgoc.length) {
a.setAnimation(0, u.BatMonConst.BatMonAnimName.animChonNgoc[o]);
a.addAnimation(0, u.BatMonConst.BatMonAnimName.animNgocIdle[o]);
}
}
c.default.getInstance().sendRequestOnHub(u.BatMonConst.MethodHubName.BET, this.balanceBet, this.betSide);
this.disableBetAgain(!0);
}
};
e.prototype.sendRequestBet = function(t, e) {
return c.default.getInstance().sendRequestOnHub(u.BatMonConst.MethodHubName.BET, t, e);
};
e.prototype.onBetAgain = function(t, e) {
var n = this;
e = parseInt(e.toString());
var o = c.default.getInstance().getBetLogBySessionID(c.default.getInstance().getBetLogSession());
if (0 !== o.length) {
for (var i = function(t) {
o.forEach(function(e, o) {
var i = setTimeout(function() {
if (c.default.getInstance().getCurrentState() === u.BatMonConst.BatMonState.BETTING && e.sessionID === c.default.getInstance().getBetLogSession() - 1) this.sendRequestBet(e.value, e.betSide); else try {
clearTimeout(i);
} catch (t) {
console.log(t);
}
}.bind(n), 120 * o * t);
});
}, a = 1; a <= e; a++) i(a);
this.disableBetAgain(!0);
} else lngui.UITextManager.showCenterNotification("Chưa có dữ liệu của phiên trước.");
};
e.prototype.disableBetAgain = function(t) {
this.btnBetAgain && (this.btnBetAgain.interactable = !t);
this.btnBetX2 && (this.btnBetX2.interactable = !t);
var e = cc.Color.WHITE;
t && (e = cc.Color.GRAY);
this.nodeBetX2 && (this.nodeBetX2.color = e);
this.nodeBetAgain && (this.nodeBetAgain.color = e);
};
e.prototype.getBetSide = function() {
return this.betSide;
};
var n;
e._instance = null;
a([ l(cc.Node) ], e.prototype, "layoutButtonChips", void 0);
a([ l(cc.Label) ], e.prototype, "lbYellowBet", void 0);
a([ l(cc.Label) ], e.prototype, "lbGreenBet", void 0);
a([ l(cc.Label) ], e.prototype, "lbTurqousieBet", void 0);
a([ l(cc.Label) ], e.prototype, "lbBlueBet", void 0);
a([ l(cc.Label) ], e.prototype, "lbRedBet", void 0);
a([ l(cc.Label) ], e.prototype, "lbPinkBet", void 0);
a([ l(cc.Label) ], e.prototype, "lbPurpleBet", void 0);
a([ l(cc.Label) ], e.prototype, "lbWhiteBet", void 0);
a([ l(cc.Node) ], e.prototype, "nodeBetX2", void 0);
a([ l(cc.Node) ], e.prototype, "nodeBetAgain", void 0);
return n = a([ r ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {
"./BatMonConst": "BatMonConst",
"./BatMonController": "BatMonController"
} ],
BatMonButtonSideBet: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "2d7a8mRbExDe6kPXR84ooit", "BatMonButtonSideBet");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, l = s.property, c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.btnNodeYellow = null;
e.btnNodeGreen = null;
e.btnNodeTurqousie = null;
e.btnNodeBlue = null;
e.btnNodeRed = null;
e.btnNodePink = null;
e.btnNodePurple = null;
e.btnNodeWhite = null;
return e;
}
n = e;
e.getInstance = function() {
return this._instance;
};
e.prototype.onLoad = function() {
n._instance = this;
};
e.prototype.onDestroy = function() {
n._instance === this && (n._instance = null);
};
e.prototype.enableButtonBet = function(t) {
this.commonActive(this.btnNodeYellow, t);
this.commonActive(this.btnNodeGreen, t);
this.commonActive(this.btnNodeTurqousie, t);
this.commonActive(this.btnNodeBlue, t);
this.commonActive(this.btnNodeRed, t);
this.commonActive(this.btnNodePink, t);
this.commonActive(this.btnNodePurple, t);
this.commonActive(this.btnNodeWhite, t);
};
e.prototype.commonActive = function(t, e) {
if (t) {
var n = t.getComponent(cc.Button);
n && (n.interactable = e);
}
};
var n;
e._instance = null;
a([ l(cc.Node) ], e.prototype, "btnNodeYellow", void 0);
a([ l(cc.Node) ], e.prototype, "btnNodeGreen", void 0);
a([ l(cc.Node) ], e.prototype, "btnNodeTurqousie", void 0);
a([ l(cc.Node) ], e.prototype, "btnNodeBlue", void 0);
a([ l(cc.Node) ], e.prototype, "btnNodeRed", void 0);
a([ l(cc.Node) ], e.prototype, "btnNodePink", void 0);
a([ l(cc.Node) ], e.prototype, "btnNodePurple", void 0);
a([ l(cc.Node) ], e.prototype, "btnNodeWhite", void 0);
return n = a([ r ], e);
}(cc.Component);
n.default = c;
cc._RF.pop();
}, {} ],
BatMonChat: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "46a89NYLO1DnYk2p2uUVWtn", "BatMonChat");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("./BatMon.Chat.NetworkClient"), r = cc._decorator, l = r.ccclass, c = r.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.templateMessage = null;
e.templateMessageTip = null;
e.spriteFramesTip = [];
e.listChat = null;
e.NodeTip = null;
e.scrollListChat = null;
e.txtInputChat = null;
e.DealerName = null;
e.nameDealer = null;
e.itemData = [ {
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
return e;
}
n = e;
e.prototype.onLoad = function() {
this.chatChanel = "eightgate";
};
e.prototype.touchSendChat = function() {
if (this.txtInputChat.string.length) {
s.default.instance.sendSignalR("SendMessage", [ this.txtInputChat.string, this.chatChanel ]);
this.txtInputChat.string = "";
}
};
e.prototype.touchShowChat = function() {
this.node.parent.active = !this.node.parent.active;
};
e.prototype.touchShowTip = function() {
var t = this;
if (this.NodeTip.active) this.NodeTip.active = !1; else {
this.NodeTip.active = !0;
setTimeout(function() {
t.NodeTip.active = !1;
}, 3e3);
}
};
e.prototype.touchSendTip = function(t, e) {
var n = this.itemData.find(function(t) {
return t.iId === parseInt(e);
});
n && s.default.instance.sendSignalR("SendTip", [ this.chatChanel, n.iId, n.iN, this.nameDealer ]);
};
e.prototype.listLastMessages = function(t) {
if (0 != t.length) {
this.listChat.removeAllChildren();
if (t) for (var e = 0; e < t.length; e++) {
var n = t[e], o = n.n, i = n.c;
if (void 0 !== o && void 0 !== i && "SYSTEM" != o && "SYSTEM" != i) {
if ("SYSTEM" != o && "SYSTEM" != i && o.length > 0 && i.length > 0) {
var a = i, s = cc.instantiate(this.templateMessage), r = n.n, l = o;
s.active = !0;
r = (r.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), l);
s.getComponent(cc.Label).string = r + ": " + a;
if (1 == t.IsVipTx) {
s.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
s.getChildByName("lb_nameVip").getComponent(cc.Label).string = r + ": ";
s.off(cc.Node.EventType.SIZE_CHANGED);
s.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (s.getContentSize().height - s.getChildByName("lb_nameVip").getContentSize().height) / 2;
s.getChildByName("lb_nameVip").setPosition(cc.v2(0, t));
});
} else {
s.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
s.getChildByName("lb_name").getComponent(cc.Label).string = r + ": ";
s.off(cc.Node.EventType.SIZE_CHANGED);
s.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (s.getContentSize().height - s.getChildByName("lb_name").getContentSize().height) / 2;
s.getChildByName("lb_name").setPosition(cc.v2(0, t));
});
}
this.listChat.addChild(s);
}
this.scrollListChat.scrollToBottom();
}
}
}
};
e.prototype.receiveMessage = function(t) {
var e = t.n, n = t.c;
if (void 0 !== e && void 0 !== n) if ("SYSTEM" != e && "SYSTEM" != n) {
if (e.length > 0 && n.length > 0) {
var o = n, i = cc.instantiate(this.templateMessage), a = t.n, s = e;
i.active = !0;
a = (a.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), s);
i.getComponent(cc.Label).string = a + ": " + o;
if (1 == t.IsVipTx) {
i.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
i.getChildByName("lb_nameVip").getComponent(cc.Label).string = a + ": ";
i.off(cc.Node.EventType.SIZE_CHANGED);
i.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (i.getContentSize().height - i.getChildByName("lb_nameVip").getContentSize().height) / 2;
i.getChildByName("lb_nameVip").setPosition(cc.v2(0, t));
});
} else {
i.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
i.getChildByName("lb_name").getComponent(cc.Label).string = a + ": ";
i.off(cc.Node.EventType.SIZE_CHANGED);
i.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (i.getContentSize().height - i.getChildByName("lb_name").getContentSize().height) / 2;
i.getChildByName("lb_name").setPosition(cc.v2(0, t));
});
}
this.listChat.addChild(i);
this.scrollListChat.scrollToBottom();
}
} else this.receiveMessageTip(JSON.parse(n));
};
e.prototype.receiveMessageTip = function(t) {
this.nameDealer = t.dealerName;
var e = cc.instantiate(this.templateMessageTip), n = t.giftId, o = "cho " + t.msg.split(" cho ")[1], i = t.user;
e.active = !0;
e.getChildByName("lb_name").getComponent(cc.Label).node.active = !0;
e.getChildByName("lb_name").getComponent(cc.Label).string = i;
e.getChildByName("lb_name").setPosition(cc.v2(0));
e.getChildByName("lb_msg1").getComponent(cc.Label).node.active = !0;
e.getChildByName("lb_msg1").getComponent(cc.Label).string = "đã tip";
e.getChildByName("lb_msg2").getComponent(cc.Label).node.active = !0;
e.getChildByName("lb_msg2").getComponent(cc.Label).string = o;
e.getChildByName("spriteTip").getComponent(cc.Sprite).node.active = !0;
e.getChildByName("spriteTip").getComponent(cc.Sprite).spriteFrame = this.spriteFramesTip[n - 1];
this.listChat.addChild(e);
this.scrollListChat.scrollToBottom();
};
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
n._instance = this;
this.txtInputChat.node.on("editing-return", this.touchSendChat, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
};
e.prototype.onKeyDown = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.enter:
this.txtInputChat.focus();
}
};
var n;
e._instance = null;
a([ c(cc.Node) ], e.prototype, "templateMessage", void 0);
a([ c(cc.Node) ], e.prototype, "templateMessageTip", void 0);
a([ c([ cc.SpriteFrame ]) ], e.prototype, "spriteFramesTip", void 0);
a([ c(cc.Node) ], e.prototype, "listChat", void 0);
a([ c(cc.Node) ], e.prototype, "NodeTip", void 0);
a([ c(cc.ScrollView) ], e.prototype, "scrollListChat", void 0);
a([ c(cc.EditBox) ], e.prototype, "txtInputChat", void 0);
a([ c(cc.Label) ], e.prototype, "DealerName", void 0);
return n = a([ l ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"./BatMon.Chat.NetworkClient": "BatMon.Chat.NetworkClient"
} ],
BatMonConst: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c2cb6n6kPpMOYYILBwtb46j", "BatMonConst");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.BatMonConst = void 0;
var o = function() {
function t() {}
t.formatNumber = function(t) {
return void 0 === t ? "0" : t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
t.formatDateTime = function(t) {
var e = (t = t.split("T"))[0].split("-");
return e[2] + "/" + e[1] + " - " + t[1].substr(0, 5);
};
t.formatDateTime2 = function(t) {
var e = (t = t.split("T"))[0], n = t[1].split(":"), o = n[0], i = n[1], a = parseInt(o, 10), s = a >= 12 ? "PM" : "AM";
return "" + e + (a = a % 12 || 12) + ":" + i + " " + s;
};
t.formatDateTime4 = function(t) {
var e = (t = t.split("T"))[0], n = t[1].split(":"), o = n[0], i = n[1], a = n[2];
return e + " (" + o + ":" + i + ":" + Math.round(a) + ")";
};
t.formatDateTime3 = function(t) {
var e = (t = t.split("T"))[1].split(":"), n = e[0], o = e[1], i = parseInt(n, 10), a = i >= 12 ? "PM" : "AM";
return (i = i % 12 || 12) + ":" + o + " " + a;
};
t.formatUserName = function(t) {
return t.length > 10 ? t.slice(0, 9) + "..." : t;
};
t.convertToMoney = function(t) {
var e = "", n = t < 0 ? 1 : 0;
e = (t = Math.abs(t)) >= 1e3 ? t.toFixed().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") : t.toString();
1 == n && (e = "-" + e);
return e;
};
t.formatNumberToKMB = function(t) {
if (null == t || isNaN(Number(t))) return "0";
var e = t < 0 ? "-" : "";
return (t = Math.abs(t)) >= 1e9 ? e + ((t /= 1e9) % 1 == 0 ? t.toFixed(0) : t.toFixed(1)) + "B" : t >= 1e6 ? e + ((t /= 1e6) % 1 == 0 ? t.toFixed(0) : t.toFixed(1)) + "M" : t >= 1e3 ? e + ((t /= 1e3) % 1 == 0 ? t.toFixed(0) : t.toFixed(1)) + "K" : e + t.toString();
};
t.formatNumberMin = function(t) {
if (t >= 1e9) {
t = Math.ceil(t / 1e3);
return this.formatNumber(t) + "B";
}
if (t >= 1e6) {
t = Math.ceil(t / 1e3);
return this.formatNumber(t) + "M";
}
if (t >= 1e3) {
t = Math.ceil(t / 1e3);
return this.formatNumber(t) + "K";
}
return this.formatNumber(t);
};
t.formatNumberString = function(t) {
if (t >= 1e9) {
t = Math.ceil(t / 1e9);
return this.formatNumber(t) + "Tỷ";
}
if (t >= 1e6) {
t = Math.ceil(t / 1);
return this.formatNumber(t) + "M";
}
if (t >= 1e3) {
t = Math.ceil(t / 1);
return this.formatNumber(t) + "K";
}
return this.formatNumber(t);
};
t.convertToK = function(t) {
var e = "", n = t < 0 ? 1 : 0;
e = (t = Math.abs(t)) >= 1e3 ? (t / 1e3).toFixed().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "K" : t.toString();
1 == n && (e = "-" + e);
return e;
};
t.cutStringWithEllipsis = function(t, e) {
return null == t ? "" : t.length > e ? t.substring(0, e) + "..." : t;
};
t.getUrl = function(t, e) {
var n = t, o = cc.loader.getXMLHttpRequest();
o.onreadystatechange = function() {
4 === o.readyState && (200 == o.status ? e(JSON.parse(o.responseText), o.status) : o.responseText.length > 0 ? e(o.responseText, o.status) : e("error_code : " + o.status, null));
};
o.ontimeout = function() {
e("Hệ thống không phản hồi.", null);
};
o.timeout = 3e4;
o.open("GET", n, !0);
o.setRequestHeader("Content-Type", "application/json");
o.withCredentials = !0;
o.send();
};
t.post = function(t, e, n) {
var o = cc.loader.getXMLHttpRequest();
o.timeout = 3e4;
o.open("POST", t);
o.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
var i = JSON.stringify(e);
o.onreadystatechange = function() {
if (4 == o.readyState) if (o.status >= 200 && o.status < 400) {
var t = o.responseText, e = JSON.parse(t);
n && n(o.status, e);
} else n && n(o.status, null);
};
o.send(i);
};
t.getImage = function(t, e) {
cc.assetManager.loadRemote(t, {
ext: ".png"
}, function(t, n) {
if (t) console.error("Lỗi rồi đại ca ơi: ", t); else {
var o = new cc.SpriteFrame(n);
e.spriteFrame = o;
}
});
};
t.loadImageFromUrl = function(t) {
return new Promise(function(e, n) {
var o = new XMLHttpRequest();
o.open("GET", t, !0);
o.responseType = "arraybuffer";
o.onload = function() {
if (200 === this.status) {
for (var t = this.response, o = new Uint8Array(t), i = "", a = 0; a < o.byteLength; a++) i += String.fromCharCode(o[a]);
var s = "data:image/png;base64," + window.btoa(i);
e(s);
} else n(new Error("Failed to load image. Status: " + this.status));
};
o.onerror = function() {
n(new Error("Failed to load image from URL"));
};
o.send();
});
};
t.setSpriteFromBase64 = function(t, e) {
var n = new Image();
n.src = t;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var o = new cc.SpriteFrame(t);
e.spriteFrame = o;
};
};
t.truncateString = function(t, e) {
void 0 === e && (e = 9);
if (null == t) return "";
var n = String(t);
return n.length > e ? n.slice(0, e) + "..." : n;
};
t.chunkArray = function(t, e) {
for (var n = [], o = 0; o < t.length; o += e) n.push(t.slice(o, o + e));
return n;
};
t.winResult = 0;
t.isJackpot = !1;
t.BatMonState = {
BETTING: 0,
RESULT: 1,
PREPARE_NEW_SESSION: 2,
END_BETTING: 3
};
t.BatMonBetSide = {
Yellow: 1,
Green: 2,
Turqouise: 3,
Blue: 4,
Red: 5,
Pink: 6,
Purple: 7,
White: 8,
Unknown: -1
};
t.BatMonAnimName = {
animCaNhaNgoc: [ "ca_nha_ngoc_yellow", "ca_nha_ngoc_green", "ca_nha_ngoc_Turquoise", "ca_nha_ngoc_blue", "ca_nha_ngoc_red", "ca_nha_ngoc_pink", "ca_nha_ngoc_Purple", "ca_nha_ngoc_grey" ],
animChonNgoc: [ "1chon_ngoc_yellow", "2chon_ngoc_green", "3chon_ngoc_Turquoise", "4chon_ngoc_blue", "5chon_ngoc_red", "6chon_ngoc_pink", "7chon_ngoc_purple", "8chon_ngoc_grey" ],
animNgocIdle: [ "1ngoc_yellow_idle", "2ngoc_green_idle", "3ngoc_Turquoise_idle", "4ngoc_blue_idle", "5ngoc_red_idle", "6ngoc_pink_idle", "7ngoc_purple_idle", "8ngoc_grey_idle" ],
animAnNgoc1: [ "1an_ngoc_yellow1", "2an_ngoc_green1", "3an_ngoc_Turquoise1", "4an_ngoc_blue1", "5an_ngoc_red1", "6an_ngoc_pink1", "7an_ngoc_purple1", "8an_ngoc_grey1" ],
animAnNgoc2: [ "1an_ngoc_yellow2", "2an_ngoc_green2", "3an_ngoc_Turquoise2", "4an_ngoc_blue2", "5an_ngoc_red2", "6an_ngoc_pink2", "7an_ngoc_purple2", "8an_ngoc_grey2" ],
animAnNgoc3: [ "1an_ngoc_yellow3", "2an_ngoc_green3", "3an_ngoc_Turquoise3", "4an_ngoc_blue3", "5an_ngoc_red3", "6an_ngoc_pink3", "7an_ngoc_purple3", "8an_ngoc_grey3" ],
animAnNgocJp: [ "1an_ngoc_yellow_jackpot", "2an_ngoc_green_jackpot", "3an_ngoc_Turquoise_jackpot", "4an_ngoc_blue_jackpot", "5an_ngoc_red_jackpot", "6an_ngoc_pink_jackpot", "7an_ngoc_purple_jackpot", "8an_ngoc_grey_jackpot" ]
};
t.BatMonAudioTypes = cc.Enum({
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
t.api = (e = "https://eightgate." + lngui.ConfigManager.instance.ConfigInfo.Api, 
{
negotiate: (n = function(t) {
return "" + e + t;
})("/signalr/negotiate"),
hub: "gamehub",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate,
GetBigWinner: n("/api/eightgate/GetBigWinner"),
AccountHistory: n("/api/eightgate/GetHistory"),
jackpotHistory: n("/api/eightgate/GetJackpotHistory"),
SoiCau: n("/api/eightgate/GetSoiCau"),
GroupUser: n("/api/eightgate/GetPlayersNotInGame"),
getSessionDetail: function(t) {
return n("/api/eightgate/GetSessionInfo?sessionId=" + t);
}
});
var e, n;
t.MethodHubOnName = {
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
t.MethodHubName = {
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
t.ON_BatMon_SOCKET = "OnBatMonWebSocKet";
t.CHAT_BatMon_SOCKET_EVENT = "OnChatBatMonWebSocKet";
return t;
}();
n.BatMonConst = o;
cc._RF.pop();
}, {} ],
BatMonController: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "459efhKRA1PnbPL1sMmffxS", "BatMonController");
var o = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = cc._decorator, a = i.ccclass, s = (i.property, function() {
function t() {
this.avatarDef = null;
this.avatars = null;
this.BatMonView = null;
this.BatMonResultView = null;
this.BatMonResultEffectView = null;
this.BatMonBetView = null;
this.BatMonSessionHistoryView = null;
this.BatMonEventView = null;
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
e = t;
t.getInstance = function() {
this._instance || (this._instance = new e());
return this._instance;
};
t.prototype.setAvatarDef = function(t) {
this.avatarDef = t;
};
t.prototype.getAvatarDef = function() {
return this.avatarDef;
};
t.prototype.setAvatars = function(t) {
this.avatars = t;
};
t.prototype.getAvatars = function() {
return this.avatars;
};
t.prototype.setBatMonView = function(t) {
this.BatMonView = t;
};
t.prototype.setBatMonResultView = function(t) {
this.BatMonResultView = t;
};
t.prototype.setBatMonResultEffectView = function(t) {
this.BatMonResultEffectView = t;
};
t.prototype.setBatMonBetView = function(t) {
this.BatMonBetView = t;
};
t.prototype.setBatMonSessionHistoryView = function(t) {
this.BatMonSessionHistoryView = t;
};
t.prototype.setBatMonEventView = function(t) {
this.BatMonEventView = t;
};
t.prototype.updateGameHistoryUI = function(t) {
var e;
null === (e = this.BatMonSessionHistoryView) || void 0 === e || e.updateGameHistoryUI(t);
};
t.prototype.reset = function() {
var t, e, n;
try {
null === (t = this.BatMonView) || void 0 === t || t.reset();
null === (e = this.BatMonBetView) || void 0 === e || e.reset();
null === (n = this.BatMonResultEffectView) || void 0 === n || n.reset();
} catch (t) {
cc.error(t);
}
};
t.prototype.stopResultEffect = function() {
var t;
null === (t = this.BatMonResultEffectView) || void 0 === t || t.stopEffect();
};
t.prototype.resetBetAndResultInfo = function() {
var t, e, n;
null === (t = this.BatMonResultEffectView) || void 0 === t || t.reset();
null === (e = this.BatMonResultView) || void 0 === e || e.reset();
null === (n = this.BatMonBetView) || void 0 === n || n.reset();
};
t.prototype.resetBetInfo = function() {
var t;
null === (t = this.BatMonBetView) || void 0 === t || t.reset();
};
t.prototype.disableBetAgain = function(t) {
var e;
null === (e = this.BatMonBetView) || void 0 === e || e.disableBetAgain(t);
};
t.prototype.sendRequestOnHub = function(t, e, n) {
var o;
return null === (o = this.BatMonView) || void 0 === o ? void 0 : o.sendRequestOnHub(t, e, n);
};
t.prototype.updateBetInfoFromServer = function(t) {
var e;
return null === (e = this.BatMonBetView) || void 0 === e ? void 0 : e.updateBetInfoFromServer(t);
};
t.prototype.updateTotalBetValue = function(t, e) {
var n;
return null === (n = this.BatMonBetView) || void 0 === n ? void 0 : n.updateTotalBetValue(t, e);
};
t.prototype.updateSessionHistory = function(t) {
var e;
null === (e = this.BatMonSessionHistoryView) || void 0 === e || e.updateSessionHistory(t);
};
t.prototype.playEffectWin = function(t) {
var e;
null === (e = this.BatMonResultEffectView) || void 0 === e || e.playEffectWin(t);
};
t.prototype.updateBetInfoView = function(t) {
var e;
null === (e = this.BatMonBetView) || void 0 === e || e.updateBetInfo(t);
};
t.prototype.getBetSide = function() {
var t;
return null === (t = this.BatMonBetView) || void 0 === t ? void 0 : t.getBetSide();
};
t.prototype.setInfoView = function(t) {
this.infoView = t;
};
t.prototype.playerShowBubbleChat = function(t) {
var e;
return null === (e = this.infoView) || void 0 === e ? void 0 : e.playerShowBubbleChat(t);
};
t.prototype.updatePlayerInfor = function(t) {
var e;
return null === (e = this.infoView) || void 0 === e ? void 0 : e.updatePlayerInfor(t);
};
t.prototype.winResult = function(t) {
var e;
return null === (e = this.infoView) || void 0 === e ? void 0 : e.winResult(t);
};
t.prototype.winResultVip = function(t) {
var e;
return null === (e = this.infoView) || void 0 === e ? void 0 : e.winResultVip(t);
};
t.prototype.updateBalanceCurrPlayer = function(t) {
var e;
return null === (e = this.infoView) || void 0 === e ? void 0 : e.updateBalanceCurrPlayer(t);
};
t.prototype.updatePlayerBalance = function(t) {
var e;
return null === (e = this.infoView) || void 0 === e ? void 0 : e.updatePlayerBalance(t);
};
t.prototype.unRegisterAllPlayer = function() {
var t;
return null === (t = this.infoView) || void 0 === t ? void 0 : t.unRegisterAllPlayer();
};
t.prototype.updatePlayersUI = function(t) {
var e;
return null === (e = this.infoView) || void 0 === e ? void 0 : e.updatePlayersUI(t);
};
t.prototype.resetPlayerUI = function() {
var t;
return null === (t = this.infoView) || void 0 === t ? void 0 : t.resetPlayerUI();
};
t.prototype.setPositionUI = function(t) {
this.positionUI = t;
};
t.prototype.getPositionUI = function() {
return this.positionUI;
};
t.prototype.setWinResult = function(t) {
this.positionUI = t;
};
t.prototype.getWinResult = function() {
return this.positionUI;
};
t.prototype.updateResultView = function(t) {
var e;
return null === (e = this.BatMonResultView) || void 0 === e ? void 0 : e.updateResult(t);
};
t.prototype.clearBetLog = function(t) {
this.betLog = this.betLog.filter(function(e) {
return e.sessionID > t - 1;
});
};
t.prototype.getBetLogBySessionID = function(t) {
return this.betLog.filter(function(e) {
return e.sessionID == t - 1;
});
};
t.prototype.setBetLog = function(t) {
this.betLog.push(t);
};
t.prototype.getBetLog = function() {
return this.betLog;
};
t.prototype.initBetLog = function() {
this.betLog = [];
};
t.prototype.setBetLogSession = function(t) {
this.betLogSession = t;
};
t.prototype.getBetLogSession = function() {
return this.betLogSession;
};
t.prototype.setCurrentState = function(t) {
this.currentState = t;
};
t.prototype.getCurrentState = function() {
return this.currentState;
};
t.prototype.setIsNan = function(t) {
this.isNan = t;
};
t.prototype.getIsNan = function() {
return this.isNan;
};
t.prototype.getSessionId = function() {
return this.sessionId;
};
t.prototype.setDetailIndex = function(t) {
this.detailIndex = t;
};
t.prototype.getDetailIndex = function() {
return this.detailIndex;
};
t.prototype.setGameHistory = function(t) {
this.gameHistory = t;
};
t.prototype.getGameHistory = function() {
return this.gameHistory;
};
t.prototype.setSID = function(t) {
this.sID = t;
};
t.prototype.getSID = function() {
return this.sID;
};
var e;
t._instance = null;
return e = o([ a ], t);
}());
n.default = s;
cc._RF.pop();
}, {} ],
BatMonGrahpView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "64082BSXohHs64nnpg8ZuXO", "BatMonGrahpView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, l = s.property, c = t("../../BatMonConst"), u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeGrap1 = null;
e.nodeGrap2 = null;
e.nodeTemp = null;
e.lbCountYellow = null;
e.lbCountGreen = null;
e.lbCountTurqouise = null;
e.lbCountBlue = null;
e.lbCountRed = null;
e.lbCountPink = null;
e.lbCountPurple = null;
e.lbCountWhite = null;
return e;
}
n = e;
e.getInstance = function() {
return this._instance;
};
e.prototype.onLoad = function() {
n._instance = this;
this.getGraph();
this.resetDraw();
};
e.prototype.onDestroy = function() {
n._instance === this && (n._instance = null);
};
e.prototype.getGraph = function() {
var t = this, e = c.BatMonConst.api.SoiCau;
lngui.Https.get(e, function(e) {
e && t.onBatMonGetGraphResponse(e);
});
};
e.prototype.onBatMonGetGraphResponse = function(t) {
if (t) {
this.lbCountYellow && void 0 !== t.CountYellow && null !== t.CountYellow && (this.lbCountYellow.string = t.CountYellow.toString());
this.lbCountGreen && void 0 !== t.CountGreen && null !== t.CountGreen && (this.lbCountGreen.string = t.CountGreen.toString());
this.lbCountTurqouise && void 0 !== t.CountCyan && null !== t.CountCyan && (this.lbCountTurqouise.string = t.CountCyan.toString());
this.lbCountBlue && void 0 !== t.CountBlue && null !== t.CountBlue && (this.lbCountBlue.string = t.CountBlue.toString());
this.lbCountRed && void 0 !== t.CountRed && null !== t.CountRed && (this.lbCountRed.string = t.CountRed.toString());
this.lbCountPink && void 0 !== t.CountPink && null !== t.CountPink && (this.lbCountPink.string = t.CountPink.toString());
this.lbCountPurple && void 0 !== t.CountPurple && null !== t.CountPurple && (this.lbCountPurple.string = t.CountPurple.toString());
this.lbCountWhite && void 0 !== t.CountGrey && null !== t.CountGrey && (this.lbCountWhite.string = t.CountGrey.toString());
this.updateGameHistoryUI(t.Data);
}
};
e.prototype.updateGameHistoryUI = function(t) {
if (t) {
var e = Math.min(t.length, 34), n = Math.min(t.length, 68);
this.resetDraw();
for (var o = 0; o < e; o++) (i = this.createHistoryItem(t[o])) && this.nodeGrap1.addChild(i);
for (o = 34; o < n; o++) {
var i;
(i = this.createHistoryItem(t[o])) && this.nodeGrap2.addChild(i);
}
}
};
e.prototype.createHistoryItem = function(t) {
if (!t || !this.nodeTemp) return null;
var e = cc.instantiate(this.nodeTemp), n = [ Number(t.Ball1), Number(t.Ball2), Number(t.Ball3), Number(t.Ball4) ];
e.active = !0;
e.setPosition(0, 0);
var o = e.children, i = {};
n.forEach(function(t) {
i[t] = (i[t] || 0) + 1;
});
var a = new Set();
n.forEach(function(t) {
var e, n = o[t - 1];
if (n) {
n.active = !0;
if (!a.has(t)) {
a.add(t);
var s = i[t];
if (s >= 2) {
var r = null === (e = n.getChildByName("count")) || void 0 === e ? void 0 : e.getComponent(cc.Label);
r && (r.string = s.toString());
}
}
}
});
return e;
};
e.prototype.resetDraw = function() {
this.nodeGrap1.removeAllChildren();
this.nodeGrap2.removeAllChildren();
};
var n;
e._instance = null;
a([ l(cc.Node) ], e.prototype, "nodeGrap1", void 0);
a([ l(cc.Node) ], e.prototype, "nodeGrap2", void 0);
a([ l(cc.Node) ], e.prototype, "nodeTemp", void 0);
a([ l(cc.Label) ], e.prototype, "lbCountYellow", void 0);
a([ l(cc.Label) ], e.prototype, "lbCountGreen", void 0);
a([ l(cc.Label) ], e.prototype, "lbCountTurqouise", void 0);
a([ l(cc.Label) ], e.prototype, "lbCountBlue", void 0);
a([ l(cc.Label) ], e.prototype, "lbCountRed", void 0);
a([ l(cc.Label) ], e.prototype, "lbCountPink", void 0);
a([ l(cc.Label) ], e.prototype, "lbCountPurple", void 0);
a([ l(cc.Label) ], e.prototype, "lbCountWhite", void 0);
return n = a([ r ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../../BatMonConst": "BatMonConst"
} ],
BatMonGroupItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1c466nSfGtKIZk8t1RLD+d/", "BatMonGroupItem");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, l = s.property, c = t("../BatMonController"), u = t("../BatMonConst"), p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.avatar = null;
e.lbNickName = null;
e.lbBalance = null;
e.item = null;
e.itemID = 0;
return e;
}
e.prototype.updateItem = function(t, e) {
var n, o, i = t.Account, a = i.Avatar;
(a <= 0 || a > 15) && (a = Math.floor(15 * Math.random()) + 1);
var s = c.default.getInstance().getAvatars();
this.avatar && s && s[a - 1] && this.avatar.setAvatar(s[a - 1]);
this.lbNickName && (this.lbNickName.string = u.BatMonConst.truncateString(i.NickName) || "");
if (this.lbBalance) {
var r = null === (n = cc.Tool) || void 0 === n ? void 0 : n.getInstance();
r && r.formatNumber ? this.lbBalance.string = r.formatNumber(i.Balance) : this.lbBalance.string = (null === (o = i.Balance) || void 0 === o ? void 0 : o.toString()) || "0";
}
this.item = t;
this.itemID = e;
};
a([ l(cc.Avatar) ], e.prototype, "avatar", void 0);
a([ l(cc.Label) ], e.prototype, "lbNickName", void 0);
a([ l(cc.Label) ], e.prototype, "lbBalance", void 0);
return a([ r ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {
"../BatMonConst": "BatMonConst",
"../BatMonController": "BatMonController"
} ],
BatMonGroupUserListView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "018e2+lhDFEAawyJJy7nN8o", "BatMonGroupUserListView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, l = s.property, c = t("./BatMonGroupItem"), u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.itemTemplate = null;
e.scrollView = null;
e.spawnCount = 0;
e.spacing = 0;
e.items = [];
e.content = null;
e.rootContentY = 0;
e.messages = [];
e.updateTimer = 0;
e.updateInterval = .1;
e.bufferZone = 200;
e.lastContentPosY = 0;
return e;
}
e.prototype.onLoad = function() {
this.items = [];
this.updateTimer = 0;
this.lastContentPosY = 0;
if (this.scrollView) {
this.content = this.scrollView.content;
this.rootContentY = this.content ? this.content.y : 0;
}
};
e.prototype.resetList = function() {
if (this.scrollView) {
this.items = [];
this.scrollView.stopAutoScroll();
if (this.content) {
this.content.y = this.rootContentY;
for (var t = this.content.children.slice(), e = t.length - 1; e >= 0; e--) t[e] && this.content.removeChild(t[e]);
}
}
};
e.prototype.getPositionInView = function(t) {
if (!t || !this.scrollView) return cc.v3(0, 0, 0);
var e = t.parent.convertToWorldSpaceAR(t.position);
return this.scrollView.node.convertToNodeSpaceAR(e);
};
e.prototype.initialize = function(t) {
if (t && Array.isArray(t) && 0 !== t.length && this.scrollView && this.itemTemplate && this.content) {
this.messages = t;
var e = this.messages.length, n = this.itemTemplate.height || 100;
this.content.height = e * (n + this.spacing) + this.spacing;
for (var o = Math.min(this.spawnCount, e), i = 0; i < o; ++i) {
var a = cc.instantiate(this.itemTemplate);
if (a) {
this.content.addChild(a);
a.setPosition(0, -n * (.5 + i) - this.spacing * (i + 1));
var s = a.getComponent(c.default);
s && this.messages[i] && s.updateItem(this.messages[i], i);
this.items.push(a);
}
}
this.rootContentY = this.content.y;
this.lastContentPosY = this.content.y;
}
};
e.prototype.update = function(t) {
if (this.scrollView && this.content && 0 !== this.items.length) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.items, n = this.bufferZone, o = this.scrollView.content.y < this.lastContentPosY, i = ((this.itemTemplate.height || 100) + this.spacing) * e.length, a = 0; a < e.length; ++a) if (e[a]) {
var s = this.getPositionInView(e[a]);
if (o) {
if (s.y < -n && e[a].y + i < 0) {
e[a].y = e[a].y + i;
if (l = e[a].getComponent(c.default)) {
var r = l.itemID - e.length;
void 0 !== this.messages[r] && r >= 0 && l.updateItem(this.messages[r], r);
}
}
} else if (s.y > n && e[a].y - i > -this.content.height) {
e[a].y = e[a].y - i;
var l;
if (l = e[a].getComponent(c.default)) {
r = l.itemID + e.length;
void 0 !== this.messages[r] && r < this.messages.length && l.updateItem(this.messages[r], r);
}
}
}
this.lastContentPosY = this.scrollView.content.y;
}
}
};
a([ l(cc.Node) ], e.prototype, "itemTemplate", void 0);
a([ l(cc.ScrollView) ], e.prototype, "scrollView", void 0);
a([ l ], e.prototype, "spawnCount", void 0);
a([ l ], e.prototype, "spacing", void 0);
a([ l ], e.prototype, "updateInterval", void 0);
a([ l ], e.prototype, "bufferZone", void 0);
return a([ r ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"./BatMonGroupItem": "BatMonGroupItem"
} ],
BatMonGroupUserView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "235e9hQ6MJPtI5DoQLLpwpC", "BatMonGroupUserView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, l = s.property, c = t("./BatMonGroupUserListView"), u = t("../BatMonConst"), p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.groupUserListView = null;
e.schedulerCallback = null;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.onEnable = function() {
var t = this;
this.schedulerCallback = function() {
t.getGroupUser();
};
cc.director.getScheduler().schedule(this.schedulerCallback, this, 1, 0, .2, !1);
};
e.prototype.getGroupUser = function() {
var t = this, e = u.BatMonConst.api.GroupUser;
lngui.Https.get(e, function(e) {
e && t.onGetGroupUserResponse(e);
});
};
e.prototype.onGetGroupUserResponse = function(t) {
if (t && Array.isArray(t) && 0 !== t.length && this.groupUserListView) {
this.groupUserListView.resetList();
this.groupUserListView.initialize(t);
}
};
e.prototype.onDestroy = function() {
this.groupUserListView && this.groupUserListView.resetList();
this.schedulerCallback && cc.director.getScheduler().unschedule(this.schedulerCallback, this);
};
a([ l(c.default) ], e.prototype, "groupUserListView", void 0);
return a([ r ], e);
}(lngui.UIPopup);
n.default = p;
cc._RF.pop();
}, {
"../BatMonConst": "BatMonConst",
"./BatMonGroupUserListView": "BatMonGroupUserListView"
} ],
BatMonHelpView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "2384552sR1BXopWj2Lr2uEx", "BatMonHelpView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, l = s.property, c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.pageHelp = null;
e.btnNext = null;
e.btnPrevious = null;
e.lbPageIndex = null;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {
this.checkButtonState();
};
e.prototype.checkButtonState = function() {
if (this.pageHelp) {
var t = this.pageHelp.getCurrentPageIndex(), e = this.pageHelp.getPages().length;
this.lbPageIndex.string = (t + 1).toString();
this.btnPrevious && (this.btnPrevious.interactable = t > 0);
this.btnNext && (this.btnNext.interactable = t < e - 1);
}
};
e.prototype.onClickNext = function() {
if (this.pageHelp) {
var t = this.pageHelp.getCurrentPageIndex();
if (t < this.pageHelp.getPages().length - 1) {
var e = t + 1;
this.pageHelp.scrollToPage(e, .3);
this.checkButtonState();
}
}
};
e.prototype.onClickPrevious = function() {
if (this.pageHelp) {
var t = this.pageHelp.getCurrentPageIndex();
if (t > 0) {
var e = t - 1;
this.pageHelp.scrollToPage(e, .3);
this.checkButtonState();
}
}
};
a([ l(cc.PageView) ], e.prototype, "pageHelp", void 0);
a([ l(cc.Button) ], e.prototype, "btnNext", void 0);
a([ l(cc.Button) ], e.prototype, "btnPrevious", void 0);
a([ l(cc.Label) ], e.prototype, "lbPageIndex", void 0);
return a([ r ], e);
}(lngui.UIPopup);
n.default = c;
cc._RF.pop();
}, {} ],
BatMonHistoryView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "16b5dG5hVRKfJRjpvzmuP5R", "BatMonHistoryView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, l = s.property, c = t("../../BatMonConst"), u = function() {
function t() {
this.nodeBetAllGate = null;
}
a([ l(cc.Node) ], t.prototype, "nodeBetAllGate", void 0);
return a([ r("DetailHistory") ], t);
}(), p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.totalPage = null;
e.nodeContent = null;
e.nodeItemTemplate = null;
e.nodeDetailHistory = null;
e.btnNextorPrevious = [];
e.spfWinLose = [];
e.spfBall = [];
e.detailHistory = new u();
e.schedulerCallback = null;
e.index = 0;
e.maxindex = null;
e.activeTemplate = null;
e.colorWin = cc.color(137, 178, 58);
e.colorLose = cc.color(178, 60, 33);
e.md5String = "";
e.resultString = "";
e.jackpotWin = 0;
return e;
}
e.prototype.onLoad = function() {
this.nodeDetailHistory.active = !1;
};
e.prototype.onEnable = function() {
var t = this;
this.schedulerCallback = function() {
t.getHistory();
};
cc.director.getScheduler().schedule(this.schedulerCallback, this, 1, 0, .2, !1);
};
e.prototype.getHistory = function() {
var t = this, e = c.BatMonConst.api.AccountHistory;
lngui.Https.get(e, function(e) {
e && t.onBatMonGetHistoryResponse(e);
});
};
e.prototype.onBatMonGetHistoryResponse = function(t) {
if (t && Array.isArray(t) && 0 !== t.length) {
this.listData = c.BatMonConst.chunkArray(t, 9);
this.maxindex = this.listData.length;
this.index = 0;
this.showHistory(this.listData[this.index]);
this.checkButton();
}
};
e.prototype.onClickNext = function() {
if (null !== this.maxindex && void 0 !== this.maxindex && this.index < this.maxindex - 1) {
this.index++;
this.showHistory(this.listData[this.index]);
this.checkButton();
}
};
e.prototype.onClickPrevious = function() {
if (this.index > 0) {
this.index--;
this.showHistory(this.listData[this.index]);
this.checkButton();
}
};
e.prototype.checkButton = function() {
if (this.btnNextorPrevious && !(this.btnNextorPrevious.length < 2)) {
this.totalPage.string = this.index + 1 + "/" + this.maxindex;
this.nodeDetailHistory.active = !1;
if (null !== this.maxindex && void 0 !== this.maxindex && 0 !== this.maxindex) {
this.btnNextorPrevious[0] && (this.btnNextorPrevious[0].active = !0);
this.btnNextorPrevious[1] && (this.btnNextorPrevious[1].active = !0);
0 === this.index && this.btnNextorPrevious[0] && (this.btnNextorPrevious[0].active = !1);
this.index === this.maxindex - 1 && this.btnNextorPrevious[1] && (this.btnNextorPrevious[1].active = !1);
} else {
this.btnNextorPrevious[0] && (this.btnNextorPrevious[0].active = !1);
this.btnNextorPrevious[1] && (this.btnNextorPrevious[1].active = !1);
}
}
};
e.prototype.showHistory = function(t) {
var e = this;
if (t) {
t && lngui.UIWaitingLayout.hideWaiting();
this.nodeContent.removeAllChildren();
this.activeTemplate = null;
for (var n = function() {
var n = cc.instantiate(o.nodeItemTemplate), a = t[i], s = a.TotalAward, r = a.TotalBet, l = s - r;
n.active = !0;
n.setPosition(0, 0);
n.getChildByName("session").getComponent(cc.Label).string = a.SessionID;
n.getChildByName("time").getComponent(cc.Label).string = c.BatMonConst.formatDateTime4(a.CreateTime);
n.getChildByName("moneyBet").getComponent(cc.Label).string = c.BatMonConst.formatNumber(r);
n.getChildByName("liner").active = i % 2 == 0;
if (a.IsFinish) {
n.getChildByName("result").getComponent(cc.Sprite).spriteFrame = l > 0 ? o.spfWinLose[1] : o.spfWinLose[0];
n.getChildByName("Ball1").getComponent(cc.Sprite).spriteFrame = o.spfBall[parseInt(a.Ball1)];
n.getChildByName("Ball2").getComponent(cc.Sprite).spriteFrame = o.spfBall[parseInt(a.Ball2)];
n.getChildByName("Ball3").getComponent(cc.Sprite).spriteFrame = o.spfBall[parseInt(a.Ball3)];
n.getChildByName("Ball4").getComponent(cc.Sprite).spriteFrame = o.spfBall[parseInt(a.Ball4)];
n.getChildByName("moneyResult").getComponent(cc.Label).string = l > 0 ? "+" + c.BatMonConst.formatNumber(l) : "";
} else {
n.getChildByName("result").getComponent(cc.Sprite).spriteFrame = o.spfWinLose[2];
n.getChildByName("Ball1").getComponent(cc.Sprite).spriteFrame = o.spfBall[0];
n.getChildByName("Ball2").getComponent(cc.Sprite).spriteFrame = o.spfBall[0];
n.getChildByName("Ball3").getComponent(cc.Sprite).spriteFrame = o.spfBall[0];
n.getChildByName("Ball4").getComponent(cc.Sprite).spriteFrame = o.spfBall[0];
n.getChildByName("moneyResult").getComponent(cc.Label).string = "";
n.getChildByName("btnDetail").active = !1;
}
var u = n.getChildByName("btnDetail");
if (u) {
var p = u.getComponent(cc.Button);
if (p) {
u.itemData = a;
u.itemIndex = i;
p.node.off(cc.Node.EventType.TOUCH_END);
p.node.on(cc.Node.EventType.TOUCH_END, function() {
e.activeTemplate = n;
e.onClickDetail(a, i);
}, o);
}
}
o.nodeContent.addChild(n);
}, o = this, i = 0; i < t.length; i++) n();
}
};
e.prototype.onClickDetail = function(t) {
if (t) {
this.nodeDetailHistory.active = !0;
t.Data && Array.isArray(t.Data) && this.showBetAndWinData(t.Data);
this.nodeDetailHistory;
}
};
e.prototype.showBetAndWinData = function(t) {
var e = this;
if (t && Array.isArray(t) && 0 !== t.length) {
this.detailHistory.nodeBetAllGate && this.detailHistory.nodeBetAllGate.children && this.detailHistory.nodeBetAllGate.children.forEach(function(t) {
t.getComponent(cc.Label).string = "0";
});
t.forEach(function(t) {
var n = t.GateID, o = t.Bet || 0, i = n - 1;
if (e.detailHistory.nodeBetAllGate && e.detailHistory.nodeBetAllGate.children && e.detailHistory.nodeBetAllGate.children[i]) {
var a = e.detailHistory.nodeBetAllGate.children[i].getComponent(cc.Label);
a && (a.string = c.BatMonConst.formatNumber(o));
}
});
}
};
e.prototype.copy = function(t, e) {
var n = "md5" == e ? this.md5String : this.resultString;
lngui.PlatformInterface.copy(n);
};
e.prototype.showDetail = function() {
this.nodeDetailHistory.active = !this.nodeDetailHistory.active;
};
e.prototype.onDestroy = function() {
this.schedulerCallback && cc.director.getScheduler().unschedule(this.schedulerCallback, this);
};
a([ l(cc.Label) ], e.prototype, "totalPage", void 0);
a([ l(cc.Node) ], e.prototype, "nodeContent", void 0);
a([ l(cc.Node) ], e.prototype, "nodeItemTemplate", void 0);
a([ l(cc.Node) ], e.prototype, "nodeDetailHistory", void 0);
a([ l(cc.Node) ], e.prototype, "btnNextorPrevious", void 0);
a([ l(cc.SpriteFrame) ], e.prototype, "spfWinLose", void 0);
a([ l(cc.SpriteFrame) ], e.prototype, "spfBall", void 0);
a([ l(u) ], e.prototype, "detailHistory", void 0);
return a([ r ], e);
}(lngui.UIPopup);
n.default = p;
cc._RF.pop();
}, {
"../../BatMonConst": "BatMonConst"
} ],
BatMonInfoView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "18bc9I9T5lEUbbH2FEo7tKy", "BatMonInfoView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, l = s.property, c = t("./BatMonController"), u = t("./player/BatMonPlayer"), p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.player = null;
e.interval = null;
e.time = 0;
return e;
}
n = e;
e.getInstance = function() {
return this._instance;
};
e.prototype.onLoad = function() {
n._instance = this;
c.default.getInstance().setInfoView(this);
this.interval = null;
this.time = 0;
this.player && this.player.showPlayer(!0);
};
e.prototype.onDestroy = function() {
n._instance === this && (n._instance = null);
try {
this.interval && clearInterval(this.interval);
} catch (t) {}
};
e.prototype.resetPlayerUI = function() {
this.player && this.player.resetPlayerResultUI();
};
e.prototype.unRegisterAllPlayer = function() {
this.player && this.player.unRegisterPlayer();
};
e.prototype.updatePlayerInfor = function(t) {
this.player && t && t.Account && this.player.registerPlayer(t.Account);
};
e.prototype.updatePlayersUI = function(t) {
if (this.player && t) {
var e = lngui.UserManager.instance.mainUserInfo.AccountID, n = t.find(function(t) {
return t.AccountID == e;
});
if (n && n.Account) {
this.player.showPlayer(!0);
this.player.registerPlayer(n.Account);
this.player.resetPlayerResultUI();
}
}
};
e.prototype.updateBalanceCurrPlayer = function(t) {
this.player && this.player.updateChipNormal(t);
};
e.prototype.updatePlayerBalance = function(t) {
if (this.player && t && !(t.length < 4)) {
var e = lngui.UserManager.instance.mainUserInfo.AccountID;
t[2] == e && this.player.updateChip(t[3]);
}
};
e.prototype.winResult = function(t) {
this.player && t && this.player.playerResultUI(t.Award, t.Balance);
};
e.prototype.winResultVip = function(t) {
if (t && this.player) {
var e = lngui.UserManager.instance.mainUserInfo.AccountID, n = t.find(function(t) {
return t && t.AccountID == e;
});
n && this.player.playerResultUI(n.Award, n.Balance);
}
};
var n;
e._instance = null;
a([ l(u.default) ], e.prototype, "player", void 0);
return n = a([ r ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {
"./BatMonController": "BatMonController",
"./player/BatMonPlayer": "BatMonPlayer"
} ],
BatMonMoveChip: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6e379lfjYRMqYxU+Vq/4dlJ", "BatMonMoveChip");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
}, s = this && this.__spreadArrays || function() {
for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
var o = Array(t), i = 0;
for (e = 0; e < n; e++) for (var a = arguments[e], s = 0, r = a.length; s < r; s++, 
i++) o[i] = a[s];
return o;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = cc._decorator, l = r.ccclass, c = r.property, u = t("../BatMonController"), p = t("../BatMonConst"), h = function(t) {
i(e, t);
function e() {
var e, n = null !== t && t.apply(this, arguments) || this;
n.prefabsChip = [];
n.nodeChipsBlack = null;
n.nodeChipsRed = null;
n.nodeChipsSpade = null;
n.nodeChipsClobe = null;
n.nodeChipsDiamond = null;
n.nodeChipsHeart = null;
n.nodeChipsStraight = null;
n.nodeChipsPair = null;
n.nodeChipsFlush = null;
n.nodeChipsStartMove = null;
n.lstPosChip = [];
n.lstPosPlayer = [];
n.posNodeDealer = null;
n.nodePosGroupUser = null;
n.lstPosPlayerUI = [];
n.listChips = [];
n.listChipsByBetSide = ((e = {})[p.BatMonConst.BatMonBetSide.Black] = [], e[p.BatMonConst.BatMonBetSide.Red] = [], 
e[p.BatMonConst.BatMonBetSide.Spade] = [], e[p.BatMonConst.BatMonBetSide.Clobe] = [], 
e[p.BatMonConst.BatMonBetSide.Diamond] = [], e[p.BatMonConst.BatMonBetSide.Heart] = [], 
e[p.BatMonConst.BatMonBetSide.Straight] = [], e[p.BatMonConst.BatMonBetSide.Pair] = [], 
e[p.BatMonConst.BatMonBetSide.Flush] = [], e);
n.listChipReward = [];
n.listChipOfUser = [];
n.listMap = {};
n.listPos = {};
n.listPools = {};
n.posDealer = null;
n.posTotalUser = null;
return n;
}
n = e;
e.getInstance = function() {
return this._instance;
};
e.prototype.onLoad = function() {
var t = this;
n._instance = this;
this.lstPosPlayerUI = [];
this.lstPosPlayer.map(function(e) {
t.lstPosPlayerUI.push(cc.v2(e.position.x, e.position.y));
}, this);
this.listChips = [];
this.listChipsByBetSide[p.BatMonConst.BatMonBetSide.Black] = [];
this.listChipsByBetSide[p.BatMonConst.BatMonBetSide.Red] = [];
this.listChipsByBetSide[p.BatMonConst.BatMonBetSide.Spade] = [];
this.listChipsByBetSide[p.BatMonConst.BatMonBetSide.Clobe] = [];
this.listChipsByBetSide[p.BatMonConst.BatMonBetSide.Diamond] = [];
this.listChipsByBetSide[p.BatMonConst.BatMonBetSide.Heart] = [];
this.listChipsByBetSide[p.BatMonConst.BatMonBetSide.Straight] = [];
this.listChipsByBetSide[p.BatMonConst.BatMonBetSide.Pair] = [];
this.listChipsByBetSide[p.BatMonConst.BatMonBetSide.Flush] = [];
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
1e7: 9,
5e7: 10,
1e8: 11
};
this.listPos = {};
Object.keys(this.listMap).forEach(function(e) {
t.lstPosChip[t.listMap[e]] && t.lstPosChip[t.listMap[e]].position && (t.listPos[e] = t.lstPosChip[t.listMap[e]].position.x);
});
this.listPools = [];
Object.keys(this.listMap).forEach(function(e) {
var n = t.listMap[e];
if (void 0 !== n && t.prefabsChip[n]) {
t.listPools[e] = new cc.NodePool();
for (var o = 0; o <= 11; o++) {
var i = cc.instantiate(t.prefabsChip[n]);
t.listPools[e].put(i);
}
}
});
this.posDealer = cc.v2(this.posNodeDealer.position.x, this.posNodeDealer.position.y);
this.posTotalUser = cc.v2(this.nodePosGroupUser.position.x, this.nodePosGroupUser.position.y);
};
e.prototype.onDestroy = function() {
n._instance === this && (n._instance = null);
};
e.prototype.createListChipOfUser = function(t) {
this.listChipOfUser = [];
var e = this;
t.length > 0 && t.map(function(t) {
var n = t.BetSide, o = e.createChip(t.BetValue);
e.listChipOfUser.push([ o, n ]);
});
};
e.prototype.updateListChipOfUser = function(t, e) {
var n = this.createChip(e);
this.listChipOfUser.push([ n, t ]);
};
e.prototype.moveChipWithStartPos = function(t, e) {
var n = u.default.getInstance().getPositionUI(), o = -1;
try {
o = n.indexOf(t[0]);
} catch (t) {
o = -1;
}
var i = -1 != (o = e ? 0 : o) ? this.lstPosPlayerUI[o] : this.nodePosGroupUser.position, a = t[2], s = t[1], r = this.randomPosMove(a), l = this.createChip(s);
this.listChipsByBetSide[a] && this.listChipsByBetSide[a].push([ l, s, i ]);
this.listChips.push([ l, s ]);
l.parent = this.nodeChipsStartMove.parent;
if (e) {
l.x = this.listPos[s];
l.y = -315;
} else l.position = cc.v3(i.x, i.y, 0);
this.chipMoveTo(l, r, .3);
};
e.prototype.initChipsBet = function(t) {
var e = -1;
try {
e = u.default.getInstance().getPositionUI().indexOf(t[2]);
} catch (t) {
e = -1;
}
var n = -1 != e ? this.lstPosPlayerUI[e] : this.nodePosGroupUser.position, o = t[1], i = t[0], a = this.randomPosMove(o), s = this.createChip(i);
this.listChipsByBetSide[o] && this.listChipsByBetSide[o].push([ s, i, n ]);
this.listChips.push([ s, i ]);
s.parent = this.nodeChipsStartMove.parent;
s.position = cc.v3(a.x, a.y, 0);
};
e.prototype.randomPosMove = function(t) {
var e, n = 0, o = 0, i = null;
switch (t) {
case p.BatMonConst.BatMonBetSide.Black:
i = this.nodeChipsBlack;
break;

case p.BatMonConst.BatMonBetSide.Red:
i = this.nodeChipsRed;
break;

case p.BatMonConst.BatMonBetSide.Spade:
i = this.nodeChipsSpade;
break;

case p.BatMonConst.BatMonBetSide.Clobe:
i = this.nodeChipsClobe;
break;

case p.BatMonConst.BatMonBetSide.Diamond:
i = this.nodeChipsDiamond;
break;

case p.BatMonConst.BatMonBetSide.Heart:
i = this.nodeChipsHeart;
break;

case p.BatMonConst.BatMonBetSide.Straight:
i = this.nodeChipsStraight;
break;

case p.BatMonConst.BatMonBetSide.Pair:
i = this.nodeChipsPair;
break;

case p.BatMonConst.BatMonBetSide.Flush:
i = this.nodeChipsFlush;
}
if (i) {
n = i.width / 2;
o = i.height / 2;
e = cc.v2(i.position.x, i.position.y);
} else e = cc.v2(0, 0);
var a = -n, s = -o, r = Math.floor(Math.random() * (n - a + 1) + a), l = Math.floor(Math.random() * (o - s + 1) + s);
e.x = e.x + r;
e.y = e.y + l;
return e;
};
e.prototype.chipMoveTo = function(t, e, n) {
var o = cc.moveTo(n, e);
o.easing(cc.easeOut(1));
t.runAction(o);
};
e.prototype.chipWinAnimation = function(t, e, n) {
if ("" != t.name) {
var o = cc.moveTo(n, e), i = cc.fadeOut(2 * n);
t.runAction(cc.spawn(o, i));
}
};
e.prototype.chipRewardWinAnimation = function(t, e, n) {
if ("" != t.name) {
var o = cc.moveTo(n, e);
t.runAction(o);
}
};
e.prototype.chipMoveToSideWin = function(t) {
var e = this, n = this.listChipsByBetSide[t] || [], o = this;
n.map(function(n, i) {
var a = o.randomPosMove(t), s = o.createChip(n[1]);
s.parent = e.nodeChipsStartMove.parent;
s.position = cc.v3(-9, 153, 0);
o.listChipReward.push([ s, n[1], n[2] ]);
o.listChips.push(s);
i = i >= 5 ? 5 : i;
setTimeout(function() {
try {
o.chipRewardWinAnimation(s, a, .5);
} catch (t) {}
}, 100 * i);
});
};
e.prototype.chipMoveToCoin = function(t, e) {
var n = this;
try {
var o = this.listChipsByBetSide[t] || [], i = [];
Object.keys(this.listChipsByBetSide).forEach(function(e) {
var o = parseInt(e);
o !== t && n.listChipsByBetSide[o] && (i = i.concat(n.listChipsByBetSide[o]));
});
e ? this.commonMoveChipResultNoPositionEnd(o) : this.commonMoveChipResult(i, this.posDealer);
} catch (t) {}
};
e.prototype.removeChips = function(t) {
var e = this, n = [];
Object.keys(this.listChipsByBetSide).forEach(function(o) {
var i = parseInt(o);
i !== t && e.listChipsByBetSide[i] && (n = n.concat(e.listChipsByBetSide[i]));
});
n.length > 0 && n.map(function(t) {
return t[0].destroy();
});
};
e.prototype.commonMoveChipResult = function(t, e) {
var n = this;
(t = s(t, this.listChipReward)).map(function(t, o) {
o = o >= 5 ? 5 : o;
setTimeout(function() {
try {
n.chipWinAnimation(t[0], e, .3);
} catch (t) {}
}, 100 * o);
});
};
e.prototype.moveChipTie = function(t) {
var e = this;
t && t.map(function(t, n) {
n = n >= 5 ? 5 : n;
setTimeout(function() {
try {
e.chipWinAnimation(t[0], t[2], .5);
} catch (t) {}
}, 100 * n);
});
};
e.prototype.commonMoveChipResultNoPositionEnd = function(t) {
var e = this;
(t = s(t, this.listChipReward)).map(function(t, n) {
n = n >= 5 ? 5 : n;
setTimeout(function() {
try {
e.chipWinAnimation(t[0], t[2], .5);
} catch (t) {}
}, 100 * n);
});
};
e.prototype.createChip = function(t) {
var e = null, n = this.listMap[t];
(e = this.listPools[t].size() > 0 ? this.listPools[t].get() : cc.instantiate(this.prefabsChip[n])).opacity = 255;
try {
e.setScale(cc.v2(.8, .8));
} catch (t) {
(e = cc.instantiate(this.prefabsChip[n])).setScale(cc.v2(.8, .8));
}
return e;
};
e.prototype.clearChips = function() {
var t = this;
if (this.listChips) try {
this.listChips.map(function(e) {
if (e) {
var n = e[0], o = e[1];
o && t.listPools[o].put(n);
}
}, this);
} catch (t) {}
this.listChips = [];
Object.keys(this.listChipsByBetSide).forEach(function(e) {
var n = parseInt(e);
t.listChipsByBetSide[n] = [];
});
this.listChipReward = [];
this.listChipOfUser = [];
};
e.prototype.clearPools = function() {
this.listPools && (this.listPools = []);
};
var n;
e._instance = null;
a([ c([ cc.Prefab ]) ], e.prototype, "prefabsChip", void 0);
a([ c(cc.Node), c(cc.Node) ], e.prototype, "nodeChipsBlack", void 0);
a([ c(cc.Node) ], e.prototype, "nodeChipsRed", void 0);
a([ c(cc.Node) ], e.prototype, "nodeChipsSpade", void 0);
a([ c(cc.Node) ], e.prototype, "nodeChipsClobe", void 0);
a([ c(cc.Node) ], e.prototype, "nodeChipsDiamond", void 0);
a([ c(cc.Node) ], e.prototype, "nodeChipsHeart", void 0);
a([ c(cc.Node) ], e.prototype, "nodeChipsStraight", void 0);
a([ c(cc.Node) ], e.prototype, "nodeChipsPair", void 0);
a([ c(cc.Node) ], e.prototype, "nodeChipsFlush", void 0);
a([ c(cc.Node) ], e.prototype, "nodeChipsStartMove", void 0);
a([ c([ cc.Node ]) ], e.prototype, "lstPosChip", void 0);
a([ c([ cc.Node ]) ], e.prototype, "lstPosPlayer", void 0);
a([ c(cc.Node) ], e.prototype, "posNodeDealer", void 0);
a([ c(cc.Node) ], e.prototype, "nodePosGroupUser", void 0);
return n = a([ l ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../BatMonConst": "BatMonConst",
"../BatMonController": "BatMonController"
} ],
BatMonPlayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "5c14fWxQ8dECLwjh4k3wzEo", "BatMonPlayer");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, l = s.property, c = t("../BatMonController"), u = t("../BatMonConst"), p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbName = null;
e.lbChip = null;
e.animation = null;
e.avatar = null;
e.lbWin = null;
e.animLbWin = null;
e.playerStatus = "";
return e;
}
e.prototype.onLoad = function() {
this.avatar = this.node.getComponentInChildren(cc.Avatar);
this.lbWin = this.node.getComponentInChildren(cc.Label);
};
e.prototype.onDestroy = function() {
this.unRegisterPlayer();
};
e.prototype.showPlayer = function(t) {
this.node.opacity = t ? 255 : 0;
};
e.prototype.registerPlayer = function(t) {
var e = t.Avatar;
(e <= 0 || e > 9) && (e = Math.floor(15 * Math.random()));
var n = c.default.getInstance().getAvatars();
n && n[e - 1] && this.avatar.setAvatar(n[e - 1]);
this.lbName.string = t.NickName;
this.lbChip.node.getComponent("LabelIncrement.BatMon").tweenValueto(t.Balance);
};
e.prototype.unRegisterPlayer = function() {
try {
this.lbWin && this.lbWin.node && (this.lbWin.node.active = !1);
} catch (t) {}
};
e.prototype.resetPlayerResultUI = function() {
this.lbWin && this.lbWin.node && (this.lbWin.node.active = !1);
};
e.prototype.playerResultUI = function(t, e) {
e && this.updateChip(e);
};
e.prototype.updateChip = function(t) {
this.lbChip && this.lbChip.node.getComponent("LabelIncrement.BatMon").tweenValueto(t);
};
e.prototype.updateChipNormal = function(t) {
this.lbChip && (this.lbChip.string = u.BatMonConst.formatNumber(t));
};
e.prototype.updateConnectionStatus = function(t) {
switch (t) {
case cc.ConnectionStatus.DISCONNECTED:
case cc.ConnectionStatus.CONNECTED:
}
};
e.prototype.updatePlayerStatus = function(t) {
this.playerStatus = t.toString();
this.node.opacity = t.toString() === cc.PlayerStatus.INGAME ? 255 : 150;
};
a([ l(cc.Label) ], e.prototype, "lbName", void 0);
a([ l(cc.Label) ], e.prototype, "lbChip", void 0);
return a([ r ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {
"../BatMonConst": "BatMonConst",
"../BatMonController": "BatMonController"
} ],
BatMonResultEffectView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "642bc6yppVGapemF/si5lqP", "BatMonResultEffectView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, l = s.property, c = t("./BatMonController"), u = t("./BatMonConst"), p = t("../../framework/ui/UINumericLabelHelper"), h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeWin = null;
e.skeNhaNgoc = null;
e.skeJp = null;
e.lbWin = null;
return e;
}
n = e;
e.getInstance = function() {
return this._instance;
};
e.prototype.onLoad = function() {
n._instance = this;
c.default.getInstance().setBatMonResultEffectView(this);
this.skeNhaNgoc.node.active = !1;
this.skeJp.node.active = !1;
this.nodeWin.node.active = !1;
this.lbWin.node.active = !1;
this.reset();
};
e.prototype.onDestroy = function() {
n._instance === this && (n._instance = null);
c.default.getInstance().setBatMonResultEffectView(null);
};
e.prototype.stopEffect = function() {
this.reset();
};
e.prototype.reset = function() {
this.skeNhaNgoc.node.active = !1;
this.nodeWin.node.active = !1;
this.lbWin.node.active = !1;
this.skeJp.node.active = !1;
this.lbWin.setString("");
};
e.prototype.playEffectWin = function(t) {
this.skeNhaNgoc.node.active = !0;
this.skeNhaNgoc.setAnimation(0, u.BatMonConst.BatMonAnimName.animCaNhaNgoc[t[0] - 1], !1);
this.skeNhaNgoc.addAnimation(0, u.BatMonConst.BatMonAnimName.animCaNhaNgoc[t[1] - 1], !1);
this.skeNhaNgoc.addAnimation(0, u.BatMonConst.BatMonAnimName.animCaNhaNgoc[t[2] - 1], !1);
this.skeNhaNgoc.addAnimation(0, u.BatMonConst.BatMonAnimName.animCaNhaNgoc[t[3] - 1], !1);
};
e.prototype.showResult = function() {
var t = this;
if (u.BatMonConst.isJackpot) {
this.skeJp.node.active = !0;
this.skeJp.setAnimation(0, "rong", !1);
this.skeJp.setCompleteListener(function() {
t.nodeWin.node.active = !0;
t.nodeWin.setAnimation(0, "BIG_WIN", !1);
t.scheduleOnce(function() {
t.lbWin.node.active = !0;
t.lbWin.scheduleProgress(u.BatMonConst.winResult);
t.lbWin.node.active = !1;
t.nodeWin.setCompleteListener(null);
}, 1);
t.skeJp.setCompleteListener(null);
});
} else if (u.BatMonConst.winResult > 0) {
this.nodeWin.node.active = !0;
this.nodeWin.setAnimation(0, "BIG_WIN", !1);
this.scheduleOnce(function() {
t.lbWin.node.active = !0;
t.lbWin.scheduleProgress(u.BatMonConst.winResult);
t.nodeWin.setCompleteListener(function() {
t.lbWin.node.active = !1;
t.nodeWin.setCompleteListener(null);
});
}, 1);
}
};
var n;
e._instance = null;
a([ l(sp.Skeleton) ], e.prototype, "nodeWin", void 0);
a([ l(sp.Skeleton) ], e.prototype, "skeNhaNgoc", void 0);
a([ l(sp.Skeleton) ], e.prototype, "skeJp", void 0);
a([ l(p.default) ], e.prototype, "lbWin", void 0);
return n = a([ r ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../../framework/ui/UINumericLabelHelper": void 0,
"./BatMonConst": "BatMonConst",
"./BatMonController": "BatMonController"
} ],
BatMonSessionDetailData: [ function(t, e) {
"use strict";
cc._RF.push(e, "6652bXuPT1C9aE0iaz1a1w2", "BatMonSessionDetailData");
e.exports = [ {
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
BatMonSessionDetailItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "85cdd30F6dO/q+sf1dIxPgb", "BatMonSessionDetailItem");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, l = s.property, c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbTime = null;
e.lbSID = null;
e.lbNickName = null;
e.lbBet = null;
e.lbRefund = null;
e.item = null;
e.itemID = 0;
return e;
}
e.prototype.updateItem = function(t, e) {
var n, o, i, a;
if (t) {
if (this.lbTime && t.CreateTime) {
var s = null === (n = cc.Tool) || void 0 === n ? void 0 : n.getInstance();
s && s.convertUTCTime2 ? this.lbTime.string = s.convertUTCTime2(t.CreateTime) : this.lbTime.string = t.CreateTime || "";
}
if (this.lbSID) {
var r = null === (o = cc.Config) || void 0 === o ? void 0 : o.getInstance();
r && r.getServiceNameNoFormat && t.ServiceID ? this.lbSID.string = r.getServiceNameNoFormat(t.ServiceID) : this.lbSID.string = (null === (i = t.ServiceID) || void 0 === i ? void 0 : i.toString()) || "";
}
this.lbNickName && (this.lbNickName.string = t.UserName || t.NickName || "");
var l = null === (a = cc.Tool) || void 0 === a ? void 0 : a.getInstance();
this.lbBet && (l && l.formatNumberKTX ? this.lbBet.string = l.formatNumberKTX(t.Bet || 0) : this.lbBet.string = (t.Bet || 0).toString());
this.lbRefund && (l && l.formatNumberKTX ? this.lbRefund.string = l.formatNumberKTX(t.Refund || 0) : this.lbRefund.string = (t.Refund || 0).toString());
this.item = t;
this.itemID = e;
}
};
a([ l(cc.Label) ], e.prototype, "lbTime", void 0);
a([ l(cc.Label) ], e.prototype, "lbSID", void 0);
a([ l(cc.Label) ], e.prototype, "lbNickName", void 0);
a([ l(cc.Label) ], e.prototype, "lbBet", void 0);
a([ l(cc.Label) ], e.prototype, "lbRefund", void 0);
return a([ r ], e);
}(cc.Component);
n.default = c;
cc._RF.pop();
}, {} ],
BatMonSessionDetailListView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7e742jkxZ1Mcp4LDsSJmnTI", "BatMonSessionDetailListView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, l = s.property, c = t("./BatMonSessionDetailItem"), u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.itemTemplate = null;
e.scrollView = null;
e.spawnCount = 0;
e.spacing = 0;
e.items = [];
e.content = null;
e.rootContentY = 0;
e.messages = [];
e.updateTimer = 0;
e.updateInterval = .1;
e.bufferZone = 200;
e.lastContentPosY = 0;
return e;
}
e.prototype.onLoad = function() {
this.items = [];
this.updateTimer = 0;
this.lastContentPosY = 0;
if (this.scrollView) {
this.content = this.scrollView.content;
this.rootContentY = this.content ? this.content.y : 0;
}
};
e.prototype.resetList = function() {
if (this.scrollView) {
this.items = [];
this.scrollView.stopAutoScroll();
if (this.content) {
this.content.y = this.rootContentY;
for (var t = this.content.children.slice(), e = t.length - 1; e >= 0; e--) t[e] && this.content.removeChild(t[e]);
}
}
};
e.prototype.getPositionInView = function(t) {
if (!t || !this.scrollView) return cc.v3(0, 0, 0);
var e = t.parent.convertToWorldSpaceAR(t.position);
return this.scrollView.node.convertToNodeSpaceAR(e);
};
e.prototype.initialize = function(t) {
if (t && Array.isArray(t) && 0 !== t.length && this.scrollView && this.itemTemplate && this.content) {
this.messages = t;
var e = this.messages.length, n = this.itemTemplate.height || 100;
this.content.height = e * (n + this.spacing) + this.spacing;
for (var o = Math.min(this.spawnCount, e), i = 0; i < o; ++i) {
var a = cc.instantiate(this.itemTemplate);
if (a) {
this.content.addChild(a);
a.setPosition(0, -n * (.5 + i) - this.spacing * (i + 1));
var s = a.getComponent(c.default);
s && this.messages[i] && s.updateItem(this.messages[i], i);
this.items.push(a);
}
}
this.rootContentY = this.content.y;
this.lastContentPosY = this.content.y;
}
};
e.prototype.update = function(t) {
if (this.scrollView && this.content && 0 !== this.items.length) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.items, n = this.bufferZone, o = this.scrollView.content.y < this.lastContentPosY, i = ((this.itemTemplate.height || 100) + this.spacing) * e.length, a = 0; a < e.length; ++a) if (e[a]) {
var s = this.getPositionInView(e[a]);
if (o) {
if (s.y < -n && e[a].y + i < 0) {
e[a].y = e[a].y + i;
if (l = e[a].getComponent(c.default)) {
var r = l.itemID - e.length;
void 0 !== this.messages[r] && r >= 0 && l.updateItem(this.messages[r], r);
}
}
} else if (s.y > n && e[a].y - i > -this.content.height) {
e[a].y = e[a].y - i;
var l;
if (l = e[a].getComponent(c.default)) {
r = l.itemID + e.length;
void 0 !== this.messages[r] && r < this.messages.length && l.updateItem(this.messages[r], r);
}
}
}
this.lastContentPosY = this.scrollView.content.y;
}
}
};
a([ l(cc.Node) ], e.prototype, "itemTemplate", void 0);
a([ l(cc.ScrollView) ], e.prototype, "scrollView", void 0);
a([ l ], e.prototype, "spawnCount", void 0);
a([ l ], e.prototype, "spacing", void 0);
a([ l ], e.prototype, "updateInterval", void 0);
a([ l ], e.prototype, "bufferZone", void 0);
return a([ r ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"./BatMonSessionDetailItem": "BatMonSessionDetailItem"
} ],
BatMonSessionDetailView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "662d97omOpMh68SqFGgE2pJ", "BatMonSessionDetailView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, l = s.property, c = t("../../BatMonConst"), u = t("../../BatMonController"), p = t("./BatMonSessionDetailListView"), h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.rongSessionDetailListView = null;
e.hoSessionDetailListView = null;
e.lbSessionID = null;
e.nodeRong = null;
e.nodeHoa = null;
e.nodeHo = null;
e.nodeEffectRong = [];
e.nodeEffectHoa = [];
e.nodeEffectHo = [];
e.lbRong = null;
e.lbHoa = null;
e.lbHo = null;
e.spriteRong = null;
e.spriteHo = null;
e.lbTotalBetRong = null;
e.lbTotalBetHoa = null;
e.lbTotalBetHo = null;
e.lbTotalRefundRong = null;
e.lbTotalRefundHo = null;
e.btnNext = null;
e.btnBack = null;
e.animation = null;
e.index = 0;
e.gameHistory = [];
e.totalHistory = 0;
e.schedulerCallback = null;
return e;
}
e.prototype.onLoad = function() {
this.animation = this.node.getComponent(cc.Animation);
this.node.zIndex = 99;
};
e.prototype.onEnable = function() {
var t = this;
this.schedulerCallback = function() {
t.getSessionDetail();
};
cc.director.getScheduler().schedule(this.schedulerCallback, this, 1, 0, .2, !1);
this.animation && this.animation.play("openPopup");
};
e.prototype.checkStatusButton = function() {
this.btnNext && (this.btnNext.interactable = 0 !== this.index);
this.btnBack && (this.btnBack.interactable = this.index !== this.totalHistory - 1);
};
e.prototype.getSessionDetail = function() {
this.index = u.default.getInstance().getDetailIndex();
this.gameHistory = u.default.getInstance().getGameHistory() || [];
this.totalHistory = this.gameHistory.length;
this.checkStatusButton();
this.getSessionDetailById(this.index);
};
e.prototype.getSessionDetailById = function(t) {
var e, n = this;
if (!(!this.gameHistory || t < 0 || t >= this.gameHistory.length)) {
var o = this.gameHistory[t];
if (o) {
if (this.lbSessionID && o.SessionId) {
var i = null === (e = cc.Tool) || void 0 === e ? void 0 : e.getInstance();
i && i.convertUTCTime3 && o.CreatedDate ? this.lbSessionID.string = "Phiên: #" + o.SessionId + " - Ngày: " + i.convertUTCTime3(o.CreatedDate) : this.lbSessionID.string = "Phiên: #" + o.SessionId;
}
var a = o.Result || o.ResultValue, s = a === c.BatMonConst.BatMonBetSide.RONG, r = a === c.BatMonConst.BatMonBetSide.HO, l = a === c.BatMonConst.BatMonBetSide.HOA;
this.nodeRong && (this.nodeRong.active = !s);
this.nodeHo && (this.nodeHo.active = !r);
this.nodeHoa && (this.nodeHoa.active = !l);
this.nodeEffectRong.forEach(function(t) {
t && (t.active = s);
});
this.nodeEffectHo.forEach(function(t) {
t && (t.active = r);
});
this.nodeEffectHoa.forEach(function(t) {
t && (t.active = l);
});
var u = c.BatMonConst.api.getSessionDetail(o.SessionId);
lngui.Https.get(u, function(t) {
t && n.onBatMonGetSessionInfoResponse(t);
});
}
}
};
e.prototype.onBatMonGetSessionInfoResponse = function(t) {
var e;
if (t && Array.isArray(t)) {
var n = 0, o = 0, i = 0, a = 0, s = 0, r = [], l = [];
t.forEach(function(t) {
if (t.BetSide === c.BatMonConst.BatMonBetSide.RONG) {
r.push(t);
n += t.Bet || 0;
a += t.Refund || 0;
} else if (t.BetSide === c.BatMonConst.BatMonBetSide.HO) {
l.push(t);
o += t.Bet || 0;
s += t.Refund || 0;
} else t.BetSide === c.BatMonConst.BatMonBetSide.HOA && (i += t.Bet || 0);
});
if (r.length > 0 && this.rongSessionDetailListView) {
this.rongSessionDetailListView.resetList();
this.rongSessionDetailListView.initialize(r);
}
if (l.length > 0 && this.hoSessionDetailListView) {
this.hoSessionDetailListView.resetList();
this.hoSessionDetailListView.initialize(l);
}
var u = null === (e = cc.Tool) || void 0 === e ? void 0 : e.getInstance(), p = function(t) {
return u && u.formatNumberKTX ? u.formatNumberKTX(t) : t.toString();
};
this.lbTotalBetRong && (this.lbTotalBetRong.string = p(n));
this.lbTotalBetHo && (this.lbTotalBetHo.string = p(o));
this.lbTotalBetHoa && (this.lbTotalBetHoa.string = p(i));
this.lbTotalRefundRong && (this.lbTotalRefundRong.string = p(a));
this.lbTotalRefundHo && (this.lbTotalRefundHo.string = p(s));
}
};
e.prototype.nextSessionClicked = function() {
if (this.index > 0) {
this.index--;
this.rongSessionDetailListView && this.rongSessionDetailListView.resetList();
this.hoSessionDetailListView && this.hoSessionDetailListView.resetList();
this.getSessionDetailById(this.index);
this.checkStatusButton();
}
};
e.prototype.backSessionClicked = function() {
if (this.index < this.totalHistory - 1) {
this.index++;
this.rongSessionDetailListView && this.rongSessionDetailListView.resetList();
this.hoSessionDetailListView && this.hoSessionDetailListView.resetList();
this.getSessionDetailById(this.index);
this.checkStatusButton();
}
};
e.prototype.closeClicked = function() {
var t = this;
this.rongSessionDetailListView && this.rongSessionDetailListView.resetList();
this.hoSessionDetailListView && this.hoSessionDetailListView.resetList();
this.animation && this.animation.play("closePopup");
cc.director.getScheduler().schedule(function() {
var e;
t.animation && t.animation.stop();
var n = null === (e = cc.BatMonPopupController_789) || void 0 === e ? void 0 : e.getInstance();
n && n.destroySessionDetailView && n.destroySessionDetailView();
}, this, 1, 0, .12, !1);
};
e.prototype.onDestroy = function() {
this.rongSessionDetailListView && this.rongSessionDetailListView.resetList();
this.hoSessionDetailListView && this.hoSessionDetailListView.resetList();
this.schedulerCallback && cc.director.getScheduler().unschedule(this.schedulerCallback, this);
};
a([ l(p.default) ], e.prototype, "rongSessionDetailListView", void 0);
a([ l(p.default) ], e.prototype, "hoSessionDetailListView", void 0);
a([ l(cc.Label) ], e.prototype, "lbSessionID", void 0);
a([ l(cc.Node) ], e.prototype, "nodeRong", void 0);
a([ l(cc.Node) ], e.prototype, "nodeHoa", void 0);
a([ l(cc.Node) ], e.prototype, "nodeHo", void 0);
a([ l([ cc.Node ]) ], e.prototype, "nodeEffectRong", void 0);
a([ l([ cc.Node ]) ], e.prototype, "nodeEffectHoa", void 0);
a([ l([ cc.Node ]) ], e.prototype, "nodeEffectHo", void 0);
a([ l(cc.Label) ], e.prototype, "lbRong", void 0);
a([ l(cc.Label) ], e.prototype, "lbHoa", void 0);
a([ l(cc.Label) ], e.prototype, "lbHo", void 0);
a([ l(cc.Sprite) ], e.prototype, "spriteRong", void 0);
a([ l(cc.Sprite) ], e.prototype, "spriteHo", void 0);
a([ l(cc.Label) ], e.prototype, "lbTotalBetRong", void 0);
a([ l(cc.Label) ], e.prototype, "lbTotalBetHoa", void 0);
a([ l(cc.Label) ], e.prototype, "lbTotalBetHo", void 0);
a([ l(cc.Label) ], e.prototype, "lbTotalRefundRong", void 0);
a([ l(cc.Label) ], e.prototype, "lbTotalRefundHo", void 0);
a([ l(cc.Button) ], e.prototype, "btnNext", void 0);
a([ l(cc.Button) ], e.prototype, "btnBack", void 0);
return a([ r ], e);
}(lngui.UIPopup);
n.default = h;
cc._RF.pop();
}, {
"../../BatMonConst": "BatMonConst",
"../../BatMonController": "BatMonController",
"./BatMonSessionDetailListView": "BatMonSessionDetailListView"
} ],
BatMonSessionHistoryView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "09558WQsb5DE5PPKDsQ7HD4", "BatMonSessionHistoryView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, l = s.property, c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeSessionHistory = null;
e.nodeTemp = null;
return e;
}
n = e;
e.getInstance = function() {
return this._instance;
};
e.prototype.onLoad = function() {
n._instance = this;
this.resetDraw();
};
e.prototype.onDestroy = function() {
n._instance === this && (n._instance = null);
};
e.prototype.updateGameHistoryUI = function(t) {
if (t) {
var e = Math.min(t.length, 15);
this.resetDraw();
for (var n = function() {
var e = cc.instantiate(o.nodeTemp), n = t[i], a = [ Number(n.Ball1), Number(n.Ball2), Number(n.Ball3), Number(n.Ball4) ];
e.active = !0;
e.setPosition(0, 0);
var s = e.children, r = {};
a.forEach(function(t) {
r[t] = (r[t] || 0) + 1;
});
var l = new Set();
a.forEach(function(t) {
var e, n = s[t - 1];
n.active = !0;
if (!l.has(t)) {
l.add(t);
var o = r[t];
if (o >= 2) {
var i = null === (e = n.getChildByName("count")) || void 0 === e ? void 0 : e.getComponent(cc.Label);
i && (i.string = o.toString());
}
}
});
o.nodeSessionHistory.addChild(e);
}, o = this, i = 0; i < e; i++) n();
}
};
e.prototype.resetDraw = function() {
this.nodeSessionHistory.removeAllChildren();
};
var n;
e._instance = null;
a([ l(cc.Node) ], e.prototype, "nodeSessionHistory", void 0);
a([ l(cc.Node) ], e.prototype, "nodeTemp", void 0);
return n = a([ r ], e);
}(cc.Component);
n.default = c;
cc._RF.pop();
}, {} ],
BatMonSettingRoomView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "34cacW8yVlNa657lGDHJCW+", "BatMonSettingRoomView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, l = s.property, c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeDismiss = null;
e.isMusicBackground = !0;
e.isAudio = !0;
e.isOpenMenu = !1;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.onEnable = function() {
this.isMusicBackground = !0;
this.isAudio = !0;
this.isOpenMenu = !1;
this.nodeDismiss.active = this.isOpenMenu;
};
e.prototype.onSelectMenu = function() {
if (0 == this.isOpenMenu) {
this.isOpenMenu = !0;
this.node.stopAllActions();
(e = cc.moveTo(.5, cc.v2(-670, this.node.position.y))).easing(cc.easeQuadraticActionInOut());
var t = cc.callFunc(this.onShowFinish.bind(this), null);
this.node.runAction(cc.sequence(e, t));
} else {
this.isOpenMenu = !1;
this.node.stopAllActions();
var e;
(e = cc.moveTo(.5, cc.v2(-1100, this.node.position.y))).easing(cc.easeQuadraticActionInOut());
t = cc.callFunc(this.onShowFinish.bind(this), null);
this.node.runAction(cc.sequence(e, t));
}
};
e.prototype.onShowFinish = function() {
this.nodeDismiss.active = this.isOpenMenu;
};
a([ l(cc.Node) ], e.prototype, "nodeDismiss", void 0);
return a([ r ], e);
}(cc.Component);
n.default = c;
cc._RF.pop();
}, {} ],
BatMonTopItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6e59dfMkBxO7YPhid0qhhVA", "BatMonTopItem");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, l = s.property, c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbRank = null;
e.lbSID = null;
e.lbNickName = null;
e.lbTotalWin = null;
e.spriteTop = null;
e.spTop = [];
e.liner = null;
e.item = null;
e.itemID = 0;
return e;
}
e.prototype.updateItem = function(t, e) {
var n, o, i;
if (t) {
this.liner.active = e % 2 != 0;
if (e < 3) {
this.lbRank && this.lbRank.node && (this.lbRank.node.active = !1);
if (this.spriteTop && this.spriteTop.node) {
this.spriteTop.node.active = !0;
this.spTop && this.spTop[e] && (this.spriteTop.spriteFrame = this.spTop[e]);
}
} else {
if (this.lbRank && this.lbRank.node) {
this.lbRank.node.active = !0;
this.lbRank.string = (e + 1).toString();
}
this.spriteTop && this.spriteTop.node && (this.spriteTop.node.active = !1);
}
if (this.lbSID) {
var a = null === (n = cc.Config) || void 0 === n ? void 0 : n.getInstance();
a && a.getServiceNameNoFormat && t.ServiceID ? this.lbSID.string = a.getServiceNameNoFormat(t.ServiceID) : this.lbSID.string = (null === (o = t.ServiceID) || void 0 === o ? void 0 : o.toString()) || "";
}
this.lbNickName && (this.lbNickName.string = t.DisplayName || t.NickName || "");
if (this.lbTotalWin) {
var s = null === (i = cc.Tool) || void 0 === i ? void 0 : i.getInstance();
s && s.formatNumber ? this.lbTotalWin.string = s.formatNumber(t.Award || 0) : this.lbTotalWin.string = (t.Award || 0).toString();
}
this.item = t;
this.itemID = e;
}
};
a([ l(cc.Label) ], e.prototype, "lbRank", void 0);
a([ l(cc.Label) ], e.prototype, "lbSID", void 0);
a([ l(cc.Label) ], e.prototype, "lbNickName", void 0);
a([ l(cc.Label) ], e.prototype, "lbTotalWin", void 0);
a([ l(cc.Sprite) ], e.prototype, "spriteTop", void 0);
a([ l([ cc.SpriteFrame ]) ], e.prototype, "spTop", void 0);
a([ l(cc.Node) ], e.prototype, "liner", void 0);
return a([ r ], e);
}(cc.Component);
n.default = c;
cc._RF.pop();
}, {} ],
BatMonTopJackpotView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d43db3nltNHZa8pcrrbAOlA", "BatMonTopJackpotView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, l = s.property, c = t("../../BatMonConst"), u = function() {
function t() {
this.nodeContentUser = null;
this.nodeItemUserTemplate = null;
this.spfRank = [];
}
a([ l(cc.Node) ], t.prototype, "nodeContentUser", void 0);
a([ l(cc.Node) ], t.prototype, "nodeItemUserTemplate", void 0);
a([ l(cc.SpriteFrame) ], t.prototype, "spfRank", void 0);
return a([ r("DetailJackpot") ], t);
}(), p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.page = null;
e.nodeJp = null;
e.nodeDetailJp = null;
e.nodeContentJp = null;
e.nodeItemJpTemplate = null;
e.btnNextorPrevious = [];
e.spfBall = [];
e.detailJackpot = new u();
e.schedulerCallback = null;
e.index = 0;
e.maxindex = null;
e.activeTemplate = null;
return e;
}
e.prototype.onLoad = function() {
this.nodeDetailJp.active = !1;
};
e.prototype.onEnable = function() {
var t = this;
this.schedulerCallback = function() {
t.getTopJackpot();
};
cc.director.getScheduler().schedule(this.schedulerCallback, this, 1, 0, .2, !1);
};
e.prototype.getTopJackpot = function() {
var t = this, e = c.BatMonConst.api.jackpotHistory;
lngui.Https.get(e, function(e) {
e && t.onBatMonGetTopJackpotResponse(e);
});
};
e.prototype.onBatMonGetTopJackpotResponse = function(t) {
if (t && Array.isArray(t) && 0 !== t.length) {
this.listData = c.BatMonConst.chunkArray(t, 5);
this.maxindex = this.listData.length;
this.index = 0;
this.showTopJackpot(this.listData[this.index]);
this.checkButton();
}
};
e.prototype.onClickNext = function() {
if (null !== this.maxindex && void 0 !== this.maxindex && this.index < this.maxindex - 1) {
this.index++;
this.showTopJackpot(this.listData[this.index]);
this.checkButton();
}
};
e.prototype.onClickPrevious = function() {
if (this.index > 0) {
this.index--;
this.showTopJackpot(this.listData[this.index]);
this.checkButton();
}
};
e.prototype.checkButton = function() {
if (this.btnNextorPrevious && !(this.btnNextorPrevious.length < 2)) {
this.page.string = this.index + 1 + "/" + this.maxindex;
this.nodeDetailJp.active = !1;
if (null !== this.maxindex && void 0 !== this.maxindex && 0 !== this.maxindex) {
this.btnNextorPrevious[0] && (this.btnNextorPrevious[0].active = !0);
this.btnNextorPrevious[1] && (this.btnNextorPrevious[1].active = !0);
0 === this.index && this.btnNextorPrevious[0] && (this.btnNextorPrevious[0].active = !1);
this.index === this.maxindex - 1 && this.btnNextorPrevious[1] && (this.btnNextorPrevious[1].active = !1);
} else {
this.btnNextorPrevious[0] && (this.btnNextorPrevious[0].active = !1);
this.btnNextorPrevious[1] && (this.btnNextorPrevious[1].active = !1);
}
}
};
e.prototype.showTopJackpot = function(t) {
var e = this;
if (t) {
t && lngui.UIWaitingLayout.hideWaiting();
this.nodeContentJp.removeAllChildren();
this.activeTemplate = null;
for (var n = function() {
var n = cc.instantiate(o.nodeItemJpTemplate), a = t[i], s = a.JackpotValue;
n.active = !0;
n.setPosition(0, 0);
n.getChildByName("time").getComponent(cc.Label).string = c.BatMonConst.formatDateTime4(a.CreatedDate);
n.getChildByName("lbJackpot").getComponent(cc.Label).string = c.BatMonConst.formatNumber(s);
n.getChildByName("liner").active = i % 2 == 0;
var r = n.getChildByName("btnDetail");
if (r) {
var l = r.getComponent(cc.Button);
if (l) {
r.itemData = a;
r.itemIndex = i;
l.node.off(cc.Node.EventType.TOUCH_END);
l.node.on(cc.Node.EventType.TOUCH_END, function() {
if (e.activeTemplate && e.activeTemplate.isValid) {
var t = e.activeTemplate.getChildByName("arrow");
t && (t.active = !1);
}
var o = n.getChildByName("arrow");
o && (o.active = !0);
e.activeTemplate = n;
e.onClickDetail(a, i);
}, o);
}
}
n.getChildByName("ball1").getComponent(cc.Sprite).spriteFrame = o.spfBall[parseInt(a.Ball1)];
n.getChildByName("ball2").getComponent(cc.Sprite).spriteFrame = o.spfBall[parseInt(a.Ball1)];
n.getChildByName("ball3").getComponent(cc.Sprite).spriteFrame = o.spfBall[parseInt(a.Ball1)];
n.getChildByName("ball4").getComponent(cc.Sprite).spriteFrame = o.spfBall[parseInt(a.Ball1)];
o.nodeContentJp.addChild(n);
}, o = this, i = 0; i < t.length; i++) n();
}
};
e.prototype.onClickDetail = function(t) {
if (t) {
var e = t.Data;
this.nodeDetailJp.active = !0;
this.nodeJp.active = !1;
var n = Math.min(e.length, 20);
if (this.nodeDetailJp) {
this.detailJackpot.nodeContentUser.removeAllChildren();
for (var o = 0; o < n; o++) {
var i = cc.instantiate(this.detailJackpot.nodeItemUserTemplate), a = e[o];
i.active = !0;
i.setPosition(0, 0);
if (o < 3) {
i.getChildByName("sprRank").active = !0;
i.getChildByName("sprRank").getComponent(cc.Sprite).spriteFrame = this.detailJackpot.spfRank[o];
} else i.getChildByName("rank").getComponent(cc.Label).string = (o + 1).toString();
i.getChildByName("liner").active = o % 2 == 0;
i.getChildByName("name").getComponent(cc.Label).string = c.BatMonConst.truncateString(a.Username);
i.getChildByName("lbBet").getComponent(cc.Label).string = c.BatMonConst.formatNumber(a.BetValue);
i.getChildByName("lbWin").getComponent(cc.Label).string = c.BatMonConst.formatNumber(a.PrizeValue);
this.detailJackpot.nodeContentUser.addChild(i);
}
}
}
};
e.prototype.hideDetail = function() {
this.nodeDetailJp.active = !1;
this.nodeJp.active = !0;
};
e.prototype.onDestroy = function() {
this.schedulerCallback && cc.director.getScheduler().unschedule(this.schedulerCallback, this);
};
a([ l(cc.Label) ], e.prototype, "page", void 0);
a([ l(cc.Node) ], e.prototype, "nodeJp", void 0);
a([ l(cc.Node) ], e.prototype, "nodeDetailJp", void 0);
a([ l(cc.Node) ], e.prototype, "nodeContentJp", void 0);
a([ l(cc.Node) ], e.prototype, "nodeItemJpTemplate", void 0);
a([ l(cc.Node) ], e.prototype, "btnNextorPrevious", void 0);
a([ l(cc.SpriteFrame) ], e.prototype, "spfBall", void 0);
a([ l(u) ], e.prototype, "detailJackpot", void 0);
return a([ r ], e);
}(lngui.UIPopup);
n.default = p;
cc._RF.pop();
}, {
"../../BatMonConst": "BatMonConst"
} ],
BatMonTopListView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7fc88L8uFZPRpbTP9dC40vo", "BatMonTopListView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, l = s.property, c = t("./BatMonTopItem"), u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.itemTemplate = null;
e.scrollView = null;
e.spawnCount = 10;
e.spacing = 15;
e.items = [];
e.content = null;
e.rootContentY = 0;
e.messages = [];
e.updateTimer = 0;
e.updateInterval = .1;
e.bufferZone = 400;
e.lastContentPosY = 0;
return e;
}
e.prototype.onLoad = function() {
this.items = [];
this.updateTimer = 0;
this.lastContentPosY = 0;
if (this.scrollView) {
this.content = this.scrollView.content;
this.rootContentY = this.content ? this.content.y : 0;
}
};
e.prototype.resetList = function() {
if (this.scrollView) {
this.items = [];
this.scrollView.stopAutoScroll();
if (this.content) {
this.content.y = this.rootContentY;
for (var t = this.content.children.slice(), e = t.length - 1; e >= 0; e--) t[e] && this.content.removeChild(t[e]);
}
}
};
e.prototype.getPositionInView = function(t) {
if (!t || !this.scrollView) return cc.v3(0, 0, 0);
var e = t.parent.convertToWorldSpaceAR(t.position);
return this.scrollView.node.convertToNodeSpaceAR(e);
};
e.prototype.initialize = function(t) {
if (t && Array.isArray(t) && 0 !== t.length && this.scrollView && this.itemTemplate && this.content) {
this.messages = t;
var e = this.messages.length, n = this.itemTemplate.height || 100;
this.content.height = e * (n + this.spacing) + this.spacing;
for (var o = Math.min(this.spawnCount, e), i = 0; i < o; ++i) {
var a = cc.instantiate(this.itemTemplate);
if (a) {
this.content.addChild(a);
a.setPosition(0, -n * (.5 + i) - this.spacing * (i + 1));
var s = a.getComponent(c.default);
s && this.messages[i] && s.updateItem(this.messages[i], i);
this.items.push(a);
}
}
this.rootContentY = this.content.y;
this.lastContentPosY = this.content.y;
}
};
e.prototype.update = function(t) {
if (this.scrollView && this.content && 0 !== this.items.length) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.items, n = this.bufferZone, o = this.scrollView.content.y < this.lastContentPosY, i = ((this.itemTemplate.height || 100) + this.spacing) * e.length, a = 0; a < e.length; ++a) if (e[a]) {
var s = this.getPositionInView(e[a]);
if (o) {
if (s.y < -n && e[a].y + i < 0) {
e[a].y = e[a].y + i;
if (l = e[a].getComponent(c.default)) {
var r = l.itemID - e.length;
void 0 !== this.messages[r] && r >= 0 && l.updateItem(this.messages[r], r);
}
}
} else if (s.y > n && e[a].y - i > -this.content.height) {
e[a].y = e[a].y - i;
var l;
if (l = e[a].getComponent(c.default)) {
r = l.itemID + e.length;
void 0 !== this.messages[r] && r < this.messages.length && l.updateItem(this.messages[r], r);
}
}
}
this.lastContentPosY = this.scrollView.content.y;
}
}
};
a([ l(cc.Node) ], e.prototype, "itemTemplate", void 0);
a([ l(cc.ScrollView) ], e.prototype, "scrollView", void 0);
a([ l ], e.prototype, "spawnCount", void 0);
a([ l ], e.prototype, "spacing", void 0);
a([ l ], e.prototype, "updateInterval", void 0);
a([ l ], e.prototype, "bufferZone", void 0);
return a([ r ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"./BatMonTopItem": "BatMonTopItem"
} ],
BatMonTopView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "5e9bapBtJVHA5py72NRzb1a", "BatMonTopView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, l = s.property, c = t("../../BatMonConst"), u = t("./BatMonTopListView"), p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.BatMonTopListView = null;
e.schedulerCallback = null;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.onEnable = function() {
var t = this;
this.schedulerCallback = function() {
t.getTopSessionWinners();
};
cc.director.getScheduler().schedule(this.schedulerCallback, this, 1, 0, .2, !1);
};
e.prototype.getTopSessionWinners = function() {
var t = this, e = c.BatMonConst.api.GetBigWinner;
lngui.Https.get(e, function(e) {
e && t.onBatMonGetBigWinnerResponse(e);
});
};
e.prototype.onBatMonGetBigWinnerResponse = function(t) {
if (t && Array.isArray(t) && 0 !== t.length && this.BatMonTopListView) {
this.BatMonTopListView.resetList();
this.BatMonTopListView.initialize(t);
}
};
e.prototype.onDestroy = function() {
this.BatMonTopListView && this.BatMonTopListView.resetList();
this.schedulerCallback && cc.director.getScheduler().unschedule(this.schedulerCallback, this);
};
a([ l(u.default) ], e.prototype, "BatMonTopListView", void 0);
return a([ r ], e);
}(lngui.UIPopup);
n.default = p;
cc._RF.pop();
}, {
"../../BatMonConst": "BatMonConst",
"./BatMonTopListView": "BatMonTopListView"
} ],
BatMonView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "92996KRmSdLLLDVE0oIfBE/", "BatMonView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, l = s.property, c = t("./BatMonController"), u = t("./BatMonConst"), p = t("./BatMonButtonSideBet"), h = t("./BatMonWheelController"), d = t("./BatMonSessionHistoryView"), f = t("../../framework/ui/UINumericLabelHelper"), B = t("./BatMonBetView"), m = t("./BatMonResultEffectView"), y = t("./BatMonInfoView"), g = (t("NetConfig"), 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbSID = null;
e.lbTimer = null;
e.lbTimerPrepare = null;
e.lbTotalUser = null;
e.lbTotalUserWin = null;
e.lbTotalBetYellow = null;
e.lbTotalBetGreen = null;
e.lbTotalBetTurqousie = null;
e.lbTotalBetBlue = null;
e.lbTotalBetRed = null;
e.lbTotalBetPink = null;
e.lbTotalBetPurple = null;
e.lbTotalBetWhite = null;
e.lbJackpot = null;
e.listAvatars = [];
e.spMoveJp = null;
e.BatMonHub = null;
e.mListenerKey = "OnBatMonToWebSocKet";
e.isPlaying = !1;
e.maxTime = 3e4;
e.md5andResultString = "";
return e;
}
n = e;
e.getInstance = function() {
return this._instance;
};
e.prototype.onLoad = function() {
n._instance = this;
c.default.getInstance().setBatMonView(this);
c.default.getInstance().initBetLog();
c.default.getInstance().setBetLogSession(1);
c.default.getInstance().setAvatars(this.listAvatars);
this.isPlaying = !1;
this.interval = null;
this.lastTimeReconnect = new Date().getTime();
this.connectHubBatMon();
this.currentState = -1;
this.currentTimeEllapse = -1;
this.moveCardToBurn = !1;
this.runSuffler = !1;
this.historyResult = "";
this.accountId = lngui.UserManager.instance.mainUserInfo.AccountID;
this.isLockTimerProgress = !1;
this.timerInterval = null;
this.spMoveJp.clearTracks();
};
e.prototype.onEnable = function() {
var t = lngui.UserManager.instance.mainUserInfo.Money;
lngui.GameCoreManager.instance.updateTotalGold(t);
};
e.prototype.onDestroy = function() {
var t = lngui.UserManager.instance.mainUserInfo.Money;
lngui.GameCoreManager.instance.updateTotalGold(t);
this.sendRequestOnHub(u.BatMonConst.MethodHubName.EXIT_LOBBY);
this.BatMonHub.close();
null !== this.interval && clearInterval(this.interval);
this.unscheduleAllCallbacks();
c.default.getInstance().setBatMonView(null);
};
e.prototype.reset = function() {
this.lbTotalBetYellow && (this.lbTotalBetYellow.string = "");
this.lbTotalBetGreen && (this.lbTotalBetGreen.string = "");
this.lbTotalBetTurqousie && (this.lbTotalBetTurqousie.string = "");
this.lbTotalBetBlue && (this.lbTotalBetBlue.string = "");
this.lbTotalBetRed && (this.lbTotalBetRed.string = "");
this.lbTotalBetPink && (this.lbTotalBetPink.string = "");
this.lbTotalBetPurple && (this.lbTotalBetPurple.string = "");
this.lbTotalBetWhite && (this.lbTotalBetWhite.string = "");
this.isTimer = !1;
this.timer = 0;
this.currentState = 999;
B.default.getInstance().reset();
null !== this.interval && clearInterval(this.interval);
};
e.prototype.startTimer = function(t) {
null !== this.interval && clearInterval(this.interval);
var e = this;
this.timer = t;
this.isTimer = !0;
this.updateTimer(t);
this.interval = setInterval(function() {
if (e.isTimer) {
e.timer -= 1;
e.updateTimer(Math.round(e.timer));
}
}, 1e3);
e = this;
};
e.prototype.stopTimer = function() {
this.isTimer = !1;
null !== this.interval && clearInterval(this.interval);
};
e.prototype.btnCopy = function() {
lngui.PlatformInterface.copy(this.md5andResultString);
};
e.prototype.updateInfo = function(t) {
var e = this, n = t.IsShuffler, o = (t.CurrentState, t.Ellapsed);
this.currentTimeEllapse = o;
this.lbJackpot.scheduleProgress(t.JackpotAmount);
switch (t.CurrentState) {
case u.BatMonConst.BatMonState.BETTING:
if (this.currentState !== t.CurrentState) {
u.BatMonConst.winResult = 0;
c.default.getInstance().stopResultEffect();
c.default.getInstance().disableBetAgain(!1);
p.default.getInstance().enableButtonBet(!0);
this.activeNodeTime(!0);
o > 7 && lngui.UITextManager.showCenterNotification("Đặt cửa");
this.lbSID.string = "#" + t.SessionID;
}
break;

case u.BatMonConst.BatMonState.END_BETTING:
c.default.getInstance().disableBetAgain(!0);
p.default.getInstance().enableButtonBet(!1);
if (this.currentState !== t.CurrentState) {
lngui.UITextManager.showCenterNotification("Hết thời gian đặt cửa");
this.lbSID.string = "#" + t.SessionID;
o < 3 && cc.game.isPaused();
h.default.getInstance().showX2(t.Result.X2Positions);
}
break;

case u.BatMonConst.BatMonState.RESULT:
p.default.getInstance().enableButtonBet(!1);
this.historyResult = t;
if (this.currentState !== t.CurrentState) {
c.default.getInstance().disableBetAgain(!0);
this.isPlaying = !1;
this.lbSID.string = "#" + t.SessionID;
var i = [ t.Result.Ball1, t.Result.Ball2, t.Result.Ball3, t.Result.Ball4 ];
o > 8 && h.default.getInstance().spinTo(i);
this.scheduleOnce(function() {
e.spMoveJp.setAnimation(0, "Debit", !1);
}, 8);
u.BatMonConst.isJackpot = t.Result.IsJackpot;
}
6 == t.Ellapsed && cc.game.isPaused();
n && 4 == t.Ellapsed && !cc.game.isPaused() && (this.runSuffler = !0);
break;

case u.BatMonConst.BatMonState.PREPARE_NEW_SESSION:
p.default.getInstance().enableButtonBet(!1);
if (this.currentState !== t.CurrentState) {
c.default.getInstance().disableBetAgain(!0);
c.default.getInstance().resetPlayerUI();
c.default.getInstance().clearBetLog(c.default.getInstance().getBetLogSession());
c.default.getInstance().setBetLogSession(c.default.getInstance().getBetLogSession() + 1);
this.reset();
this.lbSID.string = "#" + t.SessionID;
h.default.getInstance().hideX2();
h.default.getInstance().activeLayerWin(!1);
m.default.getInstance().stopEffect();
}
}
this.currentState = t.CurrentState;
c.default.getInstance().setCurrentState(parseInt(this.currentState));
this.startTimer(t.Ellapsed);
this.lbTotalBetYellow && (this.lbTotalBetYellow.string = this.formatNumber(t.TotalBetYellow));
this.lbTotalBetGreen && (this.lbTotalBetGreen.string = this.formatNumber(t.TotalBetGreen));
this.lbTotalBetTurqousie && (this.lbTotalBetTurqousie.string = this.formatNumber(t.TotalBetCyan));
this.lbTotalBetBlue && (this.lbTotalBetBlue.string = this.formatNumber(t.TotalBetBlue));
this.lbTotalBetRed && (this.lbTotalBetRed.string = this.formatNumber(t.TotalBetRed));
this.lbTotalBetPink && (this.lbTotalBetPink.string = this.formatNumber(t.TotalBetPink));
this.lbTotalBetPurple && (this.lbTotalBetPurple.string = this.formatNumber(t.TotalBetPurple));
this.lbTotalBetWhite && (this.lbTotalBetWhite.string = this.formatNumber(t.TotalBetGrey));
};
e.prototype.formatNumber = function(t) {
return 0 == parseInt(t) ? "" : u.BatMonConst.formatNumberToKMB(t);
};
e.prototype.updateTotalUser = function(t) {
this.lbTotalUser.string = t.toString();
};
e.prototype.updateTimer = function(t) {
if (!(t < 1)) {
var e = t;
switch (this.currentState) {
case u.BatMonConst.BatMonState.BETTING:
this.lbTimer.string = e;
break;

case u.BatMonConst.BatMonState.END_BETTING:
this.lbTimer.string = e;
var n = t > 1;
this.activeNodeTime(n);
break;

case u.BatMonConst.BatMonState.RESULT:
this.lbTimer.string = e;
break;

case u.BatMonConst.BatMonState.PREPARE_NEW_SESSION:
this.activeNodeTime(!1);
}
}
};
e.prototype.activeNodeTime = function(t) {
this.lbTimer.node.active = t;
};
e.prototype.connectHubBatMon = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
this.BatMonHub = new lngui.GateSignalR();
this.BatMonHub.connect(this.mListenerKey, u.BatMonConst.api.negotiate, u.BatMonConst.api.hub, u.BatMonConst.api.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.showMd5OrResult = function() {};
e.prototype.sendRequestOnHub = function(t, e, n) {
void 0 === t && (t = "");
void 0 === e && (e = "");
void 0 === n && (n = "");
console.log(t, e, n);
switch (t) {
case u.BatMonConst.MethodHubName.ENTER_LOBBY:
this.sendSignalR("EnterLobby", [ 4, 1 ]);
this.sendSignalR("PlayNow", []);
break;

case u.BatMonConst.MethodHubName.EXIT_LOBBY:
this.sendSignalR("ExitLobby", []);
break;

case u.BatMonConst.MethodHubName.PLAY_NOW:
this.sendSignalR("PlayNow", []);
break;

case u.BatMonConst.MethodHubName.BET:
this.sendSignalR("Bet", [ e, n ]);
break;

case u.BatMonConst.MethodHubName.REGISTER_LEAVE_ROOM:
this.sendSignalR("RegisterLeaveRoom", []);
break;

case u.BatMonConst.MethodHubName.UNREGISTER_LEAVE_ROOM:
this.sendSignalR("UnregisterLeaveRoom", []);
break;

case u.BatMonConst.MethodHubName.SEND_MESSAGE:
}
};
e.prototype.sendSignalR = function(t, e) {
lngui.ZLog.log("SendSocket==========================>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.BatMonHub && this.BatMonHub.send(t, e);
};
e.prototype.onResponeData = function(t) {
t.s && "error" == t.s || this.onHubMessage(t);
};
e.prototype.connectSuccess = function() {
console.log("connectSuccess =========>");
this.sendRequestOnHub(u.BatMonConst.MethodHubName.ENTER_LOBBY);
};
e.prototype.onHubMessage = function(t) {
var e = this;
if (("open" == t.s || "reconnect" == t.s || "1" == t.s) && !this.isConnect) {
this.isConnect = !0;
this.connectSuccess();
}
if (void 0 !== t.M && t.M.length > 0) {
var n = this;
t.M.map(function(t) {
switch (t.M) {
case u.BatMonConst.MethodHubOnName.PLAYER_LEAVE:
c.default.getInstance().unRegisterAllPlayer();
e.playerLeave(t.A);
break;

case u.BatMonConst.MethodHubOnName.JOIN_GAME:
c.default.getInstance().updatePlayerInfor(t.A[0]);
break;

case u.BatMonConst.MethodHubOnName.SESSION_INFO:
var o = t.A[0];
e.updateInfo(o);
c.default.getInstance().setSID(o.SessionID);
break;

case u.BatMonConst.MethodHubOnName.GAME_HISTORY:
d.default.getInstance().updateGameHistoryUI(t.A[0].Data);
break;

case u.BatMonConst.MethodHubOnName.BET_OF_ACCOUNT:
c.default.getInstance().updateBetInfoFromServer(t.A[0]);
break;

case u.BatMonConst.MethodHubOnName.BET_SUCCESS:
o = t.A[0];
lngui.UIWaitingLayout.hideWaiting();
e.isPlaying = !0;
var i = c.default.getInstance().getBetLogSession();
c.default.getInstance().setBetLog({
sessionID: i,
value: t.A[0].BetValue,
betSide: t.A[0].BetSide
});
lngui.UserManager.instance.mainUserInfo.Money = t.A[1];
lngui.GameCoreManager.instance.updateTotalGold(lngui.UserManager.instance.mainUserInfo.Money);
c.default.getInstance().updateTotalBetValue(t.A[0].BetSide, t.A[0].SumaryBet);
c.default.getInstance().updateBalanceCurrPlayer(t.A[1]);
lngui.UITextManager.showCenterNotification("Đặt cược thành công");
break;

case u.BatMonConst.MethodHubOnName.WIN_RESULT:
o = t.A[0];
try {
lngui.UserManager.instance.mainUserInfo.Money = o.Balance;
lngui.GameCoreManager.instance.updateTotalGold(lngui.UserManager.instance.mainUserInfo.Money);
c.default.getInstance().resetBetInfo();
y.default.getInstance().winResult(o);
u.BatMonConst.winResult = o.Award;
m.default.getInstance().showResult();
} catch (t) {}
break;

case u.BatMonConst.MethodHubOnName.WIN_RESULT_VIP:
if (t.A.length > 0) try {
setTimeout(function() {
y.default.getInstance().winResultVip(t.A[0]);
}, 2500);
} catch (t) {}
break;

case u.BatMonConst.MethodHubOnName.MESSAGE:
(o = t.A[0]).Description ? lngui.UIPopupManager.instance.showPopup(o.Description) : o.Message ? lngui.UIPopupManager.instance.showPopup(o.Message) : lngui.UITextManager.showCenterNotification(o);
break;

case u.BatMonConst.MethodHubOnName.TOTAL_WIN_MONEY:
var a = t.A[0];
parseInt(a) > 0 && setTimeout(function() {
try {
n.lbTotalUserWin.string = "+" + u.BatMonConst.formatNumber(a);
n.lbTotalUserWin.node.parent.getComponent(cc.Animation).play("total-money-animation");
} catch (t) {}
}, 2e3);
break;

case u.BatMonConst.MethodHubOnName.REJOIN:
var s = t.A[0];
s.length > 0 && s.map(function(t) {
0 != t.length && t.map(function(t) {
t.BetValue, t.BetSide;
});
});
break;

case u.BatMonConst.MethodHubOnName.BET_SESSION:
t.A[0].length > 0 && t.A[0].map(function(t) {
0 != t.length && t.map(function(t) {
t.BetValue, t.BetSide, t.AccountID;
});
});
break;

case u.BatMonConst.MethodHubOnName.BET_USER:
(o = t.A)[2] != e.accountId && c.default.getInstance().updatePlayerBalance(o);
break;

case u.BatMonConst.MethodHubOnName.SUMMARY_PLAYER:
e.updateTotalUser(t.A[0]);
break;

case u.BatMonConst.MethodHubOnName.VIP_PLAYERS:
var r = t.A[0];
r.length > 0 && c.default.getInstance().updatePlayersUI(r);
break;

case u.BatMonConst.MethodHubOnName.OTHER_DEVICE:
break;

case u.BatMonConst.MethodHubOnName.RECEIVE_MESSAGE:
c.default.getInstance().playerShowBubbleChat(t.A);
}
});
} else if (t.R && t.R.AccountID) {
this.sendRequestOnHub(u.BatMonConst.MethodHubName.PLAY_NOW);
lngui.UIWaitingLayout.hideWaiting();
} else t.I;
};
e.prototype.playerLeave = function(t) {
if (t[0] === lngui.UserManager.instance.mainUserInfo.AccountID) {
var e = t[1];
this.backClicked();
lngui.UIPopupManager.instance.showPopup(e);
}
};
e.prototype.backClicked = function() {
lngui.UIScreenManager.instance.popToRootScreen();
};
e.prototype.cardMoveTo = function(t, e, n) {
var o = cc.moveTo(n, e);
o.easing(cc.easeInOut(3));
t.runAction(o);
var i = cc.scaleTo(n, 1);
t.runAction(i);
var a = cc.scaleTo(n, 1.5, 1.5);
t.runAction(a);
var s = cc.rotateTo(n, 0);
t.runAction(s);
};
var n;
e._instance = null;
a([ l(cc.Label) ], e.prototype, "lbSID", void 0);
a([ l(cc.Label) ], e.prototype, "lbTimer", void 0);
a([ l(cc.Label) ], e.prototype, "lbTimerPrepare", void 0);
a([ l(cc.Label) ], e.prototype, "lbTotalUser", void 0);
a([ l(cc.Label) ], e.prototype, "lbTotalUserWin", void 0);
a([ l(cc.Label) ], e.prototype, "lbTotalBetYellow", void 0);
a([ l(cc.Label) ], e.prototype, "lbTotalBetGreen", void 0);
a([ l(cc.Label) ], e.prototype, "lbTotalBetTurqousie", void 0);
a([ l(cc.Label) ], e.prototype, "lbTotalBetBlue", void 0);
a([ l(cc.Label) ], e.prototype, "lbTotalBetRed", void 0);
a([ l(cc.Label) ], e.prototype, "lbTotalBetPink", void 0);
a([ l(cc.Label) ], e.prototype, "lbTotalBetPurple", void 0);
a([ l(cc.Label) ], e.prototype, "lbTotalBetWhite", void 0);
a([ l(f.default) ], e.prototype, "lbJackpot", void 0);
a([ l(cc.SpriteFrame) ], e.prototype, "listAvatars", void 0);
a([ l(sp.Skeleton) ], e.prototype, "spMoveJp", void 0);
return n = a([ r ], e);
}(cc.Component));
n.default = g;
cc._RF.pop();
}, {
"../../framework/ui/UINumericLabelHelper": void 0,
"./BatMonBetView": "BatMonBetView",
"./BatMonButtonSideBet": "BatMonButtonSideBet",
"./BatMonConst": "BatMonConst",
"./BatMonController": "BatMonController",
"./BatMonInfoView": "BatMonInfoView",
"./BatMonResultEffectView": "BatMonResultEffectView",
"./BatMonSessionHistoryView": "BatMonSessionHistoryView",
"./BatMonWheelController": "BatMonWheelController",
NetConfig: void 0
} ],
BatMonWheelController: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f895e8XcCpHkIMvcg0vLwt4", "BatMonWheelController");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, l = s.property, c = t("./BatMonResultEffectView"), u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.ringBig = null;
e.ringMid1 = null;
e.ringMid2 = null;
e.ringSmall = null;
e.wheelShakeRoot = null;
e.wheelWinBlacklayer = null;
e.baseDuration = 4;
e.angleFineTune = 0;
e.baseExtraRounds = 12;
e.smallEndRatio = .82;
e.mid2EndRatio = .88;
e.mid1EndRatio = .94;
e.bigEndRatio = 1;
e.vibrateAngle = .6;
e.vibrateFrequency = 90;
e.vibrateMove = 2.5;
e.vibrateMoveFreq = 80;
e.enableFloat = !0;
e.floatMoveY = 4;
e.floatScale = .02;
e.floatFrequency = .4;
e.SLICE_COUNT = 8;
e.STEP_DEG = 45;
e.isSpinning = !1;
e.currentResults = [ 0, 0, 0, 0 ];
e.tasks = [];
e.shakeBasePos = cc.v3();
e.curveKeys = [ {
t: 0,
v: 0
}, {
t: .04,
v: 1.2
}, {
t: .12,
v: 1.6
}, {
t: .6,
v: 1.5
}, {
t: .78,
v: .85
}, {
t: .9,
v: .35
}, {
t: .97,
v: .1
}, {
t: 1,
v: 0
} ];
e.curveSamples = [];
e.curveCum = [];
e.curveIntegral = 1;
e.vibratePower = 0;
e.isFloating = !0;
e.floatTween = null;
e.vibrateScheduleFunc = null;
e.resultsData = [];
e.spinUpdateFunc = null;
return e;
}
n = e;
e.getInstance = function() {
return this._instance;
};
e.prototype.onLoad = function() {
n._instance = this;
this.buildCurveTable(240);
this.currentResults = [ this.rand(), this.rand(), this.rand(), this.rand() ];
this.applyResultInstant();
this.wheelShakeRoot && (this.shakeBasePos = this.wheelShakeRoot.position.clone());
this.startFloatEffect();
};
e.prototype.onDestroy = function() {
this.stopFloatEffect();
this.stopVibrate();
this.stopSpinUpdate();
this.unscheduleAllCallbacks();
};
e.prototype.startFloatEffect = function() {
if (this.wheelShakeRoot && this.enableFloat) {
this.stopFloatEffect();
var t = 1 / this.floatFrequency;
this.floatTween = cc.tween(this.wheelShakeRoot).repeatForever(cc.tween().to(t / 2, {
position: cc.v3(this.shakeBasePos.x, this.shakeBasePos.y + this.floatMoveY, this.shakeBasePos.z),
scale: 1 + this.floatScale
}, {
easing: "sineInOut"
}).to(t / 2, {
position: cc.v3(this.shakeBasePos.x, this.shakeBasePos.y - this.floatMoveY, this.shakeBasePos.z),
scale: 1 - this.floatScale
}, {
easing: "sineInOut"
})).start();
}
};
e.prototype.stopFloatEffect = function() {
if (this.floatTween) {
cc.Tween.stopAllByTarget(this.wheelShakeRoot);
this.floatTween = null;
}
if (this.wheelShakeRoot) {
this.wheelShakeRoot.setPosition(this.shakeBasePos);
this.wheelShakeRoot.setScale(1);
}
};
e.prototype.startVibrate = function() {
var t = this;
this.stopVibrate();
if (this.wheelShakeRoot) {
var e = 0;
this.vibrateScheduleFunc = function() {
if (t.vibratePower <= 0) t.stopVibrate(); else {
e += 1 / 60;
var n = Math.sin(e * t.vibrateMoveFreq * 2 * Math.PI) * t.vibrateMove * t.vibratePower, o = Math.cos(e * t.vibrateMoveFreq * 2 * Math.PI * 1.13) * t.vibrateMove * t.vibratePower;
t.wheelShakeRoot.setPosition(t.shakeBasePos.x + n, t.shakeBasePos.y + o);
}
};
this.schedule(this.vibrateScheduleFunc, 1 / 60);
}
};
e.prototype.stopVibrate = function() {
if (this.vibrateScheduleFunc) {
this.unschedule(this.vibrateScheduleFunc);
this.vibrateScheduleFunc = null;
}
if (this.wheelShakeRoot) {
this.wheelShakeRoot.angle = 0;
this.wheelShakeRoot.setPosition(this.shakeBasePos);
}
this.vibratePower = 0;
};
e.prototype.updateSpinTask = function() {
if (this.isSpinning) {
for (var t = cc.director.getDeltaTime(), e = !0, n = 0, o = this.tasks; n < o.length; n++) {
var i = o[n];
if (!i.done) {
i.t += t;
var a = Math.min(1, i.t / i.endTime), s = this.curveProgress(a), r = i.totalAngle * s;
i.ring.angle = i.startAngle + i.dir * r;
if (a >= 1) {
i.ring.angle = i.finalAngle;
i.done = !0;
} else e = !1;
this.vibratePower = a < .7 ? 1 : a < .9 ? 1 - (a - .7) / .2 : 0;
this.vibratePower > 0 && !this.vibrateScheduleFunc ? this.startVibrate() : this.vibratePower <= 0 && this.vibrateScheduleFunc && this.stopVibrate();
}
}
if (e) {
this.isSpinning = !1;
this.tasks.length = 0;
this.activeLayerWin(!0);
this.stopVibrate();
this.stopSpinUpdate();
this.isFloating = !0;
this.startFloatEffect();
c.default.getInstance().playEffectWin(this.resultsData);
}
} else this.stopSpinUpdate();
};
e.prototype.startSpinUpdate = function() {
this.stopSpinUpdate();
this.spinUpdateFunc = this.updateSpinTask.bind(this);
this.schedule(this.spinUpdateFunc, 0);
};
e.prototype.stopSpinUpdate = function() {
if (this.spinUpdateFunc) {
this.unschedule(this.spinUpdateFunc);
this.spinUpdateFunc = null;
}
};
e.prototype.onClickSpinRandom = function() {
var t = this;
if (!this.isSpinning) {
var e = [ this.rand(), this.rand(), this.rand(), this.rand() ];
setTimeout(function() {
t.spinTo(e);
}, 3e3);
}
};
e.prototype.showX2 = function(t) {
if (t && Array.isArray(t)) {
var e = {
1: this.ringSmall,
2: this.ringMid2,
3: this.ringMid1,
4: this.ringBig
};
t.forEach(function(t) {
if (t && "number" == typeof t.Wheel && "number" == typeof t.Color) {
var n = e[t.Wheel];
if (n && n.children) {
var o = t.Color - 1;
o >= 0 && o < n.children.length && (n.children[o].active = !0);
}
}
});
}
};
e.prototype.hideX2 = function() {
var t = this.ringSmall.children, e = this.ringMid2.children, n = this.ringMid1.children, o = this.ringBig.children;
t.forEach(function(t) {
t.active = !1;
});
e.forEach(function(t) {
t.active = !1;
});
n.forEach(function(t) {
t.active = !1;
});
o.forEach(function(t) {
t.active = !1;
});
};
e.prototype.spinTo = function(t) {
if (t && 4 === t.length && !this.isSpinning) {
this.isSpinning = !0;
this.currentResults = t.slice();
this.resultsData = t;
this.stopFloatEffect();
this.isFloating = !1;
if (this.wheelShakeRoot) {
this.wheelShakeRoot.setPosition(this.shakeBasePos);
this.wheelShakeRoot.setScale(1);
}
this.tasks = [ this.makeTask(this.ringSmall, t[0] - 1, -1, this.baseExtraRounds + 0, this.baseDuration * this.smallEndRatio), this.makeTask(this.ringMid2, t[1] - 1, 1, this.baseExtraRounds + 1, this.baseDuration * this.mid2EndRatio), this.makeTask(this.ringMid1, t[2] - 1, -1, this.baseExtraRounds + 2, this.baseDuration * this.mid1EndRatio), this.makeTask(this.ringBig, t[3] - 1, 1, this.baseExtraRounds + 3, this.baseDuration * this.bigEndRatio) ];
this.startSpinUpdate();
}
};
e.prototype.makeTask = function(t, e, n, o, i) {
e = cc.misc.clampf(e, 0, this.SLICE_COUNT);
var a = t.angle, s = this.getFinalAngle(e);
return {
ring: t,
startAngle: a,
finalAngle: s,
totalAngle: 360 * o + this.deltaAngleDirected(a, s, n),
dir: n,
t: 0,
endTime: Math.max(.2, i),
done: !1
};
};
e.prototype.getFinalAngle = function(t) {
return t * this.STEP_DEG - this.angleFineTune;
};
e.prototype.deltaAngleDirected = function(t, e, n) {
var o = this.norm360(t), i = this.norm360(e);
return n >= 0 ? (i - o + 360) % 360 : (o - i + 360) % 360;
};
e.prototype.norm360 = function(t) {
var e = t % 360;
e < 0 && (e += 360);
return e;
};
e.prototype.applyResultInstant = function() {
this.setRingInstant(this.ringBig, this.currentResults[0]);
this.setRingInstant(this.ringMid1, this.currentResults[1]);
this.setRingInstant(this.ringMid2, this.currentResults[2]);
this.setRingInstant(this.ringSmall, this.currentResults[3]);
};
e.prototype.setRingInstant = function(t, e) {
t && (t.angle = this.getFinalAngle(cc.misc.clampf(e, 0, this.SLICE_COUNT)));
};
e.prototype.buildCurveTable = function(t) {
this.curveSamples = new Array(t + 1);
this.curveCum = new Array(t + 1);
var e = 0;
this.curveCum[0] = 0;
for (var n = 0; n <= t; n++) {
var o = n / t, i = this.evalKeyCurve(o);
this.curveSamples[n] = Math.max(0, i);
n > 0 && (e += .5 * (this.curveSamples[n - 1] + this.curveSamples[n]) * (1 / t));
this.curveCum[n] = e;
}
this.curveIntegral = e > 1e-6 ? e : 1;
for (n = 0; n <= t; n++) this.curveCum[n] = this.curveCum[n] / this.curveIntegral;
};
e.prototype.curveProgress = function(t) {
var e = this.curveCum.length - 1, n = cc.misc.clampf(t, 0, 1) * e, o = Math.floor(n), i = Math.min(e, o + 1), a = n - o;
return this.curveCum[o] * (1 - a) + this.curveCum[i] * a;
};
e.prototype.evalKeyCurve = function(t) {
var e = this.curveKeys;
if (t <= e[0].t) return e[0].v;
if (t >= e[e.length - 1].t) return e[e.length - 1].v;
for (var n = 0; n < e.length - 1; n++) {
var o = e[n], i = e[n + 1];
if (t >= o.t && t <= i.t) {
var a = (t - o.t) / Math.max(1e-6, i.t - o.t);
return o.v * (1 - a) + i.v * a;
}
}
return 0;
};
e.prototype.readEdit = function(t) {
if (!t) return 0;
var e = parseInt(t.string, 10);
return isNaN(e) ? 0 : cc.misc.clampf(e, 0, this.SLICE_COUNT);
};
e.prototype.rand = function() {
return Math.floor(Math.random() * this.SLICE_COUNT);
};
e.prototype.setFloating = function(t) {
this.enableFloat = t;
this.isFloating = t;
t && !this.isSpinning ? this.startFloatEffect() : this.stopFloatEffect();
};
e.prototype.activeLayerWin = function(t) {
this.wheelWinBlacklayer.active = t;
};
var n;
e._instance = null;
a([ l(cc.Node) ], e.prototype, "ringBig", void 0);
a([ l(cc.Node) ], e.prototype, "ringMid1", void 0);
a([ l(cc.Node) ], e.prototype, "ringMid2", void 0);
a([ l(cc.Node) ], e.prototype, "ringSmall", void 0);
a([ l(cc.Node) ], e.prototype, "wheelShakeRoot", void 0);
a([ l(cc.Node) ], e.prototype, "wheelWinBlacklayer", void 0);
a([ l({
tooltip: "Tổng thời gian cho lần quay (tính đến lúc vòng to nhất dừng)"
}) ], e.prototype, "baseDuration", void 0);
a([ l({
tooltip: "Tinh chỉnh lệch góc theo asset (độ). Ví dụ -1.2 hoặc +0.6"
}) ], e.prototype, "angleFineTune", void 0);
a([ l({
tooltip: "Số vòng quay nền (càng lớn càng giống casino)"
}) ], e.prototype, "baseExtraRounds", void 0);
a([ l({
tooltip: "Vòng nhỏ dừng sớm hơn (tỉ lệ so với baseDuration). Ví dụ 0.82"
}) ], e.prototype, "smallEndRatio", void 0);
a([ l({
tooltip: "Mid2 dừng (tỉ lệ). Ví dụ 0.88"
}) ], e.prototype, "mid2EndRatio", void 0);
a([ l({
tooltip: "Mid1 dừng (tỉ lệ). Ví dụ 0.94"
}) ], e.prototype, "mid1EndRatio", void 0);
a([ l({
tooltip: "Big dừng (tỉ lệ). Thường = 1"
}) ], e.prototype, "bigEndRatio", void 0);
a([ l({
tooltip: "Biên độ rung nhỏ (độ)"
}) ], e.prototype, "vibrateAngle", void 0);
a([ l({
tooltip: "Tần số rung (Hz)"
}) ], e.prototype, "vibrateFrequency", void 0);
a([ l({
tooltip: "Biên độ rung position (px)"
}) ], e.prototype, "vibrateMove", void 0);
a([ l({
tooltip: "Tần số rung position"
}) ], e.prototype, "vibrateMoveFreq", void 0);
a([ l({
tooltip: "Bật hiệu ứng bập bềnh"
}) ], e.prototype, "enableFloat", void 0);
a([ l({
tooltip: "Biên độ bập bềnh Y (px)"
}) ], e.prototype, "floatMoveY", void 0);
a([ l({
tooltip: "Biên độ scale bập bềnh"
}) ], e.prototype, "floatScale", void 0);
a([ l({
tooltip: "Tốc độ bập bềnh (Hz)"
}) ], e.prototype, "floatFrequency", void 0);
return n = a([ r ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"./BatMonResultEffectView": "BatMonResultEffectView"
} ],
"LabelIncrement.BatMon": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "613beMzdRFMkpkncRhzM69S", "LabelIncrement.BatMon");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, o) {
var i, a = arguments.length, s = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, n, s) : i(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("./BatMonConst"), r = cc._decorator, l = r.ccclass, c = r.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.surfix = "";
e.duration = 1.5;
e.fromValue = 0;
e.toValue = 0;
e.range = 0;
e.sign = 0;
e.canRun = !1;
e.delta = 0;
e.rootDuration = 0;
e.durationNormal = 1.5;
e.durationAn = 2;
e.durationDam = 4;
e.durationKhung = 6;
e.durationAnHu = 8;
return e;
}
e.prototype.onLoad = function() {
this.label = this.node.getComponent(cc.Label);
this.duration >= 2.4 ? this.rootDuration = 3 : this.rootDuration = 1;
this.duration = 1;
this.durationNormal = 1.5;
this.durationAn = 2;
this.durationDam = 4;
this.durationKhung = 6;
this.durationAnHu = 8;
};
e.prototype.update = function(t) {
if (this.canRun) {
this.delta += t;
if (this.delta > this.duration) {
this.label.string = this.formatNumber(this.toValue) + this.surfix;
this.canRun = !1;
} else this.label.string = this.formatNumber(Math.round(this.fromValue + this.delta / this.duration * this.range * this.sign)) + this.surfix;
}
};
e.prototype.formatNumber = function(t) {
return s.BatMonConst.formatNumber(t);
};
e.prototype.tweenValueto = function(t, e) {
this.duration = e || this.rootDuration;
this.tweenValue(this.toValue, t, e);
};
e.prototype.tweenValueWithTime = function(t, e, n) {
this.duration = n;
this.startTween(t, e);
};
e.prototype.tweenValue = function(t, e, n) {
this.duration = null != n ? n : this.rootDuration;
this.canRun = !1;
this.startTween(t, e);
};
e.prototype.startTween = function(t, e) {
this.fromValue = t;
this.toValue = e;
this.range = Math.abs(this.toValue - this.fromValue);
this.toValue >= this.fromValue ? this.sign = 1 : this.sign = -1;
this.delta = 0;
this.fromValue !== this.toValue ? this.canRun = !0 : this.canRun = !1;
if (!1 === this.canRun) {
null === this.label && (this.label = this.node.getComponent(cc.Label));
this.label.string = this.formatNumber(this.toValue) + this.surfix;
}
};
e.prototype.setValue = function(t) {
this.canRun = !1;
this.fromValue = t;
this.toValue = t;
null === this.label && (this.label = this.node.getComponent(cc.Label));
this.label.string = this.formatNumber(this.toValue) + this.surfix;
};
e.prototype.setValueText = function(t) {
null === this.label && (this.label = this.node.getComponent(cc.Label));
this.label.string = t;
};
a([ c(cc.Label) ], e.prototype, "label", void 0);
a([ c ], e.prototype, "surfix", void 0);
a([ c ], e.prototype, "duration", void 0);
a([ c ], e.prototype, "fromValue", void 0);
a([ c ], e.prototype, "toValue", void 0);
a([ c ], e.prototype, "range", void 0);
a([ c ], e.prototype, "sign", void 0);
a([ c ], e.prototype, "canRun", void 0);
a([ c ], e.prototype, "delta", void 0);
return a([ l ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"./BatMonConst": "BatMonConst"
} ]
}, {}, [ "BatMon.Chat.NetworkClient", "BatMonChat", "BatMonAudioTypes", "BatMonAudios", "BatMonBetView", "BatMonButtonSideBet", "BatMonConst", "BatMonController", "BatMonInfoView", "BatMonResultEffectView", "BatMonSessionHistoryView", "BatMonSettingRoomView", "BatMonView", "BatMonWheelController", "LabelIncrement.BatMon", "BatMonMoveChip", "BatMonGroupItem", "BatMonGroupUserListView", "BatMonGroupUserView", "BatMonPlayer", "BatMonGrahpView", "BatMonHelpView", "BatMonHistoryView", "BatMonSessionDetailData", "BatMonSessionDetailItem", "BatMonSessionDetailListView", "BatMonSessionDetailView", "BatMonTopItem", "BatMonTopListView", "BatMonTopView", "BatMonTopJackpotView" ]);