(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript :
    void 0, 60457, e => {
        "use strict";
        e.i(8508);
        var a = e.i(36028),
            t = e.i(53014),
            r = e.i(46053);
        e.s(["default", 0, e => {
            let [l, i] = (0, a.useHeaderStore)(e => [e.addSlice, e.removeSlice], r.shallow);
            (0, t.useEffect)(() => {
                let a = e?.current;
                if (a) return l(a), () => {
                    i(a)
                }
            }, [e.current, l, i])
        }])
    },
    64360, e => {
        "use strict";
        var a = e.i(71448),
            t = e.i(60457),
            r = e.i(70733),
            l = e.i(53014);
        let i = (0, l.forwardRef)(({
            children: e,
            className: i,
            as: s = "section",
            isDark: c,
            type: n
        }, o) => {
            let d = (0, l.useRef)();
            c || void 0 === c || (0, t.default)(d);
            let u = (0, l.useCallback)(e => {
                d.current = e, o && (o.current = e)
            }, []);
            return (0, a.jsx)(s, {
                ref: u,
                className: (0, r.default)(i),
                "data-type": !1,
                children: e
            })
        });
        e.s(["Slice", 0, i])
    },
    161, e => {
        "use strict";
        e.i(41227);
        var a = e.i(71448),
            t = e.i(53014),
            r = e.i(92238),
            l = e.i(57739),
            i = e.i(59782),
            s = e.i(34004),
            c = e.i(49422);
        let n = (0, t.forwardRef)(({
            ...e
        }, t) => (0, a.jsx)(c.InputOrTextArea, {
            as: "textarea",
            ref: t,
            ...e
        }));
        var o = e.i(92359),
            d = e.i(53454);
        let u = "6Lft2EosAAAAAD8EXOFtJsZ624Xo4dC6GP8FFTBj";
        e.s(["ContactForm", 0, ({
            emailDestination: e = "contact@interstellarlab.earth"
        }) => {
            let c = (0, r.default)();
            (0, t.useEffect)(() => {
                if (document.querySelector('script[src*="recaptcha"]')) return;
                let e = document.createElement("script");
                e.src = `https://www.google.com/recaptcha/api.js?render=${u}`, e.async = !0,
                    document.head.appendChild(e)
            }, []);
            let m = (0, t.useCallback)(async () => u && window.grecaptcha ? new Promise(e => {
                    window.grecaptcha.ready(async () => {
                        try {
                            let a = await window.grecaptcha.execute(u, {
                                action: "contact_form"
                            });
                            e(a)
                        } catch {
                            e(null)
                        }
                    })
                }) : null, []),
                p = async ({
                    body: a
                }) => {
                    if (!(0, d.emailIsValid)(a?.email)) return {
                        errors: [{
                            code: "EMAIL_INVALID"
                        }]
                    };
                    let t = await m();
                    try {
                        let r = await fetch("/api/contact", {
                                body: JSON.stringify({
                                    ...a,
                                    emailDestination: e,
                                    recaptchaToken: t
                                }),
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                method: "POST"
                            }),
                            l = await r.json();
                        if (console.log("API response:", r.status, l), l.success) return {
                            status: 200
                        };
                        return {
                            errors: [{
                                code: l.code || "UNKNOWN_ERROR"
                            }]
                        }
                    } catch (e) {
                        return console.error("Contact form error:", e), {
                            errors: [{
                                code: "NETWORK_ERROR"
                            }]
                        }
                    }
                };
            return (0, a.jsxs)(o.Form, {
                onSubmit: p,
                className: "flex flex-col gap-10 mt-40",
                buttonTheme: "light",
                buttonClassName: "text-11 uppercase h-32 mt-30 w-60",
                errors: {
                    EMAIL_INVALID: "Invalid email. Try again.",
                    INVALID: "Invalid. Try again.",
                    EMPTY: "Please fill this field.",
                    RECAPTCHA_MISSING: "Security verification failed. Please try again.",
                    RECAPTCHA_FAILED: "Security verification failed. Please try again.",
                    EMAIL_SERVICE_ERROR: "Email service unavailable. Please try again later.",
                    EMAIL_SEND_FAILED: "Failed to send email. Please try again later.",
                    NETWORK_ERROR: "Network error. Please check your connection.",
                    UNKNOWN_ERROR: "An error occurred. Please try again."
                },
                children: [(0, a.jsx)(s.Input, {
                    inputClassName: "text-11 normal-case",
                    theme: "dark",
                    type: "text",
                    placeholder: c("Name"),
                    name: "name",
                    floatLabel: !1,
                    required: !0
                }), (0, a.jsx)(s.Input, {
                    inputClassName: "text-11 normal-case",
                    theme: "dark",
                    type: "email",
                    placeholder: c("Email"),
                    name: "email",
                    floatLabel: !1,
                    required: !0
                }), (0, a.jsx)(s.Input, {
                    inputClassName: "text-11 normal-case",
                    theme: "dark",
                    type: "text",
                    placeholder: c("Company"),
                    name: "company",
                    floatLabel: !1,
                    required: !0
                }), (0, a.jsx)(s.Input, {
                    inputClassName: "text-11 normal-case",
                    theme: "dark",
                    type: "text",
                    placeholder: c("Topic"),
                    name: "topic",
                    floatLabel: !1,
                    required: !0
                }), (0, a.jsx)(n, {
                    theme: "dark",
                    className: "w-full !normal-case",
                    placeholder: c("Message"),
                    name: "message",
                    floatLabel: !1,
                    required: !0
                }), (0, a.jsx)("div", {
                    className: "mt-20",
                    children: (0, a.jsx)(i.Checkbox, {
                        theme: "dark",
                        required: !0,
                        className: "text-grey",
                        children: (0, a.jsxs)("p", {
                            className: "text-10 tracking-wider uppercase",
                            children: [
                                "I agree with Interstellar Lab's",
                                (0, a.jsx)(l.Button, {
                                    className: "text-white inline ml-[1ch]",
                                    theme: "dark",
                                    variant: "classicUnderlined",
                                    children: "Privacy Policy"
                                }), "."
                            ]
                        })
                    })
                })]
            })
        }], 161)
    }
]);