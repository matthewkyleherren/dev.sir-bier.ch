(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript :
    void 0, 60457, e => {
        "use strict";
        e.i(8508);
        var t = e.i(36028),
            r = e.i(53014),
            i = e.i(46053);
        e.s(["default", 0, e => {
            let [l, c] = (0, t.useHeaderStore)(e => [e.addSlice, e.removeSlice], i.shallow);
            (0, r.useEffect)(() => {
                let t = e?.current;
                if (t) return l(t), () => {
                    c(t)
                }
            }, [e.current, l, c])
        }])
    },
    64360, e => {
        "use strict";
        var t = e.i(71448),
            r = e.i(60457),
            i = e.i(70733),
            l = e.i(53014);
        let c = (0, l.forwardRef)(({
            children: e,
            className: c,
            as: s = "section",
            isDark: u,
            type: a
        }, d) => {
            let o = (0, l.useRef)();
            u || void 0 === u || (0, r.default)(o);
            let f = (0, l.useCallback)(e => {
                o.current = e, d && (d.current = e)
            }, []);
            return (0, t.jsx)(s, {
                ref: f,
                className: (0, i.default)(c),
                "data-type": !1,
                children: e
            })
        });
        e.s(["Slice", 0, c])
    }
]);