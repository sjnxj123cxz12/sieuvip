window.__require = function e(t, i, o) {
function n(a, c) {
if (!i[a]) {
if (!t[a]) {
var r = a.split("/");
r = r[r.length - 1];
if (!t[r]) {
var u = "function" == typeof __require && __require;
if (!c && u) return u(r, !0);
if (s) return s(r, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = r;
}
var h = i[a] = {
exports: {}
};
t[a][0].call(h.exports, function(e) {
return n(t[a][1][e] || e);
}, h, h.exports, e, t, i, o);
}
return i[a].exports;
}
for (var s = "function" == typeof __require && __require, a = 0; a < o.length; a++) n(o[a]);
return n;
}({
"789.LongHoAudioTypes": [ function(e, t) {
"use strict";
cc._RF.push(t, "049c11gEBBN4YHcuLkIcKnM", "789.LongHoAudioTypes");
(function() {
cc.LongHoAudioTypes_789 = cc.Enum({
BACKGROUND: "BACKGROUND",
BET: "BET",
CARD_SLIDE: "CARD_SLIDE",
CARD_SLIDE_BURN: "CARD_SLIDE_BURN",
CARD_SLIDE_RONG: "CARD_SLIDE_RONG",
CARD_SLIDE_HO: "CARD_SLIDE_HO",
CARD_OPEN: "CARD_OPEN",
CARD_BURN_MOVE_TO_BOX: "CARD_BURN_MOVE_TO_BOX",
SELECT_CHIP: "SELECT_CHIP",
GET_COIN: "GET_COIN"
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoAudios": [ function(e, t) {
"use strict";
cc._RF.push(t, "eb62bHhdQxJVKM524BgwVU5", "789.LongHoAudios");
(function() {
cc.LongHoAudios_789 = cc.Class({
extends: cc.Component,
properties: {
backgroundSound: cc.AudioSource,
betSound: cc.AudioSource,
cardsSlide: cc.AudioSource,
cardsSlideBurn: cc.AudioSource,
cardsSlideRong: cc.AudioSource,
cardsSlideHo: cc.AudioSource,
cardBurnMoveToBox: cc.AudioSource,
cardOpen: cc.AudioSource,
selectChip: cc.AudioSource,
getCoin: cc.AudioSource
},
onLoad: function() {
cc.AudioController.getInstance().setAudioPool(this);
},
enableMusic: function(e) {
if (this.backgroundSound) if (e) {
if (!this.backgroundSound.isPlaying) {
this.backgroundSound.play();
this.backgroundSound.volume = .5;
}
} else this.backgroundSound.stop();
},
enableSound: function(e) {
this.betSound.mute = !e;
this.cardsSlideBurn.mute = !e;
this.cardsSlideHo.mute = !e;
this.cardsSlideRong.mute = !e;
this.cardBurnMoveToBox.mute = !e;
this.cardOpen.mute = !e;
this.selectChip.mute = !e;
this.getCoin.mute = !e;
this.betSound.volume = .2;
this.getCoin.volume = .2;
this.selectChip.volume = .2;
},
getAudioClip: function(e) {
var t;
t = null;
switch (e) {
case cc.LongHoAudioTypes_789.BACKGROUND:
t = this.backgroundSound;
break;

case cc.LongHoAudioTypes_789.BET:
t = this.betSound;
break;

case cc.LongHoAudioTypes_789.CARD_SLIDE_BURN:
t = this.cardsSlideBurn;
break;

case cc.LongHoAudioTypes_789.CARD_SLIDE_RONG:
t = this.cardsSlideRong;
break;

case cc.LongHoAudioTypes_789.CARD_SLIDE_HO:
t = this.cardsSlideHo;
break;

case cc.LongHoAudioTypes_789.CARD_BURN_MOVE_TO_BOX:
t = this.cardBurnMoveToBox;
break;

case cc.LongHoAudioTypes_789.CARD_OPEN:
t = this.cardOpen;
break;

case cc.LongHoAudioTypes_789.SELECT_CHIP:
t = this.selectChip;
break;

case cc.LongHoAudioTypes_789.GET_COIN:
t = this.getCoin;
}
return t;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoBetSide": [ function(e, t) {
"use strict";
cc._RF.push(t, "4552784p9ZM0IySTL4cdm0Y", "789.LongHoBetSide");
(function() {
cc.LongHoBetSide_789 = cc.Enum({
RONG: 1,
HOA: 2,
HO: 3
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoBetView": [ function(e, t) {
"use strict";
cc._RF.push(t, "349f8DE019NdoYA9qZjUQ1x", "789.LongHoBetView");
(function() {
cc.LongHoBetView_789 = cc.Class({
extends: cc.Component,
properties: {
layoutButtonBets: cc.Node,
lbDragonBet: cc.Label,
lbTideBet: cc.Label,
lbTigerBet: cc.Label,
nodeBetX2: cc.Node,
nodeBetAgain: cc.Node
},
onLoad: function() {
cc.LongHoController_789.getInstance().setDragonTigerBetView(this);
this.reset();
this.balanceBet = 5e3;
this.totalBet = 0;
this.betSide = 0;
this.btnBetX2 = this.nodeBetX2.getComponent(cc.Button);
this.btnBetAgain = this.nodeBetAgain.getComponent(cc.Button);
},
onDestroy: function() {
cc.LongHoController_789.getInstance().setDragonTigerBetView(null);
},
reset: function() {
this.lbDragonBet.string = "";
this.lbTideBet.string = "";
this.lbTigerBet.string = "";
},
setBalanceBet: function(e, t) {
if (parseInt(t) != this.balanceBet) {
cc.AudioController.getInstance().playSound(cc.LongHoAudioTypes_789.SELECT_CHIP);
this.resetStateBtnBet();
var i = e.target._name, o = this.layoutButtonBets.getChildByName(i), n = o.getComponent(cc.LongHoButtonBet_789), s = o.getChildren()[0];
s.getComponent(cc.Sprite).spriteFrame = n.spriteButtons[0];
var a = cc.scaleTo(.1, .85, .85);
a.easing(cc.easeInOut(1));
s.runAction(a);
this.balanceBet = parseInt(t);
}
},
resetStateBtnBet: function() {
this.layoutButtonBets.getChildren().map(function(e) {
var t = e.getComponent(cc.LongHoButtonBet_789), i = e.getChildren()[0];
i.getComponent(cc.Sprite).spriteFrame = t.spriteButtons[1];
var o = cc.scaleTo(.1, .7, .7);
o.easing(cc.easeInOut(1));
i.runAction(o);
});
},
updateTotalBetValue: function(e, t) {
t = this.formatNumber(t);
switch (parseInt(e)) {
case cc.LongHoBetSide_789.RONG:
this.lbDragonBet.string = t;
break;

case cc.LongHoBetSide_789.HOA:
this.lbTideBet.string = t;
break;

case cc.LongHoBetSide_789.HO:
this.lbTigerBet.string = t;
}
},
formatNumber: function(e) {
return 0 == (e = parseInt(e)) ? "" : cc.Tool.getInstance().formatNumber(e);
},
updateBetInfoFromServer: function(e) {
this.listBet = e;
var t = this;
e.map(function(e) {
t.updateBetInfo(e);
});
},
updateBetInfo: function(e) {
var t = cc.Tool.getInstance().formatNumber(e.BetValue);
switch (e.BetSide) {
case cc.LongHoBetSide_789.RONG:
this.lbDragonBet.string = t;
break;

case cc.LongHoBetSide_789.HOA:
this.lbTideBet.string = t;
break;

case cc.LongHoBetSide_789.HO:
this.lbTigerBet.string = t;
}
},
setBetSide: function(e, t) {
this.betSide = parseInt(t);
cc.AudioController.getInstance().playSound(cc.LongHoAudioTypes_789.BET);
if (lngui.UserManager.instance.mainUserInfo.Money < this.balanceBet) cc.PopupController.getInstance().showMessage("Số dư không đủ"); else {
cc.LongHoController_789.getInstance().sendRequestOnHub(cc.MethodHubName.BET, this.balanceBet, this.betSide);
this.disableBetAgain(!0);
}
},
sendRequestBet: function(e, t) {
return cc.LongHoController_789.getInstance().sendRequestOnHub(cc.MethodHubName.BET, e, t);
},
onBetAgain: function(e, t) {
var i = this;
t = parseInt(t);
var o = cc.LongHoController_789.getInstance().getBetLogBySessionID(cc.LongHoController_789.getInstance().getBetLogSession());
if (0 !== o.length) {
for (var n = function(e) {
o.map(function(t, o) {
var n = setTimeout(function() {
if (cc.LongHoController_789.getInstance().getCurrentState() === cc.LongHoState_789.BETTING && t.sessionID === cc.LongHoController_789.getInstance().getBetLogSession() - 1) this.sendRequestBet(t.value, t.betSide); else try {
clearTimeout(n);
} catch (e) {
console.log(e);
}
}.bind(i), 120 * o * e);
}, i);
}, s = 1; s <= t; s++) n(s);
this.disableBetAgain(!0);
} else lngui.UITextManager.showCenterNotification("Chưa có dữ liệu của phiên trước.");
},
disableBetAgain: function(e) {
this.btnBetAgain.interactable = !e;
this.btnBetX2.interactable = !e;
var t = cc.Color.WHITE;
e && (t = cc.Color.GRAY);
this.nodeBetX2.color = t;
this.nodeBetAgain.color = t;
},
getBetSide: function() {
return this.betSide;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoButtonBet": [ function(e, t) {
"use strict";
cc._RF.push(t, "3f1a3xSz3FPSYsI0hrQBrrk", "789.LongHoButtonBet");
(function() {
cc.LongHoButtonBet_789 = cc.Class({
extends: cc.Component,
properties: {
spriteButtons: [ cc.SpriteFrame ]
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoButtonSideBet": [ function(e, t) {
"use strict";
cc._RF.push(t, "c6c3a4tVGlARr/hOMuVjkP3", "789.LongHoButtonSideBet");
(function() {
cc.LongHoButtonSideBet_789 = cc.Class({
extends: cc.Component,
properties: {
btnNodeRong: cc.Node,
btnNodeHoa: cc.Node,
btnNodeHo: cc.Node
},
onLoad: function() {
cc.LongHoController_789.getInstance().buttonSideBet = this;
},
enableButtonBet: function(e) {
this.commonActive(this.btnNodeRong, e);
this.commonActive(this.btnNodeHoa, e);
this.commonActive(this.btnNodeHo, e);
},
commonActive: function(e, t) {
e.getComponent(cc.Button).interactable = t;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoCardSlide": [ function(e, t) {
"use strict";
cc._RF.push(t, "b4e74e5T4RJC4/WDeLwqv4P", "789.LongHoCardSlide");
(function() {
cc.LongHoCardSlide_789 = cc.Class({
extends: cc.Component,
properties: {
skeletonBox: sp.Skeleton,
skeletonBurn: sp.Skeleton
},
onLoad: function() {
cc.LongHoController_789.getInstance().dragonTigerCardSlide = this;
},
playBoxAnimation: function(e) {
e;
this.skeletonBox.clearTracks();
this.skeletonBox.setAnimation(0, e, !1);
},
playBurnAnimation: function(e) {
var t = 0;
switch (e) {
case "down":
t = 0;
break;

case "empty":
t = 1;
break;

case "up1":
t = 2;
break;

case "up2":
t = 3;
break;

case "up3":
t = 4;
break;

case "up4":
t = 5;
break;

case "up5":
t = 6;
break;

case "up6":
t = 7;
break;

case "up7":
t = 8;
break;

case "up8":
t = 9;
break;

case "up9":
t = 10;
}
this.skeletonBurn.clearTracks();
this.skeletonBurn.setAnimation(t, e, !1);
},
burnStopAnimation: function() {
this.skeletonBurn.clearTracks();
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoChatItem": [ function(e, t) {
"use strict";
cc._RF.push(t, "ff97fZM2iNHNpewBv6kMQkZ", "789.LongHoChatItem");
(function() {
cc.LongHoChatItem_789 = cc.Class({
extends: cc.Component,
properties: {
nodeUser: cc.Node,
lbSID: cc.Label,
lbName: cc.Label,
lbMessage: cc.Label,
rtAdmin: cc.RichText
},
updateItem: function(e, t) {
if (e.ad) {
this.rtAdmin.node.active = !0;
this.nodeUser.active = !1;
this.rtAdmin.string = this.formatChatUser(e);
} else {
this.nodeUser.active = !0;
this.rtAdmin.node.active = !1;
this.lbSID.string = cc.Config.getInstance().getServiceNameNoFormat(e.s);
this.lbName.string = e.n + ":";
this.lbMessage.string = e.c;
}
this.item = e;
this.itemID = t;
},
formatChatUser: function(e) {
var t = cc.Config.getInstance().getServiceName(e.s.toString());
return e.ad ? "<color=#ff6186>" + e.n + ": </color>" + e.c : t + "<color=#fadb32>" + e.n + ": </color>" + e.c;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoController": [ function(e, t) {
"use strict";
cc._RF.push(t, "db315lfeTNH9bSp4uCRRbyE", "789.LongHoController");
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
t.prototype.setDragonTigerView = function(e) {
return this.dragonTigerView = e;
};
t.prototype.setDragonTigerResultView = function(e) {
return this.dragonTigerResultView = e;
};
t.prototype.setDragonTigerResultEffectView = function(e) {
return this.dragonTigerResultEffectView = e;
};
t.prototype.setDragonTigerBetView = function(e) {
return this.dragonTigerBetView = e;
};
t.prototype.setDragonTigerSessionHistoryView = function(e) {
return this.dragonTigerSessionHistoryView = e;
};
t.prototype.setDragonTigerEventView = function(e) {
return this.dragonTigerEventView = e;
};
t.prototype.updateGameHistoryUI = function(e) {
if (this.dragonTigerSessionHistoryView) return this.dragonTigerSessionHistoryView.updateGameHistoryUI(e);
};
t.prototype.reset = function() {
try {
this.dragonTigerView.reset();
this.dragonTigerBetView.reset();
this.dragonTigerResultEffectView.reset();
} catch (e) {
console.log(e);
}
};
t.prototype.stopResultEffect = function() {
return this.dragonTigerResultEffectView.stopEffect();
};
t.prototype.resetBetAndResultInfo = function() {
this.dragonTigerResultEffectView && this.dragonTigerResultEffectView.reset();
this.dragonTigerResultView && this.dragonTigerResultView.reset();
this.dragonTigerBetView && this.dragonTigerBetView.reset();
};
t.prototype.resetBetInfo = function() {
this.dragonTigerBetView && this.dragonTigerBetView.reset();
};
t.prototype.disableBetAgain = function(e) {
return this.dragonTigerBetView.disableBetAgain(e);
};
t.prototype.sendRequestOnHub = function(e, t, i) {
if (this.dragonTigerView) return this.dragonTigerView.sendRequestOnHub(e, t, i);
};
t.prototype.updateBetInfoFromServer = function(e) {
return this.dragonTigerBetView.updateBetInfoFromServer(e);
};
t.prototype.updateTotalBetValue = function(e, t) {
return this.dragonTigerBetView.updateTotalBetValue(e, t);
};
t.prototype.updateSessionHistory = function(e) {
if (this.dragonTigerSessionHistoryView) return this.dragonTigerSessionHistoryView.updateSessionHistory(e);
};
t.prototype.playEffectWin = function(e) {
if (this.dragonTigerResultEffectView) return this.dragonTigerResultEffectView.playEffectWin(e);
};
t.prototype.updateBetInfoView = function(e) {
if (this.dragonTigerBetView) return this.dragonTigerBetView.updateBetInfo(e);
};
t.prototype.getBetSide = function() {
if (this.dragonTigerBetView) return this.dragonTigerBetView.getBetSide();
};
t.prototype.setInfoView = function(e) {
return this.infoView = e;
};
t.prototype.playerShowBubbleChat = function(e) {
return this.infoView.playerShowBubbleChat(e);
};
t.prototype.updatePlayerInfor = function(e) {
return this.infoView.updatePlayerInfor(e);
};
t.prototype.winResult = function(e) {
return this.infoView.winResult(e);
};
t.prototype.winResultVip = function(e) {
return this.infoView.winResultVip(e);
};
t.prototype.updateBalanceCurrPlayer = function(e) {
return this.infoView.updateBalanceCurrPlayer(e);
};
t.prototype.updatePlayerBalance = function(e) {
return this.infoView.updatePlayerBalance(e);
};
t.prototype.unRegisterAllPlayer = function() {
return this.infoView.unRegisterAllPlayer();
};
t.prototype.updatePlayersUI = function(e) {
return this.infoView.updatePlayersUI(e);
};
t.prototype.resetPlayerUI = function() {
return this.infoView.resetPlayerUI();
};
t.prototype.updatePositionPlayerUI = function(e) {
return this.positionUI = e;
};
t.prototype.getPositionUI = function() {
return this.positionUI;
};
t.prototype.setWinResult = function(e) {
return this.positionUI = e;
};
t.prototype.getWinResult = function() {
return this.positionUI;
};
t.prototype.updateResultView = function(e) {
if (this.dragonTigerResultView) return this.dragonTigerResultView.updateResult(e);
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
t.prototype.getSessionId = function() {
return this.sessionId;
};
t.prototype.setDetailIndex = function(e) {
return this.detailIndex = e;
};
t.prototype.getDetailIndex = function() {
return this.detailIndex;
};
t.prototype.setGameHistory = function(e) {
return this.gameHistory = e;
};
t.prototype.getGameHistory = function() {
return this.gameHistory;
};
t.prototype.setSID = function(e) {
return this.sID = e;
};
t.prototype.getSID = function() {
return this.sID;
};
return t;
}();
cc.LongHoController_789 = e;
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoGetBigWinnerCommand": [ function(e, t) {
"use strict";
cc._RF.push(t, "5d18ejntKxIm4LGjgxb/TzJ", "789.LongHoGetBigWinnerCommand");
(function() {
var e;
e = function() {
function e() {}
e.prototype.execute = function(e) {
return cc.ServerConnector.getInstance().sendRequest(cc.SubdomainName.DRAGON_TIGER, "api/Game/GetBigWinner", function(t) {
var i = JSON.parse(t);
return e.onDragonTigerGetBigWinnerResponse(i);
});
};
return e;
}();
cc.LongHoGetBigWinnerCommand_789 = e;
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoGetHistoryCommand": [ function(e, t) {
"use strict";
cc._RF.push(t, "d9820ue1WxJwbEXakbWzUsT", "789.LongHoGetHistoryCommand");
(function() {
var e;
e = function() {
function e() {}
e.prototype.execute = function(e) {
return cc.ServerConnector.getInstance().sendRequest(cc.SubdomainName.DRAGON_TIGER, "api/Game/GetHistory", function(t) {
var i = JSON.parse(t);
return e.onDragonTigerGetHistoryResponse(i);
});
};
return e;
}();
cc.LongHoGetHistoryCommand_789 = e;
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoGetSessionInfoCommand": [ function(e, t) {
"use strict";
cc._RF.push(t, "bc3a1wLbQ1PppM0zt4Sn1Wd", "789.LongHoGetSessionInfoCommand");
(function() {
var e;
e = function() {
function e() {}
e.prototype.execute = function(e, t) {
var i = "api/Game/GetSessionInfo?sessionId=" + t;
return cc.ServerConnector.getInstance().sendRequest(cc.SubdomainName.DRAGON_TIGER, i, function(t) {
var i = JSON.parse(t);
return e.onDragonTigerGetSessionInfoResponse(i);
});
};
return e;
}();
cc.DragonTigerGetSessionInfoCommand_789 = e;
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoGetSoiCauCommand": [ function(e, t) {
"use strict";
cc._RF.push(t, "e5d61IBzXpJXYDon3F/O5a/", "789.LongHoGetSoiCauCommand");
(function() {
var e;
e = function() {
function e() {}
e.prototype.execute = function(e) {
return cc.ServerConnector.getInstance().sendRequest(cc.SubdomainName.DRAGON_TIGER, "api/Game/GetSoiCau", function(t) {
var i = JSON.parse(t);
return e.onDragonTigerGetSoiCauResponse(i);
});
};
return e;
}();
cc.LongHoGetSoiCauCommand_789 = e;
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoGraph100View": [ function(e, t) {
"use strict";
cc._RF.push(t, "55d983fBL9Nu72/VQrI1wVr", "789.LongHoGraph100View");
(function() {
cc.LongHoGraph100View_789 = cc.Class({
extends: cc.Component,
properties: {
nodeParent: cc.Node,
nodeRongTemp: cc.Node,
nodeHoaTemp: cc.Node,
nodeHoTemp: cc.Node
},
draw: function(e) {
var t = 0, i = 0, o = 0, n = this;
e.forEach(function(e) {
switch (e.Result) {
case cc.LongHoBetSide_789.RONG:
t++;
n.createNode(n.nodeRongTemp);
break;

case cc.LongHoBetSide_789.HOA:
i++;
n.createNode(n.nodeHoaTemp);
break;

case cc.LongHoBetSide_789.HO:
o++;
n.createNode(n.nodeHoTemp);
}
});
return {
rong: t,
hoa: i,
ho: o
};
},
createNode: function(e) {
cc.instantiate(e).parent = this.nodeParent;
},
resetDraw: function() {
for (var e = this.nodeParent.children, t = e.length - 1; t >= 0; t--) this.nodeParent.removeChild(e[t]);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoGraphCard3View": [ function(e, t) {
"use strict";
cc._RF.push(t, "a5fbfiZ+p1IKYtubhHzK8jT", "789.LongHoGraphCard3View");
(function() {
cc.LongHoGraphCard3View_789 = cc.Class({
extends: cc.Component,
properties: {
nodeGraphics1: cc.Node,
nodeGraphics2: cc.Node,
nodeGraphics3: cc.Node,
toggleRong: cc.Toggle,
toggleHo: cc.Toggle,
colorRong: cc.Color,
colorHo: cc.Color,
colorHoa: cc.Color,
lbSessionID: cc.Label,
lbResult: cc.Label
},
onLoad: function() {
this.rootPosX = -42;
this.rootPosY = -240;
this.spaceX = 40;
this.spaceY = 40;
this.listPosY = [];
for (var e = 0; e <= 12; e++) {
var t = this.rootPosY + e * this.spaceY;
this.listPosY.push(t);
}
console.log(this.listPosY);
this.maxItemPerCol = 5;
this.minSum = 1;
this.maxSum = 13;
this.circleRadian = 12;
this.drawing1 = this.nodeGraphics1.getComponent(cc.Graphics);
this.drawing1.lineWidth = 2;
this.drawing1.strokeColor = this.colorRong;
this.drawing1.fillColor = this.colorRong;
this.drawing3 = this.nodeGraphics3.getComponent(cc.Graphics);
this.drawing3.lineWidth = 2;
this.drawing3.strokeColor = this.colorHo;
this.drawing3.fillColor = this.colorHo;
},
draw: function(e) {
var t = e[0], i = "";
switch (t.Result) {
case cc.LongHoBetSide_789.RONG:
i = "RỒNG";
break;

case cc.LongHoBetSide_789.HOA:
this.lbResult.node.color = cc.Color.CYAN;
i = "HÒA";
break;

case cc.LongHoBetSide_789.HO:
this.lbResult.node.color = cc.Color.RED;
i = "HỔ";
}
this.lbSessionID.string = "Phiên gần nhất (#" + t.SessionID + ")";
this.lbResult.string = i;
this.cacheList = e;
this.drawRong(e);
this.drawHo(e);
},
drawRong: function(e) {
var t = this;
t.drawPoints = [];
var i = 0;
e.forEach(function(e) {
t.createNode(t.drawing1, e, i, cc.LongHoBetSide_789.RONG);
i++;
});
this.strokeLine(t.drawing1);
},
drawHo: function(e) {
var t = this;
t.drawPoints = [];
var i = 0;
e.forEach(function(e) {
t.createNode(t.drawing3, e, i, cc.LongHoBetSide_789.HO);
i++;
});
t.strokeLine(t.drawing3);
},
createNode: function(e, t, i, o) {
var n = this.rootPosX - i * this.spaceX, s = this.colorRong, a = t.DragonCard;
if (o == cc.LongHoBetSide_789.HO) {
a = t.TigerCard;
s = this.colorHo;
}
t.Result == cc.LongHoBetSide_789.HOA && (s = this.colorHoa);
var c = parseInt(a) % 13;
c = 0 == c ? 13 : c;
var r = this.listPosY[c - 1];
this.drawPoints.push([ cc.v2(n, r), s ]);
},
strokeLine: function(e) {
var t = this;
this.drawPoints.forEach(function(i) {
var o = i[0], n = i[1];
e.lineTo(o.x, o.y);
e.stroke();
e.moveTo(o.x, o.y);
e.circle(o.x, o.y, t.circleRadian);
e.fillColor = n;
e.strokeColor = n;
e.fill();
});
},
resetDraw: function() {
this.drawing1.clear();
this.drawing3.clear();
},
toggleDrawClicked: function() {},
toggleDrawRongClicked: function() {
this.toggleRong.isChecked ? this.drawRong(this.cacheList) : this.drawing1.clear();
},
toggleDrawHoClicked: function() {
this.toggleHo.isChecked ? this.drawHo(this.cacheList) : this.drawing3.clear();
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoGraphCatCauView": [ function(e, t) {
"use strict";
cc._RF.push(t, "ed7d888sANEc4mxRl0ykhIz", "789.LongHoGraphCatCauView");
(function() {
cc.LongHoGraphCatCauView_789 = cc.Class({
extends: cc.Component,
properties: {
nodeParent: cc.Node,
nodeRongTemp: cc.Node,
nodeHoaTemp: cc.Node,
nodeHoTemp: cc.Node
},
onLoad: function() {
this.rootPosX = -21;
this.rootPosY = -100;
this.spaceX = 40;
this.spaceY = 40;
this.maxItemPerCol = 6;
},
convertToMatrix: function(e) {
var t = this, i = e[0].Result, o = [], n = [];
e.forEach(function(e) {
if (n.length === t.maxItemPerCol) {
o.push(n);
(n = []).push(e);
i = e.Result;
} else if (e.Result === i) n.push(e); else {
o.push(n);
n = [];
i = e.Result;
n.push(e);
}
});
o.push(n);
return o;
},
draw: function(e) {
for (var t = this.convertToMatrix(e), i = 0; i < t.length; i++) this.drawCol(t[i], i);
this.nodeParent.width = Math.max(40 * t.length, 242);
},
drawCol: function(e, t) {
for (var i = this.rootPosX - t * this.spaceX, o = (this.maxItemPerCol - e.length) * this.spaceY + this.rootPosY, n = 0; n < e.length; n++) this.createNode(e[n], cc.v2(i, o + this.spaceY * n));
},
createNode: function(e, t) {
switch (e.Result) {
case cc.LongHoBetSide_789.RONG:
var i = cc.instantiate(this.nodeRongTemp);
break;

case cc.LongHoBetSide_789.HOA:
i = cc.instantiate(this.nodeHoaTemp);
break;

case cc.LongHoBetSide_789.HO:
i = cc.instantiate(this.nodeHoTemp);
}
if (i) {
i.parent = this.nodeParent;
i.position = t;
}
},
resetDraw: function() {
for (var e = this.nodeParent.children, t = e.length - 1; t >= 0; t--) this.nodeParent.removeChild(e[t]);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoGraphSumView": [ function(e, t) {
"use strict";
cc._RF.push(t, "78398VA7VZKuJuW+Meu8U61", "789.LongHoGraphSumView");
(function() {
cc.LongHoGraphSumView_789 = cc.Class({
extends: cc.Component,
properties: {
nodeGraphics: cc.Node,
nodeParent: cc.Node,
nodeTaiTemp: cc.Node,
nodeXiuTemp: cc.Node,
toggleDiceSum: cc.Toggle,
lbSessionID: cc.Label,
lbResult: cc.Label
},
onLoad: function() {
this.rootPosX = -22;
this.rootPosY = -81;
this.spaceX = 40;
this.spaceY = 40;
this.maxItemPerCol = 5;
this.minSum = 3;
this.maxSum = 18;
this.spacePoint = this.spaceY * this.maxItemPerCol / (this.maxSum - this.minSum);
this.drawing = this.nodeGraphics.getComponent(cc.Graphics);
this.drawing.lineWidth = 2;
this.drawing.strokeColor = cc.Color.WHITE;
},
draw: function(e) {
var t = e[0];
switch (t.Result) {
case cc.LongHoBetSide_789.RONG:
case cc.LongHoBetSide_789.HOA:
break;

case cc.LongHoBetSide_789.HO:
}
this.lbSessionID.string = "Phiên gần nhất (#" + t.SessionId + ") - ";
this.cacheList = e;
this.drawPoints = [];
var i = this, o = 0;
e.forEach(function(e) {
i.createNode(e, o);
o++;
});
this.strokeLine();
},
createNode: function(e, t) {
var i = this.rootPosX - t * this.spaceX, o = this.rootPosY + (e.DiceSum - this.minSum) * this.spacePoint;
0 === t && this.drawing.moveTo(i, o);
if (e.BetSide === cc.LongHoBetSide_789.TAI) var n = cc.instantiate(this.nodeTaiTemp); else n = cc.instantiate(this.nodeXiuTemp);
n.parent = this.nodeParent;
n.position = cc.v2(i, o);
this.drawPoints.push(cc.v2(i, o));
},
strokeLine: function() {
var e = this;
this.drawPoints.forEach(function(t) {
e.drawing.lineTo(t.x, t.y);
e.drawing.stroke();
e.drawing.moveTo(t.x, t.y);
});
},
resetDraw: function() {
for (var e = this.nodeParent.children, t = e.length - 1; t >= 0; t--) this.nodeParent.removeChild(e[t]);
this.drawing.clear();
},
toggleDrawDiceSumClicked: function() {
this.toggleDiceSum.isChecked ? this.draw(this.cacheList) : this.resetDraw();
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoGraphView": [ function(e, t) {
"use strict";
cc._RF.push(t, "b03d0rKvcJDnZ20gLeHNmwj", "789.LongHoGraphView");
(function() {
cc.LongHoGraphView_789 = cc.Class({
extends: cc.Component,
properties: {
dragonTigerGraph100View: cc.LongHoGraph100View_789,
dragonTigerGraphCatCauView: cc.LongHoGraphCatCauView_789,
dragonTigerGraphCardSumView: cc.LongHoGraphSumView_789,
dragonTigerGraphCard3View: cc.LongHoGraphCard3View_789,
pageView: cc.PageView,
btnNext: cc.Button,
btnBack: cc.Button,
lbTotalRong: cc.Label,
lbTotalHoa: cc.Label,
lbTotalHo: cc.Label
},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
this.timeSwitchPage = .3;
this.totalPages = 2;
this.currentPageIndex = this.pageView.getCurrentPageIndex();
this.checkStatusButton();
this.node.zIndex = 99;
},
onEnable: function() {
var e = this;
cc.director.getScheduler().schedule(function() {
e.getSoiCau();
}, this, 1, 0, .2, !1);
this.animation.play("openPopup");
},
getSoiCau: function() {
new cc.LongHoGetSoiCauCommand_789().execute(this);
},
onDragonTigerGetSoiCauResponse: function(e) {
var t = this.dragonTigerGraph100View.draw(e);
this.lbTotalRong.string = t.rong;
this.lbTotalHoa.string = t.hoa;
this.lbTotalHo.string = t.ho;
this.dragonTigerGraphCatCauView.draw(e);
},
pageEvent: function() {
this.checkStatusButton();
},
closeClicked: function() {
this.dragonTigerGraph100View.resetDraw();
this.dragonTigerGraphCatCauView.resetDraw();
this.animation.play("closePopup");
var e = this;
cc.director.getScheduler().schedule(function() {
e.animation.stop();
cc.LongHoPopupController_789.getInstance().destroyGraphView();
}, this, 1, 0, .12, !1);
},
nextPageClicked: function() {
this.currentPageIndex++;
this.pageView.scrollToPage(this.currentPageIndex, this.timeSwitchPage);
this.checkStatusButton();
},
backPageClicked: function() {
this.currentPageIndex--;
this.pageView.scrollToPage(this.currentPageIndex, this.timeSwitchPage);
this.checkStatusButton();
},
checkStatusButton: function() {
this.currentPageIndex = this.pageView.getCurrentPageIndex();
this.currentPageIndex < this.totalPages - 1 ? this.btnNext.interactable = !0 : this.btnNext.interactable = !1;
this.currentPageIndex > 0 ? this.btnBack.interactable = !0 : this.btnBack.interactable = !1;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoGroupItem": [ function(e, t) {
"use strict";
cc._RF.push(t, "7c88f8NbAlM0YclwKft1nXs", "789.LongHoGroupItem");
(function() {
cc.LongHoGroupItem_789 = cc.Class({
extends: cc.Component,
properties: {
avatar: cc.Avatar,
lbNickName: cc.Label,
lbBalance: cc.Label
},
updateItem: function(e, t) {
var i = e.Account, o = i.Avatar;
o <= 0 && (o = 1);
this.avatar.setAvatar(cc.AccountController.getInstance().getAvatarImage(o));
this.lbNickName.string = i.NickName;
this.lbBalance.string = cc.Tool.getInstance().formatNumber(i.Balance);
this.item = e;
this.itemID = t;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoGroupUserCommand": [ function(e, t) {
"use strict";
cc._RF.push(t, "8c8d4CVYm1DDrl+JRwT17ry", "789.LongHoGroupUserCommand");
(function() {
var e;
e = function() {
function e() {}
e.prototype.execute = function(e) {
var t = cc.SubdomainName.DRAGON_TIGER;
return cc.ServerConnector.getInstance().sendRequest(t, "api/Game/GetPlayersNotInGame", function(t) {
var i = JSON.parse(t);
return e.onGetGroupUserResponse(i);
});
};
return e;
}();
cc.LongHoGroupUserCommand_789 = e;
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoGroupUserListView": [ function(e, t) {
"use strict";
cc._RF.push(t, "2cf1fv8F+FImIG2Wv931vrU", "789.LongHoGroupUserListView");
(function() {
cc.LongHoGroupUserListView_789 = cc.Class({
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
for (var i = Math.min(this.spawnCount, t), o = 0; o < i; ++o) {
var n = cc.instantiate(this.itemTemplate);
this.content.addChild(n);
n.setPosition(0, -n.height * (.5 + o) - this.spacing * (o + 1));
n.getComponent(cc.LongHoGroupItem_789).updateItem(this.messages[o], o);
this.items.push(n);
}
this.rootContentY = this.content.y;
},
update: function(e) {
this.updateTimer += e;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var t = this.items, i = this.bufferZone, o = this.scrollView.content.y < this.lastContentPosY, n = (this.itemTemplate.height + this.spacing) * t.length, s = 0; s < t.length; ++s) {
var a = this.getPositionInView(t[s]);
if (o) {
if (a.y < -i && t[s].y + n < 0) {
t[s].y = t[s].y + n;
var c = t[s].getComponent(cc.LongHoGroupItem_789), r = c.itemID - t.length;
c.updateItem(this.messages[r], r);
}
} else if (a.y > i && t[s].y - n > -this.content.height) {
t[s].y = t[s].y - n;
r = (c = t[s].getComponent(cc.LongHoGroupItem_789)).itemID + t.length;
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
"789.LongHoGroupUserView": [ function(e, t) {
"use strict";
cc._RF.push(t, "f2cfe05PpBBq61DZjj1dAov", "789.LongHoGroupUserView");
(function() {
cc.LongHoGroupUserView_789 = cc.Class({
extends: cc.Component,
properties: {
groupUserListView: cc.LongHoGroupUserListView_789
},
onLoad: function() {
this.node.zIndex = 99;
},
onEnable: function() {
var e = this;
cc.director.getScheduler().schedule(function() {
e.getGroupUser();
}, this, 1, 0, .2, !1);
},
getGroupUser: function() {
new cc.LongHoGroupUserCommand_789().execute(this);
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
cc.LongHoPopupController_789.getInstance().destroyGroupUserView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoHelpView": [ function(e, t) {
"use strict";
cc._RF.push(t, "968bfjQXb9DO6rE6SBCtWlt", "789.LongHoHelpView");
(function() {
cc.LongHoHelpView_789 = cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
closeFinished: function() {
cc.LongHoPopupController_789.getInstance().destroyHelpView();
},
onEnable: function() {},
closeClicked: function() {
var e = this;
cc.director.getScheduler().schedule(function() {
e.closeFinished();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoHistoryItem": [ function(e, t) {
"use strict";
cc._RF.push(t, "103ab+yrIZLfL8V8X2dOXm5", "789.LongHoHistoryItem");
(function() {
cc.LongHoHistoryItem_789 = cc.Class({
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
updateItem: function(e, t) {
this.lbSession.string = "#" + e.SessionID;
this.lbTime.string = cc.Tool.getInstance().convertUTCTime(e.CreateTime);
var i = "";
switch (e.BetSide) {
case cc.LongHoBetSide_789.RONG:
i = "RỒNG";
break;

case cc.LongHoBetSide_789.HOA:
i = "HÒA";
break;

case cc.LongHoBetSide_789.HO:
i = "HỔ";
}
this.lbSide.string = i;
var o = "";
switch (e.Result) {
case cc.LongHoBetSide_789.RONG:
o = "RỒNG";
break;

case cc.LongHoBetSide_789.HOA:
o = "HÒA";
break;

case cc.LongHoBetSide_789.HO:
o = "HỔ";
break;

default:
o = "";
}
this.lbBet.string = cc.Tool.getInstance().formatNumber(e.Bet);
this.lbResult.string = o;
this.lbRefund.string = cc.Tool.getInstance().formatNumber(e.Refund);
this.lbWin.string = cc.Tool.getInstance().formatNumber(e.Award);
this.item = e;
this.itemID = t;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoHistoryListView": [ function(e, t) {
"use strict";
cc._RF.push(t, "ee70bvBMEdDHrJ34PmVInWe", "789.LongHoHistoryListView");
(function() {
cc.LongHoHistoryListView_789 = cc.Class({
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
initialize: function(e) {
this.messages = e;
var t = this.messages.length;
this.content.height = t * (this.itemTemplate.height + this.spacing) + this.spacing;
for (var i = Math.min(this.spawnCount, t), o = 0; o < i; ++o) {
var n = cc.instantiate(this.itemTemplate);
this.content.addChild(n);
n.setPosition(0, -n.height * (.5 + o) - this.spacing * (o + 1));
n.getComponent(cc.LongHoHistoryItem_789).updateItem(this.messages[o], o);
this.items.push(n);
}
this.rootContentY = this.content.y;
},
update: function(e) {
this.updateTimer += e;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var t = this.items, i = this.bufferZone, o = this.scrollView.content.y < this.lastContentPosY, n = (this.itemTemplate.height + this.spacing) * t.length, s = 0; s < t.length; ++s) {
var a = this.getPositionInView(t[s]);
if (o) {
if (a.y < -i && t[s].y + n < 0) {
t[s].y = t[s].y + n;
var c = t[s].getComponent(cc.LongHoHistoryItem_789), r = c.itemID - t.length;
c.updateItem(this.messages[r], r);
}
} else if (a.y > i && t[s].y - n > -this.content.height) {
t[s].y = t[s].y - n;
r = (c = t[s].getComponent(cc.LongHoHistoryItem_789)).itemID + t.length;
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
"789.LongHoHistoryView": [ function(e, t) {
"use strict";
cc._RF.push(t, "70a5fNcDRhDiqE2DiE1JEun", "789.LongHoHistoryView");
(function() {
cc.LongHoHistoryView_789 = cc.Class({
extends: cc.Component,
properties: {
dragonTigerHistoryListView: cc.LongHoHistoryListView_789
},
onLoad: function() {
this.node.zIndex = 99;
},
onEnable: function() {
var e = this;
cc.director.getScheduler().schedule(function() {
e.getTopSessionWinners();
}, this, 1, 0, .2, !1);
},
getTopSessionWinners: function() {
new cc.LongHoGetHistoryCommand_789().execute(this);
},
onDragonTigerGetHistoryResponse: function(e) {
var t = e;
if (null !== t && t.length > 0) {
this.dragonTigerHistoryListView.resetList();
this.dragonTigerHistoryListView.initialize(t);
}
},
closeClicked: function() {
this.dragonTigerHistoryListView.resetList();
cc.director.getScheduler().schedule(function() {
cc.LongHoPopupController_789.getInstance().destroyHistoryView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoInfoView": [ function(e, t) {
"use strict";
cc._RF.push(t, "3f117Z5DAVFwblsCVtx8eDO", "789.LongHoInfoView");
(function() {
cc.LongHoInfoView_789 = cc.Class({
extends: cc.Component,
properties: {
lstPlayers: [ cc.LongHoPlayer_789 ]
},
onLoad: function() {
cc.LongHoController_789.getInstance().setInfoView(this);
this.interval = null;
this.time = 0;
this.currPlayer = this.lstPlayers[0];
this.currPlayer.showPlayer(!0);
},
onDestroy: function() {
try {
this.interval && clearInterval(this.interval);
} catch (e) {}
},
resetPlayerUI: function() {
this.lstPlayers.map(function(e) {
e.resetPlayerResultUI();
}, this);
},
unRegisterAllPlayer: function() {
this.lstPlayers.map(function(e) {
return e.unRegisterPlayer();
});
},
updatePlayerInfor: function(e) {
this.currPlayer.registerPlayer(e.Account);
},
updatePlayersUI: function(e) {
var t = this, i = 0;
this.positionsUI = [ 0, 0, 0, 0, 0, 0, 0 ];
this.positionsUI[0] = cc.LoginController.getInstance().getUserId();
i++;
e.map(function(e) {
if (e.AccountID != cc.LoginController.getInstance().getUserId() && i <= 6) {
t.positionsUI[i] = e.AccountID;
i++;
}
}, this);
this.positionsUI.forEach(function(t, i) {
if (0 != t) try {
var o = e.filter(function(e) {
return e.AccountID == t;
});
this.lstPlayers[i].showPlayer(!0);
if (o.length > 0 && 0 != i) {
this.lstPlayers[i].registerPlayer(o[0].Account);
this.lstPlayers[i].resetPlayerResultUI();
}
} catch (e) {
console.log(e);
} else {
this.lstPlayers[i].unRegisterPlayer();
this.lstPlayers[i].showPlayer(!1);
}
}, this);
cc.LongHoController_789.getInstance().updatePositionPlayerUI(this.positionsUI);
},
updateBalanceCurrPlayer: function(e) {
this.currPlayer.updateChipNormal(e);
},
updatePlayerBalance: function(e) {
if (this.positionsUI) {
var t = this.positionsUI.indexOf(e[2]);
-1 != t && this.lstPlayers[t].updateChip(e[3]);
}
},
winResult: function(e) {
this.currPlayer.playerResultUI(e.Award, e.Balance);
},
winResultVip: function(e) {
var t = this;
e.map(function(e) {
if (t.positionsUI && t.positionsUI.includes(e.AccountID) && e.AccountID != cc.LoginController.getInstance().getUserId()) {
var i = t.positionsUI.indexOf(e.AccountID);
-1 != i && t.lstPlayers[i].playerResultUI(e.Award, e.Balance);
}
}, this);
},
playerShowBubbleChat: function(e) {
0 == e[4] && e[3] != cc.LoginController.getInstance().getUserId() || (cc.ChatRoomController.getInstance().checkIsEmotion(e) ? this.lstPlayers.forEach(function(t) {
var i = t.nickName;
e[0] === i && t.showEmotion(cc.ChatRoomController.getInstance().getIndexEmotion(e), e);
}) : this.lstPlayers.forEach(function(t) {
var i = t.nickName;
e[0] === i && t.showBubbleChat(e);
}));
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoMoveChip": [ function(e, t) {
"use strict";
cc._RF.push(t, "2ec73WsFrNN8J9vqR2WvUUf", "789.LongHoMoveChip");
(function() {
cc.LongHoMoveChip_789 = cc.Class({
extends: cc.Component,
properties: {
prefabsChip: [ cc.Prefab ],
nodeChipsRong: cc.Node,
nodeChipsHoa: cc.Node,
nodeChipsHo: cc.Node,
nodeChipsStartMove: cc.Node,
lstPosChip: [ cc.Node ],
nodePosGroupUser: cc.Node,
lstPosPlayer: [ cc.Node ],
posNodeDealer: cc.Node
},
onLoad: function() {
var e = this;
cc.LongHoController_789.getInstance().moveChipView = this;
this.lstPosPlayerUI = [];
this.lstPosPlayer.map(function(t) {
e.lstPosPlayerUI.push(t.position);
}, this);
this.listChips = [];
this.listChipsRong = [];
this.listChipHo = [];
this.listChipHoa = [];
this.listChipReward = [];
this.listChipOfUser = [];
this.listMap = {
100: 0,
1e3: 1,
2e3: 2,
3e3: 3,
5e3: 4,
1e4: 5,
5e4: 6,
1e5: 7,
2e5: 8,
5e5: 9,
1e6: 10
};
this.listPos = {
100: this.lstPosChip[0].position.x,
1e3: this.lstPosChip[0].position.x,
2e3: this.lstPosChip[0].position.x,
3e3: this.lstPosChip[0].position.x,
5e3: this.lstPosChip[1].position.x,
1e4: this.lstPosChip[2].position.x,
5e4: this.lstPosChip[3].position.x,
1e5: this.lstPosChip[4].position.x,
2e5: this.lstPosChip[4].position.x,
5e5: this.lstPosChip[5].position.x,
1e6: this.lstPosChip[6].position.x
};
this.listPools = [];
Object.keys(this.listPos).map(function(t) {
e.listPools[t] = new cc.NodePool();
for (var i = 0; i <= 10; i++) {
var o = e.listMap[t], n = cc.instantiate(e.prefabsChip[o]);
e.listPools[t].put(n);
}
}, this);
this.posDealer = this.posNodeDealer.position;
this.posTotalUser = this.nodePosGroupUser.position;
},
createListChipOfUser: function(e) {
this.listChipOfUser = [];
var t = this;
e.length > 0 && e.map(function(e) {
var i = e.BetSide, o = t.createChip(e.BetValue);
t.listChipOfUser.push([ o, i ]);
});
},
updateListChipOfUser: function(e, t) {
var i = this.createChip(t);
this.listChipOfUser.push([ i, e ]);
},
moveChip: function(e, t) {
var i = e[1], o = e[0], n = this.randomPosMove(i), s = this.createChip(o);
switch (i) {
case cc.LongHoBetSide_789.RONG:
this.listChipsRong.push([ s, o ]);
break;

case cc.LongHoBetSide_789.HOA:
this.listChipHoa.push([ s, o ]);
break;

case cc.LongHoBetSide_789.HO:
this.listChipHo.push([ s, o ]);
}
this.listChips.push([ s, o ]);
s.parent = this.nodeChipsStartMove.parent;
if (t) {
s.x = this.listPos[o];
s.y = -315;
} else s.position = this.posTotalUser;
this.chipMoveTo(s, n, .3);
},
moveChipWithStartPos: function(e, t) {
var i = cc.LongHoController_789.getInstance().getPositionUI(), o = -1;
try {
o = i.indexOf(e[2]);
} catch (e) {
o = -1;
}
var n = -1 != (o = t ? 0 : o) ? this.lstPosPlayerUI[o] : this.nodePosGroupUser.position, s = e[1], a = e[0], c = this.randomPosMove(s), r = this.createChip(a);
switch (s) {
case cc.LongHoBetSide_789.RONG:
this.listChipsRong.push([ r, a, n ]);
break;

case cc.LongHoBetSide_789.HOA:
this.listChipHoa.push([ r, a, n ]);
break;

case cc.LongHoBetSide_789.HO:
this.listChipHo.push([ r, a, n ]);
}
this.listChips.push([ r, a ]);
r.parent = this.nodeChipsStartMove.parent;
if (t) {
r.x = this.listPos[a];
r.y = -315;
} else r.position = n;
this.chipMoveTo(r, c, .3);
},
initChipsBet: function(e) {
var t = -1;
try {
t = cc.LongHoController_789.getInstance().getPositionUI().indexOf(e[2]);
} catch (e) {
t = -1;
}
var i = -1 != t ? this.lstPosPlayerUI[t] : this.nodePosGroupUser.position, o = e[1], n = e[0], s = this.randomPosMove(o), a = this.createChip(n);
switch (o) {
case cc.LongHoBetSide_789.RONG:
this.listChipsRong.push([ a, n, i ]);
break;

case cc.LongHoBetSide_789.HOA:
this.listChipHoa.push([ a, n, i ]);
break;

case cc.LongHoBetSide_789.HO:
this.listChipHo.push([ a, n, i ]);
}
this.listChips.push([ a, n ]);
a.parent = this.nodeChipsStartMove.parent;
a.position = s;
},
randomPosMove: function(e) {
var t = "", i = 0, o = 0;
switch (e) {
case cc.LongHoBetSide_789.RONG:
i = this.nodeChipsRong.width / 2;
o = this.nodeChipsRong.height / 2;
t = this.nodeChipsRong.position;
break;

case cc.LongHoBetSide_789.HOA:
i = this.nodeChipsHoa.width / 2;
o = this.nodeChipsHoa.height / 2;
t = this.nodeChipsHoa.position;
break;

case cc.LongHoBetSide_789.HO:
i = this.nodeChipsHo.width / 2;
o = this.nodeChipsHo.height / 2;
t = this.nodeChipsHo.position;
}
var n = -i, s = -o, a = Math.floor(Math.random() * (i - n + 1) + n), c = Math.floor(Math.random() * (o - s + 1) + s);
t.x = t.x + a;
t.y = t.y + c;
return t;
},
chipMoveTo: function(e, t, i) {
var o = cc.moveTo(i, t);
o.easing(cc.easeOut(1));
e.runAction(o);
},
chipWinAnimation: function(e, t, i) {
if ("" != e._name) {
var o = cc.moveTo(i, t), n = cc.fadeOut(2 * i);
e.runAction(cc.spawn(o, n));
}
},
chipRewardWinAnimation: function(e, t, i) {
if ("" != e._name) {
var o = cc.moveTo(i, t);
e.runAction(o);
}
},
chipMoveToSideWin: function(e) {
var t = this, i = [];
switch (e) {
case cc.LongHoBetSide_789.RONG:
i = this.listChipsRong;
break;

case cc.LongHoBetSide_789.HO:
i = this.listChipHo;
break;

case cc.LongHoBetSide_789.HOA:
i = this.listChipHoa;
}
var o = this;
i.map(function(i, n) {
var s = o.randomPosMove(e), a = o.createChip(i[1]);
a.parent = t.nodeChipsStartMove.parent;
a.position = cc.v2(-9, 153);
o.listChipReward.push([ a, i[1], i[2] ]);
o.listChips.push(a);
n = n >= 5 ? 5 : n;
setTimeout(function() {
try {
o.chipRewardWinAnimation(a, s, .5);
} catch (e) {}
}, 100 * n);
});
},
chipMoveToCurrentUser: function(e) {
for (var t = this, i = function() {
var i = t;
n = 0;
t.listChipOfUser.map(function(t) {
if (t[1] == e) {
n = ++n >= 5 ? 5 : n;
setTimeout(function() {
try {
i.chipWinAnimation(t[0], t[2], .5);
} catch (e) {}
}, 100 * n);
}
});
}, o = 0; o < 2; o++) {
var n;
i();
}
},
createChip: function(e) {
var t = null, i = this.listMap[e];
(t = this.listPools[e].size() > 0 ? this.listPools[e].get() : cc.instantiate(this.prefabsChip[i])).opacity = 255;
try {
t.setScale(cc.v2(.8, .8));
} catch (e) {
(t = cc.instantiate(this.prefabsChip[i])).setScale(cc.v2(.8, .8));
}
return t;
},
chipMoveToCoin: function(e, t) {
try {
var i = [], o = [], n = [];
switch (e) {
case cc.LongHoBetSide_789.RONG:
n = this.listChipsRong;
i = this.listChipHoa;
o = this.listChipHo;
break;

case cc.LongHoBetSide_789.HO:
n = this.listChipHo;
i = this.listChipHoa;
o = this.listChipsRong;
break;

case cc.LongHoBetSide_789.HOA:
n = this.listChipHoa;
i = this.listChipHo;
o = this.listChipsRong;
}
if (t) this.commonMoveChipResultNoPositionEnd(n); else if (e == cc.LongHoBetSide_789.HOA) try {
setTimeout(function() {
this.moveChipTie(i);
this.moveChipTie(o);
}.bind(this), 1500);
} catch (e) {} else {
this.commonMoveChipResult(i, this.posDealer);
this.commonMoveChipResult(o, this.posDealer);
}
} catch (e) {}
},
removeChips: function(e) {
var t = [];
switch (e) {
case cc.LongHoBetSide_789.RONG:
t = [].concat(this.listChipHoa, this.listChipHo);
break;

case cc.LongHoBetSide_789.HO:
t = [].concat(this.listChipHoa, this.listChipsRong);
break;

case cc.LongHoBetSide_789.HOA:
t = [].concat(this.listChipHo, this.listChipsRong);
}
t.length > 0 && t.map(function(e) {
return e[0].destroy();
});
},
commonMoveChipResult: function(e, t) {
var i = this;
(e = [].concat(e, this.listChipReward)).map(function(e, o) {
o = o >= 5 ? 5 : o;
setTimeout(function() {
try {
i.chipWinAnimation(e[0], t, .3);
} catch (e) {}
}, 100 * o);
});
},
moveChipTie: function(e) {
var t = this;
e && e.map(function(e, i) {
i = i >= 5 ? 5 : i;
setTimeout(function() {
try {
t.chipWinAnimation(e[0], e[2], .5);
} catch (e) {}
}, 100 * i);
});
},
commonMoveChipResultNoPositionEnd: function(e) {
var t = this;
(e = [].concat(e, this.listChipReward)).map(function(e, i) {
i = i >= 5 ? 5 : i;
setTimeout(function() {
try {
t.chipWinAnimation(e[0], e[2], .5);
} catch (e) {}
}, 100 * i);
});
},
clearChips: function() {
var e = this;
if (this.listChips) try {
this.listChips.map(function(t) {
if (t) {
var i = t[0], o = t[1];
o && e.listPools[o].put(i);
}
}, this);
} catch (e) {}
this.listChips = [];
this.listChipsRong = [];
this.listChipHo = [];
this.listChipHoa = [];
this.listChipReward = [];
this.listChipOfUser = [];
},
clearPools: function() {
this.listPools && (this.listPools = []);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoPlayer": [ function(e, t) {
"use strict";
cc._RF.push(t, "34b99D4v+xBwZFVaxWYRZXl", "789.LongHoPlayer");
(function() {
cc.LongHoPlayer_789 = cc.Class({
extends: cc.Component,
properties: {
lbSID: cc.Label,
lbName: cc.Label,
nickName: ""
},
onEnable: function() {
this.showPlayer(!1);
},
showPlayer: function(e) {
this.node.opacity = e ? 255 : 0;
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
(t <= 0 || t > 15) && (t = Math.floor(15 * Math.random()));
this.avatar.setAvatar(cc.LongHoController_789.getInstance().getAvatars()[t - 1]);
this.nodeInfo.active = !0;
this.nickName = e.NickName;
if (e.ServiceID) {
this.lbSID.string = cc.Config.getInstance().getServiceNameNoFormat(e.ServiceID);
this.lbName.string = cc.Config.getInstance().formatName(e.NickName, 7);
} else {
this.lbSID.string = "";
this.lbName.string = cc.Config.getInstance().formatName(e.NickName, 10);
}
this.lbChip.tweenValueto(e.Balance);
this.nodeInfo.active = !0;
},
unRegisterPlayer: function() {
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
"789.LongHoPopupController": [ function(e, t) {
"use strict";
cc._RF.push(t, "cff9cyTGfxA35kcWtDgICez", "789.LongHoPopupController");
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
t.prototype.setDragonTigerPopupView = function(e) {
return this.longHoTigerPopupView = e;
};
t.prototype.createGraphView = function() {
return this.longHoTigerPopupView.createGraphView();
};
t.prototype.destroyGraphView = function() {
return this.longHoTigerPopupView.destroyGraphView();
};
t.prototype.createSessionDetailView = function() {
return this.longHoTigerPopupView.createSessionDetailView();
};
t.prototype.destroySessionDetailView = function() {
return this.longHoTigerPopupView.destroySessionDetailView();
};
t.prototype.createTopView = function() {
return this.longHoTigerPopupView.createTopView();
};
t.prototype.destroyTopView = function() {
return this.longHoTigerPopupView.destroyTopView();
};
t.prototype.createHelpView = function() {
return this.longHoTigerPopupView.createHelpView();
};
t.prototype.destroyHelpView = function() {
return this.longHoTigerPopupView.destroyHelpView();
};
t.prototype.createHistoryView = function() {
return this.longHoTigerPopupView.createHistoryView();
};
t.prototype.destroyHistoryView = function() {
return this.longHoTigerPopupView.destroyHistoryView();
};
t.prototype.showPopupWin = function(e) {
return this.longHoTigerPopupView.showPopupWin(e);
};
t.prototype.hidePopupWin = function() {
return this.longHoTigerPopupView.hidePopupWin();
};
t.prototype.createGroupUserView = function() {
return this.longHoTigerPopupView.createGroupUserView();
};
t.prototype.destroyGroupUserView = function() {
return this.longHoTigerPopupView.destroyGroupUserView();
};
return t;
}();
cc.LongHoPopupController_789 = e;
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoPopupView": [ function(e, t) {
"use strict";
cc._RF.push(t, "ae932/DM9lKgp2oDUPpm7qC", "789.LongHoPopupView");
(function() {
cc.LongHoPopupView_789 = cc.Class({
extends: cc.Component,
properties: {
prefabGraph: cc.Prefab,
prefabGroupUser: cc.Prefab,
popUpWin: cc.Node,
labelWin: cc.Label,
prefabBetLines: cc.Prefab,
prefabHelp: cc.Prefab,
prefabHistory: cc.Prefab,
prefabTop: cc.Prefab,
prefabSessionDetail: cc.Prefab
},
onLoad: function() {
cc.LongHoPopupController_789.getInstance().setDragonTigerPopupView(this);
this.lbWin = this.labelWin.node.getComponent(cc.LabelIncrement);
},
showPopupWin: function(e) {
if (this.popUpWin) {
this.popUpWin.active = !0;
this.popUpWin.getComponent(cc.Animation).play("openPopupWin");
this.lbWin.tweenValue(0, e);
var t = this;
setTimeout(function() {
t.hidePopupWin();
}, 3e3);
}
},
hidePopupWin: function() {
this.popUpWin && (this.popUpWin.active = !1);
},
createGraphView: function() {
this.nodeprefabGraphView = this.createView(this.prefabGraph);
},
destroyGraphView: function() {
this.nodeprefabGraphView && this.nodeprefabGraphView.destroy();
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
"789.LongHoResultEffectView": [ function(e, t) {
"use strict";
cc._RF.push(t, "25ba2z5WidL5KqavLDEVu43", "789.LongHoResultEffectView");
(function() {
cc.LongHoResultEffectView_789 = cc.Class({
extends: cc.Component,
properties: {
bgWinRong: cc.Node,
bgWinHoa: cc.Node,
bgWinHo: cc.Node,
btnNodeRong: cc.Node,
btnNodeHoa: cc.Node,
btnNodeHo: cc.Node,
resultAnimation: cc.Animation,
aniRong: sp.Skeleton,
aniRongTo: sp.Skeleton,
aniHo: sp.Skeleton,
aniHoTo: sp.Skeleton
},
onLoad: function() {
cc.LongHoController_789.getInstance().setDragonTigerResultEffectView(this);
},
onDestroy: function() {
cc.LongHoController_789.getInstance().setDragonTigerResultEffectView(null);
},
stopEffect: function() {
this.reset();
},
reset: function() {
this.resultAnimation.stop();
this.bgWinRong.active = !1;
this.bgWinHoa.active = !1;
this.bgWinHo.active = !1;
this.aniHo.setAnimation(0, "ho_loop", !0);
this.aniRong.setAnimation(0, "rong_loop", !0);
},
playEffectWin: function(e) {
var t = cc.LongHoController_789.getInstance().dragonTigerShowCard;
this.aniRongTo.node.zIndex = 9999;
this.aniHoTo.node.zIndex = 9999;
switch (e) {
case cc.LongHoBetSide_789.RONG:
this.bgWinRong.active = !0;
t.playAnimation(cc.LongHoBetSide_789.RONG);
this.btnNodeRong.opacity = 255;
this.resultAnimation.play("rong-win");
this.aniRongTo.node.active = !0;
this.aniHo.setAnimation(0, "ho_thua", !0);
this.aniRong.setAnimation(0, "rong_win", !0);
this.aniRongTo.setAnimation(0, "rong_win", !1);
break;

case cc.LongHoBetSide_789.HOA:
this.bgWinHoa.active = !0;
t.playAnimation(cc.LongHoBetSide_789.HOA);
this.btnNodeHoa.opacity = 255;
this.resultAnimation.play("hoa-win");
break;

case cc.LongHoBetSide_789.HO:
this.bgWinHo.active = !0;
t.playAnimation(cc.LongHoBetSide_789.HO);
this.btnNodeHo.opacity = 255;
this.resultAnimation.play("ho-win");
this.aniHoTo.node.active = !0;
this.aniHo.setAnimation(0, "ho_win", !0);
this.aniRong.setAnimation(0, "rong_thua", !0);
this.aniHoTo.setAnimation(0, "ho_win", !1);
}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoSessionDetailData": [ function(e, t) {
"use strict";
cc._RF.push(t, "8cc94ubVnFGIKfa8K/CGbJL", "789.LongHoSessionDetailData");
t.exports = [ {
UserName: "thuyhj189",
Bet: 23e4,
Refund: 23e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:14.253"
}, {
UserName: "pepink1993",
Bet: 21e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:14.253"
}, {
UserName: "linhsuri97",
Bet: 184e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:14.253"
}, {
UserName: "laothat",
Bet: 175e3,
Refund: 175e3,
BetSide: 0,
CreateTime: "2019-04-03T21:25:13.24"
}, {
UserName: "tiheop3",
Bet: 16e4,
Refund: 16e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:13.24"
}, {
UserName: "baumoitha",
Bet: 18e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:13.24"
}, {
UserName: "boywushuhd88",
Bet: 19e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:13.24"
}, {
UserName: "kabacotu",
Bet: 75e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:13.24"
}, {
UserName: "boacmay",
Bet: 21e4,
Refund: 21e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:13.24"
}, {
UserName: "kute1988",
Bet: 21e4,
Refund: 21e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:12.223"
}, {
UserName: "lunnho64",
Bet: 184e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:12.223"
}, {
UserName: "codonketoi123",
Bet: 28e4,
Refund: 28e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:12.223"
}, {
UserName: "1262772924",
Bet: 185e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:12.223"
}, {
UserName: "bebi986",
Bet: 37e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:12.223"
}, {
UserName: "sonantonyhp",
Bet: 15e4,
Refund: 15e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:12.223"
}, {
UserName: "kenz11o2vn",
Bet: 12e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:12.207"
}, {
UserName: "nhinlgi",
Bet: 284e3,
Refund: 284e3,
BetSide: 0,
CreateTime: "2019-04-03T21:25:12.207"
}, {
UserName: "lyhaidang1990",
Bet: 199e3,
Refund: 199e3,
BetSide: 0,
CreateTime: "2019-04-03T21:25:12.207"
}, {
UserName: "sociu6996",
Bet: 299e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:12.207"
}, {
UserName: "supermen3979",
Bet: 29e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:12.207"
}, {
UserName: "minkho0412",
Bet: 22e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:11.19"
}, {
UserName: "selina250393",
Bet: 38e4,
Refund: 38e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:11.19"
}, {
UserName: "duongsondaika1",
Bet: 35e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:11.19"
}, {
UserName: "nguyentun20",
Bet: 3e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:11.19"
}, {
UserName: "kimgioi020",
Bet: 475e3,
Refund: 475e3,
BetSide: 0,
CreateTime: "2019-04-03T21:25:11.19"
}, {
UserName: "quyetdaik1998",
Bet: 35e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:11.19"
}, {
UserName: "pepink1993",
Bet: 168e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:11.19"
}, {
UserName: "denvl000",
Bet: 175e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:11.19"
}, {
UserName: "dukypro221",
Bet: 16e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:10.177"
}, {
UserName: "fbisat1233211",
Bet: 21e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:09.16"
}, {
UserName: "tdim948",
Bet: 275e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:09.16"
}, {
UserName: "dento01",
Bet: 29e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:09.16"
}, {
UserName: "banmaixanh3",
Bet: 22e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:09.16"
}, {
UserName: "987272027",
Bet: 28e4,
Refund: 28e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:08.143"
}, {
UserName: "boylazy94",
Bet: 22e4,
Refund: 22e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:08.143"
}, {
UserName: "mygiangno1",
Bet: 33e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:07.13"
}, {
UserName: "thaobktdt",
Bet: 21e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:07.13"
}, {
UserName: "kebaothu7325",
Bet: 175e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:06.113"
}, {
UserName: "proan159",
Bet: 29e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:06.113"
}, {
UserName: "trunglo3",
Bet: 18e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:06.113"
}, {
UserName: "vippk01",
Bet: 27e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:06.113"
}, {
UserName: "bodatrolai99",
Bet: 27e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:06.113"
}, {
UserName: "dongphenghp",
Bet: 275e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:05.097"
}, {
UserName: "taokillzome",
Bet: 16e4,
Refund: 16e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:05.097"
}, {
UserName: "money6886",
Bet: 16e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:05.097"
}, {
UserName: "s0nc0nvkl",
Bet: 26e4,
Refund: 26e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:05.097"
}, {
UserName: "gioipc",
Bet: 275e3,
Refund: 275e3,
BetSide: 0,
CreateTime: "2019-04-03T21:25:04.083"
}, {
UserName: "maimaimottinhyeuhp",
Bet: 19e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:25:03.067"
}, {
UserName: "proan159",
Bet: 27e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:03.067"
}, {
UserName: "tulatao198x",
Bet: 475e3,
Refund: 49e3,
BetSide: 0,
CreateTime: "2019-04-03T21:25:03.067"
}, {
UserName: "1thu2duoi",
Bet: 35e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:03.067"
}, {
UserName: "mafiatytgame",
Bet: 33e4,
Refund: 33e4,
BetSide: 0,
CreateTime: "2019-04-03T21:25:03.067"
}, {
UserName: "trakun",
Bet: 22e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:03.067"
}, {
UserName: "balac1989",
Bet: 168e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:02.05"
}, {
UserName: "howl312",
Bet: 22e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:25:02.05"
}, {
UserName: "leemjnbj",
Bet: 19e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:25:01.037"
}, {
UserName: "945433088",
Bet: 299e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:01.037"
}, {
UserName: "thaobktdt",
Bet: 5e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:01.037"
}, {
UserName: "denlamluon",
Bet: 27e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:01.037"
}, {
UserName: "kaka616",
Bet: 294e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:00.02"
}, {
UserName: "duyduyduy34",
Bet: 32e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:25:00.02"
}, {
UserName: "tykt21",
Bet: 175e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:25:00.02"
}, {
UserName: "anhhiep123sd",
Bet: 18e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:25:00.02"
}, {
UserName: "daica1989hk",
Bet: 178e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:25:00.02"
}, {
UserName: "tinhkiki123",
Bet: 9e5,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:59.003"
}, {
UserName: "anhthaomy03",
Bet: 185e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:59.003"
}, {
UserName: "choixongxoay",
Bet: 28e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:59.003"
}, {
UserName: "2duoi1thu",
Bet: 19e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:57.99"
}, {
UserName: "langtuzerovd",
Bet: 111e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:57.99"
}, {
UserName: "hunghaivl",
Bet: 25e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:57.99"
}, {
UserName: "thanhden2018",
Bet: 199e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:57.99"
}, {
UserName: "sorry0000",
Bet: 4e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:56.957"
}, {
UserName: "gioipc",
Bet: 475e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:56.957"
}, {
UserName: "trandaihoan1",
Bet: 15e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:56.957"
}, {
UserName: "1226338830",
Bet: 199e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:56.957"
}, {
UserName: "follo19",
Bet: 19e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:56.957"
}, {
UserName: "lehoaihan111987",
Bet: 23e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:56.957"
}, {
UserName: "fquerne",
Bet: 17e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:56.957"
}, {
UserName: "cunbabies111",
Bet: 199e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:56.957"
}, {
UserName: "dangduyst01",
Bet: 28e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:55.94"
}, {
UserName: "tuanmusic2013",
Bet: 29e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:55.94"
}, {
UserName: "aomacanada",
Bet: 22e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:55.94"
}, {
UserName: "hoabao",
Bet: 399e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:55.94"
}, {
UserName: "phatnguyen94",
Bet: 18e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:54.927"
}, {
UserName: "anhan666",
Bet: 24e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:54.927"
}, {
UserName: "sailamlaem6561",
Bet: 168e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:54.927"
}, {
UserName: "danthuong88",
Bet: 21e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:53.91"
}, {
UserName: "tinhmong7325",
Bet: 3e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:53.91"
}, {
UserName: "9774749259",
Bet: 365e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:53.91"
}, {
UserName: "dinhthai1994",
Bet: 3e5,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:53.91"
}, {
UserName: "tuanmusic2013",
Bet: 21e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:52.893"
}, {
UserName: "hagiangsao90",
Bet: 184e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:52.893"
}, {
UserName: "KingHeisenberg",
Bet: 28e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:52.893"
}, {
UserName: "nhjmquaj",
Bet: 399e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:52.893"
}, {
UserName: "onethepha157",
Bet: 15e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:52.893"
}, {
UserName: "alexanderlop",
Bet: 29e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:52.88"
}, {
UserName: "toitoi012",
Bet: 3e5,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:51.88"
}, {
UserName: "minthu0589",
Bet: 178e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:50.863"
}, {
UserName: "gunv01",
Bet: 299e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:49.847"
}, {
UserName: "2duoi1thu",
Bet: 29e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:49.847"
}, {
UserName: "luinhutien6996",
Bet: 23e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:49.847"
}, {
UserName: "967861102",
Bet: 275e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:49.847"
}, {
UserName: "boywushuhd88",
Bet: 3e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:49.847"
}, {
UserName: "tieukaan1997",
Bet: 45e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:48.833"
}, {
UserName: "huongbaby97",
Bet: 29e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:47.817"
}, {
UserName: "alotoingay",
Bet: 56e5,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:47.8"
}, {
UserName: "vail0n89",
Bet: 25e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:47.8"
}, {
UserName: "nhinlgi",
Bet: 25e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:47.8"
}, {
UserName: "caubedonphuong",
Bet: 284e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:47.8"
}, {
UserName: "vietanh1980",
Bet: 294e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:47.8"
}, {
UserName: "pqk6789",
Bet: 184e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:47.8"
}, {
UserName: "966242177",
Bet: 18e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:47.8"
}, {
UserName: "936922936",
Bet: 26e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:46.787"
}, {
UserName: "myxinh0310hp",
Bet: 17e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:46.787"
}, {
UserName: "hungtz",
Bet: 12e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:46.787"
}, {
UserName: "thaquendidj",
Bet: 17e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:45.77"
}, {
UserName: "taoacdexoay",
Bet: 26e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:44.753"
}, {
UserName: "cuto56789",
Bet: 21e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:44.753"
}, {
UserName: "teenvyeu1996",
Bet: 16e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:44.753"
}, {
UserName: "aomacanada",
Bet: 29e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:43.74"
}, {
UserName: "prolahay001",
Bet: 19e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:43.74"
}, {
UserName: "huynhhaonam",
Bet: 18e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:43.74"
}, {
UserName: "hung651993",
Bet: 166e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:43.74"
}, {
UserName: "caubuon1991",
Bet: 3e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:43.74"
}, {
UserName: "cachua0610",
Bet: 111e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:43.74"
}, {
UserName: "ngheanwetui",
Bet: 1e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:42.723"
}, {
UserName: "huyunrin",
Bet: 27e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:42.723"
}, {
UserName: "denlamluon",
Bet: 399e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:42.723"
}, {
UserName: "trinhlxtp",
Bet: 21e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:42.723"
}, {
UserName: "linhcuuhoa1980",
Bet: 28e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:41.707"
}, {
UserName: "duocmoila",
Bet: 22e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:41.707"
}, {
UserName: "ngheomacotinh91",
Bet: 28e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:41.707"
}, {
UserName: "tyty305",
Bet: 17e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:41.707"
}, {
UserName: "daugauls",
Bet: 299e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:41.707"
}, {
UserName: "vuachoibai95",
Bet: 5e5,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:40.69"
}, {
UserName: "selina24793",
Bet: 35e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:40.69"
}, {
UserName: "dongphenghp",
Bet: 26e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:40.69"
}, {
UserName: "thuyhj189",
Bet: 168e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:40.69"
}, {
UserName: "tbbdhg",
Bet: 8e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:40.69"
}, {
UserName: "selina250393",
Bet: 19e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:39.677"
}, {
UserName: "super0professor",
Bet: 399e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:39.677"
}, {
UserName: "doilatheaaa",
Bet: 25e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:39.677"
}, {
UserName: "tuantu011991",
Bet: 184e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:39.677"
}, {
UserName: "trandaihoan1",
Bet: 75e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:38.66"
}, {
UserName: "follo19",
Bet: 184e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:38.66"
}, {
UserName: "dinhloinhoi",
Bet: 22e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:38.66"
}, {
UserName: "linhcuuhoa1980",
Bet: 38e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:37.643"
}, {
UserName: "o925355847",
Bet: 4e5,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:37.643"
}, {
UserName: "kimgioi020",
Bet: 19e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:37.643"
}, {
UserName: "hp0988880119",
Bet: 23e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:37.643"
}, {
UserName: "misyokola2710",
Bet: 28e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:37.643"
}, {
UserName: "oggyji1711",
Bet: 166e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:37.643"
}, {
UserName: "kabacotu",
Bet: 294e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:37.643"
}, {
UserName: "27071994",
Bet: 28e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:36.63"
}, {
UserName: "anvyluv90",
Bet: 23e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:36.63"
}, {
UserName: "963696359",
Bet: 22e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:36.63"
}, {
UserName: "phugiao1111",
Bet: 184e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:36.63"
}, {
UserName: "chibui6761",
Bet: 299e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:36.63"
}, {
UserName: "maxsao9999",
Bet: 28e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:36.63"
}, {
UserName: "laothat",
Bet: 199e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:35.613"
}, {
UserName: "thuongnhan86",
Bet: 399e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:35.613"
}, {
UserName: "longlee2k14",
Bet: 26e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:35.613"
}, {
UserName: "bebi986",
Bet: 25e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:35.613"
}, {
UserName: "kenshinub169",
Bet: 24e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:35.613"
}, {
UserName: "1207464321",
Bet: 22e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:34.6"
}, {
UserName: "dinhthai1994",
Bet: 199e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:34.6"
}, {
UserName: "emyeuvtc1998",
Bet: 15e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:34.6"
}, {
UserName: "dangcap873",
Bet: 29e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:34.6"
}, {
UserName: "nhithuy3793",
Bet: 2e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:33.583"
}, {
UserName: "denlamluon",
Bet: 275e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:33.583"
}, {
UserName: "kabacotu",
Bet: 16e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:33.583"
}, {
UserName: "acpzolove",
Bet: 299e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:32.567"
}, {
UserName: "booshisha11",
Bet: 22e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:32.567"
}, {
UserName: "anhthinhs2",
Bet: 3e5,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:32.567"
}, {
UserName: "vemotnucuoi",
Bet: 35e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:32.567"
}, {
UserName: "anhla93",
Bet: 22e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:32.567"
}, {
UserName: "pqk6789",
Bet: 15e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:32.567"
}, {
UserName: "botenvinhhp2",
Bet: 23e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:31.55"
}, {
UserName: "langtuzerovd",
Bet: 2e5,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:31.55"
}, {
UserName: "nungcatwavtc",
Bet: 222e3,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:31.55"
}, {
UserName: "964356789",
Bet: 2e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:31.55"
}, {
UserName: "dento01",
Bet: 19e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:31.55"
}, {
UserName: "kenshinub169",
Bet: 15e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:31.55"
}, {
UserName: "lastab4",
Bet: 195e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:30.537"
}, {
UserName: "laothat",
Bet: 39e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:30.537"
}, {
UserName: "loztrau9999",
Bet: 3e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:30.537"
}, {
UserName: "phungchu0610",
Bet: 18e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:30.537"
}, {
UserName: "phidaigia789",
Bet: 26e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:30.537"
}, {
UserName: "2duoi1thu",
Bet: 18e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:29.52"
}, {
UserName: "quangthu1993",
Bet: 75e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:29.52"
}, {
UserName: "facebookcye",
Bet: 16e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:29.52"
}, {
UserName: "caubuon1991",
Bet: 5e5,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:29.52"
}, {
UserName: "oggyji1711",
Bet: 45e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:29.52"
}, {
UserName: "o0okissloveo0o",
Bet: 16e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:29.52"
}, {
UserName: "anhthinhs2",
Bet: 375e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:29.52"
}, {
UserName: "vuachoibai95",
Bet: 29e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:28.503"
}, {
UserName: "khuyettatgiathu",
Bet: 178e3,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:28.503"
}, {
UserName: "nhatlong6991",
Bet: 25e4,
Refund: 0,
BetSide: 1,
CreateTime: "2019-04-03T21:24:28.503"
}, {
UserName: "tunghue8888",
Bet: 2e5,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:28.503"
}, {
UserName: "trungtienkissss",
Bet: 5e5,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:27.49"
}, {
UserName: "barbin86",
Bet: 2e5,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:27.49"
}, {
UserName: "thuongdientu",
Bet: 21e4,
Refund: 0,
BetSide: 0,
CreateTime: "2019-04-03T21:24:27.49"
} ];
cc._RF.pop();
}, {} ],
"789.LongHoSessionDetailItem": [ function(e, t) {
"use strict";
cc._RF.push(t, "668c3PpEQRABpeSVAFjg6RW", "789.LongHoSessionDetailItem");
(function() {
cc.LongHoSessionDetailItem = cc.Class({
extends: cc.Component,
properties: {
lbTime: cc.Label,
lbSID: cc.Label,
lbNickName: cc.Label,
lbBet: cc.Label,
lbRefund: cc.Label
},
updateItem: function(e, t) {
this.lbTime.string = cc.Tool.getInstance().convertUTCTime2(e.CreateTime);
this.lbSID.string = cc.Config.getInstance().getServiceNameNoFormat(e.ServiceID);
this.lbNickName.string = e.UserName;
this.lbBet.string = cc.Tool.getInstance().formatNumberKTX(e.Bet);
this.lbRefund.string = cc.Tool.getInstance().formatNumberKTX(e.Refund);
this.item = e;
this.itemID = t;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoSessionDetailListView": [ function(e, t) {
"use strict";
cc._RF.push(t, "aaa2fSiTghDq652paW0J/gz", "789.LongHoSessionDetailListView");
(function() {
cc.LongHoSessionDetailListView = cc.Class({
extends: cc.ListView,
properties: {},
initialize: function(e) {
this.messages = e;
var t = this.messages.length;
this.content.height = t * (this.itemTemplate.height + this.spacing) + this.spacing;
for (var i = Math.min(this.spawnCount, t), o = 0; o < i; ++o) {
var n = cc.instantiate(this.itemTemplate);
this.content.addChild(n);
n.setPosition(0, -n.height * (.5 + o) - this.spacing * (o + 1));
n.getComponent(cc.LongHoSessionDetailItem).updateItem(this.messages[o], o);
this.items.push(n);
}
this.rootContentY = this.content.y;
},
update: function(e) {
this.updateTimer += e;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var t = this.items, i = this.bufferZone, o = this.scrollView.content.y < this.lastContentPosY, n = (this.itemTemplate.height + this.spacing) * t.length, s = 0; s < t.length; ++s) {
var a = this.getPositionInView(t[s]);
if (o) {
if (a.y < -i && t[s].y + n < 0) {
t[s].y = t[s].y + n;
var c = t[s].getComponent(cc.LongHoSessionDetailItem), r = c.itemID - t.length;
c.updateItem(this.messages[r], r);
}
} else if (a.y > i && t[s].y - n > -this.content.height) {
t[s].y = t[s].y - n;
r = (c = t[s].getComponent(cc.LongHoSessionDetailItem)).itemID + t.length;
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
"789.LongHoSessionDetailView": [ function(e, t) {
"use strict";
cc._RF.push(t, "d9284nbOIVBRYHZfY69xD6c", "789.LongHoSessionDetailView");
(function() {
cc.LongHoSessionDetailView = cc.Class({
extends: cc.PopupBase,
properties: {
rongSessionDetailListView: cc.DragonTigerSessionDetailListView,
hoSessionDetailListView: cc.DragonTigerSessionDetailListView,
lbSessionID: cc.Label,
nodeRong: cc.Node,
nodeHoa: cc.Node,
nodeHo: cc.Node,
nodeEffectRong: [ cc.Node ],
nodeEffectHoa: [ cc.Node ],
nodeEffectHo: [ cc.Node ],
lbRong: cc.Label,
lbHoa: cc.Label,
lbHo: cc.Label,
spriteRong: cc.Sprite,
spriteHo: cc.Sprite,
lbTotalBetRong: cc.Label,
lbTotalBetHoa: cc.Label,
lbTotalBetHo: cc.Label,
lbTotalRefundTai: cc.Label,
lbTotalRefundXiu: cc.Label,
btnNext: cc.Button,
btnBack: cc.Button,
sfDices: [ cc.SpriteFrame ]
},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
this.node.zIndex = 99;
},
onEnable: function() {
var e = this;
cc.director.getScheduler().schedule(function() {
e.getSessionDetail();
}, this, 1, 0, .2, !1);
this.animation.play("openPopup");
},
checkStatusButton: function() {
this.btnNext.interactable = 0 !== this.index;
this.btnBack.interactable = this.index !== this.totalHistory - 1;
},
getSessionDetail: function() {
this.index = cc.LongHoController_789.getInstance().getDetailIndex();
this.gameHistory = cc.LongHoController_789.getInstance().getGameHistory();
this.totalHistory = this.gameHistory.length;
this.checkStatusButton();
this.getSessionDetailById(this.index);
},
getSessionDetailById: function(e) {
var t = this.gameHistory[e];
this.lbSessionID.string = "Phiên: #" + t.SessionId + " - Ngày: " + cc.Tool.getInstance().convertUTCTime3(t.CreatedDate);
this.nodeTai.active = !isTai;
this.nodeXiu.active = isTai;
this.nodeEffectTais.forEach(function(e) {
e.active = isTai;
});
this.nodeEffectXius.forEach(function(e) {
e.active = !isTai;
});
this.spriteDice1.spriteFrame = this.sfDices[t.FirstDice - 1];
this.spriteDice2.spriteFrame = this.sfDices[t.SecondDice - 1];
this.spriteDice3.spriteFrame = this.sfDices[t.ThirdDice - 1];
new cc.LongHoGetSessionInfoCommand().execute(this, t.SessionId);
},
onTXGetSessionInfoResponse: function(e) {
if (null !== e) {
var t = 0, i = 0, o = 0, n = 0, s = [], a = [];
e.forEach(function(e) {
if (e.BetSide === cc.LongHoBetSide_789.TAI) {
s.push(e);
t += e.Bet;
o += e.Refund;
} else {
a.push(e);
i += e.Bet;
n += e.Refund;
}
});
if (null !== s && s.length > 0) {
this.taiSessionDetailListView.resetList();
this.taiSessionDetailListView.initialize(s);
}
if (null !== a && a.length > 0) {
this.xiuSessionDetailListView.resetList();
this.xiuSessionDetailListView.initialize(a);
}
this.lbTotalBetTai.string = cc.Tool.getInstance().formatNumberKTX(t);
this.lbTotalBetXiu.string = cc.Tool.getInstance().formatNumberKTX(i);
this.lbTotalRefundTai.string = cc.Tool.getInstance().formatNumberKTX(o);
this.lbTotalRefundXiu.string = cc.Tool.getInstance().formatNumberKTX(n);
}
},
nextSessionClicked: function() {
this.index--;
this.xiuSessionDetailListView.resetList();
this.taiSessionDetailListView.resetList();
this.getSessionDetailById(this.index);
this.checkStatusButton();
},
backSessionClicked: function() {
this.index++;
this.xiuSessionDetailListView.resetList();
this.taiSessionDetailListView.resetList();
this.getSessionDetailById(this.index);
this.checkStatusButton();
},
closeClicked: function() {
this.taiSessionDetailListView.resetList();
this.xiuSessionDetailListView.resetList();
this.animation.play("closePopup");
var e = this;
cc.director.getScheduler().schedule(function() {
e.animation.stop();
cc.DragonTigerMainController.getInstance().destroySessionDetailView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoSessionHistoryView": [ function(e, t) {
"use strict";
cc._RF.push(t, "d238fsFy9ROBLsWJHtLwHZZ", "789.LongHoSessionHistoryView");
(function() {
cc.LongHoSessionHistoryView_789 = cc.Class({
extends: cc.Component,
properties: {
lstSession: [ cc.Sprite ],
spSessions: [ cc.SpriteFrame ]
},
onLoad: function() {
cc.LongHoController_789.getInstance().setDragonTigerSessionHistoryView(this);
},
updateGameHistoryUI: function(e) {
var t = this;
if (e) {
e = e.reverse();
this.gameHistory = e;
e.map(function(e, i) {
var o = parseInt(e.Result) - 1;
t.lstSession[i].spriteFrame = t.spSessions[o];
});
}
},
sessionDetailClicked: function(e, t) {
if (this.gameHistory && this.gameHistory.length > t) {
cc.LongHoController_789.getInstance().setDetailIndex(t);
cc.LongHoPopupController_789.getInstance().createSessionDetailView();
}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoSettingRoomView": [ function(e, t) {
"use strict";
cc._RF.push(t, "f54bck9YxJK6JJ1Pj1/407J", "789.LongHoSettingRoomView");
(function() {
cc.LongHoSettingRoomView = cc.Class({
extends: cc.Component,
properties: {
nodeOffset: cc.Node,
spriteSound: cc.Sprite,
spriteMusic: cc.Sprite,
sfSounds: [ cc.SpriteFrame ],
sfMusics: [ cc.SpriteFrame ]
},
onLoad: function() {},
start: function() {
this.spriteSound.spriteFrame = this.sound ? this.sfSounds[0] : this.sfSounds[1];
this.spriteMusic.spriteFrame = this.music ? this.sfMusics[0] : this.sfMusics[1];
cc.AudioController.getInstance().enableSound(this.sound);
cc.AudioController.getInstance().enableMusic(this.music);
},
openSettingClicked: function() {
0 == this.nodeOffset.active ? this.nodeOffset.active = !0 : this.nodeOffset.active = !1;
},
closeSettingClicked: function() {
this.nodeOffset.active = !1;
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
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoShowCard": [ function(e, t) {
"use strict";
cc._RF.push(t, "c94a5wsFMhGn6uwtagXkCu6", "789.LongHoShowCard");
(function() {
cc.LongHoShowCard_789 = cc.Class({
extends: cc.Component,
properties: {
animationCard: cc.Animation
},
onLoad: function() {
cc.LongHoController_789.getInstance().dragonTigerShowCard = this;
},
playAnimation: function(e) {
e == cc.LongHoBetSide_789.RONG ? this.animationCard.play("card-rong") : e == cc.LongHoBetSide_789.HO ? this.animationCard.play("card-ho") : this.animationCard.play("card-hoa");
},
playAnimationCoin: function() {
this.animationCard.play("coin");
},
stopAnimation: function() {
this.animationCard.stop();
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoState": [ function(e, t) {
"use strict";
cc._RF.push(t, "3ccdefBxKFPCb4VrWSM2YsI", "789.LongHoState");
(function() {
cc.LongHoState_789 = cc.Enum({
BETTING: 0,
RESULT: 1,
PREPARE_NEW_SESSION: 2,
END_BETTING: 3
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoTopItem": [ function(e, t) {
"use strict";
cc._RF.push(t, "165cehISFhNOb76Ppojx0YV", "789.LongHoTopItem");
(function() {
cc.LongHoTopItem_789 = cc.Class({
extends: cc.Component,
properties: {
lbRank: cc.Label,
lbSID: cc.Label,
lbNickName: cc.Label,
lbTotalWin: cc.Label,
spriteTop: cc.Sprite,
spTop: [ cc.SpriteFrame ]
},
updateItem: function(e, t) {
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
"789.LongHoTopListView": [ function(e, t) {
"use strict";
cc._RF.push(t, "a9cd2JQWttF66r9MSwqUkLj", "789.LongHoTopListView");
(function() {
cc.LongHoTopListView_789 = cc.Class({
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
initialize: function(e) {
this.messages = e;
var t = this.messages.length;
this.content.height = t * (this.itemTemplate.height + this.spacing) + this.spacing;
for (var i = Math.min(this.spawnCount, t), o = 0; o < i; ++o) {
var n = cc.instantiate(this.itemTemplate);
this.content.addChild(n);
n.setPosition(0, -n.height * (.5 + o) - this.spacing * (o + 1));
n.getComponent(cc.LongHoTopItem_789).updateItem(this.messages[o], o);
this.items.push(n);
}
this.rootContentY = this.content.y;
},
getPositionInView: function(e) {
var t = e.parent.convertToWorldSpaceAR(e.position);
return this.scrollView.node.convertToNodeSpaceAR(t);
},
update: function(e) {
this.updateTimer += e;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var t = this.items, i = this.bufferZone, o = this.scrollView.content.y < this.lastContentPosY, n = (this.itemTemplate.height + this.spacing) * t.length, s = 0; s < t.length; ++s) {
var a = this.getPositionInView(t[s]);
if (o) {
if (a.y < -i && t[s].y + n < 0) {
t[s].y = t[s].y + n;
var c = t[s].getComponent(cc.LongHoTopItem_789), r = c.itemID - t.length;
c.updateItem(this.messages[r], r);
}
} else if (a.y > i && t[s].y - n > -this.content.height) {
t[s].y = t[s].y - n;
r = (c = t[s].getComponent(cc.LongHoTopItem_789)).itemID + t.length;
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
"789.LongHoTopView": [ function(e, t) {
"use strict";
cc._RF.push(t, "672f18hphpEV7LU/zE18bPJ", "789.LongHoTopView");
(function() {
cc.LongHoTopView_789 = cc.Class({
extends: cc.Component,
properties: {
dragonTigerTopListView: cc.LongHoTopListView_789
},
onLoad: function() {},
onEnable: function() {
var e = this;
cc.director.getScheduler().schedule(function() {
e.getTopSessionWinners();
}, this, 1, 0, .2, !1);
},
getTopSessionWinners: function() {
new cc.LongHoGetBigWinnerCommand_789().execute(this);
},
onDragonTigerGetBigWinnerResponse: function(e) {
var t = e;
if (null !== t && t.length > 0) {
this.dragonTigerTopListView.resetList();
this.dragonTigerTopListView.initialize(t);
}
},
closeClicked: function() {
this.dragonTigerTopListView.resetList();
cc.director.getScheduler().schedule(function() {
cc.LongHoPopupController_789.getInstance().destroyTopView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"789.LongHoView": [ function(e, t) {
"use strict";
cc._RF.push(t, "3d4dc7i/shHQ494587CrS6d", "789.LongHoView");
var i = e("NetConfig");
(function() {
cc.LongHoView_789 = cc.Class({
extends: cc.Component,
properties: {
lbSID: cc.Label,
lbTimer: cc.Label,
lbTimerPrepare: cc.Label,
lbTotalUser: cc.Label,
lbTotalUserWin: cc.Label,
lbTotalBetRong: cc.Label,
lbTotalBetHoa: cc.Label,
lbTotalBetHo: cc.Label,
listAvtars: [ cc.SpriteFrame ],
bmfWhite: cc.BitmapFont,
bmfRed: cc.BitmapFont,
nodeCardRong: cc.Node,
nodeCardHo: cc.Node,
nodeCardBurn: cc.Node,
nodeCardStart: cc.Node,
prefabCardBack: cc.Prefab,
nodeBetSides: cc.Node,
spriteCardDefault: cc.SpriteFrame,
nodeParentChat: cc.Node,
prefabChat: cc.Prefab,
nodeAni: sp.Skeleton
},
onLoad: function() {
cc.LongHoController_789.getInstance().initBetLog();
cc.LongHoController_789.getInstance().setBetLogSession(1);
cc.LongHoController_789.getInstance().setAvatars(this.listAvtars);
cc.LongHoController_789.getInstance().setAvatarDef(this.avatarDef);
this.isPlaying = !1;
this.interval = null;
this.isActiveChat = !1;
cc.LongHoController_789.getInstance().setDragonTigerView(this);
this.lastTimeReconnect = new Date().getTime();
this.connectHubDragonTiger();
this.currentState = -1;
this.currentTimeEllapse = -1;
this.dragonTigerController = cc.LongHoController_789.getInstance();
this.initAnimationWin();
this.listAnimationOpenCard = this.mapAnimationCardName();
this.moveCardToBurn = !1;
this.runSuffler = !1;
this.historyResult = "";
this.accountId = cc.LoginController.getInstance().getUserId();
this.nodeAni.node.zIndex = 9999;
this.nodeAni.setAnimation(0, "VS", !1);
cc.director.getScheduler().schedule(function() {
this.nodeAni.node.active = !1;
}, this, 2, 0, 0, !1);
},
onEnable: function() {
var e = lngui.UserManager.instance.mainUserInfo.Money;
lngui.GameCoreManager.instance.updateTotalGold(e);
},
initCards: function() {
this.spriteCardBurn = this.nodeCardBurn.getChildByName("card");
},
initAnimationWin: function() {
this.winAnimation = this.nodeBetSides.getComponent(cc.Animation);
},
playCardEffect: function(e) {
switch (e) {
case cc.LongHoBetSide_789.RONG:
this.cardBackDragon && "" != this.cardBackDragon._name && this.cardBackDragon.getComponent(cc.Animation).play("card-scale");
break;

case cc.LongHoBetSide_789.HOA:
this.cardBackDragon && "" != this.cardBackDragon._name && this.cardBackDragon.getComponent(cc.Animation).play("card-scale");
this.cardBackTiger && "" != this.cardBackTiger._name && this.cardBackTiger.getComponent(cc.Animation).play("card-scale");
break;

case cc.LongHoBetSide_789.HO:
this.cardBackTiger && "" != this.cardBackTiger._name && this.cardBackTiger.getComponent(cc.Animation).play("card-scale");
}
},
stopResultEffect: function() {
this.winAnimation.stop();
},
onDestroy: function() {
var e = lngui.UserManager.instance.mainUserInfo.Money;
lngui.GameCoreManager.instance.updateTotalGold(e);
this.sendRequestOnHub(cc.MethodHubName.EXIT_LOBBY);
null !== this.interval && clearInterval(this.interval);
this.unscheduleAllCallbacks();
cc.LongHoController_789.getInstance().setDragonTigerView(null);
},
reset: function() {
this.lbTotalBetRong.string = "";
this.lbTotalBetHo.string = "";
this.lbTotalBetHoa.string = "";
this.isTimer = !1;
this.timer = 0;
this.currentState = 999;
null !== this.interval && clearInterval(this.interval);
this.stopResultEffect();
},
startTimer: function(e) {
null !== this.interval && clearInterval(this.interval);
var t = this;
this.timer = e;
this.isTimer = !0;
this.updateTimer(e);
this.interval = setInterval(function() {
if (t.isTimer) {
t.timer -= 1;
t.updateTimer(Math.round(t.timer));
}
}, 1e3);
},
stopTimer: function() {
this.isTimer = !1;
null !== this.interval && clearInterval(this.interval);
},
updateInfo: function(e) {
var t = e.IsShuffler, i = (e.CurrentState, e.Ellapsed);
this.currentTimeEllapse = i;
switch (e.CurrentState) {
case cc.LongHoState_789.BETTING:
if (this.currentState !== e.CurrentState) {
cc.LongHoController_789.getInstance().stopResultEffect();
cc.LongHoController_789.getInstance().disableBetAgain(!1);
cc.LongHoController_789.getInstance().buttonSideBet.enableButtonBet(!0);
this.destroyCardBack();
i > 24 && lngui.UITextManager.showCenterNotification("Đặt cửa");
if (i > 24 && !cc.game.isPaused()) this.cardSlide(); else {
this.moveCardToBurn = !1;
this.cardBackDragon = this.createNodeCardResult(cc.LongHoBetSide_789.RONG);
this.cardBackDragon.position = this.nodeCardRong.position;
this.cardBackTiger = this.createNodeCardResult(cc.LongHoBetSide_789.HO);
this.cardBackTiger.position = this.nodeCardHo.position;
}
this.lbSID.string = "#" + e.SessionID;
}
break;

case cc.LongHoState_789.END_BETTING:
cc.LongHoController_789.getInstance().disableBetAgain(!0);
cc.LongHoController_789.getInstance().buttonSideBet.enableButtonBet(!1);
if (this.currentState !== e.CurrentState) {
lngui.UITextManager.showCenterNotification("Hết thời gian đặt cửa");
this.lbSID.string = "#" + e.SessionID;
if (i < 3 && !cc.game.isPaused() && (!this.cardBackDragon || "" == this.cardBackDragon._name)) {
this.moveCardToBurn = !1;
this.cardBackDragon = this.createNodeCardResult(cc.LongHoBetSide_789.RONG);
this.cardBackDragon.position = this.nodeCardRong.position;
this.cardBackTiger = this.createNodeCardResult(cc.LongHoBetSide_789.HO);
this.cardBackTiger.position = this.nodeCardHo.position;
}
}
break;

case cc.LongHoState_789.RESULT:
cc.LongHoController_789.getInstance().buttonSideBet.enableButtonBet(!1);
this.historyResult = e;
if (this.currentState !== e.CurrentState) {
cc.LongHoController_789.getInstance().disableBetAgain(!0);
this.isPlaying = !1;
cc.AudioController.getInstance().playSound(cc.LongHoAudioTypes_789.CARD_OPEN);
this.currentResult = e.Result.Result;
var o = this;
i > 6 && this.showCardResult(e);
setTimeout(function() {
o.playCardEffect(e.Result.Result);
if (i > 8) cc.LongHoController_789.getInstance().moveChipView.chipMoveToCoin(o.currentResult, !1, 0); else try {
cc.LongHoController_789.getInstance().moveChipView.removeChips(o.currentResult);
} catch (e) {}
try {
cc.LongHoController_789.getInstance().dragonTigerResultEffectView.playEffectWin(e.Result.Result);
} catch (e) {}
}, 1e3);
this.activeNodeCard(!0);
this.lbSID.string = "#" + e.SessionID;
}
6 == e.Ellapsed && cc.game.isPaused();
if (t && 4 == e.Ellapsed && !cc.game.isPaused()) {
this.runSuffler = !0;
this.moveCardBurnToBox();
}
break;

case cc.LongHoState_789.PREPARE_NEW_SESSION:
cc.LongHoController_789.getInstance().buttonSideBet.enableButtonBet(!1);
if (this.currentState !== e.CurrentState) {
cc.LongHoController_789.getInstance().disableBetAgain(!0);
cc.LongHoController_789.getInstance().resetPlayerUI();
cc.LongHoController_789.getInstance().clearBetLog(cc.LongHoController_789.getInstance().getBetLogSession());
cc.LongHoController_789.getInstance().setBetLogSession(cc.LongHoController_789.getInstance().getBetLogSession() + 1);
if (3 != i || cc.game.isPaused()) try {
this.cardBackDragon.destroy();
this.cardBackTiger.destroy();
} catch (e) {} else this.moveCardBackToCardBurn();
this.activeNodeCard(!1);
cc.LongHoController_789.getInstance().moveChipView.clearChips();
cc.LongHoController_789.getInstance().reset();
this.lbSID.string = "#" + e.SessionID;
}
}
this.currentState = e.CurrentState;
cc.LongHoController_789.getInstance().setCurrentState(parseInt(this.currentState));
this.startTimer(e.Ellapsed);
this.lbTotalBetRong.string = this.formatNumber(e.TotalBetDragon);
this.lbTotalBetHoa.string = this.formatNumber(e.TotalBetTie);
this.lbTotalBetHo.string = this.formatNumber(e.TotalBetTiger);
},
formatNumber: function(e) {
return 0 == parseInt(e) ? "" : cc.Tool.getInstance().formatNumber(e);
},
updateTotalUser: function(e) {
this.lbTotalUser.string = e.toString();
},
cardSlide: function() {
this.destroyCardBack();
this.moveCardToBurn = !1;
this.cardSlided = !0;
this.cardBackBurn = this.createNodeCardBack();
this.cardBackDragon = this.createNodeCardBack();
this.cardBackTiger = this.createNodeCardBack();
var e = cc.LongHoController_789.getInstance().dragonTigerCardSlide;
this.cardBackBurn.active = !1;
var t = this;
cc.director.getScheduler().schedule(function() {
cc.AudioController.getInstance().playSound(cc.LongHoAudioTypes_789.CARD_SLIDE_BURN);
t.cardMoveTo(t.cardBackBurn, t.nodeCardBurn.position, 1);
e.playBoxAnimation("d1");
if (!this.runSuffler) {
this.runSuffler = !1;
e.playBurnAnimation("up2");
}
}, this, 0, 0, 0, !1);
cc.director.getScheduler().schedule(function() {
cc.AudioController.getInstance().playSound(cc.LongHoAudioTypes_789.CARD_SLIDE_RONG);
t.cardMoveTo(t.cardBackDragon, t.nodeCardRong.position, 1);
e.playBoxAnimation("d2");
e.playBurnAnimation("up3");
}, this, 0, 0, 0, !1);
cc.director.getScheduler().schedule(function() {
cc.AudioController.getInstance().playSound(cc.LongHoAudioTypes_789.CARD_SLIDE_HO);
t.cardMoveTo(t.cardBackTiger, t.nodeCardHo.position, 1);
e.playBoxAnimation("d3");
var i = cc.scaleTo(1, .5);
t.cardBackBurn.runAction(i);
setTimeout(function() {
t.cardBackBurn && (t.cardBackBurn.opacity = 0);
}, 1e3);
e.playBurnAnimation("up4");
}, this, .2, 0, 0, !1);
},
createNodeCardBack: function() {
var e = new cc.instantiate(this.prefabCardBack), t = this.nodeCardStart.position;
e.position = t;
e.parent = this.nodeCardStart.parent;
e.rotation = -45;
e.scale = 1;
return e;
},
createNodeCardResult: function(e) {
var t;
t = e == cc.LongHoBetSide_789.RONG ? this.nodeCardRong.position : this.nodeCardHo.position;
var i = new cc.instantiate(this.prefabCardBack);
i.position = t;
i.parent = this.nodeCardStart.parent;
return i;
},
updateMoveChip: function(e, t) {
cc.LongHoController_789.getInstance().moveChipView.moveChipWithStartPos(e, t);
},
initChipsBet: function(e) {
cc.LongHoController_789.getInstance().moveChipView.initChipsBet(e);
},
setDefaultCardBurn: function() {
this.nodeCardBurn.active = !0;
this.spriteCardBurn.getComponent(cc.Sprite).spriteFrame = this.spriteCardDefault;
},
moveCardBurnToBox: function() {
var e = this, t = cc.LongHoController_789.getInstance().dragonTigerCardSlide;
cc.director.getScheduler().schedule(function() {
t.playBurnAnimation("down");
t.playBoxAnimation("redeal");
}, e, 0, 0, 0, !1);
cc.director.getScheduler().schedule(function() {
t.playBurnAnimation("empty");
t.burnStopAnimation();
try {
e.cardBackDragon.destroy();
e.cardBackTiger.destroy();
} catch (e) {}
}, e, 0, 0, 1, !1);
},
showCardResult: function(e) {
try {
var t = e.Result.DragonCard, i = e.Result.TigerCard;
if (!this.cardBackDragon || "" == this.cardBackDragon._name) {
this.cardBackDragon = this.createNodeCardResult(cc.LongHoBetSide_789.RONG);
this.cardBackTiger = this.createNodeCardResult(cc.LongHoBetSide_789.HO);
}
this.runAnimationCard(this.cardBackDragon.getComponent(sp.Skeleton), this.listAnimationOpenCard[t - 1]);
this.runAnimationCard(this.cardBackTiger.getComponent(sp.Skeleton), this.listAnimationOpenCard[i - 1]);
} catch (e) {}
},
listCardBack: function() {
return [ this.cardBackBurn, this.cardBackDragon, this.cardBackTiger ];
},
destroyCardBack: function() {
try {
this.listCardBack().map(function(e) {
return e.destroy();
});
} catch (e) {}
},
activeCardBack: function(e) {
try {
this.listCardBack().map(function(t) {
return t.active = e;
});
} catch (e) {}
},
moveCardBackToCardBurn: function() {
if (!this.moveCardToBurn) {
this.moveCardToBurn = !0;
if (this.cardBackDragon) {
var e = this;
cc.director.getScheduler().schedule(function() {
if ("" != e.cardBackDragon._name) {
e.cardBackDragon.active = !1;
e.runAnimationCard(e.cardBackDragon.getComponent(sp.Skeleton), "00back");
e.cardMoveTo(e.cardBackDragon, e.nodeCardBurn.position, 1);
e.cardBackDragon.getComponent(cc.Animation).stop("card-scale");
var t = cc.scaleTo(1, .6);
e.cardBackDragon.runAction(t);
e.cardBackDragon.getComponent(cc.Animation).stop("card-scale");
}
}, this, 0, 0, 0, !1);
cc.director.getScheduler().schedule(function() {
if ("" != e.cardBackTiger._name) {
e.cardBackTiger.active = !1;
e.runAnimationCard(e.cardBackTiger.getComponent(sp.Skeleton), "00back");
e.cardMoveTo(e.cardBackTiger, e.nodeCardBurn.position, 1);
var t = cc.scaleTo(1, .6);
e.cardBackTiger.runAction(t);
e.cardBackTiger.getComponent(cc.Animation).stop("card-scale");
}
}, this, .3, 0, 0, !1);
cc.director.getScheduler().schedule(function() {
cc.LongHoController_789.getInstance().dragonTigerCardSlide.playBurnAnimation("up4");
}, this, .6, 0, 0, !1);
}
}
},
runAnimationCard: function(e, t) {
e.clearTracks();
e.setAnimation(0, t, !1);
},
mapAnimationCardName: function() {
for (var e = [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "J", "Q", "K" ], t = [ "b", "t", "r", "c" ], i = [], o = 0; o < t.length; o++) for (var n = 0; n < e.length; n++) i.push(e[n] + t[o]);
return i;
},
activeNodeCard: function(e) {
this.nodeCardRong.active = e;
this.nodeCardHo.active = e;
},
updateTimer: function(e) {
if (!(e < 1)) {
var t = e, i = cc.Color.GREEN;
switch (this.currentState) {
case cc.LongHoState_789.BETTING:
case cc.LongHoState_789.END_BETTING:
this.activeNodeTime(!0);
e <= 3 && (i = cc.Color.RED);
this.lbTimer.node.color = i;
this.lbTimer.string = t;
this.lbTimer.node.parent.active = !0;
this.lbTimerPrepare.node.parent.active = !1;
break;

case cc.LongHoState_789.RESULT:
this.activeNodeTime(!1);
i = cc.Color.WHITE;
this.lbTimer.node.parent.active = !1;
this.lbTimerPrepare.node.parent.active = !0;
this.lbTimerPrepare.string = t;
break;

case cc.LongHoState_789.PREPARE_NEW_SESSION:
this.activeNodeTime(!1);
i = cc.Color.WHITE;
this.lbTimerPrepare.node.parent.active = !0;
this.lbTimerPrepare.string = t;
this.lbTimer.node.parent.active = !1;
}
}
},
activeNodeTime: function(e) {
this.lbTimer.node.parent.parent.active = e;
},
disconnectAndLogout: function() {
this.longHoHub && this.longHoHub.disconnect();
this.lastTimeReconnect = new Date().getTime();
},
connectHubDragonTiger: function() {
var e = {
url: "https://dragontiger." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
hub: "dragonTigerHub",
gate: "sieuno1.club"
};
cc.systemEvent.off("OnDragonTigerToWebSocKet", this.onResponeData, this);
cc.systemEvent.on("OnDragonTigerToWebSocKet", this.onResponeData, this);
this.longHoHub = new lngui.GateSignalR();
this.longHoHub.connect("OnDragonTigerToWebSocKet", e.url, e.hub, e.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
},
reconnect: function() {
this.lastTimeReconnect = new Date().getTime();
this.longHoHub.connect(this, cc.HubName.DragonTigerHub, this.connectionToken, !0);
},
sendRequestOnHub: function(e, t, i) {
console.log(e, t, i);
switch (e) {
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
this.sendSignalR("Bet", [ t, i ]);
break;

case cc.MethodHubName.REGISTER_LEAVE_ROOM:
this.sendSignalR("RegisterLeaveRoom", []);
break;

case cc.MethodHubName.UNREGISTER_LEAVE_ROOM:
this.sendSignalR("UnregisterLeaveRoom", []);
break;

case cc.MethodHubName.SEND_MESSAGE:
this.longHoHub.sendRoomMessage(t);
}
},
sendSignalR: function(e, t) {
lngui.ZLog.log("SendSocket==========================>" + e + "==data==" + JSON.stringify(t));
t = t || [];
this.longHoHub && this.longHoHub.send(e, t);
},
onResponeData: function(e) {
e.s && "error" == e.s || this.onHubMessage(e);
},
connectSuccess: function() {
console.log("connectSuccess =========>");
this.sendRequestOnHub(cc.MethodHubName.ENTER_LOBBY);
},
onSlotsNegotiateResponse: function(e) {
this.connectionToken = e.ConnectionToken;
this.longHoHub = new cc.Hub();
this.longHoHub.connect(this, cc.HubName.DragonTigerHub, e.ConnectionToken);
},
onHubMessage: function(e) {
var t = this;
if (("open" == e.s || "reconnect" == e.s || "1" == e.s) && !this.isConnect) {
this.isConnect = !0;
this.connectSuccess();
}
if (void 0 !== e.M && e.M.length > 0) {
var i = this;
e.M.map(function(e) {
switch (e.M) {
case cc.MethodHubOnName.PLAYER_LEAVE:
cc.LongHoController_789.getInstance().unRegisterAllPlayer();
t.playerLeave(e.A);
break;

case cc.MethodHubOnName.JOIN_GAME:
cc.LongHoController_789.getInstance().updatePlayerInfor(e.A[0]);
break;

case cc.MethodHubOnName.SESSION_INFO:
var o = e.A[0];
t.updateInfo(o);
cc.LongHoController_789.getInstance().setSID(o.SessionID);
break;

case cc.MethodHubOnName.GAME_HISTORY:
t.dragonTigerController.updateGameHistoryUI(e.A[0]);
break;

case cc.MethodHubOnName.BET_OF_ACCOUNT:
t.dragonTigerController.updateBetInfoFromServer(e.A[0]);
break;

case cc.MethodHubOnName.BET_SUCCESS:
o = e.A[0];
cc.PopupController.getInstance().hideBusy();
t.isPlaying = !0;
var n = t.dragonTigerController.getBetLogSession();
t.dragonTigerController.setBetLog({
sessionID: n,
value: e.A[0].BetValue,
betSide: e.A[0].BetSide
});
lngui.GameCoreManager.instance.updateTotalGold(e.A[1]);
t.dragonTigerController.updateTotalBetValue(e.A[0].BetSide, e.A[0].SumaryBet);
t.dragonTigerController.updateBalanceCurrPlayer(e.A[1]);
t.updateMoveChip([ e.A[0].BetValue, e.A[0].BetSide ], !0);
break;

case cc.MethodHubOnName.WIN_RESULT:
o = e.A[0];
try {
setTimeout(function() {
lngui.GameCoreManager.instance.updateTotalGold(o.Balance);
cc.LongHoController_789.getInstance().resetBetInfo();
cc.LongHoController_789.getInstance().winResult(o);
}, 2500);
} catch (e) {}
break;

case cc.MethodHubOnName.WIN_RESULT_VIP:
if (e.A.length > 0) try {
setTimeout(function() {
cc.LongHoController_789.getInstance().winResultVip(e.A[0]);
}, 2500);
} catch (e) {}
break;

case cc.MethodHubOnName.MESSAGE:
(o = e.A[0]).Description ? cc.PopupController.getInstance().showMessage(o.Description) : o.Message ? cc.PopupController.getInstance().showMessage(o.Message) : cc.PopupController.getInstance().showMessage(o);
break;

case cc.MethodHubOnName.TOTAL_WIN_MONEY:
var s = e.A[0];
try {
cc.LongHoController_789.getInstance().moveChipView.chipMoveToSideWin(i.currentResult);
setTimeout(function() {
try {
cc.LongHoController_789.getInstance().moveChipView.chipMoveToCoin(i.currentResult, !0, 0);
} catch (e) {}
}, 1500);
} catch (e) {}
parseInt(s) > 0 && setTimeout(function() {
try {
i.lbTotalUserWin.string = "+" + cc.Tool.getInstance().formatNumber(s);
i.lbTotalUserWin.node.parent.getComponent(cc.Animation).play("total-money-animation");
} catch (e) {}
}, 2e3);
break;

case cc.MethodHubOnName.REJOIN:
var a = e.A[0];
if (a.length > 0) {
var c = t;
cc.AudioController.getInstance().playSound(cc.LongHoAudioTypes_789.BET);
a.map(function(e) {
0 != e.length && e.map(function(e) {
var t = [ e.BetValue, e.BetSide ];
c.initChipsBet(t);
});
});
}
break;

case cc.MethodHubOnName.BET_SESSION:
if (e.A[0].length > 0) {
var r = t;
cc.AudioController.getInstance().playSound(cc.LongHoAudioTypes_789.BET);
e.A[0].map(function(e) {
0 != e.length && e.map(function(e) {
var t = [ e.BetValue, e.BetSide, e.AccountID ];
r.initChipsBet(t);
});
});
}
break;

case cc.MethodHubOnName.BET_USER:
if ((o = e.A)[2] != t.accountId) {
t.updateMoveChip(o, !1);
cc.LongHoController_789.getInstance().updatePlayerBalance(o);
}
break;

case cc.MethodHubOnName.SUMMARY_PLAYER:
t.updateTotalUser(e.A[0]);
break;

case cc.MethodHubOnName.VIP_PLAYERS:
var u = e.A[0];
u.length > 0 && cc.LongHoController_789.getInstance().updatePlayersUI(u);
break;

case cc.MethodHubOnName.OTHER_DEVICE:
cc.PopupController.getInstance().showPopupOtherDevice(e.A[1], cc.GameId.DRAGON_TIGER);
break;

case cc.MethodHubOnName.RECEIVE_MESSAGE:
cc.ChatRoomController.getInstance().addChatContent(e.A);
cc.LongHoController_789.getInstance().playerShowBubbleChat(e.A);
}
});
} else if (e.R && e.R.AccountID) {
this.sendRequestOnHub(cc.MethodHubName.PLAY_NOW);
cc.PopupController.getInstance().hideBusy();
} else e.I;
},
playerLeave: function(e) {
if (e[0] === cc.LoginController.getInstance().getUserId()) {
var t = e[1];
this.backClicked();
cc.PopupController.getInstance().showMessage(t);
}
},
onHubOpen: function() {},
onHubClose: function() {
new Date().getTime() - this.lastTimeReconnect >= 1e3 * i.RECONNECT_TIME ? this.reconnect() : cc.director.getScheduler().schedule(this.reconnect, this, i.RECONNECT_TIME, 0, 0, !1);
},
onHubError: function() {
cc.PopupController.getInstance().hideBusy();
},
helpClicked: function() {
cc.LongHoPopupController_789.getInstance().createHelpView();
},
historyClicked: function() {
cc.LongHoPopupController_789.getInstance().createHistoryView();
},
topClicked: function() {
cc.LongHoPopupController_789.getInstance().createTopView();
},
graphClicked: function() {
cc.LongHoPopupController_789.getInstance().createGraphView();
},
backClicked: function() {
lngui.UIScreenManager.instance.popToRootScreen();
},
cardMoveTo: function(e, t, i) {
var o = cc.moveTo(i, t);
o.easing(cc.easeInOut(3));
e.runAction(o);
var n = cc.scaleTo(i, 1);
e.runAction(n);
var s = cc.scaleTo(i, 1.5, 1.5);
e.runAction(s);
var a = cc.rotateTo(i, 0);
e.runAction(a);
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
"789.NodeDepth": [ function(e, t) {
"use strict";
cc._RF.push(t, "6078cLunANPbJHf9JYKWkEY", "789.NodeDepth");
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
}, {} ]
}, {}, [ "789.LongHoAudioTypes", "789.LongHoAudios", "789.LongHoBetView", "789.LongHoButtonBet", "789.LongHoButtonSideBet", "789.LongHoController", "789.LongHoInfoView", "789.LongHoPopupView", "789.LongHoResultEffectView", "789.LongHoSessionHistoryView", "789.LongHoSettingRoomView", "789.LongHoView", "789.LongHoCardSlide", "789.LongHoChatItem", "789.LongHoMoveChip", "789.LongHoGetBigWinnerCommand", "789.LongHoGetHistoryCommand", "789.LongHoGetSessionInfoCommand", "789.LongHoGetSoiCauCommand", "789.LongHoGroupUserCommand", "789.LongHoBetSide", "789.LongHoState", "789.NodeDepth", "789.LongHoGroupItem", "789.LongHoGroupUserListView", "789.LongHoGroupUserView", "789.LongHoPlayer", "789.LongHoPopupController", "789.LongHoGraph100View", "789.LongHoGraphCard3View", "789.LongHoGraphCatCauView", "789.LongHoGraphSumView", "789.LongHoGraphView", "789.LongHoHelpView", "789.LongHoHistoryItem", "789.LongHoHistoryListView", "789.LongHoHistoryView", "789.LongHoSessionDetailData", "789.LongHoSessionDetailItem", "789.LongHoSessionDetailListView", "789.LongHoSessionDetailView", "789.LongHoTopItem", "789.LongHoTopListView", "789.LongHoTopView", "789.LongHoShowCard" ]);