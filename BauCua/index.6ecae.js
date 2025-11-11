window.__require = function t(e, i, o) {
function n(a, c) {
if (!i[a]) {
if (!e[a]) {
var r = a.split("/");
r = r[r.length - 1];
if (!e[r]) {
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
e[a][0].call(h.exports, function(t) {
return n(e[a][1][t] || t);
}, h, h.exports, t, e, i, o);
}
return i[a].exports;
}
for (var s = "function" == typeof __require && __require, a = 0; a < o.length; a++) n(o[a]);
return n;
}({
AudioPoolBauCua: [ function(t, e) {
"use strict";
cc._RF.push(e, "1f746501hxDKJ0x+DgmCLST", "AudioPoolBauCua");
(function() {
cc.AudioPoolBauCua = cc.Class({
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
BauCuaAnim: [ function(t, e) {
"use strict";
cc._RF.push(e, "7a3feVQZ9ZPpYrDG1DKVTp4", "BauCuaAnim");
cc.BauCuaAnim = {
SHAKING: "lac",
OPEN_PLATE: "mo",
CLOSE_PLATE: "Idle_2"
};
cc._RF.pop();
}, {} ],
BauCuaAssetsView: [ function(t, e) {
"use strict";
cc._RF.push(e, "ec3378Ind1H2rwQNwIOy82c", "BauCuaAssetsView");
(function() {
cc.BauCuaAssetsView = cc.Class({
extends: cc.Component,
properties: {
sfDices: [ cc.SpriteFrame ],
sfPrefabChip: [ cc.Prefab ],
sfNan: [ cc.SpriteFrame ]
},
onLoad: function() {
cc.BauCuaController.getInstance().setAssetView(this);
this.chip1kPool = new cc.NodePool();
this.chip5kPool = new cc.NodePool();
this.chip10kPool = new cc.NodePool();
this.chip100kPool = new cc.NodePool();
this.chip500kPool = new cc.NodePool();
this.chip5mPool = new cc.NodePool();
},
clearPools: function() {
try {
this.chip1kPool.clear();
this.chip5kPool.clear();
this.chip10kPool.clear();
this.chip100kPool.clear();
this.chip500kPool.clear();
this.chip5mPool.clear();
} catch (t) {}
},
createChip: function(t) {
var e = null;
switch (t) {
case cc.BauCuaMapChip["1K"]:
e = this.chip1kPool.size() > 0 ? this.chip1kPool.get() : cc.instantiate(this.sfPrefabChip[0]);
break;

case cc.BauCuaMapChip["5K"]:
e = this.chip5kPool.size() > 0 ? this.chip5kPool.get() : cc.instantiate(this.sfPrefabChip[1]);
break;

case cc.BauCuaMapChip["10K"]:
e = this.chip10kPool.size() > 0 ? this.chip10kPool.get() : cc.instantiate(this.sfPrefabChip[2]);
break;

case cc.BauCuaMapChip["100K"]:
e = this.chip100kPool.size() > 0 ? this.chip100kPool.get() : cc.instantiate(this.sfPrefabChip[3]);
break;

case cc.BauCuaMapChip["500K"]:
e = this.chip500kPool.size() > 0 ? this.chip500kPool.get() : cc.instantiate(this.sfPrefabChip[4]);
break;

case cc.BauCuaMapChip["5M"]:
e = this.chip5mPool.size() > 0 ? this.chip5mPool.get() : cc.instantiate(this.sfPrefabChip[5]);
break;

case "ResetChip":
e = null;
break;

default:
e = this.chip5mPool.size() > 0 ? this.chip5mPool.get() : cc.instantiate(this.sfPrefabChip[5]);
}
try {
e.setScale(.7, .7);
} catch (e) {
this.createChip(t);
}
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
break;

case 5e6:
this.chip5mPool.put(t);
}
},
getSfNan: function(t) {
return t ? this.sfNan[0] : this.sfNan[1];
},
getSfDice: function(t) {
return this.sfDices[t];
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaBetSide: [ function(t, e) {
"use strict";
cc._RF.push(e, "aa3a0ionWFA24RcCm/2X6lX", "BauCuaBetSide");
cc.BauCuaBetSide = {
Gourd: 1,
Crab: 2,
Fish: 3,
Rooster: 4,
Lobster: 5,
Deer: 6
};
cc._RF.pop();
}, {} ],
BauCuaBetView: [ function(t, e) {
"use strict";
cc._RF.push(e, "4a4c1Wl961J2rRO1DkvRrdF", "BauCuaBetView");
(function() {
cc.BauCuaBetView = cc.Class({
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
btn1K: cc.Node,
btn5K: cc.Node,
btn10K: cc.Node,
btn100K: cc.Node,
btn500K: cc.Node,
btn5M: cc.Node,
nodeBetX2: cc.Node,
nodeBetAgain: cc.Node,
spriteBtnNan: cc.Sprite
},
onLoad: function() {
this.controller = cc.BauCuaController.getInstance();
this.controller.setBetView(this);
this.betValue = 5e3;
this.listNodeSide = [ this.nodeDeer, this.nodeGourd, this.nodeRooster, this.nodeFish, this.nodeCrab, this.nodeLobster ];
this.stopAnimationWin();
this.btnBetX2 = this.nodeBetX2.getComponent(cc.Button);
this.btnBetAgain = this.nodeBetAgain.getComponent(cc.Button);
this.controller.setIsNan(!1);
this.lstBtnBet = this.getListBtnBet([ this.nodeDeer, this.nodeGourd, this.nodeRooster, this.nodeFish, this.nodeCrab, this.nodeLobster ]);
this.enableClickBet(!1);
this.setSpriteBtnNan();
},
getListBtnBet: function(t) {
var e = [];
t.map(function(t) {
return e.push(t.getChildByName("btnBet").getComponent(cc.Button));
});
return e;
},
activeNodeWin: function(t, e) {
var i = t.getChildByName("win"), o = i.getComponent(sp.Skeleton);
i.active = e;
o.setAnimation(1, "animtion0", !0);
},
resetLbTotalBet: function() {
[ this.lbTotalUserBetDeer, this.lbTotalDeer, this.lbTotalUserBetGourd, this.lbTotalGourd, this.lbTotalUserBetRooster, this.lbTotalRooster, this.lbTotalUserBetFish, this.lbTotalFish, this.lbTotalUserBetCrab, this.lbTotalCrab, this.lbTotalUserBetLobster, this.lbTotalLobster ].map(function(t) {
return t.string = "";
});
},
enableClickBet: function(t) {
this.disableBetAgain(!t);
this.lstBtnBet.map(function(e) {
e.interactable = t;
});
},
onEnable: function() {},
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
var e = cc.moveTo(.3, cc.v2(t.x, -297));
t.runAction(e);
},
resetSpriteButton: function() {
var t = [ this.btn1K, this.btn5K, this.btn10K, this.btn100K, this.btn500K, this.btn5M ], e = this;
t.forEach(function(t, i) {
e.setDefaultSfButton(t, i);
});
},
setDefaultSfButton: function(t) {
t.getChildByName("active").active = !1;
var e = cc.moveTo(.3, cc.v2(t.x, -312));
t.runAction(e);
},
onBetAgain: function(t, e) {
var i = this;
e = parseInt(e);
if (0 !== this.controller.getBetLogBySessionID(this.controller.getBetLogSession()).length) {
this.getLogBetInfo(e).map(function(t, e) {
var o = setTimeout(function() {
if (this.controller.getCurrentState() === cc.BauCuaPharse.Betting && t.sessionID === this.controller.getBetLogSession() - 1) this.sendRequestBet(t.value, t.betSide); else try {
clearTimeout(o);
} catch (t) {
console.log(t);
}
}.bind(i), 100 * e);
}, this);
this.disableBetAgain(!0);
} else cc.PopupController.getInstance().showSlotsMessage("Chưa có dữ liệu của phiên trước.");
},
getLogBetInfo: function(t) {
var e = this, i = this.controller.getBetLogBySessionID(this.controller.getBetLogSession()), o = [];
i.length > 0 && [ 1, 2, 3, 4, 5, 6 ].map(function(t) {
o[t] = i.filter(function(e) {
return e.betSide == t;
});
}, this);
var n = [];
o.map(function(i) {
if (i.length > 0) {
var o = e.calcLogBet(i, t);
n.push.apply(n, o);
}
}, this);
return n;
},
getTotalMoneyBetSide: function(t, e) {
var i = 0;
t.map(function(t) {
i += parseInt(t.value);
}, this);
return i * e;
},
calcLogBet: function(t, e) {
var i = [ 5e6, 5e5, 1e5, 1e4, 5e3, 1e3 ], o = this.getTotalMoneyBetSide(t, e), n = [];
for (var s in i) {
var a = i[s], c = Math.floor(o / a);
o -= c * a;
n.push([ a, c ]);
}
var r = n.filter(function(t) {
return 0 !== t[1];
}), u = [];
r.map(function(e) {
for (var i = e[1], o = e[0], n = 0; n < i; n++) u.push({
value: o,
betSide: t[0].betSide,
sessionID: t[0].sessionID
});
}, this);
return u;
},
disableBetAgain: function(t) {
this.btnBetAgain.interactable = !t;
this.btnBetX2.interactable = !t;
var e = cc.Color.WHITE;
t && (e = cc.Color.GRAY);
this.nodeBetX2.color = e;
this.nodeBetAgain.color = e;
},
playAnimationWin: function(t) {
var e = null;
switch (t = parseInt(t)) {
case cc.BauCuaBetSide.Deer:
e = this.nodeDeer;
break;

case cc.BauCuaBetSide.Gourd:
e = this.nodeGourd;
break;

case cc.BauCuaBetSide.Rooster:
e = this.nodeRooster;
break;

case cc.BauCuaBetSide.Fish:
e = this.nodeFish;
break;

case cc.BauCuaBetSide.Crab:
e = this.nodeCrab;
break;

case cc.BauCuaBetSide.Lobster:
e = this.nodeLobster;
}
null != e && this.activeNodeWin(e, !0);
},
stopAnimationWin: function() {
var t = this;
this.listNodeSide.map(function(e) {
e.getChildByName("win").getComponent(sp.Skeleton).clearTracks();
t.activeNodeWin(e, !1);
}, this);
this.resetLbTotalBet();
},
onBetClick: function(t, e) {
this.onBet(e);
},
onBet: function(t) {
this.disableBetAgain(!0);
cc.AudioController.getInstance().playSound(cc.AudioTypes.CHIP_BET);
this.sendRequestBet(this.betValue, t);
},
updateTotalUserBetSide: function(t, e) {
t = parseInt(t);
this.getLabelTotalBetBySide(t).string = cc.Tool.getInstance().formatNumber(e);
},
updateBetOfAccount: function(t) {
var e = this;
t.map(function(t) {
var i = parseInt(t.BetSide);
e.getLabelTotalBetBySide(i).string = cc.Tool.getInstance().formatNumber(t.BetValue);
});
},
getLabelTotalBetBySide: function(t) {
var e = null;
switch (t) {
case cc.BauCuaBetSide.Deer:
e = this.lbTotalDeer;
break;

case cc.BauCuaBetSide.Gourd:
e = this.lbTotalGourd;
break;

case cc.BauCuaBetSide.Rooster:
e = this.lbTotalRooster;
break;

case cc.BauCuaBetSide.Fish:
e = this.lbTotalFish;
break;

case cc.BauCuaBetSide.Crab:
e = this.lbTotalCrab;
break;

case cc.BauCuaBetSide.Lobster:
e = this.lbTotalLobster;
}
return e;
},
updateTotalBet: function(t) {
this.setStringValue(this.lbTotalUserBetDeer, t.TotalBetDeer);
this.setStringValue(this.lbTotalUserBetGourd, t.TotalBetGourd);
this.setStringValue(this.lbTotalUserBetRooster, t.TotalBetChicken);
this.setStringValue(this.lbTotalUserBetFish, t.TotalBetFish);
this.setStringValue(this.lbTotalUserBetCrab, t.TotalBetCrab);
this.setStringValue(this.lbTotalUserBetLobster, t.TotalBetShrimp);
},
setStringValue: function(t, e) {
t.string = 0 === e ? "" : cc.Tool.getInstance().formatNumber(e);
},
sendRequestBet: function(t, e) {
return this.controller.sendRequestOnHub(cc.MethodHubName.BET, t, e);
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
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaButtonBet: [ function(t, e) {
"use strict";
cc._RF.push(e, "c8387gUNyxJQL3ZVHw+OA/o", "BauCuaButtonBet");
(function() {
cc.BauCuaButtonBet = cc.Class({
extends: cc.Component,
properties: {
spriteButtons: [ cc.SpriteFrame ]
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaChipView: [ function(t, e) {
"use strict";
cc._RF.push(e, "7fe64VkvqlA7ZgWyCwExC1D", "BauCuaChipView");
(function() {
cc.BauCuaChipsView = cc.Class({
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
this.controller = cc.BauCuaController.getInstance();
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
randomPosChip: function(t, e) {
var i = null;
switch (e = parseInt(e)) {
case cc.BauCuaBetSide.Deer:
i = this.posDeer;
break;

case cc.BauCuaBetSide.Gourd:
i = this.posGourd;
break;

case cc.BauCuaBetSide.Rooster:
i = this.posRooster;
break;

case cc.BauCuaBetSide.Fish:
i = this.posFish;
break;

case cc.BauCuaBetSide.Crab:
i = this.posCrab;
break;

case cc.BauCuaBetSide.Lobster:
i = this.posLobster;
}
var o = i.position, n = i.width / 2, s = -n, a = i.height / 2, c = -a, r = Math.floor(Math.random() * (n - s + 1) + s), u = Math.floor(Math.random() * (a - c + 1) + c);
o.x = o.x + r;
o.y = o.y + u;
return o;
},
moveChipBet: function(t, e, i, o) {
this.layoutChip.position = cc.v2(0, 0);
try {
t = parseInt(t);
var n = this.posChips[cc.BauCuaMapChipSpriteFrame[t]].position;
if (i === cc.BacaratChipOf.USERS) {
n = this.posGroupUsers.position;
var s = this.controller.positionPlayerUI().indexOf(o);
-1 !== s && (n = this.lstPosPlayer[s].position);
}
var a = this.randomPosChip(t, e), c = this.controller.createChip(cc.BauCuaMapChipSpriteFrame[t]);
c.parent = this.layoutChip;
c.position = n;
var r = cc.moveTo(.3, a);
cc.game.isPaused() ? c.position = a : c.runAction(r);
var u = n;
i === cc.BacaratChipOf.PLAYER && (u = this.lstPosPlayer[0].position);
this.pushChipToArray(e, t, u, c);
} catch (t) {}
},
pushChipToArray: function(t, e, i, o) {
var n = this.getListChip(t);
n && n.push([ o, e, i ]);
},
updateChipForBetSession: function(t) {
var e = this;
0 !== t.length && t.map(function(t) {
0 !== t.length && t.map(function(t) {
var i = parseInt(t.BetSide), o = parseInt(t.BetValue), n = e.controller.createChip(cc.BauCuaMapChipSpriteFrame[o]), s = e.randomPosChip(o, i);
n.parent = e.layoutChip;
n.position = s;
var a = e.posGroupUsers.position, c = e.controller.positionPlayerUI();
try {
var r = c.indexOf(t.AccountID);
-1 !== r && (a = e.lstPosPlayer[r].position);
e.pushChipToArray(i, o, a, n);
} catch (t) {}
}, e);
}, this);
},
refundChips: function(t) {
var e = this;
t = parseInt(t);
var i = this.getListChip(t), o = 0;
if (0 !== i.length) {
i.map(function(i, n) {
try {
o = .1 * (n = n > 5 ? 5 : n);
var s = e.controller.createChip(cc.BauCuaMapChipSpriteFrame[i[1]]);
s.parent = e.layoutChip;
s.position = e.posDealer.position;
var a = e.randomPosChip(i[1], t);
if (cc.game.isPaused()) s.position = a; else {
var c = cc.moveTo(.3, a);
cc.director.getScheduler().schedule(function() {
s.runAction(c);
}, e, 0, 0, .1 * n, !1);
}
e.controller.setChipWin(i[0], i[1], i[2]);
e.controller.setChipWin(s, i[1], i[2]);
} catch (t) {}
}, this);
cc.director.getScheduler().schedule(function() {
this.runRefundChipForUser();
}, this, 0, 0, o + 1.5, !1);
}
},
runRefundChipForUser: function() {
var t = this;
try {
this.controller.getChipsWin().map(function(e, i) {
i > 5 && (i = 5);
var o = e[2];
cc.game.isPaused() ? t.controller.putChipToPool(e[0], e[1]) : cc.director.getScheduler().schedule(function() {
var t = this;
cc.tween(e[0]).to(.3, {
position: o
}).to(.3, {
opacity: 0
}).call(function() {
t.controller.putChipToPool(e[0], e[1]);
}, this).start();
}, t, 0, 0, .1 * i, !1);
}, this);
} catch (t) {}
},
getListChip: function(t) {
var e = null;
switch (t) {
case cc.BauCuaBetSide.Deer:
e = this.chipsBetDeer;
break;

case cc.BauCuaBetSide.Gourd:
e = this.chipsBetGourd;
break;

case cc.BauCuaBetSide.Rooster:
e = this.chipsBetRooster;
break;

case cc.BauCuaBetSide.Fish:
e = this.chipsBetFish;
break;

case cc.BauCuaBetSide.Crab:
e = this.chipsBetCrab;
break;

case cc.BauCuaBetSide.Lobster:
e = this.chipsBetLobster;
}
return e;
},
getChipsLose: function(t) {
var e = this;
t = parseInt(t);
var i = this.getListChip(t);
if (0 !== i.length) {
i.map(function(t, i) {
try {
i > 5 && (i = 5);
var o = e.posDealer.position;
cc.game.isPaused() ? e.controller.putChipToPool(t[0], t[1]) : cc.director.getScheduler().schedule(function() {
var e = cc.moveTo(.3, o), i = cc.callFunc(function() {
this.controller.putChipToPool(t[0], t[1]);
}, this);
t[0].runAction(cc.sequence(e, i));
}, e, 0, 0, .1 * i, !1);
} catch (t) {}
}, this);
i = [];
}
},
clearAllChips: function() {
this.controller.clearPools();
this.layoutChip.removeAllChildren();
this.layoutChip.active = !1;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaChipsView: [ function(t, e) {
"use strict";
cc._RF.push(e, "59fb1ayORpCcKhsDUCsmSTP", "BauCuaChipsView");
(function() {
cc.BauCuaChipsView = cc.Class({
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
this.controller = cc.BauCuaController.getInstance();
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
randomPosChip: function(t, e) {
var i = null;
switch (e = parseInt(e)) {
case cc.BauCuaBetSide.Deer:
i = this.posDeer;
break;

case cc.BauCuaBetSide.Gourd:
i = this.posGourd;
break;

case cc.BauCuaBetSide.Rooster:
i = this.posRooster;
break;

case cc.BauCuaBetSide.Fish:
i = this.posFish;
break;

case cc.BauCuaBetSide.Crab:
i = this.posCrab;
break;

case cc.BauCuaBetSide.Lobster:
i = this.posLobster;
}
var o = i.position, n = i.width / 2, s = -n, a = i.height / 2, c = -a, r = Math.floor(Math.random() * (n - s + 1) + s), u = Math.floor(Math.random() * (a - c + 1) + c);
o.x = o.x + r;
o.y = o.y + u;
return o;
},
moveChipBet: function(t, e, i, o) {
this.layoutChip.position = cc.v2(0, 0);
try {
t = parseInt(t);
var n = this.posChips[cc.BacaratMapChipSpriteFrame[t]].position;
if (i === cc.BacaratChipOf.USERS) {
n = this.posGroupUsers.position;
var s = this.controller.positionPlayerUI().indexOf(o);
-1 !== s && (n = this.lstPosPlayer[s].position);
}
var a = this.randomPosChip(t, e), c = this.controller.createChip(cc.BacaratMapChipSpriteFrame[t]);
c.parent = this.layoutChip;
c.position = n;
var r = cc.moveTo(.3, a);
cc.game.isPaused() ? c.position = a : c.runAction(r);
var u = n;
i === cc.BacaratChipOf.PLAYER && (u = this.lstPosPlayer[0].position);
this.pushChipToArray(e, t, u, c);
} catch (t) {}
},
pushChipToArray: function(t, e, i, o) {
var n = this.getListChip(t);
n && n.push([ o, e, i ]);
},
updateChipForBetSession: function(t) {
var e = this;
0 !== t.length && t.map(function(t) {
0 !== t.length && t.map(function(t) {
var i = parseInt(t.BetSide), o = parseInt(t.BetValue), n = e.controller.createChip(cc.BacaratMapChipSpriteFrame[o]), s = e.randomPosChip(o, i);
n.parent = e.layoutChip;
n.position = s;
var a = e.posGroupUsers.position, c = e.controller.positionPlayerUI();
try {
var r = c.indexOf(t.AccountID);
-1 !== r && (a = e.lstPosPlayer[r].position);
e.pushChipToArray(i, o, a, n);
} catch (t) {}
}, e);
}, this);
},
refundChips: function(t) {
var e = this;
t = parseInt(t);
var i = this.getListChip(t), o = 0;
if (0 !== i.length) {
i.map(function(i, n) {
try {
o = .1 * (n = n > 5 ? 5 : n);
var s = e.controller.createChip(cc.BacaratMapChipSpriteFrame[i[1]]);
s.parent = e.layoutChip;
s.position = e.posDealer.position;
var a = e.randomPosChip(i[1], t);
if (cc.game.isPaused()) s.position = a; else {
var c = cc.moveTo(.3, a);
cc.director.getScheduler().schedule(function() {
s.runAction(c);
}, e, 0, 0, .1 * n, !1);
}
e.controller.setChipWin(i[0], i[1], i[2]);
e.controller.setChipWin(s, i[1], i[2]);
} catch (t) {}
}, this);
cc.director.getScheduler().schedule(function() {
this.runRefundChipForUser();
}, this, 0, 0, o + 1.5, !1);
}
},
runRefundChipForUser: function() {
var t = this;
try {
this.controller.getChipsWin().map(function(e, i) {
i > 5 && (i = 5);
var o = e[2];
cc.game.isPaused() ? t.controller.putChipToPool(e[0], e[1]) : cc.director.getScheduler().schedule(function() {
var t = this;
cc.tween(e[0]).to(.3, {
position: o
}).to(.3, {
opacity: 0
}).call(function() {
t.controller.putChipToPool(e[0], e[1]);
}, this).start();
}, t, 0, 0, .1 * i, !1);
}, this);
} catch (t) {}
},
getListChip: function(t) {
var e = null;
switch (t) {
case cc.BauCuaBetSide.Deer:
e = this.chipsBetDeer;
break;

case cc.BauCuaBetSide.Gourd:
e = this.chipsBetGourd;
break;

case cc.BauCuaBetSide.Rooster:
e = this.chipsBetRooster;
break;

case cc.BauCuaBetSide.Fish:
e = this.chipsBetFish;
break;

case cc.BauCuaBetSide.Crab:
e = this.chipsBetCrab;
break;

case cc.BauCuaBetSide.Lobster:
e = this.chipsBetLobster;
}
return e;
},
getChipsLose: function(t) {
var e = this;
t = parseInt(t);
var i = this.getListChip(t);
if (0 !== i.length) {
i.map(function(t, i) {
try {
i > 5 && (i = 5);
var o = e.posDealer.position;
cc.game.isPaused() ? e.controller.putChipToPool(t[0], t[1]) : cc.director.getScheduler().schedule(function() {
var e = cc.moveTo(.3, o), i = cc.callFunc(function() {
this.controller.putChipToPool(t[0], t[1]);
}, this);
t[0].runAction(cc.sequence(e, i));
}, e, 0, 0, .1 * i, !1);
} catch (t) {}
}, this);
i = [];
}
},
clearAllChips: function() {
this.controller.clearPools();
this.layoutChip.removeAllChildren();
this.layoutChip.active = !1;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaController: [ function(t, e) {
"use strict";
cc._RF.push(e, "06b19azlqJA0oT9mtY9riZK", "BauCuaController");
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
e.prototype.setBauCuaView = function(t) {
return this.BauCuaView = t;
};
e.prototype.sendRequestOnHub = function(t, e, i) {
if (this.BauCuaView) return this.BauCuaView.sendRequestOnHub(t, e, i);
};
e.prototype.updateBalance = function(t) {
this.BauCuaView.updateBalance(t);
};
e.prototype.setInfoView = function(t) {
return this.BauCua_InfoView = t;
};
e.prototype.playerLeave = function(t) {
this.BauCuaView.playerLeave(t);
this.BauCua_InfoView.playerLeave(t);
};
e.prototype.updateSessionInfo = function(t) {
return this.BauCua_InfoView.updateSessionInfo(t);
};
e.prototype.updatePlayersInGame = function(t) {
return this.BauCua_InfoView.updatePlayersInGame(t);
};
e.prototype.winResult = function(t) {
return this.BauCua_InfoView.winResult(t);
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
e.prototype.setTotalWinResult = function(t) {
return this.totalWinResultResponse = t;
};
e.prototype.getTotalWinResult = function() {
return this.totalWinResultResponse;
};
e.prototype.winResultVip = function(t) {
return this.BauCua_InfoView.winResultVip(t);
};
e.prototype.updateTotalUserWin = function(t) {
return this.BauCua_InfoView.updateTotalUserWin(t);
};
e.prototype.playerShowBubbleChat = function(t) {
return this.BauCua_InfoView.playerShowBubbleChat(t);
};
e.prototype.updatePlayersUI = function(t) {
return this.BauCua_InfoView.updatePlayersUI(t);
};
e.prototype.updatePlayerInfor = function(t) {
return this.BauCua_InfoView.updatePlayerInfor(t);
};
e.prototype.updateBalanceCurrPlayer = function(t) {
return this.BauCua_InfoView.updateBalanceCurrPlayer(t);
};
e.prototype.updateBalancePlayer = function(t) {
return this.BauCua_InfoView.updateBalancePlayer(t);
};
e.prototype.updateRoomTimer = function(t) {
return this.BauCua_InfoView.updateRoomTimer(t);
};
e.prototype.onNotifyChangePhrase = function(t) {
return this.BauCua_InfoView.onNotifyChangePhrase(t);
};
e.prototype.updatePositionPlayerUI = function(t) {
return this.positionsUI = t;
};
e.prototype.positionPlayerUI = function() {
return this.positionsUI;
};
e.prototype.setAssetView = function(t) {
return this.BauCua_AssetsView = t;
};
e.prototype.getAssetView = function() {
return this.BauCua_AssetsView;
};
e.prototype.createChip = function(t) {
return this.BauCua_AssetsView.createChip(t);
};
e.prototype.getSfNan = function(t) {
return this.BauCua_AssetsView.getSfNan(t);
};
e.prototype.getSfDice = function(t) {
return this.BauCua_AssetsView.getSfDice(t);
};
e.prototype.getColorType = function(t) {
return this.BauCua_AssetsView.getColorType(t);
};
e.prototype.putChipToPool = function(t, e) {
return this.BauCua_AssetsView.putChipToPool(t, e);
};
e.prototype.clearPools = function() {
return this.BauCua_AssetsView.clearPools();
};
e.prototype.setResultView = function(t) {
this.resultView = t;
};
e.prototype.onShowResult = function(t) {
return this.resultView.onShowResult(t);
};
e.prototype.setDicesResult = function(t) {
return this.resultView.setDicesResult(t);
};
e.prototype.setBetView = function(t) {
return this.BauCua_BetView = t;
};
e.prototype.onBet = function(t) {
return this.BauCua_BetView.onBet(t);
};
e.prototype.enableClickBet = function(t) {
return this.BauCua_BetView.enableClickBet(t);
};
e.prototype.disableBetAgain = function(t) {
return this.BauCua_BetView.disableBetAgain(t);
};
e.prototype.playAnimationWin = function(t) {
return this.BauCua_BetView.playAnimationWin(t);
};
e.prototype.stopAnimationWin = function() {
return this.BauCua_BetView.stopAnimationWin();
};
e.prototype.updateTotalUserBetSide = function(t, e) {
return this.BauCua_BetView.updateTotalUserBetSide(t, e);
};
e.prototype.updateTotalBet = function(t) {
return this.BauCua_BetView.updateTotalBet(t);
};
e.prototype.updateBetOfAccount = function(t) {
return this.BauCua_BetView.updateBetOfAccount(t);
};
e.prototype.setChipsView = function(t) {
return this.BauCua_ChipsView = t;
};
e.prototype.moveChipBet = function(t, e, i, o) {
return this.BauCua_ChipsView.moveChipBet(t, e, i, o);
};
e.prototype.getChipsLose = function(t, e) {
return this.BauCua_ChipsView.getChipsLose(t, e);
};
e.prototype.refundChips = function(t) {
return this.BauCua_ChipsView.refundChips(t);
};
e.prototype.clearAllChips = function() {
return this.BauCua_ChipsView.clearAllChips();
};
e.prototype.initParamChips = function() {
return this.BauCua_ChipsView.initParamChips();
};
e.prototype.updateChipForBetSession = function(t) {
return this.BauCua_ChipsView.updateChipForBetSession(t);
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
e.prototype.setChipWin = function(t, e, i) {
return this.chipsWin.push([ t, e, i ]);
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
e.prototype.setIsNan = function(t) {
return this.isNan = t;
};
e.prototype.getIsNan = function() {
return this.isNan;
};
return e;
}();
cc.BauCuaController = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaGraphItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "f6cc85pn0ZJb4WRVuBTAt5g", "BauCuaGraphItem");
(function() {
cc.BauCuaGraphItem = cc.Class({
extends: cc.Component,
properties: {
spriteDice1: cc.Sprite,
spriteDice2: cc.Sprite,
spriteDice3: cc.Sprite
},
setResultDice: function(t) {
this.spriteDice1.spriteFrame = cc.BauCuaController.getInstance().getSfDice(parseInt(t.FirstDice) - 1);
this.spriteDice2.spriteFrame = cc.BauCuaController.getInstance().getSfDice(parseInt(t.SecondDice) - 1);
this.spriteDice3.spriteFrame = cc.BauCuaController.getInstance().getSfDice(parseInt(t.ThirdDice) - 1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaGraphView: [ function(t, e) {
"use strict";
cc._RF.push(e, "9eeb8W7Z51O4rjBBvASWXw2", "BauCuaGraphView");
(function() {
cc.BauCuaGraphView = cc.Class({
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
for (var t = 0; t < 50; t++) {
var e = cc.instantiate(this.itemDice);
this.poolItemDice.put(e);
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
} catch (t) {}
},
onEnable: function() {
this.resetList();
var t = this;
cc.director.getScheduler().schedule(function() {
t.getSoiCau();
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
new cc.BauCuaSoiCauCommand().execute(this);
},
onResponse: function(t) {
var e = this;
if (t) {
console.log("▶ Soi cầu: có", t.length, "kết quả");
t.forEach(function(t, i) {
var o = e.poolItemDice.get() || cc.instantiate(e.itemDice);
if (o) {
var n = o.getComponent("BauCuaGraphItem");
if (n) {
n.setResultDice(t);
0 !== i && (o.opacity = 150);
o.parent = e.layoutDices;
console.log("✅ Đã add dice", i, "vào layout");
} else cc.error("❌ Prefab thiếu BauCuaGraphItem!", o);
} else cc.error("❌ Không thể tạo dice item ở index", i);
});
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
calcSumDice: function(t) {
switch (t = parseInt(t)) {
case cc.BauCuaBetSide.Deer:
this.totalDeer += 1;
break;

case cc.BauCuaBetSide.Gourd:
this.totalGourd += 1;
break;

case cc.BauCuaBetSide.Rooster:
this.totalRooster += 1;
break;

case cc.BauCuaBetSide.Fish:
this.totalFish += 1;
break;

case cc.BauCuaBetSide.Crab:
this.totalCrab += 1;
break;

case cc.BauCuaBetSide.Lobster:
this.totalLobster += 1;
}
},
closeClicked: function() {
this.animation.play("closePopup");
var t = this;
cc.director.getScheduler().schedule(function() {
t.animation.stop();
cc.BauCuaPopupController.getInstance().destroyGraphView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaGroupItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "94cadzUIKZBtatLpEk8DLkX", "BauCuaGroupItem");
(function() {
cc.BauCuaGroupItem = cc.Class({
extends: cc.Component,
properties: {
avatar: cc.Avatar,
lbSId: cc.Label,
lbNickName: cc.Label,
lbBalance: cc.Label,
lbSTT: cc.Label
},
updateItem: function(t, e) {
var i = t.Account, o = i.Avatar;
o <= 0 && (o = 1);
this.lbSTT.string = e + 1;
this.lbSId.string = cc.Config.getInstance().getServiceNameNoFormat(i.ServiceID);
this.avatar.setAvatar(cc.AccountController.getInstance().getAvatarImage(o));
this.lbNickName.string = i.NickName;
this.lbBalance.string = cc.Tool.getInstance().formatNumber(i.Balance);
this.item = t;
this.itemID = e;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaGroupUserCommand: [ function(t, e) {
"use strict";
cc._RF.push(e, "b37d4deOxpIGKaAcnmZBNcy", "BauCuaGroupUserCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t) {
var e = cc.SubdomainName.BAUCUA;
return cc.ServerConnector.getInstance().sendRequest(e, "api/BauCua/GetPlayersNotInGame", function(e) {
var i = JSON.parse(e);
return t.onGetGroupUserResponse(i);
});
};
return t;
}();
cc.BauCuaGroupUserCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaGroupUserListView: [ function(t, e) {
"use strict";
cc._RF.push(e, "74fda8fZLJPeJTPlTwB2Bim", "BauCuaGroupUserListView");
(function() {
cc.BauCuaGroupUserListView = cc.Class({
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
for (var i = Math.min(this.spawnCount, e), o = 0; o < i; ++o) {
var n = cc.instantiate(this.itemTemplate);
this.content.addChild(n);
n.setPosition(0, -n.height * (.5 + o) - this.spacing * (o + 1));
n.getComponent(cc.BacaratGroupItem).updateItem(this.messages[o], o);
this.items.push(n);
}
this.rootContentY = this.content.y;
},
update: function(t) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.items, i = this.bufferZone, o = this.scrollView.content.y < this.lastContentPosY, n = (this.itemTemplate.height + this.spacing) * e.length, s = 0; s < e.length; ++s) {
var a = this.getPositionInView(e[s]);
if (o) {
if (a.y < -i && e[s].y + n < 0) {
e[s].y = e[s].y + n;
var c = e[s].getComponent(cc.BacaratGroupItem), r = c.itemID - e.length;
c.updateItem(this.messages[r], r);
}
} else if (a.y > i && e[s].y - n > -this.content.height) {
e[s].y = e[s].y - n;
r = (c = e[s].getComponent(cc.BacaratGroupItem)).itemID + e.length;
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
BauCuaGroupUserView: [ function(t, e) {
"use strict";
cc._RF.push(e, "d14e0ecA9dIfZz4q4909TCJ", "BauCuaGroupUserView");
(function() {
cc.BauCuaGroupUserView = cc.Class({
extends: cc.Component,
properties: {
groupUserListView: cc.BauCuaGroupUserListView
},
getGroupUser: function() {
new cc.BauCuaGroupUserCommand().execute(this);
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
cc.director.getScheduler().schedule(function() {
cc.BauCuaPopupController.getInstance().destroyGroupUserView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaHelpView: [ function(t, e) {
"use strict";
cc._RF.push(e, "cd1ebtr2SxLVp3rZg/dAd/8", "BauCuaHelpView");
(function() {
cc.BauCuaHelpView = cc.Class({
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
cc.BauCuaPopupController.getInstance().destroyHelpView();
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaHistoryItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "67b25B/qApEj6R/spVoTiP4", "BauCuaHistoryItem");
(function() {
cc.BauCuaHistoryItem = cc.Class({
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
updateItem: function(t, e) {
this.lbSession.string = "#" + t.SessionID;
this.lbTime.string = cc.Tool.getInstance().convertUTCTime(t.CreateTime);
var i = cc.BauCuaController.getInstance(), o = -1 != t.Dice1;
this.activeResultDices(o);
if (o) {
this.spriteDice1.spriteFrame = i.getSfDice(parseInt(t.Dice1) - 1);
this.spriteDice2.spriteFrame = i.getSfDice(parseInt(t.Dice2) - 1);
this.spriteDice3.spriteFrame = i.getSfDice(parseInt(t.Dice3) - 1);
}
this.spriteDiceBet.spriteFrame = i.getSfDice(parseInt(t.GateID) - 1);
this.lbBet.string = cc.Tool.getInstance().formatNumber(t.Bet);
this.lbWin.string = cc.Tool.getInstance().formatNumber(t.Award);
this.item = t;
this.itemID = e;
},
activeResultDices: function(t) {
this.spriteDice1.node.active = t;
this.spriteDice2.node.active = t;
this.spriteDice3.node.active = t;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaHistoryListView: [ function(t, e) {
"use strict";
cc._RF.push(e, "6cdc7rxQylP+YNeDdKSjxGH", "BauCuaHistoryListView");
(function() {
cc.BauCuaHistoryListView = cc.Class({
extends: cc.Component,
properties: {
itemTemplate: cc.Node,
scrollView: cc.ScrollView,
spawnCount: 0,
spacing: 0,
bufferZone: 0
},
initialize: function(t) {
this.messages = t;
var e = this.messages.length;
this.content.height = e * (this.itemTemplate.height + this.spacing) + this.spacing;
for (var i = Math.min(this.spawnCount, e), o = 0; o < i; ++o) {
var n = cc.instantiate(this.itemTemplate);
this.content.addChild(n);
n.setPosition(0, -n.height * (.5 + o) - this.spacing * (o + 1));
n.getComponent(cc.BauCuaHistoryItem).updateItem(this.messages[o], o);
this.items.push(n);
}
this.rootContentY = this.content.y;
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
update: function(t) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.items, i = this.bufferZone, o = this.scrollView.content.y < this.lastContentPosY, n = (this.itemTemplate.height + this.spacing) * e.length, s = 0; s < e.length; ++s) {
var a = this.getPositionInView(e[s]);
if (o) {
if (a.y < -i && e[s].y + n < 0) {
e[s].y = e[s].y + n;
var c = e[s].getComponent(cc.BauCuaHistoryItem), r = c.itemID - e.length;
c.updateItem(this.messages[r], r);
}
} else if (a.y > i && e[s].y - n > -this.content.height) {
e[s].y = e[s].y - n;
r = (c = e[s].getComponent(cc.BauCuaHistoryItem)).itemID + e.length;
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
BauCuaHistoryView: [ function(t, e) {
"use strict";
cc._RF.push(e, "5d6d1MSlzNEEJXJlPutrqhh", "BauCuaHistoryView");
(function() {
cc.BauCuaHistoryView = cc.Class({
extends: cc.Component,
properties: {
historyListView: cc.BauCuaHistoryListView
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
new cc.BauCuaHistoryCommand().execute(this);
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
cc.BauCuaPopupController.getInstance().destroyHistoryView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaInfoView: [ function(t, e) {
"use strict";
cc._RF.push(e, "38fb6QnSHFPMJR63SagrshH", "BauCuaInfoView");
(function() {
cc.BauCuaInfoView = cc.Class({
extends: cc.Component,
properties: {
lbTime: cc.Label,
lbSessionID: cc.Label,
lbStatus: cc.Label,
lbTotalPlayer: cc.Label,
lstPlayers: [ cc.BauCuaPlayer ],
skeletonBat: sp.Skeleton,
batNan: cc.Node,
nodeVi: cc.Node,
lbTotalUserWin: cc.Label
},
onLoad: function() {
this.controller = cc.BauCuaController.getInstance();
this.controller.setInfoView(this);
this.activeTimer(!1);
this.showStatus(null);
this.currentState = null;
this.interval = null;
this.time = 0;
this.currPlayer = this.lstPlayers[0];
this.skeletonBat.node.active = !0;
this.animTotalUserWin = this.lbTotalUserWin.node.getComponent(cc.Animation);
},
onEnable: function() {
this.resetPlate();
},
onDestroy: function() {
try {
this.interval && clearInterval(this.interval);
} catch (t) {}
},
activeOpenPlate: function() {
var t = this.controller.getIsNan();
this.nodeVi.active = !0;
this.batNan.active = t;
this.skeletonBat.node.active = !t;
},
forceOpenPlate: function(t) {
this.nodeVi.active = !0;
var e = this.controller.getIsNan();
!e && t || !t && e ? this.playAnimBat(cc.BauCuaAnim.OPEN_PLATE) : this.batNan.active = !1;
},
resetPlate: function() {
this.nodeVi.active = !1;
this.batNan.active = !1;
this.batNan.position = cc.v2(0, 47);
this.skeletonBat.node.active = !0;
},
playAnimBat: function(t) {
this.skeletonBat.node.active = !0;
this.batNan.active = !1;
this.skeletonBat.clearTracks();
this.skeletonBat.setToSetupPose();
this.skeletonBat.setAnimation(1, t, !1);
},
onNotifyChangePhrase: function(t) {
var e = parseInt(t.Phrase);
switch (e) {
case cc.BauCuaPharse.None:
if (this.currentState !== e) {
this.controller.enableClickBet(!1);
this.showStatus(null);
}
break;

case cc.BauCuaPharse.Waiting:
if (this.currentState !== e) {
this.resetPlate();
this.controller.enableClickBet(!1);
this.controller.stopAnimationWin();
this.controller.clearAllChips();
this.controller.initParamChips();
this.controller.clearBetLog(this.controller.getBetLogSession());
this.controller.setBetLogSession(this.controller.getBetLogSession() + 1);
this.resetPlayerUI();
this.updateTotalUserWin(null);
this.playAnimBat(cc.BauCuaAnim.CLOSE_PLATE);
this.showStatus("CHỜ PHIÊN MỚI");
}
break;

case cc.BauCuaPharse.Shaking:
if (this.currentState !== e) {
this.playAnimBat(cc.BauCuaAnim.SHAKING);
this.controller.enableClickBet(!1);
}
break;

case cc.BauCuaPharse.Betting:
if (this.currentState !== e) {
this.resetPlate();
this.controller.setWinResult(null);
this.controller.setWinVipResult(null);
this.controller.setTotalWinResult(null);
this.controller.enableClickBet(!0);
this.activeTimer(!0);
this.showStatus("ĐẶT CỬA");
}
break;

case cc.BauCuaPharse.EndBetting:
if (this.currentState !== e) {
this.controller.enableClickBet(!1);
this.showStatus("HẾT THỜI GIAN ĐẶT");
}
break;

case cc.BauCuaPharse.OpenPlate:
if (this.currentState !== e) {
this.playAnimBat(cc.BauCuaAnim.CLOSE_PLATE);
this.controller.enableClickBet(!1);
this.controller.setDicesResult(t);
this.activeOpenPlate();
this.activeTimer(!1);
this.controller.getIsNan() || this.forceOpenPlate(!0);
this.showStatus("MỞ BÁT");
}
break;

case cc.BauCuaPharse.ShowResult:
if (this.currentState !== e) {
this.controller.initChipsWin();
this.forceOpenPlate(!1);
this.controller.enableClickBet(!1);
this.controller.onShowResult(t);
this.activeTimer(!0);
this.showStatus(null);
}
}
this.controller.setCurrentState(e);
this.currentState = e;
this.updateSessionId(t.SessionID);
this.controller.updateTotalBet(t);
},
updateSessionInfo: function() {},
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
var i = 0;
this.positionsUI[i] = lngui.UserManager.instance.mainUserInfo.AccountID;
i++;
t.map(function(t) {
if (t.AccountID != lngui.UserManager.instance.mainUserInfo.AccountID && i <= 6) {
e.positionsUI[i] = t.AccountID;
i++;
}
}, this);
this.positionsUI.forEach(function(e, i) {
if (0 != e) try {
var o = t.filter(function(t) {
return t.AccountID == e;
});
o.length > 0 && 0 != i && this.lstPlayers[i].registerPlayer(o[0].Account);
} catch (t) {} else try {
this.lstPlayers[i].unRegisterPlayer();
} catch (t) {}
}, this);
this.controller.updatePositionPlayerUI(this.positionsUI);
},
updateBalanceCurrPlayer: function(t) {
this.currPlayer.updateChipNormal(t);
},
updateBalancePlayer: function(t) {
var e = t[0], i = t[3];
if (this.positionsUI) {
var o = this.positionsUI.indexOf(e);
-1 != o && this.lstPlayers[o].updateChip(i);
}
},
winResult: function(t) {
this.currPlayer.playerResultUI(t.Award, t.Balance);
},
winResultVip: function(t) {
var e = this;
t.map(function(t) {
if (e.positionsUI.includes(t.AccountID) && t.AccountID != lngui.UserManager.instance.mainUserInfo.AccountID) {
var i = e.positionsUI.indexOf(t.AccountID);
e.lstPlayers[i].playerResultUI(t.Award, t.Balance);
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
updateRoomTimer: function(t) {
if (this.lbTime) {
var e = t;
this.timeInt = e;
if (e > 0) {
this.lbTime.string = e;
this.currentState === cc.BauCuaPharse.EndBetting ? this.lbTime.node.color = cc.Color.RED : this.lbTime.node.color = cc.Color.GREEN;
[ cc.BauCuaPharse.Waiting, cc.BauCuaPharse.None, cc.BauCuaPharse.Shaking, cc.BauCuaPharse.ShowResult, cc.BauCuaPharse.OpenPlate ].includes(this.currentState) && (this.lbTime.node.color = cc.Color.WHITE);
}
}
},
playerShowBubbleChat: function(t) {
0 == t[4] && t[3] != lngui.UserManager.instance.mainUserInfo.AccountID || (cc.ChatRoomController.getInstance().checkIsEmotion(t) ? this.lstPlayers.forEach(function(e) {
var i = e.nickName;
t[0] === i && e.showEmotion(cc.ChatRoomController.getInstance().getIndexEmotion(t), t);
}) : this.lstPlayers.forEach(function(e) {
var i = e.nickName;
t[0] === i && e.showBubbleChat(t);
}));
},
updateTotalUserWin: function(t) {
this.lbTotalUserWin.node.active = !1;
if (null != t && 0 != t) {
this.lbTotalUserWin.string = "+" + cc.Tool.getInstance().formatNumber(t);
this.lbTotalUserWin.node.active = !0;
this.lbTotalUserWin.node.scaleY = 0;
this.animTotalUserWin.play("xxWin");
}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaMap: [ function(t, e) {
"use strict";
cc._RF.push(e, "91cc7aJCKZAao+Wot5LWyGi", "BauCuaMap");
cc.BauCuaMapChip = {
"1K": 0,
"5K": 1,
"10K": 2,
"100K": 3,
"500K": 4,
"5M": 5
};
cc.BauCuaMapChipSpriteFrame = {
1e3: 0,
5e3: 1,
1e4: 2,
1e5: 3,
5e5: 4,
5e6: 5
};
cc._RF.pop();
}, {} ],
BauCuaPharse: [ function(t, e) {
"use strict";
cc._RF.push(e, "55ea9nCKzhOs4iFSp+ar1dK", "BauCuaPharse");
cc.BauCuaPharse = {
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
BauCuaPlayer: [ function(t, e) {
"use strict";
cc._RF.push(e, "70580b0NdlHGpb00WBMenvv", "BauCuaPlayer");
(function() {
cc.BauCuaPlayer = cc.Class({
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
this.avatar.setAvatar(cc.BauCuaController.getInstance().getAvatars()[e]);
this.nodeInfo.active = !0;
this.nickName = t.NickName;
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
this.avatar.setAvatar(cc.BauCuaController.getInstance().getAvatarDef());
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
BauCuaPopupController: [ function(t, e) {
"use strict";
cc._RF.push(e, "317abk/jApMiKByQLeHM+4d", "BauCuaPopupController");
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
return this.baucuaPopupView = t;
};
e.prototype.createTopView = function() {
return this.baucuaPopupView.createTopView();
};
e.prototype.destroyTopView = function() {
return this.baucuaPopupView.destroyTopView();
};
e.prototype.createHelpView = function() {
return this.baucuaPopupView.createHelpView();
};
e.prototype.destroyHelpView = function() {
return this.baucuaPopupView.destroyHelpView();
};
e.prototype.createHistoryView = function() {
return this.baucuaPopupView.createHistoryView();
};
e.prototype.destroyHistoryView = function() {
return this.baucuaPopupView.destroyHistoryView();
};
e.prototype.createGroupUserView = function() {
return this.baucuaPopupView.createGroupUserView();
};
e.prototype.destroyGroupUserView = function() {
return this.baucuaPopupView.destroyGroupUserView();
};
e.prototype.createGraphView = function() {
return this.baucuaPopupView.createGraphView();
};
e.prototype.destroyGraphView = function() {
return this.baucuaPopupView.destroyGraphView();
};
return e;
}();
cc.BauCuaPopupController = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaPopupView: [ function(t, e) {
"use strict";
cc._RF.push(e, "5f3887doXlGkqS72aUgHKDe", "BauCuaPopupView");
(function() {
cc.BauCuaPopupView = cc.Class({
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
cc.BauCuaPopupController.getInstance().setPopupView(this);
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
BauCuaResultView: [ function(t, e) {
"use strict";
cc._RF.push(e, "b84652UCh9Mv7W5dfvMRUci", "BauCuaResultView");
(function() {
cc.BauCuaResultView = cc.Class({
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
this.controller = cc.BauCuaController.getInstance();
this.controller.setResultView(this);
this.listBetSide = [ 1, 2, 3, 4, 5, 6 ];
},
setDicesResult: function(t) {
var e = t.Result, i = parseInt(e.Dice1), o = parseInt(e.Dice2), n = parseInt(e.Dice3);
this.setDiceResult(this.spriteFistDice, i - 1);
this.setDiceResult(this.spriteSecondDice, o - 1);
this.setDiceResult(this.spriteThirdDice, n - 1);
},
onShowResult: function(t) {
var e = this;
this.setDicesResult(t);
var i = t.Result, o = [ parseInt(i.Dice1), parseInt(i.Dice2), parseInt(i.Dice3) ];
(o = cc.Tool.getInstance().arrUnique(o)).map(function(t) {
return e.controller.playAnimationWin(t);
});
var n = o, s = [];
this.listBetSide.map(function(t) {
n.includes(t) || s.push(t);
});
if (!cc.game.isPaused()) {
s.map(function(t) {
e.controller.getChipsLose(t);
});
cc.director.getScheduler().schedule(function() {
var t = this;
n.map(function(e) {
t.controller.refundChips(e);
}, this);
}, this, 0, 0, 1, !1);
cc.director.getScheduler().schedule(function() {
var t = this.controller.getWinResult();
t && this.controller.winResult(t);
var e = this.controller.getWinVipResult();
e && this.controller.winResultVip(e);
var i = this.controller.getTotalWinResult();
i && this.controller.updateTotalUserWin(i);
}, this, 0, 0, 3.5, !1);
}
},
setDiceResult: function(t, e) {
t.spriteFrame = this.controller.getSfDice(e);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaSettingView: [ function(t, e) {
"use strict";
cc._RF.push(e, "edeeagcCzRIhLhK/wlFhjwy", "BauCuaSettingView");
(function() {
cc.BauCuaSettingView = cc.Class({
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
BauCuaTopItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "d76b5RaGX9IILNXXQVj0i1W", "BauCuaTopItem");
(function() {
cc.BauCuaTopItem = cc.Class({
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
updateItem: function(t, e) {
this.spriteTop.node.active = !1;
this.lbRank.string = e + 3;
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
BauCuaTopListView: [ function(t, e) {
"use strict";
cc._RF.push(e, "080e9I5o1xLjL8fZZ4iLNAM", "BauCuaTopListView");
(function() {
cc.BauCuaTopListView = cc.Class({
extends: cc.Component,
properties: {
itemTemplate: cc.Node,
scrollView: cc.ScrollView,
spawnCount: 0,
spacing: 0,
bufferZone: 0
},
initialize: function(t) {
this.messages = t;
var e = this.messages.length;
this.content.height = e * (this.itemTemplate.height + this.spacing) + this.spacing;
for (var i = Math.min(this.spawnCount, e), o = 0; o < i; ++o) {
var n = cc.instantiate(this.itemTemplate);
this.content.addChild(n);
n.setPosition(0, -n.height * (.5 + o) - this.spacing * (o + 1));
n.getComponent(cc.BauCuaTopItem).updateItem(this.messages[o], o);
this.items.push(n);
}
this.rootContentY = this.content.y;
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
update: function(t) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.items, i = this.bufferZone, o = this.scrollView.content.y < this.lastContentPosY, n = (this.itemTemplate.height + this.spacing) * e.length, s = 0; s < e.length; ++s) {
var a = this.getPositionInView(e[s]);
if (o) {
if (a.y < -i && e[s].y + n < 0) {
e[s].y = e[s].y + n;
var c = e[s].getComponent(cc.BauCuaTopItem), r = c.itemID - e.length;
c.updateItem(this.messages[r], r);
}
} else if (a.y > i && e[s].y - n > -this.content.height) {
e[s].y = e[s].y - n;
r = (c = e[s].getComponent(cc.BauCuaTopItem)).itemID + e.length;
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
BauCuaTopView: [ function(t, e) {
"use strict";
cc._RF.push(e, "e1d70/oCihGxKwM6cKZ1hpz", "BauCuaTopView");
(function() {
cc.BauCuaTopView = cc.Class({
extends: cc.Component,
properties: {
topListView: cc.BauCuaTopListView
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
new cc.BauCuaWinnerCommand().execute(this);
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
cc.BauCuaPopupController.getInstance().destroyTopView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCuaView: [ function(t, e) {
"use strict";
cc._RF.push(e, "c4b2fpiOzpPY4Gep5vyjTj3", "BauCuaView");
var i = t("NetConfig");
(function() {
cc.BauCuaView = cc.Class({
extends: cc.Component,
properties: {
listAvtars: [ cc.SpriteFrame ]
},
onLoad: function() {
this.controller = cc.BauCuaController.getInstance();
cc.BauCuaController.getInstance().setBauCuaView(this);
cc.BauCuaController.getInstance().setAvatars(this.listAvtars);
cc.BauCuaController.getInstance().setAvatarDef(this.avatarDef);
this.controller.setBauCuaView(this);
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
this.controller.setBauCuaView(null);
if (cc.sys.isNative) {
cc.loader.releaseResDir("baucua/prefabs");
cc.loader.releaseResDir("baucua/images");
}
lngui.UIWaitingLayout.hideWaiting();
},
disconnectAndLogout: function() {
this.BauCuaHub && this.BauCuaHub.disconnect();
this.lastTimeReconnect = new Date().getTime();
},
connectHub: function() {
var t = {
url: "https://baucuato." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
hub: "baucuahub",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate,
ip: lngui.ConfigManager.instance.ConfigInfo.Gate
};
cc.systemEvent.off("OnBauCuaToWebSocKet", this.onResponeData, this);
cc.systemEvent.on("OnBauCuaToWebSocKet", this.onResponeData, this);
this.BauCuaHub = new lngui.GateSignalR();
this.BauCuaHub.connect("OnBauCuaToWebSocKet", t.url, t.hub, t.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
},
sendRequestOnHub: function(t, e, i) {
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
this.sendSignalR("Bet", [ e, i ]);
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
this.BauCuaHub && this.BauCuaHub.send(t, e);
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
var i = t.A[0];
e.controller.onNotifyChangePhrase(i);
e.controller.updateTotalBet(i);
break;

case cc.MethodHubOnName.NOTIFY_CHANGE_PHRASE:
e.controller.onNotifyChangePhrase(t.A[0]);
break;

case cc.MethodHubOnName.UPDATE_ROOM_TIME:
e.controller.updateRoomTimer(parseInt(t.A[0]));
break;

case cc.MethodHubOnName.SUMMARY_PLAYER:
e.controller.updatePlayersInGame(t.A[0]);
break;

case cc.MethodHubOnName.JOIN_GAME:
e.controller.updatePlayerInfor(t.A[0]);
e.controller.onNotifyChangePhrase(t.A[1]);
t.A[3].length > 0 && t.A[3].map(function(t) {
e.controller.updateTotalUserBetSide(t.BetSide, t.SummaryBet);
}, e);
e.controller.updateChipForBetSession(t.A[4]);
break;

case cc.MethodHubOnName.VIP_PLAYERS:
var o = t.A[0];
o.length > 0 && e.controller.updatePlayersUI(o);
break;

case cc.MethodHubOnName.GAME_HISTORY:
break;

case cc.MethodHubOnName.BET_OF_ACCOUNT:
e.controller.updateBetOfAccount(t.A[0]);
break;

case cc.MethodHubOnName.BET_SUCCESS:
var n = e.controller.getBetLogSession();
e.controller.setBetLog({
sessionID: n,
value: t.A[0].BetValue,
betSide: t.A[0].BetSide
});
e.controller.updateBalanceCurrPlayer(t.A[1]);
lngui.UserManager.instance.mainUserInfo.Money = t.A[0].Balance;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
e.controller.updateTotalUserBetSide(t.A[0].BetSide, t.A[0].SummaryBet);
e.controller.moveChipBet(t.A[0].BetValue, t.A[0].BetSide, 1, t.A[0].AccountID);
break;

case cc.MethodHubOnName.PLAYER_BET:
if (t.A[0] != lngui.UserManager.instance.mainUserInfo.AccountID) {
e.controller.updateBalancePlayer(t.A);
e.controller.moveChipBet(t.A[1], t.A[2], 2, t.A[0]);
}
break;

case cc.MethodHubOnName.WIN_RESULT:
e.controller.setWinResult(t.A[0]);
lngui.UserManager.instance.mainUserInfo.Money = t.A[0].Balance;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
break;

case cc.MethodHubOnName.WIN_RESULT_VIP:
t.A.length > 0 && e.controller.setWinVipResult(t.A[0]);
break;

case cc.MethodHubOnName.TOTAL_WIN_MONEY:
e.controller.setTotalWinResult(parseInt(t.A[0]));
break;

case cc.MethodHubOnName.PLAYER_MESSAGE:
cc.PopupController.getInstance().showMessage(t.A[0]);
break;

case cc.MethodHubOnName.MESSAGE:
cc.game.isPaused() || cc.PopupController.getInstance().showMessage(t.A[0]);
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
playerLeave: function(t) {
if (t[0] === lngui.UserManager.instance.mainUserInfo.AccountID) {
var e = t[1];
lngui.UIScreenManager.instance.popToRootScreen();
cc.PopupController.getInstance().showMessage(e);
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
BauCua_HistoryCommand: [ function(t, e) {
"use strict";
cc._RF.push(e, "f02b3O03jlPWZQCjHYOLs2z", "BauCua_HistoryCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t) {
var e = cc.SubdomainName.BAUCUA;
return cc.ServerConnector.getInstance().sendRequest(e, "api/BauCua/GetHistory?top=50", function(e) {
var i = JSON.parse(e);
return t.onGetHistoryResponse(i);
});
};
return t;
}();
cc.BauCuaHistoryCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCua_SoiCauCommand: [ function(t, e) {
"use strict";
cc._RF.push(e, "c907egZ0uZEIYyGyPy/pz2I", "BauCua_SoiCauCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t) {
var e = cc.SubdomainName.BAUCUA;
return cc.ServerConnector.getInstance().sendRequest(e, "api/BauCua/GetSoiCau", function(e) {
var i = JSON.parse(e);
return t.onResponse(i);
});
};
return t;
}();
cc.BauCuaSoiCauCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
BauCua_WinnerCommand: [ function(t, e) {
"use strict";
cc._RF.push(e, "a0de4mlhK9Oo7aU2Pjz7ZbK", "BauCua_WinnerCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t) {
var e = cc.SubdomainName.BAUCUA;
return cc.ServerConnector.getInstance().sendRequest(e, "api/BauCua/GetBigWinner", function(e) {
var i = JSON.parse(e);
return t.onGetBigWinnerResponse(i);
});
};
return t;
}();
cc.BauCuaWinnerCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
DragonTigerButtonBet: [ function(t, e) {
"use strict";
cc._RF.push(e, "326b9FyvN1DJJMqwslqJcjx", "DragonTigerButtonBet");
(function() {
cc.DragonTigerButtonBet = cc.Class({
extends: cc.Component,
properties: {
spriteButtons: [ cc.SpriteFrame ]
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
ItemDice: [ function(t, e) {
"use strict";
cc._RF.push(e, "fcf12CqyphCn4+zGQ0GhSkQ", "ItemDice");
(function() {
cc.ItemDice = cc.Class({
extends: cc.Component,
properties: {}
});
}).call(void 0);
cc._RF.pop();
}, {} ]
}, {}, [ "BauCuaChipsView", "DragonTigerButtonBet", "AudioPoolBauCua", "BauCuaGroupUserCommand", "BauCua_HistoryCommand", "BauCua_SoiCauCommand", "BauCua_WinnerCommand", "BauCuaAnim", "BauCuaBetSide", "BauCuaMap", "BauCuaPharse", "BauCuaController", "BauCuaPopupController", "BauCuaGraphItem", "BauCuaGraphView", "ItemDice", "BauCuaGroupItem", "BauCuaGroupUserListView", "BauCuaGroupUserView", "BauCuaHelpView", "BauCuaHistoryItem", "BauCuaHistoryListView", "BauCuaHistoryView", "BauCuaPlayer", "BauCuaTopItem", "BauCuaTopListView", "BauCuaTopView", "BauCuaAssetsView", "BauCuaBetView", "BauCuaButtonBet", "BauCuaChipView", "BauCuaInfoView", "BauCuaPopupView", "BauCuaResultView", "BauCuaSettingView", "BauCuaView" ]);