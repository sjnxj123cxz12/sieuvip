window.__require = function t(e, n, i) {
function o(s, r) {
if (!n[s]) {
if (!e[s]) {
var c = s.split("/");
c = c[c.length - 1];
if (!e[c]) {
var l = "function" == typeof __require && __require;
if (!r && l) return l(c, !0);
if (a) return a(c, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = c;
}
var u = n[s] = {
exports: {}
};
e[s][0].call(u.exports, function(t) {
return o(e[s][1][t] || t);
}, u, u.exports, t, e, n, i);
}
return n[s].exports;
}
for (var a = "function" == typeof __require && __require, s = 0; s < i.length; s++) o(i[s]);
return o;
}({
"DaGaLive.Chat.NetworkClient": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "48ec8+u8cdIu4iGzs5OCGNU", "DaGaLive.Chat.NetworkClient");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, i) {
var o, a = arguments.length, s = a < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var r = t.length - 1; r >= 0; r--) (o = t[r]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, n, s) : o(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("../DaGaLive.Chat"), r = t("../DaGaLive.Const"), c = cc._decorator, l = c.ccclass, u = (c.property, 
function(t) {
o(e, t);
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
cc.systemEvent.off(r.DaGaLiveConst.CHAT_DaGaLive_SOCKET_EVENT, this.onResponeData, this);
cc.systemEvent.on(r.DaGaLiveConst.CHAT_DaGaLive_SOCKET_EVENT, this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect(r.DaGaLiveConst.CHAT_DaGaLive_SOCKET_EVENT, t.url, t.hub, t.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
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
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, n = 0; n < e; ++n) {
var i = t.M[n];
if (i.A && null != i.A[0] && null != i.A[0]) {
var o = i.A[0];
switch (i.M) {
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
this.sendSignalR("RegisterChat", [ s.default.instance.chatChanel ]);
};
e.prototype.pingPong = function() {
this.sendSignalR("PingPong", []);
};
e.prototype.connectSuccess = function() {
lngui.ZLog.log("Connect Sucesss");
};
e.prototype.closeWS = function() {
cc.systemEvent.off(r.DaGaLiveConst.CHAT_DaGaLive_SOCKET_EVENT, this.onResponeData, this);
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
n.default = u;
cc._RF.pop();
}, {
"../DaGaLive.Chat": "DaGaLive.Chat",
"../DaGaLive.Const": "DaGaLive.Const"
} ],
"DaGaLive.Chat": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "aad8aEvB+hGJpIBRoX09w+w", "DaGaLive.Chat");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, i) {
var o, a = arguments.length, s = a < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var r = t.length - 1; r >= 0; r--) (o = t[r]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, n, s) : o(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("./network/DaGaLive.Chat.NetworkClient"), r = cc._decorator, c = r.ccclass, l = r.property, u = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.templateMessage = null;
e.listChat = null;
e.scrollListChat = null;
e.txtInputChat = null;
e.nameDealer = null;
return e;
}
n = e;
e.prototype.onLoad = function() {
this.chatChanel = "dagalive";
};
e.prototype.touchSendChat = function() {
if (this.txtInputChat.string.length) {
s.default.instance.sendSignalR("SendMessage", [ this.txtInputChat.string, this.chatChanel ]);
this.txtInputChat.string = "";
}
};
e.prototype.listLastMessages = function(t) {
if (0 != t.length) {
this.listChat.removeAllChildren();
if (t) for (var e = 0; e < t.length; e++) {
var n = t[e], i = n.n, o = n.c;
if (void 0 === i || void 0 === o) return;
if ("SYSTEM" != i && "SYSTEM" != o && i.length > 0 && o.length > 0) {
var a = o, s = cc.instantiate(this.templateMessage), r = n.n, c = i;
s.active = !0;
r = (r.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), c);
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
};
e.prototype.receiveMessage = function(t) {
var e = t.n, n = t.c;
if (void 0 !== e && void 0 !== n && "SYSTEM" != e && "SYSTEM" != n && e.length > 0 && n.length > 0) {
var i = n, o = cc.instantiate(this.templateMessage), a = t.n, s = e;
o.active = !0;
a = (a.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), s);
o.getComponent(cc.Label).string = a + ": " + i;
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
this.scrollListChat.scrollToBottom();
}
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
a([ l(cc.Node) ], e.prototype, "templateMessage", void 0);
a([ l(cc.Node) ], e.prototype, "listChat", void 0);
a([ l(cc.ScrollView) ], e.prototype, "scrollListChat", void 0);
a([ l(cc.EditBox) ], e.prototype, "txtInputChat", void 0);
return n = a([ c ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"./network/DaGaLive.Chat.NetworkClient": "DaGaLive.Chat.NetworkClient"
} ],
"DaGaLive.ChipMovent": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "93a830cjKRLnJNMTNZx0yb0", "DaGaLive.ChipMovent");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, i) {
var o, a = arguments.length, s = a < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var r = t.length - 1; r >= 0; r--) (o = t[r]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, n, s) : o(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, c = s.property, l = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.chipSprites = [];
e.chipPrefab = null;
e.chipContainer = null;
e.startPositionUserNode = null;
e.startPositionPlayerNode = null;
e.midPosNode = null;
e.pos1Node = null;
e.pos2Node = null;
e.pos3Node = null;
e.chips = [];
e.lastSpawnTime = 0;
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
return this._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
n._instance = this;
};
e.prototype.spawnChip = function(t) {
var e = cc.instantiate(this.chipPrefab);
e.parent = this.chipContainer;
var n = this.startPositionUserNode ? this.startPositionUserNode.position : cc.v3(0, 0, 0);
e.setPosition(n);
var i = e.getComponent(cc.Sprite);
i && this.chipSprites.length > 0 && (i.spriteFrame = this.chipSprites[Math.floor(Math.random() * this.chipSprites.length)]);
var o = this.getRandomPosition(t);
cc.tween(e).to(.5, {
position: o
}, {
easing: "sineOut"
}).start();
this.chips.push(e);
};
e.prototype.spawnChipPlayer = function(t, e) {
var n = cc.instantiate(this.chipPrefab);
n.parent = this.chipContainer;
var i = this.startPositionPlayerNode ? this.startPositionPlayerNode.position : cc.v3(0, 0, 0);
n.setPosition(i);
var o = n.getComponent(cc.Sprite);
o && this.chipSprites[e] && (o.spriteFrame = this.chipSprites[e]);
var a = this.getRandomPosition(t);
cc.tween(n).to(.5, {
position: a
}, {
easing: "sineOut"
}).start();
this.chips.push(n);
};
e.prototype.getMinMaxFromNode = function(t) {
if (!t) return {
min: cc.v3(-200, 100, 0),
max: cc.v3(200, 200, 0)
};
var e = t.position, n = t.getContentSize(), i = t.getAnchorPoint(), o = (.5 - i.x) * n.width, a = (.5 - i.y) * n.height, s = e.x - n.width / 2 + o, r = e.x + n.width / 2 + o, c = e.y - n.height / 2 + a, l = e.y + n.height / 2 + a;
return {
min: cc.v3(s, c, 0),
max: cc.v3(r, l, 0)
};
};
e.prototype.getRandomPosition = function(t) {
if (1 === t) {
var e = this.getMinMaxFromNode(this.pos1Node), n = e.min, i = e.max;
return cc.v3(this.getRandomRange(n.x, i.x), this.getRandomRange(n.y, i.y), 0);
}
if (2 === t) {
var o = this.getMinMaxFromNode(this.pos2Node);
n = o.min, i = o.max;
return cc.v3(this.getRandomRange(n.x, i.x), this.getRandomRange(n.y, i.y), 0);
}
if (3 === t) {
var a = this.getMinMaxFromNode(this.pos3Node);
n = a.min, i = a.max;
return cc.v3(this.getRandomRange(n.x, i.x), this.getRandomRange(n.y, i.y), 0);
}
};
e.prototype.getRandomRange = function(t, e) {
return Math.random() * (e - t) + t;
};
e.prototype.addChipsByCondition = function(t, e) {
var n = 10, i = 20;
switch (e) {
case 1:
n = 10;
i = 20;
break;

case 2:
n = 20;
i = 50;
break;

case 3:
n = 50;
i = 70;
break;

case 4:
n = 70;
i = 100;
break;

case 5:
n = 100;
i = 200;
}
var o = Math.floor(this.getRandomRange(n, i));
Math.floor(this.getRandomRange(n, i));
this.spawnChipsToArea(t, o);
};
e.prototype.spawnChipsToArea = function(t, e) {
for (var n = 0; n < e; n++) {
var i = cc.instantiate(this.chipPrefab);
i.parent = this.chipContainer;
var o = this.getRandomPosition(t);
i.setPosition(o);
var a = i.getComponent(cc.Sprite);
a && this.chipSprites.length > 0 && (a.spriteFrame = this.chipSprites[Math.floor(Math.random() * this.chipSprites.length)]);
this.chips.push(i);
}
};
e.prototype.hideAndCollectChips = function(t) {
var e = this, n = this.chips.length;
if (0 !== n) {
var i = 5 / n;
i = Math.min(i, .5);
var o = 0, a = this.getMinMaxFromNode(this.pos1Node), s = this.getMinMaxFromNode(this.pos2Node), r = this.getMinMaxFromNode(this.pos3Node), c = this.getMinMaxFromNode(this.midPosNode), l = this.startPositionUserNode ? this.startPositionUserNode.position : cc.v3(0, 0, 0);
this.chips = this.chips.filter(function(n) {
if (!n || !n.isValid) return !1;
var u = n.getPosition(), p = u.x >= a.min.x && u.x <= a.max.x && u.y >= a.min.y && u.y <= a.max.y, h = u.x >= s.min.x && u.x <= s.max.x && u.y >= s.min.y && u.y <= s.max.y, d = u.x >= r.min.x && u.x <= r.max.x && u.y >= r.min.y && u.y <= r.max.y, f = 0;
p ? f = 1 : h ? f = 2 : d && (f = 3);
if (f === t) {
n.destroy();
return !1;
}
var g = e.getRandomRange(c.min.x, c.max.x), v = e.getRandomRange(c.min.y, c.max.y), m = cc.v3(g, v, 0);
cc.tween(n).delay(o).to(.3, {
position: m
}, {
easing: "sineInOut"
}).to(.3, {
position: l
}, {
easing: "sineIn"
}).call(function() {
return n.destroy();
}).start();
o += i;
return !1;
});
}
};
var n;
e._instance = null;
a([ c([ cc.SpriteFrame ]) ], e.prototype, "chipSprites", void 0);
a([ c(cc.Prefab) ], e.prototype, "chipPrefab", void 0);
a([ c(cc.Node) ], e.prototype, "chipContainer", void 0);
a([ c(cc.Node) ], e.prototype, "startPositionUserNode", void 0);
a([ c(cc.Node) ], e.prototype, "startPositionPlayerNode", void 0);
a([ c(cc.Node) ], e.prototype, "midPosNode", void 0);
a([ c(cc.Node) ], e.prototype, "pos1Node", void 0);
a([ c(cc.Node) ], e.prototype, "pos2Node", void 0);
a([ c(cc.Node) ], e.prototype, "pos3Node", void 0);
return n = a([ r ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
"DaGaLive.Const": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "23908I9F9ZKlatsD0V0ioL/", "DaGaLive.Const");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DaGaLiveConst = void 0;
var i = function() {
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
var e = "", n = t < 0 ? 1 : 0;
e = (t = Math.abs(t)) >= 1e3 ? t.toFixed().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") : t.toString();
1 == n && (e = "-" + e);
return e;
};
t.formatNumberToKMB = function(t) {
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
return null == t || void 0 === t || "" === t ? "" : t.length > e ? t.substring(0, e) + "..." : t;
};
t.isValidString = function(t) {
return null != t && void 0 !== t && "" !== t.trim();
};
t.isNullOrEmpty = function(t) {
return null == t || void 0 === t || "" === t.trim();
};
t.getVideoUrl = function(e, n, i) {
var o = "https://vuivita.sb21.net/?link=";
return t.isValidString(e) ? o + e + "&streaming=true" : t.isValidString(n) ? o + n + "&streaming=true" : t.isValidString(i) ? o + i + "&streaming=true" : o + "https://wwnuwb.egress.sb0f8k.mediapackagev2.ap-southeast-1.amazonaws.com/out/v1/stg-cofi-channel-group-v2/stg-cofi-channel-v2/sb2-stg-cofi-cmaf-origin-endpoint/index-ll-hls.m3u8&streaming=true";
};
t.setVideoUrl = function(t) {
return "https://vuivita.sb21.net/?link=" + t + "&streaming=true";
};
t.getUrl = function(t, e) {
var n = t, i = cc.loader.getXMLHttpRequest();
i.onreadystatechange = function() {
4 === i.readyState && (200 == i.status ? e(JSON.parse(i.responseText), i.status) : i.responseText.length > 0 ? e(i.responseText, i.status) : e("error_code : " + i.status, null));
};
i.ontimeout = function() {
e("Hệ thống không phản hồi.", null);
};
i.timeout = 3e4;
i.open("GET", n, !0);
i.setRequestHeader("Content-Type", "application/json");
i.withCredentials = !0;
i.send();
};
t.post = function(t, e, n) {
var i = cc.loader.getXMLHttpRequest();
i.timeout = 3e4;
i.open("POST", t);
i.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
var o = JSON.stringify(e);
i.onreadystatechange = function() {
if (4 == i.readyState) if (i.status >= 200 && i.status < 400) {
var t = i.responseText, e = JSON.parse(t);
n && n(i.status, e);
} else n && n(i.status, null);
};
i.send(o);
};
t.getImage = function(t, e) {
cc.assetManager.loadRemote(t, {
ext: ".png"
}, function(t, n) {
if (t) console.error("Lỗi rồi đại ca ơi: ", t); else {
var i = new cc.SpriteFrame(n);
e.spriteFrame = i;
}
});
};
t.loadImageFromUrl = function(t) {
return new Promise(function(e, n) {
var i = new XMLHttpRequest();
i.open("GET", t, !0);
i.responseType = "arraybuffer";
i.onload = function() {
if (200 === this.status) {
for (var t = this.response, i = new Uint8Array(t), o = "", a = 0; a < i.byteLength; a++) o += String.fromCharCode(i[a]);
var s = "data:image/png;base64," + window.btoa(o);
e(s);
} else n(new Error("Failed to load image. Status: " + this.status));
};
i.onerror = function() {
n(new Error("Failed to load image from URL"));
};
i.send();
});
};
t.setSpriteFromBase64 = function(t, e) {
var n = new Image();
n.src = t;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var i = new cc.SpriteFrame(t);
e.spriteFrame = i;
};
};
t.waitUntilEndTime = function(t, e) {
var n = new Date(t).getTime() - Date.now();
n <= 0 ? e() : setTimeout(e, n);
};
t.chunkArray = function(t, e) {
for (var n = [], i = 0; i < t.length; i += e) n.push(t.slice(i, i + e));
return n;
};
t.MAX_KEY_VALUE = 8;
t.MAX_BET_TAI_XIU = 1e21;
t.MIN_BET = 10;
t.MAX_BET_PER_SESSION = 25e25;
t.RETURN_MONEY = 2;
t.diceNode = {
GameSessionID: 0
};
t.isLoading = !0;
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
t.urlVideo = "";
t.api = (e = "https://dagalive." + lngui.ConfigManager.instance.ConfigInfo.Api, 
{
negotiate: (n = function(t) {
return "" + e + t;
})("/signalr/negotiate"),
hub: "gamehub",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate,
getBigWinner: n("/api/cockfighting/GetBigWinner"),
accountHistory: n("/api/cockfighting/GetHistory"),
jackpotHistory: n("/api/cockfighting/GetJackpotHistory"),
soiCau: n("/api/cockfighting/GetSoiCau"),
groupUser: n("/api/cockfighting/GetPlayersNotInGame"),
getSessionDetail: function(t) {
return n("/api/cockfighting/GetSessionInfo?sessionId=" + t);
}
});
var e, n;
t.ON_DaGaLive_SOCKET = "OnDaGaLiveWebSocKet";
t.CHAT_DaGaLive_SOCKET_EVENT = "OnChatDaGaLiveWebSocKet";
t.GameStatus = {
BETTING: 1,
RESULT: 3,
PREPARE_NEW_SESSION: 0,
END_BETTING: 2
};
t.BetType = {
BET_GOLD: 1,
BET_BAC: 2
};
t.BetGate = {
TIE: 3,
RED: 1,
BLUE: 2,
NONE: -1
};
t.RETURN_RESULT = 1;
return t;
}();
n.DaGaLiveConst = i;
cc._RF.pop();
}, {} ],
"DaGaLive.Guide": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "2bf1eROFiVELYvXJFlkX8rh", "DaGaLive.Guide");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, i) {
var o, a = arguments.length, s = a < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var r = t.length - 1; r >= 0; r--) (o = t[r]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, n, s) : o(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, c = (s.property, t("../DaGaLive.MainGame")), l = function(t) {
o(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.close = function() {
c.default.instance.OpacityView();
};
return a([ r ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"../DaGaLive.MainGame": "DaGaLive.MainGame"
} ],
"DaGaLive.HistoryTurn": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "208eeeUD11EEpkbkmLhp5TL", "DaGaLive.HistoryTurn");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, i) {
var o, a = arguments.length, s = a < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var r = t.length - 1; r >= 0; r--) (o = t[r]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, n, s) : o(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("./network/DaGaLive.NetworkClient"), r = t("./DaGaLive.Const"), c = cc._decorator, l = c.ccclass, u = c.property, p = function(t) {
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
s.default.instance.sendSignalR("GetSessionResultHistory", [ r.DaGaLiveConst.diceNode.GameSessionID ]);
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
this.m_GameSessionID >= r.DaGaLiveConst.GameSessionID ? this.m_GameSessionID = r.DaGaLiveConst.GameSessionID - 1 : s.default.instance.sendSignalR("GetSessionResultHistory", [ this.m_GameSessionID ]);
};
e.prototype.touchBtnL = function() {
this.imgEffectTai.node.active = !1;
this.imgEffectXiu.node.active = !1;
this.m_GameSessionID--;
cc.log(this.m_GameSessionID);
this.m_GameSessionID < r.DaGaLiveConst.GameSessionID - 15 ? this.m_GameSessionID = r.DaGaLiveConst.GameSessionID - 15 : s.default.instance.sendSignalR("GetSessionResultHistory", [ this.m_GameSessionID ]);
};
e.prototype.setViewHistoryTurn = function() {
var t = 0, e = 0, n = 0, i = 0;
if (this.m_coinData.length) {
for (var o in this.m_coinData) if (1 == this.m_coinData[o].LocationID) {
e += this.m_coinData[o].TotalBetValue;
i += this.m_coinData[o].RefundValue;
this.m_dataHisoryTurnXiu.push(this.m_coinData[o]);
} else {
t += this.m_coinData[o].TotalBetValue;
n += this.m_coinData[o].RefundValue;
this.m_dataHisoryTurnTai.push(this.m_coinData[o]);
}
this.lbTotalBetTai.string = r.DaGaLiveConst.formatNumber(t);
this.lbTotalRefundTai.string = r.DaGaLiveConst.formatNumber(n);
this.lbTotalRefundXiu.string = r.DaGaLiveConst.formatNumber(i);
this.lbTotalBetXiu.string = r.DaGaLiveConst.formatNumber(e);
this.m_GameSessionID = this.m_coinData[0].GameSessionID;
this.txtSessionInfo.getComponent(cc.Label).string = "#" + this.m_GameSessionID;
var a = this.m_coinData[0].Result.split(",");
for (o = 0; o < 3; o++) this.XucXac[o].getComponent(cc.Sprite).spriteFrame = this.imgDices[parseInt(a[o]) - 1];
if (this.m_coinData[0].LocationWinID == r.DaGaLiveConst.BetGate.GATE_HOME) {
this.imgEffectTai.node.active = !0;
this.imgEffectTai.node.runAction(cc.rotateBy(.5, 360).repeatForever());
} else if (this.m_coinData[0].LocationWinID == r.DaGaLiveConst.BetGate.GATE_AWAY) {
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
var n;
n = 1 == t ? this.m_dataHisoryTurnTai[e] : this.m_dataHisoryTurnXiu[e];
var i = cc.instantiate(this.template);
i.position = new cc.Vec3(0, 0);
var o = n.BetTime.split("T");
o = o[1].split(".");
i.getChildByName("txtThoiGian").getComponent(cc.Label).string = o[0];
i.getChildByName("txtTenTaiKhoan").getComponent(cc.Label).string = n.AccountName;
i.getChildByName("txtTienDat").getComponent(cc.Label).string = r.DaGaLiveConst.formatNumber(n.TotalBetValue);
i.getChildByName("txtTraLai").getComponent(cc.Label).string = r.DaGaLiveConst.formatNumber(n.RefundValue);
i.getChildByName("line").getComponent(cc.Sprite).spriteFrame = null;
1 == t ? this.lvTaiContent.addChild(i) : this.lvXiuContent.addChild(i);
};
var n;
e._instance = null;
a([ u(cc.Button) ], e.prototype, "btnR", void 0);
a([ u(cc.Button) ], e.prototype, "btnL", void 0);
a([ u(cc.Label) ], e.prototype, "lbTotalBetTai", void 0);
a([ u(cc.Label) ], e.prototype, "lbTotalBetXiu", void 0);
a([ u(cc.Label) ], e.prototype, "lbTotalRefundTai", void 0);
a([ u(cc.Label) ], e.prototype, "lbTotalRefundXiu", void 0);
a([ u(cc.Label) ], e.prototype, "txtSessionInfo", void 0);
a([ u(cc.Label) ], e.prototype, "txtTotalDice", void 0);
a([ u([ cc.Sprite ]) ], e.prototype, "XucXac", void 0);
a([ u(cc.Sprite) ], e.prototype, "imgEffectTai", void 0);
a([ u(cc.Sprite) ], e.prototype, "imgEffectXiu", void 0);
a([ u([ cc.SpriteFrame ]) ], e.prototype, "imgDices", void 0);
a([ u(cc.Node) ], e.prototype, "lvTaiContent", void 0);
a([ u(cc.Node) ], e.prototype, "lvXiuContent", void 0);
a([ u(cc.Node) ], e.prototype, "template", void 0);
return n = a([ l ], e);
}(lngui.UIPopup);
n.default = p;
cc._RF.pop();
}, {
"./DaGaLive.Const": "DaGaLive.Const",
"./network/DaGaLive.NetworkClient": "DaGaLive.NetworkClient"
} ],
"DaGaLive.History": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "bd704EPquFGUaMsXukBW0R6", "DaGaLive.History");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, i) {
var o, a = arguments.length, s = a < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var r = t.length - 1; r >= 0; r--) (o = t[r]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, n, s) : o(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("../DaGaLive.Const"), r = cc._decorator, c = r.ccclass, l = r.property, u = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.template = null;
e.BtnNextAndPrevious = [];
e.totalPageTxt = null;
e.spfGateBet = [];
e.spfStt = [];
e.spfResult = [];
e.pageIndex = 0;
e.dataLsc = [];
e.totalPage = null;
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
e.prototype.onEnable = function() {
n._instance = this;
lngui.UIWaitingLayout.showWaiting();
this.getHistory();
};
e.prototype.getHistory = function() {
var t = this, e = s.DaGaLiveConst.api.accountHistory;
lngui.Https.get(e, function(e) {
if (e) {
lngui.UIWaitingLayout.hideWaiting();
var n = e.flatMap(function(t) {
return t.ListData;
});
t.dataLsc = s.DaGaLiveConst.chunkArray(n, 6);
t.totalPage = t.dataLsc.length;
t.pageIndex = 0;
t.content.removeAllChildren();
t.dataLsc.length > 0 && t.showAccountHistory(t.dataLsc[0]);
t.updatePageInfo();
t.checkBtn();
} else lngui.UIWaitingLayout.hideWaiting();
});
};
e.prototype.ClickNext = function() {
if (!(this.pageIndex >= this.totalPage - 1)) {
this.pageIndex++;
this.content.removeAllChildren();
this.showAccountHistory(this.dataLsc[this.pageIndex]);
this.updatePageInfo();
this.checkBtn();
}
};
e.prototype.ClicPrevious = function() {
if (!(this.pageIndex <= 0)) {
this.pageIndex--;
this.content.removeAllChildren();
this.showAccountHistory(this.dataLsc[this.pageIndex]);
this.updatePageInfo();
this.checkBtn();
}
};
e.prototype.checkBtn = function() {
this.BtnNextAndPrevious[0] && (this.BtnNextAndPrevious[0].active = this.pageIndex > 0);
this.BtnNextAndPrevious[1] && (this.BtnNextAndPrevious[1].active = this.pageIndex < this.totalPage - 1);
};
e.prototype.updatePageInfo = function() {
this.totalPageTxt && (this.totalPageTxt.string = "Trang: " + (this.pageIndex + 1) + "/" + this.totalPage);
};
e.prototype.showAccountHistory = function(t) {
if (t) for (var e = 0; e < t.length; e++) {
var n = t[e], i = n.CreateTime, o = n.GateID, a = parseInt(n.WinGates), r = n.Bet, c = n.Award, l = n.RateRed.toString(), u = n.RateBlue.toString(), p = n.RateTie.toString(), h = n.IsFinish, d = c - r, f = cc.instantiate(this.template);
f.active = !0;
f.position = new cc.Vec3(0, 0, 0);
if (i.length > 0) {
var g = s.DaGaLiveConst.formatDateTime2(i);
f.getChildByName("txtTime").getComponent(cc.Label).string = g;
}
if (d > 0) {
f.getChildByName("moneyWin").getComponent(cc.Label).string = "+" + s.DaGaLiveConst.formatNumberToKMB(d);
f.getChildByName("moneyWin").color = cc.Color.GREEN;
} else if (d < 0) {
f.getChildByName("moneyWin").getComponent(cc.Label).string = s.DaGaLiveConst.formatNumberToKMB(d);
f.getChildByName("moneyWin").color = cc.Color.RED;
}
if (h) {
f.getChildByName("stt").active = !0;
f.getChildByName("stt").getComponent(cc.Sprite).spriteFrame = d < 0 ? this.spfStt[0] : this.spfStt[1];
f.getChildByName("result").getComponent(cc.Sprite).spriteFrame = d < 0 ? this.spfResult[0] : this.spfResult[1];
f.getChildByName("gateBet").getComponent(cc.Sprite).spriteFrame = this.spfGateBet[o - 1];
a == s.DaGaLiveConst.BetGate.RED ? f.getChildByName("overlayBetRed").active = !1 : a == s.DaGaLiveConst.BetGate.BLUE && (f.getChildByName("overlayBetBlue").active = !1);
}
var v = o == s.DaGaLiveConst.BetGate.RED ? l : o == s.DaGaLiveConst.BetGate.BLUE ? u : p;
f.getChildByName("moneyBet").getComponent(cc.Label).string = s.DaGaLiveConst.formatNumberToKMB(r);
f.getChildByName("rateBet").getComponent(cc.Label).string = v;
this.content.addChild(f);
}
};
var n;
e._instance = null;
a([ l(cc.Node) ], e.prototype, "content", void 0);
a([ l(cc.Node) ], e.prototype, "template", void 0);
a([ l(cc.Node) ], e.prototype, "BtnNextAndPrevious", void 0);
a([ l(cc.Label) ], e.prototype, "totalPageTxt", void 0);
a([ l(cc.SpriteFrame) ], e.prototype, "spfGateBet", void 0);
a([ l(cc.SpriteFrame) ], e.prototype, "spfStt", void 0);
a([ l(cc.SpriteFrame) ], e.prototype, "spfResult", void 0);
return n = a([ c ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../DaGaLive.Const": "DaGaLive.Const"
} ],
"DaGaLive.Loading": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6b910tmVthCD6m455iCJE7W", "DaGaLive.Loading");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, i) {
var o, a = arguments.length, s = a < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var r = t.length - 1; r >= 0; r--) (o = t[r]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, n, s) : o(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("./DaGaLive.Const"), r = t("./DaGaLive.MainGame"), c = cc._decorator, l = c.ccclass, u = c.property, p = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.progress = null;
e.progresslabel = null;
e.count = 0;
e.isFull = !1;
e.speed = .3;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.update = function(t) {
var e = this;
if (this.progress.node.parent.active) {
if (this.progress.progress >= 1) {
if (!this.isFull) {
this.isFull = !0;
s.DaGaLiveConst.isLoading = !1;
this.scheduleOnce(function() {
e.progress.node.parent.active = !1;
r.default.instance.showLive();
}, .5);
}
return;
}
this.progress.progress += t * this.speed;
this.progresslabel && (this.progresslabel.string = Math.round(100 * this.progress.progress) + "%");
}
};
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateGold, this);
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateGold, this);
};
e.prototype.onUpdateGold = function(t) {
lngui.UserManager.instance.mainUserInfo.Money = t;
};
e.prototype.show = function(t) {
this.node.active = t;
return this.node.active;
};
a([ u(cc.ProgressBar) ], e.prototype, "progress", void 0);
a([ u(cc.Label) ], e.prototype, "progresslabel", void 0);
return a([ l ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {
"./DaGaLive.Const": "DaGaLive.Const",
"./DaGaLive.MainGame": "DaGaLive.MainGame"
} ],
"DaGaLive.MainGame": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b395caY0hhNp42YfEQH77EA", "DaGaLive.MainGame");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, i) {
var o, a = arguments.length, s = a < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var r = t.length - 1; r >= 0; r--) (o = t[r]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, n, s) : o(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("./network/DaGaLive.NetworkClient"), r = t("./DaGaLive.Const"), c = t("./DaGaLive.ChipMovent"), l = t("../../lobby/scripts/ChangeAvatar/ListAvatar"), u = t("./DaGaLive.VideoLive"), p = t("./DaGaLive.TopSession"), h = cc._decorator, d = h.ccclass, f = h.property, g = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.m_nGameStatus = -1;
e.m_nLocationIDWin = 0;
e._callback = null;
e.m_nBetType = 1;
e.isSpawnChip = !1;
e.isPopupOpen = !1;
e.ChipIntervalID = null;
e.indexChip = null;
e.isMenuOpen = !1;
e.isShowResult = !1;
e.isSpawnChipFrist = !1;
e.isArena = !0;
e.linkCam1 = "";
e.linkCam2 = "";
e.linkCamSpecial = "";
e.btnMenu = null;
e.nodeMenu = null;
e.bordermsg = null;
e.nodeViewLive = null;
e.nodeSelectChip = null;
e.nodeRedWin = null;
e.nodeBlueWin = null;
e.nodeTieWin = null;
e.EffectBet = [];
e.EffectWinMoney = [];
e.nodeStatus = [];
e.nodeLoading = null;
e.m_txtNickName = null;
e.m_txtMoney = null;
e.m_lblTurnID = null;
e.m_lblMessage = null;
e.m_lblUsersRed = null;
e.m_lblUsersBlue = null;
e.m_lblUsersTie = null;
e.m_lblMoneyRed = null;
e.m_lblMoneyBlue = null;
e.m_lblMoneyTie = null;
e.m_lblBetedValueRed = null;
e.m_lblBetedValueBlue = null;
e.m_lblBetedValueTie = null;
e.m_lblRateBetValueRed = null;
e.m_lblRateBetValueBlue = null;
e.m_lblRateBetValueTie = null;
e.m_lblMoneyWin = null;
e.nameRed = null;
e.nameBlue = null;
e.spfIconArea = [];
e.spfTextArea = [];
e.sprIconArea = null;
e.sprTextArea = null;
e.btnChoseCamera = [];
e.PrefabHistory = null;
e.PrefabSeasionHistory = null;
e.PrefabGuide = null;
e.SpritetAvatar = null;
e.Avatar = null;
return e;
}
n = e;
e.prototype.setBetLabel = function(t, e) {
if (t && t.node) {
t.string = e;
t.node.parent && (t.node.parent.active = "" !== e);
}
};
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
this.nodeLoading.active = !0;
this.ketQuaEnd = lngui.UserManager.instance.mainUserInfo.Money;
this.initDaGaLive();
};
e.prototype.initDaGaLive = function() {
this.SetAvatar();
this.defaultPositionNodeWin = this.EffectWinMoney[1].getPosition();
this.nodeViewLive.active = !1;
this.m_llBetValue = 1e3;
this.m_txtMoney.string = r.DaGaLiveConst.formatNumber(lngui.UserManager.instance.mainUserInfo.Money);
this.m_txtNickName.string = lngui.UserManager.instance.mainUserInfo.NickName;
this.bordermsg.active = !1;
this.m_lblTurnID.string = "";
this.m_lblUsersRed.string = "";
this.m_lblUsersBlue.string = "";
this.m_lblUsersTie.string = "";
this.m_lblMoneyRed.string = "";
this.m_lblMoneyBlue.string = "";
this.m_lblMoneyTie.string = "";
this.m_lblMessage.string = "";
this.setBetLabel(this.m_lblBetedValueRed, "");
this.setBetLabel(this.m_lblBetedValueBlue, "");
this.setBetLabel(this.m_lblBetedValueTie, "");
};
e.prototype.onTouchSelectValueBet = function(t, e) {
this.nodeSelectChip.children.forEach(function(t) {
t.getChildByName("Chip_Glow").active = !1;
t.setPosition(t.position.x, 0);
});
t.target.getChildByName("Chip_Glow").active = !0;
t.target.setPosition(t.target.position.x, 20);
this.m_llBetValue = parseInt(e);
var n = this.nodeSelectChip, i = t.target;
this.indexChip = n.children.indexOf(i);
};
e.prototype.resultOfAccount = function(t) {
var e, n = t.Balance;
this.ketQuaEnd = t.Balance;
e = t.Award;
this.setBalance(n);
this.showPrizeValue(e);
this.setBetLabel(this.m_lblBetedValueRed, "");
this.setBetLabel(this.m_lblBetedValueBlue, "");
this.setBetLabel(this.m_lblBetedValueTie, "");
};
e.prototype.showPrizeValue = function(t) {
var e = this, n = t;
if (t > 0) {
var i = "+" + r.DaGaLiveConst.formatNumber(parseInt(n));
this.EffectWinMoney[0].active = !0;
this.EffectWinMoney[1].active = !0;
this.m_lblMoneyWin.string = i;
this.m_lblMoneyWin.node.active = !0;
this.EffectWinMoney[1].setPosition(this.defaultPositionNodeWin);
this.EffectWinMoney[1].runAction(cc.moveBy(3, cc.v2(0, 45)));
setTimeout(function() {
e.EffectWinMoney[0].active = !1;
e.EffectWinMoney[1].active = !1;
e.EffectWinMoney[1].setPosition(e.defaultPositionNodeWin);
}, 7e3);
}
};
e.prototype.betOfAccount = function(t) {
if (t.length) {
lngui.UITextManager.showCenterNotification("Bạn đã đặt cược thành công");
var e = t[0], n = t[1];
if (n >= 0) {
lngui.UserManager.instance.mainUserInfo.Money = n;
lngui.GameCoreManager.instance.updateTotalGold(lngui.UserManager.instance.mainUserInfo.Money);
}
var i = e.BetSide, o = e.SumaryBet;
this.setBettedVal(i, o);
this.setBalance(t[1]);
}
};
e.prototype.setBettedVal = function(t, e) {
t == r.DaGaLiveConst.BetGate.RED ? this.setBetLabel(this.m_lblBetedValueRed, r.DaGaLiveConst.formatNumber(e)) : t == r.DaGaLiveConst.BetGate.BLUE ? this.setBetLabel(this.m_lblBetedValueBlue, r.DaGaLiveConst.formatNumber(e)) : t == r.DaGaLiveConst.BetGate.TIE && this.setBetLabel(this.m_lblBetedValueTie, r.DaGaLiveConst.formatNumber(e));
};
e.prototype.updateBetInfoFromServer = function(t) {
if (t) {
this.listBet = t;
var e = this;
t.forEach(function(t) {
e.betByaccount(t);
});
}
};
e.prototype.betByaccount = function(t) {
t.BetSide == r.DaGaLiveConst.BetGate.RED ? this.setBetLabel(this.m_lblBetedValueRed, r.DaGaLiveConst.formatNumber(t.BetValue)) : t.BetSide == r.DaGaLiveConst.BetGate.BLUE ? this.setBetLabel(this.m_lblBetedValueBlue, r.DaGaLiveConst.formatNumber(t.BetValue)) : t.BetSide == r.DaGaLiveConst.BetGate.TIE && this.setBetLabel(this.m_lblBetedValueTie, r.DaGaLiveConst.formatNumber(t.BetValue));
};
e.prototype.setBalance = function(t) {
if (!(t < 0)) {
lngui.UserManager.instance.mainUserInfo.Money = t;
lngui.GameCoreManager.instance.updateTotalGold(lngui.UserManager.instance.mainUserInfo.Money);
this.m_txtMoney.string = r.DaGaLiveConst.formatNumber(t);
}
};
e.prototype.GetCurrentRooms = function() {
s.default.instance.sendSignalR("EnterLobby", [ this.m_nBetType ]);
};
e.prototype.sessionInfo = function(t) {
var e, n, i;
if (null != t) {
var o = t, a = o.CountBetBlue, s = o.TotalBetBlue, c = o.CountBetRed, l = o.TotalBetRed, u = o.CountBetTie || 0, h = o.TotalBetTie || 0;
this.m_lblMoneyRed.string = r.DaGaLiveConst.formatNumber(l);
this.m_lblMoneyBlue.string = r.DaGaLiveConst.formatNumber(s);
this.m_lblMoneyTie.string = r.DaGaLiveConst.formatNumber(h);
this.m_lblUsersRed.string = r.DaGaLiveConst.formatNumber(c);
this.m_lblUsersBlue.string = r.DaGaLiveConst.formatNumber(a);
this.m_lblUsersTie.string = r.DaGaLiveConst.formatNumber(u);
this.m_lblRateBetValueBlue.string = "x" + (null !== (e = o.RateBlue) && void 0 !== e ? e : 0);
this.m_lblRateBetValueRed.string = "x" + (null !== (n = o.RateRed) && void 0 !== n ? n : 0);
this.m_lblRateBetValueTie.string = "x" + (null !== (i = o.RateTie) && void 0 !== i ? i : 0);
var d = o.TopBets;
p.default.instance.showTopUserBet(d);
var f = cc.sequence(cc.scaleTo(.1, 1.1, 1.1), cc.scaleTo(.1, 1, 1));
l !== this._totalBetRed && this.m_lblMoneyRed.node.runAction(f.clone());
s !== this._totalBetBlue && this.m_lblMoneyBlue.node.runAction(f.clone());
h !== this._totalBetTie && this.m_lblMoneyTie.node.runAction(f.clone());
c !== this._totalAccountRed && this.m_lblUsersRed.node.runAction(f.clone());
a !== this._totalAccountBlue && this.m_lblUsersBlue.node.runAction(f.clone());
u !== this._totalAccountTie && this.m_lblUsersTie.node.runAction(f.clone());
this._totalBetRed = l;
this._totalBetBlue = s;
this._totalBetTie = h;
this._totalAccountRed = c;
this._totalAccountBlue = a;
this._totalAccountTie = u;
r.DaGaLiveConst.GameSessionID = t.SessionID;
this.m_llGameSessionID = t.SessionID;
this.m_nGameStatus = t.Phrase;
this.m_lblTurnID.string = "#" + this.m_llGameSessionID;
}
};
e.prototype.startActionTimer = function(t) {
var e, n, i;
if (null != t) {
if (this.m_nGameStatus != t.Phrase) {
this.m_nGameStatus = t.Phrase;
u.default.instance.setUrlVideo();
}
var o = t, a = o.CountBetBlue, s = o.TotalBetBlue, l = o.CountBetRed, h = o.TotalBetRed, d = o.CountBetTie || 0, f = o.TotalBetTie || 0;
this.m_lblMoneyRed.string = r.DaGaLiveConst.formatNumber(h);
this.m_lblMoneyBlue.string = r.DaGaLiveConst.formatNumber(s);
this.m_lblMoneyTie.string = r.DaGaLiveConst.formatNumber(f);
this.m_lblUsersRed.string = r.DaGaLiveConst.formatNumber(l);
this.m_lblUsersBlue.string = r.DaGaLiveConst.formatNumber(a);
this.m_lblUsersTie.string = r.DaGaLiveConst.formatNumber(d);
this.m_lblRateBetValueBlue.string = "x" + (null !== (e = o.RateBlue) && void 0 !== e ? e : 0);
this.m_lblRateBetValueRed.string = "x" + (null !== (n = o.RateRed) && void 0 !== n ? n : 0);
this.m_lblRateBetValueTie.string = "x" + (null !== (i = o.RateTie) && void 0 !== i ? i : 0);
this.linkCam1 = o.Camera1Url;
this.linkCam2 = o.Camera2Url;
this.linkCamSpecial = o.CameraSpecialUrl;
this.isArena = o.IsArena;
var g = o.TopBets;
p.default.instance.showTopUserBet(g);
var v = cc.sequence(cc.scaleTo(.1, 1.1, 1.1), cc.scaleTo(.1, 1, 1));
h !== this._totalBetRed && this.m_lblMoneyRed.node.runAction(v.clone());
s !== this._totalBetBlue && this.m_lblMoneyBlue.node.runAction(v.clone());
f !== this._totalBetTie && this.m_lblMoneyTie.node.runAction(v.clone());
l !== this._totalAccountRed && this.m_lblUsersRed.node.runAction(v.clone());
a !== this._totalAccountBlue && this.m_lblUsersBlue.node.runAction(v.clone());
d !== this._totalAccountTie && this.m_lblUsersTie.node.runAction(v.clone());
this._totalBetRed = h;
this._totalBetBlue = s;
this._totalBetTie = f;
this._totalAccountRed = l;
this._totalAccountBlue = a;
this._totalAccountTie = d;
this.nameRed.string = r.DaGaLiveConst.cutStringWithEllipsis(t.RedName, 10).toUpperCase();
this.nameBlue.string = r.DaGaLiveConst.cutStringWithEllipsis(t.BlueName, 10).toUpperCase();
r.DaGaLiveConst.GameSessionID = t.SessionID;
this.m_llGameSessionID = t.SessionID;
this.m_lblTurnID.string = "#" + this.m_llGameSessionID;
this.checkArea(this.isArena);
this.checkCamera();
this.checkStatus();
if (this.m_nGameStatus == r.DaGaLiveConst.GameStatus.BETTING) {
this.nodeRedWin.active = !1;
this.nodeBlueWin.active = !1;
this.nodeTieWin.active = !1;
}
r.DaGaLiveConst.urlVideo = r.DaGaLiveConst.getVideoUrl(this.linkCam1, this.linkCam2, this.linkCamSpecial);
if (this.m_nGameStatus == r.DaGaLiveConst.GameStatus.RESULT) {
var m = o.Result.WinSide;
this.showResult(m);
}
if (0 == r.DaGaLiveConst.isLoading && 0 == this.isSpawnChipFrist && (this.m_nGameStatus == r.DaGaLiveConst.GameStatus.BETTING || this.m_nGameStatus == r.DaGaLiveConst.GameStatus.END_BETTING)) {
this.isSpawnChipFrist = !0;
var y = function(t) {
return t < 1e6 ? 0 : t < 1e7 ? 1 : t < 5e7 ? 2 : t < 1e8 ? 3 : t < 2e8 ? 4 : 5;
}, _ = y(s), C = y(h), b = y(f);
c.default.instance.addChipsByCondition(1, C);
c.default.instance.addChipsByCondition(2, _);
c.default.instance.addChipsByCondition(3, b);
}
}
};
e.prototype.showResult = function(t) {
if (t == r.DaGaLiveConst.BetGate.RED) {
this.nodeRedWin.active = !0;
c.default.instance.hideAndCollectChips(t);
} else if (t == r.DaGaLiveConst.BetGate.BLUE) {
this.nodeBlueWin.active = !0;
c.default.instance.hideAndCollectChips(t);
} else if (t == r.DaGaLiveConst.BetGate.TIE) {
this.nodeTieWin.active = !0;
c.default.instance.hideAndCollectChips(t);
}
null != this._callback && this._callback(r.DaGaLiveConst.RETURN_RESULT, this.m_nLocationIDWin);
};
e.prototype.checkArea = function(t) {
if (t) {
this.sprIconArea.spriteFrame = this.spfIconArea[0];
this.sprTextArea.spriteFrame = this.spfTextArea[0];
} else {
this.sprIconArea.spriteFrame = this.spfIconArea[1];
this.sprTextArea.spriteFrame = this.spfTextArea[1];
}
};
e.prototype.checkStatus = function() {
this.nodeStatus.forEach(function(t) {
t.active = !1;
});
if (this.m_nGameStatus == r.DaGaLiveConst.GameStatus.PREPARE_NEW_SESSION) this.nodeStatus[0].active = !0; else if (this.m_nGameStatus == r.DaGaLiveConst.GameStatus.BETTING) {
this.nodeStatus[1].active = !0;
var t = this.nodeStatus[1].getComponent(sp.Skeleton);
t.setAnimation(0, "nhancuoc_start", !1);
t.addAnimation(0, "nhancuoc_loop", !0);
} else this.m_nGameStatus != r.DaGaLiveConst.GameStatus.END_BETTING && this.m_nGameStatus != r.DaGaLiveConst.GameStatus.RESULT || (this.nodeStatus[2].active = !0);
};
e.prototype.checkCamera = function() {
if (this.isArena) if (this.linkCam1 && this.linkCam2) this.btnChoseCamera.forEach(function(t) {
t.interactable = !0;
}); else if (this.linkCam1 && !this.linkCam2) {
this.btnChoseCamera[0] && (this.btnChoseCamera[0].interactable = !0);
this.btnChoseCamera[1] && (this.btnChoseCamera[1].interactable = !1);
} else if (!this.linkCam1 && this.linkCam2) {
this.btnChoseCamera[0] && (this.btnChoseCamera[0].interactable = !1);
this.btnChoseCamera[1] && (this.btnChoseCamera[1].interactable = !0);
} else this.btnChoseCamera.forEach(function(t) {
t.interactable = !1;
}); else this.btnChoseCamera.forEach(function(t) {
t.interactable = !1;
});
};
e.prototype.clickChoseCam = function(t, e) {
if (1 == (e = parseInt(e)) && this.linkCam1) {
r.DaGaLiveConst.urlVideo = r.DaGaLiveConst.setVideoUrl(this.linkCam1);
u.default.instance.setUrlVideo();
} else if (2 == e && this.linkCam2) {
r.DaGaLiveConst.urlVideo = r.DaGaLiveConst.setVideoUrl(this.linkCam2);
u.default.instance.setUrlVideo();
}
};
e.prototype.touchRed = function() {
this.EffectBet[0].opacity = 255;
this.EffectBet[0].runAction(cc.fadeOut(1));
this.m_nBetGate = r.DaGaLiveConst.BetGate.RED;
this.SetBet();
};
e.prototype.touchBlue = function() {
this.EffectBet[1].opacity = 255;
this.EffectBet[1].runAction(cc.fadeOut(1));
this.m_nBetGate = r.DaGaLiveConst.BetGate.BLUE;
this.SetBet();
};
e.prototype.touchTie = function() {
this.EffectBet[2].opacity = 255;
this.EffectBet[2].runAction(cc.fadeOut(1));
this.m_nBetGate = r.DaGaLiveConst.BetGate.TIE;
this.SetBet();
};
e.prototype.SetBet = function() {
if (this.m_nGameStatus != r.DaGaLiveConst.GameStatus.RESULT && this.m_nGameStatus != r.DaGaLiveConst.GameStatus.PREPARE_NEW_SESSION && this.m_nGameStatus != r.DaGaLiveConst.GameStatus.END_BETTING) {
s.default.instance.sendSignalR("Bet", [ this.m_llBetValue, this.m_nBetGate ]);
c.default.instance.spawnChipPlayer(this.m_nBetGate, this.indexChip);
} else this.showMessage("Hết giờ đặt cửa");
};
e.prototype.showMessage = function(t) {
this.bordermsg.active = !0;
this.m_lblMessage.node.getParent().active = !0;
this.m_lblMessage.string = t;
this.m_lblMessage.node.getParent().opacity = 255;
this.m_lblMessage.node.getParent().stopAllActions();
var e = cc.fadeOut(3);
this.m_lblMessage.node.getParent().runAction(e);
};
e.prototype.showLive = function() {
this.nodeViewLive.active = !0;
u.default.instance.setUrlVideo();
};
e.prototype.onClickMenu = function() {
if (0 == this.isMenuOpen) {
this.nodeMenu.active = !0;
this.isMenuOpen = !0;
this.btnMenu.scaleX = -1;
} else {
this.nodeMenu.active = !1;
this.isMenuOpen = !1;
this.btnMenu.scaleX = 1;
}
};
e.prototype.clickBack = function() {
lngui.UIScreenManager.instance.popToRootScreen();
};
e.prototype.clickCopy = function() {
lngui.PlatformInterface.copy(this.Md5AndResultText);
};
e.prototype.clickHistory = function() {
lngui.UIPopupManager.instance.showPopupFromPrefab(this.PrefabHistory);
};
e.prototype.clickSeasionHistory = function() {
lngui.UIPopupManager.instance.showPopupFromPrefab(this.PrefabSeasionHistory);
};
e.prototype.clickGuide = function() {
lngui.UIPopupManager.instance.showPopupFromPrefab(this.PrefabGuide);
};
e.prototype.SetAvatar = function() {
var t = this.SpritetAvatar.ListSpriteAvatar;
this.Avatar.spriteFrame = t[lngui.UserManager.instance.mainUserInfo.Avatar];
};
e.prototype.onDestroy = function() {
r.DaGaLiveConst.isLoading = !0;
};
var n;
e._instance = null;
a([ f(cc.Node) ], e.prototype, "btnMenu", void 0);
a([ f(cc.Node) ], e.prototype, "nodeMenu", void 0);
a([ f(cc.Node) ], e.prototype, "bordermsg", void 0);
a([ f(cc.Node) ], e.prototype, "nodeViewLive", void 0);
a([ f(cc.Node) ], e.prototype, "nodeSelectChip", void 0);
a([ f(cc.Node) ], e.prototype, "nodeRedWin", void 0);
a([ f(cc.Node) ], e.prototype, "nodeBlueWin", void 0);
a([ f(cc.Node) ], e.prototype, "nodeTieWin", void 0);
a([ f(cc.Node) ], e.prototype, "EffectBet", void 0);
a([ f(cc.Node) ], e.prototype, "EffectWinMoney", void 0);
a([ f(cc.Node) ], e.prototype, "nodeStatus", void 0);
a([ f(cc.Node) ], e.prototype, "nodeLoading", void 0);
a([ f(cc.Label) ], e.prototype, "m_txtNickName", void 0);
a([ f(cc.Label) ], e.prototype, "m_txtMoney", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblTurnID", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblMessage", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblUsersRed", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblUsersBlue", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblUsersTie", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblMoneyRed", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblMoneyBlue", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblMoneyTie", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblBetedValueRed", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblBetedValueBlue", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblBetedValueTie", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblRateBetValueRed", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblRateBetValueBlue", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblRateBetValueTie", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblMoneyWin", void 0);
a([ f(cc.Label) ], e.prototype, "nameRed", void 0);
a([ f(cc.Label) ], e.prototype, "nameBlue", void 0);
a([ f(cc.SpriteFrame) ], e.prototype, "spfIconArea", void 0);
a([ f(cc.SpriteFrame) ], e.prototype, "spfTextArea", void 0);
a([ f(cc.Sprite) ], e.prototype, "sprIconArea", void 0);
a([ f(cc.Sprite) ], e.prototype, "sprTextArea", void 0);
a([ f(cc.Toggle) ], e.prototype, "btnChoseCamera", void 0);
a([ f(cc.Prefab) ], e.prototype, "PrefabHistory", void 0);
a([ f(cc.Prefab) ], e.prototype, "PrefabSeasionHistory", void 0);
a([ f(cc.Prefab) ], e.prototype, "PrefabGuide", void 0);
a([ f(l.default) ], e.prototype, "SpritetAvatar", void 0);
a([ f(cc.Sprite) ], e.prototype, "Avatar", void 0);
return n = a([ d ], e);
}(cc.Component);
n.default = g;
cc._RF.pop();
}, {
"../../lobby/scripts/ChangeAvatar/ListAvatar": void 0,
"./DaGaLive.ChipMovent": "DaGaLive.ChipMovent",
"./DaGaLive.Const": "DaGaLive.Const",
"./DaGaLive.TopSession": "DaGaLive.TopSession",
"./DaGaLive.VideoLive": "DaGaLive.VideoLive",
"./network/DaGaLive.NetworkClient": "DaGaLive.NetworkClient"
} ],
"DaGaLive.MoveBullet": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e2e0bBvqhBK9Zrga8DC3P/k", "DaGaLive.MoveBullet");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, i) {
var o, a = arguments.length, s = a < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var r = t.length - 1; r >= 0; r--) (o = t[r]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, n, s) : o(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, c = s.property, l = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.progressBar = null;
e.movingNode = null;
e.progressSpeed = .3;
return e;
}
e.prototype.start = function() {
this.progressBar.progress = 0;
};
e.prototype.update = function(t) {
if (this.progressBar.progress < 1) {
this.progressBar.progress += t * this.progressSpeed;
this.progressBar.progress > 1 && (this.progressBar.progress = 1);
var e = this.progressBar.progress * this.progressBar.node.width;
this.movingNode.setPosition(e, this.movingNode.y);
}
};
e.prototype.rotateForever = function(t) {
void 0 === t && (t = 1);
cc.tween(this.node).repeatForever(cc.tween().by(t, {
angle: -360
})).start();
};
a([ c(cc.ProgressBar) ], e.prototype, "progressBar", void 0);
a([ c(cc.Node) ], e.prototype, "movingNode", void 0);
a([ c ], e.prototype, "progressSpeed", void 0);
return a([ r ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
"DaGaLive.NetworkClient": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "21586fwC8FP8blN2mQpqQjk", "DaGaLive.NetworkClient");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, i) {
var o, a = arguments.length, s = a < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var r = t.length - 1; r >= 0; r--) (o = t[r]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, n, s) : o(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("../DaGaLive.ChipMovent"), r = t("../DaGaLive.Const"), c = t("../DaGaLive.MainGame"), l = t("../DaGaLive.SessionHistoryView"), u = cc._decorator, p = u.ccclass, h = (u.property, 
function(t) {
o(e, t);
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
console.log("Connect");
var t = {
url: r.DaGaLiveConst.api.negotiate,
hub: r.DaGaLiveConst.api.hub,
ip: "http://18.138.207.162:9001/signalr/negotiate",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate
};
cc.systemEvent.off(r.DaGaLiveConst.ON_DaGaLive_SOCKET, this.onResponeData, this);
cc.systemEvent.on(r.DaGaLiveConst.ON_DaGaLive_SOCKET, this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect(r.DaGaLiveConst.ON_DaGaLive_SOCKET, t.url, t.hub, t.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onEnable = function() {
lngui.ZLog.log("=====================CONNECT WS TX===============================");
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
if ("open" == t.s || "reconnect" == t.s || "1" == t.s) if (this.isConnect) {
this.sendSignalR("EnterLobby", [ 4, 1 ]);
this.sendSignalR("PlayNow", []);
} else {
this.isConnect = !0;
this.connectSuccess();
this.sendSignalR("EnterLobby", [ 4, 1 ]);
this.sendSignalR("PlayNow", []);
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
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, n = 0; n < e; ++n) {
var i = t.M[n];
if (i.A && null != i.A[0] && null != i.A[0]) {
var o = i.A[0], a = i.A;
switch (i.M) {
case r.DaGaLiveConst.MethodHubOnName.SESSION_INFO:
break;

case r.DaGaLiveConst.MethodHubOnName.START_ACTION_TIMER:
c.default.instance.startActionTimer(o);
break;

case r.DaGaLiveConst.MethodHubOnName.WIN_RESULT:
case "winResult":
c.default.instance.resultOfAccount(o);
break;

case r.DaGaLiveConst.MethodHubOnName.BET_SUCCESS:
case "betSuccess":
c.default.instance.betOfAccount(a);
break;

case r.DaGaLiveConst.MethodHubOnName.BET_OF_ACCOUNT:
case "betOfAccount":
c.default.instance.updateBetInfoFromServer(o);
break;

case r.DaGaLiveConst.MethodHubOnName.PLAYER_LEAVE:
break;

case r.DaGaLiveConst.MethodHubOnName.PLAYER_BET:
s.default.instance.spawnChip(a[2]);
break;

case r.DaGaLiveConst.MethodHubOnName.JOIN_GAME:
break;

case r.DaGaLiveConst.MethodHubOnName.GAME_HISTORY:
l.default.getInstance().updateGameHistoryUI(o);
break;

case r.DaGaLiveConst.MethodHubOnName.WIN_RESULT_VIP:
if (i.A.length > 0) try {
setTimeout(function() {}, 2500);
} catch (t) {}
break;

case r.DaGaLiveConst.MethodHubOnName.MESSAGE:
var u = i.A[0];
u && u.Description ? lngui.UIPopupManager.instance.showPopup(u.Description) : u && u.Message ? lngui.UIPopupManager.instance.showPopup(u.Message) : u && lngui.UITextManager.showCenterNotification(u);
break;

case r.DaGaLiveConst.MethodHubOnName.TOTAL_WIN_MONEY:
var p = i.A[0];
parseInt(p) > 0 && setTimeout(function() {}, 2e3);
break;

case r.DaGaLiveConst.MethodHubOnName.REJOIN:
var h = i.A[0];
h && h.length > 0 && h.map(function(t) {
0 != t.length && t.map(function(t) {
t.BetValue, t.BetSide;
});
});
break;

case r.DaGaLiveConst.MethodHubOnName.BET_SESSION:
i.A[0] && i.A[0].length > 0 && i.A[0].map(function(t) {
0 != t.length && t.map(function(t) {
t.BetValue, t.BetSide, t.AccountID;
});
});
break;

case r.DaGaLiveConst.MethodHubOnName.BET_USER:
i.A[2], lngui.UserManager.instance.mainUserInfo.AccountID;
break;

case r.DaGaLiveConst.MethodHubOnName.SUMMARY_PLAYER:
break;

case r.DaGaLiveConst.MethodHubOnName.VIP_PLAYERS:
var d = i.A[0];
d && d.length;
break;

case r.DaGaLiveConst.MethodHubOnName.OTHER_DEVICE:
case r.DaGaLiveConst.MethodHubOnName.RECEIVE_MESSAGE:
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
cc.systemEvent.off(r.DaGaLiveConst.ON_DaGaLive_SOCKET, this.onResponeData, this);
this.mSignalr.close();
lngui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
e.prototype.sendSignalR = function(t, e) {
lngui.ZLog.log("SendSocket=======>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
var n;
e._instance = null;
return n = a([ p ], e);
}(cc.Component));
n.default = h;
cc._RF.pop();
}, {
"../DaGaLive.ChipMovent": "DaGaLive.ChipMovent",
"../DaGaLive.Const": "DaGaLive.Const",
"../DaGaLive.MainGame": "DaGaLive.MainGame",
"../DaGaLive.SessionHistoryView": "DaGaLive.SessionHistoryView"
} ],
"DaGaLive.SeasionHistory": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "61106eU3JtORazydHyMlGdJ", "DaGaLive.SeasionHistory");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, i) {
var o, a = arguments.length, s = a < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var r = t.length - 1; r >= 0; r--) (o = t[r]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, n, s) : o(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("../DaGaLive.Const"), r = cc._decorator, c = r.ccclass, l = r.property, u = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.template = null;
e.BtnNextAndPrevious = [];
e.totalPageTxt = null;
e.spfArrow = [];
e.spfResult = [];
e.pageIndex = 1;
e.pageSize = 8;
e.totalPage = null;
e.dataSC = [];
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
e.prototype.onEnable = function() {
n._instance = this;
lngui.UIWaitingLayout.showWaiting();
this.getSeasionHistory();
};
e.prototype.getSeasionHistory = function() {
var t = this, e = s.DaGaLiveConst.api.soiCau;
lngui.Https.get(e, function(e) {
if (e) {
lngui.UIWaitingLayout.hideWaiting();
t.dataSC = s.DaGaLiveConst.chunkArray(e.Data, 6);
t.totalPage = t.dataSC.length;
t.pageIndex = 0;
t.content.removeAllChildren();
t.dataSC.length > 0 && t.showSeasionHistory(t.dataSC[0]);
t.updatePageInfo();
t.checkBtn();
} else lngui.UIWaitingLayout.hideWaiting();
});
};
e.prototype.ClickNext = function() {
if (!(this.pageIndex >= this.totalPage - 1)) {
this.pageIndex++;
this.content.removeAllChildren();
this.showSeasionHistory(this.dataSC[this.pageIndex]);
this.updatePageInfo();
this.checkBtn();
}
};
e.prototype.ClicPrevious = function() {
if (!(this.pageIndex <= 0)) {
this.pageIndex--;
this.content.removeAllChildren();
this.showSeasionHistory(this.dataSC[this.pageIndex]);
this.updatePageInfo();
this.checkBtn();
}
};
e.prototype.checkBtn = function() {
this.BtnNextAndPrevious[0] && (this.BtnNextAndPrevious[0].active = this.pageIndex > 0);
this.BtnNextAndPrevious[1] && (this.BtnNextAndPrevious[1].active = this.pageIndex < this.totalPage - 1);
};
e.prototype.updatePageInfo = function() {
this.totalPageTxt && (this.totalPageTxt.string = "Trang: " + (this.pageIndex + 1) + "/" + this.totalPage);
};
e.prototype.showSeasionHistory = function(t) {
if (t) for (var e = 0; e < t.length; e++) {
var n = t[e], i = n.CreatedDate, o = n.RedName, a = n.BlueName, r = parseInt(n.WinGates), c = cc.instantiate(this.template);
c.active = !0;
c.position = new cc.Vec3(0, 0, 0);
if (i.length > 0) {
var l = s.DaGaLiveConst.formatDateTime2(i);
c.getChildByName("txtTime").getComponent(cc.Label).string = l;
}
c.getChildByName("redName").getComponent(cc.Label).string = o;
c.getChildByName("blueName").getComponent(cc.Label).string = a;
c.getChildByName("arrowResult").getComponent(cc.Sprite).spriteFrame = this.spfArrow[r - 1];
c.getChildByName("result").getComponent(cc.Sprite).spriteFrame = this.spfResult[r - 1];
r == s.DaGaLiveConst.BetGate.RED ? c.getChildByName("overlayRed").active = !1 : r == s.DaGaLiveConst.BetGate.BLUE && (c.getChildByName("overlayBlue").active = !1);
this.content.addChild(c);
}
};
var n;
e._instance = null;
a([ l(cc.Node) ], e.prototype, "content", void 0);
a([ l(cc.Node) ], e.prototype, "template", void 0);
a([ l(cc.Node) ], e.prototype, "BtnNextAndPrevious", void 0);
a([ l(cc.Label) ], e.prototype, "totalPageTxt", void 0);
a([ l(cc.SpriteFrame) ], e.prototype, "spfArrow", void 0);
a([ l(cc.SpriteFrame) ], e.prototype, "spfResult", void 0);
return n = a([ c ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../DaGaLive.Const": "DaGaLive.Const"
} ],
"DaGaLive.SessionHistoryView": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9009axGf8RN7q04yR4dqL/m", "DaGaLive.SessionHistoryView");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, i) {
var o, a = arguments.length, s = a < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var r = t.length - 1; r >= 0; r--) (o = t[r]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, n, s) : o(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, c = s.property, l = t("./DaGaLive.Const"), u = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbCoundRed = null;
e.lbCoundBlue = null;
e.lbCoundTie = null;
e.nodeParent = null;
e.nodeRedTemp = null;
e.nodeBlueTemp = null;
e.nodeTieTemp = null;
e.nodeParent2 = null;
e.pageView = null;
e.gameHistory = [];
e.rootPosX = 143;
e.rootPosY = -64;
e.spaceX = 26;
e.spaceY = 26;
e.maxItemPerCol = 6;
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
var e = t.Data;
console.log(t);
var n = e.slice().reverse();
this.gameHistory = n;
this.lbCoundBlue.string = t.CountBlue + "";
this.lbCoundRed.string = t.CountRed + "";
this.lbCoundTie.string = t.CountTie + "";
this.resetDraw();
this.resetDraw2();
this.draw(e);
this.draw2(e);
}
};
e.prototype.draw = function(t) {
var e;
if (t && 0 !== t.length) for (var n = ((e = {})[l.DaGaLiveConst.BetGate.RED] = this.nodeRedTemp, 
e[l.DaGaLiveConst.BetGate.BLUE] = this.nodeBlueTemp, e[l.DaGaLiveConst.BetGate.TIE] = this.nodeTieTemp, 
e), i = Math.min(t.length, 72), o = 0, a = 0; a < i && o < 73; a++) {
var s = t[a];
if (s && null != s.WinGates) {
var r = null;
switch (parseInt(s.WinGates.toString())) {
case l.DaGaLiveConst.BetGate.RED:
r = n[l.DaGaLiveConst.BetGate.RED];
break;

case l.DaGaLiveConst.BetGate.BLUE:
r = n[l.DaGaLiveConst.BetGate.BLUE];
break;

case l.DaGaLiveConst.BetGate.TIE:
r = n[l.DaGaLiveConst.BetGate.TIE];
}
if (r) {
this.createNode(r, a);
o++;
}
}
}
};
e.prototype.createNode = function(t) {
t && this.nodeParent && (cc.instantiate(t).parent = this.nodeParent);
};
e.prototype.resetDraw = function() {
if (this.nodeParent) for (var t = this.nodeParent.children, e = t.length - 1; e >= 0; e--) this.nodeParent.removeChild(t[e]);
};
e.prototype.getGateType = function(t) {
if (!t || null == t.WinGates) return null;
switch (parseInt(t.WinGates.toString())) {
case l.DaGaLiveConst.BetGate.RED:
return "Red";

case l.DaGaLiveConst.BetGate.BLUE:
return "Blue";

case l.DaGaLiveConst.BetGate.TIE:
return "Tie";

default:
return null;
}
};
e.prototype.convertToMatrix = function(t) {
var e = this;
if (!t || 0 === t.length) return [];
var n = [], i = [], o = this.getGateType(t[0]);
t.forEach(function(t) {
var a = e.getGateType(t);
if (a) if (i.length === e.maxItemPerCol) {
n.push(i);
(i = []).push(t);
o = a;
} else if (a === o) i.push(t); else {
n.push(i);
o = a;
(i = []).push(t);
}
});
i.length > 0 && n.push(i);
return n;
};
e.prototype.draw2 = function(t) {
if (t && 0 !== t.length && this.nodeParent2) for (var e = this.convertToMatrix(t), n = Math.min(e.length, 12), i = 0; i < n; i++) this.drawCol(e[i], i);
};
e.prototype.drawCol = function(t, e) {
if (t && 0 !== t.length && this.nodeParent2) for (var n = this.rootPosX - e * this.spaceX, i = (this.maxItemPerCol - t.length) * this.spaceY + this.rootPosY, o = 0; o < t.length; o++) {
var a = cc.v2(n, i + this.spaceY * o);
this.createNode2(t[o], a);
}
};
e.prototype.createNode2 = function(t, e) {
var n;
if (t && this.nodeParent2) {
var i = null;
switch (parseInt((null === (n = t.WinGates) || void 0 === n ? void 0 : n.toString()) || "0")) {
case l.DaGaLiveConst.BetGate.RED:
i = this.nodeRedTemp;
break;

case l.DaGaLiveConst.BetGate.BLUE:
i = this.nodeBlueTemp;
break;

case l.DaGaLiveConst.BetGate.TIE:
i = this.nodeTieTemp;
}
if (i) {
var o = cc.instantiate(i);
if (o) {
o.parent = this.nodeParent2;
o.position = cc.v3(e.x, e.y, 0);
}
}
}
};
e.prototype.resetDraw2 = function() {
if (this.nodeParent2) for (var t = this.nodeParent2.children, e = t.length - 1; e >= 0; e--) this.nodeParent2.removeChild(t[e]);
};
e.prototype.onClickNext = function() {
var t = 0 === this.pageView.getCurrentPageIndex() ? 1 : 0;
this.pageView.scrollToPage(t, 0);
};
var n;
e._instance = null;
a([ c(cc.Label) ], e.prototype, "lbCoundRed", void 0);
a([ c(cc.Label) ], e.prototype, "lbCoundBlue", void 0);
a([ c(cc.Label) ], e.prototype, "lbCoundTie", void 0);
a([ c(cc.Node) ], e.prototype, "nodeParent", void 0);
a([ c(cc.Node) ], e.prototype, "nodeRedTemp", void 0);
a([ c(cc.Node) ], e.prototype, "nodeBlueTemp", void 0);
a([ c(cc.Node) ], e.prototype, "nodeTieTemp", void 0);
a([ c(cc.Node) ], e.prototype, "nodeParent2", void 0);
a([ c(cc.PageView) ], e.prototype, "pageView", void 0);
return n = a([ r ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"./DaGaLive.Const": "DaGaLive.Const"
} ],
"DaGaLive.TopSession": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "2d1d8m+IO1B5qd6zQchjS1P", "DaGaLive.TopSession");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, i) {
var o, a = arguments.length, s = a < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var r = t.length - 1; r >= 0; r--) (o = t[r]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, n, s) : o(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = t("./DaGaLive.Const"), r = cc._decorator, c = r.ccclass, l = r.property, u = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.contentTop = null;
e.template = null;
e.spfTop = [];
e._arrSC = [];
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
e.prototype.showTopUserBet = function(t) {
if (t && Array.isArray(t)) {
this.contentTop.removeAllChildren();
for (var e = 0; e < t.length; e++) {
var n = t[e], i = n.BetSide, o = n.AccountName, a = n.BetValue, r = cc.instantiate(this.template);
r.active = !0;
r.position = new cc.Vec3(0, 0, 0);
r.getChildByName("name").getComponent(cc.Label).string = s.DaGaLiveConst.cutStringWithEllipsis(o, 9);
r.getChildByName("money").getComponent(cc.Label).string = s.DaGaLiveConst.formatNumberToKMB(a);
r.getChildByName("nodeBetSide").children[i - 1].active = !0;
r.getChildByName("rank").getComponent(cc.Sprite).spriteFrame = this.spfTop[e];
9 == e && (r.getChildByName("liner").active = !1);
this.contentTop.addChild(r);
}
}
};
var n;
e._instance = null;
a([ l(cc.Node) ], e.prototype, "contentTop", void 0);
a([ l(cc.Node) ], e.prototype, "template", void 0);
a([ l(cc.SpriteFrame) ], e.prototype, "spfTop", void 0);
return n = a([ c ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"./DaGaLive.Const": "DaGaLive.Const"
} ],
"DaGaLive.VideoLive": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e3de0p1Dg9H44pN1vzBvHCm", "DaGaLive.VideoLive");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), a = this && this.__decorate || function(t, e, n, i) {
var o, a = arguments.length, s = a < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i); else for (var r = t.length - 1; r >= 0; r--) (o = t[r]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, n, s) : o(e, n)) || s);
return a > 3 && s && Object.defineProperty(e, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, c = s.property, l = t("./DaGaLive.Const"), u = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.webview = null;
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
return this._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
n._instance = this;
};
e.prototype.onDestroy = function() {
n._instance === this && (n._instance = null);
};
e.prototype.onEnable = function() {
this.webview.url = l.DaGaLiveConst.urlVideo;
};
e.prototype.setUrlVideo = function() {
"" != this.webview.url && this.webview.url == l.DaGaLiveConst.urlVideo || (this.webview.url = l.DaGaLiveConst.urlVideo);
};
var n;
e._instance = null;
a([ c(cc.WebView) ], e.prototype, "webview", void 0);
return n = a([ r ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"./DaGaLive.Const": "DaGaLive.Const"
} ]
}, {}, [ "DaGaLive.Chat", "DaGaLive.ChipMovent", "DaGaLive.Const", "DaGaLive.HistoryTurn", "DaGaLive.Loading", "DaGaLive.MainGame", "DaGaLive.MoveBullet", "DaGaLive.SessionHistoryView", "DaGaLive.TopSession", "DaGaLive.VideoLive", "DaGaLive.Chat.NetworkClient", "DaGaLive.NetworkClient", "DaGaLive.Guide", "DaGaLive.History", "DaGaLive.SeasionHistory" ]);