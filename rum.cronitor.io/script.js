"use strict";
(() => {
    var f = {
        DEBUG_FLAG: "cronitor_rum_debug",
        TRACKING_ENABLED: "cronitor_rum_enable",
        TRACKING_DISABLED: "cronitor_rum_disable"
    };
    var L = e => window && window.location.search.indexOf(e) > -1,
        F = () => {
            let e = L(f.TRACKING_ENABLED),
                n = L(f.TRACKING_DISABLED);
            if (e || n) {
                if (!window.localStorage) {
                    i("Can't disable Cronitor RUM. This browser does not support local storage.", void 0, !0);
                    return
                }
                e && (window.localStorage.removeItem(f.TRACKING_DISABLED), i("Cronitor RUM has been enabled on this device.", void 0, !0)), n && (window.localStorage.setItem(f.TRACKING_DISABLED, "true"), i("Cronitor RUM has been disabled on this device.", void 0, !0))
            }
        },
        x = () => {
            if (window.history.pushState && !window.cronitor._historyPatched) {
                i("Single page app mode is set to 'history', patching History API");
                let e = window.history.pushState,
                    n = () => v("Pageview");
                window.history.pushState = function() {
                    e.apply(this, arguments), n()
                }, window.addEventListener("popstate", n), window.cronitor._historyPatched = !0, i("Listening for History API changes")
            }
        },
        i = (e, n, t) => {
            let r = a.debug || L(f.DEBUG_FLAG);
            if (!t && !r) return;
            let o = `[Cronitor RUM] ${e}`;
            n ? console.log(o, n) : console.log(o)
        };
    var a = {
            ingestionHost: "https://rum.cronitor.io",
            honorDNT: !1,
            filterLocalhost: !1,
            debug: !1,
            trackMode: "history",
            enabled: !0,
            autoTrackErrors: !0,
            autoTrackCoreWebVitals: !0
        },
        D = e => (a = {
            ...a,
            ...e
        }, i("Updated configuration", a), a);

    function N(e, n) {
        return {
            client_key: a.clientKey,
            environment: a.environment,
            event_name: e,
            user_agent: se(),
            url: ae(),
            referrer: fe(),
            language: ue(),
            connection_type: le(),
            screen_width: me(),
            timezone: de(),
            ...ce(),
            ...pe(e),
            ...n || {}
        }
    }
    var ae = () => {
            let e = a.includeURLFragment ? window.location.hash : "",
                n = [];
            if (a.includeURLQueryParams && a.includeURLQueryParams.length > 0) {
                let r = new URLSearchParams(window.location.search);
                for (let o of a.includeURLQueryParams)
                    if (r.has(o)) {
                        let s = r.get(o);
                        s ? n.push(`${o}=${s}`) : n.push(`${o}`)
                    }
            }
            let t = "";
            return n && n.length > 0 && (t = `?${n.join("&")}`), window.location.protocol + "//" + window.location.hostname + window.location.pathname + t + e
        },
        se = () => window.navigator.userAgent,
        w = e => {
            let n = window.location.search.match(e);
            return n ? n[2] : void 0
        },
        ce = () => ({
            utm_source: w(/[?&](ref|source|utm_source)=([^?&]+)/),
            utm_campaign: w(/[?&](utm_campaign)=([^?&]+)/),
            utm_medium: w(/[?&](utm_medium)=([^?&]+)/),
            utm_content: w(/[?&](utm_content)=([^?&]+)/),
            utm_term: w(/[?&](utm_term)=([^?&]+)/)
        }),
        ue = () => {
            let e = window.navigator;
            return e ? e.userLanguage || e.language : void 0
        },
        de = () => {
            try {
                return Intl.DateTimeFormat().resolvedOptions().timeZone
            } catch {
                return
            }
        },
        le = () => navigator.connection && "effectiveType" in navigator.connection ? navigator.connection.effectiveType : void 0,
        fe = () => {
            let e = document.referrer;
            if (e) {
                let n = new URL(e);
                return n.hostname.toLowerCase() === window.location.hostname.toLowerCase() ? void 0 : n.protocol + "//" + n.hostname + n.pathname
            }
        },
        me = () => window == null ? void 0 : window.innerWidth,
        ge = e => {
            try {
                if (e) {
                    let n = Math.ceil(e);
                    return isNaN(n) || n < 0 ? void 0 : n
                } else return
            } catch {
                return
            }
        },
        pe = e => {
            let n = {};
            if (e !== "Pageview" || window.cronitor._initialPageLoadSent) return n;
            try {
                let t = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
                if (t.getEntriesByType) {
                    let r = t.getEntriesByType("navigation")[0];
                    r && (n = {
                        page_load_dns: r.domainLookupEnd - r.domainLookupStart,
                        page_load_connect: r.connectEnd - r.connectStart,
                        page_load_ssl: r.secureConnectionStart ? r.requestStart - r.secureConnectionStart : void 0,
                        page_load_ttfb: r.responseStart - r.requestStart,
                        page_load_download: r.responseEnd - r.responseStart,
                        page_load_dom_content_loaded: r.domContentLoadedEventEnd - r.responseEnd,
                        page_load_render: r.domComplete - r.domContentLoadedEventEnd,
                        page_load_total: r.loadEventStart,
                        page_load_transfer_size: r.transferSize
                    })
                }
            } catch (t) {
                i("Error while loading performance metrics", t)
            }
            for (let t of Object.keys(n)) n[t] = ge(n[t]);
            return window.cronitor._initialPageLoadSent = !0, n
        };
    var B = async (e, n) => {
        let t = N(e, n),
            r = we(t);
        r && he(r) && await ve(r)
    }, ve = async e => {
        let n = `${a.ingestionHost}/api/rum/events`,
            t = JSON.stringify(e);
        navigator.sendBeacon ? navigator.sendBeacon.call(navigator, n, t) : await fetch(n, {
            body: t,
            method: "POST",
            credentials: "omit",
            keepalive: !0
        }), i("Sent events", e)
    }, he = e => {
        if (!a.clientKey) return i("Bad configuration: missing clientKey", void 0, !0), !1;
        if (!e.event_name || !/^[a-zA-Z][a-zA-Z0-9\_\-\.]{0,63}$/.test(e.event_name)) {
            i("Invalid event name.", void 0, !0);
            return
        }
        if (window.localStorage && window.localStorage.getItem(f.TRACKING_DISABLED) || !a.enabled) return i("Skipping event collection, Cronitor RUM has been manually disabled on this browser.", void 0, !0), !1;
        if (!a.debug) {
            if (a.honorDNT && "doNotTrack" in window.navigator && window.navigator.doNotTrack === "1") return i("Honoring 'Do Not Track'"), !1;
            if (a.filterLocalhost && /^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*\:)*?:?0*1$/.test(window.location.hostname)) return i("Skipping event collection, localhost filter enabled", void 0, !0), !1;
            if (window.location.protocol === "file:") return i("Can't track from file URLs", void 0, !0), !1;
            if (window.document.visibilityState === "prerender") return i("Skipping event collection, document is pre-rendering"), !1;
            if (window.navigator.webdriver) return i("Skipping event collection, navigation is automated"), !1
        }
        if (e.event_name === "Pageview") {
            let n = window.cronitor._previousPath,
                t = e.url;
            if (window.cronitor._previousPath = t, n && n === t) {
                i("Skipping event collection, duplicate pageview detected");
                return
            }
        }
        return !0
    }, we = e => {
        let n = e;
        if (a.beforeSend) {
            let t;
            try {
                t = a.beforeSend({
                    ...e
                })
            } catch (r) {
                console.error(r)
            }
            if (!t) {
                i("beforeSend hook returned null or undefined, skipping event collection");
                return
            }
            t.client_key = e.client_key;
            for (let r of Object.keys(e)) n[r] = t[r]
        }
        return n
    };

    function G(e, n) {
        let t = !1;
        return (...r) => {
            t || (t = !0, setTimeout(() => {
                e(...r), t = !1
            }, n))
        }
    }
    var m, y, z, b;
    var Q = -1,
        C = function(e) {
            addEventListener("pageshow", function(n) {
                n.persisted && (Q = n.timeStamp, e(n))
            }, !0)
        },
        j = function() {
            return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
        },
        R = function() {
            var e = j();
            return e && e.activationStart || 0
        },
        g = function(e, n) {
            var t = j(),
                r = "navigate";
            return Q >= 0 ? r = "back-forward-cache" : t && (r = document.prerendering || R() > 0 ? "prerender" : document.wasDiscarded ? "restore" : t.type.replace(/_/g, "-")), {
                name: e,
                value: n === void 0 ? -1 : n,
                rating: "good",
                delta: 0,
                entries: [],
                id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                navigationType: r
            }
        },
        T = function(e, n, t) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                    var r = new PerformanceObserver(function(o) {
                        Promise.resolve().then(function() {
                            n(o.getEntries())
                        })
                    });
                    return r.observe(Object.assign({
                        type: e,
                        buffered: !0
                    }, t || {})), r
                }
            } catch {}
        },
        p = function(e, n, t, r) {
            var o, s;
            return function(u) {
                n.value >= 0 && (u || r) && ((s = n.value - (o || 0)) || o === void 0) && (o = n.value, n.delta = s, n.rating = function(d, c) {
                    return d > c[1] ? "poor" : d > c[0] ? "needs-improvement" : "good"
                }(n.value, t), e(n))
            }
        },
        M = function(e) {
            requestAnimationFrame(function() {
                return requestAnimationFrame(function() {
                    return e()
                })
            })
        },
        k = function(e) {
            var n = function(t) {
                t.type !== "pagehide" && document.visibilityState !== "hidden" || e(t)
            };
            addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
        },
        P = function(e) {
            var n = !1;
            return function(t) {
                n || (e(t), n = !0)
            }
        },
        h = -1,
        O = function() {
            return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0
        },
        E = function(e) {
            document.visibilityState === "hidden" && h > -1 && (h = e.type === "visibilitychange" ? e.timeStamp : 0, _e())
        },
        W = function() {
            addEventListener("visibilitychange", E, !0), addEventListener("prerenderingchange", E, !0)
        },
        _e = function() {
            removeEventListener("visibilitychange", E, !0), removeEventListener("prerenderingchange", E, !0)
        },
        U = function() {
            return h < 0 && (h = O(), W(), C(function() {
                setTimeout(function() {
                    h = O(), W()
                }, 0)
            })), {
                get firstHiddenTime() {
                    return h
                }
            }
        },
        I = function(e) {
            document.prerendering ? addEventListener("prerenderingchange", function() {
                return e()
            }, !0) : e()
        },
        K = [1800, 3e3],
        ye = function(e, n) {
            n = n || {}, I(function() {
                var t, r = U(),
                    o = g("FCP"),
                    s = T("paint", function(u) {
                        u.forEach(function(d) {
                            d.name === "first-contentful-paint" && (s.disconnect(), d.startTime < r.firstHiddenTime && (o.value = Math.max(d.startTime - R(), 0), o.entries.push(d), t(!0)))
                        })
                    });
                s && (t = p(e, o, K, n.reportAllChanges), C(function(u) {
                    o = g("FCP"), t = p(e, o, K, n.reportAllChanges), M(function() {
                        o.value = performance.now() - u.timeStamp, t(!0)
                    })
                }))
            })
        },
        H = [.1, .25],
        Z = function(e, n) {
            n = n || {}, ye(P(function() {
                var t, r = g("CLS", 0),
                    o = 0,
                    s = [],
                    u = function(c) {
                        c.forEach(function(l) {
                            if (!l.hadRecentInput) {
                                var oe = s[0],
                                    ie = s[s.length - 1];
                                o && l.startTime - ie.startTime < 1e3 && l.startTime - oe.startTime < 5e3 ? (o += l.value, s.push(l)) : (o = l.value, s = [l])
                            }
                        }), o > r.value && (r.value = o, r.entries = s, t())
                    },
                    d = T("layout-shift", u);
                d && (t = p(e, r, H, n.reportAllChanges), k(function() {
                    u(d.takeRecords()), t(!0)
                }), C(function() {
                    o = 0, r = g("CLS", 0), t = p(e, r, H, n.reportAllChanges), M(function() {
                        return t()
                    })
                }), setTimeout(t, 0))
            }))
        },
        _ = {
            passive: !0,
            capture: !0
        },
        Ce = new Date,
        V = function(e, n) {
            m || (m = n, y = e, z = new Date, X(removeEventListener), J())
        },
        J = function() {
            if (y >= 0 && y < z - Ce) {
                var e = {
                    entryType: "first-input",
                    name: m.type,
                    target: m.target,
                    cancelable: m.cancelable,
                    startTime: m.timeStamp,
                    processingStart: m.timeStamp + y
                };
                b.forEach(function(n) {
                    n(e)
                }), b = []
            }
        },
        be = function(e) {
            if (e.cancelable) {
                var n = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                e.type == "pointerdown" ? function(t, r) {
                    var o = function() {
                            V(t, r), u()
                        },
                        s = function() {
                            u()
                        },
                        u = function() {
                            removeEventListener("pointerup", o, _), removeEventListener("pointercancel", s, _)
                        };
                    addEventListener("pointerup", o, _), addEventListener("pointercancel", s, _)
                }(n, e) : V(n, e)
            }
        },
        X = function(e) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(n) {
                return e(n, be, _)
            })
        },
        $ = [100, 300],
        Y = function(e, n) {
            n = n || {}, I(function() {
                var t, r = U(),
                    o = g("FID"),
                    s = function(c) {
                        c.startTime < r.firstHiddenTime && (o.value = c.processingStart - c.startTime, o.entries.push(c), t(!0))
                    },
                    u = function(c) {
                        c.forEach(s)
                    },
                    d = T("first-input", u);
                t = p(e, o, $, n.reportAllChanges), d && k(P(function() {
                    u(d.takeRecords()), d.disconnect()
                })), d && C(function() {
                    var c;
                    o = g("FID"), t = p(e, o, $, n.reportAllChanges), b = [], y = -1, m = null, X(addEventListener), c = s, b.push(c), J()
                })
            })
        };
    var We = 1 / 0;
    var q = [2500, 4e3],
        S = {},
        ee = function(e, n) {
            n = n || {}, I(function() {
                var t, r = U(),
                    o = g("LCP"),
                    s = function(c) {
                        var l = c[c.length - 1];
                        l && l.startTime < r.firstHiddenTime && (o.value = Math.max(l.startTime - R(), 0), o.entries = [l], t())
                    },
                    u = T("largest-contentful-paint", s);
                if (u) {
                    t = p(e, o, q, n.reportAllChanges);
                    var d = P(function() {
                        S[o.id] || (s(u.takeRecords()), u.disconnect(), S[o.id] = !0, t(!0))
                    });
                    ["keydown", "click"].forEach(function(c) {
                        addEventListener(c, d, !0)
                    }), k(d), C(function(c) {
                        o = g("LCP"), t = p(e, o, q, n.reportAllChanges), M(function() {
                            o.value = performance.now() - c.timeStamp, S[o.id] = !0, t(!0)
                        })
                    })
                }
            })
        };

    function ne() {
        var e;
        (e = window == null ? void 0 : window.cronitor) != null && e._listeningForErrors || (window.addEventListener("error", A), window.cronitor._listeningForErrors = !0, i("Listening for errors"))
    }

    function ee2() {
        var e;
        (e = window == null ? void 0 : window.cronitor) != null && e._listeningForErrors || (window.addEventListener("error", A), window.cronitor._listeningForErrors = !0, i("Listening for errors"))
    }

    function te() {
        var n;
        if ((n = window == null ? void 0 : window.cronitor) != null && n._listeningForCoreWebVitals) return;
        let e = (t, r) => o => {
            v(t, {
                [r]: o.value
            })
        };
        Z(e("WebVital", "web_vital_cls")), Y(e("WebVital", "web_vital_fid")), ee(e("WebVital", "web_vital_lcp")), window.cronitor._listeningForCoreWebVitals = !0, i("Listening for Core Web Vitals")
    }
    var Ee = (e, n, t = {}) => {
            switch (e) {
                case "config":
                    if (!n) return i("Passed empty config params");
                    Te(n);
                    break;
                case "track":
                    v(n, t);
                    break;
                case "captureError":
                    A(n, t);
                    break;
                default:
                    i("Unknown command", e, !0);
                    return
            }
        },
        A = G((e, n = {}) => {
            var t, r;
            v("Error", {
                error_type: ((t = e.error) == null ? void 0 : t.name) || "Error",
                message: ((r = e.error) == null ? void 0 : r.message) || e.message,
                lineno: e.lineno,
                colno: e.colno,
                filename: e.filename,
                ...n
            })
        }, 1e3),
        v = (e, n = {}) => {
            let t = () => B(e, n);
            document.readyState === "complete" ? setTimeout(t, 0) : (i("Document not ready, adding event listener"), window.addEventListener("load", () => {
                setTimeout(t, 0)
            }))
        },
        Te = e => {
            let n = {
                    ...a
                },
                t = D(e);
            a.trackMode && ["pageload", "history"].indexOf(a.trackMode) > -1 && (a.trackMode === "history" && x(), !n.clientKey && t.clientKey && (i("Triggering initial pageview"), v("Pageview"))), i(`Tracking mode: ${a.trackMode}`)
        };
    var re = () => {
        F();
        let e = window.cronitor && window.cronitor.q || [];
        window.cronitor = Ee, window.cronitor.q = e;
        for (let n of e) window.cronitor.apply(void 0, n);
        a.autoTrackErrors && ne(), a.autoTrackCoreWebVitals && te()
    };
    re();
})();