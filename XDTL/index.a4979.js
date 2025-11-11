window.__require = function t(e, n, i) {
function o(c, a) {
if (!n[c]) {
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
var u = n[c] = {
exports: {}
};
e[c][0].call(u.exports, function(t) {
return o(e[c][1][t] || t);
}, u, u.exports, t, e, n, i);
}
return n[c].exports;
}
for (var s = "function" == typeof __require && __require, c = 0; c < i.length; c++) o(i[c]);
return o;
}({
PlayerData: [ function(t, e) {
"use strict";
cc._RF.push(e, "10a03SmC5xKFY1bS/O+sxnd", "PlayerData");
var n = [ {
accID: 0,
balance: 0,
avatarId: 1,
indexBet: 0,
position: cc.v2(-590, -340),
chips: []
}, {
accID: 0,
balance: 500,
avatarId: 3,
indexBet: 0,
position: cc.v2(-440, -250),
chips: []
}, {
accID: 0,
balance: 1500,
avatarId: 2,
indexBet: 0,
position: cc.v2(-580, -100),
chips: []
}, {
accID: 0,
balance: 2e3,
avatarId: 1,
indexBet: 0,
position: cc.v2(-500, 52),
chips: []
}, {
accID: 0,
balance: 1e4,
avatarId: 6,
indexBet: 0,
position: cc.v2(470, 60),
chips: []
}, {
accID: 0,
balance: 5e3,
avatarId: 5,
indexBet: 0,
position: cc.v2(570, -50),
chips: []
}, {
accID: 0,
balance: 9e3,
avatarId: 4,
indexBet: 0,
position: cc.v2(530, -190),
chips: []
} ];
e.exports = {
players: n
};
cc._RF.pop();
}, {} ],
SlotsHistoryItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "8c901MTPoVMtIT1000pkf7C", "SlotsHistoryItem");
(function() {
cc.SlotsHistoryItem = cc.Class({
extends: cc.Component,
properties: {
lbSessionID: cc.Label,
lbTime: cc.Label,
lbBet: cc.Label,
lbWin: cc.Label,
jackpotColor: cc.Color,
bigWinColor: cc.Color
},
updateItem: function(t, e) {
this.lbSessionID.string = "#" + t.SpinID;
this.lbTime.string = cc.Tool.getInstance().convertUTCTime(t.CreatedDate);
this.lbBet.string = cc.Tool.getInstance().formatNumber(t.TotalBetValue);
this.lbWin.string = cc.Tool.getInstance().formatNumber(t.TotalPrizeValue);
this.item = t;
this.itemID = e;
},
openDetailClicked: function() {
cc.SlotsHistoryController.getInstance().setSessionDetailData(this.item);
cc.MainController.getInstance().createSessionDetailView();
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXAssets: [ function(t, e) {
"use strict";
cc._RF.push(e, "a9e52Aa5P9MIq9DZ/P5xyek", "XXAssets");
(function() {
cc.XXAssets = cc.Class({
extends: cc.Component,
properties: {
sfChips: [ cc.SpriteFrame ],
sfNans: [ cc.SpriteFrame ],
sfAvatarDef: cc.SpriteFrame,
sfBacks: [ cc.SpriteFrame ],
sfDots: [ cc.SpriteFrame ],
bmfWin: cc.BitmapFont,
bmfLose: cc.BitmapFont
},
onLoad: function() {
cc.XXController.getInstance().setXXAssets(this);
},
getWinFont: function() {
return this.bmfWin;
},
getLoseFont: function() {
return this.bmfLose;
},
getChips: function() {
return this.sfChips;
},
getNans: function() {
return this.sfNans;
},
getAvatarDef: function() {
return this.sfAvatarDef;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXChipItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "175b2bygdhKMaxPsRzSaqtz", "XXChipItem");
(function() {
cc.XXChipItem = cc.Class({
extends: cc.Component,
properties: {
spriteChip: cc.Sprite
},
onLoad: function() {
this.duration = .3;
this.betIndex = -1;
this.playerId = 0;
this.position = null;
},
setChip: function(t) {
this.chipIndex = t;
this.spriteChip.spriteFrame = cc.XXController.getInstance().getChips()[t];
},
moveTo: function(t) {
this.node.opacity = 100;
var e = cc.moveTo(this.duration, t);
e.easing(cc.easeOut(1));
var n = cc.callFunc(this.moveFinished, null, this.node);
this.node.runAction(cc.sequence(e, n));
},
setPosition: function(t) {
this.node.position = t;
},
moveToEnd: function(t) {
if (this.node) {
this.node.opacity = 100;
var e = cc.moveTo(.5, t);
e.easing(cc.easeOut(1));
var n = cc.callFunc(this.moveToEndFinished, null, this.node), i = cc.fadeOut();
this.node.runAction(cc.sequence(e, i, n));
}
},
moveFinished: function(t) {
t.opacity = 255;
},
moveToEndFinished: function(t) {
try {
setTimeout(function() {
cc.XXController.getInstance().putToPool(t);
}.bind(this), 500);
} catch (t) {}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXChipPool: [ function(t, e) {
"use strict";
cc._RF.push(e, "24b98EDPEhGSIEI/3GsBrAd", "XXChipPool");
(function() {
cc.XXChipPool = cc.Class({
extends: cc.Component,
properties: {
prefab: cc.Prefab
},
onLoad: function() {
this.createNodePool();
cc.XXController.getInstance().setXXChipPool(this);
},
createNodePool: function() {
this.nodePool = new cc.NodePool();
for (var t = 0; t < 10; ++t) this.nodePool.put(cc.instantiate(this.prefab));
},
putToPool: function(t) {
try {
this.nodePool && this.nodePool.put(t);
} catch (t) {}
},
clearPool: function() {
this.nodePool && this.nodePool.clear();
},
createChip: function() {
return this.nodePool.size() > 0 ? this.nodePool.get() : cc.instantiate(this.prefab);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXConnectionStatus: [ function(t, e) {
"use strict";
cc._RF.push(e, "a2ff1xmiwVGRJbdJnDtQXLV", "XXConnectionStatus");
(function() {
cc.XXConnectionStatus = cc.Enum({
DISCONNECTED: 0,
CONNECTED: 1,
REGISTER_LEAVE_GAME: 2
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXController: [ function(t, e) {
"use strict";
cc._RF.push(e, "bf168KZ9PZDf4G947Ekmdnw", "XXController");
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
e.prototype.setXXView = function(t) {
return this.xxView = t;
};
e.prototype.setXXSoiCauView = function(t) {
return this.xxSoiCauView = t;
};
e.prototype.setXXAssets = function(t) {
return this.xxAssets = t;
};
e.prototype.setXXChipPool = function(t) {
return this.xxChipPool = t;
};
e.prototype.setXXInfoView = function(t) {
return this.xxInfoView = t;
};
e.prototype.setXXInputView = function(t) {
return this.xxInputView = t;
};
e.prototype.setXXResultView = function(t) {
return this.xxResultView = t;
};
e.prototype.setIsNan = function(t) {
return this.isNan = t;
};
e.prototype.getIsNan = function() {
return this.isNan;
};
e.prototype.setLastBetData = function(t) {
return this.lastBetData = t;
};
e.prototype.getLastBetData = function() {
return this.lastBetData;
};
e.prototype.setSID = function(t) {
return this.sID = t;
};
e.prototype.getSID = function() {
return this.sID;
};
e.prototype.getAssets = function() {
return this.xxAssets;
};
e.prototype.getWinFont = function() {
return this.xxAssets.getWinFont();
};
e.prototype.getLoseFont = function() {
return this.xxAssets.getLoseFont();
};
e.prototype.getChips = function() {
return this.xxAssets.getChips();
};
e.prototype.getNans = function() {
return this.xxAssets.getNans();
};
e.prototype.getAvatarDef = function() {
return this.xxAssets.getAvatarDef();
};
e.prototype.sendRequestOnHub = function(t, e, n) {
if (this.xxView) return this.xxView.sendRequestOnHub(t, e, n);
};
e.prototype.joinGame = function(t) {
return this.xxInfoView.joinGame(t);
};
e.prototype.playerJoin = function(t) {
return this.xxInfoView.playerJoin(t);
};
e.prototype.playerLeave = function(t) {
this.xxInfoView.playerLeave(t);
this.xxView.playerLeave(t);
};
e.prototype.updateConnectionStatus = function(t) {
return this.xxInfoView.updateConnectionStatus(t);
};
e.prototype.updatePlayerStatus = function(t) {
return this.xxInfoView.updatePlayerStatus(t);
};
e.prototype.updateInfoCurrPlayer = function(t) {
return this.xxInfoView.updateInfoCurrPlayer(t);
};
e.prototype.updateChip = function(t, e) {
t === lngui.UserManager.instance.mainUserInfo.AccountID && (lngui.UserManager.instance.mainUserInfo.Money = e);
return this.xxInfoView.updateChip(t, e);
};
e.prototype.getPositions = function() {
return this.xxInfoView.getPositions();
};
e.prototype.updateSessionId = function(t) {
return this.xxInfoView.updateSessionId(t);
};
e.prototype.updateInfo = function(t, e, n) {
return this.xxInfoView.updateInfo(t, e, n);
};
e.prototype.getIndexUIBetByAccID = function(t) {
return this.xxInfoView.getIndexUIBetByAccID(t);
};
e.prototype.getIndexUIBetByPosition = function(t) {
return this.xxInfoView.getIndexUIBetByPosition(t);
};
e.prototype.getTime = function() {
return this.xxInfoView.getTime();
};
e.prototype.playerShowBubbleChat = function(t) {
return this.xxInfoView.playerShowBubbleChat(t);
};
e.prototype.registerPlayer = function(t) {
return this.xxInfoView.registerPlayer(t);
};
e.prototype.unRegisterPlayer = function(t) {
return this.xxInfoView.unRegisterPlayer(t);
};
e.prototype.resetPlayersResultUI = function() {
return this.xxInfoView.resetPlayersResultUI();
};
e.prototype.totalUserWin = function(t) {
return this.xxInfoView.totalUserWin(t);
};
e.prototype.playerResultUI = function(t, e, n) {
return this.xxInfoView.playerResultUI(t, e, n);
};
e.prototype.summaryPlayer = function(t) {
return this.xxInfoView.summaryPlayer(t);
};
e.prototype.vipPlayer = function(t) {
return this.xxInfoView.vipPlayer(t);
};
e.prototype.winResultVip = function(t) {
return this.xxInfoView.winResultVip(t);
};
e.prototype.winResult = function(t) {
return this.xxInfoView.winResult(t);
};
e.prototype.updateWinResultRoomIdOrther = function(t) {
return this.xxInfoView.updateWinResultRoomIdOrther(t);
};
e.prototype.updateTimer = function(t) {
return this.xxInfoView.updateTimer(t);
};
e.prototype.onDisableProgress = function() {
return this.xxInfoView.onDisableProgress();
};
e.prototype.updateRoomName = function(t) {
return this.xxInfoView.updateRoomName(t);
}, e.prototype.playerBet = function(t) {
return this.xxInputView.playerBet(t);
};
e.prototype.updateInput = function(t) {
return this.xxInputView.updateInput(t);
};
e.prototype.getGateChips = function() {
return this.xxInputView.getGateChips();
};
e.prototype.showLastInput = function(t) {
return this.xxInputView.showLastInput(t);
};
e.prototype.getPlayerBets = function() {
return this.xxInputView.getPlayerBets();
};
e.prototype.playFxDealerPay = function(t) {
return this.xxInputView.playFxDealerPay(t);
};
e.prototype.initGateChip = function() {
return this.xxInputView.initGateChip();
};
e.prototype.playFxPay = function(t) {
return this.xxInputView.playFxPay(t);
};
e.prototype.playFxLost = function(t) {
return this.xxInputView.playFxLost(t);
};
e.prototype.playFxUserBet = function(t, e) {
return this.xxInputView.playFxUserBet(t, e);
};
e.prototype.resetInput = function() {
return this.xxInputView.resetInput();
};
e.prototype.activeAllButtonBet = function(t) {
return this.xxInputView.activeAllButtonBet(t);
};
e.prototype.clearAllChip = function() {
return this.xxInputView.clearAllChip();
};
e.prototype.updateResult = function(t, e, n, i, o) {
return this.xxResultView.updateResult(t, e, n, i, o);
};
e.prototype.draw = function(t) {
return this.xxSoiCauView.draw(t);
};
e.prototype.resetDraw = function() {
return this.xxSoiCauView.resetDraw();
};
e.prototype.createChip = function() {
return this.xxChipPool.createChip();
};
e.prototype.putToPool = function(t) {
return this.xxChipPool.putToPool(t);
};
e.prototype.clearPool = function() {
return this.xxChipPool.clearPool();
};
e.prototype.updatePositionPlayerUI = function(t) {
return this.positionsUI = t;
};
e.prototype.getPositionsUI = function() {
return this.positionsUI;
};
e.prototype.initLogBet = function() {
return this.logBet = [];
};
e.prototype.setLogBet = function(t) {
return this.logBet.push(t);
};
e.prototype.getLogBet = function() {
return this.logBet;
};
e.prototype.resetAllInputView = function() {
this.xxInputView.resetAllInputView();
};
e.prototype.getRoomId = function() {
return this.xxView.getRoomId();
};
e.prototype.setMiniGame = function(t) {
return this.xxMiniGame = t;
};
e.prototype.initMiniGame = function() {
return this.xxMiniGame.initMiniGame();
};
e.prototype.setSpin = function(t) {
return this.xxMiniGame.setSpin(t);
};
e.prototype.runAnimationSpin = function(t, e) {
return this.xxMiniGame.runAnimationSpin(t, e);
};
e.prototype.clearMiniGame = function() {
return this.xxMiniGame.clearMiniGame();
};
e.prototype.updateJackpot = function(t) {
return this.xxMiniGame.updateJackpot(t);
};
e.prototype.showEffectNohu = function() {
return this.xxMiniGame.showEffectNohu();
};
return e;
}();
cc.XXController = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
XXFX: [ function(t, e) {
"use strict";
cc._RF.push(e, "d56450hcCNBTYUsRgavYvcM", "XXFX");
(function() {
cc.XX_FX = cc.Enum({
LOSE: 0,
DEALER_PAY: 1,
PAY: 3
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXGate: [ function(t, e) {
"use strict";
cc._RF.push(e, "7cfb3LomytMrYRVNKw0fYN8", "XXGate");
cc.XXGate = {
ODD: 1,
THREE_UP: 2,
THREE_DOWN: 3,
EVEN: 4,
FOUR_UP: 5,
FOUR_DOWN: 6,
TWO_UP_TWO_DOWN: 7
};
cc._RF.pop();
}, {} ],
XXGetBigWinnerCommand: [ function(t, e) {
"use strict";
cc._RF.push(e, "b6fcf/agndBwKEHR92lKv1/", "XXGetBigWinnerCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t) {
return cc.ServerConnector.getInstance().sendRequest(cc.SubdomainName.XOC_DIA_TU_LINH, "api/XocDiaTuLinh/GetBigWinner", function(e) {
var n = JSON.parse(e);
return t.onXXGetBigWinnerResponse(n);
});
};
return t;
}();
cc.XXGetBigWinnerCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
XXGroupItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "a0c4bGL/EVAPawCqpReXdn4", "XXGroupItem");
(function() {
cc.XXGroupItem = cc.Class({
extends: cc.BacaratGroupItem,
properties: {}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXGroupUserListView: [ function(t, e) {
"use strict";
cc._RF.push(e, "1595coqhWxIJrOhw8dqeVU7", "XXGroupUserListView");
(function() {
cc.XXLiveBGGroupUserListView = cc.Class({
extends: cc.Component,
properties: {
itemTemplate: cc.Node,
scrollView: cc.ScrollView,
spawnCount: 0,
spacing: 0,
bufferZone: 0
},
onLoad: function() {
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
for (var n = Math.min(this.spawnCount, e), i = 0; i < n; ++i) {
var o = cc.instantiate(this.itemTemplate);
this.content.addChild(o);
o.setPosition(0, -o.height * (.5 + i) - this.spacing * (i + 1));
o.getComponent(cc.XXGroupItem).updateItem(this.messages[i], i);
this.items.push(o);
}
this.rootContentY = this.content.y;
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
update: function(t) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.items, n = this.bufferZone, i = this.scrollView.content.y < this.lastContentPosY, o = (this.itemTemplate.height + this.spacing) * e.length, s = 0; s < e.length; ++s) {
var c = this.getPositionInView(e[s]);
if (i) {
if (c.y < -n && e[s].y + o < 0) {
e[s].y = e[s].y + o;
var a = e[s].getComponent(cc.XXGroupItem), r = a.itemID - e.length;
a.updateItem(this.messages[r], r);
}
} else if (c.y > n && e[s].y - o > -this.content.height) {
e[s].y = e[s].y - o;
r = (a = e[s].getComponent(cc.XXGroupItem)).itemID + e.length;
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
XXGroupUserView: [ function(t, e) {
"use strict";
cc._RF.push(e, "3b68fjyGyJLUYwtnqroB6EZ", "XXGroupUserView");
(function() {
cc.XXGroupUserView = cc.Class({
extends: cc.Component,
properties: {
groupUserListView: cc.XXLiveBGGroupUserListView
},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
this.node.zIndex = 999;
},
onEnable: function() {
var t = this;
cc.director.getScheduler().schedule(function() {
t.getGroupUser();
}, this, 1, 0, .2, !1);
this.animation.play("openPopup");
},
getGroupUser: function() {
new cc.XXGroupUserCommand().execute(this);
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
cc.XXPopupController.getInstance().destroyGroupUserView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXHelpView: [ function(t, e) {
"use strict";
cc._RF.push(e, "5ef69MihgFG7ZSQ76C/Hm2q", "XXHelpView");
(function() {
cc.XXHelpView = cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
this.node.zIndex = 99;
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
console.log("click close");
cc.XXPopupController.getInstance().destroyHelpView();
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXHistoryCommand: [ function(t, e) {
"use strict";
cc._RF.push(e, "50580TVt21MXKr4iRi7w60X", "XXHistoryCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t) {
return cc.ServerConnector.getInstance().sendRequest(cc.SubdomainName.XOC_DIA_TU_LINH, "api/XocDiaTuLinh/GetHistory", function(e) {
var n = JSON.parse(e);
return t.onXXGetHistoryResponse(n);
});
};
return t;
}();
cc.XXGetHistoryCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
XXHistoryItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "fd16083QSxDaILdLOvlNKYC", "XXHistoryItem");
(function() {
cc.XXHistoryItem = cc.Class({
extends: cc.Component,
properties: {
lbSession: cc.Label,
lbTime: cc.Label,
lbSide: cc.Label,
lbResult: cc.Label,
lbBet: cc.Label,
lbWin: cc.Label
},
updateItem: function(t, e) {
this.lbSession.string = "#" + t.SessionID;
this.lbTime.string = cc.Tool.getInstance().convertUTCTime(t.CreateTime);
var n = "";
switch (parseInt(t.GateID)) {
case cc.XXGate.ODD:
n = "LẺ";
break;

case cc.XXGate.THREE_UP:
n = "LẺ (3 TRẮNG)";
break;

case cc.XXGate.THREE_DOWN:
n = "LẺ (3 DỎ)";
break;

case cc.XXGate.EVEN:
n = "CHẴN";
break;

case cc.XXGate.FOUR_UP:
n = "CHẴN (4 TRẮNG)";
break;

case cc.XXGate.FOUR_DOWN:
n = "CHẴN (4 DỎ)";
break;

case cc.XXGate.TWO_UP_TWO_DOWN:
n = "2 ĐỎ 2 TRẮNG";
}
this.lbSide.string = n;
var i = "", o = t.GatesData;
if (o) {
var s = o.split(","), c = s.includes(cc.XXGate.ODD + "") ? "LẺ" : "CHẴN";
if (1 == s.length) i = "CHẮN (2 ĐỎ, 2 TRẮNG)"; else {
s.map(function(t) {
var e = "";
switch (parseInt(t)) {
case cc.XXGate.THREE_UP:
e = " (3 TRẮNG, 1 ĐPR)";
break;

case cc.XXGate.THREE_DOWN:
e = " (3 ĐPR, 1 TRẮNG)";
break;

case cc.XXGate.FOUR_UP:
e = " (4 TRẮNG)";
break;

case cc.XXGate.FOUR_DOWN:
e = " (4 ĐỎ)";
}
c += e;
});
i += c;
}
}
this.lbResult.string = i;
this.lbBet.string = cc.Tool.getInstance().formatNumber(t.Bet);
this.lbWin.string = cc.Tool.getInstance().formatNumber(t.Award);
this.item = t;
this.itemID = e;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXHistoryListView: [ function(t, e) {
"use strict";
cc._RF.push(e, "3424fflYk9HPq3+Lx5PqbAS", "XXHistoryListView");
(function() {
cc.XXHistoryListView = cc.Class({
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
for (var n = Math.min(this.spawnCount, e), i = 0; i < n; ++i) {
var o = cc.instantiate(this.itemTemplate);
this.content.addChild(o);
o.setPosition(0, -o.height * (.5 + i) - this.spacing * (i + 1));
o.getComponent(cc.XXHistoryItem).updateItem(this.messages[i], i);
this.items.push(o);
}
this.rootContentY = this.content.y;
},
update: function(t) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.items, n = this.bufferZone, i = this.scrollView.content.y < this.lastContentPosY, o = (this.itemTemplate.height + this.spacing) * e.length, s = 0; s < e.length; ++s) {
var c = this.getPositionInView(e[s]);
if (i) {
if (c.y < -n && e[s].y + o < 0) {
e[s].y = e[s].y + o;
var a = e[s].getComponent(cc.XXHistoryItem), r = a.itemID - e.length;
a.updateItem(this.messages[r], r);
}
} else if (c.y > n && e[s].y - o > -this.content.height) {
e[s].y = e[s].y - o;
r = (a = e[s].getComponent(cc.XXHistoryItem)).itemID + e.length;
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
XXHistoryView: [ function(t, e) {
"use strict";
cc._RF.push(e, "bc433nzD+9Lpofw02nvS9AQ", "XXHistoryView");
(function() {
cc.XXHistoryView = cc.Class({
extends: cc.Component,
properties: {
XXHistoryListView: cc.XXHistoryListView
},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
this.node.zIndex = 9999;
},
onEnable: function() {
var t = this;
cc.director.getScheduler().schedule(function() {
t.getHistory();
}, this, 1, 0, .2, !1);
this.animation.play("openPopup");
},
getHistory: function() {
console.log("getHistory =====================>");
new cc.XXGetHistoryCommand().execute(this);
},
onXXGetHistoryResponse: function(t) {
var e = t;
if (null !== e && e.length > 0) {
this.XXHistoryListView.resetList();
this.XXHistoryListView.initialize(e);
}
},
closeClicked: function() {
this.XXHistoryListView.resetList();
this.animation.play("closePopup");
var t = this;
cc.director.getScheduler().schedule(function() {
t.animation.stop();
cc.XXPopupController.getInstance().destroyHistoryView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXInfoView: [ function(t, e) {
"use strict";
cc._RF.push(e, "6ce4al5+RxNhbewnDp3Aio6", "XXInfoView");
(function() {
cc.XXInfoView = cc.Class({
extends: cc.Component,
properties: {
lbSID: cc.Label,
lbRoomName: cc.Label,
lbTimer: cc.Label,
lbInfo: cc.Label,
progressTimer: cc.ProgressBar,
lbTotalUser: cc.Label,
lbTotalUserWin: cc.Label,
xxPlayers: [ cc.XXPlayer ],
lbJackpot: cc.Label
},
onLoad: function() {
this.interval = null;
this.timeBet = 54;
this.reset();
cc.XXController.getInstance().setXXInfoView(this);
this.maxPlayer = this.xxPlayers.length;
this.nodeBarTimer = this.progressTimer.node.children[0];
this.nodeProgressTimer = this.progressTimer.node.parent;
this.currPlayer = this.xxPlayers[0];
},
updateInfoCurrPlayer: function(t) {
this.currPlayer.registerPlayer(t);
},
updateProgress: function() {
this.currentState = null;
this.maxTimeBetting = 2e4;
this.timer = 0;
this.isLockTimerProgress = !1;
this.timerInterval = null;
this.nodeBarTimer.getComponent(cc.Sprite).fillRange = 0;
},
joinGame: function(t) {
this.positions = t.Positions;
this.countPlayer = 0;
this.positionsUI = [ 0, 0, 0, 0, 0, 0, 0 ];
this.onwerIndex = 0;
this.positionsUI[this.countPlayer] = lngui.UserManager.instance.mainUserInfo.AccountID;
this.countPlayer++;
for (var e = 0; e < this.maxPlayer; e++) if ((i = this.positions[e]) > 0 && i !== lngui.UserManager.instance.mainUserInfo.AccountID) {
this.positionsUI[this.countPlayer] = i;
this.countPlayer++;
}
var n = t.Players;
for (e = 0; e < this.maxPlayer; e++) {
var i;
(i = this.positions[e]) > 0 && this.registerPlayer(this.getIndexUIBetByAccID(i), n[i].Account);
}
cc.XXController.getInstance().updatePositionPlayerUI(this.positionsUI);
},
playerJoin: function(t) {
for (var e = 0; e < this.maxPlayer; e++) if (0 === this.positionsUI[e]) {
this.positionsUI[e] = t.Account.AccountID;
this.registerPlayer(e, t.Account);
break;
}
},
playerLeave: function(t) {
if (this.positionsUI) {
var e = t[0];
this.unRegisterPlayer(this.getIndexUIBetByAccID(e));
for (var n = -1, i = 0; i < this.maxPlayer; i++) if (e === this.positionsUI[i]) {
n = i;
break;
}
this.positionsUI[n] = 0;
}
},
updateConnectionStatus: function(t) {
if (this.positionsUI) {
var e = t[0], n = t[1];
this.xxPlayers[this.getIndexUIBetByAccID(e)].updateConnectionStatus(n);
n === cc.XXConnectionStatus.REGISTER_LEAVE_GAME && e === lngui.UserManager.instance.mainUserInfo.AccountID && lngui.UIScreenManager.instance.popToRootScreen();
}
},
updatePlayerStatus: function(t) {
this.positionsUI && this.xxPlayers[0].updatePlayerStatus(t);
},
summaryPlayer: function(t) {
this.lbTotalUser.string = t;
},
vipPlayer: function(t) {
var e = this, n = 0;
this.positionsUI = [ 0, 0, 0, 0, 0, 0, 0 ];
this.positionsUI[0] = lngui.UserManager.instance.mainUserInfo.AccountID;
n++;
t.map(function(t) {
if (t.AccountID != lngui.UserManager.instance.mainUserInfo.AccountID && n <= 6) {
e.positionsUI[n] = t.AccountID;
n++;
}
}, this);
this.positionsUI.forEach(function(e, n) {
if (0 != e) try {
var i = t.filter(function(t) {
return t.AccountID == e;
});
if (i.length > 0 && 0 != n) {
this.xxPlayers[n].registerPlayer(i[0].Account);
this.xxPlayers[n].resetPlayerResultUI();
}
} catch (t) {} else this.xxPlayers[n].unRegisterPlayer();
}, this);
cc.XXController.getInstance().updatePositionPlayerUI(this.positionsUI);
},
totalUserWin: function(t) {
this.lbTotalUserWin.string = "+" + cc.Tool.getInstance().formatNumber(t);
this.lbTotalUserWin.font = cc.XXController.getInstance().getWinFont();
this.lbTotalUserWin.node.active = !0;
this.lbTotalUserWin.node.scaleY = 0;
this.lbTotalUserWin.node.getComponent(cc.Animation).play("xxWin");
},
winResultVip: function(t) {
var e = this;
this.positionsUI && t.length > 0 && t.map(function(t) {
var n = e.positionsUI.indexOf(t.AccountID);
if (t.AccountID != lngui.UserManager.instance.mainUserInfo.AccountID && -1 != n) {
e.xxPlayers[n].playerResultUI(!0, t.Award);
e.xxPlayers[n].updateChip(t.Balance);
}
});
},
winResult: function(t) {
if (this.currPlayer) {
this.currPlayer.playerResultUI(!0, t.Award);
this.currPlayer.updateChip(t.Balance);
}
},
updateWinResultRoomIdOrther: function(t) {
this.currPlayer && this.currPlayer.updateChip(t.Balance);
},
updateChip: function(t, e) {
-1 != this.positionsUI.indexOf(t) && this.xxPlayers[this.getIndexUIBetByAccID(t)].updateChip(e);
},
getPositions: function() {
return this.positionsUI;
},
getIndexUIBetByAccID: function(t) {
var e = -1;
try {
for (var n = 0; n < this.maxPlayer; n++) if (this.positionsUI[n] === t) {
e = n;
break;
}
} catch (t) {}
return e;
},
getIndexUIBetByPosition: function(t) {
var e = t;
e > this.onwerIndex ? (e += this.onwerIndex) >= this.maxPlayer && (e -= this.maxPlayer - 1) : e < this.onwerIndex ? (e -= this.onwerIndex) < 0 && (e = this.maxPlayer + e) : e = 0;
return e;
},
resetPlayersResultUI: function() {
this.lbTotalUserWin.node.active = !1;
for (var t = 0; t < this.maxPlayer; t++) this.xxPlayers[t].resetPlayerResultUI();
},
playerResultUI: function(t, e, n) {
this.xxPlayers[t].playerResultUI(e, n);
},
registerPlayer: function(t, e) {
this.xxPlayers[t].registerPlayer(e);
},
unRegisterPlayer: function(t) {
this.xxPlayers[t].unRegisterPlayer();
},
playerShowBubbleChat: function(t) {
cc.ChatRoomController.getInstance().checkIsEmotion(t) ? this.xxPlayers.forEach(function(e) {
e.nickName === t[0] && e.showEmotion(cc.ChatRoomController.getInstance().getIndexEmotion(t), t);
}) : this.xxPlayers.forEach(function(e) {
e.nickName === t[0] && e.showBubbleChat(t);
});
},
reset: function() {
this.isTimer = !1;
this.timer = 0;
this.currentState = 999;
null !== this.interval && clearInterval(this.interval);
},
startTimer: function(t) {
null !== this.interval && clearInterval(this.interval);
var e = this;
this.timer = t;
this.isTimer = !0;
this.updateTimer(t);
this.interval = setInterval(function() {
if (e.isTimer) {
e.timer -= 1;
e.updateTimer(e.timer);
}
}, 1e3);
},
updateTimer: function(t) {
var e = this;
if (this.nodeProgressTimer) if (this.nodeBarTimer && 1 == this.nodeBarTimer.active && !this.isLockTimerProgress && this.currentState == cc.XXState.BETTING) {
null != this.timerInterval && clearInterval(this.timerInterval);
this.isLockTimerProgress = !0;
this.timer = 1e3 * t;
var n = this.nodeBarTimer.getComponent(cc.Sprite);
try {
n && (n.fillRange = e.timer / 1e3 / 100 * 5);
this.timerInterval = setInterval(function() {
e.timer -= 100;
if (null != n && null != n.fillRange) try {
n.fillRange = e.timer / 1e3 / 100 * 5;
} catch (t) {
clearInterval(e.timerInterval);
} else clearInterval(e.timerInterval);
if (e.timer <= 0) {
clearInterval(e.timerInterval);
e.isLockTimerProgress = !1;
n = null;
}
}, 100);
} catch (t) {
clearInterval(this.timerInterval);
}
} else this.isLockTimerProgress || (this.nodeProgressTimer.active = !1);
},
getTime: function() {
return this.timeInt;
},
updateSessionId: function(t) {
this.lbSID.string = "Phiên: #" + t;
},
updateRoomName: function(t) {
this.lbRoomName.string = t;
},
updateInfo: function(t, e) {
switch (e) {
case cc.XXState.BETTING:
if (this.currentState !== e) {
this.updateSessionId(t.SessionID);
cc.XXController.getInstance().setSID(t.SessionID);
this.nodeProgressTimer.active = !0;
this.resetPlayersResultUI();
this.lbTimer.node.color = cc.Color.GREEN;
}
break;

case cc.XXState.OPEN_PLATE:
if (this.currentState !== e) {
this.updateSessionId(t.SessionID);
cc.XXController.getInstance().setSID(t.SessionID);
this.resetPlayersResultUI();
this.nodeProgressTimer && (this.nodeProgressTimer.active = !1);
}
break;

case cc.XXState.SHOW_RESULT:
if (this.currentState !== e) {
this.updateSessionId(t.SessionID);
cc.XXController.getInstance().setSID(t.SessionID);
this.nodeProgressTimer && (this.nodeProgressTimer.active = !1);
}
break;

case cc.XXState.WAITING:
if (this.currentState !== e) {
this.updateSessionId(t.SessionID);
cc.XXController.getInstance().setSID(t.SessionID);
this.resetPlayersResultUI();
this.nodeProgressTimer && (this.nodeProgressTimer.active = !1);
}
break;

case cc.XXState.SHAKING:
if (this.currentState !== e) {
this.updateSessionId(t.SessionID);
cc.XXController.getInstance().clearAllChip();
this.resetPlayersResultUI();
this.nodeProgressTimer && (this.nodeProgressTimer.active = !1);
}
}
this.currentState = e;
},
onDisableProgress: function() {
this.currentState = null;
this.maxTimeBetting = 2e4;
this.timer = 0;
this.isLockTimerProgress = !1;
this.nodeBarTimer.getComponent(cc.Sprite).fillRange = 0;
null != this.timerInterval && clearInterval(this.timerInterval);
this.timerInterval = null;
},
onDisable: function() {
null != this.timerInterval && clearInterval(this.timerInterval);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXInputView: [ function(t, e) {
"use strict";
cc._RF.push(e, "47fe6sINhNMZZqSErpdFUwf", "XXInputView");
var n = t("PlayerData").players;
(function() {
cc.XXInputView = cc.Class({
extends: cc.Component,
properties: {
nodeParentChip: cc.Node,
btnBetVals: [ cc.Button ],
btnChips: [ cc.Button ],
btnX2: cc.Button,
btnRepeat: cc.Button,
spriteNan: cc.Sprite,
lbTotalBets: [ cc.Label ],
lbTotalUserBets: [ cc.Label ],
listChipSelect: cc.ScrollView
},
onLoad: function() {
cc.XXController.getInstance().setXXInputView(this);
this.isNan = !1;
cc.XXController.getInstance().setIsNan(this.isNan);
this.nodeChipPress = [];
var t = this;
this.btnChips.forEach(function(e) {
t.nodeChipPress.push(e.node.getChildByName("chip_press"));
});
this.minXs = [ 165, 110, 260, -365, -225, -385, -50 ];
this.maxXs = [ 365, 235, 380, -165, -100, -265, 70 ];
this.minYs = [ 25, -100, -100, 25, -100, -100, -100 ];
this.maxYs = [ 80, -50, -50, 80, -50, -50, -50 ];
this.rootDealerPos = cc.v2(0, 136);
this.chipIndex = 1;
this.betVals = [ 1e3, 1e4, 5e4, 2e5, 1e6, 5e6, 1e7 ];
this.processBetValUI();
cc.XXController.getInstance().setLastBetData(null);
this.resetTotalBetUI();
this.timePerBet = 100;
this.currentState = -1;
this.timeouts = [];
this.posGroupUser = cc.v2(400, -213);
this.initGateChip();
cc.XXController.getInstance().initLogBet();
this.indexScroll = 2;
},
initGateChip: function() {
this.gateChips = [];
for (var t = 1; t <= 7; t++) this.gateChips[t] = [];
},
onEnable: function() {},
onNextBet: function() {
this.chipIndex < 6 ? this.chipIndex++ : this.chipIndex = 0;
this.processBetValUI();
},
onBackBet: function() {
this.chipIndex > 0 ? this.chipIndex-- : this.chipIndex = 6;
this.processBetValUI();
},
playerBet: function(t) {
if (cc.XXController.getInstance().getPositions()) {
var e = t[0], n = t[1], i = t[2], o = t[3];
cc.XXController.getInstance().updateChip(e, o);
this.playFxUserBet(cc.XXController.getInstance().getIndexUIBetByAccID(e), i, this.getChipIndexFromValue(n), !0);
this.totalBets[i - 1] += n;
this.lbTotalBets[i - 1].string = cc.Tool.getInstance().formatNumber(this.totalBets[i - 1]);
if (e === lngui.UserManager.instance.mainUserInfo.AccountID) {
cc.XXController.getInstance().setLogBet({
AccountID: e,
Amount: n,
Gate: i
});
this.totalUserBets[i - 1] += n;
this.lbTotalUserBets[i - 1].string = cc.Tool.getInstance().formatNumber(this.totalUserBets[i - 1]);
this.lbTotalUserBets[i - 1].node.parent.active = !0;
}
}
},
reBet: function(t, e) {
var n = this, i = 0;
t.forEach(function(t) {
i += t.Amount;
});
e && (i *= 2);
if (i > lngui.UserManager.instance.mainUserInfo.Money) cc.PopupController.getInstance().showMessage("Số dư không đủ."); else {
var o = 0, s = 0, c = 0, a = 0, r = 0, l = 0, u = 0;
t.forEach(function(t) {
switch (t.Gate) {
case cc.XXGate.ODD:
o += t.Amount;
break;

case cc.XXGate.THREE_UP:
s += t.Amount;
break;

case cc.XXGate.THREE_DOWN:
c += t.Amount;
break;

case cc.XXGate.EVEN:
a += t.Amount;
break;

case cc.XXGate.FOUR_UP:
r += t.Amount;
break;

case cc.XXGate.FOUR_DOWN:
l += t.Amount;
break;

case cc.XXGate.TWO_UP_TWO_DOWN:
u += t.Amount;
}
});
for (var h = 0, p = 0, d = 0, m = 0, f = 0, X = [ o, s, c, a, r, l, u ], g = [], I = 0; I < 6; I++) {
h = 0;
p = 0;
d = 0;
m = 0;
f = 0;
i = X[I];
e && (i *= 2);
h = Math.floor(i / 5e5);
if ((i -= 5e5 * h) > 0) {
p = Math.floor(i / 1e5);
i -= 1e5 * p;
}
if (i > 0) {
d = Math.floor(i / 1e4);
i -= 1e4 * d;
}
if (i > 0) {
m = Math.floor(i / 5e3);
i -= 5e3 * m;
}
i > 0 && (f = Math.floor(i / 1e3));
for (var y = 0; y < h; y++) g.push({
Gate: I + 1,
Amount: 5e5
});
for (y = 0; y < p; y++) g.push({
Gate: I + 1,
Amount: 1e5
});
for (y = 0; y < d; y++) g.push({
Gate: I + 1,
Amount: 1e4
});
for (y = 0; y < m; y++) g.push({
Gate: I + 1,
Amount: 5e3
});
for (y = 0; y < f; y++) g.push({
Gate: I + 1,
Amount: 1e3
});
}
this.count = 0;
this.timeouts = [];
g.forEach(function(t) {
n.timeouts.push(setTimeout(function() {
n.currentState === cc.XXState.BETTING && n.sendRequestReBet(t);
}, n.timePerBet * n.count));
n.count++;
});
}
},
sendRequestReBet: function(t) {
lngui.UserManager.instance.mainUserInfo.Money < t.Amount || cc.XXController.getInstance().sendRequestOnHub(cc.MethodHubName.BET, t.Amount, t.Gate);
},
showLastInput: function(t) {
var e = this;
t.forEach(function(t) {
t.forEach(function(t) {
e.playFxUserBet(cc.XXController.getInstance().getIndexUIBetByAccID(t.AccountID), t.BetSide, e.getChipIndexFromValue(t.BetValue), !1);
e.totalBets[t.BetSide - 1] += t.BetValue;
e.lbTotalBets[t.BetSide - 1].string = cc.Tool.getInstance().formatNumber(e.totalBets[t.BetSide - 1]);
if (t.AccountID === lngui.UserManager.instance.mainUserInfo.AccountID) {
cc.XXController.getInstance().setLogBet({
AccountID: t.AccountID,
Amount: t.BetValue,
Gate: t.BetSide
});
e.totalUserBets[t.BetSide - 1] += t.BetValue;
e.lbTotalUserBets[t.BetSide - 1].string = cc.Tool.getInstance().formatNumber(e.totalUserBets[t.BetSide - 1]);
e.lbTotalUserBets[t.BetSide - 1].node.parent.active = !0;
}
});
});
},
getPlayerBets: function() {
return n;
},
getChipIndexFromValue: function(t) {
for (var e = 0, n = this.betVals.length, i = 0; i < n; i++) if (t === this.betVals[i]) {
e = i;
break;
}
return e;
},
activeAllButtonBet: function(t) {
this.btnBetVals.forEach(function(e) {
e.interactable = t;
});
this.btnX2.interactable = t;
this.btnRepeat.interactable = t;
},
processBetValUI: function() {
for (var t = 0; t < this.btnChips.length; t++) {
this.btnChips[t].interactable = !0;
this.nodeChipPress[t].active = !1;
}
this.btnChips[this.chipIndex].interactable = !1;
this.nodeChipPress[this.chipIndex].active = !0;
},
resetInput: function() {
n.forEach(function(t) {
t.chips = [];
});
},
clearAllTimeOut: function() {
this.timeouts.forEach(function(t) {
clearTimeout(t);
});
this.timeouts = [];
},
resetTotalBetUI: function() {
this.totalBets = [ 0, 0, 0, 0, 0, 0, 0 ];
this.totalUserBets = [ 0, 0, 0, 0, 0, 0, 0 ];
this.lbTotalBets.forEach(function(t) {
t.string = "";
});
this.lbTotalUserBets.forEach(function(t) {
t.node.parent.active = !1;
});
},
betOfAccount: function() {},
saveLastBetData: function() {
var t = [].concat(cc.XXController.getInstance().getLogBet());
cc.XXController.getInstance().setLastBetData(t);
},
updateInput: function(t) {
switch (t) {
case cc.XXState.BETTING:
if (this.currentState !== t) {
this.clearAllTimeOut();
this.resetInput();
this.resetTotalBetUI();
this.activeAllButtonBet(!0);
}
break;

case cc.XXState.OPEN_PLATE:
if (this.currentState !== t) {
this.clearAllTimeOut();
this.activeAllButtonBet(!1);
this.saveLastBetData();
}
break;

case cc.XXState.SHOW_RESULT:
this.currentState !== t && this.activeAllButtonBet(!1);
break;

case cc.XXState.WAITING:
if (this.currentState !== t) {
this.resetInput();
this.activeAllButtonBet(!1);
cc.XXController.getInstance().initLogBet();
}
break;

case cc.XXState.SHAKING:
if (this.currentState !== t) {
this.resetTotalBetUI();
this.resetInput();
this.activeAllButtonBet(!1);
}
}
this.currentState = t;
},
getGateChips: function() {
return this.gateChips;
},
playFxUserBet: function(t, e, i, o) {
cc.AudioController.getInstance().playSound(cc.AudioTypes.CHIP_BET);
var s = e - 1, c = this.minXs[s], a = this.maxXs[s], r = this.minYs[s], l = this.maxYs[s], u = c + Math.floor(Math.random() * Math.abs(a - c)), h = r + Math.floor(Math.random() * Math.abs(l - r)), p = cc.XXController.getInstance().createChip();
p.parent = this.nodeParentChip;
var d;
d = -1 != t ? n[t].position : this.posGroupUser;
p.position = d;
var m = p.getComponent(cc.XXChipItem);
m.betIndex = s;
m.gate = e;
m.playerId = t;
m.position = d;
m.setChip(i);
o ? m.moveTo(cc.v2(u, h)) : m.setPosition(cc.v2(u, h));
this.gateChips[e].push(m);
},
playFxDealerPay: function(t) {
var e = cc.XXController.getInstance().createChip();
e.parent = this.nodeParentChip;
e.position = this.rootDealerPos;
var n = e.getComponent(cc.XXChipItem);
n.betIndex = t.betIndex;
n.playerId = t.playerId;
n.position = t.position;
n.setChip(t.chipIndex);
this.gateChips[t.gate].push(n);
var i = t.betIndex, o = this.minXs[i], s = this.maxXs[i], c = this.minYs[i], a = this.maxYs[i], r = o + Math.floor(Math.random() * Math.abs(s - o)) - 5, l = c + Math.floor(Math.random() * Math.abs(a - c)) - 5;
n.moveTo(cc.v2(r, l));
},
playFxPay: function(t) {
t.moveToEnd(t.position);
},
playFxLost: function(t) {
t.moveToEnd(this.rootDealerPos);
},
betValueClicked: function(t, e) {
cc.AudioController.getInstance().playSound(cc.AudioTypes.CHIP_SELECT);
this.chipIndex = parseInt(e.toString());
this.processBetValUI();
},
betClicked: function(t, e) {
if (cc.XXController.getInstance().getTime() <= 3) {
cc.PopupController.getInstance().showMessage("Đã hết thời gian đặt cửa.");
cc.XXController.getInstance().activeAllButtonBet(!1);
} else {
this.indexBet = parseInt(e.toString());
var n = this.betVals[this.chipIndex];
if (lngui.UserManager.instance.mainUserInfo.Money < n) cc.PopupController.getInstance().showMessage("Số dư không đủ"); else {
cc.XXController.getInstance().sendRequestOnHub(cc.MethodHubName.BET, n, this.indexBet + 1);
this.btnX2.interactable = !1;
this.btnRepeat.interactable = !1;
}
}
},
nanClicked: function() {
this.isNan = !this.isNan;
this.isNan ? this.spriteNan.spriteFrame = cc.XXController.getInstance().getNans()[0] : this.spriteNan.spriteFrame = cc.XXController.getInstance().getNans()[1];
cc.XXController.getInstance().setIsNan(this.isNan);
},
x2Clicked: function() {
if (cc.XXController.getInstance().getTime() <= 3) {
cc.PopupController.getInstance().showMessage("Đã hết thời gian đặt cửa.");
cc.XXController.getInstance().activeAllButtonBet(!1);
} else {
var t = cc.XXController.getInstance().getLastBetData();
if (t && t.length > 0) {
this.reBet(t, !0);
this.btnX2.interactable = !1;
this.btnRepeat.interactable = !1;
} else cc.PopupController.getInstance().showSlotsMessage("Không có dữ liệu đặt của phiên trước.");
}
},
repeatClicked: function() {
if (cc.XXController.getInstance().getTime() <= 3) {
cc.PopupController.getInstance().showMessage("Đã hết thời gian đặt cửa.");
cc.XXController.getInstance().activeAllButtonBet(!1);
} else {
var t = cc.XXController.getInstance().getLastBetData();
if (t && t.length > 0) {
this.reBet(t);
this.btnX2.interactable = !1;
this.btnRepeat.interactable = !1;
} else cc.PopupController.getInstance().showSlotsMessage("Không có dữ liệu đặt của phiên trước.");
}
},
clearAllChip: function() {
this.nodeParentChip.removeAllChildren(!0);
},
resetAllInputView: function() {
this.clearAllTimeOut();
this.resetInput();
this.resetTotalBetUI();
this.activeAllButtonBet(!0);
this.initGateChip();
}
});
}).call(void 0);
cc._RF.pop();
}, {
PlayerData: "PlayerData"
} ],
XXMiniGame: [ function(t, e) {
"use strict";
cc._RF.push(e, "0ef25NCVVxM7qRPLgfHbdbY", "XXMiniGame");
var n = t("../../framework/common/Tween").default;
(function() {
cc.XXMiniGame = cc.Class({
extends: cc.Component,
properties: {
sprFrameItems: [ cc.SpriteFrame ],
columns: cc.Node,
itemTemplate: cc.Node,
lblJackpot: cc.Label,
nodeEffectHu: cc.Node
},
onLoad: function() {
this.createNodePool();
cc.XXController.getInstance().setMiniGame(this);
this.timeScale = 1;
this.spinDuration = 1.3;
this.addSpinDuration = .3;
this.rollStartItemCount = 20;
this.rollAddItemCount = 10;
this.itemHeight = this.itemTemplate.height;
this.isSpin = !1;
this.maxItemColumn = 20;
this.dataMiniGame = null;
this.isJackpot = !1;
this.initMiniGame();
},
updateJackpot: function(t) {
n.numberTo(this.lblJackpot, t, 1);
},
createNodePool: function() {
this.nodePool = new cc.NodePool();
for (var t = 0; t < 10; t++) this.nodePool.put(cc.instantiate(this.itemTemplate));
},
createChip: function() {
return this.nodePool.size() > 0 ? this.nodePool.get() : cc.instantiate(this.itemTemplate);
},
putToPool: function(t) {
try {
this.nodePool && this.nodePool.put(t);
} catch (t) {}
},
clearPool: function() {
this.nodePool && this.nodePool.clear();
},
initMiniGame: function() {
for (var t = 0; t < this.columns.childrenCount; t++) try {
for (var e = this.columns.children[t], n = 0; n < this.maxItemColumn; n++) {
var i = this.createChip();
i.active = !0;
i.parent = e;
var o = Math.floor(5 * Math.random()) + 1;
i.children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[o];
}
} catch (t) {
console.error(t);
}
},
runAnimationSpin: function(t, e) {
var n = this;
this.dataMiniGame = null == e ? this.randIcon() : this.convertStringToArray(e.dataMiniGame);
if (t) for (var i = function() {
var t = n.columns.children[o], e = t.children;
e[0].children[0].getComponent(cc.Sprite).spriteFrame = n.sprFrameItems[n.dataMiniGame[o] - 1];
e[e.length - 1].children[0].getComponent(cc.Sprite).spriteFrame = n.sprFrameItems[n.dataMiniGame[o] - 1];
t.stopAllActions();
t.runAction(cc.sequence(cc.moveTo(n.spinDuration + n.addSpinDuration * o, cc.v2(t.getPosition().x, -1042)), cc.delayTime(.5 * o), cc.callFunc(function() {
t.setPosition(cc.v2(t.getPosition().x, 3));
})));
}, o = 0; o < this.columns.childrenCount; o++) i(); else for (o = 0; o < this.columns.childrenCount; o++) {
var s = this.columns.children[o], c = s.children;
c[0].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[this.dataMiniGame[o] - 1];
c[c.length - 1].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[this.dataMiniGame[o] - 1];
s.stopAllActions();
s.setPosition(cc.v2(s.getPosition().x, 3));
}
},
updateResult: function(t) {
for (var e = 0; e < this.columns.childrenCount; e++) this.columns.children[e].children[0].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[t[e] - 1];
},
showEffectNohu: function() {
var t = this;
this.node && (this.nodeEffectHu.active = !0);
setTimeout(function() {
t.node && (t.nodeEffectHu.active = !1);
}, 3e3);
},
convertStringToArray: function(t) {
var e = [];
if (null != t) {
t = t.split(",");
for (var n = 0; n < t.length; n++) e.push(parseInt(t[n]));
} else e = this.randIcon();
return e;
},
randIcon: function() {
for (var t = [], e = 0; e <= 3; e++) {
var n = Math.floor(5 * Math.random()) + 1;
t.push(n);
}
return t;
},
setSpin: function(t) {
this.isSpin = t;
},
clearMiniGame: function() {
this.dataMiniGame = null;
this.isJackpot = !1;
this.nodeEffectHu.active = !1;
for (var t = 0; t < this.columns.childrenCount; t++) {
var e = this.columns.children[t];
e.stopAllActions();
for (var n = 0; n < this.maxItemColumn; n++) {
var i = e.children, o = Math.floor(5 * Math.random()) + 1;
i[t].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[o];
}
}
}
});
}).call(void 0);
cc._RF.pop();
}, {
"../../framework/common/Tween": void 0
} ],
XXPlayerStatus: [ function(t, e) {
"use strict";
cc._RF.push(e, "db1b4yDErhOr6fC17Pgp+s1", "XXPlayerStatus");
(function() {
cc.XXPlayerStatus = cc.Enum({
NOT_INGAME: "-1",
VIEWER: "0",
INGAME: "1",
WAITING: "2"
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXPlayer: [ function(t, e) {
"use strict";
cc._RF.push(e, "8eea9Z1+FZF679kKAC0dEw+", "XXPlayer");
(function() {
cc.XXPlayer = cc.Class({
extends: cc.Component,
properties: {
lbSID: cc.Label,
lbName: cc.Label,
nickName: ""
},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
var t = this.node.getChildByName("chat");
this.nodeEmotion = t.getChildByName("emotion");
this.nodeBubble = t.getChildByName("bubble");
this.skeEmotion = this.nodeEmotion.getComponent(sp.Skeleton);
this.lbBubbleChat = this.nodeBubble.getComponentInChildren(cc.Label);
t.active = !1;
this.avatar = this.node.getComponentInChildren(cc.Avatar);
this.nodeWin = this.node.getChildByName("win");
this.nodeLose = this.node.getChildByName("lose");
this.lbWin = this.node.getComponentInChildren(cc.Label);
this.animLbWin = this.node.getComponentInChildren(cc.Animation);
this.nodeInfo = this.node.getChildByName("ava_money");
this.lbChip = this.nodeInfo.getChildByName("lbChip").getComponent(cc.LabelIncrement);
this.nodeInfo.active = !1;
},
resetPlayerResultUI: function() {
this.nodeWin.active = !1;
this.nodeLose.active = !1;
this.lbWin.node.active = !1;
},
playerResultUI: function(t, e) {
this.nodeWin.active = !1;
this.nodeLose.active = !1;
if (t) {
this.nodeWin.active = !0;
this.lbWin.string = "+" + cc.Tool.getInstance().formatNumber(e);
this.lbWin.font = cc.XXController.getInstance().getWinFont();
} else {
this.nodeLose.active = !0;
this.lbWin.string = cc.Tool.getInstance().formatNumber(e);
this.lbWin.font = cc.XXController.getInstance().getLoseFont();
}
this.lbWin.node.active = !0;
this.lbWin.node.scaleY = 0;
this.animLbWin.play("xxWin");
},
updateChip: function(t) {
this.lbChip.tweenValueto(t);
},
registerPlayer: function(t) {
var e = t.Avatar;
(e <= 0 || e > 9) && (e = 1);
this.nickName = t.NickName;
this.avatar.setAvatar(cc.XXController.getInstance().getAvatars()[e]);
if (t.ServiceID) {
this.lbSID.string = "";
this.lbName.string = cc.Config.getInstance().formatName(t.NickName, 7);
} else {
this.lbSID.string = "";
this.lbName.string = cc.Config.getInstance().formatName(t.NickName, 10);
}
this.lbChip.tweenValueto(t.Balance);
this.nodeInfo.active = !0;
},
unRegisterPlayer: function() {
this.avatar.setAvatar(cc.XXController.getInstance().getAvatarDef());
this.nodeInfo.active = !1;
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
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXPopupController: [ function(t, e) {
"use strict";
cc._RF.push(e, "2d76dLuIU1AQbQyXP1Gke35", "XXPopupController");
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
e.prototype.setXXPopupView = function(t) {
return this.xxPopupView = t;
};
e.prototype.createSessionDetailView = function() {
return this.xxPopupView.createSessionDetailView();
};
e.prototype.destroySessionDetailView = function() {
return this.xxPopupView.destroySessionDetailView();
};
e.prototype.createTopView = function() {
return this.xxPopupView.createTopView();
};
e.prototype.destroyTopView = function() {
return this.xxPopupView.destroyTopView();
};
e.prototype.createHelpView = function() {
return this.xxPopupView.createHelpView();
};
e.prototype.destroyHelpView = function() {
return this.xxPopupView.destroyHelpView();
};
e.prototype.createHistoryView = function() {
return this.xxPopupView.createHistoryView();
};
e.prototype.destroyHistoryView = function() {
return this.xxPopupView.destroyHistoryView();
};
e.prototype.createGroupUserView = function() {
return this.xxPopupView.createGroupUserView();
};
e.prototype.destroyGroupUserView = function() {
return this.xxPopupView.destroyGroupUserView();
};
e.prototype.setDetailIndex = function(t) {
return this.detailIndex = t;
};
e.prototype.getDetailIndex = function() {
return this.detailIndex;
};
e.prototype.setGameHistory = function(t) {
return this.gameHistory = t;
};
e.prototype.getGameHistory = function() {
return this.gameHistory;
};
return e;
}();
cc.XXPopupController = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
XXPopupView: [ function(t, e) {
"use strict";
cc._RF.push(e, "180660VlHxDu5IXInXbxCct", "XXPopupView");
(function() {
cc.XXPopupView = cc.Class({
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
cc.XXPopupController.getInstance().setXXPopupView(this);
},
createGroupUserView: function() {
this.nodeGroupUser = this.createView(this.prefabGroupUser);
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
console.log("Destroy his");
},
createView: function(t) {
var e = cc.instantiate(t);
e.parent = this.node;
e.setPosition(-this.node.x, -this.node.y);
return e;
},
destroyGroupUserView: function() {
this.nodeGroupUser && this.nodeGroupUser.destroy();
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXResultView: [ function(t, e) {
"use strict";
cc._RF.push(e, "bffa5sppmhGT6sKdEShtvSs", "XXResultView");
(function() {
cc.XXResultView = cc.Class({
extends: cc.Component,
properties: {
nodeBatNan: cc.Node,
nodeDia: cc.Node,
animationBat: sp.Skeleton,
spriteVis: [ cc.Sprite ],
sfVis: [ cc.SpriteFrame ],
animResult: cc.Animation,
nodeChan: cc.Node,
nodeLe: cc.Node,
nodeFxResult: cc.Node,
nodeChan1: cc.Node,
nodeChan2: cc.Node,
nodeChan3: cc.Node,
nodeChan2d2t: cc.Node,
nodeLe1: cc.Node,
nodeLe2: cc.Node,
nodeLe3: cc.Node
},
onLoad: function() {
cc.XXController.getInstance().setXXResultView(this);
this.currentState = -1;
this.nodeResult = this.animResult.node;
this.nodeFxResult.active = !1;
this.batNanPos = cc.v2(0, 43);
this.resultSession = null;
},
reset: function() {},
updateResult: function(t, e, n, i, o) {
switch (i) {
case cc.XXState.BETTING:
if (this.currentState !== i) {
this.nodeFxResult.active = !1;
this.resultSession = null;
this.animationBat.node.active = !0;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
this.animationBat.setAnimation(1, "batup", !0);
}
break;

case cc.XXState.OPEN_PLATE:
if (this.currentState !== i) {
this.resultSession = null;
this.animationBat.node.active = !0;
this.playFxResult(e, n, o);
}
break;

case cc.XXState.SHOW_RESULT:
if (this.currentState !== i) {
this.resultSession = null;
this.playPayFx(t, e);
}
break;

case cc.XXState.WAITING:
if (this.currentState !== i) {
cc.XXController.getInstance().initGateChip();
this.nodeFxResult.active = !1;
if (null != this.resultSession) {
this.animationBat.node.active = !0;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
var s = this.resultSession.Dice1 + this.resultSession.Dice2 + this.resultSession.Dice3 + this.resultSession.Dice4;
0 == s ? this.animationBat.setAnimation(1, "4doup", !1) : 1 == s ? this.animationBat.setAnimation(1, "3do1trangup", !1) : 2 == s ? this.animationBat.setAnimation(1, "2trang2doup", !1) : 3 == s ? this.animationBat.setAnimation(1, "3trang1doup", !1) : this.animationBat.setAnimation(1, "4trang up", !1);
} else this.animationBat.setAnimation(1, "batup", !0);
}
break;

case cc.XXState.SHAKING:
if (this.currentState !== i) {
this.nodeFxResult.active = !1;
this.animationBat.node.active = !0;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
this.animationBat.setAnimation(2, "lacbat", !1);
this.resultSession = null;
}
}
this.currentState = i;
},
playFxResult: function(t) {
var e = this;
this.nodeFxResult.active = !0;
this.nodeChan1.active = !1;
this.nodeChan2.active = !1;
this.nodeChan3.active = !1;
this.nodeChan2d2t.active = !1;
this.nodeLe1.active = !1;
this.nodeLe2.active = !1;
this.nodeLe3.active = !1;
this.resultSession = t;
setTimeout(function() {
if (cc.XXController.getInstance().getRoomId() > 0 && null != e.resultSession) {
e.animationBat.node.active = !0;
e.animationBat.clearTracks();
e.animationBat.setToSetupPose();
var t = e.resultSession.Dice1 + e.resultSession.Dice2 + e.resultSession.Dice3 + e.resultSession.Dice4;
0 == t ? e.animationBat.setAnimation(1, "4domo", !1) : 1 == t ? e.animationBat.setAnimation(1, "3do1trangmo", !1) : 2 == t ? e.animationBat.setAnimation(1, "2trang2domo", !1) : 3 == t ? e.animationBat.setAnimation(1, "3trang1domo", !1) : e.animationBat.setAnimation(1, "4trangmo", !1);
}
}, 1500);
setTimeout(function() {
1 == cc.XXController.getInstance().getRoomId() && null != e.resultSession && e.currentState == cc.XXState.OPEN_PLATE && cc.XXController.getInstance().runAnimationSpin(!0, e.resultSession);
}, 2e3);
setTimeout(function() {
if (null != e.resultSession && e.resultSession.IsHu > 0 && 1 == cc.XXController.getInstance().getRoomId() && e.currentState == cc.XXState.OPEN_PLATE) {
cc.XXController.getInstance().showEffectNohu(e.resultSession);
e.playFxHu(e.resultSession.IsHu);
}
}, 4e3);
},
playFxHu: function(t) {
switch (t) {
case cc.XXGate.EVEN:
this.nodeChan1.active = !0;
break;

case cc.XXGate.ODD:
this.nodeLe1.active = !0;
break;

case cc.XXGate.THREE_UP:
this.nodeLe2.active = !0;
break;

case cc.XXGate.THREE_DOWN:
this.nodeLe3.active = !0;
break;

case cc.XXGate.FOUR_DOWN:
this.nodeChan3.active = !0;
break;

case cc.XXGate.FOUR_UP:
this.nodeChan2.active = !0;
break;

case cc.XXGate.TWO_UP_TWO_DOWN:
this.nodeChan2d2t.active = !0;
}
},
playPayFx: function(t, e) {
var n = cc.XXController.getInstance().getGateChips();
this.resultSession = e;
var i = parseInt(e.BigGate), o = parseInt(e.SmallGate);
switch (i) {
case cc.XXGate.EVEN:
this.animResult.play("chan_blink");
break;

case cc.XXGate.ODD:
this.animResult.play("le_blink");
}
switch (o) {
case cc.XXGate.THREE_UP:
this.nodeLe1.active = !0;
this.nodeLe2.active = !0;
break;

case cc.XXGate.THREE_DOWN:
this.nodeLe1.active = !0;
this.nodeLe3.active = !0;
break;

case cc.XXGate.FOUR_DOWN:
this.nodeChan1.active = !0;
this.nodeChan3.active = !0;
break;

case cc.XXGate.FOUR_UP:
this.nodeChan1.active = !0;
this.nodeChan2.active = !0;
break;

case cc.XXGate.TWO_UP_TWO_DOWN:
this.nodeChan1.active = !0;
this.nodeChan2d2t.active = !0;
}
var s = [ i, o ], c = [];
n.map(function(t, e) {
s.includes(e) || c.push(e);
}, this);
this.fxMoveChip(c, cc.XX_FX.LOSE);
setTimeout(function() {
this.fxMoveChip(s, cc.XX_FX.DEALER_PAY);
}.bind(this), 1e3);
setTimeout(function() {
this.fxMoveChip(s, cc.XX_FX.PAY);
}.bind(this), 2e3);
},
fxMoveChip: function(t, e) {
try {
var n = cc.XXController.getInstance().getGateChips();
t.map(function(t) {
n[t] && n[t].length && n[t].forEach(function(t) {
switch (e) {
case cc.XX_FX.LOSE:
cc.XXController.getInstance().playFxLost(t);
break;

case cc.XX_FX.DEALER_PAY:
cc.XXController.getInstance().playFxDealerPay(t);
break;

case cc.XX_FX.PAY:
cc.XXController.getInstance().playFxPay(t);
}
});
});
} catch (t) {}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXResult: [ function(t, e) {
"use strict";
cc._RF.push(e, "aaaabxDQT1ClYkP0gyZILsd", "XXResult");
(function() {
cc.XXResult = cc.Enum({
EVEN_FOUR_DOWN: 0,
ODD_THREE_DOWN: 1,
EVEN: 2,
ODD_THREE_UP: 3,
EVEN_FOUR_UP: 4
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXSettingRoomView: [ function(t, e) {
"use strict";
cc._RF.push(e, "b259fMqIZlH1JJE6jVAYCjY", "XXSettingRoomView");
(function() {
cc.XXSettingRoomView = cc.Class({
extends: cc.Component,
properties: {
animation: cc.Animation,
nodeOffset: cc.Node,
spriteSound: cc.Sprite,
spriteMusic: cc.Sprite,
sfSounds: [ cc.SpriteFrame ],
sfMusics: [ cc.SpriteFrame ]
},
onLoad: function() {
this.openPopup = !1;
},
start: function() {
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
}).call(void 0);
cc._RF.pop();
}, {} ],
XXSoiCauView: [ function(t, e) {
"use strict";
cc._RF.push(e, "98e8czi68lDZ4efW5MOpHZI", "XXSoiCauView");
(function() {
cc.XXSoiCauView = cc.Class({
extends: cc.Component,
properties: {
animation: cc.Animation,
nodeParent: cc.Node,
nodeEvenTemp: cc.Node,
nodeOddTemp: cc.Node,
lbEven: cc.Label,
lbFourUp: cc.Label,
lbFourDown: cc.Label,
lbOdd: cc.Label,
lbThreeUp: cc.Label,
lbThreeDown: cc.Label,
sfDots: [ cc.SpriteFrame ],
sNodeDots: [ cc.Node ]
},
onLoad: function() {
cc.XXController.getInstance().setXXSoiCauView(this);
this.rootPosX = -181.5;
this.rootPosY = -47;
this.spaceX = 19;
this.spaceY = 19;
this.maxItemPerCol = 6;
},
getSide: function(t) {
switch (t) {
case cc.XXResult.EVEN:
case cc.XXResult.EVEN_FOUR_DOWN:
case cc.XXResult.EVEN_FOUR_UP:
return "EVEN";

case cc.XXResult.ODD_THREE_DOWN:
case cc.XXResult.ODD_THREE_UP:
return "ODD";
}
},
draw: function(t) {
var e = this;
if (0 !== t.length) {
this.even = 0;
this.fourUp = 0;
this.fourDown = 0;
this.odd = 0;
this.threeUp = 0;
this.threeDown = 0;
var n = this;
t.forEach(function(t, i) {
e.updateNumberResult(t);
if (n.sNodeDots[i]) {
n.sNodeDots[i].active = !0;
n.sNodeDots[i].getComponent(cc.Sprite).spriteFrame = n.sfDots[t];
}
});
}
},
updateNumberResult: function(t) {
switch (t) {
case cc.XXResult.EVEN:
this.even++;
break;

case cc.XXResult.EVEN_FOUR_DOWN:
this.even++;
this.fourDown++;
break;

case cc.XXResult.EVEN_FOUR_UP:
this.even++;
this.fourUp++;
break;

case cc.XXResult.ODD_THREE_DOWN:
this.odd++;
this.threeDown++;
break;

case cc.XXResult.ODD_THREE_UP:
this.odd++;
this.threeUp++;
}
this.lbEven.string = this.even;
this.lbFourUp.string = this.fourUp;
this.lbFourDown.string = this.fourDown;
this.lbOdd.string = this.odd;
this.lbThreeUp.string = this.threeUp;
this.lbThreeDown.string = this.threeDown;
},
resetDraw: function() {}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXState: [ function(t, e) {
"use strict";
cc._RF.push(e, "eb415X1gXxJwbG4deXEkzkr", "XXState");
(function() {
cc.XXState = cc.Enum({
WAITING: 0,
SHAKING: 1,
BETTING: 2,
OPEN_PLATE: 3,
SHOW_RESULT: 4
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXTopItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "bc6f8mGBbhHG6ujLgMkyRmy", "XXTopItem");
(function() {
cc.XXTopItem = cc.Class({
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
XXTopListView: [ function(t, e) {
"use strict";
cc._RF.push(e, "5a936fdHpVE/LmY3gA/ODsQ", "XXTopListView");
(function() {
cc.XXTopListView = cc.Class({
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
for (var n = Math.min(this.spawnCount, e), i = 0; i < n; ++i) {
var o = cc.instantiate(this.itemTemplate);
this.content.addChild(o);
o.setPosition(0, -o.height * (.5 + i) - this.spacing * (i + 1));
o.getComponent(cc.XXTopItem).updateItem(this.messages[i], i);
this.items.push(o);
}
this.rootContentY = this.content.y;
},
update: function(t) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.items, n = this.bufferZone, i = this.scrollView.content.y < this.lastContentPosY, o = (this.itemTemplate.height + this.spacing) * e.length, s = 0; s < e.length; ++s) {
var c = this.getPositionInView(e[s]);
if (i) {
if (c.y < -n && e[s].y + o < 0) {
e[s].y = e[s].y + o;
var a = e[s].getComponent(cc.XXTopItem), r = a.itemID - e.length;
a.updateItem(this.messages[r], r);
}
} else if (c.y > n && e[s].y - o > -this.content.height) {
e[s].y = e[s].y - o;
r = (a = e[s].getComponent(cc.XXTopItem)).itemID + e.length;
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
XXTopView: [ function(t, e) {
"use strict";
cc._RF.push(e, "f9cd9tZBbtJO5wIoiIMJMnZ", "XXTopView");
(function() {
cc.XXTopView = cc.Class({
extends: cc.Component,
properties: {
XXTopListView: cc.XXTopListView
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
new cc.XXGetBigWinnerCommand().execute(this);
},
onXXGetBigWinnerResponse: function(t) {
var e = t;
if (null !== e && e.length > 0) {
this.XXTopListView.resetList();
this.XXTopListView.initialize(e);
}
},
closeClicked: function() {
this.XXTopListView.resetList();
this.animation.play("closePopup");
var t = this;
cc.director.getScheduler().schedule(function() {
t.animation.stop();
cc.XXPopupController.getInstance().destroyTopView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXView: [ function(t, e) {
"use strict";
cc._RF.push(e, "7fd86ILtVNML7Ljmj3x5HMC", "XXView");
var n = t("NetConfig"), i = t("../../framework/common/Tween").default;
(function() {
cc.XXView = cc.Class({
extends: cc.Component,
properties: {
spriteSound: cc.Sprite,
sfSounds: [ cc.SpriteFrame ],
nodeHome: cc.Node,
nodeGamePlay: cc.Node,
lblJackpotHome: cc.Label,
lblTotalPlayer1: cc.Label,
lblTotalPlayer2: cc.Label,
lblTotalPlayer3: cc.Label,
lblTotalPlayer4: cc.Label,
nodeRoomJackpot: cc.Node,
listAvtars: [ cc.SpriteFrame ]
},
onLoad: function() {
cc.XXController.getInstance().setXXView(this);
cc.XXController.getInstance().setAvatars(this.listAvtars);
this.interval = null;
this.isActiveChat = !1;
this.isActiveGamePlay = !1;
this.lastTimeReconnect = new Date().getTime();
this.connectHub();
this.currentState = -1;
this.idPlayNow = 0;
this.roomId = 0;
this.isRegisterLeaveRoom = !1;
},
start: function() {
cc.AudioController.getInstance().enableSound(this.sound);
},
onEnable: function() {
this.onResetPageGame();
lngui.UIWaitingLayout.showWaiting();
},
onResetPageGame: function() {
console.log("activehome=>>>>>  " + this.nodeHome.active);
console.log("activeplay=>>>>>  " + this.isActiveGamePlay);
lngui.UIWaitingLayout.showWaiting();
if (this.isActiveGamePlay) {
console.log("active gameeee");
this.nodeGamePlay.active = !0;
this.nodeHome.opacity = 0;
this.nodeHome.active = !1;
if (1 == this.roomId) this.nodeRoomJackpot.active = !0; else {
cc.XXController.getInstance().clearMiniGame();
this.nodeRoomJackpot.active = !1;
}
this.nodeGamePlay.opacity = 255;
cc.XXController.getInstance().updateRoomName(this.revertNameRoom(this.roomId));
} else {
this.nodeHome.active = !0;
this.nodeHome.opacity = 255;
this.nodeGamePlay.opacity = 0;
this.nodeGamePlay.active = !1;
}
lngui.UIWaitingLayout.hideWaiting();
},
revertNameRoom: function() {
switch (this.roomId) {
case 1:
return "Bàn chơi Hoàng Kim Long";

case 2:
return "Bàn chơi Hỏa Chu Tước";

case 3:
return "Bàn chơi Hải Huyền Vũ";

case 4:
return "Bàn chơi Phong Bạch Hổ";

default:
return "Bàn chơi tự do";
}
},
onDestroy: function() {
var t = lngui.UserManager.instance.mainUserInfo.Money;
lngui.GameCoreManager.instance.updateTotalGold(t);
this.sendRequestOnHub(cc.MethodHubName.EXIT_LOBBY);
null !== this.interval && clearInterval(this.interval);
this.xxHub && this.xxHub.close();
this.unscheduleAllCallbacks();
cc.XXController.getInstance().setXXView(null);
lngui.UIWaitingLayout.hideWaiting();
},
reset: function() {
this.isTimer = !1;
this.timer = 0;
this.currentState = 999;
null !== this.interval && clearInterval(this.interval);
},
stopTimer: function() {
this.isTimer = !1;
null !== this.interval && clearInterval(this.interval);
},
updateInfo: function(t) {
switch (t.CurrentState) {
case cc.XXState.BETTING:
case cc.XXState.OPEN_PLATE:
case cc.XXState.SHOW_RESULT:
case cc.XXState.WAITING:
case cc.XXState.SHAKING:
}
this.currentState = t.CurrentState;
this.startTimer(t.Ellapsed);
},
updateTimer: function(t) {
if (!(t < 1)) switch (this.currentState) {
case cc.XXState.BETTING:
case cc.XXState.OPEN_PLATE:
this.lbTimer.string = t;
this.lbTimer.font = t > 3 ? this.bmfNormal : this.bmfRed;
this.lbTimer.node.parent.active = !0;
break;

case cc.XXState.SHOW_RESULT:
case cc.XXState.WAITING:
case cc.XXState.SHAKING:
this.lbTimer.node.parent.active = !1;
}
},
disconnectAndLogout: function() {
this.xxHub && this.xxHub.disconnect();
this.lastTimeReconnect = new Date().getTime();
},
connectHub: function() {
console.log("connectHub=================>" + cc.SubdomainName.XOC_DIA_TU_LINH);
var t = {
url: "https://xocdiatulinh." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
hub: "xocdiatulinhHub",
ip: "http://18.138.207.162:9001/signalr/negotiate"
};
cc.systemEvent.off("OnXocDiaWebSocKet", this.onResponeData, this);
cc.systemEvent.on("OnXocDiaWebSocKet", this.onResponeData, this);
this.xxHub = new lngui.GateSignalR();
this.xxHub.connect("OnXocDiaWebSocKet", t.url, t.hub, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
},
sendRequestOnHub: function(t, e, n) {
switch (t) {
case cc.MethodHubName.ENTER_LOBBY:
this.sendSignalR("EnterLobby", [ 1 ]);
break;

case cc.MethodHubName.EXIT_LOBBY:
this.sendSignalR("ExitLobby", [ this.roomId ]);
break;

case cc.MethodHubName.PLAY_NOW:
this.sendSignalR("PlayNow", [ this.roomId, 1, 1 ]);
break;

case cc.MethodHubName.BET:
this.sendSignalR("Bet", [ e, n, this.roomId ]);
break;

case cc.MethodHubName.REGISTER_LEAVE_ROOM:
this.sendSignalR("RegisterLeaveRoom", []);
break;

case cc.MethodHubName.UNREGISTER_LEAVE_ROOM:
this.sendSignalR("UnregisterLeaveRoom", []);
break;

case cc.MethodHubName.SEND_MESSAGE:
this.xxHub.sendRoomMessage(e);
break;

case "PingLobby":
this.sendSignalR("PingLobby", []);
}
},
sendSignalR: function(t, e) {
lngui.ZLog.log("SendSocket==========================>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.xxHub && this.xxHub.send(t, e);
},
onResponeData: function(t) {
t.s && "error" == t.s || this.onHubMessage(t);
},
connectSuccess: function() {
console.log("connectSuccess =========>");
this.sendRequestOnHub(cc.MethodHubName.ENTER_LOBBY);
this.sendRequestOnHub("PingLobby");
lngui.UIWaitingLayout.hideWaiting();
},
onSlotsNegotiateResponse: function(t) {
this.connectionToken = t.ConnectionToken;
this.xxHub = new cc.Hub();
this.xxHub.connect(this, cc.HubName.XocDiaTuLinhHub, t.ConnectionToken);
},
onHubMessage: function(t) {
var e = this, n = this;
if (("open" == t.s || "reconnect" == t.s || "1" == t.s) && !this.isConnect) {
this.isConnect = !0;
this.connectSuccess();
}
if (void 0 !== t.M && t.M.length > 0) {
var o = t.M;
o.map(function(t) {
switch (t.M) {
case cc.MethodHubOnName.SESSION_INFO:
cc.XXController.getInstance().updateInfo(t.A[0], t.A[0].Phrase, null);
cc.XXController.getInstance().updateInput(t.A[0].Phrase);
break;

case cc.MethodHubOnName.GAME_HISTORY:
cc.XXController.getInstance().resetDraw();
cc.XXController.getInstance().draw(t.A[0]);
break;

case cc.MethodHubOnName.START_ACTION_TIMER:
var s = t.A;
cc.XXController.getInstance().updateInfo(s[0], s[2], s[1]);
cc.XXController.getInstance().updateResult(null, s[0].Result, s[0].Result.ChipsData, s[2]);
cc.XXController.getInstance().updateInput(s[2]);
break;

case cc.MethodHubOnName.PLAYER_LEAVE:
0 === o.length && cc.XXController.getInstance().playerLeave(t.A);
break;

case cc.MethodHubOnName.UPDATE_CONNECTION_STATUS:
cc.XXController.getInstance().updateConnectionStatus(t.A);
break;

case cc.MethodHubOnName.UPDATE_PLAYER_STATUS:
cc.XXController.getInstance().updatePlayerStatus(t.A[0]);
break;

case cc.MethodHubOnName.JOIN_GAME:
s = t.A[0], t.A[1];
cc.XXController.getInstance().updateInfoCurrPlayer(s.Account);
lngui.UIWaitingLayout.hideWaiting();
break;

case cc.MethodHubOnName.BET_SESSION:
cc.XXController.getInstance().showLastInput(t.A[0]);
break;

case cc.MethodHubOnName.BET_OF_ACCOUNT:
break;

case cc.MethodHubOnName.PLAYER_BET:
s = t.A;
cc.XXController.getInstance().playerBet(s);
break;

case cc.MethodHubOnName.BET_SUCCESS:
break;

case cc.MethodHubOnName.WIN_RESULT_VIP:
if (t.A.length > 0) try {
setTimeout(function() {
cc.XXController.getInstance().winResultVip(t.A[0]);
}, 2500);
} catch (t) {}
break;

case cc.MethodHubOnName.WIN_RESULT:
if (t.A.length > 0) try {
setTimeout(function() {
var e = t.A[1];
null != e && e == n.roomId ? cc.XXController.getInstance().winResult(t.A[0]) : cc.XXController.getInstance().updateWinResultRoomIdOrther(t.A[0]);
}, 2500);
} catch (t) {}
break;

case cc.MethodHubOnName.TOTAL_WIN_MONEY:
t.A[0] > 0 && setTimeout(function() {
cc.XXController.getInstance().totalUserWin(t.A[0]);
}, 2500);
break;

case cc.MethodHubOnName.PLAYER_MESSAGE:
case cc.MethodHubOnName.MESSAGE:
cc.PopupController.getInstance().showMessage(t.A[0]);
break;

case cc.MethodHubOnName.OPEN_PLATE_NOW:
cc.XXController.getInstance().updateResult(null, t.A[0], t.A[1], cc.XXState.OPEN_PLATE, !0);
cc.XXController.getInstance().updateInput(cc.XXState.OPEN_PLATE);
break;

case cc.MethodHubOnName.RECEIVE_MESSAGE:
t.A[6] == n.roomId && cc.XXController.getInstance().playerShowBubbleChat(t.A);
break;

case cc.MethodHubOnName.SUMMARY_PLAYER:
cc.XXController.getInstance().summaryPlayer(t.A[0]);
break;

case cc.MethodHubOnName.VIP_PLAYERS:
var c = t.A[0];
c.length > 0 && t.A[1] && t.A[1] == n.roomId && cc.XXController.getInstance().vipPlayer(c);
break;

case "recieveMessage":
cc.XXController.getInstance().playerShowBubbleChat(t.A);
break;

case cc.MethodHubOnName.UPDATE_ROOM_TIME:
cc.XXController.getInstance().updateTimer(t.A[0]);
break;

case "DashboardInfo":
if (t.A.length > 0 && 1 == n.nodeHome.active) {
i.numberTo(n.lblJackpotHome, t.A[0], 1);
n.lblTotalPlayer1.string = t.A[1];
n.lblTotalPlayer2.string = t.A[2];
n.lblTotalPlayer3.string = t.A[3];
e.lblTotalPlayer4.string = t.A[4];
lngui.UIWaitingLayout.hideWaiting();
}
break;

case "ExitGamePlay":
cc.XXController.getInstance().initLogBet();
cc.XXController.getInstance().resetDraw();
cc.XXController.getInstance().clearAllChip();
cc.XXController.getInstance().resetAllInputView();
cc.XXController.getInstance().resetPlayersResultUI();
cc.XXController.getInstance().updateTimer(0);
cc.XXController.getInstance().onDisableProgress();
for (var a = 0; a < 7; a++) cc.XXController.getInstance().unRegisterPlayer(a);
n.isActiveGamePlay = !1;
n.onResetPageGame();
n.onRequestHubLobby();
n.roomId = -1;
lngui.UIWaitingLayout.hideWaiting();
break;

case "UpdateJackpot":
1 == n.roomId && cc.XXController.getInstance().updateJackpot(t.A[0]);
break;

case "UpdateCurrentSession":
1 == n.roomId && cc.XXController.getInstance().runAnimationSpin(!1, t.A[0]);
}
});
o && o.length > 0 && o.forEach(function(t) {
t.M === cc.MethodHubOnName.PLAYER_LEAVE && cc.XXController.getInstance().playerLeave(t.A);
});
} else if (t.R && 78 == t.R) {
lngui.UIWaitingLayout.showWaiting();
this.onRequestHubLobby();
} else if (t.R && t.R == lngui.UserManager.instance.mainUserInfo.AccountID) {
this.idPlayNow = 0;
this.isActiveGamePlay = !0;
this.onResetPageGame();
lngui.UIWaitingLayout.hideWaiting();
} else t.I;
},
onSendPlayInRoom: function(t, e) {
var n = parseInt(e);
if (n < 1 || n > 4) cc.PopupController.getInstance().showMessage("ID phòng không tồn tại!"); else {
this.roomId = n;
this.onResetPageGame();
lngui.UIWaitingLayout.showWaiting();
this.sendRequestOnHub(cc.MethodHubName.PLAY_NOW);
}
},
getRoomId: function() {
return this.roomId;
},
onHubOpen: function() {
lngui.UIWaitingLayout.hideWaiting();
this.sendRequestOnHub(cc.MethodHubName.ENTER_LOBBY);
lngui.UIWaitingLayout.showWaiting();
},
onHubClose: function() {
new Date().getTime() - this.lastTimeReconnect >= 1e3 * n.RECONNECT_TIME ? this.reconnect() : cc.director.getScheduler().schedule(this.reconnect, this, n.RECONNECT_TIME, 0, 0, !1);
},
onHubError: function() {
lngui.UIWaitingLayout.hideWaiting();
},
onRequestHubLobby: function() {
cc.director.getScheduler().schedule(function() {
if (1 == this.nodeHome.active) {
this.onRequestHubLobby();
this.sendRequestOnHub("PingLobby");
}
}.bind(this), this, 1, 0, 2, !1);
},
playerLeave: function(t) {
if (t[0] === lngui.UserManager.instance.mainUserInfo.AccountID) {
var e = t[1];
this.backSelectRoom();
cc.PopupController.getInstance().showMessage(e);
}
},
helpClicked: function() {
cc.XXPopupController.getInstance().createHelpView();
},
historyClicked: function() {
cc.XXPopupController.getInstance().createHistoryView();
},
topClicked: function() {
cc.XXPopupController.getInstance().createTopView();
},
graphClicked: function() {
cc.XXPopupController.getInstance().createGraphView();
},
soundClicked: function() {
this.sound = !this.sound;
cc.Tool.getInstance().setItem("@Sound", this.sound);
this.spriteSound.spriteFrame = this.sound ? this.sfSounds[0] : this.sfSounds[1];
cc.AudioController.getInstance().enableSound(this.sound);
},
backSelectRoom: function() {
lngui.UIWaitingLayout.showWaiting();
this.sendRequestOnHub(cc.MethodHubName.EXIT_LOBBY);
},
backClicked: function() {
lngui.UIScreenManager.instance.popToRootScreen();
},
chatClicked: function() {}
});
}).call(void 0);
cc._RF.pop();
}, {
"../../framework/common/Tween": void 0,
NetConfig: void 0
} ],
XX_GroupUserCommand: [ function(t, e) {
"use strict";
cc._RF.push(e, "3ccf1/8Gt5MGqG+x3Fx6J+O", "XX_GroupUserCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t) {
var e = "api/XocDiaTuLinh/GetPlayersNotInGame?roomId=" + cc.XXController.getInstance().getRoomId(), n = cc.SubdomainName.XOC_DIA_TU_LINH;
return cc.ServerConnector.getInstance().sendRequest(n, e, function(e) {
var n = JSON.parse(e);
return t.onGetGroupUserResponse(n);
});
};
return t;
}();
cc.XXGroupUserCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
XocXocSettingRoomView: [ function(t, e) {
"use strict";
cc._RF.push(e, "2657bIQtPBMRbcg4rD9Ea5j", "XocXocSettingRoomView");
(function() {
cc.XocXocSettingRoomView = cc.Class({
extends: cc.Component,
properties: {
animation: cc.Animation,
nodeOffset: cc.Node,
spriteSound: cc.Sprite,
spriteMusic: cc.Sprite,
sfSounds: [ cc.SpriteFrame ],
sfMusics: [ cc.SpriteFrame ]
},
onLoad: function() {
this.openPopup = !1;
},
start: function() {
this.spriteSound.spriteFrame = this.sound ? this.sfSounds[0] : this.sfSounds[1];
this.spriteMusic.spriteFrame = this.music ? this.sfMusics[0] : this.sfMusics[1];
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
this.openPopup = !1;
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
}).call(void 0);
cc._RF.pop();
}, {} ]
}, {}, [ "XXAssets", "XXChipItem", "XXChipPool", "XXController", "XXInfoView", "XXInputView", "XXMiniGame", "XXResultView", "XXSettingRoomView", "XXView", "SlotsHistoryItem", "XXGetBigWinnerCommand", "XXHistoryCommand", "XX_GroupUserCommand", "XXConnectionStatus", "XXFX", "XXGate", "XXPlayerStatus", "XXResult", "XXState", "XXSoiCauView", "PlayerData", "XXPlayer", "XXPopupController", "XXPopupView", "XocXocSettingRoomView", "XXGroupItem", "XXGroupUserListView", "XXGroupUserView", "XXHelpView", "XXHistoryItem", "XXHistoryListView", "XXHistoryView", "XXTopItem", "XXTopListView", "XXTopView" ]);