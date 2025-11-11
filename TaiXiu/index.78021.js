window.__require = function t(e, i, n) {
function o(s, c) {
if (!i[s]) {
if (!e[s]) {
var r = s.split("/");
r = r[r.length - 1];
if (!e[r]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(r, !0);
if (a) return a(r, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = r;
}
var h = i[s] = {
exports: {}
};
e[s][0].call(h.exports, function(t) {
return o(e[s][1][t] || t);
}, h, h.exports, t, e, i, n);
}
return i[s].exports;
}
for (var a = "function" == typeof __require && __require, s = 0; s < n.length; s++) o(n[s]);
return o;
}({
BatNanCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "fd62cDPhsZMT4W31kjHJU7Y", "BatNanCtrl");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), a = this && this.__decorate || function(t, e, i, n) {
var o, a = arguments.length, s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
return a > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("./Tx.MainGame"), c = cc._decorator, r = c.ccclass, l = (c.property, function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._dataSource = null;
return e;
}
Object.defineProperty(e.prototype, "dataSource", {
get: function() {
return this._dataSource;
},
set: function(t) {
this._dataSource = t;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
};
e.prototype.onDestroy = function() {
this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
};
e.prototype._onTouchBegin = function() {
this.dataSource.node.off(cc.Node.EventType.TOUCH_MOVE);
};
e.prototype._onTouchMoved = function(t) {
var e = t.touch.getLocation();
e = this.node.convertToNodeSpaceAR(e);
var i = t.touch.getDelta();
this.node.x += i.x;
this.node.y += i.y;
};
e.prototype.getBatDistance = function() {
var t = this.dataSource.SkeXucXac.node.position;
return this.node.position.sub(t).mag();
};
e.prototype._onTouchEnd = function(t) {
var e = t.touch.getLocation();
e = this.node.convertToNodeSpaceAR(e);
this.getBatDistance() > 100 && this.finishNan();
};
e.prototype.finishNan = function() {
this.node.active = !1;
this.node.setPosition(-2, 98);
this.dataSource.node.on(cc.Node.EventType.TOUCH_MOVE, this.dataSource.getComponent("UIWindow")._onTouchMoved, this.dataSource.getComponent("UIWindow"), !0);
s.default.instance.showScoreNam();
};
return a([ r ], e);
}(cc.Component));
i.default = l;
cc._RF.pop();
}, {
"./Tx.MainGame": "Tx.MainGame"
} ],
"Tx.Chat.NetworkClient": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "de150tvCSZFGoe4c9ZtsNqB", "Tx.Chat.NetworkClient");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), a = this && this.__decorate || function(t, e, i, n) {
var o, a = arguments.length, s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
return a > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../Tx.Chat"), c = t("../Tx.Const"), r = cc._decorator, l = r.ccclass, h = (r.property, 
function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.isConnect = !1;
return e;
}
i = e;
Object.defineProperty(e, "instance", {
get: function() {
i._instance || (i._instance = new i());
return i._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
i._instance = this;
};
e.prototype.connect = function() {
var t = {
url: "https://chat." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
ip: "http://18.138.207.162:8092/signalr/negotiate",
hub: "chatHub",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate
};
cc.systemEvent.off(c.TxConst.CHAT_TAIXIU_SOCKET_EVENT, this.onResponeData, this);
cc.systemEvent.on(c.TxConst.CHAT_TAIXIU_SOCKET_EVENT, this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect(c.TxConst.CHAT_TAIXIU_SOCKET_EVENT, t.url, t.hub, t.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.connect();
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.closeWS();
lngui.ZLog.log("=====================CLOSE WS NOTI===============================");
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
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, i = 0; i < e; ++i) {
var n = t.M[i];
if (n.A && null != n.A[0] && null != n.A[0]) {
var o = n.A[0];
switch (n.M) {
case "receiveMessage":
s.default.instance.receiveMessage(o);
break;

case "listLastMessages":
s.default.instance.listLastMessages(o);
}
}
}
};
e.prototype.registerChat = function() {
this.sendSignalR("RegisterChat", [ "taixiu" ]);
};
e.prototype.pingPong = function() {
this.sendSignalR("PingPong", []);
};
e.prototype.connectSuccess = function() {
lngui.ZLog.log("Connect Sucesss");
};
e.prototype.closeWS = function() {
cc.systemEvent.off(c.TxConst.CHAT_TAIXIU_SOCKET_EVENT, this.onResponeData, this);
this.mSignalr.close();
lngui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
e.prototype.sendSignalR = function(t, e) {
lngui.ZLog.log("SendSocket=======>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
var i;
e._instance = null;
return i = a([ l ], e);
}(cc.Component));
i.default = h;
cc._RF.pop();
}, {
"../Tx.Chat": "Tx.Chat",
"../Tx.Const": "Tx.Const"
} ],
"Tx.Chat": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "22a6a7s4uNI+5bZvXEIyKU/", "Tx.Chat");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), a = this && this.__decorate || function(t, e, i, n) {
var o, a = arguments.length, s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
return a > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("./network/Tx.Chat.NetworkClient"), c = cc._decorator, r = c.ccclass, l = c.property, h = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.templateMessage = null;
e.listChat = null;
e.scrollListChat = null;
e.txtInputChat = null;
return e;
}
i = e;
e.prototype.touchSendChat = function() {
if (this.txtInputChat.string.length) {
s.default.instance.sendSignalR("SendMessage", [ this.txtInputChat.string, "taixiu" ]);
this.txtInputChat.string = "";
}
};
e.prototype.listLastMessages = function(t) {
if (0 != t.length) {
this.listChat.removeAllChildren();
if (t) for (var e = 0; e < t.length; e++) {
var i = t[e], n = i.n, o = i.c;
if (void 0 === n || void 0 === o) return;
if (n.length > 0 && o.length > 0) {
var a = o, s = cc.instantiate(this.templateMessage), c = i.n, r = n;
s.active = !0;
c = (c.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), r);
s.getComponent(cc.Label).string = c + ": " + a;
if (1 == t.IsVipTx) {
s.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
s.getChildByName("lb_nameVip").getComponent(cc.Label).string = c + ": ";
s.off(cc.Node.EventType.SIZE_CHANGED);
s.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (s.getContentSize().height - s.getChildByName("lb_nameVip").getContentSize().height) / 2;
s.getChildByName("lb_nameVip").setPosition(cc.v2(0, t));
});
} else {
s.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
s.getChildByName("lb_name").getComponent(cc.Label).string = c + ": ";
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
};
e.prototype.receiveMessage = function(t) {
var e = t.n, i = t.c;
if (void 0 !== e && void 0 !== i) {
if (e.length > 0 && i.length > 0) {
var n = i, o = cc.instantiate(this.templateMessage), a = t.n, s = e;
o.active = !0;
a = (a.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), s);
o.getComponent(cc.Label).string = a + ": " + n;
if (1 == t.IsVipTx) {
o.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
o.getChildByName("lb_nameVip").getComponent(cc.Label).string = a + ": ";
o.off(cc.Node.EventType.SIZE_CHANGED);
o.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (o.getContentSize().height - o.getChildByName("lb_nameVip").getContentSize().height) / 2;
o.getChildByName("lb_nameVip").setPosition(cc.v2(0, t));
});
} else {
o.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
o.getChildByName("lb_name").getComponent(cc.Label).string = a + ": ";
o.off(cc.Node.EventType.SIZE_CHANGED);
o.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (o.getContentSize().height - o.getChildByName("lb_name").getContentSize().height) / 2;
o.getChildByName("lb_name").setPosition(cc.v2(0, t));
});
}
this.listChat.addChild(o);
}
this.scrollListChat.scrollToBottom();
}
};
Object.defineProperty(e, "instance", {
get: function() {
i._instance || (i._instance = new i());
return i._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
i._instance = this;
this.txtInputChat.node.on("editing-return", this.touchSendChat, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
};
e.prototype.onKeyDown = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.enter:
this.txtInputChat.focus();
}
};
var i;
e._instance = null;
a([ l(cc.Node) ], e.prototype, "templateMessage", void 0);
a([ l(cc.Node) ], e.prototype, "listChat", void 0);
a([ l(cc.ScrollView) ], e.prototype, "scrollListChat", void 0);
a([ l(cc.EditBox) ], e.prototype, "txtInputChat", void 0);
return i = a([ r ], e);
}(cc.Component);
i.default = h;
cc._RF.pop();
}, {
"./network/Tx.Chat.NetworkClient": "Tx.Chat.NetworkClient"
} ],
"Tx.Const": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "bfc3e8+kb1KaZvz30B0dZYx", "Tx.Const");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.TxConst = void 0;
var n = function() {
function t() {}
t.formatNumber = function(t) {
return void 0 === t ? "0" : t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
t.formatDateTime = function(t) {
var e = (t = t.split("T"))[0].split("-");
return e[2] + "/" + e[1] + " - " + t[1].substr(0, 5);
};
t.formatDateTime2 = function(t) {
var e = t = t.split("T");
return e[0] + "\n" + e[1];
};
t.formatDateTime3 = function(t) {
var e = t = t.split(" ");
return e[0] + "\n" + e[1];
};
t.formatUserName = function(t) {
return t.length > 10 ? t.slice(0, 9) + "..." : t;
};
t.convertToMoney = function(t) {
var e = "", i = t < 0 ? 1 : 0;
e = (t = Math.abs(t)) >= 1e3 ? t.toFixed().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") : t.toString();
1 == i && (e = "-" + e);
return e;
};
t.formatNumberMin = function(t) {
if (t >= 1e9) {
t = Math.ceil(t / 1e9);
return this.formatNumber(t) + "B";
}
if (t >= 1e6) {
t = Math.ceil(t / 1e6);
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
t.formatNumbertoK = function(t) {
if (null == t || isNaN(t)) return "";
if (t >= 1e3 && t < 1e6) {
var e = t / 1e3;
return e < 10 ? e.toFixed(1) + "K" : e.toFixed(0) + "K";
}
if (t >= 1e6 && t < 1e9) return (i = t / 1e6) < 10 ? i.toFixed(2) + "M" : i.toFixed(0) + "M";
if (t >= 1e9) {
var i;
return (i = t / 1e9) < 10 ? i.toFixed(2) + "B" : i.toFixed(0) + "B";
}
return t.toString();
};
t.convertToK = function(t) {
var e = "", i = t < 0 ? 1 : 0;
e = (t = Math.abs(t)) >= 1e3 ? (t / 1e3).toFixed().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "K" : t.toString();
1 == i && (e = "-" + e);
return e;
};
t.getUrl = function(t, e) {
var i = t, n = cc.loader.getXMLHttpRequest();
n.onreadystatechange = function() {
4 === n.readyState && (200 == n.status ? e(JSON.parse(n.responseText), n.status) : n.responseText.length > 0 ? e(n.responseText, n.status) : e("error_code : " + n.status, null));
};
n.ontimeout = function() {
e("Hệ thống không phản hồi.", null);
};
n.timeout = 3e4;
n.open("GET", i, !0);
n.setRequestHeader("Content-Type", "application/json");
n.withCredentials = !0;
n.send();
};
t.post = function(t, e, i) {
var n = cc.loader.getXMLHttpRequest();
n.timeout = 3e4;
n.open("POST", t);
n.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
n.setRequestHeader("HeaderName", "HeaderValue");
n.onreadystatechange = function() {
if (4 == n.readyState) if (n.status >= 200 && n.status < 400) {
var t = n.responseText, e = JSON.parse(t);
i && i(n.status, e);
} else i && i(n.status, null);
};
n.send(JSON.stringify(e));
};
t.customNumdata = function(t) {
return Math.round(t * lngui.ConfigManager.instance.ConfigInfo.RateMultiple);
};
t.MAX_KEY_VALUE = 8;
t.MAX_BET_TAI_XIU = 1e21;
t.MIN_BET = 10;
t.MAX_BET_PER_SESSION = 25e25;
t.RETURN_MONEY = 2;
t.diceNode = {
GameSessionID: 0
};
t.diceNode2 = {
GameSessionID: 0
};
t.GameID = {
UNKNOWN_GAME: -1,
GATE: 0,
BA_CAY: 1,
TA_LA: 3,
XI_TO: 5,
TLMN_DEMLA: 7,
MAU_BINH: 9,
TLMN_NHATANTAT: 27,
POKER: 13,
SAM_LOC: 15,
LIENG: 17,
CHAN: 19,
XOC_DIA: 25,
TLMN_DEMLA_SOLO: 33,
SAM_LOC_SOLO: 35,
CHAT: 40,
POKER_SLOT: 41,
CARD_SLOT: 42,
TAI_XIU: 40,
CCU: 44,
EVENT_HOT: 45,
EVENT_GIFT: 46,
Zombie: 100,
POKEMON: 101,
ANGRYBIRD: 102,
TIENCA: 103,
VQMM: 105,
RUNG_RAM: 106
};
t.ON_TAIXIU_SOCKET = "OnTaiXiuWebSocKet";
t.EVENT_FREETX_NAME = "eventFreeTX";
t.CHAT_TAIXIU_SOCKET_EVENT = "OnChatTaiXiuSocketEvent";
t.CLOSE_TAIXIU = "CloseTaiXiu";
t.isHideTaiXiu = !1;
t.GameStatus = {
WAITING: 0,
BETTING: 1,
RACING: 2
};
t.BetType = {
BET_GOLD: 1,
BET_BAC: 2
};
t.BetGate = {
NONE: 0,
GATE_XIU: 1,
GATE_TAI: 2
};
t.RETURN_RESULT = 1;
return t;
}();
i.TxConst = n;
cc._RF.pop();
}, {} ],
"Tx.HistoryTurn": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f1296LhAwNEsa1qKWXo7yIc", "Tx.HistoryTurn");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), a = this && this.__decorate || function(t, e, i, n) {
var o, a = arguments.length, s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
return a > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("./network/Tx.NetworkClient"), c = t("./Tx.Const"), r = cc._decorator, l = r.ccclass, h = r.property, u = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.m_dataHisoryTurnTai = [];
e.m_dataHisoryTurnXiu = [];
e.btnR = null;
e.btnL = null;
e.lbTotalBetTai = null;
e.lbTotalBetXiu = null;
e.lbTotalRefundTai = null;
e.lbTotalRefundXiu = null;
e.txtSessionInfo = null;
e.txtTotalDice = null;
e.XucXac = [];
e.imgEffectTai = null;
e.imgEffectXiu = null;
e.imgDices = [];
e.lvTaiContent = null;
e.lvXiuContent = null;
e.template = null;
return e;
}
i = e;
Object.defineProperty(e, "instance", {
get: function() {
i._instance || (i._instance = new i());
return i._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
i._instance = this;
s.default.instance.sendSignalR("GetSessionResultHistory", [ c.TxConst.diceNode.GameSessionID ]);
this.imgEffectTai.node.active = !1;
this.imgEffectXiu.node.active = !1;
};
e.prototype.showHistoryTurnTaiXiu = function(t) {
this.m_coinData = t;
this.btnR.node.on(cc.Node.EventType.TOUCH_END, this.touchBtnR, this);
this.btnL.node.on(cc.Node.EventType.TOUCH_END, this.touchBtnL, this);
this.setViewHistoryTurn();
};
e.prototype.touchBtnR = function() {
this.imgEffectTai.node.active = !1;
this.imgEffectXiu.node.active = !1;
this.m_GameSessionID++;
this.m_GameSessionID >= c.TxConst.GameSessionID ? this.m_GameSessionID = c.TxConst.GameSessionID - 1 : s.default.instance.sendSignalR("GetSessionResultHistory", [ this.m_GameSessionID ]);
};
e.prototype.touchBtnL = function() {
this.imgEffectTai.node.active = !1;
this.imgEffectXiu.node.active = !1;
this.m_GameSessionID--;
cc.log(this.m_GameSessionID);
this.m_GameSessionID < c.TxConst.GameSessionID - 15 ? this.m_GameSessionID = c.TxConst.GameSessionID - 15 : s.default.instance.sendSignalR("GetSessionResultHistory", [ this.m_GameSessionID ]);
};
e.prototype.setViewHistoryTurn = function() {
var t = 0, e = 0, i = 0, n = 0;
if (this.m_coinData.length) {
for (var o in this.m_coinData) if (1 == this.m_coinData[o].LocationID) {
e += this.m_coinData[o].TotalBetValue;
n += this.m_coinData[o].RefundValue;
this.m_dataHisoryTurnXiu.push(this.m_coinData[o]);
} else {
t += this.m_coinData[o].TotalBetValue;
i += this.m_coinData[o].RefundValue;
this.m_dataHisoryTurnTai.push(this.m_coinData[o]);
}
this.lbTotalBetTai.string = c.TxConst.formatNumber(t);
this.lbTotalRefundTai.string = c.TxConst.formatNumber(i);
this.lbTotalRefundXiu.string = c.TxConst.formatNumber(n);
this.lbTotalBetXiu.string = c.TxConst.formatNumber(e);
this.m_GameSessionID = this.m_coinData[0].GameSessionID;
this.txtSessionInfo.getComponent(cc.Label).string = "#" + this.m_GameSessionID;
var a = this.m_coinData[0].Result.split(",");
for (o = 0; o < 3; o++) this.XucXac[o].getComponent(cc.Sprite).spriteFrame = this.imgDices[parseInt(a[o]) - 1];
if (this.m_coinData[0].LocationWinID == c.TxConst.BetGate.GATE_TAI) {
this.imgEffectTai.node.active = !0;
this.imgEffectTai.node.runAction(cc.rotateBy(.5, 360).repeatForever());
} else if (this.m_coinData[0].LocationWinID == c.TxConst.BetGate.GATE_XIU) {
this.imgEffectXiu.node.active = !0;
this.imgEffectXiu.node.runAction(cc.rotateBy(.5, 360).repeatForever());
}
this.txtTotalDice.getComponent(cc.Label).string = "= " + (parseInt(a[0]) + parseInt(a[1]) + parseInt(a[2])).toString();
this.refreshHistoryTurnTX();
} else {
this.lbTotalBetTai.string = "0";
this.lbTotalBetXiu.string = "0";
this.lbTotalRefundTai.string = "0";
this.lbTotalRefundXiu.string = "0";
}
};
e.prototype.refreshHistoryTurnTX = function() {
this.lvTaiContent.removeAllChildren();
this.lvXiuContent.removeAllChildren();
for (var t = 0; t < 2; t++) if (t && 0 < this.m_dataHisoryTurnTai.length) for (var e = 0; e < this.m_dataHisoryTurnTai.length; e++) this.addItemHisoryTurnTX(1, e); else if (!t && 0 < this.m_dataHisoryTurnXiu.length) for (e = 0; e < this.m_dataHisoryTurnXiu.length; e++) this.addItemHisoryTurnTX(2, e);
lngui.UIWaitingLayout.hideWaiting();
};
e.prototype.addItemHisoryTurnTX = function(t, e) {
var i;
i = 1 == t ? this.m_dataHisoryTurnTai[e] : this.m_dataHisoryTurnXiu[e];
var n = cc.instantiate(this.template);
n.position = new cc.Vec3(0, 0);
var o = i.BetTime.split("T");
o = o[1].split(".");
n.getChildByName("txtThoiGian").getComponent(cc.Label).string = o[0];
n.getChildByName("txtTenTaiKhoan").getComponent(cc.Label).string = i.AccountName;
n.getChildByName("txtTienDat").getComponent(cc.Label).string = c.TxConst.formatNumber(i.TotalBetValue);
n.getChildByName("txtTraLai").getComponent(cc.Label).string = c.TxConst.formatNumber(i.RefundValue);
n.getChildByName("line").getComponent(cc.Sprite).spriteFrame = null;
1 == t ? this.lvTaiContent.addChild(n) : this.lvXiuContent.addChild(n);
};
var i;
e._instance = null;
a([ h(cc.Button) ], e.prototype, "btnR", void 0);
a([ h(cc.Button) ], e.prototype, "btnL", void 0);
a([ h(cc.Label) ], e.prototype, "lbTotalBetTai", void 0);
a([ h(cc.Label) ], e.prototype, "lbTotalBetXiu", void 0);
a([ h(cc.Label) ], e.prototype, "lbTotalRefundTai", void 0);
a([ h(cc.Label) ], e.prototype, "lbTotalRefundXiu", void 0);
a([ h(cc.Label) ], e.prototype, "txtSessionInfo", void 0);
a([ h(cc.Label) ], e.prototype, "txtTotalDice", void 0);
a([ h([ cc.Sprite ]) ], e.prototype, "XucXac", void 0);
a([ h(cc.Sprite) ], e.prototype, "imgEffectTai", void 0);
a([ h(cc.Sprite) ], e.prototype, "imgEffectXiu", void 0);
a([ h([ cc.SpriteFrame ]) ], e.prototype, "imgDices", void 0);
a([ h(cc.Node) ], e.prototype, "lvTaiContent", void 0);
a([ h(cc.Node) ], e.prototype, "lvXiuContent", void 0);
a([ h(cc.Node) ], e.prototype, "template", void 0);
return i = a([ l ], e);
}(lngui.UIPopup);
i.default = u;
cc._RF.pop();
}, {
"./Tx.Const": "Tx.Const",
"./network/Tx.NetworkClient": "Tx.NetworkClient"
} ],
"Tx.History": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "43423alzXRBO7+jSnrTuunJ", "Tx.History");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), a = this && this.__decorate || function(t, e, i, n) {
var o, a = arguments.length, s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
return a > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../network/Tx.NetworkClient"), c = t("../Tx.Const"), r = cc._decorator, l = r.ccclass, h = r.property, u = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.template = null;
return e;
}
i = e;
Object.defineProperty(e, "instance", {
get: function() {
i._instance || (i._instance = new i());
return i._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
i._instance = this;
s.default.instance.sendSignalR("GetAccountHistory", [ c.TxConst.BetType.BET_GOLD, c.TxConst.GameID.TAI_XIU, 30 ]);
};
e.prototype.showAccountHistoryTaiXiu = function(t) {
if (t) for (var e = 0; e < t.length; e++) {
var i = t[e], n = i.StartTime, o = i.LocationName, a = i.Result, s = parseInt(a);
a = s >= 11 ? "Tài - " + s : "Xỉu - " + s;
var r = i.GameSessionID, l = i.TotalBetValue, h = i.RefundValue, u = i.PrizeValue, p = cc.instantiate(this.template);
p.position = new cc.Vec3(0, 0, 0);
p.getChildByName("txtPhien").getComponent(cc.Label).string = "" + r;
p.getChildByName("txtPhien").color = cc.Color.YELLOW;
if (n.length > 0) {
var m = c.TxConst.formatDateTime(n);
p.getChildByName("txtThoiGian").getComponent(cc.Label).string = m;
p.getChildByName("txtThoiGian").color = cc.Color.WHITE;
}
p.getChildByName("txtCuaDat").getComponent(cc.Label).string = o;
p.getChildByName("txtCuaDat").color = cc.Color.WHITE;
p.getChildByName("txtKetQua").getComponent(cc.Label).string = a;
p.getChildByName("txtKetQua").color = cc.Color.WHITE;
p.getChildByName("txtTienDat").getComponent(cc.Label).string = c.TxConst.formatNumber(l);
p.getChildByName("txtTienDat").color = cc.Color.YELLOW;
p.getChildByName("txtTraLai").getComponent(cc.Label).string = c.TxConst.formatNumber(h);
p.getChildByName("txtTraLai").color = cc.Color.YELLOW;
p.getChildByName("txtNhan").getComponent(cc.Label).string = c.TxConst.formatNumber(u);
p.getChildByName("txtNhan").getComponent(cc.Label).horizontalAlign = 2;
p.getChildByName("txtNhan").color = cc.Color.YELLOW;
p.color = e % 2 == 0 ? cc.color(38, 4, 0) : cc.color(255, 255, 255);
this.content.addChild(p);
}
};
var i;
e._instance = null;
a([ h(cc.Node) ], e.prototype, "content", void 0);
a([ h(cc.Node) ], e.prototype, "template", void 0);
return i = a([ l ], e);
}(cc.Component);
i.default = u;
cc._RF.pop();
}, {
"../Tx.Const": "Tx.Const",
"../network/Tx.NetworkClient": "Tx.NetworkClient"
} ],
"Tx.Jackpot": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "feb7aLtSatAAI4ySVR+/85v", "Tx.Jackpot");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), a = this && this.__decorate || function(t, e, i, n) {
var o, a = arguments.length, s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
return a > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../network/Tx.NetworkClient"), c = t("../Tx.Const"), r = cc._decorator, l = r.ccclass, h = r.property, u = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.contentUser = null;
e.templateUser = null;
e.txtPhien = null;
e.txtTime = null;
e.txtResult = null;
e.txtTotalUser = null;
e.txtJpValue = null;
e.bg = null;
e.TxtRateXiu = null;
e.TxtRateTai = null;
e.TxtPage = null;
e.btnNextorPrevious = [];
e.index = 0;
e.maxindex = null;
return e;
}
i = e;
Object.defineProperty(e, "instance", {
get: function() {
i._instance || (i._instance = new i());
return i._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
lngui.UIWaitingLayout.showWaiting();
i._instance = this;
s.default.instance.sendSignalR("GetJackpotHistory", []);
};
e.prototype.onAttachData = function(t) {
lngui.UIWaitingLayout.hideWaiting();
this.TxtRateXiu.string = t[0].RateTai + "%";
this.TxtRateTai.string = t[0].RateXiu + "%";
this.data = t;
this.maxindex = this.data.length;
this.showTopJackpotTX(this.data[this.index]);
this.checkButton();
};
e.prototype.onClickNext = function() {
if (this.index < this.maxindex) {
this.index++;
this.showTopJackpotTX(this.data[this.index]);
}
this.checkButton();
};
e.prototype.onClickPrevious = function() {
if (this.index > 0) {
this.index--;
this.showTopJackpotTX(this.data[this.index]);
}
this.checkButton();
};
e.prototype.checkButton = function() {
this.btnNextorPrevious[0].active = !0;
this.btnNextorPrevious[1].active = !0;
0 === this.index && (this.btnNextorPrevious[0].active = !1);
this.index === this.maxindex - 1 && (this.btnNextorPrevious[1].active = !1);
};
e.prototype.showTopJackpotTX = function(t) {
if (t) {
t && lngui.UIWaitingLayout.hideWaiting();
this.contentUser.removeAllChildren();
this.TxtPage.string = "Trang: " + (this.index + 1);
this.txtPhien.string = t.GameSessionID;
this.txtTime.string = c.TxConst.formatDateTime2(t.SessionTime);
this.txtJpValue.string = c.TxConst.formatNumber(t.TotalJackpot);
this.txtTotalUser.string = t.TotalUser.toString();
this.txtResult.string = 1 == t.LocationIDWin ? "Xỉu" : "Tài";
for (var e = t.Data, i = 0; i < e.length; i++) {
var n = e[i], o = cc.instantiate(this.templateUser);
o.active = !0;
o.setPosition(0, 0);
var a = null == n ? void 0 : n.Username, s = null == n ? void 0 : n.BetValue, r = null == n ? void 0 : n.WinValue;
o.getChildByName("txtUser").getComponent(cc.Label).string = c.TxConst.formatUserName(a);
o.getChildByName("txtTienCuoc").getComponent(cc.Label).string = c.TxConst.formatNumbertoK(s);
o.getChildByName("txtTienThang").getComponent(cc.Label).string = c.TxConst.formatNumbertoK(r);
this.contentUser.addChild(o);
}
}
};
var i;
e._instance = null;
a([ h(cc.Node) ], e.prototype, "contentUser", void 0);
a([ h(cc.Node) ], e.prototype, "templateUser", void 0);
a([ h(cc.Label) ], e.prototype, "txtPhien", void 0);
a([ h(cc.Label) ], e.prototype, "txtTime", void 0);
a([ h(cc.Label) ], e.prototype, "txtResult", void 0);
a([ h(cc.Label) ], e.prototype, "txtTotalUser", void 0);
a([ h(cc.Label) ], e.prototype, "txtJpValue", void 0);
a([ h(cc.Node) ], e.prototype, "bg", void 0);
a([ h(cc.Label) ], e.prototype, "TxtRateXiu", void 0);
a([ h(cc.Label) ], e.prototype, "TxtRateTai", void 0);
a([ h(cc.Label) ], e.prototype, "TxtPage", void 0);
a([ h(cc.Node) ], e.prototype, "btnNextorPrevious", void 0);
return i = a([ l ], e);
}(cc.Component);
i.default = u;
cc._RF.pop();
}, {
"../Tx.Const": "Tx.Const",
"../network/Tx.NetworkClient": "Tx.NetworkClient"
} ],
"Tx.MainGame": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ce7ffhXzvtFjb6BAMeTU68o", "Tx.MainGame");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), a = this && this.__decorate || function(t, e, i, n) {
var o, a = arguments.length, s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
return a > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("./BatNanCtrl"), c = t("./network/Tx.NetworkClient"), r = t("./Tx.Const"), l = cc._decorator, h = l.ccclass, u = l.property, p = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.m_nGameStatus = 0;
e.m_nLocationIDWin = 0;
e.m_isNan = !1;
e.m_isTouchNan = !1;
e.m_nTimeNan = 10;
e._callback = null;
e.originalPos = null;
e.m_nBetType = 1;
e.m_btnKeyValue = [];
e.m_btnKeypad = [];
e.m_mapIndexToStrBit = [ "1K", "5K", "50K", "100K", "500K", "1M", "5M", "10M" ];
e.m_imgDice1 = null;
e.m_imgDice2 = null;
e.m_imgDice3 = null;
e.m_imgEffectTai = null;
e.m_imgEffectXiu = null;
e.imgBgKeyboard = null;
e.sprCircle = null;
e.imgHistoryFirst = null;
e.m_imgNanRoot = null;
e.imgDices1 = [];
e.imgDices2 = [];
e.imgDices3 = [];
e.spNutDenActive = null;
e.spNutDenPhien = null;
e.spNutTrangActive = null;
e.spNutTrangPhien = null;
e.btn_Nan = null;
e.btn_DungNan = null;
e.bcoinSprite = null;
e.spfBtnChatShow = null;
e.spfBtnChatHide = null;
e.spfBtnEvShow = null;
e.spfBtnEvHide = null;
e.AnimXucXac = null;
e.m_imgResult = null;
e.imgBgTimer2 = null;
e.m_imgNan = null;
e.panelChen = null;
e.imgBat = null;
e.panelNumberBig = null;
e.panelKeypad = null;
e.m_imgDayLose = null;
e.m_imgDayWin = null;
e.m_historyPanel = null;
e.btnKeyBroad = null;
e.m_panelTaxiu = null;
e.nodeChat = null;
e.nodeEv = null;
e.DatTai = null;
e.DatXiu = null;
e.SkeXucXac = null;
e.SkeKetQua = null;
e.SkeJackpot = null;
e.m_lblTurnID = null;
e.ebInputBetTai = null;
e.ebInputBetXiu = null;
e.m_lblTimerWaitResult = null;
e.m_lblMessage = null;
e.m_lblUsersTai = null;
e.m_lblUsersXiu = null;
e.m_lblMoneyTai = null;
e.m_lblMoneyXiu = null;
e.m_lblBetedValueTai = null;
e.m_lblBetedValueXiu = null;
e.m_lblMoneyWin = null;
e.m_lblTimer = null;
e.m_lblJackpotFund = null;
e.txtBestThua = null;
e.txtBestThang = null;
e.btnChonTai = null;
e.btnChonXiu = null;
e.btnSoKhac = null;
e.btnAccept = null;
e.btnNan = null;
e.btnCancel = null;
e.btnAllIn = null;
e.btnChat = null;
e.btnEv = null;
e.HisTurn = null;
e.coin_drop = null;
e._isJackpot = !1;
e.framesDisplayed = 0;
return e;
}
i = e;
Object.defineProperty(e, "instance", {
get: function() {
i._instance || (i._instance = new i());
return i._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
i._instance = this;
this.ketQuaEnd = lngui.UserManager.instance.mainUserInfo.Money;
};
e.prototype.onEnable = function() {
this.originalPos = this.imgBat.position;
this.m_lblTimer.node.parent.zIndex = 1e3;
this.m_imgNanRoot.node.zIndex = 999;
this.m_imgNanRoot.getComponent(s.default).dataSource = this;
this.originalPos = this.imgBat.position;
this.initTaiXiu();
};
e.prototype.initTaiXiu = function() {
this.SkeJackpot.node.active = !1;
this.diceWith = this.imgHistoryFirst.node.width + 5;
this.firstPosHis = this.imgHistoryFirst.node.getPosition();
this.m_imgResult.active = !1;
this.sprCircle.node.active = !1;
this.imgBgTimer2.active = !1;
this.m_lblTurnID.string = "";
this.m_lblUsersTai.string = "0";
this.m_lblUsersXiu.string = "0";
this.m_lblMoneyTai.string = "0";
this.m_lblMoneyXiu.string = "0";
this.m_lblMessage.string = "";
this.m_lblBetedValueTai.string = "0";
this.m_lblBetedValueXiu.string = "0";
this.m_imgDice1.node.active = !1;
this.m_imgDice2.node.active = !1;
this.m_imgDice3.node.active = !1;
this.m_historyPanel.active = !0;
this.imgHistoryFirst.node.active = !1;
this.diceWith = this.imgHistoryFirst.node.width + 5;
this.firstPosHis = this.imgHistoryFirst.node.getPosition();
this.imgBgKeyboard.node.active = !1;
this.imgBgKeyboard.node.scaleY = 0;
this.panelNumberBig.active = !1;
this.panelKeypad.active = !1;
this.btnChat.node.on(cc.Node.EventType.TOUCH_END, this.showChat, this);
this.btnEv.node.on(cc.Node.EventType.TOUCH_END, this.showEv, this);
this.m_imgNanRoot.node.active = !1;
this.btnNan.node.on(cc.Node.EventType.TOUCH_END, this.touchNan, this);
this.btnSoKhac.node.on(cc.Node.EventType.TOUCH_END, this.touchChoseNumber, this);
this.btnAccept.node.on(cc.Node.EventType.TOUCH_END, this.callBet, this);
this.btnCancel.node.on(cc.Node.EventType.TOUCH_END, this.touchCancel, this);
this.btnAllIn.node.on(cc.Node.EventType.TOUCH_END, this.onTouchAllIn, this);
this.panelKeypad.active = !1;
this.panelNumberBig.active = !1;
this.m_imgEffectTai.node.active = !1;
this.m_imgEffectXiu.node.active = !1;
this.m_btnKeyValue.length = 0;
this.m_btnKeypad.length = 0;
for (var t = 0; t < r.TxConst.MAX_KEY_VALUE; t++) {
var e = "btn_" + this.m_mapIndexToStrBit[t], i = this.panelNumberBig.getChildByName(e);
i.on(cc.Node.EventType.TOUCH_END, this.callSelectValue, this, !0);
this.m_btnKeyValue.push(i);
}
for (t = 0; t < 11; t++) {
e = "btn_" + t;
(n = this.panelKeypad.getChildByName(e)).on(cc.Node.EventType.TOUCH_END, this.touchKeyNumber, this, !0);
this.m_btnKeypad.push(n);
}
var n;
e = "btn_back";
(n = this.panelKeypad.getChildByName(e)).on(cc.Node.EventType.TOUCH_END, this.touchDel, this, !0);
this.m_btnKeypad.push(n);
this.m_isNan ? this.btnNan.node.getComponent(cc.Sprite).spriteFrame = this.btn_Nan : this.btnNan.node.getComponent(cc.Sprite).spriteFrame = this.btn_DungNan;
};
e.prototype.showChat = function() {
if (this.nodeChat.active) {
this.nodeChat.active = !1;
this.btnChat.node.getComponent(cc.Sprite).spriteFrame = this.spfBtnChatHide;
} else {
this.nodeChat.active = !0;
this.btnChat.node.getComponent(cc.Sprite).spriteFrame = this.spfBtnChatShow;
}
};
e.prototype.showEv = function() {
if (this.nodeEv.active) {
this.nodeEv.active = !1;
this.btnEv.node.getComponent(cc.Sprite).spriteFrame = this.spfBtnEvHide;
} else {
this.nodeEv.active = !0;
this.btnEv.node.getComponent(cc.Sprite).spriteFrame = this.spfBtnEvShow;
}
};
e.prototype.onTouchAllIn = function() {
this.m_llBetValue = lngui.UserManager.instance.mainUserInfo.Money;
if (this.m_llBetValue > r.TxConst.MAX_BET_TAI_XIU) {
this.m_llBetValue = r.TxConst.MAX_BET_TAI_XIU;
this.showMessage("Chỉ đặt cửa trong khoảng 10 đến " + r.TxConst.formatNumber(r.TxConst.MAX_BET_TAI_XIU));
}
this.m_nBetGate == r.TxConst.BetGate.GATE_XIU ? this.ebInputBetXiu.string = r.TxConst.formatNumber(this.m_llBetValue) : this.ebInputBetTai.string = r.TxConst.formatNumber(this.m_llBetValue);
};
e.prototype.touchCancel = function() {
this.showMenhGiaPanel(!1);
this.panelKeypad.active = !1;
this.panelNumberBig.active = !1;
this.ebInputBetXiu.string = "";
this.ebInputBetTai.string = "";
this.keyPadValue = "";
this.m_llBetValue = 0;
this.m_nBetGate = r.TxConst.BetGate.NONE;
this.DatTai.active = !0;
this.DatXiu.active = !0;
};
e.prototype.touchChoseNumber = function() {
if (this.panelNumberBig.active) {
this.panelNumberBig.active = !1;
this.panelKeypad.active = !0;
} else {
this.panelNumberBig.active = !0;
this.panelKeypad.active = !1;
}
this.keyPadValue = "";
};
e.prototype.touchDel = function() {
this.m_llBetValue = parseInt(this.m_llBetValue / 10 + "");
this.keyPadValue = r.TxConst.formatNumber(this.m_llBetValue);
this.m_nBetGate == r.TxConst.BetGate.GATE_XIU ? this.ebInputBetXiu.string = r.TxConst.formatNumber(this.m_llBetValue) : this.ebInputBetTai.string = r.TxConst.formatNumber(this.m_llBetValue);
};
e.prototype.touchKeyNumber = function(t) {
var e = t.target.name;
e = (e = e.replace(/btn_/g, "")).replace("10", "000");
this.keyPadValue += e;
this.m_llBetValue = parseInt(this.keyPadValue);
if (this.m_llBetValue > r.TxConst.MAX_BET_TAI_XIU) {
this.m_llBetValue = r.TxConst.MAX_BET_TAI_XIU;
this.showMessage("Chỉ đặt cửa trong khoảng 10 đến " + r.TxConst.formatNumber(r.TxConst.MAX_BET_TAI_XIU));
}
this.m_nBetGate == r.TxConst.BetGate.GATE_XIU ? this.ebInputBetXiu.string = r.TxConst.formatNumber(this.m_llBetValue) : this.ebInputBetTai.string = r.TxConst.formatNumber(this.m_llBetValue);
};
e.prototype.resultOfAccount = function(t) {
this.m_lblBetedValueXiu.string = "0";
this.m_lblBetedValueTai.string = "0";
var e = 0, i = 0, n = 0, o = 0;
if (t.length > 0) {
var a = t[0].GameSessionID, s = t[0].BetValue, c = t[0].Balance;
this.ketQuaEnd = t[0].Balance;
i = t[0].BetType;
e = t[0].PrizeValue;
n = t[0].RefundValue;
o = t[0].JackpotValue;
if (this.m_llGameSessionID == a) {
this.setBalance(i, c);
this.showPrizeValue(i, e, s, n, o);
}
}
};
e.prototype.showPrizeValue = function(t, e, i, n, o) {
var a = e + n + o;
if (e > 0) {
var s = "+" + r.TxConst.formatNumber(parseInt(a));
this.m_lblMoneyWin.string = s;
this.m_lblMoneyWin.node.active = !0;
this.m_lblMoneyWin.node.runAction(cc.moveBy(3, cc.v2(0, 40)));
this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
this.m_lblMoneyWin.node.active = !1;
}, this)));
null != this._callback && this._callback(r.TxConst.RETURN_MONEY, s, t);
} else if (n > 0) {
s = "+" + r.TxConst.formatNumber(parseInt(n));
this.m_lblMoneyWin.string = s;
this.m_lblMoneyWin.node.active = !0;
this.m_lblMoneyWin.node.runAction(cc.moveBy(3, cc.v2(0, 40)));
this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
this.m_lblMoneyWin.node.active = !1;
}, this)));
null != this._callback && this._callback(r.TxConst.RETURN_MONEY, s, t);
} else {
s = "-" + r.TxConst.formatNumber(parseInt(i));
this.m_lblMoneyWin.string = s;
this.m_lblMoneyWin.node.active = !0;
this.m_lblMoneyWin.node.runAction(cc.moveBy(3, cc.v2(0, 40)));
this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
this.m_lblMoneyWin.node.active = !1;
}, this)));
}
};
e.prototype.callBet = function() {
this.m_lblMessage.string = "";
if (0 != this.m_llBetValue) if (this.m_llBetValue < r.TxConst.MIN_BET && 0 != this.m_llBetValue) this.showMessage("Đặt cửa không hợp lệ."); else if (this.m_llBetValue > r.TxConst.MAX_BET_TAI_XIU) this.showMessage("Mỗi lần đặt cửa tối đa không được vượt quá " + r.TxConst.convertToK(r.TxConst.MAX_BET_TAI_XIU) + " Q"); else {
if (this.m_nBetType == r.TxConst.BetType.BET_GOLD) if (this.m_nBetGate == r.TxConst.BetGate.GATE_TAI) {
if (this.m_llBetValue + this.m_totalBetTai > r.TxConst.MAX_BET_PER_SESSION) {
r.TxConst.convertToK;
this.showMessage("Đặt cửa mỗi phiên không vượt quá  " + r.TxConst.convertToK(r.TxConst.MAX_BET_PER_SESSION) + " Q. Vui lòng đợi lượt sau");
return;
}
} else if (this.m_nBetGate == r.TxConst.BetGate.GATE_XIU && this.m_llBetValue + this.m_totalBetXiu > r.TxConst.MAX_BET_PER_SESSION) {
this.showMessage("Đặt cửa mỗi phiên không vượt quá  " + r.TxConst.convertToK(r.TxConst.MAX_BET_PER_SESSION) + " Q. Vui lòng đợi lượt sau");
return;
}
this.m_nGameStatus != r.TxConst.GameStatus.RACING && this.m_nGameStatus != r.TxConst.GameStatus.WAITING ? this.SetBet() : this.showMessage("Đợi ván mới");
} else this.showMessage("Vui lòng đặt cửa.");
};
e.prototype.SetBet = function() {
if (this.m_nRemainWaiting <= 5) this.showMessage("Hết thời gian đặt cửa"); else {
c.default.instance.sendSignalR("SetBetTaiXiu", [ this.m_nBetType, this.m_nBetGate, this.m_llBetValue ]);
this.keyPadValue = "";
this.m_llBetValue = 0;
this.m_nBetGate == r.TxConst.BetGate.GATE_XIU ? this.ebInputBetXiu.string = "" : this.ebInputBetTai.string = "";
}
};
e.prototype.betOfAccount = function(t) {
if (t.length) {
var e = t[0], i = t[1];
i >= 0 && lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, i);
var n = e.length;
if (n > 0) for (var o = 0; o < n; o++) {
var a = e[o].LocationID, s = e[o].BetValue;
e[o].BetType;
this.setBettedVal(a, s);
}
}
};
e.prototype.setBettedVal = function(t, e) {
if (t == r.TxConst.BetGate.GATE_TAI) {
this.ebInputBetXiu.enabled = !1;
this.m_lblBetedValueTai.string = r.TxConst.formatNumber(e);
this.m_nBetType == r.TxConst.BetType.BET_GOLD ? this.m_lblBetedValueTai.node.color = cc.color(225, 221, 87) : this.m_nBetType == r.TxConst.BetType.BET_BAC && (this.m_lblBetedValueTai.node.color = cc.color(255, 255, 255));
} else if (t == r.TxConst.BetGate.GATE_XIU) {
this.ebInputBetTai.enabled = !1;
this.m_lblBetedValueXiu.string = r.TxConst.formatNumber(e);
this.m_nBetType == r.TxConst.BetType.BET_GOLD ? this.m_lblBetedValueXiu.node.color = cc.color(225, 221, 87) : this.m_nBetType == r.TxConst.BetType.BET_BAC && (this.m_lblBetedValueXiu.node.color = cc.color(255, 255, 255));
}
};
e.prototype.setBalance = function(t, e) {
e < 0 || lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, e);
};
e.prototype.callSelectValue = function(t) {
lngui.AudioManager.instance.playSfx(this.coin_drop, 1);
var e = t.target.name;
e = (e = (e = e.replace(/btn_/g, "")).replace("M", "000000")).replace("K", "000");
cc.log(e);
this.m_llBetValue += parseInt(e);
if (this.m_llBetValue > r.TxConst.MAX_BET_TAI_XIU) {
this.m_llBetValue = r.TxConst.MAX_BET_TAI_XIU;
this.showMessage("Chỉ đặt cửa trong khoảng 10 đến " + r.TxConst.formatNumber(r.TxConst.MAX_BET_TAI_XIU) + " Q");
}
cc.log(r.TxConst.formatNumber(this.m_llBetValue));
this.m_nBetGate == r.TxConst.BetGate.GATE_XIU ? this.ebInputBetXiu.string = r.TxConst.formatNumber(this.m_llBetValue) : this.ebInputBetTai.string = r.TxConst.formatNumber(this.m_llBetValue);
var i = t.target.getPosition(), n = cc.v3({
x: i.x + this.panelNumberBig.x + this.imgBgKeyboard.node.x,
y: i.y + this.panelNumberBig.y + this.imgBgKeyboard.node.y,
z: 0
});
this.moveMoney(cc.v3(n));
};
e.prototype.moveMoney = function(t) {
var e, i = new cc.Node();
i.addComponent(cc.Sprite).spriteFrame = this.bcoinSprite;
if (null != i) {
e = this.m_nBetGate == r.TxConst.BetGate.GATE_TAI ? this.btnChonTai.node.getPosition() : this.btnChonXiu.node.getPosition();
i.position = t;
var n = cc.sequence(cc.moveTo(.2, e), cc.removeSelf(!0));
i.runAction(n);
this.m_panelTaxiu.addChild(i, 10);
}
};
e.prototype.GetCurrentRooms = function() {
c.default.instance.sendSignalR("GetCurrentRoomsTaiXiu", [ this.m_nBetType ]);
};
e.prototype.currentRoomsInfo = function(t) {
if (t.length) {
var e = t.length;
if (0 != e) {
if (this.m_nGameStatus == r.TxConst.GameStatus.BETTING) {
this.m_imgDice1.node.active && (this.m_imgDice1.node.active = !1);
this.m_imgDice2.node.active && (this.m_imgDice2.node.active = !1);
this.m_imgDice3.node.active && (this.m_imgDice3.node.active = !1);
this.m_imgResult.active && (this.m_imgResult.active = !1);
if (this.m_imgEffectXiu.node.active) {
this.m_imgEffectXiu.node.stopAllActions();
this.m_imgEffectXiu.node.active = !1;
}
if (this.m_imgEffectTai.node.active) {
this.m_imgEffectTai.node.stopAllActions();
this.m_imgEffectTai.node.active = !1;
}
}
for (var i = 0; i < e; i++) {
var n = t[i], o = r.TxConst.customNumdata(n.TotalAccount1), a = r.TxConst.customNumdata(n.TotalBetValue1), s = r.TxConst.customNumdata(n.TotalAccount2), c = r.TxConst.customNumdata(n.TotalBetValue2);
this.m_lblJackpotFund.string = r.TxConst.convertToMoney(r.TxConst.customNumdata(n.JackpotFund));
this.m_lblMoneyTai.string = r.TxConst.convertToMoney(c);
this.m_totalBetTai = c;
this.m_lblMoneyXiu.string = r.TxConst.convertToMoney(a);
this.m_totalBetXiu = a;
this.m_lblUsersTai.string = r.TxConst.formatNumber(s);
this.m_lblUsersXiu.string = r.TxConst.formatNumber(o);
var l = cc.sequence(cc.scaleTo(.1, 1.1, 1.1), cc.scaleTo(.1, 1, 1));
c !== this._totalBetTai && this.m_lblMoneyTai.node.runAction(l.clone());
a !== this._totalBetXiu && this.m_lblMoneyXiu.node.runAction(l.clone());
s !== this._totalAccountTai && this.m_lblUsersTai.node.runAction(l.clone());
o !== this._totalAccountXiu && this.m_lblUsersXiu.node.runAction(l.clone());
this._totalBetXiu = a;
this._totalBetTai = c;
this._totalAccountXiu = o;
this._totalAccountTai = s;
}
} else cc.log("data 0");
} else cc.log("data undefine");
};
e.prototype.touchNan = function() {
this.m_isNan = !this.m_isNan;
this.m_isNan ? this.btnNan.node.getComponent(cc.Sprite).spriteFrame = this.btn_Nan : this.btnNan.node.getComponent(cc.Sprite).spriteFrame = this.btn_DungNan;
};
e.prototype.currentSession = function(t) {
if (null != t) {
this.resetBat();
r.TxConst.GameSessionID = t.GameSessionID;
this.m_llGameSessionID = t.GameSessionID;
this.m_nGameStatus = t.GameStatus;
this.m_lblTurnID.string = "#" + this.m_llGameSessionID;
cc.systemEvent.emit("InforGameSessionTX", "" + this.m_llGameSessionID);
if (this.m_nGameStatus == r.TxConst.GameStatus.BETTING) {
this.m_nRemainWaiting = t.RemainBetting;
if (this.m_nRemainWaiting > 5) {
this.btnChonTai.interactable = !0;
this.ebInputBetTai.enabled = !0;
this.btnChonXiu.interactable = !0;
this.ebInputBetXiu.enabled = !0;
}
} else {
this.m_nRemainWaiting = t.RemainWaiting;
this.showMenhGiaPanel(!1);
this.ebInputBetTai.string = "";
this.ebInputBetXiu.string = "";
this.m_llBetValue = 0;
this.keyPadValue = "";
this.m_nGameStatus == r.TxConst.GameStatus.RACING && this.m_nRemainWaiting > 8 && this.m_nRemainWaiting < 24 && (this.m_imgDice1.node.active && this.m_imgDice2.node.active && this.m_imgDice3.node.active || c.default.instance.sendSignalR("GetCurrentResultTaiXiu", []));
}
this.startTimer();
}
};
e.prototype.startTimer = function() {
var t = this;
this.m_totalBetTai = 0;
this.m_totalBetXiu = 0;
switch (this.m_nGameStatus) {
case r.TxConst.GameStatus.WAITING:
case r.TxConst.GameStatus.RACING:
this.imgBgTimer2.active = !0;
this.btnChonTai.interactable = !0;
this.ebInputBetTai.enabled = !0;
this.btnChonXiu.interactable = !0;
this.ebInputBetXiu.enabled = !0;
this.m_nBetGate = r.TxConst.BetGate.NONE;
break;

case r.TxConst.GameStatus.BETTING:
this.showDices(!1);
this.imgBgTimer2.active = !1;
this.m_imgEffectTai.node.stopAllActions();
this.m_imgEffectXiu.node.stopAllActions();
this.m_imgEffectXiu.node.active = !1;
this.m_imgEffectTai.node.active = !1;
this.m_imgResult.active = !1;
}
if (this.m_nRemainWaiting > 0) {
this.sprCircle.node.active = !0;
cc.tween(this.sprCircle.node).sequence(cc.tween().by(1, {
angle: -360
}), cc.tween().call(function() {
t.sprCircle.node.active = !0;
})).repeatForever().start();
if (!this.imgBgTimer2.active) {
this.m_lblTimer.node.active = !0;
this.startCountDownBetting(this.m_nRemainWaiting);
}
cc.director.getScheduler().unschedule(this.startCountDownWaiting, this);
cc.director.getScheduler().schedule(this.startCountDownWaiting, this, 1, null);
}
};
e.prototype.startCountDownBetting = function(t) {
this.m_lblTimer.node.getComponent("lbCountDown").setRemaningTime(t);
};
e.prototype.startCountDownWaiting = function(t) {
if (this.m_nRemainWaiting > 0) {
this.m_nRemainWaiting -= parseInt(t);
var e;
e = this.m_nRemainWaiting < 10 ? "00:0" + this.m_nRemainWaiting : "00:" + this.m_nRemainWaiting;
if (this.imgBgTimer2.active) {
this.m_lblTimerWaitResult.string = e;
this.m_lblTimer.node.active = !1;
}
if (this.m_nGameStatus == r.TxConst.GameStatus.RACING) {
if (5 == this.m_nRemainWaiting) {
this.GetAccountResult();
this.getInfoEventDuDay();
}
} else if (this.m_nGameStatus == r.TxConst.GameStatus.BETTING && this.m_nRemainWaiting <= 5) {
this.btnChonTai.interactable = !1;
this.ebInputBetTai.enabled = !1;
this.btnChonXiu.interactable = !1;
this.ebInputBetXiu.enabled = !1;
this.showMenhGiaPanel(!1);
}
this.m_nRemainWaiting <= 0 && this.stopCountDownWaiting();
}
};
e.prototype.stopCountDownWaiting = function() {
cc.director.getScheduler().unschedule(this.startCountDownBetting, this);
};
e.prototype.getInfoEventDuDay = function() {
c.default.instance.sendSignalR("GetEventRank", []);
};
e.prototype.GetAccountResult = function() {
c.default.instance.sendSignalR("GetAccountResultTaiXiu", [ this.m_llGameSessionID ]);
};
e.prototype.showDices = function(t) {
this.m_imgDice1.node.active = t;
this.m_imgDice2.node.active = t;
this.m_imgDice3.node.active = t;
};
e.prototype.showMenhGiaPanel = function(t) {
this.panelNumberBig.active = t;
this.btnKeyBroad.active = t;
if (t) {
this.imgBgKeyboard.node.active = !0;
this.imgBgKeyboard.node.runAction(cc.scaleTo(.3, 1, 1));
} else this.imgBgKeyboard.node.runAction(cc.sequence(cc.scaleTo(.3, 1, 0), cc.callFunc(function() {
this.imgBgKeyboard.node.active = !1;
this.panelKeypad.active = !1;
this.panelNumberBig.active = !1;
}, this)));
};
e.prototype.resetBat = function() {
this.imgBat.stopAllActions();
this.imgBat.active = !1;
this.imgBat.setPosition(this.originalPos.x, this.originalPos.y);
};
e.prototype.currentResult = function(t) {
if (this.m_nGameStatus != r.TxConst.GameStatus.RACING || !(this.m_imgDice1.node.active || this.m_imgDice2.node.active || this.m_imgDice3.node.active)) {
this.m_nLocationIDWin = t.LocationIDWin;
this._isJackpot = t.IsJackpot;
if (!(this.m_nLocationIDWin <= 0 || t.Dice1 <= 0 || t.Dice2 <= 0 || t.Dice3 <= 0)) {
this.m_imgDice1.getComponent(cc.Sprite).spriteFrame = this.imgDices1[t.Dice1 - 1];
this.m_imgDice1.node.active = !1;
this.m_imgDice2.getComponent(cc.Sprite).spriteFrame = this.imgDices2[t.Dice2 - 1];
this.m_imgDice2.node.active = !1;
this.m_imgDice3.getComponent(cc.Sprite).spriteFrame = this.imgDices3[t.Dice3 - 1];
this.m_imgDice3.node.active = !1;
this.m_imgResult.getChildByName("txtResult").getComponent(cc.Label).string = "" + (t.Dice1 + t.Dice2 + t.Dice3);
this.m_imgResult.active = !1;
this.startAnimation();
}
}
};
e.prototype.startAnimation = function() {
this.AnimXucXac.off("finished", this.onAnimFinished, this);
this.m_lblTimer.node.active = !1;
this.AnimXucXac.node.active = !0;
this.AnimXucXac.play();
this.AnimXucXac.on("finished", this.onAnimFinished, this);
};
e.prototype.onAnimFinished = function() {
var t = this;
if (this._isJackpot) {
cc.log("vào show jp???");
this.SkeJackpot.node.active = !0;
setTimeout(function() {
t.SkeJackpot.node.active = !1;
}, 5e3);
}
this.showScore();
};
e.prototype.showScore = function() {
this.AnimXucXac.node.active = !1;
this.m_imgDice1.node.active = !0;
this.m_imgDice2.node.active = !0;
this.m_imgDice3.node.active = !0;
if (!this.m_isNan || this.m_isTouchNan) {
if (this.m_isTouchNan) {
cc.director.getScheduler().unschedule(this.waitHideNan, this);
this.imgBat.active = !1;
this.setListenerNan(!1);
this.m_isTouchNan = !1;
}
this.m_imgResult.active = !0;
if (this.m_nLocationIDWin == r.TxConst.BetGate.GATE_TAI) {
this.m_imgEffectTai.node.active = !0;
this.m_imgEffectTai.node.runAction(cc.rotateBy(.5, 360).repeatForever());
} else if (this.m_nLocationIDWin == r.TxConst.BetGate.GATE_XIU) {
this.m_imgEffectXiu.node.active = !0;
this.m_imgEffectXiu.node.runAction(cc.rotateBy(.5, 360).repeatForever());
}
null != this._callback && this._callback(r.TxConst.RETURN_RESULT, this.m_nLocationIDWin);
} else {
this.setListenerNan(!0);
this.imgBat.active = !0;
this.m_nTimeNan = 12;
cc.director.getScheduler().schedule(this.waitHideNan, this, 1, null);
}
};
e.prototype.showScoreNam = function() {
this.SkeXucXac.node.active = !1;
this.m_imgDice1.node.active = !0;
this.m_imgDice2.node.active = !0;
this.m_imgDice3.node.active = !0;
this.m_imgResult.active = !0;
if (this.m_nLocationIDWin == r.TxConst.BetGate.GATE_TAI) {
this.m_imgEffectTai.node.active = !0;
this.m_imgEffectTai.node.runAction(cc.rotateBy(.5, 360).repeatForever());
} else if (this.m_nLocationIDWin == r.TxConst.BetGate.GATE_XIU) {
this.m_imgEffectXiu.node.active = !0;
this.m_imgEffectXiu.node.runAction(cc.rotateBy(.5, 360).repeatForever());
}
null != this._callback && this._callback(r.TxConst.RETURN_RESULT, this.m_nLocationIDWin);
};
e.prototype.setListenerNan = function(t) {
this.imgBgTimer2.zIndex = 1e3;
if (t) {
this.m_imgNan.active = !0;
this.m_imgNan.zIndex = 999;
this.panelChen.zIndex = 998;
} else this.m_imgNan.active = !1;
};
e.prototype.waitHideNan = function() {
this.m_nTimeNan--;
if (!this.m_nTimeNan) {
this.m_isTouchNan = !0;
this.showScore();
}
};
e.prototype.gameHistory = function(t) {
if (t.length) {
r.TxConst.dataHistoryGame = t;
var e = t, i = e.length;
if (0 != i) {
i > 16 && (i = 16);
this.m_lblMessage.string = "";
this.m_historyPanel.active = !0;
this.m_historyPanel.removeAllChildren();
for (var n = this.spNutDenActive, o = this.spNutDenPhien, a = this.spNutTrangActive, s = this.spNutTrangPhien, c = 0; c < i; c++) {
var l = e[c].LocationIDWin, h = new cc.Node(), u = h.addComponent(cc.Sprite);
l == r.TxConst.BetGate.GATE_TAI ? u.spriteFrame = 0 == c ? n : o : u.spriteFrame = 0 == c ? a : s;
this.m_historyPanel.addChild(h);
h.y = this.firstPosHis.y;
h.x = this.firstPosHis.x - c * this.diceWith;
h.active = !0;
h.width = 30;
h.height = 30;
h.name = e[c].GameSessionID.toString();
h.on(cc.Node.EventType.TOUCH_END, this.touchShowHistoryTurn, this, !0);
0 == c && h.runAction(cc.sequence(cc.moveBy(.2, 0, 10), cc.moveBy(.2, 0, -10)).repeatForever());
}
}
}
};
e.prototype.touchShowHistoryTurn = function(t) {
r.TxConst.diceNode.GameSessionID = parseInt(t.target.name);
lngui.UIPopupManager.instance.showPopupFromPrefab(this.HisTurn);
};
e.prototype.touchTai = function() {
if (this.m_nGameStatus != r.TxConst.GameStatus.WAITING) if (this.m_nBetGate != r.TxConst.BetGate.GATE_XIU || "0" == this.m_lblBetedValueXiu.string) {
this.DatTai.active = !1;
this.DatXiu.active = !0;
this.m_nBetGate = r.TxConst.BetGate.GATE_TAI;
this.m_llBetValue = 0;
if (parseInt(this.ebInputBetTai.string) > 0) {
for (var t = this.ebInputBetTai.string.trim().split("."), e = "", i = 0; i < t.length; i++) e += t[i];
this.m_llBetValue = parseInt(e);
} else this.ebInputBetTai.string = "0";
this.ebInputBetXiu.string = "";
this.showMenhGiaPanel(!0);
} else this.showMessage("Không đặt 2 cửa một phiên "); else this.showMessage("Đợi ván mới");
};
e.prototype.touchXiu = function() {
if (this.m_nGameStatus != r.TxConst.GameStatus.WAITING) if (this.m_nBetGate != r.TxConst.BetGate.GATE_TAI || "0" == this.m_lblBetedValueTai.string) {
this.DatXiu.active = !1;
this.DatTai.active = !0;
this.m_nBetGate = r.TxConst.BetGate.GATE_XIU;
this.m_llBetValue = 0;
if (parseInt(this.ebInputBetXiu.string) > 0) {
for (var t = this.ebInputBetXiu.string.trim().split("."), e = "", i = 0; i < t.length; i++) e += t[i];
this.m_llBetValue = parseInt(e);
} else this.ebInputBetXiu.string = "0";
this.ebInputBetTai.string = "";
this.showMenhGiaPanel(!0);
} else this.showMessage("Không đặt 2 cửa một phiên "); else this.showMessage("Đợi ván mới");
};
e.prototype.showMessage = function(t) {
this.m_historyPanel.active = !1;
this.m_lblMessage.string = t;
this.m_lblMessage.node.getParent().opacity = 255;
this.m_lblMessage.node.getParent().stopAllActions();
var e = cc.fadeOut(3), i = cc.callFunc(this.showHistory, this);
this.m_lblMessage.node.getParent().runAction(cc.sequence(e, i));
};
e.prototype.showHistory = function() {
this.m_historyPanel.active = !0;
this.m_lblMessage.string = "";
};
e.prototype.setEventRank = function(t) {
this.txtBestThang.string = t.WinQuantity;
this.txtBestThua.string = t.LoseQuantity;
};
e.prototype.touchEvent = function() {
var t = lngui.EBundle_Name.LOBBY;
lngui.BundleManager.instance.getPrefabFromBundle("prefabs/Prefab_Events", t, function(t) {
lngui.UIPopupManager.instance.showPopupFromPrefab(t);
});
};
var i;
e._instance = null;
a([ u(cc.Sprite) ], e.prototype, "m_imgDice1", void 0);
a([ u(cc.Sprite) ], e.prototype, "m_imgDice2", void 0);
a([ u(cc.Sprite) ], e.prototype, "m_imgDice3", void 0);
a([ u(cc.Sprite) ], e.prototype, "m_imgEffectTai", void 0);
a([ u(cc.Sprite) ], e.prototype, "m_imgEffectXiu", void 0);
a([ u(cc.Sprite) ], e.prototype, "imgBgKeyboard", void 0);
a([ u(cc.Sprite) ], e.prototype, "sprCircle", void 0);
a([ u(cc.Sprite) ], e.prototype, "imgHistoryFirst", void 0);
a([ u(cc.Sprite) ], e.prototype, "m_imgNanRoot", void 0);
a([ u(cc.SpriteFrame) ], e.prototype, "imgDices1", void 0);
a([ u(cc.SpriteFrame) ], e.prototype, "imgDices2", void 0);
a([ u(cc.SpriteFrame) ], e.prototype, "imgDices3", void 0);
a([ u(cc.SpriteFrame) ], e.prototype, "spNutDenActive", void 0);
a([ u(cc.SpriteFrame) ], e.prototype, "spNutDenPhien", void 0);
a([ u(cc.SpriteFrame) ], e.prototype, "spNutTrangActive", void 0);
a([ u(cc.SpriteFrame) ], e.prototype, "spNutTrangPhien", void 0);
a([ u(cc.SpriteFrame) ], e.prototype, "btn_Nan", void 0);
a([ u(cc.SpriteFrame) ], e.prototype, "btn_DungNan", void 0);
a([ u(cc.SpriteFrame) ], e.prototype, "bcoinSprite", void 0);
a([ u(cc.SpriteFrame) ], e.prototype, "spfBtnChatShow", void 0);
a([ u(cc.SpriteFrame) ], e.prototype, "spfBtnChatHide", void 0);
a([ u(cc.SpriteFrame) ], e.prototype, "spfBtnEvShow", void 0);
a([ u(cc.SpriteFrame) ], e.prototype, "spfBtnEvHide", void 0);
a([ u(cc.Animation) ], e.prototype, "AnimXucXac", void 0);
a([ u(cc.Node) ], e.prototype, "m_imgResult", void 0);
a([ u(cc.Node) ], e.prototype, "imgBgTimer2", void 0);
a([ u(cc.Node) ], e.prototype, "m_imgNan", void 0);
a([ u(cc.Node) ], e.prototype, "panelChen", void 0);
a([ u(cc.Node) ], e.prototype, "imgBat", void 0);
a([ u(cc.Node) ], e.prototype, "panelNumberBig", void 0);
a([ u(cc.Node) ], e.prototype, "panelKeypad", void 0);
a([ u(cc.Node) ], e.prototype, "m_imgDayLose", void 0);
a([ u(cc.Node) ], e.prototype, "m_imgDayWin", void 0);
a([ u(cc.Node) ], e.prototype, "m_historyPanel", void 0);
a([ u(cc.Node) ], e.prototype, "btnKeyBroad", void 0);
a([ u(cc.Node) ], e.prototype, "m_panelTaxiu", void 0);
a([ u(cc.Node) ], e.prototype, "nodeChat", void 0);
a([ u(cc.Node) ], e.prototype, "nodeEv", void 0);
a([ u(cc.Node) ], e.prototype, "DatTai", void 0);
a([ u(cc.Node) ], e.prototype, "DatXiu", void 0);
a([ u(sp.Skeleton) ], e.prototype, "SkeXucXac", void 0);
a([ u(sp.Skeleton) ], e.prototype, "SkeKetQua", void 0);
a([ u(sp.Skeleton) ], e.prototype, "SkeJackpot", void 0);
a([ u(cc.Label) ], e.prototype, "m_lblTurnID", void 0);
a([ u(cc.Label) ], e.prototype, "ebInputBetTai", void 0);
a([ u(cc.Label) ], e.prototype, "ebInputBetXiu", void 0);
a([ u(cc.Label) ], e.prototype, "m_lblTimerWaitResult", void 0);
a([ u(cc.Label) ], e.prototype, "m_lblMessage", void 0);
a([ u(cc.Label) ], e.prototype, "m_lblUsersTai", void 0);
a([ u(cc.Label) ], e.prototype, "m_lblUsersXiu", void 0);
a([ u(cc.Label) ], e.prototype, "m_lblMoneyTai", void 0);
a([ u(cc.Label) ], e.prototype, "m_lblMoneyXiu", void 0);
a([ u(cc.Label) ], e.prototype, "m_lblBetedValueTai", void 0);
a([ u(cc.Label) ], e.prototype, "m_lblBetedValueXiu", void 0);
a([ u(cc.Label) ], e.prototype, "m_lblMoneyWin", void 0);
a([ u(cc.Label) ], e.prototype, "m_lblTimer", void 0);
a([ u(cc.Label) ], e.prototype, "m_lblJackpotFund", void 0);
a([ u(cc.Label) ], e.prototype, "txtBestThua", void 0);
a([ u(cc.Label) ], e.prototype, "txtBestThang", void 0);
a([ u(cc.Button) ], e.prototype, "btnChonTai", void 0);
a([ u(cc.Button) ], e.prototype, "btnChonXiu", void 0);
a([ u(cc.Button) ], e.prototype, "btnSoKhac", void 0);
a([ u(cc.Button) ], e.prototype, "btnAccept", void 0);
a([ u(cc.Button) ], e.prototype, "btnNan", void 0);
a([ u(cc.Button) ], e.prototype, "btnCancel", void 0);
a([ u(cc.Button) ], e.prototype, "btnAllIn", void 0);
a([ u(cc.Button) ], e.prototype, "btnChat", void 0);
a([ u(cc.Button) ], e.prototype, "btnEv", void 0);
a([ u(cc.Prefab) ], e.prototype, "HisTurn", void 0);
a([ u(cc.AudioClip) ], e.prototype, "coin_drop", void 0);
return i = a([ h ], e);
}(cc.Component);
i.default = p;
cc._RF.pop();
}, {
"./BatNanCtrl": "BatNanCtrl",
"./Tx.Const": "Tx.Const",
"./network/Tx.NetworkClient": "Tx.NetworkClient"
} ],
"Tx.NetworkClient": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f92d9Jk98NMapfWVtveZ+Xp", "Tx.NetworkClient");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), a = this && this.__decorate || function(t, e, i, n) {
var o, a = arguments.length, s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
return a > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../popup/Tx.History"), c = t("../popup/Tx.Jackpot"), r = t("../popup/Tx.VinhDanh"), l = t("../Tx.Const"), h = t("../Tx.HistoryTurn"), u = t("../Tx.MainGame"), p = cc._decorator, m = p.ccclass, d = (p.property, 
function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.isConnect = !1;
return e;
}
i = e;
Object.defineProperty(e, "instance", {
get: function() {
i._instance || (i._instance = new i());
return i._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
i._instance = this;
};
e.prototype.connect = function() {
console.log("Connect");
var t = {
url: "https://tx." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
hub: "txhub",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate,
ip: "http://18.138.207.162:9001/signalr/negotiate"
};
cc.systemEvent.off(l.TxConst.ON_TAIXIU_SOCKET, this.onResponeData, this);
cc.systemEvent.on(l.TxConst.ON_TAIXIU_SOCKET, this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect(l.TxConst.ON_TAIXIU_SOCKET, t.url, t.hub, t.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onEnable = function() {
lngui.ZLog.log("=====================CONNECT WS TX===============================");
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.isConnect || this.connect();
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.closeWS();
lngui.ZLog.log("=====================CLOSE WS NOTI===============================");
};
e.prototype.onResponeData = function(t) {
this.isEmpty(t) || t.s && "error" == t.s || this.onWebSocketCallback(t);
};
e.prototype.isEmpty = function(t) {
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return JSON.stringify(t) === JSON.stringify({});
};
e.prototype.onWebSocketCallback = function(t) {
if ("open" == t.s || "reconnect" == t.s || "1" == t.s) if (this.isConnect) this.sendSignalR("GetCurrentRoomsTaiXiu", [ 1 ]); else {
this.isConnect = !0;
this.connectSuccess();
this.sendSignalR("GetCurrentRoomsTaiXiu", [ 1 ]);
this.sendSignalR("GetEventRank", []);
}
if (t.R < 0) switch (t.R) {
case -207:
lngui.UITextManager.showCenterNotification("Đã hết thời gian đặt cửa");
break;

case -208:
lngui.UITextManager.showCenterNotification("Không thể đặt cả 2 cửa trong 1 phiên");
break;

case -212:
case -213:
lngui.UITextManager.showCenterNotification("Giá trị nhập không hợp lệ");
break;

case -232:
lngui.UITextManager.showCenterNotification("Định dạng dữ liệu lỗi");
break;

case -99:
lngui.UITextManager.showCenterNotification("Lỗi hệ thống");
break;

case -102:
lngui.UITextManager.showCenterNotification("Access Token không hợp lệ");
break;

case -51:
lngui.UITextManager.showCenterNotification("Số dư không đủ");
break;

case -52:
lngui.UITextManager.showCenterNotification("Vui lòng bảo mật tài khoản trước khi cược");
break;

case -48:
lngui.UITextManager.showCenterNotification("Game đã bị khóa, vui lòng mở khóa để tiếp tục giao dịch");
break;

default:
lngui.UITextManager.showCenterNotification("Đặt cửa thất bại");
}
if (t.M && Array.isArray(t.M) && 0 != t.M.length && t.M != []) for (var e = t.M.length, i = 0; i < e; ++i) {
var n = t.M[i];
if (n.A && null != n.A[0] && null != n.A[0]) {
var o = n.A[0];
switch (n.M) {
case "currentResult":
u.default.instance.currentResult(o);
break;

case "currentSession":
u.default.instance.currentSession(o);
break;

case "currentRoomsInfo":
u.default.instance.currentRoomsInfo(o);
break;

case "gameHistory":
u.default.instance.gameHistory(o);
break;

case "eventRank":
u.default.instance.setEventRank(o);
break;

case "resultOfAccount":
u.default.instance.resultOfAccount(o);
break;

case "betOfAccount":
u.default.instance.betOfAccount(n.A);
break;

case "sessionHistory":
h.default.instance.showHistoryTurnTaiXiu(o);
break;

case "taiXiuAccountHistory":
console.log(o);
s.default.instance.showAccountHistoryTaiXiu(o);
break;

case "taiXiuTopWinner":
r.default.instance.showTopAccountsTaiXiu(o);

case "jackpotHistory":
c.default.instance.onAttachData(o);
}
}
}
};
e.prototype.pingPong = function() {
this.sendSignalR("PingPong", []);
};
e.prototype.connectSuccess = function() {
lngui.ZLog.log("Connect Sucesss");
};
e.prototype.closeWS = function() {
cc.systemEvent.off(l.TxConst.ON_TAIXIU_SOCKET, this.onResponeData, this);
this.mSignalr.close();
lngui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
e.prototype.sendSignalR = function(t, e) {
lngui.ZLog.log("SendSocket=======>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
var i;
e._instance = null;
return i = a([ m ], e);
}(cc.Component));
i.default = d;
cc._RF.pop();
}, {
"../Tx.Const": "Tx.Const",
"../Tx.HistoryTurn": "Tx.HistoryTurn",
"../Tx.MainGame": "Tx.MainGame",
"../popup/Tx.History": "Tx.History",
"../popup/Tx.Jackpot": "Tx.Jackpot",
"../popup/Tx.VinhDanh": "Tx.VinhDanh"
} ],
"Tx.SoiCau": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "847768LLpxHyoQqQJUdMzRw", "Tx.SoiCau");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), a = this && this.__decorate || function(t, e, i, n) {
var o, a = arguments.length, s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
return a > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("./Tx.Const"), c = cc._decorator, r = c.ccclass, l = c.property, h = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbSc1Duoi = null;
e.lbSc1Tren = null;
e.lbSc2Duoi = null;
e.lbSc2Tren = null;
e.lb1 = null;
e.lb2 = null;
e.buttonL = null;
e.buttonR = null;
e.pnlSC1 = null;
e.pnlSC2 = null;
e.pnlXXT = null;
e.pnlXX1 = null;
e.pnlXX2 = null;
e.pnlXX3 = null;
e.panel_2 = null;
e.template = null;
e.tongCb = null;
e.xucxac1Cb = null;
e.xucxac2Cb = null;
e.xucxac3Cb = null;
e.ellipseBack = null;
e.ellipseWhite = null;
e.nutdenActive = null;
e.nutdenIcon = null;
e.nuttrangActive = null;
e.nuttrangIcon = null;
e.ballBlack = null;
e.ballWhite = null;
e.ballYellow = null;
e.ballRed = null;
e.ballBlue = null;
e._arrSC1 = [];
e.pageViewSC = null;
return e;
}
e.prototype.onEnable = function() {
this.buttonL.node.tagName = 0;
this.buttonR.node.tagName = 1;
this.tongCb.isSelected = !0;
this.xucxac1Cb.isSelected = !0;
this.xucxac2Cb.isSelected = !0;
this.xucxac3Cb.isSelected = !0;
this.pnlXXT.active = !0;
this.pnlXX1.active = !0;
this.pnlXX2.active = !0;
this.pnlXX3.active = !0;
this.initData(s.TxConst.dataHistoryGame);
};
e.prototype.initData = function(t) {
cc.log(t);
this.pnlSC1.removeAllChildren();
this.pnlSC2.removeAllChildren();
this.pnlXXT.removeAllChildren();
this.pnlXX1.removeAllChildren();
this.pnlXX2.removeAllChildren();
this.pnlXX3.removeAllChildren();
var e = 0, i = 0, n = -1, o = 0, a = t[0].DiceSum;
for (var s in t) {
if (a > 10 && t[s].DiceSum < 11 || a < 11 && t[s].DiceSum > 10) {
a = t[s].DiceSum;
o++;
}
o < 19 && this._arrSC1.push(t[s]);
}
n = -1;
o = 0;
a = this._arrSC1[this._arrSC1.length - 1].DiceSum;
for (var c = this._arrSC1.length - 1; c >= 0; c--) {
if (a > 10 && this._arrSC1[c].DiceSum < 11 || a < 11 && this._arrSC1[c].DiceSum > 10) {
a = this._arrSC1[c].DiceSum;
o++;
n = 0;
} else if (5 == ++n) {
n = 0;
o++;
}
if (o > 19) break;
var r = cc.instantiate(this.template);
r.position = new cc.Vec3(0, 0);
r.active = !0;
r.getChildByName("label").getComponent(cc.Label).string = this._arrSC1[c].DiceSum;
if (this._arrSC1[c].DiceSum > 10) {
e++;
r.getComponent(cc.Sprite).spriteFrame = this.ellipseBack;
r.getChildByName("label").color = cc.color(98, 240, 252);
} else {
i++;
r.getComponent(cc.Sprite).spriteFrame = this.ellipseWhite;
r.getChildByName("label").color = cc.color(255, 255, 255);
}
0 == c && (r.getChildByName("label").color = cc.color(255, 255, 0));
r.setPosition(this.getPosforSC1(o, n));
this.pnlSC1.addChild(r);
}
for (var l = 0, h = 0, u = 0, p = 0, m = t.length - 1; m >= 0; m--) {
var d = new cc.Node(), g = d.addComponent(cc.Sprite), f = null;
if (t[m].DiceSum > 10) {
f = 0 == m ? this.nutdenActive : this.nutdenIcon;
u++;
} else {
f = 0 == m ? this.nuttrangActive : this.nuttrangIcon;
p++;
}
f && (g.spriteFrame = f);
d.setPosition(this.getPosforSC1(h, l));
this.pnlSC2.addChild(d);
if (5 == ++l) {
l = 0;
h++;
}
if (a > 10 && t[m].DiceSum < 11 || a < 11 && t[m].DiceSum > 10) {
a = t[m].DiceSum;
o++;
n = 0;
} else if (6 == ++n) {
n = 0;
o++;
}
}
this.lbSc1Duoi.string = "Xỉu: " + i;
this.lbSc1Tren.string = "Tài: " + e;
this.lbSc2Duoi.string = "Xỉu: " + p;
this.lbSc2Tren.string = "Tài: " + u;
this.lb1.string = "Phiên gần nhất (#" + t[0].GameSessionID + ") - ";
t[0].DiceSum > 10 && (this.lb2.string = "Tổng " + t[0].DiceSum + ": (" + t[0].Dice1 + "-" + t[0].Dice2 + "-" + t[0].Dice3 + ")");
for (var T = t.length > 19 ? 19 : t.length, _ = (o = 0, T > 19 ? 19 : T); _ >= 0; _--) {
var y = new cc.Node(), C = y.addComponent(cc.Sprite);
t[_].DiceSum > 10 ? C.spriteFrame = this.ballBlack : C.spriteFrame = this.ballWhite;
y.setPosition(this.getPosforSC2(o, t[_].DiceSum));
this.pnlXXT.addChild(y, 2);
var v = new cc.Node();
v.addComponent(cc.Sprite).spriteFrame = this.ballYellow;
v.setPosition(this.getPosforSC3(o, t[_].Dice1));
this.pnlXX1.addChild(v, 2);
var b = new cc.Node();
b.addComponent(cc.Sprite).spriteFrame = this.ballRed;
b.setPosition(this.getPosforSC3(o, t[_].Dice2));
this.pnlXX2.addChild(b, 2);
var N = new cc.Node();
N.addComponent(cc.Sprite).spriteFrame = this.ballBlue;
N.setPosition(this.getPosforSC3(o, t[_].Dice3));
this.pnlXX3.addChild(N, 2);
if (19 == _) {
var S = this.drawLine(cc.v2(0, this.getPosforSC2(o, t[_].DiceSum).y), this.getPosforSC2(o, t[_].DiceSum), 4, cc.color(255, 239, 135));
this.pnlXXT.addChild(S, 1);
var B = this.drawLine(cc.v2(0, this.getPosforSC3(o, t[_].Dice1).y), this.getPosforSC3(o, t[_].Dice1), 2, cc.color(250, 255, 2));
this.pnlXX1.addChild(B, 1);
var x = this.drawLine(cc.v2(0, this.getPosforSC3(o, t[_].Dice2).y), this.getPosforSC3(o, t[_].Dice2), 2, cc.color(255, 93, 117));
this.pnlXX2.addChild(x, 1);
var E = this.drawLine(cc.v2(0, this.getPosforSC3(o, t[_].Dice3).y), this.getPosforSC3(o, t[_].Dice3), 2, cc.color(97, 239, 251));
this.pnlXX3.addChild(E, 1);
} else {
var I = this.drawLine(this.getPosforSC2(o - 1, t[_ + 1].DiceSum), this.getPosforSC2(o, t[_].DiceSum), 4, cc.color(255, 239, 135));
this.pnlXXT.addChild(I, 1);
var D = this.drawLine(this.getPosforSC3(o - 1, t[_ + 1].Dice1), this.getPosforSC3(o, t[_].Dice1), 2, cc.color(250, 255, 2));
this.pnlXX1.addChild(D, 1);
var X = this.drawLine(this.getPosforSC3(o - 1, t[_ + 1].Dice2), this.getPosforSC3(o, t[_].Dice2), 2, cc.color(255, 93, 117));
this.pnlXX2.addChild(X, 1);
var A = this.drawLine(this.getPosforSC3(o - 1, t[_ + 1].Dice3), this.getPosforSC3(o, t[_].Dice3), 2, cc.color(97, 239, 251));
this.pnlXX3.addChild(A, 1);
}
o++;
}
};
e.prototype.getPosforSC1 = function(t, e) {
var i = 40.5 + 40.5 * t, n = 179 - 40 * e;
return cc.v2(i, n);
};
e.prototype.getPosforSC2 = function(t, e) {
var i = 36 + 36 * t, n = 35 + 35 * (parseInt(e / 3) - 1) + e % 3 * (35 / 3);
return cc.v2(i, n);
};
e.prototype.getPosforSC3 = function(t, e) {
var i = 36 + 36 * t, n = 35 + 35 * (e - 1);
return cc.v2(i, n);
};
e.prototype.touchPageView = function() {
0 == this.pageViewSC.getCurrentPageIndex() ? this.pageViewSC.scrollToPage(1, 0) : this.pageViewSC.scrollToPage(0, 0);
};
e.prototype.touchTongCB = function() {
this.pnlXXT.active ? this.pnlXXT.active = !1 : this.pnlXXT.active = !0;
};
e.prototype.touchXucXac1CB = function() {
this.pnlXX1.active ? this.pnlXX1.active = !1 : this.pnlXX1.active = !0;
};
e.prototype.touchXucXac2CB = function() {
this.pnlXX2.active ? this.pnlXX2.active = !1 : this.pnlXX2.active = !0;
};
e.prototype.touchXucXac3CB = function() {
this.pnlXX3.active ? this.pnlXX3.active = !1 : this.pnlXX3.active = !0;
};
e.prototype.touchClose = function() {
this.node.active = !1;
};
e.prototype.drawLine = function(t, e, i, n) {
var o = new cc.Node(), a = o.addComponent(cc.Graphics);
a.lineWidth = i;
a.moveTo(t.x, t.y);
a.lineTo(e.x, e.y);
a.strokeColor = n;
a.stroke();
return o;
};
a([ l(cc.Label) ], e.prototype, "lbSc1Duoi", void 0);
a([ l(cc.Label) ], e.prototype, "lbSc1Tren", void 0);
a([ l(cc.Label) ], e.prototype, "lbSc2Duoi", void 0);
a([ l(cc.Label) ], e.prototype, "lbSc2Tren", void 0);
a([ l(cc.Label) ], e.prototype, "lb1", void 0);
a([ l(cc.Label) ], e.prototype, "lb2", void 0);
a([ l(cc.Button) ], e.prototype, "buttonL", void 0);
a([ l(cc.Button) ], e.prototype, "buttonR", void 0);
a([ l(cc.Node) ], e.prototype, "pnlSC1", void 0);
a([ l(cc.Node) ], e.prototype, "pnlSC2", void 0);
a([ l(cc.Node) ], e.prototype, "pnlXXT", void 0);
a([ l(cc.Node) ], e.prototype, "pnlXX1", void 0);
a([ l(cc.Node) ], e.prototype, "pnlXX2", void 0);
a([ l(cc.Node) ], e.prototype, "pnlXX3", void 0);
a([ l(cc.Node) ], e.prototype, "panel_2", void 0);
a([ l(cc.Node) ], e.prototype, "template", void 0);
a([ l(cc.Toggle) ], e.prototype, "tongCb", void 0);
a([ l(cc.Toggle) ], e.prototype, "xucxac1Cb", void 0);
a([ l(cc.Toggle) ], e.prototype, "xucxac2Cb", void 0);
a([ l(cc.Toggle) ], e.prototype, "xucxac3Cb", void 0);
a([ l(cc.SpriteFrame) ], e.prototype, "ellipseBack", void 0);
a([ l(cc.SpriteFrame) ], e.prototype, "ellipseWhite", void 0);
a([ l(cc.SpriteFrame) ], e.prototype, "nutdenActive", void 0);
a([ l(cc.SpriteFrame) ], e.prototype, "nutdenIcon", void 0);
a([ l(cc.SpriteFrame) ], e.prototype, "nuttrangActive", void 0);
a([ l(cc.SpriteFrame) ], e.prototype, "nuttrangIcon", void 0);
a([ l(cc.SpriteFrame) ], e.prototype, "ballBlack", void 0);
a([ l(cc.SpriteFrame) ], e.prototype, "ballWhite", void 0);
a([ l(cc.SpriteFrame) ], e.prototype, "ballYellow", void 0);
a([ l(cc.SpriteFrame) ], e.prototype, "ballRed", void 0);
a([ l(cc.SpriteFrame) ], e.prototype, "ballBlue", void 0);
a([ l(cc.PageView) ], e.prototype, "pageViewSC", void 0);
return a([ r ], e);
}(lngui.UIPopup);
i.default = h;
cc._RF.pop();
}, {
"./Tx.Const": "Tx.Const"
} ],
"Tx.VinhDanh": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ce663pTjA5BPZebqeXdq7va", "Tx.VinhDanh");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), a = this && this.__decorate || function(t, e, i, n) {
var o, a = arguments.length, s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, n); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s);
return a > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../network/Tx.NetworkClient"), c = t("../Tx.Const"), r = cc._decorator, l = r.ccclass, h = r.property, u = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.template = null;
e.content = null;
e.spfHuanChuong = [];
return e;
}
i = e;
Object.defineProperty(e, "instance", {
get: function() {
i._instance || (i._instance = new i());
return i._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
i._instance = this;
s.default.instance.sendSignalR("GetTopAccounts", [ c.TxConst.BetType.BET_GOLD, c.TxConst.GameID.TAI_XIU, 10 ]);
};
e.prototype.showTopAccountsTaiXiu = function(t) {
if (t.length) for (var e = t.length, i = 0; i < e; i++) {
var n = t[i], o = n.UserName, a = n.PrizeValue, s = cc.instantiate(this.template);
s.position = new cc.Vec3(0, 0, 0);
if (0 == i) {
s.getChildByName("txtHang").active = !1;
s.getChildByName("sprHuanChuong").getComponent(cc.Sprite).spriteFrame = this.spfHuanChuong[i];
s.getChildByName("txtTenTaiKhoan").color = cc.Color.YELLOW;
s.getChildByName("txtTienThang").color = cc.Color.YELLOW;
} else if (1 == i) {
s.getChildByName("txtHang").active = !1;
s.getChildByName("sprHuanChuong").getComponent(cc.Sprite).spriteFrame = this.spfHuanChuong[i];
s.getChildByName("txtTenTaiKhoan").color = cc.Color.WHITE;
s.getChildByName("txtTienThang").color = cc.Color.WHITE;
} else if (2 == i) {
s.getChildByName("txtHang").active = !1;
s.getChildByName("sprHuanChuong").getComponent(cc.Sprite).spriteFrame = this.spfHuanChuong[i];
s.getChildByName("txtTenTaiKhoan").color = cc.Color.ORANGE;
s.getChildByName("txtTienThang").color = cc.Color.ORANGE;
} else {
s.getChildByName("txtHang").active = !0;
s.getChildByName("txtHang").getComponent(cc.Label).string = "" + (i + 1);
}
if (i > 2) {
s.getChildByName("txtTienThang").color = cc.Color.GRAY;
s.getChildByName("txtTenTaiKhoan").color = cc.Color.GRAY;
}
s.getChildByName("txtTenTaiKhoan").getComponent(cc.Label).string = o;
s.getChildByName("txtTienThang").getComponent(cc.Label).string = c.TxConst.formatNumber(a);
this.content.addChild(s);
}
};
var i;
e._instance = null;
a([ h(cc.Node) ], e.prototype, "template", void 0);
a([ h(cc.Node) ], e.prototype, "content", void 0);
a([ h([ cc.SpriteFrame ]) ], e.prototype, "spfHuanChuong", void 0);
return i = a([ l ], e);
}(cc.Component);
i.default = u;
cc._RF.pop();
}, {
"../Tx.Const": "Tx.Const",
"../network/Tx.NetworkClient": "Tx.NetworkClient"
} ],
lbCountDown: [ function(t, e) {
"use strict";
cc._RF.push(e, "10a7avoXkFOA44TGPFkeGGL", "lbCountDown");
cc.Class({
extends: cc.Component,
properties: {
lbGameCooldown1: cc.Label,
lbGameCooldown2: cc.Label,
remaningTime: 0,
_posNum1: cc.v2(0, 0),
_posNum2: cc.v2(0, 0)
},
onLoad: function() {
this._posNum1 = this.lbGameCooldown1.node.position;
this._posNum2 = this.lbGameCooldown2.node.position;
},
setRemaningTime: function(t) {
this.remaningTime = t;
var e = ("0" + Math.floor(this.remaningTime)).slice(-2);
this.lbGameCooldown1.string = e[0];
this.lbGameCooldown2.string = e[1];
},
getRemaningTime: function() {
return this.remaningTime;
},
_changeColorTime: function() {
this.remaningTime < 6 ? (this.lbGameCooldown1.node.color = cc.Color.RED, this.lbGameCooldown2.node.color = cc.Color.RED) : (this.lbGameCooldown1.node.color = cc.Color.WHITE, 
this.lbGameCooldown2.node.color = cc.Color.WHITE);
},
update: function(t) {
if (null != this.remaningTime) {
var e = this.lbGameCooldown1.string, i = this.lbGameCooldown2.string;
this.remaningTime = Math.max(this.remaningTime - t, 0);
if (this.remaningTime <= 6) {
this.lbGameCooldown1.node.color = new cc.Color(255, 0, 0, 0);
this.lbGameCooldown2.node.color = new cc.Color(255, 0, 0, 0);
} else {
this.lbGameCooldown1.node.color = new cc.Color(255, 255, 255, 0);
this.lbGameCooldown2.node.color = new cc.Color(255, 255, 255, 0);
}
this.setRemaningTime(this.remaningTime);
var n = this.lbGameCooldown1.string, o = this.lbGameCooldown2.string;
if (e !== n && (this.lbGameCooldown1.node.position = this._posNum1.add(cc.v2(0, this.lbGameCooldown1.node.height / 2)))) {
this.lbGameCooldown1.node.opacity = 0;
this.lbGameCooldown1.node.runAction(cc.spawn(cc.fadeIn(.23), cc.moveTo(.23, this._posNum1).easing(cc.easeBackOut())));
}
if (i !== o && (this.lbGameCooldown2.node.position = this._posNum2.add(cc.v2(0, this.lbGameCooldown2.node.height / 2)))) {
this.lbGameCooldown2.node.opacity = 0;
this.lbGameCooldown2.node.runAction(cc.spawn(cc.fadeIn(.23), cc.moveTo(.23, this._posNum2).easing(cc.easeBackOut())));
}
}
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "BatNanCtrl", "Tx.Chat", "Tx.Const", "Tx.HistoryTurn", "Tx.MainGame", "Tx.SoiCau", "lbCountDown", "Tx.Chat.NetworkClient", "Tx.NetworkClient", "Tx.History", "Tx.Jackpot", "Tx.VinhDanh" ]);