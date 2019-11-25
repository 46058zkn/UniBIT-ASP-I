if (! function(n, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
            if (!n.document) throw new Error("jQuery requires a window with a document");
            return t(n)
        } : t(n)
    }("undefined" != typeof window ? window : this, function(n, t) {
        function ri(n) {
            var t = n.length,
                r = i.type(n);
            return "function" === r || i.isWindow(n) ? !1 : 1 === n.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in n
        }

        function ui(n, t, r) {
            if (i.isFunction(t)) return i.grep(n, function(n, i) {
                return !!t.call(n, i, n) !== r
            });
            if (t.nodeType) return i.grep(n, function(n) {
                return n === t !== r
            });
            if ("string" == typeof t) {
                if (re.test(t)) return i.filter(t, n, r);
                t = i.filter(t, n)
            }
            return i.grep(n, function(n) {
                return i.inArray(n, t) >= 0 !== r
            })
        }

        function hr(n, t) {
            do n = n[t]; while (n && 1 !== n.nodeType);
            return n
        }

        function ee(n) {
            var t = fi[n] = {};
            return i.each(n.match(h) || [], function(n, i) {
                t[i] = !0
            }), t
        }

        function cr() {
            u.addEventListener ? (u.removeEventListener("DOMContentLoaded", a, !1), n.removeEventListener("load", a, !1)) : (u.detachEvent("onreadystatechange", a), n.detachEvent("onload", a))
        }

        function a() {
            (u.addEventListener || "load" === event.type || "complete" === u.readyState) && (cr(), i.ready())
        }

        function yr(n, t, r) {
            if (void 0 === r && 1 === n.nodeType) {
                var u = "data-" + t.replace(vr, "-$1").toLowerCase();
                if (r = n.getAttribute(u), "string" == typeof r) {
                    try {
                        r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : ar.test(r) ? i.parseJSON(r) : r
                    } catch (f) {}
                    i.data(n, t, r)
                } else r = void 0
            }
            return r
        }

        function ei(n) {
            for (var t in n)
                if (("data" !== t || !i.isEmptyObject(n[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function pr(n, t, r, u) {
            if (i.acceptData(n)) {
                var s, e, h = i.expando,
                    l = n.nodeType,
                    o = l ? i.cache : n,
                    f = l ? n[h] : n[h] && h;
                if (f && o[f] && (u || o[f].data) || void 0 !== r || "string" != typeof t) return f || (f = l ? n[h] = c.pop() || i.guid++ : h), o[f] || (o[f] = l ? {} : {
                    toJSON: i.noop
                }), ("object" == typeof t || "function" == typeof t) && (u ? o[f] = i.extend(o[f], t) : o[f].data = i.extend(o[f].data, t)), e = o[f], u || (e.data || (e.data = {}), e = e.data), void 0 !== r && (e[i.camelCase(t)] = r), "string" == typeof t ? (s = e[t], null == s && (s = e[i.camelCase(t)])) : s = e, s
            }
        }

        function wr(n, t, u) {
            if (i.acceptData(n)) {
                var o, s, h = n.nodeType,
                    f = h ? i.cache : n,
                    e = h ? n[i.expando] : i.expando;
                if (f[e]) {
                    if (t && (o = u ? f[e] : f[e].data)) {
                        for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in o) ? t = [t] : (t = i.camelCase(t), t = (t in o) ? [t] : t.split(" ")), s = t.length; s--;) delete o[t[s]];
                        if (u ? !ei(o) : !i.isEmptyObject(o)) return
                    }(u || (delete f[e].data, ei(f[e]))) && (h ? i.cleanData([n], !0) : r.deleteExpando || f != f.window ? delete f[e] : f[e] = null)
                }
            }
        }

        function vt() {
            return !0
        }

        function it() {
            return !1
        }

        function dr() {
            try {
                return u.activeElement
            } catch (n) {}
        }

        function gr(n) {
            var i = nu.split("|"),
                t = n.createDocumentFragment();
            if (t.createElement)
                while (i.length) t.createElement(i.pop());
            return t
        }

        function f(n, t) {
            var e, u, s = 0,
                r = typeof n.getElementsByTagName !== o ? n.getElementsByTagName(t || "*") : typeof n.querySelectorAll !== o ? n.querySelectorAll(t || "*") : void 0;
            if (!r)
                for (r = [], e = n.childNodes || n; null != (u = e[s]); s++) !t || i.nodeName(u, t) ? r.push(u) : i.merge(r, f(u, t));
            return void 0 === t || t && i.nodeName(n, t) ? i.merge([n], r) : r
        }

        function we(n) {
            oi.test(n.type) && (n.defaultChecked = n.checked)
        }

        function eu(n, t) {
            return i.nodeName(n, "table") && i.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
        }

        function ou(n) {
            return n.type = (null !== i.find.attr(n, "type")) + "/" + n.type, n
        }

        function su(n) {
            var t = ve.exec(n.type);
            return t ? n.type = t[1] : n.removeAttribute("type"), n
        }

        function li(n, t) {
            for (var u, r = 0; null != (u = n[r]); r++) i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
        }

        function hu(n, t) {
            if (1 === t.nodeType && i.hasData(n)) {
                var u, f, o, s = i._data(n),
                    r = i._data(t, s),
                    e = s.events;
                if (e) {
                    delete r.handle;
                    r.events = {};
                    for (u in e)
                        for (f = 0, o = e[u].length; o > f; f++) i.event.add(t, u, e[u][f])
                }
                r.data && (r.data = i.extend({}, r.data))
            }
        }

        function be(n, t) {
            var u, e, f;
            if (1 === t.nodeType) {
                if (u = t.nodeName.toLowerCase(), !r.noCloneEvent && t[i.expando]) {
                    f = i._data(t);
                    for (e in f.events) i.removeEvent(t, e, f.handle);
                    t.removeAttribute(i.expando)
                }
                "script" === u && t.text !== n.text ? (ou(t).text = n.text, su(t)) : "object" === u ? (t.parentNode && (t.outerHTML = n.outerHTML), r.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : "input" === u && oi.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : "option" === u ? t.defaultSelected = t.selected = n.defaultSelected : ("input" === u || "textarea" === u) && (t.defaultValue = n.defaultValue)
            }
        }

        function cu(t, r) {
            var f, u = i(r.createElement(t)).appendTo(r.body),
                e = n.getDefaultComputedStyle && (f = n.getDefaultComputedStyle(u[0])) ? f.display : i.css(u[0], "display");
            return u.detach(), e
        }

        function yt(n) {
            var r = u,
                t = ai[n];
            return t || (t = cu(n, r), "none" !== t && t || (ot = (ot || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = (ot[0].contentWindow || ot[0].contentDocument).document, r.write(), r.close(), t = cu(n, r), ot.detach()), ai[n] = t), t
        }

        function au(n, t) {
            return {
                get: function() {
                    var i = n();
                    if (null != i) return i ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function pu(n, t) {
            if (t in n) return t;
            for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = yu.length; i--;)
                if (t = yu[i] + r, t in n) return t;
            return u
        }

        function wu(n, t) {
            for (var f, r, o, e = [], u = 0, s = n.length; s > u; u++) r = n[u], r.style && (e[u] = i._data(r, "olddisplay"), f = r.style.display, t ? (e[u] || "none" !== f || (r.style.display = ""), "" === r.style.display && et(r) && (e[u] = i._data(r, "olddisplay", yt(r.nodeName)))) : (o = et(r), (f && "none" !== f || !o) && i._data(r, "olddisplay", o ? f : i.css(r, "display"))));
            for (u = 0; s > u; u++) r = n[u], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? e[u] || "" : "none"));
            return n
        }

        function bu(n, t, i) {
            var r = no.exec(t);
            return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
        }

        function ku(n, t, r, u, f) {
            for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2) "margin" === r && (o += i.css(n, r + w[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + w[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + w[e] + "Width", !0, f))) : (o += i.css(n, "padding" + w[e], !0, f), "padding" !== r && (o += i.css(n, "border" + w[e] + "Width", !0, f)));
            return o
        }

        function du(n, t, u) {
            var o = !0,
                f = "width" === t ? n.offsetWidth : n.offsetHeight,
                e = k(n),
                s = r.boxSizing && "border-box" === i.css(n, "boxSizing", !1, e);
            if (0 >= f || null == f) {
                if (f = d(n, t, e), (0 > f || null == f) && (f = n.style[t]), pt.test(f)) return f;
                o = s && (r.boxSizingReliable() || f === n.style[t]);
                f = parseFloat(f) || 0
            }
            return f + ku(n, t, u || (s ? "border" : "content"), o, e) + "px"
        }

        function e(n, t, i, r, u) {
            return new e.prototype.init(n, t, i, r, u)
        }

        function nf() {
            return setTimeout(function() {
                rt = void 0
            }), rt = i.now()
        }

        function kt(n, t) {
            var r, i = {
                    height: n
                },
                u = 0;
            for (t = t ? 1 : 0; 4 > u; u += 2 - t) r = w[u], i["margin" + r] = i["padding" + r] = n;
            return t && (i.opacity = i.width = n), i
        }

        function tf(n, t, i) {
            for (var u, f = (st[t] || []).concat(st["*"]), r = 0, e = f.length; e > r; r++)
                if (u = f[r].call(i, t, n)) return u
        }

        function fo(n, t, u) {
            var f, a, p, v, s, w, h, b, l = this,
                y = {},
                o = n.style,
                c = n.nodeType && et(n),
                e = i._data(n, "fxshow");
            u.queue || (s = i._queueHooks(n, "fx"), null == s.unqueued && (s.unqueued = 0, w = s.empty.fire, s.empty.fire = function() {
                s.unqueued || w()
            }), s.unqueued++, l.always(function() {
                l.always(function() {
                    s.unqueued--;
                    i.queue(n, "fx").length || s.empty.fire()
                })
            }));
            1 === n.nodeType && ("height" in t || "width" in t) && (u.overflow = [o.overflow, o.overflowX, o.overflowY], h = i.css(n, "display"), b = "none" === h ? i._data(n, "olddisplay") || yt(n.nodeName) : h, "inline" === b && "none" === i.css(n, "float") && (r.inlineBlockNeedsLayout && "inline" !== yt(n.nodeName) ? o.zoom = 1 : o.display = "inline-block"));
            u.overflow && (o.overflow = "hidden", r.shrinkWrapBlocks() || l.always(function() {
                o.overflow = u.overflow[0];
                o.overflowX = u.overflow[1];
                o.overflowY = u.overflow[2]
            }));
            for (f in t)
                if (a = t[f], ro.exec(a)) {
                    if (delete t[f], p = p || "toggle" === a, a === (c ? "hide" : "show")) {
                        if ("show" !== a || !e || void 0 === e[f]) continue;
                        c = !0
                    }
                    y[f] = e && e[f] || i.style(n, f)
                } else h = void 0;
            if (i.isEmptyObject(y)) "inline" === ("none" === h ? yt(n.nodeName) : h) && (o.display = h);
            else {
                e ? "hidden" in e && (c = e.hidden) : e = i._data(n, "fxshow", {});
                p && (e.hidden = !c);
                c ? i(n).show() : l.done(function() {
                    i(n).hide()
                });
                l.done(function() {
                    var t;
                    i._removeData(n, "fxshow");
                    for (t in y) i.style(n, t, y[t])
                });
                for (f in y) v = tf(c ? e[f] : 0, f, l), f in e || (e[f] = v.start, c && (v.end = v.start, v.start = "width" === f || "height" === f ? 1 : 0))
            }
        }

        function eo(n, t) {
            var r, f, e, u, o;
            for (r in n)
                if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                    u = o.expand(u);
                    delete n[f];
                    for (r in u) r in n || (n[r] = u[r], t[r] = e)
                } else t[f] = e
        }

        function rf(n, t, r) {
            var h, e, o = 0,
                l = bt.length,
                f = i.Deferred().always(function() {
                    delete c.elem
                }),
                c = function() {
                    if (e) return !1;
                    for (var s = rt || nf(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, o = u.tweens.length; o > r; r++) u.tweens[r].run(i);
                    return f.notifyWith(n, [u, i, t]), 1 > i && o ? t : (f.resolveWith(n, [u]), !1)
                },
                u = f.promise({
                    elem: n,
                    props: i.extend({}, t),
                    opts: i.extend(!0, {
                        specialEasing: {}
                    }, r),
                    originalProperties: t,
                    originalOptions: r,
                    startTime: rt || nf(),
                    duration: r.duration,
                    tweens: [],
                    createTween: function(t, r) {
                        var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(f), f
                    },
                    stop: function(t) {
                        var i = 0,
                            r = t ? u.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; r > i; i++) u.tweens[i].run(1);
                        return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
                    }
                }),
                s = u.props;
            for (eo(s, u.opts.specialEasing); l > o; o++)
                if (h = bt[o].call(u, n, s, u.opts)) return h;
            return i.map(s, tf, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
                elem: n,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function af(n) {
            return function(t, r) {
                "string" != typeof t && (r = t, t = "*");
                var u, f = 0,
                    e = t.toLowerCase().match(h) || [];
                if (i.isFunction(r))
                    while (u = e[f++]) "+" === u.charAt(0) ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
            }
        }

        function vf(n, t, r, u) {
            function e(s) {
                var h;
                return f[s] = !0, i.each(n[s] || [], function(n, i) {
                    var s = i(t, r, u);
                    return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
                }), h
            }
            var f = {},
                o = n === bi;
            return e(t.dataTypes[0]) || !f["*"] && e("*")
        }

        function ki(n, t) {
            var u, r, f = i.ajaxSettings.flatOptions || {};
            for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
            return u && i.extend(!0, n, u), n
        }

        function ao(n, t, i) {
            for (var o, e, u, f, s = n.contents, r = n.dataTypes;
                "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
            if (e)
                for (f in s)
                    if (s[f] && s[f].test(e)) {
                        r.unshift(f);
                        break
                    }
            if (r[0] in i) u = r[0];
            else {
                for (f in i) {
                    if (!r[0] || n.converters[f + " " + r[0]]) {
                        u = f;
                        break
                    }
                    o || (o = f)
                }
                u = u || o
            }
            if (u) return (u !== r[0] && r.unshift(u), i[u])
        }

        function vo(n, t, i, r) {
            var h, u, f, s, e, o = {},
                c = n.dataTypes.slice();
            if (c[1])
                for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
            for (u = c.shift(); u;)
                if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                    if ("*" === u) u = e;
                    else if ("*" !== e && e !== u) {
                if (f = o[e + " " + u] || o["* " + u], !f)
                    for (h in o)
                        if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                            f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                            break
                        }
                if (f !== !0)
                    if (f && n.throws) t = f(t);
                    else try {
                        t = f(t)
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: f ? l : "No conversion from " + e + " to " + u
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function di(n, t, r, u) {
            var f;
            if (i.isArray(t)) i.each(t, function(t, i) {
                r || po.test(n) ? u(n, i) : di(n + "[" + ("object" == typeof i ? t : "") + "]", i, r, u)
            });
            else if (r || "object" !== i.type(t)) u(n, t);
            else
                for (f in t) di(n + "[" + f + "]", t[f], r, u)
        }

        function pf() {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        }

        function go() {
            try {
                return new n.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function wf(n) {
            return i.isWindow(n) ? n : 9 === n.nodeType ? n.defaultView || n.parentWindow : !1
        }
        var c = [],
            l = c.slice,
            ir = c.concat,
            ii = c.push,
            rr = c.indexOf,
            ct = {},
            df = ct.toString,
            tt = ct.hasOwnProperty,
            r = {},
            ur = "1.11.2",
            i = function(n, t) {
                return new i.fn.init(n, t)
            },
            gf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ne = /^-ms-/,
            te = /-([\da-z])/gi,
            ie = function(n, t) {
                return t.toUpperCase()
            },
            p, or, sr, h, fi, lt, o, lr, ar, vr, ot, ai, uf, ef, of , gt, gi, ti, nr, tr, bf, kf;
        i.fn = i.prototype = {
            jquery: ur,
            constructor: i,
            selector: "",
            length: 0,
            toArray: function() {
                return l.call(this)
            },
            get: function(n) {
                return null != n ? 0 > n ? this[n + this.length] : this[n] : l.call(this)
            },
            pushStack: function(n) {
                var t = i.merge(this.constructor(), n);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(n, t) {
                return i.each(this, n, t)
            },
            map: function(n) {
                return this.pushStack(i.map(this, function(t, i) {
                    return n.call(t, i, t)
                }))
            },
            slice: function() {
                return this.pushStack(l.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(n) {
                var i = this.length,
                    t = +n + (0 > n ? i : 0);
                return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: ii,
            sort: c.sort,
            splice: c.splice
        };
        i.extend = i.fn.extend = function() {
            var r, e, t, f, o, s, n = arguments[0] || {},
                u = 1,
                c = arguments.length,
                h = !1;
            for ("boolean" == typeof n && (h = n, n = arguments[u] || {}, u++), "object" == typeof n || i.isFunction(n) || (n = {}), u === c && (n = this, u--); c > u; u++)
                if (null != (o = arguments[u]))
                    for (f in o) r = n[f], t = o[f], n !== t && (h && t && (i.isPlainObject(t) || (e = i.isArray(t))) ? (e ? (e = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : void 0 !== t && (n[f] = t));
            return n
        };
        i.extend({
            expando: "jQuery" + (ur + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(n) {
                throw new Error(n);
            },
            noop: function() {},
            isFunction: function(n) {
                return "function" === i.type(n)
            },
            isArray: Array.isArray || function(n) {
                return "array" === i.type(n)
            },
            isWindow: function(n) {
                return null != n && n == n.window
            },
            isNumeric: function(n) {
                return !i.isArray(n) && n - parseFloat(n) + 1 >= 0
            },
            isEmptyObject: function(n) {
                for (var t in n) return !1;
                return !0
            },
            isPlainObject: function(n) {
                var t;
                if (!n || "object" !== i.type(n) || n.nodeType || i.isWindow(n)) return !1;
                try {
                    if (n.constructor && !tt.call(n, "constructor") && !tt.call(n.constructor.prototype, "isPrototypeOf")) return !1
                } catch (u) {
                    return !1
                }
                if (r.ownLast)
                    for (t in n) return tt.call(n, t);
                for (t in n);
                return void 0 === t || tt.call(n, t)
            },
            type: function(n) {
                return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ct[df.call(n)] || "object" : typeof n
            },
            globalEval: function(t) {
                t && i.trim(t) && (n.execScript || function(t) {
                    n.eval.call(n, t)
                })(t)
            },
            camelCase: function(n) {
                return n.replace(ne, "ms-").replace(te, ie)
            },
            nodeName: function(n, t) {
                return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(n, t, i) {
                var u, r = 0,
                    f = n.length,
                    e = ri(n);
                if (i) {
                    if (e) {
                        for (; f > r; r++)
                            if (u = t.apply(n[r], i), u === !1) break
                    } else
                        for (r in n)
                            if (u = t.apply(n[r], i), u === !1) break
                } else if (e) {
                    for (; f > r; r++)
                        if (u = t.call(n[r], r, n[r]), u === !1) break
                } else
                    for (r in n)
                        if (u = t.call(n[r], r, n[r]), u === !1) break;
                return n
            },
            trim: function(n) {
                return null == n ? "" : (n + "").replace(gf, "")
            },
            makeArray: function(n, t) {
                var r = t || [];
                return null != n && (ri(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ii.call(r, n)), r
            },
            inArray: function(n, t, i) {
                var r;
                if (t) {
                    if (rr) return rr.call(t, n, i);
                    for (r = t.length, i = i ? 0 > i ? Math.max(0, r + i) : i : 0; r > i; i++)
                        if (i in t && t[i] === n) return i
                }
                return -1
            },
            merge: function(n, t) {
                for (var r = +t.length, i = 0, u = n.length; r > i;) n[u++] = t[i++];
                if (r !== r)
                    while (void 0 !== t[i]) n[u++] = t[i++];
                return n.length = u, n
            },
            grep: function(n, t, i) {
                for (var u, f = [], r = 0, e = n.length, o = !i; e > r; r++) u = !t(n[r], r), u !== o && f.push(n[r]);
                return f
            },
            map: function(n, t, i) {
                var u, r = 0,
                    e = n.length,
                    o = ri(n),
                    f = [];
                if (o)
                    for (; e > r; r++) u = t(n[r], r, i), null != u && f.push(u);
                else
                    for (r in n) u = t(n[r], r, i), null != u && f.push(u);
                return ir.apply([], f)
            },
            guid: 1,
            proxy: function(n, t) {
                var u, r, f;
                return "string" == typeof t && (f = n[t], t = n, n = f), i.isFunction(n) ? (u = l.call(arguments, 2), r = function() {
                    return n.apply(t || this, u.concat(l.call(arguments)))
                }, r.guid = n.guid = n.guid || i.guid++, r) : void 0
            },
            now: function() {
                return +new Date
            },
            support: r
        });
        i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
            ct["[object " + t + "]"] = t.toLowerCase()
        });
        p = function(n) {
            function r(n, t, i, r) {
                var p, s, a, c, w, y, d, v, nt, g;
                if ((t ? t.ownerDocument || t : h) !== o && k(t), t = t || o, i = i || [], c = t.nodeType, "string" != typeof n || !n || 1 !== c && 9 !== c && 11 !== c) return i;
                if (!r && l) {
                    if (11 !== c && (p = hr.exec(n)))
                        if (a = p[1]) {
                            if (9 === c) {
                                if (s = t.getElementById(a), !s || !s.parentNode) return i;
                                if (s.id === a) return i.push(s), i
                            } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && et(t, s) && s.id === a) return i.push(s), i
                        } else {
                            if (p[2]) return b.apply(i, t.getElementsByTagName(n)), i;
                            if ((a = p[3]) && u.getElementsByClassName) return b.apply(i, t.getElementsByClassName(a)), i
                        }
                    if (u.qsa && (!e || !e.test(n))) {
                        if (v = d = f, nt = t, g = 1 !== c && n, 1 === c && "object" !== t.nodeName.toLowerCase()) {
                            for (y = ft(n), (d = t.getAttribute("id")) ? v = d.replace(cr, "\\$&") : t.setAttribute("id", v), v = "[id='" + v + "'] ", w = y.length; w--;) y[w] = v + vt(y[w]);
                            nt = dt.test(n) && ti(t.parentNode) || t;
                            g = y.join(",")
                        }
                        if (g) try {
                            return b.apply(i, nt.querySelectorAll(g)), i
                        } catch (tt) {} finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
                return oi(n.replace(lt, "$1"), t, i, r)
            }

            function gt() {
                function n(r, u) {
                    return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
                }
                var i = [];
                return n
            }

            function c(n) {
                return n[f] = !0, n
            }

            function v(n) {
                var t = o.createElement("div");
                try {
                    return !!n(t)
                } catch (i) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t);
                    t = null
                }
            }

            function ni(n, i) {
                for (var u = n.split("|"), r = n.length; r--;) t.attrHandle[u[r]] = i
            }

            function wi(n, t) {
                var i = t && n,
                    r = i && 1 === n.nodeType && 1 === t.nodeType && (~t.sourceIndex || li) - (~n.sourceIndex || li);
                if (r) return r;
                if (i)
                    while (i = i.nextSibling)
                        if (i === t) return -1;
                return n ? 1 : -1
            }

            function lr(n) {
                return function(t) {
                    var i = t.nodeName.toLowerCase();
                    return "input" === i && t.type === n
                }
            }

            function ar(n) {
                return function(t) {
                    var i = t.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && t.type === n
                }
            }

            function tt(n) {
                return c(function(t) {
                    return t = +t, c(function(i, r) {
                        for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                    })
                })
            }

            function ti(n) {
                return n && "undefined" != typeof n.getElementsByTagName && n
            }

            function bi() {}

            function vt(n) {
                for (var t = 0, r = n.length, i = ""; r > t; t++) i += n[t].value;
                return i
            }

            function ii(n, t, i) {
                var r = t.dir,
                    u = i && "parentNode" === r,
                    e = ki++;
                return t.first ? function(t, i, f) {
                    while (t = t[r])
                        if (1 === t.nodeType || u) return n(t, i, f)
                } : function(t, i, o) {
                    var s, h, c = [a, e];
                    if (o) {
                        while (t = t[r])
                            if ((1 === t.nodeType || u) && n(t, i, o)) return !0
                    } else
                        while (t = t[r])
                            if (1 === t.nodeType || u) {
                                if (h = t[f] || (t[f] = {}), (s = h[r]) && s[0] === a && s[1] === e) return c[2] = s[2];
                                if (h[r] = c, c[2] = n(t, i, o)) return !0
                            }
                }
            }

            function ri(n) {
                return n.length > 1 ? function(t, i, r) {
                    for (var u = n.length; u--;)
                        if (!n[u](t, i, r)) return !1;
                    return !0
                } : n[0]
            }

            function vr(n, t, i) {
                for (var u = 0, f = t.length; f > u; u++) r(n, t[u], i);
                return i
            }

            function yt(n, t, i, r, u) {
                for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
                return o
            }

            function ui(n, t, i, r, u, e) {
                return r && !r[f] && (r = ui(r)), u && !u[f] && (u = ui(u, e)), c(function(f, e, o, s) {
                    var l, c, a, p = [],
                        y = [],
                        w = e.length,
                        k = f || vr(t || "*", o.nodeType ? [o] : o, []),
                        v = !n || !f && t ? k : yt(k, p, n, o, s),
                        h = i ? u || (f ? n : w || r) ? [] : e : v;
                    if (i && i(v, h, o, s), r)
                        for (l = yt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                    if (f) {
                        if (u || n) {
                            if (u) {
                                for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                                u(null, h = [], l, s)
                            }
                            for (c = h.length; c--;)(a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                        }
                    } else h = yt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : b.apply(e, h)
                })
            }

            function fi(n) {
                for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ii(function(n) {
                        return n === o
                    }, c, !0), a = ii(function(n) {
                        return nt(o, n) > -1
                    }, c, !0), e = [function(n, t, i) {
                        var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                        return o = null, r
                    }]; s > i; i++)
                    if (u = t.relative[n[i].type]) e = [ii(ri(e), u)];
                    else {
                        if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) {
                            for (r = ++i; s > r; r++)
                                if (t.relative[n[r].type]) break;
                            return ui(i > 1 && ri(e), i > 1 && vt(n.slice(0, i - 1).concat({
                                value: " " === n[i - 2].type ? "*" : ""
                            })).replace(lt, "$1"), u, r > i && fi(n.slice(i, r)), s > r && fi(n = n.slice(r)), s > r && vt(n))
                        }
                        e.push(u)
                    }
                return ri(e)
            }

            function yr(n, i) {
                var u = i.length > 0,
                    f = n.length > 0,
                    e = function(e, s, h, c, l) {
                        var y, d, w, k = 0,
                            v = "0",
                            g = e && [],
                            p = [],
                            nt = ht,
                            tt = e || f && t.find.TAG("*", l),
                            it = a += null == nt ? 1 : Math.random() || .1,
                            rt = tt.length;
                        for (l && (ht = s !== o && s); v !== rt && null != (y = tt[v]); v++) {
                            if (f && y) {
                                for (d = 0; w = n[d++];)
                                    if (w(y, s, h)) {
                                        c.push(y);
                                        break
                                    }
                                l && (a = it)
                            }
                            u && ((y = !w && y) && k--, e && g.push(y))
                        }
                        if (k += v, u && v !== k) {
                            for (d = 0; w = i[d++];) w(g, p, s, h);
                            if (e) {
                                if (k > 0)
                                    while (v--) g[v] || p[v] || (p[v] = gi.call(c));
                                p = yt(p)
                            }
                            b.apply(c, p);
                            l && !e && p.length > 0 && k + i.length > 1 && r.uniqueSort(c)
                        }
                        return l && (a = it, ht = nt), g
                    };
                return u ? c(e) : e
            }
            var it, u, t, st, ei, ft, pt, oi, ht, w, rt, k, o, s, l, e, d, ct, et, f = "sizzle" + 1 * new Date,
                h = n.document,
                a = 0,
                ki = 0,
                si = gt(),
                hi = gt(),
                ci = gt(),
                wt = function(n, t) {
                    return n === t && (rt = !0), 0
                },
                li = -2147483648,
                di = {}.hasOwnProperty,
                g = [],
                gi = g.pop,
                nr = g.push,
                b = g.push,
                ai = g.slice,
                nt = function(n, t) {
                    for (var i = 0, r = n.length; r > i; i++)
                        if (n[i] === t) return i;
                    return -1
                },
                bt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                i = "[\\x20\\t\\r\\n\\f]",
                ut = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                vi = ut.replace("w", "w#"),
                yi = "\\[" + i + "*(" + ut + ")(?:" + i + "*([*^$|!~]?=)" + i + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + vi + "))|)" + i + "*\\]",
                kt = ":(" + ut + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + yi + ")*)|.*)\\)|)",
                tr = new RegExp(i + "+", "g"),
                lt = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"),
                ir = new RegExp("^" + i + "*," + i + "*"),
                rr = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"),
                ur = new RegExp("=" + i + "*([^\\]'\"]*?)" + i + "*\\]", "g"),
                fr = new RegExp(kt),
                er = new RegExp("^" + vi + "$"),
                at = {
                    ID: new RegExp("^#(" + ut + ")"),
                    CLASS: new RegExp("^\\.(" + ut + ")"),
                    TAG: new RegExp("^(" + ut.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + yi),
                    PSEUDO: new RegExp("^" + kt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + bt + ")$", "i"),
                    needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)", "i")
                },
                or = /^(?:input|select|textarea|button)$/i,
                sr = /^h\d$/i,
                ot = /^[^{]+\{\s*\[native \w/,
                hr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                dt = /[+~]/,
                cr = /'|\\/g,
                y = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i + ")|.)", "ig"),
                p = function(n, t, i) {
                    var r = "0x" + t - 65536;
                    return r !== r || i ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                pi = function() {
                    k()
                };
            try {
                b.apply(g = ai.call(h.childNodes), h.childNodes);
                g[h.childNodes.length].nodeType
            } catch (pr) {
                b = {
                    apply: g.length ? function(n, t) {
                        nr.apply(n, ai.call(t))
                    } : function(n, t) {
                        for (var i = n.length, r = 0; n[i++] = t[r++];);
                        n.length = i - 1
                    }
                }
            }
            u = r.support = {};
            ei = r.isXML = function(n) {
                var t = n && (n.ownerDocument || n).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            };
            k = r.setDocument = function(n) {
                var a, c, r = n ? n.ownerDocument || n : h;
                return r !== o && 9 === r.nodeType && r.documentElement ? (o = r, s = r.documentElement, c = r.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", pi, !1) : c.attachEvent && c.attachEvent("onunload", pi)), l = !ei(r), u.attributes = v(function(n) {
                    return n.className = "i", !n.getAttribute("className")
                }), u.getElementsByTagName = v(function(n) {
                    return n.appendChild(r.createComment("")), !n.getElementsByTagName("*").length
                }), u.getElementsByClassName = ot.test(r.getElementsByClassName), u.getById = v(function(n) {
                    return s.appendChild(n).id = f, !r.getElementsByName || !r.getElementsByName(f).length
                }), u.getById ? (t.find.ID = function(n, t) {
                    if ("undefined" != typeof t.getElementById && l) {
                        var i = t.getElementById(n);
                        return i && i.parentNode ? [i] : []
                    }
                }, t.filter.ID = function(n) {
                    var t = n.replace(y, p);
                    return function(n) {
                        return n.getAttribute("id") === t
                    }
                }) : (delete t.find.ID, t.filter.ID = function(n) {
                    var t = n.replace(y, p);
                    return function(n) {
                        var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                        return i && i.value === t
                    }
                }), t.find.TAG = u.getElementsByTagName ? function(n, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : u.qsa ? t.querySelectorAll(n) : void 0
                } : function(n, t) {
                    var i, r = [],
                        f = 0,
                        u = t.getElementsByTagName(n);
                    if ("*" === n) {
                        while (i = u[f++]) 1 === i.nodeType && r.push(i);
                        return r
                    }
                    return u
                }, t.find.CLASS = u.getElementsByClassName && function(n, t) {
                    if (l) return t.getElementsByClassName(n)
                }, d = [], e = [], (u.qsa = ot.test(r.querySelectorAll)) && (v(function(n) {
                    s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\f]' msallowcapture=''><option selected=''><\/option><\/select>";
                    n.querySelectorAll("[msallowcapture^='']").length && e.push("[*^$]=" + i + "*(?:''|\"\")");
                    n.querySelectorAll("[selected]").length || e.push("\\[" + i + "*(?:value|" + bt + ")");
                    n.querySelectorAll("[id~=" + f + "-]").length || e.push("~=");
                    n.querySelectorAll(":checked").length || e.push(":checked");
                    n.querySelectorAll("a#" + f + "+*").length || e.push(".#.+[+~]")
                }), v(function(n) {
                    var t = r.createElement("input");
                    t.setAttribute("type", "hidden");
                    n.appendChild(t).setAttribute("name", "D");
                    n.querySelectorAll("[name=d]").length && e.push("name" + i + "*[*^$|!~]?=");
                    n.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled");
                    n.querySelectorAll("*,:x");
                    e.push(",.*:")
                })), (u.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && v(function(n) {
                    u.disconnectedMatch = ct.call(n, "div");
                    ct.call(n, "[s!='']:x");
                    d.push("!=", kt)
                }), e = e.length && new RegExp(e.join("|")), d = d.length && new RegExp(d.join("|")), a = ot.test(s.compareDocumentPosition), et = a || ot.test(s.contains) ? function(n, t) {
                    var r = 9 === n.nodeType ? n.documentElement : n,
                        i = t && t.parentNode;
                    return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
                } : function(n, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === n) return !0;
                    return !1
                }, wt = a ? function(n, t) {
                    if (n === t) return rt = !0, 0;
                    var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
                    return i ? i : (i = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, 1 & i || !u.sortDetached && t.compareDocumentPosition(n) === i ? n === r || n.ownerDocument === h && et(h, n) ? -1 : t === r || t.ownerDocument === h && et(h, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & i ? -1 : 1)
                } : function(n, t) {
                    if (n === t) return rt = !0, 0;
                    var i, u = 0,
                        o = n.parentNode,
                        s = t.parentNode,
                        f = [n],
                        e = [t];
                    if (!o || !s) return n === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                    if (o === s) return wi(n, t);
                    for (i = n; i = i.parentNode;) f.unshift(i);
                    for (i = t; i = i.parentNode;) e.unshift(i);
                    while (f[u] === e[u]) u++;
                    return u ? wi(f[u], e[u]) : f[u] === h ? -1 : e[u] === h ? 1 : 0
                }, r) : o
            };
            r.matches = function(n, t) {
                return r(n, null, null, t)
            };
            r.matchesSelector = function(n, t) {
                if ((n.ownerDocument || n) !== o && k(n), t = t.replace(ur, "='$1']"), !(!u.matchesSelector || !l || d && d.test(t) || e && e.test(t))) try {
                    var i = ct.call(n, t);
                    if (i || u.disconnectedMatch || n.document && 11 !== n.document.nodeType) return i
                } catch (f) {}
                return r(t, o, null, [n]).length > 0
            };
            r.contains = function(n, t) {
                return (n.ownerDocument || n) !== o && k(n), et(n, t)
            };
            r.attr = function(n, i) {
                (n.ownerDocument || n) !== o && k(n);
                var f = t.attrHandle[i.toLowerCase()],
                    r = f && di.call(t.attrHandle, i.toLowerCase()) ? f(n, i, !l) : void 0;
                return void 0 !== r ? r : u.attributes || !l ? n.getAttribute(i) : (r = n.getAttributeNode(i)) && r.specified ? r.value : null
            };
            r.error = function(n) {
                throw new Error("Syntax error, unrecognized expression: " + n);
            };
            r.uniqueSort = function(n) {
                var r, f = [],
                    t = 0,
                    i = 0;
                if (rt = !u.detectDuplicates, w = !u.sortStable && n.slice(0), n.sort(wt), rt) {
                    while (r = n[i++]) r === n[i] && (t = f.push(i));
                    while (t--) n.splice(f[t], 1)
                }
                return w = null, n
            };
            st = r.getText = function(n) {
                var r, i = "",
                    u = 0,
                    t = n.nodeType;
                if (t) {
                    if (1 === t || 9 === t || 11 === t) {
                        if ("string" == typeof n.textContent) return n.textContent;
                        for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                    } else if (3 === t || 4 === t) return n.nodeValue
                } else
                    while (r = n[u++]) i += st(r);
                return i
            };
            t = r.selectors = {
                cacheLength: 50,
                createPseudo: c,
                match: at,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(n) {
                        return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                    },
                    CHILD: function(n) {
                        return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || r.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && r.error(n[0]), n
                    },
                    PSEUDO: function(n) {
                        var i, t = !n[6] && n[2];
                        return at.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && fr.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(n) {
                        var t = n.replace(y, p).toLowerCase();
                        return "*" === n ? function() {
                            return !0
                        } : function(n) {
                            return n.nodeName && n.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(n) {
                        var t = si[n + " "];
                        return t || (t = new RegExp("(^|" + i + ")" + n + "(" + i + "|$)")) && si(n, function(n) {
                            return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, t, i) {
                        return function(u) {
                            var f = r.attr(u, n);
                            return null == f ? "!=" === t : t ? (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f.replace(tr, " ") + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(n, t, i, r, u) {
                        var s = "nth" !== n.slice(0, 3),
                            o = "last" !== n.slice(-4),
                            e = "of-type" === t;
                        return 1 === r && 0 === u ? function(n) {
                            return !!n.parentNode
                        } : function(t, i, h) {
                            var v, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling",
                                p = t.parentNode,
                                g = e && t.nodeName.toLowerCase(),
                                d = !h && !e;
                            if (p) {
                                if (s) {
                                    while (b) {
                                        for (c = t; c = c[b];)
                                            if (e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                        w = b = "only" === n && !w && "nextSibling"
                                    }
                                    return !0
                                }
                                if (w = [o ? p.firstChild : p.lastChild], o && d) {
                                    for (k = p[f] || (p[f] = {}), v = k[n] || [], y = v[0] === a && v[1], l = v[0] === a && v[2], c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop();)
                                        if (1 === c.nodeType && ++l && c === t) {
                                            k[n] = [a, y, l];
                                            break
                                        }
                                } else if (d && (v = (t[f] || (t[f] = {}))[n]) && v[0] === a) l = v[1];
                                else
                                    while (c = ++y && c && c[b] || (l = y = 0) || w.pop())
                                        if ((e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [a, l]), c === t)) break;
                                return l -= u, l === r || l % r == 0 && l / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(n, i) {
                        var e, u = t.pseudos[n] || t.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
                        return u[f] ? u(i) : u.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? c(function(n, t) {
                            for (var r, f = u(n, i), e = f.length; e--;) r = nt(n, f[e]), n[r] = !(t[r] = f[e])
                        }) : function(n) {
                            return u(n, 0, e)
                        }) : u
                    }
                },
                pseudos: {
                    not: c(function(n) {
                        var t = [],
                            r = [],
                            i = pt(n.replace(lt, "$1"));
                        return i[f] ? c(function(n, t, r, u) {
                            for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
                        }) : function(n, u, f) {
                            return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
                        }
                    }),
                    has: c(function(n) {
                        return function(t) {
                            return r(n, t).length > 0
                        }
                    }),
                    contains: c(function(n) {
                        return n = n.replace(y, p),
                            function(t) {
                                return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                            }
                    }),
                    lang: c(function(n) {
                        return er.test(n || "") || r.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                            function(t) {
                                var i;
                                do
                                    if (i = l ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var i = n.location && n.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(n) {
                        return n === s
                    },
                    focus: function(n) {
                        return n === o.activeElement && (!o.hasFocus || o.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                    },
                    enabled: function(n) {
                        return n.disabled === !1
                    },
                    disabled: function(n) {
                        return n.disabled === !0
                    },
                    checked: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && !!n.checked || "option" === t && !!n.selected
                    },
                    selected: function(n) {
                        return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                    },
                    empty: function(n) {
                        for (n = n.firstChild; n; n = n.nextSibling)
                            if (n.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(n) {
                        return !t.pseudos.empty(n)
                    },
                    header: function(n) {
                        return sr.test(n.nodeName)
                    },
                    input: function(n) {
                        return or.test(n.nodeName)
                    },
                    button: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && "button" === n.type || "button" === t
                    },
                    text: function(n) {
                        var t;
                        return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: tt(function() {
                        return [0]
                    }),
                    last: tt(function(n, t) {
                        return [t - 1]
                    }),
                    eq: tt(function(n, t, i) {
                        return [0 > i ? i + t : i]
                    }),
                    even: tt(function(n, t) {
                        for (var i = 0; t > i; i += 2) n.push(i);
                        return n
                    }),
                    odd: tt(function(n, t) {
                        for (var i = 1; t > i; i += 2) n.push(i);
                        return n
                    }),
                    lt: tt(function(n, t, i) {
                        for (var r = 0 > i ? i + t : i; --r >= 0;) n.push(r);
                        return n
                    }),
                    gt: tt(function(n, t, i) {
                        for (var r = 0 > i ? i + t : i; ++r < t;) n.push(r);
                        return n
                    })
                }
            };
            t.pseudos.nth = t.pseudos.eq;
            for (it in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) t.pseudos[it] = lr(it);
            for (it in {
                    submit: !0,
                    reset: !0
                }) t.pseudos[it] = ar(it);
            return bi.prototype = t.filters = t.pseudos, t.setFilters = new bi, ft = r.tokenize = function(n, i) {
                var e, f, s, o, u, h, c, l = hi[n + " "];
                if (l) return i ? 0 : l.slice(0);
                for (u = n, h = [], c = t.preFilter; u;) {
                    (!e || (f = ir.exec(u))) && (f && (u = u.slice(f[0].length) || u), h.push(s = []));
                    e = !1;
                    (f = rr.exec(u)) && (e = f.shift(), s.push({
                        value: e,
                        type: f[0].replace(lt, " ")
                    }), u = u.slice(e.length));
                    for (o in t.filter)(f = at[o].exec(u)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                        value: e,
                        type: o,
                        matches: f
                    }), u = u.slice(e.length));
                    if (!e) break
                }
                return i ? u.length : u ? r.error(n) : hi(n, h).slice(0)
            }, pt = r.compile = function(n, t) {
                var r, u = [],
                    e = [],
                    i = ci[n + " "];
                if (!i) {
                    for (t || (t = ft(n)), r = t.length; r--;) i = fi(t[r]), i[f] ? u.push(i) : e.push(i);
                    i = ci(n, yr(e, u));
                    i.selector = n
                }
                return i
            }, oi = r.select = function(n, i, r, f) {
                var s, e, o, a, v, c = "function" == typeof n && n,
                    h = !f && ft(n = c.selector || n);
                if (r = r || [], 1 === h.length) {
                    if (e = h[0] = h[0].slice(0), e.length > 2 && "ID" === (o = e[0]).type && u.getById && 9 === i.nodeType && l && t.relative[e[1].type]) {
                        if (i = (t.find.ID(o.matches[0].replace(y, p), i) || [])[0], !i) return r;
                        c && (i = i.parentNode);
                        n = n.slice(e.shift().value.length)
                    }
                    for (s = at.needsContext.test(n) ? 0 : e.length; s--;) {
                        if (o = e[s], t.relative[a = o.type]) break;
                        if ((v = t.find[a]) && (f = v(o.matches[0].replace(y, p), dt.test(e[0].type) && ti(i.parentNode) || i))) {
                            if (e.splice(s, 1), n = f.length && vt(e), !n) return b.apply(r, f), r;
                            break
                        }
                    }
                }
                return (c || pt(n, h))(f, i, !l, r, dt.test(n) && ti(i.parentNode) || i), r
            }, u.sortStable = f.split("").sort(wt).join("") === f, u.detectDuplicates = !!rt, k(), u.sortDetached = v(function(n) {
                return 1 & n.compareDocumentPosition(o.createElement("div"))
            }), v(function(n) {
                return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href")
            }) || ni("type|href|height|width", function(n, t, i) {
                if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), u.attributes && v(function(n) {
                return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value")
            }) || ni("value", function(n, t, i) {
                if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue
            }), v(function(n) {
                return null == n.getAttribute("disabled")
            }) || ni(bt, function(n, t, i) {
                var r;
                if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
            }), r
        }(n);
        i.find = p;
        i.expr = p.selectors;
        i.expr[":"] = i.expr.pseudos;
        i.unique = p.uniqueSort;
        i.text = p.getText;
        i.isXMLDoc = p.isXML;
        i.contains = p.contains;
        var fr = i.expr.match.needsContext,
            er = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            re = /^.[^:#\[\.,]*$/;
        i.filter = function(n, t, r) {
            var u = t[0];
            return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
                return 1 === n.nodeType
            }))
        };
        i.fn.extend({
            find: function(n) {
                var t, r = [],
                    u = this,
                    f = u.length;
                if ("string" != typeof n) return this.pushStack(i(n).filter(function() {
                    for (t = 0; f > t; t++)
                        if (i.contains(u[t], this)) return !0
                }));
                for (t = 0; f > t; t++) i.find(n, u[t], r);
                return r = this.pushStack(f > 1 ? i.unique(r) : r), r.selector = this.selector ? this.selector + " " + n : n, r
            },
            filter: function(n) {
                return this.pushStack(ui(this, n || [], !1))
            },
            not: function(n) {
                return this.pushStack(ui(this, n || [], !0))
            },
            is: function(n) {
                return !!ui(this, "string" == typeof n && fr.test(n) ? i(n) : n || [], !1).length
            }
        });
        var ft, u = n.document,
            ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            fe = i.fn.init = function(n, t) {
                var r, f;
                if (!n) return this;
                if ("string" == typeof n) {
                    if (r = "<" === n.charAt(0) && ">" === n.charAt(n.length - 1) && n.length >= 3 ? [null, n, null] : ue.exec(n), !r || !r[1] && t) return !t || t.jquery ? (t || ft).find(n) : this.constructor(t).find(n);
                    if (r[1]) {
                        if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), er.test(r[1]) && i.isPlainObject(t))
                            for (r in t) i.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    if (f = u.getElementById(r[2]), f && f.parentNode) {
                        if (f.id !== r[2]) return ft.find(n);
                        this.length = 1;
                        this[0] = f
                    }
                    return this.context = u, this.selector = n, this
                }
                return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? "undefined" != typeof ft.ready ? ft.ready(n) : n(i) : (void 0 !== n.selector && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
            };
        fe.prototype = i.fn;
        ft = i(u);
        or = /^(?:parents|prev(?:Until|All))/;
        sr = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        i.extend({
            dir: function(n, t, r) {
                for (var f = [], u = n[t]; u && 9 !== u.nodeType && (void 0 === r || 1 !== u.nodeType || !i(u).is(r));) 1 === u.nodeType && f.push(u), u = u[t];
                return f
            },
            sibling: function(n, t) {
                for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
                return i
            }
        });
        i.fn.extend({
            has: function(n) {
                var t, r = i(n, this),
                    u = r.length;
                return this.filter(function() {
                    for (t = 0; u > t; t++)
                        if (i.contains(this, r[t])) return !0
                })
            },
            closest: function(n, t) {
                for (var r, f = 0, o = this.length, u = [], e = fr.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                            u.push(r);
                            break
                        }
                return this.pushStack(u.length > 1 ? i.unique(u) : u)
            },
            index: function(n) {
                return n ? "string" == typeof n ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(n, t) {
                return this.pushStack(i.unique(i.merge(this.get(), i(n, t))))
            },
            addBack: function(n) {
                return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
            }
        });
        i.each({
            parent: function(n) {
                var t = n.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(n) {
                return i.dir(n, "parentNode")
            },
            parentsUntil: function(n, t, r) {
                return i.dir(n, "parentNode", r)
            },
            next: function(n) {
                return hr(n, "nextSibling")
            },
            prev: function(n) {
                return hr(n, "previousSibling")
            },
            nextAll: function(n) {
                return i.dir(n, "nextSibling")
            },
            prevAll: function(n) {
                return i.dir(n, "previousSibling")
            },
            nextUntil: function(n, t, r) {
                return i.dir(n, "nextSibling", r)
            },
            prevUntil: function(n, t, r) {
                return i.dir(n, "previousSibling", r)
            },
            siblings: function(n) {
                return i.sibling((n.parentNode || {}).firstChild, n)
            },
            children: function(n) {
                return i.sibling(n.firstChild)
            },
            contents: function(n) {
                return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
            }
        }, function(n, t) {
            i.fn[n] = function(r, u) {
                var f = i.map(this, t, r);
                return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), this.length > 1 && (sr[n] || (f = i.unique(f)), or.test(n) && (f = f.reverse())), this.pushStack(f)
            }
        });
        h = /\S+/g;
        fi = {};
        i.Callbacks = function(n) {
            n = "string" == typeof n ? fi[n] || ee(n) : i.extend({}, n);
            var o, u, h, f, e, c, t = [],
                r = !n.once && [],
                l = function(i) {
                    for (u = n.memory && i, h = !0, e = c || 0, c = 0, f = t.length, o = !0; t && f > e; e++)
                        if (t[e].apply(i[0], i[1]) === !1 && n.stopOnFalse) {
                            u = !1;
                            break
                        }
                    o = !1;
                    t && (r ? r.length && l(r.shift()) : u ? t = [] : s.disable())
                },
                s = {
                    add: function() {
                        if (t) {
                            var r = t.length;
                            ! function e(r) {
                                i.each(r, function(r, u) {
                                    var f = i.type(u);
                                    "function" === f ? n.unique && s.has(u) || t.push(u) : u && u.length && "string" !== f && e(u)
                                })
                            }(arguments);
                            o ? f = t.length : u && (c = r, l(u))
                        }
                        return this
                    },
                    remove: function() {
                        return t && i.each(arguments, function(n, r) {
                            for (var u;
                                (u = i.inArray(r, t, u)) > -1;) t.splice(u, 1), o && (f >= u && f--, e >= u && e--)
                        }), this
                    },
                    has: function(n) {
                        return n ? i.inArray(n, t) > -1 : !(!t || !t.length)
                    },
                    empty: function() {
                        return t = [], f = 0, this
                    },
                    disable: function() {
                        return t = r = u = void 0, this
                    },
                    disabled: function() {
                        return !t
                    },
                    lock: function() {
                        return r = void 0, u || s.disable(), this
                    },
                    locked: function() {
                        return !r
                    },
                    fireWith: function(n, i) {
                        return !t || h && !r || (i = i || [], i = [n, i.slice ? i.slice() : i], o ? r.push(i) : l(i)), this
                    },
                    fire: function() {
                        return s.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!h
                    }
                };
            return s
        };
        i.extend({
            Deferred: function(n) {
                var u = [
                        ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", i.Callbacks("memory")]
                    ],
                    f = "pending",
                    r = {
                        state: function() {
                            return f
                        },
                        always: function() {
                            return t.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var n = arguments;
                            return i.Deferred(function(f) {
                                i.each(u, function(u, e) {
                                    var o = i.isFunction(n[u]) && n[u];
                                    t[e[1]](function() {
                                        var n = o && o.apply(this, arguments);
                                        n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                                    })
                                });
                                n = null
                            }).promise()
                        },
                        promise: function(n) {
                            return null != n ? i.extend(n, r) : r
                        }
                    },
                    t = {};
                return r.pipe = r.then, i.each(u, function(n, i) {
                    var e = i[2],
                        o = i[3];
                    r[i[1]] = e.add;
                    o && e.add(function() {
                        f = o
                    }, u[1 ^ n][2].disable, u[2][2].lock);
                    t[i[0]] = function() {
                        return t[i[0] + "With"](this === t ? r : this, arguments), this
                    };
                    t[i[0] + "With"] = e.fireWith
                }), r.promise(t), n && n.call(t, t), t
            },
            when: function(n) {
                var t = 0,
                    u = l.call(arguments),
                    r = u.length,
                    e = 1 !== r || n && i.isFunction(n.promise) ? r : 0,
                    f = 1 === e ? n : i.Deferred(),
                    h = function(n, t, i) {
                        return function(r) {
                            t[n] = this;
                            i[n] = arguments.length > 1 ? l.call(arguments) : r;
                            i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                        }
                    },
                    o, c, s;
                if (r > 1)
                    for (o = new Array(r), c = new Array(r), s = new Array(r); r > t; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
                return e || f.resolveWith(s, u), f.promise()
            }
        });
        i.fn.ready = function(n) {
            return i.ready.promise().done(n), this
        };
        i.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(n) {
                n ? i.readyWait++ : i.ready(!0)
            },
            ready: function(n) {
                if (n === !0 ? !--i.readyWait : !i.isReady) {
                    if (!u.body) return setTimeout(i.ready);
                    i.isReady = !0;
                    n !== !0 && --i.readyWait > 0 || (lt.resolveWith(u, [i]), i.fn.triggerHandler && (i(u).triggerHandler("ready"), i(u).off("ready")))
                }
            }
        });
        i.ready.promise = function(t) {
            if (!lt)
                if (lt = i.Deferred(), "complete" === u.readyState) setTimeout(i.ready);
                else if (u.addEventListener) u.addEventListener("DOMContentLoaded", a, !1), n.addEventListener("load", a, !1);
            else {
                u.attachEvent("onreadystatechange", a);
                n.attachEvent("onload", a);
                var r = !1;
                try {
                    r = null == n.frameElement && u.documentElement
                } catch (e) {}
                r && r.doScroll && ! function f() {
                    if (!i.isReady) {
                        try {
                            r.doScroll("left")
                        } catch (n) {
                            return setTimeout(f, 50)
                        }
                        cr();
                        i.ready()
                    }
                }()
            }
            return lt.promise(t)
        };
        o = "undefined";
        for (lr in i(r)) break;
        r.ownLast = "0" !== lr;
        r.inlineBlockNeedsLayout = !1;
        i(function() {
                var f, t, n, i;
                n = u.getElementsByTagName("body")[0];
                n && n.style && (t = u.createElement("div"), i = u.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== o && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", r.inlineBlockNeedsLayout = f = 3 === t.offsetWidth, f && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var n = u.createElement("div");
                if (null == r.deleteExpando) {
                    r.deleteExpando = !0;
                    try {
                        delete n.test
                    } catch (t) {
                        r.deleteExpando = !1
                    }
                }
                n = null
            }();
        i.acceptData = function(n) {
            var t = i.noData[(n.nodeName + " ").toLowerCase()],
                r = +n.nodeType || 1;
            return 1 !== r && 9 !== r ? !1 : !t || t !== !0 && n.getAttribute("classid") === t
        };
        ar = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
        vr = /([A-Z])/g;
        i.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(n) {
                return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !ei(n)
            },
            data: function(n, t, i) {
                return pr(n, t, i)
            },
            removeData: function(n, t) {
                return wr(n, t)
            },
            _data: function(n, t, i) {
                return pr(n, t, i, !0)
            },
            _removeData: function(n, t) {
                return wr(n, t, !0)
            }
        });
        i.fn.extend({
            data: function(n, t) {
                var f, u, e, r = this[0],
                    o = r && r.attributes;
                if (void 0 === n) {
                    if (this.length && (e = i.data(r), 1 === r.nodeType && !i._data(r, "parsedAttrs"))) {
                        for (f = o.length; f--;) o[f] && (u = o[f].name, 0 === u.indexOf("data-") && (u = i.camelCase(u.slice(5)), yr(r, u, e[u])));
                        i._data(r, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof n ? this.each(function() {
                    i.data(this, n)
                }) : arguments.length > 1 ? this.each(function() {
                    i.data(this, n, t)
                }) : r ? yr(r, n, i.data(r, n)) : void 0
            },
            removeData: function(n) {
                return this.each(function() {
                    i.removeData(this, n)
                })
            }
        });
        i.extend({
            queue: function(n, t, r) {
                var u;
                if (n) return (t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), u || [])
            },
            dequeue: function(n, t) {
                t = t || "fx";
                var r = i.queue(n, t),
                    e = r.length,
                    u = r.shift(),
                    f = i._queueHooks(n, t),
                    o = function() {
                        i.dequeue(n, t)
                    };
                "inprogress" === u && (u = r.shift(), e--);
                u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
                !e && f && f.empty.fire()
            },
            _queueHooks: function(n, t) {
                var r = t + "queueHooks";
                return i._data(n, r) || i._data(n, r, {
                    empty: i.Callbacks("once memory").add(function() {
                        i._removeData(n, t + "queue");
                        i._removeData(n, r)
                    })
                })
            }
        });
        i.fn.extend({
            queue: function(n, t) {
                var r = 2;
                return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                    var r = i.queue(this, n, t);
                    i._queueHooks(this, n);
                    "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
                })
            },
            dequeue: function(n) {
                return this.each(function() {
                    i.dequeue(this, n)
                })
            },
            clearQueue: function(n) {
                return this.queue(n || "fx", [])
            },
            promise: function(n, t) {
                var r, f = 1,
                    e = i.Deferred(),
                    u = this,
                    o = this.length,
                    s = function() {
                        --f || e.resolveWith(u, [u])
                    };
                for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; o--;) r = i._data(u[o], n + "queueHooks"), r && r.empty && (f++, r.empty.add(s));
                return s(), e.promise(t)
            }
        });
        var at = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            w = ["Top", "Right", "Bottom", "Left"],
            et = function(n, t) {
                return n = t || n, "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
            },
            b = i.access = function(n, t, r, u, f, e, o) {
                var s = 0,
                    c = n.length,
                    h = null == r;
                if ("object" === i.type(r)) {
                    f = !0;
                    for (s in r) i.access(n, t, s, r[s], !0, e, o)
                } else if (void 0 !== u && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) {
                        return h.call(i(n), r)
                    })), t))
                    for (; c > s; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
                return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
            },
            oi = /^(?:checkbox|radio)$/i;
        ! function() {
            var t = u.createElement("input"),
                n = u.createElement("div"),
                i = u.createDocumentFragment();
            if (n.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", r.leadingWhitespace = 3 === n.firstChild.nodeType, r.tbody = !n.getElementsByTagName("tbody").length, r.htmlSerialize = !!n.getElementsByTagName("link").length, r.html5Clone = "<:nav><\/:nav>" !== u.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), r.appendChecked = t.checked, n.innerHTML = "<textarea>x<\/textarea>", r.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue, i.appendChild(n), n.innerHTML = "<input type='radio' checked='checked' name='t'/>", r.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked, r.noCloneEvent = !0, n.attachEvent && (n.attachEvent("onclick", function() {
                    r.noCloneEvent = !1
                }), n.cloneNode(!0).click()), null == r.deleteExpando) {
                r.deleteExpando = !0;
                try {
                    delete n.test
                } catch (f) {
                    r.deleteExpando = !1
                }
            }
        }(),
        function() {
            var t, i, f = u.createElement("div");
            for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) i = "on" + t, (r[t + "Bubbles"] = i in n) || (f.setAttribute(i, "t"), r[t + "Bubbles"] = f.attributes[i].expando === !1);
            f = null
        }();
        var si = /^(?:input|select|textarea)$/i,
            oe = /^key/,
            se = /^(?:mouse|pointer|contextmenu)|click/,
            br = /^(?:focusinfocus|focusoutblur)$/,
            kr = /^([^.]*)(?:\.(.+)|)$/;
        i.event = {
            global: {},
            add: function(n, t, r, u, f) {
                var w, y, b, p, s, c, l, a, e, k, d, v = i._data(n);
                if (v) {
                    for (r.handler && (p = r, r = p.handler, f = p.selector), r.guid || (r.guid = i.guid++), (y = v.events) || (y = v.events = {}), (c = v.handle) || (c = v.handle = function(n) {
                            if (typeof i !== o && (!n || i.event.triggered !== n.type)) return i.event.dispatch.apply(c.elem, arguments)
                        }, c.elem = n), t = (t || "").match(h) || [""], b = t.length; b--;) w = kr.exec(t[b]) || [], e = d = w[1], k = (w[2] || "").split(".").sort(), e && (s = i.event.special[e] || {}, e = (f ? s.delegateType : s.bindType) || e, s = i.event.special[e] || {}, l = i.extend({
                        type: e,
                        origType: d,
                        data: u,
                        handler: r,
                        guid: r.guid,
                        selector: f,
                        needsContext: f && i.expr.match.needsContext.test(f),
                        namespace: k.join(".")
                    }, p), (a = y[e]) || (a = y[e] = [], a.delegateCount = 0, s.setup && s.setup.call(n, u, k, c) !== !1 || (n.addEventListener ? n.addEventListener(e, c, !1) : n.attachEvent && n.attachEvent("on" + e, c))), s.add && (s.add.call(n, l), l.handler.guid || (l.handler.guid = r.guid)), f ? a.splice(a.delegateCount++, 0, l) : a.push(l), i.event.global[e] = !0);
                    n = null
                }
            },
            remove: function(n, t, r, u, f) {
                var y, o, s, b, p, a, c, l, e, w, k, v = i.hasData(n) && i._data(n);
                if (v && (a = v.events)) {
                    for (t = (t || "").match(h) || [""], p = t.length; p--;)
                        if (s = kr.exec(t[p]) || [], e = k = s[1], w = (s[2] || "").split(".").sort(), e) {
                            for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, l = a[e] || [], s = s[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"), b = y = l.length; y--;) o = l[y], !f && k !== o.origType || r && r.guid !== o.guid || s && !s.test(o.namespace) || u && u !== o.selector && ("**" !== u || !o.selector) || (l.splice(y, 1), o.selector && l.delegateCount--, c.remove && c.remove.call(n, o));
                            b && !l.length && (c.teardown && c.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle), delete a[e])
                        } else
                            for (e in a) i.event.remove(n, e + t[p], r, u, !0);
                    i.isEmptyObject(a) && (delete v.handle, i._removeData(n, "events"))
                }
            },
            trigger: function(t, r, f, e) {
                var l, a, o, p, c, h, w, y = [f || u],
                    s = tt.call(t, "type") ? t.type : t,
                    v = tt.call(t, "namespace") ? t.namespace.split(".") : [];
                if (o = h = f = f || u, 3 !== f.nodeType && 8 !== f.nodeType && !br.test(s + i.event.triggered) && (s.indexOf(".") >= 0 && (v = s.split("."), s = v.shift(), v.sort()), a = s.indexOf(":") < 0 && "on" + s, t = t[i.expando] ? t : new i.Event(s, "object" == typeof t && t), t.isTrigger = e ? 2 : 3, t.namespace = v.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = f), r = null == r ? [t] : i.makeArray(r, [t]), c = i.event.special[s] || {}, e || !c.trigger || c.trigger.apply(f, r) !== !1)) {
                    if (!e && !c.noBubble && !i.isWindow(f)) {
                        for (p = c.delegateType || s, br.test(p + s) || (o = o.parentNode); o; o = o.parentNode) y.push(o), h = o;
                        h === (f.ownerDocument || u) && y.push(h.defaultView || h.parentWindow || n)
                    }
                    for (w = 0;
                        (o = y[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? p : c.bindType || s, l = (i._data(o, "events") || {})[t.type] && i._data(o, "handle"), l && l.apply(o, r), l = a && o[a], l && l.apply && i.acceptData(o) && (t.result = l.apply(o, r), t.result === !1 && t.preventDefault());
                    if (t.type = s, !e && !t.isDefaultPrevented() && (!c._default || c._default.apply(y.pop(), r) === !1) && i.acceptData(f) && a && f[s] && !i.isWindow(f)) {
                        h = f[a];
                        h && (f[a] = null);
                        i.event.triggered = s;
                        try {
                            f[s]()
                        } catch (b) {}
                        i.event.triggered = void 0;
                        h && (f[a] = h)
                    }
                    return t.result
                }
            },
            dispatch: function(n) {
                n = i.event.fix(n);
                var e, f, t, r, o, s = [],
                    h = l.call(arguments),
                    c = (i._data(this, "events") || {})[n.type] || [],
                    u = i.event.special[n.type] || {};
                if (h[0] = n, n.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, n) !== !1) {
                    for (s = i.event.handlers.call(this, n, c), e = 0;
                        (r = s[e++]) && !n.isPropagationStopped();)
                        for (n.currentTarget = r.elem, o = 0;
                            (t = r.handlers[o++]) && !n.isImmediatePropagationStopped();)(!n.namespace_re || n.namespace_re.test(t.namespace)) && (n.handleObj = t, n.data = t.data, f = ((i.event.special[t.origType] || {}).handle || t.handler).apply(r.elem, h), void 0 !== f && (n.result = f) === !1 && (n.preventDefault(), n.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, n), n.result
                }
            },
            handlers: function(n, t) {
                var f, e, u, o, h = [],
                    s = t.delegateCount,
                    r = n.target;
                if (s && r.nodeType && (!n.button || "click" !== n.type))
                    for (; r != this; r = r.parentNode || this)
                        if (1 === r.nodeType && (r.disabled !== !0 || "click" !== n.type)) {
                            for (u = [], o = 0; s > o; o++) e = t[o], f = e.selector + " ", void 0 === u[f] && (u[f] = e.needsContext ? i(f, this).index(r) >= 0 : i.find(f, this, null, [r]).length), u[f] && u.push(e);
                            u.length && h.push({
                                elem: r,
                                handlers: u
                            })
                        }
                return s < t.length && h.push({
                    elem: this,
                    handlers: t.slice(s)
                }), h
            },
            fix: function(n) {
                if (n[i.expando]) return n;
                var e, o, s, r = n.type,
                    f = n,
                    t = this.fixHooks[r];
                for (t || (this.fixHooks[r] = t = se.test(r) ? this.mouseHooks : oe.test(r) ? this.keyHooks : {}), s = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(f), e = s.length; e--;) o = s[e], n[o] = f[o];
                return n.target || (n.target = f.srcElement || u), 3 === n.target.nodeType && (n.target = n.target.parentNode), n.metaKey = !!n.metaKey, t.filter ? t.filter(n, f) : n
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(n, t) {
                    return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode), n
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(n, t) {
                    var i, e, r, f = t.button,
                        o = t.fromElement;
                    return null == n.pageX && null != t.clientX && (e = n.target.ownerDocument || u, r = e.documentElement, i = e.body, n.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), n.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !n.relatedTarget && o && (n.relatedTarget = o === n.target ? t.toElement : o), n.which || void 0 === f || (n.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), n
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== dr() && this.focus) try {
                            return this.focus(), !1
                        } catch (n) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === dr() && this.blur) return (this.blur(), !1)
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (i.nodeName(this, "input") && "checkbox" === this.type && this.click) return (this.click(), !1)
                    },
                    _default: function(n) {
                        return i.nodeName(n.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(n) {
                        void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
                    }
                }
            },
            simulate: function(n, t, r, u) {
                var f = i.extend(new i.Event, r, {
                    type: n,
                    isSimulated: !0,
                    originalEvent: {}
                });
                u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
                f.isDefaultPrevented() && r.preventDefault()
            }
        };
        i.removeEvent = u.removeEventListener ? function(n, t, i) {
            n.removeEventListener && n.removeEventListener(t, i, !1)
        } : function(n, t, i) {
            var r = "on" + t;
            n.detachEvent && (typeof n[r] === o && (n[r] = null), n.detachEvent(r, i))
        };
        i.Event = function(n, t) {
            return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && n.returnValue === !1 ? vt : it) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), void(this[i.expando] = !0)) : new i.Event(n, t)
        };
        i.Event.prototype = {
            isDefaultPrevented: it,
            isPropagationStopped: it,
            isImmediatePropagationStopped: it,
            preventDefault: function() {
                var n = this.originalEvent;
                this.isDefaultPrevented = vt;
                n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
            },
            stopPropagation: function() {
                var n = this.originalEvent;
                this.isPropagationStopped = vt;
                n && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var n = this.originalEvent;
                this.isImmediatePropagationStopped = vt;
                n && n.stopImmediatePropagation && n.stopImmediatePropagation();
                this.stopPropagation()
            }
        };
        i.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(n, t) {
            i.event.special[n] = {
                delegateType: t,
                bindType: t,
                handle: function(n) {
                    var u, f = this,
                        r = n.relatedTarget,
                        e = n.handleObj;
                    return (!r || r !== f && !i.contains(f, r)) && (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
                }
            }
        });
        r.submitBubbles || (i.event.special.submit = {
            setup: function() {
                return i.nodeName(this, "form") ? !1 : void i.event.add(this, "click._submit keypress._submit", function(n) {
                    var r = n.target,
                        t = i.nodeName(r, "input") || i.nodeName(r, "button") ? r.form : void 0;
                    t && !i._data(t, "submitBubbles") && (i.event.add(t, "submit._submit", function(n) {
                        n._submit_bubble = !0
                    }), i._data(t, "submitBubbles", !0))
                })
            },
            postDispatch: function(n) {
                n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
            },
            teardown: function() {
                return i.nodeName(this, "form") ? !1 : void i.event.remove(this, "._submit")
            }
        });
        r.changeBubbles || (i.event.special.change = {
            setup: function() {
                return si.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (i.event.add(this, "propertychange._change", function(n) {
                    "checked" === n.originalEvent.propertyName && (this._just_changed = !0)
                }), i.event.add(this, "click._change", function(n) {
                    this._just_changed && !n.isTrigger && (this._just_changed = !1);
                    i.event.simulate("change", this, n, !0)
                })), !1) : void i.event.add(this, "beforeactivate._change", function(n) {
                    var t = n.target;
                    si.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change", function(n) {
                        !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                    }), i._data(t, "changeBubbles", !0))
                })
            },
            handle: function(n) {
                var t = n.target;
                if (this !== t || n.isSimulated || n.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return n.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return i.event.remove(this, "._change"), !si.test(this.nodeName)
            }
        });
        r.focusinBubbles || i.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, t) {
            var r = function(n) {
                i.event.simulate(t, n.target, i.event.fix(n), !0)
            };
            i.event.special[t] = {
                setup: function() {
                    var u = this.ownerDocument || this,
                        f = i._data(u, t);
                    f || u.addEventListener(n, r, !0);
                    i._data(u, t, (f || 0) + 1)
                },
                teardown: function() {
                    var u = this.ownerDocument || this,
                        f = i._data(u, t) - 1;
                    f ? i._data(u, t, f) : (u.removeEventListener(n, r, !0), i._removeData(u, t))
                }
            }
        });
        i.fn.extend({
            on: function(n, t, r, u, f) {
                var o, e;
                if ("object" == typeof n) {
                    "string" != typeof t && (r = r || t, t = void 0);
                    for (o in n) this.on(o, t, r, n[o], f);
                    return this
                }
                if (null == r && null == u ? (u = t, r = t = void 0) : null == u && ("string" == typeof t ? (u = r, r = void 0) : (u = r, r = t, t = void 0)), u === !1) u = it;
                else if (!u) return this;
                return 1 === f && (e = u, u = function(n) {
                    return i().off(n), e.apply(this, arguments)
                }, u.guid = e.guid || (e.guid = i.guid++)), this.each(function() {
                    i.event.add(this, n, u, r, t)
                })
            },
            one: function(n, t, i, r) {
                return this.on(n, t, i, r, 1)
            },
            off: function(n, t, r) {
                var u, f;
                if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
                if ("object" == typeof n) {
                    for (f in n) this.off(f, t, n[f]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (r = t, t = void 0), r === !1 && (r = it), this.each(function() {
                    i.event.remove(this, n, r, t)
                })
            },
            trigger: function(n, t) {
                return this.each(function() {
                    i.event.trigger(n, t, this)
                })
            },
            triggerHandler: function(n, t) {
                var r = this[0];
                if (r) return i.event.trigger(n, t, r, !0)
            }
        });
        var nu = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            he = / jQuery\d+="(?:null|\d+)"/g,
            tu = new RegExp("<(?:" + nu + ")[\\s/>]", "i"),
            hi = /^\s+/,
            iu = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            ru = /<([\w:]+)/,
            uu = /<tbody/i,
            ce = /<|&#?\w+;/,
            le = /<(?:script|style|link)/i,
            ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
            fu = /^$|\/(?:java|ecma)script/i,
            ve = /^true\/(.*)/,
            ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            s = {
                option: [1, "<select multiple='multiple'>", "<\/select>"],
                legend: [1, "<fieldset>", "<\/fieldset>"],
                area: [1, "<map>", "<\/map>"],
                param: [1, "<object>", "<\/object>"],
                thead: [1, "<table>", "<\/table>"],
                tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
                col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
                td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
                _default: r.htmlSerialize ? [0, "", ""] : [1, "X<div>", "<\/div>"]
            },
            pe = gr(u),
            ci = pe.appendChild(u.createElement("div"));
        s.optgroup = s.option;
        s.tbody = s.tfoot = s.colgroup = s.caption = s.thead;
        s.th = s.td;
        i.extend({
            clone: function(n, t, u) {
                var e, c, s, o, h, l = i.contains(n.ownerDocument, n);
                if (r.html5Clone || i.isXMLDoc(n) || !tu.test("<" + n.nodeName + ">") ? s = n.cloneNode(!0) : (ci.innerHTML = n.outerHTML, ci.removeChild(s = ci.firstChild)), !(r.noCloneEvent && r.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                    for (e = f(s), h = f(n), o = 0; null != (c = h[o]); ++o) e[o] && be(c, e[o]);
                if (t)
                    if (u)
                        for (h = h || f(n), e = e || f(s), o = 0; null != (c = h[o]); o++) hu(c, e[o]);
                    else hu(n, s);
                return e = f(s, "script"), e.length > 0 && li(e, !l && f(n, "script")), e = h = c = null, s
            },
            buildFragment: function(n, t, u, e) {
                for (var c, o, b, h, p, w, a, k = n.length, v = gr(t), l = [], y = 0; k > y; y++)
                    if (o = n[y], o || 0 === o)
                        if ("object" === i.type(o)) i.merge(l, o.nodeType ? [o] : o);
                        else if (ce.test(o)) {
                    for (h = h || v.appendChild(t.createElement("div")), p = (ru.exec(o) || ["", ""])[1].toLowerCase(), a = s[p] || s._default, h.innerHTML = a[1] + o.replace(iu, "<$1><\/$2>") + a[2], c = a[0]; c--;) h = h.lastChild;
                    if (!r.leadingWhitespace && hi.test(o) && l.push(t.createTextNode(hi.exec(o)[0])), !r.tbody)
                        for (o = "table" !== p || uu.test(o) ? "<table>" !== a[1] || uu.test(o) ? 0 : h : h.firstChild, c = o && o.childNodes.length; c--;) i.nodeName(w = o.childNodes[c], "tbody") && !w.childNodes.length && o.removeChild(w);
                    for (i.merge(l, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                    h = v.lastChild
                } else l.push(t.createTextNode(o));
                for (h && v.removeChild(h), r.appendChecked || i.grep(f(l, "input"), we), y = 0; o = l[y++];)
                    if ((!e || -1 === i.inArray(o, e)) && (b = i.contains(o.ownerDocument, o), h = f(v.appendChild(o), "script"), b && li(h), u))
                        for (c = 0; o = h[c++];) fu.test(o.type || "") && u.push(o);
                return h = null, v
            },
            cleanData: function(n, t) {
                for (var u, e, f, s, a = 0, h = i.expando, l = i.cache, v = r.deleteExpando, y = i.event.special; null != (u = n[a]); a++)
                    if ((t || i.acceptData(u)) && (f = u[h], s = f && l[f])) {
                        if (s.events)
                            for (e in s.events) y[e] ? i.event.remove(u, e) : i.removeEvent(u, e, s.handle);
                        l[f] && (delete l[f], v ? delete u[h] : typeof u.removeAttribute !== o ? u.removeAttribute(h) : u[h] = null, c.push(f))
                    }
            }
        });
        i.fn.extend({
            text: function(n) {
                return b(this, function(n) {
                    return void 0 === n ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || u).createTextNode(n))
                }, null, n, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(n) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = eu(this, n);
                        t.appendChild(n)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(n) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = eu(this, n);
                        t.insertBefore(n, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(n) {
                    this.parentNode && this.parentNode.insertBefore(n, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(n) {
                    this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
                })
            },
            remove: function(n, t) {
                for (var r, e = n ? i.filter(n, this) : this, u = 0; null != (r = e[u]); u++) t || 1 !== r.nodeType || i.cleanData(f(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && li(f(r, "script")), r.parentNode.removeChild(r));
                return this
            },
            empty: function() {
                for (var n, t = 0; null != (n = this[t]); t++) {
                    for (1 === n.nodeType && i.cleanData(f(n, !1)); n.firstChild;) n.removeChild(n.firstChild);
                    n.options && i.nodeName(n, "select") && (n.options.length = 0)
                }
                return this
            },
            clone: function(n, t) {
                return n = null == n ? !1 : n, t = null == t ? n : t, this.map(function() {
                    return i.clone(this, n, t)
                })
            },
            html: function(n) {
                return b(this, function(n) {
                    var t = this[0] || {},
                        u = 0,
                        e = this.length;
                    if (void 0 === n) return 1 === t.nodeType ? t.innerHTML.replace(he, "") : void 0;
                    if (!("string" != typeof n || le.test(n) || !r.htmlSerialize && tu.test(n) || !r.leadingWhitespace && hi.test(n) || s[(ru.exec(n) || ["", ""])[1].toLowerCase()])) {
                        n = n.replace(iu, "<$1><\/$2>");
                        try {
                            for (; e > u; u++) t = this[u] || {}, 1 === t.nodeType && (i.cleanData(f(t, !1)), t.innerHTML = n);
                            t = 0
                        } catch (o) {}
                    }
                    t && this.empty().append(n)
                }, null, n, arguments.length)
            },
            replaceWith: function() {
                var n = arguments[0];
                return this.domManip(arguments, function(t) {
                    n = this.parentNode;
                    i.cleanData(f(this));
                    n && n.replaceChild(t, this)
                }), n && (n.length || n.nodeType) ? this : this.remove()
            },
            detach: function(n) {
                return this.remove(n, !0)
            },
            domManip: function(n, t) {
                n = ir.apply([], n);
                var h, u, c, o, v, s, e = 0,
                    l = this.length,
                    p = this,
                    w = l - 1,
                    a = n[0],
                    y = i.isFunction(a);
                if (y || l > 1 && "string" == typeof a && !r.checkClone && ae.test(a)) return this.each(function(i) {
                    var r = p.eq(i);
                    y && (n[0] = a.call(this, i, r.html()));
                    r.domManip(n, t)
                });
                if (l && (s = i.buildFragment(n, this[0].ownerDocument, !1, this), h = s.firstChild, 1 === s.childNodes.length && (s = h), h)) {
                    for (o = i.map(f(s, "script"), ou), c = o.length; l > e; e++) u = s, e !== w && (u = i.clone(u, !0, !0), c && i.merge(o, f(u, "script"))), t.call(this[e], u, e);
                    if (c)
                        for (v = o[o.length - 1].ownerDocument, i.map(o, su), e = 0; c > e; e++) u = o[e], fu.test(u.type || "") && !i._data(u, "globalEval") && i.contains(v, u) && (u.src ? i._evalUrl && i._evalUrl(u.src) : i.globalEval((u.text || u.textContent || u.innerHTML || "").replace(ye, "")));
                    s = h = null
                }
                return this
            }
        });
        i.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(n, t) {
            i.fn[n] = function(n) {
                for (var u, r = 0, f = [], e = i(n), o = e.length - 1; o >= r; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ii.apply(f, u.get());
                return this.pushStack(f)
            }
        });
        ai = {};
        ! function() {
            var n;
            r.shrinkWrapBlocks = function() {
                if (null != n) return n;
                n = !1;
                var t, i, r;
                return i = u.getElementsByTagName("body")[0], i && i.style ? (t = u.createElement("div"), r = u.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(r).appendChild(t), typeof t.style.zoom !== o && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(u.createElement("div")).style.width = "5px", n = 3 !== t.offsetWidth), i.removeChild(r), n) : void 0
            }
        }();
        var lu = /^margin/,
            pt = new RegExp("^(" + at + ")(?!px)[a-z%]+$", "i"),
            k, d, ke = /^(top|right|bottom|left)$/;
        n.getComputedStyle ? (k = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : n.getComputedStyle(t, null)
        }, d = function(n, t, r) {
            var e, o, s, u, f = n.style;
            return r = r || k(n), u = r ? r.getPropertyValue(t) || r[t] : void 0, r && ("" !== u || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), pt.test(u) && lu.test(t) && (e = f.width, o = f.minWidth, s = f.maxWidth, f.minWidth = f.maxWidth = f.width = u, u = r.width, f.width = e, f.minWidth = o, f.maxWidth = s)), void 0 === u ? u : u + ""
        }) : u.documentElement.currentStyle && (k = function(n) {
            return n.currentStyle
        }, d = function(n, t, i) {
            var o, f, e, r, u = n.style;
            return i = i || k(n), r = i ? i[t] : void 0, null == r && u && u[t] && (r = u[t]), pt.test(r) && !ke.test(t) && (o = u.left, f = n.runtimeStyle, e = f && f.left, e && (f.left = n.currentStyle.left), u.left = "fontSize" === t ? "1em" : r, r = u.pixelLeft + "px", u.left = o, e && (f.left = e)), void 0 === r ? r : r + "" || "auto"
        });
        ! function() {
            var f, t, l, o, s, e, h;
            if (f = u.createElement("div"), f.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", l = f.getElementsByTagName("a")[0], t = l && l.style) {
                t.cssText = "float:left;opacity:.5";
                r.opacity = "0.5" === t.opacity;
                r.cssFloat = !!t.cssFloat;
                f.style.backgroundClip = "content-box";
                f.cloneNode(!0).style.backgroundClip = "";
                r.clearCloneStyle = "content-box" === f.style.backgroundClip;
                r.boxSizing = "" === t.boxSizing || "" === t.MozBoxSizing || "" === t.WebkitBoxSizing;
                i.extend(r, {
                    reliableHiddenOffsets: function() {
                        return null == e && c(), e
                    },
                    boxSizingReliable: function() {
                        return null == s && c(), s
                    },
                    pixelPosition: function() {
                        return null == o && c(), o
                    },
                    reliableMarginRight: function() {
                        return null == h && c(), h
                    }
                });

                function c() {
                    var i, r, f, t;
                    r = u.getElementsByTagName("body")[0];
                    r && r.style && (i = u.createElement("div"), f = u.createElement("div"), f.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", r.appendChild(f).appendChild(i), i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = s = !1, h = !0, n.getComputedStyle && (o = "1%" !== (n.getComputedStyle(i, null) || {}).top, s = "4px" === (n.getComputedStyle(i, null) || {
                        width: "4px"
                    }).width, t = i.appendChild(u.createElement("div")), t.style.cssText = i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", i.style.width = "1px", h = !parseFloat((n.getComputedStyle(t, null) || {}).marginRight), i.removeChild(t)), i.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>", t = i.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", e = 0 === t[0].offsetHeight, e && (t[0].style.display = "", t[1].style.display = "none", e = 0 === t[0].offsetHeight), r.removeChild(f))
                }
            }
        }();
        i.swap = function(n, t, i, r) {
            var f, u, e = {};
            for (u in t) e[u] = n.style[u], n.style[u] = t[u];
            f = i.apply(n, r || []);
            for (u in t) n.style[u] = e[u];
            return f
        };
        var vi = /alpha\([^)]*\)/i,
            de = /opacity\s*=\s*([^)]*)/,
            ge = /^(none|table(?!-c[ea]).+)/,
            no = new RegExp("^(" + at + ")(.*)$", "i"),
            to = new RegExp("^([+-])=(" + at + ")", "i"),
            io = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            vu = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            yu = ["Webkit", "O", "Moz", "ms"];
        i.extend({
            cssHooks: {
                opacity: {
                    get: function(n, t) {
                        if (t) {
                            var i = d(n, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: r.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(n, t, u, f) {
                if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                    var o, h, e, s = i.camelCase(t),
                        c = n.style;
                    if (t = i.cssProps[s] || (i.cssProps[s] = pu(c, s)), e = i.cssHooks[t] || i.cssHooks[s], void 0 === u) return e && "get" in e && void 0 !== (o = e.get(n, !1, f)) ? o : c[t];
                    if (h = typeof u, "string" === h && (o = to.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, t)), h = "number"), null != u && u === u && ("number" !== h || i.cssNumber[s] || (u += "px"), r.clearCloneStyle || "" !== u || 0 !== t.indexOf("background") || (c[t] = "inherit"), !(e && "set" in e && void 0 === (u = e.set(n, u, f))))) try {
                        c[t] = u
                    } catch (l) {}
                }
            },
            css: function(n, t, r, u) {
                var s, f, e, o = i.camelCase(t);
                return t = i.cssProps[o] || (i.cssProps[o] = pu(n.style, o)), e = i.cssHooks[t] || i.cssHooks[o], e && "get" in e && (f = e.get(n, !0, r)), void 0 === f && (f = d(n, t, u)), "normal" === f && t in vu && (f = vu[t]), "" === r || r ? (s = parseFloat(f), r === !0 || i.isNumeric(s) ? s || 0 : f) : f
            }
        });
        i.each(["height", "width"], function(n, t) {
            i.cssHooks[t] = {
                get: function(n, r, u) {
                    if (r) return ge.test(i.css(n, "display")) && 0 === n.offsetWidth ? i.swap(n, io, function() {
                        return du(n, t, u)
                    }) : du(n, t, u)
                },
                set: function(n, u, f) {
                    var e = f && k(n);
                    return bu(n, u, f ? ku(n, t, f, r.boxSizing && "border-box" === i.css(n, "boxSizing", !1, e), e) : 0)
                }
            }
        });
        r.opacity || (i.cssHooks.opacity = {
            get: function(n, t) {
                return de.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(n, t) {
                var r = n.style,
                    u = n.currentStyle,
                    e = i.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    f = u && u.filter || r.filter || "";
                r.zoom = 1;
                (t >= 1 || "" === t) && "" === i.trim(f.replace(vi, "")) && r.removeAttribute && (r.removeAttribute("filter"), "" === t || u && !u.filter) || (r.filter = vi.test(f) ? f.replace(vi, e) : f + " " + e)
            }
        });
        i.cssHooks.marginRight = au(r.reliableMarginRight, function(n, t) {
            if (t) return i.swap(n, {
                display: "inline-block"
            }, d, [n, "marginRight"])
        });
        i.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(n, t) {
            i.cssHooks[n + t] = {
                expand: function(i) {
                    for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++) f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                    return f
                }
            };
            lu.test(n) || (i.cssHooks[n + t].set = bu)
        });
        i.fn.extend({
            css: function(n, t) {
                return b(this, function(n, t, r) {
                    var f, e, o = {},
                        u = 0;
                    if (i.isArray(t)) {
                        for (f = k(n), e = t.length; e > u; u++) o[t[u]] = i.css(n, t[u], !1, f);
                        return o
                    }
                    return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
                }, n, t, arguments.length > 1)
            },
            show: function() {
                return wu(this, !0)
            },
            hide: function() {
                return wu(this)
            },
            toggle: function(n) {
                return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                    et(this) ? i(this).show() : i(this).hide()
                })
            }
        });
        i.Tween = e;
        e.prototype = {
            constructor: e,
            init: function(n, t, r, u, f, e) {
                this.elem = n;
                this.prop = r;
                this.easing = f || "swing";
                this.options = t;
                this.start = this.now = this.cur();
                this.end = u;
                this.unit = e || (i.cssNumber[r] ? "" : "px")
            },
            cur: function() {
                var n = e.propHooks[this.prop];
                return n && n.get ? n.get(this) : e.propHooks._default.get(this)
            },
            run: function(n) {
                var r, t = e.propHooks[this.prop];
                return this.pos = r = this.options.duration ? i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : n, this.now = (this.end - this.start) * r + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : e.propHooks._default.set(this), this
            }
        };
        e.prototype.init.prototype = e.prototype;
        e.propHooks = {
            _default: {
                get: function(n) {
                    var t;
                    return null == n.elem[n.prop] || n.elem.style && null != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t : 0) : n.elem[n.prop]
                },
                set: function(n) {
                    i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
                }
            }
        };
        e.propHooks.scrollTop = e.propHooks.scrollLeft = {
            set: function(n) {
                n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
            }
        };
        i.easing = {
            linear: function(n) {
                return n
            },
            swing: function(n) {
                return .5 - Math.cos(n * Math.PI) / 2
            }
        };
        i.fx = e.prototype.init;
        i.fx.step = {};
        var rt, wt, ro = /^(?:toggle|show|hide)$/,
            gu = new RegExp("^(?:([+-])=|)(" + at + ")([a-z%]*)$", "i"),
            uo = /queueHooks$/,
            bt = [fo],
            st = {
                "*": [function(n, t) {
                    var f = this.createTween(n, t),
                        s = f.cur(),
                        r = gu.exec(t),
                        e = r && r[3] || (i.cssNumber[n] ? "" : "px"),
                        u = (i.cssNumber[n] || "px" !== e && +s) && gu.exec(i.css(f.elem, n)),
                        o = 1,
                        h = 20;
                    if (u && u[3] !== e) {
                        e = e || u[3];
                        r = r || [];
                        u = +s || 1;
                        do o = o || ".5", u /= o, i.style(f.elem, n, u + e); while (o !== (o = f.cur() / s) && 1 !== o && --h)
                    }
                    return r && (u = f.start = +u || +s || 0, f.unit = e, f.end = r[1] ? u + (r[1] + 1) * r[2] : +r[2]), f
                }]
            };
        i.Animation = i.extend(rf, {
            tweener: function(n, t) {
                i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
                for (var r, u = 0, f = n.length; f > u; u++) r = n[u], st[r] = st[r] || [], st[r].unshift(t)
            },
            prefilter: function(n, t) {
                t ? bt.unshift(n) : bt.push(n)
            }
        });
        i.speed = function(n, t, r) {
            var u = n && "object" == typeof n ? i.extend({}, n) : {
                complete: r || !r && t || i.isFunction(n) && n,
                duration: n,
                easing: r && t || t && !i.isFunction(t) && t
            };
            return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (null == u.queue || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
                i.isFunction(u.old) && u.old.call(this);
                u.queue && i.dequeue(this, u.queue)
            }, u
        };
        i.fn.extend({
            fadeTo: function(n, t, i, r) {
                return this.filter(et).css("opacity", 0).show().end().animate({
                    opacity: t
                }, n, i, r)
            },
            animate: function(n, t, r, u) {
                var o = i.isEmptyObject(n),
                    e = i.speed(t, r, u),
                    f = function() {
                        var t = rf(this, i.extend({}, n), e);
                        (o || i._data(this, "finish")) && t.stop(!0)
                    };
                return f.finish = f, o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
            },
            stop: function(n, t, r) {
                var u = function(n) {
                    var t = n.stop;
                    delete n.stop;
                    t(r)
                };
                return "string" != typeof n && (r = t, t = n, n = void 0), t && n !== !1 && this.queue(n || "fx", []), this.each(function() {
                    var o = !0,
                        t = null != n && n + "queueHooks",
                        e = i.timers,
                        f = i._data(this);
                    if (t) f[t] && f[t].stop && u(f[t]);
                    else
                        for (t in f) f[t] && f[t].stop && uo.test(t) && u(f[t]);
                    for (t = e.length; t--;) e[t].elem !== this || null != n && e[t].queue !== n || (e[t].anim.stop(r), o = !1, e.splice(t, 1));
                    (o || !r) && i.dequeue(this, n)
                })
            },
            finish: function(n) {
                return n !== !1 && (n = n || "fx"), this.each(function() {
                    var t, f = i._data(this),
                        r = f[n + "queue"],
                        e = f[n + "queueHooks"],
                        u = i.timers,
                        o = r ? r.length : 0;
                    for (f.finish = !0, i.queue(this, n, []), e && e.stop && e.stop.call(this, !0), t = u.length; t--;) u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0), u.splice(t, 1));
                    for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete f.finish
                })
            }
        });
        i.each(["toggle", "show", "hide"], function(n, t) {
            var r = i.fn[t];
            i.fn[t] = function(n, i, u) {
                return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(kt(t, !0), n, i, u)
            }
        });
        i.each({
            slideDown: kt("show"),
            slideUp: kt("hide"),
            slideToggle: kt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(n, t) {
            i.fn[n] = function(n, i, r) {
                return this.animate(t, n, i, r)
            }
        });
        i.timers = [];
        i.fx.tick = function() {
            var r, n = i.timers,
                t = 0;
            for (rt = i.now(); t < n.length; t++) r = n[t], r() || n[t] !== r || n.splice(t--, 1);
            n.length || i.fx.stop();
            rt = void 0
        };
        i.fx.timer = function(n) {
            i.timers.push(n);
            n() ? i.fx.start() : i.timers.pop()
        };
        i.fx.interval = 13;
        i.fx.start = function() {
            wt || (wt = setInterval(i.fx.tick, i.fx.interval))
        };
        i.fx.stop = function() {
            clearInterval(wt);
            wt = null
        };
        i.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        i.fn.delay = function(n, t) {
                return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) {
                    var r = setTimeout(t, n);
                    i.stop = function() {
                        clearTimeout(r)
                    }
                })
            },
            function() {
                var n, t, f, i, e;
                t = u.createElement("div");
                t.setAttribute("className", "t");
                t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>";
                i = t.getElementsByTagName("a")[0];
                f = u.createElement("select");
                e = f.appendChild(u.createElement("option"));
                n = t.getElementsByTagName("input")[0];
                i.style.cssText = "top:1px";
                r.getSetAttribute = "t" !== t.className;
                r.style = /top/.test(i.getAttribute("style"));
                r.hrefNormalized = "/a" === i.getAttribute("href");
                r.checkOn = !!n.value;
                r.optSelected = e.selected;
                r.enctype = !!u.createElement("form").enctype;
                f.disabled = !0;
                r.optDisabled = !e.disabled;
                n = u.createElement("input");
                n.setAttribute("value", "");
                r.input = "" === n.getAttribute("value");
                n.value = "t";
                n.setAttribute("type", "radio");
                r.radioValue = "t" === n.value
            }();
        uf = /\r/g;
        i.fn.extend({
            val: function(n) {
                var t, r, f, u = this[0];
                return arguments.length ? (f = i.isFunction(n), this.each(function(r) {
                    var u;
                    1 === this.nodeType && (u = f ? n.call(this, r, i(this).val()) : n, null == u ? u = "" : "number" == typeof u ? u += "" : i.isArray(u) && (u = i.map(u, function(n) {
                        return null == n ? "" : n + ""
                    })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
                })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(u, "value")) ? r : (r = u.value, "string" == typeof r ? r.replace(uf, "") : null == r ? "" : r)) : void 0
            }
        });
        i.extend({
            valHooks: {
                option: {
                    get: function(n) {
                        var t = i.find.attr(n, "value");
                        return null != t ? t : i.trim(i.text(n))
                    }
                },
                select: {
                    get: function(n) {
                        for (var o, t, s = n.options, u = n.selectedIndex, f = "select-one" === n.type || 0 > u, h = f ? null : [], c = f ? u + 1 : s.length, e = 0 > u ? c : f ? u : 0; c > e; e++)
                            if (t = s[e], !(!t.selected && e !== u || (r.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && i.nodeName(t.parentNode, "optgroup"))) {
                                if (o = i(t).val(), f) return o;
                                h.push(o)
                            }
                        return h
                    },
                    set: function(n, t) {
                        for (var f, r, u = n.options, o = i.makeArray(t), e = u.length; e--;)
                            if (r = u[e], i.inArray(i.valHooks.option.get(r), o) >= 0) try {
                                r.selected = f = !0
                            } catch (s) {
                                r.scrollHeight
                            } else r.selected = !1;
                        return f || (n.selectedIndex = -1), u
                    }
                }
            }
        });
        i.each(["radio", "checkbox"], function() {
            i.valHooks[this] = {
                set: function(n, t) {
                    if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
                }
            };
            r.checkOn || (i.valHooks[this].get = function(n) {
                return null === n.getAttribute("value") ? "on" : n.value
            })
        });
        var ut, ff, v = i.expr.attrHandle,
            yi = /^(?:checked|selected)$/i,
            g = r.getSetAttribute,
            dt = r.input;
        i.fn.extend({
            attr: function(n, t) {
                return b(this, i.attr, n, t, arguments.length > 1)
            },
            removeAttr: function(n) {
                return this.each(function() {
                    i.removeAttr(this, n)
                })
            }
        });
        i.extend({
            attr: function(n, t, r) {
                var u, f, e = n.nodeType;
                if (n && 3 !== e && 8 !== e && 2 !== e) return typeof n.getAttribute === o ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (t = t.toLowerCase(), u = i.attrHooks[t] || (i.expr.match.bool.test(t) ? ff : ut)), void 0 === r ? u && "get" in u && null !== (f = u.get(n, t)) ? f : (f = i.find.attr(n, t), null == f ? void 0 : f) : null !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""), r) : void i.removeAttr(n, t))
            },
            removeAttr: function(n, t) {
                var r, u, e = 0,
                    f = t && t.match(h);
                if (f && 1 === n.nodeType)
                    while (r = f[e++]) u = i.propFix[r] || r, i.expr.match.bool.test(r) ? dt && g || !yi.test(r) ? n[u] = !1 : n[i.camelCase("default-" + r)] = n[u] = !1 : i.attr(n, r, ""), n.removeAttribute(g ? r : u)
            },
            attrHooks: {
                type: {
                    set: function(n, t) {
                        if (!r.radioValue && "radio" === t && i.nodeName(n, "input")) {
                            var u = n.value;
                            return n.setAttribute("type", t), u && (n.value = u), t
                        }
                    }
                }
            }
        });
        ff = {
            set: function(n, t, r) {
                return t === !1 ? i.removeAttr(n, r) : dt && g || !yi.test(r) ? n.setAttribute(!g && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0, r
            }
        };
        i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
            var r = v[t] || i.find.attr;
            v[t] = dt && g || !yi.test(t) ? function(n, t, i) {
                var u, f;
                return i || (f = v[t], v[t] = u, u = null != r(n, t, i) ? t.toLowerCase() : null, v[t] = f), u
            } : function(n, t, r) {
                if (!r) return n[i.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        });
        dt && g || (i.attrHooks.value = {
            set: function(n, t, r) {
                return i.nodeName(n, "input") ? void(n.defaultValue = t) : ut && ut.set(n, t, r)
            }
        });
        g || (ut = {
            set: function(n, t, i) {
                var r = n.getAttributeNode(i);
                return r || n.setAttributeNode(r = n.ownerDocument.createAttribute(i)), r.value = t += "", "value" === i || t === n.getAttribute(i) ? t : void 0
            }
        }, v.id = v.name = v.coords = function(n, t, i) {
            var r;
            if (!i) return (r = n.getAttributeNode(t)) && "" !== r.value ? r.value : null
        }, i.valHooks.button = {
            get: function(n, t) {
                var i = n.getAttributeNode(t);
                if (i && i.specified) return i.value
            },
            set: ut.set
        }, i.attrHooks.contenteditable = {
            set: function(n, t, i) {
                ut.set(n, "" === t ? !1 : t, i)
            }
        }, i.each(["width", "height"], function(n, t) {
            i.attrHooks[t] = {
                set: function(n, i) {
                    if ("" === i) return (n.setAttribute(t, "auto"), i)
                }
            }
        }));
        r.style || (i.attrHooks.style = {
            get: function(n) {
                return n.style.cssText || void 0
            },
            set: function(n, t) {
                return n.style.cssText = t + ""
            }
        });
        ef = /^(?:input|select|textarea|button|object)$/i; of = /^(?:a|area)$/i;
        i.fn.extend({
            prop: function(n, t) {
                return b(this, i.prop, n, t, arguments.length > 1)
            },
            removeProp: function(n) {
                return n = i.propFix[n] || n, this.each(function() {
                    try {
                        this[n] = void 0;
                        delete this[n]
                    } catch (t) {}
                })
            }
        });
        i.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(n, t, r) {
                var f, u, o, e = n.nodeType;
                if (n && 3 !== e && 8 !== e && 2 !== e) return o = 1 !== e || !i.isXMLDoc(n), o && (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(n) {
                        var t = i.find.attr(n, "tabindex");
                        return t ? parseInt(t, 10) : ef.test(n.nodeName) || of .test(n.nodeName) && n.href ? 0 : -1
                    }
                }
            }
        });
        r.hrefNormalized || i.each(["href", "src"], function(n, t) {
            i.propHooks[t] = {
                get: function(n) {
                    return n.getAttribute(t, 4)
                }
            }
        });
        r.optSelected || (i.propHooks.selected = {
            get: function(n) {
                var t = n.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        });
        i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            i.propFix[this.toLowerCase()] = this
        });
        r.enctype || (i.propFix.enctype = "encoding");
        gt = /[\t\r\n\f]/g;
        i.fn.extend({
            addClass: function(n) {
                var o, t, r, u, s, f, e = 0,
                    c = this.length,
                    l = "string" == typeof n && n;
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).addClass(n.call(this, t, this.className))
                });
                if (l)
                    for (o = (n || "").match(h) || []; c > e; e++)
                        if (t = this[e], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(gt, " ") : " ")) {
                            for (s = 0; u = o[s++];) r.indexOf(" " + u + " ") < 0 && (r += u + " ");
                            f = i.trim(r);
                            t.className !== f && (t.className = f)
                        }
                return this
            },
            removeClass: function(n) {
                var o, t, r, u, s, f, e = 0,
                    c = this.length,
                    l = 0 === arguments.length || "string" == typeof n && n;
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, this.className))
                });
                if (l)
                    for (o = (n || "").match(h) || []; c > e; e++)
                        if (t = this[e], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(gt, " ") : "")) {
                            for (s = 0; u = o[s++];)
                                while (r.indexOf(" " + u + " ") >= 0) r = r.replace(" " + u + " ", " ");
                            f = n ? i.trim(r) : "";
                            t.className !== f && (t.className = f)
                        }
                return this
            },
            toggleClass: function(n, t) {
                var r = typeof n;
                return "boolean" == typeof t && "string" === r ? t ? this.addClass(n) : this.removeClass(n) : this.each(i.isFunction(n) ? function(r) {
                    i(this).toggleClass(n.call(this, r, this.className, t), t)
                } : function() {
                    if ("string" === r)
                        for (var t, f = 0, u = i(this), e = n.match(h) || []; t = e[f++];) u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                    else(r === o || "boolean" === r) && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
                })
            },
            hasClass: function(n) {
                for (var i = " " + n + " ", t = 0, r = this.length; r > t; t++)
                    if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(gt, " ").indexOf(i) >= 0) return !0;
                return !1
            }
        });
        i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
            i.fn[t] = function(n, i) {
                return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
            }
        });
        i.fn.extend({
            hover: function(n, t) {
                return this.mouseenter(n).mouseleave(t || n)
            },
            bind: function(n, t, i) {
                return this.on(n, null, t, i)
            },
            unbind: function(n, t) {
                return this.off(n, null, t)
            },
            delegate: function(n, t, i, r) {
                return this.on(t, n, i, r)
            },
            undelegate: function(n, t, i) {
                return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
            }
        });
        var pi = i.now(),
            wi = /\?/,
            oo = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        i.parseJSON = function(t) {
            if (n.JSON && n.JSON.parse) return n.JSON.parse(t + "");
            var f, r = null,
                u = i.trim(t + "");
            return u && !i.trim(u.replace(oo, function(n, t, i, u) {
                return f && t && (r = 0), 0 === r ? n : (f = i || t, r += !u - !i, "")
            })) ? Function("return " + u)() : i.error("Invalid JSON: " + t)
        };
        i.parseXML = function(t) {
            var r, u;
            if (!t || "string" != typeof t) return null;
            try {
                n.DOMParser ? (u = new DOMParser, r = u.parseFromString(t, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(t))
            } catch (f) {
                r = void 0
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r
        };
        var nt, y, so = /#.*$/,
            sf = /([?&])_=[^&]*/,
            ho = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            co = /^(?:GET|HEAD)$/,
            lo = /^\/\//,
            hf = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            cf = {},
            bi = {},
            lf = "*/".concat("*");
        try {
            y = location.href
        } catch (ns) {
            y = u.createElement("a");
            y.href = "";
            y = y.href
        }
        nt = hf.exec(y.toLowerCase()) || [];
        i.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: y,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(nt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": lf,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": i.parseJSON,
                    "text xml": i.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(n, t) {
                return t ? ki(ki(n, i.ajaxSettings), t) : ki(i.ajaxSettings, n)
            },
            ajaxPrefilter: af(cf),
            ajaxTransport: af(bi),
            ajax: function(n, t) {
                function w(n, t, s, h) {
                    var v, it, nt, y, w, c = t;
                    2 !== e && (e = 2, k && clearTimeout(k), a = void 0, b = h || "", u.readyState = n > 0 ? 4 : 0, v = n >= 200 && 300 > n || 304 === n, s && (y = ao(r, u, s)), y = vo(r, y, u, v), v ? (r.ifModified && (w = u.getResponseHeader("Last-Modified"), w && (i.lastModified[f] = w), w = u.getResponseHeader("etag"), w && (i.etag[f] = w)), 204 === n || "HEAD" === r.type ? c = "nocontent" : 304 === n ? c = "notmodified" : (c = y.state, it = y.data, nt = y.error, v = !nt)) : (nt = c, (n || !c) && (c = "error", 0 > n && (n = 0))), u.status = n, u.statusText = (t || c) + "", v ? g.resolveWith(o, [it, c, u]) : g.rejectWith(o, [u, c, nt]), u.statusCode(p), p = void 0, l && d.trigger(v ? "ajaxSuccess" : "ajaxError", [u, r, v ? it : nt]), tt.fireWith(o, [u, c]), l && (d.trigger("ajaxComplete", [u, r]), --i.active || i.event.trigger("ajaxStop")))
                }
                "object" == typeof n && (t = n, n = void 0);
                t = t || {};
                var s, c, f, b, k, l, a, v, r = i.ajaxSetup({}, t),
                    o = r.context || r,
                    d = r.context && (o.nodeType || o.jquery) ? i(o) : i.event,
                    g = i.Deferred(),
                    tt = i.Callbacks("once memory"),
                    p = r.statusCode || {},
                    it = {},
                    rt = {},
                    e = 0,
                    ut = "canceled",
                    u = {
                        readyState: 0,
                        getResponseHeader: function(n) {
                            var t;
                            if (2 === e) {
                                if (!v)
                                    for (v = {}; t = ho.exec(b);) v[t[1].toLowerCase()] = t[2];
                                t = v[n.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === e ? b : null
                        },
                        setRequestHeader: function(n, t) {
                            var i = n.toLowerCase();
                            return e || (n = rt[i] = rt[i] || n, it[n] = t), this
                        },
                        overrideMimeType: function(n) {
                            return e || (r.mimeType = n), this
                        },
                        statusCode: function(n) {
                            var t;
                            if (n)
                                if (2 > e)
                                    for (t in n) p[t] = [p[t], n[t]];
                                else u.always(n[u.status]);
                            return this
                        },
                        abort: function(n) {
                            var t = n || ut;
                            return a && a.abort(t), w(0, t), this
                        }
                    };
                if (g.promise(u).complete = tt.add, u.success = u.done, u.error = u.fail, r.url = ((n || r.url || y) + "").replace(so, "").replace(lo, nt[1] + "//"), r.type = t.method || t.type || r.method || r.type, r.dataTypes = i.trim(r.dataType || "*").toLowerCase().match(h) || [""], null == r.crossDomain && (s = hf.exec(r.url.toLowerCase()), r.crossDomain = !(!s || s[1] === nt[1] && s[2] === nt[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (nt[3] || ("http:" === nt[1] ? "80" : "443")))), r.data && r.processData && "string" != typeof r.data && (r.data = i.param(r.data, r.traditional)), vf(cf, r, t, u), 2 === e) return u;
                l = i.event && r.global;
                l && 0 == i.active++ && i.event.trigger("ajaxStart");
                r.type = r.type.toUpperCase();
                r.hasContent = !co.test(r.type);
                f = r.url;
                r.hasContent || (r.data && (f = r.url += (wi.test(f) ? "&" : "?") + r.data, delete r.data), r.cache === !1 && (r.url = sf.test(f) ? f.replace(sf, "$1_=" + pi++) : f + (wi.test(f) ? "&" : "?") + "_=" + pi++));
                r.ifModified && (i.lastModified[f] && u.setRequestHeader("If-Modified-Since", i.lastModified[f]), i.etag[f] && u.setRequestHeader("If-None-Match", i.etag[f]));
                (r.data && r.hasContent && r.contentType !== !1 || t.contentType) && u.setRequestHeader("Content-Type", r.contentType);
                u.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + lf + "; q=0.01" : "") : r.accepts["*"]);
                for (c in r.headers) u.setRequestHeader(c, r.headers[c]);
                if (r.beforeSend && (r.beforeSend.call(o, u, r) === !1 || 2 === e)) return u.abort();
                ut = "abort";
                for (c in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) u[c](r[c]);
                if (a = vf(bi, r, t, u)) {
                    u.readyState = 1;
                    l && d.trigger("ajaxSend", [u, r]);
                    r.async && r.timeout > 0 && (k = setTimeout(function() {
                        u.abort("timeout")
                    }, r.timeout));
                    try {
                        e = 1;
                        a.send(it, w)
                    } catch (ft) {
                        if (!(2 > e)) throw ft;
                        w(-1, ft)
                    }
                } else w(-1, "No Transport");
                return u
            },
            getJSON: function(n, t, r) {
                return i.get(n, t, r, "json")
            },
            getScript: function(n, t) {
                return i.get(n, void 0, t, "script")
            }
        });
        i.each(["get", "post"], function(n, t) {
            i[t] = function(n, r, u, f) {
                return i.isFunction(r) && (f = f || u, u = r, r = void 0), i.ajax({
                    url: n,
                    type: t,
                    dataType: f,
                    data: r,
                    success: u
                })
            }
        });
        i._evalUrl = function(n) {
            return i.ajax({
                url: n,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        };
        i.fn.extend({
            wrapAll: function(n) {
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).wrapAll(n.call(this, t))
                });
                if (this[0]) {
                    var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]);
                    t.map(function() {
                        for (var n = this; n.firstChild && 1 === n.firstChild.nodeType;) n = n.firstChild;
                        return n
                    }).append(this)
                }
                return this
            },
            wrapInner: function(n) {
                return this.each(i.isFunction(n) ? function(t) {
                    i(this).wrapInner(n.call(this, t))
                } : function() {
                    var t = i(this),
                        r = t.contents();
                    r.length ? r.wrapAll(n) : t.append(n)
                })
            },
            wrap: function(n) {
                var t = i.isFunction(n);
                return this.each(function(r) {
                    i(this).wrapAll(t ? n.call(this, r) : n)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        i.expr.filters.hidden = function(n) {
            return n.offsetWidth <= 0 && n.offsetHeight <= 0 || !r.reliableHiddenOffsets() && "none" === (n.style && n.style.display || i.css(n, "display"))
        };
        i.expr.filters.visible = function(n) {
            return !i.expr.filters.hidden(n)
        };
        var yo = /%20/g,
            po = /\[\]$/,
            yf = /\r?\n/g,
            wo = /^(?:submit|button|image|reset|file)$/i,
            bo = /^(?:input|select|textarea|keygen)/i;
        i.param = function(n, t) {
            var r, u = [],
                f = function(n, t) {
                    t = i.isFunction(t) ? t() : null == t ? "" : t;
                    u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
                f(this.name, this.value)
            });
            else
                for (r in n) di(r, n[r], t, f);
            return u.join("&").replace(yo, "+")
        };
        i.fn.extend({
            serialize: function() {
                return i.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var n = i.prop(this, "elements");
                    return n ? i.makeArray(n) : this
                }).filter(function() {
                    var n = this.type;
                    return this.name && !i(this).is(":disabled") && bo.test(this.nodeName) && !wo.test(n) && (this.checked || !oi.test(n))
                }).map(function(n, t) {
                    var r = i(this).val();
                    return null == r ? null : i.isArray(r) ? i.map(r, function(n) {
                        return {
                            name: t.name,
                            value: n.replace(yf, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: r.replace(yf, "\r\n")
                    }
                }).get()
            }
        });
        i.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && pf() || go()
        } : pf;
        var ko = 0,
            ni = {},
            ht = i.ajaxSettings.xhr();
        return n.attachEvent && n.attachEvent("onunload", function() {
            for (var n in ni) ni[n](void 0, !0)
        }), r.cors = !!ht && "withCredentials" in ht, ht = r.ajax = !!ht, ht && i.ajaxTransport(function(n) {
            if (!n.crossDomain || r.cors) {
                var t;
                return {
                    send: function(r, u) {
                        var e, f = n.xhr(),
                            o = ++ko;
                        if (f.open(n.type, n.url, n.async, n.username, n.password), n.xhrFields)
                            for (e in n.xhrFields) f[e] = n.xhrFields[e];
                        n.mimeType && f.overrideMimeType && f.overrideMimeType(n.mimeType);
                        n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                        for (e in r) void 0 !== r[e] && f.setRequestHeader(e, r[e] + "");
                        f.send(n.hasContent && n.data || null);
                        t = function(r, e) {
                            var s, c, h;
                            if (t && (e || 4 === f.readyState))
                                if (delete ni[o], t = void 0, f.onreadystatechange = i.noop, e) 4 !== f.readyState && f.abort();
                                else {
                                    h = {};
                                    s = f.status;
                                    "string" == typeof f.responseText && (h.text = f.responseText);
                                    try {
                                        c = f.statusText
                                    } catch (l) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = h.text ? 200 : 404
                                }
                            h && u(s, c, h, f.getAllResponseHeaders())
                        };
                        n.async ? 4 === f.readyState ? setTimeout(t) : f.onreadystatechange = ni[o] = t : t()
                    },
                    abort: function() {
                        t && t(void 0, !0)
                    }
                }
            }
        }), i.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(n) {
                    return i.globalEval(n), n
                }
            }
        }), i.ajaxPrefilter("script", function(n) {
            void 0 === n.cache && (n.cache = !1);
            n.crossDomain && (n.type = "GET", n.global = !1)
        }), i.ajaxTransport("script", function(n) {
            if (n.crossDomain) {
                var t, r = u.head || i("head")[0] || u.documentElement;
                return {
                    send: function(i, f) {
                        t = u.createElement("script");
                        t.async = !0;
                        n.scriptCharset && (t.charset = n.scriptCharset);
                        t.src = n.url;
                        t.onload = t.onreadystatechange = function(n, i) {
                            (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, i || f(200, "success"))
                        };
                        r.insertBefore(t, r.firstChild)
                    },
                    abort: function() {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        }), gi = [], ti = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var n = gi.pop() || i.expando + "_" + pi++;
                return this[n] = !0, n
            }
        }), i.ajaxPrefilter("json jsonp", function(t, r, u) {
            var f, o, e, s = t.jsonp !== !1 && (ti.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ti.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return (f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ti, "$1" + f) : t.jsonp !== !1 && (t.url += (wi.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() {
                return e || i.error(f + " was not called"), e[0]
            }, t.dataTypes[0] = "json", o = n[f], n[f] = function() {
                e = arguments
            }, u.always(function() {
                n[f] = o;
                t[f] && (t.jsonpCallback = r.jsonpCallback, gi.push(f));
                e && i.isFunction(o) && o(e[0]);
                e = o = void 0
            }), "script")
        }), i.parseHTML = function(n, t, r) {
            if (!n || "string" != typeof n) return null;
            "boolean" == typeof t && (r = t, t = !1);
            t = t || u;
            var f = er.exec(n),
                e = !r && [];
            return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && e.length && i(e).remove(), i.merge([], f.childNodes))
        }, nr = i.fn.load, i.fn.load = function(n, t, r) {
            if ("string" != typeof n && nr) return nr.apply(this, arguments);
            var u, o, s, f = this,
                e = n.indexOf(" ");
            return e >= 0 && (u = i.trim(n.slice(e, n.length)), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (s = "POST"), f.length > 0 && i.ajax({
                url: n,
                type: s,
                dataType: "html",
                data: t
            }).done(function(n) {
                o = arguments;
                f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
            }).complete(r && function(n, t) {
                f.each(r, o || [n.responseText, t, n])
            }), this
        }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
            i.fn[t] = function(n) {
                return this.on(t, n)
            }
        }), i.expr.filters.animated = function(n) {
            return i.grep(i.timers, function(t) {
                return n === t.elem
            }).length
        }, tr = n.document.documentElement, i.offset = {
            setOffset: function(n, t, r) {
                var e, o, s, h, u, c, v, l = i.css(n, "position"),
                    a = i(n),
                    f = {};
                "static" === l && (n.style.position = "relative");
                u = a.offset();
                s = i.css(n, "top");
                c = i.css(n, "left");
                v = ("absolute" === l || "fixed" === l) && i.inArray("auto", [s, c]) > -1;
                v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
                i.isFunction(t) && (t = t.call(n, r, u));
                null != t.top && (f.top = t.top - u.top + h);
                null != t.left && (f.left = t.left - u.left + o);
                "using" in t ? t.using.call(n, f) : a.css(f)
            }
        }, i.fn.extend({
            offset: function(n) {
                if (arguments.length) return void 0 === n ? this : this.each(function(t) {
                    i.offset.setOffset(this, n, t)
                });
                var t, f, u = {
                        top: 0,
                        left: 0
                    },
                    r = this[0],
                    e = r && r.ownerDocument;
                if (e) return t = e.documentElement, i.contains(t, r) ? (typeof r.getBoundingClientRect !== o && (u = r.getBoundingClientRect()), f = wf(e), {
                    top: u.top + (f.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: u.left + (f.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : u
            },
            position: function() {
                if (this[0]) {
                    var n, r, t = {
                            top: 0,
                            left: 0
                        },
                        u = this[0];
                    return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
                        top: r.top - t.top - i.css(u, "marginTop", !0),
                        left: r.left - t.left - i.css(u, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var n = this.offsetParent || tr; n && !i.nodeName(n, "html") && "static" === i.css(n, "position");) n = n.offsetParent;
                    return n || tr
                })
            }
        }), i.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(n, t) {
            var r = /Y/.test(t);
            i.fn[n] = function(u) {
                return b(this, function(n, u, f) {
                    var e = wf(n);
                    return void 0 === f ? e ? t in e ? e[t] : e.document.documentElement[u] : n[u] : void(e ? e.scrollTo(r ? i(e).scrollLeft() : f, r ? f : i(e).scrollTop()) : n[u] = f)
                }, n, u, arguments.length, null)
            }
        }), i.each(["top", "left"], function(n, t) {
            i.cssHooks[t] = au(r.pixelPosition, function(n, r) {
                if (r) return (r = d(n, t), pt.test(r) ? i(n).position()[t] + "px" : r)
            })
        }), i.each({
            Height: "height",
            Width: "width"
        }, function(n, t) {
            i.each({
                padding: "inner" + n,
                content: t,
                "": "outer" + n
            }, function(r, u) {
                i.fn[u] = function(u, f) {
                    var e = arguments.length && (r || "boolean" != typeof u),
                        o = r || (u === !0 || f === !0 ? "margin" : "border");
                    return b(this, function(t, r, u) {
                        var f;
                        return i.isWindow(t) ? t.document.documentElement["client" + n] : 9 === t.nodeType ? (f = t.documentElement, Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : void 0 === u ? i.css(t, r, o) : i.style(t, r, u, o)
                    }, t, e ? u : void 0, e, null)
                }
            })
        }), i.fn.size = function() {
            return this.length
        }, i.fn.andSelf = i.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return i
        }), bf = n.jQuery, kf = n.$, i.noConflict = function(t) {
            return n.$ === i && (n.$ = kf), t && n.jQuery === i && (n.jQuery = bf), i
        }, typeof t === o && (n.jQuery = n.$ = i), i
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(n) {
    "use strict";
    var t = n.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
}(jQuery); + function(n) {
    "use strict";

    function r(t) {
        var i = t.attr("data-target"),
            r;
        return i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
    }

    function u(t) {
        t && 3 === t.which || (n(o).remove(), n(i).each(function() {
            var u = n(this),
                i = r(u),
                f = {
                    relatedTarget: this
                };
            i.hasClass("open") && (t && "click" == t.type && /input|textarea/i.test(t.target.tagName) && n.contains(i[0], t.target) || (i.trigger(t = n.Event("hide.bs.dropdown", f)), t.isDefaultPrevented() || (u.attr("aria-expanded", "false"), i.removeClass("open").trigger("hidden.bs.dropdown", f))))
        }))
    }

    function e(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.dropdown");
            u || r.data("bs.dropdown", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    }
    var o = ".dropdown-backdrop",
        i = '[data-toggle="dropdown"]',
        t = function(t) {
            n(t).on("click.bs.dropdown", this.toggle)
        },
        f;
    t.VERSION = "3.3.5";
    t.prototype.toggle = function(t) {
        var f = n(this),
            i, o, e;
        if (!f.is(".disabled, :disabled")) {
            if (i = r(f), o = i.hasClass("open"), u(), !o) {
                if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", u), e = {
                        relatedTarget: this
                    }, i.trigger(t = n.Event("show.bs.dropdown", e)), t.isDefaultPrevented()) return;
                f.trigger("focus").attr("aria-expanded", "true");
                i.toggleClass("open").trigger("shown.bs.dropdown", e)
            }
            return !1
        }
    };
    t.prototype.keydown = function(t) {
        var e, o, s, h, f, u;
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
            if (o = r(e), s = o.hasClass("open"), !s && 27 != t.which || s && 27 == t.which) return 27 == t.which && o.find(i).trigger("focus"), e.trigger("click");
            h = " li:not(.disabled):visible a";
            f = o.find(".dropdown-menu" + h);
            f.length && (u = f.index(t.target), 38 == t.which && u > 0 && u--, 40 == t.which && u < f.length - 1 && u++, ~u || (u = 0), f.eq(u).trigger("focus"))
        }
    };
    f = n.fn.dropdown;
    n.fn.dropdown = e;
    n.fn.dropdown.Constructor = t;
    n.fn.dropdown.noConflict = function() {
        return n.fn.dropdown = f, this
    };
    n(document).on("click.bs.dropdown.data-api", u).on("click.bs.dropdown.data-api", ".dropdown form", function(n) {
        n.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", t.prototype.keydown)
}(jQuery); + function(n) {
    "use strict";

    function i(i, r) {
        return this.each(function() {
            var f = n(this),
                u = f.data("bs.modal"),
                e = n.extend({}, t.DEFAULTS, f.data(), "object" == typeof i && i);
            u || f.data("bs.modal", u = new t(this, e));
            "string" == typeof i ? u[i](r) : e.show && u.show(r)
        })
    }
    var t = function(t, i) {
            this.options = i;
            this.$body = n(document.body);
            this.$element = n(t);
            this.$dialog = this.$element.find(".modal-dialog");
            this.$backdrop = null;
            this.isShown = null;
            this.originalBodyPad = null;
            this.scrollbarWidth = 0;
            this.ignoreBackdropClick = !1;
            this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        },
        r;
    t.VERSION = "3.3.5";
    t.TRANSITION_DURATION = 300;
    t.BACKDROP_TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    };
    t.prototype.toggle = function(n) {
        return this.isShown ? this.hide() : this.show(n)
    };
    t.prototype.show = function(i) {
        var r = this,
            u = n.Event("show.bs.modal", {
                relatedTarget: i
            });
        this.$element.trigger(u);
        this.isShown || u.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            r.$element.one("mouseup.dismiss.bs.modal", function(t) {
                n(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var f = n.support.transition && r.$element.hasClass("fade"),
                u;
            r.$element.parent().length || r.$element.appendTo(r.$body);
            r.$element.show().scrollTop(0);
            r.adjustDialog();
            f && r.$element[0].offsetWidth;
            r.$element.addClass("in");
            r.enforceFocus();
            u = n.Event("shown.bs.modal", {
                relatedTarget: i
            });
            f ? r.$dialog.one("bsTransitionEnd", function() {
                r.$element.trigger("focus").trigger(u)
            }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
        }))
    };
    t.prototype.hide = function(i) {
        i && i.preventDefault();
        i = n.Event("hide.bs.modal");
        this.$element.trigger(i);
        this.isShown && !i.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
    };
    t.prototype.enforceFocus = function() {
        n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function(n) {
            this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
        }, this))
    };
    t.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", n.proxy(function(n) {
            27 == n.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    };
    t.prototype.resize = function() {
        this.isShown ? n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this)) : n(window).off("resize.bs.modal")
    };
    t.prototype.hideModal = function() {
        var n = this;
        this.$element.hide();
        this.backdrop(function() {
            n.$body.removeClass("modal-open");
            n.resetAdjustments();
            n.resetScrollbar();
            n.$element.trigger("hidden.bs.modal")
        })
    };
    t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    t.prototype.backdrop = function(i) {
        var e = this,
            f = this.$element.hasClass("fade") ? "fade" : "",
            r, u;
        if (this.isShown && this.options.backdrop) {
            if (r = n.support.transition && f, this.$backdrop = n(document.createElement("div")).addClass("modal-backdrop " + f).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", n.proxy(function(n) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(n.target === n.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
            r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), u = function() {
            e.removeBackdrop();
            i && i()
        }, n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : u()) : i && i()
    };
    t.prototype.handleUpdate = function() {
        this.adjustDialog()
    };
    t.prototype.adjustDialog = function() {
        var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : ""
        })
    };
    t.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    };
    t.prototype.checkScrollbar = function() {
        var n = window.innerWidth,
            t;
        n || (t = document.documentElement.getBoundingClientRect(), n = t.right - Math.abs(t.left));
        this.bodyIsOverflowing = document.body.clientWidth < n;
        this.scrollbarWidth = this.measureScrollbar()
    };
    t.prototype.setScrollbar = function() {
        var n = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth)
    };
    t.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    };
    t.prototype.measureScrollbar = function() {
        var n = document.createElement("div"),
            t;
        return n.className = "modal-scrollbar-measure", this.$body.append(n), t = n.offsetWidth - n.clientWidth, this.$body[0].removeChild(n), t
    };
    r = n.fn.modal;
    n.fn.modal = i;
    n.fn.modal.Constructor = t;
    n.fn.modal.noConflict = function() {
        return n.fn.modal = r, this
    };
    n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var r = n(this),
            f = r.attr("href"),
            u = n(r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, "")),
            e = u.data("bs.modal") ? "toggle" : n.extend({
                remote: !/#/.test(f) && f
            }, u.data(), r.data());
        r.is("a") && t.preventDefault();
        u.one("show.bs.modal", function(n) {
            n.isDefaultPrevented() || u.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        });
        i.call(u, e, this)
    })
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tooltip"),
                f = "object" == typeof i && i;
            (r || !/destroy|hide/.test(i)) && (r || u.data("bs.tooltip", r = new t(this, f)), "string" == typeof i && r[i]())
        })
    }
    var t = function(n, t) {
            this.type = null;
            this.options = null;
            this.enabled = null;
            this.timeout = null;
            this.hoverState = null;
            this.$element = null;
            this.inState = null;
            this.init("tooltip", n, t)
        },
        i;
    t.VERSION = "3.3.5";
    t.TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    };
    t.prototype.init = function(t, i, r) {
        var f, e, u, o, s;
        if (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.$viewport = this.options.viewport && n(n.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (f = this.options.trigger.split(" "), e = f.length; e--;)
            if (u = f[e], "click" == u) this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
            else "manual" != u && (o = "hover" == u ? "mouseenter" : "focusin", s = "hover" == u ? "mouseleave" : "focusout", this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this)));
        this.options.selector ? this._options = n.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    };
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    };
    t.prototype.getOptions = function(t) {
        return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    };
    t.prototype.getDelegateOptions = function() {
        var t = {},
            i = this.getDefaults();
        return this._options && n.each(this._options, function(n, r) {
            i[n] != r && (t[n] = r)
        }), t
    };
    t.prototype.enter = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState["focusin" == t.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    };
    t.prototype.isInStateTrue = function() {
        for (var n in this.inState)
            if (this.inState[n]) return !0;
        return !1
    };
    t.prototype.leave = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState["focusout" == t.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    };
    t.prototype.show = function() {
        var c = n.Event("show.bs." + this.type),
            l, p, e, w, h;
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(c), l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), c.isDefaultPrevented() || !l) return;
            var u = this,
                r = this.tip(),
                a = this.getUID(this.type);
            this.setContent();
            r.attr("id", a);
            this.$element.attr("aria-describedby", a);
            this.options.animation && r.addClass("fade");
            var i = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                v = /\s?auto?\s?/i,
                y = v.test(i);
            y && (i = i.replace(v, "") || "top");
            r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i).data("bs." + this.type, this);
            this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            this.$element.trigger("inserted.bs." + this.type);
            var f = this.getPosition(),
                o = r[0].offsetWidth,
                s = r[0].offsetHeight;
            y && (p = i, e = this.getPosition(this.$viewport), i = "bottom" == i && f.bottom + s > e.bottom ? "top" : "top" == i && f.top - s < e.top ? "bottom" : "right" == i && f.right + o > e.width ? "left" : "left" == i && f.left - o < e.left ? "right" : i, r.removeClass(p).addClass(i));
            w = this.getCalculatedOffset(i, f, o, s);
            this.applyPlacement(w, i);
            h = function() {
                var n = u.hoverState;
                u.$element.trigger("shown.bs." + u.type);
                u.hoverState = null;
                "out" == n && u.leave(u)
            };
            n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION) : h()
        }
    };
    t.prototype.applyPlacement = function(t, i) {
        var r = this.tip(),
            l = r[0].offsetWidth,
            e = r[0].offsetHeight,
            o = parseInt(r.css("margin-top"), 10),
            s = parseInt(r.css("margin-left"), 10),
            h, f, u;
        isNaN(o) && (o = 0);
        isNaN(s) && (s = 0);
        t.top += o;
        t.left += s;
        n.offset.setOffset(r[0], n.extend({
            using: function(n) {
                r.css({
                    top: Math.round(n.top),
                    left: Math.round(n.left)
                })
            }
        }, t), 0);
        r.addClass("in");
        h = r[0].offsetWidth;
        f = r[0].offsetHeight;
        "top" == i && f != e && (t.top = t.top + e - f);
        u = this.getViewportAdjustedDelta(i, t, h, f);
        u.left ? t.left += u.left : t.top += u.top;
        var c = /top|bottom/.test(i),
            a = c ? 2 * u.left - l + h : 2 * u.top - e + f,
            v = c ? "offsetWidth" : "offsetHeight";
        r.offset(t);
        this.replaceArrow(a, r[0][v], c)
    };
    t.prototype.replaceArrow = function(n, t, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "")
    };
    t.prototype.setContent = function() {
        var n = this.tip(),
            t = this.getTitle();
        n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
        n.removeClass("fade in top bottom left right")
    };
    t.prototype.hide = function(i) {
        function f() {
            "in" != u.hoverState && r.detach();
            u.$element.removeAttr("aria-describedby").trigger("hidden.bs." + u.type);
            i && i()
        }
        var u = this,
            r = n(this.$tip),
            e = n.Event("hide.bs." + this.type);
        return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", f).emulateTransitionEnd(t.TRANSITION_DURATION) : f(), this.hoverState = null, this)
    };
    t.prototype.fixTitle = function() {
        var n = this.$element;
        (n.attr("title") || "string" != typeof n.attr("data-original-title")) && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
    };
    t.prototype.hasContent = function() {
        return this.getTitle()
    };
    t.prototype.getPosition = function(t) {
        t = t || this.$element;
        var u = t[0],
            r = "BODY" == u.tagName,
            i = u.getBoundingClientRect();
        null == i.width && (i = n.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var f = r ? {
                top: 0,
                left: 0
            } : t.offset(),
            e = {
                scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            o = r ? {
                width: n(window).width(),
                height: n(window).height()
            } : null;
        return n.extend({}, i, e, o, f)
    };
    t.prototype.getCalculatedOffset = function(n, t, i, r) {
        return "bottom" == n ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - i / 2
        } : "top" == n ? {
            top: t.top - r,
            left: t.left + t.width / 2 - i / 2
        } : "left" == n ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - i
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    };
    t.prototype.getViewportAdjustedDelta = function(n, t, i, r) {
        var f = {
                top: 0,
                left: 0
            },
            e, u, o, s, h, c;
        return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0, u = this.getPosition(this.$viewport), /right|left/.test(n) ? (o = t.top - e - u.scroll, s = t.top + e - u.scroll + r, o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e, c = t.left + e + i, h < u.left ? f.left = u.left - h : c > u.right && (f.left = u.left + u.width - c)), f) : f
    };
    t.prototype.getTitle = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    };
    t.prototype.getUID = function(n) {
        do n += ~~(1e6 * Math.random()); while (document.getElementById(n));
        return n
    };
    t.prototype.tip = function() {
        if (!this.$tip && (this.$tip = n(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    };
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    };
    t.prototype.enable = function() {
        this.enabled = !0
    };
    t.prototype.disable = function() {
        this.enabled = !1
    };
    t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    };
    t.prototype.toggle = function(t) {
        var i = this;
        t && (i = n(t.currentTarget).data("bs." + this.type), i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)));
        t ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    };
    t.prototype.destroy = function() {
        var n = this;
        clearTimeout(this.timeout);
        this.hide(function() {
            n.$element.off("." + n.type).removeData("bs." + n.type);
            n.$tip && n.$tip.detach();
            n.$tip = null;
            n.$arrow = null;
            n.$viewport = null
        })
    };
    i = n.fn.tooltip;
    n.fn.tooltip = r;
    n.fn.tooltip.Constructor = t;
    n.fn.tooltip.noConflict = function() {
        return n.fn.tooltip = i, this
    }
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.popover"),
                f = "object" == typeof i && i;
            (r || !/destroy|hide/.test(i)) && (r || u.data("bs.popover", r = new t(this, f)), "string" == typeof i && r[i]())
        })
    }
    var t = function(n, t) {
            this.init("popover", n, t)
        },
        i;
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.VERSION = "3.3.5";
    t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
    });
    t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype);
    t.prototype.constructor = t;
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    };
    t.prototype.setContent = function() {
        var n = this.tip(),
            i = this.getTitle(),
            t = this.getContent();
        n.find(".popover-title")[this.options.html ? "html" : "text"](i);
        n.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof t ? "html" : "append" : "text"](t);
        n.removeClass("fade top bottom left right in");
        n.find(".popover-title").html() || n.find(".popover-title").hide()
    };
    t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    };
    t.prototype.getContent = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content)
    };
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    i = n.fn.popover;
    n.fn.popover = r;
    n.fn.popover.Constructor = t;
    n.fn.popover.noConflict = function() {
        return n.fn.popover = i, this
    }
}(jQuery);
! function(n) {
    "undefined" == typeof n.fn.each2 && n.extend(n.fn, {
        each2: function(t) {
            for (var i = n([0]), r = -1, u = this.length; ++r < u && (i.context = i[0] = this[r]) && t.call(i[0], r, i) !== !1;);
            return this
        }
    })
}(jQuery),
function(n, t) {
    "use strict";

    function d(t) {
        var i = n(document.createTextNode(""));
        t.before(i);
        i.before(t);
        i.remove()
    }

    function h(n) {
        function t(n) {
            return dt[n] || n
        }
        return n.replace(/[^\u0000-\u007E]/g, t)
    }

    function e(n, t) {
        for (var i = 0, r = t.length; r > i; i += 1)
            if (f(n, t[i])) return i;
        return -1
    }

    function ct() {
        var t = n(kt),
            i;
        return t.appendTo("body"), i = {
            width: t.width() - t[0].clientWidth,
            height: t.height() - t[0].clientHeight
        }, t.remove(), i
    }

    function f(n, i) {
        return n === i ? !0 : n === t || i === t ? !1 : null === n || null === i ? !1 : n.constructor === String ? n + "" == i + "" : i.constructor === String ? i + "" == n + "" : !1
    }

    function v(t, i) {
        var r, u, f;
        if (null === t || t.length < 1) return [];
        for (r = t.split(i), u = 0, f = r.length; f > u; u += 1) r[u] = n.trim(r[u]);
        return r
    }

    function g(n) {
        return n.outerWidth(!1) - n.width()
    }

    function nt(i) {
        var r = "keyup-change-value";
        i.on("keydown", function() {
            n.data(i, r) === t && n.data(i, r, i.val())
        });
        i.on("keyup", function() {
            var u = n.data(i, r);
            u !== t && i.val() !== u && (n.removeData(i, r), i.trigger("keyup-change"))
        })
    }

    function lt(i) {
        i.on("mousemove", function(i) {
            var r = k;
            (r === t || r.x !== i.pageX || r.y !== i.pageY) && n(i.target).trigger("mousemove-filtered", i)
        })
    }

    function tt(n, i, r) {
        r = r || t;
        var u;
        return function() {
            var t = arguments;
            window.clearTimeout(u);
            u = window.setTimeout(function() {
                i.apply(r, t)
            }, n)
        }
    }

    function at(n, t) {
        var i = tt(n, function(n) {
            t.trigger("scroll-debounced", n)
        });
        t.on("scroll", function(n) {
            e(n.target, t.get()) >= 0 && i(n)
        })
    }

    function vt(n) {
        n[0] !== document.activeElement && window.setTimeout(function() {
            var i, t = n[0],
                r = n.val().length,
                u;
            n.focus();
            u = t.offsetWidth > 0 || t.offsetHeight > 0;
            u && t === document.activeElement && (t.setSelectionRange ? t.setSelectionRange(r, r) : t.createTextRange && (i = t.createTextRange(), i.collapse(!1), i.select()))
        }, 0)
    }

    function yt(t) {
        var i, r, u;
        return t = n(t)[0], i = 0, r = 0, "selectionStart" in t ? (i = t.selectionStart, r = t.selectionEnd - i) : "selection" in document && (t.focus(), u = document.selection.createRange(), r = document.selection.createRange().text.length, u.moveStart("character", -t.value.length), i = u.text.length - r), {
            offset: i,
            length: r
        }
    }

    function r(n) {
        n.preventDefault();
        n.stopPropagation()
    }

    function pt(n) {
        n.preventDefault();
        n.stopImmediatePropagation()
    }

    function wt(t) {
        if (!s) {
            var i = t[0].currentStyle || window.getComputedStyle(t[0], null);
            s = n(document.createElement("div")).css({
                position: "absolute",
                left: "-10000px",
                top: "-10000px",
                display: "none",
                fontSize: i.fontSize,
                fontFamily: i.fontFamily,
                fontStyle: i.fontStyle,
                fontWeight: i.fontWeight,
                letterSpacing: i.letterSpacing,
                textTransform: i.textTransform,
                whiteSpace: "nowrap"
            });
            s.attr("class", "select2-sizer");
            n("body").append(s)
        }
        return s.text(t.val()), s.width()
    }

    function l(t, i, r) {
        var u, f, e = [];
        u = n.trim(t.attr("class"));
        u && (u = "" + u, n(u.split(/\s+/)).each2(function() {
            0 === this.indexOf("select2-") && e.push(this)
        }));
        u = n.trim(i.attr("class"));
        u && (u = "" + u, n(u.split(/\s+/)).each2(function() {
            0 !== this.indexOf("select2-") && (f = r(this), f && e.push(f))
        }));
        t.attr("class", e.join(" "))
    }

    function it(n, t, i, r) {
        var u = h(n.toUpperCase()).indexOf(h(t.toUpperCase())),
            f = t.length;
        return 0 > u ? (i.push(r(n)), void 0) : (i.push(r(n.substring(0, u))), i.push("<span class='select2-match'>"), i.push(r(n.substring(u, u + f))), i.push("<\/span>"), i.push(r(n.substring(u + f, n.length))), void 0)
    }

    function rt(n) {
        var t = {
            "\\": "&#92;",
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#47;"
        };
        return String(n).replace(/[&<>"'\/\\]/g, function(n) {
            return t[n]
        })
    }

    function ut(i) {
        var f, r = null,
            e = i.quietMillis || 100,
            o = i.url,
            u = this;
        return function(s) {
            window.clearTimeout(f);
            f = window.setTimeout(function() {
                var e = i.data,
                    f = o,
                    c = i.transport || n.fn.select2.ajaxDefaults.transport,
                    l = {
                        type: i.type || "GET",
                        cache: i.cache || !1,
                        jsonpCallback: i.jsonpCallback || t,
                        dataType: i.dataType || "json"
                    },
                    h = n.extend({}, n.fn.select2.ajaxDefaults.params, l);
                e = e ? e.call(u, s.term, s.page, s.context) : null;
                f = "function" == typeof f ? f.call(u, s.term, s.page, s.context) : f;
                r && "function" == typeof r.abort && r.abort();
                i.params && (n.isFunction(i.params) ? n.extend(h, i.params.call(u)) : n.extend(h, i.params));
                n.extend(h, {
                    url: f,
                    dataType: i.dataType,
                    data: e,
                    success: function(n) {
                        var t = i.results(n, s.page, s);
                        s.callback(t)
                    }
                });
                r = c.call(u, h)
            }, e)
        }
    }

    function ft(t) {
        var e, u, i = t,
            r = function(n) {
                return "" + n.text
            },
            f;
        return n.isArray(i) && (u = i, i = {
                results: u
            }), n.isFunction(i) === !1 && (u = i, i = function() {
                return u
            }), f = i(), f.text && (r = f.text, n.isFunction(r) || (e = f.text, r = function(n) {
                return n[e]
            })),
            function(t) {
                var u, f = t.term,
                    e = {
                        results: []
                    };
                return "" === f ? (t.callback(i()), void 0) : (u = function(i, e) {
                    var o, s;
                    if (i = i[0], i.children) {
                        o = {};
                        for (s in i) i.hasOwnProperty(s) && (o[s] = i[s]);
                        o.children = [];
                        n(i.children).each2(function(n, t) {
                            u(t, o.children)
                        });
                        (o.children.length || t.matcher(f, r(o), i)) && e.push(o)
                    } else t.matcher(f, r(i), i) && e.push(i)
                }, n(i().results).each2(function(n, t) {
                    u(t, e.results)
                }), t.callback(e), void 0)
            }
    }

    function et(i) {
        var r = n.isFunction(i);
        return function(u) {
            var f = u.term,
                e = {
                    results: []
                },
                o = r ? i(u) : i;
            n.isArray(o) && (n(o).each(function() {
                var n = this.text !== t,
                    i = n ? this.text : this;
                ("" === f || u.matcher(f, i)) && e.results.push(n ? this : {
                    id: this,
                    text: this
                })
            }), u.callback(e))
        }
    }

    function o(t, i) {
        if (n.isFunction(t)) return !0;
        if (!t) return !1;
        if ("string" == typeof t) return !0;
        throw new Error(i + " must be a string, function, or falsy value");
    }

    function u(t, i) {
        if (n.isFunction(t)) {
            var r = Array.prototype.slice.call(arguments, 2);
            return t.apply(i, r)
        }
        return t
    }

    function ot(t) {
        var i = 0;
        return n.each(t, function(n, t) {
            t.children ? i += ot(t.children) : i++
        }), i
    }

    function bt(n, i, r, u) {
        var e, s, o, h, c, a = n,
            l = !1;
        if (!u.createSearchChoice || !u.tokenSeparators || u.tokenSeparators.length < 1) return t;
        for (;;) {
            for (s = -1, o = 0, h = u.tokenSeparators.length; h > o && (c = u.tokenSeparators[o], s = n.indexOf(c), !(s >= 0)); o++);
            if (0 > s) break;
            if (e = n.substring(0, s), n = n.substring(s + c.length), e.length > 0 && (e = u.createSearchChoice.call(this, e, i), e !== t && null !== e && u.id(e) !== t && null !== u.id(e))) {
                for (l = !1, o = 0, h = i.length; h > o; o++)
                    if (f(u.id(e), u.id(i[o]))) {
                        l = !0;
                        break
                    }
                l || r(e)
            }
        }
        if (a !== n) return n
    }

    function y() {
        var t = this;
        n.each(arguments, function(n, i) {
            t[i].remove();
            t[i] = null
        })
    }

    function p(t, i) {
        var r = function() {};
        return r.prototype = new t, r.prototype.constructor = r, r.prototype.parent = t.prototype, r.prototype = n.extend(r.prototype, i), r
    }
    if (window.Select2 === t) {
        var a, st, ht, c, s, w, b, k = {
                x: 0,
                y: 0
            },
            i = {
                TAB: 9,
                ENTER: 13,
                ESC: 27,
                SPACE: 32,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                HOME: 36,
                END: 35,
                BACKSPACE: 8,
                DELETE: 46,
                isArrow: function(n) {
                    switch (n = n.which ? n.which : n) {
                        case i.LEFT:
                        case i.RIGHT:
                        case i.UP:
                        case i.DOWN:
                            return !0
                    }
                    return !1
                },
                isControl: function(n) {
                    var t = n.which;
                    switch (t) {
                        case i.SHIFT:
                        case i.CTRL:
                        case i.ALT:
                            return !0
                    }
                    return n.metaKey ? !0 : !1
                },
                isFunctionKey: function(n) {
                    return n = n.which ? n.which : n, n >= 112 && 123 >= n
                }
            },
            kt = "<div class='select2-measure-scrollbar'><\/div>",
            dt = {
                "Ⓐ": "A",
                "Ａ": "A",
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ầ": "A",
                "Ấ": "A",
                "Ẫ": "A",
                "Ẩ": "A",
                "Ã": "A",
                "Ā": "A",
                "Ă": "A",
                "Ằ": "A",
                "Ắ": "A",
                "Ẵ": "A",
                "Ẳ": "A",
                "Ȧ": "A",
                "Ǡ": "A",
                "Ä": "A",
                "Ǟ": "A",
                "Ả": "A",
                "Å": "A",
                "Ǻ": "A",
                "Ǎ": "A",
                "Ȁ": "A",
                "Ȃ": "A",
                "Ạ": "A",
                "Ậ": "A",
                "Ặ": "A",
                "Ḁ": "A",
                "Ą": "A",
                "Ⱥ": "A",
                "Ɐ": "A",
                "Ꜳ": "AA",
                "Æ": "AE",
                "Ǽ": "AE",
                "Ǣ": "AE",
                "Ꜵ": "AO",
                "Ꜷ": "AU",
                "Ꜹ": "AV",
                "Ꜻ": "AV",
                "Ꜽ": "AY",
                "Ⓑ": "B",
                "Ｂ": "B",
                "Ḃ": "B",
                "Ḅ": "B",
                "Ḇ": "B",
                "Ƀ": "B",
                "Ƃ": "B",
                "Ɓ": "B",
                "Ⓒ": "C",
                "Ｃ": "C",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "Ç": "C",
                "Ḉ": "C",
                "Ƈ": "C",
                "Ȼ": "C",
                "Ꜿ": "C",
                "Ⓓ": "D",
                "Ｄ": "D",
                "Ḋ": "D",
                "Ď": "D",
                "Ḍ": "D",
                "Ḑ": "D",
                "Ḓ": "D",
                "Ḏ": "D",
                "Đ": "D",
                "Ƌ": "D",
                "Ɗ": "D",
                "Ɖ": "D",
                "Ꝺ": "D",
                "Ǳ": "DZ",
                "Ǆ": "DZ",
                "ǲ": "Dz",
                "ǅ": "Dz",
                "Ⓔ": "E",
                "Ｅ": "E",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ề": "E",
                "Ế": "E",
                "Ễ": "E",
                "Ể": "E",
                "Ẽ": "E",
                "Ē": "E",
                "Ḕ": "E",
                "Ḗ": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ë": "E",
                "Ẻ": "E",
                "Ě": "E",
                "Ȅ": "E",
                "Ȇ": "E",
                "Ẹ": "E",
                "Ệ": "E",
                "Ȩ": "E",
                "Ḝ": "E",
                "Ę": "E",
                "Ḙ": "E",
                "Ḛ": "E",
                "Ɛ": "E",
                "Ǝ": "E",
                "Ⓕ": "F",
                "Ｆ": "F",
                "Ḟ": "F",
                "Ƒ": "F",
                "Ꝼ": "F",
                "Ⓖ": "G",
                "Ｇ": "G",
                "Ǵ": "G",
                "Ĝ": "G",
                "Ḡ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ǧ": "G",
                "Ģ": "G",
                "Ǥ": "G",
                "Ɠ": "G",
                "Ꞡ": "G",
                "Ᵹ": "G",
                "Ꝿ": "G",
                "Ⓗ": "H",
                "Ｈ": "H",
                "Ĥ": "H",
                "Ḣ": "H",
                "Ḧ": "H",
                "Ȟ": "H",
                "Ḥ": "H",
                "Ḩ": "H",
                "Ḫ": "H",
                "Ħ": "H",
                "Ⱨ": "H",
                "Ⱶ": "H",
                "Ɥ": "H",
                "Ⓘ": "I",
                "Ｉ": "I",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "İ": "I",
                "Ï": "I",
                "Ḯ": "I",
                "Ỉ": "I",
                "Ǐ": "I",
                "Ȉ": "I",
                "Ȋ": "I",
                "Ị": "I",
                "Į": "I",
                "Ḭ": "I",
                "Ɨ": "I",
                "Ⓙ": "J",
                "Ｊ": "J",
                "Ĵ": "J",
                "Ɉ": "J",
                "Ⓚ": "K",
                "Ｋ": "K",
                "Ḱ": "K",
                "Ǩ": "K",
                "Ḳ": "K",
                "Ķ": "K",
                "Ḵ": "K",
                "Ƙ": "K",
                "Ⱪ": "K",
                "Ꝁ": "K",
                "Ꝃ": "K",
                "Ꝅ": "K",
                "Ꞣ": "K",
                "Ⓛ": "L",
                "Ｌ": "L",
                "Ŀ": "L",
                "Ĺ": "L",
                "Ľ": "L",
                "Ḷ": "L",
                "Ḹ": "L",
                "Ļ": "L",
                "Ḽ": "L",
                "Ḻ": "L",
                "Ł": "L",
                "Ƚ": "L",
                "Ɫ": "L",
                "Ⱡ": "L",
                "Ꝉ": "L",
                "Ꝇ": "L",
                "Ꞁ": "L",
                "Ǉ": "LJ",
                "ǈ": "Lj",
                "Ⓜ": "M",
                "Ｍ": "M",
                "Ḿ": "M",
                "Ṁ": "M",
                "Ṃ": "M",
                "Ɱ": "M",
                "Ɯ": "M",
                "Ⓝ": "N",
                "Ｎ": "N",
                "Ǹ": "N",
                "Ń": "N",
                "Ñ": "N",
                "Ṅ": "N",
                "Ň": "N",
                "Ṇ": "N",
                "Ņ": "N",
                "Ṋ": "N",
                "Ṉ": "N",
                "Ƞ": "N",
                "Ɲ": "N",
                "Ꞑ": "N",
                "Ꞥ": "N",
                "Ǌ": "NJ",
                "ǋ": "Nj",
                "Ⓞ": "O",
                "Ｏ": "O",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Ồ": "O",
                "Ố": "O",
                "Ỗ": "O",
                "Ổ": "O",
                "Õ": "O",
                "Ṍ": "O",
                "Ȭ": "O",
                "Ṏ": "O",
                "Ō": "O",
                "Ṑ": "O",
                "Ṓ": "O",
                "Ŏ": "O",
                "Ȯ": "O",
                "Ȱ": "O",
                "Ö": "O",
                "Ȫ": "O",
                "Ỏ": "O",
                "Ő": "O",
                "Ǒ": "O",
                "Ȍ": "O",
                "Ȏ": "O",
                "Ơ": "O",
                "Ờ": "O",
                "Ớ": "O",
                "Ỡ": "O",
                "Ở": "O",
                "Ợ": "O",
                "Ọ": "O",
                "Ộ": "O",
                "Ǫ": "O",
                "Ǭ": "O",
                "Ø": "O",
                "Ǿ": "O",
                "Ɔ": "O",
                "Ɵ": "O",
                "Ꝋ": "O",
                "Ꝍ": "O",
                "Ƣ": "OI",
                "Ꝏ": "OO",
                "Ȣ": "OU",
                "Ⓟ": "P",
                "Ｐ": "P",
                "Ṕ": "P",
                "Ṗ": "P",
                "Ƥ": "P",
                "Ᵽ": "P",
                "Ꝑ": "P",
                "Ꝓ": "P",
                "Ꝕ": "P",
                "Ⓠ": "Q",
                "Ｑ": "Q",
                "Ꝗ": "Q",
                "Ꝙ": "Q",
                "Ɋ": "Q",
                "Ⓡ": "R",
                "Ｒ": "R",
                "Ŕ": "R",
                "Ṙ": "R",
                "Ř": "R",
                "Ȑ": "R",
                "Ȓ": "R",
                "Ṛ": "R",
                "Ṝ": "R",
                "Ŗ": "R",
                "Ṟ": "R",
                "Ɍ": "R",
                "Ɽ": "R",
                "Ꝛ": "R",
                "Ꞧ": "R",
                "Ꞃ": "R",
                "Ⓢ": "S",
                "Ｓ": "S",
                "ẞ": "S",
                "Ś": "S",
                "Ṥ": "S",
                "Ŝ": "S",
                "Ṡ": "S",
                "Š": "S",
                "Ṧ": "S",
                "Ṣ": "S",
                "Ṩ": "S",
                "Ș": "S",
                "Ş": "S",
                "Ȿ": "S",
                "Ꞩ": "S",
                "Ꞅ": "S",
                "Ⓣ": "T",
                "Ｔ": "T",
                "Ṫ": "T",
                "Ť": "T",
                "Ṭ": "T",
                "Ț": "T",
                "Ţ": "T",
                "Ṱ": "T",
                "Ṯ": "T",
                "Ŧ": "T",
                "Ƭ": "T",
                "Ʈ": "T",
                "Ⱦ": "T",
                "Ꞇ": "T",
                "Ꜩ": "TZ",
                "Ⓤ": "U",
                "Ｕ": "U",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ũ": "U",
                "Ṹ": "U",
                "Ū": "U",
                "Ṻ": "U",
                "Ŭ": "U",
                "Ü": "U",
                "Ǜ": "U",
                "Ǘ": "U",
                "Ǖ": "U",
                "Ǚ": "U",
                "Ủ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ǔ": "U",
                "Ȕ": "U",
                "Ȗ": "U",
                "Ư": "U",
                "Ừ": "U",
                "Ứ": "U",
                "Ữ": "U",
                "Ử": "U",
                "Ự": "U",
                "Ụ": "U",
                "Ṳ": "U",
                "Ų": "U",
                "Ṷ": "U",
                "Ṵ": "U",
                "Ʉ": "U",
                "Ⓥ": "V",
                "Ｖ": "V",
                "Ṽ": "V",
                "Ṿ": "V",
                "Ʋ": "V",
                "Ꝟ": "V",
                "Ʌ": "V",
                "Ꝡ": "VY",
                "Ⓦ": "W",
                "Ｗ": "W",
                "Ẁ": "W",
                "Ẃ": "W",
                "Ŵ": "W",
                "Ẇ": "W",
                "Ẅ": "W",
                "Ẉ": "W",
                "Ⱳ": "W",
                "Ⓧ": "X",
                "Ｘ": "X",
                "Ẋ": "X",
                "Ẍ": "X",
                "Ⓨ": "Y",
                "Ｙ": "Y",
                "Ỳ": "Y",
                "Ý": "Y",
                "Ŷ": "Y",
                "Ỹ": "Y",
                "Ȳ": "Y",
                "Ẏ": "Y",
                "Ÿ": "Y",
                "Ỷ": "Y",
                "Ỵ": "Y",
                "Ƴ": "Y",
                "Ɏ": "Y",
                "Ỿ": "Y",
                "Ⓩ": "Z",
                "Ｚ": "Z",
                "Ź": "Z",
                "Ẑ": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "Ẓ": "Z",
                "Ẕ": "Z",
                "Ƶ": "Z",
                "Ȥ": "Z",
                "Ɀ": "Z",
                "Ⱬ": "Z",
                "Ꝣ": "Z",
                "ⓐ": "a",
                "ａ": "a",
                "ẚ": "a",
                "à": "a",
                "á": "a",
                "â": "a",
                "ầ": "a",
                "ấ": "a",
                "ẫ": "a",
                "ẩ": "a",
                "ã": "a",
                "ā": "a",
                "ă": "a",
                "ằ": "a",
                "ắ": "a",
                "ẵ": "a",
                "ẳ": "a",
                "ȧ": "a",
                "ǡ": "a",
                "ä": "a",
                "ǟ": "a",
                "ả": "a",
                "å": "a",
                "ǻ": "a",
                "ǎ": "a",
                "ȁ": "a",
                "ȃ": "a",
                "ạ": "a",
                "ậ": "a",
                "ặ": "a",
                "ḁ": "a",
                "ą": "a",
                "ⱥ": "a",
                "ɐ": "a",
                "ꜳ": "aa",
                "æ": "ae",
                "ǽ": "ae",
                "ǣ": "ae",
                "ꜵ": "ao",
                "ꜷ": "au",
                "ꜹ": "av",
                "ꜻ": "av",
                "ꜽ": "ay",
                "ⓑ": "b",
                "ｂ": "b",
                "ḃ": "b",
                "ḅ": "b",
                "ḇ": "b",
                "ƀ": "b",
                "ƃ": "b",
                "ɓ": "b",
                "ⓒ": "c",
                "ｃ": "c",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "ç": "c",
                "ḉ": "c",
                "ƈ": "c",
                "ȼ": "c",
                "ꜿ": "c",
                "ↄ": "c",
                "ⓓ": "d",
                "ｄ": "d",
                "ḋ": "d",
                "ď": "d",
                "ḍ": "d",
                "ḑ": "d",
                "ḓ": "d",
                "ḏ": "d",
                "đ": "d",
                "ƌ": "d",
                "ɖ": "d",
                "ɗ": "d",
                "ꝺ": "d",
                "ǳ": "dz",
                "ǆ": "dz",
                "ⓔ": "e",
                "ｅ": "e",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ề": "e",
                "ế": "e",
                "ễ": "e",
                "ể": "e",
                "ẽ": "e",
                "ē": "e",
                "ḕ": "e",
                "ḗ": "e",
                "ĕ": "e",
                "ė": "e",
                "ë": "e",
                "ẻ": "e",
                "ě": "e",
                "ȅ": "e",
                "ȇ": "e",
                "ẹ": "e",
                "ệ": "e",
                "ȩ": "e",
                "ḝ": "e",
                "ę": "e",
                "ḙ": "e",
                "ḛ": "e",
                "ɇ": "e",
                "ɛ": "e",
                "ǝ": "e",
                "ⓕ": "f",
                "ｆ": "f",
                "ḟ": "f",
                "ƒ": "f",
                "ꝼ": "f",
                "ⓖ": "g",
                "ｇ": "g",
                "ǵ": "g",
                "ĝ": "g",
                "ḡ": "g",
                "ğ": "g",
                "ġ": "g",
                "ǧ": "g",
                "ģ": "g",
                "ǥ": "g",
                "ɠ": "g",
                "ꞡ": "g",
                "ᵹ": "g",
                "ꝿ": "g",
                "ⓗ": "h",
                "ｈ": "h",
                "ĥ": "h",
                "ḣ": "h",
                "ḧ": "h",
                "ȟ": "h",
                "ḥ": "h",
                "ḩ": "h",
                "ḫ": "h",
                "ẖ": "h",
                "ħ": "h",
                "ⱨ": "h",
                "ⱶ": "h",
                "ɥ": "h",
                "ƕ": "hv",
                "ⓘ": "i",
                "ｉ": "i",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "ï": "i",
                "ḯ": "i",
                "ỉ": "i",
                "ǐ": "i",
                "ȉ": "i",
                "ȋ": "i",
                "ị": "i",
                "į": "i",
                "ḭ": "i",
                "ɨ": "i",
                "ı": "i",
                "ⓙ": "j",
                "ｊ": "j",
                "ĵ": "j",
                "ǰ": "j",
                "ɉ": "j",
                "ⓚ": "k",
                "ｋ": "k",
                "ḱ": "k",
                "ǩ": "k",
                "ḳ": "k",
                "ķ": "k",
                "ḵ": "k",
                "ƙ": "k",
                "ⱪ": "k",
                "ꝁ": "k",
                "ꝃ": "k",
                "ꝅ": "k",
                "ꞣ": "k",
                "ⓛ": "l",
                "ｌ": "l",
                "ŀ": "l",
                "ĺ": "l",
                "ľ": "l",
                "ḷ": "l",
                "ḹ": "l",
                "ļ": "l",
                "ḽ": "l",
                "ḻ": "l",
                "ſ": "l",
                "ł": "l",
                "ƚ": "l",
                "ɫ": "l",
                "ⱡ": "l",
                "ꝉ": "l",
                "ꞁ": "l",
                "ꝇ": "l",
                "ǉ": "lj",
                "ⓜ": "m",
                "ｍ": "m",
                "ḿ": "m",
                "ṁ": "m",
                "ṃ": "m",
                "ɱ": "m",
                "ɯ": "m",
                "ⓝ": "n",
                "ｎ": "n",
                "ǹ": "n",
                "ń": "n",
                "ñ": "n",
                "ṅ": "n",
                "ň": "n",
                "ṇ": "n",
                "ņ": "n",
                "ṋ": "n",
                "ṉ": "n",
                "ƞ": "n",
                "ɲ": "n",
                "ŉ": "n",
                "ꞑ": "n",
                "ꞥ": "n",
                "ǌ": "nj",
                "ⓞ": "o",
                "ｏ": "o",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "ồ": "o",
                "ố": "o",
                "ỗ": "o",
                "ổ": "o",
                "õ": "o",
                "ṍ": "o",
                "ȭ": "o",
                "ṏ": "o",
                "ō": "o",
                "ṑ": "o",
                "ṓ": "o",
                "ŏ": "o",
                "ȯ": "o",
                "ȱ": "o",
                "ö": "o",
                "ȫ": "o",
                "ỏ": "o",
                "ő": "o",
                "ǒ": "o",
                "ȍ": "o",
                "ȏ": "o",
                "ơ": "o",
                "ờ": "o",
                "ớ": "o",
                "ỡ": "o",
                "ở": "o",
                "ợ": "o",
                "ọ": "o",
                "ộ": "o",
                "ǫ": "o",
                "ǭ": "o",
                "ø": "o",
                "ǿ": "o",
                "ɔ": "o",
                "ꝋ": "o",
                "ꝍ": "o",
                "ɵ": "o",
                "ƣ": "oi",
                "ȣ": "ou",
                "ꝏ": "oo",
                "ⓟ": "p",
                "ｐ": "p",
                "ṕ": "p",
                "ṗ": "p",
                "ƥ": "p",
                "ᵽ": "p",
                "ꝑ": "p",
                "ꝓ": "p",
                "ꝕ": "p",
                "ⓠ": "q",
                "ｑ": "q",
                "ɋ": "q",
                "ꝗ": "q",
                "ꝙ": "q",
                "ⓡ": "r",
                "ｒ": "r",
                "ŕ": "r",
                "ṙ": "r",
                "ř": "r",
                "ȑ": "r",
                "ȓ": "r",
                "ṛ": "r",
                "ṝ": "r",
                "ŗ": "r",
                "ṟ": "r",
                "ɍ": "r",
                "ɽ": "r",
                "ꝛ": "r",
                "ꞧ": "r",
                "ꞃ": "r",
                "ⓢ": "s",
                "ｓ": "s",
                "ß": "s",
                "ś": "s",
                "ṥ": "s",
                "ŝ": "s",
                "ṡ": "s",
                "š": "s",
                "ṧ": "s",
                "ṣ": "s",
                "ṩ": "s",
                "ș": "s",
                "ş": "s",
                "ȿ": "s",
                "ꞩ": "s",
                "ꞅ": "s",
                "ẛ": "s",
                "ⓣ": "t",
                "ｔ": "t",
                "ṫ": "t",
                "ẗ": "t",
                "ť": "t",
                "ṭ": "t",
                "ț": "t",
                "ţ": "t",
                "ṱ": "t",
                "ṯ": "t",
                "ŧ": "t",
                "ƭ": "t",
                "ʈ": "t",
                "ⱦ": "t",
                "ꞇ": "t",
                "ꜩ": "tz",
                "ⓤ": "u",
                "ｕ": "u",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ũ": "u",
                "ṹ": "u",
                "ū": "u",
                "ṻ": "u",
                "ŭ": "u",
                "ü": "u",
                "ǜ": "u",
                "ǘ": "u",
                "ǖ": "u",
                "ǚ": "u",
                "ủ": "u",
                "ů": "u",
                "ű": "u",
                "ǔ": "u",
                "ȕ": "u",
                "ȗ": "u",
                "ư": "u",
                "ừ": "u",
                "ứ": "u",
                "ữ": "u",
                "ử": "u",
                "ự": "u",
                "ụ": "u",
                "ṳ": "u",
                "ų": "u",
                "ṷ": "u",
                "ṵ": "u",
                "ʉ": "u",
                "ⓥ": "v",
                "ｖ": "v",
                "ṽ": "v",
                "ṿ": "v",
                "ʋ": "v",
                "ꝟ": "v",
                "ʌ": "v",
                "ꝡ": "vy",
                "ⓦ": "w",
                "ｗ": "w",
                "ẁ": "w",
                "ẃ": "w",
                "ŵ": "w",
                "ẇ": "w",
                "ẅ": "w",
                "ẘ": "w",
                "ẉ": "w",
                "ⱳ": "w",
                "ⓧ": "x",
                "ｘ": "x",
                "ẋ": "x",
                "ẍ": "x",
                "ⓨ": "y",
                "ｙ": "y",
                "ỳ": "y",
                "ý": "y",
                "ŷ": "y",
                "ỹ": "y",
                "ȳ": "y",
                "ẏ": "y",
                "ÿ": "y",
                "ỷ": "y",
                "ẙ": "y",
                "ỵ": "y",
                "ƴ": "y",
                "ɏ": "y",
                "ỿ": "y",
                "ⓩ": "z",
                "ｚ": "z",
                "ź": "z",
                "ẑ": "z",
                "ż": "z",
                "ž": "z",
                "ẓ": "z",
                "ẕ": "z",
                "ƶ": "z",
                "ȥ": "z",
                "ɀ": "z",
                "ⱬ": "z",
                "ꝣ": "z",
                "Ά": "Α",
                "Έ": "Ε",
                "Ή": "Η",
                "Ί": "Ι",
                "Ϊ": "Ι",
                "Ό": "Ο",
                "Ύ": "Υ",
                "Ϋ": "Υ",
                "Ώ": "Ω",
                "ά": "α",
                "έ": "ε",
                "ή": "η",
                "ί": "ι",
                "ϊ": "ι",
                "ΐ": "ι",
                "ό": "ο",
                "ύ": "υ",
                "ϋ": "υ",
                "ΰ": "υ",
                "ω": "ω",
                "ς": "σ"
            };
        w = n(document);
        c = function() {
            var n = 1;
            return function() {
                return n++
            }
        }();
        a = p(Object, {
            bind: function(n) {
                var t = this;
                return function() {
                    n.apply(t, arguments)
                }
            },
            init: function(i) {
                var f, e, o = ".select2-results",
                    s, h;
                this.opts = i = this.prepareOpts(i);
                this.id = i.id;
                i.element.data("select2") !== t && null !== i.element.data("select2") && i.element.data("select2").destroy();
                this.container = this.createContainer();
                this.liveRegion = n("<span>", {
                    role: "status",
                    "aria-live": "polite"
                }).addClass("select2-hidden-accessible").appendTo(document.body);
                this.containerId = "s2id_" + (i.element.attr("id") || "autogen" + c());
                this.containerEventName = this.containerId.replace(/([.])/g, "_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1");
                this.container.attr("id", this.containerId);
                this.container.attr("title", i.element.attr("title"));
                this.body = n("body");
                l(this.container, this.opts.element, this.opts.adaptContainerCssClass);
                this.container.attr("style", i.element.attr("style"));
                this.container.css(u(i.containerCss, this.opts.element));
                this.container.addClass(u(i.containerCssClass, this.opts.element));
                this.elementTabIndex = this.opts.element.attr("tabindex");
                this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", r);
                this.container.data("select2", this);
                this.dropdown = this.container.find(".select2-drop");
                l(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);
                this.dropdown.addClass(u(i.dropdownCssClass, this.opts.element));
                this.dropdown.data("select2", this);
                this.dropdown.on("click", r);
                this.results = f = this.container.find(o);
                this.search = e = this.container.find("input.select2-input");
                this.queryCount = 0;
                this.resultsPage = 0;
                this.context = null;
                this.initContainer();
                this.container.on("click", r);
                lt(this.results);
                this.dropdown.on("mousemove-filtered", o, this.bind(this.highlightUnderEvent));
                this.dropdown.on("touchstart touchmove touchend", o, this.bind(function(n) {
                    this._touchEvent = !0;
                    this.highlightUnderEvent(n)
                }));
                this.dropdown.on("touchmove", o, this.bind(this.touchMoved));
                this.dropdown.on("touchstart touchend", o, this.bind(this.clearTouchMoved));
                this.dropdown.on("click", this.bind(function() {
                    this._touchEvent && (this._touchEvent = !1, this.selectHighlighted())
                }));
                at(80, this.results);
                this.dropdown.on("scroll-debounced", o, this.bind(this.loadMoreIfNeeded));
                n(this.container).on("change", ".select2-input", function(n) {
                    n.stopPropagation()
                });
                n(this.dropdown).on("change", ".select2-input", function(n) {
                    n.stopPropagation()
                });
                n.fn.mousewheel && f.mousewheel(function(n, t, i, u) {
                    var e = f.scrollTop();
                    u > 0 && 0 >= e - u ? (f.scrollTop(0), r(n)) : 0 > u && f.get(0).scrollHeight - f.scrollTop() + u <= f.height() && (f.scrollTop(f.get(0).scrollHeight - f.height()), r(n))
                });
                nt(e);
                e.on("keyup-change input paste", this.bind(this.updateResults));
                e.on("focus", function() {
                    e.addClass("select2-focused")
                });
                e.on("blur", function() {
                    e.removeClass("select2-focused")
                });
                this.dropdown.on("mouseup", o, this.bind(function(t) {
                    n(t.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(t), this.selectHighlighted(t))
                }));
                this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function(n) {
                    n.stopPropagation()
                });
                this.nextSearchTerm = t;
                n.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource());
                null !== i.maximumInputLength && this.search.attr("maxlength", i.maximumInputLength);
                s = i.element.prop("disabled");
                s === t && (s = !1);
                this.enable(!s);
                h = i.element.prop("readonly");
                h === t && (h = !1);
                this.readonly(h);
                b = b || ct();
                this.autofocus = i.element.prop("autofocus");
                i.element.prop("autofocus", !1);
                this.autofocus && this.focus();
                this.search.attr("placeholder", i.searchInputPlaceholder)
            },
            destroy: function() {
                var n = this.opts.element,
                    i = n.data("select2");
                this.close();
                n.length && n[0].detachEvent && n.each(function() {
                    this.detachEvent("onpropertychange", this._sync)
                });
                this.propertyObserver && (this.propertyObserver.disconnect(), this.propertyObserver = null);
                this._sync = null;
                i !== t && (i.container.remove(), i.liveRegion.remove(), i.dropdown.remove(), n.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus", this.autofocus || !1), this.elementTabIndex ? n.attr({
                    tabindex: this.elementTabIndex
                }) : n.removeAttr("tabindex"), n.show());
                y.call(this, "container", "liveRegion", "dropdown", "results", "search")
            },
            optionToData: function(n) {
                return n.is("option") ? {
                    id: n.prop("value"),
                    text: n.text(),
                    element: n.get(),
                    css: n.attr("class"),
                    disabled: n.prop("disabled"),
                    locked: f(n.attr("locked"), "locked") || f(n.data("locked"), !0)
                } : n.is("optgroup") ? {
                    text: n.attr("label"),
                    children: [],
                    element: n.get(),
                    css: n.attr("class")
                } : void 0
            },
            prepareOpts: function(i) {
                var e, o, s, r, u = this;
                if (e = i.element, "select" === e.get(0).tagName.toLowerCase() && (this.select = o = i.element), o && n.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() {
                        if (this in i) throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.");
                    }), i = n.extend({}, {
                        populateResults: function(r, f, e) {
                            var o, s = this.opts.id,
                                h = this.liveRegion;
                            o = function(r, f, l) {
                                var p, nt, v, tt, b, k, a, y, w, d, g;
                                for (r = i.sortResults(r, f, e), g = [], p = 0, nt = r.length; nt > p; p += 1) v = r[p], b = v.disabled === !0, tt = !b && s(v) !== t, k = v.children && v.children.length > 0, a = n("<li><\/li>"), a.addClass("select2-results-dept-" + l), a.addClass("select2-result"), a.addClass(tt ? "select2-result-selectable" : "select2-result-unselectable"), b && a.addClass("select2-disabled"), k && a.addClass("select2-result-with-children"), a.addClass(u.opts.formatResultCssClass(v)), a.attr("role", "presentation"), y = n(document.createElement("div")), y.addClass("select2-result-label"), y.attr("id", "select2-result-label-" + c()), y.attr("role", "option"), d = i.formatResult(v, y, e, u.opts.escapeMarkup), d !== t && (y.html(d), a.append(y)), k && (w = n("<ul><\/ul>"), w.addClass("select2-result-sub"), o(v.children, w, l + 1), a.append(w)), a.data("select2-data", v), g.push(a[0]);
                                f.append(g);
                                h.text(i.formatMatches(r.length))
                            };
                            o(f, r, 0)
                        }
                    }, n.fn.select2.defaults, i), "function" != typeof i.id && (s = i.id, i.id = function(n) {
                        return n[s]
                    }), n.isArray(i.element.data("select2Tags"))) {
                    if ("tags" in i) throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + i.element.attr("id");
                    i.tags = i.element.data("select2Tags")
                }
                if (o ? (i.query = this.bind(function(n) {
                        var i, r, f, o = {
                                results: [],
                                more: !1
                            },
                            s = n.term;
                        f = function(t, i) {
                            var r;
                            t.is("option") ? n.matcher(s, t.text(), t) && i.push(u.optionToData(t)) : t.is("optgroup") && (r = u.optionToData(t), t.children().each2(function(n, t) {
                                f(t, r.children)
                            }), r.children.length > 0 && i.push(r))
                        };
                        i = e.children();
                        this.getPlaceholder() !== t && i.length > 0 && (r = this.getPlaceholderOption(), r && (i = i.not(r)));
                        i.each2(function(n, t) {
                            f(t, o.results)
                        });
                        n.callback(o)
                    }), i.id = function(n) {
                        return n.id
                    }) : "query" in i || ("ajax" in i ? (r = i.element.data("ajax-url"), r && r.length > 0 && (i.ajax.url = r), i.query = ut.call(i.element, i.ajax)) : "data" in i ? i.query = ft(i.data) : "tags" in i && (i.query = et(i.tags), i.createSearchChoice === t && (i.createSearchChoice = function(t) {
                        return {
                            id: n.trim(t),
                            text: n.trim(t)
                        }
                    }), i.initSelection === t && (i.initSelection = function(t, r) {
                        var u = [];
                        n(v(t.val(), i.separator)).each(function() {
                            var r = {
                                    id: this,
                                    text: this
                                },
                                t = i.tags;
                            n.isFunction(t) && (t = t());
                            n(t).each(function() {
                                if (f(this.id, r.id)) return (r = this, !1)
                            });
                            u.push(r)
                        });
                        r(u)
                    }))), "function" != typeof i.query) throw "query function not defined for Select2 " + i.element.attr("id");
                if ("top" === i.createSearchChoicePosition) i.createSearchChoicePosition = function(n, t) {
                    n.unshift(t)
                };
                else if ("bottom" === i.createSearchChoicePosition) i.createSearchChoicePosition = function(n, t) {
                    n.push(t)
                };
                else if ("function" != typeof i.createSearchChoicePosition) throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
                return i
            },
            monitorSource: function() {
                var r, i = this.opts.element,
                    f = this;
                i.on("change.select2", this.bind(function() {
                    this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection()
                }));
                this._sync = this.bind(function() {
                    var r = i.prop("disabled"),
                        n;
                    r === t && (r = !1);
                    this.enable(!r);
                    n = i.prop("readonly");
                    n === t && (n = !1);
                    this.readonly(n);
                    l(this.container, this.opts.element, this.opts.adaptContainerCssClass);
                    this.container.addClass(u(this.opts.containerCssClass, this.opts.element));
                    l(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);
                    this.dropdown.addClass(u(this.opts.dropdownCssClass, this.opts.element))
                });
                i.length && i[0].attachEvent && i.each(function() {
                    this.attachEvent("onpropertychange", f._sync)
                });
                r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                r !== t && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new r(function(t) {
                    n.each(t, f._sync)
                }), this.propertyObserver.observe(i.get(0), {
                    attributes: !0,
                    subtree: !1
                }))
            },
            triggerSelect: function(t) {
                var i = n.Event("select2-selecting", {
                    val: this.id(t),
                    object: t,
                    choice: t
                });
                return this.opts.element.trigger(i), !i.isDefaultPrevented()
            },
            triggerChange: function(t) {
                t = t || {};
                t = n.extend({}, t, {
                    type: "change",
                    val: this.val()
                });
                this.opts.element.data("select2-change-triggered", !0);
                this.opts.element.trigger(t);
                this.opts.element.data("select2-change-triggered", !1);
                this.opts.element.click();
                this.opts.blurOnChange && this.opts.element.blur()
            },
            isInterfaceEnabled: function() {
                return this.enabledInterface === !0
            },
            enableInterface: function() {
                var n = this._enabled && !this._readonly,
                    t = !n;
                return n === this.enabledInterface ? !1 : (this.container.toggleClass("select2-container-disabled", t), this.close(), this.enabledInterface = n, !0)
            },
            enable: function(n) {
                n === t && (n = !0);
                this._enabled !== n && (this._enabled = n, this.opts.element.prop("disabled", !n), this.enableInterface())
            },
            disable: function() {
                this.enable(!1)
            },
            readonly: function(n) {
                n === t && (n = !1);
                this._readonly !== n && (this._readonly = n, this.opts.element.prop("readonly", n), this.enableInterface())
            },
            opened: function() {
                return this.container ? this.container.hasClass("select2-dropdown-open") : !1
            },
            positionDropdown: function() {
                var v, s, y, r, p, t = this.dropdown,
                    f = this.container.offset(),
                    w = this.container.outerHeight(!1),
                    h = this.container.outerWidth(!1),
                    c = t.outerHeight(!1),
                    e = n(window),
                    d = e.width(),
                    g = e.height(),
                    l = e.scrollLeft() + d,
                    nt = e.scrollTop() + g,
                    a = f.top + w,
                    o = f.left,
                    tt = nt >= a + c,
                    it = f.top - c >= e.scrollTop(),
                    i = t.outerWidth(!1),
                    k = l >= o + i,
                    rt = t.hasClass("select2-drop-above");
                rt ? (s = !0, !it && tt && (y = !0, s = !1)) : (s = !1, !tt && it && (y = !0, s = !0));
                y && (t.hide(), f = this.container.offset(), w = this.container.outerHeight(!1), h = this.container.outerWidth(!1), c = t.outerHeight(!1), l = e.scrollLeft() + d, nt = e.scrollTop() + g, a = f.top + w, o = f.left, i = t.outerWidth(!1), k = l >= o + i, t.show(), this.focusSearch());
                this.opts.dropdownAutoWidth ? (p = n(".select2-results", t)[0], t.addClass("select2-drop-auto-width"), t.css("width", ""), i = t.outerWidth(!1) + (p.scrollHeight === p.clientHeight ? 0 : b.width), i > h ? h = i : i = h, c = t.outerHeight(!1), k = l >= o + i) : this.container.removeClass("select2-drop-auto-width");
                "static" !== this.body.css("position") && (v = this.body.offset(), a -= v.top, o -= v.left);
                k || (o = f.left + this.container.outerWidth(!1) - i);
                r = {
                    left: o,
                    width: h
                };
                s ? (r.top = f.top - c, r.bottom = "auto", this.container.addClass("select2-drop-above"), t.addClass("select2-drop-above")) : (r.top = a, r.bottom = "auto", this.container.removeClass("select2-drop-above"), t.removeClass("select2-drop-above"));
                r = n.extend(r, u(this.opts.dropdownCss, this.opts.element));
                t.css(r)
            },
            shouldOpen: function() {
                var t;
                return this.opened() ? !1 : this._enabled === !1 || this._readonly === !0 ? !1 : (t = n.Event("select2-opening"), this.opts.element.trigger(t), !t.isDefaultPrevented())
            },
            clearDropdownAlignmentPreference: function() {
                this.container.removeClass("select2-drop-above");
                this.dropdown.removeClass("select2-drop-above")
            },
            open: function() {
                return this.shouldOpen() ? (this.opening(), w.on("mousemove.select2Event", function(n) {
                    k.x = n.pageX;
                    k.y = n.pageY
                }), !0) : !1
            },
            opening: function() {
                var t, i = this.containerEventName,
                    u = "scroll." + i,
                    f = "resize." + i,
                    e = "orientationchange." + i,
                    r;
                this.container.addClass("select2-dropdown-open").addClass("select2-container-active");
                this.clearDropdownAlignmentPreference();
                this.dropdown[0] !== this.body.children().last()[0] && this.dropdown.detach().appendTo(this.body);
                t = n("#select2-drop-mask");
                0 == t.length && (t = n(document.createElement("div")), t.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), t.hide(), t.appendTo(this.body), t.on("mousedown touchstart click", function(i) {
                    d(t);
                    var r, u = n("#select2-drop");
                    u.length > 0 && (r = u.data("select2"), r.opts.selectOnBlur && r.selectHighlighted({
                        noFocus: !0
                    }), r.close(), i.preventDefault(), i.stopPropagation())
                }));
                this.dropdown.prev()[0] !== t[0] && this.dropdown.before(t);
                n("#select2-drop").removeAttr("id");
                this.dropdown.attr("id", "select2-drop");
                t.show();
                this.positionDropdown();
                this.dropdown.show();
                this.positionDropdown();
                this.dropdown.addClass("select2-drop-active");
                r = this;
                this.container.parents().add(window).each(function() {
                    n(this).on(f + " " + u + " " + e, function() {
                        r.opened() && r.positionDropdown()
                    })
                })
            },
            close: function() {
                if (this.opened()) {
                    var t = this.containerEventName,
                        i = "scroll." + t,
                        r = "resize." + t,
                        u = "orientationchange." + t;
                    this.container.parents().add(window).each(function() {
                        n(this).off(i).off(r).off(u)
                    });
                    this.clearDropdownAlignmentPreference();
                    n("#select2-drop-mask").hide();
                    this.dropdown.removeAttr("id");
                    this.dropdown.hide();
                    this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active");
                    this.results.empty();
                    w.off("mousemove.select2Event");
                    this.clearSearch();
                    this.search.removeClass("select2-active");
                    this.opts.element.trigger(n.Event("select2-close"))
                }
            },
            externalSearch: function(n) {
                this.open();
                this.search.val(n);
                this.updateResults(!1)
            },
            clearSearch: function() {},
            getMaximumSelectionSize: function() {
                return u(this.opts.maximumSelectionSize, this.opts.element)
            },
            ensureHighlightVisible: function() {
                var e, i, r, u, o, s, f, h, t = this.results;
                if (i = this.highlight(), !(0 > i)) {
                    if (0 == i) return t.scrollTop(0), void 0;
                    e = this.findHighlightableChoices().find(".select2-result-label");
                    r = n(e[i]);
                    h = (r.offset() || {}).top || 0;
                    u = h + r.outerHeight(!0);
                    i === e.length - 1 && (f = t.find("li.select2-more-results"), f.length > 0 && (u = f.offset().top + f.outerHeight(!0)));
                    o = t.offset().top + t.outerHeight(!0);
                    u > o && t.scrollTop(t.scrollTop() + (u - o));
                    s = h - t.offset().top;
                    0 > s && "none" != r.css("display") && t.scrollTop(t.scrollTop() + s)
                }
            },
            findHighlightableChoices: function() {
                return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")
            },
            moveHighlight: function(t) {
                for (var r, u = this.findHighlightableChoices(), i = this.highlight(); i > -1 && i < u.length;)
                    if (i += t, r = n(u[i]), r.hasClass("select2-result-selectable") && !r.hasClass("select2-disabled") && !r.hasClass("select2-selected")) {
                        this.highlight(i);
                        break
                    }
            },
            highlight: function(t) {
                var i, u, r = this.findHighlightableChoices();
                return 0 === arguments.length ? e(r.filter(".select2-highlighted")[0], r.get()) : (t >= r.length && (t = r.length - 1), 0 > t && (t = 0), this.removeHighlight(), i = n(r[t]), i.addClass("select2-highlighted"), this.search.attr("aria-activedescendant", i.find(".select2-result-label").attr("id")), this.ensureHighlightVisible(), this.liveRegion.text(i.text()), u = i.data("select2-data"), u && this.opts.element.trigger({
                    type: "select2-highlight",
                    val: this.id(u),
                    choice: u
                }), void 0)
            },
            removeHighlight: function() {
                this.results.find(".select2-highlighted").removeClass("select2-highlighted")
            },
            touchMoved: function() {
                this._touchMoved = !0
            },
            clearTouchMoved: function() {
                this._touchMoved = !1
            },
            countSelectableResults: function() {
                return this.findHighlightableChoices().length
            },
            highlightUnderEvent: function(t) {
                var i = n(t.target).closest(".select2-result-selectable"),
                    r;
                i.length > 0 && !i.is(".select2-highlighted") ? (r = this.findHighlightableChoices(), this.highlight(r.index(i))) : 0 == i.length && this.removeHighlight()
            },
            loadMoreIfNeeded: function() {
                var f, t = this.results,
                    i = t.find("li.select2-more-results"),
                    r = this.resultsPage + 1,
                    n = this,
                    e = this.search.val(),
                    o = this.context;
                0 !== i.length && (f = i.offset().top - t.offset().top - t.height(), f <= this.opts.loadMorePadding && (i.addClass("select2-active"), this.opts.query({
                    element: this.opts.element,
                    term: e,
                    page: r,
                    context: o,
                    matcher: this.opts.matcher,
                    callback: this.bind(function(f) {
                        n.opened() && (n.opts.populateResults.call(this, t, f.results, {
                            term: e,
                            page: r,
                            context: o
                        }), n.postprocessResults(f, !1, !1), f.more === !0 ? (i.detach().appendTo(t).text(u(n.opts.formatLoadMore, n.opts.element, r + 1)), window.setTimeout(function() {
                            n.loadMoreIfNeeded()
                        }, 10)) : i.remove(), n.positionDropdown(), n.resultsPage = r, n.context = f.context, this.opts.element.trigger({
                            type: "select2-loaded",
                            items: f
                        }))
                    })
                })))
            },
            tokenize: function() {},
            updateResults: function(i) {
                function y() {
                    e.removeClass("select2-active");
                    s.positionDropdown();
                    c.find(".select2-no-results,.select2-selection-limit,.select2-searching").length ? s.liveRegion.text(c.text()) : s.liveRegion.text(s.opts.formatMatches(c.find(".select2-result-selectable").length))
                }

                function h(n) {
                    c.html(n);
                    y()
                }
                var v, l, p, e = this.search,
                    c = this.results,
                    r = this.opts,
                    s = this,
                    w = e.val(),
                    b = n.data(this.container, "select2-last-term"),
                    a;
                if ((i === !0 || !b || !f(w, b)) && (n.data(this.container, "select2-last-term", w), i === !0 || this.showSearchInput !== !1 && this.opened())) {
                    if (p = ++this.queryCount, a = this.getMaximumSelectionSize(), a >= 1 && (v = this.data(), n.isArray(v) && v.length >= a && o(r.formatSelectionTooBig, "formatSelectionTooBig"))) return h("<li class='select2-selection-limit'>" + u(r.formatSelectionTooBig, r.element, a) + "<\/li>"), void 0;
                    if (e.val().length < r.minimumInputLength) return o(r.formatInputTooShort, "formatInputTooShort") ? h("<li class='select2-no-results'>" + u(r.formatInputTooShort, r.element, e.val(), r.minimumInputLength) + "<\/li>") : h(""), i && this.showSearch && this.showSearch(!0), void 0;
                    if (r.maximumInputLength && e.val().length > r.maximumInputLength) return o(r.formatInputTooLong, "formatInputTooLong") ? h("<li class='select2-no-results'>" + u(r.formatInputTooLong, r.element, e.val(), r.maximumInputLength) + "<\/li>") : h(""), void 0;
                    r.formatSearching && 0 === this.findHighlightableChoices().length && h("<li class='select2-searching'>" + u(r.formatSearching, r.element) + "<\/li>");
                    e.addClass("select2-active");
                    this.removeHighlight();
                    l = this.tokenize();
                    l != t && null != l && e.val(l);
                    this.resultsPage = 1;
                    r.query({
                        element: r.element,
                        term: e.val(),
                        page: this.resultsPage,
                        context: null,
                        matcher: r.matcher,
                        callback: this.bind(function(l) {
                            var a;
                            if (p == this.queryCount) {
                                if (!this.opened()) return this.search.removeClass("select2-active"), void 0;
                                if (this.context = l.context === t ? null : l.context, this.opts.createSearchChoice && "" !== e.val() && (a = this.opts.createSearchChoice.call(s, e.val(), l.results), a !== t && null !== a && s.id(a) !== t && null !== s.id(a) && 0 === n(l.results).filter(function() {
                                        return f(s.id(this), s.id(a))
                                    }).length && this.opts.createSearchChoicePosition(l.results, a)), 0 === l.results.length && o(r.formatNoMatches, "formatNoMatches")) return h("<li class='select2-no-results'>" + u(r.formatNoMatches, r.element, e.val()) + "<\/li>"), void 0;
                                c.empty();
                                s.opts.populateResults.call(this, c, l.results, {
                                    term: e.val(),
                                    page: this.resultsPage,
                                    context: null
                                });
                                l.more === !0 && o(r.formatLoadMore, "formatLoadMore") && (c.append("<li class='select2-more-results'>" + r.escapeMarkup(u(r.formatLoadMore, r.element, this.resultsPage)) + "<\/li>"), window.setTimeout(function() {
                                    s.loadMoreIfNeeded()
                                }, 10));
                                this.postprocessResults(l, i);
                                y();
                                this.opts.element.trigger({
                                    type: "select2-loaded",
                                    items: l
                                })
                            }
                        })
                    })
                }
            },
            cancel: function() {
                this.close()
            },
            blur: function() {
                this.opts.selectOnBlur && this.selectHighlighted({
                    noFocus: !0
                });
                this.close();
                this.container.removeClass("select2-container-active");
                this.search[0] === document.activeElement && this.search.blur();
                this.clearSearch();
                this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
            },
            focusSearch: function() {
                vt(this.search)
            },
            selectHighlighted: function(n) {
                if (this._touchMoved) return this.clearTouchMoved(), void 0;
                var i = this.highlight(),
                    r = this.results.find(".select2-highlighted"),
                    t = r.closest(".select2-result").data("select2-data");
                t ? (this.highlight(i), this.onSelect(t, n)) : n && n.noFocus && this.close()
            },
            getPlaceholder: function() {
                var n;
                return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((n = this.getPlaceholderOption()) !== t ? n.text() : t)
            },
            getPlaceholderOption: function() {
                if (this.select) {
                    var i = this.select.children("option").first();
                    if (this.opts.placeholderOption !== t) return "first" === this.opts.placeholderOption && i || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);
                    if ("" === n.trim(i.text()) && "" === i.val()) return i
                }
            },
            initContainerWidth: function() {
                function r() {
                    var i, f, r, u, e, o;
                    if ("off" === this.opts.width) return null;
                    if ("element" === this.opts.width) return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
                    if ("copy" === this.opts.width || "resolve" === this.opts.width) {
                        if (i = this.opts.element.attr("style"), i !== t)
                            for (f = i.split(";"), u = 0, e = f.length; e > u; u += 1)
                                if (o = f[u].replace(/\s/g, ""), r = o.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== r && r.length >= 1) return r[1];
                        return "resolve" === this.opts.width ? (i = this.opts.element.css("width"), i.indexOf("%") > 0 ? i : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px") : null
                    }
                    return n.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
                }
                var i = r.call(this);
                null !== i && this.container.css("width", i)
            }
        });
        st = p(a, {
            createContainer: function() {
                return n(document.createElement("div")).attr({
                    "class": "select2-container"
                }).html("<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>   <span class='select2-chosen'>&#160;<\/span><abbr class='select2-search-choice-close'><\/abbr>   <span class='select2-arrow' role='presentation'><b role='presentation'><\/b><\/span><\/a><label for='' class='select2-offscreen'><\/label><input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' /><div class='select2-drop select2-display-none'>   <div class='select2-search'>       <label for='' class='select2-offscreen'><\/label>       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'       aria-autocomplete='list' />   <\/div>   <ul class='select2-results' role='listbox'>   <\/ul><\/div>")
            },
            enableInterface: function() {
                this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
            },
            opening: function() {
                var i, r, u;
                this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0);
                this.parent.opening.apply(this, arguments);
                this.showSearchInput !== !1 && this.search.val(this.focusser.val());
                this.opts.shouldFocusInput(this) && (this.search.focus(), i = this.search.get(0), i.createTextRange ? (r = i.createTextRange(), r.collapse(!1), r.select()) : i.setSelectionRange && (u = this.search.val().length, i.setSelectionRange(u, u)));
                "" === this.search.val() && this.nextSearchTerm != t && (this.search.val(this.nextSearchTerm), this.search.select());
                this.focusser.prop("disabled", !0).val("");
                this.updateResults(!0);
                this.opts.element.trigger(n.Event("select2-open"))
            },
            close: function() {
                this.opened() && (this.parent.close.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
            },
            focus: function() {
                this.opened() ? this.close() : (this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
            },
            isFocused: function() {
                return this.container.hasClass("select2-container-active")
            },
            cancel: function() {
                this.parent.cancel.apply(this, arguments);
                this.focusser.prop("disabled", !1);
                this.opts.shouldFocusInput(this) && this.focusser.focus()
            },
            destroy: function() {
                n("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id"));
                this.parent.destroy.apply(this, arguments);
                y.call(this, "selection", "focusser")
            },
            initContainer: function() {
                var t, f, e = this.container,
                    s = this.dropdown,
                    u = c(),
                    o;
                this.opts.minimumResultsForSearch < 0 ? this.showSearch(!1) : this.showSearch(!0);
                this.selection = t = e.find(".select2-choice");
                this.focusser = e.find(".select2-focusser");
                t.find(".select2-chosen").attr("id", "select2-chosen-" + u);
                this.focusser.attr("aria-labelledby", "select2-chosen-" + u);
                this.results.attr("id", "select2-results-" + u);
                this.search.attr("aria-owns", "select2-results-" + u);
                this.focusser.attr("id", "s2id_autogen" + u);
                f = n("label[for='" + this.opts.element.attr("id") + "']");
                this.focusser.prev().text(f.text()).attr("for", this.focusser.attr("id"));
                o = this.opts.element.attr("title");
                this.opts.element.attr("title", o || f.text());
                this.focusser.attr("tabindex", this.elementTabIndex);
                this.search.attr("id", this.focusser.attr("id") + "_search");
                this.search.prev().text(n("label[for='" + this.focusser.attr("id") + "']").text()).attr("for", this.search.attr("id"));
                this.search.on("keydown", this.bind(function(n) {
                    if (this.isInterfaceEnabled()) {
                        if (n.which === i.PAGE_UP || n.which === i.PAGE_DOWN) return r(n), void 0;
                        switch (n.which) {
                            case i.UP:
                            case i.DOWN:
                                return this.moveHighlight(n.which === i.UP ? -1 : 1), r(n), void 0;
                            case i.ENTER:
                                return this.selectHighlighted(), r(n), void 0;
                            case i.TAB:
                                return this.selectHighlighted({
                                    noFocus: !0
                                }), void 0;
                            case i.ESC:
                                return this.cancel(n), r(n), void 0
                        }
                    }
                }));
                this.search.on("blur", this.bind(function() {
                    document.activeElement === this.body.get(0) && window.setTimeout(this.bind(function() {
                        this.opened() && this.search.focus()
                    }), 0)
                }));
                this.focusser.on("keydown", this.bind(function(n) {
                    if (this.isInterfaceEnabled() && n.which !== i.TAB && !i.isControl(n) && !i.isFunctionKey(n) && n.which !== i.ESC) return this.opts.openOnEnter === !1 && n.which === i.ENTER ? (r(n), void 0) : n.which == i.DOWN || n.which == i.UP || n.which == i.ENTER && this.opts.openOnEnter ? n.altKey || n.ctrlKey || n.shiftKey || n.metaKey ? void 0 : (this.open(), r(n), void 0) : n.which == i.DELETE || n.which == i.BACKSPACE ? (this.opts.allowClear && this.clear(), r(n), void 0) : void 0
                }));
                nt(this.focusser);
                this.focusser.on("keyup-change input", this.bind(function(n) {
                    if (this.opts.minimumResultsForSearch >= 0) {
                        if (n.stopPropagation(), this.opened()) return;
                        this.open()
                    }
                }));
                t.on("mousedown touchstart", "abbr", this.bind(function(n) {
                    this.isInterfaceEnabled() && (this.clear(), pt(n), this.close(), this.selection.focus())
                }));
                t.on("mousedown touchstart", this.bind(function(i) {
                    d(t);
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(n.Event("select2-focus"));
                    this.opened() ? this.close() : this.isInterfaceEnabled() && this.open();
                    r(i)
                }));
                s.on("mousedown touchstart", this.bind(function() {
                    this.opts.shouldFocusInput(this) && this.search.focus()
                }));
                t.on("focus", this.bind(function(n) {
                    r(n)
                }));
                this.focusser.on("focus", this.bind(function() {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(n.Event("select2-focus"));
                    this.container.addClass("select2-container-active")
                })).on("blur", this.bind(function() {
                    this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(n.Event("select2-blur")))
                }));
                this.search.on("focus", this.bind(function() {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(n.Event("select2-focus"));
                    this.container.addClass("select2-container-active")
                }));
                this.initContainerWidth();
                this.opts.element.addClass("select2-offscreen");
                this.setPlaceholder()
            },
            clear: function(t) {
                var i = this.selection.data("select2-data"),
                    r, u;
                if (i) {
                    if (r = n.Event("select2-clearing"), this.opts.element.trigger(r), r.isDefaultPrevented()) return;
                    u = this.getPlaceholderOption();
                    this.opts.element.val(u ? u.val() : "");
                    this.selection.find(".select2-chosen").empty();
                    this.selection.removeData("select2-data");
                    this.setPlaceholder();
                    t !== !1 && (this.opts.element.trigger({
                        type: "select2-removed",
                        val: this.id(i),
                        choice: i
                    }), this.triggerChange({
                        removed: i
                    }))
                }
            },
            initSelection: function() {
                if (this.isPlaceholderOptionSelected()) this.updateSelection(null), this.close(), this.setPlaceholder();
                else {
                    var n = this;
                    this.opts.initSelection.call(null, this.opts.element, function(i) {
                        i !== t && null !== i && (n.updateSelection(i), n.close(), n.setPlaceholder(), n.nextSearchTerm = n.opts.nextSearchTerm(i, n.search.val()))
                    })
                }
            },
            isPlaceholderOptionSelected: function() {
                var n;
                return this.getPlaceholder() === t ? !1 : (n = this.getPlaceholderOption()) !== t && n.prop("selected") || "" === this.opts.element.val() || this.opts.element.val() === t || null === this.opts.element.val()
            },
            prepareOpts: function() {
                var t = this.parent.prepareOpts.apply(this, arguments),
                    i = this;
                return "select" === t.element.get(0).tagName.toLowerCase() ? t.initSelection = function(n, t) {
                    var r = n.find("option").filter(function() {
                        return this.selected && !this.disabled
                    });
                    t(i.optionToData(r))
                } : "data" in t && (t.initSelection = t.initSelection || function(i, r) {
                    var e = i.val(),
                        u = null;
                    t.query({
                        matcher: function(n, i, r) {
                            var o = f(e, t.id(r));
                            return o && (u = r), o
                        },
                        callback: n.isFunction(r) ? function() {
                            r(u)
                        } : n.noop
                    })
                }), t
            },
            getPlaceholder: function() {
                return this.select && this.getPlaceholderOption() === t ? t : this.parent.getPlaceholder.apply(this, arguments)
            },
            setPlaceholder: function() {
                var n = this.getPlaceholder();
                if (this.isPlaceholderOptionSelected() && n !== t) {
                    if (this.select && this.getPlaceholderOption() === t) return;
                    this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(n));
                    this.selection.addClass("select2-default");
                    this.container.removeClass("select2-allowclear")
                }
            },
            postprocessResults: function(n, t, i) {
                var r = 0,
                    e = this,
                    u;
                (this.findHighlightableChoices().each2(function(n, t) {
                    if (f(e.id(t.data("select2-data")), e.opts.element.val())) return (r = n, !1)
                }), i !== !1 && (t === !0 && r >= 0 ? this.highlight(r) : this.highlight(0)), t === !0) && (u = this.opts.minimumResultsForSearch, u >= 0 && this.showSearch(ot(n.results) >= u))
            },
            showSearch: function(t) {
                this.showSearchInput !== t && (this.showSearchInput = t, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !t), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !t), n(this.dropdown, this.container).toggleClass("select2-with-searchbox", t))
            },
            onSelect: function(n, t) {
                if (this.triggerSelect(n)) {
                    var i = this.opts.element.val(),
                        r = this.data();
                    this.opts.element.val(this.id(n));
                    this.updateSelection(n);
                    this.opts.element.trigger({
                        type: "select2-selected",
                        val: this.id(n),
                        choice: n
                    });
                    this.nextSearchTerm = this.opts.nextSearchTerm(n, this.search.val());
                    this.close();
                    t && t.noFocus || !this.opts.shouldFocusInput(this) || this.focusser.focus();
                    f(i, this.id(n)) || this.triggerChange({
                        added: n,
                        removed: r
                    })
                }
            },
            updateSelection: function(n) {
                var r, u, i = this.selection.find(".select2-chosen");
                this.selection.data("select2-data", n);
                i.empty();
                null !== n && (r = this.opts.formatSelection(n, i, this.opts.escapeMarkup));
                r !== t && i.append(r);
                u = this.opts.formatSelectionCssClass(n, i);
                u !== t && i.addClass(u);
                this.selection.removeClass("select2-default");
                this.opts.allowClear && this.getPlaceholder() !== t && this.container.addClass("select2-allowclear")
            },
            val: function() {
                var i, r = !1,
                    u = null,
                    n = this,
                    f = this.data();
                if (0 === arguments.length) return this.opts.element.val();
                if (i = arguments[0], arguments.length > 1 && (r = arguments[1]), this.select) this.select.val(i).find("option").filter(function() {
                    return this.selected
                }).each2(function(t, i) {
                    return u = n.optionToData(i), !1
                }), this.updateSelection(u), this.setPlaceholder(), r && this.triggerChange({
                    added: u,
                    removed: f
                });
                else {
                    if (!i && 0 !== i) return this.clear(r), void 0;
                    if (this.opts.initSelection === t) throw new Error("cannot call val() if initSelection() is not defined");
                    this.opts.element.val(i);
                    this.opts.initSelection(this.opts.element, function(t) {
                        n.opts.element.val(t ? n.id(t) : "");
                        n.updateSelection(t);
                        n.setPlaceholder();
                        r && n.triggerChange({
                            added: t,
                            removed: f
                        })
                    })
                }
            },
            clearSearch: function() {
                this.search.val("");
                this.focusser.val("")
            },
            data: function(n) {
                var i, r = !1;
                return 0 === arguments.length ? (i = this.selection.data("select2-data"), i == t && (i = null), i) : (arguments.length > 1 && (r = arguments[1]), n ? (i = this.data(), this.opts.element.val(n ? this.id(n) : ""), this.updateSelection(n), r && this.triggerChange({
                    added: n,
                    removed: i
                })) : this.clear(r), void 0)
            }
        });
        ht = p(a, {
            createContainer: function() {
                return n(document.createElement("div")).attr({
                    "class": "select2-container select2-container-multi"
                }).html("<ul class='select2-choices'>  <li class='select2-search-field'>    <label for='' class='select2-offscreen'><\/label>    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>  <\/li><\/ul><div class='select2-drop select2-drop-multi select2-display-none'>   <ul class='select2-results'>   <\/ul><\/div>")
            },
            prepareOpts: function() {
                var t = this.parent.prepareOpts.apply(this, arguments),
                    i = this;
                return "select" === t.element.get(0).tagName.toLowerCase() ? t.initSelection = function(n, t) {
                    var r = [];
                    n.find("option").filter(function() {
                        return this.selected && !this.disabled
                    }).each2(function(n, t) {
                        r.push(i.optionToData(t))
                    });
                    t(r)
                } : "data" in t && (t.initSelection = t.initSelection || function(i, r) {
                    var e = v(i.val(), t.separator),
                        u = [];
                    t.query({
                        matcher: function(i, r, o) {
                            var s = n.grep(e, function(n) {
                                return f(n, t.id(o))
                            }).length;
                            return s && u.push(o), s
                        },
                        callback: n.isFunction(r) ? function() {
                            for (var h, n, s, o = [], i = 0; i < e.length; i++)
                                for (h = e[i], n = 0; n < u.length; n++)
                                    if (s = u[n], f(h, t.id(s))) {
                                        o.push(s);
                                        u.splice(n, 1);
                                        break
                                    }
                            r(o)
                        } : n.noop
                    })
                }), t
            },
            selectChoice: function(n) {
                var t = this.container.find(".select2-search-choice-focus");
                t.length && n && n[0] == t[0] || (t.length && this.opts.element.trigger("choice-deselected", t), t.removeClass("select2-search-choice-focus"), n && n.length && (this.close(), n.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", n)))
            },
            destroy: function() {
                n("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id"));
                this.parent.destroy.apply(this, arguments);
                y.call(this, "searchContainer", "selection")
            },
            initContainer: function() {
                var t, u = ".select2-choices",
                    f;
                this.searchContainer = this.container.find(".select2-search-field");
                this.selection = t = this.container.find(u);
                f = this;
                this.selection.on("click", ".select2-search-choice:not(.select2-locked)", function() {
                    f.search[0].focus();
                    f.selectChoice(n(this))
                });
                this.search.attr("id", "s2id_autogen" + c());
                this.search.prev().text(n("label[for='" + this.opts.element.attr("id") + "']").text()).attr("for", this.search.attr("id"));
                this.search.on("input paste", this.bind(function() {
                    this.search.attr("placeholder") && 0 == this.search.val().length || this.isInterfaceEnabled() && (this.opened() || this.open())
                }));
                this.search.attr("tabindex", this.elementTabIndex);
                this.keydowns = 0;
                this.search.on("keydown", this.bind(function(n) {
                    var u;
                    if (this.isInterfaceEnabled()) {
                        ++this.keydowns;
                        var f = t.find(".select2-search-choice-focus"),
                            o = f.prev(".select2-search-choice:not(.select2-locked)"),
                            e = f.next(".select2-search-choice:not(.select2-locked)"),
                            s = yt(this.search);
                        if (f.length && (n.which == i.LEFT || n.which == i.RIGHT || n.which == i.BACKSPACE || n.which == i.DELETE || n.which == i.ENTER)) return u = f, n.which == i.LEFT && o.length ? u = o : n.which == i.RIGHT ? u = e.length ? e : null : n.which === i.BACKSPACE ? this.unselect(f.first()) && (this.search.width(10), u = o.length ? o : e) : n.which == i.DELETE ? this.unselect(f.first()) && (this.search.width(10), u = e.length ? e : null) : n.which == i.ENTER && (u = null), this.selectChoice(u), r(n), u && u.length || this.open(), void 0;
                        if ((n.which === i.BACKSPACE && 1 == this.keydowns || n.which == i.LEFT) && 0 == s.offset && !s.length) return this.selectChoice(t.find(".select2-search-choice:not(.select2-locked)").last()), r(n), void 0;
                        if (this.selectChoice(null), this.opened()) switch (n.which) {
                            case i.UP:
                            case i.DOWN:
                                return this.moveHighlight(n.which === i.UP ? -1 : 1), r(n), void 0;
                            case i.ENTER:
                                return this.selectHighlighted(), r(n), void 0;
                            case i.TAB:
                                return this.selectHighlighted({
                                    noFocus: !0
                                }), this.close(), void 0;
                            case i.ESC:
                                return this.cancel(n), r(n), void 0
                        }
                        if (n.which !== i.TAB && !i.isControl(n) && !i.isFunctionKey(n) && n.which !== i.BACKSPACE && n.which !== i.ESC) {
                            if (n.which === i.ENTER) {
                                if (this.opts.openOnEnter === !1) return;
                                if (n.altKey || n.ctrlKey || n.shiftKey || n.metaKey) return
                            }
                            this.open();
                            (n.which === i.PAGE_UP || n.which === i.PAGE_DOWN) && r(n);
                            n.which === i.ENTER && r(n)
                        }
                    }
                }));
                this.search.on("keyup", this.bind(function() {
                    this.keydowns = 0;
                    this.resizeSearch()
                }));
                this.search.on("blur", this.bind(function(t) {
                    this.container.removeClass("select2-container-active");
                    this.search.removeClass("select2-focused");
                    this.selectChoice(null);
                    this.opened() || this.clearSearch();
                    t.stopImmediatePropagation();
                    this.opts.element.trigger(n.Event("select2-blur"))
                }));
                this.container.on("click", u, this.bind(function(t) {
                    this.isInterfaceEnabled() && (n(t.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(n.Event("select2-focus")), this.open(), this.focusSearch(), t.preventDefault()))
                }));
                this.container.on("focus", u, this.bind(function() {
                    this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(n.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder())
                }));
                this.initContainerWidth();
                this.opts.element.addClass("select2-offscreen");
                this.clearSearch()
            },
            enableInterface: function() {
                this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
            },
            initSelection: function() {
                if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
                    var n = this;
                    this.opts.initSelection.call(null, this.opts.element, function(i) {
                        i !== t && null !== i && (n.updateSelection(i), n.close(), n.clearSearch())
                    })
                }
            },
            clearSearch: function() {
                var n = this.getPlaceholder(),
                    i = this.getMaxSearchWidth();
                n !== t && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(n).addClass("select2-default"), this.search.width(i > 0 ? i : this.container.css("width"))) : this.search.val("").width(10)
            },
            clearPlaceholder: function() {
                this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
            },
            opening: function() {
                this.clearPlaceholder();
                this.resizeSearch();
                this.parent.opening.apply(this, arguments);
                this.focusSearch();
                "" === this.search.val() && this.nextSearchTerm != t && (this.search.val(this.nextSearchTerm), this.search.select());
                this.updateResults(!0);
                this.opts.shouldFocusInput(this) && this.search.focus();
                this.opts.element.trigger(n.Event("select2-open"))
            },
            close: function() {
                this.opened() && this.parent.close.apply(this, arguments)
            },
            focus: function() {
                this.close();
                this.search.focus()
            },
            isFocused: function() {
                return this.search.hasClass("select2-focused")
            },
            updateSelection: function(t) {
                var r = [],
                    u = [],
                    i = this;
                n(t).each(function() {
                    e(i.id(this), r) < 0 && (r.push(i.id(this)), u.push(this))
                });
                t = u;
                this.selection.find(".select2-search-choice").remove();
                n(t).each(function() {
                    i.addSelectedChoice(this)
                });
                i.postprocessResults()
            },
            tokenize: function() {
                var n = this.search.val();
                n = this.opts.tokenizer.call(this, n, this.data(), this.bind(this.onSelect), this.opts);
                null != n && n != t && (this.search.val(n), n.length > 0 && this.open())
            },
            onSelect: function(n, i) {
                this.triggerSelect(n) && (this.addSelectedChoice(n), this.opts.element.trigger({
                    type: "selected",
                    val: this.id(n),
                    choice: n
                }), this.nextSearchTerm = this.opts.nextSearchTerm(n, this.search.val()), this.clearSearch(), this.updateResults(), (this.select || !this.opts.closeOnSelect) && this.postprocessResults(n, !1, this.opts.closeOnSelect === !0), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() ? this.updateResults(!0) : this.nextSearchTerm != t && (this.search.val(this.nextSearchTerm), this.updateResults(), this.search.select()), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({
                    added: n
                }), i && i.noFocus || this.focusSearch())
            },
            cancel: function() {
                this.close();
                this.focusSearch()
            },
            addSelectedChoice: function(i) {
                var f, e, o = !i.locked,
                    h = n("<li class='select2-search-choice'>    <div><\/div>    <a href='#' class='select2-search-choice-close' tabindex='-1'><\/a><\/li>"),
                    c = n("<li class='select2-search-choice select2-locked'><div><\/div><\/li>"),
                    u = o ? h : c,
                    l = this.id(i),
                    s = this.getVal();
                f = this.opts.formatSelection(i, u.find("div"), this.opts.escapeMarkup);
                f != t && u.find("div").replaceWith("<div>" + f + "<\/div>");
                e = this.opts.formatSelectionCssClass(i, u.find("div"));
                e != t && u.addClass(e);
                o && u.find(".select2-search-choice-close").on("mousedown", r).on("click dblclick", this.bind(function(t) {
                    this.isInterfaceEnabled() && (this.unselect(n(t.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), r(t), this.close(), this.focusSearch())
                })).on("focus", this.bind(function() {
                    this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"))
                }));
                u.data("select2-data", i);
                u.insertBefore(this.searchContainer);
                s.push(l);
                this.setVal(s)
            },
            unselect: function(t) {
                var i, f, u = this.getVal(),
                    r;
                if (t = t.closest(".select2-search-choice"), 0 === t.length) throw "Invalid argument: " + t + ". Must be .select2-search-choice";
                if (i = t.data("select2-data")) {
                    if (r = n.Event("select2-removing"), r.val = this.id(i), r.choice = i, this.opts.element.trigger(r), r.isDefaultPrevented()) return !1;
                    for (;
                        (f = e(this.id(i), u)) >= 0;) u.splice(f, 1), this.setVal(u), this.select && this.postprocessResults();
                    return t.remove(), this.opts.element.trigger({
                        type: "select2-removed",
                        val: this.id(i),
                        choice: i
                    }), this.triggerChange({
                        removed: i
                    }), !0
                }
            },
            postprocessResults: function(n, t, i) {
                var s = this.getVal(),
                    f = this.results.find(".select2-result"),
                    h = this.results.find(".select2-result-with-children"),
                    r = this;
                f.each2(function(n, t) {
                    var i = r.id(t.data("select2-data"));
                    e(i, s) >= 0 && (t.addClass("select2-selected"), t.find(".select2-result-selectable").addClass("select2-selected"))
                });
                h.each2(function(n, t) {
                    t.is(".select2-result-selectable") || 0 !== t.find(".select2-result-selectable:not(.select2-selected)").length || t.addClass("select2-selected")
                }); - 1 == this.highlight() && i !== !1 && r.highlight(0);
                !this.opts.createSearchChoice && !f.filter(".select2-result:not(.select2-selected)").length > 0 && (!n || n && !n.more && 0 === this.results.find(".select2-no-results").length) && o(r.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + u(r.opts.formatNoMatches, r.opts.element, r.search.val()) + "<\/li>")
            },
            getMaxSearchWidth: function() {
                return this.selection.width() - g(this.search)
            },
            resizeSearch: function() {
                var i, u, t, f, n, r = g(this.search);
                i = wt(this.search) + 10;
                u = this.search.offset().left;
                t = this.selection.width();
                f = this.selection.offset().left;
                n = t - (u - f) - r;
                i > n && (n = t - r);
                40 > n && (n = t - r);
                0 >= n && (n = i);
                this.search.width(Math.floor(n))
            },
            getVal: function() {
                var n;
                return this.select ? (n = this.select.val(), null === n ? [] : n) : (n = this.opts.element.val(), v(n, this.opts.separator))
            },
            setVal: function(t) {
                var i;
                this.select ? this.select.val(t) : (i = [], n(t).each(function() {
                    e(this, i) < 0 && i.push(this)
                }), this.opts.element.val(0 === i.length ? "" : i.join(this.opts.separator)))
            },
            buildChangeDetails: function(n, t) {
                for (var r, t = t.slice(0), n = n.slice(0), i = 0; i < t.length; i++)
                    for (r = 0; r < n.length; r++) f(this.opts.id(t[i]), this.opts.id(n[r])) && (t.splice(i, 1), i > 0 && i--, n.splice(r, 1), r--);
                return {
                    added: t,
                    removed: n
                }
            },
            val: function(i, r) {
                var f, u = this;
                if (0 === arguments.length) return this.getVal();
                if (f = this.data(), f.length || (f = []), !i && 0 !== i) return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), r && this.triggerChange({
                    added: this.data(),
                    removed: f
                }), void 0;
                if (this.setVal(i), this.select) this.opts.initSelection(this.select, this.bind(this.updateSelection)), r && this.triggerChange(this.buildChangeDetails(f, this.data()));
                else {
                    if (this.opts.initSelection === t) throw new Error("val() cannot be called if initSelection() is not defined");
                    this.opts.initSelection(this.opts.element, function(t) {
                        var i = n.map(t, u.id);
                        u.setVal(i);
                        u.updateSelection(t);
                        u.clearSearch();
                        r && u.triggerChange(u.buildChangeDetails(f, u.data()))
                    })
                }
                this.clearSearch()
            },
            onSortStart: function() {
                if (this.select) throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
                this.search.width(0);
                this.searchContainer.hide()
            },
            onSortEnd: function() {
                var t = [],
                    i = this;
                this.searchContainer.show();
                this.searchContainer.appendTo(this.searchContainer.parent());
                this.resizeSearch();
                this.selection.find(".select2-search-choice").each(function() {
                    t.push(i.opts.id(n(this).data("select2-data")))
                });
                this.setVal(t);
                this.triggerChange()
            },
            data: function(t, i) {
                var r, u, f = this;
                return 0 === arguments.length ? this.selection.children(".select2-search-choice").map(function() {
                    return n(this).data("select2-data")
                }).get() : (u = this.data(), t || (t = []), r = n.map(t, function(n) {
                    return f.opts.id(n)
                }), this.setVal(r), this.updateSelection(t), this.clearSearch(), i && this.triggerChange(this.buildChangeDetails(u, this.data())), void 0)
            }
        });
        n.fn.select2 = function() {
            var r, u, f, o, s, i = Array.prototype.slice.call(arguments, 0),
                c = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
                l = ["opened", "isFocused", "container", "dropdown"],
                a = ["val", "data"],
                h = {
                    search: "externalSearch"
                };
            return this.each(function() {
                if (0 === i.length || "object" == typeof i[0]) r = 0 === i.length ? {} : n.extend({}, i[0]), r.element = n(this), "select" === r.element.get(0).tagName.toLowerCase() ? s = r.element.prop("multiple") : (s = r.multiple || !1, "tags" in r && (r.multiple = s = !0)), u = s ? new window.Select2["class"].multi : new window.Select2["class"].single, u.init(r);
                else {
                    if ("string" != typeof i[0]) throw "Invalid arguments to select2 plugin: " + i;
                    if (e(i[0], c) < 0) throw "Unknown method: " + i[0];
                    if (o = t, u = n(this).data("select2"), u === t) return;
                    if (f = i[0], "container" === f ? o = u.container : "dropdown" === f ? o = u.dropdown : (h[f] && (f = h[f]), o = u[f].apply(u, i.slice(1))), e(i[0], l) >= 0 || e(i[0], a) >= 0 && 1 == i.length) return !1
                }
            }), o === t ? this : o
        };
        n.fn.select2.defaults = {
            width: "copy",
            loadMorePadding: 0,
            closeOnSelect: !0,
            openOnEnter: !0,
            containerCss: {},
            dropdownCss: {},
            containerCssClass: "",
            dropdownCssClass: "",
            formatResult: function(n, t, i, r) {
                var u = [];
                return it(n.text, i.term, u, r), u.join("")
            },
            formatSelection: function(n, i, r) {
                return n ? r(n.text) : t
            },
            sortResults: function(n) {
                return n
            },
            formatResultCssClass: function(n) {
                return n.css
            },
            formatSelectionCssClass: function() {
                return t
            },
            formatMatches: function(n) {
                return 1 === n ? "One result is available, press enter to select it." : n + " results are available, use up and down arrow keys to navigate."
            },
            formatNoMatches: function() {
                return "No matches found"
            },
            formatInputTooShort: function(n, t) {
                var i = t - n.length;
                return "Please enter " + i + " or more character" + (1 == i ? "" : "s")
            },
            formatInputTooLong: function(n, t) {
                var i = n.length - t;
                return "Please delete " + i + " character" + (1 == i ? "" : "s")
            },
            formatSelectionTooBig: function(n) {
                return "You can only select " + n + " item" + (1 == n ? "" : "s")
            },
            formatLoadMore: function() {
                return "Loading more results…"
            },
            formatSearching: function() {
                return "Searching…"
            },
            minimumResultsForSearch: 0,
            minimumInputLength: 0,
            maximumInputLength: null,
            maximumSelectionSize: 0,
            id: function(n) {
                return n == t ? null : n.id
            },
            matcher: function(n, t) {
                return h("" + t).toUpperCase().indexOf(h("" + n).toUpperCase()) >= 0
            },
            separator: ",",
            tokenSeparators: [],
            tokenizer: bt,
            escapeMarkup: rt,
            blurOnChange: !1,
            selectOnBlur: !1,
            adaptContainerCssClass: function(n) {
                return n
            },
            adaptDropdownCssClass: function() {
                return null
            },
            nextSearchTerm: function() {
                return t
            },
            searchInputPlaceholder: "",
            createSearchChoicePosition: "top",
            shouldFocusInput: function(n) {
                var t = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
                return t ? n.opts.minimumResultsForSearch < 0 ? !1 : !0 : !0
            }
        };
        n.fn.select2.ajaxDefaults = {
            transport: n.ajax,
            params: {
                type: "GET",
                cache: !1,
                dataType: "json"
            }
        };
        window.Select2 = {
            query: {
                ajax: ut,
                local: ft,
                tags: et
            },
            util: {
                debounce: tt,
                markMatch: it,
                escapeMarkup: rt,
                stripDiacritics: h
            },
            "class": {
                abstract: a,
                single: st,
                multi: ht
            }
        }
    }
}(jQuery),
function(n) {
    "use strict";
    n.extend(n.fn.select2.defaults, {
        formatNoMatches: function() {
            return "Няма намерени съвпадения"
        },
        formatInputTooShort: function(n, t) {
            var i = t - n.length;
            return "Моля, въведете още " + i + " символ" + (i > 1 ? "а" : "")
        },
        formatInputTooLong: function(n, t) {
            var i = n.length - t;
            return "Моля, въведете с " + i + " по-малко символ" + (i > 1 ? "а" : "")
        },
        formatSelectionTooBig: function(n) {
            return "Можете да направите до " + n + (n > 1 ? " избора" : " избор")
        },
        formatLoadMore: function() {
            return "Зареждат се още…"
        },
        formatSearching: function() {
            return "Търсене…"
        }
    })
}(jQuery);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(n, t, i, r, u) {
        return jQuery.easing[jQuery.easing.def](n, t, i, r, u)
    },
    easeInQuad: function(n, t, i, r, u) {
        return r * (t /= u) * t + i
    },
    easeOutQuad: function(n, t, i, r, u) {
        return -r * (t /= u) * (t - 2) + i
    },
    easeInOutQuad: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t + i : -r / 2 * (--t * (t - 2) - 1) + i
    },
    easeInCubic: function(n, t, i, r, u) {
        return r * (t /= u) * t * t + i
    },
    easeOutCubic: function(n, t, i, r, u) {
        return r * ((t = t / u - 1) * t * t + 1) + i
    },
    easeInOutCubic: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t * t + i : r / 2 * ((t -= 2) * t * t + 2) + i
    },
    easeInQuart: function(n, t, i, r, u) {
        return r * (t /= u) * t * t * t + i
    },
    easeOutQuart: function(n, t, i, r, u) {
        return -r * ((t = t / u - 1) * t * t * t - 1) + i
    },
    easeInOutQuart: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t * t * t + i : -r / 2 * ((t -= 2) * t * t * t - 2) + i
    },
    easeInQuint: function(n, t, i, r, u) {
        return r * (t /= u) * t * t * t * t + i
    },
    easeOutQuint: function(n, t, i, r, u) {
        return r * ((t = t / u - 1) * t * t * t * t + 1) + i
    },
    easeInOutQuint: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t * t * t * t + i : r / 2 * ((t -= 2) * t * t * t * t + 2) + i
    },
    easeInSine: function(n, t, i, r, u) {
        return -r * Math.cos(t / u * (Math.PI / 2)) + r + i
    },
    easeOutSine: function(n, t, i, r, u) {
        return r * Math.sin(t / u * (Math.PI / 2)) + i
    },
    easeInOutSine: function(n, t, i, r, u) {
        return -r / 2 * (Math.cos(Math.PI * t / u) - 1) + i
    },
    easeInExpo: function(n, t, i, r, u) {
        return t == 0 ? i : r * Math.pow(2, 10 * (t / u - 1)) + i
    },
    easeOutExpo: function(n, t, i, r, u) {
        return t == u ? i + r : r * (-Math.pow(2, -10 * t / u) + 1) + i
    },
    easeInOutExpo: function(n, t, i, r, u) {
        return t == 0 ? i : t == u ? i + r : (t /= u / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + i : r / 2 * (-Math.pow(2, -10 * --t) + 2) + i
    },
    easeInCirc: function(n, t, i, r, u) {
        return -r * (Math.sqrt(1 - (t /= u) * t) - 1) + i
    },
    easeOutCirc: function(n, t, i, r, u) {
        return r * Math.sqrt(1 - (t = t / u - 1) * t) + i
    },
    easeInOutCirc: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + i : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
    },
    easeInElastic: function(n, t, i, r, u) {
        var o = 1.70158,
            f = 0,
            e = r;
        return t == 0 ? i : (t /= u) == 1 ? i + r : (f || (f = u * .3), e < Math.abs(r) ? (e = r, o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e), -(e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f)) + i)
    },
    easeOutElastic: function(n, t, i, r, u) {
        var o = 1.70158,
            f = 0,
            e = r;
        return t == 0 ? i : (t /= u) == 1 ? i + r : (f || (f = u * .3), e < Math.abs(r) ? (e = r, o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e), e * Math.pow(2, -10 * t) * Math.sin((t * u - o) * 2 * Math.PI / f) + r + i)
    },
    easeInOutElastic: function(n, t, i, r, u) {
        var o = 1.70158,
            f = 0,
            e = r;
        return t == 0 ? i : (t /= u / 2) == 2 ? i + r : (f || (f = u * .3 * 1.5), e < Math.abs(r) ? (e = r, o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e), t < 1) ? -.5 * e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f) + i : e * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f) * .5 + r + i
    },
    easeInBack: function(n, t, i, r, u, f) {
        return f == undefined && (f = 1.70158), r * (t /= u) * t * ((f + 1) * t - f) + i
    },
    easeOutBack: function(n, t, i, r, u, f) {
        return f == undefined && (f = 1.70158), r * ((t = t / u - 1) * t * ((f + 1) * t + f) + 1) + i
    },
    easeInOutBack: function(n, t, i, r, u, f) {
        return (f == undefined && (f = 1.70158), (t /= u / 2) < 1) ? r / 2 * t * t * (((f *= 1.525) + 1) * t - f) + i : r / 2 * ((t -= 2) * t * (((f *= 1.525) + 1) * t + f) + 2) + i
    },
    easeInBounce: function(n, t, i, r, u) {
        return r - jQuery.easing.easeOutBounce(n, u - t, 0, r, u) + i
    },
    easeOutBounce: function(n, t, i, r, u) {
        return (t /= u) < 1 / 2.75 ? r * 7.5625 * t * t + i : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
    },
    easeInOutBounce: function(n, t, i, r, u) {
        return t < u / 2 ? jQuery.easing.easeInBounce(n, t * 2, 0, r, u) * .5 + i : jQuery.easing.easeOutBounce(n, t * 2 - u, 0, r, u) * .5 + r * .5 + i
    }
});
! function(n, t) {
    function u() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function e() {
        var n = new Date;
        return u(n.getFullYear(), n.getMonth(), n.getDate())
    }

    function y(n, t) {
        return n.getUTCFullYear() === t.getUTCFullYear() && n.getUTCMonth() === t.getUTCMonth() && n.getUTCDate() === t.getUTCDate()
    }

    function c(n) {
        return function() {
            return this[n].apply(this, arguments)
        }
    }

    function p(t, i) {
        function o(n, t) {
            return t.toLowerCase()
        }
        var u, f = n(t).data(),
            e = {},
            s = new RegExp("^" + i.toLowerCase() + "([A-Z])"),
            r;
        i = new RegExp("^" + i.toLowerCase());
        for (r in f) i.test(r) && (u = r.replace(s, o), e[u] = f[r]);
        return e
    }

    function w(t) {
        var u = {},
            i;
        if (r[t] || (t = t.split("-")[0], r[t])) return i = r[t], n.each(v, function(n, t) {
            t in i && (u[t] = i[t])
        }), u
    }
    var l = function() {
            var t = {
                get: function(n) {
                    return this.slice(n)[0]
                },
                contains: function(n) {
                    for (var i = n && n.valueOf(), t = 0, r = this.length; r > t; t++)
                        if (this[t].valueOf() === i) return t;
                    return -1
                },
                remove: function(n) {
                    this.splice(n, 1)
                },
                replace: function(t) {
                    t && (n.isArray(t) || (t = [t]), this.clear(), this.push.apply(this, t))
                },
                clear: function() {
                    this.length = 0
                },
                copy: function() {
                    var n = new l;
                    return n.replace(this), n
                }
            };
            return function() {
                var i = [];
                return i.push.apply(i, arguments), n.extend(i, t), i
            }
        }(),
        f = function(t, r) {
            this._process_options(r);
            this.dates = new l;
            this.viewDate = this.o.defaultViewDate;
            this.focusDate = null;
            this.element = n(t);
            this.isInline = !1;
            this.isInput = this.element.is("input");
            this.component = this.element.hasClass("date") ? this.element.find(".add-on, .input-group-addon, .btn") : !1;
            this.hasInput = this.component && this.element.find("input").length;
            this.component && 0 === this.component.length && (this.component = !1);
            this.picker = n(i.template);
            this._buildEvents();
            this._attachEvents();
            this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu");
            this.o.rtl && this.picker.addClass("datepicker-rtl");
            this.viewMode = this.o.startView;
            this.o.calendarWeeks && this.picker.find("tfoot .today, tfoot .clear").attr("colspan", function(n, t) {
                return parseInt(t) + 1
            });
            this._allow_update = !1;
            this.setStartDate(this._o.startDate);
            this.setEndDate(this._o.endDate);
            this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
            this.setDatesDisabled(this.o.datesDisabled);
            this.fillDow();
            this.fillMonths();
            this._allow_update = !0;
            this.update();
            this.showMode();
            this.isInline && this.show()
        },
        h, a, o, s, v, r, i;
    f.prototype = {
        constructor: f,
        _process_options: function(f) {
            var o, c, a, v, h, l;
            this._o = n.extend({}, this._o, f);
            o = this.o = n.extend({}, this._o);
            c = o.language;
            switch (r[c] || (c = c.split("-")[0], r[c] || (c = s.language)), o.language = c, o.startView) {
                case 2:
                case "decade":
                    o.startView = 2;
                    break;
                case 1:
                case "year":
                    o.startView = 1;
                    break;
                default:
                    o.startView = 0
            }
            switch (o.minViewMode) {
                case 1:
                case "months":
                    o.minViewMode = 1;
                    break;
                case 2:
                case "years":
                    o.minViewMode = 2;
                    break;
                default:
                    o.minViewMode = 0
            }
            if (o.startView = Math.max(o.startView, o.minViewMode), o.multidate !== !0 && (o.multidate = Number(o.multidate) || !1, o.multidate !== !1 && (o.multidate = Math.max(0, o.multidate))), o.multidateSeparator = String(o.multidateSeparator), o.weekStart %= 7, o.weekEnd = (o.weekStart + 6) % 7, a = i.parseFormat(o.format), (o.startDate !== -1 / 0 && (o.startDate = o.startDate ? o.startDate instanceof Date ? this._local_to_utc(this._zero_time(o.startDate)) : i.parseDate(o.startDate, a, o.language) : -1 / 0), 1 / 0 !== o.endDate && (o.endDate = o.endDate ? o.endDate instanceof Date ? this._local_to_utc(this._zero_time(o.endDate)) : i.parseDate(o.endDate, a, o.language) : 1 / 0), o.daysOfWeekDisabled = o.daysOfWeekDisabled || [], n.isArray(o.daysOfWeekDisabled) || (o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/)), o.daysOfWeekDisabled = n.map(o.daysOfWeekDisabled, function(n) {
                    return parseInt(n, 10)
                }), o.datesDisabled = o.datesDisabled || [], n.isArray(o.datesDisabled)) || (v = [], v.push(i.parseDate(o.datesDisabled, a, o.language)), o.datesDisabled = v), o.datesDisabled = n.map(o.datesDisabled, function(n) {
                    return i.parseDate(n, a, o.language)
                }), h = String(o.orientation).toLowerCase().split(/\s+/g), l = o.orientation.toLowerCase(), h = n.grep(h, function(n) {
                    return /^auto|left|right|top|bottom$/.test(n)
                }), o.orientation = {
                    x: "auto",
                    y: "auto"
                }, l && "auto" !== l)
                if (1 === h.length) switch (h[0]) {
                    case "top":
                    case "bottom":
                        o.orientation.y = h[0];
                        break;
                    case "left":
                    case "right":
                        o.orientation.x = h[0]
                } else l = n.grep(h, function(n) {
                    return /^left|right$/.test(n)
                }), o.orientation.x = l[0] || "auto", l = n.grep(h, function(n) {
                    return /^top|bottom$/.test(n)
                }), o.orientation.y = l[0] || "auto";
            if (o.defaultViewDate) {
                var y = o.defaultViewDate.year || (new Date).getFullYear(),
                    p = o.defaultViewDate.month || 0,
                    w = o.defaultViewDate.day || 1;
                o.defaultViewDate = u(y, p, w)
            } else o.defaultViewDate = e();
            o.showOnFocus = o.showOnFocus !== t ? o.showOnFocus : !0
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function(n) {
            for (var f, r, u, i = 0; i < n.length; i++) f = n[i][0], 2 === n[i].length ? (r = t, u = n[i][1]) : 3 === n[i].length && (r = n[i][1], u = n[i][2]), f.on(u, r)
        },
        _unapplyEvents: function(n) {
            for (var f, r, u, i = 0; i < n.length; i++) f = n[i][0], 2 === n[i].length ? (u = t, r = n[i][1]) : 3 === n[i].length && (u = n[i][1], r = n[i][2]), f.off(r, u)
        },
        _buildEvents: function() {
            var t = {
                keyup: n.proxy(function(t) {
                    -1 === n.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                }, this),
                keydown: n.proxy(this.keydown, this)
            };
            this.o.showOnFocus === !0 && (t.focus = n.proxy(this.show, this));
            this.isInput ? this._events = [
                [this.element, t]
            ] : this.component && this.hasInput ? this._events = [
                [this.element.find("input"), t],
                [this.component, {
                    click: n.proxy(this.show, this)
                }]
            ] : this.element.is("div") ? this.isInline = !0 : this._events = [
                [this.element, {
                    click: n.proxy(this.show, this)
                }]
            ];
            this._events.push([this.element, "*", {
                blur: n.proxy(function(n) {
                    this._focused_from = n.target
                }, this)
            }], [this.element, {
                blur: n.proxy(function(n) {
                    this._focused_from = n.target
                }, this)
            }]);
            this._secondaryEvents = [
                [this.picker, {
                    click: n.proxy(this.click, this)
                }],
                [n(window), {
                    resize: n.proxy(this.place, this)
                }],
                [n(document), {
                    "mousedown touchstart": n.proxy(function(n) {
                        this.element.is(n.target) || this.element.find(n.target).length || this.picker.is(n.target) || this.picker.find(n.target).length || this.hide()
                    }, this)
                }]
            ]
        },
        _attachEvents: function() {
            this._detachEvents();
            this._applyEvents(this._events)
        },
        _detachEvents: function() {
            this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function() {
            this._detachSecondaryEvents();
            this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function() {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function(t, r) {
            var u = r || this.dates.get(-1),
                f = this._utc_to_local(u);
            this.element.trigger({
                type: t,
                date: f,
                dates: n.map(this.dates, this._utc_to_local),
                format: n.proxy(function(n, t) {
                    0 === arguments.length ? (n = this.dates.length - 1, t = this.o.format) : "string" == typeof n && (t = n, n = this.dates.length - 1);
                    t = t || this.o.format;
                    var r = this.dates.get(n);
                    return i.formatDate(r, t, this.o.language)
                }, this)
            })
        },
        show: function() {
            if (!this.element.attr("readonly") || this.o.enableOnReadonly !== !1) return (this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && n(this.element).blur(), this)
        },
        hide: function() {
            return this.isInline ? this : this.picker.is(":visible") ? (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"), this) : this
        },
        remove: function() {
            return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
        },
        _utc_to_local: function(n) {
            return n && new Date(n.getTime() + 6e4 * n.getTimezoneOffset())
        },
        _local_to_utc: function(n) {
            return n && new Date(n.getTime() - 6e4 * n.getTimezoneOffset())
        },
        _zero_time: function(n) {
            return n && new Date(n.getFullYear(), n.getMonth(), n.getDate())
        },
        _zero_utc_time: function(n) {
            return n && new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()))
        },
        getDates: function() {
            return n.map(this.dates, this._utc_to_local)
        },
        getUTCDates: function() {
            return n.map(this.dates, function(n) {
                return new Date(n)
            })
        },
        getDate: function() {
            return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function() {
            var n = this.dates.get(-1);
            return "undefined" != typeof n ? new Date(n) : null
        },
        clearDates: function() {
            var n;
            this.isInput ? n = this.element : this.component && (n = this.element.find("input"));
            n && n.val("").change();
            this.update();
            this._trigger("changeDate");
            this.o.autoclose && this.hide()
        },
        setDates: function() {
            var t = n.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, t), this._trigger("changeDate"), this.setValue(), this
        },
        setUTCDates: function() {
            var t = n.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, n.map(t, this._utc_to_local)), this._trigger("changeDate"), this.setValue(), this
        },
        setDate: c("setDates"),
        setUTCDate: c("setUTCDates"),
        setValue: function() {
            var n = this.getFormattedDate();
            return this.isInput ? this.element.val(n).change() : this.component && this.element.find("input").val(n).change(), this
        },
        getFormattedDate: function(r) {
            r === t && (r = this.o.format);
            var u = this.o.language;
            return n.map(this.dates, function(n) {
                return i.formatDate(n, r, u)
            }).join(this.o.multidateSeparator)
        },
        setStartDate: function(n) {
            return this._process_options({
                startDate: n
            }), this.update(), this.updateNavArrows(), this
        },
        setEndDate: function(n) {
            return this._process_options({
                endDate: n
            }), this.update(), this.updateNavArrows(), this
        },
        setDaysOfWeekDisabled: function(n) {
            return this._process_options({
                daysOfWeekDisabled: n
            }), this.update(), this.updateNavArrows(), this
        },
        setDatesDisabled: function(n) {
            this._process_options({
                datesDisabled: n
            });
            this.update();
            this.updateNavArrows()
        },
        place: function() {
            var p, s, u, w;
            if (this.isInline) return this;
            var f = this.picker.outerWidth(),
                e = this.picker.outerHeight(),
                h = n(this.o.container).width(),
                b = n(this.o.container).height(),
                c = n(this.o.container).scrollTop(),
                l = n(this.o.container).offset(),
                a = [];
            this.element.parents().each(function() {
                var t = n(this).css("z-index");
                "auto" !== t && 0 !== t && a.push(parseInt(t))
            });
            var v = Math.max.apply(Math, a) + 10,
                r = this.component ? this.component.parent().offset() : this.element.offset(),
                y = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                o = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                t = r.left - l.left,
                i = r.top - l.top;
            return this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (t -= f - o)) : r.left < 0 ? (this.picker.addClass("datepicker-orient-left"), t -= r.left - 10) : t + f > h ? (this.picker.addClass("datepicker-orient-right"), t = r.left + o - f) : this.picker.addClass("datepicker-orient-left"), u = this.o.orientation.y, ("auto" === u && (p = -c + i - e, s = c + b - (i + y + e), u = Math.max(p, s) === s ? "top" : "bottom"), this.picker.addClass("datepicker-orient-" + u), "top" === u ? i += y : i -= e + parseInt(this.picker.css("padding-top")), this.o.rtl) ? (w = h - (t + o), this.picker.css({
                top: i,
                right: w,
                zIndex: v
            })) : this.picker.css({
                top: i,
                left: t,
                zIndex: v
            }), this
        },
        _allow_update: !0,
        update: function() {
            if (!this._allow_update) return this;
            var r = this.dates.copy(),
                t = [],
                u = !1;
            return arguments.length ? (n.each(arguments, n.proxy(function(n, i) {
                i instanceof Date && (i = this._local_to_utc(i));
                t.push(i)
            }, this)), u = !0) : (t = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), t = t && this.o.multidate ? t.split(this.o.multidateSeparator) : [t], delete this.element.data().date), t = n.map(t, n.proxy(function(n) {
                return i.parseDate(n, this.o.format, this.o.language)
            }, this)), t = n.grep(t, n.proxy(function(n) {
                return n < this.o.startDate || n > this.o.endDate || !n
            }, this), !0), this.dates.replace(t), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate && (this.viewDate = new Date(this.o.endDate)), u ? this.setValue() : t.length && String(r) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && r.length && this._trigger("clearDate"), this.fill(), this
        },
        fillDow: function() {
            var t = this.o.weekStart,
                n = "<tr>",
                i;
            for (this.o.calendarWeeks && (this.picker.find(".datepicker-days thead tr:first-child .datepicker-switch").attr("colspan", function(n, t) {
                    return parseInt(t) + 1
                }), i = '<th class="cw">&#160;<\/th>', n += i); t < this.o.weekStart + 7;) n += '<th class="dow">' + r[this.o.language].daysMin[t++ % 7] + "<\/th>";
            n += "<\/tr>";
            this.picker.find(".datepicker-days thead").append(n)
        },
        fillMonths: function() {
            for (var n = "", t = 0; 12 > t;) n += '<span class="month">' + r[this.o.language].monthsShort[t++] + "<\/span>";
            this.picker.find(".datepicker-months td").html(n)
        },
        setRange: function(t) {
            t && t.length ? this.range = n.map(t, function(n) {
                return n.valueOf()
            }) : delete this.range;
            this.fill()
        },
        getClassNames: function(t) {
            var i = [],
                r = this.viewDate.getUTCFullYear(),
                f = this.viewDate.getUTCMonth(),
                u = new Date;
            return t.getUTCFullYear() < r || t.getUTCFullYear() === r && t.getUTCMonth() < f ? i.push("old") : (t.getUTCFullYear() > r || t.getUTCFullYear() === r && t.getUTCMonth() > f) && i.push("new"), this.focusDate && t.valueOf() === this.focusDate.valueOf() && i.push("focused"), this.o.todayHighlight && t.getUTCFullYear() === u.getFullYear() && t.getUTCMonth() === u.getMonth() && t.getUTCDate() === u.getDate() && i.push("today"), -1 !== this.dates.contains(t) && i.push("active"), (t.valueOf() < this.o.startDate || t.valueOf() > this.o.endDate || -1 !== n.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled)) && i.push("disabled"), this.o.datesDisabled.length > 0 && n.grep(this.o.datesDisabled, function(n) {
                return y(t, n)
            }).length > 0 && i.push("disabled", "disabled-date"), this.range && (t > this.range[0] && t < this.range[this.range.length - 1] && i.push("range"), -1 !== n.inArray(t.valueOf(), this.range) && i.push("selected")), i
        },
        fill: function() {
            var y, g = new Date(this.viewDate),
                f = g.getUTCFullYear(),
                p = g.getUTCMonth(),
                w = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                ft = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                b = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCFullYear() : 1 / 0,
                et = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCMonth() : 1 / 0,
                ot = r[this.o.language].today || r.en.today || "",
                st = r[this.o.language].clear || r.en.clear || "",
                e, k, c, h, s, o, l, it, rt, a, ut, v;
            if (!isNaN(f) && !isNaN(p)) {
                for (this.picker.find(".datepicker-days thead .datepicker-switch").text(r[this.o.language].months[p] + " " + f), this.picker.find("tfoot .today").text(ot).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot .clear").text(st).toggle(this.o.clearBtn !== !1), this.updateNavArrows(), this.fillMonths(), e = u(f, p - 1, 28), k = i.getDaysInMonth(e.getUTCFullYear(), e.getUTCMonth()), e.setUTCDate(k), e.setUTCDate(k - (e.getUTCDay() - this.o.weekStart + 7) % 7), c = new Date(e), c.setUTCDate(c.getUTCDate() + 42), c = c.valueOf(), s = []; e.valueOf() < c;) {
                    if (e.getUTCDay() === this.o.weekStart && (s.push("<tr>"), this.o.calendarWeeks)) {
                        var nt = new Date(+e + (this.o.weekStart - e.getUTCDay() - 7) % 7 * 864e5),
                            tt = new Date(Number(nt) + (11 - nt.getUTCDay()) % 7 * 864e5),
                            d = new Date(Number(d = u(tt.getUTCFullYear(), 0, 1)) + (11 - d.getUTCDay()) % 7 * 864e5),
                            ht = (tt - d) / 6048e5 + 1;
                        s.push('<td class="cw">' + ht + "<\/td>")
                    }(h = this.getClassNames(e), h.push("day"), this.o.beforeShowDay !== n.noop) && (o = this.o.beforeShowDay(this._utc_to_local(e)), o === t ? o = {} : "boolean" == typeof o ? o = {
                        enabled: o
                    } : "string" == typeof o && (o = {
                        classes: o
                    }), o.enabled === !1 && h.push("disabled"), o.classes && (h = h.concat(o.classes.split(/\s+/))), o.tooltip && (y = o.tooltip));
                    h = n.unique(h);
                    s.push('<td class="' + h.join(" ") + '"' + (y ? ' title="' + y + '"' : "") + ">" + e.getUTCDate() + "<\/td>");
                    y = null;
                    e.getUTCDay() === this.o.weekEnd && s.push("<\/tr>");
                    e.setUTCDate(e.getUTCDate() + 1)
                }
                for (this.picker.find(".datepicker-days tbody").empty().append(s.join("")), l = this.picker.find(".datepicker-months").find("th:eq(1)").text(f).end().find("span").removeClass("active"), (n.each(this.dates, function(n, t) {
                        t.getUTCFullYear() === f && l.eq(t.getUTCMonth()).addClass("active")
                    }), (w > f || f > b) && l.addClass("disabled"), f === w && l.slice(0, ft).addClass("disabled"), f === b && l.slice(et + 1).addClass("disabled"), this.o.beforeShowMonth !== n.noop) && (it = this, n.each(l, function(t, i) {
                        if (!n(i).hasClass("disabled")) {
                            var r = new Date(f, t, 1),
                                u = it.o.beforeShowMonth(r);
                            u === !1 && n(i).addClass("disabled")
                        }
                    })), s = "", f = 10 * parseInt(f / 10, 10), rt = this.picker.find(".datepicker-years").find("th:eq(1)").text(f + "-" + (f + 9)).end().find("td"), f -= 1, ut = n.map(this.dates, function(n) {
                        return n.getUTCFullYear()
                    }), v = -1; 11 > v; v++) a = ["year"], -1 === v ? a.push("old") : 10 === v && a.push("new"), -1 !== n.inArray(f, ut) && a.push("active"), (w > f || f > b) && a.push("disabled"), s += '<span class="' + a.join(" ") + '">' + f + "<\/span>", f += 1;
                rt.html(s)
            }
        },
        updateNavArrows: function() {
            if (this._allow_update) {
                var t = new Date(this.viewDate),
                    n = t.getUTCFullYear(),
                    i = t.getUTCMonth();
                switch (this.viewMode) {
                    case 0:
                        this.picker.find(".prev").css(this.o.startDate !== -1 / 0 && n <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? {
                            visibility: "hidden"
                        } : {
                            visibility: "visible"
                        });
                        this.picker.find(".next").css(1 / 0 !== this.o.endDate && n >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? {
                            visibility: "hidden"
                        } : {
                            visibility: "visible"
                        });
                        break;
                    case 1:
                    case 2:
                        this.picker.find(".prev").css(this.o.startDate !== -1 / 0 && n <= this.o.startDate.getUTCFullYear() ? {
                            visibility: "hidden"
                        } : {
                            visibility: "visible"
                        });
                        this.picker.find(".next").css(1 / 0 !== this.o.endDate && n >= this.o.endDate.getUTCFullYear() ? {
                            visibility: "hidden"
                        } : {
                            visibility: "visible"
                        })
                }
            }
        },
        click: function(t) {
            var e, f, o, r, h, s, c;
            if (t.preventDefault(), r = n(t.target).closest("span, td, th"), 1 === r.length) switch (r[0].nodeName.toLowerCase()) {
                case "th":
                    switch (r[0].className) {
                        case "datepicker-switch":
                            this.showMode(1);
                            break;
                        case "prev":
                        case "next":
                            h = i.modes[this.viewMode].navStep * ("prev" === r[0].className ? -1 : 1);
                            switch (this.viewMode) {
                                case 0:
                                    this.viewDate = this.moveMonth(this.viewDate, h);
                                    this._trigger("changeMonth", this.viewDate);
                                    break;
                                case 1:
                                case 2:
                                    this.viewDate = this.moveYear(this.viewDate, h);
                                    1 === this.viewMode && this._trigger("changeYear", this.viewDate)
                            }
                            this.fill();
                            break;
                        case "today":
                            s = new Date;
                            s = u(s.getFullYear(), s.getMonth(), s.getDate(), 0, 0, 0);
                            this.showMode(-2);
                            c = "linked" === this.o.todayBtn ? null : "view";
                            this._setDate(s, c);
                            break;
                        case "clear":
                            this.clearDates()
                    }
                    break;
                case "span":
                    r.hasClass("disabled") || (this.viewDate.setUTCDate(1), r.hasClass("month") ? (o = 1, f = r.parent().find("span").index(r), e = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(f), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(u(e, f, o))) : (o = 1, f = 0, e = parseInt(r.text(), 10) || 0, this.viewDate.setUTCFullYear(e), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(u(e, f, o))), this.showMode(-1), this.fill());
                    break;
                case "td":
                    r.hasClass("day") && !r.hasClass("disabled") && (o = parseInt(r.text(), 10) || 1, e = this.viewDate.getUTCFullYear(), f = this.viewDate.getUTCMonth(), r.hasClass("old") ? 0 === f ? (f = 11, e -= 1) : f -= 1 : r.hasClass("new") && (11 === f ? (f = 0, e += 1) : f += 1), this._setDate(u(e, f, o)))
            }
            this.picker.is(":visible") && this._focused_from && n(this._focused_from).focus();
            delete this._focused_from
        },
        _toggle_multidate: function(n) {
            var t = this.dates.contains(n);
            if (n || this.dates.clear(), -1 !== t ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(t) : this.o.multidate === !1 ? (this.dates.clear(), this.dates.push(n)) : this.dates.push(n), "number" == typeof this.o.multidate)
                for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
        },
        _setDate: function(n, t) {
            t && "date" !== t || this._toggle_multidate(n && new Date(n));
            t && "view" !== t || (this.viewDate = n && new Date(n));
            this.fill();
            this.setValue();
            t && "view" === t || this._trigger("changeDate");
            var i;
            this.isInput ? i = this.element : this.component && (i = this.element.find("input"));
            i && i.change();
            !this.o.autoclose || t && "date" !== t || this.hide()
        },
        moveMonth: function(n, i) {
            var e;
            if (!n) return t;
            if (!i) return n;
            var u, f, r = new Date(n.valueOf()),
                o = r.getUTCDate(),
                s = r.getUTCMonth(),
                h = Math.abs(i);
            if (i = i > 0 ? 1 : -1, 1 === h) f = -1 === i ? function() {
                return r.getUTCMonth() === s
            } : function() {
                return r.getUTCMonth() !== u
            }, u = s + i, r.setUTCMonth(u), (0 > u || u > 11) && (u = (u + 12) % 12);
            else {
                for (e = 0; h > e; e++) r = this.moveMonth(r, i);
                u = r.getUTCMonth();
                r.setUTCDate(o);
                f = function() {
                    return u !== r.getUTCMonth()
                }
            }
            for (; f();) r.setUTCDate(--o), r.setUTCMonth(u);
            return r
        },
        moveYear: function(n, t) {
            return this.moveMonth(n, 12 * t)
        },
        dateWithinRange: function(n) {
            return n >= this.o.startDate && n <= this.o.endDate
        },
        keydown: function(n) {
            var t, u, i, o, r, f;
            if (!this.picker.is(":visible")) return void(27 === n.keyCode && this.show());
            o = !1;
            r = this.focusDate || this.viewDate;
            switch (n.keyCode) {
                case 27:
                    this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide();
                    n.preventDefault();
                    break;
                case 37:
                case 39:
                    if (!this.o.keyboardNavigation) break;
                    t = 37 === n.keyCode ? -1 : 1;
                    n.ctrlKey ? (u = this.moveYear(this.dates.get(-1) || e(), t), i = this.moveYear(r, t), this._trigger("changeYear", this.viewDate)) : n.shiftKey ? (u = this.moveMonth(this.dates.get(-1) || e(), t), i = this.moveMonth(r, t), this._trigger("changeMonth", this.viewDate)) : (u = new Date(this.dates.get(-1) || e()), u.setUTCDate(u.getUTCDate() + t), i = new Date(r), i.setUTCDate(r.getUTCDate() + t));
                    this.dateWithinRange(i) && (this.focusDate = this.viewDate = i, this.setValue(), this.fill(), n.preventDefault());
                    break;
                case 38:
                case 40:
                    if (!this.o.keyboardNavigation) break;
                    t = 38 === n.keyCode ? -1 : 1;
                    n.ctrlKey ? (u = this.moveYear(this.dates.get(-1) || e(), t), i = this.moveYear(r, t), this._trigger("changeYear", this.viewDate)) : n.shiftKey ? (u = this.moveMonth(this.dates.get(-1) || e(), t), i = this.moveMonth(r, t), this._trigger("changeMonth", this.viewDate)) : (u = new Date(this.dates.get(-1) || e()), u.setUTCDate(u.getUTCDate() + 7 * t), i = new Date(r), i.setUTCDate(r.getUTCDate() + 7 * t));
                    this.dateWithinRange(i) && (this.focusDate = this.viewDate = i, this.setValue(), this.fill(), n.preventDefault());
                    break;
                case 13:
                    r = this.focusDate || this.dates.get(-1) || this.viewDate;
                    this.o.keyboardNavigation && (this._toggle_multidate(r), o = !0);
                    this.focusDate = null;
                    this.viewDate = this.dates.get(-1) || this.viewDate;
                    this.setValue();
                    this.fill();
                    this.picker.is(":visible") && (n.preventDefault(), "function" == typeof n.stopPropagation ? n.stopPropagation() : n.cancelBubble = !0, this.o.autoclose && this.hide());
                    break;
                case 9:
                    this.focusDate = null;
                    this.viewDate = this.dates.get(-1) || this.viewDate;
                    this.fill();
                    this.hide()
            }
            o && (this._trigger(this.dates.length ? "changeDate" : "clearDate"), this.isInput ? f = this.element : this.component && (f = this.element.find("input")), f && f.change())
        },
        showMode: function(n) {
            n && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + n)));
            this.picker.children("div").hide().filter(".datepicker-" + i.modes[this.viewMode].clsName).css("display", "block");
            this.updateNavArrows()
        }
    };
    h = function(t, i) {
        this.element = n(t);
        this.inputs = n.map(i.inputs, function(n) {
            return n.jquery ? n[0] : n
        });
        delete i.inputs;
        o.call(n(this.inputs), i).bind("changeDate", n.proxy(this.dateUpdated, this));
        this.pickers = n.map(this.inputs, function(t) {
            return n(t).data("datepicker")
        });
        this.updateDates()
    };
    h.prototype = {
        updateDates: function() {
            this.dates = n.map(this.pickers, function(n) {
                return n.getUTCDate()
            });
            this.updateRanges()
        },
        updateRanges: function() {
            var t = n.map(this.dates, function(n) {
                return n.valueOf()
            });
            n.each(this.pickers, function(n, i) {
                i.setRange(t)
            })
        },
        dateUpdated: function(t) {
            if (!this.updating) {
                this.updating = !0;
                var e = n(t.target).data("datepicker"),
                    i = e.getUTCDate(),
                    f = n.inArray(t.target, this.inputs),
                    r = f - 1,
                    u = f + 1,
                    o = this.inputs.length;
                if (-1 !== f) {
                    if (n.each(this.pickers, function(n, t) {
                            t.getUTCDate() || t.setUTCDate(i)
                        }), i < this.dates[r])
                        for (; r >= 0 && i < this.dates[r];) this.pickers[r--].setUTCDate(i);
                    else if (i > this.dates[u])
                        for (; o > u && i > this.dates[u];) this.pickers[u++].setUTCDate(i);
                    this.updateDates();
                    delete this.updating
                }
            }
        },
        remove: function() {
            n.map(this.pickers, function(n) {
                n.remove()
            });
            delete this.element.data().datepicker
        }
    };
    a = n.fn.datepicker;
    o = function(i) {
        var u = Array.apply(null, arguments),
            r;
        return u.shift(), this.each(function() {
            var o = n(this),
                e = o.data("datepicker"),
                l = "object" == typeof i && i,
                v;
            if (!e) {
                var a = p(this, "date"),
                    y = n.extend({}, s, a, l),
                    b = w(y.language),
                    c = n.extend({}, s, b, a, l);
                o.hasClass("input-daterange") || c.inputs ? (v = {
                    inputs: c.inputs || o.find("input").toArray()
                }, o.data("datepicker", e = new h(this, n.extend(c, v)))) : o.data("datepicker", e = new f(this, c))
            }
            if ("string" == typeof i && "function" == typeof e[i] && (r = e[i].apply(e, u), r !== t)) return !1
        }), r !== t ? r : this
    };
    n.fn.datepicker = o;
    s = n.fn.datepicker.defaults = {
        autoclose: !1,
        beforeShowDay: n.noop,
        beforeShowMonth: n.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        toggleActive: !1,
        daysOfWeekDisabled: [],
        datesDisabled: [],
        endDate: 1 / 0,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: !1,
        startDate: -1 / 0,
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        weekStart: 0,
        disableTouchKeyboard: !1,
        enableOnReadonly: !0,
        container: "body"
    };
    v = n.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    n.fn.datepicker.Constructor = f;
    r = n.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear"
        }
    };
    i = {
        modes: [{
            clsName: "days",
            navFnc: "Month",
            navStep: 1
        }, {
            clsName: "months",
            navFnc: "FullYear",
            navStep: 1
        }, {
            clsName: "years",
            navFnc: "FullYear",
            navStep: 10
        }],
        isLeapYear: function(n) {
            return n % 4 == 0 && n % 100 != 0 || n % 400 == 0
        },
        getDaysInMonth: function(n, t) {
            return [31, i.isLeapYear(n) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
        },
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
        parseFormat: function(n) {
            var t = n.replace(this.validParts, "\x00").split("\x00"),
                i = n.match(this.validParts);
            if (!t || !t.length || !i || 0 === i.length) throw new Error("Invalid date format.");
            return {
                separators: t,
                parts: i
            }
        },
        parseDate: function(e, o, s) {
            function nt() {
                var n = this.slice(0, c[h].length),
                    t = c[h].slice(0, n.length);
                return n.toLowerCase() === t.toLowerCase()
            }
            var v, y, h, tt, c, a, it, d, w;
            if (!e) return t;
            if (e instanceof Date) return e;
            if ("string" == typeof o && (o = i.parseFormat(o)), tt = /([\-+]\d+)([dmwy])/, c = e.match(/([\-+]\d+)([dmwy])/g), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e)) {
                for (e = new Date, h = 0; h < c.length; h++) switch (v = tt.exec(c[h]), y = parseInt(v[1]), v[2]) {
                    case "d":
                        e.setUTCDate(e.getUTCDate() + y);
                        break;
                    case "m":
                        e = f.prototype.moveMonth.call(f.prototype, e, y);
                        break;
                    case "w":
                        e.setUTCDate(e.getUTCDate() + 7 * y);
                        break;
                    case "y":
                        e = f.prototype.moveYear.call(f.prototype, e, y)
                }
                return u(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), 0, 0, 0)
            }
            c = e && e.match(this.nonpunctuation) || [];
            e = new Date;
            var p, b, k = {},
                g = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                l = {
                    yyyy: function(n, t) {
                        return n.setUTCFullYear(t)
                    },
                    yy: function(n, t) {
                        return n.setUTCFullYear(2e3 + t)
                    },
                    m: function(n, t) {
                        if (isNaN(n)) return n;
                        for (t -= 1; 0 > t;) t += 12;
                        for (t %= 12, n.setUTCMonth(t); n.getUTCMonth() !== t;) n.setUTCDate(n.getUTCDate() - 1);
                        return n
                    },
                    d: function(n, t) {
                        return n.setUTCDate(t)
                    }
                };
            if (l.M = l.MM = l.mm = l.m, l.dd = l.d, e = u(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0), a = o.parts.slice(), c.length !== a.length && (a = n(a).filter(function(t, i) {
                    return -1 !== n.inArray(i, g)
                }).toArray()), c.length === a.length) {
                for (h = 0, it = a.length; it > h; h++) {
                    if (p = parseInt(c[h], 10), v = a[h], isNaN(p)) switch (v) {
                        case "MM":
                            b = n(r[s].months).filter(nt);
                            p = n.inArray(b[0], r[s].months) + 1;
                            break;
                        case "M":
                            b = n(r[s].monthsShort).filter(nt);
                            p = n.inArray(b[0], r[s].monthsShort) + 1
                    }
                    k[v] = p
                }
                for (h = 0; h < g.length; h++) w = g[h], w in k && !isNaN(k[w]) && (d = new Date(e), l[w](d, k[w]), isNaN(d) || (e = d))
            }
            return e
        },
        formatDate: function(t, u, f) {
            var e;
            if (!t) return "";
            "string" == typeof u && (u = i.parseFormat(u));
            e = {
                d: t.getUTCDate(),
                D: r[f].daysShort[t.getUTCDay()],
                DD: r[f].days[t.getUTCDay()],
                m: t.getUTCMonth() + 1,
                M: r[f].monthsShort[t.getUTCMonth()],
                MM: r[f].months[t.getUTCMonth()],
                yy: t.getUTCFullYear().toString().substring(2),
                yyyy: t.getUTCFullYear()
            };
            e.dd = (e.d < 10 ? "0" : "") + e.d;
            e.mm = (e.m < 10 ? "0" : "") + e.m;
            t = [];
            for (var s = n.extend([], u.separators), o = 0, h = u.parts.length; h >= o; o++) s.length && t.push(s.shift()), t.push(e[u.parts[o]]);
            return t.join("")
        },
        headTemplate: '<thead><tr><th class="prev">&#171;<\/th><th colspan="5" class="datepicker-switch"><\/th><th class="next">&#187;<\/th><\/tr><\/thead>',
        contTemplate: '<tbody><tr><td colspan="7"><\/td><\/tr><\/tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"><\/th><\/tr><tr><th colspan="7" class="clear"><\/th><\/tr><\/tfoot>'
    };
    i.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + i.headTemplate + "<tbody><\/tbody>" + i.footTemplate + '<\/table><\/div><div class="datepicker-months"><table class="table-condensed">' + i.headTemplate + i.contTemplate + i.footTemplate + '<\/table><\/div><div class="datepicker-years"><table class="table-condensed">' + i.headTemplate + i.contTemplate + i.footTemplate + "<\/table><\/div><\/div>";
    n.fn.datepicker.DPGlobal = i;
    n.fn.datepicker.noConflict = function() {
        return n.fn.datepicker = a, this
    };
    n.fn.datepicker.version = "1.4.0";
    n(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(t) {
        var i = n(this);
        i.data("datepicker") || (t.preventDefault(), o.call(i, "show"))
    });
    n(function() {
        o.call(n('[data-provide="datepicker-inline"]'))
    })
}(window.jQuery);
! function(n) {
    n.fn.datepicker.dates.bg = {
        days: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота", "Неделя"],
        daysShort: ["Нед", "Пон", "Вто", "Сря", "Чет", "Пет", "Съб", "Нед"],
        daysMin: ["Н", "П", "В", "С", "Ч", "П", "С", "Н"],
        months: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
        monthsShort: ["Ян", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Ное", "Дек"],
        today: "днес"
    }
}(jQuery);
document.addEventListener("DOMContentLoaded", function() {
    function t() {
        $("div.loader").fadeIn(300);
        $("body").css("overflow", "hidden")
    }
    var n = $("html, body");
    $(".gototop").click(function() {
        n.animate({
            scrollTop: 0
        }, 1400, "easeOutQuint")
    });
    n.bind("scroll mousedown DOMMouseScroll mousewheel keyup", function() {
        n.stop()
    });
    $("header button.menu").click(function() {
        $(".main-menu").hasClass("mobile-open") ? $(this).removeClass("close") : $(this).addClass("close");
        $(".main-menu").toggleClass("mobile-open")
    });
    $(".select2").length > 0 && $(".select2").select2();
    $(".lawyers-search").select2({
        placeholder: "",
        minimumInputLength: 1,
        quietMillis: 300,
        allowClear: !0,
        containerCssClass: "select2-allowclear",
        initSelection: function(n, t) {
            var i = $(n).val();
            if (i !== "") return $.ajax({
                url: "/Case/GetLawyer",
                type: "POST",
                dataType: "json",
                data: {
                    id: i
                }
            }).done(function(n) {
                var i;
                i = [];
                i.push({
                    id: n.id,
                    text: n.text
                });
                t(i[0])
            })
        },
        ajax: {
            url: "/Case/GetLawyers",
            dataType: "json",
            type: "POST",
            quietMillis: 250,
            data: function(n) {
                return {
                    term: n
                }
            },
            results: function(n) {
                return {
                    results: $.map(n, function(n) {
                        return {
                            id: n.id,
                            text: n.text
                        }
                    })
                }
            }
        }
    });
    $("label.checkbox").click(function() {
        $(this).find("input").is(":checked") ? $(this).addClass("checked") : $(this).removeClass("checked")
    });
    $('[data-toggle="tooltip"]').tooltip({
        html: !0
    });
    $(".datepicker").length > 0 && $("input.datepicker").datepicker({
        format: "dd.mm.yyyy",
        language: "bg",
        autoclose: !0,
        todayHighlight: !0
    });
    $("textarea").css("overflow", "hidden").autogrow();
    $("h3.section-heading, h4.section-heading").click(function() {
        section = $(this).data("section");
        $(this).hasClass("opened") ? $("section[data-section=" + section + "]").slideUp(300) : $("section[data-section=" + section + "]").slideDown(300);
        $(this).toggleClass("opened")
    });
    $(".wait").click(function(n) {
        $(this).is("a") && (n.which == 2 || n.shiftKey || n.altKey || n.metaKey || n.ctrlKey) || t()
    });
    $("#messageModal").length > 0 && $("#messageModal").modal("show");
    $(".info-icon").length != 0 && $(".info-icon:not([info-icon])").popover({
        container: "body",
        placement: function(n, t) {
            if ($(t).attr("data-placement") !== undefined) return $(t).attr("data-placement");
            var i = $(t).offset(),
                f = $(document).outerHeight(),
                e = $(document).outerWidth(),
                r = .5 * f - i.top,
                o = r > 0 ? "top" : "bottom",
                u = .5 * e - i.left,
                s = u > 0 ? "right" : "left";
            return Math.abs(u) > Math.abs(r) ? s : o
        }
    })
})