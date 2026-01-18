(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript :
    void 0, 33842, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), Object.defineProperty(r, "BailoutToCSR", {
            enumerable: !0,
            get: function() {
                return a
            }
        });
        let s = e.r(66221);

        function a({
            reason: e,
            children: t
        }) {
            if ("u" < typeof window) throw Object.defineProperty(new s.BailoutToCSRError(e),
                "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: !1,
                    configurable: !0
                });
            return t
        }
    },
    46928, (e, t, r) => {
        "use strict";

        function s(e) {
            return e.split("/").map(e => encodeURIComponent(e)).join("/")
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), Object.defineProperty(r, "encodeURIPath", {
            enumerable: !0,
            get: function() {
                return s
            }
        })
    },
    84606, (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), Object.defineProperty(r, "PreloadChunks", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let s = e.r(71448),
            a = e.r(63962),
            l = e.r(71966),
            i = e.r(46928),
            o = e.r(7303);

        function n({
            moduleIds: e
        }) {
            if ("u" > typeof window) return null;
            let t = l.workAsyncStorage.getStore();
            if (void 0 === t) return null;
            let r = [];
            if (t.reactLoadableManifest && e) {
                let s = t.reactLoadableManifest;
                for (let t of e) {
                    if (!s[t]) continue;
                    let e = s[t].files;
                    r.push(...e)
                }
            }
            if (0 === r.length) return null;
            let n = (0, o.getDeploymentIdQueryOrEmptyString)();
            return (0, s.jsx)(s.Fragment, {
                children: r.map(e => {
                    let r = `${t.assetPrefix}/_next/${(0,i.encodeURIPath)(e)}${n}`;
                    return e.endsWith(".css") ? (0, s.jsx)("link", {
                        precedence: "dynamic",
                        href: r,
                        rel: "stylesheet",
                        as: "style",
                        nonce: t.nonce
                    }, e) : ((0, a.preload)(r, {
                        as: "script",
                        fetchPriority: "low",
                        nonce: t.nonce
                    }), null)
                })
            })
        }
    },
    60457, e => {
        "use strict";
        e.i(8508);
        var t = e.i(36028),
            r = e.i(53014),
            s = e.i(46053);
        e.s(["default", 0, e => {
            let [a, l] = (0, t.useHeaderStore)(e => [e.addSlice, e.removeSlice], s.shallow);
            (0, r.useEffect)(() => {
                let t = e?.current;
                if (t) return a(t), () => {
                    l(t)
                }
            }, [e.current, a, l])
        }])
    },
    64360, e => {
        "use strict";
        var t = e.i(71448),
            r = e.i(60457),
            s = e.i(70733),
            a = e.i(53014);
        let l = (0, a.forwardRef)(({
            children: e,
            className: l,
            as: i = "section",
            isDark: o,
            type: n
        }, u) => {
            let c = (0, a.useRef)();
            o || void 0 === o || (0, r.default)(c);
            let d = (0, a.useCallback)(e => {
                c.current = e, u && (u.current = e)
            }, []);
            return (0, t.jsx)(i, {
                ref: d,
                className: (0, s.default)(l),
                "data-type": !1,
                children: e
            })
        });
        e.s(["Slice", 0, l])
    },
    92790, e => {
        "use strict";
        e.i(8508);
        var t = e.i(33568),
            r = e.i(74010);

        function s(e, a = []) {
            let l = (0, t.useScrollStore)(({
                lenis: e
            }) => e);
            (0, r.default)(() => {
                let t = t => {
                    l.__isStopped || e(t)
                };
                if (l) return l.on("scroll", t), e(l), () => {
                    l.off("scroll", t)
                }
            }, [l, e, [...a]])
        }
        e.s(["default", () => s])
    },
    88917, e => {
        "use strict";
        var t = e.i(53014),
            r = e.i(73249),
            s = e.i(50342),
            a = e.i(59861);
        e.i(50109);
        var l = e.i(78194),
            i = e.i(82792),
            o = e.i(92790),
            n = e.i(13396),
            u = e.i(74010);
        let c = {
            mediaQueries: Object.values(l.DeviceEnum),
            relativeRatio: !1,
            offset: [
                [.5, .5],
                [1, 0]
            ],
            easingFunction: e => e
        };
        e.s(["default", 0, (e, l, d = c, p = []) => {
            d = {
                ...c,
                ...d
            };
            let m = (0, t.useRef)(window.pageYOffset),
                h = (0, t.useRef)(!1),
                f = (0, i.default)(!0),
                g = (0, t.useRef)(0),
                w = (0, t.useRef)(0),
                _ = (0, t.useRef)(0),
                v = (0, t.useRef)(0),
                x = (0, t.useRef)(!1),
                A = d.offset[0],
                b = A[0],
                y = A[1],
                j = d.offset[1],
                N = j[0],
                W = j[1],
                k = (0, t.useRef)(null),
                T = (0, t.useRef)(null);
            (0, a.default)(e => {
                k.current = e
            }), (0, s.default)(e, t => {
                _.current = t.borderBoxSize?.[0]?.inlineSize || e.current.offsetWidth, v
                    .current = t.borderBoxSize?.[0]?.blockSize || e.current.offsetHeight, x
                    .current = !0
            }), (0, u.default)(() => {
                T.current = document.body
            }, []), (0, s.default)(T, () => {
                h.current = k.current && -1 !== d.mediaQueries.indexOf(k.current), h.current &&
                    (w.current = e.current ? (0, n.offsetTop)(e.current) : 0), x.current = !0
            }, [k.current]), (0, o.default)(({
                animatedScroll: e
            }) => {
                m.current = e || 0
            });
            let S = (0, t.useCallback)(() => {
                if (h.current && e.current && f.current.documentHeight && v.current) {
                    let e = x.current ? 1 : d.ease || 1,
                        t = b * v.current - y * f.current.documentHeight,
                        r = N * v.current - W * f.current.documentHeight;
                    g.current += ((m.current - (t + w.current)) / (r - t) - g.current) * e,
                        x.current = !1, l(d?.easingFunction ? d.easingFunction(g.current) :
                            g.current, {
                                easing: e,
                                originalRatio: g.current,
                                scrollY: m.current,
                                top: w.current,
                                height: v.current,
                                viewport: f.current
                            })
                } else g.current = 0, l(g.current, {
                    originalRatio: g.current,
                    scrollY: m.current,
                    top: w.current,
                    height: v.current,
                    viewport: f.current
                })
            }, p);
            (0, r.default)(S)
        }])
    },
    23687, e => {
        "use strict";
        var t = e.i(71448),
            r = e.i(70733),
            s = e.i(53014),
            a = e.i(35312);
        let l = {
            current: void 0
        };
        var i = e.i(88917);
        e.i(50109);
        var o = e.i(78194),
            n = e.i(97854);
        let u = (0, s.forwardRef)(({
            children: e,
            useViewportRatio: r,
            scaleToFit: u,
            offset: c = [
                [.5, .5],
                [1, 0]
            ],
            x: d = 0,
            y: p = 0,
            scaleInit: m = 1,
            rotateInit: h = 0,
            rotate: f = 0,
            className: g,
            easingFunction: w = e => e,
            transform: _,
            mediaQueries: v = Object.values(o.DeviceEnum),
            as: x = "div",
            unit: A = "px",
            disableTouchDevice: b = !0
        }, y) => {
            let j = (0, s.useRef)(null),
                N = (0, s.useRef)(h),
                W = (0, s.useRef)(0),
                k = (0, s.useRef)(0),
                T = (0, s.useRef)(0),
                S = (0, s.useRef)(null),
                I = (0, s.useRef)(null),
                R = (0, s.useRef)(!1),
                q = (0, a.default)(!0),
                O = !!b && (void 0 === l.current && (l.current = !window.matchMedia("(hover: hover)")
                    .matches), l.current);
            return (0, i.default)(j, (e, {
                scrollY: t,
                top: s,
                height: a,
                viewport: l,
                originalRatio: i
            }) => {
                if (W.current = a, !(v.includes(q?.current) && !1 === O)) return !1;
                let o = r ? d * l.innerWidth : d,
                    c = r ? p * l.documentHeight : p,
                    g = m;
                if (u) {
                    let e = (l.documentHeight - a) / 2,
                        t = l.documentHeight + a;
                    g += Math.max(1, (a + 2 * c * e / t * 2) / a) - 1
                }
                let w = s - t,
                    x = l.documentHeight;
                k.current = e * (void 0 !== d ? d : 0) * (r ? Math.abs(o) : 1), T.current = e *
                    (void 0 !== p ? p : 0) * (r ? Math.abs(c) : 1), (f || h) && (N.current = -
                        f * w / x + h);
                let b = {
                        x: (0, n.precision)(k.current),
                        y: (0, n.precision)(T.current),
                        rotate: f
                    },
                    y = w + T.current,
                    P = y + a >= 0 && y <= x || w + a >= 0 && w <= x,
                    M = {
                        ratio: e,
                        originalRatio: i,
                        ref: j,
                        top: s,
                        height: a,
                        viewport: l,
                        inView: P,
                        enabled: !1
                    },
                    C = N.current ? ` rotate(${N.current}deg)` : "";
                j.current && P && (b.x !== S.current || b.y !== I.current) ? (j.current.style
                        .transform = _ ? _(b, {
                            ...M,
                            enabled: !0
                        }) : `translate3d(${b.x}${A},${b.y}${A},0)${C} scale(${g})`, j.current
                        .style.willChange = "transform", R.current = !0) : j.current && !P && R
                    .current && (j.current.style.transform = _ ? _(b, M) :
                        `translate(${b.x}${A},${b.y}${A})${C} scale(${g})`, j.current.style
                        .willChange = "", R.current = !1), S.current = b.x, I.current = b.y
            }, {
                offset: c,
                easingFunction: w,
                mediaQueries: v
            }, [d, p, _, w]), (0, t.jsx)(x, {
                ref: e => {
                    j.current = e, y && (y.current = e)
                },
                className: g,
                children: e
            })
        });
        e.s(["ParallaxMedia", 0, ({
            as: e = "div",
            distance: s = 100,
            useViewportRatio: a = !1,
            clip: l = !0,
            offset: i = [
                [.5, .5],
                [1, 0]
            ],
            children: o,
            scrollProps: n = {},
            className: c,
            ...d
        }) => (0, t.jsx)(e, {
            ...d,
            className: (0, r.default)(c, l && "overflow-clip"),
            children: (0, t.jsx)(u, {
                ...n,
                y: s,
                useViewportRatio: a,
                offset: i,
                scaleToFit: !0,
                children: o
            })
        })], 23687)
    },
    84863, e => {
        "use strict";
        var t = e.i(71448),
            r = e.i(35312),
            s = e.i(88917),
            a = e.i(97854),
            l = e.i(70733),
            i = e.i(53014);
        e.s(["HorizontalScroller", 0, ({
            children: e,
            className: o
        }) => {
            let n = (0, i.useRef)(null),
                u = (0, r.default)(!0);
            return (0, s.default)(n, e => {
                if (n.current && u?.current)
                    if ("desktop" === u.current) {
                        let t = (0, a.clamp)(e, 0, 1);
                        n.current.style.transform =
                            `translate3d(calc(${-t} * (100% - var(--screenWidth))),0,0)`
                    } else n.current.style.transform = ""
            }, {
                offset: [
                    [0, 0],
                    [1, 1]
                ]
            }), (0, t.jsxs)("div", {
                ref: n,
                className: (0, l.default)("lg:flex lg:flex-col lg:w-max"),
                children: [(0, t.jsx)("div", {
                    className: (0, l.default)(
                        "lg:sticky lg:top-0 lg:h-screen lg:flex lg:w-max", o
                        ),
                    children: e
                }), (0, t.jsx)("div", {
                    className: "after:block after:pb-[calc(100%_-_var(--screenHeightMin))] lg-max:hidden"
                })]
            })
        }])
    },
    6907, e => {
        "use strict";
        var t = e.i(71448),
            r = e.i(53014),
            s = e.i(73533),
            a = e.i(70733),
            l = e.i(97854),
            i = e.i(73249);
        let o = ({
            filePath: o,
            progress: n = null,
            renderer: u = "canvas",
            loop: c = !0,
            autoplay: d = !0,
            className: p = ""
        }) => {
            let m = (0, r.useRef)(null),
                h = (0, r.useRef)(null),
                f = (0, r.useRef)(!1),
                [g, w] = (0, s.useInView)({
                    rootMargin: "20%"
                }),
                _ = (0, r.useCallback)(e => {
                    m.current = e, g(e)
                }, [g]);
            return (0, r.useEffect)(() => {
                !f.current && w ? (f.current = !0, e.A(80940).then(e => {
                    h.current = e.loadAnimation({
                        container: m.current,
                        renderer: u,
                        loop: c,
                        autoplay: !n && d,
                        path: o,
                        rendererSettings: {
                            preserveAspectRatio: "xMidYMid meet"
                        }
                    }), h.current.addEventListener("data_ready", () => {
                        m.current.classList.add("opacity-100")
                    })
                })) : h.current && (w ? h.current.play() : h.current.pause())
            }, [w, u, o, c, d]), (0, i.default)(() => {
                if (n && h?.current) {
                    let e = (0, l.lerp)(0, h.current.totalFrames, n.current);
                    h.current.goToAndStop(e, !0)
                }
            }), (0, r.useEffect)(() => () => {
                h.current && h.current.destroy()
            }, []), (0, t.jsx)("div", {
                ref: _,
                className: (0, a.default)(
                    "opacity-0 transition-opacity duration-500 ease-quart-out", p)
            })
        };
        e.s(["Lottie", 0, o, "default", 0, o])
    },
    21913, e => {
        "use strict";
        var t = e.i(71448),
            r = e.i(35312),
            s = e.i(50342),
            a = e.i(88917),
            l = e.i(97854),
            i = e.i(70733),
            o = e.i(53014);
        e.s(["ScrollTitle", 0, ({
            children: e,
            className: n
        }) => {
            let u = (0, o.useRef)(),
                c = (0, o.useRef)(null),
                d = (0, r.default)(!0),
                p = (0, o.useRef)(1),
                m = (0, o.useRef)(1);
            return (0, s.default)(c, e => {
                u.current && (p.current = m.current = e.contentRect.width / u.current
                    .offsetWidth)
            }), (0, a.default)(c, e => {
                if (u.current && d?.current)
                    if ("desktop" === d.current) {
                        let t = (0, l.clamp)(e, 0, 1);
                        m.current += (t - m.current) * .25, u.current.style.transform =
                            `translate3d(0,${(0,l.map)(m.current,0,1,-500,100)}%,0) scale(${(0,l.map)(m.current,0,1,p.current,1)})`
                    } else u.current.style.transform = ""
            }, {
                offset: [
                    [0, 0],
                    [1, .5]
                ]
            }), (0, t.jsx)("div", {
                className: "flex lg:h-[calc(var(--screenHeightMin)+20rem)] items-end",
                ref: c,
                children: (0, t.jsx)("h2", {
                    className: (0, i.default)(
                        "text-black font-sans font-light origin-bottom-left inline-block",
                        n),
                    "aria-hidden": !0,
                    ref: u,
                    children: e
                })
            })
        }])
    },
    97419, e => {
        "use strict";
        var t = e.i(71448),
            r = e.i(43482),
            s = e.i(57739),
            a = e.i(70733);
        let l = ({
            children: e,
            className: r,
            as: s
        }) => (0, t.jsx)(s || "span", {
            className: (0, a.default)("text-11 font-mono uppercase", "inline-flex items-center gap-6",
                "before:w-4 before:h-4 before:shrink-0 before:rounded-full before:bg-current before:mb-2",
                r),
            children: e
        });
        var i = e.i(43463),
            o = e.i(53014);
        let n = (0, o.forwardRef)(({
                image: e,
                partner: r,
                itemLength: a,
                index: o
            }, n) => (0, t.jsxs)("figure", {
                ref: n,
                className: "w-[calc(6*var(--column)+5*var(--gutter)+2*var(--margin))] h-fit lg:span-w-16",
                children: [e && (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(i.SanityImage, {
                        image: e,
                        width: 375,
                        height: 252,
                        mobileWidth: 375,
                        className: "w-full h-full aspect-[375/252]",
                        mobileOnly: !0
                    }), (0, t.jsx)(i.SanityImage, {
                        image: e,
                        width: 927,
                        height: 580,
                        desktopWidth: 927,
                        className: "w-full h-full aspect-[927/580]",
                        desktopOnly: !0
                    })]
                }), (0, t.jsxs)("figcaption", {
                    className: "w-full flex items-center justify-between gutter-gap-1 mt-10 lg-max:margin-px-1 font-mono text-10 text-black uppercase",
                    children: [e?.alt && (0, t.jsx)(l, {
                        children: e.alt
                    }), (0, t.jsxs)("span", {
                        children: ["[", o + 1, "/", a, "]"]
                    })]
                }), (0, t.jsxs)("div", {
                    className: "grid-container mt-30 flex flex-col gap-20 font-mono uppercase lg:hidden",
                    children: [r?.logo && (0, t.jsx)(i.SanityImage, {
                        image: r.logo,
                        width: 100,
                        height: 56,
                        mobileWidth: 100,
                        mobileOnly: !0,
                        className: "span-w-2"
                    }), (0, t.jsxs)("div", {
                        className: "w-full",
                        children: [r?.title && (0, t.jsx)(l, {
                            as: "h3",
                            children: r.title
                        }), r?.description && (0, t.jsx)("p", {
                            className: "mt-10 text-11 leading-[1.4] text-grey-dark",
                            children: r.description
                        })]
                    }), r?.cta && (0, t.jsx)(s.Button, {
                        linkInput: r.cta,
                        variant: "primary",
                        theme: "dark",
                        className: "w-fit",
                        children: r.cta?.label
                    })]
                })]
            }, o)),
            u = (0, o.forwardRef)(({
                partner: e
            }, r) => (0, t.jsxs)("div", {
                ref: r,
                className: "span-w-4 flex flex-col gap-20 font-mono uppercase",
                children: [e?.logo && (0, t.jsx)(i.SanityImage, {
                    image: e.logo,
                    width: 157,
                    height: 88,
                    desktopWidth: 157,
                    desktopOnly: !0,
                    className: "span-w-3"
                }), (0, t.jsxs)("div", {
                    className: "mt-20",
                    children: [e?.title && (0, t.jsx)("h3", {
                        className: "text-24 leading-tight uppercase",
                        children: e.title
                    }), e?.description && (0, t.jsx)("p", {
                        className: "mt-20 text-11 leading-[1.4] text-grey-dark",
                        children: e.description
                    })]
                }), e?.cta && (0, t.jsx)(s.Button, {
                    linkInput: e.cta,
                    variant: "primary",
                    theme: "dark",
                    className: "w-fit",
                    children: e.cta?.label
                })]
            }));
        e.s(["PartnerGallerySlideshow", 0, ({
            slideshowImage: e,
            partners: s
        }) => {
            let l = (0, o.useRef)(null),
                [i, c] = (0, o.useState)(0);
            return (0, t.jsxs)("div", {
                className: "pb-60 lg:grid-container lg:grid lg:grid-cols-[auto_1fr] lg:span-gap-2-wider",
                children: [(0, t.jsx)(r.Slideshow, {
                    className: "w-full lg:span-w-16 overflow-clip",
                    wrapperClassName: "gutter-gap-1",
                    containerClassName: "w-full h-full",
                    snapping: !0,
                    withButtons: e.length > 1,
                    onChange: e => {
                        l.current && (c(e), l.current.setIndex(e))
                    },
                    controllerClassName: "margin-left-1 margin-right-1 lg:inset-x-20 !top-100 lg:!top-1/2 justify-between !translate-y-0 lg:!-translate-y-1/2 !translate-x-auto !first:ml-40",
                    controllerButtonClassName: (0, a.default)(
                        "!text-black hover:!text-white", 0 === i &&
                        "first:opacity-0", i === e.length - 1 &&
                        "last:opacity-0"),
                    controllerButtonTheme: "light",
                    controllerButtonVariant: "primary",
                    children: !!e?.length && e.map((r, a) => (0, t.jsx)(n, {
                        index: a,
                        image: r,
                        partner: s[a],
                        itemLength: e.length
                    }, `slideshow-1-${a}`))
                }), (0, t.jsx)(r.Slideshow, {
                    ref: l,
                    className: "overflow-clip span-w-4 lg-max:hidden",
                    preventDrag: !0,
                    snapping: !0,
                    children: !!s?.length && s.map((e, r) => (0, t.jsx)(u, {
                        partner: e
                    }, `slideshow-2-${r}`))
                })]
            })
        }], 97419)
    },
    78006, e => {
        "use strict";
        var t = e.i(71448),
            r = e.i(53014);
        e.i(8508);
        var s = e.i(33568),
            a = e.i(74010),
            l = e.i(57739),
            i = e.i(23687),
            o = e.i(43463),
            n = e.i(37619),
            u = e.i(70733);
        let c = e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 *
                e + 10)) / 2,
            d = ({
                index: e,
                title: s,
                text: i,
                opened: o,
                hovered: c,
                onClick: d,
                onMouseEnter: p,
                onMouseLeave: m
            }) => {
                let h = (0, r.useRef)(),
                    f = (0, r.useRef)();
                return (0, a.default)(() => {
                    n.gsap.to(f.current, {
                        height: o ? "auto" : 0,
                        duration: .75,
                        ease: "power4.out"
                    })
                }, [o]), (0, t.jsxs)("div", {
                    onMouseEnter: p,
                    onMouseLeave: m,
                    ref: h,
                    className: (0, u.default)(
                        "font-mono uppercase transition-[opacity] duration-300 ease-quart-out"),
                    children: [(0, t.jsx)(l.Button, {
                        onClick: d,
                        className: (0, u.default)("pb-5 [--line-width:100%]",
                            "transition-[padding] duration-[.75s] ease-quart-out", o &&
                            e > 0 && "pt-15"),
                        children: (0, t.jsx)("h2", {
                            className: (0, u.default)(
                                "text-16 whitespace-nowrap lg:text-24 leading-none uppercase",
                                "[--thickness:1.5px] pb-[0em] -mb-[0em]",
                                "bg-gradient-to-r from-current to-current bg-no-repeat",
                                "transition-[background-size] duration-[.75s] ease-quart-inout",
                                "bg-[position:0_100%] bg-[length:var(--line-width)_var(--thickness)]",
                                o && "bg-[position:100%_100%] [--line-width:0%]"
                                ),
                            children: s
                        })
                    }), (0, t.jsx)("div", {
                        className: (0, u.default)(
                            "text-11 overflow-hidden h-0 lg:span-w-7"),
                        ref: f,
                        children: (0, t.jsx)("p", {
                            className: "mt-12 mb-20",
                            children: i
                        })
                    })]
                })
            };
        e.s(["FASlides", 0, ({
            slides: e
        }) => {
            let a = (0, r.useRef)(),
                [l, n] = (0, r.useState)(0),
                [p, m] = (0, r.useState)(null),
                h = (0, s.useScrollStore)(e => e.scrollTo),
                f = e => {
                    m(null)
                };
            return (0, t.jsxs)("div", {
                className: "slides",
                ref: a,
                children: [(0, t.jsx)("div", {
                    className: "absolute left-0 top-0 w-full h-full",
                    children: (0, t.jsx)(i.ParallaxMedia, {
                        distance: 200,
                        className: "absolute top-0 z-1 w-full h-full",
                        scrollProps: {
                            className: "w-full h-full"
                        },
                        children: e.map((e, r) => (0, t.jsxs)("div", {
                            className: (0, u.default)(
                                "absolute w-full h-full transition-opacity duration-1000 ease-expo-out",
                                r === l ?
                                "opacity-100" :
                                "opacity-0"),
                            children: [(0, t.jsx)(o
                                .SanityImage, {
                                    className: "w-full h-full md-max:hidden",
                                    width: 1440,
                                    height: 900,
                                    image: e
                                        .backgroundImage,
                                    fill: !0
                                }), (0, t.jsx)(o
                                .SanityImage, {
                                    className: "w-full h-full",
                                    width: 375,
                                    height: 800,
                                    image: e
                                        .backgroundImage,
                                    mobileOnly: !0,
                                    fill: !0
                                })]
                        }, r))
                    })
                }), (0, t.jsx)("div", {
                    className: "absolute left-0 top-0 w-full h-full",
                    children: (0, t.jsx)(i.ParallaxMedia, {
                        distance: -150,
                        className: "absolute top-0 z-2 w-full h-full",
                        scrollProps: {
                            className: "w-full h-full flex justify-end md-max:justify-start md-max:items-end"
                        },
                        children: e.map((e, r) => (0, t.jsxs)("div", {
                            className: (0, u.default)(
                                "grid absolute margin-m-1 span-w-5 tablet:span-w-3",
                                "md-max:grid-cols-2 md-max:span-w-6 md-max:gap-4",
                                r === l ?
                                "opacity-100" :
                                "opacity-0 hidden"),
                            children: [e.visuels?.visuel &&
                                (0, t.jsxs)("div", {
                                    className: "visuel md-max:flex md-max:items-center w-full md:mb-10 p-10 backdrop-blur-2xl border border-white/5 md-max:row-span-3",
                                    children: [(0, t
                                            .jsx
                                            )(
                                            "div", {
                                                className: "mix-blend-screen",
                                                children: (
                                                        0,
                                                        t
                                                        .jsx
                                                        )
                                                    (o.SanityImage, {
                                                        className: "width-full",
                                                        image: e
                                                            .visuels
                                                            .visuel,
                                                        desktopWidth: 276,
                                                        mobileWidth: 168
                                                    })
                                            }),
                                        (0, t
                                            .jsx
                                            )(
                                            "div", {
                                                className: "text-center font-mono uppercase text-9 mt-15 md-max:hidden",
                                                children: e
                                                    .visuelCaption
                                            })
                                    ]
                                }), e.visuels?.graph1 &&
                                (0, t.jsx)("div", {
                                    className: "graph1 w-full md:mb-10 shadow-2xl backdrop-blur-2xl border border-white/5",
                                    children: (0, t
                                        .jsx)(o
                                        .SanityImage, {
                                            className: "",
                                            image: e
                                                .visuels
                                                .graph1
                                        })
                                }), e.visuels?.graph2 &&
                                (0, t.jsx)("div", {
                                    className: "graph2 w-full md:mb-10 shadow-2xl backdrop-blur-2xl border border-white/5 md-max:row-span-2",
                                    children: (0, t
                                        .jsx)(o
                                        .SanityImage, {
                                            className: "",
                                            image: e
                                                .visuels
                                                .graph2
                                        })
                                })
                            ]
                        }, r))
                    })
                }), (0, t.jsx)("div", {
                    className: "absolute z-3 left-0 top-50 md:span-w-6 lg:top-0 margin-p-1 lg:span-w-8 flex flex-col",
                    children: e.map((e, r) => (0, t.jsx)(d, {
                        index: r,
                        title: e.title,
                        text: e.text,
                        opened: r === l,
                        hovered: null === p || r === p,
                        onClick: () => {
                            h(a.current, {
                                duration: 1,
                                easing: c
                            }), n(r)
                        },
                        onMouseEnter: () => {
                            m(r)
                        },
                        onMouseLeave: f
                    }, r))
                })]
            })
        }])
    },
    60856, e => {
        e.v({
            data: "biopod-module-scss-module__I3vg-q__data",
            dataPanel: "biopod-module-scss-module__I3vg-q__dataPanel",
            dataTitle: "biopod-module-scss-module__I3vg-q__dataTitle",
            dataValue: "biopod-module-scss-module__I3vg-q__dataValue",
            dataWrapper: "biopod-module-scss-module__I3vg-q__dataWrapper",
            highlight: "biopod-module-scss-module__I3vg-q__highlight",
            image: "biopod-module-scss-module__I3vg-q__image",
            layer: "biopod-module-scss-module__I3vg-q__layer",
            layerDesc: "biopod-module-scss-module__I3vg-q__layerDesc",
            layerImage: "biopod-module-scss-module__I3vg-q__layerImage",
            layerOutline: "biopod-module-scss-module__I3vg-q__layerOutline",
            layerTitle: "biopod-module-scss-module__I3vg-q__layerTitle",
            layerTitles: "biopod-module-scss-module__I3vg-q__layerTitles",
            layers: "biopod-module-scss-module__I3vg-q__layers",
            outline: "biopod-module-scss-module__I3vg-q__outline",
            sticky: "biopod-module-scss-module__I3vg-q__sticky",
            stickyWrapper: "biopod-module-scss-module__I3vg-q__stickyWrapper",
            title: "biopod-module-scss-module__I3vg-q__title",
            wrapper: "biopod-module-scss-module__I3vg-q__wrapper"
        })
    },
    35535, e => {
        "use strict";
        var t = e.i(71448),
            r = e.i(53014),
            s = e.i(43463),
            a = e.i(64360),
            l = e.i(67983),
            i = e.i(37619),
            o = e.i(60856);
        class n {
            constructor(e) {
                this.wrapper = document.querySelector(`.${o.default.wrapper}`), this.biopod = this.wrapper
                    .querySelector(".biopod-visuel"), this.scale = this.wrapper.querySelector(
                        ".biopod-scale"), this.title = this.wrapper.querySelector(`.${o.default.title}`),
                    this.layers = this.wrapper.querySelector(`.${o.default.layers}`), this.layerDivs = this
                    .wrapper.querySelectorAll(`.${o.default.layer}`), this.layerTitles = this.wrapper
                    .querySelectorAll(`.${o.default.layerTitle}, .${o.default.layerDesc}`), this.dataPanel =
                    this.wrapper.querySelector(`.${o.default.dataWrapper}`), this.dataTitles = this.wrapper
                    .querySelectorAll(`.${o.default.dataTitle}, .${o.default.dataValue}`), this
                    .desktopMedia = `(min-width: ${l.screens.md}px)`, this.mobileMedia =
                    `(max-width: ${l.screens.md-1}px)`, this.allMedia = {
                        isDesktop: this.desktopMedia,
                        isMobile: this.mobileMedia
                    }, this.init()
            }
            init() {
                this.setScrollTrigger()
            }
            destroy() {
                this.mm.revert()
            }
            setScrollTrigger() {
                this.mm = i.gsap.matchMedia(), this.mm.add(this.desktopMedia, () => {
                    let e = i.gsap.timeline({
                        paused: !0,
                        scrollTrigger: {
                            trigger: this.wrapper,
                            start: "top 150%",
                            end: "top 15%",
                            scrub: !0
                        }
                    });
                    e.fromTo(this.biopod, {
                        scale: 1.5
                    }, {
                        scale: 1,
                        duration: 1,
                        ease: "power1.inOut"
                    }, 0), e.fromTo(this.biopod, {
                        y: "-10vw"
                    }, {
                        y: 0,
                        duration: 1,
                        ease: "power1.inOut"
                    }, 0), i.gsap.timeline({
                        paused: !0,
                        scrollTrigger: {
                            trigger: this.wrapper,
                            start: "top 10%",
                            end: "top -80%",
                            scrub: !0
                        }
                    }).fromTo(this.title, {
                        y: "15rem"
                    }, {
                        y: 0,
                        duration: 1,
                        ease: "power1.out"
                    }, 0);
                    let t = i.gsap.timeline({
                        paused: !0,
                        scrollTrigger: {
                            trigger: this.layers,
                            start: "top 40%",
                            end: "top 0%",
                            scrub: !0
                        }
                    });
                    t.fromTo(this.dataPanel, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        duration: 1,
                        ease: "power4.inOut"
                    }, 0), t.fromTo(this.dataTitles, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        duration: .3,
                        stagger: .2,
                        ease: "power1.inOut"
                    }, 0);
                    let r = i.gsap.timeline({
                        paused: !0,
                        scrollTrigger: {
                            trigger: this.layers,
                            start: "bottom 150%",
                            end: "bottom 50%",
                            scrub: !0
                        }
                    });
                    r.fromTo(this.dataPanel, {
                        autoAlpha: 1
                    }, {
                        autoAlpha: 0,
                        duration: .7,
                        ease: "power1.inOut"
                    }, .3), r.fromTo(this.dataPanel, {
                        y: 0
                    }, {
                        y: "-50vh",
                        duration: 1,
                        ease: "power1.in"
                    }, 0);
                    let s = i.gsap.timeline({
                        paused: !0,
                        scrollTrigger: {
                            trigger: this.layers,
                            start: "top 80%",
                            end: "bottom 130%",
                            scrub: 1
                        }
                    });
                    return s.fromTo(this.layerDivs, {
                        y: "33vh"
                    }, {
                        y: 0,
                        duration: 1,
                        stagger: .3,
                        ease: "power1.out"
                    }, 0), s.fromTo(this.layerDivs, {
                        "--mask-progress": 0
                    }, {
                        "--mask-progress": 1,
                        duration: .3,
                        stagger: .3,
                        ease: "power1.in"
                    }, .45), s.fromTo(this.layerTitles, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        duration: .3,
                        stagger: .15,
                        ease: "power1.inOut"
                    }, .5), () => {}
                })
            }
        }
        var u = e.i(70733),
            c = e.i(60457);
        let d = e => {
                let {
                    title: r,
                    values: s
                } = e || {};
                return (0, t.jsxs)("div", {
                    className: o.default.data,
                    children: [(0, t.jsx)("div", {
                        className: o.default.dataTitle,
                        children: r
                    }), s.map(e => (0, t.jsx)("div", {
                        className: o.default.dataValue,
                        children: e
                    }, e))]
                })
            },
            p = e => {
                let {
                    index: a,
                    title: l,
                    description: i,
                    image: n
                } = e || {}, c = (0, r.useRef)(), d = (0, r.useRef)(), [p, m] = (0, r.useState)(!1);
                (0, r.useEffect)(() => {
                    if (c.current) return d.current = new IntersectionObserver(h, {
                        rootMargin: "-50% 0px -50% 0px"
                    }), d.current.observe(c.current), () => {
                        d.current && d.current.disconnect()
                    }
                }, []);
                let h = e => {
                    e.forEach(e => {
                        e.isIntersecting ? m(!0) : e.isIntersecting || m(!1)
                    })
                };
                return (0, t.jsxs)("div", {
                    className: (0, u.default)(o.default.layer, p && o.default.highlight),
                    style: {
                        zIndex: 10 - a
                    },
                    ref: c,
                    children: [(0, t.jsxs)("div", {
                        className: o.default.layerTitles,
                        children: [(0, t.jsx)("div", {
                            className: o.default.layerOutline,
                            children: (0, t.jsx)("div", {
                                className: o.default.outline
                            })
                        }), (0, t.jsx)("div", {
                            className: o.default.layerTitle,
                            children: l
                        }), (0, t.jsx)("div", {
                            className: o.default.layerDesc,
                            children: i
                        })]
                    }), (0, t.jsx)("div", {
                        className: o.default.layerImage,
                        children: (0, t.jsx)(s.SanityImage, {
                            image: n,
                            width: 394,
                            height: 222,
                            desktopWidth: 400,
                            mobileWidth: 350
                        })
                    })]
                })
            };
        e.s(["BiopodContent", 0, e => {
            let {
                biopodVisuel: l,
                title: i,
                data: m,
                layers: h
            } = e || {}, f = (0, r.useRef)(), g = (0, r.useRef)();
            return (0, c.default)(f), (0, r.useEffect)(() => (void 0 === g.current ? g.current =
                new n({}) : g.current.init(), () => {
                    g.current.destroy()
                }), []), (0, t.jsxs)(a.Slice, {
                isDark: !1,
                className: o.default.wrapper,
                ...e,
                ref: f,
                children: [(0, t.jsxs)("div", {
                    className: "md-max:grid-container",
                    children: [(0, t.jsxs)("div", {
                        className: "relative biopod-scale w-[72vw] md-max:w-[100%] md-max:z-1",
                        children: [(0, t.jsx)(s.SanityImage, {
                            className: "max-w-none w-full md-max:hidden",
                            image: l.scale
                        }), (0, t.jsx)(s.SanityImage, {
                            className: "hidden max-w-none w-[45.8vw] md-max:block",
                            image: l.mobileScale
                        })]
                    }), (0, t.jsx)("div", {
                        className: (0, u.default)("biopod-visuel",
                            "absolute top-[.49vw] left-1/2 -translate-x-1/2 w-[55.5vw]",
                            "md-max:top-[2.8vw] md-max:w-[74vw] md-max:z-0"
                            ),
                        children: (0, t.jsx)(s.SanityImage, {
                            className: "max-w-none w-full",
                            image: l.visuel,
                            quality: 90,
                            desktopWidth: 2160,
                            mobileWidth: 500
                        })
                    })]
                }), (0, t.jsx)("h2", {
                    className: o.default.title,
                    children: i
                }), (0, t.jsx)("div", {
                    className: o.default.stickyWrapper,
                    children: (0, t.jsx)("div", {
                        className: o.default.sticky,
                        children: (0, t.jsx)("div", {
                            className: o.default.dataWrapper,
                            children: (0, t.jsxs)("div", {
                                className: o.default
                                    .dataPanel,
                                children: [(0, t.jsx)(
                                d, {
                                    title: m
                                        .dimensions
                                        .title,
                                    values: [
                                        m
                                        .dimensions
                                        .width,
                                        m
                                        .dimensions
                                        .height,
                                        m
                                        .dimensions
                                        .length
                                    ]
                                }), (0, t.jsx)(
                                    d, {
                                        title: m
                                            .capacity
                                            .title,
                                        values: [
                                            m
                                            .capacity
                                            .value
                                        ]
                                    }), (0, t
                                    .jsx)(d, {
                                    title: m
                                        .weight
                                        .title,
                                    values: [
                                        m
                                        .weight
                                        .value
                                    ]
                                })]
                            })
                        })
                    })
                }), (0, t.jsx)("div", {
                    className: o.default.layers,
                    children: h.map((e, r) => (0, t.jsx)(p, {
                        index: r,
                        ...e
                    }, e._key))
                })]
            })
        }], 35535)
    },
    33160, e => {
        e.v({
            loopFixed: "goals-module-scss-module__TZaWqW__loopFixed",
            loopOutline: "goals-module-scss-module__TZaWqW__loopOutline",
            loopOutline1: "goals-module-scss-module__TZaWqW__loopOutline1",
            loopOutline2: "goals-module-scss-module__TZaWqW__loopOutline2",
            loopWrapper: "goals-module-scss-module__TZaWqW__loopWrapper",
            sticky: "goals-module-scss-module__TZaWqW__sticky",
            text: "goals-module-scss-module__TZaWqW__text",
            video: "goals-module-scss-module__TZaWqW__video",
            videoLoop: "goals-module-scss-module__TZaWqW__videoLoop",
            videoSequence: "goals-module-scss-module__TZaWqW__videoSequence",
            videoWrapper: "goals-module-scss-module__TZaWqW__videoWrapper",
            wrapper: "goals-module-scss-module__TZaWqW__wrapper"
        })
    },
    18303, e => {
        "use strict";
        var t = e.i(71448),
            r = e.i(53014),
            s = e.i(35312),
            a = e.i(73533),
            l = e.i(47982);
        let i = {
                current: null
            },
            o = (e, t) => new Promise(r => {
                let s = new Image;
                s.onload = () => r(e), s.onerror = () => r(null), s.src = `data:image/${e};base64,${t}`
            }),
            n = ({
                src: e,
                formats: t,
                quality: r,
                mode: s,
                priority: a = "low",
                signal: l,
                withBitmap: i,
                crossorigin: o
            }) => "createImageBitmap" in window && i ? (({
                src: e,
                formats: t,
                quality: r,
                mode: s,
                priority: a
            }) => fetch(-1 === e.indexOf("http") ? (self ? self.location.origin : window.location.origin) +
                e : e, {
                    headers: {
                        accept: `${t};q=${.01*r}`
                    },
                    mode: s,
                    priority: a
                }).then(e => e.blob()).then(e => createImageBitmap(e, {
                premultiplyAlpha: "none",
                colorSpaceConversion: "none"
            })).catch(console.warn.bind(null, "fetchBitmap error")))({
                src: e,
                formats: t,
                quality: r,
                mode: s,
                priority: a
            }) : new Promise((t, r) => {
                let s = new Image;
                l?.addEventListener("abort", () => {
                    s.src = "", r(new DOMException("Aborted"))
                }), s.fetchPriority = a, s.decoding = "high" === a ? "sync" : "async", o && (s
                    .crossOrigin = ""), s.onerror = () => r(s), s.onload = () => {
                    requestAnimationFrame(() => {
                        s.decode().then(() => {
                            t(s)
                        }).catch(() => {
                            t(s)
                        })
                    })
                }, s.src = e
            }),
            u = {
                current: ""
            },
            c = async () => (u.current || (u.current = (await Promise.all([o("avif",
                    "AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAEcbWV0YQAAAAAAAABIaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGNhdmlmIC0gaHR0cHM6Ly9naXRodWIuY29tL2xpbmstdS9jYXZpZgAAAAAeaWxvYwAAAAAEQAABAAEAAAAAAUQAAQAAABcAAAAqaWluZgEAAAAAAAABAAAAGmluZmUCAAAAAAEAAGF2MDFJbWFnZQAAAAAOcGl0bQAAAAAAAQAAAHJpcHJwAAAAUmlwY28AAAAQcGFzcAAAAAEAAAABAAAAFGlzcGUAAAAAAAAAAQAAAAEAAAAQcGl4aQAAAAADCAgIAAAAFmF2MUOBAAwACggYAAYICGgIIAAAABhpcG1hAAAAAAAAAAEAAQUBAoMDhAAAAB9tZGF0CggYAAYICGgIIBoFHiAAAEQiBACwDoA="
                    ), o("webp",
                    "UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=")])).concat("*")
                .filter(Boolean).map(e => `image/${e}`).join(",")), u.current);
        var d = e.i(97854),
            p = e.i(70733),
            m = e.i(99030);
        let h = [640, 960, 1200, 1920],
            f = (0, r.forwardRef)(({
                url: e,
                className: o,
                canvasClassName: u,
                style: f,
                width: g,
                height: w,
                quality: _ = 75,
                mode: v = "same-origin",
                from: x = 0,
                frames: A,
                pad: b = 4,
                fileType: y = "jpg",
                transparent: j = !1,
                withBitmap: N = !1,
                withWorker: W = !1,
                withOffscreenCanvas: k = !1,
                imageSmoothing: T = !0,
                hiDPI: S = !1,
                batchCount: I,
                eagerThreshold: R = .25,
                steps: q = [1],
                loader: O = m.nextJsLoader,
                scaleMode: P = "auto",
                onChange: M,
                threshold: C = 0,
                canvasRef: $,
                rootMargin: E = "100% 0px",
                isCanvasFixed: B = !1,
                isCanvasSticky: G = !1,
                canvasSize: L
            }, D) => {
                let H = (0, r.useRef)(null),
                    z = (0, r.useRef)([]),
                    F = (0, r.useRef)([]),
                    Z = (0, r.useRef)(null),
                    Q = (0, r.useRef)(),
                    U = (0, r.useRef)(0),
                    Y = (0, r.useRef)(h[h.length - 1]),
                    V = (0, r.useRef)(new AbortController),
                    J = (0, r.useRef)(),
                    X = (0, r.useRef)(!1),
                    K = (0, r.useRef)({
                        width: g,
                        height: w
                    }),
                    ee = (0, s.default)(!0);
                (0, r.useEffect)(() => {
                    Z.current && (Q.current = Z.current.getContext("2d", {
                        alpha: j
                    }))
                }, [Z, j]), (0, r.useEffect)(() => () => {
                    V.current?.abort()
                }, []);
                let et = e => {
                        let t = z.current[e];
                        if (t && Q.current) {
                            let e, r, s = S ? window.devicePixelRatio : 1,
                                a = Q.current.canvas.width / s,
                                l = Q.current.canvas.height / s,
                                i = a / l,
                                o = t.width / t.height;
                            "cover" === P ? i > o ? r = (e = a) / o : e = (r = l) * o : "contain" === P ?
                                i < o ? r = (e = a) / o : e = (r = l) * o : (e = t.width, r = t.height);
                            let n = a / 2 - e / 2,
                                u = l / 2 - r / 2;
                            Q.current.scale(s, s), (j || ["png"].includes(y)) && Q.current.clearRect(0, 0,
                                a, l), Q.current.imageSmoothingEnabled = T, Q.current.drawImage(t, 0, 0,
                                t.width, t.height, Math.floor(n), Math.floor(u), Math.ceil(e), Math
                                .ceil(r)), Q.current.restore()
                        }
                    },
                    er = async () => {
                        let t = [],
                            r = [],
                            s = [],
                            a = {
                                current: 0
                            },
                            l = {
                                current: 0
                            },
                            o = {
                                current: !1
                            },
                            u = {
                                current: 1
                            };
                        J.current || (J.current = await c());
                        let d = async t => {
                            let r = O({
                                url: `${e}${(t+x).toString().padStart(b,"0")}.${y}`,
                                width: Y.current,
                                quality: _
                            });
                            if (F.current[t] !== r) {
                                a.current += 1, F.current[t] = r;
                                let e = {
                                        src: r,
                                        formats: J.current,
                                        quality: _,
                                        mode: v,
                                        priority: o.current ? "low" : "high",
                                        withBitmap: N
                                    },
                                    s = W ? await (e => {
                                        if ("createImageBitmap" in window && e.withBitmap) {
                                            let t;
                                            return i.current || (t = () => {
                                                self.addEventListener("message",
                                                    e => {
                                                        let {
                                                            src: t,
                                                            formats: r =
                                                                "image/*,*/*",
                                                            quality: s = 75,
                                                            mode: a =
                                                                "same-origin",
                                                            priority: l
                                                        } = e.data;
                                                        fetch(-1 === t.indexOf(
                                                                "http") ?
                                                            self.location
                                                            .origin + t :
                                                            t, {
                                                                headers: {
                                                                    accept: `${r};q=${.01*s}`
                                                                },
                                                                mode: a,
                                                                priority: l
                                                            }).then(e => e
                                                            .blob()).then(
                                                            e =>
                                                            createImageBitmap(
                                                                e, {
                                                                    premultiplyAlpha: "none",
                                                                    colorSpaceConversion: "none"
                                                                })).then(
                                                            e => self
                                                            .postMessage({
                                                                src: t,
                                                                bitmap: e
                                                            }, [e])).catch(
                                                            console.warn
                                                            .bind(null,
                                                                "loadImageWithWorker error"
                                                                ))
                                                    })
                                            }, i.current = new Worker(URL
                                                .createObjectURL(new Blob([
                                                    `(${t})()`
                                                ])))), new Promise((t, r) => {
                                                let s = a => {
                                                    a.data.src === e.src && (i
                                                        .current
                                                        ?.removeEventListener(
                                                            "message", s), a
                                                        .data.error && r(a
                                                            .data.error), t(
                                                            a.data.bitmap))
                                                };
                                                i.current?.addEventListener(
                                                        "message", s), i.current
                                                    ?.postMessage(e)
                                            })
                                        }
                                        return n(e)
                                    })(e) : await n({
                                        ...e,
                                        signal: V.current?.signal
                                    });
                                s && (z.current[t] = s)
                            }
                            return U.current === t && et(t), l.current += 1, !o.current && l
                                .current >= A * R && (o.current = !0), t
                        };
                        for (; r.length < Math.round(A) - 1;) {
                            for (let e = 0; e < A; e++) e % Math.round(A / u.current) != 0 || r
                                .includes(e) || r.push(e);
                            u.current += 1
                        }
                        if (I) {
                            for (let e = 0; e < A; e++) {
                                let t = r[e];
                                for (let e = 0; e < q.length; e++)
                                    if (t % q[e] == 0) {
                                        s.push(t);
                                        break
                                    }
                            }
                            let e = async e => {
                                let r = d(e).then(() => {
                                    let r;
                                    return (r = t.findIndex(t => t.index === e)) > -1 &&
                                        t.splice(r, 1), a.current -= 1, e
                                });
                                t.push({
                                    promise: r,
                                    index: e
                                })
                            };
                            for (let r = 0; r < s.length; r++) a.current > I && await Promise.any(t.map(
                                e => e.promise)), e(s[r])
                        } else r.forEach(e => d(e))
                    };
                (0, r.useImperativeHandle)(D, () => ({
                    ref: H.current,
                    setProgress: e => {
                        let t = (0, d.clamp)(e * A | 0, 0, A - 1);
                        t !== U.current && (et(t), M && M({
                            ratio: e,
                            index: t
                        })), U.current = t
                    }
                }), []), (0, l.default)(e => {
                    let t = e.offsetWidth,
                        r = e.documentHeight;
                    if (Z.current && t && r) {
                        let e = h.filter(e => e > t),
                            s = e.length ? e[0] : h[h.length - 1];
                        s !== Y.current && X.current && er(), Y.current = s;
                        let a = S ? window.devicePixelRatio : 1;
                        K.current = {
                                width: t * a * (L?.[ee?.current]?.width || 1),
                                height: r * a * (L?.[ee?.current]?.height || 1)
                            }, Z.current.width = K.current.width, Z.current.height = K.current.height,
                            et(U.current)
                    }
                }, !0);
                let es = (0, r.useCallback)(e => {
                        H.current = e, ei(e)
                    }, []),
                    ea = (0, r.useCallback)(e => {
                        e && (Z.current = e, $ && ($.current = e))
                    }, [k]),
                    el = async e => {
                        X.current = e, e && er()
                    }, {
                        ref: ei
                    } = (0, a.useInView)({
                        threshold: C,
                        rootMargin: E,
                        triggerOnce: !0,
                        onChange: el
                    });
                return (0, t.jsx)("div", {
                    className: o,
                    style: f,
                    ref: es,
                    children: (0, t.jsx)("canvas", {
                        ref: ea,
                        width: K.current.width,
                        height: K.current.height,
                        className: (0, p.default)("block", u, G && "sticky", B && "fixed")
                    })
                })
            });
        var g = e.i(87128),
            w = e.i(64360),
            _ = e.i(67983),
            v = e.i(39906),
            x = e.i(37619),
            A = e.i(33160);
        class b {
            constructor(e) {
                this.wrapper = document.querySelector(`.${A.default.wrapper}`), this.sequenceWrapper = this
                    .wrapper.querySelector(`.${A.default.videoSequence}`), this.loopWrapper = this.wrapper
                    .querySelector(`.${A.default.loopWrapper}`), this.outline1 = this.wrapper.querySelector(
                        `.${A.default.loopOutline1}`), this.outline2 = this.wrapper.querySelector(
                        `.${A.default.loopOutline2}`), this.textWrapper = this.wrapper.querySelector(
                        `.${A.default.text}`), this.words = this.textWrapper.querySelectorAll("span"), this
                    .sequence = e.sequence, this.sequenceProgress = 0, this.desktopMedia =
                    `(min-width: ${_.screens.md}px)`, this.mobileMedia = `(max-width: ${_.screens.md-1}px)`,
                    this.allMedia = {
                        isDesktop: this.desktopMedia,
                        isMobile: this.mobileMedia
                    }, this.init()
            }
            init() {
                this.setScrollTrigger()
            }
            destroy() {
                this.mm.revert()
            }
            set sequenceProgress(e) {
                this._sequenceProgress = e, this.sequence.setProgress(e)
            }
            get sequenceProgress() {
                return this._sequenceProgress
            }
            setScrollTrigger() {
                this.mm = x.gsap.matchMedia(), this.mm.add(this.allMedia, () => {
                    x.gsap.timeline({
                        paused: !0,
                        scrollTrigger: {
                            trigger: this.wrapper,
                            start: "top -75%",
                            end: "bottom 80%",
                            scrub: !0
                        }
                    }).fromTo(this, {
                        sequenceProgress: 0
                    }, {
                        sequenceProgress: 1,
                        duration: 1,
                        ease: "linear"
                    }, 0);
                    let e = x.gsap.timeline({
                        paused: !0,
                        scrollTrigger: {
                            trigger: this.wrapper,
                            start: "top 30%",
                            end: "top -100%",
                            toggleActions: "play reset play none"
                        }
                    });
                    e.fromTo(this.outline1, {
                        scale: .5
                    }, {
                        scale: 1,
                        duration: 1,
                        ease: "expo.out"
                    }, 0), e.fromTo(this.outline2, {
                        scale: .5
                    }, {
                        scale: 1,
                        duration: 1,
                        ease: "expo.out"
                    }, .8), v.ScrollTrigger.create({
                        animation: e,
                        trigger: this.wrapper,
                        start: "top 90%",
                        toggleActions: "none none none reset"
                    });
                    let t = x.gsap.timeline({
                        paused: !0,
                        scrollTrigger: {
                            trigger: this.wrapper,
                            start: "top 100%",
                            end: "top -100%",
                            scrub: !0
                        }
                    });
                    t.fromTo(this.loopWrapper, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        duration: .5,
                        ease: "power2.inOut"
                    }, 0), t.fromTo(this.loopWrapper, {
                        y: "30vh"
                    }, {
                        y: 0,
                        duration: 1,
                        ease: "power2.out"
                    }, 0), t.fromTo(this.loopWrapper, {
                        scale: 1
                    }, {
                        scale: 0,
                        duration: 1.5,
                        ease: "power2.in"
                    }, .5), t.fromTo(this.loopWrapper, {
                        autoAlpha: 1
                    }, {
                        autoAlpha: 0,
                        duration: .5,
                        ease: "power1.in"
                    }, 1.3), x.gsap.timeline({
                        paused: !0,
                        scrollTrigger: {
                            trigger: this.textWrapper,
                            start: "top 80%",
                            end: "bottom 65%",
                            scrub: !0
                        }
                    }).fromTo(this.words, {
                        color: "#696969"
                    }, {
                        color: "white",
                        duration: .5,
                        eas: "linear",
                        stagger: .06
                    }, 0);
                    let r = x.gsap.timeline({
                        paused: !0,
                        scrollTrigger: {
                            trigger: this.wrapper,
                            start: "bottom 100%",
                            end: "bottom 0%",
                            scrub: !0
                        }
                    });
                    return r.fromTo(this.sequenceWrapper, {
                        y: 0
                    }, {
                        y: "-33vh",
                        duration: 1,
                        ease: "power1.in"
                    }, 0), r.set(this.sequenceWrapper, {
                        autoAlpha: 0
                    }), () => {}
                })
            }
        }
        let y = {
                url: "/spritesheets/mission/mission_",
                width: 1920,
                height: 1080,
                frames: 275
            },
            j = {
                url: "/spritesheets/mission-mobile/mission-mobile_",
                width: 1080,
                height: 1920,
                frames: 275
            };
        e.s(["GoalsContent", 0, e => {
            let {
                text: a,
                loop: l
            } = e || {}, i = (0, r.useRef)(), o = (0, r.useRef)(), n = (0, s.default)(), u =
                "mobile" === n ? j : "tablet" === n || "desktop" === n ? y : null;
            return (0, r.useEffect)(() => (null !== n && (o.current = new b({
                sequence: i.current
            })), () => {
                o.current && o.current.destroy()
            }), [n]), (0, t.jsxs)(w.Slice, {
                className: A.default.wrapper,
                ...e,
                children: [(0, t.jsx)("div", {
                    className: A.default.sticky,
                    children: (0, t.jsxs)("div", {
                        className: A.default.videoWrapper,
                        children: [(0, t.jsx)("div", {
                            className: A.default
                                .videoSequence,
                            children: u && (0, t.jsx)(f, {
                                ref: i,
                                url: u.url,
                                width: u.width,
                                height: u.height,
                                frames: u.frames,
                                from: 0,
                                pad: 5,
                                fileType: "jpg",
                                scaleMode: "cover",
                                className: "absolute inset-0 z-0"
                            }, u.url)
                        }), (0, t.jsx)("div", {
                            className: A.default.loopFixed,
                            children: (0, t.jsxs)("div", {
                                className: A.default
                                    .loopWrapper,
                                children: [(0, t
                                    .jsx)(
                                    "div", {
                                        className: A
                                            .default
                                            .videoLoop,
                                        children: (
                                                0,
                                                t
                                                .jsx
                                                )
                                            (g.VideoLoop, {
                                                ...
                                                l,
                                                posterDesktopWidth: 313,
                                                posterMobileWidth: 218,
                                                posterClassName: "hidden",
                                                className: A
                                                    .default
                                                    .video,
                                                forcePlay:
                                                    !
                                                    0,
                                                ratio: 1
                                            })
                                    }), (0,
                                    t.jsx)(
                                    "div", {
                                        className: (
                                                0,
                                                p
                                                .default
                                                )
                                            (A.default
                                                .loopOutline,
                                                A
                                                .default
                                                .loopOutline1
                                                )
                                    }), (0,
                                    t.jsx)(
                                    "div", {
                                        className: (
                                                0,
                                                p
                                                .default
                                                )
                                            (A.default
                                                .loopOutline,
                                                A
                                                .default
                                                .loopOutline2
                                                )
                                    })]
                            })
                        })]
                    })
                }), (0, t.jsx)("div", {
                    className: A.default.text,
                    dangerouslySetInnerHTML: {
                        __html: ((e, t = !1) => e.replace(/\n/g, " <br/> ")
                            .split(/ /).map(e => "<br/>" === e ? "<br/>" :
                                t ? `<span><span>${e}</span></span>` :
                                `<span>${e}</span>`).join(" ").replace(
                                / <br\/> /g, "<br/>"))(a)
                    }
                })]
            })
        }], 18303)
    },
    70928, e => {
        e.v({
            sticky: "orbital-module-scss-module__hzN_7a__sticky",
            stickyWrapper: "orbital-module-scss-module__hzN_7a__stickyWrapper",
            wrapper: "orbital-module-scss-module__hzN_7a__wrapper"
        })
    },
    3244, e => {
        e.v({
            camera: "orbits-module-scss-module__oC3PkW__camera",
            circleSvg: "orbits-module-scss-module__oC3PkW__circleSvg",
            circleSvg1: "orbits-module-scss-module__oC3PkW__circleSvg1",
            circleSvg2: "orbits-module-scss-module__oC3PkW__circleSvg2",
            circles: "orbits-module-scss-module__oC3PkW__circles",
            earth: "orbits-module-scss-module__oC3PkW__earth",
            highlight: "orbits-module-scss-module__oC3PkW__highlight",
            label: "orbits-module-scss-module__oC3PkW__label",
            label1: "orbits-module-scss-module__oC3PkW__label1",
            label2: "orbits-module-scss-module__oC3PkW__label2",
            labelWrapper: "orbits-module-scss-module__oC3PkW__labelWrapper",
            labels: "orbits-module-scss-module__oC3PkW__labels",
            lowEarth: "orbits-module-scss-module__oC3PkW__lowEarth",
            mars: "orbits-module-scss-module__oC3PkW__mars",
            moon: "orbits-module-scss-module__oC3PkW__moon",
            planet: "orbits-module-scss-module__oC3PkW__planet",
            planetBackground: "orbits-module-scss-module__oC3PkW__planetBackground",
            planetImage: "orbits-module-scss-module__oC3PkW__planetImage",
            planetOutline: "orbits-module-scss-module__oC3PkW__planetOutline",
            planetSubtitle: "orbits-module-scss-module__oC3PkW__planetSubtitle",
            planetTitles: "orbits-module-scss-module__oC3PkW__planetTitles",
            planetWrapper: "orbits-module-scss-module__oC3PkW__planetWrapper",
            planets: "orbits-module-scss-module__oC3PkW__planets",
            scene: "orbits-module-scss-module__oC3PkW__scene",
            viewport: "orbits-module-scss-module__oC3PkW__viewport",
            wrapper: "orbits-module-scss-module__oC3PkW__wrapper"
        })
    },
    22597, e => {
        e.v({
            card: "cards-module-scss-module__HGDSGG__card",
            highlight: "cards-module-scss-module__HGDSGG__highlight",
            image: "cards-module-scss-module__HGDSGG__image",
            location: "cards-module-scss-module__HGDSGG__location",
            text: "cards-module-scss-module__HGDSGG__text",
            title: "cards-module-scss-module__HGDSGG__title",
            wrapper: "cards-module-scss-module__HGDSGG__wrapper"
        })
    },
    96363, e => {
        "use strict";
        var t = e.i(71448),
            r = e.i(64360),
            s = e.i(53014),
            a = e.i(73533),
            l = e.i(87128),
            i = e.i(35312);
        let o = (0, e.i(11193).create)(e => ({
            highlightID: "undefined",
            setHighlightID: t => e(() => ({
                highlightID: t
            }))
        }));
        e.i(8508);
        var n = e.i(33568),
            u = e.i(67983),
            c = e.i(37619),
            d = e.i(70928),
            p = e.i(3244);
        class m {
            constructor(e) {
                this.wrapper = document.querySelector(`.${d.default.wrapper}`), this.scene = this.wrapper
                    .querySelector(`.${p.default.scene}`), this.planets = this.wrapper.querySelector(
                        `.${p.default.planets}`), this.orbitLabels = Array.from(this.wrapper
                        .querySelectorAll(`.${p.default.label}`)), this.planetLabels = Array.from(this
                        .wrapper.querySelectorAll(`.${p.default.planetTitles}`)), this.planetImagess = Array
                    .from(this.wrapper.querySelectorAll(`.${p.default.planetImage}`)), this.viewport = e
                    .viewport, this.desktopMedia = `(min-width: ${u.screens.md}px)`, this.mobileMedia =
                    `(max-width: ${u.screens.md-1}px)`, this.allMedia = {
                        isDesktop: this.desktopMedia,
                        isMobile: this.mobileMedia
                    }, this.init()
            }
            init() {
                this.setScrollTrigger()
            }
            destroy() {
                this.mm.revert()
            }
            setScrollTrigger() {
                this.mm = c.gsap.matchMedia(), this.mm.add(this.desktopMedia, () => {
                    let e = c.gsap.timeline({
                        paused: !0,
                        scrollTrigger: {
                            trigger: this.wrapper,
                            start: "bottom 150%",
                            end: "bottom 0%",
                            scrub: !0
                        }
                    });
                    e.to(this.viewport, {
                        "--camera-rot-z": "-90deg",
                        duration: 1,
                        ease: "power1.in"
                    }, 0), e.fromTo(this.orbitLabels, {
                        autoAlpha: 1
                    }, {
                        autoAlpha: 0,
                        duration: .2,
                        ease: "power1.inOut",
                        stagger: -.1
                    }, .1), e.fromTo(this.planetLabels, {
                        autoAlpha: 1
                    }, {
                        autoAlpha: 0,
                        duration: .2,
                        ease: "power1.inOut",
                        stagger: -.03
                    }, .1);
                    let t = c.gsap.timeline({
                        paused: !0,
                        scrollTrigger: {
                            trigger: this.wrapper,
                            start: "top bottom",
                            end: "top -50%",
                            scrub: !0
                        }
                    });
                    t.fromTo(this.viewport, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        duration: .9,
                        ease: "power1.out"
                    }, 0), t.fromTo(this.planetImagess, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        duration: .15,
                        ease: "power1.inOut",
                        stagger: -.08
                    }, .33), t.fromTo(this.planetImagess, {
                        "--planet-outline-scale": 1.5
                    }, {
                        "--planet-outline-scale": 1,
                        duration: .18,
                        ease: "power1.inOut",
                        stagger: -.08
                    }, .38), t.fromTo(this.viewport, {
                        "--viewport-rot": "0deg"
                    }, {
                        "--viewport-rot": "12deg",
                        duration: 1,
                        ease: "power1.inOut"
                    }, 0), t.fromTo(this.viewport, {
                        "--camera-rot-x": "0deg"
                    }, {
                        "--camera-rot-x": "65deg",
                        duration: 1,
                        ease: "power1.out"
                    }, 0), t.fromTo(this.viewport, {
                        "--camera-rot-z": "160deg"
                    }, {
                        "--camera-rot-z": "0deg",
                        duration: 1,
                        ease: "power1.out"
                    }, 0), t.fromTo(this.viewport, {
                        "--viewport-scale": 2
                    }, {
                        "--viewport-scale": 1,
                        duration: 1,
                        ease: "power1.out"
                    }, 0), t.fromTo(this.viewport, {
                        "--viewport-x": 0
                    }, {
                        "--viewport-x": "-6em",
                        duration: .5,
                        ease: "power1.inOut"
                    }, .5), t.fromTo(this.orbitLabels, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        duration: .3,
                        ease: "power1.inOut",
                        stagger: -.1
                    }, .55), t.fromTo(this.planetLabels, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        duration: .2,
                        ease: "power1.inOut",
                        stagger: -.03
                    }, .7);
                    let r = c.gsap.timeline({
                        paused: !0,
                        scrollTrigger: {
                            trigger: this.wrapper,
                            start: "top 5%",
                            end: "bottom 181%",
                            scrub: !0
                        }
                    });
                    return r.fromTo(this.viewport, {
                        "--scene-x": 0
                    }, {
                        "--scene-x": "1em",
                        duration: 1,
                        ease: "power1.in"
                    }, 0), r.fromTo(this.viewport, {
                        "--scene-y": 0
                    }, {
                        "--scene-y": "6em",
                        duration: 1,
                        ease: "power1.in"
                    }, 0), r.fromTo(this.viewport, {
                        "--scene-z": 0
                    }, {
                        "--scene-z": "5em",
                        duration: 1,
                        ease: "power1.in"
                    }, 0), () => {}
                }), this.mm.add(this.mobileMedia, () => {
                    let e = c.gsap.timeline({
                        paused: !0,
                        scrollTrigger: {
                            trigger: this.wrapper,
                            start: "top -10%",
                            end: "top -90%",
                            scrub: !0
                        }
                    });
                    e.to(this.viewport, {
                        "--camera-rot-z": "-90deg",
                        duration: 1,
                        ease: "power1.in"
                    }, 0), e.fromTo(this.orbitLabels, {
                        autoAlpha: 1
                    }, {
                        autoAlpha: 0,
                        duration: .2,
                        ease: "power1.inOut",
                        stagger: -.1
                    }, .1), e.fromTo(this.planetLabels, {
                        autoAlpha: 1
                    }, {
                        autoAlpha: 0,
                        duration: .2,
                        ease: "power1.inOut",
                        stagger: -.03
                    }, .1);
                    let t = c.gsap.timeline({
                        paused: !0,
                        scrollTrigger: {
                            trigger: this.wrapper,
                            start: "top 100%",
                            end: "top 0%",
                            scrub: !0
                        }
                    });
                    return t.fromTo(this.viewport, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        duration: .9,
                        ease: "power1.out"
                    }, 0), t.fromTo(this.planetImagess, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        duration: .15,
                        ease: "power1.inOut",
                        stagger: -.08
                    }, .33), t.fromTo(this.planetImagess, {
                        "--planet-outline-scale": 1.5
                    }, {
                        "--planet-outline-scale": 1,
                        duration: .18,
                        ease: "power1.inOut",
                        stagger: -.08
                    }, .38), t.fromTo(this.viewport, {
                        "--viewport-rot": "0deg"
                    }, {
                        "--viewport-rot": "12deg",
                        duration: 1,
                        ease: "power1.inOut"
                    }, 0), t.fromTo(this.viewport, {
                        "--camera-rot-x": "0deg"
                    }, {
                        "--camera-rot-x": "65deg",
                        duration: 1,
                        ease: "power1.out"
                    }, 0), t.fromTo(this.viewport, {
                        "--camera-rot-z": "160deg"
                    }, {
                        "--camera-rot-z": "0deg",
                        duration: 1,
                        ease: "power1.out"
                    }, 0), t.fromTo(this.viewport, {
                        "--viewport-scale": 2
                    }, {
                        "--viewport-scale": 1,
                        duration: 1,
                        ease: "power1.out"
                    }, 0), t.fromTo(this.viewport, {
                        "--viewport-x": 0
                    }, {
                        "--viewport-x": "-6em",
                        duration: .5,
                        ease: "power1.inOut"
                    }, .5), t.fromTo(this.orbitLabels, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        duration: .3,
                        ease: "power1.inOut",
                        stagger: -.1
                    }, .55), t.fromTo(this.planetLabels, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        duration: .2,
                        ease: "power1.inOut",
                        stagger: -.03
                    }, .7), () => {}
                })
            }
        }
        var h = e.i(70733);
        let f = e => {
                let {
                    orbits: r
                } = e || {}, l = (0, s.useRef)(), o = (0, s.useRef)({
                    x: 0,
                    y: 0
                }), n = (0, i.default)(), u = (e, t, r) => {
                    let s = (o.current.x / window.innerWidth - .5) * 10,
                        a = (o.current.y / window.innerHeight - .5) * 10;
                    c.default.to(l.current, {
                        "--mouse-rot-x": s + "deg",
                        duration: 1,
                        ease: "power1.out"
                    }), c.default.to(l.current, {
                        "--mouse-rot-y": a + "deg",
                        duration: 1,
                        ease: "power1.out"
                    })
                }, {
                    ref: d,
                    inView: f
                } = (0, a.useInView)(), g = (0, s.useRef)();
                (0, s.useEffect)(() => {
                    let e = e => {
                        o.current = {
                            x: e.x,
                            y: e.y
                        }
                    };
                    return f && "mobile" !== n && (window.addEventListener("mousemove", e), c.default.ticker
                        .add(u)), () => {
                        f && "mobile" !== n && (window.removeEventListener("mousemove", e), c.default
                            .ticker.remove(u))
                    }
                }, [f]), (0, s.useEffect)(() => (void 0 === g.current ? g.current = new m({
                    viewport: l.current
                }) : g.current.init(), () => {
                    g.current.destroy()
                }), []);
                let _ = (0, t.jsx)("svg", {
                    viewBox: "0 0 100 100",
                    children: (0, t.jsx)("circle", {
                        cx: "50",
                        cy: "50",
                        r: "49",
                        vectorEffect: "non-scaling-stroke"
                    })
                });
                return (0, t.jsx)("div", {
                    className: p.default.wrapper,
                    ref: d,
                    children: (0, t.jsx)("div", {
                        className: p.default.viewport,
                        ref: l,
                        children: (0, t.jsx)("div", {
                            className: p.default.camera,
                            children: (0, t.jsxs)("div", {
                                className: p.default.scene,
                                children: [(0, t.jsxs)("div", {
                                    className: p.default.circles,
                                    children: [(0, t.jsx)("div", {
                                        className: (0, h
                                            .default
                                            )(p
                                            .default
                                            .circleSvg,
                                            p
                                            .default
                                            .circleSvg1
                                            ),
                                        children: _
                                    }), (0, t.jsx)("div", {
                                        className: (0, h
                                            .default
                                            )(p
                                            .default
                                            .circleSvg,
                                            p
                                            .default
                                            .circleSvg2
                                            ),
                                        children: _
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: p.default.labels,
                                    children: [(0, t.jsx)("div", {
                                        className: (0, h
                                                .default
                                                )(p
                                                .default
                                                .labelWrapper,
                                                p
                                                .default
                                                .label1
                                                ),
                                        children: (0, t
                                            .jsx)(
                                            "div", {
                                                className: p
                                                    .default
                                                    .label,
                                                children: r
                                                    .labels
                                                    .marsOrbitLabel
                                            })
                                    }), (0, t.jsx)("div", {
                                        className: (0, h
                                                .default
                                                )(p
                                                .default
                                                .labelWrapper,
                                                p
                                                .default
                                                .label2
                                                ),
                                        children: (0, t
                                            .jsx)(
                                            "div", {
                                                className: p
                                                    .default
                                                    .label,
                                                children: r
                                                    .labels
                                                    .earthOrbitLabel
                                            })
                                    })]
                                }), (0, t.jsxs)("ul", {
                                    className: p.default.planets,
                                    children: [(0, t.jsx)(w, {
                                        anchor: "earth",
                                        ...r.earth
                                    }), (0, t.jsx)(w, {
                                        anchor: "lowEarth",
                                        ...r.lowEarth
                                    }), (0, t.jsx)(w, {
                                        anchor: "moon",
                                        ...r.moon
                                    }), (0, t.jsx)(w, {
                                        anchor: "mars",
                                        ...r.mars
                                    })]
                                })]
                            })
                        })
                    })
                })
            },
            g = e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 *
                e + 10)) / 2,
            w = e => {
                let {
                    anchor: r,
                    title: s,
                    video: a
                } = e || {}, i = o(e => e.highlightID), u = (0, n.useScrollStore)(e => e.scrollTo);
                return (0, t.jsx)("li", {
                    className: (0, h.default)(p.default.planetWrapper, p.default[r], i === r && p
                        .default.highlight),
                    children: (0, t.jsxs)("div", {
                        className: p.default.planet,
                        children: [(0, t.jsxs)("div", {
                            className: p.default.planetImage,
                            onClick: () => {
                                let e = document.querySelector(`.${r}-anchor`);
                                if (e) {
                                    let t = -(.5 * (window.innerHeight - e
                                            .offsetHeight)) - .01 * window
                                        .innerWidth;
                                    u(e, {
                                        duration: 1,
                                        offset: t,
                                        easing: g
                                    })
                                }
                            },
                            children: [(0, t.jsx)("div", {
                                className: p.default.planetBackground
                            }), (0, t.jsx)("div", {
                                className: p.default.planetOutline
                            }), (0, t.jsx)(l.VideoLoop, {
                                ...a,
                                ratio: 1,
                                posterClassName: "hidden",
                                forcePlay: !0,
                                posterDesktopWidth: 45,
                                posterMobileWidth: 45
                            })]
                        }), (0, t.jsx)("div", {
                            className: p.default.planetTitles,
                            children: (0, t.jsx)("div", {
                                className: p.default.planetTitle,
                                children: s
                            })
                        })]
                    })
                })
            };
        var _ = e.i(43463),
            v = e.i(22597);
        let x = e => {
                let {
                    content: r
                } = e || {};
                return (0, t.jsx)("ul", {
                    className: v.default.wrapper,
                    children: r.map(e => (0, t.jsx)(A, {
                        ...e
                    }, e._key))
                })
            },
            A = e => {
                let {
                    location: r,
                    title: a,
                    text: l,
                    image: i
                } = e || {}, n = (0, s.useRef)(), u = (0, s.useRef)(), [c, d] = (0, s.useState)(!1), p = o(e =>
                    e.setHighlightID);
                (0, s.useEffect)(() => {
                    if (n.current) return u.current = new IntersectionObserver(m, {
                        rootMargin: "-50% 0px -50% 0px"
                    }), u.current.observe(n.current), () => {
                        u.current && u.current.disconnect()
                    }
                }, []);
                let m = e => {
                    e.forEach(e => {
                        e.isIntersecting ? (d(!0), setTimeout(() => {
                            p(r.place)
                        }, 10)) : e.isIntersecting || (d(!1), p("undefined"))
                    })
                };
                return (0, t.jsxs)("li", {
                    className: (0, h.default)(v.default.card, `${r.place}-anchor`, c && v.default
                        .highlight),
                    ref: n,
                    children: [(0, t.jsx)("div", {
                        className: v.default.image,
                        children: (0, t.jsx)(_.SanityImage, {
                            image: i,
                            width: 267,
                            height: 360,
                            desktopWidth: 300,
                            mobileWidth: 335
                        })
                    }), (0, t.jsx)("div", {
                        className: v.default.location,
                        children: r.title
                    }), (0, t.jsx)("div", {
                        className: v.default.title,
                        children: a
                    }), (0, t.jsx)("div", {
                        className: v.default.text,
                        children: l
                    })]
                })
            };
        e.s(["OrbitalContent", 0, e => {
            let {
                orbits: s,
                cards: a
            } = e || {};
            return (0, t.jsxs)(r.Slice, {
                className: d.default.wrapper,
                ...e,
                children: [(0, t.jsx)("div", {
                    className: d.default.stickyWrapper,
                    children: (0, t.jsx)("div", {
                        className: d.default.sticky,
                        children: (0, t.jsx)(f, {
                            orbits: s,
                            cards: a
                        })
                    })
                }), (0, t.jsx)(x, {
                    content: a
                })]
            })
        }], 96363)
    },
    80940, e => {
        e.v(t => Promise.all(["static/chunks/325a2e741a2d18b0.js"].map(t => e.l(t))).then(() => t(28081)))
    }
]);