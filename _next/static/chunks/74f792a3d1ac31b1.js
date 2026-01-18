(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  73533,
  (e) => {
    "use strict";
    var t = e.i(53014),
      r = Object.defineProperty,
      n = (e, t, n) => {
        let l;
        return (l = "symbol" != typeof t ? t + "" : t) in e
          ? r(e, l, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[l] = n);
      },
      l = new Map(),
      i = new WeakMap(),
      s = 0,
      a = void 0;
    function o(e, t, r = {}, n = a) {
      if (void 0 === window.IntersectionObserver && void 0 !== n) {
        let l = e.getBoundingClientRect();
        return (
          t(n, {
            isIntersecting: n,
            target: e,
            intersectionRatio: "number" == typeof r.threshold ? r.threshold : 0,
            time: 0,
            boundingClientRect: l,
            intersectionRect: l,
            rootBounds: l,
          }),
          () => {}
        );
      }
      let {
          id: c,
          observer: u,
          elements: d,
        } = (function (e) {
          let t = Object.keys(e)
              .sort()
              .filter((t) => void 0 !== e[t])
              .map((t) => {
                var r;
                return `${t}_${"root" === t ? (!(r = e.root) ? "0" : (i.has(r) || ((s += 1), i.set(r, s.toString())), i.get(r))) : e[t]}`;
              })
              .toString(),
            r = l.get(t);
          if (!r) {
            let n,
              i = new Map(),
              s = new IntersectionObserver((t) => {
                t.forEach((t) => {
                  var r;
                  let l =
                    t.isIntersecting && n.some((e) => t.intersectionRatio >= e);
                  (e.trackVisibility &&
                    void 0 === t.isVisible &&
                    (t.isVisible = l),
                    null == (r = i.get(t.target)) ||
                      r.forEach((e) => {
                        e(l, t);
                      }));
                });
              }, e);
            ((n =
              s.thresholds ||
              (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])),
              (r = { id: t, observer: s, elements: i }),
              l.set(t, r));
          }
          return r;
        })(r),
        f = d.get(e) || [];
      return (
        d.has(e) || d.set(e, f),
        f.push(t),
        u.observe(e),
        function () {
          (f.splice(f.indexOf(t), 1),
            0 === f.length && (d.delete(e), u.unobserve(e)),
            0 === d.size && (u.disconnect(), l.delete(c)));
        }
      );
    }
    var c = class extends t.Component {
      constructor(e) {
        (super(e),
          n(this, "node", null),
          n(this, "_unobserveCb", null),
          n(this, "handleNode", (e) => {
            (this.node &&
              (this.unobserve(),
              e ||
                this.props.triggerOnce ||
                this.props.skip ||
                this.setState({
                  inView: !!this.props.initialInView,
                  entry: void 0,
                })),
              (this.node = e || null),
              this.observeNode());
          }),
          n(this, "handleChange", (e, t) => {
            (e && this.props.triggerOnce && this.unobserve(),
              "function" == typeof this.props.children &&
                this.setState({ inView: e, entry: t }),
              this.props.onChange && this.props.onChange(e, t));
          }),
          (this.state = { inView: !!e.initialInView, entry: void 0 }));
      }
      componentDidMount() {
        (this.unobserve(), this.observeNode());
      }
      componentDidUpdate(e) {
        (e.rootMargin !== this.props.rootMargin ||
          e.root !== this.props.root ||
          e.threshold !== this.props.threshold ||
          e.skip !== this.props.skip ||
          e.trackVisibility !== this.props.trackVisibility ||
          e.delay !== this.props.delay) &&
          (this.unobserve(), this.observeNode());
      }
      componentWillUnmount() {
        this.unobserve();
      }
      observeNode() {
        if (!this.node || this.props.skip) return;
        let {
          threshold: e,
          root: t,
          rootMargin: r,
          trackVisibility: n,
          delay: l,
          fallbackInView: i,
        } = this.props;
        this._unobserveCb = o(
          this.node,
          this.handleChange,
          {
            threshold: e,
            root: t,
            rootMargin: r,
            trackVisibility: n,
            delay: l,
          },
          i,
        );
      }
      unobserve() {
        this._unobserveCb && (this._unobserveCb(), (this._unobserveCb = null));
      }
      render() {
        let { children: e } = this.props;
        if ("function" == typeof e) {
          let { inView: t, entry: r } = this.state;
          return e({ inView: t, entry: r, ref: this.handleNode });
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
        return t.createElement(r || "div", { ref: this.handleNode, ...h }, e);
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
      onChange: f,
    } = {}) {
      var h;
      let [m, p] = t.useState(null),
        b = t.useRef(f),
        [v, g] = t.useState({ inView: !!c, entry: void 0 });
      ((b.current = f),
        t.useEffect(() => {
          let t;
          if (!a && m)
            return (
              (t = o(
                m,
                (e, r) => {
                  (g({ inView: e, entry: r }),
                    b.current && b.current(e, r),
                    r.isIntersecting && s && t && (t(), (t = void 0)));
                },
                {
                  root: i,
                  rootMargin: l,
                  threshold: e,
                  trackVisibility: n,
                  delay: r,
                },
                d,
              )),
              () => {
                t && t();
              }
            );
        }, [Array.isArray(e) ? e.toString() : e, m, i, l, s, a, n, d, r]));
      let x = null == (h = v.entry) ? void 0 : h.target,
        y = t.useRef(void 0);
      m ||
        !x ||
        s ||
        a ||
        y.current === x ||
        ((y.current = x), g({ inView: !!c, entry: void 0 }));
      let w = [p, v.inView, v.entry];
      return ((w.ref = w[0]), (w.inView = w[1]), (w.entry = w[2]), w);
    }
    e.s(["InView", () => c, "useInView", () => u]);
  },
  976,
  (e) => {
    "use strict";
    var t = e.i(53014),
      r = e.i(39549);
    e.s([
      "default",
      0,
      (e, n = 50, l = []) => (0, t.useCallback)((0, r.default)(e, n), l),
    ]);
  },
  87128,
  (e) => {
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
    let d = (0, r.forwardRef)(
      (
        {
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
        },
        W,
      ) => {
        let P = (0, r.useRef)(null),
          D = (0, r.useRef)(null),
          [T, V] = (0, r.useState)(!1),
          [$, z] = (0, r.useState)(null),
          q = h || o.devices.mobile.mockupWidth,
          H = f || o.devices.desktop.mockupWidth,
          B = (0, i.default)(!0),
          A = e.sort((e, t) => e.width - t.width).map((e) => [e.width, e.url]);
        A.length && (A[A.length - 1][0] = 1 / 0);
        let F = (0, r.useCallback)((e) => {
            ((P.current = e), W && (W.current = e));
          }, []),
          Z = (0, r.useCallback)((e) => {
            e && ((D.current = e.node), R && (R.current = D.current));
          }, []),
          U = () => {
            if (w && D.current) {
              let e = D.current.play();
              void 0 !== e &&
                e.catch((e) => {
                  console.warn("video", e);
                });
            }
          },
          Y = () => {
            if (D.current && !D.current.paused) {
              let e = D.current.pause();
              void 0 !== e &&
                e.catch((e) => {
                  console.warn("video", e);
                });
            }
          };
        return (
          (0, r.useEffect)(() => {
            (D.current?.isInView || E) && (w ? U() : Y());
          }, [w]),
          (0, a.default)(
            P,
            (0, s.default)((t) => {
              P.current &&
                e?.length &&
                (!m ||
                (B?.current &&
                  (B.current === u.DeviceEnum.desktop ||
                    B.current === u.DeviceEnum.tablet))
                  ? z(A.filter((e) => t.contentRect.width < e[0])[0][1])
                  : z(null));
            }),
          ),
          (0, t.jsxs)("div", {
            ref: F,
            className: (0, n.default)(S, g),
            children: [
              (0, t.jsx)(l.InView, {
                as: "video",
                src: $,
                ref: Z,
                onChange: (e, t) => {
                  let r = t.target;
                  ((r.isInView = e), e && w ? U() : (Y(), (r.currentTime = 0)));
                },
                className: (0, n.default)(
                  "absolute w-full top-0 left-0 z-1 opacity-0 transition-opacity ease-quart-out",
                  d && p ? "duration-100" : "duration-500",
                  T && "opacity-100",
                  N && "object-cover h-full",
                ),
                preload: M,
                loop: k,
                muted: j,
                playsInline: !0,
                onLoadedMetadata: (e) => {
                  (I && I(e), V(!0));
                  let t = e.currentTarget;
                  w && t.paused && t.isInView && U();
                },
                onEnded: C,
                ...L,
                children: y,
              }),
              d &&
                (0, t.jsxs)("div", {
                  className: (0, n.default)(p && "absolute z-0 inset-0"),
                  children: [
                    (0, t.jsx)(c.SanityImage, {
                      image: d,
                      desktopOnly: !!b,
                      desktopWidth: H,
                      mobileWidth: q,
                      onLoadingComplete: O,
                      width: p,
                      height: p ? 1 : void 0,
                      fill: N,
                      priority: !b && _,
                      className: (0, n.default)(
                        "w-full",
                        N && "object-cover h-full",
                        x,
                      ),
                    }),
                    b &&
                      (0, t.jsx)(c.SanityImage, {
                        image: d,
                        mobileOnly: !0,
                        mobileWidth: q,
                        onLoadingComplete: O,
                        width: b,
                        height: p ? 1 : void 0,
                        fill: N,
                        priority: !b && _,
                        className: (0, n.default)(
                          "w-full",
                          N && "object-cover h-full",
                          x,
                        ),
                      }),
                  ],
                }),
              (!N || v) &&
                p &&
                (0, t.jsx)("div", {
                  style: { "--ratio": p / 100, "--ratioMobile": b && b / 100 },
                  className: (0, n.default)(
                    "w-full pb-[calc(1%/var(--ratio))]",
                    b && "lg-max:pb-[calc(1%/var(--ratioMobile))]",
                  ),
                }),
            ],
          })
        );
      },
    );
    ((d.displayName = "VideoLoop"), e.s(["VideoLoop", 0, d]));
  },
  33568,
  (e) => {
    "use strict";
    var t = e.i(9661);
    e.s(["useScrollStore", () => t.default]);
  },
  73249,
  (e) => {
    "use strict";
    var t = e.i(53014);
    let r = [],
      n = null,
      l = 0,
      i = (e) => {
        let t = e - l;
        (r.forEach((r) => {
          let n = r.fps ? 1e3 / r.fps : 0;
          r.lastDelta + t >= 0.9 * n
            ? (r.callback(e, r.lastDelta + t), (r.lastDelta = 0))
            : (r.lastDelta += t);
        }),
          (l = e),
          (n = window.requestAnimationFrame(i)));
      };
    e.s([
      "default",
      0,
      (e, s = !1, a) => {
        let o = { callback: e, fps: a, lastDelta: 0 };
        (0, t.useEffect)(
          () => (
            s ? r.unshift(o) : r.push(o),
            null === n && ((l = 0), (n = window.requestAnimationFrame(i))),
            () => {
              let e = r.indexOf(o);
              (-1 !== e && r.splice(e, 1),
                r.length || (n && window.cancelAnimationFrame(n), (n = null)));
            }
          ),
          [e, s],
        );
      },
    ]);
  },
  82792,
  13396,
  (e) => {
    "use strict";
    var t = e.i(53014),
      r = e.i(47982);
    e.s(
      [
        "default",
        0,
        (e = !1, n = 0) => {
          let l = (0, t.useRef)({
              innerWidth: 0,
              innerHeight: 0,
              documentHeight: 0,
            }),
            [i, s] = (0, t.useState)({
              innerWidth: 0,
              innerHeight: 0,
              documentHeight: 0,
            });
          return (
            (0, r.default)(
              (e) => {
                ((l.current.innerWidth = e?.innerWidth || 0),
                  (l.current.innerHeight = e?.innerHeight || 0),
                  (l.current.documentHeight = e?.documentHeight || 0),
                  s(l.current));
              },
              !0,
              [],
              n,
            ),
            e ? l : i
          );
        },
      ],
      82792,
    );
    let n = (e, t = "offsetTop") => {
      let r = 0;
      for (; e; ) ((r += e[t]), (e = e.offsetParent));
      return r;
    };
    e.s(
      [
        "offsetLeft",
        0,
        (e) => n(e, "offsetLeft"),
        "offsetTop",
        0,
        (e) => n(e, "offsetTop"),
      ],
      13396,
    );
  },
  74010,
  21375,
  (e) => {
    "use strict";
    var t = e.i(53014);
    /constructor/i.test(window.HTMLElement) ||
      (
        !window.safari ||
        (void 0 !== window.safari && window.safari.pushNotification)
      ).toString();
    let r = window.navigator.userAgent,
      n = r && (!!r.match(/iPad/i) || !!r.match(/iPhone/i)),
      l = r && !!r.match(/WebKit/i);
    (r && n && l && r.match(/CriOS/i),
      e.s(["iOS", 0, n, "isBrowser", 0, !0], 21375));
    let i = t.useLayoutEffect;
    e.s(["default", 0, i], 74010);
  },
  39549,
  (e, t, r) => {
    function n(e, t, r) {
      function n() {
        var c = Date.now() - a;
        c < t && c >= 0
          ? (l = setTimeout(n, t - c))
          : ((l = null), r || ((o = e.apply(s, i)), (s = i = null)));
      }
      null == t && (t = 100);
      var l,
        i,
        s,
        a,
        o,
        c = function () {
          ((s = this), (i = arguments), (a = Date.now()));
          var c = r && !l;
          return (
            l || (l = setTimeout(n, t)),
            c && ((o = e.apply(s, i)), (s = i = null)),
            o
          );
        };
      return (
        (c.clear = function () {
          l && (clearTimeout(l), (l = null));
        }),
        (c.flush = function () {
          l &&
            ((o = e.apply(s, i)), (s = i = null), clearTimeout(l), (l = null));
        }),
        c
      );
    }
    ((n.debounce = n), (t.exports = n));
  },
  50342,
  (e) => {
    "use strict";
    var t = e.i(74010);
    let r = { current: null },
      n = [];
    e.s([
      "default",
      0,
      (e, l, i = []) => {
        (0, t.default)(() => {
          let t = e?.current || e;
          return (
            r.current ||
              (r.current = new ResizeObserver((e) => {
                n.forEach((t, r) => {
                  let n = e.find((e) => (t.ref.current || t.ref) === e.target);
                  n && t.callback(n, r);
                });
              })),
            r.current.observe(t),
            n.push({ ref: e, callback: l }),
            () => {
              if (r.current) {
                r.current.unobserve(t);
                let e = n.findIndex((e) => e.callback === l);
                -1 !== e &&
                  (n.splice(e, 1),
                  0 === n.length &&
                    (r.current.disconnect(), (r.current = null)));
              }
            }
          );
        }, [e, ...i]);
      },
    ]);
  },
  35312,
  78194,
  50109,
  59861,
  (e) => {
    "use strict";
    var t,
      r,
      n =
        (((t = {}).mobile = "mobile"),
        (t.tablet = "tablet"),
        (t.desktop = "desktop"),
        t);
    (((r = {}).sm = "sm"),
      (r.md = "md"),
      (r.lg = "lg"),
      (r.xl = "xl"),
      (r.xxl = "xxl"),
      (r["sm-max"] = "sm-max"),
      (r["lg-max"] = "lg-max"),
      e.s(["DeviceEnum", () => n], 78194),
      e.s([], 50109));
    var l = e.i(53014),
      i = e.i(67983);
    let s = (e) => {
      var t, r;
      let n,
        s = Object.entries({
          mobile: `(max-width: ${i.screens[i.devices.tablet.screen] - 1}px)`,
          tablet: `(min-width: ${i.screens[i.devices.tablet.screen]}px) and (max-width: ${i.screens[i.devices.desktop.screen] - 1}px)`,
          desktop: `(min-width: ${i.screens[i.devices.desktop.screen]}px)`,
        });
      ((t = s.map((e) => e[1])),
        (r = (t) => {
          if (t.matches) {
            let r = s.find((e) => e[1] === t.media)?.[0];
            return (
              r || console.warn("no device match found"),
              e(r || "desktop"),
              r || "desktop"
            );
          }
        }),
        (n = (e) => {
          r(e);
        }),
        (0, l.useEffect)(() => {
          let e = t.map((e) => window.matchMedia(e));
          return (
            e.forEach((e) => {
              (e.addEventListener("change", n), e.matches && r(e));
            }),
            () => e.forEach((e) => e.removeEventListener("change", n))
          );
        }, []));
    };
    (e.s(["default", 0, s], 59861),
      e.s(
        [
          "default",
          0,
          (e = !1) => {
            let t = (0, l.useRef)(null),
              [r, i] = (0, l.useState)(null);
            return (s((r) => {
              r in n && ((t.current = r), e || i(r));
            }),
            e)
              ? t
              : r;
          },
        ],
        35312,
      ));
  },
  47982,
  (e) => {
    "use strict";
    var t = e.i(39549),
      r = e.i(74010);
    let n = {},
      l = {
        pageYOffset: 0,
        innerWidth: 0,
        innerHeight: 0,
        documentHeight: 0,
        offsetWidth: 0,
      },
      i = (e) => {
        let t = { type: e.type };
        switch (e.type) {
          case "scroll":
            (e instanceof Event && (l.pageYOffset = window.pageYOffset),
              (t.pageYOffset = t.scrollY = l.pageYOffset),
              (t.innerWidth = l.innerWidth),
              (t.innerHeight = l.innerHeight),
              (t.documentHeight = l.documentHeight),
              (t.offsetWidth = l.offsetWidth));
            break;
          case "resize":
            ((e instanceof Event || !l.innerWidth) &&
              ((l.innerWidth = window.innerWidth),
              (l.innerHeight = window.innerHeight),
              (l.documentHeight = document.documentElement.clientHeight),
              (l.offsetWidth = document.body.offsetWidth)),
              (t.innerWidth = l.innerWidth),
              (t.innerHeight = l.innerHeight),
              (t.documentHeight = l.documentHeight),
              (t.offsetWidth = l.offsetWidth));
        }
        return t;
      };
    e.s(
      [
        "default",
        0,
        (e, l = !1, s = [], a = 40) =>
          ((e, l, s = !1, a = [], o = 40) => {
            (0, r.default)(() => {
              let r = o ? (0, t.default)(l, o) : l;
              if (l && e) {
                let t = n[e];
                if (t) (t.cbs.push(r), s && l(i({ type: e, manual: !0 })));
                else {
                  let t = { cbs: [r], cb: () => null };
                  ((t.cb = (e) => {
                    let r = i(e);
                    t.cbs.forEach((e) => {
                      e(r);
                    });
                  }),
                    window.addEventListener(e, t.cb),
                    (n[e] = t),
                    s && l(i({ type: e, manual: !0 })));
                }
              }
              return () => {
                if (e) {
                  let t = n[e];
                  if (t) {
                    let l = t.cbs.indexOf(r);
                    -1 !== l &&
                      (r.clear && r.clear(),
                      t.cbs.splice(l, 1),
                      0 === t.cbs.length &&
                        (window.removeEventListener(e, t.cb), (n[e] = null)));
                  }
                }
              };
            }, [e, ...a]);
          })("resize", e, l, s, a),
      ],
      47982,
    );
  },
  97854,
  (e) => {
    "use strict";
    let t = (e, t, r) =>
      t < r ? Math.min(Math.max(e, t), r) : Math.min(Math.max(e, r), t);
    e.s([
      "clamp",
      0,
      t,
      "lerp",
      0,
      (e, t, r) => e * (1 - r) + r * t,
      "map",
      0,
      (e, r, n, l, i) => t(((e - r) / (n - r)) * (i - l) + l, l, i),
      "precision",
      0,
      (e, t = 3) => {
        let r = Math.pow(10, t);
        return ~~(e * r) / r;
      },
    ]);
  },
  92238,
  (e) => {
    "use strict";
    e.i(1607);
    var t = e.i(71149),
      t = t,
      r = e.i(53014);
    e.s(
      [
        "default",
        0,
        () => {
          let e = (0, r.useContext)(t.default);
          return (t) => e?.get?.(t) || t;
        },
      ],
      92238,
    );
  },
  7953,
  (e) => {
    "use strict";
    var t = "u" > typeof window ? window : { screen: {}, navigator: {} },
      r = (
        t.matchMedia ||
        function () {
          return { matches: !1 };
        }
      ).bind(t),
      n = !1,
      l = function () {};
    (t.addEventListener &&
      t.addEventListener("p", l, {
        get passive() {
          return (n = !0);
        },
      }),
      t.removeEventListener && t.removeEventListener("p", l, !1));
    var i = n,
      s = "ontouchstart" in t,
      a = "TouchEvent" in t,
      o = s || (a && r("(any-pointer: coarse)").matches),
      c = (t.navigator.maxTouchPoints || 0) > 0 || o,
      u = t.navigator.userAgent || "",
      d =
        r("(pointer: coarse)").matches &&
        /iPad|Macintosh/.test(u) &&
        Math.min(t.screen.width || 0, t.screen.height || 0) >= 768,
      f =
        (r("(pointer: coarse)").matches ||
          (!r("(pointer: fine)").matches && s)) &&
        !/Windows.*Firefox/.test(u),
      h =
        r("(any-pointer: fine)").matches ||
        r("(any-hover: hover)").matches ||
        d ||
        !s,
      m = c && (h || !f) ? "hybrid" : c ? "touchOnly" : "mouseOnly";
    e.s(["deviceType", () => m, "supportsPassiveEvents", () => i]);
  },
  53158,
  (e) => {
    "use strict";
    var t,
      r = e.i(53014);
    function n() {
      return (n = Object.assign.bind()).apply(null, arguments);
    }
    e.s([
      "default",
      0,
      (e) =>
        r.createElement(
          "svg",
          n(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 16,
              height: 16,
              fill: "none",
              viewBox: "0 0 16 16",
            },
            e,
          ),
          t ||
            (t = r.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "m8.373 15.707 7-7L16.082 8l-.707-.707-7-7L6.96 1.707 12.252 7H0v2h12.253l-5.294 5.293z",
              clipRule: "evenodd",
            })),
        ),
    ]);
  },
  43482,
  (e) => {
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
      buttonClassName: m,
    }) => {
      let p = (0, n.default)(
          "pointer-events-auto",
          "text-white hover:text-black",
          "[&>svg]:transition-opacity [&>svg]:ease-expo-out [&>svg]:duration-500",
          "w-40 h-40 !p-0 flex items-center justify-center relative",
        ),
        b = (0, u.default)();
      return (0, t.jsxs)("div", {
        className: (0, n.default)(
          "flex items-center",
          "pointer-events-none",
          s && "lg-max:hidden",
          a && "lg:hidden",
          e,
        ),
        children: [
          (0, t.jsx)(d.Button, {
            disabled: !i && -1 === o,
            onClick: r,
            className: (0, n.default)(p, "bg-clip-padding", m),
            variant: c,
            theme: h,
            label: b("Previous"),
            children: (0, t.jsx)(f.default, {
              className: (0, n.default)(
                "scale-[-1] w-8 h-8",
                !i && -1 === o && "opacity-60",
              ),
            }),
          }),
          (0, t.jsx)(d.Button, {
            disabled: !i && 1 === o,
            onClick: l,
            className: (0, n.default)("ml-10", p, m),
            variant: c,
            theme: h,
            label: b("Next"),
            children: (0, t.jsx)(f.default, {
              className: (0, n.default)(
                "w-8 h-8",
                !i && 1 === o && "opacity-60",
              ),
            }),
          }),
        ],
      });
    };
    var m = e.i(13396);
    let p = (0, r.forwardRef)(
      (
        {
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
          onTransformItem: U = ({ x: e, y: t }) =>
            `translate3d(${e}px,${t}px,0)`,
        },
        Y,
      ) => {
        let K = (0, r.useRef)(null),
          X = (0, r.useRef)(null),
          J = (0, r.useRef)(r.Children.map(e, () => (0, r.useRef)())),
          G = (0, r.useRef)(),
          Q = (0, r.useCallback)((e) => {
            ((G.current = e), Y && (Y.current = e));
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
          ep = (0, r.useRef)({ top: 0, left: 0, width: 0, height: 0 }),
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
          eC = (e) => {
            (e.forEach((e) => {
              let t = e.target;
              ((t.__width = e.target.offsetWidth),
                (t.__xInit = e.target.offsetLeft),
                t.__x || (t.__x = 0),
                eI.current && eI.current.unobserve(t));
            }),
              eH(el.current),
              (en.current = !0),
              eL(!0));
          },
          eR = (0, r.useCallback)(() => {
            es.current =
              (r.Children.count(e) / S + +(r.Children.count(e) % S != 0)) | 0;
            let t = [];
            return (
              r.Children.forEach(e, (e, l) => {
                if (e?.ref) ((t[l] = e), (J.current[l] = e.ref));
                else {
                  let i = J.current[l];
                  t[l] = (0, r.cloneElement)(e, {
                    ref: i,
                    className: (0, n.default)(e.props.className, "shrink-0"),
                  });
                }
              }),
              t
            );
          }, [e]),
          eL = (e = !1) => {
            if (q || !ed.current || !J.current?.length || !ep.current.width)
              return;
            if (
              (ee.current
                ? ((eE.current = ew.current - eN.current),
                  (ex.current += (eE.current - ev.current) * 0.25),
                  (ex.current *= 0.52),
                  (er.current = !1))
                : (d || er.current) &&
                  ((ex.current += (eE.current - ev.current) * 0.1),
                  (ex.current *= 0.62)),
              W)
            ) {
              let e = ee.current ? 0.8 : 0.1,
                t = eM.current[0],
                r = eM.current[1];
              ev.current + ex.current < t
                ? ((ex.current += (t - ev.current) * e), (ex.current *= 0.55))
                : ev.current + ex.current > r
                  ? ((ex.current += (r - ev.current) * e), (ex.current *= 0.55))
                  : (ex.current *= 0.9);
            }
            (e
              ? ((ev.current = eE.current), (ex.current = 0))
              : (ev.current += ex.current),
              ee.current
                ? (ex.current = ev.current - ey.current)
                : ex.current > -0.3 &&
                  ex.current < 0.3 &&
                  !eO.current &&
                  ((eO.current = !0), Z && Z()),
              (ev.current = ((100 * ev.current) | 0) / 100));
            let t = ev.current - eE.current;
            (t < 0 && (t *= -1),
              t < 0.01 && (ev.current = eE.current),
              ey.current !== ev.current && (en.current = !0),
              en.current && eW(),
              (ey.current = ev.current));
          },
          eW = () => {
            for (let e = 0, t = J.current.length; e < t; e++) {
              let t = J.current[e].current;
              if (!t || void 0 === t.__xInit) continue;
              let r = (ep.current.width - t.__width) / 2,
                n = -ev.current + t.__xInit;
              z && (n += r);
              let l =
                n + t.__width + ep.current.left >= 0 &&
                n + ep.current.left <= em.current.innerWidth;
              (l
                ? ((t.__x = -ev.current),
                  (t.style.transform = U({
                    element: t,
                    i: e,
                    relativeX: n - r,
                    x: z ? t.__x + r : t.__x,
                    y: eg.current,
                  })),
                  b && t.classList.add(b),
                  t.__inView ||
                    ((t.style.visibility = ""),
                    (t.style.willChange = "transform")))
                : !1 !== t.__inView &&
                  ((t.style.transform = ""),
                  (t.style.visibility = "hidden"),
                  (t.style.willChange = ""),
                  b && t.classList.remove(b)),
                d && e === el.current
                  ? v && t.classList.add(v)
                  : v && t.classList.remove(v),
                (t.__inView = l));
            }
            (B?.(), (en.current = !1));
          },
          eP = () => {
            X.current &&
              eb.current &&
              ep.current &&
              (W && (eM.current = [0, eb.current - ep.current.width]),
              (ed.current = !H || eb.current > X.current.clientWidth),
              eh(ed.current),
              ed.current &&
                J.current &&
                (J.current.forEach((e) => {
                  e.current && eI.current && eI.current.observe(e.current);
                }),
                eA(el.current),
                J.current[el.current]?.current?.__xInit && eB(el.current)));
          },
          eD = () => {
            ((er.current = !0), eH(el.current - S));
          },
          eT = () => {
            ((er.current = !0), eH(el.current + S));
          },
          eV = (e) => {
            e.preventDefault();
          },
          e$ = (e) => {
            if (void 0 !== e.button && 0 !== e.button) return;
            let t = (e.touches && e.touches[0]) || e;
            ((eO.current = !1),
              (eN.current = t.pageX),
              (ej.current = eN.current),
              (ek.current = eN.current),
              (ew.current = eN.current + ev.current),
              (ex.current = 0),
              (e_.current = 0),
              (ee.current = !0),
              (et.current = !1));
          },
          ez = (e) => {
            if (ee.current && K.current) {
              ((eN.current = ((e.touches && e.touches[0]) || e).pageX),
                (e_.current = eN.current - ej.current));
              let t = eN.current - ek.current;
              (Math.abs(t) > 30
                ? ((eS.current = Math.sign(t)),
                  (K.current.style.pointerEvents = "none"))
                : Math.abs(e_.current) > 1
                  ? ((eS.current = Math.sign(e_.current)),
                    (K.current.style.pointerEvents = "none"))
                  : (eS.current = 0),
                (ej.current = eN.current),
                F && F(ee.current, eS.current));
            }
          },
          eq = () => {
            if (ee.current && K.current) {
              if (((K.current.style.pointerEvents = ""), d)) {
                let e = { x: 1 / 0, element: void 0, i: 0 };
                for (let t = 0, r = J.current.length; t < r; t++) {
                  let r = J.current[t].current,
                    n = Math.abs(-ev.current + r.__xInit);
                  n < e.x && (e = { x: n, element: r, i: t });
                }
                let t = e.i - (e.i % ei.current);
                eH(t - (t === el.current ? eS.current * ei.current : 0));
              }
              ((ee.current = !1),
                (eS.current = 0),
                F && F(ee.current, eS.current));
            }
          },
          eH = (e) => {
            let t = (0, o.clamp)(
              e,
              0,
              J.current.length - 1 - ((J.current.length - 1) % ei.current),
            );
            J.current[t].current &&
              (eB(t),
              eo(t),
              eA(t),
              A && el.current !== t && A(t, ee.current),
              (el.current = t));
          },
          eB = (e) => {
            eE.current = (0, o.clamp)(
              J.current[e].current.__xInit,
              eM.current[0],
              eM.current[1],
            );
          },
          eA = (e) => {
            let t = e / ei.current + 1;
            eu(0 === e ? -1 : +(t >= J.current.length / ei.current));
          };
        return (
          (0, s.default)(X, (e) => {
            ((ep.current.top = X.current?.offsetTop || 0),
              (ep.current.left = X.current ? (0, m.offsetLeft)(X.current) : 0),
              (ep.current.width = e.contentRect.width),
              (ep.current.height = e.contentRect.height),
              eP());
          }),
          (0, s.default)(K, (e) => {
            ((eb.current = e.contentRect.width), eP());
          }),
          (0, l.default)(() => {
            eL();
          }),
          (0, r.useEffect)(() => {
            ei.current = S;
          }, [S]),
          (0, r.useEffect)(() => {
            eW();
            let e = !!a.supportsPassiveEvents && { passive: !0 },
              t = X.current;
            return (
              !j &&
                (window.addEventListener("mousemove", ez, e),
                window.addEventListener("touchmove", ez, e),
                window.addEventListener("mouseup", eq, e),
                window.addEventListener("touchend", eq, e),
                t &&
                  (t.addEventListener("mousedown", e$, e),
                  t.addEventListener("touchstart", e$, e),
                  t.addEventListener("dragstart", eV))),
              (eI.current = new IntersectionObserver(eC)),
              () => {
                (!j &&
                  (window.removeEventListener("mousemove", ez),
                  window.removeEventListener("touchmove", ez),
                  window.removeEventListener("mouseup", eq),
                  window.removeEventListener("touchend", eq),
                  t &&
                    (t.removeEventListener("mousedown", e$),
                    t.removeEventListener("touchstart", e$),
                    t.removeEventListener("dragstart", eV))),
                  eI.current && eI.current.disconnect());
              }
            );
          }, []),
          (0, r.useImperativeHandle)(
            Y,
            () => ({
              ref: G.current,
              containerRef: X.current,
              prev() {
                eD();
              },
              next() {
                eT();
              },
              getIndex: () => el.current,
              setIndex(e, t) {
                (eH(e), t && eL(!0));
              },
              getRatio: () =>
                ev.current /
                (eb.current - J.current[J.current.length - 1].current.__width),
              setRatio(e) {
                ((ex.current = 0),
                  (e_.current = 0),
                  (ev.current =
                    e *
                    (eb.current -
                      J.current[J.current.length - 1].current.__width)),
                  eW());
              },
            }),
            [],
          ),
          (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)("div", {
              ref: Q,
              className: (0, n.default)("relative w-full", u),
              style: w,
              children: [
                (0, t.jsx)("div", {
                  ref: X,
                  className: (0, n.default)(
                    "relative z-1",
                    "select-none touch-pan-y",
                    p,
                    ef && !j && "cursor-grab active:cursor-grabbing",
                    N && "lg:overflow-clip",
                    _ && "lg-max:overflow-clip",
                  ),
                  children: (0, t.jsx)("div", {
                    ref: K,
                    className: (0, n.default)("flex w-max relative", f),
                    children: eR(),
                  }),
                }),
                ef &&
                  M &&
                  ($?.current
                    ? (0, c.createPortal)(
                        (0, t.jsx)(h, {
                          onPrev: eD,
                          onNext: eT,
                          loop: k,
                          hideMobile: R,
                          hideDesktop: L,
                          className: P,
                          buttonState: ec,
                          buttonTheme: T,
                          buttonClassName: V,
                          buttonVariant: D,
                        }),
                        $.current,
                      )
                    : (0, t.jsx)(h, {
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
                          P,
                        ),
                      })),
                ef &&
                  O &&
                  (0, t.jsx)("ul", {
                    className: (0, n.default)(
                      "flex justify-center mt-20",
                      "circle" === C ? "gap-12" : "gap-10",
                      g,
                      I && "lg:hidden",
                    ),
                    children: Array(
                      (r.Children.count(e) / S +
                        +(r.Children.count(e) % S != 0)) |
                        0,
                    )
                      .fill(null)
                      .map((e, r) => {
                        let l = r === (ea / S || 0);
                        return (0, t.jsx)(
                          "li",
                          {
                            className: (0, n.default)(
                              "cursor-pointer",
                              "after:block",
                              "flat" === C &&
                                "py-10 -my-10 after:w-50 after:h-0 after:border-t after:border-grey-stroke after:border-2",
                              "circle" === C &&
                                "py-10 px-5 -my-10 -mx-5 after:w-6 after:h-6 after:rounded-full",
                              "transition-opacity duration-300",
                              x,
                              l ? "opacity-100" : "opacity-50",
                              l && y && y,
                            ),
                            onClick: () => eH(r * S),
                          },
                          r,
                        );
                      }),
                  }),
              ],
            }),
          })
        );
      },
    );
    e.s(["Slideshow", 0, p], 43482);
  },
  53454,
  (e) => {
    "use strict";
    e.s([
      "emailIsValid",
      0,
      (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
      "slugify",
      0,
      (e, t = "-") =>
        (e = e
          .toString()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9 !\n]/g, "")
          .replace(/^[0-9]+ ?/, "")
          .replace(/\s+/g, t)),
    ]);
  },
  59782,
  5476,
  (e) => {
    "use strict";
    var t,
      r = e.i(71448),
      n = e.i(53014),
      l = e.i(70733);
    function i() {
      return (i = Object.assign.bind()).apply(null, arguments);
    }
    let s = (e) =>
      n.createElement(
        "svg",
        i(
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: 10,
            height: 8,
            fill: "none",
            viewBox: "0 0 10 8",
          },
          e,
        ),
        t ||
          (t = n.createElement("path", {
            stroke: "currentColor",
            d: "m1 4 3 3 5-6",
          })),
      );
    e.i(1607);
    var a = e.i(21740);
    e.s(["FormContext", () => a.default], 5476);
    var a = a;
    let o = (0, n.forwardRef)(
      (
        {
          name: e,
          id: t,
          children: i,
          className: o,
          required: c = !1,
          disabled: u = !1,
          theme: d = "light",
          error: f = !1,
          ...h
        },
        m,
      ) => {
        let { hasValidation: p } = (0, n.useContext)(a.default);
        return (0, r.jsxs)("label", {
          className: (0, l.default)(
            "relative inline-flex items-baseline gap-8",
            "font-light text-12 cursor-pointer text-grey-dark text-left",
            u && "cursor-auto opacity-60 pointer-events-none",
            o,
          ),
          htmlFor: t || e,
          children: [
            (0, r.jsx)("input", {
              ref: m,
              type: "checkbox",
              id: t || e,
              name: e || t,
              required: c,
              className: (0, l.default)(
                "absolute pointer-events-none opacity-0 peer",
              ),
              ...h,
            }),
            (0, r.jsx)("i", {
              className: (0, l.default)(
                "relative flex items-center justify-center",
                "dark" === d ? "text-white border-white/[15%]" : "text-black",
                "shrink-0 w-[16px] h-[16px] border peer-checked:[&>svg]:opacity-100",
                "transition-[background-color,border-color] duration-300 ease-quart-out",
                "light" === d
                  ? "peer-checked:bg-black peer-checked:border-white/40"
                  : "peer-checked:bg-white",
                p && "peer-invalid:border-red",
              ),
              "aria-hidden": !0,
              children: (0, r.jsx)(s, {
                className: (0, l.default)(
                  "w-10 m-auto opacity-0",
                  "transition-opacity duration-300 ease-quart-out",
                  "dark" === d ? "text-black" : "text-white",
                ),
              }),
            }),
            (0, r.jsx)("div", {
              className: (0, l.default)(
                "transition-color duration-300 ease-quart-out",
                f && "text-red",
                p && "peer-invalid:text-red",
              ),
              children: i,
            }),
          ],
        });
      },
    );
    e.s(["Checkbox", 0, o], 59782);
  },
  92359,
  (e) => {
    "use strict";
    var t = e.i(71448),
      r = e.i(53014),
      n = e.i(70733),
      l = e.i(92238);
    let i = ({ children: e }) => {
      let r = (0, l.default)();
      return (0, t.jsx)(t.Fragment, { children: r(e) });
    };
    var s = e.i(57739);
    e.i(1607);
    var a = e.i(5476);
    e.s(
      [
        "Form",
        0,
        ({
          children: e,
          className: o,
          autoReset: c = !0,
          additionalReset: u,
          errors: d,
          submitLabel: f,
          buttonTheme: h,
          buttonClassName: m,
          onSubmit: p,
          style: b,
        }) => {
          let [v, g] = (0, r.useState)(null),
            [x, y] = (0, r.useState)(!1),
            [w, k] = (0, r.useState)(!1),
            [j, N] = (0, r.useState)(!1),
            [_, E] = (0, r.useState)(!1),
            S = (0, l.default)(),
            M = (0, r.useRef)(S("An error occured, please try again later")),
            O = (0, r.useRef)();
          (0, r.useEffect)(
            () => () => {
              O.current && clearTimeout(O.current);
            },
            [],
          );
          let I = async (e) => {
            (e.preventDefault(), k(!0), y(!0), g(null));
            let t = e.currentTarget,
              r = new FormData(t),
              n = Array.from(r.entries()).reduce(
                (e, [t, r]) => ({ ...e, [t]: "on" === r || r }),
                {},
              ),
              l = await p({ form: t, formData: r, body: n });
            if (
              (k(!1),
              l && (l.status?.toString()[0] !== "2" || l.errors?.length))
            ) {
              let e = l.status || l.errors[0].code;
              g((e && d?.[e]) || M.current);
            } else
              (N(!0),
                (O.current = setTimeout(() => {
                  (N(!1), c && (y(!1), E(!0), u?.(), t.reset()));
                }, 5e3)));
          };
          return (
            (0, r.useEffect)(() => {
              let e;
              return (
                _ &&
                  (e = setTimeout(() => {
                    E(!1);
                  }, 100)),
                () => clearTimeout(e)
              );
            }, [_]),
            (0, t.jsxs)("form", {
              className: (0, n.default)("relative", o),
              style: b,
              onInvalid: (e) => {
                (e.preventDefault(), y(!0), g(null));
              },
              onSubmit: I,
              children: [
                (0, t.jsx)(a.FormContext.Provider, {
                  value: { hasValidation: x, isLoading: w, isReseting: _ },
                  children: e,
                }),
                (0, t.jsx)(s.Button, {
                  type: "submit",
                  variant: "primary",
                  theme: h,
                  enableLoader: !0,
                  loading: w,
                  loaded: j,
                  disabled: w || j,
                  className: (0, n.default)("mt-40", m),
                  children: f || (0, t.jsx)(i, { children: "Submit" }),
                }),
                (0, t.jsx)("div", {
                  "aria-hidden": !v,
                  className: (0, n.default)(
                    "absolute z-1 bottom-48 left-0 w-full text-10 mt-10 animate-fade-in uppercase transition-[opacity,visibility]",
                    "text-red pointer-events-none",
                    v ? "opacity-100 visible" : "opacity-0 invisible",
                  ),
                  children: v,
                }),
              ],
            })
          );
        },
      ],
      92359,
    );
  },
  34004,
  49422,
  (e) => {
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
      customError: "invalid",
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
      let { hasValidation: W, isReseting: P } = (0, i.useContext)(
          r.FormContext,
        ),
        D = "textarea" === s,
        T = (0, i.useRef)(null),
        [V, $] = (0, i.useState)(m || ""),
        z = ((e = {}) => {
          let t = { ...n, ...e };
          return (e, r = "") => {
            let { name: n, validity: l, value: i } = e,
              { placeholder: s, minLength: a, maxLength: o } = e,
              c = s?.replace("*", "") || r || n,
              u = Object.keys(t).find((e) => !!l[e] && e);
            if (u && t[u])
              return "function" == typeof t[u]
                ? t[u]({ error: u, value: i })
                : "patternMismatch" === u && t.exampleValidInput
                  ? `${c} ${t[u]} ${t.exampleValidInput}`
                  : "tooShort" === u && a
                    ? `${c} should be atleast ${a} characters`
                    : "tooLong" === u && o
                      ? `${c} cannot be more than ${o} characters`
                      : `${c} ${t[u]}`;
          };
        })(
          _
            ? {
                patternMismatch: "should be of format",
                exampleValidInput: _,
                ...M,
              }
            : M,
        ),
        q = W || (I && V),
        H = q && T.current && !T.current.validity?.valid && z(T.current),
        B = q && (N || H);
      (b && v && !j && (b += "*"), g && !p && b && (p = b));
      let A = (e = V) => {
        if ("function" == typeof S) {
          let { isValid: t, errorMessage: r } = S(e, T.current);
          T.current && T.current.setCustomValidity?.(t || !r ? "" : r);
        }
      };
      return (
        (0, i.useEffect)(A, [S]),
        (0, i.useEffect)(() => {
          P && $(m || "");
        }, [P]),
        (0, t.jsxs)("div", {
          className: (0, l.default)(
            u,
            "relative flex flex-col",
            !x && B && W && "mb-28",
          ),
          children: [
            (0, t.jsx)(s, {
              type: e,
              value: V,
              name: c,
              id: a || c,
              ref: (e) => {
                ((T.current = e), C?.current && (C.current = e));
              },
              required: v,
              placeholder: g ? " " : b,
              "aria-label": p,
              onChange: (e) => {
                let t = e.target.value,
                  r = E ? E(t) : t;
                ((e.formattedValue = r), $(r), A(r), O?.(e));
              },
              className: (0, l.default)(
                "block w-full h-40 text-10 placeholder:uppercase bg-transparent appearance-none border-b focus:outline-none focus:ring-0 duration-300 ease-quart-out transition-colors",
                "peer",
                D && "h-90 py-12 resize-none",
                "dark" === R
                  ? "text-white placeholder:opacity-100 placeholder:text-white"
                  : "placeholder:text-black",
                "dark" === R
                  ? "border-white/[15%] focus:border-white"
                  : "border-black/30 focus:border-black/30",
                W &&
                  "invalid:border-red invalid:focus:border-red-light invalid:active:border-red-light",
                w && "!border-red text-red",
                d,
              ),
              ...L,
            }),
            p &&
              (0, t.jsxs)("label", {
                htmlFor: a || c,
                className: (0, l.default)(
                  "order-first text-12 duration-300 ease-quart-out",
                  g
                    ? "absolute top-0 ml-1 px-4 transform -translate-y-1/2 z-2 origin-left peer-focus:top-0 pointer-events-none"
                    : "round" === y
                      ? "pl-16 pb-4"
                      : "pb-4",
                  D
                    ? "peer-placeholder-shown:top-18"
                    : "peer-placeholder-shown:top-1/2",
                  D || "round" !== y ? "left-12" : "left-16",
                  "dark" === R ? "bg-black" : "bg-white",
                  "text-white peer-focus:text-white",
                  W &&
                    "peer-invalid:text-red peer-invalid:peer-focus:text-red-light",
                  w && "text-red",
                  !!V && "top-0",
                  h,
                ),
                children: [p, v && "*"],
              }),
            B &&
              (0, t.jsx)("span", {
                className: (0, l.default)(
                  "absolute top-full",
                  x
                    ? "px-4 mr-1 -translate-y-1/2"
                    : "round" === y
                      ? "pl-20 pt-4 left-0"
                      : "pt-4 left-0",
                  "text-10 font-mono text-red duration-300 ease-quart-out transition-opacity pointer-events-none",
                  D ? "right-16" : "round" === y ? "right-20" : "right-12",
                  "dark" === R ? "bg-black" : "bg-white",
                  W ? "peer-invalid:opacity-100 absolute top-full" : "hidden",
                  w && "peer-invalid:opacity-100 absolute top-full",
                  f,
                ),
                children: B,
              }),
            o,
          ],
        })
      );
    };
    e.s(["InputOrTextArea", 0, s], 49422);
    let a = (0, i.forwardRef)(({ ...e }, r) =>
      (0, t.jsx)(s, { as: "input", ref: r, ...e }),
    );
    e.s(["Input", 0, a], 34004);
  },
  11081,
  (e) => {
    "use strict";
    var t = e.i(71448),
      r = e.i(70733);
    function n(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function l(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? n(Object(r), !0).forEach(function (t) {
              var n, l, i;
              ((n = e),
                (l = t),
                (i = r[t]),
                (l = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(l)) in n
                  ? Object.defineProperty(n, l, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[l] = i));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : n(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    function i(e) {
      return (
        "span" === e._type &&
        "text" in e &&
        "string" == typeof e.text &&
        (typeof e.marks > "u" ||
          (Array.isArray(e.marks) &&
            e.marks.every((e) => "string" == typeof e)))
      );
    }
    function s(e) {
      return (
        "string" == typeof e._type &&
        "@" !== e._type[0] &&
        (!("markDefs" in e) ||
          !e.markDefs ||
          (Array.isArray(e.markDefs) &&
            e.markDefs.every((e) => "string" == typeof e._key))) &&
        "children" in e &&
        Array.isArray(e.children) &&
        e.children.every((e) => "object" == typeof e && "_type" in e)
      );
    }
    function a(e) {
      return (
        s(e) &&
        "listItem" in e &&
        "string" == typeof e.listItem &&
        (typeof e.level > "u" || "number" == typeof e.level)
      );
    }
    function o(e) {
      return "@list" === e._type;
    }
    function c(e) {
      return "@span" === e._type;
    }
    function u(e) {
      return "@text" === e._type;
    }
    let d = ["strong", "em", "code", "underline", "strike-through"];
    function f(e, t, r) {
      if (!i(e) || !e.marks || !e.marks.length) return [];
      let n = e.marks.slice(),
        l = {};
      return (
        n.forEach((e) => {
          l[e] = 1;
          for (let n = t + 1; n < r.length; n++) {
            let t = r[n];
            if (
              t &&
              i(t) &&
              Array.isArray(t.marks) &&
              -1 !== t.marks.indexOf(e)
            )
              l[e]++;
            else break;
          }
        }),
        n.sort((e, t) =>
          (function (e, t, r) {
            let n = e[t],
              l = e[r];
            if (n !== l) return l - n;
            let i = d.indexOf(t),
              s = d.indexOf(r);
            return i !== s ? i - s : t.localeCompare(r);
          })(l, e, t),
        )
      );
    }
    function h(e, t, r) {
      return {
        _type: "@list",
        _key: `${e._key || `${t}`}-parent`,
        mode: r,
        level: e.level || 1,
        listItem: e.listItem,
        children: [e],
      };
    }
    function m(e, t) {
      let r = t.level || 1,
        n = t.listItem || "normal",
        l = "string" == typeof t.listItem;
      if (o(e) && (e.level || 1) === r && l && (e.listItem || "normal") === n)
        return e;
      if (!("children" in e)) return;
      let s = e.children[e.children.length - 1];
      return s && !i(s) ? m(s, t) : void 0;
    }
    var p = e.i(53014);
    let b = ["block", "list", "listItem", "marks", "types"],
      v = ["listItem"],
      g = ["_key"];
    function x(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function y(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? x(Object(r), !0).forEach(function (t) {
              var n, l, i;
              ((n = e),
                (l = t),
                (i = r[t]),
                (l = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(l)) in n
                  ? Object.defineProperty(n, l, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[l] = i));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : x(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
      }
      return e;
    }
    function w(e, t) {
      if (null == e) return {};
      var r,
        n,
        l = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++)
          ((r = i[n]),
            -1 === t.indexOf(r) &&
              {}.propertyIsEnumerable.call(e, r) &&
              (l[r] = e[r]));
      }
      return l;
    }
    let k = { textDecoration: "underline" },
      j = (e, t) =>
        `[@portabletext/react] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,
      N = (e) => j(`block type "${e}"`, "types");
    function _(e) {
      console.warn(e);
    }
    let E = { display: "none" },
      S = {
        types: {},
        block: {
          normal: ({ children: e }) => (0, t.jsx)("p", { children: e }),
          blockquote: ({ children: e }) =>
            (0, t.jsx)("blockquote", { children: e }),
          h1: ({ children: e }) => (0, t.jsx)("h1", { children: e }),
          h2: ({ children: e }) => (0, t.jsx)("h2", { children: e }),
          h3: ({ children: e }) => (0, t.jsx)("h3", { children: e }),
          h4: ({ children: e }) => (0, t.jsx)("h4", { children: e }),
          h5: ({ children: e }) => (0, t.jsx)("h5", { children: e }),
          h6: ({ children: e }) => (0, t.jsx)("h6", { children: e }),
        },
        marks: {
          em: ({ children: e }) => (0, t.jsx)("em", { children: e }),
          strong: ({ children: e }) => (0, t.jsx)("strong", { children: e }),
          code: ({ children: e }) => (0, t.jsx)("code", { children: e }),
          underline: ({ children: e }) =>
            (0, t.jsx)("span", { style: k, children: e }),
          "strike-through": ({ children: e }) =>
            (0, t.jsx)("del", { children: e }),
          link: ({ children: e, value: r }) =>
            (0, t.jsx)("a", { href: null == r ? void 0 : r.href, children: e }),
        },
        list: {
          number: ({ children: e }) => (0, t.jsx)("ol", { children: e }),
          bullet: ({ children: e }) => (0, t.jsx)("ul", { children: e }),
        },
        listItem: ({ children: e }) => (0, t.jsx)("li", { children: e }),
        hardBreak: () => (0, t.jsx)("br", {}),
        unknownType: ({ value: e, isInline: r }) => {
          let n = N(e._type);
          return r
            ? (0, t.jsx)("span", { style: E, children: n })
            : (0, t.jsx)("div", { style: E, children: n });
        },
        unknownMark: ({ markType: e, children: r }) =>
          (0, t.jsx)("span", {
            className: `unknown__pt__mark__${e}`,
            children: r,
          }),
        unknownList: ({ children: e }) => (0, t.jsx)("ul", { children: e }),
        unknownListItem: ({ children: e }) => (0, t.jsx)("li", { children: e }),
        unknownBlockStyle: ({ children: e }) =>
          (0, t.jsx)("p", { children: e }),
      };
    function M(e, t, r) {
      let n = t[r],
        l = e[r];
      return "function" == typeof n || (n && "function" == typeof l)
        ? n
        : n
          ? y(y({}, l), n)
          : l;
    }
    function O({
      value: e,
      components: r,
      listNestingMode: n,
      onMissingComponent: i = _,
    }) {
      let s = i || R,
        o = (function (e, t) {
          let r,
            n = [];
          for (let o = 0; o < e.length; o++) {
            let c = e[o];
            if (c) {
              var i, s;
              if (!a(c)) {
                (n.push(c), (r = void 0));
                continue;
              }
              if (!r) {
                ((r = h(c, o, t)), n.push(r));
                continue;
              }
              if (
                ((i = c),
                (s = r),
                (i.level || 1) === s.level && i.listItem === s.listItem)
              ) {
                r.children.push(c);
                continue;
              }
              if ((c.level || 1) > r.level) {
                let e = h(c, o, t);
                if ("html" === t) {
                  let t = r.children[r.children.length - 1],
                    n = l(l({}, t), {}, { children: [...t.children, e] });
                  r.children[r.children.length - 1] = n;
                } else r.children.push(e);
                r = e;
                continue;
              }
              if ((c.level || 1) < r.level) {
                let e = n[n.length - 1],
                  l = e && m(e, c);
                if (l) {
                  (r = l).children.push(c);
                  continue;
                }
                ((r = h(c, o, t)), n.push(r));
                continue;
              }
              if (c.listItem !== r.listItem) {
                let e = n[n.length - 1],
                  l = e && m(e, { level: c.level || 1 });
                if (l && l.listItem === c.listItem) {
                  (r = l).children.push(c);
                  continue;
                }
                ((r = h(c, o, t)), n.push(r));
                continue;
              }
              (console.warn("Unknown state encountered for block", c),
                n.push(c));
            }
          }
          return n;
        })(Array.isArray(e) ? e : [e], n || "html"),
        c = (0, p.useMemo)(
          () =>
            r
              ? (function (e, t) {
                  let {
                      block: r,
                      list: n,
                      listItem: l,
                      marks: i,
                      types: s,
                    } = t,
                    a = w(t, b);
                  return y(
                    y({}, e),
                    {},
                    {
                      block: M(e, t, "block"),
                      list: M(e, t, "list"),
                      listItem: M(e, t, "listItem"),
                      marks: M(e, t, "marks"),
                      types: M(e, t, "types"),
                    },
                    a,
                  );
                })(S, r)
              : S,
          [r],
        ),
        u = (0, p.useMemo)(() => I(c, s), [c, s]),
        d = o.map((e, t) =>
          u({ node: e, index: t, isInline: !1, renderNode: u }),
        );
      return (0, t.jsx)(t.Fragment, { children: d });
    }
    let I = (e, r) =>
      function n(l) {
        var i, d, f, h, m, p, b, x;
        let k,
          _,
          { node: E, index: S, isInline: M } = l,
          O = E._key || `node-${S}`;
        return o(E)
          ? (function (l, i, s) {
              let a = l.children.map((e, t) =>
                  n({
                    node: e._key
                      ? e
                      : y(y({}, e), {}, { _key: `li-${i}-${t}` }),
                    index: t,
                    isInline: !1,
                  }),
                ),
                o = e.list,
                c =
                  ("function" == typeof o ? o : o[l.listItem]) || e.unknownList;
              if (c === e.unknownList) {
                let e = l.listItem || "bullet";
                r(j(`list style "${e}"`, "list"), {
                  nodeType: "listStyle",
                  type: e,
                });
              }
              return (0, t.jsx)(
                c,
                {
                  value: l,
                  index: i,
                  isInline: !1,
                  renderNode: n,
                  children: a,
                },
                s,
              );
            })(E, S, O)
          : a(E)
            ? (function (l, i, s) {
                let a = C({ node: l, index: i, isInline: !1, renderNode: n }),
                  o = e.listItem,
                  c =
                    ("function" == typeof o ? o : o[l.listItem]) ||
                    e.unknownListItem;
                if (c === e.unknownListItem) {
                  let e = l.listItem || "bullet";
                  r(j(`list item style "${e}"`, "listItem"), {
                    type: e,
                    nodeType: "listItemStyle",
                  });
                }
                let u = a.children;
                if (l.style && "normal" !== l.style) {
                  let { listItem: e } = l;
                  u = n({ node: w(l, v), index: i, isInline: !1 });
                }
                return (0, t.jsx)(
                  c,
                  {
                    value: l,
                    index: i,
                    isInline: !1,
                    renderNode: n,
                    children: u,
                  },
                  s,
                );
              })(E, S, O)
            : c(E)
              ? (function (l, i, s) {
                  let { markDef: a, markType: o, markKey: d } = l,
                    f = e.marks[o] || e.unknownMark,
                    h = l.children.map((e, t) =>
                      n({ node: e, index: t, isInline: !0 }),
                    );
                  return (
                    f === e.unknownMark &&
                      r(j(`mark type "${o}"`, "marks"), {
                        nodeType: "mark",
                        type: o,
                      }),
                    (0, t.jsx)(
                      f,
                      {
                        text: (function e(t) {
                          let r = "";
                          return (
                            t.children.forEach((t) => {
                              u(t) ? (r += t.text) : c(t) && (r += e(t));
                            }),
                            r
                          );
                        })(l),
                        value: a,
                        markType: o,
                        markKey: d,
                        renderNode: n,
                        children: h,
                      },
                      s,
                    )
                  );
                })(E, 0, O)
              : E._type in e.types
                ? ((i = E),
                  (d = S),
                  (f = O),
                  (h = M),
                  (k = e.types[i._type])
                    ? (0, t.jsx)(
                        k,
                        y(
                          {},
                          { value: i, isInline: h, index: d, renderNode: n },
                        ),
                        f,
                      )
                    : null)
                : s(E)
                  ? (function (l, i, s, a) {
                      let o = C({
                          node: l,
                          index: i,
                          isInline: a,
                          renderNode: n,
                        }),
                        { _key: c } = o,
                        u = w(o, g),
                        d = u.node.style || "normal",
                        f =
                          ("function" == typeof e.block
                            ? e.block
                            : e.block[d]) || e.unknownBlockStyle;
                      return (
                        f === e.unknownBlockStyle &&
                          r(j(`block style "${d}"`, "block"), {
                            nodeType: "blockStyle",
                            type: d,
                          }),
                        (0, t.jsx)(
                          f,
                          y(y({}, u), {}, { value: u.node, renderNode: n }),
                          s,
                        )
                      );
                    })(E, S, O, M)
                  : u(E)
                    ? (function (r, n) {
                        if (
                          r.text ===
                          `
`
                        ) {
                          let r = e.hardBreak;
                          return r
                            ? (0, t.jsx)(r, {}, n)
                            : `
`;
                        }
                        return r.text;
                      })(E, O)
                    : ((m = E),
                      (p = S),
                      (b = O),
                      (x = M),
                      r(N(m._type), { nodeType: "block", type: m._type }),
                      (_ = e.unknownType),
                      (0, t.jsx)(
                        _,
                        y(
                          {},
                          { value: m, isInline: x, index: p, renderNode: n },
                        ),
                        b,
                      ));
      };
    function C(e) {
      let { node: t, index: r, isInline: n, renderNode: l } = e,
        s = (function (e) {
          var t, r;
          let { children: n } = e,
            l = null != (t = e.markDefs) ? t : [];
          if (!n || !n.length) return [];
          let s = n.map(f),
            a = { _type: "@span", children: [], markType: "<unknown>" },
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
                a.splice(t, 1);
              }
            let u = (o = o.slice(0, c))[o.length - 1];
            if (u) {
              for (let e of a) {
                let r = null == l ? void 0 : l.find((t) => t._key === e),
                  n = r ? r._type : e,
                  i = {
                    _type: "@span",
                    _key: t._key,
                    children: [],
                    markDef: r,
                    markType: n,
                    markKey: e,
                  };
                (u.children.push(i), o.push(i), (u = i));
              }
              if (i(t)) {
                let e = t.text.split(`
`);
                for (let t = e.length; t-- > 1; )
                  e.splice(
                    t,
                    0,
                    `
`,
                  );
                u.children = u.children.concat(
                  e.map((e) => ({ _type: "@text", text: e })),
                );
              } else u.children = u.children.concat(t);
            }
          }
          return a.children;
        })(t).map((e, t) =>
          l({ node: e, isInline: !0, index: t, renderNode: l }),
        );
      return {
        _key: t._key || `block-${r}`,
        children: s,
        index: r,
        isInline: n,
        node: t,
      };
    }
    function R() {}
    var L = e.i(57739),
      W = e.i(53454),
      P = e.i(43463);
    let D = ({ image: e, quote: r, author: n, company: l }) =>
      (0, t.jsxs)("div", {
        className:
          "w-full lg:span-w-12 lg:flex my-60 p-20 lg:border border-black/10 text-24 font-mono uppercase",
        children: [
          (0, t.jsxs)("div", {
            className: "order-1 lg:order-2 lg:ml-20 lg-max:mb-20 lg-max:gap-10",
            children: [
              (0, t.jsx)("p", {
                className:
                  "lg:mb-10 lg-max:after:mt-10 uppercase before:content-['“'] after:content-['”'] after:inline-block before:inline-block",
                children: r,
              }),
              (0, t.jsxs)("p", {
                className:
                  "flex items-center text-10 before:block before:w-4 before:h-4 before:mr-6 before:bg-black",
                children: [
                  (0, t.jsx)("span", { children: n }),
                  l &&
                    (0, t.jsxs)("span", {
                      className: "text-grey-dark",
                      children: [" (", l, ")"],
                    }),
                ],
              }),
            ],
          }),
          (0, t.jsx)(P.SanityImage, {
            image: e,
            className:
              "lg-max:order-2 lg:order:1 pointer-events-none select-none w-40 h-52 object-cover",
            mobileWidth: 40,
            desktopWidth: 40,
          }),
        ],
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
      fill: b,
    }) => {
      if ("video" === n && l?.srcs?.length) {
        let { poster: n, ...s } = l;
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
          className: (0, r.default)(e, i.className),
        });
      }
      return "image" === n && s
        ? (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(P.SanityImage, {
                image: s,
                desktopWidth: u,
                mobileWidth: d,
                width: f,
                height: h,
                fill: b,
                ...a,
                className: (0, r.default)(e, a.className),
                priority: p,
                desktopOnly: c || !!m,
              }),
              m &&
                (0, t.jsx)(P.SanityImage, {
                  image: s,
                  mobileWidth: d,
                  width: f,
                  height: f ? (f / m) | 0 : h,
                  fill: b,
                  ...(o || a),
                  className: (0, r.default)(e, (o || a).className),
                  priority: p,
                  desktopOnly: c,
                  mobileOnly: !0,
                }),
            ],
          })
        : null;
    };
    var $ = e.i(43482);
    let z = ({ slides: e, className: n }) =>
      (0, t.jsx)("div", {
        className: (0, r.default)("my-60 lg-max:-margin-mx-1", n),
        children: (0, t.jsx)($.Slideshow, {
          className: "w-full overflow-clip",
          wrapperClassName: "gutter-gap-1",
          containerClassName: "w-full h-full",
          snapping: !0,
          withButtons: !0,
          controllerClassName:
            "margin-left-1 margin-right-1 lg:inset-x-20 !bottom-1/2 !top-auto justify-between !translate-y-0 !translate-x-auto !first:ml-40",
          controllerButtonClassName: "!text-black hover:!text-white",
          controllerButtonTheme: "light",
          controllerButtonVariant: "primary",
          children: e.map(({ media: n, caption: l, _key: i }, s) =>
            (0, t.jsxs)(
              "article",
              {
                className: "w-screen lg:span-w-12 h-fit",
                children: [
                  (0, t.jsx)(V, {
                    ...n,
                    className: "w-screen lg:w-full lg-max:aspect-[375/252]",
                    videoProps: {
                      className: "[&_video]:h-full [&_video]:object-cover",
                    },
                    width: 690,
                    height: 465,
                    mobileWidth: 375,
                    ratioMobile: 375 / 252,
                    desktopWidth: 690,
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "flex items-center justify-between mt-10 lg-max:margin-mx-1",
                    children: [
                      (0, t.jsxs)("p", {
                        className: (0, r.default)(
                          "flex items-center before:block before:w-4 before:h-4 before:mr-6 before:bg-black before:rounded-full",
                          "text-grey-dark text-10 uppercase",
                        ),
                        children: [
                          (0, t.jsxs)("span", {
                            className: "text-black mr-12 normal-case",
                            children: ["Fig ", s + 1, "."],
                          }),
                          l,
                        ],
                      }),
                      (0, t.jsxs)("span", {
                        className: "text-10 text-black",
                        children: ["[", s + 1, "/", e.length, "]"],
                      }),
                    ],
                  }),
                ],
              },
              i,
            ),
          ),
        }),
      });
    var q = e.i(35628);
    let H = {
        normalStyle: "text-10 my-10 first:mt-0 last:mb-0 text-red",
        listStyle: "text-grey-dark text-10 mt-30",
        listBulletStyle:
          "list-disc uppercase [&_button]:text-black [&_li]:mb-2 [&>li]:gutter-ml-1 [&_li]:marker:text-black",
        listNumberStyle: (0, r.default)(
          "list-none [&_li]:marker:text-black uppercase mt-30 [&_strong]:font-normal [&_strong]:text-black",
          '[counter-reset:item] [&_li]:before:inline-block [&_li]:before:span-w-1-wide [&_li]:before:text-black [&_li]:before:[content:counters(item,".")"."] [&_li]:[counter-increment:item]',
        ),
        listItemStyle: "mb-30 last:mb-0 lg:span-w-9",
        h2: "text-10 uppercase font-medium mt-40 mb-30 first:mt-0 last:mb-0",
        h3: "font-serif text-10 mt-40 mb-30 first:mt-0 last:mb-0",
        tableStyle: "align-left uppercase text-grey text-left",
        tableRowStyle: "text-9 text-grey-dark text-20 leading-tight",
        "tableRowStyle-0":
          "!text-12 !text-black uppercase font-medium tracking-wide",
        tableCellStyle: "border border-grey-dark p-15 uppercase",
        imageStyle: "my-60",
      },
      B = (0, p.forwardRef)(
        (
          {
            as: e = "div",
            blocks: n,
            noDom: l,
            styles: i,
            imageDesktopWidth: s = 440,
            imageMobileWidth: a = 390,
            noDefaultStyles: o,
            className: c,
            withHeadingAnchorLink: u = !1,
          },
          d,
        ) => {
          if (!n) return null;
          let f = (({
            noDom: e = !1,
            styles: n = {},
            withHeadingAnchorLink: l,
            imageDesktopWidth: i,
            imageMobileWidth: s,
          }) => ({
            block: (
              ({ noDom: e = !1, styles: r = {}, withHeadingAnchorLink: n }) =>
              (l) => {
                let { style: i = "normal" } = l.node;
                if (e) return l.children;
                if (/^h\d/.test(i)) {
                  let e = (0, W.slugify)(l.node.children[0].text);
                  return (0, t.jsx)(i, {
                    id: e,
                    className: r[i],
                    children: n
                      ? (0, t.jsx)("a", { href: `#${e}`, children: l.children })
                      : l.children,
                  });
                }
                return "blockquote" === i
                  ? (0, t.jsx)("blockquote", {
                      className: r.blockquote,
                      children: l.children,
                    })
                  : "normal" === i
                    ? (0, t.jsx)("p", {
                        className: r.normal || r.normalStyle,
                        children: l.children,
                      })
                    : (0, t.jsx)("p", {
                        className: r[i],
                        children: l.children,
                      });
              }
            )({ noDom: e, styles: n, withHeadingAnchorLink: l }),
            list: (({ noDom: e = !1, styles: n = {} }) => ({
              bullet: ({ children: l }) =>
                e
                  ? l
                  : (0, t.jsx)("ul", {
                      className: (0, r.default)(n.listStyle, n.listBulletStyle),
                      children: l,
                    }),
              number: ({ children: l }) =>
                e
                  ? l
                  : (0, t.jsx)("ol", {
                      className: (0, r.default)(n.listStyle, n.listNumberStyle),
                      children: l,
                    }),
            }))({ noDom: e, styles: n }),
            listItem: (({ noDom: e = !1, styles: n = {} }) => ({
              bullet: ({ children: l }) =>
                e
                  ? l
                  : (0, t.jsx)("li", {
                      className: (0, r.default)(n.listItemStyle),
                      children: l,
                    }),
              number: ({ children: l }) =>
                e
                  ? l
                  : (0, t.jsx)("li", {
                      className: (0, r.default)(n.listItemStyle),
                      children: l,
                    }),
            }))({ noDom: e, styles: n }),
            types: {
              imageLocaleAlt: (
                ({
                  noDom: e = !1,
                  styles: r = {},
                  imageDesktopWidth: n,
                  imageMobileWidth: l,
                }) =>
                ({ value: i }) =>
                  e
                    ? i.asset._ref
                    : (0, t.jsx)(P.SanityImage, {
                        className: r.imageStyle,
                        image: i,
                        alt: i.alt,
                        desktopWidth: n,
                        mobileWidth: l,
                      })
              )({
                noDom: e,
                styles: n,
                imageDesktopWidth: i,
                imageMobileWidth: s,
              }),
              table: (
                ({ styles: e = {} }) =>
                (n) =>
                  (0, t.jsx)("table", {
                    className: (0, r.default)(e.tableStyle),
                    children: (0, t.jsx)("tbody", {
                      children: n.value.rows.map((n, l) =>
                        (0, t.jsx)(
                          "tr",
                          {
                            className: (0, r.default)(
                              e.tableRowStyle,
                              e[`tableRowStyle-${l}`],
                            ),
                            children: n.cells.map((n, i) =>
                              (0, t.jsx)(
                                "td",
                                {
                                  className: (0, r.default)(
                                    e.tableCellStyle,
                                    e[`tableColumnStyle-${i}`],
                                    e[`tableCellStyle-${l}-${i}`],
                                  ),
                                  children: n,
                                },
                                `${l}-${i}`,
                              ),
                            ),
                          },
                          n._key,
                        ),
                      ),
                    }),
                  })
              )({ noDom: e, styles: n }),
              blockquote: (
                ({ styles: e }) =>
                (e) => {
                  let { value: r } = e;
                  return (0, t.jsx)(D, { ...r });
                }
              )({ styles: n }),
              gallery: (
                ({ styles: e }) =>
                (e) => {
                  let { value: r } = e;
                  return (0, t.jsx)(z, { slides: r.slides });
                }
              )({ styles: n }),
              videoBlock: (
                ({
                  noDom: e = !1,
                  styles: r = {},
                  imageDesktopWidth: n,
                  imageMobileWidth: l,
                }) =>
                ({ value: i }) =>
                  e
                    ? i.asset._ref
                    : (0, t.jsx)(q.VideoPlayer, {
                        className: r.imageStyle,
                        title: i.title,
                        urls: i.video.srcs,
                        poster: i.video.poster,
                        desktopWidth: n,
                        mobileWidth: l,
                      })
              )({
                noDom: e,
                styles: n,
                imageDesktopWidth: i,
                imageMobileWidth: s,
              }),
            },
            marks: {
              em: ({ children: r }) =>
                e
                  ? r
                  : (0, t.jsx)("em", { className: n.emClassName, children: r }),
              strong: ({ children: r }) =>
                e
                  ? r
                  : (0, t.jsx)("strong", {
                      className: n.strongClassName,
                      children: r,
                    }),
              link: ({ children: r, value: n }) =>
                e
                  ? r
                  : (0, t.jsx)(L.Button, {
                      linkInput: n.href,
                      variant: "classicUnderlined",
                      children: r,
                    }),
            },
          }))({
            noDom: l,
            styles: o ? i : { ...H, ...i },
            withHeadingAnchorLink: u,
            imageDesktopWidth: s,
            imageMobileWidth: a,
          });
          return (0, t.jsx)(e, {
            ref: d,
            className: c,
            children: (0, t.jsx)(O, { value: n, components: f }),
          });
        },
      );
    e.s(["SanityBlockContent", 0, B], 11081);
  },
  84566,
  (e) => {
    "use strict";
    var t = e.i(71448),
      r = e.i(59782),
      n = e.i(92359),
      l = e.i(34004),
      i = e.i(11081),
      s = e.i(70733);
    e.s([
      "NewsletterForm",
      0,
      ({ className: e, listID: a, terms: o, emailPlaceholder: c }) => {
        let u = async ({ formData: e }) => {
          let t = Object.fromEntries(e.entries());
          return await fetch("/api/newsletter/subscribe", {
            method: "POST",
            body: JSON.stringify(t),
            headers: new Headers({
              "Content-Type": "application/json",
              Accept: "application/json",
            }),
          });
        };
        return (0, t.jsxs)(n.Form, {
          onSubmit: u,
          className: (0, s.default)("flex flex-col gap-10", e),
          buttonTheme: "dark",
          buttonClassName: "text-11 uppercase h-32 mt-30 w-60",
          children: [
            (0, t.jsx)(l.Input, {
              theme: "light",
              type: "email",
              placeholder: c,
              name: "email_address",
              floatLabel: !1,
              className: "h-36 mr-auto w-full lg:span-w-6 text-11",
              required: !0,
            }),
            (0, t.jsx)("div", {
              className: "mt-20",
              children: (0, t.jsx)(r.Checkbox, {
                required: !0,
                children: (0, t.jsx)(i.SanityBlockContent, {
                  blocks: o,
                  styles: {
                    normal:
                      "w-full lg:span-w-8 text-10 uppercase text-grey-dark leading-[1.4] my-10 first:mt-0 last:mb-0 [&>li]:mb-30 [&_button]:text-black [&>a]:underline",
                    large:
                      "span-w-12 lg:span-w-8 text-12 uppercase text-dark my-20 first:mt-0 last:mb-0",
                    h2: "w-full lg:span-w-10 flex items-center text-11 uppercase mt-30 first:mt-0 mb-30 before:block before:w-4 before:h-4 before:mr-6 before:bg-black border-t border-black/10 pt-30",
                    h3: "w-full lg:span-w-8 text-11 uppercase text-black lg:tracking-widest font-light first:mt-0",
                    tableStyle:
                      "span-w-12 lg:span-w-10 lg:-span-ml-1-wide mt-20",
                  },
                  className:
                    "text-11 [&>p]:tracking-widest uppercase [&>p>a]:!text-black [&>p]:leading-[1.2]",
                }),
              }),
            }),
            (0, t.jsx)("input", { type: "hidden", value: a, name: "listID" }),
          ],
        });
      },
    ]);
  },
  85354,
  (e) => {
    "use strict";
    var t,
      r,
      n,
      l,
      i,
      s = e.i(71448),
      a = e.i(53014),
      o = e.i(976),
      c = e.i(47982);
    e.i(8508);
    var u = e.i(36028),
      d = e.i(46053);
    function f() {
      return (f = Object.assign.bind()).apply(null, arguments);
    }
    let h = (e) =>
      a.createElement(
        "svg",
        m(
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: 84,
            height: 23,
            fill: "none",
            viewBox: "0 0 84 23",
          },
          e,
        ),
        a.createElement("path", {
          fill: "currentColor",
          d: "M4.13256 5.71678L2.67833 4.75896C2.8049 4.73084 2.92841 4.69251 3.04783 4.64523C3.61321 4.42086 4.08832 3.9905 4.35835 3.43927C4.49695 3.15637 4.57059 2.85353 4.59668 2.54048C4.59668 2.54048 5.83151 4.0618 5.82972 4.06512C5.74508 4.33831 5.67731 4.4896 5.58756 4.60664C5.54358 4.6644 5.49243 4.7196 5.41188 4.79524C5.41188 4.79524 4.96183 5.29051 4.73553 5.4464C4.6046 5.53661 4.45961 5.61507 4.2126 5.68764C4.18396 5.69608 4.15787 5.7063 4.13256 5.71678ZM19.5712 6.16119C19.5763 6.19748 19.5875 6.23172 19.5845 6.27159C19.5384 6.85528 20.1258 7.8315 20.1826 7.90561C20.2746 8.03543 20.4204 8.15069 20.6221 8.31194C20.6349 8.32166 20.6421 8.3306 20.6538 8.34057L22.3871 7.77272C22.3213 7.79419 22.181 7.66897 22.1313 7.6337C22.0193 7.55397 21.8943 7.49468 21.7823 7.4129C21.5366 7.23299 21.3386 6.99967 21.1921 6.73977C21.0446 6.47757 20.9479 6.18879 20.8922 5.89388C20.8658 5.75486 20.8507 5.61967 20.852 5.47988C20.8525 5.42391 20.817 5.25678 20.8712 5.21691L19.5712 6.16119ZM2.74583 8.28741C2.98518 8.12232 3.10741 8.01294 3.19103 7.89156C3.23399 7.83022 3.2726 7.76173 3.31351 7.67433C3.31351 7.67433 3.67228 6.98893 3.73032 6.82589C3.78709 6.67562 3.8078 6.50849 3.80371 6.24527C3.8032 6.21716 3.80985 6.19416 3.81215 6.16809L2.11167 5.04824C2.1981 5.35874 2.22367 5.67998 2.1894 6.00044C2.12113 6.63294 1.7974 7.22711 1.3072 7.6268C1.2044 7.71062 1.09445 7.78576 0.977842 7.85092L2.69827 8.33469C2.71515 8.3191 2.72666 8.30198 2.74583 8.28741ZM3.79604 16.9323C3.79349 16.9058 3.78607 16.8823 3.78658 16.8539C3.79604 16.2119 3.37719 15.5715 3.34215 15.4974C3.2882 15.3827 3.24549 15.2919 3.18873 15.2178C3.09641 15.0877 2.95015 14.9699 2.74762 14.8084C2.72717 14.7928 2.71489 14.7732 2.69699 14.7568L0.705765 15.4131C0.786314 15.4473 0.866607 15.4762 0.946134 15.5176C1.09445 15.5861 1.24199 15.6645 1.38059 15.7645C1.97768 16.1948 2.30038 16.9201 2.30601 17.5646C2.30729 17.7141 2.30703 17.8863 2.29169 18.0251L3.79604 16.9323ZM0.777875 14.8018L2.52234 14.2296C2.52797 14.2033 2.52797 14.1815 2.53692 14.1542C2.57502 14.0387 2.60136 13.937 2.62028 13.8302C2.64406 13.7287 2.65429 13.6513 2.65531 13.5713C2.65787 13.4095 2.52464 12.5611 2.47376 12.4111C2.44819 12.3354 2.41443 12.2649 2.36789 12.188C2.30473 12.0717 2.24873 11.9695 2.17994 11.8731C2.16588 11.8532 2.15974 11.8005 2.14798 11.8005H0C1.07322 12.5672 1.21131 13.9255 0.777875 14.8018ZM2.17918 11.2151C2.3303 10.9917 2.42722 10.8402 2.4735 10.6947C2.50802 10.5971 2.57016 10.1284 2.58704 10.0014C2.59778 9.91939 2.69955 9.44866 2.54408 8.94138C2.53615 8.91685 2.53564 8.90177 2.53027 8.878L0.546456 8.33622C0.681472 8.5445 0.778387 8.80644 0.859703 9.06762C0.992418 9.49338 1.03845 10.3423 0.563589 11.074C0.503497 11.167 0.437012 11.2894 0.358508 11.2894H2.14414C2.15667 11.2894 2.16358 11.237 2.17918 11.2151ZM17.5638 4.09374C17.6367 4.34061 17.7068 4.49216 17.8055 4.61636C17.9185 4.76228 18.5885 5.42493 18.6452 5.46761C18.7623 5.55808 18.914 5.62554 19.1876 5.71013C19.2019 5.71524 19.2116 5.72368 19.2252 5.7293L20.7208 4.64319C20.1094 4.60383 19.5464 4.34547 19.1265 3.93735C18.7923 3.61253 18.5488 3.19291 18.4437 2.71298L17.5204 3.98283C17.537 4.01733 17.5518 4.05362 17.5638 4.09374ZM14.963 2.62839C15.1279 2.86733 15.2374 2.98974 15.3591 3.07357C15.4202 3.11624 16.2625 3.55478 16.4251 3.61253C16.5755 3.66927 16.7435 3.68843 17.0066 3.68588C17.0225 3.68588 17.036 3.68767 17.0511 3.68818L18.1704 2.14897C17.8699 2.23432 17.5569 2.26524 17.2457 2.23688C16.7714 2.19369 16.3152 2.00662 15.9444 1.71273C15.7178 1.53308 15.523 1.3133 15.3754 1.06209L14.8901 2.55479C14.9146 2.57881 14.9405 2.59874 14.963 2.62839ZM9.08902 2.41934C9.20486 2.45768 9.30791 2.484 9.41505 2.50291C9.51632 2.52668 9.59431 2.5369 9.6746 2.53792C9.83544 2.53767 10.6862 2.40733 10.8358 2.35648C10.9117 2.33092 10.9826 2.29719 11.0595 2.25068C11.1731 2.18909 11.2692 2.13159 11.3656 2.06284C11.3807 2.05237 11.4145 2.04828 11.4145 2.03908V0C10.903 0.569378 10.6103 0.875022 9.78609 1.00893C9.4194 1.06848 8.80007 1.02708 8.31472 0.786345L8.99952 2.40248C9.0297 2.40836 9.05757 2.40912 9.08902 2.41934ZM12.5585 2.35622C12.6562 2.39072 13.7233 2.68436 14.3114 2.42829C14.3232 2.42318 14.3286 2.42624 14.3406 2.42292L14.9384 0.5497C14.7126 0.706611 14.0984 1.11371 13.0666 0.950156C12.5654 0.870422 11.9259 0.498333 11.9259 0.431889V2.01838C11.9259 2.03294 11.9975 2.04266 12.0246 2.06182C12.2483 2.21311 12.4128 2.30997 12.5585 2.35622ZM6.39177 3.66876C7.00062 3.7076 7.67391 3.25936 7.74807 3.22434C7.86288 3.17042 7.9534 3.12774 8.02731 3.07101C8.15746 2.97876 8.27432 2.83258 8.43619 2.63018C8.44898 2.61357 8.46355 2.60386 8.47659 2.58903L7.73452 0.839756C7.71227 0.889078 7.69104 0.938144 7.66522 0.987978C7.59566 1.13773 7.50642 1.28826 7.40311 1.42242C6.89706 2.07843 5.96908 2.33961 5.60214 2.34753C5.44104 2.35546 5.2871 2.3483 5.13776 2.33016L6.23707 3.6846C6.28591 3.67463 6.33577 3.66646 6.39177 3.66876ZM5.80722 19.0315C5.73459 18.7846 5.66453 18.6331 5.56582 18.5089C5.45229 18.3627 4.91453 17.8332 4.91453 17.8332C4.83781 17.7517 4.78283 17.7003 4.72607 17.6581C4.60844 17.5671 4.4568 17.4997 4.18396 17.4153C4.15864 17.4061 4.141 17.3923 4.11798 17.3819L2.47273 18.5766C2.46302 18.5837 2.45202 18.5868 2.44179 18.5924C2.80541 18.6154 3.15881 18.7064 3.48075 18.8792C3.84437 19.0744 4.15276 19.3622 4.37753 19.7049C4.55858 19.9809 4.68515 20.2926 4.74243 20.6205L5.83765 19.1143C5.82614 19.0874 5.81591 19.0606 5.80722 19.0315ZM21.1919 11.9066C21.041 12.1299 20.9436 12.2838 20.8978 12.4289C20.8633 12.5266 20.5884 13.7044 20.8257 14.1905C20.8275 14.1943 20.8254 14.2005 20.8267 14.2043L22.5055 14.7525C22.4208 14.5932 22.364 14.4192 22.2904 14.2365C22.1278 13.8337 22.1048 12.8552 22.5919 12.2386C22.6937 12.1098 22.7949 11.9521 22.9225 11.8289C22.9266 11.8246 22.9317 11.8005 22.9358 11.8005H21.242C21.2259 11.8005 21.2141 11.8754 21.1919 11.9066ZM20.6257 14.8378C20.5296 14.9043 20.4357 14.9733 20.3475 15.0499C20.2629 15.1233 20.2074 15.2084 20.1475 15.3039C20.011 15.5224 19.8934 15.7522 19.7857 15.986C19.7197 16.1294 19.6269 16.2883 19.5949 16.4427C19.5655 16.5843 19.565 16.7366 19.5671 16.8807C19.5671 16.8879 19.565 16.8932 19.565 16.9004L20.9957 17.939C20.9446 17.6466 20.9461 17.3456 21.0014 17.054C21.1093 16.4844 21.4166 15.9717 21.8582 15.6114C22.0153 15.4831 22.1894 15.3742 22.3773 15.2891L20.716 14.7496C20.6876 14.7793 20.6618 14.8102 20.6257 14.8378ZM19.1584 17.4376C18.9119 17.5102 18.7603 17.5802 18.636 17.6788C18.4903 17.7918 17.9599 18.3297 17.9599 18.3297C17.8783 18.4061 17.827 18.4613 17.7845 18.5181C17.6937 18.6356 17.626 18.7872 17.5418 19.0598C17.5395 19.0665 17.5354 19.0706 17.5331 19.077L18.5851 20.5242C18.6317 20.1958 18.7406 19.8827 18.9137 19.5993C19.194 19.1403 19.6218 18.7859 20.1161 18.5899C20.3145 18.5112 20.5237 18.4583 20.7385 18.4342L19.2904 17.3829C19.2497 17.4046 19.207 17.4233 19.1584 17.4376ZM22.2037 9.8463C22.1181 9.35512 22.1825 8.83379 22.4183 8.35769L20.8538 8.86343C20.8479 8.8987 20.8461 8.93192 20.8341 8.96898C20.7963 9.08474 20.7699 9.18722 20.751 9.29379C20.7272 9.39499 20.717 9.47268 20.7157 9.55343C20.7137 9.71418 20.8467 10.5639 20.8975 10.7137C20.9229 10.7885 20.9564 10.8593 21.0034 10.9368C21.0668 11.0535 21.1228 11.1519 21.1911 11.2473C21.1988 11.2585 21.2013 11.2894 21.2085 11.2894H23C22.5727 10.7783 22.2978 10.3858 22.2037 9.8463ZM14.2823 20.7061C14.1664 20.6678 14.0634 20.6415 13.9562 20.6226C13.8547 20.5988 13.7767 20.5886 13.6967 20.5876C13.5335 20.5893 12.6846 20.7181 12.5352 20.769C12.4601 20.7943 12.3895 20.8278 12.3118 20.8748C12.1982 20.9361 12.0883 20.9939 11.9914 21.0626C11.9755 21.0736 11.9259 21.0782 11.9259 21.0879V22.9936C12.4373 22.565 12.8283 22.2783 13.3287 22.2783H13.3374C13.3474 22.2783 13.3771 22.2783 13.3771 22.2783H13.3791C13.8951 22.0228 14.4682 22.253 14.9947 22.5533L14.4122 20.7473C14.37 20.7417 14.3273 20.7204 14.2823 20.7061ZM10.8123 20.7693C10.7148 20.7348 9.56413 20.495 9.05348 20.6982C9.03097 20.7072 9.00822 20.7097 8.98597 20.7148L8.38019 22.5778C8.55816 22.4759 8.74867 22.3879 8.96628 22.3289C9.78277 22.1068 10.6067 22.3601 10.9677 22.622C11.1005 22.7184 11.2421 22.8247 11.3654 22.9525C11.3812 22.967 11.4145 22.9847 11.4145 23V21.1053C11.4145 21.091 11.3587 21.0821 11.3326 21.0637C11.1086 20.9119 10.9557 20.8145 10.8123 20.7693ZM12.3539 20.3179C12.1274 20.3913 11.9198 20.5285 11.7269 20.666C11.6694 20.7066 11.6643 20.7051 11.6068 20.6645C11.473 20.574 11.3395 20.4818 11.1963 20.4064C11.0549 20.332 10.9174 20.2955 10.7609 20.2625C10.4249 20.192 10.0679 20.1178 9.72472 20.1017C9.4483 20.0887 9.16983 20.1503 8.90772 20.2344C8.83612 20.2574 8.83254 20.2523 8.80262 20.2124C8.70852 20.0762 8.60879 19.942 8.49219 19.824C8.37533 19.7056 8.22983 19.6223 8.08791 19.537C7.57444 19.2288 7.03566 18.953 6.42604 18.953C6.40149 18.953 6.37413 18.9543 6.35035 18.9535C6.31966 18.9535 6.30381 18.9528 6.29767 18.9505C6.29153 18.9415 6.28258 18.9236 6.27389 18.8942C6.17544 18.5602 6.02969 18.2988 5.80031 18.0384C5.58526 17.7938 5.35358 17.5636 5.10784 17.3499C4.87463 17.147 4.62276 17.0611 4.33815 16.9543C4.27704 16.9323 4.27243 16.929 4.2732 16.8552C4.27013 16.2168 4.14662 15.9663 3.89014 15.5084C3.84795 15.4302 3.8142 15.3579 3.78249 15.2909C3.72137 15.1608 3.66358 15.0384 3.58048 14.9308C3.45441 14.7519 3.28539 14.6173 3.03556 14.4179C2.97955 14.3755 2.97981 14.3696 2.99976 14.3088C3.0688 14.0995 3.13196 13.8677 3.14091 13.6467C3.15114 13.397 3.09667 13.1501 3.0578 12.9048C3.022 12.6791 2.99771 12.4494 2.92662 12.2311C2.85349 12.0068 2.71361 11.7952 2.57732 11.6043C2.53564 11.5455 2.53947 11.5401 2.57885 11.4844C2.73407 11.2552 2.86806 11.0571 2.93506 10.8453C2.98416 10.7073 3.00206 10.5716 3.02098 10.4279C3.0307 10.3538 3.04093 10.2744 3.05703 10.1875C3.1675 9.64492 3.19205 9.38247 3.00896 8.78651C2.9862 8.71572 2.99132 8.71215 3.03121 8.68173C3.31121 8.48853 3.47385 8.33954 3.59096 8.16934C3.64952 8.08629 3.70168 7.99454 3.74848 7.89334L3.9106 7.59332C4.03922 7.35821 4.12259 7.17779 4.1883 6.99353C4.26655 6.78577 4.29647 6.56701 4.29136 6.23786C4.29084 6.20233 4.29494 6.18087 4.29136 6.18036C4.29826 6.17524 4.31488 6.16528 4.35043 6.1548C4.70203 6.0513 4.97487 5.89235 5.24695 5.64906C5.47684 5.44359 5.69215 5.22228 5.89134 4.98717C6.08901 4.75385 6.20152 4.51158 6.29179 4.21973C6.31378 4.15917 6.3148 4.15431 6.39126 4.15533C7.02952 4.15201 7.28037 4.02858 7.73861 3.77226C7.81685 3.73009 7.88922 3.69636 7.95622 3.66467C8.08638 3.60359 8.20886 3.54583 8.31651 3.46278C8.49551 3.33679 8.63027 3.16787 8.82973 2.91819C8.87218 2.86222 8.87831 2.86299 8.93892 2.88241C9.14988 2.95192 9.37925 3.01632 9.60223 3.0222C9.83928 3.02859 10.074 2.98259 10.3072 2.94656C10.5397 2.91078 10.7754 2.88369 11.0005 2.81316C11.2342 2.74007 11.4464 2.60156 11.6446 2.46023C11.7039 2.41883 11.7093 2.42164 11.765 2.46151C11.9944 2.61663 12.1926 2.75054 12.4046 2.8175C12.5427 2.86657 12.6784 2.88446 12.8222 2.90337C12.8963 2.91308 12.9758 2.9233 13.0628 2.9394C13.6054 3.04954 13.8678 3.07459 14.4643 2.89161C14.5359 2.8681 14.5395 2.87398 14.5694 2.91308C14.674 3.06488 14.7858 3.21489 14.9205 3.3419C15.0568 3.47019 15.2345 3.56577 15.3959 3.65853C15.6421 3.80011 15.8994 3.92252 16.1646 4.02449C16.2871 4.07151 16.4147 4.12518 16.5438 4.14511C16.677 4.16581 16.8115 4.17297 16.9463 4.17297C16.9708 4.17297 16.9995 4.17348 17.0217 4.17246C17.0529 4.17246 17.0713 4.17629 17.0741 4.17552C17.0795 4.18344 17.0885 4.1998 17.0982 4.232C17.2002 4.57853 17.3559 4.84866 17.5955 5.11699C17.8021 5.35108 18.0277 5.56932 18.265 5.77198C18.4972 5.97029 18.7432 6.08197 19.0342 6.17167C19.0948 6.19364 19.0991 6.19671 19.0986 6.27108C19.096 6.61122 19.1469 6.94396 19.2904 7.25394C19.3686 7.42287 19.4589 7.58975 19.5435 7.75713C19.6384 7.94471 19.744 8.12794 19.8737 8.2938C20.0005 8.45582 20.1762 8.58053 20.3368 8.70831C20.3925 8.75073 20.392 8.75636 20.3723 8.81794C20.3022 9.03108 20.2363 9.26184 20.2314 9.48724C20.2263 9.73334 20.2764 9.97612 20.3135 10.2181C20.3488 10.4484 20.3726 10.6832 20.449 10.9046C20.5247 11.1231 20.6602 11.3339 20.7947 11.521C20.8016 11.5309 20.8057 11.5378 20.8093 11.5491C20.8093 11.5664 20.8162 11.5815 20.8193 11.5981C20.8144 11.6096 20.8068 11.6224 20.793 11.6421C20.7024 11.776 20.6101 11.9099 20.5347 12.053C20.461 12.1931 20.4242 12.3285 20.3917 12.4836C20.3772 12.5539 20.3621 12.6252 20.3475 12.6973C20.2918 12.9712 20.2411 13.2546 20.2296 13.5281C20.2181 13.8023 20.2792 14.0801 20.3631 14.3395C20.3861 14.4105 20.381 14.4144 20.3416 14.4445C20.0708 14.6308 19.8596 14.8266 19.6921 15.11C19.5118 15.4146 19.352 15.7315 19.2139 16.0573C19.1009 16.3241 19.0815 16.6019 19.0815 16.8886C19.082 16.9239 19.0781 16.9431 19.0787 16.9479C19.0697 16.9538 19.0518 16.9628 19.0219 16.9717C18.7023 17.0657 18.4361 17.2032 18.187 17.424C17.9367 17.6459 17.7001 17.8833 17.4789 18.134C17.2754 18.365 17.182 18.62 17.0808 18.9063C17.0593 18.9673 17.0565 18.9707 16.9813 18.9709C16.643 18.9722 16.3157 19.0169 16.0063 19.1587C15.8498 19.2306 15.7043 19.3169 15.5486 19.391C15.3673 19.4769 15.1888 19.5715 15.0277 19.6916C14.8354 19.8349 14.6914 20.0223 14.5428 20.2083C14.4999 20.2643 14.4943 20.2635 14.4337 20.2441C14.2206 20.1741 13.9887 20.1097 13.7637 20.1038C13.5218 20.0977 13.2827 20.1454 13.0449 20.1828C12.813 20.2183 12.578 20.2456 12.3539 20.3179ZM8.40857 20.4971C8.24313 20.2579 8.13368 20.1355 8.01196 20.0517C7.9511 20.009 7.88257 19.9704 7.79435 19.929C7.79435 19.929 7.10904 19.571 6.9459 19.5129C6.79554 19.4562 6.63061 19.4353 6.36492 19.4396C6.33628 19.4404 6.31532 19.4337 6.28974 19.4317L5.10708 21.0583C5.42646 20.9829 5.75582 20.9688 6.08006 21.0202C6.67075 21.1135 7.21312 21.4281 7.58799 21.886C7.70076 22.0238 7.79844 22.1746 7.87771 22.3361L8.45792 20.5513C8.4413 20.5331 8.42417 20.5178 8.40857 20.4971ZM16.9795 19.4567C16.3962 19.4071 15.6976 19.8664 15.6232 19.9014C15.5089 19.9553 15.4197 19.9977 15.3458 20.0545C15.2161 20.1462 15.1021 20.2909 14.9418 20.4915C14.9364 20.4984 14.9341 20.503 14.9285 20.5099L15.5056 22.2632C15.5082 22.2581 15.524 22.2528 15.5268 22.2476C15.5956 22.0989 15.7132 21.9489 15.8163 21.8135C16.0965 21.4455 16.7762 20.9216 17.6175 20.8883C17.842 20.8794 18.0254 20.8942 18.2274 20.9346L17.1138 19.4409C17.0706 19.4483 17.0281 19.4608 16.9795 19.4567Z M8.34491 13.1681C7.45791 13.1681 6.89454 12.7608 6.84959 12.1349L6.8466 12.099H7.56878L7.57178 12.1229C7.59875 12.4074 7.91639 12.5991 8.36588 12.5991C8.7974 12.5991 9.09406 12.3954 9.09406 12.102C9.09406 11.8564 8.90827 11.7096 8.43481 11.6168L8.03626 11.5359C7.26013 11.3862 6.92751 11.0418 6.92751 10.5027V10.4997C6.92751 9.85287 7.51784 9.41563 8.34191 9.41563C9.20494 9.41563 9.72036 9.85287 9.7683 10.4368L9.7713 10.4698H9.06709L9.0611 10.4398C9.01315 10.1733 8.74945 9.98464 8.34191 9.98763C7.94336 9.98763 7.67367 10.1643 7.67367 10.4548C7.67367 10.6974 7.85946 10.8471 8.30895 10.937L8.7075 11.0178C9.5016 11.1736 9.84322 11.476 9.84322 12.0241V12.0271C9.84322 12.7279 9.27087 13.1681 8.34491 13.1681Z M11.2376 13.0783V9.50547H11.9838V13.0783H11.2376Z M13.555 13.0783V9.50547H15.0983C15.9403 9.50547 16.4258 9.93971 16.4258 10.6285V10.6345C16.4258 11.0987 16.1711 11.491 15.7366 11.6467L16.5367 13.0783H15.6886L14.9784 11.7516H14.3012V13.0783H13.555ZM14.3012 11.2365H15.0204C15.4219 11.2365 15.6617 11.0178 15.6617 10.6495V10.6435C15.6617 10.2841 15.4129 10.0565 15.0084 10.0565H14.3012V11.2365Z M39.392 13.848C39.392 14.8293 39.0133 15.6293 38.256 16.248C37.5093 16.856 36.512 17.16 35.264 17.16C33.8987 17.16 32.8 16.8133 31.968 16.12C31.1467 15.416 30.6933 14.5307 30.608 13.464H32.4C32.6133 14.9573 33.5467 15.704 35.2 15.704C35.9253 15.704 36.528 15.5493 37.008 15.24C37.4987 14.9307 37.744 14.5147 37.744 13.992C37.744 13.7467 37.6853 13.528 37.568 13.336C37.4613 13.144 37.3227 12.9893 37.152 12.872C36.992 12.744 36.7733 12.6267 36.496 12.52C36.2293 12.4133 35.9733 12.3333 35.728 12.28C35.4933 12.216 35.2 12.1413 34.848 12.056C34.688 12.024 34.5707 11.9973 34.496 11.976C34.0693 11.8693 33.696 11.7627 33.376 11.656C33.0667 11.5493 32.7413 11.4053 32.4 11.224C32.0693 11.0427 31.792 10.84 31.568 10.616C31.3547 10.392 31.1787 10.1093 31.04 9.768C30.9013 9.42667 30.832 9.048 30.832 8.632C30.832 7.736 31.2053 6.96267 31.952 6.312C32.6987 5.65067 33.6693 5.32 34.864 5.32C36.0693 5.32 37.0667 5.64533 37.856 6.296C38.656 6.94667 39.1253 7.8 39.264 8.856H37.52C37.4347 8.25867 37.1627 7.76267 36.704 7.368C36.2453 6.97333 35.648 6.776 34.912 6.776C34.2507 6.776 33.68 6.936 33.2 7.256C32.72 7.576 32.48 8.00267 32.48 8.536C32.48 8.74933 32.5067 8.94133 32.56 9.112C32.6133 9.272 32.7093 9.416 32.848 9.544C32.9867 9.672 33.1147 9.77867 33.232 9.864C33.3493 9.94933 33.536 10.0347 33.792 10.12C34.048 10.1947 34.2453 10.2533 34.384 10.296C34.5227 10.328 34.7627 10.3867 35.104 10.472C35.4453 10.5467 35.6853 10.6 35.824 10.632C36.336 10.7493 36.7733 10.8773 37.136 11.016C37.4987 11.1547 37.8667 11.3467 38.24 11.592C38.624 11.8267 38.912 12.136 39.104 12.52C39.296 12.8933 39.392 13.336 39.392 13.848Z M43.7224 5.48H45.3064V17H43.7224V5.48Z M57.9356 17H56.0956L53.1036 12.072H51.4876V17H49.9036V5.48H53.8556C54.997 5.48 55.8983 5.77867 56.5596 6.376C57.221 6.97333 57.5516 7.77333 57.5516 8.776C57.5516 9.65067 57.301 10.3707 56.7996 10.936C56.2983 11.4907 55.6156 11.8427 54.7516 11.992L57.9356 17ZM51.4876 6.968V10.584H53.8716C54.533 10.584 55.0396 10.424 55.3916 10.104C55.7436 9.77333 55.9196 9.33067 55.9196 8.776C55.9196 8.2 55.7383 7.75733 55.3756 7.448C55.013 7.128 54.5116 6.968 53.8716 6.968H51.4876Z M62.5284 10V5.63636H64.054C64.358 5.63636 64.6087 5.68892 64.8061 5.79403C65.0035 5.89773 65.1506 6.03764 65.2472 6.21378C65.3438 6.38849 65.392 6.58239 65.392 6.79545C65.392 6.98295 65.3587 7.13778 65.2919 7.25994C65.2266 7.3821 65.1399 7.47869 65.032 7.54972C64.9254 7.62074 64.8097 7.6733 64.6847 7.70739V7.75C64.8182 7.75852 64.9524 7.8054 65.0874 7.89062C65.2223 7.97585 65.3352 8.09801 65.4261 8.2571C65.517 8.41619 65.5625 8.6108 65.5625 8.84091C65.5625 9.05966 65.5128 9.25639 65.4134 9.43111C65.3139 9.60582 65.157 9.74432 64.9425 9.84659C64.728 9.94886 64.4489 10 64.1051 10H62.5284ZM63.0568 9.53125H64.1051C64.4503 9.53125 64.6953 9.46449 64.8402 9.33097C64.9865 9.19602 65.0597 9.03267 65.0597 8.84091C65.0597 8.69318 65.022 8.55682 64.9467 8.43182C64.8714 8.3054 64.7642 8.20455 64.625 8.12926C64.4858 8.05256 64.321 8.0142 64.1307 8.0142H63.0568V9.53125ZM63.0568 7.55398H64.0369C64.196 7.55398 64.3395 7.52273 64.4673 7.46023C64.5966 7.39773 64.6989 7.30966 64.7742 7.19602C64.8509 7.08239 64.8892 6.94886 64.8892 6.79545C64.8892 6.60369 64.8224 6.44105 64.6889 6.30753C64.5554 6.17259 64.3438 6.10511 64.054 6.10511H63.0568V7.55398Z M67.6792 5.63636V10H67.1508V5.63636H67.6792Z M69.4586 10V5.63636H72.0922V6.10511H69.9871V7.57955H71.9558V8.0483H69.9871V9.53125H72.1263V10H69.4586Z M73.7646 10V5.63636H75.239C75.5799 5.63636 75.8598 5.6946 76.0785 5.81108C76.2973 5.92614 76.4592 6.08452 76.5643 6.28622C76.6694 6.48793 76.722 6.71733 76.722 6.97443C76.722 7.23153 76.6694 7.45952 76.5643 7.65838C76.4592 7.85724 76.298 8.01349 76.0806 8.12713C75.8633 8.23935 75.5856 8.29545 75.2475 8.29545H74.0544V7.81818H75.2305C75.4634 7.81818 75.6509 7.78409 75.793 7.71591C75.9365 7.64773 76.0402 7.55114 76.1041 7.42614C76.1694 7.29972 76.2021 7.14915 76.2021 6.97443C76.2021 6.79972 76.1694 6.64702 76.1041 6.51634C76.0387 6.38565 75.9343 6.2848 75.7909 6.21378C75.6474 6.14134 75.4578 6.10511 75.222 6.10511H74.293V10H73.7646ZM75.8186 8.03977L76.8924 10H76.2788L75.222 8.03977H75.8186Z M82.4844 7.20455L81.7898 5.63636H82.071L82.5568 6.78693L83.0426 5.63636H83.3239L82.6293 7.20455H82.4844ZM81.7386 7.20455V5.63636H82.0114V7.20455H81.7386ZM83.1023 7.20455V5.63636H83.375V7.20455H83.1023ZM80.7159 7.20455V5.77273H80.9886V7.20455H80.7159ZM80.2386 5.875V5.63636H81.4659V5.875H80.2386Z",
        }),
      );
    function m() {
      return (m = Object.assign.bind()).apply(null, arguments);
    }
    let p = (e) =>
      a.createElement(
        "svg",
        m(
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: 23,
            height: 23,
            fill: "none",
            viewBox: "0 0 84 23",
          },
          e,
        ),
        a.createElement("path", {
          fill: "currentColor",
          d: "M4.13256 5.71678L2.67833 4.75896C2.8049 4.73084 2.92841 4.69251 3.04783 4.64523C3.61321 4.42086 4.08832 3.9905 4.35835 3.43927C4.49695 3.15637 4.57059 2.85353 4.59668 2.54048C4.59668 2.54048 5.83151 4.0618 5.82972 4.06512C5.74508 4.33831 5.67731 4.4896 5.58756 4.60664C5.54358 4.6644 5.49243 4.7196 5.41188 4.79524C5.41188 4.79524 4.96183 5.29051 4.73553 5.4464C4.6046 5.53661 4.45961 5.61507 4.2126 5.68764C4.18396 5.69608 4.15787 5.7063 4.13256 5.71678ZM19.5712 6.16119C19.5763 6.19748 19.5875 6.23172 19.5845 6.27159C19.5384 6.85528 20.1258 7.8315 20.1826 7.90561C20.2746 8.03543 20.4204 8.15069 20.6221 8.31194C20.6349 8.32166 20.6421 8.3306 20.6538 8.34057L22.3871 7.77272C22.3213 7.79419 22.181 7.66897 22.1313 7.6337C22.0193 7.55397 21.8943 7.49468 21.7823 7.4129C21.5366 7.23299 21.3386 6.99967 21.1921 6.73977C21.0446 6.47757 20.9479 6.18879 20.8922 5.89388C20.8658 5.75486 20.8507 5.61967 20.852 5.47988C20.8525 5.42391 20.817 5.25678 20.8712 5.21691L19.5712 6.16119ZM2.74583 8.28741C2.98518 8.12232 3.10741 8.01294 3.19103 7.89156C3.23399 7.83022 3.2726 7.76173 3.31351 7.67433C3.31351 7.67433 3.67228 6.98893 3.73032 6.82589C3.78709 6.67562 3.8078 6.50849 3.80371 6.24527C3.8032 6.21716 3.80985 6.19416 3.81215 6.16809L2.11167 5.04824C2.1981 5.35874 2.22367 5.67998 2.1894 6.00044C2.12113 6.63294 1.7974 7.22711 1.3072 7.6268C1.2044 7.71062 1.09445 7.78576 0.977842 7.85092L2.69827 8.33469C2.71515 8.3191 2.72666 8.30198 2.74583 8.28741ZM3.79604 16.9323C3.79349 16.9058 3.78607 16.8823 3.78658 16.8539C3.79604 16.2119 3.37719 15.5715 3.34215 15.4974C3.2882 15.3827 3.24549 15.2919 3.18873 15.2178C3.09641 15.0877 2.95015 14.9699 2.74762 14.8084C2.72717 14.7928 2.71489 14.7732 2.69699 14.7568L0.705765 15.4131C0.786314 15.4473 0.866607 15.4762 0.946134 15.5176C1.09445 15.5861 1.24199 15.6645 1.38059 15.7645C1.97768 16.1948 2.30038 16.9201 2.30601 17.5646C2.30729 17.7141 2.30703 17.8863 2.29169 18.0251L3.79604 16.9323ZM0.777875 14.8018L2.52234 14.2296C2.52797 14.2033 2.52797 14.1815 2.53692 14.1542C2.57502 14.0387 2.60136 13.937 2.62028 13.8302C2.64406 13.7287 2.65429 13.6513 2.65531 13.5713C2.65787 13.4095 2.52464 12.5611 2.47376 12.4111C2.44819 12.3354 2.41443 12.2649 2.36789 12.188C2.30473 12.0717 2.24873 11.9695 2.17994 11.8731C2.16588 11.8532 2.15974 11.8005 2.14798 11.8005H0C1.07322 12.5672 1.21131 13.9255 0.777875 14.8018ZM2.17918 11.2151C2.3303 10.9917 2.42722 10.8402 2.4735 10.6947C2.50802 10.5971 2.57016 10.1284 2.58704 10.0014C2.59778 9.91939 2.69955 9.44866 2.54408 8.94138C2.53615 8.91685 2.53564 8.90177 2.53027 8.878L0.546456 8.33622C0.681472 8.5445 0.778387 8.80644 0.859703 9.06762C0.992418 9.49338 1.03845 10.3423 0.563589 11.074C0.503497 11.167 0.437012 11.2894 0.358508 11.2894H2.14414C2.15667 11.2894 2.16358 11.237 2.17918 11.2151ZM17.5638 4.09374C17.6367 4.34061 17.7068 4.49216 17.8055 4.61636C17.9185 4.76228 18.5885 5.42493 18.6452 5.46761C18.7623 5.55808 18.914 5.62554 19.1876 5.71013C19.2019 5.71524 19.2116 5.72368 19.2252 5.7293L20.7208 4.64319C20.1094 4.60383 19.5464 4.34547 19.1265 3.93735C18.7923 3.61253 18.5488 3.19291 18.4437 2.71298L17.5204 3.98283C17.537 4.01733 17.5518 4.05362 17.5638 4.09374ZM14.963 2.62839C15.1279 2.86733 15.2374 2.98974 15.3591 3.07357C15.4202 3.11624 16.2625 3.55478 16.4251 3.61253C16.5755 3.66927 16.7435 3.68843 17.0066 3.68588C17.0225 3.68588 17.036 3.68767 17.0511 3.68818L18.1704 2.14897C17.8699 2.23432 17.5569 2.26524 17.2457 2.23688C16.7714 2.19369 16.3152 2.00662 15.9444 1.71273C15.7178 1.53308 15.523 1.3133 15.3754 1.06209L14.8901 2.55479C14.9146 2.57881 14.9405 2.59874 14.963 2.62839ZM9.08902 2.41934C9.20486 2.45768 9.30791 2.484 9.41505 2.50291C9.51632 2.52668 9.59431 2.5369 9.6746 2.53792C9.83544 2.53767 10.6862 2.40733 10.8358 2.35648C10.9117 2.33092 10.9826 2.29719 11.0595 2.25068C11.1731 2.18909 11.2692 2.13159 11.3656 2.06284C11.3807 2.05237 11.4145 2.04828 11.4145 2.03908V0C10.903 0.569378 10.6103 0.875022 9.78609 1.00893C9.4194 1.06848 8.80007 1.02708 8.31472 0.786345L8.99952 2.40248C9.0297 2.40836 9.05757 2.40912 9.08902 2.41934ZM12.5585 2.35622C12.6562 2.39072 13.7233 2.68436 14.3114 2.42829C14.3232 2.42318 14.3286 2.42624 14.3406 2.42292L14.9384 0.5497C14.7126 0.706611 14.0984 1.11371 13.0666 0.950156C12.5654 0.870422 11.9259 0.498333 11.9259 0.431889V2.01838C11.9259 2.03294 11.9975 2.04266 12.0246 2.06182C12.2483 2.21311 12.4128 2.30997 12.5585 2.35622ZM6.39177 3.66876C7.00062 3.7076 7.67391 3.25936 7.74807 3.22434C7.86288 3.17042 7.9534 3.12774 8.02731 3.07101C8.15746 2.97876 8.27432 2.83258 8.43619 2.63018C8.44898 2.61357 8.46355 2.60386 8.47659 2.58903L7.73452 0.839756C7.71227 0.889078 7.69104 0.938144 7.66522 0.987978C7.59566 1.13773 7.50642 1.28826 7.40311 1.42242C6.89706 2.07843 5.96908 2.33961 5.60214 2.34753C5.44104 2.35546 5.2871 2.3483 5.13776 2.33016L6.23707 3.6846C6.28591 3.67463 6.33577 3.66646 6.39177 3.66876ZM5.80722 19.0315C5.73459 18.7846 5.66453 18.6331 5.56582 18.5089C5.45229 18.3627 4.91453 17.8332 4.91453 17.8332C4.83781 17.7517 4.78283 17.7003 4.72607 17.6581C4.60844 17.5671 4.4568 17.4997 4.18396 17.4153C4.15864 17.4061 4.141 17.3923 4.11798 17.3819L2.47273 18.5766C2.46302 18.5837 2.45202 18.5868 2.44179 18.5924C2.80541 18.6154 3.15881 18.7064 3.48075 18.8792C3.84437 19.0744 4.15276 19.3622 4.37753 19.7049C4.55858 19.9809 4.68515 20.2926 4.74243 20.6205L5.83765 19.1143C5.82614 19.0874 5.81591 19.0606 5.80722 19.0315ZM21.1919 11.9066C21.041 12.1299 20.9436 12.2838 20.8978 12.4289C20.8633 12.5266 20.5884 13.7044 20.8257 14.1905C20.8275 14.1943 20.8254 14.2005 20.8267 14.2043L22.5055 14.7525C22.4208 14.5932 22.364 14.4192 22.2904 14.2365C22.1278 13.8337 22.1048 12.8552 22.5919 12.2386C22.6937 12.1098 22.7949 11.9521 22.9225 11.8289C22.9266 11.8246 22.9317 11.8005 22.9358 11.8005H21.242C21.2259 11.8005 21.2141 11.8754 21.1919 11.9066ZM20.6257 14.8378C20.5296 14.9043 20.4357 14.9733 20.3475 15.0499C20.2629 15.1233 20.2074 15.2084 20.1475 15.3039C20.011 15.5224 19.8934 15.7522 19.7857 15.986C19.7197 16.1294 19.6269 16.2883 19.5949 16.4427C19.5655 16.5843 19.565 16.7366 19.5671 16.8807C19.5671 16.8879 19.565 16.8932 19.565 16.9004L20.9957 17.939C20.9446 17.6466 20.9461 17.3456 21.0014 17.054C21.1093 16.4844 21.4166 15.9717 21.8582 15.6114C22.0153 15.4831 22.1894 15.3742 22.3773 15.2891L20.716 14.7496C20.6876 14.7793 20.6618 14.8102 20.6257 14.8378ZM19.1584 17.4376C18.9119 17.5102 18.7603 17.5802 18.636 17.6788C18.4903 17.7918 17.9599 18.3297 17.9599 18.3297C17.8783 18.4061 17.827 18.4613 17.7845 18.5181C17.6937 18.6356 17.626 18.7872 17.5418 19.0598C17.5395 19.0665 17.5354 19.0706 17.5331 19.077L18.5851 20.5242C18.6317 20.1958 18.7406 19.8827 18.9137 19.5993C19.194 19.1403 19.6218 18.7859 20.1161 18.5899C20.3145 18.5112 20.5237 18.4583 20.7385 18.4342L19.2904 17.3829C19.2497 17.4046 19.207 17.4233 19.1584 17.4376ZM22.2037 9.8463C22.1181 9.35512 22.1825 8.83379 22.4183 8.35769L20.8538 8.86343C20.8479 8.8987 20.8461 8.93192 20.8341 8.96898C20.7963 9.08474 20.7699 9.18722 20.751 9.29379C20.7272 9.39499 20.717 9.47268 20.7157 9.55343C20.7137 9.71418 20.8467 10.5639 20.8975 10.7137C20.9229 10.7885 20.9564 10.8593 21.0034 10.9368C21.0668 11.0535 21.1228 11.1519 21.1911 11.2473C21.1988 11.2585 21.2013 11.2894 21.2085 11.2894H23C22.5727 10.7783 22.2978 10.3858 22.2037 9.8463ZM14.2823 20.7061C14.1664 20.6678 14.0634 20.6415 13.9562 20.6226C13.8547 20.5988 13.7767 20.5886 13.6967 20.5876C13.5335 20.5893 12.6846 20.7181 12.5352 20.769C12.4601 20.7943 12.3895 20.8278 12.3118 20.8748C12.1982 20.9361 12.0883 20.9939 11.9914 21.0626C11.9755 21.0736 11.9259 21.0782 11.9259 21.0879V22.9936C12.4373 22.565 12.8283 22.2783 13.3287 22.2783H13.3374C13.3474 22.2783 13.3771 22.2783 13.3771 22.2783H13.3791C13.8951 22.0228 14.4682 22.253 14.9947 22.5533L14.4122 20.7473C14.37 20.7417 14.3273 20.7204 14.2823 20.7061ZM10.8123 20.7693C10.7148 20.7348 9.56413 20.495 9.05348 20.6982C9.03097 20.7072 9.00822 20.7097 8.98597 20.7148L8.38019 22.5778C8.55816 22.4759 8.74867 22.3879 8.96628 22.3289C9.78277 22.1068 10.6067 22.3601 10.9677 22.622C11.1005 22.7184 11.2421 22.8247 11.3654 22.9525C11.3812 22.967 11.4145 22.9847 11.4145 23V21.1053C11.4145 21.091 11.3587 21.0821 11.3326 21.0637C11.1086 20.9119 10.9557 20.8145 10.8123 20.7693ZM12.3539 20.3179C12.1274 20.3913 11.9198 20.5285 11.7269 20.666C11.6694 20.7066 11.6643 20.7051 11.6068 20.6645C11.473 20.574 11.3395 20.4818 11.1963 20.4064C11.0549 20.332 10.9174 20.2955 10.7609 20.2625C10.4249 20.192 10.0679 20.1178 9.72472 20.1017C9.4483 20.0887 9.16983 20.1503 8.90772 20.2344C8.83612 20.2574 8.83254 20.2523 8.80262 20.2124C8.70852 20.0762 8.60879 19.942 8.49219 19.824C8.37533 19.7056 8.22983 19.6223 8.08791 19.537C7.57444 19.2288 7.03566 18.953 6.42604 18.953C6.40149 18.953 6.37413 18.9543 6.35035 18.9535C6.31966 18.9535 6.30381 18.9528 6.29767 18.9505C6.29153 18.9415 6.28258 18.9236 6.27389 18.8942C6.17544 18.5602 6.02969 18.2988 5.80031 18.0384C5.58526 17.7938 5.35358 17.5636 5.10784 17.3499C4.87463 17.147 4.62276 17.0611 4.33815 16.9543C4.27704 16.9323 4.27243 16.929 4.2732 16.8552C4.27013 16.2168 4.14662 15.9663 3.89014 15.5084C3.84795 15.4302 3.8142 15.3579 3.78249 15.2909C3.72137 15.1608 3.66358 15.0384 3.58048 14.9308C3.45441 14.7519 3.28539 14.6173 3.03556 14.4179C2.97955 14.3755 2.97981 14.3696 2.99976 14.3088C3.0688 14.0995 3.13196 13.8677 3.14091 13.6467C3.15114 13.397 3.09667 13.1501 3.0578 12.9048C3.022 12.6791 2.99771 12.4494 2.92662 12.2311C2.85349 12.0068 2.71361 11.7952 2.57732 11.6043C2.53564 11.5455 2.53947 11.5401 2.57885 11.4844C2.73407 11.2552 2.86806 11.0571 2.93506 10.8453C2.98416 10.7073 3.00206 10.5716 3.02098 10.4279C3.0307 10.3538 3.04093 10.2744 3.05703 10.1875C3.1675 9.64492 3.19205 9.38247 3.00896 8.78651C2.9862 8.71572 2.99132 8.71215 3.03121 8.68173C3.31121 8.48853 3.47385 8.33954 3.59096 8.16934C3.64952 8.08629 3.70168 7.99454 3.74848 7.89334L3.9106 7.59332C4.03922 7.35821 4.12259 7.17779 4.1883 6.99353C4.26655 6.78577 4.29647 6.56701 4.29136 6.23786C4.29084 6.20233 4.29494 6.18087 4.29136 6.18036C4.29826 6.17524 4.31488 6.16528 4.35043 6.1548C4.70203 6.0513 4.97487 5.89235 5.24695 5.64906C5.47684 5.44359 5.69215 5.22228 5.89134 4.98717C6.08901 4.75385 6.20152 4.51158 6.29179 4.21973C6.31378 4.15917 6.3148 4.15431 6.39126 4.15533C7.02952 4.15201 7.28037 4.02858 7.73861 3.77226C7.81685 3.73009 7.88922 3.69636 7.95622 3.66467C8.08638 3.60359 8.20886 3.54583 8.31651 3.46278C8.49551 3.33679 8.63027 3.16787 8.82973 2.91819C8.87218 2.86222 8.87831 2.86299 8.93892 2.88241C9.14988 2.95192 9.37925 3.01632 9.60223 3.0222C9.83928 3.02859 10.074 2.98259 10.3072 2.94656C10.5397 2.91078 10.7754 2.88369 11.0005 2.81316C11.2342 2.74007 11.4464 2.60156 11.6446 2.46023C11.7039 2.41883 11.7093 2.42164 11.765 2.46151C11.9944 2.61663 12.1926 2.75054 12.4046 2.8175C12.5427 2.86657 12.6784 2.88446 12.8222 2.90337C12.8963 2.91308 12.9758 2.9233 13.0628 2.9394C13.6054 3.04954 13.8678 3.07459 14.4643 2.89161C14.5359 2.8681 14.5395 2.87398 14.5694 2.91308C14.674 3.06488 14.7858 3.21489 14.9205 3.3419C15.0568 3.47019 15.2345 3.56577 15.3959 3.65853C15.6421 3.80011 15.8994 3.92252 16.1646 4.02449C16.2871 4.07151 16.4147 4.12518 16.5438 4.14511C16.677 4.16581 16.8115 4.17297 16.9463 4.17297C16.9708 4.17297 16.9995 4.17348 17.0217 4.17246C17.0529 4.17246 17.0713 4.17629 17.0741 4.17552C17.0795 4.18344 17.0885 4.1998 17.0982 4.232C17.2002 4.57853 17.3559 4.84866 17.5955 5.11699C17.8021 5.35108 18.0277 5.56932 18.265 5.77198C18.4972 5.97029 18.7432 6.08197 19.0342 6.17167C19.0948 6.19364 19.0991 6.19671 19.0986 6.27108C19.096 6.61122 19.1469 6.94396 19.2904 7.25394C19.3686 7.42287 19.4589 7.58975 19.5435 7.75713C19.6384 7.94471 19.744 8.12794 19.8737 8.2938C20.0005 8.45582 20.1762 8.58053 20.3368 8.70831C20.3925 8.75073 20.392 8.75636 20.3723 8.81794C20.3022 9.03108 20.2363 9.26184 20.2314 9.48724C20.2263 9.73334 20.2764 9.97612 20.3135 10.2181C20.3488 10.4484 20.3726 10.6832 20.449 10.9046C20.5247 11.1231 20.6602 11.3339 20.7947 11.521C20.8016 11.5309 20.8057 11.5378 20.8093 11.5491C20.8093 11.5664 20.8162 11.5815 20.8193 11.5981C20.8144 11.6096 20.8068 11.6224 20.793 11.6421C20.7024 11.776 20.6101 11.9099 20.5347 12.053C20.461 12.1931 20.4242 12.3285 20.3917 12.4836C20.3772 12.5539 20.3621 12.6252 20.3475 12.6973C20.2918 12.9712 20.2411 13.2546 20.2296 13.5281C20.2181 13.8023 20.2792 14.0801 20.3631 14.3395C20.3861 14.4105 20.381 14.4144 20.3416 14.4445C20.0708 14.6308 19.8596 14.8266 19.6921 15.11C19.5118 15.4146 19.352 15.7315 19.2139 16.0573C19.1009 16.3241 19.0815 16.6019 19.0815 16.8886C19.082 16.9239 19.0781 16.9431 19.0787 16.9479C19.0697 16.9538 19.0518 16.9628 19.0219 16.9717C18.7023 17.0657 18.4361 17.2032 18.187 17.424C17.9367 17.6459 17.7001 17.8833 17.4789 18.134C17.2754 18.365 17.182 18.62 17.0808 18.9063C17.0593 18.9673 17.0565 18.9707 16.9813 18.9709C16.643 18.9722 16.3157 19.0169 16.0063 19.1587C15.8498 19.2306 15.7043 19.3169 15.5486 19.391C15.3673 19.4769 15.1888 19.5715 15.0277 19.6916C14.8354 19.8349 14.6914 20.0223 14.5428 20.2083C14.4999 20.2643 14.4943 20.2635 14.4337 20.2441C14.2206 20.1741 13.9887 20.1097 13.7637 20.1038C13.5218 20.0977 13.2827 20.1454 13.0449 20.1828C12.813 20.2183 12.578 20.2456 12.3539 20.3179ZM8.40857 20.4971C8.24313 20.2579 8.13368 20.1355 8.01196 20.0517C7.9511 20.009 7.88257 19.9704 7.79435 19.929C7.79435 19.929 7.10904 19.571 6.9459 19.5129C6.79554 19.4562 6.63061 19.4353 6.36492 19.4396C6.33628 19.4404 6.31532 19.4337 6.28974 19.4317L5.10708 21.0583C5.42646 20.9829 5.75582 20.9688 6.08006 21.0202C6.67075 21.1135 7.21312 21.4281 7.58799 21.886C7.70076 22.0238 7.79844 22.1746 7.87771 22.3361L8.45792 20.5513C8.4413 20.5331 8.42417 20.5178 8.40857 20.4971ZM16.9795 19.4567C16.3962 19.4071 15.6976 19.8664 15.6232 19.9014C15.5089 19.9553 15.4197 19.9977 15.3458 20.0545C15.2161 20.1462 15.1021 20.2909 14.9418 20.4915C14.9364 20.4984 14.9341 20.503 14.9285 20.5099L15.5056 22.2632C15.5082 22.2581 15.524 22.2528 15.5268 22.2476C15.5956 22.0989 15.7132 21.9489 15.8163 21.8135C16.0965 21.4455 16.7762 20.9216 17.6175 20.8883C17.842 20.8794 18.0254 20.8942 18.2274 20.9346L17.1138 19.4409C17.0706 19.4483 17.0281 19.4608 16.9795 19.4567Z M8.34491 13.1681C7.45791 13.1681 6.89454 12.7608 6.84959 12.1349L6.8466 12.099H7.56878L7.57178 12.1229C7.59875 12.4074 7.91639 12.5991 8.36588 12.5991C8.7974 12.5991 9.09406 12.3954 9.09406 12.102C9.09406 11.8564 8.90827 11.7096 8.43481 11.6168L8.03626 11.5359C7.26013 11.3862 6.92751 11.0418 6.92751 10.5027V10.4997C6.92751 9.85287 7.51784 9.41563 8.34191 9.41563C9.20494 9.41563 9.72036 9.85287 9.7683 10.4368L9.7713 10.4698H9.06709L9.0611 10.4398C9.01315 10.1733 8.74945 9.98464 8.34191 9.98763C7.94336 9.98763 7.67367 10.1643 7.67367 10.4548C7.67367 10.6974 7.85946 10.8471 8.30895 10.937L8.7075 11.0178C9.5016 11.1736 9.84322 11.476 9.84322 12.0241V12.0271C9.84322 12.7279 9.27087 13.1681 8.34491 13.1681Z M11.2376 13.0783V9.50547H11.9838V13.0783H11.2376Z M13.555 13.0783V9.50547H15.0983C15.9403 9.50547 16.4258 9.93971 16.4258 10.6285V10.6345C16.4258 11.0987 16.1711 11.491 15.7366 11.6467L16.5367 13.0783H15.6886L14.9784 11.7516H14.3012V13.0783H13.555ZM14.3012 11.2365H15.0204C15.4219 11.2365 15.6617 11.0178 15.6617 10.6495V10.6435C15.6617 10.2841 15.4129 10.0565 15.0084 10.0565H14.3012V11.2365Z M39.392 13.848C39.392 14.8293 39.0133 15.6293 38.256 16.248C37.5093 16.856 36.512 17.16 35.264 17.16C33.8987 17.16 32.8 16.8133 31.968 16.12C31.1467 15.416 30.6933 14.5307 30.608 13.464H32.4C32.6133 14.9573 33.5467 15.704 35.2 15.704C35.9253 15.704 36.528 15.5493 37.008 15.24C37.4987 14.9307 37.744 14.5147 37.744 13.992C37.744 13.7467 37.6853 13.528 37.568 13.336C37.4613 13.144 37.3227 12.9893 37.152 12.872C36.992 12.744 36.7733 12.6267 36.496 12.52C36.2293 12.4133 35.9733 12.3333 35.728 12.28C35.4933 12.216 35.2 12.1413 34.848 12.056C34.688 12.024 34.5707 11.9973 34.496 11.976C34.0693 11.8693 33.696 11.7627 33.376 11.656C33.0667 11.5493 32.7413 11.4053 32.4 11.224C32.0693 11.0427 31.792 10.84 31.568 10.616C31.3547 10.392 31.1787 10.1093 31.04 9.768C30.9013 9.42667 30.832 9.048 30.832 8.632C30.832 7.736 31.2053 6.96267 31.952 6.312C32.6987 5.65067 33.6693 5.32 34.864 5.32C36.0693 5.32 37.0667 5.64533 37.856 6.296C38.656 6.94667 39.1253 7.8 39.264 8.856H37.52C37.4347 8.25867 37.1627 7.76267 36.704 7.368C36.2453 6.97333 35.648 6.776 34.912 6.776C34.2507 6.776 33.68 6.936 33.2 7.256C32.72 7.576 32.48 8.00267 32.48 8.536C32.48 8.74933 32.5067 8.94133 32.56 9.112C32.6133 9.272 32.7093 9.416 32.848 9.544C32.9867 9.672 33.1147 9.77867 33.232 9.864C33.3493 9.94933 33.536 10.0347 33.792 10.12C34.048 10.1947 34.2453 10.2533 34.384 10.296C34.5227 10.328 34.7627 10.3867 35.104 10.472C35.4453 10.5467 35.6853 10.6 35.824 10.632C36.336 10.7493 36.7733 10.8773 37.136 11.016C37.4987 11.1547 37.8667 11.3467 38.24 11.592C38.624 11.8267 38.912 12.136 39.104 12.52C39.296 12.8933 39.392 13.336 39.392 13.848Z M43.7224 5.48H45.3064V17H43.7224V5.48Z M57.9356 17H56.0956L53.1036 12.072H51.4876V17H49.9036V5.48H53.8556C54.997 5.48 55.8983 5.77867 56.5596 6.376C57.221 6.97333 57.5516 7.77333 57.5516 8.776C57.5516 9.65067 57.301 10.3707 56.7996 10.936C56.2983 11.4907 55.6156 11.8427 54.7516 11.992L57.9356 17ZM51.4876 6.968V10.584H53.8716C54.533 10.584 55.0396 10.424 55.3916 10.104C55.7436 9.77333 55.9196 9.33067 55.9196 8.776C55.9196 8.2 55.7383 7.75733 55.3756 7.448C55.013 7.128 54.5116 6.968 53.8716 6.968H51.4876Z M62.5284 10V5.63636H64.054C64.358 5.63636 64.6087 5.68892 64.8061 5.79403C65.0035 5.89773 65.1506 6.03764 65.2472 6.21378C65.3438 6.38849 65.392 6.58239 65.392 6.79545C65.392 6.98295 65.3587 7.13778 65.2919 7.25994C65.2266 7.3821 65.1399 7.47869 65.032 7.54972C64.9254 7.62074 64.8097 7.6733 64.6847 7.70739V7.75C64.8182 7.75852 64.9524 7.8054 65.0874 7.89062C65.2223 7.97585 65.3352 8.09801 65.4261 8.2571C65.517 8.41619 65.5625 8.6108 65.5625 8.84091C65.5625 9.05966 65.5128 9.25639 65.4134 9.43111C65.3139 9.60582 65.157 9.74432 64.9425 9.84659C64.728 9.94886 64.4489 10 64.1051 10H62.5284ZM63.0568 9.53125H64.1051C64.4503 9.53125 64.6953 9.46449 64.8402 9.33097C64.9865 9.19602 65.0597 9.03267 65.0597 8.84091C65.0597 8.69318 65.022 8.55682 64.9467 8.43182C64.8714 8.3054 64.7642 8.20455 64.625 8.12926C64.4858 8.05256 64.321 8.0142 64.1307 8.0142H63.0568V9.53125ZM63.0568 7.55398H64.0369C64.196 7.55398 64.3395 7.52273 64.4673 7.46023C64.5966 7.39773 64.6989 7.30966 64.7742 7.19602C64.8509 7.08239 64.8892 6.94886 64.8892 6.79545C64.8892 6.60369 64.8224 6.44105 64.6889 6.30753C64.5554 6.17259 64.3438 6.10511 64.054 6.10511H63.0568V7.55398Z M67.6792 5.63636V10H67.1508V5.63636H67.6792Z M69.4586 10V5.63636H72.0922V6.10511H69.9871V7.57955H71.9558V8.0483H69.9871V9.53125H72.1263V10H69.4586Z M73.7646 10V5.63636H75.239C75.5799 5.63636 75.8598 5.6946 76.0785 5.81108C76.2973 5.92614 76.4592 6.08452 76.5643 6.28622C76.6694 6.48793 76.722 6.71733 76.722 6.97443C76.722 7.23153 76.6694 7.45952 76.5643 7.65838C76.4592 7.85724 76.298 8.01349 76.0806 8.12713C75.8633 8.23935 75.5856 8.29545 75.2475 8.29545H74.0544V7.81818H75.2305C75.4634 7.81818 75.6509 7.78409 75.793 7.71591C75.9365 7.64773 76.0402 7.55114 76.1041 7.42614C76.1694 7.29972 76.2021 7.14915 76.2021 6.97443C76.2021 6.79972 76.1694 6.64702 76.1041 6.51634C76.0387 6.38565 75.9343 6.2848 75.7909 6.21378C75.6474 6.14134 75.4578 6.10511 75.222 6.10511H74.293V10H73.7646ZM75.8186 8.03977L76.8924 10H76.2788L75.222 8.03977H75.8186Z M82.4844 7.20455L81.7898 5.63636H82.071L82.5568 6.78693L83.0426 5.63636H83.3239L82.6293 7.20455H82.4844ZM81.7386 7.20455V5.63636H82.0114V7.20455H81.7386ZM83.1023 7.20455V5.63636H83.375V7.20455H83.1023ZM80.7159 7.20455V5.77273H80.9886V7.20455H80.7159ZM80.2386 5.875V5.63636H81.4659V5.875H80.2386Z",
        }),
      );
    var b = e.i(53158),
      v = e.i(70733),
      g = e.i(57739),
      x = e.i(36678),
      y = e.i(33568);
    e.s(
      [
        "HeaderComponent",
        0,
        ({ className: e, links: t, children: r }) => {
          let n = (0, a.useRef)(),
            l = ((e) => {
              let [t, r] = (0, a.useState)(!1),
                n = (0, a.useRef)(),
                l = (0, u.useHeaderStore)((e) => e.slices, d.shallow),
                i = (0, a.useRef)([]),
                s = (0, a.useRef)(0),
                f = (0, a.useRef)();
              ((0, a.useEffect)(() => {
                ((i.current = []),
                  n.current?.disconnect(),
                  l.forEach((e) => {
                    n.current?.observe(e);
                  }));
              }, [l]),
                (0, a.useEffect)(
                  () => () => {
                    n.current && n.current.disconnect();
                  },
                  [],
                ),
                (0, c.default)(
                  (t) => {
                    if ((n.current && n.current.disconnect(), !e.current))
                      return;
                    (t.innerWidth !== s.current &&
                      (f.current = e.current.getBoundingClientRect()),
                      (s.current = t.innerWidth));
                    let r = f.current.height,
                      i = f.current.top;
                    ((n.current = new IntersectionObserver(m, {
                      rootMargin: `${Math.round(-i - r / 2)}px -50% ${Math.round(i + r / 2 - t.innerHeight + 1)}px -50%`,
                    })),
                      l.forEach((e) => {
                        n.current?.observe(e);
                      }));
                  },
                  !0,
                  [l],
                  30,
                ));
              let h = (0, o.default)(
                  () => {
                    let e = !0;
                    (i.current.forEach((t) => {
                      e = !1;
                    }),
                      r(!e));
                  },
                  30,
                  [],
                ),
                m = (e, t) => {
                  (e.forEach((e) => {
                    let t = i.current.indexOf(e.target);
                    e.isIntersecting && -1 === t
                      ? i.current.push(e.target)
                      : e.isIntersecting || -1 === t || i.current.splice(t, 1);
                  }),
                    h());
                };
              return t;
            })(n),
            i = (0, y.useScrollStore)((e) => e.setIsLocked),
            [f, m] = (0, a.useState)(!1),
            w = ((e, t) => {
              let [r, n] = (0, a.useState)(!1);
              return (
                (0, a.useEffect)(() => {
                  let l;
                  return (
                    e && !r
                      ? n(!0)
                      : !e && r && (l = setTimeout(() => n(!1), t)),
                    () => clearTimeout(l)
                  );
                }, [e, t, r]),
                r
              );
            })(f, 500),
            k = (e) => {
              (m(e), i(e));
            };
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("header", {
                ref: n,
                className: (0, v.default)(
                  "flex fixed lg:top-20 lg:left-1/2 lg:-translate-x-1/2 z-3 backdrop-blur-md h-50 w-full lg:max-w-2xl px-20 items-center justify-between",
                  "transition-[background,color] duration-500 ease-expo-out",
                  l ? "bg-black/10 text-black" : "bg-white/10 text-white",
                  e,
                ),
                children: [
                  (0, s.jsx)(x.default, {
                    href: "/",
                    children: (0, s.jsx)(h, {
                      className: "block w-160 min-w-104 h-auto opacity-100",
                      alt: "Interstellar",
                    }),
                  }),
                  (0, s.jsx)("ul", {
                    className:
                      "hidden md:flex gap-15 ml-auto text-11 uppercase",
                    children: t.map((e) =>
                      (0, s.jsx)(
                        "li",
                        {
                          children: (0, s.jsx)(g.Button, {
                            theme: "dark",
                            className: (0, v.default)(
                              "inline-flex items-center uppercase font-mono leading-none text-11",
                              "before:block before:w-4 before:h-4 before:mr-6 before:rounded-sm before:bg-current before:opacity-0 before:transition-opacity before:duration-300",
                              "hover:before:opacity-100",
                            ),
                            linkInput: e,
                          }),
                        },
                        e._key,
                      ),
                    ),
                  }),
                  (0, s.jsx)(g.Button, {
                    theme: l ? "dark" : "light",
                    variant: "primary",
                    className:
                      "md:hidden ml-auto inline-flex items-center uppercase text-11",
                    onClick: () => k(!0),
                    children: "Menu",
                  }),
                ],
              }),
              f &&
                (0, s.jsxs)("div", {
                  className: (0, v.default)(
                    "lg:hidden fixed bg-white top-0 left-0 bottom-0 right-0 h-screen z-50",
                    "flex",
                    "transition-opacity duration-500",
                    w ? "opacity-100" : "opacity-0",
                  ),
                  children: [
                    (0, s.jsxs)("nav", {
                      className: "w-full px-20",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "flex justify-between items-center w-full h-50",
                          children: [
                            (0, s.jsx)(p, {
                              className:
                                "block w-30 min-w-30 h-auto opacity-100",
                              alt: "Interstellar",
                            }),
                            (0, s.jsx)(g.Button, {
                              theme: "dark",
                              variant: "primary",
                              onClick: () => k(!1),
                              className:
                                "lg:hidden ml-auto inline-flex items-center uppercase text-11",
                              children: "Close",
                            }),
                          ],
                        }),
                        (0, s.jsx)("ul", {
                          className: "text-11 uppercase text-black mt-44",
                          children: t.map((e) =>
                            (0, s.jsx)(
                              "li",
                              {
                                className: (0, v.default)(
                                  "flex items-center mb-20",
                                  "hover:before:opacity-100",
                                ),
                                children: (0, s.jsxs)(g.Button, {
                                  theme: "dark",
                                  className:
                                    "flex w-full justify-between items-center uppercase text-11 py-10 border-b border-black/10",
                                  linkInput: e,
                                  onClick: () => k(!1),
                                  children: [
                                    (0, s.jsx)("span", { children: e.label }),
                                    (0, s.jsx)(b.default, {
                                      className: "block w-10 min-w-10 h-auto",
                                      alt: "Link",
                                    }),
                                  ],
                                }),
                              },
                              e._key,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "absolute bottom-20 left-20",
                      children: r,
                    }),
                  ],
                }),
            ],
          });
        },
      ],
      85354,
    );
  },
  94890,
  (e) => {
    "use strict";
    var t = e.i(71448),
      r = e.i(53014);
    e.i(8508);
    var n = e.i(33568),
      l = e.i(73249),
      i = e.i(46053);
    e.s([
      "Lenis",
      0,
      () => {
        let e = (0, n.useScrollStore)((e) => e.lenis, i.shallow);
        return (
          (0, l.default)((t) => !e.__isStopped && e?.raf(t), !0),
          (0, r.useEffect)(() => {
            e.scrollTo(0, { immediate: !0 });
          }, []),
          (0, t.jsx)("script", {
            dangerouslySetInnerHTML: {
              __html:
                "document.documentElement.style.setProperty('--sbw', window.innerWidth - document.body.offsetWidth + 'px');",
            },
          })
        );
      },
    ]);
  },
  16808,
  (e) => {
    e.v((t) =>
      Promise.all(
        ["static/chunks/b7a6fcd87bedff0c.js"].map((t) => e.l(t)),
      ).then(() => t(87179)),
    );
  },
]);
