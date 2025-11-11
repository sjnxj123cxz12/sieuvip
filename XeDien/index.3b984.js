window.__require = function t(o, e, i) {
function n(s, r) {
if (!e[s]) {
if (!o[s]) {
var c = s.split("/");
c = c[c.length - 1];
if (!o[c]) {
var a = "function" == typeof __require && __require;
if (!r && a) return a(c, !0);
if (l) return l(c, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = c;
}
var p = e[s] = {
exports: {}
};
o[s][0].call(p.exports, function(t) {
return n(o[s][1][t] || t);
}, p, p.exports, t, o, e, i);
}
return e[s].exports;
}
for (var l = "function" == typeof __require && __require, s = 0; s < i.length; s++) n(i[s]);
return n;
}({
Slot3x3x2Config: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "2f7ebbgk41ODoXlFwIZUy5J", "Slot3x3x2Config");
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
}), l = this && this.__decorate || function(t, o, e, i) {
var n, l = arguments.length, s = l < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (l < 3 ? n(s) : l > 3 ? n(o, e, s) : n(o, e)) || s);
return l > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("../../base_slot/SlotConfig"), r = cc._decorator, c = r.ccclass, a = r.property, p = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.DISTANCE = 170;
o.DISTANCE2 = 80;
o.POS_ITEM2 = [ 40, 120, 200, 280, 360, 440 ];
o.LIST_SKE_ITEM = [];
o.LIST_SKE_KEY = [];
o.LIST_FRAME = [];
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
o.TIME_SINGLE_LINE_QUICK = .5;
o.LINE = [ [ 0, 3, 6 ], [ 0, 3, 7 ], [ 0, 3, 8 ], [ 0, 4, 6 ], [ 0, 4, 7 ], [ 0, 4, 8 ], [ 0, 5, 6 ], [ 0, 5, 7 ], [ 0, 5, 8 ], [ 1, 3, 6 ], [ 1, 3, 7 ], [ 1, 3, 8 ], [ 1, 4, 6 ], [ 1, 4, 7 ], [ 1, 4, 8 ], [ 1, 5, 6 ], [ 1, 5, 7 ], [ 1, 5, 8 ], [ 2, 3, 6 ], [ 2, 3, 7 ], [ 2, 3, 8 ], [ 2, 4, 6 ], [ 2, 4, 7 ], [ 2, 4, 8 ], [ 2, 5, 6 ], [ 2, 5, 7 ], [ 2, 5, 8 ] ];
return o;
}
l([ a(cc.Integer) ], o.prototype, "DISTANCE", void 0);
l([ a(cc.Integer) ], o.prototype, "DISTANCE2", void 0);
l([ a([ cc.Integer ]) ], o.prototype, "POS_ITEM2", void 0);
l([ a([ sp.SkeletonData ]) ], o.prototype, "LIST_SKE_ITEM", void 0);
l([ a([ cc.String ]) ], o.prototype, "LIST_SKE_KEY", void 0);
l([ a([ cc.SpriteFrame ]) ], o.prototype, "LIST_FRAME", void 0);
l([ a(cc.Integer) ], o.prototype, "TIME_MOVE_ITEM_START_QUICK", void 0);
l([ a(cc.Integer) ], o.prototype, "TIME_MOVE_ITEM_START", void 0);
l([ a(cc.Integer) ], o.prototype, "TIME_MOVE_ITEM_QUICK", void 0);
l([ a(cc.Integer) ], o.prototype, "TIME_MOVE_ITEM", void 0);
l([ a(cc.Integer) ], o.prototype, "TIME_MOVE_STOP_ITEM_QUICK", void 0);
l([ a(cc.Integer) ], o.prototype, "TIME_MOVE_STOP_ITEM", void 0);
l([ a(cc.Integer) ], o.prototype, "TIME_FIRST_REEL_STOP", void 0);
l([ a(cc.Integer) ], o.prototype, "TIME_FIRST_REEL_STOP_QUICK", void 0);
l([ a(cc.Integer) ], o.prototype, "TIME_REEL_STOP", void 0);
l([ a(cc.Integer) ], o.prototype, "TIME_REEL_STOP_QUICK", void 0);
l([ a(cc.Integer) ], o.prototype, "TIME_SINGLE_LINE", void 0);
l([ a(cc.Integer) ], o.prototype, "TIME_SINGLE_LINE_QUICK", void 0);
return l([ c ], o);
}(s.default);
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotConfig": void 0
} ],
Slot3x3x2Effect: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "20f0dT69ClCD5W4eCg2Dtzc", "Slot3x3x2Effect");
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
}), l = this && this.__decorate || function(t, o, e, i) {
var n, l = arguments.length, s = l < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (l < 3 ? n(s) : l > 3 ? n(o, e, s) : n(o, e)) || s);
return l > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("../../base_slot/SlotEffect"), r = t("../../base_slot/util/FormatUtil"), c = cc._decorator, a = c.ccclass, p = (c.property, 
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
return l([ a ], o);
}(s.default));
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotEffect": void 0,
"../../base_slot/util/FormatUtil": void 0
} ],
Slot3x3x2Entity: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "0d91aYZm8ZADZzoF+3FDV8T", "Slot3x3x2Entity");
Object.defineProperty(e, "__esModule", {
value: !0
});
e.DataSlot3x3x2Spin = void 0;
e.DataSlot3x3x2Spin = function() {
this.accountId = 0;
this.session = 0;
this.listItem = [];
this.listLineWin = [];
this.totalBet = 0;
this.totalWin = 0;
this.isJackpot = !1;
this.moneyJackpot = 0;
this.userMoney = 0;
};
cc._RF.pop();
}, {} ],
Slot3x3x2Handler: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "96539BzhXJPOY8qZsSt5+Fi", "Slot3x3x2Handler");
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
}), l = this && this.__decorate || function(t, o, e, i) {
var n, l = arguments.length, s = l < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (l < 3 ? n(s) : l > 3 ? n(o, e, s) : n(o, e)) || s);
return l > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("./Slot3x3x2Var"), r = t("./Slot3x3x2Entity"), c = t("../../base_slot/SlotHandler"), a = t("./Slot3x3x2Rank"), p = cc._decorator, h = p.ccclass, u = (p.property, 
function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.mSlot = null;
o.mListenerKey = "SlotGozilar";
return o;
}
o.prototype.connect = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect(this.mListenerKey, s.default.api.negotiate, s.default.api.hub, s.default.api.gate, !1);
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
if (!this.mSlot.isConnect) {
this.mSlot.isConnect = !0;
this.mSlot.connectSuccess();
}
var e = t.M;
if (t.R < 0) switch (t.R) {
case -51:
this.mSlot.mTooltip.show("Số dư không đủ để quay");
this.showError();
return;

default:
this.mSlot.mTooltip.show("Lỗi hệ thống");
this.showError();
return;
}
console.log(t);
if (null != e && e.length > 0) for (var i = function(t) {
var i = e[t].M, l = e[t].A;
if (0 == i.localeCompare("joinGame")) n.onJoinGame(l[0]); else if (0 == i.localeCompare("UpdateCurrentJackPot")) {
l[0] = l[0].split("|");
n.onUpdateJackpot(l[0]);
} else if (0 == i.localeCompare("resultSpin")) n.onSpin(l[0]); else if (0 == i.localeCompare("honor")) {
var s = lngui.UIPopupManager.instance.find(a.default);
s ? s.getComponent(a.default).initData(n.mSlot, l[0]) : lngui.UIPopupManager.instance.showPopupFromPrefab(n.mSlot.preRank, function(t) {
t.initData(o.mSlot, l[0]);
});
} else 0 == i.localeCompare("history") && lngui.UIPopupManager.instance.showPopupFromPrefab(n.mSlot.preHistory, function(t) {
t.init(o.mSlot);
t.setData(null, l[0]);
});
}, n = this, l = 0; l < e.length; l++) i(l);
};
o.prototype.showError = function() {
var t = {
SpinData: {
SpinID: 0,
TotalBetValue: 0,
PayLinePrizeValue: 0,
Slots: [ 9, 10, 8, 10, 9, 6, 8, 9, 10, 0, 3, 0, 0, 3, 0 ],
PrizeLines: []
}
}, o = new r.DataSlot3x3x2Spin();
o.accountId = lngui.UserManager.instance.mainUserInfo.AccountID;
o.session = t.SpinData.SpinID;
o.totalBet = t.SpinData.TotalBetValue;
o.totalWin = t.SpinData.PayLinePrizeValue;
o.userMoney = lngui.UserManager.instance.mainUserInfo.Money + this.mSlot.mSlotRoom.getTotalBet();
o.listItem = t.SpinData.Slots || [];
o.listLineWin = [];
this.mSlot.mSlotRoom.showError(o);
};
o.prototype.onJoinGame = function(t) {
t ? this.mSlot.onJoinGameSuccess(t) : this.mSlot.onJoinGameFail();
};
o.prototype.onUpdateJackpot = function(t) {
s.default.jackPot = t;
this.mSlot && this.mSlot.onUpdatePot(t);
};
o.prototype.onSpin = function(t) {
var o = t, e = new r.DataSlot3x3x2Spin();
e.userMoney = o.SpinData.Balance;
e.accountId = o.AccountID;
e.session = o.SpinData.SpinID;
e.isJackpot = o.SpinData.IsJackpot;
e.moneyJackpot = o.SpinData.Jackpot;
e.totalWin = o.SpinData.TotalPrizeValue;
for (var i = o.SpinData.SlotsData.split(","), n = 0; n < i.length; n++) e.listItem.push(parseInt(i[n]));
var l = o.SpinData.PositionData.split(";");
if ("" == l[0]) e.listLineWin = []; else {
var s = l[0].split(",");
for (n = 0; n < s.length; n++) e.listLineWin.push(parseInt(s[n]));
}
this.mSlot.mSlotRoom && this.mSlot.mSlotRoom.stopSpin(e);
};
o.prototype.sendSpin = function() {
this.mSignalr.send("Spin", []);
};
o.prototype.gettransactionhistory = function() {
this.mSignalr.send("gettransactionhistory", []);
};
o.prototype.sendGetJackpot = function() {
this.mSignalr.send("GetJackpotHistory");
};
o.prototype.sendGetBigwin = function() {
this.mSignalr.send("gethonorhistory", [ 0 ]);
};
return l([ h ], o);
}(c.default));
e.default = u;
cc._RF.pop();
}, {
"../../base_slot/SlotHandler": void 0,
"./Slot3x3x2Entity": "Slot3x3x2Entity",
"./Slot3x3x2Rank": "Slot3x3x2Rank",
"./Slot3x3x2Var": "Slot3x3x2Var"
} ],
Slot3x3x2HistoryCell: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "c3794wZnOdCepdTFjgJAXSb", "Slot3x3x2HistoryCell");
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
}), l = this && this.__decorate || function(t, o, e, i) {
var n, l = arguments.length, s = l < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (l < 3 ? n(s) : l > 3 ? n(o, e, s) : n(o, e)) || s);
return l > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("../../base_slot/util/FormatUtil"), r = cc._decorator, c = r.ccclass, a = r.property, p = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.txtPhien = null;
o.txtTime = null;
o.txtTotalBet = null;
o.txtMoneyWin = null;
o.prePopupHistoryDetail = null;
o.mDataHistory = null;
o.mSlot = null;
return o;
}
o.prototype.setData = function(t) {
if (t) {
this.mDataHistory = t;
this.txtPhien.string = "" + t.SpinID;
this.txtTime.string = s.default.formatDateTime(t.CreatedTime, !0, !0);
this.txtTotalBet.string = s.default.formatNumber(t.BetValue);
this.txtMoneyWin.string = s.default.formatNumber(t.PrizeValue);
}
};
o.prototype.setDelegate = function(t) {
void 0 === t && (t = null);
this.mSlot = t;
};
o.prototype.onBtnDetail = function() {
var t = this;
lngui.UIPopupManager.instance.showPopupFromPrefab(this.prePopupHistoryDetail, function(o) {
o.setData(t.mDataHistory, t.mSlot);
});
};
l([ a(cc.Label) ], o.prototype, "txtPhien", void 0);
l([ a(cc.Label) ], o.prototype, "txtTime", void 0);
l([ a(cc.Label) ], o.prototype, "txtTotalBet", void 0);
l([ a(cc.Label) ], o.prototype, "txtMoneyWin", void 0);
l([ a(cc.Prefab) ], o.prototype, "prePopupHistoryDetail", void 0);
return l([ c ], o);
}(cc.Component);
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/util/FormatUtil": void 0
} ],
Slot3x3x2HistoryDetail: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "eb645uFCHBIwbhjAbHNTK8x", "Slot3x3x2HistoryDetail");
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
}), l = this && this.__decorate || function(t, o, e, i) {
var n, l = arguments.length, s = l < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (l < 3 ? n(s) : l > 3 ? n(o, e, s) : n(o, e)) || s);
return l > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("../../base_slot/util/FormatUtil"), r = t("./Slot3x3x2Item"), c = cc._decorator, a = c.ccclass, p = c.property, h = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.txtSession = null;
o.txtMoneyWin = null;
o.listItem = [];
return o;
}
o.prototype.setData = function(t, o) {
this.txtSession.string = "#" + t.SpinID;
this.txtMoneyWin.string = s.default.formatNumber(t.PrizeValue);
for (var e = t.SlotsData.split(","), i = 0; i < e.length; i++) {
var n = parseInt(e[i]);
this.listItem[i].mSlot = o;
this.listItem[i].setId(n);
}
};
o.prototype.onBtnClose = function() {
this.node.destroy();
};
l([ p(cc.Label) ], o.prototype, "txtSession", void 0);
l([ p(cc.Label) ], o.prototype, "txtMoneyWin", void 0);
l([ p([ r.default ]) ], o.prototype, "listItem", void 0);
return l([ a ], o);
}(lngui.UIPopup);
e.default = h;
cc._RF.pop();
}, {
"../../base_slot/util/FormatUtil": void 0,
"./Slot3x3x2Item": "Slot3x3x2Item"
} ],
Slot3x3x2History: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "0dc3bj99ktP/YXnp8nEzXpL", "Slot3x3x2History");
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
}), l = this && this.__decorate || function(t, o, e, i) {
var n, l = arguments.length, s = l < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (l < 3 ? n(s) : l > 3 ? n(o, e, s) : n(o, e)) || s);
return l > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("../../base_slot/SlotHistory"), r = cc._decorator, c = r.ccclass, a = (r.property, 
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
if (0 != o.Transactions.length) {
this.mListDataCell = o.Transactions;
this.scrollview.content.destroyAllChildren();
this.mListCell = [];
var e = this.mListDataCell.length;
this.scrollview.content.height = e * (this.heightItem + this.spacing) + this.spacing;
for (var i = this.spawnCount <= e ? this.spawnCount : e, n = 0; n < i; n++) {
var l = cc.instantiate(this.cellHistory), s = l.getComponent("Slot3x3x2HistoryCell");
s.setData(this.mListDataCell[n], n);
s.setDelegate(this.mSlot);
var r = -s.node.height * (.5 + n) - this.spacing * (n + 1);
s.node.setPosition(0, r);
this.scrollview.content.addChild(l);
this.mListCell.push(s);
}
}
};
return l([ c ], o);
}(s.default));
e.default = a;
cc._RF.pop();
}, {
"../../base_slot/SlotHistory": void 0
} ],
Slot3x3x2Item: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "6ad5bMWCxdMN69iI4IDSz6b", "Slot3x3x2Item");
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
}), l = this && this.__decorate || function(t, o, e, i) {
var n, l = arguments.length, s = l < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (l < 3 ? n(s) : l > 3 ? n(o, e, s) : n(o, e)) || s);
return l > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("../../base_slot/SlotItem"), r = t("../../base_slot/util/Util"), c = cc._decorator, a = c.ccclass, p = (c.property, 
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
var t = -1, o = [];
if (0 == this.mSlotReel.mId || 1 == this.mSlotReel.mId || 2 == this.mSlotReel.mId) {
o = [ 0, 1, 6, 7, 8, 9 ];
t = r.default.random(0, o.length - 1);
} else {
o = [ 0, 3, 4, 5 ];
t = r.default.random(0, o.length - 1);
}
return o[t];
};
o.prototype.setId = function(t) {
if (this.mId != t) {
this.mId = t;
if (3 == this.mId || 4 == this.mId || 5 == this.mId || 7 == this.mId || 8 == this.mId || 9 == this.mId || 1 == this.mId || 0 == this.mId || 6 == this.mId || 10 == this.mId) {
this.sprItem.node.active = !0;
this.skeItem.node.active = !1;
this.setFrameItem(this.mId);
this.sprItem.node.scale = .8;
} else {
this.sprItem.node.active = !1;
this.skeItem.node.active = !0;
this.setSkeData(this.mId);
this.skeItem.setAnimation(0, "Idle", !0);
this.skeItem.loop = !0;
}
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
var i = this.node.y - 3 * this.mSlot.mSlotConfig.DISTANCE, n = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START_QUICK : this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START;
4 == this.mSlotReel.mId && (i = this.node.y - 3 * this.mSlot.mSlotConfig.DISTANCE2 + 165);
i = 5 == this.mSlotReel.mId ? this.node.y - 3 * this.mSlot.mSlotConfig.DISTANCE2 - 5 : this.node.y - 3 * this.mSlot.mSlotConfig.DISTANCE + 125;
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
var i = this.node.y - 3 * this.mSlot.mSlotConfig.DISTANCE, n = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_MOVE_ITEM_QUICK : this.mSlot.mSlotConfig.TIME_MOVE_ITEM;
4 == this.mSlotReel.mId && (i = this.node.y - 3 * this.mSlot.mSlotConfig.DISTANCE2 + 165);
i = 5 == this.mSlotReel.mId ? this.node.y - 3 * this.mSlot.mSlotConfig.DISTANCE2 - 5 : this.node.y - 3 * this.mSlot.mSlotConfig.DISTANCE + 125;
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
var e = this.node.y - 3 * this.mSlot.mSlotConfig.DISTANCE - 80, i = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_MOVE_STOP_ITEM_QUICK : this.mSlot.mSlotConfig.TIME_MOVE_STOP_ITEM;
4 == this.mSlotReel.mId && (e = this.node.y - 3 * this.mSlot.mSlotConfig.DISTANCE2 + 165);
e = 5 == this.mSlotReel.mId ? this.node.y - 3 * this.mSlot.mSlotConfig.DISTANCE2 - 5 : this.node.y - 3 * this.mSlot.mSlotConfig.DISTANCE + 125;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.moveTo(i, o.node.x, e).easing(cc.easeSineOut()), cc.callFunc(function() {
o.reset();
o.mSlotReel.cbStopAllItemMoveStop();
}, this)));
};
o.prototype.setFrameItem = function(t) {
var o = -1;
3 == t ? o = 0 : 4 == t ? o = 1 : 5 == t ? o = 2 : 7 == t ? o = 3 : 8 == t ? o = 4 : 9 == t ? o = 5 : 1 == t && (o = 6);
6 == t ? o = 7 : 0 != t && 10 != t || (o = 8);
this.sprItem.spriteFrame = this.mSlot.mSlotConfig.LIST_FRAME[o];
};
o.prototype.reset = function() {
if (-3 == this.mIndex) {
this.mIndex = 5;
0 == this.mSlotReel.mId || 1 == this.mSlotReel.mId || 2 == this.mSlotReel.mId ? this.node.y = this.mSlot.mSlotConfig.POS_ITEM[this.mIndex] : this.node.y = this.mSlot.mSlotConfig.POS_ITEM2[this.mIndex];
} else if (-2 == this.mIndex) {
this.mIndex = 4;
0 == this.mSlotReel.mId || 1 == this.mSlotReel.mId || 2 == this.mSlotReel.mId ? this.node.y = this.mSlot.mSlotConfig.POS_ITEM[this.mIndex] : this.node.y = this.mSlot.mSlotConfig.POS_ITEM2[this.mIndex];
} else if (-1 == this.mIndex) {
this.mIndex = 3;
0 == this.mSlotReel.mId || 1 == this.mSlotReel.mId || 2 == this.mSlotReel.mId ? this.node.y = this.mSlot.mSlotConfig.POS_ITEM[this.mIndex] : this.node.y = this.mSlot.mSlotConfig.POS_ITEM2[this.mIndex];
}
};
return l([ a ], o);
}(s.default));
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotItem": void 0,
"../../base_slot/util/Util": void 0
} ],
Slot3x3x2Line: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "95b31E+YiJHh7U7NgAO8Mkb", "Slot3x3x2Line");
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
}), l = this && this.__decorate || function(t, o, e, i) {
var n, l = arguments.length, s = l < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (l < 3 ? n(s) : l > 3 ? n(o, e, s) : n(o, e)) || s);
return l > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("../../base_slot/SlotLine"), r = cc._decorator, c = r.ccclass, a = (r.property, 
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
return l([ c ], o);
}(s.default));
e.default = a;
cc._RF.pop();
}, {
"../../base_slot/SlotLine": void 0
} ],
Slot3x3x2Machine: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "a2b905LUF9AMpeHYkFdraId", "Slot3x3x2Machine");
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
}), l = this && this.__decorate || function(t, o, e, i) {
var n, l = arguments.length, s = l < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (l < 3 ? n(s) : l > 3 ? n(o, e, s) : n(o, e)) || s);
return l > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("../../base_slot/SlotMachine"), r = cc._decorator, c = r.ccclass, a = r.property, p = function(t) {
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
this.listSlotReel[0].setIdItemResult([ t[2], t[1], t[0] ]);
this.listSlotReel[1].setIdItemResult([ t[5], t[4], t[3] ]);
this.listSlotReel[2].setIdItemResult([ t[8], t[7], t[6] ]);
this.listSlotReel[3].setIdItemResult([ t[11], t[10], t[9] ]);
this.listSlotReel[4].setIdItemResult([ t[14], t[13], t[12] ]);
var o = this, e = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_FIRST_REEL_STOP_QUICK : this.mSlot.mSlotConfig.TIME_FIRST_REEL_STOP, i = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_REEL_STOP_QUICK : this.mSlot.mSlotConfig.TIME_REEL_STOP;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(e), cc.callFunc(function() {
o.listSlotReel[0].stopSpin();
}, this), cc.delayTime(i), cc.callFunc(function() {
o.listSlotReel[1].stopSpin();
}, this), cc.delayTime(i), cc.callFunc(function() {
o.listSlotReel[2].stopSpin();
}, this), cc.delayTime(i), cc.callFunc(function() {
o.listSlotReel[3].stopSpin();
}, this), cc.delayTime(i), cc.callFunc(function() {
o.listSlotReel[4].stopSpin();
}, this)));
};
o.prototype.showLineWin = function(t) {
for (var o = 0; o < this.mListSlotItemResult.length; o++) this.mListSlotItemResult[o].showLose();
var e = this.getSlotLineById(t);
e && e.showWin();
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
this.mListSlotItemResult.push(this.listSlotReel[0].getSlotItemByIndex(1));
this.mListSlotItemResult.push(this.listSlotReel[0].getSlotItemByIndex(0));
this.mListSlotItemResult.push(this.listSlotReel[1].getSlotItemByIndex(2));
this.mListSlotItemResult.push(this.listSlotReel[1].getSlotItemByIndex(1));
this.mListSlotItemResult.push(this.listSlotReel[1].getSlotItemByIndex(0));
this.mListSlotItemResult.push(this.listSlotReel[2].getSlotItemByIndex(2));
this.mListSlotItemResult.push(this.listSlotReel[2].getSlotItemByIndex(1));
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
l([ a({
override: !0
}) ], o.prototype, "listSlotReel", void 0);
l([ a({
override: !0
}) ], o.prototype, "listSlotLine", void 0);
return l([ c ], o);
}(s.default);
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotMachine": void 0
} ],
Slot3x3x2RankCell: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "e8170P+QxVDuIp4GwnPsF/V", "Slot3x3x2RankCell");
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
}), l = this && this.__decorate || function(t, o, e, i) {
var n, l = arguments.length, s = l < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (l < 3 ? n(s) : l > 3 ? n(o, e, s) : n(o, e)) || s);
return l > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("../../base_slot/SlotRankCell"), r = t("../../base_slot/util/FormatUtil"), c = cc._decorator, a = c.ccclass, p = c.property, h = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.txtPhien = null;
return o;
}
o.prototype.setData = function(t, o) {
this.mIdx = o;
this.txtBet.string = t.SpinID;
this.txtTime.string = r.default.formatDateTime(t.CreatedTime, !0, !0);
this.txtUserName.string = t.Username;
this.txtWin.string = r.default.formatNumber(t.PrizeValue);
this.txtDecription.string = 2 == t.Type ? "Nổ Hũ" : "Thắng lớn";
};
l([ p(cc.Label) ], o.prototype, "txtPhien", void 0);
return l([ a ], o);
}(s.default);
e.default = h;
cc._RF.pop();
}, {
"../../base_slot/SlotRankCell": void 0,
"../../base_slot/util/FormatUtil": void 0
} ],
Slot3x3x2Rank: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "a1afeAU8lRMSILEOOY8/Lb0", "Slot3x3x2Rank");
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
}), l = this && this.__decorate || function(t, o, e, i) {
var n, l = arguments.length, s = l < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (l < 3 ? n(s) : l > 3 ? n(o, e, s) : n(o, e)) || s);
return l > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("../../base_slot/SlotRank"), r = cc._decorator, c = r.ccclass, a = (r.property, 
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
i.getComponent("Slot3x3x2RankCell").setData(t[e], e);
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
return l([ c ], o);
}(s.default));
e.default = a;
cc._RF.pop();
}, {
"../../base_slot/SlotRank": void 0
} ],
Slot3x3x2Reel: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "8f299hJR8VPALdQG7rM8nI2", "Slot3x3x2Reel");
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
}), l = this && this.__decorate || function(t, o, e, i) {
var n, l = arguments.length, s = l < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (l < 3 ? n(s) : l > 3 ? n(o, e, s) : n(o, e)) || s);
return l > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("../../base_slot/SlotReel"), r = cc._decorator, c = r.ccclass, a = r.property, p = function(t) {
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
l([ a({
override: !0
}) ], o.prototype, "listItem", void 0);
return l([ c ], o);
}(s.default);
e.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotReel": void 0
} ],
Slot3x3x2RoomUI: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "e7225wavuxBjoxfS0TNBFmq", "Slot3x3x2RoomUI");
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
}), l = this && this.__decorate || function(t, o, e, i) {
var n, l = arguments.length, s = l < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (l < 3 ? n(s) : l > 3 ? n(o, e, s) : n(o, e)) || s);
return l > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("../../base_slot/SlotRoomUI"), r = cc._decorator, c = r.ccclass, a = (r.property, 
function(t) {
n(o, t);
function o() {
return null !== t && t.apply(this, arguments) || this;
}
return l([ c ], o);
}(s.default));
e.default = a;
cc._RF.pop();
}, {
"../../base_slot/SlotRoomUI": void 0
} ],
Slot3x3x2Room: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "3b95dhmlNNGgLAs8DpgNTgN", "Slot3x3x2Room");
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
}), l = this && this.__decorate || function(t, o, e, i) {
var n, l = arguments.length, s = l < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (l < 3 ? n(s) : l > 3 ? n(o, e, s) : n(o, e)) || s);
return l > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("../../base_slot/SlotConstant"), r = t("../../base_slot/SlotRoom"), c = cc._decorator, a = c.ccclass, p = c.property, h = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.mSlotRoomUI = null;
o.mSlotEffect = null;
o.mSlotMachine = null;
o.skeSpin = null;
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
this.mState = s.SLOT_STATE.SPINING;
this.mUserMoney -= this.getTotalBet();
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.mUserMoney);
this.mSlotRoomUI.interactableBtnSpin(!1);
this.mSlot.btn100.interactable = !1;
this.mSlot.btn1k.interactable = !1;
this.mSlot.btn5k.interactable = !1;
this.mSlot.btn10k.interactable = !1;
this.mSlot.btnClose.interactable = !1;
this.mSlotMachine.getNumLineSelect().join(",");
this.mSlot.mSlotNetwork.sendSpin();
};
o.prototype.stopSpin = function(o) {
t.prototype.stopSpin.call(this, o);
this.mSlotMachine.stopSpin();
if (this.mDataSpin.listLineWin.length > 0) {
this.mSlotRewardPool.push(s.SLOT_ANIM_PRIORITY.ANIM_ALL_LINE_WIN);
this.mSlotRewardPool.push(s.SLOT_ANIM_PRIORITY.ANIM_SINGLE_LINE_WIN);
this.mDataSpin.isJackpot && this.mSlotRewardPool.push(s.SLOT_ANIM_PRIORITY.ANIM_JACKPOT);
var e = this.mSlot.getMoneyBet();
this.mDataSpin.totalWin >= this.mSlot.mSlotConfig.RATE_SUPER_WIN * e ? this.mSlotRewardPool.push(s.SLOT_ANIM_PRIORITY.ANIM_BIGWIN) : this.mDataSpin.totalWin >= this.mSlot.mSlotConfig.RATE_BIG_WIN * e ? this.mSlotRewardPool.push(s.SLOT_ANIM_PRIORITY.ANIM_BIGWIN) : this.mDataSpin.totalWin > 0 && this.mSlotRewardPool.push(s.SLOT_ANIM_PRIORITY.ANIM_WIN);
}
};
o.prototype.showResult = function() {
var t = this.mSlotRewardPool.get();
if (t) {
if (t == s.SLOT_ANIM_PRIORITY.ANIM_ALL_LINE_WIN) {
this.mSlotMachine.showAllLineWin(this.mDataSpin.listLineWin);
this.showResult();
} else if (t == s.SLOT_ANIM_PRIORITY.ANIM_JACKPOT) this.mSlotEffect.showJackpot(this.showResult, this, this.mDataSpin.totalWin); else if (t == s.SLOT_ANIM_PRIORITY.ANIM_BIGWIN) this.mSlotEffect.showBigWin(this.showResult, this, this.mDataSpin.totalWin); else if (t == s.SLOT_ANIM_PRIORITY.ANIM_WIN) {
this.mSlotEffect.showWin(this.showResult, this, this.mDataSpin.totalWin);
this.mSlot.node.scale;
} else if (t == s.SLOT_ANIM_PRIORITY.ANIM_SINGLE_LINE_WIN) {
var o = this;
this.mSlotRewardPool.push(s.SLOT_ANIM_PRIORITY.ANIM_SINGLE_LINE_WIN);
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
this.mState = s.SLOT_STATE.READY;
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
o.prototype.getTotalBet = function() {
return this.mSlot.getMoneyBet();
};
o.prototype.onBtnAll = function(t, o) {
switch (o) {
case "spin":
this.onBtnSpin();
break;

case "auto_spin":
this.mSlotRoomUI.btnAutoSpin._pressed && this.onBtnAutoSpin();
break;

case "quick_spin":
this.mSlotRoomUI.btnQuickspin._pressed && this.onBtnQuickSpin();
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
}
};
o.prototype.onBtnAutoSpin = function() {
this.mIsAutoSpin = this.mSlotRoomUI.btnAutoSpin.isChecked;
if (this.mIsAutoSpin) if (this.mUserMoney < this.getTotalBet()) this.mSlot.mTooltip.show("Số dư không đủ để quay"); else if (this.mIsQuickSpin) {
this.mSlot.mTooltip.show("Đang ở chế độ siêu tốc");
this.mSlotRoomUI.btnAutoSpin.isChecked = !1;
} else this.mState == s.SLOT_STATE.READY ? this.mState == s.SLOT_STATE.READY && this.spin() : this.mSlot.mTooltip.show("Không quay được khi chưa kết thúc phiên");
};
o.prototype.onBtnQuickSpin = function() {
this.mIsQuickSpin = this.mSlotRoomUI.btnQuickspin.isChecked;
if (this.mIsQuickSpin) if (this.mUserMoney < this.getTotalBet()) this.mSlot.mTooltip.show("Số dư không đủ để quay"); else if (this.mIsAutoSpin) {
this.mSlot.mTooltip.show("Đang ở chế độ tự quay");
this.mSlotRoomUI.btnQuickspin.isChecked = !1;
} else this.mState == s.SLOT_STATE.READY ? this.mState == s.SLOT_STATE.READY && this.spin() : this.mSlot.mTooltip.show("Không quay được khi chưa kết thúc phiên");
};
o.prototype.onBtnGuide = function() {};
o.prototype.onBtnHistory = function() {
this.mSlot.mSlotNetwork.gettransactionhistory();
};
o.prototype.onBtnRank = function() {
this.mSlot.mSlotNetwork.sendGetJackpot();
};
o.prototype.onBtnMinimize = function() {
this.mSlot.node.scale = 0;
};
l([ p({
override: !0
}) ], o.prototype, "mSlotRoomUI", void 0);
l([ p({
override: !0
}) ], o.prototype, "mSlotEffect", void 0);
l([ p({
override: !0
}) ], o.prototype, "mSlotMachine", void 0);
l([ p(sp.Skeleton) ], o.prototype, "skeSpin", void 0);
return l([ a ], o);
}(r.default);
e.default = h;
cc._RF.pop();
}, {
"../../base_slot/SlotConstant": void 0,
"../../base_slot/SlotRoom": void 0
} ],
Slot3x3x2Var: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "8023bXeZahMTb0PFaceb4g+", "Slot3x3x2Var");
Object.defineProperty(e, "__esModule", {
value: !0
});
var i = function() {
function t() {}
t.api = {
negotiate: "https://angrybird." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
hub: "angrybirdhub",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate,
AccountHistory: "https://w-godzilla.luxy.club/api/SuperNova/AccountHistory",
GetHonorHistory: "https://w-godzilla.luxy.club/api/SuperNova/GetHonorHistory",
GetJackpotHistory: "https://w-godzilla.luxy.club/api/SuperNova/GetJackpotHistory"
};
t.jackPot = [ 0, 5e5, 5e6, 5e7 ];
return t;
}();
e.default = i;
cc._RF.pop();
}, {} ],
Slot3x3x2: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "37de8okScNBXrD7/WE6aeHn", "Slot3x3x2");
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
}), l = this && this.__decorate || function(t, o, e, i) {
var n, l = arguments.length, s = l < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (l < 3 ? n(s) : l > 3 ? n(o, e, s) : n(o, e)) || s);
return l > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("./Slot3x3x2Room"), r = t("../../base_slot/Slot"), c = t("../../base_slot/SlotConstant"), a = t("./Slot3x3x2Var"), p = cc._decorator, h = p.ccclass, u = p.property, m = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.mSlotNetwork = null;
o.mSlotConfig = null;
o.btn100 = null;
o.btn1k = null;
o.btn5k = null;
o.btn10k = null;
o.btnClose = null;
o.mSlotRoom = null;
o.preHistory = null;
o.preRank = null;
o.mRoomId = 1;
return o;
}
o.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
this.mIdGame = c.GAME_ID.GODZILLA;
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
};
o.prototype.connectSuccess = function() {
this.mRoomId = 1;
this.mSlotNetwork.send("PlayNow", this.mRoomId);
this.mSlotNetwork.send("GetXJackpotInfo", []);
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
this.mSlotNetwork.send("PlayNow", this.mRoomId);
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
l([ u({
override: !0
}) ], o.prototype, "mSlotNetwork", void 0);
l([ u({
override: !0
}) ], o.prototype, "mSlotConfig", void 0);
l([ u(cc.Toggle) ], o.prototype, "btn100", void 0);
l([ u(cc.Toggle) ], o.prototype, "btn1k", void 0);
l([ u(cc.Toggle) ], o.prototype, "btn5k", void 0);
l([ u(cc.Toggle) ], o.prototype, "btn10k", void 0);
l([ u(cc.Button) ], o.prototype, "btnClose", void 0);
l([ u(s.default) ], o.prototype, "mSlotRoom", void 0);
l([ u(cc.Prefab) ], o.prototype, "preHistory", void 0);
l([ u(cc.Prefab) ], o.prototype, "preRank", void 0);
return l([ h ], o);
}(r.default);
e.default = m;
cc._RF.pop();
}, {
"../../base_slot/Slot": void 0,
"../../base_slot/SlotConstant": void 0,
"./Slot3x3x2Room": "Slot3x3x2Room",
"./Slot3x3x2Var": "Slot3x3x2Var"
} ]
}, {}, [ "Slot3x3x2", "Slot3x3x2Config", "Slot3x3x2Effect", "Slot3x3x2Entity", "Slot3x3x2Handler", "Slot3x3x2History", "Slot3x3x2HistoryCell", "Slot3x3x2HistoryDetail", "Slot3x3x2Item", "Slot3x3x2Line", "Slot3x3x2Machine", "Slot3x3x2Rank", "Slot3x3x2RankCell", "Slot3x3x2Reel", "Slot3x3x2Room", "Slot3x3x2RoomUI", "Slot3x3x2Var" ]);