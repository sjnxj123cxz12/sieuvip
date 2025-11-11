window.__require = function t(e, a, i) {
function n(c, o) {
if (!a[c]) {
if (!e[c]) {
var s = c.split("/");
s = s[s.length - 1];
if (!e[s]) {
var h = "function" == typeof __require && __require;
if (!o && h) return h(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = s;
}
var u = a[c] = {
exports: {}
};
e[c][0].call(u.exports, function(t) {
return n(e[c][1][t] || t);
}, u, u.exports, t, e, a, i);
}
return a[c].exports;
}
for (var r = "function" == typeof __require && __require, c = 0; c < i.length; c++) n(i[c]);
return n;
}({
AudioPoolBacarat: [ function(t, e) {
"use strict";
cc._RF.push(e, "44fc0rixLRF94S7u7ZCGs5w", "AudioPoolBacarat");
(function() {
cc.AudioPoolBacarat = cc.Class({
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
enableMusic: function(t) {
this.musicBackground && (t ? this.musicBackground.isPlaying || this.musicBackground.play() : this.musicBackground.stop());
},
enableSound: function(t) {
this.chipBet.mute = !t;
this.moveCard.mute = !t;
this.musicBackground.mute = !t;
},
getAudioClip: function(t) {
var e = null;
switch (t) {
case cc.AudioTypes.CHIP_SELECT:
e = this.chipSelect;
break;

case cc.AudioTypes.CHIP_BET:
e = this.chipBet;
break;

case cc.AudioTypes.OPEN_CARD:
e = this.moveCard;
}
return e;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
Bacarat2Controller: [ function(t, e) {
"use strict";
cc._RF.push(e, "fe2711mK0RBE5P3OAk2qhND", "Bacarat2Controller");
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
e.prototype.setBacaratView = function(t) {
return this.BacaratView = t;
};
e.prototype.sendRequestOnHub = function(t, e, a) {
if (this.BacaratView) return this.BacaratView.sendRequestOnHub(t, e, a);
};
e.prototype.setAvatarDef = function(t) {
return this.avatarDef = t;
};
e.prototype.getAvatarDef = function() {
return this.avatarDef;
};
e.prototype.setAvatars = function(t) {
return this.avatars = t;
};
e.prototype.getAvatars = function() {
return this.avatars;
};
e.prototype.updateBalance = function(t) {
this.BacaratView.updateBalance(t);
};
e.prototype.setInfoView = function(t) {
return this.Bacarat_InfoView = t;
};
e.prototype.playerLeave = function(t) {
this.BacaratView.playerLeave(t);
this.Bacarat_InfoView.playerLeave(t);
};
e.prototype.updateSessionInfo = function(t) {
return this.Bacarat_InfoView.updateSessionInfo(t);
};
e.prototype.updatePlayersInGame = function(t) {
return this.Bacarat_InfoView.updatePlayersInGame(t);
};
e.prototype.winResult = function(t) {
return this.Bacarat_InfoView.winResult(t);
};
e.prototype.setWinResult = function(t) {
return this.winResultResponse = t;
};
e.prototype.getWinResult = function() {
return this.winResultResponse;
};
e.prototype.setWinVipResult = function(t) {
return this.winVipResultResponse = t;
};
e.prototype.getWinVipResult = function() {
return this.winVipResultResponse;
};
e.prototype.winResultVip = function(t) {
return this.Bacarat_InfoView.winResultVip(t);
};
e.prototype.playerShowBubbleChat = function(t) {
return this.Bacarat_InfoView.playerShowBubbleChat(t);
};
e.prototype.moveCards = function(t) {
return this.Bacarat_InfoView.moveCards(t);
};
e.prototype.updatePlayersUI = function(t) {
return this.Bacarat_InfoView.updatePlayersUI(t);
};
e.prototype.updatePlayerInfor = function(t) {
return this.Bacarat_InfoView.updatePlayerInfor(t);
};
e.prototype.updateBalanceCurrPlayer = function(t) {
return this.Bacarat_InfoView.updateBalanceCurrPlayer(t);
};
e.prototype.playerShowBubbleChat = function(t) {
return this.Bacarat_InfoView.playerShowBubbleChat(t);
};
e.prototype.updateBalancePlayer = function(t) {
return this.Bacarat_InfoView.updateBalancePlayer(t);
};
e.prototype.updatePositionPlayerUI = function(t) {
return this.positionsUI = t;
};
e.prototype.positionPlayerUI = function() {
return this.positionsUI;
};
e.prototype.setAssetView = function(t) {
return this.Bacarat_AssetsView = t;
};
e.prototype.getAssetView = function() {
return this.Bacarat_AssetsView;
};
e.prototype.getSfBack = function(t) {
return this.Bacarat_AssetsView.getSfBack(t);
};
e.prototype.getSfBorderCard = function() {
return this.Bacarat_AssetsView.getSfBorderCard();
};
e.prototype.createChip = function(t) {
return this.Bacarat_AssetsView.createChip(t);
};
e.prototype.getSfCardBack = function() {
return this.Bacarat_AssetsView.getSfCardBack();
};
e.prototype.getSpriteCard = function(t, e) {
return this.Bacarat_AssetsView.getSpriteCard(t, e);
};
e.prototype.getCardValueByNumber = function(t) {
return this.Bacarat_AssetsView.getCardValueByNumber(t);
};
e.prototype.getColorType = function(t) {
return this.Bacarat_AssetsView.getColorType(t);
};
e.prototype.putChipToPool = function(t, e) {
return this.Bacarat_AssetsView.putChipToPool(t, e);
};
e.prototype.clearPools = function() {
return this.Bacarat_AssetsView.clearPools();
};
e.prototype.setBetView = function(t) {
return this.Bacarat_BetView = t;
};
e.prototype.onBet = function(t) {
return this.Bacarat_BetView.onBet(t);
};
e.prototype.enableClickBet = function(t) {
return this.Bacarat_BetView.enableClickBet(t);
};
e.prototype.disableBetAgain = function(t) {
return this.Bacarat_BetView.disableBetAgain(t);
};
e.prototype.playAnimationWin = function(t) {
return this.Bacarat_BetView.playAnimationWin(t);
};
e.prototype.stopAnimationWin = function() {
return this.Bacarat_BetView.stopAnimationWin();
};
e.prototype.updateTotalUserBetSide = function(t, e) {
return this.Bacarat_BetView.updateTotalUserBetSide(t, e);
};
e.prototype.updateTotalBet = function(t) {
return this.Bacarat_BetView.updateTotalBet(t);
};
e.prototype.updateBetOfAccount = function(t) {
return this.Bacarat_BetView.updateBetOfAccount(t);
};
e.prototype.setCardView = function(t) {
return this.Bacarat_CardView = t;
};
e.prototype.activeNodeScore = function(t) {
return this.Bacarat_CardView.activeNodeScore(t);
};
e.prototype.activeNodeCards = function(t) {
return this.Bacarat_CardView.activeNodeCards(t);
};
e.prototype.showScoreSide = function(t) {
return this.Bacarat_CardView.showScoreSide(t);
};
e.prototype.resetLayoutCard = function() {
return this.Bacarat_CardView.resetLayoutCard();
};
e.prototype.onSlideCard = function(t) {
return this.Bacarat_CardView.onSlideCard(t);
};
e.prototype.slideCardOnBet = function() {
return this.Bacarat_CardView.slideCardOnBet();
};
e.prototype.initCardOnTable = function() {
return this.Bacarat_CardView.initCardOnTable();
};
e.prototype.forceShowResult = function(t, e) {
return this.Bacarat_CardView.forceShowResult(t, e);
};
e.prototype.setChipsView = function(t) {
return this.Bacarat_ChipsView = t;
};
e.prototype.moveChipBet = function(t, e, a, i) {
return this.Bacarat_ChipsView.moveChipBet(t, e, a, i);
};
e.prototype.getChipsLose = function(t, e) {
return this.Bacarat_ChipsView.getChipsLose(t, e);
};
e.prototype.refundChips = function(t) {
return this.Bacarat_ChipsView.refundChips(t);
};
e.prototype.refundChipsTie = function() {
return this.Bacarat_ChipsView.refundChipsTie();
};
e.prototype.clearAllChips = function() {
return this.Bacarat_ChipsView.clearAllChips();
};
e.prototype.initParamChips = function() {
return this.Bacarat_ChipsView.initParamChips();
};
e.prototype.updateChipForBetSession = function(t) {
return this.Bacarat_ChipsView.updateChipForBetSession(t);
};
e.prototype.clearBetLog = function(t) {
this.betLog = this.betLog.filter(function(e) {
return e.sessionID > t - 1;
});
};
e.prototype.getBetLogBySessionID = function(t) {
return this.betLog.filter(function(e) {
return e.sessionID == t - 1;
});
};
e.prototype.setBetLog = function(t) {
return this.betLog.push(t);
};
e.prototype.getBetLog = function() {
return this.betLog;
};
e.prototype.initBetLog = function() {
return this.betLog = [];
};
e.prototype.setSoiCauView = function(t) {
return this.Bacarat_SoiCau = t;
};
e.prototype.initListSoiCau = function(t) {
return this.Bacarat_SoiCau.initListSoiCau(t);
};
e.prototype.activeGraph = function(t) {
this.Bacarat_SoiCau.activeGraph(t);
this.Bacarat_CatCau.activeGraph(t);
};
e.prototype.setCatCauView = function(t) {
return this.Bacarat_CatCau = t;
};
e.prototype.initListCatCau = function(t) {
return this.Bacarat_CatCau.initListCatCau(t);
};
e.prototype.setChipWin = function(t, e, a) {
return this.chipsWin.push([ t, e, a ]);
};
e.prototype.getChipsWin = function() {
return this.chipsWin;
};
e.prototype.initChipsWin = function() {
return this.chipsWin = [];
};
e.prototype.setBetLogSession = function(t) {
return this.betLogSession = t;
};
e.prototype.getBetLogSession = function() {
return this.betLogSession;
};
e.prototype.setCurrentState = function(t) {
return this.currentState = t;
};
e.prototype.getCurrentState = function() {
return this.currentState;
};
e.prototype.updateRealBalance = function(t) {
lngui.UserManager.instance.mainUserInfo.Money = t;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
};
return e;
}();
cc.Bacarat2Controller = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
BacaratActiveGraph: [ function(t, e) {
"use strict";
cc._RF.push(e, "2dcccAD6xZJ4qycKQbsjrgu", "BacaratActiveGraph");
cc.Class({
extends: cc.Component,
onActiveGraph: function() {
cc.Bacarat2Controller.getInstance().activeGraph(!0);
},
onDeactiveGraph: function() {
cc.Bacarat2Controller.getInstance().activeGraph(!1);
}
});
cc._RF.pop();
}, {} ],
BacaratAssetView: [ function(t, e) {
"use strict";
cc._RF.push(e, "5c2aekkhBxBoqFN5BthgQ/V", "BacaratAssetView");
(function() {
cc.BacaratAssetView = cc.Class({
extends: cc.Component,
properties: {
sfBorderCard: cc.SpriteFrame,
sfPrefabChip: [ cc.Prefab ],
sfSuitCo: [ cc.SpriteFrame ],
sfSuitRo: [ cc.SpriteFrame ],
sfSuitTep: [ cc.SpriteFrame ],
sfSuitBich: [ cc.SpriteFrame ],
sfCardBack: cc.SpriteFrame,
sfPlayers: [ cc.SpriteFrame ],
sfBankers: [ cc.SpriteFrame ],
sfTies: [ cc.SpriteFrame ],
colorWhite: cc.Color,
colorYellow: cc.Color,
colorRed: cc.Color
},
onLoad: function() {
cc.Bacarat2Controller.getInstance().setAssetView(this);
this.chip1kPool = new cc.NodePool();
this.chip5kPool = new cc.NodePool();
this.chip10kPool = new cc.NodePool();
this.chip100kPool = new cc.NodePool();
this.chip500kPool = new cc.NodePool();
},
clearPools: function() {
try {
this.chip1kPool.clear();
this.chip5kPool.clear();
this.chip10kPool.clear();
this.chip100kPool.clear();
this.chip500kPool.clear();
} catch (t) {}
},
getSfBorderCard: function() {
return this.sfBorderCard;
},
getSfCardBack: function() {
return this.sfCardBack;
},
getSpriteCard: function(t, e) {
var a = null;
t = parseInt(t);
switch (e) {
case cc.Bacarat_Card.CO:
a = this.sfSuitCo;
break;

case cc.Bacarat_Card.RO:
a = this.sfSuitRo;
break;

case cc.Bacarat_Card.TEP:
a = this.sfSuitTep;
break;

case cc.Bacarat_Card.BICH:
a = this.sfSuitBich;
}
return -1 === t ? null : a[t];
},
getCardValue: function(t, e) {
return 4 * (t - 3) + e / 13;
},
getCardValueByNumber: function(t) {
var e = (t - 1) % 13 + 1, a = t - e;
return this.getSpriteCard(e - 1, a);
},
getSpriteByName: function(t) {
return this.spriteAtlasNotify.getSpriteFrame(t);
},
createChip: function(t) {
var e = null;
switch (t) {
case cc.BacaratMapChip["1K"]:
e = this.chip1kPool.size() > 0 ? this.chip1kPool.get() : cc.instantiate(this.sfPrefabChip[0]);
break;

case cc.BacaratMapChip["5K"]:
e = this.chip5kPool.size() > 0 ? this.chip5kPool.get() : cc.instantiate(this.sfPrefabChip[1]);
break;

case cc.BacaratMapChip["10K"]:
e = this.chip10kPool.size() > 0 ? this.chip10kPool.get() : cc.instantiate(this.sfPrefabChip[2]);
break;

case cc.BacaratMapChip["100K"]:
e = this.chip100kPool.size() > 0 ? this.chip100kPool.get() : cc.instantiate(this.sfPrefabChip[3]);
break;

case cc.BacaratMapChip["500K"]:
e = this.chip500kPool.size() > 0 ? this.chip500kPool.get() : cc.instantiate(this.sfPrefabChip[4]);
}
e && e.setScale(.5, .5);
return e;
},
putChipToPool: function(t, e) {
switch (e) {
case 1e3:
this.chip1kPool.put(t);
break;

case 5e3:
this.chip5kPool.put(t);
break;

case 1e4:
this.chip10kPool.put(t);
break;

case 1e5:
this.chip100kPool.put(t);
break;

case 5e5:
this.chip500kPool.put(t);
}
},
getColorType: function(t) {
switch (t) {
case cc.BacaratColor.WHITE:
return this.colorWhite;

case cc.BacaratColor.YELLOW:
return this.colorYellow;

case cc.BacaratColor.RED:
return this.colorRed;
}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BacaratBetView: [ function(t, e) {
"use strict";
cc._RF.push(e, "bd01a76mXBFFJ1Gr+80rkk4", "BacaratBetView");
(function() {
cc.BacaratBetView = cc.Class({
extends: cc.Component,
properties: {
nodeLayoutBet: cc.Node,
nodeAreaPPair: cc.Node,
sfPPair: [ cc.SpriteFrame ],
nodeAreaPlayer: cc.Node,
sfPlayer: [ cc.SpriteFrame ],
nodeAreaTie: cc.Node,
sfTie: [ cc.SpriteFrame ],
nodeAreaBanker: cc.Node,
sfBanker: [ cc.SpriteFrame ],
nodeAreaPBanker: cc.Node,
sfPBanker: [ cc.SpriteFrame ],
totalPPlayerBet: cc.Label,
totalUserPPlayerBet: cc.Label,
totalPlayerBet: cc.Label,
totalUserPlayerBet: cc.Label,
totalTieBet: cc.Label,
totalUserTieBet: cc.Label,
totalBankerBet: cc.Label,
totalUserBankerBet: cc.Label,
totalPBankerBet: cc.Label,
totalUserPBankerBet: cc.Label,
btnBet: [ cc.Node ],
nodeBetX2: cc.Node,
nodeBetAgain: cc.Node
},
onLoad: function() {
cc.Bacarat2Controller.getInstance().setBetView(this);
this.betValue = 5e3;
this.areaPPair = this.nodeAreaPPair.getComponent(cc.PolygonCollider);
this.areaPlayer = this.nodeAreaPlayer.getComponent(cc.PolygonCollider);
this.areaTie = this.nodeAreaTie.getComponent(cc.PolygonCollider);
this.areaBanker = this.nodeAreaBanker.getComponent(cc.PolygonCollider);
this.areaPBanker = this.nodeAreaPBanker.getComponent(cc.PolygonCollider);
this.pPairSprite = this.nodeAreaPPair.getComponent(cc.Sprite);
this.playerSprite = this.nodeAreaPlayer.getComponent(cc.Sprite);
this.tieSprite = this.nodeAreaTie.getComponent(cc.Sprite);
this.bankerSprite = this.nodeAreaBanker.getComponent(cc.Sprite);
this.pBankerSprite = this.nodeAreaPBanker.getComponent(cc.Sprite);
this.pPairWin = this.nodeAreaPPair.getChildByName("win").getComponent(sp.Skeleton);
console.log(this.pPairWin);
this.playerWin = this.nodeAreaPlayer.getChildByName("win").getComponent(sp.Skeleton);
this.tieWin = this.nodeAreaTie.getChildByName("win").getComponent(sp.Skeleton);
this.bankerWin = this.nodeAreaBanker.getChildByName("win").getComponent(sp.Skeleton);
this.pBankerWin = this.nodeAreaPBanker.getChildByName("win").getComponent(sp.Skeleton);
this.resetLbTotalBet();
this.btnBetX2 = this.nodeBetX2.getComponent(cc.Button);
this.btnBetAgain = this.nodeBetAgain.getComponent(cc.Button);
},
resetLbTotalBet: function() {
[ this.totalPPlayerBet, this.totalUserPPlayerBet, this.totalPlayerBet, this.totalUserPlayerBet, this.totalTieBet, this.totalUserTieBet, this.totalBankerBet, this.totalUserBankerBet, this.totalPBankerBet, this.totalUserPBankerBet ].map(function(t) {
return t.string = "";
});
},
onEnable: function() {
cc.director.getCollisionManager().enabled = !0;
},
onDisable: function() {},
setBetValue: function(t, e) {
if ((e = parseInt(e)) != this.betValue) {
this.betValue = e;
cc.AudioController.getInstance().playSound(cc.AudioTypes.CHIP_SELECT);
this.resetSpriteButton();
this.setActiveButton(t.target);
}
},
setActiveButton: function(t) {
t.getChildByName("active").active = !0;
var e = cc.moveTo(.3, cc.v2(t.x, 15));
t.runAction(e);
},
resetSpriteButton: function() {
var t = this.btnBet, e = this;
t.forEach(function(t, a) {
e.setDefaultSfButton(t, a);
});
},
setDefaultSfButton: function(t) {
t.getChildByName("active").active = !1;
var e = cc.moveTo(.3, cc.v2(t.x, 0));
t.runAction(e);
},
onBetAgain: function(t, e) {
var a = this;
e = parseInt(e);
var i = cc.Bacarat2Controller.getInstance().getBetLogBySessionID(cc.Bacarat2Controller.getInstance().getBetLogSession());
if (0 !== i.length) {
for (var n = function(t) {
i.map(function(e, i) {
var n = setTimeout(function() {
if (cc.Bacarat2Controller.getInstance().getCurrentState() === cc.BacaratMapGameState.BETTING && e.sessionID === cc.Bacarat2Controller.getInstance().getBetLogSession() - 1) this.sendRequestBet(e.value, e.betSide); else try {
clearTimeout(n);
} catch (t) {}
}.bind(a), 120 * i * t);
}, a);
}, r = 1; r <= e; r++) n(r);
this.disableBetAgain(!0);
} else cc.PopupController.getInstance().showSlotsMessage("Chưa có dữ liệu của phiên trước.");
},
disableBetAgain: function(t) {
this.btnBetAgain.interactable = !t;
this.btnBetX2.interactable = !t;
var e = cc.Color.WHITE;
t && (e = cc.Color.GRAY);
this.nodeBetX2.color = e;
this.nodeBetAgain.color = e;
},
initBetEvent: function() {
this.nodeLayoutBet.on("touchstart", function(t) {
this.onBetSideClick(t.getLocation(), "touchstart");
}, this);
this.nodeLayoutBet.on("touchend", function(t) {
this.onBetSideClick(t.getLocation(), "touchend");
}, this);
},
enableClickBet: function(t) {
if (t) this.initBetEvent(); else {
this.nodeLayoutBet.off(cc.Node.EventType.TOUCH_START);
this.nodeLayoutBet.off(cc.Node.EventType.TOUCH_END);
this.changeSpriteFrame(this.pPairSprite, this.sfPPair, "touchend", cc.BacaratBetSite.PLAYER_PAIR);
this.changeSpriteFrame(this.playerSprite, this.sfPlayer, "touchend", cc.BacaratBetSite.PLAYER);
this.changeSpriteFrame(this.tieSprite, this.sfTie, "touchend", cc.BacaratBetSite.TIE);
this.changeSpriteFrame(this.bankerSprite, this.sfBanker, "touchend", cc.BacaratBetSite.BANKER);
this.changeSpriteFrame(this.pBankerSprite, this.sfPBanker, "touchend", cc.BacaratBetSite.BANKER_PAIR);
}
},
onBetSideClick: function(t, e) {
cc.Intersection.pointInPolygon(t, this.areaPPair.world.points) && this.changeSpriteFrame(this.pPairSprite, this.sfPPair, e, cc.BacaratBetSite.PLAYER_PAIR);
cc.Intersection.pointInPolygon(t, this.areaPlayer.world.points) && this.changeSpriteFrame(this.playerSprite, this.sfPlayer, e, cc.BacaratBetSite.PLAYER);
cc.Intersection.pointInPolygon(t, this.areaTie.world.points) && this.changeSpriteFrame(this.tieSprite, this.sfTie, e, cc.BacaratBetSite.TIE);
cc.Intersection.pointInPolygon(t, this.areaBanker.world.points) && this.changeSpriteFrame(this.bankerSprite, this.sfBanker, e, cc.BacaratBetSite.BANKER);
cc.Intersection.pointInPolygon(t, this.areaPBanker.world.points) && this.changeSpriteFrame(this.pBankerSprite, this.sfPBanker, e, cc.BacaratBetSite.BANKER_PAIR);
},
changeSpriteFrame: function(t, e, a, i) {
if ("touchstart" == a) {
t.spriteFrame = e[1];
this.onBet(i);
} else t.spriteFrame = e[0];
},
playAnimationWin: function(t) {
var e = null;
switch (t = parseInt(t)) {
case cc.BacaratBetSite.PLAYER_PAIR:
e = this.pPairWin;
break;

case cc.BacaratBetSite.PLAYER:
e = this.playerWin;
break;

case cc.BacaratBetSite.TIE:
e = this.tieWin;
break;

case cc.BacaratBetSite.BANKER:
e = this.bankerWin;
break;

case cc.BacaratBetSite.BANKER_PAIR:
e = this.pBankerWin;
}
if (null != e) {
e.node.active = !0;
e.setAnimation(1, "animtion0", !0);
}
},
stopAnimationWin: function() {
this.pPairWin.node.active = !1;
this.playerWin.node.active = !1;
this.tieWin.node.active = !1;
this.bankerWin.node.active = !1;
this.pBankerWin.node.active = !1;
this.resetLbTotalBet();
},
onBet: function(t) {
this.disableBetAgain(!0);
cc.AudioController.getInstance().playSound(cc.AudioTypes.CHIP_BET);
this.sendRequestBet(this.betValue, t);
},
updateTotalUserBetSide: function(t, e) {
var a = null;
switch (t = parseInt(t)) {
case cc.BacaratBetSite.PLAYER_PAIR:
a = this.totalUserPPlayerBet;
break;

case cc.BacaratBetSite.PLAYER:
a = this.totalUserPlayerBet;
break;

case cc.BacaratBetSite.TIE:
a = this.totalUserTieBet;
break;

case cc.BacaratBetSite.BANKER:
a = this.totalUserBankerBet;
break;

case cc.BacaratBetSite.BANKER_PAIR:
a = this.totalUserPBankerBet;
}
a.string = cc.Tool.getInstance().formatNumber(e);
},
updateBetOfAccount: function(t) {
var e = this;
t.map(function(t) {
var a = null;
switch (parseInt(t.BetSide)) {
case cc.BacaratBetSite.PLAYER_PAIR:
a = e.totalUserPPlayerBet;
break;

case cc.BacaratBetSite.PLAYER:
a = e.totalUserPlayerBet;
break;

case cc.BacaratBetSite.TIE:
a = e.totalUserTieBet;
break;

case cc.BacaratBetSite.BANKER:
a = e.totalUserBankerBet;
break;

case cc.BacaratBetSite.BANKER_PAIR:
a = e.totalUserPBankerBet;
}
a.string = cc.Tool.getInstance().formatNumber(t.BetValue);
});
},
updateTotalBet: function(t) {
this.totalPPlayerBet.string = 0 === t.TotalBetPlayerPair ? "" : cc.Tool.getInstance().formatNumber(t.TotalBetPlayerPair);
this.totalPlayerBet.string = 0 === t.TotalBetPlayer ? "" : cc.Tool.getInstance().formatNumber(t.TotalBetPlayer);
this.totalTieBet.string = 0 === t.TotalBetTie ? "" : cc.Tool.getInstance().formatNumber(t.TotalBetTie);
this.totalBankerBet.string = 0 === t.TotalBetBanker ? "" : cc.Tool.getInstance().formatNumber(t.TotalBetBanker);
this.totalPBankerBet.string = 0 === t.TotalBetBankerPair ? "" : cc.Tool.getInstance().formatNumber(t.TotalBetBankerPair);
},
sendRequestBet: function(t, e) {
return cc.Bacarat2Controller.getInstance().sendRequestOnHub(cc.MethodHubName.BET, t, e);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BacaratButtonBet: [ function(t, e) {
"use strict";
cc._RF.push(e, "10647PQfzNLhod/7s7oL5Uq", "BacaratButtonBet");
(function() {
cc.BacaratButtonBet = cc.Class({
extends: cc.Component,
properties: {
spriteButtons: [ cc.SpriteFrame ]
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BacaratCardItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "a712cUwlVZOwZY2c+8gxPsA", "BacaratCardItem");
(function() {
cc.BacaratCardItem = cc.Class({
extends: cc.Component,
properties: {
ordinalValue: -1,
cardNumber: -1,
cardSuite: -1,
animation: cc.Animation
},
onLoad: function() {
this.duration = .5;
this.spriteNode = this.node.getComponent(cc.Sprite);
this.nodeBorder = new cc.Node("borderCard");
this.nodeBorder.setScale(1.5, 1.5);
this.spriteBorder = this.nodeBorder.addComponent(cc.Sprite);
this.spriteBorder.spriteFrame = cc.Bacarat2Controller.getInstance().getSfBorderCard();
},
onDestroy: function() {
try {
this.node.stopAllActions();
} catch (t) {}
},
prepareSlideCard: function() {
this.node.position = cc.v2(0, 145);
this.node.setScale(.3, .3);
this.node.angle = 0;
this.node.stopAllActions();
},
initCard: function() {
this.spriteNode || (this.spriteNode = this.node.getComponent(cc.Sprite));
this.spriteNode.spriteFrame = cc.Bacarat2Controller.getInstance().getSfCardBack();
},
onShowCard: function() {
this.spriteNode.spriteFrame = cc.Bacarat2Controller.getInstance().getCardValueByNumber(this.ordinalValue);
},
animationShowCard: function(t) {
t && this.addBorderCard();
this.animation.play("open-card");
},
addBorderCard: function() {
this.nodeBorder.parent = this.node;
this.nodeBorder.setAnchorPoint(cc.v2(.7, .3));
},
removeBorderCard: function() {
this.node.removeAllChildren();
},
forceShowCard: function(t, e) {
if (-1 != this.ordinalValue) {
this.node.active = !0;
this.spriteNode.spriteFrame = cc.Bacarat2Controller.getInstance().getCardValueByNumber(this.ordinalValue);
this.node.position = t;
this.node.setScale(.55, .55);
e && (this.node.angle = e);
}
},
updateOrdinal: function(t) {
this.ordinalValue = 0 != t ? t : -1;
},
initValue: function(t) {
this.ordinalValue = 0 != t ? t : -1;
this.initCard();
this.reset();
},
reset: function() {
this.node.active = !1;
this.prepareSlideCard();
},
moveTo: function(t) {
this.node.active = !0;
var e = cc.scaleTo(this.duration, .55, .55), a = cc.moveTo(this.duration, t);
this.node.runAction(cc.spawn(a, e));
},
setPosition: function(t) {
this.node.active = !0;
this.node.setScale(cc.v2(.55, .55));
this.node.position = t;
},
moveToEnd: function(t) {
if (this.node) {
this.node.opacity = 100;
var e = cc.moveTo(.5, t);
e.easing(cc.easeOut(1));
var a = cc.callFunc(this.moveToEndFinished, null, this.node);
this.node.runAction(cc.sequence(e, a));
}
},
rotateCard: function(t) {
this.removeBorderCard();
var e = cc.rotateTo(this.duration, t);
this.node.runAction(e);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BacaratCardView: [ function(t, e) {
"use strict";
cc._RF.push(e, "e9f543lVEpJC76p2KuG+Wra", "BacaratCardView");
(function() {
cc.BacaratCardView = cc.Class({
extends: cc.Component,
properties: {
lstPlayerCard: [ cc.Node ],
lbScorePlayer: cc.Label,
lstBankerCard: [ cc.Node ],
lbScoreBanker: cc.Label
},
onLoad: function() {
cc.Bacarat2Controller.getInstance().setCardView(this);
this.playerCard1Item = this.lstPlayerCard[0].getComponent("BacaratCardItem");
this.playerCard2Item = this.lstPlayerCard[1].getComponent("BacaratCardItem");
this.playerCard3Item = this.lstPlayerCard[2].getComponent("BacaratCardItem");
this.bankerCard1Item = this.lstBankerCard[0].getComponent("BacaratCardItem");
this.bankerCard2Item = this.lstBankerCard[1].getComponent("BacaratCardItem");
this.bankerCard3Item = this.lstBankerCard[2].getComponent("BacaratCardItem");
this.nodeParentLbScorePlayer = this.lbScorePlayer.node.parent;
this.nodeParentLbScoreBanker = this.lbScoreBanker.node.parent;
this.resetLayoutCard();
this.playerRotate = -90;
this.bankerRotate = 90;
this.rootCardsPos = this.initRootPositionCards();
},
activeNodeScore: function(t) {
this.nodeParentLbScorePlayer.active = t;
this.nodeParentLbScoreBanker.active = t;
},
activeNodeCards: function(t) {
this.playerCard1Item.node.active = t;
this.playerCard2Item.node.active = t;
this.playerCard3Item.node.active = t;
this.bankerCard1Item.node.active = t;
this.bankerCard2Item.node.active = t;
this.bankerCard3Item.node.active = t;
},
resetLayoutCard: function() {
this.activeNodeCards(!1);
this.activeNodeScore(!1);
},
initRootPositionCards: function() {
var t = [], e = [];
this.lstPlayerCard.map(function(e) {
t.push(e.position);
});
this.lstBankerCard.map(function(t) {
e.push(t.position);
});
return {
playerCardPos: t,
bankerCardPos: e
};
},
showScoreSide: function(t) {
t.Result;
this.activeNodeCards(!0);
this.lbScorePlayer.string = t.Result.HandValuePlayer;
this.lbScoreBanker.string = t.Result.HandValueBanker;
},
showScoreArr: function(t) {
var e = t.player, a = t.banker;
this.activeNodeScore(!0);
this.lbScorePlayer.string = this.calculateScore(e);
this.lbScoreBanker.string = this.calculateScore(a);
},
calculateScore: function(t) {
var e = 0;
t.map(function(t) {
var a = (t - 1) % 13 + 1;
e += a = a >= 10 ? 0 : a;
});
return e >= 10 ? e.toString().split("")[1] : e;
},
initCardOnTable: function() {
var t = this.rootCardsPos.playerCardPos, e = this.rootCardsPos.bankerCardPos;
this.resetCard();
this.playerCard1Item.setPosition(t[0]);
this.playerCard2Item.setPosition(t[1]);
this.bankerCard1Item.setPosition(e[0]);
this.bankerCard2Item.setPosition(e[1]);
},
resetCard: function() {
this.playerCard1Item.initValue(-1);
this.playerCard2Item.initValue(-1);
this.playerCard3Item.initValue(-1);
this.bankerCard1Item.initValue(-1);
this.bankerCard2Item.initValue(-1);
this.bankerCard3Item.initValue(-1);
},
slideCardOnBet: function() {
var t = this.rootCardsPos.playerCardPos, e = this.rootCardsPos.bankerCardPos;
this.resetCard();
if (cc.game.isPaused()) {
this.playerCard1Item.setPosition(t[0]);
this.playerCard2Item.setPosition(t[1]);
this.bankerCard1Item.setPosition(e[0]);
this.bankerCard2Item.setPosition(e[1]);
} else {
cc.director.getScheduler().schedule(function() {
cc.AudioController.getInstance().playSound(cc.AudioTypes.OPEN_CARD);
this.playerCard1Item.moveTo(t[0]);
}, this, 0, 0, 0, !1);
cc.director.getScheduler().schedule(function() {
cc.AudioController.getInstance().playSound(cc.AudioTypes.OPEN_CARD);
this.bankerCard1Item.moveTo(e[0]);
}, this, 0, 0, .3, !1);
cc.director.getScheduler().schedule(function() {
cc.AudioController.getInstance().playSound(cc.AudioTypes.OPEN_CARD);
this.playerCard2Item.moveTo(t[1]);
}, this, 0, 0, .6, !1);
cc.director.getScheduler().schedule(function() {
cc.AudioController.getInstance().playSound(cc.AudioTypes.OPEN_CARD);
this.bankerCard2Item.moveTo(e[1]);
}, this, 0, 0, .9, !1);
}
},
onSlideCard: function(t) {
var e = t.Result, a = e.GateData, i = e.PlayerCard1, n = e.PlayerCard2, r = e.PlayerCard3, c = e.BankerCard1, o = e.BankerCard2, s = e.BankerCard3, h = 1.5;
0 != r && 0 != s && (h = 7);
0 != r && 0 == s && (h = 5);
0 == r && 0 != s && (h = 5.5);
cc.director.getScheduler().schedule(function() {
var t = cc.Bacarat2Controller.getInstance().getWinResult();
t && cc.Bacarat2Controller.getInstance().winResult(t);
var e = cc.Bacarat2Controller.getInstance().getWinVipResult();
e && cc.Bacarat2Controller.getInstance().winResultVip(e);
}, this, 0, 0, h + 4.8, !1);
var u = this.rootCardsPos.playerCardPos, l = this.rootCardsPos.bankerCardPos;
this.playerCard1Item.node.active || this.initCardOnTable();
this.playerCard1Item.updateOrdinal(i);
this.playerCard2Item.updateOrdinal(n);
this.playerCard3Item.updateOrdinal(r);
this.bankerCard1Item.updateOrdinal(c);
this.bankerCard2Item.updateOrdinal(o);
this.bankerCard3Item.updateOrdinal(s);
if (cc.game.isPaused()) {
this.playerCard1Item.forceShowCard(u[0]);
this.playerCard2Item.forceShowCard(u[1]);
this.playerCard3Item.forceShowCard(u[2], this.playerRotate);
this.bankerCard1Item.forceShowCard(l[0]);
this.bankerCard2Item.forceShowCard(l[1]);
this.bankerCard3Item.forceShowCard(l[2], this.bankerRotate);
this.showScoreArr({
player: [ i, n, r ],
banker: [ c, o, s ]
});
this.showGateWin(a);
cc.Bacarat2Controller.getInstance().clearPools();
} else {
if (cc.game.isPaused()) {
this.playerCard1Item.forceShowCard(u[0]);
this.playerCard2Item.forceShowCard(u[1]);
this.bankerCard1Item.forceShowCard(l[0]);
this.bankerCard2Item.forceShowCard(l[1]);
this.showScoreArr({
player: [ i, n ],
banker: [ c, o ]
});
} else {
cc.director.getScheduler().schedule(function() {
this.playerCard1Item.animationShowCard();
this.bankerCard1Item.animationShowCard();
cc.director.getScheduler().schedule(function() {
this.showScoreArr({
player: [ i ],
banker: [ c ]
});
}, this, 0, 0, .5, !1);
}, this, 0, 0, 0, !1);
cc.director.getScheduler().schedule(function() {
this.playerCard2Item.animationShowCard();
this.bankerCard2Item.animationShowCard();
cc.director.getScheduler().schedule(function() {
this.showScoreArr({
player: [ i, n ],
banker: [ c, o ]
});
}, this, 0, 0, .5, !1);
}, this, 0, 0, 1, !1);
}
if (0 != r) if (cc.game.isPaused()) {
this.playerCard3Item.forceShowCard(u[2], this.playerRotate);
this.showScoreArr({
player: [ i, n, r ],
banker: [ c, o ]
});
} else {
cc.director.getScheduler().schedule(function() {
cc.AudioController.getInstance().playSound(cc.AudioTypes.OPEN_CARD);
this.playerCard3Item.moveTo(u[2]);
}, this, 0, 0, 2.5, !1);
cc.director.getScheduler().schedule(function() {
this.playerCard3Item.animationShowCard(!0);
cc.director.getScheduler().schedule(function() {
this.playerCard3Item.rotateCard(this.playerRotate);
this.showScoreArr({
player: [ i, n, r ],
banker: [ c, o ]
});
}, this, 0, 0, 1, !1);
}, this, 0, 0, 3.5, !1);
} else this.playerCard3Item.reset();
if (0 != s) if (cc.game.isPaused()) {
this.bankerCard3Item.forceShowCard(l[2], this.bankerRotate);
this.showScoreArr({
player: [ i, n, r ],
banker: [ c, o, s ]
});
} else {
var p = 0 != r ? 4.5 : 2.5;
cc.director.getScheduler().schedule(function() {
cc.AudioController.getInstance().playSound(cc.AudioTypes.OPEN_CARD);
this.bankerCard3Item.moveTo(l[2]);
}, this, 0, 0, p, !1);
cc.director.getScheduler().schedule(function() {
this.bankerCard3Item.animationShowCard(!0);
cc.director.getScheduler().schedule(function() {
this.bankerCard3Item.rotateCard(this.bankerRotate);
this.showScoreArr({
player: [ i, n, r ],
banker: [ c, o, s ]
});
}, this, 0, 0, 1, !1);
}, this, 0, 0, p + 1, !1);
} else this.bankerCard3Item.reset();
cc.game.isPaused() ? cc.Bacarat2Controller.getInstance().clearAllChips() : cc.director.getScheduler().schedule(function() {
var t = a.split(","), e = [ "1", "2", "3", "4", "5" ].filter(function(e) {
return !t.includes(e);
}), i = t.includes("" + cc.BacaratBetSite.TIE);
this.showGateWin(a);
e.map(function(t) {
t = parseInt(t);
cc.Bacarat2Controller.getInstance().getChipsLose(t, i);
}, this);
cc.director.getScheduler().schedule(function() {
t.map(function(t) {
t = parseInt(t);
cc.Bacarat2Controller.getInstance().refundChips(t);
}, this);
i && cc.Bacarat2Controller.getInstance().refundChipsTie();
}, this, 0, 0, 2, !1);
}, this, 0, 0, h, !1);
}
},
showGateWin: function(t) {
t.split(",").map(function(t) {
cc.Bacarat2Controller.getInstance().playAnimationWin(t);
}, this);
},
forceShowResult: function(t, e) {
var a = t.Result, i = a.GateData, n = a.PlayerCard1, r = a.PlayerCard2, c = a.PlayerCard3, o = a.BankerCard1, s = a.BankerCard2, h = a.BankerCard3, u = this.rootCardsPos.playerCardPos, l = this.rootCardsPos.bankerCardPos;
this.playerCard1Item.initValue(n);
this.playerCard2Item.initValue(r);
this.playerCard3Item.initValue(c);
this.bankerCard1Item.initValue(o);
this.bankerCard2Item.initValue(s);
this.bankerCard3Item.initValue(h);
this.playerCard1Item.forceShowCard(u[0]);
this.playerCard2Item.forceShowCard(u[1]);
this.playerCard3Item.forceShowCard(u[2], this.playerRotate);
this.bankerCard1Item.forceShowCard(l[0]);
this.bankerCard2Item.forceShowCard(l[1]);
this.bankerCard3Item.forceShowCard(l[2], this.bankerRotate);
this.showScoreArr({
player: [ n, r, c ],
banker: [ o, s, h ]
});
this.showGateWin(i);
var p = i.split(","), d = [ "1", "2", "3", "4", "5" ].filter(function(t) {
return !p.includes(t);
}), B = p.includes("" + cc.BacaratBetSite.TIE);
if (parseInt(e) > 5 && !cc.game.isPaused()) {
cc.director.getScheduler().schedule(function() {
d.map(function(t) {
t = parseInt(t);
cc.Bacarat2Controller.getInstance().getChipsLose(t, B);
}, this);
}, this, 0, 0, 1, !1);
cc.director.getScheduler().schedule(function() {
p.map(function(t) {
t = parseInt(t);
cc.Bacarat2Controller.getInstance().refundChips(t);
}, this);
B && cc.Bacarat2Controller.getInstance().refundChipsTie();
}, this, 0, 0, 1.5, !1);
} else cc.Bacarat2Controller.getInstance().clearAllChips();
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BacaratCatCauView: [ function(t, e) {
"use strict";
cc._RF.push(e, "5237cjlaHFFy4UzGpNv9xVN", "BacaratCatCauView");
cc.Class({
extends: cc.Component,
properties: {
itemTemplate: cc.Node,
layoutParent: cc.Node
},
onLoad: function() {
cc.Bacarat2Controller.getInstance().setCatCauView(this);
this.nodeRootx = -10;
this.nodeRooty = -38;
this.stepX = -19;
this.stepY = 19;
this.lengthNode = 5;
this.isActive = !1;
this.itemPool = new cc.NodePool();
for (var t = 0; t < 100; t++) this.itemPool.put(cc.instantiate(this.itemTemplate));
},
activeGraph: function(t) {
this.node.active = t;
this.isActive = t;
},
initListCatCau: function(t) {
if (t && 0 !== t.length) {
try {
this.clearList();
} catch (t) {}
var e = 0, a = [];
a[e] = [];
a[e].push(t[0]);
for (var i = 1; i < t.length; i++) {
a[e][0].BigGateIDWin == t[i].BigGateIDWin && a[e].length !== this.lengthNode || (a[++e] = []);
a[e].push(t[i]);
}
this.draw(a);
this.node.active = this.isActive;
}
},
draw: function(t) {
var e = this, a = 19 * t.length;
a = a < 420 ? 420 : a;
this.layoutParent.width = a;
this.layoutParent.height = 100;
t.map(function(t, a) {
var i = e.nodeRooty + (5 - t.length) * e.stepY;
t.map(function(t, n) {
var r = e.stepX * a + e.nodeRootx, c = i + n * e.stepY, o = null, s = (o = e.itemPool.size() > 0 ? e.itemPool.get() : cc.instantiate(e.itemTemplate)).getComponent(cc.ItemSoiCau);
s.setSpiteFrameItem(t.BigGateIDWin, t.IsPlayerPair, t.IsBankerPair);
s.setScore(t.HandValue);
o.parent = e.layoutParent;
o.position = cc.v2(r, c);
}, e);
}, this);
},
clearList: function() {
var t = this, e = this.layoutParent.children;
e.length > 0 && e.map(function(e) {
t.itemPool.put(e);
}, this);
this.layoutParent.removeAllChildren(!0);
},
onDestroy: function() {
try {
this.itemPool.clear();
} catch (t) {}
}
});
cc._RF.pop();
}, {} ],
BacaratChipsView: [ function(t, e) {
"use strict";
cc._RF.push(e, "a0769OwAqtOn5Q/RFzcpC8e", "BacaratChipsView");
(function() {
cc.BacaratChipsView = cc.Class({
extends: cc.Component,
properties: {
layoutChip: cc.Node,
posChips: [ cc.Node ],
posPPlayer: cc.Node,
posPlayer: cc.Node,
posTie: cc.Node,
posBanker: cc.Node,
posPBanker: cc.Node,
posGroupUsers: cc.Node,
posDealer: cc.Node,
lstPosPlayer: [ cc.Node ]
},
onLoad: function() {
cc.Bacarat2Controller.getInstance().setChipsView(this);
this.initParamChips();
},
initParamChips: function() {
this.chipsBetPPair = [];
this.chipsBetPlayer = [];
this.chipsBetTie = [];
this.chipsBetBanker = [];
this.chipsBetPBanker = [];
},
randomPosChip: function(t, e) {
var a = null;
switch (e = parseInt(e)) {
case cc.BacaratBetSite.PLAYER_PAIR:
a = this.posPPlayer;
break;

case cc.BacaratBetSite.PLAYER:
a = this.posPlayer;
break;

case cc.BacaratBetSite.TIE:
a = this.posTie;
break;

case cc.BacaratBetSite.BANKER:
a = this.posBanker;
break;

case cc.BacaratBetSite.BANKER_PAIR:
a = this.posPBanker;
}
var i = a.position, n = a.width / 2, r = -n, c = a.height / 2, o = -c, s = Math.floor(Math.random() * (n - r + 1) + r), h = Math.floor(Math.random() * (c - o + 1) + o);
i.x = i.x + s;
i.y = i.y + h;
return i;
},
moveChipBet: function(t, e, a, i) {
this.layoutChip.position = cc.v2(0, 0);
try {
t = parseInt(t);
var n = this.posChips[cc.BacaratMapChipSpriteFrame[t]].position;
if (a === cc.BacaratChipOf.USERS) {
n = this.posGroupUsers.position;
var r = cc.Bacarat2Controller.getInstance().positionPlayerUI().indexOf(i);
-1 !== r && (n = this.lstPosPlayer[r].position);
}
var c = this.randomPosChip(t, e), o = cc.Bacarat2Controller.getInstance().createChip(cc.BacaratMapChipSpriteFrame[t]);
o.parent = this.layoutChip;
o.position = n;
var s = cc.moveTo(.3, c);
cc.game.isPaused() ? o.position = c : o.runAction(s);
var h = n;
a === cc.BacaratChipOf.PLAYER && (h = this.lstPosPlayer[0].position);
switch (e) {
case cc.BacaratBetSite.PLAYER_PAIR:
this.chipsBetPPair.push([ o, t, h ]);
break;

case cc.BacaratBetSite.PLAYER:
this.chipsBetPlayer.push([ o, t, h ]);
break;

case cc.BacaratBetSite.TIE:
this.chipsBetTie.push([ o, t, h ]);
break;

case cc.BacaratBetSite.BANKER:
this.chipsBetBanker.push([ o, t, h ]);
break;

case cc.BacaratBetSite.BANKER_PAIR:
this.chipsBetPBanker.push([ o, t, h ]);
}
} catch (t) {}
},
updateChipForBetSession: function(t) {
var e = this;
0 !== t.length && t.map(function(t) {
0 !== t.length && t.map(function(t) {
var a = parseInt(t.BetSide), i = parseInt(t.BetValue), n = cc.Bacarat2Controller.getInstance().createChip(cc.BacaratMapChipSpriteFrame[i]);
if (n) {
var r = e.randomPosChip(i, a);
n.parent = e.layoutChip;
n.position = r;
var c = e.posGroupUsers.position, o = cc.Bacarat2Controller.getInstance().positionPlayerUI().indexOf(t.AccountID);
-1 !== o && (c = e.lstPosPlayer[o].position);
switch (a) {
case cc.BacaratBetSite.PLAYER_PAIR:
e.chipsBetPPair.push([ n, i, c ]);
break;

case cc.BacaratBetSite.PLAYER:
e.chipsBetPlayer.push([ n, i, c ]);
break;

case cc.BacaratBetSite.TIE:
e.chipsBetTie.push([ n, i, c ]);
break;

case cc.BacaratBetSite.BANKER:
e.chipsBetBanker.push([ n, i, c ]);
break;

case cc.BacaratBetSite.BANKER_PAIR:
e.chipsBetPBanker.push([ n, i, c ]);
}
}
}, e);
}, this);
},
refundChips: function(t) {
var e = this, a = null;
switch (t = parseInt(t)) {
case cc.BacaratBetSite.PLAYER_PAIR:
a = this.chipsBetPPair;
break;

case cc.BacaratBetSite.PLAYER:
a = this.chipsBetPlayer;
break;

case cc.BacaratBetSite.TIE:
a = this.chipsBetTie;
break;

case cc.BacaratBetSite.BANKER:
a = this.chipsBetBanker;
break;

case cc.BacaratBetSite.BANKER_PAIR:
a = this.chipsBetPBanker;
break;

default:
return;
}
var i = 0;
if (a && 0 !== a.length) {
a.map(function(a, n) {
try {
i = .1 * (n = n > 5 ? 5 : n);
var r = cc.Bacarat2Controller.getInstance().createChip(cc.BacaratMapChipSpriteFrame[a[1]]);
r.parent = e.layoutChip;
r.position = e.posDealer.position;
var c = e.randomPosChip(a[1], t);
if (cc.game.isPaused()) r.position = c; else {
var o = cc.moveTo(.3, c);
cc.director.getScheduler().schedule(function() {
r.runAction(o);
}, e, 0, 0, .1 * n, !1);
}
cc.Bacarat2Controller.getInstance().setChipWin(a[0], a[1], a[2]);
cc.Bacarat2Controller.getInstance().setChipWin(r, a[1], a[2]);
} catch (t) {}
}, this);
cc.director.getScheduler().schedule(function() {
this.runRefundChipForUser();
}, this, 0, 0, i + 1.5, !1);
}
},
runRefundChipForUser: function() {
var t = this;
try {
cc.Bacarat2Controller.getInstance().getChipsWin().map(function(e, a) {
a > 5 && (a = 5);
var i = e[2];
if (cc.game.isPaused()) {
cc.Bacarat2Controller.getInstance().putChipToPool(e[0], e[1]);
e[0].removeFromParent(!0);
} else cc.director.getScheduler().schedule(function() {
var t = cc.moveTo(.3, i), a = cc.callFunc(function() {
e[0].runAction(cc.fadeOut());
setTimeout(function() {
cc.Bacarat2Controller.getInstance().putChipToPool(e[0], e[1]);
}.bind(this), 1e3);
e[0].removeFromParent(!0);
}, this);
e[0].runAction(cc.sequence(t, a));
}, t, 0, 0, .1 * a, !1);
}, this);
} catch (t) {}
},
refundChipsTie: function() {
var t = this;
try {
[].concat(this.chipsBetPlayer, this.chipsBetBanker).map(function(e, a) {
a > 5 && (a = 5);
var i = e[2];
if (cc.game.isPaused()) {
cc.Bacarat2Controller.getInstance().putChipToPool(e[0], e[1]);
e[0].removeFromParent(!0);
} else cc.director.getScheduler().schedule(function() {
var t = cc.moveTo(.3, i), a = cc.callFunc(function() {
cc.Bacarat2Controller.getInstance().putChipToPool(e[0], e[1]);
e[0].removeFromParent(!0);
}, this);
e[0].runAction(cc.sequence(t, a));
}, t, 0, 0, .1 * a, !1);
}, this);
} catch (t) {}
},
getChipsLose: function(t, e) {
var a = this, i = null;
switch (t = parseInt(t)) {
case cc.BacaratBetSite.PLAYER_PAIR:
i = this.chipsBetPPair;
break;

case cc.BacaratBetSite.PLAYER:
i = this.chipsBetPlayer;
break;

case cc.BacaratBetSite.TIE:
i = this.chipsBetTie;
break;

case cc.BacaratBetSite.BANKER:
i = this.chipsBetBanker;
break;

case cc.BacaratBetSite.BANKER_PAIR:
i = this.chipsBetPBanker;
}
if (0 !== i.length && (!e || t != cc.BacaratBetSite.PLAYER && t != cc.BacaratBetSite.BANKER)) {
i.map(function(t, e) {
try {
e > 5 && (e = 5);
var i = a.posDealer.position;
if (cc.game.isPaused()) {
cc.Bacarat2Controller.getInstance().putChipToPool(t[0], t[1]);
t[0].removeFromParent(!0);
} else cc.director.getScheduler().schedule(function() {
var e = cc.moveTo(.3, i), a = cc.callFunc(function() {
cc.Bacarat2Controller.getInstance().putChipToPool(t[0], t[1]);
t[0].removeFromParent(!0);
}, this);
t[0].runAction(cc.sequence(e, a));
}, a, 0, 0, .1 * e, !1);
} catch (t) {}
}, this);
i = [];
}
},
clearAllChips: function() {
cc.Bacarat2Controller.getInstance().clearPools();
this.layoutChip.removeAllChildren();
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BacaratController: [ function(t, e) {
"use strict";
cc._RF.push(e, "9231ecXkxlFO6shxyYNUcQ3", "BacaratController");
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
e.prototype.setBacaratView = function(t) {
return this.BacaratView = t;
};
e.prototype.sendRequestOnHub = function(t, e, a) {
if (this.BacaratView) return this.BacaratView.sendRequestOnHub(t, e, a);
};
e.prototype.updateBalance = function(t) {
this.BacaratView.updateBalance(t);
};
e.prototype.setInfoView = function(t) {
return this.Bacarat_InfoView = t;
};
e.prototype.playerLeave = function(t) {
this.BacaratView.playerLeave(t);
this.Bacarat_InfoView.playerLeave(t);
};
e.prototype.updateSessionInfo = function(t) {
return this.Bacarat_InfoView.updateSessionInfo(t);
};
e.prototype.updatePlayersInGame = function(t) {
return this.Bacarat_InfoView.updatePlayersInGame(t);
};
e.prototype.winResult = function(t) {
return this.Bacarat_InfoView.winResult(t);
};
e.prototype.setWinResult = function(t) {
return this.winResultResponse = t;
};
e.prototype.getWinResult = function() {
return this.winResultResponse;
};
e.prototype.setWinVipResult = function(t) {
return this.winVipResultResponse = t;
};
e.prototype.getWinVipResult = function() {
return this.winVipResultResponse;
};
e.prototype.winResultVip = function(t) {
return this.Bacarat_InfoView.winResultVip(t);
};
e.prototype.playerShowBubbleChat = function(t) {
return this.Bacarat_InfoView.playerShowBubbleChat(t);
};
e.prototype.moveCards = function(t) {
return this.Bacarat_InfoView.moveCards(t);
};
e.prototype.updatePlayersUI = function(t) {
return this.Bacarat_InfoView.updatePlayersUI(t);
};
e.prototype.updatePlayerInfor = function(t) {
return this.Bacarat_InfoView.updatePlayerInfor(t);
};
e.prototype.updateBalanceCurrPlayer = function(t) {
return this.Bacarat_InfoView.updateBalanceCurrPlayer(t);
};
e.prototype.playerShowBubbleChat = function(t) {
return this.Bacarat_InfoView.playerShowBubbleChat(t);
};
e.prototype.updateBalancePlayer = function(t) {
return this.Bacarat_InfoView.updateBalancePlayer(t);
};
e.prototype.updatePositionPlayerUI = function(t) {
return this.positionsUI = t;
};
e.prototype.positionPlayerUI = function() {
return this.positionsUI;
};
e.prototype.setAssetView = function(t) {
return this.Bacarat_AssetsView = t;
};
e.prototype.getAssetView = function() {
return this.Bacarat_AssetsView;
};
e.prototype.getSfBack = function(t) {
return this.Bacarat_AssetsView.getSfBack(t);
};
e.prototype.getSfBorderCard = function() {
return this.Bacarat_AssetsView.getSfBorderCard();
};
e.prototype.createChip = function(t) {
return this.Bacarat_AssetsView.createChip(t);
};
e.prototype.getSfCardBack = function() {
return this.Bacarat_AssetsView.getSfCardBack();
};
e.prototype.getSpriteCard = function(t, e) {
return this.Bacarat_AssetsView.getSpriteCard(t, e);
};
e.prototype.getCardValueByNumber = function(t) {
return this.Bacarat_AssetsView.getCardValueByNumber(t);
};
e.prototype.getColorType = function(t) {
return this.Bacarat_AssetsView.getColorType(t);
};
e.prototype.putChipToPool = function(t, e) {
return this.Bacarat_AssetsView.putChipToPool(t, e);
};
e.prototype.clearPools = function() {
return this.Bacarat_AssetsView.clearPools();
};
e.prototype.setBetView = function(t) {
return this.Bacarat_BetView = t;
};
e.prototype.onBet = function(t) {
return this.Bacarat_BetView.onBet(t);
};
e.prototype.enableClickBet = function(t) {
return this.Bacarat_BetView.enableClickBet(t);
};
e.prototype.disableBetAgain = function(t) {
return this.Bacarat_BetView.disableBetAgain(t);
};
e.prototype.playAnimationWin = function(t) {
return this.Bacarat_BetView.playAnimationWin(t);
};
e.prototype.stopAnimationWin = function() {
return this.Bacarat_BetView.stopAnimationWin();
};
e.prototype.updateTotalUserBetSide = function(t, e) {
return this.Bacarat_BetView.updateTotalUserBetSide(t, e);
};
e.prototype.updateTotalBet = function(t) {
return this.Bacarat_BetView.updateTotalBet(t);
};
e.prototype.updateBetOfAccount = function(t) {
return this.Bacarat_BetView.updateBetOfAccount(t);
};
e.prototype.setCardView = function(t) {
return this.Bacarat_CardView = t;
};
e.prototype.activeNodeScore = function(t) {
return this.Bacarat_CardView.activeNodeScore(t);
};
e.prototype.activeNodeCards = function(t) {
return this.Bacarat_CardView.activeNodeCards(t);
};
e.prototype.showScoreSide = function(t) {
return this.Bacarat_CardView.showScoreSide(t);
};
e.prototype.resetLayoutCard = function() {
return this.Bacarat_CardView.resetLayoutCard();
};
e.prototype.onSlideCard = function(t) {
return this.Bacarat_CardView.onSlideCard(t);
};
e.prototype.slideCardOnBet = function() {
return this.Bacarat_CardView.slideCardOnBet();
};
e.prototype.initCardOnTable = function() {
return this.Bacarat_CardView.initCardOnTable();
};
e.prototype.forceShowResult = function(t, e) {
return this.Bacarat_CardView.forceShowResult(t, e);
};
e.prototype.setChipsView = function(t) {
return this.Bacarat_ChipsView = t;
};
e.prototype.moveChipBet = function(t, e, a, i) {
return this.Bacarat_ChipsView.moveChipBet(t, e, a, i);
};
e.prototype.getChipsLose = function(t, e) {
return this.Bacarat_ChipsView.getChipsLose(t, e);
};
e.prototype.refundChips = function(t) {
return this.Bacarat_ChipsView.refundChips(t);
};
e.prototype.refundChipsTie = function() {
return this.Bacarat_ChipsView.refundChipsTie();
};
e.prototype.clearAllChips = function() {
return this.Bacarat_ChipsView.clearAllChips();
};
e.prototype.initParamChips = function() {
return this.Bacarat_ChipsView.initParamChips();
};
e.prototype.updateChipForBetSession = function(t) {
return this.Bacarat_ChipsView.updateChipForBetSession(t);
};
e.prototype.clearBetLog = function(t) {
this.betLog = this.betLog.filter(function(e) {
return e.sessionID > t - 1;
});
};
e.prototype.getBetLogBySessionID = function(t) {
return this.betLog.filter(function(e) {
return e.sessionID == t - 1;
});
};
e.prototype.setBetLog = function(t) {
return this.betLog.push(t);
};
e.prototype.getBetLog = function() {
return this.betLog;
};
e.prototype.initBetLog = function() {
return this.betLog = [];
};
e.prototype.setSoiCauView = function(t) {
return this.Bacarat_SoiCau = t;
};
e.prototype.initListSoiCau = function(t) {
return this.Bacarat_SoiCau.initListSoiCau(t);
};
e.prototype.activeGraph = function(t) {
this.Bacarat_SoiCau.activeGraph(t);
this.Bacarat_CatCau.activeGraph(t);
};
e.prototype.setCatCauView = function(t) {
return this.Bacarat_CatCau = t;
};
e.prototype.initListCatCau = function(t) {
return this.Bacarat_CatCau.initListCatCau(t);
};
e.prototype.setChipWin = function(t, e, a) {
return this.chipsWin.push([ t, e, a ]);
};
e.prototype.getChipsWin = function() {
return this.chipsWin;
};
e.prototype.initChipsWin = function() {
return this.chipsWin = [];
};
e.prototype.setBetLogSession = function(t) {
return this.betLogSession = t;
};
e.prototype.getBetLogSession = function() {
return this.betLogSession;
};
e.prototype.setCurrentState = function(t) {
return this.currentState = t;
};
e.prototype.getCurrentState = function() {
return this.currentState;
};
return e;
}();
cc.BacaratController = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
BacaratGroupItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "f9dcdm7m3JOIpbNPPBVMofg", "BacaratGroupItem");
(function() {
cc.BacaratGroupItem = cc.Class({
extends: cc.Component,
properties: {
avatar: cc.Avatar,
lbSId: cc.Label,
lbNickName: cc.Label,
lbBalance: cc.Label,
lbSTT: cc.Label
},
updateItem: function(t, e) {
if (t) {
var a = t.Account, i = a.Avatar;
i <= 0 && (i = 1);
this.lbSTT.string = e + 1;
this.lbSId.string = cc.Config.getInstance().getServiceNameNoFormat(a.ServiceID);
this.avatar.setAvatar(cc.AccountController.getInstance().getAvatarImage(i));
this.lbNickName.string = a.NickName;
this.lbBalance.string = cc.Tool.getInstance().formatNumber(a.Balance);
this.item = t;
this.itemID = e;
}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BacaratGroupUserListView: [ function(t, e) {
"use strict";
cc._RF.push(e, "e234dp5HkFCtoYRJlmU00AW", "BacaratGroupUserListView");
(function() {
cc.BacaratGroupUserListView = cc.Class({
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
for (var a = Math.min(this.spawnCount, e), i = 0; i < a; ++i) {
var n = cc.instantiate(this.itemTemplate);
this.content.addChild(n);
n.setPosition(0, -n.height * (.5 + i) - this.spacing * (i + 1));
n.getComponent(cc.BacaratGroupItem).updateItem(this.messages[i], i);
this.items.push(n);
}
this.rootContentY = this.content.y;
},
update: function(t) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.items, a = this.bufferZone, i = this.scrollView.content.y < this.lastContentPosY, n = (this.itemTemplate.height + this.spacing) * e.length, r = 0; r < e.length; ++r) {
var c = this.getPositionInView(e[r]);
if (i) {
if (c.y < -a && e[r].y + n < 0) {
e[r].y = e[r].y + n;
var o = e[r].getComponent(cc.BacaratGroupItem), s = o.itemID - e.length;
o.updateItem(this.messages[s], s);
}
} else if (c.y > a && e[r].y - n > -this.content.height) {
e[r].y = e[r].y - n;
s = (o = e[r].getComponent(cc.BacaratGroupItem)).itemID + e.length;
o.updateItem(this.messages[s], s);
}
}
this.lastContentPosY = this.scrollView.content.y;
}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BacaratGroupUserView: [ function(t, e) {
"use strict";
cc._RF.push(e, "200e4GvazdNvpuWkER+Upwo", "BacaratGroupUserView");
(function() {
cc.BacaratGroupUserView = cc.Class({
extends: cc.Component,
properties: {
groupUserListView: cc.BacaratGroupUserListView
},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
this.node.zIndex = 99;
},
onEnable: function() {
var t = this;
cc.director.getScheduler().schedule(function() {
t.getGroupUser();
}, this, 1, 0, .2, !1);
this.animation.play("openPopup");
},
getGroupUser: function() {
new cc.BacaratGroupUserCommand().execute(this);
},
onGetGroupUserResponse: function(t) {
var e = t;
if (null !== e && e.length > 0) {
this.groupUserListView.resetList();
this.groupUserListView.initialize(e);
}
},
closeClicked: function() {
this.groupUserListView.resetList();
this.animation.play("closePopup");
var t = this;
cc.director.getScheduler().schedule(function() {
t.animation.stop();
cc.BacaratPopupController.getInstance().destroyGroupUserView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BacaratHelpView: [ function(t, e) {
"use strict";
cc._RF.push(e, "047601jfqdM77E6SSj77g44", "BacaratHelpView");
(function() {
cc.BacaratHelpView = cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
},
closeFinished: function() {
cc.BacaratPopupController.getInstance().destroyHelpView();
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BacaratHistoryItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "3b98ex1jiVGqJi16JO3Fvjc", "BacaratHistoryItem");
(function() {
cc.BacaratHistoryItem = cc.Class({
extends: cc.Component,
properties: {
lbSession: cc.Label,
lbTime: cc.Label,
lbSide: cc.Label,
lbResult: cc.Label,
lbBet: cc.Label,
lbRefund: cc.Label,
lbWin: cc.Label
},
updateItem: function(t, e) {
this.lbSession.string = "#" + t.SessionID;
this.lbTime.string = cc.Tool.getInstance().convertUTCTime(t.CreateTime);
var a = "";
switch (parseInt(t.BetGateID)) {
case cc.BacaratBetSite.PLAYER_PAIR:
a = "P.Pair";
break;

case cc.BacaratBetSite.PLAYER:
a = "Player";
break;

case cc.BacaratBetSite.TIE:
a = "Tie";
break;

case cc.BacaratBetSite.BANKER:
a = "Banker";
break;

case cc.BacaratBetSite.BANKER_PAIR:
a = "B.Pair";
}
this.lbSide.string = a;
var i = [];
if ("" === t.GateData) this.lbResult.string = ""; else {
t.GateData.split(",").map(function(t) {
switch (parseInt(t)) {
case cc.BacaratBetSite.PLAYER_PAIR:
i.push("P.Pair");
break;

case cc.BacaratBetSite.PLAYER:
i.push("Player");
break;

case cc.BacaratBetSite.TIE:
i.push("Tie");
break;

case cc.BacaratBetSite.BANKER:
i.push("Banker");
break;

case cc.BacaratBetSite.BANKER_PAIR:
i.push("B.Pair");
}
});
var n;
n = i.length > 1 ? i.join(", ") : i[0];
this.lbResult.string = n;
}
this.lbBet.string = cc.Tool.getInstance().formatNumber(t.Bet);
this.lbRefund.string = cc.Tool.getInstance().formatNumber(t.Refund);
this.lbWin.string = cc.Tool.getInstance().formatNumber(t.Award);
this.item = t;
this.itemID = e;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BacaratHistoryListView: [ function(t, e) {
"use strict";
cc._RF.push(e, "0a9402v8J1KU4ad3pVsj7Ot", "BacaratHistoryListView");
(function() {
cc.BacaratHistoryListView = cc.Class({
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
for (var a = Math.min(this.spawnCount, e), i = 0; i < a; ++i) {
var n = cc.instantiate(this.itemTemplate);
this.content.addChild(n);
n.setPosition(0, -n.height * (.5 + i) - this.spacing * (i + 1));
n.getComponent(cc.BacaratHistoryItem).updateItem(this.messages[i], i);
this.items.push(n);
}
this.rootContentY = this.content.y;
},
update: function(t) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.items, a = this.bufferZone, i = this.scrollView.content.y < this.lastContentPosY, n = (this.itemTemplate.height + this.spacing) * e.length, r = 0; r < e.length; ++r) {
var c = this.getPositionInView(e[r]);
if (i) {
if (c.y < -a && e[r].y + n < 0) {
e[r].y = e[r].y + n;
var o = e[r].getComponent(cc.BacaratHistoryItem), s = o.itemID - e.length;
o.updateItem(this.messages[s], s);
}
} else if (c.y > a && e[r].y - n > -this.content.height) {
e[r].y = e[r].y - n;
s = (o = e[r].getComponent(cc.BacaratHistoryItem)).itemID + e.length;
o.updateItem(this.messages[s], s);
}
}
this.lastContentPosY = this.scrollView.content.y;
}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BacaratHistoryView: [ function(t, e) {
"use strict";
cc._RF.push(e, "f6c9fCgiwZD4LZvSi9f1r+Z", "BacaratHistoryView");
(function() {
cc.BacaratHistoryView = cc.Class({
extends: cc.Component,
properties: {
historyListView: cc.BacaratHistoryListView
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
new cc.BacaratHistoryCommand().execute(this);
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
cc.BacaratPopupController.getInstance().destroyHistoryView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BacaratInfoView: [ function(t, e) {
"use strict";
cc._RF.push(e, "1f6a39hW/BA6Yemu9V6DgO8", "BacaratInfoView");
(function() {
cc.BacaratInfoView = cc.Class({
extends: cc.Component,
properties: {
lbTime: cc.Label,
lbSessionID: cc.Label,
layoutCard: cc.Node,
lbStatus: cc.Label,
lbTotalPlayer: cc.Label,
lstPlayers: [ cc.BacaratPlayer ]
},
onLoad: function() {
cc.Bacarat2Controller.getInstance().setInfoView(this);
this.activeTimer(!1);
this.showStatus(null);
this.isShowCard = !1;
this.currentState = null;
this.interval = null;
this.time = 0;
this.currPlayer = this.lstPlayers[0];
},
onDestroy: function() {
try {
this.interval && clearInterval(this.interval);
} catch (t) {}
},
updateSessionInfo: function(t) {
var e = t.CurrentState;
switch (e) {
case cc.BacaratMapGameState.BETTING:
if (this.currentState != e) {
cc.Bacarat2Controller.getInstance().setWinResult(null);
cc.Bacarat2Controller.getInstance().setWinVipResult(null);
this.showStatus("ĐẶT CƯỢC");
this.activeLayoutCard(!0);
this.isShowCard || cc.Bacarat2Controller.getInstance().initCardOnTable();
cc.Bacarat2Controller.getInstance().disableBetAgain(!1);
this.lbTime.node.color = cc.Color.GREEN;
this.updateTime(t.Ellapsed);
this.activeTimer(!0);
cc.Bacarat2Controller.getInstance().enableClickBet(!0);
}
break;

case cc.BacaratMapGameState.SHOW_RESULT:
if (this.currentState != e) {
this.showStatus(null);
this.activeLayoutCard(!0);
this.showStatus("KẾT QUẢ");
this.lbTime.node.color = cc.Color.WHITE;
this.updateTime(t.Ellapsed);
this.activeTimer(!0);
cc.Bacarat2Controller.getInstance().enableClickBet(!1);
cc.Bacarat2Controller.getInstance().initChipsWin();
try {
parseInt(t.Ellapsed) >= 15 && !cc.game.isPaused() ? cc.Bacarat2Controller.getInstance().onSlideCard(t) : cc.Bacarat2Controller.getInstance().forceShowResult(t, t.Ellapsed);
} catch (t) {}
}
break;

case cc.BacaratMapGameState.PREPARE_NEW_ROUD:
if (this.currentState != e) {
this.isShowCard = !0;
this.showStatus(null);
this.activeLayoutCard(!1);
this.activeTimer(!1);
cc.Bacarat2Controller.getInstance().enableClickBet(!1);
cc.Bacarat2Controller.getInstance().resetLayoutCard();
cc.Bacarat2Controller.getInstance().stopAnimationWin();
cc.Bacarat2Controller.getInstance().clearAllChips();
cc.Bacarat2Controller.getInstance().initParamChips();
cc.Bacarat2Controller.getInstance().clearBetLog(cc.Bacarat2Controller.getInstance().getBetLogSession());
cc.Bacarat2Controller.getInstance().setBetLogSession(cc.Bacarat2Controller.getInstance().getBetLogSession() + 1);
this.resetPlayerUI();
if (cc.game.isPaused()) {
this.activeLayoutCard(!0);
cc.Bacarat2Controller.getInstance().initCardOnTable();
} else cc.director.getScheduler().schedule(function() {
this.activeLayoutCard(!0);
cc.Bacarat2Controller.getInstance().slideCardOnBet();
}, this, 0, 0, .5, !1);
}
break;

case cc.BacaratMapGameState.END_BETTING:
if (this.currentState != e) {
this.showStatus("HẾT THỜI GIAN CƯỢC");
this.lbTime.node.color = cc.Color.RED;
this.updateTime(t.Ellapsed);
this.activeTimer(!0);
this.activeLayoutCard(!0);
this.isShowCard || cc.Bacarat2Controller.getInstance().initCardOnTable();
cc.Bacarat2Controller.getInstance().enableClickBet(!1);
cc.Bacarat2Controller.getInstance().disableBetAgain(!0);
}
}
this.updateSessionId(t.SessionID);
this.currentState = e;
cc.Bacarat2Controller.getInstance().setCurrentState(e);
},
updatePlayersInGame: function(t) {
this.lbTotalPlayer.string = t;
},
resetPlayerUI: function() {
this.lstPlayers.map(function(t) {
t.resetPlayerResultUI();
}, this);
},
updatePlayerInfor: function(t) {
this.currPlayer.registerPlayer(t.Account);
},
updatePlayersUI: function(t) {
var e = this;
this.positionsUI = [ 0, 0, 0, 0, 0, 0, 0 ];
var a = 0;
this.positionsUI[a] = lngui.UserManager.instance.mainUserInfo.AccountID;
a++;
t.map(function(t) {
if (t.AccountID != lngui.UserManager.instance.mainUserInfo.AccountID && a <= 6) {
e.positionsUI[a] = t.AccountID;
a++;
}
}, this);
this.positionsUI.forEach(function(e, a) {
if (0 != e) try {
var i = t.filter(function(t) {
return t.AccountID == e;
});
i.length > 0 && 0 != a && this.lstPlayers[a].registerPlayer(i[0].Account);
} catch (t) {} else this.lstPlayers[a].unRegisterPlayer();
}, this);
cc.Bacarat2Controller.getInstance().updatePositionPlayerUI(this.positionsUI);
},
updateBalanceCurrPlayer: function(t) {
this.currPlayer.updateChipNormal(t);
},
updateBalancePlayer: function(t) {
if (t) {
var e = t[0], a = t[3];
if (Array.isArray(this.positionsUI)) {
var i = this.positionsUI.indexOf(e);
-1 !== i && this.lstPlayers && this.lstPlayers[i] && this.lstPlayers[i].updateChip(a);
}
}
},
winResult: function(t) {
this.currPlayer.playerResultUI(t.Award, t.Balance);
},
winResultVip: function(t) {
var e = this;
t.map(function(t) {
if (e.positionsUI.includes(t.AccountID) && t.AccountID != lngui.UserManager.instance.mainUserInfo.AccountID) {
var a = e.positionsUI.indexOf(t.AccountID);
e.lstPlayers[a].playerResultUI(t.Award, t.Balance);
}
}, this);
},
showStatus: function(t) {
if (null != t) {
this.lbStatus.string = t;
this.lbStatus.node.parent.active = !0;
this.lbStatus.node.getComponent(cc.Animation).play("notify-checkchi");
} else this.lbStatus.node.parent.active = !1;
},
activeLayoutCard: function(t) {
this.layoutCard.active = t;
},
activeTimer: function(t) {
this.lbTime.node.parent.active = t;
this.interval && !t && clearInterval(this.interval);
},
updateSessionId: function(t) {
this.lbSessionID.string = ": #" + t;
},
updateTime: function(t) {
this.interval && clearInterval(this.interval);
this.time = parseInt(t);
this.startTimer();
this.interval = setInterval(function() {
this.startTimer();
}.bind(this), 1e3);
},
startTimer: function() {
if (this.time < 0) this.time = 0; else {
this.lbTime.string = this.time;
this.time--;
}
},
playerShowBubbleChat: function(t) {
0 == t[4] && t[3] != lngui.UserManager.instance.mainUserInfo.AccountID || (cc.ChatRoomController.getInstance().checkIsEmotion(t) ? this.lstPlayers.forEach(function(e) {
var a = e.nickName;
t[0] === a && e.showEmotion(cc.ChatRoomController.getInstance().getIndexEmotion(t), t);
}) : this.lstPlayers.forEach(function(e) {
var a = e.nickName;
t[0] === a && e.showBubbleChat(t);
}));
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BacaratMap: [ function(t, e) {
"use strict";
cc._RF.push(e, "1551bpINPpGmLPLlyDQFWS/", "BacaratMap");
cc.BacaratMapChip = {
"1K": 0,
"5K": 1,
"10K": 2,
"100K": 3,
"500K": 4,
"5M": 5
};
cc.BacaratMapChipSpriteFrame = {
1e3: 0,
5e3: 1,
1e4: 2,
1e5: 3,
5e5: 4,
5e6: 5
};
cc.BacaratMapSuite = {
CO: 39,
RO: 26,
TEP: 13,
BICH: 0
};
cc.BacaratMapGameState = {
BETTING: 0,
SHOW_RESULT: 1,
PREPARE_NEW_ROUD: 2,
END_BETTING: 3
};
cc.BacaratBetSite = {
PLAYER_PAIR: 1,
PLAYER: 2,
TIE: 3,
BANKER: 4,
BANKER_PAIR: 5
};
cc.BacaratColor = {
WHITE: 0,
YELLOW: 1,
RED: 2
};
cc.BacaratChipOf = {
PLAYER: 1,
USERS: 2
};
cc._RF.pop();
}, {} ],
BacaratPlayer: [ function(t, e) {
"use strict";
cc._RF.push(e, "cb9eaicw+1O3rrlJhy/QmGM", "BacaratPlayer");
(function() {
cc.BacaratPlayer = cc.Class({
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
showEmotion: function(t, e) {
this.nodeBubble.active = !1;
this.nodeEmotion.active = !0;
this.skeEmotion.clearTracks();
this.skeEmotion.setToSetupPose();
15 === t ? this.skeEmotion.setAnimation(t, "16-extreme-sexy-girl", !0) : this.skeEmotion.setAnimation(t, e[1], !0);
this.animation.play("showBubbleChat");
},
showBubbleChat: function(t) {
this.nodeBubble.active = !0;
this.nodeEmotion.active = !1;
this.lbBubbleChat.string = t[1];
this.animation.play("showBubbleChat");
},
resetPlayerResultUI: function() {
this.lbWin.node.active = !1;
},
playerResultUI: function(t, e) {
this.lbWin.string = "+" + cc.Tool.getInstance().formatNumber(t);
this.lbWin.node.active = !0;
this.lbWin.node.scaleY = 0;
this.animLbWin.play("xxWin");
e && this.updateChip(e);
},
updateChip: function(t) {
this.lbChip.tweenValueto(t);
},
updateChipNormal: function(t) {
this.lbChip.label.string = cc.Tool.getInstance().formatNumber(t);
},
onDestroy: function() {
this.unRegisterPlayer();
},
registerPlayer: function(t) {
var e = t.Avatar;
(e <= 0 || e > 9) && (e = Math.floor(9 * Math.random()));
this.avatar.setAvatar(cc.Bacarat2Controller.getInstance().getAvatars()[e]);
this.nodeInfo.active = !0;
this.nickName = t.NickName;
if (t.ServiceID) {
this.lbSID.string = cc.Config.getInstance().getServiceNameNoFormat(t.ServiceID);
this.lbName.string = cc.Config.getInstance().formatName(t.NickName, 7);
} else {
this.lbSID.string = "";
this.lbName.string = cc.Config.getInstance().formatName(t.NickName, 10);
}
this.lbChip.tweenValueto(t.Balance);
this.nodeInfo.active = !0;
},
unRegisterPlayer: function() {
this.avatar.setAvatar(cc.Bacarat2Controller.getInstance().getAvatarDef());
this.nodeInfo.active = !1;
try {
this.lbWin.node.active = !1;
this.nodeBubble.active = !1;
this.nodeEmotion.active = !1;
} catch (t) {}
},
updateConnectionStatus: function(t) {
switch (t) {
case cc.ConnectionStatus.DISCONNECTED:
case cc.ConnectionStatus.CONNECTED:
}
},
updatePlayerStatus: function(t) {
this.playerStatus = t.toString();
t.toString() === cc.PlayerStatus.INGAME ? this.node.opacity = 255 : this.node.opacity = 150;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BacaratPopupController: [ function(t, e) {
"use strict";
cc._RF.push(e, "bd807vGB69PWYEIpYnK4rsE", "BacaratPopupController");
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
return this.bacaratPopupView = t;
};
e.prototype.createTopView = function() {
return this.bacaratPopupView.createTopView();
};
e.prototype.destroyTopView = function() {
return this.bacaratPopupView.destroyTopView();
};
e.prototype.createHelpView = function() {
return this.bacaratPopupView.createHelpView();
};
e.prototype.destroyHelpView = function() {
return this.bacaratPopupView.destroyHelpView();
};
e.prototype.createHistoryView = function() {
return this.bacaratPopupView.createHistoryView();
};
e.prototype.destroyHistoryView = function() {
return this.bacaratPopupView.destroyHistoryView();
};
e.prototype.createGroupUserView = function() {
return this.bacaratPopupView.createGroupUserView();
};
e.prototype.destroyGroupUserView = function() {
return this.bacaratPopupView.destroyGroupUserView();
};
return e;
}();
cc.BacaratPopupController = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
BacaratPopupView: [ function(t, e) {
"use strict";
cc._RF.push(e, "550dbpUucFNEoEiwMSWbOnM", "BacaratPopupView");
(function() {
cc.BacaratPopupView = cc.Class({
extends: cc.Component,
properties: {
prefabGroupUser: cc.Prefab,
prefabBetLines: cc.Prefab,
prefabHelp: cc.Prefab,
prefabHistory: cc.Prefab,
prefabTop: cc.Prefab,
prefabSessionDetail: cc.Prefab,
prefabGraph: cc.Prefab
},
onLoad: function() {
cc.BacaratPopupController.getInstance().setPopupView(this);
},
createGraphView: function() {
this.nodeGraph = this.createView(this.prefabGraph);
},
destroyGraphView: function() {
this.nodeGraph && this.nodeGraph.destroy();
},
createGroupUserView: function() {
this.nodeGroupUser = this.createView(this.prefabGroupUser);
},
destroyGroupUserView: function() {
this.nodeGroupUser && this.nodeGroupUser.destroy();
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
BacaratSettingView: [ function(t, e) {
"use strict";
cc._RF.push(e, "f075eNlEkFG351Ak4dSLocv", "BacaratSettingView");
cc.Class({
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
cc.AudioController.getInstance().enableMusic(this.music);
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
cc.Tool.getInstance().setItem("@Sound", this.sound);
this.spriteSound.spriteFrame = this.sound ? this.sfSounds[0] : this.sfSounds[1];
cc.AudioController.getInstance().enableSound(this.sound);
},
musicClicked: function() {
this.music = !this.music;
cc.Tool.getInstance().setItem("@Music", this.music);
this.spriteMusic.spriteFrame = this.music ? this.sfMusics[0] : this.sfMusics[1];
cc.AudioController.getInstance().enableMusic(this.music);
}
});
cc._RF.pop();
}, {} ],
BacaratSoiCauView: [ function(t, e) {
"use strict";
cc._RF.push(e, "599f7PeRZZKPpw+bc8pCmUs", "BacaratSoiCauView");
cc.Class({
extends: cc.Component,
properties: {
itemTemplate: cc.Node,
layoutParent: cc.Node
},
onLoad: function() {
cc.Bacarat2Controller.getInstance().setSoiCauView(this);
this.isActive = !1;
this.itemPool = new cc.NodePool();
for (var t = 0; t < 100; t++) this.itemPool.put(cc.instantiate(this.itemTemplate));
this.layoutParent.width = 380;
},
activeGraph: function(t) {
this.node.active = t;
this.isActive = t;
},
initListSoiCau: function(t) {
var e = this;
if (t && 0 !== t.length) {
try {
this.clearList();
} catch (t) {}
t.map(function(t) {
var a = null;
(a = e.itemPool.size() > 0 ? e.itemPool.get() : cc.instantiate(e.itemTemplate)).getComponent(cc.ItemSoiCau).setSpiteFrameItem(t.BigGateIDWin, t.IsPlayerPair, t.IsBankerPair);
a.parent = e.layoutParent;
}, this);
this.node.active = this.isActive;
}
},
clearList: function() {
var t = this, e = this.layoutParent.children;
e.length > 0 && e.map(function(e) {
t.itemPool.put(e);
}, this);
this.layoutParent.removeAllChildren(!0);
},
onDestroy: function() {
try {
this.itemPool.clear();
} catch (t) {}
}
});
cc._RF.pop();
}, {} ],
BacaratTopItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "ddfa3kmvaBFpJ/3BBqFUFbs", "BacaratTopItem");
(function() {
cc.BacaratTopItem = cc.Class({
extends: cc.Component,
properties: {
lbRank: cc.Label,
lbSID: cc.Label,
lbNickName: cc.Label,
lbTotalWin: cc.Label,
spriteTop: cc.Sprite,
spTop: [ cc.SpriteFrame ]
},
updateItem: function(t, e) {
if (e < 3) {
this.lbRank.node.active = !1;
this.spriteTop.node.active = !0;
this.spriteTop.spriteFrame = this.spTop[e];
} else {
this.lbRank.node.active = !0;
this.spriteTop.node.active = !1;
this.lbRank.string = e + 1;
}
this.lbSID.string = cc.Config.getInstance().getServiceNameNoFormat(t.ServiceID);
this.lbNickName.string = t.DisplayName;
this.lbTotalWin.string = cc.Tool.getInstance().formatNumber(t.Award);
this.item = t;
this.itemID = e;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BacaratTopListView: [ function(t, e) {
"use strict";
cc._RF.push(e, "236d6E11AdCC7qwHzVYZojt", "BacaratTopListView");
(function() {
cc.BacaratTopListView = cc.Class({
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
for (var a = Math.min(this.spawnCount, e), i = 0; i < a; ++i) {
var n = cc.instantiate(this.itemTemplate);
this.content.addChild(n);
n.setPosition(0, -n.height * (.5 + i) - this.spacing * (i + 1));
n.getComponent(cc.BacaratTopItem).updateItem(this.messages[i], i);
this.items.push(n);
}
this.rootContentY = this.content.y;
},
update: function(t) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.items, a = this.bufferZone, i = this.scrollView.content.y < this.lastContentPosY, n = (this.itemTemplate.height + this.spacing) * e.length, r = 0; r < e.length; ++r) {
var c = this.getPositionInView(e[r]);
if (i) {
if (c.y < -a && e[r].y + n < 0) {
e[r].y = e[r].y + n;
var o = e[r].getComponent(cc.BacaratTopItem), s = o.itemID - e.length;
o.updateItem(this.messages[s], s);
}
} else if (c.y > a && e[r].y - n > -this.content.height) {
e[r].y = e[r].y - n;
s = (o = e[r].getComponent(cc.BacaratTopItem)).itemID + e.length;
o.updateItem(this.messages[s], s);
}
}
this.lastContentPosY = this.scrollView.content.y;
}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BacaratTopView: [ function(t, e) {
"use strict";
cc._RF.push(e, "95ea4ir9rFI2LGvFsTPVF8V", "BacaratTopView");
(function() {
cc.BacaratTopView = cc.Class({
extends: cc.Component,
properties: {
topListView: cc.BacaratTopListView
},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
},
onEnable: function() {
var t = this;
cc.director.getScheduler().schedule(function() {
t.getTopSessionWinners();
}, this, 1, 0, .2, !1);
this.animation.play("openPopup");
},
getTopSessionWinners: function() {
new cc.BacaratWinnerCommand().execute(this);
},
onGetBigWinnerResponse: function(t) {
var e = t;
if (null !== e && e.length > 0) {
this.topListView.resetList();
this.topListView.initialize(e);
}
},
closeClicked: function() {
this.topListView.resetList();
this.animation.play("closePopup");
var t = this;
cc.director.getScheduler().schedule(function() {
t.animation.stop();
cc.BacaratPopupController.getInstance().destroyTopView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BacaratView: [ function(t, e) {
"use strict";
cc._RF.push(e, "b87fd464AJCkr1U+1A/zlQj", "BacaratView");
var a = t("NetConfig");
(function() {
cc.BacaratView = cc.Class({
extends: cc.Component,
properties: {
nodeSoiCau: cc.Node,
avatarDef: cc.SpriteFrame,
listAvtars: [ cc.SpriteFrame ]
},
onLoad: function() {
cc.Bacarat2Controller.getInstance().setBacaratView(this);
cc.Bacarat2Controller.getInstance().initBetLog();
cc.Bacarat2Controller.getInstance().setBetLogSession(1);
cc.Bacarat2Controller.getInstance().setAvatarDef(this.avatarDef);
cc.Bacarat2Controller.getInstance().setAvatars(this.listAvtars);
this.subDomainName = cc.SubdomainName.BACCARAT;
this.interval = null;
this.isActiveChat = !1;
this.lastTimeReconnect = new Date().getTime();
this.currentState = -1;
this.currentSessionId = -1;
this.viewSoiCau = !1;
this.nodeSoiCauAnimation = this.nodeSoiCau.getComponent(cc.Animation);
this.idPlayNow = 0;
this.currAccId = null;
this.connectHub();
},
onEnable: function() {},
updateBalance: function() {},
onDestroy: function() {
this.sendRequestOnHub(cc.MethodHubName.EXIT_LOBBY);
this.unscheduleAllCallbacks();
cc.Bacarat2Controller.getInstance().setBacaratView(null);
if (cc.sys.isNative) {
cc.loader.releaseResDir("bacarat/prefabs");
cc.loader.releaseResDir("bacarat/images");
}
lngui.UIWaitingLayout.hideWaiting();
},
disconnectAndLogout: function() {
this.BacaratHub && this.BacaratHub.disconnect();
this.lastTimeReconnect = new Date().getTime();
},
connectHub: function() {
var t = {
url: "https://baccarat." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
hub: "baccaratHub",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate,
ip: "http://18.138.207.162:9001/signalr/negotiate"
};
cc.systemEvent.off("OnBaccaratWebSocKet", this.onResponeData, this);
cc.systemEvent.on("OnBaccaratWebSocKet", this.onResponeData, this);
this.BaccaratHub = new lngui.GateSignalR();
this.BaccaratHub.connect("OnBaccaratWebSocKet", t.url, t.hub, t.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
},
sendRequestOnHub: function(t, e, a) {
switch (t) {
case cc.MethodHubName.ENTER_LOBBY:
this.sendSignalR("EnterLobby", [ 4, 1 ]);
this.sendSignalR("PlayNow", []);
break;

case cc.MethodHubName.EXIT_LOBBY:
this.sendSignalR("ExitLobby", []);
break;

case cc.MethodHubName.PLAY_NOW:
this.sendSignalR("PlayNow", []);
break;

case cc.MethodHubName.BET:
console.log("Đã bet");
this.sendSignalR("Bet", [ e, a ]);
break;

case cc.MethodHubName.REGISTER_LEAVE_ROOM:
this.sendSignalR("RegisterLeaveRoom", []);
break;

case cc.MethodHubName.UNREGISTER_LEAVE_ROOM:
this.sendSignalR("UnregisterLeaveRoom", []);
break;

case cc.MethodHubName.SEND_MESSAGE:
this.xxHub.sendRoomMessage(e);
}
},
sendSignalR: function(t, e) {
lngui.ZLog.log("SendSocket==========================>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.BaccaratHub && this.BaccaratHub.send(t, e);
},
onResponeData: function(t) {
t.s && "error" == t.s || this.onHubMessage(t);
},
connectSuccess: function() {
console.log("connectSuccess =========>");
this.sendRequestOnHub(cc.MethodHubName.ENTER_LOBBY);
lngui.UIWaitingLayout.hideWaiting();
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
cc.Bacarat2Controller.getInstance().updateSessionInfo(t.A[0]);
cc.Bacarat2Controller.getInstance().updateTotalBet(t.A[0]);
break;

case cc.MethodHubOnName.SUMMARY_PLAYER:
cc.Bacarat2Controller.getInstance().updatePlayersInGame(t.A[0]);
break;

case cc.MethodHubOnName.JOIN_GAME:
cc.Bacarat2Controller.getInstance().updatePlayerInfor(t.A[0]);
break;

case cc.MethodHubOnName.VIP_PLAYERS:
var a = t.A[0];
a.length > 0 && cc.Bacarat2Controller.getInstance().updatePlayersUI(a);
break;

case cc.MethodHubOnName.GAME_HISTORY:
cc.Bacarat2Controller.getInstance().initListSoiCau(t.A[0]);
cc.Bacarat2Controller.getInstance().initListCatCau(t.A[0]);
break;

case cc.MethodHubOnName.BET_OF_ACCOUNT:
cc.Bacarat2Controller.getInstance().updateBetOfAccount(t.A[0]);
break;

case cc.MethodHubOnName.BET_SUCCESS:
var i = cc.Bacarat2Controller.getInstance().getBetLogSession();
cc.Bacarat2Controller.getInstance().setBetLog({
sessionID: i,
value: t.A[0].BetValue,
betSide: t.A[0].BetSide
});
cc.Bacarat2Controller.getInstance().updateBalanceCurrPlayer(t.A[1]);
cc.Bacarat2Controller.getInstance().updateTotalUserBetSide(t.A[0].BetSide, t.A[0].SumaryBet);
cc.Bacarat2Controller.getInstance().moveChipBet(t.A[0].BetValue, t.A[0].BetSide, cc.BacaratChipOf.PLAYER, t.A[0].AccountID);
break;

case cc.MethodHubOnName.BET_SESSION:
cc.Bacarat2Controller.getInstance().updateChipForBetSession(t.A[0]);
break;

case cc.MethodHubOnName.BET_USER:
if (t.A[0] != lngui.UserManager.instance.mainUserInfo.AccountID) {
cc.Bacarat2Controller.getInstance().updateBalancePlayer(t.A);
cc.Bacarat2Controller.getInstance().moveChipBet(t.A[1], t.A[2], cc.BacaratChipOf.USERS, t.A[0]);
}
break;

case cc.MethodHubOnName.WIN_RESULT:
cc.Bacarat2Controller.getInstance().setWinResult(t.A[0]);
cc.Bacarat2Controller.getInstance().updateRealBalance(t.A[0].Balance);
break;

case cc.MethodHubOnName.WIN_RESULT_VIP:
t.A.length > 0 && cc.Bacarat2Controller.getInstance().setWinVipResult(t.A[0]);
break;

case cc.MethodHubOnName.PLAYER_MESSAGE:
cc.PopupController.getInstance().showMessage(t.A[0]);
break;

case cc.MethodHubOnName.MESSAGE:
cc.game.isPaused() || cc.PopupController.getInstance().showMessage(t.A[0]);
break;

case cc.MethodHubOnName.RECEIVE_MESSAGE:
cc.ChatRoomController.getInstance().addChatContent(t.A);
cc.Bacarat2Controller.getInstance().playerShowBubbleChat(t.A);
}
}); else if (t.R && t.R.AccountID) {
this.currAccId = t.R.AccountID;
this.sendRequestOnHub(cc.MethodHubName.PLAY_NOW);
cc.PopupController.getInstance().hideBusy();
} else t.I;
},
onHubOpen: function() {
cc.PopupController.getInstance().hideBusy();
this.sendRequestOnHub(cc.MethodHubName.ENTER_LOBBY);
cc.PopupController.getInstance().showBusy();
},
onHubClose: function() {
new Date().getTime() - this.lastTimeReconnect >= 1e3 * a.RECONNECT_TIME ? this.reconnect() : cc.director.getScheduler().schedule(this.reconnect, this, a.RECONNECT_TIME, 0, 0, !1);
},
onHubError: function() {},
backClicked: function() {
lngui.UIScreenManager.instance.popToRootScreen();
},
helpClicked: function() {
cc.BCPopupController.getInstance().createHelpView();
},
playerLeave: function(t) {
if (t[0] === lngui.UserManager.instance.mainUserInfo.AccountID) {
var e = t[1];
this.backClicked();
cc.PopupController.getInstance().showMessage(e);
}
},
onViewSoiCauClick: function() {
this.viewSoiCau = !this.viewSoiCau;
this.viewSoiCau ? this.nodeSoiCauAnimation.play("down") : this.nodeSoiCauAnimation.play("up");
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
Bacarat_Card: [ function(t, e) {
"use strict";
cc._RF.push(e, "59d96druutN5K7PmKr4h0mt", "Bacarat_Card");
(function() {
cc.Bacarat_Card = {
BICH: 0,
TEP: 13,
RO: 26,
CO: 39
};
}).call(void 0);
cc._RF.pop();
}, {} ],
Bacarat_GroupUserCommand: [ function(t, e) {
"use strict";
cc._RF.push(e, "3349dt9x05AcYnGoAOmpws6", "Bacarat_GroupUserCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t) {
var e = cc.SubdomainName.BACCARAT;
return cc.ServerConnector.getInstance().sendRequest(e, "api/Baccarat/GetPlayersNotInGame", function(e) {
var a = JSON.parse(e);
return t.onGetGroupUserResponse(a);
});
};
return t;
}();
cc.BacaratGroupUserCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
Bacarat_HistoryCommand: [ function(t, e) {
"use strict";
cc._RF.push(e, "ce383GOFHBEd62mdVTCrpmj", "Bacarat_HistoryCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t) {
var e = cc.SubdomainName.BACCARAT;
return cc.ServerConnector.getInstance().sendRequest(e, "api/Baccarat/GetHistory?top=50", function(e) {
var a = JSON.parse(e);
return t.onGetHistoryResponse(a);
});
};
return t;
}();
cc.BacaratHistoryCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
Bacarat_SoiCauCommand: [ function(t, e) {
"use strict";
cc._RF.push(e, "83a56r72JRNM5fVKOWSG33A", "Bacarat_SoiCauCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t) {
var e = cc.SubdomainName.BACARAT;
return cc.ServerConnector.getInstance().sendRequest(e, "api/Baccarat/GetSoiCau", function(e) {
var a = JSON.parse(e);
return t.onBacarat_GetSoiCauResponse(a);
});
};
return t;
}();
cc.BacaratSoiCauCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
Bacarat_WinnerCommand: [ function(t, e) {
"use strict";
cc._RF.push(e, "19967PEjiJLrqEDKSAdf/EU", "Bacarat_WinnerCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t) {
var e = cc.SubdomainName.BACCARAT;
return cc.ServerConnector.getInstance().sendRequest(e, "api/Baccarat/GetBigWinner", function(e) {
var a = JSON.parse(e);
return t.onGetBigWinnerResponse(a);
});
};
return t;
}();
cc.BacaratWinnerCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
BaccaratNodeDepth: [ function(t, e) {
"use strict";
cc._RF.push(e, "86e35ceRstKi5cT2Hcsz6QU", "BaccaratNodeDepth");
(function() {
cc.NoteDepth = cc.Enum({
POPUP_SYSTEM: 9999,
LOGIN_VIEW: 9990,
SUMMON_DRAGON: 9985,
POPUP_GIFTCODE: 9983,
POPUP_PORTAL: 9980,
MINI_EVENT_VIEW: 9972,
MINI_VIEW: 9970,
POPUP_EVENT: 9950,
POPUP_TREASURE: 9945,
POPUP_TAIXIU: 9940,
PORTAL_JACKPOT_EFFECT: 9930,
SETTING: 9974,
MINI_VIEW_BUTTON: 9973,
CARD_GAME_ROOM_HELP: 4,
TOP_BAR_CARD_GAME: 3,
CARD_GAME: 2,
ICON_DYNAMIC: 1,
TOP_BAR: 0
});
}).call(void 0);
cc._RF.pop();
}, {} ],
ItemSoiCau: [ function(t, e) {
"use strict";
cc._RF.push(e, "3b748TwRH1CBoBnKnZkEd1v", "ItemSoiCau");
(function() {
cc.ItemSoiCau = cc.Class({
extends: cc.Component,
properties: {
nodePPair: cc.Node,
nodeBPair: cc.Node,
sprite: cc.Sprite
},
setSpiteFrameItem: function(t, e, a) {
void 0 === this.gameAssets && (this.gameAssets = cc.Bacarat2Controller.getInstance().getAssetView());
this.gateWin = t;
this.nodePPair.active = e;
this.nodeBPair.active = a;
switch (this.gateWin) {
case cc.BacaratBetSite.PLAYER:
this.sprite.spriteFrame = this.gameAssets.sfPlayers[0];
break;

case cc.BacaratBetSite.TIE:
this.sprite.spriteFrame = this.gameAssets.sfTies[0];
break;

case cc.BacaratBetSite.BANKER:
this.sprite.spriteFrame = this.gameAssets.sfBankers[0];
}
},
setScore: function(t) {
switch (this.gateWin) {
case cc.BacaratBetSite.PLAYER:
this.sprite.spriteFrame = this.gameAssets.sfPlayers[t + 1];
break;

case cc.BacaratBetSite.TIE:
this.sprite.spriteFrame = this.gameAssets.sfTies[t + 1];
break;

case cc.BacaratBetSite.BANKER:
this.sprite.spriteFrame = this.gameAssets.sfBankers[t + 1];
}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
PopupBacaViewBase: [ function(t, e) {
"use strict";
cc._RF.push(e, "6871cIxGh5P+4nkvrmacsd3", "PopupBacaViewBase");
(function() {
cc.PopupBacaViewBase = cc.Class({
extends: cc.Component,
properties: {
prefabBetLines: cc.Prefab,
prefabHelp: cc.Prefab,
prefabHistory: cc.Prefab,
prefabTop: cc.Prefab,
prefabSessionDetail: cc.Prefab
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
}, {} ]
}, {}, [ "AudioPoolBacarat", "BacaratSettingView", "Bacarat_GroupUserCommand", "Bacarat_HistoryCommand", "Bacarat_SoiCauCommand", "Bacarat_WinnerCommand", "BacaratMap", "Bacarat_Card", "BaccaratNodeDepth", "Bacarat2Controller", "BacaratController", "BacaratPopupController", "BacaratActiveGraph", "BacaratCatCauView", "BacaratSoiCauView", "ItemSoiCau", "BacaratGroupItem", "BacaratGroupUserListView", "BacaratGroupUserView", "BacaratHelpView", "BacaratHistoryItem", "BacaratHistoryListView", "BacaratHistoryView", "BacaratButtonBet", "BacaratPlayer", "BacaratTopItem", "BacaratTopListView", "BacaratTopView", "BacaratAssetView", "BacaratBetView", "BacaratCardItem", "BacaratCardView", "BacaratChipsView", "BacaratInfoView", "BacaratPopupView", "BacaratView", "PopupBacaViewBase" ]);