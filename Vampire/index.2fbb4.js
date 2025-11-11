window.__require = function t(e, o, i) {
function n(l, r) {
if (!o[l]) {
if (!e[l]) {
var a = l.split("/");
a = a[a.length - 1];
if (!e[a]) {
var c = "function" == typeof __require && __require;
if (!r && c) return c(a, !0);
if (s) return s(a, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = a;
}
var p = o[l] = {
exports: {}
};
e[l][0].call(p.exports, function(t) {
return n(e[l][1][t] || t);
}, p, p.exports, t, e, o, i);
}
return o[l].exports;
}
for (var s = "function" == typeof __require && __require, l = 0; l < i.length; l++) n(i[l]);
return n;
}({
Slot7Audio: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3a289aWryhHgK4c8xeWzx+1", "Slot7Audio");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotAudio"), r = cc._decorator, a = r.ccclass, c = r.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.musicBgBonus = null;
return e;
}
s([ c({
type: cc.AudioClip
}) ], e.prototype, "musicBgBonus", void 0);
return s([ a ], e);
}(l.default);
o.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotAudio": void 0
} ],
Slot7BonusItem2: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e4636RQRBFJCoWEAy6KDpWN", "Slot7BonusItem2");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/util/FormatUtil"), r = cc._decorator, a = r.ccclass, c = r.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.skeItem = null;
e.skeopenitem = null;
e.sprLose = null;
e.txtMoney = null;
return e;
}
e.prototype.setData = function(t) {
this.skeItem.node.active = !1;
this.skeopenitem.node.active = !0;
if (t.PrizeValue > 0) {
this.txtMoney.node.active = !0;
this.txtMoney.string = l.default.formatNumber(t.PrizeValue);
} else this.sprLose.node.active = !0;
};
s([ c(sp.Skeleton) ], e.prototype, "skeItem", void 0);
s([ c(sp.Skeleton) ], e.prototype, "skeopenitem", void 0);
s([ c(cc.Sprite) ], e.prototype, "sprLose", void 0);
s([ c(cc.Label) ], e.prototype, "txtMoney", void 0);
return s([ a ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../base_slot/util/FormatUtil": void 0
} ],
Slot7BonusItem3: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7ce5a7ODQ5DgZ+gZU2KkywX", "Slot7BonusItem3");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = cc._decorator, r = l.ccclass, a = l.property, c = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.skeItem = null;
e.sprOpen = null;
e.txtRate = null;
return e;
}
e.prototype.setData = function(t) {
this.skeItem.node.active = !1;
this.sprOpen.node.active = !0;
this.txtRate.node.active = !0;
this.txtRate.string = "X" + t;
};
s([ a(sp.Skeleton) ], e.prototype, "skeItem", void 0);
s([ a(cc.Sprite) ], e.prototype, "sprOpen", void 0);
s([ a(cc.Label) ], e.prototype, "txtRate", void 0);
return s([ r ], e);
}(cc.Component);
o.default = c;
cc._RF.pop();
}, {} ],
Slot7BonusItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "883e185nvZOLqrw5A12kuny", "Slot7BonusItem");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/util/FormatUtil"), r = cc._decorator, a = r.ccclass, c = r.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.skeItem = null;
e.sprLose = null;
e.txtMoney = null;
return e;
}
e.prototype.setData = function(t) {
this.skeItem.addAnimation(0, "animation", !1);
if (t.PrizeValue > 0) {
this.sprLose.node.active = !1;
this.txtMoney.node.active = !0;
this.txtMoney.string = l.default.formatNumber(t.PrizeValue);
} else {
this.sprLose.node.active = !0;
this.txtMoney.node.active = !1;
}
};
s([ c(sp.Skeleton) ], e.prototype, "skeItem", void 0);
s([ c(cc.Sprite) ], e.prototype, "sprLose", void 0);
s([ c(cc.Label) ], e.prototype, "txtMoney", void 0);
return s([ a ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../base_slot/util/FormatUtil": void 0
} ],
Slot7Bonus: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d7372pQAMpLDqD4AYFCH7Zp", "Slot7Bonus");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/util/AudioUtil"), r = t("../../base_slot/util/FormatUtil"), a = t("../../base_slot/util/Util"), c = t("./Slot7BonusItem"), p = t("./Slot7BonusItem2"), u = t("./Slot7BonusItem3"), h = t("./Slot7Handler"), m = t("./Slot7Room"), f = cc._decorator, S = f.ccclass, d = f.property, y = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.game1 = null;
e.game2 = null;
e.game3 = null;
e.nodeEndgame = null;
e.txtMoneyEndgame = null;
e.txtTime = null;
e.txtHeSoNhan = null;
e.txtSoLuotConLai = null;
e.listItem = [];
e.listItem2 = [];
e.listItem3 = [];
e.mTimer = null;
e.mTime = 15;
e.mTotalWin = 0;
e.mTurn = 0;
e.mMaxturn = 0;
e.mMulti = 1;
e.mSlotRoom = null;
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
e.prototype.onEnable = function() {
var t = this;
o._instance = this;
clearInterval(this.mTimer);
this.txtTime.string = "Tự động chơi sau " + this.mTime + " giây";
this.mTimer = setInterval(function() {
t.mTime--;
if (t.mTime >= 0) t.txtTime.string = "Tự động chơi sau " + t.mTime + " giây"; else {
t.endGame();
clearInterval(t.mTimer);
}
}.bind(this), 1e3);
this.init();
};
e.prototype.onDestroy = function() {
this.mSlotRoom.mSlot.mSlotNetwork.send("PlayBonusGameAll");
l.default.stopMusic();
l.default.playMusic(this.mSlotRoom.mSlot.mSlotAudio.musicBg, this.mSlotRoom.mSlot.mIsMusic);
this.mSlotRoom.updateTotalWin(this.mTotalWin);
this.mSlotRoom.showResult();
clearInterval(this.mTimer);
};
e.prototype.init = function() {
this.mSlotRoom = m.default.instance;
l.default.stopMusic();
l.default.playMusic(this.mSlotRoom.mSlot.mSlotAudio.musicBgBonus, this.mSlotRoom.mSlot.mIsMusic);
this.startGame();
};
e.prototype.startGame = function() {
var t = this;
this.mTotalWin = 0;
m.default.instance.mDataSpin.dataBonusGame.BonusItemsData.forEach(function(e) {
t.mTotalWin = t.mTotalWin + e.PrizeValue;
});
this.mMulti = m.default.instance.mDataSpin.dataBonusGame.BonusItemsData[m.default.instance.mDataSpin.dataBonusGame.BonusItemsData.length - 1].Multiplier;
this.mMaxturn = m.default.instance.mDataSpin.dataBonusGame.BonusItemsData.length - 1;
if (0 == m.default.instance.mDataSpin.bonusGameType || 2 == m.default.instance.mDataSpin.bonusGameType) {
this.game1.active = !0;
this.game2.active = !1;
} else {
this.game2.active = !0;
this.game1.active = !1;
}
};
e.prototype.showGame3 = function() {
this.game1.active = !1;
this.game2.active = !1;
this.game3.active = !0;
};
e.prototype.endGame = function() {
var e = this;
this.nodeEndgame.active = !0;
this.txtMoneyEndgame.string = r.default.formatNumber(this.mTotalWin);
for (var o = 0; o < this.listItem.length; o++) this.listItem[o].getComponent(cc.Button).interactable = !1;
for (o = 0; o < this.listItem2.length; o++) this.listItem2[o].getComponent(cc.Button).interactable = !1;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(4), cc.callFunc(function() {
h.default.instance.sendEndBonus(12, 12);
t.prototype.hide.call(e);
}, this)));
};
e.prototype.onSelectItemGame1 = function(t, e) {
var o = this;
this.mTurn++;
var i = m.default.instance.mDataSpin.dataBonusGame.BonusItemsData.shift(), n = parseInt(e);
this.listItem[n].setData(i);
this.listItem[n].getComponent(cc.Button).interactable = !1;
if (this.mTurn == this.mMaxturn) {
for (var s = 0; s < this.listItem.length; s++) this.listItem[s].getComponent(cc.Button).interactable = !1;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
o.showGame3();
}, this)));
}
};
e.prototype.onSelectItemGame2 = function(t, e) {
var o = this;
this.mTurn++;
var i = m.default.instance.mDataSpin.dataBonusGame.BonusItemsData.shift();
this.txtSoLuotConLai.string = (this.mMaxturn - this.mTurn).toString();
var n = parseInt(e);
this.listItem2[n].setData(i);
this.listItem2[n].getComponent(cc.Button).interactable = !1;
if (this.mTurn == this.mMaxturn) {
for (var s = 0; s < this.listItem2.length; s++) this.listItem2[s].getComponent(cc.Button).interactable = !1;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
o.endGame();
}, this)));
}
};
e.prototype.onSelectItemGame3 = function(t, e) {
for (var o = this, i = 0; i < this.listItem3.length; i++) this.listItem3[i].getComponent(cc.Button).interactable = !1;
var n = parseInt(e);
this.listItem3[n].setData(this.mMulti);
for (i = 0; i < this.listItem3.length; i++) if (i != n) {
for (var s = this.mMulti; s == this.mMulti; ) s = a.default.random(1, 5);
this.listItem3[i].setData(s);
}
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
o.endGame();
}, this)));
};
var o;
e._instance = null;
s([ d(cc.Node) ], e.prototype, "game1", void 0);
s([ d(cc.Node) ], e.prototype, "game2", void 0);
s([ d(cc.Node) ], e.prototype, "game3", void 0);
s([ d(cc.Node) ], e.prototype, "nodeEndgame", void 0);
s([ d(cc.Label) ], e.prototype, "txtMoneyEndgame", void 0);
s([ d(cc.Label) ], e.prototype, "txtTime", void 0);
s([ d(cc.Label) ], e.prototype, "txtHeSoNhan", void 0);
s([ d(cc.Label) ], e.prototype, "txtSoLuotConLai", void 0);
s([ d([ c.default ]) ], e.prototype, "listItem", void 0);
s([ d([ p.default ]) ], e.prototype, "listItem2", void 0);
s([ d([ u.default ]) ], e.prototype, "listItem3", void 0);
return o = s([ S ], e);
}(lngui.UIPopup);
o.default = y;
cc._RF.pop();
}, {
"../../base_slot/util/AudioUtil": void 0,
"../../base_slot/util/FormatUtil": void 0,
"../../base_slot/util/Util": void 0,
"./Slot7BonusItem": "Slot7BonusItem",
"./Slot7BonusItem2": "Slot7BonusItem2",
"./Slot7BonusItem3": "Slot7BonusItem3",
"./Slot7Handler": "Slot7Handler",
"./Slot7Room": "Slot7Room"
} ],
Slot7Config: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "eb84aLhHa5IL6b/fRrxUOUN", "Slot7Config");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotConfig"), r = cc._decorator, a = r.ccclass, c = r.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.DISTANCE = 170;
e.LIST_SKE_ITEM = [];
e.LIST_SKE_KEY = [];
e.LIST_FRAME = [];
e.LIST_FRAME_FREESPIN = [];
e.TIME_ANIM_FREESPIN = 2;
e.TIME_ANIM_BONUS = 10;
e.TIME_MOVE_ITEM_START_QUICK = 1;
e.TIME_MOVE_ITEM_START = 1;
e.TIME_MOVE_ITEM_QUICK = 1;
e.TIME_MOVE_ITEM = 1;
e.TIME_MOVE_STOP_ITEM_QUICK = 1;
e.TIME_MOVE_STOP_ITEM = 1;
e.TIME_FIRST_REEL_STOP = 2;
e.TIME_FIRST_REEL_STOP_QUICK = 1;
e.TIME_REEL_STOP = .4;
e.TIME_REEL_STOP_QUICK = .2;
e.TIME_SINGLE_LINE = 1;
e.TIME_SINGLE_LINE_QUICK = .8;
e.LINE = [ [ 5, 6, 7, 8, 9 ], [ 0, 1, 2, 3, 4 ], [ 10, 11, 12, 13, 14 ], [ 10, 6, 2, 8, 14 ], [ 0, 6, 12, 8, 4 ], [ 5, 1, 2, 3, 9 ], [ 5, 11, 12, 13, 9 ], [ 0, 1, 7, 13, 14 ], [ 10, 11, 7, 3, 4 ], [ 5, 11, 7, 3, 9 ], [ 5, 1, 7, 13, 9 ], [ 0, 6, 7, 8, 4 ], [ 10, 6, 7, 8, 14 ], [ 0, 6, 2, 8, 4 ], [ 10, 6, 12, 8, 14 ], [ 5, 6, 2, 8, 9 ], [ 5, 6, 12, 8, 9 ], [ 0, 1, 12, 3, 4 ], [ 10, 11, 2, 13, 14 ], [ 0, 11, 12, 13, 4 ], [ 10, 1, 2, 3, 14 ], [ 5, 1, 12, 3, 9 ], [ 5, 11, 2, 13, 9 ], [ 0, 11, 2, 13, 4 ], [ 10, 1, 12, 3, 14 ] ];
return e;
}
s([ c(cc.Integer) ], e.prototype, "DISTANCE", void 0);
s([ c([ sp.SkeletonData ]) ], e.prototype, "LIST_SKE_ITEM", void 0);
s([ c([ cc.String ]) ], e.prototype, "LIST_SKE_KEY", void 0);
s([ c([ cc.SpriteFrame ]) ], e.prototype, "LIST_FRAME", void 0);
s([ c([ cc.SpriteFrame ]) ], e.prototype, "LIST_FRAME_FREESPIN", void 0);
s([ c(cc.Integer) ], e.prototype, "TIME_ANIM_FREESPIN", void 0);
s([ c(cc.Integer) ], e.prototype, "TIME_ANIM_BONUS", void 0);
s([ c(cc.Integer) ], e.prototype, "TIME_MOVE_ITEM_START_QUICK", void 0);
s([ c(cc.Integer) ], e.prototype, "TIME_MOVE_ITEM_START", void 0);
s([ c(cc.Integer) ], e.prototype, "TIME_MOVE_ITEM_QUICK", void 0);
s([ c(cc.Integer) ], e.prototype, "TIME_MOVE_ITEM", void 0);
s([ c(cc.Integer) ], e.prototype, "TIME_MOVE_STOP_ITEM_QUICK", void 0);
s([ c(cc.Integer) ], e.prototype, "TIME_MOVE_STOP_ITEM", void 0);
s([ c(cc.Integer) ], e.prototype, "TIME_FIRST_REEL_STOP", void 0);
s([ c(cc.Integer) ], e.prototype, "TIME_FIRST_REEL_STOP_QUICK", void 0);
s([ c(cc.Integer) ], e.prototype, "TIME_REEL_STOP", void 0);
s([ c(cc.Integer) ], e.prototype, "TIME_REEL_STOP_QUICK", void 0);
s([ c(cc.Integer) ], e.prototype, "TIME_SINGLE_LINE", void 0);
s([ c(cc.Integer) ], e.prototype, "TIME_SINGLE_LINE_QUICK", void 0);
return s([ a ], e);
}(l.default);
o.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotConfig": void 0
} ],
Slot7Effect: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "96995w+/XxOKoPgsHIpEiRr", "Slot7Effect");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotEffect"), r = t("../../base_slot/util/AudioUtil"), a = cc._decorator, c = a.ccclass, p = a.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeBonus = null;
e.nodeEffectFreespin = null;
e.txtEffectFreespin = null;
e.nodeNumFreespin = null;
e.txtNumFreespin = null;
e.listWild = [];
e.moneycu = "";
e.listIdxWild = [];
e.mSlot = null;
e.mSlotRoom = null;
return e;
}
e.prototype.init = function(e) {
t.prototype.init.call(this, e);
};
e.prototype.showExpandWild = function(t, e) {
var o = this;
void 0 === t && (t = null);
void 0 === e && (e = null);
for (var i = function(i) {
for (var s = n.listIdxWild[i], l = 200 * s - 388, r = function(i) {
if (!n.listWild[i].node.active) {
n.listWild[i].node.active = !0;
n.listWild[i].node.x = l;
n.listWild[i].node.stopAllActions();
n.listWild[i].node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
o.listWild[i].node.active = !1;
t && e && t.call(e, s);
}, n)));
return "break";
}
}, a = 0; a < n.listWild.length && "break" !== r(a); a++) ;
}, n = this, s = 0; s < this.listIdxWild.length; s++) i(s);
};
e.prototype.showJackpot = function(t, e, o) {
var i = this;
void 0 === t && (t = null);
void 0 === e && (e = null);
r.default.playSound(this.mSlot.mSlotAudio.jackpot, this.mSlot.mIsSound);
this.mCallback = t;
this.mTarget = e;
this.nodeJackpot.active = !0;
lngui.UINumericLabelHelper.scheduleForLabel(this.txtMoneyJackpot, o, this.mSlot.mSlotConfig.TIME_ANIM_JACKPOT / 2);
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
e.prototype.showBigWin = function(t, e, o) {
var i = this;
void 0 === t && (t = null);
void 0 === e && (e = null);
r.default.playSound(this.mSlot.mSlotAudio.bigwin, this.mSlot.mIsSound);
this.mCallback = t;
this.mTarget = e;
this.nodeBigwin.active = !0;
lngui.UINumericLabelHelper.scheduleForLabel(this.txtMoneyBigwin, o, 2);
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(this.mSlot.mSlotConfig.TIME_ANIM_BIGWIN), cc.callFunc(function() {
i.nodeBigwin.active = !1;
i.mCallback && i.mTarget && i.mCallback.call(i.mTarget);
}, this)));
};
e.prototype.showSuperwin = function(t, e, o) {
var i = this;
void 0 === t && (t = null);
void 0 === e && (e = null);
r.default.playSound(this.mSlot.mSlotAudio.bigwin, this.mSlot.mIsSound);
this.mCallback = t;
this.mTarget = e;
this.nodeBigwin.active = !0;
lngui.UINumericLabelHelper.scheduleForLabel(this.txtMoneyBigwin, o, this.mSlot.mSlotConfig.TIME_ANIM_BIGWIN / 2);
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(this.mSlot.mSlotConfig.TIME_ANIM_BIGWIN), cc.callFunc(function() {
i.nodeBigwin.active = !1;
i.mCallback && i.mTarget && i.mCallback.call(i.mTarget);
}, this)));
};
e.prototype.showWin = function(t, e, o) {
void 0 === t && (t = null);
void 0 === e && (e = null);
r.default.playSound(this.mSlot.mSlotAudio.win, this.mSlot.mIsSound);
this.mCallback = t;
this.mTarget = e;
var i = this;
this.nodeWin.active = !0;
this.txtMoneyWin.node.active = !0;
console.log("-=-showWin   ", o);
lngui.UINumericLabelHelper.scheduleForLabel(this.txtMoneyWin, o, this.mSlot.mSlotConfig.TIME_ANIM_WIN / 2);
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(this.mSlot.mSlotConfig.TIME_ANIM_WIN), cc.callFunc(function() {
lngui.UINumericLabelHelper.scheduleForLabel(i.txtMoneyWin, 1, i.mSlot.mSlotConfig.TIME_ANIM_WIN / 2);
i.nodeWin.active = !1;
i.mCallback && i.mTarget && i.mCallback.call(i.mTarget);
}, this)));
};
e.prototype.showBonus = function(t, e) {
var o = this;
void 0 === t && (t = null);
void 0 === e && (e = null);
r.default.playSound(this.mSlot.mSlotAudio.jackpot, this.mSlot.mIsSound);
this.mCallback = t;
this.mTarget = e;
this.nodeBonus.active = !0;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(this.mSlot.mSlotConfig.TIME_ANIM_BONUS), cc.callFunc(function() {
o.nodeBonus.active = !1;
o.mCallback && o.mTarget && o.mCallback.call(o.mTarget);
}, this)));
};
e.prototype.showFreespin = function(t, e, o) {
var i = this;
void 0 === t && (t = null);
void 0 === e && (e = null);
r.default.playSound(this.mSlot.mSlotAudio.jackpot, this.mSlot.mIsSound);
this.mCallback = t;
this.mTarget = e;
this.nodeEffectFreespin.active = !0;
this.txtEffectFreespin.string = "" + o;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(this.mSlot.mSlotConfig.TIME_ANIM_FREESPIN), cc.callFunc(function() {
i.nodeEffectFreespin.active = !1;
i.nodeNumFreespin.active = !0;
i.txtNumFreespin.string = o.toString();
i.mCallback && i.mTarget && i.mCallback.call(i.mTarget);
}, this)));
};
e.prototype.showNumFreespin = function(t) {
if (t <= 0) this.nodeNumFreespin.active = !1; else {
this.nodeNumFreespin.active = !0;
this.txtNumFreespin.string = t.toString();
}
};
e.prototype.hideWildExpand = function() {
for (var t = 0; t < this.listWild.length; t++) {
this.listWild[t].node.stopAllActions();
this.listWild[t].node.active = !1;
}
};
s([ p(cc.Node) ], e.prototype, "nodeBonus", void 0);
s([ p(cc.Node) ], e.prototype, "nodeEffectFreespin", void 0);
s([ p(cc.Label) ], e.prototype, "txtEffectFreespin", void 0);
s([ p(cc.Node) ], e.prototype, "nodeNumFreespin", void 0);
s([ p(cc.Label) ], e.prototype, "txtNumFreespin", void 0);
s([ p([ sp.Skeleton ]) ], e.prototype, "listWild", void 0);
return s([ c ], e);
}(l.default);
o.default = u;
cc._RF.pop();
}, {
"../../base_slot/SlotEffect": void 0,
"../../base_slot/util/AudioUtil": void 0
} ],
Slot7Entity: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "67e2cbiA0lDU41ZqCh8c+b6", "Slot7Entity");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.DataSlot7BonusItem = o.DataSlot7BonusGame = o.DataSlot7LineWin = o.DataSlot7Spin = void 0;
var i = function() {
function t() {
this.accountId = 0;
this.session = 0;
this.listItem = [];
this.listLineWin = [];
this.isJackpot = !1;
this.totalBet = 0;
this.totalWin = 0;
this.bonusGameType = 0;
this.numTotalMoneyWinFreespin = 0;
this.numFreespinDaQuay = 0;
this.numFreespin = 0;
this.numFreespinConLai = 0;
this.userMoney = 0;
this.moneyJackpot = 0;
this.moneyWinJackpot = 0;
this.dataBonusGame = null;
}
t.prototype.getLineWinJackpot = function() {
for (var t = 0; t < this.listLineWin.length; t++) if (4 == this.listLineWin[t].prizeId) return this.listLineWin[t];
return null;
};
return t;
}();
o.DataSlot7Spin = i;
o.DataSlot7LineWin = function() {
this.id = 0;
this.prizeId = 0;
this.moneyWin = 0;
this.listIdx = [];
};
o.DataSlot7BonusGame = function() {
this.BonusSpinID = 0;
this.BetValue = 0;
this.Multiplier = 0;
this.TotalTurn = 0;
this.CurrentTurn = 0;
this.BonusPrizeID = 0;
this.SelectedItemIDs = null;
this.PrizeID = 0;
this.PrizeValue = 0;
this.AwardedPrizeValue = 0;
this.TotalPrizeValue = 0;
this.BonusItemsData = [];
};
o.DataSlot7BonusItem = function() {
this.Step = 0;
this.PrizeID = 0;
this.Multiplier = 0;
this.PrizeValue = 0;
};
cc._RF.pop();
}, {} ],
Slot7Guide: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "be85eo2uxZJM46Tg0noX3aG", "Slot7Guide");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = cc._decorator, r = l.ccclass, a = l.property, c = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.pageView = null;
return e;
}
e.prototype.start = function() {};
e.prototype.onClickNextPre = function(t, e) {
var o = this.pageView.getPages().length, i = this.pageView.getCurrentPageIndex();
1 == e ? ++i > o && (i = 0) : --i < 0 && (i = 0);
this.pageView.setCurrentPageIndex(i);
};
s([ a(cc.PageView) ], e.prototype, "pageView", void 0);
return s([ r ], e);
}(cc.Component);
o.default = c;
cc._RF.pop();
}, {} ],
Slot7Handler: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6be1eUUsmFB4oWxrSVuwj1x", "Slot7Handler");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("./Slot7Var"), r = t("./Slot7Entity"), a = t("../../base_slot/SlotHandler"), c = t("./Slot7Room"), p = cc._decorator, u = p.ccclass, h = (p.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSlot = null;
e.mListenerKey = "SlotCorona";
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
o._instance = this;
};
e.prototype.connect = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect(this.mListenerKey, l.default.api.negotiate, l.default.api.hub, l.default.api.gate, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onWebSocketCallback = function(t) {
if ("open" == t.s || "reconnect" == t.s) {
if (!this.mSlot.isConnect) {
this.mSlot.isConnect = !0;
this.mSlot.connectSuccess();
}
} else if (t.M && Array.isArray(t.M) && 0 !== t.M.length) for (var e = t.M.length, o = 0; o < e; ++o) {
var i = t.M[o], n = null;
i.A && (n = i.A[0]);
switch (i.M) {
case "joinGame":
this.onJoinGame(n);
3 == n.GameStatus && this.sendEndBonus(12, 12);
5 == n.GameStatus && this.sendFreeSpin();
break;

case "resultSpin":
if (this.mSlot.isTrial()) this.onSpin(n); else if (1 != n.SpinData.Response) if (-10003 == n.SpinData.Response) ; else if (-10004 == n.SpinData.Response) {
this.mSlot.mTooltip.show("Số dư không đủ để quay");
c.default.instance.mSlotRoomUI.btnBack.interactable = !0;
} else if (n.SpinData.Response < 0) {
this.mSlot.mTooltip.show("Có lỗi xảy ra trong quá trình quay, mời bạn thử lại");
c.default.instance.mSlotRoomUI.btnBack.interactable = !0;
} else console.log("-= nbi sao ay nhi"); else this.onSpin(n);
break;

case "resultFreeSpin":
n.SpinData = n.FreeSpinData;
this.onSpin(n);
break;

case "updateJackpot":
this.onUpdateJackpot(n);
break;

case "message":
this.onMessage(n);
break;

case "GetEventInfo":
this.onGetPotInfo(n);
break;

case "GetHistory":
case "history":
this.onHistory(n);
break;

case "honor":
this.onGetRank(n);
}
} else if (t.R && t.R.IsPlayTry) {
this.mSlot.mDataJoinRoom = t.R;
this.onJoinGame(t.R);
}
};
e.prototype.showError = function() {
console.log("showError");
var t = {
SlotInfo: {
AccountID: lngui.UserManager.instance.mainUserInfo.AccountID
},
SpinData: {
SpinID: 0,
TotalBetValue: 0,
PayLinePrizeValue: 0,
SlotsData: [ 9, 7, 9, 6, 5, 8, 8, 6, 7, 8, 9, 7, 4, 2, 2 ],
PrizeLines: []
},
Account: {
TotalStar: lngui.UserManager.instance.mainUserInfo.Money
}
}, e = new r.DataSlot7Spin();
e.accountId = t.SlotInfo.AccountID;
e.session = t.SpinData.SpinID;
e.totalBet = t.SpinData.TotalBetValue;
e.totalWin = t.SpinData.PayLinePrizeValue;
e.userMoney = t.Account.TotalStar;
e.dataBonusGame = new r.DataSlot7BonusGame();
e.numFreespin = 0;
e.numFreespinDaQuay = 0;
e.numTotalMoneyWinFreespin = 0;
e.listItem = t.SpinData.SlotsData || [];
for (var o = t.SpinData.PrizeLines || [], i = 0; i < o.length; i++) if (o[i].LineID <= 25 && o[i].LineID > 0) {
var n = new r.DataSlot7LineWin();
n.id = o[i].LineID;
n.moneyWin = o[i].PrizeValue;
n.prizeId = o[i].PrizeID;
4 == n.prizeId && (e.isJackpot = !0);
for (var s in o[i].Items) {
var l = o[i].Items[s];
l--;
n.listIdx.push(l);
}
e.listLineWin.push(n);
}
c.default.instance.showError(e);
};
e.prototype.onMessage = function(t) {
if (t) {
"string" == typeof t ? this.mSlot.mTooltip.show(t) : "object" == typeof t && this.mSlot.mTooltip.show(t.description);
this.showError();
}
};
e.prototype.onGetPotInfo = function(t) {
t && this.mSlot.mSlotPot.onEventXPot(t);
};
e.prototype.onJoinGame = function(t) {
t ? this.mSlot.onJoinGameSuccess(t) : this.mSlot.onJoinGameFail();
};
e.prototype.onSpin = function(t) {
var e = t, o = new r.DataSlot7Spin();
o.accountId = e.Account.AccountID;
o.session = e.SpinData.SpinID;
o.totalBet = e.SpinData.TotalBet;
o.totalWin = e.SpinData.PaylinePrize;
o.userMoney = e.Account.TotalStar;
o.moneyJackpot = (e.SpinData.TotalJackpot, e.SpinData.TotalJackpot);
o.moneyWinJackpot = e.SpinData.TotalJackpot ? e.SpinData.TotalJackpot : e.SpinData.PaylinePrize;
o.isJackpot = e.SpinData.IsJackpot;
var i = null, n = 0;
e.SpinData.DataOut && (i = e.SpinData.DataOut.split(","));
if (i) {
n = parseInt(i[1]);
n = isNaN(n) ? 0 : n;
}
n = n > 0 ? n : 0;
o.numFreespin = e.SpinData.TotalFreeSpin + n;
o.bonusGameType = e.SpinData.BonusGameType;
o.dataBonusGame = null;
o.dataBonusGame = new r.DataSlot7BonusGame();
o.dataBonusGame.TotalTurn = e.BonusGame.TotalStep;
if (e.BonusGame.BonusData) for (var s = 0; s < e.BonusGame.BonusData.length; s++) {
var l = new r.DataSlot7BonusItem();
l.Step = e.BonusGame.BonusData[s].Step;
l.PrizeID = e.BonusGame.BonusData[s].PrizeID;
l.Multiplier = e.BonusGame.BonusData[s].Multiplier;
l.PrizeValue = e.BonusGame.BonusData[s].PrizeValue;
o.dataBonusGame.BonusItemsData.push(l);
}
o.listItem = e.SpinData.SlotsData || [];
var a = e.SpinData.PrizeLines || [];
for (s = 0; s < a.length; s++) if (a[s].LineID <= 25 && a[s].LineID > 0) {
var p = new r.DataSlot7LineWin();
p.id = a[s].LineID;
p.moneyWin = a[s].PrizeValue;
p.prizeId = a[s].PrizeID;
for (var u in a[s].Items) {
var h = a[s].Items[u];
h--;
p.listIdx.push(h);
}
o.listLineWin.push(p);
}
c.default.instance && c.default.instance.stopSpin(o);
};
e.prototype.onUpdateJackpot = function(t) {
t = t.split("|");
this.mSlot && this.mSlot.onUpdatePot(t);
};
e.prototype.onHistory = function(t) {
this.mSlot && cc.systemEvent.emit("Slot7_get_history", t);
};
e.prototype.sendSpin = function(t, e) {
if (e) {
console.log("-== quay thu ma");
this.mSignalr.send("SpinTry");
} else this.mSignalr.send("Spin", [ t, 1 ]);
};
e.prototype.sendFreeSpin = function() {
this.mSignalr.send("FreeSpin", []);
};
e.prototype.sendSpinTest = function(t) {
this.mSignalr.send("SpinTest", [ t, 1, this.mSlot.getMoneyBet(), "6,7,5,6,4,3,3,3,2,4,5,6,7,7,6" ]);
};
e.prototype.sendGetEventPot = function() {
this.mSignalr.send("GetEventInfo");
};
e.prototype.sendEnterLobby = function() {
this.mSignalr.send("EnterLobby");
};
e.prototype.sendPlayNow = function() {
this.mSignalr.send("PlayNow", [ this.mSlot.mRoomId ]);
};
e.prototype.sendEndBonus = function(t, e) {
this.mSignalr.send("PlayBonusGame", [ t, e ]);
};
e.prototype.sendGetRank = function() {
this.mSignalr.send("GetHistoryJackPot_v2");
};
e.prototype.sendHistory = function() {
this.mSignalr.send("GetHistory", []);
};
var o;
e._instance = null;
return o = s([ u ], e);
}(a.default));
o.default = h;
cc._RF.pop();
}, {
"../../base_slot/SlotHandler": void 0,
"./Slot7Entity": "Slot7Entity",
"./Slot7Room": "Slot7Room",
"./Slot7Var": "Slot7Var"
} ],
Slot7HistoryCell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5f6fem8OzhFWphBRx0q1aMt", "Slot7HistoryCell");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/util/FormatUtil"), r = t("./Slot7"), a = cc._decorator, c = a.ccclass, p = a.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.txtSession = null;
e.txtTime = null;
e.txtRoomBet = null;
e.txtTotalBet = null;
e.txtMoneyWin = null;
e.mIdx = 0;
e.mData = null;
e.preDetail = null;
return e;
}
e.prototype.setData = function(t, e) {
if (null != t && null != t) {
var o = t.CreatedDateFm.split(" ");
this.mIdx = e;
this.mData = t;
this.txtSession.string = "" + t.SpinID;
o.length >= 2 ? this.txtTime.string = o[1] + " " + o[0] : this.txtTime.string = t.CreatedDateFm;
this.txtTotalBet.string = l.default.formatNumber(t.TotalBetValue);
this.txtMoneyWin.string = l.default.formatNumber(t.TotalPrizeValue);
this.txtRoomBet.string = l.default.formatNumber(t.BetValue);
}
};
e.prototype.onBtnDetail = function() {
var t = cc.instantiate(this.preDetail);
t.scale = .9;
t.parent = r.default.instance.node.parent;
t.zIndex = cc.macro.MAX_ZINDEX;
t.getComponent("Slot7HistoryDetail").setData(this.mData);
};
s([ p(cc.Label) ], e.prototype, "txtSession", void 0);
s([ p(cc.Label) ], e.prototype, "txtTime", void 0);
s([ p(cc.Label) ], e.prototype, "txtRoomBet", void 0);
s([ p(cc.Label) ], e.prototype, "txtTotalBet", void 0);
s([ p(cc.Label) ], e.prototype, "txtMoneyWin", void 0);
s([ p(cc.Prefab) ], e.prototype, "preDetail", void 0);
return s([ c ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../base_slot/util/FormatUtil": void 0,
"./Slot7": "Slot7"
} ],
Slot7HistoryDetail: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2c06b5J8jJL5KTHwZrifR0r", "Slot7HistoryDetail");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/util/FormatUtil"), r = t("./Slot7"), a = t("./Slot7Item"), c = cc._decorator, p = c.ccclass, u = c.property, h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.txtSession = null;
e.txtMoneyWin = null;
e.listItem = [];
return e;
}
e.prototype.setData = function(t) {
this.txtSession.string = "#" + t.SpinID;
this.txtMoneyWin.string = l.default.formatNumber(t.TotalPrizeValue);
for (var e = t.SlotsData.split(","), o = 0; o < e.length; o++) {
var i = parseInt(e[o]);
this.listItem[o].mSlot = r.default.instance;
this.listItem[o].setId(i);
}
};
e.prototype.onBtnClose = function() {
this.node.destroy();
};
s([ u(cc.Label) ], e.prototype, "txtSession", void 0);
s([ u(cc.Label) ], e.prototype, "txtMoneyWin", void 0);
s([ u([ a.default ]) ], e.prototype, "listItem", void 0);
return s([ p ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../../base_slot/util/FormatUtil": void 0,
"./Slot7": "Slot7",
"./Slot7Item": "Slot7Item"
} ],
Slot7History: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1a8878pXL5IwqTgUW0suSM9", "Slot7History");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotHistory"), r = t("./Slot7Var"), a = cc._decorator, c = a.ccclass, p = (a.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mListData = null;
return e;
}
e.prototype.onLoad = function() {
console.log("-=-= di vao day");
this.getHistory();
this.scrollview.content.destroyAllChildren();
};
e.prototype.init = function() {
this.scrollview.content.destroyAllChildren();
};
e.prototype.getHistory = function() {
var t = this;
lngui.UIWaitingLayout.showWaiting();
var e = r.default.api.AccountHistory + lngui.UserManager.instance.mainUserInfo.GameToken;
lngui.Https.getPackData(e, function(e) {
console.log("getHistory ===", typeof e);
lngui.UIWaitingLayout.hideWaiting();
if (e) {
console.log(e);
t.filterData(1, e);
} else lngui.UIPopupManager.instance.showPopup("Đã có lỗi sảy ra=> " + e);
});
};
e.prototype.filterData = function(t, e) {
if (!this.mListData) {
this.mListData = e;
this.setDataHistory(t, this.mListData);
}
};
e.prototype.setDataHistory = function(t, e) {
this.mListDataCell = e;
this.scrollview.content.destroyAllChildren();
this.mListCell = [];
var o = e.length;
this.scrollview.content.height = o * (this.heightItem + this.spacing) + this.spacing;
for (var i = this.spawnCount <= o ? this.spawnCount : o, n = 0; n < i; n++) if (this.mListDataCell[n]) {
var s = cc.instantiate(this.cellHistory), l = s.getComponent("Slot7HistoryCell");
l.setData(this.mListDataCell[n], n);
this.scrollview.content.addChild(s);
this.mListCell.push(l);
}
};
return s([ c ], e);
}(l.default));
o.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotHistory": void 0,
"./Slot7Var": "Slot7Var"
} ],
Slot7Item: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "02e80M6IGpBgJxEkkD01/6V", "Slot7Item");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotItem"), r = t("../../base_slot/util/Util"), a = cc._decorator, c = a.ccclass, p = (a.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSlotReel = null;
e.mSlot = null;
e.mSlotRoom = null;
return e;
}
e.prototype.init = function(t) {
this.mSlotReel = t;
this.mSlotRoom = this.mSlotReel.mSlotMachine.mSlotRoom;
this.mSlot = this.mSlotRoom.mSlot;
var e = this.getRandomId();
this.setId(e);
};
e.prototype.getRandomId = function() {
return r.default.random(1, this.mSlot.mSlotConfig.MAX_ITEM);
};
e.prototype.setId = function(t) {
if (this.mId != t) {
this.mId = t;
this.sprItem.node.active = !0;
this.skeItem.node.active = !1;
this.setFrameItem(this.mId);
}
};
e.prototype.resetFrameDefault = function() {
this.sprItem.node.active = !0;
this.skeItem.node.active = !1;
this.setFrameItem(this.mId);
};
e.prototype.moveStart = function(t) {
void 0 === t && (t = 0);
var e = this;
this.mIndex -= 3;
if (2 == this.mIndex) {
var o = this.getRandomId();
this.setId(o);
} else if (1 == this.mIndex) {
o = this.getRandomId();
this.setId(o);
} else if (0 == this.mIndex) {
o = this.getRandomId();
this.setId(o);
}
var i = this.node.y - 3 * this.mSlot.mSlotConfig.DISTANCE, n = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START_QUICK : this.mSlot.mSlotConfig.TIME_MOVE_ITEM_START;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.moveTo(n, e.node.x, i), cc.callFunc(function() {
e.reset();
e.mSlotReel.cbStopAllItemMoveStart();
}, this)));
};
e.prototype.move = function(t) {
void 0 === t && (t = 0);
var e = this;
this.mIndex -= 3;
if (2 == this.mIndex) {
var o = this.getRandomId();
this.setId(o);
} else if (1 == this.mIndex) {
o = this.getRandomId();
this.setId(o);
} else if (0 == this.mIndex) {
o = this.getRandomId();
this.setId(o);
}
var i = this.node.y - 3 * this.mSlot.mSlotConfig.DISTANCE, n = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_MOVE_ITEM_QUICK : this.mSlot.mSlotConfig.TIME_MOVE_ITEM;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.moveTo(n, e.node.x, i), cc.callFunc(function() {
e.reset();
e.mSlotReel.cbStopAllItemMove();
}, this)));
};
e.prototype.moveStop = function(t) {
void 0 === t && (t = 0);
var e = this;
this.mIndex -= 3;
2 == this.mIndex ? this.setId(this.mSlotReel.listIdItemResult[2]) : 1 == this.mIndex ? this.setId(this.mSlotReel.listIdItemResult[1]) : 0 == this.mIndex && this.setId(this.mSlotReel.listIdItemResult[0]);
var o = this.node.y - 3 * this.mSlot.mSlotConfig.DISTANCE, i = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_MOVE_STOP_ITEM_QUICK : this.mSlot.mSlotConfig.TIME_MOVE_STOP_ITEM;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.moveTo(i, e.node.x, o).easing(cc.easeBackOut()), cc.callFunc(function() {
e.reset();
e.mSlotReel.cbStopAllItemMoveStop();
}, this)));
};
e.prototype.setSkeData = function(t) {
var e = -1;
1 == t ? e = 3 : 2 == t ? e = 1 : 3 == t ? e = 2 : 4 == t && (e = 0);
this.skeItem.skeletonData = this.mSlot.mSlotConfig.LIST_SKE_ITEM[e];
this.skeItem.animation = this.mSlot.mSlotConfig.LIST_SKE_KEY[e];
this.skeItem.loop = !0;
};
e.prototype.setFrameItem = function(t) {
var e = -1;
1 == t ? e = 0 : 2 == t ? e = 1 : 3 == t ? e = 2 : 4 == t ? e = 3 : 5 == t ? e = 4 : 6 == t ? e = 5 : 7 == t ? e = 6 : 8 == t ? e = 7 : 9 == t ? e = 8 : 10 == t ? e = 9 : 11 == t ? e = 10 : console.log("ko ton tai id item = " + t);
this.mSlotRoom && this.mSlotRoom.isFreeSpin && this.mSlotRoom.mNumFreespin !== this.mSlotRoom.mNumFreespinSave ? this.sprItem.spriteFrame = this.mSlot.mSlotConfig.LIST_FRAME_FREESPIN[e] : this.sprItem.spriteFrame = this.mSlot.mSlotConfig.LIST_FRAME[e];
};
e.prototype.reset = function() {
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
return s([ c ], e);
}(l.default));
o.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotItem": void 0,
"../../base_slot/util/Util": void 0
} ],
Slot7Line: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bfaa1g44R1GEbvt/4U8uZmP", "Slot7Line");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotLine"), r = cc._decorator, a = r.ccclass, c = (r.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSlotMachine = null;
e.mSlot = null;
e.mListSlotItem = [];
return e;
}
e.prototype.showWin = function() {
this.showLineSelect();
for (var t = 0; t < this.mListSlotItem.length; t++) this.mListSlotItem[t].showWin();
};
e.prototype.showLose = function() {
this.txtLine && (this.txtLine.node.color = cc.color(255, 255, 255));
this.line.active = !1;
};
e.prototype.showLineSelect = function() {
this.line.active = !0;
this.line.opacity = 255;
this.line.stopAllActions();
this.line.runAction(cc.fadeTo(1.2, 0));
};
e.prototype.showIdle = function() {
this.mIsSelect ? this.txtLine && (this.txtLine.node.color = cc.color(255, 255, 255)) : this.txtLine && (this.txtLine.node.color = cc.color(100, 100, 100));
this.line.stopAllActions();
this.line.active = !1;
};
return s([ a ], e);
}(l.default));
o.default = c;
cc._RF.pop();
}, {
"../../base_slot/SlotLine": void 0
} ],
Slot7Machine: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0164dBp0S9Nl7AxxuiqOLYo", "Slot7Machine");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotMachine"), r = t("../../base_slot/util/AudioUtil"), a = t("./Slot7Room"), c = cc._decorator, p = c.ccclass, u = c.property, h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listSlotReel = [];
e.listSlotLine = [];
e.mSlot = null;
e.mSlotRoom = null;
e.mListSlotItemResult = [];
e.mIsAllReelStop = !0;
e.mCountAllReelStop = 0;
return e;
}
e.prototype.spin = function() {
this.mAudioIdSpin = r.default.playSound(this.mSlot.mSlotAudio.reelSpin, this.mSlot.mIsSound, !0);
this.setDefault();
for (var t = 0; t < this.listSlotReel.length; t++) this.listSlotReel[t].spin();
};
e.prototype.setDefault = function() {
t.prototype.setDefault.call(this);
this.mIsAllReelStop = !1;
this.mCountAllReelStop = 0;
for (var e = 0; e < this.listSlotReel.length; e++) this.listSlotReel[e].showAllItem();
};
e.prototype.resetItemDefault = function() {
for (var t = 0; t < this.listSlotReel.length; t++) this.listSlotReel[t].resetItemDefault();
};
e.prototype.stopSpin = function() {
for (var t = a.default.instance.mDataSpin.listItem, e = 0; e < this.listSlotReel.length; e++) {
var o = e, i = e + 5, n = e + 10;
this.listSlotReel[e].setIdItemResult([ t[n], t[i], t[o] ]);
}
var s = this, l = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_FIRST_REEL_STOP_QUICK : this.mSlot.mSlotConfig.TIME_FIRST_REEL_STOP, r = this.mSlotRoom.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_REEL_STOP_QUICK : this.mSlot.mSlotConfig.TIME_REEL_STOP;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(l), cc.callFunc(function() {
s.listSlotReel[0].stopSpin();
}, this), cc.delayTime(r), cc.callFunc(function() {
s.listSlotReel[1].stopSpin();
}, this), cc.delayTime(r), cc.callFunc(function() {
s.listSlotReel[2].stopSpin();
}, this), cc.delayTime(r), cc.callFunc(function() {
s.listSlotReel[3].stopSpin();
}, this), cc.delayTime(r), cc.callFunc(function() {
s.listSlotReel[4].stopSpin();
}, this)));
};
e.prototype.setLineSelect = function(t) {
for (var e = 0; e < this.listSlotLine.length; e++) e < t ? this.listSlotLine[e].setSelect(!0) : this.listSlotLine[e].setSelect(!1);
};
e.prototype.showLineSelect = function() {
for (var t = 0; t < this.listSlotLine.length; t++) this.listSlotLine[t].isSelect() && this.listSlotLine[t].showLineSelect();
};
e.prototype.showLineWin = function(t) {
for (var e = 0; e < this.mListSlotItemResult.length; e++) this.mListSlotItemResult[e].showLose();
var o = this.getSlotLineById(t.id);
o && o.showWin();
};
e.prototype.showAllLineWin = function(t) {
for (var e = 0; e < t.length; e++) for (var o = 0; o < this.listSlotLine.length; o++) if (this.listSlotLine[o].getId() == t[e].id) {
this.listSlotLine[o].showWin();
break;
}
};
e.prototype.updateAllItemAllLine = function() {
this.mListSlotItemResult = [];
for (var t = 2; t >= 0; t--) for (var e = 0; e < this.listSlotReel.length; e++) this.mListSlotItemResult.push(this.listSlotReel[e].getSlotItemByIndex(t));
for (t = 0; t < this.listSlotLine.length; t++) {
var o = this.mSlot.mSlotConfig.LINE[t], i = [];
for (e = 0; e < o.length; e++) {
var n = o[e];
i.push(this.mListSlotItemResult[n]);
}
this.listSlotLine[t].updateSlotItem(i);
}
};
e.prototype.resetAllItemAllline = function() {
this.updateAllItemAllLine();
};
e.prototype.callbackCheckReelStop = function() {
r.default.playSound(this.mSlot.mSlotAudio.reelStop, this.mSlot.mIsSound);
this.mCountAllReelStop++;
if (this.mCountAllReelStop == this.listSlotReel.length) {
r.default.stopSound(this.mAudioIdSpin);
this.mIsAllReelStop = !0;
this.updateAllItemAllLine();
this.mSlotRoom.showResult();
this.mSlotRoom.mSlotEffect.listIdxWild = [];
for (var t = 0; t < a.default.instance.mDataSpin.listItem.length; t++) {
var e = !1, o = !1;
if (1 == a.default.instance.mDataSpin.listItem[t]) {
e = !0;
o = !0;
for (var i = 0; i < this.mSlotRoom.mSlotEffect.listIdxWild.length; i++) (t + 5) % 5 == this.mSlotRoom.mSlotEffect.listIdxWild[i] && (o = !1);
}
e && o && this.mSlotRoom.mSlotEffect.listIdxWild.push(t % 5);
}
if (!this.mSlotRoom.isFreeSpin) for (t = 0; t < this.mSlotRoom.mSlotEffect.listIdxWild.length; t++) {
this.listSlotReel[this.mSlotRoom.mSlotEffect.listIdxWild[t]].hideAllItem();
this.mSlotRoom.mSlotEffect.showExpandWild(this.setItemNormalToWild, this);
}
this.mSlotRoom.endFreeSpin();
}
};
e.prototype.setItemNormalToWild = function(t) {
this.listSlotReel[t].showAllItem();
};
e.prototype.getListLineSelect = function() {
return this.getNumLineSelect().join();
};
s([ u({
override: !0
}) ], e.prototype, "listSlotReel", void 0);
s([ u({
override: !0
}) ], e.prototype, "listSlotLine", void 0);
return s([ p ], e);
}(l.default);
o.default = h;
cc._RF.pop();
}, {
"../../base_slot/SlotMachine": void 0,
"../../base_slot/util/AudioUtil": void 0,
"./Slot7Room": "Slot7Room"
} ],
Slot7RankCell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "155bekoH21GdpXSfXFiNlt/", "Slot7RankCell");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotRankCell"), r = t("../../base_slot/util/FormatUtil"), a = cc._decorator, c = a.ccclass, p = a.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.txtSesion = null;
return e;
}
e.prototype.setData = function(t, e, o) {
void 0 === o && (o = !1);
var i = t.CreatedDateFm.split(" ");
this.mIdx = e;
this.txtSesion.string = "#" + t.SpinID;
this.txtTime.string = i[1] + " " + i[0];
this.txtUserName.string = t.UserName;
this.txtWin.string = r.default.formatNumber(t.PrizeValue);
this.txtDecription.string = o ? "Nổ quỹ" : "Thắng lớn";
};
s([ p(cc.Label) ], e.prototype, "txtSesion", void 0);
return s([ c ], e);
}(l.default);
o.default = u;
cc._RF.pop();
}, {
"../../base_slot/SlotRankCell": void 0,
"../../base_slot/util/FormatUtil": void 0
} ],
Slot7Rank: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1119apmgV1MAaErP8eKQ0SE", "Slot7Rank");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotRank"), r = t("./Slot7RankCell"), a = t("./Slot7Var"), c = cc._decorator, p = c.ccclass, u = (c.property, 
function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
this.mState = 1;
this.getRank();
};
e.prototype.init = function(t) {
this.mSlot = t;
this.scrollview.content.destroyAllChildren();
this.mListCell = [];
};
e.prototype.getRank = function() {
var t = this;
lngui.UIWaitingLayout.showWaiting();
var e = 1 === this.mState ? a.default.api.GetBigWinner : a.default.api.GetBigWinnerJackpot;
console.log("p=p=getRank ", e);
lngui.Https.getPackData(e, function(e) {
lngui.ZLog.log("getRank ===" + JSON.stringify(e));
lngui.UIWaitingLayout.hideWaiting();
if (e) {
console.log(e);
t.filterData(1, e);
} else lngui.UIPopupManager.instance.showPopup("Đã có lỗi sảy ra=> " + e);
});
};
e.prototype.filterData = function(t, e) {
if (1 == this.mState) {
this.listDataBigwinCache = e;
this.setData(this.listDataBigwinCache);
} else {
this.listDataJackpotCache = e;
this.setData(this.listDataJackpotCache);
}
};
e.prototype.onBtnThanglon = function() {
this.mState = 1;
this.scrollview.content.destroyAllChildren();
this.mListCell = [];
this.getRank();
};
e.prototype.onBtnNohu = function() {
this.mState = 2;
this.scrollview.content.destroyAllChildren();
this.mListCell = [];
this.getRank();
};
e.prototype.setData = function(t) {
console.log("_+_=-=setData   ", t);
this.mListDataCell = t;
this.scrollview.content.destroyAllChildren();
this.mListCell = [];
var e = t.length;
this.scrollview.content.height = e * (this.heightItem + this.spacing) + this.spacing;
for (var o = this.spawnCount <= e ? this.spawnCount : e, i = 0; i < o; i++) {
var n = cc.instantiate(this.cellRank);
n.active = !0;
var s = n.getComponent(r.default);
s.setData(this.mListDataCell[i], i, 2 == this.mState);
var l = -n.height * (.5 + i) - this.spacing * (i + 1);
n.x = 0;
n.y = l;
this.mListCell.push(s);
this.scrollview.content.addChild(n);
}
};
return s([ p ], e);
}(l.default));
o.default = u;
cc._RF.pop();
}, {
"../../base_slot/SlotRank": void 0,
"./Slot7RankCell": "Slot7RankCell",
"./Slot7Var": "Slot7Var"
} ],
Slot7Reel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "752d6ONJc1HYrX7B/tNJ++w", "Slot7Reel");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotReel"), r = cc._decorator, a = r.ccclass, c = r.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listItem = [];
e.mSlotMachine = null;
e.mSlot = null;
e.mIsStop = !1;
e.mCountItemStartMove = 0;
e.mCountItemStopMove = 0;
e.mCountItemMove = 0;
return e;
}
e.prototype.spin = function() {
this.setDefault();
for (var t = 0; t < this.listItem.length; t++) this.listItem[t].moveStart();
};
e.prototype.stopSpin = function() {
this.mIsStop = !0;
};
e.prototype.setDefault = function() {
t.prototype.setDefault.call(this);
this.mIsStop = !1;
this.mCountItemStopMove = 0;
this.mCountItemStartMove = 0;
this.mCountItemMove = 0;
for (var e = 0; e < this.listItem.length; e++) this.listItem[e].node.active = !0;
};
e.prototype.cbStopAllItemMoveStart = function() {
this.mCountItemStartMove++;
if (this.mCountItemStartMove == this.listItem.length) for (var t = 0; t < this.listItem.length; t++) this.listItem[t].move();
};
e.prototype.cbStopAllItemMove = function() {
this.mCountItemMove++;
if (this.mCountItemMove == this.listItem.length) if (this.mIsStop) for (var t = 0; t < this.listItem.length; t++) this.listItem[t].moveStop(); else {
this.mCountItemMove = 0;
for (t = 0; t < this.listItem.length; t++) this.listItem[t].move();
}
};
e.prototype.cbStopAllItemMoveStop = function() {
this.mCountItemStopMove++;
if (this.mCountItemStopMove == this.listItem.length) {
this.mCountItemStopMove = 0;
this.mSlotMachine.callbackCheckReelStop();
for (var t = 0; t < this.listItem.length; t++) this.listItem[t].getIndex() > 2 && (this.listItem[t].node.active = !1);
}
};
e.prototype.hideAllItem = function() {
for (var t = 0; t < this.listItem.length; t++) {
this.listItem[t].node.active = !1;
this.listItem[t].setId(1);
}
};
e.prototype.showAllItem = function() {
for (var t = 0; t < this.listItem.length; t++) this.listItem[t].getIndex() <= 2 && (this.listItem[t].node.active = !0);
};
e.prototype.resetItemDefault = function() {
for (var t = 0; t < this.listItem.length; t++) this.listItem[t].resetFrameDefault();
};
s([ c({
override: !0
}) ], e.prototype, "listItem", void 0);
return s([ a ], e);
}(l.default);
o.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotReel": void 0
} ],
Slot7RoomUI: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a53bblgqGFLh7IkmUxXuNe7", "Slot7RoomUI");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotRoomUI"), r = t("../../base_slot/util/FormatUtil"), a = cc._decorator, c = a.ccclass, p = a.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.btnSelectLine = null;
e.btnBet = null;
e.btnStopAutoSpin = null;
e.pTotalBet = 0;
return e;
}
e.prototype.interactableBtnSelectline = function(t) {
this.btnSelectLine.interactable = t;
};
e.prototype.interactableBtnBet = function(t) {
this.btnBet.interactable = t;
};
e.prototype.updatePot = function(t) {
this.txtPot && t && t > 0 && lngui.UINumericLabelHelper.scheduleForLabel(this.txtPot, t, .2);
};
e.prototype.updateTotalBet = function(t) {
t > 0 && (this.pTotalBet = t);
this.txtTotalBet ? this.txtTotalBet.string = r.default.formatNumber(t) : this.txtTotalBet = null;
};
e.prototype.interactableQuickspin = function() {};
e.prototype.visibleBtnStopSpin = function(t) {
this.btnStopAuto ? this.btnStopAuto.node.active = t : this.btnStopAuto = null;
};
e.prototype.visibleBtnStopAutoSpin = function(t) {
this.btnStopAutoSpin ? this.btnStopAutoSpin.node.active = t : this.btnStopAutoSpin = null;
};
s([ p(cc.Button) ], e.prototype, "btnSelectLine", void 0);
s([ p(cc.Button) ], e.prototype, "btnBet", void 0);
s([ p(cc.Button) ], e.prototype, "btnStopAutoSpin", void 0);
return s([ c ], e);
}(l.default);
o.default = u;
cc._RF.pop();
}, {
"../../base_slot/SlotRoomUI": void 0,
"../../base_slot/util/FormatUtil": void 0
} ],
Slot7Room: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "032d13WfNpEKLFbtAbGyNER", "Slot7Room");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotRoom"), r = t("../../base_slot/SlotConstant"), a = t("../../base_slot/util/FormatUtil"), c = cc._decorator, p = c.ccclass, u = c.property, h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSlotRoomUI = null;
e.mSlotMachine = null;
e.mSlotEffect = null;
e.boxSetting = null;
e.preBonus = null;
e.mSlot = null;
e.mDataSpin = null;
e.mTurnWinCurent = 1;
e.mIsJackpot = !1;
e.mNumFreespin = 0;
e.mNumLineSelect = 0;
e.mStateFreespin = !0;
e.mIdxLineWin = 0;
e.isFreeSpin = !1;
e.moneyFreeSpin = 0;
e.mNumFreespinSave = 0;
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
o._instance = this;
t.prototype.onLoad.call(this);
this.mSlotEffect.init(this);
this.mSlotMachine.init(this);
};
e.prototype.onEnable = function() {
this.setDefault();
};
e.prototype.onDisable = function() {
this.mSlot.isTrial() && this.mSlot.mSlotNetwork.send("PlayTry", !1);
};
e.prototype.init = function(t) {
this.mSlot = t;
this.mSlot.isTrial() ? this.onUpdatePot(this.mSlot.mDataJoinRoom.SpinData.Jackpot) : this.onUpdatePot(this.mSlot.mListPot[this.mSlot.mRoomId - 1]);
this.mMoneyWin = 0;
this.mNumLineSelect = 25;
this.mUserMoney = this.mSlot.mDataJoinRoom.Account.TotalStar;
this.updateTotalWin(this.mMoneyWin);
this.updateTotalBet();
this.mSlotMachine.setLineSelect(this.mNumLineSelect);
this.mSlotRoomUI.updateLineSelect(this.mNumLineSelect);
this.updateBet(this.mSlot.getMoneyBet());
this.updateUserMoney(this.mUserMoney);
this.mSlotRoomUI.btnSound.isChecked = this.mSlot.mIsSound;
this.mSlotRoomUI.btnMusic.isChecked = this.mSlot.mIsMusic;
this.mNumFreespin = this.mSlot.mDataJoinRoom.FreeSpinData.TotalFreeSpin;
if (this.mNumFreespin > 0) {
this.mStateFreespin = !1;
this.mSlotEffect.showNumFreespin(this.mNumFreespin);
this.mSlotRoomUI.updateTotalBet(0);
}
};
e.prototype.setDefault = function() {
t.prototype.setDefault.call(this);
this.mIdxLineWin = 0;
this.mSlotRewardPool.clearAllAnim();
this.mSlotEffect.hideWildExpand();
};
e.prototype.spin = function() {
this.setDefault();
this.mSlotMachine.spin();
this.mState = r.SLOT_STATE.SPINING;
this.mSlotRoomUI.visibleBtnStopSpin(!0);
this.mSlotRoomUI.visibleBtnStopAutoSpin(!1);
this.mSlotRoomUI.interactableBtnSpin(!1);
this.mSlotRoomUI.interactableBtnAutoSpin(!1);
this.mSlotRoomUI.interactableQuickspin(!1);
this.mSlotRoomUI.interactableBtnBack(!1);
this.mSlotRoomUI.interactableBtnSelectline(!1);
this.mSlotRoomUI.interactableBtnBet(!1);
if (this.mNumFreespin > 0) {
this.mNumFreespin--;
this.mSlotEffect.showNumFreespin(this.mNumFreespin);
this.mSlot.mSlotNetwork.sendFreeSpin();
} else {
this.mUserMoney -= this.getTotalBet();
this.updateUserMoney(this.mUserMoney);
this.mSlot.mSlotNetwork.sendSpin(this.mSlotMachine.getNumLineSelect().join(","), this.mSlot.isTrial());
}
};
e.prototype.stopSpin = function(t) {
this.mDataSpin = t;
this.mSlotRoomUI.updateSession(t.session);
this.mSlotMachine.stopSpin();
if (this.mDataSpin.listLineWin.length > 0) {
this.mSlotRewardPool.push(r.SLOT_ANIM_PRIORITY.ANIM_ALL_LINE_WIN);
this.mSlotRewardPool.push(r.SLOT_ANIM_PRIORITY.ANIM_SINGLE_LINE_WIN);
this.mDataSpin.isJackpot && this.mSlotRewardPool.push(r.SLOT_ANIM_PRIORITY.ANIM_JACKPOT);
var e = this.mSlot.getMoneyBet();
this.mDataSpin.totalWin >= this.mSlot.mSlotConfig.RATE_SUPER_WIN * e && !this.mDataSpin.isJackpot ? this.mSlotRewardPool.push(r.SLOT_ANIM_PRIORITY.ANIM_BIGWIN) : this.mDataSpin.totalWin >= this.mSlot.mSlotConfig.RATE_BIG_WIN * e && !this.mDataSpin.isJackpot ? this.mSlotRewardPool.push(r.SLOT_ANIM_PRIORITY.ANIM_BIGWIN) : this.mDataSpin.totalWin > 0 && !this.mDataSpin.isJackpot && this.mSlotRewardPool.push(r.SLOT_ANIM_PRIORITY.ANIM_WIN);
}
this.mDataSpin.dataBonusGame.BonusItemsData.length > 0 && this.mSlotRewardPool.push(r.SLOT_ANIM_PRIORITY.ANIM_BONUS);
if (this.mDataSpin.numFreespin > 0 && this.mStateFreespin) {
this.mStateFreespin = !1;
this.mNumFreespin = this.mDataSpin.numFreespin;
if (!this.isFreeSpin) {
this.isFreeSpin = !0;
this.moneyFreeSpin = 0;
this.mNumFreespinSave = this.mNumFreespin;
}
this.mSlotRewardPool.push(r.SLOT_ANIM_PRIORITY.ANIM_FREESPIN);
this.mSlotRoomUI.updateTotalBet(0);
}
};
e.prototype.endFreeSpin = function() {
var t = this;
if (this.isFreeSpin && this.mDataSpin.numFreespin <= 0) {
var e = this.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_FIRST_REEL_STOP_QUICK : this.mSlot.mSlotConfig.TIME_FIRST_REEL_STOP, o = this.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_REEL_STOP_QUICK : this.mSlot.mSlotConfig.TIME_REEL_STOP;
setTimeout(function() {
t.mSlotRoomUI.updateTotalBet(t.mSlotRoomUI.pTotalBet);
t.updateUserMoney(t.mUserMoney);
t.mSlot.mTooltip.show("Bạn nhận được " + a.default.formatNumber(t.moneyFreeSpin) + " Big sau " + t.mNumFreespinSave + " lượt quay!", 4);
t.isFreeSpin = !1;
t.moneyFreeSpin = 0;
t.mNumFreespinSave = 0;
t.mSlotMachine.resetItemDefault();
t.setDefault();
}, 1e3 * (e + 4 * o));
}
};
e.prototype.showResult = function() {
var t = this.mSlotRewardPool.get();
if (t) {
if (t == r.SLOT_ANIM_PRIORITY.ANIM_ALL_LINE_WIN) {
this.mSlotMachine.showAllLineWin(this.mDataSpin.listLineWin);
this.showResult();
} else if (t == r.SLOT_ANIM_PRIORITY.ANIM_JACKPOT) {
var e = this.mDataSpin.moneyWinJackpot;
this.mSlotEffect.showJackpot(this.showResult, this, e);
this.updateTotalWin(e);
} else if (t == r.SLOT_ANIM_PRIORITY.ANIM_BONUS) this.mSlotEffect.showBonus(this.showMiniBonus, this); else if (t == r.SLOT_ANIM_PRIORITY.ANIM_FREESPIN) this.mSlotEffect.showFreespin(this.showResult, this, this.mDataSpin.numFreespin); else if (t == r.SLOT_ANIM_PRIORITY.ANIM_BIGWIN) {
this.mSlotEffect.showBigWin(this.showResult, this, this.mDataSpin.totalWin);
this.updateTotalWin(this.mDataSpin.totalWin);
} else if (t == r.SLOT_ANIM_PRIORITY.ANIM_WIN) {
this.mSlotEffect.showWin(this.showResult, this, this.mDataSpin.totalWin);
this.updateTotalWin(this.mDataSpin.totalWin);
} else if (t == r.SLOT_ANIM_PRIORITY.ANIM_SINGLE_LINE_WIN) {
var o = this;
this.mSlotRewardPool.push(r.SLOT_ANIM_PRIORITY.ANIM_SINGLE_LINE_WIN);
var i = this.mDataSpin.listLineWin[this.mIdxLineWin];
this.mSlotMachine.showLineWin(i);
var n = this.mIsQuickSpin ? this.mSlot.mSlotConfig.TIME_SINGLE_LINE_QUICK : this.mSlot.mSlotConfig.TIME_SINGLE_LINE;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(n), cc.callFunc(function() {
o.mIdxLineWin++;
o.mIdxLineWin >= o.mDataSpin.listLineWin.length && (o.mIdxLineWin = 0);
o.showResult();
}, this)));
this.checkNextSpin();
}
} else this.checkNextSpin();
};
e.prototype.updateTotalWin = function(t) {
this.mMoneyWin += t;
this.mSlotRoomUI.updateTotalWin(this.mMoneyWin);
this.isFreeSpin && (this.moneyFreeSpin += t);
};
e.prototype.nextSpin = function() {
var t = this;
this.onUpdatePot(this.mDataSpin.moneyJackpot);
if (this.mNumFreespin > 0) {
clearTimeout(this.mTimeoutNextSpin);
this.mTimeoutNextSpin = setTimeout(this.spin.bind(this), this.mSlot.mSlotConfig.TIME_DELAY_NEXT_SPIN);
} else {
this.updateUserMoney(this.mDataSpin.userMoney);
this.mStateFreespin = !0;
if (this.mIsAutoSpin) {
this.mState = r.SLOT_STATE.READY;
clearTimeout(this.mTimeoutNextSpin);
this.mTimeoutNextSpin = setTimeout(function() {
t.onBtnSpin();
t.mSlotRoomUI.visibleBtnStopSpin(!0);
t.mSlotRoomUI.visibleBtnStopAutoSpin(!0);
t.mSlotRoomUI.interactableBtnSpin(!1);
t.mSlotRoomUI.interactableBtnAutoSpin(!1);
}, this.mSlot.mSlotConfig.TIME_DELAY_NEXT_SPIN);
} else {
this.mUserMoney = this.mDataSpin.userMoney;
this.mSlot.isTrial();
this.mState = r.SLOT_STATE.READY;
this.mSlotRoomUI.interactableBtnSpin(!0);
this.mSlotRoomUI.interactableBtnBack(!0);
this.mSlotRoomUI.interactableBtnSelectline(!0);
this.mSlotRoomUI.interactableBtnBet(!0);
this.mSlotRoomUI.visibleBtnStopSpin(!1);
this.mSlotRoomUI.interactableBtnAutoSpin(!0);
this.mSlotRoomUI.interactableQuickspin(!0);
}
}
};
e.prototype.showMiniBonus = function() {
lngui.UIPopupManager.instance.showPopupFromPrefab(this.preBonus);
};
e.prototype.checkNextSpin = function() {
this.nextSpin();
};
e.prototype.onBtnBack = function() {
this.mSlot.onBtnBack();
};
e.prototype.getTotalBet = function() {
return this.mSlot.getMoneyBet() * this.mNumLineSelect;
};
e.prototype.onBtnGuide = function() {};
e.prototype.onBtnAddBet = function() {
if (this.mSlot.isTrial()) this.mSlot.mTooltip.show("Không dùng được chức năng này trong chế độ chơi thử"); else if (this.mState == r.SLOT_STATE.READY) {
this.mSlot.mRoomId++;
this.mSlot.mRoomId > 3 && (this.mSlot.mRoomId = 1);
this.mSlot.mSlotNetwork.sendPlayNow();
this.updateBet(this.mSlot.getMoneyBet());
this.updateTotalBet();
this.onUpdatePot(this.mSlot.mListPot[this.mSlot.mRoomId - 1]);
}
};
e.prototype.onBtnSubBet = function() {
if (this.mSlot.isTrial()) this.mSlot.mTooltip.show("Không dùng được chức năng này trong chế độ chơi thử"); else if (this.mState == r.SLOT_STATE.READY) {
this.mSlot.mRoomId--;
this.mSlot.mRoomId < 1 && (this.mSlot.mRoomId = 3);
this.mSlot.mSlotNetwork.sendPlayNow();
this.updateBet(this.mSlot.getMoneyBet());
this.updateTotalBet();
this.onUpdatePot(this.mSlot.mListPot[this.mSlot.mRoomId - 1]);
}
};
e.prototype.onBtnHistory = function() {};
e.prototype.onBtnRank = function() {};
e.prototype.onBtnSelectLine = function() {
if (this.mSlot.isTrial()) this.mSlot.mTooltip.show("Không dùng được chức năng này trong chế độ chơi thử"); else if (this.mState == r.SLOT_STATE.READY) {
this.mNumLineSelect++;
this.mNumLineSelect > 25 && (this.mNumLineSelect = 1);
this.mSlotMachine.setLineSelect(this.mNumLineSelect);
this.mSlotMachine.showLineSelect();
this.mSlotRoomUI.updateLineSelect(this.mNumLineSelect);
this.updateTotalBet();
}
};
e.prototype.onBtnSetting = function() {
this.boxSetting.active = !this.boxSetting.active;
};
e.prototype.onBtnCloseSetting = function() {
this.boxSetting.active = !1;
};
e.prototype.onBtnAutoSpin = function() {
if (this.mSlot.isTrial()) this.mSlot.mTooltip.show("Không dùng được chức năng này trong chế độ chơi thử"); else {
this.mIsAutoSpin = !this.mIsAutoSpin;
if (this.mIsAutoSpin) {
if (this.mState != r.SLOT_STATE.READY) {
this.mSlot.mTooltip.show("Không quay được khi chưa kết thúc phiên");
return;
}
if (this.mUserMoney < this.getTotalBet()) {
this.mSlot.mTooltip.show("Số dư không đủ để quay");
return;
}
if (this.mState == r.SLOT_STATE.READY) {
this.spin();
this.mSlotRoomUI.visibleBtnStopSpin(!0);
this.mSlotRoomUI.visibleBtnStopAutoSpin(!0);
this.mSlotRoomUI.interactableBtnSpin(!1);
this.mSlotRoomUI.interactableBtnAutoSpin(!1);
this.mSlotRoomUI.interactableQuickspin(!0);
}
} else this.onBtnStopSpin();
}
};
e.prototype.onBtnStopSpin = function() {
this.mSlotRoomUI.visibleBtnStopSpin(!1);
this.mSlotRoomUI.visibleBtnStopAutoSpin(!1);
this.mSlotRoomUI.interactableBtnAutoSpin(!0);
this.mSlotRoomUI.interactableQuickspin(!0);
this.mSlotRoomUI.interactableBtnSpin(!0);
this.mIsAutoSpin = !1;
};
e.prototype.onBtnQuickSpin = function() {
this.mIsQuickSpin = !this.mIsQuickSpin;
this.onBtnAutoSpin();
};
var o;
e._instance = null;
s([ u({
override: !0
}) ], e.prototype, "mSlotRoomUI", void 0);
s([ u({
override: !0
}) ], e.prototype, "mSlotMachine", void 0);
s([ u({
override: !0
}) ], e.prototype, "mSlotEffect", void 0);
s([ u(cc.Node) ], e.prototype, "boxSetting", void 0);
s([ u(cc.Prefab) ], e.prototype, "preBonus", void 0);
return o = s([ p ], e);
}(l.default);
o.default = h;
cc._RF.pop();
}, {
"../../base_slot/SlotConstant": void 0,
"../../base_slot/SlotRoom": void 0,
"../../base_slot/util/FormatUtil": void 0
} ],
Slot7SelectRoom: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "163a2CeZRpBDJvIijbOcGCL", "Slot7SelectRoom");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotSelectRoom"), r = cc._decorator, a = r.ccclass, c = (r.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSlot = null;
return e;
}
e.prototype.onEnable = function() {
for (var t = 0; t < this.listRoom.length; t++) this.listRoom[t].interactable = !0;
};
e.prototype.init = function(t) {
this.mSlot = t;
this.onUpdatePot(this.mSlot.mListPot);
};
e.prototype.onUpdatePot = function(t) {
for (var e = 0; e < this.listPot.length; e++) t[e] && this.listPot[e].setNumber(t[e]);
};
e.prototype.onSelectRoom = function(t) {
for (var e = 0; e < this.listRoom.length; e++) this.listRoom[e].interactable = !1;
this.mSlot.setBetId(t);
if (this.mSlot.isTrial()) {
console.log("-=-= di vao day mIsTrail");
this.mSlot.mSlotNetwork.sendPlayTry();
} else this.mSlot.mSlotNetwork.sendPlayNow();
};
e.prototype.Updategold = function() {
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
};
return s([ a ], e);
}(l.default));
o.default = c;
cc._RF.pop();
}, {
"../../base_slot/SlotSelectRoom": void 0
} ],
Slot7Var: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d586e0YUD9LqrWKXjY1kVvo", "Slot7Var");
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = function() {
function t() {}
t.api = {
negotiate: "https://vampire." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
hub: "gamehub",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate,
GetBigWinnerJackpot: "https://vampire." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/corona/GetBigWinnerJackpot",
GetBigWinner: "https://vampire." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/corona/GetBigWinner",
AccountHistory: "https://vampire." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/corona/GetHistory?access_token="
};
t.jackPot = [ 0, 0, 0, 0 ];
t.KEY_SOUND = "slot7_sound";
t.KEY_MUSIC = "slot7_music";
return t;
}();
o.default = i;
cc._RF.pop();
}, {} ],
Slot7XPotCell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "43eb0du9QlPe5bU0DDvUDrB", "Slot7XPotCell");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotXPotCell"), r = cc._decorator, a = r.ccclass, c = (r.property, 
function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.updatePot = function() {};
e.prototype.setData = function(t) {
this.mData = t;
this.txtPotCount.node.active = !0;
this.txtPot.node.active = !1;
this.txtPotCount.string = "Còn " + t.EventJackpot + " <color=#00ff00> HŨ</color>";
};
return s([ a ], e);
}(l.default));
o.default = c;
cc._RF.pop();
}, {
"../../base_slot/SlotXPotCell": void 0
} ],
Slot7XPot: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "cae46S2NphIHoWtszXJbExc", "Slot7XPot");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("../../base_slot/SlotXPot"), r = cc._decorator, a = r.ccclass, c = r.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listPotCell = [];
e.mSlot = null;
e.isEvent = !1;
return e;
}
e.prototype.init = function(e) {
t.prototype.init.call(this, e);
};
e.prototype.onEventXPot = function(t) {
this.isEvent = !1;
for (var e = 0; e < t.length; e++) t[e].EventJackpot > 0 && (this.isEvent = !0);
this.node.active = this.isEvent;
if (this.isEvent) {
var o = 0;
for (e = 0; e < t.length; e++) if (2 != e && this.listPotCell[o]) {
this.listPotCell[o].setData(t[e]);
o++;
}
}
};
s([ c({
override: !0
}) ], e.prototype, "listPotCell", void 0);
return s([ a ], e);
}(l.default);
o.default = p;
cc._RF.pop();
}, {
"../../base_slot/SlotXPot": void 0
} ],
Slot7: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "47876BawZdFl6zziEB6EAEt", "Slot7");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, l = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (l = (s < 3 ? n(l) : s > 3 ? n(e, o, l) : n(e, o)) || l);
return s > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var l = t("./Slot7Room"), r = t("./Slot7SelectRoom"), a = t("./Slot7Var"), c = t("./Slot7XPot"), p = t("../../base_slot/SlotConstant"), u = t("../../base_slot/Slot"), h = cc._decorator, m = h.ccclass, f = h.property, S = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSlotPot = null;
e.mSlotAudio = null;
e.mSlotNetwork = null;
e.mSlotConfig = null;
e.mSlotSelectRoom = null;
e.mSlotRoom = null;
e.mDataJoinRoom = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
o.instance = this;
lngui.UIWaitingLayout.showWaiting();
this.mIdGame = p.GAME_ID.BAT_MAN;
var e = a.default.jackPot;
if (e && e.length > 0) {
this.mListPot[0] = e[0];
this.mListPot[1] = e[1];
this.mListPot[2] = e[2];
}
this.checkSound(a.default.KEY_SOUND, a.default.KEY_MUSIC);
this.mSlotSelectRoom.init(this);
this.mSlotPot.init(this);
};
e.prototype.onDestroy = function() {
t.prototype.onDestroy.call(this);
o.instance = null;
};
e.prototype.connectSuccess = function() {
this.mSlotNetwork.sendEnterLobby();
lngui.UIWaitingLayout.hideWaiting();
};
e.prototype.onJoinGameSuccess = function(t) {
this.mDataJoinRoom = t;
lngui.UIWaitingLayout.hideWaiting();
this.init();
};
e.prototype.init = function() {
this.mSlotSelectRoom.node.active = !1;
this.mSlotRoom.init(this);
this.mSlotRoom.node.active = !0;
};
e.prototype.onUpdatePot = function(t) {
if (!this.isTrial() && t) {
var e = 0;
for (var o in t) {
var i = t[o];
this.mListPot[e] = i;
e++;
}
this.mSlotSelectRoom && this.mListPot.length > 0 && this.mSlotSelectRoom.onUpdatePot(this.mListPot);
this.mSlotRoom && this.mListPot.length > 0 && this.mSlotRoom.onUpdatePot(this.mListPot[this.mRoomId - 1]);
}
};
e.prototype.onBtnBack = function() {
this.mSlotSelectRoom.node.active = !0;
this.mSlotRoom.node.active = !1;
};
var o;
e.instance = null;
s([ f(c.default) ], e.prototype, "mSlotPot", void 0);
s([ f({
override: !0
}) ], e.prototype, "mSlotAudio", void 0);
s([ f({
override: !0
}) ], e.prototype, "mSlotNetwork", void 0);
s([ f({
override: !0
}) ], e.prototype, "mSlotConfig", void 0);
s([ f(r.default) ], e.prototype, "mSlotSelectRoom", void 0);
s([ f(l.default) ], e.prototype, "mSlotRoom", void 0);
return o = s([ m ], e);
}(u.default);
o.default = S;
cc._RF.pop();
}, {
"../../base_slot/Slot": void 0,
"../../base_slot/SlotConstant": void 0,
"./Slot7Room": "Slot7Room",
"./Slot7SelectRoom": "Slot7SelectRoom",
"./Slot7Var": "Slot7Var",
"./Slot7XPot": "Slot7XPot"
} ]
}, {}, [ "Slot7", "Slot7Audio", "Slot7Bonus", "Slot7BonusItem", "Slot7BonusItem2", "Slot7BonusItem3", "Slot7Config", "Slot7Effect", "Slot7Entity", "Slot7Guide", "Slot7Handler", "Slot7History", "Slot7HistoryCell", "Slot7HistoryDetail", "Slot7Item", "Slot7Line", "Slot7Machine", "Slot7Rank", "Slot7RankCell", "Slot7Reel", "Slot7Room", "Slot7RoomUI", "Slot7SelectRoom", "Slot7Var", "Slot7XPot", "Slot7XPotCell" ]);