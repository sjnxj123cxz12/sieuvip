window.__require = function t(e, o, n) {
function i(s, c) {
if (!o[s]) {
if (!e[s]) {
var a = s.split("/");
a = a[a.length - 1];
if (!e[a]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(a, !0);
if (r) return r(a, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = a;
}
var u = o[s] = {
exports: {}
};
e[s][0].call(u.exports, function(t) {
return i(e[s][1][t] || t);
}, u, u.exports, t, e, o, n);
}
return o[s].exports;
}
for (var r = "function" == typeof __require && __require, s = 0; s < n.length; s++) i(n[s]);
return i;
}({
BatNanTLCtrl: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a6be6pKAqFA4qq74O1oYrjB", "BatNanTLCtrl");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LocThuMain"), c = cc._decorator, a = c.ccclass, l = (c.property, function(t) {
i(e, t);
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
var o = t.touch.getDelta();
this.node.x += o.x;
this.node.y += o.y;
};
e.prototype.getBatDistance = function() {
var t = this.dataSource.skeDice.node.position;
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
return r([ a ], e);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {
"./LocThuMain": "LocThuMain"
} ],
HistoryLocThuCell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "279d9s1qfRJ6Ko5PxInnyH9", "HistoryLocThuCell");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../base_slot/util/Util"), c = cc._decorator, a = c.ccclass, l = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeBg = null;
e.lblSession = null;
e.lblTime = null;
e.lblBet = null;
e.lblWin = null;
e.mDataCell = null;
e.mPopupHistory = null;
return e;
}
e.prototype.init = function(t) {
this.mPopupHistory = t;
};
e.prototype.setDataCell = function(t, e) {
console.log(e);
this.mDataCell = e.ListBet[0];
this.nodeBg.active = t % 2 != 0;
var o = this.mDataCell.StartTime.split("T"), n = o[0].split("-"), i = o[1].split(":");
this.lblSession.string = this.mDataCell.GameSessionID;
this.lblTime.string = i[0] + ":" + i[1] + " " + n[2] + "-" + n[1] + "-" + n[0];
this.lblBet.string = s.default.formatNumber(this.mDataCell.BetValue);
this.lblWin.string = s.default.formatNumber(this.mDataCell.PrizeValue);
};
e.prototype.onTouchDetail = function() {
this.mPopupHistory && this.mPopupHistory.onTouchHistoryDetail(this.mDataCell);
};
r([ l(cc.Node) ], e.prototype, "nodeBg", void 0);
r([ l(cc.Label) ], e.prototype, "lblSession", void 0);
r([ l(cc.Label) ], e.prototype, "lblTime", void 0);
r([ l(cc.Label) ], e.prototype, "lblBet", void 0);
r([ l(cc.Label) ], e.prototype, "lblWin", void 0);
return r([ a ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../../base_slot/util/Util": void 0
} ],
LocThuBoxBetUI: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "901ef9hnV9LdJZetBAp8cdq", "LocThuBoxBetUI");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../base_slot/util/NumberUtil"), c = t("../../base_slot/util/Util"), a = cc._decorator, l = a.ccclass, u = a.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.skeBet = null;
e.lblBet = null;
e.lblTotalBet = null;
e.nodeMulti2 = null;
e.nodeMulti3 = null;
e.Id = 0;
e.mUserBet = 0;
e.mUserOldBet = 0;
return e;
}
e.prototype.onLoad = function() {
this.setDefault();
};
e.prototype.setDefault = function() {
this.skeBet.setAnimation(0, "thuong", !0);
this.nodeMulti2.active = !1;
this.nodeMulti3.active = !1;
this.lblTotalBet.getComponent(cc.Label).string = "";
this.mUserBet = 0;
this.lblBet.getComponent(cc.Label).string = "Đặt";
this.lblBet.node.color = cc.Color.WHITE;
};
e.prototype.resetUserBet = function() {
this.mUserOldBet = this.mUserBet;
this.mUserBet = 0;
};
e.prototype.showWin = function() {
this.skeBet.setAnimation(0, "thang", !0);
};
e.prototype.showLose = function() {
this.skeBet.setAnimation(0, "thua", !0);
};
e.prototype.showMulti = function(t) {
if (2 == t) {
this.nodeMulti2.active = !0;
this.nodeMulti3.active = !1;
} else if (3 == t) {
this.nodeMulti2.active = !1;
this.nodeMulti3.active = !0;
} else {
this.nodeMulti2.active = !1;
this.nodeMulti3.active = !1;
}
};
e.prototype.setUserBet = function(t) {
console.log(t);
this.mUserBet = t;
if (this.mUserBet > 0) {
this.lblBet.getComponent(cc.Label).string = c.default.formatNumber(this.mUserBet);
this.lblBet.node.color = cc.Color.YELLOW;
this.mUserOldBet = 0;
}
};
e.prototype.setValue = function(t) {
if (0 != t) {
"Đặt" == this.lblBet.getComponent(cc.Label).string && (this.lblBet.getComponent(cc.Label).string = c.default.formatNumber(0));
this.lblBet.getComponent(cc.Label).string = c.default.formatNumber(t);
} else {
this.lblBet.getComponent(cc.Label).string = c.default.formatNumber(0);
this.lblBet.node.color = cc.Color.WHITE;
}
};
e.prototype.setTotalBet = function(t) {
0 == t && (this.lblTotalBet.getComponent(cc.Label).string = "");
"" == this.lblTotalBet.getComponent(cc.Label).string && this.lblTotalBet.setValueNumber(0);
this.lblTotalBet.setNumber(t);
};
r([ u(sp.Skeleton) ], e.prototype, "skeBet", void 0);
r([ u(s.default) ], e.prototype, "lblBet", void 0);
r([ u(s.default) ], e.prototype, "lblTotalBet", void 0);
r([ u(cc.Node) ], e.prototype, "nodeMulti2", void 0);
r([ u(cc.Node) ], e.prototype, "nodeMulti3", void 0);
r([ u ], e.prototype, "Id", void 0);
return r([ l ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../../base_slot/util/NumberUtil": void 0,
"../../base_slot/util/Util": void 0
} ],
LocThuConstant: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bf5fbUM51tH+LlcB3mlQU0R", "LocThuConstant");
var n = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, r = i.ccclass, s = (i.property, function() {
function t() {}
t.api = {
hub: "baucuahub",
negotiate: "https://baucua." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate,
portal: "https://w-locthu.luxy.club/",
getTopWinners: "https://w-locthu.luxy.club/api/GetTopWinners?betType=1&topCount=10",
getAccountHistory: "https://w-locthu.luxy.club/api/GetAccountHistory?betType=1&topCount=100"
};
return n([ r ], t);
}());
o.default = s;
cc._RF.pop();
}, {} ],
LocThuHandler: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9efdcgBO8FGOLtZglxTfgvC", "LocThuHandler");
var n = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("./LocThuConstant"), r = cc._decorator, s = r.ccclass, c = (r.property, 
function() {
function t() {
this.mSignalr = null;
this.mListenerKey = "LocThuListener";
this.mLocThuMain = null;
this.isConnect = !1;
}
t.prototype.init = function(t) {
this.mLocThuMain = t;
};
t.prototype.connect = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect(this.mListenerKey, i.default.api.negotiate, i.default.api.hub, i.default.api.gate, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
t.prototype.closeWS = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
this.mSignalr.close();
};
t.prototype.onResponeData = function(t) {
this.isEmpty(t) || t.s && "error" == t.s || this.onWebSocketCallback(t);
};
t.prototype.onWebSocketCallback = function(t) {
if ("open" == t.s || "reconnect" == t.s) {
this.getCurrentRooms();
this.getCurrentSession();
} else {
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

case -48:
lngui.UITextManager.showCenterNotification("Game đã bị khóa, vui lòng mở khóa để tiếp tục giao dịch");
break;

default:
lngui.UITextManager.showCenterNotification("Đặt cửa thất bại");
}
if (!t.M) return;
var e = t.M;
if (e && e.length > 0) for (var o = 0; o < e.length; o++) {
var n = e[o].M;
if (e[o].A) var i = e[o].A[0];
switch (n) {
case "message":
break;

case "currentResult":
if (!i) break;
this.mLocThuMain.showResult(i);
break;

case "currentSession":
if (!i) break;
this.mLocThuMain.setSession(i);
break;

case "currentRoomsInfo":
this.mLocThuMain.setCurrentBetValue(i);
break;

case "betOfAccount":
this.mLocThuMain.showResultUserBet(i);
e[o].A[1] >= 0 && lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, e[o].A[1]);
break;

case "currentAccount":
break;

case "resultOfAccount":
this.mLocThuMain.showResultAccount(i);
break;

case "history":
case "taiXiuAccountHistory":
lngui.UIPopupManager.instance.showPopupFromPrefab(this.mLocThuMain.prefPopupHistory, function(t) {
t.loadContent(i);
});
break;

case "taiXiuTopWinner":
lngui.UIPopupManager.instance.showPopupFromPrefab(this.mLocThuMain.prefPopupTop, function(t) {
t.loadContent(i);
});
break;

case "gameHistory":
this.mLocThuMain.setHistoryTable(i);
}
}
}
};
t.prototype.isEmpty = function(t) {
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return JSON.stringify(t) === JSON.stringify({});
};
t.prototype.connectSuccess = function() {};
t.prototype.sendSignalR = function(t, e) {
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
t.prototype.getCurrentRooms = function() {
this.sendSignalR("GetCurrentRooms", []);
};
t.prototype.getCurrentSession = function() {
this.sendSignalR("GetCurrentSession", []);
};
t.prototype.getAccountResult = function(t) {
this.sendSignalR("GetAccountResult", [ t ]);
};
t.prototype.sendBet = function(t, e) {
this.sendSignalR("SetBet", [ t, e ]);
};
t.prototype.sendGetAccountHistory = function() {
this.sendSignalR("GetAccountHistory", []);
};
t.prototype.sendGetTopWinners = function() {
this.sendSignalR("GetTopWinner", [ 10 ]);
};
return n([ s ], t);
}());
o.default = c;
cc._RF.pop();
}, {
"./LocThuConstant": "LocThuConstant"
} ],
LocThuHistoryCell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "72a46xB8NZK4o3CKfPaeal1", "LocThuHistoryCell");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, c = s.ccclass, a = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.arrSprIcon = [];
e.arrSfrIcon = [];
return e;
}
e.prototype.setData = function(t) {
this.arrSprIcon[0].spriteFrame = this.arrSfrIcon[t.Dice1 - 1];
this.arrSprIcon[1].spriteFrame = this.arrSfrIcon[t.Dice2 - 1];
this.arrSprIcon[2].spriteFrame = this.arrSfrIcon[t.Dice3 - 1];
};
r([ a(cc.Sprite) ], e.prototype, "arrSprIcon", void 0);
r([ a(cc.SpriteFrame) ], e.prototype, "arrSfrIcon", void 0);
return r([ c ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
LocThuHistoryTableUI: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a83baNJK0BE6pKrootRzAIK", "LocThuHistoryTableUI");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LocThuHistoryCell"), c = cc._decorator, a = c.ccclass, l = c.property, u = function(t) {
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
e.prototype.onLoad = function() {
this.node.opacity = 0;
this.node.x = 200;
this.node.active = !1;
};
e.prototype.setContent = function(t) {
for (var e = 0; e < this.mArrCell.length; e++) this.mArrCell[e].active = !1;
this.mListData = t;
this.mCurrentIndex = 0;
};
e.prototype.showTable = function() {
this.node.active = !0;
cc.tween(this.node).to(.15, {
x: 615,
opacity: 255
}, {
easing: "sineOut"
}).start();
};
e.prototype.hideTable = function() {
var t = this;
cc.Tween.stopAllByTarget(this.node);
cc.tween(this.node).to(.15, {
x: 200,
opacity: 0
}, {
easing: "sineIn"
}).call(function() {
t.node.active = !1;
}).start();
};
e.prototype.update = function() {
if (!(this.mListData.length <= 0 || this.mCurrentIndex >= this.mListData.length)) {
if (!this.mArrCell[this.mCurrentIndex]) {
this.mArrCell[this.mCurrentIndex] = cc.instantiate(this.prefHistoryCell);
this.scvHistory.content.addChild(this.mArrCell[this.mCurrentIndex]);
}
this.mArrCell[this.mCurrentIndex].active = !0;
this.mArrCell[this.mCurrentIndex].getComponent(s.default).setData(this.mListData[this.mCurrentIndex]);
this.mCurrentIndex++;
}
};
r([ l(cc.ScrollView) ], e.prototype, "scvHistory", void 0);
r([ l(cc.Prefab) ], e.prototype, "prefHistoryCell", void 0);
return r([ a ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./LocThuHistoryCell": "LocThuHistoryCell"
} ],
LocThuKeyboardUI: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8aa4ftDziJKw4qoG5tXkqSD", "LocThuKeyboardUI");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, c = s.ccclass, a = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeSelectBet = null;
e.nodeNumberOther = null;
e.mLocThuMain = null;
e.mBoxBet = null;
e.mCurrentValue = 0;
e.mTimeCountDown = 0;
return e;
}
e.prototype.init = function(t) {
this.mLocThuMain = t;
};
e.prototype.onLoad = function() {};
e.prototype.showKeyboard = function(t) {
this.nodeSelectBet.active = !0;
this.nodeNumberOther.active = !1;
this.mBoxBet = t;
this.mCurrentValue = 0;
this.mBoxBet.setValue(this.mCurrentValue);
this.node.active = !0;
cc.Tween.stopAllByTarget(this.node);
cc.tween(this.node).to(.15, {
y: -255,
opacity: 255
}, {
easing: "sineOut"
}).start();
};
e.prototype.hideKeyboard = function(t) {
var e = this;
t || (this.mBoxBet && 0 == this.mBoxBet.mUserBet ? this.mBoxBet.lblBet.getComponent(cc.Label).string = "Đặt" : this.mBoxBet && this.mBoxBet.setUserBet(this.mBoxBet.mUserBet));
cc.Tween.stopAllByTarget(this.node);
cc.tween(this.node).to(.15, {
y: 0,
opacity: 0
}, {
easing: "sineIn"
}).call(function() {
e.node.active = !1;
e.mBoxBet = null;
}).start();
};
e.prototype.onTouchSelectBet = function(t, e) {
this.mCurrentValue += parseInt(e);
this.mBoxBet && this.mBoxBet.setValue(this.mCurrentValue);
};
e.prototype.onTouchSelectNumber = function(t, e) {
this.mCurrentValue = parseInt(this.mCurrentValue + e);
this.mBoxBet && this.mBoxBet.setValue(this.mCurrentValue);
};
e.prototype.onTouchDel = function() {
this.mCurrentValue = parseInt(this.mCurrentValue / 10 + "");
this.mBoxBet && this.mBoxBet.setValue(this.mCurrentValue);
};
e.prototype.onTouchOk = function() {
if (this.mCurrentValue > lngui.UserManager.instance.mainUserInfo.Money) lngui.UITextManager.showCenterNotification("Số dư không đủ"); else {
this.mCurrentValue > 0 && this.mLocThuMain.mLocThuHandler.sendBet(this.mBoxBet.Id, this.mCurrentValue);
this.hideKeyboard(!0);
}
};
e.prototype.onTouchCancel = function() {
this.mBoxBet.mUserBet > 0 && this.mBoxBet.setUserBet(this.mBoxBet.mUserBet);
this.hideKeyboard(!1);
};
e.prototype.onTouchBetAgain = function() {
var t = !1;
if (this.mBoxBet.mUserOldBet > 0) {
this.mLocThuMain.mLocThuHandler.sendBet(this.mBoxBet.Id, this.mBoxBet.mUserOldBet);
t = !0;
}
this.hideKeyboard(t);
};
e.prototype.onTouchX2 = function() {
var t = !1;
if (this.mBoxBet.mUserOldBet > 0) {
this.mLocThuMain.mLocThuHandler.sendBet(this.mBoxBet.Id, 2 * this.mBoxBet.mUserOldBet);
t = !0;
}
this.hideKeyboard(t);
};
e.prototype.onTouchNumberOther = function() {
this.nodeNumberOther.active = !0;
this.nodeSelectBet.active = !1;
};
r([ a(cc.Node) ], e.prototype, "nodeSelectBet", void 0);
r([ a(cc.Node) ], e.prototype, "nodeNumberOther", void 0);
return r([ c ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
LocThuMain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9b0ceG1m81J9b078Alwgtz8", "LocThuMain");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LocThuHandler"), c = t("./LocThuKeyboardUI"), a = t("./LocThuHistoryTableUI"), l = t("./LocThuBoxBetUI"), u = t("../../base_slot/util/Util"), h = t("./BatNanTLCtrl"), p = cc._decorator, f = p.ccclass, d = p.property, y = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeMain = null;
e.nodeDish = null;
e.nodeBtnNanOn = null;
e.nodeBtnNanOff = null;
e.nodeBtnSoiCauOn = null;
e.nodeBtnSoiCauOff = null;
e.lblSession = null;
e.lblTimeCircle = null;
e.nodeTimeCount = null;
e.lblTimeCount = null;
e.arrLblWin = [];
e.arrSprDice = [];
e.arrSfrDice = [];
e.skeDice = null;
e.uiKeyboard = null;
e.uiHistoryTable = null;
e.arrUIBoxBet = [];
e.prefPopupHelp = null;
e.prefPopupTop = null;
e.prefPopupHistory = null;
e.mLocThuHandler = null;
e.mIsNan = !1;
e.mGameStatus = -1;
e.mTimer = null;
e.mTimeCountDown = 0;
e.mSessionId = 0;
e.dataRes = null;
return e;
}
o = e;
Object.defineProperty(e, "instance", {
get: function() {
o._instance || (o._instance = new o());
return o._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
this.uiKeyboard.init(this);
this.setDefault();
this.mLocThuHandler = new s.default();
this.mLocThuHandler.init(this);
this.mLocThuHandler.connect();
o._instance = this;
};
e.prototype.onEnable = function() {
this.nodeDish.getComponent(h.default).dataSource = this;
};
e.prototype.onDestroy = function() {
this.mTimer && clearInterval(this.mTimer);
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.mLocThuHandler.connect, this);
this.mLocThuHandler.closeWS();
lngui.ZLog.log("=====================CLOSE WS NOTI===============================");
};
e.prototype.setDefault = function() {
this.nodeBtnSoiCauOff.active = !1;
this.nodeBtnSoiCauOn.active = !0;
this.mIsNan = !1;
this.nodeBtnNanOn.active = !0;
this.nodeBtnNanOff.active = !1;
for (var t = 0; t < this.arrUIBoxBet.length; t++) this.arrUIBoxBet[t].setDefault();
this.uiKeyboard.node.y = 0;
this.uiKeyboard.node.opacity = 0;
this.uiKeyboard.node.active = !1;
this.lblSession.string = "";
this.lblTimeCircle.string = "";
this.lblTimeCount.string = "";
this.nodeTimeCount.active = !1;
this.nodeDish.active = !1;
this.skeDice.node.active = !1;
for (t = 0; t < this.arrSprDice.length; t++) this.arrSprDice[t].node.active = !1;
for (t = 0; t < this.arrLblWin.length; t++) this.arrLblWin[t].node.active = !1;
};
e.prototype.setCurrentBetValue = function(t) {
for (var e = 0; e < t.length; e++) 0 != t[e].GateID && this.arrUIBoxBet[t[e].GateID - 1].setTotalBet(t[e].TotalBetValue);
};
e.prototype.setSession = function(t) {
this.dataRes = null;
this.mSessionId = t.GameSessionID;
this.lblSession.string = "#" + t.GameSessionID;
this.mGameStatus = t.GameStatus;
if (1 == this.mGameStatus) {
for (var e = 0; e < this.arrUIBoxBet.length; e++) {
this.arrUIBoxBet[e].resetUserBet();
this.arrUIBoxBet[e].setDefault();
}
for (e = 0; e < this.arrSprDice.length; e++) this.arrSprDice[e].node.active = !1;
for (e = 0; e < this.arrLblWin.length; e++) this.arrLblWin[e].node.active = !1;
this.skeDice.node.active = !1;
}
2 == this.mGameStatus && this.uiKeyboard.hideKeyboard(!1);
1 == this.mGameStatus && t.RemainBetting > 0 && this.updateTimeCircle(t.RemainBetting);
2 == this.mGameStatus && t.RemainWaiting > 0 && this.updateTimeCountDown(t.RemainWaiting);
};
e.prototype.setHistoryTable = function(t) {
this.uiHistoryTable.setContent(t);
};
e.prototype.showResultAccount = function(t) {
var e = 0;
console.log("money cũ: " + lngui.UserManager.instance.mainUserInfo.Money);
for (var o = 0; o < t.length; o++) {
e += t[o].PrizeValue + t[o].RefundValue;
lngui.UserManager.instance.mainUserInfo.Money = t[0].Balance;
if (t[o].PrizeValue + t[o].RefundValue > 0) {
this.arrLblWin[t[o].GateID - 1].string = "+" + u.default.formatNumber(t[o].PrizeValue + t[o].RefundValue);
this.arrLblWin[t[o].GateID - 1].node.active = !0;
this.arrLblWin[t[o].GateID - 1].node.y = -55;
this.arrLblWin[t[o].GateID - 1].node.scale = .3;
cc.tween(this.arrLblWin[t[o].GateID - 1].node).to(.25, {
y: 0,
scale: 1
}, {
easing: "sineOut"
}).start();
}
}
e > 0 && lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
console.log("money mới: " + lngui.UserManager.instance.mainUserInfo.Money);
};
e.prototype.showResultUserBet = function(t) {
for (var e = 0; e < t.length; e++) this.arrUIBoxBet[t[e].GateID - 1].setUserBet(t[e].BetValue);
};
e.prototype.showResult = function(t) {
var e = this;
this.dataRes = t;
this.arrSprDice[0].spriteFrame = this.arrSfrDice[t.Dice1 - 1];
this.arrSprDice[1].spriteFrame = this.arrSfrDice[t.Dice2 - 1];
this.arrSprDice[2].spriteFrame = this.arrSfrDice[t.Dice3 - 1];
this.skeDice.node.active = !0;
this.skeDice.setAnimation(0, "Idle", !0);
this.skeDice.setCompleteListener(function() {
e.nodeTimeCount.active = !0;
e.skeDice.node.active = !1;
for (var o = 0; o < e.arrSprDice.length; o++) e.arrSprDice[o].node.active = !0;
if (e.mIsNan) {
e.nodeDish.active = !0;
e.nodeDish.x = 0;
e.nodeDish.y = 0;
setTimeout(function() {
e.nodeDish.active = !1;
for (var o = 0; o < e.arrUIBoxBet.length; o++) e.arrUIBoxBet[o].showLose();
e.arrUIBoxBet[t.Dice1 - 1].showWin();
e.arrUIBoxBet[t.Dice2 - 1].showWin();
e.arrUIBoxBet[t.Dice3 - 1].showWin();
for (o = 0; o < e.arrUIBoxBet.length; o++) e.arrUIBoxBet[o].showMulti(t["Multi" + (o + 1)]);
}, 1e4);
} else {
e.nodeDish.active = !1;
for (o = 0; o < e.arrUIBoxBet.length; o++) e.arrUIBoxBet[o].showLose();
e.arrUIBoxBet[t.Dice1 - 1].showWin();
e.arrUIBoxBet[t.Dice2 - 1].showWin();
e.arrUIBoxBet[t.Dice3 - 1].showWin();
for (o = 0; o < e.arrUIBoxBet.length; o++) e.arrUIBoxBet[o].showMulti(t["Multi" + (o + 1)]);
}
});
};
e.prototype.showScoreNam = function() {
if (this.dataRes) {
this.arrSprDice[0].spriteFrame = this.arrSfrDice[this.dataRes.Dice1 - 1];
this.arrSprDice[1].spriteFrame = this.arrSfrDice[this.dataRes.Dice2 - 1];
this.arrSprDice[2].spriteFrame = this.arrSfrDice[this.dataRes.Dice3 - 1];
this.nodeTimeCount.active = !0;
this.skeDice.node.active = !1;
for (var t = 0; t < this.arrSprDice.length; t++) this.arrSprDice[t].node.active = !0;
this.nodeDish.active = !1;
for (t = 0; t < this.arrUIBoxBet.length; t++) this.arrUIBoxBet[t].showLose();
this.arrUIBoxBet[this.dataRes.Dice1 - 1].showWin();
this.arrUIBoxBet[this.dataRes.Dice2 - 1].showWin();
this.arrUIBoxBet[this.dataRes.Dice3 - 1].showWin();
for (t = 0; t < this.arrUIBoxBet.length; t++) this.arrUIBoxBet[t].showMulti(this.dataRes["Multi" + (t + 1)]);
}
};
e.prototype.parseTime = function(t) {
var e = Math.floor(t / 60), o = t - 60 * e;
return "0" + e + ":" + (o < 10 ? "0" + o : o);
};
e.prototype.updateTimeCircle = function(t) {
var e = this;
this.mTimeCountDown = t;
this.lblTimeCircle.string = this.parseTime(t) + "";
this.nodeTimeCount.active = !1;
this.mTimer && clearInterval(this.mTimer);
this.mTimer = setInterval(function() {
e.mTimeCountDown--;
e.lblTimeCircle.string = e.parseTime(e.mTimeCountDown) + "";
if (e.mTimeCountDown <= 0) {
clearInterval(e.mTimer);
e.lblTimeCircle.string = "";
}
}, 1e3);
};
e.prototype.updateTimeCountDown = function(t) {
var e = this;
this.mTimeCountDown = t;
this.lblTimeCircle.string = "";
this.lblTimeCount.string = this.parseTime(this.mTimeCountDown) + "";
t < 25 && (this.nodeTimeCount.active = !0);
this.mTimer && clearInterval(this.mTimer);
this.mTimer = setInterval(function() {
e.mTimeCountDown--;
e.lblTimeCount.string = e.parseTime(e.mTimeCountDown) + "";
5 == e.mTimeCountDown && e.mLocThuHandler.getAccountResult(e.mSessionId);
if (e.mTimeCountDown <= 0) {
clearInterval(e.mTimer);
e.nodeTimeCount.active = !1;
}
}, 1e3);
};
e.prototype.onTouchAllBtn = function(t, e) {
switch (e) {
case "close":
case "minimize":
this.onTouchClose();
break;

case "top":
this.onTouchTop();
break;

case "help":
this.onTouchHelp();
break;

case "history":
this.onTouchHistory();
break;

case "select_bet":
this.onTouchSelectBet(t.target);
break;

case "nan_on":
this.onTouchNanOn();
break;

case "nan_off":
this.onTouchNanOff();
break;

case "soicau_on":
this.onTouchSoiCauOn();
break;

case "soicau_off":
this.onTouchSoiCauOff();
}
};
e.prototype.onTouchClose = function() {
this.mLocThuHandler.closeWS();
this.node.destroy();
clearInterval(this.mTimer);
};
e.prototype.onTouchMinimize = function() {
this.node.scale = 0;
};
e.prototype.onTouchTop = function() {
this.mLocThuHandler.sendGetTopWinners();
};
e.prototype.onTouchHelp = function() {
lngui.UIPopupManager.instance.showPopupFromPrefab(this.prefPopupHelp);
};
e.prototype.onTouchHistory = function() {
this.mLocThuHandler.sendGetAccountHistory();
};
e.prototype.onTouchSelectBet = function(t) {
1 == this.mGameStatus && this.uiKeyboard.showKeyboard(t.getComponent(l.default));
};
e.prototype.onTouchNanOn = function() {
this.nodeBtnNanOn.active = !1;
this.nodeBtnNanOff.active = !0;
this.mIsNan = !0;
};
e.prototype.onTouchNanOff = function() {
this.nodeBtnNanOn.active = !0;
this.nodeBtnNanOff.active = !1;
this.mIsNan = !1;
};
e.prototype.onTouchSoiCauOn = function() {
this.nodeBtnSoiCauOn.active = !1;
this.nodeBtnSoiCauOff.active = !0;
this.uiHistoryTable.showTable();
};
e.prototype.onTouchSoiCauOff = function() {
this.nodeBtnSoiCauOn.active = !0;
this.nodeBtnSoiCauOff.active = !1;
this.uiHistoryTable.hideTable();
};
var o;
e._instance = null;
r([ d(cc.Node) ], e.prototype, "nodeMain", void 0);
r([ d(cc.Node) ], e.prototype, "nodeDish", void 0);
r([ d(cc.Node) ], e.prototype, "nodeBtnNanOn", void 0);
r([ d(cc.Node) ], e.prototype, "nodeBtnNanOff", void 0);
r([ d(cc.Node) ], e.prototype, "nodeBtnSoiCauOn", void 0);
r([ d(cc.Node) ], e.prototype, "nodeBtnSoiCauOff", void 0);
r([ d(cc.Label) ], e.prototype, "lblSession", void 0);
r([ d(cc.Label) ], e.prototype, "lblTimeCircle", void 0);
r([ d(cc.Node) ], e.prototype, "nodeTimeCount", void 0);
r([ d(cc.Label) ], e.prototype, "lblTimeCount", void 0);
r([ d(cc.Label) ], e.prototype, "arrLblWin", void 0);
r([ d(cc.Sprite) ], e.prototype, "arrSprDice", void 0);
r([ d(cc.SpriteFrame) ], e.prototype, "arrSfrDice", void 0);
r([ d(sp.Skeleton) ], e.prototype, "skeDice", void 0);
r([ d(c.default) ], e.prototype, "uiKeyboard", void 0);
r([ d(a.default) ], e.prototype, "uiHistoryTable", void 0);
r([ d(l.default) ], e.prototype, "arrUIBoxBet", void 0);
r([ d(cc.Prefab) ], e.prototype, "prefPopupHelp", void 0);
r([ d(cc.Prefab) ], e.prototype, "prefPopupTop", void 0);
r([ d(cc.Prefab) ], e.prototype, "prefPopupHistory", void 0);
return o = r([ f ], e);
}(cc.Component);
o.default = y;
cc._RF.pop();
}, {
"../../base_slot/util/Util": void 0,
"./BatNanTLCtrl": "BatNanTLCtrl",
"./LocThuBoxBetUI": "LocThuBoxBetUI",
"./LocThuHandler": "LocThuHandler",
"./LocThuHistoryTableUI": "LocThuHistoryTableUI",
"./LocThuKeyboardUI": "LocThuKeyboardUI"
} ],
PopupHelpLocThu: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "511e7w9P+tAl5yiqgWQ2Cb0", "PopupHelpLocThu");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, c = s.ccclass, a = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
return e;
}
e.prototype.onTouchAllBtn = function(t, e) {
switch (e) {
case "close":
this.hide();
}
};
r([ a(cc.Label) ], e.prototype, "label", void 0);
return r([ c ], e);
}(lngui.UIPopup);
o.default = l;
cc._RF.pop();
}, {} ],
PopupHistoryLocThu: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "56155ERQ5xGKZMO9Jo53RmP", "PopupHistoryLocThu");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./HistoryLocThuCell"), c = t("../LocThuBoxBetUI"), a = t("../../../base_slot/util/Util"), l = cc._decorator, u = l.ccclass, h = l.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeListHistory = null;
e.nodeHistoryDetail = null;
e.scvHistory = null;
e.prefHistoryCell = null;
e.arrSprDice = [];
e.arrSfrDice = [];
e.arrBoxBetUI = [];
e.lblSession = null;
e.lblTotalBet = null;
e.lblTotalWin = null;
e.mListData = [];
e.mArrHistoryCell = [];
e.mCurrentIndex = 0;
return e;
}
e.prototype.onLoad = function() {
this.nodeListHistory.active = !0;
this.nodeHistoryDetail.active = !1;
for (var t = 0; t < this.arrBoxBetUI.length; t++) this.arrBoxBetUI[t].setDefault();
};
e.prototype.loadContent = function(t) {
for (var e = 0; e < this.mArrHistoryCell.length; e++) this.mArrHistoryCell[e].active = !1;
if (!(t.length <= 0)) {
var o = [], n = {
GameSessionID: t[0].GameSessionID,
CreatedDate: t[0].CreatedDate,
BetValue: t[0].BetValue,
PrizeValue: t[0].PrizeValue,
ListBet: []
};
n.ListBet.push(t[0]);
o.push(n);
for (e = 1; e < t.length; e++) if (n.GameSessionID == t[e].GameSessionID) {
n.ListBet.push(t[e]);
n.BetValue += t[e].BetValue;
n.PrizeValue += t[e].PrizeValue;
} else {
(n = {
GameSessionID: t[e].GameSessionID,
CreatedDate: t[e].CreatedDate,
BetValue: t[e].BetValue,
PrizeValue: t[e].PrizeValue,
ListBet: []
}).ListBet.push(t[e]);
o.push(n);
}
this.mListData = o;
this.mCurrentIndex = 0;
}
};
e.prototype.onTouchAllBtn = function(t, e) {
switch (e) {
case "close":
this.hide();
break;

case "back":
this.onTouchBack();
}
};
e.prototype.onTouchBack = function() {
this.nodeListHistory.active = !0;
this.nodeHistoryDetail.active = !1;
};
e.prototype.onTouchHistoryDetail = function(t) {
console.log(t);
this.nodeListHistory.active = !1;
this.nodeHistoryDetail.active = !0;
this.lblSession.string = "#" + t.GameSessionID;
for (var e = 0; e < this.arrBoxBetUI.length; e++) {
this.arrBoxBetUI[e].setDefault();
this.arrBoxBetUI[e].showLose();
}
this.lblTotalBet.string = a.default.formatNumber(t.BetValue);
this.lblTotalWin.string = a.default.formatNumber(t.PrizeValue);
for (e = 0; e < this.arrSprDice.length; e++) {
this.arrSprDice[e].spriteFrame = this.arrSfrDice[t["Dice" + (e + 1)] - 1];
this.arrBoxBetUI[t["Dice" + (e + 1)] - 1].showWin();
}
for (e = 0; e < t.length; e++) this.arrBoxBetUI[t[e].LocationID - 1].setUserBet(this.arrBoxBetUI[t[e].LocationID - 1].mUserBet + t[e].BetValue);
};
e.prototype.update = function() {
if (!(this.mListData.length <= 0 || this.mCurrentIndex >= this.mListData.length)) {
if (!this.mArrHistoryCell[this.mCurrentIndex]) {
this.mArrHistoryCell[this.mCurrentIndex] = cc.instantiate(this.prefHistoryCell);
this.scvHistory.content.addChild(this.mArrHistoryCell[this.mCurrentIndex]);
}
this.mArrHistoryCell[this.mCurrentIndex].active = !0;
this.mArrHistoryCell[this.mCurrentIndex].getComponent(s.default).init(this);
this.mArrHistoryCell[this.mCurrentIndex].getComponent(s.default).setDataCell(this.mCurrentIndex, this.mListData[this.mCurrentIndex]);
this.mCurrentIndex++;
}
};
r([ h(cc.Node) ], e.prototype, "nodeListHistory", void 0);
r([ h(cc.Node) ], e.prototype, "nodeHistoryDetail", void 0);
r([ h(cc.ScrollView) ], e.prototype, "scvHistory", void 0);
r([ h(cc.Prefab) ], e.prototype, "prefHistoryCell", void 0);
r([ h(cc.Sprite) ], e.prototype, "arrSprDice", void 0);
r([ h(cc.SpriteFrame) ], e.prototype, "arrSfrDice", void 0);
r([ h(c.default) ], e.prototype, "arrBoxBetUI", void 0);
r([ h(cc.Label) ], e.prototype, "lblSession", void 0);
r([ h(cc.Label) ], e.prototype, "lblTotalBet", void 0);
r([ h(cc.Label) ], e.prototype, "lblTotalWin", void 0);
return r([ u ], e);
}(lngui.UIPopup);
o.default = p;
cc._RF.pop();
}, {
"../../../base_slot/util/Util": void 0,
"../LocThuBoxBetUI": "LocThuBoxBetUI",
"./HistoryLocThuCell": "HistoryLocThuCell"
} ],
PopupTopLocThu: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f106d1Y3yNDmLqU4L3U27oz", "PopupTopLocThu");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./TopLocThuCell"), c = cc._decorator, a = c.ccclass, l = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scvTop = null;
e.preTopCell = null;
e.mListData = [];
e.mArrTopCell = [];
e.mCurrentIndex = 0;
return e;
}
e.prototype.loadContent = function(t) {
for (var e = 0; e < this.mArrTopCell.length; e++) this.mArrTopCell[e].active = !1;
this.mListData = t;
this.mCurrentIndex = 0;
};
e.prototype.onTouchAllBtn = function(e, o) {
switch (o) {
case "close":
t.prototype.hide.call(this);
}
};
e.prototype.update = function() {
if (!(this.mListData.length <= 0 || this.mCurrentIndex >= this.mListData.length)) {
if (!this.mArrTopCell[this.mCurrentIndex]) {
this.mArrTopCell[this.mCurrentIndex] = cc.instantiate(this.preTopCell);
this.scvTop.content.addChild(this.mArrTopCell[this.mCurrentIndex]);
}
this.mArrTopCell[this.mCurrentIndex].active = !0;
this.mArrTopCell[this.mCurrentIndex].getComponent(s.default).setDataCell(this.mCurrentIndex, this.mListData[this.mCurrentIndex]);
this.mCurrentIndex++;
}
};
r([ l(cc.ScrollView) ], e.prototype, "scvTop", void 0);
r([ l(cc.Prefab) ], e.prototype, "preTopCell", void 0);
return r([ a ], e);
}(lngui.UIPopup);
o.default = u;
cc._RF.pop();
}, {
"./TopLocThuCell": "TopLocThuCell"
} ],
TopLocThuCell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f12f0lYfkBFr74gQiugLuTW", "TopLocThuCell");
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
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../base_slot/util/Util"), c = cc._decorator, a = c.ccclass, l = c.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeBg = null;
e.lblStt = null;
e.lblNickName = null;
e.lblPrize = null;
return e;
}
e.prototype.setDataCell = function(t, e) {
this.nodeBg.active = t % 2 != 0;
this.lblStt.string = t + 1;
this.lblNickName.string = e.UserName;
this.lblPrize.string = s.default.formatNumber(e.PrizeValue);
};
r([ l(cc.Node) ], e.prototype, "nodeBg", void 0);
r([ l(cc.Label) ], e.prototype, "lblStt", void 0);
r([ l(cc.Label) ], e.prototype, "lblNickName", void 0);
r([ l(cc.Label) ], e.prototype, "lblPrize", void 0);
return r([ a ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../../base_slot/util/Util": void 0
} ]
}, {}, [ "BatNanTLCtrl", "LocThuBoxBetUI", "LocThuConstant", "LocThuHandler", "LocThuHistoryCell", "LocThuHistoryTableUI", "LocThuKeyboardUI", "LocThuMain", "HistoryLocThuCell", "PopupHelpLocThu", "PopupHistoryLocThu", "PopupTopLocThu", "TopLocThuCell" ]);