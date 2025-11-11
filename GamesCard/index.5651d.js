window.__require = function t(e, n, o) {
function i(a, s) {
if (!n[a]) {
if (!e[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!e[c]) {
var u = "function" == typeof __require && __require;
if (!s && u) return u(c, !0);
if (r) return r(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var l = n[a] = {
exports: {}
};
e[a][0].call(l.exports, function(t) {
return i(e[a][1][t] || t);
}, l, l.exports, t, e, n, o);
}
return n[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
return i;
}({
BaCayBetBien: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f7a3a2A9ztIwYq3nELbimCc", "BaCayBetBien");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.money = null;
return e;
}
e.prototype.setTextBetBien = function(t, e) {
void 0 === e && (e = .4);
this.money.string = t;
e && (this.node.scale = e);
};
r([ c(cc.Label) ], e.prototype, "money", void 0);
return r([ s ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {} ],
BaCayConst: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f042540VpBN1LTSyltOjB4F", "BaCayConst");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.BaCayBetBienType = n.BaCayButtonState = n.BaCayRULE = n.BaCayGameState = n.BaCayConfig = void 0;
(function(t) {
t[t.MAX_PLAYER_3CAY = 8] = "MAX_PLAYER_3CAY";
})(n.BaCayConfig || (n.BaCayConfig = {}));
(function(t) {
t[t.JoinGame = 1] = "JoinGame";
t[t.StartGame = 2] = "StartGame";
t[t.Betting = 3] = "Betting";
t[t.SortHandCard = 4] = "SortHandCard";
t[t.ShowResult = 5] = "ShowResult";
t[t.ShowPrize = 6] = "ShowPrize";
t[t.BettingBien = 7] = "BettingBien";
t[t.ReceivedMessage = 8] = "ReceivedMessage";
t[t.WaitNextPlay = 9] = "WaitNextPlay";
t[t.UnknowState = 10] = "UnknowState";
})(n.BaCayGameState || (n.BaCayGameState = {}));
(function(t) {
t[t.RULE_10X2 = 0] = "RULE_10X2";
t[t.RULE_SAP = 1] = "RULE_SAP";
t[t.RULE_VAY = 2] = "RULE_VAY";
t[t.RULE_SAP_VAY = 3] = "RULE_SAP_VAY";
})(n.BaCayRULE || (n.BaCayRULE = {}));
(function(t) {
t[t.BetState = 0] = "BetState";
t[t.FeedChickenState = 1] = "FeedChickenState";
t[t.FlipState = 2] = "FlipState";
t[t.UnknownState = 3] = "UnknownState";
})(n.BaCayButtonState || (n.BaCayButtonState = {}));
(function(t) {
t[t.BienMin = 0] = "BienMin";
t[t.BienMax = 1] = "BienMax";
})(n.BaCayBetBienType || (n.BaCayBetBienType = {}));
cc._RF.pop();
}, {} ],
BaCayHandler: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "2e9afIZKpVFbKmcXauFedI4", "BaCayHandler");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./BaCayConst"), s = t("./BaCayRoom"), c = cc._decorator, u = c.ccclass, l = c.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.Room = null;
return e;
}
e.prototype.onBtnAll = function(t, e) {
switch (e) {
case "back":
this.Room.onBtnBack();
break;

case "chat":
this.onBtnChat();
break;

case "menu":
this.onBtnMenu();
break;

case "closeMenu":
this.closePanel();
break;

case "bet":
this.onBtnBet();
}
};
e.prototype.onBtnChat = function() {
this.Room.pnlChat.node.active = !0;
};
e.prototype.onBtnMenu = function() {
this.Room.UI.menu.active = !0;
};
e.prototype.closePanel = function() {
this.Room.UI.pnlHelp.active ? this.Room.UI.pnlHelp.active = !1 : this.Room.UI.menu.active = !1;
};
e.prototype.onSliderChanged = function() {
var t = this.Room.UI.sliderGetBet.progress;
t = t > .5 ? 1 : 0;
var e = this.Room.getMaxBet() - this.Room.getMinBet();
this.Room._nCurrentBetValue = t * e + this.Room.getMinBet();
this.Room.setBetValue(this.Room._nCurrentBetValue);
this.Room.UI.sliderGetBet.progress = t;
};
e.prototype.onBtnBet = function() {
switch (this.Room._nButtonState) {
case a.BaCayButtonState.BetState:
this.Room.Bet(this.Room._nCurrentBetValue);
this.Room.UI.panelBet.active = !1;
this.Room.setGameState(a.BaCayGameState.BettingBien);
this.Room._isBetted = !0;
this.Room.UI.panelBetBien.active = this.Room._nCountActivePlayer > 2;
break;

case a.BaCayButtonState.FeedChickenState:
this.Room.FeedChicken();
this.Room.UI.imgBgBetChicken.active = !1;
break;

case a.BaCayButtonState.FlipState:
this.Room.FlipCards();
}
this.Room.UI.btnBet.node.active = !1;
};
r([ l(s.default) ], e.prototype, "Room", void 0);
return r([ u ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"./BaCayConst": "BaCayConst",
"./BaCayRoom": "BaCayRoom"
} ],
BaCayPlayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1897fPIyaRHDZF6zTDUcNMA", "BaCayPlayer");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../common/scripts/Card/CardItem"), s = t("../../common/scripts/Card/Player"), c = t("../../../base_slot/util/FormatUtil"), u = cc._decorator, l = u.ccclass, h = u.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.cards = [];
e.imgBien = null;
e.imgSumBG = null;
e.imgChicken = null;
e.imgBgBetValue = null;
e.lblBienValue = null;
e.lblSum = null;
e.lblBetValue = null;
e._isFliped = !1;
e._hasFeedChicken = !1;
e._parrent = null;
return e;
}
e.prototype.init = function(t, e) {
this._parrent = e;
this.reset();
this.commonReset();
this.initCommonParameters(t);
1 != t.FedChicken && 0 != t.FedChicken || this.setFeedChicken(t.FedChicken);
};
e.prototype.flipCards = function(t) {
this.createHandCards(t, !0);
this._isFliped = !0;
};
e.prototype.setFeedChicken = function(t, e) {
void 0 === e && (e = -1);
if (this.imgChicken) {
this.imgChicken.active = t;
this.imgChicken.stopAllActions();
this.imgChicken.setScale(0);
this.imgChicken.runAction(cc.scaleTo(.1, 1).easing(cc.easeBackOut()));
t && !this._hasFeedChicken && (this._hasFeedChicken = !0);
}
};
e.prototype.setBetBien = function(t, e) {
e = e || 0;
this.imgBien && (this.imgBien.active = t);
this.lblBienValue && (this.lblBienValue.string = c.default.formatNumberToKM(e));
};
e.prototype.setSum = function(t) {
if (!(t < 0) && this.lblSum) {
this.lblSum.node.active = !0;
this.imgSumBG.active = !0;
this.lblSum.string = t;
this.lblSum.node.color = 10 === t ? this.lblSum.node.color.fromHEX("#00ff60") : cc.Color.WHITE;
}
};
e.prototype.getCard = function(t) {
return this.cards[t];
};
e.prototype.createHandCards = function(t, e) {
if (!this._isFliped && null != t) {
var n = t.HandCards.length;
if (!(n <= 0 || n > 3)) {
for (var o = 0; o < n; o++) {
var i = t.HandCards[o], r = i.CardNumber, a = i.CardSuite, s = i.OrdinalValue;
this.cards[o].init(r, a, s);
this.cards[o].node.active = !0;
this.getAccountID() == lngui.UserManager.instance.mainUserInfo.AccountID && (this.cards[o].node.x = 5 * o);
this.cards[o].node.y = 0;
}
if (e && this.getAccountID() == lngui.UserManager.instance.mainUserInfo.AccountID) {
this.cards[0].node.stopAllActions();
this.cards[1].node.stopAllActions();
this.cards[2].node.stopAllActions();
var c = cc.moveTo(.5, cc.v2(0, 0));
this.cards[0].node.runAction(c);
var u = cc.moveTo(.5, cc.v2(35, 0));
this.cards[1].node.runAction(u);
var l = cc.moveTo(.5, cc.v2(70, 0));
this.cards[2].node.runAction(l);
}
}
}
};
e.prototype.setBetValue = function(t) {
if (null != this.lblBetValue && null != this.imgBgBetValue) {
this.lblBetValue.node.active = !0;
this.imgBgBetValue.active = !0;
this.imgBgBetValue.setScale(0);
this.imgBgBetValue.runAction(cc.scaleTo(.3, 1).easing(cc.easeBackOut()));
this.lblBetValue.string = c.default.formatNumberToKM(t);
}
};
e.prototype.reset = function() {
this._hasFeedChicken = !1;
this._isFliped = !1;
this.setFeedChicken(!1);
this.resetBetBien();
for (var t = 0; t < 3; t++) this.cards[t].node.active = !1;
this.lblBetValue.node.active = !1;
this.imgBgBetValue.active = !1;
this.lblSum.node.active = !1;
this.imgSumBG.active = !1;
this.ImgOwner.active = !1;
};
e.prototype.setChickenKiller = function(t) {
if (t) {
this.imgChicken.stopAllActions();
this.imgChicken.runAction(cc.sequence(cc.scaleTo(.1, 1.5), cc.scaleTo(.1, 1)).repeat(10));
}
};
e.prototype.resetBetBien = function() {
this.imgBien.active = !1;
this.lblBetValue.string = "";
};
r([ h(a.default) ], e.prototype, "cards", void 0);
r([ h(cc.Node) ], e.prototype, "imgBien", void 0);
r([ h(cc.Node) ], e.prototype, "imgSumBG", void 0);
r([ h(cc.Node) ], e.prototype, "imgChicken", void 0);
r([ h(cc.Node) ], e.prototype, "imgBgBetValue", void 0);
r([ h(cc.Label) ], e.prototype, "lblBienValue", void 0);
r([ h(cc.Label) ], e.prototype, "lblSum", void 0);
r([ h(cc.Label) ], e.prototype, "lblBetValue", void 0);
return r([ l ], e);
}(s.default);
n.default = d;
cc._RF.pop();
}, {
"../../../base_slot/util/FormatUtil": void 0,
"../../common/scripts/Card/CardItem": "CardItem",
"../../common/scripts/Card/Player": "Player"
} ],
BaCayRoom: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e84e5HcKfNEc7pChT4b45jV", "BaCayRoom");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../common/scripts/Card/BasicRoom"), s = t("../../common/scripts/Card/CardItem"), c = t("../../common/scripts/Card/Interaction"), u = t("../../common/scripts/Card/PlayerConst"), l = t("../../common/scripts/LobbyCardGameNetwork"), h = t("../../common/scripts/LobbyCardGameVar"), d = t("../../../base_slot/util/FormatUtil"), p = t("./BaCayConst"), f = t("./BaCayUI"), m = cc._decorator, y = m.ccclass, g = m.property, C = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.UI = null;
e.listPlayer = [];
e._vectorHandCard = null;
e._arrayJoinGame = null;
e._nButtonState = null;
e._isBetOther = null;
e._ttOffset = null;
e._deltaX = 0;
e._nCurrentBetValue = 0;
e._nFeedChickenCount = 0;
e._isBetted = !1;
return e;
}
e.prototype.getPlayer = function(t) {
for (var e = 0; e < this.listPlayer.length; e++) {
var n = this.listPlayer[e];
lngui.ZLog.log("getPlayer ========" + n.getAccountID());
if (n.getAccountID() == t) return n;
}
return null;
};
e.prototype.init = function(t, e) {
this._myPlayer = this.listPlayer[0];
this._arrayJoinGame = t;
this._lobbyGame = e;
this.setObserver();
this.initRoom(this._arrayJoinGame);
this.pnlChat.init(l.default.instance.mSignalr);
this.UI.btnBet.node.active = !1;
this.UI.panelBet.active = !1;
};
e.prototype.initRoom = function(t) {
var e = t[0];
if ("undefined" != typeof e) {
this._ownerRoom = e.OwnerRoom;
this._nOwnerId = e.OwnerID;
this.setRoomInfo(e);
this.createPlayers(e.Players);
this.createGameLoop(e.GameLoop);
var n = t[1];
this.setCurrentOwner(this._nOwnerId, n, !0);
this._nCurrentBetValue = this.getMinBet();
this.initSlider();
this.initBetBienValue(this.getMinBet(), this.getMaxBet());
this.UI.lblFeedChickenVal.string = d.default.formatNumberToKM(this._nMinBet);
this._isBetOther = new Array(8);
var o = this.getPlayer(lngui.UserManager.instance.mainUserInfo.AccountID);
o && o.node.active && o.getStatus() == u.ConnectionStatus.GuestInGame && this.setGameState(p.BaCayGameState.WaitNextPlay);
return !0;
}
};
e.prototype.onEnable = function() {
this.UI.touchLayer.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this._deltaX += Math.abs(t.touch.getDelta().x);
if (this._deltaX > 180) {
this._deltaX = 180;
this._vectorHandCard[2].node.x = this._vectorHandCard[2]._orginalX + this._deltaX;
this._vectorHandCard[1].node.x = this._vectorHandCard[1]._orginalX + this._deltaX - 90;
this._deltaX > 90 && (this._vectorHandCard[1].node.x = this._vectorHandCard[1]._orginalX + this._deltaX - 90);
} else if (this._vectorHandCard && this._vectorHandCard[0]) {
this._vectorHandCard[2]._orginalX || (this._vectorHandCard[2]._orginalX = this._vectorHandCard[2].node.x);
this._vectorHandCard[1]._orginalX || (this._vectorHandCard[1]._orginalX = this._vectorHandCard[1].node.x);
this._vectorHandCard[0]._orginalX || (this._vectorHandCard[0]._orginalX = this._vectorHandCard[0].node.x);
this._vectorHandCard[2].node.x = this._vectorHandCard[2]._orginalX + this._deltaX;
this._deltaX > 90 && (this._vectorHandCard[1].node.x = this._vectorHandCard[1]._orginalX + this._deltaX - 90);
this._deltaX > 180 && (this._vectorHandCard[0].node.x = this._vectorHandCard[0]._orginalX + this._deltaX - 180);
}
}, this);
};
e.prototype.showCards = function(t) {
this._vectorHandCard = new Array();
if (t) {
var e = this.getPlayer(lngui.UserManager.instance.mainUserInfo.AccountID);
if (e && e.getStatus() == u.ConnectionStatus.PlayingInGame) {
for (var n = 0; n < 3; n++) {
var o = e.getCard(n);
if (null != o) {
var i = this.UI.myCard[n];
i.node.active = !0;
i.init(o._nCardNumber, o._nCardSuite, o._nOrdinalValue);
i.node.x = 5 * n - 10;
i.node.y -= 100;
this._vectorHandCard.push(i);
i.node.runAction(cc.spawn(cc.moveBy(.3, cc.v2(0, 100)).easing(cc.easeBackOut()), cc.fadeIn(.3)));
}
}
this.UI.imgBgHandCard.active = !0;
this._deltaX = 0;
this.UI.touchLayer.active = !0;
this.setBetButtonState(p.BaCayButtonState.FlipState);
}
} else {
this.UI.imgBgHandCard.active = !1;
this.UI.touchLayer.active = !1;
this.setBetButtonState(p.BaCayButtonState.UnknownState);
}
};
e.prototype.createPlayers = function(t) {
lngui.ZLog.log("createPlayers ==============");
if (t) {
for (var e in this.listPlayer) {
this.listPlayer[e].node.active = !1;
this.listPlayer[e].reset();
}
for (var n in t) if (t[n]) {
var o = t[n], i = o.AccountID == lngui.UserManager.instance.mainUserInfo.AccountID ? 0 : this._nMyLocalInRoom;
lngui.ZLog.log("init player ==============" + i);
var r = this.listPlayer[i];
r.init(o, this);
r.createHandCards(o.Hand, !1);
}
}
};
e.prototype.setCurrentOwner = function(t, e, n) {
void 0 === n && (n = !1);
if (e && Number.isInteger(e.Time)) {
var o = e.Time, i = this.getPlayer(t);
i && i.node.active && this.setDealer(i, o, n);
}
};
e.prototype.initBetBienValue = function(t, e) {
for (var n = 0; n < p.BaCayConfig.MAX_PLAYER_3CAY; n++) {
this.UI.btnBetBienMin[n].setTextBetBien(d.default.formatNumberToKM(t));
this.UI.btnBetBienMax[n].setTextBetBien(d.default.formatNumberToKM(e));
}
};
e.prototype.initBetBienButton = function() {
for (var t in this.listPlayer) {
var e = this.listPlayer[t];
if (e && e.getStatus() == u.ConnectionStatus.PlayingInGame && e.getAccountID() != lngui.UserManager.instance.mainUserInfo.AccountID && e.getAccountID() != this._nOwnerId) {
this.UI.btnBetBienMin[e.getPositionInRoom()].node.active = !0;
this.UI.btnBetBienMax[e.getPositionInRoom()].node.active = !0;
}
}
};
e.prototype.resetBetBien = function() {
for (var t = 0; t < p.BaCayConfig.MAX_PLAYER_3CAY; t++) {
this.UI.btnBetBienMin[t].node.active = !1;
this.UI.btnBetBienMax[t].node.active = !1;
this._isBetOther[t] = !1;
}
};
e.prototype.setGameState = function(t, e) {
void 0 === e && (e = "");
var n = "";
switch (t) {
case p.BaCayGameState.JoinGame:
n = h.default.NOTICE.STR_DANG_VAO_GAME;
break;

case p.BaCayGameState.StartGame:
n = h.default.NOTICE.STR_BAT_DAU;
break;

case p.BaCayGameState.Betting:
n = h.default.NOTICE.STR_DAT_SAO;
break;

case p.BaCayGameState.SortHandCard:
n = "";
break;

case p.BaCayGameState.ShowResult:
case p.BaCayGameState.ShowPrize:
n = h.default.NOTICE.STR_KET_QUA;
break;

case p.BaCayGameState.BettingBien:
n = h.default.NOTICE.STR_DAU_TU_DO;
break;

case p.BaCayGameState.ReceivedMessage:
n = e;
break;

case p.BaCayGameState.WaitNextPlay:
n = h.default.NOTICE.STR_CHO_NGUOI_CHOI;
}
t != p.BaCayGameState.UnknowState && this.setMessageForGame(n);
};
e.prototype.setEffectBetOther = function() {};
e.prototype.acceptedBet = function(t) {
if (Array.isArray(t) && !(t.length < 4)) {
var e = t[0];
if (Number.isInteger(e)) {
var n = e, o = t[1];
if (Number.isInteger(o)) {
var i = o, r = t[2], a = t[3];
if (Number.isInteger(a)) {
var s = a;
if (n == lngui.UserManager.instance.mainUserInfo.AccountID) {
if (c = this.getPlayer(i)) {
c.setBetBien(r, s);
c.setMoneyChange(-s, !0);
}
if (u = this.getPlayer(lngui.UserManager.instance.mainUserInfo.AccountID)) {
u.setBetBien(r, s);
u.setMoneyChange(-s, !0);
}
} else if (i == lngui.UserManager.instance.mainUserInfo.AccountID) {
var c, u;
if (c = this.getPlayer(n)) {
c.setBetBien(r, s);
c.setMoneyChange(-s, !0);
}
if (u = this.getPlayer(lngui.UserManager.instance.mainUserInfo.AccountID)) {
u.setBetBien(r, s);
u.setMoneyChange(-s, !0);
}
}
}
}
}
}
};
e.prototype.onGameSocket = function(t, e) {
lngui.ZLog.log("onGameSocket ====" + JSON.stringify(t) + "====" + e);
if ("startGame" == e) {
this.setGameState(p.BaCayGameState.StartGame);
this.startGame(t.A);
} else if ("flipCards" == e) this.flipCards(t.A); else if ("showAllResult" == e) {
this.setGameState(p.BaCayGameState.ShowResult);
this.showAllResult(t.A);
} else if ("playerJoin" == e) this.playerJoin(t.A); else if ("showPrize" == e) {
this.setGameState(p.BaCayGameState.ShowPrize);
this.showPrize(t.A);
} else if ("updateSession" == e) {
this.setGameState(p.BaCayGameState.UnknowState);
this.updateSession(t.A);
} else if ("feedChicken" == e) this.feedChicken(t.A); else if ("betOther" == e) this.betOther(t.A); else if ("startAnimationTime" == e) {
this.setGameState(p.BaCayGameState.SortHandCard);
this.startAnimationTime(t.A);
} else if ("updateBetting" == e) this.updateBetting(t.A); else if ("playerMessage" == e) this.playerMessage(t.A); else if ("changeOwner" == e) this.changeOwner(t.A); else if ("startBettingTime" == e) {
this.setGameState(p.BaCayGameState.Betting);
this.startBettingTime(t.A);
} else "acceptedBet" == e ? this.acceptedBet(t.A) : "askToSell" == e ? this.askToSell(t.A) : "askOtherToBuy" == e ? this.askOtherToBuy(t.A) : "joinGame" === e && this.initRoom(t.A);
};
e.prototype.Bet = function(t) {
l.default.instance.sendSignalR("Bet", [ t ]);
};
e.prototype.startGame = function(t) {
this.resetGame();
if (Array.isArray(t) && 0 != t.length) {
var e = t[0];
if (e) {
this.updatePlayers(e.Players, !0);
Number.isInteger(e.OwnerID) && (this._nOwnerId = e.OwnerID);
this.setCurrentOwner(this._nOwnerId, t[1]);
}
}
};
e.prototype.FeedChicken = function() {
this.PlayerAction("FeedChicken");
};
e.prototype.FlipCards = function() {
this.PlayerAction("Flip");
};
e.prototype.flipCards = function(t) {
if (Array.isArray(t) && 0 != t.length && Number.isInteger(t[0])) {
var e = t[0];
e == lngui.UserManager.instance.mainUserInfo.AccountID && this.showCards(!1);
var n = this.getPlayer(e);
n.node.active && n.flipCards(t[1]);
}
};
e.prototype.showAllResult = function(t) {
if (null != t) {
var e = t[0];
if (null != e) {
this.createHandCardForPlayers(e.Players, !0);
this.ownerWaitting(t[1]);
this.showCards(!1);
}
}
};
e.prototype.playerJoin = function(t) {
lngui.ZLog.log("playerJoin =================>" + JSON.stringify(t));
null != t && null != t[0] && this.listPlayer[t[0].Position].init(t[0], this);
};
e.prototype.setDealer = function(t, e, n) {
void 0 === e && (e = 0);
void 0 === n && (n = !1);
if (null != t) {
t.ImgOwner.active = !0;
e > 0 && t.setLoadingStatus(e);
}
};
e.prototype.showPrize = function(t) {
if (Array.isArray(t)) {
var e = t[0];
if (e && Array.isArray(e.ResultList)) {
for (var n = e.ResultList.length, o = 0; o < n; o++) {
var i = e.ResultList[o];
if (!i) return;
if (!Number.isInteger(i.AccountId)) return;
var r = i.AccountId;
if (!Number.isInteger(i.Change)) return;
var a = i.Change;
if (!Number.isInteger(i.Sum)) return;
var s = i.Sum;
if (null == i.IsChickenKiller) return;
var u = i.IsChickenKiller, l = this.getPlayer(r);
if (l && l.node.active) {
l.setMoneyChange(a);
l.setSum(s);
a > 0 ? l.setWiner(!0) : a < 0 && l.setWiner(!1);
l.setChickenKiller(u);
if (u) for (var h = 0; h < 6; h++) {
var d = new cc.Node();
d.addComponent(cc.Sprite).spriteFrame = this.UI.sprChip;
d.scale = .4;
if (d) {
this.UI.pnlChipMoving.addChild(d);
var p = l.getAvataPosition(), f = this.UI.imgBgChicken.position;
f.x -= 80;
d.setPosition(f);
var m = !1;
Math.random() > 5 && (m = !0);
var y = c.default.bessie1Side(f, p, .5, Math.random() + .5, m);
d.runAction(cc.sequence(cc.delayTime(.1 * h), y.easing(cc.easeOut(1)), cc.removeSelf(!0)));
}
}
}
}
this.showFeedChicken(0);
this.showBetBienResult(e.BetOtherLogs);
}
}
};
e.prototype.updateSession = function(t) {
if (Array.isArray(t)) {
var e = t[0];
e && this.updatePlayers(e.Players, !1);
}
};
e.prototype.feedChicken = function(t) {
if (Array.isArray(t) && !(t.length <= 1) && Number.isInteger(t[0])) {
var e = t[0];
if (Number.isInteger(t[1])) {
var n = t[1];
this._nFeedChickenCount++;
this.showFeedChicken(n);
var o = this.getPlayer(e);
if (o) {
o.setFeedChicken(!0, this._nFeedChickenCount);
o.setMoneyChange(-this._nMinBet, !0);
for (var i = 0; i < 6; i++) {
var r = new cc.Node();
r.addComponent(cc.Sprite).spriteFrame = this.UI.sprChip;
r.scale = .4;
if (r) {
this.UI.pnlChipMoving.addChild(r);
var a = o.getAvataPosition(), s = this.UI.imgBgChicken.getPosition();
s.x -= 80;
r.setPosition(a);
var u = !1;
Math.random() > 5 && (u = !0);
var l = c.default.bessie1Side(a, s, .5, Math.random() + .5, u);
r.runAction(cc.sequence(cc.delayTime(.1 * i), l.easing(cc.easeOut(1)), cc.removeSelf(!0)));
}
}
}
}
}
};
e.prototype.betOther = function(t) {
if (Array.isArray(t) && !(t.length <= 1) && Number.isInteger(t[1]) && t[1] == lngui.UserManager.instance.mainUserInfo.AccountID) {
if (!Number.isInteger(t[0])) return;
var e = t[0];
if (!Number.isInteger(t[2])) return;
var n = t[2], o = this.getPlayer(e).getPositionInRoom();
this._isBetOther[o] = !0;
this.UI.panelBetBien.active = this._isBetted;
if (n == this.getMinBet()) {
this.UI.btnBetBienMax[o].node.active = !1;
this.setEffectBetOther(this.UI.btnBetBienMin[o]);
} else if (n == this.getMaxBet()) {
this.UI.btnBetBienMin[o].node.active = !1;
this.setEffectBetOther(this.UI.btnBetBienMax[o]);
}
}
};
e.prototype.startAnimationTime = function(t) {
this.UI.panelBet.active = !1;
this.UI.panelBetBien.active = !1;
this.resetBetBien();
if (Array.isArray(t) && 0 != t.length) {
var e = t[0];
if (e) {
this.chiaBai(e.Players);
this.ownerWaitting(t[1]);
}
}
};
e.prototype.updateBetting = function(t) {
if (Array.isArray(t) && !(t.length <= 1)) {
var e = t[0];
if (e && Number.isInteger(e.AccountID)) {
var n = e.AccountID;
if (Number.isInteger(e.Star)) {
var o = e.Star;
if (Number.isInteger(e.Coin)) {
e.Coin;
if (Number.isInteger(t[1])) {
var i = t[1];
n == lngui.UserManager.instance.mainUserInfo.AccountID && this.setBetButtonState(p.BaCayButtonState.FeedChickenState);
var r = this.getPlayer(n);
if (r) {
r.setBetValue(i);
r.setBalance(o);
}
}
}
}
}
}
};
e.prototype.playerMessage = function(t) {
!Array.isArray(t) || t.length <= 1 || "string" != typeof t[0] || t[0];
};
e.prototype.initSlider = function() {
this.getMaxBet(), this.getMinBet();
this.UI.sliderGetBet && (this._nCurrentBetValue == this.getMinBet() ? this.UI.sliderGetBet.progress = 0 : this.UI.sliderGetBet.progress = this._nCurrentBetValue / 100);
this.setBetValue(this._nCurrentBetValue);
};
e.prototype.setBetValue = function(t) {
this.UI.lblBetValue && (this.UI.lblBetValue.string = d.default.formatNumberToKM(t));
};
e.prototype.changeOwner = function(t) {
if (Array.isArray(t) && 0 != t.length) {
this._nOwnerId = t[0];
var e = this.getPlayer(this._nOwnerId);
e && this.setDealer(e);
}
};
e.prototype.startBettingTime = function(t) {
if (Array.isArray(t) && 0 != t.length) {
var e = t[0];
lngui.ZLog.log("accountInfo ===" + JSON.stringify(e));
if (e) {
lngui.ZLog.log("CurrentGameLoopID ==" + e.CurrentGameLoopID);
lngui.ZLog.log("CurrentGameLoopID ==" + typeof e.CurrentGameLoopID);
lngui.ZLog.log("CountActivePlayer ==" + e.CountActivePlayer);
lngui.ZLog.log("CountActivePlayer ==" + typeof e.CountActivePlayer);
Number.isInteger(e.CurrentGameLoopID) && this.setCurrentGameLoopId(e.CurrentGameLoopID);
Number.isInteger(e.CountActivePlayer) && (this._nCountActivePlayer = e.CountActivePlayer);
this.updatePlayers(e.Players);
this.ownerWaitting(t[1]);
lngui.ZLog.log("Number.isInteger(accountInfo====" + e.OwnerID);
lngui.ZLog.log("Number.isInteger(accountInfo====" + Number.isInteger(e.OwnerID));
if (Number.isInteger(e.OwnerID)) {
var n = e.OwnerID;
lngui.ZLog.log(n);
lngui.ZLog.log(lngui.UserManager.instance.mainUserInfo.AccountID);
if (n != lngui.UserManager.instance.mainUserInfo.AccountID) {
this.setBetButtonState(p.BaCayButtonState.BetState);
this.UI.panelBet.active = !0;
this.initBetBienButton();
} else this.setBetButtonState(p.BaCayButtonState.FeedChickenState);
}
}
}
};
e.prototype.setBetButtonState = function(t) {
this._nButtonState = t;
var e = !0;
switch (t) {
case p.BaCayButtonState.BetState:
this.UI.imgBgBetChicken.active = !1;
this.UI.btnBet.spriteFrame = this.UI.sfBets[0];
break;

case p.BaCayButtonState.FeedChickenState:
this.UI.imgBgBetChicken.active = !0;
this.UI.btnBet.spriteFrame = this.UI.sfBets[1];
break;

case p.BaCayButtonState.FlipState:
this.UI.imgBgBetChicken.active = !1;
this.UI.btnBet.spriteFrame = this.UI.sfBets[2];
break;

default:
this.UI.imgBgBetChicken.active = !1;
e = !1;
}
this.UI.btnBet.node.active = e;
};
e.prototype.moveMoney = function(t, e, n) {
void 0 === n && (n = !1);
};
e.prototype.ownerWaitting = function(t) {
if (t) {
var e = t.Time;
if (Number.isInteger(e)) {
var n = this.getPlayer(this._nOwnerId);
n && n.node.active && n.setLoadingStatus(e);
}
}
};
e.prototype.showFeedChicken = function(t) {
if (t > 0) {
this.UI.imgBgChicken.active = !0;
this.UI.lblTotalChicken.string = d.default.formatNumberToKM(t);
} else {
this.UI.imgBgChicken.active = !1;
this.UI.lblTotalChicken.string = "";
}
};
e.prototype.showBetBienResult = function(t) {
if (Array.isArray(t)) {
var e = t.length;
if (0 != e) for (var n = 0; n < e; n++) {
var o = t[n];
if (!o) return;
var i = o.From;
if (!Number.isInteger(i)) return;
var r = i, a = o.To;
if (!Number.isInteger(a)) return;
var s = a;
if (r == lngui.UserManager.instance.mainUserInfo.AccountID || s == lngui.UserManager.instance.mainUserInfo.AccountID) {
if (!o.Accepted) return;
o.IsWinner;
var c = this.getPlayer(r), u = this.getPlayer(s);
u && c && setTimeout(function() {
u.resetBetBien();
c.resetBetBien();
}.bind(this), 2e3);
}
}
}
};
e.prototype.createGameLoop = function(t) {
if (t) {
var e = t.BetLogs;
if (!e) for (var n in e) if (Number.isInteger(e[n])) {
var o = e[n];
(a = this.getPlayer(parseInt(n))) && a.setBetValue(o);
}
if (Array.isArray(t.FedChickenLogs)) {
this._myPlayer.getStatus() == u.ConnectionStatus.PlayingInGame && this.setBetButtonState(p.BaCayButtonState.FeedChickenState);
var i = t.FedChickenLogs.length;
this.showFeedChicken(i * this._nMinBet);
for (var r = 0; r < i; r++) if (Number.isInteger(t.FedChickenLogs[r])) {
var a;
(a = this.getPlayer(t.FedChickenLogs[r])) && a.setFeedChicken(!0, r);
if (t.FedChickenLogs[r] == lngui.UserManager.instance.mainUserInfo.AccountID) {
this.UI.btnBet.node.active = !1;
this.showFeedChicken(0);
}
}
}
}
};
e.prototype.chiaBai = function(t) {
for (var e = this, n = cc.v2(0, 0), o = 0; o < 3; o++) for (var i in this.listPlayer) if (this.listPlayer[i].getStatus() == u.ConnectionStatus.PlayingInGame) {
var r = new cc.Node(), a = r.addComponent(s.default), c = r.addComponent(cc.Sprite);
a.card = c;
a.init();
a.node.setPosition(n);
a.node.scale = .3;
this.UI.pnlChipMoving.addChild(r);
var l = this.listPlayer[i].getAvataPosition();
a.node.runAction(cc.sequence(cc.delayTime(.15 * o), cc.moveTo(.3, l).easing(cc.easeCircleActionOut())));
}
this.scheduleOnce(function() {
e.UI.pnlChipMoving.destroyAllChildren();
e.createHandCardForPlayers(t);
e.showCards(!0);
}, .6);
};
e.prototype.createHandCardForPlayers = function(t, e) {
void 0 === e && (e = !1);
lngui.ZLog.log(t);
for (var n in t) if (null != t[n]) {
var o = t[n];
if (!Number.isInteger(o.Status)) return;
if (1 == o.Status) {
if (!Number.isInteger(o.AccountID)) return;
var i = o.AccountID;
lngui.ZLog.log("accountId ==" + i);
var r = this.getPlayer(i);
lngui.ZLog.log("player =========" + r);
r && r.node.active ? r.createHandCards(o.Hand, e) : lngui.ZLog.error("player is null");
}
}
};
e.prototype.askToSell = function(t) {
var e = this;
if (Array.isArray(t) && 0 != t.length) {
var n = t[0];
if (n && Number.isInteger(n.Time)) {
n.Time;
var o = [ lngui.PopupAction.make("BÁN", function() {
e.sellOwner();
}), lngui.PopupAction.make("CLOSE", function() {}) ];
lngui.UIPopupManager.instance.showPopup("Bạn nhận được chương. Bạn có muốn rao bán chương không?", o, "BÁN CHƯƠNG");
}
}
};
e.prototype.askOtherToBuy = function(t) {
var e = this;
if (Array.isArray(t) && !(t.length < 2)) {
var n = t[0];
if (n && Number.isInteger(n.Time)) {
n.Time;
var o = t[1];
if ("string" == typeof o) {
var i = o;
i += " ";
i += "bán chương";
i += ".";
i += "Bạn có muốn mua chương không ?";
var r = [ lngui.PopupAction.make("MUA", function() {
e.buyOwner();
}), lngui.PopupAction.make("CLOSE", function() {}) ];
lngui.UIPopupManager.instance.showPopup(i, r, "MUA CHƯƠNG");
}
}
}
};
e.prototype.SellBuyOwner = function(t) {
t ? l.default.instance.sendSignalR("SellOwner", [ !0 ]) : l.default.instance.sendSignalR("BuyOwner", []);
};
e.prototype.sellOwner = function() {
this.SellBuyOwner(!0);
};
e.prototype.buyOwner = function() {
this.SellBuyOwner(!1);
};
r([ g(f.default) ], e.prototype, "UI", void 0);
r([ g({
override: !0
}) ], e.prototype, "listPlayer", void 0);
return r([ y ], e);
}(a.default);
n.default = C;
cc._RF.pop();
}, {
"../../../base_slot/util/FormatUtil": void 0,
"../../common/scripts/Card/BasicRoom": "BasicRoom",
"../../common/scripts/Card/CardItem": "CardItem",
"../../common/scripts/Card/Interaction": "Interaction",
"../../common/scripts/Card/PlayerConst": "PlayerConst",
"../../common/scripts/LobbyCardGameNetwork": "LobbyCardGameNetwork",
"../../common/scripts/LobbyCardGameVar": "LobbyCardGameVar",
"./BaCayConst": "BaCayConst",
"./BaCayUI": "BaCayUI"
} ],
BaCayUI: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "8acdfmdgoBHNrRc/6sLO8X0", "BaCayUI");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../common/scripts/Card/CardItem"), s = t("./BaCayBetBien"), c = cc._decorator, u = c.ccclass, l = c.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lblFeedChickenVal = null;
e.lblTotalChicken = null;
e.lblBetValue = null;
e.panelBetBien = null;
e.imgBgBetChicken = null;
e.imgBgHandCard = null;
e.imgBgChicken = null;
e.pnlChipMoving = null;
e.panelBet = null;
e.menu = null;
e.pnlHelp = null;
e.sliderGetBet = null;
e.touchLayer = null;
e.btnBet = null;
e.sprChip = null;
e.sfBets = [];
e.btnBetBienMin = [];
e.btnBetBienMax = [];
e.myCard = [];
return e;
}
r([ l(cc.Label) ], e.prototype, "lblFeedChickenVal", void 0);
r([ l(cc.Label) ], e.prototype, "lblTotalChicken", void 0);
r([ l(cc.Label) ], e.prototype, "lblBetValue", void 0);
r([ l(cc.Node) ], e.prototype, "panelBetBien", void 0);
r([ l(cc.Node) ], e.prototype, "imgBgBetChicken", void 0);
r([ l(cc.Node) ], e.prototype, "imgBgHandCard", void 0);
r([ l(cc.Node) ], e.prototype, "imgBgChicken", void 0);
r([ l(cc.Node) ], e.prototype, "pnlChipMoving", void 0);
r([ l(cc.Node) ], e.prototype, "panelBet", void 0);
r([ l(cc.Node) ], e.prototype, "menu", void 0);
r([ l(cc.Node) ], e.prototype, "pnlHelp", void 0);
r([ l(cc.Slider) ], e.prototype, "sliderGetBet", void 0);
r([ l(cc.Node) ], e.prototype, "touchLayer", void 0);
r([ l(cc.Sprite) ], e.prototype, "btnBet", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "sprChip", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "sfBets", void 0);
r([ l(s.default) ], e.prototype, "btnBetBienMin", void 0);
r([ l(s.default) ], e.prototype, "btnBetBienMax", void 0);
r([ l(a.default) ], e.prototype, "myCard", void 0);
return r([ u ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../../common/scripts/Card/CardItem": "CardItem",
"./BaCayBetBien": "BaCayBetBien"
} ],
BaseCardDialog: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "4ecc6LdqG9AfZfQ4P3YcE0B", "BaseCardDialog");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = (a.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onBtnClose = function() {
this.node.destroy();
};
return r([ s ], e);
}(cc.Component));
n.default = c;
cc._RF.pop();
}, {} ],
BasePopupChat: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e8ad46wMnVIFr4S6QJZKhQW", "BasePopupChat");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../ChatVar"), s = cc._decorator, c = s.ccclass, u = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lvChat = null;
e.chatItem = null;
e.chatItemEmotion = null;
e.nodeEmotion = null;
e.nodeTxt = null;
e.inputChat = null;
e._signalRGame = null;
return e;
}
e.prototype.init = function(t) {
this._signalRGame = t;
};
e.prototype.pushChatToGame = function(t, e, n, o) {
void 0 === o && (o = !1);
var i = n.substr(1, n.length - 1);
-1 !== a.default.STICKER_NAME.indexOf(i) && (o = !0);
var r = cc.instantiate(o ? this.chatItemEmotion : this.chatItem), s = r.getComponent("ChatItem");
s.nameUser.string = e + ":";
t == lngui.UserManager.instance.mainUserInfo.AccountID && (s.nameUser.node.color = s.nameUser.node.color.fromHEX("#00EE00"));
if (o) {
if (s.emotion) {
s.emotion.loop = !0;
s.emotion.animation = i;
}
} else s.content.string = e + ": " + n;
this.lvChat.content.addChild(r);
this.lvChat.scrollToBottom(.1);
};
e.prototype.sendMessage = function(t) {
if (this._signalRGame && "" != t) {
this.node.active = !1;
this._signalRGame.send("SendMessage", [ t ]);
}
};
e.prototype.onBtnQuickChat = function(t, e) {
this.sendMessage(a.default.QUICK_CHAT_CONTENT[parseInt(e)]);
};
e.prototype.onBtnChatEmotion = function(t, e) {
this.sendMessage("*" + a.default.STICKER_NAME[parseInt(e) - 1]);
};
e.prototype.onBtnChat = function() {
var t = this.inputChat.string;
this.sendMessage(t);
this.inputChat.string = "";
};
e.prototype.onBtnEmotion = function() {
this.nodeEmotion.active = !0;
this.nodeTxt.active = !1;
};
e.prototype.onCloseEmotion = function() {
this.nodeEmotion.active = !1;
this.nodeTxt.active = !0;
};
e.prototype.onCloseChat = function() {
this.node.active = !1;
};
r([ u(cc.ScrollView) ], e.prototype, "lvChat", void 0);
r([ u(cc.Prefab) ], e.prototype, "chatItem", void 0);
r([ u(cc.Prefab) ], e.prototype, "chatItemEmotion", void 0);
r([ u(cc.Node) ], e.prototype, "nodeEmotion", void 0);
r([ u(cc.Node) ], e.prototype, "nodeTxt", void 0);
r([ u(cc.EditBox) ], e.prototype, "inputChat", void 0);
r([ u ], e.prototype, "_signalRGame", void 0);
return r([ c ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"../ChatVar": "ChatVar"
} ],
BasicRoom: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "577bbVMOLFGiq22u6ViqWsX", "BasicRoom");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../../chat/scripts/BasePopupChat"), s = t("../LobbyCardGameNetwork"), c = t("../LobbyCardGameVar"), u = t("./GameUserActiveCheckLayer"), l = t("./Player"), h = t("./PlayerTime"), d = cc._decorator, p = d.ccclass, f = d.property, m = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listPlayer = [];
e.pnlChat = null;
e.lblRoomValue = null;
e.lblRoomId = null;
e.messageInTable = null;
e.ProgressTimeRemain = null;
e.checkLayer = null;
e.nodeNotify = null;
e.NUM_PLAYER_MAX = 0;
e._ownerRoom = 0;
e._nOwnerId = 0;
e._llCurrentGameLoopId = 0;
e._nMyLocalInRoom = 0;
e._nCountActivePlayer = 0;
e._nTime = 0;
e._nMinBet = 0;
e._nMaxBet = 0;
e._nMaxPlayer = 0;
e._myPlayer = null;
e._nodeCheckActive = null;
e._isPlaying = !1;
e._isRegistryLeaveGame = !1;
e._lobbyGame = null;
e.GAME_NOTIFY_NAME = "GameNotifyJS";
return e;
}
e.prototype.onLoad = function() {
this.NUM_PLAYER_MAX = this.listPlayer.length;
};
e.prototype.setTimeRemain = function(t, e) {
void 0 === e && (e = 0);
t += e;
this.ProgressTimeRemain.setTime(t);
};
e.prototype.hideTimeRemain = function() {
this.ProgressTimeRemain.hide();
};
e.prototype.getPlayer = function(t) {
for (var e = 0; e < this.listPlayer.length; e++) {
var n = this.listPlayer[e];
if (n.getAccountID() == t) return n;
}
return null;
};
e.prototype.getPlayerByPos = function(t) {
for (var e = 0; e < this.listPlayer.length; e++) {
var n = this.listPlayer[e];
if (n.getPositionInRoom() == t) return n;
}
return null;
};
e.prototype.removePlayerById = function(t) {
for (var e = 0; e < this.listPlayer.length; e++) {
var n = this.listPlayer[e];
if (n.getAccountID() == t) {
n.node.active = !1;
n.setAccountID(-1e4);
}
}
};
e.prototype.message = function(t) {
if (Array.isArray(t) && 0 != t.length) {
var e = t[0];
"string" == typeof e && this.setMessageForGame(e, !0);
}
};
e.prototype.buyManual = function(t) {
var e = t[0];
e && lngui.UITextManager.showCenterNotification(e);
};
e.prototype.recieveMessage = function(t) {
if (Array.isArray(t) && 0 != t.length && Number.isInteger(t[0])) {
var e = t[0];
if ("string" == typeof t[1]) {
var n = t[1];
if ("string" == typeof t[2]) {
var o = t[2];
this.pnlChat.pushChatToGame(e, n, o);
var i = this.getPlayer(e);
i && i.receiveMessage(o);
}
}
}
};
e.prototype.receiveSticker = function(t) {
var e = t[0], n = t[1], o = this.getPlayer(e);
if (o) {
o.receiveSticker(n);
this.pnlChat.pushChatToGame(e, o.getUserName(), n, !0);
}
};
e.prototype.addPlayer = function() {};
e.prototype.setRoomInfo = function(t) {
if (Number.isInteger(t.MinBet)) {
this._nMinBet = t.MinBet;
var e = this._lobbyGame.getGameNameWithId(this._lobbyGame.curGameId);
this.lblRoomValue.string = e + " - " + t.MinBet;
}
Number.isInteger(t.MaxBet) && (this._nMaxBet = t.MaxBet);
Number.isInteger(t.MaxPlayer) && (this._nMaxPlayer = t.MaxPlayer);
if (Number.isInteger(t.CurrentGameLoopId)) {
var n = t.CurrentGameLoopId;
this.setCurrentGameLoopId(n);
}
Number.isInteger(t.OwnerId) && (this._nOwnerId = t.OwnerId);
if (t.Positions && t.Positions.length > 0) for (var o = t.Positions.length, i = 0; i < o; i++) if (t.Positions[i] == lngui.UserManager.instance.mainUserInfo.AccountID) {
this._nMyLocalInRoom = i;
break;
}
if (Number.isInteger(t.CountActivePlayer)) {
this._nCountActivePlayer = t.CountActivePlayer;
0 == this._nCountActivePlayer && this.setMessageForGame(c.default.NOTICE.STR_CHO_NGUOI_CHOI);
}
if (Number.isInteger(t.CurrentGameLoopId)) {
n = t.CurrentGameLoopId;
this.setCurrentGameLoopId(n);
}
};
e.prototype.setCurrentGameLoopId = function(t) {
if (this.lblRoomId) if (Number.isInteger(t) && t > 0) {
this._llCurrentGameLoopId = t;
this.lblRoomId.string = "#" + t;
} else this.lblRoomId.string = "";
};
e.prototype.allPlayersReset = function() {
for (var t = 0; t < this.listPlayer.length; t++) {
var e = this.listPlayer[t];
e.commonReset();
e.reset();
e.enableStateInRoom(!0);
}
};
e.prototype.showToiTrang = function() {};
e.prototype.enableOwner = function() {
for (var t = 0; t < this.listPlayer.length; t++) this.listPlayer[t].getAccountID() == this._nOwnerId ? this.listPlayer[t].ImgOwner.active = !0 : this.listPlayer[t].ImgOwner.active = !1;
};
e.prototype.showStatePlayer = function(t) {
this._isPlaying = t.IsPlaying;
if (this._isPlaying) {
var e = t.Players;
for (var n in e) {
var o = e[n], i = o.AccountID;
0 === o.Status && this.getPlayer(i).enableStateInRoom(!1);
}
}
};
e.prototype.removePlayer = function(t) {
if ("object" == typeof t) {
t.getPositionInRoom();
for (var e = 0; e < this.listPlayer.length; e++) {
var n = this.listPlayer[e];
if (n.getAccountID() == t.getAccountID()) {
n.node.active = !1;
n.setAccountID(-1e3);
break;
}
}
}
};
e.prototype.setMessageForGame = function(t, e, n) {
void 0 === e && (e = !1);
void 0 === n && (n = 3);
if (t.length > 0) {
this.messageInTable.node.scale = .1;
this.messageInTable.node.color = this.messageInTable.node.color.fromHEX("#F7FE8F");
this.messageInTable.node.stopAllActions();
this.messageInTable.string = t;
e ? this.messageInTable.node.runAction(cc.sequence(cc.scaleTo(.5, 1), cc.delayTime(n), cc.callFunc(function() {
this.messageInTable.node.active = !1;
}.bind(this)))) : this.messageInTable.node.runAction(cc.scaleTo(.5, 1));
}
};
e.prototype.getNumPlayerActive = function() {
for (var t = 0, e = 0; e < this.listPlayer.length; e++) this.listPlayer[e].node.active && t++;
return t;
};
e.prototype.setObserver = function() {
cc.systemEvent.on(this.GAME_NOTIFY_NAME, this.onSocket, this);
};
e.prototype.onSocket = function(t) {
var e = t;
if ("object" == typeof e) {
"open" == e.s || e.s;
if (e.M && Array.isArray(e.M) && e.M.length > 0) for (var n = e.M.length, o = 0; o < n; o++) {
if ("object" != typeof e.M[o]) return;
if ("string" != typeof e.M[o].M) return;
var i = e.M[o].M;
if ("recieveMessage" == i) this.recieveMessage(e.M[o].A); else if ("chatSticker" == i) this.receiveSticker(e.M[o].A); else if ("updateConnectionStatus" == i) this.updateConnectionStatus(e.M[o].A); else if ("playerOutGame" == i) this.playerOutGame(e.M[o].A); else if ("playerLeave" == i) this.playerLeave(e.M[o].A); else if ("listRoom" == i) ; else if ("leaveWatching" == i) this.playerLeave(e.M[o].A); else if ("leavetowatch" == i) ; else if ("message" == i) this.message(e.M[o].A); else if ("notifyEvent" == i) ; else if ("updateAvatar" === i) ; else if ("buyManual" === i) ; else {
this.onGameSocket(e.M[o], i);
"startGame" == i && this.startCheckUserActive();
}
}
!1 === e.R && this.onGameSocket(e, "reply");
!0 === e.R && this.onGameSocket(e, "replyTrue");
}
};
e.prototype.playerOutGame = function(t) {
if (Array.isArray(t) && 0 != t.length && Number.isInteger(t[0])) {
var e = t[0], n = t[1];
if (e == lngui.UserManager.instance.mainUserInfo.AccountID) {
this._lobbyGame.onBtnBackLobby();
setTimeout(function() {
lngui.UITextManager.showCenterNotification(n);
}, 500);
}
}
};
e.prototype.onGameSocket = function() {};
e.prototype.updateConnectionStatus = function(t) {
if (Array.isArray(t) && !(t.length <= 1) && Number.isInteger(t[0])) {
var e = t[0];
if (Number.isInteger(t[1])) {
var n = t[1], o = this.getPlayer(e);
o && o.setConnectionStatus(n);
}
}
};
e.prototype.playerLeave = function(t) {
if (Array.isArray(t) && 0 != t.length && Number.isInteger(t[0])) {
var e = t[0], n = t[2];
if (e == lngui.UserManager.instance.mainUserInfo.AccountID) this.leaveRoom(n); else {
(o = this.getPlayer(e)) && this.removePlayer(o);
if (1 == this.getNumPlayerActive()) {
this.resetGame();
this.setMessageForGame(c.default.NOTICE.STR_CHO_NGUOI_CHOI);
var o;
if (o = this.getPlayer(lngui.UserManager.instance.mainUserInfo.AccountID)) {
o.reset();
o.removeLoadingStatus();
}
}
}
}
};
e.prototype.updatePlayers = function(t, e) {
void 0 === e && (e = !1);
if ("object" == typeof t) {
var n = [];
for (var o in t) if (t[o]) {
var i = t[o], r = i.AccountID;
n.push(r);
if (s = this.getPlayer(r)) {
s.updateAccountInfo(i);
if (e) {
s.commonReset();
s.reset();
}
}
}
for (var a = this.listPlayer.length - 1; a >= 0; a--) {
var s = this.listPlayer[a];
n.indexOf(s.getAccountID()) < 0 && this.removePlayer(s);
}
}
};
e.prototype.onBtnBack = function() {
if (this._isRegistryLeaveGame) {
this._lobbyGame && this._lobbyGame.showTooltip(c.default.NOTICE.STR_UNREGISTRY_LEAVE_GAME);
this.LeaveGame(!1);
this._isRegistryLeaveGame = !1;
} else {
this._lobbyGame && this._isPlaying && this._lobbyGame.showTooltip(c.default.NOTICE.STR_REGISTRY_LEAVE_GAME);
this.LeaveGame(!0);
this._isRegistryLeaveGame = !0;
}
};
e.prototype.wsSend = function(t, e) {
void 0 === e && (e = null);
lngui.ZLog.log(t);
if (e) s.default.instance.sendSignalR(t, e); else {
var n = (t = JSON.parse(t)).M;
e = t.A;
s.default.instance.sendSignalR(n, e);
}
};
e.prototype.LeaveGame = function(t) {
lngui.ZLog.log("LeaveGame =====================>");
this.PlayerAction(t ? "RegisterLeaveRoom" : "UnregisterLeaveRoom");
};
e.prototype.PlayerAction = function(t) {
lngui.ZLog.log("PlayerAction =====================>" + t);
s.default.instance.mSignalr && s.default.instance.sendSignalR(t, []);
};
e.prototype.reconnect = function() {
s.default.instance.sendSignalR("EnterLobby", []);
};
e.prototype.leaveRoom = function(t) {
lngui.ZLog.log("leaveRoom =====================>" + t);
this.node.destroy();
this._lobbyGame.UI.nodeLobby.active = !0;
this._lobbyGame.UI.nodeMainGame.active = !1;
};
e.prototype.onExit = function() {
cc.systemEvent.off(this.GAME_NOTIFY_NAME, this.onSocket, this);
};
e.prototype.setTime = function(t) {
this._nTime = t;
};
e.prototype.getTime = function() {
return this._nTime;
};
e.prototype.getMinBet = function() {
return this._nMinBet;
};
e.prototype.setMinBet = function(t) {
this._nMinBet = t;
};
e.prototype.getMaxBet = function() {
return this._nMaxBet;
};
e.prototype.setMaxBet = function(t) {
this._nMaxBet = t;
};
e.prototype.setMaxPlayer = function(t) {
this._nMaxPlayer = t;
};
e.prototype.getMaxPlayer = function() {
return this._nMaxPlayer;
};
e.prototype.resetGame = function() {};
e.prototype.getAccountInfo = function() {};
e.prototype.startCheckUserActive = function() {
this.checkLayer.inited || this.checkLayer.init(this._lobbyGame);
};
r([ f(l.default) ], e.prototype, "listPlayer", void 0);
r([ f(a.default) ], e.prototype, "pnlChat", void 0);
r([ f(cc.Label) ], e.prototype, "lblRoomValue", void 0);
r([ f(cc.Label) ], e.prototype, "lblRoomId", void 0);
r([ f(cc.Label) ], e.prototype, "messageInTable", void 0);
r([ f(h.default) ], e.prototype, "ProgressTimeRemain", void 0);
r([ f(u.default) ], e.prototype, "checkLayer", void 0);
r([ f(cc.Node) ], e.prototype, "nodeNotify", void 0);
return r([ p ], e);
}(cc.Component);
n.default = m;
cc._RF.pop();
}, {
"../../../chat/scripts/BasePopupChat": "BasePopupChat",
"../LobbyCardGameNetwork": "LobbyCardGameNetwork",
"../LobbyCardGameVar": "LobbyCardGameVar",
"./GameUserActiveCheckLayer": "GameUserActiveCheckLayer",
"./Player": "Player",
"./PlayerTime": "PlayerTime"
} ],
CardItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d3adeqiP5hMhJvZBCVJsPkR", "CardItem");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyCardGameConst"), s = t("../LobbyCardGameVar"), c = t("./Card"), u = cc._decorator, l = u.ccclass, h = u.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.card = null;
e._isSelected = !1;
e._isMoved = !1;
e._isFliped = !1;
e._isSpecial = !1;
e._isBaiGui = !1;
e._nCardNumber = 0;
e._nCardSuite = 0;
e._cardFlipIndex = 0;
e._nOrdinalValue = 0;
e._idMatSau = 52;
return e;
}
e.prototype.init = function(t, e, n, o) {
void 0 === t && (t = 0);
void 0 === e && (e = -1);
void 0 === n && (n = 0);
void 0 === o && (o = !0);
Number.isInteger(t) || (t = 0);
Number.isInteger(e) || (e = -1);
Number.isInteger(n) || (n = 0);
this._nOrdinalValue = n;
this._nCardNumber = t;
this._nCardSuite = e;
o && this.setSpriteCard();
};
e.prototype.getCardNumber = function() {
return this._nCardNumber;
};
e.prototype.setCardNumber = function(t) {
this._nCardNumber = t;
};
e.prototype.getCardSuite = function() {
return this._nCardSuite;
};
e.prototype.setCardSuite = function(t) {
this._nCardSuite = t;
};
e.prototype.getOrdinalValue = function() {
return this._nOrdinalValue;
};
e.prototype.setOrdinalValue = function(t) {
this._nOrdinalValue = t;
};
e.prototype.setSelected = function(t) {
this._isSelected = t;
};
e.prototype.isSelected = function() {
return this._isSelected;
};
e.prototype.setMoved = function(t) {
this._isMoved = t;
};
e.prototype.isMoved = function() {
return this._isMoved;
};
e.prototype.setSpecial = function(t) {
this._isSpecial = t;
};
e.prototype.isSpecial = function() {
return this._isSpecial;
};
e.prototype.setFliped = function(t) {
this._isFliped = t;
t && (this.card.spriteFrame = c.default.instance.cards[this._idMatSau]);
};
e.prototype.isFliped = function() {
return this._isFliped;
};
e.prototype.setBaiGui = function(t) {
this._isBaiGui = t;
};
e.prototype.isBaiGui = function() {
return this._isBaiGui;
};
e.prototype.setSpriteCard = function() {
var t = this.switchSprCard();
this._nCardSuite >= 0 && this._nCardNumber >= 0 ? this.card.spriteFrame = t[this._nOrdinalValue] : this.card.spriteFrame = t[this._idMatSau];
};
e.prototype.initCardWithOrdinalValue = function(t) {
var e = this.switchSprCard();
this.card && (this.card.spriteFrame = e[t]);
this._nOrdinalValue = t;
this._nCardSuite = t % 4;
this._nCardNumber = (t - this._nCardSuite / 13) / 4 + 3;
15 == this._nCardNumber && (this._nCardNumber = 2);
};
e.prototype.flip = function() {
var t = this.switchSprCard();
this.node.stopAllActions();
if (this._isFliped) {
this.node.runAction(cc.sequence(cc.scaleTo(.125, 0, this.node.scaleY), cc.callFunc(function() {
this.card.spriteFrame = t[this._nOrdinalValue];
}.bind(this)), cc.scaleTo(.125, this.node.scaleY, this.node.scaleY)));
this._isFliped = !1;
} else {
this._isFliped = !0;
this.node.runAction(cc.sequence(cc.scaleTo(.125, 0, this.node.scaleY), cc.callFunc(function() {
this.card.spriteFrame = t[this._idMatSau];
}.bind(this)), cc.scaleTo(.125, this.node.scaleY, this.node.scaleY)));
}
};
e.prototype.switchSprCard = function() {
switch (s.default.gameID) {
case a.CARD_GAMEID.GAME_MAUBINH:
return c.default.instance.cardsMB;

case a.CARD_GAMEID.GAME_POKER:
return c.default.instance.cardsPoker;

case a.CARD_GAMEID.GAME_BA_CAY:
this._idMatSau = 36;
return c.default.instance.cardsBaCay;

default:
return c.default.instance.cards;
}
};
r([ h(cc.Sprite) ], e.prototype, "card", void 0);
return r([ l ], e);
}(cc.Component);
n.default = d;
cc._RF.pop();
}, {
"../LobbyCardGameConst": "LobbyCardGameConst",
"../LobbyCardGameVar": "LobbyCardGameVar",
"./Card": "Card"
} ],
CardRankItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "92a1cDk/FFL3JWHUEaKO4C6", "CardRankItem");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../util/FormatUtil"), s = cc._decorator, c = s.ccclass, u = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tk = null;
e.win = null;
return e;
}
e.prototype.setData = function(t, e) {
this.tk.string = t;
this.win.string = a.default.formatNumber(e);
};
r([ u(cc.Label) ], e.prototype, "tk", void 0);
r([ u(cc.Label) ], e.prototype, "win", void 0);
return r([ c ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"../../util/FormatUtil": void 0
} ],
CardRoomItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "712c4PoIdZLF7ErJ+q1Wz0z", "CardRoomItem");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bgActive = null;
e.bginactive = null;
e.txtRoom = null;
e.btnRoom = null;
return e;
}
e.prototype.setTypeRoom = function(t, e) {
this.bgActive.active = t;
this.bginactive.active = !t;
this.txtRoom.font = e;
this.btnRoom.interactable = t;
};
r([ c(cc.Node) ], e.prototype, "bgActive", void 0);
r([ c(cc.Node) ], e.prototype, "bginactive", void 0);
r([ c(cc.Label) ], e.prototype, "txtRoom", void 0);
r([ c(cc.Button) ], e.prototype, "btnRoom", void 0);
return r([ s ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {} ],
Card: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f49af7jzalIf4/TAhNnPeRT", "Card");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.cards = [];
e.cardsMB = [];
e.cardsPoker = [];
e.cardsBaCay = [];
return e;
}
n = e;
e.prototype.onLoad = function() {
n.instance = this;
};
var n;
e.instance = null;
r([ c(cc.SpriteFrame) ], e.prototype, "cards", void 0);
r([ c(cc.SpriteFrame) ], e.prototype, "cardsMB", void 0);
r([ c(cc.SpriteFrame) ], e.prototype, "cardsPoker", void 0);
r([ c(cc.SpriteFrame) ], e.prototype, "cardsBaCay", void 0);
return n = r([ s ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {} ],
ChatItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "015afzmOGdAVYTQ4uM/TYQe", "ChatItem");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nameUser = null;
e.content = null;
e.emotion = null;
return e;
}
r([ c(cc.Label) ], e.prototype, "nameUser", void 0);
r([ c(cc.Label) ], e.prototype, "content", void 0);
r([ c(sp.Skeleton) ], e.prototype, "emotion", void 0);
return r([ s ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {} ],
ChatVar: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9d752w+gMdJwadUAhqWaJup", "ChatVar");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = function() {
function t() {}
t.STICKER_NAME = [ "1-waaaht", "2-misdoubt", "3-boss", "4-beauty", "5-byebye", "6-after_boom", "7-matrix", "8-sweat", "9-choler", "10-beated", "11-angry", "12-ah", "13-beat", "14-adore", "15-beat_shot", "16-extreme-sexy-girl", "20-burn_joss_stick", "21-baffle", "22-cool", "23-dribble", "24-tire", "25-BigSmile" ];
t.QUICK_CHAT_CONTENT = [ "Nói nhiều quá đánh đi!", "All in", "Bơi vào đây hộ cái", "Ngại gì vết bẩn?", "Đánh đấm thế thì ăn sao được?", "Max nhọ !!!", "Chơi thì chơi không chơi thì té!", "Ngon quá hehe!", "Mình xin, mình cảm ơn!!!", "Ahihi! Đồ’s Ngốk’s" ];
return t;
}();
n.default = o;
cc._RF.pop();
}, {} ],
FixFontLabelGameCard: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b24d9jg0wpCGIl/oKNY67km", "FixFontLabelGameCard");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = (a.property, function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isSystemFontUsed = !1;
return e;
}
e.prototype.onLoad = function() {
if (cc.sys.os == cc.sys.OS_IOS) {
this.fontFamily = this.font.name.replace("_", " ");
this.font = null;
this.isSystemFontUsed = !0;
this.fontFamily = this.fontFamily;
} else {
this.isSystemFontUsed = !1;
this.font = this.font;
}
};
return r([ s ], e);
}(cc.Label));
n.default = c;
cc._RF.pop();
}, {} ],
FormatUtilGameCard: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f3921xi2mFL/oIiT7GEGSRa", "FormatUtilGameCard");
var o = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = cc._decorator, r = i.ccclass, a = (i.property, function() {
function t() {}
e = t;
t.formatNumber = function(t) {
if (t) {
var e = (t = parseInt(t)).toString().split(".");
e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
return e.join(".");
}
return t;
};
t.formatNumberNN = function(t) {
return t < 10 ? "0" + t : "" + t;
};
t.formatTimeMMSS = function(t) {
t < 0 && (t = 0);
var e = Math.floor(t / 60), n = t - 60 * e;
return (e < 10 ? "0" + e : "" + e) + ":" + (n < 10 ? "0" + n : "" + n);
};
t.formatDateByTimeStamp = function(t) {
var e = new Date(1e3 * t), n = e.getHours(), o = e.getMinutes(), i = e.getDate(), r = e.getMonth() + 1;
n < 10 && (n = "0" + n);
o < 10 && (o = "0" + o);
i < 10 && (i = "0" + i);
r < 10 && (r = "0" + r);
return n + ":" + o + " " + i + "/" + r + "/" + e.getFullYear();
};
t.formatDateDDHHMMSS = function(t) {
var n = t, o = Math.floor(t / 86400);
n -= 86400 * o;
var i = 0 === o ? "" : e.formatNumberNN(o) + "d:", r = Math.floor(n / 3600);
n -= 3600 * r;
var a = e.formatNumberNN(r), s = Math.floor(n / 60), c = n -= 60 * s;
return i + a + ":" + e.formatNumberNN(s) + ":" + e.formatNumberNN(c);
};
t.formatDateMonthYear = function(t) {
void 0 === t && (t = void 0);
var e = null, n = (e = t ? new Date(1e3 * t) : new Date()).getDay();
return (1 == n ? "Thứ 2" : 2 == n ? "Thứ 3" : 3 == n ? "Thứ 4" : 4 == n ? "Thứ 5" : 5 == n ? "Thứ 6" : 6 == n ? "Thứ 7" : "Chủ Nhật") + ",ngày " + e.getDate() + "/" + (e.getMonth() + 1) + "/" + e.getFullYear();
};
t.formatDateDDMMYYYY = function(t) {
var e = new Date(t), n = e.getDate(), o = e.getMonth();
return (n < 10 ? "0" + n : "" + n) + "-" + (o < 10 ? "0" + o : "" + o) + "-" + e.getFullYear();
};
t.formatDateTime = function(t, e, n) {
var o = t.split("-"), i = o[0], r = o[1], a = o[2].substr(0, 2), s = o[2].split(":"), c = s[0].substr(s[0].length - 2, 2), u = s[1];
s[2].substr(0, 2);
return e && n ? a + "-" + r + "-" + i + " " + c + ":" + u : e ? a + "-" + r + "-" + i : n ? c + ":" + u : void 0;
};
t.formatBirthday = function(t) {
var e = t.split("T")[0].split("-");
return e[1] + "/" + e[2] + "/" + e[0];
};
t.formatNumberToK = function(t) {
var e = "", n = t < 0 ? 1 : 0;
if ((t = Math.abs(t)) >= 1e3) {
var o = Math.floor(t / 1e3);
e = this.formatNumber(o) + "K";
} else e = "" + t;
n && (e = "-" + e);
return e;
};
t.formatNumberToKM = function(t) {
if (Math.abs(t) >= 1e6) {
var e = t < 0 ? 1 : 0;
t = Math.abs(t);
var n = Math.floor(t / 1e6), o = this.formatNumber(n) + "M";
e && (o = "-" + o);
return o;
}
return this.formatNumberToK(t);
};
t.getOnlyNumberInString = function(t) {
var e = t.match(/\d+/g);
return e ? e.join("") : "";
};
var e;
return e = o([ r ], t);
}());
n.default = a;
cc._RF.pop();
}, {} ],
"GameCard.Chat.NetworkClient": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6eab6h7cHBEBKTTueginrbn", "GameCard.Chat.NetworkClient");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./GameCardChat"), s = cc._decorator, c = s.ccclass, u = (s.property, 
function(t) {
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
cc.systemEvent.off("OnChatGameCardSocketEvent", this.onResponeData, this);
cc.systemEvent.on("OnChatGameCardSocketEvent", this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect("OnChatGameCardSocketEvent", t.url, t.hub, t.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
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
var o = t.M[n];
if (o.A && null != o.A[0] && null != o.A[0]) {
var i = o.A[0];
switch (o.M) {
case "receiveMessage":
a.default.instance.receiveMessage(i);
break;

case "listLastMessages":
a.default.instance.listLastMessages(i);
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
cc.systemEvent.off("OnChatGameCardSocketEvent", this.onResponeData, this);
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
return n = r([ c ], e);
}(cc.Component));
n.default = u;
cc._RF.pop();
}, {
"./GameCardChat": "GameCardChat"
} ],
GameCardChat: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "cf04enOfmFGCZfuGtGfdX73", "GameCardChat");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./GameCard.Chat.NetworkClient"), s = cc._decorator, c = s.ccclass, u = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.templateMessage = null;
e.listChat = null;
e.scrollListChat = null;
e.txtInputChat = null;
return e;
}
n = e;
e.prototype.touchSendChat = function() {
if (this.txtInputChat.string.length) {
a.default.instance.sendSignalR("SendMessage", [ this.txtInputChat.string, "taixiu" ]);
this.txtInputChat.string = "";
}
};
e.prototype.listLastMessages = function(t) {
if (0 != t.length) {
this.listChat.removeAllChildren();
if (t) for (var e = 0; e < t.length; e++) {
var n = t[e], o = n.n, i = n.c;
if (void 0 === o || void 0 === i) return;
if ("SYSTEM" === o || "SYSTEM" === i) return;
if (o.length > 0 && i.length > 0) {
var r = i, a = cc.instantiate(this.templateMessage), s = n.n, c = o;
a.active = !0;
s = (s.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), c);
a.getComponent(cc.Label).string = s + ": " + r;
if (1 == t.IsVipTx) {
a.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
a.getChildByName("lb_nameVip").getComponent(cc.Label).string = s + ": ";
a.off(cc.Node.EventType.SIZE_CHANGED);
a.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (a.getContentSize().height - a.getChildByName("lb_nameVip").getContentSize().height) / 2;
a.getChildByName("lb_nameVip").setPosition(cc.v2(0, t));
});
} else {
a.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
a.getChildByName("lb_name").getComponent(cc.Label).string = s + ": ";
a.off(cc.Node.EventType.SIZE_CHANGED);
a.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (a.getContentSize().height - a.getChildByName("lb_name").getContentSize().height) / 2;
a.getChildByName("lb_name").setPosition(cc.v2(0, t));
});
}
this.listChat.addChild(a);
}
this.scrollListChat.scrollToBottom();
}
}
};
e.prototype.receiveMessage = function(t) {
var e = t.n, n = t.c;
if (void 0 !== e && void 0 !== n && "SYSTEM" !== e && "SYSTEM" !== n) {
if (e.length > 0 && n.length > 0) {
var o = n, i = cc.instantiate(this.templateMessage), r = t.n, a = e;
i.active = !0;
r = (r.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), a);
i.getComponent(cc.Label).string = r + ": " + o;
if (1 == t.IsVipTx) {
i.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
i.getChildByName("lb_nameVip").getComponent(cc.Label).string = r + ": ";
i.off(cc.Node.EventType.SIZE_CHANGED);
i.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (i.getContentSize().height - i.getChildByName("lb_nameVip").getContentSize().height) / 2;
i.getChildByName("lb_nameVip").setPosition(cc.v2(0, t));
});
} else {
i.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
i.getChildByName("lb_name").getComponent(cc.Label).string = r + ": ";
i.off(cc.Node.EventType.SIZE_CHANGED);
i.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (i.getContentSize().height - i.getChildByName("lb_name").getContentSize().height) / 2;
i.getChildByName("lb_name").setPosition(cc.v2(0, t));
});
}
this.listChat.addChild(i);
}
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
r([ u(cc.Node) ], e.prototype, "templateMessage", void 0);
r([ u(cc.Node) ], e.prototype, "listChat", void 0);
r([ u(cc.ScrollView) ], e.prototype, "scrollListChat", void 0);
r([ u(cc.EditBox) ], e.prototype, "txtInputChat", void 0);
return n = r([ c ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"./GameCard.Chat.NetworkClient": "GameCard.Chat.NetworkClient"
} ],
GameScene: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "470aczu+ORAsIRB0Rq8sm34", "GameScene");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = (a.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
n = e;
e.getInstance = function() {
n.instance || (n.instance = new n());
return n.instance;
};
var n;
e.instance = null;
return n = r([ s ], e);
}(cc.Component));
n.default = c;
cc._RF.pop();
}, {} ],
GameUserActiveCheckLayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1718feYqeRHaomiJIMO2WEw", "GameUserActiveCheckLayer");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyCardGameConst"), s = t("../LobbyCardGameNetwork"), c = t("../LobbyCardGameVar"), u = cc._decorator, l = u.ccclass, h = (u.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.COUNT_TIME = 100;
e._count = -1;
e.inited = !1;
e.mTimer = null;
e._lobbyGame = null;
return e;
}
e.prototype.init = function(t) {
var e = this;
if (c.default.gameID == a.CARD_GAMEID.GAME_TLMN_DL || c.default.gameID == a.CARD_GAMEID.GAME_SAMLOC) {
this.inited = !0;
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
cc.systemEvent.on("active_user", this.onTouchStart, this);
this._count = this.COUNT_TIME;
clearInterval(this.mTimer);
this.mTimer = setInterval(function() {
e._count -= 5;
console.log(e._count);
0 == e._count && e.registerLeaveRoom();
}, 5e3);
this._lobbyGame = t;
}
};
e.prototype.onDestroy = function() {
clearInterval(this.mTimer);
this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
cc.systemEvent.off("active_user", this.onTouchStart, this);
};
e.prototype.onTouchStart = function() {
this._count = this.COUNT_TIME;
};
e.prototype.registerLeaveRoom = function() {
s.default.instance.sendSignalR("LeaveGame", []);
this._lobbyGame && this._lobbyGame.showTooltip(c.default.NOTICE.STR_REGISTRY_LEAVE_GAME);
};
e.prototype.unRegisterLeaveRoom = function() {
s.default.instance.sendSignalR("UnregisterLeaveRoom", []);
this._lobbyGame && this._lobbyGame.showTooltip(c.default.NOTICE.STR_UNREGISTRY_LEAVE_GAME);
};
return r([ l ], e);
}(cc.Component));
n.default = h;
cc._RF.pop();
}, {
"../LobbyCardGameConst": "LobbyCardGameConst",
"../LobbyCardGameNetwork": "LobbyCardGameNetwork",
"../LobbyCardGameVar": "LobbyCardGameVar"
} ],
GameUtils: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b48130lPZZEpK39FBUiRFLg", "GameUtils");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = function() {
function t() {}
t.createClickBtnEvent = function(t, e, n, o) {
void 0 === o && (o = "");
var i = new cc.Component.EventHandler();
i.target = t;
i.component = e;
i.handler = n;
i.customEventData = o;
return i;
};
t.getUrlParameter = function(t, e) {
t = t.replace("/[[]/", "\\[").replace("/[]]/", "\\]");
var n = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "));
};
t.convertToOtherNode = function(t, e, n) {
void 0 === n && (n = null);
var o = t;
t.parent && (o = t.parent);
var i = o.convertToWorldSpaceAR(t.position);
n && (i = t.convertToWorldSpaceAR(n));
return e.convertToNodeSpaceAR(i);
};
t.convertToOtherNode2 = function(t, e, n) {
void 0 === n && (n = null);
var o = t;
t.parent && (o = t.parent);
var i = o.convertToWorldSpaceAR(t.getPosition());
n && (i = t.convertToWorldSpaceAR(n));
return e.convertToNodeSpaceAR(i);
};
t.rectContainsPoint = function(t, e) {
return e.x >= t.origin.x && e.x <= t.origin.x + t.size.width && e.y >= t.origin.y && e.y <= t.origin.y + t.size.height;
};
t.createItemFromNode = function(t, e, n, o) {
void 0 === n && (n = null);
void 0 === o && (o = !1);
if (!e) return null;
var i = n || e.parent, r = cc.instantiate(e);
o ? i.insertChild(r, 0) : i.addChild(r);
var a = r.getComponent(t);
a.node.active = !0;
e.active = !1;
return a;
};
t.cloneItemFromNode = function(t, e) {
if (!e) return null;
var n = cc.instantiate(e).getComponent(t);
n.node.active = !0;
e.active = !1;
return n;
};
t.createItemFromPrefab = function(t, e, n) {
if (!e) return null;
var o = cc.instantiate(e);
n.addChild(o);
var i = o.getComponent(t);
i.node.active = !0;
return i;
};
t.createNodeFromPrefab = function(t, e) {
if (!t) return null;
var n = cc.instantiate(t);
e.addChild(n);
return n;
};
t.formatDate = function(t, e) {
return (e = (e = (e = (e = (e = e.replace("%Y", t.getFullYear().toString())).replace("%m", t.getMonth().toString().length < 2 ? "0" + t.getMonth().toString() : t.getMonth().toString())).replace("%d", t.getDay().toString().length < 2 ? "0" + t.getDay().toString() : t.getDay().toString())).replace("%h", t.getHours().toString().length < 2 ? "0" + t.getHours().toString() : t.getHours().toString())).replace("%m", t.getMinutes().toString().length < 2 ? "0" + t.getMinutes().toString() : t.getMinutes().toString())).replace("%s", t.getSeconds().toString().length < 2 ? "0" + t.getSeconds().toString() : t.getSeconds().toString());
};
t.formatMoneyNumberMyUser = function(t) {
return "$ " + this.numberWithCommas(t);
};
t.formatMoneyNumberMyUserNotIcon = function(t) {
return this.numberWithCommas(t);
};
t.formatMoneyNumberUser = function(t) {
return "$ " + this.formatMoneyNumber(t);
};
t.formatMoneyNumber = function(t) {
var e = 1, n = t;
if (t < 0) {
e = -1;
n *= -1;
}
var o = "";
if (n >= 1e9) {
n /= 1e9;
o = "B";
} else if (n >= 1e6) {
n /= 1e6;
o = "M";
} else if (n >= 1e3) {
n /= 1e3;
o = "K";
}
return (n = Math.floor(100 * n + 1e-8) / 100 * e) + o;
};
t.formatMoneyNumber_v2 = function(t) {
var e = 1, n = t;
if (t < 0) {
e = -1;
n *= -1;
}
var o = "";
if (n >= 1e9) {
n /= 1e9;
o = " Tỉ";
} else if (n >= 1e6) {
n /= 1e6;
o = " Triệu";
} else if (n >= 1e3) {
n /= 1e3;
o = " Ngàn";
}
return (n = Math.floor(100 * n + 1e-8) / 100 * e) + o;
};
t.numberWithCommasMoney = function(t) {
return "$ " + this.numberWithCommas(t);
};
t.numberWithCommas = function(t) {
if (t) {
var e = (t = parseFloat(t)).toFixed(2).toString().split(".");
e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
return "00" !== e[1] ? e.join(",") : e[0];
}
return "0";
};
t.numberWithCommasV2 = function(t) {
if (t) {
var e = (t = parseFloat(t)).toFixed(2).toString().split(".");
e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
return "00" !== e[1] ? e.join(",") : e[0];
}
return "0";
};
t.numberWithDot = function(t) {
if (t) {
var e = (t = parseFloat(t)).toFixed(2).toString().split(".");
e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
return "00" !== e[1] ? e.join(",") : e[0];
}
return "0";
};
t.getRandomInt = function(t, e) {
void 0 === e && (e = 0);
e = Math.ceil(e);
t = Math.floor(t);
return Math.floor(Math.random() * (t - e)) + e;
};
t.randomInsideCircle = function(t) {
void 0 === t && (t = 1);
var e = t * Math.sqrt(Math.random()), n = 2 * Math.random() * Math.PI, o = e * Math.cos(n), i = e * Math.sin(n);
return new cc.Vec2(o, i);
};
t.getRandomFloat = function(t) {
return Math.random() * t;
};
t.sum = function(t) {
return t.length <= 0 ? 0 : t.reduce(function(t, e) {
return t + e;
});
};
t.setContentLabelAutoSize = function(t, e) {
if (e.length > 30) {
t.node.width = 30 * t.fontSize / 2;
t.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
} else t.overflow = cc.Label.Overflow.NONE;
t.string = e;
};
t.FormatString = function(t) {
for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
for (var o = 0; o < e.length; o++) t = t.replace("{" + o + "}", e[o].toString());
return t;
};
t.getParentTemp = function(t, e, n) {
void 0 === t && (t = "Temp");
void 0 === n && (n = 80);
var o = e.getChildByName(t);
if (!o) {
o = new cc.Node(t);
e.addChild(o);
o.zIndex = n;
}
return o;
};
t.getKeyByValue = function(t, e) {
var n = void 0;
t.forEach(function(t, o) {
e == t && (n = o);
});
return n;
};
t.isPlatformIOS = function() {
return cc.sys.platform == cc.sys.IPHONE || cc.sys.platform == cc.sys.IPAD;
};
t.isBrowser = function() {
return cc.sys.isBrowser;
};
t.isNative = function() {
return cc.sys.isNative;
};
t.isNullOrUndefined = function(t) {
return null == t || null == t;
};
t.convertLotteryNumberToString = function(t) {
for (var e = t.toString(), n = 6 - e.length, o = 0; o < n; o++) e = "0" + e;
return e;
};
t.isStatusPing = !0;
t.isHotUpdate = !1;
t.config = null;
return t;
}();
n.default = o;
cc._RF.pop();
}, {} ],
Interaction: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a169cmqdglPaocSzcAHXV6U", "Interaction");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.giftAnimationType = void 0;
var a, s = cc._decorator, c = s.ccclass;
s.property;
(function(t) {
t[t.runAnimationLoop = -1] = "runAnimationLoop";
t[t.runAnimation = 0] = "runAnimation";
t[t.moveToTarget = 1] = "moveToTarget";
t[t.setPos = 2] = "setPos";
t[t.delay = 5] = "delay";
t[t.bessieToTargetThenRunAnimation = 3] = "bessieToTargetThenRunAnimation";
t[t.moveToTargetThenRunAnimation = 100] = "moveToTargetThenRunAnimation";
t[t.destroy = 4] = "destroy";
})(a = n.giftAnimationType || (n.giftAnimationType = {}));
var u = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.fireCanon = function(t, e, n, o, i) {
this._parent = o;
this._zIndex = i;
this.executeFireCanonAction(t, e, n, "Attack");
};
e.executeFireCanonAction = function(t, e, n, o) {
this._revert = t.x < e.x;
var i = [];
i.startP = t;
i.endP = e;
i.object = n;
i.step_1 = a.setPos;
i.step_1_1 = t;
i.step_2 = a.runAnimationLoop;
i.step_2_1 = "Idle";
i.step_3 = a.moveToTargetThenRunAnimation;
i.step_3_1 = o;
i.step_3_time = .8;
i.step_3_endP = e;
i.step_4 = a.destroy;
i.currentStep = 0;
i.object.node.active = !0;
this.execute(i);
};
e.execute = function(t) {
t.currentStep++;
var e = t.currentStep;
switch (t["step_" + e]) {
case a.setPos:
t.object.node.position = t["step_" + e + "_1"];
this.execute(t);
return;

case a.runAnimation:
t.object.addAnimation(1, t["step_" + e + "_1"], !1);
this.execute(t);
return;

case a.runAnimationLoop:
t.object.setAnimation(0, t["step_" + e + "_1"], !0);
this.execute(t);
return;

case a.bessieToTargetThenRunAnimation:
t.object.node.stopAllActions();
t.object.node.runAction(cc.sequence(this.bessie1Side(t.object, t.endP, 2, null, this._revert), cc.callFunc(this.runGiftAnim, this, [ t, t["step_" + e + "_1"] ])));
return;

case a.moveToTargetThenRunAnimation:
this._revert = t.step_1_1.x < t["step_" + e + "_endP"].x;
t.object.node.stopAllActions();
t.object.node.runAction(cc.sequence(this.bessie1Side(cc.v2(t.object.node.position.x, t.object.node.position.y), cc.v2(t["step_" + e + "_endP"].x, t["step_" + e + "_endP"].y), t["step_" + e + "_time"], null, this._revert), cc.callFunc(this.runGiftAnim, this, [ t, t["step_" + e + "_1"] ])));
return;

case a.destroy:
t.object.setCompleteListener(function() {
t.object.node.active = !1;
setTimeout(function() {
t.object.node.removeFromParent();
}, 200);
}.bind(this));
return;
}
};
e.bessie1Side = function(t, e, n, o, i) {
n = n || 2;
o = o || 1;
o /= 2;
"undefined" == typeof i && (i = !0);
var r = cc.v2((e.x + t.x) / 2, (e.y + t.y) / 2), a = cc.v2(r.x - t.x, r.y - t.y), s = cc.v2(-a.y, a.x), c = cc.v2(a.y, -a.x), u = cc.v2(s.x * o + r.x, s.y * o + r.y), l = cc.v2(c.x * o + r.x, c.y * o + r.y);
i ? l = u : u = l;
return cc.bezierTo(n, [ l, u, cc.v2(e.x, e.y) ]);
};
e.runGiftAnim = function(t, e) {
e[0].object.setAnimation(0, e[1], !1);
setTimeout(function() {
this.execute(e[0]);
}.bind(this), 3e3);
};
e._parent = null;
e._zIndex = null;
e._revert = null;
return r([ c ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {} ],
LobbyCardGameConst: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "8b5a1VsSR5LYZ09JLjleyZl", "LobbyCardGameConst");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SUITE_CARD = n.MY_PLAYER_STATE = n.CARD_GAMEID = void 0;
(function(t) {
t[t.GAME_POKER = 107] = "GAME_POKER";
t[t.GAME_TLMN_DL = 100] = "GAME_TLMN_DL";
t[t.GAME_MAUBINH = 7] = "GAME_MAUBINH";
t[t.GAME_BA_CAY = 102] = "GAME_BA_CAY";
t[t.GAME_SAMLOC = 101] = "GAME_SAMLOC";
})(n.CARD_GAMEID || (n.CARD_GAMEID = {}));
(function(t) {
t[t.WATCHING = 0] = "WATCHING";
t[t.PLAY = 1] = "PLAY";
})(n.MY_PLAYER_STATE || (n.MY_PLAYER_STATE = {}));
(function(t) {
t[t.BICH_TLMN = 0] = "BICH_TLMN";
t[t.TEP_TLMN = 13] = "TEP_TLMN";
t[t.RO_TLMN = 26] = "RO_TLMN";
t[t.CO_TLMN = 39] = "CO_TLMN";
})(n.SUITE_CARD || (n.SUITE_CARD = {}));
cc._RF.pop();
}, {} ],
LobbyCardGameNetwork: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "5fa2fvvoeJNNqYwmMGE4Ese", "LobbyCardGameNetwork");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./LobbyCardGameConst"), s = t("./LobbyCardGameVar"), c = cc._decorator, u = c.ccclass, l = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.mListenerKey = "GameNotifyJS";
e.lobby = null;
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
e.prototype.init = function(t) {
this.lobby = t;
this.loadRank();
this.connect();
};
e.prototype.connect = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
var t = {
hub: this.lobby.curGameVar.negotiate,
negotiate: this.lobby.curGameVar.hub,
gate: lngui.ConfigManager.instance.ConfigInfo.Gate
};
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect(this.mListenerKey, t.negotiate, t.hub, t.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onDisable = function() {
this.sendSignalR("ExitLobby", []);
if (this.mSignalr) {
this.mSignalr.close();
lngui.GateWebSocketManager.removeSignalR(this.mSignalr);
}
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
};
e.prototype.onResponeData = function(t) {
this.isEmpty(t) || t.s && "error" == t.s || this.onWebSocketCallback(t);
};
e.prototype.isEmpty = function(t) {
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return JSON.stringify(t) === JSON.stringify({});
};
e.prototype.sendSignalR = function(t, e) {
void 0 === e && (e = null);
lngui.ZLog.log("sendSignalR =====================>" + t);
e = e || [];
Array.isArray(e) || (e = [ e ]);
if (this.mSignalr) {
lngui.ZLog.log("mSignalr =====================>" + t);
this.mSignalr.send(t, e);
}
};
e.prototype.sendSignalRB = function(t, e) {
void 0 === e && (e = null);
lngui.ZLog.log("sendSignalR =====================>" + t);
e = e;
if (this.mSignalr) {
lngui.ZLog.log("mSignalr =====================>" + t);
this.mSignalr.send(t, e);
}
};
e.prototype.onWebSocketCallback = function(t) {
lngui.ZLog.log("onWebSocketCallback", t);
if ("open" == t.s) {
this.onGameSocketOpen();
this.isConnect = !0;
} else if ("close" == t.s) lngui.UIWaitingLayout.hideWaiting(); else if ("error" == t.s && "negotiate" == t.m || "disconnect" == t.s) lngui.UIWaitingLayout.hideWaiting(); else if ("reconnect" == t.s) {
lngui.UIWaitingLayout.hideWaiting();
console.log("reconect");
this.enterLobby();
} else this.onMessage(t);
};
e.prototype.onGameSocketOpen = function() {
lngui.UIWaitingLayout.hideWaiting();
this.enterLobby();
};
e.prototype.enterLobby = function() {
this.mSignalr && this.mSignalr.send("EnterLobby", [ 1, 1 ]);
};
e.prototype.playNow = function(t, e) {
lngui.ZLog.log("playNow ================>", t, e);
lngui.ZLog.log("LobbyCardGameVar.gameID ================>", s.default.gameID);
s.default.gameID == a.CARD_GAMEID.GAME_BA_CAY ? this.mSignalr.send("PlayNow", [ t, e ]) : s.default.gameID != a.CARD_GAMEID.GAME_TLMN_DL && s.default.gameID != a.CARD_GAMEID.GAME_MAUBINH || this.mSignalr.send("PlayNow", [ t, e, 0, 0 ]);
};
e.prototype.onMessage = function(t) {
console.log("-==onMessage ", t);
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, n = 0; n < e; ++n) {
var o = t.M[n];
if ("object" != typeof o) return;
if ("string" != typeof o.M) return;
var i = o.M;
console.log("-=-=method ", i);
console.log("-=-=arr ", o);
if ("message" == i) {
var r = o.A[0];
"string" == typeof r && lngui.UITextManager.showCenterNotification(r);
}
"joinGame" == i ? this.joinGame(o.A) : "buyManual" == i ? this.buyManual(o.A) : "playerLeave" == i || "playerOutGame" == i && this.playerOutGame(o.A);
}
};
e.prototype.playerOutGame = function(t) {
lngui.ZLog.log("======playerOutGame=============" + t);
if (Array.isArray(t) && 0 != t.length && Number.isInteger(t[0])) {
var e = t[0], n = t[1];
t[2];
if (e == lngui.UserManager.instance.mainUserInfo.AccountID) {
setTimeout(function() {
lngui.UITextManager.showCenterNotification(n);
}, 500);
this.lobby.onBtnBackLobby();
}
}
};
e.prototype.buyManual = function(t) {
if (Array.isArray(t) && "string" == typeof t[0]) {
var e = [ lngui.PopupAction.make("NẠP NGAY", function() {
var t = lngui.EBundle_Name.LOBBY;
lngui.BundleManager.instance.getPrefabFromBundle("prefabs/Prefab_Topup", t, function(t) {
lngui.UIPopupManager.instance.showPopupFromPrefab(t);
});
}), lngui.PopupAction.make("CLOSE", function() {}) ];
lngui.UIPopupManager.instance.showPopup("Bạn không đủ chip để vào bàn. Vui lòng nạp thêm để tiếp tục!", e);
}
};
e.prototype.joinGame = function(t) {
if (Array.isArray(t)) {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
var e = t;
switch (this.lobby.curGameId) {
case a.CARD_GAMEID.GAME_TLMN_DL:
(n = cc.instantiate(this.lobby.UI.games[0])).getComponent("TLMNRoom").init(e, this.lobby, this);
this.lobby.UI.nodeMainGame.active = !0;
this.lobby.UI.nodeMainGame.addChild(n);
this.lobby.UI.nodeLobby.active = !1;
break;

case a.CARD_GAMEID.GAME_SAMLOC:
(n = cc.instantiate(this.lobby.UI.games[1])).getComponent("TLMNRoom").init(e, this.lobby, this);
this.lobby.UI.nodeMainGame.active = !0;
this.lobby.UI.nodeMainGame.addChild(n);
this.lobby.UI.nodeLobby.active = !1;
break;

case a.CARD_GAMEID.GAME_POKER:
(n = cc.instantiate(this.lobby.UI.games[3])).getComponent("PokerRoom").init(e, this.lobby);
this.lobby.UI.nodeMainGame.active = !0;
this.lobby.UI.nodeMainGame.addChild(n);
this.lobby.UI.nodeLobby.active = !1;
break;

case a.CARD_GAMEID.GAME_MAUBINH:
(n = cc.instantiate(this.lobby.UI.games[2])).getComponent("MauBinhRoom").init(e, this.lobby, this);
this.lobby.UI.nodeMainGame.active = !0;
this.lobby.UI.nodeMainGame.addChild(n);
this.lobby.UI.nodeLobby.active = !1;
break;

case a.CARD_GAMEID.GAME_BA_CAY:
var n;
(n = cc.instantiate(this.lobby.UI.games[4])).getComponent("BaCayRoom").init(e, this.lobby);
this.lobby.UI.nodeMainGame.active = !0;
this.lobby.UI.nodeMainGame.addChild(n);
this.lobby.UI.nodeLobby.active = !1;
}
}
};
e.prototype.loadRank = function() {
var t = this;
lngui.Https.get(this.lobby.curGameVar.ranking, function(e) {
if (t.lobby.curGameId == a.CARD_GAMEID.GAME_BA_CAY) {
var n = t.lobby.UI.ranks, o = e.List;
if (1 == e.ResponseCode) for (var i = 0; i < n.length; i++) if (o[i]) {
n[i].tk.string = o[i].DisplayName;
n[i].node.active = !0;
} else n[i].node.active = !1;
} else for (n = t.lobby.UI.ranks, o = e, i = 0; i < n.length; i++) if (o[i]) {
n[i].tk.string = o[i].DisplayName;
n[i].node.active = !0;
} else n[i].node.active = !1;
});
};
var n;
e._instance = null;
return n = r([ u ], e);
}(cc.Component));
n.default = l;
cc._RF.pop();
}, {
"./LobbyCardGameConst": "LobbyCardGameConst",
"./LobbyCardGameVar": "LobbyCardGameVar"
} ],
LobbyCardGameUI: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "4e5ec8bhMFD1799p9Okc0H1", "LobbyCardGameUI");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./Card/NodeItem/CardRankItem"), s = t("./Card/NodeItem/CardRoomItem"), c = cc._decorator, u = c.ccclass, l = c.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.gameName = null;
e.listRoom = [];
e.ranks = [];
e.fontRoomActive = null;
e.fontRoomInActive = null;
e.nodeMainGame = null;
e.nodeLobby = null;
e.games = [];
e.prefPokerPopUpBuyIn = null;
return e;
}
r([ l(cc.Label) ], e.prototype, "gameName", void 0);
r([ l(s.default) ], e.prototype, "listRoom", void 0);
r([ l(a.default) ], e.prototype, "ranks", void 0);
r([ l(cc.BitmapFont) ], e.prototype, "fontRoomActive", void 0);
r([ l(cc.BitmapFont) ], e.prototype, "fontRoomInActive", void 0);
r([ l(cc.Node) ], e.prototype, "nodeMainGame", void 0);
r([ l(cc.Node) ], e.prototype, "nodeLobby", void 0);
r([ l(cc.Prefab) ], e.prototype, "games", void 0);
r([ l(cc.Prefab) ], e.prototype, "prefPokerPopUpBuyIn", void 0);
return r([ u ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"./Card/NodeItem/CardRankItem": "CardRankItem",
"./Card/NodeItem/CardRoomItem": "CardRoomItem"
} ],
LobbyCardGameVar: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e3f0bnNdldJh4KFYwzYi4yl", "LobbyCardGameVar");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = function() {
function t() {}
t.TlmnSolo = {
negotiate: "tlmnhub",
hub: "https://tlmnsl." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
ranking: "https://tlmn." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/TLMN/GetTopRanks"
};
t.Poker = {
negotiate: "pokerhub",
hub: "https://poker." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
ranking: "https://poker." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/Poker/GetTopRanks"
};
t.SamSolo = {
negotiate: "",
hub: "",
ranking: ""
};
t.BaCay = {
negotiate: "bacayhub",
hub: "https://bacay." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
ranking: "https://bacay." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/BaCay/GetTop"
};
t.MauBinh = {
negotiate: "maubinhhub",
hub: "https://maubinh." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
ranking: "https://maubinh." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/MauBinh/GetTopRanks"
};
t.gameID = -1;
t.NOTICE = {
STR_DANG_VAO_GAME: "Vào game",
STR_BAT_DAU: "Chờ ván mới bắt đầu",
STR_DAT_XU: "Đặt B",
STR_DAT_SAO: "Đặt B",
STR_NAN_BAI: "Nặn bài",
STR_LAT_BAI: "Lật bài",
STR_KET_QUA: "Kết quả",
STR_TAO_BAN: "Tạo bàn",
STR_DAU_TU_DO: "Đấu tự do",
STR_ASK_TOSELL: "Bạn nhận được chương. Bạn có muốn rao bán chương không?",
STR_BAN_CHUONG: "bán chương",
STR_ASK_TOBUY: "Bạn có muốn mua chương không ?",
STR_CHO_NGUOI_CHOI: "Chờ người chơi",
STR_CHO_VAN_SAU: "Chờ ván sau",
STR_THANG_GA: "THẮNG GÀ",
STR_WINNER: "THẮNG",
STR_LOST: "THUA",
STR_RULE_10X2: "10x2",
STR_RULE_SAP: "Sáp",
STR_RULE_VAY: "Vây",
STR_RULE: "Luật",
STR_RULE_DEM_LA: "Đếm lá",
STR_RULE_NAT: "Nhất ăn tất",
STR_ROOM: "Bàn",
STR_REGISTRY_LEAVE_GAME: "Đăng ký rời bàn. \nNhấn 'Quay lại' để hủy đăng ký rời bàn!",
STR_UNREGISTRY_LEAVE_GAME: "Hủy đăng ký rời bàn!",
STR_TLMN_CHON_BAI_SAI: "Bạn chọn quân bài chưa đúng. Xin thử lại!",
STR_CHUA_CHON_QUAN_BAI: "Bạn chưa chọn quân bài!"
};
t.timeOnBackground = 0;
t.timeNeedSub = 0;
t.timeBinh = 0;
return t;
}();
n.default = o;
cc._RF.pop();
}, {} ],
LobbyCardGame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9d34b1iECBBR4+cJE7UdMp7", "LobbyCardGame");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../poker/scripts/PokerPopUpBuyIn"), s = t("./LobbyCardGameConst"), c = t("./LobbyCardGameNetwork"), u = t("./LobbyCardGameUI"), l = t("./LobbyCardGameVar"), h = cc._decorator, d = h.ccclass, p = h.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.UI = null;
e.curGameId = -1;
e.curGameVar = null;
return e;
}
e.prototype.onEnable = function() {
c.default.instance.isConnect || lngui.UIWaitingLayout.showWaiting();
var t = s.CARD_GAMEID.GAME_POKER;
this.curGameId = -1 == lngui.GameCoreManager.instance.getGameId() ? t : lngui.GameCoreManager.instance.getGameId();
lngui.ZLog.log(this.curGameId);
l.default.gameID = this.curGameId;
this.loadGameVar(this.curGameId);
c.default.instance.init(this);
var e;
e = this.curGameId === s.CARD_GAMEID.GAME_BA_CAY || this.curGameId === s.CARD_GAMEID.GAME_SAMLOC ? [ !1, !1, !1, !0, !1, !0, !1, !1, !1, !0, !0, !0, !1, !1, !1 ] : (this.curGameId === s.CARD_GAMEID.GAME_TLMN_DL || (this.curGameId, 
s.CARD_GAMEID.GAME_MAUBINH), [ !1, !1, !1, !0, !0, !0, !0, !0, !0, !0, !0, !0, !1, !1, !1 ]);
this.setListRoom(e);
};
e.prototype.getGameNameWithId = function(t) {
switch (t) {
case s.CARD_GAMEID.GAME_POKER:
return "POKER";

case s.CARD_GAMEID.GAME_TLMN_DL:
return "TLMN - SOLO";

case s.CARD_GAMEID.GAME_MAUBINH:
return "MẬU BINH";

case s.CARD_GAMEID.GAME_BA_CAY:
return "BA CÂY";

case s.CARD_GAMEID.GAME_SAMLOC:
return "SÂM - SOLO";

default:
return "";
}
};
e.prototype.loadGameVar = function(t) {
switch (t) {
case s.CARD_GAMEID.GAME_POKER:
this.curGameVar = l.default.Poker;
break;

case s.CARD_GAMEID.GAME_TLMN_DL:
this.curGameVar = l.default.TlmnSolo;
break;

case s.CARD_GAMEID.GAME_MAUBINH:
this.curGameVar = l.default.MauBinh;
break;

case s.CARD_GAMEID.GAME_BA_CAY:
this.curGameVar = l.default.BaCay;
break;

case s.CARD_GAMEID.GAME_SAMLOC:
this.curGameVar = l.default.SamSolo;
break;

default:
return "";
}
};
e.prototype.setListRoom = function(t) {
for (var e = 0; e < this.UI.listRoom.length; e++) t[e] ? this.UI.listRoom[e].setTypeRoom(t[e], this.UI.fontRoomActive) : this.UI.listRoom[e].setTypeRoom(t[e], this.UI.fontRoomInActive);
this.UI.gameName.string = this.getGameNameWithId(this.curGameId);
};
e.prototype.onBtnBackLobby = function() {
lngui.ZLog.log("================onBtnBackLobby==================");
if (c.default.instance.mSignalr) {
c.default.instance.mSignalr.send("ExitLobby", []);
c.default.instance.mSignalr.close();
lngui.GateWebSocketManager.removeSignalR(c.default.instance.mSignalr);
c.default.instance.mSignalr = null;
}
lngui.UIScreenManager.instance.popToRootScreen();
};
e.prototype.onBtnRoom = function(t) {
var e = parseInt(t.target.name);
this.curGameId == s.CARD_GAMEID.GAME_POKER ? this.onSelectPokerGame(e) : c.default.instance.playNow(e, 1);
};
e.prototype.onSelectPokerGame = function(t) {
console.log("SelectPokerGame");
lngui.UserManager.instance.mainUserInfo.Money < 20 * t ? lngui.UIPopupManager.instance.showPopup("Bạn cần tối thiểu " + lngui.Utils.formatMoneyWithCommaOnly(20 * t) + "Nổ để vào bàn!") : lngui.UIPopupManager.instance.showPopupFromPrefab(this.UI.prefPokerPopUpBuyIn, function(e) {
e.getComponent(a.default).init(t, lngui.UserManager.instance.mainUserInfo.Money, function(e) {
var n = e.numberOfChip, o = e.isAutoBuyIn;
c.default.instance.sendSignalR("PlayNow", [ t, 1, n, o, 0, 0 ]);
c.default.instance.sendSignalR("UnregisterLeaveRoom");
});
e.node.active = !0;
});
};
e.prototype.showTooltip = function(t, e) {
void 0 === e && (e = 2);
lngui.UITextManager.showCenterNotification(t);
};
r([ p(u.default) ], e.prototype, "UI", void 0);
return r([ d ], e);
}(cc.Component);
n.default = f;
cc._RF.pop();
}, {
"../../poker/scripts/PokerPopUpBuyIn": "PokerPopUpBuyIn",
"./LobbyCardGameConst": "LobbyCardGameConst",
"./LobbyCardGameNetwork": "LobbyCardGameNetwork",
"./LobbyCardGameUI": "LobbyCardGameUI",
"./LobbyCardGameVar": "LobbyCardGameVar"
} ],
MauBinhConst: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "72c27utLLhASZtNeMcQWErM", "MauBinhConst");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.MAU_BINH_RESULT_TYPE = n.GameAction = n.TYPE_RESULT = n.GameConfig = void 0;
(function(t) {
t[t.TIME_SO_CHI = 4] = "TIME_SO_CHI";
t[t.LOCALZORDER_CHILAYOUT = 500] = "LOCALZORDER_CHILAYOUT";
t[t.SCALE_SMALLCARD = .77] = "SCALE_SMALLCARD";
t[t.SCALE_BIGCARD = 1.2] = "SCALE_BIGCARD";
t[t.TAG_MAU_BINH_PLAYER_HAND_CARD_STATUS = 12600] = "TAG_MAU_BINH_PLAYER_HAND_CARD_STATUS";
t[t.TAG_HANDCARD = 11e3] = "TAG_HANDCARD";
t[t.TAG_TURNCARD = 12e3] = "TAG_TURNCARD";
t[t.TAG_CHINAME = 13e3] = "TAG_CHINAME";
t[t.TAG_BINHLUNG = 14e3] = "TAG_BINHLUNG";
t[t.TAG_LAMSAP = 15e3] = "TAG_LAMSAP";
t[t.TAG_HUGELOCALZORDER = 800] = "TAG_HUGELOCALZORDER";
t[t.TAG_RANDOM_FOR_CARD = 83] = "TAG_RANDOM_FOR_CARD";
t[t.LOCALZ_SAPHAM_EFFECT = 12e3] = "LOCALZ_SAPHAM_EFFECT";
t[t.LOCALZ_CHINAME = 11e3] = "LOCALZ_CHINAME";
t[t.LOCALZ_MONEY = 13e3] = "LOCALZ_MONEY";
})(n.GameConfig || (n.GameConfig = {}));
(function(t) {
t[t.THANG_SPECIAL = -1] = "THANG_SPECIAL";
t[t.THANG = 0] = "THANG";
t[t.THUA = 1] = "THUA";
t[t.HOA = 2] = "HOA";
})(n.TYPE_RESULT || (n.TYPE_RESULT = {}));
(function(t) {
t[t.XepBai = 1] = "XepBai";
t[t.HaBai = 2] = "HaBai";
t[t.KetThuc = 3] = "KetThuc";
t[t.StartGame = 1e3] = "StartGame";
t[t.UnknownResult = 1001] = "UnknownResult";
})(n.GameAction || (n.GameAction = {}));
(function(t) {
t[t.X = -234] = "X";
t[t.Normal = -100] = "Normal";
t[t.LamSap = -10] = "LamSap";
t[t.SapBaChi = -9] = "SapBaChi";
t[t.XamChiCuoi = -7] = "XamChiCuoi";
t[t.CuLuchiGiua = -6] = "CuLuchiGiua";
t[t.TuQuyChiDau = -5] = "TuQuyChiDau";
t[t.ThungPhaSanhChiDau = -4] = "ThungPhaSanhChiDau";
t[t.TuQuyChiGiua = -3] = "TuQuyChiGiua";
t[t.ThungPhaSanhChiGiua = -2] = "ThungPhaSanhChiGiua";
t[t.BinhLung = -1] = "BinhLung";
t[t.MauThau = 0] = "MauThau";
t[t.Doi = 1] = "Doi";
t[t.Thu = 2] = "Thu";
t[t.XamChi = 3] = "XamChi";
t[t.SamCo = 3] = "SamCo";
t[t.Sanh = 4] = "Sanh";
t[t.Thung = 5] = "Thung";
t[t.CuLu = 6] = "CuLu";
t[t.TuQuy = 7] = "TuQuy";
t[t.ThungPhaSanh = 8] = "ThungPhaSanh";
t[t.ThungPhaSanhLon = 9] = "ThungPhaSanhLon";
t[t.BaSanh = 10] = "BaSanh";
t[t.BaThung = 11] = "BaThung";
t[t.LucPheBon = 12] = "LucPheBon";
t[t.NamDoiMotSam = 13] = "NamDoiMotSam";
t[t.DongHoa = 14] = "DongHoa";
t[t.SanhRong = 15] = "SanhRong";
t[t.RongCuon = 16] = "RongCuon";
})(n.MAU_BINH_RESULT_TYPE || (n.MAU_BINH_RESULT_TYPE = {}));
cc._RF.pop();
}, {} ],
MauBinhPlayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "bfcfdiigKNB8bS/Yk/5aXxV", "MauBinhPlayer");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../common/scripts/Card/CardItem"), s = t("../../common/scripts/Card/Player"), c = t("../../common/scripts/Card/PlayerConst"), u = t("../../common/scripts/LobbyCardGameNetwork"), l = t("./MauBinhConst"), h = t("./MauBinhSupporter"), d = cc._decorator, p = d.ccclass, f = d.property, m = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.ketThucFlag = !1;
e._swapFlag = !1;
e._isSortChiEnable = !1;
e._isBinhLung = !1;
e._isTouching = !1;
e._mauBinhToiTrangStatus = -100;
e._nMauBinhToiTrang = -100;
e.BASE_TIME_CHIA_BAI = .05;
e._moneyResultBLAndToiTrang = 0;
e._moneyResult = 0;
e._toBeSetBalance = 0;
e._nIndex = 0;
e._nCardCount = 0;
e._swapCounter = 0;
e.cards = [];
e.chiNameForSortChi = [];
e.chiNamePos = [];
e.nodeGroupParticleOnBotMB = null;
e._btnComplete = null;
e._btnSort = null;
e._btnSwap = null;
e._btnStart = null;
e.bgZoom = null;
e._parentLayout = null;
e._unityTime = null;
e._chiInfor = null;
e.ttOffset = null;
e._beginPositionCard = null;
e._beginPosition = null;
e._fanCardLayout = [];
e._flippedCards = [];
e.timerPosition = null;
return e;
}
e.prototype.init = function(t, e) {
this._parentLayout = e;
this._nMaxCards = this.cards.length;
this.initCommonParameters(t);
for (var n = lngui.UserManager.instance.mainUserInfo.AccountID, o = 0; o < this._nMaxCards; o++) {
this.cards[o].node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
this.cards[o].node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
this.cards[o].node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);
this.cards[o].node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancelled, this);
this._fanCardLayout.push(cc.v2(this.cards[o].node.position.x, this.cards[o].node.position.y));
}
if (this._llAccountID == n) {
this._btnComplete = this._parentLayout.UI.btnComplete;
this._btnStart = this._parentLayout.UI.btnStart;
this._btnSwap = this._parentLayout.UI.btnSwap;
this._btnSort = this._parentLayout.UI.btnSort;
this._unityTime = this._parentLayout.ProgressTimeRemain;
this.setChiLayoutVisible(!1);
}
this._chiInfor = [ 4 ];
for (o = 0; o < 4; o++) {
this._chiInfor[o] = [];
this._chiInfor[o].ResultFamily = 0;
this._chiInfor[o].Money = 0;
}
};
e.prototype.reset = function() {
t.prototype.reset.call(this);
for (var e = 0; e < this._nMaxCards; e++) {
this.cards[e].node.active = !1;
if (this._fanCardLayout.length > 0) {
this.cards[e].node.x = this._fanCardLayout[e].x;
this.cards[e].node.y = this._fanCardLayout[e].y;
}
this.cards[e].node.scale = l.GameConfig.SCALE_SMALLCARD;
}
this.resetCardsColor();
this._llAccountID == lngui.UserManager.instance.mainUserInfo.AccountID && this.setChiLayoutVisible(!1);
this._chiInfor = [ 4 ];
for (e = 0; e < 4; e++) {
this._chiInfor[e] = [];
this._chiInfor[e].ResultFamily = 0;
this._chiInfor[e].Money = 0;
}
this._moneyResultBLAndToiTrang = 0;
this.chiNamePos.forEach(function(t) {
t.node.active = !1;
});
this._flippedCards.forEach(function(t) {
t.node && t.node.destroy();
});
this._isSortChiEnable = !1;
this._isTouching = !1;
this._isBinhLung = !1;
this._mauBinhToiTrangStatus = l.MAU_BINH_RESULT_TYPE.Normal;
this.ketThucFlag = !1;
this._moneyResult = null;
};
e.prototype.clearAll = function() {
t.prototype.reset.call(this);
this.cards.forEach(function(t) {
t.node.active = !1;
});
};
e.prototype.sortChi = function() {
if (this._isTouching) return !1;
this._isTouching = !0;
this._isSortChiEnable = !1;
this._btnSwap.active = !1;
this._btnSort.active = !1;
h.MauBinhHandCardsManipulator.sortHandCards(this.cards);
this.zoomOutHandCard(null);
this.node.runAction(cc.sequence(cc.delayTime(.2 + .01), cc.callFunc(function() {
this._isSortChiEnable = !0;
this._btnSwap.active = !0;
this._btnSort.active = !0;
this._isTouching = !1;
}, this)));
};
e.prototype.createFlippedCard = function(t) {
if (Array.isArray(t)) {
var e = t.length;
this._flippedCards = [];
for (var n = 0; n < e; n++) {
var o = t[n].CardNumber, i = t[n].CardSuite, r = t[n].OrdinalValue, s = cc.instantiate(this._parentLayout.UI.pfCardItem);
(s = s.getComponent(a.default)).init(o, i, r, !1);
s.zIndex = this.cards[n].node.zIndex;
this._flippedCards.push(s);
}
h.MauBinhHandCardsManipulator.sortHandCards(this._flippedCards);
}
};
e.prototype.flipCard = function(t) {
for (var e = t.begin; e <= t.end; e++) this.cards[e].init(this._flippedCards[e]._nCardNumber, this._flippedCards[e]._nCardSuite, this._flippedCards[e]._nOrdinalValue);
};
e.prototype.onTouchBegan = function(t) {
if (!this._isSortChiEnable || this._isTouching) return !1;
for (var e = t.target.getComponent(a.default), n = 0; n < this._nMaxCards; n++) {
this.cards[n].node.stopAllActions();
this.cards[n].getOrdinalValue() == e.getOrdinalValue() && (this._beginPositionCard = n);
var o;
o = n < 5 ? n + 300 : n >= 5 && n < 10 ? n + 200 : n + 100;
this.cards[n].node.name = l.GameConfig.TAG_RANDOM_FOR_CARD.toString();
this.cards[n].node.zIndex = o + l.GameConfig.LOCALZORDER_CHILAYOUT;
}
this._beginPosition = this.cards[this._beginPositionCard].node.position;
e.node.zIndex = e.node.zIndex + l.GameConfig.TAG_HUGELOCALZORDER;
e.node.name = l.GameConfig.TAG_HUGELOCALZORDER.toString();
this._isTouching = !0;
this.ttOffset = cc.v2(t.touch.getLocationX() - t.target.position.x, t.touch.getLocationY() - t.target.position.y);
return !1;
};
e.prototype.onTouchMoved = function(t) {
if (!this._isSortChiEnable) return !1;
var e = t.target.getComponent(a.default);
t.target.position = cc.v2(t.touch.getLocationX() - this.ttOffset.x, t.touch.getLocationY() - this.ttOffset.y);
for (var n = new cc.Vec2(e.node.position.x, e.node.position.y), o = t.target.getContentSize(), i = 0; i < this._nMaxCards; i++) if (this.cards[i].getOrdinalValue() != e.getOrdinalValue() && new cc.Rect(this.cards[i].node.position.x - o.width / 2, this.cards[i].node.position.y - o.height / 2, o.width, o.height).contains(n)) return;
};
e.prototype.onTouchEnded = function(t) {
var e = this;
if (!this._isSortChiEnable) return !1;
for (var n = t.target.getComponent(a.default), o = new cc.Vec2(n.node.position.x, n.node.position.y), i = t.target.getContentSize(), r = 0; r < this._nMaxCards; r++) if (this.cards[r].getOrdinalValue() != n.getOrdinalValue() && new cc.Rect(this.cards[r].node.position.x - i.width / 2, this.cards[r].node.position.y - i.height / 2, i.width, i.height).contains(o)) {
var s = new cc.Vec2(this.cards[r].node.position.x, this.cards[r].node.position.y);
this.cards = h.MauBinhHandCardsManipulator.swapCardInArray(this.cards, this._beginPositionCard, r);
this.cards[this._beginPositionCard].node.runAction(cc.moveTo(.2, this._beginPosition));
this.cards[r].node.runAction(cc.sequence(cc.moveTo(.2, s), cc.callFunc(function() {
e._isTouching = !1;
}, this)));
this.onCheckSortChi();
return;
}
for (r = 0; r < this._nMaxCards; r++) {
if (this.cards[r].node.name == l.GameConfig.TAG_HUGELOCALZORDER.toString()) {
this.cards[r].node.zIndex = this.cards[r].node.zIndex - l.GameConfig.TAG_HUGELOCALZORDER;
this.cards[r].node.name = l.GameConfig.TAG_RANDOM_FOR_CARD.toString();
}
if (this._beginPositionCard != r) {
this.cards[r].node.stopAllActions();
var c = this._fanCardLayout[r].y + 120 * Math.floor(r / 5) + 50, u = this._fanCardLayout[r].x + 100 * Math.floor(r % 5);
10 != r && 11 != r && 12 != r || (u -= 30);
this.cards[r].node.setPosition(cc.v2(u, c));
}
}
this.cards[this._beginPositionCard].node.runAction(cc.sequence(cc.moveTo(.2, this._beginPosition), cc.callFunc(function() {
e._isTouching = !1;
}, this)));
};
e.prototype.onTouchCancelled = function(t) {
this.onTouchEnded(t);
};
e.prototype.createHandCards = function(t, e) {
void 0 === e && (e = !1);
if (this._nStatus == c.ConnectionStatus.PlayingInGame && Array.isArray(t)) {
var n = t.length;
if (!(0 == n || n > this._nMaxCards)) {
this._swapFlag = !0;
for (var o = !1, i = 0, r = 0; r < n; r++) {
var a = t[r].CardNumber, s = t[r].CardSuite, h = t[r].OrdinalValue;
i = r < 5 ? r + 300 : r >= 5 && r < 10 ? r + 200 : r + 100;
this.cards[r].node.name = "" + l.GameConfig.TAG_RANDOM_FOR_CARD;
this.cards[r].node.zIndex = i;
this.cards[r].init(a, s, h);
var d = cc.v2(this._fanCardLayout[r].x, this._fanCardLayout[r].y);
this.cards[r].node.stopAllActions();
this.cards[r].node.active = !0;
var p = cc.rotateBy(.4, 0);
if (this._llAccountID == lngui.UserManager.instance.mainUserInfo.AccountID) {
("undefined" == typeof a || "undefined" == typeof s || "undefined" == typeof h || a < 0 || s < 0 || h < 0) && (o = !0);
this.cards[r].node.zIndex = this.cards[r].node.zIndex + l.GameConfig.LOCALZORDER_CHILAYOUT;
if (e) {
var f = this.cards[r].node.position.y + 120 * Math.floor(r / 5) + 50, m = this.cards[r].node.position.x + 100 * Math.floor(r % 5);
10 != r && 11 != r && 12 != r || (m -= 30);
this.cards[r].node.scale = l.GameConfig.SCALE_BIGCARD;
this.cards[r].node.x = m;
this.cards[r].node.y = f;
if (r == n - 1) {
this.readyForSort();
this.onCheckSortChi();
}
} else {
this.cards[r].node.x = 0;
this.cards[r].node.y = 0;
var y = cc.moveTo(.2, d);
r < n - 1 ? this.cards[r].node.runAction(cc.sequence(cc.delayTime(r * this.BASE_TIME_CHIA_BAI), cc.spawn(y, p))) : this.cards[r].node.runAction(cc.sequence(cc.delayTime(r * this.BASE_TIME_CHIA_BAI), cc.spawn(y, p), cc.callFunc(this.zoomOutHandCard, this), cc.callFunc(this.onCheckSortChi, this), cc.callFunc(function() {})));
}
} else if (e) {
this.cards[r].node.x = d.x;
this.cards[r].node.y = d.y;
r == n - 1 && this.randomSwap();
} else {
this.cards[r].node.x = 0;
this.cards[r].node.y = 0;
y = cc.moveTo(.2, d);
r < n - 1 ? this.cards[r].node.runAction(cc.sequence(cc.delayTime(r * this.BASE_TIME_CHIA_BAI), cc.spawn(y, p))) : this.cards[r].node.runAction(cc.sequence(cc.delayTime(r * this.BASE_TIME_CHIA_BAI), cc.spawn(y, p), cc.callFunc(this.randomSwap, this)));
}
this._llAccountID == lngui.UserManager.instance.mainUserInfo.AccountID && o && u.default.instance.sendSignalR("ReCards", []);
}
}
}
};
e.prototype.readyForSort = function() {
this._parentLayout._isAcceptFinish = !0;
this.setChiLayoutVisible(!0);
this._unityTime.node.active = !0;
if (this._mauBinhToiTrangStatus >= l.MAU_BINH_RESULT_TYPE.BaSanh && this._mauBinhToiTrangStatus <= l.MAU_BINH_RESULT_TYPE.RongCuon) {
this._isSortChiEnable = !1;
this._isTouching = !1;
this._btnComplete.active = !1;
this._btnSwap.active = !1;
this._btnSort.active = !1;
this.hideChiNameForSortChi();
this.node.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function() {
this._parentLayout.doComplete();
this._parentLayout.CheckChiCompleted(!0);
}, this)));
} else if (this.ketThucFlag) {
this._parentLayout.doComplete();
this._parentLayout.CheckChiCompleted(!0);
} else {
this._isSortChiEnable = !0;
this._isTouching = !1;
this._btnComplete.active = !0;
this._btnSwap.active = !0;
this._btnSort.active = !0;
}
};
e.prototype.zoomOutHandCard = function(t) {
t == this && this.setChiLayoutVisible(!0);
for (var e = 0; e < this.cards.length; e++) {
this.cards[e].node.stopAllActions();
var n = this.cards[e].node.position.y + 120 * Math.floor(e / 5) + 50, o = this.cards[e].node.position.x + 100 * Math.floor(e % 5);
10 != e && 11 != e && 12 != e || (o -= 30);
var i = cc.moveTo(.3, cc.v2(o, n)), r = cc.scaleTo(.3, l.GameConfig.SCALE_BIGCARD);
e == this.cards.length - 1 ? this.cards[e].node.runAction(cc.sequence(cc.spawn(i, r), cc.callFunc(this.readyForSort, this), cc.callFunc(this.onCheckSortChi, this))) : this.cards[e].node.runAction(cc.spawn(i, r));
}
this._parentLayout.UI.btnComplete.active = !0;
this._parentLayout.UI.btnSwap.active = !0;
this.bgZoom.active = !0;
};
e.prototype.zoomInHandCard = function(t) {
void 0 === t && (t = .2);
for (var e = 0; e < this._nMaxCards; e++) {
this.cards[e].node.color = cc.Color.WHITE;
this.cards[e].node.active = !0;
var n;
n = e < 5 ? e + 300 : e >= 5 && e < 10 ? e + 200 : e + 100;
this.cards[e].node.zIndex = n;
}
this._llAccountID == lngui.UserManager.instance.mainUserInfo.AccountID && this.setChiLayoutVisible(!1);
for (e = 0; e < this.cards.length; e++) {
this.cards[e].node.stopAllActions();
var o = this._fanCardLayout[e].y, i = this._fanCardLayout[e].x, r = cc.moveTo(t, cc.v2(i, o)), a = cc.scaleTo(t, l.GameConfig.SCALE_SMALLCARD);
e == this.cards.length - 1 ? this.cards[e].node.runAction(cc.sequence(cc.spawn(r, a), cc.callFunc(this.onCheckSortChi2, this))) : this.cards[e].node.runAction(cc.spawn(r, a));
}
};
e.prototype.onCheckSortChi = function() {
this._parentLayout.CheckChiCompleted(!1);
this._mauBinhToiTrangStatus >= l.MAU_BINH_RESULT_TYPE.BaSanh && this._mauBinhToiTrangStatus <= l.MAU_BINH_RESULT_TYPE.RongCuon || this.checkSortChi();
};
e.prototype.onCheckSortChi2 = function() {};
e.prototype.swap2ChiDau = function() {
if (this._isTouching) return !1;
this._isTouching = !0;
this._btnSwap.active = !1;
this._btnSort.active = !1;
for (var t = 0; t < 5; t++) {
this.cards[t].node.runAction(cc.moveTo(.2, cc.v2(this.cards[t + 5].node.position.x, this.cards[t + 5].node.position.y)));
this.cards[t + 5].node.runAction(cc.moveTo(.2, cc.v2(this.cards[t].node.position.x, this.cards[t].node.position.y)));
var e = this.cards[t + 5];
this.cards[t + 5] = this.cards[t];
this.cards[t] = e;
var n = this.cards[t + 5].node.zIndex;
this.cards[t + 5].node.zIndex = this.cards[t].node.zIndex;
this.cards[t].node.zIndex = n;
var o = this.cards[t + 5].node.name;
this.cards[t + 5].node.name = this.cards[t].node.name;
this.cards[t].node.name = o;
}
this.node.runAction(cc.sequence(cc.delayTime(.2 + .01), cc.callFunc(function() {
if (this._swapFlag) {
this._btnSwap.active = !0;
this._btnSort.active = !0;
this._isTouching = !1;
this.onCheckSortChi();
}
}, this)));
};
e.prototype.showMoneyWin = function(t) {
this.setMauBinhPlayerMoneyChange(t, !1);
t > 0 ? this.setWiner(!0) : 0 == t ? this.setPlayerStatus(c.PlayerStatus.Hoa) : this.setWiner(!1);
};
e.prototype.checkSortChi = function() {
var t = h.MauBinhHandCardsCheckChi.GetChiStatus(this.cards);
if ("undefined" != typeof t.blPlace) if (1 == t.blPlace) t.arr[2] = l.MAU_BINH_RESULT_TYPE.X; else if (0 == t.blPlace) t.arr[1] = l.MAU_BINH_RESULT_TYPE.X; else if (2 == t.blPlace) {
t.arr[0] = l.MAU_BINH_RESULT_TYPE.X;
t.arr[1] = l.MAU_BINH_RESULT_TYPE.X;
t.arr[2] = l.MAU_BINH_RESULT_TYPE.X;
}
for (var e = 0; e < this.chiNameForSortChi.length; e++) {
var n = -234 == t.arr[e] ? 10 : t.arr[e];
this.chiNameForSortChi[e].spriteFrame = this._parentLayout.UI.sfStatusChi[n];
this.chiNameForSortChi[e].node.active = !0;
}
h.MauBinhHandCardsCheckChi.BugMauChi(this.cards, t);
};
e.prototype.hideChiNameForSortChi = function() {
for (var t = 0; t < this.chiNameForSortChi.length; t++) this.chiNameForSortChi[t].node.active = !1;
};
e.prototype.ketThuc = function(t) {
this._swapFlag = !1;
for (var e = 0; e < this._nMaxCards; e++) {
var n = this.cards[e].node.scaleX, o = this.cards[e].node.scaleX;
this.cards[e].node.runAction(cc.sequence(cc.scaleTo(.125, n * l.GameConfig.SCALE_BIGCARD, o * l.GameConfig.SCALE_BIGCARD), cc.scaleTo(.125, n, o)));
}
t || this.setPlayerStatusOnHandCard();
};
e.prototype.setPlayerStatusOnHandCard = function(t, e) {
void 0 === t && (t = !1);
void 0 === e && (e = 3);
this._parentLayout;
};
e.prototype.setChiLayoutVisible = function(t) {
this.bgZoom.active = t;
if (this._unityTime && this.timerPosition) if (t) {
this._unityTime.node.active = !0;
this._unityTime.node.position = this.timerPosition;
} else this._unityTime.node.position = cc.v2(0, 0);
};
e.prototype.soChiPlayer = function(t) {
if (!(this._isBinhLung || this._nMauBinhToiTrang >= l.MAU_BINH_RESULT_TYPE.BaSanh)) if (t > this._nIndex) {
this.showAllChi();
this.resetCardsColor();
} else {
var e = [];
if (this._llAccountID == lngui.UserManager.instance.mainUserInfo.AccountID) {
switch (t) {
case 0:
for (var n = 0; n < this._nMaxCards; n++) e[n] = n < 5;
break;

case 1:
for (n = 0; n < this._nMaxCards; n++) e[n] = n >= 5 && n < 10;
break;

case 2:
for (n = 0; n < this._nMaxCards; n++) e[n] = n >= 10 && n < 13;
}
var o = .3;
for (n = 0; n < this._nMaxCards; n++) {
this.cards[n].node.stopAllActions();
var i = cc.moveTo(o, this._fanCardLayout[n]), r = cc.scaleTo(o, l.GameConfig.SCALE_SMALLCARD);
this.cards[n].node.runAction(cc.spawn(i, r));
if (e[n]) {
this.cards[n].node.color = cc.Color.WHITE;
this.cards[n].node.name = l.GameConfig.TAG_HUGELOCALZORDER.toString();
} else {
this.cards[n].node.color = cc.color(104, 104, 104);
this.cards[n].node.name == l.GameConfig.TAG_HUGELOCALZORDER.toString() && (this.cards[n].node.name = l.GameConfig.TAG_RANDOM_FOR_CARD.toString());
}
}
} else {
switch (t) {
case 0:
for (n = 0; n < this._nMaxCards; n++) e[n] = n < 5;
e.begin = 0;
e.end = 4;
e.center = 2;
break;

case 1:
for (n = 0; n < this._nMaxCards; n++) e[n] = n >= 5 && n < 10;
e.begin = 5;
e.end = 9;
e.center = 7;
break;

case 2:
for (n = 0; n < this._nMaxCards; n++) e[n] = n >= 10 && n < 13;
e.begin = 10;
e.end = 12;
e.center = 11;
}
for (o = .3, n = 0; n < this._nMaxCards; n++) {
this.cards[n].node.stopAllActions();
if (e[n]) {
this.cards[n].node.color = cc.Color.WHITE;
var a = cc.v2(this._fanCardLayout[n].x, this._fanCardLayout[n].y);
i = cc.moveTo(o / 2, cc.v2(this._fanCardLayout[e.center].x, this._fanCardLayout[e.center].y)), 
r = cc.moveTo(o / 2, a);
this.cards[n].node.runAction(cc.sequence(i, cc.callFunc(function() {
this.flipCard(e);
}.bind(this)), r));
this.cards[n].node.name = l.GameConfig.TAG_HUGELOCALZORDER.toString();
} else {
this.cards[n].node.color = cc.color(104, 104, 104);
this.cards[n].node.name == l.GameConfig.TAG_HUGELOCALZORDER.toString() && (this.cards[n].node.name = l.GameConfig.TAG_RANDOM_FOR_CARD.toString());
}
}
}
this.showMoneyForChi(t);
t < 3 && this.showChiName(t);
}
};
e.prototype.showAllChi = function() {
this.resetCardsColor();
this.chiNamePos.forEach(function(t) {
t.node.active = !1;
});
this._nStatus == c.ConnectionStatus.PlayingInGame && this.zoomInHandCard();
};
e.prototype.showAllChiNhatAnTat = function() {
this.showAllChiInstantly();
var t = void 0;
this._nMauBinhToiTrang >= l.MAU_BINH_RESULT_TYPE.BaSanh && (t = this._nMauBinhToiTrang);
this._isBinhLung && (t = l.MAU_BINH_RESULT_TYPE.BinhLung);
this.setMauBinhPlayerStatusWithSpine(t);
};
e.prototype.setChiInfo = function(t, e, n) {
if (!(t > 4)) {
this._nIndex = t;
this._chiInfor[t].ResultFamily > -1 && (this._chiInfor[t].ResultFamily = e);
this._chiInfor[t].Money += n;
}
};
e.prototype.haBaiHandCards = function(t) {
var e = t[0];
for (var n in e.Players) {
var o = e.Players[n];
if (o.AccountID == lngui.UserManager.instance.mainUserInfo.AccountID) {
for (var i = 0; i < o.BaiRac.length; i++) {
var r = o.BaiRac[i].CardNumber, a = o.BaiRac[i].CardSuite, s = o.BaiRac[i].OrdinalValue;
this.cards[i].init(r, a, s);
this.cards[i].node.color = cc.Color.WHITE;
}
h.MauBinhHandCardsManipulator.sortHandCards(this.cards);
}
}
};
e.prototype.showChiName = function(t) {
console.log("-=-showChiName ", t);
this.chiNamePos.forEach(function(t) {
t.node.stopAllActions();
t.node.active = !1;
});
console.log("-=-showChiName 0 ");
if (!(t > this._nIndex)) {
console.log("-=-showChiName 1 ");
if (this._chiInfor[t]) {
console.log("-=-showChiName 2 ");
var e = this._chiInfor[t].ResultFamily;
this.chiNamePos[t].spriteFrame = this._parentLayout.UI.sfResultType[e];
this.chiNamePos[t].node.zIndex = cc.macro.MAX_ZINDEX;
this.chiNamePos[t].node.active = !0;
this.chiNamePos[t].node.scale = .1;
this.chiNamePos[t].node.runAction(cc.scaleTo(.5, 1));
console.log("-=-showChiName 3 ");
}
}
};
e.prototype.showMoneyForChi = function(t) {
t > this._nIndex || this._chiInfor[t] && this.setMauBinhPlayerMoneyChange(this._chiInfor[t].Money);
};
e.prototype.showAllChiInstantly = function(t, e) {
void 0 === t && (t = cc.Color.WHITE);
void 0 === e && (e = .5);
if (this._llAccountID != lngui.UserManager.instance.mainUserInfo.AccountID) {
for (var n = [], o = [], i = 0; i < 3; i++) {
switch (i) {
case 0:
for (var r = 0; r < this._nMaxCards; r++) n[r] = r < 5;
o[i] = [];
o[i].begin = 0;
o[i].end = 4;
o[i].center = 2;
break;

case 1:
for (r = 0; r < this._nMaxCards; r++) n[r] = r >= 5 && r < 10;
o[i] = [];
o[i].begin = 5;
o[i].end = 9;
o[i].center = 7;
break;

case 2:
for (r = 0; r < this._nMaxCards; r++) n[r] = r >= 10 && r < 13;
o[i] = [];
o[i].begin = 10;
o[i].end = 12;
o[i].center = 11;
}
for (r = 0; r < this._nMaxCards; r++) if (n[r]) {
this.cards[r].node.stopAllActions();
this.cards[r].node.color = t;
this.flipCard(o[i]);
}
}
this.node.runAction(cc.sequence(cc.delayTime(3 * e), cc.callFunc(function() {
for (var t = 0; t < this._nMaxCards; t++) {
var n = cc.moveTo(e, this._fanCardLayout[t]);
this.cards[t].node.runAction(n);
}
}.bind(this))));
}
};
e.prototype.resetCardsColor = function() {
for (var t = 0; t < this._nMaxCards; t++) this.cards[t].node.color = cc.Color.WHITE;
};
e.prototype.randomSwap = function() {
"undefined" == typeof this._swapCounter ? this._swapCounter = 0 : this._swapCounter++;
if (this._swapCounter < 30) var t = 1e3 * (2 * Math.random() + .5); else t = 1e3 * (4 * Math.random() + 2.5);
do {
var e = Math.floor(13 * Math.random()), n = Math.floor(13 * Math.random());
} while (Math.floor(e / 5) == Math.floor(n / 5));
this.node.runAction(cc.sequence(cc.delayTime(t / 1e3), cc.callFunc(function() {
if (this._swapFlag && 0 == this.cards[e].node.getNumberOfRunningActions() && 0 == this.cards[n].node.getNumberOfRunningActions()) {
var t = this.cards[e].node.zIndex, o = this.cards[n].node.zIndex;
this.cards[n].node.zIndex = t;
this.cards[e].node.zIndex = o;
t = cc.v2(this.cards[e].node.position.x, this.cards[e].node.position.y);
o = cc.v2(this.cards[n].node.position.x, this.cards[n].node.position.y);
var i = cc.moveTo(.2, o), r = cc.moveTo(.2, t);
this.cards[e].node.runAction(i);
this.cards[n].node.runAction(r);
var a = this.cards[n];
this.cards[n] = this.cards[e];
this.cards[e] = a;
this.randomSwap();
}
}, this)));
};
e.prototype.setMauBinhPlayerMoneyChange = function(t, e) {
void 0 === e && (e = !0);
this.setMoneyChange(t, e);
};
e.prototype.setSortChiEnable = function(t) {
this._isSortChiEnable = t;
};
e.prototype.isSortChiEnable = function() {
return this._isSortChiEnable;
};
e.prototype.setMoneyResult = function(t) {
this._moneyResult = t;
};
e.prototype.getMoneyResult = function() {
return this._moneyResult;
};
e.prototype.isBinhLung = function() {
return this._isBinhLung;
};
e.prototype.setBinhLung = function(t) {
this._isBinhLung = t;
};
e.prototype.setMauBinhToiTrang = function(t) {
this._nMauBinhToiTrang = t;
};
e.prototype.getMauBinhToiTrang = function() {
return this._nMauBinhToiTrang;
};
e.prototype.getCardLayoutCenter = function() {
return this.cards[7].node.position;
};
e.prototype.setPositionForItems = function() {
this.getAccountID(), lngui.UserManager.instance.mainUserInfo.AccountID;
};
e.prototype.setMauBinhPlayerStatusWithSpine = function(t, e, n) {
void 0 === e && (e = !0);
void 0 === n && (n = 3);
this.nodeGroupParticleOnBottom.active = !1;
this.nodeGroupParticleOnBotMB.node.active = !1;
if ("undefined" != typeof t) {
if (t >= l.MAU_BINH_RESULT_TYPE.BaSanh) {
this.nodeGroupParticleOnBottom.opacity = 255;
this.nodeGroupParticleOnBottom.active = !0;
this.winEffect.setAnimation(0, "Idle", !0);
this.winEffect.setSkin("Thang");
this.winEffect.node.scale = 1;
}
t = t > 0 ? t : 16 - t;
this.nodeGroupParticleOnBotMB.node.active = !0;
this.nodeGroupParticleOnBotMB.spriteFrame = this._parentLayout.UI.sfResultType[t];
e && this.scheduleOnce(function() {
this.nodeGroupParticleOnBottom.active && this.nodeGroupParticleOnBottom.runAction(cc.fadeOut(.5));
this.nodeGroupParticleOnBotMB.node.active = !1;
}.bind(this), n);
}
};
r([ f(a.default) ], e.prototype, "cards", void 0);
r([ f(cc.Sprite) ], e.prototype, "chiNameForSortChi", void 0);
r([ f(cc.Sprite) ], e.prototype, "chiNamePos", void 0);
r([ f(cc.Sprite) ], e.prototype, "nodeGroupParticleOnBotMB", void 0);
r([ f(cc.Node) ], e.prototype, "bgZoom", void 0);
r([ f(cc.Vec2) ], e.prototype, "timerPosition", void 0);
return r([ p ], e);
}(s.default);
n.default = m;
cc._RF.pop();
}, {
"../../common/scripts/Card/CardItem": "CardItem",
"../../common/scripts/Card/Player": "Player",
"../../common/scripts/Card/PlayerConst": "PlayerConst",
"../../common/scripts/LobbyCardGameNetwork": "LobbyCardGameNetwork",
"./MauBinhConst": "MauBinhConst",
"./MauBinhSupporter": "MauBinhSupporter"
} ],
MauBinhRoom: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f5fa6y1xRNPerKLvIRbV5kv", "MauBinhRoom");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./MauBinhConst"), s = t("./MauBinhSupporter"), c = t("./MauBinhUI"), u = t("./MauBinhSapHamEffectNode"), l = t("../../common/scripts/Card/BasicRoom"), h = t("../../common/scripts/LobbyCardGameNetwork"), d = t("../../common/scripts/Card/PlayerConst"), p = t("../../common/scripts/LobbyCardGameVar"), f = t("../../common/scripts/LobbyCardGameConst"), m = cc._decorator, y = m.ccclass, g = m.property, C = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.UI = null;
e.sapHamEffectNode = null;
e._arrayJoinGame = null;
e._isStaredGame = !1;
e._isAcceptFinish = !1;
e._isTour = !1;
e._nIndex = 0;
e._myStatusPlayer = -1;
e._nCountSoChi = -2;
e._nMauBinhToiTrang = 0;
e._checkChiIndexes = null;
e._lastCheckChiMessage = "";
e.listPlayer = [];
e.tutorial_node = null;
return e;
}
e.prototype.onLoad = function() {
var t = this;
cc.game.on(cc.game.EVENT_HIDE, function() {
console.log("on hide", new Date());
p.default.timeOnBackground = new Date().getTime();
});
cc.game.on(cc.game.EVENT_SHOW, function() {
console.log("on show", new Date().getTime() - p.default.timeOnBackground);
var e = Math.ceil((new Date().getTime() - p.default.timeOnBackground) / 1e3);
p.default.timeBinh -= e;
p.default.timeBinh > 0 && t.ProgressTimeRemain.setTime(p.default.timeBinh);
});
};
e.prototype.getPlayer = function(t) {
for (var e = 0; e < this.listPlayer.length; e++) {
var n = this.listPlayer[e];
if (n.getAccountID() == t) return n;
}
return null;
};
e.prototype.init = function(t, e, n) {
this._myPlayer = this.listPlayer[0];
this._arrayJoinGame = t;
this._lobbyGame = e;
this.setObserver();
this.initRoom(this._arrayJoinGame);
this.pnlChat.init(h.default.instance.mSignalr);
this._isTour = n;
this.sapHamEffectNode.init(this);
};
e.prototype.onBtnAll = function(t, e) {
switch (e) {
case "chat":
this.onBtnChat();
break;

case "back":
this.onBtnBack();
break;

case "menu":
this.onBtnMenu();
break;

case "closeMenu":
this.UI.menu.active = !1;
break;

case "tutorial":
this.onBtnTutorial();
break;

case "doichi":
this._myPlayer.swap2ChiDau();
break;

case "sobai":
this.CheckChiCompleted(!0);
}
};
e.prototype.addDialog = function(t, e) {
void 0 === e && (e = 1);
this.UI.nodeDialog.addChild(t, e);
};
e.prototype.onBtnChat = function() {
this.pnlChat.node.active = !0;
};
e.prototype.onBtnTutorial = function() {
this.UI.menu.active = !1;
this.tutorial_node.active = !0;
};
e.prototype.onBtnMenu = function() {
this.UI.menu.active = !0;
};
e.prototype.onBtnSound = function() {};
e.prototype.initRoom = function(t) {
if (!Array.isArray(t) || 0 == t.length) return !1;
var e = t[0];
if ("object" != typeof e) return !1;
this._ownerRoom = e.OwnerRoom;
this._nOwnerId = e.OwnerID;
this.setRoomInfo(e);
this.createPlayers(e.Players);
this.createGameLoop(t);
this.setCurrentPlayerActive(t[1]);
this.showStatePlayer(e);
e.IsPlaying && this._myPlayer && this._myPlayer.getStatus() != d.ConnectionStatus.PlayingInGame && this.setMessageForGame(p.default.NOTICE.STR_CHO_VAN_SAU);
};
e.prototype.onGameSocket = function(t, e) {
lngui.ZLog.log("onGameSocket =========> " + e, t.A);
switch (e) {
case "startGame":
this.startGame(t.A);
return;

case "startActionTimer":
this.startActionTimer(t.A);
return;

case "finishGame":
this.ketThuc(t.A);
return;

case "haBai":
this.haBai(t.A);
return;

case "Cards":
return;

case "playerJoin":
this.playerJoin(t.A);
return;

case "showResult":
this.showResult(t.A);
return;

case "updateGameSession":
this.updateGameSession(t.A);
return;

case "changeToPlay":
return;

case "joinGame":
this.initRoom(t.A);
return;

case "reply":
case "replyTrue":
this.reply(t);
}
};
e.prototype.reply = function(t) {
t.I;
};
e.prototype.startGame = function(t) {
this._isStaredGame = !0;
this._isAcceptFinish = !1;
this._myStatusPlayer === f.MY_PLAYER_STATE.PLAY && this.setMessageForGame(" ");
this.resetGame();
this.ProgressTimeRemain.node.active = !1;
if (Array.isArray(t) && 0 != t.length) {
var e = t[0];
if ("object" == typeof e) {
this._isPlaying = !0;
if (e.Players && Object.keys(e.Players).length == this.getNumPlayerActive()) {
this.updatePlayers(e.Players);
for (var n in e.Players) {
var o = e.Players[n], i = o.AccountID, r = this.getPlayer(i);
if (i == lngui.UserManager.instance.mainUserInfo.AccountID && (o.MauBinhToiTrang < a.MAU_BINH_RESULT_TYPE.BaSanh || o.MauBinhToiTrang > a.MAU_BINH_RESULT_TYPE.RongCuon)) {
var c = s.MauBinh3SanhChecker.rearrange(o.BaiRac);
if (c) {
o.BaiRac = c;
o.MauBinhToiTrang = a.MAU_BINH_RESULT_TYPE.BaSanh;
}
}
if (r) {
r.ketThucFlag = o.KetThuc;
r.createHandCards(o.BaiRac);
} else this.notifySyncAndReEnterLobby("-3");
i == lngui.UserManager.instance.mainUserInfo.AccountID && (r._mauBinhToiTrangStatus = o.MauBinhToiTrang);
}
this._nOwnerId = e.OwnerID;
this._nCountActivePlayer = e.CountActivePlayer;
this.setCurrentGameLoopId(e.CurrentGameLoopID);
this._ownerRoom = e.OwnerRoom;
(r = this.getPlayer(this._ownerRoom)) && this.enableOwner();
} else this.notifySyncAndReEnterLobby("-2");
} else this.notifySyncAndReEnterLobby("-1001");
} else this.notifySyncAndReEnterLobby("-1002");
};
e.prototype.startActionTimer = function(t) {
if (Array.isArray(t) && 0 != t.length) {
var e = t[0];
p.default.timeBinh = t[1];
var n = this.getPlayer(this._nOwnerId);
n && n.removeLoadingStatus();
this._nOwnerId = e;
this.getPlayer(e).node.active && this.setTimeRemain(p.default.timeBinh);
if (Array.isArray(t[2]) && 0 != t[2].length) {
var o = t[2];
if (Array.isArray(o) && 0 != o.length) switch (o[0]) {
case a.GameAction.StartGame:
this._myPlayer.node.active && this.setMessageForGame(p.default.NOTICE.STR_BAT_DAU);
this._isPlaying = !1;
0 == this._nIndex && this.resetGame();
this.setTimeRemain(p.default.timeBinh);
e == lngui.UserManager.instance.mainUserInfo.AccountID && this._myPlayer.node.active && this.setMessageForGame("");
this.UI.btnComplete.active = !1;
this.UI.btnSwap.active = !1;
this.checkStartGame(p.default.timeBinh);
break;

case a.GameAction.XepBai:
case a.GameAction.HaBai:
case a.GameAction.KetThuc:
}
}
}
};
e.prototype.checkStartGame = function(t) {
this._isStaredGame = !1;
this.scheduleOnce(function() {
this._isStaredGame || this.notifySyncAndReEnterLobby("-99");
}.bind(this), t + 5);
};
e.prototype.ketThuc = function(t) {
lngui.ZLog.log("===============MB---------\x3e SO BÀI");
console.log("-=-=ketThuc ", t);
if (Array.isArray(t) && 0 != t.length) {
var e = t[0], n = t[1];
if (Number.isInteger(n) && this._llCurrentGameLoopId != n) this.notifySyncAndReEnterLobby("-1005"); else if (e == lngui.UserManager.instance.mainUserInfo.AccountID) {
if (!this._isAcceptFinish) {
this.notifySyncAndReEnterLobby("-1010");
return;
}
this.doComplete();
} else {
var o = this.getPlayer(e);
o.node.active ? o.ketThuc(!0) : this.notifySyncAndReEnterLobby("-4");
}
}
};
e.prototype.checkCardsValid = function(t) {
if (!Array.isArray(t)) return !1;
for (var e in t) {
var n = t[e];
if (!n) return !1;
var o = n.CardNumber, i = n.CardSuite, r = n.OrdinalValue;
if (!Number.isInteger(o) || !Number.isInteger(i) || !Number.isInteger(r) || o < 0 || i < 0 || r < 0) return !1;
}
return !0;
};
e.prototype.playerJoin = function(t) {
if (Array.isArray(t) && 0 != t.length && "undefined" != typeof t[0]) {
var e = 1, n = t[0].Position;
n > this._nMyLocalInRoom ? e = n - this._nMyLocalInRoom : n < this._nMyLocalInRoom && (e = 4 - (this._nMyLocalInRoom - n));
this._nMyLocalInRoom == n && (e = 0);
var o = this.listPlayer[e];
o.init(t[0], this, this._isTour);
o.setPositionInRoom(e);
}
};
e.prototype.showResult = function(t, e) {
void 0 === e && (e = !1);
console.log("-=-=showResult   ", t);
this._checkChiIndexes = [];
this.ProgressTimeRemain.hide();
var n = t[0];
this.setCurrentGameLoopId(n.CurrentGameLoopID);
for (var o in n.Players) {
var i = n.Players[o], r = i.AccountID;
if ((f = this.getPlayer(r)).node.active) {
if (r != lngui.UserManager.instance.mainUserInfo.AccountID) {
f._swapFlag = !1;
this.checkCardsValid(i.BaiRac);
f.createFlippedCard(i.BaiRac);
}
var a = i.Money;
f.setMoneyResult(a);
this._isTour ? f._toBeSetBalance = i.Account.CUP : f._toBeSetBalance = i.Account.TotalStar;
f.setBinhLung(i.BinhLung);
f.setMauBinhToiTrang(i.MauBinhToiTrang);
}
}
var s = n.GameLoop.SessionResulted;
this._nMauBinhToiTrang = n.GameLoop.MauBinhToiTrang;
if ("undefined" != typeof s) {
var c = s.MauBinhResultList;
console.log("MauBinhResultList", JSON.stringify(c));
for (var u in c) {
var l = c[u].AccountID, h = c[u].ResultFamily, d = (a = c[u].Money, c[u].Index);
if (d <= 4 && d > 0) {
if ((f = this.getPlayer(l)).node.active) {
if (d < 4) f.setChiInfo(d - 1, h, a); else {
var p = c[u].LostID;
a > 0 && this.sapHamEffectNode.addTarget(l, p, a);
}
this._nIndex = d;
}
} else if (-1 == d || -2 == d) {
var f;
(f = this.getPlayer(l))._moneyResultBLAndToiTrang += a;
}
}
this.UI.btnComplete.active = !1;
e ? this.straightToResult() : this.startSoChi();
}
};
e.prototype.straightToResult = function() {
this._nIndex = 0;
this._nCountSoChi = -2;
this.unschedule(this.soChi);
for (var t in this.listPlayer) {
var e = this.listPlayer[t];
if (e.getStatus() == d.ConnectionStatus.PlayingInGame && e.node.active) {
e.hideChiNameForSortChi();
e.showAllChiNhatAnTat();
e.showAllChi();
e.showMoneyWin(e._moneyResult);
e.getAccountID() == lngui.UserManager.instance.mainUserInfo.AccountID && e._moneyResult;
}
}
};
e.prototype.notifySyncAndReEnterLobby = function() {};
e.prototype.haBai = function(t) {
!Array.isArray(t) || t.length;
this.UI.btnComplete.active = !1;
this.UI.btnSwap.active = !1;
var e = t[0];
if ("undefined" != typeof e) {
for (var n in e.Players) {
var o = e.Players[n].AccountID, i = this.getPlayer(o);
i && (i._swapFlag = !1);
}
this.ProgressTimeRemain.setTime(3);
if (this._myPlayer.node.active) {
this._myPlayer.setSortChiEnable(!1);
this._myPlayer.haBaiHandCards(t);
this._myPlayer.showAllChi();
this._myPlayer.hideChiNameForSortChi();
}
}
};
e.prototype.CheckChiCompleted = function(t) {
if ((!t || this._isAcceptFinish) && this._myPlayer && !this.listPlayer[0].ketThucFlag) {
var e = "", n = {};
this.listPlayer[0].ketThucFlag = t;
n.KetThuc = this.listPlayer[0].ketThucFlag;
n.BaiRac = [];
for (var o = !0, i = 0; i < this.listPlayer[0]._nMaxCards; i++) {
var r = this.listPlayer[0].cards[i];
e += '"' + r.getOrdinalValue() + '",';
(r.getCardNumber() < 0 || r.getCardSuite() < 0 || r.getOrdinalValue() < 0) && (o = !1);
n.BaiRac.push({
IsFlip: !1,
HighLight: !1,
IsDraggable: !0,
CardNumber: r.getCardNumber(),
CardSuite: r.getCardSuite(),
OrdinalValue: r.getOrdinalValue()
});
}
if (!o) return;
e = e.substring(0, e.length - 1);
this._checkChiIndexes = this._checkChiIndexes || [];
h.default.instance.mSignalr && this._checkChiIndexes.push({
index: h.default.instance.mSignalr._index,
time: 0
});
var a = '{"H":"maubinhhub","M":"' + (t ? "FinishGame" : "CheckChi") + '","A":[[' + e + "]]}";
this._lastCheckChiMessage = a;
this.wsSend(a);
}
};
e.prototype.createPlayers = function(t) {
for (var e in t) {
var n = t[e];
if (n.AccountID == lngui.UserManager.instance.mainUserInfo.AccountID) {
var o = this.listPlayer[0];
o.setPositionInRoom(0);
o.init(n, this, this._isTour);
var i = {};
i.BaiRac = n.CardsChanging;
i.KetThuc = 1 == n.KetThuc;
if (i && i.BaiRac && i.BaiRac.length == n.BaiRac.length) {
var r = !0;
for (var c in i.BaiRac) {
var u = !1;
for (var l in n.BaiRac) if (i.BaiRac[c].OrdinalValue == n.BaiRac[l].OrdinalValue) {
u = !0;
break;
}
if (!u) {
r = !1;
break;
}
}
r && (n.BaiRac = i.BaiRac);
}
this.listPlayer[0].ketThucFlag = i.KetThuc;
if (n.MauBinhToiTrang < a.MAU_BINH_RESULT_TYPE.BaSanh || n.MauBinhToiTrang > a.MAU_BINH_RESULT_TYPE.RongCuon) {
var h = s.MauBinh3SanhChecker.rearrange(n.BaiRac);
if (h) {
n.BaiRac = h;
n.MauBinhToiTrang = a.MAU_BINH_RESULT_TYPE.BaSanh;
}
}
this._myStatusPlayer = f.MY_PLAYER_STATE.PLAY;
this.listPlayer[0]._mauBinhToiTrangStatus = n.MauBinhToiTrang;
this.listPlayer[0].createHandCards(n.BaiRac, !0);
} else {
var d = 1, p = n.Position;
p > this._nMyLocalInRoom ? d = p - this._nMyLocalInRoom : p < this._nMyLocalInRoom && (d = 4 - (this._nMyLocalInRoom - p));
this._nMyLocalInRoom == p && (d = 0);
this.listPlayer[d].init(n, this, this._isTour);
this.listPlayer[d].setPositionInRoom(d);
this.listPlayer[d].createHandCards(n.BaiRac, !0);
}
}
this._myPlayer || this.notifySyncAndReEnterLobby("-223");
};
e.prototype.createGameLoop = function(t) {
var e = t[0].GameLoop.SessionResult;
if ("undefined" != typeof e) {
var n = e.MauBinhResultList;
Array.isArray(n) && n.length > 0 && this.showResult(t, !0);
}
};
e.prototype.setCurrentPlayerActive = function(t) {
if ("undefined" != typeof t && Number.isInteger(t.Time)) {
var e = t.Time, n = t.AllowedActions;
if (n.length > 0) {
this.setTimeRemain(e);
if (n[0] == a.GameAction.StartGame) {
this.setMessageForGame(" ");
this.checkStartGame(e);
}
}
}
};
e.prototype.updateGameSession = function(t) {
if (Array.isArray(t) && 0 != t.length) {
this._nOwnerId = t[0];
this.updatePlayers(t[1].Players);
}
};
e.prototype.startSoChi = function() {
if (this._myPlayer.node.active && this._myPlayer.getStatus() == d.ConnectionStatus.PlayingInGame) {
this._myPlayer.zoomInHandCard();
this._myPlayer.hideChiNameForSortChi();
this.UI.btnSwap.active = !1;
}
this._nCountSoChi = -2;
this.schedule(this.soChi, a.GameConfig.TIME_SO_CHI);
this.soChi();
};
e.prototype.soChi = function(t) {
void 0 === t && (t = null);
this._nCountSoChi++;
if (-1 == this._nCountSoChi) {
var e = 0, n = 0;
for (var o in this.listPlayer) if ((r = this.listPlayer[o]).getStatus() == d.ConnectionStatus.PlayingInGame) {
e++;
if (r._isBinhLung || r._nMauBinhToiTrang >= a.MAU_BINH_RESULT_TYPE.BaSanh) {
r.showAllChiNhatAnTat();
n++;
}
}
if (e - n < 2) {
for (var o in this.listPlayer) (r = this.listPlayer[o]).getStatus() == d.ConnectionStatus.PlayingInGame && !r._isBinhLung && r._nMauBinhToiTrang < a.MAU_BINH_RESULT_TYPE.BaSanh && r.showAllChiNhatAnTat();
this._nCountSoChi = this._nIndex + 1;
}
if (0 == n) this.soChi(); else for (var o in this.listPlayer) (r = this.listPlayer[o]).getStatus() == d.ConnectionStatus.PlayingInGame && r.setMauBinhPlayerMoneyChange(r._moneyResultBLAndToiTrang);
} else if (this._nCountSoChi <= this._nIndex) {
if (3 == this._nCountSoChi) {
this.unschedule(this.soChi);
this._nCountSoChi++;
this.sapHamEffectNode.executeSapHamEffect();
}
var i = [];
for (var o in this.listPlayer) if ((r = this.listPlayer[o]).getStatus() == d.ConnectionStatus.PlayingInGame && r.node.active) {
r.soChiPlayer(this._nCountSoChi);
r._chiInfor[this._nCountSoChi] && i.push(r._chiInfor[this._nCountSoChi].resultFamily);
}
} else {
this._nIndex = 0;
this._nCountSoChi = -2;
this.unschedule(this.soChi);
for (var o in this.listPlayer) {
var r;
if ((r = this.listPlayer[o]).getStatus() == d.ConnectionStatus.PlayingInGame && r.node.active) {
r.showAllChi();
Number.isInteger(r._moneyResult);
r.showMoneyWin(r._moneyResult);
Number.isInteger(r._toBeSetBalance) && r.setBalance(r._toBeSetBalance);
r.getAccountID() == lngui.UserManager.instance.mainUserInfo.AccountID && r._moneyResult;
}
}
}
};
e.prototype.reconnect = function() {
this._checkChiIndexes = [];
"string" == typeof this._lastCheckChiMessage && this.wsSend(this._lastCheckChiMessage);
this.scheduleOnce(function() {
h.default.instance.sendSignalR("EnterLobby", []);
}.bind(this), 1);
};
e.prototype.resetGame = function() {
this._nCountSoChi = -2;
this._nIndex = 0;
this._nMauBinhToiTrang = 0;
this.sapHamEffectNode.init(this);
this.UI.btnComplete.active = !1;
this.UI.btnSwap.active = !1;
this.allPlayersReset();
this.unschedule(this.soChi);
this._checkChiIndexes = [];
this._lastCheckChiMessage = null;
};
e.prototype.doComplete = function() {
lngui.ZLog.log("===============MB---------\x3e SO BÀI");
this.UI.btnComplete.active = !1;
this.UI.btnSwap.active = !1;
this._myPlayer.bgZoom && (this._myPlayer.bgZoom.active = !1);
if (this._myPlayer) {
s.MauBinhHandCardsManipulator.sortHandCards(this._myPlayer.cards);
this._myPlayer.setSortChiEnable(!1);
this._myPlayer.zoomInHandCard();
this._myPlayer._swapFlag = !1;
this._myPlayer.hideChiNameForSortChi();
this._myPlayer.resetCardsColor();
}
};
r([ g(c.default) ], e.prototype, "UI", void 0);
r([ g(u.default) ], e.prototype, "sapHamEffectNode", void 0);
r([ g({
override: !0
}) ], e.prototype, "listPlayer", void 0);
r([ g(cc.Node) ], e.prototype, "tutorial_node", void 0);
return r([ y ], e);
}(l.default);
n.default = C;
cc._RF.pop();
}, {
"../../common/scripts/Card/BasicRoom": "BasicRoom",
"../../common/scripts/Card/PlayerConst": "PlayerConst",
"../../common/scripts/LobbyCardGameConst": "LobbyCardGameConst",
"../../common/scripts/LobbyCardGameNetwork": "LobbyCardGameNetwork",
"../../common/scripts/LobbyCardGameVar": "LobbyCardGameVar",
"./MauBinhConst": "MauBinhConst",
"./MauBinhSapHamEffectNode": "MauBinhSapHamEffectNode",
"./MauBinhSupporter": "MauBinhSupporter",
"./MauBinhUI": "MauBinhUI"
} ],
MauBinhSapHamEffectNode: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "8e078vB2vZA6KxVpVzFzYio", "MauBinhSapHamEffectNode");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../common/scripts/Card/Interaction"), s = t("../../common/scripts/Card/PlayerConst"), c = cc._decorator, u = c.ccclass, l = c.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._parent = null;
e._sapHamList = {};
e._sapHamMoneyGain = [];
e._canonBattlePlans = null;
e._planCounter = -1;
e.TAG_LEFT_SIDE_CANON = 22;
e.TAG_RIGHT_SIDE_CANON = 23;
e.TAG_UP_SIDE_CANON = 24;
e.canonPrefab = null;
return e;
}
e.prototype.init = function(t) {
console.log("-=-=parent ", t);
this._parent = t;
this._sapHamList = {};
this._sapHamMoneyGain = [];
this.node.destroyAllChildren();
};
e.prototype.addTarget = function(t, e, n) {
console.log("AccountId", t, e, n);
if ("undefined" == typeof this._sapHamList[t]) {
this._sapHamList[t] = [];
this._sapHamMoneyGain[t] = [];
}
if (t != e) {
this._sapHamList[t].push(e);
this._sapHamMoneyGain[t].push(n);
}
};
e.prototype.executeSapHamEffect = function() {
this._canonBattlePlans = this.preparePlans(this._sapHamList, this._sapHamMoneyGain);
this._planCounter = 0;
this.executePlan();
};
e.prototype.preparePlans = function(t, e) {
var n = [];
console.log("sapHamList", t);
console.log("sapHamList", JSON.stringify(t));
for (var o in t) {
console.log("-=-=preparePlans i ", o);
var i = {}, r = this._parent.getPlayer(o);
console.log("wonPl", r);
i.wonPl = r;
i.canonPos = r.getCardLayoutCenter();
i.canonStyle = r.getPositionInRoom();
var a = [], s = [], c = [];
console.log("-=-=preparePlans 0 ", t[o]);
for (var u in t[o]) {
console.log("-=-=preparePlans j ", u);
var l = this._parent.getPlayer(t[o][u]);
if (l) {
console.log("aLostPl", l);
s.push(l);
a.push(l.getAvataPosition());
c.push(e[o][u]);
console.log("lostPl", s);
}
}
i.lostPl = s;
i.targetPos = a;
i.moneyGain = c;
n.push(i);
}
return n;
};
e.prototype.executePlan = function() {
var t = this;
if ("undefined" != typeof this._canonBattlePlans[this._planCounter]) {
var e = this._canonBattlePlans[this._planCounter], n = this.prepareCanon(e);
switch (parseInt(n.name)) {
case this.TAG_UP_SIDE_CANON:
this.fireUpSide(n, e);
break;

case this.TAG_RIGHT_SIDE_CANON:
case this.TAG_LEFT_SIDE_CANON:
this.fireRightSide(n, e);
}
this._planCounter++;
} else if (0 == this._planCounter) 0 == this._planCounter && this.node.runAction(cc.sequence(cc.delayTime(0), cc.callFunc(function() {
t._parent.soChi();
}, this))); else {
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
t._parent.soChi();
}, this)));
}
};
e.prototype.prepareCanon = function(t) {
var e = cc.instantiate(this.canonPrefab);
e.position = cc.v3(t.canonPos.x, t.canonPos.y);
e.active = !1;
switch (t.canonStyle) {
case 0:
e.name = "" + this.TAG_UP_SIDE_CANON;

case 1:
e.name = "" + this.TAG_LEFT_SIDE_CANON;

case 2:
e.name = "" + this.TAG_UP_SIDE_CANON;

case 3:
e.name = "" + this.TAG_RIGHT_SIDE_CANON;
}
this.node.addChild(e, 100);
return e;
};
e.prototype.fireRightSide = function(t, e) {
var n = e.targetPos, o = e.wonPl, i = e.lostPl, r = e.moneyGain, c = [], u = 0, l = t.getComponent(sp.Skeleton);
for (var h in n) {
c.push(cc.delayTime(1));
c.push(cc.callFunc(function() {
a.default.fireCanon(t.position, n[u], l, this, t.zIndex - 1);
o.setMauBinhPlayerMoneyChange(r[u]);
i[u].setMauBinhPlayerMoneyChange(-r[u]);
i[u].setPlayerStatus(s.PlayerStatus.ThuaSapHam);
u++;
}.bind(this)));
c.push(cc.delayTime(1.5));
}
c.push(cc.callFunc(function() {
t.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(this.executePlan, this), cc.destroySelf()));
}, this));
this.node.stopAllActions();
c.length > 1 ? this.node.runAction(cc.sequence(c)) : this.node.runAction(c[0]);
};
e.prototype.fireUpSide = function(t, e) {
var n = e.targetPos, o = e.wonPl, i = e.lostPl, r = e.moneyGain, c = [], u = 0, l = t.getComponent(sp.Skeleton);
for (var h in n) {
c.push(cc.delayTime(1));
c.push(cc.callFunc(function() {
a.default.fireCanon(t.position, n[u], l, this, t.zIndex - 1);
o.setMauBinhPlayerMoneyChange(r[u]);
i[u].setMauBinhPlayerMoneyChange(-r[u]);
i[u].setPlayerStatus(s.PlayerStatus.ThuaSapHam);
u++;
t.setAnimation(0, "Attack", !1);
}, this));
c.push(cc.delayTime(1.5));
}
c.push(cc.callFunc(function() {
t.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(this.executePlan, this), cc.destroySelf()));
}, this));
t.runAction(cc.sequence(c));
};
r([ l(cc.Prefab) ], e.prototype, "canonPrefab", void 0);
return r([ u ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../../common/scripts/Card/Interaction": "Interaction",
"../../common/scripts/Card/PlayerConst": "PlayerConst"
} ],
MauBinhSupporter: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "aa25bnRySZCNoYEPU0uwar8", "MauBinhSupporter");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.MauBinh3SanhChecker = n.MauBinhHandCardsManipulator = n.MauBinhHandCardsCheckChi = void 0;
var o = t("./MauBinhConst"), i = function() {
function t() {}
t.BugMauChi = function(t, e) {
var n = [];
for (var i in t) n.push(t[i]);
for (var i in n) n[i].node.color = cc.Color.WHITE;
var r = [];
r[0] = n.slice(0, 5);
r[1] = n.slice(5, 10);
r[2] = n.slice(10, 13);
for (var a = 0; a < 3; a++) {
var s = [];
for (var c in r[a]) s[r[a][c].getCardNumber()] = 0;
for (var c in r[a]) s[r[a][c].getCardNumber()]++;
switch (e.arr[a]) {
case o.MAU_BINH_RESULT_TYPE.ThungPhaSanhLon:
case o.MAU_BINH_RESULT_TYPE.ThungPhaSanh:
case o.MAU_BINH_RESULT_TYPE.Thung:
case o.MAU_BINH_RESULT_TYPE.Sanh:
case o.MAU_BINH_RESULT_TYPE.CuLu:
break;

case o.MAU_BINH_RESULT_TYPE.TuQuy:
case o.MAU_BINH_RESULT_TYPE.Doi:
case o.MAU_BINH_RESULT_TYPE.SamCo:
case o.MAU_BINH_RESULT_TYPE.Thu:
for (var c in s) if (1 == s[c]) for (var u in r[a]) r[a][u].getCardNumber() == c && (r[a][u].node.color = cc.Color.WHITE);
break;

case o.MAU_BINH_RESULT_TYPE.MauThau:
var l, h = -1;
for (var c in r[a]) {
0 == (l = r[a][c].getCardNumber()) && (l = 13);
l > h && (h = l);
}
for (var c in r[a]) {
0 == (l = r[a][c].getCardNumber()) && (l = 13);
l != h && (r[a][c].node.color = cc.Color.WHITE);
}
break;

case o.MAU_BINH_RESULT_TYPE.X:
for (var c in r[a]) r[a][c].node.color = cc.color(255, 135, 135, 255);
}
}
};
t.GetChiStatus = function(t) {
var e = t.slice(0, 5), n = t.slice(5, 10), o = t.slice(10, 13), i = this.GetResultType(e), r = this.GetResultType(n), a = this.GetResultType(o), s = this.CompareChiLung(e, i, n, r), c = {
arr: [ i, r, a ],
blPlace: -1
};
this.CompareChiLung(n, r, o, a) && (c.blPlace = 1);
s && (c.blPlace = 0);
for (var u = 0; u < t.length; u++) if (t[u].getCardNumber() < 0 || t[u].getCardSuite() < 0 || t[u].getOrdinalValue() < 0) {
c.blPlace = 2;
break;
}
return c;
};
t.GetResultType = function(t) {
var e = 0, n = 0, i = 0, r = [];
for (var a in t) r[t[a].getCardNumber()] = 0;
for (var a in t) r[t[a].getCardNumber()]++;
for (var a in r) switch (r[a]) {
case 2:
e++;
break;

case 3:
n++;
break;

case 4:
i++;
}
if (t.length >= 5) {
if (this.CheckThungPhaSanh(t)) return o.MAU_BINH_RESULT_TYPE.ThungPhaSanh;
if (1 == i) return o.MAU_BINH_RESULT_TYPE.TuQuy;
if (1 == n && 1 == e) return o.MAU_BINH_RESULT_TYPE.CuLu;
if (this.CheckThung(t)) return o.MAU_BINH_RESULT_TYPE.Thung;
if (this.CheckSanh(t)) return o.MAU_BINH_RESULT_TYPE.Sanh;
}
return 1 == n ? o.MAU_BINH_RESULT_TYPE.SamCo : t.length >= 5 && 2 == e ? o.MAU_BINH_RESULT_TYPE.Thu : 1 == e ? o.MAU_BINH_RESULT_TYPE.Doi : o.MAU_BINH_RESULT_TYPE.MauThau;
};
t.CompareChiLung = function(t, e, n, i) {
if (e == i) {
var r = [];
for (var a in t) r[t[a].getCardNumber()] = 0;
for (var s in t) r[t[s].getCardNumber()]++;
var c = [];
for (var u in n) c[n[u].getCardNumber()] = 0;
for (var l in n) c[n[l].getCardNumber()]++;
var h = -1, d = -1;
switch (e) {
case o.MAU_BINH_RESULT_TYPE.ThungPhaSanhLon:
case o.MAU_BINH_RESULT_TYPE.ThungPhaSanh:
case o.MAU_BINH_RESULT_TYPE.Sanh:
if ((h = this.findMaxCardNumberInSanh(t)) < (d = this.findMaxCardNumberInSanh(n))) return !0;
break;

case o.MAU_BINH_RESULT_TYPE.TuQuy:
for (var p in r) 4 == r[p] && (h = parseInt(p));
for (var p in c) 4 == c[p] && (d = parseInt(p));
0 == h && (h = 13);
0 == d && (d = 13);
if (h <= d) return !0;
break;

case o.MAU_BINH_RESULT_TYPE.CuLu:
case o.MAU_BINH_RESULT_TYPE.SamCo:
h = -1, d = -1;
for (var p in r) 3 == r[p] && (h = parseInt(p));
for (var p in c) 3 == c[p] && (d = parseInt(p));
0 == h && (h = 13);
0 == d && (d = 13);
if (h < d) return !0;
if (h > d) return !1;
break;

case o.MAU_BINH_RESULT_TYPE.Thung:
case o.MAU_BINH_RESULT_TYPE.MauThau:
this.sortHandCardsByNumber(t);
this.sortHandCardsByNumber(n);
for (var p in n) if ((h = t[p].getCardNumber()) != (d = n[p].getCardNumber())) {
0 == h && (h = 13);
0 == d && (d = 13);
return h < d;
}
break;

case o.MAU_BINH_RESULT_TYPE.Thu:
var f = -1, m = -1, y = -1, g = -1, C = -1, _ = -1;
for (var p in r) {
2 == r[p] && (-1 == f ? f = parseInt(p) : m = parseInt(p));
1 == r[p] && (y = parseInt(p));
}
for (var p in c) {
2 == c[p] && (-1 == g ? g = parseInt(p) : C = parseInt(p));
1 == c[p] && (_ = parseInt(p));
}
0 == f && (f = 13);
0 == m && (m = 13);
0 == g && (g = 13);
0 == C && (C = 13);
0 == y && (y = 13);
0 == _ && (_ = 13);
if (Math.max(f, m) < Math.max(g, C)) return !0;
if (Math.max(f, m) == Math.max(g, C) && Math.min(f, m) < Math.min(g, C)) return !0;
if (Math.max(f, m) == Math.max(g, C) && Math.min(f, m) == Math.min(g, C) && y < _) return !0;
break;

case o.MAU_BINH_RESULT_TYPE.Doi:
h = -1, d = -1;
for (var p in r) 2 == r[p] && (h = parseInt(p));
for (var p in c) 2 == c[p] && (d = parseInt(p));
0 == h && (h = 13);
0 == d && (d = 13);
if (h < d) return !0;
if (h > d) return !1;
this.sortHandCardsByNumber(t);
this.sortHandCardsByNumber(n);
for (var p in n) if ((h = t[p].getCardNumber()) != (d = n[p].getCardNumber())) {
0 == h && (h = 13);
0 == d && (d = 13);
return h < d;
}
}
} else if (e < i) return !0;
return !1;
};
t.sortHandCardsByNumber = function(t) {
for (var e = !0; e; ) {
e = !1;
for (var n = 0; n < t.length - 1; n++) {
var o = t[n].getCardNumber(), i = t[n + 1].getCardNumber();
0 == o && (o = 13);
0 == i && (i = 13);
if (o < i) {
var r = t[n + 1];
t[n + 1] = t[n];
t[n] = r;
e = !0;
}
}
}
};
t.findMaxCardNumberInSanh = function(t) {
var e = -1, n = !1;
for (var o in t) {
var i = t[o].getCardNumber();
0 == i && (n = !0);
e < i && (e = i);
}
n && e > 10 && (e = 13);
return e;
};
t.CheckSanh = function(t) {
var e = [];
for (var n in t) e[t[n].getCardNumber()] = 0;
for (var n in t) e[t[n].getCardNumber()]++;
for (var n in e) if (1 != e[n]) return !1;
if (1 == e[9] && 1 == e[10] && 1 == e[11] && 1 == e[12] && 1 == e[0]) return !0;
var o = -1;
for (var n in e) {
if (-1 != o && parseInt(n) - o != 1) return !1;
o = parseInt(n);
}
return !0;
};
t.CheckThung = function(t) {
for (var e = t[0].getCardSuite(), n = 1; n < t.length; n++) if (e != t[n].getCardSuite()) return !1;
return !0;
};
t.CheckThungPhaSanhBig = function(t) {
var e = !1, n = !1;
for (var o in t) {
12 == t[o].getCardNumber() && (e = !0);
0 == t[o].getCardNumber() && (n = !0);
}
return n && e && this.CheckSanh(t) && this.CheckThung(t);
};
t.CheckThungPhaSanh = function(t) {
return this.CheckSanh(t) && this.CheckThung(t);
};
return t;
}();
n.MauBinhHandCardsCheckChi = i;
var r = function() {
function t() {}
t.sortHandCards = function(t) {
if (null != t && "undefined" != typeof t) for (var e = 0; e < 3; e++) switch (e) {
case 0:
this.beginSortProcessure(t, 0, 4, e);
break;

case 1:
this.beginSortProcessure(t, 5, 9, e);
break;

case 2:
this.beginSortProcessure(t, 10, 12, e);
}
};
t.beginSortProcessure = function(t, e, n, o) {
for (var i = !0; i; ) {
i = !1;
for (a = e; a < n; a++) {
if ("undefined" == typeof t[a]) return;
if (t[a].getOrdinalValue() < t[a + 1].getOrdinalValue()) {
this.swapCard(e, n, t, a, a + 1);
i = !0;
}
}
}
for (i = !0; i; ) {
i = !1;
for (a = e; a < n; a++) {
0 == (m = t[a].getCardNumber()) && (m = 13);
0 == (h = t[a + 1].getCardNumber()) && (h = 13);
if (m < h) {
this.swapCard(e, n, t, a, a + 1);
i = !0;
}
}
}
for (var r = [], a = e; a <= n; a++) {
0 == (m = t[a].getCardNumber()) && (m = 13);
"undefined" != typeof r[m] && null != r[m] || (r[m] = 0);
r[m]++;
}
for (var s in r) {
if (4 == r[s]) for (var c = e; c <= n; c++) {
0 == (m = t[c].getCardNumber()) && (m = 13);
if (s == m) {
for (var u = c; u < c + 4; u++) this.swapCard(e, n, t, u - c + e, u);
return;
}
}
if (3 == r[s]) for (c = e; c <= n; c++) {
0 == (m = t[c].getCardNumber()) && (m = 13);
if (s == m) {
for (u = c; u < c + 3; u++) this.swapCard(e, n, t, u - c + e, u);
for (i = !0; i; ) {
i = !1;
for (var l = e + 3; l < n; l++) {
var h;
0 == (m = t[l].getCardNumber()) && (m = 13);
0 == (h = t[l + 1].getCardNumber()) && (h = 13);
if (m < h) {
this.swapCard(e, n, t, l, l + 1);
i = !0;
}
}
}
return;
}
}
}
for (var d in r) {
for (var p in r) if (2 == r[p] && p != d && 2 == r[d]) {
var f = 0;
for (u = e; u <= n; u++) {
0 == (m = t[u].getCardNumber()) && (m = 13);
if (p == m) {
this.swapCard(e, n, t, e + f, u);
f++;
}
}
for (u = e; u <= n; u++) {
0 == (m = t[u].getCardNumber()) && (m = 13);
if (d == m) {
this.swapCard(e, n, t, e + f, u);
f++;
}
}
return;
}
if (2 == r[d]) for (c = e; c <= n; c++) {
var m;
0 == (m = t[c].getCardNumber()) && (m = 13);
if (d == m) {
for (u = c; u < c + 2; u++) this.swapCard(e, n, t, u - c + e, u);
for (i = !0; i; ) {
i = !1;
for (l = e + 2; l < n; l++) {
var y = t[l].getCardNumber(), g = t[l + 1].getCardNumber();
0 == y && (y = 13);
0 == g && (g = 13);
if (y < g) {
this.swapCard(e, n, t, l, l + 1);
i = !0;
}
}
}
return;
}
}
}
if (0 == t[e].getCardNumber() && 4 == t[e + 1].getCardNumber() && 2 != o) for (a = e; a < n; a++) this.swapCard(e, n, t, a, a + 1);
0 == t[e].getCardNumber() && 2 == t[e + 1].getCardNumber() && 1 == t[e + 2].getCardNumber() && 2 == o && this.swapCard(e, n, t, e + 1, e + 2);
};
t.swapCard = function(t, e, n, o, i) {
o == i || o < t || o > e || i < t || i > e || this.swapCardInArray(n, o, i);
};
t.swapCardInArray = function(t, e, n) {
var o = t[n];
t[n] = t[e];
t[e] = o;
return t;
};
return t;
}();
n.MauBinhHandCardsManipulator = r;
var a = function() {
function t() {}
t.rearrange = function(t) {
var e = this.checkBaiRac3Sanh(t);
if (e) {
for (var n = [], o = 0; o < 3; o++) for (var i in e[o]) {
for (var r = -1, a = 0, s = t.length; a < s; a++) t[a].CardNumber == e[o][i] && t[a].OrdinalValue > -1 && (r = a);
n.push(t[r]);
t.splice(r, 1);
}
return n;
}
return !1;
};
t.checkBaiRac3Sanh = function(t) {
var e = this.createSortedArray(t), n = [];
for (var o in e) {
null != n[e[o]] && (n[e[o]] = 0);
n[e[o]]++;
}
var i = this.checkSanhOf3(e), r = [];
for (var o in i) {
var a = i[o];
r.push([ a, a + 1, a + 2 ]);
}
var s = this.checkSanhOf5(e), c = [];
for (var o in s) {
a = s[o];
c.push([ a, a + 1, a + 2, a + 3, a + 4 ]);
}
for (var u = 0; u < c.length; u++) for (var l = u; l < c.length; l++) for (var h = 0; h < r.length; h++) if (this.checkSanhVaild(n, c[l], c[u], r[h])) return [ c[l], c[u], r[h] ];
return !1;
};
t.checkSanhVaild = function(t, e, n, o) {
var i = [];
for (var r in e) {
13 == e[r] && (e[r] = 0);
null != i[e[r]] && (i[e[r]] = 0);
i[e[r]]++;
}
for (var r in n) {
13 == n[r] && (n[r] = 0);
null != i[n[r]] && (i[n[r]] = 0);
i[n[r]]++;
}
for (var r in o) {
13 == o[r] && (o[r] = 0);
null != i[o[r]] && (i[o[r]] = 0);
i[o[r]]++;
}
if (t.length != i.length) return !1;
for (var a in t) if (t[a] != i[a]) return !1;
return !0;
};
t.createSortedArray = function(t) {
var e = [];
for (var n in t) e.push(t[n].CardNumber);
for (var o = !0; o; ) {
o = !1;
for (var i = 0; i < e.length - 1; i++) if (e[i] > e[i + 1]) {
var r = e[i];
e[i] = e[i + 1];
e[i + 1] = r;
o = !0;
}
}
return e;
};
t.checkSanhOf3 = function(t) {
var e = [];
if (0 == t[0]) var n = !0;
for (var o = 0; o < t.length; o++) if (t[o] != t[o + 1]) {
for (var i = 1, r = o + 1; r < t.length; r++) t[r] - t[o] == i && i++;
i >= 3 ? e.push(t[o]) : n && 11 == t[o] && 2 == i && e.push(t[o]);
}
return e;
};
t.checkSanhOf5 = function(t) {
var e = [];
if (0 == t[0]) var n = !0;
for (var o = 0; o < t.length; o++) if (t[o] != t[o + 1]) {
for (var i = 1, r = o + 1; r < t.length; r++) t[r] - t[o] == i && i++;
i >= 5 ? e.push(t[o]) : n && 9 == t[o] && 4 == i && e.push(t[o]);
}
return e;
};
return t;
}();
n.MauBinh3SanhChecker = a;
cc._RF.pop();
}, {
"./MauBinhConst": "MauBinhConst"
} ],
MauBinhUI: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "92352jCgh1HVrUY+hWoMTZP", "MauBinhUI");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.menu = null;
e.nodeDialog = null;
e.btnComplete = null;
e.btnSwap = null;
e.btnSort = null;
e.pfCardItem = null;
e.sfStatusChi = [];
e.sfResultType = [];
return e;
}
r([ c(cc.Node) ], e.prototype, "menu", void 0);
r([ c(cc.Node) ], e.prototype, "nodeDialog", void 0);
r([ c(cc.Node) ], e.prototype, "btnComplete", void 0);
r([ c(cc.Node) ], e.prototype, "btnSwap", void 0);
r([ c(cc.Node) ], e.prototype, "btnSort", void 0);
r([ c(cc.Prefab) ], e.prototype, "pfCardItem", void 0);
r([ c(cc.SpriteFrame) ], e.prototype, "sfStatusChi", void 0);
r([ c(cc.SpriteFrame) ], e.prototype, "sfResultType", void 0);
return r([ s ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {} ],
NumberUtilGameCard: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "8b6e7Ntw5FPEa4nPo/V1XoY", "NumberUtilGameCard");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./FormatUtilGameCard"), s = cc._decorator, c = s.ccclass, u = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e._animationEnabled = !0;
e._animationScale = !1;
e._spendNotAnimation = !1;
e._animationTime = .5;
e._number = 0;
e._currentNum = 0;
e._bonusNum = 0;
e._delayTime = .05;
e.m_isShort = !1;
e.m_isMoneyUsd = !1;
e.m_isMoneyAdd = !1;
return e;
}
e.prototype.start = function() {};
e.prototype.setNumber = function(t) {
if (t != this._number) {
if (!this._animationEnabled || t < this._number && this._spendNotAnimation) {
var e = "";
this.m_isShort || (e = a.default.formatNumber(t));
if (this._animationEnabled) {
this.node.stopAllActions();
this.unschedule(this.increase);
this.unschedule(this.EndAnimation);
}
this.m_isMoneyUsd && (e = cc.js.formatStr("$%s", e));
this.label.string = e;
this._bonusNum = t;
this._currentNum = t;
} else {
var n = this._animationTime / this._delayTime;
this._bonusNum = (t - this._currentNum) / n;
this.node.stopAllActions();
this.unschedule(this.increase);
this.unschedule(this.EndAnimation);
this.schedule(this.increase, this._delayTime);
this.schedule(this.EndAnimation, this._animationTime);
}
this._number = t;
}
};
e.prototype.EndAnimation = function() {
this.unschedule(this.increase);
this.unschedule(this.EndAnimation);
var t = "";
this.m_isShort || (t = a.default.formatNumber(this._number));
this.m_isMoneyUsd && (t = cc.js.formatStr("$%s", t));
this.m_isMoneyAdd && (t = cc.js.formatStr("+%s", t));
this.label.string = t;
if (this._animationScale) {
var e = cc.scaleTo(.4, 1);
this.node.runAction(e);
}
this._currentNum = this._number;
};
e.prototype.increase = function() {
this._currentNum += this._bonusNum;
var t = "";
this.m_isShort || (t = a.default.formatNumber(Math.round(this._currentNum)));
this.m_isMoneyUsd && (t = cc.js.formatStr("$%s", t));
this.m_isMoneyAdd && (t = cc.js.formatStr("+%s", t));
this.label.string = t;
if (this._animationScale) {
var e;
e = cc.scaleBy(.1, 1.01);
this.node.runAction(e);
}
};
e.prototype.setEnableAnimation = function(t) {
this._animationEnabled = t;
};
e.prototype.setEnableAnimationScale = function(t) {
this._animationScale = t;
};
e.prototype.setSpendNotAnimation = function(t) {
this._spendNotAnimation = t;
};
e.prototype.setAnimationTime = function(t) {
this._animationTime = t;
this._animationEnabled = t > 0;
};
e.prototype.getNumber = function() {
return this._number;
};
e.prototype.setValueNumber = function(t) {
this.label.string = "" + t;
this._number = t;
this._currentNum = t;
};
e.prototype.isEnabledAnimation = function() {
return this._animationEnabled;
};
e.prototype.getAnimationTime = function() {
return this._animationTime;
};
e.prototype.setMoneyFormat = function(t) {
this.m_isShort = t;
var e = "";
this.m_isShort || (e = a.default.formatNumber(this._currentNum));
this.m_isMoneyUsd && (e = cc.js.formatStr("$%s", e));
this.label.string = e;
};
e.prototype.setMoneyUsd = function(t) {
this.m_isMoneyUsd = t;
};
e.prototype.setMoneyAdd = function(t) {
this.m_isMoneyAdd = t;
};
r([ u(cc.Label) ], e.prototype, "label", void 0);
return r([ c ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"./FormatUtilGameCard": "FormatUtilGameCard"
} ],
PlayerChatItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a3d0a7bz1dPkKILkyN1SkBt", "PlayerChatItem");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lblChat = null;
return e;
}
e.prototype.showAction = function() {
this.lblChat.node.stopAllActions();
this.lblChat.node.runAction(cc.sequence(cc.jumpBy(1, cc.v2(0, 0), 5, 3), cc.delayTime(4), cc.callFunc(function() {
this.node.active = !1;
this.lblChat.string = "";
}.bind(this))));
};
r([ c(cc.Label) ], e.prototype, "lblChat", void 0);
return r([ s ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {} ],
PlayerConst: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3d0a4LaUONFO7KH4Lksdghh", "PlayerConst");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ConnectionStatus = n.PlayerStatus = void 0;
(function(t) {
t[t.Thua = 0] = "Thua";
t[t.BoLuot = 1] = "BoLuot";
t[t.Cong = 2] = "Cong";
t[t.Ung = 3] = "Ung";
t[t.ToiTrang = 4] = "ToiTrang";
t[t.XinSam = 5] = "XinSam";
t[t.ChatSam = 6] = "ChatSam";
t[t.DenSam = 7] = "DenSam";
t[t.AnSam = 8] = "AnSam";
t[t.KetThuc = 9] = "KetThuc";
t[t.Hoa = 10] = "Hoa";
t[t.Den = 11] = "Den";
t[t.BinhLung = 12] = "BinhLung";
t[t.Fold = 13] = "Fold";
t[t.ThuaSapHam = 14] = "ThuaSapHam";
t[t.Call = 15] = "Call";
t[t.Check = 16] = "Check";
t[t.To = 17] = "To";
t[t.AllIn = 18] = "AllIn";
t[t.Raise = 19] = "Raise";
t[t.Bet = 20] = "Bet";
t[t.Nhuong = 21] = "Nhuong";
t[t.UpBai = 22] = "UpBai";
t[t.To14 = 23] = "To14";
t[t.To12 = 24] = "To12";
t[t.ToX2 = 25] = "ToX2";
t[t.ToTatCa = 26] = "ToTatCa";
t[t.Thang = 27] = "Thang";
t[t.UnknownStatus = 28] = "UnknownStatus";
t[t.BoSam = 29] = "BoSam";
})(n.PlayerStatus || (n.PlayerStatus = {}));
(function(t) {
t[t.GuestInGame = 0] = "GuestInGame";
t[t.PlayingInGame = 1] = "PlayingInGame";
t[t.RegisterLeaveGame = 2] = "RegisterLeaveGame";
})(n.ConnectionStatus || (n.ConnectionStatus = {}));
cc._RF.pop();
}, {} ],
PlayerTime: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "5cbcdOcBENEDpEY6JkaKTgh", "PlayerTime");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyCardGameVar"), s = cc._decorator, c = s.ccclass, u = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lblTimeRemain = null;
e.progress = null;
e.imgPoint = null;
e.bgPoint = null;
e._time = 0;
e.vibrate = !1;
return e;
}
e.prototype.setTime = function(t, e) {
var n = this;
void 0 === e && (e = 100);
this.hide();
this._time = t;
var o = this;
e || (e = 100);
if (null != this.progress) {
this.progress.fillRange = e / 100;
this.progress.node.active = !0;
this.progressTween = cc.tween(this.progress.node).to(this._time, {
scale: 1
}, {
progress: function(t, e, n, i) {
o.progress.node.scale = .88;
o.progress.fillRange = i;
return t + (e - t) * i;
}
}).call(function() {
n.hide();
}).start();
}
this.bgPoint && (this.bgPoint.active = !0);
this.bgPoint && this.bgPoint.runAction(cc.rotateBy(t, -360));
this.imgPoint && this.imgPoint.runAction(cc.sequence(cc.scaleTo(.3, .8, .8), cc.scaleTo(.5, 1, 1)).repeatForever());
if (null != this.lblTimeRemain) {
this.lblTimeRemain.string = t;
this.lblTimeRemain.node.active = !0;
}
this.schedule(this.updateTime, 1);
};
e.prototype.updateTime = function() {
if (this._time > 0) {
this._time--;
a.default.timeBinh = this._time;
3 == this._time && this.vibrate;
if (this.lblTimeRemain) {
this.lblTimeRemain.string = this._time + "";
this.actionForText(this.lblTimeRemain);
}
} else {
this.unschedule(this.updateTime);
this.hide();
}
};
e.prototype.actionForText = function(t) {
t.node.opacity = 0;
var e = t.node.position.y, n = t.node.position.x;
t.node.position = cc.v2(n, e + 60);
t.node.runAction(cc.spawn(cc.fadeIn(.2), cc.moveTo(.3, t.node.position.x, e).easing(cc.easeBackOut())));
};
e.prototype.getTime = function() {
return this._time;
};
e.prototype.getPercent = function() {
return 100 * this.progress.fillRange;
};
e.prototype.hide = function() {
this.bgPoint && (this.bgPoint.active = !1);
this.bgPoint && (this.bgPoint.angle = 0);
this.imgPoint && this.imgPoint.stopAllActions();
this.progressTween && this.progressTween.stop();
this.progress && (this.progress.node.active = !1);
this.lblTimeRemain && (this.lblTimeRemain.node.active = !1);
this.unschedule(this.updateTime);
};
r([ u(cc.Label) ], e.prototype, "lblTimeRemain", void 0);
r([ u(cc.Sprite) ], e.prototype, "progress", void 0);
r([ u(cc.Node) ], e.prototype, "imgPoint", void 0);
r([ u(cc.Node) ], e.prototype, "bgPoint", void 0);
return r([ c ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"../LobbyCardGameVar": "LobbyCardGameVar"
} ],
Player: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6e16bMcOY9LF4K231DgIl1s", "Player");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../../chat/ChatVar"), s = t("../LobbyCardGameConst"), c = t("../LobbyCardGameVar"), u = t("../../../../base_slot/util/FormatUtil"), l = t("./PlayerChatItem"), h = t("./PlayerConst"), d = t("./PlayerTime"), p = t("./StatusPlayers"), f = cc._decorator, m = f.ccclass, y = f.property, g = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lblUserName = null;
e.lblBalance = null;
e.lblMoneyResult = null;
e.nodeGroupParticleOnTop = null;
e.nodeGroupParticleOnBottom = null;
e.winEffect = null;
e.PlayerChatItem = null;
e.PlayerChatEmotion = null;
e.ImgLeave = null;
e.ImgOwner = null;
e.pnlResult = null;
e._nPositionInRoom = 0;
e.avatar = null;
e.PlayerTime = null;
e._userName = "";
e._llAccountID = -1e3;
e._llTotalStar = null;
e._llStar = null;
e._nStatus = 0;
e._nConnectionStatus = 0;
e._szRemoteIP = "";
e._isPlayInRoom = !1;
e._statusInGame = 0;
e._nMaxCards = 0;
return e;
}
e.prototype.commonReset = function() {
this.setPlayerStatus(h.PlayerStatus.UnknownStatus);
};
e.prototype.initCommonParameters = function(t) {
lngui.ZLog.log("initCommonParameters ===" + JSON.stringify(t));
Number.isInteger(t.AccountID) && this.setAccountID(t.AccountID);
Number.isInteger(t.Status) && this.setStatus(t.Status);
"string" == typeof t.RemoteIP && this.setRemoteIP(t.RemoteIP);
Number.isInteger(t.ConnectionStatus) && this.setConnectionStatus(t.ConnectionStatus);
1 != t.RegisterLeaveRoom && 0 != t.RegisterLeaveRoom || this.setRegisterLeaveRoom(t.RegisterLeaveRoom);
Number.isInteger(t.Position);
lngui.ZLog.log("initCommonParameters ===11111");
if (t.Account) {
var e = t.Account;
"string" == typeof e.NickName && this.setUserName(e.NickName);
Number.isInteger(e.Star) && this.setBalance(e.Star);
this.node.active = !0;
lngui.ZLog.log(" initCommonParameters ===2222222222");
}
};
e.prototype.updateAccountInfo = function(t) {
if ("object" == typeof t && Number.isInteger(t.Status) && (1 == t.RegisterLeaveRoom || 0 == t.RegisterLeaveRoom) && Number.isInteger(t.ConnectionStatus)) {
var e = t.Status, n = t.RegisterLeaveRoom, o = t.ConnectionStatus, i = t.Account;
if ("object" == typeof i) {
if (Number.isInteger(i.Star)) {
var r = lngui.UserManager.instance.mainUserInfo.Money;
console.log("-=mmmm ", r);
this.setBalance(i.Star);
}
this.setStatus(e);
this.setRegisterLeaveRoom(n);
this.setConnectionStatus(o);
}
}
};
e.prototype.reset = function() {
this.lblMoneyResult.node.active = !1;
};
e.prototype.clearAll = function() {
this.reset();
};
e.prototype.getAccountID = function() {
return this._llAccountID;
};
e.prototype.setAccountID = function(t) {
this._llAccountID = t;
};
e.prototype.getTotalStar = function() {
return this._llTotalStar;
};
e.prototype.setTotalStar = function(t) {
this._llTotalStar = t;
};
e.prototype.getStar = function() {
return this._llStar;
};
e.prototype.setStar = function(t) {
this._llStar = t;
};
e.prototype.getStatus = function() {
return this._nStatus;
};
e.prototype.setStatus = function(t) {
this._nStatus = t;
};
e.prototype.getRemoteIP = function() {
return this._szRemoteIP;
};
e.prototype.setRemoteIP = function(t) {
this._szRemoteIP = t;
};
e.prototype.setUserName = function(t) {
this._userName = t;
this.lblUserName && (this.lblUserName.string = t);
};
e.prototype.enableStateInRoom = function(t) {
this._isPlayInRoom = t;
this.avatar.node.opacity = t ? 255 : 100;
};
e.prototype.getStateInRoom = function() {
return this._isPlayInRoom;
};
e.prototype.setConnectionStatus = function(t) {
this._nConnectionStatus = t;
this._nConnectionStatus == h.ConnectionStatus.RegisterLeaveGame ? this.setRegisterLeaveRoom(!0) : this.setRegisterLeaveRoom(!1);
};
e.prototype.setRegisterLeaveRoom = function(t) {
this.ImgLeave && (this.ImgLeave.active = t);
};
e.prototype.getUserName = function() {
return this._userName;
};
e.prototype.setBalance = function(t) {
this.lblBalance.string = u.default.formatNumber(t);
this.getAccountID() === lngui.UserManager.instance.mainUserInfo.AccountID && lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, t);
};
e.prototype.setMoneyChange = function(t, e) {
void 0 === e && (e = !0);
console.log(t);
this.lblMoneyResult.node.color = cc.Color.WHITE;
var n = "";
if (t >= 0) n = "+" + u.default.formatNumber(t); else {
n = u.default.formatNumber(t);
this.lblMoneyResult.node.color = cc.Color.RED;
}
this.lblMoneyResult.node.opacity = 255;
this.lblMoneyResult.node.active = !0;
this.lblMoneyResult.string = n;
var o = cc.sequence(cc.delayTime(3), cc.fadeOut(1)), i = cc.sequence(cc.delayTime(4), cc.callFunc(function() {
this.lblMoneyResult.node.active = !1;
}, this));
o.setTag(1);
i.setTag(2);
this.lblMoneyResult.node.stopAllActions();
this.lblMoneyResult.node.position.y = 0;
this.lblMoneyResult.node.runAction(cc.moveTo(.5, cc.v2(0, 75)));
if (e) {
this.lblMoneyResult.node.runAction(o);
this.lblMoneyResult.node.runAction(i);
}
};
e.prototype.setAvatar = function(t) {
this.avatar && (this.avatar.spriteFrame = t);
};
e.prototype.setPositionInRoom = function(t) {
this._nPositionInRoom = t;
};
e.prototype.getPositionInRoom = function() {
return this._nPositionInRoom;
};
e.prototype.setWiner = function(t) {
void 0 === t && (t = !1);
t ? this.setPlayerStatus(h.PlayerStatus.Thang) : this.setPlayerStatus(h.PlayerStatus.Thua);
};
e.prototype.setPlayerStatus = function(t, e, n) {
void 0 === e && (e = !1);
void 0 === n && (n = 3);
this._statusInGame = t;
this.nodeGroupParticleOnTop && (this.nodeGroupParticleOnTop.active = !1);
this.nodeGroupParticleOnBottom && (this.nodeGroupParticleOnBottom.active = !1);
this.pnlResult && (this.pnlResult.node.active = !1);
switch (t) {
case h.PlayerStatus.Thang:
case h.PlayerStatus.ToiTrang:
this.nodeGroupParticleOnTop.active = !0;
this.nodeGroupParticleOnBottom.active = !0;
this.nodeGroupParticleOnTop.opacity = 255;
this.nodeGroupParticleOnBottom.opacity = 255;
this.winEffect.setAnimation(0, "Idle", !0);
this.winEffect.setSkin(t == h.PlayerStatus.Thang ? "Thang" : "Toi-Trang");
this.winEffect.node.scale = h.PlayerStatus.Thang ? 1 : .7;
this.scheduleOnce(function() {
this.nodeGroupParticleOnTop.runAction(cc.fadeOut(.5));
this.nodeGroupParticleOnBottom.runAction(cc.fadeOut(.5));
}.bind(this), 5);
break;

case h.PlayerStatus.Thua:
case h.PlayerStatus.Hoa:
case h.PlayerStatus.BoLuot:
case h.PlayerStatus.Ung:
case h.PlayerStatus.XinSam:
case h.PlayerStatus.ChatSam:
case h.PlayerStatus.DenSam:
case h.PlayerStatus.AnSam:
case h.PlayerStatus.BoSam:
case h.PlayerStatus.ThuaSapHam:
case h.PlayerStatus.Cong:
t == h.PlayerStatus.Cong && (t = c.default.gameID == s.CARD_GAMEID.GAME_TLMN_DL ? 2 : 9);
this.pnlResult && (this.pnlResult.spriteFrame = p.default.instance.imgs[t]);
this.pnlResult && (this.pnlResult.node.active = !0);
}
this.pnlResult && this.pnlResult.node.stopAllActions();
this.pnlResult && this.pnlResult.node.runAction(cc.sequence(cc.scaleTo(0, 0), cc.scaleTo(.2, 1).easing(cc.easeBackOut())));
if (e) {
this.pnlResult && this.pnlResult.node.stopAllActions();
this.pnlResult && this.pnlResult.node.runAction(cc.sequence(cc.delayTime(n), cc.callFunc(function() {
this.pnlResult.node.active = !1;
}.bind(this))));
}
};
e.prototype.getAvataPosition = function() {
return cc.v2(this.node.parent.position.x, this.node.parent.position.y);
};
e.prototype.receiveMessage = function(t) {
var e = t.substr(1, t.length - 1);
if (-1 === a.default.STICKER_NAME.indexOf(e)) {
this.PlayerChatItem.lblChat.string = t;
this.PlayerChatItem.node.active = !0;
this.PlayerChatItem.showAction();
} else this.receiveSticker(e);
};
e.prototype.receiveSticker = function(t) {
this.PlayerChatEmotion.node.active = !0;
this.PlayerChatEmotion.setAnimation(0, t, !0);
this.PlayerChatEmotion.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
this.PlayerChatEmotion.node.active = !1;
}.bind(this))));
};
e.prototype.setLoadingStatus = function(t) {
if (!(t < 0)) {
this.PlayerTime.setTime(t);
this.setPlayerStatus(h.PlayerStatus.UnknownStatus);
}
};
e.prototype.removeLoadingStatus = function() {
this.PlayerTime.hide();
};
r([ y(cc.Label) ], e.prototype, "lblUserName", void 0);
r([ y(cc.Label) ], e.prototype, "lblBalance", void 0);
r([ y(cc.Label) ], e.prototype, "lblMoneyResult", void 0);
r([ y(cc.Node) ], e.prototype, "nodeGroupParticleOnTop", void 0);
r([ y(cc.Node) ], e.prototype, "nodeGroupParticleOnBottom", void 0);
r([ y(sp.Skeleton) ], e.prototype, "winEffect", void 0);
r([ y(l.default) ], e.prototype, "PlayerChatItem", void 0);
r([ y(sp.Skeleton) ], e.prototype, "PlayerChatEmotion", void 0);
r([ y(cc.Node) ], e.prototype, "ImgLeave", void 0);
r([ y(cc.Node) ], e.prototype, "ImgOwner", void 0);
r([ y(cc.Sprite) ], e.prototype, "pnlResult", void 0);
r([ y ], e.prototype, "_nPositionInRoom", void 0);
r([ y(cc.Sprite) ], e.prototype, "avatar", void 0);
r([ y(d.default) ], e.prototype, "PlayerTime", void 0);
r([ y ], e.prototype, "_userName", void 0);
r([ y ], e.prototype, "_llAccountID", void 0);
r([ y ], e.prototype, "_llTotalStar", void 0);
r([ y ], e.prototype, "_llStar", void 0);
r([ y ], e.prototype, "_nStatus", void 0);
r([ y ], e.prototype, "_nConnectionStatus", void 0);
r([ y ], e.prototype, "_szRemoteIP", void 0);
r([ y ], e.prototype, "_isPlayInRoom", void 0);
r([ y ], e.prototype, "_statusInGame", void 0);
r([ y ], e.prototype, "_nMaxCards", void 0);
return r([ m ], e);
}(cc.Component);
n.default = g;
cc._RF.pop();
}, {
"../../../../base_slot/util/FormatUtil": void 0,
"../../../chat/ChatVar": "ChatVar",
"../LobbyCardGameConst": "LobbyCardGameConst",
"../LobbyCardGameVar": "LobbyCardGameVar",
"./PlayerChatItem": "PlayerChatItem",
"./PlayerConst": "PlayerConst",
"./PlayerTime": "PlayerTime",
"./StatusPlayers": "StatusPlayers"
} ],
PokerConst: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "98bb5tvVvlNJqv2cL9/6Hef", "PokerConst");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.PokerDefine = n.PokerPlayerAction = n.PokerAction = n.PokerPhrases = n.PokerAuto = n.PokerConfig = void 0;
(function(t) {
t[t.TAG_CHIABAI = 2200] = "TAG_CHIABAI";
t[t.TAG_CHIP = 2100] = "TAG_CHIP";
t[t.NUMBER_ROOM_PLAYER = 6] = "NUMBER_ROOM_PLAYER";
t[t.OFFSET_X_CHIP_ON_POT = 72] = "OFFSET_X_CHIP_ON_POT";
})(n.PokerConfig || (n.PokerConfig = {}));
(function(t) {
t[t.NONE = 0] = "NONE";
t[t.CHECK_OR_FOLD = 1] = "CHECK_OR_FOLD";
t[t.CALL = 5] = "CALL";
t[t.CHECK = 3] = "CHECK";
t[t.CALL_ANY = 2] = "CALL_ANY";
t[t.FOLD = 4] = "FOLD";
})(n.PokerAuto || (n.PokerAuto = {}));
(function(t) {
t[t.WAITING = 1] = "WAITING";
t[t.PREFLOP = 2] = "PREFLOP";
t[t.FLOP = 3] = "FLOP";
t[t.TURN = 4] = "TURN";
t[t.RIVER = 5] = "RIVER";
t[t.SHOWDOWN = 6] = "SHOWDOWN";
t[t.AFTER_SHOWDOWN = 7] = "AFTER_SHOWDOWN";
})(n.PokerPhrases || (n.PokerPhrases = {}));
(function(t) {
t[t.WAITING = -1] = "WAITING";
t[t.CHECK = 1] = "CHECK";
t[t.BET = 2] = "BET";
t[t.CALL = 3] = "CALL";
t[t.RAISE = 4] = "RAISE";
t[t.FOLD = 5] = "FOLD";
t[t.ALLIN = 6] = "ALLIN";
t[t.FLIP = 7] = "FLIP";
})(n.PokerAction || (n.PokerAction = {}));
(function(t) {
t[t.Unknown = 0] = "Unknown";
t[t.BaiCao = 1] = "BaiCao";
t[t.Doi = 2] = "Doi";
t[t.Thu = 3] = "Thu";
t[t.XamChi = 4] = "XamChi";
t[t.Sanh = 5] = "Sanh";
t[t.Thung = 6] = "Thung";
t[t.CuLu = 7] = "CuLu";
t[t.TuQuy = 8] = "TuQuy";
t[t.ThungPhaSanh = 9] = "ThungPhaSanh";
t[t.SanhRong = 10] = "SanhRong";
t[t.WAITING = -1] = "WAITING";
t[t.CHECK = 1] = "CHECK";
t[t.BET = 2] = "BET";
t[t.CALL = 3] = "CALL";
t[t.RAISE = 4] = "RAISE";
t[t.FOLD = 5] = "FOLD";
t[t.ALLIN = 6] = "ALLIN";
})(n.PokerPlayerAction || (n.PokerPlayerAction = {}));
var o = function() {
function t() {}
t._maxChipMulti = 100;
t._minChipMulti = 10;
t.STR_BESTHAND_INFO_IMAGE = {
1: "Bai-Cao",
2: "Mot-Doi",
3: "Hai-Doi",
4: "Xam",
5: "Sanh",
6: "Thung",
7: "Cu-Lu",
8: "Tu-Quy",
9: "Thung_Pha-Sanh",
10: "Thung_Pha-Sanh"
};
t.STR_BESTHAND_INFO = {
1: "MẬU THẦU",
2: "ĐÔI",
3: "HAI ĐÔI",
4: "XÁM",
5: "SẢNH",
6: "THÙNG",
7: "CÙ LŨ",
8: "TỨ QUÝ",
9: "THÙNG PHÁ SẢNH",
10: "THÙNG PHÁ SẢNH"
};
return t;
}();
n.PokerDefine = o;
cc._RF.pop();
}, {} ],
PokerHandler: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ee684IywbNORaXZER6Ig3wB", "PokerHandler");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./PokerConst"), s = t("./PokerRoom"), c = cc._decorator, u = c.ccclass, l = c.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.Room = null;
return e;
}
e.prototype.onBtnAll = function(t, e) {
switch (e) {
case "closeMenu":
this.closePanel();
break;

case "back":
this.Room.onBtnBack();
break;

case "menu":
this.onBtnMenu();
break;

case "chat":
this.onBtnChat();
break;

case "buyin":
this.onBtnNapChip();
break;

case "add":
this.onBtnAdd();
break;

case "minus":
this.onBtnMinus();
break;

case "allin":
case "nap":
this.onBtnAllIn();
break;

case "bobai":
this.onBtnBoBai();
break;

case "xembai":
this.onBtnXemBai();
break;

case "theo":
this.onBtnTheo();
break;

case "tangcuoc":
this.onBtnTangCuoc();
break;

case "bet":
this.onBtnBet();
break;

case "latbai":
this.onBtnLatBai();
break;

case "help":
this.onBtnHelp();
break;

case "tutorial":
this.Room.UI.menu.active = !0;
}
};
e.prototype.onBtnChat = function() {
this.Room.pnlChat.node.active = !0;
};
e.prototype.onBtnMenu = function() {
this.Room.UI.menu.active = !0;
};
e.prototype.onBtnAdd = function() {
var t = this.Room._currentBetValue + this.Room._nMinBet;
t > this.Room._nMaxChip && (t = this.Room._nMaxChip);
this.Room._currentBetValue = t;
this.Room.showCurrentBetValue();
};
e.prototype.onBtnMinus = function() {
var t = this.Room._currentBetValue - this.Room._nMinBet;
t < this.Room._nMinChip && (t = this.Room._nMinChip);
this.Room._currentBetValue = t;
this.Room.showCurrentBetValue();
};
e.prototype.onBtnAllIn = function() {
this.Room._currentBetValue = this.Room._nMaxChip;
this.Room.showCurrentBetValue();
};
e.prototype.onBtnNapChip = function() {
this.Room.showBuyChip(!0);
};
e.prototype.sliderEvent = function() {
var t = this.Room.UI.sliderChip.progress;
this.Room._currentBetValue = t * this.Room._nMaxChip;
this.Room._currentBetValue > this.Room._nMaxChip && (this.Room._currentBetValue = this.Room._nMaxChip);
this.Room._currentBetValue < this.Room._nMinChip && (this.Room._currentBetValue = this.Room._nMinChip);
this.Room.showCurrentBetValue();
};
e.prototype.onBtnBoBai = function() {
this.Room.Bet(0, a.PokerAction.FOLD);
};
e.prototype.onBtnXemBai = function() {
this.Room.Bet(0, a.PokerAction.CHECK);
};
e.prototype.onBtnTheo = function() {
this.Room.Bet(0, a.PokerAction.CALL);
};
e.prototype.onBtnTangCuoc = function() {
var t = this.Room.UI.btnTangCuoc.node.name;
if (t == a.PokerAction.RAISE.toString() || t == a.PokerAction.BET.toString()) {
this.Room.UI.pnlTangCuoc.active = !0;
this.Room.UI.btnBet.active = !0;
this.Room.UI.btnTangCuoc.node.active = !1;
} else if (t == a.PokerAction.ALLIN.toString()) {
this.Room.UI.pnlTangCuoc.active = !1;
this.Room.Bet(this.Room._nMaxChip, a.PokerAction.ALLIN);
}
};
e.prototype.onBtnBet = function() {
this.Room._currentBetValue < this.Room._nMaxChip ? this.Room.Bet(this.Room._currentBetValue, parseInt(this.Room.UI.btnTangCuoc.node.name)) : this.Room.Bet(this.Room._currentBetValue, a.PokerAction.ALLIN);
this.Room.UI.pnlTangCuoc.active = !1;
this.Room.UI.btnBet.active = !1;
this.Room.UI.btnTangCuoc.node.active = !0;
};
e.prototype.onBtnLatBai = function() {
this.Room.FlipCards();
this.Room.UI.btnLatBai.active = !1;
};
e.prototype.onBtnHelp = function() {
this.Room.UI.pnlHelp.active = !0;
};
e.prototype.closePanel = function() {
this.Room.UI.pnlHelp.active ? this.Room.UI.pnlHelp.active = !1 : this.Room.UI.menu.active = !1;
};
r([ l(s.default) ], e.prototype, "Room", void 0);
return r([ u ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"./PokerConst": "PokerConst",
"./PokerRoom": "PokerRoom"
} ],
PokerPhrase: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "12f37MgX7BPqK8/rt2iWd20", "PokerPhrase");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../common/scripts/Card/PlayerConst"), s = t("./PokerRoom"), c = t("../../common/scripts/LobbyCardGameVar"), u = cc._decorator, l = u.ccclass, h = u.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.PokerRoom = null;
e._dataShowDow = null;
return e;
}
e.prototype.phraseCommon = function(t) {
var e = t.Players;
for (var n in e) if (null != e[n]) {
var o = e[n], i = o.AccountID, r = o.Chips, s = this.PokerRoom.getPlayer(i);
if (s && s.getStatus() == a.ConnectionStatus.PlayingInGame) {
s.setPlayerStatus(a.PlayerStatus.UnknownStatus);
s.acceptBet();
s._nBetInRound;
s.resetStatus();
s.setChip(r);
s._isFold = o.IsFold;
s._isFold || s.initCards(o.Cards, !0);
}
if (i == lngui.UserManager.instance.mainUserInfo.AccountID) {
o.AutoList;
var c = o.BestHandInfo.Name;
s.setBestHandInfo(c);
!o.IsFold && o.Cards && o.Cards[0] && o.Cards[0].OrdinalValue < 0 && this.PokerRoom.reEnterLobby("BAI UP");
}
}
};
e.prototype.phraseWaiting = function(t) {
this.PokerRoom.resetGame();
1 == this.PokerRoom.listPlayer.length && this.PokerRoom.setMessageForGame(c.default.NOTICE.STR_CHO_NGUOI_CHOI);
this.PokerRoom.UI.btnNapChip.active = !0;
this.PokerRoom.UI.panelBet.active = !1;
var e = this.PokerRoom.getPlayer(this.PokerRoom._nDealer);
e && e.node.active && e.imgDealer.active && e.setDealer(!1);
this.PokerRoom._nDealer = t.GameLoop.Dealer;
var n = this.PokerRoom.getPlayer(this.PokerRoom._nDealer);
n && n.node.active && n.setDealer(!0);
var o = t.Players;
for (var i in o) if (null != o[i]) {
var r = o[i], a = r.AccountID, s = r.Chips, u = (r.Status, r.IsAutoBuyIn), l = (r.Result, 
this.PokerRoom.getPlayer(a));
if (l) {
l.commonReset();
l.reset();
l.resetStatus();
l.updateAccountInfo(r);
l.setChip(s);
}
if (a == lngui.UserManager.instance.mainUserInfo.AccountID) {
this.PokerRoom._nMyCurrentChip = s;
this.PokerRoom._nMyCurrentChip < 10 * this.PokerRoom._nMinBet * this.PokerRoom._nRateChip && (this.PokerRoom.UI.btnNapChip.active = !0);
!u && s < 2 * this.PokerRoom._nMinBet && this.PokerRoom.showBuyChip(!0);
}
}
};
e.prototype.phrasePreFlop = function(t, e) {
this.PokerRoom.UI.btnNapChip.active = !1;
this.PokerRoom.showBuyChip(!1);
var n = this.PokerRoom.getPlayer(this.PokerRoom._nDealer);
n && n.node.active && n.imgDealer.active && n.setDealer(!1);
this.PokerRoom._nDealer = t.GameLoop.Dealer;
var o = this.PokerRoom.getPlayer(this.PokerRoom._nDealer);
o && o.node.active && o.setDealer(!0);
this.PokerRoom._nCountActivePlayer = t.CountActivePlayer;
this.PokerRoom.setCurrentGameLoopId(t.CurrentGameLoopID);
var i = t.Players;
for (var r in i) if (null != i[r]) {
var s = i[r];
if ("undefined" == typeof s.AccountID) return;
var c = s.AccountID, u = s.Chips, l = s.BetInRound, h = s.Status, d = (s.Result, 
this.PokerRoom.getPlayer(c));
if (d && h == a.ConnectionStatus.PlayingInGame) {
d.setStatus(h);
d.enableStateInRoom(!0);
d.setChip(u);
d._isFold = s.IsFold;
d.initCards(s.Cards);
s.IsBigBlind && d.setBigBlindTag();
s.IsSmallBlind && d.setSmallBlindTag();
d.setBetInRound(l);
} else d && h == a.ConnectionStatus.GuestInGame && d.enableStateInRoom(!1);
if (c == lngui.UserManager.instance.mainUserInfo.AccountID) {
var p = s.BestHandInfo.Name;
d.setBestHandInfo(p);
}
}
this.PokerRoom.setMessageForGame(" ");
this.PokerRoom.chiaBai(e);
};
e.prototype.phraseShowdown = function(t) {
this._dataShowDow = t;
this.PokerRoom.UI.panelBet.active = !1;
var e = t.Players;
for (var n in e) if (null != e[n]) {
var o = e[n], i = o.AccountID, r = (o.Chips, o.BetInRound, o.Result), s = this.PokerRoom.getPlayer(i);
if (s && s.getStatus() == a.ConnectionStatus.PlayingInGame) {
s.setPlayerStatus(a.PlayerStatus.UnknownStatus);
s.updateAccountInfo(o);
s.setResultMoney(r);
s.acceptBet();
if (i != lngui.UserManager.instance.mainUserInfo.AccountID) {
if (o.Cards && o.Cards[0] && -1 != o.Cards[0].OrdinalValue) {
s.initCards(o.Cards);
s.showCard();
}
} else {
var c = o.BestHandInfo.Name;
s.setBestHandInfo(c);
}
s.showCardEffect();
}
}
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(this.phraseShowdown2, this)));
};
e.prototype.phraseShowdown2 = function() {
var t = this._dataShowDow.Players;
for (var e in t) if (null != t[e]) {
var n = t[e], o = n.AccountID, i = n.Chips, r = (n.BetInRGateEventBaiDepIconound, 
n.Result, this.PokerRoom.getPlayer(o));
if (r && r.getStatus() == a.ConnectionStatus.PlayingInGame) {
var s = n.BestHandInfo.CardValues, c = s[0], u = s[1], l = n.BestHandInfo.Name;
if (Array.isArray(s) && s.length > 0) {
r.getRevenue() < 0 && (c = [ -1, -1 ]);
r.setHightLightCard(c, u);
r.setResultName(l);
}
r.setChip(i);
if (o == lngui.UserManager.instance.mainUserInfo.AccountID) {
this.PokerRoom._nMyCurrentChip = i;
1 == this.PokerRoom._nCountActivePlayer && r.getRevenue() > 0 && (this.PokerRoom.UI.btnLatBai.active = !0);
} else n.Cards && n.Cards[0] && n.Cards[0].OrdinalValue;
if (r.getRevenue() >= 0) {
this.PokerRoom.setHightLightCard(u);
var h = n.BestHandInfo.Name;
Number.isInteger(h) && h > 0 && this.PokerRoom.setBestHandByName(h, c, u);
lngui.UserManager.instance.mainUserInfo.AccountID;
} else lngui.UserManager.instance.mainUserInfo.AccountID;
r.showCardEffect();
}
}
this.PokerRoom.showAllResult();
};
e.prototype.phraseAfterShowdown = function() {
this.PokerRoom.UI.btnLatBai.active = !0;
};
r([ h(s.default) ], e.prototype, "PokerRoom", void 0);
return r([ l ], e);
}(cc.Component);
n.default = d;
cc._RF.pop();
}, {
"../../common/scripts/Card/PlayerConst": "PlayerConst",
"../../common/scripts/LobbyCardGameVar": "LobbyCardGameVar",
"./PokerRoom": "PokerRoom"
} ],
PokerPlayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "44b3fINdTZKxLh9Qn/nc6yz", "PokerPlayer");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../common/scripts/Card/CardItem"), s = t("../../common/scripts/Card/Interaction"), c = t("../../common/scripts/Card/Player"), u = t("../../common/scripts/Card/PlayerConst"), l = t("../../common/scripts/util/FormatUtilGameCard"), h = t("./PokerConst"), d = t("./PokerSuporter"), p = cc._decorator, f = p.ccclass, m = p.property, y = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.imgPokerStatus = null;
e.imgBgBetValue = null;
e.lblBetValue = null;
e.lblBestHandInfo = null;
e.imgDealer = null;
e.imgChip = null;
e.cards = [];
e.nodeColor = [];
e._parrent = null;
e._nRefund = null;
e._nRevenue = null;
e._imgChipPos = null;
e._bestHandInfoType = null;
e._cardForShows = null;
e._cardInfos = [];
e._nChip = 0;
e._nBetInRound = 0;
e._betValue = 0;
e._nCountAceptBet = 0;
e.nodeGroupParticleOnTopPoker = null;
e.nodeGroupParticleOnBottomPoker = null;
e._isFold = !1;
e._isAllIn = !1;
return e;
}
e.prototype.init = function(t, e) {
this._parrent = e;
this.reset();
this.commonReset();
this.initCommonParameters(t);
var n = t.Chips;
this.setChip(n);
this._imgChipPos = this.imgChip.position;
this.resetStatus();
};
e.prototype.setSmallBlindTag = function() {};
e.prototype.setBigBlindTag = function() {};
e.prototype.reset = function() {
this.nodeColor.forEach(function(t) {
t.color = cc.Color.WHITE;
});
for (var t = 0; t < 2; t++) {
this.cards[t].node.color = cc.Color.WHITE;
this.cards[t].node.active = !1;
this._cardForShows && this._cardForShows[t] && (this._cardForShows[t].active = !1);
}
this._nBetInRound = 0;
this._nChip = 0;
this._nCountAceptBet = 0;
};
e.prototype.setDealer = function(t) {
this.imgDealer.active = t;
};
e.prototype.setBalance = function() {
this.getAccountID(), lngui.UserManager.instance.mainUserInfo.AccountID;
};
e.prototype.resetStatus = function() {
this.imgPokerStatus.node.stopAllActions();
this.imgPokerStatus.node.runAction(cc.scaleTo(.2, 0).easing(cc.easeBackOut()));
};
e.prototype.setBestHandInfo = function(t) {
var e = h.PokerDefine.STR_BESTHAND_INFO[t];
this.lblBestHandInfo && e && (this.lblBestHandInfo.string = e);
};
e.prototype.initCards = function(t, e) {
void 0 === e && (e = !1);
if (Array.isArray(t) && 0 != t.length) for (var n = 0; n < 2; n++) if ("undefined" != typeof t[n]) {
var o = t[n].OrdinalValue, i = d.default.getCardSuiteAndCardNumber(o), r = i.CardNumber, a = i.CardSuite;
if (o < 0 && this._llAccountID == lngui.UserManager.instance.mainUserInfo.AccountID) return;
this.cards[n].node.active = e;
this.cards[n].init(r, a, o);
this._cardInfos.push({
CardNumber: r,
CardSuite: a,
OrdinalValue: o
});
this._cardForShows && this._cardForShows[n] && (this._cardForShows[n].node.active = !1);
}
};
e.prototype.setChip = function(t) {
if (!(t < 0)) {
this._nChip = t;
this.lblBalance.string = l.default.formatNumber(t);
}
};
e.prototype.setBetInRound = function(t) {
this._nBetInRound = t;
t <= 0 || this.setBetValue(t);
};
e.prototype.setBetValue = function(t) {
if (Number.isInteger(t)) {
this._betValue = t;
this.imgBgBetValue.active = !0;
this.imgBgBetValue.scale = 0;
this.imgBgBetValue.stopAllActions();
this.imgBgBetValue.runAction(cc.scaleTo(.2, 1).easing(cc.easeBackOut()));
this.lblBetValue.string = d.default.formatChipNumber(t);
this.imgChip.position = this.getAvataPosition();
this.imgChip.opacity = 0;
this.imgChip.active = !0;
var e = this._imgChipPos;
this.imgChip.stopAllActions();
this.imgChip.runAction(cc.spawn(cc.moveTo(.2, e).easing(cc.easeOut(3)), cc.fadeIn(.2)));
}
};
e.prototype.setUserName = function(t) {
this._userName = t;
this.lblUserName && (this.lblUserName.string = t);
};
e.prototype.commonReset = function() {
t.prototype.commonReset.call(this);
this.resetStatus();
this.imgBgBetValue.scale = 0;
this.imgChip.active = !1;
this.lblBestHandInfo && (this.lblBestHandInfo.string = "");
this._isFold = !1;
};
e.prototype.setAction = function(t) {
var e = -1;
switch (t) {
case h.PokerPlayerAction.WAITING:
break;

case h.PokerPlayerAction.CHECK:
e = 0;
break;

case h.PokerPlayerAction.BET:
e = 1;
break;

case h.PokerPlayerAction.CALL:
e = 2;
break;

case h.PokerPlayerAction.RAISE:
e = 3;
break;

case h.PokerPlayerAction.FOLD:
this._isFold = !0;
if (this.getAccountID() == lngui.UserManager.instance.mainUserInfo.AccountID) this.hightLightCard(!1); else {
for (var n = 0; n < 2; n++) {
var o = this.cards[n];
if (o) {
var i = new cc.Node();
i.setPosition(o.node.position);
i.rotation = o.node.rotation;
i.scale = o.node.scale;
this._parrent.UI.layerChiaBai.addChild(i);
i.stopAllActions();
i.runAction(cc.sequence(cc.spawn(cc.moveTo(.5, this._parrent._cardOnDealerHandPos), cc.rotateBy(.5, 360), cc.fadeOut(.5)), cc.callFunc(function() {
i.destroy();
})));
o.node.active = !1;
}
}
this.nodeColor.forEach(function(t) {
t.color = cc.Color.GRAY;
});
}
break;

case h.PokerPlayerAction.ALLIN:
this._isAllIn = !0;
e = 4;
}
if (-1 != e) {
this.imgPokerStatus.spriteFrame = this._parrent.UI.playerStatus[e];
this.imgPokerStatus.node.scale = 0;
this.imgPokerStatus.node.stopAllActions();
this.imgPokerStatus.node.runAction(cc.sequence(cc.show(), cc.scaleTo(.2, 1).easing(cc.easeBackOut())));
} else this.imgPokerStatus.node.scale = 0;
};
e.prototype.setResultMoney = function(t) {
if ("undefined" != typeof t) {
this._nRefund = t.Refund;
this._nRevenue = t.Revenue;
}
};
e.prototype.setFinishAction = function(t) {
if (Number.isInteger(t.Action)) {
var e = t.Action;
this.setAction(e);
}
if (Number.isInteger(t.BetInRound)) {
var n = t.BetInRound;
this.setBetInRound(n);
}
};
e.prototype.showCard = function() {
for (var t = 0; t < 2; t++) {
this.cards[t].node.active = !0;
if (this.getAccountID() == lngui.UserManager.instance.mainUserInfo.AccountID) {
this.cards[t].node.opacity = 0;
this.cards[t].node.position.y -= 100;
this.cards[t].node.stopAllActions();
this.cards[t].node.runAction(cc.spawn(cc.moveTo(.5, cc.v2(35 * t, 0)).easing(cc.easeBackOut()), cc.fadeIn(.5)));
}
}
};
e.prototype.showCardEffect = function() {};
e.prototype.showWinEffect = function(t) {
(t = 1) || (t = 1);
var e;
this.getAccountID(), lngui.UserManager.instance.mainUserInfo.AccountID;
if (1 == t) e = 4; else if (2 == t || 3 == t) {
if (2 == t) {
e = 4;
var n = new cc.Node();
(r = n.addComponent(cc.ParticleSystem)).file = this._parrent.UI.particles[0];
this.nodeGroupParticleOnTopPoker.addChild(n, 10);
this.schedule(function() {
r.resetSystem();
}.bind(this), 2, 1);
} else {
e = 4;
if (this.getAccountID() == lngui.UserManager.instance.mainUserInfo.AccountID) {
var o = new cc.Node();
o.addComponent(cc.ParticleSystem).file = this._parrent.UI.particles[1];
this.nodeGroupParticleOnBottomPoker.addChild(o, -10);
var i = new cc.Node();
i.addComponent(cc.ParticleSystem).file = this._parrent.UI.particles[2];
this.nodeGroupParticleOnBottomPoker.addChild(i, -10);
new cc.Node().addComponent(cc.ParticleSystem).file = this._parrent.UI.particles[3];
this.nodeGroupParticleOnBottomPoker.addChild(i, -10);
} else {
var r, a = new cc.Node();
(r = a.addComponent(cc.ParticleSystem)).file = this._parrent.UI.particles[4];
this.nodeGroupParticleOnBottomPoker.addChild(a, 10);
this.schedule(function() {
this._particleChatDoi && this._particleChatDoi.resetSystem();
}.bind(this), 2, 1);
}
}
var s = new cc.Node();
s.addComponent(cc.ParticleSystem).file = this._parrent.UI.particles[5];
this.nodeGroupParticleOnTopPoker.addChild(s, 10);
}
var c = new cc.Node();
c.addComponent(cc.ParticleSystem).file = this._parrent.UI.particles[6];
this.nodeGroupParticleOnBottomPoker.addChild(c, -1e4);
var u = new cc.Node();
u.addComponent(cc.ParticleSystem).file = this._parrent.UI.particles[7];
this.nodeGroupParticleOnTopPoker.addChild(u, 10);
this.scheduleOnce(function() {
this.nodeGroupParticleOnTopPoker.destroyAllChildren();
this.nodeGroupParticleOnBottomPoker.destroyAllChildren();
}.bind(this), e + .5);
};
e.prototype.setResultName = function(t) {
this._bestHandInfoType = t;
};
e.prototype.setHightLightCard = function(t, e) {
if (Array.isArray(t) && t.length > 0) {
this.cards[0].node.color = cc.color(104, 104, 104, 255);
this.cards[1].node.color = cc.color(104, 104, 104, 255);
if (this._nRevenue < 0) return;
for (var n = t.length, o = 0; o < n; o++) for (var i = t[o], r = 0; r < 2; r++) if (this.cards[r].getOrdinalValue() == i) {
this.cards[r].node.color = cc.Color.WHITE;
break;
}
} else if (Array.isArray(t) && 0 == t.length && Array.isArray(e) && e.length > 0) {
this.cards[0].node.color = cc.color(104, 104, 104, 255);
this.cards[1].node.color = cc.color(104, 104, 104, 255);
}
};
e.prototype.acceptBet = function() {
if (0 != this._nBetInRound && !(this.imgBgBetValue.scale < 1)) {
var t = this._parrent.UI.imgPotBg, e = cc.instantiate(this.imgChip);
if (e) {
this._parrent.UI.pnlChipMoving.addChild(e, 100);
var n = cc.v2(t.x - h.PokerConfig.OFFSET_X_CHIP_ON_POT, t.y);
e.stopAllActions();
e.runAction(cc.sequence(cc.moveTo(.5, n).easing(cc.easeCubicActionInOut()), cc.fadeOut(.2), cc.destroySelf()));
this.scheduleOnce(function() {
this.imgBgBetValue.stopAllActions();
this.imgBgBetValue.runAction(cc.scaleTo(.2, 0).easing(cc.easeBackIn()));
}, .2);
}
this.imgChip.active = !1;
}
};
e.prototype.setRevenueAndRefund = function(t) {
if (0 != t) for (var e = 0; e < 6; e++) {
var n = e % 3, o = this._parrent.UI.imgPotChips[n];
if (o.active) {
var i = cc.instantiate(o);
if (i) {
this._parrent.UI.pnlChipMoving.addChild(i, 100);
var r = cc.v2(-73, 195.888), a = this.getAvataPosition();
i.setPosition(r);
var c = !1;
Math.random() > 5 && (c = !0);
var u = s.default.bessie1Side(r, a, 1, Math.random() + .9, c);
i.stopAllActions();
i.runAction(cc.sequence(cc.delayTime(.1 * e), u.easing(cc.easeOut(1)), cc.destroySelf()));
}
}
}
};
e.prototype.setRefund = function(t) {
void 0 === t && (t = 10);
var e = this.getAvataPosition(), n = cc.instantiate(this._parrent.UI.prefChip);
this.node.addChild(n);
n.stopAllActions();
n.runAction(cc.sequence(cc.moveTo(.5, e).easing(cc.easeCubicActionInOut()), cc.fadeOut(.2), cc.removeSelf(!0)));
var o = this._betValue - t;
o > 0 && this.setBetValue(o);
};
e.prototype.showResult = function() {
this._nRevenue + this._nRefund > 0 && this.setRevenueAndRefund(this._nRevenue + this._nRefund);
this.setMoneyChange(this._nRevenue);
this.imgPokerStatus.node.scale = 0;
if (this._nRevenue > 0) {
if (0 == this._nRevenue && this._isFold) return;
this.showWin();
this.setPlayerStatus(u.PlayerStatus.Thang);
} else 0 === this._nRevenue ? this.setPlayerStatus(u.PlayerStatus.Hoa) : this._nRevenue < 0 && this.setPlayerStatus(u.PlayerStatus.Thua);
};
e.prototype.showWin = function() {
Number.isInteger(this._bestHandInfoType) ? 4 <= this._bestHandInfoType && this._bestHandInfoType <= 7 ? this.showWinEffect(2) : this._bestHandInfoType >= 8 ? this.showWinEffect(3) : this.showWinEffect(1) : this.showWinEffect(1);
};
e.prototype.hightLightCard = function(t) {
for (var e = 0; e < 2; e++) {
this.cards[e].node.active = !0;
this.cards[e].node.color = t ? cc.Color.WHITE : cc.Color.GRAY;
}
this.nodeColor.forEach(function(e) {
e.color = t ? cc.Color.WHITE : cc.Color.GRAY;
});
};
e.prototype.getRevenue = function() {
return this._nRevenue;
};
e.prototype.enableStateInRoom = function(t) {
this._isPlayInRoom = t;
this.nodeColor.forEach(function(e) {
e.color = t ? cc.Color.WHITE : cc.Color.GRAY;
});
};
e.prototype.onExit = function() {
for (var t = 0; t < 2; t++) this.cards[t] && (this.cards[t].node.active = !1);
};
r([ m(cc.Sprite) ], e.prototype, "imgPokerStatus", void 0);
r([ m(cc.Node) ], e.prototype, "imgBgBetValue", void 0);
r([ m(cc.Label) ], e.prototype, "lblBetValue", void 0);
r([ m(cc.Label) ], e.prototype, "lblBestHandInfo", void 0);
r([ m(cc.Node) ], e.prototype, "imgDealer", void 0);
r([ m(cc.Node) ], e.prototype, "imgChip", void 0);
r([ m(a.default) ], e.prototype, "cards", void 0);
r([ m(cc.Node) ], e.prototype, "nodeColor", void 0);
r([ m(cc.Node) ], e.prototype, "nodeGroupParticleOnTopPoker", void 0);
r([ m(cc.Node) ], e.prototype, "nodeGroupParticleOnBottomPoker", void 0);
return r([ f ], e);
}(c.default);
n.default = y;
cc._RF.pop();
}, {
"../../common/scripts/Card/CardItem": "CardItem",
"../../common/scripts/Card/Interaction": "Interaction",
"../../common/scripts/Card/Player": "Player",
"../../common/scripts/Card/PlayerConst": "PlayerConst",
"../../common/scripts/util/FormatUtilGameCard": "FormatUtilGameCard",
"./PokerConst": "PokerConst",
"./PokerSuporter": "PokerSuporter"
} ],
PokerPopUpBuyIn: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ae41dzmrD9FnLMR8XjwouPT", "PokerPopUpBuyIn");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbCurUserMoney = null;
e.lbMoneyBuyIn = null;
e.lbMoneyMax = null;
e.lbMoneyMin = null;
e.sliderChip = null;
e._step = 0;
e._deltaChip = 0;
e._numberOfChip = 0;
e._minChip = 0;
e._maxChip = 0;
e._cbBuyIn = null;
return e;
}
e.prototype.init = function(t, e, n, o, i) {
void 0 === o && (o = null);
void 0 === i && (i = null);
this._cbBuyIn = n;
this._minChip = Number.isInteger(o) ? o : 20 * t;
this._maxChip = Number.isInteger(i) ? i : 200 * t;
this._deltaChip = this._maxChip - this._minChip;
this._step = t;
this.lbCurUserMoney.string = lngui.Utils.formatMoneyWithCommaOnly(e);
this.lbMoneyMax.string = "Max: " + lngui.Utils.formatMoneyWithCommaOnly(this._maxChip);
this.lbMoneyMin.string = "Min: " + lngui.Utils.formatMoneyWithCommaOnly(this._minChip);
this.sliderChip.progress = .5;
this.sliderEvent();
};
e.prototype.onBtnAll = function(t, e) {
switch (e) {
case "tangchip":
this.tangGiamChip(!0);
break;

case "giamchip":
this.tangGiamChip(!1);
break;

case "confirm":
this.touchBtnConfirm();
}
};
e.prototype.touchBtnConfirm = function() {
this._cbBuyIn && this._cbBuyIn({
numberOfChip: this._numberOfChip,
isAutoBuyIn: !1
});
this.hide();
};
e.prototype.tangGiamChip = function(t) {
var e, n = 0;
if (!((e = t ? this._numberOfChip + this._step : this._numberOfChip - this._step) < this._minChip || e > this._maxChip)) {
n = this._deltaChip > 0 ? (e - this._minChip) / this._deltaChip : 0;
this.sliderChip.progress = n;
this._numberOfChip = e;
var o = lngui.Utils.formatMoneyWithCommaOnly(e);
this.lbMoneyBuyIn.string = o;
}
};
e.prototype.sliderEvent = function() {
var t, e = this.sliderChip.progress;
if (1 == e) t = this._maxChip; else {
t = this._minChip + this._deltaChip * e;
t = Math.round(t / this._step) * this._step;
}
e = this._deltaChip > 0 ? (t - this._minChip) / this._deltaChip : 0;
this._numberOfChip = t;
var n = lngui.Utils.formatMoneyWithCommaOnly(t);
this.lbMoneyBuyIn.string = n;
};
r([ c(cc.Label) ], e.prototype, "lbCurUserMoney", void 0);
r([ c(cc.Label) ], e.prototype, "lbMoneyBuyIn", void 0);
r([ c(cc.Label) ], e.prototype, "lbMoneyMax", void 0);
r([ c(cc.Label) ], e.prototype, "lbMoneyMin", void 0);
r([ c(cc.Slider) ], e.prototype, "sliderChip", void 0);
return r([ s ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {} ],
PokerRoom: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "fe911YafoBHVpcV9JWg2e3k", "PokerRoom");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./PokerConst"), s = t("./PokerUI"), c = t("./PokerSuporter"), u = t("./PokerPhrase"), l = t("../../common/scripts/Card/BasicRoom"), h = t("../../common/scripts/LobbyCardGameNetwork"), d = t("../../common/scripts/Card/PlayerConst"), p = t("../../common/scripts/LobbyCardGameConst"), f = t("../../../base_slot/util/FormatUtil"), m = t("../../common/scripts/Card/CardItem"), y = t("../../poker/scripts/PokerPopUpBuyIn"), g = cc._decorator, C = g.ccclass, _ = g.property, v = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._currentBetValue = 0;
e._nMinChip = 0;
e._nMaxChip = 0;
e._nMyCurrentChip = 0;
e._deltaChip = 0;
e._nDealer = -1;
e._nSmallBlindLocal = 0;
e._nRateChip = 0;
e._potValue = 0;
e._phrase = null;
e._arrayJoinGame = null;
e._moneyToCall = null;
e._communityCardPos = null;
e._popUpBuyIn = null;
e._cardOnDealerHandPos = null;
e._isBetAllow = !1;
e.listPlayer = [];
e.UI = null;
e.PokerPhrase = null;
return e;
}
e.prototype.getPlayer = function(t) {
for (var e = 0; e < this.listPlayer.length; e++) {
var n = this.listPlayer[e];
if (n.getAccountID() == t) return n;
}
return null;
};
e.prototype.init = function(t, e) {
this._myPlayer = this.listPlayer[0];
this._arrayJoinGame = t;
this._lobbyGame = e;
this.setObserver();
this.initRoom(this._arrayJoinGame);
this.pnlChat.init(h.default.instance.mSignalr);
this._cardOnDealerHandPos = cc.v2(0, 196);
};
e.prototype.initRoom = function(t) {
var e = t[0];
if ("undefined" != typeof e) {
this._ownerRoom = e.OwnerRoom;
this._nOwnerId = e.OwnerID;
this.setRoomInfo(e);
this._communityCardPos = new Array(5);
for (var n = 0; n < 5; n++) {
this._communityCardPos[n] = cc.v2(this.UI.communityCard[n].node.position.x, this.UI.communityCard[n].node.position.y);
this.UI.communityCard[n].node.active = !1;
}
var o = 0;
t[1] && Number.isInteger(t[1].Time) && (o = t[1].Time);
this.createPlayers(e.Players);
this.setCurrentState(e.GameLoop.CurrentState, 0);
this.parseNotifyChangePhrase(e, o);
}
};
e.prototype.onGameSocket = function(t, e) {
if ("refund" == e) this.refund(t.A); else if ("notifyChangePhrase" == e) this.notifyChangePhrase(t.A); else if ("notifyStartActions" == e) this.notifyStartActions(t.A); else if ("notifyFinishActions" == e) {
this._isBetAllow = !1;
this.notifyFinishActions(t.A);
} else if ("playerFlipCards" == e) this.playerFlipCards(t.A); else if ("playerJoin" == e) this.playerJoin(t.A); else if ("updateAccount" == e) this.updateAccount(t.A); else if ("AutoBuyinCheck" == e) ; else if ("TipDealer" == e) ; else if ("standView" == e) this.standView(t.A); else if ("joinGame" === e) this.initRoom(t.A); else if ("message" == e) t.A && t.A[0] && lngui.UIPopupManager.instance.showPopup(t.A[0]); else if ("updateBaiDep" == e) {
t = t.A[0];
for (var n = 0; n < t.length; n++) t[n].Nickname == lngui.UserManager.instance.mainUserInfo.NickName && t[n].PrizeType;
}
};
e.prototype.standView = function(t) {
var e = t[1];
if (Array.isArray(e) && -1 == e.indexOf(lngui.UserManager.instance.mainUserInfo.AccountID)) for (var n in e) {
var o = e[n];
if (Number.isInteger(o)) {
var i = this.getPlayer(o);
this.removePlayer(i);
}
}
};
e.prototype.createPlayers = function(t) {
if ("undefined" != typeof t) for (var e in t) if ("undefined" != typeof t[e]) {
var n = t[e], o = n.AccountID, i = n.Status, r = -1;
if (o == lngui.UserManager.instance.mainUserInfo.AccountID) r = 0; else {
r = 1;
var s = n.Position;
s > this._nMyLocalInRoom ? r = s - this._nMyLocalInRoom : s < this._nMyLocalInRoom && (r = a.PokerConfig.NUMBER_ROOM_PLAYER - (this._nMyLocalInRoom - s));
this._nMyLocalInRoom == s && (r = 0);
}
var c = this.listPlayer[r];
c.setPositionInRoom(r);
c.init(n, this);
i == d.ConnectionStatus.PlayingInGame ? this._myPlayer.enableStateInRoom(!0) : this._myPlayer.enableStateInRoom(!1);
}
this._myPlayer.node.active || this.reEnterLobby();
};
e.prototype.createGameLoop = function(t) {
this.createCommunityCards(t.CommunityCards);
var e = t.CurrentState;
if ("undefined" != typeof e && e.Account == lngui.UserManager.instance.mainUserInfo.AccountID) {
this.UI.panelBet.active = !0;
this.UI.pnlTangCuoc.active = !1;
this.UI.btnBoBai.active = !1;
this.UI.btnXemBai.active = !1;
this.UI.btnTheo.active = !1;
this.UI.btnTangCuoc.node.active = !1;
this.UI.btnBet.active = !1;
var n = e.Actions, o = n.length;
if (o > 0) for (var i = 0; i < o; i++) {
var r = n[i].Action, a = n[i].Min, s = n[i].Max;
this.setStartAction(r, a, s);
}
}
};
e.prototype.setCurrentPlayerActive = function(t) {
if ("undefined" != typeof t) {
var e = t.Time, n = this.getPlayer(this._nOwnerId);
n && n.setLoadingStatus(e);
}
};
e.prototype.refund = function(t) {
if (Array.isArray(t) && 0 != t.length) {
var e = t[0], n = t[1], o = t[2], i = t[3];
this.showTempPot(i);
var r = this.getPlayer(e);
if (r) {
r.setChip(o);
r.setRefund(n);
r.setMoneyChange(n);
}
}
};
e.prototype.hideChipPotImages = function() {
for (var t = 0; t < 3; t++) this.UI.imgPotChips[t].active = !1;
};
e.prototype.updateChipPotImages = function() {
for (var t = 0; t < 3; t++) this.UI.imgPotChips[t].active = !0;
};
e.prototype.registerNextRoom = function(t) {
h.default.instance.sendSignalR(t ? "RegisterJump" : "UnRegisterJump");
};
e.prototype.notifyChangePhrase = function(t) {
if (Array.isArray(t) && 0 != t.length) {
var e = t[1];
this.parseNotifyChangePhrase(t[0], e, !0);
}
};
e.prototype.notifyStartActions = function(t) {
if (Array.isArray(t) && 0 != t.length) {
var e = t[0], n = t[1].AccountID, o = this.getPlayer(n);
o.node.active ? o.setLoadingStatus(e) : this.reEnterLobby("notifyStartActions");
this.setCurrentState(t[1], e);
n == lngui.UserManager.instance.mainUserInfo.AccountID && t[1] && 7 != t[1].DefautAction && c.default.vibrate();
}
};
e.prototype.reEnterLobby = function(t) {
void 0 === t && (t = null);
h.default.instance.sendSignalR("EnterLobby", []);
};
e.prototype.notifyFinishActions = function(t) {
if (Array.isArray(t) && 0 != t.length) {
var e = t[0], n = t[1], o = t[3];
if (Number.isInteger(n.Action)) {
var i = n.Action;
console.log("Action:  " + i);
i == a.PokerAction.FOLD ? this._nCountActivePlayer-- : i == a.PokerAction.ALLIN || i == a.PokerAction.CHECK || i == a.PokerAction.BET || i == a.PokerAction.RAISE || a.PokerAction.CALL;
}
var r = this.getPlayer(e);
if (r.node.active) {
r.setFinishAction(n);
r.removeLoadingStatus();
Number.isInteger(o) && r.setChip(o);
} else this.reEnterLobby("notifyFinishActions");
if (e == lngui.UserManager.instance.mainUserInfo.AccountID) {
this.UI.panelBet.active = !1;
this.UI.pnlTangCuoc.active = !1;
(i = n.Action) == a.PokerAction.FOLD && (this.UI.btnBuyIn.active = !0);
}
}
};
e.prototype.playerFlipCards = function(t) {
if (Array.isArray(t) && 0 != t.length) {
var e = t[0];
if (e != lngui.UserManager.instance.mainUserInfo.AccountID) {
var n = this.getPlayer(e);
if (n) {
n.initCards(t[1], !0);
n.showCardEffect();
}
}
}
};
e.prototype.setBestHandByName = function(t, e, n) {
var o = a.PokerDefine.STR_BESTHAND_INFO_IMAGE[t];
if (o) {
this.UI.pnlBestHandText.node.active = !0;
this.UI.pnlBestHandText.setAnimation(0, o, !0);
}
if (Array.isArray(e) && Array.isArray(n)) {
var i = e.concat(n), r = [], s = [];
for (var u in i) {
var l = i[u], h = c.default.getCardSuiteAndCardNumber(l), d = h.CardNumber, f = h.CardSuite;
r.push(d);
s.push(f);
}
var m = c.default.elementArrayCount(r), y = [];
if (1 == t) {
var g = c.default.findMaxNumberInArray(r);
y.push(g);
} else if (2 == t) for (var u in m) 2 == m[u] && y.push(u); else if (3 == t) for (var u in m) 2 == m[u] && y.push(u); else if (4 == t) for (var u in m) 3 == m[u] && y.push(u); else if (5 == t || 9 == t || 10 == t) {
r = c.default.sortMinToMax(r);
for (var u in r) y.push(r[u]);
} else if (6 == t) {
g = c.default.findMaxNumberInArray(r);
y.push(g);
var C = s[0];
C == p.SUITE_CARD.BICH_TLMN ? y.push("bich") : C == p.SUITE_CARD.TEP_TLMN ? y.push("tep") : C == p.SUITE_CARD.RO_TLMN ? y.push("ro") : C == p.SUITE_CARD.CO_TLMN && y.push("co");
} else if (7 == t) for (var u in m) {
2 == m[u] && y.push(u);
3 == m[u] && y.push(u);
} else if (8 == t) for (var u in m) 4 == m[u] && y.push(u);
}
};
e.prototype.Bet = function(t, e) {
this.UI.panelBet.active = !1;
h.default.instance.sendSignalR("Bet", [ t, e ]);
};
e.prototype.FlipCards = function() {
h.default.instance.sendSignalR("FlipCards", []);
};
e.prototype.hideCommunityCards = function() {
for (var t = 0; t < 5; t++) {
this.UI.communityCard[t].node.active = !1;
this.UI.communityCard[t].node.setPosition(this._communityCardPos[0]);
this.UI.communityCard[t].node.color = cc.Color.WHITE;
}
this.UI.pnlBestHandText.node.active = !1;
};
e.prototype.resetGame = function() {
this.UI.imgPotBg.stopAllActions();
this.UI.imgPotBg.runAction(cc.scaleTo(.2, 0).easing(cc.easeBounceIn()));
this.UI.panelBet.active = !1;
this.UI.btnLatBai.active = !1;
this.UI.pnlTangCuoc.active = !1;
this.setMessageForGame("");
this.hideCommunityCards();
};
e.prototype.setCurrentState = function(t) {
if ("undefined" != typeof t) if (t.AccountID == lngui.UserManager.instance.mainUserInfo.AccountID) {
this.UI.panelBet.active = !0;
this.UI.pnlTangCuoc.active = !1;
this.UI.btnBoBai.active = !1;
this.UI.btnXemBai.active = !1;
this.UI.btnTheo.active = !1;
this.UI.btnTangCuoc.node.active = !1;
var e = t.Actions, n = e.length;
if (n > 0) for (var o = 0; o < n; o++) {
var i = e[o].Action, r = e[o].Min, a = e[o].Max;
this.setStartAction(i, r, a);
}
} else {
this.UI.panelBet.active = !1;
this.UI.pnlTangCuoc.active = !1;
}
};
e.prototype.playerJoin = function(t) {
if (Array.isArray(t) && 0 != t.length && "undefined" != typeof t[0]) {
var e, n = t[0].Position;
e = n > this._nMyLocalInRoom ? n - this._nMyLocalInRoom : n < this._nMyLocalInRoom ? a.PokerConfig.NUMBER_ROOM_PLAYER - (this._nMyLocalInRoom - n) : 0;
var o = this.listPlayer[e];
o.setPositionInRoom(e);
o.init(t[0], this);
}
};
e.prototype.showTempPot = function(t) {
var e = this;
this._potValue = t;
this.UI.imgPotBg.stopAllActions();
if (0 != t) {
this.UI.imgPotBg.active = !0;
this.UI.imgPotBg.runAction(cc.sequence(cc.scaleTo(.1, 1.2), cc.scaleTo(.1, 1)));
this.UI.lblPot.string = c.default.formatChipNumber(t);
this.updateChipPotImages();
} else this.UI.imgPotBg.runAction(cc.sequence(cc.delayTime(.3), cc.scaleTo(.2, 0).easing(cc.easeBackIn()), cc.callFunc(function() {
e.UI.imgPotBg.active = !1;
}, this)));
};
e.prototype.setStartAction = function(t, e, n) {
switch (t) {
case a.PokerAction.WAITING:
break;

case a.PokerAction.CHECK:
this.UI.btnXemBai.active = !0;
break;

case a.PokerAction.BET:
case a.PokerAction.RAISE:
this.UI.btnBet.active = !1;
this.UI.btnTangCuoc.node.active = !0;
this.UI.btnTangCuoc.spriteFrame = this.UI.btnAction[0];
this.UI.btnTangCuoc.node.name = "" + t;
this.initTangCuoc(e, n);
this._isBetAllow = !0;
break;

case a.PokerAction.ALLIN:
this.UI.btnBet.active = !1;
this.UI.btnTangCuoc.node.active = !0;
this.UI.btnTangCuoc.spriteFrame = this.UI.btnAction[1];
this.UI.btnTangCuoc.node.name = "" + a.PokerAction.ALLIN;
break;

case a.PokerAction.CALL:
this.UI.btnTheo.active = !0;
this.UI.lblMoneyTheo.string = c.default.formatChipNumber(n);
this._moneyToCall = n;
break;

case a.PokerAction.FOLD:
this.UI.btnBoBai.active = !0;
}
};
e.prototype.initTangCuoc = function(t, e) {
this._nMinChip = t;
this._nMaxChip = e;
this._deltaChip = this._nMaxChip - this._nMinChip;
this._currentBetValue = t;
this.showCurrentBetValue();
};
e.prototype.showCurrentBetValue = function() {
this._currentBetValue != this._nMaxChip && (this._currentBetValue = Math.floor(this._currentBetValue / this._nMinBet) * this._nMinBet);
var t = f.default.formatNumber(this._currentBetValue);
this.UI.lblBetValue.string = t;
var e = this._currentBetValue / this._nMaxChip;
this.UI.sliderChip.progress = e;
};
e.prototype.parseNotifyChangePhrase = function(t, e, n) {
void 0 === n && (n = !1);
if ("undefined" != typeof t) {
var o = t.GameLoop;
this._phrase = o.Phrase;
var i = o.SmallBlind, r = this.getPlayer(i);
r && (this._nSmallBlindLocal = r.getPositionInRoom());
var s = this.getPlayer(this._nOwnerId);
s && s.removeLoadingStatus();
this._nOwnerId = t.OwnerID;
this._ownerRoom = t.OwnerRoom;
this.createCommunityCards(o.CommunityCards);
switch (this._phrase) {
case a.PokerPhrases.WAITING:
this.PokerPhrase.phraseWaiting(t);
this.setTimeRemain(e);
break;

case a.PokerPhrases.PREFLOP:
var c = t.Players;
if (c && this.getNumPlayerActive() != Object.keys(c).length) {
this.reEnterLobby("Players.length");
return;
}
this.getPlayer(this._ownerRoom) && this.enableOwner();
this.PokerPhrase.phrasePreFlop(t, n);
break;

case a.PokerPhrases.FLOP:
case a.PokerPhrases.TURN:
case a.PokerPhrases.RIVER:
this.PokerPhrase.phraseCommon(t);
break;

case a.PokerPhrases.SHOWDOWN:
this.PokerPhrase.phraseShowdown(t);
break;

case a.PokerPhrases.AFTER_SHOWDOWN:
this.PokerPhrase.phraseAfterShowdown();
}
var u = o.TempPot;
this.showTempPot(u);
}
};
e.prototype.createCommunityCards = function(t) {
try {
if (!Array.isArray(t) || 0 == t.length) return;
var e = t.length;
if (3 != e || this.UI.communityCard[0].node.active) if (4 == e) {
if (this.UI.communityCard[0].node.active && !this.UI.communityCard[3].node.active) this.showCommunityCards(4, t); else if (!this.UI.communityCard[0].node.active && !this.UI.communityCard[3].node.active) {
this.showCommunityCardsStardard(3, t);
this.showCommunityCards(4, t);
}
} else 5 != e || this.UI.communityCard[4].node.active || (this.UI.communityCard[0].node.active && this.UI.communityCard[3].node.active ? this.showCommunityCards(5, t) : this.showCommunityCardsStardard(5, t)); else this.showCommunityCards(3, t);
for (var n = 0; n < e; n++) "undefined" == typeof t[n] && this.UI.communityCard[n].setOrdinalValue(t[n].OrdinalValue);
} catch (t) {}
};
e.prototype.showCommunityCards = function(t, e) {
if (3 == t) {
for (var n = 0; n < 3; n++) {
(o = this.UI.communityCard[n]).node.position = this._communityCardPos[0];
o.node.color = cc.Color.WHITE;
o.init(-1, -1, -1);
o.node.position.y = this._communityCardPos[0].y + 50;
o.setOrdinalValue(e[n].OrdinalValue);
o.node.active = !0;
o.node.opacity = 0;
o.node.stopAllActions();
o.node.runAction(cc.sequence(cc.moveTo(.2, this._communityCardPos[0]), cc.fadeIn(.2)));
}
this.UI.communityCard[1].node.runAction(cc.sequence(cc.delayTime(.2), cc.moveTo(.2, this._communityCardPos[1])));
this.UI.communityCard[2].node.runAction(cc.sequence(cc.delayTime(.2), cc.moveTo(.2, this._communityCardPos[1]), cc.moveTo(.2, this._communityCardPos[2]), cc.callFunc(function() {
for (var t = 0; t < 3; t++) {
var n = e[t].OrdinalValue, o = c.default.getCardSuiteAndCardNumber(n);
this.UI.communityCard[t].init(o.CardNumber, o.CardSuite, n);
}
}.bind(this))));
} else {
var o, i = e[n = t - 1].OrdinalValue, r = c.default.getCardSuiteAndCardNumber(i);
(o = this.UI.communityCard[n]).setOrdinalValue(i);
o.init(-1, -1, -1);
o.node.color = cc.Color.WHITE;
o.node.position = this._communityCardPos[n];
o.node.position.y = this._communityCardPos[n].y + 50;
o.node.opacity = 0;
o.node.active = !0;
o.node.stopAllActions();
o.node.runAction(cc.sequence(cc.spawn(cc.moveTo(.2, this._communityCardPos[n]), cc.fadeIn(.2)), cc.callFunc(function() {
o.init(r.CardNumber, r.CardSuite, i);
}.bind(this))));
}
};
e.prototype.showCommunityCardsStardard = function(t, e) {
if (Array.isArray(e) && 0 != e.length) for (var n = 0; n < t; n++) if ("undefined" != typeof e[n]) {
e[n].CardNumber, e[n].CardSuite;
var o = e[n].OrdinalValue, i = c.default.getCardSuiteAndCardNumber(o);
if (!this.UI.communityCard[n].node.active) {
this.UI.communityCard[n].init(i.CardNumber, i.CardSuite, o);
this.UI.communityCard[n].node.color = cc.Color.WHITE;
this.UI.communityCard[n].node.active = !0;
this.UI.communityCard[n].node.position = this._communityCardPos[n];
}
}
};
e.prototype.updateAccount = function(t) {
this.showBuyChip(!1);
if (Array.isArray(t) && 0 != t.length) {
var e = t[1];
if ("undefined" != typeof t[0]) {
var n = t[0].AccountID;
for (var o in this.listPlayer) {
var i = this.listPlayer[o];
n == i.getAccountID() && i.setChip(e);
}
}
}
};
e.prototype.showBuyChip = function(t) {
t && this.showBuyInPopUp();
};
e.prototype.chiaBai = function(t) {
for (var e = new Array(), n = cc.v2(0, 0), o = 0; o < 2; o++) for (var i, r = 0; r <= a.PokerConfig.NUMBER_ROOM_PLAYER - 1; r++) {
i = r + this._nSmallBlindLocal > a.PokerConfig.NUMBER_ROOM_PLAYER - 1 ? r + this._nSmallBlindLocal - a.PokerConfig.NUMBER_ROOM_PLAYER : this._nSmallBlindLocal + r;
for (var s in this.listPlayer) if (this.listPlayer[s].getStatus() == d.ConnectionStatus.PlayingInGame && this.listPlayer[s].getPositionInRoom() == i && this.listPlayer[s].node.active) {
var c = "imgCard" + i + "_" + o, u = this.UI.pnlChiaBai.getChildByName(c), l = u.getPosition(), h = u.rotation, p = cc.instantiate(this.UI.prefCard);
p.getComponent(m.default).init(-2, 0, -1);
p.setPosition(n);
p.scale = 1;
this.UI.layerChiaBai.addChild(p);
var f = cc.targetedAction(p, cc.moveTo(.3, l)), y = cc.targetedAction(p, cc.rotateBy(.3, 360 + h));
e.push(cc.spawn(f, y));
this.listPlayer[s].getAccountID(), lngui.UserManager.instance.mainUserInfo.AccountID;
}
}
if (t) {
var g = cc.callFunc(this.playersShowCard, this);
e.push(g);
var C = cc.sequence(e);
this.node.stopAllActions();
this.node.runAction(C);
} else this.playersShowCard();
};
e.prototype.showAllResult = function() {
this.showTempPot(0);
for (var t in this.listPlayer) this.listPlayer[t].getStatus() == d.ConnectionStatus.PlayingInGame && this.listPlayer[t].showResult();
this.hideChipPotImages();
};
e.prototype.playersShowCard = function() {
this.UI.layerChiaBai.destroyAllChildren();
for (var t in this.listPlayer) if (this.listPlayer[t].getStatus() == d.ConnectionStatus.PlayingInGame) {
var e = this.listPlayer[t];
e._isFold || e.showCard();
}
};
e.prototype.setHightLightCard = function(t) {
if (Array.isArray(t) && t.length > 0) for (var e = 0; e < 5; e++) {
var n = this.UI.communityCard[e];
-1 != t.indexOf(n.getOrdinalValue()) ? n.node.color = cc.Color.WHITE : n.node.color = cc.color(104, 104, 104, 255);
}
};
e.prototype.showBuyInPopUp = function() {
var t = this;
console.log("onclickbuychip");
var e = this._myPlayer, n = this._nMinBet * a.PokerDefine._maxChipMulti * 2 - e._nChip;
if (n <= 0) lngui.UIPopupManager.instance.showPopup("Bạn chỉ được mua tối đa " + f.default.formatNumber(this._nMinBet * a.PokerDefine._maxChipMulti * 2)); else {
var o = this._nMinBet * a.PokerDefine._minChipMulti * 2 - e._nChip;
o <= 0 && (o = 0);
lngui.UserManager.instance.mainUserInfo.Money - e._nChip <= 0 ? lngui.UIPopupManager.instance.showPopup("Bạn không đủ tiền để mua thêm!") : lngui.UIPopupManager.instance.showPopupFromPrefab(this.UI.prefBuyChip, function(i) {
t._popUpBuyIn = i.getComponent(y.default);
t._popUpBuyIn.init(t._nMinBet, lngui.UserManager.instance.mainUserInfo.Money - e._nChip, function(t) {
var e = t.numberOfChip, n = t.isAutoBuyIn;
h.default.instance.sendSignalR("Buyin", [ this._nMinBet, 1, e, n ]);
}.bind(t), o, n);
i.node.active = !0;
});
}
};
r([ _({
override: !0
}) ], e.prototype, "listPlayer", void 0);
r([ _(s.default) ], e.prototype, "UI", void 0);
r([ _(u.default) ], e.prototype, "PokerPhrase", void 0);
return r([ C ], e);
}(l.default);
n.default = v;
cc._RF.pop();
}, {
"../../../base_slot/util/FormatUtil": void 0,
"../../common/scripts/Card/BasicRoom": "BasicRoom",
"../../common/scripts/Card/CardItem": "CardItem",
"../../common/scripts/Card/PlayerConst": "PlayerConst",
"../../common/scripts/LobbyCardGameConst": "LobbyCardGameConst",
"../../common/scripts/LobbyCardGameNetwork": "LobbyCardGameNetwork",
"../../poker/scripts/PokerPopUpBuyIn": "PokerPopUpBuyIn",
"./PokerConst": "PokerConst",
"./PokerPhrase": "PokerPhrase",
"./PokerSuporter": "PokerSuporter",
"./PokerUI": "PokerUI"
} ],
PokerSuporter: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "22341LIR5ZK97xpZBOryNrZ", "PokerSuporter");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../../base_slot/util/Util"), s = cc._decorator, c = s.ccclass, u = (s.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.formatChipNumber = function(t) {
return Number.isInteger(t) ? t >= 1e5 ? this.formatMoney2(t) : a.default.formatNumber(t) : null;
};
e.formatMoney2 = function(t) {
var e = t < 0 ? 1 : 0, n = "", o = 0;
if ((t = Math.abs(t)) >= 1e9) {
o = 1e9;
n = "B";
} else if (t >= 1e6) {
o = 1e6;
n = "M";
} else {
if (!(t >= 1e4)) return a.default.formatNumber(t);
o = 1e3;
n = "K";
}
var i = t / o + "";
(i = i.toString()).indexOf(".") > 0 ? i = i.substring(0, i.indexOf(".") + 2) + n : i += n;
e && (i = "-" + i);
return i;
};
e.convertMoneyToChipImage = function() {};
e.elementArrayCount = function(t) {
var e = {};
for (var n in t) e[t[n]] = (e[t[n]] || 0) + 1;
return e;
};
e.sortMinToMax = function(t) {
return t.sort(function(t, e) {
return t - e;
});
};
e.findMaxNumberInArray = function(t) {
return t.sort(function(t, e) {
return e - t;
})[0];
};
e.convertMoneyToChip = function(t) {
if (t <= 0) return null;
new cc.Node().addComponent(cc.Sprite);
};
e.getCardSuiteAndCardNumber = function(t) {
if (-1 == t) return {};
var e = t % 13;
return {
CardSuite: [ 0, 13, 26, 39, -1 ][Math.floor(t / 13)],
CardNumber: e
};
};
e.vibrate = function() {};
return r([ c ], e);
}(cc.Component));
n.default = u;
cc._RF.pop();
}, {
"../../../base_slot/util/Util": void 0
} ],
PokerUI: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "25f37Yj/KJI4qa8b9yyNb3w", "PokerUI");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../common/scripts/Card/CardItem"), s = cc._decorator, c = s.ccclass, u = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.panelBet = null;
e.pnlTangCuoc = null;
e.pnlChiaBai = null;
e.pnlHelp = null;
e.layerChiaBai = null;
e.btnBoBai = null;
e.btnXemBai = null;
e.btnTheo = null;
e.btnBet = null;
e.btnBuyIn = null;
e.btnLatBai = null;
e.btnNapChip = null;
e.imgPotBg = null;
e.menu = null;
e.pnlChipMoving = null;
e.imgPotChips = [];
e.prefCard = null;
e.prefChip = null;
e.prefBuyChip = null;
e.sliderChip = null;
e.btnTangCuoc = null;
e.playerStatus = [];
e.btnAction = [];
e.particles = [];
e.lblPot = null;
e.lblBetValue = null;
e.lblMoneyTheo = null;
e.communityCard = [];
e.pnlBestHandText = null;
return e;
}
r([ u(cc.Node) ], e.prototype, "panelBet", void 0);
r([ u(cc.Node) ], e.prototype, "pnlTangCuoc", void 0);
r([ u(cc.Node) ], e.prototype, "pnlChiaBai", void 0);
r([ u(cc.Node) ], e.prototype, "pnlHelp", void 0);
r([ u(cc.Node) ], e.prototype, "layerChiaBai", void 0);
r([ u(cc.Node) ], e.prototype, "btnBoBai", void 0);
r([ u(cc.Node) ], e.prototype, "btnXemBai", void 0);
r([ u(cc.Node) ], e.prototype, "btnTheo", void 0);
r([ u(cc.Node) ], e.prototype, "btnBet", void 0);
r([ u(cc.Node) ], e.prototype, "btnBuyIn", void 0);
r([ u(cc.Node) ], e.prototype, "btnLatBai", void 0);
r([ u(cc.Node) ], e.prototype, "btnNapChip", void 0);
r([ u(cc.Node) ], e.prototype, "imgPotBg", void 0);
r([ u(cc.Node) ], e.prototype, "menu", void 0);
r([ u(cc.Node) ], e.prototype, "pnlChipMoving", void 0);
r([ u(cc.Node) ], e.prototype, "imgPotChips", void 0);
r([ u(cc.Prefab) ], e.prototype, "prefCard", void 0);
r([ u(cc.Prefab) ], e.prototype, "prefChip", void 0);
r([ u(cc.Prefab) ], e.prototype, "prefBuyChip", void 0);
r([ u(cc.Slider) ], e.prototype, "sliderChip", void 0);
r([ u(cc.Sprite) ], e.prototype, "btnTangCuoc", void 0);
r([ u(cc.SpriteFrame) ], e.prototype, "playerStatus", void 0);
r([ u(cc.SpriteFrame) ], e.prototype, "btnAction", void 0);
r([ u(cc.ParticleAsset) ], e.prototype, "particles", void 0);
r([ u(cc.Label) ], e.prototype, "lblPot", void 0);
r([ u(cc.Label) ], e.prototype, "lblBetValue", void 0);
r([ u(cc.Label) ], e.prototype, "lblMoneyTheo", void 0);
r([ u(a.default) ], e.prototype, "communityCard", void 0);
r([ u(sp.Skeleton) ], e.prototype, "pnlBestHandText", void 0);
return r([ c ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"../../common/scripts/Card/CardItem": "CardItem"
} ],
StatusPlayers: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "2a17fO3WE1Ay50v5Sb3CTAe", "StatusPlayers");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.imgs = [];
return e;
}
n = e;
e.prototype.onLoad = function() {
null == n.instance && (n.instance = this);
};
e.prototype.onDestroy = function() {
n.instance = null;
};
var n;
e.instance = null;
r([ c(cc.SpriteFrame) ], e.prototype, "imgs", void 0);
return n = r([ s ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {} ],
TLMNPlayer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ecde2YvfbRC94xYDF4ha4Vw", "TLMNPlayer");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../common/scripts/Card/Player"), s = t("../../common/scripts/Card/PlayerConst"), c = t("../../common/scripts/LobbyCardGameConst"), u = t("../../common/scripts/LobbyCardGameVar"), l = t("./TienLenConst"), h = cc._decorator, d = h.ccclass, p = h.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._nCardCount = 0;
e._handCard = null;
e._turnCards = null;
e.lblBienValue = null;
e.imgBien = null;
e.bgCardCount = null;
e.bgCardTurn = null;
e._cardPos = null;
e.ResultFamily = null;
e.MAX_CARD = 13;
return e;
}
e.prototype.init = function(t) {
this._handCard = [];
this._turnCards = [];
this.initCommonParameters(t);
u.default.gameID == c.CARD_GAMEID.GAME_SAMLOC ? this.ResultFamily = {
DenSam: -2,
Cong_Thoi: -1,
Cong: 0,
Ung: 1,
Thua: 2,
Thang: 4,
ToiTrang: 5,
ChatSam: 6,
An_Sam: 7,
Den_Lang: 8
} : this.ResultFamily = {
Cong_Thoi: 0,
Cong: 1,
Ung: 2,
Thua: 3,
Thang: 4,
ToiTrang: 5
};
};
e.prototype.reset = function() {
t.prototype.reset.call(this);
this.removeAllHandCards();
this.lblBienValue && (this.lblBienValue.node.active = !1);
this.imgBien && (this.imgBien.active = !1);
this.boLuot(!1);
this.bgCardCount && this.bgCardCount.destroyAllChildren();
};
e.prototype.createHandCards = function(t, e, n) {
this._nCardCount = t.length;
if (this._nStatus == s.ConnectionStatus.PlayingInGame && this.getAccountID() != lngui.UserManager.instance.mainUserInfo.AccountID && Array.isArray(t)) {
var o = t.length;
if (!(0 == o || o > this.MAX_CARD)) if (n) {
this.imgBien.active = !1;
this.lblBienValue.node.active = !1;
for (var i = 0; i < this._handCard.length; i++) this._handCard[i].node.destroy();
this._handCard = [];
for (i = 0; i < o; i++) {
var r, a = t[i].CardNumber, c = t[i].CardSuite, u = t[i].OrdinalValue;
(d = cc.instantiate(e)).scale = .7;
d.color = cc.color(104, 104, 104);
(p = d.getComponent("CardItem")).init(a, c, u);
this._handCard.push(p);
r = i <= 5 ? i : i - 6;
var h = cc.v2(-30 * r, i <= 5 ? 0 : -50);
this.bgCardCount.addChild(d, i <= 5 ? l.GameConfig._zOderBaiHa - r : l.GameConfig._zOderBaiHa + 7 - r);
p.node.stopAllActions();
p.node.runAction(cc.moveTo(.5, h));
}
} else if (null == n) for (i = 0; i < o; i++) {
(p = (d = cc.instantiate(e)).getComponent("CardItem")).init();
p.node.position = cc.v2(-120, -150);
p.node.scale = l.GameConfig.BAIDANH_SCALE;
if (i === o - 1) {
p.node.stopAllActions();
p.node.runAction(cc.sequence(cc.delayTime(.05 * i), cc.moveTo(.25, cc.v2(0, 0)).easing(cc.easeExponentialOut()), cc.callFunc(this.updateCardCount, this)));
this._handCard.push(p);
} else {
p.node.stopAllActions();
p.node.runAction(cc.sequence(cc.delayTime(.05 * i), cc.moveTo(.25, cc.v2(0, 0)).easing(cc.easeExponentialOut()), cc.removeSelf()));
}
this.bgCardCount.addChild(p.node);
} else {
var d, p;
(p = (d = cc.instantiate(e)).getComponent("CardItem")).init();
p.node.scale = l.GameConfig.BAIDANH_SCALE;
this._handCard.push(p);
this.bgCardCount.addChild(d);
this.updateCardCount();
}
}
};
e.prototype.createTurnCard = function(t) {
for (var e = this._nCardCount; e < this.MAX_CARD; e++) {
var n = 20 - Math.round(39 * Math.random()), o = 10 - Math.round(20 * Math.random()), i = 10 - Math.round(20 * Math.random()), r = cc.instantiate(t).getComponent("CardItem");
r.node.angle = -n;
r.node.scale = l.GameConfig.BAIDANH_SCALE;
r.setFliped(!0);
r.node.position = cc.v2(o, i + 20);
this.bgCardTurn.addChild(r.node);
this._turnCards.push(r);
}
};
e.prototype.endRound = function() {
this._statusInGame !== s.PlayerStatus.XinSam && this.boLuot(!1);
for (var t in this._turnCards) {
var e = this._turnCards[t];
e.isMoved() && !e.isFliped() && e.flip();
}
};
e.prototype.boLuot = function(t) {
this.setPlayerStatus(t ? s.PlayerStatus.BoLuot : s.PlayerStatus.UnknownStatus);
};
e.prototype.updateCardCount = function() {
if (this._nCardCount > 0) {
this.bgCardCount.active = !0;
this.imgBien.active = !0;
this.lblBienValue.node.active = !0;
this.lblBienValue.string = this._nCardCount < 10 ? "0" + this._nCardCount : "" + this._nCardCount;
} else {
this.bgCardCount.active = !1;
this.imgBien.active = !1;
this.lblBienValue.node.active = !1;
for (var t = 0; t < this._handCard.length; t++) this._handCard[t].node.destroy();
this._handCard = [];
}
};
e.prototype.removeAllHandCards = function() {
if (this._handCard) for (var t = 0; t < this._handCard.length; t++) this._handCard[t].node.destroy();
this.bgCardTurn.removeAllChildren();
this._handCard = [];
this._turnCards = [];
};
e.prototype.showMoneyWin = function(t) {
this.setMoneyChange(t, !1);
};
e.prototype.showBaiThoi = function(t) {
if (Array.isArray(t) && t.length > 0) for (var e = t.length, n = 0; n < e; n++) {
var o = t[n];
for (var i in this._handCard) this._handCard[i].getOrdinalValue() == o && (this._handCard[i].node.color = cc.Color.WHITE);
}
};
e.prototype.danhBai = function(t, e, n) {
void 0 === n && (n = !0);
var o = e.length;
if (0 != o) {
if (n) {
this._nCardCount -= o;
this.updateCardCount();
}
for (var i = 80 * o - 80 * (o - 1) / 2, r = 20 - Math.round(39 * Math.random()), a = 10 - Math.round(20 * Math.random()), s = 10 - Math.round(20 * Math.random()), c = 0; c < o; c++) {
var u = e[c], h = u % 4;
switch (h) {
case 0:
h = 0;
break;

case 1:
h = 13;
break;

case 2:
h = 26;
break;

case 3:
h = 39;
}
var d = (u - h / 13) / 4 + 3, p = cc.instantiate(t).getComponent("CardItem");
p.init(d, h, u);
p.node.angle = -r;
p.node.position = cc.v2(259, 197);
p.node.scale = l.GameConfig.BAIDANH_SCALE;
p.setMoved(!0);
this.bgCardTurn.addChild(p.node);
this._turnCards.push(p);
var f = 40 + 80 * c / 2 + a - i / 2, m = 20 + s;
n ? p.node.runAction(cc.moveTo(.25, cc.v2(f, m))) : p.node.position = cc.v2(f, m);
}
}
};
e.prototype.showResultFamily = function(t) {
t == this.ResultFamily.ToiTrang ? this.setPlayerStatus(s.PlayerStatus.ToiTrang) : t == this.ResultFamily.Ung ? this.setPlayerStatus(s.PlayerStatus.Ung) : t == this.ResultFamily.Cong_Thoi || t === this.ResultFamily.Cong || t == this.ResultFamily.Cong_Thoi_Sam ? this.setPlayerStatus(s.PlayerStatus.Cong) : t == this.ResultFamily.Thang ? this.setPlayerStatus(s.PlayerStatus.Thang) : t == this.ResultFamily.Thua ? this.setPlayerStatus(s.PlayerStatus.Thua) : t == this.ResultFamily.DenSam ? this.setPlayerStatus(s.PlayerStatus.DenSam) : t == this.ResultFamily.ChanSam ? this.setPlayerStatus(s.PlayerStatus.ChatSam) : t == this.ResultFamily.An_Sam && this.setPlayerStatus(s.PlayerStatus.AnSam);
};
e.prototype.boSam = function(t) {
this.setPlayerStatus(t ? s.PlayerStatus.BoSam : s.PlayerStatus.UnknownStatus);
};
e.prototype.endBoSam = function() {
this._statusInGame !== s.PlayerStatus.XinSam && this.boSam(!1);
};
r([ p(cc.Label) ], e.prototype, "lblBienValue", void 0);
r([ p(cc.Node) ], e.prototype, "imgBien", void 0);
r([ p(cc.Node) ], e.prototype, "bgCardCount", void 0);
r([ p(cc.Node) ], e.prototype, "bgCardTurn", void 0);
return r([ d ], e);
}(a.default);
n.default = f;
cc._RF.pop();
}, {
"../../common/scripts/Card/Player": "Player",
"../../common/scripts/Card/PlayerConst": "PlayerConst",
"../../common/scripts/LobbyCardGameConst": "LobbyCardGameConst",
"../../common/scripts/LobbyCardGameVar": "LobbyCardGameVar",
"./TienLenConst": "TienLenConst"
} ],
TLMNRoom: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3cc24C6eKZMcL6sqVIROVPa", "TLMNRoom");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./TLMNUI"), s = t("./TienLenConst"), c = t("./TLMNUtils"), u = t("../../common/scripts/Card/BasicRoom"), l = t("../../common/scripts/LobbyCardGameNetwork"), h = t("../../common/scripts/LobbyCardGameVar"), d = t("../../common/scripts/LobbyCardGameConst"), p = t("../../common/scripts/Card/PlayerConst"), f = cc._decorator, m = f.ccclass, y = f.property, g = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listPlayer = [];
e.UI = null;
e._handCardForMe = null;
e._arrayJoinGame = null;
e._suggestCards = null;
e._suggestCardsGuide = null;
e._isMyStartGame = !1;
e._isTouchCardAble = !1;
e._endRound = !0;
e._touching = !0;
e._selectedCard = null;
e._isTouchSort = null;
e._myLastFightCard = null;
e._sortCardType = 0;
e._indexDanhBai = -1;
e.chiaBai = !1;
e._askBaoSam = !1;
e.bundleName = "tlmn";
e.urlDev = "games/cardgame/tlmn/";
return e;
}
e.prototype.getPlayer = function(t) {
for (var e = 0; e < this.listPlayer.length; e++) {
var n = this.listPlayer[e];
if (n.getAccountID() == t) return n;
}
return null;
};
e.prototype.init = function(t, e) {
this._myPlayer = this.listPlayer[0];
this._arrayJoinGame = t;
this._lobbyGame = e;
this.setObserver();
this.initRoom(this._arrayJoinGame);
this.pnlChat.init(l.default.instance.mSignalr);
};
e.prototype.onBtnAll = function(t, e) {
cc.systemEvent.emit("active_user");
switch (e) {
case "chat":
this.onBtnChat();
break;

case "back":
this.onBtnBack();
break;

case "menu":
this.onBtnMenu();
break;

case "closeMenu":
this.UI.menu.active = !1;
break;

case "tutorial":
this.onBtnTutorial();
break;

case "danhbai":
this.onBtnDanhBai();
break;

case "bochon":
this.onBtnBoChon(t);
break;

case "xepbai":
this.onBtnXepBai();
break;

case "boluot":
this.onBtnBoLuot(t);
break;

case "huysam":
this.BaoSam(!1);
this._askBaoSam = !1;
this._myPlayer && this._myPlayer.boSam(!0);
this.showBaoSam(!1);
break;

case "baosam":
this.BaoSam(!0);
}
};
e.prototype.addDialog = function(t, e) {
void 0 === e && (e = 1);
this.UI.nodeDialog.addChild(t, e);
};
e.prototype.onBtnChat = function() {
this.pnlChat.node.active = !0;
};
e.prototype.onBtnTutorial = function() {
this.UI.menu.active = !1;
var t = h.default.gameID == d.CARD_GAMEID.GAME_TLMN_DL ? this.UI.prefabTutorialTL : this.UI.prefabTutorialS, e = cc.instantiate(t);
this.addDialog(e, 1);
};
e.prototype.onBtnMenu = function() {
this.UI.menu.active = !0;
};
e.prototype.onBtnSound = function() {};
e.prototype.onBtnBoLuot = function(t) {
this.PlayerAction("BoLuot");
this.UI.btnDanhBai.node.active = !1;
this.UI.btnBoLuot.node.active = !1;
this.onBtnBoChon(t);
};
e.prototype.onBtnBoChon = function(t) {
for (var e = 0; e < this._handCardForMe.length; e++) {
var n = this._handCardForMe[e];
if (n.isSelected()) {
n.setSelected(!1);
n.node.position = cc.v2(n.node.position.x, s.GameConfig.Y_CARD_DEFAULT);
}
}
this._selectedCard = [];
t.target.active = !1;
};
e.prototype.onBtnDanhBai = function() {
for (var t = [], e = 0; e < this._selectedCard.length; e++) t.push(this._selectedCard[e].getOrdinalValue());
this.DanhBai(t);
};
e.prototype.onBtnXepBai = function() {
if (0 === this._sortCardType) {
this._sortCardType = 1;
this._handCardForMe = c.default.sortCardByStraight(this._handCardForMe);
} else {
this._sortCardType = 0;
this._handCardForMe = c.default.sortCardByOrdinal(this._handCardForMe);
}
this.sortMyCard();
this._isTouchSort = !0;
this._isTouchCardAble = !0;
this._touching = !1;
};
e.prototype.sortMyCard = function() {
for (var t = h.default.gameID == d.CARD_GAMEID.GAME_SAMLOC ? 70 : 50, e = 0; e < this._handCardForMe.length; e++) {
var n = this._handCardForMe[e], o = cc.v2(s.GameConfig.X_TO_PLAYER + e * t, s.GameConfig.Y_CARD_DEFAULT);
n.node.position = cc.v2(s.GameConfig.X_TO_PLAYER, s.GameConfig.Y_CARD_DEFAULT);
n.node.zIndex = s.GameConfig._zOderBaiForMe + e;
n.setSelected(!1);
n.node.stopAllActions();
n.node.runAction(cc.moveTo(.08 * e, o).easing(cc.easeExponentialOut()));
}
this.UI.btnBoChon.node.active = !1;
this._selectedCard = [];
};
e.prototype.onGameSocket = function(t, e) {
if ("startGame" == e) this.startGame(t.A); else if ("startActionTimer" == e) this.startActionTimer(t.A); else if ("danhBai" == e) this.danhBai(t.A); else if ("endRound" == e) this.endRound(t.A); else if ("boLuot" == e) this.boLuot(t.A); else if ("playerJoin" == e) this.playerJoin(t.A); else if ("updateChatChong" == e) this.updateChatChong(t.A); else if ("showResult" == e) this.showResult(t.A); else if ("changeToPlay" === e) ; else if ("reply" == e) {
if (parseInt(t.I) && this._indexDanhBai && parseInt(t.I) === this._indexDanhBai) {
this._isTouchCardAble = !0;
this._lobbyGame && this._lobbyGame.showTooltip(h.default.NOTICE.STR_TLMN_CHON_BAI_SAI);
this.UI.btnDanhBai.node.active = !0;
for (var n = 0; n < this._myLastFightCard.length; n++) {
var o = this._myLastFightCard[n];
this.resetCard(o);
}
this._isMyStartGame || (this.UI.btnBoLuot.node.active = !0);
this.reZorderCard();
}
} else "playerBaoSam" == e ? this.baoSam(t.A) : "askBaoSam" == e ? this.askBaoSam(t.A) : "baoSam" == e ? this.baoSam(t.A) : "boSam" === e ? this.boSam(t.A) : "oneCard" === e ? this.baoOne(t.A) : "joinGame" === e || "baiDepToiTrang" == e && (1 == t.A[2] ? this.showToiTrang(d.CARD_GAMEID.GAME_TLMN_DL, !0) : this.showToiTrang(d.CARD_GAMEID.GAME_TLMN_DL, !1));
};
e.prototype.initRoom = function(t) {
if (!Array.isArray(t) || 0 == t.length) return !1;
var e = t[0];
if ("object" != typeof e) return !1;
this._ownerRoom = e.OwnerRoom;
this._nOwnerId = e.OwnerID;
this.setRoomInfo(e);
this.createPlayers(e.Players);
this.createGameLoop(e.GameLoop);
this.setCurrentPlayerActive(t[1]);
this.showStatePlayer(e);
e.IsPlaying && this._myPlayer && this._myPlayer.getStatus() == p.ConnectionStatus.PlayingInGame && (this.UI.btnXepBai.node.active = !0);
};
e.prototype.DanhBai = function(t) {
if (t.length >= 1) {
this._indexDanhBai = l.default.instance.mSignalr._index;
l.default.instance.sendSignalR("DanhBai", [ t ]);
this.UI.btnDanhBai.node.active = !1;
this.UI.btnBoLuot.node.active = !1;
this.UI.btnBoChon.node.active = !1;
this._myLastFightCard = this._selectedCard.slice(0);
this._selectedCard = [];
} else this._lobbyGame.showTooltip(h.default.NOTICE.STR_CHUA_CHON_QUAN_BAI);
};
e.prototype.createPlayers = function(t) {
if ("object" == typeof t) for (var e in t) if ("object" == typeof t[e]) {
var n = t[e], o = n.AccountID == lngui.UserManager.instance.mainUserInfo.AccountID ? 0 : 1, i = this.listPlayer[o];
i.setPositionInRoom(o);
i.init(n);
i.createHandCards(n.HandCards, this.UI.CardItem, !1);
this.enableOwner();
i.getAccountID() == lngui.UserManager.instance.mainUserInfo.AccountID && i.getStatus() == p.ConnectionStatus.PlayingInGame && this.createHandCardsForMe(n.HandCards);
}
};
e.prototype.createGameLoop = function(t) {
if ("object" == typeof t) {
var e = t.GameState;
if ("object" == typeof e) {
var n = e.DefaultAccount;
lngui.UserManager.instance.mainUserInfo.AccountID;
if (this._lobbyGame.curGameId == d.CARD_GAMEID.GAME_SAMLOC) ; else if (Array.isArray(e.ClientStates)) for (var o = e.ClientStates.length, i = 0; i < o; i++) {
var r = e.ClientStates[i];
if ("object" == typeof r) {
var a = r.AccountId, s = r.InTurn;
if (a == n && !s) return;
if (u = this.getPlayer(a)) {
u.createTurnCard(this.UI.CardItem);
s || u.boLuot(!0);
}
}
}
}
if (Array.isArray(t.CurrTurnCards)) for (i = t.CurrTurnCards.length - 1; i >= 0; i--) {
var c = t.CurrTurnCards[i];
if ("object" == typeof c) {
if (!Number.isInteger(c.Key)) return;
var u, l = c.Key;
if ("object" != typeof c.Value) return;
(u = this.getPlayer(l)).danhBai(this.UI.CardItem, c.Value.Cards, !1);
}
}
}
};
e.prototype.setCurrentPlayerActive = function(t) {
if ("object" == typeof t && Number.isInteger(t.Time)) {
var e = t.Time;
if ("object" == typeof t.State) {
var n = t.State;
if ("object" == typeof n) {
if (!Number.isInteger(n.AccountID)) return;
this._nOwnerId = n.AccountID;
var o = this.getPlayer(this._nOwnerId);
o && o.setLoadingStatus(e);
var i = n.AllowedActions;
if (i.length > 0) {
for (var r = 0; r < i.length; r++) switch (i[r]) {
case 1e3:
if (this.getNumPlayerActive() > 0) {
this.setTimeRemain(e);
o.removeLoadingStatus();
} else this._myPlayer && this.setMessageForGame(h.default.NOTICE.STR_BAT_DAU);
break;

case -1:
break;

case 1:
this._nOwnerId == lngui.UserManager.instance.mainUserInfo.AccountID && (this.UI.btnDanhBai.node.active = !0);
break;

case 2:
if (this._nOwnerId == lngui.UserManager.instance.mainUserInfo.AccountID) {
this.UI.btnBoLuot.node.active = !0;
this._endRound = !1;
}
break;

case s.GameAction.Ask_Sam:
o.removeLoadingStatus();
this.showBaoSam(e);
}
if (1 === i.length && 1 === i[0]) {
this._isMyStartGame = !0;
this.suggestDanhBaiGuide(this._handCardForMe);
}
} else this.setMessageForGame(h.default.NOTICE.STR_CHO_NGUOI_CHOI);
}
}
}
};
e.prototype.startActionTimer = function(t) {
if (Array.isArray(t) && 0 != t.length) {
var e = t[0], n = t[1];
this._nOwnerId = e;
var o = this.getPlayer(e);
o && o.setLoadingStatus(n);
if (Array.isArray(t[2]) && 0 != t[2].length) {
var i = t[2];
if (Array.isArray(i)) {
var r = i.length;
if (0 != r) switch (i[0]) {
case s.GameAction.StartGame:
this.setMessageForGame(h.default.NOTICE.STR_BAT_DAU);
this._isPlaying = !1;
this.resetGame();
this.setTimeRemain(n);
o.removeLoadingStatus();
break;

case s.GameAction.Wait:
break;

case s.GameAction.DanhBai:
this._isTouchCardAble = !0;
if (e == lngui.UserManager.instance.mainUserInfo.AccountID) {
this.UI.btnDanhBai.node.active = !0;
this.UI.btnBoLuot.node.active = !0;
} else {
this.UI.btnDanhBai.node.active = !1;
this.UI.btnBoLuot.node.active = !1;
}
if (h.default.gameID == d.CARD_GAMEID.GAME_SAMLOC) {
this.showBaoSam(!1);
if (this._askBaoSam) {
this.endBoSam();
this._askBaoSam = !1;
}
}
this._isMyStartGame = !1;
if (1 == r && e == lngui.UserManager.instance.mainUserInfo.AccountID) {
this._isMyStartGame = !0;
this.UI.btnBoLuot.node.active = !1;
this.suggestDanhBaiGuide(this._handCardForMe);
}
break;

case s.GameAction.BoLuot:
if (e == lngui.UserManager.instance.mainUserInfo.AccountID) this.UI.btnBoLuot.node.active = !0; else {
this.UI.btnDanhBai.node.active = !1;
this.UI.btnBoLuot.node.active = !1;
}
}
}
}
}
};
e.prototype.danhBai = function(t) {
if (Array.isArray(t) && 0 != t.length) {
var e = t[0];
if (Array.isArray(t[1]) && 0 != t[1].length) {
var n = this.getPlayer(e);
n.removeLoadingStatus();
if (e != lngui.UserManager.instance.mainUserInfo.AccountID) {
n && n.danhBai(this.UI.CardItem, t[1]);
this.suggestDanhBai(t[1], this._handCardForMe);
} else {
this._isTouchCardAble = !0;
this.danhBaiForMe(t[1]);
this.UI.btnDanhBai.node.active = !1;
this.UI.btnBoLuot.node.active = !1;
}
for (var o = [], i = t[1], r = 0; r < i.length; r++) {
var a = cc.instantiate(this.UI.CardItem).getComponent("CardItem");
o.push(a);
}
i.length >= 4 && (c.default.findFourKindCard(o).length > 0 || c.default.findFourPairCard(o).length > 0 || c.default.findThreePairCard(o).length);
this._endRound = !1;
}
}
};
e.prototype.endRound = function() {
for (var t in this.listPlayer) this.listPlayer[t].endRound();
this._endRound = !0;
this._suggestCards = [];
};
e.prototype.boLuot = function(t) {
if (Array.isArray(t) && 0 != t.length && Number.isInteger(t[0])) {
var e = t[0], n = this.getPlayer(e);
if (n) {
n.boLuot(!0);
n.removeLoadingStatus();
}
if (e === lngui.UserManager.instance.mainUserInfo.AccountID) {
this.UI.btnBoLuot.node.active = !1;
this.UI.btnDanhBai.node.active = !1;
}
}
};
e.prototype.startGame = function(t) {
this.setMessageForGame(" ");
this._isPlaying = !0;
if (Array.isArray(t) && 0 != t.length) {
var e = t[0];
if ("object" == typeof e) {
this.updatePlayers(e.Players, !0);
for (var n in e.Players) if (null != e.Players[n]) {
var o = e.Players[n];
if (!Number.isInteger(o.AccountID)) return;
var i = o.AccountID;
if (!Array.isArray(o.HandCards) || 0 == o.HandCards.length) return;
if (i != lngui.UserManager.instance.mainUserInfo.AccountID) {
var r = this.getPlayer(i);
r && r.createHandCards(o.HandCards, this.UI.CardItem, null);
} else this.createHandCardsForMe(o.HandCards, !0);
}
this._nOwnerId = e.OwnerID;
this.setCurrentGameLoopId(e.CurrentGameLoopID);
this._ownerRoom = e.OwnerRoom;
this.enableOwner();
}
}
};
e.prototype.resetGame = function() {
this.allPlayersReset();
this.UI.btnBoChon.node.active = !1;
this.UI.btnBoLuot.node.active = !1;
this.UI.btnXepBai.node.active = !1;
this.UI.btnDanhBai.node.active = !1;
this.UI.myCards.destroyAllChildren();
if (this._handCardForMe && this._handCardForMe.length > 0) for (var t = 0; t < this._handCardForMe.length; t++) this._handCardForMe[t].node.destroy();
this._handCardForMe = [];
this._isMyStartGame = !1;
this._sortCardType = 0;
this._selectedCard = [];
};
e.prototype.danhBaiForMe = function(t, e) {
void 0 === e && (e = !0);
var n = t.length;
if (0 != n) {
for (var o = 80 * n - 80 * (n - 1) / 2, i = 20 - Math.round(39 * Math.random()), r = 10 - Math.round(20 * Math.random()), a = 10 - Math.round(20 * Math.random()), c = 0; c < n; c++) for (var u = t[c], l = this._handCardForMe.length - 1; l >= 0; l--) if ((g = this._handCardForMe[l]).getOrdinalValue() == u) {
var p = cc.instantiate(this.UI.CardItem).getComponent("CardItem");
p.init(g.getCardNumber(), g.getCardSuite(), u);
p.node.angle = -i;
p.scale = 1.2;
p.setMoved(!0);
this._myPlayer.bgCardTurn.addChild(p.node);
this._myPlayer._turnCards.push(p);
p.node.position = g.node.position;
var f = 40 + 80 * c / 2 + r - o / 2, m = 20 + a;
if (e) {
p.node.runAction(cc.moveTo(.25, cc.v2(f, m)));
p.node.runAction(cc.scaleTo(.25, s.GameConfig.BAIDANH_SCALE));
} else {
p.node.position = cc.v2(f, m);
p.node.scale = s.GameConfig.BAIDANH_SCALE;
}
this._handCardForMe.splice(l, 1);
g.node.destroy();
break;
}
var y = h.default.gameID == d.CARD_GAMEID.GAME_SAMLOC ? 70 : 50;
for (c = 0; c < this._handCardForMe.length; c++) {
var g;
(g = this._handCardForMe[c]).node.zIndex = s.GameConfig._zOderBaiForMe + c;
g.node.stopAllActions();
g.node.position = cc.v2(s.GameConfig.X_TO_PLAYER + c * y, s.GameConfig.Y_CARD_DEFAULT);
g.setSelected(!1);
}
this._touching = !1;
this._isTouchSort = !0;
this._selectedCard = [];
}
};
e.prototype.askBaoSam = function(t) {
if (Array.isArray(t) && t.length > 0) {
var e = t[0];
this.showBaoSam(e);
this._askBaoSam = !0;
}
};
e.prototype.BaoSam = function(t) {
l.default.instance.sendSignalR("BaoSam", [ t ]);
};
e.prototype.baoSam = function(t) {
if (Array.isArray(t) && 0 != t.length) {
this.hideTimeRemain();
var e = t[0];
this._nOwnerId = e;
var n = this.getPlayer(e);
n && n.setPlayerStatus(p.PlayerStatus.XinSam);
}
};
e.prototype.baoOne = function(t) {
var e = t[0];
this.getPlayer(e);
};
e.prototype.createHandCardsForMe = function(t, e) {
void 0 === e && (e = !1);
if (Array.isArray(t)) {
this._handCardForMe = [];
var n = t.length;
if (0 != n) {
var o = this;
this._touching = !1;
for (var i = h.default.gameID == d.CARD_GAMEID.GAME_SAMLOC ? 70 : 50, r = 0; r < n; r++) {
var a = cc.instantiate(this.UI.CardItem), c = a.getComponent("CardItem");
c.init(t[r].CardNumber, t[r].CardSuite, t[r].OrdinalValue);
c.setSelected(!1);
c.setMoved(!1);
a.scale = 1.2;
a.on(cc.Node.EventType.TOUCH_START, function() {
cc.systemEvent.emit("active_user");
o._isTouchSort = !1;
}, this);
a.on(cc.Node.EventType.TOUCH_MOVE, function() {}, this);
a.on(cc.Node.EventType.TOUCH_END, function(t) {
o._touching = !1;
if (!o._isTouchSort && o._isTouchCardAble) {
var e = t.target.getComponent("CardItem");
e.isSelected() ? o.selectCard(e, !1) : o.selectCard(e, !0);
o._selectedCard = [];
for (var n = 0; n < o._handCardForMe.length; n++) {
var i = o._handCardForMe[n];
i.isSelected() && o._selectedCard.push(i);
}
o._isMyStartGame ? o && 2 === o._selectedCard.length && e.isSelected() && o.quickChoiceGuide(o._selectedCard) : o && 1 === o._selectedCard.length && e.isSelected() && o.quickChoice(e);
o._selectedCard.length > 0 ? o.UI.btnBoChon.node.active = !0 : o.UI.btnBoChon.node.active = !1;
}
}, this);
a.on(cc.Node.EventType.TOUCH_CANCEL, function() {
o._touching = !1;
}, this);
var u = cc.v2(s.GameConfig.X_TO_PLAYER + r * i, s.GameConfig.Y_CARD_DEFAULT);
if (e) {
c.setFliped(!0);
c.node.position = cc.v2(0, 0);
this.moveCard(c, u, .05 * r);
} else {
c.node.stopAllActions();
c.node.runAction(cc.moveTo(.08 * r, u).easing(cc.easeExponentialOut()));
}
this._handCardForMe.push(c);
this.UI.myCards.addChild(a);
}
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(.625 + .05 * n), cc.callFunc(function() {
this.UI.btnXepBai.node.active = !0;
this._isTouchCardAble = !0;
}, this)));
}
}
};
e.prototype.moveCard = function(t, e, n) {
if (t) {
t.node.stopAllActions();
t.node.runAction(cc.sequence(cc.delayTime(n), cc.moveTo(.25, e).easing(cc.easeExponentialOut()), cc.callFunc(function() {
t.flip();
})));
}
};
e.prototype.resetCard = function(t) {
if (t) {
this._handCardForMe.indexOf(t);
var e = cc.v2(t.node.position.x, s.GameConfig.Y_CARD_DEFAULT);
t.node.stopAllActions();
t.node.runAction(cc.moveTo(.25, e).easing(cc.easeExponentialOut()));
t.setSelected(!1);
}
};
e.prototype.selectCard = function(t, e) {
t.setSelected(e);
var n = e ? s.GameConfig.Y_CARD_SELECT : s.GameConfig.Y_CARD_DEFAULT;
t.node.position = cc.v2(t.node.position.x, n);
};
e.prototype.reZorderCard = function() {
for (var t = 0; t < this._handCardForMe.length; t++) this._handCardForMe[t].node.zIndex = s.GameConfig._zOderBaiForMe + t;
};
e.prototype.playerJoin = function(t) {
if (Array.isArray(t) && 0 != t.length && "object" == typeof t[0]) {
var e = t[0], n = e.AccountID;
if (null == this.getPlayer(n)) {
var o = this.listPlayer[1];
o.init(e);
o.setPositionInRoom(1);
this.enableOwner();
}
}
};
e.prototype.updateChatChong = function(t) {
if (Array.isArray(t) && 0 != t.length) {
var e = t[1], n = t[0], o = this.getPlayer(n);
if (o) {
o.setMoneyChange(e, !0);
o.setBalance(t[2]);
}
}
};
e.prototype.showResult = function(t) {
this._isTouchCardAble = !1;
this.UI.btnBoLuot.node.active = !1;
this.UI.btnBoChon.node.active = !1;
this.UI.btnDanhBai.node.active = !1;
this.UI.btnXepBai.node.active = !1;
this._myLastFightCard = [];
if (Array.isArray(t) && 0 != t.length) {
var e = t[0];
if ("object" == typeof e) {
for (var n in e.Players) {
var o = e.Players[n];
if (Number.isInteger(o.AccountID)) {
var i = o.AccountID;
if (u = this.getPlayer(i)) {
u.updateAccountInfo(o);
u.createHandCards(o.HandCards, this.UI.CardItem, !0);
u.removeLoadingStatus();
}
}
}
var r = e.GameLoop.SessionResult;
if ("object" == typeof r) {
var a = r.ResultList;
if (Array.isArray(a) && a.length > 0) for (var s = a.length, c = 0; c < s; c++) if ("object" == typeof a[c]) {
var u, l = a[c].AccountId;
if (u = this.getPlayer(l)) {
var h = a[c].ResultFamily;
u.showMoneyWin(a[c].Money);
u.showBaiThoi(a[c].BaiThoi);
u.showResultFamily(h);
}
}
}
}
}
};
e.prototype.showBaoSam = function(t) {
if (t) {
this.UI.pnlBaoSam.node.active = !0;
this.scheduleOnce(function() {
this.showBaoSam(!1);
}.bind(this), t);
this.UI.pnlBaoSam.setTime(t);
} else this.UI.pnlBaoSam.node.active = !1;
};
e.prototype.suggestDanhBai = function(t, e) {
if (t) {
this._suggestCards = [];
this._suggestCards = c.default.suggestListCardDefense(e, t);
}
};
e.prototype.suggestDanhBaiGuide = function(t) {
this._suggestCardsGuide = [];
this._suggestCardsGuide = c.default.suggestListCardGuide(t);
};
e.prototype.quickChoice = function(t) {
if (this._suggestCards) for (var e = 0; e < this._suggestCards.length; e++) for (var n = this._suggestCards[e], o = 0; o < n.length; o++) if (t === n[o]) {
this._selectedCard = [];
for (e = 0; e < n.length; e++) if (n[e]) {
n[e].setSelected(!0);
n[e].node.position = cc.v2(n[e].node.position.x, s.GameConfig.Y_CARD_SELECT);
this._selectedCard.push(n[e]);
}
return;
}
};
e.prototype.quickChoiceGuide = function(t) {
for (var e = 0; e < this._suggestCardsGuide.length; e++) {
for (var n = this._suggestCardsGuide[e], o = !0, i = 0; i < t.length; i++) if (n.indexOf(t[i]) < 0) {
o = !1;
break;
}
if (o) {
this._selectedCard = [];
for (i = 0; i < n.length; i++) {
n[i].setSelected(!0);
n[i].node.position = cc.v2(n[i].node.position.x, s.GameConfig.Y_CARD_SELECT);
this._selectedCard.push(n[i]);
}
return;
}
}
};
e.prototype.boSam = function(t) {
if (Array.isArray(t) && 0 != t.length && Number.isInteger(t[0])) {
var e = t[0], n = this.getPlayer(e);
n && n.boSam(!0);
}
};
e.prototype.endBoSam = function() {
for (var t in this.listPlayer) this.listPlayer[t].endBoSam();
};
r([ y({
override: !0
}) ], e.prototype, "listPlayer", void 0);
r([ y(a.default) ], e.prototype, "UI", void 0);
return r([ m ], e);
}(u.default);
n.default = g;
cc._RF.pop();
}, {
"../../common/scripts/Card/BasicRoom": "BasicRoom",
"../../common/scripts/Card/PlayerConst": "PlayerConst",
"../../common/scripts/LobbyCardGameConst": "LobbyCardGameConst",
"../../common/scripts/LobbyCardGameNetwork": "LobbyCardGameNetwork",
"../../common/scripts/LobbyCardGameVar": "LobbyCardGameVar",
"./TLMNUI": "TLMNUI",
"./TLMNUtils": "TLMNUtils",
"./TienLenConst": "TienLenConst"
} ],
TLMNUI: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "2fcc0pcukVDqpx86oWSiX2w", "TLMNUI");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../common/scripts/Card/PlayerTime"), s = cc._decorator, c = s.ccclass, u = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.CardItem = null;
e.btnDanhBai = null;
e.btnBoLuot = null;
e.btnBoChon = null;
e.btnXepBai = null;
e.pnlBaoSam = null;
e.myCards = null;
e.menu = null;
e.nodeDialog = null;
e.dealer = null;
e.prefabTutorialTL = null;
e.prefabTutorialS = null;
return e;
}
r([ u(cc.Prefab) ], e.prototype, "CardItem", void 0);
r([ u(cc.Button) ], e.prototype, "btnDanhBai", void 0);
r([ u(cc.Button) ], e.prototype, "btnBoLuot", void 0);
r([ u(cc.Button) ], e.prototype, "btnBoChon", void 0);
r([ u(cc.Button) ], e.prototype, "btnXepBai", void 0);
r([ u(a.default) ], e.prototype, "pnlBaoSam", void 0);
r([ u(cc.Node) ], e.prototype, "myCards", void 0);
r([ u(cc.Node) ], e.prototype, "menu", void 0);
r([ u(cc.Node) ], e.prototype, "nodeDialog", void 0);
r([ u(sp.Skeleton) ], e.prototype, "dealer", void 0);
r([ u(cc.Prefab) ], e.prototype, "prefabTutorialTL", void 0);
r([ u(cc.Prefab) ], e.prototype, "prefabTutorialS", void 0);
return r([ c ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"../../common/scripts/Card/PlayerTime": "PlayerTime"
} ],
TLMNUtils: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c57f6Of3zpP5JfTm65d6COP", "TLMNUtils");
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
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../common/scripts/Card/CardItem"), s = t("../../common/scripts/LobbyCardGameConst"), c = t("../../common/scripts/LobbyCardGameVar"), u = t("../../common/scripts/util/Util"), l = cc._decorator, h = l.ccclass, d = (l.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.cloneListCardMinusCardTwo = function(t) {
for (var e = t.slice(0), n = e.length - 1; n >= 0; n--) 2 === e[n].getCardNumber() ? e.splice(n, 1) : 1 === e[n].getCardNumber() && e[n].setCardNumber(14);
return e;
};
e.cloneListCard = function(t) {
for (var e = t.slice(0), n = e.length - 1; n >= 0; n--) 2 === e[n].getCardNumber() ? e[n].setCardNumber(15) : 1 === e[n].getCardNumber() && e[n].setCardNumber(14);
return e;
};
e.resetListCard = function(t) {
for (var e = t.length - 1; e >= 0; e--) 15 === t[e].getCardNumber() ? t[e].setCardNumber(2) : 14 === t[e].getCardNumber() && t[e].setCardNumber(1);
};
e.findCardTwo = function(t) {
for (var e = [], n = 0; n < t.length; n++) {
var o = t[n];
2 === o.getCardNumber() && e.push(o);
}
return e;
};
e.findOneCard = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = null);
for (var n = [], o = this.suggestListCardGuide(t), i = function(t) {
for (var e = 0; e < o.length; e++) if (o[e].indexOf(t) >= 0) return !0;
return !1;
}, r = e[0], a = this.cloneListCard(t), s = 0; s < a.length; s++) i(u = a[s]) || (100 === c.default.gameID ? u.getOrdinalValue() > r.getOrdinalValue() && n.push([ u ]) : u.getCardNumber() > r.getCardNumber() && n.push([ u ]));
if (0 === n.length) for (s = 0; s < a.length; s++) {
var u = a[s];
100 === c.default.gameID ? u.getOrdinalValue() > r.getOrdinalValue() && n.push([ u ]) : u.getCardNumber() > r.getCardNumber() && n.push([ u ]);
}
return n;
};
e.findTwoCard = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = null);
for (var n = [], o = this.cloneListCard(t), i = 0; i < o.length - 1; i++) for (var r = i + 1; r < o.length; r++) if (o[i].getCardNumber() === o[r].getCardNumber()) if (e) {
var a = Math.max(o[i].getOrdinalValue(), o[r].getOrdinalValue());
100 === c.default.gameID ? a > e[e.length - 1].getOrdinalValue() && n.push([ o[i], o[r] ]) : o[i].getCardNumber() > e[0].getCardNumber() && n.push([ o[i], o[r] ]);
} else n.push([ o[i], o[r] ]);
return n;
};
e.findThreeKindCard = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = null);
for (var n = [], o = 0; o < t.length - 2; o++) for (var i = o + 1; i < t.length - 1; i++) if (t[o].getCardNumber() === t[i].getCardNumber()) for (var r = i + 1; r < t.length; r++) t[o].getCardNumber() === t[r].getCardNumber() && (e ? Math.max(t[o].getOrdinalValue(), t[i].getOrdinalValue(), t[r].getOrdinalValue()) > e[e.length - 1].getOrdinalValue() && n.push([ t[o], t[i], t[r] ]) : n.push([ t[o], t[i], t[r] ]));
return n;
};
e.findFourKindCard = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = null);
for (var n = [], o = 0; o < t.length - 3; o++) for (var i = o + 1; i < t.length - 2; i++) if (t[o].getCardNumber() === t[i].getCardNumber()) for (var r = i + 1; r < t.length - 1; r++) if (t[o].getCardNumber() === t[r].getCardNumber()) for (var a = r + 1; a < t.length; a++) t[o].getCardNumber() === t[a].getCardNumber() && (e ? 1 === e.length || 2 === e.length || 6 === e.length ? n.push([ t[o], t[i], t[r], t[a] ]) : Math.max(t[o].getOrdinalValue(), t[i].getOrdinalValue(), t[r].getOrdinalValue(), t[a].getOrdinalValue()) > e[e.length - 1].getOrdinalValue() && n.push([ t[o], t[i], t[r], t[a] ]) : n.push([ t[o], t[i], t[r], t[a] ]));
return n;
};
e.findThreePairCard = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = null);
var n = [];
if (c.default.gameID == s.CARD_GAMEID.GAME_SAMLOC) return n;
for (var o = this.cloneListCardMinusCardTwo(t), i = 0; i < o.length - 5; i++) for (var r = i + 1; r < o.length - 4; r++) if (o[i].getCardNumber() === o[r].getCardNumber()) for (var a = r + 1; a < o.length - 3; a++) if (o[a].getCardNumber() === o[r].getCardNumber() + 1) for (var u = a + 1; u < o.length - 2; u++) if (o[u].getCardNumber() === o[a].getCardNumber()) for (var l = u + 1; l < o.length - 1; l++) if (o[l].getCardNumber() === o[u].getCardNumber() + 1) for (var h = l + 1; h < o.length; h++) o[h].getCardNumber() === o[l].getCardNumber() && (e ? 1 === e.length ? n.push([ o[i], o[r], o[a], o[u], o[l], o[h] ]) : o[h].getOrdinalValue() > Math.max.apply(Math, e) && n.push([ o[i], o[r], o[a], o[u], o[l], o[h] ]) : n.push([ o[i], o[r], o[a], o[u], o[l], o[h] ]));
return n;
};
e.findFourPairCard = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = null);
var n = [];
if (c.default.gameID == s.CARD_GAMEID.GAME_SAMLOC) return n;
for (var o = this.cloneListCardMinusCardTwo(t), i = 0; i < o.length - 7; i++) for (var r = i + 1; r < o.length - 6; r++) if (o[i].getCardNumber() === o[r].getCardNumber()) for (var a = r + 1; a < o.length - 5; a++) if (o[a].getCardNumber() === o[r].getCardNumber() + 1) for (var u = a + 1; u < o.length - 4; u++) if (o[u].getCardNumber() === o[a].getCardNumber()) for (var l = u + 1; l < o.length - 3; l++) if (o[l].getCardNumber() === o[u].getCardNumber() + 1) for (var h = l + 1; h < o.length - 2; h++) if (o[h].getCardNumber() === o[l].getCardNumber()) for (var d = h + 1; d < o.length - 1; d++) if (o[d].getCardNumber() === o[h].getCardNumber() + 1) for (var p = d + 1; p < o.length; p++) o[p].getCardNumber() === o[d].getCardNumber() && (e ? 1 === e.length || 2 === e.length || 6 === e.length || 4 === e.length || 8 === e.length ? n.push([ o[i], o[r], o[a], o[u], o[l], o[h], o[d], o[p] ]) : o[p].getOrdinalValue() > Math.max.apply(Math, e) && n.push([ o[i], o[r], o[a], o[u], o[l], o[h], o[d], o[p] ]) : n.push([ o[i], o[r], o[a], o[u], o[l], o[h], o[d], o[p] ]));
return n;
};
e.findThreeStraightCard = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = null);
for (var n = [], o = this.cloneListCardMinusCardTwo(t), i = 0; i < o.length - 2; i++) for (var r = i + 1; r < o.length - 1; r++) if (o[r].getCardNumber() === o[i].getCardNumber() + 1) for (var a = r + 1; a < o.length; a++) o[a].getCardNumber() === o[r].getCardNumber() + 1 && (e ? 100 === c.default.gameID ? o[a].getOrdinalValue() > e[e.length - 1].getOrdinalValue() && n.push([ o[i], o[r], o[a] ]) : o[a].getCardNumber() > e[e.length - 1].getCardNumber() && n.push([ o[i], o[r], o[a] ]) : n.push([ o[i], o[r], o[a] ]));
return n;
};
e.findFourStraightCard = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = null);
for (var n = [], o = this.cloneListCardMinusCardTwo(t), i = 0; i < o.length - 3; i++) for (var r = i + 1; r < o.length - 2; r++) if (o[r].getCardNumber() === o[i].getCardNumber() + 1) for (var a = r + 1; a < o.length - 1; a++) if (o[a].getCardNumber() === o[r].getCardNumber() + 1) for (var s = a + 1; s < o.length; s++) o[s].getCardNumber() === o[a].getCardNumber() + 1 && (e ? 100 === c.default.gameID ? o[s].getOrdinalValue() > e[e.length - 1].getOrdinalValue() && n.push([ o[i], o[r], o[a], o[s] ]) : o[s].getCardNumber() > e[e.length - 1].getCardNumber() && n.push([ o[i], o[r], o[a], o[s] ]) : n.push([ o[i], o[r], o[a], o[s] ]));
return n;
};
e.findFiveStraightCard = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = null);
for (var n = [], o = this.cloneListCardMinusCardTwo(t), i = 0; i < o.length - 4; i++) for (var r = i + 1; r < o.length - 3; r++) if (o[r].getCardNumber() === o[i].getCardNumber() + 1) for (var a = r + 1; a < o.length - 2; a++) if (o[a].getCardNumber() === o[r].getCardNumber() + 1) for (var s = a + 1; s < o.length - 1; s++) if (o[s].getCardNumber() === o[a].getCardNumber() + 1) for (var u = s + 1; u < o.length; u++) o[u].getCardNumber() === o[s].getCardNumber() + 1 && (e ? 100 === c.default.gameID ? o[u].getOrdinalValue() > e[e.length - 1].getOrdinalValue() && n.push([ o[i], o[r], o[a], o[s], o[u] ]) : o[u].getCardNumber() > e[e.length - 1].getCardNumber() && n.push([ o[i], o[r], o[a], o[s], o[u] ]) : n.push([ o[i], o[r], o[a], o[s], o[u] ]));
return n;
};
e.findSixStraightCard = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = null);
for (var n = [], o = this.cloneListCardMinusCardTwo(t), i = 0; i < o.length - 5; i++) for (var r = i + 1; r < o.length - 4; r++) if (o[r].getCardNumber() === o[i].getCardNumber() + 1) for (var a = r + 1; a < o.length - 3; a++) if (o[a].getCardNumber() === o[r].getCardNumber() + 1) for (var s = a + 1; s < o.length - 2; s++) if (o[s].getCardNumber() === o[a].getCardNumber() + 1) for (var u = s + 1; u < o.length - 1; u++) if (o[u].getCardNumber() === o[s].getCardNumber() + 1) for (var l = u + 1; l < o.length; l++) o[l].getCardNumber() === o[u].getCardNumber() + 1 && (e ? 100 === c.default.gameID ? o[l].getOrdinalValue() > e[e.length - 1].getOrdinalValue() && n.push([ o[i], o[r], o[a], o[s], o[u], o[l] ]) : o[l].getCardNumber() > e[e.length - 1].getCardNumber() && n.push([ o[i], o[r], o[a], o[s], o[u], o[l] ]) : n.push([ o[i], o[r], o[a], o[s], o[u], o[l] ]));
return n;
};
e.findSevenStraightCard = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = null);
for (var n = [], o = this.cloneListCardMinusCardTwo(t), i = 0; i < o.length - 6; i++) for (var r = i + 1; r < o.length - 5; r++) if (o[r].getCardNumber() === o[i].getCardNumber() + 1) for (var a = r + 1; a < o.length - 4; a++) if (o[a].getCardNumber() === o[r].getCardNumber() + 1) for (var s = a + 1; s < o.length - 3; s++) if (o[s].getCardNumber() === o[a].getCardNumber() + 1) for (var u = s + 1; u < o.length - 2; u++) if (o[u].getCardNumber() === o[s].getCardNumber() + 1) for (var l = u + 1; l < o.length - 1; l++) if (o[l].getCardNumber() === o[u].getCardNumber() + 1) for (var h = l + 1; h < o.length; h++) o[h].getCardNumber() === o[l].getCardNumber() + 1 && (e ? 100 === c.default.gameID ? o[h].getOrdinalValue() > e[e.length - 1].getOrdinalValue() && n.push([ o[i], o[r], o[a], o[s], o[u], o[l], o[h] ]) : o[h].getCardNumber() > e[e.length - 1].getCardNumber() && n.push([ o[i], o[r], o[a], o[s], o[u], o[l], o[h] ]) : n.push([ o[i], o[r], o[a], o[s], o[u], o[l], o[h] ]));
return n;
};
e.findEightStraightCard = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = null);
for (var n = [], o = this.cloneListCardMinusCardTwo(t), i = 0; i < o.length - 7; i++) for (var r = i + 1; r < o.length - 6; r++) if (o[r].getCardNumber() === o[i].getCardNumber() + 1) for (var a = r + 1; a < o.length - 5; a++) if (o[a].getCardNumber() === o[r].getCardNumber() + 1) for (var s = a + 1; s < o.length - 4; s++) if (o[s].getCardNumber() === o[a].getCardNumber() + 1) for (var u = s + 1; u < o.length - 3; u++) if (o[u].getCardNumber() === o[s].getCardNumber() + 1) for (var l = u + 1; l < o.length - 2; l++) if (o[l].getCardNumber() === o[u].getCardNumber() + 1) for (var h = l + 1; h < o.length - 1; h++) if (o[h].getCardNumber() === o[l].getCardNumber() + 1) for (var d = h + 1; d < o.length; d++) o[d].getCardNumber() === o[h].getCardNumber() + 1 && (e ? 100 === c.default.gameID ? o[d].getOrdinalValue() > e[e.length - 1].getOrdinalValue() && n.push([ o[i], o[r], o[a], o[s], o[u], o[l], o[h], o[d] ]) : o[d].getCardNumber() > e[e.length - 1].getCardNumber() && n.push([ o[i], o[r], o[a], o[s], o[u], o[l], o[h], o[d] ]) : n.push([ o[i], o[r], o[a], o[s], o[u], o[l], o[h], o[d] ]));
return n;
};
e.findNineStraightCard = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = null);
for (var n = [], o = this.cloneListCardMinusCardTwo(t), i = 0; i < o.length - 8; i++) for (var r = i + 1; r < o.length - 7; r++) if (o[r].getCardNumber() === o[i].getCardNumber() + 1) for (var a = r + 1; a < o.length - 6; a++) if (o[a].getCardNumber() === o[r].getCardNumber() + 1) for (var s = a + 1; s < o.length - 5; s++) if (o[s].getCardNumber() === o[a].getCardNumber() + 1) for (var u = s + 1; u < o.length - 4; u++) if (o[u].getCardNumber() === o[s].getCardNumber() + 1) for (var l = u + 1; l < o.length - 3; l++) if (o[l].getCardNumber() === o[u].getCardNumber() + 1) for (var h = l + 1; h < o.length - 2; h++) if (o[h].getCardNumber() === o[l].getCardNumber() + 1) for (var d = h + 1; d < o.length - 1; d++) if (o[d].getCardNumber() === o[h].getCardNumber() + 1) for (var p = d + 1; p < o.length; p++) o[p].getCardNumber() === o[d].getCardNumber() + 1 && (e ? 100 === c.default.gameID ? o[p].getOrdinalValue() > e[e.length - 1].getOrdinalValue() && n.push([ o[i], o[r], o[a], o[s], o[u], o[l], o[h], o[d], o[p] ]) : o[p].getCardNumber() > e[e.length - 1].getCardNumber() && n.push([ o[i], o[r], o[a], o[s], o[u], o[l], o[h], o[d], o[p] ]) : n.push([ o[i], o[r], o[a], o[s], o[u], o[l], o[h], o[d], o[p] ]));
return n;
};
e.findTenStraightCard = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = null);
for (var n = [], o = this.cloneListCardMinusCardTwo(t), i = 0; i < o.length - 9; i++) for (var r = i + 1; r < o.length - 8; r++) if (o[r].getCardNumber() === o[i].getCardNumber() + 1) for (var a = r + 1; a < o.length - 7; a++) if (o[a].getCardNumber() === o[r].getCardNumber() + 1) for (var s = a + 1; s < o.length - 6; s++) if (o[s].getCardNumber() === o[a].getCardNumber() + 1) for (var u = s + 1; u < o.length - 5; u++) if (o[u].getCardNumber() === o[s].getCardNumber() + 1) for (var l = u + 1; l < o.length - 4; l++) if (o[l].getCardNumber() === o[u].getCardNumber() + 1) for (var h = l + 1; h < o.length - 3; h++) if (o[h].getCardNumber() === o[l].getCardNumber() + 1) for (var d = h + 1; d < o.length - 2; d++) if (o[d].getCardNumber() === o[h].getCardNumber() + 1) for (var p = d + 1; p < o.length - 1; p++) if (o[p].getCardNumber() === o[d].getCardNumber() + 1) for (var f = p + 1; f < o.length; f++) o[f].getCardNumber() === o[p].getCardNumber() + 1 && (e ? 100 === c.default.gameID ? o[f].getOrdinalValue() > e[e.length - 1].getOrdinalValue() && n.push([ o[i], o[r], o[a], o[s], o[u], o[l], o[h], o[d], o[p], o[f] ]) : o[f].getCardNumber() > e[e.length - 1].getCardNumber() && n.push([ o[i], o[r], o[a], o[s], o[u], o[l], o[h], o[d], o[p], o[f] ]) : n.push([ o[i], o[r], o[a], o[s], o[u], o[l], o[h], o[d], o[p], o[f] ]));
return n;
};
e.findEleventStraightCard = function(t, e) {
void 0 === t && (t = null);
void 0 === e && (e = null);
for (var n = [], o = this.cloneListCardMinusCardTwo(t), i = 0; i < o.length - 10; i++) for (var r = i + 1; r < o.length - 9; r++) if (o[r].getCardNumber() === o[i].getCardNumber() + 1) for (var a = r + 1; a < o.length - 8; a++) if (o[a].getCardNumber() === o[r].getCardNumber() + 1) for (var s = a + 1; s < o.length - 7; s++) if (o[s].getCardNumber() === o[a].getCardNumber() + 1) for (var u = s + 1; u < o.length - 6; u++) if (o[u].getCardNumber() === o[s].getCardNumber() + 1) for (var l = u + 1; l < o.length - 5; l++) if (o[l].getCardNumber() === o[u].getCardNumber() + 1) for (var h = l + 1; h < o.length - 4; h++) if (o[h].getCardNumber() === o[l].getCardNumber() + 1) for (var d = h + 1; d < o.length - 3; d++) if (o[d].getCardNumber() === o[h].getCardNumber() + 1) for (var p = d + 1; p < o.length - 2; p++) if (o[p].getCardNumber() === o[d].getCardNumber() + 1) for (var f = p + 1; f < o.length - 1; f++) if (o[f].getCardNumber() === o[p].getCardNumber() + 1) for (var m = f + 1; m < o.length; m++) o[m].getCardNumber() === o[f].getCardNumber() + 1 && (e ? 100 === c.default.gameID ? o[m].getOrdinalValue() > e[e.length - 1].getOrdinalValue() && n.push([ o[i], o[r], o[a], o[s], o[u], o[l], o[h], o[d], o[p], o[f], o[m] ]) : o[m].getCardNumber() > e[e.length - 1].getCardNumber() && n.push([ o[i], o[r], o[a], o[s], o[u], o[l], o[h], o[d], o[p], o[f], o[m] ]) : n.push([ o[i], o[r], o[a], o[s], o[u], o[l], o[h], o[d], o[p], o[f], o[m] ]));
return n;
};
e.findTwelveStraightCard = function(t) {
for (var e = [], n = this.cloneListCardMinusCardTwo(t), o = 0; o < n.length - 11; o++) for (var i = o + 1; i < n.length - 10; i++) if (n[i].getCardNumber() === n[o].getCardNumber() + 1) for (var r = i + 1; r < n.length - 9; r++) if (n[r].getCardNumber() === n[i].getCardNumber() + 1) for (var a = r + 1; a < n.length - 8; a++) if (n[a].getCardNumber() === n[r].getCardNumber() + 1) for (var s = a + 1; s < n.length - 7; s++) if (n[s].getCardNumber() === n[a].getCardNumber() + 1) for (var c = s + 1; c < n.length - 6; c++) if (n[c].getCardNumber() === n[s].getCardNumber() + 1) for (var u = c + 1; u < n.length - 5; u++) if (n[u].getCardNumber() === n[c].getCardNumber() + 1) for (var l = u + 1; l < n.length - 4; l++) if (n[l].getCardNumber() === n[u].getCardNumber() + 1) for (var h = l + 1; h < n.length - 3; h++) if (n[h].getCardNumber() === n[l].getCardNumber() + 1) for (var d = h + 1; d < n.length - 2; d++) if (n[d].getCardNumber() === n[h].getCardNumber() + 1) for (var p = d + 1; p < n.length - 1; p++) if (n[p].getCardNumber() === n[d].getCardNumber() + 1) {
for (var f = p + 1; f < n.length; f++) n[f].getCardNumber() === n[p].getCardNumber() + 1 && e.push([ n[o], n[i], n[r], n[a], n[s], n[c], n[u], n[l], n[h], n[d], n[p], n[f] ]);
return e;
}
};
e.isDayAtCo = function(t) {
return !(t.length < 3) && t[0].getCardNumber() === t[1].getCardNumber() - 1 && 14 === t[t.length - 1].getCardNumber() && 39 === t[t.length - 1].getCardSuite();
};
e.suggestListCardDefense = function(t, e) {
for (var n = [], o = e.length, i = [], r = 0; r < o; r++) {
var s = new a.default();
s.initCardWithOrdinalValue(e[r]);
i.push(s);
}
1 === o ? n = 2 === i[0].getCardNumber() ? 100 === c.default.gameID ? this.findFourKindCard(t, i).concat(this.findThreePairCard(t, i), this.findFourPairCard(t, i), this.findOneCard(t, i)) : this.findFourKindCard(t, i) : this.findOneCard(t, i) : 2 === o ? n = 100 === c.default.gameID && 2 === i[0].getCardNumber() ? this.findFourKindCard(t, i).concat(this.findFourPairCard(t, i)) : this.findTwoCard(t, i) : 3 === o ? n = i[0].getCardNumber() === i[1].getCardNumber() ? this.findThreeKindCard(t, i) : this.findThreeStraightCard(t, i) : 4 === o ? n = i[0].getCardNumber() === i[1].getCardNumber() ? this.findFourKindCard(t, i).concat(this.findFourPairCard(t, i)) : this.findFourStraightCard(t, i) : 5 === o ? n = this.findFiveStraightCard(t, i) : 6 === o ? n = i[0].getCardNumber() === i[1].getCardNumber() ? this.findThreePairCard(t, i).concat(this.findFourPairCard(t, i), this.findFourKindCard(t, i)) : this.findSixStraightCard(t, i) : 7 === o ? n = this.findSevenStraightCard(t, i) : 8 === o ? n = i[0].getCardNumber() === i[1].getCardNumber() ? this.findFourPairCard(t, i) : this.findEightStraightCard(t, i) : 9 === o ? n = this.findNineStraightCard(t, i) : 10 === o ? n = this.findTenStraightCard(t, i) : 11 === o && (n = this.findEleventStraightCard(t, i));
this.resetListCard(t);
return n;
};
e.suggestListCardGuide = function(t) {
var e = this.findEleventStraightCard(t).concat(this.findTenStraightCard(t), this.findNineStraightCard(t), this.findEightStraightCard(t), this.findFourPairCard(t), this.findSevenStraightCard(t), this.findSixStraightCard(t), this.findThreePairCard(t), this.findFiveStraightCard(t), this.findFourStraightCard(t), this.findFourKindCard(t), this.findThreeStraightCard(t), this.findThreeKindCard(t), this.findTwoCard(t));
this.resetListCard(t);
return e;
};
e.sortCardByKind = function(t) {
for (var e = [], n = [], o = (t = this.sortCardByOrdinal(t, !0)).length - 1; o >= 0; o--) {
e.push([ t[o] ]);
for (var i = o - 1; i >= 0; i--) if (t[i].getCardNumber() === t[o].getCardNumber()) {
e[e.length - 1].push(t[i]);
t.slice(i, 1);
o--;
}
if (e[e.length - 1].length < 2) {
n = n.concat(e[e.length - 1]);
e.pop();
}
}
e.sort(function(t, e) {
return t.length !== e.length ? e.length - t.length : t[t.length - 1].getOrdinalValue() - e[e.length - 1].getOrdinalValue();
});
n = this.sortCardByOrdinal(n);
t = [];
for (o = 0; o < e.length; o++) t = t.concat(e[o]);
return t.concat(n);
};
e.sortCardByOrdinal = function(t, e) {
void 0 === e && (e = null);
e ? t.sort(function(t, e) {
return e.getOrdinalValue() - t.getOrdinalValue();
}) : t.sort(function(t, e) {
return t.getOrdinalValue() - e.getOrdinalValue();
});
return t;
};
e.sortCardByStraight = function(t) {
var e = this.sortCardByOrdinal(t), n = this.findFourPairCard(e), o = [], i = [];
if (n.length > 0) {
n = n[0];
e = u.default.removeArrayFromArray(e, n);
} else {
o = this.findFourKindCard(e);
for (var r = 0; r < o.length; r++) e = u.default.removeArrayFromArray(e, o[r]);
if ((i = this.findThreePairCard(e)).length > 0) {
i = i[0];
e = u.default.removeArrayFromArray(e, i);
}
}
for (r = e.length - 1; r >= 0; r--) 1 === e[r].getCardNumber() && e[r].setCardNumber(14);
var a = [], s = [];
for (r = (e = this.sortCardByOrdinal(e, !0)).length - 1; r >= 0; r--) {
if (a.length > 0 && a[a.length - 1].length < 3) {
s = s.concat(a[a.length - 1]);
a.pop();
}
if (2 !== e[r].getCardNumber()) {
a.push([]);
a[a.length - 1].push(e[r]);
for (var c = e[r].getCardNumber(), l = r - 1; l >= 0; l--) if (e[l].getCardNumber() === c + 1 && 2 !== e[l].getCardNumber()) {
a[a.length - 1].push(e[l]);
c = e[l].getCardNumber();
e.splice(l, 1);
r--;
}
} else s.push(e[r]);
if (0 === r && a.length > 0 && a[a.length - 1].length < 3) {
s = s.concat(a[a.length - 1]);
a.pop();
}
}
var h = n;
for (r = 0; r < o.length; r++) h = h.concat(o[r]);
h = h.concat(i);
a.sort(function(t, e) {
return t.length != e.length ? e.length - t.length : e[e.length - 1].getOrdinalValue() - t[t.length - 1].getOrdinalValue();
});
for (r = 0; r < a.length; r++) h = h.concat(a[r]);
s = this.sortCardByKind(s);
return h.concat(s);
};
return r([ h ], e);
}(cc.Component));
n.default = d;
cc._RF.pop();
}, {
"../../common/scripts/Card/CardItem": "CardItem",
"../../common/scripts/LobbyCardGameConst": "LobbyCardGameConst",
"../../common/scripts/LobbyCardGameVar": "LobbyCardGameVar",
"../../common/scripts/util/Util": void 0
} ],
TienLenConst: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "4ca7fWVlypCUp1pXj/M62sb", "TienLenConst");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.GameConfig = n.ResultFamily_SL = n.ResultFamily_TL = n.GameAction = n.RESULT_TYPE = void 0;
(function(t) {
t[t.NAM_DOI_THONG = 0] = "NAM_DOI_THONG";
t[t.SAU_DOI = 1] = "SAU_DOI";
t[t.TU_QUY_2 = 2] = "TU_QUY_2";
t[t.TU_QUY_3 = 3] = "TU_QUY_3";
t[t.SANH_RONG = 4] = "SANH_RONG";
t[t.TOI_TRANG = 5] = "TOI_TRANG";
t[t.DONG_HOA = 6] = "DONG_HOA";
t[t.BA_DOI_THONG_3_BICH = 7] = "BA_DOI_THONG_3_BICH";
t[t.HAI_BO_TU = 8] = "HAI_BO_TU";
t[t.NAM_DOI = 9] = "NAM_DOI";
t[t.CHAT_SAM = 10] = "CHAT_SAM";
t[t.DEN_SAM = 11] = "DEN_SAM";
t[t.AN_SAM = 12] = "AN_SAM";
t[t.THANG = 13] = "THANG";
t[t.THUA = 14] = "THUA";
t[t.THUA_CONG = 15] = "THUA_CONG";
t[t.DEN_LANG = 16] = "DEN_LANG";
t[t.THOI = 17] = "THOI";
})(n.RESULT_TYPE || (n.RESULT_TYPE = {}));
(function(t) {
t[t.StartGame = 1e3] = "StartGame";
t[t.Wait = -1] = "Wait";
t[t.DanhBai = 1] = "DanhBai";
t[t.BoLuot = 2] = "BoLuot";
t[t.Ask_Sam = 3] = "Ask_Sam";
t[t.ChatBai = 3] = "ChatBai";
t[t.ThangThua = 4] = "ThangThua";
t[t.UnknownResult = 5] = "UnknownResult";
})(n.GameAction || (n.GameAction = {}));
(function(t) {
t[t.Cong_Thoi = 0] = "Cong_Thoi";
t[t.Cong = 1] = "Cong";
t[t.Ung = 2] = "Ung";
t[t.Thua = 3] = "Thua";
t[t.Thang = 4] = "Thang";
t[t.ToiTrang = 5] = "ToiTrang";
})(n.ResultFamily_TL || (n.ResultFamily_TL = {}));
(function(t) {
t[t.DenSam = -2] = "DenSam";
t[t.Cong_Thoi = -1] = "Cong_Thoi";
t[t.Cong = 0] = "Cong";
t[t.Ung = 1] = "Ung";
t[t.Thua = 2] = "Thua";
t[t.Thang = 4] = "Thang";
t[t.ToiTrang = 5] = "ToiTrang";
t[t.ChatSam = 6] = "ChatSam";
t[t.An_Sam = 7] = "An_Sam";
t[t.Den_Lang = 8] = "Den_Lang";
})(n.ResultFamily_SL || (n.ResultFamily_SL = {}));
(function(t) {
t[t.BAIDANH_SCALE = .9] = "BAIDANH_SCALE";
t[t.X_TO_PLAYER = -220] = "X_TO_PLAYER";
t[t.Y_CARD_SELECT = -100] = "Y_CARD_SELECT";
t[t.Y_CARD_DEFAULT = -150] = "Y_CARD_DEFAULT";
t[t._zOderBaiHa = 100] = "_zOderBaiHa";
t[t._zOderBaiForMe = 150] = "_zOderBaiForMe";
t[t.Cong = 1] = "Cong";
t[t.Ung = 2] = "Ung";
t[t.Thua = 3] = "Thua";
t[t.Thang = 4] = "Thang";
t[t.ToiTrang = 5] = "ToiTrang";
})(n.GameConfig || (n.GameConfig = {}));
cc._RF.pop();
}, {} ],
UtilGameCard: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "18900w/PsBPmbQDFXKNtY/z", "UtilGameCard");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = function() {
function t() {}
t.random = function(t, e) {
return Math.floor(Math.random() * (e - t + 1)) + t;
};
t.parseDate = function(t) {
var e = t, n = e.indexOf("T");
if (n >= 0) {
var o = e.substr(0, n), i = e.substr(n + 1, 5), r = o.substr(0, 4), a = o.substr(5, 2);
return o.substr(8, 2) + "/" + a + "/" + r + " " + i;
}
return "";
};
t.shuffle = function(t) {
for (var e = t.length - 1; e > 0; e--) {
var n = Math.floor(Math.random() * (e + 1)), o = t[e];
t[e] = t[n];
t[n] = o;
}
return t;
};
t.log = function() {};
t.validateNumber = function(t) {
return /^[0-9]+$/.test(t);
};
t.formatNumber = function(t) {
return void 0 === t ? "" : parseInt(t) < 1e3 ? t.toString() : t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};
t.removeDot = function(t) {
for (;t.indexOf(".") >= 0; ) t = t.replace(".", "");
return t;
};
t.timeoutListener = function(t, e, n) {
void 0 === e && (e = null);
void 0 === n && (n = null);
var o = null;
o = setTimeout(function() {
clearTimeout(o);
e && n && e.call(n);
}, 1e3 * t);
};
t.setCookie = function(t, e) {
var n = new Date();
n.setTime(n.getTime());
var o = "expires=" + n.toUTCString();
document.cookie = t + "=" + e + "; " + o;
};
t.getCookie = function(t) {
for (var e = t + "=", n = document.cookie.split(";"), o = 0; o < n.length; o++) {
for (var i = n[o]; " " == i.charAt(0); ) i = i.substring(1);
if (0 == i.indexOf(e)) return i.substring(e.length, i.length);
}
return "";
};
t.removeCookie = function(t) {
document.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
};
t.loadImgFromBinary = function(t, e) {
var n = "data:image/png;base64," + t, o = new Image();
o.src = n;
o.width = e.node.width;
o.height = e.node.height;
o.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(o);
t.handleLoadedTexture();
var n = new cc.SpriteFrame(t);
e.spriteFrame = n;
};
};
t.padString = function(t, e, n) {
void 0 === n && (n = "0");
return (t += "").length >= e ? t : new Array(e - t.length + 1).join(n) + t;
};
t.parseTime = function(t, e) {
return e ? this.padString(Math.floor(t / 3600).toString(), 2) + ":" + this.padString(Math.floor(Math.floor(t % 3600) / 60).toString(), 2) + ":" + this.padString(Math.floor(t % 60).toString(), 2) : this.padString(Math.floor(t / 60).toString(), 2) + ":" + this.padString((t % 60).toString(), 2);
};
t.removeArrayFromArray = function(t, e) {
return t.filter(function(t) {
return -1 === e.indexOf(t);
});
};
t.distance2Point = function(t, e) {
return Math.sqrt((t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y));
};
return t;
}();
n.default = o;
cc._RF.pop();
}, {} ]
}, {}, [ "BaCayBetBien", "BaCayConst", "BaCayHandler", "BaCayPlayer", "BaCayRoom", "BaCayUI", "ChatVar", "BasePopupChat", "ChatItem", "GameCard.Chat.NetworkClient", "GameCardChat", "BaseCardDialog", "BasicRoom", "Card", "CardItem", "GameUserActiveCheckLayer", "Interaction", "CardRankItem", "CardRoomItem", "Player", "PlayerChatItem", "PlayerConst", "PlayerTime", "StatusPlayers", "LobbyCardGame", "LobbyCardGameConst", "LobbyCardGameNetwork", "LobbyCardGameUI", "LobbyCardGameVar", "GameScene", "FixFontLabelGameCard", "FormatUtilGameCard", "GameUtils", "NumberUtilGameCard", "UtilGameCard", "MauBinhConst", "MauBinhPlayer", "MauBinhRoom", "MauBinhSapHamEffectNode", "MauBinhSupporter", "MauBinhUI", "PokerConst", "PokerHandler", "PokerPhrase", "PokerPlayer", "PokerPopUpBuyIn", "PokerRoom", "PokerSuporter", "PokerUI", "TLMNPlayer", "TLMNRoom", "TLMNUI", "TLMNUtils", "TienLenConst" ]);