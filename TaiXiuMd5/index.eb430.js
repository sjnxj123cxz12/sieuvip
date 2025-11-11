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
var u = i[s] = {
exports: {}
};
e[s][0].call(u.exports, function(t) {
return o(e[s][1][t] || t);
}, u, u.exports, t, e, i, n);
}
return i[s].exports;
}
for (var a = "function" == typeof __require && __require, s = 0; s < n.length; s++) o(n[s]);
return o;
}({
"TxMd5.AudioDefined": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "a6b155lQ55EdqtHFHf1eWg4", "TxMd5.AudioDefined");
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
var s = cc._decorator, c = s.ccclass, r = s.property, l = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.XucXac = null;
e.Click = null;
e.KetQua = null;
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
var i;
e._instance = null;
a([ r(cc.AudioClip) ], e.prototype, "XucXac", void 0);
a([ r(cc.AudioClip) ], e.prototype, "Click", void 0);
a([ r(cc.AudioClip) ], e.prototype, "KetQua", void 0);
return i = a([ c ], e);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
"TxMd5.BatNanCtrl": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "2a066m1AulM8ra2pxK4jckk", "TxMd5.BatNanCtrl");
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
var s = t("./TxMd5.MainGame"), c = cc._decorator, r = c.ccclass, l = (c.property, 
function(t) {
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
s.default.instance.showScoreNan();
};
return a([ r ], e);
}(cc.Component));
i.default = l;
cc._RF.pop();
}, {
"./TxMd5.MainGame": "TxMd5.MainGame"
} ],
"TxMd5.Chat.NetworkClient": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "1a6607/+zZCAKQBMKmqIe9u", "TxMd5.Chat.NetworkClient");
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
var s = t("../TxMd5.Chat"), c = t("../TxMd5.Const"), r = cc._decorator, l = r.ccclass, u = (r.property, 
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
cc.systemEvent.off(c.TxMd5Const.CHAT_TAIXIU_SOCKET_EVENT, this.onResponeData, this);
cc.systemEvent.on(c.TxMd5Const.CHAT_TAIXIU_SOCKET_EVENT, this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect(c.TxMd5Const.CHAT_TAIXIU_SOCKET_EVENT, t.url, t.hub, t.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
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
this.sendSignalR("RegisterChat", [ "taixiumd5" ]);
};
e.prototype.pingPong = function() {
this.sendSignalR("PingPong", []);
};
e.prototype.connectSuccess = function() {
lngui.ZLog.log("Connect Sucesss");
};
e.prototype.closeWS = function() {
cc.systemEvent.off(c.TxMd5Const.CHAT_TAIXIU_SOCKET_EVENT, this.onResponeData, this);
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
i.default = u;
cc._RF.pop();
}, {
"../TxMd5.Chat": "TxMd5.Chat",
"../TxMd5.Const": "TxMd5.Const"
} ],
"TxMd5.Chat": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "14b82v8nglNQa/7xQHFTuOs", "TxMd5.Chat");
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
var s = t("./network/TxMd5.Chat.NetworkClient"), c = t("./TxMd5.MainGame"), r = cc._decorator, l = r.ccclass, u = r.property, h = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.templateMessage = null;
e.listChat = null;
e.scrollListChat = null;
e.TxMd5tInputChat = null;
return e;
}
i = e;
e.prototype.touchSendChat = function() {
if (this.TxMd5tInputChat.string.length) {
s.default.instance.sendSignalR("SendMessage", [ this.TxMd5tInputChat.string, "taixiumd5" ]);
this.TxMd5tInputChat.string = "";
}
};
e.prototype.requestListLastMessages = function() {};
e.prototype.listLastMessages = function(t) {
if (0 != t.length) {
this.listChat.removeAllChildren();
for (var e in t) this.receiveMessage(t[e]);
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
this.TxMd5tInputChat.node.on("editing-return", this.touchSendChat, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
};
e.prototype.onKeyDown = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.enter:
this.TxMd5tInputChat.focus();
}
};
e.prototype.touchhidechat = function() {
c.default.instance.nodeChat.active = !1;
};
var i;
e._instance = null;
a([ u(cc.Node) ], e.prototype, "templateMessage", void 0);
a([ u(cc.Node) ], e.prototype, "listChat", void 0);
a([ u(cc.ScrollView) ], e.prototype, "scrollListChat", void 0);
a([ u(cc.EditBox) ], e.prototype, "TxMd5tInputChat", void 0);
return i = a([ l ], e);
}(cc.Component);
i.default = h;
cc._RF.pop();
}, {
"./TxMd5.MainGame": "TxMd5.MainGame",
"./network/TxMd5.Chat.NetworkClient": "TxMd5.Chat.NetworkClient"
} ],
"TxMd5.Const": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "30f57tWN29KbZ4Mi8QoCWsm", "TxMd5.Const");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.TxMd5Const = void 0;
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
t.MAX_KEY_VALUE = 8;
t.MAX_BET_TAI_XIU = 1e21;
t.MIN_BET = 10;
t.MAX_BET_PER_SESSION = 25e25;
t.RETURN_MONEY = 2;
t.diceNode = {
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
t.ON_TAIXIU_SOCKET = "OnTaiXiuMd5WebSocKet";
t.EVENT_FREETxMd5_NAME = "eventFreeTxMd5";
t.CHAT_TAIXIU_SOCKET_EVENT = "OnChatTaiXiuMd5SocketEvent";
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
i.TxMd5Const = n;
cc._RF.pop();
}, {} ],
"TxMd5.Help": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "cc4b3py89RNRbsTl5vaNF8U", "TxMd5.Help");
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
var s = cc._decorator, c = s.ccclass, r = s.property, l = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.Guide2 = null;
return e;
}
e.prototype.onLoad = function() {
this.Guide2.active = !1;
};
e.prototype.Clickguide2 = function() {
this.Guide2.active = !0;
};
a([ r(cc.Node) ], e.prototype, "Guide2", void 0);
return a([ c ], e);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
"TxMd5.HistoryTurn": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "e896aX5RjZMdLdY2Xy+V3t3", "TxMd5.HistoryTurn");
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
var s = t("./network/TxMd5.NetworkClient"), c = t("./TxMd5.Const"), r = cc._decorator, l = r.ccclass, u = r.property, h = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.m_dataHisoryTurnTai = [];
e.m_dataHisoryTurnXiu = [];
e.btnR = null;
e.btnL = null;
e.lbTotalBetTai = null;
e.lbTotalBetXiu = null;
e.txtSessionInfo = null;
e.txtTotalDice = null;
e.txtTotalSlotTai = null;
e.txtTotalSlotXiu = null;
e.txtMd5 = null;
e.txtResult = null;
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
s.default.instance.sendSignalR("GetSessionResultHistory", [ c.TxMd5Const.diceNode.GameSessionID ]);
lngui.UIWaitingLayout.showWaiting();
this.imgEffectTai.node.active = !1;
this.imgEffectXiu.node.active = !1;
};
e.prototype.showHistoryTurnTaiXiu = function(t) {
t && lngui.UIWaitingLayout.hideWaiting();
this.m_coinData = t;
this.btnR.node.on(cc.Node.EventType.TOUCH_END, this.touchBtnR, this);
this.btnL.node.on(cc.Node.EventType.TOUCH_END, this.touchBtnL, this);
this.setViewHistoryTurn();
};
e.prototype.touchBtnR = function() {
this.imgEffectTai.node.active = !1;
this.imgEffectXiu.node.active = !1;
this.m_GameSessionID++;
this.m_GameSessionID >= c.TxMd5Const.GameSessionID ? this.m_GameSessionID = c.TxMd5Const.GameSessionID - 1 : s.default.instance.sendSignalR("GetSessionResultHistory", [ this.m_GameSessionID ]);
};
e.prototype.touchBtnL = function() {
this.imgEffectTai.node.active = !1;
this.imgEffectXiu.node.active = !1;
this.m_GameSessionID--;
cc.log(this.m_GameSessionID);
this.m_GameSessionID < c.TxMd5Const.GameSessionID - 15 ? this.m_GameSessionID = c.TxMd5Const.GameSessionID - 15 : s.default.instance.sendSignalR("GetSessionResultHistory", [ this.m_GameSessionID ]);
};
e.prototype.setViewHistoryTurn = function() {
var t = 0, e = 0;
if (this.m_coinData.length) {
for (var n in this.m_coinData) if (1 == this.m_coinData[n].LocationID) {
e += this.m_coinData[n].TotalBetValue;
this.m_coinData[n].RefundValue;
this.m_dataHisoryTurnXiu.push(this.m_coinData[n]);
} else {
t += this.m_coinData[n].TotalBetValue;
this.m_coinData[n].RefundValue;
this.m_dataHisoryTurnTai.push(this.m_coinData[n]);
}
this.lbTotalBetTai.string = i.formatNumbertoK(t);
this.lbTotalBetXiu.string = i.formatNumbertoK(e);
this.m_GameSessionID = this.m_coinData[0].GameSessionID;
this.txtSessionInfo.getComponent(cc.Label).string = "#" + this.m_GameSessionID;
this.txtMd5.string = "" + this.m_coinData[0].MD5Result;
this.txtResult.string = "" + this.m_coinData[0].OriginalResult;
var o = this.m_coinData[0].Result.split(",");
for (n = 0; n < 3; n++) this.XucXac[n].getComponent(cc.Sprite).spriteFrame = this.imgDices[parseInt(o[n]) - 1];
if (this.m_coinData[0].LocationWinID == c.TxMd5Const.BetGate.GATE_TAI) {
this.imgEffectTai.node.active = !0;
this.imgEffectXiu.node.active = !1;
} else if (this.m_coinData[0].LocationWinID == c.TxMd5Const.BetGate.GATE_XIU) {
this.imgEffectTai.node.active = !1;
this.imgEffectXiu.node.active = !0;
}
this.txtTotalDice.getComponent(cc.Label).string = "= " + (parseInt(o[0]) + parseInt(o[1]) + parseInt(o[2])).toString();
this.refreshHistoryTurnTX();
} else {
this.lbTotalBetTai.string = "0";
this.lbTotalBetXiu.string = "0";
}
};
e.prototype.refreshHistoryTurnTX = function() {
this.lvTaiContent.removeAllChildren();
this.lvXiuContent.removeAllChildren();
for (var t = 0; t < 2; t++) if (t && 0 < this.m_dataHisoryTurnTai.length) {
this.txtTotalSlotTai.string = this.m_dataHisoryTurnTai.length + "";
for (var e = 0; e < 30; e++) this.addItemHisoryTurnTX(1, e);
} else if (!t && 0 < this.m_dataHisoryTurnXiu.length) {
this.txtTotalSlotXiu.string = this.m_dataHisoryTurnXiu.length + "";
for (e = 0; e < 30; e++) this.addItemHisoryTurnTX(2, e);
}
lngui.UIWaitingLayout.hideWaiting();
};
e.prototype.addItemHisoryTurnTX = function(t, e) {
var n;
n = 1 == t ? this.m_dataHisoryTurnTai[e] : this.m_dataHisoryTurnXiu[e];
var o = cc.instantiate(this.template);
o.position = new cc.Vec3(0, 0);
var a = n.BetTime.split("T");
a = a[1].split(".");
o.getChildByName("txtThoiGian").getComponent(cc.Label).string = a[0];
o.getChildByName("txtTenTaiKhoan").getComponent(cc.Label).string = i.truncateString(n.AccountName);
o.getChildByName("txtTienDat").getComponent(cc.Label).string = i.formatNumbertoK(n.TotalBetValue);
o.getChildByName("line");
1 == t ? this.lvTaiContent.addChild(o) : this.lvXiuContent.addChild(o);
};
e.truncateString = function(t) {
return t.length > 10 ? t.substring(0, 9) + "..." : t;
};
e.formatNumbertoK = function(t) {
if (t >= 1e3 && t < 1e6) {
var e = t / 1e3;
return e < 10 ? e.toFixed(1) + "K" : e.toFixed(0) + "K";
}
if (t >= 1e6) return (i = t / 1e6) < 10 ? i.toFixed(2) + "M" : i.toFixed(0) + "M";
if (t >= 1e9) {
var i;
return (i = t / 1e9) < 10 ? i.toFixed(2) + "B" : i.toFixed(0) + "B";
}
return t.toString();
};
e.prototype.touchcopyMd5 = function() {
lngui.PlatformInterface.copy(this.m_coinData[0].MD5Result);
};
e.prototype.touchcopyResult = function() {
lngui.PlatformInterface.copy(this.m_coinData[0].OriginalResult);
};
var i;
e._instance = null;
a([ u(cc.Button) ], e.prototype, "btnR", void 0);
a([ u(cc.Button) ], e.prototype, "btnL", void 0);
a([ u(cc.Label) ], e.prototype, "lbTotalBetTai", void 0);
a([ u(cc.Label) ], e.prototype, "lbTotalBetXiu", void 0);
a([ u(cc.Label) ], e.prototype, "txtSessionInfo", void 0);
a([ u(cc.Label) ], e.prototype, "txtTotalDice", void 0);
a([ u(cc.Label) ], e.prototype, "txtTotalSlotTai", void 0);
a([ u(cc.Label) ], e.prototype, "txtTotalSlotXiu", void 0);
a([ u(cc.Label) ], e.prototype, "txtMd5", void 0);
a([ u(cc.Label) ], e.prototype, "txtResult", void 0);
a([ u([ cc.Sprite ]) ], e.prototype, "XucXac", void 0);
a([ u(sp.Skeleton) ], e.prototype, "imgEffectTai", void 0);
a([ u(sp.Skeleton) ], e.prototype, "imgEffectXiu", void 0);
a([ u([ cc.SpriteFrame ]) ], e.prototype, "imgDices", void 0);
a([ u(cc.Node) ], e.prototype, "lvTaiContent", void 0);
a([ u(cc.Node) ], e.prototype, "lvXiuContent", void 0);
a([ u(cc.Node) ], e.prototype, "template", void 0);
return i = a([ l ], e);
}(lngui.UIPopup);
i.default = h;
cc._RF.pop();
}, {
"./TxMd5.Const": "TxMd5.Const",
"./network/TxMd5.NetworkClient": "TxMd5.NetworkClient"
} ],
"TxMd5.History": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "d4bf4dAd4hNaa3B9yU0kTSJ", "TxMd5.History");
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
var s = t("../network/TxMd5.NetworkClient"), c = t("../TxMd5.Const"), r = cc._decorator, l = r.ccclass, u = r.property, h = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.template = null;
e.sprline = [];
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
s.default.instance.sendSignalR("GetAccountHistory", [ c.TxMd5Const.BetType.BET_GOLD, c.TxMd5Const.GameID.TAI_XIU, 30 ]);
};
e.prototype.showAccountHistoryTaiXiu = function(t) {
if (t) for (var e = 0; e < t.length; e++) {
var i = t[e], n = i.StartTime, o = i.LocationName, a = i.Result;
a = parseInt(a) >= 11 ? "Tài" : "Xỉu";
var s = i.GameSessionID, r = i.TotalBetValue, l = i.RefundValue, u = i.PrizeValue, h = u - r + l, p = cc.instantiate(this.template);
p.position = new cc.Vec3(0, 0, 0);
p.getChildByName("txtPhien").getComponent(cc.Label).string = "" + s;
if (n.length > 0) {
var d = c.TxMd5Const.formatDateTime2(n);
p.getChildByName("txtThoiGian").getComponent(cc.Label).string = d;
p.getChildByName("txtThoiGian").color = cc.Color.WHITE;
}
if (h > 0) {
p.getChildByName("txtTienThang").getComponent(cc.Label).string = "+" + c.TxMd5Const.formatNumber(u);
p.getChildByName("txtTienThang").color = cc.Color.GREEN;
} else if (h < 0) {
p.getChildByName("txtTienThang").getComponent(cc.Label).string = "-" + c.TxMd5Const.formatNumber(u);
p.getChildByName("txtTienThang").color = cc.Color.RED;
} else p.getChildByName("txtTienThang").getComponent(cc.Label).string = "Hòa";
p.getChildByName("txtTongCuoc").getComponent(cc.Label).string = c.TxMd5Const.formatNumber(r - l);
p.getChildByName("txtChiTiet").getComponent(cc.Label).string = "Kết quả " + a + ". Đặt " + o + " " + c.TxMd5Const.formatNumber(r) + " Nhận " + c.TxMd5Const.formatNumber(u) + ", #" + s;
p.getChildByName("liner").active = !!(e % 2);
this.content.addChild(p);
}
};
var i;
e._instance = null;
a([ u(cc.Node) ], e.prototype, "content", void 0);
a([ u(cc.Node) ], e.prototype, "template", void 0);
a([ u([ cc.SpriteFrame ]) ], e.prototype, "sprline", void 0);
return i = a([ l ], e);
}(cc.Component);
i.default = h;
cc._RF.pop();
}, {
"../TxMd5.Const": "TxMd5.Const",
"../network/TxMd5.NetworkClient": "TxMd5.NetworkClient"
} ],
"TxMd5.ItemHistory": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "a236a7qD21PKqincpWfw1PD", "TxMd5.ItemHistory");
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
var s = t("../TxMd5.Const"), c = cc._decorator, r = c.ccclass, l = c.property, u = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.TxMd5tPhien = null;
e.TxMd5tThoiGian = null;
e.Dice1 = null;
e.Dice2 = null;
e.Dice3 = null;
e.bguser = null;
e.lineJp = null;
e.TxMd5tCuaDat = null;
e.TxMd5tUser = null;
e.BtnVinhdanh = null;
e.TxMd5tTienNohu = null;
e.TxMd5tVinhDanh1 = null;
e.TxMd5tVinhDanh2 = null;
e.TxMd5tVinhDanh3 = null;
e.TxMd5tTienTrung1 = null;
e.TxMd5tTienTrung2 = null;
e.TxMd5tTienTrung3 = null;
e.SprDice = [];
e._delegate = null;
return e;
}
e.prototype.setDelegate = function(t) {
this._delegate = t;
};
e.prototype.setData = function(t, e) {
var i = t, n = i.SessionTime, o = i.LocationName, a = (i.Result, i.Data[0].Username), c = i.Data[1].Username, r = i.Data[2].Username, l = i.Data[0].JackpotValue, u = i.Data[1].JackpotValue, h = i.Data[2].JackpotValue;
i.LocationIDWin;
var p = i.GameSessionID, d = i.TotalJackpot;
this.TxMd5tPhien.string = "" + p;
this.TxMd5tPhien.node.color = cc.Color.YELLOW;
if (n.length > 0) {
s.TxMd5Const.formatDateTime(n);
this.TxMd5tThoiGian.node.color = cc.Color.WHITE;
}
this.Dice1.spriteFrame = this.SprDice[i.Dice1 - 1];
this.Dice2.spriteFrame = this.SprDice[i.Dice1 - 1];
this.Dice3.spriteFrame = this.SprDice[i.Dice1 - 1];
this.bguser.spriteFrame = this.bguser[0];
this.lineJp.spriteFrame = this.bguser[1];
this.lineJp.node.active = !(e % 2);
this.TxMd5tCuaDat.string = o;
this.TxMd5tUser.string = i.TotalUser;
this.TxMd5tCuaDat.node.color = cc.Color.WHITE;
this.BtnVinhdanh.getComponent(cc.Sprite).spriteFrame = this.bguser[2];
this.TxMd5tTienNohu.string = s.TxMd5Const.formatNumberMin(d);
this.TxMd5tTienNohu.node.color = cc.Color.YELLOW;
this.TxMd5tVinhDanh1.string = s.TxMd5Const.formatUserName(a);
this.TxMd5tVinhDanh2.string = s.TxMd5Const.formatUserName(c);
this.TxMd5tVinhDanh3.string = s.TxMd5Const.formatUserName(r);
this.TxMd5tTienTrung1.string = s.TxMd5Const.formatNumberMin(l);
this.TxMd5tTienTrung1.horizontalAlign = 2;
this.TxMd5tTienTrung2.string = s.TxMd5Const.formatNumberMin(u);
this.TxMd5tTienTrung2.horizontalAlign = 2;
this.TxMd5tTienTrung3.string = s.TxMd5Const.formatNumberMin(h);
this.TxMd5tTienTrung3.horizontalAlign = 2;
this.node.color = e % 2 == 0 ? cc.color(38, 4, 0) : cc.color(255, 255, 255);
};
e.prototype.onClickShowVinhDanh = function() {};
a([ l(cc.Label) ], e.prototype, "TxMd5tPhien", void 0);
a([ l(cc.Label) ], e.prototype, "TxMd5tThoiGian", void 0);
a([ l(cc.Sprite) ], e.prototype, "Dice1", void 0);
a([ l(cc.Sprite) ], e.prototype, "Dice2", void 0);
a([ l(cc.Sprite) ], e.prototype, "Dice3", void 0);
a([ l(cc.Sprite) ], e.prototype, "bguser", void 0);
a([ l(cc.Sprite) ], e.prototype, "lineJp", void 0);
a([ l(cc.Label) ], e.prototype, "TxMd5tCuaDat", void 0);
a([ l(cc.Label) ], e.prototype, "TxMd5tUser", void 0);
a([ l(cc.Button) ], e.prototype, "BtnVinhdanh", void 0);
a([ l(cc.Label) ], e.prototype, "TxMd5tTienNohu", void 0);
a([ l(cc.Label) ], e.prototype, "TxMd5tVinhDanh1", void 0);
a([ l(cc.Label) ], e.prototype, "TxMd5tVinhDanh2", void 0);
a([ l(cc.Label) ], e.prototype, "TxMd5tVinhDanh3", void 0);
a([ l(cc.Label) ], e.prototype, "TxMd5tTienTrung1", void 0);
a([ l(cc.Label) ], e.prototype, "TxMd5tTienTrung2", void 0);
a([ l(cc.Label) ], e.prototype, "TxMd5tTienTrung3", void 0);
a([ l(cc.SpriteFrame) ], e.prototype, "SprDice", void 0);
return a([ r ], e);
}(cc.Component);
i.default = u;
cc._RF.pop();
}, {
"../TxMd5.Const": "TxMd5.Const"
} ],
"TxMd5.Jackpot": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "bdc747QUOtNmqRNkVcdr8qo", "TxMd5.Jackpot");
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
var s = t("../network/TxMd5.NetworkClient"), c = t("../TxMd5.Const"), r = cc._decorator, l = r.ccclass, u = r.property, h = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.template = null;
e.SprDice = [];
e.bg = null;
e.bguser = [];
e.NodeChiTiet = null;
e.contentVd = null;
e.templateVd = null;
e._data = null;
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
this.NodeChiTiet.active = !1;
i._instance = this;
s.default.instance.sendSignalR("GetJackpotHistory", []);
};
e.prototype.showTopJackpotTxMd5 = function(t) {
if (t) {
t && lngui.UIWaitingLayout.hideWaiting();
this._data = t;
for (var e = 0; e < t.length; e++) {
var i = t[e], n = i.SessionTime, o = i.LocationName, a = (i.Result, i.Data[0].Username), s = i.Data[1].Username, r = i.Data[2].Username, l = i.Data[0].JackpotValue, u = i.Data[1].JackpotValue, h = i.Data[2].JackpotValue;
i.LocationIDWin;
var p = i.GameSessionID, d = i.TotalJackpot, m = cc.instantiate(this.template);
m.active = !0;
m.setPosition(0, 0);
m.getChildByName("TxMd5tPhien").getComponent(cc.Label).string = "" + p;
m.getChildByName("TxMd5tPhien").color = cc.Color.YELLOW;
if (n.length > 0) {
var g = c.TxMd5Const.formatDateTime(n);
m.getChildByName("TxMd5tThoiGian").getComponent(cc.Label).string = g;
m.getChildByName("TxMd5tThoiGian").color = cc.Color.WHITE;
}
m.getChildByName("Dice1").getComponent(cc.Sprite).spriteFrame = this.SprDice[i.Dice1 - 1];
m.getChildByName("Dice2").getComponent(cc.Sprite).spriteFrame = this.SprDice[i.Dice1 - 1];
m.getChildByName("Dice3").getComponent(cc.Sprite).spriteFrame = this.SprDice[i.Dice1 - 1];
m.getChildByName("lineJp").getComponent(cc.Sprite).spriteFrame = this.bguser[0];
m.getChildByName("lineJp").active = !(e % 2);
m.getChildByName("TxMd5tCuaDat").getComponent(cc.Label).string = o;
m.getChildByName("TxMd5tCuaDat").color = cc.Color.WHITE;
m.getChildByName("Btn-Vinhdanh").getComponent(cc.Sprite).spriteFrame = this.bguser[1];
m.getChildByName("Btn-Vinhdanh").on("click", this.touchbtnchitiet, this);
m.getChildByName("Btn-Vinhdanh").name = e.toString();
m.getChildByName("TxMd5tTienNohu").getComponent(cc.Label).string = c.TxMd5Const.formatNumberMin(d);
m.getChildByName("TxMd5tTienNohu").color = cc.Color.YELLOW;
m.getChildByName("TxMd5tVinhDanh1").getComponent(cc.Label).string = c.TxMd5Const.formatUserName(a);
m.getChildByName("TxMd5tVinhDanh2").getComponent(cc.Label).string = c.TxMd5Const.formatUserName(s);
m.getChildByName("TxMd5tVinhDanh3").getComponent(cc.Label).string = c.TxMd5Const.formatUserName(r);
m.getChildByName("TxMd5tTienTrung1").getComponent(cc.Label).string = c.TxMd5Const.formatNumberMin(l);
m.getChildByName("TxMd5tTienTrung1").getComponent(cc.Label).horizontalAlign = 2;
m.getChildByName("TxMd5tTienTrung2").getComponent(cc.Label).string = c.TxMd5Const.formatNumberMin(u);
m.getChildByName("TxMd5tTienTrung2").getComponent(cc.Label).horizontalAlign = 2;
m.getChildByName("TxMd5tTienTrung3").getComponent(cc.Label).string = c.TxMd5Const.formatNumberMin(h);
m.getChildByName("TxMd5tTienTrung3").getComponent(cc.Label).horizontalAlign = 2;
m.color = e % 2 == 0 ? cc.color(38, 4, 0) : cc.color(255, 255, 255);
this.content.addChild(m);
}
}
};
e.prototype.touchbtnchitiet = function(t) {
var e = parseInt(t.name), i = this._data[e].Data;
console.log(i);
this.NodeChiTiet.active = !0;
if (i) for (var n = 0; n < i.length; n++) {
var o = i[n], a = o.Username, s = o.JackpotValue, r = cc.instantiate(this.templateVd);
r.setPosition(0, 0);
r.getChildByName("TxMd5tHang").getComponent(cc.Label).string = "" + (n + 1);
if (0 == n) {
r.getChildByName("TxMd5tHang").color = cc.color(235, 208, 16);
r.getChildByName("TxMd5tUser").color = cc.color(235, 208, 16);
r.getChildByName("TxMd5tTienThuong").color = cc.color(235, 208, 16);
} else if (1 == n) {
r.getChildByName("TxMd5tHang").color = cc.color(88, 247, 13);
r.getChildByName("TxMd5tUser").color = cc.color(88, 247, 13);
r.getChildByName("TxMd5tTienThuong").color = cc.color(88, 247, 13);
} else if (2 == n) {
r.getChildByName("TxMd5tHang").color = cc.color(8, 192, 250);
r.getChildByName("TxMd5tUser").color = cc.color(8, 192, 250);
r.getChildByName("TxMd5tTienThuong").color = cc.color(8, 192, 250);
} else {
r.getChildByName("TxMd5tTienThuong").color = cc.Color.WHITE;
r.getChildByName("TxMd5tUser").color = cc.Color.WHITE;
r.getChildByName("TxMd5tHang").color = cc.Color.WHITE;
}
r.getChildByName("TxMd5tUser").getComponent(cc.Label).string = a;
r.getChildByName("TxMd5tTienThuong").getComponent(cc.Label).string = c.TxMd5Const.formatNumber(s);
this.contentVd.addChild(r);
}
};
e.prototype.closeChitiet = function() {
this.NodeChiTiet.active = !1;
this.contentVd.removeAllChildren();
};
var i;
e._instance = null;
a([ u(cc.Node) ], e.prototype, "content", void 0);
a([ u(cc.Node) ], e.prototype, "template", void 0);
a([ u(cc.SpriteFrame) ], e.prototype, "SprDice", void 0);
a([ u(cc.Node) ], e.prototype, "bg", void 0);
a([ u(cc.SpriteFrame) ], e.prototype, "bguser", void 0);
a([ u(cc.Node) ], e.prototype, "NodeChiTiet", void 0);
a([ u(cc.Node) ], e.prototype, "contentVd", void 0);
a([ u(cc.Node) ], e.prototype, "templateVd", void 0);
return i = a([ l ], e);
}(cc.Component);
i.default = h;
cc._RF.pop();
}, {
"../TxMd5.Const": "TxMd5.Const",
"../network/TxMd5.NetworkClient": "TxMd5.NetworkClient"
} ],
"TxMd5.MainGame": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "5e138jtbUtFS4nlcV2l8d/k", "TxMd5.MainGame");
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
var s = t("./TxMd5.BatNanCtrl"), c = t("./network/TxMd5.NetworkClient"), r = t("./TxMd5.Const"), l = cc._decorator, u = l.ccclass, h = l.property, p = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.m_nGameStatus = 0;
e.m_nLocationIDWin = 0;
e.m_isNan = !1;
e.m_isTouchNan = !1;
e.m_nTimeNan = 12;
e._callback = null;
e.m_lblJackpot = null;
e.originalPos = null;
e.m_nBetType = 1;
e.m_btnKeyValue = [];
e.m_btnKeypad = [];
e.m_mapIndexToStrBit = [ "1K", "10K", "50K", "100K", "500K", "1M", "10M", "50M" ];
e.m_imgDice1 = null;
e.m_imgDice2 = null;
e.m_imgDice3 = null;
e.m_imgEffectTai = null;
e.m_imgEffectXiu = null;
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
e.m_imgResult = null;
e.imgBgTimer2 = null;
e.m_imgNan = null;
e.panelChen = null;
e.imgBat = null;
e.imgBat2 = null;
e.panelNumberBig = null;
e.panelKeypad = null;
e.m_imgDayLose = null;
e.m_imgDayWin = null;
e.m_historyPanel = null;
e.btnKeyBroad = null;
e.m_panelTaxiu = null;
e.nodeChat = null;
e.bordermsg = null;
e.ketqua = null;
e.templecau = null;
e.SkeXucXac = null;
e.SkeJackpot = null;
e.SkeConRong = null;
e.m_lblTurnID = null;
e.ebInputBetTai = null;
e.ebInputBetXiu = null;
e.cuocxiu = null;
e.cuoctai = null;
e.m_lblTimerWaitResult = null;
e.m_lblMessage = null;
e.m_lblUsersTai = null;
e.m_lblUsersXiu = null;
e.m_lblMoneyTai = null;
e.m_lblMoneyXiu = null;
e.m_lblJackpotFund = null;
e.m_lblBetedValueTai = null;
e.m_lblBetedValueXiu = null;
e.m_lblMoneyWin = null;
e.m_lblTimer = null;
e.lblMd5 = null;
e.btnChonTai = null;
e.btnChonXiu = null;
e.btnSoKhac = null;
e.btnAccept = null;
e.btnNan = null;
e.btnCancel = null;
e.btnAllIn = null;
e.btnChat = null;
e.HisTurn = null;
e.coin_drop = null;
e.XucXac = null;
e.Click = null;
e.KetQua = null;
e.chuoiMd5 = "";
e.keyMD5 = "";
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
this.imgBat2.active = !1;
this.originalPos = this.imgBat.position;
this.m_imgNanRoot.node.zIndex = 999;
this.m_imgNanRoot.getComponent(s.default).dataSource = this;
this.initTaiXiu();
};
e.prototype.initTaiXiu = function() {
this.ketqua.active = !1;
this.SkeJackpot.setAnimation(0, "JP idle", !0);
this.SkeConRong.node.active = !1;
this.bordermsg.active = !1;
this.diceWith = this.imgHistoryFirst.node.width + 5;
this.firstPosHis = this.imgHistoryFirst.node.getPosition();
this.m_imgResult.active = !1;
this.sprCircle.node.active = !1;
this.imgBgTimer2.active = !1;
this.m_lblTurnID.string = "";
this.lblMd5.string = "";
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
this.diceWith = this.imgHistoryFirst.node.width + 5.8;
this.firstPosHis = this.imgHistoryFirst.node.getPosition();
this.panelNumberBig.active = !1;
this.panelKeypad.active = !1;
this.btnChat.node.on(cc.Node.EventType.TOUCH_END, this.showChat, this);
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
for (var t = 0; t < r.TxMd5Const.MAX_KEY_VALUE; t++) {
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
e.prototype.onTouchAllIn = function() {
lngui.AudioManager.instance.playSfx(this.Click, 1);
this.m_llBetValue = lngui.UserManager.instance.mainUserInfo.Money;
if (this.m_llBetValue > r.TxMd5Const.MAX_BET_TAI_XIU) {
this.m_llBetValue = r.TxMd5Const.MAX_BET_TAI_XIU;
this.showMessage("Chỉ đặt cửa trong khoảng 10 đến " + r.TxMd5Const.formatNumber(r.TxMd5Const.MAX_BET_TAI_XIU));
}
this.m_nBetGate == r.TxMd5Const.BetGate.GATE_XIU ? this.ebInputBetXiu.string = r.TxMd5Const.formatNumber(this.m_llBetValue) : this.ebInputBetTai.string = r.TxMd5Const.formatNumber(this.m_llBetValue);
};
e.prototype.touchCancel = function() {
lngui.AudioManager.instance.playSfx(this.Click, 1);
this.showMenhGiaPanel(!1);
this.panelKeypad.active = !1;
this.panelNumberBig.active = !1;
this.ebInputBetXiu.string = "";
this.ebInputBetTai.string = "";
this.keyPadValue = "";
this.m_llBetValue = 0;
this.m_nBetGate = r.TxMd5Const.BetGate.NONE;
this.cuoctai.node.active = !0;
this.cuocxiu.node.active = !0;
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
this.keyPadValue = r.TxMd5Const.formatNumber(this.m_llBetValue);
this.m_nBetGate == r.TxMd5Const.BetGate.GATE_XIU ? this.ebInputBetXiu.string = r.TxMd5Const.formatNumber(this.m_llBetValue) : this.ebInputBetTai.string = r.TxMd5Const.formatNumber(this.m_llBetValue);
};
e.prototype.touchKeyNumber = function(t) {
lngui.AudioManager.instance.playSfx(this.Click, 1);
var e = t.target.name;
e = (e = e.replace(/btn_/g, "")).replace("10", "000");
this.keyPadValue += e;
this.m_llBetValue = parseInt(this.keyPadValue);
if (this.m_llBetValue > r.TxMd5Const.MAX_BET_TAI_XIU) {
this.m_llBetValue = r.TxMd5Const.MAX_BET_TAI_XIU;
this.showMessage("Chỉ đặt cửa trong khoảng 10 đến " + r.TxMd5Const.formatNumber(r.TxMd5Const.MAX_BET_TAI_XIU));
}
this.m_nBetGate == r.TxMd5Const.BetGate.GATE_XIU ? this.ebInputBetXiu.string = r.TxMd5Const.formatNumber(this.m_llBetValue) : this.ebInputBetTai.string = r.TxMd5Const.formatNumber(this.m_llBetValue);
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
var s = "+" + r.TxMd5Const.formatNumber(parseInt(a));
this.m_lblMoneyWin.string = s;
this.m_lblMoneyWin.node.active = !0;
this.m_lblMoneyWin.node.runAction(cc.moveBy(3, cc.v2(0, 40)));
this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
this.m_lblMoneyWin.node.active = !1;
}, this)));
null != this._callback && this._callback(r.TxMd5Const.RETURN_MONEY, s, t);
} else if (n > 0) {
s = "+" + r.TxMd5Const.formatNumber(parseInt(n));
this.m_lblMoneyWin.string = s;
this.m_lblMoneyWin.node.active = !0;
this.m_lblMoneyWin.node.runAction(cc.moveBy(3, cc.v2(0, 40)));
this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
this.m_lblMoneyWin.node.active = !1;
}, this)));
null != this._callback && this._callback(r.TxMd5Const.RETURN_MONEY, s, t);
} else {
s = "-" + r.TxMd5Const.formatNumber(parseInt(i));
this.m_lblMoneyWin.string = s;
this.m_lblMoneyWin.node.active = !0;
this.m_lblMoneyWin.node.runAction(cc.moveBy(3, cc.v2(0, 40)));
this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
this.m_lblMoneyWin.node.active = !1;
}, this)));
}
};
e.prototype.callBet = function() {
lngui.AudioManager.instance.playSfx(this.Click, 1);
this.m_lblMessage.string = "";
if (0 != this.m_llBetValue) if (this.m_llBetValue < r.TxMd5Const.MIN_BET && 0 != this.m_llBetValue) this.showMessage("Đặt cửa không hợp lệ."); else if (this.m_llBetValue > r.TxMd5Const.MAX_BET_TAI_XIU) this.showMessage("Mỗi lần đặt cửa tối đa không được vượt quá " + r.TxMd5Const.convertToK(r.TxMd5Const.MAX_BET_TAI_XIU) + " Nổ"); else {
if (this.m_nBetType == r.TxMd5Const.BetType.BET_GOLD) if (this.m_nBetGate == r.TxMd5Const.BetGate.GATE_TAI) {
if (this.m_llBetValue + this.m_totalBetTai > r.TxMd5Const.MAX_BET_PER_SESSION) {
r.TxMd5Const.convertToK;
this.showMessage("Đặt cửa mỗi phiên không vượt quá  " + r.TxMd5Const.convertToK(r.TxMd5Const.MAX_BET_PER_SESSION) + " Nổ. Vui lòng đợi lượt sau");
return;
}
} else if (this.m_nBetGate == r.TxMd5Const.BetGate.GATE_XIU && this.m_llBetValue + this.m_totalBetXiu > r.TxMd5Const.MAX_BET_PER_SESSION) {
this.showMessage("Đặt cửa mỗi phiên không vượt quá  " + r.TxMd5Const.convertToK(r.TxMd5Const.MAX_BET_PER_SESSION) + " Nổ. Vui lòng đợi lượt sau");
return;
}
if (this.m_nGameStatus != r.TxMd5Const.GameStatus.RACING && this.m_nGameStatus != r.TxMd5Const.GameStatus.WAITING) {
this.cuoctai.node.active = !0;
this.cuocxiu.node.active = !0;
this.SetBet();
} else this.showMessage("Đợi ván mới");
} else this.showMessage("Vui lòng đặt cửa.");
};
e.prototype.SetBet = function() {
if (this.m_nRemainWaiting <= 5) this.showMessage("Hết thời gian đặt cửa"); else {
c.default.instance.sendSignalR("SetBetTaiXiu", [ this.m_nBetType, this.m_nBetGate, this.m_llBetValue ]);
this.keyPadValue = "";
this.m_llBetValue = 0;
this.m_nBetGate == r.TxMd5Const.BetGate.GATE_XIU ? this.ebInputBetXiu.string = "0" : this.ebInputBetTai.string = "0";
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
t == r.TxMd5Const.BetGate.GATE_TAI ? this.m_lblBetedValueTai.string = r.TxMd5Const.formatNumber(e) : t == r.TxMd5Const.BetGate.GATE_XIU && (this.m_lblBetedValueXiu.string = r.TxMd5Const.formatNumber(e));
};
e.prototype.setBalance = function(t, e) {
e < 0 || lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, e);
};
e.prototype.callSelectValue = function(t) {
lngui.AudioManager.instance.playSfx(this.Click, 1);
var e = t.target.name;
e = (e = (e = e.replace(/btn_/g, "")).replace("M", "000000")).replace("K", "000");
this.m_llBetValue += parseInt(e);
if (this.m_llBetValue > lngui.UserManager.instance.mainUserInfo.Money) this.showMessage("Bạn không đủ số dư"); else {
if (this.m_llBetValue > r.TxMd5Const.MAX_BET_TAI_XIU) {
this.m_llBetValue = r.TxMd5Const.MAX_BET_TAI_XIU;
this.showMessage("Chỉ đặt cửa trong khoảng 10 đến " + r.TxMd5Const.formatNumber(r.TxMd5Const.MAX_BET_TAI_XIU) + " Nổ");
}
this.m_nBetGate == r.TxMd5Const.BetGate.GATE_XIU ? this.ebInputBetXiu.string = r.TxMd5Const.formatNumber(this.m_llBetValue) : this.m_nBetGate == r.TxMd5Const.BetGate.GATE_TAI && (this.ebInputBetTai.string = r.TxMd5Const.formatNumber(this.m_llBetValue));
var i = t.target.getPosition();
cc.v3({
x: i.x + this.panelNumberBig.x,
y: i.y + this.panelNumberBig.y,
z: 0
});
}
};
e.prototype.moveMoney = function(t) {
var e, i = new cc.Node();
i.addComponent(cc.Sprite).spriteFrame = this.bcoinSprite;
if (null != i) {
e = this.m_nBetGate == r.TxMd5Const.BetGate.GATE_TAI ? this.btnChonTai.node.getPosition() : this.btnChonXiu.node.getPosition();
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
if (this.m_nGameStatus == r.TxMd5Const.GameStatus.BETTING) {
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
var n = t[i];
this.m_lblJackpotFund.string = r.TxMd5Const.convertToMoney(n.JackpotFund);
var o = n.TotalAccount1, a = n.TotalBetValue1, s = n.TotalAccount2, c = n.TotalBetValue2;
this.m_lblMoneyTai.string = r.TxMd5Const.convertToMoney(c);
this.m_totalBetTai = c;
this.m_lblMoneyXiu.string = r.TxMd5Const.convertToMoney(a);
this.m_totalBetXiu = a;
this.m_lblUsersTai.string = r.TxMd5Const.formatNumber(s);
this.m_lblUsersXiu.string = r.TxMd5Const.formatNumber(o);
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
var e = this;
if (null != t) {
this.resetBat();
r.TxMd5Const.GameSessionID = t.GameSessionID;
this.m_llGameSessionID = t.GameSessionID;
this.m_nGameStatus = t.GameStatus;
this.m_lblTurnID.string = "#" + this.m_llGameSessionID;
cc.systemEvent.emit("InforGameSessionTxMd5", "" + this.m_llGameSessionID);
if (this.m_nGameStatus == r.TxMd5Const.GameStatus.BETTING) {
this.chuoiMd5 = t.MD5Result;
this.keyMD5 = t.MD5Result;
this.lblMd5.string = this.chuoiMd5;
this.ketqua.active = !1;
this.m_nRemainWaiting = t.RemainBetting;
if (this.m_nRemainWaiting > 2) {
this.btnChonTai.interactable = !0;
this.ebInputBetTai.enabled = !0;
this.btnChonXiu.interactable = !0;
this.ebInputBetXiu.enabled = !0;
}
} else {
this.ketqua.active = !0;
this.m_nRemainWaiting = t.RemainWaiting;
this.showMenhGiaPanel(!1);
this.ebInputBetTai.string = "";
this.ebInputBetXiu.string = "";
this.m_llBetValue = 0;
this.keyPadValue = "";
this.chuoiMd5 = t.OriginalResult;
this.keyMD5 = t.OriginalResult;
this.chuoiMd5 = "..." + this.chuoiMd5.slice(6, this.chuoiMd5.indexOf("}") + 1) + "...";
this.m_isNan && !this.m_isTouchNan ? setTimeout(function() {
e.lblMd5.string = e.chuoiMd5;
}, 1e4) : this.lblMd5.string = this.chuoiMd5;
this.m_nGameStatus == r.TxMd5Const.GameStatus.RACING && this.m_nRemainWaiting > 8 && this.m_nRemainWaiting < 24 && (this.m_imgDice1.node.active && this.m_imgDice2.node.active && this.m_imgDice3.node.active || c.default.instance.sendSignalR("GetCurrentResultTaiXiu", []));
}
this.startTimer();
}
};
e.prototype.startTimer = function() {
this.m_totalBetTai = 0;
this.m_totalBetXiu = 0;
switch (this.m_nGameStatus) {
case r.TxMd5Const.GameStatus.WAITING:
case r.TxMd5Const.GameStatus.RACING:
this.imgBgTimer2.active = !0;
this.btnChonTai.interactable = !0;
this.ebInputBetTai.enabled = !0;
this.btnChonXiu.interactable = !0;
this.ebInputBetXiu.enabled = !0;
this.m_nBetGate = r.TxMd5Const.BetGate.NONE;
break;

case r.TxMd5Const.GameStatus.BETTING:
this.startAnimation();
this.showDices(!1);
this.imgBgTimer2.active = !1;
this.m_nRemainWaiting, this.m_lblTimerWaitResult.node.color = cc.color(255, 255, 255);
this.m_imgEffectTai.node.stopAllActions();
this.m_imgEffectXiu.node.stopAllActions();
this.m_imgEffectXiu.node.active = !1;
this.m_imgEffectTai.node.active = !1;
this.m_imgResult.active = !1;
}
if (this.m_nRemainWaiting > 0) {
cc.director.getScheduler().unschedule(this.startCountDownWaiting, this);
cc.director.getScheduler().schedule(this.startCountDownWaiting, this, 1, null);
}
};
e.prototype.startCountDownBetting = function(t) {
this.m_lblTimer.node.getComponent("TxMd5.lbCountDown").setRemaningTime(t);
};
e.prototype.startCountDownWaiting = function(t) {
if (this.m_nRemainWaiting > 0) {
this.m_nRemainWaiting -= parseInt(t);
this.m_nRemainWaiting, this.m_nRemainWaiting;
if (this.imgBgTimer2.active) {
this.m_lblTimerWaitResult.string = "" + this.m_nRemainWaiting;
this.m_lblTimer.node.active = !1;
}
if (this.m_nGameStatus == r.TxMd5Const.GameStatus.RACING) {
if (this.m_isNan && !this.m_isTouchNan) {
if (1 == this.m_nRemainWaiting) {
this.GetAccountResult();
this.getInfoEventDuDay();
this.resetBat();
}
} else if (5 == this.m_nRemainWaiting) {
this.GetAccountResult();
this.getInfoEventDuDay();
}
} else if (this.m_nGameStatus == r.TxMd5Const.GameStatus.BETTING) {
this.m_nRemainWaiting > 48 && this.showMessage("Bắt Đầu Ván Mới.");
if (this.m_nRemainWaiting <= 2) {
this.btnChonTai.interactable = !1;
this.ebInputBetTai.enabled = !1;
this.btnChonXiu.interactable = !1;
this.ebInputBetXiu.enabled = !1;
this.showMenhGiaPanel(!1);
this.m_lblTimerWaitResult.node.color = cc.color(255, 255, 255);
}
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
this.m_imgDayLose.active = !t;
this.m_imgDayWin.active = !t;
};
e.prototype.resetBat = function() {
this.imgBat.stopAllActions();
this.imgBat.active = !1;
this.imgBat.setPosition(this.originalPos.x, this.originalPos.y);
};
e.prototype.currentResult = function(t) {
if (this.m_nGameStatus != r.TxMd5Const.GameStatus.RACING || !(this.m_imgDice1.node.active || this.m_imgDice2.node.active || this.m_imgDice3.node.active)) {
this.m_lblTimer.node.active = !1;
this.m_nLocationIDWin = t.LocationIDWin;
if (!(this.m_nLocationIDWin <= 0 || t.Dice1 <= 0 || t.Dice2 <= 0 || t.Dice3 <= 0)) {
this.m_imgDice1.getComponent(cc.Sprite).spriteFrame = this.imgDices1[t.Dice1 - 1];
this.m_imgDice1.node.active = !1;
this.m_imgDice2.getComponent(cc.Sprite).spriteFrame = this.imgDices2[t.Dice2 - 1];
this.m_imgDice2.node.active = !1;
this.m_imgDice3.getComponent(cc.Sprite).spriteFrame = this.imgDices3[t.Dice3 - 1];
this.m_imgDice3.node.active = !1;
this.m_imgResult.getChildByName("txtResult").getComponent(cc.Label).string = "" + (t.Dice1 + t.Dice2 + t.Dice3);
this.m_imgResult.active = !1;
this.showScore();
}
}
};
e.prototype.startAnimation = function() {
var t = this;
this.m_lblTimer.node.active = !1;
lngui.AudioManager.instance.playSfx(this.XucXac, 1);
this.SkeXucXac.node.active = !0;
this.SkeXucXac.setAnimation(0, "animation", !1);
this.SkeXucXac.setCompleteListener(function() {
t.SkeXucXac.node.active = !1;
t.imgBat2.active = !0;
if (!t.imgBgTimer2.active) {
t.m_lblTimer.node.active = !0;
t.startCountDownBetting(t.m_nRemainWaiting);
}
});
};
e.prototype.showScore = function() {
this.imgBat2.active = !1;
this.SkeXucXac.node.active = !1;
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
this.m_imgResult.active = !1;
if (this.m_nLocationIDWin == r.TxMd5Const.BetGate.GATE_TAI) {
lngui.AudioManager.instance.playSfx(this.KetQua, 1);
this.m_imgEffectTai.node.active = !0;
} else if (this.m_nLocationIDWin == r.TxMd5Const.BetGate.GATE_XIU) {
lngui.AudioManager.instance.playSfx(this.KetQua, 1);
this.m_imgEffectXiu.node.active = !0;
}
null != this._callback && this._callback(r.TxMd5Const.RETURN_RESULT, this.m_nLocationIDWin);
} else {
this.setListenerNan(!0);
this.imgBat.active = !0;
this.m_nTimeNan = 12;
cc.director.getScheduler().schedule(this.waitHideNan, this, 1, null);
}
};
e.prototype.showScoreNan = function() {
this.imgBat2.active = !1;
this.SkeXucXac.node.active = !1;
this.m_imgDice1.node.active = !0;
this.m_imgDice2.node.active = !0;
this.m_imgDice3.node.active = !0;
this.m_imgResult.active = !1;
if (this.m_nLocationIDWin == r.TxMd5Const.BetGate.GATE_TAI) {
lngui.AudioManager.instance.playSfx(this.KetQua, 1);
this.m_imgEffectTai.node.active = !0;
} else if (this.m_nLocationIDWin == r.TxMd5Const.BetGate.GATE_XIU) {
lngui.AudioManager.instance.playSfx(this.KetQua, 1);
this.m_imgEffectXiu.node.active = !0;
}
null != this._callback && this._callback(r.TxMd5Const.RETURN_RESULT, this.m_nLocationIDWin);
};
e.prototype.setListenerNan = function(t) {
this.imgBgTimer2.zIndex = 1001;
if (t) {
this.m_imgNan.active = !0;
this.m_imgNan.zIndex = 1e3;
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
r.TxMd5Const.dataHistoryGame = t;
var e = t, i = e.length;
if (0 != i) {
i > 12 && (i = 12);
this.m_lblMessage.string = "";
this.m_historyPanel.active = !0;
this.m_historyPanel.removeAllChildren();
this.spNutDenActive;
for (var n = this.spNutDenPhien, o = (this.spNutTrangActive, this.spNutTrangPhien), a = 0; a < i; a++) {
var s = e[a].LocationIDWin, c = cc.instantiate(this.templecau);
this.resultcau = e[a].DiceSum;
c.active = !0;
var l = c.getComponent(cc.Sprite);
s == r.TxMd5Const.BetGate.GATE_TAI ? l.spriteFrame = n : l.spriteFrame = o;
this.m_historyPanel.addChild(c);
c.y = this.firstPosHis.y;
c.x = this.firstPosHis.x - a * (this.diceWith + 6);
c.active = !0;
c.width = 33;
c.height = 33;
c.name = e[a].GameSessionID.toString();
c.on(cc.Node.EventType.TOUCH_END, this.touchShowHistoryTurn, this, !0);
if (this.m_nGameStatus == r.TxMd5Const.GameStatus.RACING && 0 == a) {
c.runAction(cc.sequence(cc.scaleTo(.3, .8), cc.scaleTo(.3, 1.1)).repeatForever());
if (s == r.TxMd5Const.BetGate.GATE_TAI) {
c.getChildByName("label").getComponent(cc.Label).string = this.resultcau;
c.getChildByName("label").color = cc.color(255, 255, 255);
} else {
c.getChildByName("label").getComponent(cc.Label).string = this.resultcau;
c.getChildByName("label").color = cc.color(0, 0, 0);
}
}
}
}
}
};
e.prototype.touchShowHistoryTurn = function(t) {
r.TxMd5Const.diceNode.GameSessionID = parseInt(t.target.name);
lngui.UIPopupManager.instance.showPopupFromPrefab(this.HisTurn);
};
e.prototype.touchTai = function() {
lngui.AudioManager.instance.playSfx(this.Click, 1);
if (this.m_nGameStatus != r.TxMd5Const.GameStatus.WAITING) {
this.m_nBetGate = r.TxMd5Const.BetGate.GATE_TAI;
this.m_llBetValue = 0;
if (parseInt(this.ebInputBetTai.string) > 0) {
for (var t = this.ebInputBetTai.string.trim().split("."), e = "", i = 0; i < t.length; i++) e += t[i];
this.m_llBetValue = parseInt(e);
} else this.ebInputBetTai.string = "0";
this.cuoctai.node.active = !1;
this.cuocxiu.node.active = !0;
this.ebInputBetXiu.string = "";
this.showMenhGiaPanel(!0);
} else this.showMessage("Đợi ván mới");
};
e.prototype.touchXiu = function() {
lngui.AudioManager.instance.playSfx(this.Click, 1);
if (this.m_nGameStatus != r.TxMd5Const.GameStatus.WAITING) {
this.m_nBetGate = r.TxMd5Const.BetGate.GATE_XIU;
this.m_llBetValue = 0;
if (parseInt(this.ebInputBetXiu.string) > 0) {
for (var t = this.ebInputBetXiu.string.trim().split("."), e = "", i = 0; i < t.length; i++) e += t[i];
this.m_llBetValue = parseInt(e);
} else this.ebInputBetXiu.string = "0";
this.cuocxiu.node.active = !1;
this.cuoctai.node.active = !0;
this.ebInputBetTai.string = "";
this.showMenhGiaPanel(!0);
} else this.showMessage("Đợi ván mới");
};
e.prototype.showMessage = function(t) {
this.m_historyPanel.active = !0;
this.bordermsg.active = !0;
this.m_lblMessage.string = t;
this.m_lblMessage.node.getParent().opacity = 255;
this.m_lblMessage.node.getParent().zIndex = 1234;
this.m_lblMessage.node.getParent().stopAllActions();
var e = cc.fadeOut(3), i = cc.callFunc(this.showHistory, this);
this.m_lblMessage.node.getParent().runAction(cc.sequence(e, i));
};
e.prototype.showHistory = function() {
this.m_historyPanel.active = !0;
this.m_lblMessage.string = "";
};
e.prototype.setEventRank = function() {};
e.prototype.touchEvent = function() {
var t = lngui.EBundle_Name.LOBBY;
lngui.BundleManager.instance.getPrefabFromBundle("prefabs/Prefab_Event_BigBang", t, function(t) {
lngui.UIPopupManager.instance.showPopupFromPrefab(t);
});
};
e.prototype.touchcopy = function() {
lngui.PlatformInterface.copy(this.keyMD5);
};
e.prototype.touchHistoryTurn2 = function() {
r.TxMd5Const.diceNode.GameSessionID = parseInt(this.m_llGameSessionID) - 1;
lngui.UIPopupManager.instance.showPopupFromPrefab(this.HisTurn);
};
var i;
e._instance = null;
a([ h(cc.Sprite) ], e.prototype, "m_imgDice1", void 0);
a([ h(cc.Sprite) ], e.prototype, "m_imgDice2", void 0);
a([ h(cc.Sprite) ], e.prototype, "m_imgDice3", void 0);
a([ h(sp.Skeleton) ], e.prototype, "m_imgEffectTai", void 0);
a([ h(sp.Skeleton) ], e.prototype, "m_imgEffectXiu", void 0);
a([ h(cc.Sprite) ], e.prototype, "sprCircle", void 0);
a([ h(cc.Sprite) ], e.prototype, "imgHistoryFirst", void 0);
a([ h(cc.Sprite) ], e.prototype, "m_imgNanRoot", void 0);
a([ h(cc.SpriteFrame) ], e.prototype, "imgDices1", void 0);
a([ h(cc.SpriteFrame) ], e.prototype, "imgDices2", void 0);
a([ h(cc.SpriteFrame) ], e.prototype, "imgDices3", void 0);
a([ h(cc.SpriteFrame) ], e.prototype, "spNutDenActive", void 0);
a([ h(cc.SpriteFrame) ], e.prototype, "spNutDenPhien", void 0);
a([ h(cc.SpriteFrame) ], e.prototype, "spNutTrangActive", void 0);
a([ h(cc.SpriteFrame) ], e.prototype, "spNutTrangPhien", void 0);
a([ h(cc.SpriteFrame) ], e.prototype, "btn_Nan", void 0);
a([ h(cc.SpriteFrame) ], e.prototype, "btn_DungNan", void 0);
a([ h(cc.SpriteFrame) ], e.prototype, "bcoinSprite", void 0);
a([ h(cc.SpriteFrame) ], e.prototype, "spfBtnChatShow", void 0);
a([ h(cc.SpriteFrame) ], e.prototype, "spfBtnChatHide", void 0);
a([ h(cc.Node) ], e.prototype, "m_imgResult", void 0);
a([ h(cc.Node) ], e.prototype, "imgBgTimer2", void 0);
a([ h(cc.Node) ], e.prototype, "m_imgNan", void 0);
a([ h(cc.Node) ], e.prototype, "panelChen", void 0);
a([ h(cc.Node) ], e.prototype, "imgBat", void 0);
a([ h(cc.Node) ], e.prototype, "imgBat2", void 0);
a([ h(cc.Node) ], e.prototype, "panelNumberBig", void 0);
a([ h(cc.Node) ], e.prototype, "panelKeypad", void 0);
a([ h(cc.Node) ], e.prototype, "m_imgDayLose", void 0);
a([ h(cc.Node) ], e.prototype, "m_imgDayWin", void 0);
a([ h(cc.Node) ], e.prototype, "m_historyPanel", void 0);
a([ h(cc.Node) ], e.prototype, "btnKeyBroad", void 0);
a([ h(cc.Node) ], e.prototype, "m_panelTaxiu", void 0);
a([ h(cc.Node) ], e.prototype, "nodeChat", void 0);
a([ h(cc.Node) ], e.prototype, "bordermsg", void 0);
a([ h(cc.Node) ], e.prototype, "ketqua", void 0);
a([ h(cc.Node) ], e.prototype, "templecau", void 0);
a([ h(sp.Skeleton) ], e.prototype, "SkeXucXac", void 0);
a([ h(sp.Skeleton) ], e.prototype, "SkeJackpot", void 0);
a([ h(sp.Skeleton) ], e.prototype, "SkeConRong", void 0);
a([ h(cc.Label) ], e.prototype, "m_lblTurnID", void 0);
a([ h(cc.Label) ], e.prototype, "ebInputBetTai", void 0);
a([ h(cc.Label) ], e.prototype, "ebInputBetXiu", void 0);
a([ h(cc.Sprite) ], e.prototype, "cuocxiu", void 0);
a([ h(cc.Sprite) ], e.prototype, "cuoctai", void 0);
a([ h(cc.Label) ], e.prototype, "m_lblTimerWaitResult", void 0);
a([ h(cc.Label) ], e.prototype, "m_lblMessage", void 0);
a([ h(cc.Label) ], e.prototype, "m_lblUsersTai", void 0);
a([ h(cc.Label) ], e.prototype, "m_lblUsersXiu", void 0);
a([ h(cc.Label) ], e.prototype, "m_lblMoneyTai", void 0);
a([ h(cc.Label) ], e.prototype, "m_lblMoneyXiu", void 0);
a([ h(cc.Label) ], e.prototype, "m_lblJackpotFund", void 0);
a([ h(cc.Label) ], e.prototype, "m_lblBetedValueTai", void 0);
a([ h(cc.Label) ], e.prototype, "m_lblBetedValueXiu", void 0);
a([ h(cc.Label) ], e.prototype, "m_lblMoneyWin", void 0);
a([ h(cc.Label) ], e.prototype, "m_lblTimer", void 0);
a([ h(cc.Label) ], e.prototype, "lblMd5", void 0);
a([ h(cc.Button) ], e.prototype, "btnChonTai", void 0);
a([ h(cc.Button) ], e.prototype, "btnChonXiu", void 0);
a([ h(cc.Button) ], e.prototype, "btnSoKhac", void 0);
a([ h(cc.Button) ], e.prototype, "btnAccept", void 0);
a([ h(cc.Button) ], e.prototype, "btnNan", void 0);
a([ h(cc.Button) ], e.prototype, "btnCancel", void 0);
a([ h(cc.Button) ], e.prototype, "btnAllIn", void 0);
a([ h(cc.Button) ], e.prototype, "btnChat", void 0);
a([ h(cc.Prefab) ], e.prototype, "HisTurn", void 0);
a([ h(cc.AudioClip) ], e.prototype, "coin_drop", void 0);
a([ h(cc.AudioClip) ], e.prototype, "XucXac", void 0);
a([ h(cc.AudioClip) ], e.prototype, "Click", void 0);
a([ h(cc.AudioClip) ], e.prototype, "KetQua", void 0);
return i = a([ u ], e);
}(cc.Component);
i.default = p;
cc._RF.pop();
}, {
"./TxMd5.BatNanCtrl": "TxMd5.BatNanCtrl",
"./TxMd5.Const": "TxMd5.Const",
"./network/TxMd5.NetworkClient": "TxMd5.NetworkClient"
} ],
"TxMd5.NetworkClient": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "7f94dzb52VJuacE/EVy5385", "TxMd5.NetworkClient");
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
var s = t("../popup/TxMd5.History"), c = t("../popup/TxMd5.VinhDanh"), r = t("../TxMd5.Const"), l = t("../TxMd5.HistoryTurn"), u = t("../TxMd5.MainGame"), h = t("../popup/TxMd5.Jackpot"), p = cc._decorator, d = p.ccclass, m = (p.property, 
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
url: "https://txmd5." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
hub: "txhub",
ip: "http://18.138.207.162:9001/signalr/negotiate",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate
};
cc.systemEvent.off(r.TxMd5Const.ON_TAIXIU_SOCKET, this.onResponeData, this);
cc.systemEvent.on(r.TxMd5Const.ON_TAIXIU_SOCKET, this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect(r.TxMd5Const.ON_TAIXIU_SOCKET, t.url, t.hub, t.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
lngui.UIWaitingLayout.showWaiting();
};
e.prototype.onEnable = function() {
lngui.ZLog.log("=====================CONNECT WS TxMd5===============================");
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
if ("open" == t.s || "reconnect" == t.s || "1" == t.s) if (this.isConnect) this.sendSignalR("GetCurrentRoomsTaiXiu", [ 1 ]); else {
this.isConnect = !0;
this.connectSuccess();
this.sendSignalR("GetCurrentRoomsTaiXiu", [ 1 ]);
this.sendSignalR("GetEventRank", []);
}
if (t.R < 0) switch (t.R) {
case -207:
u.default.instance.showMessage("Đã hết thời gian đặt cửa");
break;

case -208:
u.default.instance.showMessage("Không thể đặt cả 2 cửa trong 1 phiên");
break;

case -212:
case -213:
u.default.instance.showMessage("Giá trị nhập không hợp lệ");
break;

case -232:
u.default.instance.showMessage("Định dạng dữ liệu lỗi");
break;

case -99:
u.default.instance.showMessage("Lỗi hệ thống");
break;

case -102:
u.default.instance.showMessage("Access Token không hợp lệ");
break;

case -51:
u.default.instance.showMessage("Bạn không đủ số dư");
break;

case -52:
u.default.instance.showMessage("Vui lòng bảo mật tài khoản trước khi cược");
break;

case -48:
u.default.instance.showMessage("Game đã bị khóa, vui lòng mở khóa để tiếp tục giao dịch");
break;

default:
u.default.instance.showMessage("Đặt cửa thất bại");
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
l.default.instance.showHistoryTurnTaiXiu(o);
break;

case "taiXiuAccountHistory":
s.default.instance.showAccountHistoryTaiXiu(o);
break;

case "taiXiuTopWinner":
c.default.instance.showTopAccountsTaiXiu(o);
break;

case "jackpotHistory":
h.default.instance.showTopJackpotTxMd5(o);
}
}
}
};
e.prototype.pingPong = function() {
this.sendSignalR("PingPong", []);
};
e.prototype.connectSuccess = function() {
lngui.ZLog.log("Connect Sucesss");
lngui.UIWaitingLayout.hideWaiting();
};
e.prototype.closeWS = function() {
cc.systemEvent.off(r.TxMd5Const.ON_TAIXIU_SOCKET, this.onResponeData, this);
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
return i = a([ d ], e);
}(cc.Component));
i.default = m;
cc._RF.pop();
}, {
"../TxMd5.Const": "TxMd5.Const",
"../TxMd5.HistoryTurn": "TxMd5.HistoryTurn",
"../TxMd5.MainGame": "TxMd5.MainGame",
"../popup/TxMd5.History": "TxMd5.History",
"../popup/TxMd5.Jackpot": "TxMd5.Jackpot",
"../popup/TxMd5.VinhDanh": "TxMd5.VinhDanh"
} ],
"TxMd5.SoiCau": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b48e0dmuNVLApvoFfFzdrKH", "TxMd5.SoiCau");
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
var s = t("./TxMd5.Const"), c = cc._decorator, r = c.ccclass, l = c.property, u = function(t) {
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
e.bongcauso = [];
e._arrSC1 = [];
e.pageViewSC = null;
e.decrementPhase2 = !1;
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
this.initData(s.TxMd5Const.dataHistoryGame);
};
e.prototype.initData = function(t) {
cc.log(t);
var e = {
3: this.bongcauso[0],
4: this.bongcauso[1],
5: this.bongcauso[2],
6: this.bongcauso[3],
7: this.bongcauso[4],
8: this.bongcauso[5],
9: this.bongcauso[6],
10: this.bongcauso[7],
11: this.bongcauso[8],
12: this.bongcauso[9],
13: this.bongcauso[10],
14: this.bongcauso[11],
15: this.bongcauso[12],
16: this.bongcauso[13],
17: this.bongcauso[14],
18: this.bongcauso[15]
};
this.pnlSC1.removeAllChildren();
this.pnlSC2.removeAllChildren();
this.pnlXXT.removeAllChildren();
this.pnlXX1.removeAllChildren();
this.pnlXX2.removeAllChildren();
this.pnlXX3.removeAllChildren();
var i = 0, n = 0, o = -1, a = 0, s = t[0].DiceSum;
for (var c in t) {
if (s > 10 && t[c].DiceSum < 11 || s < 11 && t[c].DiceSum > 10) {
s = t[c].DiceSum;
a++;
}
a <= 19 && this._arrSC1.push(t[c]);
}
o = -1;
a = 0;
s = this._arrSC1[this._arrSC1.length - 1].DiceSum;
for (var r = this._arrSC1.length - 1; r >= 0; r--) {
if (s > 10 && this._arrSC1[r].DiceSum < 11 || s < 11 && this._arrSC1[r].DiceSum > 10) {
s = this._arrSC1[r].DiceSum;
a++;
o = 0;
} else if (6 == ++o) {
o = 0;
a++;
}
if (a > 19) break;
var l = cc.instantiate(this.template);
l.position = new cc.Vec3(0, 0);
l.active = !0;
e[t[r].DiceSum] && (l.getComponent(cc.Sprite).spriteFrame = e[t[r].DiceSum]);
this._arrSC1[r].DiceSum > 10 ? i++ : n++;
0 == a ? l.setPosition(this.getPosforSC1(25, o)) : 1 == a ? l.setPosition(this.getPosforSC1(75, o)) : 2 == a ? l.setPosition(this.getPosforSC1(125, o)) : 3 == a ? l.setPosition(this.getPosforSC1(175, o)) : 4 == a ? l.setPosition(this.getPosforSC1(220, o)) : 5 == a ? l.setPosition(this.getPosforSC1(270, o)) : 6 == a ? l.setPosition(this.getPosforSC1(318, o)) : 7 == a ? l.setPosition(this.getPosforSC1(367, o)) : 8 == a ? l.setPosition(this.getPosforSC1(417, o)) : 9 == a ? l.setPosition(this.getPosforSC1(465, o)) : 10 == a ? l.setPosition(this.getPosforSC1(512, o)) : 11 == a ? l.setPosition(this.getPosforSC1(564, o)) : 12 == a ? l.setPosition(this.getPosforSC1(610, o)) : 13 == a ? l.setPosition(this.getPosforSC1(660, o)) : 14 == a ? l.setPosition(this.getPosforSC1(710, o)) : 15 == a ? l.setPosition(this.getPosforSC1(760, o)) : 16 == a ? l.setPosition(this.getPosforSC1(806, o)) : 17 == a ? l.setPosition(this.getPosforSC1(855, o)) : 18 == a ? l.setPosition(this.getPosforSC1(903, o)) : 19 == a && l.setPosition(this.getPosforSC1(953, o));
this.pnlSC1.addChild(l);
}
for (var u = 0, h = 0, p = 0, d = 0, m = t.length - 1; m >= 0; m--) {
var g = new cc.Node(), T = g.addComponent(cc.Sprite), f = null;
if (t[m].DiceSum > 10) {
f = 0 == m ? this.nutdenActive : this.nutdenIcon;
p++;
} else {
f = 0 == m ? this.nuttrangActive : this.nuttrangIcon;
d++;
}
f && (T.spriteFrame = f);
g.setPosition(this.getPosforSCmoi(h, u, this.decrementPhase2));
this.pnlSC2.addChild(g);
if (5 == ++u) {
u = 0;
h++;
0 == this.decrementPhase2 ? this.decrementPhase2 = !0 : this.decrementPhase2 = !1;
}
}
this.lbSc1Duoi.string = "Xỉu: " + n;
this.lbSc1Tren.string = "Tài: " + i;
this.lbSc2Duoi.string = "Xỉu: " + d;
this.lbSc2Tren.string = "Tài: " + p;
this.lb1.string = "#" + t[0].GameSessionID;
t[c].DiceSum > 10 ? this.lb2.string = "Tài (" + t[0].Dice1 + "-" + t[0].Dice2 + "-" + t[0].Dice3 + ")" : this.lb2.string = "Xỉu (" + t[0].Dice1 + "-" + t[0].Dice2 + "-" + t[0].Dice3 + ")";
for (var _ = t.length > 20 ? 20 : t.length, y = (a = 0, _ > 20 ? 20 : _); y >= 0; y--) {
var C = new cc.Node(), v = C.addComponent(cc.Sprite);
e[t[y].DiceSum] && (v.spriteFrame = e[t[y].DiceSum]);
C.setPosition(this.getPosforSC2(a, t[y].DiceSum));
this.pnlXXT.addChild(C, 2);
var b = new cc.Node();
b.addComponent(cc.Sprite).spriteFrame = this.ballYellow;
b.setPosition(this.getPosforSC3(a, t[y].Dice1));
this.pnlXX1.addChild(b, 2);
var M = new cc.Node();
M.addComponent(cc.Sprite).spriteFrame = this.ballRed;
M.setPosition(this.getPosforSC3(a, t[y].Dice2));
this.pnlXX2.addChild(M, 2);
var S = new cc.Node();
S.addComponent(cc.Sprite).spriteFrame = this.ballBlue;
S.setPosition(this.getPosforSC3(a, t[y].Dice3));
this.pnlXX3.addChild(S, 2);
if (20 == y) {
var N = this.drawLine(cc.v2(0, this.getPosforSC2(a, t[y].DiceSum).y), this.getPosforSC2(a, t[y].DiceSum), 4, cc.color(252, 249, 128));
this.pnlXXT.addChild(N, 1);
var x = this.drawLine(cc.v2(0, this.getPosforSC3(a, t[y].Dice1).y), this.getPosforSC3(a, t[y].Dice1), 4, cc.color(248, 58, 248));
this.pnlXX1.addChild(x, 1);
var B = this.drawLine(cc.v2(0, this.getPosforSC3(a, t[y].Dice2).y), this.getPosforSC3(a, t[y].Dice2), 4, cc.color(214, 46, 65));
this.pnlXX2.addChild(B, 1);
var D = this.drawLine(cc.v2(0, this.getPosforSC3(a, t[y].Dice3).y), this.getPosforSC3(a, t[y].Dice3), 4, cc.color(70, 255, 142));
this.pnlXX3.addChild(D, 1);
} else {
var I = this.drawLine(this.getPosforSC2(a - 1, t[y + 1].DiceSum), this.getPosforSC2(a, t[y].DiceSum), 4, cc.color(252, 249, 128));
this.pnlXXT.addChild(I, 1);
var E = this.drawLine(this.getPosforSC3(a - 1, t[y + 1].Dice1), this.getPosforSC3(a, t[y].Dice1), 4, cc.color(248, 58, 248));
this.pnlXX1.addChild(E, 1);
var X = this.drawLine(this.getPosforSC3(a - 1, t[y + 1].Dice2), this.getPosforSC3(a, t[y].Dice2), 4, cc.color(214, 46, 65));
this.pnlXX2.addChild(X, 1);
var A = this.drawLine(this.getPosforSC3(a - 1, t[y + 1].Dice3), this.getPosforSC3(a, t[y].Dice3), 4, cc.color(70, 255, 142));
this.pnlXX3.addChild(A, 1);
}
a++;
}
};
e.prototype.getPosforSC1 = function(t, e) {
var i = t, n = 207 - 37 * e;
return cc.v2(i, n);
};
e.prototype.getPosforSCmoi = function(t, e, i) {
var n = 25 + 51.7 * t;
if (0 == i) var o = 10 + 45 * e; else o = 190 - 45 * e;
return cc.v2(n, o);
};
e.prototype.getPosforSC2 = function(t, e) {
var i = 44 * t, n = 33 * (parseInt(e / 3) - 1) + e % 3 * 11;
return cc.v2(i, n);
};
e.prototype.getPosforSC3 = function(t, e) {
var i = 44 * t, n = 33 * (e - 1);
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
e.prototype.addSpriteToLine = function(t, e) {
var i = new cc.Node();
i.addComponent(cc.Sprite).spriteFrame = e;
i.setPosition(t.getPosition());
t.addChild(i);
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
a([ l(cc.SpriteFrame) ], e.prototype, "bongcauso", void 0);
a([ l(cc.PageView) ], e.prototype, "pageViewSC", void 0);
return a([ r ], e);
}(lngui.UIPopup);
i.default = u;
cc._RF.pop();
}, {
"./TxMd5.Const": "TxMd5.Const"
} ],
"TxMd5.VinhDanh": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "0a9f47grEhBgIW8t40dLLdO", "TxMd5.VinhDanh");
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
var s = t("../network/TxMd5.NetworkClient"), c = t("../TxMd5.Const"), r = cc._decorator, l = r.ccclass, u = r.property, h = new Date(), p = (h.getDate(), 
h.getMonth(), h.getFullYear(), function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.template = null;
e.content = null;
e.spfHuanChuong = [];
e.txtDate = null;
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
lngui.UIWaitingLayout.showWaiting();
s.default.instance.sendSignalR("GetTopAccounts", [ c.TxMd5Const.BetType.BET_GOLD, c.TxMd5Const.GameID.TAI_XIU, 20 ]);
};
e.prototype.showTopAccountsTaiXiu = function(t) {
if (t.length) {
t && lngui.UIWaitingLayout.hideWaiting();
for (var e = t.length, i = 0; i < e; i++) {
var n = t[i], o = n.UserName, a = n.PrizeValue, s = cc.instantiate(this.template);
s.position = new cc.Vec3(0, 0, 0);
if (0 == i) {
s.getChildByName("txtHang").active = !1;
s.getChildByName("Rank1_Mini").active = !0;
s.getChildByName("Rank2_Mini").active = !1;
s.getChildByName("txtTenTaiKhoan").color = cc.Color.RED;
} else if (1 == i) {
s.getChildByName("txtHang").active = !1;
s.getChildByName("Rank2_Mini").active = !0;
s.getChildByName("Rank1_Mini").active = !1;
s.getChildByName("txtTenTaiKhoan").color = cc.Color.YELLOW;
} else if (2 == i) {
s.getChildByName("txtHang").active = !1;
s.getChildByName("sprHuanChuong").getComponent(cc.Sprite).spriteFrame = this.spfHuanChuong[i];
s.getChildByName("txtTenTaiKhoan").color = cc.Color.GREEN;
} else {
s.getChildByName("Rank2_Mini").active = !1;
s.getChildByName("Rank1_Mini").active = !1;
s.getChildByName("txtHang").active = !0;
s.getChildByName("txtHang").getComponent(cc.Label).string = "" + (i + 1);
}
i > 2 && (s.getChildByName("txtTienThang").color = cc.Color.WHITE);
s.getChildByName("txtTenTaiKhoan").getComponent(cc.Label).string = o;
s.getChildByName("txtTienThang").getComponent(cc.Label).string = c.TxMd5Const.formatNumber(a);
s.getChildByName("liner").getComponent(cc.Sprite).spriteFrame = this.spfHuanChuong[3];
s.getChildByName("liner").active = !!(i % 2);
this.content.addChild(s);
}
}
};
var i;
e._instance = null;
a([ u(cc.Node) ], e.prototype, "template", void 0);
a([ u(cc.Node) ], e.prototype, "content", void 0);
a([ u([ cc.SpriteFrame ]) ], e.prototype, "spfHuanChuong", void 0);
a([ u(cc.Label) ], e.prototype, "txtDate", void 0);
return i = a([ l ], e);
}(cc.Component));
i.default = p;
cc._RF.pop();
}, {
"../TxMd5.Const": "TxMd5.Const",
"../network/TxMd5.NetworkClient": "TxMd5.NetworkClient"
} ],
"TxMd5.lbCountDown": [ function(t, e) {
"use strict";
cc._RF.push(e, "4b7a3EEcq5LvI8GqHqug+ro", "TxMd5.lbCountDown");
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
this.remaningTime < 4 ? (this.lbGameCooldown1.node.color = cc.Color.RED, this.lbGameCooldown2.node.color = cc.Color.RED) : (this.lbGameCooldown1.node.color = cc.Color.WHITE, 
this.lbGameCooldown2.node.color = cc.Color.WHITE);
},
update: function(t) {
if (null != this.remaningTime) {
var e = this.lbGameCooldown1.string, i = this.lbGameCooldown2.string;
this.remaningTime = Math.max(this.remaningTime - t, 0);
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
}, {}, [ "TxMd5.BatNanCtrl", "TxMd5.Chat", "TxMd5.Const", "TxMd5.HistoryTurn", "TxMd5.MainGame", "TxMd5.SoiCau", "TxMd5.AudioDefined", "TxMd5.lbCountDown", "TxMd5.Chat.NetworkClient", "TxMd5.NetworkClient", "TxMd5.Help", "TxMd5.History", "TxMd5.ItemHistory", "TxMd5.Jackpot", "TxMd5.VinhDanh" ]);