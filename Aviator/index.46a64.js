window.__require = function t(e, i, n) {
function o(c, a) {
if (!i[c]) {
if (!e[c]) {
var r = c.split("/");
r = r[r.length - 1];
if (!e[r]) {
var l = "function" == typeof __require && __require;
if (!a && l) return l(r, !0);
if (s) return s(r, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = r;
}
var h = i[c] = {
exports: {}
};
e[c][0].call(h.exports, function(t) {
return o(e[c][1][t] || t);
}, h, h.exports, t, e, i, n);
}
return i[c].exports;
}
for (var s = "function" == typeof __require && __require, c = 0; c < n.length; c++) o(n[c]);
return o;
}({
"Aviator.Chat.NetworkClient": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "74624nFFZRD37KgVl54uSTu", "Aviator.Chat.NetworkClient");
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
}), s = this && this.__decorate || function(t, e, i, n) {
var o, s = arguments.length, c = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, i, n); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (c = (s < 3 ? o(c) : s > 3 ? o(e, i, c) : o(e, i)) || c);
return s > 3 && c && Object.defineProperty(e, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = t("./AviatorChat"), a = cc._decorator, r = a.ccclass, l = (a.property, function(t) {
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
cc.systemEvent.off("OnChatAviatorSocketEvent", this.onResponeData, this);
cc.systemEvent.on("OnChatAviatorSocketEvent", this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect("OnChatAviatorSocketEvent", t.url, t.hub, t.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
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
c.default.instance.receiveMessage(o);
break;

case "listLastMessages":
c.default.instance.listLastMessages(o);
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
cc.systemEvent.off("OnChatAviatorSocketEvent", this.onResponeData, this);
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
var i;
e._instance = null;
return i = s([ r ], e);
}(cc.Component));
i.default = l;
cc._RF.pop();
}, {
"./AviatorChat": "AviatorChat"
} ],
AviatorBetItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "60365y2MYBMD6ira7RmKrzr", "AviatorBetItem");
(function() {
cc.AviatorBetItem = cc.Class({
extends: cc.Component,
properties: {
bgSprite: cc.Sprite,
lbNickName: cc.Label,
lbBet: cc.Label,
lbAward: cc.Label,
lbMultiplier: cc.Label
},
updateItem: function(t, e, i) {
this.bgSprite.enabled = e % 2 == 0;
var n, o = cc.Color.WHITE;
this.lbNickName.string = (n = t.Nickname).length > 8 ? n.substring(0, 5) + "..." : n;
if (i || t.IsWon) {
if (t.IsWon && t.Award > 0) {
this.lbNickName.node.color = o.fromHEX("#14FF00");
this.lbBet.node.color = o.fromHEX("#14FF00");
this.lbAward.node.color = o.fromHEX("#14FF00");
this.lbMultiplier.node.color = o.fromHEX("#14FF00");
this.lbBet.string = cc.Tool.getInstance().formatNumberK(t.BetValue);
this.lbAward.string = cc.Tool.getInstance().formatNumberK(t.Award);
this.lbMultiplier.string = t.Multiplier + "x";
} else if (i && !t.IsWon) {
this.lbNickName.node.color = o.fromHEX("#FF0000");
this.lbBet.node.color = o.fromHEX("#FF0000");
this.lbAward.node.color = o.fromHEX("#FF0000");
this.lbMultiplier.node.color = o.fromHEX("#FF0000");
this.lbBet.string = cc.Tool.getInstance().formatNumberK(t.BetValue);
this.lbAward.string = cc.Tool.getInstance().formatNumberK(t.Award);
this.lbMultiplier.string = "-";
}
} else {
this.lbBet.string = cc.Tool.getInstance().formatNumberK(t.BetValue);
this.lbAward.string = "-";
this.lbMultiplier.string = "-";
}
this.item = t;
this.itemID = e;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
AviatorBetListView: [ function(t, e) {
"use strict";
cc._RF.push(e, "2c686cCucVM57J04pvIifB/", "AviatorBetListView");
(function() {
cc.AviatorBetListView = cc.Class({
extends: cc.Component,
properties: {
itemTemplate: cc.Node,
scrollView: cc.ScrollView,
spawnCount: 0,
spacing: 0,
bufferZone: 0
},
onLoad: function() {
this.spawnCount = 15;
if (null !== this.scrollView) {
this.content = this.scrollView.content;
this.items = [];
this.updateTimer = 0;
this.updateInterval = .1;
this.lastContentPosY = 0;
this.rootContentY = this.content.y;
}
},
resetList: function() {
if (null !== this.scrollView) {
this.items = [];
this.scrollView.stopAutoScroll();
this.content = this.scrollView.content;
this.content.y = this.rootContentY;
for (var t = this.content.children, e = t.length - 1; e >= 0; e--) this.content.removeChild(t[e]);
}
},
getPositionInView: function(t) {
var e = t.parent.convertToWorldSpaceAR(t.position);
return this.scrollView.node.convertToNodeSpaceAR(e);
},
initialize: function(t, e) {
this.messages = t;
var i = this.messages.length;
this.content.height = i * (this.itemTemplate.height + this.spacing) + this.spacing;
for (var n = Math.min(this.spawnCount, i), o = 0; o < n; ++o) {
var s = cc.instantiate(this.itemTemplate);
this.content.addChild(s);
s.setPosition(0, -s.height * (.5 + o) - this.spacing * (o + 1));
s.getComponent(cc.AviatorBetItem).updateItem(this.messages[o], o, e);
this.items.push(s);
}
this.rootContentY = this.content.y;
},
update: function(t) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.items, i = this.bufferZone, n = this.scrollView.content.y < this.lastContentPosY, o = (this.itemTemplate.height + this.spacing) * e.length, s = 0; s < e.length; ++s) {
var c = this.getPositionInView(e[s]);
if (n) {
if (c.y < -i && e[s].y + o < 0) {
e[s].y = e[s].y + o;
var a = e[s].getComponent(cc.AviatorBetItem), r = a.itemID - e.length;
a.updateItem(this.messages[r], r, iscrashed);
}
} else if (c.y > i && e[s].y - o > -this.content.height) {
e[s].y = e[s].y - o;
r = (a = e[s].getComponent(cc.AviatorBetItem)).itemID + e.length;
a.updateItem(this.messages[r], r, iscrashed);
}
}
this.lastContentPosY = this.scrollView.content.y;
}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
AviatorBetView: [ function(t, e) {
"use strict";
cc._RF.push(e, "dd255sLZWhMsa1w+R75WsVW", "AviatorBetView");
(function() {
cc.AviatorBetView = cc.Class({
extends: cc.Component,
properties: {
lbBetValue: cc.Label,
lbStopMultiplier: cc.Label,
popupConfigAuto: cc.Node,
btnSteupAuto: cc.Button,
btnStopAuto: cc.Button,
btnBet: cc.Button,
btnBetLater: cc.Button,
btnCashout: cc.Button,
btnCancel: cc.Button,
btn5k: cc.Button,
btn50k: cc.Button,
btn500k: cc.Button,
btn5m: cc.Button,
btnAuto: cc.Button,
btnAutoStop: cc.Button,
sprBtnAuto: [ cc.SpriteFrame ],
sprStopAuto: [ cc.SpriteFrame ]
},
onLoad: function() {
this.controller = cc.AviatorController.getInstance();
this.controller.setAviatorBetView(this);
this.popupConfigAuto.active = !1;
this.isAutoBet = !1;
this.isAutoStop = !1;
this.isBetLater = !1;
this.hesodung = 1.01;
this.lbStopMultiplier.string = this.hesodung + "x";
cc.LoginController.getInstance().getLoginResponse();
this.curBalance = lngui.UserManager.instance.mainUserInfo.Money;
if (this.curBalance < 5e3) this.lbBetValue.string = "0"; else {
this.lbBetValue.string = "5000";
this.betValue = 5e3;
}
this.resetInput();
},
resetInput: function() {
this.isBeted = !1;
this.isCashout = !1;
this.btnBet.node.active = !0;
this.btnBet.interactable = !0;
this.btnBetLater.node.active = !1;
this.btnCashout.node.active = !1;
this.btnCancel.node.active = !1;
this.btnSteupAuto.node.active = !0;
this.btnStopAuto.node.active = !1;
this.btn5k.interactable = !0;
this.btn50k.interactable = !0;
this.btn500k.interactable = !0;
this.btn5m.interactable = !0;
},
updatePhrase: function(t) {
var e = t.Phrase, i = t.Multiplier;
switch (e) {
case cc.AviatorState.WAITING:
this.resetInput();
break;

case cc.AviatorState.BETTING:
if (this.isBeted && !this.isBetLater) {
this.btnBet.node.active = !0;
this.btnBet.interactable = !1;
this.btnBetLater.node.active = !1;
this.btnCashout.node.active = !1;
this.btnCancel.node.active = !1;
} else if (this.isBetLater && this.isBeted) {
this.btnBet.node.active = !1;
this.btnBetLater.node.active = !0;
this.btnBetLater.interactable = !0;
this.btnCashout.node.active = !1;
this.btnCancel.node.active = !1;
} else if (this.isAutoBet && !this.isBeted) {
this.sendRequestBet(this.betValue);
this.btnBet.node.active = !1;
this.btnBetLater.node.active = !1;
this.btnBetLater.interactable = !1;
this.btnCashout.node.active = !1;
this.btnCancel.node.active = !0;
this.btnCancel.interactable = !1;
} else if (this.isAutoBet || this.isBeted || !this.isBetLater) {
if (this.isBeted && this.isBetLater) {
this.btnBet.node.active = !1;
this.btnBetLater.node.active = !0;
this.btnBetLater.interactable = !1;
this.btnCashout.node.active = !1;
this.btnCancel.node.active = !1;
}
} else {
this.sendRequestBet(this.betValue);
this.isBetLater = !1;
}
break;

case cc.AviatorState.FLYING:
if (this.isBeted || this.isBetLater || this.isAutoBet) if (this.isCashout || !this.isBeted || this.isAutoStop) {
if (this.isCashout && !this.isBetLater) {
this.btnBet.node.active = !1;
this.btnBetLater.node.active = !0;
this.btnCashout.node.active = !1;
this.btnCancel.node.active = !1;
} else if (this.isCashout && this.isBetLater) {
this.btnBet.node.active = !1;
this.btnBetLater.node.active = !1;
this.btnCashout.node.active = !1;
this.btnCancel.node.active = !0;
} else if (!this.isCashout && this.isAutoStop && i >= this.hesodung) {
this.sendRequestCashout();
this.btnBet.node.active = !1;
this.btnBetLater.node.active = !1;
this.btnCashout.node.active = !1;
this.btnCancel.node.active = !1;
this.btnStopAuto.node.active = !0;
}
} else {
this.btnBet.node.active = !1;
this.btnBetLater.node.active = !1;
this.btnCashout.node.active = !0;
this.btnCancel.node.active = !1;
} else {
this.btnBet.node.active = !1;
this.btnBetLater.node.active = !0;
this.btnCashout.node.active = !1;
this.btnCancel.node.active = !1;
}
break;

case cc.AviatorState.CRASHED:
this.btnBet.node.active = !1;
this.btnBetLater.node.active = !0;
this.btnCashout.node.active = !1;
this.btnCancel.node.active = !1;
}
},
onClickAutoBet: function() {
if (this.isAutoBet) {
this.isAutoBet = !1;
this.btnAuto.getComponent(cc.Sprite).spriteFrame = this.sprBtnAuto[0];
} else {
this.isAutoBet = !0;
this.btnAuto.getComponent(cc.Sprite).spriteFrame = this.sprBtnAuto[1];
}
},
onClickAutoStop: function() {
if (this.isAutoStop) {
this.isAutoStop = !1;
this.btnAutoStop.getComponent(cc.Sprite).spriteFrame = this.sprStopAuto[0];
} else {
this.isAutoStop = !0;
this.btnAutoStop.getComponent(cc.Sprite).spriteFrame = this.sprStopAuto[1];
}
},
onClickSetupAuto: function() {
this.popupConfigAuto.active = !this.popupConfigAuto.active;
},
onClickStopAuto: function() {
this.isAutoBet = !1;
this.isAutoStop = !1;
this.btnStopAuto.node.active = !1;
this.btnSteupAuto.node.active = !0;
},
chooseBetValue: function(t, e) {
if (lngui.UserManager.instance.mainUserInfo.Money < e) {
this.betValue = lngui.UserManager.instance.mainUserInfo.Money;
this.lbBetValue.string = cc.Tool.getInstance().formatNumber(this.betValue);
} else {
this.betValue = parseInt(this.betValue);
this.betValue += parseInt(e);
this.lbBetValue.string = cc.Tool.getInstance().formatNumber(this.betValue);
}
},
betClicked: function() {
if (this.betValue > lngui.UserManager.instance.mainUserInfo.Money) {
this.betValue = lngui.UserManager.instance.mainUserInfo.Money;
this.lbBetValue.string = cc.Tool.getInstance().formatNumber(this.betValue);
lngui.UITextManager.showCenterNotification("Không đủ tiền");
} else this.betValue < 5e3 ? lngui.UITextManager.showCenterNotification("Cược tối thiểu 5000") : this.sendRequestBet(this.betValue);
},
cashoutClicked: function() {
this.sendRequestCashout();
},
betLaterClicked: function() {
this.btn5k.interactable = !1;
this.btn50k.interactable = !1;
this.btn500k.interactable = !1;
this.btn5m.interactable = !1;
this.btnBet.node.active = !1;
this.btnBetLater.node.active = !1;
this.btnCashout.node.active = !1;
this.btnCancel.node.active = !0;
this.isBetLater = !0;
},
cancelClicked: function() {
this.btn5k.interactable = !0;
this.btn50k.interactable = !0;
this.btn500k.interactable = !0;
this.btn5m.interactable = !0;
this.isBetLater = !1;
this.btnBet.node.active = !1;
this.btnBetLater.node.active = !0;
this.btnCashout.node.active = !1;
this.btnCancel.node.active = !1;
},
setMultiplier: function(t) {
this.hesodung = parseFloat(t);
this.lbStopMultiplier.string = t + "x";
},
sendRequestBet: function(t) {
return this.controller.sendRequestOnHub(cc.MethodHubName.BET, t);
},
sendRequestCashout: function() {
return this.controller.sendRequestOnHub(cc.MethodHubName.CASH_OUT);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
AviatorChat: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "49ea9xjmkVEVKSfFFW6WMOL", "AviatorChat");
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
}), s = this && this.__decorate || function(t, e, i, n) {
var o, s = arguments.length, c = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, i, n); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (c = (s < 3 ? o(c) : s > 3 ? o(e, i, c) : o(e, i)) || c);
return s > 3 && c && Object.defineProperty(e, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = t("./Aviator.Chat.NetworkClient"), a = cc._decorator, r = a.ccclass, l = a.property, h = function(t) {
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
e.prototype.onLoad = function() {};
e.prototype.touchSendChat = function() {
if (this.txtInputChat.string.length) {
c.default.instance.sendSignalR("SendMessage", [ this.txtInputChat.string, "taixiu", lngui.UserManager.instance.mainUserInfo.Level ]);
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
var s = o, c = cc.instantiate(this.templateMessage), a = i.n, r = n;
c.active = !0;
a = (a.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), r);
c.getComponent(cc.Label).string = a + ": " + s;
if (1 == t.IsVipTx) {
c.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
c.getChildByName("lb_nameVip").getComponent(cc.Label).string = a + ": ";
c.off(cc.Node.EventType.SIZE_CHANGED);
c.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (c.getContentSize().height - c.getChildByName("lb_nameVip").getContentSize().height) / 2;
c.getChildByName("lb_nameVip").setPosition(cc.v2(0, t));
});
} else {
c.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
c.getChildByName("lb_name").getComponent(cc.Label).string = a + ": ";
c.off(cc.Node.EventType.SIZE_CHANGED);
c.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (c.getContentSize().height - c.getChildByName("lb_name").getContentSize().height) / 2;
c.getChildByName("lb_name").setPosition(cc.v2(0, t));
});
}
this.listChat.addChild(c);
}
this.scrollListChat.scrollToBottom();
}
}
};
e.prototype.receiveMessage = function(t) {
var e = t.n, i = t.c;
if (void 0 !== e && void 0 !== i) {
if (e.length > 0 && i.length > 0) {
var n = i, o = cc.instantiate(this.templateMessage), s = t.n, c = e;
o.active = !0;
s = (s.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), c);
o.getComponent(cc.Label).string = s + ": " + n;
if (1 == t.IsVipTx) {
o.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
o.getChildByName("lb_nameVip").getComponent(cc.Label).string = s + ": ";
o.off(cc.Node.EventType.SIZE_CHANGED);
o.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (o.getContentSize().height - o.getChildByName("lb_nameVip").getContentSize().height) / 2;
o.getChildByName("lb_nameVip").setPosition(cc.v2(0, t));
});
} else {
o.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
o.getChildByName("lb_name").getComponent(cc.Label).string = s + ": ";
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
s([ l(cc.Node) ], e.prototype, "templateMessage", void 0);
s([ l(cc.Node) ], e.prototype, "listChat", void 0);
s([ l(cc.ScrollView) ], e.prototype, "scrollListChat", void 0);
s([ l(cc.EditBox) ], e.prototype, "txtInputChat", void 0);
return i = s([ r ], e);
}(cc.Component);
i.default = h;
cc._RF.pop();
}, {
"./Aviator.Chat.NetworkClient": "Aviator.Chat.NetworkClient"
} ],
AviatorController: [ function(t, e) {
"use strict";
cc._RF.push(e, "3b94aSFEOBE57lDkCfjVt/J", "AviatorController");
(function() {
var t;
t = function() {
var t;
function e() {}
t = void 0;
e.getInstance = function() {
void 0 === t && (t = this);
return t.prototype;
};
e.prototype.setAviatorView = function(t) {
return this.AviatorView = t;
};
e.prototype.sendRequestOnHub = function(t, e) {
if (this.AviatorView) return this.AviatorView.sendRequestOnHub(t, e);
};
e.prototype.setInfoView = function(t) {
return this.AviatorInfoView = t;
};
e.prototype.setAviatorPlayerView = function(t) {
return this.AviatorPlayersView = t;
};
e.prototype.setAviatorSoiCauView = function(t) {
return this.AviatorSoiCauView = t;
};
e.prototype.setAviatorGraphView = function(t) {
return this.AviatorGraphView = t;
};
e.prototype.setAviatorBetView = function(t) {
return this.AviatorBetView = t;
};
e.prototype.getCurrentState = function() {
return this.currentState;
};
e.prototype.updateInfo = function(t) {
return this.AviatorInfoView.updateInfo(t);
};
e.prototype.updateCashout = function(t, e) {
return this.AviatorInfoView.updateCashout(t, e);
};
e.prototype.updateBetList = function(t, e) {
return this.AviatorPlayersView.updateBetList(t, e);
};
e.prototype.resetBetList = function() {
return this.AviatorPlayersView.resetList();
};
e.prototype.initListSoiCau = function(t) {
return this.AviatorSoiCauView.initListSoiCau(t);
};
e.prototype.updateSoiCau = function(t) {
return this.AviatorGraphView.draw(t);
};
e.prototype.updateBetView = function(t) {
return this.AviatorBetView.updatePhrase(t);
};
e.prototype.setMultiplier = function(t) {
return this.AviatorBetView.setMultiplier(t);
};
e.prototype.setBeted = function(t) {
return this.AviatorBetView.isBeted = t;
};
e.prototype.setCashout = function(t) {
return this.AviatorBetView.isCashout = t;
};
return e;
}();
cc.AviatorController = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
AviatorCurPlayerBetItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "9796ePlL8NOko3KZVnW2Ebq", "AviatorCurPlayerBetItem");
(function() {
cc.AviatorCurPlayerBetItem = cc.Class({
extends: cc.Component,
properties: {
bgSprite: cc.Sprite,
lbNickName: cc.Label,
lbBet: cc.Label,
lbAward: cc.Label,
lbMultiplier: cc.Label
},
updateItem: function(t, e, i) {
this.bgSprite.enabled = e % 2 == 0;
var n, o = cc.Color.WHITE;
this.lbNickName.string = (n = t.Nickname).length > 8 ? n.substring(0, 5) + "..." : n;
if (i || t.IsWon) {
if (t.IsWon && t.Award > 0) {
this.lbNickName.node.color = o.fromHEX("#FFD600");
this.lbBet.node.color = o.fromHEX("#FFD600");
this.lbAward.node.color = o.fromHEX("#FFD600");
this.lbMultiplier.node.color = o.fromHEX("#FFD600");
this.lbBet.string = cc.Tool.getInstance().formatNumberK(t.BetValue);
this.lbAward.string = cc.Tool.getInstance().formatNumberK(t.Award);
this.lbMultiplier.string = t.Multiplier + "x";
} else if (i && !t.IsWon) {
this.lbNickName.node.color = o.fromHEX("#FF0000");
this.lbBet.node.color = o.fromHEX("#FF0000");
this.lbAward.node.color = o.fromHEX("#FF0000");
this.lbMultiplier.node.color = o.fromHEX("#FF0000");
this.lbBet.string = cc.Tool.getInstance().formatNumberK(t.BetValue);
this.lbAward.string = cc.Tool.getInstance().formatNumberK(t.Award);
this.lbMultiplier.string = "-";
}
} else {
this.lbBet.string = cc.Tool.getInstance().formatNumberK(t.BetValue);
this.lbAward.string = "-";
this.lbMultiplier.string = "-";
}
this.item = t;
this.itemID = e;
},
resetItem: function() {
this.bgSprite.enabled = !0;
this.lbNickName.string = "";
this.lbBet.string = "-";
this.lbAward.string = "-";
this.lbMultiplier.string = "-";
this.lbNickName.node.color = cc.Color.WHITE;
this.lbBet.node.color = cc.Color.WHITE;
this.lbAward.node.color = cc.Color.WHITE;
this.lbMultiplier.node.color = cc.Color.WHITE;
this.item = null;
this.itemID = null;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
AviatorGetHistoryJackpotCommand: [ function(t, e) {
"use strict";
cc._RF.push(e, "b485c85M+1BwrC3VdKn4pgn", "AviatorGetHistoryJackpotCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t) {
cc.PopupController.getInstance().showBusy();
return cc.ServerConnector.getInstance().sendRequest(cc.SubdomainName.AVIATOR, "api/Aviator/GetJackpotsHis", function(e) {
var i = JSON.parse(e);
cc.PopupController.getInstance().hideBusy();
return t.onBCGetHistoryResponse(i);
});
};
return t;
}();
cc.AviatorGetHistoryJackpotCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
AviatorGraph50View: [ function(t, e) {
"use strict";
cc._RF.push(e, "83224r/qXlMB4Rk9x39vdq1", "AviatorGraph50View");
cc.Class({
extends: cc.Component,
properties: {
itemGray: cc.Prefab,
itemRed: cc.Prefab,
itemBlue: cc.Prefab,
itemGreen: cc.Prefab,
itemYellow: cc.Prefab,
itemPurple: cc.Prefab,
itemOrange: cc.Prefab,
nodeParents: [ cc.Node ],
nodePanel: cc.Node,
nodeLayout: cc.Node,
nodeBlack: cc.Node
},
onLoad: function() {
this.controller = cc.AviatorController.getInstance();
this.controller.setAviatorGraphView(this);
this.nodeLayout.active = !1;
},
draw: function(t) {
this.resetDraw();
var e = this;
this.indexNodeParent = 0;
var i = [ 10, 10, 10, 10, 10 ], n = 0;
t.forEach(function(t) {
if (n >= i[e.indexNodeParent]) {
e.indexNodeParent++;
n = 0;
}
e.createNode(t);
n++;
});
},
createNode: function(t) {
var e;
(e = t.Multiplier < 2 ? cc.instantiate(this.itemGray) : t.Multiplier < 3 ? cc.instantiate(this.itemBlue) : t.Multiplier > 3 && t.Multiplier < 5 ? cc.instantiate(this.itemPurple) : t.Multiplier > 5 && t.Multiplier < 10 ? cc.instantiate(this.itemGreen) : t.Multiplier > 10 && t.Multiplier < 50 ? cc.instantiate(this.itemOrange) : t.Multiplier > 50 && t.Multiplier < 200 ? cc.instantiate(this.itemYellow) : cc.instantiate(this.itemRed)).parent = this.nodeParents[this.indexNodeParent];
var i = e.getChildByName("value").getComponent(cc.Label);
i && (i.string = t.Multiplier + "x");
},
resetDraw: function() {
this.nodeParents.forEach(function(t) {
t.removeAllChildren();
});
},
openPanel: function() {
var t = this;
this.nodeBlack.active = !0;
this.nodePanel.active = !0;
this.nodePanel.height = 0;
cc.tween(this.nodePanel).to(.2, {
height: 359
}).call(function() {
t.nodeLayout.active = !0;
}).start();
},
closePanel: function() {
var t = this;
this.nodeBlack.active = !1;
this.nodeLayout.active = !1;
cc.tween(this.nodePanel).to(.2, {
height: 0
}).call(function() {
t.nodePanel.active = !1;
}).start();
}
});
cc._RF.pop();
}, {} ],
AviatorHelpView: [ function(t, e) {
"use strict";
cc._RF.push(e, "7bca3u8EUNHCqImhiZW1n44", "AviatorHelpView");
(function() {
cc.AviatorHelpView = cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
},
onEnable: function() {
this.animation.play("openPopup");
},
closeClicked: function() {
this.animation.play("closePopup");
var t = this;
cc.director.getScheduler().schedule(function() {
t.animation.stop();
t.closeFinished();
}, this, 1, 0, .12, !1);
},
closeFinished: function() {
cc.AviatorPopupController.getInstance().destroyHelpView();
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
AviatorHistoryCommand: [ function(t, e) {
"use strict";
cc._RF.push(e, "a301eFyMaBKU671x40hW+Kh", "AviatorHistoryCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t) {
var e = cc.SubdomainName.AVIATOR;
return cc.ServerConnector.getInstance().sendRequest(e, "api/Aviator/GetHistory?top=50", function(e) {
var i = JSON.parse(e);
return t.onGetHistoryResponse(i);
});
};
return t;
}();
cc.AviatorHistoryCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
AviatorHistoryItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "c0297PmflhJmbGFKvu7pmQl", "AviatorHistoryItem");
(function() {
cc.AviatorHistoryItem = cc.Class({
extends: cc.Component,
properties: {
sprite: cc.Sprite,
lbSession: cc.Label,
lbTime: cc.Label,
lbBet: cc.Label,
lbWin: cc.Label,
lbBalance: cc.Label,
lbDetail: cc.Label
},
updateItem: function(t, e) {
var i = cc.Color.WHITE;
this.sprite.enabled = e % 2 != 0;
this.lbSession.string = "#" + t.SessionID;
this.lbTime.string = cc.Tool.getInstance().convertUTCTime(t.CreateTime);
this.lbBet.string = cc.Tool.getInstance().formatNumber(t.Bet);
this.lbBalance.string = cc.Tool.getInstance().formatNumber(t.Balance);
if (1 === t.Multiplier) {
this.lbWin.node.color = i.fromHEX("#FFFFFF");
this.lbWin.string = "-";
this.lbDetail.string = "Hệ số ngừng bay: -\nPhiên: #" + t.SessionID;
} else if (0 !== t.Award || t.IsWin) if (t.Jackpot > 0) {
this.lbWin.node.color = i.fromHEX("#14FF00");
this.lbWin.string = "+" + cc.Tool.getInstance().formatNumber(t.Award) + "\nJackpot: " + cc.Tool.getInstance().formatNumber(t.Jackpot);
this.lbDetail.string = "Hệ số ngừng bay: " + t.Multiplier + "\nPhiên: #" + t.SessionID;
} else {
this.lbWin.node.color = i.fromHEX("#14FF00");
this.lbWin.string = "+" + cc.Tool.getInstance().formatNumber(t.Award);
this.lbDetail.string = "Hệ số ngừng bay: " + t.Multiplier + "\nPhiên: #" + t.SessionID;
} else {
this.lbWin.node.color = i.fromHEX("#FF0000");
this.lbWin.string = "-" + cc.Tool.getInstance().formatNumber(t.Bet);
this.lbDetail.string = "Hệ số ngừng bay: -\nPhiên: #" + t.SessionID;
}
this.item = t;
this.itemID = e;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
AviatorHistoryListView: [ function(t, e) {
"use strict";
cc._RF.push(e, "33c481csNBPRZO1swkdBRCR", "AviatorHistoryListView");
(function() {
cc.AviatorHistoryListView = cc.Class({
extends: cc.Component,
properties: {
itemTemplate: cc.Node,
scrollView: cc.ScrollView,
spawnCount: 0,
spacing: 0,
bufferZone: 0
},
onLoad: function() {
this.spawnCount = 15;
if (null !== this.scrollView) {
this.content = this.scrollView.content;
this.items = [];
this.updateTimer = 0;
this.updateInterval = .1;
this.lastContentPosY = 0;
this.rootContentY = this.content.y;
}
},
initialize: function(t) {
this.messages = t;
var e = this.messages.length;
this.content.height = e * (this.itemTemplate.height + this.spacing) + this.spacing;
for (var i = Math.min(this.spawnCount, e), n = 0; n < i; ++n) {
var o = cc.instantiate(this.itemTemplate);
this.content.addChild(o);
o.setPosition(0, -o.height * (.5 + n) - this.spacing * (n + 1));
o.getComponent(cc.AviatorHistoryItem).updateItem(this.messages[n], n);
this.items.push(o);
}
this.rootContentY = this.content.y;
},
update: function(t) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.items, i = this.bufferZone, n = this.scrollView.content.y < this.lastContentPosY, o = (this.itemTemplate.height + this.spacing) * e.length, s = 0; s < e.length; ++s) {
var c = this.getPositionInView(e[s]);
if (n) {
if (c.y < -i && e[s].y + o < 0) {
e[s].y = e[s].y + o;
var a = e[s].getComponent(cc.AviatorHistoryItem), r = a.itemID - e.length;
a.updateItem(this.messages[r], r);
}
} else if (c.y > i && e[s].y - o > -this.content.height) {
e[s].y = e[s].y - o;
r = (a = e[s].getComponent(cc.AviatorHistoryItem)).itemID + e.length;
a.updateItem(this.messages[r], r);
}
}
this.lastContentPosY = this.scrollView.content.y;
}
},
resetList: function() {
if (null !== this.scrollView) {
this.items = [];
this.scrollView.stopAutoScroll();
this.content = this.scrollView.content;
this.content.y = this.rootContentY;
for (var t = this.content.children, e = t.length - 1; e >= 0; e--) this.content.removeChild(t[e]);
}
},
getPositionInView: function(t) {
var e = t.parent.convertToWorldSpaceAR(t.position);
return this.scrollView.node.convertToNodeSpaceAR(e);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
AviatorHistoryView: [ function(t, e) {
"use strict";
cc._RF.push(e, "02cc214p1NP94D8c0HDH8vX", "AviatorHistoryView");
(function() {
cc.AviatorHistoryView = cc.Class({
extends: cc.Component,
properties: {
historyListView: cc.AviatorHistoryListView
},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
this.node.zIndex = 99;
},
onEnable: function() {
var t = this;
cc.director.getScheduler().schedule(function() {
t.getHistory();
}, this, 1, 0, .2, !1);
this.animation.play("openPopup");
},
getHistory: function() {
new cc.AviatorHistoryCommand().execute(this);
},
onGetHistoryResponse: function(t) {
var e = t;
if (null !== e && e.length > 0) {
this.historyListView.resetList();
this.historyListView.initialize(e);
}
},
closeClicked: function() {
this.historyListView.resetList();
this.animation.play("closePopup");
var t = this;
cc.director.getScheduler().schedule(function() {
t.animation.stop();
cc.AviatorPopupController.getInstance().destroyHistoryView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
AviatorInfoView: [ function(t, e) {
"use strict";
cc._RF.push(e, "4878bH+0M5A4IENKsaOXkNT", "AviatorInfoView");
(function() {
cc.AviatorInfoView = cc.Class({
extends: cc.Component,
properties: {
lbSessionId: cc.Label,
lbJackpot: cc.AviatorLabelIncrement,
lbMultiplier: cc.Label,
lbTimer: cc.Label,
lbTotalBet: cc.AviatorLabelIncrement,
lbTotalUser: cc.AviatorLabelIncrement,
popupStart: cc.Node,
nodeAirCraft: cc.Node,
aircraft: sp.Skeleton,
attackcraft: sp.Skeleton,
lazeFire: sp.Skeleton,
chartMask: cc.Node,
chartSpr: cc.Node,
parachute: cc.Prefab,
parachute1: cc.Prefab
},
onLoad: function() {
this.controller = cc.AviatorController.getInstance();
this.controller.setInfoView(this);
this.initPositions();
this.setupRandomLazer();
this.flying = !1;
this.crashed = !1;
this.lazeFire.node.active = !1;
this.incrementMultiplier = null;
},
setupRandomLazer: function() {
var t = this, e = 4e3 * Math.random() + 1e3;
this.schedule(function() {
!t.crashed && t.flying && t.fireLazer();
}, e / 1e3, cc.macro.REPEAT_FOREVER);
},
fireLazer: function() {
var t = this;
if (!this.crashed) {
this.lazeFire.node.active = !0;
this.aircraft.setAnimation(0, "ne", !1);
this.scheduleOnce(function() {
t.lazeFire.node.active = !1;
t.crashed || t.aircraft.setAnimation(0, "speed", !0);
}, .5);
}
},
onEnable: function() {},
onDestroy: function() {
this.controller.setInfoView(null);
},
initPositions: function() {
this.nodeAirCraft.position = cc.v2(-509, -143);
this.chartMaskWidth = 567;
this.chartMask.width = 0;
this.chartMask.height = 230;
this.chartSpr.height = 230;
this.chartMask.active = !1;
},
resetAircraft: function() {
cc.Tween.stopAllByTarget(this.aircraft.node);
cc.Tween.stopAllByTarget(this.nodeAirCraft);
cc.Tween.stopAllByTarget(this.chartMask);
cc.Tween.stopAllByTarget(this.chartSpr);
this.nodeAirCraft.position = cc.v2(-509, -143);
this.chartMask.width = 0;
this.chartMask.height = 230;
this.chartSpr.height = 230;
this.chartMask.active = !1;
this.flying = !1;
this.crashed = !1;
this.lazeFire.node.position = cc.v2(-254, 110);
this.attackcraft.node.position = cc.v2(483, 226);
},
flyAlongChart: function() {
var t = this;
this.resetAircraft();
this.flying = !0;
this.chartMask.width = 0;
this.chartMask.active = !0;
cc.tween(this.nodeAirCraft).bezierTo(2.5, cc.v2(-509, -143), cc.v2(-310, -115), cc.v2(-280, -90)).bezierTo(2.5, cc.v2(-170, -50), cc.v2(-60, 20), cc.v2(20, 83)).call(function() {
t.upDownEffect();
}).start();
cc.tween(this.chartMask).to(5, {
width: this.chartMaskWidth
}).start();
},
upDownEffect: function() {
var t = this;
cc.tween(this.nodeAirCraft).repeatForever(cc.tween().by(1, {
position: cc.v2(0, 30)
}).by(1, {
position: cc.v2(0, -30)
})).start();
cc.tween(this.chartMask).repeatForever(cc.tween().call(function() {
t.chartMask.height = t.nodeAirCraft.position.y + 150;
}).delay(.1)).start();
cc.tween(this.chartSpr).repeatForever(cc.tween().call(function() {
t.chartSpr.height = t.nodeAirCraft.position.y + 150;
}).delay(.1)).start();
},
updateInfo: function(t) {
var e = t.Elapsed;
switch (t.Phrase) {
case cc.AviatorState.WAITING:
this.lbMultiplier.node.active = !1;
this.lazeFire.node.active = !1;
this.chartMask.active = !1;
this.resetAircraft();
this.controller.resetBetList();
break;

case cc.AviatorState.BETTING:
this.popupStart.active = !0;
this.lbTimer.string = e;
this.lbTotalBet.tweenValueto(t.TotalBet);
this.lbTotalUser.tweenValueto(t.TotalPlayer);
this.lazeFire.node.active = !1;
this.chartMask.active = !1;
this.nodeAirCraft.active = !0;
this.aircraft.setAnimation(0, "idle", !0);
break;

case cc.AviatorState.FLYING:
this.popupStart.active = !1;
this.lbMultiplier.node.active = !0;
this.nodeAirCraft.active = !0;
this.aircraft.setAnimation(0, "speed", !0);
this.chartMask.active = !0;
if (!this.flying) {
this.flyAlongChart();
this.updateMultiplier(t.Multiplier);
}
break;

case cc.AviatorState.CRASHED:
if (!this.crashed) {
this.handleCrash();
this.stopMultiplier();
}
}
this.lastTime = e;
this.currentState = t.Phrase;
this.lbSessionId.string = "#" + t.SessionID;
this.lbJackpot.tweenValueto(t.Jackpot);
},
handleCrash: function() {
this.fireLazer();
this.crashed = !0;
this.flying = !1;
this.chartMask.active = !1;
var t = this.nodeAirCraft.position;
this.lazeFire.node.position = cc.v2(-254, t.y);
this.attackcraft.node.position = cc.v2(483, t.y + 110);
this.aircraft.setAnimation(0, "no", !1);
},
updateCashout: function(t, e) {
var i, n = t === lngui.UserManager.instance.mainUserInfo.AccountID;
i = n ? cc.instantiate(this.parachute1) : cc.instantiate(this.parachute);
this.nodeAirCraft.addChild(i);
var o = i.getChildByName("value").getComponent(cc.Label);
o && (o.string = cc.Tool.getInstance().formatNumberK(e));
cc.tween(i).to(3, {
position: cc.v2(-200, -180)
}).call(function() {
i.destroy();
}).start();
},
updateMultiplier: function(t) {
var e = this;
this.lbMultiplier.string = t.toFixed(2) + "x";
this.incrementMultiplier = cc.tween(this.lbMultiplier).repeatForever(cc.tween().call(function() {
var t = parseFloat(e.lbMultiplier.string.replace("x", ""));
e.lbMultiplier.string = (t + .01).toFixed(2) + "x";
}).delay(.1)).start();
},
stopMultiplier: function() {
if (this.incrementMultiplier) {
this.incrementMultiplier.stop();
this.incrementMultiplier = null;
}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
AviatorJpHistoryItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "452c73JHD9FaIJAsPv/Ln0K", "AviatorJpHistoryItem");
cc.AviatorJpHistoryItem = cc.Class({
extends: cc.Component,
properties: {
line: cc.Node,
lblSession: cc.Label,
lblTime: cc.Label,
lblJackpot: cc.Label,
vinhDanh: cc.Node,
btnMore: cc.Button
},
updateItem: function(t) {
console.log(t);
this.lblSession.string = "#" + t.session;
this.lblTime.string = cc.Tool.getInstance().convertUTCTime(t.time);
this.lblJackpot.string = "" + cc.Tool.getInstance().formatNumber(t.jackpot);
this.btnMore.node.off("click");
this.btnMore.node.active = !0;
this.btnMore.node.on("click", function() {
this.btnMore.node.active = !1;
for (var e = 0; e < t.vinhDanh.length || e < this.vinhDanh.childrenCount; e++) {
var i = this.vinhDanh.children[e];
this.node.height = 60 * t.vinhDanh.length;
if (e < t.vinhDanh.length) {
var n = t.vinhDanh[e];
i && "1" != i.name || ((i = cc.instantiate(this.vinhDanh.children[0])).parent = this.vinhDanh);
i.active = !0;
i.getChildByName("lblNickname").getComponent(cc.Label).string = n.nickname;
i.getChildByName("lblCoin").getComponent(cc.Label).string = cc.Tool.getInstance().formatNumberK(n.coin);
} else i && (i.active = !1);
}
}.bind(this));
for (var e = 0; e < t.vinhDanh.length || e < this.vinhDanh.childrenCount; e++) {
var i = this.vinhDanh.children[e];
if (e < t.vinhDanh.length && e < 4) {
this.node.height = 400;
var n = t.vinhDanh[e];
if (!i || "1" == i.name) {
(i = cc.instantiate(this.vinhDanh.children[0])).parent = this.vinhDanh;
i.setSiblingIndex(1);
}
i.active = !0;
i.getChildByName("lblNickname").getComponent(cc.Label).string = n.nickname;
i.getChildByName("lblCoin").getComponent(cc.Label).string = cc.Tool.getInstance().formatNumberK(n.coin);
} else i && (i.active = !1);
}
},
update: function() {
this.line.height = this.node.height;
}
});
cc._RF.pop();
}, {} ],
AviatorJpHistoryView: [ function(t, e) {
"use strict";
cc._RF.push(e, "4acedYw2u9BDK5Nu2uFjRGa", "AviatorJpHistoryView");
cc.AviatorJpHistoryView = cc.Class({
extends: cc.Component,
properties: {
listItems: cc.Node,
lblPage: cc.Label,
btnNext: cc.Button,
btnPrev: cc.Button
},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
this.node.zIndex = 99;
this.listItems.children.forEach(function(t) {
t.active = !1;
});
this.maxItems = 1;
this.btnNext.node.active = !1;
this.btnPrev.node.active = !1;
},
onEnable: function() {
var t = this;
cc.director.getScheduler().schedule(function() {
t.getTopSessionWinners();
}, this, 1, 0, .2, !1);
this.animation.play("openPopup");
},
getTopSessionWinners: function() {
new cc.AviatorGetHistoryJackpotCommand().execute(this);
},
onBCGetHistoryResponse: function(t) {
this.list = t.list;
this.list;
if (null !== this.list && this.list.length > 0) {
this.page = 0;
this.btnNext.node.active = !0;
this.updatePage();
}
},
closeClicked: function() {
this.animation.play("closePopup");
var t = this;
cc.director.getScheduler().schedule(function() {
t.animation.stop();
cc.AviatorPopupController.getInstance().destroyJpHistoryView();
}, this, 1, 0, .12, !1);
},
onClickNextPage: function() {
if (this.list) {
var t = Math.ceil(this.list.length / this.listItems.children.length);
if (this.page < t - 1) {
this.page++;
this.updatePage();
this.btnPrev.node.active = !0;
this.btnNext.node.active = this.page < t - 1;
}
}
},
onClickPrevPage: function() {
if (this.list && this.page > 0) {
this.page--;
this.updatePage();
this.btnNext.node.active = !0;
this.btnPrev.node.active = this.page > 0;
}
},
updatePage: function() {
this.lblPage.string = "Trang: " + (this.page + 1);
for (var t = 0; t < this.listItems.children.length; t++) {
var e = this.list[this.page * this.maxItems + t], i = this.listItems.children[t];
if (e) {
i.active = !0;
i.getComponent(cc.AviatorJpHistoryItem).updateItem(e, t);
} else i.active = !1;
}
}
});
cc._RF.pop();
}, {} ],
AviatorLabelIncrement: [ function(t, e) {
"use strict";
cc._RF.push(e, "95165gyp7xNLaL9xZc+0yFJ", "AviatorLabelIncrement");
(function() {
cc.AviatorLabelIncrement = cc.Class({
extends: cc.Component,
properties: {
label: cc.Label,
surfix: "",
duration: .5,
fromValue: 0,
toValue: 0,
range: 0,
sign: 0,
canRun: !1,
delta: 0
},
onLoad: function() {
this.label = this.node.getComponent(cc.Label);
this.duration >= 2.4 ? this.rootDuration = 3 : this.rootDuration = 1;
this.duration = 1;
this.durationNormal = .5;
this.durationAn = 2;
this.durationDam = 4;
this.durationKhung = 6;
this.durationAnHu = 8;
},
update: function(t) {
if (this.canRun) {
this.delta += t;
if (this.delta > this.duration) {
this.label.string = this.formatNumber(this.toValue) + this.surfix;
this.canRun = !1;
} else this.label.string = this.formatNumber(Math.round(this.fromValue + this.delta / this.duration * this.range * this.sign)) + this.surfix;
}
},
formatNumber: function(t) {
return cc.Tool.getInstance().formatNumber(t);
},
tweenValueto: function(t, e) {
this.duration = e || this.rootDuration;
this.tweenValue(this.toValue, t, e);
},
tweenValueWithTime: function(t, e, i) {
this.duration = i;
this.startTween(t, e);
},
tweenValue: function(t, e, i) {
this.duration = i || this.rootDuration;
this.canRun = !1;
this.startTween(t, e);
},
startTween: function(t, e) {
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
},
setValue: function(t) {
this.canRun = !1;
this.fromValue = t;
this.toValue = t;
null === this.label && (this.label = this.node.getComponent(cc.Label));
this.label.string = this.formatNumber(this.toValue) + this.surfix;
},
setValueText: function(t) {
null === this.label && (this.label = this.node.getComponent(cc.Label));
this.label.string = t;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
AviatorMenuView: [ function(t, e) {
"use strict";
cc._RF.push(e, "90281QUKbxFMotxDw+8AqHZ", "AviatorMenuView");
(function() {
cc.AviatorMenuView = cc.Class({
extends: cc.Component,
properties: {
layoutMenu: cc.Node,
nodeBtnHideMenu: cc.Node,
arrow: cc.Node
},
onClickShowMenu: function() {
this.nodeBtnHideMenu.active = !0;
cc.tween(this.layoutMenu).to(.3, {
position: cc.v2(-670, this.layoutMenu.y)
}).start();
cc.tween(this.arrow).to(.3, {
scaleX: 1
}).start();
},
onClickHideMenu: function() {
cc.tween(this.layoutMenu).to(.3, {
position: cc.v2(-870, this.layoutMenu.y)
}).start();
cc.tween(this.arrow).to(.3, {
scaleX: -1
}).start();
this.nodeBtnHideMenu.active = !1;
},
onClickHelp: function() {
this.onClickHideMenu();
cc.AviatorPopupController.getInstance().createHelpView();
},
onClickTop: function() {
this.onClickHideMenu();
cc.AviatorPopupController.getInstance().createTopView();
},
onClickHistory: function() {
this.onClickHideMenu();
cc.AviatorPopupController.getInstance().createHistoryView();
},
onClickJackpot: function() {
cc.AviatorPopupController.getInstance().createJpHistoryView();
},
onClickExit: function() {
lngui.UIScreenManager.instance.popToRootScreen();
},
onClickSetting: function() {}
});
}).call();
cc._RF.pop();
}, {} ],
AviatorPlayersView: [ function(t, e) {
"use strict";
cc._RF.push(e, "98786yyA2VDGLXV+TdgY7P6", "AviatorPlayersView");
(function() {
cc.AviatorPlayersView = cc.Class({
extends: cc.Component,
properties: {
lbTotalBet: cc.AviatorLabelIncrement,
lbTotalWin: cc.AviatorLabelIncrement,
lbTotalUser: cc.AviatorLabelIncrement,
aviatorListView: cc.AviatorBetListView,
curPlayerBet: cc.AviatorCurPlayerBetItem,
nodeScroll: cc.Node
},
onLoad: function() {
this.controller = cc.AviatorController.getInstance();
this.controller.setAviatorPlayerView(this);
this.curPlayerId = cc.LoginController.getInstance().getUserId();
this.viewNode = this.nodeScroll.getChildByName("view");
this.isHeightAdjusted = !1;
this.defaultScrollHeight = 368;
this.defaultViewHeight = 368;
},
updateBetList: function(t, e) {
var i = this, n = t;
if (null !== n && n.length > 0) {
this.lbTotalUser.tweenValueto(n.length);
this.lbTotalBet.tweenValueto(n.reduce(function(t, e) {
return t + e.BetValue;
}, 0));
this.lbTotalWin.tweenValueto(n.reduce(function(t, e) {
return t + e.Award;
}, 0));
var o = n.find(function(t) {
return t.AccountID === i.curPlayerId;
});
n = n.filter(function(t) {
return t.AccountID !== i.curPlayerId;
});
this.aviatorListView.resetList();
this.aviatorListView.initialize(n, e);
if (o) {
this.curPlayerBet.node.active = !0;
this.curPlayerBet.updateItem(o, 0, e);
if (!this.isHeightAdjusted) {
var s = this.curPlayerBet.node.height;
this.nodeScroll.height -= s;
this.nodeScroll.getChildByName("view").height -= s;
this.isHeightAdjusted = !0;
}
} else this.curPlayerBet.node.active = !1;
} else this.curPlayerBet.node.active = !1;
},
resetList: function() {
this.aviatorListView.resetList();
this.curPlayerBet.resetItem();
this.lbTotalBet.tweenValueto(0);
this.lbTotalWin.tweenValueto(0);
this.lbTotalUser.tweenValueto(0);
this.curPlayerBet.node.active = !1;
this.isHeightAdjusted = !1;
this.nodeScroll.height = this.defaultScrollHeight;
this.viewNode.height = this.defaultViewHeight;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
AviatorPopupController: [ function(t, e) {
"use strict";
cc._RF.push(e, "df13elMIRNAe7sOAzdNEQ5g", "AviatorPopupController");
(function() {
var t;
t = function() {
var t;
function e() {}
t = void 0;
e.getInstance = function() {
void 0 === t && (t = this);
return t.prototype;
};
e.prototype.setPopupView = function(t) {
return this.aviatorPopupView = t;
};
e.prototype.createTopView = function() {
return this.aviatorPopupView.createTopView();
};
e.prototype.destroyTopView = function() {
return this.aviatorPopupView.destroyTopView();
};
e.prototype.createHelpView = function() {
return this.aviatorPopupView.createHelpView();
};
e.prototype.destroyHelpView = function() {
return this.aviatorPopupView.destroyHelpView();
};
e.prototype.createHistoryView = function() {
return this.aviatorPopupView.createHistoryView();
};
e.prototype.destroyHistoryView = function() {
return this.aviatorPopupView.destroyHistoryView();
};
e.prototype.createJpHistoryView = function() {
return this.aviatorPopupView.createJpHistoryView();
};
e.prototype.destroyJpHistoryView = function() {
return this.aviatorPopupView.destroyJpHistoryView();
};
return e;
}();
cc.AviatorPopupController = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
AviatorPopupView: [ function(t, e) {
"use strict";
cc._RF.push(e, "0f3daSkJ+BNGpH5iX7KvCM2", "AviatorPopupView");
(function() {
cc.AviatorPopupView = cc.Class({
extends: cc.Component,
properties: {
prefabJpHistory: cc.Prefab,
prefabHelp: cc.Prefab,
prefabHistory: cc.Prefab,
prefabTop: cc.Prefab
},
onLoad: function() {
cc.AviatorPopupController.getInstance().setPopupView(this);
},
createJpHistoryView: function() {
this.nodeJpHistory = this.createView(this.prefabJpHistory);
},
destroyJpHistoryView: function() {
this.nodeJpHistory && this.nodeJpHistory.destroy();
},
createTopView: function() {
this.nodeTopView = this.createView(this.prefabTop);
},
destroyTopView: function() {
this.nodeTopView && this.nodeTopView.destroy();
},
createHelpView: function() {
this.nodeHelpView = this.createView(this.prefabHelp);
},
destroyHelpView: function() {
this.nodeHelpView && this.nodeHelpView.destroy();
},
createHistoryView: function() {
this.nodeHistoryView = this.createView(this.prefabHistory);
},
destroyHistoryView: function() {
this.nodeHistoryView && this.nodeHistoryView.destroy();
},
createView: function(t) {
var e = cc.instantiate(t);
e.parent = this.node;
e.setPosition(-this.node.x, -this.node.y);
return e;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
AviatorSoiCauView: [ function(t, e) {
"use strict";
cc._RF.push(e, "53dabcw8/tIhoWdD4BScbw9", "AviatorSoiCauView");
cc.Class({
extends: cc.Component,
properties: {
itemGray: cc.Prefab,
itemRed: cc.Prefab,
itemBlue: cc.Prefab,
itemGreen: cc.Prefab,
itemYellow: cc.Prefab,
itemPurple: cc.Prefab,
itemOrange: cc.Prefab,
layoutParent: cc.Node
},
onLoad: function() {
this.controller = cc.AviatorController.getInstance();
this.controller.setAviatorSoiCauView(this);
this.clearList();
},
initListSoiCau: function(t) {
if (0 !== t.length) {
if (this.layoutParent.children.length) {
this.layoutParent.children[8].removeFromParent();
this.layoutParent.children.forEach(function(t) {
t.stopAllActions();
t.scale = 1;
});
var e, i = t[0], n = null, o = null;
e = i.Multiplier < 2 ? this.itemGray : i.Multiplier < 3 ? this.itemBlue : i.Multiplier > 3 && i.Multiplier < 5 ? this.itemPurple : i.Multiplier > 5 && i.Multiplier < 10 ? this.itemGreen : i.Multiplier > 10 && i.Multiplier < 50 ? this.itemOrange : i.Multiplier > 50 && i.Multiplier < 200 ? this.itemYellow : this.itemRed;
n = cc.instantiate(e);
this.layoutParent.addChild(n);
(o = n.getChildByName("value").getComponent(cc.Label)) && (o.string = i.Multiplier + "x");
} else for (var s = 8; s >= 0; s--) {
var c = t[s], a = null, r = null;
a = c.Multiplier < 2 ? cc.instantiate(this.itemGray) : c.Multiplier < 3 ? cc.instantiate(this.itemBlue) : c.Multiplier > 3 && c.Multiplier < 5 ? cc.instantiate(this.itemPurple) : c.Multiplier > 5 && c.Multiplier < 10 ? cc.instantiate(this.itemGreen) : c.Multiplier > 10 && c.Multiplier < 50 ? cc.instantiate(this.itemOrange) : c.Multiplier > 50 && c.Multiplier < 200 ? cc.instantiate(this.itemYellow) : cc.instantiate(this.itemRed);
this.layoutParent.addChild(a);
(r = a.getChildByName("value").getComponent(cc.Label)) && (r.string = c.Multiplier + "x");
}
cc.director.getScheduler().schedule(function() {
cc.Tween.stopAllByTarget(this.layoutParent.children[9]);
cc.tween(this.layoutParent.children[9]).repeatForever(cc.tween().to(.4, {
scale: 1.2
}).to(.8, {
scale: 1
})).start();
}, this, 0, 0, 0, !1);
}
},
clearList: function() {
this.layoutParent.removeAllChildren(!0);
}
});
cc._RF.pop();
}, {} ],
AviatorState: [ function(t, e) {
"use strict";
cc._RF.push(e, "1fb03Tp4+FKy54CmHSRL2dP", "AviatorState");
(function() {
cc.AviatorState = cc.Enum({
WAITING: 0,
BETTING: 1,
FLYING: 2,
CRASHED: 3
});
}).call(void 0);
cc._RF.pop();
}, {} ],
AviatorTopItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "885bdT7IjVB06vOEwwsOb8n", "AviatorTopItem");
(function() {
cc.AviatorTopItem = cc.Class({
extends: cc.Component,
properties: {
sprite: cc.Sprite,
lbRank: cc.Label,
lbNickName: cc.Label,
lbTotalWin: cc.Label,
rankSprite1: sp.Skeleton,
rankSprite2: sp.Skeleton,
rankSprite3: sp.Skeleton
},
updateItem: function(t, e) {
var i = cc.Color.WHITE;
this.sprite.enabled = e % 2 != 0;
if (e < 3) {
this.lbRank.node.active = !1;
if (0 == e) {
this.rankSprite1.node.active = !0;
this.rankSprite2.node.active = !1;
this.rankSprite3.node.active = !1;
this.lbNickName.node.color = i.fromHEX("#CC0000");
} else if (1 == e) {
this.rankSprite1.node.active = !1;
this.rankSprite2.node.active = !0;
this.rankSprite3.node.active = !1;
this.lbNickName.node.color = i.fromHEX("#FFCC00");
} else {
this.rankSprite1.node.active = !1;
this.rankSprite2.node.active = !1;
this.rankSprite3.node.active = !0;
this.lbNickName.node.color = i.fromHEX("#00CC34");
}
} else {
this.lbNickName.node.color = i.fromHEX("#008DFF");
this.lbTotalWin.node.color = i.fromHEX("#FFFFFF");
this.lbNickName.font = this.fontName;
this.lbTotalWin.font = this.fontRegurlar;
this.lbRank.string = e + 1;
this.lbRank.node.active = !0;
this.rankSprite1.node.active = !1;
this.rankSprite2.node.active = !1;
this.rankSprite3.node.active = !1;
}
this.lbNickName.string = t.UserName;
this.lbTotalWin.string = cc.Tool.getInstance().formatNumber(t.Award);
this.item = t;
this.itemID = e;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
AviatorTopListView: [ function(t, e) {
"use strict";
cc._RF.push(e, "b3b15s17+tI7I4LNUIa9tPx", "AviatorTopListView");
(function() {
cc.AviatorTopListView = cc.Class({
extends: cc.Component,
properties: {
itemTemplate: cc.Node,
scrollView: cc.ScrollView,
spawnCount: 0,
spacing: 0,
bufferZone: 0
},
onLoad: function() {
this.spawnCount = 15;
if (null !== this.scrollView) {
this.content = this.scrollView.content;
this.items = [];
this.updateTimer = 0;
this.updateInterval = .1;
this.lastContentPosY = 0;
this.rootContentY = this.content.y;
}
},
resetList: function() {
if (null !== this.scrollView) {
this.items = [];
this.scrollView.stopAutoScroll();
this.content = this.scrollView.content;
this.content.y = this.rootContentY;
for (var t = this.content.children, e = t.length - 1; e >= 0; e--) this.content.removeChild(t[e]);
}
},
getPositionInView: function(t) {
var e = t.parent.convertToWorldSpaceAR(t.position);
return this.scrollView.node.convertToNodeSpaceAR(e);
},
initialize: function(t) {
this.messages = t;
var e = this.messages.length;
this.content.height = e * (this.itemTemplate.height + this.spacing) + this.spacing;
for (var i = Math.min(this.spawnCount, e), n = 0; n < i; ++n) {
var o = cc.instantiate(this.itemTemplate);
this.content.addChild(o);
o.setPosition(0, -o.height * (.5 + n) - this.spacing * (n + 1));
o.getComponent(cc.AviatorTopItem).updateItem(this.messages[n], n);
this.items.push(o);
}
this.rootContentY = this.content.y;
},
update: function(t) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.items, i = this.bufferZone, n = this.scrollView.content.y < this.lastContentPosY, o = (this.itemTemplate.height + this.spacing) * e.length, s = 0; s < e.length; ++s) {
var c = this.getPositionInView(e[s]);
if (n) {
if (c.y < -i && e[s].y + o < 0) {
e[s].y = e[s].y + o;
var a = e[s].getComponent(cc.AviatorTopItem), r = a.itemID - e.length;
a.updateItem(this.messages[r], r);
}
} else if (c.y > i && e[s].y - o > -this.content.height) {
e[s].y = e[s].y - o;
r = (a = e[s].getComponent(cc.AviatorTopItem)).itemID + e.length;
a.updateItem(this.messages[r], r);
}
}
this.lastContentPosY = this.scrollView.content.y;
}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
AviatorTopView: [ function(t, e) {
"use strict";
cc._RF.push(e, "2a0c0Anh+tH6pGVLfX9FJt8", "AviatorTopView");
(function() {
cc.AviatorTopView = cc.Class({
extends: cc.Component,
properties: {
topListView: cc.AviatorTopListView,
lbDate: cc.Label,
btnPrevDay: cc.Button,
btnNextDay: cc.Button
},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
this.node.zIndex = 999;
this.dayAgo = 1;
this.currDate = new Date();
},
onEnable: function() {
var t = this;
cc.director.getScheduler().schedule(function() {
t.getTopSessionWinners(0);
}, this, 1, 0, .2, !1);
this.checkActiveBtn();
this.animation.play("openPopup");
},
getTopSessionWinners: function(t) {
var e = this.currDate, i = e.getDate();
e.setDate(i + t);
var n = e.getMonth() + 1 + "-" + e.getDate() + "-" + e.getFullYear();
this.lbDate.string = this.formatDate(e);
new cc.AviatorWinnerCommand().execute(this, n);
},
onGetBigWinnerResponse: function(t) {
var e = t;
if (e.length > 0) {
this.topListView.resetList();
this.topListView.initialize(e);
}
},
prevDateClick: function() {
this.dayAgo--;
this.checkActiveBtn();
this.getTopSessionWinners(-1);
},
nextDateClick: function() {
this.dayAgo++;
this.checkActiveBtn();
this.getTopSessionWinners(1);
},
checkActiveBtn: function() {
this.btnNextDay.interactable = !0;
this.btnNextDay.node.opacity = 255;
this.btnPrevDay.interactable = !0;
this.btnPrevDay.node.opacity = 255;
if (this.dayAgo >= 1) {
this.dayAgo = 1;
this.btnNextDay.interactable = !1;
this.btnNextDay.node.opacity = 150;
}
if (this.dayAgo <= -5) {
this.dayAgo = -5;
this.btnPrevDay.interactable = !1;
this.btnPrevDay.node.opacity = 150;
}
},
formatDate: function(t) {
var e = t.getDate(), i = t.getMonth() + 1, n = t.getFullYear();
return ("0" + e).slice(-2) + "/" + ("0" + i).slice(-2) + "/" + n;
},
closeClicked: function() {
this.topListView.resetList();
this.animation.play("closePopup");
var t = this;
cc.director.getScheduler().schedule(function() {
t.animation.stop();
cc.AviatorPopupController.getInstance().destroyTopView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
AviatorView: [ function(t, e) {
"use strict";
cc._RF.push(e, "9ab22P17aJDJYz0oPKnkvyt", "AviatorView");
(function() {
cc.AviatorView = cc.Class({
extends: cc.Component,
properties: {
lbNickName: cc.Label,
lbBalance: cc.AviatorLabelIncrement,
nodeChat: cc.Node,
nodeMenu: cc.Node,
Avatar: cc.Sprite,
spfAvt: [ cc.SpriteFrame ]
},
onLoad: function() {
this.controller = cc.AviatorController.getInstance();
this.controller.setAviatorView(this);
this.isActiveChat = !1;
this.isActiveMenu = !1;
this.lastTimeReconnect = new Date().getTime();
this.currAccId = null;
lngui.UIWaitingLayout.showWaiting();
this.Avatar.spriteFrame = this.spfAvt[lngui.UserManager.instance.mainUserInfo.Avatar - 1];
this.connectHub();
},
onDestroy: function() {
this.sendRequestOnHub(cc.MethodHubName.EXIT_LOBBY);
this.unscheduleAllCallbacks();
this.controller.setAviatorView(null);
lngui.UIWaitingLayout.hideWaiting();
this.AviatorHub.close();
},
disconnectAndLogout: function() {
this.AviatorHub && this.AviatorHub.disconnect();
this.lastTimeReconnect = new Date().getTime();
},
connectHub: function() {
var t = {
url: "https://aviator." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
hub: "AviatorHub",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate
};
cc.systemEvent.off("OnAviatorToWebSocKet", this.onResponeData, this);
cc.systemEvent.on("OnAviatorToWebSocKet", this.onResponeData, this);
this.AviatorHub = new lngui.GateSignalR();
this.AviatorHub.connect("OnAviatorToWebSocKet", t.url, t.hub, t.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
lngui.UIWaitingLayout.showWaiting();
},
sendRequestOnHub: function(t, e) {
switch (t) {
case cc.MethodHubName.ENTER_LOBBY:
this.sendSignalR(cc.MethodHubName.ENTER_LOBBY, [ 4, 1 ]);
break;

case cc.MethodHubName.EXIT_LOBBY:
this.sendSignalR(cc.MethodHubName.EXIT_LOBBY, []);
break;

case cc.MethodHubName.BET:
this.sendSignalR(cc.MethodHubName.BET, [ e ]);
break;

case cc.MethodHubName.CASH_OUT:
console.log("Cashout");
this.sendSignalR(cc.MethodHubName.CASH_OUT, []);
break;

case cc.MethodHubName.PLAY_NOW:
this.sendSignalR(cc.MethodHubName.PLAY_NOW, []);
break;

case cc.MethodHubName.SEND_MESSAGE:
this.AviatorHub.sendRoomMessage(e);
}
},
sendSignalR: function(t, e) {
lngui.ZLog.log("SendSocket==========================>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.AviatorHub && this.AviatorHub.send(t, e);
},
onResponeData: function(t) {
t.s && "error" == t.s || this.onHubMessage(t);
},
connectSuccess: function() {
console.log("connectSuccess =========>");
this.sendRequestOnHub(cc.MethodHubName.ENTER_LOBBY);
lngui.UIWaitingLayout.hideWaiting();
},
onSlotsNegotiateResponse: function(t) {
this.connectionToken = t.ConnectionToken;
this.AviatorHub = new cc.Hub();
this.AviatorHub.connect(this, this.hubName, t.ConnectionToken);
},
onHubMessage: function(t) {
var e = this;
if (("open" == t.s || "reconnect" == t.s || "1" == t.s) && !this.isConnect) {
this.isConnect = !0;
this.connectSuccess();
}
if (void 0 !== t.M && t.M.length > 0) t.M.map(function(t) {
switch (t.M) {
case cc.MethodHubOnName.PLAYER_LEAVE:
e.playerLeave(t.A);
break;

case cc.MethodHubOnName.SESSION_INFO:
var i = t.A[0];
e.controller.updateInfo(i);
e.controller.updateBetView(i);
break;

case cc.MethodHubOnName.JOIN_GAME:
e.updatePlayerInfor(t.A[0]);
var n = t.A[2];
e.controller.initListSoiCau(n);
e.controller.updateSoiCau(n);
var o = t.A[1];
e.controller.updateBetList(o.BetList, o.IsCrashed);
break;

case cc.MethodHubOnName.GAME_HISTORY:
e.controller.initListSoiCau(t.A[0]);
e.controller.updateSoiCau(t.A[0]);
break;

case cc.MethodHubOnName.BET_LIST:
e.controller.updateBetList(t.A[0], t.A[1]);
break;

case cc.MethodHubOnName.BET_SUCCESS:
e.controller.setBeted(!0);
e.lbBalance.tweenValueto(t.A[1]);
lngui.UserManager.instance.mainUserInfo.Money = t.A[1];
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, t.A[1]);
lngui.UITextManager.showCenterNotification("Cược thành công");
break;

case cc.MethodHubOnName.PLAYER_CASH_OUT:
e.controller.updateCashout(t.A[0], t.A[1]);
break;

case cc.MethodHubOnName.CASH_OUT_SUCCESS:
if (t.A[0] > 0) {
e.controller.setCashout(!0);
e.lbBalance.tweenValueto(t.A[0]);
lngui.UserManager.instance.mainUserInfo.Money = t.A[0];
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, t.A[0]);
}
break;

case cc.MethodHubOnName.PLAYER_MESSAGE:
lngui.UITextManager.showCenterNotification(t.A[0]);
break;

case cc.MethodHubOnName.MESSAGE:
cc.game.isPaused() || lngui.UITextManager.showCenterNotification(t.A[0]);
break;

case cc.MethodHubOnName.RECEIVE_MESSAGE:
cc.ChatRoomController.getInstance().addChatContent(t.A);
e.controller.playerShowBubbleChat(t.A);
}
}); else if (t.R && t.R.AccountID) {
this.currAccId = t.R.AccountID;
this.sendRequestOnHub(cc.MethodHubName.PLAY_NOW);
lngui.UIWaitingLayout.hideWaiting();
} else t.I;
},
onHubError: function() {},
updatePlayerInfor: function(t) {
this.lbNickName.string = t.NickName;
this.lbBalance.tweenValueto(t.Account.Balance);
},
playerLeave: function(t) {
if (t[0] === lngui.UserManager.instance.mainUserInfo.AccountI) {
var e = t[1];
lngui.UIScreenManager.instance.popToRootScreen();
cc.PopupController.getInstance().showMessage(e);
}
},
chatClick: function() {
if (this.isActiveChat) {
this.nodeChat.active = !1;
this.isActiveChat = !1;
} else {
this.nodeChat.active = !0;
this.isActiveChat = !0;
}
},
menuClick: function() {
if (this.isActiveMenu) {
this.nodeMenu.active = !1;
this.isActiveMenu = !1;
} else {
this.nodeMenu.active = !0;
this.isActiveMenu = !0;
}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
AviatorWinnerCommand: [ function(t, e) {
"use strict";
cc._RF.push(e, "40ffedkjTJKrbNxgMWOsnlu", "AviatorWinnerCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t, e) {
var i = "api/Aviator/GetBigWinner?topDate=" + e;
cc.PopupController.getInstance().showBusy();
return cc.ServerConnector.getInstance().sendRequest(cc.SubdomainName.AVIATOR, i, function(e) {
var i = JSON.parse(e);
cc.PopupController.getInstance().hideBusy();
return t.onGetBigWinnerResponse(i);
});
};
return t;
}();
cc.AviatorWinnerCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
BackgroundScroll: [ function(t, e) {
"use strict";
cc._RF.push(e, "24e188+sq5JB6/u1NHz05ad", "BackgroundScroll");
cc.Class({
extends: cc.Component,
properties: {
speed: 100,
backgrounds: {
default: [],
type: [ cc.Node ]
}
},
onLoad: function() {
this.totalWidth = this.backgrounds[0].width;
this.resetPositions();
},
update: function(t) {
for (var e = 0; e < this.backgrounds.length; e++) {
this.backgrounds[e].x -= this.speed * t;
this.backgrounds[e].x <= -this.totalWidth && (this.backgrounds[e].x += this.totalWidth * this.backgrounds.length);
}
},
resetPositions: function() {
for (var t = 0; t < this.backgrounds.length; t++) this.backgrounds[t].x = t * this.totalWidth;
}
});
cc._RF.pop();
}, {} ],
MoonOrbit: [ function(t, e) {
"use strict";
cc._RF.push(e, "e7519PX5XhLfIZW6N5g9+Yj", "MoonOrbit");
cc.Class({
extends: cc.Component,
properties: {
earth: cc.Node,
moons: {
default: [],
type: [ cc.Node ]
},
orbitRadius: 150,
orbitSpeed: 20,
earthRotationSpeed: 5
},
onLoad: function() {
this.angle = 0;
this.moonAngles = [];
this.orbitDirections = [];
for (var t = 0; t < this.moons.length; t++) {
this.orbitDirections[t] = t % 2 == 0 ? 1 : -1;
this.moonAngles[t] = 360 * t / this.moons.length;
}
this.resetMoonPositions();
},
update: function(t) {
this.earth.angle += this.earthRotationSpeed * t;
for (var e = 0; e < this.moons.length; e++) {
this.moonAngles[e] += this.orbitDirections[e] * this.orbitSpeed * t;
var i = cc.misc.degreesToRadians(this.moonAngles[e]), n = this.earth.x + this.orbitRadius * Math.cos(i), o = this.earth.y + this.orbitRadius * Math.sin(i);
this.moons[e].setPosition(n, o);
}
},
resetMoonPositions: function() {
for (var t = 0; t < this.moons.length; t++) {
var e = cc.misc.degreesToRadians(this.moonAngles[t]), i = this.earth.x + this.orbitRadius * Math.cos(e), n = this.earth.y + this.orbitRadius * Math.sin(e);
this.moons[t].setPosition(i, n);
}
}
});
cc._RF.pop();
}, {} ],
ScrollItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "28351mbz0FOlLlYmKMmGRwY", "ScrollItem");
cc.Class({
extends: cc.Component,
properties: {
itemLabel: cc.Label
},
updateItem: function(t) {
this.itemLabel && (this.itemLabel.string = t + 1);
}
});
cc._RF.pop();
}, {} ],
ScrollViewHeSo: [ function(t, e) {
"use strict";
cc._RF.push(e, "8eaf3aj2DRGiZHfj7to7SxH", "ScrollViewHeSo");
cc.Class({
extends: cc.Component,
properties: {
scrollViewLeft: cc.ScrollView,
scrollViewRight: cc.ScrollView,
numberPrefab: cc.Prefab
},
onLoad: function() {
var t = this;
this.initNumbers(this.scrollViewLeft.content);
this.initNumbers(this.scrollViewRight.content);
this.scrollViewLeft.node.on("scroll-ended", function() {
return t.onScrollEnded(t.scrollViewLeft);
}, this);
this.scrollViewRight.node.on("scroll-ended", function() {
return t.onScrollEnded(t.scrollViewRight);
}, this);
this.Multiplier = 1.01;
},
initNumbers: function(t) {
t.removeAllChildren();
for (var e = 0; e < 3; e++) for (var i = 1; i <= 99; i++) {
var n = cc.instantiate(this.numberPrefab), o = i < 10 ? "0" + i : "" + i;
n.getComponent(cc.Label).string = o;
t.addChild(n);
n.y = -n.height * (99 * e + (i - 1));
}
t.height = t.children.length * t.children[0].height;
},
onScrollEnded: function(t) {
var e = t.content, i = this.getClosestItem(e);
if (i) {
var n = -i.y;
cc.tween(e).to(.3, {
y: n
}, {
easing: "cubicInOut"
}).start();
var o = parseInt(i.getComponent(cc.Label).string);
t === this.scrollViewLeft ? this.currentNumberLeft = o : t === this.scrollViewRight && (this.currentNumberRight = o);
this.Multiplier = this.currentNumberLeft + "." + this.currentNumberRight;
cc.log("Số đã chọn (" + (t === this.scrollViewLeft ? "Trái" : "Phải") + "): ", o < 10 ? "0" + o : "" + o);
}
this.adjustCircularScroll(e, i);
},
getClosestItem: function(t) {
var e = null, i = Infinity;
t.children.forEach(function(n) {
var o = n.parent.convertToWorldSpaceAR(n.position), s = t.parent.convertToWorldSpaceAR(cc.v2(0, 0)), c = Math.abs(o.y - s.y);
if (c < i) {
i = c;
e = n;
}
});
return e;
},
adjustCircularScroll: function(t, e) {
var i = t.children.indexOf(e);
if (!(i >= 99 && i < 198)) if (i < 99) {
var n = t.y - e.y + t.children[99].y;
t.y = n;
} else if (i >= 198) {
var o = t.y - e.y + t.children[99].y;
t.y = o;
}
},
setMultiplier: function() {
cc.AviatorController.getInstance().setMultiplier(this.Multiplier);
},
resetMultiplier: function() {
this.scrollViewLeft.scrollToTop(.3);
this.scrollViewRight.scrollToTop(.3);
this.Multiplier = 1.01;
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "Aviator.Chat.NetworkClient", "AviatorChat", "AviatorBetView", "AviatorInfoView", "AviatorLabelIncrement", "AviatorMenuView", "AviatorView", "AviatorBetItem", "AviatorBetListView", "AviatorCurPlayerBetItem", "AviatorPlayersView", "AviatorGetHistoryJackpotCommand", "AviatorHistoryCommand", "AviatorWinnerCommand", "AviatorState", "BackgroundScroll", "MoonOrbit", "ScrollItem", "ScrollViewHeSo", "AviatorController", "AviatorPopupController", "AviatorGraph50View", "AviatorSoiCauView", "AviatorPopupView", "AviatorHelpView", "AviatorHistoryItem", "AviatorHistoryListView", "AviatorHistoryView", "AviatorJpHistoryItem", "AviatorJpHistoryView", "AviatorTopItem", "AviatorTopListView", "AviatorTopView" ]);