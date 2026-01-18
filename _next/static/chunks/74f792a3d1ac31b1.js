(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript :
    void 0, 73533, e => {
        "use strict";
        var t = e.i(53014),
            r = Object.defineProperty,
            n = (e, t, n) => {
                let l;
                return (l = "symbol" != typeof t ? t + "" : t) in e ? r(e, l, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[l] = n
            },
            l = new Map,
            i = new WeakMap,
            s = 0,
            a = void 0;

        function o(e, t, r = {}, n = a) {
            if (void 0 === window.IntersectionObserver && void 0 !== n) {
                let l = e.getBoundingClientRect();
                return t(n, {
                    isIntersecting: n,
                    target: e,
                    intersectionRatio: "number" == typeof r.threshold ? r.threshold : 0,
                    time: 0,
                    boundingClientRect: l,
                    intersectionRect: l,
                    rootBounds: l
                }), () => {}
            }
            let {
                id: c,
                observer: u,
                elements: d
            } = function(e) {
                let t = Object.keys(e).sort().filter(t => void 0 !== e[t]).map(t => {
                        var r;
                        return `${t}_${"root"===t?!(r=e.root)?"0":(i.has(r)||(s+=1,i.set(r,s.toString())),i.get(r)):e[t]}`
                    }).toString(),
                    r = l.get(t);
                if (!r) {
                    let n, i = new Map,
                        s = new IntersectionObserver(t => {
                            t.forEach(t => {
                                var r;
                                let l = t.isIntersecting && n.some(e => t.intersectionRatio >= e);
                                e.trackVisibility && void 0 === t.isVisible && (t.isVisible = l),
                                    null == (r = i.get(t.target)) || r.forEach(e => {
                                        e(l, t)
                                    })
                            })
                        }, e);
                    n = s.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
                        id: t,
                        observer: s,
                        elements: i
                    }, l.set(t, r)
                }
                return r
            }(r), f = d.get(e) || [];
            return d.has(e) || d.set(e, f), f.push(t), u.observe(e),
                function() {
                    f.splice(f.indexOf(t), 1), 0 === f.length && (d.delete(e), u.unobserve(e)), 0 === d.size &&
                        (u.disconnect(), l.delete(c))
                }
        }
        var c = class extends t.Component {
            constructor(e) {
                super(e), n(this, "node", null), n(this, "_unobserveCb", null), n(this, "handleNode",
                    e => {
                        this.node && (this.unobserve(), e || this.props.triggerOnce || this.props
                            .skip || this.setState({
                                inView: !!this.props.initialInView,
                                entry: void 0
                            })), this.node = e || null, this.observeNode()
                    }), n(this, "handleChange", (e, t) => {
                    e && this.props.triggerOnce && this.unobserve(), "function" == typeof this
                        .props.children && this.setState({
                            inView: e,
                            entry: t
                        }), this.props.onChange && this.props.onChange(e, t)
                }), this.state = {
                    inView: !!e.initialInView,
                    entry: void 0
                }
            }
            componentDidMount() {
                this.unobserve(), this.observeNode()
            }
            componentDidUpdate(e) {
                (e.rootMargin !== this.props.rootMargin || e.root !== this.props.root || e.threshold !==
                    this.props.threshold || e.skip !== this.props.skip || e.trackVisibility !== this
                    .props.trackVisibility || e.delay !== this.props.delay) && (this.unobserve(), this
                    .observeNode())
            }
            componentWillUnmount() {
                this.unobserve()
            }
            observeNode() {
                if (!this.node || this.props.skip) return;
                let {
                    threshold: e,
                    root: t,
                    rootMargin: r,
                    trackVisibility: n,
                    delay: l,
                    fallbackInView: i
                } = this.props;
                this._unobserveCb = o(this.node, this.handleChange, {
                    threshold: e,
                    root: t,
                    rootMargin: r,
                    trackVisibility: n,
                    delay: l
                }, i)
            }
            unobserve() {
                this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
            }
            render() {
                let {
                    children: e
                } = this.props;
                if ("function" == typeof e) {
                    let {
                        inView: t,
                        entry: r
                    } = this.state;
                    return e({
                        inView: t,
                        entry: r,
                        ref: this.handleNode
                    })
                }
                let {
                    as: r,
                    triggerOnce: n,
                    threshold: l,
                    root: i,
                    rootMargin: s,
                    onChange: a,
                    skip: o,
                    trackVisibility: c,
                    delay: u,
                    initialInView: d,
                    fallbackInView: f,
                    ...h
                } = this.props;
                return t.createElement(r || "div", {
                    ref: this.handleNode,
                    ...h
                }, e)
            }
        };

        function u({
            threshold: e,
            delay: r,
            trackVisibility: n,
            rootMargin: l,
            root: i,
            triggerOnce: s,
            skip: a,
            initialInView: c,
            fallbackInView: d,
            onChange: f
        } = {}) {
            var h;
            let [m, p] = t.useState(null), b = t.useRef(f), [v, g] = t.useState({
                inView: !!c,
                entry: void 0
            });
            b.current = f, t.useEffect(() => {
                let t;
                if (!a && m) return t = o(m, (e, r) => {
                    g({
                        inView: e,
                        entry: r
                    }), b.current && b.current(e, r), r.isIntersecting && s && t && (
                    t(), t = void 0)
                }, {
                    root: i,
                    rootMargin: l,
                    threshold: e,
                    trackVisibility: n,
                    delay: r
                }, d), () => {
                    t && t()
                }
            }, [Array.isArray(e) ? e.toString() : e, m, i, l, s, a, n, d, r]);
            let x = null == (h = v.entry) ? void 0 : h.target,
                y = t.useRef(void 0);
            m || !x || s || a || y.current === x || (y.current = x, g({
                inView: !!c,
                entry: void 0
            }));
            let w = [p, v.inView, v.entry];
            return w.ref = w[0], w.inView = w[1], w.entry = w[2], w
        }
        e.s(["InView", () => c, "useInView", () => u])
    },
    976, e => {
        "use strict";
        var t = e.i(53014),
            r = e.i(39549);
        e.s(["default", 0, (e, n = 50, l = []) => (0, t.useCallback)((0, r.default)(e, n), l)])
    },
    87128, e => {
        "use strict";
        var t = e.i(71448),
            r = e.i(53014),
            n = e.i(70733),
            l = e.i(73533),
            i = e.i(35312),
            s = e.i(976),
            a = e.i(50342),
            o = e.i(67983),
            c = e.i(43463);
        e.i(50109);
        var u = e.i(78194);
        let d = (0, r.forwardRef)(({
            srcs: e = [],
            poster: d,
            posterDesktopWidth: f,
            posterMobileWidth: h,
            desktopOnly: m = !1,
            ratio: p,
            ratioMobile: b,
            forceRatio: v,
            className: g,
            posterClassName: x,
            children: y,
            playing: w = !0,
            loop: k = !0,
            muted: j = !0,
            fill: N,
            priority: _ = !1,
            forcePlay: E = !1,
            position: S = "relative",
            preload: M = "metadata",
            onPosterComplete: O,
            onMetadataLoaded: I,
            onEnded: C,
            videoRef: R,
            ...L
        }, W) => {
            let P = (0, r.useRef)(null),
                D = (0, r.useRef)(null),
                [T, V] = (0, r.useState)(!1),
                [$, z] = (0, r.useState)(null),
                q = h || o.devices.mobile.mockupWidth,
                H = f || o.devices.desktop.mockupWidth,
                B = (0, i.default)(!0),
                A = e.sort((e, t) => e.width - t.width).map(e => [e.width, e.url]);
            A.length && (A[A.length - 1][0] = 1 / 0);
            let F = (0, r.useCallback)(e => {
                    P.current = e, W && (W.current = e)
                }, []),
                Z = (0, r.useCallback)(e => {
                    e && (D.current = e.node, R && (R.current = D.current))
                }, []),
                U = () => {
                    if (w && D.current) {
                        let e = D.current.play();
                        void 0 !== e && e.catch(e => {
                            console.warn("video", e)
                        })
                    }
                },
                Y = () => {
                    if (D.current && !D.current.paused) {
                        let e = D.current.pause();
                        void 0 !== e && e.catch(e => {
                            console.warn("video", e)
                        })
                    }
                };
            return (0, r.useEffect)(() => {
                (D.current?.isInView || E) && (w ? U() : Y())
            }, [w]), (0, a.default)(P, (0, s.default)(t => {
                P.current && e?.length && (!m || B?.current && (B.current === u.DeviceEnum
                    .desktop || B.current === u.DeviceEnum.tablet) ? z(A.filter(e =>
                    t.contentRect.width < e[0])[0][1]) : z(null))
            })), (0, t.jsxs)("div", {
                ref: F,
                className: (0, n.default)(S, g),
                children: [(0, t.jsx)(l.InView, {
                    as: "video",
                    src: $,
                    ref: Z,
                    onChange: (e, t) => {
                        let r = t.target;
                        r.isInView = e, e && w ? U() : (Y(), r.currentTime = 0)
                    },
                    className: (0, n.default)(
                        "absolute w-full top-0 left-0 z-1 opacity-0 transition-opacity ease-quart-out",
                        d && p ? "duration-100" : "duration-500", T &&
                        "opacity-100", N && "object-cover h-full"),
                    preload: M,
                    loop: k,
                    muted: j,
                    playsInline: !0,
                    onLoadedMetadata: e => {
                        I && I(e), V(!0);
                        let t = e.currentTarget;
                        w && t.paused && t.isInView && U()
                    },
                    onEnded: C,
                    ...L,
                    children: y
                }), d && (0, t.jsxs)("div", {
                    className: (0, n.default)(p && "absolute z-0 inset-0"),
                    children: [(0, t.jsx)(c.SanityImage, {
                        image: d,
                        desktopOnly: !!b,
                        desktopWidth: H,
                        mobileWidth: q,
                        onLoadingComplete: O,
                        width: p,
                        height: p ? 1 : void 0,
                        fill: N,
                        priority: !b && _,
                        className: (0, n.default)("w-full", N &&
                            "object-cover h-full", x)
                    }), b && (0, t.jsx)(c.SanityImage, {
                        image: d,
                        mobileOnly: !0,
                        mobileWidth: q,
                        onLoadingComplete: O,
                        width: b,
                        height: p ? 1 : void 0,
                        fill: N,
                        priority: !b && _,
                        className: (0, n.default)("w-full", N &&
                            "object-cover h-full", x)
                    })]
                }), (!N || v) && p && (0, t.jsx)("div", {
                    style: {
                        "--ratio": p / 100,
                        "--ratioMobile": b && b / 100
                    },
                    className: (0, n.default)("w-full pb-[calc(1%/var(--ratio))]",
                        b && "lg-max:pb-[calc(1%/var(--ratioMobile))]")
                })]
            })
        });
        d.displayName = "VideoLoop", e.s(["VideoLoop", 0, d])
    },
    33568, e => {
        "use strict";
        var t = e.i(9661);
        e.s(["useScrollStore", () => t.default])
    },
    73249, e => {
        "use strict";
        var t = e.i(53014);
        let r = [],
            n = null,
            l = 0,
            i = e => {
                let t = e - l;
                r.forEach(r => {
                    let n = r.fps ? 1e3 / r.fps : 0;
                    r.lastDelta + t >= .9 * n ? (r.callback(e, r.lastDelta + t), r.lastDelta = 0) : r
                        .lastDelta += t
                }), l = e, n = window.requestAnimationFrame(i)
            };
        e.s(["default", 0, (e, s = !1, a) => {
            let o = {
                callback: e,
                fps: a,
                lastDelta: 0
            };
            (0, t.useEffect)(() => (s ? r.unshift(o) : r.push(o), null === n && (l = 0, n = window
                .requestAnimationFrame(i)), () => {
                let e = r.indexOf(o); - 1 !== e && r.splice(e, 1), r.length || (n && window
                    .cancelAnimationFrame(n), n = null)
            }), [e, s])
        }])
    },
    82792, 13396, e => {
        "use strict";
        var t = e.i(53014),
            r = e.i(47982);
        e.s(["default", 0, (e = !1, n = 0) => {
            let l = (0, t.useRef)({
                    innerWidth: 0,
                    innerHeight: 0,
                    documentHeight: 0
                }),
                [i, s] = (0, t.useState)({
                    innerWidth: 0,
                    innerHeight: 0,
                    documentHeight: 0
                });
            return (0, r.default)(e => {
                l.current.innerWidth = e?.innerWidth || 0, l.current.innerHeight = e
                    ?.innerHeight || 0, l.current.documentHeight = e?.documentHeight || 0,
                    s(l.current)
            }, !0, [], n), e ? l : i
        }], 82792);
        let n = (e, t = "offsetTop") => {
            let r = 0;
            for (; e;) r += e[t], e = e.offsetParent;
            return r
        };
        e.s(["offsetLeft", 0, e => n(e, "offsetLeft"), "offsetTop", 0, e => n(e, "offsetTop")], 13396)
    },
    74010, 21375, e => {
        "use strict";
        var t = e.i(53014);
        /constructor/i.test(window.HTMLElement) || (!window.safari || void 0 !== window.safari && window.safari
            .pushNotification).toString();
        let r = window.navigator.userAgent,
            n = r && (!!r.match(/iPad/i) || !!r.match(/iPhone/i)),
            l = r && !!r.match(/WebKit/i);
        r && n && l && r.match(/CriOS/i), e.s(["iOS", 0, n, "isBrowser", 0, !0], 21375);
        let i = t.useLayoutEffect;
        e.s(["default", 0, i], 74010)
    },
    39549, (e, t, r) => {
        function n(e, t, r) {
            function n() {
                var c = Date.now() - a;
                c < t && c >= 0 ? l = setTimeout(n, t - c) : (l = null, r || (o = e.apply(s, i), s = i = null))
            }
            null == t && (t = 100);
            var l, i, s, a, o, c = function() {
                s = this, i = arguments, a = Date.now();
                var c = r && !l;
                return l || (l = setTimeout(n, t)), c && (o = e.apply(s, i), s = i = null), o
            };
            return c.clear = function() {
                l && (clearTimeout(l), l = null)
            }, c.flush = function() {
                l && (o = e.apply(s, i), s = i = null, clearTimeout(l), l = null)
            }, c
        }
        n.debounce = n, t.exports = n
    },
    50342, e => {
        "use strict";
        var t = e.i(74010);
        let r = {
                current: null
            },
            n = [];
        e.s(["default", 0, (e, l, i = []) => {
            (0, t.default)(() => {
                let t = e?.current || e;
                return r.current || (r.current = new ResizeObserver(e => {
                    n.forEach((t, r) => {
                        let n = e.find(e => (t.ref.current || t.ref) === e
                            .target);
                        n && t.callback(n, r)
                    })
                })), r.current.observe(t), n.push({
                    ref: e,
                    callback: l
                }), () => {
                    if (r.current) {
                        r.current.unobserve(t);
                        let e = n.findIndex(e => e.callback === l); - 1 !== e && (n.splice(
                            e, 1), 0 === n.length && (r.current.disconnect(), r
                            .current = null))
                    }
                }
            }, [e, ...i])
        }])
    },
    35312, 78194, 50109, 59861, e => {
        "use strict";
        var t, r, n = ((t = {}).mobile = "mobile", t.tablet = "tablet", t.desktop = "desktop", t);
        (r = {}).sm = "sm", r.md = "md", r.lg = "lg", r.xl = "xl", r.xxl = "xxl", r["sm-max"] = "sm-max", r[
            "lg-max"] = "lg-max", e.s(["DeviceEnum", () => n], 78194), e.s([], 50109);
        var l = e.i(53014),
            i = e.i(67983);
        let s = e => {
            var t, r;
            let n, s = Object.entries({
                mobile: `(max-width: ${i.screens[i.devices.tablet.screen]-1}px)`,
                tablet: `(min-width: ${i.screens[i.devices.tablet.screen]}px) and (max-width: ${i.screens[i.devices.desktop.screen]-1}px)`,
                desktop: `(min-width: ${i.screens[i.devices.desktop.screen]}px)`
            });
            t = s.map(e => e[1]), r = t => {
                if (t.matches) {
                    let r = s.find(e => e[1] === t.media)?.[0];
                    return r || console.warn("no device match found"), e(r || "desktop"), r || "desktop"
                }
            }, n = e => {
                r(e)
            }, (0, l.useEffect)(() => {
                let e = t.map(e => window.matchMedia(e));
                return e.forEach(e => {
                    e.addEventListener("change", n), e.matches && r(e)
                }), () => e.forEach(e => e.removeEventListener("change", n))
            }, [])
        };
        e.s(["default", 0, s], 59861), e.s(["default", 0, (e = !1) => {
            let t = (0, l.useRef)(null),
                [r, i] = (0, l.useState)(null);
            return (s(r => {
                r in n && (t.current = r, e || i(r))
            }), e) ? t : r
        }], 35312)
    },
    47982, e => {
        "use strict";
        var t = e.i(39549),
            r = e.i(74010);
        let n = {},
            l = {
                pageYOffset: 0,
                innerWidth: 0,
                innerHeight: 0,
                documentHeight: 0,
                offsetWidth: 0
            },
            i = e => {
                let t = {
                    type: e.type
                };
                switch (e.type) {
                    case "scroll":
                        e instanceof Event && (l.pageYOffset = window.pageYOffset), t.pageYOffset = t.scrollY =
                            l.pageYOffset, t.innerWidth = l.innerWidth, t.innerHeight = l.innerHeight, t
                            .documentHeight = l.documentHeight, t.offsetWidth = l.offsetWidth;
                        break;
                    case "resize":
                        (e instanceof Event || !l.innerWidth) && (l.innerWidth = window.innerWidth, l
                            .innerHeight = window.innerHeight, l.documentHeight = document.documentElement
                            .clientHeight, l.offsetWidth = document.body.offsetWidth), t.innerWidth = l
                            .innerWidth, t.innerHeight = l.innerHeight, t.documentHeight = l.documentHeight, t
                            .offsetWidth = l.offsetWidth
                }
                return t
            };
        e.s(["default", 0, (e, l = !1, s = [], a = 40) => ((e, l, s = !1, a = [], o = 40) => {
            (0, r.default)(() => {
                let r = o ? (0, t.default)(l, o) : l;
                if (l && e) {
                    let t = n[e];
                    if (t) t.cbs.push(r), s && l(i({
                        type: e,
                        manual: !0
                    }));
                    else {
                        let t = {
                            cbs: [r],
                            cb: () => null
                        };
                        t.cb = e => {
                            let r = i(e);
                            t.cbs.forEach(e => {
                                e(r)
                            })
                        }, window.addEventListener(e, t.cb), n[e] = t, s && l(i({
                            type: e,
                            manual: !0
                        }))
                    }
                }
                return () => {
                    if (e) {
                        let t = n[e];
                        if (t) {
                            let l = t.cbs.indexOf(r); - 1 !== l && (r.clear && r
                            .clear(), t.cbs.splice(l, 1), 0 === t.cbs.length && (
                                    window.removeEventListener(e, t.cb), n[e] = null
                                    ))
                        }
                    }
                }
            }, [e, ...a])
        })("resize", e, l, s, a)], 47982)
    },
    97854, e => {
        "use strict";
        let t = (e, t, r) => t < r ? Math.min(Math.max(e, t), r) : Math.min(Math.max(e, r), t);
        e.s(["clamp", 0, t, "lerp", 0, (e, t, r) => e * (1 - r) + r * t, "map", 0, (e, r, n, l, i) => t((e -
            r) / (n - r) * (i - l) + l, l, i), "precision", 0, (e, t = 3) => {
            let r = Math.pow(10, t);
            return ~~(e * r) / r
        }])
    },
    92238, e => {
        "use strict";
        e.i(1607);
        var t = e.i(71149),
            t = t,
            r = e.i(53014);
        e.s(["default", 0, () => {
            let e = (0, r.useContext)(t.default);
            return t => e?.get?.(t) || t
        }], 92238)
    },
    7953, e => {
        "use strict";
        var t = "u" > typeof window ? window : {
                screen: {},
                navigator: {}
            },
            r = (t.matchMedia || function() {
                return {
                    matches: !1
                }
            }).bind(t),
            n = !1,
            l = function() {};
        t.addEventListener && t.addEventListener("p", l, {
            get passive() {
                return n = !0
            }
        }), t.removeEventListener && t.removeEventListener("p", l, !1);
        var i = n,
            s = "ontouchstart" in t,
            a = "TouchEvent" in t,
            o = s || a && r("(any-pointer: coarse)").matches,
            c = (t.navigator.maxTouchPoints || 0) > 0 || o,
            u = t.navigator.userAgent || "",
            d = r("(pointer: coarse)").matches && /iPad|Macintosh/.test(u) && Math.min(t.screen.width || 0, t
                .screen.height || 0) >= 768,
            f = (r("(pointer: coarse)").matches || !r("(pointer: fine)").matches && s) && !/Windows.*Firefox/
            .test(u),
            h = r("(any-pointer: fine)").matches || r("(any-hover: hover)").matches || d || !s,
            m = c && (h || !f) ? "hybrid" : c ? "touchOnly" : "mouseOnly";
        e.s(["deviceType", () => m, "supportsPassiveEvents", () => i])
    },
    53158, e => {
        "use strict";
        var t, r = e.i(53014);

        function n() {
            return (n = Object.assign.bind()).apply(null, arguments)
        }
        e.s(["default", 0, e => r.createElement("svg", n({
            xmlns: "http://www.w3.org/2000/svg",
            width: 16,
            height: 16,
            fill: "none",
            viewBox: "0 0 16 16"
        }, e), t || (t = r.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "m8.373 15.707 7-7L16.082 8l-.707-.707-7-7L6.96 1.707 12.252 7H0v2h12.253l-5.294 5.293z",
            clipRule: "evenodd"
        })))])
    },
    43482, e => {
        "use strict";
        var t = e.i(71448),
            r = e.i(53014),
            n = e.i(70733),
            l = e.i(73249),
            i = e.i(82792),
            s = e.i(50342),
            a = e.i(7953),
            o = e.i(97854),
            c = e.i(63962),
            u = e.i(92238),
            d = e.i(57739),
            f = e.i(53158);
        let h = ({
            className: e,
            onPrev: r,
            onNext: l,
            loop: i,
            hideMobile: s = !1,
            hideDesktop: a = !1,
            buttonState: o,
            buttonVariant: c = "square",
            buttonTheme: h,
            buttonClassName: m
        }) => {
            let p = (0, n.default)("pointer-events-auto", "text-white hover:text-black",
                    "[&>svg]:transition-opacity [&>svg]:ease-expo-out [&>svg]:duration-500",
                    "w-40 h-40 !p-0 flex items-center justify-center relative"),
                b = (0, u.default)();
            return (0, t.jsxs)("div", {
                className: (0, n.default)("flex items-center", "pointer-events-none", s &&
                    "lg-max:hidden", a && "lg:hidden", e),
                children: [(0, t.jsx)(d.Button, {
                    disabled: !i && -1 === o,
                    onClick: r,
                    className: (0, n.default)(p, "bg-clip-padding", m),
                    variant: c,
                    theme: h,
                    label: b("Previous"),
                    children: (0, t.jsx)(f.default, {
                        className: (0, n.default)("scale-[-1] w-8 h-8", !i && -
                            1 === o && "opacity-60")
                    })
                }), (0, t.jsx)(d.Button, {
                    disabled: !i && 1 === o,
                    onClick: l,
                    className: (0, n.default)("ml-10", p, m),
                    variant: c,
                    theme: h,
                    label: b("Next"),
                    children: (0, t.jsx)(f.default, {
                        className: (0, n.default)("w-8 h-8", !i && 1 === o &&
                            "opacity-60")
                    })
                })]
            })
        };
        var m = e.i(13396);
        let p = (0, r.forwardRef)(({
            children: e,
            className: u,
            snapping: d = !1,
            wrapperClassName: f,
            containerClassName: p,
            activeClassName: b,
            snapClassName: v,
            dotContainerClassName: g,
            dotClassName: x,
            activeDotClassName: y,
            style: w,
            loop: k = !1,
            preventDrag: j = !1,
            overflowHidden: N = !0,
            overflowHiddenMobile: _ = !1,
            indexInit: E = 0,
            groupBy: S = 1,
            withButtons: M,
            withDots: O = !1,
            hideDesktopDots: I = !1,
            dotsVariant: C = "flat",
            hideMobileButtons: R = !1,
            hideDesktopButtons: L = !1,
            edgeContrains: W = !0,
            controllerClassName: P,
            controllerButtonVariant: D,
            controllerButtonTheme: T,
            controllerButtonClassName: V,
            controllerPortal: $,
            centerElement: z = !1,
            disabled: q = !1,
            autoDisable: H = !0,
            onUpdate: B,
            onChange: A,
            onDrag: F,
            onRest: Z,
            onTransformItem: U = ({
                x: e,
                y: t
            }) => `translate3d(${e}px,${t}px,0)`
        }, Y) => {
            let K = (0, r.useRef)(null),
                X = (0, r.useRef)(null),
                J = (0, r.useRef)(r.Children.map(e, () => (0, r.useRef)())),
                G = (0, r.useRef)(),
                Q = (0, r.useCallback)(e => {
                    G.current = e, Y && (Y.current = e)
                }, []),
                ee = (0, r.useRef)(!1),
                et = (0, r.useRef)(!1),
                er = (0, r.useRef)(!1),
                en = (0, r.useRef)(!1),
                el = (0, r.useRef)(E),
                ei = (0, r.useRef)(S),
                es = (0, r.useRef)(0),
                [ea, eo] = (0, r.useState)(el.current),
                [ec, eu] = (0, r.useState)(-1),
                ed = (0, r.useRef)(!1),
                [ef, eh] = (0, r.useState)(ed.current),
                em = (0, i.default)(!0),
                ep = (0, r.useRef)({
                    top: 0,
                    left: 0,
                    width: 0,
                    height: 0
                }),
                eb = (0, r.useRef)(0),
                ev = (0, r.useRef)(0),
                eg = (0, r.useRef)(0),
                ex = (0, r.useRef)(0),
                ey = (0, r.useRef)(0),
                ew = (0, r.useRef)(0),
                ek = (0, r.useRef)(0),
                ej = (0, r.useRef)(0),
                eN = (0, r.useRef)(0),
                e_ = (0, r.useRef)(0),
                eE = (0, r.useRef)(0),
                eS = (0, r.useRef)(0),
                eM = (0, r.useRef)([-1 / 0, 1 / 0]),
                eO = (0, r.useRef)(!0),
                eI = (0, r.useRef)(null),
                eC = e => {
                    e.forEach(e => {
                        let t = e.target;
                        t.__width = e.target.offsetWidth, t.__xInit = e.target.offsetLeft, t
                            .__x || (t.__x = 0), eI.current && eI.current.unobserve(t)
                    }), eH(el.current), en.current = !0, eL(!0)
                },
                eR = (0, r.useCallback)(() => {
                    es.current = r.Children.count(e) / S + +(r.Children.count(e) % S != 0) | 0;
                    let t = [];
                    return r.Children.forEach(e, (e, l) => {
                        if (e?.ref) t[l] = e, J.current[l] = e.ref;
                        else {
                            let i = J.current[l];
                            t[l] = (0, r.cloneElement)(e, {
                                ref: i,
                                className: (0, n.default)(e.props.className,
                                    "shrink-0")
                            })
                        }
                    }), t
                }, [e]),
                eL = (e = !1) => {
                    if (q || !ed.current || !J.current?.length || !ep.current.width) return;
                    if (ee.current ? (eE.current = ew.current - eN.current, ex.current += (eE.current -
                            ev.current) * .25, ex.current *= .52, er.current = !1) : (d || er
                        .current) && (ex.current += (eE.current - ev.current) * .1, ex.current *= .62),
                        W) {
                        let e = ee.current ? .8 : .1,
                            t = eM.current[0],
                            r = eM.current[1];
                        ev.current + ex.current < t ? (ex.current += (t - ev.current) * e, ex.current *=
                            .55) : ev.current + ex.current > r ? (ex.current += (r - ev.current) *
                            e, ex.current *= .55) : ex.current *= .9
                    }
                    e ? (ev.current = eE.current, ex.current = 0) : ev.current += ex.current, ee
                        .current ? ex.current = ev.current - ey.current : ex.current > -.3 && ex
                        .current < .3 && !eO.current && (eO.current = !0, Z && Z()), ev.current = (100 *
                            ev.current | 0) / 100;
                    let t = ev.current - eE.current;
                    t < 0 && (t *= -1), t < .01 && (ev.current = eE.current), ey.current !== ev
                        .current && (en.current = !0), en.current && eW(), ey.current = ev.current
                },
                eW = () => {
                    for (let e = 0, t = J.current.length; e < t; e++) {
                        let t = J.current[e].current;
                        if (!t || void 0 === t.__xInit) continue;
                        let r = (ep.current.width - t.__width) / 2,
                            n = -ev.current + t.__xInit;
                        z && (n += r);
                        let l = n + t.__width + ep.current.left >= 0 && n + ep.current.left <= em
                            .current.innerWidth;
                        l ? (t.__x = -ev.current, t.style.transform = U({
                                element: t,
                                i: e,
                                relativeX: n - r,
                                x: z ? t.__x + r : t.__x,
                                y: eg.current
                            }), b && t.classList.add(b), t.__inView || (t.style.visibility = "", t
                                .style.willChange = "transform")) : !1 !== t.__inView && (t.style
                                .transform = "", t.style.visibility = "hidden", t.style.willChange = "",
                                b && t.classList.remove(b)), d && e === el.current ? v && t.classList
                            .add(v) : v && t.classList.remove(v), t.__inView = l
                    }
                    B?.(), en.current = !1
                },
                eP = () => {
                    X.current && eb.current && ep.current && (W && (eM.current = [0, eb.current - ep
                            .current.width
                        ]), ed.current = !H || eb.current > X.current.clientWidth, eh(ed.current),
                        ed.current && J.current && (J.current.forEach(e => {
                            e.current && eI.current && eI.current.observe(e.current)
                        }), eA(el.current), J.current[el.current]?.current?.__xInit && eB(el
                            .current)))
                },
                eD = () => {
                    er.current = !0, eH(el.current - S)
                },
                eT = () => {
                    er.current = !0, eH(el.current + S)
                },
                eV = e => {
                    e.preventDefault()
                },
                e$ = e => {
                    if (void 0 !== e.button && 0 !== e.button) return;
                    let t = e.touches && e.touches[0] || e;
                    eO.current = !1, eN.current = t.pageX, ej.current = eN.current, ek.current = eN
                        .current, ew.current = eN.current + ev.current, ex.current = 0, e_.current = 0,
                        ee.current = !0, et.current = !1
                },
                ez = e => {
                    if (ee.current && K.current) {
                        eN.current = (e.touches && e.touches[0] || e).pageX, e_.current = eN.current -
                            ej.current;
                        let t = eN.current - ek.current;
                        Math.abs(t) > 30 ? (eS.current = Math.sign(t), K.current.style.pointerEvents =
                                "none") : Math.abs(e_.current) > 1 ? (eS.current = Math.sign(e_
                                .current), K.current.style.pointerEvents = "none") : eS.current = 0, ej
                            .current = eN.current, F && F(ee.current, eS.current)
                    }
                },
                eq = () => {
                    if (ee.current && K.current) {
                        if (K.current.style.pointerEvents = "", d) {
                            let e = {
                                x: 1 / 0,
                                element: void 0,
                                i: 0
                            };
                            for (let t = 0, r = J.current.length; t < r; t++) {
                                let r = J.current[t].current,
                                    n = Math.abs(-ev.current + r.__xInit);
                                n < e.x && (e = {
                                    x: n,
                                    element: r,
                                    i: t
                                })
                            }
                            let t = e.i - e.i % ei.current;
                            eH(t - (t === el.current ? eS.current * ei.current : 0))
                        }
                        ee.current = !1, eS.current = 0, F && F(ee.current, eS.current)
                    }
                },
                eH = e => {
                    let t = (0, o.clamp)(e, 0, J.current.length - 1 - (J.current.length - 1) % ei
                        .current);
                    J.current[t].current && (eB(t), eo(t), eA(t), A && el.current !== t && A(t, ee
                        .current), el.current = t)
                },
                eB = e => {
                    eE.current = (0, o.clamp)(J.current[e].current.__xInit, eM.current[0], eM.current[
                        1])
                },
                eA = e => {
                    let t = e / ei.current + 1;
                    eu(0 === e ? -1 : +(t >= J.current.length / ei.current))
                };
            return (0, s.default)(X, e => {
                ep.current.top = X.current?.offsetTop || 0, ep.current.left = X.current ? (0, m
                        .offsetLeft)(X.current) : 0, ep.current.width = e.contentRect.width, ep
                    .current.height = e.contentRect.height, eP()
            }), (0, s.default)(K, e => {
                eb.current = e.contentRect.width, eP()
            }), (0, l.default)(() => {
                eL()
            }), (0, r.useEffect)(() => {
                ei.current = S
            }, [S]), (0, r.useEffect)(() => {
                eW();
                let e = !!a.supportsPassiveEvents && {
                        passive: !0
                    },
                    t = X.current;
                return !j && (window.addEventListener("mousemove", ez, e), window
                        .addEventListener("touchmove", ez, e), window.addEventListener(
                            "mouseup", eq, e), window.addEventListener("touchend", eq, e), t &&
                        (t.addEventListener("mousedown", e$, e), t.addEventListener(
                            "touchstart", e$, e), t.addEventListener("dragstart", eV))), eI
                    .current = new IntersectionObserver(eC), () => {
                        !j && (window.removeEventListener("mousemove", ez), window
                                .removeEventListener("touchmove", ez), window
                                .removeEventListener("mouseup", eq), window.removeEventListener(
                                    "touchend", eq), t && (t.removeEventListener("mousedown",
                                        e$), t.removeEventListener("touchstart", e$), t
                                    .removeEventListener("dragstart", eV))), eI.current && eI
                            .current.disconnect()
                    }
            }, []), (0, r.useImperativeHandle)(Y, () => ({
                ref: G.current,
                containerRef: X.current,
                prev() {
                    eD()
                },
                next() {
                    eT()
                },
                getIndex: () => el.current,
                setIndex(e, t) {
                    eH(e), t && eL(!0)
                },
                getRatio: () => ev.current / (eb.current - J.current[J.current.length - 1]
                    .current.__width),
                setRatio(e) {
                    ex.current = 0, e_.current = 0, ev.current = e * (eb.current - J
                        .current[J.current.length - 1].current.__width), eW()
                }
            }), []), (0, t.jsx)(t.Fragment, {
                children: (0, t.jsxs)("div", {
                    ref: Q,
                    className: (0, n.default)("relative w-full", u),
                    style: w,
                    children: [(0, t.jsx)("div", {
                        ref: X,
                        className: (0, n.default)("relative z-1",
                            "select-none touch-pan-y", p, ef && !j &&
                            "cursor-grab active:cursor-grabbing", N &&
                            "lg:overflow-clip", _ &&
                            "lg-max:overflow-clip"),
                        children: (0, t.jsx)("div", {
                            ref: K,
                            className: (0, n.default)(
                                "flex w-max relative", f),
                            children: eR()
                        })
                    }), ef && M && ($?.current ? (0, c.createPortal)((0, t.jsx)(
                        h, {
                            onPrev: eD,
                            onNext: eT,
                            loop: k,
                            hideMobile: R,
                            hideDesktop: L,
                            className: P,
                            buttonState: ec,
                            buttonTheme: T,
                            buttonClassName: V,
                            buttonVariant: D
                        }), $.current) : (0, t.jsx)(h, {
                        onPrev: eD,
                        onNext: eT,
                        loop: k,
                        buttonState: ec,
                        buttonVariant: D,
                        buttonTheme: T,
                        buttonClassName: V,
                        hideMobile: R,
                        hideDesktop: L,
                        className: (0, n.default)(
                            "z-1 absolute -margin-inset-x-1 lg:inset-x-0 top-1/2 transform -translate-y-1/2",
                            P)
                    })), ef && O && (0, t.jsx)("ul", {
                        className: (0, n.default)(
                            "flex justify-center mt-20", "circle" ===
                            C ? "gap-12" : "gap-10", g, I && "lg:hidden"
                            ),
                        children: Array(r.Children.count(e) / S + +(r
                                .Children.count(e) % S != 0) | 0).fill(null)
                            .map((e, r) => {
                                let l = r === (ea / S || 0);
                                return (0, t.jsx)("li", {
                                    className: (0, n.default)(
                                        "cursor-pointer",
                                        "after:block",
                                        "flat" === C &&
                                        "py-10 -my-10 after:w-50 after:h-0 after:border-t after:border-grey-stroke after:border-2",
                                        "circle" === C &&
                                        "py-10 px-5 -my-10 -mx-5 after:w-6 after:h-6 after:rounded-full",
                                        "transition-opacity duration-300",
                                        x, l ?
                                        "opacity-100" :
                                        "opacity-50", l &&
                                        y && y),
                                    onClick: () => eH(r * S)
                                }, r)
                            })
                    })]
                })
            })
        });
        e.s(["Slideshow", 0, p], 43482)
    },
    53454, e => {
        "use strict";
        e.s(["emailIsValid", 0, e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e), "slugify", 0, (e, t = "-") => e = e
            .toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(
                /[^a-z0-9 !\n]/g, "").replace(/^[0-9]+ ?/, "").replace(/\s+/g, t)
        ])
    },
    59782, 5476, e => {
        "use strict";
        var t, r = e.i(71448),
            n = e.i(53014),
            l = e.i(70733);

        function i() {
            return (i = Object.assign.bind()).apply(null, arguments)
        }
        let s = e => n.createElement("svg", i({
            xmlns: "http://www.w3.org/2000/svg",
            width: 10,
            height: 8,
            fill: "none",
            viewBox: "0 0 10 8"
        }, e), t || (t = n.createElement("path", {
            stroke: "currentColor",
            d: "m1 4 3 3 5-6"
        })));
        e.i(1607);
        var a = e.i(21740);
        e.s(["FormContext", () => a.default], 5476);
        var a = a;
        let o = (0, n.forwardRef)(({
            name: e,
            id: t,
            children: i,
            className: o,
            required: c = !1,
            disabled: u = !1,
            theme: d = "light",
            error: f = !1,
            ...h
        }, m) => {
            let {
                hasValidation: p
            } = (0, n.useContext)(a.default);
            return (0, r.jsxs)("label", {
                className: (0, l.default)("relative inline-flex items-baseline gap-8",
                    "font-light text-12 cursor-pointer text-grey-dark text-left", u &&
                    "cursor-auto opacity-60 pointer-events-none", o),
                htmlFor: t || e,
                children: [(0, r.jsx)("input", {
                    ref: m,
                    type: "checkbox",
                    id: t || e,
                    name: e || t,
                    required: c,
                    className: (0, l.default)(
                        "absolute pointer-events-none opacity-0 peer"),
                    ...h
                }), (0, r.jsx)("i", {
                    className: (0, l.default)(
                            "relative flex items-center justify-center", "dark" ===
                            d ? "text-white border-white/[15%]" : "text-black",
                            "shrink-0 w-[16px] h-[16px] border peer-checked:[&>svg]:opacity-100",
                            "transition-[background-color,border-color] duration-300 ease-quart-out",
                            "light" === d ?
                            "peer-checked:bg-black peer-checked:border-white/40" :
                            "peer-checked:bg-white", p && "peer-invalid:border-red"
                            ),
                    "aria-hidden": !0,
                    children: (0, r.jsx)(s, {
                        className: (0, l.default)("w-10 m-auto opacity-0",
                            "transition-opacity duration-300 ease-quart-out",
                            "dark" === d ? "text-black" : "text-white")
                    })
                }), (0, r.jsx)("div", {
                    className: (0, l.default)(
                        "transition-color duration-300 ease-quart-out", f &&
                        "text-red", p && "peer-invalid:text-red"),
                    children: i
                })]
            })
        });
        e.s(["Checkbox", 0, o], 59782)
    },
    92359, e => {
        "use strict";
        var t = e.i(71448),
            r = e.i(53014),
            n = e.i(70733),
            l = e.i(92238);
        let i = ({
            children: e
        }) => {
            let r = (0, l.default)();
            return (0, t.jsx)(t.Fragment, {
                children: r(e)
            })
        };
        var s = e.i(57739);
        e.i(1607);
        var a = e.i(5476);
        e.s(["Form", 0, ({
            children: e,
            className: o,
            autoReset: c = !0,
            additionalReset: u,
            errors: d,
            submitLabel: f,
            buttonTheme: h,
            buttonClassName: m,
            onSubmit: p,
            style: b
        }) => {
            let [v, g] = (0, r.useState)(null), [x, y] = (0, r.useState)(!1), [w, k] = (0, r
                .useState)(!1), [j, N] = (0, r.useState)(!1), [_, E] = (0, r.useState)(!1), S = (0,
                    l.default)(), M = (0, r.useRef)(S("An error occured, please try again later")),
                O = (0, r.useRef)();
            (0, r.useEffect)(() => () => {
                O.current && clearTimeout(O.current)
            }, []);
            let I = async e => {
                e.preventDefault(), k(!0), y(!0), g(null);
                let t = e.currentTarget,
                    r = new FormData(t),
                    n = Array.from(r.entries()).reduce((e, [t, r]) => ({
                        ...e,
                        [t]: "on" === r || r
                    }), {}),
                    l = await p({
                        form: t,
                        formData: r,
                        body: n
                    });
                if (k(!1), l && (l.status?.toString()[0] !== "2" || l.errors?.length)) {
                    let e = l.status || l.errors[0].code;
                    g(e && d?.[e] || M.current)
                } else N(!0), O.current = setTimeout(() => {
                    N(!1), c && (y(!1), E(!0), u?.(), t.reset())
                }, 5e3)
            };
            return (0, r.useEffect)(() => {
                let e;
                return _ && (e = setTimeout(() => {
                    E(!1)
                }, 100)), () => clearTimeout(e)
            }, [_]), (0, t.jsxs)("form", {
                className: (0, n.default)("relative", o),
                style: b,
                onInvalid: e => {
                    e.preventDefault(), y(!0), g(null)
                },
                onSubmit: I,
                children: [(0, t.jsx)(a.FormContext.Provider, {
                    value: {
                        hasValidation: x,
                        isLoading: w,
                        isReseting: _
                    },
                    children: e
                }), (0, t.jsx)(s.Button, {
                    type: "submit",
                    variant: "primary",
                    theme: h,
                    enableLoader: !0,
                    loading: w,
                    loaded: j,
                    disabled: w || j,
                    className: (0, n.default)("mt-40", m),
                    children: f || (0, t.jsx)(i, {
                        children: "Submit"
                    })
                }), (0, t.jsx)("div", {
                    "aria-hidden": !v,
                    className: (0, n.default)(
                        "absolute z-1 bottom-48 left-0 w-full text-10 mt-10 animate-fade-in uppercase transition-[opacity,visibility]",
                        "text-red pointer-events-none", v ?
                        "opacity-100 visible" : "opacity-0 invisible"),
                    children: v
                })]
            })
        }], 92359)
    },
    34004, 49422, e => {
        "use strict";
        var t = e.i(71448);
        e.i(1607);
        var r = e.i(5476);
        let n = {
            badInput: "is a bad input",
            patternMismatch: "format incorrect",
            rangeOverflow: "too high",
            rangeUnderflow: "too low",
            stepMismatch: "does not match the step",
            tooLong: "too long",
            tooShort: "too short",
            typeMismatch: "format incorrect",
            valueMissing: "required",
            customError: "invalid"
        };
        var l = e.i(70733),
            i = e.i(53014);
        let s = ({
            type: e,
            as: s,
            id: a,
            children: o,
            name: c,
            className: u,
            inputClassName: d,
            errorClassName: f,
            labelClassName: h,
            defaultValue: m,
            label: p,
            placeholder: b,
            required: v = !1,
            floatLabel: g = !0,
            floatError: x = !0,
            variant: y = "default",
            hasError: w = !1,
            errorSpace: k,
            disableRequiredIndicator: j = !1,
            errorMessage: N,
            exampleValidInput: _,
            formatter: E,
            validator: S,
            customErrors: M = {},
            onChange: O,
            eagerValidation: I,
            inputRef: C,
            theme: R = "light",
            ...L
        }) => {
            let {
                hasValidation: W,
                isReseting: P
            } = (0, i.useContext)(r.FormContext), D = "textarea" === s, T = (0, i.useRef)(null), [V, $] = (
                    0, i.useState)(m || ""), z = ((e = {}) => {
                    let t = {
                        ...n,
                        ...e
                    };
                    return (e, r = "") => {
                        let {
                            name: n,
                            validity: l,
                            value: i
                        } = e, {
                            placeholder: s,
                            minLength: a,
                            maxLength: o
                        } = e, c = s?.replace("*", "") || r || n, u = Object.keys(t).find(e => !!l[
                            e] && e);
                        if (u && t[u]) return "function" == typeof t[u] ? t[u]({
                                error: u,
                                value: i
                            }) : "patternMismatch" === u && t.exampleValidInput ?
                            `${c} ${t[u]} ${t.exampleValidInput}` : "tooShort" === u && a ?
                            `${c} should be atleast ${a} characters` : "tooLong" === u && o ?
                            `${c} cannot be more than ${o} characters` : `${c} ${t[u]}`
                    }
                })(_ ? {
                    patternMismatch: "should be of format",
                    exampleValidInput: _,
                    ...M
                } : M), q = W || I && V, H = q && T.current && !T.current.validity?.valid && z(T.current),
                B = q && (N || H);
            b && v && !j && (b += "*"), g && !p && b && (p = b);
            let A = (e = V) => {
                if ("function" == typeof S) {
                    let {
                        isValid: t,
                        errorMessage: r
                    } = S(e, T.current);
                    T.current && T.current.setCustomValidity?.(t || !r ? "" : r)
                }
            };
            return (0, i.useEffect)(A, [S]), (0, i.useEffect)(() => {
                P && $(m || "")
            }, [P]), (0, t.jsxs)("div", {
                className: (0, l.default)(u, "relative flex flex-col", !x && B && W && "mb-28"),
                children: [(0, t.jsx)(s, {
                    type: e,
                    value: V,
                    name: c,
                    id: a || c,
                    ref: e => {
                        T.current = e, C?.current && (C.current = e)
                    },
                    required: v,
                    placeholder: g ? " " : b,
                    "aria-label": p,
                    onChange: e => {
                        let t = e.target.value,
                            r = E ? E(t) : t;
                        e.formattedValue = r, $(r), A(r), O?.(e)
                    },
                    className: (0, l.default)(
                        "block w-full h-40 text-10 placeholder:uppercase bg-transparent appearance-none border-b focus:outline-none focus:ring-0 duration-300 ease-quart-out transition-colors",
                        "peer", D && "h-90 py-12 resize-none", "dark" === R ?
                        "text-white placeholder:opacity-100 placeholder:text-white" :
                        "placeholder:text-black", "dark" === R ?
                        "border-white/[15%] focus:border-white" :
                        "border-black/30 focus:border-black/30", W &&
                        "invalid:border-red invalid:focus:border-red-light invalid:active:border-red-light",
                        w && "!border-red text-red", d),
                    ...L
                }), p && (0, t.jsxs)("label", {
                    htmlFor: a || c,
                    className: (0, l.default)(
                        "order-first text-12 duration-300 ease-quart-out", g ?
                        "absolute top-0 ml-1 px-4 transform -translate-y-1/2 z-2 origin-left peer-focus:top-0 pointer-events-none" :
                        "round" === y ? "pl-16 pb-4" : "pb-4", D ?
                        "peer-placeholder-shown:top-18" :
                        "peer-placeholder-shown:top-1/2", D || "round" !== y ?
                        "left-12" : "left-16", "dark" === R ? "bg-black" :
                        "bg-white", "text-white peer-focus:text-white", W &&
                        "peer-invalid:text-red peer-invalid:peer-focus:text-red-light",
                        w && "text-red", !!V && "top-0", h),
                    children: [p, v && "*"]
                }), B && (0, t.jsx)("span", {
                    className: (0, l.default)("absolute top-full", x ?
                        "px-4 mr-1 -translate-y-1/2" : "round" === y ?
                        "pl-20 pt-4 left-0" : "pt-4 left-0",
                        "text-10 font-mono text-red duration-300 ease-quart-out transition-opacity pointer-events-none",
                        D ? "right-16" : "round" === y ? "right-20" : "right-12",
                        "dark" === R ? "bg-black" : "bg-white", W ?
                        "peer-invalid:opacity-100 absolute top-full" : "hidden",
                        w && "peer-invalid:opacity-100 absolute top-full", f),
                    children: B
                }), o]
            })
        };
        e.s(["InputOrTextArea", 0, s], 49422);
        let a = (0, i.forwardRef)(({
            ...e
        }, r) => (0, t.jsx)(s, {
            as: "input",
            ref: r,
            ...e
        }));
        e.s(["Input", 0, a], 34004)
    },
    11081, e => {
        "use strict";
        var t = e.i(71448),
            r = e.i(70733);

        function n(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), r.push.apply(r, n)
            }
            return r
        }

        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? n(Object(r), !0).forEach(function(t) {
                    var n, l, i;
                    n = e, l = t, i = r[t], (l = function(e) {
                        var t = function(e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var n = r.call(e, t || "default");
                                if ("object" != typeof n) return n;
                                throw TypeError(
                                    "@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === t ? String : Number)(e)
                        }(e, "string");
                        return "symbol" == typeof t ? t : t + ""
                    }(l)) in n ? Object.defineProperty(n, l, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[l] = i
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object
                    .getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }

        function i(e) {
            return "span" === e._type && "text" in e && "string" == typeof e.text && (typeof e.marks > "u" ||
                Array.isArray(e.marks) && e.marks.every(e => "string" == typeof e))
        }

        function s(e) {
            return "string" == typeof e._type && "@" !== e._type[0] && (!("markDefs" in e) || !e.markDefs ||
                    Array.isArray(e.markDefs) && e.markDefs.every(e => "string" == typeof e._key)) &&
                "children" in e && Array.isArray(e.children) && e.children.every(e => "object" == typeof e &&
                    "_type" in e)
        }

        function a(e) {
            return s(e) && "listItem" in e && "string" == typeof e.listItem && (typeof e.level > "u" ||
                "number" == typeof e.level)
        }

        function o(e) {
            return "@list" === e._type
        }

        function c(e) {
            return "@span" === e._type
        }

        function u(e) {
            return "@text" === e._type
        }
        let d = ["strong", "em", "code", "underline", "strike-through"];

        function f(e, t, r) {
            if (!i(e) || !e.marks || !e.marks.length) return [];
            let n = e.marks.slice(),
                l = {};
            return n.forEach(e => {
                l[e] = 1;
                for (let n = t + 1; n < r.length; n++) {
                    let t = r[n];
                    if (t && i(t) && Array.isArray(t.marks) && -1 !== t.marks.indexOf(e)) l[e]++;
                    else break
                }
            }), n.sort((e, t) => (function(e, t, r) {
                let n = e[t],
                    l = e[r];
                if (n !== l) return l - n;
                let i = d.indexOf(t),
                    s = d.indexOf(r);
                return i !== s ? i - s : t.localeCompare(r)
            })(l, e, t))
        }

        function h(e, t, r) {
            return {
                _type: "@list",
                _key: `${e._key||`${t}`}-parent`,
                mode: r,
                level: e.level || 1,
                listItem: e.listItem,
                children: [e]
            }
        }

        function m(e, t) {
            let r = t.level || 1,
                n = t.listItem || "normal",
                l = "string" == typeof t.listItem;
            if (o(e) && (e.level || 1) === r && l && (e.listItem || "normal") === n) return e;
            if (!("children" in e)) return;
            let s = e.children[e.children.length - 1];
            return s && !i(s) ? m(s, t) : void 0
        }
        var p = e.i(53014);
        let b = ["block", "list", "listItem", "marks", "types"],
            v = ["listItem"],
            g = ["_key"];

        function x(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), r.push.apply(r, n)
            }
            return r
        }

        function y(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? x(Object(r), !0).forEach(function(t) {
                    var n, l, i;
                    n = e, l = t, i = r[t], (l = function(e) {
                        var t = function(e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var n = r.call(e, t || "default");
                                if ("object" != typeof n) return n;
                                throw TypeError(
                                    "@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === t ? String : Number)(e)
                        }(e, "string");
                        return "symbol" == typeof t ? t : t + ""
                    }(l)) in n ? Object.defineProperty(n, l, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[l] = i
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object
                    .getOwnPropertyDescriptors(r)) : x(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }

        function w(e, t) {
            if (null == e) return {};
            var r, n, l = function(e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                    if (({}).hasOwnProperty.call(e, n)) {
                        if (-1 !== t.indexOf(n)) continue;
                        r[n] = e[n]
                    } return r
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) r = i[n], -1 === t.indexOf(r) && ({}).propertyIsEnumerable.call(
                    e, r) && (l[r] = e[r])
            }
            return l
        }
        let k = {
                textDecoration: "underline"
            },
            j = (e, t) =>
            `[@portabletext/react] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,
            N = e => j(`block type "${e}"`, "types");

        function _(e) {
            console.warn(e)
        }
        let E = {
                display: "none"
            },
            S = {
                types: {},
                block: {
                    normal: ({
                        children: e
                    }) => (0, t.jsx)("p", {
                        children: e
                    }),
                    blockquote: ({
                        children: e
                    }) => (0, t.jsx)("blockquote", {
                        children: e
                    }),
                    h1: ({
                        children: e
                    }) => (0, t.jsx)("h1", {
                        children: e
                    }),
                    h2: ({
                        children: e
                    }) => (0, t.jsx)("h2", {
                        children: e
                    }),
                    h3: ({
                        children: e
                    }) => (0, t.jsx)("h3", {
                        children: e
                    }),
                    h4: ({
                        children: e
                    }) => (0, t.jsx)("h4", {
                        children: e
                    }),
                    h5: ({
                        children: e
                    }) => (0, t.jsx)("h5", {
                        children: e
                    }),
                    h6: ({
                        children: e
                    }) => (0, t.jsx)("h6", {
                        children: e
                    })
                },
                marks: {
                    em: ({
                        children: e
                    }) => (0, t.jsx)("em", {
                        children: e
                    }),
                    strong: ({
                        children: e
                    }) => (0, t.jsx)("strong", {
                        children: e
                    }),
                    code: ({
                        children: e
                    }) => (0, t.jsx)("code", {
                        children: e
                    }),
                    underline: ({
                        children: e
                    }) => (0, t.jsx)("span", {
                        style: k,
                        children: e
                    }),
                    "strike-through": ({
                        children: e
                    }) => (0, t.jsx)("del", {
                        children: e
                    }),
                    link: ({
                        children: e,
                        value: r
                    }) => (0, t.jsx)("a", {
                        href: null == r ? void 0 : r.href,
                        children: e
                    })
                },
                list: {
                    number: ({
                        children: e
                    }) => (0, t.jsx)("ol", {
                        children: e
                    }),
                    bullet: ({
                        children: e
                    }) => (0, t.jsx)("ul", {
                        children: e
                    })
                },
                listItem: ({
                    children: e
                }) => (0, t.jsx)("li", {
                    children: e
                }),
                hardBreak: () => (0, t.jsx)("br", {}),
                unknownType: ({
                    value: e,
                    isInline: r
                }) => {
                    let n = N(e._type);
                    return r ? (0, t.jsx)("span", {
                        style: E,
                        children: n
                    }) : (0, t.jsx)("div", {
                        style: E,
                        children: n
                    })
                },
                unknownMark: ({
                    markType: e,
                    children: r
                }) => (0, t.jsx)("span", {
                    className: `unknown__pt__mark__${e}`,
                    children: r
                }),
                unknownList: ({
                    children: e
                }) => (0, t.jsx)("ul", {
                    children: e
                }),
                unknownListItem: ({
                    children: e
                }) => (0, t.jsx)("li", {
                    children: e
                }),
                unknownBlockStyle: ({
                    children: e
                }) => (0, t.jsx)("p", {
                    children: e
                })
            };

        function M(e, t, r) {
            let n = t[r],
                l = e[r];
            return "function" == typeof n || n && "function" == typeof l ? n : n ? y(y({}, l), n) : l
        }

        function O({
            value: e,
            components: r,
            listNestingMode: n,
            onMissingComponent: i = _
        }) {
            let s = i || R,
                o = function(e, t) {
                    let r, n = [];
                    for (let o = 0; o < e.length; o++) {
                        let c = e[o];
                        if (c) {
                            var i, s;
                            if (!a(c)) {
                                n.push(c), r = void 0;
                                continue
                            }
                            if (!r) {
                                r = h(c, o, t), n.push(r);
                                continue
                            }
                            if (i = c, s = r, (i.level || 1) === s.level && i.listItem === s.listItem) {
                                r.children.push(c);
                                continue
                            }
                            if ((c.level || 1) > r.level) {
                                let e = h(c, o, t);
                                if ("html" === t) {
                                    let t = r.children[r.children.length - 1],
                                        n = l(l({}, t), {}, {
                                            children: [...t.children, e]
                                        });
                                    r.children[r.children.length - 1] = n
                                } else r.children.push(e);
                                r = e;
                                continue
                            }
                            if ((c.level || 1) < r.level) {
                                let e = n[n.length - 1],
                                    l = e && m(e, c);
                                if (l) {
                                    (r = l).children.push(c);
                                    continue
                                }
                                r = h(c, o, t), n.push(r);
                                continue
                            }
                            if (c.listItem !== r.listItem) {
                                let e = n[n.length - 1],
                                    l = e && m(e, {
                                        level: c.level || 1
                                    });
                                if (l && l.listItem === c.listItem) {
                                    (r = l).children.push(c);
                                    continue
                                }
                                r = h(c, o, t), n.push(r);
                                continue
                            }
                            console.warn("Unknown state encountered for block", c), n.push(c)
                        }
                    }
                    return n
                }(Array.isArray(e) ? e : [e], n || "html"),
                c = (0, p.useMemo)(() => r ? function(e, t) {
                    let {
                        block: r,
                        list: n,
                        listItem: l,
                        marks: i,
                        types: s
                    } = t, a = w(t, b);
                    return y(y({}, e), {}, {
                        block: M(e, t, "block"),
                        list: M(e, t, "list"),
                        listItem: M(e, t, "listItem"),
                        marks: M(e, t, "marks"),
                        types: M(e, t, "types")
                    }, a)
                }(S, r) : S, [r]),
                u = (0, p.useMemo)(() => I(c, s), [c, s]),
                d = o.map((e, t) => u({
                    node: e,
                    index: t,
                    isInline: !1,
                    renderNode: u
                }));
            return (0, t.jsx)(t.Fragment, {
                children: d
            })
        }
        let I = (e, r) => function n(l) {
            var i, d, f, h, m, p, b, x;
            let k, _, {
                    node: E,
                    index: S,
                    isInline: M
                } = l,
                O = E._key || `node-${S}`;
            return o(E) ? function(l, i, s) {
                let a = l.children.map((e, t) => n({
                        node: e._key ? e : y(y({}, e), {}, {
                            _key: `li-${i}-${t}`
                        }),
                        index: t,
                        isInline: !1
                    })),
                    o = e.list,
                    c = ("function" == typeof o ? o : o[l.listItem]) || e.unknownList;
                if (c === e.unknownList) {
                    let e = l.listItem || "bullet";
                    r(j(`list style "${e}"`, "list"), {
                        nodeType: "listStyle",
                        type: e
                    })
                }
                return (0, t.jsx)(c, {
                    value: l,
                    index: i,
                    isInline: !1,
                    renderNode: n,
                    children: a
                }, s)
            }(E, S, O) : a(E) ? function(l, i, s) {
                let a = C({
                        node: l,
                        index: i,
                        isInline: !1,
                        renderNode: n
                    }),
                    o = e.listItem,
                    c = ("function" == typeof o ? o : o[l.listItem]) || e.unknownListItem;
                if (c === e.unknownListItem) {
                    let e = l.listItem || "bullet";
                    r(j(`list item style "${e}"`, "listItem"), {
                        type: e,
                        nodeType: "listItemStyle"
                    })
                }
                let u = a.children;
                if (l.style && "normal" !== l.style) {
                    let {
                        listItem: e
                    } = l;
                    u = n({
                        node: w(l, v),
                        index: i,
                        isInline: !1
                    })
                }
                return (0, t.jsx)(c, {
                    value: l,
                    index: i,
                    isInline: !1,
                    renderNode: n,
                    children: u
                }, s)
            }(E, S, O) : c(E) ? function(l, i, s) {
                let {
                    markDef: a,
                    markType: o,
                    markKey: d
                } = l, f = e.marks[o] || e.unknownMark, h = l.children.map((e, t) => n({
                    node: e,
                    index: t,
                    isInline: !0
                }));
                return f === e.unknownMark && r(j(`mark type "${o}"`, "marks"), {
                    nodeType: "mark",
                    type: o
                }), (0, t.jsx)(f, {
                    text: function e(t) {
                        let r = "";
                        return t.children.forEach(t => {
                            u(t) ? r += t.text : c(t) && (r += e(t))
                        }), r
                    }(l),
                    value: a,
                    markType: o,
                    markKey: d,
                    renderNode: n,
                    children: h
                }, s)
            }(E, 0, O) : E._type in e.types ? (i = E, d = S, f = O, h = M, (k = e.types[i._type]) ? (0,
                t.jsx)(k, y({}, {
                value: i,
                isInline: h,
                index: d,
                renderNode: n
            }), f) : null) : s(E) ? function(l, i, s, a) {
                let o = C({
                        node: l,
                        index: i,
                        isInline: a,
                        renderNode: n
                    }),
                    {
                        _key: c
                    } = o,
                    u = w(o, g),
                    d = u.node.style || "normal",
                    f = ("function" == typeof e.block ? e.block : e.block[d]) || e.unknownBlockStyle;
                return f === e.unknownBlockStyle && r(j(`block style "${d}"`, "block"), {
                    nodeType: "blockStyle",
                    type: d
                }), (0, t.jsx)(f, y(y({}, u), {}, {
                    value: u.node,
                    renderNode: n
                }), s)
            }(E, S, O, M) : u(E) ? function(r, n) {
                if (r.text === `
`) {
                    let r = e.hardBreak;
                    return r ? (0, t.jsx)(r, {}, n) : `
`
                }
                return r.text
            }(E, O) : (m = E, p = S, b = O, x = M, r(N(m._type), {
                nodeType: "block",
                type: m._type
            }), _ = e.unknownType, (0, t.jsx)(_, y({}, {
                value: m,
                isInline: x,
                index: p,
                renderNode: n
            }), b))
        };

        function C(e) {
            let {
                node: t,
                index: r,
                isInline: n,
                renderNode: l
            } = e, s = (function(e) {
                var t, r;
                let {
                    children: n
                } = e, l = null != (t = e.markDefs) ? t : [];
                if (!n || !n.length) return [];
                let s = n.map(f),
                    a = {
                        _type: "@span",
                        children: [],
                        markType: "<unknown>"
                    },
                    o = [a];
                for (let e = 0; e < n.length; e++) {
                    let t = n[e];
                    if (!t) continue;
                    let a = s[e] || [],
                        c = 1;
                    if (o.length > 1)
                        for (; c < o.length; c++) {
                            let e = (null == (r = o[c]) ? void 0 : r.markKey) || "",
                                t = a.indexOf(e);
                            if (-1 === t) break;
                            a.splice(t, 1)
                        }
                    let u = (o = o.slice(0, c))[o.length - 1];
                    if (u) {
                        for (let e of a) {
                            let r = null == l ? void 0 : l.find(t => t._key === e),
                                n = r ? r._type : e,
                                i = {
                                    _type: "@span",
                                    _key: t._key,
                                    children: [],
                                    markDef: r,
                                    markType: n,
                                    markKey: e
                                };
                            u.children.push(i), o.push(i), u = i
                        }
                        if (i(t)) {
                            let e = t.text.split(`
`);
                            for (let t = e.length; t-- > 1;) e.splice(t, 0, `
`);
                            u.children = u.children.concat(e.map(e => ({
                                _type: "@text",
                                text: e
                            })))
                        } else u.children = u.children.concat(t)
                    }
                }
                return a.children
            })(t).map((e, t) => l({
                node: e,
                isInline: !0,
                index: t,
                renderNode: l
            }));
            return {
                _key: t._key || `block-${r}`,
                children: s,
                index: r,
                isInline: n,
                node: t
            }
        }

        function R() {}
        var L = e.i(57739),
            W = e.i(53454),
            P = e.i(43463);
        let D = ({
            image: e,
            quote: r,
            author: n,
            company: l
        }) => (0, t.jsxs)("div", {
            className: "w-full lg:span-w-12 lg:flex my-60 p-20 lg:border border-black/10 text-24 font-mono uppercase",
            children: [(0, t.jsxs)("div", {
                className: "order-1 lg:order-2 lg:ml-20 lg-max:mb-20 lg-max:gap-10",
                children: [(0, t.jsx)("p", {
                    className: "lg:mb-10 lg-max:after:mt-10 uppercase before:content-['“'] after:content-['”'] after:inline-block before:inline-block",
                    children: r
                }), (0, t.jsxs)("p", {
                    className: "flex items-center text-10 before:block before:w-4 before:h-4 before:mr-6 before:bg-black",
                    children: [(0, t.jsx)("span", {
                        children: n
                    }), l && (0, t.jsxs)("span", {
                        className: "text-grey-dark",
                        children: [" (", l, ")"]
                    })]
                })]
            }), (0, t.jsx)(P.SanityImage, {
                image: e,
                className: "lg-max:order-2 lg:order:1 pointer-events-none select-none w-40 h-52 object-cover",
                mobileWidth: 40,
                desktopWidth: 40
            })]
        });
        var T = e.i(87128);
        let V = ({
            className: e,
            selectedTab: n = "image",
            video: l,
            videoProps: i = {},
            image: s,
            imageProps: a = {},
            imagePropsMobile: o,
            desktopOnly: c,
            desktopWidth: u,
            mobileWidth: d,
            width: f,
            height: h,
            ratioMobile: m,
            priority: p,
            fill: b
        }) => {
            if ("video" === n && l?.srcs?.length) {
                let {
                    poster: n,
                    ...s
                } = l;
                return (0, t.jsx)(T.VideoLoop, {
                    posterDesktopWidth: u,
                    posterMobileWidth: d,
                    poster: n,
                    ratio: f && h && f / h,
                    fill: b,
                    ...s,
                    ...i,
                    priority: p,
                    desktopOnly: c,
                    className: (0, r.default)(e, i.className)
                })
            }
            return "image" === n && s ? (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(P.SanityImage, {
                    image: s,
                    desktopWidth: u,
                    mobileWidth: d,
                    width: f,
                    height: h,
                    fill: b,
                    ...a,
                    className: (0, r.default)(e, a.className),
                    priority: p,
                    desktopOnly: c || !!m
                }), m && (0, t.jsx)(P.SanityImage, {
                    image: s,
                    mobileWidth: d,
                    width: f,
                    height: f ? f / m | 0 : h,
                    fill: b,
                    ...o || a,
                    className: (0, r.default)(e, (o || a).className),
                    priority: p,
                    desktopOnly: c,
                    mobileOnly: !0
                })]
            }) : null
        };
        var $ = e.i(43482);
        let z = ({
            slides: e,
            className: n
        }) => (0, t.jsx)("div", {
            className: (0, r.default)("my-60 lg-max:-margin-mx-1", n),
            children: (0, t.jsx)($.Slideshow, {
                className: "w-full overflow-clip",
                wrapperClassName: "gutter-gap-1",
                containerClassName: "w-full h-full",
                snapping: !0,
                withButtons: !0,
                controllerClassName: "margin-left-1 margin-right-1 lg:inset-x-20 !bottom-1/2 !top-auto justify-between !translate-y-0 !translate-x-auto !first:ml-40",
                controllerButtonClassName: "!text-black hover:!text-white",
                controllerButtonTheme: "light",
                controllerButtonVariant: "primary",
                children: e.map(({
                    media: n,
                    caption: l,
                    _key: i
                }, s) => (0, t.jsxs)("article", {
                    className: "w-screen lg:span-w-12 h-fit",
                    children: [(0, t.jsx)(V, {
                        ...n,
                        className: "w-screen lg:w-full lg-max:aspect-[375/252]",
                        videoProps: {
                            className: "[&_video]:h-full [&_video]:object-cover"
                        },
                        width: 690,
                        height: 465,
                        mobileWidth: 375,
                        ratioMobile: 375 / 252,
                        desktopWidth: 690
                    }), (0, t.jsxs)("div", {
                        className: "flex items-center justify-between mt-10 lg-max:margin-mx-1",
                        children: [(0, t.jsxs)("p", {
                            className: (0, r.default)(
                                "flex items-center before:block before:w-4 before:h-4 before:mr-6 before:bg-black before:rounded-full",
                                "text-grey-dark text-10 uppercase"
                                ),
                            children: [(0, t.jsxs)("span", {
                                className: "text-black mr-12 normal-case",
                                children: [
                                    "Fig ",
                                    s + 1,
                                    "."
                                ]
                            }), l]
                        }), (0, t.jsxs)("span", {
                            className: "text-10 text-black",
                            children: ["[", s + 1, "/", e
                                .length, "]"
                            ]
                        })]
                    })]
                }, i))
            })
        });
        var q = e.i(35628);
        let H = {
                normalStyle: "text-10 my-10 first:mt-0 last:mb-0 text-red",
                listStyle: "text-grey-dark text-10 mt-30",
                listBulletStyle: "list-disc uppercase [&_button]:text-black [&_li]:mb-2 [&>li]:gutter-ml-1 [&_li]:marker:text-black",
                listNumberStyle: (0, r.default)(
                    "list-none [&_li]:marker:text-black uppercase mt-30 [&_strong]:font-normal [&_strong]:text-black",
                    '[counter-reset:item] [&_li]:before:inline-block [&_li]:before:span-w-1-wide [&_li]:before:text-black [&_li]:before:[content:counters(item,".")"."] [&_li]:[counter-increment:item]'
                    ),
                listItemStyle: "mb-30 last:mb-0 lg:span-w-9",
                h2: "text-10 uppercase font-medium mt-40 mb-30 first:mt-0 last:mb-0",
                h3: "font-serif text-10 mt-40 mb-30 first:mt-0 last:mb-0",
                tableStyle: "align-left uppercase text-grey text-left",
                tableRowStyle: "text-9 text-grey-dark text-20 leading-tight",
                "tableRowStyle-0": "!text-12 !text-black uppercase font-medium tracking-wide",
                tableCellStyle: "border border-grey-dark p-15 uppercase",
                imageStyle: "my-60"
            },
            B = (0, p.forwardRef)(({
                as: e = "div",
                blocks: n,
                noDom: l,
                styles: i,
                imageDesktopWidth: s = 440,
                imageMobileWidth: a = 390,
                noDefaultStyles: o,
                className: c,
                withHeadingAnchorLink: u = !1
            }, d) => {
                if (!n) return null;
                let f = (({
                    noDom: e = !1,
                    styles: n = {},
                    withHeadingAnchorLink: l,
                    imageDesktopWidth: i,
                    imageMobileWidth: s
                }) => ({
                    block: (({
                        noDom: e = !1,
                        styles: r = {},
                        withHeadingAnchorLink: n
                    }) => l => {
                        let {
                            style: i = "normal"
                        } = l.node;
                        if (e) return l.children;
                        if (/^h\d/.test(i)) {
                            let e = (0, W.slugify)(l.node.children[0].text);
                            return (0, t.jsx)(i, {
                                id: e,
                                className: r[i],
                                children: n ? (0, t.jsx)("a", {
                                    href: `#${e}`,
                                    children: l.children
                                }) : l.children
                            })
                        }
                        return "blockquote" === i ? (0, t.jsx)("blockquote", {
                            className: r.blockquote,
                            children: l.children
                        }) : "normal" === i ? (0, t.jsx)("p", {
                            className: r.normal || r.normalStyle,
                            children: l.children
                        }) : (0, t.jsx)("p", {
                            className: r[i],
                            children: l.children
                        })
                    })({
                        noDom: e,
                        styles: n,
                        withHeadingAnchorLink: l
                    }),
                    list: (({
                        noDom: e = !1,
                        styles: n = {}
                    }) => ({
                        bullet: ({
                            children: l
                        }) => e ? l : (0, t.jsx)("ul", {
                            className: (0, r.default)(n.listStyle, n
                                .listBulletStyle),
                            children: l
                        }),
                        number: ({
                            children: l
                        }) => e ? l : (0, t.jsx)("ol", {
                            className: (0, r.default)(n.listStyle, n
                                .listNumberStyle),
                            children: l
                        })
                    }))({
                        noDom: e,
                        styles: n
                    }),
                    listItem: (({
                        noDom: e = !1,
                        styles: n = {}
                    }) => ({
                        bullet: ({
                            children: l
                        }) => e ? l : (0, t.jsx)("li", {
                            className: (0, r.default)(n.listItemStyle),
                            children: l
                        }),
                        number: ({
                            children: l
                        }) => e ? l : (0, t.jsx)("li", {
                            className: (0, r.default)(n.listItemStyle),
                            children: l
                        })
                    }))({
                        noDom: e,
                        styles: n
                    }),
                    types: {
                        imageLocaleAlt: (({
                            noDom: e = !1,
                            styles: r = {},
                            imageDesktopWidth: n,
                            imageMobileWidth: l
                        }) => ({
                            value: i
                        }) => e ? i.asset._ref : (0, t.jsx)(P.SanityImage, {
                            className: r.imageStyle,
                            image: i,
                            alt: i.alt,
                            desktopWidth: n,
                            mobileWidth: l
                        }))({
                            noDom: e,
                            styles: n,
                            imageDesktopWidth: i,
                            imageMobileWidth: s
                        }),
                        table: (({
                            styles: e = {}
                        }) => n => (0, t.jsx)("table", {
                            className: (0, r.default)(e.tableStyle),
                            children: (0, t.jsx)("tbody", {
                                children: n.value.rows.map((n, l) => (0, t
                                    .jsx)("tr", {
                                    className: (0, r.default)(e
                                        .tableRowStyle, e[
                                            `tableRowStyle-${l}`
                                            ]),
                                    children: n.cells.map((n,
                                        i) => (0, t.jsx)(
                                            "td", {
                                                className: (
                                                    0, r
                                                    .default
                                                    )(e
                                                    .tableCellStyle,
                                                    e[
                                                        `tableColumnStyle-${i}`],
                                                    e[
                                                        `tableCellStyle-${l}-${i}`]
                                                    ),
                                                children: n
                                            }, `${l}-${i}`))
                                }, n._key))
                            })
                        }))({
                            noDom: e,
                            styles: n
                        }),
                        blockquote: (({
                            styles: e
                        }) => e => {
                            let {
                                value: r
                            } = e;
                            return (0, t.jsx)(D, {
                                ...r
                            })
                        })({
                            styles: n
                        }),
                        gallery: (({
                            styles: e
                        }) => e => {
                            let {
                                value: r
                            } = e;
                            return (0, t.jsx)(z, {
                                slides: r.slides
                            })
                        })({
                            styles: n
                        }),
                        videoBlock: (({
                            noDom: e = !1,
                            styles: r = {},
                            imageDesktopWidth: n,
                            imageMobileWidth: l
                        }) => ({
                            value: i
                        }) => e ? i.asset._ref : (0, t.jsx)(q.VideoPlayer, {
                            className: r.imageStyle,
                            title: i.title,
                            urls: i.video.srcs,
                            poster: i.video.poster,
                            desktopWidth: n,
                            mobileWidth: l
                        }))({
                            noDom: e,
                            styles: n,
                            imageDesktopWidth: i,
                            imageMobileWidth: s
                        })
                    },
                    marks: {
                        em: ({
                            children: r
                        }) => e ? r : (0, t.jsx)("em", {
                            className: n.emClassName,
                            children: r
                        }),
                        strong: ({
                            children: r
                        }) => e ? r : (0, t.jsx)("strong", {
                            className: n.strongClassName,
                            children: r
                        }),
                        link: ({
                            children: r,
                            value: n
                        }) => e ? r : (0, t.jsx)(L.Button, {
                            linkInput: n.href,
                            variant: "classicUnderlined",
                            children: r
                        })
                    }
                }))({
                    noDom: l,
                    styles: o ? i : {
                        ...H,
                        ...i
                    },
                    withHeadingAnchorLink: u,
                    imageDesktopWidth: s,
                    imageMobileWidth: a
                });
                return (0, t.jsx)(e, {
                    ref: d,
                    className: c,
                    children: (0, t.jsx)(O, {
                        value: n,
                        components: f
                    })
                })
            });
        e.s(["SanityBlockContent", 0, B], 11081)
    },
    84566, e => {
        "use strict";
        var t = e.i(71448),
            r = e.i(59782),
            n = e.i(92359),
            l = e.i(34004),
            i = e.i(11081),
            s = e.i(70733);
        e.s(["NewsletterForm", 0, ({
            className: e,
            listID: a,
            terms: o,
            emailPlaceholder: c
        }) => {
            let u = async ({
                formData: e
            }) => {
                let t = Object.fromEntries(e.entries());
                return await fetch("/api/newsletter/subscribe", {
                    method: "POST",
                    body: JSON.stringify(t),
                    headers: new Headers({
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    })
                })
            };
            return (0, t.jsxs)(n.Form, {
                onSubmit: u,
                className: (0, s.default)("flex flex-col gap-10", e),
                buttonTheme: "dark",
                buttonClassName: "text-11 uppercase h-32 mt-30 w-60",
                children: [(0, t.jsx)(l.Input, {
                    theme: "light",
                    type: "email",
                    placeholder: c,
                    name: "email_address",
                    floatLabel: !1,
                    className: "h-36 mr-auto w-full lg:span-w-6 text-11",
                    required: !0
                }), (0, t.jsx)("div", {
                    className: "mt-20",
                    children: (0, t.jsx)(r.Checkbox, {
                        required: !0,
                        children: (0, t.jsx)(i.SanityBlockContent, {
                            blocks: o,
                            styles: {
                                normal: "w-full lg:span-w-8 text-10 uppercase text-grey-dark leading-[1.4] my-10 first:mt-0 last:mb-0 [&>li]:mb-30 [&_button]:text-black [&>a]:underline",
                                large: "span-w-12 lg:span-w-8 text-12 uppercase text-dark my-20 first:mt-0 last:mb-0",
                                h2: "w-full lg:span-w-10 flex items-center text-11 uppercase mt-30 first:mt-0 mb-30 before:block before:w-4 before:h-4 before:mr-6 before:bg-black border-t border-black/10 pt-30",
                                h3: "w-full lg:span-w-8 text-11 uppercase text-black lg:tracking-widest font-light first:mt-0",
                                tableStyle: "span-w-12 lg:span-w-10 lg:-span-ml-1-wide mt-20"
                            },
                            className: "text-11 [&>p]:tracking-widest uppercase [&>p>a]:!text-black [&>p]:leading-[1.2]"
                        })
                    })
                }), (0, t.jsx)("input", {
                    type: "hidden",
                    value: a,
                    name: "listID"
                })]
            })
        }])
    },
    85354, e => {
        "use strict";
        var t, r, n, l, i, s = e.i(71448),
            a = e.i(53014),
            o = e.i(976),
            c = e.i(47982);
        e.i(8508);
        var u = e.i(36028),
            d = e.i(46053);

        function f() {
            return (f = Object.assign.bind()).apply(null, arguments)
        }
        let h = e => a.createElement("svg", f({
            xmlns: "http://www.w3.org/2000/svg",
            width: 164,
            height: 30,
            fill: "none",
            viewBox: "0 0 164 30"
        }, e), t || (t = a.createElement("g", {
            clipPath: "url(#a)"
        }, a.createElement("path", {
            fill: "currentColor",
            d: "M15.272 8.74c-.178.079-.365.16-.42.372.135.003.072.174.127.275.093.069.247.158.273.289.165.072.395.165.297.398.081.432.22.069.267-.148.115-.085.28-.135.154-.378-.01.29-.17.23-.09-.025.136-.082-.009-.128-.093-.128-.098-.161.2 0 .154-.25.17-.115.379-.25.574.06-.073.22.208.139.217.266.063-.03.093-.106.135-.148.02.148.184.051.238.148-.026.052-.106.052-.154.043.06.122.076.385.243.398.412.216.412.478-.017.669-.263-.06-.582-.034-.73.24.153.018.535-.359.535-.055-.267.145.05.246.188.34-.086.22-.646.546-.327.042-.225.135-.442.211-.54.466-.225-.02-.277.195-.408.335-.17.064-.166.3-.29.445-.603.22-.417.517-.446 1-.188.132-.247-.326-.256-.478-.195.01-.32-.216-.523-.195-.056.01-.145-.042-.082.056-.076.06-.204.009-.293.004-.14-.17-.599-.09-.642.127-.038.182-.208.267-.183.534.068.026.195.144.017.118.102.3.374.479.688.42.149-.132.29-.432.477-.195-.71 1.156.302.016.233 1.339.251.41.553-.085.553.11.178.563.165-.03.807-.153-.148.212-.127.487.069.148.165-.122.49.182.757.102.102-.042.302.102.246.182.102.043.251.089.332.169.076.2 1.143.5.705.847.158-.021.35.092.494.122.148-.03.225-.026.238.131.497-.072 1.165.297.54.754-.388.254-.256.86-.66 1.119-.008.174.064.169-.2.187-.118-.055-.552.17-.684.198-.123.365-.833 1.093-1.199.712.264.448-.26.339-.489.453.23-.055.238.14.081.263-.089-.092.09-.203-.127-.169-.086.128-.23-.03-.323.086-.162.186-.396.585-.677.592-.306.093.195-.813-.165-.796.54-.217.625-1.304.765-1.797q-.65-.256-.765-.948c.009.06.012.24-.06.267-.068-.034-.046-.34.06-.267-.787-.55.003-.55-.375-.92.165-.012.234-.232.323-.377a.2.2 0 0 0 .128-.194c.068-.082.098.009.081.08.063.025.085-.415.115-.424-.102-.2-.22-.29-.412-.08-.17-.191-.476-.23-.536-.491-.106-.335-.514-.441-.675-.746-.204.046-.622-.229-.748-.276-.017.059-.069.33-.136.16.149-.275-.076-.279-.237-.453-.149-.28-.043-.716-.225-1.013-.085-.157-.17-.894-.315-.847.013.369.115.758.098 1.106-.2-.076-.056-.419-.17-.537-.166-.056.03-.995-.205-1.043-.051-.23.034-.64.082-.869-.064-.02-.158-.11-.043-.127.204.115.408-.428.506-.602q.001-.218.026-.428a6.29 6.29 0 0 0-2.955 8.413c1.518 3.14 5.294 4.457 8.444 2.945A6.29 6.29 0 0 0 20.62 12.3a6.33 6.33 0 0 0-5.348-3.558l.004-.004z"
        }), a.createElement("path", {
            stroke: "currentColor",
            strokeLinejoin: "bevel",
            strokeOpacity: .15,
            strokeWidth: .5,
            d: "M2.25 22.077 15 .5l12.75 21.577z"
        }), a.createElement("circle", {
            cx: 15,
            cy: 15,
            r: 14.75,
            stroke: "currentColor",
            strokeOpacity: .15,
            strokeWidth: .5
        }), a.createElement("path", {
            fill: "currentColor",
            d: "M2.864 13.538a.216.216 0 1 0 0-.43.216.216 0 0 0 0 .43M5.015 14.397a.215.215 0 1 0 0-.431.215.215 0 0 0 0 .43M27.187 10.53a.215.215 0 1 0 0-.43.215.215 0 0 0 0 .43M26.325 12.679a.215.215 0 1 0 0-.43.215.215 0 0 0 0 .43M5.447 10.53a.216.216 0 1 0 0-.43.216.216 0 0 0 0 .43M8.03 9.241a.215.215 0 1 0 0-.43.215.215 0 0 0 0 .43M21.806 4.302a.215.215 0 1 0 0-.431.215.215 0 0 0 0 .43M20.514 5.805a.215.215 0 1 0 0-.43.215.215 0 0 0 0 .43M28.694 14.827a.215.215 0 1 0 0-.43.215.215 0 0 0 0 .43M19.223 5.59a.215.215 0 1 0 0-.43.215.215 0 0 0 0 .43M3.724 7.953a.215.215 0 1 0 0-.431.215.215 0 0 0 0 .43M9.321 2.798a.215.215 0 1 0 0-.431.215.215 0 0 0 0 .43M8.89 23.418a.215.215 0 1 0 0-.43.215.215 0 0 0 0 .43M6.738 24.707a.215.215 0 1 0 0-.431.215.215 0 0 0 0 .43M11.904 26.211a.215.215 0 1 0 0-.43.215.215 0 0 0 0 .43M13.196 28.789a.215.215 0 1 0 0-.431.215.215 0 0 0 0 .43M19.653 25.996a.216.216 0 1 0 0-.431.216.216 0 0 0 0 .43M22.236 24.707a.215.215 0 1 0 0-.431.215.215 0 0 0 0 .43M17.07 24.278a.215.215 0 1 0 0-.43.215.215 0 0 0 0 .43M23.097 24.278a.215.215 0 1 0 0-.43.215.215 0 0 0 0 .43M7.814 5.375s0 1.289-1.292 1.289c0 0 1.292 0 1.292 1.289 0 0 0-1.29 1.292-1.29 0 0-1.292 0-1.292-1.288M25.378 7.953s0 1.288-1.291 1.288c0 0 1.291 0 1.291 1.29 0 0 0-1.29 1.292-1.29 0 0-1.292 0-1.292-1.288M2.648 14.397s0 1.289-1.292 1.289c0 0 1.292 0 1.292 1.289 0 0 0-1.29 1.291-1.29 0 0-1.291 0-1.291-1.288"
        }))), r || (r = a.createElement("path", {
            fill: "currentColor",
            d: "M41.163 10.609v8.852h-1.328V10.61zM45.613 19.461v-9.454l6.42 6.754v-6.152h1.329V20l-6.42-6.737v6.198zM60.24 11.865v7.596h-1.328v-7.596h-2.024v-1.256h5.371v1.255zM70.638 11.865h-3.53v2.127h3.427v1.255H67.11v2.959h3.529v1.255H65.78V10.61h4.858zM77.7 15.689l2.725 3.772H78.8l-2.514-3.623h-.24v3.623h-1.328V10.61h1.556q1.745 0 2.52.66.855.732.855 1.937 0 .94-.535 1.617-.537.676-1.414.866m-1.654-1.015h.422q1.887 0 1.887-1.45 0-1.36-1.836-1.36h-.473zM89.066 11.928l-1.078.642q-.302-.528-.576-.688-.285-.184-.735-.184-.553 0-.918.316a.98.98 0 0 0-.365.78q0 .647.958 1.043l.878.36q1.072.437 1.568 1.067.495.626.496 1.537 0 1.221-.81 2.018-.815.803-2.024.803-1.146 0-1.893-.683-.735-.682-.917-1.92l1.345-.298q.09.78.32 1.077.41.574 1.197.574.621 0 1.032-.419.41-.418.41-1.06 0-.259-.074-.47a1.1 1.1 0 0 0-.222-.396 1.6 1.6 0 0 0-.388-.338 3.6 3.6 0 0 0-.57-.304l-.85-.356q-1.807-.768-1.807-2.247 0-.997.758-1.669.759-.675 1.887-.676 1.523 0 2.378 1.49M95.831 11.865v7.596h-1.328v-7.596h-2.024v-1.256h5.37v1.255zM106.228 11.865h-3.529v2.127h3.426v1.255h-3.426v2.959h3.529v1.255h-4.857V10.61h4.857zM111.636 10.609v7.597h2.589v1.255h-3.917V10.61zM119.149 10.609v7.597h2.588v1.255h-3.917V10.61zM130.994 17.311h-3.769l-.981 2.15h-1.431l4.356-9.408 4.202 9.408h-1.454zm-.542-1.256-1.306-3.01-1.368 3.01zM139.794 15.689l2.726 3.772h-1.625l-2.515-3.623h-.239v3.623h-1.328V10.61h1.556q1.744 0 2.52.66.855.732.855 1.937 0 .94-.536 1.617-.535.676-1.414.866m-1.653-1.015h.422q1.887 0 1.887-1.45 0-1.36-1.836-1.36h-.473zM149.528 10.334v4.558h1.553v.753h-2.35v-5.311zM156.635 14.355h-2.261l-.589 1.29h-.858L155.54 10l2.521 5.645h-.872zm-.325-.753-.783-1.806-.821 1.806zM160.126 15.645v-5.311h.794q.53 0 .845.082.318.082.537.279.222.203.352.506.134.306.134.619 0 .57-.435.966.421.145.664.506.246.358.246.832 0 .623-.438 1.053-.263.266-.592.368-.359.1-.899.1zm.797-3.03h.25q.444 0 .65-.197.209-.2.209-.584 0-.376-.213-.568-.211-.196-.615-.196h-.281zm0 2.277h.493q.54 0 .793-.214a.74.74 0 0 0 .267-.584.75.75 0 0 0-.256-.578q-.25-.23-.893-.23h-.404z"
        })), n || (n = a.createElement("defs", null, a.createElement("clipPath", {
            id: "a"
        }, a.createElement("path", {
            fill: "currentColor",
            d: "M0 0h29.834v30H0z"
        })))));

        function m() {
            return (m = Object.assign.bind()).apply(null, arguments)
        }
        let p = e => a.createElement("svg", m({
            xmlns: "http://www.w3.org/2000/svg",
            width: 30,
            height: 30,
            fill: "none",
            viewBox: "0 0 30 30"
        }, e), l || (l = a.createElement("g", {
            clipPath: "url(#a)"
        }, a.createElement("path", {
            fill: "#0D0D0D",
            d: "M15.272 8.74c-.178.079-.365.16-.42.372.135.003.072.174.127.275.093.069.247.158.273.289.165.072.395.165.297.398.081.432.22.069.267-.148.115-.085.28-.135.154-.378-.01.29-.17.23-.09-.025.136-.082-.009-.128-.093-.128-.098-.161.2 0 .154-.25.17-.115.379-.25.574.06-.073.22.208.139.217.266.063-.03.093-.106.135-.148.02.148.184.051.238.148-.026.052-.106.052-.154.043.06.122.076.385.243.398.412.216.412.478-.017.669-.263-.06-.582-.034-.73.24.153.018.535-.359.535-.055-.267.145.05.246.188.34-.086.22-.646.546-.327.042-.225.135-.442.211-.54.466-.225-.02-.277.195-.408.335-.17.064-.166.3-.29.445-.603.22-.417.517-.446 1-.188.132-.247-.326-.256-.478-.195.01-.32-.216-.523-.195-.056.01-.145-.042-.082.056-.076.06-.204.009-.293.004-.14-.17-.599-.09-.642.127-.038.182-.208.267-.183.534.068.026.195.144.017.118.102.3.374.479.688.42.149-.132.29-.432.477-.195-.71 1.156.302.016.233 1.339.251.41.553-.085.553.11.178.563.165-.03.807-.153-.148.212-.127.487.069.148.165-.122.49.182.757.102.102-.042.302.102.246.182.102.043.251.089.332.169.076.2 1.143.5.705.847.158-.021.35.092.494.122.148-.03.225-.026.238.131.497-.072 1.165.297.54.754-.388.254-.256.86-.66 1.119-.008.174.064.169-.2.187-.118-.055-.552.17-.684.198-.123.365-.833 1.093-1.199.712.264.448-.26.339-.489.453.23-.055.238.14.081.263-.089-.092.09-.203-.127-.169-.086.128-.23-.03-.323.086-.162.186-.396.585-.677.592-.306.093.195-.813-.165-.796.54-.217.625-1.304.765-1.797q-.65-.256-.765-.948c.009.06.012.24-.06.267-.068-.034-.046-.34.06-.267-.787-.55.003-.55-.375-.92.165-.012.234-.232.323-.377a.2.2 0 0 0 .128-.194c.068-.082.098.009.081.08.063.025.085-.415.115-.424-.102-.2-.22-.29-.412-.08-.17-.191-.476-.23-.536-.491-.106-.335-.514-.441-.675-.746-.204.046-.622-.229-.748-.276-.017.059-.069.33-.136.16.149-.275-.076-.279-.237-.453-.149-.28-.043-.716-.225-1.013-.085-.157-.17-.894-.315-.847.013.369.115.758.098 1.106-.2-.076-.056-.419-.17-.537-.166-.056.03-.995-.205-1.043-.051-.23.034-.64.082-.869-.064-.02-.158-.11-.043-.127.204.115.408-.428.506-.602q.001-.218.026-.428a6.29 6.29 0 0 0-2.955 8.413c1.518 3.14 5.294 4.457 8.444 2.945A6.29 6.29 0 0 0 20.62 12.3a6.33 6.33 0 0 0-5.348-3.558l.004-.004-.003.001Z"
        }), a.createElement("path", {
            stroke: "#0D0D0D",
            strokeLinejoin: "bevel",
            strokeOpacity: .1,
            strokeWidth: .5,
            d: "M2.25 22.077 15 .5l12.75 21.577z"
        }), a.createElement("circle", {
            cx: 15,
            cy: 15,
            r: 14.75,
            stroke: "#0D0D0D",
            strokeOpacity: .1,
            strokeWidth: .5
        }), a.createElement("path", {
            fill: "#0D0D0D",
            d: "M2.863 13.538a.215.215 0 1 0 0-.43.215.215 0 0 0 0 .43m2.152.859a.216.216 0 1 0 0-.431.216.216 0 0 0 0 .43Zm22.171-3.867a.216.216 0 1 0 0-.43.216.216 0 0 0 0 .43m-.861 2.149a.215.215 0 1 0 0-.43.215.215 0 0 0 0 .43M5.446 10.53a.216.216 0 1 0 0-.43.216.216 0 0 0 0 .43M8.03 9.241a.215.215 0 1 0 0-.43.215.215 0 0 0 0 .43m13.775-4.939a.215.215 0 1 0 0-.431.215.215 0 0 0 0 .43Zm-1.292 1.503a.215.215 0 1 0 0-.43.215.215 0 0 0 0 .43m8.181 9.022a.215.215 0 1 0 0-.43.215.215 0 0 0 0 .43M19.221 5.59a.215.215 0 1 0 .001-.43.215.215 0 0 0 0 .43ZM3.724 7.953a.215.215 0 1 0 0-.431.215.215 0 0 0 0 .43ZM9.32 2.798a.215.215 0 1 0 .001-.431.215.215 0 0 0 0 .43Zm-.43 20.62a.215.215 0 1 0 0-.43.215.215 0 0 0 0 .43m-2.152 1.289a.215.215 0 1 0 0-.431.215.215 0 0 0 0 .43Zm5.166 1.504a.215.215 0 1 0 0-.43.215.215 0 0 0 0 .43m1.291 2.578a.216.216 0 1 0 0-.431.216.216 0 0 0 0 .43Zm6.458-2.793a.216.216 0 1 0 0-.431.216.216 0 0 0 0 .43Zm2.583-1.289a.215.215 0 1 0 0-.431.215.215 0 0 0 0 .43Zm-5.166-.429a.215.215 0 1 0 0-.43.215.215 0 0 0 0 .43m6.026 0a.215.215 0 1 0 0-.43.215.215 0 0 0 0 .43M7.814 5.375s0 1.289-1.292 1.289c0 0 1.292 0 1.292 1.289 0 0 0-1.29 1.291-1.29 0 0-1.292 0-1.292-1.288Zm17.564 2.578s0 1.288-1.291 1.288c0 0 1.291 0 1.291 1.29 0 0 0-1.29 1.292-1.29 0 0-1.292 0-1.292-1.288M2.647 14.397s0 1.289-1.291 1.289c0 0 1.291 0 1.291 1.289 0 0 0-1.29 1.292-1.29 0 0-1.292 0-1.292-1.288"
        }))), i || (i = a.createElement("defs", null, a.createElement("clipPath", {
            id: "a"
        }, a.createElement("path", {
            fill: "#fff",
            d: "M0 0h29.834v30H0z"
        })))));
        var b = e.i(53158),
            v = e.i(70733),
            g = e.i(57739),
            x = e.i(36678),
            y = e.i(33568);
        e.s(["HeaderComponent", 0, ({
            className: e,
            links: t,
            children: r
        }) => {
            let n = (0, a.useRef)(),
                l = (e => {
                    let [t, r] = (0, a.useState)(!1), n = (0, a.useRef)(), l = (0, u
                            .useHeaderStore)(e => e.slices, d.shallow), i = (0, a.useRef)([]),
                        s = (0, a.useRef)(0), f = (0, a.useRef)();
                    (0, a.useEffect)(() => {
                        i.current = [], n.current?.disconnect(), l.forEach(e => {
                            n.current?.observe(e)
                        })
                    }, [l]), (0, a.useEffect)(() => () => {
                        n.current && n.current.disconnect()
                    }, []), (0, c.default)(t => {
                        if (n.current && n.current.disconnect(), !e.current) return;
                        t.innerWidth !== s.current && (f.current = e.current
                            .getBoundingClientRect()), s.current = t.innerWidth;
                        let r = f.current.height,
                            i = f.current.top;
                        n.current = new IntersectionObserver(m, {
                            rootMargin: `${Math.round(-i-r/2)}px -50% ${Math.round(i+r/2-t.innerHeight+1)}px -50%`
                        }), l.forEach(e => {
                            n.current?.observe(e)
                        })
                    }, !0, [l], 30);
                    let h = (0, o.default)(() => {
                            let e = !0;
                            i.current.forEach(t => {
                                e = !1
                            }), r(!e)
                        }, 30, []),
                        m = (e, t) => {
                            e.forEach(e => {
                                let t = i.current.indexOf(e.target);
                                e.isIntersecting && -1 === t ? i.current.push(e
                                    .target) : e.isIntersecting || -1 === t || i.current
                                    .splice(t, 1)
                            }), h()
                        };
                    return t
                })(n),
                i = (0, y.useScrollStore)(e => e.setIsLocked),
                [f, m] = (0, a.useState)(!1),
                w = ((e, t) => {
                    let [r, n] = (0, a.useState)(!1);
                    return (0, a.useEffect)(() => {
                        let l;
                        return e && !r ? n(!0) : !e && r && (l = setTimeout(() => n(!1),
                            t)), () => clearTimeout(l)
                    }, [e, t, r]), r
                })(f, 500),
                k = e => {
                    m(e), i(e)
                };
            return (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsxs)("header", {
                    ref: n,
                    className: (0, v.default)(
                        "flex fixed lg:top-20 lg:left-1/2 lg:-translate-x-1/2 z-3 backdrop-blur-md h-50 w-full lg:max-w-2xl px-20 items-center justify-between",
                        "transition-[background,color] duration-500 ease-expo-out",
                        l ? "bg-black/10 text-black" :
                        "bg-white/10 text-white", e),
                    children: [(0, s.jsx)(x.default, {
                        href: "/",
                        children: (0, s.jsx)(h, {
                            className: "block w-160 min-w-104 h-auto opacity-100",
                            alt: "Interstellar"
                        })
                    }), (0, s.jsx)("ul", {
                        className: "hidden md:flex gap-15 ml-auto text-11 uppercase",
                        children: t.map(e => (0, s.jsx)("li", {
                            children: (0, s.jsx)(g
                                .Button, {
                                    theme: "dark",
                                    className: (0, v
                                        .default
                                        )(
                                        "inline-flex items-center uppercase font-mono leading-none text-11",
                                        "before:block before:w-4 before:h-4 before:mr-6 before:rounded-sm before:bg-current before:opacity-0 before:transition-opacity before:duration-300",
                                        "hover:before:opacity-100"
                                        ),
                                    linkInput: e
                                })
                        }, e._key))
                    }), (0, s.jsx)(g.Button, {
                        theme: l ? "dark" : "light",
                        variant: "primary",
                        className: "md:hidden ml-auto inline-flex items-center uppercase text-11",
                        onClick: () => k(!0),
                        children: "Menu"
                    })]
                }), f && (0, s.jsxs)("div", {
                    className: (0, v.default)(
                        "lg:hidden fixed bg-white top-0 left-0 bottom-0 right-0 h-screen z-50",
                        "flex", "transition-opacity duration-500", w ?
                        "opacity-100" : "opacity-0"),
                    children: [(0, s.jsxs)("nav", {
                        className: "w-full px-20",
                        children: [(0, s.jsxs)("div", {
                            className: "flex justify-between items-center w-full h-50",
                            children: [(0, s.jsx)(p, {
                                className: "block w-30 min-w-30 h-auto opacity-100",
                                alt: "Interstellar"
                            }), (0, s.jsx)(g
                                .Button, {
                                    theme: "dark",
                                    variant: "primary",
                                    onClick: () =>
                                        k(!1),
                                    className: "lg:hidden ml-auto inline-flex items-center uppercase text-11",
                                    children: "Close"
                                })]
                        }), (0, s.jsx)("ul", {
                            className: "text-11 uppercase text-black mt-44",
                            children: t.map(e => (0, s
                                .jsx)("li", {
                                className: (
                                    0, v
                                    .default
                                    )(
                                    "flex items-center mb-20",
                                    "hover:before:opacity-100"
                                    ),
                                children: (
                                    0, s
                                    .jsxs
                                    )(g
                                    .Button, {
                                        theme: "dark",
                                        className: "flex w-full justify-between items-center uppercase text-11 py-10 border-b border-black/10",
                                        linkInput: e,
                                        onClick: () =>
                                            k(!
                                                1),
                                        children: [
                                            (0, s
                                                .jsx
                                                )
                                            ("span", {
                                                children: e
                                                    .label
                                            }),
                                            (0, s
                                                .jsx
                                                )
                                            (b.default, {
                                                className: "block w-10 min-w-10 h-auto",
                                                alt: "Link"
                                            })
                                        ]
                                    })
                            }, e._key))
                        })]
                    }), (0, s.jsx)("div", {
                        className: "absolute bottom-20 left-20",
                        children: r
                    })]
                })]
            })
        }], 85354)
    },
    94890, e => {
        "use strict";
        var t = e.i(71448),
            r = e.i(53014);
        e.i(8508);
        var n = e.i(33568),
            l = e.i(73249),
            i = e.i(46053);
        e.s(["Lenis", 0, () => {
            let e = (0, n.useScrollStore)(e => e.lenis, i.shallow);
            return (0, l.default)(t => !e.__isStopped && e?.raf(t), !0), (0, r.useEffect)(() => {
                e.scrollTo(0, {
                    immediate: !0
                })
            }, []), (0, t.jsx)("script", {
                dangerouslySetInnerHTML: {
                    __html: "document.documentElement.style.setProperty('--sbw', window.innerWidth - document.body.offsetWidth + 'px');"
                }
            })
        }])
    },
    16808, e => {
        e.v(t => Promise.all(["static/chunks/b7a6fcd87bedff0c.js"].map(t => e.l(t))).then(() => t(87179)))
    }
]);