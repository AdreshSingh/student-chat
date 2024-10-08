var Pp = Object.defineProperty;
var Ep = (t, e, n) =>
    e in t
        ? Pp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (t[e] = n);
var F = (t, e, n) => Ep(t, typeof e != "symbol" ? e + "" : e, n);
(function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
    new MutationObserver((r) => {
        for (const s of r)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(r) {
        const s = {};
        return (
            r.integrity && (s.integrity = r.integrity),
            r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
            r.crossOrigin === "use-credentials"
                ? (s.credentials = "include")
                : r.crossOrigin === "anonymous"
                    ? (s.credentials = "omit")
                    : (s.credentials = "same-origin"),
            s
        );
    }
    function i(r) {
        if (r.ep) return;
        r.ep = !0;
        const s = n(r);
        fetch(r.href, s);
    }
})();
function Tp(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
        ? t.default
        : t;
}
var bf = { exports: {} },
    Ys = {},
    Pf = { exports: {} },
    D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hr = Symbol.for("react.element"),
    Op = Symbol.for("react.portal"),
    Lp = Symbol.for("react.fragment"),
    zp = Symbol.for("react.strict_mode"),
    Dp = Symbol.for("react.profiler"),
    Rp = Symbol.for("react.provider"),
    Fp = Symbol.for("react.context"),
    Ip = Symbol.for("react.forward_ref"),
    Ap = Symbol.for("react.suspense"),
    Np = Symbol.for("react.memo"),
    Bp = Symbol.for("react.lazy"),
    ru = Symbol.iterator;
function jp(t) {
    return t === null || typeof t != "object"
        ? null
        : ((t = (ru && t[ru]) || t["@@iterator"]),
            typeof t == "function" ? t : null);
}
var Ef = {
    isMounted: function () {
        return !1;
    },
    enqueueForceUpdate: function () { },
    enqueueReplaceState: function () { },
    enqueueSetState: function () { },
},
    Tf = Object.assign,
    Of = {};
function oi(t, e, n) {
    (this.props = t),
        (this.context = e),
        (this.refs = Of),
        (this.updater = n || Ef);
}
oi.prototype.isReactComponent = {};
oi.prototype.setState = function (t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, t, e, "setState");
};
oi.prototype.forceUpdate = function (t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function Lf() { }
Lf.prototype = oi.prototype;
function Gl(t, e, n) {
    (this.props = t),
        (this.context = e),
        (this.refs = Of),
        (this.updater = n || Ef);
}
var Zl = (Gl.prototype = new Lf());
Zl.constructor = Gl;
Tf(Zl, oi.prototype);
Zl.isPureReactComponent = !0;
var su = Array.isArray,
    zf = Object.prototype.hasOwnProperty,
    ql = { current: null },
    Df = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rf(t, e, n) {
    var i,
        r = {},
        s = null,
        o = null;
    if (e != null)
        for (i in (e.ref !== void 0 && (o = e.ref),
            e.key !== void 0 && (s = "" + e.key),
            e))
            zf.call(e, i) && !Df.hasOwnProperty(i) && (r[i] = e[i]);
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a;
    }
    if (t && t.defaultProps)
        for (i in ((l = t.defaultProps), l)) r[i] === void 0 && (r[i] = l[i]);
    return {
        $$typeof: hr,
        type: t,
        key: s,
        ref: o,
        props: r,
        _owner: ql.current,
    };
}
function Hp(t, e) {
    return {
        $$typeof: hr,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner,
    };
}
function Jl(t) {
    return typeof t == "object" && t !== null && t.$$typeof === hr;
}
function Vp(t) {
    var e = { "=": "=0", ":": "=2" };
    return (
        "$" +
        t.replace(/[=:]/g, function (n) {
            return e[n];
        })
    );
}
var ou = /\/+/g;
function fo(t, e) {
    return typeof t == "object" && t !== null && t.key != null
        ? Vp("" + t.key)
        : e.toString(36);
}
function Zr(t, e, n, i, r) {
    var s = typeof t;
    (s === "undefined" || s === "boolean") && (t = null);
    var o = !1;
    if (t === null) o = !0;
    else
        switch (s) {
            case "string":
            case "number":
                o = !0;
                break;
            case "object":
                switch (t.$$typeof) {
                    case hr:
                    case Op:
                        o = !0;
                }
        }
    if (o)
        return (
            (o = t),
            (r = r(o)),
            (t = i === "" ? "." + fo(o, 0) : i),
            su(r)
                ? ((n = ""),
                    t != null && (n = t.replace(ou, "$&/") + "/"),
                    Zr(r, e, n, "", function (u) {
                        return u;
                    }))
                : r != null &&
                (Jl(r) &&
                    (r = Hp(
                        r,
                        n +
                        (!r.key || (o && o.key === r.key)
                            ? ""
                            : ("" + r.key).replace(ou, "$&/") + "/") +
                        t
                    )),
                    e.push(r)),
            1
        );
    if (((o = 0), (i = i === "" ? "." : i + ":"), su(t)))
        for (var l = 0; l < t.length; l++) {
            s = t[l];
            var a = i + fo(s, l);
            o += Zr(s, e, n, a, r);
        }
    else if (((a = jp(t)), typeof a == "function"))
        for (t = a.call(t), l = 0; !(s = t.next()).done;)
            (s = s.value), (a = i + fo(s, l++)), (o += Zr(s, e, n, a, r));
    else if (s === "object")
        throw (
            ((e = String(t)),
                Error(
                    "Objects are not valid as a React child (found: " +
                    (e === "[object Object]"
                        ? "object with keys {" + Object.keys(t).join(", ") + "}"
                        : e) +
                    "). If you meant to render a collection of children, use an array instead."
                ))
        );
    return o;
}
function wr(t, e, n) {
    if (t == null) return t;
    var i = [],
        r = 0;
    return (
        Zr(t, i, "", "", function (s) {
            return e.call(n, s, r++);
        }),
        i
    );
}
function Wp(t) {
    if (t._status === -1) {
        var e = t._result;
        (e = e()),
            e.then(
                function (n) {
                    (t._status === 0 || t._status === -1) &&
                        ((t._status = 1), (t._result = n));
                },
                function (n) {
                    (t._status === 0 || t._status === -1) &&
                        ((t._status = 2), (t._result = n));
                }
            ),
            t._status === -1 && ((t._status = 0), (t._result = e));
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
}
var Ce = { current: null },
    qr = { transition: null },
    $p = {
        ReactCurrentDispatcher: Ce,
        ReactCurrentBatchConfig: qr,
        ReactCurrentOwner: ql,
    };
function Ff() {
    throw Error("act(...) is not supported in production builds of React.");
}
D.Children = {
    map: wr,
    forEach: function (t, e, n) {
        wr(
            t,
            function () {
                e.apply(this, arguments);
            },
            n
        );
    },
    count: function (t) {
        var e = 0;
        return (
            wr(t, function () {
                e++;
            }),
            e
        );
    },
    toArray: function (t) {
        return (
            wr(t, function (e) {
                return e;
            }) || []
        );
    },
    only: function (t) {
        if (!Jl(t))
            throw Error(
                "React.Children.only expected to receive a single React element child."
            );
        return t;
    },
};
D.Component = oi;
D.Fragment = Lp;
D.Profiler = Dp;
D.PureComponent = Gl;
D.StrictMode = zp;
D.Suspense = Ap;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $p;
D.act = Ff;
D.cloneElement = function (t, e, n) {
    if (t == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
            t +
            "."
        );
    var i = Tf({}, t.props),
        r = t.key,
        s = t.ref,
        o = t._owner;
    if (e != null) {
        if (
            (e.ref !== void 0 && ((s = e.ref), (o = ql.current)),
                e.key !== void 0 && (r = "" + e.key),
                t.type && t.type.defaultProps)
        )
            var l = t.type.defaultProps;
        for (a in e)
            zf.call(e, a) &&
                !Df.hasOwnProperty(a) &&
                (i[a] = e[a] === void 0 && l !== void 0 ? l[a] : e[a]);
    }
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
        i.children = l;
    }
    return { $$typeof: hr, type: t.type, key: r, ref: s, props: i, _owner: o };
};
D.createContext = function (t) {
    return (
        (t = {
            $$typeof: Fp,
            _currentValue: t,
            _currentValue2: t,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (t.Provider = { $$typeof: Rp, _context: t }),
        (t.Consumer = t)
    );
};
D.createElement = Rf;
D.createFactory = function (t) {
    var e = Rf.bind(null, t);
    return (e.type = t), e;
};
D.createRef = function () {
    return { current: null };
};
D.forwardRef = function (t) {
    return { $$typeof: Ip, render: t };
};
D.isValidElement = Jl;
D.lazy = function (t) {
    return { $$typeof: Bp, _payload: { _status: -1, _result: t }, _init: Wp };
};
D.memo = function (t, e) {
    return { $$typeof: Np, type: t, compare: e === void 0 ? null : e };
};
D.startTransition = function (t) {
    var e = qr.transition;
    qr.transition = {};
    try {
        t();
    } finally {
        qr.transition = e;
    }
};
D.unstable_act = Ff;
D.useCallback = function (t, e) {
    return Ce.current.useCallback(t, e);
};
D.useContext = function (t) {
    return Ce.current.useContext(t);
};
D.useDebugValue = function () { };
D.useDeferredValue = function (t) {
    return Ce.current.useDeferredValue(t);
};
D.useEffect = function (t, e) {
    return Ce.current.useEffect(t, e);
};
D.useId = function () {
    return Ce.current.useId();
};
D.useImperativeHandle = function (t, e, n) {
    return Ce.current.useImperativeHandle(t, e, n);
};
D.useInsertionEffect = function (t, e) {
    return Ce.current.useInsertionEffect(t, e);
};
D.useLayoutEffect = function (t, e) {
    return Ce.current.useLayoutEffect(t, e);
};
D.useMemo = function (t, e) {
    return Ce.current.useMemo(t, e);
};
D.useReducer = function (t, e, n) {
    return Ce.current.useReducer(t, e, n);
};
D.useRef = function (t) {
    return Ce.current.useRef(t);
};
D.useState = function (t) {
    return Ce.current.useState(t);
};
D.useSyncExternalStore = function (t, e, n) {
    return Ce.current.useSyncExternalStore(t, e, n);
};
D.useTransition = function () {
    return Ce.current.useTransition();
};
D.version = "18.3.1";
Pf.exports = D;
var Ee = Pf.exports;
const If = Tp(Ee);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Up = Ee,
    Yp = Symbol.for("react.element"),
    Kp = Symbol.for("react.fragment"),
    Qp = Object.prototype.hasOwnProperty,
    Xp = Up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Gp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Af(t, e, n) {
    var i,
        r = {},
        s = null,
        o = null;
    n !== void 0 && (s = "" + n),
        e.key !== void 0 && (s = "" + e.key),
        e.ref !== void 0 && (o = e.ref);
    for (i in e) Qp.call(e, i) && !Gp.hasOwnProperty(i) && (r[i] = e[i]);
    if (t && t.defaultProps)
        for (i in ((e = t.defaultProps), e)) r[i] === void 0 && (r[i] = e[i]);
    return {
        $$typeof: Yp,
        type: t,
        key: s,
        ref: o,
        props: r,
        _owner: Xp.current,
    };
}
Ys.Fragment = Kp;
Ys.jsx = Af;
Ys.jsxs = Af;
bf.exports = Ys;
var Li = bf.exports,
    Nf = { exports: {} },
    je = {},
    Bf = { exports: {} },
    jf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
    function e(b, L) {
        var z = b.length;
        b.push(L);
        e: for (; 0 < z;) {
            var H = (z - 1) >>> 1,
                W = b[H];
            if (0 < r(W, L)) (b[H] = L), (b[z] = W), (z = H);
            else break e;
        }
    }
    function n(b) {
        return b.length === 0 ? null : b[0];
    }
    function i(b) {
        if (b.length === 0) return null;
        var L = b[0],
            z = b.pop();
        if (z !== L) {
            b[0] = z;
            e: for (var H = 0, W = b.length, lt = W >>> 1; H < lt;) {
                var we = 2 * (H + 1) - 1,
                    mt = b[we],
                    ke = we + 1,
                    xr = b[ke];
                if (0 > r(mt, z))
                    ke < W && 0 > r(xr, mt)
                        ? ((b[H] = xr), (b[ke] = z), (H = ke))
                        : ((b[H] = mt), (b[we] = z), (H = we));
                else if (ke < W && 0 > r(xr, z)) (b[H] = xr), (b[ke] = z), (H = ke);
                else break e;
            }
        }
        return L;
    }
    function r(b, L) {
        var z = b.sortIndex - L.sortIndex;
        return z !== 0 ? z : b.id - L.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        t.unstable_now = function () {
            return s.now();
        };
    } else {
        var o = Date,
            l = o.now();
        t.unstable_now = function () {
            return o.now() - l;
        };
    }
    var a = [],
        u = [],
        c = 1,
        f = null,
        d = 3,
        h = !1,
        y = !1,
        v = !1,
        _ = typeof setTimeout == "function" ? setTimeout : null,
        p = typeof clearTimeout == "function" ? clearTimeout : null,
        g = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(b) {
        for (var L = n(u); L !== null;) {
            if (L.callback === null) i(u);
            else if (L.startTime <= b)
                i(u), (L.sortIndex = L.expirationTime), e(a, L);
            else break;
            L = n(u);
        }
    }
    function x(b) {
        if (((v = !1), m(b), !y))
            if (n(a) !== null) (y = !0), ee(w);
            else {
                var L = n(u);
                L !== null && he(x, L.startTime - b);
            }
    }
    function w(b, L) {
        (y = !1), v && ((v = !1), p(M), (M = -1)), (h = !0);
        var z = d;
        try {
            for (
                m(L), f = n(a);
                f !== null && (!(f.expirationTime > L) || (b && !O()));

            ) {
                var H = f.callback;
                if (typeof H == "function") {
                    (f.callback = null), (d = f.priorityLevel);
                    var W = H(f.expirationTime <= L);
                    (L = t.unstable_now()),
                        typeof W == "function" ? (f.callback = W) : f === n(a) && i(a),
                        m(L);
                } else i(a);
                f = n(a);
            }
            if (f !== null) var lt = !0;
            else {
                var we = n(u);
                we !== null && he(x, we.startTime - L), (lt = !1);
            }
            return lt;
        } finally {
            (f = null), (d = z), (h = !1);
        }
    }
    var k = !1,
        S = null,
        M = -1,
        T = 5,
        E = -1;
    function O() {
        return !(t.unstable_now() - E < T);
    }
    function R() {
        if (S !== null) {
            var b = t.unstable_now();
            E = b;
            var L = !0;
            try {
                L = S(!0, b);
            } finally {
                L ? ie() : ((k = !1), (S = null));
            }
        } else k = !1;
    }
    var ie;
    if (typeof g == "function")
        ie = function () {
            g(R);
        };
    else if (typeof MessageChannel < "u") {
        var Fe = new MessageChannel(),
            X = Fe.port2;
        (Fe.port1.onmessage = R),
            (ie = function () {
                X.postMessage(null);
            });
    } else
        ie = function () {
            _(R, 0);
        };
    function ee(b) {
        (S = b), k || ((k = !0), ie());
    }
    function he(b, L) {
        M = _(function () {
            b(t.unstable_now());
        }, L);
    }
    (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (b) {
            b.callback = null;
        }),
        (t.unstable_continueExecution = function () {
            y || h || ((y = !0), ee(w));
        }),
        (t.unstable_forceFrameRate = function (b) {
            0 > b || 125 < b
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
                : (T = 0 < b ? Math.floor(1e3 / b) : 5);
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
            return d;
        }),
        (t.unstable_getFirstCallbackNode = function () {
            return n(a);
        }),
        (t.unstable_next = function (b) {
            switch (d) {
                case 1:
                case 2:
                case 3:
                    var L = 3;
                    break;
                default:
                    L = d;
            }
            var z = d;
            d = L;
            try {
                return b();
            } finally {
                d = z;
            }
        }),
        (t.unstable_pauseExecution = function () { }),
        (t.unstable_requestPaint = function () { }),
        (t.unstable_runWithPriority = function (b, L) {
            switch (b) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    b = 3;
            }
            var z = d;
            d = b;
            try {
                return L();
            } finally {
                d = z;
            }
        }),
        (t.unstable_scheduleCallback = function (b, L, z) {
            var H = t.unstable_now();
            switch (
            (typeof z == "object" && z !== null
                ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? H + z : H))
                : (z = H),
                b)
            ) {
                case 1:
                    var W = -1;
                    break;
                case 2:
                    W = 250;
                    break;
                case 5:
                    W = 1073741823;
                    break;
                case 4:
                    W = 1e4;
                    break;
                default:
                    W = 5e3;
            }
            return (
                (W = z + W),
                (b = {
                    id: c++,
                    callback: L,
                    priorityLevel: b,
                    startTime: z,
                    expirationTime: W,
                    sortIndex: -1,
                }),
                z > H
                    ? ((b.sortIndex = z),
                        e(u, b),
                        n(a) === null &&
                        b === n(u) &&
                        (v ? (p(M), (M = -1)) : (v = !0), he(x, z - H)))
                    : ((b.sortIndex = W), e(a, b), y || h || ((y = !0), ee(w))),
                b
            );
        }),
        (t.unstable_shouldYield = O),
        (t.unstable_wrapCallback = function (b) {
            var L = d;
            return function () {
                var z = d;
                d = L;
                try {
                    return b.apply(this, arguments);
                } finally {
                    d = z;
                }
            };
        });
})(jf);
Bf.exports = jf;
var Zp = Bf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qp = Ee,
    Be = Zp;
function C(t) {
    for (
        var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
        n < arguments.length;
        n++
    )
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        t +
        "; visit " +
        e +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var Hf = new Set(),
    Ui = {};
function bn(t, e) {
    Zn(t, e), Zn(t + "Capture", e);
}
function Zn(t, e) {
    for (Ui[t] = e, t = 0; t < e.length; t++) Hf.add(e[t]);
}
var bt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
),
    Xo = Object.prototype.hasOwnProperty,
    Jp =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    lu = {},
    au = {};
function eg(t) {
    return Xo.call(au, t)
        ? !0
        : Xo.call(lu, t)
            ? !1
            : Jp.test(t)
                ? (au[t] = !0)
                : ((lu[t] = !0), !1);
}
function tg(t, e, n, i) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof e) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return i
                ? !1
                : n !== null
                    ? !n.acceptsBooleans
                    : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
        default:
            return !1;
    }
}
function ng(t, e, n, i) {
    if (e === null || typeof e > "u" || tg(t, e, n, i)) return !0;
    if (i) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !e;
            case 4:
                return e === !1;
            case 5:
                return isNaN(e);
            case 6:
                return isNaN(e) || 1 > e;
        }
    return !1;
}
function be(t, e, n, i, r, s, o) {
    (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
        (this.attributeName = i),
        (this.attributeNamespace = r),
        (this.mustUseProperty = n),
        (this.propertyName = t),
        (this.type = e),
        (this.sanitizeURL = s),
        (this.removeEmptyString = o);
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (t) {
        de[t] = new be(t, 0, !1, t, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (t) {
    var e = t[0];
    de[e] = new be(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
    de[t] = new be(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
].forEach(function (t) {
    de[t] = new be(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (t) {
        de[t] = new be(t, 3, !1, t.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
    de[t] = new be(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
    de[t] = new be(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
    de[t] = new be(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
    de[t] = new be(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var ea = /[\-:]([a-z])/g;
function ta(t) {
    return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (t) {
        var e = t.replace(ea, ta);
        de[e] = new be(e, 1, !1, t, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (t) {
        var e = t.replace(ea, ta);
        de[e] = new be(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
    });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
    var e = t.replace(ea, ta);
    de[e] = new be(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
    de[t] = new be(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new be(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
);
["src", "href", "action", "formAction"].forEach(function (t) {
    de[t] = new be(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function na(t, e, n, i) {
    var r = de.hasOwnProperty(e) ? de[e] : null;
    (r !== null
        ? r.type !== 0
        : i ||
        !(2 < e.length) ||
        (e[0] !== "o" && e[0] !== "O") ||
        (e[1] !== "n" && e[1] !== "N")) &&
        (ng(e, n, r, i) && (n = null),
            i || r === null
                ? eg(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
                : r.mustUseProperty
                    ? (t[r.propertyName] = n === null ? (r.type === 3 ? !1 : "") : n)
                    : ((e = r.attributeName),
                        (i = r.attributeNamespace),
                        n === null
                            ? t.removeAttribute(e)
                            : ((r = r.type),
                                (n = r === 3 || (r === 4 && n === !0) ? "" : "" + n),
                                i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n))));
}
var Ot = qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    kr = Symbol.for("react.element"),
    On = Symbol.for("react.portal"),
    Ln = Symbol.for("react.fragment"),
    ia = Symbol.for("react.strict_mode"),
    Go = Symbol.for("react.profiler"),
    Vf = Symbol.for("react.provider"),
    Wf = Symbol.for("react.context"),
    ra = Symbol.for("react.forward_ref"),
    Zo = Symbol.for("react.suspense"),
    qo = Symbol.for("react.suspense_list"),
    sa = Symbol.for("react.memo"),
    Dt = Symbol.for("react.lazy"),
    $f = Symbol.for("react.offscreen"),
    uu = Symbol.iterator;
function fi(t) {
    return t === null || typeof t != "object"
        ? null
        : ((t = (uu && t[uu]) || t["@@iterator"]),
            typeof t == "function" ? t : null);
}
var q = Object.assign,
    ho;
function Mi(t) {
    if (ho === void 0)
        try {
            throw Error();
        } catch (n) {
            var e = n.stack.trim().match(/\n( *(at )?)/);
            ho = (e && e[1]) || "";
        }
    return (
        `
` +
        ho +
        t
    );
}
var po = !1;
function go(t, e) {
    if (!t || po) return "";
    po = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (
                ((e = function () {
                    throw Error();
                }),
                    Object.defineProperty(e.prototype, "props", {
                        set: function () {
                            throw Error();
                        },
                    }),
                    typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(e, []);
                } catch (u) {
                    var i = u;
                }
                Reflect.construct(t, [], e);
            } else {
                try {
                    e.call();
                } catch (u) {
                    i = u;
                }
                t.call(e.prototype);
            }
        else {
            try {
                throw Error();
            } catch (u) {
                i = u;
            }
            t();
        }
    } catch (u) {
        if (u && i && typeof u.stack == "string") {
            for (
                var r = u.stack.split(`
`),
                s = i.stack.split(`
`),
                o = r.length - 1,
                l = s.length - 1;
                1 <= o && 0 <= l && r[o] !== s[l];

            )
                l--;
            for (; 1 <= o && 0 <= l; o--, l--)
                if (r[o] !== s[l]) {
                    if (o !== 1 || l !== 1)
                        do
                            if ((o--, l--, 0 > l || r[o] !== s[l])) {
                                var a =
                                    `
` + r[o].replace(" at new ", " at ");
                                return (
                                    t.displayName &&
                                    a.includes("<anonymous>") &&
                                    (a = a.replace("<anonymous>", t.displayName)),
                                    a
                                );
                            }
                        while (1 <= o && 0 <= l);
                    break;
                }
        }
    } finally {
        (po = !1), (Error.prepareStackTrace = n);
    }
    return (t = t ? t.displayName || t.name : "") ? Mi(t) : "";
}
function ig(t) {
    switch (t.tag) {
        case 5:
            return Mi(t.type);
        case 16:
            return Mi("Lazy");
        case 13:
            return Mi("Suspense");
        case 19:
            return Mi("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (t = go(t.type, !1)), t;
        case 11:
            return (t = go(t.type.render, !1)), t;
        case 1:
            return (t = go(t.type, !0)), t;
        default:
            return "";
    }
}
function Jo(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
        case Ln:
            return "Fragment";
        case On:
            return "Portal";
        case Go:
            return "Profiler";
        case ia:
            return "StrictMode";
        case Zo:
            return "Suspense";
        case qo:
            return "SuspenseList";
    }
    if (typeof t == "object")
        switch (t.$$typeof) {
            case Wf:
                return (t.displayName || "Context") + ".Consumer";
            case Vf:
                return (t._context.displayName || "Context") + ".Provider";
            case ra:
                var e = t.render;
                return (
                    (t = t.displayName),
                    t ||
                    ((t = e.displayName || e.name || ""),
                        (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
                    t
                );
            case sa:
                return (
                    (e = t.displayName || null), e !== null ? e : Jo(t.type) || "Memo"
                );
            case Dt:
                (e = t._payload), (t = t._init);
                try {
                    return Jo(t(e));
                } catch { }
        }
    return null;
}
function rg(t) {
    var e = t.type;
    switch (t.tag) {
        case 24:
            return "Cache";
        case 9:
            return (e.displayName || "Context") + ".Consumer";
        case 10:
            return (e._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (t = e.render),
                (t = t.displayName || t.name || ""),
                e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return e;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Jo(e);
        case 8:
            return e === ia ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof e == "function") return e.displayName || e.name || null;
            if (typeof e == "string") return e;
    }
    return null;
}
function qt(t) {
    switch (typeof t) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return "";
    }
}
function Uf(t) {
    var e = t.type;
    return (
        (t = t.nodeName) &&
        t.toLowerCase() === "input" &&
        (e === "checkbox" || e === "radio")
    );
}
function sg(t) {
    var e = Uf(t) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
        i = "" + t[e];
    if (
        !t.hasOwnProperty(e) &&
        typeof n < "u" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
    ) {
        var r = n.get,
            s = n.set;
        return (
            Object.defineProperty(t, e, {
                configurable: !0,
                get: function () {
                    return r.call(this);
                },
                set: function (o) {
                    (i = "" + o), s.call(this, o);
                },
            }),
            Object.defineProperty(t, e, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return i;
                },
                setValue: function (o) {
                    i = "" + o;
                },
                stopTracking: function () {
                    (t._valueTracker = null), delete t[e];
                },
            }
        );
    }
}
function Sr(t) {
    t._valueTracker || (t._valueTracker = sg(t));
}
function Yf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
        i = "";
    return (
        t && (i = Uf(t) ? (t.checked ? "true" : "false") : t.value),
        (t = i),
        t !== n ? (e.setValue(t), !0) : !1
    );
}
function ps(t) {
    if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
        return null;
    try {
        return t.activeElement || t.body;
    } catch {
        return t.body;
    }
}
function el(t, e) {
    var n = e.checked;
    return q({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? t._wrapperState.initialChecked,
    });
}
function cu(t, e) {
    var n = e.defaultValue == null ? "" : e.defaultValue,
        i = e.checked != null ? e.checked : e.defaultChecked;
    (n = qt(e.value != null ? e.value : n)),
        (t._wrapperState = {
            initialChecked: i,
            initialValue: n,
            controlled:
                e.type === "checkbox" || e.type === "radio"
                    ? e.checked != null
                    : e.value != null,
        });
}
function Kf(t, e) {
    (e = e.checked), e != null && na(t, "checked", e, !1);
}
function tl(t, e) {
    Kf(t, e);
    var n = qt(e.value),
        i = e.type;
    if (n != null)
        i === "number"
            ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
            : t.value !== "" + n && (t.value = "" + n);
    else if (i === "submit" || i === "reset") {
        t.removeAttribute("value");
        return;
    }
    e.hasOwnProperty("value")
        ? nl(t, e.type, n)
        : e.hasOwnProperty("defaultValue") && nl(t, e.type, qt(e.defaultValue)),
        e.checked == null &&
        e.defaultChecked != null &&
        (t.defaultChecked = !!e.defaultChecked);
}
function fu(t, e, n) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var i = e.type;
        if (
            !(
                (i !== "submit" && i !== "reset") ||
                (e.value !== void 0 && e.value !== null)
            )
        )
            return;
        (e = "" + t._wrapperState.initialValue),
            n || e === t.value || (t.value = e),
            (t.defaultValue = e);
    }
    (n = t.name),
        n !== "" && (t.name = ""),
        (t.defaultChecked = !!t._wrapperState.initialChecked),
        n !== "" && (t.name = n);
}
function nl(t, e, n) {
    (e !== "number" || ps(t.ownerDocument) !== t) &&
        (n == null
            ? (t.defaultValue = "" + t._wrapperState.initialValue)
            : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var Ci = Array.isArray;
function Wn(t, e, n, i) {
    if (((t = t.options), e)) {
        e = {};
        for (var r = 0; r < n.length; r++) e["$" + n[r]] = !0;
        for (n = 0; n < t.length; n++)
            (r = e.hasOwnProperty("$" + t[n].value)),
                t[n].selected !== r && (t[n].selected = r),
                r && i && (t[n].defaultSelected = !0);
    } else {
        for (n = "" + qt(n), e = null, r = 0; r < t.length; r++) {
            if (t[r].value === n) {
                (t[r].selected = !0), i && (t[r].defaultSelected = !0);
                return;
            }
            e !== null || t[r].disabled || (e = t[r]);
        }
        e !== null && (e.selected = !0);
    }
}
function il(t, e) {
    if (e.dangerouslySetInnerHTML != null) throw Error(C(91));
    return q({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue,
    });
}
function du(t, e) {
    var n = e.value;
    if (n == null) {
        if (((n = e.children), (e = e.defaultValue), n != null)) {
            if (e != null) throw Error(C(92));
            if (Ci(n)) {
                if (1 < n.length) throw Error(C(93));
                n = n[0];
            }
            e = n;
        }
        e == null && (e = ""), (n = e);
    }
    t._wrapperState = { initialValue: qt(n) };
}
function Qf(t, e) {
    var n = qt(e.value),
        i = qt(e.defaultValue);
    n != null &&
        ((n = "" + n),
            n !== t.value && (t.value = n),
            e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
        i != null && (t.defaultValue = "" + i);
}
function hu(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function Xf(t) {
    switch (t) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function rl(t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml"
        ? Xf(e)
        : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
            ? "http://www.w3.org/1999/xhtml"
            : t;
}
var Mr,
    Gf = (function (t) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (e, n, i, r) {
                MSApp.execUnsafeLocalFunction(function () {
                    return t(e, n, i, r);
                });
            }
            : t;
    })(function (t, e) {
        if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
            t.innerHTML = e;
        else {
            for (
                Mr = Mr || document.createElement("div"),
                Mr.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
                e = Mr.firstChild;
                t.firstChild;

            )
                t.removeChild(t.firstChild);
            for (; e.firstChild;) t.appendChild(e.firstChild);
        }
    });
function Yi(t, e) {
    if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return;
        }
    }
    t.textContent = e;
}
var zi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
},
    og = ["Webkit", "ms", "Moz", "O"];
Object.keys(zi).forEach(function (t) {
    og.forEach(function (e) {
        (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (zi[e] = zi[t]);
    });
});
function Zf(t, e, n) {
    return e == null || typeof e == "boolean" || e === ""
        ? ""
        : n || typeof e != "number" || e === 0 || (zi.hasOwnProperty(t) && zi[t])
            ? ("" + e).trim()
            : e + "px";
}
function qf(t, e) {
    t = t.style;
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var i = n.indexOf("--") === 0,
                r = Zf(n, e[n], i);
            n === "float" && (n = "cssFloat"), i ? t.setProperty(n, r) : (t[n] = r);
        }
}
var lg = q(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function sl(t, e) {
    if (e) {
        if (lg[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
            throw Error(C(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null) throw Error(C(60));
            if (
                typeof e.dangerouslySetInnerHTML != "object" ||
                !("__html" in e.dangerouslySetInnerHTML)
            )
                throw Error(C(61));
        }
        if (e.style != null && typeof e.style != "object") throw Error(C(62));
    }
}
function ol(t, e) {
    if (t.indexOf("-") === -1) return typeof e.is == "string";
    switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var ll = null;
function oa(t) {
    return (
        (t = t.target || t.srcElement || window),
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    );
}
var al = null,
    $n = null,
    Un = null;
function pu(t) {
    if ((t = mr(t))) {
        if (typeof al != "function") throw Error(C(280));
        var e = t.stateNode;
        e && ((e = Zs(e)), al(t.stateNode, t.type, e));
    }
}
function Jf(t) {
    $n ? (Un ? Un.push(t) : (Un = [t])) : ($n = t);
}
function ed() {
    if ($n) {
        var t = $n,
            e = Un;
        if (((Un = $n = null), pu(t), e)) for (t = 0; t < e.length; t++) pu(e[t]);
    }
}
function td(t, e) {
    return t(e);
}
function nd() { }
var mo = !1;
function id(t, e, n) {
    if (mo) return t(e, n);
    mo = !0;
    try {
        return td(t, e, n);
    } finally {
        (mo = !1), ($n !== null || Un !== null) && (nd(), ed());
    }
}
function Ki(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = Zs(n);
    if (i === null) return null;
    n = i[e];
    e: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (i = !i.disabled) ||
                ((t = t.type),
                    (i = !(
                        t === "button" ||
                        t === "input" ||
                        t === "select" ||
                        t === "textarea"
                    ))),
                (t = !i);
            break e;
        default:
            t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(C(231, e, typeof n));
    return n;
}
var ul = !1;
if (bt)
    try {
        var di = {};
        Object.defineProperty(di, "passive", {
            get: function () {
                ul = !0;
            },
        }),
            window.addEventListener("test", di, di),
            window.removeEventListener("test", di, di);
    } catch {
        ul = !1;
    }
function ag(t, e, n, i, r, s, o, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(n, u);
    } catch (c) {
        this.onError(c);
    }
}
var Di = !1,
    gs = null,
    ms = !1,
    cl = null,
    ug = {
        onError: function (t) {
            (Di = !0), (gs = t);
        },
    };
function cg(t, e, n, i, r, s, o, l, a) {
    (Di = !1), (gs = null), ag.apply(ug, arguments);
}
function fg(t, e, n, i, r, s, o, l, a) {
    if ((cg.apply(this, arguments), Di)) {
        if (Di) {
            var u = gs;
            (Di = !1), (gs = null);
        } else throw Error(C(198));
        ms || ((ms = !0), (cl = u));
    }
}
function Pn(t) {
    var e = t,
        n = t;
    if (t.alternate) for (; e.return;) e = e.return;
    else {
        t = e;
        do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
        while (t);
    }
    return e.tag === 3 ? n : null;
}
function rd(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if (
            (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
                e !== null)
        )
            return e.dehydrated;
    }
    return null;
}
function gu(t) {
    if (Pn(t) !== t) throw Error(C(188));
}
function dg(t) {
    var e = t.alternate;
    if (!e) {
        if (((e = Pn(t)), e === null)) throw Error(C(188));
        return e !== t ? null : t;
    }
    for (var n = t, i = e; ;) {
        var r = n.return;
        if (r === null) break;
        var s = r.alternate;
        if (s === null) {
            if (((i = r.return), i !== null)) {
                n = i;
                continue;
            }
            break;
        }
        if (r.child === s.child) {
            for (s = r.child; s;) {
                if (s === n) return gu(r), t;
                if (s === i) return gu(r), e;
                s = s.sibling;
            }
            throw Error(C(188));
        }
        if (n.return !== i.return) (n = r), (i = s);
        else {
            for (var o = !1, l = r.child; l;) {
                if (l === n) {
                    (o = !0), (n = r), (i = s);
                    break;
                }
                if (l === i) {
                    (o = !0), (i = r), (n = s);
                    break;
                }
                l = l.sibling;
            }
            if (!o) {
                for (l = s.child; l;) {
                    if (l === n) {
                        (o = !0), (n = s), (i = r);
                        break;
                    }
                    if (l === i) {
                        (o = !0), (i = s), (n = r);
                        break;
                    }
                    l = l.sibling;
                }
                if (!o) throw Error(C(189));
            }
        }
        if (n.alternate !== i) throw Error(C(190));
    }
    if (n.tag !== 3) throw Error(C(188));
    return n.stateNode.current === n ? t : e;
}
function sd(t) {
    return (t = dg(t)), t !== null ? od(t) : null;
}
function od(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null;) {
        var e = od(t);
        if (e !== null) return e;
        t = t.sibling;
    }
    return null;
}
var ld = Be.unstable_scheduleCallback,
    mu = Be.unstable_cancelCallback,
    hg = Be.unstable_shouldYield,
    pg = Be.unstable_requestPaint,
    te = Be.unstable_now,
    gg = Be.unstable_getCurrentPriorityLevel,
    la = Be.unstable_ImmediatePriority,
    ad = Be.unstable_UserBlockingPriority,
    ys = Be.unstable_NormalPriority,
    mg = Be.unstable_LowPriority,
    ud = Be.unstable_IdlePriority,
    Ks = null,
    pt = null;
function yg(t) {
    if (pt && typeof pt.onCommitFiberRoot == "function")
        try {
            pt.onCommitFiberRoot(Ks, t, void 0, (t.current.flags & 128) === 128);
        } catch { }
}
var rt = Math.clz32 ? Math.clz32 : xg,
    vg = Math.log,
    _g = Math.LN2;
function xg(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((vg(t) / _g) | 0)) | 0;
}
var Cr = 64,
    br = 4194304;
function bi(t) {
    switch (t & -t) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return t & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return t;
    }
}
function vs(t, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var i = 0,
        r = t.suspendedLanes,
        s = t.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var l = o & ~r;
        l !== 0 ? (i = bi(l)) : ((s &= o), s !== 0 && (i = bi(s)));
    } else (o = n & ~r), o !== 0 ? (i = bi(o)) : s !== 0 && (i = bi(s));
    if (i === 0) return 0;
    if (
        e !== 0 &&
        e !== i &&
        !(e & r) &&
        ((r = i & -i), (s = e & -e), r >= s || (r === 16 && (s & 4194240) !== 0))
    )
        return e;
    if ((i & 4 && (i |= n & 16), (e = t.entangledLanes), e !== 0))
        for (t = t.entanglements, e &= i; 0 < e;)
            (n = 31 - rt(e)), (r = 1 << n), (i |= t[n]), (e &= ~r);
    return i;
}
function wg(t, e) {
    switch (t) {
        case 1:
        case 2:
        case 4:
            return e + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function kg(t, e) {
    for (
        var n = t.suspendedLanes,
        i = t.pingedLanes,
        r = t.expirationTimes,
        s = t.pendingLanes;
        0 < s;

    ) {
        var o = 31 - rt(s),
            l = 1 << o,
            a = r[o];
        a === -1
            ? (!(l & n) || l & i) && (r[o] = wg(l, e))
            : a <= e && (t.expiredLanes |= l),
            (s &= ~l);
    }
}
function fl(t) {
    return (
        (t = t.pendingLanes & -1073741825),
        t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
    );
}
function cd() {
    var t = Cr;
    return (Cr <<= 1), !(Cr & 4194240) && (Cr = 64), t;
}
function yo(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
}
function pr(t, e, n) {
    (t.pendingLanes |= e),
        e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
        (t = t.eventTimes),
        (e = 31 - rt(e)),
        (t[e] = n);
}
function Sg(t, e) {
    var n = t.pendingLanes & ~e;
    (t.pendingLanes = e),
        (t.suspendedLanes = 0),
        (t.pingedLanes = 0),
        (t.expiredLanes &= e),
        (t.mutableReadLanes &= e),
        (t.entangledLanes &= e),
        (e = t.entanglements);
    var i = t.eventTimes;
    for (t = t.expirationTimes; 0 < n;) {
        var r = 31 - rt(n),
            s = 1 << r;
        (e[r] = 0), (i[r] = -1), (t[r] = -1), (n &= ~s);
    }
}
function aa(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n;) {
        var i = 31 - rt(n),
            r = 1 << i;
        (r & e) | (t[i] & e) && (t[i] |= e), (n &= ~r);
    }
}
var j = 0;
function fd(t) {
    return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var dd,
    ua,
    hd,
    pd,
    gd,
    dl = !1,
    Pr = [],
    Ht = null,
    Vt = null,
    Wt = null,
    Qi = new Map(),
    Xi = new Map(),
    Ft = [],
    Mg =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function yu(t, e) {
    switch (t) {
        case "focusin":
        case "focusout":
            Ht = null;
            break;
        case "dragenter":
        case "dragleave":
            Vt = null;
            break;
        case "mouseover":
        case "mouseout":
            Wt = null;
            break;
        case "pointerover":
        case "pointerout":
            Qi.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Xi.delete(e.pointerId);
    }
}
function hi(t, e, n, i, r, s) {
    return t === null || t.nativeEvent !== s
        ? ((t = {
            blockedOn: e,
            domEventName: n,
            eventSystemFlags: i,
            nativeEvent: s,
            targetContainers: [r],
        }),
            e !== null && ((e = mr(e)), e !== null && ua(e)),
            t)
        : ((t.eventSystemFlags |= i),
            (e = t.targetContainers),
            r !== null && e.indexOf(r) === -1 && e.push(r),
            t);
}
function Cg(t, e, n, i, r) {
    switch (e) {
        case "focusin":
            return (Ht = hi(Ht, t, e, n, i, r)), !0;
        case "dragenter":
            return (Vt = hi(Vt, t, e, n, i, r)), !0;
        case "mouseover":
            return (Wt = hi(Wt, t, e, n, i, r)), !0;
        case "pointerover":
            var s = r.pointerId;
            return Qi.set(s, hi(Qi.get(s) || null, t, e, n, i, r)), !0;
        case "gotpointercapture":
            return (
                (s = r.pointerId), Xi.set(s, hi(Xi.get(s) || null, t, e, n, i, r)), !0
            );
    }
    return !1;
}
function md(t) {
    var e = hn(t.target);
    if (e !== null) {
        var n = Pn(e);
        if (n !== null) {
            if (((e = n.tag), e === 13)) {
                if (((e = rd(n)), e !== null)) {
                    (t.blockedOn = e),
                        gd(t.priority, function () {
                            hd(n);
                        });
                    return;
                }
            } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    t.blockedOn = null;
}
function Jr(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length;) {
        var n = hl(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var i = new n.constructor(n.type, n);
            (ll = i), n.target.dispatchEvent(i), (ll = null);
        } else return (e = mr(n)), e !== null && ua(e), (t.blockedOn = n), !1;
        e.shift();
    }
    return !0;
}
function vu(t, e, n) {
    Jr(t) && n.delete(e);
}
function bg() {
    (dl = !1),
        Ht !== null && Jr(Ht) && (Ht = null),
        Vt !== null && Jr(Vt) && (Vt = null),
        Wt !== null && Jr(Wt) && (Wt = null),
        Qi.forEach(vu),
        Xi.forEach(vu);
}
function pi(t, e) {
    t.blockedOn === e &&
        ((t.blockedOn = null),
            dl ||
            ((dl = !0),
                Be.unstable_scheduleCallback(Be.unstable_NormalPriority, bg)));
}
function Gi(t) {
    function e(r) {
        return pi(r, t);
    }
    if (0 < Pr.length) {
        pi(Pr[0], t);
        for (var n = 1; n < Pr.length; n++) {
            var i = Pr[n];
            i.blockedOn === t && (i.blockedOn = null);
        }
    }
    for (
        Ht !== null && pi(Ht, t),
        Vt !== null && pi(Vt, t),
        Wt !== null && pi(Wt, t),
        Qi.forEach(e),
        Xi.forEach(e),
        n = 0;
        n < Ft.length;
        n++
    )
        (i = Ft[n]), i.blockedOn === t && (i.blockedOn = null);
    for (; 0 < Ft.length && ((n = Ft[0]), n.blockedOn === null);)
        md(n), n.blockedOn === null && Ft.shift();
}
var Yn = Ot.ReactCurrentBatchConfig,
    _s = !0;
function Pg(t, e, n, i) {
    var r = j,
        s = Yn.transition;
    Yn.transition = null;
    try {
        (j = 1), ca(t, e, n, i);
    } finally {
        (j = r), (Yn.transition = s);
    }
}
function Eg(t, e, n, i) {
    var r = j,
        s = Yn.transition;
    Yn.transition = null;
    try {
        (j = 4), ca(t, e, n, i);
    } finally {
        (j = r), (Yn.transition = s);
    }
}
function ca(t, e, n, i) {
    if (_s) {
        var r = hl(t, e, n, i);
        if (r === null) Po(t, e, i, xs, n), yu(t, i);
        else if (Cg(r, t, e, n, i)) i.stopPropagation();
        else if ((yu(t, i), e & 4 && -1 < Mg.indexOf(t))) {
            for (; r !== null;) {
                var s = mr(r);
                if (
                    (s !== null && dd(s),
                        (s = hl(t, e, n, i)),
                        s === null && Po(t, e, i, xs, n),
                        s === r)
                )
                    break;
                r = s;
            }
            r !== null && i.stopPropagation();
        } else Po(t, e, i, null, n);
    }
}
var xs = null;
function hl(t, e, n, i) {
    if (((xs = null), (t = oa(i)), (t = hn(t)), t !== null))
        if (((e = Pn(t)), e === null)) t = null;
        else if (((n = e.tag), n === 13)) {
            if (((t = rd(e)), t !== null)) return t;
            t = null;
        } else if (n === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
                return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
        } else e !== t && (t = null);
    return (xs = t), null;
}
function yd(t) {
    switch (t) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (gg()) {
                case la:
                    return 1;
                case ad:
                    return 4;
                case ys:
                case mg:
                    return 16;
                case ud:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var At = null,
    fa = null,
    es = null;
function vd() {
    if (es) return es;
    var t,
        e = fa,
        n = e.length,
        i,
        r = "value" in At ? At.value : At.textContent,
        s = r.length;
    for (t = 0; t < n && e[t] === r[t]; t++);
    var o = n - t;
    for (i = 1; i <= o && e[n - i] === r[s - i]; i++);
    return (es = r.slice(t, 1 < i ? 1 - i : void 0));
}
function ts(t) {
    var e = t.keyCode;
    return (
        "charCode" in t
            ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
            : (t = e),
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    );
}
function Er() {
    return !0;
}
function _u() {
    return !1;
}
function He(t) {
    function e(n, i, r, s, o) {
        (this._reactName = n),
            (this._targetInst = r),
            (this.type = i),
            (this.nativeEvent = s),
            (this.target = o),
            (this.currentTarget = null);
        for (var l in t)
            t.hasOwnProperty(l) && ((n = t[l]), (this[l] = n ? n(s) : s[l]));
        return (
            (this.isDefaultPrevented = (
                s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
            )
                ? Er
                : _u),
            (this.isPropagationStopped = _u),
            this
        );
    }
    return (
        q(e.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                        (this.isDefaultPrevented = Er));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                        (this.isPropagationStopped = Er));
            },
            persist: function () { },
            isPersistent: Er,
        }),
        e
    );
}
var li = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
        return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
},
    da = He(li),
    gr = q({}, li, { view: 0, detail: 0 }),
    Tg = He(gr),
    vo,
    _o,
    gi,
    Qs = q({}, gr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ha,
        button: 0,
        buttons: 0,
        relatedTarget: function (t) {
            return t.relatedTarget === void 0
                ? t.fromElement === t.srcElement
                    ? t.toElement
                    : t.fromElement
                : t.relatedTarget;
        },
        movementX: function (t) {
            return "movementX" in t
                ? t.movementX
                : (t !== gi &&
                    (gi && t.type === "mousemove"
                        ? ((vo = t.screenX - gi.screenX), (_o = t.screenY - gi.screenY))
                        : (_o = vo = 0),
                        (gi = t)),
                    vo);
        },
        movementY: function (t) {
            return "movementY" in t ? t.movementY : _o;
        },
    }),
    xu = He(Qs),
    Og = q({}, Qs, { dataTransfer: 0 }),
    Lg = He(Og),
    zg = q({}, gr, { relatedTarget: 0 }),
    xo = He(zg),
    Dg = q({}, li, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Rg = He(Dg),
    Fg = q({}, li, {
        clipboardData: function (t) {
            return "clipboardData" in t ? t.clipboardData : window.clipboardData;
        },
    }),
    Ig = He(Fg),
    Ag = q({}, li, { data: 0 }),
    wu = He(Ag),
    Ng = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    Bg = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    jg = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };
function Hg(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = jg[t]) ? !!e[t] : !1;
}
function ha() {
    return Hg;
}
var Vg = q({}, gr, {
    key: function (t) {
        if (t.key) {
            var e = Ng[t.key] || t.key;
            if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
            ? ((t = ts(t)), t === 13 ? "Enter" : String.fromCharCode(t))
            : t.type === "keydown" || t.type === "keyup"
                ? Bg[t.keyCode] || "Unidentified"
                : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ha,
    charCode: function (t) {
        return t.type === "keypress" ? ts(t) : 0;
    },
    keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
        return t.type === "keypress"
            ? ts(t)
            : t.type === "keydown" || t.type === "keyup"
                ? t.keyCode
                : 0;
    },
}),
    Wg = He(Vg),
    $g = q({}, Qs, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    ku = He($g),
    Ug = q({}, gr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ha,
    }),
    Yg = He(Ug),
    Kg = q({}, li, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Qg = He(Kg),
    Xg = q({}, Qs, {
        deltaX: function (t) {
            return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
        },
        deltaY: function (t) {
            return "deltaY" in t
                ? t.deltaY
                : "wheelDeltaY" in t
                    ? -t.wheelDeltaY
                    : "wheelDelta" in t
                        ? -t.wheelDelta
                        : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    Gg = He(Xg),
    Zg = [9, 13, 27, 32],
    pa = bt && "CompositionEvent" in window,
    Ri = null;
bt && "documentMode" in document && (Ri = document.documentMode);
var qg = bt && "TextEvent" in window && !Ri,
    _d = bt && (!pa || (Ri && 8 < Ri && 11 >= Ri)),
    Su = " ",
    Mu = !1;
function xd(t, e) {
    switch (t) {
        case "keyup":
            return Zg.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function wd(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var zn = !1;
function Jg(t, e) {
    switch (t) {
        case "compositionend":
            return wd(e);
        case "keypress":
            return e.which !== 32 ? null : ((Mu = !0), Su);
        case "textInput":
            return (t = e.data), t === Su && Mu ? null : t;
        default:
            return null;
    }
}
function em(t, e) {
    if (zn)
        return t === "compositionend" || (!pa && xd(t, e))
            ? ((t = vd()), (es = fa = At = null), (zn = !1), t)
            : null;
    switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
                if (e.char && 1 < e.char.length) return e.char;
                if (e.which) return String.fromCharCode(e.which);
            }
            return null;
        case "compositionend":
            return _d && e.locale !== "ko" ? null : e.data;
        default:
            return null;
    }
}
var tm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function Cu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!tm[t.type] : e === "textarea";
}
function kd(t, e, n, i) {
    Jf(i),
        (e = ws(e, "onChange")),
        0 < e.length &&
        ((n = new da("onChange", "change", null, n, i)),
            t.push({ event: n, listeners: e }));
}
var Fi = null,
    Zi = null;
function nm(t) {
    Dd(t, 0);
}
function Xs(t) {
    var e = Fn(t);
    if (Yf(e)) return t;
}
function im(t, e) {
    if (t === "change") return e;
}
var Sd = !1;
if (bt) {
    var wo;
    if (bt) {
        var ko = "oninput" in document;
        if (!ko) {
            var bu = document.createElement("div");
            bu.setAttribute("oninput", "return;"),
                (ko = typeof bu.oninput == "function");
        }
        wo = ko;
    } else wo = !1;
    Sd = wo && (!document.documentMode || 9 < document.documentMode);
}
function Pu() {
    Fi && (Fi.detachEvent("onpropertychange", Md), (Zi = Fi = null));
}
function Md(t) {
    if (t.propertyName === "value" && Xs(Zi)) {
        var e = [];
        kd(e, Zi, t, oa(t)), id(nm, e);
    }
}
function rm(t, e, n) {
    t === "focusin"
        ? (Pu(), (Fi = e), (Zi = n), Fi.attachEvent("onpropertychange", Md))
        : t === "focusout" && Pu();
}
function sm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return Xs(Zi);
}
function om(t, e) {
    if (t === "click") return Xs(e);
}
function lm(t, e) {
    if (t === "input" || t === "change") return Xs(e);
}
function am(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var ot = typeof Object.is == "function" ? Object.is : am;
function qi(t, e) {
    if (ot(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
    var n = Object.keys(t),
        i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
        var r = n[i];
        if (!Xo.call(e, r) || !ot(t[r], e[r])) return !1;
    }
    return !0;
}
function Eu(t) {
    for (; t && t.firstChild;) t = t.firstChild;
    return t;
}
function Tu(t, e) {
    var n = Eu(t);
    t = 0;
    for (var i; n;) {
        if (n.nodeType === 3) {
            if (((i = t + n.textContent.length), t <= e && i >= e))
                return { node: n, offset: e - t };
            t = i;
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = Eu(n);
    }
}
function Cd(t, e) {
    return t && e
        ? t === e
            ? !0
            : t && t.nodeType === 3
                ? !1
                : e && e.nodeType === 3
                    ? Cd(t, e.parentNode)
                    : "contains" in t
                        ? t.contains(e)
                        : t.compareDocumentPosition
                            ? !!(t.compareDocumentPosition(e) & 16)
                            : !1
        : !1;
}
function bd() {
    for (var t = window, e = ps(); e instanceof t.HTMLIFrameElement;) {
        try {
            var n = typeof e.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) t = e.contentWindow;
        else break;
        e = ps(t.document);
    }
    return e;
}
function ga(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
        e &&
        ((e === "input" &&
            (t.type === "text" ||
                t.type === "search" ||
                t.type === "tel" ||
                t.type === "url" ||
                t.type === "password")) ||
            e === "textarea" ||
            t.contentEditable === "true")
    );
}
function um(t) {
    var e = bd(),
        n = t.focusedElem,
        i = t.selectionRange;
    if (
        e !== n &&
        n &&
        n.ownerDocument &&
        Cd(n.ownerDocument.documentElement, n)
    ) {
        if (i !== null && ga(n)) {
            if (
                ((e = i.start),
                    (t = i.end),
                    t === void 0 && (t = e),
                    "selectionStart" in n)
            )
                (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
            else if (
                ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
                    t.getSelection)
            ) {
                t = t.getSelection();
                var r = n.textContent.length,
                    s = Math.min(i.start, r);
                (i = i.end === void 0 ? s : Math.min(i.end, r)),
                    !t.extend && s > i && ((r = i), (i = s), (s = r)),
                    (r = Tu(n, s));
                var o = Tu(n, i);
                r &&
                    o &&
                    (t.rangeCount !== 1 ||
                        t.anchorNode !== r.node ||
                        t.anchorOffset !== r.offset ||
                        t.focusNode !== o.node ||
                        t.focusOffset !== o.offset) &&
                    ((e = e.createRange()),
                        e.setStart(r.node, r.offset),
                        t.removeAllRanges(),
                        s > i
                            ? (t.addRange(e), t.extend(o.node, o.offset))
                            : (e.setEnd(o.node, o.offset), t.addRange(e)));
            }
        }
        for (e = [], t = n; (t = t.parentNode);)
            t.nodeType === 1 &&
                e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
            (t = e[n]),
                (t.element.scrollLeft = t.left),
                (t.element.scrollTop = t.top);
    }
}
var cm = bt && "documentMode" in document && 11 >= document.documentMode,
    Dn = null,
    pl = null,
    Ii = null,
    gl = !1;
function Ou(t, e, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    gl ||
        Dn == null ||
        Dn !== ps(i) ||
        ((i = Dn),
            "selectionStart" in i && ga(i)
                ? (i = { start: i.selectionStart, end: i.selectionEnd })
                : ((i = (
                    (i.ownerDocument && i.ownerDocument.defaultView) ||
                    window
                ).getSelection()),
                    (i = {
                        anchorNode: i.anchorNode,
                        anchorOffset: i.anchorOffset,
                        focusNode: i.focusNode,
                        focusOffset: i.focusOffset,
                    })),
            (Ii && qi(Ii, i)) ||
            ((Ii = i),
                (i = ws(pl, "onSelect")),
                0 < i.length &&
                ((e = new da("onSelect", "select", null, e, n)),
                    t.push({ event: e, listeners: i }),
                    (e.target = Dn))));
}
function Tr(t, e) {
    var n = {};
    return (
        (n[t.toLowerCase()] = e.toLowerCase()),
        (n["Webkit" + t] = "webkit" + e),
        (n["Moz" + t] = "moz" + e),
        n
    );
}
var Rn = {
    animationend: Tr("Animation", "AnimationEnd"),
    animationiteration: Tr("Animation", "AnimationIteration"),
    animationstart: Tr("Animation", "AnimationStart"),
    transitionend: Tr("Transition", "TransitionEnd"),
},
    So = {},
    Pd = {};
bt &&
    ((Pd = document.createElement("div").style),
        "AnimationEvent" in window ||
        (delete Rn.animationend.animation,
            delete Rn.animationiteration.animation,
            delete Rn.animationstart.animation),
        "TransitionEvent" in window || delete Rn.transitionend.transition);
function Gs(t) {
    if (So[t]) return So[t];
    if (!Rn[t]) return t;
    var e = Rn[t],
        n;
    for (n in e) if (e.hasOwnProperty(n) && n in Pd) return (So[t] = e[n]);
    return t;
}
var Ed = Gs("animationend"),
    Td = Gs("animationiteration"),
    Od = Gs("animationstart"),
    Ld = Gs("transitionend"),
    zd = new Map(),
    Lu =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function nn(t, e) {
    zd.set(t, e), bn(e, [t]);
}
for (var Mo = 0; Mo < Lu.length; Mo++) {
    var Co = Lu[Mo],
        fm = Co.toLowerCase(),
        dm = Co[0].toUpperCase() + Co.slice(1);
    nn(fm, "on" + dm);
}
nn(Ed, "onAnimationEnd");
nn(Td, "onAnimationIteration");
nn(Od, "onAnimationStart");
nn("dblclick", "onDoubleClick");
nn("focusin", "onFocus");
nn("focusout", "onBlur");
nn(Ld, "onTransitionEnd");
Zn("onMouseEnter", ["mouseout", "mouseover"]);
Zn("onMouseLeave", ["mouseout", "mouseover"]);
Zn("onPointerEnter", ["pointerout", "pointerover"]);
Zn("onPointerLeave", ["pointerout", "pointerover"]);
bn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
bn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
    )
);
bn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
bn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
bn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
bn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Pi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
    ),
    hm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pi));
function zu(t, e, n) {
    var i = t.type || "unknown-event";
    (t.currentTarget = n), fg(i, e, void 0, t), (t.currentTarget = null);
}
function Dd(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
        var i = t[n],
            r = i.event;
        i = i.listeners;
        e: {
            var s = void 0;
            if (e)
                for (var o = i.length - 1; 0 <= o; o--) {
                    var l = i[o],
                        a = l.instance,
                        u = l.currentTarget;
                    if (((l = l.listener), a !== s && r.isPropagationStopped())) break e;
                    zu(r, l, u), (s = a);
                }
            else
                for (o = 0; o < i.length; o++) {
                    if (
                        ((l = i[o]),
                            (a = l.instance),
                            (u = l.currentTarget),
                            (l = l.listener),
                            a !== s && r.isPropagationStopped())
                    )
                        break e;
                    zu(r, l, u), (s = a);
                }
        }
    }
    if (ms) throw ((t = cl), (ms = !1), (cl = null), t);
}
function $(t, e) {
    var n = e[xl];
    n === void 0 && (n = e[xl] = new Set());
    var i = t + "__bubble";
    n.has(i) || (Rd(e, t, 2, !1), n.add(i));
}
function bo(t, e, n) {
    var i = 0;
    e && (i |= 4), Rd(n, t, i, e);
}
var Or = "_reactListening" + Math.random().toString(36).slice(2);
function Ji(t) {
    if (!t[Or]) {
        (t[Or] = !0),
            Hf.forEach(function (n) {
                n !== "selectionchange" && (hm.has(n) || bo(n, !1, t), bo(n, !0, t));
            });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[Or] || ((e[Or] = !0), bo("selectionchange", !1, e));
    }
}
function Rd(t, e, n, i) {
    switch (yd(e)) {
        case 1:
            var r = Pg;
            break;
        case 4:
            r = Eg;
            break;
        default:
            r = ca;
    }
    (n = r.bind(null, e, n, t)),
        (r = void 0),
        !ul ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (r = !0),
        i
            ? r !== void 0
                ? t.addEventListener(e, n, { capture: !0, passive: r })
                : t.addEventListener(e, n, !0)
            : r !== void 0
                ? t.addEventListener(e, n, { passive: r })
                : t.addEventListener(e, n, !1);
}
function Po(t, e, n, i, r) {
    var s = i;
    if (!(e & 1) && !(e & 2) && i !== null)
        e: for (; ;) {
            if (i === null) return;
            var o = i.tag;
            if (o === 3 || o === 4) {
                var l = i.stateNode.containerInfo;
                if (l === r || (l.nodeType === 8 && l.parentNode === r)) break;
                if (o === 4)
                    for (o = i.return; o !== null;) {
                        var a = o.tag;
                        if (
                            (a === 3 || a === 4) &&
                            ((a = o.stateNode.containerInfo),
                                a === r || (a.nodeType === 8 && a.parentNode === r))
                        )
                            return;
                        o = o.return;
                    }
                for (; l !== null;) {
                    if (((o = hn(l)), o === null)) return;
                    if (((a = o.tag), a === 5 || a === 6)) {
                        i = s = o;
                        continue e;
                    }
                    l = l.parentNode;
                }
            }
            i = i.return;
        }
    id(function () {
        var u = s,
            c = oa(n),
            f = [];
        e: {
            var d = zd.get(t);
            if (d !== void 0) {
                var h = da,
                    y = t;
                switch (t) {
                    case "keypress":
                        if (ts(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        h = Wg;
                        break;
                    case "focusin":
                        (y = "focus"), (h = xo);
                        break;
                    case "focusout":
                        (y = "blur"), (h = xo);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        h = xo;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        h = xu;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        h = Lg;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        h = Yg;
                        break;
                    case Ed:
                    case Td:
                    case Od:
                        h = Rg;
                        break;
                    case Ld:
                        h = Qg;
                        break;
                    case "scroll":
                        h = Tg;
                        break;
                    case "wheel":
                        h = Gg;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        h = Ig;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        h = ku;
                }
                var v = (e & 4) !== 0,
                    _ = !v && t === "scroll",
                    p = v ? (d !== null ? d + "Capture" : null) : d;
                v = [];
                for (var g = u, m; g !== null;) {
                    m = g;
                    var x = m.stateNode;
                    if (
                        (m.tag === 5 &&
                            x !== null &&
                            ((m = x),
                                p !== null && ((x = Ki(g, p)), x != null && v.push(er(g, x, m)))),
                            _)
                    )
                        break;
                    g = g.return;
                }
                0 < v.length &&
                    ((d = new h(d, y, null, n, c)), f.push({ event: d, listeners: v }));
            }
        }
        if (!(e & 7)) {
            e: {
                if (
                    ((d = t === "mouseover" || t === "pointerover"),
                        (h = t === "mouseout" || t === "pointerout"),
                        d &&
                        n !== ll &&
                        (y = n.relatedTarget || n.fromElement) &&
                        (hn(y) || y[Pt]))
                )
                    break e;
                if (
                    (h || d) &&
                    ((d =
                        c.window === c
                            ? c
                            : (d = c.ownerDocument)
                                ? d.defaultView || d.parentWindow
                                : window),
                        h
                            ? ((y = n.relatedTarget || n.toElement),
                                (h = u),
                                (y = y ? hn(y) : null),
                                y !== null &&
                                ((_ = Pn(y)), y !== _ || (y.tag !== 5 && y.tag !== 6)) &&
                                (y = null))
                            : ((h = null), (y = u)),
                        h !== y)
                ) {
                    if (
                        ((v = xu),
                            (x = "onMouseLeave"),
                            (p = "onMouseEnter"),
                            (g = "mouse"),
                            (t === "pointerout" || t === "pointerover") &&
                            ((v = ku),
                                (x = "onPointerLeave"),
                                (p = "onPointerEnter"),
                                (g = "pointer")),
                            (_ = h == null ? d : Fn(h)),
                            (m = y == null ? d : Fn(y)),
                            (d = new v(x, g + "leave", h, n, c)),
                            (d.target = _),
                            (d.relatedTarget = m),
                            (x = null),
                            hn(c) === u &&
                            ((v = new v(p, g + "enter", y, n, c)),
                                (v.target = m),
                                (v.relatedTarget = _),
                                (x = v)),
                            (_ = x),
                            h && y)
                    )
                        t: {
                            for (v = h, p = y, g = 0, m = v; m; m = En(m)) g++;
                            for (m = 0, x = p; x; x = En(x)) m++;
                            for (; 0 < g - m;) (v = En(v)), g--;
                            for (; 0 < m - g;) (p = En(p)), m--;
                            for (; g--;) {
                                if (v === p || (p !== null && v === p.alternate)) break t;
                                (v = En(v)), (p = En(p));
                            }
                            v = null;
                        }
                    else v = null;
                    h !== null && Du(f, d, h, v, !1),
                        y !== null && _ !== null && Du(f, _, y, v, !0);
                }
            }
            e: {
                if (
                    ((d = u ? Fn(u) : window),
                        (h = d.nodeName && d.nodeName.toLowerCase()),
                        h === "select" || (h === "input" && d.type === "file"))
                )
                    var w = im;
                else if (Cu(d))
                    if (Sd) w = lm;
                    else {
                        w = sm;
                        var k = rm;
                    }
                else
                    (h = d.nodeName) &&
                        h.toLowerCase() === "input" &&
                        (d.type === "checkbox" || d.type === "radio") &&
                        (w = om);
                if (w && (w = w(t, u))) {
                    kd(f, w, n, c);
                    break e;
                }
                k && k(t, d, u),
                    t === "focusout" &&
                    (k = d._wrapperState) &&
                    k.controlled &&
                    d.type === "number" &&
                    nl(d, "number", d.value);
            }
            switch (((k = u ? Fn(u) : window), t)) {
                case "focusin":
                    (Cu(k) || k.contentEditable === "true") &&
                        ((Dn = k), (pl = u), (Ii = null));
                    break;
                case "focusout":
                    Ii = pl = Dn = null;
                    break;
                case "mousedown":
                    gl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (gl = !1), Ou(f, n, c);
                    break;
                case "selectionchange":
                    if (cm) break;
                case "keydown":
                case "keyup":
                    Ou(f, n, c);
            }
            var S;
            if (pa)
                e: {
                    switch (t) {
                        case "compositionstart":
                            var M = "onCompositionStart";
                            break e;
                        case "compositionend":
                            M = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            M = "onCompositionUpdate";
                            break e;
                    }
                    M = void 0;
                }
            else
                zn
                    ? xd(t, n) && (M = "onCompositionEnd")
                    : t === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
            M &&
                (_d &&
                    n.locale !== "ko" &&
                    (zn || M !== "onCompositionStart"
                        ? M === "onCompositionEnd" && zn && (S = vd())
                        : ((At = c),
                            (fa = "value" in At ? At.value : At.textContent),
                            (zn = !0))),
                    (k = ws(u, M)),
                    0 < k.length &&
                    ((M = new wu(M, t, null, n, c)),
                        f.push({ event: M, listeners: k }),
                        S ? (M.data = S) : ((S = wd(n)), S !== null && (M.data = S)))),
                (S = qg ? Jg(t, n) : em(t, n)) &&
                ((u = ws(u, "onBeforeInput")),
                    0 < u.length &&
                    ((c = new wu("onBeforeInput", "beforeinput", null, n, c)),
                        f.push({ event: c, listeners: u }),
                        (c.data = S)));
        }
        Dd(f, e);
    });
}
function er(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
}
function ws(t, e) {
    for (var n = e + "Capture", i = []; t !== null;) {
        var r = t,
            s = r.stateNode;
        r.tag === 5 &&
            s !== null &&
            ((r = s),
                (s = Ki(t, n)),
                s != null && i.unshift(er(t, s, r)),
                (s = Ki(t, e)),
                s != null && i.push(er(t, s, r))),
            (t = t.return);
    }
    return i;
}
function En(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5);
    return t || null;
}
function Du(t, e, n, i, r) {
    for (var s = e._reactName, o = []; n !== null && n !== i;) {
        var l = n,
            a = l.alternate,
            u = l.stateNode;
        if (a !== null && a === i) break;
        l.tag === 5 &&
            u !== null &&
            ((l = u),
                r
                    ? ((a = Ki(n, s)), a != null && o.unshift(er(n, a, l)))
                    : r || ((a = Ki(n, s)), a != null && o.push(er(n, a, l)))),
            (n = n.return);
    }
    o.length !== 0 && t.push({ event: e, listeners: o });
}
var pm = /\r\n?/g,
    gm = /\u0000|\uFFFD/g;
function Ru(t) {
    return (typeof t == "string" ? t : "" + t)
        .replace(
            pm,
            `
`
        )
        .replace(gm, "");
}
function Lr(t, e, n) {
    if (((e = Ru(e)), Ru(t) !== e && n)) throw Error(C(425));
}
function ks() { }
var ml = null,
    yl = null;
function vl(t, e) {
    return (
        t === "textarea" ||
        t === "noscript" ||
        typeof e.children == "string" ||
        typeof e.children == "number" ||
        (typeof e.dangerouslySetInnerHTML == "object" &&
            e.dangerouslySetInnerHTML !== null &&
            e.dangerouslySetInnerHTML.__html != null)
    );
}
var _l = typeof setTimeout == "function" ? setTimeout : void 0,
    mm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Fu = typeof Promise == "function" ? Promise : void 0,
    ym =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof Fu < "u"
                ? function (t) {
                    return Fu.resolve(null).then(t).catch(vm);
                }
                : _l;
function vm(t) {
    setTimeout(function () {
        throw t;
    });
}
function Eo(t, e) {
    var n = e,
        i = 0;
    do {
        var r = n.nextSibling;
        if ((t.removeChild(n), r && r.nodeType === 8))
            if (((n = r.data), n === "/$")) {
                if (i === 0) {
                    t.removeChild(r), Gi(e);
                    return;
                }
                i--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || i++;
        n = r;
    } while (n);
    Gi(e);
}
function $t(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
            if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
            if (e === "/$") return null;
        }
    }
    return t;
}
function Iu(t) {
    t = t.previousSibling;
    for (var e = 0; t;) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (e === 0) return t;
                e--;
            } else n === "/$" && e++;
        }
        t = t.previousSibling;
    }
    return null;
}
var ai = Math.random().toString(36).slice(2),
    ht = "__reactFiber$" + ai,
    tr = "__reactProps$" + ai,
    Pt = "__reactContainer$" + ai,
    xl = "__reactEvents$" + ai,
    _m = "__reactListeners$" + ai,
    xm = "__reactHandles$" + ai;
function hn(t) {
    var e = t[ht];
    if (e) return e;
    for (var n = t.parentNode; n;) {
        if ((e = n[Pt] || n[ht])) {
            if (
                ((n = e.alternate),
                    e.child !== null || (n !== null && n.child !== null))
            )
                for (t = Iu(t); t !== null;) {
                    if ((n = t[ht])) return n;
                    t = Iu(t);
                }
            return e;
        }
        (t = n), (n = t.parentNode);
    }
    return null;
}
function mr(t) {
    return (
        (t = t[ht] || t[Pt]),
        !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
    );
}
function Fn(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(C(33));
}
function Zs(t) {
    return t[tr] || null;
}
var wl = [],
    In = -1;
function rn(t) {
    return { current: t };
}
function K(t) {
    0 > In || ((t.current = wl[In]), (wl[In] = null), In--);
}
function V(t, e) {
    In++, (wl[In] = t.current), (t.current = e);
}
var Jt = {},
    xe = rn(Jt),
    ze = rn(!1),
    xn = Jt;
function qn(t, e) {
    var n = t.type.contextTypes;
    if (!n) return Jt;
    var i = t.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === e)
        return i.__reactInternalMemoizedMaskedChildContext;
    var r = {},
        s;
    for (s in n) r[s] = e[s];
    return (
        i &&
        ((t = t.stateNode),
            (t.__reactInternalMemoizedUnmaskedChildContext = e),
            (t.__reactInternalMemoizedMaskedChildContext = r)),
        r
    );
}
function De(t) {
    return (t = t.childContextTypes), t != null;
}
function Ss() {
    K(ze), K(xe);
}
function Au(t, e, n) {
    if (xe.current !== Jt) throw Error(C(168));
    V(xe, e), V(ze, n);
}
function Fd(t, e, n) {
    var i = t.stateNode;
    if (((e = e.childContextTypes), typeof i.getChildContext != "function"))
        return n;
    i = i.getChildContext();
    for (var r in i) if (!(r in e)) throw Error(C(108, rg(t) || "Unknown", r));
    return q({}, n, i);
}
function Ms(t) {
    return (
        (t =
            ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Jt),
        (xn = xe.current),
        V(xe, t),
        V(ze, ze.current),
        !0
    );
}
function Nu(t, e, n) {
    var i = t.stateNode;
    if (!i) throw Error(C(169));
    n
        ? ((t = Fd(t, e, xn)),
            (i.__reactInternalMemoizedMergedChildContext = t),
            K(ze),
            K(xe),
            V(xe, t))
        : K(ze),
        V(ze, n);
}
var wt = null,
    qs = !1,
    To = !1;
function Id(t) {
    wt === null ? (wt = [t]) : wt.push(t);
}
function wm(t) {
    (qs = !0), Id(t);
}
function sn() {
    if (!To && wt !== null) {
        To = !0;
        var t = 0,
            e = j;
        try {
            var n = wt;
            for (j = 1; t < n.length; t++) {
                var i = n[t];
                do i = i(!0);
                while (i !== null);
            }
            (wt = null), (qs = !1);
        } catch (r) {
            throw (wt !== null && (wt = wt.slice(t + 1)), ld(la, sn), r);
        } finally {
            (j = e), (To = !1);
        }
    }
    return null;
}
var An = [],
    Nn = 0,
    Cs = null,
    bs = 0,
    We = [],
    $e = 0,
    wn = null,
    St = 1,
    Mt = "";
function cn(t, e) {
    (An[Nn++] = bs), (An[Nn++] = Cs), (Cs = t), (bs = e);
}
function Ad(t, e, n) {
    (We[$e++] = St), (We[$e++] = Mt), (We[$e++] = wn), (wn = t);
    var i = St;
    t = Mt;
    var r = 32 - rt(i) - 1;
    (i &= ~(1 << r)), (n += 1);
    var s = 32 - rt(e) + r;
    if (30 < s) {
        var o = r - (r % 5);
        (s = (i & ((1 << o) - 1)).toString(32)),
            (i >>= o),
            (r -= o),
            (St = (1 << (32 - rt(e) + r)) | (n << r) | i),
            (Mt = s + t);
    } else (St = (1 << s) | (n << r) | i), (Mt = t);
}
function ma(t) {
    t.return !== null && (cn(t, 1), Ad(t, 1, 0));
}
function ya(t) {
    for (; t === Cs;)
        (Cs = An[--Nn]), (An[Nn] = null), (bs = An[--Nn]), (An[Nn] = null);
    for (; t === wn;)
        (wn = We[--$e]),
            (We[$e] = null),
            (Mt = We[--$e]),
            (We[$e] = null),
            (St = We[--$e]),
            (We[$e] = null);
}
var Ne = null,
    Ae = null,
    Q = !1,
    tt = null;
function Nd(t, e) {
    var n = Ue(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = e),
        (n.return = t),
        (e = t.deletions),
        e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function Bu(t, e) {
    switch (t.tag) {
        case 5:
            var n = t.type;
            return (
                (e =
                    e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
                        ? null
                        : e),
                e !== null
                    ? ((t.stateNode = e), (Ne = t), (Ae = $t(e.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
                e !== null ? ((t.stateNode = e), (Ne = t), (Ae = null), !0) : !1
            );
        case 13:
            return (
                (e = e.nodeType !== 8 ? null : e),
                e !== null
                    ? ((n = wn !== null ? { id: St, overflow: Mt } : null),
                        (t.memoizedState = {
                            dehydrated: e,
                            treeContext: n,
                            retryLane: 1073741824,
                        }),
                        (n = Ue(18, null, null, 0)),
                        (n.stateNode = e),
                        (n.return = t),
                        (t.child = n),
                        (Ne = t),
                        (Ae = null),
                        !0)
                    : !1
            );
        default:
            return !1;
    }
}
function kl(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Sl(t) {
    if (Q) {
        var e = Ae;
        if (e) {
            var n = e;
            if (!Bu(t, e)) {
                if (kl(t)) throw Error(C(418));
                e = $t(n.nextSibling);
                var i = Ne;
                e && Bu(t, e)
                    ? Nd(i, n)
                    : ((t.flags = (t.flags & -4097) | 2), (Q = !1), (Ne = t));
            }
        } else {
            if (kl(t)) throw Error(C(418));
            (t.flags = (t.flags & -4097) | 2), (Q = !1), (Ne = t);
        }
    }
}
function ju(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;)
        t = t.return;
    Ne = t;
}
function zr(t) {
    if (t !== Ne) return !1;
    if (!Q) return ju(t), (Q = !0), !1;
    var e;
    if (
        ((e = t.tag !== 3) &&
            !(e = t.tag !== 5) &&
            ((e = t.type),
                (e = e !== "head" && e !== "body" && !vl(t.type, t.memoizedProps))),
            e && (e = Ae))
    ) {
        if (kl(t)) throw (Bd(), Error(C(418)));
        for (; e;) Nd(t, e), (e = $t(e.nextSibling));
    }
    if ((ju(t), t.tag === 13)) {
        if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
            throw Error(C(317));
        e: {
            for (t = t.nextSibling, e = 0; t;) {
                if (t.nodeType === 8) {
                    var n = t.data;
                    if (n === "/$") {
                        if (e === 0) {
                            Ae = $t(t.nextSibling);
                            break e;
                        }
                        e--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
                }
                t = t.nextSibling;
            }
            Ae = null;
        }
    } else Ae = Ne ? $t(t.stateNode.nextSibling) : null;
    return !0;
}
function Bd() {
    for (var t = Ae; t;) t = $t(t.nextSibling);
}
function Jn() {
    (Ae = Ne = null), (Q = !1);
}
function va(t) {
    tt === null ? (tt = [t]) : tt.push(t);
}
var km = Ot.ReactCurrentBatchConfig;
function mi(t, e, n) {
    if (
        ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(C(309));
                var i = n.stateNode;
            }
            if (!i) throw Error(C(147, t));
            var r = i,
                s = "" + t;
            return e !== null &&
                e.ref !== null &&
                typeof e.ref == "function" &&
                e.ref._stringRef === s
                ? e.ref
                : ((e = function (o) {
                    var l = r.refs;
                    o === null ? delete l[s] : (l[s] = o);
                }),
                    (e._stringRef = s),
                    e);
        }
        if (typeof t != "string") throw Error(C(284));
        if (!n._owner) throw Error(C(290, t));
    }
    return t;
}
function Dr(t, e) {
    throw (
        ((t = Object.prototype.toString.call(e)),
            Error(
                C(
                    31,
                    t === "[object Object]"
                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                        : t
                )
            ))
    );
}
function Hu(t) {
    var e = t._init;
    return e(t._payload);
}
function jd(t) {
    function e(p, g) {
        if (t) {
            var m = p.deletions;
            m === null ? ((p.deletions = [g]), (p.flags |= 16)) : m.push(g);
        }
    }
    function n(p, g) {
        if (!t) return null;
        for (; g !== null;) e(p, g), (g = g.sibling);
        return null;
    }
    function i(p, g) {
        for (p = new Map(); g !== null;)
            g.key !== null ? p.set(g.key, g) : p.set(g.index, g), (g = g.sibling);
        return p;
    }
    function r(p, g) {
        return (p = Qt(p, g)), (p.index = 0), (p.sibling = null), p;
    }
    function s(p, g, m) {
        return (
            (p.index = m),
            t
                ? ((m = p.alternate),
                    m !== null
                        ? ((m = m.index), m < g ? ((p.flags |= 2), g) : m)
                        : ((p.flags |= 2), g))
                : ((p.flags |= 1048576), g)
        );
    }
    function o(p) {
        return t && p.alternate === null && (p.flags |= 2), p;
    }
    function l(p, g, m, x) {
        return g === null || g.tag !== 6
            ? ((g = Io(m, p.mode, x)), (g.return = p), g)
            : ((g = r(g, m)), (g.return = p), g);
    }
    function a(p, g, m, x) {
        var w = m.type;
        return w === Ln
            ? c(p, g, m.props.children, x, m.key)
            : g !== null &&
                (g.elementType === w ||
                    (typeof w == "object" &&
                        w !== null &&
                        w.$$typeof === Dt &&
                        Hu(w) === g.type))
                ? ((x = r(g, m.props)), (x.ref = mi(p, g, m)), (x.return = p), x)
                : ((x = as(m.type, m.key, m.props, null, p.mode, x)),
                    (x.ref = mi(p, g, m)),
                    (x.return = p),
                    x);
    }
    function u(p, g, m, x) {
        return g === null ||
            g.tag !== 4 ||
            g.stateNode.containerInfo !== m.containerInfo ||
            g.stateNode.implementation !== m.implementation
            ? ((g = Ao(m, p.mode, x)), (g.return = p), g)
            : ((g = r(g, m.children || [])), (g.return = p), g);
    }
    function c(p, g, m, x, w) {
        return g === null || g.tag !== 7
            ? ((g = vn(m, p.mode, x, w)), (g.return = p), g)
            : ((g = r(g, m)), (g.return = p), g);
    }
    function f(p, g, m) {
        if ((typeof g == "string" && g !== "") || typeof g == "number")
            return (g = Io("" + g, p.mode, m)), (g.return = p), g;
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case kr:
                    return (
                        (m = as(g.type, g.key, g.props, null, p.mode, m)),
                        (m.ref = mi(p, null, g)),
                        (m.return = p),
                        m
                    );
                case On:
                    return (g = Ao(g, p.mode, m)), (g.return = p), g;
                case Dt:
                    var x = g._init;
                    return f(p, x(g._payload), m);
            }
            if (Ci(g) || fi(g))
                return (g = vn(g, p.mode, m, null)), (g.return = p), g;
            Dr(p, g);
        }
        return null;
    }
    function d(p, g, m, x) {
        var w = g !== null ? g.key : null;
        if ((typeof m == "string" && m !== "") || typeof m == "number")
            return w !== null ? null : l(p, g, "" + m, x);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case kr:
                    return m.key === w ? a(p, g, m, x) : null;
                case On:
                    return m.key === w ? u(p, g, m, x) : null;
                case Dt:
                    return (w = m._init), d(p, g, w(m._payload), x);
            }
            if (Ci(m) || fi(m)) return w !== null ? null : c(p, g, m, x, null);
            Dr(p, m);
        }
        return null;
    }
    function h(p, g, m, x, w) {
        if ((typeof x == "string" && x !== "") || typeof x == "number")
            return (p = p.get(m) || null), l(g, p, "" + x, w);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
                case kr:
                    return (p = p.get(x.key === null ? m : x.key) || null), a(g, p, x, w);
                case On:
                    return (p = p.get(x.key === null ? m : x.key) || null), u(g, p, x, w);
                case Dt:
                    var k = x._init;
                    return h(p, g, m, k(x._payload), w);
            }
            if (Ci(x) || fi(x)) return (p = p.get(m) || null), c(g, p, x, w, null);
            Dr(g, x);
        }
        return null;
    }
    function y(p, g, m, x) {
        for (
            var w = null, k = null, S = g, M = (g = 0), T = null;
            S !== null && M < m.length;
            M++
        ) {
            S.index > M ? ((T = S), (S = null)) : (T = S.sibling);
            var E = d(p, S, m[M], x);
            if (E === null) {
                S === null && (S = T);
                break;
            }
            t && S && E.alternate === null && e(p, S),
                (g = s(E, g, M)),
                k === null ? (w = E) : (k.sibling = E),
                (k = E),
                (S = T);
        }
        if (M === m.length) return n(p, S), Q && cn(p, M), w;
        if (S === null) {
            for (; M < m.length; M++)
                (S = f(p, m[M], x)),
                    S !== null &&
                    ((g = s(S, g, M)), k === null ? (w = S) : (k.sibling = S), (k = S));
            return Q && cn(p, M), w;
        }
        for (S = i(p, S); M < m.length; M++)
            (T = h(S, p, M, m[M], x)),
                T !== null &&
                (t && T.alternate !== null && S.delete(T.key === null ? M : T.key),
                    (g = s(T, g, M)),
                    k === null ? (w = T) : (k.sibling = T),
                    (k = T));
        return (
            t &&
            S.forEach(function (O) {
                return e(p, O);
            }),
            Q && cn(p, M),
            w
        );
    }
    function v(p, g, m, x) {
        var w = fi(m);
        if (typeof w != "function") throw Error(C(150));
        if (((m = w.call(m)), m == null)) throw Error(C(151));
        for (
            var k = (w = null), S = g, M = (g = 0), T = null, E = m.next();
            S !== null && !E.done;
            M++, E = m.next()
        ) {
            S.index > M ? ((T = S), (S = null)) : (T = S.sibling);
            var O = d(p, S, E.value, x);
            if (O === null) {
                S === null && (S = T);
                break;
            }
            t && S && O.alternate === null && e(p, S),
                (g = s(O, g, M)),
                k === null ? (w = O) : (k.sibling = O),
                (k = O),
                (S = T);
        }
        if (E.done) return n(p, S), Q && cn(p, M), w;
        if (S === null) {
            for (; !E.done; M++, E = m.next())
                (E = f(p, E.value, x)),
                    E !== null &&
                    ((g = s(E, g, M)), k === null ? (w = E) : (k.sibling = E), (k = E));
            return Q && cn(p, M), w;
        }
        for (S = i(p, S); !E.done; M++, E = m.next())
            (E = h(S, p, M, E.value, x)),
                E !== null &&
                (t && E.alternate !== null && S.delete(E.key === null ? M : E.key),
                    (g = s(E, g, M)),
                    k === null ? (w = E) : (k.sibling = E),
                    (k = E));
        return (
            t &&
            S.forEach(function (R) {
                return e(p, R);
            }),
            Q && cn(p, M),
            w
        );
    }
    function _(p, g, m, x) {
        if (
            (typeof m == "object" &&
                m !== null &&
                m.type === Ln &&
                m.key === null &&
                (m = m.props.children),
                typeof m == "object" && m !== null)
        ) {
            switch (m.$$typeof) {
                case kr:
                    e: {
                        for (var w = m.key, k = g; k !== null;) {
                            if (k.key === w) {
                                if (((w = m.type), w === Ln)) {
                                    if (k.tag === 7) {
                                        n(p, k.sibling),
                                            (g = r(k, m.props.children)),
                                            (g.return = p),
                                            (p = g);
                                        break e;
                                    }
                                } else if (
                                    k.elementType === w ||
                                    (typeof w == "object" &&
                                        w !== null &&
                                        w.$$typeof === Dt &&
                                        Hu(w) === k.type)
                                ) {
                                    n(p, k.sibling),
                                        (g = r(k, m.props)),
                                        (g.ref = mi(p, k, m)),
                                        (g.return = p),
                                        (p = g);
                                    break e;
                                }
                                n(p, k);
                                break;
                            } else e(p, k);
                            k = k.sibling;
                        }
                        m.type === Ln
                            ? ((g = vn(m.props.children, p.mode, x, m.key)),
                                (g.return = p),
                                (p = g))
                            : ((x = as(m.type, m.key, m.props, null, p.mode, x)),
                                (x.ref = mi(p, g, m)),
                                (x.return = p),
                                (p = x));
                    }
                    return o(p);
                case On:
                    e: {
                        for (k = m.key; g !== null;) {
                            if (g.key === k)
                                if (
                                    g.tag === 4 &&
                                    g.stateNode.containerInfo === m.containerInfo &&
                                    g.stateNode.implementation === m.implementation
                                ) {
                                    n(p, g.sibling),
                                        (g = r(g, m.children || [])),
                                        (g.return = p),
                                        (p = g);
                                    break e;
                                } else {
                                    n(p, g);
                                    break;
                                }
                            else e(p, g);
                            g = g.sibling;
                        }
                        (g = Ao(m, p.mode, x)), (g.return = p), (p = g);
                    }
                    return o(p);
                case Dt:
                    return (k = m._init), _(p, g, k(m._payload), x);
            }
            if (Ci(m)) return y(p, g, m, x);
            if (fi(m)) return v(p, g, m, x);
            Dr(p, m);
        }
        return (typeof m == "string" && m !== "") || typeof m == "number"
            ? ((m = "" + m),
                g !== null && g.tag === 6
                    ? (n(p, g.sibling), (g = r(g, m)), (g.return = p), (p = g))
                    : (n(p, g), (g = Io(m, p.mode, x)), (g.return = p), (p = g)),
                o(p))
            : n(p, g);
    }
    return _;
}
var ei = jd(!0),
    Hd = jd(!1),
    Ps = rn(null),
    Es = null,
    Bn = null,
    _a = null;
function xa() {
    _a = Bn = Es = null;
}
function wa(t) {
    var e = Ps.current;
    K(Ps), (t._currentValue = e);
}
function Ml(t, e, n) {
    for (; t !== null;) {
        var i = t.alternate;
        if (
            ((t.childLanes & e) !== e
                ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
                : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
                t === n)
        )
            break;
        t = t.return;
    }
}
function Kn(t, e) {
    (Es = t),
        (_a = Bn = null),
        (t = t.dependencies),
        t !== null &&
        t.firstContext !== null &&
        (t.lanes & e && (Le = !0), (t.firstContext = null));
}
function Qe(t) {
    var e = t._currentValue;
    if (_a !== t)
        if (((t = { context: t, memoizedValue: e, next: null }), Bn === null)) {
            if (Es === null) throw Error(C(308));
            (Bn = t), (Es.dependencies = { lanes: 0, firstContext: t });
        } else Bn = Bn.next = t;
    return e;
}
var pn = null;
function ka(t) {
    pn === null ? (pn = [t]) : pn.push(t);
}
function Vd(t, e, n, i) {
    var r = e.interleaved;
    return (
        r === null ? ((n.next = n), ka(e)) : ((n.next = r.next), (r.next = n)),
        (e.interleaved = n),
        Et(t, i)
    );
}
function Et(t, e) {
    t.lanes |= e;
    var n = t.alternate;
    for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null;)
        (t.childLanes |= e),
            (n = t.alternate),
            n !== null && (n.childLanes |= e),
            (n = t),
            (t = t.return);
    return n.tag === 3 ? n.stateNode : null;
}
var Rt = !1;
function Sa(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function Wd(t, e) {
    (t = t.updateQueue),
        e.updateQueue === t &&
        (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            effects: t.effects,
        });
}
function Ct(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function Ut(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), I & 2)) {
        var r = i.pending;
        return (
            r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
            (i.pending = e),
            Et(t, n)
        );
    }
    return (
        (r = i.interleaved),
        r === null ? ((e.next = e), ka(i)) : ((e.next = r.next), (r.next = e)),
        (i.interleaved = e),
        Et(t, n)
    );
}
function ns(t, e, n) {
    if (
        ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
    ) {
        var i = e.lanes;
        (i &= t.pendingLanes), (n |= i), (e.lanes = n), aa(t, n);
    }
}
function Vu(t, e) {
    var n = t.updateQueue,
        i = t.alternate;
    if (i !== null && ((i = i.updateQueue), n === i)) {
        var r = null,
            s = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                s === null ? (r = s = o) : (s = s.next = o), (n = n.next);
            } while (n !== null);
            s === null ? (r = s = e) : (s = s.next = e);
        } else r = s = e;
        (n = {
            baseState: i.baseState,
            firstBaseUpdate: r,
            lastBaseUpdate: s,
            shared: i.shared,
            effects: i.effects,
        }),
            (t.updateQueue = n);
        return;
    }
    (t = n.lastBaseUpdate),
        t === null ? (n.firstBaseUpdate = e) : (t.next = e),
        (n.lastBaseUpdate = e);
}
function Ts(t, e, n, i) {
    var r = t.updateQueue;
    Rt = !1;
    var s = r.firstBaseUpdate,
        o = r.lastBaseUpdate,
        l = r.shared.pending;
    if (l !== null) {
        r.shared.pending = null;
        var a = l,
            u = a.next;
        (a.next = null), o === null ? (s = u) : (o.next = u), (o = a);
        var c = t.alternate;
        c !== null &&
            ((c = c.updateQueue),
                (l = c.lastBaseUpdate),
                l !== o &&
                (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
                    (c.lastBaseUpdate = a)));
    }
    if (s !== null) {
        var f = r.baseState;
        (o = 0), (c = u = a = null), (l = s);
        do {
            var d = l.lane,
                h = l.eventTime;
            if ((i & d) === d) {
                c !== null &&
                    (c = c.next =
                    {
                        eventTime: h,
                        lane: 0,
                        tag: l.tag,
                        payload: l.payload,
                        callback: l.callback,
                        next: null,
                    });
                e: {
                    var y = t,
                        v = l;
                    switch (((d = e), (h = n), v.tag)) {
                        case 1:
                            if (((y = v.payload), typeof y == "function")) {
                                f = y.call(h, f, d);
                                break e;
                            }
                            f = y;
                            break e;
                        case 3:
                            y.flags = (y.flags & -65537) | 128;
                        case 0:
                            if (
                                ((y = v.payload),
                                    (d = typeof y == "function" ? y.call(h, f, d) : y),
                                    d == null)
                            )
                                break e;
                            f = q({}, f, d);
                            break e;
                        case 2:
                            Rt = !0;
                    }
                }
                l.callback !== null &&
                    l.lane !== 0 &&
                    ((t.flags |= 64),
                        (d = r.effects),
                        d === null ? (r.effects = [l]) : d.push(l));
            } else
                (h = {
                    eventTime: h,
                    lane: d,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null,
                }),
                    c === null ? ((u = c = h), (a = f)) : (c = c.next = h),
                    (o |= d);
            if (((l = l.next), l === null)) {
                if (((l = r.shared.pending), l === null)) break;
                (d = l),
                    (l = d.next),
                    (d.next = null),
                    (r.lastBaseUpdate = d),
                    (r.shared.pending = null);
            }
        } while (!0);
        if (
            (c === null && (a = f),
                (r.baseState = a),
                (r.firstBaseUpdate = u),
                (r.lastBaseUpdate = c),
                (e = r.shared.interleaved),
                e !== null)
        ) {
            r = e;
            do (o |= r.lane), (r = r.next);
            while (r !== e);
        } else s === null && (r.shared.lanes = 0);
        (Sn |= o), (t.lanes = o), (t.memoizedState = f);
    }
}
function Wu(t, e, n) {
    if (((t = e.effects), (e.effects = null), t !== null))
        for (e = 0; e < t.length; e++) {
            var i = t[e],
                r = i.callback;
            if (r !== null) {
                if (((i.callback = null), (i = n), typeof r != "function"))
                    throw Error(C(191, r));
                r.call(i);
            }
        }
}
var yr = {},
    gt = rn(yr),
    nr = rn(yr),
    ir = rn(yr);
function gn(t) {
    if (t === yr) throw Error(C(174));
    return t;
}
function Ma(t, e) {
    switch ((V(ir, e), V(nr, t), V(gt, yr), (t = e.nodeType), t)) {
        case 9:
        case 11:
            e = (e = e.documentElement) ? e.namespaceURI : rl(null, "");
            break;
        default:
            (t = t === 8 ? e.parentNode : e),
                (e = t.namespaceURI || null),
                (t = t.tagName),
                (e = rl(e, t));
    }
    K(gt), V(gt, e);
}
function ti() {
    K(gt), K(nr), K(ir);
}
function $d(t) {
    gn(ir.current);
    var e = gn(gt.current),
        n = rl(e, t.type);
    e !== n && (V(nr, t), V(gt, n));
}
function Ca(t) {
    nr.current === t && (K(gt), K(nr));
}
var G = rn(0);
function Os(t) {
    for (var e = t; e !== null;) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
            )
                return e;
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128) return e;
        } else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
        }
        if (e === t) break;
        for (; e.sibling === null;) {
            if (e.return === null || e.return === t) return null;
            e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
}
var Oo = [];
function ba() {
    for (var t = 0; t < Oo.length; t++)
        Oo[t]._workInProgressVersionPrimary = null;
    Oo.length = 0;
}
var is = Ot.ReactCurrentDispatcher,
    Lo = Ot.ReactCurrentBatchConfig,
    kn = 0,
    Z = null,
    se = null,
    ae = null,
    Ls = !1,
    Ai = !1,
    rr = 0,
    Sm = 0;
function pe() {
    throw Error(C(321));
}
function Pa(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
        if (!ot(t[n], e[n])) return !1;
    return !0;
}
function Ea(t, e, n, i, r, s) {
    if (
        ((kn = s),
            (Z = e),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.lanes = 0),
            (is.current = t === null || t.memoizedState === null ? Pm : Em),
            (t = n(i, r)),
            Ai)
    ) {
        s = 0;
        do {
            if (((Ai = !1), (rr = 0), 25 <= s)) throw Error(C(301));
            (s += 1),
                (ae = se = null),
                (e.updateQueue = null),
                (is.current = Tm),
                (t = n(i, r));
        } while (Ai);
    }
    if (
        ((is.current = zs),
            (e = se !== null && se.next !== null),
            (kn = 0),
            (ae = se = Z = null),
            (Ls = !1),
            e)
    )
        throw Error(C(300));
    return t;
}
function Ta() {
    var t = rr !== 0;
    return (rr = 0), t;
}
function ft() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return ae === null ? (Z.memoizedState = ae = t) : (ae = ae.next = t), ae;
}
function Xe() {
    if (se === null) {
        var t = Z.alternate;
        t = t !== null ? t.memoizedState : null;
    } else t = se.next;
    var e = ae === null ? Z.memoizedState : ae.next;
    if (e !== null) (ae = e), (se = t);
    else {
        if (t === null) throw Error(C(310));
        (se = t),
            (t = {
                memoizedState: se.memoizedState,
                baseState: se.baseState,
                baseQueue: se.baseQueue,
                queue: se.queue,
                next: null,
            }),
            ae === null ? (Z.memoizedState = ae = t) : (ae = ae.next = t);
    }
    return ae;
}
function sr(t, e) {
    return typeof e == "function" ? e(t) : e;
}
function zo(t) {
    var e = Xe(),
        n = e.queue;
    if (n === null) throw Error(C(311));
    n.lastRenderedReducer = t;
    var i = se,
        r = i.baseQueue,
        s = n.pending;
    if (s !== null) {
        if (r !== null) {
            var o = r.next;
            (r.next = s.next), (s.next = o);
        }
        (i.baseQueue = r = s), (n.pending = null);
    }
    if (r !== null) {
        (s = r.next), (i = i.baseState);
        var l = (o = null),
            a = null,
            u = s;
        do {
            var c = u.lane;
            if ((kn & c) === c)
                a !== null &&
                    (a = a.next =
                    {
                        lane: 0,
                        action: u.action,
                        hasEagerState: u.hasEagerState,
                        eagerState: u.eagerState,
                        next: null,
                    }),
                    (i = u.hasEagerState ? u.eagerState : t(i, u.action));
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                };
                a === null ? ((l = a = f), (o = i)) : (a = a.next = f),
                    (Z.lanes |= c),
                    (Sn |= c);
            }
            u = u.next;
        } while (u !== null && u !== s);
        a === null ? (o = i) : (a.next = l),
            ot(i, e.memoizedState) || (Le = !0),
            (e.memoizedState = i),
            (e.baseState = o),
            (e.baseQueue = a),
            (n.lastRenderedState = i);
    }
    if (((t = n.interleaved), t !== null)) {
        r = t;
        do (s = r.lane), (Z.lanes |= s), (Sn |= s), (r = r.next);
        while (r !== t);
    } else r === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch];
}
function Do(t) {
    var e = Xe(),
        n = e.queue;
    if (n === null) throw Error(C(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch,
        r = n.pending,
        s = e.memoizedState;
    if (r !== null) {
        n.pending = null;
        var o = (r = r.next);
        do (s = t(s, o.action)), (o = o.next);
        while (o !== r);
        ot(s, e.memoizedState) || (Le = !0),
            (e.memoizedState = s),
            e.baseQueue === null && (e.baseState = s),
            (n.lastRenderedState = s);
    }
    return [s, i];
}
function Ud() { }
function Yd(t, e) {
    var n = Z,
        i = Xe(),
        r = e(),
        s = !ot(i.memoizedState, r);
    if (
        (s && ((i.memoizedState = r), (Le = !0)),
            (i = i.queue),
            Oa(Xd.bind(null, n, i, t), [t]),
            i.getSnapshot !== e || s || (ae !== null && ae.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
                or(9, Qd.bind(null, n, i, r, e), void 0, null),
                ue === null)
        )
            throw Error(C(349));
        kn & 30 || Kd(n, e, r);
    }
    return r;
}
function Kd(t, e, n) {
    (t.flags |= 16384),
        (t = { getSnapshot: e, value: n }),
        (e = Z.updateQueue),
        e === null
            ? ((e = { lastEffect: null, stores: null }),
                (Z.updateQueue = e),
                (e.stores = [t]))
            : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function Qd(t, e, n, i) {
    (e.value = n), (e.getSnapshot = i), Gd(e) && Zd(t);
}
function Xd(t, e, n) {
    return n(function () {
        Gd(e) && Zd(t);
    });
}
function Gd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !ot(t, n);
    } catch {
        return !0;
    }
}
function Zd(t) {
    var e = Et(t, 1);
    e !== null && st(e, t, 1, -1);
}
function $u(t) {
    var e = ft();
    return (
        typeof t == "function" && (t = t()),
        (e.memoizedState = e.baseState = t),
        (t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: sr,
            lastRenderedState: t,
        }),
        (e.queue = t),
        (t = t.dispatch = bm.bind(null, Z, t)),
        [e.memoizedState, t]
    );
}
function or(t, e, n, i) {
    return (
        (t = { tag: t, create: e, destroy: n, deps: i, next: null }),
        (e = Z.updateQueue),
        e === null
            ? ((e = { lastEffect: null, stores: null }),
                (Z.updateQueue = e),
                (e.lastEffect = t.next = t))
            : ((n = e.lastEffect),
                n === null
                    ? (e.lastEffect = t.next = t)
                    : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t))),
        t
    );
}
function qd() {
    return Xe().memoizedState;
}
function rs(t, e, n, i) {
    var r = ft();
    (Z.flags |= t),
        (r.memoizedState = or(1 | e, n, void 0, i === void 0 ? null : i));
}
function Js(t, e, n, i) {
    var r = Xe();
    i = i === void 0 ? null : i;
    var s = void 0;
    if (se !== null) {
        var o = se.memoizedState;
        if (((s = o.destroy), i !== null && Pa(i, o.deps))) {
            r.memoizedState = or(e, n, s, i);
            return;
        }
    }
    (Z.flags |= t), (r.memoizedState = or(1 | e, n, s, i));
}
function Uu(t, e) {
    return rs(8390656, 8, t, e);
}
function Oa(t, e) {
    return Js(2048, 8, t, e);
}
function Jd(t, e) {
    return Js(4, 2, t, e);
}
function eh(t, e) {
    return Js(4, 4, t, e);
}
function th(t, e) {
    if (typeof e == "function")
        return (
            (t = t()),
            e(t),
            function () {
                e(null);
            }
        );
    if (e != null)
        return (
            (t = t()),
            (e.current = t),
            function () {
                e.current = null;
            }
        );
}
function nh(t, e, n) {
    return (
        (n = n != null ? n.concat([t]) : null), Js(4, 4, th.bind(null, e, t), n)
    );
}
function La() { }
function ih(t, e) {
    var n = Xe();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return i !== null && e !== null && Pa(e, i[1])
        ? i[0]
        : ((n.memoizedState = [t, e]), t);
}
function rh(t, e) {
    var n = Xe();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return i !== null && e !== null && Pa(e, i[1])
        ? i[0]
        : ((t = t()), (n.memoizedState = [t, e]), t);
}
function sh(t, e, n) {
    return kn & 21
        ? (ot(n, e) || ((n = cd()), (Z.lanes |= n), (Sn |= n), (t.baseState = !0)),
            e)
        : (t.baseState && ((t.baseState = !1), (Le = !0)), (t.memoizedState = n));
}
function Mm(t, e) {
    var n = j;
    (j = n !== 0 && 4 > n ? n : 4), t(!0);
    var i = Lo.transition;
    Lo.transition = {};
    try {
        t(!1), e();
    } finally {
        (j = n), (Lo.transition = i);
    }
}
function oh() {
    return Xe().memoizedState;
}
function Cm(t, e, n) {
    var i = Kt(t);
    if (
        ((n = {
            lane: i,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
            lh(t))
    )
        ah(e, n);
    else if (((n = Vd(t, e, n, i)), n !== null)) {
        var r = Me();
        st(n, t, i, r), uh(n, e, i);
    }
}
function bm(t, e, n) {
    var i = Kt(t),
        r = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (lh(t)) ah(e, r);
    else {
        var s = t.alternate;
        if (
            t.lanes === 0 &&
            (s === null || s.lanes === 0) &&
            ((s = e.lastRenderedReducer), s !== null)
        )
            try {
                var o = e.lastRenderedState,
                    l = s(o, n);
                if (((r.hasEagerState = !0), (r.eagerState = l), ot(l, o))) {
                    var a = e.interleaved;
                    a === null
                        ? ((r.next = r), ka(e))
                        : ((r.next = a.next), (a.next = r)),
                        (e.interleaved = r);
                    return;
                }
            } catch {
            } finally {
            }
        (n = Vd(t, e, r, i)),
            n !== null && ((r = Me()), st(n, t, i, r), uh(n, e, i));
    }
}
function lh(t) {
    var e = t.alternate;
    return t === Z || (e !== null && e === Z);
}
function ah(t, e) {
    Ai = Ls = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (t.pending = e);
}
function uh(t, e, n) {
    if (n & 4194240) {
        var i = e.lanes;
        (i &= t.pendingLanes), (n |= i), (e.lanes = n), aa(t, n);
    }
}
var zs = {
    readContext: Qe,
    useCallback: pe,
    useContext: pe,
    useEffect: pe,
    useImperativeHandle: pe,
    useInsertionEffect: pe,
    useLayoutEffect: pe,
    useMemo: pe,
    useReducer: pe,
    useRef: pe,
    useState: pe,
    useDebugValue: pe,
    useDeferredValue: pe,
    useTransition: pe,
    useMutableSource: pe,
    useSyncExternalStore: pe,
    useId: pe,
    unstable_isNewReconciler: !1,
},
    Pm = {
        readContext: Qe,
        useCallback: function (t, e) {
            return (ft().memoizedState = [t, e === void 0 ? null : e]), t;
        },
        useContext: Qe,
        useEffect: Uu,
        useImperativeHandle: function (t, e, n) {
            return (
                (n = n != null ? n.concat([t]) : null),
                rs(4194308, 4, th.bind(null, e, t), n)
            );
        },
        useLayoutEffect: function (t, e) {
            return rs(4194308, 4, t, e);
        },
        useInsertionEffect: function (t, e) {
            return rs(4, 2, t, e);
        },
        useMemo: function (t, e) {
            var n = ft();
            return (
                (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
            );
        },
        useReducer: function (t, e, n) {
            var i = ft();
            return (
                (e = n !== void 0 ? n(e) : e),
                (i.memoizedState = i.baseState = e),
                (t = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: e,
                }),
                (i.queue = t),
                (t = t.dispatch = Cm.bind(null, Z, t)),
                [i.memoizedState, t]
            );
        },
        useRef: function (t) {
            var e = ft();
            return (t = { current: t }), (e.memoizedState = t);
        },
        useState: $u,
        useDebugValue: La,
        useDeferredValue: function (t) {
            return (ft().memoizedState = t);
        },
        useTransition: function () {
            var t = $u(!1),
                e = t[0];
            return (t = Mm.bind(null, t[1])), (ft().memoizedState = t), [e, t];
        },
        useMutableSource: function () { },
        useSyncExternalStore: function (t, e, n) {
            var i = Z,
                r = ft();
            if (Q) {
                if (n === void 0) throw Error(C(407));
                n = n();
            } else {
                if (((n = e()), ue === null)) throw Error(C(349));
                kn & 30 || Kd(i, e, n);
            }
            r.memoizedState = n;
            var s = { value: n, getSnapshot: e };
            return (
                (r.queue = s),
                Uu(Xd.bind(null, i, s, t), [t]),
                (i.flags |= 2048),
                or(9, Qd.bind(null, i, s, n, e), void 0, null),
                n
            );
        },
        useId: function () {
            var t = ft(),
                e = ue.identifierPrefix;
            if (Q) {
                var n = Mt,
                    i = St;
                (n = (i & ~(1 << (32 - rt(i) - 1))).toString(32) + n),
                    (e = ":" + e + "R" + n),
                    (n = rr++),
                    0 < n && (e += "H" + n.toString(32)),
                    (e += ":");
            } else (n = Sm++), (e = ":" + e + "r" + n.toString(32) + ":");
            return (t.memoizedState = e);
        },
        unstable_isNewReconciler: !1,
    },
    Em = {
        readContext: Qe,
        useCallback: ih,
        useContext: Qe,
        useEffect: Oa,
        useImperativeHandle: nh,
        useInsertionEffect: Jd,
        useLayoutEffect: eh,
        useMemo: rh,
        useReducer: zo,
        useRef: qd,
        useState: function () {
            return zo(sr);
        },
        useDebugValue: La,
        useDeferredValue: function (t) {
            var e = Xe();
            return sh(e, se.memoizedState, t);
        },
        useTransition: function () {
            var t = zo(sr)[0],
                e = Xe().memoizedState;
            return [t, e];
        },
        useMutableSource: Ud,
        useSyncExternalStore: Yd,
        useId: oh,
        unstable_isNewReconciler: !1,
    },
    Tm = {
        readContext: Qe,
        useCallback: ih,
        useContext: Qe,
        useEffect: Oa,
        useImperativeHandle: nh,
        useInsertionEffect: Jd,
        useLayoutEffect: eh,
        useMemo: rh,
        useReducer: Do,
        useRef: qd,
        useState: function () {
            return Do(sr);
        },
        useDebugValue: La,
        useDeferredValue: function (t) {
            var e = Xe();
            return se === null ? (e.memoizedState = t) : sh(e, se.memoizedState, t);
        },
        useTransition: function () {
            var t = Do(sr)[0],
                e = Xe().memoizedState;
            return [t, e];
        },
        useMutableSource: Ud,
        useSyncExternalStore: Yd,
        useId: oh,
        unstable_isNewReconciler: !1,
    };
function Je(t, e) {
    if (t && t.defaultProps) {
        (e = q({}, e)), (t = t.defaultProps);
        for (var n in t) e[n] === void 0 && (e[n] = t[n]);
        return e;
    }
    return e;
}
function Cl(t, e, n, i) {
    (e = t.memoizedState),
        (n = n(i, e)),
        (n = n == null ? e : q({}, e, n)),
        (t.memoizedState = n),
        t.lanes === 0 && (t.updateQueue.baseState = n);
}
var eo = {
    isMounted: function (t) {
        return (t = t._reactInternals) ? Pn(t) === t : !1;
    },
    enqueueSetState: function (t, e, n) {
        t = t._reactInternals;
        var i = Me(),
            r = Kt(t),
            s = Ct(i, r);
        (s.payload = e),
            n != null && (s.callback = n),
            (e = Ut(t, s, r)),
            e !== null && (st(e, t, r, i), ns(e, t, r));
    },
    enqueueReplaceState: function (t, e, n) {
        t = t._reactInternals;
        var i = Me(),
            r = Kt(t),
            s = Ct(i, r);
        (s.tag = 1),
            (s.payload = e),
            n != null && (s.callback = n),
            (e = Ut(t, s, r)),
            e !== null && (st(e, t, r, i), ns(e, t, r));
    },
    enqueueForceUpdate: function (t, e) {
        t = t._reactInternals;
        var n = Me(),
            i = Kt(t),
            r = Ct(n, i);
        (r.tag = 2),
            e != null && (r.callback = e),
            (e = Ut(t, r, i)),
            e !== null && (st(e, t, i, n), ns(e, t, i));
    },
};
function Yu(t, e, n, i, r, s, o) {
    return (
        (t = t.stateNode),
        typeof t.shouldComponentUpdate == "function"
            ? t.shouldComponentUpdate(i, s, o)
            : e.prototype && e.prototype.isPureReactComponent
                ? !qi(n, i) || !qi(r, s)
                : !0
    );
}
function ch(t, e, n) {
    var i = !1,
        r = Jt,
        s = e.contextType;
    return (
        typeof s == "object" && s !== null
            ? (s = Qe(s))
            : ((r = De(e) ? xn : xe.current),
                (i = e.contextTypes),
                (s = (i = i != null) ? qn(t, r) : Jt)),
        (e = new e(n, s)),
        (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
        (e.updater = eo),
        (t.stateNode = e),
        (e._reactInternals = t),
        i &&
        ((t = t.stateNode),
            (t.__reactInternalMemoizedUnmaskedChildContext = r),
            (t.__reactInternalMemoizedMaskedChildContext = s)),
        e
    );
}
function Ku(t, e, n, i) {
    (t = e.state),
        typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, i),
        typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, i),
        e.state !== t && eo.enqueueReplaceState(e, e.state, null);
}
function bl(t, e, n, i) {
    var r = t.stateNode;
    (r.props = n), (r.state = t.memoizedState), (r.refs = {}), Sa(t);
    var s = e.contextType;
    typeof s == "object" && s !== null
        ? (r.context = Qe(s))
        : ((s = De(e) ? xn : xe.current), (r.context = qn(t, s))),
        (r.state = t.memoizedState),
        (s = e.getDerivedStateFromProps),
        typeof s == "function" && (Cl(t, e, s, n), (r.state = t.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
        typeof r.getSnapshotBeforeUpdate == "function" ||
        (typeof r.UNSAFE_componentWillMount != "function" &&
            typeof r.componentWillMount != "function") ||
        ((e = r.state),
            typeof r.componentWillMount == "function" && r.componentWillMount(),
            typeof r.UNSAFE_componentWillMount == "function" &&
            r.UNSAFE_componentWillMount(),
            e !== r.state && eo.enqueueReplaceState(r, r.state, null),
            Ts(t, n, r, i),
            (r.state = t.memoizedState)),
        typeof r.componentDidMount == "function" && (t.flags |= 4194308);
}
function ni(t, e) {
    try {
        var n = "",
            i = e;
        do (n += ig(i)), (i = i.return);
        while (i);
        var r = n;
    } catch (s) {
        r =
            `
Error generating stack: ` +
            s.message +
            `
` +
            s.stack;
    }
    return { value: t, source: e, stack: r, digest: null };
}
function Ro(t, e, n) {
    return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function Pl(t, e) {
    try {
        console.error(e.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var Om = typeof WeakMap == "function" ? WeakMap : Map;
function fh(t, e, n) {
    (n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var i = e.value;
    return (
        (n.callback = function () {
            Rs || ((Rs = !0), (Al = i)), Pl(t, e);
        }),
        n
    );
}
function dh(t, e, n) {
    (n = Ct(-1, n)), (n.tag = 3);
    var i = t.type.getDerivedStateFromError;
    if (typeof i == "function") {
        var r = e.value;
        (n.payload = function () {
            return i(r);
        }),
            (n.callback = function () {
                Pl(t, e);
            });
    }
    var s = t.stateNode;
    return (
        s !== null &&
        typeof s.componentDidCatch == "function" &&
        (n.callback = function () {
            Pl(t, e),
                typeof i != "function" &&
                (Yt === null ? (Yt = new Set([this])) : Yt.add(this));
            var o = e.stack;
            this.componentDidCatch(e.value, {
                componentStack: o !== null ? o : "",
            });
        }),
        n
    );
}
function Qu(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
        i = t.pingCache = new Om();
        var r = new Set();
        i.set(e, r);
    } else (r = i.get(e)), r === void 0 && ((r = new Set()), i.set(e, r));
    r.has(n) || (r.add(n), (t = $m.bind(null, t, e, n)), e.then(t, t));
}
function Xu(t) {
    do {
        var e;
        if (
            ((e = t.tag === 13) &&
                ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
                e)
        )
            return t;
        t = t.return;
    } while (t !== null);
    return null;
}
function Gu(t, e, n, i, r) {
    return t.mode & 1
        ? ((t.flags |= 65536), (t.lanes = r), t)
        : (t === e
            ? (t.flags |= 65536)
            : ((t.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                (n.alternate === null
                    ? (n.tag = 17)
                    : ((e = Ct(-1, 1)), (e.tag = 2), Ut(n, e, 1))),
                (n.lanes |= 1)),
            t);
}
var Lm = Ot.ReactCurrentOwner,
    Le = !1;
function Se(t, e, n, i) {
    e.child = t === null ? Hd(e, null, n, i) : ei(e, t.child, n, i);
}
function Zu(t, e, n, i, r) {
    n = n.render;
    var s = e.ref;
    return (
        Kn(e, r),
        (i = Ea(t, e, n, i, s, r)),
        (n = Ta()),
        t !== null && !Le
            ? ((e.updateQueue = t.updateQueue),
                (e.flags &= -2053),
                (t.lanes &= ~r),
                Tt(t, e, r))
            : (Q && n && ma(e), (e.flags |= 1), Se(t, e, i, r), e.child)
    );
}
function qu(t, e, n, i, r) {
    if (t === null) {
        var s = n.type;
        return typeof s == "function" &&
            !Ba(s) &&
            s.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((e.tag = 15), (e.type = s), hh(t, e, s, i, r))
            : ((t = as(n.type, null, i, e, e.mode, r)),
                (t.ref = e.ref),
                (t.return = e),
                (e.child = t));
    }
    if (((s = t.child), !(t.lanes & r))) {
        var o = s.memoizedProps;
        if (
            ((n = n.compare), (n = n !== null ? n : qi), n(o, i) && t.ref === e.ref)
        )
            return Tt(t, e, r);
    }
    return (
        (e.flags |= 1),
        (t = Qt(s, i)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t)
    );
}
function hh(t, e, n, i, r) {
    if (t !== null) {
        var s = t.memoizedProps;
        if (qi(s, i) && t.ref === e.ref)
            if (((Le = !1), (e.pendingProps = i = s), (t.lanes & r) !== 0))
                t.flags & 131072 && (Le = !0);
            else return (e.lanes = t.lanes), Tt(t, e, r);
    }
    return El(t, e, n, i, r);
}
function ph(t, e, n) {
    var i = e.pendingProps,
        r = i.children,
        s = t !== null ? t.memoizedState : null;
    if (i.mode === "hidden")
        if (!(e.mode & 1))
            (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                V(Hn, Ie),
                (Ie |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (t = s !== null ? s.baseLanes | n : n),
                    (e.lanes = e.childLanes = 1073741824),
                    (e.memoizedState = {
                        baseLanes: t,
                        cachePool: null,
                        transitions: null,
                    }),
                    (e.updateQueue = null),
                    V(Hn, Ie),
                    (Ie |= t),
                    null
                );
            (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (i = s !== null ? s.baseLanes : n),
                V(Hn, Ie),
                (Ie |= i);
        }
    else
        s !== null ? ((i = s.baseLanes | n), (e.memoizedState = null)) : (i = n),
            V(Hn, Ie),
            (Ie |= i);
    return Se(t, e, r, n), e.child;
}
function gh(t, e) {
    var n = e.ref;
    ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
        ((e.flags |= 512), (e.flags |= 2097152));
}
function El(t, e, n, i, r) {
    var s = De(n) ? xn : xe.current;
    return (
        (s = qn(e, s)),
        Kn(e, r),
        (n = Ea(t, e, n, i, s, r)),
        (i = Ta()),
        t !== null && !Le
            ? ((e.updateQueue = t.updateQueue),
                (e.flags &= -2053),
                (t.lanes &= ~r),
                Tt(t, e, r))
            : (Q && i && ma(e), (e.flags |= 1), Se(t, e, n, r), e.child)
    );
}
function Ju(t, e, n, i, r) {
    if (De(n)) {
        var s = !0;
        Ms(e);
    } else s = !1;
    if ((Kn(e, r), e.stateNode === null))
        ss(t, e), ch(e, n, i), bl(e, n, i, r), (i = !0);
    else if (t === null) {
        var o = e.stateNode,
            l = e.memoizedProps;
        o.props = l;
        var a = o.context,
            u = n.contextType;
        typeof u == "object" && u !== null
            ? (u = Qe(u))
            : ((u = De(n) ? xn : xe.current), (u = qn(e, u)));
        var c = n.getDerivedStateFromProps,
            f =
                typeof c == "function" ||
                typeof o.getSnapshotBeforeUpdate == "function";
        f ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
                typeof o.componentWillReceiveProps != "function") ||
            ((l !== i || a !== u) && Ku(e, o, i, u)),
            (Rt = !1);
        var d = e.memoizedState;
        (o.state = d),
            Ts(e, i, o, r),
            (a = e.memoizedState),
            l !== i || d !== a || ze.current || Rt
                ? (typeof c == "function" && (Cl(e, n, c, i), (a = e.memoizedState)),
                    (l = Rt || Yu(e, n, l, i, d, a, u))
                        ? (f ||
                            (typeof o.UNSAFE_componentWillMount != "function" &&
                                typeof o.componentWillMount != "function") ||
                            (typeof o.componentWillMount == "function" &&
                                o.componentWillMount(),
                                typeof o.UNSAFE_componentWillMount == "function" &&
                                o.UNSAFE_componentWillMount()),
                            typeof o.componentDidMount == "function" && (e.flags |= 4194308))
                        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
                            (e.memoizedProps = i),
                            (e.memoizedState = a)),
                    (o.props = i),
                    (o.state = a),
                    (o.context = u),
                    (i = l))
                : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
                    (i = !1));
    } else {
        (o = e.stateNode),
            Wd(t, e),
            (l = e.memoizedProps),
            (u = e.type === e.elementType ? l : Je(e.type, l)),
            (o.props = u),
            (f = e.pendingProps),
            (d = o.context),
            (a = n.contextType),
            typeof a == "object" && a !== null
                ? (a = Qe(a))
                : ((a = De(n) ? xn : xe.current), (a = qn(e, a)));
        var h = n.getDerivedStateFromProps;
        (c =
            typeof h == "function" ||
            typeof o.getSnapshotBeforeUpdate == "function") ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
                typeof o.componentWillReceiveProps != "function") ||
            ((l !== f || d !== a) && Ku(e, o, i, a)),
            (Rt = !1),
            (d = e.memoizedState),
            (o.state = d),
            Ts(e, i, o, r);
        var y = e.memoizedState;
        l !== f || d !== y || ze.current || Rt
            ? (typeof h == "function" && (Cl(e, n, h, i), (y = e.memoizedState)),
                (u = Rt || Yu(e, n, u, i, d, y, a) || !1)
                    ? (c ||
                        (typeof o.UNSAFE_componentWillUpdate != "function" &&
                            typeof o.componentWillUpdate != "function") ||
                        (typeof o.componentWillUpdate == "function" &&
                            o.componentWillUpdate(i, y, a),
                            typeof o.UNSAFE_componentWillUpdate == "function" &&
                            o.UNSAFE_componentWillUpdate(i, y, a)),
                        typeof o.componentDidUpdate == "function" && (e.flags |= 4),
                        typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
                    : (typeof o.componentDidUpdate != "function" ||
                        (l === t.memoizedProps && d === t.memoizedState) ||
                        (e.flags |= 4),
                        typeof o.getSnapshotBeforeUpdate != "function" ||
                        (l === t.memoizedProps && d === t.memoizedState) ||
                        (e.flags |= 1024),
                        (e.memoizedProps = i),
                        (e.memoizedState = y)),
                (o.props = i),
                (o.state = y),
                (o.context = a),
                (i = u))
            : (typeof o.componentDidUpdate != "function" ||
                (l === t.memoizedProps && d === t.memoizedState) ||
                (e.flags |= 4),
                typeof o.getSnapshotBeforeUpdate != "function" ||
                (l === t.memoizedProps && d === t.memoizedState) ||
                (e.flags |= 1024),
                (i = !1));
    }
    return Tl(t, e, n, i, s, r);
}
function Tl(t, e, n, i, r, s) {
    gh(t, e);
    var o = (e.flags & 128) !== 0;
    if (!i && !o) return r && Nu(e, n, !1), Tt(t, e, s);
    (i = e.stateNode), (Lm.current = e);
    var l =
        o && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return (
        (e.flags |= 1),
        t !== null && o
            ? ((e.child = ei(e, t.child, null, s)), (e.child = ei(e, null, l, s)))
            : Se(t, e, l, s),
        (e.memoizedState = i.state),
        r && Nu(e, n, !0),
        e.child
    );
}
function mh(t) {
    var e = t.stateNode;
    e.pendingContext
        ? Au(t, e.pendingContext, e.pendingContext !== e.context)
        : e.context && Au(t, e.context, !1),
        Ma(t, e.containerInfo);
}
function ec(t, e, n, i, r) {
    return Jn(), va(r), (e.flags |= 256), Se(t, e, n, i), e.child;
}
var Ol = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ll(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
}
function yh(t, e, n) {
    var i = e.pendingProps,
        r = G.current,
        s = !1,
        o = (e.flags & 128) !== 0,
        l;
    if (
        ((l = o) ||
            (l = t !== null && t.memoizedState === null ? !1 : (r & 2) !== 0),
            l
                ? ((s = !0), (e.flags &= -129))
                : (t === null || t.memoizedState !== null) && (r |= 1),
            V(G, r & 1),
            t === null)
    )
        return (
            Sl(e),
            (t = e.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null)
                ? (e.mode & 1
                    ? t.data === "$!"
                        ? (e.lanes = 8)
                        : (e.lanes = 1073741824)
                    : (e.lanes = 1),
                    null)
                : ((o = i.children),
                    (t = i.fallback),
                    s
                        ? ((i = e.mode),
                            (s = e.child),
                            (o = { mode: "hidden", children: o }),
                            !(i & 1) && s !== null
                                ? ((s.childLanes = 0), (s.pendingProps = o))
                                : (s = io(o, i, 0, null)),
                            (t = vn(t, i, n, null)),
                            (s.return = e),
                            (t.return = e),
                            (s.sibling = t),
                            (e.child = s),
                            (e.child.memoizedState = Ll(n)),
                            (e.memoizedState = Ol),
                            t)
                        : za(e, o))
        );
    if (((r = t.memoizedState), r !== null && ((l = r.dehydrated), l !== null)))
        return zm(t, e, o, i, l, r, n);
    if (s) {
        (s = i.fallback), (o = e.mode), (r = t.child), (l = r.sibling);
        var a = { mode: "hidden", children: i.children };
        return (
            !(o & 1) && e.child !== r
                ? ((i = e.child),
                    (i.childLanes = 0),
                    (i.pendingProps = a),
                    (e.deletions = null))
                : ((i = Qt(r, a)), (i.subtreeFlags = r.subtreeFlags & 14680064)),
            l !== null ? (s = Qt(l, s)) : ((s = vn(s, o, n, null)), (s.flags |= 2)),
            (s.return = e),
            (i.return = e),
            (i.sibling = s),
            (e.child = i),
            (i = s),
            (s = e.child),
            (o = t.child.memoizedState),
            (o =
                o === null
                    ? Ll(n)
                    : {
                        baseLanes: o.baseLanes | n,
                        cachePool: null,
                        transitions: o.transitions,
                    }),
            (s.memoizedState = o),
            (s.childLanes = t.childLanes & ~n),
            (e.memoizedState = Ol),
            i
        );
    }
    return (
        (s = t.child),
        (t = s.sibling),
        (i = Qt(s, { mode: "visible", children: i.children })),
        !(e.mode & 1) && (i.lanes = n),
        (i.return = e),
        (i.sibling = null),
        t !== null &&
        ((n = e.deletions),
            n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
        (e.child = i),
        (e.memoizedState = null),
        i
    );
}
function za(t, e) {
    return (
        (e = io({ mode: "visible", children: e }, t.mode, 0, null)),
        (e.return = t),
        (t.child = e)
    );
}
function Rr(t, e, n, i) {
    return (
        i !== null && va(i),
        ei(e, t.child, null, n),
        (t = za(e, e.pendingProps.children)),
        (t.flags |= 2),
        (e.memoizedState = null),
        t
    );
}
function zm(t, e, n, i, r, s, o) {
    if (n)
        return e.flags & 256
            ? ((e.flags &= -257), (i = Ro(Error(C(422)))), Rr(t, e, o, i))
            : e.memoizedState !== null
                ? ((e.child = t.child), (e.flags |= 128), null)
                : ((s = i.fallback),
                    (r = e.mode),
                    (i = io({ mode: "visible", children: i.children }, r, 0, null)),
                    (s = vn(s, r, o, null)),
                    (s.flags |= 2),
                    (i.return = e),
                    (s.return = e),
                    (i.sibling = s),
                    (e.child = i),
                    e.mode & 1 && ei(e, t.child, null, o),
                    (e.child.memoizedState = Ll(o)),
                    (e.memoizedState = Ol),
                    s);
    if (!(e.mode & 1)) return Rr(t, e, o, null);
    if (r.data === "$!") {
        if (((i = r.nextSibling && r.nextSibling.dataset), i)) var l = i.dgst;
        return (i = l), (s = Error(C(419))), (i = Ro(s, i, void 0)), Rr(t, e, o, i);
    }
    if (((l = (o & t.childLanes) !== 0), Le || l)) {
        if (((i = ue), i !== null)) {
            switch (o & -o) {
                case 4:
                    r = 2;
                    break;
                case 16:
                    r = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    r = 32;
                    break;
                case 536870912:
                    r = 268435456;
                    break;
                default:
                    r = 0;
            }
            (r = r & (i.suspendedLanes | o) ? 0 : r),
                r !== 0 &&
                r !== s.retryLane &&
                ((s.retryLane = r), Et(t, r), st(i, t, r, -1));
        }
        return Na(), (i = Ro(Error(C(421)))), Rr(t, e, o, i);
    }
    return r.data === "$?"
        ? ((e.flags |= 128),
            (e.child = t.child),
            (e = Um.bind(null, t)),
            (r._reactRetry = e),
            null)
        : ((t = s.treeContext),
            (Ae = $t(r.nextSibling)),
            (Ne = e),
            (Q = !0),
            (tt = null),
            t !== null &&
            ((We[$e++] = St),
                (We[$e++] = Mt),
                (We[$e++] = wn),
                (St = t.id),
                (Mt = t.overflow),
                (wn = e)),
            (e = za(e, i.children)),
            (e.flags |= 4096),
            e);
}
function tc(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), Ml(t.return, e, n);
}
function Fo(t, e, n, i, r) {
    var s = t.memoizedState;
    s === null
        ? (t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: i,
            tail: n,
            tailMode: r,
        })
        : ((s.isBackwards = e),
            (s.rendering = null),
            (s.renderingStartTime = 0),
            (s.last = i),
            (s.tail = n),
            (s.tailMode = r));
}
function vh(t, e, n) {
    var i = e.pendingProps,
        r = i.revealOrder,
        s = i.tail;
    if ((Se(t, e, i.children, n), (i = G.current), i & 2))
        (i = (i & 1) | 2), (e.flags |= 128);
    else {
        if (t !== null && t.flags & 128)
            e: for (t = e.child; t !== null;) {
                if (t.tag === 13) t.memoizedState !== null && tc(t, n, e);
                else if (t.tag === 19) tc(t, n, e);
                else if (t.child !== null) {
                    (t.child.return = t), (t = t.child);
                    continue;
                }
                if (t === e) break e;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) break e;
                    t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
            }
        i &= 1;
    }
    if ((V(G, i), !(e.mode & 1))) e.memoizedState = null;
    else
        switch (r) {
            case "forwards":
                for (n = e.child, r = null; n !== null;)
                    (t = n.alternate),
                        t !== null && Os(t) === null && (r = n),
                        (n = n.sibling);
                (n = r),
                    n === null
                        ? ((r = e.child), (e.child = null))
                        : ((r = n.sibling), (n.sibling = null)),
                    Fo(e, !1, r, n, s);
                break;
            case "backwards":
                for (n = null, r = e.child, e.child = null; r !== null;) {
                    if (((t = r.alternate), t !== null && Os(t) === null)) {
                        e.child = r;
                        break;
                    }
                    (t = r.sibling), (r.sibling = n), (n = r), (r = t);
                }
                Fo(e, !0, n, null, s);
                break;
            case "together":
                Fo(e, !1, null, null, void 0);
                break;
            default:
                e.memoizedState = null;
        }
    return e.child;
}
function ss(t, e) {
    !(e.mode & 1) &&
        t !== null &&
        ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function Tt(t, e, n) {
    if (
        (t !== null && (e.dependencies = t.dependencies),
            (Sn |= e.lanes),
            !(n & e.childLanes))
    )
        return null;
    if (t !== null && e.child !== t.child) throw Error(C(153));
    if (e.child !== null) {
        for (
            t = e.child, n = Qt(t, t.pendingProps), e.child = n, n.return = e;
            t.sibling !== null;

        )
            (t = t.sibling), (n = n.sibling = Qt(t, t.pendingProps)), (n.return = e);
        n.sibling = null;
    }
    return e.child;
}
function Dm(t, e, n) {
    switch (e.tag) {
        case 3:
            mh(e), Jn();
            break;
        case 5:
            $d(e);
            break;
        case 1:
            De(e.type) && Ms(e);
            break;
        case 4:
            Ma(e, e.stateNode.containerInfo);
            break;
        case 10:
            var i = e.type._context,
                r = e.memoizedProps.value;
            V(Ps, i._currentValue), (i._currentValue = r);
            break;
        case 13:
            if (((i = e.memoizedState), i !== null))
                return i.dehydrated !== null
                    ? (V(G, G.current & 1), (e.flags |= 128), null)
                    : n & e.child.childLanes
                        ? yh(t, e, n)
                        : (V(G, G.current & 1),
                            (t = Tt(t, e, n)),
                            t !== null ? t.sibling : null);
            V(G, G.current & 1);
            break;
        case 19:
            if (((i = (n & e.childLanes) !== 0), t.flags & 128)) {
                if (i) return vh(t, e, n);
                e.flags |= 128;
            }
            if (
                ((r = e.memoizedState),
                    r !== null &&
                    ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
                    V(G, G.current),
                    i)
            )
                break;
            return null;
        case 22:
        case 23:
            return (e.lanes = 0), ph(t, e, n);
    }
    return Tt(t, e, n);
}
var _h, zl, xh, wh;
_h = function (t, e) {
    for (var n = e.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === e) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === e) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
zl = function () { };
xh = function (t, e, n, i) {
    var r = t.memoizedProps;
    if (r !== i) {
        (t = e.stateNode), gn(gt.current);
        var s = null;
        switch (n) {
            case "input":
                (r = el(t, r)), (i = el(t, i)), (s = []);
                break;
            case "select":
                (r = q({}, r, { value: void 0 })),
                    (i = q({}, i, { value: void 0 })),
                    (s = []);
                break;
            case "textarea":
                (r = il(t, r)), (i = il(t, i)), (s = []);
                break;
            default:
                typeof r.onClick != "function" &&
                    typeof i.onClick == "function" &&
                    (t.onclick = ks);
        }
        sl(n, i);
        var o;
        n = null;
        for (u in r)
            if (!i.hasOwnProperty(u) && r.hasOwnProperty(u) && r[u] != null)
                if (u === "style") {
                    var l = r[u];
                    for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                } else
                    u !== "dangerouslySetInnerHTML" &&
                        u !== "children" &&
                        u !== "suppressContentEditableWarning" &&
                        u !== "suppressHydrationWarning" &&
                        u !== "autoFocus" &&
                        (Ui.hasOwnProperty(u)
                            ? s || (s = [])
                            : (s = s || []).push(u, null));
        for (u in i) {
            var a = i[u];
            if (
                ((l = r != null ? r[u] : void 0),
                    i.hasOwnProperty(u) && a !== l && (a != null || l != null))
            )
                if (u === "style")
                    if (l) {
                        for (o in l)
                            !l.hasOwnProperty(o) ||
                                (a && a.hasOwnProperty(o)) ||
                                (n || (n = {}), (n[o] = ""));
                        for (o in a)
                            a.hasOwnProperty(o) &&
                                l[o] !== a[o] &&
                                (n || (n = {}), (n[o] = a[o]));
                    } else n || (s || (s = []), s.push(u, n)), (n = a);
                else
                    u === "dangerouslySetInnerHTML"
                        ? ((a = a ? a.__html : void 0),
                            (l = l ? l.__html : void 0),
                            a != null && l !== a && (s = s || []).push(u, a))
                        : u === "children"
                            ? (typeof a != "string" && typeof a != "number") ||
                            (s = s || []).push(u, "" + a)
                            : u !== "suppressContentEditableWarning" &&
                            u !== "suppressHydrationWarning" &&
                            (Ui.hasOwnProperty(u)
                                ? (a != null && u === "onScroll" && $("scroll", t),
                                    s || l === a || (s = []))
                                : (s = s || []).push(u, a));
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (e.updateQueue = u) && (e.flags |= 4);
    }
};
wh = function (t, e, n, i) {
    n !== i && (e.flags |= 4);
};
function yi(t, e) {
    if (!Q)
        switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var n = null; e !== null;)
                    e.alternate !== null && (n = e), (e = e.sibling);
                n === null ? (t.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = t.tail;
                for (var i = null; n !== null;)
                    n.alternate !== null && (i = n), (n = n.sibling);
                i === null
                    ? e || t.tail === null
                        ? (t.tail = null)
                        : (t.tail.sibling = null)
                    : (i.sibling = null);
        }
}
function ge(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
        n = 0,
        i = 0;
    if (e)
        for (var r = t.child; r !== null;)
            (n |= r.lanes | r.childLanes),
                (i |= r.subtreeFlags & 14680064),
                (i |= r.flags & 14680064),
                (r.return = t),
                (r = r.sibling);
    else
        for (r = t.child; r !== null;)
            (n |= r.lanes | r.childLanes),
                (i |= r.subtreeFlags),
                (i |= r.flags),
                (r.return = t),
                (r = r.sibling);
    return (t.subtreeFlags |= i), (t.childLanes = n), e;
}
function Rm(t, e, n) {
    var i = e.pendingProps;
    switch ((ya(e), e.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ge(e), null;
        case 1:
            return De(e.type) && Ss(), ge(e), null;
        case 3:
            return (
                (i = e.stateNode),
                ti(),
                K(ze),
                K(xe),
                ba(),
                i.pendingContext &&
                ((i.context = i.pendingContext), (i.pendingContext = null)),
                (t === null || t.child === null) &&
                (zr(e)
                    ? (e.flags |= 4)
                    : t === null ||
                    (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
                    ((e.flags |= 1024), tt !== null && (jl(tt), (tt = null)))),
                zl(t, e),
                ge(e),
                null
            );
        case 5:
            Ca(e);
            var r = gn(ir.current);
            if (((n = e.type), t !== null && e.stateNode != null))
                xh(t, e, n, i, r),
                    t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
            else {
                if (!i) {
                    if (e.stateNode === null) throw Error(C(166));
                    return ge(e), null;
                }
                if (((t = gn(gt.current)), zr(e))) {
                    (i = e.stateNode), (n = e.type);
                    var s = e.memoizedProps;
                    switch (((i[ht] = e), (i[tr] = s), (t = (e.mode & 1) !== 0), n)) {
                        case "dialog":
                            $("cancel", i), $("close", i);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            $("load", i);
                            break;
                        case "video":
                        case "audio":
                            for (r = 0; r < Pi.length; r++) $(Pi[r], i);
                            break;
                        case "source":
                            $("error", i);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            $("error", i), $("load", i);
                            break;
                        case "details":
                            $("toggle", i);
                            break;
                        case "input":
                            cu(i, s), $("invalid", i);
                            break;
                        case "select":
                            (i._wrapperState = { wasMultiple: !!s.multiple }),
                                $("invalid", i);
                            break;
                        case "textarea":
                            du(i, s), $("invalid", i);
                    }
                    sl(n, s), (r = null);
                    for (var o in s)
                        if (s.hasOwnProperty(o)) {
                            var l = s[o];
                            o === "children"
                                ? typeof l == "string"
                                    ? i.textContent !== l &&
                                    (s.suppressHydrationWarning !== !0 &&
                                        Lr(i.textContent, l, t),
                                        (r = ["children", l]))
                                    : typeof l == "number" &&
                                    i.textContent !== "" + l &&
                                    (s.suppressHydrationWarning !== !0 &&
                                        Lr(i.textContent, l, t),
                                        (r = ["children", "" + l]))
                                : Ui.hasOwnProperty(o) &&
                                l != null &&
                                o === "onScroll" &&
                                $("scroll", i);
                        }
                    switch (n) {
                        case "input":
                            Sr(i), fu(i, s, !0);
                            break;
                        case "textarea":
                            Sr(i), hu(i);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof s.onClick == "function" && (i.onclick = ks);
                    }
                    (i = r), (e.updateQueue = i), i !== null && (e.flags |= 4);
                } else {
                    (o = r.nodeType === 9 ? r : r.ownerDocument),
                        t === "http://www.w3.org/1999/xhtml" && (t = Xf(n)),
                        t === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((t = o.createElement("div")),
                                    (t.innerHTML = "<script></script>"),
                                    (t = t.removeChild(t.firstChild)))
                                : typeof i.is == "string"
                                    ? (t = o.createElement(n, { is: i.is }))
                                    : ((t = o.createElement(n)),
                                        n === "select" &&
                                        ((o = t),
                                            i.multiple
                                                ? (o.multiple = !0)
                                                : i.size && (o.size = i.size)))
                            : (t = o.createElementNS(t, n)),
                        (t[ht] = e),
                        (t[tr] = i),
                        _h(t, e, !1, !1),
                        (e.stateNode = t);
                    e: {
                        switch (((o = ol(n, i)), n)) {
                            case "dialog":
                                $("cancel", t), $("close", t), (r = i);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                $("load", t), (r = i);
                                break;
                            case "video":
                            case "audio":
                                for (r = 0; r < Pi.length; r++) $(Pi[r], t);
                                r = i;
                                break;
                            case "source":
                                $("error", t), (r = i);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                $("error", t), $("load", t), (r = i);
                                break;
                            case "details":
                                $("toggle", t), (r = i);
                                break;
                            case "input":
                                cu(t, i), (r = el(t, i)), $("invalid", t);
                                break;
                            case "option":
                                r = i;
                                break;
                            case "select":
                                (t._wrapperState = { wasMultiple: !!i.multiple }),
                                    (r = q({}, i, { value: void 0 })),
                                    $("invalid", t);
                                break;
                            case "textarea":
                                du(t, i), (r = il(t, i)), $("invalid", t);
                                break;
                            default:
                                r = i;
                        }
                        sl(n, r), (l = r);
                        for (s in l)
                            if (l.hasOwnProperty(s)) {
                                var a = l[s];
                                s === "style"
                                    ? qf(t, a)
                                    : s === "dangerouslySetInnerHTML"
                                        ? ((a = a ? a.__html : void 0), a != null && Gf(t, a))
                                        : s === "children"
                                            ? typeof a == "string"
                                                ? (n !== "textarea" || a !== "") && Yi(t, a)
                                                : typeof a == "number" && Yi(t, "" + a)
                                            : s !== "suppressContentEditableWarning" &&
                                            s !== "suppressHydrationWarning" &&
                                            s !== "autoFocus" &&
                                            (Ui.hasOwnProperty(s)
                                                ? a != null && s === "onScroll" && $("scroll", t)
                                                : a != null && na(t, s, a, o));
                            }
                        switch (n) {
                            case "input":
                                Sr(t), fu(t, i, !1);
                                break;
                            case "textarea":
                                Sr(t), hu(t);
                                break;
                            case "option":
                                i.value != null && t.setAttribute("value", "" + qt(i.value));
                                break;
                            case "select":
                                (t.multiple = !!i.multiple),
                                    (s = i.value),
                                    s != null
                                        ? Wn(t, !!i.multiple, s, !1)
                                        : i.defaultValue != null &&
                                        Wn(t, !!i.multiple, i.defaultValue, !0);
                                break;
                            default:
                                typeof r.onClick == "function" && (t.onclick = ks);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                i = !!i.autoFocus;
                                break e;
                            case "img":
                                i = !0;
                                break e;
                            default:
                                i = !1;
                        }
                    }
                    i && (e.flags |= 4);
                }
                e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
            }
            return ge(e), null;
        case 6:
            if (t && e.stateNode != null) wh(t, e, t.memoizedProps, i);
            else {
                if (typeof i != "string" && e.stateNode === null) throw Error(C(166));
                if (((n = gn(ir.current)), gn(gt.current), zr(e))) {
                    if (
                        ((i = e.stateNode),
                            (n = e.memoizedProps),
                            (i[ht] = e),
                            (s = i.nodeValue !== n) && ((t = Ne), t !== null))
                    )
                        switch (t.tag) {
                            case 3:
                                Lr(i.nodeValue, n, (t.mode & 1) !== 0);
                                break;
                            case 5:
                                t.memoizedProps.suppressHydrationWarning !== !0 &&
                                    Lr(i.nodeValue, n, (t.mode & 1) !== 0);
                        }
                    s && (e.flags |= 4);
                } else
                    (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
                        (i[ht] = e),
                        (e.stateNode = i);
            }
            return ge(e), null;
        case 13:
            if (
                (K(G),
                    (i = e.memoizedState),
                    t === null ||
                    (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
            ) {
                if (Q && Ae !== null && e.mode & 1 && !(e.flags & 128))
                    Bd(), Jn(), (e.flags |= 98560), (s = !1);
                else if (((s = zr(e)), i !== null && i.dehydrated !== null)) {
                    if (t === null) {
                        if (!s) throw Error(C(318));
                        if (
                            ((s = e.memoizedState),
                                (s = s !== null ? s.dehydrated : null),
                                !s)
                        )
                            throw Error(C(317));
                        s[ht] = e;
                    } else
                        Jn(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
                    ge(e), (s = !1);
                } else tt !== null && (jl(tt), (tt = null)), (s = !0);
                if (!s) return e.flags & 65536 ? e : null;
            }
            return e.flags & 128
                ? ((e.lanes = n), e)
                : ((i = i !== null),
                    i !== (t !== null && t.memoizedState !== null) &&
                    i &&
                    ((e.child.flags |= 8192),
                        e.mode & 1 &&
                        (t === null || G.current & 1 ? le === 0 && (le = 3) : Na())),
                    e.updateQueue !== null && (e.flags |= 4),
                    ge(e),
                    null);
        case 4:
            return (
                ti(), zl(t, e), t === null && Ji(e.stateNode.containerInfo), ge(e), null
            );
        case 10:
            return wa(e.type._context), ge(e), null;
        case 17:
            return De(e.type) && Ss(), ge(e), null;
        case 19:
            if ((K(G), (s = e.memoizedState), s === null)) return ge(e), null;
            if (((i = (e.flags & 128) !== 0), (o = s.rendering), o === null))
                if (i) yi(s, !1);
                else {
                    if (le !== 0 || (t !== null && t.flags & 128))
                        for (t = e.child; t !== null;) {
                            if (((o = Os(t)), o !== null)) {
                                for (
                                    e.flags |= 128,
                                    yi(s, !1),
                                    i = o.updateQueue,
                                    i !== null && ((e.updateQueue = i), (e.flags |= 4)),
                                    e.subtreeFlags = 0,
                                    i = n,
                                    n = e.child;
                                    n !== null;

                                )
                                    (s = n),
                                        (t = i),
                                        (s.flags &= 14680066),
                                        (o = s.alternate),
                                        o === null
                                            ? ((s.childLanes = 0),
                                                (s.lanes = t),
                                                (s.child = null),
                                                (s.subtreeFlags = 0),
                                                (s.memoizedProps = null),
                                                (s.memoizedState = null),
                                                (s.updateQueue = null),
                                                (s.dependencies = null),
                                                (s.stateNode = null))
                                            : ((s.childLanes = o.childLanes),
                                                (s.lanes = o.lanes),
                                                (s.child = o.child),
                                                (s.subtreeFlags = 0),
                                                (s.deletions = null),
                                                (s.memoizedProps = o.memoizedProps),
                                                (s.memoizedState = o.memoizedState),
                                                (s.updateQueue = o.updateQueue),
                                                (s.type = o.type),
                                                (t = o.dependencies),
                                                (s.dependencies =
                                                    t === null
                                                        ? null
                                                        : {
                                                            lanes: t.lanes,
                                                            firstContext: t.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return V(G, (G.current & 1) | 2), e.child;
                            }
                            t = t.sibling;
                        }
                    s.tail !== null &&
                        te() > ii &&
                        ((e.flags |= 128), (i = !0), yi(s, !1), (e.lanes = 4194304));
                }
            else {
                if (!i)
                    if (((t = Os(o)), t !== null)) {
                        if (
                            ((e.flags |= 128),
                                (i = !0),
                                (n = t.updateQueue),
                                n !== null && ((e.updateQueue = n), (e.flags |= 4)),
                                yi(s, !0),
                                s.tail === null && s.tailMode === "hidden" && !o.alternate && !Q)
                        )
                            return ge(e), null;
                    } else
                        2 * te() - s.renderingStartTime > ii &&
                            n !== 1073741824 &&
                            ((e.flags |= 128), (i = !0), yi(s, !1), (e.lanes = 4194304));
                s.isBackwards
                    ? ((o.sibling = e.child), (e.child = o))
                    : ((n = s.last),
                        n !== null ? (n.sibling = o) : (e.child = o),
                        (s.last = o));
            }
            return s.tail !== null
                ? ((e = s.tail),
                    (s.rendering = e),
                    (s.tail = e.sibling),
                    (s.renderingStartTime = te()),
                    (e.sibling = null),
                    (n = G.current),
                    V(G, i ? (n & 1) | 2 : n & 1),
                    e)
                : (ge(e), null);
        case 22:
        case 23:
            return (
                Aa(),
                (i = e.memoizedState !== null),
                t !== null && (t.memoizedState !== null) !== i && (e.flags |= 8192),
                i && e.mode & 1
                    ? Ie & 1073741824 && (ge(e), e.subtreeFlags & 6 && (e.flags |= 8192))
                    : ge(e),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(C(156, e.tag));
}
function Fm(t, e) {
    switch ((ya(e), e.tag)) {
        case 1:
            return (
                De(e.type) && Ss(),
                (t = e.flags),
                t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
            );
        case 3:
            return (
                ti(),
                K(ze),
                K(xe),
                ba(),
                (t = e.flags),
                t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
            );
        case 5:
            return Ca(e), null;
        case 13:
            if ((K(G), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
                if (e.alternate === null) throw Error(C(340));
                Jn();
            }
            return (
                (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
            );
        case 19:
            return K(G), null;
        case 4:
            return ti(), null;
        case 10:
            return wa(e.type._context), null;
        case 22:
        case 23:
            return Aa(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Fr = !1,
    ye = !1,
    Im = typeof WeakSet == "function" ? WeakSet : Set,
    P = null;
function jn(t, e) {
    var n = t.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (i) {
                J(t, e, i);
            }
        else n.current = null;
}
function Dl(t, e, n) {
    try {
        n();
    } catch (i) {
        J(t, e, i);
    }
}
var nc = !1;
function Am(t, e) {
    if (((ml = _s), (t = bd()), ga(t))) {
        if ("selectionStart" in t)
            var n = { start: t.selectionStart, end: t.selectionEnd };
        else
            e: {
                n = ((n = t.ownerDocument) && n.defaultView) || window;
                var i = n.getSelection && n.getSelection();
                if (i && i.rangeCount !== 0) {
                    n = i.anchorNode;
                    var r = i.anchorOffset,
                        s = i.focusNode;
                    i = i.focusOffset;
                    try {
                        n.nodeType, s.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var o = 0,
                        l = -1,
                        a = -1,
                        u = 0,
                        c = 0,
                        f = t,
                        d = null;
                    t: for (; ;) {
                        for (
                            var h;
                            f !== n || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                            f !== s || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                            f.nodeType === 3 && (o += f.nodeValue.length),
                            (h = f.firstChild) !== null;

                        )
                            (d = f), (f = h);
                        for (; ;) {
                            if (f === t) break t;
                            if (
                                (d === n && ++u === r && (l = o),
                                    d === s && ++c === i && (a = o),
                                    (h = f.nextSibling) !== null)
                            )
                                break;
                            (f = d), (d = f.parentNode);
                        }
                        f = h;
                    }
                    n = l === -1 || a === -1 ? null : { start: l, end: a };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (yl = { focusedElem: t, selectionRange: n }, _s = !1, P = e; P !== null;)
        if (((e = P), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
            (t.return = e), (P = t);
        else
            for (; P !== null;) {
                e = P;
                try {
                    var y = e.alternate;
                    if (e.flags & 1024)
                        switch (e.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (y !== null) {
                                    var v = y.memoizedProps,
                                        _ = y.memoizedState,
                                        p = e.stateNode,
                                        g = p.getSnapshotBeforeUpdate(
                                            e.elementType === e.type ? v : Je(e.type, v),
                                            _
                                        );
                                    p.__reactInternalSnapshotBeforeUpdate = g;
                                }
                                break;
                            case 3:
                                var m = e.stateNode.containerInfo;
                                m.nodeType === 1
                                    ? (m.textContent = "")
                                    : m.nodeType === 9 &&
                                    m.documentElement &&
                                    m.removeChild(m.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(C(163));
                        }
                } catch (x) {
                    J(e, e.return, x);
                }
                if (((t = e.sibling), t !== null)) {
                    (t.return = e.return), (P = t);
                    break;
                }
                P = e.return;
            }
    return (y = nc), (nc = !1), y;
}
function Ni(t, e, n) {
    var i = e.updateQueue;
    if (((i = i !== null ? i.lastEffect : null), i !== null)) {
        var r = (i = i.next);
        do {
            if ((r.tag & t) === t) {
                var s = r.destroy;
                (r.destroy = void 0), s !== void 0 && Dl(e, n, s);
            }
            r = r.next;
        } while (r !== i);
    }
}
function to(t, e) {
    if (
        ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
    ) {
        var n = (e = e.next);
        do {
            if ((n.tag & t) === t) {
                var i = n.create;
                n.destroy = i();
            }
            n = n.next;
        } while (n !== e);
    }
}
function Rl(t) {
    var e = t.ref;
    if (e !== null) {
        var n = t.stateNode;
        switch (t.tag) {
            case 5:
                t = n;
                break;
            default:
                t = n;
        }
        typeof e == "function" ? e(t) : (e.current = t);
    }
}
function kh(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), kh(e)),
        (t.child = null),
        (t.deletions = null),
        (t.sibling = null),
        t.tag === 5 &&
        ((e = t.stateNode),
            e !== null &&
            (delete e[ht], delete e[tr], delete e[xl], delete e[_m], delete e[xm])),
        (t.stateNode = null),
        (t.return = null),
        (t.dependencies = null),
        (t.memoizedProps = null),
        (t.memoizedState = null),
        (t.pendingProps = null),
        (t.stateNode = null),
        (t.updateQueue = null);
}
function Sh(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function ic(t) {
    e: for (; ;) {
        for (; t.sibling === null;) {
            if (t.return === null || Sh(t.return)) return null;
            t = t.return;
        }
        for (
            t.sibling.return = t.return, t = t.sibling;
            t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

        ) {
            if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
            (t.child.return = t), (t = t.child);
        }
        if (!(t.flags & 2)) return t.stateNode;
    }
}
function Fl(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
        (t = t.stateNode),
            e
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(t, e)
                    : n.insertBefore(t, e)
                : (n.nodeType === 8
                    ? ((e = n.parentNode), e.insertBefore(t, n))
                    : ((e = n), e.appendChild(t)),
                    (n = n._reactRootContainer),
                    n != null || e.onclick !== null || (e.onclick = ks));
    else if (i !== 4 && ((t = t.child), t !== null))
        for (Fl(t, e, n), t = t.sibling; t !== null;) Fl(t, e, n), (t = t.sibling);
}
function Il(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
        (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (i !== 4 && ((t = t.child), t !== null))
        for (Il(t, e, n), t = t.sibling; t !== null;) Il(t, e, n), (t = t.sibling);
}
var ce = null,
    et = !1;
function Lt(t, e, n) {
    for (n = n.child; n !== null;) Mh(t, e, n), (n = n.sibling);
}
function Mh(t, e, n) {
    if (pt && typeof pt.onCommitFiberUnmount == "function")
        try {
            pt.onCommitFiberUnmount(Ks, n);
        } catch { }
    switch (n.tag) {
        case 5:
            ye || jn(n, e);
        case 6:
            var i = ce,
                r = et;
            (ce = null),
                Lt(t, e, n),
                (ce = i),
                (et = r),
                ce !== null &&
                (et
                    ? ((t = ce),
                        (n = n.stateNode),
                        t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
                    : ce.removeChild(n.stateNode));
            break;
        case 18:
            ce !== null &&
                (et
                    ? ((t = ce),
                        (n = n.stateNode),
                        t.nodeType === 8
                            ? Eo(t.parentNode, n)
                            : t.nodeType === 1 && Eo(t, n),
                        Gi(t))
                    : Eo(ce, n.stateNode));
            break;
        case 4:
            (i = ce),
                (r = et),
                (ce = n.stateNode.containerInfo),
                (et = !0),
                Lt(t, e, n),
                (ce = i),
                (et = r);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !ye &&
                ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
            ) {
                r = i = i.next;
                do {
                    var s = r,
                        o = s.destroy;
                    (s = s.tag),
                        o !== void 0 && (s & 2 || s & 4) && Dl(n, e, o),
                        (r = r.next);
                } while (r !== i);
            }
            Lt(t, e, n);
            break;
        case 1:
            if (
                !ye &&
                (jn(n, e),
                    (i = n.stateNode),
                    typeof i.componentWillUnmount == "function")
            )
                try {
                    (i.props = n.memoizedProps),
                        (i.state = n.memoizedState),
                        i.componentWillUnmount();
                } catch (l) {
                    J(n, e, l);
                }
            Lt(t, e, n);
            break;
        case 21:
            Lt(t, e, n);
            break;
        case 22:
            n.mode & 1
                ? ((ye = (i = ye) || n.memoizedState !== null), Lt(t, e, n), (ye = i))
                : Lt(t, e, n);
            break;
        default:
            Lt(t, e, n);
    }
}
function rc(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var n = t.stateNode;
        n === null && (n = t.stateNode = new Im()),
            e.forEach(function (i) {
                var r = Ym.bind(null, t, i);
                n.has(i) || (n.add(i), i.then(r, r));
            });
    }
}
function qe(t, e) {
    var n = e.deletions;
    if (n !== null)
        for (var i = 0; i < n.length; i++) {
            var r = n[i];
            try {
                var s = t,
                    o = e,
                    l = o;
                e: for (; l !== null;) {
                    switch (l.tag) {
                        case 5:
                            (ce = l.stateNode), (et = !1);
                            break e;
                        case 3:
                            (ce = l.stateNode.containerInfo), (et = !0);
                            break e;
                        case 4:
                            (ce = l.stateNode.containerInfo), (et = !0);
                            break e;
                    }
                    l = l.return;
                }
                if (ce === null) throw Error(C(160));
                Mh(s, o, r), (ce = null), (et = !1);
                var a = r.alternate;
                a !== null && (a.return = null), (r.return = null);
            } catch (u) {
                J(r, e, u);
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null;) Ch(e, t), (e = e.sibling);
}
function Ch(t, e) {
    var n = t.alternate,
        i = t.flags;
    switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((qe(e, t), at(t), i & 4)) {
                try {
                    Ni(3, t, t.return), to(3, t);
                } catch (v) {
                    J(t, t.return, v);
                }
                try {
                    Ni(5, t, t.return);
                } catch (v) {
                    J(t, t.return, v);
                }
            }
            break;
        case 1:
            qe(e, t), at(t), i & 512 && n !== null && jn(n, n.return);
            break;
        case 5:
            if (
                (qe(e, t),
                    at(t),
                    i & 512 && n !== null && jn(n, n.return),
                    t.flags & 32)
            ) {
                var r = t.stateNode;
                try {
                    Yi(r, "");
                } catch (v) {
                    J(t, t.return, v);
                }
            }
            if (i & 4 && ((r = t.stateNode), r != null)) {
                var s = t.memoizedProps,
                    o = n !== null ? n.memoizedProps : s,
                    l = t.type,
                    a = t.updateQueue;
                if (((t.updateQueue = null), a !== null))
                    try {
                        l === "input" && s.type === "radio" && s.name != null && Kf(r, s),
                            ol(l, o);
                        var u = ol(l, s);
                        for (o = 0; o < a.length; o += 2) {
                            var c = a[o],
                                f = a[o + 1];
                            c === "style"
                                ? qf(r, f)
                                : c === "dangerouslySetInnerHTML"
                                    ? Gf(r, f)
                                    : c === "children"
                                        ? Yi(r, f)
                                        : na(r, c, f, u);
                        }
                        switch (l) {
                            case "input":
                                tl(r, s);
                                break;
                            case "textarea":
                                Qf(r, s);
                                break;
                            case "select":
                                var d = r._wrapperState.wasMultiple;
                                r._wrapperState.wasMultiple = !!s.multiple;
                                var h = s.value;
                                h != null
                                    ? Wn(r, !!s.multiple, h, !1)
                                    : d !== !!s.multiple &&
                                    (s.defaultValue != null
                                        ? Wn(r, !!s.multiple, s.defaultValue, !0)
                                        : Wn(r, !!s.multiple, s.multiple ? [] : "", !1));
                        }
                        r[tr] = s;
                    } catch (v) {
                        J(t, t.return, v);
                    }
            }
            break;
        case 6:
            if ((qe(e, t), at(t), i & 4)) {
                if (t.stateNode === null) throw Error(C(162));
                (r = t.stateNode), (s = t.memoizedProps);
                try {
                    r.nodeValue = s;
                } catch (v) {
                    J(t, t.return, v);
                }
            }
            break;
        case 3:
            if (
                (qe(e, t), at(t), i & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    Gi(e.containerInfo);
                } catch (v) {
                    J(t, t.return, v);
                }
            break;
        case 4:
            qe(e, t), at(t);
            break;
        case 13:
            qe(e, t),
                at(t),
                (r = t.child),
                r.flags & 8192 &&
                ((s = r.memoizedState !== null),
                    (r.stateNode.isHidden = s),
                    !s ||
                    (r.alternate !== null && r.alternate.memoizedState !== null) ||
                    (Fa = te())),
                i & 4 && rc(t);
            break;
        case 22:
            if (
                ((c = n !== null && n.memoizedState !== null),
                    t.mode & 1 ? ((ye = (u = ye) || c), qe(e, t), (ye = u)) : qe(e, t),
                    at(t),
                    i & 8192)
            ) {
                if (
                    ((u = t.memoizedState !== null),
                        (t.stateNode.isHidden = u) && !c && t.mode & 1)
                )
                    for (P = t, c = t.child; c !== null;) {
                        for (f = P = c; P !== null;) {
                            switch (((d = P), (h = d.child), d.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Ni(4, d, d.return);
                                    break;
                                case 1:
                                    jn(d, d.return);
                                    var y = d.stateNode;
                                    if (typeof y.componentWillUnmount == "function") {
                                        (i = d), (n = d.return);
                                        try {
                                            (e = i),
                                                (y.props = e.memoizedProps),
                                                (y.state = e.memoizedState),
                                                y.componentWillUnmount();
                                        } catch (v) {
                                            J(i, n, v);
                                        }
                                    }
                                    break;
                                case 5:
                                    jn(d, d.return);
                                    break;
                                case 22:
                                    if (d.memoizedState !== null) {
                                        oc(f);
                                        continue;
                                    }
                            }
                            h !== null ? ((h.return = d), (P = h)) : oc(f);
                        }
                        c = c.sibling;
                    }
                e: for (c = null, f = t; ;) {
                    if (f.tag === 5) {
                        if (c === null) {
                            c = f;
                            try {
                                (r = f.stateNode),
                                    u
                                        ? ((s = r.style),
                                            typeof s.setProperty == "function"
                                                ? s.setProperty("display", "none", "important")
                                                : (s.display = "none"))
                                        : ((l = f.stateNode),
                                            (a = f.memoizedProps.style),
                                            (o =
                                                a != null && a.hasOwnProperty("display")
                                                    ? a.display
                                                    : null),
                                            (l.style.display = Zf("display", o)));
                            } catch (v) {
                                J(t, t.return, v);
                            }
                        }
                    } else if (f.tag === 6) {
                        if (c === null)
                            try {
                                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                            } catch (v) {
                                J(t, t.return, v);
                            }
                    } else if (
                        ((f.tag !== 22 && f.tag !== 23) ||
                            f.memoizedState === null ||
                            f === t) &&
                        f.child !== null
                    ) {
                        (f.child.return = f), (f = f.child);
                        continue;
                    }
                    if (f === t) break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === t) break e;
                        c === f && (c = null), (f = f.return);
                    }
                    c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
                }
            }
            break;
        case 19:
            qe(e, t), at(t), i & 4 && rc(t);
            break;
        case 21:
            break;
        default:
            qe(e, t), at(t);
    }
}
function at(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var n = t.return; n !== null;) {
                    if (Sh(n)) {
                        var i = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(C(160));
            }
            switch (i.tag) {
                case 5:
                    var r = i.stateNode;
                    i.flags & 32 && (Yi(r, ""), (i.flags &= -33));
                    var s = ic(t);
                    Il(t, s, r);
                    break;
                case 3:
                case 4:
                    var o = i.stateNode.containerInfo,
                        l = ic(t);
                    Fl(t, l, o);
                    break;
                default:
                    throw Error(C(161));
            }
        } catch (a) {
            J(t, t.return, a);
        }
        t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
}
function Nm(t, e, n) {
    (P = t), bh(t);
}
function bh(t, e, n) {
    for (var i = (t.mode & 1) !== 0; P !== null;) {
        var r = P,
            s = r.child;
        if (r.tag === 22 && i) {
            var o = r.memoizedState !== null || Fr;
            if (!o) {
                var l = r.alternate,
                    a = (l !== null && l.memoizedState !== null) || ye;
                l = Fr;
                var u = ye;
                if (((Fr = o), (ye = a) && !u))
                    for (P = r; P !== null;)
                        (o = P),
                            (a = o.child),
                            o.tag === 22 && o.memoizedState !== null
                                ? lc(r)
                                : a !== null
                                    ? ((a.return = o), (P = a))
                                    : lc(r);
                for (; s !== null;) (P = s), bh(s), (s = s.sibling);
                (P = r), (Fr = l), (ye = u);
            }
            sc(t);
        } else
            r.subtreeFlags & 8772 && s !== null ? ((s.return = r), (P = s)) : sc(t);
    }
}
function sc(t) {
    for (; P !== null;) {
        var e = P;
        if (e.flags & 8772) {
            var n = e.alternate;
            try {
                if (e.flags & 8772)
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            ye || to(5, e);
                            break;
                        case 1:
                            var i = e.stateNode;
                            if (e.flags & 4 && !ye)
                                if (n === null) i.componentDidMount();
                                else {
                                    var r =
                                        e.elementType === e.type
                                            ? n.memoizedProps
                                            : Je(e.type, n.memoizedProps);
                                    i.componentDidUpdate(
                                        r,
                                        n.memoizedState,
                                        i.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var s = e.updateQueue;
                            s !== null && Wu(e, s, i);
                            break;
                        case 3:
                            var o = e.updateQueue;
                            if (o !== null) {
                                if (((n = null), e.child !== null))
                                    switch (e.child.tag) {
                                        case 5:
                                            n = e.child.stateNode;
                                            break;
                                        case 1:
                                            n = e.child.stateNode;
                                    }
                                Wu(e, o, n);
                            }
                            break;
                        case 5:
                            var l = e.stateNode;
                            if (n === null && e.flags & 4) {
                                n = l;
                                var a = e.memoizedProps;
                                switch (e.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        a.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        a.src && (n.src = a.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (e.memoizedState === null) {
                                var u = e.alternate;
                                if (u !== null) {
                                    var c = u.memoizedState;
                                    if (c !== null) {
                                        var f = c.dehydrated;
                                        f !== null && Gi(f);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(C(163));
                    }
                ye || (e.flags & 512 && Rl(e));
            } catch (d) {
                J(e, e.return, d);
            }
        }
        if (e === t) {
            P = null;
            break;
        }
        if (((n = e.sibling), n !== null)) {
            (n.return = e.return), (P = n);
            break;
        }
        P = e.return;
    }
}
function oc(t) {
    for (; P !== null;) {
        var e = P;
        if (e === t) {
            P = null;
            break;
        }
        var n = e.sibling;
        if (n !== null) {
            (n.return = e.return), (P = n);
            break;
        }
        P = e.return;
    }
}
function lc(t) {
    for (; P !== null;) {
        var e = P;
        try {
            switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    var n = e.return;
                    try {
                        to(4, e);
                    } catch (a) {
                        J(e, n, a);
                    }
                    break;
                case 1:
                    var i = e.stateNode;
                    if (typeof i.componentDidMount == "function") {
                        var r = e.return;
                        try {
                            i.componentDidMount();
                        } catch (a) {
                            J(e, r, a);
                        }
                    }
                    var s = e.return;
                    try {
                        Rl(e);
                    } catch (a) {
                        J(e, s, a);
                    }
                    break;
                case 5:
                    var o = e.return;
                    try {
                        Rl(e);
                    } catch (a) {
                        J(e, o, a);
                    }
            }
        } catch (a) {
            J(e, e.return, a);
        }
        if (e === t) {
            P = null;
            break;
        }
        var l = e.sibling;
        if (l !== null) {
            (l.return = e.return), (P = l);
            break;
        }
        P = e.return;
    }
}
var Bm = Math.ceil,
    Ds = Ot.ReactCurrentDispatcher,
    Da = Ot.ReactCurrentOwner,
    Ke = Ot.ReactCurrentBatchConfig,
    I = 0,
    ue = null,
    re = null,
    fe = 0,
    Ie = 0,
    Hn = rn(0),
    le = 0,
    lr = null,
    Sn = 0,
    no = 0,
    Ra = 0,
    Bi = null,
    Te = null,
    Fa = 0,
    ii = 1 / 0,
    xt = null,
    Rs = !1,
    Al = null,
    Yt = null,
    Ir = !1,
    Nt = null,
    Fs = 0,
    ji = 0,
    Nl = null,
    os = -1,
    ls = 0;
function Me() {
    return I & 6 ? te() : os !== -1 ? os : (os = te());
}
function Kt(t) {
    return t.mode & 1
        ? I & 2 && fe !== 0
            ? fe & -fe
            : km.transition !== null
                ? (ls === 0 && (ls = cd()), ls)
                : ((t = j),
                    t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : yd(t.type))),
                    t)
        : 1;
}
function st(t, e, n, i) {
    if (50 < ji) throw ((ji = 0), (Nl = null), Error(C(185)));
    pr(t, n, i),
        (!(I & 2) || t !== ue) &&
        (t === ue && (!(I & 2) && (no |= n), le === 4 && It(t, fe)),
            Re(t, i),
            n === 1 && I === 0 && !(e.mode & 1) && ((ii = te() + 500), qs && sn()));
}
function Re(t, e) {
    var n = t.callbackNode;
    kg(t, e);
    var i = vs(t, t === ue ? fe : 0);
    if (i === 0)
        n !== null && mu(n), (t.callbackNode = null), (t.callbackPriority = 0);
    else if (((e = i & -i), t.callbackPriority !== e)) {
        if ((n != null && mu(n), e === 1))
            t.tag === 0 ? wm(ac.bind(null, t)) : Id(ac.bind(null, t)),
                ym(function () {
                    !(I & 6) && sn();
                }),
                (n = null);
        else {
            switch (fd(i)) {
                case 1:
                    n = la;
                    break;
                case 4:
                    n = ad;
                    break;
                case 16:
                    n = ys;
                    break;
                case 536870912:
                    n = ud;
                    break;
                default:
                    n = ys;
            }
            n = Rh(n, Ph.bind(null, t));
        }
        (t.callbackPriority = e), (t.callbackNode = n);
    }
}
function Ph(t, e) {
    if (((os = -1), (ls = 0), I & 6)) throw Error(C(327));
    var n = t.callbackNode;
    if (Qn() && t.callbackNode !== n) return null;
    var i = vs(t, t === ue ? fe : 0);
    if (i === 0) return null;
    if (i & 30 || i & t.expiredLanes || e) e = Is(t, i);
    else {
        e = i;
        var r = I;
        I |= 2;
        var s = Th();
        (ue !== t || fe !== e) && ((xt = null), (ii = te() + 500), yn(t, e));
        do
            try {
                Vm();
                break;
            } catch (l) {
                Eh(t, l);
            }
        while (!0);
        xa(),
            (Ds.current = s),
            (I = r),
            re !== null ? (e = 0) : ((ue = null), (fe = 0), (e = le));
    }
    if (e !== 0) {
        if (
            (e === 2 && ((r = fl(t)), r !== 0 && ((i = r), (e = Bl(t, r)))), e === 1)
        )
            throw ((n = lr), yn(t, 0), It(t, i), Re(t, te()), n);
        if (e === 6) It(t, i);
        else {
            if (
                ((r = t.current.alternate),
                    !(i & 30) &&
                    !jm(r) &&
                    ((e = Is(t, i)),
                        e === 2 && ((s = fl(t)), s !== 0 && ((i = s), (e = Bl(t, s)))),
                        e === 1))
            )
                throw ((n = lr), yn(t, 0), It(t, i), Re(t, te()), n);
            switch (((t.finishedWork = r), (t.finishedLanes = i), e)) {
                case 0:
                case 1:
                    throw Error(C(345));
                case 2:
                    fn(t, Te, xt);
                    break;
                case 3:
                    if (
                        (It(t, i), (i & 130023424) === i && ((e = Fa + 500 - te()), 10 < e))
                    ) {
                        if (vs(t, 0) !== 0) break;
                        if (((r = t.suspendedLanes), (r & i) !== i)) {
                            Me(), (t.pingedLanes |= t.suspendedLanes & r);
                            break;
                        }
                        t.timeoutHandle = _l(fn.bind(null, t, Te, xt), e);
                        break;
                    }
                    fn(t, Te, xt);
                    break;
                case 4:
                    if ((It(t, i), (i & 4194240) === i)) break;
                    for (e = t.eventTimes, r = -1; 0 < i;) {
                        var o = 31 - rt(i);
                        (s = 1 << o), (o = e[o]), o > r && (r = o), (i &= ~s);
                    }
                    if (
                        ((i = r),
                            (i = te() - i),
                            (i =
                                (120 > i
                                    ? 120
                                    : 480 > i
                                        ? 480
                                        : 1080 > i
                                            ? 1080
                                            : 1920 > i
                                                ? 1920
                                                : 3e3 > i
                                                    ? 3e3
                                                    : 4320 > i
                                                        ? 4320
                                                        : 1960 * Bm(i / 1960)) - i),
                            10 < i)
                    ) {
                        t.timeoutHandle = _l(fn.bind(null, t, Te, xt), i);
                        break;
                    }
                    fn(t, Te, xt);
                    break;
                case 5:
                    fn(t, Te, xt);
                    break;
                default:
                    throw Error(C(329));
            }
        }
    }
    return Re(t, te()), t.callbackNode === n ? Ph.bind(null, t) : null;
}
function Bl(t, e) {
    var n = Bi;
    return (
        t.current.memoizedState.isDehydrated && (yn(t, e).flags |= 256),
        (t = Is(t, e)),
        t !== 2 && ((e = Te), (Te = n), e !== null && jl(e)),
        t
    );
}
function jl(t) {
    Te === null ? (Te = t) : Te.push.apply(Te, t);
}
function jm(t) {
    for (var e = t; ;) {
        if (e.flags & 16384) {
            var n = e.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var i = 0; i < n.length; i++) {
                    var r = n[i],
                        s = r.getSnapshot;
                    r = r.value;
                    try {
                        if (!ot(s(), r)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
            (n.return = e), (e = n);
        else {
            if (e === t) break;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) return !0;
                e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
        }
    }
    return !0;
}
function It(t, e) {
    for (
        e &= ~Ra,
        e &= ~no,
        t.suspendedLanes |= e,
        t.pingedLanes &= ~e,
        t = t.expirationTimes;
        0 < e;

    ) {
        var n = 31 - rt(e),
            i = 1 << n;
        (t[n] = -1), (e &= ~i);
    }
}
function ac(t) {
    if (I & 6) throw Error(C(327));
    Qn();
    var e = vs(t, 0);
    if (!(e & 1)) return Re(t, te()), null;
    var n = Is(t, e);
    if (t.tag !== 0 && n === 2) {
        var i = fl(t);
        i !== 0 && ((e = i), (n = Bl(t, i)));
    }
    if (n === 1) throw ((n = lr), yn(t, 0), It(t, e), Re(t, te()), n);
    if (n === 6) throw Error(C(345));
    return (
        (t.finishedWork = t.current.alternate),
        (t.finishedLanes = e),
        fn(t, Te, xt),
        Re(t, te()),
        null
    );
}
function Ia(t, e) {
    var n = I;
    I |= 1;
    try {
        return t(e);
    } finally {
        (I = n), I === 0 && ((ii = te() + 500), qs && sn());
    }
}
function Mn(t) {
    Nt !== null && Nt.tag === 0 && !(I & 6) && Qn();
    var e = I;
    I |= 1;
    var n = Ke.transition,
        i = j;
    try {
        if (((Ke.transition = null), (j = 1), t)) return t();
    } finally {
        (j = i), (Ke.transition = n), (I = e), !(I & 6) && sn();
    }
}
function Aa() {
    (Ie = Hn.current), K(Hn);
}
function yn(t, e) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var n = t.timeoutHandle;
    if ((n !== -1 && ((t.timeoutHandle = -1), mm(n)), re !== null))
        for (n = re.return; n !== null;) {
            var i = n;
            switch ((ya(i), i.tag)) {
                case 1:
                    (i = i.type.childContextTypes), i != null && Ss();
                    break;
                case 3:
                    ti(), K(ze), K(xe), ba();
                    break;
                case 5:
                    Ca(i);
                    break;
                case 4:
                    ti();
                    break;
                case 13:
                    K(G);
                    break;
                case 19:
                    K(G);
                    break;
                case 10:
                    wa(i.type._context);
                    break;
                case 22:
                case 23:
                    Aa();
            }
            n = n.return;
        }
    if (
        ((ue = t),
            (re = t = Qt(t.current, null)),
            (fe = Ie = e),
            (le = 0),
            (lr = null),
            (Ra = no = Sn = 0),
            (Te = Bi = null),
            pn !== null)
    ) {
        for (e = 0; e < pn.length; e++)
            if (((n = pn[e]), (i = n.interleaved), i !== null)) {
                n.interleaved = null;
                var r = i.next,
                    s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    (s.next = r), (i.next = o);
                }
                n.pending = i;
            }
        pn = null;
    }
    return t;
}
function Eh(t, e) {
    do {
        var n = re;
        try {
            if ((xa(), (is.current = zs), Ls)) {
                for (var i = Z.memoizedState; i !== null;) {
                    var r = i.queue;
                    r !== null && (r.pending = null), (i = i.next);
                }
                Ls = !1;
            }
            if (
                ((kn = 0),
                    (ae = se = Z = null),
                    (Ai = !1),
                    (rr = 0),
                    (Da.current = null),
                    n === null || n.return === null)
            ) {
                (le = 1), (lr = e), (re = null);
                break;
            }
            e: {
                var s = t,
                    o = n.return,
                    l = n,
                    a = e;
                if (
                    ((e = fe),
                        (l.flags |= 32768),
                        a !== null && typeof a == "object" && typeof a.then == "function")
                ) {
                    var u = a,
                        c = l,
                        f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d
                            ? ((c.updateQueue = d.updateQueue),
                                (c.memoizedState = d.memoizedState),
                                (c.lanes = d.lanes))
                            : ((c.updateQueue = null), (c.memoizedState = null));
                    }
                    var h = Xu(o);
                    if (h !== null) {
                        (h.flags &= -257),
                            Gu(h, o, l, s, e),
                            h.mode & 1 && Qu(s, u, e),
                            (e = h),
                            (a = u);
                        var y = e.updateQueue;
                        if (y === null) {
                            var v = new Set();
                            v.add(a), (e.updateQueue = v);
                        } else y.add(a);
                        break e;
                    } else {
                        if (!(e & 1)) {
                            Qu(s, u, e), Na();
                            break e;
                        }
                        a = Error(C(426));
                    }
                } else if (Q && l.mode & 1) {
                    var _ = Xu(o);
                    if (_ !== null) {
                        !(_.flags & 65536) && (_.flags |= 256),
                            Gu(_, o, l, s, e),
                            va(ni(a, l));
                        break e;
                    }
                }
                (s = a = ni(a, l)),
                    le !== 4 && (le = 2),
                    Bi === null ? (Bi = [s]) : Bi.push(s),
                    (s = o);
                do {
                    switch (s.tag) {
                        case 3:
                            (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                            var p = fh(s, a, e);
                            Vu(s, p);
                            break e;
                        case 1:
                            l = a;
                            var g = s.type,
                                m = s.stateNode;
                            if (
                                !(s.flags & 128) &&
                                (typeof g.getDerivedStateFromError == "function" ||
                                    (m !== null &&
                                        typeof m.componentDidCatch == "function" &&
                                        (Yt === null || !Yt.has(m))))
                            ) {
                                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                                var x = dh(s, l, e);
                                Vu(s, x);
                                break e;
                            }
                    }
                    s = s.return;
                } while (s !== null);
            }
            Lh(n);
        } catch (w) {
            (e = w), re === n && n !== null && (re = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function Th() {
    var t = Ds.current;
    return (Ds.current = zs), t === null ? zs : t;
}
function Na() {
    (le === 0 || le === 3 || le === 2) && (le = 4),
        ue === null || (!(Sn & 268435455) && !(no & 268435455)) || It(ue, fe);
}
function Is(t, e) {
    var n = I;
    I |= 2;
    var i = Th();
    (ue !== t || fe !== e) && ((xt = null), yn(t, e));
    do
        try {
            Hm();
            break;
        } catch (r) {
            Eh(t, r);
        }
    while (!0);
    if ((xa(), (I = n), (Ds.current = i), re !== null)) throw Error(C(261));
    return (ue = null), (fe = 0), le;
}
function Hm() {
    for (; re !== null;) Oh(re);
}
function Vm() {
    for (; re !== null && !hg();) Oh(re);
}
function Oh(t) {
    var e = Dh(t.alternate, t, Ie);
    (t.memoizedProps = t.pendingProps),
        e === null ? Lh(t) : (re = e),
        (Da.current = null);
}
function Lh(t) {
    var e = t;
    do {
        var n = e.alternate;
        if (((t = e.return), e.flags & 32768)) {
            if (((n = Fm(n, e)), n !== null)) {
                (n.flags &= 32767), (re = n);
                return;
            }
            if (t !== null)
                (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
            else {
                (le = 6), (re = null);
                return;
            }
        } else if (((n = Rm(n, e, Ie)), n !== null)) {
            re = n;
            return;
        }
        if (((e = e.sibling), e !== null)) {
            re = e;
            return;
        }
        re = e = t;
    } while (e !== null);
    le === 0 && (le = 5);
}
function fn(t, e, n) {
    var i = j,
        r = Ke.transition;
    try {
        (Ke.transition = null), (j = 1), Wm(t, e, n, i);
    } finally {
        (Ke.transition = r), (j = i);
    }
    return null;
}
function Wm(t, e, n, i) {
    do Qn();
    while (Nt !== null);
    if (I & 6) throw Error(C(327));
    n = t.finishedWork;
    var r = t.finishedLanes;
    if (n === null) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
        throw Error(C(177));
    (t.callbackNode = null), (t.callbackPriority = 0);
    var s = n.lanes | n.childLanes;
    if (
        (Sg(t, s),
            t === ue && ((re = ue = null), (fe = 0)),
            (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            Ir ||
            ((Ir = !0),
                Rh(ys, function () {
                    return Qn(), null;
                })),
            (s = (n.flags & 15990) !== 0),
            n.subtreeFlags & 15990 || s)
    ) {
        (s = Ke.transition), (Ke.transition = null);
        var o = j;
        j = 1;
        var l = I;
        (I |= 4),
            (Da.current = null),
            Am(t, n),
            Ch(n, t),
            um(yl),
            (_s = !!ml),
            (yl = ml = null),
            (t.current = n),
            Nm(n),
            pg(),
            (I = l),
            (j = o),
            (Ke.transition = s);
    } else t.current = n;
    if (
        (Ir && ((Ir = !1), (Nt = t), (Fs = r)),
            (s = t.pendingLanes),
            s === 0 && (Yt = null),
            yg(n.stateNode),
            Re(t, te()),
            e !== null)
    )
        for (i = t.onRecoverableError, n = 0; n < e.length; n++)
            (r = e[n]), i(r.value, { componentStack: r.stack, digest: r.digest });
    if (Rs) throw ((Rs = !1), (t = Al), (Al = null), t);
    return (
        Fs & 1 && t.tag !== 0 && Qn(),
        (s = t.pendingLanes),
        s & 1 ? (t === Nl ? ji++ : ((ji = 0), (Nl = t))) : (ji = 0),
        sn(),
        null
    );
}
function Qn() {
    if (Nt !== null) {
        var t = fd(Fs),
            e = Ke.transition,
            n = j;
        try {
            if (((Ke.transition = null), (j = 16 > t ? 16 : t), Nt === null))
                var i = !1;
            else {
                if (((t = Nt), (Nt = null), (Fs = 0), I & 6)) throw Error(C(331));
                var r = I;
                for (I |= 4, P = t.current; P !== null;) {
                    var s = P,
                        o = s.child;
                    if (P.flags & 16) {
                        var l = s.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (P = u; P !== null;) {
                                    var c = P;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ni(8, c, s);
                                    }
                                    var f = c.child;
                                    if (f !== null) (f.return = c), (P = f);
                                    else
                                        for (; P !== null;) {
                                            c = P;
                                            var d = c.sibling,
                                                h = c.return;
                                            if ((kh(c), c === u)) {
                                                P = null;
                                                break;
                                            }
                                            if (d !== null) {
                                                (d.return = h), (P = d);
                                                break;
                                            }
                                            P = h;
                                        }
                                }
                            }
                            var y = s.alternate;
                            if (y !== null) {
                                var v = y.child;
                                if (v !== null) {
                                    y.child = null;
                                    do {
                                        var _ = v.sibling;
                                        (v.sibling = null), (v = _);
                                    } while (v !== null);
                                }
                            }
                            P = s;
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (P = o);
                    else
                        e: for (; P !== null;) {
                            if (((s = P), s.flags & 2048))
                                switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ni(9, s, s.return);
                                }
                            var p = s.sibling;
                            if (p !== null) {
                                (p.return = s.return), (P = p);
                                break e;
                            }
                            P = s.return;
                        }
                }
                var g = t.current;
                for (P = g; P !== null;) {
                    o = P;
                    var m = o.child;
                    if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (P = m);
                    else
                        e: for (o = g; P !== null;) {
                            if (((l = P), l.flags & 2048))
                                try {
                                    switch (l.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            to(9, l);
                                    }
                                } catch (w) {
                                    J(l, l.return, w);
                                }
                            if (l === o) {
                                P = null;
                                break e;
                            }
                            var x = l.sibling;
                            if (x !== null) {
                                (x.return = l.return), (P = x);
                                break e;
                            }
                            P = l.return;
                        }
                }
                if (
                    ((I = r), sn(), pt && typeof pt.onPostCommitFiberRoot == "function")
                )
                    try {
                        pt.onPostCommitFiberRoot(Ks, t);
                    } catch { }
                i = !0;
            }
            return i;
        } finally {
            (j = n), (Ke.transition = e);
        }
    }
    return !1;
}
function uc(t, e, n) {
    (e = ni(n, e)),
        (e = fh(t, e, 1)),
        (t = Ut(t, e, 1)),
        (e = Me()),
        t !== null && (pr(t, 1, e), Re(t, e));
}
function J(t, e, n) {
    if (t.tag === 3) uc(t, t, n);
    else
        for (; e !== null;) {
            if (e.tag === 3) {
                uc(e, t, n);
                break;
            } else if (e.tag === 1) {
                var i = e.stateNode;
                if (
                    typeof e.type.getDerivedStateFromError == "function" ||
                    (typeof i.componentDidCatch == "function" &&
                        (Yt === null || !Yt.has(i)))
                ) {
                    (t = ni(n, t)),
                        (t = dh(e, t, 1)),
                        (e = Ut(e, t, 1)),
                        (t = Me()),
                        e !== null && (pr(e, 1, t), Re(e, t));
                    break;
                }
            }
            e = e.return;
        }
}
function $m(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e),
        (e = Me()),
        (t.pingedLanes |= t.suspendedLanes & n),
        ue === t &&
        (fe & n) === n &&
        (le === 4 || (le === 3 && (fe & 130023424) === fe && 500 > te() - Fa)
            ? yn(t, 0)
            : (Ra |= n)),
        Re(t, e);
}
function zh(t, e) {
    e === 0 &&
        (t.mode & 1
            ? ((e = br), (br <<= 1), !(br & 130023424) && (br = 4194304))
            : (e = 1));
    var n = Me();
    (t = Et(t, e)), t !== null && (pr(t, e, n), Re(t, n));
}
function Um(t) {
    var e = t.memoizedState,
        n = 0;
    e !== null && (n = e.retryLane), zh(t, n);
}
function Ym(t, e) {
    var n = 0;
    switch (t.tag) {
        case 13:
            var i = t.stateNode,
                r = t.memoizedState;
            r !== null && (n = r.retryLane);
            break;
        case 19:
            i = t.stateNode;
            break;
        default:
            throw Error(C(314));
    }
    i !== null && i.delete(e), zh(t, n);
}
var Dh;
Dh = function (t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || ze.current) Le = !0;
        else {
            if (!(t.lanes & n) && !(e.flags & 128)) return (Le = !1), Dm(t, e, n);
            Le = !!(t.flags & 131072);
        }
    else (Le = !1), Q && e.flags & 1048576 && Ad(e, bs, e.index);
    switch (((e.lanes = 0), e.tag)) {
        case 2:
            var i = e.type;
            ss(t, e), (t = e.pendingProps);
            var r = qn(e, xe.current);
            Kn(e, n), (r = Ea(null, e, i, t, r, n));
            var s = Ta();
            return (
                (e.flags |= 1),
                typeof r == "object" &&
                    r !== null &&
                    typeof r.render == "function" &&
                    r.$$typeof === void 0
                    ? ((e.tag = 1),
                        (e.memoizedState = null),
                        (e.updateQueue = null),
                        De(i) ? ((s = !0), Ms(e)) : (s = !1),
                        (e.memoizedState =
                            r.state !== null && r.state !== void 0 ? r.state : null),
                        Sa(e),
                        (r.updater = eo),
                        (e.stateNode = r),
                        (r._reactInternals = e),
                        bl(e, i, t, n),
                        (e = Tl(null, e, i, !0, s, n)))
                    : ((e.tag = 0), Q && s && ma(e), Se(null, e, r, n), (e = e.child)),
                e
            );
        case 16:
            i = e.elementType;
            e: {
                switch (
                (ss(t, e),
                    (t = e.pendingProps),
                    (r = i._init),
                    (i = r(i._payload)),
                    (e.type = i),
                    (r = e.tag = Qm(i)),
                    (t = Je(i, t)),
                    r)
                ) {
                    case 0:
                        e = El(null, e, i, t, n);
                        break e;
                    case 1:
                        e = Ju(null, e, i, t, n);
                        break e;
                    case 11:
                        e = Zu(null, e, i, t, n);
                        break e;
                    case 14:
                        e = qu(null, e, i, Je(i.type, t), n);
                        break e;
                }
                throw Error(C(306, i, ""));
            }
            return e;
        case 0:
            return (
                (i = e.type),
                (r = e.pendingProps),
                (r = e.elementType === i ? r : Je(i, r)),
                El(t, e, i, r, n)
            );
        case 1:
            return (
                (i = e.type),
                (r = e.pendingProps),
                (r = e.elementType === i ? r : Je(i, r)),
                Ju(t, e, i, r, n)
            );
        case 3:
            e: {
                if ((mh(e), t === null)) throw Error(C(387));
                (i = e.pendingProps),
                    (s = e.memoizedState),
                    (r = s.element),
                    Wd(t, e),
                    Ts(e, i, null, n);
                var o = e.memoizedState;
                if (((i = o.element), s.isDehydrated))
                    if (
                        ((s = {
                            element: i,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions,
                        }),
                            (e.updateQueue.baseState = s),
                            (e.memoizedState = s),
                            e.flags & 256)
                    ) {
                        (r = ni(Error(C(423)), e)), (e = ec(t, e, i, n, r));
                        break e;
                    } else if (i !== r) {
                        (r = ni(Error(C(424)), e)), (e = ec(t, e, i, n, r));
                        break e;
                    } else
                        for (
                            Ae = $t(e.stateNode.containerInfo.firstChild),
                            Ne = e,
                            Q = !0,
                            tt = null,
                            n = Hd(e, null, i, n),
                            e.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((Jn(), i === r)) {
                        e = Tt(t, e, n);
                        break e;
                    }
                    Se(t, e, i, n);
                }
                e = e.child;
            }
            return e;
        case 5:
            return (
                $d(e),
                t === null && Sl(e),
                (i = e.type),
                (r = e.pendingProps),
                (s = t !== null ? t.memoizedProps : null),
                (o = r.children),
                vl(i, r) ? (o = null) : s !== null && vl(i, s) && (e.flags |= 32),
                gh(t, e),
                Se(t, e, o, n),
                e.child
            );
        case 6:
            return t === null && Sl(e), null;
        case 13:
            return yh(t, e, n);
        case 4:
            return (
                Ma(e, e.stateNode.containerInfo),
                (i = e.pendingProps),
                t === null ? (e.child = ei(e, null, i, n)) : Se(t, e, i, n),
                e.child
            );
        case 11:
            return (
                (i = e.type),
                (r = e.pendingProps),
                (r = e.elementType === i ? r : Je(i, r)),
                Zu(t, e, i, r, n)
            );
        case 7:
            return Se(t, e, e.pendingProps, n), e.child;
        case 8:
            return Se(t, e, e.pendingProps.children, n), e.child;
        case 12:
            return Se(t, e, e.pendingProps.children, n), e.child;
        case 10:
            e: {
                if (
                    ((i = e.type._context),
                        (r = e.pendingProps),
                        (s = e.memoizedProps),
                        (o = r.value),
                        V(Ps, i._currentValue),
                        (i._currentValue = o),
                        s !== null)
                )
                    if (ot(s.value, o)) {
                        if (s.children === r.children && !ze.current) {
                            e = Tt(t, e, n);
                            break e;
                        }
                    } else
                        for (s = e.child, s !== null && (s.return = e); s !== null;) {
                            var l = s.dependencies;
                            if (l !== null) {
                                o = s.child;
                                for (var a = l.firstContext; a !== null;) {
                                    if (a.context === i) {
                                        if (s.tag === 1) {
                                            (a = Ct(-1, n & -n)), (a.tag = 2);
                                            var u = s.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null
                                                    ? (a.next = a)
                                                    : ((a.next = c.next), (c.next = a)),
                                                    (u.pending = a);
                                            }
                                        }
                                        (s.lanes |= n),
                                            (a = s.alternate),
                                            a !== null && (a.lanes |= n),
                                            Ml(s.return, n, e),
                                            (l.lanes |= n);
                                        break;
                                    }
                                    a = a.next;
                                }
                            } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
                            else if (s.tag === 18) {
                                if (((o = s.return), o === null)) throw Error(C(341));
                                (o.lanes |= n),
                                    (l = o.alternate),
                                    l !== null && (l.lanes |= n),
                                    Ml(o, n, e),
                                    (o = s.sibling);
                            } else o = s.child;
                            if (o !== null) o.return = s;
                            else
                                for (o = s; o !== null;) {
                                    if (o === e) {
                                        o = null;
                                        break;
                                    }
                                    if (((s = o.sibling), s !== null)) {
                                        (s.return = o.return), (o = s);
                                        break;
                                    }
                                    o = o.return;
                                }
                            s = o;
                        }
                Se(t, e, r.children, n), (e = e.child);
            }
            return e;
        case 9:
            return (
                (r = e.type),
                (i = e.pendingProps.children),
                Kn(e, n),
                (r = Qe(r)),
                (i = i(r)),
                (e.flags |= 1),
                Se(t, e, i, n),
                e.child
            );
        case 14:
            return (
                (i = e.type),
                (r = Je(i, e.pendingProps)),
                (r = Je(i.type, r)),
                qu(t, e, i, r, n)
            );
        case 15:
            return hh(t, e, e.type, e.pendingProps, n);
        case 17:
            return (
                (i = e.type),
                (r = e.pendingProps),
                (r = e.elementType === i ? r : Je(i, r)),
                ss(t, e),
                (e.tag = 1),
                De(i) ? ((t = !0), Ms(e)) : (t = !1),
                Kn(e, n),
                ch(e, i, r),
                bl(e, i, r, n),
                Tl(null, e, i, !0, t, n)
            );
        case 19:
            return vh(t, e, n);
        case 22:
            return ph(t, e, n);
    }
    throw Error(C(156, e.tag));
};
function Rh(t, e) {
    return ld(t, e);
}
function Km(t, e, n, i) {
    (this.tag = t),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = e),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
            null),
        (this.mode = i),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Ue(t, e, n, i) {
    return new Km(t, e, n, i);
}
function Ba(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
}
function Qm(t) {
    if (typeof t == "function") return Ba(t) ? 1 : 0;
    if (t != null) {
        if (((t = t.$$typeof), t === ra)) return 11;
        if (t === sa) return 14;
    }
    return 2;
}
function Qt(t, e) {
    var n = t.alternate;
    return (
        n === null
            ? ((n = Ue(t.tag, e, t.key, t.mode)),
                (n.elementType = t.elementType),
                (n.type = t.type),
                (n.stateNode = t.stateNode),
                (n.alternate = t),
                (t.alternate = n))
            : ((n.pendingProps = e),
                (n.type = t.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
        (n.flags = t.flags & 14680064),
        (n.childLanes = t.childLanes),
        (n.lanes = t.lanes),
        (n.child = t.child),
        (n.memoizedProps = t.memoizedProps),
        (n.memoizedState = t.memoizedState),
        (n.updateQueue = t.updateQueue),
        (e = t.dependencies),
        (n.dependencies =
            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
        (n.sibling = t.sibling),
        (n.index = t.index),
        (n.ref = t.ref),
        n
    );
}
function as(t, e, n, i, r, s) {
    var o = 2;
    if (((i = t), typeof t == "function")) Ba(t) && (o = 1);
    else if (typeof t == "string") o = 5;
    else
        e: switch (t) {
            case Ln:
                return vn(n.children, r, s, e);
            case ia:
                (o = 8), (r |= 8);
                break;
            case Go:
                return (
                    (t = Ue(12, n, e, r | 2)), (t.elementType = Go), (t.lanes = s), t
                );
            case Zo:
                return (t = Ue(13, n, e, r)), (t.elementType = Zo), (t.lanes = s), t;
            case qo:
                return (t = Ue(19, n, e, r)), (t.elementType = qo), (t.lanes = s), t;
            case $f:
                return io(n, r, s, e);
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                        case Vf:
                            o = 10;
                            break e;
                        case Wf:
                            o = 9;
                            break e;
                        case ra:
                            o = 11;
                            break e;
                        case sa:
                            o = 14;
                            break e;
                        case Dt:
                            (o = 16), (i = null);
                            break e;
                    }
                throw Error(C(130, t == null ? t : typeof t, ""));
        }
    return (
        (e = Ue(o, n, e, r)), (e.elementType = t), (e.type = i), (e.lanes = s), e
    );
}
function vn(t, e, n, i) {
    return (t = Ue(7, t, i, e)), (t.lanes = n), t;
}
function io(t, e, n, i) {
    return (
        (t = Ue(22, t, i, e)),
        (t.elementType = $f),
        (t.lanes = n),
        (t.stateNode = { isHidden: !1 }),
        t
    );
}
function Io(t, e, n) {
    return (t = Ue(6, t, null, e)), (t.lanes = n), t;
}
function Ao(t, e, n) {
    return (
        (e = Ue(4, t.children !== null ? t.children : [], t.key, e)),
        (e.lanes = n),
        (e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation,
        }),
        e
    );
}
function Xm(t, e, n, i, r) {
    (this.tag = e),
        (this.containerInfo = t),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = yo(0)),
        (this.expirationTimes = yo(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
            0),
        (this.entanglements = yo(0)),
        (this.identifierPrefix = i),
        (this.onRecoverableError = r),
        (this.mutableSourceEagerHydrationData = null);
}
function ja(t, e, n, i, r, s, o, l, a) {
    return (
        (t = new Xm(t, e, n, l, a)),
        e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
        (s = Ue(3, null, null, e)),
        (t.current = s),
        (s.stateNode = t),
        (s.memoizedState = {
            element: i,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        Sa(s),
        t
    );
}
function Gm(t, e, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: On,
        key: i == null ? null : "" + i,
        children: t,
        containerInfo: e,
        implementation: n,
    };
}
function Fh(t) {
    if (!t) return Jt;
    t = t._reactInternals;
    e: {
        if (Pn(t) !== t || t.tag !== 1) throw Error(C(170));
        var e = t;
        do {
            switch (e.tag) {
                case 3:
                    e = e.stateNode.context;
                    break e;
                case 1:
                    if (De(e.type)) {
                        e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            e = e.return;
        } while (e !== null);
        throw Error(C(171));
    }
    if (t.tag === 1) {
        var n = t.type;
        if (De(n)) return Fd(t, n, e);
    }
    return e;
}
function Ih(t, e, n, i, r, s, o, l, a) {
    return (
        (t = ja(n, i, !0, t, r, s, o, l, a)),
        (t.context = Fh(null)),
        (n = t.current),
        (i = Me()),
        (r = Kt(n)),
        (s = Ct(i, r)),
        (s.callback = e ?? null),
        Ut(n, s, r),
        (t.current.lanes = r),
        pr(t, r, i),
        Re(t, i),
        t
    );
}
function ro(t, e, n, i) {
    var r = e.current,
        s = Me(),
        o = Kt(r);
    return (
        (n = Fh(n)),
        e.context === null ? (e.context = n) : (e.pendingContext = n),
        (e = Ct(s, o)),
        (e.payload = { element: t }),
        (i = i === void 0 ? null : i),
        i !== null && (e.callback = i),
        (t = Ut(r, e, o)),
        t !== null && (st(t, r, o, s), ns(t, r, o)),
        o
    );
}
function As(t) {
    if (((t = t.current), !t.child)) return null;
    switch (t.child.tag) {
        case 5:
            return t.child.stateNode;
        default:
            return t.child.stateNode;
    }
}
function cc(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e;
    }
}
function Ha(t, e) {
    cc(t, e), (t = t.alternate) && cc(t, e);
}
function Zm() {
    return null;
}
var Ah =
    typeof reportError == "function"
        ? reportError
        : function (t) {
            console.error(t);
        };
function Va(t) {
    this._internalRoot = t;
}
so.prototype.render = Va.prototype.render = function (t) {
    var e = this._internalRoot;
    if (e === null) throw Error(C(409));
    ro(t, e, null, null);
};
so.prototype.unmount = Va.prototype.unmount = function () {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Mn(function () {
            ro(null, t, null, null);
        }),
            (e[Pt] = null);
    }
};
function so(t) {
    this._internalRoot = t;
}
so.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
        var e = pd();
        t = { blockedOn: null, target: t, priority: e };
        for (var n = 0; n < Ft.length && e !== 0 && e < Ft[n].priority; n++);
        Ft.splice(n, 0, t), n === 0 && md(t);
    }
};
function Wa(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function oo(t) {
    return !(
        !t ||
        (t.nodeType !== 1 &&
            t.nodeType !== 9 &&
            t.nodeType !== 11 &&
            (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
    );
}
function fc() { }
function qm(t, e, n, i, r) {
    if (r) {
        if (typeof i == "function") {
            var s = i;
            i = function () {
                var u = As(o);
                s.call(u);
            };
        }
        var o = Ih(e, i, t, 0, null, !1, !1, "", fc);
        return (
            (t._reactRootContainer = o),
            (t[Pt] = o.current),
            Ji(t.nodeType === 8 ? t.parentNode : t),
            Mn(),
            o
        );
    }
    for (; (r = t.lastChild);) t.removeChild(r);
    if (typeof i == "function") {
        var l = i;
        i = function () {
            var u = As(a);
            l.call(u);
        };
    }
    var a = ja(t, 0, !1, null, null, !1, !1, "", fc);
    return (
        (t._reactRootContainer = a),
        (t[Pt] = a.current),
        Ji(t.nodeType === 8 ? t.parentNode : t),
        Mn(function () {
            ro(e, a, n, i);
        }),
        a
    );
}
function lo(t, e, n, i, r) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof r == "function") {
            var l = r;
            r = function () {
                var a = As(o);
                l.call(a);
            };
        }
        ro(e, o, t, r);
    } else o = qm(n, e, t, r, i);
    return As(o);
}
dd = function (t) {
    switch (t.tag) {
        case 3:
            var e = t.stateNode;
            if (e.current.memoizedState.isDehydrated) {
                var n = bi(e.pendingLanes);
                n !== 0 &&
                    (aa(e, n | 1), Re(e, te()), !(I & 6) && ((ii = te() + 500), sn()));
            }
            break;
        case 13:
            Mn(function () {
                var i = Et(t, 1);
                if (i !== null) {
                    var r = Me();
                    st(i, t, 1, r);
                }
            }),
                Ha(t, 1);
    }
};
ua = function (t) {
    if (t.tag === 13) {
        var e = Et(t, 134217728);
        if (e !== null) {
            var n = Me();
            st(e, t, 134217728, n);
        }
        Ha(t, 134217728);
    }
};
hd = function (t) {
    if (t.tag === 13) {
        var e = Kt(t),
            n = Et(t, e);
        if (n !== null) {
            var i = Me();
            st(n, t, e, i);
        }
        Ha(t, e);
    }
};
pd = function () {
    return j;
};
gd = function (t, e) {
    var n = j;
    try {
        return (j = t), e();
    } finally {
        j = n;
    }
};
al = function (t, e, n) {
    switch (e) {
        case "input":
            if ((tl(t, n), (e = n.name), n.type === "radio" && e != null)) {
                for (n = t; n.parentNode;) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
                    ),
                    e = 0;
                    e < n.length;
                    e++
                ) {
                    var i = n[e];
                    if (i !== t && i.form === t.form) {
                        var r = Zs(i);
                        if (!r) throw Error(C(90));
                        Yf(i), tl(i, r);
                    }
                }
            }
            break;
        case "textarea":
            Qf(t, n);
            break;
        case "select":
            (e = n.value), e != null && Wn(t, !!n.multiple, e, !1);
    }
};
td = Ia;
nd = Mn;
var Jm = { usingClientEntryPoint: !1, Events: [mr, Fn, Zs, Jf, ed, Ia] },
    vi = {
        findFiberByHostInstance: hn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom",
    },
    e0 = {
        bundleType: vi.bundleType,
        version: vi.version,
        rendererPackageName: vi.rendererPackageName,
        rendererConfig: vi.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Ot.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (t) {
            return (t = sd(t)), t === null ? null : t.stateNode;
        },
        findFiberByHostInstance: vi.findFiberByHostInstance || Zm,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ar = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ar.isDisabled && Ar.supportsFiber)
        try {
            (Ks = Ar.inject(e0)), (pt = Ar);
        } catch { }
}
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jm;
je.createPortal = function (t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Wa(e)) throw Error(C(200));
    return Gm(t, e, null, n);
};
je.createRoot = function (t, e) {
    if (!Wa(t)) throw Error(C(299));
    var n = !1,
        i = "",
        r = Ah;
    return (
        e != null &&
        (e.unstable_strictMode === !0 && (n = !0),
            e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
            e.onRecoverableError !== void 0 && (r = e.onRecoverableError)),
        (e = ja(t, 1, !1, null, null, n, !1, i, r)),
        (t[Pt] = e.current),
        Ji(t.nodeType === 8 ? t.parentNode : t),
        new Va(e)
    );
};
je.findDOMNode = function (t) {
    if (t == null) return null;
    if (t.nodeType === 1) return t;
    var e = t._reactInternals;
    if (e === void 0)
        throw typeof t.render == "function"
            ? Error(C(188))
            : ((t = Object.keys(t).join(",")), Error(C(268, t)));
    return (t = sd(e)), (t = t === null ? null : t.stateNode), t;
};
je.flushSync = function (t) {
    return Mn(t);
};
je.hydrate = function (t, e, n) {
    if (!oo(e)) throw Error(C(200));
    return lo(null, t, e, !0, n);
};
je.hydrateRoot = function (t, e, n) {
    if (!Wa(t)) throw Error(C(405));
    var i = (n != null && n.hydratedSources) || null,
        r = !1,
        s = "",
        o = Ah;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (r = !0),
                n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
                n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
            (e = Ih(e, null, t, 1, n ?? null, r, !1, s, o)),
            (t[Pt] = e.current),
            Ji(t),
            i)
    )
        for (t = 0; t < i.length; t++)
            (n = i[t]),
                (r = n._getVersion),
                (r = r(n._source)),
                e.mutableSourceEagerHydrationData == null
                    ? (e.mutableSourceEagerHydrationData = [n, r])
                    : e.mutableSourceEagerHydrationData.push(n, r);
    return new so(e);
};
je.render = function (t, e, n) {
    if (!oo(e)) throw Error(C(200));
    return lo(null, t, e, !1, n);
};
je.unmountComponentAtNode = function (t) {
    if (!oo(t)) throw Error(C(40));
    return t._reactRootContainer
        ? (Mn(function () {
            lo(null, null, t, !1, function () {
                (t._reactRootContainer = null), (t[Pt] = null);
            });
        }),
            !0)
        : !1;
};
je.unstable_batchedUpdates = Ia;
je.unstable_renderSubtreeIntoContainer = function (t, e, n, i) {
    if (!oo(n)) throw Error(C(200));
    if (t == null || t._reactInternals === void 0) throw Error(C(38));
    return lo(t, e, n, !1, i);
};
je.version = "18.3.1-next-f1338f8080-20240426";
function Nh() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nh);
        } catch (t) {
            console.error(t);
        }
}
Nh(), (Nf.exports = je);
var t0 = Nf.exports,
    Bh,
    dc = t0;
(Bh = dc.createRoot), dc.hydrateRoot;
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function vr(t) {
    return (t + 0.5) | 0;
}
const Bt = (t, e, n) => Math.max(Math.min(t, n), e);
function Ei(t) {
    return Bt(vr(t * 2.55), 0, 255);
}
function Xt(t) {
    return Bt(vr(t * 255), 0, 255);
}
function kt(t) {
    return Bt(vr(t / 2.55) / 100, 0, 1);
}
function hc(t) {
    return Bt(vr(t * 100), 0, 100);
}
const Ve = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
},
    Hl = [..."0123456789ABCDEF"],
    n0 = (t) => Hl[t & 15],
    i0 = (t) => Hl[(t & 240) >> 4] + Hl[t & 15],
    Nr = (t) => (t & 240) >> 4 === (t & 15),
    r0 = (t) => Nr(t.r) && Nr(t.g) && Nr(t.b) && Nr(t.a);
function s0(t) {
    var e = t.length,
        n;
    return (
        t[0] === "#" &&
        (e === 4 || e === 5
            ? (n = {
                r: 255 & (Ve[t[1]] * 17),
                g: 255 & (Ve[t[2]] * 17),
                b: 255 & (Ve[t[3]] * 17),
                a: e === 5 ? Ve[t[4]] * 17 : 255,
            })
            : (e === 7 || e === 9) &&
            (n = {
                r: (Ve[t[1]] << 4) | Ve[t[2]],
                g: (Ve[t[3]] << 4) | Ve[t[4]],
                b: (Ve[t[5]] << 4) | Ve[t[6]],
                a: e === 9 ? (Ve[t[7]] << 4) | Ve[t[8]] : 255,
            })),
        n
    );
}
const o0 = (t, e) => (t < 255 ? e(t) : "");
function l0(t) {
    var e = r0(t) ? n0 : i0;
    return t ? "#" + e(t.r) + e(t.g) + e(t.b) + o0(t.a, e) : void 0;
}
const a0 =
    /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function jh(t, e, n) {
    const i = e * Math.min(n, 1 - n),
        r = (s, o = (s + t / 30) % 12) =>
            n - i * Math.max(Math.min(o - 3, 9 - o, 1), -1);
    return [r(0), r(8), r(4)];
}
function u0(t, e, n) {
    const i = (r, s = (r + t / 60) % 6) =>
        n - n * e * Math.max(Math.min(s, 4 - s, 1), 0);
    return [i(5), i(3), i(1)];
}
function c0(t, e, n) {
    const i = jh(t, 1, 0.5);
    let r;
    for (e + n > 1 && ((r = 1 / (e + n)), (e *= r), (n *= r)), r = 0; r < 3; r++)
        (i[r] *= 1 - e - n), (i[r] += e);
    return i;
}
function f0(t, e, n, i, r) {
    return t === r
        ? (e - n) / i + (e < n ? 6 : 0)
        : e === r
            ? (n - t) / i + 2
            : (t - e) / i + 4;
}
function $a(t) {
    const n = t.r / 255,
        i = t.g / 255,
        r = t.b / 255,
        s = Math.max(n, i, r),
        o = Math.min(n, i, r),
        l = (s + o) / 2;
    let a, u, c;
    return (
        s !== o &&
        ((c = s - o),
            (u = l > 0.5 ? c / (2 - s - o) : c / (s + o)),
            (a = f0(n, i, r, c, s)),
            (a = a * 60 + 0.5)),
        [a | 0, u || 0, l]
    );
}
function Ua(t, e, n, i) {
    return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, i)).map(Xt);
}
function Ya(t, e, n) {
    return Ua(jh, t, e, n);
}
function d0(t, e, n) {
    return Ua(c0, t, e, n);
}
function h0(t, e, n) {
    return Ua(u0, t, e, n);
}
function Hh(t) {
    return ((t % 360) + 360) % 360;
}
function p0(t) {
    const e = a0.exec(t);
    let n = 255,
        i;
    if (!e) return;
    e[5] !== i && (n = e[6] ? Ei(+e[5]) : Xt(+e[5]));
    const r = Hh(+e[2]),
        s = +e[3] / 100,
        o = +e[4] / 100;
    return (
        e[1] === "hwb"
            ? (i = d0(r, s, o))
            : e[1] === "hsv"
                ? (i = h0(r, s, o))
                : (i = Ya(r, s, o)),
        { r: i[0], g: i[1], b: i[2], a: n }
    );
}
function g0(t, e) {
    var n = $a(t);
    (n[0] = Hh(n[0] + e)), (n = Ya(n)), (t.r = n[0]), (t.g = n[1]), (t.b = n[2]);
}
function m0(t) {
    if (!t) return;
    const e = $a(t),
        n = e[0],
        i = hc(e[1]),
        r = hc(e[2]);
    return t.a < 255
        ? `hsla(${n}, ${i}%, ${r}%, ${kt(t.a)})`
        : `hsl(${n}, ${i}%, ${r}%)`;
}
const pc = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
},
    gc = {
        OiceXe: "f0f8ff",
        antiquewEte: "faebd7",
        aqua: "ffff",
        aquamarRe: "7fffd4",
        azuY: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "0",
        blanKedOmond: "ffebcd",
        Xe: "ff",
        XeviTet: "8a2be2",
        bPwn: "a52a2a",
        burlywood: "deb887",
        caMtXe: "5f9ea0",
        KartYuse: "7fff00",
        KocTate: "d2691e",
        cSO: "ff7f50",
        cSnflowerXe: "6495ed",
        cSnsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "ffff",
        xXe: "8b",
        xcyan: "8b8b",
        xgTMnPd: "b8860b",
        xWay: "a9a9a9",
        xgYF: "6400",
        xgYy: "a9a9a9",
        xkhaki: "bdb76b",
        xmagFta: "8b008b",
        xTivegYF: "556b2f",
        xSange: "ff8c00",
        xScEd: "9932cc",
        xYd: "8b0000",
        xsOmon: "e9967a",
        xsHgYF: "8fbc8f",
        xUXe: "483d8b",
        xUWay: "2f4f4f",
        xUgYy: "2f4f4f",
        xQe: "ced1",
        xviTet: "9400d3",
        dAppRk: "ff1493",
        dApskyXe: "bfff",
        dimWay: "696969",
        dimgYy: "696969",
        dodgerXe: "1e90ff",
        fiYbrick: "b22222",
        flSOwEte: "fffaf0",
        foYstWAn: "228b22",
        fuKsia: "ff00ff",
        gaRsbSo: "dcdcdc",
        ghostwEte: "f8f8ff",
        gTd: "ffd700",
        gTMnPd: "daa520",
        Way: "808080",
        gYF: "8000",
        gYFLw: "adff2f",
        gYy: "808080",
        honeyMw: "f0fff0",
        hotpRk: "ff69b4",
        RdianYd: "cd5c5c",
        Rdigo: "4b0082",
        ivSy: "fffff0",
        khaki: "f0e68c",
        lavFMr: "e6e6fa",
        lavFMrXsh: "fff0f5",
        lawngYF: "7cfc00",
        NmoncEffon: "fffacd",
        ZXe: "add8e6",
        ZcSO: "f08080",
        Zcyan: "e0ffff",
        ZgTMnPdLw: "fafad2",
        ZWay: "d3d3d3",
        ZgYF: "90ee90",
        ZgYy: "d3d3d3",
        ZpRk: "ffb6c1",
        ZsOmon: "ffa07a",
        ZsHgYF: "20b2aa",
        ZskyXe: "87cefa",
        ZUWay: "778899",
        ZUgYy: "778899",
        ZstAlXe: "b0c4de",
        ZLw: "ffffe0",
        lime: "ff00",
        limegYF: "32cd32",
        lRF: "faf0e6",
        magFta: "ff00ff",
        maPon: "800000",
        VaquamarRe: "66cdaa",
        VXe: "cd",
        VScEd: "ba55d3",
        VpurpN: "9370db",
        VsHgYF: "3cb371",
        VUXe: "7b68ee",
        VsprRggYF: "fa9a",
        VQe: "48d1cc",
        VviTetYd: "c71585",
        midnightXe: "191970",
        mRtcYam: "f5fffa",
        mistyPse: "ffe4e1",
        moccasR: "ffe4b5",
        navajowEte: "ffdead",
        navy: "80",
        Tdlace: "fdf5e6",
        Tive: "808000",
        TivedBb: "6b8e23",
        Sange: "ffa500",
        SangeYd: "ff4500",
        ScEd: "da70d6",
        pOegTMnPd: "eee8aa",
        pOegYF: "98fb98",
        pOeQe: "afeeee",
        pOeviTetYd: "db7093",
        papayawEp: "ffefd5",
        pHKpuff: "ffdab9",
        peru: "cd853f",
        pRk: "ffc0cb",
        plum: "dda0dd",
        powMrXe: "b0e0e6",
        purpN: "800080",
        YbeccapurpN: "663399",
        Yd: "ff0000",
        Psybrown: "bc8f8f",
        PyOXe: "4169e1",
        saddNbPwn: "8b4513",
        sOmon: "fa8072",
        sandybPwn: "f4a460",
        sHgYF: "2e8b57",
        sHshell: "fff5ee",
        siFna: "a0522d",
        silver: "c0c0c0",
        skyXe: "87ceeb",
        UXe: "6a5acd",
        UWay: "708090",
        UgYy: "708090",
        snow: "fffafa",
        sprRggYF: "ff7f",
        stAlXe: "4682b4",
        tan: "d2b48c",
        teO: "8080",
        tEstN: "d8bfd8",
        tomato: "ff6347",
        Qe: "40e0d0",
        viTet: "ee82ee",
        JHt: "f5deb3",
        wEte: "ffffff",
        wEtesmoke: "f5f5f5",
        Lw: "ffff00",
        LwgYF: "9acd32",
    };
function y0() {
    const t = {},
        e = Object.keys(gc),
        n = Object.keys(pc);
    let i, r, s, o, l;
    for (i = 0; i < e.length; i++) {
        for (o = l = e[i], r = 0; r < n.length; r++)
            (s = n[r]), (l = l.replace(s, pc[s]));
        (s = parseInt(gc[o], 16)),
            (t[l] = [(s >> 16) & 255, (s >> 8) & 255, s & 255]);
    }
    return t;
}
let Br;
function v0(t) {
    Br || ((Br = y0()), (Br.transparent = [0, 0, 0, 0]));
    const e = Br[t.toLowerCase()];
    return e && { r: e[0], g: e[1], b: e[2], a: e.length === 4 ? e[3] : 255 };
}
const _0 =
    /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function x0(t) {
    const e = _0.exec(t);
    let n = 255,
        i,
        r,
        s;
    if (e) {
        if (e[7] !== i) {
            const o = +e[7];
            n = e[8] ? Ei(o) : Bt(o * 255, 0, 255);
        }
        return (
            (i = +e[1]),
            (r = +e[3]),
            (s = +e[5]),
            (i = 255 & (e[2] ? Ei(i) : Bt(i, 0, 255))),
            (r = 255 & (e[4] ? Ei(r) : Bt(r, 0, 255))),
            (s = 255 & (e[6] ? Ei(s) : Bt(s, 0, 255))),
            { r: i, g: r, b: s, a: n }
        );
    }
}
function w0(t) {
    return (
        t &&
        (t.a < 255
            ? `rgba(${t.r}, ${t.g}, ${t.b}, ${kt(t.a)})`
            : `rgb(${t.r}, ${t.g}, ${t.b})`)
    );
}
const No = (t) =>
    t <= 0.0031308 ? t * 12.92 : Math.pow(t, 1 / 2.4) * 1.055 - 0.055,
    Tn = (t) => (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4));
function k0(t, e, n) {
    const i = Tn(kt(t.r)),
        r = Tn(kt(t.g)),
        s = Tn(kt(t.b));
    return {
        r: Xt(No(i + n * (Tn(kt(e.r)) - i))),
        g: Xt(No(r + n * (Tn(kt(e.g)) - r))),
        b: Xt(No(s + n * (Tn(kt(e.b)) - s))),
        a: t.a + n * (e.a - t.a),
    };
}
function jr(t, e, n) {
    if (t) {
        let i = $a(t);
        (i[e] = Math.max(0, Math.min(i[e] + i[e] * n, e === 0 ? 360 : 1))),
            (i = Ya(i)),
            (t.r = i[0]),
            (t.g = i[1]),
            (t.b = i[2]);
    }
}
function Vh(t, e) {
    return t && Object.assign(e || {}, t);
}
function mc(t) {
    var e = { r: 0, g: 0, b: 0, a: 255 };
    return (
        Array.isArray(t)
            ? t.length >= 3 &&
            ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
                t.length > 3 && (e.a = Xt(t[3])))
            : ((e = Vh(t, { r: 0, g: 0, b: 0, a: 1 })), (e.a = Xt(e.a))),
        e
    );
}
function S0(t) {
    return t.charAt(0) === "r" ? x0(t) : p0(t);
}
class ar {
    constructor(e) {
        if (e instanceof ar) return e;
        const n = typeof e;
        let i;
        n === "object"
            ? (i = mc(e))
            : n === "string" && (i = s0(e) || v0(e) || S0(e)),
            (this._rgb = i),
            (this._valid = !!i);
    }
    get valid() {
        return this._valid;
    }
    get rgb() {
        var e = Vh(this._rgb);
        return e && (e.a = kt(e.a)), e;
    }
    set rgb(e) {
        this._rgb = mc(e);
    }
    rgbString() {
        return this._valid ? w0(this._rgb) : void 0;
    }
    hexString() {
        return this._valid ? l0(this._rgb) : void 0;
    }
    hslString() {
        return this._valid ? m0(this._rgb) : void 0;
    }
    mix(e, n) {
        if (e) {
            const i = this.rgb,
                r = e.rgb;
            let s;
            const o = n === s ? 0.5 : n,
                l = 2 * o - 1,
                a = i.a - r.a,
                u = ((l * a === -1 ? l : (l + a) / (1 + l * a)) + 1) / 2;
            (s = 1 - u),
                (i.r = 255 & (u * i.r + s * r.r + 0.5)),
                (i.g = 255 & (u * i.g + s * r.g + 0.5)),
                (i.b = 255 & (u * i.b + s * r.b + 0.5)),
                (i.a = o * i.a + (1 - o) * r.a),
                (this.rgb = i);
        }
        return this;
    }
    interpolate(e, n) {
        return e && (this._rgb = k0(this._rgb, e._rgb, n)), this;
    }
    clone() {
        return new ar(this.rgb);
    }
    alpha(e) {
        return (this._rgb.a = Xt(e)), this;
    }
    clearer(e) {
        const n = this._rgb;
        return (n.a *= 1 - e), this;
    }
    greyscale() {
        const e = this._rgb,
            n = vr(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
        return (e.r = e.g = e.b = n), this;
    }
    opaquer(e) {
        const n = this._rgb;
        return (n.a *= 1 + e), this;
    }
    negate() {
        const e = this._rgb;
        return (e.r = 255 - e.r), (e.g = 255 - e.g), (e.b = 255 - e.b), this;
    }
    lighten(e) {
        return jr(this._rgb, 2, e), this;
    }
    darken(e) {
        return jr(this._rgb, 2, -e), this;
    }
    saturate(e) {
        return jr(this._rgb, 1, e), this;
    }
    desaturate(e) {
        return jr(this._rgb, 1, -e), this;
    }
    rotate(e) {
        return g0(this._rgb, e), this;
    }
}
/*!
 * Chart.js v4.4.4
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ function yt() { }
const M0 = (() => {
    let t = 0;
    return () => t++;
})();
function Y(t) {
    return t === null || typeof t > "u";
}
function oe(t) {
    if (Array.isArray && Array.isArray(t)) return !0;
    const e = Object.prototype.toString.call(t);
    return e.slice(0, 7) === "[object" && e.slice(-6) === "Array]";
}
function A(t) {
    return t !== null && Object.prototype.toString.call(t) === "[object Object]";
}
function Ge(t) {
    return (typeof t == "number" || t instanceof Number) && isFinite(+t);
}
function ut(t, e) {
    return Ge(t) ? t : e;
}
function B(t, e) {
    return typeof t > "u" ? e : t;
}
const C0 = (t, e) =>
    typeof t == "string" && t.endsWith("%") ? (parseFloat(t) / 100) * e : +t;
function U(t, e, n) {
    if (t && typeof t.call == "function") return t.apply(n, e);
}
function N(t, e, n, i) {
    let r, s, o;
    if (oe(t)) for (s = t.length, r = 0; r < s; r++) e.call(n, t[r], r);
    else if (A(t))
        for (o = Object.keys(t), s = o.length, r = 0; r < s; r++)
            e.call(n, t[o[r]], o[r]);
}
function Ns(t, e) {
    let n, i, r, s;
    if (!t || !e || t.length !== e.length) return !1;
    for (n = 0, i = t.length; n < i; ++n)
        if (
            ((r = t[n]),
                (s = e[n]),
                r.datasetIndex !== s.datasetIndex || r.index !== s.index)
        )
            return !1;
    return !0;
}
function Bs(t) {
    if (oe(t)) return t.map(Bs);
    if (A(t)) {
        const e = Object.create(null),
            n = Object.keys(t),
            i = n.length;
        let r = 0;
        for (; r < i; ++r) e[n[r]] = Bs(t[n[r]]);
        return e;
    }
    return t;
}
function Wh(t) {
    return ["__proto__", "prototype", "constructor"].indexOf(t) === -1;
}
function b0(t, e, n, i) {
    if (!Wh(t)) return;
    const r = e[t],
        s = n[t];
    A(r) && A(s) ? ur(r, s, i) : (e[t] = Bs(s));
}
function ur(t, e, n) {
    const i = oe(e) ? e : [e],
        r = i.length;
    if (!A(t)) return t;
    n = n || {};
    const s = n.merger || b0;
    let o;
    for (let l = 0; l < r; ++l) {
        if (((o = i[l]), !A(o))) continue;
        const a = Object.keys(o);
        for (let u = 0, c = a.length; u < c; ++u) s(a[u], t, o, n);
    }
    return t;
}
function Hi(t, e) {
    return ur(t, e, { merger: P0 });
}
function P0(t, e, n) {
    if (!Wh(t)) return;
    const i = e[t],
        r = n[t];
    A(i) && A(r)
        ? Hi(i, r)
        : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = Bs(r));
}
const yc = { "": (t) => t, x: (t) => t.x, y: (t) => t.y };
function E0(t) {
    const e = t.split("."),
        n = [];
    let i = "";
    for (const r of e)
        (i += r),
            i.endsWith("\\") ? (i = i.slice(0, -1) + ".") : (n.push(i), (i = ""));
    return n;
}
function T0(t) {
    const e = E0(t);
    return (n) => {
        for (const i of e) {
            if (i === "") break;
            n = n && n[i];
        }
        return n;
    };
}
function ri(t, e) {
    return (yc[e] || (yc[e] = T0(e)))(t);
}
function Ka(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
}
const cr = (t) => typeof t < "u",
    en = (t) => typeof t == "function",
    vc = (t, e) => {
        if (t.size !== e.size) return !1;
        for (const n of t) if (!e.has(n)) return !1;
        return !0;
    };
function O0(t) {
    return t.type === "mouseup" || t.type === "click" || t.type === "contextmenu";
}
const _e = Math.PI,
    Gt = 2 * _e,
    js = Number.POSITIVE_INFINITY,
    L0 = _e / 180,
    nt = _e / 2,
    on = _e / 4,
    _c = (_e * 2) / 3,
    Vl = Math.log10,
    Zt = Math.sign;
function us(t, e, n) {
    return Math.abs(t - e) < n;
}
function xc(t) {
    const e = Math.round(t);
    t = us(t, e, t / 1e3) ? e : t;
    const n = Math.pow(10, Math.floor(Vl(t))),
        i = t / n;
    return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n;
}
function z0(t) {
    const e = [],
        n = Math.sqrt(t);
    let i;
    for (i = 1; i < n; i++) t % i === 0 && (e.push(i), e.push(t / i));
    return n === (n | 0) && e.push(n), e.sort((r, s) => r - s).pop(), e;
}
function Hs(t) {
    return !isNaN(parseFloat(t)) && isFinite(t);
}
function D0(t, e) {
    const n = Math.round(t);
    return n - e <= t && n + e >= t;
}
function R0(t, e, n) {
    let i, r, s;
    for (i = 0, r = t.length; i < r; i++)
        (s = t[i][n]),
            isNaN(s) || ((e.min = Math.min(e.min, s)), (e.max = Math.max(e.max, s)));
}
function mn(t) {
    return t * (_e / 180);
}
function F0(t) {
    return t * (180 / _e);
}
function wc(t) {
    if (!Ge(t)) return;
    let e = 1,
        n = 0;
    for (; Math.round(t * e) / e !== t;) (e *= 10), n++;
    return n;
}
function I0(t, e) {
    const n = e.x - t.x,
        i = e.y - t.y,
        r = Math.sqrt(n * n + i * i);
    let s = Math.atan2(i, n);
    return s < -0.5 * _e && (s += Gt), { angle: s, distance: r };
}
function A0(t, e) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function ln(t) {
    return ((t % Gt) + Gt) % Gt;
}
function N0(t, e, n, i) {
    const r = ln(t),
        s = ln(e),
        o = ln(n),
        l = ln(s - r),
        a = ln(o - r),
        u = ln(r - s),
        c = ln(r - o);
    return r === s || r === o || (i && s === o) || (l > a && u < c);
}
function it(t, e, n) {
    return Math.max(e, Math.min(n, t));
}
function B0(t) {
    return it(t, -32768, 32767);
}
function Vn(t, e, n, i = 1e-6) {
    return t >= Math.min(e, n) - i && t <= Math.max(e, n) + i;
}
function Qa(t, e, n) {
    n = n || ((o) => t[o] < e);
    let i = t.length - 1,
        r = 0,
        s;
    for (; i - r > 1;) (s = (r + i) >> 1), n(s) ? (r = s) : (i = s);
    return { lo: r, hi: i };
}
const Wl = (t, e, n, i) =>
    Qa(
        t,
        n,
        i
            ? (r) => {
                const s = t[r][e];
                return s < n || (s === n && t[r + 1][e] === n);
            }
            : (r) => t[r][e] < n
    ),
    j0 = (t, e, n) => Qa(t, n, (i) => t[i][e] >= n);
function H0(t, e, n) {
    let i = 0,
        r = t.length;
    for (; i < r && t[i] < e;) i++;
    for (; r > i && t[r - 1] > n;) r--;
    return i > 0 || r < t.length ? t.slice(i, r) : t;
}
const $h = ["push", "pop", "shift", "splice", "unshift"];
function V0(t, e) {
    if (t._chartjs) {
        t._chartjs.listeners.push(e);
        return;
    }
    Object.defineProperty(t, "_chartjs", {
        configurable: !0,
        enumerable: !1,
        value: { listeners: [e] },
    }),
        $h.forEach((n) => {
            const i = "_onData" + Ka(n),
                r = t[n];
            Object.defineProperty(t, n, {
                configurable: !0,
                enumerable: !1,
                value(...s) {
                    const o = r.apply(this, s);
                    return (
                        t._chartjs.listeners.forEach((l) => {
                            typeof l[i] == "function" && l[i](...s);
                        }),
                        o
                    );
                },
            });
        });
}
function kc(t, e) {
    const n = t._chartjs;
    if (!n) return;
    const i = n.listeners,
        r = i.indexOf(e);
    r !== -1 && i.splice(r, 1),
        !(i.length > 0) &&
        ($h.forEach((s) => {
            delete t[s];
        }),
            delete t._chartjs);
}
function Uh(t) {
    const e = new Set(t);
    return e.size === t.length ? t : Array.from(e);
}
const Yh = (function () {
    return typeof window > "u"
        ? function (t) {
            return t();
        }
        : window.requestAnimationFrame;
})();
function Kh(t, e) {
    let n = [],
        i = !1;
    return function (...r) {
        (n = r),
            i ||
            ((i = !0),
                Yh.call(window, () => {
                    (i = !1), t.apply(e, n);
                }));
    };
}
function W0(t, e) {
    let n;
    return function (...i) {
        return (
            e ? (clearTimeout(n), (n = setTimeout(t, e, i))) : t.apply(this, i), e
        );
    };
}
const Xa = (t) => (t === "start" ? "left" : t === "end" ? "right" : "center"),
    me = (t, e, n) => (t === "start" ? e : t === "end" ? n : (e + n) / 2),
    $0 = (t, e, n, i) =>
        t === (i ? "left" : "right") ? n : t === "center" ? (e + n) / 2 : e,
    Hr = (t) => t === 0 || t === 1,
    Sc = (t, e, n) =>
        -(Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * Gt) / n)),
    Mc = (t, e, n) => Math.pow(2, -10 * t) * Math.sin(((t - e) * Gt) / n) + 1,
    Vi = {
        linear: (t) => t,
        easeInQuad: (t) => t * t,
        easeOutQuad: (t) => -t * (t - 2),
        easeInOutQuad: (t) =>
            (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
        easeInCubic: (t) => t * t * t,
        easeOutCubic: (t) => (t -= 1) * t * t + 1,
        easeInOutCubic: (t) =>
            (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
        easeInQuart: (t) => t * t * t * t,
        easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
        easeInOutQuart: (t) =>
            (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
        easeInQuint: (t) => t * t * t * t * t,
        easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
        easeInOutQuint: (t) =>
            (t /= 0.5) < 1
                ? 0.5 * t * t * t * t * t
                : 0.5 * ((t -= 2) * t * t * t * t + 2),
        easeInSine: (t) => -Math.cos(t * nt) + 1,
        easeOutSine: (t) => Math.sin(t * nt),
        easeInOutSine: (t) => -0.5 * (Math.cos(_e * t) - 1),
        easeInExpo: (t) => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1))),
        easeOutExpo: (t) => (t === 1 ? 1 : -Math.pow(2, -10 * t) + 1),
        easeInOutExpo: (t) =>
            Hr(t)
                ? t
                : t < 0.5
                    ? 0.5 * Math.pow(2, 10 * (t * 2 - 1))
                    : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
        easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
        easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
        easeInOutCirc: (t) =>
            (t /= 0.5) < 1
                ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
        easeInElastic: (t) => (Hr(t) ? t : Sc(t, 0.075, 0.3)),
        easeOutElastic: (t) => (Hr(t) ? t : Mc(t, 0.075, 0.3)),
        easeInOutElastic(t) {
            return Hr(t)
                ? t
                : t < 0.5
                    ? 0.5 * Sc(t * 2, 0.1125, 0.45)
                    : 0.5 + 0.5 * Mc(t * 2 - 1, 0.1125, 0.45);
        },
        easeInBack(t) {
            return t * t * ((1.70158 + 1) * t - 1.70158);
        },
        easeOutBack(t) {
            return (t -= 1) * t * ((1.70158 + 1) * t + 1.70158) + 1;
        },
        easeInOutBack(t) {
            let e = 1.70158;
            return (t /= 0.5) < 1
                ? 0.5 * (t * t * (((e *= 1.525) + 1) * t - e))
                : 0.5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2);
        },
        easeInBounce: (t) => 1 - Vi.easeOutBounce(1 - t),
        easeOutBounce(t) {
            return t < 1 / 2.75
                ? 7.5625 * t * t
                : t < 2 / 2.75
                    ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                    : t < 2.5 / 2.75
                        ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                        : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
        },
        easeInOutBounce: (t) =>
            t < 0.5
                ? Vi.easeInBounce(t * 2) * 0.5
                : Vi.easeOutBounce(t * 2 - 1) * 0.5 + 0.5,
    };
function Qh(t) {
    if (t && typeof t == "object") {
        const e = t.toString();
        return e === "[object CanvasPattern]" || e === "[object CanvasGradient]";
    }
    return !1;
}
function Cc(t) {
    return Qh(t) ? t : new ar(t);
}
function Bo(t) {
    return Qh(t) ? t : new ar(t).saturate(0.5).darken(0.1).hexString();
}
const U0 = ["x", "y", "borderWidth", "radius", "tension"],
    Y0 = ["color", "borderColor", "backgroundColor"];
function K0(t) {
    t.set("animation", {
        delay: void 0,
        duration: 1e3,
        easing: "easeOutQuart",
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0,
    }),
        t.describe("animation", {
            _fallback: !1,
            _indexable: !1,
            _scriptable: (e) =>
                e !== "onProgress" && e !== "onComplete" && e !== "fn",
        }),
        t.set("animations", {
            colors: { type: "color", properties: Y0 },
            numbers: { type: "number", properties: U0 },
        }),
        t.describe("animations", { _fallback: "animation" }),
        t.set("transitions", {
            active: { animation: { duration: 400 } },
            resize: { animation: { duration: 0 } },
            show: {
                animations: {
                    colors: { from: "transparent" },
                    visible: { type: "boolean", duration: 0 },
                },
            },
            hide: {
                animations: {
                    colors: { to: "transparent" },
                    visible: { type: "boolean", easing: "linear", fn: (e) => e | 0 },
                },
            },
        });
}
function Q0(t) {
    t.set("layout", {
        autoPadding: !0,
        padding: { top: 0, right: 0, bottom: 0, left: 0 },
    });
}
const bc = new Map();
function X0(t, e) {
    e = e || {};
    const n = t + JSON.stringify(e);
    let i = bc.get(n);
    return i || ((i = new Intl.NumberFormat(t, e)), bc.set(n, i)), i;
}
function Xh(t, e, n) {
    return X0(e, n).format(t);
}
const Gh = {
    values(t) {
        return oe(t) ? t : "" + t;
    },
    numeric(t, e, n) {
        if (t === 0) return "0";
        const i = this.chart.options.locale;
        let r,
            s = t;
        if (n.length > 1) {
            const u = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
            (u < 1e-4 || u > 1e15) && (r = "scientific"), (s = G0(t, n));
        }
        const o = Vl(Math.abs(s)),
            l = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0),
            a = { notation: r, minimumFractionDigits: l, maximumFractionDigits: l };
        return Object.assign(a, this.options.ticks.format), Xh(t, i, a);
    },
    logarithmic(t, e, n) {
        if (t === 0) return "0";
        const i = n[e].significand || t / Math.pow(10, Math.floor(Vl(t)));
        return [1, 2, 3, 5, 10, 15].includes(i) || e > 0.8 * n.length
            ? Gh.numeric.call(this, t, e, n)
            : "";
    },
};
function G0(t, e) {
    let n = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
    return Math.abs(n) >= 1 && t !== Math.floor(t) && (n = t - Math.floor(t)), n;
}
var Zh = { formatters: Gh };
function Z0(t) {
    t.set("scale", {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: "ticks",
        clip: !0,
        grace: 0,
        grid: {
            display: !0,
            lineWidth: 1,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickLength: 8,
            tickWidth: (e, n) => n.lineWidth,
            tickColor: (e, n) => n.color,
            offset: !1,
        },
        border: { display: !0, dash: [], dashOffset: 0, width: 1 },
        title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
        ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            textStrokeWidth: 0,
            textStrokeColor: "",
            padding: 3,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: Zh.formatters.values,
            minor: {},
            major: {},
            align: "center",
            crossAlign: "near",
            showLabelBackdrop: !1,
            backdropColor: "rgba(255, 255, 255, 0.75)",
            backdropPadding: 2,
        },
    }),
        t.route("scale.ticks", "color", "", "color"),
        t.route("scale.grid", "color", "", "borderColor"),
        t.route("scale.border", "color", "", "borderColor"),
        t.route("scale.title", "color", "", "color"),
        t.describe("scale", {
            _fallback: !1,
            _scriptable: (e) =>
                !e.startsWith("before") &&
                !e.startsWith("after") &&
                e !== "callback" &&
                e !== "parser",
            _indexable: (e) =>
                e !== "borderDash" && e !== "tickBorderDash" && e !== "dash",
        }),
        t.describe("scales", { _fallback: "scale" }),
        t.describe("scale.ticks", {
            _scriptable: (e) => e !== "backdropPadding" && e !== "callback",
            _indexable: (e) => e !== "backdropPadding",
        });
}
const Cn = Object.create(null),
    $l = Object.create(null);
function Wi(t, e) {
    if (!e) return t;
    const n = e.split(".");
    for (let i = 0, r = n.length; i < r; ++i) {
        const s = n[i];
        t = t[s] || (t[s] = Object.create(null));
    }
    return t;
}
function jo(t, e, n) {
    return typeof e == "string" ? ur(Wi(t, e), n) : ur(Wi(t, ""), e);
}
class q0 {
    constructor(e, n) {
        (this.animation = void 0),
            (this.backgroundColor = "rgba(0,0,0,0.1)"),
            (this.borderColor = "rgba(0,0,0,0.1)"),
            (this.color = "#666"),
            (this.datasets = {}),
            (this.devicePixelRatio = (i) => i.chart.platform.getDevicePixelRatio()),
            (this.elements = {}),
            (this.events = [
                "mousemove",
                "mouseout",
                "click",
                "touchstart",
                "touchmove",
            ]),
            (this.font = {
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                size: 12,
                style: "normal",
                lineHeight: 1.2,
                weight: null,
            }),
            (this.hover = {}),
            (this.hoverBackgroundColor = (i, r) => Bo(r.backgroundColor)),
            (this.hoverBorderColor = (i, r) => Bo(r.borderColor)),
            (this.hoverColor = (i, r) => Bo(r.color)),
            (this.indexAxis = "x"),
            (this.interaction = {
                mode: "nearest",
                intersect: !0,
                includeInvisible: !1,
            }),
            (this.maintainAspectRatio = !0),
            (this.onHover = null),
            (this.onClick = null),
            (this.parsing = !0),
            (this.plugins = {}),
            (this.responsive = !0),
            (this.scale = void 0),
            (this.scales = {}),
            (this.showLine = !0),
            (this.drawActiveElementsOnTop = !0),
            this.describe(e),
            this.apply(n);
    }
    set(e, n) {
        return jo(this, e, n);
    }
    get(e) {
        return Wi(this, e);
    }
    describe(e, n) {
        return jo($l, e, n);
    }
    override(e, n) {
        return jo(Cn, e, n);
    }
    route(e, n, i, r) {
        const s = Wi(this, e),
            o = Wi(this, i),
            l = "_" + n;
        Object.defineProperties(s, {
            [l]: { value: s[n], writable: !0 },
            [n]: {
                enumerable: !0,
                get() {
                    const a = this[l],
                        u = o[r];
                    return A(a) ? Object.assign({}, u, a) : B(a, u);
                },
                set(a) {
                    this[l] = a;
                },
            },
        });
    }
    apply(e) {
        e.forEach((n) => n(this));
    }
}
var ne = new q0(
    {
        _scriptable: (t) => !t.startsWith("on"),
        _indexable: (t) => t !== "events",
        hover: { _fallback: "interaction" },
        interaction: { _scriptable: !1, _indexable: !1 },
    },
    [K0, Q0, Z0]
);
function J0(t) {
    return !t || Y(t.size) || Y(t.family)
        ? null
        : (t.style ? t.style + " " : "") +
        (t.weight ? t.weight + " " : "") +
        t.size +
        "px " +
        t.family;
}
function Pc(t, e, n, i, r) {
    let s = e[r];
    return (
        s || ((s = e[r] = t.measureText(r).width), n.push(r)), s > i && (i = s), i
    );
}
function an(t, e, n) {
    const i = t.currentDevicePixelRatio,
        r = n !== 0 ? Math.max(n / 2, 0.5) : 0;
    return Math.round((e - r) * i) / i + r;
}
function Ec(t, e) {
    (!e && !t) ||
        ((e = e || t.getContext("2d")),
            e.save(),
            e.resetTransform(),
            e.clearRect(0, 0, t.width, t.height),
            e.restore());
}
function Tc(t, e, n, i) {
    qh(t, e, n, i, null);
}
function qh(t, e, n, i, r) {
    let s, o, l, a, u, c, f, d;
    const h = e.pointStyle,
        y = e.rotation,
        v = e.radius;
    let _ = (y || 0) * L0;
    if (
        h &&
        typeof h == "object" &&
        ((s = h.toString()),
            s === "[object HTMLImageElement]" || s === "[object HTMLCanvasElement]")
    ) {
        t.save(),
            t.translate(n, i),
            t.rotate(_),
            t.drawImage(h, -h.width / 2, -h.height / 2, h.width, h.height),
            t.restore();
        return;
    }
    if (!(isNaN(v) || v <= 0)) {
        switch ((t.beginPath(), h)) {
            default:
                r ? t.ellipse(n, i, r / 2, v, 0, 0, Gt) : t.arc(n, i, v, 0, Gt),
                    t.closePath();
                break;
            case "triangle":
                (c = r ? r / 2 : v),
                    t.moveTo(n + Math.sin(_) * c, i - Math.cos(_) * v),
                    (_ += _c),
                    t.lineTo(n + Math.sin(_) * c, i - Math.cos(_) * v),
                    (_ += _c),
                    t.lineTo(n + Math.sin(_) * c, i - Math.cos(_) * v),
                    t.closePath();
                break;
            case "rectRounded":
                (u = v * 0.516),
                    (a = v - u),
                    (o = Math.cos(_ + on) * a),
                    (f = Math.cos(_ + on) * (r ? r / 2 - u : a)),
                    (l = Math.sin(_ + on) * a),
                    (d = Math.sin(_ + on) * (r ? r / 2 - u : a)),
                    t.arc(n - f, i - l, u, _ - _e, _ - nt),
                    t.arc(n + d, i - o, u, _ - nt, _),
                    t.arc(n + f, i + l, u, _, _ + nt),
                    t.arc(n - d, i + o, u, _ + nt, _ + _e),
                    t.closePath();
                break;
            case "rect":
                if (!y) {
                    (a = Math.SQRT1_2 * v),
                        (c = r ? r / 2 : a),
                        t.rect(n - c, i - a, 2 * c, 2 * a);
                    break;
                }
                _ += on;
            case "rectRot":
                (f = Math.cos(_) * (r ? r / 2 : v)),
                    (o = Math.cos(_) * v),
                    (l = Math.sin(_) * v),
                    (d = Math.sin(_) * (r ? r / 2 : v)),
                    t.moveTo(n - f, i - l),
                    t.lineTo(n + d, i - o),
                    t.lineTo(n + f, i + l),
                    t.lineTo(n - d, i + o),
                    t.closePath();
                break;
            case "crossRot":
                _ += on;
            case "cross":
                (f = Math.cos(_) * (r ? r / 2 : v)),
                    (o = Math.cos(_) * v),
                    (l = Math.sin(_) * v),
                    (d = Math.sin(_) * (r ? r / 2 : v)),
                    t.moveTo(n - f, i - l),
                    t.lineTo(n + f, i + l),
                    t.moveTo(n + d, i - o),
                    t.lineTo(n - d, i + o);
                break;
            case "star":
                (f = Math.cos(_) * (r ? r / 2 : v)),
                    (o = Math.cos(_) * v),
                    (l = Math.sin(_) * v),
                    (d = Math.sin(_) * (r ? r / 2 : v)),
                    t.moveTo(n - f, i - l),
                    t.lineTo(n + f, i + l),
                    t.moveTo(n + d, i - o),
                    t.lineTo(n - d, i + o),
                    (_ += on),
                    (f = Math.cos(_) * (r ? r / 2 : v)),
                    (o = Math.cos(_) * v),
                    (l = Math.sin(_) * v),
                    (d = Math.sin(_) * (r ? r / 2 : v)),
                    t.moveTo(n - f, i - l),
                    t.lineTo(n + f, i + l),
                    t.moveTo(n + d, i - o),
                    t.lineTo(n - d, i + o);
                break;
            case "line":
                (o = r ? r / 2 : Math.cos(_) * v),
                    (l = Math.sin(_) * v),
                    t.moveTo(n - o, i - l),
                    t.lineTo(n + o, i + l);
                break;
            case "dash":
                t.moveTo(n, i),
                    t.lineTo(n + Math.cos(_) * (r ? r / 2 : v), i + Math.sin(_) * v);
                break;
            case !1:
                t.closePath();
                break;
        }
        t.fill(), e.borderWidth > 0 && t.stroke();
    }
}
function Jh(t, e, n) {
    return (
        (n = n || 0.5),
        !e ||
        (t &&
            t.x > e.left - n &&
            t.x < e.right + n &&
            t.y > e.top - n &&
            t.y < e.bottom + n)
    );
}
function Ga(t, e) {
    t.save(),
        t.beginPath(),
        t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
        t.clip();
}
function Za(t) {
    t.restore();
}
function ey(t, e) {
    e.translation && t.translate(e.translation[0], e.translation[1]),
        Y(e.rotation) || t.rotate(e.rotation),
        e.color && (t.fillStyle = e.color),
        e.textAlign && (t.textAlign = e.textAlign),
        e.textBaseline && (t.textBaseline = e.textBaseline);
}
function ty(t, e, n, i, r) {
    if (r.strikethrough || r.underline) {
        const s = t.measureText(i),
            o = e - s.actualBoundingBoxLeft,
            l = e + s.actualBoundingBoxRight,
            a = n - s.actualBoundingBoxAscent,
            u = n + s.actualBoundingBoxDescent,
            c = r.strikethrough ? (a + u) / 2 : u;
        (t.strokeStyle = t.fillStyle),
            t.beginPath(),
            (t.lineWidth = r.decorationWidth || 2),
            t.moveTo(o, c),
            t.lineTo(l, c),
            t.stroke();
    }
}
function ny(t, e) {
    const n = t.fillStyle;
    (t.fillStyle = e.color),
        t.fillRect(e.left, e.top, e.width, e.height),
        (t.fillStyle = n);
}
function fr(t, e, n, i, r, s = {}) {
    const o = oe(e) ? e : [e],
        l = s.strokeWidth > 0 && s.strokeColor !== "";
    let a, u;
    for (t.save(), t.font = r.string, ey(t, s), a = 0; a < o.length; ++a)
        (u = o[a]),
            s.backdrop && ny(t, s.backdrop),
            l &&
            (s.strokeColor && (t.strokeStyle = s.strokeColor),
                Y(s.strokeWidth) || (t.lineWidth = s.strokeWidth),
                t.strokeText(u, n, i, s.maxWidth)),
            t.fillText(u, n, i, s.maxWidth),
            ty(t, n, i, u, s),
            (i += Number(r.lineHeight));
    t.restore();
}
function Vs(t, e) {
    const { x: n, y: i, w: r, h: s, radius: o } = e;
    t.arc(n + o.topLeft, i + o.topLeft, o.topLeft, 1.5 * _e, _e, !0),
        t.lineTo(n, i + s - o.bottomLeft),
        t.arc(n + o.bottomLeft, i + s - o.bottomLeft, o.bottomLeft, _e, nt, !0),
        t.lineTo(n + r - o.bottomRight, i + s),
        t.arc(
            n + r - o.bottomRight,
            i + s - o.bottomRight,
            o.bottomRight,
            nt,
            0,
            !0
        ),
        t.lineTo(n + r, i + o.topRight),
        t.arc(n + r - o.topRight, i + o.topRight, o.topRight, 0, -nt, !0),
        t.lineTo(n + o.topLeft, i);
}
const iy = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
    ry = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function sy(t, e) {
    const n = ("" + t).match(iy);
    if (!n || n[1] === "normal") return e * 1.2;
    switch (((t = +n[2]), n[3])) {
        case "px":
            return t;
        case "%":
            t /= 100;
            break;
    }
    return e * t;
}
const oy = (t) => +t || 0;
function ep(t, e) {
    const n = {},
        i = A(e),
        r = i ? Object.keys(e) : e,
        s = A(t) ? (i ? (o) => B(t[o], t[e[o]]) : (o) => t[o]) : () => t;
    for (const o of r) n[o] = oy(s(o));
    return n;
}
function tp(t) {
    return ep(t, { top: "y", right: "x", bottom: "y", left: "x" });
}
function Xn(t) {
    return ep(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function Ze(t) {
    const e = tp(t);
    return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
}
function ve(t, e) {
    (t = t || {}), (e = e || ne.font);
    let n = B(t.size, e.size);
    typeof n == "string" && (n = parseInt(n, 10));
    let i = B(t.style, e.style);
    i &&
        !("" + i).match(ry) &&
        (console.warn('Invalid font style specified: "' + i + '"'), (i = void 0));
    const r = {
        family: B(t.family, e.family),
        lineHeight: sy(B(t.lineHeight, e.lineHeight), n),
        size: n,
        style: i,
        weight: B(t.weight, e.weight),
        string: "",
    };
    return (r.string = J0(r)), r;
}
function Vr(t, e, n, i) {
    let r, s, o;
    for (r = 0, s = t.length; r < s; ++r)
        if (((o = t[r]), o !== void 0 && o !== void 0)) return o;
}
function ly(t, e, n) {
    const { min: i, max: r } = t,
        s = C0(e, (r - i) / 2),
        o = (l, a) => (n && l === 0 ? 0 : l + a);
    return { min: o(i, -Math.abs(s)), max: o(r, s) };
}
function ui(t, e) {
    return Object.assign(Object.create(t), e);
}
function qa(t, e = [""], n, i, r = () => t[0]) {
    const s = n || t;
    typeof i > "u" && (i = sp("_fallback", t));
    const o = {
        [Symbol.toStringTag]: "Object",
        _cacheable: !0,
        _scopes: t,
        _rootScopes: s,
        _fallback: i,
        _getTarget: r,
        override: (l) => qa([l, ...t], e, s, i),
    };
    return new Proxy(o, {
        deleteProperty(l, a) {
            return delete l[a], delete l._keys, delete t[0][a], !0;
        },
        get(l, a) {
            return ip(l, a, () => gy(a, e, t, l));
        },
        getOwnPropertyDescriptor(l, a) {
            return Reflect.getOwnPropertyDescriptor(l._scopes[0], a);
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(t[0]);
        },
        has(l, a) {
            return Lc(l).includes(a);
        },
        ownKeys(l) {
            return Lc(l);
        },
        set(l, a, u) {
            const c = l._storage || (l._storage = r());
            return (l[a] = c[a] = u), delete l._keys, !0;
        },
    });
}
function si(t, e, n, i) {
    const r = {
        _cacheable: !1,
        _proxy: t,
        _context: e,
        _subProxy: n,
        _stack: new Set(),
        _descriptors: np(t, i),
        setContext: (s) => si(t, s, n, i),
        override: (s) => si(t.override(s), e, n, i),
    };
    return new Proxy(r, {
        deleteProperty(s, o) {
            return delete s[o], delete t[o], !0;
        },
        get(s, o, l) {
            return ip(s, o, () => uy(s, o, l));
        },
        getOwnPropertyDescriptor(s, o) {
            return s._descriptors.allKeys
                ? Reflect.has(t, o)
                    ? { enumerable: !0, configurable: !0 }
                    : void 0
                : Reflect.getOwnPropertyDescriptor(t, o);
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(t);
        },
        has(s, o) {
            return Reflect.has(t, o);
        },
        ownKeys() {
            return Reflect.ownKeys(t);
        },
        set(s, o, l) {
            return (t[o] = l), delete s[o], !0;
        },
    });
}
function np(t, e = { scriptable: !0, indexable: !0 }) {
    const {
        _scriptable: n = e.scriptable,
        _indexable: i = e.indexable,
        _allKeys: r = e.allKeys,
    } = t;
    return {
        allKeys: r,
        scriptable: n,
        indexable: i,
        isScriptable: en(n) ? n : () => n,
        isIndexable: en(i) ? i : () => i,
    };
}
const ay = (t, e) => (t ? t + Ka(e) : e),
    Ja = (t, e) =>
        A(e) &&
        t !== "adapters" &&
        (Object.getPrototypeOf(e) === null || e.constructor === Object);
function ip(t, e, n) {
    if (Object.prototype.hasOwnProperty.call(t, e) || e === "constructor")
        return t[e];
    const i = n();
    return (t[e] = i), i;
}
function uy(t, e, n) {
    const { _proxy: i, _context: r, _subProxy: s, _descriptors: o } = t;
    let l = i[e];
    return (
        en(l) && o.isScriptable(e) && (l = cy(e, l, t, n)),
        oe(l) && l.length && (l = fy(e, l, t, o.isIndexable)),
        Ja(e, l) && (l = si(l, r, s && s[e], o)),
        l
    );
}
function cy(t, e, n, i) {
    const { _proxy: r, _context: s, _subProxy: o, _stack: l } = n;
    if (l.has(t))
        throw new Error(
            "Recursion detected: " + Array.from(l).join("->") + "->" + t
        );
    l.add(t);
    let a = e(s, o || i);
    return l.delete(t), Ja(t, a) && (a = eu(r._scopes, r, t, a)), a;
}
function fy(t, e, n, i) {
    const { _proxy: r, _context: s, _subProxy: o, _descriptors: l } = n;
    if (typeof s.index < "u" && i(t)) return e[s.index % e.length];
    if (A(e[0])) {
        const a = e,
            u = r._scopes.filter((c) => c !== a);
        e = [];
        for (const c of a) {
            const f = eu(u, r, t, c);
            e.push(si(f, s, o && o[t], l));
        }
    }
    return e;
}
function rp(t, e, n) {
    return en(t) ? t(e, n) : t;
}
const dy = (t, e) => (t === !0 ? e : typeof t == "string" ? ri(e, t) : void 0);
function hy(t, e, n, i, r) {
    for (const s of e) {
        const o = dy(n, s);
        if (o) {
            t.add(o);
            const l = rp(o._fallback, n, r);
            if (typeof l < "u" && l !== n && l !== i) return l;
        } else if (o === !1 && typeof i < "u" && n !== i) return null;
    }
    return !1;
}
function eu(t, e, n, i) {
    const r = e._rootScopes,
        s = rp(e._fallback, n, i),
        o = [...t, ...r],
        l = new Set();
    l.add(i);
    let a = Oc(l, o, n, s || n, i);
    return a === null ||
        (typeof s < "u" && s !== n && ((a = Oc(l, o, s, a, i)), a === null))
        ? !1
        : qa(Array.from(l), [""], r, s, () => py(e, n, i));
}
function Oc(t, e, n, i, r) {
    for (; n;) n = hy(t, e, n, i, r);
    return n;
}
function py(t, e, n) {
    const i = t._getTarget();
    e in i || (i[e] = {});
    const r = i[e];
    return oe(r) && A(n) ? n : r || {};
}
function gy(t, e, n, i) {
    let r;
    for (const s of e)
        if (((r = sp(ay(s, t), n)), typeof r < "u"))
            return Ja(t, r) ? eu(n, i, t, r) : r;
}
function sp(t, e) {
    for (const n of e) {
        if (!n) continue;
        const i = n[t];
        if (typeof i < "u") return i;
    }
}
function Lc(t) {
    let e = t._keys;
    return e || (e = t._keys = my(t._scopes)), e;
}
function my(t) {
    const e = new Set();
    for (const n of t)
        for (const i of Object.keys(n).filter((r) => !r.startsWith("_"))) e.add(i);
    return Array.from(e);
}
function tu() {
    return typeof window < "u" && typeof document < "u";
}
function nu(t) {
    let e = t.parentNode;
    return e && e.toString() === "[object ShadowRoot]" && (e = e.host), e;
}
function Ws(t, e, n) {
    let i;
    return (
        typeof t == "string"
            ? ((i = parseInt(t, 10)),
                t.indexOf("%") !== -1 && (i = (i / 100) * e.parentNode[n]))
            : (i = t),
        i
    );
}
const ao = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null);
function yy(t, e) {
    return ao(t).getPropertyValue(e);
}
const vy = ["top", "right", "bottom", "left"];
function _n(t, e, n) {
    const i = {};
    n = n ? "-" + n : "";
    for (let r = 0; r < 4; r++) {
        const s = vy[r];
        i[s] = parseFloat(t[e + "-" + s + n]) || 0;
    }
    return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
}
const _y = (t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot);
function xy(t, e) {
    const n = t.touches,
        i = n && n.length ? n[0] : t,
        { offsetX: r, offsetY: s } = i;
    let o = !1,
        l,
        a;
    if (_y(r, s, t.target)) (l = r), (a = s);
    else {
        const u = e.getBoundingClientRect();
        (l = i.clientX - u.left), (a = i.clientY - u.top), (o = !0);
    }
    return { x: l, y: a, box: o };
}
function dn(t, e) {
    if ("native" in t) return t;
    const { canvas: n, currentDevicePixelRatio: i } = e,
        r = ao(n),
        s = r.boxSizing === "border-box",
        o = _n(r, "padding"),
        l = _n(r, "border", "width"),
        { x: a, y: u, box: c } = xy(t, n),
        f = o.left + (c && l.left),
        d = o.top + (c && l.top);
    let { width: h, height: y } = e;
    return (
        s && ((h -= o.width + l.width), (y -= o.height + l.height)),
        {
            x: Math.round((((a - f) / h) * n.width) / i),
            y: Math.round((((u - d) / y) * n.height) / i),
        }
    );
}
function wy(t, e, n) {
    let i, r;
    if (e === void 0 || n === void 0) {
        const s = t && nu(t);
        if (!s) (e = t.clientWidth), (n = t.clientHeight);
        else {
            const o = s.getBoundingClientRect(),
                l = ao(s),
                a = _n(l, "border", "width"),
                u = _n(l, "padding");
            (e = o.width - u.width - a.width),
                (n = o.height - u.height - a.height),
                (i = Ws(l.maxWidth, s, "clientWidth")),
                (r = Ws(l.maxHeight, s, "clientHeight"));
        }
    }
    return { width: e, height: n, maxWidth: i || js, maxHeight: r || js };
}
const Wr = (t) => Math.round(t * 10) / 10;
function ky(t, e, n, i) {
    const r = ao(t),
        s = _n(r, "margin"),
        o = Ws(r.maxWidth, t, "clientWidth") || js,
        l = Ws(r.maxHeight, t, "clientHeight") || js,
        a = wy(t, e, n);
    let { width: u, height: c } = a;
    if (r.boxSizing === "content-box") {
        const d = _n(r, "border", "width"),
            h = _n(r, "padding");
        (u -= h.width + d.width), (c -= h.height + d.height);
    }
    return (
        (u = Math.max(0, u - s.width)),
        (c = Math.max(0, i ? u / i : c - s.height)),
        (u = Wr(Math.min(u, o, a.maxWidth))),
        (c = Wr(Math.min(c, l, a.maxHeight))),
        u && !c && (c = Wr(u / 2)),
        (e !== void 0 || n !== void 0) &&
        i &&
        a.height &&
        c > a.height &&
        ((c = a.height), (u = Wr(Math.floor(c * i)))),
        { width: u, height: c }
    );
}
function zc(t, e, n) {
    const i = e || 1,
        r = Math.floor(t.height * i),
        s = Math.floor(t.width * i);
    (t.height = Math.floor(t.height)), (t.width = Math.floor(t.width));
    const o = t.canvas;
    return (
        o.style &&
        (n || (!o.style.height && !o.style.width)) &&
        ((o.style.height = `${t.height}px`), (o.style.width = `${t.width}px`)),
        t.currentDevicePixelRatio !== i || o.height !== r || o.width !== s
            ? ((t.currentDevicePixelRatio = i),
                (o.height = r),
                (o.width = s),
                t.ctx.setTransform(i, 0, 0, i, 0, 0),
                !0)
            : !1
    );
}
const Sy = (function () {
    let t = !1;
    try {
        const e = {
            get passive() {
                return (t = !0), !1;
            },
        };
        tu() &&
            (window.addEventListener("test", null, e),
                window.removeEventListener("test", null, e));
    } catch { }
    return t;
})();
function Dc(t, e) {
    const n = yy(t, e),
        i = n && n.match(/^(\d+)(\.\d+)?px$/);
    return i ? +i[1] : void 0;
}
const My = function (t, e) {
    return {
        x(n) {
            return t + t + e - n;
        },
        setWidth(n) {
            e = n;
        },
        textAlign(n) {
            return n === "center" ? n : n === "right" ? "left" : "right";
        },
        xPlus(n, i) {
            return n - i;
        },
        leftForLtr(n, i) {
            return n - i;
        },
    };
},
    Cy = function () {
        return {
            x(t) {
                return t;
            },
            setWidth(t) { },
            textAlign(t) {
                return t;
            },
            xPlus(t, e) {
                return t + e;
            },
            leftForLtr(t, e) {
                return t;
            },
        };
    };
function Gn(t, e, n) {
    return t ? My(e, n) : Cy();
}
function op(t, e) {
    let n, i;
    (e === "ltr" || e === "rtl") &&
        ((n = t.canvas.style),
            (i = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")]),
            n.setProperty("direction", e, "important"),
            (t.prevTextDirection = i));
}
function lp(t, e) {
    e !== void 0 &&
        (delete t.prevTextDirection,
            t.canvas.style.setProperty("direction", e[0], e[1]));
}
/*!
 * Chart.js v4.4.4
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ class by {
    constructor() {
        (this._request = null),
            (this._charts = new Map()),
            (this._running = !1),
            (this._lastDate = void 0);
    }
    _notify(e, n, i, r) {
        const s = n.listeners[r],
            o = n.duration;
        s.forEach((l) =>
            l({
                chart: e,
                initial: n.initial,
                numSteps: o,
                currentStep: Math.min(i - n.start, o),
            })
        );
    }
    _refresh() {
        this._request ||
            ((this._running = !0),
                (this._request = Yh.call(window, () => {
                    this._update(),
                        (this._request = null),
                        this._running && this._refresh();
                })));
    }
    _update(e = Date.now()) {
        let n = 0;
        this._charts.forEach((i, r) => {
            if (!i.running || !i.items.length) return;
            const s = i.items;
            let o = s.length - 1,
                l = !1,
                a;
            for (; o >= 0; --o)
                (a = s[o]),
                    a._active
                        ? (a._total > i.duration && (i.duration = a._total),
                            a.tick(e),
                            (l = !0))
                        : ((s[o] = s[s.length - 1]), s.pop());
            l && (r.draw(), this._notify(r, i, e, "progress")),
                s.length ||
                ((i.running = !1),
                    this._notify(r, i, e, "complete"),
                    (i.initial = !1)),
                (n += s.length);
        }),
            (this._lastDate = e),
            n === 0 && (this._running = !1);
    }
    _getAnims(e) {
        const n = this._charts;
        let i = n.get(e);
        return (
            i ||
            ((i = {
                running: !1,
                initial: !0,
                items: [],
                listeners: { complete: [], progress: [] },
            }),
                n.set(e, i)),
            i
        );
    }
    listen(e, n, i) {
        this._getAnims(e).listeners[n].push(i);
    }
    add(e, n) {
        !n || !n.length || this._getAnims(e).items.push(...n);
    }
    has(e) {
        return this._getAnims(e).items.length > 0;
    }
    start(e) {
        const n = this._charts.get(e);
        n &&
            ((n.running = !0),
                (n.start = Date.now()),
                (n.duration = n.items.reduce((i, r) => Math.max(i, r._duration), 0)),
                this._refresh());
    }
    running(e) {
        if (!this._running) return !1;
        const n = this._charts.get(e);
        return !(!n || !n.running || !n.items.length);
    }
    stop(e) {
        const n = this._charts.get(e);
        if (!n || !n.items.length) return;
        const i = n.items;
        let r = i.length - 1;
        for (; r >= 0; --r) i[r].cancel();
        (n.items = []), this._notify(e, n, Date.now(), "complete");
    }
    remove(e) {
        return this._charts.delete(e);
    }
}
var vt = new by();
const Rc = "transparent",
    Py = {
        boolean(t, e, n) {
            return n > 0.5 ? e : t;
        },
        color(t, e, n) {
            const i = Cc(t || Rc),
                r = i.valid && Cc(e || Rc);
            return r && r.valid ? r.mix(i, n).hexString() : e;
        },
        number(t, e, n) {
            return t + (e - t) * n;
        },
    };
class Ey {
    constructor(e, n, i, r) {
        const s = n[i];
        r = Vr([e.to, r, s, e.from]);
        const o = Vr([e.from, s, r]);
        (this._active = !0),
            (this._fn = e.fn || Py[e.type || typeof o]),
            (this._easing = Vi[e.easing] || Vi.linear),
            (this._start = Math.floor(Date.now() + (e.delay || 0))),
            (this._duration = this._total = Math.floor(e.duration)),
            (this._loop = !!e.loop),
            (this._target = n),
            (this._prop = i),
            (this._from = o),
            (this._to = r),
            (this._promises = void 0);
    }
    active() {
        return this._active;
    }
    update(e, n, i) {
        if (this._active) {
            this._notify(!1);
            const r = this._target[this._prop],
                s = i - this._start,
                o = this._duration - s;
            (this._start = i),
                (this._duration = Math.floor(Math.max(o, e.duration))),
                (this._total += s),
                (this._loop = !!e.loop),
                (this._to = Vr([e.to, n, r, e.from])),
                (this._from = Vr([e.from, r, n]));
        }
    }
    cancel() {
        this._active &&
            (this.tick(Date.now()), (this._active = !1), this._notify(!1));
    }
    tick(e) {
        const n = e - this._start,
            i = this._duration,
            r = this._prop,
            s = this._from,
            o = this._loop,
            l = this._to;
        let a;
        if (((this._active = s !== l && (o || n < i)), !this._active)) {
            (this._target[r] = l), this._notify(!0);
            return;
        }
        if (n < 0) {
            this._target[r] = s;
            return;
        }
        (a = (n / i) % 2),
            (a = o && a > 1 ? 2 - a : a),
            (a = this._easing(Math.min(1, Math.max(0, a)))),
            (this._target[r] = this._fn(s, l, a));
    }
    wait() {
        const e = this._promises || (this._promises = []);
        return new Promise((n, i) => {
            e.push({ res: n, rej: i });
        });
    }
    _notify(e) {
        const n = e ? "res" : "rej",
            i = this._promises || [];
        for (let r = 0; r < i.length; r++) i[r][n]();
    }
}
class ap {
    constructor(e, n) {
        (this._chart = e), (this._properties = new Map()), this.configure(n);
    }
    configure(e) {
        if (!A(e)) return;
        const n = Object.keys(ne.animation),
            i = this._properties;
        Object.getOwnPropertyNames(e).forEach((r) => {
            const s = e[r];
            if (!A(s)) return;
            const o = {};
            for (const l of n) o[l] = s[l];
            ((oe(s.properties) && s.properties) || [r]).forEach((l) => {
                (l === r || !i.has(l)) && i.set(l, o);
            });
        });
    }
    _animateOptions(e, n) {
        const i = n.options,
            r = Oy(e, i);
        if (!r) return [];
        const s = this._createAnimations(r, i);
        return (
            i.$shared &&
            Ty(e.options.$animations, i).then(
                () => {
                    e.options = i;
                },
                () => { }
            ),
            s
        );
    }
    _createAnimations(e, n) {
        const i = this._properties,
            r = [],
            s = e.$animations || (e.$animations = {}),
            o = Object.keys(n),
            l = Date.now();
        let a;
        for (a = o.length - 1; a >= 0; --a) {
            const u = o[a];
            if (u.charAt(0) === "$") continue;
            if (u === "options") {
                r.push(...this._animateOptions(e, n));
                continue;
            }
            const c = n[u];
            let f = s[u];
            const d = i.get(u);
            if (f)
                if (d && f.active()) {
                    f.update(d, c, l);
                    continue;
                } else f.cancel();
            if (!d || !d.duration) {
                e[u] = c;
                continue;
            }
            (s[u] = f = new Ey(d, e, u, c)), r.push(f);
        }
        return r;
    }
    update(e, n) {
        if (this._properties.size === 0) {
            Object.assign(e, n);
            return;
        }
        const i = this._createAnimations(e, n);
        if (i.length) return vt.add(this._chart, i), !0;
    }
}
function Ty(t, e) {
    const n = [],
        i = Object.keys(e);
    for (let r = 0; r < i.length; r++) {
        const s = t[i[r]];
        s && s.active() && n.push(s.wait());
    }
    return Promise.all(n);
}
function Oy(t, e) {
    if (!e) return;
    let n = t.options;
    if (!n) {
        t.options = e;
        return;
    }
    return (
        n.$shared &&
        (t.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })),
        n
    );
}
function Fc(t, e) {
    const n = (t && t.options) || {},
        i = n.reverse,
        r = n.min === void 0 ? e : 0,
        s = n.max === void 0 ? e : 0;
    return { start: i ? s : r, end: i ? r : s };
}
function Ly(t, e, n) {
    if (n === !1) return !1;
    const i = Fc(t, n),
        r = Fc(e, n);
    return { top: r.end, right: i.end, bottom: r.start, left: i.start };
}
function zy(t) {
    let e, n, i, r;
    return (
        A(t)
            ? ((e = t.top), (n = t.right), (i = t.bottom), (r = t.left))
            : (e = n = i = r = t),
        { top: e, right: n, bottom: i, left: r, disabled: t === !1 }
    );
}
function up(t, e) {
    const n = [],
        i = t._getSortedDatasetMetas(e);
    let r, s;
    for (r = 0, s = i.length; r < s; ++r) n.push(i[r].index);
    return n;
}
function Ic(t, e, n, i = {}) {
    const r = t.keys,
        s = i.mode === "single";
    let o, l, a, u;
    if (e !== null) {
        for (o = 0, l = r.length; o < l; ++o) {
            if (((a = +r[o]), a === n)) {
                if (i.all) continue;
                break;
            }
            (u = t.values[a]), Ge(u) && (s || e === 0 || Zt(e) === Zt(u)) && (e += u);
        }
        return e;
    }
}
function Dy(t, e) {
    const { iScale: n, vScale: i } = e,
        r = n.axis === "x" ? "x" : "y",
        s = i.axis === "x" ? "x" : "y",
        o = Object.keys(t),
        l = new Array(o.length);
    let a, u, c;
    for (a = 0, u = o.length; a < u; ++a)
        (c = o[a]), (l[a] = { [r]: c, [s]: t[c] });
    return l;
}
function Ac(t, e) {
    const n = t && t.options.stacked;
    return n || (n === void 0 && e.stack !== void 0);
}
function Ry(t, e, n) {
    return `${t.id}.${e.id}.${n.stack || n.type}`;
}
function Fy(t) {
    const { min: e, max: n, minDefined: i, maxDefined: r } = t.getUserBounds();
    return {
        min: i ? e : Number.NEGATIVE_INFINITY,
        max: r ? n : Number.POSITIVE_INFINITY,
    };
}
function Iy(t, e, n) {
    const i = t[e] || (t[e] = {});
    return i[n] || (i[n] = {});
}
function Nc(t, e, n, i) {
    for (const r of e.getMatchingVisibleMetas(i).reverse()) {
        const s = t[r.index];
        if ((n && s > 0) || (!n && s < 0)) return r.index;
    }
    return null;
}
function Bc(t, e) {
    const { chart: n, _cachedMeta: i } = t,
        r = n._stacks || (n._stacks = {}),
        { iScale: s, vScale: o, index: l } = i,
        a = s.axis,
        u = o.axis,
        c = Ry(s, o, i),
        f = e.length;
    let d;
    for (let h = 0; h < f; ++h) {
        const y = e[h],
            { [a]: v, [u]: _ } = y,
            p = y._stacks || (y._stacks = {});
        (d = p[u] = Iy(r, c, v)),
            (d[l] = _),
            (d._top = Nc(d, o, !0, i.type)),
            (d._bottom = Nc(d, o, !1, i.type));
        const g = d._visualValues || (d._visualValues = {});
        g[l] = _;
    }
}
function Ho(t, e) {
    const n = t.scales;
    return Object.keys(n)
        .filter((i) => n[i].axis === e)
        .shift();
}
function Ay(t, e) {
    return ui(t, {
        active: !1,
        dataset: void 0,
        datasetIndex: e,
        index: e,
        mode: "default",
        type: "dataset",
    });
}
function Ny(t, e, n) {
    return ui(t, {
        active: !1,
        dataIndex: e,
        parsed: void 0,
        raw: void 0,
        element: n,
        index: e,
        mode: "default",
        type: "data",
    });
}
function _i(t, e) {
    const n = t.controller.index,
        i = t.vScale && t.vScale.axis;
    if (i) {
        e = e || t._parsed;
        for (const r of e) {
            const s = r._stacks;
            if (!s || s[i] === void 0 || s[i][n] === void 0) return;
            delete s[i][n],
                s[i]._visualValues !== void 0 &&
                s[i]._visualValues[n] !== void 0 &&
                delete s[i]._visualValues[n];
        }
    }
}
const Vo = (t) => t === "reset" || t === "none",
    jc = (t, e) => (e ? t : Object.assign({}, t)),
    By = (t, e, n) =>
        t && !e.hidden && e._stacked && { keys: up(n, !0), values: null };
class $i {
    constructor(e, n) {
        (this.chart = e),
            (this._ctx = e.ctx),
            (this.index = n),
            (this._cachedDataOpts = {}),
            (this._cachedMeta = this.getMeta()),
            (this._type = this._cachedMeta.type),
            (this.options = void 0),
            (this._parsing = !1),
            (this._data = void 0),
            (this._objectData = void 0),
            (this._sharedOptions = void 0),
            (this._drawStart = void 0),
            (this._drawCount = void 0),
            (this.enableOptionSharing = !1),
            (this.supportsDecimation = !1),
            (this.$context = void 0),
            (this._syncList = []),
            (this.datasetElementType = new.target.datasetElementType),
            (this.dataElementType = new.target.dataElementType),
            this.initialize();
    }
    initialize() {
        const e = this._cachedMeta;
        this.configure(),
            this.linkScales(),
            (e._stacked = Ac(e.vScale, e)),
            this.addElements(),
            this.options.fill &&
            !this.chart.isPluginEnabled("filler") &&
            console.warn(
                "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
            );
    }
    updateIndex(e) {
        this.index !== e && _i(this._cachedMeta), (this.index = e);
    }
    linkScales() {
        const e = this.chart,
            n = this._cachedMeta,
            i = this.getDataset(),
            r = (f, d, h, y) => (f === "x" ? d : f === "r" ? y : h),
            s = (n.xAxisID = B(i.xAxisID, Ho(e, "x"))),
            o = (n.yAxisID = B(i.yAxisID, Ho(e, "y"))),
            l = (n.rAxisID = B(i.rAxisID, Ho(e, "r"))),
            a = n.indexAxis,
            u = (n.iAxisID = r(a, s, o, l)),
            c = (n.vAxisID = r(a, o, s, l));
        (n.xScale = this.getScaleForId(s)),
            (n.yScale = this.getScaleForId(o)),
            (n.rScale = this.getScaleForId(l)),
            (n.iScale = this.getScaleForId(u)),
            (n.vScale = this.getScaleForId(c));
    }
    getDataset() {
        return this.chart.data.datasets[this.index];
    }
    getMeta() {
        return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(e) {
        return this.chart.scales[e];
    }
    _getOtherScale(e) {
        const n = this._cachedMeta;
        return e === n.iScale ? n.vScale : n.iScale;
    }
    reset() {
        this._update("reset");
    }
    _destroy() {
        const e = this._cachedMeta;
        this._data && kc(this._data, this), e._stacked && _i(e);
    }
    _dataCheck() {
        const e = this.getDataset(),
            n = e.data || (e.data = []),
            i = this._data;
        if (A(n)) {
            const r = this._cachedMeta;
            this._data = Dy(n, r);
        } else if (i !== n) {
            if (i) {
                kc(i, this);
                const r = this._cachedMeta;
                _i(r), (r._parsed = []);
            }
            n && Object.isExtensible(n) && V0(n, this),
                (this._syncList = []),
                (this._data = n);
        }
    }
    addElements() {
        const e = this._cachedMeta;
        this._dataCheck(),
            this.datasetElementType && (e.dataset = new this.datasetElementType());
    }
    buildOrUpdateElements(e) {
        const n = this._cachedMeta,
            i = this.getDataset();
        let r = !1;
        this._dataCheck();
        const s = n._stacked;
        (n._stacked = Ac(n.vScale, n)),
            n.stack !== i.stack && ((r = !0), _i(n), (n.stack = i.stack)),
            this._resyncElements(e),
            (r || s !== n._stacked) && Bc(this, n._parsed);
    }
    configure() {
        const e = this.chart.config,
            n = e.datasetScopeKeys(this._type),
            i = e.getOptionScopes(this.getDataset(), n, !0);
        (this.options = e.createResolver(i, this.getContext())),
            (this._parsing = this.options.parsing),
            (this._cachedDataOpts = {});
    }
    parse(e, n) {
        const { _cachedMeta: i, _data: r } = this,
            { iScale: s, _stacked: o } = i,
            l = s.axis;
        let a = e === 0 && n === r.length ? !0 : i._sorted,
            u = e > 0 && i._parsed[e - 1],
            c,
            f,
            d;
        if (this._parsing === !1) (i._parsed = r), (i._sorted = !0), (d = r);
        else {
            oe(r[e])
                ? (d = this.parseArrayData(i, r, e, n))
                : A(r[e])
                    ? (d = this.parseObjectData(i, r, e, n))
                    : (d = this.parsePrimitiveData(i, r, e, n));
            const h = () => f[l] === null || (u && f[l] < u[l]);
            for (c = 0; c < n; ++c)
                (i._parsed[c + e] = f = d[c]), a && (h() && (a = !1), (u = f));
            i._sorted = a;
        }
        o && Bc(this, d);
    }
    parsePrimitiveData(e, n, i, r) {
        const { iScale: s, vScale: o } = e,
            l = s.axis,
            a = o.axis,
            u = s.getLabels(),
            c = s === o,
            f = new Array(r);
        let d, h, y;
        for (d = 0, h = r; d < h; ++d)
            (y = d + i),
                (f[d] = { [l]: c || s.parse(u[y], y), [a]: o.parse(n[y], y) });
        return f;
    }
    parseArrayData(e, n, i, r) {
        const { xScale: s, yScale: o } = e,
            l = new Array(r);
        let a, u, c, f;
        for (a = 0, u = r; a < u; ++a)
            (c = a + i),
                (f = n[c]),
                (l[a] = { x: s.parse(f[0], c), y: o.parse(f[1], c) });
        return l;
    }
    parseObjectData(e, n, i, r) {
        const { xScale: s, yScale: o } = e,
            { xAxisKey: l = "x", yAxisKey: a = "y" } = this._parsing,
            u = new Array(r);
        let c, f, d, h;
        for (c = 0, f = r; c < f; ++c)
            (d = c + i),
                (h = n[d]),
                (u[c] = { x: s.parse(ri(h, l), d), y: o.parse(ri(h, a), d) });
        return u;
    }
    getParsed(e) {
        return this._cachedMeta._parsed[e];
    }
    getDataElement(e) {
        return this._cachedMeta.data[e];
    }
    applyStack(e, n, i) {
        const r = this.chart,
            s = this._cachedMeta,
            o = n[e.axis],
            l = { keys: up(r, !0), values: n._stacks[e.axis]._visualValues };
        return Ic(l, o, s.index, { mode: i });
    }
    updateRangeFromParsed(e, n, i, r) {
        const s = i[n.axis];
        let o = s === null ? NaN : s;
        const l = r && i._stacks[n.axis];
        r && l && ((r.values = l), (o = Ic(r, s, this._cachedMeta.index))),
            (e.min = Math.min(e.min, o)),
            (e.max = Math.max(e.max, o));
    }
    getMinMax(e, n) {
        const i = this._cachedMeta,
            r = i._parsed,
            s = i._sorted && e === i.iScale,
            o = r.length,
            l = this._getOtherScale(e),
            a = By(n, i, this.chart),
            u = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
            { min: c, max: f } = Fy(l);
        let d, h;
        function y() {
            h = r[d];
            const v = h[l.axis];
            return !Ge(h[e.axis]) || c > v || f < v;
        }
        for (
            d = 0;
            d < o && !(!y() && (this.updateRangeFromParsed(u, e, h, a), s));
            ++d
        );
        if (s) {
            for (d = o - 1; d >= 0; --d)
                if (!y()) {
                    this.updateRangeFromParsed(u, e, h, a);
                    break;
                }
        }
        return u;
    }
    getAllParsedValues(e) {
        const n = this._cachedMeta._parsed,
            i = [];
        let r, s, o;
        for (r = 0, s = n.length; r < s; ++r)
            (o = n[r][e.axis]), Ge(o) && i.push(o);
        return i;
    }
    getMaxOverflow() {
        return !1;
    }
    getLabelAndValue(e) {
        const n = this._cachedMeta,
            i = n.iScale,
            r = n.vScale,
            s = this.getParsed(e);
        return {
            label: i ? "" + i.getLabelForValue(s[i.axis]) : "",
            value: r ? "" + r.getLabelForValue(s[r.axis]) : "",
        };
    }
    _update(e) {
        const n = this._cachedMeta;
        this.update(e || "default"),
            (n._clip = zy(
                B(this.options.clip, Ly(n.xScale, n.yScale, this.getMaxOverflow()))
            ));
    }
    update(e) { }
    draw() {
        const e = this._ctx,
            n = this.chart,
            i = this._cachedMeta,
            r = i.data || [],
            s = n.chartArea,
            o = [],
            l = this._drawStart || 0,
            a = this._drawCount || r.length - l,
            u = this.options.drawActiveElementsOnTop;
        let c;
        for (i.dataset && i.dataset.draw(e, s, l, a), c = l; c < l + a; ++c) {
            const f = r[c];
            f.hidden || (f.active && u ? o.push(f) : f.draw(e, s));
        }
        for (c = 0; c < o.length; ++c) o[c].draw(e, s);
    }
    getStyle(e, n) {
        const i = n ? "active" : "default";
        return e === void 0 && this._cachedMeta.dataset
            ? this.resolveDatasetElementOptions(i)
            : this.resolveDataElementOptions(e || 0, i);
    }
    getContext(e, n, i) {
        const r = this.getDataset();
        let s;
        if (e >= 0 && e < this._cachedMeta.data.length) {
            const o = this._cachedMeta.data[e];
            (s = o.$context || (o.$context = Ny(this.getContext(), e, o))),
                (s.parsed = this.getParsed(e)),
                (s.raw = r.data[e]),
                (s.index = s.dataIndex = e);
        } else
            (s =
                this.$context ||
                (this.$context = Ay(this.chart.getContext(), this.index))),
                (s.dataset = r),
                (s.index = s.datasetIndex = this.index);
        return (s.active = !!n), (s.mode = i), s;
    }
    resolveDatasetElementOptions(e) {
        return this._resolveElementOptions(this.datasetElementType.id, e);
    }
    resolveDataElementOptions(e, n) {
        return this._resolveElementOptions(this.dataElementType.id, n, e);
    }
    _resolveElementOptions(e, n = "default", i) {
        const r = n === "active",
            s = this._cachedDataOpts,
            o = e + "-" + n,
            l = s[o],
            a = this.enableOptionSharing && cr(i);
        if (l) return jc(l, a);
        const u = this.chart.config,
            c = u.datasetElementScopeKeys(this._type, e),
            f = r ? [`${e}Hover`, "hover", e, ""] : [e, ""],
            d = u.getOptionScopes(this.getDataset(), c),
            h = Object.keys(ne.elements[e]),
            y = () => this.getContext(i, r, n),
            v = u.resolveNamedOptions(d, h, y, f);
        return v.$shared && ((v.$shared = a), (s[o] = Object.freeze(jc(v, a)))), v;
    }
    _resolveAnimations(e, n, i) {
        const r = this.chart,
            s = this._cachedDataOpts,
            o = `animation-${n}`,
            l = s[o];
        if (l) return l;
        let a;
        if (r.options.animation !== !1) {
            const c = this.chart.config,
                f = c.datasetAnimationScopeKeys(this._type, n),
                d = c.getOptionScopes(this.getDataset(), f);
            a = c.createResolver(d, this.getContext(e, i, n));
        }
        const u = new ap(r, a && a.animations);
        return a && a._cacheable && (s[o] = Object.freeze(u)), u;
    }
    getSharedOptions(e) {
        if (e.$shared)
            return (
                this._sharedOptions || (this._sharedOptions = Object.assign({}, e))
            );
    }
    includeOptions(e, n) {
        return !n || Vo(e) || this.chart._animationsDisabled;
    }
    _getSharedOptions(e, n) {
        const i = this.resolveDataElementOptions(e, n),
            r = this._sharedOptions,
            s = this.getSharedOptions(i),
            o = this.includeOptions(n, s) || s !== r;
        return (
            this.updateSharedOptions(s, n, i), { sharedOptions: s, includeOptions: o }
        );
    }
    updateElement(e, n, i, r) {
        Vo(r) ? Object.assign(e, i) : this._resolveAnimations(n, r).update(e, i);
    }
    updateSharedOptions(e, n, i) {
        e && !Vo(n) && this._resolveAnimations(void 0, n).update(e, i);
    }
    _setStyle(e, n, i, r) {
        e.active = r;
        const s = this.getStyle(n, r);
        this._resolveAnimations(n, i, r).update(e, {
            options: (!r && this.getSharedOptions(s)) || s,
        });
    }
    removeHoverStyle(e, n, i) {
        this._setStyle(e, i, "active", !1);
    }
    setHoverStyle(e, n, i) {
        this._setStyle(e, i, "active", !0);
    }
    _removeDatasetHoverStyle() {
        const e = this._cachedMeta.dataset;
        e && this._setStyle(e, void 0, "active", !1);
    }
    _setDatasetHoverStyle() {
        const e = this._cachedMeta.dataset;
        e && this._setStyle(e, void 0, "active", !0);
    }
    _resyncElements(e) {
        const n = this._data,
            i = this._cachedMeta.data;
        for (const [l, a, u] of this._syncList) this[l](a, u);
        this._syncList = [];
        const r = i.length,
            s = n.length,
            o = Math.min(s, r);
        o && this.parse(0, o),
            s > r
                ? this._insertElements(r, s - r, e)
                : s < r && this._removeElements(s, r - s);
    }
    _insertElements(e, n, i = !0) {
        const r = this._cachedMeta,
            s = r.data,
            o = e + n;
        let l;
        const a = (u) => {
            for (u.length += n, l = u.length - 1; l >= o; l--) u[l] = u[l - n];
        };
        for (a(s), l = e; l < o; ++l) s[l] = new this.dataElementType();
        this._parsing && a(r._parsed),
            this.parse(e, n),
            i && this.updateElements(s, e, n, "reset");
    }
    updateElements(e, n, i, r) { }
    _removeElements(e, n) {
        const i = this._cachedMeta;
        if (this._parsing) {
            const r = i._parsed.splice(e, n);
            i._stacked && _i(i, r);
        }
        i.data.splice(e, n);
    }
    _sync(e) {
        if (this._parsing) this._syncList.push(e);
        else {
            const [n, i, r] = e;
            this[n](i, r);
        }
        this.chart._dataChanges.push([this.index, ...e]);
    }
    _onDataPush() {
        const e = arguments.length;
        this._sync(["_insertElements", this.getDataset().data.length - e, e]);
    }
    _onDataPop() {
        this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
    }
    _onDataShift() {
        this._sync(["_removeElements", 0, 1]);
    }
    _onDataSplice(e, n) {
        n && this._sync(["_removeElements", e, n]);
        const i = arguments.length - 2;
        i && this._sync(["_insertElements", e, i]);
    }
    _onDataUnshift() {
        this._sync(["_insertElements", 0, arguments.length]);
    }
}
F($i, "defaults", {}),
    F($i, "datasetElementType", null),
    F($i, "dataElementType", null);
function jy(t, e) {
    if (!t._cache.$bar) {
        const n = t.getMatchingVisibleMetas(e);
        let i = [];
        for (let r = 0, s = n.length; r < s; r++)
            i = i.concat(n[r].controller.getAllParsedValues(t));
        t._cache.$bar = Uh(i.sort((r, s) => r - s));
    }
    return t._cache.$bar;
}
function Hy(t) {
    const e = t.iScale,
        n = jy(e, t.type);
    let i = e._length,
        r,
        s,
        o,
        l;
    const a = () => {
        o === 32767 ||
            o === -32768 ||
            (cr(l) && (i = Math.min(i, Math.abs(o - l) || i)), (l = o));
    };
    for (r = 0, s = n.length; r < s; ++r) (o = e.getPixelForValue(n[r])), a();
    for (l = void 0, r = 0, s = e.ticks.length; r < s; ++r)
        (o = e.getPixelForTick(r)), a();
    return i;
}
function Vy(t, e, n, i) {
    const r = n.barThickness;
    let s, o;
    return (
        Y(r)
            ? ((s = e.min * n.categoryPercentage), (o = n.barPercentage))
            : ((s = r * i), (o = 1)),
        { chunk: s / i, ratio: o, start: e.pixels[t] - s / 2 }
    );
}
function Wy(t, e, n, i) {
    const r = e.pixels,
        s = r[t];
    let o = t > 0 ? r[t - 1] : null,
        l = t < r.length - 1 ? r[t + 1] : null;
    const a = n.categoryPercentage;
    o === null && (o = s - (l === null ? e.end - e.start : l - s)),
        l === null && (l = s + s - o);
    const u = s - ((s - Math.min(o, l)) / 2) * a;
    return {
        chunk: ((Math.abs(l - o) / 2) * a) / i,
        ratio: n.barPercentage,
        start: u,
    };
}
function $y(t, e, n, i) {
    const r = n.parse(t[0], i),
        s = n.parse(t[1], i),
        o = Math.min(r, s),
        l = Math.max(r, s);
    let a = o,
        u = l;
    Math.abs(o) > Math.abs(l) && ((a = l), (u = o)),
        (e[n.axis] = u),
        (e._custom = { barStart: a, barEnd: u, start: r, end: s, min: o, max: l });
}
function cp(t, e, n, i) {
    return oe(t) ? $y(t, e, n, i) : (e[n.axis] = n.parse(t, i)), e;
}
function Hc(t, e, n, i) {
    const r = t.iScale,
        s = t.vScale,
        o = r.getLabels(),
        l = r === s,
        a = [];
    let u, c, f, d;
    for (u = n, c = n + i; u < c; ++u)
        (d = e[u]),
            (f = {}),
            (f[r.axis] = l || r.parse(o[u], u)),
            a.push(cp(d, f, s, u));
    return a;
}
function Wo(t) {
    return t && t.barStart !== void 0 && t.barEnd !== void 0;
}
function Uy(t, e, n) {
    return t !== 0 ? Zt(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= n ? 1 : -1);
}
function Yy(t) {
    let e, n, i, r, s;
    return (
        t.horizontal
            ? ((e = t.base > t.x), (n = "left"), (i = "right"))
            : ((e = t.base < t.y), (n = "bottom"), (i = "top")),
        e ? ((r = "end"), (s = "start")) : ((r = "start"), (s = "end")),
        { start: n, end: i, reverse: e, top: r, bottom: s }
    );
}
function Ky(t, e, n, i) {
    let r = e.borderSkipped;
    const s = {};
    if (!r) {
        t.borderSkipped = s;
        return;
    }
    if (r === !0) {
        t.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
        return;
    }
    const { start: o, end: l, reverse: a, top: u, bottom: c } = Yy(t);
    r === "middle" &&
        n &&
        ((t.enableBorderRadius = !0),
            (n._top || 0) === i
                ? (r = u)
                : (n._bottom || 0) === i
                    ? (r = c)
                    : ((s[Vc(c, o, l, a)] = !0), (r = u))),
        (s[Vc(r, o, l, a)] = !0),
        (t.borderSkipped = s);
}
function Vc(t, e, n, i) {
    return i ? ((t = Qy(t, e, n)), (t = Wc(t, n, e))) : (t = Wc(t, e, n)), t;
}
function Qy(t, e, n) {
    return t === e ? n : t === n ? e : t;
}
function Wc(t, e, n) {
    return t === "start" ? e : t === "end" ? n : t;
}
function Xy(t, { inflateAmount: e }, n) {
    t.inflateAmount = e === "auto" ? (n === 1 ? 0.33 : 0) : e;
}
class cs extends $i {
    parsePrimitiveData(e, n, i, r) {
        return Hc(e, n, i, r);
    }
    parseArrayData(e, n, i, r) {
        return Hc(e, n, i, r);
    }
    parseObjectData(e, n, i, r) {
        const { iScale: s, vScale: o } = e,
            { xAxisKey: l = "x", yAxisKey: a = "y" } = this._parsing,
            u = s.axis === "x" ? l : a,
            c = o.axis === "x" ? l : a,
            f = [];
        let d, h, y, v;
        for (d = i, h = i + r; d < h; ++d)
            (v = n[d]),
                (y = {}),
                (y[s.axis] = s.parse(ri(v, u), d)),
                f.push(cp(ri(v, c), y, o, d));
        return f;
    }
    updateRangeFromParsed(e, n, i, r) {
        super.updateRangeFromParsed(e, n, i, r);
        const s = i._custom;
        s &&
            n === this._cachedMeta.vScale &&
            ((e.min = Math.min(e.min, s.min)), (e.max = Math.max(e.max, s.max)));
    }
    getMaxOverflow() {
        return 0;
    }
    getLabelAndValue(e) {
        const n = this._cachedMeta,
            { iScale: i, vScale: r } = n,
            s = this.getParsed(e),
            o = s._custom,
            l = Wo(o)
                ? "[" + o.start + ", " + o.end + "]"
                : "" + r.getLabelForValue(s[r.axis]);
        return { label: "" + i.getLabelForValue(s[i.axis]), value: l };
    }
    initialize() {
        (this.enableOptionSharing = !0), super.initialize();
        const e = this._cachedMeta;
        e.stack = this.getDataset().stack;
    }
    update(e) {
        const n = this._cachedMeta;
        this.updateElements(n.data, 0, n.data.length, e);
    }
    updateElements(e, n, i, r) {
        const s = r === "reset",
            {
                index: o,
                _cachedMeta: { vScale: l },
            } = this,
            a = l.getBasePixel(),
            u = l.isHorizontal(),
            c = this._getRuler(),
            { sharedOptions: f, includeOptions: d } = this._getSharedOptions(n, r);
        for (let h = n; h < n + i; h++) {
            const y = this.getParsed(h),
                v =
                    s || Y(y[l.axis])
                        ? { base: a, head: a }
                        : this._calculateBarValuePixels(h),
                _ = this._calculateBarIndexPixels(h, c),
                p = (y._stacks || {})[l.axis],
                g = {
                    horizontal: u,
                    base: v.base,
                    enableBorderRadius:
                        !p || Wo(y._custom) || o === p._top || o === p._bottom,
                    x: u ? v.head : _.center,
                    y: u ? _.center : v.head,
                    height: u ? _.size : Math.abs(v.size),
                    width: u ? Math.abs(v.size) : _.size,
                };
            d &&
                (g.options =
                    f || this.resolveDataElementOptions(h, e[h].active ? "active" : r));
            const m = g.options || e[h].options;
            Ky(g, m, p, o), Xy(g, m, c.ratio), this.updateElement(e[h], h, g, r);
        }
    }
    _getStacks(e, n) {
        const { iScale: i } = this._cachedMeta,
            r = i
                .getMatchingVisibleMetas(this._type)
                .filter((c) => c.controller.options.grouped),
            s = i.options.stacked,
            o = [],
            l = this._cachedMeta.controller.getParsed(n),
            a = l && l[i.axis],
            u = (c) => {
                const f = c._parsed.find((h) => h[i.axis] === a),
                    d = f && f[c.vScale.axis];
                if (Y(d) || isNaN(d)) return !0;
            };
        for (const c of r)
            if (
                !(n !== void 0 && u(c)) &&
                ((s === !1 ||
                    o.indexOf(c.stack) === -1 ||
                    (s === void 0 && c.stack === void 0)) &&
                    o.push(c.stack),
                    c.index === e)
            )
                break;
        return o.length || o.push(void 0), o;
    }
    _getStackCount(e) {
        return this._getStacks(void 0, e).length;
    }
    _getStackIndex(e, n, i) {
        const r = this._getStacks(e, i),
            s = n !== void 0 ? r.indexOf(n) : -1;
        return s === -1 ? r.length - 1 : s;
    }
    _getRuler() {
        const e = this.options,
            n = this._cachedMeta,
            i = n.iScale,
            r = [];
        let s, o;
        for (s = 0, o = n.data.length; s < o; ++s)
            r.push(i.getPixelForValue(this.getParsed(s)[i.axis], s));
        const l = e.barThickness;
        return {
            min: l || Hy(n),
            pixels: r,
            start: i._startPixel,
            end: i._endPixel,
            stackCount: this._getStackCount(),
            scale: i,
            grouped: e.grouped,
            ratio: l ? 1 : e.categoryPercentage * e.barPercentage,
        };
    }
    _calculateBarValuePixels(e) {
        const {
            _cachedMeta: { vScale: n, _stacked: i, index: r },
            options: { base: s, minBarLength: o },
        } = this,
            l = s || 0,
            a = this.getParsed(e),
            u = a._custom,
            c = Wo(u);
        let f = a[n.axis],
            d = 0,
            h = i ? this.applyStack(n, a, i) : f,
            y,
            v;
        h !== f && ((d = h - f), (h = f)),
            c &&
            ((f = u.barStart),
                (h = u.barEnd - u.barStart),
                f !== 0 && Zt(f) !== Zt(u.barEnd) && (d = 0),
                (d += f));
        const _ = !Y(s) && !c ? s : d;
        let p = n.getPixelForValue(_);
        if (
            (this.chart.getDataVisibility(e)
                ? (y = n.getPixelForValue(d + h))
                : (y = p),
                (v = y - p),
                Math.abs(v) < o)
        ) {
            (v = Uy(v, n, l) * o), f === l && (p -= v / 2);
            const g = n.getPixelForDecimal(0),
                m = n.getPixelForDecimal(1),
                x = Math.min(g, m),
                w = Math.max(g, m);
            (p = Math.max(Math.min(p, w), x)),
                (y = p + v),
                i &&
                !c &&
                (a._stacks[n.axis]._visualValues[r] =
                    n.getValueForPixel(y) - n.getValueForPixel(p));
        }
        if (p === n.getPixelForValue(l)) {
            const g = (Zt(v) * n.getLineWidthForValue(l)) / 2;
            (p += g), (v -= g);
        }
        return { size: v, base: p, head: y, center: y + v / 2 };
    }
    _calculateBarIndexPixels(e, n) {
        const i = n.scale,
            r = this.options,
            s = r.skipNull,
            o = B(r.maxBarThickness, 1 / 0);
        let l, a;
        if (n.grouped) {
            const u = s ? this._getStackCount(e) : n.stackCount,
                c = r.barThickness === "flex" ? Wy(e, n, r, u) : Vy(e, n, r, u),
                f = this._getStackIndex(
                    this.index,
                    this._cachedMeta.stack,
                    s ? e : void 0
                );
            (l = c.start + c.chunk * f + c.chunk / 2),
                (a = Math.min(o, c.chunk * c.ratio));
        } else
            (l = i.getPixelForValue(this.getParsed(e)[i.axis], e)),
                (a = Math.min(o, n.min * n.ratio));
        return { base: l - a / 2, head: l + a / 2, center: l, size: a };
    }
    draw() {
        const e = this._cachedMeta,
            n = e.vScale,
            i = e.data,
            r = i.length;
        let s = 0;
        for (; s < r; ++s)
            this.getParsed(s)[n.axis] !== null &&
                !i[s].hidden &&
                i[s].draw(this._ctx);
    }
}
F(cs, "id", "bar"),
    F(cs, "defaults", {
        datasetElementType: !1,
        dataElementType: "bar",
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        grouped: !0,
        animations: {
            numbers: {
                type: "number",
                properties: ["x", "y", "base", "width", "height"],
            },
        },
    }),
    F(cs, "overrides", {
        scales: {
            _index_: { type: "category", offset: !0, grid: { offset: !0 } },
            _value_: { type: "linear", beginAtZero: !0 },
        },
    });
function un() {
    throw new Error(
        "This method is not implemented: Check that a complete date adapter is provided."
    );
}
class iu {
    constructor(e) {
        F(this, "options");
        this.options = e || {};
    }
    static override(e) {
        Object.assign(iu.prototype, e);
    }
    init() { }
    formats() {
        return un();
    }
    parse() {
        return un();
    }
    format() {
        return un();
    }
    add() {
        return un();
    }
    diff() {
        return un();
    }
    startOf() {
        return un();
    }
    endOf() {
        return un();
    }
}
var Gy = { _date: iu };
function Zy(t, e, n, i) {
    const { controller: r, data: s, _sorted: o } = t,
        l = r._cachedMeta.iScale;
    if (l && e === l.axis && e !== "r" && o && s.length) {
        const a = l._reversePixels ? j0 : Wl;
        if (i) {
            if (r._sharedOptions) {
                const u = s[0],
                    c = typeof u.getRange == "function" && u.getRange(e);
                if (c) {
                    const f = a(s, e, n - c),
                        d = a(s, e, n + c);
                    return { lo: f.lo, hi: d.hi };
                }
            }
        } else return a(s, e, n);
    }
    return { lo: 0, hi: s.length - 1 };
}
function _r(t, e, n, i, r) {
    const s = t.getSortedVisibleDatasetMetas(),
        o = n[e];
    for (let l = 0, a = s.length; l < a; ++l) {
        const { index: u, data: c } = s[l],
            { lo: f, hi: d } = Zy(s[l], e, o, r);
        for (let h = f; h <= d; ++h) {
            const y = c[h];
            y.skip || i(y, u, h);
        }
    }
}
function qy(t) {
    const e = t.indexOf("x") !== -1,
        n = t.indexOf("y") !== -1;
    return function (i, r) {
        const s = e ? Math.abs(i.x - r.x) : 0,
            o = n ? Math.abs(i.y - r.y) : 0;
        return Math.sqrt(Math.pow(s, 2) + Math.pow(o, 2));
    };
}
function $o(t, e, n, i, r) {
    const s = [];
    return (
        (!r && !t.isPointInArea(e)) ||
        _r(
            t,
            n,
            e,
            function (l, a, u) {
                (!r && !Jh(l, t.chartArea, 0)) ||
                    (l.inRange(e.x, e.y, i) &&
                        s.push({ element: l, datasetIndex: a, index: u }));
            },
            !0
        ),
        s
    );
}
function Jy(t, e, n, i) {
    let r = [];
    function s(o, l, a) {
        const { startAngle: u, endAngle: c } = o.getProps(
            ["startAngle", "endAngle"],
            i
        ),
            { angle: f } = I0(o, { x: e.x, y: e.y });
        N0(f, u, c) && r.push({ element: o, datasetIndex: l, index: a });
    }
    return _r(t, n, e, s), r;
}
function ev(t, e, n, i, r, s) {
    let o = [];
    const l = qy(n);
    let a = Number.POSITIVE_INFINITY;
    function u(c, f, d) {
        const h = c.inRange(e.x, e.y, r);
        if (i && !h) return;
        const y = c.getCenterPoint(r);
        if (!(!!s || t.isPointInArea(y)) && !h) return;
        const _ = l(e, y);
        _ < a
            ? ((o = [{ element: c, datasetIndex: f, index: d }]), (a = _))
            : _ === a && o.push({ element: c, datasetIndex: f, index: d });
    }
    return _r(t, n, e, u), o;
}
function Uo(t, e, n, i, r, s) {
    return !s && !t.isPointInArea(e)
        ? []
        : n === "r" && !i
            ? Jy(t, e, n, r)
            : ev(t, e, n, i, r, s);
}
function $c(t, e, n, i, r) {
    const s = [],
        o = n === "x" ? "inXRange" : "inYRange";
    let l = !1;
    return (
        _r(t, n, e, (a, u, c) => {
            a[o] &&
                a[o](e[n], r) &&
                (s.push({ element: a, datasetIndex: u, index: c }),
                    (l = l || a.inRange(e.x, e.y, r)));
        }),
        i && !l ? [] : s
    );
}
var tv = {
    evaluateInteractionItems: _r,
    modes: {
        index(t, e, n, i) {
            const r = dn(e, t),
                s = n.axis || "x",
                o = n.includeInvisible || !1,
                l = n.intersect ? $o(t, r, s, i, o) : Uo(t, r, s, !1, i, o),
                a = [];
            return l.length
                ? (t.getSortedVisibleDatasetMetas().forEach((u) => {
                    const c = l[0].index,
                        f = u.data[c];
                    f &&
                        !f.skip &&
                        a.push({ element: f, datasetIndex: u.index, index: c });
                }),
                    a)
                : [];
        },
        dataset(t, e, n, i) {
            const r = dn(e, t),
                s = n.axis || "xy",
                o = n.includeInvisible || !1;
            let l = n.intersect ? $o(t, r, s, i, o) : Uo(t, r, s, !1, i, o);
            if (l.length > 0) {
                const a = l[0].datasetIndex,
                    u = t.getDatasetMeta(a).data;
                l = [];
                for (let c = 0; c < u.length; ++c)
                    l.push({ element: u[c], datasetIndex: a, index: c });
            }
            return l;
        },
        point(t, e, n, i) {
            const r = dn(e, t),
                s = n.axis || "xy",
                o = n.includeInvisible || !1;
            return $o(t, r, s, i, o);
        },
        nearest(t, e, n, i) {
            const r = dn(e, t),
                s = n.axis || "xy",
                o = n.includeInvisible || !1;
            return Uo(t, r, s, n.intersect, i, o);
        },
        x(t, e, n, i) {
            const r = dn(e, t);
            return $c(t, r, "x", n.intersect, i);
        },
        y(t, e, n, i) {
            const r = dn(e, t);
            return $c(t, r, "y", n.intersect, i);
        },
    },
};
const fp = ["left", "top", "right", "bottom"];
function xi(t, e) {
    return t.filter((n) => n.pos === e);
}
function Uc(t, e) {
    return t.filter((n) => fp.indexOf(n.pos) === -1 && n.box.axis === e);
}
function wi(t, e) {
    return t.sort((n, i) => {
        const r = e ? i : n,
            s = e ? n : i;
        return r.weight === s.weight ? r.index - s.index : r.weight - s.weight;
    });
}
function nv(t) {
    const e = [];
    let n, i, r, s, o, l;
    for (n = 0, i = (t || []).length; n < i; ++n)
        (r = t[n]),
            ({
                position: s,
                options: { stack: o, stackWeight: l = 1 },
            } = r),
            e.push({
                index: n,
                box: r,
                pos: s,
                horizontal: r.isHorizontal(),
                weight: r.weight,
                stack: o && s + o,
                stackWeight: l,
            });
    return e;
}
function iv(t) {
    const e = {};
    for (const n of t) {
        const { stack: i, pos: r, stackWeight: s } = n;
        if (!i || !fp.includes(r)) continue;
        const o = e[i] || (e[i] = { count: 0, placed: 0, weight: 0, size: 0 });
        o.count++, (o.weight += s);
    }
    return e;
}
function rv(t, e) {
    const n = iv(t),
        { vBoxMaxWidth: i, hBoxMaxHeight: r } = e;
    let s, o, l;
    for (s = 0, o = t.length; s < o; ++s) {
        l = t[s];
        const { fullSize: a } = l.box,
            u = n[l.stack],
            c = u && l.stackWeight / u.weight;
        l.horizontal
            ? ((l.width = c ? c * i : a && e.availableWidth), (l.height = r))
            : ((l.width = i), (l.height = c ? c * r : a && e.availableHeight));
    }
    return n;
}
function sv(t) {
    const e = nv(t),
        n = wi(
            e.filter((u) => u.box.fullSize),
            !0
        ),
        i = wi(xi(e, "left"), !0),
        r = wi(xi(e, "right")),
        s = wi(xi(e, "top"), !0),
        o = wi(xi(e, "bottom")),
        l = Uc(e, "x"),
        a = Uc(e, "y");
    return {
        fullSize: n,
        leftAndTop: i.concat(s),
        rightAndBottom: r.concat(a).concat(o).concat(l),
        chartArea: xi(e, "chartArea"),
        vertical: i.concat(r).concat(a),
        horizontal: s.concat(o).concat(l),
    };
}
function Yc(t, e, n, i) {
    return Math.max(t[n], e[n]) + Math.max(t[i], e[i]);
}
function dp(t, e) {
    (t.top = Math.max(t.top, e.top)),
        (t.left = Math.max(t.left, e.left)),
        (t.bottom = Math.max(t.bottom, e.bottom)),
        (t.right = Math.max(t.right, e.right));
}
function ov(t, e, n, i) {
    const { pos: r, box: s } = n,
        o = t.maxPadding;
    if (!A(r)) {
        n.size && (t[r] -= n.size);
        const f = i[n.stack] || { size: 0, count: 1 };
        (f.size = Math.max(f.size, n.horizontal ? s.height : s.width)),
            (n.size = f.size / f.count),
            (t[r] += n.size);
    }
    s.getPadding && dp(o, s.getPadding());
    const l = Math.max(0, e.outerWidth - Yc(o, t, "left", "right")),
        a = Math.max(0, e.outerHeight - Yc(o, t, "top", "bottom")),
        u = l !== t.w,
        c = a !== t.h;
    return (
        (t.w = l),
        (t.h = a),
        n.horizontal ? { same: u, other: c } : { same: c, other: u }
    );
}
function lv(t) {
    const e = t.maxPadding;
    function n(i) {
        const r = Math.max(e[i] - t[i], 0);
        return (t[i] += r), r;
    }
    (t.y += n("top")), (t.x += n("left")), n("right"), n("bottom");
}
function av(t, e) {
    const n = e.maxPadding;
    function i(r) {
        const s = { left: 0, top: 0, right: 0, bottom: 0 };
        return (
            r.forEach((o) => {
                s[o] = Math.max(e[o], n[o]);
            }),
            s
        );
    }
    return i(t ? ["left", "right"] : ["top", "bottom"]);
}
function Ti(t, e, n, i) {
    const r = [];
    let s, o, l, a, u, c;
    for (s = 0, o = t.length, u = 0; s < o; ++s) {
        (l = t[s]),
            (a = l.box),
            a.update(l.width || e.w, l.height || e.h, av(l.horizontal, e));
        const { same: f, other: d } = ov(e, n, l, i);
        (u |= f && r.length), (c = c || d), a.fullSize || r.push(l);
    }
    return (u && Ti(r, e, n, i)) || c;
}
function $r(t, e, n, i, r) {
    (t.top = n),
        (t.left = e),
        (t.right = e + i),
        (t.bottom = n + r),
        (t.width = i),
        (t.height = r);
}
function Kc(t, e, n, i) {
    const r = n.padding;
    let { x: s, y: o } = e;
    for (const l of t) {
        const a = l.box,
            u = i[l.stack] || { count: 1, placed: 0, weight: 1 },
            c = l.stackWeight / u.weight || 1;
        if (l.horizontal) {
            const f = e.w * c,
                d = u.size || a.height;
            cr(u.start) && (o = u.start),
                a.fullSize
                    ? $r(a, r.left, o, n.outerWidth - r.right - r.left, d)
                    : $r(a, e.left + u.placed, o, f, d),
                (u.start = o),
                (u.placed += f),
                (o = a.bottom);
        } else {
            const f = e.h * c,
                d = u.size || a.width;
            cr(u.start) && (s = u.start),
                a.fullSize
                    ? $r(a, s, r.top, d, n.outerHeight - r.bottom - r.top)
                    : $r(a, s, e.top + u.placed, d, f),
                (u.start = s),
                (u.placed += f),
                (s = a.right);
        }
    }
    (e.x = s), (e.y = o);
}
var Ye = {
    addBox(t, e) {
        t.boxes || (t.boxes = []),
            (e.fullSize = e.fullSize || !1),
            (e.position = e.position || "top"),
            (e.weight = e.weight || 0),
            (e._layers =
                e._layers ||
                function () {
                    return [
                        {
                            z: 0,
                            draw(n) {
                                e.draw(n);
                            },
                        },
                    ];
                }),
            t.boxes.push(e);
    },
    removeBox(t, e) {
        const n = t.boxes ? t.boxes.indexOf(e) : -1;
        n !== -1 && t.boxes.splice(n, 1);
    },
    configure(t, e, n) {
        (e.fullSize = n.fullSize), (e.position = n.position), (e.weight = n.weight);
    },
    update(t, e, n, i) {
        if (!t) return;
        const r = Ze(t.options.layout.padding),
            s = Math.max(e - r.width, 0),
            o = Math.max(n - r.height, 0),
            l = sv(t.boxes),
            a = l.vertical,
            u = l.horizontal;
        N(t.boxes, (v) => {
            typeof v.beforeLayout == "function" && v.beforeLayout();
        });
        const c =
            a.reduce(
                (v, _) => (_.box.options && _.box.options.display === !1 ? v : v + 1),
                0
            ) || 1,
            f = Object.freeze({
                outerWidth: e,
                outerHeight: n,
                padding: r,
                availableWidth: s,
                availableHeight: o,
                vBoxMaxWidth: s / 2 / c,
                hBoxMaxHeight: o / 2,
            }),
            d = Object.assign({}, r);
        dp(d, Ze(i));
        const h = Object.assign(
            { maxPadding: d, w: s, h: o, x: r.left, y: r.top },
            r
        ),
            y = rv(a.concat(u), f);
        Ti(l.fullSize, h, f, y),
            Ti(a, h, f, y),
            Ti(u, h, f, y) && Ti(a, h, f, y),
            lv(h),
            Kc(l.leftAndTop, h, f, y),
            (h.x += h.w),
            (h.y += h.h),
            Kc(l.rightAndBottom, h, f, y),
            (t.chartArea = {
                left: h.left,
                top: h.top,
                right: h.left + h.w,
                bottom: h.top + h.h,
                height: h.h,
                width: h.w,
            }),
            N(l.chartArea, (v) => {
                const _ = v.box;
                Object.assign(_, t.chartArea),
                    _.update(h.w, h.h, { left: 0, top: 0, right: 0, bottom: 0 });
            });
    },
};
class hp {
    acquireContext(e, n) { }
    releaseContext(e) {
        return !1;
    }
    addEventListener(e, n, i) { }
    removeEventListener(e, n, i) { }
    getDevicePixelRatio() {
        return 1;
    }
    getMaximumSize(e, n, i, r) {
        return (
            (n = Math.max(0, n || e.width)),
            (i = i || e.height),
            { width: n, height: Math.max(0, r ? Math.floor(n / r) : i) }
        );
    }
    isAttached(e) {
        return !0;
    }
    updateConfig(e) { }
}
class uv extends hp {
    acquireContext(e) {
        return (e && e.getContext && e.getContext("2d")) || null;
    }
    updateConfig(e) {
        e.options.animation = !1;
    }
}
const fs = "$chartjs",
    cv = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout",
    },
    Qc = (t) => t === null || t === "";
function fv(t, e) {
    const n = t.style,
        i = t.getAttribute("height"),
        r = t.getAttribute("width");
    if (
        ((t[fs] = {
            initial: {
                height: i,
                width: r,
                style: { display: n.display, height: n.height, width: n.width },
            },
        }),
            (n.display = n.display || "block"),
            (n.boxSizing = n.boxSizing || "border-box"),
            Qc(r))
    ) {
        const s = Dc(t, "width");
        s !== void 0 && (t.width = s);
    }
    if (Qc(i))
        if (t.style.height === "") t.height = t.width / (e || 2);
        else {
            const s = Dc(t, "height");
            s !== void 0 && (t.height = s);
        }
    return t;
}
const pp = Sy ? { passive: !0 } : !1;
function dv(t, e, n) {
    t && t.addEventListener(e, n, pp);
}
function hv(t, e, n) {
    t && t.canvas && t.canvas.removeEventListener(e, n, pp);
}
function pv(t, e) {
    const n = cv[t.type] || t.type,
        { x: i, y: r } = dn(t, e);
    return {
        type: n,
        chart: e,
        native: t,
        x: i !== void 0 ? i : null,
        y: r !== void 0 ? r : null,
    };
}
function $s(t, e) {
    for (const n of t) if (n === e || n.contains(e)) return !0;
}
function gv(t, e, n) {
    const i = t.canvas,
        r = new MutationObserver((s) => {
            let o = !1;
            for (const l of s)
                (o = o || $s(l.addedNodes, i)), (o = o && !$s(l.removedNodes, i));
            o && n();
        });
    return r.observe(document, { childList: !0, subtree: !0 }), r;
}
function mv(t, e, n) {
    const i = t.canvas,
        r = new MutationObserver((s) => {
            let o = !1;
            for (const l of s)
                (o = o || $s(l.removedNodes, i)), (o = o && !$s(l.addedNodes, i));
            o && n();
        });
    return r.observe(document, { childList: !0, subtree: !0 }), r;
}
const dr = new Map();
let Xc = 0;
function gp() {
    const t = window.devicePixelRatio;
    t !== Xc &&
        ((Xc = t),
            dr.forEach((e, n) => {
                n.currentDevicePixelRatio !== t && e();
            }));
}
function yv(t, e) {
    dr.size || window.addEventListener("resize", gp), dr.set(t, e);
}
function vv(t) {
    dr.delete(t), dr.size || window.removeEventListener("resize", gp);
}
function _v(t, e, n) {
    const i = t.canvas,
        r = i && nu(i);
    if (!r) return;
    const s = Kh((l, a) => {
        const u = r.clientWidth;
        n(l, a), u < r.clientWidth && n();
    }, window),
        o = new ResizeObserver((l) => {
            const a = l[0],
                u = a.contentRect.width,
                c = a.contentRect.height;
            (u === 0 && c === 0) || s(u, c);
        });
    return o.observe(r), yv(t, s), o;
}
function Yo(t, e, n) {
    n && n.disconnect(), e === "resize" && vv(t);
}
function xv(t, e, n) {
    const i = t.canvas,
        r = Kh((s) => {
            t.ctx !== null && n(pv(s, t));
        }, t);
    return dv(i, e, r), r;
}
class wv extends hp {
    acquireContext(e, n) {
        const i = e && e.getContext && e.getContext("2d");
        return i && i.canvas === e ? (fv(e, n), i) : null;
    }
    releaseContext(e) {
        const n = e.canvas;
        if (!n[fs]) return !1;
        const i = n[fs].initial;
        ["height", "width"].forEach((s) => {
            const o = i[s];
            Y(o) ? n.removeAttribute(s) : n.setAttribute(s, o);
        });
        const r = i.style || {};
        return (
            Object.keys(r).forEach((s) => {
                n.style[s] = r[s];
            }),
            (n.width = n.width),
            delete n[fs],
            !0
        );
    }
    addEventListener(e, n, i) {
        this.removeEventListener(e, n);
        const r = e.$proxies || (e.$proxies = {}),
            o = { attach: gv, detach: mv, resize: _v }[n] || xv;
        r[n] = o(e, n, i);
    }
    removeEventListener(e, n) {
        const i = e.$proxies || (e.$proxies = {}),
            r = i[n];
        if (!r) return;
        (({ attach: Yo, detach: Yo, resize: Yo })[n] || hv)(e, n, r),
            (i[n] = void 0);
    }
    getDevicePixelRatio() {
        return window.devicePixelRatio;
    }
    getMaximumSize(e, n, i, r) {
        return ky(e, n, i, r);
    }
    isAttached(e) {
        const n = e && nu(e);
        return !!(n && n.isConnected);
    }
}
function kv(t) {
    return !tu() || (typeof OffscreenCanvas < "u" && t instanceof OffscreenCanvas)
        ? uv
        : wv;
}
class tn {
    constructor() {
        F(this, "x");
        F(this, "y");
        F(this, "active", !1);
        F(this, "options");
        F(this, "$animations");
    }
    tooltipPosition(e) {
        const { x: n, y: i } = this.getProps(["x", "y"], e);
        return { x: n, y: i };
    }
    hasValue() {
        return Hs(this.x) && Hs(this.y);
    }
    getProps(e, n) {
        const i = this.$animations;
        if (!n || !i) return this;
        const r = {};
        return (
            e.forEach((s) => {
                r[s] = i[s] && i[s].active() ? i[s]._to : this[s];
            }),
            r
        );
    }
}
F(tn, "defaults", {}), F(tn, "defaultRoutes");
function Sv(t, e) {
    const n = t.options.ticks,
        i = Mv(t),
        r = Math.min(n.maxTicksLimit || i, i),
        s = n.major.enabled ? bv(e) : [],
        o = s.length,
        l = s[0],
        a = s[o - 1],
        u = [];
    if (o > r) return Pv(e, u, s, o / r), u;
    const c = Cv(s, e, r);
    if (o > 0) {
        let f, d;
        const h = o > 1 ? Math.round((a - l) / (o - 1)) : null;
        for (Ur(e, u, c, Y(h) ? 0 : l - h, l), f = 0, d = o - 1; f < d; f++)
            Ur(e, u, c, s[f], s[f + 1]);
        return Ur(e, u, c, a, Y(h) ? e.length : a + h), u;
    }
    return Ur(e, u, c), u;
}
function Mv(t) {
    const e = t.options.offset,
        n = t._tickSize(),
        i = t._length / n + (e ? 0 : 1),
        r = t._maxLength / n;
    return Math.floor(Math.min(i, r));
}
function Cv(t, e, n) {
    const i = Ev(t),
        r = e.length / n;
    if (!i) return Math.max(r, 1);
    const s = z0(i);
    for (let o = 0, l = s.length - 1; o < l; o++) {
        const a = s[o];
        if (a > r) return a;
    }
    return Math.max(r, 1);
}
function bv(t) {
    const e = [];
    let n, i;
    for (n = 0, i = t.length; n < i; n++) t[n].major && e.push(n);
    return e;
}
function Pv(t, e, n, i) {
    let r = 0,
        s = n[0],
        o;
    for (i = Math.ceil(i), o = 0; o < t.length; o++)
        o === s && (e.push(t[o]), r++, (s = n[r * i]));
}
function Ur(t, e, n, i, r) {
    const s = B(i, 0),
        o = Math.min(B(r, t.length), t.length);
    let l = 0,
        a,
        u,
        c;
    for (
        n = Math.ceil(n), r && ((a = r - i), (n = a / Math.floor(a / n))), c = s;
        c < 0;

    )
        l++, (c = Math.round(s + l * n));
    for (u = Math.max(s, 0); u < o; u++)
        u === c && (e.push(t[u]), l++, (c = Math.round(s + l * n)));
}
function Ev(t) {
    const e = t.length;
    let n, i;
    if (e < 2) return !1;
    for (i = t[0], n = 1; n < e; ++n) if (t[n] - t[n - 1] !== i) return !1;
    return i;
}
const Tv = (t) => (t === "left" ? "right" : t === "right" ? "left" : t),
    Gc = (t, e, n) => (e === "top" || e === "left" ? t[e] + n : t[e] - n),
    Zc = (t, e) => Math.min(e || t, t);
function qc(t, e) {
    const n = [],
        i = t.length / e,
        r = t.length;
    let s = 0;
    for (; s < r; s += i) n.push(t[Math.floor(s)]);
    return n;
}
function Ov(t, e, n) {
    const i = t.ticks.length,
        r = Math.min(e, i - 1),
        s = t._startPixel,
        o = t._endPixel,
        l = 1e-6;
    let a = t.getPixelForTick(r),
        u;
    if (
        !(
            n &&
            (i === 1
                ? (u = Math.max(a - s, o - a))
                : e === 0
                    ? (u = (t.getPixelForTick(1) - a) / 2)
                    : (u = (a - t.getPixelForTick(r - 1)) / 2),
                (a += r < e ? u : -u),
                a < s - l || a > o + l)
        )
    )
        return a;
}
function Lv(t, e) {
    N(t, (n) => {
        const i = n.gc,
            r = i.length / 2;
        let s;
        if (r > e) {
            for (s = 0; s < r; ++s) delete n.data[i[s]];
            i.splice(0, r);
        }
    });
}
function ki(t) {
    return t.drawTicks ? t.tickLength : 0;
}
function Jc(t, e) {
    if (!t.display) return 0;
    const n = ve(t.font, e),
        i = Ze(t.padding);
    return (oe(t.text) ? t.text.length : 1) * n.lineHeight + i.height;
}
function zv(t, e) {
    return ui(t, { scale: e, type: "scale" });
}
function Dv(t, e, n) {
    return ui(t, { tick: n, index: e, type: "tick" });
}
function Rv(t, e, n) {
    let i = Xa(t);
    return ((n && e !== "right") || (!n && e === "right")) && (i = Tv(i)), i;
}
function Fv(t, e, n, i) {
    const { top: r, left: s, bottom: o, right: l, chart: a } = t,
        { chartArea: u, scales: c } = a;
    let f = 0,
        d,
        h,
        y;
    const v = o - r,
        _ = l - s;
    if (t.isHorizontal()) {
        if (((h = me(i, s, l)), A(n))) {
            const p = Object.keys(n)[0],
                g = n[p];
            y = c[p].getPixelForValue(g) + v - e;
        } else
            n === "center" ? (y = (u.bottom + u.top) / 2 + v - e) : (y = Gc(t, n, e));
        d = l - s;
    } else {
        if (A(n)) {
            const p = Object.keys(n)[0],
                g = n[p];
            h = c[p].getPixelForValue(g) - _ + e;
        } else
            n === "center" ? (h = (u.left + u.right) / 2 - _ + e) : (h = Gc(t, n, e));
        (y = me(i, o, r)), (f = n === "left" ? -nt : nt);
    }
    return { titleX: h, titleY: y, maxWidth: d, rotation: f };
}
class ci extends tn {
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.type = e.type),
            (this.options = void 0),
            (this.ctx = e.ctx),
            (this.chart = e.chart),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
            (this.maxWidth = void 0),
            (this.maxHeight = void 0),
            (this.paddingTop = void 0),
            (this.paddingBottom = void 0),
            (this.paddingLeft = void 0),
            (this.paddingRight = void 0),
            (this.axis = void 0),
            (this.labelRotation = void 0),
            (this.min = void 0),
            (this.max = void 0),
            (this._range = void 0),
            (this.ticks = []),
            (this._gridLineItems = null),
            (this._labelItems = null),
            (this._labelSizes = null),
            (this._length = 0),
            (this._maxLength = 0),
            (this._longestTextCache = {}),
            (this._startPixel = void 0),
            (this._endPixel = void 0),
            (this._reversePixels = !1),
            (this._userMax = void 0),
            (this._userMin = void 0),
            (this._suggestedMax = void 0),
            (this._suggestedMin = void 0),
            (this._ticksLength = 0),
            (this._borderValue = 0),
            (this._cache = {}),
            (this._dataLimitsCached = !1),
            (this.$context = void 0);
    }
    init(e) {
        (this.options = e.setContext(this.getContext())),
            (this.axis = e.axis),
            (this._userMin = this.parse(e.min)),
            (this._userMax = this.parse(e.max)),
            (this._suggestedMin = this.parse(e.suggestedMin)),
            (this._suggestedMax = this.parse(e.suggestedMax));
    }
    parse(e, n) {
        return e;
    }
    getUserBounds() {
        let { _userMin: e, _userMax: n, _suggestedMin: i, _suggestedMax: r } = this;
        return (
            (e = ut(e, Number.POSITIVE_INFINITY)),
            (n = ut(n, Number.NEGATIVE_INFINITY)),
            (i = ut(i, Number.POSITIVE_INFINITY)),
            (r = ut(r, Number.NEGATIVE_INFINITY)),
            { min: ut(e, i), max: ut(n, r), minDefined: Ge(e), maxDefined: Ge(n) }
        );
    }
    getMinMax(e) {
        let { min: n, max: i, minDefined: r, maxDefined: s } = this.getUserBounds(),
            o;
        if (r && s) return { min: n, max: i };
        const l = this.getMatchingVisibleMetas();
        for (let a = 0, u = l.length; a < u; ++a)
            (o = l[a].controller.getMinMax(this, e)),
                r || (n = Math.min(n, o.min)),
                s || (i = Math.max(i, o.max));
        return (
            (n = s && n > i ? i : n),
            (i = r && n > i ? n : i),
            { min: ut(n, ut(i, n)), max: ut(i, ut(n, i)) }
        );
    }
    getPadding() {
        return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0,
        };
    }
    getTicks() {
        return this.ticks;
    }
    getLabels() {
        const e = this.chart.data;
        return (
            this.options.labels ||
            (this.isHorizontal() ? e.xLabels : e.yLabels) ||
            e.labels ||
            []
        );
    }
    getLabelItems(e = this.chart.chartArea) {
        return this._labelItems || (this._labelItems = this._computeLabelItems(e));
    }
    beforeLayout() {
        (this._cache = {}), (this._dataLimitsCached = !1);
    }
    beforeUpdate() {
        U(this.options.beforeUpdate, [this]);
    }
    update(e, n, i) {
        const { beginAtZero: r, grace: s, ticks: o } = this.options,
            l = o.sampleSize;
        this.beforeUpdate(),
            (this.maxWidth = e),
            (this.maxHeight = n),
            (this._margins = i =
                Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
            (this.ticks = null),
            (this._labelSizes = null),
            (this._gridLineItems = null),
            (this._labelItems = null),
            this.beforeSetDimensions(),
            this.setDimensions(),
            this.afterSetDimensions(),
            (this._maxLength = this.isHorizontal()
                ? this.width + i.left + i.right
                : this.height + i.top + i.bottom),
            this._dataLimitsCached ||
            (this.beforeDataLimits(),
                this.determineDataLimits(),
                this.afterDataLimits(),
                (this._range = ly(this, s, r)),
                (this._dataLimitsCached = !0)),
            this.beforeBuildTicks(),
            (this.ticks = this.buildTicks() || []),
            this.afterBuildTicks();
        const a = l < this.ticks.length;
        this._convertTicksToLabels(a ? qc(this.ticks, l) : this.ticks),
            this.configure(),
            this.beforeCalculateLabelRotation(),
            this.calculateLabelRotation(),
            this.afterCalculateLabelRotation(),
            o.display &&
            (o.autoSkip || o.source === "auto") &&
            ((this.ticks = Sv(this, this.ticks)),
                (this._labelSizes = null),
                this.afterAutoSkip()),
            a && this._convertTicksToLabels(this.ticks),
            this.beforeFit(),
            this.fit(),
            this.afterFit(),
            this.afterUpdate();
    }
    configure() {
        let e = this.options.reverse,
            n,
            i;
        this.isHorizontal()
            ? ((n = this.left), (i = this.right))
            : ((n = this.top), (i = this.bottom), (e = !e)),
            (this._startPixel = n),
            (this._endPixel = i),
            (this._reversePixels = e),
            (this._length = i - n),
            (this._alignToPixels = this.options.alignToPixels);
    }
    afterUpdate() {
        U(this.options.afterUpdate, [this]);
    }
    beforeSetDimensions() {
        U(this.options.beforeSetDimensions, [this]);
    }
    setDimensions() {
        this.isHorizontal()
            ? ((this.width = this.maxWidth),
                (this.left = 0),
                (this.right = this.width))
            : ((this.height = this.maxHeight),
                (this.top = 0),
                (this.bottom = this.height)),
            (this.paddingLeft = 0),
            (this.paddingTop = 0),
            (this.paddingRight = 0),
            (this.paddingBottom = 0);
    }
    afterSetDimensions() {
        U(this.options.afterSetDimensions, [this]);
    }
    _callHooks(e) {
        this.chart.notifyPlugins(e, this.getContext()), U(this.options[e], [this]);
    }
    beforeDataLimits() {
        this._callHooks("beforeDataLimits");
    }
    determineDataLimits() { }
    afterDataLimits() {
        this._callHooks("afterDataLimits");
    }
    beforeBuildTicks() {
        this._callHooks("beforeBuildTicks");
    }
    buildTicks() {
        return [];
    }
    afterBuildTicks() {
        this._callHooks("afterBuildTicks");
    }
    beforeTickToLabelConversion() {
        U(this.options.beforeTickToLabelConversion, [this]);
    }
    generateTickLabels(e) {
        const n = this.options.ticks;
        let i, r, s;
        for (i = 0, r = e.length; i < r; i++)
            (s = e[i]), (s.label = U(n.callback, [s.value, i, e], this));
    }
    afterTickToLabelConversion() {
        U(this.options.afterTickToLabelConversion, [this]);
    }
    beforeCalculateLabelRotation() {
        U(this.options.beforeCalculateLabelRotation, [this]);
    }
    calculateLabelRotation() {
        const e = this.options,
            n = e.ticks,
            i = Zc(this.ticks.length, e.ticks.maxTicksLimit),
            r = n.minRotation || 0,
            s = n.maxRotation;
        let o = r,
            l,
            a,
            u;
        if (
            !this._isVisible() ||
            !n.display ||
            r >= s ||
            i <= 1 ||
            !this.isHorizontal()
        ) {
            this.labelRotation = r;
            return;
        }
        const c = this._getLabelSizes(),
            f = c.widest.width,
            d = c.highest.height,
            h = it(this.chart.width - f, 0, this.maxWidth);
        (l = e.offset ? this.maxWidth / i : h / (i - 1)),
            f + 6 > l &&
            ((l = h / (i - (e.offset ? 0.5 : 1))),
                (a =
                    this.maxHeight -
                    ki(e.grid) -
                    n.padding -
                    Jc(e.title, this.chart.options.font)),
                (u = Math.sqrt(f * f + d * d)),
                (o = F0(
                    Math.min(
                        Math.asin(it((c.highest.height + 6) / l, -1, 1)),
                        Math.asin(it(a / u, -1, 1)) - Math.asin(it(d / u, -1, 1))
                    )
                )),
                (o = Math.max(r, Math.min(s, o)))),
            (this.labelRotation = o);
    }
    afterCalculateLabelRotation() {
        U(this.options.afterCalculateLabelRotation, [this]);
    }
    afterAutoSkip() { }
    beforeFit() {
        U(this.options.beforeFit, [this]);
    }
    fit() {
        const e = { width: 0, height: 0 },
            {
                chart: n,
                options: { ticks: i, title: r, grid: s },
            } = this,
            o = this._isVisible(),
            l = this.isHorizontal();
        if (o) {
            const a = Jc(r, n.options.font);
            if (
                (l
                    ? ((e.width = this.maxWidth), (e.height = ki(s) + a))
                    : ((e.height = this.maxHeight), (e.width = ki(s) + a)),
                    i.display && this.ticks.length)
            ) {
                const {
                    first: u,
                    last: c,
                    widest: f,
                    highest: d,
                } = this._getLabelSizes(),
                    h = i.padding * 2,
                    y = mn(this.labelRotation),
                    v = Math.cos(y),
                    _ = Math.sin(y);
                if (l) {
                    const p = i.mirror ? 0 : _ * f.width + v * d.height;
                    e.height = Math.min(this.maxHeight, e.height + p + h);
                } else {
                    const p = i.mirror ? 0 : v * f.width + _ * d.height;
                    e.width = Math.min(this.maxWidth, e.width + p + h);
                }
                this._calculatePadding(u, c, _, v);
            }
        }
        this._handleMargins(),
            l
                ? ((this.width = this._length =
                    n.width - this._margins.left - this._margins.right),
                    (this.height = e.height))
                : ((this.width = e.width),
                    (this.height = this._length =
                        n.height - this._margins.top - this._margins.bottom));
    }
    _calculatePadding(e, n, i, r) {
        const {
            ticks: { align: s, padding: o },
            position: l,
        } = this.options,
            a = this.labelRotation !== 0,
            u = l !== "top" && this.axis === "x";
        if (this.isHorizontal()) {
            const c = this.getPixelForTick(0) - this.left,
                f = this.right - this.getPixelForTick(this.ticks.length - 1);
            let d = 0,
                h = 0;
            a
                ? u
                    ? ((d = r * e.width), (h = i * n.height))
                    : ((d = i * e.height), (h = r * n.width))
                : s === "start"
                    ? (h = n.width)
                    : s === "end"
                        ? (d = e.width)
                        : s !== "inner" && ((d = e.width / 2), (h = n.width / 2)),
                (this.paddingLeft = Math.max(
                    ((d - c + o) * this.width) / (this.width - c),
                    0
                )),
                (this.paddingRight = Math.max(
                    ((h - f + o) * this.width) / (this.width - f),
                    0
                ));
        } else {
            let c = n.height / 2,
                f = e.height / 2;
            s === "start"
                ? ((c = 0), (f = e.height))
                : s === "end" && ((c = n.height), (f = 0)),
                (this.paddingTop = c + o),
                (this.paddingBottom = f + o);
        }
    }
    _handleMargins() {
        this._margins &&
            ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
                (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
                (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
                (this._margins.bottom = Math.max(
                    this.paddingBottom,
                    this._margins.bottom
                )));
    }
    afterFit() {
        U(this.options.afterFit, [this]);
    }
    isHorizontal() {
        const { axis: e, position: n } = this.options;
        return n === "top" || n === "bottom" || e === "x";
    }
    isFullSize() {
        return this.options.fullSize;
    }
    _convertTicksToLabels(e) {
        this.beforeTickToLabelConversion(), this.generateTickLabels(e);
        let n, i;
        for (n = 0, i = e.length; n < i; n++)
            Y(e[n].label) && (e.splice(n, 1), i--, n--);
        this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
        let e = this._labelSizes;
        if (!e) {
            const n = this.options.ticks.sampleSize;
            let i = this.ticks;
            n < i.length && (i = qc(i, n)),
                (this._labelSizes = e =
                    this._computeLabelSizes(
                        i,
                        i.length,
                        this.options.ticks.maxTicksLimit
                    ));
        }
        return e;
    }
    _computeLabelSizes(e, n, i) {
        const { ctx: r, _longestTextCache: s } = this,
            o = [],
            l = [],
            a = Math.floor(n / Zc(n, i));
        let u = 0,
            c = 0,
            f,
            d,
            h,
            y,
            v,
            _,
            p,
            g,
            m,
            x,
            w;
        for (f = 0; f < n; f += a) {
            if (
                ((y = e[f].label),
                    (v = this._resolveTickFontOptions(f)),
                    (r.font = _ = v.string),
                    (p = s[_] = s[_] || { data: {}, gc: [] }),
                    (g = v.lineHeight),
                    (m = x = 0),
                    !Y(y) && !oe(y))
            )
                (m = Pc(r, p.data, p.gc, m, y)), (x = g);
            else if (oe(y))
                for (d = 0, h = y.length; d < h; ++d)
                    (w = y[d]),
                        !Y(w) && !oe(w) && ((m = Pc(r, p.data, p.gc, m, w)), (x += g));
            o.push(m), l.push(x), (u = Math.max(m, u)), (c = Math.max(x, c));
        }
        Lv(s, n);
        const k = o.indexOf(u),
            S = l.indexOf(c),
            M = (T) => ({ width: o[T] || 0, height: l[T] || 0 });
        return {
            first: M(0),
            last: M(n - 1),
            widest: M(k),
            highest: M(S),
            widths: o,
            heights: l,
        };
    }
    getLabelForValue(e) {
        return e;
    }
    getPixelForValue(e, n) {
        return NaN;
    }
    getValueForPixel(e) { }
    getPixelForTick(e) {
        const n = this.ticks;
        return e < 0 || e > n.length - 1 ? null : this.getPixelForValue(n[e].value);
    }
    getPixelForDecimal(e) {
        this._reversePixels && (e = 1 - e);
        const n = this._startPixel + e * this._length;
        return B0(this._alignToPixels ? an(this.chart, n, 0) : n);
    }
    getDecimalForPixel(e) {
        const n = (e - this._startPixel) / this._length;
        return this._reversePixels ? 1 - n : n;
    }
    getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
        const { min: e, max: n } = this;
        return e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0;
    }
    getContext(e) {
        const n = this.ticks || [];
        if (e >= 0 && e < n.length) {
            const i = n[e];
            return i.$context || (i.$context = Dv(this.getContext(), e, i));
        }
        return this.$context || (this.$context = zv(this.chart.getContext(), this));
    }
    _tickSize() {
        const e = this.options.ticks,
            n = mn(this.labelRotation),
            i = Math.abs(Math.cos(n)),
            r = Math.abs(Math.sin(n)),
            s = this._getLabelSizes(),
            o = e.autoSkipPadding || 0,
            l = s ? s.widest.width + o : 0,
            a = s ? s.highest.height + o : 0;
        return this.isHorizontal()
            ? a * i > l * r
                ? l / i
                : a / r
            : a * r < l * i
                ? a / i
                : l / r;
    }
    _isVisible() {
        const e = this.options.display;
        return e !== "auto" ? !!e : this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(e) {
        const n = this.axis,
            i = this.chart,
            r = this.options,
            { grid: s, position: o, border: l } = r,
            a = s.offset,
            u = this.isHorizontal(),
            f = this.ticks.length + (a ? 1 : 0),
            d = ki(s),
            h = [],
            y = l.setContext(this.getContext()),
            v = y.display ? y.width : 0,
            _ = v / 2,
            p = function (ee) {
                return an(i, ee, v);
            };
        let g, m, x, w, k, S, M, T, E, O, R, ie;
        if (o === "top")
            (g = p(this.bottom)),
                (S = this.bottom - d),
                (T = g - _),
                (O = p(e.top) + _),
                (ie = e.bottom);
        else if (o === "bottom")
            (g = p(this.top)),
                (O = e.top),
                (ie = p(e.bottom) - _),
                (S = g + _),
                (T = this.top + d);
        else if (o === "left")
            (g = p(this.right)),
                (k = this.right - d),
                (M = g - _),
                (E = p(e.left) + _),
                (R = e.right);
        else if (o === "right")
            (g = p(this.left)),
                (E = e.left),
                (R = p(e.right) - _),
                (k = g + _),
                (M = this.left + d);
        else if (n === "x") {
            if (o === "center") g = p((e.top + e.bottom) / 2 + 0.5);
            else if (A(o)) {
                const ee = Object.keys(o)[0],
                    he = o[ee];
                g = p(this.chart.scales[ee].getPixelForValue(he));
            }
            (O = e.top), (ie = e.bottom), (S = g + _), (T = S + d);
        } else if (n === "y") {
            if (o === "center") g = p((e.left + e.right) / 2);
            else if (A(o)) {
                const ee = Object.keys(o)[0],
                    he = o[ee];
                g = p(this.chart.scales[ee].getPixelForValue(he));
            }
            (k = g - _), (M = k - d), (E = e.left), (R = e.right);
        }
        const Fe = B(r.ticks.maxTicksLimit, f),
            X = Math.max(1, Math.ceil(f / Fe));
        for (m = 0; m < f; m += X) {
            const ee = this.getContext(m),
                he = s.setContext(ee),
                b = l.setContext(ee),
                L = he.lineWidth,
                z = he.color,
                H = b.dash || [],
                W = b.dashOffset,
                lt = he.tickWidth,
                we = he.tickColor,
                mt = he.tickBorderDash || [],
                ke = he.tickBorderDashOffset;
            (x = Ov(this, m, a)),
                x !== void 0 &&
                ((w = an(i, x, L)),
                    u ? (k = M = E = R = w) : (S = T = O = ie = w),
                    h.push({
                        tx1: k,
                        ty1: S,
                        tx2: M,
                        ty2: T,
                        x1: E,
                        y1: O,
                        x2: R,
                        y2: ie,
                        width: L,
                        color: z,
                        borderDash: H,
                        borderDashOffset: W,
                        tickWidth: lt,
                        tickColor: we,
                        tickBorderDash: mt,
                        tickBorderDashOffset: ke,
                    }));
        }
        return (this._ticksLength = f), (this._borderValue = g), h;
    }
    _computeLabelItems(e) {
        const n = this.axis,
            i = this.options,
            { position: r, ticks: s } = i,
            o = this.isHorizontal(),
            l = this.ticks,
            { align: a, crossAlign: u, padding: c, mirror: f } = s,
            d = ki(i.grid),
            h = d + c,
            y = f ? -c : h,
            v = -mn(this.labelRotation),
            _ = [];
        let p,
            g,
            m,
            x,
            w,
            k,
            S,
            M,
            T,
            E,
            O,
            R,
            ie = "middle";
        if (r === "top")
            (k = this.bottom - y), (S = this._getXAxisLabelAlignment());
        else if (r === "bottom")
            (k = this.top + y), (S = this._getXAxisLabelAlignment());
        else if (r === "left") {
            const X = this._getYAxisLabelAlignment(d);
            (S = X.textAlign), (w = X.x);
        } else if (r === "right") {
            const X = this._getYAxisLabelAlignment(d);
            (S = X.textAlign), (w = X.x);
        } else if (n === "x") {
            if (r === "center") k = (e.top + e.bottom) / 2 + h;
            else if (A(r)) {
                const X = Object.keys(r)[0],
                    ee = r[X];
                k = this.chart.scales[X].getPixelForValue(ee) + h;
            }
            S = this._getXAxisLabelAlignment();
        } else if (n === "y") {
            if (r === "center") w = (e.left + e.right) / 2 - h;
            else if (A(r)) {
                const X = Object.keys(r)[0],
                    ee = r[X];
                w = this.chart.scales[X].getPixelForValue(ee);
            }
            S = this._getYAxisLabelAlignment(d).textAlign;
        }
        n === "y" &&
            (a === "start" ? (ie = "top") : a === "end" && (ie = "bottom"));
        const Fe = this._getLabelSizes();
        for (p = 0, g = l.length; p < g; ++p) {
            (m = l[p]), (x = m.label);
            const X = s.setContext(this.getContext(p));
            (M = this.getPixelForTick(p) + s.labelOffset),
                (T = this._resolveTickFontOptions(p)),
                (E = T.lineHeight),
                (O = oe(x) ? x.length : 1);
            const ee = O / 2,
                he = X.color,
                b = X.textStrokeColor,
                L = X.textStrokeWidth;
            let z = S;
            o
                ? ((w = M),
                    S === "inner" &&
                    (p === g - 1
                        ? (z = this.options.reverse ? "left" : "right")
                        : p === 0
                            ? (z = this.options.reverse ? "right" : "left")
                            : (z = "center")),
                    r === "top"
                        ? u === "near" || v !== 0
                            ? (R = -O * E + E / 2)
                            : u === "center"
                                ? (R = -Fe.highest.height / 2 - ee * E + E)
                                : (R = -Fe.highest.height + E / 2)
                        : u === "near" || v !== 0
                            ? (R = E / 2)
                            : u === "center"
                                ? (R = Fe.highest.height / 2 - ee * E)
                                : (R = Fe.highest.height - O * E),
                    f && (R *= -1),
                    v !== 0 && !X.showLabelBackdrop && (w += (E / 2) * Math.sin(v)))
                : ((k = M), (R = ((1 - O) * E) / 2));
            let H;
            if (X.showLabelBackdrop) {
                const W = Ze(X.backdropPadding),
                    lt = Fe.heights[p],
                    we = Fe.widths[p];
                let mt = R - W.top,
                    ke = 0 - W.left;
                switch (ie) {
                    case "middle":
                        mt -= lt / 2;
                        break;
                    case "bottom":
                        mt -= lt;
                        break;
                }
                switch (S) {
                    case "center":
                        ke -= we / 2;
                        break;
                    case "right":
                        ke -= we;
                        break;
                    case "inner":
                        p === g - 1 ? (ke -= we) : p > 0 && (ke -= we / 2);
                        break;
                }
                H = {
                    left: ke,
                    top: mt,
                    width: we + W.width,
                    height: lt + W.height,
                    color: X.backdropColor,
                };
            }
            _.push({
                label: x,
                font: T,
                textOffset: R,
                options: {
                    rotation: v,
                    color: he,
                    strokeColor: b,
                    strokeWidth: L,
                    textAlign: z,
                    textBaseline: ie,
                    translation: [w, k],
                    backdrop: H,
                },
            });
        }
        return _;
    }
    _getXAxisLabelAlignment() {
        const { position: e, ticks: n } = this.options;
        if (-mn(this.labelRotation)) return e === "top" ? "left" : "right";
        let r = "center";
        return (
            n.align === "start"
                ? (r = "left")
                : n.align === "end"
                    ? (r = "right")
                    : n.align === "inner" && (r = "inner"),
            r
        );
    }
    _getYAxisLabelAlignment(e) {
        const {
            position: n,
            ticks: { crossAlign: i, mirror: r, padding: s },
        } = this.options,
            o = this._getLabelSizes(),
            l = e + s,
            a = o.widest.width;
        let u, c;
        return (
            n === "left"
                ? r
                    ? ((c = this.right + s),
                        i === "near"
                            ? (u = "left")
                            : i === "center"
                                ? ((u = "center"), (c += a / 2))
                                : ((u = "right"), (c += a)))
                    : ((c = this.right - l),
                        i === "near"
                            ? (u = "right")
                            : i === "center"
                                ? ((u = "center"), (c -= a / 2))
                                : ((u = "left"), (c = this.left)))
                : n === "right"
                    ? r
                        ? ((c = this.left + s),
                            i === "near"
                                ? (u = "right")
                                : i === "center"
                                    ? ((u = "center"), (c -= a / 2))
                                    : ((u = "left"), (c -= a)))
                        : ((c = this.left + l),
                            i === "near"
                                ? (u = "left")
                                : i === "center"
                                    ? ((u = "center"), (c += a / 2))
                                    : ((u = "right"), (c = this.right)))
                    : (u = "right"),
            { textAlign: u, x: c }
        );
    }
    _computeLabelArea() {
        if (this.options.ticks.mirror) return;
        const e = this.chart,
            n = this.options.position;
        if (n === "left" || n === "right")
            return { top: 0, left: this.left, bottom: e.height, right: this.right };
        if (n === "top" || n === "bottom")
            return { top: this.top, left: 0, bottom: this.bottom, right: e.width };
    }
    drawBackground() {
        const {
            ctx: e,
            options: { backgroundColor: n },
            left: i,
            top: r,
            width: s,
            height: o,
        } = this;
        n && (e.save(), (e.fillStyle = n), e.fillRect(i, r, s, o), e.restore());
    }
    getLineWidthForValue(e) {
        const n = this.options.grid;
        if (!this._isVisible() || !n.display) return 0;
        const r = this.ticks.findIndex((s) => s.value === e);
        return r >= 0 ? n.setContext(this.getContext(r)).lineWidth : 0;
    }
    drawGrid(e) {
        const n = this.options.grid,
            i = this.ctx,
            r =
                this._gridLineItems ||
                (this._gridLineItems = this._computeGridLineItems(e));
        let s, o;
        const l = (a, u, c) => {
            !c.width ||
                !c.color ||
                (i.save(),
                    (i.lineWidth = c.width),
                    (i.strokeStyle = c.color),
                    i.setLineDash(c.borderDash || []),
                    (i.lineDashOffset = c.borderDashOffset),
                    i.beginPath(),
                    i.moveTo(a.x, a.y),
                    i.lineTo(u.x, u.y),
                    i.stroke(),
                    i.restore());
        };
        if (n.display)
            for (s = 0, o = r.length; s < o; ++s) {
                const a = r[s];
                n.drawOnChartArea && l({ x: a.x1, y: a.y1 }, { x: a.x2, y: a.y2 }, a),
                    n.drawTicks &&
                    l(
                        { x: a.tx1, y: a.ty1 },
                        { x: a.tx2, y: a.ty2 },
                        {
                            color: a.tickColor,
                            width: a.tickWidth,
                            borderDash: a.tickBorderDash,
                            borderDashOffset: a.tickBorderDashOffset,
                        }
                    );
            }
    }
    drawBorder() {
        const {
            chart: e,
            ctx: n,
            options: { border: i, grid: r },
        } = this,
            s = i.setContext(this.getContext()),
            o = i.display ? s.width : 0;
        if (!o) return;
        const l = r.setContext(this.getContext(0)).lineWidth,
            a = this._borderValue;
        let u, c, f, d;
        this.isHorizontal()
            ? ((u = an(e, this.left, o) - o / 2),
                (c = an(e, this.right, l) + l / 2),
                (f = d = a))
            : ((f = an(e, this.top, o) - o / 2),
                (d = an(e, this.bottom, l) + l / 2),
                (u = c = a)),
            n.save(),
            (n.lineWidth = s.width),
            (n.strokeStyle = s.color),
            n.beginPath(),
            n.moveTo(u, f),
            n.lineTo(c, d),
            n.stroke(),
            n.restore();
    }
    drawLabels(e) {
        if (!this.options.ticks.display) return;
        const i = this.ctx,
            r = this._computeLabelArea();
        r && Ga(i, r);
        const s = this.getLabelItems(e);
        for (const o of s) {
            const l = o.options,
                a = o.font,
                u = o.label,
                c = o.textOffset;
            fr(i, u, 0, c, a, l);
        }
        r && Za(i);
    }
    drawTitle() {
        const {
            ctx: e,
            options: { position: n, title: i, reverse: r },
        } = this;
        if (!i.display) return;
        const s = ve(i.font),
            o = Ze(i.padding),
            l = i.align;
        let a = s.lineHeight / 2;
        n === "bottom" || n === "center" || A(n)
            ? ((a += o.bottom),
                oe(i.text) && (a += s.lineHeight * (i.text.length - 1)))
            : (a += o.top);
        const {
            titleX: u,
            titleY: c,
            maxWidth: f,
            rotation: d,
        } = Fv(this, a, n, l);
        fr(e, i.text, 0, 0, s, {
            color: i.color,
            maxWidth: f,
            rotation: d,
            textAlign: Rv(l, n, r),
            textBaseline: "middle",
            translation: [u, c],
        });
    }
    draw(e) {
        this._isVisible() &&
            (this.drawBackground(),
                this.drawGrid(e),
                this.drawBorder(),
                this.drawTitle(),
                this.drawLabels(e));
    }
    _layers() {
        const e = this.options,
            n = (e.ticks && e.ticks.z) || 0,
            i = B(e.grid && e.grid.z, -1),
            r = B(e.border && e.border.z, 0);
        return !this._isVisible() || this.draw !== ci.prototype.draw
            ? [
                {
                    z: n,
                    draw: (s) => {
                        this.draw(s);
                    },
                },
            ]
            : [
                {
                    z: i,
                    draw: (s) => {
                        this.drawBackground(), this.drawGrid(s), this.drawTitle();
                    },
                },
                {
                    z: r,
                    draw: () => {
                        this.drawBorder();
                    },
                },
                {
                    z: n,
                    draw: (s) => {
                        this.drawLabels(s);
                    },
                },
            ];
    }
    getMatchingVisibleMetas(e) {
        const n = this.chart.getSortedVisibleDatasetMetas(),
            i = this.axis + "AxisID",
            r = [];
        let s, o;
        for (s = 0, o = n.length; s < o; ++s) {
            const l = n[s];
            l[i] === this.id && (!e || l.type === e) && r.push(l);
        }
        return r;
    }
    _resolveTickFontOptions(e) {
        const n = this.options.ticks.setContext(this.getContext(e));
        return ve(n.font);
    }
    _maxDigits() {
        const e = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / e;
    }
}
class Yr {
    constructor(e, n, i) {
        (this.type = e),
            (this.scope = n),
            (this.override = i),
            (this.items = Object.create(null));
    }
    isForType(e) {
        return Object.prototype.isPrototypeOf.call(
            this.type.prototype,
            e.prototype
        );
    }
    register(e) {
        const n = Object.getPrototypeOf(e);
        let i;
        Nv(n) && (i = this.register(n));
        const r = this.items,
            s = e.id,
            o = this.scope + "." + s;
        if (!s) throw new Error("class does not have id: " + e);
        return (
            s in r ||
            ((r[s] = e),
                Iv(e, o, i),
                this.override && ne.override(e.id, e.overrides)),
            o
        );
    }
    get(e) {
        return this.items[e];
    }
    unregister(e) {
        const n = this.items,
            i = e.id,
            r = this.scope;
        i in n && delete n[i],
            r && i in ne[r] && (delete ne[r][i], this.override && delete Cn[i]);
    }
}
function Iv(t, e, n) {
    const i = ur(Object.create(null), [
        n ? ne.get(n) : {},
        ne.get(e),
        t.defaults,
    ]);
    ne.set(e, i),
        t.defaultRoutes && Av(e, t.defaultRoutes),
        t.descriptors && ne.describe(e, t.descriptors);
}
function Av(t, e) {
    Object.keys(e).forEach((n) => {
        const i = n.split("."),
            r = i.pop(),
            s = [t].concat(i).join("."),
            o = e[n].split("."),
            l = o.pop(),
            a = o.join(".");
        ne.route(s, r, a, l);
    });
}
function Nv(t) {
    return "id" in t && "defaults" in t;
}
class Bv {
    constructor() {
        (this.controllers = new Yr($i, "datasets", !0)),
            (this.elements = new Yr(tn, "elements")),
            (this.plugins = new Yr(Object, "plugins")),
            (this.scales = new Yr(ci, "scales")),
            (this._typedRegistries = [this.controllers, this.scales, this.elements]);
    }
    add(...e) {
        this._each("register", e);
    }
    remove(...e) {
        this._each("unregister", e);
    }
    addControllers(...e) {
        this._each("register", e, this.controllers);
    }
    addElements(...e) {
        this._each("register", e, this.elements);
    }
    addPlugins(...e) {
        this._each("register", e, this.plugins);
    }
    addScales(...e) {
        this._each("register", e, this.scales);
    }
    getController(e) {
        return this._get(e, this.controllers, "controller");
    }
    getElement(e) {
        return this._get(e, this.elements, "element");
    }
    getPlugin(e) {
        return this._get(e, this.plugins, "plugin");
    }
    getScale(e) {
        return this._get(e, this.scales, "scale");
    }
    removeControllers(...e) {
        this._each("unregister", e, this.controllers);
    }
    removeElements(...e) {
        this._each("unregister", e, this.elements);
    }
    removePlugins(...e) {
        this._each("unregister", e, this.plugins);
    }
    removeScales(...e) {
        this._each("unregister", e, this.scales);
    }
    _each(e, n, i) {
        [...n].forEach((r) => {
            const s = i || this._getRegistryForType(r);
            i || s.isForType(r) || (s === this.plugins && r.id)
                ? this._exec(e, s, r)
                : N(r, (o) => {
                    const l = i || this._getRegistryForType(o);
                    this._exec(e, l, o);
                });
        });
    }
    _exec(e, n, i) {
        const r = Ka(e);
        U(i["before" + r], [], i), n[e](i), U(i["after" + r], [], i);
    }
    _getRegistryForType(e) {
        for (let n = 0; n < this._typedRegistries.length; n++) {
            const i = this._typedRegistries[n];
            if (i.isForType(e)) return i;
        }
        return this.plugins;
    }
    _get(e, n, i) {
        const r = n.get(e);
        if (r === void 0)
            throw new Error('"' + e + '" is not a registered ' + i + ".");
        return r;
    }
}
var dt = new Bv();
class jv {
    constructor() {
        this._init = [];
    }
    notify(e, n, i, r) {
        n === "beforeInit" &&
            ((this._init = this._createDescriptors(e, !0)),
                this._notify(this._init, e, "install"));
        const s = r ? this._descriptors(e).filter(r) : this._descriptors(e),
            o = this._notify(s, e, n, i);
        return (
            n === "afterDestroy" &&
            (this._notify(s, e, "stop"), this._notify(this._init, e, "uninstall")),
            o
        );
    }
    _notify(e, n, i, r) {
        r = r || {};
        for (const s of e) {
            const o = s.plugin,
                l = o[i],
                a = [n, r, s.options];
            if (U(l, a, o) === !1 && r.cancelable) return !1;
        }
        return !0;
    }
    invalidate() {
        Y(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
    }
    _descriptors(e) {
        if (this._cache) return this._cache;
        const n = (this._cache = this._createDescriptors(e));
        return this._notifyStateChanges(e), n;
    }
    _createDescriptors(e, n) {
        const i = e && e.config,
            r = B(i.options && i.options.plugins, {}),
            s = Hv(i);
        return r === !1 && !n ? [] : Wv(e, s, r, n);
    }
    _notifyStateChanges(e) {
        const n = this._oldCache || [],
            i = this._cache,
            r = (s, o) =>
                s.filter((l) => !o.some((a) => l.plugin.id === a.plugin.id));
        this._notify(r(n, i), e, "stop"), this._notify(r(i, n), e, "start");
    }
}
function Hv(t) {
    const e = {},
        n = [],
        i = Object.keys(dt.plugins.items);
    for (let s = 0; s < i.length; s++) n.push(dt.getPlugin(i[s]));
    const r = t.plugins || [];
    for (let s = 0; s < r.length; s++) {
        const o = r[s];
        n.indexOf(o) === -1 && (n.push(o), (e[o.id] = !0));
    }
    return { plugins: n, localIds: e };
}
function Vv(t, e) {
    return !e && t === !1 ? null : t === !0 ? {} : t;
}
function Wv(t, { plugins: e, localIds: n }, i, r) {
    const s = [],
        o = t.getContext();
    for (const l of e) {
        const a = l.id,
            u = Vv(i[a], r);
        u !== null &&
            s.push({
                plugin: l,
                options: $v(t.config, { plugin: l, local: n[a] }, u, o),
            });
    }
    return s;
}
function $v(t, { plugin: e, local: n }, i, r) {
    const s = t.pluginScopeKeys(e),
        o = t.getOptionScopes(i, s);
    return (
        n && e.defaults && o.push(e.defaults),
        t.createResolver(o, r, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
    );
}
function Ul(t, e) {
    const n = ne.datasets[t] || {};
    return (
        ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || n.indexAxis || "x"
    );
}
function Uv(t, e) {
    let n = t;
    return (
        t === "_index_" ? (n = e) : t === "_value_" && (n = e === "x" ? "y" : "x"),
        n
    );
}
function Yv(t, e) {
    return t === e ? "_index_" : "_value_";
}
function ef(t) {
    if (t === "x" || t === "y" || t === "r") return t;
}
function Kv(t) {
    if (t === "top" || t === "bottom") return "x";
    if (t === "left" || t === "right") return "y";
}
function Yl(t, ...e) {
    if (ef(t)) return t;
    for (const n of e) {
        const i =
            n.axis || Kv(n.position) || (t.length > 1 && ef(t[0].toLowerCase()));
        if (i) return i;
    }
    throw new Error(
        `Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`
    );
}
function tf(t, e, n) {
    if (n[e + "AxisID"] === t) return { axis: e };
}
function Qv(t, e) {
    if (e.data && e.data.datasets) {
        const n = e.data.datasets.filter((i) => i.xAxisID === t || i.yAxisID === t);
        if (n.length) return tf(t, "x", n[0]) || tf(t, "y", n[0]);
    }
    return {};
}
function Xv(t, e) {
    const n = Cn[t.type] || { scales: {} },
        i = e.scales || {},
        r = Ul(t.type, e),
        s = Object.create(null);
    return (
        Object.keys(i).forEach((o) => {
            const l = i[o];
            if (!A(l))
                return console.error(`Invalid scale configuration for scale: ${o}`);
            if (l._proxy)
                return console.warn(
                    `Ignoring resolver passed as options for scale: ${o}`
                );
            const a = Yl(o, l, Qv(o, t), ne.scales[l.type]),
                u = Yv(a, r),
                c = n.scales || {};
            s[o] = Hi(Object.create(null), [{ axis: a }, l, c[a], c[u]]);
        }),
        t.data.datasets.forEach((o) => {
            const l = o.type || t.type,
                a = o.indexAxis || Ul(l, e),
                c = (Cn[l] || {}).scales || {};
            Object.keys(c).forEach((f) => {
                const d = Uv(f, a),
                    h = o[d + "AxisID"] || d;
                (s[h] = s[h] || Object.create(null)),
                    Hi(s[h], [{ axis: d }, i[h], c[f]]);
            });
        }),
        Object.keys(s).forEach((o) => {
            const l = s[o];
            Hi(l, [ne.scales[l.type], ne.scale]);
        }),
        s
    );
}
function mp(t) {
    const e = t.options || (t.options = {});
    (e.plugins = B(e.plugins, {})), (e.scales = Xv(t, e));
}
function yp(t) {
    return (
        (t = t || {}),
        (t.datasets = t.datasets || []),
        (t.labels = t.labels || []),
        t
    );
}
function Gv(t) {
    return (t = t || {}), (t.data = yp(t.data)), mp(t), t;
}
const nf = new Map(),
    vp = new Set();
function Kr(t, e) {
    let n = nf.get(t);
    return n || ((n = e()), nf.set(t, n), vp.add(n)), n;
}
const Si = (t, e, n) => {
    const i = ri(e, n);
    i !== void 0 && t.add(i);
};
class Zv {
    constructor(e) {
        (this._config = Gv(e)),
            (this._scopeCache = new Map()),
            (this._resolverCache = new Map());
    }
    get platform() {
        return this._config.platform;
    }
    get type() {
        return this._config.type;
    }
    set type(e) {
        this._config.type = e;
    }
    get data() {
        return this._config.data;
    }
    set data(e) {
        this._config.data = yp(e);
    }
    get options() {
        return this._config.options;
    }
    set options(e) {
        this._config.options = e;
    }
    get plugins() {
        return this._config.plugins;
    }
    update() {
        const e = this._config;
        this.clearCache(), mp(e);
    }
    clearCache() {
        this._scopeCache.clear(), this._resolverCache.clear();
    }
    datasetScopeKeys(e) {
        return Kr(e, () => [[`datasets.${e}`, ""]]);
    }
    datasetAnimationScopeKeys(e, n) {
        return Kr(`${e}.transition.${n}`, () => [
            [`datasets.${e}.transitions.${n}`, `transitions.${n}`],
            [`datasets.${e}`, ""],
        ]);
    }
    datasetElementScopeKeys(e, n) {
        return Kr(`${e}-${n}`, () => [
            [`datasets.${e}.elements.${n}`, `datasets.${e}`, `elements.${n}`, ""],
        ]);
    }
    pluginScopeKeys(e) {
        const n = e.id,
            i = this.type;
        return Kr(`${i}-plugin-${n}`, () => [
            [`plugins.${n}`, ...(e.additionalOptionScopes || [])],
        ]);
    }
    _cachedScopes(e, n) {
        const i = this._scopeCache;
        let r = i.get(e);
        return (!r || n) && ((r = new Map()), i.set(e, r)), r;
    }
    getOptionScopes(e, n, i) {
        const { options: r, type: s } = this,
            o = this._cachedScopes(e, i),
            l = o.get(n);
        if (l) return l;
        const a = new Set();
        n.forEach((c) => {
            e && (a.add(e), c.forEach((f) => Si(a, e, f))),
                c.forEach((f) => Si(a, r, f)),
                c.forEach((f) => Si(a, Cn[s] || {}, f)),
                c.forEach((f) => Si(a, ne, f)),
                c.forEach((f) => Si(a, $l, f));
        });
        const u = Array.from(a);
        return (
            u.length === 0 && u.push(Object.create(null)), vp.has(n) && o.set(n, u), u
        );
    }
    chartOptionScopes() {
        const { options: e, type: n } = this;
        return [e, Cn[n] || {}, ne.datasets[n] || {}, { type: n }, ne, $l];
    }
    resolveNamedOptions(e, n, i, r = [""]) {
        const s = { $shared: !0 },
            { resolver: o, subPrefixes: l } = rf(this._resolverCache, e, r);
        let a = o;
        if (Jv(o, n)) {
            (s.$shared = !1), (i = en(i) ? i() : i);
            const u = this.createResolver(e, i, l);
            a = si(o, i, u);
        }
        for (const u of n) s[u] = a[u];
        return s;
    }
    createResolver(e, n, i = [""], r) {
        const { resolver: s } = rf(this._resolverCache, e, i);
        return A(n) ? si(s, n, void 0, r) : s;
    }
}
function rf(t, e, n) {
    let i = t.get(e);
    i || ((i = new Map()), t.set(e, i));
    const r = n.join();
    let s = i.get(r);
    return (
        s ||
        ((s = {
            resolver: qa(e, n),
            subPrefixes: n.filter((l) => !l.toLowerCase().includes("hover")),
        }),
            i.set(r, s)),
        s
    );
}
const qv = (t) => A(t) && Object.getOwnPropertyNames(t).some((e) => en(t[e]));
function Jv(t, e) {
    const { isScriptable: n, isIndexable: i } = np(t);
    for (const r of e) {
        const s = n(r),
            o = i(r),
            l = (o || s) && t[r];
        if ((s && (en(l) || qv(l))) || (o && oe(l))) return !0;
    }
    return !1;
}
var e1 = "4.4.4";
const t1 = ["top", "bottom", "left", "right", "chartArea"];
function sf(t, e) {
    return t === "top" || t === "bottom" || (t1.indexOf(t) === -1 && e === "x");
}
function of(t, e) {
    return function (n, i) {
        return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t];
    };
}
function lf(t) {
    const e = t.chart,
        n = e.options.animation;
    e.notifyPlugins("afterRender"), U(n && n.onComplete, [t], e);
}
function n1(t) {
    const e = t.chart,
        n = e.options.animation;
    U(n && n.onProgress, [t], e);
}
function _p(t) {
    return (
        tu() && typeof t == "string"
            ? (t = document.getElementById(t))
            : t && t.length && (t = t[0]),
        t && t.canvas && (t = t.canvas),
        t
    );
}
const ds = {},
    af = (t) => {
        const e = _p(t);
        return Object.values(ds)
            .filter((n) => n.canvas === e)
            .pop();
    };
function i1(t, e, n) {
    const i = Object.keys(t);
    for (const r of i) {
        const s = +r;
        if (s >= e) {
            const o = t[r];
            delete t[r], (n > 0 || s > e) && (t[s + n] = o);
        }
    }
}
function r1(t, e, n, i) {
    return !n || t.type === "mouseout" ? null : i ? e : t;
}
function Qr(t, e, n) {
    return t.options.clip ? t[n] : e[n];
}
function s1(t, e) {
    const { xScale: n, yScale: i } = t;
    return n && i
        ? {
            left: Qr(n, e, "left"),
            right: Qr(n, e, "right"),
            top: Qr(i, e, "top"),
            bottom: Qr(i, e, "bottom"),
        }
        : e;
}
var zt;
let uo =
    ((zt = class {
        static register(...e) {
            dt.add(...e), uf();
        }
        static unregister(...e) {
            dt.remove(...e), uf();
        }
        constructor(e, n) {
            const i = (this.config = new Zv(n)),
                r = _p(e),
                s = af(r);
            if (s)
                throw new Error(
                    "Canvas is already in use. Chart with ID '" +
                    s.id +
                    "' must be destroyed before the canvas with ID '" +
                    s.canvas.id +
                    "' can be reused."
                );
            const o = i.createResolver(i.chartOptionScopes(), this.getContext());
            (this.platform = new (i.platform || kv(r))()),
                this.platform.updateConfig(i);
            const l = this.platform.acquireContext(r, o.aspectRatio),
                a = l && l.canvas,
                u = a && a.height,
                c = a && a.width;
            if (
                ((this.id = M0()),
                    (this.ctx = l),
                    (this.canvas = a),
                    (this.width = c),
                    (this.height = u),
                    (this._options = o),
                    (this._aspectRatio = this.aspectRatio),
                    (this._layers = []),
                    (this._metasets = []),
                    (this._stacks = void 0),
                    (this.boxes = []),
                    (this.currentDevicePixelRatio = void 0),
                    (this.chartArea = void 0),
                    (this._active = []),
                    (this._lastEvent = void 0),
                    (this._listeners = {}),
                    (this._responsiveListeners = void 0),
                    (this._sortedMetasets = []),
                    (this.scales = {}),
                    (this._plugins = new jv()),
                    (this.$proxies = {}),
                    (this._hiddenIndices = {}),
                    (this.attached = !1),
                    (this._animationsDisabled = void 0),
                    (this.$context = void 0),
                    (this._doResize = W0((f) => this.update(f), o.resizeDelay || 0)),
                    (this._dataChanges = []),
                    (ds[this.id] = this),
                    !l || !a)
            ) {
                console.error(
                    "Failed to create chart: can't acquire context from the given item"
                );
                return;
            }
            vt.listen(this, "complete", lf),
                vt.listen(this, "progress", n1),
                this._initialize(),
                this.attached && this.update();
        }
        get aspectRatio() {
            const {
                options: { aspectRatio: e, maintainAspectRatio: n },
                width: i,
                height: r,
                _aspectRatio: s,
            } = this;
            return Y(e) ? (n && s ? s : r ? i / r : null) : e;
        }
        get data() {
            return this.config.data;
        }
        set data(e) {
            this.config.data = e;
        }
        get options() {
            return this._options;
        }
        set options(e) {
            this.config.options = e;
        }
        get registry() {
            return dt;
        }
        _initialize() {
            return (
                this.notifyPlugins("beforeInit"),
                this.options.responsive
                    ? this.resize()
                    : zc(this, this.options.devicePixelRatio),
                this.bindEvents(),
                this.notifyPlugins("afterInit"),
                this
            );
        }
        clear() {
            return Ec(this.canvas, this.ctx), this;
        }
        stop() {
            return vt.stop(this), this;
        }
        resize(e, n) {
            vt.running(this)
                ? (this._resizeBeforeDraw = { width: e, height: n })
                : this._resize(e, n);
        }
        _resize(e, n) {
            const i = this.options,
                r = this.canvas,
                s = i.maintainAspectRatio && this.aspectRatio,
                o = this.platform.getMaximumSize(r, e, n, s),
                l = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
                a = this.width ? "resize" : "attach";
            (this.width = o.width),
                (this.height = o.height),
                (this._aspectRatio = this.aspectRatio),
                zc(this, l, !0) &&
                (this.notifyPlugins("resize", { size: o }),
                    U(i.onResize, [this, o], this),
                    this.attached && this._doResize(a) && this.render());
        }
        ensureScalesHaveIDs() {
            const n = this.options.scales || {};
            N(n, (i, r) => {
                i.id = r;
            });
        }
        buildOrUpdateScales() {
            const e = this.options,
                n = e.scales,
                i = this.scales,
                r = Object.keys(i).reduce((o, l) => ((o[l] = !1), o), {});
            let s = [];
            n &&
                (s = s.concat(
                    Object.keys(n).map((o) => {
                        const l = n[o],
                            a = Yl(o, l),
                            u = a === "r",
                            c = a === "x";
                        return {
                            options: l,
                            dposition: u ? "chartArea" : c ? "bottom" : "left",
                            dtype: u ? "radialLinear" : c ? "category" : "linear",
                        };
                    })
                )),
                N(s, (o) => {
                    const l = o.options,
                        a = l.id,
                        u = Yl(a, l),
                        c = B(l.type, o.dtype);
                    (l.position === void 0 || sf(l.position, u) !== sf(o.dposition)) &&
                        (l.position = o.dposition),
                        (r[a] = !0);
                    let f = null;
                    if (a in i && i[a].type === c) f = i[a];
                    else {
                        const d = dt.getScale(c);
                        (f = new d({ id: a, type: c, ctx: this.ctx, chart: this })),
                            (i[f.id] = f);
                    }
                    f.init(l, e);
                }),
                N(r, (o, l) => {
                    o || delete i[l];
                }),
                N(i, (o) => {
                    Ye.configure(this, o, o.options), Ye.addBox(this, o);
                });
        }
        _updateMetasets() {
            const e = this._metasets,
                n = this.data.datasets.length,
                i = e.length;
            if ((e.sort((r, s) => r.index - s.index), i > n)) {
                for (let r = n; r < i; ++r) this._destroyDatasetMeta(r);
                e.splice(n, i - n);
            }
            this._sortedMetasets = e.slice(0).sort(of("order", "index"));
        }
        _removeUnreferencedMetasets() {
            const {
                _metasets: e,
                data: { datasets: n },
            } = this;
            e.length > n.length && delete this._stacks,
                e.forEach((i, r) => {
                    n.filter((s) => s === i._dataset).length === 0 &&
                        this._destroyDatasetMeta(r);
                });
        }
        buildOrUpdateControllers() {
            const e = [],
                n = this.data.datasets;
            let i, r;
            for (
                this._removeUnreferencedMetasets(), i = 0, r = n.length;
                i < r;
                i++
            ) {
                const s = n[i];
                let o = this.getDatasetMeta(i);
                const l = s.type || this.config.type;
                if (
                    (o.type &&
                        o.type !== l &&
                        (this._destroyDatasetMeta(i), (o = this.getDatasetMeta(i))),
                        (o.type = l),
                        (o.indexAxis = s.indexAxis || Ul(l, this.options)),
                        (o.order = s.order || 0),
                        (o.index = i),
                        (o.label = "" + s.label),
                        (o.visible = this.isDatasetVisible(i)),
                        o.controller)
                )
                    o.controller.updateIndex(i), o.controller.linkScales();
                else {
                    const a = dt.getController(l),
                        { datasetElementType: u, dataElementType: c } = ne.datasets[l];
                    Object.assign(a, {
                        dataElementType: dt.getElement(c),
                        datasetElementType: u && dt.getElement(u),
                    }),
                        (o.controller = new a(this, i)),
                        e.push(o.controller);
                }
            }
            return this._updateMetasets(), e;
        }
        _resetElements() {
            N(
                this.data.datasets,
                (e, n) => {
                    this.getDatasetMeta(n).controller.reset();
                },
                this
            );
        }
        reset() {
            this._resetElements(), this.notifyPlugins("reset");
        }
        update(e) {
            const n = this.config;
            n.update();
            const i = (this._options = n.createResolver(
                n.chartOptionScopes(),
                this.getContext()
            )),
                r = (this._animationsDisabled = !i.animation);
            if (
                (this._updateScales(),
                    this._checkEventBindings(),
                    this._updateHiddenIndices(),
                    this._plugins.invalidate(),
                    this.notifyPlugins("beforeUpdate", { mode: e, cancelable: !0 }) === !1)
            )
                return;
            const s = this.buildOrUpdateControllers();
            this.notifyPlugins("beforeElementsUpdate");
            let o = 0;
            for (let u = 0, c = this.data.datasets.length; u < c; u++) {
                const { controller: f } = this.getDatasetMeta(u),
                    d = !r && s.indexOf(f) === -1;
                f.buildOrUpdateElements(d), (o = Math.max(+f.getMaxOverflow(), o));
            }
            (o = this._minPadding = i.layout.autoPadding ? o : 0),
                this._updateLayout(o),
                r ||
                N(s, (u) => {
                    u.reset();
                }),
                this._updateDatasets(e),
                this.notifyPlugins("afterUpdate", { mode: e }),
                this._layers.sort(of("z", "_idx"));
            const { _active: l, _lastEvent: a } = this;
            a
                ? this._eventHandler(a, !0)
                : l.length && this._updateHoverStyles(l, l, !0),
                this.render();
        }
        _updateScales() {
            N(this.scales, (e) => {
                Ye.removeBox(this, e);
            }),
                this.ensureScalesHaveIDs(),
                this.buildOrUpdateScales();
        }
        _checkEventBindings() {
            const e = this.options,
                n = new Set(Object.keys(this._listeners)),
                i = new Set(e.events);
            (!vc(n, i) || !!this._responsiveListeners !== e.responsive) &&
                (this.unbindEvents(), this.bindEvents());
        }
        _updateHiddenIndices() {
            const { _hiddenIndices: e } = this,
                n = this._getUniformDataChanges() || [];
            for (const { method: i, start: r, count: s } of n) {
                const o = i === "_removeElements" ? -s : s;
                i1(e, r, o);
            }
        }
        _getUniformDataChanges() {
            const e = this._dataChanges;
            if (!e || !e.length) return;
            this._dataChanges = [];
            const n = this.data.datasets.length,
                i = (s) =>
                    new Set(
                        e
                            .filter((o) => o[0] === s)
                            .map((o, l) => l + "," + o.splice(1).join(","))
                    ),
                r = i(0);
            for (let s = 1; s < n; s++) if (!vc(r, i(s))) return;
            return Array.from(r)
                .map((s) => s.split(","))
                .map((s) => ({ method: s[1], start: +s[2], count: +s[3] }));
        }
        _updateLayout(e) {
            if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
            Ye.update(this, this.width, this.height, e);
            const n = this.chartArea,
                i = n.width <= 0 || n.height <= 0;
            (this._layers = []),
                N(
                    this.boxes,
                    (r) => {
                        (i && r.position === "chartArea") ||
                            (r.configure && r.configure(), this._layers.push(...r._layers()));
                    },
                    this
                ),
                this._layers.forEach((r, s) => {
                    r._idx = s;
                }),
                this.notifyPlugins("afterLayout");
        }
        _updateDatasets(e) {
            if (
                this.notifyPlugins("beforeDatasetsUpdate", {
                    mode: e,
                    cancelable: !0,
                }) !== !1
            ) {
                for (let n = 0, i = this.data.datasets.length; n < i; ++n)
                    this.getDatasetMeta(n).controller.configure();
                for (let n = 0, i = this.data.datasets.length; n < i; ++n)
                    this._updateDataset(n, en(e) ? e({ datasetIndex: n }) : e);
                this.notifyPlugins("afterDatasetsUpdate", { mode: e });
            }
        }
        _updateDataset(e, n) {
            const i = this.getDatasetMeta(e),
                r = { meta: i, index: e, mode: n, cancelable: !0 };
            this.notifyPlugins("beforeDatasetUpdate", r) !== !1 &&
                (i.controller._update(n),
                    (r.cancelable = !1),
                    this.notifyPlugins("afterDatasetUpdate", r));
        }
        render() {
            this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
                (vt.has(this)
                    ? this.attached && !vt.running(this) && vt.start(this)
                    : (this.draw(), lf({ chart: this })));
        }
        draw() {
            let e;
            if (this._resizeBeforeDraw) {
                const { width: i, height: r } = this._resizeBeforeDraw;
                (this._resizeBeforeDraw = null), this._resize(i, r);
            }
            if (
                (this.clear(),
                    this.width <= 0 ||
                    this.height <= 0 ||
                    this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
            )
                return;
            const n = this._layers;
            for (e = 0; e < n.length && n[e].z <= 0; ++e) n[e].draw(this.chartArea);
            for (this._drawDatasets(); e < n.length; ++e) n[e].draw(this.chartArea);
            this.notifyPlugins("afterDraw");
        }
        _getSortedDatasetMetas(e) {
            const n = this._sortedMetasets,
                i = [];
            let r, s;
            for (r = 0, s = n.length; r < s; ++r) {
                const o = n[r];
                (!e || o.visible) && i.push(o);
            }
            return i;
        }
        getSortedVisibleDatasetMetas() {
            return this._getSortedDatasetMetas(!0);
        }
        _drawDatasets() {
            if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
                return;
            const e = this.getSortedVisibleDatasetMetas();
            for (let n = e.length - 1; n >= 0; --n) this._drawDataset(e[n]);
            this.notifyPlugins("afterDatasetsDraw");
        }
        _drawDataset(e) {
            const n = this.ctx,
                i = e._clip,
                r = !i.disabled,
                s = s1(e, this.chartArea),
                o = { meta: e, index: e.index, cancelable: !0 };
            this.notifyPlugins("beforeDatasetDraw", o) !== !1 &&
                (r &&
                    Ga(n, {
                        left: i.left === !1 ? 0 : s.left - i.left,
                        right: i.right === !1 ? this.width : s.right + i.right,
                        top: i.top === !1 ? 0 : s.top - i.top,
                        bottom: i.bottom === !1 ? this.height : s.bottom + i.bottom,
                    }),
                    e.controller.draw(),
                    r && Za(n),
                    (o.cancelable = !1),
                    this.notifyPlugins("afterDatasetDraw", o));
        }
        isPointInArea(e) {
            return Jh(e, this.chartArea, this._minPadding);
        }
        getElementsAtEventForMode(e, n, i, r) {
            const s = tv.modes[n];
            return typeof s == "function" ? s(this, e, i, r) : [];
        }
        getDatasetMeta(e) {
            const n = this.data.datasets[e],
                i = this._metasets;
            let r = i.filter((s) => s && s._dataset === n).pop();
            return (
                r ||
                ((r = {
                    type: null,
                    data: [],
                    dataset: null,
                    controller: null,
                    hidden: null,
                    xAxisID: null,
                    yAxisID: null,
                    order: (n && n.order) || 0,
                    index: e,
                    _dataset: n,
                    _parsed: [],
                    _sorted: !1,
                }),
                    i.push(r)),
                r
            );
        }
        getContext() {
            return (
                this.$context ||
                (this.$context = ui(null, { chart: this, type: "chart" }))
            );
        }
        getVisibleDatasetCount() {
            return this.getSortedVisibleDatasetMetas().length;
        }
        isDatasetVisible(e) {
            const n = this.data.datasets[e];
            if (!n) return !1;
            const i = this.getDatasetMeta(e);
            return typeof i.hidden == "boolean" ? !i.hidden : !n.hidden;
        }
        setDatasetVisibility(e, n) {
            const i = this.getDatasetMeta(e);
            i.hidden = !n;
        }
        toggleDataVisibility(e) {
            this._hiddenIndices[e] = !this._hiddenIndices[e];
        }
        getDataVisibility(e) {
            return !this._hiddenIndices[e];
        }
        _updateVisibility(e, n, i) {
            const r = i ? "show" : "hide",
                s = this.getDatasetMeta(e),
                o = s.controller._resolveAnimations(void 0, r);
            cr(n)
                ? ((s.data[n].hidden = !i), this.update())
                : (this.setDatasetVisibility(e, i),
                    o.update(s, { visible: i }),
                    this.update((l) => (l.datasetIndex === e ? r : void 0)));
        }
        hide(e, n) {
            this._updateVisibility(e, n, !1);
        }
        show(e, n) {
            this._updateVisibility(e, n, !0);
        }
        _destroyDatasetMeta(e) {
            const n = this._metasets[e];
            n && n.controller && n.controller._destroy(), delete this._metasets[e];
        }
        _stop() {
            let e, n;
            for (
                this.stop(), vt.remove(this), e = 0, n = this.data.datasets.length;
                e < n;
                ++e
            )
                this._destroyDatasetMeta(e);
        }
        destroy() {
            this.notifyPlugins("beforeDestroy");
            const { canvas: e, ctx: n } = this;
            this._stop(),
                this.config.clearCache(),
                e &&
                (this.unbindEvents(),
                    Ec(e, n),
                    this.platform.releaseContext(n),
                    (this.canvas = null),
                    (this.ctx = null)),
                delete ds[this.id],
                this.notifyPlugins("afterDestroy");
        }
        toBase64Image(...e) {
            return this.canvas.toDataURL(...e);
        }
        bindEvents() {
            this.bindUserEvents(),
                this.options.responsive
                    ? this.bindResponsiveEvents()
                    : (this.attached = !0);
        }
        bindUserEvents() {
            const e = this._listeners,
                n = this.platform,
                i = (s, o) => {
                    n.addEventListener(this, s, o), (e[s] = o);
                },
                r = (s, o, l) => {
                    (s.offsetX = o), (s.offsetY = l), this._eventHandler(s);
                };
            N(this.options.events, (s) => i(s, r));
        }
        bindResponsiveEvents() {
            this._responsiveListeners || (this._responsiveListeners = {});
            const e = this._responsiveListeners,
                n = this.platform,
                i = (a, u) => {
                    n.addEventListener(this, a, u), (e[a] = u);
                },
                r = (a, u) => {
                    e[a] && (n.removeEventListener(this, a, u), delete e[a]);
                },
                s = (a, u) => {
                    this.canvas && this.resize(a, u);
                };
            let o;
            const l = () => {
                r("attach", l),
                    (this.attached = !0),
                    this.resize(),
                    i("resize", s),
                    i("detach", o);
            };
            (o = () => {
                (this.attached = !1),
                    r("resize", s),
                    this._stop(),
                    this._resize(0, 0),
                    i("attach", l);
            }),
                n.isAttached(this.canvas) ? l() : o();
        }
        unbindEvents() {
            N(this._listeners, (e, n) => {
                this.platform.removeEventListener(this, n, e);
            }),
                (this._listeners = {}),
                N(this._responsiveListeners, (e, n) => {
                    this.platform.removeEventListener(this, n, e);
                }),
                (this._responsiveListeners = void 0);
        }
        updateHoverStyle(e, n, i) {
            const r = i ? "set" : "remove";
            let s, o, l, a;
            for (
                n === "dataset" &&
                ((s = this.getDatasetMeta(e[0].datasetIndex)),
                    s.controller["_" + r + "DatasetHoverStyle"]()),
                l = 0,
                a = e.length;
                l < a;
                ++l
            ) {
                o = e[l];
                const u = o && this.getDatasetMeta(o.datasetIndex).controller;
                u && u[r + "HoverStyle"](o.element, o.datasetIndex, o.index);
            }
        }
        getActiveElements() {
            return this._active || [];
        }
        setActiveElements(e) {
            const n = this._active || [],
                i = e.map(({ datasetIndex: s, index: o }) => {
                    const l = this.getDatasetMeta(s);
                    if (!l) throw new Error("No dataset found at index " + s);
                    return { datasetIndex: s, element: l.data[o], index: o };
                });
            !Ns(i, n) &&
                ((this._active = i),
                    (this._lastEvent = null),
                    this._updateHoverStyles(i, n));
        }
        notifyPlugins(e, n, i) {
            return this._plugins.notify(this, e, n, i);
        }
        isPluginEnabled(e) {
            return this._plugins._cache.filter((n) => n.plugin.id === e).length === 1;
        }
        _updateHoverStyles(e, n, i) {
            const r = this.options.hover,
                s = (a, u) =>
                    a.filter(
                        (c) =>
                            !u.some(
                                (f) => c.datasetIndex === f.datasetIndex && c.index === f.index
                            )
                    ),
                o = s(n, e),
                l = i ? e : s(e, n);
            o.length && this.updateHoverStyle(o, r.mode, !1),
                l.length && r.mode && this.updateHoverStyle(l, r.mode, !0);
        }
        _eventHandler(e, n) {
            const i = {
                event: e,
                replay: n,
                cancelable: !0,
                inChartArea: this.isPointInArea(e),
            },
                r = (o) =>
                    (o.options.events || this.options.events).includes(e.native.type);
            if (this.notifyPlugins("beforeEvent", i, r) === !1) return;
            const s = this._handleEvent(e, n, i.inChartArea);
            return (
                (i.cancelable = !1),
                this.notifyPlugins("afterEvent", i, r),
                (s || i.changed) && this.render(),
                this
            );
        }
        _handleEvent(e, n, i) {
            const { _active: r = [], options: s } = this,
                o = n,
                l = this._getActiveElements(e, r, i, o),
                a = O0(e),
                u = r1(e, this._lastEvent, i, a);
            i &&
                ((this._lastEvent = null),
                    U(s.onHover, [e, l, this], this),
                    a && U(s.onClick, [e, l, this], this));
            const c = !Ns(l, r);
            return (
                (c || n) && ((this._active = l), this._updateHoverStyles(l, r, n)),
                (this._lastEvent = u),
                c
            );
        }
        _getActiveElements(e, n, i, r) {
            if (e.type === "mouseout") return [];
            if (!i) return n;
            const s = this.options.hover;
            return this.getElementsAtEventForMode(e, s.mode, s, r);
        }
    }),
        F(zt, "defaults", ne),
        F(zt, "instances", ds),
        F(zt, "overrides", Cn),
        F(zt, "registry", dt),
        F(zt, "version", e1),
        F(zt, "getChart", af),
        zt);
function uf() {
    return N(uo.instances, (t) => t._plugins.invalidate());
}
function xp(t, e) {
    const {
        x: n,
        y: i,
        base: r,
        width: s,
        height: o,
    } = t.getProps(["x", "y", "base", "width", "height"], e);
    let l, a, u, c, f;
    return (
        t.horizontal
            ? ((f = o / 2),
                (l = Math.min(n, r)),
                (a = Math.max(n, r)),
                (u = i - f),
                (c = i + f))
            : ((f = s / 2),
                (l = n - f),
                (a = n + f),
                (u = Math.min(i, r)),
                (c = Math.max(i, r))),
        { left: l, top: u, right: a, bottom: c }
    );
}
function jt(t, e, n, i) {
    return t ? 0 : it(e, n, i);
}
function o1(t, e, n) {
    const i = t.options.borderWidth,
        r = t.borderSkipped,
        s = tp(i);
    return {
        t: jt(r.top, s.top, 0, n),
        r: jt(r.right, s.right, 0, e),
        b: jt(r.bottom, s.bottom, 0, n),
        l: jt(r.left, s.left, 0, e),
    };
}
function l1(t, e, n) {
    const { enableBorderRadius: i } = t.getProps(["enableBorderRadius"]),
        r = t.options.borderRadius,
        s = Xn(r),
        o = Math.min(e, n),
        l = t.borderSkipped,
        a = i || A(r);
    return {
        topLeft: jt(!a || l.top || l.left, s.topLeft, 0, o),
        topRight: jt(!a || l.top || l.right, s.topRight, 0, o),
        bottomLeft: jt(!a || l.bottom || l.left, s.bottomLeft, 0, o),
        bottomRight: jt(!a || l.bottom || l.right, s.bottomRight, 0, o),
    };
}
function a1(t) {
    const e = xp(t),
        n = e.right - e.left,
        i = e.bottom - e.top,
        r = o1(t, n / 2, i / 2),
        s = l1(t, n / 2, i / 2);
    return {
        outer: { x: e.left, y: e.top, w: n, h: i, radius: s },
        inner: {
            x: e.left + r.l,
            y: e.top + r.t,
            w: n - r.l - r.r,
            h: i - r.t - r.b,
            radius: {
                topLeft: Math.max(0, s.topLeft - Math.max(r.t, r.l)),
                topRight: Math.max(0, s.topRight - Math.max(r.t, r.r)),
                bottomLeft: Math.max(0, s.bottomLeft - Math.max(r.b, r.l)),
                bottomRight: Math.max(0, s.bottomRight - Math.max(r.b, r.r)),
            },
        },
    };
}
function Ko(t, e, n, i) {
    const r = e === null,
        s = n === null,
        l = t && !(r && s) && xp(t, i);
    return l && (r || Vn(e, l.left, l.right)) && (s || Vn(n, l.top, l.bottom));
}
function u1(t) {
    return t.topLeft || t.topRight || t.bottomLeft || t.bottomRight;
}
function c1(t, e) {
    t.rect(e.x, e.y, e.w, e.h);
}
function Qo(t, e, n = {}) {
    const i = t.x !== n.x ? -e : 0,
        r = t.y !== n.y ? -e : 0,
        s = (t.x + t.w !== n.x + n.w ? e : 0) - i,
        o = (t.y + t.h !== n.y + n.h ? e : 0) - r;
    return { x: t.x + i, y: t.y + r, w: t.w + s, h: t.h + o, radius: t.radius };
}
class hs extends tn {
    constructor(e) {
        super(),
            (this.options = void 0),
            (this.horizontal = void 0),
            (this.base = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.inflateAmount = void 0),
            e && Object.assign(this, e);
    }
    draw(e) {
        const {
            inflateAmount: n,
            options: { borderColor: i, backgroundColor: r },
        } = this,
            { inner: s, outer: o } = a1(this),
            l = u1(o.radius) ? Vs : c1;
        e.save(),
            (o.w !== s.w || o.h !== s.h) &&
            (e.beginPath(),
                l(e, Qo(o, n, s)),
                e.clip(),
                l(e, Qo(s, -n, o)),
                (e.fillStyle = i),
                e.fill("evenodd")),
            e.beginPath(),
            l(e, Qo(s, n)),
            (e.fillStyle = r),
            e.fill(),
            e.restore();
    }
    inRange(e, n, i) {
        return Ko(this, e, n, i);
    }
    inXRange(e, n) {
        return Ko(this, e, null, n);
    }
    inYRange(e, n) {
        return Ko(this, null, e, n);
    }
    getCenterPoint(e) {
        const {
            x: n,
            y: i,
            base: r,
            horizontal: s,
        } = this.getProps(["x", "y", "base", "horizontal"], e);
        return { x: s ? (n + r) / 2 : n, y: s ? i : (i + r) / 2 };
    }
    getRange(e) {
        return e === "x" ? this.width / 2 : this.height / 2;
    }
}
F(hs, "id", "bar"),
    F(hs, "defaults", {
        borderSkipped: "start",
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: "auto",
        pointStyle: void 0,
    }),
    F(hs, "defaultRoutes", {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor",
    });
const cf = (t, e) => {
    let { boxHeight: n = e, boxWidth: i = e } = t;
    return (
        t.usePointStyle &&
        ((n = Math.min(n, e)), (i = t.pointStyleWidth || Math.min(i, e))),
        { boxWidth: i, boxHeight: n, itemHeight: Math.max(e, n) }
    );
},
    f1 = (t, e) =>
        t !== null &&
        e !== null &&
        t.datasetIndex === e.datasetIndex &&
        t.index === e.index;
class ff extends tn {
    constructor(e) {
        super(),
            (this._added = !1),
            (this.legendHitBoxes = []),
            (this._hoveredItem = null),
            (this.doughnutMode = !1),
            (this.chart = e.chart),
            (this.options = e.options),
            (this.ctx = e.ctx),
            (this.legendItems = void 0),
            (this.columnSizes = void 0),
            (this.lineWidths = void 0),
            (this.maxHeight = void 0),
            (this.maxWidth = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this._margins = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0);
    }
    update(e, n, i) {
        (this.maxWidth = e),
            (this.maxHeight = n),
            (this._margins = i),
            this.setDimensions(),
            this.buildLabels(),
            this.fit();
    }
    setDimensions() {
        this.isHorizontal()
            ? ((this.width = this.maxWidth),
                (this.left = this._margins.left),
                (this.right = this.width))
            : ((this.height = this.maxHeight),
                (this.top = this._margins.top),
                (this.bottom = this.height));
    }
    buildLabels() {
        const e = this.options.labels || {};
        let n = U(e.generateLabels, [this.chart], this) || [];
        e.filter && (n = n.filter((i) => e.filter(i, this.chart.data))),
            e.sort && (n = n.sort((i, r) => e.sort(i, r, this.chart.data))),
            this.options.reverse && n.reverse(),
            (this.legendItems = n);
    }
    fit() {
        const { options: e, ctx: n } = this;
        if (!e.display) {
            this.width = this.height = 0;
            return;
        }
        const i = e.labels,
            r = ve(i.font),
            s = r.size,
            o = this._computeTitleHeight(),
            { boxWidth: l, itemHeight: a } = cf(i, s);
        let u, c;
        (n.font = r.string),
            this.isHorizontal()
                ? ((u = this.maxWidth), (c = this._fitRows(o, s, l, a) + 10))
                : ((c = this.maxHeight), (u = this._fitCols(o, r, l, a) + 10)),
            (this.width = Math.min(u, e.maxWidth || this.maxWidth)),
            (this.height = Math.min(c, e.maxHeight || this.maxHeight));
    }
    _fitRows(e, n, i, r) {
        const {
            ctx: s,
            maxWidth: o,
            options: {
                labels: { padding: l },
            },
        } = this,
            a = (this.legendHitBoxes = []),
            u = (this.lineWidths = [0]),
            c = r + l;
        let f = e;
        (s.textAlign = "left"), (s.textBaseline = "middle");
        let d = -1,
            h = -c;
        return (
            this.legendItems.forEach((y, v) => {
                const _ = i + n / 2 + s.measureText(y.text).width;
                (v === 0 || u[u.length - 1] + _ + 2 * l > o) &&
                    ((f += c), (u[u.length - (v > 0 ? 0 : 1)] = 0), (h += c), d++),
                    (a[v] = { left: 0, top: h, row: d, width: _, height: r }),
                    (u[u.length - 1] += _ + l);
            }),
            f
        );
    }
    _fitCols(e, n, i, r) {
        const {
            ctx: s,
            maxHeight: o,
            options: {
                labels: { padding: l },
            },
        } = this,
            a = (this.legendHitBoxes = []),
            u = (this.columnSizes = []),
            c = o - e;
        let f = l,
            d = 0,
            h = 0,
            y = 0,
            v = 0;
        return (
            this.legendItems.forEach((_, p) => {
                const { itemWidth: g, itemHeight: m } = d1(i, n, s, _, r);
                p > 0 &&
                    h + m + 2 * l > c &&
                    ((f += d + l),
                        u.push({ width: d, height: h }),
                        (y += d + l),
                        v++,
                        (d = h = 0)),
                    (a[p] = { left: y, top: h, col: v, width: g, height: m }),
                    (d = Math.max(d, g)),
                    (h += m + l);
            }),
            (f += d),
            u.push({ width: d, height: h }),
            f
        );
    }
    adjustHitBoxes() {
        if (!this.options.display) return;
        const e = this._computeTitleHeight(),
            {
                legendHitBoxes: n,
                options: {
                    align: i,
                    labels: { padding: r },
                    rtl: s,
                },
            } = this,
            o = Gn(s, this.left, this.width);
        if (this.isHorizontal()) {
            let l = 0,
                a = me(i, this.left + r, this.right - this.lineWidths[l]);
            for (const u of n)
                l !== u.row &&
                    ((l = u.row),
                        (a = me(i, this.left + r, this.right - this.lineWidths[l]))),
                    (u.top += this.top + e + r),
                    (u.left = o.leftForLtr(o.x(a), u.width)),
                    (a += u.width + r);
        } else {
            let l = 0,
                a = me(i, this.top + e + r, this.bottom - this.columnSizes[l].height);
            for (const u of n)
                u.col !== l &&
                    ((l = u.col),
                        (a = me(
                            i,
                            this.top + e + r,
                            this.bottom - this.columnSizes[l].height
                        ))),
                    (u.top = a),
                    (u.left += this.left + r),
                    (u.left = o.leftForLtr(o.x(u.left), u.width)),
                    (a += u.height + r);
        }
    }
    isHorizontal() {
        return (
            this.options.position === "top" || this.options.position === "bottom"
        );
    }
    draw() {
        if (this.options.display) {
            const e = this.ctx;
            Ga(e, this), this._draw(), Za(e);
        }
    }
    _draw() {
        const { options: e, columnSizes: n, lineWidths: i, ctx: r } = this,
            { align: s, labels: o } = e,
            l = ne.color,
            a = Gn(e.rtl, this.left, this.width),
            u = ve(o.font),
            { padding: c } = o,
            f = u.size,
            d = f / 2;
        let h;
        this.drawTitle(),
            (r.textAlign = a.textAlign("left")),
            (r.textBaseline = "middle"),
            (r.lineWidth = 0.5),
            (r.font = u.string);
        const { boxWidth: y, boxHeight: v, itemHeight: _ } = cf(o, f),
            p = function (k, S, M) {
                if (isNaN(y) || y <= 0 || isNaN(v) || v < 0) return;
                r.save();
                const T = B(M.lineWidth, 1);
                if (
                    ((r.fillStyle = B(M.fillStyle, l)),
                        (r.lineCap = B(M.lineCap, "butt")),
                        (r.lineDashOffset = B(M.lineDashOffset, 0)),
                        (r.lineJoin = B(M.lineJoin, "miter")),
                        (r.lineWidth = T),
                        (r.strokeStyle = B(M.strokeStyle, l)),
                        r.setLineDash(B(M.lineDash, [])),
                        o.usePointStyle)
                ) {
                    const E = {
                        radius: (v * Math.SQRT2) / 2,
                        pointStyle: M.pointStyle,
                        rotation: M.rotation,
                        borderWidth: T,
                    },
                        O = a.xPlus(k, y / 2),
                        R = S + d;
                    qh(r, E, O, R, o.pointStyleWidth && y);
                } else {
                    const E = S + Math.max((f - v) / 2, 0),
                        O = a.leftForLtr(k, y),
                        R = Xn(M.borderRadius);
                    r.beginPath(),
                        Object.values(R).some((ie) => ie !== 0)
                            ? Vs(r, { x: O, y: E, w: y, h: v, radius: R })
                            : r.rect(O, E, y, v),
                        r.fill(),
                        T !== 0 && r.stroke();
                }
                r.restore();
            },
            g = function (k, S, M) {
                fr(r, M.text, k, S + _ / 2, u, {
                    strikethrough: M.hidden,
                    textAlign: a.textAlign(M.textAlign),
                });
            },
            m = this.isHorizontal(),
            x = this._computeTitleHeight();
        m
            ? (h = {
                x: me(s, this.left + c, this.right - i[0]),
                y: this.top + c + x,
                line: 0,
            })
            : (h = {
                x: this.left + c,
                y: me(s, this.top + x + c, this.bottom - n[0].height),
                line: 0,
            }),
            op(this.ctx, e.textDirection);
        const w = _ + c;
        this.legendItems.forEach((k, S) => {
            (r.strokeStyle = k.fontColor), (r.fillStyle = k.fontColor);
            const M = r.measureText(k.text).width,
                T = a.textAlign(k.textAlign || (k.textAlign = o.textAlign)),
                E = y + d + M;
            let O = h.x,
                R = h.y;
            a.setWidth(this.width),
                m
                    ? S > 0 &&
                    O + E + c > this.right &&
                    ((R = h.y += w),
                        h.line++,
                        (O = h.x = me(s, this.left + c, this.right - i[h.line])))
                    : S > 0 &&
                    R + w > this.bottom &&
                    ((O = h.x = O + n[h.line].width + c),
                        h.line++,
                        (R = h.y =
                            me(s, this.top + x + c, this.bottom - n[h.line].height)));
            const ie = a.x(O);
            if (
                (p(ie, R, k),
                    (O = $0(T, O + y + d, m ? O + E : this.right, e.rtl)),
                    g(a.x(O), R, k),
                    m)
            )
                h.x += E + c;
            else if (typeof k.text != "string") {
                const Fe = u.lineHeight;
                h.y += wp(k, Fe) + c;
            } else h.y += w;
        }),
            lp(this.ctx, e.textDirection);
    }
    drawTitle() {
        const e = this.options,
            n = e.title,
            i = ve(n.font),
            r = Ze(n.padding);
        if (!n.display) return;
        const s = Gn(e.rtl, this.left, this.width),
            o = this.ctx,
            l = n.position,
            a = i.size / 2,
            u = r.top + a;
        let c,
            f = this.left,
            d = this.width;
        if (this.isHorizontal())
            (d = Math.max(...this.lineWidths)),
                (c = this.top + u),
                (f = me(e.align, f, this.right - d));
        else {
            const y = this.columnSizes.reduce((v, _) => Math.max(v, _.height), 0);
            c =
                u +
                me(
                    e.align,
                    this.top,
                    this.bottom - y - e.labels.padding - this._computeTitleHeight()
                );
        }
        const h = me(l, f, f + d);
        (o.textAlign = s.textAlign(Xa(l))),
            (o.textBaseline = "middle"),
            (o.strokeStyle = n.color),
            (o.fillStyle = n.color),
            (o.font = i.string),
            fr(o, n.text, h, c, i);
    }
    _computeTitleHeight() {
        const e = this.options.title,
            n = ve(e.font),
            i = Ze(e.padding);
        return e.display ? n.lineHeight + i.height : 0;
    }
    _getLegendItemAt(e, n) {
        let i, r, s;
        if (Vn(e, this.left, this.right) && Vn(n, this.top, this.bottom)) {
            for (s = this.legendHitBoxes, i = 0; i < s.length; ++i)
                if (
                    ((r = s[i]),
                        Vn(e, r.left, r.left + r.width) && Vn(n, r.top, r.top + r.height))
                )
                    return this.legendItems[i];
        }
        return null;
    }
    handleEvent(e) {
        const n = this.options;
        if (!g1(e.type, n)) return;
        const i = this._getLegendItemAt(e.x, e.y);
        if (e.type === "mousemove" || e.type === "mouseout") {
            const r = this._hoveredItem,
                s = f1(r, i);
            r && !s && U(n.onLeave, [e, r, this], this),
                (this._hoveredItem = i),
                i && !s && U(n.onHover, [e, i, this], this);
        } else i && U(n.onClick, [e, i, this], this);
    }
}
function d1(t, e, n, i, r) {
    const s = h1(i, t, e, n),
        o = p1(r, i, e.lineHeight);
    return { itemWidth: s, itemHeight: o };
}
function h1(t, e, n, i) {
    let r = t.text;
    return (
        r &&
        typeof r != "string" &&
        (r = r.reduce((s, o) => (s.length > o.length ? s : o))),
        e + n.size / 2 + i.measureText(r).width
    );
}
function p1(t, e, n) {
    let i = t;
    return typeof e.text != "string" && (i = wp(e, n)), i;
}
function wp(t, e) {
    const n = t.text ? t.text.length : 0;
    return e * n;
}
function g1(t, e) {
    return !!(
        ((t === "mousemove" || t === "mouseout") && (e.onHover || e.onLeave)) ||
        (e.onClick && (t === "click" || t === "mouseup"))
    );
}
var m1 = {
    id: "legend",
    _element: ff,
    start(t, e, n) {
        const i = (t.legend = new ff({ ctx: t.ctx, options: n, chart: t }));
        Ye.configure(t, i, n), Ye.addBox(t, i);
    },
    stop(t) {
        Ye.removeBox(t, t.legend), delete t.legend;
    },
    beforeUpdate(t, e, n) {
        const i = t.legend;
        Ye.configure(t, i, n), (i.options = n);
    },
    afterUpdate(t) {
        const e = t.legend;
        e.buildLabels(), e.adjustHitBoxes();
    },
    afterEvent(t, e) {
        e.replay || t.legend.handleEvent(e.event);
    },
    defaults: {
        display: !0,
        position: "top",
        align: "center",
        fullSize: !0,
        reverse: !1,
        weight: 1e3,
        onClick(t, e, n) {
            const i = e.datasetIndex,
                r = n.chart;
            r.isDatasetVisible(i)
                ? (r.hide(i), (e.hidden = !0))
                : (r.show(i), (e.hidden = !1));
        },
        onHover: null,
        onLeave: null,
        labels: {
            color: (t) => t.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels(t) {
                const e = t.data.datasets,
                    {
                        labels: {
                            usePointStyle: n,
                            pointStyle: i,
                            textAlign: r,
                            color: s,
                            useBorderRadius: o,
                            borderRadius: l,
                        },
                    } = t.legend.options;
                return t._getSortedDatasetMetas().map((a) => {
                    const u = a.controller.getStyle(n ? 0 : void 0),
                        c = Ze(u.borderWidth);
                    return {
                        text: e[a.index].label,
                        fillStyle: u.backgroundColor,
                        fontColor: s,
                        hidden: !a.visible,
                        lineCap: u.borderCapStyle,
                        lineDash: u.borderDash,
                        lineDashOffset: u.borderDashOffset,
                        lineJoin: u.borderJoinStyle,
                        lineWidth: (c.width + c.height) / 4,
                        strokeStyle: u.borderColor,
                        pointStyle: i || u.pointStyle,
                        rotation: u.rotation,
                        textAlign: r || u.textAlign,
                        borderRadius: o && (l || u.borderRadius),
                        datasetIndex: a.index,
                    };
                }, this);
            },
        },
        title: {
            color: (t) => t.chart.options.color,
            display: !1,
            position: "center",
            text: "",
        },
    },
    descriptors: {
        _scriptable: (t) => !t.startsWith("on"),
        labels: {
            _scriptable: (t) => !["generateLabels", "filter", "sort"].includes(t),
        },
    },
};
class kp extends tn {
    constructor(e) {
        super(),
            (this.chart = e.chart),
            (this.options = e.options),
            (this.ctx = e.ctx),
            (this._padding = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0);
    }
    update(e, n) {
        const i = this.options;
        if (((this.left = 0), (this.top = 0), !i.display)) {
            this.width = this.height = this.right = this.bottom = 0;
            return;
        }
        (this.width = this.right = e), (this.height = this.bottom = n);
        const r = oe(i.text) ? i.text.length : 1;
        this._padding = Ze(i.padding);
        const s = r * ve(i.font).lineHeight + this._padding.height;
        this.isHorizontal() ? (this.height = s) : (this.width = s);
    }
    isHorizontal() {
        const e = this.options.position;
        return e === "top" || e === "bottom";
    }
    _drawArgs(e) {
        const { top: n, left: i, bottom: r, right: s, options: o } = this,
            l = o.align;
        let a = 0,
            u,
            c,
            f;
        return (
            this.isHorizontal()
                ? ((c = me(l, i, s)), (f = n + e), (u = s - i))
                : (o.position === "left"
                    ? ((c = i + e), (f = me(l, r, n)), (a = _e * -0.5))
                    : ((c = s - e), (f = me(l, n, r)), (a = _e * 0.5)),
                    (u = r - n)),
            { titleX: c, titleY: f, maxWidth: u, rotation: a }
        );
    }
    draw() {
        const e = this.ctx,
            n = this.options;
        if (!n.display) return;
        const i = ve(n.font),
            s = i.lineHeight / 2 + this._padding.top,
            { titleX: o, titleY: l, maxWidth: a, rotation: u } = this._drawArgs(s);
        fr(e, n.text, 0, 0, i, {
            color: n.color,
            maxWidth: a,
            rotation: u,
            textAlign: Xa(n.align),
            textBaseline: "middle",
            translation: [o, l],
        });
    }
}
function y1(t, e) {
    const n = new kp({ ctx: t.ctx, options: e, chart: t });
    Ye.configure(t, n, e), Ye.addBox(t, n), (t.titleBlock = n);
}
var v1 = {
    id: "title",
    _element: kp,
    start(t, e, n) {
        y1(t, n);
    },
    stop(t) {
        const e = t.titleBlock;
        Ye.removeBox(t, e), delete t.titleBlock;
    },
    beforeUpdate(t, e, n) {
        const i = t.titleBlock;
        Ye.configure(t, i, n), (i.options = n);
    },
    defaults: {
        align: "center",
        display: !1,
        font: { weight: "bold" },
        fullSize: !0,
        padding: 10,
        position: "top",
        text: "",
        weight: 2e3,
    },
    defaultRoutes: { color: "color" },
    descriptors: { _scriptable: !0, _indexable: !1 },
};
const Oi = {
    average(t) {
        if (!t.length) return !1;
        let e,
            n,
            i = new Set(),
            r = 0,
            s = 0;
        for (e = 0, n = t.length; e < n; ++e) {
            const l = t[e].element;
            if (l && l.hasValue()) {
                const a = l.tooltipPosition();
                i.add(a.x), (r += a.y), ++s;
            }
        }
        return s === 0 || i.size === 0
            ? !1
            : { x: [...i].reduce((l, a) => l + a) / i.size, y: r / s };
    },
    nearest(t, e) {
        if (!t.length) return !1;
        let n = e.x,
            i = e.y,
            r = Number.POSITIVE_INFINITY,
            s,
            o,
            l;
        for (s = 0, o = t.length; s < o; ++s) {
            const a = t[s].element;
            if (a && a.hasValue()) {
                const u = a.getCenterPoint(),
                    c = A0(e, u);
                c < r && ((r = c), (l = a));
            }
        }
        if (l) {
            const a = l.tooltipPosition();
            (n = a.x), (i = a.y);
        }
        return { x: n, y: i };
    },
};
function ct(t, e) {
    return e && (oe(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
}
function _t(t) {
    return (typeof t == "string" || t instanceof String) &&
        t.indexOf(`
`) > -1
        ? t.split(`
`)
        : t;
}
function _1(t, e) {
    const { element: n, datasetIndex: i, index: r } = e,
        s = t.getDatasetMeta(i).controller,
        { label: o, value: l } = s.getLabelAndValue(r);
    return {
        chart: t,
        label: o,
        parsed: s.getParsed(r),
        raw: t.data.datasets[i].data[r],
        formattedValue: l,
        dataset: s.getDataset(),
        dataIndex: r,
        datasetIndex: i,
        element: n,
    };
}
function df(t, e) {
    const n = t.chart.ctx,
        { body: i, footer: r, title: s } = t,
        { boxWidth: o, boxHeight: l } = e,
        a = ve(e.bodyFont),
        u = ve(e.titleFont),
        c = ve(e.footerFont),
        f = s.length,
        d = r.length,
        h = i.length,
        y = Ze(e.padding);
    let v = y.height,
        _ = 0,
        p = i.reduce(
            (x, w) => x + w.before.length + w.lines.length + w.after.length,
            0
        );
    if (
        ((p += t.beforeBody.length + t.afterBody.length),
            f &&
            (v += f * u.lineHeight + (f - 1) * e.titleSpacing + e.titleMarginBottom),
            p)
    ) {
        const x = e.displayColors ? Math.max(l, a.lineHeight) : a.lineHeight;
        v += h * x + (p - h) * a.lineHeight + (p - 1) * e.bodySpacing;
    }
    d && (v += e.footerMarginTop + d * c.lineHeight + (d - 1) * e.footerSpacing);
    let g = 0;
    const m = function (x) {
        _ = Math.max(_, n.measureText(x).width + g);
    };
    return (
        n.save(),
        (n.font = u.string),
        N(t.title, m),
        (n.font = a.string),
        N(t.beforeBody.concat(t.afterBody), m),
        (g = e.displayColors ? o + 2 + e.boxPadding : 0),
        N(i, (x) => {
            N(x.before, m), N(x.lines, m), N(x.after, m);
        }),
        (g = 0),
        (n.font = c.string),
        N(t.footer, m),
        n.restore(),
        (_ += y.width),
        { width: _, height: v }
    );
}
function x1(t, e) {
    const { y: n, height: i } = e;
    return n < i / 2 ? "top" : n > t.height - i / 2 ? "bottom" : "center";
}
function w1(t, e, n, i) {
    const { x: r, width: s } = i,
        o = n.caretSize + n.caretPadding;
    if ((t === "left" && r + s + o > e.width) || (t === "right" && r - s - o < 0))
        return !0;
}
function k1(t, e, n, i) {
    const { x: r, width: s } = n,
        {
            width: o,
            chartArea: { left: l, right: a },
        } = t;
    let u = "center";
    return (
        i === "center"
            ? (u = r <= (l + a) / 2 ? "left" : "right")
            : r <= s / 2
                ? (u = "left")
                : r >= o - s / 2 && (u = "right"),
        w1(u, t, e, n) && (u = "center"),
        u
    );
}
function hf(t, e, n) {
    const i = n.yAlign || e.yAlign || x1(t, n);
    return { xAlign: n.xAlign || e.xAlign || k1(t, e, n, i), yAlign: i };
}
function S1(t, e) {
    let { x: n, width: i } = t;
    return e === "right" ? (n -= i) : e === "center" && (n -= i / 2), n;
}
function M1(t, e, n) {
    let { y: i, height: r } = t;
    return (
        e === "top" ? (i += n) : e === "bottom" ? (i -= r + n) : (i -= r / 2), i
    );
}
function pf(t, e, n, i) {
    const { caretSize: r, caretPadding: s, cornerRadius: o } = t,
        { xAlign: l, yAlign: a } = n,
        u = r + s,
        { topLeft: c, topRight: f, bottomLeft: d, bottomRight: h } = Xn(o);
    let y = S1(e, l);
    const v = M1(e, a, u);
    return (
        a === "center"
            ? l === "left"
                ? (y += u)
                : l === "right" && (y -= u)
            : l === "left"
                ? (y -= Math.max(c, d) + r)
                : l === "right" && (y += Math.max(f, h) + r),
        { x: it(y, 0, i.width - e.width), y: it(v, 0, i.height - e.height) }
    );
}
function Xr(t, e, n) {
    const i = Ze(n.padding);
    return e === "center"
        ? t.x + t.width / 2
        : e === "right"
            ? t.x + t.width - i.right
            : t.x + i.left;
}
function gf(t) {
    return ct([], _t(t));
}
function C1(t, e, n) {
    return ui(t, { tooltip: e, tooltipItems: n, type: "tooltip" });
}
function mf(t, e) {
    const n = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
    return n ? t.override(n) : t;
}
const Sp = {
    beforeTitle: yt,
    title(t) {
        if (t.length > 0) {
            const e = t[0],
                n = e.chart.data.labels,
                i = n ? n.length : 0;
            if (this && this.options && this.options.mode === "dataset")
                return e.dataset.label || "";
            if (e.label) return e.label;
            if (i > 0 && e.dataIndex < i) return n[e.dataIndex];
        }
        return "";
    },
    afterTitle: yt,
    beforeBody: yt,
    beforeLabel: yt,
    label(t) {
        if (this && this.options && this.options.mode === "dataset")
            return t.label + ": " + t.formattedValue || t.formattedValue;
        let e = t.dataset.label || "";
        e && (e += ": ");
        const n = t.formattedValue;
        return Y(n) || (e += n), e;
    },
    labelColor(t) {
        const n = t.chart
            .getDatasetMeta(t.datasetIndex)
            .controller.getStyle(t.dataIndex);
        return {
            borderColor: n.borderColor,
            backgroundColor: n.backgroundColor,
            borderWidth: n.borderWidth,
            borderDash: n.borderDash,
            borderDashOffset: n.borderDashOffset,
            borderRadius: 0,
        };
    },
    labelTextColor() {
        return this.options.bodyColor;
    },
    labelPointStyle(t) {
        const n = t.chart
            .getDatasetMeta(t.datasetIndex)
            .controller.getStyle(t.dataIndex);
        return { pointStyle: n.pointStyle, rotation: n.rotation };
    },
    afterLabel: yt,
    afterBody: yt,
    beforeFooter: yt,
    footer: yt,
    afterFooter: yt,
};
function Pe(t, e, n, i) {
    const r = t[e].call(n, i);
    return typeof r > "u" ? Sp[e].call(n, i) : r;
}
class Kl extends tn {
    constructor(e) {
        super(),
            (this.opacity = 0),
            (this._active = []),
            (this._eventPosition = void 0),
            (this._size = void 0),
            (this._cachedAnimations = void 0),
            (this._tooltipItems = []),
            (this.$animations = void 0),
            (this.$context = void 0),
            (this.chart = e.chart),
            (this.options = e.options),
            (this.dataPoints = void 0),
            (this.title = void 0),
            (this.beforeBody = void 0),
            (this.body = void 0),
            (this.afterBody = void 0),
            (this.footer = void 0),
            (this.xAlign = void 0),
            (this.yAlign = void 0),
            (this.x = void 0),
            (this.y = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this.caretX = void 0),
            (this.caretY = void 0),
            (this.labelColors = void 0),
            (this.labelPointStyles = void 0),
            (this.labelTextColors = void 0);
    }
    initialize(e) {
        (this.options = e),
            (this._cachedAnimations = void 0),
            (this.$context = void 0);
    }
    _resolveAnimations() {
        const e = this._cachedAnimations;
        if (e) return e;
        const n = this.chart,
            i = this.options.setContext(this.getContext()),
            r = i.enabled && n.options.animation && i.animations,
            s = new ap(this.chart, r);
        return r._cacheable && (this._cachedAnimations = Object.freeze(s)), s;
    }
    getContext() {
        return (
            this.$context ||
            (this.$context = C1(this.chart.getContext(), this, this._tooltipItems))
        );
    }
    getTitle(e, n) {
        const { callbacks: i } = n,
            r = Pe(i, "beforeTitle", this, e),
            s = Pe(i, "title", this, e),
            o = Pe(i, "afterTitle", this, e);
        let l = [];
        return (l = ct(l, _t(r))), (l = ct(l, _t(s))), (l = ct(l, _t(o))), l;
    }
    getBeforeBody(e, n) {
        return gf(Pe(n.callbacks, "beforeBody", this, e));
    }
    getBody(e, n) {
        const { callbacks: i } = n,
            r = [];
        return (
            N(e, (s) => {
                const o = { before: [], lines: [], after: [] },
                    l = mf(i, s);
                ct(o.before, _t(Pe(l, "beforeLabel", this, s))),
                    ct(o.lines, Pe(l, "label", this, s)),
                    ct(o.after, _t(Pe(l, "afterLabel", this, s))),
                    r.push(o);
            }),
            r
        );
    }
    getAfterBody(e, n) {
        return gf(Pe(n.callbacks, "afterBody", this, e));
    }
    getFooter(e, n) {
        const { callbacks: i } = n,
            r = Pe(i, "beforeFooter", this, e),
            s = Pe(i, "footer", this, e),
            o = Pe(i, "afterFooter", this, e);
        let l = [];
        return (l = ct(l, _t(r))), (l = ct(l, _t(s))), (l = ct(l, _t(o))), l;
    }
    _createItems(e) {
        const n = this._active,
            i = this.chart.data,
            r = [],
            s = [],
            o = [];
        let l = [],
            a,
            u;
        for (a = 0, u = n.length; a < u; ++a) l.push(_1(this.chart, n[a]));
        return (
            e.filter && (l = l.filter((c, f, d) => e.filter(c, f, d, i))),
            e.itemSort && (l = l.sort((c, f) => e.itemSort(c, f, i))),
            N(l, (c) => {
                const f = mf(e.callbacks, c);
                r.push(Pe(f, "labelColor", this, c)),
                    s.push(Pe(f, "labelPointStyle", this, c)),
                    o.push(Pe(f, "labelTextColor", this, c));
            }),
            (this.labelColors = r),
            (this.labelPointStyles = s),
            (this.labelTextColors = o),
            (this.dataPoints = l),
            l
        );
    }
    update(e, n) {
        const i = this.options.setContext(this.getContext()),
            r = this._active;
        let s,
            o = [];
        if (!r.length) this.opacity !== 0 && (s = { opacity: 0 });
        else {
            const l = Oi[i.position].call(this, r, this._eventPosition);
            (o = this._createItems(i)),
                (this.title = this.getTitle(o, i)),
                (this.beforeBody = this.getBeforeBody(o, i)),
                (this.body = this.getBody(o, i)),
                (this.afterBody = this.getAfterBody(o, i)),
                (this.footer = this.getFooter(o, i));
            const a = (this._size = df(this, i)),
                u = Object.assign({}, l, a),
                c = hf(this.chart, i, u),
                f = pf(i, u, c, this.chart);
            (this.xAlign = c.xAlign),
                (this.yAlign = c.yAlign),
                (s = {
                    opacity: 1,
                    x: f.x,
                    y: f.y,
                    width: a.width,
                    height: a.height,
                    caretX: l.x,
                    caretY: l.y,
                });
        }
        (this._tooltipItems = o),
            (this.$context = void 0),
            s && this._resolveAnimations().update(this, s),
            e &&
            i.external &&
            i.external.call(this, { chart: this.chart, tooltip: this, replay: n });
    }
    drawCaret(e, n, i, r) {
        const s = this.getCaretPosition(e, i, r);
        n.lineTo(s.x1, s.y1), n.lineTo(s.x2, s.y2), n.lineTo(s.x3, s.y3);
    }
    getCaretPosition(e, n, i) {
        const { xAlign: r, yAlign: s } = this,
            { caretSize: o, cornerRadius: l } = i,
            { topLeft: a, topRight: u, bottomLeft: c, bottomRight: f } = Xn(l),
            { x: d, y: h } = e,
            { width: y, height: v } = n;
        let _, p, g, m, x, w;
        return (
            s === "center"
                ? ((x = h + v / 2),
                    r === "left"
                        ? ((_ = d), (p = _ - o), (m = x + o), (w = x - o))
                        : ((_ = d + y), (p = _ + o), (m = x - o), (w = x + o)),
                    (g = _))
                : (r === "left"
                    ? (p = d + Math.max(a, c) + o)
                    : r === "right"
                        ? (p = d + y - Math.max(u, f) - o)
                        : (p = this.caretX),
                    s === "top"
                        ? ((m = h), (x = m - o), (_ = p - o), (g = p + o))
                        : ((m = h + v), (x = m + o), (_ = p + o), (g = p - o)),
                    (w = m)),
            { x1: _, x2: p, x3: g, y1: m, y2: x, y3: w }
        );
    }
    drawTitle(e, n, i) {
        const r = this.title,
            s = r.length;
        let o, l, a;
        if (s) {
            const u = Gn(i.rtl, this.x, this.width);
            for (
                e.x = Xr(this, i.titleAlign, i),
                n.textAlign = u.textAlign(i.titleAlign),
                n.textBaseline = "middle",
                o = ve(i.titleFont),
                l = i.titleSpacing,
                n.fillStyle = i.titleColor,
                n.font = o.string,
                a = 0;
                a < s;
                ++a
            )
                n.fillText(r[a], u.x(e.x), e.y + o.lineHeight / 2),
                    (e.y += o.lineHeight + l),
                    a + 1 === s && (e.y += i.titleMarginBottom - l);
        }
    }
    _drawColorBox(e, n, i, r, s) {
        const o = this.labelColors[i],
            l = this.labelPointStyles[i],
            { boxHeight: a, boxWidth: u } = s,
            c = ve(s.bodyFont),
            f = Xr(this, "left", s),
            d = r.x(f),
            h = a < c.lineHeight ? (c.lineHeight - a) / 2 : 0,
            y = n.y + h;
        if (s.usePointStyle) {
            const v = {
                radius: Math.min(u, a) / 2,
                pointStyle: l.pointStyle,
                rotation: l.rotation,
                borderWidth: 1,
            },
                _ = r.leftForLtr(d, u) + u / 2,
                p = y + a / 2;
            (e.strokeStyle = s.multiKeyBackground),
                (e.fillStyle = s.multiKeyBackground),
                Tc(e, v, _, p),
                (e.strokeStyle = o.borderColor),
                (e.fillStyle = o.backgroundColor),
                Tc(e, v, _, p);
        } else {
            (e.lineWidth = A(o.borderWidth)
                ? Math.max(...Object.values(o.borderWidth))
                : o.borderWidth || 1),
                (e.strokeStyle = o.borderColor),
                e.setLineDash(o.borderDash || []),
                (e.lineDashOffset = o.borderDashOffset || 0);
            const v = r.leftForLtr(d, u),
                _ = r.leftForLtr(r.xPlus(d, 1), u - 2),
                p = Xn(o.borderRadius);
            Object.values(p).some((g) => g !== 0)
                ? (e.beginPath(),
                    (e.fillStyle = s.multiKeyBackground),
                    Vs(e, { x: v, y, w: u, h: a, radius: p }),
                    e.fill(),
                    e.stroke(),
                    (e.fillStyle = o.backgroundColor),
                    e.beginPath(),
                    Vs(e, { x: _, y: y + 1, w: u - 2, h: a - 2, radius: p }),
                    e.fill())
                : ((e.fillStyle = s.multiKeyBackground),
                    e.fillRect(v, y, u, a),
                    e.strokeRect(v, y, u, a),
                    (e.fillStyle = o.backgroundColor),
                    e.fillRect(_, y + 1, u - 2, a - 2));
        }
        e.fillStyle = this.labelTextColors[i];
    }
    drawBody(e, n, i) {
        const { body: r } = this,
            {
                bodySpacing: s,
                bodyAlign: o,
                displayColors: l,
                boxHeight: a,
                boxWidth: u,
                boxPadding: c,
            } = i,
            f = ve(i.bodyFont);
        let d = f.lineHeight,
            h = 0;
        const y = Gn(i.rtl, this.x, this.width),
            v = function (M) {
                n.fillText(M, y.x(e.x + h), e.y + d / 2), (e.y += d + s);
            },
            _ = y.textAlign(o);
        let p, g, m, x, w, k, S;
        for (
            n.textAlign = o,
            n.textBaseline = "middle",
            n.font = f.string,
            e.x = Xr(this, _, i),
            n.fillStyle = i.bodyColor,
            N(this.beforeBody, v),
            h = l && _ !== "right" ? (o === "center" ? u / 2 + c : u + 2 + c) : 0,
            x = 0,
            k = r.length;
            x < k;
            ++x
        ) {
            for (
                p = r[x],
                g = this.labelTextColors[x],
                n.fillStyle = g,
                N(p.before, v),
                m = p.lines,
                l &&
                m.length &&
                (this._drawColorBox(n, e, x, y, i),
                    (d = Math.max(f.lineHeight, a))),
                w = 0,
                S = m.length;
                w < S;
                ++w
            )
                v(m[w]), (d = f.lineHeight);
            N(p.after, v);
        }
        (h = 0), (d = f.lineHeight), N(this.afterBody, v), (e.y -= s);
    }
    drawFooter(e, n, i) {
        const r = this.footer,
            s = r.length;
        let o, l;
        if (s) {
            const a = Gn(i.rtl, this.x, this.width);
            for (
                e.x = Xr(this, i.footerAlign, i),
                e.y += i.footerMarginTop,
                n.textAlign = a.textAlign(i.footerAlign),
                n.textBaseline = "middle",
                o = ve(i.footerFont),
                n.fillStyle = i.footerColor,
                n.font = o.string,
                l = 0;
                l < s;
                ++l
            )
                n.fillText(r[l], a.x(e.x), e.y + o.lineHeight / 2),
                    (e.y += o.lineHeight + i.footerSpacing);
        }
    }
    drawBackground(e, n, i, r) {
        const { xAlign: s, yAlign: o } = this,
            { x: l, y: a } = e,
            { width: u, height: c } = i,
            {
                topLeft: f,
                topRight: d,
                bottomLeft: h,
                bottomRight: y,
            } = Xn(r.cornerRadius);
        (n.fillStyle = r.backgroundColor),
            (n.strokeStyle = r.borderColor),
            (n.lineWidth = r.borderWidth),
            n.beginPath(),
            n.moveTo(l + f, a),
            o === "top" && this.drawCaret(e, n, i, r),
            n.lineTo(l + u - d, a),
            n.quadraticCurveTo(l + u, a, l + u, a + d),
            o === "center" && s === "right" && this.drawCaret(e, n, i, r),
            n.lineTo(l + u, a + c - y),
            n.quadraticCurveTo(l + u, a + c, l + u - y, a + c),
            o === "bottom" && this.drawCaret(e, n, i, r),
            n.lineTo(l + h, a + c),
            n.quadraticCurveTo(l, a + c, l, a + c - h),
            o === "center" && s === "left" && this.drawCaret(e, n, i, r),
            n.lineTo(l, a + f),
            n.quadraticCurveTo(l, a, l + f, a),
            n.closePath(),
            n.fill(),
            r.borderWidth > 0 && n.stroke();
    }
    _updateAnimationTarget(e) {
        const n = this.chart,
            i = this.$animations,
            r = i && i.x,
            s = i && i.y;
        if (r || s) {
            const o = Oi[e.position].call(this, this._active, this._eventPosition);
            if (!o) return;
            const l = (this._size = df(this, e)),
                a = Object.assign({}, o, this._size),
                u = hf(n, e, a),
                c = pf(e, a, u, n);
            (r._to !== c.x || s._to !== c.y) &&
                ((this.xAlign = u.xAlign),
                    (this.yAlign = u.yAlign),
                    (this.width = l.width),
                    (this.height = l.height),
                    (this.caretX = o.x),
                    (this.caretY = o.y),
                    this._resolveAnimations().update(this, c));
        }
    }
    _willRender() {
        return !!this.opacity;
    }
    draw(e) {
        const n = this.options.setContext(this.getContext());
        let i = this.opacity;
        if (!i) return;
        this._updateAnimationTarget(n);
        const r = { width: this.width, height: this.height },
            s = { x: this.x, y: this.y };
        i = Math.abs(i) < 0.001 ? 0 : i;
        const o = Ze(n.padding),
            l =
                this.title.length ||
                this.beforeBody.length ||
                this.body.length ||
                this.afterBody.length ||
                this.footer.length;
        n.enabled &&
            l &&
            (e.save(),
                (e.globalAlpha = i),
                this.drawBackground(s, e, r, n),
                op(e, n.textDirection),
                (s.y += o.top),
                this.drawTitle(s, e, n),
                this.drawBody(s, e, n),
                this.drawFooter(s, e, n),
                lp(e, n.textDirection),
                e.restore());
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(e, n) {
        const i = this._active,
            r = e.map(({ datasetIndex: l, index: a }) => {
                const u = this.chart.getDatasetMeta(l);
                if (!u) throw new Error("Cannot find a dataset at index " + l);
                return { datasetIndex: l, element: u.data[a], index: a };
            }),
            s = !Ns(i, r),
            o = this._positionChanged(r, n);
        (s || o) &&
            ((this._active = r),
                (this._eventPosition = n),
                (this._ignoreReplayEvents = !0),
                this.update(!0));
    }
    handleEvent(e, n, i = !0) {
        if (n && this._ignoreReplayEvents) return !1;
        this._ignoreReplayEvents = !1;
        const r = this.options,
            s = this._active || [],
            o = this._getActiveElements(e, s, n, i),
            l = this._positionChanged(o, e),
            a = n || !Ns(o, s) || l;
        return (
            a &&
            ((this._active = o),
                (r.enabled || r.external) &&
                ((this._eventPosition = { x: e.x, y: e.y }), this.update(!0, n))),
            a
        );
    }
    _getActiveElements(e, n, i, r) {
        const s = this.options;
        if (e.type === "mouseout") return [];
        if (!r)
            return n.filter(
                (l) =>
                    this.chart.data.datasets[l.datasetIndex] &&
                    this.chart
                        .getDatasetMeta(l.datasetIndex)
                        .controller.getParsed(l.index) !== void 0
            );
        const o = this.chart.getElementsAtEventForMode(e, s.mode, s, i);
        return s.reverse && o.reverse(), o;
    }
    _positionChanged(e, n) {
        const { caretX: i, caretY: r, options: s } = this,
            o = Oi[s.position].call(this, e, n);
        return o !== !1 && (i !== o.x || r !== o.y);
    }
}
F(Kl, "positioners", Oi);
var b1 = {
    id: "tooltip",
    _element: Kl,
    positioners: Oi,
    afterInit(t, e, n) {
        n && (t.tooltip = new Kl({ chart: t, options: n }));
    },
    beforeUpdate(t, e, n) {
        t.tooltip && t.tooltip.initialize(n);
    },
    reset(t, e, n) {
        t.tooltip && t.tooltip.initialize(n);
    },
    afterDraw(t) {
        const e = t.tooltip;
        if (e && e._willRender()) {
            const n = { tooltip: e };
            if (t.notifyPlugins("beforeTooltipDraw", { ...n, cancelable: !0 }) === !1)
                return;
            e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", n);
        }
    },
    afterEvent(t, e) {
        if (t.tooltip) {
            const n = e.replay;
            t.tooltip.handleEvent(e.event, n, e.inChartArea) && (e.changed = !0);
        }
    },
    defaults: {
        enabled: !0,
        external: null,
        position: "average",
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "#fff",
        titleFont: { weight: "bold" },
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleAlign: "left",
        bodyColor: "#fff",
        bodySpacing: 2,
        bodyFont: {},
        bodyAlign: "left",
        footerColor: "#fff",
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFont: { weight: "bold" },
        footerAlign: "left",
        padding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        boxHeight: (t, e) => e.bodyFont.size,
        boxWidth: (t, e) => e.bodyFont.size,
        multiKeyBackground: "#fff",
        displayColors: !0,
        boxPadding: 0,
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        animation: { duration: 400, easing: "easeOutQuart" },
        animations: {
            numbers: {
                type: "number",
                properties: ["x", "y", "width", "height", "caretX", "caretY"],
            },
            opacity: { easing: "linear", duration: 200 },
        },
        callbacks: Sp,
    },
    defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
    descriptors: {
        _scriptable: (t) => t !== "filter" && t !== "itemSort" && t !== "external",
        _indexable: !1,
        callbacks: { _scriptable: !1, _indexable: !1 },
        animation: { _fallback: !1 },
        animations: { _fallback: "animation" },
    },
    additionalOptionScopes: ["interaction"],
};
const P1 = (t, e, n, i) => (
    typeof e == "string"
        ? ((n = t.push(e) - 1), i.unshift({ index: n, label: e }))
        : isNaN(e) && (n = null),
    n
);
function E1(t, e, n, i) {
    const r = t.indexOf(e);
    if (r === -1) return P1(t, e, n, i);
    const s = t.lastIndexOf(e);
    return r !== s ? n : r;
}
const T1 = (t, e) => (t === null ? null : it(Math.round(t), 0, e));
function yf(t) {
    const e = this.getLabels();
    return t >= 0 && t < e.length ? e[t] : t;
}
class Ql extends ci {
    constructor(e) {
        super(e),
            (this._startValue = void 0),
            (this._valueRange = 0),
            (this._addedLabels = []);
    }
    init(e) {
        const n = this._addedLabels;
        if (n.length) {
            const i = this.getLabels();
            for (const { index: r, label: s } of n) i[r] === s && i.splice(r, 1);
            this._addedLabels = [];
        }
        super.init(e);
    }
    parse(e, n) {
        if (Y(e)) return null;
        const i = this.getLabels();
        return (
            (n =
                isFinite(n) && i[n] === e ? n : E1(i, e, B(n, e), this._addedLabels)),
            T1(n, i.length - 1)
        );
    }
    determineDataLimits() {
        const { minDefined: e, maxDefined: n } = this.getUserBounds();
        let { min: i, max: r } = this.getMinMax(!0);
        this.options.bounds === "ticks" &&
            (e || (i = 0), n || (r = this.getLabels().length - 1)),
            (this.min = i),
            (this.max = r);
    }
    buildTicks() {
        const e = this.min,
            n = this.max,
            i = this.options.offset,
            r = [];
        let s = this.getLabels();
        (s = e === 0 && n === s.length - 1 ? s : s.slice(e, n + 1)),
            (this._valueRange = Math.max(s.length - (i ? 0 : 1), 1)),
            (this._startValue = this.min - (i ? 0.5 : 0));
        for (let o = e; o <= n; o++) r.push({ value: o });
        return r;
    }
    getLabelForValue(e) {
        return yf.call(this, e);
    }
    configure() {
        super.configure(),
            this.isHorizontal() || (this._reversePixels = !this._reversePixels);
    }
    getPixelForValue(e) {
        return (
            typeof e != "number" && (e = this.parse(e)),
            e === null
                ? NaN
                : this.getPixelForDecimal((e - this._startValue) / this._valueRange)
        );
    }
    getPixelForTick(e) {
        const n = this.ticks;
        return e < 0 || e > n.length - 1 ? null : this.getPixelForValue(n[e].value);
    }
    getValueForPixel(e) {
        return Math.round(
            this._startValue + this.getDecimalForPixel(e) * this._valueRange
        );
    }
    getBasePixel() {
        return this.bottom;
    }
}
F(Ql, "id", "category"), F(Ql, "defaults", { ticks: { callback: yf } });
function O1(t, e) {
    const n = [],
        {
            bounds: r,
            step: s,
            min: o,
            max: l,
            precision: a,
            count: u,
            maxTicks: c,
            maxDigits: f,
            includeBounds: d,
        } = t,
        h = s || 1,
        y = c - 1,
        { min: v, max: _ } = e,
        p = !Y(o),
        g = !Y(l),
        m = !Y(u),
        x = (_ - v) / (f + 1);
    let w = xc((_ - v) / y / h) * h,
        k,
        S,
        M,
        T;
    if (w < 1e-14 && !p && !g) return [{ value: v }, { value: _ }];
    (T = Math.ceil(_ / w) - Math.floor(v / w)),
        T > y && (w = xc((T * w) / y / h) * h),
        Y(a) || ((k = Math.pow(10, a)), (w = Math.ceil(w * k) / k)),
        r === "ticks"
            ? ((S = Math.floor(v / w) * w), (M = Math.ceil(_ / w) * w))
            : ((S = v), (M = _)),
        p && g && s && D0((l - o) / s, w / 1e3)
            ? ((T = Math.round(Math.min((l - o) / w, c))),
                (w = (l - o) / T),
                (S = o),
                (M = l))
            : m
                ? ((S = p ? o : S), (M = g ? l : M), (T = u - 1), (w = (M - S) / T))
                : ((T = (M - S) / w),
                    us(T, Math.round(T), w / 1e3)
                        ? (T = Math.round(T))
                        : (T = Math.ceil(T)));
    const E = Math.max(wc(w), wc(S));
    (k = Math.pow(10, Y(a) ? E : a)),
        (S = Math.round(S * k) / k),
        (M = Math.round(M * k) / k);
    let O = 0;
    for (
        p &&
        (d && S !== o
            ? (n.push({ value: o }),
                S < o && O++,
                us(Math.round((S + O * w) * k) / k, o, vf(o, x, t)) && O++)
            : S < o && O++);
        O < T;
        ++O
    ) {
        const R = Math.round((S + O * w) * k) / k;
        if (g && R > l) break;
        n.push({ value: R });
    }
    return (
        g && d && M !== l
            ? n.length && us(n[n.length - 1].value, l, vf(l, x, t))
                ? (n[n.length - 1].value = l)
                : n.push({ value: l })
            : (!g || M === l) && n.push({ value: M }),
        n
    );
}
function vf(t, e, { horizontal: n, minRotation: i }) {
    const r = mn(i),
        s = (n ? Math.sin(r) : Math.cos(r)) || 0.001,
        o = 0.75 * e * ("" + t).length;
    return Math.min(e / s, o);
}
class L1 extends ci {
    constructor(e) {
        super(e),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._endValue = void 0),
            (this._valueRange = 0);
    }
    parse(e, n) {
        return Y(e) ||
            ((typeof e == "number" || e instanceof Number) && !isFinite(+e))
            ? null
            : +e;
    }
    handleTickRangeOptions() {
        const { beginAtZero: e } = this.options,
            { minDefined: n, maxDefined: i } = this.getUserBounds();
        let { min: r, max: s } = this;
        const o = (a) => (r = n ? r : a),
            l = (a) => (s = i ? s : a);
        if (e) {
            const a = Zt(r),
                u = Zt(s);
            a < 0 && u < 0 ? l(0) : a > 0 && u > 0 && o(0);
        }
        if (r === s) {
            let a = s === 0 ? 1 : Math.abs(s * 0.05);
            l(s + a), e || o(r - a);
        }
        (this.min = r), (this.max = s);
    }
    getTickLimit() {
        const e = this.options.ticks;
        let { maxTicksLimit: n, stepSize: i } = e,
            r;
        return (
            i
                ? ((r = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
                    r > 1e3 &&
                    (console.warn(
                        `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${r} ticks. Limiting to 1000.`
                    ),
                        (r = 1e3)))
                : ((r = this.computeTickLimit()), (n = n || 11)),
            n && (r = Math.min(n, r)),
            r
        );
    }
    computeTickLimit() {
        return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
        const e = this.options,
            n = e.ticks;
        let i = this.getTickLimit();
        i = Math.max(2, i);
        const r = {
            maxTicks: i,
            bounds: e.bounds,
            min: e.min,
            max: e.max,
            precision: n.precision,
            step: n.stepSize,
            count: n.count,
            maxDigits: this._maxDigits(),
            horizontal: this.isHorizontal(),
            minRotation: n.minRotation || 0,
            includeBounds: n.includeBounds !== !1,
        },
            s = this._range || this,
            o = O1(r, s);
        return (
            e.bounds === "ticks" && R0(o, this, "value"),
            e.reverse
                ? (o.reverse(), (this.start = this.max), (this.end = this.min))
                : ((this.start = this.min), (this.end = this.max)),
            o
        );
    }
    configure() {
        const e = this.ticks;
        let n = this.min,
            i = this.max;
        if ((super.configure(), this.options.offset && e.length)) {
            const r = (i - n) / Math.max(e.length - 1, 1) / 2;
            (n -= r), (i += r);
        }
        (this._startValue = n), (this._endValue = i), (this._valueRange = i - n);
    }
    getLabelForValue(e) {
        return Xh(e, this.chart.options.locale, this.options.ticks.format);
    }
}
class Xl extends L1 {
    determineDataLimits() {
        const { min: e, max: n } = this.getMinMax(!0);
        (this.min = Ge(e) ? e : 0),
            (this.max = Ge(n) ? n : 1),
            this.handleTickRangeOptions();
    }
    computeTickLimit() {
        const e = this.isHorizontal(),
            n = e ? this.width : this.height,
            i = mn(this.options.ticks.minRotation),
            r = (e ? Math.sin(i) : Math.cos(i)) || 0.001,
            s = this._resolveTickFontOptions(0);
        return Math.ceil(n / Math.min(40, s.lineHeight / r));
    }
    getPixelForValue(e) {
        return e === null
            ? NaN
            : this.getPixelForDecimal((e - this._startValue) / this._valueRange);
    }
    getValueForPixel(e) {
        return this._startValue + this.getDecimalForPixel(e) * this._valueRange;
    }
}
F(Xl, "id", "linear"),
    F(Xl, "defaults", { ticks: { callback: Zh.formatters.numeric } });
const co = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
},
    Oe = Object.keys(co);
function _f(t, e) {
    return t - e;
}
function xf(t, e) {
    if (Y(e)) return null;
    const n = t._adapter,
        { parser: i, round: r, isoWeekday: s } = t._parseOpts;
    let o = e;
    return (
        typeof i == "function" && (o = i(o)),
        Ge(o) || (o = typeof i == "string" ? n.parse(o, i) : n.parse(o)),
        o === null
            ? null
            : (r &&
                (o =
                    r === "week" && (Hs(s) || s === !0)
                        ? n.startOf(o, "isoWeek", s)
                        : n.startOf(o, r)),
                +o)
    );
}
function wf(t, e, n, i) {
    const r = Oe.length;
    for (let s = Oe.indexOf(t); s < r - 1; ++s) {
        const o = co[Oe[s]],
            l = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
        if (o.common && Math.ceil((n - e) / (l * o.size)) <= i) return Oe[s];
    }
    return Oe[r - 1];
}
function z1(t, e, n, i, r) {
    for (let s = Oe.length - 1; s >= Oe.indexOf(n); s--) {
        const o = Oe[s];
        if (co[o].common && t._adapter.diff(r, i, o) >= e - 1) return o;
    }
    return Oe[n ? Oe.indexOf(n) : 0];
}
function D1(t) {
    for (let e = Oe.indexOf(t) + 1, n = Oe.length; e < n; ++e)
        if (co[Oe[e]].common) return Oe[e];
}
function kf(t, e, n) {
    if (!n) t[e] = !0;
    else if (n.length) {
        const { lo: i, hi: r } = Qa(n, e),
            s = n[i] >= e ? n[i] : n[r];
        t[s] = !0;
    }
}
function R1(t, e, n, i) {
    const r = t._adapter,
        s = +r.startOf(e[0].value, i),
        o = e[e.length - 1].value;
    let l, a;
    for (l = s; l <= o; l = +r.add(l, 1, i))
        (a = n[l]), a >= 0 && (e[a].major = !0);
    return e;
}
function Sf(t, e, n) {
    const i = [],
        r = {},
        s = e.length;
    let o, l;
    for (o = 0; o < s; ++o)
        (l = e[o]), (r[l] = o), i.push({ value: l, major: !1 });
    return s === 0 || !n ? i : R1(t, i, r, n);
}
class Us extends ci {
    constructor(e) {
        super(e),
            (this._cache = { data: [], labels: [], all: [] }),
            (this._unit = "day"),
            (this._majorUnit = void 0),
            (this._offsets = {}),
            (this._normalized = !1),
            (this._parseOpts = void 0);
    }
    init(e, n = {}) {
        const i = e.time || (e.time = {}),
            r = (this._adapter = new Gy._date(e.adapters.date));
        r.init(n),
            Hi(i.displayFormats, r.formats()),
            (this._parseOpts = {
                parser: i.parser,
                round: i.round,
                isoWeekday: i.isoWeekday,
            }),
            super.init(e),
            (this._normalized = n.normalized);
    }
    parse(e, n) {
        return e === void 0 ? null : xf(this, e);
    }
    beforeLayout() {
        super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
    }
    determineDataLimits() {
        const e = this.options,
            n = this._adapter,
            i = e.time.unit || "day";
        let { min: r, max: s, minDefined: o, maxDefined: l } = this.getUserBounds();
        function a(u) {
            !o && !isNaN(u.min) && (r = Math.min(r, u.min)),
                !l && !isNaN(u.max) && (s = Math.max(s, u.max));
        }
        (!o || !l) &&
            (a(this._getLabelBounds()),
                (e.bounds !== "ticks" || e.ticks.source !== "labels") &&
                a(this.getMinMax(!1))),
            (r = Ge(r) && !isNaN(r) ? r : +n.startOf(Date.now(), i)),
            (s = Ge(s) && !isNaN(s) ? s : +n.endOf(Date.now(), i) + 1),
            (this.min = Math.min(r, s - 1)),
            (this.max = Math.max(r + 1, s));
    }
    _getLabelBounds() {
        const e = this.getLabelTimestamps();
        let n = Number.POSITIVE_INFINITY,
            i = Number.NEGATIVE_INFINITY;
        return e.length && ((n = e[0]), (i = e[e.length - 1])), { min: n, max: i };
    }
    buildTicks() {
        const e = this.options,
            n = e.time,
            i = e.ticks,
            r = i.source === "labels" ? this.getLabelTimestamps() : this._generate();
        e.bounds === "ticks" &&
            r.length &&
            ((this.min = this._userMin || r[0]),
                (this.max = this._userMax || r[r.length - 1]));
        const s = this.min,
            o = this.max,
            l = H0(r, s, o);
        return (
            (this._unit =
                n.unit ||
                (i.autoSkip
                    ? wf(n.minUnit, this.min, this.max, this._getLabelCapacity(s))
                    : z1(this, l.length, n.minUnit, this.min, this.max))),
            (this._majorUnit =
                !i.major.enabled || this._unit === "year" ? void 0 : D1(this._unit)),
            this.initOffsets(r),
            e.reverse && l.reverse(),
            Sf(this, l, this._majorUnit)
        );
    }
    afterAutoSkip() {
        this.options.offsetAfterAutoskip &&
            this.initOffsets(this.ticks.map((e) => +e.value));
    }
    initOffsets(e = []) {
        let n = 0,
            i = 0,
            r,
            s;
        this.options.offset &&
            e.length &&
            ((r = this.getDecimalForValue(e[0])),
                e.length === 1
                    ? (n = 1 - r)
                    : (n = (this.getDecimalForValue(e[1]) - r) / 2),
                (s = this.getDecimalForValue(e[e.length - 1])),
                e.length === 1
                    ? (i = s)
                    : (i = (s - this.getDecimalForValue(e[e.length - 2])) / 2));
        const o = e.length < 3 ? 0.5 : 0.25;
        (n = it(n, 0, o)),
            (i = it(i, 0, o)),
            (this._offsets = { start: n, end: i, factor: 1 / (n + 1 + i) });
    }
    _generate() {
        const e = this._adapter,
            n = this.min,
            i = this.max,
            r = this.options,
            s = r.time,
            o = s.unit || wf(s.minUnit, n, i, this._getLabelCapacity(n)),
            l = B(r.ticks.stepSize, 1),
            a = o === "week" ? s.isoWeekday : !1,
            u = Hs(a) || a === !0,
            c = {};
        let f = n,
            d,
            h;
        if (
            (u && (f = +e.startOf(f, "isoWeek", a)),
                (f = +e.startOf(f, u ? "day" : o)),
                e.diff(i, n, o) > 1e5 * l)
        )
            throw new Error(
                n + " and " + i + " are too far apart with stepSize of " + l + " " + o
            );
        const y = r.ticks.source === "data" && this.getDataTimestamps();
        for (d = f, h = 0; d < i; d = +e.add(d, l, o), h++) kf(c, d, y);
        return (
            (d === i || r.bounds === "ticks" || h === 1) && kf(c, d, y),
            Object.keys(c)
                .sort(_f)
                .map((v) => +v)
        );
    }
    getLabelForValue(e) {
        const n = this._adapter,
            i = this.options.time;
        return i.tooltipFormat
            ? n.format(e, i.tooltipFormat)
            : n.format(e, i.displayFormats.datetime);
    }
    format(e, n) {
        const r = this.options.time.displayFormats,
            s = this._unit,
            o = n || r[s];
        return this._adapter.format(e, o);
    }
    _tickFormatFunction(e, n, i, r) {
        const s = this.options,
            o = s.ticks.callback;
        if (o) return U(o, [e, n, i], this);
        const l = s.time.displayFormats,
            a = this._unit,
            u = this._majorUnit,
            c = a && l[a],
            f = u && l[u],
            d = i[n],
            h = u && f && d && d.major;
        return this._adapter.format(e, r || (h ? f : c));
    }
    generateTickLabels(e) {
        let n, i, r;
        for (n = 0, i = e.length; n < i; ++n)
            (r = e[n]), (r.label = this._tickFormatFunction(r.value, n, e));
    }
    getDecimalForValue(e) {
        return e === null ? NaN : (e - this.min) / (this.max - this.min);
    }
    getPixelForValue(e) {
        const n = this._offsets,
            i = this.getDecimalForValue(e);
        return this.getPixelForDecimal((n.start + i) * n.factor);
    }
    getValueForPixel(e) {
        const n = this._offsets,
            i = this.getDecimalForPixel(e) / n.factor - n.end;
        return this.min + i * (this.max - this.min);
    }
    _getLabelSize(e) {
        const n = this.options.ticks,
            i = this.ctx.measureText(e).width,
            r = mn(this.isHorizontal() ? n.maxRotation : n.minRotation),
            s = Math.cos(r),
            o = Math.sin(r),
            l = this._resolveTickFontOptions(0).size;
        return { w: i * s + l * o, h: i * o + l * s };
    }
    _getLabelCapacity(e) {
        const n = this.options.time,
            i = n.displayFormats,
            r = i[n.unit] || i.millisecond,
            s = this._tickFormatFunction(e, 0, Sf(this, [e], this._majorUnit), r),
            o = this._getLabelSize(s),
            l =
                Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) -
                1;
        return l > 0 ? l : 1;
    }
    getDataTimestamps() {
        let e = this._cache.data || [],
            n,
            i;
        if (e.length) return e;
        const r = this.getMatchingVisibleMetas();
        if (this._normalized && r.length)
            return (this._cache.data = r[0].controller.getAllParsedValues(this));
        for (n = 0, i = r.length; n < i; ++n)
            e = e.concat(r[n].controller.getAllParsedValues(this));
        return (this._cache.data = this.normalize(e));
    }
    getLabelTimestamps() {
        const e = this._cache.labels || [];
        let n, i;
        if (e.length) return e;
        const r = this.getLabels();
        for (n = 0, i = r.length; n < i; ++n) e.push(xf(this, r[n]));
        return (this._cache.labels = this._normalized ? e : this.normalize(e));
    }
    normalize(e) {
        return Uh(e.sort(_f));
    }
}
F(Us, "id", "time"),
    F(Us, "defaults", {
        bounds: "data",
        adapters: {},
        time: {
            parser: !1,
            unit: !1,
            round: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {},
        },
        ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
    });
function Gr(t, e, n) {
    let i = 0,
        r = t.length - 1,
        s,
        o,
        l,
        a;
    n
        ? (e >= t[i].pos && e <= t[r].pos && ({ lo: i, hi: r } = Wl(t, "pos", e)),
            ({ pos: s, time: l } = t[i]),
            ({ pos: o, time: a } = t[r]))
        : (e >= t[i].time &&
            e <= t[r].time &&
            ({ lo: i, hi: r } = Wl(t, "time", e)),
            ({ time: s, pos: l } = t[i]),
            ({ time: o, pos: a } = t[r]));
    const u = o - s;
    return u ? l + ((a - l) * (e - s)) / u : l;
}
class Mf extends Us {
    constructor(e) {
        super(e),
            (this._table = []),
            (this._minPos = void 0),
            (this._tableRange = void 0);
    }
    initOffsets() {
        const e = this._getTimestampsForTable(),
            n = (this._table = this.buildLookupTable(e));
        (this._minPos = Gr(n, this.min)),
            (this._tableRange = Gr(n, this.max) - this._minPos),
            super.initOffsets(e);
    }
    buildLookupTable(e) {
        const { min: n, max: i } = this,
            r = [],
            s = [];
        let o, l, a, u, c;
        for (o = 0, l = e.length; o < l; ++o)
            (u = e[o]), u >= n && u <= i && r.push(u);
        if (r.length < 2)
            return [
                { time: n, pos: 0 },
                { time: i, pos: 1 },
            ];
        for (o = 0, l = r.length; o < l; ++o)
            (c = r[o + 1]),
                (a = r[o - 1]),
                (u = r[o]),
                Math.round((c + a) / 2) !== u && s.push({ time: u, pos: o / (l - 1) });
        return s;
    }
    _generate() {
        const e = this.min,
            n = this.max;
        let i = super.getDataTimestamps();
        return (
            (!i.includes(e) || !i.length) && i.splice(0, 0, e),
            (!i.includes(n) || i.length === 1) && i.push(n),
            i.sort((r, s) => r - s)
        );
    }
    _getTimestampsForTable() {
        let e = this._cache.all || [];
        if (e.length) return e;
        const n = this.getDataTimestamps(),
            i = this.getLabelTimestamps();
        return (
            n.length && i.length
                ? (e = this.normalize(n.concat(i)))
                : (e = n.length ? n : i),
            (e = this._cache.all = e),
            e
        );
    }
    getDecimalForValue(e) {
        return (Gr(this._table, e) - this._minPos) / this._tableRange;
    }
    getValueForPixel(e) {
        const n = this._offsets,
            i = this.getDecimalForPixel(e) / n.factor - n.end;
        return Gr(this._table, i * this._tableRange + this._minPos, !0);
    }
}
F(Mf, "id", "timeseries"), F(Mf, "defaults", Us.defaults);
const Mp = "label";
function Cf(t, e) {
    typeof t == "function" ? t(e) : t && (t.current = e);
}
function F1(t, e) {
    const n = t.options;
    n && e && Object.assign(n, e);
}
function Cp(t, e) {
    t.labels = e;
}
function bp(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Mp;
    const i = [];
    t.datasets = e.map((r) => {
        const s = t.datasets.find((o) => o[n] === r[n]);
        return !s || !r.data || i.includes(s)
            ? { ...r }
            : (i.push(s), Object.assign(s, r), s);
    });
}
function I1(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Mp;
    const n = { labels: [], datasets: [] };
    return Cp(n, t.labels), bp(n, t.datasets, e), n;
}
function A1(t, e) {
    const {
        height: n = 150,
        width: i = 300,
        redraw: r = !1,
        datasetIdKey: s,
        type: o,
        data: l,
        options: a,
        plugins: u = [],
        fallbackContent: c,
        updateMode: f,
        ...d
    } = t,
        h = Ee.useRef(null),
        y = Ee.useRef(),
        v = () => {
            h.current &&
                ((y.current = new uo(h.current, {
                    type: o,
                    data: I1(l, s),
                    options: a && { ...a },
                    plugins: u,
                })),
                    Cf(e, y.current));
        },
        _ = () => {
            Cf(e, null), y.current && (y.current.destroy(), (y.current = null));
        };
    return (
        Ee.useEffect(() => {
            !r && y.current && a && F1(y.current, a);
        }, [r, a]),
        Ee.useEffect(() => {
            !r && y.current && Cp(y.current.config.data, l.labels);
        }, [r, l.labels]),
        Ee.useEffect(() => {
            !r && y.current && l.datasets && bp(y.current.config.data, l.datasets, s);
        }, [r, l.datasets]),
        Ee.useEffect(() => {
            y.current && (r ? (_(), setTimeout(v)) : y.current.update(f));
        }, [r, a, l.labels, l.datasets, f]),
        Ee.useEffect(() => {
            y.current && (_(), setTimeout(v));
        }, [o]),
        Ee.useEffect(() => (v(), () => _()), []),
        If.createElement(
            "canvas",
            Object.assign({ ref: h, role: "img", height: n, width: i }, d),
            c
        )
    );
}
const N1 = Ee.forwardRef(A1);
function B1(t, e) {
    return (
        uo.register(e),
        Ee.forwardRef((n, i) =>
            If.createElement(N1, Object.assign({}, n, { ref: i, type: t }))
        )
    );
}
const j1 = B1("bar", cs);
uo.register(Ql, Xl, hs, v1, b1, m1);
const H1 = () => {
    const t = [
        { name: "Yadav", score: 24 },
        { name: "Nikhil kumar pal", score: 35 },
        { name: "Harshit sharma", score: 38 },
        { name: "Murtza Ali", score: 35 },
        { name: "Avnish rajput", score: 38 },
        { name: "Sarvendr Yadav", score: 28 },
        { name: "Hariom sharma", score: 26 },
        { name: "Anshu kashyap", score: 38 },
        { name: "Alimohammad", score: 37 },
        { name: "Vikash yadav", score: 23 },
        { name: "Aahad", score: 39 },
        { name: "Prashanti kumari", score: 39 },
        { name: "Ritu goswami", score: 39 },
        { name: "Neha sharma", score: 36 },
        { name: "Prens singh", score: 14 },
        { name: "Dileep kumar", score: 34 },
        { name: "Laki", score: 18 },
        { name: "Khushi", score: 29 },
        { name: "Mohit kumar", score: 34 },
        { name: "Sweta yadav", score: 37 },
        { name: "Rohit", score: 20 },
        { name: "Anushka yadav", score: 36 },
        { name: "Sameer Yadav Ji brand", score: 28 },
        { name: "Shakuntala Rajput", score: 36 },
        { name: "Apurva yadav", score: 37 },
    ],
        e = Math.max(...t.map((o) => o.score)),
        n = Math.min(...t.map((o) => o.score)),
        i = (o) => {
            const l = (o - n) / (e - n),
                a = 240 - l * 240,
                u = 50 + l * 20;
            return `hsl(${a}, 70%, ${u}%)`;
        },
        r = {
            labels: t.map((o) => o.name),
            datasets: [
                {
                    label: "Scores",
                    data: t.map((o) => o.score),
                    backgroundColor: t.map((o) => i(o.score)),
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                },
            ],
        },
        s = {
            responsive: !0,
            plugins: {
                legend: { position: "top" },
                title: { display: !0, text: "Student Scores Bar Chart" },
            },
            scales: { y: { beginAtZero: !0 } },
        };
    return Li.jsxs("div", {
        children: [
            Li.jsx("h2", { children: "Students Scores" }),
            Li.jsx(j1, { data: r, options: s }),
        ],
    });
};
Bh(document.getElementById("root")).render(
    Li.jsx(Ee.StrictMode, { children: Li.jsx(H1, {}) })
);
