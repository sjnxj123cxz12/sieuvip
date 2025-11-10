window.__require = function t(e, i, n) {
function o(c, a) {
if (!i[c]) {
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
var h = i[c] = {
exports: {}
};
e[c][0].call(h.exports, function(t) {
return o(e[c][1][t] || t);
}, h, h.exports, t, e, i, n);
}
return i[c].exports;
}
for (var s = "function" == typeof __require && __require, c = 0; c < n.length; c++) o(n[c]);
return o;
}({
HideAndShowSC: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "85577z6jh1Ln4kxra/s/dV1", "HideAndShowSC");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), s = this && this.__decorate || function(t, e, i, n) {
var o, s = arguments.length, c = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, i, n); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (c = (s < 3 ? o(c) : s > 3 ? o(e, i, c) : o(e, i)) || c);
return s > 3 && c && Object.defineProperty(e, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, r = c.property, l = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.NodeSC1 = null;
e.NodeSC2 = null;
e.ButtonSc1 = null;
e.ButtonSc2 = null;
return e;
}
e.prototype.onLoad = function() {
0 == this.NodeSC1.active && (this.NodeSC1.active = !0);
};
e.prototype.TouchChange = function() {
if (1 == this.NodeSC2.active) {
this.ButtonSc2.node.active = !0;
this.ButtonSc2.node.active = !1;
this.NodeSC2.active = !1;
this.NodeSC1.active = !0;
} else {
this.ButtonSc2.node.active = !1;
this.ButtonSc2.node.active = !0;
this.NodeSC2.active = !0;
this.NodeSC1.active = !1;
}
};
s([ r(cc.Node) ], e.prototype, "NodeSC1", void 0);
s([ r(cc.Node) ], e.prototype, "NodeSC2", void 0);
s([ r(cc.Button) ], e.prototype, "ButtonSc1", void 0);
s([ r(cc.Button) ], e.prototype, "ButtonSc2", void 0);
return s([ a ], e);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
SetWebview: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "d5d4aeJ8ZpBDKUV6Nu1gQJF", "SetWebview");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), s = this && this.__decorate || function(t, e, i, n) {
var o, s = arguments.length, c = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, i, n); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (c = (s < 3 ? o(c) : s > 3 ? o(e, i, c) : o(e, i)) || c);
return s > 3 && c && Object.defineProperty(e, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, r = c.property, l = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.webview = null;
e.clickThrough = !0;
e.iframe = null;
e.bound = !1;
e.syncRect = function() {
if (e.iframe) {
var t = cc.Camera.findCamera(e.node), i = e.node.getContentSize(), n = e.node.convertToWorldSpaceAR(cc.v2(-i.width / 2, -i.height / 2)), o = e.node.convertToWorldSpaceAR(cc.v2(i.width / 2, i.height / 2)), s = t.getWorldToScreenPoint(new cc.Vec3(n.x, n.y)), c = t.getWorldToScreenPoint(new cc.Vec3(o.x, o.y)), a = cc.view.getVisibleSize(), r = cc.game.canvas.getBoundingClientRect(), l = r.width / a.width, h = r.height / a.height, u = s.x * l, p = (a.height - c.y) * h, d = (c.x - s.x) * l, f = (c.y - s.y) * h;
e.iframe.style.left = u + "px";
e.iframe.style.top = p + "px";
e.iframe.style.width = d + "px";
e.iframe.style.height = f + "px";
}
};
return e;
}
e.prototype.onEnable = function() {
if (cc.sys.isBrowser) {
this.bindIframe();
window.addEventListener("resize", this.syncRect, {
passive: !0
});
}
};
e.prototype.onDisable = function() {
window.removeEventListener("resize", this.syncRect);
this.setClickThrough(!1);
};
e.prototype.lateUpdate = function() {
this.iframe && this.syncRect();
};
e.prototype.bindIframe = function() {
var t = this, e = function() {
var i, n = null === (i = t.webview) || void 0 === i ? void 0 : i._impl;
t.iframe = n && n._iframe ? n._iframe : null;
if (t.iframe) {
var o = cc.game.container;
if (o && t.iframe.parentElement !== o) {
o.style.position = o.style.position || "relative";
o.appendChild(t.iframe);
}
t.iframe.style.position = "absolute";
t.iframe.style.border = "none";
t.setClickThrough(t.clickThrough);
t.syncRect();
t.bound = !0;
} else requestAnimationFrame(e);
};
this.bound || e();
};
e.prototype.setClickThrough = function(t) {
this.clickThrough = t;
this.iframe && (this.iframe.style.pointerEvents = t ? "none" : "auto");
};
s([ r(cc.WebView) ], e.prototype, "webview", void 0);
s([ r({
tooltip: "Bật = cho click xuyên qua để bấm button Cocos"
}) ], e.prototype, "clickThrough", void 0);
return s([ a ], e);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
StreamSprite: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "d135bZ3t5dN/JTSK8qr1Lkl", "StreamSprite");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), s = this && this.__decorate || function(t, e, i, n) {
var o, s = arguments.length, c = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, i, n); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (c = (s < 3 ? o(c) : s > 3 ? o(e, i, c) : o(e, i)) || c);
return s > 3 && c && Object.defineProperty(e, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, r = c.property, l = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.vidWeb = null;
e.video = null;
e.tex = null;
e.shouldRender = !1;
e.hasRVFC = !1;
return e;
}
e.prototype.start = function() {
this.tex = new cc.Texture2D();
var t = document.createElement("canvas");
t.width = t.height = 1;
this.tex.initWithElement(t);
this.tex.handleLoadedTexture();
this.vidWeb.spriteFrame = new cc.SpriteFrame(this.tex);
};
e.prototype.render = function() {
this.shouldRender = !0;
};
e.prototype.update = function() {
if (this.shouldRender && this.video && !(this.video.readyState < this.video.HAVE_CURRENT_DATA)) {
this.tex.initWithElement(this.video);
this.tex.handleLoadedTexture();
}
};
e.prototype.displayVideo = function(t) {
var e = this, i = this.pickIframe(t);
if (i) if (this.isSameOrigin(i)) {
var n = function() {
var t;
try {
var n = i.contentDocument || (null === (t = i.contentWindow) || void 0 === t ? void 0 : t.document);
if (!n) throw new Error("Không truy cập được document của iframe");
var o = n.querySelector("video[data-stream]") || n.querySelector("video");
if (!o) {
cc.warn("[StreamSprite] Không tìm thấy <video> trong iframe.");
return;
}
try {
o.pause();
} catch (t) {}
o.muted = !0;
o.playsInline = !0;
o.crossOrigin = "anonymous";
var s = o.currentSrc || o.src;
if (s) {
o.removeAttribute("src");
o.load();
o.src = s;
}
var c = function() {
return o.play().catch(function() {});
};
cc.game.canvas.addEventListener("touchstart", c, {
once: !0
});
cc.game.canvas.addEventListener("mousedown", c, {
once: !0
});
c();
o.onloadedmetadata = function() {
e.tex.initWithElement(o);
e.tex.handleLoadedTexture();
e.setupRVFC(o);
e.video = o;
e.shouldRender = !0;
cc.log("[StreamSprite] Gắn video từ iframe thành công:", s || "(stream)");
};
} catch (t) {
cc.error("[StreamSprite] Lỗi khi truy cập video trong iframe:", t);
}
};
i._streamSpriteLoaded || i.addEventListener("load", function() {
i._streamSpriteLoaded = !0;
n();
}, {
once: !0
});
n();
} else cc.error("[StreamSprite] Iframe khác origin → KHÔNG thể truy cập video bên trong."); else cc.warn("[StreamSprite] Không tìm thấy iframe với token/selector:", t);
};
e.prototype.reloadVideo = function(t) {
var e, i = this.pickIframe(t);
if (i && this.isSameOrigin(i)) try {
var n = i.contentDocument || (null === (e = i.contentWindow) || void 0 === e ? void 0 : e.document), o = (null == n ? void 0 : n.querySelector("video[data-stream]")) || (null == n ? void 0 : n.querySelector("video"));
if (o) {
o.load();
cc.log("[StreamSprite] Reload video trong iframe.");
} else cc.warn("[StreamSprite] Không tìm thấy <video> để reload.");
} catch (t) {
cc.error("[StreamSprite] Lỗi reloadVideo:", t);
}
};
e.prototype.pickIframe = function(t) {
if (!t) return null;
if (/^([#.]|iframe\b)/.test(t)) {
var e = document.querySelector(t);
return e instanceof HTMLIFrameElement ? e : null;
}
return Array.from(document.getElementsByTagName("iframe")).find(function(e) {
return (e.src || "").indexOf(t) > -1;
}) || null;
};
e.prototype.isSameOrigin = function(t) {
try {
return new URL(t.src, location.href).origin === location.origin;
} catch (t) {
return !0;
}
};
e.prototype.setupRVFC = function(t) {
var e = this;
if ("function" == typeof t.requestVideoFrameCallback) {
this.hasRVFC = !0;
var i = function() {
if (e.shouldRender) {
e.tex.initWithElement(t);
e.tex.handleLoadedTexture();
t.requestVideoFrameCallback(i);
}
};
t.requestVideoFrameCallback(i);
} else this.hasRVFC = !1;
};
s([ r(cc.Sprite) ], e.prototype, "vidWeb", void 0);
return s([ a ], e);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
ViewLive: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ffcb9QpjuhKG5S6ejbr4Qoj", "ViewLive");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), s = this && this.__decorate || function(t, e, i, n) {
var o, s = arguments.length, c = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, i, n); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (c = (s < 3 ? o(c) : s > 3 ? o(e, i, c) : o(e, i)) || c);
return s > 3 && c && Object.defineProperty(e, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, r = c.property, l = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.webview = null;
return e;
}
e.prototype.onLoad = function() {
this.webview.url = lngui.ConfigManager.instance.ConfigInfo.VideoLiveXD;
console.log("Index Webview" + this.webview.node.parent.zIndex);
this.webview.node.parent.zIndex = 0;
console.log("Index Webview sau" + this.webview.node.parent.zIndex);
};
e.prototype.getUrl = function(t, e) {
var i = t, n = cc.loader.getXMLHttpRequest();
n.onreadystatechange = function() {
4 === n.readyState && (200 == n.status ? e(n.responseText, n.status) : n.responseText.length > 0 ? e(n.responseText, n.status) : e("error_code : " + n.status, null));
};
n.ontimeout = function() {
e("Hệ thống không phản hồi.", null);
};
n.timeout = 3e4;
n.open("GET", i, !0);
n.setRequestHeader("Content-Type", "application/json");
n.withCredentials = !0;
n.send();
};
e.prototype.Close = function() {
this.webview.destroy;
lngui.GameCoreManager.instance.onBackToLobby();
};
s([ r(cc.WebView) ], e.prototype, "webview", void 0);
return s([ a ], e);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
"XXBG.Chat.NetworkClient": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b7070MwgGpPn7FHU8EMNQbS", "XXBG.Chat.NetworkClient");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), s = this && this.__decorate || function(t, e, i, n) {
var o, s = arguments.length, c = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, i, n); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (c = (s < 3 ? o(c) : s > 3 ? o(e, i, c) : o(e, i)) || c);
return s > 3 && c && Object.defineProperty(e, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = t("./XXBGChat"), a = cc._decorator, r = a.ccclass, l = (a.property, function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.isConnect = !1;
return e;
}
i = e;
Object.defineProperty(e, "instance", {
get: function() {
i._instance || (i._instance = new i());
return i._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
i._instance = this;
};
e.prototype.connect = function() {
var t = {
url: "https://chat." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
ip: "http://18.138.207.162:8092/signalr/negotiate",
hub: "chatHub",
gate: "hit.club"
};
cc.systemEvent.off("OnChatXocDiaSocketEvent", this.onResponeData, this);
cc.systemEvent.on("OnChatXocDiaSocketEvent", this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect("OnChatXocDiaSocketEvent", t.url, t.hub, t.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
console.log("Đã connect");
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
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, i = 0; i < e; ++i) {
var n = t.M[i];
if (n.A && null != n.A[0] && null != n.A[0]) {
var o = n.A[0];
switch (n.M) {
case "receiveMessage":
c.default.instance.receiveMessage(o);
break;

case "listLastMessages":
c.default.instance.listLastMessages(o);
}
}
}
};
e.prototype.registerChat = function() {
this.sendSignalR("RegisterChat", [ "xocdialive" ]);
};
e.prototype.pingPong = function() {
this.sendSignalR("PingPong", []);
};
e.prototype.connectSuccess = function() {
lngui.ZLog.log("Connect Sucesss");
};
e.prototype.closeWS = function() {
cc.systemEvent.off("OnChatXocDiaSocketEvent", this.onResponeData, this);
this.mSignalr.close();
lngui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
this.isConnect = !1;
};
e.prototype.sendSignalR = function(t, e) {
lngui.ZLog.log("SendSocket=======>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
var i;
e._instance = null;
return i = s([ r ], e);
}(cc.Component));
i.default = l;
cc._RF.pop();
}, {
"./XXBGChat": "XXBGChat"
} ],
XXBGChat: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "1f033jOMiBLz7r9TdZg8TCg", "XXBGChat");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), s = this && this.__decorate || function(t, e, i, n) {
var o, s = arguments.length, c = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, i, n); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (c = (s < 3 ? o(c) : s > 3 ? o(e, i, c) : o(e, i)) || c);
return s > 3 && c && Object.defineProperty(e, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = t("./XXBG.Chat.NetworkClient"), a = cc._decorator, r = a.ccclass, l = a.property, h = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.templateMessage = null;
e.templateMessageTip = null;
e.spriteFramesTip = [];
e.listChat = null;
e.NodeTip = null;
e.scrollListChat = null;
e.txtInputChat = null;
e.DealerName = null;
e.nameDealer = null;
e.itemData = [ {
iId: 1,
iN: "Bông hồng",
v: 1e3
}, {
iId: 2,
iN: "Đồng vàng",
v: 5e3
}, {
iId: 3,
iN: "Đôla",
v: 2e4
}, {
iId: 4,
iN: "Dây chuyền ngọc trai",
v: 1e5
}, {
iId: 5,
iN: "Tim ruby",
v: 5e5
}, {
iId: 6,
iN: "Kim cương",
v: 1e6
} ];
return e;
}
i = e;
e.prototype.onLoad = function() {
var t = this;
this.chatChanel = "xocdialive";
lngui.Https.get("https://gc-api.tieusi.online/hit/dealer?game=xocdia", function(e) {
if (e) {
t.nameDealer = e.msg;
t.DealerName.string = "Dealer: " + e.msg;
}
});
console.log(this.itemData);
};
e.prototype.touchSendChat = function() {
if (this.txtInputChat.string.length) {
c.default.instance.sendSignalR("SendMessage", [ this.txtInputChat.string, this.chatChanel ]);
this.txtInputChat.string = "";
}
};
e.prototype.touchShowTip = function() {
var t = this;
if (this.NodeTip.active) this.NodeTip.active = !1; else {
this.NodeTip.active = !0;
setTimeout(function() {
t.NodeTip.active = !1;
}, 3e3);
}
};
e.prototype.touchSendTip = function(t, e) {
var i = this.itemData.find(function(t) {
return t.iId === parseInt(e);
});
i && c.default.instance.sendSignalR("SendTip", [ this.chatChanel, i.iId, i.iN, this.nameDealer ]);
};
e.prototype.listLastMessages = function(t) {
if (0 != t.length) {
this.listChat.removeAllChildren();
if (t) for (var e = 0; e < t.length; e++) {
var i = t[e], n = i.n, o = i.c;
if (void 0 === n || void 0 === o) return;
if ("SYSTEM" != n && "SYSTEM" != o && n.length > 0 && o.length > 0) {
var s = o, c = cc.instantiate(this.templateMessage), a = i.n, r = n;
c.active = !0;
a = (a.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), r);
c.getComponent(cc.Label).string = a + ": " + s;
if (1 == t.IsVipTx) {
c.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
c.getChildByName("lb_nameVip").getComponent(cc.Label).string = a + ": ";
c.off(cc.Node.EventType.SIZE_CHANGED);
c.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (c.getContentSize().height - c.getChildByName("lb_nameVip").getContentSize().height) / 2;
c.getChildByName("lb_nameVip").setPosition(cc.v2(0, t));
});
} else {
c.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
c.getChildByName("lb_name").getComponent(cc.Label).string = a + ": ";
c.off(cc.Node.EventType.SIZE_CHANGED);
c.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (c.getContentSize().height - c.getChildByName("lb_name").getContentSize().height) / 2;
c.getChildByName("lb_name").setPosition(cc.v2(0, t));
});
}
this.listChat.addChild(c);
}
this.scrollListChat.scrollToBottom();
}
}
};
e.prototype.receiveMessage = function(t) {
var e = t.n, i = t.c;
if (void 0 !== e && void 0 !== i) if ("SYSTEM" != e && "SYSTEM" != i) {
if (e.length > 0 && i.length > 0) {
var n = i, o = cc.instantiate(this.templateMessage), s = t.n, c = e;
o.active = !0;
s = (s.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), c);
o.getComponent(cc.Label).string = s + ": " + n;
if (1 == t.IsVipTx) {
o.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
o.getChildByName("lb_nameVip").getComponent(cc.Label).string = s + ": ";
o.off(cc.Node.EventType.SIZE_CHANGED);
o.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (o.getContentSize().height - o.getChildByName("lb_nameVip").getContentSize().height) / 2;
o.getChildByName("lb_nameVip").setPosition(cc.v2(0, t));
});
} else {
o.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
o.getChildByName("lb_name").getComponent(cc.Label).string = s + ": ";
o.off(cc.Node.EventType.SIZE_CHANGED);
o.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (o.getContentSize().height - o.getChildByName("lb_name").getContentSize().height) / 2;
o.getChildByName("lb_name").setPosition(cc.v2(0, t));
});
}
this.listChat.addChild(o);
this.scrollListChat.scrollToBottom();
}
} else this.receiveMessageTip(JSON.parse(i));
};
e.prototype.receiveMessageTip = function(t) {
this.nameDealer = t.dealerName;
var e = cc.instantiate(this.templateMessageTip), i = t.giftId, n = "cho " + t.msg.split(" cho ")[1], o = t.user;
e.active = !0;
e.getChildByName("lb_name").getComponent(cc.Label).node.active = !0;
e.getChildByName("lb_name").getComponent(cc.Label).string = o;
e.getChildByName("lb_name").setPosition(cc.v2(0));
e.getChildByName("lb_msg1").getComponent(cc.Label).node.active = !0;
e.getChildByName("lb_msg1").getComponent(cc.Label).string = "đã tip";
e.getChildByName("lb_msg2").getComponent(cc.Label).node.active = !0;
e.getChildByName("lb_msg2").getComponent(cc.Label).string = n;
e.getChildByName("spriteTip").getComponent(cc.Sprite).node.active = !0;
e.getChildByName("spriteTip").getComponent(cc.Sprite).spriteFrame = this.spriteFramesTip[i - 1];
this.listChat.addChild(e);
this.scrollListChat.scrollToBottom();
};
Object.defineProperty(e, "instance", {
get: function() {
i._instance || (i._instance = new i());
return i._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
i._instance = this;
this.txtInputChat.node.on("editing-return", this.touchSendChat, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
};
e.prototype.onKeyDown = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.enter:
this.txtInputChat.focus();
}
};
var i;
e._instance = null;
s([ l(cc.Node) ], e.prototype, "templateMessage", void 0);
s([ l(cc.Node) ], e.prototype, "templateMessageTip", void 0);
s([ l([ cc.SpriteFrame ]) ], e.prototype, "spriteFramesTip", void 0);
s([ l(cc.Node) ], e.prototype, "listChat", void 0);
s([ l(cc.Node) ], e.prototype, "NodeTip", void 0);
s([ l(cc.ScrollView) ], e.prototype, "scrollListChat", void 0);
s([ l(cc.EditBox) ], e.prototype, "txtInputChat", void 0);
s([ l(cc.Label) ], e.prototype, "DealerName", void 0);
return i = s([ r ], e);
}(cc.Component);
i.default = h;
cc._RF.pop();
}, {
"./XXBG.Chat.NetworkClient": "XXBG.Chat.NetworkClient"
} ],
XXLiveBWAssets: [ function(t, e) {
"use strict";
cc._RF.push(e, "03d3eOo6TpHC7KX+cEcwJ6/", "XXLiveBWAssets");
(function() {
cc.XXLiveBWAssets = cc.Class({
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
cc.XXLiveBWController.getInstance().setXXAssets(this);
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
XXLiveBWChipItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "6e0c9T41NRPc4U54ZmerTRQ", "XXLiveBWChipItem");
(function() {
cc.XXLiveBWChipItem = cc.Class({
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
this.spriteChip.spriteFrame = cc.XXLiveBWController.getInstance().getChips()[t];
},
moveTo: function(t) {
this.node.opacity = 100;
var e = cc.moveTo(this.duration, t);
e.easing(cc.easeOut(1));
var i = cc.callFunc(this.moveFinished, null, this.node);
this.node.runAction(cc.sequence(e, i));
},
setPosition: function(t) {
this.node.position = t;
},
moveToEnd: function(t) {
if (this.node) {
this.node.opacity = 100;
var e = cc.moveTo(.5, t);
e.easing(cc.easeOut(1));
var i = cc.callFunc(this.moveToEndFinished, null, this.node), n = cc.fadeOut();
this.node.runAction(cc.sequence(e, n, i));
}
},
moveFinished: function(t) {
t.opacity = 255;
},
moveToEndFinished: function(t) {
try {
setTimeout(function() {
cc.XXLiveBWController.getInstance().putToPool(t);
}.bind(this), 500);
} catch (t) {}
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveBWChipPool: [ function(t, e) {
"use strict";
cc._RF.push(e, "ec22dplySRKRrrflFNTybbg", "XXLiveBWChipPool");
(function() {
cc.XXLiveBWChipPool = cc.Class({
extends: cc.Component,
properties: {
prefab: cc.Prefab
},
onLoad: function() {
this.createNodePool();
cc.XXLiveBWController.getInstance().setXXChipPool(this);
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
XXLiveBWConnectionStatus: [ function(t, e) {
"use strict";
cc._RF.push(e, "4ecd595Ho9IzKhFAqVW/bKM", "XXLiveBWConnectionStatus");
(function() {
cc.XXLiveBWConnectionStatus = cc.Enum({
DISCONNECTED: 0,
CONNECTED: 1,
REGISTER_LEAVE_GAME: 2
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveBWController: [ function(t, e) {
"use strict";
cc._RF.push(e, "a087aGpr5VKjIF4iTJECg/o", "XXLiveBWController");
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
e.prototype.HideAndShowLive = function() {
return this.xxView.HideAndShowLive();
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
e.prototype.setXXLiveBWResultView = function(t) {
return this.XXLiveBWResultView = t;
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
e.prototype.sendRequestOnHub = function(t, e, i) {
if (this.xxView) return this.xxView.sendRequestOnHub(t, e, i);
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
e.prototype.updateInfo = function(t, e, i) {
return this.xxInfoView.updateInfo(t, e, i);
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
e.prototype.playerResultUI = function(t, e, i) {
return this.xxInfoView.playerResultUI(t, e, i);
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
e.prototype.updateTimer = function(t) {
return this.xxInfoView.updateTimer(t);
};
e.prototype.onDisableProgress = function() {
return this.xxInfoView.onDisableProgress();
};
e.prototype.playerBet = function(t) {
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
e.prototype.updateResult = function(t, e, i, n, o, s) {
return this.XXLiveBWResultView.updateResult(t, e, i, n, o, s);
};
e.prototype.draw = function(t) {
return this.xxSoiCauView.draw(t);
};
e.prototype.resetDraw = function() {
return this.xxSoiCauView.resetDraw();
};
e.prototype.draw2 = function(t) {
return this.xxSoiCauView.draw2(t);
};
e.prototype.setPercentGate = function(t, e) {
return this.xxSoiCauView.setPercentGate(t, e);
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
return e;
}();
cc.XXLiveBWController = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveBWFX: [ function(t, e) {
"use strict";
cc._RF.push(e, "dc6b0bex+JHG6S0+pETYVZm", "XXLiveBWFX");
(function() {
cc.XXLiveBW_FX = cc.Enum({
LOSE: 0,
DEALER_PAY: 1,
PAY: 3
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveBWGate: [ function(t, e) {
"use strict";
cc._RF.push(e, "55672LtSP5Bt4ArncCbDDBy", "XXLiveBWGate");
(function() {
cc.XXLiveBWGate = cc.Enum({
ODD: 1,
THREE_UP: 2,
THREE_DOWN: 3,
EVEN: 4,
FOUR_UP: 5,
FOUR_DOWN: 6,
TWO_UP_TWO_DOWN: 7
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveBWGetBigWinnerCommand: [ function(t, e) {
"use strict";
cc._RF.push(e, "886d05qrKFNbp6JQ1i35smh", "XXLiveBWGetBigWinnerCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t) {
return cc.ServerConnector.getInstance().sendRequest(cc.SubdomainName.XOC_XOC_LIVE, "api/XocDia/GetBigWinner", function(e) {
var i = JSON.parse(e);
return t.onXXGetBigWinnerResponse(i);
});
};
return t;
}();
cc.XXLiveBWGetBigWinnerCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveBWGroupItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "4347als5yBMApsD0EoNGJau", "XXLiveBWGroupItem");
(function() {
cc.XXLiveBWGroupItem = cc.Class({
extends: cc.Component,
properties: {
avatar: cc.Avatar,
lbSId: cc.Label,
lbNickName: cc.Label,
lbBalance: cc.Label,
lbSTT: cc.Label
},
updateItem: function(t, e) {
var i = t.Account, n = i.Avatar;
n <= 0 && (n = 1);
this.lbSTT.string = e + 1;
this.lbSId.string = cc.Config.getInstance().getServiceNameNoFormat(i.ServiceID);
this.avatar.setAvatar(cc.XXController.getInstance().getAvatars()[n]);
this.lbNickName.string = i.NickName;
this.lbBalance.string = cc.Tool.getInstance().formatNumber(i.Balance);
this.item = t;
this.itemID = e;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveBWGroupUserListView: [ function(t, e) {
"use strict";
cc._RF.push(e, "2986cC2biJEAoM0X1DfG4pf", "XXLiveBWGroupUserListView");
(function() {
cc.XXLiveBWGroupUserListView = cc.Class({
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
for (var i = Math.min(this.spawnCount, e), n = 0; n < i; ++n) {
var o = cc.instantiate(this.itemTemplate);
this.content.addChild(o);
o.setPosition(0, -o.height * (.5 + n) - this.spacing * (n + 1));
o.getComponent(cc.XXLiveBWGroupItem).updateItem(this.messages[n], n);
this.items.push(o);
}
this.rootContentY = this.content.y;
},
update: function(t) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.items, i = this.bufferZone, n = this.scrollView.content.y < this.lastContentPosY, o = (this.itemTemplate.height + this.spacing) * e.length, s = 0; s < e.length; ++s) {
var c = this.getPositionInView(e[s]);
if (n) {
if (c.y < -i && e[s].y + o < 0) {
e[s].y = e[s].y + o;
var a = e[s].getComponent(cc.XXLiveBWGroupItem), r = a.itemID - e.length;
a.updateItem(this.messages[r], r);
}
} else if (c.y > i && e[s].y - o > -this.content.height) {
e[s].y = e[s].y - o;
r = (a = e[s].getComponent(cc.XXLiveBWGroupItem)).itemID + e.length;
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
XXLiveBWGroupUserView: [ function(t, e) {
"use strict";
cc._RF.push(e, "5d572QB0h9DerEZXAbUf0qt", "XXLiveBWGroupUserView");
(function() {
cc.XXLiveBWGroupUserView = cc.Class({
extends: cc.Component,
properties: {
groupUserListView: cc.XXLiveBWGroupUserListView
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
cc.XXLiveBWPopupController.getInstance().destroyGroupUserView();
}, this, 1, 0, .12, !1);
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveBWHelpView: [ function(t, e) {
"use strict";
cc._RF.push(e, "b1525sn1n5M57pW2LHKfoG4", "XXLiveBWHelpView");
(function() {
cc.XXLiveBWHelpView = cc.Class({
extends: cc.Component,
properties: {
NodeTab: [ cc.Node ]
},
onLoad: function() {
this.animation = this.node.getComponent(cc.Animation);
this.node.zIndex = 9999;
},
closeFinished: function() {
cc.XXLiveBWPopupController.getInstance().destroyHelpView();
},
closeClicked: function() {
this.animation.play("closePopup");
var t = this;
cc.director.getScheduler().schedule(function() {
t.animation.stop();
t.closeFinished();
}, this, 1, 0, .12, !1);
cc.XXLiveBWController.getInstance().HideAndShowLive();
},
onClickTab: function(t, e) {
this.NodeTab.forEach(function(t) {
t.active = !1;
});
this.NodeTab[parseInt(e)].active = !0;
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveBWHistoryCommand: [ function(t, e) {
"use strict";
cc._RF.push(e, "a9855DcjlVHQJCMzW75QFEG", "XXLiveBWHistoryCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t) {
var e = "api/XocDia/GetHistory";
console.log("getHistory =====================>" + e);
return cc.ServerConnector.getInstance().sendRequest("xocdialive.", e, function(e) {
var i = JSON.parse(e);
return t.onXXGetHistoryResponse(i);
});
};
return t;
}();
cc.XXLiveBWGetHistoryCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveBWHistoryItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "e889ann3ntGDLKzsFIzK+EG", "XXLiveBWHistoryItem");
(function() {
cc.XXLiveBWHistoryItem = cc.Class({
extends: cc.Component,
properties: {
sprite: cc.Sprite,
lbSession: cc.Label,
lbTime: cc.Label,
lbDetail: cc.Label,
lbBet: cc.Label,
lbWin: cc.Label
},
updateItem: function(t, e) {
console.log(t);
this.sprite.enabled = e % 2 != 0;
this.lbSession.string = t.SessionID;
this.lbTime.string = this.convertUTCTime(t.data[0].CreateTime);
var i = 0, n = 0, o = "", s = "Đặt ";
t.data.forEach(function(t) {
i += t.Bet;
n += t.Award;
switch (parseInt(t.GateID)) {
case cc.XXLiveBWGate.ODD:
o = "Lẻ";
break;

case cc.XXLiveBWGate.THREE_UP:
o = "3 Trắmg";
break;

case cc.XXLiveBWGate.THREE_DOWN:
o = "3 Đỏ";
break;

case cc.XXLiveBWGate.EVEN:
o = "Chẵn";
break;

case cc.XXLiveBWGate.FOUR_UP:
o = "4 Trắng";
break;

case cc.XXLiveBWGate.FOUR_DOWN:
o = "4 Đỏ";
break;

case cc.XXLiveBWGate.TWO_UP_TWO_DOWN:
o = "2 Đỏ 2 Trắng";
}
s += o + ": " + cc.Tool.getInstance().formatNumber(t.Bet) + " ";
});
var c = "", a = t.data[0].GatesData;
if (a) {
var r = a.split(",");
1 == r.length ? c = "Kết quả 2 Đỏ, 2 Trắng." : r.map(function(t) {
var e = "";
switch (parseInt(t)) {
case cc.XXLiveBWGate.THREE_UP:
e = "3 Trắng, 1 Đỏ";
break;

case cc.XXLiveBWGate.THREE_DOWN:
e = "3 Đỏ, 1 Trắng";
break;

case cc.XXLiveBWGate.FOUR_UP:
e = "4 Trắng";
break;

case cc.XXLiveBWGate.FOUR_DOWN:
e = "4 Đỏ";
}
c = "Kết quả " + e + ".";
});
}
var l = "" + c + s + ". Nhận " + cc.Tool.getInstance().formatNumber(n), h = n - i;
this.lbDetail.string = l;
this.lbBet.string = cc.Tool.getInstance().formatNumber(i);
this.lbWin.string = (h > 0 ? "+" : "") + cc.Tool.getInstance().formatNumber(h);
this.lbWin.node.color = h > 0 ? cc.Color.GREEN : cc.Color.RED;
this.item = t;
this.itemID = e;
},
convertUTCTime: function(t) {
var e = new Date(t + "Z");
function i(t) {
return t < 10 ? "0" + t : t;
}
var n = e.getUTCSeconds() + (e.getUTCMilliseconds() >= 500 ? 1 : 0);
if (60 === n) {
n = 0;
e.setUTCMinutes(e.getUTCMinutes() + 1);
}
return [ i(e.getUTCDate()), i(e.getUTCMonth() + 1), e.getUTCFullYear() ].join("-") + "\n" + [ i(e.getUTCHours()), i(e.getUTCMinutes()), i(n) ].join(":");
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveBWHistoryListView: [ function(t, e) {
"use strict";
cc._RF.push(e, "f75e87qXKZJ2I0AL575LQuy", "XXLiveBWHistoryListView");
(function() {
cc.XXLiveBWHistoryListView = cc.Class({
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
var e = [], i = {};
t.forEach(function(t) {
if (!i[t.SessionID]) {
i[t.SessionID] = {
SessionID: t.SessionID,
data: []
};
e.push(i[t.SessionID]);
}
i[t.SessionID].data.push(t);
});
this.messages = e;
var n = this.messages.length;
this.content.height = n * (this.itemTemplate.height + this.spacing) + this.spacing;
for (var o = Math.min(this.spawnCount, n), s = 0; s < o; ++s) {
var c = cc.instantiate(this.itemTemplate);
this.content.addChild(c);
c.setPosition(0, -c.height * (.5 + s) - this.spacing * (s + 1));
c.getComponent(cc.XXLiveBWHistoryItem).updateItem(this.messages[s], s);
this.items.push(c);
}
this.rootContentY = this.content.y;
},
update: function(t) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.items, i = this.bufferZone, n = this.scrollView.content.y < this.lastContentPosY, o = (this.itemTemplate.height + this.spacing) * e.length, s = 0; s < e.length; ++s) {
var c = this.getPositionInView(e[s]);
if (n) {
if (c.y < -i && e[s].y + o < 0) {
e[s].y = e[s].y + o;
var a = e[s].getComponent(cc.XXLiveBWHistoryItem), r = a.itemID - e.length;
a.updateItem(this.messages[r], r);
}
} else if (c.y > i && e[s].y - o > -this.content.height) {
e[s].y = e[s].y - o;
r = (a = e[s].getComponent(cc.XXLiveBWHistoryItem)).itemID + e.length;
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
XXLiveBWHistoryView: [ function(t, e) {
"use strict";
cc._RF.push(e, "101e4xYz3BOX4df5zIIOvC7", "XXLiveBWHistoryView");
(function() {
cc.XXLiveBWHistoryView = cc.Class({
extends: cc.Component,
properties: {
XXHistoryListView: cc.XXLiveBWHistoryListView
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
new cc.XXLiveBWGetHistoryCommand().execute(this);
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
cc.XXLiveBWPopupController.getInstance().destroyHistoryView();
}, this, 1, 0, .12, !1);
cc.XXLiveBWController.getInstance().HideAndShowLive();
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveBWInfoView: [ function(t, e) {
"use strict";
cc._RF.push(e, "0421eC9j7dOKr4HpdK9AlqF", "XXLiveBWInfoView");
(function() {
cc.XXLiveBWInfoView = cc.Class({
extends: cc.Component,
properties: {
lbSID: cc.Label,
lbTimer: cc.Label,
lbJackpot: cc.Label,
lbInfo: cc.Label,
progressTimer: cc.ProgressBar,
lbTotalUser: cc.Label,
lbTotalUserWin: cc.Label,
xxPlayers: [ cc.XXLiveBWPlayer ],
nodetooltip: cc.Node,
lblmsg: cc.Label,
skewaiting: sp.Skeleton
},
onLoad: function() {
this.nodetooltip.active = !1;
this.interval = null;
this.timeBet = 54;
this.reset();
cc.XXLiveBWController.getInstance().setXXInfoView(this);
this.maxPlayer = this.xxPlayers.length;
this.animInfo = this.lbInfo.node.parent.getComponent(cc.Animation);
this.currPlayer = this.xxPlayers[0];
this.nodeBarTimer = this.progressTimer.node.children[0];
this.nodeProgressTimer = this.progressTimer.node.parent;
this.totalTimeProgress = 0;
this.maxtime = null;
},
updateInfoCurrPlayer: function(t) {
this.currPlayer.registerPlayer(t);
},
joinGame: function(t) {
this.positions = t.Positions;
this.countPlayer = 0;
this.positionsUI = [ 0, 0, 0, 0, 0, 0, 0 ];
this.onwerIndex = 0;
this.positionsUI[this.countPlayer] = lngui.UserManager.instance.mainUserInfo.AccountID;
this.countPlayer++;
for (var e = 0; e < this.maxPlayer; e++) if ((n = this.positions[e]) > 0 && n !== lngui.UserManager.instance.mainUserInfo.AccountID) {
this.positionsUI[this.countPlayer] = n;
this.countPlayer++;
}
var i = t.Players;
for (e = 0; e < this.maxPlayer; e++) {
var n;
(n = this.positions[e]) > 0 && this.registerPlayer(this.getIndexUIBetByAccID(n), i[n].Account);
}
cc.XXLiveBWController.getInstance().updatePositionPlayerUI(this.positionsUI);
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
for (var i = -1, n = 0; n < this.maxPlayer; n++) if (e === this.positionsUI[n]) {
i = n;
break;
}
this.positionsUI[i] = 0;
}
},
updateConnectionStatus: function(t) {
if (this.positionsUI) {
var e = t[0], i = t[1];
this.xxPlayers[this.getIndexUIBetByAccID(e)].updateConnectionStatus(i);
i === cc.XXLiveBWConnectionStatus.REGISTER_LEAVE_GAME && e === lngui.UserManager.instance.mainUserInfo.AccountID && lngui.UIScreenManager.instance.popToRootScreen();
}
},
updatePlayerStatus: function(t) {
this.positionsUI && this.xxPlayers[0].updatePlayerStatus(t);
},
summaryPlayer: function(t) {
this.lbTotalUser.string = t;
},
vipPlayer: function(t) {
var e = this, i = 0;
this.positionsUI = [ 0, 0, 0, 0, 0, 0, 0 ];
this.positionsUI[0] = lngui.UserManager.instance.mainUserInfo.AccountID;
i++;
t.map(function(t) {
if (t.AccountID != lngui.UserManager.instance.mainUserInfo.AccountID && i <= 6) {
e.positionsUI[i] = t.AccountID;
i++;
}
}, this);
this.positionsUI.forEach(function(e, i) {
if (0 != e) try {
var n = t.filter(function(t) {
return t.AccountID == e;
});
if (n.length > 0 && 0 != i) {
this.xxPlayers[i].registerPlayer(n[0].Account);
this.xxPlayers[i].resetPlayerResultUI();
}
} catch (t) {
console.log(t);
} else this.xxPlayers[i].unRegisterPlayer();
}, this);
cc.XXLiveBWController.getInstance().updatePositionPlayerUI(this.positionsUI);
},
totalUserWin: function(t) {
this.lbTotalUserWin.string = "+" + cc.Tool.getInstance().formatNumber(t);
this.lbTotalUserWin.font = cc.XXLiveBWController.getInstance().getWinFont();
this.lbTotalUserWin.node.active = !0;
this.lbTotalUserWin.node.scaleY = 0;
this.lbTotalUserWin.node.getComponent(cc.Animation).play("xxWin");
},
winResultVip: function(t) {
var e = this;
this.positionsUI && t.length > 0 && t.map(function(t) {
var i = e.positionsUI.indexOf(t.AccountID);
if (t.AccountID != lngui.UserManager.instance.mainUserInfo.AccountID && -1 != i) {
e.xxPlayers[i].playerResultUI(!0, t.Award);
e.xxPlayers[i].updateChip(t.Balance);
}
});
},
winResult: function(t) {
if (this.currPlayer) {
this.currPlayer.playerResultUI(!0, t.Award);
this.currPlayer.updateChip(t.Balance);
}
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
for (var i = 0; i < this.maxPlayer; i++) if (this.positionsUI[i] === t) {
e = i;
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
playerResultUI: function(t, e, i) {
this.xxPlayers[t].playerResultUI(e, i);
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
this.progressTimer.progress = 1;
this.timer = 0;
this.currentState = 999;
null !== this.interval && clearInterval(this.interval);
},
startTimer: function(t) {
console.log("Vào starttimer");
null !== this.interval && clearInterval(this.interval);
0 == this.isTimer && (this.totalTimeProgress = t);
this.timer = t;
this.isTimer = !0;
this.updateTimer(t);
},
updateTimer: function(t) {
var e = this, i = 1e3 * this.maxtime;
if (this.nodeProgressTimer) if (this.nodeBarTimer && 1 == this.nodeBarTimer.active && !this.isLockTimerProgress && this.currentState == cc.XXLiveBWState.BETTING) {
null != this.timerInterval && clearInterval(this.timerInterval);
this.isLockTimerProgress = !0;
this.timer = 1e3 * t;
var n = this.nodeBarTimer.getComponent(cc.Sprite);
try {
n && (n.fillRange = e.timer / i);
this.timerInterval = setInterval(function() {
e.timer -= 100;
if (null != n && null != n.fillRange) try {
n.fillRange = e.timer / i;
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
this.lbSID.string = "#" + t;
},
updateInfo: function(t, e, i) {
var n = this;
switch (e) {
case cc.XXLiveBWState.BETTING:
if (this.currentState !== e) {
this.updateSessionId(t.SessionID);
cc.XXLiveBWController.getInstance().setSID(t.SessionID);
this.nodeProgressTimer.active = !0;
this.resetPlayersResultUI();
this.lbInfo.string = "Đặt cửa";
this.animInfo.play("xxInfo");
this.nodetooltip.active = !0;
this.maxtime = i;
this.lblmsg.string = "Đã bắt đầu, vui lòng đặt cược";
setTimeout(function() {
n.nodetooltip && (n.nodetooltip.active = !1);
}, 1e3);
}
break;

case cc.XXLiveBWState.OPEN_PLATE:
if (this.currentState !== e) {
this.updateSessionId(t.SessionID);
cc.XXLiveBWController.getInstance().setSID(t.SessionID);
this.nodeProgressTimer && (this.nodeProgressTimer.active = !1);
this.resetPlayersResultUI();
this.lbInfo.string = "Mở bát";
this.animInfo.play("xxInfo");
this.nodetooltip.active = !0;
this.lblmsg.string = "Chờ mở thưởng";
setTimeout(function() {
n.nodetooltip && (n.nodetooltip.active = !1);
}, 1e3);
}
break;

case cc.XXLiveBWState.SHOW_RESULT:
if (this.currentState !== e) {
this.updateSessionId(t.SessionID);
cc.XXLiveBWController.getInstance().setSID(t.SessionID);
this.nodeProgressTimer && (this.nodeProgressTimer.active = !1);
this.lbInfo.string = "Kết quả";
this.animInfo.play("xxInfo");
}
break;

case cc.XXLiveBWState.WAITING:
if (this.currentState !== e) {
this.updateSessionId(t.SessionID);
cc.XXLiveBWController.getInstance().setSID(t.SessionID);
this.nodeProgressTimer && (this.nodeProgressTimer.active = !1);
this.resetPlayersResultUI();
}
break;

case cc.XXLiveBWState.SHAKING:
if (this.currentState !== e) {
this.updateSessionId(t.SessionID);
cc.XXLiveBWController.getInstance().clearAllChip();
this.nodeProgressTimer && (this.nodeProgressTimer.active = !1);
this.resetPlayersResultUI();
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
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveBWInputView: [ function(t, e) {
"use strict";
cc._RF.push(e, "acd7f9thEpH6rz/fV8c0QYy", "XXLiveBWInputView");
var i = t("XXLiveBWPlayerData").players;
(function() {
cc.XXLiveBWInputView = cc.Class({
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
lblUserTotalBet: cc.Label,
nodetooltip: cc.Node,
lblmsg: cc.Label
},
onLoad: function() {
cc.XXLiveBWController.getInstance().setXXInputView(this);
this.lblUserTotalBet.string = "0";
this.isNan = !1;
cc.XXLiveBWController.getInstance().setIsNan(this.isNan);
this.nodeChipPress = [];
var t = this;
this.btnChips.forEach(function(e) {
t.nodeChipPress.push(e.node.getChildByName("chip_press"));
});
this.minXs = [ 55, -370, 35, -370, -165, 235 ];
this.maxXs = [ 375, -245, 160, -50, -40, 360 ];
this.minYs = [ -295, -385, -385, -295, -385, -385 ];
this.maxYs = [ -195, -335, -335, -195, -335, -335 ];
this.rootDealerPos = cc.v2(0, 136);
this.chipIndex = 0;
this.betVals = [ 1e4, 5e4, 1e5, 5e5, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7 ];
this.processBetValUI();
cc.XXLiveBWController.getInstance().setLastBetData(null);
this.resetTotalBetUI();
this.timePerBet = 100;
this.currentState = -1;
this.timeouts = [];
this.posGroupUser = cc.v2(-193, 219);
this.initGateChip();
cc.XXLiveBWController.getInstance().initLogBet();
},
initGateChip: function() {
this.gateChips = [];
for (var t = 0; t < this.btnChips.length; t++) this.gateChips[t] = [];
},
playerBet: function(t) {
if (cc.XXLiveBWController.getInstance().getPositions()) {
var e = t[0], i = t[1], n = t[2], o = t[3];
cc.XXLiveBWController.getInstance().updateChip(e, o);
this.totalBets[n - 1] += i;
this.lbTotalBets[n - 1].string = cc.Tool.getInstance().formatNumberK(this.totalBets[n - 1]);
if (e === lngui.UserManager.instance.mainUserInfo.AccountID) {
cc.XXLiveBWController.getInstance().setLogBet({
AccountID: e,
Amount: i,
Gate: n
});
this.totalUserBets[n - 1] += i;
this.lbTotalUserBets[n - 1].string = cc.Tool.getInstance().formatNumberK(this.totalUserBets[n - 1]);
this.lbTotalUserBets[n - 1].node.parent.active = !0;
this.UserTotalBet += i;
this.lblUserTotalBet.string = cc.Tool.getInstance().formatNumberK(this.UserTotalBet);
}
}
},
reBet: function(t, e) {
var i = this, n = this, o = 0;
t.forEach(function(t) {
o += t.Amount;
});
e && (o *= 2);
if (o > lngui.UserManager.instance.mainUserInfo.Money) {
this.nodetooltip.active = !0;
this.lblmsg.string = "Số dư không đủ.";
setTimeout(function() {
i.nodetooltip.active = !1;
}, 1e3);
} else {
var s = {
ODD: 0,
THREE_UP: 0,
THREE_DOWN: 0,
EVEN: 0,
FOUR_UP: 0,
FOUR_DOWN: 0,
TWO_UP_TWO_DOWN: 0
};
t.forEach(function(t) {
switch (t.Gate) {
case cc.XXLiveBWGate.ODD:
s.ODD += t.Amount;
break;

case cc.XXLiveBWGate.THREE_UP:
s.THREE_UP += t.Amount;
break;

case cc.XXLiveBWGate.THREE_DOWN:
s.THREE_DOWN += t.Amount;
break;

case cc.XXLiveBWGate.EVEN:
s.EVEN += t.Amount;
break;

case cc.XXLiveBWGate.FOUR_UP:
s.FOUR_UP += t.Amount;
break;

case cc.XXLiveBWGate.FOUR_DOWN:
s.FOUR_DOWN += t.Amount;
break;

case cc.XXLiveBWGate.TWO_UP_TWO_DOWN:
s.TWO_UP_TWO_DOWN += t.Amount;
}
});
for (var c = [ s.ODD, s.THREE_UP, s.THREE_DOWN, s.EVEN, s.FOUR_UP, s.FOUR_DOWN, s.TWO_UP_TWO_DOWN ], a = [], r = 0; r < c.length; r++) {
var l = c[r];
e && (l *= 2);
for (var h = this.betVals.length - 1; h >= 0; h--) {
var u = this.betVals[h];
if (l >= u) {
var p = Math.floor(l / u);
l -= p * u;
for (var d = 0; d < p; d++) a.push({
Gate: r + 1,
Amount: u
});
}
}
}
this.count = 0;
this.timeouts = [];
a.forEach(function(t) {
n.timeouts.push(setTimeout(function() {
n.currentState === cc.XXLiveBWState.BETTING && n.sendRequestReBet(t);
}, n.timePerBet * n.count));
n.count++;
});
}
},
sendRequestReBet: function(t) {
var e = this;
if (lngui.UserManager.instance.mainUserInfo.Money < t.Amount) {
this.nodetooltip.active = !0;
this.lblmsg.string = "Số dư không đủ.";
setTimeout(function() {
e.nodetooltip.active = !1;
}, 1e3);
} else cc.XXLiveBWController.getInstance().sendRequestOnHub(cc.MethodHubName.BET, t.Amount, t.Gate);
},
showLastInput: function(t) {
var e = this;
t.forEach(function(t) {
t.forEach(function(t) {
e.totalBets[t.BetSide - 1] += t.BetValue;
e.lbTotalBets[t.BetSide - 1].string = cc.Tool.getInstance().formatNumberK(e.totalBets[t.BetSide - 1]);
if (t.AccountID === lngui.UserManager.instance.mainUserInfo.AccountID) {
cc.XXLiveBWController.getInstance().setLogBet({
AccountID: t.AccountID,
Amount: t.BetValue,
Gate: t.BetSide
});
e.totalUserBets[t.BetSide - 1] += t.BetValue;
e.lbTotalUserBets[t.BetSide - 1].string = cc.Tool.getInstance().formatNumberK(e.totalUserBets[t.BetSide - 1]);
e.lbTotalUserBets[t.BetSide - 1].node.parent.active = !0;
e.UserTotalBet += amount;
e.lblUserTotalBet.string = cc.Tool.getInstance().formatNumberK(this.UserTotalBet);
}
});
});
},
getPlayerBets: function() {
return i;
},
getChipIndexFromValue: function(t) {
for (var e = 0, i = this.betVals.length, n = 0; n < i; n++) if (t === this.betVals[n]) {
e = n;
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
this.btnChips[t].node.scale = 1;
}
this.btnChips[this.chipIndex].interactable = !1;
this.nodeChipPress[this.chipIndex].active = !0;
this.btnChips[this.chipIndex].node.scale = 1.1;
},
resetInput: function() {
i.forEach(function(t) {
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
this.UserTotalBet = 0;
this.lblUserTotalBet.string = "0";
this.lbTotalBets.forEach(function(t) {
t.string = "";
});
this.lbTotalUserBets.forEach(function(t) {
t.node.parent.active = !1;
});
},
betOfAccount: function() {},
saveLastBetData: function() {
var t = [].concat(cc.XXLiveBWController.getInstance().getLogBet());
cc.XXLiveBWController.getInstance().setLastBetData(t);
},
updateInput: function(t) {
switch (t) {
case cc.XXLiveBWState.BETTING:
if (this.currentState !== t) {
this.clearAllTimeOut();
this.resetInput();
this.resetTotalBetUI();
this.activeAllButtonBet(!0);
}
break;

case cc.XXLiveBWState.OPEN_PLATE:
if (this.currentState !== t) {
this.clearAllTimeOut();
this.activeAllButtonBet(!1);
this.saveLastBetData();
}
break;

case cc.XXLiveBWState.SHOW_RESULT:
this.currentState !== t && this.activeAllButtonBet(!1);
break;

case cc.XXLiveBWState.WAITING:
if (this.currentState !== t) {
this.resetInput();
this.activeAllButtonBet(!1);
cc.XXLiveBWController.getInstance().initLogBet();
}
break;

case cc.XXLiveBWState.SHAKING:
if (this.currentState !== t) {
this.resetTotalBetUI();
this.resetInput();
this.activeAllButtonBet(!1);
}
}
this.currentState = t;
},
betValueClicked: function(t, e) {
this.chipIndex = parseInt(e.toString());
this.processBetValUI();
},
betClicked: function(t, e) {
var i = this;
if (cc.XXLiveBWController.getInstance().getTime() <= 3) {
this.nodetooltip.active = !0;
this.lblmsg.string = "Đã hết thời gian đặt cửa.";
setTimeout(function() {
i.nodetooltip.active = !1;
}, 1e3);
cc.XXLiveBWController.getInstance().activeAllButtonBet(!1);
} else {
this.indexBet = parseInt(e.toString());
var n = this.betVals[this.chipIndex];
if (lngui.UserManager.instance.mainUserInfo.Money < n) {
this.nodetooltip.active = !0;
this.lblmsg.string = "Số dư không đủ.";
setTimeout(function() {
i.nodetooltip.active = !1;
}, 1e3);
} else {
cc.XXLiveBWController.getInstance().sendRequestOnHub(cc.MethodHubName.BET, n, this.indexBet + 1);
this.btnX2.interactable = !1;
this.btnRepeat.interactable = !1;
}
}
},
nanClicked: function() {
this.isNan = !this.isNan;
this.isNan ? this.spriteNan.spriteFrame = cc.XXLiveBWController.getInstance().getNans()[0] : this.spriteNan.spriteFrame = cc.XXLiveBWController.getInstance().getNans()[1];
cc.XXLiveBWController.getInstance().setIsNan(this.isNan);
},
x2Clicked: function() {
var t = this;
if (cc.XXLiveBWController.getInstance().getTime() <= 3) {
this.nodetooltip.active = !0;
this.lblmsg.string = "Đã hết thời gian đặt cửa.";
setTimeout(function() {
t.nodetooltip.active = !1;
}, 1e3);
cc.XXLiveBWController.getInstance().activeAllButtonBet(!1);
} else {
var e = cc.XXLiveBWController.getInstance().getLastBetData();
if (e && e.length > 0) {
this.reBet(e, !0);
this.btnX2.interactable = !1;
this.btnRepeat.interactable = !1;
} else cc.PopupController.getInstance().showSlotsMessage("Không có dữ liệu đặt của phiên trước.");
}
},
repeatClicked: function() {
var t = this;
if (cc.XXLiveBWController.getInstance().getTime() <= 3) {
this.nodetooltip.active = !0;
this.lblmsg.string = "Đã hết thời gian đặt cửa.";
setTimeout(function() {
t.nodetooltip.active = !1;
}, 1e3);
cc.XXLiveBWController.getInstance().activeAllButtonBet(!1);
} else {
var e = cc.XXLiveBWController.getInstance().getLastBetData();
if (e && e.length > 0) {
this.reBet(e);
this.btnX2.interactable = !1;
this.btnRepeat.interactable = !1;
} else cc.PopupController.getInstance().showSlotsMessage("Không có dữ liệu đặt của phiên trước.");
}
},
clearAllChip: function() {
this.nodeParentChip.removeAllChildren(!0);
}
});
}).call(void 0);
cc._RF.pop();
}, {
XXLiveBWPlayerData: "XXLiveBWPlayerData"
} ],
XXLiveBWLiveSettingRoomView: [ function(t, e) {
"use strict";
cc._RF.push(e, "48fa66KUddGOZF8T1qS0svD", "XXLiveBWLiveSettingRoomView");
(function() {
cc.DragonTigerSettingRoomViewLive = cc.Class({
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
this.sound = cc.Tool.getInstance().getItem("@Sound") && "true" === cc.Tool.getInstance().getItem("@Sound").toString();
this.music = cc.Tool.getInstance().getItem("@Music") && "true" === cc.Tool.getInstance().getItem("@Music").toString();
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
XXLiveBWMenuView: [ function(t, e) {
"use strict";
cc._RF.push(e, "95371oDXMFIZKWZV1bgSKjX", "XXLiveBWMenuView");
(function() {
cc.XXLiveBWMenuView = cc.Class({
extends: cc.Component,
properties: {
layoutMenu: cc.Node,
nodeBtnHideMenu: cc.Node,
arrow: cc.Node
},
onLoad: function() {
this.nodeBtnHideMenu.active = !1;
},
onClickShowMenu: function() {
this.nodeBtnHideMenu.active = !0;
cc.tween(this.layoutMenu).to(.3, {
position: cc.v2(-608, this.layoutMenu.y)
}).start();
cc.tween(this.arrow).to(.3, {
scaleX: -1
}).start();
},
onClickHideMenu: function() {
cc.tween(this.layoutMenu).to(.3, {
position: cc.v2(-965, this.layoutMenu.y)
}).start();
cc.tween(this.arrow).to(.3, {
scaleX: 1
}).start();
this.nodeBtnHideMenu.active = !1;
},
onClickHelp: function() {
this.onClickHideMenu();
cc.XXLiveBWPopupController.getInstance().createHelpView();
cc.XXLiveBWController.getInstance().HideAndShowLive();
},
onClickHistory: function() {
this.onClickHideMenu();
cc.XXLiveBWPopupController.getInstance().createHistoryView();
cc.XXLiveBWController.getInstance().HideAndShowLive();
},
onClickTop: function() {
this.onClickHideMenu();
cc.XXLiveBWPopupController.getInstance().createTopView();
cc.XXLiveBWController.getInstance().HideAndShowLive();
},
onClickExit: function() {
lngui.UIScreenManager.instance.popToRootScreen();
},
onClickSetting: function() {}
});
}).call();
cc._RF.pop();
}, {} ],
XXLiveBWPlayerData: [ function(t, e) {
"use strict";
cc._RF.push(e, "24328JrizhFg5XQ4yIzZesX", "XXLiveBWPlayerData");
var i = [ {
accID: 0,
balance: 0,
avatarId: 1,
indexBet: 0,
position: cc.v2(-473, -361),
chips: []
}, {
accID: 0,
balance: 500,
avatarId: 3,
indexBet: 0,
position: cc.v2(-578, -208),
chips: []
}, {
accID: 0,
balance: 1500,
avatarId: 2,
indexBet: 0,
position: cc.v2(-578, -30),
chips: []
}, {
accID: 0,
balance: 2e3,
avatarId: 1,
indexBet: 0,
position: cc.v2(-523, 141),
chips: []
}, {
accID: 0,
balance: 1e4,
avatarId: 6,
indexBet: 0,
position: cc.v2(509, 141),
chips: []
}, {
accID: 0,
balance: 5e3,
avatarId: 5,
indexBet: 0,
position: cc.v2(574, -30),
chips: []
}, {
accID: 0,
balance: 9e3,
avatarId: 4,
indexBet: 0,
position: cc.v2(578, -208),
chips: []
} ];
e.exports = {
players: i
};
cc._RF.pop();
}, {} ],
XXLiveBWPlayerStatus: [ function(t, e) {
"use strict";
cc._RF.push(e, "234eaarD3dIeIubgjR3Yyf4", "XXLiveBWPlayerStatus");
(function() {
cc.XXLiveBWPlayerStatus = cc.Enum({
NOT_INGAME: "-1",
VIEWER: "0",
INGAME: "1",
WAITING: "2"
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveBWPlayer: [ function(t, e) {
"use strict";
cc._RF.push(e, "55607IYhVxPG7v4WB4boG0j", "XXLiveBWPlayer");
(function() {
cc.XXLiveBWPlayer = cc.Class({
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
this.lbWin.font = cc.XXLiveBWController.getInstance().getWinFont();
} else {
this.nodeLose.active = !0;
this.lbWin.string = cc.Tool.getInstance().formatNumber(e);
this.lbWin.font = cc.XXLiveBWController.getInstance().getLoseFont();
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
(e <= 0 || e >= 25) && (e = 1);
this.nickName = t.NickName;
this.avatar.setAvatar(cc.XXLiveBWController.getInstance().getAvatars()[e]);
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
this.avatar.setAvatar(cc.XXLiveBWController.getInstance().getAvatarDef());
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
XXLiveBWPopupController: [ function(t, e) {
"use strict";
cc._RF.push(e, "75c0bBv5jxBoaOQ2DIJ4vOq", "XXLiveBWPopupController");
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
cc.XXLiveBWPopupController = t;
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveBWPopupView: [ function(t, e) {
"use strict";
cc._RF.push(e, "57a26FkalFBuawWcI4AyWLp", "XXLiveBWPopupView");
(function() {
cc.XXLiveBWPopupView = cc.Class({
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
cc.XXLiveBWPopupController.getInstance().setXXPopupView(this);
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
XXLiveBWResultView: [ function(t, e) {
"use strict";
cc._RF.push(e, "a72b37l84hAq649TJsq2vi4", "XXLiveBWResultView");
(function() {
cc.XXLiveBWResultView = cc.Class({
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
node2up2down: cc.Node,
nodeChan1: cc.Node,
nodeChan2: cc.Node,
nodeChan3: cc.Node,
nodeLe1: cc.Node,
nodeLe2: cc.Node,
nodeLe3: cc.Node,
nodeBigWin: [ cc.Node ]
},
onLoad: function() {
cc.XXLiveBWController.getInstance().setXXLiveBWResultView(this);
this.currentState = -1;
this.nodeResult = this.animResult.node;
this.nodeFxResult = this.nodeChan1.parent;
this.batNanPos = cc.v2(0, 43);
},
reset: function() {},
updateResult: function(t, e, i, n, o, s) {
if (this.nodeBatNan) {
switch (o) {
case cc.XXLiveBWState.BETTING:
if (this.currentState !== o) {
this.nodeBatNan.active = !1;
this.nodeDia.active = !1;
this.nodeBatNan.position = this.batNanPos;
this.animationBat.node.active = !1;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
this.animationBat.setAnimation(1, "Idle_2", !0);
this.nodeResult.active = !1;
this.nodeFxResult.active = !1;
}
break;

case cc.XXLiveBWState.OPEN_PLATE:
if (this.currentState !== o) {
this.nodeBatNan.active = !1;
this.nodeDia.active = !1;
this.nodeBatNan.position = this.batNanPos;
this.animationBat.node.active = !1;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
this.animationBat.setAnimation(1, "Idle_2", !0);
this.nodeResult.active = !1;
this.nodeFxResult.active = !1;
this.playFxResult(i, n, s);
t && this.startAnimBigWin(t);
}
break;

case cc.XXLiveBWState.SHOW_RESULT:
if (this.currentState !== o) {
this.nodeBatNan.active = !1;
this.nodeDia.active = !1;
this.animationBat.node.active = !1;
this.playPayFx(e, n, i);
}
break;

case cc.XXLiveBWState.WAITING:
if (this.currentState !== o) {
cc.XXLiveBWController.getInstance().initGateChip();
this.nodeFxResult.active = !1;
this.stopAnimationBigWin();
}
break;

case cc.XXLiveBWState.SHAKING:
if (this.currentState !== o) {
this.nodeResult.active = !1;
this.nodeFxResult.active = !1;
this.nodeBatNan.active = !1;
this.nodeDia.active = !1;
this.nodeBatNan.position = this.batNanPos;
this.animationBat.node.active = !1;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
this.animationBat.setAnimation(2, "lac", !1);
}
}
this.currentState = o;
}
},
playFxResult: function(t, e, i) {
var n = this;
this.nodeFxResult.active = !0;
this.nodeResult.active = !0;
this.animResult.stop();
this.nodeChan1.active = !1;
this.nodeChan2.active = !1;
this.nodeChan3.active = !1;
this.nodeLe1.active = !1;
this.nodeLe2.active = !1;
this.nodeLe3.active = !1;
this.node2up2down.active = !1;
if (cc.XXLiveBWController.getInstance().getIsNan() && !i) {
this.nodeDia.active = !1;
this.nodeBatNan.active = !1;
this.nodeBatNan.position = this.batNanPos;
this.animationBat.node.active = !1;
setTimeout(function() {
n.nodeBatNan.active = !1;
}, 5e3);
} else {
this.nodeBatNan.active = !1;
this.nodeDia.active = !1;
this.animationBat.node.active = !1;
this.animationBat.clearTracks();
this.animationBat.setToSetupPose();
this.animationBat.setAnimation(3, "mo", !1);
}
},
playPayFx: function(t, e, i) {
var n = parseInt(i.BigGate), o = parseInt(i.SmallGate);
switch (n) {
case cc.XXLiveBWGate.EVEN:
this.animResult.play("chan_blink");
break;

case cc.XXLiveBWGate.ODD:
this.animResult.play("le_blink");
}
switch (o) {
case cc.XXLiveBWGate.THREE_UP:
this.nodeLe1.active = !0;
this.nodeLe3.active = !0;
break;

case cc.XXLiveBWGate.THREE_DOWN:
this.nodeLe1.active = !0;
this.nodeChan3.active = !0;
break;

case cc.XXLiveBWGate.FOUR_DOWN:
this.nodeChan1.active = !0;
this.nodeLe2.active = !0;
break;

case cc.XXLiveBWGate.FOUR_UP:
this.nodeChan1.active = !0;
this.nodeChan2.active = !0;
break;

case cc.XXLiveBWGate.TWO_UP_TWO_DOWN:
this.nodeChan1.active = !0;
this.node2up2down.active = !0;
break;

default:
this.nodeChan1.active = !0;
}
},
playAnimationBigWin: function(t, e) {
t = parseInt(t);
var i = this.nodeBigWin[t - 1];
i.active = !0;
null != i && i.getComponent(sp.Skeleton).setAnimation(0, "x" + e, !0);
},
stopAnimationBigWin: function() {
this.nodeBigWin.forEach(function(t) {
t.getComponent(sp.Skeleton).clearTracks();
t.active = !1;
});
},
parseStringToObj: function(t) {
if (!t || "string" != typeof t) return [];
for (var e = t.split(","), i = [], n = 0; n < e.length; n++) {
var o = e[n].split("-");
o.length >= 3 && i.push({
betSide: Number(o[0]),
numDice: Number(o[1]),
rateMuliple: Number(o[2])
});
}
return i;
},
startAnimBigWin: function(t) {
var e = this;
this.parseStringToObj(t).forEach(function(t) {
e.playAnimationBigWin(t.betSide, t.rateMuliple);
});
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveBWResult: [ function(t, e) {
"use strict";
cc._RF.push(e, "32e45sQE55ABJRsojAamOza", "XXLiveBWResult");
(function() {
cc.XXLiveBWResult = cc.Enum({
EVEN_FOUR_DOWN: 0,
ODD_THREE_DOWN: 1,
EVEN: 2,
ODD_THREE_UP: 3,
EVEN_FOUR_UP: 4
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveBWSoiCauView: [ function(t, e) {
"use strict";
cc._RF.push(e, "34263UtD51CQ54CX8iCviCn", "XXLiveBWSoiCauView");
(function() {
cc.XXLiveBWSoiCauView = cc.Class({
extends: cc.Component,
properties: {
animation: cc.Animation,
nodeParentSC1: cc.Node,
nodeParentSC2: cc.Node,
nodeEvenTemp: cc.Node,
nodeOddTemp: cc.Node,
lbFourUp: cc.Label,
lbFourDown: cc.Label,
lb2Up2Down: cc.Label,
lbThreeUp: cc.Label,
lbThreeDown: cc.Label,
lbPercentChanSC1: cc.Label,
lbPercentLeSC1: cc.Label,
progressSc1: cc.ProgressBar,
lbPercentChanSC2: cc.Label,
lbPercentLeSC2: cc.Label,
progressSc2: cc.ProgressBar,
sfDots: [ cc.SpriteFrame ]
},
onLoad: function() {
cc.XXLiveBWController.getInstance().setXXSoiCauView(this);
this.rootPosXSC1 = 280;
this.rootPosYSC1 = -70.5;
this.spaceXSC1 = 33;
this.spaceYSC1 = 27;
this.maxItemPerColSC1 = 6;
this.rootPosXSC2 = -240;
this.rootPosYSC2 = -35;
this.spaceXSC2 = 25;
this.spaceYSC2 = 26;
this.maxItemPerColSC2 = 4;
},
convertToMatrix: function(t) {
var e = this, i = this.getSide(t[0]), n = [], o = [];
t.forEach(function(t) {
var s = e.getSide(t);
if (o.length === e.maxItemPerColSC1) {
n.push(o);
(o = []).push(t);
i = s;
} else if (s === i) o.push(t); else {
n.push(o);
i = s;
(o = []).push(t);
}
});
n.push(o);
return n;
},
getSide: function(t) {
switch (t) {
case cc.XXLiveBWResult.EVEN:
case cc.XXLiveBWResult.EVEN_FOUR_DOWN:
case cc.XXLiveBWResult.EVEN_FOUR_UP:
return "EVEN";

case cc.XXLiveBWResult.ODD_THREE_DOWN:
case cc.XXLiveBWResult.ODD_THREE_UP:
return "ODD";
}
},
setPercentGate: function(t, e) {
this.lb2Up2Down.string = this.getPercent(t[7], e);
this.lbFourUp.string = this.getPercent(t[5], e);
this.lbFourDown.string = this.getPercent(t[6], e);
this.lbThreeUp.string = this.getPercent(t[2], e);
this.lbThreeDown.string = this.getPercent(t[3], e);
},
getPercent: function(t, e) {
return Math.round(t / e * 100) + "%";
},
draw: function(t) {
if (0 !== t.length) {
this.evenSC1 = 0;
this.fourUpSC1 = 0;
this.fourDownSC1 = 0;
this.oddSC1 = 0;
this.threeUpSC1 = 0;
this.threeDownSC1 = 0;
for (var e = this.convertToMatrix(t), i = Math.min(e.length, 9), n = 0; n < i; n++) this.drawCol(e[n], n);
}
},
draw2: function(t) {
if (0 !== t.length) {
t = t.slice(0, 100);
this.evenSC2 = 0;
this.fourUpSC2 = 0;
this.fourDownSC2 = 0;
this.oddSC2 = 0;
this.threeUpSC2 = 0;
this.threeDownSC2 = 0;
for (var e = 0; e < t.length; e++) this.createNode2(t[e]);
}
},
drawCol: function(t, e) {
for (var i = this.rootPosXSC1 - e * this.spaceXSC1, n = this.rootPosYSC1 + (this.maxItemPerColSC1 - t.length) * this.spaceYSC1, o = 0; o < t.length; o++) this.createNode(t[o], cc.v2(i, n + this.spaceYSC1 * o));
},
createNode: function(t, e) {
switch (t) {
case cc.XXLiveBWResult.EVEN:
var i = cc.instantiate(this.nodeEvenTemp);
i.getChildByName("so").getComponent(cc.Label).string = t + "";
this.evenSC1++;
break;

case cc.XXLiveBWResult.EVEN_FOUR_DOWN:
(i = cc.instantiate(this.nodeEvenTemp)).getChildByName("so").getComponent(cc.Label).string = t + "";
this.evenSC1++;
this.fourDownSC1++;
break;

case cc.XXLiveBWResult.EVEN_FOUR_UP:
(i = cc.instantiate(this.nodeEvenTemp)).getChildByName("so").getComponent(cc.Label).string = t + "";
this.evenSC1++;
this.fourUpSC1++;
break;

case cc.XXLiveBWResult.ODD_THREE_DOWN:
(i = cc.instantiate(this.nodeOddTemp)).getChildByName("so").getComponent(cc.Label).string = t + "";
this.oddSC1++;
this.threeDownSC1++;
break;

case cc.XXLiveBWResult.ODD_THREE_UP:
(i = cc.instantiate(this.nodeOddTemp)).getChildByName("so").getComponent(cc.Label).string = t + "";
this.oddSC1++;
this.threeUpSC1++;
}
i.parent = this.nodeParentSC1;
i.position = e;
},
createNode2: function(t) {
switch (t) {
case cc.XXLiveBWResult.EVEN:
var e = cc.instantiate(this.nodeEvenTemp);
e.getChildByName("so").getComponent(cc.Label).string = t + "";
this.evenSC2++;
break;

case cc.XXLiveBWResult.EVEN_FOUR_DOWN:
(e = cc.instantiate(this.nodeEvenTemp)).getChildByName("so").getComponent(cc.Label).string = t + "";
this.evenSC2++;
this.fourDownSC2++;
break;

case cc.XXLiveBWResult.EVEN_FOUR_UP:
(e = cc.instantiate(this.nodeEvenTemp)).getChildByName("so").getComponent(cc.Label).string = t + "";
this.evenSC2++;
this.fourUpSC2++;
break;

case cc.XXLiveBWResult.ODD_THREE_DOWN:
(e = cc.instantiate(this.nodeOddTemp)).getChildByName("so").getComponent(cc.Label).string = t + "";
this.oddSC2++;
this.threeDownSC2++;
break;

case cc.XXLiveBWResult.ODD_THREE_UP:
(e = cc.instantiate(this.nodeOddTemp)).getChildByName("so").getComponent(cc.Label).string = t + "";
this.oddSC2++;
this.threeUpSC2++;
}
e.parent = this.nodeParentSC2;
e.getComponent(cc.Sprite).spriteFrame = this.sfDots[t];
var i = this.evenSC2 / (this.evenSC2 + this.oddSC2) * 100;
this.progressSc2.progress = i / 100;
this.lbPercentChanSC2.string = Math.round(i) + "%";
this.lbPercentLeSC2.string = 100 - Math.round(i) + "%";
},
resetDraw: function() {
for (var t = this.nodeParentSC1.children, e = this.nodeParentSC2.children, i = t.length - 1; i >= 0; i--) {
this.nodeParentSC1.removeChild(t[i]);
this.nodeParentSC2.removeChild(e[i]);
}
},
hideClicked: function() {
this.animation.play("xxHideSoiCau");
},
showClicked: function() {
this.animation.play("xxShowSoiCau");
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveBWState: [ function(t, e) {
"use strict";
cc._RF.push(e, "7bfc3b+5+1Mk7sMyw+Jvsyf", "XXLiveBWState");
(function() {
cc.XXLiveBWState = cc.Enum({
WAITING: 0,
SHAKING: 1,
BETTING: 2,
OPEN_PLATE: 3,
SHOW_RESULT: 4
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveBWTopItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "cb39b+aCHRL8olASxcb6IdJ", "XXLiveBWTopItem");
(function() {
cc.XXLiveBWTopItem = cc.Class({
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
XXLiveBWTopListView: [ function(t, e) {
"use strict";
cc._RF.push(e, "955358H4llO77bNurudpfQ6", "XXLiveBWTopListView");
(function() {
cc.XXLiveBWTopListView = cc.Class({
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
for (var i = Math.min(this.spawnCount, e), n = 0; n < i; ++n) {
var o = cc.instantiate(this.itemTemplate);
this.content.addChild(o);
o.setPosition(0, -o.height * (.5 + n) - this.spacing * (n + 1));
o.getComponent(cc.XXLiveBWTopItem).updateItem(this.messages[n], n);
this.items.push(o);
}
this.rootContentY = this.content.y;
},
update: function(t) {
this.updateTimer += t;
if (!(this.updateTimer < this.updateInterval)) {
this.updateTimer = 0;
for (var e = this.items, i = this.bufferZone, n = this.scrollView.content.y < this.lastContentPosY, o = (this.itemTemplate.height + this.spacing) * e.length, s = 0; s < e.length; ++s) {
var c = this.getPositionInView(e[s]);
if (n) {
if (c.y < -i && e[s].y + o < 0) {
e[s].y = e[s].y + o;
var a = e[s].getComponent(cc.XXLiveBWTopItem), r = a.itemID - e.length;
a.updateItem(this.messages[r], r);
}
} else if (c.y > i && e[s].y - o > -this.content.height) {
e[s].y = e[s].y - o;
r = (a = e[s].getComponent(cc.XXLiveBWTopItem)).itemID + e.length;
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
XXLiveBWTopView: [ function(t, e) {
"use strict";
cc._RF.push(e, "94fa27mg3hAPJA7XHoG8VVA", "XXLiveBWTopView");
(function() {
cc.XXLiveBWTopView = cc.Class({
extends: cc.Component,
properties: {
XXTopListView: cc.XXLiveBWTopListView
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
cc.XXLiveBWPopupController.getInstance().destroyTopView();
}, this, 1, 0, .12, !1);
cc.XXLiveBWController.getInstance().HideAndShowLive();
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
XXLiveBWView: [ function(t, e) {
"use strict";
cc._RF.push(e, "01e14tJS1BAuJIKgERQFrB4", "XXLiveBWView");
var i = t("NetConfig");
(function() {
cc.XXLiveBWView = cc.Class({
extends: cc.Component,
properties: {
spriteSound: cc.Sprite,
sfSounds: [ cc.SpriteFrame ],
spriteBack: cc.Sprite,
nodeRegisterLeave: cc.Node,
nodeParentChat: cc.Node,
avatarDef: cc.SpriteFrame,
listAvtars: [ cc.SpriteFrame ],
nodetooltip: cc.Node,
nodeView: cc.Node,
lblmsg: cc.Label
},
onLoad: function() {
cc.XXLiveBWController.getInstance().setXXView(this);
cc.XXLiveBWController.getInstance().setAvatars(this.listAvtars);
cc.XXLiveBWController.getInstance().setAvatarDef(this.avatarDef);
this.interval = null;
this.isActiveChat = !1;
this.lastTimeReconnect = new Date().getTime();
this.connectHub();
this.currentState = -1;
this.idPlayNow = 0;
this.isRegisterLeaveRoom = !1;
},
start: function() {
this.sound = cc.Tool.getInstance().getItem("@Sound") && "true" === cc.Tool.getInstance().getItem("@Sound").toString();
this.spriteSound.spriteFrame = this.sound ? this.sfSounds[0] : this.sfSounds[1];
cc.AudioController.getInstance().enableSound(this.sound);
},
onDestroy: function() {
var t = lngui.UserManager.instance.mainUserInfo.Money;
lngui.GameCoreManager.instance.updateTotalGold(t);
this.sendRequestOnHub(cc.MethodHubName.EXIT_LOBBY);
null !== this.interval && clearInterval(this.interval);
this.xxHub && this.xxHub.close();
this.unscheduleAllCallbacks();
cc.XXLiveBWController.getInstance().setXXView(null);
cc.systemEvent.off("OnXocDiaLiveBWWebSocKet", this.onResponeData, this);
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
case cc.XXLiveBWState.BETTING:
case cc.XXLiveBWState.OPEN_PLATE:
case cc.XXLiveBWState.SHOW_RESULT:
case cc.XXLiveBWState.WAITING:
case cc.XXLiveBWState.SHAKING:
}
this.currentState = t.CurrentState;
this.startTimer(t.Ellapsed);
},
updateTimer: function(t) {
if (!(t < 1)) switch (this.currentState) {
case cc.XXLiveBWState.BETTING:
case cc.XXLiveBWState.OPEN_PLATE:
this.lbTimer.string = t;
this.lbTimer.font = t > 3 ? this.bmfNormal : this.bmfRed;
this.lbTimer.node.parent.active = !0;
break;

case cc.XXLiveBWState.SHOW_RESULT:
case cc.XXLiveBWState.WAITING:
case cc.XXLiveBWState.SHAKING:
this.lbTimer.node.parent.active = !1;
}
},
disconnectAndLogout: function() {
this.xxHub && this.xxHub.close();
this.lastTimeReconnect = new Date().getTime();
},
connectHub: function() {
console.log("connectHub=================>" + cc.SubdomainName.XOC_XOC);
var t = {
url: "https://xocdialive-bigwin-b52." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
hub: "sedieLivehub",
ip: "http://18.138.207.162:9001/signalr/negotiate",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate
};
cc.systemEvent.off("OnXocDiaLiveBWWebSocKet", this.onResponeData, this);
cc.systemEvent.on("OnXocDiaLiveBWWebSocKet", this.onResponeData, this);
this.xxHub = new lngui.GateSignalR();
this.xxHub.connect("OnXocDiaLiveBWWebSocKet", t.url, t.hub, t.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
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
this.xxHub && this.xxHub.send(t, e);
},
onResponeData: function(t) {
t.s && "error" == t.s || this.onHubMessage(t);
},
connectSuccess: function() {
console.log("connectSuccess =========>");
this.sendRequestOnHub(cc.MethodHubName.ENTER_LOBBY);
},
onHubMessage: function(t) {
var e = this;
if (("open" == t.s || "reconnect" == t.s || "1" == t.s) && !this.isConnect) {
this.isConnect = !0;
this.connectSuccess();
}
if (void 0 !== t.M && t.M.length > 0) {
var i = t.M;
i.map(function(t) {
var n;
switch (t.M) {
case cc.MethodHubOnName.SESSION_INFO:
cc.XXLiveBWController.getInstance().updateInfo(t.A[0], t.A[0].Phrase, null);
cc.XXLiveBWController.getInstance().updateInput(t.A[0].Phrase);
break;

case cc.MethodHubOnName.GAME_HISTORY:
cc.XXLiveBWController.getInstance().resetDraw();
cc.XXLiveBWController.getInstance().draw(t.A[0]);
cc.XXLiveBWController.getInstance().draw2(t.A[0]);
cc.XXLiveBWController.getInstance().setPercentGate(t.A[2], t.A[1]);
break;

case cc.MethodHubOnName.START_ACTION_TIMER:
var o = t.A;
cc.XXLiveBWController.getInstance().updateInfo(o[0], o[2], o[0].TotalBetTime);
cc.XXLiveBWController.getInstance().updateResult(o[0].BigWinString, null, o[0].Result, null == (n = o[0].Result) ? void 0 : n.ChipsData, o[2]);
cc.XXLiveBWController.getInstance().updateInput(o[2]);
break;

case cc.MethodHubOnName.PLAYER_LEAVE:
0 === i.length && cc.XXLiveBWController.getInstance().playerLeave(t.A);
break;

case cc.MethodHubOnName.UPDATE_CONNECTION_STATUS:
cc.XXLiveBWController.getInstance().updateConnectionStatus(t.A);
break;

case cc.MethodHubOnName.UPDATE_PLAYER_STATUS:
cc.XXLiveBWController.getInstance().updatePlayerStatus(t.A[0]);
break;

case cc.MethodHubOnName.JOIN_GAME:
o = t.A[0], t.A[1];
cc.XXLiveBWController.getInstance().updateInfoCurrPlayer(o.Account);
cc.PopupController.getInstance().hideBusy();
break;

case cc.MethodHubOnName.BET_SESSION:
cc.XXLiveBWController.getInstance().showLastInput(t.A[0]);
break;

case cc.MethodHubOnName.BET_OF_ACCOUNT:
break;

case cc.MethodHubOnName.PLAYER_BET:
o = t.A;
cc.XXLiveBWController.getInstance().playerBet(o);
break;

case cc.MethodHubOnName.BET_SUCCESS:
break;

case cc.MethodHubOnName.WIN_RESULT_VIP:
if (t.A.length > 0) try {
setTimeout(function() {
cc.XXLiveBWController.getInstance().winResultVip(t.A[0]);
}, 2500);
} catch (t) {}
break;

case cc.MethodHubOnName.WIN_RESULT:
if (t.A.length > 0) try {
setTimeout(function() {
cc.XXLiveBWController.getInstance().winResult(t.A[0]);
}, 2500);
} catch (t) {}
break;

case cc.MethodHubOnName.TOTAL_WIN_MONEY:
t.A[0] > 0 && setTimeout(function() {
cc.XXLiveBWController.getInstance().totalUserWin(t.A[0]);
}, 2500);
break;

case cc.MethodHubOnName.PLAYER_MESSAGE:
case cc.MethodHubOnName.MESSAGE:
e.nodetooltip.active = !0;
e.lblmsg.string = t.A[0];
setTimeout(function() {
e.nodetooltip && (e.nodetooltip.active = !1);
}, 1e3);
break;

case cc.MethodHubOnName.OPEN_PLATE_NOW:
cc.XXLiveBWController.getInstance().updateResult(o[0].BigWinString, null, t.A[0], t.A[1], cc.XXLiveBWState.OPEN_PLATE, !0);
cc.XXLiveBWController.getInstance().updateInput(cc.XXLiveBWState.OPEN_PLATE);
break;

case cc.MethodHubOnName.RECEIVE_MESSAGE:
cc.XXLiveBWController.getInstance().playerShowBubbleChat(t.A);
break;

case cc.MethodHubOnName.SUMMARY_PLAYER:
cc.XXLiveBWController.getInstance().summaryPlayer(t.A[0]);
break;

case cc.MethodHubOnName.VIP_PLAYERS:
var s = t.A[0];
s.length > 0 && cc.XXLiveBWController.getInstance().vipPlayer(s);
break;

case "recieveMessage":
cc.XXLiveBWController.getInstance().playerShowBubbleChat(t.A);
break;

case cc.MethodHubOnName.UPDATE_ROOM_TIME:
cc.XXLiveBWController.getInstance().updateTimer(t.A[0]);
}
});
i && i.length > 0 && i.forEach(function(t) {
t.M === cc.MethodHubOnName.PLAYER_LEAVE && cc.XXLiveBWController.getInstance().playerLeave(t.A);
});
} else if (t.R && t.R.AccountID) {
cc.PopupController.getInstance().showBusy();
this.sendRequestOnHub(cc.MethodHubName.PLAY_NOW);
} else if (t.R && t.I === this.idPlayNow.toString()) {
this.idPlayNow = 0;
cc.PopupController.getInstance().hideBusy();
} else t.I;
},
onHubOpen: function() {},
onHubClose: function() {
new Date().getTime() - this.lastTimeReconnect >= 1e3 * i.RECONNECT_TIME ? this.reconnect() : cc.director.getScheduler().schedule(this.reconnect, this, i.RECONNECT_TIME, 0, 0, !1);
},
onHubError: function() {
cc.PopupController.getInstance().hideBusy();
},
playerLeave: function(t) {
var e = this;
if (t[0] === lngui.UserManager.instance.mainUserInfo.AccountID) {
var i = t[1];
lngui.UIScreenManager.instance.popToRootScreen();
this.nodetooltip.active = !0;
this.lblmsg.string = i;
setTimeout(function() {
e.nodetooltip && (e.nodetooltip.active = !1);
}, 1e3);
}
},
helpClicked: function() {
cc.XXLiveBWPopupController.getInstance().createHelpView();
},
historyClicked: function() {
cc.XXLiveBWPopupController.getInstance().createHistoryView();
},
topClicked: function() {
cc.XXLiveBWPopupController.getInstance().createTopView();
},
graphClicked: function() {
cc.XXLiveBWPopupController.getInstance().createGraphView();
},
soundClicked: function() {
this.sound = !this.sound;
cc.Tool.getInstance().setItem("@Sound", this.sound);
this.spriteSound.spriteFrame = this.sound ? this.sfSounds[0] : this.sfSounds[1];
cc.AudioController.getInstance().enableSound(this.sound);
},
backClicked: function() {
lngui.UIScreenManager.instance.popToRootScreen();
},
chatClicked: function() {},
HideAndShowLive: function() {
this.nodeView.active = !this.nodeView.active;
}
});
}).call(void 0);
cc._RF.pop();
}, {
NetConfig: void 0
} ],
XXLiveBW_GroupUserCommand: [ function(t, e) {
"use strict";
cc._RF.push(e, "1b760d8+OlGBqNhG+lYypi4", "XXLiveBW_GroupUserCommand");
(function() {
var t;
t = function() {
function t() {}
t.prototype.execute = function(t) {
var e = cc.SubdomainName.XOC_XOC_LIVE;
return cc.ServerConnector.getInstance().sendRequest(e, "api/XocDia/GetPlayersNotInGame", function(e) {
var i = JSON.parse(e);
return t.onGetGroupUserResponse(i);
});
};
return t;
}();
cc.XXLiveBWGroupUserCommand = t;
}).call(void 0);
cc._RF.pop();
}, {} ]
}, {}, [ "XXBG.Chat.NetworkClient", "XXBGChat", "XXLiveBWGetBigWinnerCommand", "XXLiveBWHistoryCommand", "XXLiveBW_GroupUserCommand", "XXLiveBWLiveSettingRoomView", "XXLiveBWAssets", "XXLiveBWChipItem", "XXLiveBWChipPool", "XXLiveBWController", "XXLiveBWInfoView", "XXLiveBWInputView", "XXLiveBWMenuView", "XXLiveBWResultView", "XXLiveBWView", "XXLiveBWConnectionStatus", "XXLiveBWFX", "XXLiveBWGate", "XXLiveBWPlayerStatus", "XXLiveBWResult", "XXLiveBWState", "HideAndShowSC", "XXLiveBWSoiCauView", "XXLiveBWPlayerData", "XXLiveBWPlayer", "XXLiveBWPopupController", "XXLiveBWPopupView", "XXLiveBWGroupItem", "XXLiveBWGroupUserListView", "XXLiveBWGroupUserView", "XXLiveBWHelpView", "XXLiveBWHistoryItem", "XXLiveBWHistoryListView", "XXLiveBWHistoryView", "XXLiveBWTopItem", "XXLiveBWTopListView", "XXLiveBWTopView", "SetWebview", "StreamSprite", "ViewLive" ]);