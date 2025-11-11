window.__require = function t(o, e, i) {
function n(l, r) {
if (!e[l]) {
if (!o[l]) {
var c = l.split("/");
c = c[c.length - 1];
if (!o[c]) {
var a = "function" == typeof __require && __require;
if (!r && a) return a(c, !0);
if (s) return s(c, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = c;
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
Slot3x3Config: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "202b2LYBqpBXpndWnCaFkXx", "Slot3x3Config");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotConfig"), r = cc._decorator, c = r.ccclass, a = r.property, p = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.DISTANCE = 170;
o.LIST_FRAME = [];
o.LIST_SKE_ITEM = [];
o.LIST_SKE_KEY = [];
o.TIME_MOVE_ITEM_START_QUICK = 1;
o.TIME_MOVE_ITEM_START = 1;
o.TIME_MOVE_ITEM_QUICK = 1;
o.TIME_MOVE_ITEM = 1;
o.TIME_MOVE_STOP_ITEM_QUICK = 1;
o.TIME_MOVE_STOP_ITEM = 1;
o.TIME_FIRST_REEL_STOP = 2;
o.TIME_FIRST_REEL_STOP_QUICK = 1;
o.TIME_REEL_STOP = .4;
o.TIME_REEL_STOP_QUICK = .2;
o.TIME_SINGLE_LINE = 1;
o.TIME_SINGLE_LINE_QUICK = .8;
o.LINE = [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ], [ 0, 7, 2 ], [ 6, 1, 8 ], [ 0, 4, 2 ], [ 0, 4, 8 ], [ 6, 4, 2 ], [ 3, 7, 5 ], [ 3, 1, 5 ], [ 6, 4, 8 ], [ 0, 1, 5 ], [ 3, 4, 8 ], [ 3, 4, 2 ], [ 6, 7, 5 ], [ 3, 1, 2 ], [ 6, 4, 5 ], [ 0, 4, 5 ], [ 3, 7, 8 ], [ 0, 7, 5 ] ];
return o;
}
s([ a(cc.Integer) ], o.prototype, "DISTANCE", void 0);
s([ a([ cc.SpriteFrame ]) ], o.prototype, "LIST_FRAME", void 0);
s([ a([ sp.SkeletonData ]) ], o.prototype, "LIST_SKE_ITEM", void 0);
s([ a([ cc.String ]) ], o.prototype, "LIST_SKE_KEY", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_MOVE_ITEM_START_QUICK", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_MOVE_ITEM_START", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_MOVE_ITEM_QUICK", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_MOVE_ITEM", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_MOVE_STOP_ITEM_QUICK", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_MOVE_STOP_ITEM", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_FIRST_REEL_STOP", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_FIRST_REEL_STOP_QUICK", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_REEL_STOP", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_REEL_STOP_QUICK", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_SINGLE_LINE", void 0);
s([ a(cc.Integer) ], o.prototype, "TIME_SINGLE_LINE_QUICK", void 0);
return s([ c ], o);
}(l.default);
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotConfig": void 0
} ],
Slot3x3Effect: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "ac24ak38b5Li4lnXsMZWrwf", "Slot3x3Effect");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotEffect"), r = t("../../base_slot/util/FormatUtil"), c = cc._decorator, a = c.ccclass, p = (c.property, 
function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.mSlot = null;
o.mSlotRoom = null;
return o;
}
o.prototype.showWin = function(t, o, e) {
void 0 === t && (t = null);
void 0 === o && (o = null);
this.mCallback = t;
this.mTarget = o;
var i = this;
this.nodeWin.active = !0;
this.txtMoneyWin.node.active = !0;
this.txtMoneyWin.string = r.default.formatNumber(e);
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(this.mSlot.mSlotConfig.TIME_ANIM_WIN), cc.callFunc(function() {
i.nodeWin.active = !1;
i.mCallback && i.mTarget && i.mCallback.call(i.mTarget);
}, this)));
};
o.prototype.showBigWin = function(t, o, e) {
var i = this;
void 0 === t && (t = null);
void 0 === o && (o = null);
this.mCallback = t;
this.mTarget = o;
this.nodeBigwin.active = !0;
this.txtMoneyBigwin.string = r.default.formatNumber(e);
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(this.mSlot.mSlotConfig.TIME_ANIM_BIGWIN), cc.callFunc(function() {
i.nodeBigwin.active = !1;
i.mCallback && i.mTarget && i.mCallback.call(i.mTarget);
}, this)));
};
o.prototype.showJackpot = function(t, o, e) {
var i = this;
void 0 === t && (t = null);
void 0 === o && (o = null);
this.mCallback = t;
this.mTarget = o;
this.nodeJackpot.active = !0;
this.txtMoneyJackpot.string = r.default.formatNumber(e);
var n = function() {
i.node.stopAllActions();
i.nodeJackpot.active = !1;
i.mCallback && i.mTarget && i.mCallback.call(i.mTarget);
};
this.nodeJackpot.once(cc.Node.EventType.TOUCH_END, n.bind(this), this);
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(this.mSlot.mSlotConfig.TIME_ANIM_JACKPOT), cc.callFunc(function() {
i.nodeJackpot.off(cc.Node.EventType.TOUCH_END, n.bind(i), i);
i.nodeJackpot.active = !1;
i.mCallback && i.mTarget && i.mCallback.call(i.mTarget);
}, this)));
};
return s([ a ], o);
}(l.default));
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotEffect": void 0,
"../../base_slot/util/FormatUtil": void 0
} ],
Slot3x3Entity: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "dc1eeljJ/JJ16yqDxTZmgj8", "Slot3x3Entity");
Object.defineProperty(e, "__esModule", {
value: !0
});
e.DataSlot3x3Spin = void 0;
e.DataSlot3x3Spin = function() {
this.userMoney = 0;
this.session = 0;
this.listItem = [];
this.listLineWin = [];
this.totalBet = 0;
this.totalWin = 0;
this.isJackpot = !1;
this.moneyJackpot = 0;
};
cc._RF.pop();
}, {} ],
Slot3x3Handler: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "cc012Ya4SFKpLpMtQZUoGc0", "Slot3x3Handler");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotHandler"), r = t("./Slot3x3Entity"), c = t("./Slot3x3Rank"), a = t("./Slot3x3Var"), p = cc._decorator, h = p.ccclass, u = (p.property, 
function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.mSlot = null;
o.mListenerKey = "SlotChef";
return o;
}
o.prototype.connect = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect(this.mListenerKey, a.default.api.negotiate, a.default.api.hub, a.default.api.gate, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
o.prototype.closeWS = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
this.mSignalr.close();
lngui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
o.prototype.onWebSocketCallback = function(t) {
var o = this;
if ("open" == t.s || "reconnect" == t.s) {
if (!this.mSlot.isConnect) {
this.mSlot.isConnect = !0;
this.mSlot.connectSuccess();
this.onJoinGame("ok");
}
} else {
t.R && t.R.description && this.mSlot.mTooltip.show(t.R.description);
-51 === t.R && this.mSlot.mTooltip.show("Số dư không đủ");
if (!t.M || 0 == t.M.length) return;
for (var e = t.M.length, i = 0; i < e; ++i) {
var n = t.M[i];
if (n && n.A && n.A[0]) {
var s = n.A[0];
switch (n.M) {
case "joinGame":
this.onJoinGame(s);
break;

case "resultSpin":
s.SlotsData || console.error(t);
this.onSpin(s);
break;

case "message":
this.onMessage(s);
break;

case "UpdateJackpot":
s = s.split("|");
this.onUpdateJackpot(s);
break;

case "history":
lngui.UIPopupManager.instance.showPopupFromPrefab(this.mSlot.prePopupHistory, function(t) {
t.setData(null, s);
});
break;

case "jackpotHistory":
var l = lngui.UIPopupManager.instance.find(c.default);
l ? l.getComponent(c.default).initData(this.mSlot, s) : lngui.UIPopupManager.instance.showPopupFromPrefab(this.mSlot.prePopupHorno, function(t) {
t.initData(o.mSlot, s);
});
break;

case "XJackpotInfo":
this.onGetPotInfo(s);
}
}
}
}
};
o.prototype.showError = function() {
var t = {
SpinData: {
SpinID: 0,
TotalBetValue: 0,
PayLinePrizeValue: 0,
Slots: [ 3, 2, 5, 6, 6, 5, 5, 4, 4 ],
PrizeLines: []
}
}, o = new r.DataSlot3x3Spin();
o.session = t.SpinData.SpinID;
o.totalBet = t.SpinData.TotalBetValue;
o.totalWin = t.SpinData.PayLinePrizeValue;
o.userMoney = lngui.UserManager.instance.mainUserInfo.Money + this.mSlot.mSlotRoom.getTotalBet();
o.listItem = t.SpinData.Slots || [];
o.listLineWin = [];
this.mSlot.mSlotRoom.showError(o);
};
o.prototype.onMessage = function(t) {
if (t) {
"string" == typeof t ? this.mSlot.mTooltip.show(t) : "object" == typeof t && this.mSlot.mTooltip.show(t.description);
this.showError();
}
};
o.prototype.onGetPotInfo = function(t) {
t && this.mSlot.mSlotPot.onEventXPot(t);
};
o.prototype.onUpdateJackpot = function(t) {
a.default.jackPot = t;
this.mSlot && this.mSlot.onUpdatePot(t);
};
o.prototype.onJoinGame = function(t) {
t ? this.mSlot.onJoinGameSuccess() : this.mSlot.onJoinGameFail();
};
o.prototype.onSpin = function(t) {
var o = t;
if (o.ResponseStatus < 0) {
this.mSlot.mTooltip.show("Quay không thành công, mời bạn thử lại");
this.showError();
} else if (o.SlotsData) {
var e = new r.DataSlot3x3Spin();
e.userMoney = o.Balance;
e.session = o.SpinID;
e.isJackpot = o.IsJackpot;
e.moneyJackpot = o.Jackpot;
e.totalWin = o.TotalPrizeValue;
for (var i = o.SlotsData.split(","), n = 0; n < i.length; n++) e.listItem.push(parseInt(i[n]));
var s = o.PrizesData.split(";");
if ("" == s[0]) e.listLineWin = []; else for (n = 0; n < s.length; n++) {
var l = s[n].split(",");
e.listLineWin.push(parseInt(l[0]));
}
this.mSlot.mSlotRoom && this.mSlot.mSlotRoom.stopSpin(e);
} else {
console.error(o);
this.mSlot.mSlotRoom && this.mSlot.mSlotRoom.stopSpin(null);
}
};
o.prototype.sendSpin = function(t) {
this.mSignalr.send("Spin", [ this.mSlot.mRoomId, t ]);
};
o.prototype.sendGetEventPot = function() {
this.mSignalr.send("GetEventInfo");
};
o.prototype.sendGetHistory = function() {
this.mSignalr.send("GetHistory");
};
o.prototype.sendGetJackpot = function() {
this.mSignalr.send("GetJackpotHistory");
};
o.prototype.sendGetBigwin = function() {
this.mSignalr.send("GetHornorHistory");
};
return s([ h ], o);
}(l.default));
e.default = u;
cc._RF.pop();
}, {
"../../base_slot/SlotHandler": void 0,
"./Slot3x3Entity": "Slot3x3Entity",
"./Slot3x3Rank": "Slot3x3Rank",
"./Slot3x3Var": "Slot3x3Var"
} ],
Slot3x3HistoryCell: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "468bee5nWNJh5SnVJqhx/Jz", "Slot3x3HistoryCell");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/util/FormatUtil"), r = cc._decorator, c = r.ccclass, a = r.property, p = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.bg = null;
o.txtSession = null;
o.txtTime = null;
o.txtRoomBet = null;
o.txtLine = null;
o.txtTotalBet = null;
o.txtMoneyWin = null;
o.prfDetail = null;
o.mIdx = 0;
o.mDataHistory = null;
return o;
}
o.prototype.setData = function(t, o) {
this.mDataHistory = t;
this.txtSession.string = "" + t.SpinID;
this.txtTime.string = l.default.formatDateTime(t.CreatedDate, !0, !0);
this.txtTotalBet.string = l.default.formatNumber(t.TotalBetValue);
this.txtMoneyWin.string = l.default.formatNumber(t.PaylinePrizeValue);
this.txtRoomBet.string = l.default.formatNumber(t.BetValue);
this.txtLine.string = "" + t.LineData.split(",").length;
this.bg.active = o % 2 == 0;
};
o.prototype.onBtnDetail = function() {
var t = this;
lngui.UIPopupManager.instance.showPopupFromPrefab(this.prfDetail, function(o) {
o.setData(t.mDataHistory);
});
};
s([ a(cc.Node) ], o.prototype, "bg", void 0);
s([ a(cc.Label) ], o.prototype, "txtSession", void 0);
s([ a(cc.Label) ], o.prototype, "txtTime", void 0);
s([ a(cc.Label) ], o.prototype, "txtRoomBet", void 0);
s([ a(cc.Label) ], o.prototype, "txtLine", void 0);
s([ a(cc.Label) ], o.prototype, "txtTotalBet", void 0);
s([ a(cc.Label) ], o.prototype, "txtMoneyWin", void 0);
s([ a(cc.Prefab) ], o.prototype, "prfDetail", void 0);
return s([ c ], o);
}(cc.Component);
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/util/FormatUtil": void 0
} ],
Slot3x3HistoryDetail: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "6175bQl185MhadtOOvmijmp", "Slot3x3HistoryDetail");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/util/FormatUtil"), r = cc._decorator, c = r.ccclass, a = r.property, p = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.txtSession = null;
o.txtMoneyWin = null;
o.listItem = [];
o.frameItem = [];
return o;
}
o.prototype.setData = function(t) {
console.log(t);
this.txtSession.string = "#" + t.SpinID;
this.txtMoneyWin.string = l.default.formatNumber(t.PaylinePrizeValue);
for (var o = t.SlotsData.split(","), e = 0; e < o.length; e++) {
var i = parseInt(o[e]), n = -1;
1 == i ? n = 0 : 2 == i ? n = 1 : 3 == i ? n = 2 : 4 == i ? n = 3 : 5 == i ? n = 4 : 6 == i && (n = 5);
this.listItem[e].spriteFrame = this.frameItem[n];
}
};
s([ a(cc.Label) ], o.prototype, "txtSession", void 0);
s([ a(cc.Label) ], o.prototype, "txtMoneyWin", void 0);
s([ a([ cc.Sprite ]) ], o.prototype, "listItem", void 0);
s([ a([ cc.SpriteFrame ]) ], o.prototype, "frameItem", void 0);
return s([ c ], o);
}(lngui.UIPopup);
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/util/FormatUtil": void 0
} ],
Slot3x3History: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "beecbHUztZHGZ6dvh0fxIOk", "Slot3x3History");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotHistory"), r = cc._decorator, c = r.ccclass, a = (r.property, 
function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.mSlot = null;
return o;
}
o.prototype.init = function(t) {
this.mSlot = t;
this.scrollview.content.destroyAllChildren();
};
o.prototype.setData = function(t, o) {
if (o && "" != o && 0 == this.mListDataCell.length) {
var e = o;
this.mListDataCell = e;
this.scrollview.content.destroyAllChildren();
this.mListCell = [];
var i = this.mListDataCell.length;
this.scrollview.content.height = i * (this.heightItem + this.spacing) + this.spacing;
for (var n = this.spawnCount <= i ? this.spawnCount : i, s = 0; s < n; s++) {
var l = cc.instantiate(this.cellHistory), r = l.getComponent("Slot3x3HistoryCell");
r.setData(this.mListDataCell[s], s);
var c = -r.node.height * (.5 + s) - this.spacing * (s + 1);
r.node.setPosition(0, c);
this.scrollview.content.addChild(l);
this.mListCell.push(r);
}
this.scrollview.node.active = !0;
}
};
return s([ c ], o);
}(l.default));
e.default = a;
cc._RF.pop();
}, {
"../../base_slot/SlotHistory": void 0
} ],
Slot3x3Item: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "5ab10v5dCtFLJp8mm3j2cYT", "Slot3x3Item");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotItem"), r = t("../../base_slot/util/Util"), c = cc._decorator, a = c.ccclass, p = (c.property, 
function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.mSlotReel = null;
o.mSlot = null;
o.mSlotRoom = null;
return o;
}
o.prototype.getRandomId = function() {
return r.default.random(1, this.mSlot.mSlotConfig.MAX_ITEM);
};
o.prototype.setId = function(t) {
if (this.mId != t) {
this.mId = t;
this.setFrameItem(this.mId);
}
};
o.prototype.moveStart = function(t) {
void 0 === t && (t = 0);
var o = this;
this.mIndex -= 3;
if (2 == this.mIndex) {
var e = this.getRandomId();
this.setId(e);
} else if (1 == this.mIndex) {
e = this.getRandomId();
this.setId(e);
} else if (0 == this.mIndex) {
e = this.getRandomId();
this.setId(e);
}
var i = this.node.y - 3 * this.mSlot.mSlotConfig.DISTANCE + 180, n = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START_QUICK : this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.moveTo(n, o.node.x, i), cc.callFunc(function() {
o.reset();
o.mSlotReel.cbStopAllItemMoveStart();
}, this)));
};
o.prototype.move = function(t) {
void 0 === t && (t = 0);
var o = this;
this.mIndex -= 3;
if (2 == this.mIndex) {
var e = this.getRandomId();
this.setId(e);
} else if (1 == this.mIndex) {
e = this.getRandomId();
this.setId(e);
} else if (0 == this.mIndex) {
e = this.getRandomId();
this.setId(e);
}
var i = this.node.y - 3 * this.mSlot.mSlotConfig.DISTANCE + 180, n = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_MOVE_ITEM_QUICK : this.mSlot.mSlotConfig.TIME_MOVE_ITEM;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.moveTo(n, o.node.x, i), cc.callFunc(function() {
o.reset();
o.mSlotReel.cbStopAllItemMove();
}, this)));
};
o.prototype.moveStop = function(t) {
void 0 === t && (t = 0);
var o = this;
this.mIndex -= 3;
2 == this.mIndex ? this.setId(this.mSlotReel.listIdItemResult[2]) : 1 == this.mIndex ? this.setId(this.mSlotReel.listIdItemResult[1]) : 0 == this.mIndex && this.setId(this.mSlotReel.listIdItemResult[0]);
var e = this.node.y - 3 * this.mSlot.mSlotConfig.DISTANCE + 180, i = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_MOVE_STOP_ITEM_QUICK : this.mSlot.mSlotConfig.TIME_MOVE_STOP_ITEM;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.moveTo(i, o.node.x, e).easing(cc.easeSineOut()), cc.callFunc(function() {
o.reset();
o.mSlotReel.cbStopAllItemMoveStop();
}, this)));
};
o.prototype.setFrameItem = function(t) {
var o = -1;
1 == t ? o = 0 : 2 == t ? o = 1 : 3 == t ? o = 2 : 4 == t && (o = 3);
5 == t ? o = 4 : 6 == t && (o = 5);
this.sprItem.spriteFrame = this.mSlot.mSlotConfig.LIST_FRAME[o];
};
o.prototype.reset = function() {
if (-3 == this.mIndex) {
this.mIndex = 5;
this.node.y = this.mSlot.mSlotConfig.POS_ITEM[this.mIndex];
} else if (-2 == this.mIndex) {
this.mIndex = 4;
this.node.y = this.mSlot.mSlotConfig.POS_ITEM[this.mIndex];
} else if (-1 == this.mIndex) {
this.mIndex = 3;
this.node.y = this.mSlot.mSlotConfig.POS_ITEM[this.mIndex];
}
};
return s([ a ], o);
}(l.default));
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotItem": void 0,
"../../base_slot/util/Util": void 0
} ],
Slot3x3Line: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "eb39364rPZPj4lbjYK22icl", "Slot3x3Line");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotLine"), r = cc._decorator, c = r.ccclass, a = (r.property, 
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
return s([ c ], o);
}(l.default));
e.default = a;
cc._RF.pop();
}, {
"../../base_slot/SlotLine": void 0
} ],
Slot3x3Machine: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "84d98YFLC9HjIK85xD8ZrHW", "Slot3x3Machine");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotMachine"), r = cc._decorator, c = r.ccclass, a = r.property, p = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.listSlotReel = [];
o.listSlotLine = [];
o.mListSlotItemResult = [];
o.mSlot = null;
o.mSlotRoom = null;
o.mIsAllReelStop = !0;
o.mCountAllReelStop = 0;
return o;
}
o.prototype.init = function(t) {
this.mSlotRoom = t;
this.mSlot = this.mSlotRoom.mSlot;
for (var o = 0; o < this.listSlotReel.length; o++) {
this.listSlotReel[o].setId(o);
this.listSlotReel[o].init(this);
}
for (o = 0; o < this.listSlotLine.length; o++) {
this.listSlotLine[o].init(this);
this.listSlotLine[o].setId(o + 1);
}
};
o.prototype.spin = function() {
this.setDefault();
for (var t = 0; t < this.listSlotReel.length; t++) this.listSlotReel[t].spin();
};
o.prototype.setDefault = function() {
t.prototype.setDefault.call(this);
this.mIsAllReelStop = !1;
this.mCountAllReelStop = 0;
};
o.prototype.stopSpin = function() {
var t = this.mSlotRoom.mDataSpin.listItem;
this.listSlotReel[0].setIdItemResult([ t[6], t[3], t[0] ]);
this.listSlotReel[1].setIdItemResult([ t[7], t[4], t[1] ]);
this.listSlotReel[2].setIdItemResult([ t[8], t[5], t[2] ]);
var o = this, e = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_FIRST_REEL_STOP_QUICK : this.mSlot.mSlotConfig.TIME_FIRST_REEL_STOP, i = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_REEL_STOP_QUICK : this.mSlot.mSlotConfig.TIME_REEL_STOP;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(e), cc.callFunc(function() {
o.listSlotReel[0].stopSpin();
}, this), cc.delayTime(i), cc.callFunc(function() {
o.listSlotReel[1].stopSpin();
}, this), cc.delayTime(i), cc.callFunc(function() {
o.listSlotReel[2].stopSpin();
}, this)));
};
o.prototype.showLineWin = function(t) {
for (var o = 0; o < this.mListSlotItemResult.length; o++) this.mListSlotItemResult[o].showLose();
var e = this.getSlotLineById(t);
e && e.showWin();
};
o.prototype.setListLineSelect = function(t) {
for (var o = 0; o < this.listSlotLine.length; o++) {
for (var e = !1, i = 0; i < t.length; i++) if (t[i] == this.listSlotLine[o].getId()) {
e = !0;
break;
}
this.listSlotLine[o].setSelect(e);
}
};
o.prototype.showAllLineWin = function(t) {
for (var o = 0; o < t.length; o++) for (var e = 0; e < this.listSlotLine.length; e++) if (this.listSlotLine[e].getId() == t[o]) {
this.listSlotLine[e].showWin();
break;
}
};
o.prototype.updateAllItemAllLine = function() {
this.mListSlotItemResult = [];
this.mListSlotItemResult.push(this.listSlotReel[0].getSlotItemByIndex(2));
this.mListSlotItemResult.push(this.listSlotReel[1].getSlotItemByIndex(2));
this.mListSlotItemResult.push(this.listSlotReel[2].getSlotItemByIndex(2));
this.mListSlotItemResult.push(this.listSlotReel[0].getSlotItemByIndex(1));
this.mListSlotItemResult.push(this.listSlotReel[1].getSlotItemByIndex(1));
this.mListSlotItemResult.push(this.listSlotReel[2].getSlotItemByIndex(1));
this.mListSlotItemResult.push(this.listSlotReel[0].getSlotItemByIndex(0));
this.mListSlotItemResult.push(this.listSlotReel[1].getSlotItemByIndex(0));
this.mListSlotItemResult.push(this.listSlotReel[2].getSlotItemByIndex(0));
for (var t = 0; t < this.listSlotLine.length; t++) {
for (var o = this.mSlot.mSlotConfig.LINE[t], e = [], i = 0; i < o.length; i++) {
var n = o[i];
e.push(this.mListSlotItemResult[n]);
}
this.listSlotLine[t].updateSlotItem(e);
}
};
o.prototype.callbackCheckReelStop = function() {
this.mCountAllReelStop++;
if (this.mCountAllReelStop == this.listSlotReel.length) {
this.mIsAllReelStop = !0;
this.updateAllItemAllLine();
this.mSlotRoom.showResult();
}
};
s([ a({
override: !0
}) ], o.prototype, "listSlotReel", void 0);
s([ a({
override: !0
}) ], o.prototype, "listSlotLine", void 0);
return s([ c ], o);
}(l.default);
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotMachine": void 0
} ],
Slot3x3RankCell: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "7ba26HShy9HdKaeAuo+Brsv", "Slot3x3RankCell");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotRankCell"), r = t("../../base_slot/util/FormatUtil"), c = cc._decorator, a = c.ccclass, p = c.property, h = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.txtStt = null;
return o;
}
o.prototype.setData = function(t, o) {
this.mIdx = o;
this.txtStt.string = (this.mIdx + 1).toString();
this.txtTime.string = r.default.formatDateTime(t.CreatedTime, !0, !0);
this.txtUserName.string = t.Username;
this.txtWin.string = r.default.formatNumber(t.PrizeValue);
this.txtDecription.string = 1 == t.IsJackpot ? "Nổ hũ" : "Thắng lớn";
this.txtBet.string = r.default.formatNumber(t.BetValue);
this.sprBg && (this.sprBg.active = o % 2 == 0);
};
s([ p(cc.Label) ], o.prototype, "txtStt", void 0);
return s([ a ], o);
}(l.default);
e.default = h;
cc._RF.pop();
}, {
"../../base_slot/SlotRankCell": void 0,
"../../base_slot/util/FormatUtil": void 0
} ],
Slot3x3Rank: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "72fd3LD8FlCdbcoiYAZj6wg", "Slot3x3Rank");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotRank"), r = cc._decorator, c = r.ccclass, a = (r.property, 
function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.mSlot = null;
return o;
}
o.prototype.initData = function(t, o) {
this.mSlot = t;
this.setData(o);
};
o.prototype.setData = function(t) {
this.scrollview.content.destroyAllChildren();
var o = t.length;
this.scrollview.content.height = o * (this.heightItem + this.spacing) + this.spacing;
for (var e = 0; e < o; e++) {
var i = cc.instantiate(this.cellRank);
i.getComponent("Slot3x3RankCell").setData(t[e], e);
var n = -i.height * (.5 + e) - this.spacing * (e + 1);
i.setPosition(0, n);
this.scrollview.content.addChild(i);
}
};
o.prototype.onBtnThanglon = function() {
this.mSlot.mSlotNetwork.sendGetBigwin();
};
o.prototype.onBtnNohu = function() {
this.mSlot.mSlotNetwork.sendGetJackpot();
};
return s([ c ], o);
}(l.default));
e.default = a;
cc._RF.pop();
}, {
"../../base_slot/SlotRank": void 0
} ],
Slot3x3Reel: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "c36a1NSs3dAr5UaJhWkkvNB", "Slot3x3Reel");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotReel"), r = cc._decorator, c = r.ccclass, a = r.property, p = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.listItem = [];
o.mSlotMachine = null;
o.mSlot = null;
o.mIsStop = !1;
o.mCountItemStartMove = 0;
o.mCountItemStopMove = 0;
o.mCountItemMove = 0;
return o;
}
o.prototype.spin = function() {
this.setDefault();
for (var t = 0; t < this.listItem.length; t++) this.listItem[t].moveStart();
};
o.prototype.stopSpin = function() {
this.mIsStop = !0;
};
o.prototype.setDefault = function() {
t.prototype.setDefault.call(this);
this.mIsStop = !1;
this.mCountItemStopMove = 0;
this.mCountItemStartMove = 0;
this.mCountItemMove = 0;
};
o.prototype.cbStopAllItemMoveStart = function() {
this.mCountItemStartMove++;
if (this.mCountItemStartMove == this.listItem.length) for (var t = 0; t < this.listItem.length; t++) this.listItem[t].move();
};
o.prototype.cbStopAllItemMove = function() {
this.mCountItemMove++;
if (this.mCountItemMove == this.listItem.length) if (this.mIsStop) for (var t = 0; t < this.listItem.length; t++) this.listItem[t].moveStop(); else {
this.mCountItemMove = 0;
for (t = 0; t < this.listItem.length; t++) this.listItem[t].move();
}
};
o.prototype.cbStopAllItemMoveStop = function() {
this.mCountItemStopMove++;
if (this.mCountItemStopMove == this.listItem.length) {
this.mCountItemStopMove = 0;
this.mSlotMachine.callbackCheckReelStop();
}
};
s([ a({
override: !0
}) ], o.prototype, "listItem", void 0);
return s([ c ], o);
}(l.default);
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotReel": void 0
} ],
Slot3x3RoomUI: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "76b15hMD+FK6aHiIUcL95Tx", "Slot3x3RoomUI");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotRoomUI"), r = cc._decorator, c = r.ccclass, a = r.property, p = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.btnAutoSpin = null;
o.btnSelectLine = null;
return o;
}
s([ a({
override: !0
}) ], o.prototype, "btnAutoSpin", void 0);
s([ a(cc.Button) ], o.prototype, "btnSelectLine", void 0);
return s([ c ], o);
}(l.default);
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotRoomUI": void 0
} ],
Slot3x3Room: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "f5038pvtvZLfYEvdqa3S6is", "Slot3x3Room");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotConstant"), r = t("../../base_slot/SlotRoom"), c = cc._decorator, a = c.ccclass, p = c.property, h = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.mSlotRoomUI = null;
o.mSlotEffect = null;
o.mSlotMachine = null;
o.prfChooseLine = null;
o.mSlot = null;
o.mIdxLineWin = 0;
o.mDataSpin = null;
o.mIsStateInit = !1;
return o;
}
o.prototype.init = function(t) {
this.mSlot = t;
if (this.mIsStateInit) {
this.setDefault();
this.mSlotMachine.setDefault();
} else {
this.mIsStateInit = !0;
this.mSlotEffect.init(this);
this.mSlotMachine.init(this);
}
this.mUserMoney = lngui.UserManager.instance.mainUserInfo.Money;
this.updateLineSelect(this.mSlotMachine.getNumLineSelect());
};
o.prototype.setDefault = function() {
this.node.stopAllActions();
this.mDataSpin = null;
this.mMoneyWin = 0;
this.mIdxLineWin = 0;
this.mSlotRewardPool.clearAllAnim();
};
o.prototype.spin = function() {
this.setDefault();
this.mSlotMachine.spin();
this.mState = l.SLOT_STATE.SPINING;
this.mUserMoney -= this.getTotalBet();
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.mUserMoney);
this.mSlotRoomUI.interactableBtnSpin(!1);
this.mSlot.btn100.interactable = !1;
this.mSlot.btn1k.interactable = !1;
this.mSlot.btn5k.interactable = !1;
this.mSlot.btn10k.interactable = !1;
this.mSlot.btnClose.interactable = !1;
var t = this.mSlotMachine.getNumLineSelect().join(",");
this.mSlot.mSlotNetwork.sendSpin(t);
};
o.prototype.stopSpin = function(o) {
t.prototype.stopSpin.call(this, o);
this.mSlotMachine.stopSpin();
if (this.mDataSpin.listLineWin.length > 0) {
this.mSlotRewardPool.push(l.SLOT_ANIM_PRIORITY.ANIM_ALL_LINE_WIN);
this.mSlotRewardPool.push(l.SLOT_ANIM_PRIORITY.ANIM_SINGLE_LINE_WIN);
this.mDataSpin.isJackpot && this.mSlotRewardPool.push(l.SLOT_ANIM_PRIORITY.ANIM_JACKPOT);
var e = this.mSlot.getMoneyBet();
if (this.mDataSpin.totalWin >= this.mSlot.mSlotConfig.RATE_SUPER_WIN * e) this.mSlotRewardPool.push(l.SLOT_ANIM_PRIORITY.ANIM_BIGWIN); else if (this.mDataSpin.totalWin >= this.mSlot.mSlotConfig.RATE_BIG_WIN * e) this.mSlotRewardPool.push(l.SLOT_ANIM_PRIORITY.ANIM_BIGWIN); else if (this.mDataSpin.totalWin > 0) {
this.mSlotRewardPool.push(l.SLOT_ANIM_PRIORITY.ANIM_WIN);
this.mSlot.node.scale;
}
}
};
o.prototype.showResult = function() {
var t = this.mSlotRewardPool.get();
if (t) {
if (t == l.SLOT_ANIM_PRIORITY.ANIM_ALL_LINE_WIN) {
this.mSlotMachine.showAllLineWin(this.mDataSpin.listLineWin);
this.showResult();
} else if (t == l.SLOT_ANIM_PRIORITY.ANIM_JACKPOT) this.mSlotEffect.showJackpot(this.showResult, this, this.mDataSpin.totalWin); else if (t == l.SLOT_ANIM_PRIORITY.ANIM_BIGWIN) this.mSlotEffect.showBigWin(this.showResult, this, this.mDataSpin.totalWin); else if (t == l.SLOT_ANIM_PRIORITY.ANIM_WIN) this.mSlotEffect.showWin(this.showResult, this, this.mDataSpin.totalWin); else if (t == l.SLOT_ANIM_PRIORITY.ANIM_SINGLE_LINE_WIN) {
var o = this;
this.mSlotRewardPool.push(l.SLOT_ANIM_PRIORITY.ANIM_SINGLE_LINE_WIN);
var e = this.mDataSpin.listLineWin[this.mIdxLineWin];
this.mSlotMachine.showLineWin(e);
var i = this.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_SINGLE_LINE_QUICK : this.mSlot.mSlotConfig.TIME_SINGLE_LINE;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(i), cc.callFunc(function() {
o.mIdxLineWin++;
o.mIdxLineWin >= o.mDataSpin.listLineWin.length && (o.mIdxLineWin = 0);
o.showResult();
}, this)));
this.nextSpin();
}
} else this.nextSpin();
};
o.prototype.nextSpin = function() {
this.onUpdatePot(this.mDataSpin.moneyJackpot);
this.mUserMoney = this.mDataSpin.userMoney;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.mUserMoney);
this.mState = l.SLOT_STATE.READY;
clearTimeout(this.mTimeoutNextSpin);
if (this.mIsAutoSpin || this.mIsQuickSpin) this.mTimeoutNextSpin = setTimeout(this.onBtnSpin.bind(this), this.mSlot.mSlotConfig.TIME_DELAY_NEXT_SPIN); else {
this.mSlotRoomUI.interactableBtnSpin(!0);
this.mSlot.btn100.interactable = !0;
this.mSlot.btn1k.interactable = !0;
this.mSlot.btn5k.interactable = !0;
this.mSlot.btn10k.interactable = !0;
this.mSlot.btnClose.interactable = !0;
}
};
o.prototype.onBtnAll = function(t, o) {
switch (o) {
case "spin":
this.onBtnSpin();
break;

case "auto_spin":
this.onBtnAutoSpin();
break;

case "quick_spin":
this.onBtnQuickSpin();
break;

case "stop_spin":
this.onBtnStopSpin();
break;

case "guide":
this.onBtnGuide();
break;

case "history":
this.onBtnHistory();
break;

case "rank":
this.onBtnRank();
break;

case "minimize":
this.onBtnMinimize();
break;

case "select_line":
this.onBtnSelectLine();
}
};
o.prototype.onBtnAutoSpin = function() {
this.mIsAutoSpin = this.mSlotRoomUI.btnAutoSpin.isChecked;
if (this.mIsAutoSpin) if (this.mUserMoney < this.getTotalBet()) this.mSlot.mTooltip.show("Số dư không đủ để quay"); else if (this.mIsQuickSpin) {
this.mSlot.mTooltip.show("Đang ở chế độ siêu tốc");
this.mSlotRoomUI.btnAutoSpin.isChecked = !1;
} else this.mState == l.SLOT_STATE.READY ? this.mState == l.SLOT_STATE.READY && this.spin() : this.mSlot.mTooltip.show("Không quay được khi chưa kết thúc phiên");
};
o.prototype.onBtnQuickSpin = function() {
this.mIsQuickSpin = this.mSlotRoomUI.btnQuickspin.isChecked;
if (this.mIsQuickSpin) if (this.mUserMoney < this.getTotalBet()) this.mSlot.mTooltip.show("Số dư không đủ để quay"); else if (this.mIsAutoSpin) {
this.mSlot.mTooltip.show("Đang ở chế độ tự quay");
this.mSlotRoomUI.btnAutoSpin.isChecked = !1;
} else this.mState == l.SLOT_STATE.READY ? this.mState == l.SLOT_STATE.READY && this.spin() : this.mSlot.mTooltip.show("Không quay được khi chưa kết thúc phiên");
};
o.prototype.onBtnStopSpin = function() {
this.mSlotRoomUI.visibleBtnStopSpin(!1);
this.mSlotRoomUI.btnAutoSpin.isChecked = !1;
this.mIsAutoSpin = !1;
};
o.prototype.onBtnRank = function() {
this.mSlot.mSlotNetwork.sendGetBigwin();
};
o.prototype.onBtnSelectLine = function() {
var t = this;
lngui.UIPopupManager.instance.showPopupFromPrefab(this.prfChooseLine, function(o) {
o.init(t);
});
};
o.prototype.updateLineSelect = function(o) {
this.mSlotRoomUI.updateLineSelect(o.length);
this.mSlotMachine.setListLineSelect(o);
this.updateTotalBet();
t.prototype.updateLineSelect.call(this, o);
};
o.prototype.onBtnGuide = function() {};
o.prototype.onBtnHistory = function() {
this.mSlot.mSlotNetwork.sendGetHistory();
};
o.prototype.onBtnMinimize = function() {
this.mSlot.node.scale = 0;
};
s([ p({
override: !0
}) ], o.prototype, "mSlotRoomUI", void 0);
s([ p({
override: !0
}) ], o.prototype, "mSlotEffect", void 0);
s([ p({
override: !0
}) ], o.prototype, "mSlotMachine", void 0);
s([ p(cc.Prefab) ], o.prototype, "prfChooseLine", void 0);
return s([ a ], o);
}(r.default);
e.default = h;
cc._RF.pop();
}, {
"../../base_slot/SlotConstant": void 0,
"../../base_slot/SlotRoom": void 0
} ],
Slot3x3SelectLine: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "d786dRrLH9NcIcVFvKUcYci", "Slot3x3SelectLine");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotSelectLine"), r = cc._decorator, c = r.ccclass, a = (r.property, 
function(t) {
n(o, t);
function o() {
return null !== t && t.apply(this, arguments) || this;
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
o.prototype.btnclose = function() {
for (var t = [], o = 0; o < this.listLineItem.length; o++) this.listLineItem[o].isChecked && t.push(o + 1);
0 == t.length ? this.mSlot.mTooltip.show("Bạn phải chọn ít nhất 1 dòng") : this.mSlotRoom.updateLineSelect(t);
this.hide();
};
return s([ c ], o);
}(l.default));
e.default = a;
cc._RF.pop();
}, {
"../../base_slot/SlotSelectLine": void 0
} ],
Slot3x3Var: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "c13abryf0pMgJnjgzU5Dx1V", "Slot3x3Var");
Object.defineProperty(e, "__esModule", {
value: !0
});
var i = function() {
function t() {}
t.api = {
negotiate: "https://et." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
hub: "ethub",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate,
GetNotification: "https://w-chef.luxy.club/api/vuabai/GetNotification",
GetHistory: "https://w-chef.luxy.club/api/vuabai/GetHistory",
GetHonorHistory: "https://w-chef.luxy.club/api/vuabai/GetHonorHistory",
GetJackpotHistory: "https://w-chef.luxy.club/api/vuabai/GetJackpotHistory"
};
t.jackPot = [ 0, 5e5, 5e6, 5e7 ];
return t;
}();
e.default = i;
cc._RF.pop();
}, {} ],
Slot3x3XPotCell: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "b3c06pBdKZFHapjjxjJa8li", "Slot3x3XPotCell");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotXPotCell"), r = cc._decorator, c = r.ccclass, a = (r.property, 
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
} else this.txtPotCount.node.active = !1;
};
return s([ c ], o);
}(l.default));
e.default = a;
cc._RF.pop();
}, {
"../../base_slot/SlotXPotCell": void 0
} ],
Slot3x3XPot: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "86500W4LspHtpWya8F1j3GS", "Slot3x3XPot");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotXPot"), r = cc._decorator, c = r.ccclass, a = r.property, p = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.listPotCell = [];
o.mSlot = null;
o.isEvent = !1;
return o;
}
o.prototype.init = function(o) {
t.prototype.init.call(this, o);
};
o.prototype.onEventXPot = function(t) {
this.isEvent = !1;
for (var o = 0; o < t.length; o++) t[o].EventJackpot > 0 && (this.isEvent = !0);
this.node.active = this.isEvent;
if (this.isEvent) {
var e = 0;
for (o = 0; o < t.length; o++) if (this.listPotCell[e]) {
this.listPotCell[e].setData(t[o]);
e++;
}
}
};
s([ a({
override: !0
}) ], o.prototype, "listPotCell", void 0);
return s([ c ], o);
}(l.default);
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotXPot": void 0
} ],
Slot3x3: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "0ab2aK4nb1CCYL7oqc5lFBh", "Slot3x3");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(o, e, l) : n(o, e)) || l);
return s > 3 && l && Object.defineProperty(o, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var l = t("../../base_slot/Slot"), r = t("../../base_slot/SlotConstant"), c = t("./Slot3x3Room"), a = t("./Slot3x3Var"), p = t("./Slot3x3XPot"), h = cc._decorator, u = h.ccclass, f = h.property, m = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.mSlotPot = null;
o.mSlotNetwork = null;
o.mSlotConfig = null;
o.btn100 = null;
o.btn1k = null;
o.btn5k = null;
o.btn10k = null;
o.btnClose = null;
o.mSlotRoom = null;
o.prePopupHistory = null;
o.prePopupHorno = null;
o.mRoomId = 2;
return o;
}
o.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
this.mIdGame = r.GAME_ID.CHEF;
this.btn100.interactable = !1;
this.btn1k.interactable = !1;
this.btn5k.interactable = !1;
this.btn10k.interactable = !1;
this.mSlotRoom.init(this);
};
o.prototype.onDestroy = function() {
t.prototype.onDestroy.call(this);
};
o.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.mSlotNetwork.connect, this);
this.mSlotNetwork.closeWS();
lngui.ZLog.log("=====================CLOSE WS NOTI===============================");
};
o.prototype.connectSuccess = function() {
this.mRoomId = 1;
this.mSlotNetwork.send("GetXJackpotInfo");
};
o.prototype.onJoinGameSuccess = function() {
this.init();
};
o.prototype.init = function() {
this.btn100.interactable = !0;
this.btn1k.interactable = !0;
this.btn5k.interactable = !0;
this.btn10k.interactable = !0;
this.btnClose.interactable = !0;
this.mSlotRoom.mSlotRoomUI.btnSpin.interactable = !0;
this.mSlotRoom.mSlotRoomUI.btnAutoSpin.interactable = !0;
this.mSlotRoom.mSlotRoomUI.btnQuickspin.interactable = !0;
this.mSlotRoom.mSlotRoomUI.btnSelectLine.interactable = !0;
};
o.prototype.onBtnClose = function() {
this.node.destroy();
};
o.prototype.onBtn100 = function() {
this.btn100._pressed && this.onSelectRoom(1);
};
o.prototype.onBtn1k = function() {
this.btn1k._pressed && this.onSelectRoom(2);
};
o.prototype.onBtn5k = function() {
this.btn5k._pressed && this.onSelectRoom(3);
};
o.prototype.onBtn10k = function() {
this.btn10k._pressed && this.onSelectRoom(4);
};
o.prototype.onSelectRoom = function(t) {
this.mRoomId = t;
if (this.mSlotRoom) {
var o = a.default.jackPot[this.mRoomId - 1];
this.mSlotRoom.onUpdatePot(o);
}
};
o.prototype.onUpdatePot = function(t) {
if (t) {
var o = 0;
for (var e in t) {
var i = t[e];
this.mListPot[o] = i;
o++;
}
this.mSlotRoom && this.mSlotRoom.onUpdatePot(this.mListPot[this.mRoomId - 1]);
}
};
o.prototype.getMoneyBet = function() {
var t = 0;
1 == this.mRoomId ? t = 100 : 2 == this.mRoomId ? t = 1e3 : 3 == this.mRoomId ? t = 5e3 : 4 == this.mRoomId && (t = 1e4);
return t;
};
s([ f(p.default) ], o.prototype, "mSlotPot", void 0);
s([ f({
override: !0
}) ], o.prototype, "mSlotNetwork", void 0);
s([ f({
override: !0
}) ], o.prototype, "mSlotConfig", void 0);
s([ f(cc.Toggle) ], o.prototype, "btn100", void 0);
s([ f(cc.Toggle) ], o.prototype, "btn1k", void 0);
s([ f(cc.Toggle) ], o.prototype, "btn5k", void 0);
s([ f(cc.Toggle) ], o.prototype, "btn10k", void 0);
s([ f(cc.Button) ], o.prototype, "btnClose", void 0);
s([ f(c.default) ], o.prototype, "mSlotRoom", void 0);
s([ f(cc.Prefab) ], o.prototype, "prePopupHistory", void 0);
s([ f(cc.Prefab) ], o.prototype, "prePopupHorno", void 0);
return s([ u ], o);
}(l.default);
e.default = m;
cc._RF.pop();
}, {
"../../base_slot/Slot": void 0,
"../../base_slot/SlotConstant": void 0,
"./Slot3x3Room": "Slot3x3Room",
"./Slot3x3Var": "Slot3x3Var",
"./Slot3x3XPot": "Slot3x3XPot"
} ]
}, {}, [ "Slot3x3", "Slot3x3Config", "Slot3x3Effect", "Slot3x3Entity", "Slot3x3Handler", "Slot3x3History", "Slot3x3HistoryCell", "Slot3x3HistoryDetail", "Slot3x3Item", "Slot3x3Line", "Slot3x3Machine", "Slot3x3Rank", "Slot3x3RankCell", "Slot3x3Reel", "Slot3x3Room", "Slot3x3RoomUI", "Slot3x3SelectLine", "Slot3x3Var", "Slot3x3XPot", "Slot3x3XPotCell" ]);