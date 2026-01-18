(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript :
    void 0, 67983, t => {
        "use strict";
        t.s(["devices", 0, {
            mobile: {
                columns: 6,
                gutter: .3,
                margin: 20,
                mockupWidth: 375,
                fontScalingMaxWidth: 475
            },
            tablet: {
                columns: 12,
                gutter: .35,
                margin: 20,
                mockupWidth: 768,
                screen: "md"
            },
            desktop: {
                columns: 24,
                gutter: .35,
                margin: 20,
                mockupWidth: 1440,
                fontScalingMaxWidth: 1680,
                screen: "lg"
            }
        }, "screens", 0, {
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            "2xl": 1536,
            xxl: 1680,
            "sm-max": {
                max: 639
            },
            "md-max": {
                max: 767
            },
            "lg-max": {
                max: 1023
            },
            tablet: {
                max: 1023,
                min: 768
            },
            "hover-hover": {
                raw: null
            },
            "hover-none": {
                raw: null
            }
        }])
    },
    73542, (t, e, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), Object.defineProperty(i, "useMergedRef", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let r = t.r(53014);

        function n(t, e) {
            let i = (0, r.useRef)(null),
                n = (0, r.useRef)(null);
            return (0, r.useCallback)(r => {
                if (null === r) {
                    let t = i.current;
                    t && (i.current = null, t());
                    let e = n.current;
                    e && (n.current = null, e())
                } else t && (i.current = s(t, r)), e && (n.current = s(e, r))
            }, [t, e])
        }

        function s(t, e) {
            if ("function" != typeof t) return t.current = e, () => {
                t.current = null
            };
            {
                let i = t(e);
                return "function" == typeof i ? i : () => t(null)
            }
        }("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i
            .default.__esModule && (Object.defineProperty(i.default, "__esModule", {
                value: !0
            }), Object.assign(i.default, i), e.exports = i.default)
    },
    7282, t => {
        "use strict";
        let e = {
            dataset: "production",
            projectId: "c6vljvut",
            apiVersion: "2022-11-15",
            token: t.i(41227).default.env.SANITY_API_TOKEN
        };
        t.s(["base", 0, e, "nextRoutes", 0, {
            home: "/",
            page: "/:slug",
            contact: "/contact",
            legal: "/legal/:slug",
            article: "/news/:slug",
            press: "/press",
            earth: "/earth",
            space: "/space",
            mission: "/mission"
        }])
    },
    75838, (t, e, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), Object.defineProperty(i, "warnOnce", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let r = t => {}
    },
    4550, 88263, t => {
        "use strict";
        let e = [{
                id: "en",
                title: "English",
                isDefault: !0
            }],
            i = e.find(t => t.isDefault);
        e.filter(t => !t.isDefault), e.map(t => t.id);
        let r = i.id;
        t.s(["defaultLanguage", 0, i, "defaultLocale", 0, r], 88263);
        let n = (0, t.i(53014).createContext)({
            locale: i,
            rewrites: new Map
        });
        t.s(["default", 0, n], 4550)
    },
    48046, t => {
        "use strict";
        var e = t.i(71448),
            i = t.i(4550);
        t.s(["default", 0, ({
            children: t,
            value: r
        }) => (0, e.jsx)(i.default.Provider, {
            value: r,
            children: t
        })])
    },
    71149, t => {
        "use strict";
        let e = (0, t.i(53014).createContext)({
            locales: new Map
        });
        t.s(["default", 0, e])
    },
    1570, t => {
        "use strict";
        var e = t.i(71448),
            i = t.i(71149);
        t.s(["default", 0, function({
            children: t,
            value: r
        }) {
            return (0, e.jsx)(i.default.Provider, {
                value: new Map(r),
                children: t
            })
        }])
    },
    64859, t => {
        "use strict";
        let e = (0, t.i(53014).createContext)({
            isDark: !1,
            setIsDark: null
        });
        t.s(["default", 0, e])
    },
    26381, (t, e, i) => {
        "use strict";
        var r = t.r(53014),
            n = "function" == typeof Object.is ? Object.is : function(t, e) {
                return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
            },
            s = r.useState,
            o = r.useEffect,
            l = r.useLayoutEffect,
            a = r.useDebugValue;

        function u(t) {
            var e = t.getSnapshot;
            t = t.value;
            try {
                var i = e();
                return !n(t, i)
            } catch (t) {
                return !0
            }
        }
        var c = "u" < typeof window || void 0 === window.document || void 0 === window.document.createElement ?
            function(t, e) {
                return e()
            } : function(t, e) {
                var i = e(),
                    r = s({
                        inst: {
                            value: i,
                            getSnapshot: e
                        }
                    }),
                    n = r[0].inst,
                    c = r[1];
                return l(function() {
                    n.value = i, n.getSnapshot = e, u(n) && c({
                        inst: n
                    })
                }, [t, i, e]), o(function() {
                    return u(n) && c({
                        inst: n
                    }), t(function() {
                        u(n) && c({
                            inst: n
                        })
                    })
                }, [t]), a(i), i
            };
        i.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c
    },
    18315, (t, e, i) => {
        "use strict";
        e.exports = t.r(26381)
    },
    95218, (t, e, i) => {
        "use strict";
        var r = t.r(53014),
            n = t.r(18315),
            s = "function" == typeof Object.is ? Object.is : function(t, e) {
                return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
            },
            o = n.useSyncExternalStore,
            l = r.useRef,
            a = r.useEffect,
            u = r.useMemo,
            c = r.useDebugValue;
        i.useSyncExternalStoreWithSelector = function(t, e, i, r, n) {
            var h = l(null);
            if (null === h.current) {
                var d = {
                    hasValue: !1,
                    value: null
                };
                h.current = d
            } else d = h.current;
            var p = o(t, (h = u(function() {
                function t(t) {
                    if (!a) {
                        if (a = !0, o = t, t = r(t), void 0 !== n && d.hasValue) {
                            var e = d.value;
                            if (n(e, t)) return l = e
                        }
                        return l = t
                    }
                    if (e = l, s(o, t)) return e;
                    var i = r(t);
                    return void 0 !== n && n(e, i) ? (o = t, e) : (o = t, l = i)
                }
                var o, l, a = !1,
                    u = void 0 === i ? null : i;
                return [function() {
                    return t(e())
                }, null === u ? void 0 : function() {
                    return t(u())
                }]
            }, [e, i, r, n]))[0], h[1]);
            return a(function() {
                d.hasValue = !0, d.value = p
            }, [p]), c(p), p
        }
    },
    40495, (t, e, i) => {
        "use strict";
        e.exports = t.r(95218)
    },
    11193, t => {
        "use strict";
        let e = {
                get url() {
                    return `file://${t.P("node_modules/.bun/zustand@4.5.7+f10bbcc0235eb7fa/node_modules/zustand/esm/vanilla.mjs")}`
                }
            },
            i = t => {
                let i, r = new Set,
                    n = (t, e) => {
                        let n = "function" == typeof t ? t(i) : t;
                        if (!Object.is(n, i)) {
                            let t = i;
                            i = (null != e ? e : "object" != typeof n || null === n) ? n : Object.assign({}, i,
                                n), r.forEach(e => e(i, t))
                        }
                    },
                    s = () => i,
                    o = {
                        setState: n,
                        getState: s,
                        getInitialState: () => l,
                        subscribe: t => (r.add(t), () => r.delete(t)),
                        destroy: () => {
                            (e.env ? e.env.MODE : void 0) !== "production" && console.warn(
                                "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
                                ), r.clear()
                        }
                    },
                    l = i = t(n, s, o);
                return o
            };
        var r = t.i(53014),
            n = t.i(40495);
        let s = {
                get url() {
                    return `file://${t.P("node_modules/.bun/zustand@4.5.7+f10bbcc0235eb7fa/node_modules/zustand/esm/index.mjs")}`
                }
            },
            {
                useDebugValue: o
            } = r.default,
            {
                useSyncExternalStoreWithSelector: l
            } = n.default,
            a = !1,
            u = t => t;

        function c(t, e = u, i) {
            (s.env ? s.env.MODE : void 0) !== "production" && i && !a && (console.warn(
                "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
                ), a = !0);
            let r = l(t.subscribe, t.getState, t.getServerState || t.getInitialState, e, i);
            return o(r), r
        }
        let h = t => {
                (s.env ? s.env.MODE : void 0) !== "production" && "function" != typeof t && console.warn(
                    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
                    );
                let e = "function" == typeof t ? t ? i(t) : i : t,
                    r = (t, i) => c(e, t, i);
                return Object.assign(r, e), r
            },
            d = t => t ? h(t) : h;
        t.s(["create", () => d, "useStore", () => c], 11193)
    },
    21740, t => {
        "use strict";
        let e = (0, t.i(53014).createContext)({
            hasValidation: !1,
            isLoading: !1,
            isReseting: !1
        });
        t.s(["default", 0, e])
    },
    1607, 18555, t => {
        "use strict";
        t.s([], 1607), t.i(4550), t.i(48046), t.i(71149), t.i(1570);
        var e = t.i(64859);
        t.s(["default", () => s], 18555);
        var i = t.i(71448),
            r = t.i(53014),
            n = t.i(30912);
        let s = ({
            children: t,
            value: s
        }) => {
            let o = (0, r.useRef)();
            return o.current || (o.current = (0, n.createHeaderStore)(s)), (0, i.jsx)(e.default.Provider, {
                value: o.current,
                children: t
            })
        };
        t.i(21740)
    },
    30912, t => {
        "use strict";
        t.s(["createHeaderStore", () => n, "default", () => s], 30912);
        var e = t.i(53014),
            i = t.i(11193);
        t.i(1607);
        var r = t.i(64859),
            r = r;
        let n = t => (0, i.create)(e => ({
                slices: [],
                addSlice: t => {
                    e(e => ({
                        slices: e.slices.concat(t)
                    }))
                },
                removeSlice: t => e(e => {
                    let i = e.slices.indexOf(t);
                    return -1 !== i ? {
                        slices: e.slices.filter((t, e) => e !== i)
                    } : {
                        slices: e.slices
                    }
                }),
                ...t
            })),
            s = (t, n) => {
                let s = (0, e.useContext)(r.default);
                if (!s) throw Error("Missing HeaderContext.Provider in the tree");
                return (0, i.useStore)(s, t, n)
            }
    },
    8508, 9661, t => {
        "use strict";
        t.i(30912);
        var e = t.i(11193);

        function i(t, e, i) {
            return Math.max(t, Math.min(e, i))
        }(0, e.create)(t => ({
            windowSize: {
                width: 0,
                height: 0
            },
            scrollbarWidth: 0,
            scrollbarEnabled: !0,
            setScrollbarEnabled: e => t(() => ({
                scrollbarEnabled: e
            })),
            headerHeight: 0,
            transitionFromHeader: !0,
            setTransitionFromHeader: e => t(() => ({
                transitionFromHeader: e
            }))
        }));
        class r {
            advance(t) {
                var e, r, n, s;
                if (!this.isRunning) return;
                let o = !1;
                if (this.lerp) this.value = (e = this.value, r = this.to, n = 60 * this.lerp, (1 - (s = 1 -
                    Math.exp(-n * t))) * e + s * r), Math.round(this.value) === this.to && (this.value =
                    this.to, o = !0);
                else {
                    this.currentTime += t;
                    let e = i(0, this.currentTime / this.duration, 1),
                        r = (o = e >= 1) ? 1 : this.easing(e);
                    this.value = this.from + (this.to - this.from) * r
                }
                this.onUpdate?.(this.value, o), o && this.stop()
            }
            stop() {
                this.isRunning = !1
            }
            fromTo(t, e, {
                lerp: i = .1,
                duration: r = 1,
                easing: n = t => t,
                onStart: s,
                onUpdate: o
            }) {
                this.from = this.value = t, this.to = e, this.lerp = i, this.duration = r, this.easing = n,
                    this.currentTime = 0, this.isRunning = !0, s?.(), this.onUpdate = o
            }
        }
        class n {
            constructor({
                wrapper: t,
                content: e,
                autoResize: i = !0,
                debounce: r = 250
            } = {}) {
                this.wrapper = t, this.content = e, i && (this.debouncedResize = function(t, e) {
                        let i;
                        return function() {
                            let r = arguments,
                                n = this;
                            clearTimeout(i), i = setTimeout(function() {
                                t.apply(n, r)
                            }, e)
                        }
                    }(this.resize, r), this.wrapper === window ? window.addEventListener("resize", this
                        .debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this
                        .debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this
                    .contentResizeObserver = new ResizeObserver(this.debouncedResize), this
                    .contentResizeObserver.observe(this.content)), this.resize()
            }
            destroy() {
                this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect(), window
                    .removeEventListener("resize", this.debouncedResize, !1)
            }
            resize = () => {
                this.onWrapperResize(), this.onContentResize()
            };
            onWrapperResize = () => {
                this.wrapper === window ? (this.width = window.innerWidth, this.height = window
                    .innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper
                        .clientHeight)
            };
            onContentResize = () => {
                this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth =
                    this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this
                    .scrollWidth = this.wrapper.scrollWidth)
            };
            get limit() {
                return {
                    x: this.scrollWidth - this.width,
                    y: this.scrollHeight - this.height
                }
            }
        }
        class s {
            constructor() {
                this.events = {}
            }
            emit(t, ...e) {
                let i = this.events[t] || [];
                for (let t = 0, r = i.length; t < r; t++) i[t](...e)
            }
            on(t, e) {
                return this.events[t]?.push(e) || (this.events[t] = [e]), () => {
                    this.events[t] = this.events[t]?.filter(t => e !== t)
                }
            }
            off(t, e) {
                this.events[t] = this.events[t]?.filter(t => e !== t)
            }
            destroy() {
                this.events = {}
            }
        }
        let o = 100 / 6;
        class l {
            constructor(t, {
                wheelMultiplier: e = 1,
                touchMultiplier: i = 1
            }) {
                this.element = t, this.wheelMultiplier = e, this.touchMultiplier = i, this.touchStart = {
                        x: null,
                        y: null
                    }, this.emitter = new s, window.addEventListener("resize", this.onWindowResize, !1),
                    this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, {
                        passive: !1
                    }), this.element.addEventListener("touchstart", this.onTouchStart, {
                        passive: !1
                    }), this.element.addEventListener("touchmove", this.onTouchMove, {
                        passive: !1
                    }), this.element.addEventListener("touchend", this.onTouchEnd, {
                        passive: !1
                    })
            }
            on(t, e) {
                return this.emitter.on(t, e)
            }
            destroy() {
                this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this
                    .element.removeEventListener("wheel", this.onWheel, {
                        passive: !1
                    }), this.element.removeEventListener("touchstart", this.onTouchStart, {
                        passive: !1
                    }), this.element.removeEventListener("touchmove", this.onTouchMove, {
                        passive: !1
                    }), this.element.removeEventListener("touchend", this.onTouchEnd, {
                        passive: !1
                    })
            }
            onTouchStart = t => {
                let {
                    clientX: e,
                    clientY: i
                } = t.targetTouches ? t.targetTouches[0] : t;
                this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
                    x: 0,
                    y: 0
                }, this.emitter.emit("scroll", {
                    deltaX: 0,
                    deltaY: 0,
                    event: t
                })
            };
            onTouchMove = t => {
                let {
                    clientX: e,
                    clientY: i
                } = t.targetTouches ? t.targetTouches[0] : t, r = -(e - this.touchStart.x) * this
                    .touchMultiplier, n = -(i - this.touchStart.y) * this.touchMultiplier;
                this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
                    x: r,
                    y: n
                }, this.emitter.emit("scroll", {
                    deltaX: r,
                    deltaY: n,
                    event: t
                })
            };
            onTouchEnd = t => {
                this.emitter.emit("scroll", {
                    deltaX: this.lastDelta.x,
                    deltaY: this.lastDelta.y,
                    event: t
                })
            };
            onWheel = t => {
                let {
                    deltaX: e,
                    deltaY: i,
                    deltaMode: r
                } = t;
                e *= 1 === r ? o : 2 === r ? this.windowWidth : 1, i *= 1 === r ? o : 2 === r ? this
                    .windowHeight : 1, e *= this.wheelMultiplier, i *= this.wheelMultiplier, this.emitter
                    .emit("scroll", {
                        deltaX: e,
                        deltaY: i,
                        event: t
                    })
            };
            onWindowResize = () => {
                this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight
            }
        }
        class a {
            constructor({
                wrapper: t = window,
                content: e = document.documentElement,
                wheelEventsTarget: i = t,
                eventsTarget: o = i,
                smoothWheel: a = !0,
                syncTouch: u = !1,
                syncTouchLerp: c = .075,
                touchInertiaMultiplier: h = 35,
                duration: d,
                easing: p = t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                lerp: f = !d && .1,
                infinite: m = !1,
                orientation: g = "vertical",
                gestureOrientation: v = "vertical",
                touchMultiplier: w = 1,
                wheelMultiplier: b = 1,
                autoResize: y = !0,
                __experimental__naiveDimensions: S = !1
            } = {}) {
                this.__isSmooth = !1, this.__isScrolling = !1, this.__isStopped = !1, this.__isLocked = !1,
                    this.onVirtualScroll = ({
                        deltaX: t,
                        deltaY: e,
                        event: i
                    }) => {
                        if (i.ctrlKey) return;
                        let r = i.type.includes("touch"),
                            n = i.type.includes("wheel");
                        if (this.options.syncTouch && r && "touchstart" === i.type && !this.isStopped && !
                            this.isLocked) return void this.reset();
                        let s = "vertical" === this.options.gestureOrientation && 0 === e ||
                            "horizontal" === this.options.gestureOrientation && 0 === t;
                        if (0 === t && 0 === e || s) return;
                        let o = i.composedPath();
                        if ((o = o.slice(0, o.indexOf(this.rootElement))).find(t => {
                                var e, i, s, o, l;
                                return (null == (e = t.hasAttribute) ? void 0 : e.call(t,
                                    "data-lenis-prevent")) || r && (null == (i = t.hasAttribute) ?
                                    void 0 : i.call(t, "data-lenis-prevent-touch")) || n && (null ==
                                    (s = t.hasAttribute) ? void 0 : s.call(t,
                                        "data-lenis-prevent-wheel")) || (null == (o = t.classList) ?
                                    void 0 : o.contains("lenis")) && !(null == (l = t.classList) ?
                                    void 0 : l.contains("lenis-stopped"))
                            })) return;
                        if (this.isStopped || this.isLocked) return void i.preventDefault();
                        if (this.isSmooth = this.options.syncTouch && r || this.options.smoothWheel && n, !
                            this.isSmooth) return this.isScrolling = !1, void this.animate.stop();
                        i.preventDefault();
                        let l = e;
                        "both" === this.options.gestureOrientation ? l = Math.abs(e) > Math.abs(t) ? e : t :
                            "horizontal" === this.options.gestureOrientation && (l = t);
                        let a = r && this.options.syncTouch,
                            u = r && "touchend" === i.type && Math.abs(l) > 5;
                        u && (l = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this
                            .targetScroll + l, Object.assign({
                                programmatic: !1
                            }, a ? {
                                lerp: u ? this.options.syncTouchLerp : 1
                            } : {
                                lerp: this.options.lerp,
                                duration: this.options.duration,
                                easing: this.options.easing
                            }))
                    }, this.onNativeScroll = () => {
                        if (!this.__preventNextScrollEvent && !this.isScrolling) {
                            let t = this.animatedScroll;
                            this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0,
                                this.direction = Math.sign(this.animatedScroll - t), this.emit()
                        }
                    }, window.lenisVersion = "1.0.42", t !== document.documentElement && t !== document
                    .body || (t = window), this.options = {
                        wrapper: t,
                        content: e,
                        wheelEventsTarget: i,
                        eventsTarget: o,
                        smoothWheel: a,
                        syncTouch: u,
                        syncTouchLerp: c,
                        touchInertiaMultiplier: h,
                        duration: d,
                        easing: p,
                        lerp: f,
                        infinite: m,
                        gestureOrientation: v,
                        orientation: g,
                        touchMultiplier: w,
                        wheelMultiplier: b,
                        autoResize: y,
                        __experimental__naiveDimensions: S
                    }, this.animate = new r, this.emitter = new s, this.dimensions = new n({
                        wrapper: t,
                        content: e,
                        autoResize: y
                    }), this.toggleClassName("lenis", !0), this.velocity = 0, this.isLocked = !1, this
                    .isStopped = !1, this.isSmooth = u || a, this.isScrolling = !1, this.targetScroll = this
                    .animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll",
                        this.onNativeScroll, !1), this.virtualScroll = new l(o, {
                        touchMultiplier: w,
                        wheelMultiplier: b
                    }), this.virtualScroll.on("scroll", this.onVirtualScroll)
            }
            destroy() {
                this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this
                        .onNativeScroll, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this
                    .toggleClassName("lenis", !1), this.toggleClassName("lenis-smooth", !1), this
                    .toggleClassName("lenis-scrolling", !1), this.toggleClassName("lenis-stopped", !1), this
                    .toggleClassName("lenis-locked", !1)
            }
            on(t, e) {
                return this.emitter.on(t, e)
            }
            off(t, e) {
                return this.emitter.off(t, e)
            }
            setScroll(t) {
                this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t
            }
            resize() {
                this.dimensions.resize()
            }
            emit() {
                this.emitter.emit("scroll", this)
            }
            reset() {
                this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this
                    .actualScroll, this.velocity = 0, this.animate.stop()
            }
            start() {
                this.isStopped && (this.isStopped = !1, this.reset())
            }
            stop() {
                this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset())
            }
            raf(t) {
                let e = t - (this.time || t);
                this.time = t, this.animate.advance(.001 * e)
            }
            scrollTo(t, {
                offset: e = 0,
                immediate: r = !1,
                lock: n = !1,
                duration: s = this.options.duration,
                easing: o = this.options.easing,
                lerp: l = !s && this.options.lerp,
                onComplete: a,
                force: u = !1,
                programmatic: c = !0
            } = {}) {
                if (!this.isStopped && !this.isLocked || u) {
                    if (["top", "left", "start"].includes(t)) t = 0;
                    else if (["bottom", "right", "end"].includes(t)) t = this.limit;
                    else {
                        let i;
                        if ("string" == typeof t ? i = document.querySelector(t) : (null == t ? void 0 : t
                                .nodeType) && (i = t), i) {
                            if (this.options.wrapper !== window) {
                                let t = this.options.wrapper.getBoundingClientRect();
                                e -= this.isHorizontal ? t.left : t.top
                            }
                            let r = i.getBoundingClientRect();
                            t = (this.isHorizontal ? r.left : r.top) + this.animatedScroll
                        }
                    }
                    if ("number" == typeof t) {
                        if (t += e, t = Math.round(t), this.options.infinite ? c && (this.targetScroll =
                                this.animatedScroll = this.scroll) : t = i(0, t, this.limit), r) return this
                            .animatedScroll = this.targetScroll = t, this.setScroll(this.scroll), this
                            .reset(), void(null == a || a(this));
                        if (!c) {
                            if (t === this.targetScroll) return;
                            this.targetScroll = t
                        }
                        this.animate.fromTo(this.animatedScroll, t, {
                            duration: s,
                            easing: o,
                            lerp: l,
                            onStart: () => {
                                n && (this.isLocked = !0), this.isScrolling = !0
                            },
                            onUpdate: (t, e) => {
                                this.isScrolling = !0, this.velocity = t - this.animatedScroll,
                                    this.direction = Math.sign(this.velocity), this
                                    .animatedScroll = t, this.setScroll(this.scroll), c && (this
                                        .targetScroll = t), e || this.emit(), e && (this
                                    .reset(), this.emit(), null == a || a(this), this
                                        .__preventNextScrollEvent = !0, requestAnimationFrame(
                                        () => {
                                                delete this.__preventNextScrollEvent
                                            }))
                            }
                        })
                    }
                }
            }
            get rootElement() {
                return this.options.wrapper === window ? document.documentElement : this.options.wrapper
            }
            get limit() {
                return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement
                    .scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this
                    .rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
            }
            get isHorizontal() {
                return "horizontal" === this.options.orientation
            }
            get actualScroll() {
                return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
            }
            get scroll() {
                var t;
                return this.options.infinite ? (this.animatedScroll % (t = this.limit) + t) % t : this
                    .animatedScroll
            }
            get progress() {
                return 0 === this.limit ? 1 : this.scroll / this.limit
            }
            get isSmooth() {
                return this.__isSmooth
            }
            set isSmooth(t) {
                this.__isSmooth !== t && (this.__isSmooth = t, this.toggleClassName("lenis-smooth", t))
            }
            get isScrolling() {
                return this.__isScrolling
            }
            set isScrolling(t) {
                this.__isScrolling !== t && (this.__isScrolling = t, this.toggleClassName("lenis-scrolling",
                    t))
            }
            get isStopped() {
                return this.__isStopped
            }
            set isStopped(t) {
                this.__isStopped !== t && (this.__isStopped = t, this.toggleClassName("lenis-stopped", t))
            }
            get isLocked() {
                return this.__isLocked
            }
            set isLocked(t) {
                this.__isLocked !== t && (this.__isLocked = t, this.toggleClassName("lenis-locked", t))
            }
            get className() {
                let t = "lenis";
                return this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"),
                    this.isScrolling && (t += " lenis-scrolling"), this.isSmooth && (t += " lenis-smooth"),
                    t
            }
            toggleClassName(t, e) {
                this.rootElement.classList.toggle(t, e), this.emitter.emit("className change", this)
            }
        }
        let u = {
                lerp: .12,
                orientation: "vertical",
                gestureOrientation: "vertical",
                wheelMultiplier: 1,
                normalizeWheel: !1,
                smoothTouch: !1
            },
            c = (0, e.create)((t, e) => ({
                isLocked: !1,
                setIsLocked: i => {
                    let r = document.body,
                        n = e().lenis,
                        s = e().isLocked;
                    if (i && !s) {
                        let e = n.animatedScroll;
                        n.destroy(), r.style.position = "fixed", r.style.top = `-${e}px`, t(() => ({
                            isLocked: i,
                            savedScrollY: e
                        }))
                    } else s && (r.style.position = "", r.style.top = "", t({
                        lenis: new a(u)
                    }), e().lenis.scrollTo(e().savedScrollY, {
                        immediate: !0,
                        force: !0
                    }), t(() => ({
                        isLocked: i,
                        savedScrollY: 0
                    })))
                },
                lenis: new a(u),
                scrollTo: (t, i) => e().lenis.scrollTo(t, i)
            }));
        t.s(["default", 0, c], 9661), t.s([], 8508)
    },
    70733, t => {
        "use strict";

        function e() {
            for (var t, e, i = 0, r = "", n = arguments.length; i < n; i++)(t = arguments[i]) && (e =
                function t(e) {
                    var i, r, n = "";
                    if ("string" == typeof e || "number" == typeof e) n += e;
                    else if ("object" == typeof e)
                        if (Array.isArray(e)) {
                            var s = e.length;
                            for (i = 0; i < s; i++) e[i] && (r = t(e[i])) && (n && (n += " "), n += r)
                        } else
                            for (r in e) e[r] && (n && (n += " "), n += r);
                    return n
                }(t)) && (r && (r += " "), r += e);
            return r
        }
        t.s(["clsx", () => e, "default", 0, e])
    },
    36028, t => {
        "use strict";
        var e = t.i(30912);
        t.s(["useHeaderStore", () => e.default])
    },
    46053, t => {
        "use strict";

        function e(t, e) {
            if (Object.is(t, e)) return !0;
            if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
            if (t instanceof Map && e instanceof Map) {
                if (t.size !== e.size) return !1;
                for (let [i, r] of t)
                    if (!Object.is(r, e.get(i))) return !1;
                return !0
            }
            if (t instanceof Set && e instanceof Set) {
                if (t.size !== e.size) return !1;
                for (let i of t)
                    if (!e.has(i)) return !1;
                return !0
            }
            let i = Object.keys(t);
            if (i.length !== Object.keys(e).length) return !1;
            for (let r of i)
                if (!Object.prototype.hasOwnProperty.call(e, r) || !Object.is(t[r], e[r])) return !1;
            return !0
        }
        t.s(["shallow", () => e])
    },
    87515, (t, e, i) => {
        "use strict";

        function r({
            widthInt: t,
            heightInt: e,
            blurWidth: i,
            blurHeight: r,
            blurDataURL: n,
            objectFit: s
        }) {
            let o = i ? 40 * i : t,
                l = r ? 40 * r : e,
                a = o && l ? `viewBox='0 0 ${o} ${l}'` : "";
            return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${a}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${a?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), Object.defineProperty(i, "getImageBlurSvg", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    },
    92176, (t, e, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = {
            VALID_LOADERS: function() {
                return s
            },
            imageConfigDefault: function() {
                return o
            }
        };
        for (var n in r) Object.defineProperty(i, n, {
            enumerable: !0,
            get: r[n]
        });
        let s = ["default", "imgix", "cloudinary", "akamai", "custom"],
            o = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                path: "/_next/image",
                loader: "default",
                loaderFile: "",
                domains: [],
                disableStaticImages: !1,
                minimumCacheTTL: 14400,
                formats: ["image/webp"],
                maximumRedirects: 3,
                dangerouslyAllowLocalIP: !1,
                dangerouslyAllowSVG: !1,
                contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                contentDispositionType: "attachment",
                localPatterns: void 0,
                remotePatterns: [],
                qualities: [75],
                unoptimized: !1
            }
    },
    94788, (t, e, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), Object.defineProperty(i, "getImgProps", {
            enumerable: !0,
            get: function() {
                return u
            }
        }), t.r(75838);
        let r = t.r(7303),
            n = t.r(87515),
            s = t.r(92176),
            o = ["-moz-initial", "fill", "none", "scale-down", void 0];

        function l(t) {
            return void 0 !== t.default
        }

        function a(t) {
            return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" ==
                typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
        }

        function u({
            src: t,
            sizes: e,
            unoptimized: i = !1,
            priority: u = !1,
            preload: c = !1,
            loading: h,
            className: d,
            quality: p,
            width: f,
            height: m,
            fill: g = !1,
            style: v,
            overrideSrc: w,
            onLoad: b,
            onLoadingComplete: y,
            placeholder: S = "empty",
            blurDataURL: _,
            fetchPriority: O,
            decoding: x = "async",
            layout: E,
            objectFit: j,
            objectPosition: M,
            lazyBoundary: z,
            lazyRoot: R,
            ...C
        }, P) {
            var A;
            let I, T, L, {
                    imgConf: k,
                    showAltText: W,
                    blurComplete: D,
                    defaultLoader: H
                } = P,
                $ = k || s.imageConfigDefault;
            if ("allSizes" in $) I = $;
            else {
                let t = [...$.deviceSizes, ...$.imageSizes].sort((t, e) => t - e),
                    e = $.deviceSizes.sort((t, e) => t - e),
                    i = $.qualities?.sort((t, e) => t - e);
                I = {
                    ...$,
                    allSizes: t,
                    deviceSizes: e,
                    qualities: i
                }
            }
            if (void 0 === H) throw Object.defineProperty(Error(
                "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
                ), "__NEXT_ERROR_CODE", {
                value: "E163",
                enumerable: !1,
                configurable: !0
            });
            let N = C.loader || H;
            delete C.loader, delete C.srcSet;
            let U = "__next_img_default" in N;
            if (U) {
                if ("custom" === I.loader) throw Object.defineProperty(Error(`Image with src "${t}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                    value: "E252",
                    enumerable: !1,
                    configurable: !0
                })
            } else {
                let t = N;
                N = e => {
                    let {
                        config: i,
                        ...r
                    } = e;
                    return t(r)
                }
            }
            if (E) {
                "fill" === E && (g = !0);
                let t = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                } [E];
                t && (v = {
                    ...v,
                    ...t
                });
                let i = {
                    responsive: "100vw",
                    fill: "100vw"
                } [E];
                i && !e && (e = i)
            }
            let q = "",
                V = a(f),
                B = a(m);
            if ((A = t) && "object" == typeof A && (l(A) || void 0 !== A.src)) {
                let e = l(t) ? t.default : t;
                if (!e.src) throw Object.defineProperty(Error(
                    `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(e)}`
                    ), "__NEXT_ERROR_CODE", {
                    value: "E460",
                    enumerable: !1,
                    configurable: !0
                });
                if (!e.height || !e.width) throw Object.defineProperty(Error(
                    `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(e)}`
                    ), "__NEXT_ERROR_CODE", {
                    value: "E48",
                    enumerable: !1,
                    configurable: !0
                });
                if (T = e.blurWidth, L = e.blurHeight, _ = _ || e.blurDataURL, q = e.src, !g)
                    if (V || B) {
                        if (V && !B) {
                            let t = V / e.width;
                            B = Math.round(e.height * t)
                        } else if (!V && B) {
                            let t = B / e.height;
                            V = Math.round(e.width * t)
                        }
                    } else V = e.width, B = e.height
            }
            let F = !u && !c && ("lazy" === h || void 0 === h);
            (!(t = "string" == typeof t ? t : q) || t.startsWith("data:") || t.startsWith("blob:")) && (i = !0,
                F = !1), I.unoptimized && (i = !0), U && !I.dangerouslyAllowSVG && t.split("?", 1)[0].endsWith(
                ".svg") && (i = !0);
            let X = a(p),
                Y = Object.assign(g ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: j,
                    objectPosition: M
                } : {}, W ? {} : {
                    color: "transparent"
                }, v),
                G = D || "empty" === S ? null : "blur" === S ?
                `url("data:image/svg+xml;charset=utf-8,${(0,n.getImageBlurSvg)({widthInt:V,heightInt:B,blurWidth:T,blurHeight:L,blurDataURL:_||"",objectFit:Y.objectFit})}")` :
                `url("${S}")`,
                K = o.includes(Y.objectFit) ? "fill" === Y.objectFit ? "100% 100%" : "cover" : Y.objectFit,
                Q = G ? {
                    backgroundSize: K,
                    backgroundPosition: Y.objectPosition || "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: G
                } : {},
                J = function({
                    config: t,
                    src: e,
                    unoptimized: i,
                    width: n,
                    quality: s,
                    sizes: o,
                    loader: l
                }) {
                    if (i) {
                        let t = (0, r.getDeploymentId)();
                        if (e.startsWith("/") && !e.startsWith("//") && t) {
                            let i = e.includes("?") ? "&" : "?";
                            e = `${e}${i}dpl=${t}`
                        }
                        return {
                            src: e,
                            srcSet: void 0,
                            sizes: void 0
                        }
                    }
                    let {
                        widths: a,
                        kind: u
                    } = function({
                        deviceSizes: t,
                        allSizes: e
                    }, i, r) {
                        if (r) {
                            let i = /(^|\s)(1?\d?\d)vw/g,
                                n = [];
                            for (let t; t = i.exec(r);) n.push(parseInt(t[2]));
                            if (n.length) {
                                let i = .01 * Math.min(...n);
                                return {
                                    widths: e.filter(e => e >= t[0] * i),
                                    kind: "w"
                                }
                            }
                            return {
                                widths: e,
                                kind: "w"
                            }
                        }
                        return "number" != typeof i ? {
                            widths: t,
                            kind: "w"
                        } : {
                            widths: [...new Set([i, 2 * i].map(t => e.find(e => e >= t) || e[e.length -
                                1]))],
                            kind: "x"
                        }
                    }(t, n, o), c = a.length - 1;
                    return {
                        sizes: o || "w" !== u ? o : "100vw",
                        srcSet: a.map((i, r) => `${l({config:t,src:e,quality:s,width:i})} ${"w"===u?i:r+1}${u}`)
                            .join(", "),
                        src: l({
                            config: t,
                            src: e,
                            quality: s,
                            width: a[c]
                        })
                    }
                }({
                    config: I,
                    src: t,
                    unoptimized: i,
                    width: V,
                    quality: X,
                    sizes: e,
                    loader: N
                }),
                Z = F ? "lazy" : h;
            return {
                props: {
                    ...C,
                    loading: Z,
                    fetchPriority: O,
                    width: V,
                    height: B,
                    decoding: x,
                    className: d,
                    style: {
                        ...Y,
                        ...Q
                    },
                    sizes: J.sizes,
                    srcSet: J.srcSet,
                    src: w || J.src
                },
                meta: {
                    unoptimized: i,
                    preload: c || u,
                    placeholder: S,
                    fill: g
                }
            }
        }
    },
    44304, (t, e, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), Object.defineProperty(i, "default", {
            enumerable: !0,
            get: function() {
                return l
            }
        });
        let r = t.r(53014),
            n = "u" < typeof window,
            s = n ? () => {} : r.useLayoutEffect,
            o = n ? () => {} : r.useEffect;

        function l(t) {
            let {
                headManager: e,
                reduceComponentsToState: i
            } = t;

            function l() {
                if (e && e.mountedInstances) {
                    let t = r.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));
                    e.updateHead(i(t))
                }
            }
            return n && (e?.mountedInstances?.add(t.children), l()), s(() => (e?.mountedInstances?.add(t
                .children), () => {
                e?.mountedInstances?.delete(t.children)
            })), s(() => (e && (e._pendingUpdate = l), () => {
                e && (e._pendingUpdate = l)
            })), o(() => (e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null), () => {
                e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null)
            })), null
        }
    },
    12715, (t, e, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = {
            default: function() {
                return m
            },
            defaultHead: function() {
                return h
            }
        };
        for (var n in r) Object.defineProperty(i, n, {
            enumerable: !0,
            get: r[n]
        });
        let s = t.r(40192),
            o = t.r(75244),
            l = t.r(71448),
            a = o._(t.r(53014)),
            u = s._(t.r(44304)),
            c = t.r(76229);

        function h() {
            return [(0, l.jsx)("meta", {
                charSet: "utf-8"
            }, "charset"), (0, l.jsx)("meta", {
                name: "viewport",
                content: "width=device-width"
            }, "viewport")]
        }

        function d(t, e) {
            return "string" == typeof e || "number" == typeof e ? t : e.type === a.default.Fragment ? t.concat(a
                .default.Children.toArray(e.props.children).reduce((t, e) => "string" == typeof e ||
                    "number" == typeof e ? t : t.concat(e), [])) : t.concat(e)
        }
        t.r(75838);
        let p = ["name", "httpEquiv", "charSet", "itemProp"];

        function f(t) {
            let e, i, r, n;
            return t.reduce(d, []).reverse().concat(h().reverse()).filter((e = new Set, i = new Set, r =
                new Set, n = {}, t => {
                    let s = !0,
                        o = !1;
                    if (t.key && "number" != typeof t.key && t.key.indexOf("$") > 0) {
                        o = !0;
                        let i = t.key.slice(t.key.indexOf("$") + 1);
                        e.has(i) ? s = !1 : e.add(i)
                    }
                    switch (t.type) {
                        case "title":
                        case "base":
                            i.has(t.type) ? s = !1 : i.add(t.type);
                            break;
                        case "meta":
                            for (let e = 0, i = p.length; e < i; e++) {
                                let i = p[e];
                                if (t.props.hasOwnProperty(i))
                                    if ("charSet" === i) r.has(i) ? s = !1 : r.add(i);
                                    else {
                                        let e = t.props[i],
                                            r = n[i] || new Set;
                                        ("name" !== i || !o) && r.has(e) ? s = !1 : (r.add(e), n[i] = r)
                                    }
                            }
                    }
                    return s
                })).reverse().map((t, e) => {
                let i = t.key || e;
                return a.default.cloneElement(t, {
                    key: i
                })
            })
        }
        let m = function({
            children: t
        }) {
            let e = (0, a.useContext)(c.HeadManagerContext);
            return (0, l.jsx)(u.default, {
                reduceComponentsToState: f,
                headManager: e,
                children: t
            })
        };
        ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i
            .default.__esModule && (Object.defineProperty(i.default, "__esModule", {
                value: !0
            }), Object.assign(i.default, i), e.exports = i.default)
    },
    50371, (t, e, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), Object.defineProperty(i, "ImageConfigContext", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        let r = t.r(40192)._(t.r(53014)),
            n = t.r(92176),
            s = r.default.createContext(n.imageConfigDefault)
    },
    52445, (t, e, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), Object.defineProperty(i, "RouterContext", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let r = t.r(40192)._(t.r(53014)).default.createContext(null)
    },
    66643, (t, e, i) => {
        "use strict";

        function r(t, e) {
            let i = t || 75;
            return e?.qualities?.length ? e.qualities.reduce((t, e) => Math.abs(e - i) < Math.abs(t - i) ? e :
                t, 0) : i
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), Object.defineProperty(i, "findClosestQuality", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    },
    78623, (t, e, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), Object.defineProperty(i, "default", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let r = t.r(66643),
            n = t.r(7303);

        function s({
            config: t,
            src: e,
            width: i,
            quality: s
        }) {
            if (e.startsWith("/") && e.includes("?") && t.localPatterns?.length === 1 && "**" === t
                .localPatterns[0].pathname && "" === t.localPatterns[0].search) throw Object.defineProperty(
                Error(`Image with src "${e}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
                    value: "E871",
                    enumerable: !1,
                    configurable: !0
                });
            let o = (0, r.findClosestQuality)(s, t),
                l = (0, n.getDeploymentId)();
            return `${t.path}?url=${encodeURIComponent(e)}&w=${i}&q=${o}${e.startsWith("/")&&l?`&dpl=${l}`:""}`
        }
        s.__next_img_default = !0;
        let o = s
    },
    91467, (t, e, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), Object.defineProperty(i, "Image", {
            enumerable: !0,
            get: function() {
                return y
            }
        });
        let r = t.r(40192),
            n = t.r(75244),
            s = t.r(71448),
            o = n._(t.r(53014)),
            l = r._(t.r(63962)),
            a = r._(t.r(12715)),
            u = t.r(94788),
            c = t.r(92176),
            h = t.r(50371);
        t.r(75838);
        let d = t.r(52445),
            p = r._(t.r(78623)),
            f = t.r(73542),
            m = {
                deviceSizes: [1, 640, 960, 1200, 1920, 2400],
                imageSizes: [48, 96, 160, 320],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            };

        function g(t, e, i, r, n, s, o) {
            let l = t?.src;
            t && t["data-loaded-src"] !== l && (t["data-loaded-src"] = l, ("decode" in t ? t.decode() : Promise
                .resolve()).catch(() => {}).then(() => {
                if (t.parentElement && t.isConnected) {
                    if ("empty" !== e && n(!0), i?.current) {
                        let e = new Event("load");
                        Object.defineProperty(e, "target", {
                            writable: !1,
                            value: t
                        });
                        let r = !1,
                            n = !1;
                        i.current({
                            ...e,
                            nativeEvent: e,
                            currentTarget: t,
                            target: t,
                            isDefaultPrevented: () => r,
                            isPropagationStopped: () => n,
                            persist: () => {},
                            preventDefault: () => {
                                r = !0, e.preventDefault()
                            },
                            stopPropagation: () => {
                                n = !0, e.stopPropagation()
                            }
                        })
                    }
                    r?.current && r.current(t)
                }
            }))
        }

        function v(t) {
            return o.use ? {
                fetchPriority: t
            } : {
                fetchpriority: t
            }
        }
        "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
        let w = (0, o.forwardRef)(({
            src: t,
            srcSet: e,
            sizes: i,
            height: r,
            width: n,
            decoding: l,
            className: a,
            style: u,
            fetchPriority: c,
            placeholder: h,
            loading: d,
            unoptimized: p,
            fill: m,
            onLoadRef: w,
            onLoadingCompleteRef: b,
            setBlurComplete: y,
            setShowAltText: S,
            sizesInput: _,
            onLoad: O,
            onError: x,
            ...E
        }, j) => {
            let M = (0, o.useCallback)(t => {
                    t && (x && (t.src = t.src), t.complete && g(t, h, w, b, y, p, _))
                }, [t, h, w, b, y, x, p, _]),
                z = (0, f.useMergedRef)(j, M);
            return (0, s.jsx)("img", {
                ...E,
                ...v(c),
                loading: d,
                width: n,
                height: r,
                decoding: l,
                "data-nimg": m ? "fill" : "1",
                className: a,
                style: u,
                sizes: i,
                srcSet: e,
                src: t,
                ref: z,
                onLoad: t => {
                    g(t.currentTarget, h, w, b, y, p, _)
                },
                onError: t => {
                    S(!0), "empty" !== h && y(!0), x && x(t)
                }
            })
        });

        function b({
            isAppRouter: t,
            imgAttributes: e
        }) {
            let i = {
                as: "image",
                imageSrcSet: e.srcSet,
                imageSizes: e.sizes,
                crossOrigin: e.crossOrigin,
                referrerPolicy: e.referrerPolicy,
                ...v(e.fetchPriority)
            };
            return t && l.default.preload ? (l.default.preload(e.src, i), null) : (0, s.jsx)(a.default, {
                children: (0, s.jsx)("link", {
                    rel: "preload",
                    href: e.srcSet ? void 0 : e.src,
                    ...i
                }, "__nimg-" + e.src + e.srcSet + e.sizes)
            })
        }
        let y = (0, o.forwardRef)((t, e) => {
            let i = (0, o.useContext)(d.RouterContext),
                r = (0, o.useContext)(h.ImageConfigContext),
                n = (0, o.useMemo)(() => {
                    let t = m || r || c.imageConfigDefault,
                        e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
                        i = t.deviceSizes.sort((t, e) => t - e),
                        n = t.qualities?.sort((t, e) => t - e);
                    return {
                        ...t,
                        allSizes: e,
                        deviceSizes: i,
                        qualities: n,
                        localPatterns: "u" < typeof window ? r?.localPatterns : t.localPatterns
                    }
                }, [r]),
                {
                    onLoad: l,
                    onLoadingComplete: a
                } = t,
                f = (0, o.useRef)(l);
            (0, o.useEffect)(() => {
                f.current = l
            }, [l]);
            let g = (0, o.useRef)(a);
            (0, o.useEffect)(() => {
                g.current = a
            }, [a]);
            let [v, y] = (0, o.useState)(!1), [S, _] = (0, o.useState)(!1), {
                props: O,
                meta: x
            } = (0, u.getImgProps)(t, {
                defaultLoader: p.default,
                imgConf: n,
                blurComplete: v,
                showAltText: S
            });
            return (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(w, {
                    ...O,
                    unoptimized: x.unoptimized,
                    placeholder: x.placeholder,
                    fill: x.fill,
                    onLoadRef: f,
                    onLoadingCompleteRef: g,
                    setBlurComplete: y,
                    setShowAltText: _,
                    sizesInput: t.sizes,
                    ref: e
                }), x.preload ? (0, s.jsx)(b, {
                    isAppRouter: !i,
                    imgAttributes: O
                }) : null]
            })
        });
        ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i
            .default.__esModule && (Object.defineProperty(i.default, "__esModule", {
                value: !0
            }), Object.assign(i.default, i), e.exports = i.default)
    },
    68530, (t, e, i) => {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = {
            default: function() {
                return c
            },
            getImageProps: function() {
                return u
            }
        };
        for (var n in r) Object.defineProperty(i, n, {
            enumerable: !0,
            get: r[n]
        });
        let s = t.r(40192),
            o = t.r(94788),
            l = t.r(91467),
            a = s._(t.r(78623));

        function u(t) {
            let {
                props: e
            } = (0, o.getImgProps)(t, {
                defaultLoader: a.default,
                imgConf: {
                    deviceSizes: [1, 640, 960, 1200, 1920, 2400],
                    imageSizes: [48, 96, 160, 320],
                    qualities: [75],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                }
            });
            for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
            return {
                props: e
            }
        }
        let c = l.Image
    },
    14056, (t, e, i) => {
        e.exports = t.r(68530)
    },
    3241, t => {
        "use strict";
        var e = t.i(41227),
            i = t.i(71448),
            r = t.i(53014),
            n = t.i(70733),
            s = t.i(14056),
            o = t.i(67983);
        let l = o.devices.mobile.mockupWidth,
            a = o.devices.desktop.mockupWidth,
            u = o.screens[o.devices.tablet.screen],
            c = (0, r.forwardRef)(({
                src: t,
                width: o,
                height: c,
                mobileWidth: h = l,
                desktopWidth: d = a,
                alt: p = "",
                fill: f,
                loader: m,
                className: g,
                style: v,
                mobileOnly: w = !1,
                desktopOnly: b = !1,
                priority: y = !1,
                unoptimized: S,
                sizes: _,
                animated: O = !0,
                onLoadingComplete: x,
                ...E
            }, j) => {
                let [M, z] = (0, r.useState)(!1), R = _ ||
                    `${!w?`(min-width: ${u}px) ${Math.round(100*d/a)}vw`:`(max-width: ${u-1}px) ${Math.round(100*h/l)}vw`}${!b&&!w?`,${Math.round(100*h/l)}vw`:",0vw"}`;
                return (0, i.jsx)(s.default, {
                    unoptimized: void 0 !== S ? S : void 0 !== e.default.env.XSTORYBOOK_EXAMPLE_APP,
                    src: t,
                    alt: p,
                    fill: f,
                    sizes: R,
                    width: f ? void 0 : o,
                    height: f ? void 0 : c,
                    loader: m,
                    priority: y,
                    style: v,
                    className: (0, n.default)("block", w && "md:hidden", b && "lg-max:hidden", O &&
                        "transition-opacity duration-500 ease-out-quart", f && "object-cover",
                        O && (M ? "opacity-100" : `opacity-0${y?" opacity-100":""}`), g),
                    onLoad: t => {
                        x && x(t), z(!0)
                    },
                    ref: j,
                    ...E
                })
            });
        t.s(["Image", 0, c])
    },
    8226, (t, e, i) => {
        t.e, e.exports = function() {
            function t(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, r = Array(e); i < e; i++) r[i] = t[i];
                return r
            }

            function e() {
                return (e = Object.assign.bind()).apply(null, arguments)
            }
            var i = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";

            function r(t) {
                return ("image-" + t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/, "-$1")
            }
            var n = [
                    ["width", "w"],
                    ["height", "h"],
                    ["format", "fm"],
                    ["download", "dl"],
                    ["blur", "blur"],
                    ["sharpen", "sharp"],
                    ["invert", "invert"],
                    ["orientation", "or"],
                    ["minHeight", "min-h"],
                    ["maxHeight", "max-h"],
                    ["minWidth", "min-w"],
                    ["maxWidth", "max-w"],
                    ["quality", "q"],
                    ["fit", "fit"],
                    ["crop", "crop"],
                    ["saturation", "sat"],
                    ["auto", "auto"],
                    ["dpr", "dpr"],
                    ["pad", "pad"],
                    ["frame", "frame"]
                ],
                s = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
                o = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
                l = ["format"],
                a = function() {
                    function a(t, i) {
                        this.options = void 0, this.options = t ? e({}, t.options || {}, i || {}) : e({},
                            i || {})
                    }
                    var u = a.prototype;
                    return u.withOptions = function(i) {
                        var r = i.baseUrl || this.options.baseUrl,
                            s = {
                                baseUrl: r
                            };
                        for (var o in i) i.hasOwnProperty(o) && (s[function(e) {
                            for (var i, r = function(e, i) {
                                    var r = "u" > typeof Symbol && e[Symbol.iterator] ||
                                        e["@@iterator"];
                                    if (r) return (r = r.call(e)).next.bind(r);
                                    if (Array.isArray(e) || (r = function(e, i) {
                                            if (e) {
                                                if ("string" == typeof e) return t(
                                                    e, void 0);
                                                var r = ({}).toString.call(e).slice(
                                                    8, -1);
                                                return "Object" === r && e
                                                    .constructor && (r = e
                                                        .constructor.name),
                                                    "Map" === r || "Set" === r ?
                                                    Array.from(e) : "Arguments" ===
                                                    r ||
                                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/
                                                    .test(r) ? t(e, void 0) : void 0
                                            }
                                        }(e))) {
                                        r && (e = r);
                                        var n = 0;
                                        return function() {
                                            return n >= e.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: e[n++]
                                            }
                                        }
                                    }
                                    throw TypeError(
                                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                        )
                                }(n); !(i = r()).done;) {
                                var s = i.value,
                                    o = s[0],
                                    l = s[1];
                                if (e === o || e === l) return o
                            }
                            return e
                        }(o)] = i[o]);
                        return new a(this, e({
                            baseUrl: r
                        }, s))
                    }, u.image = function(t) {
                        return this.withOptions({
                            source: t
                        })
                    }, u.dataset = function(t) {
                        return this.withOptions({
                            dataset: t
                        })
                    }, u.projectId = function(t) {
                        return this.withOptions({
                            projectId: t
                        })
                    }, u.bg = function(t) {
                        return this.withOptions({
                            bg: t
                        })
                    }, u.dpr = function(t) {
                        return this.withOptions(t && 1 !== t ? {
                            dpr: t
                        } : {})
                    }, u.width = function(t) {
                        return this.withOptions({
                            width: t
                        })
                    }, u.height = function(t) {
                        return this.withOptions({
                            height: t
                        })
                    }, u.focalPoint = function(t, e) {
                        return this.withOptions({
                            focalPoint: {
                                x: t,
                                y: e
                            }
                        })
                    }, u.maxWidth = function(t) {
                        return this.withOptions({
                            maxWidth: t
                        })
                    }, u.minWidth = function(t) {
                        return this.withOptions({
                            minWidth: t
                        })
                    }, u.maxHeight = function(t) {
                        return this.withOptions({
                            maxHeight: t
                        })
                    }, u.minHeight = function(t) {
                        return this.withOptions({
                            minHeight: t
                        })
                    }, u.size = function(t, e) {
                        return this.withOptions({
                            width: t,
                            height: e
                        })
                    }, u.blur = function(t) {
                        return this.withOptions({
                            blur: t
                        })
                    }, u.sharpen = function(t) {
                        return this.withOptions({
                            sharpen: t
                        })
                    }, u.rect = function(t, e, i, r) {
                        return this.withOptions({
                            rect: {
                                left: t,
                                top: e,
                                width: i,
                                height: r
                            }
                        })
                    }, u.format = function(t) {
                        return this.withOptions({
                            format: t
                        })
                    }, u.invert = function(t) {
                        return this.withOptions({
                            invert: t
                        })
                    }, u.orientation = function(t) {
                        return this.withOptions({
                            orientation: t
                        })
                    }, u.quality = function(t) {
                        return this.withOptions({
                            quality: t
                        })
                    }, u.forceDownload = function(t) {
                        return this.withOptions({
                            download: t
                        })
                    }, u.flipHorizontal = function() {
                        return this.withOptions({
                            flipHorizontal: !0
                        })
                    }, u.flipVertical = function() {
                        return this.withOptions({
                            flipVertical: !0
                        })
                    }, u.ignoreImageParams = function() {
                        return this.withOptions({
                            ignoreImageParams: !0
                        })
                    }, u.fit = function(t) {
                        if (-1 === s.indexOf(t)) throw Error('Invalid fit mode "' + t + '"');
                        return this.withOptions({
                            fit: t
                        })
                    }, u.crop = function(t) {
                        if (-1 === o.indexOf(t)) throw Error('Invalid crop mode "' + t + '"');
                        return this.withOptions({
                            crop: t
                        })
                    }, u.saturation = function(t) {
                        return this.withOptions({
                            saturation: t
                        })
                    }, u.auto = function(t) {
                        if (-1 === l.indexOf(t)) throw Error('Invalid auto mode "' + t + '"');
                        return this.withOptions({
                            auto: t
                        })
                    }, u.pad = function(t) {
                        return this.withOptions({
                            pad: t
                        })
                    }, u.vanityName = function(t) {
                        return this.withOptions({
                            vanityName: t
                        })
                    }, u.frame = function(t) {
                        if (1 !== t) throw Error('Invalid frame value "' + t + '"');
                        return this.withOptions({
                            frame: t
                        })
                    }, u.url = function() {
                        return function(t) {
                            var s = e({}, t || {}),
                                o = s.source;
                            delete s.source;
                            var l = function(t) {
                                var i, n;
                                if (!t) return null;
                                if ("string" == typeof t && (n = t, /^https?:\/\//.test("" +
                                    n))) i = {
                                    asset: {
                                        _ref: r(t)
                                    }
                                };
                                else if ("string" == typeof t) i = {
                                    asset: {
                                        _ref: t
                                    }
                                };
                                else if (t && "string" == typeof t._ref) i = {
                                    asset: t
                                };
                                else if (t && "string" == typeof t._id) i = {
                                    asset: {
                                        _ref: t._id || ""
                                    }
                                };
                                else if (t && t.asset && "string" == typeof t.asset.url) i = {
                                    asset: {
                                        _ref: r(t.asset.url)
                                    }
                                };
                                else {
                                    if ("object" != typeof t.asset) return null;
                                    i = e({}, t)
                                }
                                return t.crop && (i.crop = t.crop), t.hotspot && (i.hotspot = t
                                        .hotspot),
                                    function(t) {
                                        if (t.crop && t.hotspot) return t;
                                        var i = e({}, t);
                                        return i.crop || (i.crop = {
                                            left: 0,
                                            top: 0,
                                            bottom: 0,
                                            right: 0
                                        }), i.hotspot || (i.hotspot = {
                                            x: .5,
                                            y: .5,
                                            height: 1,
                                            width: 1
                                        }), i
                                    }(i)
                            }(o);
                            if (!l) {
                                if (o && "object" == typeof o && null !== o && o._upload && (!o
                                        .asset || !o.asset._ref))
                                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";
                                throw Error("Unable to resolve image URL from source (" + JSON
                                    .stringify(o) + ")")
                            }
                            var a = function(t) {
                                    var e = t.split("-"),
                                        r = e[1],
                                        n = e[2],
                                        s = e[3];
                                    if (!r || !n || !s) throw Error("Malformed asset _ref '" + t +
                                        "'. Expected an id like \"" + i + '".');
                                    var o = n.split("x"),
                                        l = o[0],
                                        a = o[1],
                                        u = +l,
                                        c = +a;
                                    if (!(isFinite(u) && isFinite(c))) throw Error(
                                        "Malformed asset _ref '" + t +
                                        "'. Expected an id like \"" + i + '".');
                                    return {
                                        id: r,
                                        width: u,
                                        height: c,
                                        format: s
                                    }
                                }(l.asset._ref || l.asset._id || ""),
                                u = Math.round(l.crop.left * a.width),
                                c = Math.round(l.crop.top * a.height),
                                h = {
                                    left: u,
                                    top: c,
                                    width: Math.round(a.width - l.crop.right * a.width - u),
                                    height: Math.round(a.height - l.crop.bottom * a.height - c)
                                },
                                d = l.hotspot.height * a.height / 2,
                                p = l.hotspot.width * a.width / 2,
                                f = l.hotspot.x * a.width,
                                m = l.hotspot.y * a.height;
                            return s.rect || s.focalPoint || s.ignoreImageParams || s.crop || (s =
                                    e({}, s, function(t, e) {
                                        var i, r = e.width,
                                            n = e.height;
                                        if (!(r && n)) return {
                                            width: r,
                                            height: n,
                                            rect: t.crop
                                        };
                                        var s = t.crop,
                                            o = t.hotspot,
                                            l = r / n;
                                        if (s.width / s.height > l) {
                                            var a = Math.round(s.height),
                                                u = Math.round(a * l),
                                                c = Math.max(0, Math.round(s.top)),
                                                h = Math.max(0, Math.round(Math.round((o.right -
                                                    o.left) / 2 + o.left) - u / 2));
                                            h < s.left ? h = s.left : h + u > s.left + s
                                                .width && (h = s.left + s.width - u), i = {
                                                    left: h,
                                                    top: c,
                                                    width: u,
                                                    height: a
                                                }
                                        } else {
                                            var d = s.width,
                                                p = Math.round(d / l),
                                                f = Math.max(0, Math.round(s.left)),
                                                m = Math.max(0, Math.round(Math.round((o
                                                        .bottom - o.top) / 2 + o.top) - p /
                                                    2));
                                            m < s.top ? m = s.top : m + p > s.top + s.height &&
                                                (m = s.top + s.height - p), i = {
                                                    left: f,
                                                    top: m,
                                                    width: d,
                                                    height: p
                                                }
                                        }
                                        return {
                                            width: r,
                                            height: n,
                                            rect: i
                                        }
                                    }({
                                        crop: h,
                                        hotspot: {
                                            left: f - p,
                                            top: m - d,
                                            right: f + p,
                                            bottom: m + d
                                        }
                                    }, s))),
                                function(t) {
                                    var e = (t.baseUrl || "https://cdn.sanity.io").replace(/\/+$/,
                                            ""),
                                        i = t.vanityName ? "/" + t.vanityName : "",
                                        r = t.asset.id + "-" + t.asset.width + "x" + t.asset
                                        .height + "." + t.asset.format + i,
                                        s = e + "/images/" + t.projectId + "/" + t.dataset + "/" +
                                        r,
                                        o = [];
                                    if (t.rect) {
                                        var l = t.rect,
                                            a = l.left,
                                            u = l.top,
                                            c = l.width,
                                            h = l.height;
                                        (0 !== a || 0 !== u || h !== t.asset.height || c !== t.asset
                                            .width) && o.push("rect=" + a + "," + u + "," + c +
                                            "," + h)
                                    }
                                    t.bg && o.push("bg=" + t.bg), t.focalPoint && (o.push("fp-x=" +
                                        t.focalPoint.x), o.push("fp-y=" + t.focalPoint.y));
                                    var d = [t.flipHorizontal && "h", t.flipVertical && "v"].filter(
                                        Boolean).join("");
                                    return (d && o.push("flip=" + d), n.forEach(function(e) {
                                        var i = e[0],
                                            r = e[1];
                                        void 0 !== t[i] ? o.push(r + "=" +
                                                encodeURIComponent(t[i])) : void 0 !==
                                            t[r] && o.push(r + "=" + encodeURIComponent(
                                                t[r]))
                                    }), 0 === o.length) ? s : s + "?" + o.join("&")
                                }(e({}, s, {
                                    asset: a
                                }))
                        }(this.options)
                    }, u.toString = function() {
                        return this.url()
                    }, a
                }();
            return function(t) {
                if (t && "config" in t && "function" == typeof t.config) {
                    var e = t.config(),
                        i = e.apiHost,
                        r = e.projectId,
                        n = e.dataset;
                    return new a(null, {
                        baseUrl: (i || "https://api.sanity.io").replace(/^https:\/\/api\./,
                            "https://cdn."),
                        projectId: r,
                        dataset: n
                    })
                }
                if (t && "clientConfig" in t && "object" == typeof t.clientConfig) {
                    var s = t.clientConfig,
                        o = s.apiHost,
                        l = s.projectId,
                        u = s.dataset;
                    return new a(null, {
                        baseUrl: (o || "https://api.sanity.io").replace(/^https:\/\/api\./,
                            "https://cdn."),
                        projectId: l,
                        dataset: u
                    })
                }
                return new a(null, t || {})
            }
        }()
    },
    99030, t => {
        "use strict";
        var e = t.i(8226),
            i = t.i(7282);
        let r = (0, e.default)({
            projectId: i.base.projectId,
            dataset: i.base.dataset
        });
        t.s(["imageBuilder", 0, r, "nextJsLoader", 0, ({
            url: t,
            quality: e,
            width: i
        }) => `/_next/image?w=${i}&q=${e}&url=${encodeURIComponent(t)}`])
    },
    43463, t => {
        "use strict";
        var e = t.i(71448),
            i = t.i(3241),
            r = t.i(67983),
            n = t.i(53014),
            s = t.i(99030);
        let o = r.devices.desktop.mockupWidth,
            l = (0, n.forwardRef)(({
                image: t,
                width: r,
                height: n,
                fill: l,
                alt: a = "",
                priority: u,
                ...c
            }, h) => {
                if (!t?.asset) return null;
                let d = t.asset._ref.split("-"),
                    p = d[d.length - 2].split("x").map(t => parseInt(t)),
                    f = d[d.length - 1],
                    m = s.imageBuilder.image(t),
                    g = m.options?.source?.crop,
                    v = r || g && (1 - g.left - g.right) * p[0] || p[0],
                    w = n || g && (1 - g.top - g.bottom) * p[1] || p[1],
                    b = v / w;
                return (0, e.jsx)(i.Image, {
                    ref: h,
                    src: m.size(o, o / b | 0).fit("crop").auto("format").url(),
                    loader: ({
                            width: t,
                            quality: e = 75
                        }) => 1 === t ?
                        "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" :
                        m.size(0 | t, t / b | 0).fit("crop").quality(e).auto("format").url(),
                    width: v,
                    height: w,
                    sizes: "svg" === f ? "100vw" : void 0,
                    alt: a || t.alt || "",
                    fill: l,
                    priority: u,
                    ...c
                })
            });
        t.s(["SanityImage", 0, l])
    }
]);