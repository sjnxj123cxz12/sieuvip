window.__require = function e(t, i, n) {
function o(s, c) {
if (!i[s]) {
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
var l = i[s] = {
exports: {}
};
t[s][0].call(l.exports, function(e) {
return o(t[s][1][e] || e);
}, l, l.exports, e, t, i, n);
}
return i[s].exports;
}
for (var a = "function" == typeof __require && __require, s = 0; s < n.length; s++) o(n[s]);
return o;
}({
AudioPoolBauCuaLiveBW: [ function(e, t) {
"use strict";
cc._RF.push(t, "c2e90KS/hBMzK+EJkh/ZuRG", "AudioPoolBauCuaLiveBW");
(function() {
cc.AudioPoolBauCuaLiveBW = cc.Class({
extends: cc.Component,
properties: {
musicBackground: cc.AudioSource,
moveCard: cc.AudioSource,
chipBet: cc.AudioSource,
chipSelect: cc.AudioSource
},
onLoad: function() {
cc.AudioController.getInstance().setAudioPool(this);
},
enableMusic: function(e) {
this.musicBackground && (e ? this.musicBackground.isPlaying || this.musicBackground.play() : this.musicBackground.stop());
},
enableSound: function(e) {
this.chipBet.mute = !e;
this.moveCard.mute = !e;
this.musicBackground.mute = !e;
},
getAudioClip: function(e) {
var t = null;
switch (e) {
case cc.AudioTypes.CHIP_SELECT:
t = this.chipSelect;
break;

case cc.AudioTypes.CHIP_BET:
t = this.chipBet;
break;

case cc.AudioTypes.OPEN_CARD:
t = this.moveCard;
}
return t;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"BauCuaLiveBW.Chat.NetworkClient": [ function(e, t, i) {
"use strict";
cc._RF.push(t, "ad609UZo0lKKK0iioLUiFLV", "BauCuaLiveBW.Chat.NetworkClient");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), a = this && this.__decorate || function(e, t, i, n) {
var o, a = arguments.length, s = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var c = e.length - 1; c >= 0; c--) (o = e[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(t, i, s) : o(t, i)) || s);
return a > 3 && s && Object.defineProperty(t, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = e("./BauCuaLiveBWChat"), c = cc._decorator, r = c.ccclass, u = (c.property, 
function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.mSignalr = null;
t.isConnect = !1;
t.chanel = "baucua-bigwin-b52";
return t;
}
i = t;
Object.defineProperty(t, "instance", {
get: function() {
i._instance || (i._instance = new i());
return i._instance;
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
i._instance = this;
};
t.prototype.connect = function() {
var e = {
url: "https://chat." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
ip: "http://18.138.207.162:8092/signalr/negotiate",
hub: "chatHub",
gate: "hit.club"
};
cc.systemEvent.off("OnChatBauCuaLiveBWSocketEvent", this.onResponeData, this);
cc.systemEvent.on("OnChatBauCuaLiveBWSocketEvent", this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect("OnChatBauCuaLiveBWSocketEvent", e.url, e.hub, e.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
console.log("Đã connect");
};
t.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.connect();
};
t.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.closeWS();
lngui.ZLog.log("=====================CLOSE WS NOTI===============================");
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
if (e.M && Array.isArray(e.M) && 0 != e.M.length) for (var t = e.M.length, i = 0; i < t; ++i) {
var n = e.M[i];
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
t.prototype.registerChat = function() {
this.sendSignalR("RegisterChat", [ this.chanel ]);
};
t.prototype.pingPong = function() {
this.sendSignalR("PingPong", []);
};
t.prototype.connectSuccess = function() {
lngui.ZLog.log("Connect Sucesss");
};
t.prototype.closeWS = function() {
cc.systemEvent.off("OnChatBauCuaLiveBWSocketEvent", this.onResponeData, this);
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
var i;
t._instance = null;
return i = a([ r ], t);
}(cc.Component));
i.default = u;
cc._RF.pop();
}, {
"./BauCuaLiveBWChat": "BauCuaLiveBWChat"
} ],
BauCuaLiveBWAnim: [ function(e, t) {
"use strict";
cc._RF.push(t, "96262WK195AzLkpL9p8qplk", "BauCuaLiveBWAnim");
cc.BauCuaLiveBWAnim = {
SHAKING: "XocXoc",
OPEN_PLATE: "mobat",
CLOSE_PLATE: "Waiting"
};
cc._RF.pop();
}, {} ],
BauCuaLiveBWAssetsView: [ function(e, t) {
"use strict";
cc._RF.push(t, "ea3457hEvdOupUI5ZISivg1", "BauCuaLiveBWAssetsView");
(function() {
cc.BauCuaLiveBWAssetsView = cc.Class({
extends: cc.Component,
properties: {
sfDices: [ cc.SpriteFrame ],
sfPrefabChip: [ cc.Prefab ],
sfNan: [ cc.SpriteFrame ]
},
onLoad: function() {
cc.BauCuaLiveBWController.getInstance().setAssetView(this);
this.chip1kPool = new cc.NodePool();
this.chip5kPool = new cc.NodePool();
this.chip10kPool = new cc.NodePool();
this.chip100kPool = new cc.NodePool();
this.chip500kPool = new cc.NodePool();
this.chip5mPool = new cc.NodePool();
},
onDestroy: function() {
this.clearPools();
},
clearPools: function() {
try {
this.chip1kPool.clear();
this.chip5kPool.clear();
this.chip10kPool.clear();
this.chip100kPool.clear();
this.chip500kPool.clear();
this.chip5mPool.clear();
} catch (e) {}
},
createChip: function(e) {
var t = null;
switch (e) {
case cc.BauCuaLiveBWMapChip["1K"]:
t = this.chip1kPool.size() > 0 ? this.chip1kPool.get() : cc.instantiate(this.sfPrefabChip[0]);
break;

case cc.BauCuaLiveBWMapChip["5K"]:
t = this.chip5kPool.size() > 0 ? this.chip5kPool.get() : cc.instantiate(this.sfPrefabChip[1]);
break;

case cc.BauCuaLiveBWMapChip["10K"]:
t = this.chip10kPool.size() > 0 ? this.chip10kPool.get() : cc.instantiate(this.sfPrefabChip[2]);
break;

case cc.BauCuaLiveBWMapChip["20K"]:
t = cc.instantiate(this.sfPrefabChip[3]);
break;

case cc.BauCuaLiveBWMapChip["50K"]:
t = cc.instantiate(this.sfPrefabChip[4]);
break;

case cc.BauCuaLiveBWMapChip["100K"]:
t = this.chip100kPool.size() > 0 ? this.chip100kPool.get() : cc.instantiate(this.sfPrefabChip[5]);
break;

case cc.BauCuaLiveBWMapChip["200K"]:
t = cc.instantiate(this.sfPrefabChip[6]);
break;

case cc.BauCuaLiveBWMapChip["500K"]:
t = this.chip500kPool.size() > 0 ? this.chip500kPool.get() : cc.instantiate(this.sfPrefabChip[7]);
break;

case cc.BauCuaLiveBWMapChip["1M"]:
t = cc.instantiate(this.sfPrefabChip[8]);
break;

case cc.BauCuaLiveBWMapChip["2M"]:
t = cc.instantiate(this.sfPrefabChip[9]);
break;

case cc.BauCuaLiveBWMapChip["5M"]:
t = this.chip5mPool.size() > 0 ? this.chip5mPool.get() : cc.instantiate(this.sfPrefabChip[10]);
break;

case cc.BauCuaLiveBWMapChip["10M"]:
t = cc.instantiate(this.sfPrefabChip[11]);
break;

case cc.BauCuaLiveBWMapChip["20M"]:
t = cc.instantiate(this.sfPrefabChip[12]);
break;

case "ResetChip":
t = null;
}
try {
t.setScale(.7, .7);
} catch (t) {
this.createChip(e);
}
return t;
},
putChipToPool: function(e, t) {
switch (t) {
case 1e3:
this.chip1kPool.put(e);
break;

case 5e3:
this.chip5kPool.put(e);
break;

case 1e4:
this.chip10kPool.put(e);
break;

case 1e5:
this.chip100kPool.put(e);
break;

case 5e5:
this.chip500kPool.put(e);
break;

case 5e6:
this.chip5mPool.put(e);
}
},
getSfNan: function(e) {
return e ? this.sfNan[0] : this.sfNan[1];
},
getSfDice: function(e) {
return this.sfDices[e];
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWBetSide: [ function(e, t) {
"use strict";
cc._RF.push(t, "6d4bfbEQYhMHJFo4M6BpRT5", "BauCuaLiveBWBetSide");
cc.BauCuaLiveBWBetSide = {
Gourd: 1,
Crab: 2,
Fish: 3,
Rooster: 4,
Lobster: 5,
Deer: 6
};
cc._RF.pop();
}, {} ],
BauCuaLiveBWBetView: [ function(e, t) {
"use strict";
cc._RF.push(t, "2a9887n7zhP1Ih1Yso8S1G2", "BauCuaLiveBWBetView");
(function() {
cc.BauCuaLiveBWBetView = cc.Class({
extends: cc.Component,
properties: {
nodeDeer: cc.Node,
nodeGourd: cc.Node,
nodeRooster: cc.Node,
nodeFish: cc.Node,
nodeCrab: cc.Node,
nodeLobster: cc.Node,
lbTotalUserBetDeer: cc.Label,
lbTotalDeer: cc.Label,
lbTotalUserBetGourd: cc.Label,
lbTotalGourd: cc.Label,
lbTotalUserBetRooster: cc.Label,
lbTotalRooster: cc.Label,
lbTotalUserBetFish: cc.Label,
lbTotalFish: cc.Label,
lbTotalUserBetCrab: cc.Label,
lbTotalCrab: cc.Label,
lbTotalUserBetLobster: cc.Label,
lbTotalLobster: cc.Label,
lbTotalBetByUser: cc.Label,
listButton: [ cc.Node ],
buttonBetX2: cc.Button,
buttonBetAgain: cc.Button,
spriteBtnNan: cc.Sprite,
spfGateBigWin: [ cc.SpriteFrame ]
},
onLoad: function() {
this.controller = cc.BauCuaLiveBWController.getInstance();
this.controller.setBetView(this);
this.betValue = 5e4;
this.listNodeSide = [ this.nodeDeer, this.nodeGourd, this.nodeRooster, this.nodeFish, this.nodeCrab, this.nodeLobster ];
this.stopAnimationWin();
this.resetSpriteButton();
this.setActiveButton(this.listButton[1]);
this.controller.setIsNan(!1);
this.lstBtnBet = this.getListBtnBet([ this.nodeDeer, this.nodeGourd, this.nodeRooster, this.nodeFish, this.nodeCrab, this.nodeLobster ]);
this.enableClickBet(!1);
this.setSpriteBtnNan();
this.totalBetUser = 0;
this.isShowBigWin = !1;
},
getListBtnBet: function(e) {
var t = [];
e.map(function(e) {
return t.push(e.getChildByName("btnBet").getComponent(cc.Button));
});
return t;
},
resetLbTotalBet: function() {
[ this.lbTotalUserBetDeer, this.lbTotalDeer, this.lbTotalUserBetGourd, this.lbTotalGourd, this.lbTotalUserBetRooster, this.lbTotalRooster, this.lbTotalUserBetFish, this.lbTotalFish, this.lbTotalUserBetCrab, this.lbTotalCrab, this.lbTotalUserBetLobster, this.lbTotalLobster ].map(function(e) {
return e.string = "";
});
this.totalBetUser = 0;
this.lbTotalBetByUser.string = "0";
},
enableClickBet: function(e) {
this.disableBetAgain(!e);
this.lstBtnBet.map(function(t) {
t.interactable = e;
});
},
onEnable: function() {},
onDisable: function() {},
setBetValue: function(e, t) {
if ((t = parseInt(t)) != this.betValue) {
this.betValue = t;
cc.AudioController.getInstance().playSound(cc.AudioTypes.CHIP_SELECT);
this.resetSpriteButton();
this.setActiveButton(e.target);
}
},
setActiveButton: function(e) {
e.getChildByName("active").active = !0;
cc.moveTo(.1, cc.v2(e.x, -30));
e.scale = 1;
e.getChildByName("chip").color = cc.color(255, 255, 255);
},
resetSpriteButton: function() {
this.listButton.forEach(function(e) {
e.getChildByName("active").active = !1;
cc.moveTo(.1, cc.v2(e.x, -50));
e.scale = .8;
e.getChildByName("chip").color = cc.color(200, 200, 200);
});
},
onBetAgain: function(e, t) {
var i = this;
t = parseInt(t);
if (0 !== this.controller.getBetLogBySessionID(this.controller.getBetLogSession()).length) {
this.getLogBetInfo(t).map(function(e, t) {
var n = setTimeout(function() {
if (this.controller.getCurrentState() === cc.BauCuaLiveBWPharse.Betting && e.sessionID === this.controller.getBetLogSession() - 1) this.sendRequestBet(e.value, e.betSide); else try {
clearTimeout(n);
} catch (e) {
console.log(e);
}
}.bind(i), 100 * t);
}, this);
this.disableBetAgain(!0);
} else cc.PopupController.getInstance().showSlotsMessage("Chưa có dữ liệu của phiên trước.");
},
getLogBetInfo: function(e) {
var t = this, i = this.controller.getBetLogBySessionID(this.controller.getBetLogSession()), n = [];
i.length > 0 && [ 1, 2, 3, 4, 5, 6 ].map(function(e) {
n[e] = i.filter(function(t) {
return t.betSide == e;
});
}, this);
var o = [];
n.map(function(i) {
if (i.length > 0) {
var n = t.calcLogBet(i, e);
o.push.apply(o, n);
}
}, this);
return o;
},
getTotalMoneyBetSide: function(e, t) {
var i = 0;
e.map(function(e) {
i += parseInt(e.value);
}, this);
return i * t;
},
calcLogBet: function(e, t) {
var i = [ 1e6, 5e5, 1e5, 1e4, 5e3, 1e3 ], n = this.getTotalMoneyBetSide(e, t), o = [];
for (var a in i) {
var s = i[a], c = Math.floor(n / s);
n -= c * s;
o.push([ s, c ]);
}
var r = o.filter(function(e) {
return 0 !== e[1];
}), u = [];
r.map(function(t) {
for (var i = t[1], n = t[0], o = 0; o < i; o++) u.push({
value: n,
betSide: e[0].betSide,
sessionID: e[0].sessionID
});
}, this);
return u;
},
disableBetAgain: function(e) {
this.buttonBetAgain.interactable = !e;
this.buttonBetX2.interactable = !e;
var t = cc.Color.WHITE;
e && (t = cc.Color.GRAY);
this.buttonBetX2.node.color = t;
this.buttonBetAgain.node.color = t;
},
playAnimationWin: function(e) {
var t = null;
switch (e = parseInt(e)) {
case cc.BauCuaLiveBWBetSide.Deer:
t = this.nodeDeer;
break;

case cc.BauCuaLiveBWBetSide.Gourd:
t = this.nodeGourd;
break;

case cc.BauCuaLiveBWBetSide.Rooster:
t = this.nodeRooster;
break;

case cc.BauCuaLiveBWBetSide.Fish:
t = this.nodeFish;
break;

case cc.BauCuaLiveBWBetSide.Crab:
t = this.nodeCrab;
break;

case cc.BauCuaLiveBWBetSide.Lobster:
t = this.nodeLobster;
}
null != t && this.activeNodeWin(t, !0);
},
activeNodeWin: function(e, t) {
e.getChildByName("win").active = t;
},
stopAnimationWin: function() {
var e = this;
this.listNodeSide.forEach(function(t) {
e.activeNodeWin(t, !1);
});
this.resetLbTotalBet();
this.stopAnimationBigWin();
},
playAnimationBigWin: function(e, t) {
if (1 != this.isShowBigWin) {
var i = null;
switch (e = parseInt(e)) {
case cc.BauCuaLiveBWBetSide.Deer:
i = this.nodeDeer;
break;

case cc.BauCuaLiveBWBetSide.Gourd:
i = this.nodeGourd;
break;

case cc.BauCuaLiveBWBetSide.Rooster:
i = this.nodeRooster;
break;

case cc.BauCuaLiveBWBetSide.Fish:
i = this.nodeFish;
break;

case cc.BauCuaLiveBWBetSide.Crab:
i = this.nodeCrab;
break;

case cc.BauCuaLiveBWBetSide.Lobster:
i = this.nodeLobster;
}
if (null != i) {
this.activeNodeBigWin(i, !0, t);
this.isShowBigWin = !0;
}
}
},
activeNodeBigWin: function(e, t, i) {
var n = this, o = e.getChildByName("bigwin");
if (o) {
t && console.log("data", i);
var a = o.getChildByName("khung"), s = o.getChildByName("item"), c = o.getChildByName("rate").getComponent(cc.Label);
if (t) {
if (null != i) {
if (a) {
a.children.forEach(function(e) {
return e.active = !1;
});
var r = i.numDice - 1;
a.children[r] && (a.children[r].active = !0);
}
s && s.children.forEach(function(e, t) {
if (t < i.numDice) {
e.active = !0;
var o = e.getComponent(cc.Sprite);
o && n.spfGateBigWin && (o.spriteFrame = n.spfGateBigWin[i.betSide - 1]);
} else e.active = !1;
});
if (c) {
c.active = !0;
c.string = "X" + i.rateMuliple;
}
}
} else {
c && (c.string = "");
a && a.children.forEach(function(e) {
return e.active = !1;
});
s && s.children.forEach(function(e) {
return e.active = !1;
});
}
}
},
stopAnimationBigWin: function() {
var e = this;
this.listNodeSide.forEach(function(t) {
e.activeNodeBigWin(t, !1, null);
});
this.isShowBigWin = !1;
},
onBetClick: function(e, t) {
this.onBet(t);
},
onBet: function(e) {
this.disableBetAgain(!0);
cc.AudioController.getInstance().playSound(cc.AudioTypes.CHIP_BET);
this.sendRequestBet(this.betValue, e);
},
updateTotalUserBetSide: function(e, t) {
e = parseInt(e);
this.getLabelTotalBetBySide(e).string = cc.Tool.getInstance().formatNumberK(t);
},
updateBetOfAccount: function(e) {
var t = this, i = 0;
e.forEach(function(e) {
var n = parseInt(e.BetSide);
t.getLabelTotalBetBySide(n).string = cc.Tool.getInstance().formatNumberK(e.BetValue);
i += e.BetValue;
});
this.updateTotalUserBet(i);
},
getLabelTotalBetBySide: function(e) {
var t = null;
switch (e) {
case cc.BauCuaLiveBWBetSide.Deer:
t = this.lbTotalDeer;
break;

case cc.BauCuaLiveBWBetSide.Gourd:
t = this.lbTotalGourd;
break;

case cc.BauCuaLiveBWBetSide.Rooster:
t = this.lbTotalRooster;
break;

case cc.BauCuaLiveBWBetSide.Fish:
t = this.lbTotalFish;
break;

case cc.BauCuaLiveBWBetSide.Crab:
t = this.lbTotalCrab;
break;

case cc.BauCuaLiveBWBetSide.Lobster:
t = this.lbTotalLobster;
}
return t;
},
updateTotalUserBet: function(e) {
this.totalBetUser = this.totalBetUser + e;
this.lbTotalBetByUser.string = cc.Tool.getInstance().formatNumberK(this.totalBetUser);
},
updateTotalBet: function(e) {
this.setStringValue(this.lbTotalUserBetDeer, e.TotalBetDeer);
this.setStringValue(this.lbTotalUserBetGourd, e.TotalBetGourd);
this.setStringValue(this.lbTotalUserBetRooster, e.TotalBetChicken);
this.setStringValue(this.lbTotalUserBetFish, e.TotalBetFish);
this.setStringValue(this.lbTotalUserBetCrab, e.TotalBetCrab);
this.setStringValue(this.lbTotalUserBetLobster, e.TotalBetShrimp);
},
setStringValue: function(e, t) {
e.string = 0 === t ? "" : cc.Tool.getInstance().formatNumberK(t);
},
sendRequestBet: function(e, t) {
return this.controller.sendRequestOnHub(cc.MethodHubName.BET, e, t);
},
setSpriteBtnNan: function() {
this.spriteBtnNan.spriteFrame = this.controller.getSfNan(this.getIsNan());
},
onNanClick: function() {
this.controller.setIsNan(!this.getIsNan());
this.setSpriteBtnNan();
},
getIsNan: function() {
return this.controller.getIsNan();
},
parseStringToObj: function(e) {
if (!e || "string" != typeof e) return [];
for (var t = e.split(","), i = [], n = 0; n < t.length; n++) {
var o = t[n].split("-");
o.length >= 3 && i.push({
betSide: Number(o[0]),
numDice: Number(o[1]),
rateMuliple: Number(o[2])
});
}
return i;
},
startAnimBigWin: function(e) {
var t = this;
this.parseStringToObj(e).forEach(function(e) {
t.playAnimationBigWin(e.betSide, e);
});
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWButtonBet: [ function(e, t) {
"use strict";
cc._RF.push(t, "5a1b3fw315IQ50z8drsJacg", "BauCuaLiveBWButtonBet");
(function() {
cc.BauCuaLiveBWButtonBet = cc.Class({
extends: cc.Component,
properties: {
spriteButtons: [ cc.SpriteFrame ]
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWChat: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "dff4aLMV7ZCQ7wJo0OXXBM8", "BauCuaLiveBWChat");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), a = this && this.__decorate || function(e, t, i, n) {
var o, a = arguments.length, s = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var c = e.length - 1; c >= 0; c--) (o = e[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(t, i, s) : o(t, i)) || s);
return a > 3 && s && Object.defineProperty(t, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = e("./BauCuaLiveBW.Chat.NetworkClient"), c = cc._decorator, r = c.ccclass, u = c.property, l = function(e) {
o(t, e);
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
i = t;
t.prototype.onLoad = function() {
var e = this;
this.chatChanel = "baucua-bigwin-b52";
lngui.Https.get("https://gc-api.tieusi.online/hit/dealer?game=xocdia", function(t) {
if (t) {
e.nameDealer = t.msg;
e.DealerName.string = "Dealer: " + t.msg;
}
});
console.log(this.itemData);
};
t.prototype.touchSendChat = function() {
if (this.txtInputChat.string.length) {
s.default.instance.sendSignalR("SendMessage", [ this.txtInputChat.string, this.chatChanel ]);
this.txtInputChat.string = "";
}
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
var i = this.itemData.find(function(e) {
return e.iId === parseInt(t);
});
i && s.default.instance.sendSignalR("SendTip", [ this.chatChanel, i.iId, i.iN, this.nameDealer ]);
};
t.prototype.listLastMessages = function(e) {
if (0 != e.length) {
this.listChat.removeAllChildren();
if (e) for (var t = 0; t < e.length; t++) {
var i = e[t], n = i.n, o = i.c;
if (void 0 === n || void 0 === o) return;
if ("SYSTEM" != n && "SYSTEM" != o && n.length > 0 && o.length > 0) {
var a = o, s = cc.instantiate(this.templateMessage), c = i.n, r = n;
s.active = !0;
c = (c.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), r);
s.getComponent(cc.Label).string = c + ": " + a;
if (1 == e.IsVipTx) {
s.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
s.getChildByName("lb_nameVip").getComponent(cc.Label).string = c + ": ";
s.off(cc.Node.EventType.SIZE_CHANGED);
s.on(cc.Node.EventType.SIZE_CHANGED, function() {
var e = (s.getContentSize().height - s.getChildByName("lb_nameVip").getContentSize().height) / 2;
s.getChildByName("lb_nameVip").setPosition(cc.v2(0, e));
});
} else {
s.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
s.getChildByName("lb_name").getComponent(cc.Label).string = c + ": ";
s.off(cc.Node.EventType.SIZE_CHANGED);
s.on(cc.Node.EventType.SIZE_CHANGED, function() {
var e = (s.getContentSize().height - s.getChildByName("lb_name").getContentSize().height) / 2;
s.getChildByName("lb_name").setPosition(cc.v2(0, e));
});
}
this.listChat.addChild(s);
}
this.scrollListChat.scrollToBottom();
}
}
};
t.prototype.receiveMessage = function(e) {
var t = e.n, i = e.c;
if (void 0 !== t && void 0 !== i) if ("SYSTEM" != t && "SYSTEM" != i) {
if (t.length > 0 && i.length > 0) {
var n = i, o = cc.instantiate(this.templateMessage), a = e.n, s = t;
o.active = !0;
a = (a.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), s);
o.getComponent(cc.Label).string = a + ": " + n;
if (1 == e.IsVipTx) {
o.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
o.getChildByName("lb_nameVip").getComponent(cc.Label).string = a + ": ";
o.off(cc.Node.EventType.SIZE_CHANGED);
o.on(cc.Node.EventType.SIZE_CHANGED, function() {
var e = (o.getContentSize().height - o.getChildByName("lb_nameVip").getContentSize().height) / 2;
o.getChildByName("lb_nameVip").setPosition(cc.v2(0, e));
});
} else {
o.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
o.getChildByName("lb_name").getComponent(cc.Label).string = a + ": ";
o.off(cc.Node.EventType.SIZE_CHANGED);
o.on(cc.Node.EventType.SIZE_CHANGED, function() {
var e = (o.getContentSize().height - o.getChildByName("lb_name").getContentSize().height) / 2;
o.getChildByName("lb_name").setPosition(cc.v2(0, e));
});
}
this.listChat.addChild(o);
this.scrollListChat.scrollToBottom();
}
} else this.receiveMessageTip(JSON.parse(i));
};
t.prototype.receiveMessageTip = function(e) {
this.nameDealer = e.dealerName;
var t = cc.instantiate(this.templateMessageTip), i = e.giftId, n = "cho " + e.msg.split(" cho ")[1], o = e.user;
t.active = !0;
t.getChildByName("lb_name").getComponent(cc.Label).node.active = !0;
t.getChildByName("lb_name").getComponent(cc.Label).string = o;
t.getChildByName("lb_name").setPosition(cc.v2(0));
t.getChildByName("lb_msg1").getComponent(cc.Label).node.active = !0;
t.getChildByName("lb_msg1").getComponent(cc.Label).string = "đã tip";
t.getChildByName("lb_msg2").getComponent(cc.Label).node.active = !0;
t.getChildByName("lb_msg2").getComponent(cc.Label).string = n;
t.getChildByName("spriteTip").getComponent(cc.Sprite).node.active = !0;
t.getChildByName("spriteTip").getComponent(cc.Sprite).spriteFrame = this.spriteFramesTip[i - 1];
this.listChat.addChild(t);
this.scrollListChat.scrollToBottom();
};
Object.defineProperty(t, "instance", {
get: function() {
i._instance || (i._instance = new i());
return i._instance;
},
enumerable: !1,
configurable: !0
});
t.prototype.onEnable = function() {
i._instance = this;
this.txtInputChat.node.on("editing-return", this.touchSendChat, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
};
t.prototype.onKeyDown = function(e) {
switch (e.keyCode) {
case cc.macro.KEY.enter:
this.txtInputChat.focus();
}
};
var i;
t._instance = null;
a([ u(cc.Node) ], t.prototype, "templateMessage", void 0);
a([ u(cc.Node) ], t.prototype, "templateMessageTip", void 0);
a([ u([ cc.SpriteFrame ]) ], t.prototype, "spriteFramesTip", void 0);
a([ u(cc.Node) ], t.prototype, "listChat", void 0);
a([ u(cc.Node) ], t.prototype, "NodeTip", void 0);
a([ u(cc.ScrollView) ], t.prototype, "scrollListChat", void 0);
a([ u(cc.EditBox) ], t.prototype, "txtInputChat", void 0);
a([ u(cc.Label) ], t.prototype, "DealerName", void 0);
return i = a([ r ], t);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {
"./BauCuaLiveBW.Chat.NetworkClient": "BauCuaLiveBW.Chat.NetworkClient"
} ],
BauCuaLiveBWChipView: [ function(e, t) {
"use strict";
cc._RF.push(t, "b6df9xQZnBKKJWPVR8eDxwm", "BauCuaLiveBWChipView");
(function() {
cc.BauCuaLiveBWChipsView = cc.Class({
extends: cc.Component,
properties: {
layoutChip: cc.Node,
posChips: [ cc.Node ],
posGroupUsers: cc.Node,
posDealer: cc.Node,
posDeer: cc.Node,
posGourd: cc.Node,
posRooster: cc.Node,
posFish: cc.Node,
posCrab: cc.Node,
posLobster: cc.Node,
lstPosPlayer: [ cc.Node ]
},
onLoad: function() {
this.controller = cc.BauCuaLiveBWController.getInstance();
this.controller.setChipsView(this);
this.initParamChips();
},
initParamChips: function() {
this.chipsBetDeer = [];
this.chipsBetGourd = [];
this.chipsBetRooster = [];
this.chipsBetFish = [];
this.chipsBetCrab = [];
this.chipsBetLobster = [];
},
randomPosChip: function(e, t) {
var i = null;
switch (t = parseInt(t)) {
case cc.BauCuaLiveBWBetSide.Deer:
i = this.posDeer;
break;

case cc.BauCuaLiveBWBetSide.Gourd:
i = this.posGourd;
break;

case cc.BauCuaLiveBWBetSide.Rooster:
i = this.posRooster;
break;

case cc.BauCuaLiveBWBetSide.Fish:
i = this.posFish;
break;

case cc.BauCuaLiveBWBetSide.Crab:
i = this.posCrab;
break;

case cc.BauCuaLiveBWBetSide.Lobster:
i = this.posLobster;
}
var n = i.position, o = i.width / 2, a = -o, s = i.height / 2, c = -s, r = Math.floor(Math.random() * (o - a + 1) + a), u = Math.floor(Math.random() * (s - c + 1) + c);
n.x = n.x + r;
n.y = n.y + u;
return n;
},
moveChipBet: function(e, t, i, n) {
this.layoutChip.position = cc.v2(0, 0);
try {
e = parseInt(e);
var o = this.posChips[cc.BauCuaLiveBWMapChipSpriteFrame[e]].position;
if (i === cc.BauCuaLiveBWChipOf.USERS) {
o = this.posGroupUsers.position;
var a = this.controller.positionPlayerUI().indexOf(n);
-1 !== a && (o = this.lstPosPlayer[a].position);
}
var s = this.randomPosChip(e, t), c = this.controller.createChip(cc.BauCuaLiveBWMapChipSpriteFrame[e]);
c.parent = this.layoutChip;
c.position = o;
var r = cc.moveTo(.3, s);
cc.game.isPaused() ? c.position = s : c.runAction(r);
var u = o;
i === cc.BauCuaLiveBWChipOf.PLAYER && (u = this.lstPosPlayer[0].position);
this.pushChipToArray(t, e, u, c);
} catch (e) {}
},
pushChipToArray: function(e, t, i, n) {
var o = this.getListChip(e);
o && o.push([ n, t, i ]);
},
updateChipForBetSession: function(e) {
var t = this;
0 !== e.length && e.map(function(e) {
0 !== e.length && e.map(function(e) {
var i = parseInt(e.BetSide), n = parseInt(e.BetValue);
if (n in cc.BauCuaLiveBWMapChipSpriteFrame) {
var o = t.controller.createChip(cc.BauCuaLiveBWMapChipSpriteFrame[n]), a = t.randomPosChip(n, i);
o.parent = t.layoutChip;
o.position = a;
var s = t.posGroupUsers.position, c = t.controller.positionPlayerUI();
try {
var r = c.indexOf(e.AccountID);
-1 !== r && (s = t.lstPosPlayer[r].position);
t.pushChipToArray(i, n, s, o);
} catch (e) {}
} else console.warn("Bỏ qua betValue không hợp lệ:", n);
}, t);
}, this);
},
refundChips: function(e) {
var t = this;
e = parseInt(e);
var i = this.getListChip(e), n = 0;
if (0 !== i.length) {
i.map(function(i, o) {
try {
n = .1 * (o = o > 5 ? 5 : o);
var a = t.controller.createChip(cc.BauCuaLiveBWMapChipSpriteFrame[i[1]]);
a.parent = t.layoutChip;
a.position = t.posDealer.position;
var s = t.randomPosChip(i[1], e);
if (cc.game.isPaused()) a.position = s; else {
var c = cc.moveTo(.3, s);
cc.director.getScheduler().schedule(function() {
a.runAction(c);
}, t, 0, 0, .1 * o, !1);
}
t.controller.setChipWin(i[0], i[1], i[2]);
t.controller.setChipWin(a, i[1], i[2]);
} catch (e) {}
}, this);
cc.director.getScheduler().schedule(function() {
this.runRefundChipForUser();
}, this, 0, 0, n + 1.5, !1);
}
},
runRefundChipForUser: function() {
var e = this;
try {
this.controller.getChipsWin().map(function(t, i) {
i > 5 && (i = 5);
var n = t[2];
cc.game.isPaused() ? e.controller.putChipToPool(t[0], t[1]) : cc.director.getScheduler().schedule(function() {
var e = this;
cc.tween(t[0]).to(.3, {
position: n
}).to(.3, {
opacity: 0
}).call(function() {
e.controller.putChipToPool(t[0], t[1]);
}, this).start();
}, e, 0, 0, .1 * i, !1);
}, this);
} catch (e) {}
},
getListChip: function(e) {
var t = null;
switch (e) {
case cc.BauCuaLiveBWBetSide.Deer:
t = this.chipsBetDeer;
break;

case cc.BauCuaLiveBWBetSide.Gourd:
t = this.chipsBetGourd;
break;

case cc.BauCuaLiveBWBetSide.Rooster:
t = this.chipsBetRooster;
break;

case cc.BauCuaLiveBWBetSide.Fish:
t = this.chipsBetFish;
break;

case cc.BauCuaLiveBWBetSide.Crab:
t = this.chipsBetCrab;
break;

case cc.BauCuaLiveBWBetSide.Lobster:
t = this.chipsBetLobster;
}
return t;
},
getChipsLose: function(e) {
var t = this;
e = parseInt(e);
var i = this.getListChip(e);
if (0 !== i.length) {
i.map(function(e, i) {
try {
i > 5 && (i = 5);
var n = t.posDealer.position;
cc.game.isPaused() ? t.controller.putChipToPool(e[0], e[1]) : cc.director.getScheduler().schedule(function() {
var t = cc.moveTo(.3, n), i = cc.callFunc(function() {
this.controller.putChipToPool(e[0], e[1]);
}, this);
e[0].runAction(cc.sequence(t, i));
}, t, 0, 0, .1 * i, !1);
} catch (e) {}
}, this);
i = [];
}
},
clearAllChips: function() {
this.controller.clearPools();
this.layoutChip.removeAllChildren();
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWController: [ function(e, t) {
"use strict";
cc._RF.push(t, "26712yCcARP67ZOBUPUdZoq", "BauCuaLiveBWController");
(function() {
var e;
e = function() {
var e;
function t() {}
e = void 0;
t.getInstance = function() {
void 0 === e && (e = this);
return e.prototype;
};
t.prototype.setAvatarDef = function(e) {
return this.avatarDef = e;
};
t.prototype.getAvatarDef = function() {
return this.avatarDef;
};
t.prototype.setAvatars = function(e) {
return this.avatars = e;
};
t.prototype.getAvatars = function() {
return this.avatars;
};
t.prototype.setBauCuaLiveBWView = function(e) {
return this.BauCuaLiveBWView = e;
};
t.prototype.sendRequestOnHub = function(e, t, i) {
if (this.BauCuaLiveBWView) return this.BauCuaLiveBWView.sendRequestOnHub(e, t, i);
};
t.prototype.updateBalance = function(e) {
this.BauCuaLiveBWView.updateBalance(e);
};
t.prototype.setInfoView = function(e) {
return this.BauCuaLiveBW_InfoView = e;
};
t.prototype.playerLeave = function(e) {
this.BauCuaLiveBWView.playerLeave(e);
this.BauCuaLiveBW_InfoView.playerLeave(e);
};
t.prototype.updateSessionInfo = function(e) {
return this.BauCuaLiveBW_InfoView.updateSessionInfo(e);
};
t.prototype.updatePlayersInGame = function(e) {
return this.BauCuaLiveBW_InfoView.updatePlayersInGame(e);
};
t.prototype.winResult = function(e) {
return this.BauCuaLiveBW_InfoView.winResult(e);
};
t.prototype.setWinResult = function(e) {
return this.winResultResponse = e;
};
t.prototype.getWinResult = function() {
return this.winResultResponse;
};
t.prototype.setWinVipResult = function(e) {
return this.winVipResultResponse = e;
};
t.prototype.getWinVipResult = function() {
return this.winVipResultResponse;
};
t.prototype.setTotalWinResult = function(e) {
return this.totalWinResultResponse = e;
};
t.prototype.getTotalWinResult = function() {
return this.totalWinResultResponse;
};
t.prototype.winResultVip = function(e) {
return this.BauCuaLiveBW_InfoView.winResultVip(e);
};
t.prototype.updateTotalUserWin = function(e) {
return this.BauCuaLiveBW_InfoView.updateTotalUserWin(e);
};
t.prototype.playerShowBubbleChat = function(e) {
return this.BauCuaLiveBW_InfoView.playerShowBubbleChat(e);
};
t.prototype.updatePlayersUI = function(e) {
return this.BauCuaLiveBW_InfoView.updatePlayersUI(e);
};
t.prototype.updatePlayerInfor = function(e) {
return this.BauCuaLiveBW_InfoView.updatePlayerInfor(e);
};
t.prototype.updateBalanceCurrPlayer = function(e) {
return this.BauCuaLiveBW_InfoView.updateBalanceCurrPlayer(e);
};
t.prototype.updateBalancePlayer = function(e) {
return this.BauCuaLiveBW_InfoView.updateBalancePlayer(e);
};
t.prototype.updateTimer = function(e) {
return this.BauCuaLiveBW_InfoView.updateTimer(e);
};
t.prototype.onNotifyChangePhrase = function(e) {
return this.BauCuaLiveBW_InfoView.onNotifyChangePhrase(e);
};
t.prototype.updatePositionPlayerUI = function(e) {
return this.positionsUI = e;
};
t.prototype.positionPlayerUI = function() {
return this.positionsUI;
};
t.prototype.setAssetView = function(e) {
return this.BauCuaLiveBW_AssetsView = e;
};
t.prototype.getAssetView = function() {
return this.BauCuaLiveBW_AssetsView;
};
t.prototype.createChip = function(e) {
return this.BauCuaLiveBW_AssetsView.createChip(e);
};
t.prototype.getSfNan = function(e) {
return this.BauCuaLiveBW_AssetsView.getSfNan(e);
};
t.prototype.getSfDice = function(e) {
return this.BauCuaLiveBW_AssetsView.getSfDice(e);
};
t.prototype.getColorType = function(e) {
return this.BauCuaLiveBW_AssetsView.getColorType(e);
};
t.prototype.putChipToPool = function(e, t) {
return this.BauCuaLiveBW_AssetsView.putChipToPool(e, t);
};
t.prototype.clearPools = function() {
return this.BauCuaLiveBW_AssetsView.clearPools();
};
t.prototype.setResultView = function(e) {
this.resultView = e;
};
t.prototype.onShowResult = function(e) {
return this.resultView.onShowResult(e);
};
t.prototype.setDicesResult = function(e) {
return this.resultView.setDicesResult(e);
};
t.prototype.setBetView = function(e) {
return this.BauCuaLiveBW_BetView = e;
};
t.prototype.onBet = function(e) {
return this.BauCuaLiveBW_BetView.onBet(e);
};
t.prototype.enableClickBet = function(e) {
return this.BauCuaLiveBW_BetView.enableClickBet(e);
};
t.prototype.disableBetAgain = function(e) {
return this.BauCuaLiveBW_BetView.disableBetAgain(e);
};
t.prototype.playAnimationWin = function(e) {
return this.BauCuaLiveBW_BetView.playAnimationWin(e);
};
t.prototype.stopAnimationWin = function() {
return this.BauCuaLiveBW_BetView.stopAnimationWin();
};
t.prototype.startAnimBigWin = function(e) {
return this.BauCuaLiveBW_BetView.startAnimBigWin(e);
};
t.prototype.playAnimationBigWin = function(e, t) {
return this.BauCuaLiveBW_BetView.playAnimationBigWin(e, t);
};
t.prototype.stopAnimationBigWin = function() {
return this.BauCuaLiveBW_BetView.stopAnimationBigWin();
};
t.prototype.updateTotalUserBetSide = function(e, t) {
return this.BauCuaLiveBW_BetView.updateTotalUserBetSide(e, t);
};
t.prototype.updateTotalUserBet = function(e) {
return this.BauCuaLiveBW_BetView.updateTotalUserBet(e);
};
t.prototype.updateTotalBet = function(e) {
return this.BauCuaLiveBW_BetView.updateTotalBet(e);
};
t.prototype.updateBetOfAccount = function(e) {
return this.BauCuaLiveBW_BetView.updateBetOfAccount(e);
};
t.prototype.setChipsView = function(e) {
return this.BauCuaLiveBW_ChipsView = e;
};
t.prototype.moveChipBet = function(e, t, i, n) {
return this.BauCuaLiveBW_ChipsView.moveChipBet(e, t, i, n);
};
t.prototype.getChipsLose = function(e, t) {
return this.BauCuaLiveBW_ChipsView.getChipsLose(e, t);
};
t.prototype.refundChips = function(e) {
return this.BauCuaLiveBW_ChipsView.refundChips(e);
};
t.prototype.clearAllChips = function() {
return this.BauCuaLiveBW_ChipsView.clearAllChips();
};
t.prototype.initParamChips = function() {
return this.BauCuaLiveBW_ChipsView.initParamChips();
};
t.prototype.updateChipForBetSession = function(e) {
return this.BauCuaLiveBW_ChipsView.updateChipForBetSession(e);
};
t.prototype.clearBetLog = function(e) {
this.betLog = this.betLog.filter(function(t) {
return t.sessionID > e - 1;
});
};
t.prototype.getBetLogBySessionID = function(e) {
return this.betLog.filter(function(t) {
return t.sessionID == e - 1;
});
};
t.prototype.setBetLog = function(e) {
return this.betLog.push(e);
};
t.prototype.getBetLog = function() {
return this.betLog;
};
t.prototype.initBetLog = function() {
return this.betLog = [];
};
t.prototype.setChipWin = function(e, t, i) {
return this.chipsWin.push([ e, t, i ]);
};
t.prototype.getChipsWin = function() {
return this.chipsWin;
};
t.prototype.initChipsWin = function() {
return this.chipsWin = [];
};
t.prototype.setBetLogSession = function(e) {
return this.betLogSession = e;
};
t.prototype.getBetLogSession = function() {
return this.betLogSession;
};
t.prototype.setCurrentState = function(e) {
return this.currentState = e;
};
t.prototype.getCurrentState = function() {
return this.currentState;
};
t.prototype.setIsNan = function(e) {
return this.isNan = e;
};
t.prototype.getIsNan = function() {
return this.isNan;
};
t.prototype.setBauCuaLiveBWSoiCauView = function(e) {
return this.BauCuaLiveBWSoiCauView = e;
};
t.prototype.drawSoiCau = function(e) {
return this.BauCuaLiveBWSoiCauView.drawSoiCau(e);
};
return t;
}();
cc.BauCuaLiveBWController = e;
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWGraphItem: [ function(e, t) {
"use strict";
cc._RF.push(t, "396e9AdqptFwI9x5Qzp9/gh", "BauCuaLiveBWGraphItem");
(function() {
cc.BauCuaLiveBWGraphItem = cc.Class({
extends: cc.Component,
properties: {
spriteDice1: cc.Sprite,
spriteDice2: cc.Sprite,
spriteDice3: cc.Sprite
},
setResultDice: function(e) {
this.spriteDice1.spriteFrame = cc.BauCuaLiveBWController.getInstance().getSfDice(parseInt(e.FirstDice) - 1);
this.spriteDice2.spriteFrame = cc.BauCuaLiveBWController.getInstance().getSfDice(parseInt(e.SecondDice) - 1);
this.spriteDice3.spriteFrame = cc.BauCuaLiveBWController.getInstance().getSfDice(parseInt(e.ThirdDice) - 1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWGraphView: [ function(e, t) {
"use strict";
cc._RF.push(t, "ca1a4a8cZ5F37c/Cb938tUw", "BauCuaLiveBWGraphView");
(function() {
cc.BauCuaLiveBWGraphView = cc.Class({
extends: cc.Component,
properties: {
lbTotalDeer: cc.Label,
lbTotalGourd: cc.Label,
lbTotalRooster: cc.Label,
lbTotalFish: cc.Label,
lbTotalCrab: cc.Label,
lbTotalLobster: cc.Label,
itemDice: cc.Prefab,
layoutDices: cc.Node
},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
this.poolItemDice = new cc.NodePool();
for (var e = 0; e < 50; e++) {
var t = cc.instantiate(this.itemDice);
this.poolItemDice.put(t);
}
},
resetList: function() {
try {
this.lbTotalDeer.string = 0;
this.lbTotalGourd.string = 0;
this.lbTotalRooster.string = 0;
this.lbTotalFish.string = 0;
this.lbTotalCrab.string = 0;
this.lbTotalLobster.string = 0;
this.layoutDices.removeAllChildren(!0);
} catch (e) {}
},
onEnable: function() {
this.resetList();
var e = this;
cc.director.getScheduler().schedule(function() {
e.getSoiCau();
}, this, 1, 0, .2, !1);
this.animation.play("openPopup");
this.totalDeer = 0;
this.totalGourd = 0;
this.totalRooster = 0;
this.totalFish = 0;
this.totalCrab = 0;
this.totalLobster = 0;
},
getSoiCau: function() {
new cc.BauCuaLiveBWSoiCauCommand().execute(this);
},
onResponse: function(e) {
var t = this;
if (e) {
e.map(function(e, i) {
t.calcSumDice(e.FirstDice);
t.calcSumDice(e.SecondDice);
t.calcSumDice(e.ThirdDice);
var n = t.poolItemDice.get();
0 !== i && (n.opacity = 150);
n.getComponent("BauCuaLiveBWGraphItem").setResultDice(e);
n.parent = t.layoutDices;
}, this);
this.lbTotalDeer.string = this.totalDeer;
this.lbTotalGourd.string = this.totalGourd;
this.lbTotalRooster.string = this.totalRooster;
this.lbTotalFish.string = this.totalFish;
this.lbTotalCrab.string = this.totalCrab;
this.lbTotalLobster.string = this.totalLobster;
}
},
onDisable: function() {
this.resetList();
},
calcSumDice: function(e) {
switch (e = parseInt(e)) {
case cc.BauCuaLiveBWBetSide.Deer:
this.totalDeer += 1;
break;

case cc.BauCuaLiveBWBetSide.Gourd:
this.totalGourd += 1;
break;

case cc.BauCuaLiveBWBetSide.Rooster:
this.totalRooster += 1;
break;

case cc.BauCuaLiveBWBetSide.Fish:
this.totalFish += 1;
break;

case cc.BauCuaLiveBWBetSide.Crab:
this.totalCrab += 1;
break;

case cc.BauCuaLiveBWBetSide.Lobster:
this.totalLobster += 1;
}
},
closeClicked: function() {
this.animation.play("closePopup");
var e = this;
cc.director.getScheduler().schedule(function() {
e.animation.stop();
cc.BauCuaLiveBWPopupController.getInstance().destroyGraphView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWGroupItem: [ function(e, t) {
"use strict";
cc._RF.push(t, "7add1HPBClPqrz3zhdpp5Gb", "BauCuaLiveBWGroupItem");
(function() {
cc.BauCuaLiveBWGroupItem = cc.Class({
extends: cc.Component,
properties: {
avatar: cc.Avatar,
lbSId: cc.Label,
lbNickName: cc.Label,
lbBalance: cc.Label,
lbSTT: cc.Label
},
updateItem: function(e, t) {
var i = e.Account, n = i.Avatar;
n <= 0 && (n = 1);
this.lbSTT.string = t + 1;
this.lbSId.string = cc.Config.getInstance().getServiceNameNoFormat(i.ServiceID);
this.avatar.setAvatar(cc.AccountController.getInstance().getAvatarImage(n));
this.lbNickName.string = i.NickName;
this.lbBalance.string = cc.Tool.getInstance().formatNumber(i.Balance);
this.item = e;
this.itemID = t;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWGroupUserCommand: [ function(e, t) {
"use strict";
cc._RF.push(t, "19e453pPjZJpJfPQq5c9nyA", "BauCuaLiveBWGroupUserCommand");
(function() {
var e;
e = function() {
function e() {}
e.prototype.execute = function(e) {
var t = cc.SubdomainName.BAUCUA_LIVE_BIGWIN;
return cc.ServerConnector.getInstance().sendRequest(t, "api/BauCua/GetPlayersNotInGame", function(t) {
var i = JSON.parse(t);
return e.onGetGroupUserResponse(i);
});
};
return e;
}();
cc.BauCuaLiveBWGroupUserCommand = e;
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWGroupUserListView: [ function(e, t) {
"use strict";
cc._RF.push(t, "02a0ahco7FBkajpBuI1wSwg", "BauCuaLiveBWGroupUserListView");
(function() {
cc.BauCuaLiveBWGroupUserListView = cc.Class({
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
for (var e = this.content.children, t = e.length - 1; t >= 0; t--) this.content.removeChild(e[t]);
}
},
getPositionInView: function(e) {
var t = e.parent.convertToWorldSpaceAR(e.position);
return this.scrollView.node.convertToNodeSpaceAR(t);
},
initialize: function(e) {
this.messages = e;
var t = this.messages.length;
this.content.height = t * (this.itemTemplate.height + this.spacing) + this.spacing;
for (var i = Math.min(this.spawnCount, t), n = 0; n < i; ++n) {
var o = cc.instantiate(this.itemTemplate);
this.content.addChild(o);
o.setPosition(0, -o.height * (.5 + n) - this.spacing * (n + 1));
o.getComponent(cc.BauCuaLiveBWGroupItem).updateItem(this.messages[n], n);
this.items.push(o);
}
this.rootContentY = this.content.y;
},
update: function(e) {
this.updateTimer += e;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var t = this.items, i = this.bufferZone, n = this.scrollView.content.y < this.lastContentPosY, o = (this.itemTemplate.height + this.spacing) * t.length, a = 0; a < t.length; ++a) {
var s = this.getPositionInView(t[a]);
if (n) {
if (s.y < -i && t[a].y + o < 0) {
t[a].y = t[a].y + o;
var c = t[a].getComponent(cc.BauCuaLiveBWGroupItem), r = c.itemID - t.length;
c.updateItem(this.messages[r], r);
}
} else if (s.y > i && t[a].y - o > -this.content.height) {
t[a].y = t[a].y - o;
r = (c = t[a].getComponent(cc.BauCuaLiveBWGroupItem)).itemID + t.length;
c.updateItem(this.messages[r], r);
}
}
this.lastContentPosY = this.scrollView.content.y;
}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWGroupUserView: [ function(e, t) {
"use strict";
cc._RF.push(t, "73c3fV3e6ZA47RhTiOJzy8M", "BauCuaLiveBWGroupUserView");
(function() {
cc.BauCuaLiveBWGroupUserView = cc.Class({
extends: cc.Component,
properties: {
groupUserListView: cc.BauCuaLiveBWGroupUserListView
},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
},
onEnable: function() {
this.animation.play("openPopup");
},
getGroupUser: function() {
new cc.BauCuaLiveBWGroupUserCommand().execute(this);
},
onGetGroupUserResponse: function(e) {
var t = e;
if (null !== t && t.length > 0) {
this.groupUserListView.resetList();
this.groupUserListView.initialize(t);
}
},
closeClicked: function() {
this.groupUserListView.resetList();
cc.director.getScheduler().schedule(function() {
cc.BauCuaLiveBWPopupController.getInstance().destroyGroupUserView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWHelpView: [ function(e, t) {
"use strict";
cc._RF.push(t, "f7f84s0VGJMuIv1q938fMFn", "BauCuaLiveBWHelpView");
(function() {
cc.BauCuaLiveBWHelpView = cc.Class({
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
var e = this;
cc.director.getScheduler().schedule(function() {
e.animation.stop();
e.closeFinished();
}, this, 1, 0, .12, !1);
},
closeFinished: function() {
cc.BauCuaLiveBWPopupController.getInstance().destroyHelpView();
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWHistoryItem: [ function(e, t) {
"use strict";
cc._RF.push(t, "dc7c8r5YINAQKzL6wQQGL86", "BauCuaLiveBWHistoryItem");
(function() {
cc.BauCuaLiveBWHistoryItem = cc.Class({
extends: cc.Component,
properties: {
lbSession: cc.Label,
lbTime: cc.Label,
lbBet: cc.Label,
lbWin: cc.Label,
spriteDice1: cc.Sprite,
spriteDice2: cc.Sprite,
spriteDice3: cc.Sprite,
spriteDiceBet: cc.Sprite
},
updateItem: function(e, t) {
this.lbSession.string = "#" + e.SessionID;
this.lbTime.string = cc.Tool.getInstance().convertUTCTime(e.CreateTime);
var i = cc.BauCuaLiveBWController.getInstance(), n = -1 != e.Dice1;
this.activeResultDices(n);
if (n) {
this.spriteDice1.spriteFrame = i.getSfDice(parseInt(e.Dice1) - 1);
this.spriteDice2.spriteFrame = i.getSfDice(parseInt(e.Dice2) - 1);
this.spriteDice3.spriteFrame = i.getSfDice(parseInt(e.Dice3) - 1);
}
this.spriteDiceBet.spriteFrame = i.getSfDice(parseInt(e.GateID) - 1);
this.lbBet.string = cc.Tool.getInstance().formatNumber(e.Bet);
this.lbWin.string = cc.Tool.getInstance().formatNumber(e.Award);
this.item = e;
this.itemID = t;
},
activeResultDices: function(e) {
this.spriteDice1.node.active = e;
this.spriteDice2.node.active = e;
this.spriteDice3.node.active = e;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWHistoryListView: [ function(e, t) {
"use strict";
cc._RF.push(t, "5d39c1JCY5F3IJ8Mo6hRrVp", "BauCuaLiveBWHistoryListView");
(function() {
cc.BauCuaLiveBWHistoryListView = cc.Class({
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
for (var e = this.content.children, t = e.length - 1; t >= 0; t--) this.content.removeChild(e[t]);
}
},
getPositionInView: function(e) {
var t = e.parent.convertToWorldSpaceAR(e.position);
return this.scrollView.node.convertToNodeSpaceAR(t);
},
initialize: function(e) {
this.messages = e;
var t = this.messages.length;
this.content.height = t * (this.itemTemplate.height + this.spacing) + this.spacing;
for (var i = Math.min(this.spawnCount, t), n = 0; n < i; ++n) {
var o = cc.instantiate(this.itemTemplate);
this.content.addChild(o);
o.setPosition(0, -o.height * (.5 + n) - this.spacing * (n + 1));
o.getComponent(cc.BauCuaLiveBWHistoryItem).updateItem(this.messages[n], n);
this.items.push(o);
}
this.rootContentY = this.content.y;
},
update: function(e) {
this.updateTimer += e;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var t = this.items, i = this.bufferZone, n = this.scrollView.content.y < this.lastContentPosY, o = (this.itemTemplate.height + this.spacing) * t.length, a = 0; a < t.length; ++a) {
var s = this.getPositionInView(t[a]);
if (n) {
if (s.y < -i && t[a].y + o < 0) {
t[a].y = t[a].y + o;
var c = t[a].getComponent(cc.BauCuaLiveBWHistoryItem), r = c.itemID - t.length;
c.updateItem(this.messages[r], r);
}
} else if (s.y > i && t[a].y - o > -this.content.height) {
t[a].y = t[a].y - o;
r = (c = t[a].getComponent(cc.BauCuaLiveBWHistoryItem)).itemID + t.length;
c.updateItem(this.messages[r], r);
}
}
this.lastContentPosY = this.scrollView.content.y;
}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWHistoryView: [ function(e, t) {
"use strict";
cc._RF.push(t, "0d89bcU6rJPJLCbWlwQaGYU", "BauCuaLiveBWHistoryView");
(function() {
cc.BauCuaLiveBWHistoryView = cc.Class({
extends: cc.Component,
properties: {
historyListView: cc.BauCuaLiveBWHistoryListView
},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
this.node.zIndex = 99;
},
onEnable: function() {
var e = this;
cc.director.getScheduler().schedule(function() {
e.getHistory();
}, this, 1, 0, .2, !1);
this.animation.play("openPopup");
},
getHistory: function() {
new cc.BauCuaLiveBWHistoryCommand().execute(this);
},
onGetHistoryResponse: function(e) {
var t = e;
if (null !== t && t.length > 0) {
this.historyListView.resetList();
this.historyListView.initialize(t);
}
},
closeClicked: function() {
this.historyListView.resetList();
this.animation.play("closePopup");
var e = this;
cc.director.getScheduler().schedule(function() {
e.animation.stop();
cc.BauCuaLiveBWPopupController.getInstance().destroyHistoryView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWInfoView: [ function(e, t) {
"use strict";
cc._RF.push(t, "4d7c8W1Gg5C67+82gS9PHtG", "BauCuaLiveBWInfoView");
(function() {
cc.BauCuaLiveBWInfoView = cc.Class({
extends: cc.Component,
properties: {
lbTime: cc.Label,
lbSessionID: cc.Label,
lbStatus: cc.Label,
lbJackpot: cc.Label,
lbTotalPlayer: cc.Label,
lbDealerName: cc.Label,
lstPlayers: [ cc.BauCuaLiveBWPlayer ],
progressTimer: cc.ProgressBar,
skeletonBat: sp.Skeleton,
skeletonDealer: sp.Skeleton,
batNan: cc.Node,
nodeVi: cc.Node,
lbTotalUserWin: cc.Label
},
onLoad: function() {
this.controller = cc.BauCuaLiveBWController.getInstance();
this.controller.setInfoView(this);
this.activeTimer(!1);
this.showStatus(null);
this.currentState = null;
this.interval = null;
this.time = 0;
this.currPlayer = this.lstPlayers[0];
this.skeletonBat.node.active = !0;
this.animTotalUserWin = this.lbTotalUserWin.node.getComponent(cc.Animation);
this.nodeProgressTimer = this.progressTimer.node.parent;
this.nodeBarTimer = this.progressTimer.node.children[0];
this.maxtime = null;
},
onEnable: function() {
this.resetPlate();
},
onDestroy: function() {
try {
this.interval && clearInterval(this.interval);
} catch (e) {}
},
activeOpenPlate: function() {
var e = this.controller.getIsNan();
this.nodeVi.active = !0;
this.batNan.active = e;
this.skeletonBat.node.active = !e;
},
forceOpenPlate: function(e) {
this.nodeVi.active = !0;
var t = this.controller.getIsNan();
!t && e || !e && t ? this.playAnimBat(cc.BauCuaLiveBWAnim.OPEN_PLATE) : this.batNan.active = !1;
},
resetPlate: function() {
this.nodeVi.active = !1;
this.batNan.active = !1;
this.batNan.position = cc.v2(0, 47);
},
playAnimBat: function(e) {
this.batNan.active = !1;
this.skeletonBat.clearTracks();
this.skeletonBat.setToSetupPose();
this.skeletonBat.setAnimation(1, e, !1);
this.skeletonBat.node.getChildByName("mobat").getComponent(sp.Skeleton).setAnimation(1, e, !1);
},
onNotifyChangePhrase: function(e) {
var t = this, i = parseInt(e.Phrase);
this.lbJackpot.string = cc.Tool.getInstance().formatNumber(e.Jackpot);
this.lbDealerName.string = e.DealerName;
this.maxtime = e.TotalBetTime;
switch (i) {
case cc.BauCuaLiveBWPharse.None:
if (this.currentState !== i) {
this.controller.enableClickBet(!1);
this.showStatus(null);
}
break;

case cc.BauCuaLiveBWPharse.Waiting:
case cc.BauCuaLiveBWPharse.Shaking:
if (this.currentState !== i) {
this.resetPlate();
this.controller.enableClickBet(!1);
this.controller.stopAnimationWin();
console.log("Stop anim waiting");
this.controller.clearAllChips();
this.controller.initParamChips();
this.controller.clearBetLog(this.controller.getBetLogSession());
this.controller.setBetLogSession(this.controller.getBetLogSession() + 1);
this.resetPlayerUI();
this.updateTotalUserWin(null);
this.playAnimBat(cc.BauCuaLiveBWAnim.CLOSE_PLATE);
this.showStatus("CHỜ PHIÊN MỚI");
}
break;

case cc.BauCuaLiveBWPharse.Betting:
if (this.currentState !== i) {
this.resetPlate();
this.playAnimBat(cc.BauCuaLiveBWAnim.SHAKING);
this.controller.setWinResult(null);
this.controller.setWinVipResult(null);
this.controller.setTotalWinResult(null);
this.controller.enableClickBet(!0);
this.activeTimer(!0);
this.showStatus("ĐẶT CỬA");
}
break;

case cc.BauCuaLiveBWPharse.EndBetting:
if (this.currentState !== i) {
this.controller.enableClickBet(!1);
this.showStatus("HẾT THỜI GIAN ĐẶT");
null != e.BigWinString && this.controller.startAnimBigWin(e.BigWinString);
}
break;

case cc.BauCuaLiveBWPharse.OpenPlate:
if (this.currentState !== i) {
this.playAnimBat(cc.BauCuaLiveBWAnim.CLOSE_PLATE);
this.skeletonBat.setCompleteListener(function() {
t.resetPlate();
});
this.controller.enableClickBet(!1);
this.controller.setDicesResult(e);
this.activeOpenPlate();
this.activeTimer(!1);
this.controller.getIsNan() || this.forceOpenPlate(!0);
this.showStatus("MỞ BÁT");
}
break;

case cc.BauCuaLiveBWPharse.ShowResult:
if (this.currentState !== i) {
this.controller.initChipsWin();
this.forceOpenPlate(!1);
this.controller.enableClickBet(!1);
this.controller.onShowResult(e);
this.activeTimer(!0);
this.showStatus(null);
}
}
this.controller.setCurrentState(i);
this.currentState = i;
this.updateSessionId(e.SessionID);
this.controller.updateTotalBet(e);
},
updateSessionInfo: function() {},
updatePlayersInGame: function(e) {
this.lbTotalPlayer.string = e;
},
resetPlayerUI: function() {
this.lstPlayers.map(function(e) {
e.resetPlayerResultUI();
}, this);
},
updatePlayerInfor: function(e) {
this.currPlayer.registerPlayer(e.Account);
},
updatePlayersUI: function(e) {
var t = this;
this.positionsUI = [ 0, 0, 0, 0, 0, 0, 0 ];
var i = 0;
this.positionsUI[i] = lngui.UserManager.instance.mainUserInfo.AccountID;
i++;
e.map(function(e) {
if (e.AccountID != lngui.UserManager.instance.mainUserInfo.AccountID && i <= 6) {
t.positionsUI[i] = e.AccountID;
i++;
}
}, this);
this.positionsUI.forEach(function(t, i) {
if (0 != t) try {
var n = e.filter(function(e) {
return e.AccountID == t;
});
n.length > 0 && 0 != i && this.lstPlayers[i].registerPlayer(n[0].Account);
} catch (e) {} else try {
this.lstPlayers[i].unRegisterPlayer();
} catch (e) {}
}, this);
this.controller.updatePositionPlayerUI(this.positionsUI);
},
updateBalanceCurrPlayer: function(e) {
this.currPlayer.updateChipNormal(e);
},
updateBalancePlayer: function(e) {
var t = e[0], i = e[3];
if (this.positionsUI) {
var n = this.positionsUI.indexOf(t);
-1 != n && this.lstPlayers[n].updateChip(i);
}
},
winResult: function(e) {
this.currPlayer.playerResultUI(e.Award, e.Balance);
},
winResultVip: function(e) {
var t = this;
e.map(function(e) {
if (t.positionsUI.includes(e.AccountID) && e.AccountID != lngui.UserManager.instance.mainUserInfo.AccountID) {
var i = t.positionsUI.indexOf(e.AccountID);
t.lstPlayers[i].playerResultUI(e.Award, e.Balance);
}
}, this);
},
showStatus: function(e) {
if (null != e) {
this.lbStatus.string = e;
this.lbStatus.node.parent.active = !0;
this.lbStatus.node.getComponent(cc.Animation).play("notify-checkchi");
} else this.lbStatus.node.parent.active = !1;
},
activeTimer: function(e) {
this.lbTime.node.parent.active = e;
this.interval && !e && clearInterval(this.interval);
},
updateSessionId: function(e) {
this.lbSessionID.string = ": #" + e;
},
updateTimer: function(e) {
var t = this, i = 1e3 * this.maxtime;
if (this.nodeProgressTimer) if (this.nodeBarTimer && 1 == this.nodeBarTimer.active && !this.isLockTimerProgress && this.currentState == cc.BauCuaLiveBWPharse.Betting) {
null != this.timerInterval && clearInterval(this.timerInterval);
this.isLockTimerProgress = !0;
this.timer = 1e3 * e;
var n = this.nodeBarTimer.getComponent(cc.Sprite);
try {
n && (n.fillRange = t.timer / i);
this.timerInterval = setInterval(function() {
t.timer -= 100;
if (null != n && null != n.fillRange) try {
n.fillRange = t.timer / i;
} catch (e) {
clearInterval(t.timerInterval);
} else clearInterval(t.timerInterval);
if (t.timer <= 0) {
clearInterval(t.timerInterval);
t.isLockTimerProgress = !1;
n = null;
}
}, 100);
} catch (e) {
clearInterval(this.timerInterval);
}
} else this.isLockTimerProgress || (this.nodeProgressTimer.active = !1);
},
startTimer: function() {
if (this.time < 0) this.time = 0; else {
this.lbTime.string = this.time;
this.time--;
}
},
updateRoomTimer: function(e) {
if (this.lbTime) {
var t = e;
this.timeInt = t;
if (t > 0) {
this.lbTime.string = t;
this.currentState === cc.BauCuaLiveBWPharse.EndBetting ? this.lbTime.node.color = cc.Color.RED : this.lbTime.node.color = cc.Color.GREEN;
[ cc.BauCuaLiveBWPharse.Waiting, cc.BauCuaLiveBWPharse.None, cc.BauCuaLiveBWPharse.Shaking, cc.BauCuaLiveBWPharse.ShowResult, cc.BauCuaLiveBWPharse.OpenPlate ].includes(this.currentState) && (this.lbTime.node.color = cc.Color.WHITE);
}
}
},
playerShowBubbleChat: function(e) {
0 == e[4] && e[3] != lngui.UserManager.instance.mainUserInfo.AccountID || (cc.ChatRoomController.getInstance().checkIsEmotion(e) ? this.lstPlayers.forEach(function(t) {
var i = t.nickName;
e[0] === i && t.showEmotion(cc.ChatRoomController.getInstance().getIndexEmotion(e), e);
}) : this.lstPlayers.forEach(function(t) {
var i = t.nickName;
e[0] === i && t.showBubbleChat(e);
}));
},
updateTotalUserWin: function(e) {
this.lbTotalUserWin.node.active = !1;
if (null != e && 0 != e) {
this.lbTotalUserWin.string = "+" + cc.Tool.getInstance().formatNumber(e);
this.lbTotalUserWin.node.active = !0;
this.lbTotalUserWin.node.scaleY = 0;
this.animTotalUserWin.play("xxWin");
}
},
onDisableProgress: function() {
this.currentState = null;
this.maxTimeBetting = 2e4;
this.timer = 0;
this.isLockTimerProgress = !1;
this.nodeBarTimer.getComponent(cc.Sprite).fillRange = 0;
null != this.timerInterval && clearInterval(this.timerInterval);
this.timerInterval = null;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWMap: [ function(e, t) {
"use strict";
cc._RF.push(t, "30eb0YssAhFo5X1ZxBaatFb", "BauCuaLiveBWMap");
cc.BauCuaLiveBWMapChip = {
"1K": 0,
"5K": 1,
"10K": 2,
"20K": 3,
"50K": 4,
"100K": 5,
"200K": 6,
"500K": 7,
"1M": 8,
"2M": 9,
"5M": 10,
"10M": 11,
"20M": 12
};
cc.BauCuaLiveBWMapChipSpriteFrame = {
1e3: 0,
5e3: 1,
1e4: 2,
2e4: 3,
5e4: 4,
1e5: 5,
2e5: 6,
5e5: 7,
1e6: 8,
2e6: 9,
5e6: 10,
1e7: 11,
2e7: 12
};
cc._RF.pop();
}, {} ],
BauCuaLiveBWMenuView: [ function(e, t) {
"use strict";
cc._RF.push(t, "efc15aIjA5AgabgMvkEdVAG", "BauCuaLiveBWMenuView");
(function() {
cc.BauCuaLiveBWMenuView = cc.Class({
extends: cc.Component,
properties: {
layoutMenu: cc.Node,
nodeBtnHideMenu: cc.Node,
arrow: cc.Node
},
onLoad: function() {
this.nodeBtnHideMenu.active = !1;
},
onClickShowMenu: function() {
this.nodeBtnHideMenu.active = !0;
cc.tween(this.layoutMenu).to(.3, {
position: cc.v2(-668, this.layoutMenu.y)
}).start();
cc.tween(this.arrow).to(.3, {
scaleX: 1
}).start();
},
onClickHideMenu: function() {
cc.tween(this.layoutMenu).to(.3, {
position: cc.v2(-965, this.layoutMenu.y)
}).start();
cc.tween(this.arrow).to(.3, {
scaleX: -1
}).start();
this.nodeBtnHideMenu.active = !1;
},
onClickExit: function() {
lngui.UIScreenManager.instance.popToRootScreen();
},
onClickSetting: function() {}
});
}).call();
cc._RF.pop();
}, {} ],
BauCuaLiveBWPharse: [ function(e, t) {
"use strict";
cc._RF.push(t, "8037eYfXAZEKLfDgSPaPbay", "BauCuaLiveBWPharse");
cc.BauCuaLiveBWPharse = {
None: -1,
Waiting: 0,
Shaking: 1,
Betting: 2,
EndBetting: 3,
OpenPlate: 4,
ShowResult: 5
};
cc._RF.pop();
}, {} ],
BauCuaLiveBWPlayer: [ function(e, t) {
"use strict";
cc._RF.push(t, "bb8abMJOdJOxZQusbvBuDs5", "BauCuaLiveBWPlayer");
(function() {
cc.BauCuaLiveBWPlayer = cc.Class({
extends: cc.Component,
properties: {
lbSID: cc.Label,
lbName: cc.Label,
nickName: ""
},
onLoad: function() {
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
},
showEmotion: function(e, t) {
this.nodeBubble.active = !1;
this.nodeEmotion.active = !0;
this.skeEmotion.clearTracks();
this.skeEmotion.setToSetupPose();
15 === e ? this.skeEmotion.setAnimation(e, "16-extreme-sexy-girl", !0) : this.skeEmotion.setAnimation(e, t[1], !0);
this.animation.play("showBubbleChat");
},
showBubbleChat: function(e) {
this.nodeBubble.active = !0;
this.nodeEmotion.active = !1;
this.lbBubbleChat.string = e[1];
this.animation.play("showBubbleChat");
},
resetPlayerResultUI: function() {
this.lbWin.node.active = !1;
},
playerResultUI: function(e, t) {
this.lbWin.string = "+" + cc.Tool.getInstance().formatNumber(e);
this.lbWin.node.active = !0;
this.lbWin.node.scaleY = 0;
this.animLbWin.play("xxWin");
t && this.updateChip(t);
},
updateChip: function(e) {
this.lbChip.tweenValueto(e);
},
updateChipNormal: function(e) {
this.lbChip.label.string = cc.Tool.getInstance().formatNumber(e);
},
onDestroy: function() {
this.unRegisterPlayer();
},
registerPlayer: function(e) {
var t = e.Avatar;
(t <= 0 || t > 9) && (t = Math.floor(9 * Math.random()));
this.avatar.setAvatar(cc.BauCuaLiveBWController.getInstance().getAvatars()[t - 1]);
this.nodeInfo.active = !0;
this.nickName = e.NickName;
if (e.ServiceID) {
this.lbSID.string = "";
this.lbName.string = cc.Config.getInstance().formatName(e.NickName, 7);
} else {
this.lbSID.string = "";
this.lbName.string = cc.Config.getInstance().formatName(e.NickName, 10);
}
this.lbChip.tweenValueto(e.Balance);
this.nodeInfo.active = !0;
},
unRegisterPlayer: function() {
this.avatar.setAvatar(cc.BauCuaLiveBWController.getInstance().getAvatarDef());
this.nodeInfo.active = !1;
try {
this.lbWin.node.active = !1;
this.nodeBubble.active = !1;
this.nodeEmotion.active = !1;
} catch (e) {}
},
updateConnectionStatus: function(e) {
switch (e) {
case cc.ConnectionStatus.DISCONNECTED:
case cc.ConnectionStatus.CONNECTED:
}
},
updatePlayerStatus: function(e) {
this.playerStatus = e.toString();
e.toString() === cc.PlayerStatus.INGAME ? this.node.opacity = 255 : this.node.opacity = 150;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWPopupController: [ function(e, t) {
"use strict";
cc._RF.push(t, "f2180fxWgdCyJLeUhIYXJH+", "BauCuaLiveBWPopupController");
(function() {
var e;
e = function() {
var e;
function t() {}
e = void 0;
t.getInstance = function() {
void 0 === e && (e = this);
return e.prototype;
};
t.prototype.setPopupView = function(e) {
return this.BauCuaLiveBWPopupView = e;
};
t.prototype.createTopView = function() {
return this.BauCuaLiveBWPopupView.createTopView();
};
t.prototype.destroyTopView = function() {
return this.BauCuaLiveBWPopupView.destroyTopView();
};
t.prototype.createHelpView = function() {
return this.BauCuaLiveBWPopupView.createHelpView();
};
t.prototype.destroyHelpView = function() {
return this.BauCuaLiveBWPopupView.destroyHelpView();
};
t.prototype.createHistoryView = function() {
return this.BauCuaLiveBWPopupView.createHistoryView();
};
t.prototype.destroyHistoryView = function() {
return this.BauCuaLiveBWPopupView.destroyHistoryView();
};
t.prototype.createGroupUserView = function() {
return this.BauCuaLiveBWPopupView.createGroupUserView();
};
t.prototype.destroyGroupUserView = function() {
return this.BauCuaLiveBWPopupView.destroyGroupUserView();
};
t.prototype.createGraphView = function() {
return this.BauCuaLiveBWPopupView.createGraphView();
};
t.prototype.destroyGraphView = function() {
return this.BauCuaLiveBWPopupView.destroyGraphView();
};
return t;
}();
cc.BauCuaLiveBWPopupController = e;
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWPopupView: [ function(e, t) {
"use strict";
cc._RF.push(t, "c60c31sOLdGNrySyp1P5CrV", "BauCuaLiveBWPopupView");
(function() {
cc.BauCuaLiveBWPopupView = cc.Class({
extends: cc.Component,
properties: {
prefabGroupUser: cc.Prefab,
prefabBetLines: cc.Prefab,
prefabHelp: cc.Prefab,
prefabHistory: cc.Prefab,
prefabTop: cc.Prefab,
prefabSessionDetail: cc.Prefab
},
onLoad: function() {
cc.BauCuaLiveBWPopupController.getInstance().setPopupView(this);
},
createGroupUserView: function() {
this.nodeGroupUser = this.createView(this.prefabGroupUser);
lngui.UIWebViewManager.hideAll();
},
destroyGroupUserView: function() {
this.nodeGroupUser && this.nodeGroupUser.destroy();
lngui.UIWebViewManager.showAll();
},
createSessionDetailView: function() {
this.nodeSessionDetailView = this.createView(this.prefabSessionDetail);
},
destroySessionDetailView: function() {
this.nodeSessionDetailView && this.nodeSessionDetailView.destroy();
},
createBetLinesView: function() {
this.nodeBetLinesView = this.createView(this.prefabBetLines);
},
destroyBetLinesView: function() {
this.nodeBetLinesView && this.nodeBetLinesView.destroy();
},
createTopView: function() {
this.nodeTopView = this.createView(this.prefabTop);
lngui.UIWebViewManager.hideAll();
},
destroyTopView: function() {
this.nodeTopView && this.nodeTopView.destroy();
lngui.UIWebViewManager.showAll();
},
createHelpView: function() {
this.nodeHelpView = this.createView(this.prefabHelp);
lngui.UIWebViewManager.hideAll();
},
destroyHelpView: function() {
this.nodeHelpView && this.nodeHelpView.destroy();
lngui.UIWebViewManager.showAll();
},
createHistoryView: function() {
this.nodeHistoryView = this.createView(this.prefabHistory);
lngui.UIWebViewManager.hideAll();
},
destroyHistoryView: function() {
this.nodeHistoryView && this.nodeHistoryView.destroy();
lngui.UIWebViewManager.showAll();
},
createView: function(e) {
var t = cc.instantiate(e);
t.parent = this.node;
t.setPosition(-this.node.x, -this.node.y);
return t;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWResultView: [ function(e, t) {
"use strict";
cc._RF.push(t, "33e6dvqvY5CCq9Vtp8WYsah", "BauCuaLiveBWResultView");
(function() {
cc.BauCuaLiveBWResultView = cc.Class({
extends: cc.Component,
properties: {
spriteFistDice: cc.Sprite,
spriteSecondDice: cc.Sprite,
spriteThirdDice: cc.Sprite,
nodeBatNan: cc.Node,
nodeBat: cc.Node,
skeletonBat: sp.Skeleton
},
onLoad: function() {
this.controller = cc.BauCuaLiveBWController.getInstance();
this.controller.setResultView(this);
this.listBetSide = [ 1, 2, 3, 4, 5, 6 ];
},
setDicesResult: function(e) {
var t = e.Result, i = parseInt(t.Dice1), n = parseInt(t.Dice2), o = parseInt(t.Dice3);
this.setDiceResult(this.spriteFistDice, i - 1);
this.setDiceResult(this.spriteSecondDice, n - 1);
this.setDiceResult(this.spriteThirdDice, o - 1);
},
onShowResult: function(e) {
var t = this;
this.setDicesResult(e);
var i = e.Result, n = [ parseInt(i.Dice1), parseInt(i.Dice2), parseInt(i.Dice3) ];
(n = cc.Tool.getInstance().arrUnique(n)).map(function(e) {
return t.controller.playAnimationWin(e);
});
var o = n, a = [];
this.listBetSide.map(function(e) {
o.includes(e) || a.push(e);
});
if (!cc.game.isPaused()) {
a.map(function(e) {
t.controller.getChipsLose(e);
});
cc.director.getScheduler().schedule(function() {
var e = this;
o.map(function(t) {
e.controller.refundChips(t);
}, this);
}, this, 0, 0, 1, !1);
cc.director.getScheduler().schedule(function() {
var e = this.controller.getWinResult();
e && this.controller.winResult(e);
var t = this.controller.getWinVipResult();
t && this.controller.winResultVip(t);
var i = this.controller.getTotalWinResult();
i && this.controller.updateTotalUserWin(i);
}, this, 0, 0, 3.5, !1);
}
},
setDiceResult: function(e, t) {
e.spriteFrame = this.controller.getSfDice(t);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWSettingView: [ function(e, t) {
"use strict";
cc._RF.push(t, "c7ed5es32xH97xWnv4fsDIM", "BauCuaLiveBWSettingView");
(function() {
cc.BauCuaLiveBWSettingView = cc.Class({
extends: cc.Component,
properties: {
animation: cc.Animation,
nodeOffset: cc.Node,
spriteSound: cc.Sprite,
sfSounds: [ cc.SpriteFrame ]
},
onLoad: function() {
this.openPopup = !1;
},
start: function() {
this.spriteSound.spriteFrame = this.sound ? this.sfSounds[0] : this.sfSounds[1];
cc.AudioController.getInstance().enableSound(this.sound);
cc.AudioController.getInstance().enableMusic(this.sound);
},
openSettingClicked: function() {
if (0 == this.openPopup) {
this.openPopup = !0;
this.animation.play("openSettingMenu");
} else {
this.openPopup = !1;
this.animation.play("closeSettingMenu");
}
},
closeSettingClicked: function() {
this.animation.play("closeSettingMenu");
},
soundClicked: function() {
this.sound = !this.sound;
this.spriteSound.spriteFrame = this.sound ? this.sfSounds[0] : this.sfSounds[1];
cc.AudioController.getInstance().enableSound(this.sound);
cc.AudioController.getInstance().enableMusic(this.sound);
},
musicClicked: function() {
this.music = !this.music;
this.spriteMusic.spriteFrame = this.music ? this.sfMusics[0] : this.sfMusics[1];
cc.AudioController.getInstance().enableMusic(this.music);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWSoiCauView: [ function(e, t) {
"use strict";
cc._RF.push(t, "d3768tReyROQIe92GxQZYfg", "BauCuaLiveBWSoiCauView");
(function() {
cc.BauCuaLiveBWSoiCauView = cc.Class({
extends: cc.Component,
properties: {
contentSoiCau: cc.Node,
nodeContentSC: cc.Node,
nodeItemTemplate: cc.Node,
spfDice: [ cc.SpriteFrame ],
percentSide: [ cc.Label ]
},
onLoad: function() {
cc.BauCuaLiveBWController.getInstance().setBauCuaLiveBWSoiCauView(this);
},
drawSoiCau: function(e) {
if (Array.isArray(e) && 0 !== e.length) if (this.nodeContentSC) {
this.resetDraw();
for (var t = 0; t < e.length; t++) {
var i = e[t], n = cc.instantiate(this.nodeItemTemplate);
n.active = !0;
var o = n.getComponentsInChildren(cc.Sprite);
o[0].node.active = t % 2 == 0;
if (o.length >= 3) {
o[1].spriteFrame = this.spfDice[i.FirstDice - 1];
o[2].spriteFrame = this.spfDice[i.SecondDice - 1];
o[3].spriteFrame = this.spfDice[i.ThirdDice - 1];
} else cc.warn("[drawSoiCau] nodeItemTemplate thiếu Sprite con");
this.nodeContentSC.addChild(n);
}
this.getSide(e);
} else cc.warn("[drawSoiCau] nodeContentSC chưa được gán trong Editor!"); else cc.warn("[drawSoiCau] List không hợp lệ:", e);
},
getSide: function(e) {
if (Array.isArray(e) && 0 !== e.length) {
for (var t = [ 0, 0, 0, 0, 0, 0 ], i = 0, n = 0; n < e.length; n++) {
var o = e[n];
[ o.FirstDice, o.SecondDice, o.ThirdDice ].forEach(function(e) {
if (e >= 1 && e <= 6) {
t[e - 1]++;
i++;
}
});
}
for (var a = 0; a < 6; a++) {
var s = i > 0 ? (t[a] / i * 100).toFixed(0) : "0";
this.percentSide[a] && (this.percentSide[a].string = s + "%");
}
} else cc.warn("[getSide] List không hợp lệ:", e);
},
resetDraw: function() {
if (this.nodeContentSC) for (var e = this.nodeContentSC.children, t = e.length - 1; t >= 0; t--) this.nodeContentSC.removeChild(e[t]); else cc.warn("[resetDraw] nodeContentSC null");
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWTopItem: [ function(e, t) {
"use strict";
cc._RF.push(t, "fe9c3u+Lw1Jjp0y6Q4Dnc/S", "BauCuaLiveBWTopItem");
(function() {
cc.BauCuaLiveBWTopItem = cc.Class({
extends: cc.Component,
properties: {
lbRank: cc.Label,
lbSID: cc.Label,
lbNickName: cc.Label,
lbTotalWin: cc.Label,
spriteTop: cc.Sprite,
spTop: [ cc.SpriteFrame ],
fontName: cc.Font
},
updateItem: function(e, t) {
this.spriteTop.node.active = !1;
if (t < 3) {
this.lbRank.node.active = !1;
this.spriteTop.node.active = !0;
this.spriteTop.spriteFrame = this.spTop[t];
} else {
this.lbRank.node.active = !0;
this.spriteTop.node.active = !1;
this.lbRank.string = t + 1;
}
this.lbSID.string = cc.Config.getInstance().getServiceNameNoFormat(e.ServiceID);
this.lbNickName.string = e.DisplayName;
this.lbTotalWin.string = cc.Tool.getInstance().formatNumber(e.Award);
this.item = e;
this.itemID = t;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWTopListView: [ function(e, t) {
"use strict";
cc._RF.push(t, "26f11Iv7iBMOLYtCYQ0Pch8", "BauCuaLiveBWTopListView");
(function() {
cc.BauCuaLiveBWTopListView = cc.Class({
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
for (var e = this.content.children, t = e.length - 1; t >= 0; t--) this.content.removeChild(e[t]);
}
},
getPositionInView: function(e) {
var t = e.parent.convertToWorldSpaceAR(e.position);
return this.scrollView.node.convertToNodeSpaceAR(t);
},
initialize: function(e) {
this.messages = e;
var t = this.messages.length;
this.content.height = t * (this.itemTemplate.height + this.spacing) + this.spacing;
for (var i = Math.min(this.spawnCount, t), n = 0; n < i; ++n) {
var o = cc.instantiate(this.itemTemplate);
this.content.addChild(o);
o.setPosition(0, -o.height * (.5 + n) - this.spacing * (n + 1));
o.getComponent(cc.BauCuaLiveBWTopItem).updateItem(this.messages[n], n);
this.items.push(o);
}
this.rootContentY = this.content.y;
},
update: function(e) {
this.updateTimer += e;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var t = this.items, i = this.bufferZone, n = this.scrollView.content.y < this.lastContentPosY, o = (this.itemTemplate.height + this.spacing) * t.length, a = 0; a < t.length; ++a) {
var s = this.getPositionInView(t[a]);
if (n) {
if (s.y < -i && t[a].y + o < 0) {
t[a].y = t[a].y + o;
var c = t[a].getComponent(cc.BauCuaLiveBWTopItem), r = c.itemID - t.length;
c.updateItem(this.messages[r], r);
}
} else if (s.y > i && t[a].y - o > -this.content.height) {
t[a].y = t[a].y - o;
r = (c = t[a].getComponent(cc.BauCuaLiveBWTopItem)).itemID + t.length;
c.updateItem(this.messages[r], r);
}
}
this.lastContentPosY = this.scrollView.content.y;
}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWTopView: [ function(e, t) {
"use strict";
cc._RF.push(t, "69d14o9CSxESLcJpm/gG+0N", "BauCuaLiveBWTopView");
(function() {
cc.BauCuaLiveBWTopView = cc.Class({
extends: cc.Component,
properties: {
topListView: cc.BauCuaLiveBWTopListView
},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
},
onEnable: function() {
var e = this;
cc.director.getScheduler().schedule(function() {
e.getTopSessionWinners();
}, this, 1, 0, .2, !1);
this.animation.play("openPopup");
},
getTopSessionWinners: function() {
new cc.BauCuaLiveBWWinnerCommand().execute(this);
},
onGetBigWinnerResponse: function(e) {
var t = e;
if (null !== t && t.length > 0) {
this.topListView.resetList();
this.topListView.initialize(t);
}
},
closeClicked: function() {
this.topListView.resetList();
this.animation.play("closePopup");
var e = this;
cc.director.getScheduler().schedule(function() {
e.animation.stop();
cc.BauCuaLiveBWPopupController.getInstance().destroyTopView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBWView: [ function(e, t) {
"use strict";
cc._RF.push(t, "cf88fpKg0FMw7/pel0m+dTN", "BauCuaLiveBWView");
var i = e("NetConfig");
(function() {
cc.BauCuaLiveBWView = cc.Class({
extends: cc.Component,
properties: {
listAvtars: [ cc.SpriteFrame ]
},
onLoad: function() {
this.controller = cc.BauCuaLiveBWController.getInstance();
cc.BauCuaLiveBWController.getInstance().setBauCuaLiveBWView(this);
cc.BauCuaLiveBWController.getInstance().setAvatars(this.listAvtars);
cc.BauCuaLiveBWController.getInstance().setAvatarDef(this.avatarDef);
this.controller.setBauCuaLiveBWView(this);
this.controller.initBetLog();
this.controller.setBetLogSession(1);
this.interval = null;
this.isActiveChat = !1;
this.lastTimeReconnect = new Date().getTime();
this.currentState = -1;
this.idPlayNow = 0;
this.currAccId = null;
lngui.UIWaitingLayout.showWaiting();
this.connectHub();
},
onDestroy: function() {
this.sendRequestOnHub(cc.MethodHubName.EXIT_LOBBY);
null !== this.interval && clearInterval(this.interval);
this.unscheduleAllCallbacks();
this.controller.setBauCuaLiveBWView(null);
if (cc.sys.isNative) {
cc.loader.releaseResDir("BauCuaLiveBW/prefabs");
cc.loader.releaseResDir("BauCuaLiveBW/images");
}
lngui.UIWaitingLayout.hideWaiting();
},
disconnectAndLogout: function() {
this.BauCuaLiveBWHub && this.BauCuaLiveBWHub.disconnect();
this.lastTimeReconnect = new Date().getTime();
},
connectHub: function() {
var e = {
url: "https://BauCuaLivebigwin." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
hub: "gamehub",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate,
ip: "http://18.138.207.162:9001/signalr/negotiate"
};
cc.systemEvent.off("OnBauCuaLiveBWToWebSocKet", this.onResponeData, this);
cc.systemEvent.on("OnBauCuaLiveBWToWebSocKet", this.onResponeData, this);
this.BauCuaLiveBWHub = new lngui.GateSignalR();
this.BauCuaLiveBWHub.connect("OnBauCuaLiveBWToWebSocKet", e.url, e.hub, e.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
},
sendRequestOnHub: function(e, t, i) {
switch (e) {
case cc.MethodHubName.ENTER_LOBBY:
this.sendSignalR("EnterLobby", [ 4, 1 ]);
break;

case cc.MethodHubName.EXIT_LOBBY:
this.sendSignalR("ExitLobby", []);
break;

case cc.MethodHubName.PLAY_NOW:
this.sendSignalR("PlayNow", []);
break;

case cc.MethodHubName.BET:
this.sendSignalR("Bet", [ t, i ]);
break;

case cc.MethodHubName.REGISTER_LEAVE_ROOM:
this.sendSignalR("RegisterLeaveRoom", []);
break;

case cc.MethodHubName.UNREGISTER_LEAVE_ROOM:
this.sendSignalR("UnregisterLeaveRoom", []);
break;

case cc.MethodHubName.SEND_MESSAGE:
this.xxHub.sendRoomMessage(t);
}
},
sendSignalR: function(e, t) {
lngui.ZLog.log("SendSocket==========================>" + e + "==data==" + JSON.stringify(t));
t = t || [];
this.BauCuaLiveBWHub && this.BauCuaLiveBWHub.send(e, t);
},
onResponeData: function(e) {
e.s && "error" == e.s || this.onHubMessage(e);
},
connectSuccess: function() {
console.log("connectSuccess =========>");
this.sendRequestOnHub(cc.MethodHubName.ENTER_LOBBY);
lngui.UIWaitingLayout.hideWaiting();
},
onHubMessage: function(e) {
var t = this;
if (("open" == e.s || "reconnect" == e.s || "1" == e.s) && !this.isConnect) {
this.isConnect = !0;
this.connectSuccess();
}
if (void 0 !== e.M && e.M.length > 0) e.M.map(function(e) {
switch (e.M) {
case cc.MethodHubOnName.PLAYER_LEAVE:
t.playerLeave(e.A);
break;

case cc.MethodHubOnName.SESSION_INFO:
var i = e.A[0];
t.controller.onNotifyChangePhrase(i);
t.controller.updateTotalBet(i);
break;

case cc.MethodHubOnName.NOTIFY_CHANGE_PHRASE:
t.controller.onNotifyChangePhrase(e.A[0]);
break;

case cc.MethodHubOnName.UPDATE_ROOM_TIME:
t.controller.updateTimer(parseInt(e.A[0]));
break;

case cc.MethodHubOnName.SUMMARY_PLAYER:
t.controller.updatePlayersInGame(e.A[0]);
break;

case cc.MethodHubOnName.JOIN_GAME:
t.controller.updatePlayerInfor(e.A[0]);
t.controller.onNotifyChangePhrase(e.A[1]);
e.A[3].length > 0 && e.A[3].map(function(e) {
t.controller.updateTotalUserBetSide(e.BetSide, e.SummaryBet);
}, t);
t.controller.updateChipForBetSession(e.A[4]);
break;

case cc.MethodHubOnName.VIP_PLAYERS:
var n = e.A[0];
n.length > 0 && t.controller.updatePlayersUI(n);
break;

case cc.MethodHubOnName.GAME_HISTORY:
var o = e.A[0];
t.controller.drawSoiCau(o);
break;

case cc.MethodHubOnName.BET_OF_ACCOUNT:
t.controller.updateBetOfAccount(e.A[0]);
break;

case cc.MethodHubOnName.BET_SUCCESS:
var a = t.controller.getBetLogSession();
t.controller.setBetLog({
sessionID: a,
value: e.A[0].BetValue,
betSide: e.A[0].BetSide
});
t.controller.updateBalanceCurrPlayer(e.A[1]);
lngui.UserManager.instance.mainUserInfo.Money = e.A[0].Balance;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
t.controller.updateTotalUserBetSide(e.A[0].BetSide, e.A[0].SummaryBet);
t.controller.updateTotalUserBet(e.A[0].BetValue);
t.controller.moveChipBet(e.A[0].BetValue, e.A[0].BetSide, 1, e.A[0].AccountID);
break;

case cc.MethodHubOnName.PLAYER_BET:
if (e.A[0] != lngui.UserManager.instance.mainUserInfo.AccountID) {
t.controller.updateBalancePlayer(e.A);
t.controller.moveChipBet(e.A[1], e.A[2], 2, e.A[0]);
}
break;

case cc.MethodHubOnName.WIN_RESULT:
t.controller.setWinResult(e.A[0]);
lngui.UserManager.instance.mainUserInfo.Money = e.A[0].Balance;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
break;

case cc.MethodHubOnName.WIN_RESULT_VIP:
e.A.length > 0 && t.controller.setWinVipResult(e.A[0]);
break;

case cc.MethodHubOnName.TOTAL_WIN_MONEY:
t.controller.setTotalWinResult(parseInt(e.A[0]));
break;

case cc.MethodHubOnName.PLAYER_MESSAGE:
cc.PopupController.getInstance().showMessage(e.A[0]);
break;

case cc.MethodHubOnName.MESSAGE:
cc.game.isPaused() || cc.PopupController.getInstance().showMessage(e.A[0]);
break;

case cc.MethodHubOnName.RECEIVE_MESSAGE:
cc.ChatRoomController.getInstance().addChatContent(e.A);
t.controller.playerShowBubbleChat(e.A);
}
}); else if (e.R && e.R.AccountID) {
this.currAccId = e.R.AccountID;
this.sendRequestOnHub(cc.MethodHubName.PLAY_NOW);
lngui.UIWaitingLayout.hideWaiting();
} else e.I;
},
onHubOpen: function() {
lngui.UIWaitingLayout.hideWaiting();
this.sendRequestOnHub(cc.MethodHubName.ENTER_LOBBY);
lngui.UIWaitingLayout.hideWaiting();
},
onHubClose: function() {
new Date().getTime() - this.lastTimeReconnect >= 1e3 * i.RECONNECT_TIME ? this.reconnect() : cc.director.getScheduler().schedule(this.reconnect, this, i.RECONNECT_TIME, 0, 0, !1);
},
onHubError: function() {},
backClicked: function() {
this.controller.clearAllChips();
lngui.UIScreenManager.instance.popToRootScreen();
},
helpClicked: function() {
cc.BCPopupController.getInstance().createHelpView();
},
playerLeave: function(e) {
if (e[0] === lngui.UserManager.instance.mainUserInfo.AccountID) {
var t = e[1];
lngui.UIScreenManager.instance.popToRootScreen();
cc.PopupController.getInstance().showMessage(t);
}
},
chatClicked: function() {
cc.ChatRoomController.getInstance().showChat();
}
});
}).call(void 0);
cc._RF.pop();
}, {
NetConfig: void 0
} ],
BauCuaLiveBW_HistoryCommand: [ function(e, t) {
"use strict";
cc._RF.push(t, "11a13Za9PJHorgDgh1TcdMY", "BauCuaLiveBW_HistoryCommand");
(function() {
var e;
e = function() {
function e() {}
e.prototype.execute = function(e) {
var t = cc.SubdomainName.BAUCUA_LIVE_BIGWIN;
return cc.ServerConnector.getInstance().sendRequest(t, "api/BauCua/GetHistory?top=50", function(t) {
var i = JSON.parse(t);
return e.onGetHistoryResponse(i);
});
};
return e;
}();
cc.BauCuaLiveBWHistoryCommand = e;
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBW_SoiCauCommand: [ function(e, t) {
"use strict";
cc._RF.push(t, "1dc73BOyypLv6L+VIaEABTj", "BauCuaLiveBW_SoiCauCommand");
(function() {
var e;
e = function() {
function e() {}
e.prototype.execute = function(e) {
var t = cc.SubdomainName.BAUCUA_LIVE_BIGWIN;
return cc.ServerConnector.getInstance().sendRequest(t, "api/BauCua/GetSoiCau", function(t) {
var i = JSON.parse(t);
return e.onResponse(i);
});
};
return e;
}();
cc.BauCuaLiveBWSoiCauCommand = e;
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaLiveBW_WinnerCommand: [ function(e, t) {
"use strict";
cc._RF.push(t, "ce81aElPolKTIVUv0vrpvOu", "BauCuaLiveBW_WinnerCommand");
(function() {
var e;
e = function() {
function e() {}
e.prototype.execute = function(e) {
var t = cc.SubdomainName.BAUCUA_LIVE_BIGWIN;
return cc.ServerConnector.getInstance().sendRequest(t, "api/BauCua/GetBigWinner", function(t) {
var i = JSON.parse(t);
return e.onGetBigWinnerResponse(i);
});
};
return e;
}();
cc.BauCuaLiveBWWinnerCommand = e;
}).call(void 0);
cc._RF.pop();
}, {} ],
ItemDiceBauCuaLiveBigWin: [ function(e, t) {
"use strict";
cc._RF.push(t, "f812fmKbexNDquJlxEeDemN", "ItemDiceBauCuaLiveBigWin");
(function() {
cc.ItemDiceBauCuaLiveBigWin = cc.Class({
extends: cc.Component,
properties: {}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
JackpotBauCuaLiveBW: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "b3c7fhJPERFM61uql8xxkK/", "JackpotBauCuaLiveBW");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), a = this && this.__decorate || function(e, t, i, n) {
var o, a = arguments.length, s = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var c = e.length - 1; c >= 0; c--) (o = e[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(t, i, s) : o(t, i)) || s);
return a > 3 && s && Object.defineProperty(t, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = e("../../lobby/LobbyConst"), c = e("../../lobby/scripts/utils/Lobby_UINumericLabelHelper"), r = cc._decorator, u = r.ccclass, l = r.property, h = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.gameID = s.GAME_IDS.NONE;
t.lbJackpot = null;
return t;
}
t.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(s.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.updateJackpot, this);
};
t.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(s.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.updateJackpot, this);
};
t.prototype.updateJackpot = function() {
var e, t = this;
522 == this.gameID && console.log("xx");
s.LobbyConst.slotByKeys.forEach(function(i, n) {
n != t.gameID || (e = i);
});
if (e) for (var i = 0; i < e.length; i++) this.lbJackpot && this.lbJackpot.scheduleProgress(e[2], 1);
};
a([ l({
type: cc.Enum(s.GAME_IDS)
}) ], t.prototype, "gameID", void 0);
a([ l(c.default) ], t.prototype, "lbJackpot", void 0);
return a([ u ], t);
}(cc.Component);
i.default = h;
cc._RF.pop();
}, {
"../../lobby/LobbyConst": void 0,
"../../lobby/scripts/utils/Lobby_UINumericLabelHelper": void 0
} ],
NewScript: [ function(e, t) {
"use strict";
cc._RF.push(t, "4658bsFNcBPGrzahd8ZL9B4", "NewScript");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {}
});
cc._RF.pop();
}, {} ]
}, {}, [ "BauCuaLiveBW.Chat.NetworkClient", "BauCuaLiveBWChat", "JackpotBauCuaLiveBW", "AudioPoolBauCuaLiveBW", "BauCuaLiveBWGroupUserCommand", "BauCuaLiveBW_HistoryCommand", "BauCuaLiveBW_SoiCauCommand", "BauCuaLiveBW_WinnerCommand", "BauCuaLiveBWAnim", "BauCuaLiveBWBetSide", "BauCuaLiveBWMap", "BauCuaLiveBWPharse", "BauCuaLiveBWController", "BauCuaLiveBWPopupController", "BauCuaLiveBWGraphItem", "BauCuaLiveBWGraphView", "ItemDiceBauCuaLiveBigWin", "BauCuaLiveBWGroupItem", "BauCuaLiveBWGroupUserListView", "BauCuaLiveBWGroupUserView", "BauCuaLiveBWHelpView", "BauCuaLiveBWHistoryItem", "BauCuaLiveBWHistoryListView", "BauCuaLiveBWHistoryView", "BauCuaLiveBWPlayer", "BauCuaLiveBWTopItem", "BauCuaLiveBWTopListView", "BauCuaLiveBWTopView", "BauCuaLiveBWAssetsView", "BauCuaLiveBWBetView", "BauCuaLiveBWButtonBet", "BauCuaLiveBWChipView", "BauCuaLiveBWInfoView", "BauCuaLiveBWMenuView", "BauCuaLiveBWPopupView", "BauCuaLiveBWResultView", "BauCuaLiveBWSettingView", "BauCuaLiveBWSoiCauView", "BauCuaLiveBWView", "NewScript" ]);