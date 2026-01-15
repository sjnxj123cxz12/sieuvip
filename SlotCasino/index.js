window.__require = function n(e, t, i) {
function a(r, s) {
if (!t[r]) {
if (!e[r]) {
var u = r.split("/");
u = u[u.length - 1];
if (!e[u]) {
var g = "function" == typeof __require && __require;
if (!s && g) return g(u, !0);
if (o) return o(u, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = u;
}
var p = t[r] = {
exports: {}
};
e[r][0].call(p.exports, function(n) {
return a(e[r][1][n] || n);
}, p, p.exports, n, e, t, i);
}
return t[r].exports;
}
for (var o = "function" == typeof __require && __require, r = 0; r < i.length; r++) a(i[r]);
return a;
}({
SlotCasino: [ function(n, e, t) {
"use strict";
cc._RF.push(e, "a3e40bxpP9DpbcKlZa1DOKV", "SlotCasino");
var i, a = this && this.__extends || (i = function(n, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(n, e) {
n.__proto__ = e;
} || function(n, e) {
for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
})(n, e);
}, function(n, e) {
i(n, e);
function t() {
this.constructor = n;
}
n.prototype = null === e ? Object.create(e) : (t.prototype = e.prototype, new t());
}), o = this && this.__decorate || function(n, e, t, i) {
var a, o = arguments.length, r = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, t) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(n, e, t, i); else for (var s = n.length - 1; s >= 0; s--) (a = n[s]) && (r = (o < 3 ? a(r) : o > 3 ? a(e, t, r) : a(e, t)) || r);
return o > 3 && r && Object.defineProperty(e, t, r), r;
};
Object.defineProperty(t, "__esModule", {
value: !0
});
var r = cc._decorator, s = r.ccclass, u = r.property, g = function(n) {
a(e, n);
function e() {
var e = null !== n && n.apply(this, arguments) || this;
e.Soduvi = null;
e.SoDuUser = null;
e.ThucNhan = null;
e.Quy1 = null;
e.Quy2 = null;
e.edbAmount = null;
e.nodeInfoTransfer = null;
e.nodeView = null;
e.webViewPlay = null;
e.titleSanh = null;
e.edbCodeGame = null;
e.codeGame = "";
e.amount = 0;
e.amountnhan = 0;
e.isNap = !0;
e.TenSanh = "";
return e;
}
t = e;
e.prototype.onLoad = function() {
this.getListGame();
};
e.prototype.initLobby = function() {
this.updateBalance();
this.nodeInfoTransfer.active = !0;
this.nodeView.active = !1;
this.Quy1.string = "Nổ Hũ";
this.Quy2.string = this.TenSanh;
};
e.prototype.getListGame = function() {
var n = this;
lngui.UIWaitingLayout.showWaiting();
var e = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/tcg/GetListSingleLobbyGames?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken;
lngui.Https.get(e, function(e) {
if (e) {
if (1 != e.ResponseCode) {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup(e.Message);
return;
}
lngui.UIWaitingLayout.hideWaiting();
var t = n.getGameByCode(e.Data, n.codeGame);
n.titleSanh.string = t.gameName;
n.TenSanh = t.productCode;
n.providerCode = t.productType;
n.gameCode = t.tcgGameCode;
n.initLobby();
} else {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup(e);
}
});
};
e.prototype.getListGameTest = function() {
var n = this;
lngui.UIWaitingLayout.showWaiting();
var e = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/tcg/GetListSingleLobbyGames?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken;
lngui.Https.get(e, function(e) {
if (e) {
if (1 != e.ResponseCode) {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup(e.Message);
return;
}
lngui.UIWaitingLayout.hideWaiting();
var t = n.getGameByCode(e.Data, n.edbCodeGame.string);
n.titleSanh.string = t.gameName;
n.TenSanh = t.productCode;
n.providerCode = t.productType;
n.gameCode = t.tcgGameCode;
n.initLobby();
} else {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup(e);
}
});
};
e.prototype.updateBalance = function() {
var n = this;
lngui.UIWaitingLayout.showWaiting();
var e = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/tcg/GetBalance?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken + "&providerCode=" + this.providerCode;
lngui.Https.get(e, function(e) {
if (e) {
if (1 != e.ResponseCode) {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup(e.Message);
return;
}
lngui.UIWaitingLayout.hideWaiting();
var i = e.Data;
n.SoDuUser.string = t.formatNumber(i.Balance);
n.Soduvi.string = t.formatNumber(i.CasinoBalance);
n.rateIn = i.RateIn;
n.rateOut = i.RateOut;
} else {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup(e);
}
});
};
e.prototype.OnClickChangeWallet = function() {
this.edbAmount.string = "";
this.ThucNhan.string = "";
if (this.isNap) {
this.isNap = !1;
this.Quy1.string = this.TenSanh;
this.Quy2.string = "Nổ Hũ";
} else {
this.isNap = !0;
this.Quy1.string = "Nổ Hũ";
this.Quy2.string = this.TenSanh;
}
};
e.prototype.OnClickBack = function() {
lngui.GameCoreManager.instance.onBackToLobby();
};
e.prototype.OnClickCloseView = function() {
this.updateBalance();
this.nodeInfoTransfer.active = !0;
this.nodeView.active = !1;
};
e.prototype.OnClickPlayNow = function() {
var n = this, e = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/tcg/LaunchGame?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken + "&providerCode=" + this.providerCode + "&gameCode=" + this.gameCode + "&isMobile=" + cc.sys.isMobile;
lngui.Https.get(e, function(e) {
if (e) {
if (1 != e.ResponseCode) {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup(e.Message);
return;
}
lngui.UIWaitingLayout.hideWaiting();
n.webViewPlay.url = e.Data;
n.nodeInfoTransfer.active = !1;
n.nodeView.active = !0;
} else {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup(e.Message);
}
});
};
e.prototype.getUrl = function(n, e) {
var t = n, i = cc.loader.getXMLHttpRequest();
i.onreadystatechange = function() {
4 === i.readyState && (200 == i.status ? e(i.responseText, i.status) : i.responseText.length > 0 ? e(i.responseText, i.status) : e("error_code : " + i.status, null));
};
i.ontimeout = function() {
e("Hệ thống không phản hồi.", null);
};
i.timeout = 3e4;
i.open("GET", t, !0);
i.setRequestHeader("Content-Type", "application/json");
i.withCredentials = !0;
i.send();
};
e.prototype.onEdbChange = function() {
var n, e = this.isNap ? this.rateIn : this.rateOut, i = t.toInt(this.edbAmount.string);
i = Math.abs(i);
n = this.isNap ? Math.floor(i / e) : Math.floor(i * e);
this.amount = i;
this.amountnhan = n;
this.ThucNhan.string = t.formatNumber(n);
cc.sys.isBrowser && this.edbAmount.focus();
};
e.formatNumber = function(n) {
return void 0 === n ? "0" : n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
e.toInt = function(n) {
if ("" == n) return 0;
cc.log("before==" + n);
var e = n.split(",").join("");
cc.log("after==" + e);
return parseInt(e);
};
e.prototype.OnClickTranfer = function() {
var n = this, e = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/tcg/TransferIn", i = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/tcg/TransferOut";
if (this.isNap) {
if (this.amount < 5e4) {
lngui.UIPopupManager.instance.showPopup("Đổi tối thiểu 50,000!");
return;
}
if (this.amount > lngui.UserManager.instance.mainUserInfo.Money) {
lngui.UIPopupManager.instance.showPopup("Số dư không đủ!");
return;
}
lngui.UIWaitingLayout.showWaiting();
var a = e + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken + "&providerCode=" + this.providerCode + "&amount=" + this.amount;
lngui.Https.get(a, function(e) {
if (e) {
if (1 != e.ResponseCode) {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup(e.Message);
return;
}
lngui.UIWaitingLayout.hideWaiting();
lngui.UITextManager.showCenterNotification("Đổi thành công!");
var i = e.Data;
n.Soduvi.string = t.formatNumber(i.CasinoBalance);
lngui.UserManager.instance.mainUserInfo.Money = i.Balance;
lngui.GameCoreManager.instance.updateTotalGold(lngui.UserManager.instance.mainUserInfo.Money);
n.SoDuUser.string = t.formatNumber(lngui.UserManager.instance.mainUserInfo.Money);
} else {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup(e);
}
});
} else {
if (t.toInt(this.Soduvi.string) < this.amount) {
lngui.UIPopupManager.instance.showPopup("Số dư sảnh không đủ!");
return;
}
lngui.UIWaitingLayout.showWaiting();
a = i + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken + "&providerCode=" + this.providerCode + "&amount=" + this.amount;
lngui.Https.get(a, function(e) {
if (e) {
if (1 != e.ResponseCode) {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup(e.Message);
return;
}
lngui.UIWaitingLayout.hideWaiting();
lngui.UITextManager.showCenterNotification("Đổi thành công!");
var i = e.Data;
n.Soduvi.string = t.formatNumber(i.CasinoBalance);
lngui.UserManager.instance.mainUserInfo.Money = i.Balance;
lngui.GameCoreManager.instance.updateTotalGold(lngui.UserManager.instance.mainUserInfo.Money);
n.SoDuUser.string = t.formatNumber(lngui.UserManager.instance.mainUserInfo.Money);
} else {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup(e);
}
});
}
};
e.prototype.getGameByName = function(n, e) {
if (!n || !n || !Array.isArray(n)) {
cc.warn("[GameUtils] Data không hợp lệ");
return null;
}
return n.find(function(n) {
return n.gameName === e;
}) || null;
};
e.prototype.getGameByCode = function(n, e) {
if (!Array.isArray(n)) {
cc.warn("[GameUtils] List không hợp lệ", n);
return null;
}
return n.find(function(n) {
return n.tcgGameCode === e;
}) || null;
};
var t;
o([ u(cc.Label) ], e.prototype, "Soduvi", void 0);
o([ u(cc.Label) ], e.prototype, "SoDuUser", void 0);
o([ u(cc.Label) ], e.prototype, "ThucNhan", void 0);
o([ u(cc.Label) ], e.prototype, "Quy1", void 0);
o([ u(cc.Label) ], e.prototype, "Quy2", void 0);
o([ u(cc.EditBox) ], e.prototype, "edbAmount", void 0);
o([ u(cc.Node) ], e.prototype, "nodeInfoTransfer", void 0);
o([ u(cc.Node) ], e.prototype, "nodeView", void 0);
o([ u(cc.WebView) ], e.prototype, "webViewPlay", void 0);
o([ u(cc.Label) ], e.prototype, "titleSanh", void 0);
o([ u(cc.EditBox) ], e.prototype, "edbCodeGame", void 0);
o([ u ], e.prototype, "codeGame", void 0);
return t = o([ s ], e);
}(cc.Component);
t.default = g;
cc._RF.pop();
}, {} ]
}, {}, [ "SlotCasino" ]);