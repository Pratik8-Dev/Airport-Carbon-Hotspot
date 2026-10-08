function av(a, r) {
  for (var u = 0; u < r.length; u++) {
    const o = r[u];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const s in o)
        if (s !== "default" && !(s in a)) {
          const d = Object.getOwnPropertyDescriptor(o, s);
          d && Object.defineProperty(a, s, d.get ? d : {
            enumerable: !0,
            get: () => o[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var kT = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function lv(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var us = { exports: {} }, Vr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Km;
function rv() {
  if (Km) return Vr;
  Km = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function u(o, s, d) {
    var h = null;
    if (d !== void 0 && (h = "" + d), s.key !== void 0 && (h = "" + s.key), "key" in s) {
      d = {};
      for (var p in s)
        p !== "key" && (d[p] = s[p]);
    } else d = s;
    return s = d.ref, {
      $$typeof: a,
      type: o,
      key: h,
      ref: s !== void 0 ? s : null,
      props: d
    };
  }
  return Vr.Fragment = r, Vr.jsx = u, Vr.jsxs = u, Vr;
}
var Zm;
function iv() {
  return Zm || (Zm = 1, us.exports = rv()), us.exports;
}
var Z = iv(), os = { exports: {} }, Gr = {}, cs = { exports: {} }, ss = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jm;
function uv() {
  return Jm || (Jm = 1, function(a) {
    function r(k, rt) {
      var et = k.length;
      k.push(rt);
      t: for (; 0 < et; ) {
        var ft = et - 1 >>> 1, S = k[ft];
        if (0 < s(S, rt))
          k[ft] = rt, k[et] = S, et = ft;
        else break t;
      }
    }
    function u(k) {
      return k.length === 0 ? null : k[0];
    }
    function o(k) {
      if (k.length === 0) return null;
      var rt = k[0], et = k.pop();
      if (et !== rt) {
        k[0] = et;
        t: for (var ft = 0, S = k.length, Y = S >>> 1; ft < Y; ) {
          var nt = 2 * (ft + 1) - 1, it = k[nt], I = nt + 1, yt = k[I];
          if (0 > s(it, et))
            I < S && 0 > s(yt, it) ? (k[ft] = yt, k[I] = et, ft = I) : (k[ft] = it, k[nt] = et, ft = nt);
          else if (I < S && 0 > s(yt, et))
            k[ft] = yt, k[I] = et, ft = I;
          else break t;
        }
      }
      return rt;
    }
    function s(k, rt) {
      var et = k.sortIndex - rt.sortIndex;
      return et !== 0 ? et : k.id - rt.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      a.unstable_now = function() {
        return d.now();
      };
    } else {
      var h = Date, p = h.now();
      a.unstable_now = function() {
        return h.now() - p;
      };
    }
    var v = [], y = [], T = 1, x = null, R = 3, w = !1, M = !1, A = !1, H = typeof setTimeout == "function" ? setTimeout : null, K = typeof clearTimeout == "function" ? clearTimeout : null, J = typeof setImmediate < "u" ? setImmediate : null;
    function F(k) {
      for (var rt = u(y); rt !== null; ) {
        if (rt.callback === null) o(y);
        else if (rt.startTime <= k)
          o(y), rt.sortIndex = rt.expirationTime, r(v, rt);
        else break;
        rt = u(y);
      }
    }
    function V(k) {
      if (A = !1, F(k), !M)
        if (u(v) !== null)
          M = !0, X();
        else {
          var rt = u(y);
          rt !== null && lt(V, rt.startTime - k);
        }
    }
    var z = !1, j = -1, P = 5, at = -1;
    function L() {
      return !(a.unstable_now() - at < P);
    }
    function Q() {
      if (z) {
        var k = a.unstable_now();
        at = k;
        var rt = !0;
        try {
          t: {
            M = !1, A && (A = !1, K(j), j = -1), w = !0;
            var et = R;
            try {
              e: {
                for (F(k), x = u(v); x !== null && !(x.expirationTime > k && L()); ) {
                  var ft = x.callback;
                  if (typeof ft == "function") {
                    x.callback = null, R = x.priorityLevel;
                    var S = ft(
                      x.expirationTime <= k
                    );
                    if (k = a.unstable_now(), typeof S == "function") {
                      x.callback = S, F(k), rt = !0;
                      break e;
                    }
                    x === u(v) && o(v), F(k);
                  } else o(v);
                  x = u(v);
                }
                if (x !== null) rt = !0;
                else {
                  var Y = u(y);
                  Y !== null && lt(
                    V,
                    Y.startTime - k
                  ), rt = !1;
                }
              }
              break t;
            } finally {
              x = null, R = et, w = !1;
            }
            rt = void 0;
          }
        } finally {
          rt ? tt() : z = !1;
        }
      }
    }
    var tt;
    if (typeof J == "function")
      tt = function() {
        J(Q);
      };
    else if (typeof MessageChannel < "u") {
      var g = new MessageChannel(), W = g.port2;
      g.port1.onmessage = Q, tt = function() {
        W.postMessage(null);
      };
    } else
      tt = function() {
        H(Q, 0);
      };
    function X() {
      z || (z = !0, tt());
    }
    function lt(k, rt) {
      j = H(function() {
        k(a.unstable_now());
      }, rt);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, a.unstable_continueExecution = function() {
      M || w || (M = !0, X());
    }, a.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : P = 0 < k ? Math.floor(1e3 / k) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return R;
    }, a.unstable_getFirstCallbackNode = function() {
      return u(v);
    }, a.unstable_next = function(k) {
      switch (R) {
        case 1:
        case 2:
        case 3:
          var rt = 3;
          break;
        default:
          rt = R;
      }
      var et = R;
      R = rt;
      try {
        return k();
      } finally {
        R = et;
      }
    }, a.unstable_pauseExecution = function() {
    }, a.unstable_requestPaint = function() {
    }, a.unstable_runWithPriority = function(k, rt) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var et = R;
      R = k;
      try {
        return rt();
      } finally {
        R = et;
      }
    }, a.unstable_scheduleCallback = function(k, rt, et) {
      var ft = a.unstable_now();
      switch (typeof et == "object" && et !== null ? (et = et.delay, et = typeof et == "number" && 0 < et ? ft + et : ft) : et = ft, k) {
        case 1:
          var S = -1;
          break;
        case 2:
          S = 250;
          break;
        case 5:
          S = 1073741823;
          break;
        case 4:
          S = 1e4;
          break;
        default:
          S = 5e3;
      }
      return S = et + S, k = {
        id: T++,
        callback: rt,
        priorityLevel: k,
        startTime: et,
        expirationTime: S,
        sortIndex: -1
      }, et > ft ? (k.sortIndex = et, r(y, k), u(v) === null && k === u(y) && (A ? (K(j), j = -1) : A = !0, lt(V, et - ft))) : (k.sortIndex = S, r(v, k), M || w || (M = !0, X())), k;
    }, a.unstable_shouldYield = L, a.unstable_wrapCallback = function(k) {
      var rt = R;
      return function() {
        var et = R;
        R = rt;
        try {
          return k.apply(this, arguments);
        } finally {
          R = et;
        }
      };
    };
  }(ss)), ss;
}
var Wm;
function ov() {
  return Wm || (Wm = 1, cs.exports = uv()), cs.exports;
}
var fs = { exports: {} }, gt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fm;
function cv() {
  if (Fm) return gt;
  Fm = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), h = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), x = Symbol.iterator;
  function R(S) {
    return S === null || typeof S != "object" ? null : (S = x && S[x] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var w = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, M = Object.assign, A = {};
  function H(S, Y, nt) {
    this.props = S, this.context = Y, this.refs = A, this.updater = nt || w;
  }
  H.prototype.isReactComponent = {}, H.prototype.setState = function(S, Y) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, Y, "setState");
  }, H.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function K() {
  }
  K.prototype = H.prototype;
  function J(S, Y, nt) {
    this.props = S, this.context = Y, this.refs = A, this.updater = nt || w;
  }
  var F = J.prototype = new K();
  F.constructor = J, M(F, H.prototype), F.isPureReactComponent = !0;
  var V = Array.isArray, z = { H: null, A: null, T: null, S: null }, j = Object.prototype.hasOwnProperty;
  function P(S, Y, nt, it, I, yt) {
    return nt = yt.ref, {
      $$typeof: a,
      type: S,
      key: Y,
      ref: nt !== void 0 ? nt : null,
      props: yt
    };
  }
  function at(S, Y) {
    return P(
      S.type,
      Y,
      void 0,
      void 0,
      void 0,
      S.props
    );
  }
  function L(S) {
    return typeof S == "object" && S !== null && S.$$typeof === a;
  }
  function Q(S) {
    var Y = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(nt) {
      return Y[nt];
    });
  }
  var tt = /\/+/g;
  function g(S, Y) {
    return typeof S == "object" && S !== null && S.key != null ? Q("" + S.key) : Y.toString(36);
  }
  function W() {
  }
  function X(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(W, W) : (S.status = "pending", S.then(
          function(Y) {
            S.status === "pending" && (S.status = "fulfilled", S.value = Y);
          },
          function(Y) {
            S.status === "pending" && (S.status = "rejected", S.reason = Y);
          }
        )), S.status) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function lt(S, Y, nt, it, I) {
    var yt = typeof S;
    (yt === "undefined" || yt === "boolean") && (S = null);
    var ut = !1;
    if (S === null) ut = !0;
    else
      switch (yt) {
        case "bigint":
        case "string":
        case "number":
          ut = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case a:
            case r:
              ut = !0;
              break;
            case T:
              return ut = S._init, lt(
                ut(S._payload),
                Y,
                nt,
                it,
                I
              );
          }
      }
    if (ut)
      return I = I(S), ut = it === "" ? "." + g(S, 0) : it, V(I) ? (nt = "", ut != null && (nt = ut.replace(tt, "$&/") + "/"), lt(I, Y, nt, "", function(Lt) {
        return Lt;
      })) : I != null && (L(I) && (I = at(
        I,
        nt + (I.key == null || S && S.key === I.key ? "" : ("" + I.key).replace(
          tt,
          "$&/"
        ) + "/") + ut
      )), Y.push(I)), 1;
    ut = 0;
    var xt = it === "" ? "." : it + ":";
    if (V(S))
      for (var Ct = 0; Ct < S.length; Ct++)
        it = S[Ct], yt = xt + g(it, Ct), ut += lt(
          it,
          Y,
          nt,
          yt,
          I
        );
    else if (Ct = R(S), typeof Ct == "function")
      for (S = Ct.call(S), Ct = 0; !(it = S.next()).done; )
        it = it.value, yt = xt + g(it, Ct++), ut += lt(
          it,
          Y,
          nt,
          yt,
          I
        );
    else if (yt === "object") {
      if (typeof S.then == "function")
        return lt(
          X(S),
          Y,
          nt,
          it,
          I
        );
      throw Y = String(S), Error(
        "Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ut;
  }
  function k(S, Y, nt) {
    if (S == null) return S;
    var it = [], I = 0;
    return lt(S, it, "", "", function(yt) {
      return Y.call(nt, yt, I++);
    }), it;
  }
  function rt(S) {
    if (S._status === -1) {
      var Y = S._result;
      Y = Y(), Y.then(
        function(nt) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = nt);
        },
        function(nt) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = nt);
        }
      ), S._status === -1 && (S._status = 0, S._result = Y);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var et = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Y = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(Y)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  };
  function ft() {
  }
  return gt.Children = {
    map: k,
    forEach: function(S, Y, nt) {
      k(
        S,
        function() {
          Y.apply(this, arguments);
        },
        nt
      );
    },
    count: function(S) {
      var Y = 0;
      return k(S, function() {
        Y++;
      }), Y;
    },
    toArray: function(S) {
      return k(S, function(Y) {
        return Y;
      }) || [];
    },
    only: function(S) {
      if (!L(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  }, gt.Component = H, gt.Fragment = u, gt.Profiler = s, gt.PureComponent = J, gt.StrictMode = o, gt.Suspense = v, gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = z, gt.act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, gt.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, gt.cloneElement = function(S, Y, nt) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var it = M({}, S.props), I = S.key, yt = void 0;
    if (Y != null)
      for (ut in Y.ref !== void 0 && (yt = void 0), Y.key !== void 0 && (I = "" + Y.key), Y)
        !j.call(Y, ut) || ut === "key" || ut === "__self" || ut === "__source" || ut === "ref" && Y.ref === void 0 || (it[ut] = Y[ut]);
    var ut = arguments.length - 2;
    if (ut === 1) it.children = nt;
    else if (1 < ut) {
      for (var xt = Array(ut), Ct = 0; Ct < ut; Ct++)
        xt[Ct] = arguments[Ct + 2];
      it.children = xt;
    }
    return P(S.type, I, void 0, void 0, yt, it);
  }, gt.createContext = function(S) {
    return S = {
      $$typeof: h,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: d,
      _context: S
    }, S;
  }, gt.createElement = function(S, Y, nt) {
    var it, I = {}, yt = null;
    if (Y != null)
      for (it in Y.key !== void 0 && (yt = "" + Y.key), Y)
        j.call(Y, it) && it !== "key" && it !== "__self" && it !== "__source" && (I[it] = Y[it]);
    var ut = arguments.length - 2;
    if (ut === 1) I.children = nt;
    else if (1 < ut) {
      for (var xt = Array(ut), Ct = 0; Ct < ut; Ct++)
        xt[Ct] = arguments[Ct + 2];
      I.children = xt;
    }
    if (S && S.defaultProps)
      for (it in ut = S.defaultProps, ut)
        I[it] === void 0 && (I[it] = ut[it]);
    return P(S, yt, void 0, void 0, null, I);
  }, gt.createRef = function() {
    return { current: null };
  }, gt.forwardRef = function(S) {
    return { $$typeof: p, render: S };
  }, gt.isValidElement = L, gt.lazy = function(S) {
    return {
      $$typeof: T,
      _payload: { _status: -1, _result: S },
      _init: rt
    };
  }, gt.memo = function(S, Y) {
    return {
      $$typeof: y,
      type: S,
      compare: Y === void 0 ? null : Y
    };
  }, gt.startTransition = function(S) {
    var Y = z.T, nt = {};
    z.T = nt;
    try {
      var it = S(), I = z.S;
      I !== null && I(nt, it), typeof it == "object" && it !== null && typeof it.then == "function" && it.then(ft, et);
    } catch (yt) {
      et(yt);
    } finally {
      z.T = Y;
    }
  }, gt.unstable_useCacheRefresh = function() {
    return z.H.useCacheRefresh();
  }, gt.use = function(S) {
    return z.H.use(S);
  }, gt.useActionState = function(S, Y, nt) {
    return z.H.useActionState(S, Y, nt);
  }, gt.useCallback = function(S, Y) {
    return z.H.useCallback(S, Y);
  }, gt.useContext = function(S) {
    return z.H.useContext(S);
  }, gt.useDebugValue = function() {
  }, gt.useDeferredValue = function(S, Y) {
    return z.H.useDeferredValue(S, Y);
  }, gt.useEffect = function(S, Y) {
    return z.H.useEffect(S, Y);
  }, gt.useId = function() {
    return z.H.useId();
  }, gt.useImperativeHandle = function(S, Y, nt) {
    return z.H.useImperativeHandle(S, Y, nt);
  }, gt.useInsertionEffect = function(S, Y) {
    return z.H.useInsertionEffect(S, Y);
  }, gt.useLayoutEffect = function(S, Y) {
    return z.H.useLayoutEffect(S, Y);
  }, gt.useMemo = function(S, Y) {
    return z.H.useMemo(S, Y);
  }, gt.useOptimistic = function(S, Y) {
    return z.H.useOptimistic(S, Y);
  }, gt.useReducer = function(S, Y, nt) {
    return z.H.useReducer(S, Y, nt);
  }, gt.useRef = function(S) {
    return z.H.useRef(S);
  }, gt.useState = function(S) {
    return z.H.useState(S);
  }, gt.useSyncExternalStore = function(S, Y, nt) {
    return z.H.useSyncExternalStore(
      S,
      Y,
      nt
    );
  }, gt.useTransition = function() {
    return z.H.useTransition();
  }, gt.version = "19.0.0", gt;
}
var Pm;
function Vs() {
  return Pm || (Pm = 1, fs.exports = cv()), fs.exports;
}
var ds = { exports: {} }, ve = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Im;
function sv() {
  if (Im) return ve;
  Im = 1;
  var a = Vs();
  function r(v) {
    var y = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var T = 2; T < arguments.length; T++)
        y += "&args[]=" + encodeURIComponent(arguments[T]);
    }
    return "Minified React error #" + v + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u() {
  }
  var o = {
    d: {
      f: u,
      r: function() {
        throw Error(r(522));
      },
      D: u,
      C: u,
      L: u,
      m: u,
      X: u,
      S: u,
      M: u
    },
    p: 0,
    findDOMNode: null
  }, s = Symbol.for("react.portal");
  function d(v, y, T) {
    var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: x == null ? null : "" + x,
      children: v,
      containerInfo: y,
      implementation: T
    };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(v, y) {
    if (v === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, ve.createPortal = function(v, y) {
    var T = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(r(299));
    return d(v, y, null, T);
  }, ve.flushSync = function(v) {
    var y = h.T, T = o.p;
    try {
      if (h.T = null, o.p = 2, v) return v();
    } finally {
      h.T = y, o.p = T, o.d.f();
    }
  }, ve.preconnect = function(v, y) {
    typeof v == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, o.d.C(v, y));
  }, ve.prefetchDNS = function(v) {
    typeof v == "string" && o.d.D(v);
  }, ve.preinit = function(v, y) {
    if (typeof v == "string" && y && typeof y.as == "string") {
      var T = y.as, x = p(T, y.crossOrigin), R = typeof y.integrity == "string" ? y.integrity : void 0, w = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      T === "style" ? o.d.S(
        v,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: x,
          integrity: R,
          fetchPriority: w
        }
      ) : T === "script" && o.d.X(v, {
        crossOrigin: x,
        integrity: R,
        fetchPriority: w,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, ve.preinitModule = function(v, y) {
    if (typeof v == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var T = p(
            y.as,
            y.crossOrigin
          );
          o.d.M(v, {
            crossOrigin: T,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && o.d.M(v);
  }, ve.preload = function(v, y) {
    if (typeof v == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var T = y.as, x = p(T, y.crossOrigin);
      o.d.L(v, T, {
        crossOrigin: x,
        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0,
        type: typeof y.type == "string" ? y.type : void 0,
        fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
        referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
        imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
        imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
        media: typeof y.media == "string" ? y.media : void 0
      });
    }
  }, ve.preloadModule = function(v, y) {
    if (typeof v == "string")
      if (y) {
        var T = p(y.as, y.crossOrigin);
        o.d.m(v, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: T,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else o.d.m(v);
  }, ve.requestFormReset = function(v) {
    o.d.r(v);
  }, ve.unstable_batchedUpdates = function(v, y) {
    return v(y);
  }, ve.useFormState = function(v, y, T) {
    return h.H.useFormState(v, y, T);
  }, ve.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, ve.version = "19.0.0", ve;
}
var tp;
function fv() {
  if (tp) return ds.exports;
  tp = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), ds.exports = sv(), ds.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ep;
function dv() {
  if (ep) return Gr;
  ep = 1;
  var a = ov(), r = Vs(), u = fv();
  function o(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  var d = Symbol.for("react.element"), h = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), R = Symbol.for("react.consumer"), w = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), V = Symbol.for("react.memo_cache_sentinel"), z = Symbol.iterator;
  function j(t) {
    return t === null || typeof t != "object" ? null : (t = z && t[z] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var P = Symbol.for("react.client.reference");
  function at(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === P ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case v:
        return "Fragment";
      case p:
        return "Portal";
      case T:
        return "Profiler";
      case y:
        return "StrictMode";
      case A:
        return "Suspense";
      case H:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case w:
          return (t.displayName || "Context") + ".Provider";
        case R:
          return (t._context.displayName || "Context") + ".Consumer";
        case M:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case K:
          return e = t.displayName || null, e !== null ? e : at(t.type) || "Memo";
        case J:
          e = t._payload, t = t._init;
          try {
            return at(t(e));
          } catch {
          }
      }
    return null;
  }
  var L = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.assign, tt, g;
  function W(t) {
    if (tt === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        tt = e && e[1] || "", g = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + tt + t + g;
  }
  var X = !1;
  function lt(t, e) {
    if (!t || X) return "";
    X = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var G = function() {
                throw Error();
              };
              if (Object.defineProperty(G.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(G, []);
                } catch (U) {
                  var D = U;
                }
                Reflect.construct(t, [], G);
              } else {
                try {
                  G.call();
                } catch (U) {
                  D = U;
                }
                t.call(G.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                D = U;
              }
              (G = t()) && typeof G.catch == "function" && G.catch(function() {
              });
            }
          } catch (U) {
            if (U && D && typeof U.stack == "string")
              return [U.stack, D.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      i && i.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var c = l.DetermineComponentFrameRoot(), f = c[0], m = c[1];
      if (f && m) {
        var b = f.split(`
`), E = m.split(`
`);
        for (i = l = 0; l < b.length && !b[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; i < E.length && !E[i].includes(
          "DetermineComponentFrameRoot"
        ); )
          i++;
        if (l === b.length || i === E.length)
          for (l = b.length - 1, i = E.length - 1; 1 <= l && 0 <= i && b[l] !== E[i]; )
            i--;
        for (; 1 <= l && 0 <= i; l--, i--)
          if (b[l] !== E[i]) {
            if (l !== 1 || i !== 1)
              do
                if (l--, i--, 0 > i || b[l] !== E[i]) {
                  var $ = `
` + b[l].replace(" at new ", " at ");
                  return t.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", t.displayName)), $;
                }
              while (1 <= l && 0 <= i);
            break;
          }
      }
    } finally {
      X = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? W(n) : "";
  }
  function k(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return W(t.type);
      case 16:
        return W("Lazy");
      case 13:
        return W("Suspense");
      case 19:
        return W("SuspenseList");
      case 0:
      case 15:
        return t = lt(t.type, !1), t;
      case 11:
        return t = lt(t.type.render, !1), t;
      case 1:
        return t = lt(t.type, !0), t;
      default:
        return "";
    }
  }
  function rt(t) {
    try {
      var e = "";
      do
        e += k(t), t = t.return;
      while (t);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  function et(t) {
    var e = t, n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, e.flags & 4098 && (n = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function ft(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function S(t) {
    if (et(t) !== t)
      throw Error(o(188));
  }
  function Y(t) {
    var e = t.alternate;
    if (!e) {
      if (e = et(t), e === null) throw Error(o(188));
      return e !== t ? null : t;
    }
    for (var n = t, l = e; ; ) {
      var i = n.return;
      if (i === null) break;
      var c = i.alternate;
      if (c === null) {
        if (l = i.return, l !== null) {
          n = l;
          continue;
        }
        break;
      }
      if (i.child === c.child) {
        for (c = i.child; c; ) {
          if (c === n) return S(i), t;
          if (c === l) return S(i), e;
          c = c.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== l.return) n = i, l = c;
      else {
        for (var f = !1, m = i.child; m; ) {
          if (m === n) {
            f = !0, n = i, l = c;
            break;
          }
          if (m === l) {
            f = !0, l = i, n = c;
            break;
          }
          m = m.sibling;
        }
        if (!f) {
          for (m = c.child; m; ) {
            if (m === n) {
              f = !0, n = c, l = i;
              break;
            }
            if (m === l) {
              f = !0, l = c, n = i;
              break;
            }
            m = m.sibling;
          }
          if (!f) throw Error(o(189));
        }
      }
      if (n.alternate !== l) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? t : e;
  }
  function nt(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = nt(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var it = Array.isArray, I = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, yt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ut = [], xt = -1;
  function Ct(t) {
    return { current: t };
  }
  function Lt(t) {
    0 > xt || (t.current = ut[xt], ut[xt] = null, xt--);
  }
  function Nt(t, e) {
    xt++, ut[xt] = t.current, t.current = e;
  }
  var Ee = Ct(null), gn = Ct(null), _e = Ct(null), rn = Ct(null);
  function zn(t, e) {
    switch (Nt(_e, e), Nt(gn, t), Nt(Ee, null), t = e.nodeType, t) {
      case 9:
      case 11:
        e = (e = e.documentElement) && (e = e.namespaceURI) ? Cm(e) : 0;
        break;
      default:
        if (t = t === 8 ? e.parentNode : e, e = t.tagName, t = t.namespaceURI)
          t = Cm(t), e = Em(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    Lt(Ee), Nt(Ee, e);
  }
  function vn() {
    Lt(Ee), Lt(gn), Lt(_e);
  }
  function un(t) {
    t.memoizedState !== null && Nt(rn, t);
    var e = Ee.current, n = Em(e, t.type);
    e !== n && (Nt(gn, t), Nt(Ee, n));
  }
  function Ae(t) {
    gn.current === t && (Lt(Ee), Lt(gn)), rn.current === t && (Lt(rn), jr._currentValue = yt);
  }
  var se = Object.prototype.hasOwnProperty, on = a.unstable_scheduleCallback, Dn = a.unstable_cancelCallback, mt = a.unstable_shouldYield, Iu = a.unstable_requestPaint, ze = a.unstable_now, di = a.unstable_getCurrentPriorityLevel, Se = a.unstable_ImmediatePriority, Yt = a.unstable_UserBlockingPriority, fe = a.unstable_NormalPriority, qe = a.unstable_LowPriority, tl = a.unstable_IdlePriority, to = a.log, L0 = a.unstable_setDisableYieldValue, Kl = null, De = null;
  function q0(t) {
    if (De && typeof De.onCommitFiberRoot == "function")
      try {
        De.onCommitFiberRoot(
          Kl,
          t,
          void 0,
          (t.current.flags & 128) === 128
        );
      } catch {
      }
  }
  function ta(t) {
    if (typeof to == "function" && L0(t), De && typeof De.setStrictMode == "function")
      try {
        De.setStrictMode(Kl, t);
      } catch {
      }
  }
  var we = Math.clz32 ? Math.clz32 : G0, Y0 = Math.log, V0 = Math.LN2;
  function G0(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Y0(t) / V0 | 0) | 0;
  }
  var hi = 128, mi = 4194304;
  function Oa(t) {
    var e = t & 42;
    if (e !== 0) return e;
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
        return 64;
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
        return t & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function pi(t, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var l = 0, i = t.suspendedLanes, c = t.pingedLanes, f = t.warmLanes;
    t = t.finishedLanes !== 0;
    var m = n & 134217727;
    return m !== 0 ? (n = m & ~i, n !== 0 ? l = Oa(n) : (c &= m, c !== 0 ? l = Oa(c) : t || (f = m & ~f, f !== 0 && (l = Oa(f))))) : (m = n & ~i, m !== 0 ? l = Oa(m) : c !== 0 ? l = Oa(c) : t || (f = n & ~f, f !== 0 && (l = Oa(f)))), l === 0 ? 0 : e !== 0 && e !== l && !(e & i) && (i = l & -l, f = e & -e, i >= f || i === 32 && (f & 4194176) !== 0) ? e : l;
  }
  function Zl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function X0(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
        return e + 250;
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function mf() {
    var t = hi;
    return hi <<= 1, !(hi & 4194176) && (hi = 128), t;
  }
  function pf() {
    var t = mi;
    return mi <<= 1, !(mi & 62914560) && (mi = 4194304), t;
  }
  function eo(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Jl(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Q0(t, e, n, l, i, c) {
    var f = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var m = t.entanglements, b = t.expirationTimes, E = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var $ = 31 - we(n), G = 1 << $;
      m[$] = 0, b[$] = -1;
      var D = E[$];
      if (D !== null)
        for (E[$] = null, $ = 0; $ < D.length; $++) {
          var U = D[$];
          U !== null && (U.lane &= -536870913);
        }
      n &= ~G;
    }
    l !== 0 && yf(t, l, 0), c !== 0 && i === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(f & ~e));
  }
  function yf(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var l = 31 - we(e);
    t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | n & 4194218;
  }
  function gf(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var l = 31 - we(n), i = 1 << l;
      i & e | t[l] & e && (t[l] |= e), n &= ~i;
    }
  }
  function vf(t) {
    return t &= -t, 2 < t ? 8 < t ? t & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function bf() {
    var t = I.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : qm(t.type));
  }
  function K0(t, e) {
    var n = I.p;
    try {
      return I.p = t, e();
    } finally {
      I.p = n;
    }
  }
  var ea = Math.random().toString(36).slice(2), ye = "__reactFiber$" + ea, xe = "__reactProps$" + ea, el = "__reactContainer$" + ea, no = "__reactEvents$" + ea, Z0 = "__reactListeners$" + ea, J0 = "__reactHandles$" + ea, Sf = "__reactResources$" + ea, Wl = "__reactMarker$" + ea;
  function ao(t) {
    delete t[ye], delete t[xe], delete t[no], delete t[Z0], delete t[J0];
  }
  function Ma(t) {
    var e = t[ye];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[el] || n[ye]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = Om(t); t !== null; ) {
            if (n = t[ye]) return n;
            t = Om(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function nl(t) {
    if (t = t[ye] || t[el]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Fl(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function al(t) {
    var e = t[Sf];
    return e || (e = t[Sf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ie(t) {
    t[Wl] = !0;
  }
  var Tf = /* @__PURE__ */ new Set(), Cf = {};
  function Ra(t, e) {
    ll(t, e), ll(t + "Capture", e);
  }
  function ll(t, e) {
    for (Cf[t] = e, t = 0; t < e.length; t++)
      Tf.add(e[t]);
  }
  var wn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), W0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ef = {}, Af = {};
  function F0(t) {
    return se.call(Af, t) ? !0 : se.call(Ef, t) ? !1 : W0.test(t) ? Af[t] = !0 : (Ef[t] = !0, !1);
  }
  function yi(t, e, n) {
    if (F0(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function gi(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function Nn(t, e, n, l) {
    if (l === null) t.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + l);
    }
  }
  function Ye(t) {
    switch (typeof t) {
      case "bigint":
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
  function xf(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function P0(t) {
    var e = xf(t) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    ), l = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get, c = n.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return i.call(this);
        },
        set: function(f) {
          l = "" + f, c.call(this, f);
        }
      }), Object.defineProperty(t, e, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(f) {
          l = "" + f;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function vi(t) {
    t._valueTracker || (t._valueTracker = P0(t));
  }
  function Of(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), l = "";
    return t && (l = xf(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== n ? (e.setValue(t), !0) : !1;
  }
  function bi(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var I0 = /[\n"\\]/g;
  function Ve(t) {
    return t.replace(
      I0,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function lo(t, e, n, l, i, c, f, m) {
    t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ye(e)) : t.value !== "" + Ye(e) && (t.value = "" + Ye(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), e != null ? ro(t, f, Ye(e)) : n != null ? ro(t, f, Ye(n)) : l != null && t.removeAttribute("value"), i == null && c != null && (t.defaultChecked = !!c), i != null && (t.checked = i && typeof i != "function" && typeof i != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? t.name = "" + Ye(m) : t.removeAttribute("name");
  }
  function Mf(t, e, n, l, i, c, f, m) {
    if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.type = c), e != null || n != null) {
      if (!(c !== "submit" && c !== "reset" || e != null))
        return;
      n = n != null ? "" + Ye(n) : "", e = e != null ? "" + Ye(e) : n, m || e === t.value || (t.value = e), t.defaultValue = e;
    }
    l = l ?? i, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = m ? t.checked : !!l, t.defaultChecked = !!l, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f);
  }
  function ro(t, e, n) {
    e === "number" && bi(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
  }
  function rl(t, e, n, l) {
    if (t = t.options, e) {
      e = {};
      for (var i = 0; i < n.length; i++)
        e["$" + n[i]] = !0;
      for (n = 0; n < t.length; n++)
        i = e.hasOwnProperty("$" + t[n].value), t[n].selected !== i && (t[n].selected = i), i && l && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Ye(n), e = null, i = 0; i < t.length; i++) {
        if (t[i].value === n) {
          t[i].selected = !0, l && (t[i].defaultSelected = !0);
          return;
        }
        e !== null || t[i].disabled || (e = t[i]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Rf(t, e, n) {
    if (e != null && (e = "" + Ye(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Ye(n) : "";
  }
  function _f(t, e, n, l) {
    if (e == null) {
      if (l != null) {
        if (n != null) throw Error(o(92));
        if (it(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), e = n;
    }
    n = Ye(e), t.defaultValue = n, l = t.textContent, l === n && l !== "" && l !== null && (t.value = l);
  }
  function il(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var ty = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function zf(t, e, n) {
    var l = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, n) : typeof n != "number" || n === 0 || ty.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function Df(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(o(62));
    if (t = t.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
      for (var i in e)
        l = e[i], e.hasOwnProperty(i) && n[i] !== l && zf(t, i, l);
    } else
      for (var c in e)
        e.hasOwnProperty(c) && zf(t, c, e[c]);
  }
  function io(t) {
    if (t.indexOf("-") === -1) return !1;
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
  var ey = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), ny = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Si(t) {
    return ny.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var uo = null;
  function oo(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ul = null, ol = null;
  function wf(t) {
    var e = nl(t);
    if (e && (t = e.stateNode)) {
      var n = t[xe] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (lo(
            t,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + Ve(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var i = l[xe] || null;
                if (!i) throw Error(o(90));
                lo(
                  l,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              l = n[e], l.form === t.form && Of(l);
          }
          break t;
        case "textarea":
          Rf(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && rl(t, !!n.multiple, e, !1);
      }
    }
  }
  var co = !1;
  function Nf(t, e, n) {
    if (co) return t(e, n);
    co = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (co = !1, (ul !== null || ol !== null) && (au(), ul && (e = ul, t = ol, ol = ul = null, wf(e), t)))
        for (e = 0; e < t.length; e++) wf(t[e]);
    }
  }
  function Pl(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[xe] || null;
    if (l === null) return null;
    n = l[e];
    t: switch (e) {
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
        (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function")
      throw Error(
        o(231, e, typeof n)
      );
    return n;
  }
  var so = !1;
  if (wn)
    try {
      var Il = {};
      Object.defineProperty(Il, "passive", {
        get: function() {
          so = !0;
        }
      }), window.addEventListener("test", Il, Il), window.removeEventListener("test", Il, Il);
    } catch {
      so = !1;
    }
  var na = null, fo = null, Ti = null;
  function Bf() {
    if (Ti) return Ti;
    var t, e = fo, n = e.length, l, i = "value" in na ? na.value : na.textContent, c = i.length;
    for (t = 0; t < n && e[t] === i[t]; t++) ;
    var f = n - t;
    for (l = 1; l <= f && e[n - l] === i[c - l]; l++) ;
    return Ti = i.slice(t, 1 < l ? 1 - l : void 0);
  }
  function Ci(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Ei() {
    return !0;
  }
  function Uf() {
    return !1;
  }
  function Oe(t) {
    function e(n, l, i, c, f) {
      this._reactName = n, this._targetInst = i, this.type = l, this.nativeEvent = c, this.target = f, this.currentTarget = null;
      for (var m in t)
        t.hasOwnProperty(m) && (n = t[m], this[m] = n ? n(c) : c[m]);
      return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Ei : Uf, this.isPropagationStopped = Uf, this;
    }
    return Q(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ei);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ei);
      },
      persist: function() {
      },
      isPersistent: Ei
    }), e;
  }
  var _a = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ai = Oe(_a), tr = Q({}, _a, { view: 0, detail: 0 }), ay = Oe(tr), ho, mo, er, xi = Q({}, tr, {
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
    getModifierState: yo,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== er && (er && t.type === "mousemove" ? (ho = t.screenX - er.screenX, mo = t.screenY - er.screenY) : mo = ho = 0, er = t), ho);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : mo;
    }
  }), Hf = Oe(xi), ly = Q({}, xi, { dataTransfer: 0 }), ry = Oe(ly), iy = Q({}, tr, { relatedTarget: 0 }), po = Oe(iy), uy = Q({}, _a, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), oy = Oe(uy), cy = Q({}, _a, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), sy = Oe(cy), fy = Q({}, _a, { data: 0 }), $f = Oe(fy), dy = {
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
    MozPrintableKey: "Unidentified"
  }, hy = {
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
    224: "Meta"
  }, my = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function py(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = my[t]) ? !!e[t] : !1;
  }
  function yo() {
    return py;
  }
  var yy = Q({}, tr, {
    key: function(t) {
      if (t.key) {
        var e = dy[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Ci(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? hy[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: yo,
    charCode: function(t) {
      return t.type === "keypress" ? Ci(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Ci(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), gy = Oe(yy), vy = Q({}, xi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), jf = Oe(vy), by = Q({}, tr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: yo
  }), Sy = Oe(by), Ty = Q({}, _a, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Cy = Oe(Ty), Ey = Q({}, xi, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ay = Oe(Ey), xy = Q({}, _a, {
    newState: 0,
    oldState: 0
  }), Oy = Oe(xy), My = [9, 13, 27, 32], go = wn && "CompositionEvent" in window, nr = null;
  wn && "documentMode" in document && (nr = document.documentMode);
  var Ry = wn && "TextEvent" in window && !nr, kf = wn && (!go || nr && 8 < nr && 11 >= nr), Lf = " ", qf = !1;
  function Yf(t, e) {
    switch (t) {
      case "keyup":
        return My.indexOf(e.keyCode) !== -1;
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
  function Vf(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var cl = !1;
  function _y(t, e) {
    switch (t) {
      case "compositionend":
        return Vf(e);
      case "keypress":
        return e.which !== 32 ? null : (qf = !0, Lf);
      case "textInput":
        return t = e.data, t === Lf && qf ? null : t;
      default:
        return null;
    }
  }
  function zy(t, e) {
    if (cl)
      return t === "compositionend" || !go && Yf(t, e) ? (t = Bf(), Ti = fo = na = null, cl = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return kf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Dy = {
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
    week: !0
  };
  function Gf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Dy[t.type] : e === "textarea";
  }
  function Xf(t, e, n, l) {
    ul ? ol ? ol.push(l) : ol = [l] : ul = l, e = ou(e, "onChange"), 0 < e.length && (n = new Ai(
      "onChange",
      "change",
      null,
      n,
      l
    ), t.push({ event: n, listeners: e }));
  }
  var ar = null, lr = null;
  function wy(t) {
    gm(t, 0);
  }
  function Oi(t) {
    var e = Fl(t);
    if (Of(e)) return t;
  }
  function Qf(t, e) {
    if (t === "change") return e;
  }
  var Kf = !1;
  if (wn) {
    var vo;
    if (wn) {
      var bo = "oninput" in document;
      if (!bo) {
        var Zf = document.createElement("div");
        Zf.setAttribute("oninput", "return;"), bo = typeof Zf.oninput == "function";
      }
      vo = bo;
    } else vo = !1;
    Kf = vo && (!document.documentMode || 9 < document.documentMode);
  }
  function Jf() {
    ar && (ar.detachEvent("onpropertychange", Wf), lr = ar = null);
  }
  function Wf(t) {
    if (t.propertyName === "value" && Oi(lr)) {
      var e = [];
      Xf(
        e,
        lr,
        t,
        oo(t)
      ), Nf(wy, e);
    }
  }
  function Ny(t, e, n) {
    t === "focusin" ? (Jf(), ar = e, lr = n, ar.attachEvent("onpropertychange", Wf)) : t === "focusout" && Jf();
  }
  function By(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Oi(lr);
  }
  function Uy(t, e) {
    if (t === "click") return Oi(e);
  }
  function Hy(t, e) {
    if (t === "input" || t === "change")
      return Oi(e);
  }
  function $y(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Ne = typeof Object.is == "function" ? Object.is : $y;
  function rr(t, e) {
    if (Ne(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), l = Object.keys(e);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var i = n[l];
      if (!se.call(e, i) || !Ne(t[i], e[i]))
        return !1;
    }
    return !0;
  }
  function Ff(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Pf(t, e) {
    var n = Ff(t);
    t = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (l = t + n.textContent.length, t <= e && l >= e)
          return { node: n, offset: e - t };
        t = l;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Ff(n);
    }
  }
  function If(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? If(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function td(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = bi(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = bi(t.document);
    }
    return e;
  }
  function So(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  function jy(t, e) {
    var n = td(e);
    e = t.focusedElem;
    var l = t.selectionRange;
    if (n !== e && e && e.ownerDocument && If(e.ownerDocument.documentElement, e)) {
      if (l !== null && So(e)) {
        if (t = l.start, n = l.end, n === void 0 && (n = t), "selectionStart" in e)
          e.selectionStart = t, e.selectionEnd = Math.min(
            n,
            e.value.length
          );
        else if (n = (t = e.ownerDocument || document) && t.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var i = e.textContent.length, c = Math.min(l.start, i);
          l = l.end === void 0 ? c : Math.min(l.end, i), !n.extend && c > l && (i = l, l = c, c = i), i = Pf(e, c);
          var f = Pf(
            e,
            l
          );
          i && f && (n.rangeCount !== 1 || n.anchorNode !== i.node || n.anchorOffset !== i.offset || n.focusNode !== f.node || n.focusOffset !== f.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), n.removeAllRanges(), c > l ? (n.addRange(t), n.extend(f.node, f.offset)) : (t.setEnd(
            f.node,
            f.offset
          ), n.addRange(t)));
        }
      }
      for (t = [], n = e; n = n.parentNode; )
        n.nodeType === 1 && t.push({
          element: n,
          left: n.scrollLeft,
          top: n.scrollTop
        });
      for (typeof e.focus == "function" && e.focus(), e = 0; e < t.length; e++)
        n = t[e], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var ky = wn && "documentMode" in document && 11 >= document.documentMode, sl = null, To = null, ir = null, Co = !1;
  function ed(t, e, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Co || sl == null || sl !== bi(l) || (l = sl, "selectionStart" in l && So(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), ir && rr(ir, l) || (ir = l, l = ou(To, "onSelect"), 0 < l.length && (e = new Ai(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: l }), e.target = sl)));
  }
  function za(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var fl = {
    animationend: za("Animation", "AnimationEnd"),
    animationiteration: za("Animation", "AnimationIteration"),
    animationstart: za("Animation", "AnimationStart"),
    transitionrun: za("Transition", "TransitionRun"),
    transitionstart: za("Transition", "TransitionStart"),
    transitioncancel: za("Transition", "TransitionCancel"),
    transitionend: za("Transition", "TransitionEnd")
  }, Eo = {}, nd = {};
  wn && (nd = document.createElement("div").style, "AnimationEvent" in window || (delete fl.animationend.animation, delete fl.animationiteration.animation, delete fl.animationstart.animation), "TransitionEvent" in window || delete fl.transitionend.transition);
  function Da(t) {
    if (Eo[t]) return Eo[t];
    if (!fl[t]) return t;
    var e = fl[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in nd)
        return Eo[t] = e[n];
    return t;
  }
  var ad = Da("animationend"), ld = Da("animationiteration"), rd = Da("animationstart"), Ly = Da("transitionrun"), qy = Da("transitionstart"), Yy = Da("transitioncancel"), id = Da("transitionend"), ud = /* @__PURE__ */ new Map(), od = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
    " "
  );
  function cn(t, e) {
    ud.set(t, e), Ra(e, [t]);
  }
  var Ge = [], dl = 0, Ao = 0;
  function Mi() {
    for (var t = dl, e = Ao = dl = 0; e < t; ) {
      var n = Ge[e];
      Ge[e++] = null;
      var l = Ge[e];
      Ge[e++] = null;
      var i = Ge[e];
      Ge[e++] = null;
      var c = Ge[e];
      if (Ge[e++] = null, l !== null && i !== null) {
        var f = l.pending;
        f === null ? i.next = i : (i.next = f.next, f.next = i), l.pending = i;
      }
      c !== 0 && cd(n, i, c);
    }
  }
  function Ri(t, e, n, l) {
    Ge[dl++] = t, Ge[dl++] = e, Ge[dl++] = n, Ge[dl++] = l, Ao |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
  }
  function xo(t, e, n, l) {
    return Ri(t, e, n, l), _i(t);
  }
  function aa(t, e) {
    return Ri(t, null, null, e), _i(t);
  }
  function cd(t, e, n) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n);
    for (var i = !1, c = t.return; c !== null; )
      c.childLanes |= n, l = c.alternate, l !== null && (l.childLanes |= n), c.tag === 22 && (t = c.stateNode, t === null || t._visibility & 1 || (i = !0)), t = c, c = c.return;
    i && e !== null && t.tag === 3 && (c = t.stateNode, i = 31 - we(n), c = c.hiddenUpdates, t = c[i], t === null ? c[i] = [e] : t.push(e), e.lane = n | 536870912);
  }
  function _i(t) {
    if (50 < Dr)
      throw Dr = 0, Dc = null, Error(o(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var hl = {}, sd = /* @__PURE__ */ new WeakMap();
  function Xe(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = sd.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: rt(e)
      }, sd.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: rt(e)
    };
  }
  var ml = [], pl = 0, zi = null, Di = 0, Qe = [], Ke = 0, wa = null, Bn = 1, Un = "";
  function Na(t, e) {
    ml[pl++] = Di, ml[pl++] = zi, zi = t, Di = e;
  }
  function fd(t, e, n) {
    Qe[Ke++] = Bn, Qe[Ke++] = Un, Qe[Ke++] = wa, wa = t;
    var l = Bn;
    t = Un;
    var i = 32 - we(l) - 1;
    l &= ~(1 << i), n += 1;
    var c = 32 - we(e) + i;
    if (30 < c) {
      var f = i - i % 5;
      c = (l & (1 << f) - 1).toString(32), l >>= f, i -= f, Bn = 1 << 32 - we(e) + i | n << i | l, Un = c + t;
    } else
      Bn = 1 << c | n << i | l, Un = t;
  }
  function Oo(t) {
    t.return !== null && (Na(t, 1), fd(t, 1, 0));
  }
  function Mo(t) {
    for (; t === zi; )
      zi = ml[--pl], ml[pl] = null, Di = ml[--pl], ml[pl] = null;
    for (; t === wa; )
      wa = Qe[--Ke], Qe[Ke] = null, Un = Qe[--Ke], Qe[Ke] = null, Bn = Qe[--Ke], Qe[Ke] = null;
  }
  var Te = null, de = null, Ot = !1, sn = null, bn = !1, Ro = Error(o(519));
  function Ba(t) {
    var e = Error(o(418, ""));
    throw cr(Xe(e, t)), Ro;
  }
  function dd(t) {
    var e = t.stateNode, n = t.type, l = t.memoizedProps;
    switch (e[ye] = t, e[xe] = l, n) {
      case "dialog":
        Et("cancel", e), Et("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Et("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Nr.length; n++)
          Et(Nr[n], e);
        break;
      case "source":
        Et("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Et("error", e), Et("load", e);
        break;
      case "details":
        Et("toggle", e);
        break;
      case "input":
        Et("invalid", e), Mf(
          e,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        ), vi(e);
        break;
      case "select":
        Et("invalid", e);
        break;
      case "textarea":
        Et("invalid", e), _f(e, l.value, l.defaultValue, l.children), vi(e);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || l.suppressHydrationWarning === !0 || Tm(e.textContent, n) ? (l.popover != null && (Et("beforetoggle", e), Et("toggle", e)), l.onScroll != null && Et("scroll", e), l.onScrollEnd != null && Et("scrollend", e), l.onClick != null && (e.onclick = cu), e = !0) : e = !1, e || Ba(t);
  }
  function hd(t) {
    for (Te = t.return; Te; )
      switch (Te.tag) {
        case 3:
        case 27:
          bn = !0;
          return;
        case 5:
        case 13:
          bn = !1;
          return;
        default:
          Te = Te.return;
      }
  }
  function ur(t) {
    if (t !== Te) return !1;
    if (!Ot) return hd(t), Ot = !0, !1;
    var e = !1, n;
    if ((n = t.tag !== 3 && t.tag !== 27) && ((n = t.tag === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Zc(t.type, t.memoizedProps)), n = !n), n && (e = !0), e && de && Ba(t), hd(t), t.tag === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (n = t.data, n === "/$") {
              if (e === 0) {
                de = dn(t.nextSibling);
                break t;
              }
              e--;
            } else
              n !== "$" && n !== "$!" && n !== "$?" || e++;
          t = t.nextSibling;
        }
        de = null;
      }
    } else
      de = Te ? dn(t.stateNode.nextSibling) : null;
    return !0;
  }
  function or() {
    de = Te = null, Ot = !1;
  }
  function cr(t) {
    sn === null ? sn = [t] : sn.push(t);
  }
  var sr = Error(o(460)), md = Error(o(474)), _o = { then: function() {
  } };
  function pd(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function wi() {
  }
  function yd(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(wi, wi), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, t === sr ? Error(o(483)) : t;
      default:
        if (typeof e.status == "string") e.then(wi, wi);
        else {
          if (t = jt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(o(482));
          t = e, t.status = "pending", t.then(
            function(l) {
              if (e.status === "pending") {
                var i = e;
                i.status = "fulfilled", i.value = l;
              }
            },
            function(l) {
              if (e.status === "pending") {
                var i = e;
                i.status = "rejected", i.reason = l;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, t === sr ? Error(o(483)) : t;
        }
        throw fr = e, sr;
    }
  }
  var fr = null;
  function gd() {
    if (fr === null) throw Error(o(459));
    var t = fr;
    return fr = null, t;
  }
  var yl = null, dr = 0;
  function Ni(t) {
    var e = dr;
    return dr += 1, yl === null && (yl = []), yd(yl, t, e);
  }
  function hr(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Bi(t, e) {
    throw e.$$typeof === d ? Error(o(525)) : (t = Object.prototype.toString.call(e), Error(
      o(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function vd(t) {
    var e = t._init;
    return e(t._payload);
  }
  function bd(t) {
    function e(O, C) {
      if (t) {
        var _ = O.deletions;
        _ === null ? (O.deletions = [C], O.flags |= 16) : _.push(C);
      }
    }
    function n(O, C) {
      if (!t) return null;
      for (; C !== null; )
        e(O, C), C = C.sibling;
      return null;
    }
    function l(O) {
      for (var C = /* @__PURE__ */ new Map(); O !== null; )
        O.key !== null ? C.set(O.key, O) : C.set(O.index, O), O = O.sibling;
      return C;
    }
    function i(O, C) {
      return O = pa(O, C), O.index = 0, O.sibling = null, O;
    }
    function c(O, C, _) {
      return O.index = _, t ? (_ = O.alternate, _ !== null ? (_ = _.index, _ < C ? (O.flags |= 33554434, C) : _) : (O.flags |= 33554434, C)) : (O.flags |= 1048576, C);
    }
    function f(O) {
      return t && O.alternate === null && (O.flags |= 33554434), O;
    }
    function m(O, C, _, q) {
      return C === null || C.tag !== 6 ? (C = Ec(_, O.mode, q), C.return = O, C) : (C = i(C, _), C.return = O, C);
    }
    function b(O, C, _, q) {
      var ot = _.type;
      return ot === v ? $(
        O,
        C,
        _.props.children,
        q,
        _.key
      ) : C !== null && (C.elementType === ot || typeof ot == "object" && ot !== null && ot.$$typeof === J && vd(ot) === C.type) ? (C = i(C, _.props), hr(C, _), C.return = O, C) : (C = Pi(
        _.type,
        _.key,
        _.props,
        null,
        O.mode,
        q
      ), hr(C, _), C.return = O, C);
    }
    function E(O, C, _, q) {
      return C === null || C.tag !== 4 || C.stateNode.containerInfo !== _.containerInfo || C.stateNode.implementation !== _.implementation ? (C = Ac(_, O.mode, q), C.return = O, C) : (C = i(C, _.children || []), C.return = O, C);
    }
    function $(O, C, _, q, ot) {
      return C === null || C.tag !== 7 ? (C = Ga(
        _,
        O.mode,
        q,
        ot
      ), C.return = O, C) : (C = i(C, _), C.return = O, C);
    }
    function G(O, C, _) {
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return C = Ec(
          "" + C,
          O.mode,
          _
        ), C.return = O, C;
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case h:
            return _ = Pi(
              C.type,
              C.key,
              C.props,
              null,
              O.mode,
              _
            ), hr(_, C), _.return = O, _;
          case p:
            return C = Ac(
              C,
              O.mode,
              _
            ), C.return = O, C;
          case J:
            var q = C._init;
            return C = q(C._payload), G(O, C, _);
        }
        if (it(C) || j(C))
          return C = Ga(
            C,
            O.mode,
            _,
            null
          ), C.return = O, C;
        if (typeof C.then == "function")
          return G(O, Ni(C), _);
        if (C.$$typeof === w)
          return G(
            O,
            Ji(O, C),
            _
          );
        Bi(O, C);
      }
      return null;
    }
    function D(O, C, _, q) {
      var ot = C !== null ? C.key : null;
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return ot !== null ? null : m(O, C, "" + _, q);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case h:
            return _.key === ot ? b(O, C, _, q) : null;
          case p:
            return _.key === ot ? E(O, C, _, q) : null;
          case J:
            return ot = _._init, _ = ot(_._payload), D(O, C, _, q);
        }
        if (it(_) || j(_))
          return ot !== null ? null : $(O, C, _, q, null);
        if (typeof _.then == "function")
          return D(
            O,
            C,
            Ni(_),
            q
          );
        if (_.$$typeof === w)
          return D(
            O,
            C,
            Ji(O, _),
            q
          );
        Bi(O, _);
      }
      return null;
    }
    function U(O, C, _, q, ot) {
      if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
        return O = O.get(_) || null, m(C, O, "" + q, ot);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case h:
            return O = O.get(
              q.key === null ? _ : q.key
            ) || null, b(C, O, q, ot);
          case p:
            return O = O.get(
              q.key === null ? _ : q.key
            ) || null, E(C, O, q, ot);
          case J:
            var bt = q._init;
            return q = bt(q._payload), U(
              O,
              C,
              _,
              q,
              ot
            );
        }
        if (it(q) || j(q))
          return O = O.get(_) || null, $(C, O, q, ot, null);
        if (typeof q.then == "function")
          return U(
            O,
            C,
            _,
            Ni(q),
            ot
          );
        if (q.$$typeof === w)
          return U(
            O,
            C,
            _,
            Ji(C, q),
            ot
          );
        Bi(C, q);
      }
      return null;
    }
    function ct(O, C, _, q) {
      for (var ot = null, bt = null, st = C, dt = C = 0, ce = null; st !== null && dt < _.length; dt++) {
        st.index > dt ? (ce = st, st = null) : ce = st.sibling;
        var Mt = D(
          O,
          st,
          _[dt],
          q
        );
        if (Mt === null) {
          st === null && (st = ce);
          break;
        }
        t && st && Mt.alternate === null && e(O, st), C = c(Mt, C, dt), bt === null ? ot = Mt : bt.sibling = Mt, bt = Mt, st = ce;
      }
      if (dt === _.length)
        return n(O, st), Ot && Na(O, dt), ot;
      if (st === null) {
        for (; dt < _.length; dt++)
          st = G(O, _[dt], q), st !== null && (C = c(
            st,
            C,
            dt
          ), bt === null ? ot = st : bt.sibling = st, bt = st);
        return Ot && Na(O, dt), ot;
      }
      for (st = l(st); dt < _.length; dt++)
        ce = U(
          st,
          O,
          dt,
          _[dt],
          q
        ), ce !== null && (t && ce.alternate !== null && st.delete(
          ce.key === null ? dt : ce.key
        ), C = c(
          ce,
          C,
          dt
        ), bt === null ? ot = ce : bt.sibling = ce, bt = ce);
      return t && st.forEach(function(Ca) {
        return e(O, Ca);
      }), Ot && Na(O, dt), ot;
    }
    function pt(O, C, _, q) {
      if (_ == null) throw Error(o(151));
      for (var ot = null, bt = null, st = C, dt = C = 0, ce = null, Mt = _.next(); st !== null && !Mt.done; dt++, Mt = _.next()) {
        st.index > dt ? (ce = st, st = null) : ce = st.sibling;
        var Ca = D(O, st, Mt.value, q);
        if (Ca === null) {
          st === null && (st = ce);
          break;
        }
        t && st && Ca.alternate === null && e(O, st), C = c(Ca, C, dt), bt === null ? ot = Ca : bt.sibling = Ca, bt = Ca, st = ce;
      }
      if (Mt.done)
        return n(O, st), Ot && Na(O, dt), ot;
      if (st === null) {
        for (; !Mt.done; dt++, Mt = _.next())
          Mt = G(O, Mt.value, q), Mt !== null && (C = c(Mt, C, dt), bt === null ? ot = Mt : bt.sibling = Mt, bt = Mt);
        return Ot && Na(O, dt), ot;
      }
      for (st = l(st); !Mt.done; dt++, Mt = _.next())
        Mt = U(st, O, dt, Mt.value, q), Mt !== null && (t && Mt.alternate !== null && st.delete(Mt.key === null ? dt : Mt.key), C = c(Mt, C, dt), bt === null ? ot = Mt : bt.sibling = Mt, bt = Mt);
      return t && st.forEach(function(nv) {
        return e(O, nv);
      }), Ot && Na(O, dt), ot;
    }
    function Zt(O, C, _, q) {
      if (typeof _ == "object" && _ !== null && _.type === v && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case h:
            t: {
              for (var ot = _.key; C !== null; ) {
                if (C.key === ot) {
                  if (ot = _.type, ot === v) {
                    if (C.tag === 7) {
                      n(
                        O,
                        C.sibling
                      ), q = i(
                        C,
                        _.props.children
                      ), q.return = O, O = q;
                      break t;
                    }
                  } else if (C.elementType === ot || typeof ot == "object" && ot !== null && ot.$$typeof === J && vd(ot) === C.type) {
                    n(
                      O,
                      C.sibling
                    ), q = i(C, _.props), hr(q, _), q.return = O, O = q;
                    break t;
                  }
                  n(O, C);
                  break;
                } else e(O, C);
                C = C.sibling;
              }
              _.type === v ? (q = Ga(
                _.props.children,
                O.mode,
                q,
                _.key
              ), q.return = O, O = q) : (q = Pi(
                _.type,
                _.key,
                _.props,
                null,
                O.mode,
                q
              ), hr(q, _), q.return = O, O = q);
            }
            return f(O);
          case p:
            t: {
              for (ot = _.key; C !== null; ) {
                if (C.key === ot)
                  if (C.tag === 4 && C.stateNode.containerInfo === _.containerInfo && C.stateNode.implementation === _.implementation) {
                    n(
                      O,
                      C.sibling
                    ), q = i(C, _.children || []), q.return = O, O = q;
                    break t;
                  } else {
                    n(O, C);
                    break;
                  }
                else e(O, C);
                C = C.sibling;
              }
              q = Ac(_, O.mode, q), q.return = O, O = q;
            }
            return f(O);
          case J:
            return ot = _._init, _ = ot(_._payload), Zt(
              O,
              C,
              _,
              q
            );
        }
        if (it(_))
          return ct(
            O,
            C,
            _,
            q
          );
        if (j(_)) {
          if (ot = j(_), typeof ot != "function") throw Error(o(150));
          return _ = ot.call(_), pt(
            O,
            C,
            _,
            q
          );
        }
        if (typeof _.then == "function")
          return Zt(
            O,
            C,
            Ni(_),
            q
          );
        if (_.$$typeof === w)
          return Zt(
            O,
            C,
            Ji(O, _),
            q
          );
        Bi(O, _);
      }
      return typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint" ? (_ = "" + _, C !== null && C.tag === 6 ? (n(O, C.sibling), q = i(C, _), q.return = O, O = q) : (n(O, C), q = Ec(_, O.mode, q), q.return = O, O = q), f(O)) : n(O, C);
    }
    return function(O, C, _, q) {
      try {
        dr = 0;
        var ot = Zt(
          O,
          C,
          _,
          q
        );
        return yl = null, ot;
      } catch (st) {
        if (st === sr) throw st;
        var bt = Fe(29, st, null, O.mode);
        return bt.lanes = q, bt.return = O, bt;
      } finally {
      }
    };
  }
  var Ua = bd(!0), Sd = bd(!1), gl = Ct(null), Ui = Ct(0);
  function Td(t, e) {
    t = Qn, Nt(Ui, t), Nt(gl, e), Qn = t | e.baseLanes;
  }
  function zo() {
    Nt(Ui, Qn), Nt(gl, gl.current);
  }
  function Do() {
    Qn = Ui.current, Lt(gl), Lt(Ui);
  }
  var Ze = Ct(null), Sn = null;
  function la(t) {
    var e = t.alternate;
    Nt(le, le.current & 1), Nt(Ze, t), Sn === null && (e === null || gl.current !== null || e.memoizedState !== null) && (Sn = t);
  }
  function Cd(t) {
    if (t.tag === 22) {
      if (Nt(le, le.current), Nt(Ze, t), Sn === null) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Sn = t);
      }
    } else ra();
  }
  function ra() {
    Nt(le, le.current), Nt(Ze, Ze.current);
  }
  function Hn(t) {
    Lt(Ze), Sn === t && (Sn = null), Lt(le);
  }
  var le = Ct(0);
  function Hi(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if (e.flags & 128) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Vy = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(n, l) {
        t.push(l);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(n) {
        return n();
      });
    };
  }, Gy = a.unstable_scheduleCallback, Xy = a.unstable_NormalPriority, re = {
    $$typeof: w,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function wo() {
    return {
      controller: new Vy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function mr(t) {
    t.refCount--, t.refCount === 0 && Gy(Xy, function() {
      t.controller.abort();
    });
  }
  var pr = null, No = 0, vl = 0, bl = null;
  function Qy(t, e) {
    if (pr === null) {
      var n = pr = [];
      No = 0, vl = kc(), bl = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return No++, e.then(Ed, Ed), e;
  }
  function Ed() {
    if (--No === 0 && pr !== null) {
      bl !== null && (bl.status = "fulfilled");
      var t = pr;
      pr = null, vl = 0, bl = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Ky(t, e) {
    var n = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(i) {
        n.push(i);
      }
    };
    return t.then(
      function() {
        l.status = "fulfilled", l.value = e;
        for (var i = 0; i < n.length; i++) (0, n[i])(e);
      },
      function(i) {
        for (l.status = "rejected", l.reason = i, i = 0; i < n.length; i++)
          (0, n[i])(void 0);
      }
    ), l;
  }
  var Ad = L.S;
  L.S = function(t, e) {
    typeof e == "object" && e !== null && typeof e.then == "function" && Qy(t, e), Ad !== null && Ad(t, e);
  };
  var Ha = Ct(null);
  function Bo() {
    var t = Ha.current;
    return t !== null ? t : jt.pooledCache;
  }
  function $i(t, e) {
    e === null ? Nt(Ha, Ha.current) : Nt(Ha, e.pool);
  }
  function xd() {
    var t = Bo();
    return t === null ? null : { parent: re._currentValue, pool: t };
  }
  var ia = 0, vt = null, Bt = null, It = null, ji = !1, Sl = !1, $a = !1, ki = 0, yr = 0, Tl = null, Zy = 0;
  function Ft() {
    throw Error(o(321));
  }
  function Uo(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Ne(t[n], e[n])) return !1;
    return !0;
  }
  function Ho(t, e, n, l, i, c) {
    return ia = c, vt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, L.H = t === null || t.memoizedState === null ? ja : ua, $a = !1, c = n(l, i), $a = !1, Sl && (c = Md(
      e,
      n,
      l,
      i
    )), Od(t), c;
  }
  function Od(t) {
    L.H = Tn;
    var e = Bt !== null && Bt.next !== null;
    if (ia = 0, It = Bt = vt = null, ji = !1, yr = 0, Tl = null, e) throw Error(o(300));
    t === null || ue || (t = t.dependencies, t !== null && Zi(t) && (ue = !0));
  }
  function Md(t, e, n, l) {
    vt = t;
    var i = 0;
    do {
      if (Sl && (Tl = null), yr = 0, Sl = !1, 25 <= i) throw Error(o(301));
      if (i += 1, It = Bt = null, t.updateQueue != null) {
        var c = t.updateQueue;
        c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
      }
      L.H = ka, c = e(n, l);
    } while (Sl);
    return c;
  }
  function Jy() {
    var t = L.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? gr(e) : e, t = t.useState()[0], (Bt !== null ? Bt.memoizedState : null) !== t && (vt.flags |= 1024), e;
  }
  function $o() {
    var t = ki !== 0;
    return ki = 0, t;
  }
  function jo(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function ko(t) {
    if (ji) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      ji = !1;
    }
    ia = 0, It = Bt = vt = null, Sl = !1, yr = ki = 0, Tl = null;
  }
  function Me() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return It === null ? vt.memoizedState = It = t : It = It.next = t, It;
  }
  function te() {
    if (Bt === null) {
      var t = vt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Bt.next;
    var e = It === null ? vt.memoizedState : It.next;
    if (e !== null)
      It = e, Bt = t;
    else {
      if (t === null)
        throw vt.alternate === null ? Error(o(467)) : Error(o(310));
      Bt = t, t = {
        memoizedState: Bt.memoizedState,
        baseState: Bt.baseState,
        baseQueue: Bt.baseQueue,
        queue: Bt.queue,
        next: null
      }, It === null ? vt.memoizedState = It = t : It = It.next = t;
    }
    return It;
  }
  var Li;
  Li = function() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function gr(t) {
    var e = yr;
    return yr += 1, Tl === null && (Tl = []), t = yd(Tl, t, e), e = vt, (It === null ? e.memoizedState : It.next) === null && (e = e.alternate, L.H = e === null || e.memoizedState === null ? ja : ua), t;
  }
  function qi(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return gr(t);
      if (t.$$typeof === w) return ge(t);
    }
    throw Error(o(438, String(t)));
  }
  function Lo(t) {
    var e = null, n = vt.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var l = vt.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = {
        data: l.data.map(function(i) {
          return i.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = Li(), vt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), l = 0; l < t; l++)
        n[l] = V;
    return e.index++, n;
  }
  function $n(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Yi(t) {
    var e = te();
    return qo(e, Bt, t);
  }
  function qo(t, e, n) {
    var l = t.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = n;
    var i = t.baseQueue, c = l.pending;
    if (c !== null) {
      if (i !== null) {
        var f = i.next;
        i.next = c.next, c.next = f;
      }
      e.baseQueue = i = c, l.pending = null;
    }
    if (c = t.baseState, i === null) t.memoizedState = c;
    else {
      e = i.next;
      var m = f = null, b = null, E = e, $ = !1;
      do {
        var G = E.lane & -536870913;
        if (G !== E.lane ? (At & G) === G : (ia & G) === G) {
          var D = E.revertLane;
          if (D === 0)
            b !== null && (b = b.next = {
              lane: 0,
              revertLane: 0,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }), G === vl && ($ = !0);
          else if ((ia & D) === D) {
            E = E.next, D === vl && ($ = !0);
            continue;
          } else
            G = {
              lane: 0,
              revertLane: E.revertLane,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }, b === null ? (m = b = G, f = c) : b = b.next = G, vt.lanes |= D, ya |= D;
          G = E.action, $a && n(c, G), c = E.hasEagerState ? E.eagerState : n(c, G);
        } else
          D = {
            lane: G,
            revertLane: E.revertLane,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null
          }, b === null ? (m = b = D, f = c) : b = b.next = D, vt.lanes |= G, ya |= G;
        E = E.next;
      } while (E !== null && E !== e);
      if (b === null ? f = c : b.next = m, !Ne(c, t.memoizedState) && (ue = !0, $ && (n = bl, n !== null)))
        throw n;
      t.memoizedState = c, t.baseState = f, t.baseQueue = b, l.lastRenderedState = c;
    }
    return i === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function Yo(t) {
    var e = te(), n = e.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = t;
    var l = n.dispatch, i = n.pending, c = e.memoizedState;
    if (i !== null) {
      n.pending = null;
      var f = i = i.next;
      do
        c = t(c, f.action), f = f.next;
      while (f !== i);
      Ne(c, e.memoizedState) || (ue = !0), e.memoizedState = c, e.baseQueue === null && (e.baseState = c), n.lastRenderedState = c;
    }
    return [c, l];
  }
  function Rd(t, e, n) {
    var l = vt, i = te(), c = Ot;
    if (c) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = e();
    var f = !Ne(
      (Bt || i).memoizedState,
      n
    );
    if (f && (i.memoizedState = n, ue = !0), i = i.queue, Xo(Dd.bind(null, l, i, t), [
      t
    ]), i.getSnapshot !== e || f || It !== null && It.memoizedState.tag & 1) {
      if (l.flags |= 2048, Cl(
        9,
        zd.bind(
          null,
          l,
          i,
          n,
          e
        ),
        { destroy: void 0 },
        null
      ), jt === null) throw Error(o(349));
      c || ia & 60 || _d(l, e, n);
    }
    return n;
  }
  function _d(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = vt.updateQueue, e === null ? (e = Li(), vt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function zd(t, e, n, l) {
    e.value = n, e.getSnapshot = l, wd(e) && Nd(t);
  }
  function Dd(t, e, n) {
    return n(function() {
      wd(e) && Nd(t);
    });
  }
  function wd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Ne(t, n);
    } catch {
      return !0;
    }
  }
  function Nd(t) {
    var e = aa(t, 2);
    e !== null && Ce(e, t, 2);
  }
  function Vo(t) {
    var e = Me();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), $a) {
        ta(!0);
        try {
          n();
        } finally {
          ta(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $n,
      lastRenderedState: t
    }, e;
  }
  function Bd(t, e, n, l) {
    return t.baseState = n, qo(
      t,
      Bt,
      typeof l == "function" ? l : $n
    );
  }
  function Wy(t, e, n, l, i) {
    if (Xi(t)) throw Error(o(485));
    if (t = e.action, t !== null) {
      var c = {
        payload: i,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          c.listeners.push(f);
        }
      };
      L.T !== null ? n(!0) : c.isTransition = !1, l(c), n = e.pending, n === null ? (c.next = e.pending = c, Ud(e, c)) : (c.next = n.next, e.pending = n.next = c);
    }
  }
  function Ud(t, e) {
    var n = e.action, l = e.payload, i = t.state;
    if (e.isTransition) {
      var c = L.T, f = {};
      L.T = f;
      try {
        var m = n(i, l), b = L.S;
        b !== null && b(f, m), Hd(t, e, m);
      } catch (E) {
        Go(t, e, E);
      } finally {
        L.T = c;
      }
    } else
      try {
        c = n(i, l), Hd(t, e, c);
      } catch (E) {
        Go(t, e, E);
      }
  }
  function Hd(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        $d(t, e, l);
      },
      function(l) {
        return Go(t, e, l);
      }
    ) : $d(t, e, n);
  }
  function $d(t, e, n) {
    e.status = "fulfilled", e.value = n, jd(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, Ud(t, n)));
  }
  function Go(t, e, n) {
    var l = t.pending;
    if (t.pending = null, l !== null) {
      l = l.next;
      do
        e.status = "rejected", e.reason = n, jd(e), e = e.next;
      while (e !== l);
    }
    t.action = null;
  }
  function jd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function kd(t, e) {
    return e;
  }
  function Ld(t, e) {
    if (Ot) {
      var n = jt.formState;
      if (n !== null) {
        t: {
          var l = vt;
          if (Ot) {
            if (de) {
              e: {
                for (var i = de, c = bn; i.nodeType !== 8; ) {
                  if (!c) {
                    i = null;
                    break e;
                  }
                  if (i = dn(
                    i.nextSibling
                  ), i === null) {
                    i = null;
                    break e;
                  }
                }
                c = i.data, i = c === "F!" || c === "F" ? i : null;
              }
              if (i) {
                de = dn(
                  i.nextSibling
                ), l = i.data === "F!";
                break t;
              }
            }
            Ba(l);
          }
          l = !1;
        }
        l && (e = n[0]);
      }
    }
    return n = Me(), n.memoizedState = n.baseState = e, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: kd,
      lastRenderedState: e
    }, n.queue = l, n = lh.bind(
      null,
      vt,
      l
    ), l.dispatch = n, l = Vo(!1), c = Wo.bind(
      null,
      vt,
      !1,
      l.queue
    ), l = Me(), i = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, l.queue = i, n = Wy.bind(
      null,
      vt,
      i,
      c,
      n
    ), i.dispatch = n, l.memoizedState = t, [e, n, !1];
  }
  function qd(t) {
    var e = te();
    return Yd(e, Bt, t);
  }
  function Yd(t, e, n) {
    e = qo(
      t,
      e,
      kd
    )[0], t = Yi($n)[0], e = typeof e == "object" && e !== null && typeof e.then == "function" ? gr(e) : e;
    var l = te(), i = l.queue, c = i.dispatch;
    return n !== l.memoizedState && (vt.flags |= 2048, Cl(
      9,
      Fy.bind(null, i, n),
      { destroy: void 0 },
      null
    )), [e, c, t];
  }
  function Fy(t, e) {
    t.action = e;
  }
  function Vd(t) {
    var e = te(), n = Bt;
    if (n !== null)
      return Yd(e, n, t);
    te(), e = e.memoizedState, n = te();
    var l = n.queue.dispatch;
    return n.memoizedState = t, [e, l, !1];
  }
  function Cl(t, e, n, l) {
    return t = { tag: t, create: e, inst: n, deps: l, next: null }, e = vt.updateQueue, e === null && (e = Li(), vt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (l = n.next, n.next = t, t.next = l, e.lastEffect = t), t;
  }
  function Gd() {
    return te().memoizedState;
  }
  function Vi(t, e, n, l) {
    var i = Me();
    vt.flags |= t, i.memoizedState = Cl(
      1 | e,
      n,
      { destroy: void 0 },
      l === void 0 ? null : l
    );
  }
  function Gi(t, e, n, l) {
    var i = te();
    l = l === void 0 ? null : l;
    var c = i.memoizedState.inst;
    Bt !== null && l !== null && Uo(l, Bt.memoizedState.deps) ? i.memoizedState = Cl(e, n, c, l) : (vt.flags |= t, i.memoizedState = Cl(1 | e, n, c, l));
  }
  function Xd(t, e) {
    Vi(8390656, 8, t, e);
  }
  function Xo(t, e) {
    Gi(2048, 8, t, e);
  }
  function Qd(t, e) {
    return Gi(4, 2, t, e);
  }
  function Kd(t, e) {
    return Gi(4, 4, t, e);
  }
  function Zd(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function() {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function Jd(t, e, n) {
    n = n != null ? n.concat([t]) : null, Gi(4, 4, Zd.bind(null, e, t), n);
  }
  function Qo() {
  }
  function Wd(t, e) {
    var n = te();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && Uo(e, l[1]) ? l[0] : (n.memoizedState = [t, e], t);
  }
  function Fd(t, e) {
    var n = te();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    if (e !== null && Uo(e, l[1]))
      return l[0];
    if (l = t(), $a) {
      ta(!0);
      try {
        t();
      } finally {
        ta(!1);
      }
    }
    return n.memoizedState = [l, e], l;
  }
  function Ko(t, e, n) {
    return n === void 0 || ia & 1073741824 ? t.memoizedState = e : (t.memoizedState = n, t = Ih(), vt.lanes |= t, ya |= t, n);
  }
  function Pd(t, e, n, l) {
    return Ne(n, e) ? n : gl.current !== null ? (t = Ko(t, n, l), Ne(t, e) || (ue = !0), t) : ia & 42 ? (t = Ih(), vt.lanes |= t, ya |= t, e) : (ue = !0, t.memoizedState = n);
  }
  function Id(t, e, n, l, i) {
    var c = I.p;
    I.p = c !== 0 && 8 > c ? c : 8;
    var f = L.T, m = {};
    L.T = m, Wo(t, !1, e, n);
    try {
      var b = i(), E = L.S;
      if (E !== null && E(m, b), b !== null && typeof b == "object" && typeof b.then == "function") {
        var $ = Ky(
          b,
          l
        );
        vr(
          t,
          e,
          $,
          $e(t)
        );
      } else
        vr(
          t,
          e,
          l,
          $e(t)
        );
    } catch (G) {
      vr(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: G },
        $e()
      );
    } finally {
      I.p = c, L.T = f;
    }
  }
  function Py() {
  }
  function Zo(t, e, n, l) {
    if (t.tag !== 5) throw Error(o(476));
    var i = th(t).queue;
    Id(
      t,
      i,
      e,
      yt,
      n === null ? Py : function() {
        return eh(t), n(l);
      }
    );
  }
  function th(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: yt,
      baseState: yt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $n,
        lastRenderedState: yt
      },
      next: null
    };
    var n = {};
    return e.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $n,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function eh(t) {
    var e = th(t).next.queue;
    vr(t, e, {}, $e());
  }
  function Jo() {
    return ge(jr);
  }
  function nh() {
    return te().memoizedState;
  }
  function ah() {
    return te().memoizedState;
  }
  function Iy(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = $e();
          t = sa(n);
          var l = fa(e, t, n);
          l !== null && (Ce(l, e, n), Tr(l, e, n)), e = { cache: wo() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function tg(t, e, n) {
    var l = $e();
    n = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Xi(t) ? rh(e, n) : (n = xo(t, e, n, l), n !== null && (Ce(n, t, l), ih(n, e, l)));
  }
  function lh(t, e, n) {
    var l = $e();
    vr(t, e, n, l);
  }
  function vr(t, e, n, l) {
    var i = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Xi(t)) rh(e, i);
    else {
      var c = t.alternate;
      if (t.lanes === 0 && (c === null || c.lanes === 0) && (c = e.lastRenderedReducer, c !== null))
        try {
          var f = e.lastRenderedState, m = c(f, n);
          if (i.hasEagerState = !0, i.eagerState = m, Ne(m, f))
            return Ri(t, e, i, 0), jt === null && Mi(), !1;
        } catch {
        } finally {
        }
      if (n = xo(t, e, i, l), n !== null)
        return Ce(n, t, l), ih(n, e, l), !0;
    }
    return !1;
  }
  function Wo(t, e, n, l) {
    if (l = {
      lane: 2,
      revertLane: kc(),
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Xi(t)) {
      if (e) throw Error(o(479));
    } else
      e = xo(
        t,
        n,
        l,
        2
      ), e !== null && Ce(e, t, 2);
  }
  function Xi(t) {
    var e = t.alternate;
    return t === vt || e !== null && e === vt;
  }
  function rh(t, e) {
    Sl = ji = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function ih(t, e, n) {
    if (n & 4194176) {
      var l = e.lanes;
      l &= t.pendingLanes, n |= l, e.lanes = n, gf(t, n);
    }
  }
  var Tn = {
    readContext: ge,
    use: qi,
    useCallback: Ft,
    useContext: Ft,
    useEffect: Ft,
    useImperativeHandle: Ft,
    useLayoutEffect: Ft,
    useInsertionEffect: Ft,
    useMemo: Ft,
    useReducer: Ft,
    useRef: Ft,
    useState: Ft,
    useDebugValue: Ft,
    useDeferredValue: Ft,
    useTransition: Ft,
    useSyncExternalStore: Ft,
    useId: Ft
  };
  Tn.useCacheRefresh = Ft, Tn.useMemoCache = Ft, Tn.useHostTransitionStatus = Ft, Tn.useFormState = Ft, Tn.useActionState = Ft, Tn.useOptimistic = Ft;
  var ja = {
    readContext: ge,
    use: qi,
    useCallback: function(t, e) {
      return Me().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: ge,
    useEffect: Xd,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, Vi(
        4194308,
        4,
        Zd.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return Vi(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Vi(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = Me();
      e = e === void 0 ? null : e;
      var l = t();
      if ($a) {
        ta(!0);
        try {
          t();
        } finally {
          ta(!1);
        }
      }
      return n.memoizedState = [l, e], l;
    },
    useReducer: function(t, e, n) {
      var l = Me();
      if (n !== void 0) {
        var i = n(e);
        if ($a) {
          ta(!0);
          try {
            n(e);
          } finally {
            ta(!1);
          }
        }
      } else i = e;
      return l.memoizedState = l.baseState = i, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: i
      }, l.queue = t, t = t.dispatch = tg.bind(
        null,
        vt,
        t
      ), [l.memoizedState, t];
    },
    useRef: function(t) {
      var e = Me();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Vo(t);
      var e = t.queue, n = lh.bind(null, vt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: Qo,
    useDeferredValue: function(t, e) {
      var n = Me();
      return Ko(n, t, e);
    },
    useTransition: function() {
      var t = Vo(!1);
      return t = Id.bind(
        null,
        vt,
        t.queue,
        !0,
        !1
      ), Me().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var l = vt, i = Me();
      if (Ot) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else {
        if (n = e(), jt === null) throw Error(o(349));
        At & 60 || _d(l, e, n);
      }
      i.memoizedState = n;
      var c = { value: n, getSnapshot: e };
      return i.queue = c, Xd(Dd.bind(null, l, c, t), [
        t
      ]), l.flags |= 2048, Cl(
        9,
        zd.bind(
          null,
          l,
          c,
          n,
          e
        ),
        { destroy: void 0 },
        null
      ), n;
    },
    useId: function() {
      var t = Me(), e = jt.identifierPrefix;
      if (Ot) {
        var n = Un, l = Bn;
        n = (l & ~(1 << 32 - we(l) - 1)).toString(32) + n, e = ":" + e + "R" + n, n = ki++, 0 < n && (e += "H" + n.toString(32)), e += ":";
      } else
        n = Zy++, e = ":" + e + "r" + n.toString(32) + ":";
      return t.memoizedState = e;
    },
    useCacheRefresh: function() {
      return Me().memoizedState = Iy.bind(
        null,
        vt
      );
    }
  };
  ja.useMemoCache = Lo, ja.useHostTransitionStatus = Jo, ja.useFormState = Ld, ja.useActionState = Ld, ja.useOptimistic = function(t) {
    var e = Me();
    e.memoizedState = e.baseState = t;
    var n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: null,
      lastRenderedState: null
    };
    return e.queue = n, e = Wo.bind(
      null,
      vt,
      !0,
      n
    ), n.dispatch = e, [t, e];
  };
  var ua = {
    readContext: ge,
    use: qi,
    useCallback: Wd,
    useContext: ge,
    useEffect: Xo,
    useImperativeHandle: Jd,
    useInsertionEffect: Qd,
    useLayoutEffect: Kd,
    useMemo: Fd,
    useReducer: Yi,
    useRef: Gd,
    useState: function() {
      return Yi($n);
    },
    useDebugValue: Qo,
    useDeferredValue: function(t, e) {
      var n = te();
      return Pd(
        n,
        Bt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Yi($n)[0], e = te().memoizedState;
      return [
        typeof t == "boolean" ? t : gr(t),
        e
      ];
    },
    useSyncExternalStore: Rd,
    useId: nh
  };
  ua.useCacheRefresh = ah, ua.useMemoCache = Lo, ua.useHostTransitionStatus = Jo, ua.useFormState = qd, ua.useActionState = qd, ua.useOptimistic = function(t, e) {
    var n = te();
    return Bd(n, Bt, t, e);
  };
  var ka = {
    readContext: ge,
    use: qi,
    useCallback: Wd,
    useContext: ge,
    useEffect: Xo,
    useImperativeHandle: Jd,
    useInsertionEffect: Qd,
    useLayoutEffect: Kd,
    useMemo: Fd,
    useReducer: Yo,
    useRef: Gd,
    useState: function() {
      return Yo($n);
    },
    useDebugValue: Qo,
    useDeferredValue: function(t, e) {
      var n = te();
      return Bt === null ? Ko(n, t, e) : Pd(
        n,
        Bt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Yo($n)[0], e = te().memoizedState;
      return [
        typeof t == "boolean" ? t : gr(t),
        e
      ];
    },
    useSyncExternalStore: Rd,
    useId: nh
  };
  ka.useCacheRefresh = ah, ka.useMemoCache = Lo, ka.useHostTransitionStatus = Jo, ka.useFormState = Vd, ka.useActionState = Vd, ka.useOptimistic = function(t, e) {
    var n = te();
    return Bt !== null ? Bd(n, Bt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
  };
  function Fo(t, e, n, l) {
    e = t.memoizedState, n = n(l, e), n = n == null ? e : Q({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Po = {
    isMounted: function(t) {
      return (t = t._reactInternals) ? et(t) === t : !1;
    },
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var l = $e(), i = sa(l);
      i.payload = e, n != null && (i.callback = n), e = fa(t, i, l), e !== null && (Ce(e, t, l), Tr(e, t, l));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var l = $e(), i = sa(l);
      i.tag = 1, i.payload = e, n != null && (i.callback = n), e = fa(t, i, l), e !== null && (Ce(e, t, l), Tr(e, t, l));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = $e(), l = sa(n);
      l.tag = 2, e != null && (l.callback = e), e = fa(t, l, n), e !== null && (Ce(e, t, n), Tr(e, t, n));
    }
  };
  function uh(t, e, n, l, i, c, f) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, c, f) : e.prototype && e.prototype.isPureReactComponent ? !rr(n, l) || !rr(i, c) : !0;
  }
  function oh(t, e, n, l) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, l), e.state !== t && Po.enqueueReplaceState(e, e.state, null);
  }
  function La(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var l in e)
        l !== "ref" && (n[l] = e[l]);
    }
    if (t = t.defaultProps) {
      n === e && (n = Q({}, n));
      for (var i in t)
        n[i] === void 0 && (n[i] = t[i]);
    }
    return n;
  }
  var Qi = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function ch(t) {
    Qi(t);
  }
  function sh(t) {
    console.error(t);
  }
  function fh(t) {
    Qi(t);
  }
  function Ki(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function dh(t, e, n) {
    try {
      var l = t.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function Io(t, e, n) {
    return n = sa(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Ki(t, e);
    }, n;
  }
  function hh(t) {
    return t = sa(t), t.tag = 3, t;
  }
  function mh(t, e, n, l) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var c = l.value;
      t.payload = function() {
        return i(c);
      }, t.callback = function() {
        dh(e, n, l);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
      dh(e, n, l), typeof i != "function" && (ga === null ? ga = /* @__PURE__ */ new Set([this]) : ga.add(this));
      var m = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function eg(t, e, n, l, i) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (e = n.alternate, e !== null && Sr(
        e,
        n,
        i,
        !0
      ), n = Ze.current, n !== null) {
        switch (n.tag) {
          case 13:
            return Sn === null ? Bc() : n.alternate === null && Kt === 0 && (Kt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, l === _o ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : e.add(l), Hc(t, l, i)), !1;
          case 22:
            return n.flags |= 65536, l === _o ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), Hc(t, l, i)), !1;
        }
        throw Error(o(435, n.tag));
      }
      return Hc(t, l, i), Bc(), !1;
    }
    if (Ot)
      return e = Ze.current, e !== null ? (!(e.flags & 65536) && (e.flags |= 256), e.flags |= 65536, e.lanes = i, l !== Ro && (t = Error(o(422), { cause: l }), cr(Xe(t, n)))) : (l !== Ro && (e = Error(o(423), {
        cause: l
      }), cr(
        Xe(e, n)
      )), t = t.current.alternate, t.flags |= 65536, i &= -i, t.lanes |= i, l = Xe(l, n), i = Io(
        t.stateNode,
        l,
        i
      ), mc(t, i), Kt !== 4 && (Kt = 2)), !1;
    var c = Error(o(520), { cause: l });
    if (c = Xe(c, n), _r === null ? _r = [c] : _r.push(c), Kt !== 4 && (Kt = 2), e === null) return !0;
    l = Xe(l, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = i & -i, n.lanes |= t, t = Io(n.stateNode, l, t), mc(n, t), !1;
        case 1:
          if (e = n.type, c = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (ga === null || !ga.has(c))))
            return n.flags |= 65536, i &= -i, n.lanes |= i, i = hh(i), mh(
              i,
              t,
              n,
              l
            ), mc(n, i), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var ph = Error(o(461)), ue = !1;
  function he(t, e, n, l) {
    e.child = t === null ? Sd(e, null, n, l) : Ua(
      e,
      t.child,
      n,
      l
    );
  }
  function yh(t, e, n, l, i) {
    n = n.render;
    var c = e.ref;
    if ("ref" in l) {
      var f = {};
      for (var m in l)
        m !== "ref" && (f[m] = l[m]);
    } else f = l;
    return Ya(e), l = Ho(
      t,
      e,
      n,
      f,
      c,
      i
    ), m = $o(), t !== null && !ue ? (jo(t, e, i), jn(t, e, i)) : (Ot && m && Oo(e), e.flags |= 1, he(t, e, l, i), e.child);
  }
  function gh(t, e, n, l, i) {
    if (t === null) {
      var c = n.type;
      return typeof c == "function" && !Cc(c) && c.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = c, vh(
        t,
        e,
        c,
        l,
        i
      )) : (t = Pi(
        n.type,
        null,
        l,
        e,
        e.mode,
        i
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (c = t.child, !oc(t, i)) {
      var f = c.memoizedProps;
      if (n = n.compare, n = n !== null ? n : rr, n(f, l) && t.ref === e.ref)
        return jn(t, e, i);
    }
    return e.flags |= 1, t = pa(c, l), t.ref = e.ref, t.return = e, e.child = t;
  }
  function vh(t, e, n, l, i) {
    if (t !== null) {
      var c = t.memoizedProps;
      if (rr(c, l) && t.ref === e.ref)
        if (ue = !1, e.pendingProps = l = c, oc(t, i))
          t.flags & 131072 && (ue = !0);
        else
          return e.lanes = t.lanes, jn(t, e, i);
    }
    return tc(
      t,
      e,
      n,
      l,
      i
    );
  }
  function bh(t, e, n) {
    var l = e.pendingProps, i = l.children, c = (e.stateNode._pendingVisibility & 2) !== 0, f = t !== null ? t.memoizedState : null;
    if (br(t, e), l.mode === "hidden" || c) {
      if (e.flags & 128) {
        if (l = f !== null ? f.baseLanes | n : n, t !== null) {
          for (i = e.child = t.child, c = 0; i !== null; )
            c = c | i.lanes | i.childLanes, i = i.sibling;
          e.childLanes = c & ~l;
        } else e.childLanes = 0, e.child = null;
        return Sh(
          t,
          e,
          l,
          n
        );
      }
      if (n & 536870912)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && $i(
          e,
          f !== null ? f.cachePool : null
        ), f !== null ? Td(e, f) : zo(), Cd(e);
      else
        return e.lanes = e.childLanes = 536870912, Sh(
          t,
          e,
          f !== null ? f.baseLanes | n : n,
          n
        );
    } else
      f !== null ? ($i(e, f.cachePool), Td(e, f), ra(), e.memoizedState = null) : (t !== null && $i(e, null), zo(), ra());
    return he(t, e, i, n), e.child;
  }
  function Sh(t, e, n, l) {
    var i = Bo();
    return i = i === null ? null : { parent: re._currentValue, pool: i }, e.memoizedState = {
      baseLanes: n,
      cachePool: i
    }, t !== null && $i(e, null), zo(), Cd(e), t !== null && Sr(t, e, l, !0), null;
  }
  function br(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 2097664);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(o(284));
      (t === null || t.ref !== n) && (e.flags |= 2097664);
    }
  }
  function tc(t, e, n, l, i) {
    return Ya(e), n = Ho(
      t,
      e,
      n,
      l,
      void 0,
      i
    ), l = $o(), t !== null && !ue ? (jo(t, e, i), jn(t, e, i)) : (Ot && l && Oo(e), e.flags |= 1, he(t, e, n, i), e.child);
  }
  function Th(t, e, n, l, i, c) {
    return Ya(e), e.updateQueue = null, n = Md(
      e,
      l,
      n,
      i
    ), Od(t), l = $o(), t !== null && !ue ? (jo(t, e, c), jn(t, e, c)) : (Ot && l && Oo(e), e.flags |= 1, he(t, e, n, c), e.child);
  }
  function Ch(t, e, n, l, i) {
    if (Ya(e), e.stateNode === null) {
      var c = hl, f = n.contextType;
      typeof f == "object" && f !== null && (c = ge(f)), c = new n(l, c), e.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Po, e.stateNode = c, c._reactInternals = e, c = e.stateNode, c.props = l, c.state = e.memoizedState, c.refs = {}, dc(e), f = n.contextType, c.context = typeof f == "object" && f !== null ? ge(f) : hl, c.state = e.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (Fo(
        e,
        n,
        f,
        l
      ), c.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (f = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), f !== c.state && Po.enqueueReplaceState(c, c.state, null), Er(e, l, c, i), Cr(), c.state = e.memoizedState), typeof c.componentDidMount == "function" && (e.flags |= 4194308), l = !0;
    } else if (t === null) {
      c = e.stateNode;
      var m = e.memoizedProps, b = La(n, m);
      c.props = b;
      var E = c.context, $ = n.contextType;
      f = hl, typeof $ == "object" && $ !== null && (f = ge($));
      var G = n.getDerivedStateFromProps;
      $ = typeof G == "function" || typeof c.getSnapshotBeforeUpdate == "function", m = e.pendingProps !== m, $ || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (m || E !== f) && oh(
        e,
        c,
        l,
        f
      ), ca = !1;
      var D = e.memoizedState;
      c.state = D, Er(e, l, c, i), Cr(), E = e.memoizedState, m || D !== E || ca ? (typeof G == "function" && (Fo(
        e,
        n,
        G,
        l
      ), E = e.memoizedState), (b = ca || uh(
        e,
        n,
        b,
        l,
        D,
        E,
        f
      )) ? ($ || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = E), c.props = l, c.state = E, c.context = f, l = b) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308), l = !1);
    } else {
      c = e.stateNode, hc(t, e), f = e.memoizedProps, $ = La(n, f), c.props = $, G = e.pendingProps, D = c.context, E = n.contextType, b = hl, typeof E == "object" && E !== null && (b = ge(E)), m = n.getDerivedStateFromProps, (E = typeof m == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (f !== G || D !== b) && oh(
        e,
        c,
        l,
        b
      ), ca = !1, D = e.memoizedState, c.state = D, Er(e, l, c, i), Cr();
      var U = e.memoizedState;
      f !== G || D !== U || ca || t !== null && t.dependencies !== null && Zi(t.dependencies) ? (typeof m == "function" && (Fo(
        e,
        n,
        m,
        l
      ), U = e.memoizedState), ($ = ca || uh(
        e,
        n,
        $,
        l,
        D,
        U,
        b
      ) || t !== null && t.dependencies !== null && Zi(t.dependencies)) ? (E || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(l, U, b), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(
        l,
        U,
        b
      )), typeof c.componentDidUpdate == "function" && (e.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || f === t.memoizedProps && D === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && D === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = U), c.props = l, c.state = U, c.context = b, l = $) : (typeof c.componentDidUpdate != "function" || f === t.memoizedProps && D === t.memoizedState || (e.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && D === t.memoizedState || (e.flags |= 1024), l = !1);
    }
    return c = l, br(t, e), l = (e.flags & 128) !== 0, c || l ? (c = e.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : c.render(), e.flags |= 1, t !== null && l ? (e.child = Ua(
      e,
      t.child,
      null,
      i
    ), e.child = Ua(
      e,
      null,
      n,
      i
    )) : he(t, e, n, i), e.memoizedState = c.state, t = e.child) : t = jn(
      t,
      e,
      i
    ), t;
  }
  function Eh(t, e, n, l) {
    return or(), e.flags |= 256, he(t, e, n, l), e.child;
  }
  var ec = { dehydrated: null, treeContext: null, retryLane: 0 };
  function nc(t) {
    return { baseLanes: t, cachePool: xd() };
  }
  function ac(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Pe), t;
  }
  function Ah(t, e, n) {
    var l = e.pendingProps, i = !1, c = (e.flags & 128) !== 0, f;
    if ((f = c) || (f = t !== null && t.memoizedState === null ? !1 : (le.current & 2) !== 0), f && (i = !0, e.flags &= -129), f = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Ot) {
        if (i ? la(e) : ra(), Ot) {
          var m = de, b;
          if (b = m) {
            t: {
              for (b = m, m = bn; b.nodeType !== 8; ) {
                if (!m) {
                  m = null;
                  break t;
                }
                if (b = dn(
                  b.nextSibling
                ), b === null) {
                  m = null;
                  break t;
                }
              }
              m = b;
            }
            m !== null ? (e.memoizedState = {
              dehydrated: m,
              treeContext: wa !== null ? { id: Bn, overflow: Un } : null,
              retryLane: 536870912
            }, b = Fe(
              18,
              null,
              null,
              0
            ), b.stateNode = m, b.return = e, e.child = b, Te = e, de = null, b = !0) : b = !1;
          }
          b || Ba(e);
        }
        if (m = e.memoizedState, m !== null && (m = m.dehydrated, m !== null))
          return m.data === "$!" ? e.lanes = 16 : e.lanes = 536870912, null;
        Hn(e);
      }
      return m = l.children, l = l.fallback, i ? (ra(), i = e.mode, m = rc(
        { mode: "hidden", children: m },
        i
      ), l = Ga(
        l,
        i,
        n,
        null
      ), m.return = e, l.return = e, m.sibling = l, e.child = m, i = e.child, i.memoizedState = nc(n), i.childLanes = ac(
        t,
        f,
        n
      ), e.memoizedState = ec, l) : (la(e), lc(e, m));
    }
    if (b = t.memoizedState, b !== null && (m = b.dehydrated, m !== null)) {
      if (c)
        e.flags & 256 ? (la(e), e.flags &= -257, e = ic(
          t,
          e,
          n
        )) : e.memoizedState !== null ? (ra(), e.child = t.child, e.flags |= 128, e = null) : (ra(), i = l.fallback, m = e.mode, l = rc(
          { mode: "visible", children: l.children },
          m
        ), i = Ga(
          i,
          m,
          n,
          null
        ), i.flags |= 2, l.return = e, i.return = e, l.sibling = i, e.child = l, Ua(
          e,
          t.child,
          null,
          n
        ), l = e.child, l.memoizedState = nc(n), l.childLanes = ac(
          t,
          f,
          n
        ), e.memoizedState = ec, e = i);
      else if (la(e), m.data === "$!") {
        if (f = m.nextSibling && m.nextSibling.dataset, f) var E = f.dgst;
        f = E, l = Error(o(419)), l.stack = "", l.digest = f, cr({ value: l, source: null, stack: null }), e = ic(
          t,
          e,
          n
        );
      } else if (ue || Sr(t, e, n, !1), f = (n & t.childLanes) !== 0, ue || f) {
        if (f = jt, f !== null) {
          if (l = n & -n, l & 42) l = 1;
          else
            switch (l) {
              case 2:
                l = 1;
                break;
              case 8:
                l = 4;
                break;
              case 32:
                l = 16;
                break;
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
                l = 64;
                break;
              case 268435456:
                l = 134217728;
                break;
              default:
                l = 0;
            }
          if (l = l & (f.suspendedLanes | n) ? 0 : l, l !== 0 && l !== b.retryLane)
            throw b.retryLane = l, aa(t, l), Ce(f, t, l), ph;
        }
        m.data === "$?" || Bc(), e = ic(
          t,
          e,
          n
        );
      } else
        m.data === "$?" ? (e.flags |= 128, e.child = t.child, e = yg.bind(
          null,
          t
        ), m._reactRetry = e, e = null) : (t = b.treeContext, de = dn(
          m.nextSibling
        ), Te = e, Ot = !0, sn = null, bn = !1, t !== null && (Qe[Ke++] = Bn, Qe[Ke++] = Un, Qe[Ke++] = wa, Bn = t.id, Un = t.overflow, wa = e), e = lc(
          e,
          l.children
        ), e.flags |= 4096);
      return e;
    }
    return i ? (ra(), i = l.fallback, m = e.mode, b = t.child, E = b.sibling, l = pa(b, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = b.subtreeFlags & 31457280, E !== null ? i = pa(E, i) : (i = Ga(
      i,
      m,
      n,
      null
    ), i.flags |= 2), i.return = e, l.return = e, l.sibling = i, e.child = l, l = i, i = e.child, m = t.child.memoizedState, m === null ? m = nc(n) : (b = m.cachePool, b !== null ? (E = re._currentValue, b = b.parent !== E ? { parent: E, pool: E } : b) : b = xd(), m = {
      baseLanes: m.baseLanes | n,
      cachePool: b
    }), i.memoizedState = m, i.childLanes = ac(
      t,
      f,
      n
    ), e.memoizedState = ec, l) : (la(e), n = t.child, t = n.sibling, n = pa(n, {
      mode: "visible",
      children: l.children
    }), n.return = e, n.sibling = null, t !== null && (f = e.deletions, f === null ? (e.deletions = [t], e.flags |= 16) : f.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function lc(t, e) {
    return e = rc(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function rc(t, e) {
    return Wh(t, e, 0, null);
  }
  function ic(t, e, n) {
    return Ua(e, t.child, null, n), t = lc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function xh(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), sc(t.return, e, n);
  }
  function uc(t, e, n, l, i) {
    var c = t.memoizedState;
    c === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: i
    } : (c.isBackwards = e, c.rendering = null, c.renderingStartTime = 0, c.last = l, c.tail = n, c.tailMode = i);
  }
  function Oh(t, e, n) {
    var l = e.pendingProps, i = l.revealOrder, c = l.tail;
    if (he(t, e, l.children, n), l = le.current, l & 2)
      l = l & 1 | 2, e.flags |= 128;
    else {
      if (t !== null && t.flags & 128)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && xh(t, n, e);
          else if (t.tag === 19)
            xh(t, n, e);
          else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
              break t;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      l &= 1;
    }
    switch (Nt(le, l), i) {
      case "forwards":
        for (n = e.child, i = null; n !== null; )
          t = n.alternate, t !== null && Hi(t) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = e.child, e.child = null) : (i = n.sibling, n.sibling = null), uc(
          e,
          !1,
          i,
          n,
          c
        );
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (t = i.alternate, t !== null && Hi(t) === null) {
            e.child = i;
            break;
          }
          t = i.sibling, i.sibling = n, n = i, i = t;
        }
        uc(
          e,
          !0,
          n,
          null,
          c
        );
        break;
      case "together":
        uc(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function jn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), ya |= e.lanes, !(n & e.childLanes))
      if (t !== null) {
        if (Sr(
          t,
          e,
          n,
          !1
        ), (n & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(o(153));
    if (e.child !== null) {
      for (t = e.child, n = pa(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = pa(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function oc(t, e) {
    return t.lanes & e ? !0 : (t = t.dependencies, !!(t !== null && Zi(t)));
  }
  function ng(t, e, n) {
    switch (e.tag) {
      case 3:
        zn(e, e.stateNode.containerInfo), oa(e, re, t.memoizedState.cache), or();
        break;
      case 27:
      case 5:
        un(e);
        break;
      case 4:
        zn(e, e.stateNode.containerInfo);
        break;
      case 10:
        oa(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (la(e), e.flags |= 128, null) : n & e.child.childLanes ? Ah(t, e, n) : (la(e), t = jn(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        la(e);
        break;
      case 19:
        var i = (t.flags & 128) !== 0;
        if (l = (n & e.childLanes) !== 0, l || (Sr(
          t,
          e,
          n,
          !1
        ), l = (n & e.childLanes) !== 0), i) {
          if (l)
            return Oh(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (i = e.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Nt(le, le.current), l) break;
        return null;
      case 22:
      case 23:
        return e.lanes = 0, bh(t, e, n);
      case 24:
        oa(e, re, t.memoizedState.cache);
    }
    return jn(t, e, n);
  }
  function Mh(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        ue = !0;
      else {
        if (!oc(t, n) && !(e.flags & 128))
          return ue = !1, ng(
            t,
            e,
            n
          );
        ue = !!(t.flags & 131072);
      }
    else
      ue = !1, Ot && e.flags & 1048576 && fd(e, Di, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          t = e.pendingProps;
          var l = e.elementType, i = l._init;
          if (l = i(l._payload), e.type = l, typeof l == "function")
            Cc(l) ? (t = La(l, t), e.tag = 1, e = Ch(
              null,
              e,
              l,
              t,
              n
            )) : (e.tag = 0, e = tc(
              null,
              e,
              l,
              t,
              n
            ));
          else {
            if (l != null) {
              if (i = l.$$typeof, i === M) {
                e.tag = 11, e = yh(
                  null,
                  e,
                  l,
                  t,
                  n
                );
                break t;
              } else if (i === K) {
                e.tag = 14, e = gh(
                  null,
                  e,
                  l,
                  t,
                  n
                );
                break t;
              }
            }
            throw e = at(l) || l, Error(o(306, e, ""));
          }
        }
        return e;
      case 0:
        return tc(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return l = e.type, i = La(
          l,
          e.pendingProps
        ), Ch(
          t,
          e,
          l,
          i,
          n
        );
      case 3:
        t: {
          if (zn(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(o(387));
          var c = e.pendingProps;
          i = e.memoizedState, l = i.element, hc(t, e), Er(e, c, null, n);
          var f = e.memoizedState;
          if (c = f.cache, oa(e, re, c), c !== i.cache && fc(
            e,
            [re],
            n,
            !0
          ), Cr(), c = f.element, i.isDehydrated)
            if (i = {
              element: c,
              isDehydrated: !1,
              cache: f.cache
            }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
              e = Eh(
                t,
                e,
                c,
                n
              );
              break t;
            } else if (c !== l) {
              l = Xe(
                Error(o(424)),
                e
              ), cr(l), e = Eh(
                t,
                e,
                c,
                n
              );
              break t;
            } else
              for (de = dn(
                e.stateNode.containerInfo.firstChild
              ), Te = e, Ot = !0, sn = null, bn = !0, n = Sd(
                e,
                null,
                c,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (or(), c === l) {
              e = jn(
                t,
                e,
                n
              );
              break t;
            }
            he(t, e, c, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return br(t, e), t === null ? (n = zm(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : Ot || (n = e.type, t = e.pendingProps, l = su(
          _e.current
        ).createElement(n), l[ye] = e, l[xe] = t, me(l, n, t), ie(l), e.stateNode = l) : e.memoizedState = zm(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return un(e), t === null && Ot && (l = e.stateNode = Mm(
          e.type,
          e.pendingProps,
          _e.current
        ), Te = e, bn = !0, de = dn(
          l.firstChild
        )), l = e.pendingProps.children, t !== null || Ot ? he(
          t,
          e,
          l,
          n
        ) : e.child = Ua(
          e,
          null,
          l,
          n
        ), br(t, e), e.child;
      case 5:
        return t === null && Ot && ((i = l = de) && (l = wg(
          l,
          e.type,
          e.pendingProps,
          bn
        ), l !== null ? (e.stateNode = l, Te = e, de = dn(
          l.firstChild
        ), bn = !1, i = !0) : i = !1), i || Ba(e)), un(e), i = e.type, c = e.pendingProps, f = t !== null ? t.memoizedProps : null, l = c.children, Zc(i, c) ? l = null : f !== null && Zc(i, f) && (e.flags |= 32), e.memoizedState !== null && (i = Ho(
          t,
          e,
          Jy,
          null,
          null,
          n
        ), jr._currentValue = i), br(t, e), he(t, e, l, n), e.child;
      case 6:
        return t === null && Ot && ((t = n = de) && (n = Ng(
          n,
          e.pendingProps,
          bn
        ), n !== null ? (e.stateNode = n, Te = e, de = null, t = !0) : t = !1), t || Ba(e)), null;
      case 13:
        return Ah(t, e, n);
      case 4:
        return zn(
          e,
          e.stateNode.containerInfo
        ), l = e.pendingProps, t === null ? e.child = Ua(
          e,
          null,
          l,
          n
        ) : he(
          t,
          e,
          l,
          n
        ), e.child;
      case 11:
        return yh(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return he(
          t,
          e,
          e.pendingProps,
          n
        ), e.child;
      case 8:
        return he(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return he(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return l = e.pendingProps, oa(e, e.type, l.value), he(
          t,
          e,
          l.children,
          n
        ), e.child;
      case 9:
        return i = e.type._context, l = e.pendingProps.children, Ya(e), i = ge(i), l = l(i), e.flags |= 1, he(t, e, l, n), e.child;
      case 14:
        return gh(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return vh(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return Oh(t, e, n);
      case 22:
        return bh(t, e, n);
      case 24:
        return Ya(e), l = ge(re), t === null ? (i = Bo(), i === null && (i = jt, c = wo(), i.pooledCache = c, c.refCount++, c !== null && (i.pooledCacheLanes |= n), i = c), e.memoizedState = {
          parent: l,
          cache: i
        }, dc(e), oa(e, re, i)) : (t.lanes & n && (hc(t, e), Er(e, null, null, n), Cr()), i = t.memoizedState, c = e.memoizedState, i.parent !== l ? (i = { parent: l, cache: l }, e.memoizedState = i, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = i), oa(e, re, l)) : (l = c.cache, oa(e, re, l), l !== i.cache && fc(
          e,
          [re],
          n,
          !0
        ))), he(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  var cc = Ct(null), qa = null, kn = null;
  function oa(t, e, n) {
    Nt(cc, e._currentValue), e._currentValue = n;
  }
  function Ln(t) {
    t._currentValue = cc.current, Lt(cc);
  }
  function sc(t, e, n) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function fc(t, e, n, l) {
    var i = t.child;
    for (i !== null && (i.return = t); i !== null; ) {
      var c = i.dependencies;
      if (c !== null) {
        var f = i.child;
        c = c.firstContext;
        t: for (; c !== null; ) {
          var m = c;
          c = i;
          for (var b = 0; b < e.length; b++)
            if (m.context === e[b]) {
              c.lanes |= n, m = c.alternate, m !== null && (m.lanes |= n), sc(
                c.return,
                n,
                t
              ), l || (f = null);
              break t;
            }
          c = m.next;
        }
      } else if (i.tag === 18) {
        if (f = i.return, f === null) throw Error(o(341));
        f.lanes |= n, c = f.alternate, c !== null && (c.lanes |= n), sc(f, n, t), f = null;
      } else f = i.child;
      if (f !== null) f.return = i;
      else
        for (f = i; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (i = f.sibling, i !== null) {
            i.return = f.return, f = i;
            break;
          }
          f = f.return;
        }
      i = f;
    }
  }
  function Sr(t, e, n, l) {
    t = null;
    for (var i = e, c = !1; i !== null; ) {
      if (!c) {
        if (i.flags & 524288) c = !0;
        else if (i.flags & 262144) break;
      }
      if (i.tag === 10) {
        var f = i.alternate;
        if (f === null) throw Error(o(387));
        if (f = f.memoizedProps, f !== null) {
          var m = i.type;
          Ne(i.pendingProps.value, f.value) || (t !== null ? t.push(m) : t = [m]);
        }
      } else if (i === rn.current) {
        if (f = i.alternate, f === null) throw Error(o(387));
        f.memoizedState.memoizedState !== i.memoizedState.memoizedState && (t !== null ? t.push(jr) : t = [jr]);
      }
      i = i.return;
    }
    t !== null && fc(
      e,
      t,
      n,
      l
    ), e.flags |= 262144;
  }
  function Zi(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ne(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Ya(t) {
    qa = t, kn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function ge(t) {
    return Rh(qa, t);
  }
  function Ji(t, e) {
    return qa === null && Ya(t), Rh(t, e);
  }
  function Rh(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, kn === null) {
      if (t === null) throw Error(o(308));
      kn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else kn = kn.next = e;
    return n;
  }
  var ca = !1;
  function dc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function hc(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function sa(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function fa(t, e, n) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (l = l.shared, Xt & 2) {
      var i = l.pending;
      return i === null ? e.next = e : (e.next = i.next, i.next = e), l.pending = e, e = _i(t), cd(t, null, n), e;
    }
    return Ri(t, l, e, n), _i(t);
  }
  function Tr(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194176) !== 0)) {
      var l = e.lanes;
      l &= t.pendingLanes, n |= l, e.lanes = n, gf(t, n);
    }
  }
  function mc(t, e) {
    var n = t.updateQueue, l = t.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var i = null, c = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          c === null ? i = c = f : c = c.next = f, n = n.next;
        } while (n !== null);
        c === null ? i = c = e : c = c.next = e;
      } else i = c = e;
      n = {
        baseState: l.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: c,
        shared: l.shared,
        callbacks: l.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var pc = !1;
  function Cr() {
    if (pc) {
      var t = bl;
      if (t !== null) throw t;
    }
  }
  function Er(t, e, n, l) {
    pc = !1;
    var i = t.updateQueue;
    ca = !1;
    var c = i.firstBaseUpdate, f = i.lastBaseUpdate, m = i.shared.pending;
    if (m !== null) {
      i.shared.pending = null;
      var b = m, E = b.next;
      b.next = null, f === null ? c = E : f.next = E, f = b;
      var $ = t.alternate;
      $ !== null && ($ = $.updateQueue, m = $.lastBaseUpdate, m !== f && (m === null ? $.firstBaseUpdate = E : m.next = E, $.lastBaseUpdate = b));
    }
    if (c !== null) {
      var G = i.baseState;
      f = 0, $ = E = b = null, m = c;
      do {
        var D = m.lane & -536870913, U = D !== m.lane;
        if (U ? (At & D) === D : (l & D) === D) {
          D !== 0 && D === vl && (pc = !0), $ !== null && ($ = $.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          t: {
            var ct = t, pt = m;
            D = e;
            var Zt = n;
            switch (pt.tag) {
              case 1:
                if (ct = pt.payload, typeof ct == "function") {
                  G = ct.call(Zt, G, D);
                  break t;
                }
                G = ct;
                break t;
              case 3:
                ct.flags = ct.flags & -65537 | 128;
              case 0:
                if (ct = pt.payload, D = typeof ct == "function" ? ct.call(Zt, G, D) : ct, D == null) break t;
                G = Q({}, G, D);
                break t;
              case 2:
                ca = !0;
            }
          }
          D = m.callback, D !== null && (t.flags |= 64, U && (t.flags |= 8192), U = i.callbacks, U === null ? i.callbacks = [D] : U.push(D));
        } else
          U = {
            lane: D,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, $ === null ? (E = $ = U, b = G) : $ = $.next = U, f |= D;
        if (m = m.next, m === null) {
          if (m = i.shared.pending, m === null)
            break;
          U = m, m = U.next, U.next = null, i.lastBaseUpdate = U, i.shared.pending = null;
        }
      } while (!0);
      $ === null && (b = G), i.baseState = b, i.firstBaseUpdate = E, i.lastBaseUpdate = $, c === null && (i.shared.lanes = 0), ya |= f, t.lanes = f, t.memoizedState = G;
    }
  }
  function _h(t, e) {
    if (typeof t != "function")
      throw Error(o(191, t));
    t.call(e);
  }
  function zh(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        _h(n[t], e);
  }
  function Ar(t, e) {
    try {
      var n = e.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var i = l.next;
        n = i;
        do {
          if ((n.tag & t) === t) {
            l = void 0;
            var c = n.create, f = n.inst;
            l = c(), f.destroy = l;
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (m) {
      $t(e, e.return, m);
    }
  }
  function da(t, e, n) {
    try {
      var l = e.updateQueue, i = l !== null ? l.lastEffect : null;
      if (i !== null) {
        var c = i.next;
        l = c;
        do {
          if ((l.tag & t) === t) {
            var f = l.inst, m = f.destroy;
            if (m !== void 0) {
              f.destroy = void 0, i = e;
              var b = n;
              try {
                m();
              } catch (E) {
                $t(
                  i,
                  b,
                  E
                );
              }
            }
          }
          l = l.next;
        } while (l !== c);
      }
    } catch (E) {
      $t(e, e.return, E);
    }
  }
  function Dh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        zh(e, n);
      } catch (l) {
        $t(t, t.return, l);
      }
    }
  }
  function wh(t, e, n) {
    n.props = La(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      $t(t, e, l);
    }
  }
  function Va(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        var l = t.stateNode;
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = l;
            break;
          default:
            i = l;
        }
        typeof n == "function" ? t.refCleanup = n(i) : n.current = i;
      }
    } catch (c) {
      $t(t, e, c);
    }
  }
  function Be(t, e) {
    var n = t.ref, l = t.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (i) {
          $t(t, e, i);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (i) {
          $t(t, e, i);
        }
      else n.current = null;
  }
  function Nh(t) {
    var e = t.type, n = t.memoizedProps, l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break t;
        case "img":
          n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (i) {
      $t(t, t.return, i);
    }
  }
  function Bh(t, e, n) {
    try {
      var l = t.stateNode;
      Mg(l, t.type, n, e), l[xe] = e;
    } catch (i) {
      $t(t, t.return, i);
    }
  }
  function Uh(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 || t.tag === 4;
  }
  function yc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Uh(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 27 && t.tag !== 18; ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function gc(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode, e.insertBefore(t, n)) : (e = n, e.appendChild(t)), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = cu));
    else if (l !== 4 && l !== 27 && (t = t.child, t !== null))
      for (gc(t, e, n), t = t.sibling; t !== null; )
        gc(t, e, n), t = t.sibling;
  }
  function Wi(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (l !== 4 && l !== 27 && (t = t.child, t !== null))
      for (Wi(t, e, n), t = t.sibling; t !== null; )
        Wi(t, e, n), t = t.sibling;
  }
  var qn = !1, Qt = !1, vc = !1, Hh = typeof WeakSet == "function" ? WeakSet : Set, oe = null, $h = !1;
  function ag(t, e) {
    if (t = t.containerInfo, Qc = yu, t = td(t), So(t)) {
      if ("selectionStart" in t)
        var n = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          n = (n = t.ownerDocument) && n.defaultView || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var i = l.anchorOffset, c = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, c.nodeType;
            } catch {
              n = null;
              break t;
            }
            var f = 0, m = -1, b = -1, E = 0, $ = 0, G = t, D = null;
            e: for (; ; ) {
              for (var U; G !== n || i !== 0 && G.nodeType !== 3 || (m = f + i), G !== c || l !== 0 && G.nodeType !== 3 || (b = f + l), G.nodeType === 3 && (f += G.nodeValue.length), (U = G.firstChild) !== null; )
                D = G, G = U;
              for (; ; ) {
                if (G === t) break e;
                if (D === n && ++E === i && (m = f), D === c && ++$ === l && (b = f), (U = G.nextSibling) !== null) break;
                G = D, D = G.parentNode;
              }
              G = U;
            }
            n = m === -1 || b === -1 ? null : { start: m, end: b };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Kc = { focusedElem: t, selectionRange: n }, yu = !1, oe = e; oe !== null; )
      if (e = oe, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, oe = t;
      else
        for (; oe !== null; ) {
          switch (e = oe, c = e.alternate, t = e.flags, e.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (t & 1024 && c !== null) {
                t = void 0, n = e, i = c.memoizedProps, c = c.memoizedState, l = n.stateNode;
                try {
                  var ct = La(
                    n.type,
                    i,
                    n.elementType === n.type
                  );
                  t = l.getSnapshotBeforeUpdate(
                    ct,
                    c
                  ), l.__reactInternalSnapshotBeforeUpdate = t;
                } catch (pt) {
                  $t(
                    n,
                    n.return,
                    pt
                  );
                }
              }
              break;
            case 3:
              if (t & 1024) {
                if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9)
                  Fc(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Fc(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (t & 1024) throw Error(o(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, oe = t;
            break;
          }
          oe = e.return;
        }
    return ct = $h, $h = !1, ct;
  }
  function jh(t, e, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Vn(t, n), l & 4 && Ar(5, n);
        break;
      case 1:
        if (Vn(t, n), l & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (m) {
              $t(n, n.return, m);
            }
          else {
            var i = La(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                i,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              $t(
                n,
                n.return,
                m
              );
            }
          }
        l & 64 && Dh(n), l & 512 && Va(n, n.return);
        break;
      case 3:
        if (Vn(t, n), l & 64 && (l = n.updateQueue, l !== null)) {
          if (t = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            zh(l, t);
          } catch (m) {
            $t(n, n.return, m);
          }
        }
        break;
      case 26:
        Vn(t, n), l & 512 && Va(n, n.return);
        break;
      case 27:
      case 5:
        Vn(t, n), e === null && l & 4 && Nh(n), l & 512 && Va(n, n.return);
        break;
      case 12:
        Vn(t, n);
        break;
      case 13:
        Vn(t, n), l & 4 && qh(t, n);
        break;
      case 22:
        if (i = n.memoizedState !== null || qn, !i) {
          e = e !== null && e.memoizedState !== null || Qt;
          var c = qn, f = Qt;
          qn = i, (Qt = e) && !f ? ha(
            t,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Vn(t, n), qn = c, Qt = f;
        }
        l & 512 && (n.memoizedProps.mode === "manual" ? Va(n, n.return) : Be(n, n.return));
        break;
      default:
        Vn(t, n);
    }
  }
  function kh(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, kh(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && ao(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var ee = null, Ue = !1;
  function Yn(t, e, n) {
    for (n = n.child; n !== null; )
      Lh(t, e, n), n = n.sibling;
  }
  function Lh(t, e, n) {
    if (De && typeof De.onCommitFiberUnmount == "function")
      try {
        De.onCommitFiberUnmount(Kl, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Qt || Be(n, e), Yn(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Qt || Be(n, e);
        var l = ee, i = Ue;
        for (ee = n.stateNode, Yn(
          t,
          e,
          n
        ), n = n.stateNode, e = n.attributes; e.length; )
          n.removeAttributeNode(e[0]);
        ao(n), ee = l, Ue = i;
        break;
      case 5:
        Qt || Be(n, e);
      case 6:
        i = ee;
        var c = Ue;
        if (ee = null, Yn(
          t,
          e,
          n
        ), ee = i, Ue = c, ee !== null)
          if (Ue)
            try {
              t = ee, l = n.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(l) : t.removeChild(l);
            } catch (f) {
              $t(
                n,
                e,
                f
              );
            }
          else
            try {
              ee.removeChild(n.stateNode);
            } catch (f) {
              $t(
                n,
                e,
                f
              );
            }
        break;
      case 18:
        ee !== null && (Ue ? (e = ee, n = n.stateNode, e.nodeType === 8 ? Wc(
          e.parentNode,
          n
        ) : e.nodeType === 1 && Wc(e, n), Yr(e)) : Wc(ee, n.stateNode));
        break;
      case 4:
        l = ee, i = Ue, ee = n.stateNode.containerInfo, Ue = !0, Yn(
          t,
          e,
          n
        ), ee = l, Ue = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Qt || da(2, n, e), Qt || da(4, n, e), Yn(
          t,
          e,
          n
        );
        break;
      case 1:
        Qt || (Be(n, e), l = n.stateNode, typeof l.componentWillUnmount == "function" && wh(
          n,
          e,
          l
        )), Yn(
          t,
          e,
          n
        );
        break;
      case 21:
        Yn(
          t,
          e,
          n
        );
        break;
      case 22:
        Qt || Be(n, e), Qt = (l = Qt) || n.memoizedState !== null, Yn(
          t,
          e,
          n
        ), Qt = l;
        break;
      default:
        Yn(
          t,
          e,
          n
        );
    }
  }
  function qh(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Yr(t);
      } catch (n) {
        $t(e, e.return, n);
      }
  }
  function lg(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Hh()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Hh()), e;
      default:
        throw Error(o(435, t.tag));
    }
  }
  function bc(t, e) {
    var n = lg(t);
    e.forEach(function(l) {
      var i = gg.bind(null, t, l);
      n.has(l) || (n.add(l), l.then(i, i));
    });
  }
  function Je(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var i = n[l], c = t, f = e, m = f;
        t: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
            case 5:
              ee = m.stateNode, Ue = !1;
              break t;
            case 3:
              ee = m.stateNode.containerInfo, Ue = !0;
              break t;
            case 4:
              ee = m.stateNode.containerInfo, Ue = !0;
              break t;
          }
          m = m.return;
        }
        if (ee === null) throw Error(o(160));
        Lh(c, f, i), ee = null, Ue = !1, c = i.alternate, c !== null && (c.return = null), i.return = null;
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; )
        Yh(e, t), e = e.sibling;
  }
  var fn = null;
  function Yh(t, e) {
    var n = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Je(e, t), We(t), l & 4 && (da(3, t, t.return), Ar(3, t), da(5, t, t.return));
        break;
      case 1:
        Je(e, t), We(t), l & 512 && (Qt || n === null || Be(n, n.return)), l & 64 && qn && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var i = fn;
        if (Je(e, t), We(t), l & 512 && (Qt || n === null || Be(n, n.return)), l & 4) {
          var c = n !== null ? n.memoizedState : null;
          if (l = t.memoizedState, n === null)
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  l = t.type, n = t.memoizedProps, i = i.ownerDocument || i;
                  e: switch (l) {
                    case "title":
                      c = i.getElementsByTagName("title")[0], (!c || c[Wl] || c[ye] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = i.createElement(l), i.head.insertBefore(
                        c,
                        i.querySelector("head > title")
                      )), me(c, l, n), c[ye] = t, ie(c), l = c;
                      break t;
                    case "link":
                      var f = Nm(
                        "link",
                        "href",
                        i
                      ).get(l + (n.href || ""));
                      if (f) {
                        for (var m = 0; m < f.length; m++)
                          if (c = f[m], c.getAttribute("href") === (n.href == null ? null : n.href) && c.getAttribute("rel") === (n.rel == null ? null : n.rel) && c.getAttribute("title") === (n.title == null ? null : n.title) && c.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            f.splice(m, 1);
                            break e;
                          }
                      }
                      c = i.createElement(l), me(c, l, n), i.head.appendChild(c);
                      break;
                    case "meta":
                      if (f = Nm(
                        "meta",
                        "content",
                        i
                      ).get(l + (n.content || ""))) {
                        for (m = 0; m < f.length; m++)
                          if (c = f[m], c.getAttribute("content") === (n.content == null ? null : "" + n.content) && c.getAttribute("name") === (n.name == null ? null : n.name) && c.getAttribute("property") === (n.property == null ? null : n.property) && c.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && c.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            f.splice(m, 1);
                            break e;
                          }
                      }
                      c = i.createElement(l), me(c, l, n), i.head.appendChild(c);
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  c[ye] = t, ie(c), l = c;
                }
                t.stateNode = l;
              } else
                Bm(
                  i,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = wm(
                i,
                l,
                t.memoizedProps
              );
          else
            c !== l ? (c === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : c.count--, l === null ? Bm(
              i,
              t.type,
              t.stateNode
            ) : wm(
              i,
              l,
              t.memoizedProps
            )) : l === null && t.stateNode !== null && Bh(
              t,
              t.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        if (l & 4 && t.alternate === null) {
          i = t.stateNode, c = t.memoizedProps;
          try {
            for (var b = i.firstChild; b; ) {
              var E = b.nextSibling, $ = b.nodeName;
              b[Wl] || $ === "HEAD" || $ === "BODY" || $ === "SCRIPT" || $ === "STYLE" || $ === "LINK" && b.rel.toLowerCase() === "stylesheet" || i.removeChild(b), b = E;
            }
            for (var G = t.type, D = i.attributes; D.length; )
              i.removeAttributeNode(D[0]);
            me(i, G, c), i[ye] = t, i[xe] = c;
          } catch (ct) {
            $t(t, t.return, ct);
          }
        }
      case 5:
        if (Je(e, t), We(t), l & 512 && (Qt || n === null || Be(n, n.return)), t.flags & 32) {
          i = t.stateNode;
          try {
            il(i, "");
          } catch (ct) {
            $t(t, t.return, ct);
          }
        }
        l & 4 && t.stateNode != null && (i = t.memoizedProps, Bh(
          t,
          i,
          n !== null ? n.memoizedProps : i
        )), l & 1024 && (vc = !0);
        break;
      case 6:
        if (Je(e, t), We(t), l & 4) {
          if (t.stateNode === null)
            throw Error(o(162));
          l = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = l;
          } catch (ct) {
            $t(t, t.return, ct);
          }
        }
        break;
      case 3:
        if (hu = null, i = fn, fn = fu(e.containerInfo), Je(e, t), fn = i, We(t), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Yr(e.containerInfo);
          } catch (ct) {
            $t(t, t.return, ct);
          }
        vc && (vc = !1, Vh(t));
        break;
      case 4:
        l = fn, fn = fu(
          t.stateNode.containerInfo
        ), Je(e, t), We(t), fn = l;
        break;
      case 12:
        Je(e, t), We(t);
        break;
      case 13:
        Je(e, t), We(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Rc = ze()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, bc(t, l)));
        break;
      case 22:
        if (l & 512 && (Qt || n === null || Be(n, n.return)), b = t.memoizedState !== null, E = n !== null && n.memoizedState !== null, $ = qn, G = Qt, qn = $ || b, Qt = G || E, Je(e, t), Qt = G, qn = $, We(t), e = t.stateNode, e._current = t, e._visibility &= -3, e._visibility |= e._pendingVisibility & 2, l & 8192 && (e._visibility = b ? e._visibility & -2 : e._visibility | 1, b && (e = qn || Qt, n === null || E || e || El(t)), t.memoizedProps === null || t.memoizedProps.mode !== "manual"))
          t: for (n = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26 || e.tag === 27) {
              if (n === null) {
                E = n = e;
                try {
                  if (i = E.stateNode, b)
                    c = i.style, typeof c.setProperty == "function" ? c.setProperty(
                      "display",
                      "none",
                      "important"
                    ) : c.display = "none";
                  else {
                    f = E.stateNode, m = E.memoizedProps.style;
                    var U = m != null && m.hasOwnProperty("display") ? m.display : null;
                    f.style.display = U == null || typeof U == "boolean" ? "" : ("" + U).trim();
                  }
                } catch (ct) {
                  $t(E, E.return, ct);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                E = e;
                try {
                  E.stateNode.nodeValue = b ? "" : E.memoizedProps;
                } catch (ct) {
                  $t(E, E.return, ct);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), e = e.return;
            }
            n === e && (n = null), e.sibling.return = e.return, e = e.sibling;
          }
        l & 4 && (l = t.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, bc(t, n))));
        break;
      case 19:
        Je(e, t), We(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, bc(t, l)));
        break;
      case 21:
        break;
      default:
        Je(e, t), We(t);
    }
  }
  function We(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        if (t.tag !== 27) {
          t: {
            for (var n = t.return; n !== null; ) {
              if (Uh(n)) {
                var l = n;
                break t;
              }
              n = n.return;
            }
            throw Error(o(160));
          }
          switch (l.tag) {
            case 27:
              var i = l.stateNode, c = yc(t);
              Wi(t, c, i);
              break;
            case 5:
              var f = l.stateNode;
              l.flags & 32 && (il(f, ""), l.flags &= -33);
              var m = yc(t);
              Wi(t, m, f);
              break;
            case 3:
            case 4:
              var b = l.stateNode.containerInfo, E = yc(t);
              gc(
                t,
                E,
                b
              );
              break;
            default:
              throw Error(o(161));
          }
        }
      } catch ($) {
        $t(t, t.return, $);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Vh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Vh(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function Vn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        jh(t, e.alternate, e), e = e.sibling;
  }
  function El(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          da(4, e, e.return), El(e);
          break;
        case 1:
          Be(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && wh(
            e,
            e.return,
            n
          ), El(e);
          break;
        case 26:
        case 27:
        case 5:
          Be(e, e.return), El(e);
          break;
        case 22:
          Be(e, e.return), e.memoizedState === null && El(e);
          break;
        default:
          El(e);
      }
      t = t.sibling;
    }
  }
  function ha(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate, i = t, c = e, f = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ha(
            i,
            c,
            n
          ), Ar(4, c);
          break;
        case 1:
          if (ha(
            i,
            c,
            n
          ), l = c, i = l.stateNode, typeof i.componentDidMount == "function")
            try {
              i.componentDidMount();
            } catch (E) {
              $t(l, l.return, E);
            }
          if (l = c, i = l.updateQueue, i !== null) {
            var m = l.stateNode;
            try {
              var b = i.shared.hiddenCallbacks;
              if (b !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < b.length; i++)
                  _h(b[i], m);
            } catch (E) {
              $t(l, l.return, E);
            }
          }
          n && f & 64 && Dh(c), Va(c, c.return);
          break;
        case 26:
        case 27:
        case 5:
          ha(
            i,
            c,
            n
          ), n && l === null && f & 4 && Nh(c), Va(c, c.return);
          break;
        case 12:
          ha(
            i,
            c,
            n
          );
          break;
        case 13:
          ha(
            i,
            c,
            n
          ), n && f & 4 && qh(i, c);
          break;
        case 22:
          c.memoizedState === null && ha(
            i,
            c,
            n
          ), Va(c, c.return);
          break;
        default:
          ha(
            i,
            c,
            n
          );
      }
      e = e.sibling;
    }
  }
  function Sc(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && mr(n));
  }
  function Tc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && mr(t));
  }
  function ma(t, e, n, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Gh(
          t,
          e,
          n,
          l
        ), e = e.sibling;
  }
  function Gh(t, e, n, l) {
    var i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ma(
          t,
          e,
          n,
          l
        ), i & 2048 && Ar(9, e);
        break;
      case 3:
        ma(
          t,
          e,
          n,
          l
        ), i & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && mr(t)));
        break;
      case 12:
        if (i & 2048) {
          ma(
            t,
            e,
            n,
            l
          ), t = e.stateNode;
          try {
            var c = e.memoizedProps, f = c.id, m = c.onPostCommit;
            typeof m == "function" && m(
              f,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (b) {
            $t(e, e.return, b);
          }
        } else
          ma(
            t,
            e,
            n,
            l
          );
        break;
      case 23:
        break;
      case 22:
        c = e.stateNode, e.memoizedState !== null ? c._visibility & 4 ? ma(
          t,
          e,
          n,
          l
        ) : xr(t, e) : c._visibility & 4 ? ma(
          t,
          e,
          n,
          l
        ) : (c._visibility |= 4, Al(
          t,
          e,
          n,
          l,
          (e.subtreeFlags & 10256) !== 0
        )), i & 2048 && Sc(
          e.alternate,
          e
        );
        break;
      case 24:
        ma(
          t,
          e,
          n,
          l
        ), i & 2048 && Tc(e.alternate, e);
        break;
      default:
        ma(
          t,
          e,
          n,
          l
        );
    }
  }
  function Al(t, e, n, l, i) {
    for (i = i && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var c = t, f = e, m = n, b = l, E = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Al(
            c,
            f,
            m,
            b,
            i
          ), Ar(8, f);
          break;
        case 23:
          break;
        case 22:
          var $ = f.stateNode;
          f.memoizedState !== null ? $._visibility & 4 ? Al(
            c,
            f,
            m,
            b,
            i
          ) : xr(
            c,
            f
          ) : ($._visibility |= 4, Al(
            c,
            f,
            m,
            b,
            i
          )), i && E & 2048 && Sc(
            f.alternate,
            f
          );
          break;
        case 24:
          Al(
            c,
            f,
            m,
            b,
            i
          ), i && E & 2048 && Tc(f.alternate, f);
          break;
        default:
          Al(
            c,
            f,
            m,
            b,
            i
          );
      }
      e = e.sibling;
    }
  }
  function xr(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, l = e, i = l.flags;
        switch (l.tag) {
          case 22:
            xr(n, l), i & 2048 && Sc(
              l.alternate,
              l
            );
            break;
          case 24:
            xr(n, l), i & 2048 && Tc(l.alternate, l);
            break;
          default:
            xr(n, l);
        }
        e = e.sibling;
      }
  }
  var Or = 8192;
  function xl(t) {
    if (t.subtreeFlags & Or)
      for (t = t.child; t !== null; )
        Xh(t), t = t.sibling;
  }
  function Xh(t) {
    switch (t.tag) {
      case 26:
        xl(t), t.flags & Or && t.memoizedState !== null && Qg(
          fn,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        xl(t);
        break;
      case 3:
      case 4:
        var e = fn;
        fn = fu(t.stateNode.containerInfo), xl(t), fn = e;
        break;
      case 22:
        t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = Or, Or = 16777216, xl(t), Or = e) : xl(t));
        break;
      default:
        xl(t);
    }
  }
  function Qh(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Mr(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          oe = l, Zh(
            l,
            t
          );
        }
      Qh(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Kh(t), t = t.sibling;
  }
  function Kh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Mr(t), t.flags & 2048 && da(9, t, t.return);
        break;
      case 3:
        Mr(t);
        break;
      case 12:
        Mr(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 4 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -5, Fi(t)) : Mr(t);
        break;
      default:
        Mr(t);
    }
  }
  function Fi(t) {
    var e = t.deletions;
    if (t.flags & 16) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          oe = l, Zh(
            l,
            t
          );
        }
      Qh(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          da(8, e, e.return), Fi(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 4 && (n._visibility &= -5, Fi(e));
          break;
        default:
          Fi(e);
      }
      t = t.sibling;
    }
  }
  function Zh(t, e) {
    for (; oe !== null; ) {
      var n = oe;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          da(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          mr(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, oe = l;
      else
        t: for (n = t; oe !== null; ) {
          l = oe;
          var i = l.sibling, c = l.return;
          if (kh(l), l === n) {
            oe = null;
            break t;
          }
          if (i !== null) {
            i.return = c, oe = i;
            break t;
          }
          oe = c;
        }
    }
  }
  function rg(t, e, n, l) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Fe(t, e, n, l) {
    return new rg(t, e, n, l);
  }
  function Cc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function pa(t, e) {
    var n = t.alternate;
    return n === null ? (n = Fe(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 31457280, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function Jh(t, e) {
    t.flags &= 31457282;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Pi(t, e, n, l, i, c) {
    var f = 0;
    if (l = t, typeof t == "function") Cc(t) && (f = 1);
    else if (typeof t == "string")
      f = Gg(
        t,
        n,
        Ee.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case v:
          return Ga(n.children, i, c, e);
        case y:
          f = 8, i |= 24;
          break;
        case T:
          return t = Fe(12, n, e, i | 2), t.elementType = T, t.lanes = c, t;
        case A:
          return t = Fe(13, n, e, i), t.elementType = A, t.lanes = c, t;
        case H:
          return t = Fe(19, n, e, i), t.elementType = H, t.lanes = c, t;
        case F:
          return Wh(n, i, c, e);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case x:
              case w:
                f = 10;
                break t;
              case R:
                f = 9;
                break t;
              case M:
                f = 11;
                break t;
              case K:
                f = 14;
                break t;
              case J:
                f = 16, l = null;
                break t;
            }
          f = 29, n = Error(
            o(130, t === null ? "null" : typeof t, "")
          ), l = null;
      }
    return e = Fe(f, n, e, i), e.elementType = t, e.type = l, e.lanes = c, e;
  }
  function Ga(t, e, n, l) {
    return t = Fe(7, t, l, e), t.lanes = n, t;
  }
  function Wh(t, e, n, l) {
    t = Fe(22, t, l, e), t.elementType = F, t.lanes = n;
    var i = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function() {
        var c = i._current;
        if (c === null) throw Error(o(456));
        if (!(i._pendingVisibility & 2)) {
          var f = aa(c, 2);
          f !== null && (i._pendingVisibility |= 2, Ce(f, c, 2));
        }
      },
      attach: function() {
        var c = i._current;
        if (c === null) throw Error(o(456));
        if (i._pendingVisibility & 2) {
          var f = aa(c, 2);
          f !== null && (i._pendingVisibility &= -3, Ce(f, c, 2));
        }
      }
    };
    return t.stateNode = i, t;
  }
  function Ec(t, e, n) {
    return t = Fe(6, t, null, e), t.lanes = n, t;
  }
  function Ac(t, e, n) {
    return e = Fe(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  function Gn(t) {
    t.flags |= 4;
  }
  function Fh(t, e) {
    if (e.type !== "stylesheet" || e.state.loading & 4)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Um(e)) {
      if (e = Ze.current, e !== null && ((At & 4194176) === At ? Sn !== null : (At & 62914560) !== At && !(At & 536870912) || e !== Sn))
        throw fr = _o, md;
      t.flags |= 8192;
    }
  }
  function Ii(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? pf() : 536870912, t.lanes |= e, Ml |= e);
  }
  function Rr(t, e) {
    if (!Ot)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = t.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), n = n.sibling;
          l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
      }
  }
  function Gt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, l = 0;
    if (e)
      for (var i = t.child; i !== null; )
        n |= i.lanes | i.childLanes, l |= i.subtreeFlags & 31457280, l |= i.flags & 31457280, i.return = t, i = i.sibling;
    else
      for (i = t.child; i !== null; )
        n |= i.lanes | i.childLanes, l |= i.subtreeFlags, l |= i.flags, i.return = t, i = i.sibling;
    return t.subtreeFlags |= l, t.childLanes = n, e;
  }
  function ig(t, e, n) {
    var l = e.pendingProps;
    switch (Mo(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Gt(e), null;
      case 1:
        return Gt(e), null;
      case 3:
        return n = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Ln(re), vn(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (ur(e) ? Gn(e) : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, sn !== null && (wc(sn), sn = null))), Gt(e), null;
      case 26:
        return n = e.memoizedState, t === null ? (Gn(e), n !== null ? (Gt(e), Fh(e, n)) : (Gt(e), e.flags &= -16777217)) : n ? n !== t.memoizedState ? (Gn(e), Gt(e), Fh(e, n)) : (Gt(e), e.flags &= -16777217) : (t.memoizedProps !== l && Gn(e), Gt(e), e.flags &= -16777217), null;
      case 27:
        Ae(e), n = _e.current;
        var i = e.type;
        if (t !== null && e.stateNode != null)
          t.memoizedProps !== l && Gn(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(o(166));
            return Gt(e), null;
          }
          t = Ee.current, ur(e) ? dd(e) : (t = Mm(i, l, n), e.stateNode = t, Gn(e));
        }
        return Gt(e), null;
      case 5:
        if (Ae(e), n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && Gn(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(o(166));
            return Gt(e), null;
          }
          if (t = Ee.current, ur(e))
            dd(e);
          else {
            switch (i = su(
              _e.current
            ), t) {
              case 1:
                t = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                t = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    t = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    t = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    t = i.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof l.is == "string" ? i.createElement("select", { is: l.is }) : i.createElement("select"), l.multiple ? t.multiple = !0 : l.size && (t.size = l.size);
                    break;
                  default:
                    t = typeof l.is == "string" ? i.createElement(n, { is: l.is }) : i.createElement(n);
                }
            }
            t[ye] = e, t[xe] = l;
            t: for (i = e.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                t.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === e) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e)
                  break t;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            e.stateNode = t;
            t: switch (me(t, n, l), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!l.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Gn(e);
          }
        }
        return Gt(e), e.flags &= -16777217, null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== l && Gn(e);
        else {
          if (typeof l != "string" && e.stateNode === null)
            throw Error(o(166));
          if (t = _e.current, ur(e)) {
            if (t = e.stateNode, n = e.memoizedProps, l = null, i = Te, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  l = i.memoizedProps;
              }
            t[ye] = e, t = !!(t.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || Tm(t.nodeValue, n)), t || Ba(e);
          } else
            t = su(t).createTextNode(
              l
            ), t[ye] = e, e.stateNode = t;
        }
        return Gt(e), null;
      case 13:
        if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (i = ur(e), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!i) throw Error(o(318));
              if (i = e.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(o(317));
              i[ye] = e;
            } else
              or(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
            Gt(e), i = !1;
          } else
            sn !== null && (wc(sn), sn = null), i = !0;
          if (!i)
            return e.flags & 256 ? (Hn(e), e) : (Hn(e), null);
        }
        if (Hn(e), e.flags & 128)
          return e.lanes = n, e;
        if (n = l !== null, t = t !== null && t.memoizedState !== null, n) {
          l = e.child, i = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (i = l.alternate.memoizedState.cachePool.pool);
          var c = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (c = l.memoizedState.cachePool.pool), c !== i && (l.flags |= 2048);
        }
        return n !== t && n && (e.child.flags |= 8192), Ii(e, e.updateQueue), Gt(e), null;
      case 4:
        return vn(), t === null && Vc(e.stateNode.containerInfo), Gt(e), null;
      case 10:
        return Ln(e.type), Gt(e), null;
      case 19:
        if (Lt(le), i = e.memoizedState, i === null) return Gt(e), null;
        if (l = (e.flags & 128) !== 0, c = i.rendering, c === null)
          if (l) Rr(i, !1);
          else {
            if (Kt !== 0 || t !== null && t.flags & 128)
              for (t = e.child; t !== null; ) {
                if (c = Hi(t), c !== null) {
                  for (e.flags |= 128, Rr(i, !1), t = c.updateQueue, e.updateQueue = t, Ii(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    Jh(n, t), n = n.sibling;
                  return Nt(
                    le,
                    le.current & 1 | 2
                  ), e.child;
                }
                t = t.sibling;
              }
            i.tail !== null && ze() > tu && (e.flags |= 128, l = !0, Rr(i, !1), e.lanes = 4194304);
          }
        else {
          if (!l)
            if (t = Hi(c), t !== null) {
              if (e.flags |= 128, l = !0, t = t.updateQueue, e.updateQueue = t, Ii(e, t), Rr(i, !0), i.tail === null && i.tailMode === "hidden" && !c.alternate && !Ot)
                return Gt(e), null;
            } else
              2 * ze() - i.renderingStartTime > tu && n !== 536870912 && (e.flags |= 128, l = !0, Rr(i, !1), e.lanes = 4194304);
          i.isBackwards ? (c.sibling = e.child, e.child = c) : (t = i.last, t !== null ? t.sibling = c : e.child = c, i.last = c);
        }
        return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = ze(), e.sibling = null, t = le.current, Nt(le, l ? t & 1 | 2 : t & 1), e) : (Gt(e), null);
      case 22:
      case 23:
        return Hn(e), Do(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? n & 536870912 && !(e.flags & 128) && (Gt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Gt(e), n = e.updateQueue, n !== null && Ii(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== n && (e.flags |= 2048), t !== null && Lt(Ha), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Ln(re), Gt(e), null;
      case 25:
        return null;
    }
    throw Error(o(156, e.tag));
  }
  function ug(t, e) {
    switch (Mo(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Ln(re), vn(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Ae(e), null;
      case 13:
        if (Hn(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(o(340));
          or();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return Lt(le), null;
      case 4:
        return vn(), null;
      case 10:
        return Ln(e.type), null;
      case 22:
      case 23:
        return Hn(e), Do(), t !== null && Lt(Ha), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Ln(re), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ph(t, e) {
    switch (Mo(e), e.tag) {
      case 3:
        Ln(re), vn();
        break;
      case 26:
      case 27:
      case 5:
        Ae(e);
        break;
      case 4:
        vn();
        break;
      case 13:
        Hn(e);
        break;
      case 19:
        Lt(le);
        break;
      case 10:
        Ln(e.type);
        break;
      case 22:
      case 23:
        Hn(e), Do(), t !== null && Lt(Ha);
        break;
      case 24:
        Ln(re);
    }
  }
  var og = {
    getCacheForType: function(t) {
      var e = ge(re), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    }
  }, cg = typeof WeakMap == "function" ? WeakMap : Map, Xt = 0, jt = null, St = null, At = 0, kt = 0, He = null, Xn = !1, Ol = !1, xc = !1, Qn = 0, Kt = 0, ya = 0, Xa = 0, Oc = 0, Pe = 0, Ml = 0, _r = null, Cn = null, Mc = !1, Rc = 0, tu = 1 / 0, eu = null, ga = null, nu = !1, Qa = null, zr = 0, _c = 0, zc = null, Dr = 0, Dc = null;
  function $e() {
    if (Xt & 2 && At !== 0)
      return At & -At;
    if (L.T !== null) {
      var t = vl;
      return t !== 0 ? t : kc();
    }
    return bf();
  }
  function Ih() {
    Pe === 0 && (Pe = !(At & 536870912) || Ot ? mf() : 536870912);
    var t = Ze.current;
    return t !== null && (t.flags |= 32), Pe;
  }
  function Ce(t, e, n) {
    (t === jt && kt === 2 || t.cancelPendingCommit !== null) && (Rl(t, 0), Kn(
      t,
      At,
      Pe,
      !1
    )), Jl(t, n), (!(Xt & 2) || t !== jt) && (t === jt && (!(Xt & 2) && (Xa |= n), Kt === 4 && Kn(
      t,
      At,
      Pe,
      !1
    )), En(t));
  }
  function tm(t, e, n) {
    if (Xt & 6) throw Error(o(327));
    var l = !n && (e & 60) === 0 && (e & t.expiredLanes) === 0 || Zl(t, e), i = l ? dg(t, e) : Uc(t, e, !0), c = l;
    do {
      if (i === 0) {
        Ol && !l && Kn(t, e, 0, !1);
        break;
      } else if (i === 6)
        Kn(
          t,
          e,
          0,
          !Xn
        );
      else {
        if (n = t.current.alternate, c && !sg(n)) {
          i = Uc(t, e, !1), c = !1;
          continue;
        }
        if (i === 2) {
          if (c = e, t.errorRecoveryDisabledLanes & c)
            var f = 0;
          else
            f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            e = f;
            t: {
              var m = t;
              i = _r;
              var b = m.current.memoizedState.isDehydrated;
              if (b && (Rl(m, f).flags |= 256), f = Uc(
                m,
                f,
                !1
              ), f !== 2) {
                if (xc && !b) {
                  m.errorRecoveryDisabledLanes |= c, Xa |= c, i = 4;
                  break t;
                }
                c = Cn, Cn = i, c !== null && wc(c);
              }
              i = f;
            }
            if (c = !1, i !== 2) continue;
          }
        }
        if (i === 1) {
          Rl(t, 0), Kn(t, e, 0, !0);
          break;
        }
        t: {
          switch (l = t, i) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((e & 4194176) === e) {
                Kn(
                  l,
                  e,
                  Pe,
                  !Xn
                );
                break t;
              }
              break;
            case 2:
              Cn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if (l.finishedWork = n, l.finishedLanes = e, (e & 62914560) === e && (c = Rc + 300 - ze(), 10 < c)) {
            if (Kn(
              l,
              e,
              Pe,
              !Xn
            ), pi(l, 0) !== 0) break t;
            l.timeoutHandle = Am(
              em.bind(
                null,
                l,
                n,
                Cn,
                eu,
                Mc,
                e,
                Pe,
                Xa,
                Ml,
                Xn,
                2,
                -0,
                0
              ),
              c
            );
            break t;
          }
          em(
            l,
            n,
            Cn,
            eu,
            Mc,
            e,
            Pe,
            Xa,
            Ml,
            Xn,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    En(t);
  }
  function wc(t) {
    Cn === null ? Cn = t : Cn.push.apply(
      Cn,
      t
    );
  }
  function em(t, e, n, l, i, c, f, m, b, E, $, G, D) {
    var U = e.subtreeFlags;
    if ((U & 8192 || (U & 16785408) === 16785408) && ($r = { stylesheets: null, count: 0, unsuspend: Xg }, Xh(e), e = Kg(), e !== null)) {
      t.cancelPendingCommit = e(
        om.bind(
          null,
          t,
          n,
          l,
          i,
          f,
          m,
          b,
          1,
          G,
          D
        )
      ), Kn(t, c, f, !E);
      return;
    }
    om(
      t,
      n,
      l,
      i,
      f,
      m,
      b,
      $,
      G,
      D
    );
  }
  function sg(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var i = n[l], c = i.getSnapshot;
          i = i.value;
          try {
            if (!Ne(c(), i)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null)
        n.return = e, e = n;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function Kn(t, e, n, l) {
    e &= ~Oc, e &= ~Xa, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
    for (var i = e; 0 < i; ) {
      var c = 31 - we(i), f = 1 << c;
      l[c] = -1, i &= ~f;
    }
    n !== 0 && yf(t, n, e);
  }
  function au() {
    return Xt & 6 ? !0 : (wr(0), !1);
  }
  function Nc() {
    if (St !== null) {
      if (kt === 0)
        var t = St.return;
      else
        t = St, kn = qa = null, ko(t), yl = null, dr = 0, t = St;
      for (; t !== null; )
        Ph(t.alternate, t), t = t.return;
      St = null;
    }
  }
  function Rl(t, e) {
    t.finishedWork = null, t.finishedLanes = 0;
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1, _g(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), Nc(), jt = t, St = n = pa(t.current, null), At = e, kt = 0, He = null, Xn = !1, Ol = Zl(t, e), xc = !1, Ml = Pe = Oc = Xa = ya = Kt = 0, Cn = _r = null, Mc = !1, e & 8 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var i = 31 - we(l), c = 1 << i;
        e |= t[i], l &= ~c;
      }
    return Qn = e, Mi(), n;
  }
  function nm(t, e) {
    vt = null, L.H = Tn, e === sr ? (e = gd(), kt = 3) : e === md ? (e = gd(), kt = 4) : kt = e === ph ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, He = e, St === null && (Kt = 1, Ki(
      t,
      Xe(e, t.current)
    ));
  }
  function am() {
    var t = L.H;
    return L.H = Tn, t === null ? Tn : t;
  }
  function lm() {
    var t = L.A;
    return L.A = og, t;
  }
  function Bc() {
    Kt = 4, Xn || (At & 4194176) !== At && Ze.current !== null || (Ol = !0), !(ya & 134217727) && !(Xa & 134217727) || jt === null || Kn(
      jt,
      At,
      Pe,
      !1
    );
  }
  function Uc(t, e, n) {
    var l = Xt;
    Xt |= 2;
    var i = am(), c = lm();
    (jt !== t || At !== e) && (eu = null, Rl(t, e)), e = !1;
    var f = Kt;
    t: do
      try {
        if (kt !== 0 && St !== null) {
          var m = St, b = He;
          switch (kt) {
            case 8:
              Nc(), f = 6;
              break t;
            case 3:
            case 2:
            case 6:
              Ze.current === null && (e = !0);
              var E = kt;
              if (kt = 0, He = null, _l(t, m, b, E), n && Ol) {
                f = 0;
                break t;
              }
              break;
            default:
              E = kt, kt = 0, He = null, _l(t, m, b, E);
          }
        }
        fg(), f = Kt;
        break;
      } catch ($) {
        nm(t, $);
      }
    while (!0);
    return e && t.shellSuspendCounter++, kn = qa = null, Xt = l, L.H = i, L.A = c, St === null && (jt = null, At = 0, Mi()), f;
  }
  function fg() {
    for (; St !== null; ) rm(St);
  }
  function dg(t, e) {
    var n = Xt;
    Xt |= 2;
    var l = am(), i = lm();
    jt !== t || At !== e ? (eu = null, tu = ze() + 500, Rl(t, e)) : Ol = Zl(
      t,
      e
    );
    t: do
      try {
        if (kt !== 0 && St !== null) {
          e = St;
          var c = He;
          e: switch (kt) {
            case 1:
              kt = 0, He = null, _l(t, e, c, 1);
              break;
            case 2:
              if (pd(c)) {
                kt = 0, He = null, im(e);
                break;
              }
              e = function() {
                kt === 2 && jt === t && (kt = 7), En(t);
              }, c.then(e, e);
              break t;
            case 3:
              kt = 7;
              break t;
            case 4:
              kt = 5;
              break t;
            case 7:
              pd(c) ? (kt = 0, He = null, im(e)) : (kt = 0, He = null, _l(t, e, c, 7));
              break;
            case 5:
              var f = null;
              switch (St.tag) {
                case 26:
                  f = St.memoizedState;
                case 5:
                case 27:
                  var m = St;
                  if (!f || Um(f)) {
                    kt = 0, He = null;
                    var b = m.sibling;
                    if (b !== null) St = b;
                    else {
                      var E = m.return;
                      E !== null ? (St = E, lu(E)) : St = null;
                    }
                    break e;
                  }
              }
              kt = 0, He = null, _l(t, e, c, 5);
              break;
            case 6:
              kt = 0, He = null, _l(t, e, c, 6);
              break;
            case 8:
              Nc(), Kt = 6;
              break t;
            default:
              throw Error(o(462));
          }
        }
        hg();
        break;
      } catch ($) {
        nm(t, $);
      }
    while (!0);
    return kn = qa = null, L.H = l, L.A = i, Xt = n, St !== null ? 0 : (jt = null, At = 0, Mi(), Kt);
  }
  function hg() {
    for (; St !== null && !mt(); )
      rm(St);
  }
  function rm(t) {
    var e = Mh(t.alternate, t, Qn);
    t.memoizedProps = t.pendingProps, e === null ? lu(t) : St = e;
  }
  function im(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Th(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          At
        );
        break;
      case 11:
        e = Th(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          At
        );
        break;
      case 5:
        ko(e);
      default:
        Ph(n, e), e = St = Jh(e, Qn), e = Mh(n, e, Qn);
    }
    t.memoizedProps = t.pendingProps, e === null ? lu(t) : St = e;
  }
  function _l(t, e, n, l) {
    kn = qa = null, ko(e), yl = null, dr = 0;
    var i = e.return;
    try {
      if (eg(
        t,
        i,
        e,
        n,
        At
      )) {
        Kt = 1, Ki(
          t,
          Xe(n, t.current)
        ), St = null;
        return;
      }
    } catch (c) {
      if (i !== null) throw St = i, c;
      Kt = 1, Ki(
        t,
        Xe(n, t.current)
      ), St = null;
      return;
    }
    e.flags & 32768 ? (Ot || l === 1 ? t = !0 : Ol || At & 536870912 ? t = !1 : (Xn = t = !0, (l === 2 || l === 3 || l === 6) && (l = Ze.current, l !== null && l.tag === 13 && (l.flags |= 16384))), um(e, t)) : lu(e);
  }
  function lu(t) {
    var e = t;
    do {
      if (e.flags & 32768) {
        um(
          e,
          Xn
        );
        return;
      }
      t = e.return;
      var n = ig(
        e.alternate,
        e,
        Qn
      );
      if (n !== null) {
        St = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        St = e;
        return;
      }
      St = e = t;
    } while (e !== null);
    Kt === 0 && (Kt = 5);
  }
  function um(t, e) {
    do {
      var n = ug(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, St = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        St = t;
        return;
      }
      St = t = n;
    } while (t !== null);
    Kt = 6, St = null;
  }
  function om(t, e, n, l, i, c, f, m, b, E) {
    var $ = L.T, G = I.p;
    try {
      I.p = 2, L.T = null, mg(
        t,
        e,
        n,
        l,
        G,
        i,
        c,
        f,
        m,
        b,
        E
      );
    } finally {
      L.T = $, I.p = G;
    }
  }
  function mg(t, e, n, l, i, c, f, m) {
    do
      zl();
    while (Qa !== null);
    if (Xt & 6) throw Error(o(327));
    var b = t.finishedWork;
    if (l = t.finishedLanes, b === null) return null;
    if (t.finishedWork = null, t.finishedLanes = 0, b === t.current) throw Error(o(177));
    t.callbackNode = null, t.callbackPriority = 0, t.cancelPendingCommit = null;
    var E = b.lanes | b.childLanes;
    if (E |= Ao, Q0(
      t,
      l,
      E,
      c,
      f,
      m
    ), t === jt && (St = jt = null, At = 0), !(b.subtreeFlags & 10256) && !(b.flags & 10256) || nu || (nu = !0, _c = E, zc = n, vg(fe, function() {
      return zl(), null;
    })), n = (b.flags & 15990) !== 0, b.subtreeFlags & 15990 || n ? (n = L.T, L.T = null, c = I.p, I.p = 2, f = Xt, Xt |= 4, ag(t, b), Yh(b, t), jy(Kc, t.containerInfo), yu = !!Qc, Kc = Qc = null, t.current = b, jh(t, b.alternate, b), Iu(), Xt = f, I.p = c, L.T = n) : t.current = b, nu ? (nu = !1, Qa = t, zr = l) : cm(t, E), E = t.pendingLanes, E === 0 && (ga = null), q0(b.stateNode), En(t), e !== null)
      for (i = t.onRecoverableError, b = 0; b < e.length; b++)
        E = e[b], i(E.value, {
          componentStack: E.stack
        });
    return zr & 3 && zl(), E = t.pendingLanes, l & 4194218 && E & 42 ? t === Dc ? Dr++ : (Dr = 0, Dc = t) : Dr = 0, wr(0), null;
  }
  function cm(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, mr(e)));
  }
  function zl() {
    if (Qa !== null) {
      var t = Qa, e = _c;
      _c = 0;
      var n = vf(zr), l = L.T, i = I.p;
      try {
        if (I.p = 32 > n ? 32 : n, L.T = null, Qa === null)
          var c = !1;
        else {
          n = zc, zc = null;
          var f = Qa, m = zr;
          if (Qa = null, zr = 0, Xt & 6)
            throw Error(o(331));
          var b = Xt;
          if (Xt |= 4, Kh(f.current), Gh(f, f.current, m, n), Xt = b, wr(0, !1), De && typeof De.onPostCommitFiberRoot == "function")
            try {
              De.onPostCommitFiberRoot(Kl, f);
            } catch {
            }
          c = !0;
        }
        return c;
      } finally {
        I.p = i, L.T = l, cm(t, e);
      }
    }
    return !1;
  }
  function sm(t, e, n) {
    e = Xe(n, e), e = Io(t.stateNode, e, 2), t = fa(t, e, 2), t !== null && (Jl(t, 2), En(t));
  }
  function $t(t, e, n) {
    if (t.tag === 3)
      sm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          sm(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (ga === null || !ga.has(l))) {
            t = Xe(n, t), n = hh(2), l = fa(e, n, 2), l !== null && (mh(
              n,
              l,
              e,
              t
            ), Jl(l, 2), En(l));
            break;
          }
        }
        e = e.return;
      }
  }
  function Hc(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new cg();
      var i = /* @__PURE__ */ new Set();
      l.set(e, i);
    } else
      i = l.get(e), i === void 0 && (i = /* @__PURE__ */ new Set(), l.set(e, i));
    i.has(n) || (xc = !0, i.add(n), t = pg.bind(null, t, e, n), e.then(t, t));
  }
  function pg(t, e, n) {
    var l = t.pingCache;
    l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, jt === t && (At & n) === n && (Kt === 4 || Kt === 3 && (At & 62914560) === At && 300 > ze() - Rc ? !(Xt & 2) && Rl(t, 0) : Oc |= n, Ml === At && (Ml = 0)), En(t);
  }
  function fm(t, e) {
    e === 0 && (e = pf()), t = aa(t, e), t !== null && (Jl(t, e), En(t));
  }
  function yg(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), fm(t, n);
  }
  function gg(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var l = t.stateNode, i = t.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(e), fm(t, n);
  }
  function vg(t, e) {
    return on(t, e);
  }
  var ru = null, Dl = null, $c = !1, iu = !1, jc = !1, Ka = 0;
  function En(t) {
    t !== Dl && t.next === null && (Dl === null ? ru = Dl = t : Dl = Dl.next = t), iu = !0, $c || ($c = !0, Sg(bg));
  }
  function wr(t, e) {
    if (!jc && iu) {
      jc = !0;
      do
        for (var n = !1, l = ru; l !== null; ) {
          if (t !== 0) {
            var i = l.pendingLanes;
            if (i === 0) var c = 0;
            else {
              var f = l.suspendedLanes, m = l.pingedLanes;
              c = (1 << 31 - we(42 | t) + 1) - 1, c &= i & ~(f & ~m), c = c & 201326677 ? c & 201326677 | 1 : c ? c | 2 : 0;
            }
            c !== 0 && (n = !0, mm(l, c));
          } else
            c = At, c = pi(
              l,
              l === jt ? c : 0
            ), !(c & 3) || Zl(l, c) || (n = !0, mm(l, c));
          l = l.next;
        }
      while (n);
      jc = !1;
    }
  }
  function bg() {
    iu = $c = !1;
    var t = 0;
    Ka !== 0 && (Rg() && (t = Ka), Ka = 0);
    for (var e = ze(), n = null, l = ru; l !== null; ) {
      var i = l.next, c = dm(l, e);
      c === 0 ? (l.next = null, n === null ? ru = i : n.next = i, i === null && (Dl = n)) : (n = l, (t !== 0 || c & 3) && (iu = !0)), l = i;
    }
    wr(t);
  }
  function dm(t, e) {
    for (var n = t.suspendedLanes, l = t.pingedLanes, i = t.expirationTimes, c = t.pendingLanes & -62914561; 0 < c; ) {
      var f = 31 - we(c), m = 1 << f, b = i[f];
      b === -1 ? (!(m & n) || m & l) && (i[f] = X0(m, e)) : b <= e && (t.expiredLanes |= m), c &= ~m;
    }
    if (e = jt, n = At, n = pi(
      t,
      t === e ? n : 0
    ), l = t.callbackNode, n === 0 || t === e && kt === 2 || t.cancelPendingCommit !== null)
      return l !== null && l !== null && Dn(l), t.callbackNode = null, t.callbackPriority = 0;
    if (!(n & 3) || Zl(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (l !== null && Dn(l), vf(n)) {
        case 2:
        case 8:
          n = Yt;
          break;
        case 32:
          n = fe;
          break;
        case 268435456:
          n = tl;
          break;
        default:
          n = fe;
      }
      return l = hm.bind(null, t), n = on(n, l), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return l !== null && l !== null && Dn(l), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function hm(t, e) {
    var n = t.callbackNode;
    if (zl() && t.callbackNode !== n)
      return null;
    var l = At;
    return l = pi(
      t,
      t === jt ? l : 0
    ), l === 0 ? null : (tm(t, l, e), dm(t, ze()), t.callbackNode != null && t.callbackNode === n ? hm.bind(null, t) : null);
  }
  function mm(t, e) {
    if (zl()) return null;
    tm(t, e, !0);
  }
  function Sg(t) {
    zg(function() {
      Xt & 6 ? on(Se, t) : t();
    });
  }
  function kc() {
    return Ka === 0 && (Ka = mf()), Ka;
  }
  function pm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Si("" + t);
  }
  function ym(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
  }
  function Tg(t, e, n, l, i) {
    if (e === "submit" && n && n.stateNode === i) {
      var c = pm(
        (i[xe] || null).action
      ), f = l.submitter;
      f && (e = (e = f[xe] || null) ? pm(e.formAction) : f.getAttribute("formAction"), e !== null && (c = e, f = null));
      var m = new Ai(
        "action",
        "action",
        null,
        l,
        i
      );
      t.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Ka !== 0) {
                  var b = f ? ym(i, f) : new FormData(i);
                  Zo(
                    n,
                    {
                      pending: !0,
                      data: b,
                      method: i.method,
                      action: c
                    },
                    null,
                    b
                  );
                }
              } else
                typeof c == "function" && (m.preventDefault(), b = f ? ym(i, f) : new FormData(i), Zo(
                  n,
                  {
                    pending: !0,
                    data: b,
                    method: i.method,
                    action: c
                  },
                  c,
                  b
                ));
            },
            currentTarget: i
          }
        ]
      });
    }
  }
  for (var Lc = 0; Lc < od.length; Lc++) {
    var qc = od[Lc], Cg = qc.toLowerCase(), Eg = qc[0].toUpperCase() + qc.slice(1);
    cn(
      Cg,
      "on" + Eg
    );
  }
  cn(ad, "onAnimationEnd"), cn(ld, "onAnimationIteration"), cn(rd, "onAnimationStart"), cn("dblclick", "onDoubleClick"), cn("focusin", "onFocus"), cn("focusout", "onBlur"), cn(Ly, "onTransitionRun"), cn(qy, "onTransitionStart"), cn(Yy, "onTransitionCancel"), cn(id, "onTransitionEnd"), ll("onMouseEnter", ["mouseout", "mouseover"]), ll("onMouseLeave", ["mouseout", "mouseover"]), ll("onPointerEnter", ["pointerout", "pointerover"]), ll("onPointerLeave", ["pointerout", "pointerover"]), Ra(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ra(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ra("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ra(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ra(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ra(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ag = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nr)
  );
  function gm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var l = t[n], i = l.event;
      l = l.listeners;
      t: {
        var c = void 0;
        if (e)
          for (var f = l.length - 1; 0 <= f; f--) {
            var m = l[f], b = m.instance, E = m.currentTarget;
            if (m = m.listener, b !== c && i.isPropagationStopped())
              break t;
            c = m, i.currentTarget = E;
            try {
              c(i);
            } catch ($) {
              Qi($);
            }
            i.currentTarget = null, c = b;
          }
        else
          for (f = 0; f < l.length; f++) {
            if (m = l[f], b = m.instance, E = m.currentTarget, m = m.listener, b !== c && i.isPropagationStopped())
              break t;
            c = m, i.currentTarget = E;
            try {
              c(i);
            } catch ($) {
              Qi($);
            }
            i.currentTarget = null, c = b;
          }
      }
    }
  }
  function Et(t, e) {
    var n = e[no];
    n === void 0 && (n = e[no] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    n.has(l) || (vm(e, t, 2, !1), n.add(l));
  }
  function Yc(t, e, n) {
    var l = 0;
    e && (l |= 4), vm(
      n,
      t,
      l,
      e
    );
  }
  var uu = "_reactListening" + Math.random().toString(36).slice(2);
  function Vc(t) {
    if (!t[uu]) {
      t[uu] = !0, Tf.forEach(function(n) {
        n !== "selectionchange" && (Ag.has(n) || Yc(n, !1, t), Yc(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[uu] || (e[uu] = !0, Yc("selectionchange", !1, e));
    }
  }
  function vm(t, e, n, l) {
    switch (qm(e)) {
      case 2:
        var i = Wg;
        break;
      case 8:
        i = Fg;
        break;
      default:
        i = ns;
    }
    n = i.bind(
      null,
      e,
      n,
      t
    ), i = void 0, !so || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = !0), l ? i !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: i
    }) : t.addEventListener(e, n, !0) : i !== void 0 ? t.addEventListener(e, n, {
      passive: i
    }) : t.addEventListener(e, n, !1);
  }
  function Gc(t, e, n, l, i) {
    var c = l;
    if (!(e & 1) && !(e & 2) && l !== null)
      t: for (; ; ) {
        if (l === null) return;
        var f = l.tag;
        if (f === 3 || f === 4) {
          var m = l.stateNode.containerInfo;
          if (m === i || m.nodeType === 8 && m.parentNode === i)
            break;
          if (f === 4)
            for (f = l.return; f !== null; ) {
              var b = f.tag;
              if ((b === 3 || b === 4) && (b = f.stateNode.containerInfo, b === i || b.nodeType === 8 && b.parentNode === i))
                return;
              f = f.return;
            }
          for (; m !== null; ) {
            if (f = Ma(m), f === null) return;
            if (b = f.tag, b === 5 || b === 6 || b === 26 || b === 27) {
              l = c = f;
              continue t;
            }
            m = m.parentNode;
          }
        }
        l = l.return;
      }
    Nf(function() {
      var E = c, $ = oo(n), G = [];
      t: {
        var D = ud.get(t);
        if (D !== void 0) {
          var U = Ai, ct = t;
          switch (t) {
            case "keypress":
              if (Ci(n) === 0) break t;
            case "keydown":
            case "keyup":
              U = gy;
              break;
            case "focusin":
              ct = "focus", U = po;
              break;
            case "focusout":
              ct = "blur", U = po;
              break;
            case "beforeblur":
            case "afterblur":
              U = po;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              U = Hf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = ry;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = Sy;
              break;
            case ad:
            case ld:
            case rd:
              U = oy;
              break;
            case id:
              U = Cy;
              break;
            case "scroll":
            case "scrollend":
              U = ay;
              break;
            case "wheel":
              U = Ay;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = sy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = jf;
              break;
            case "toggle":
            case "beforetoggle":
              U = Oy;
          }
          var pt = (e & 4) !== 0, Zt = !pt && (t === "scroll" || t === "scrollend"), O = pt ? D !== null ? D + "Capture" : null : D;
          pt = [];
          for (var C = E, _; C !== null; ) {
            var q = C;
            if (_ = q.stateNode, q = q.tag, q !== 5 && q !== 26 && q !== 27 || _ === null || O === null || (q = Pl(C, O), q != null && pt.push(
              Br(C, q, _)
            )), Zt) break;
            C = C.return;
          }
          0 < pt.length && (D = new U(
            D,
            ct,
            null,
            n,
            $
          ), G.push({ event: D, listeners: pt }));
        }
      }
      if (!(e & 7)) {
        t: {
          if (D = t === "mouseover" || t === "pointerover", U = t === "mouseout" || t === "pointerout", D && n !== uo && (ct = n.relatedTarget || n.fromElement) && (Ma(ct) || ct[el]))
            break t;
          if ((U || D) && (D = $.window === $ ? $ : (D = $.ownerDocument) ? D.defaultView || D.parentWindow : window, U ? (ct = n.relatedTarget || n.toElement, U = E, ct = ct ? Ma(ct) : null, ct !== null && (Zt = et(ct), pt = ct.tag, ct !== Zt || pt !== 5 && pt !== 27 && pt !== 6) && (ct = null)) : (U = null, ct = E), U !== ct)) {
            if (pt = Hf, q = "onMouseLeave", O = "onMouseEnter", C = "mouse", (t === "pointerout" || t === "pointerover") && (pt = jf, q = "onPointerLeave", O = "onPointerEnter", C = "pointer"), Zt = U == null ? D : Fl(U), _ = ct == null ? D : Fl(ct), D = new pt(
              q,
              C + "leave",
              U,
              n,
              $
            ), D.target = Zt, D.relatedTarget = _, q = null, Ma($) === E && (pt = new pt(
              O,
              C + "enter",
              ct,
              n,
              $
            ), pt.target = _, pt.relatedTarget = Zt, q = pt), Zt = q, U && ct)
              e: {
                for (pt = U, O = ct, C = 0, _ = pt; _; _ = wl(_))
                  C++;
                for (_ = 0, q = O; q; q = wl(q))
                  _++;
                for (; 0 < C - _; )
                  pt = wl(pt), C--;
                for (; 0 < _ - C; )
                  O = wl(O), _--;
                for (; C--; ) {
                  if (pt === O || O !== null && pt === O.alternate)
                    break e;
                  pt = wl(pt), O = wl(O);
                }
                pt = null;
              }
            else pt = null;
            U !== null && bm(
              G,
              D,
              U,
              pt,
              !1
            ), ct !== null && Zt !== null && bm(
              G,
              Zt,
              ct,
              pt,
              !0
            );
          }
        }
        t: {
          if (D = E ? Fl(E) : window, U = D.nodeName && D.nodeName.toLowerCase(), U === "select" || U === "input" && D.type === "file")
            var ot = Qf;
          else if (Gf(D))
            if (Kf)
              ot = Hy;
            else {
              ot = By;
              var bt = Ny;
            }
          else
            U = D.nodeName, !U || U.toLowerCase() !== "input" || D.type !== "checkbox" && D.type !== "radio" ? E && io(E.elementType) && (ot = Qf) : ot = Uy;
          if (ot && (ot = ot(t, E))) {
            Xf(
              G,
              ot,
              n,
              $
            );
            break t;
          }
          bt && bt(t, D, E), t === "focusout" && E && D.type === "number" && E.memoizedProps.value != null && ro(D, "number", D.value);
        }
        switch (bt = E ? Fl(E) : window, t) {
          case "focusin":
            (Gf(bt) || bt.contentEditable === "true") && (sl = bt, To = E, ir = null);
            break;
          case "focusout":
            ir = To = sl = null;
            break;
          case "mousedown":
            Co = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Co = !1, ed(G, n, $);
            break;
          case "selectionchange":
            if (ky) break;
          case "keydown":
          case "keyup":
            ed(G, n, $);
        }
        var st;
        if (go)
          t: {
            switch (t) {
              case "compositionstart":
                var dt = "onCompositionStart";
                break t;
              case "compositionend":
                dt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                dt = "onCompositionUpdate";
                break t;
            }
            dt = void 0;
          }
        else
          cl ? Yf(t, n) && (dt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (dt = "onCompositionStart");
        dt && (kf && n.locale !== "ko" && (cl || dt !== "onCompositionStart" ? dt === "onCompositionEnd" && cl && (st = Bf()) : (na = $, fo = "value" in na ? na.value : na.textContent, cl = !0)), bt = ou(E, dt), 0 < bt.length && (dt = new $f(
          dt,
          t,
          null,
          n,
          $
        ), G.push({ event: dt, listeners: bt }), st ? dt.data = st : (st = Vf(n), st !== null && (dt.data = st)))), (st = Ry ? _y(t, n) : zy(t, n)) && (dt = ou(E, "onBeforeInput"), 0 < dt.length && (bt = new $f(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          $
        ), G.push({
          event: bt,
          listeners: dt
        }), bt.data = st)), Tg(
          G,
          t,
          E,
          n,
          $
        );
      }
      gm(G, e);
    });
  }
  function Br(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function ou(t, e) {
    for (var n = e + "Capture", l = []; t !== null; ) {
      var i = t, c = i.stateNode;
      i = i.tag, i !== 5 && i !== 26 && i !== 27 || c === null || (i = Pl(t, n), i != null && l.unshift(
        Br(t, i, c)
      ), i = Pl(t, e), i != null && l.push(
        Br(t, i, c)
      )), t = t.return;
    }
    return l;
  }
  function wl(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function bm(t, e, n, l, i) {
    for (var c = e._reactName, f = []; n !== null && n !== l; ) {
      var m = n, b = m.alternate, E = m.stateNode;
      if (m = m.tag, b !== null && b === l) break;
      m !== 5 && m !== 26 && m !== 27 || E === null || (b = E, i ? (E = Pl(n, c), E != null && f.unshift(
        Br(n, E, b)
      )) : i || (E = Pl(n, c), E != null && f.push(
        Br(n, E, b)
      ))), n = n.return;
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var xg = /\r\n?/g, Og = /\u0000|\uFFFD/g;
  function Sm(t) {
    return (typeof t == "string" ? t : "" + t).replace(xg, `
`).replace(Og, "");
  }
  function Tm(t, e) {
    return e = Sm(e), Sm(t) === e;
  }
  function cu() {
  }
  function Ut(t, e, n, l, i, c) {
    switch (n) {
      case "children":
        typeof l == "string" ? e === "body" || e === "textarea" && l === "" || il(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && il(t, "" + l);
        break;
      case "className":
        gi(t, "class", l);
        break;
      case "tabIndex":
        gi(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        gi(t, n, l);
        break;
      case "style":
        Df(t, l, c);
        break;
      case "data":
        if (e !== "object") {
          gi(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        l = Si("" + l), t.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == "function" && (n === "formAction" ? (e !== "input" && Ut(t, e, "name", i.name, i, null), Ut(
            t,
            e,
            "formEncType",
            i.formEncType,
            i,
            null
          ), Ut(
            t,
            e,
            "formMethod",
            i.formMethod,
            i,
            null
          ), Ut(
            t,
            e,
            "formTarget",
            i.formTarget,
            i,
            null
          )) : (Ut(t, e, "encType", i.encType, i, null), Ut(t, e, "method", i.method, i, null), Ut(t, e, "target", i.target, i, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        l = Si("" + l), t.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (t.onclick = cu);
        break;
      case "onScroll":
        l != null && Et("scroll", t);
        break;
      case "onScrollEnd":
        l != null && Et("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (n = l.__html, n != null) {
            if (i.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = Si("" + l), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "" + l) : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0 ? t.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, l) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(n, l) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(n) : t.setAttribute(n, l);
        break;
      case "popover":
        Et("beforetoggle", t), Et("toggle", t), yi(t, "popover", l);
        break;
      case "xlinkActuate":
        Nn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        Nn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        Nn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        Nn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        Nn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        Nn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        Nn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        Nn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        Nn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        yi(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = ey.get(n) || n, yi(t, n, l));
    }
  }
  function Xc(t, e, n, l, i, c) {
    switch (n) {
      case "style":
        Df(t, l, c);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (n = l.__html, n != null) {
            if (i.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string" ? il(t, l) : (typeof l == "number" || typeof l == "bigint") && il(t, "" + l);
        break;
      case "onScroll":
        l != null && Et("scroll", t);
        break;
      case "onScrollEnd":
        l != null && Et("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = cu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Cf.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), e = n.slice(2, i ? n.length - 7 : void 0), c = t[xe] || null, c = c != null ? c[n] : null, typeof c == "function" && t.removeEventListener(e, c, i), typeof l == "function")) {
              typeof c != "function" && c !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, l, i);
              break t;
            }
            n in t ? t[n] = l : l === !0 ? t.setAttribute(n, "") : yi(t, n, l);
          }
    }
  }
  function me(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Et("error", t), Et("load", t);
        var l = !1, i = !1, c;
        for (c in n)
          if (n.hasOwnProperty(c)) {
            var f = n[c];
            if (f != null)
              switch (c) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  i = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, e));
                default:
                  Ut(t, e, c, f, n, null);
              }
          }
        i && Ut(t, e, "srcSet", n.srcSet, n, null), l && Ut(t, e, "src", n.src, n, null);
        return;
      case "input":
        Et("invalid", t);
        var m = c = f = i = null, b = null, E = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var $ = n[l];
            if ($ != null)
              switch (l) {
                case "name":
                  i = $;
                  break;
                case "type":
                  f = $;
                  break;
                case "checked":
                  b = $;
                  break;
                case "defaultChecked":
                  E = $;
                  break;
                case "value":
                  c = $;
                  break;
                case "defaultValue":
                  m = $;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if ($ != null)
                    throw Error(o(137, e));
                  break;
                default:
                  Ut(t, e, l, $, n, null);
              }
          }
        Mf(
          t,
          c,
          m,
          b,
          E,
          f,
          i,
          !1
        ), vi(t);
        return;
      case "select":
        Et("invalid", t), l = f = c = null;
        for (i in n)
          if (n.hasOwnProperty(i) && (m = n[i], m != null))
            switch (i) {
              case "value":
                c = m;
                break;
              case "defaultValue":
                f = m;
                break;
              case "multiple":
                l = m;
              default:
                Ut(t, e, i, m, n, null);
            }
        e = c, n = f, t.multiple = !!l, e != null ? rl(t, !!l, e, !1) : n != null && rl(t, !!l, n, !0);
        return;
      case "textarea":
        Et("invalid", t), c = i = l = null;
        for (f in n)
          if (n.hasOwnProperty(f) && (m = n[f], m != null))
            switch (f) {
              case "value":
                l = m;
                break;
              case "defaultValue":
                i = m;
                break;
              case "children":
                c = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(o(91));
                break;
              default:
                Ut(t, e, f, m, n, null);
            }
        _f(t, l, i, c), vi(t);
        return;
      case "option":
        for (b in n)
          if (n.hasOwnProperty(b) && (l = n[b], l != null))
            switch (b) {
              case "selected":
                t.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Ut(t, e, b, l, n, null);
            }
        return;
      case "dialog":
        Et("cancel", t), Et("close", t);
        break;
      case "iframe":
      case "object":
        Et("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Nr.length; l++)
          Et(Nr[l], t);
        break;
      case "image":
        Et("error", t), Et("load", t);
        break;
      case "details":
        Et("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Et("error", t), Et("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (E in n)
          if (n.hasOwnProperty(E) && (l = n[E], l != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                Ut(t, e, E, l, n, null);
            }
        return;
      default:
        if (io(e)) {
          for ($ in n)
            n.hasOwnProperty($) && (l = n[$], l !== void 0 && Xc(
              t,
              e,
              $,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (m in n)
      n.hasOwnProperty(m) && (l = n[m], l != null && Ut(t, e, m, l, n, null));
  }
  function Mg(t, e, n, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var i = null, c = null, f = null, m = null, b = null, E = null, $ = null;
        for (U in n) {
          var G = n[U];
          if (n.hasOwnProperty(U) && G != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = G;
              default:
                l.hasOwnProperty(U) || Ut(t, e, U, null, l, G);
            }
        }
        for (var D in l) {
          var U = l[D];
          if (G = n[D], l.hasOwnProperty(D) && (U != null || G != null))
            switch (D) {
              case "type":
                c = U;
                break;
              case "name":
                i = U;
                break;
              case "checked":
                E = U;
                break;
              case "defaultChecked":
                $ = U;
                break;
              case "value":
                f = U;
                break;
              case "defaultValue":
                m = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(o(137, e));
                break;
              default:
                U !== G && Ut(
                  t,
                  e,
                  D,
                  U,
                  l,
                  G
                );
            }
        }
        lo(
          t,
          f,
          m,
          b,
          E,
          $,
          c,
          i
        );
        return;
      case "select":
        U = f = m = D = null;
        for (c in n)
          if (b = n[c], n.hasOwnProperty(c) && b != null)
            switch (c) {
              case "value":
                break;
              case "multiple":
                U = b;
              default:
                l.hasOwnProperty(c) || Ut(
                  t,
                  e,
                  c,
                  null,
                  l,
                  b
                );
            }
        for (i in l)
          if (c = l[i], b = n[i], l.hasOwnProperty(i) && (c != null || b != null))
            switch (i) {
              case "value":
                D = c;
                break;
              case "defaultValue":
                m = c;
                break;
              case "multiple":
                f = c;
              default:
                c !== b && Ut(
                  t,
                  e,
                  i,
                  c,
                  l,
                  b
                );
            }
        e = m, n = f, l = U, D != null ? rl(t, !!n, D, !1) : !!l != !!n && (e != null ? rl(t, !!n, e, !0) : rl(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        U = D = null;
        for (m in n)
          if (i = n[m], n.hasOwnProperty(m) && i != null && !l.hasOwnProperty(m))
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ut(t, e, m, null, l, i);
            }
        for (f in l)
          if (i = l[f], c = n[f], l.hasOwnProperty(f) && (i != null || c != null))
            switch (f) {
              case "value":
                D = i;
                break;
              case "defaultValue":
                U = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(o(91));
                break;
              default:
                i !== c && Ut(t, e, f, i, l, c);
            }
        Rf(t, D, U);
        return;
      case "option":
        for (var ct in n)
          if (D = n[ct], n.hasOwnProperty(ct) && D != null && !l.hasOwnProperty(ct))
            switch (ct) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Ut(
                  t,
                  e,
                  ct,
                  null,
                  l,
                  D
                );
            }
        for (b in l)
          if (D = l[b], U = n[b], l.hasOwnProperty(b) && D !== U && (D != null || U != null))
            switch (b) {
              case "selected":
                t.selected = D && typeof D != "function" && typeof D != "symbol";
                break;
              default:
                Ut(
                  t,
                  e,
                  b,
                  D,
                  l,
                  U
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var pt in n)
          D = n[pt], n.hasOwnProperty(pt) && D != null && !l.hasOwnProperty(pt) && Ut(t, e, pt, null, l, D);
        for (E in l)
          if (D = l[E], U = n[E], l.hasOwnProperty(E) && D !== U && (D != null || U != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null)
                  throw Error(o(137, e));
                break;
              default:
                Ut(
                  t,
                  e,
                  E,
                  D,
                  l,
                  U
                );
            }
        return;
      default:
        if (io(e)) {
          for (var Zt in n)
            D = n[Zt], n.hasOwnProperty(Zt) && D !== void 0 && !l.hasOwnProperty(Zt) && Xc(
              t,
              e,
              Zt,
              void 0,
              l,
              D
            );
          for ($ in l)
            D = l[$], U = n[$], !l.hasOwnProperty($) || D === U || D === void 0 && U === void 0 || Xc(
              t,
              e,
              $,
              D,
              l,
              U
            );
          return;
        }
    }
    for (var O in n)
      D = n[O], n.hasOwnProperty(O) && D != null && !l.hasOwnProperty(O) && Ut(t, e, O, null, l, D);
    for (G in l)
      D = l[G], U = n[G], !l.hasOwnProperty(G) || D === U || D == null && U == null || Ut(t, e, G, D, l, U);
  }
  var Qc = null, Kc = null;
  function su(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Cm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Em(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Zc(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Jc = null;
  function Rg() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Jc ? !1 : (Jc = t, !0) : (Jc = null, !1);
  }
  var Am = typeof setTimeout == "function" ? setTimeout : void 0, _g = typeof clearTimeout == "function" ? clearTimeout : void 0, xm = typeof Promise == "function" ? Promise : void 0, zg = typeof queueMicrotask == "function" ? queueMicrotask : typeof xm < "u" ? function(t) {
    return xm.resolve(null).then(t).catch(Dg);
  } : Am;
  function Dg(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Wc(t, e) {
    var n = e, l = 0;
    do {
      var i = n.nextSibling;
      if (t.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
          if (l === 0) {
            t.removeChild(i), Yr(e);
            return;
          }
          l--;
        } else n !== "$" && n !== "$?" && n !== "$!" || l++;
      n = i;
    } while (n);
    Yr(e);
  }
  function Fc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Fc(n), ao(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function wg(t, e, n, l) {
    for (; t.nodeType === 1; ) {
      var i = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (l) {
        if (!t[Wl])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (c = t.getAttribute("rel"), c === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (c !== i.rel || t.getAttribute("href") !== (i.href == null ? null : i.href) || t.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || t.getAttribute("title") !== (i.title == null ? null : i.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (c = t.getAttribute("src"), (c !== (i.src == null ? null : i.src) || t.getAttribute("type") !== (i.type == null ? null : i.type) || t.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && c && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var c = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && t.getAttribute("name") === c)
          return t;
      } else return t;
      if (t = dn(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Ng(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = dn(t.nextSibling), t === null)) return null;
    return t;
  }
  function dn(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  function Om(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
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
  function Mm(t, e, n) {
    switch (e = su(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(o(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(o(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  var Ie = /* @__PURE__ */ new Map(), Rm = /* @__PURE__ */ new Set();
  function fu(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.ownerDocument;
  }
  var Zn = I.d;
  I.d = {
    f: Bg,
    r: Ug,
    D: Hg,
    C: $g,
    L: jg,
    m: kg,
    X: qg,
    S: Lg,
    M: Yg
  };
  function Bg() {
    var t = Zn.f(), e = au();
    return t || e;
  }
  function Ug(t) {
    var e = nl(t);
    e !== null && e.tag === 5 && e.type === "form" ? eh(e) : Zn.r(t);
  }
  var Nl = typeof document > "u" ? null : document;
  function _m(t, e, n) {
    var l = Nl;
    if (l && typeof e == "string" && e) {
      var i = Ve(e);
      i = 'link[rel="' + t + '"][href="' + i + '"]', typeof n == "string" && (i += '[crossorigin="' + n + '"]'), Rm.has(i) || (Rm.add(i), t = { rel: t, crossOrigin: n, href: e }, l.querySelector(i) === null && (e = l.createElement("link"), me(e, "link", t), ie(e), l.head.appendChild(e)));
    }
  }
  function Hg(t) {
    Zn.D(t), _m("dns-prefetch", t, null);
  }
  function $g(t, e) {
    Zn.C(t, e), _m("preconnect", t, e);
  }
  function jg(t, e, n) {
    Zn.L(t, e, n);
    var l = Nl;
    if (l && t && e) {
      var i = 'link[rel="preload"][as="' + Ve(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (i += '[imagesrcset="' + Ve(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (i += '[imagesizes="' + Ve(
        n.imageSizes
      ) + '"]')) : i += '[href="' + Ve(t) + '"]';
      var c = i;
      switch (e) {
        case "style":
          c = Bl(t);
          break;
        case "script":
          c = Ul(t);
      }
      Ie.has(c) || (t = Q(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), Ie.set(c, t), l.querySelector(i) !== null || e === "style" && l.querySelector(Ur(c)) || e === "script" && l.querySelector(Hr(c)) || (e = l.createElement("link"), me(e, "link", t), ie(e), l.head.appendChild(e)));
    }
  }
  function kg(t, e) {
    Zn.m(t, e);
    var n = Nl;
    if (n && t) {
      var l = e && typeof e.as == "string" ? e.as : "script", i = 'link[rel="modulepreload"][as="' + Ve(l) + '"][href="' + Ve(t) + '"]', c = i;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Ul(t);
      }
      if (!Ie.has(c) && (t = Q({ rel: "modulepreload", href: t }, e), Ie.set(c, t), n.querySelector(i) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Hr(c)))
              return;
        }
        l = n.createElement("link"), me(l, "link", t), ie(l), n.head.appendChild(l);
      }
    }
  }
  function Lg(t, e, n) {
    Zn.S(t, e, n);
    var l = Nl;
    if (l && t) {
      var i = al(l).hoistableStyles, c = Bl(t);
      e = e || "default";
      var f = i.get(c);
      if (!f) {
        var m = { loading: 0, preload: null };
        if (f = l.querySelector(
          Ur(c)
        ))
          m.loading = 5;
        else {
          t = Q(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = Ie.get(c)) && Pc(t, n);
          var b = f = l.createElement("link");
          ie(b), me(b, "link", t), b._p = new Promise(function(E, $) {
            b.onload = E, b.onerror = $;
          }), b.addEventListener("load", function() {
            m.loading |= 1;
          }), b.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, du(f, e, l);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: m
        }, i.set(c, f);
      }
    }
  }
  function qg(t, e) {
    Zn.X(t, e);
    var n = Nl;
    if (n && t) {
      var l = al(n).hoistableScripts, i = Ul(t), c = l.get(i);
      c || (c = n.querySelector(Hr(i)), c || (t = Q({ src: t, async: !0 }, e), (e = Ie.get(i)) && Ic(t, e), c = n.createElement("script"), ie(c), me(c, "link", t), n.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, l.set(i, c));
    }
  }
  function Yg(t, e) {
    Zn.M(t, e);
    var n = Nl;
    if (n && t) {
      var l = al(n).hoistableScripts, i = Ul(t), c = l.get(i);
      c || (c = n.querySelector(Hr(i)), c || (t = Q({ src: t, async: !0, type: "module" }, e), (e = Ie.get(i)) && Ic(t, e), c = n.createElement("script"), ie(c), me(c, "link", t), n.head.appendChild(c)), c = {
        type: "script",
        instance: c,
        count: 1,
        state: null
      }, l.set(i, c));
    }
  }
  function zm(t, e, n, l) {
    var i = (i = _e.current) ? fu(i) : null;
    if (!i) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (e = Bl(n.href), n = al(
          i
        ).hoistableStyles, l = n.get(e), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = Bl(n.href);
          var c = al(
            i
          ).hoistableStyles, f = c.get(t);
          if (f || (i = i.ownerDocument || i, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, c.set(t, f), (c = i.querySelector(
            Ur(t)
          )) && !c._p && (f.instance = c, f.state.loading = 5), Ie.has(t) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Ie.set(t, n), c || Vg(
            i,
            t,
            n,
            f.state
          ))), e && l === null)
            throw Error(o(528, ""));
          return f;
        }
        if (e && l !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Ul(n), n = al(
          i
        ).hoistableScripts, l = n.get(e), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, t));
    }
  }
  function Bl(t) {
    return 'href="' + Ve(t) + '"';
  }
  function Ur(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Dm(t) {
    return Q({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Vg(t, e, n, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"), l.preload = e, e.addEventListener("load", function() {
      return l.loading |= 1;
    }), e.addEventListener("error", function() {
      return l.loading |= 2;
    }), me(e, "link", n), ie(e), t.head.appendChild(e));
  }
  function Ul(t) {
    return '[src="' + Ve(t) + '"]';
  }
  function Hr(t) {
    return "script[async]" + t;
  }
  function wm(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var l = t.querySelector(
            'style[data-href~="' + Ve(n.href) + '"]'
          );
          if (l)
            return e.instance = l, ie(l), l;
          var i = Q({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (t.ownerDocument || t).createElement(
            "style"
          ), ie(l), me(l, "style", i), du(l, n.precedence, t), e.instance = l;
        case "stylesheet":
          i = Bl(n.href);
          var c = t.querySelector(
            Ur(i)
          );
          if (c)
            return e.state.loading |= 4, e.instance = c, ie(c), c;
          l = Dm(n), (i = Ie.get(i)) && Pc(l, i), c = (t.ownerDocument || t).createElement("link"), ie(c);
          var f = c;
          return f._p = new Promise(function(m, b) {
            f.onload = m, f.onerror = b;
          }), me(c, "link", l), e.state.loading |= 4, du(c, n.precedence, t), e.instance = c;
        case "script":
          return c = Ul(n.src), (i = t.querySelector(
            Hr(c)
          )) ? (e.instance = i, ie(i), i) : (l = n, (i = Ie.get(c)) && (l = Q({}, n), Ic(l, i)), t = t.ownerDocument || t, i = t.createElement("script"), ie(i), me(i, "link", l), t.head.appendChild(i), e.instance = i);
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" && !(e.state.loading & 4) && (l = e.instance, e.state.loading |= 4, du(l, n.precedence, t));
    return e.instance;
  }
  function du(t, e, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), i = l.length ? l[l.length - 1] : null, c = i, f = 0; f < l.length; f++) {
      var m = l[f];
      if (m.dataset.precedence === e) c = m;
      else if (c !== i) break;
    }
    c ? c.parentNode.insertBefore(t, c.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function Pc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Ic(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var hu = null;
  function Nm(t, e, n) {
    if (hu === null) {
      var l = /* @__PURE__ */ new Map(), i = hu = /* @__PURE__ */ new Map();
      i.set(n, l);
    } else
      i = hu, l = i.get(n), l || (l = /* @__PURE__ */ new Map(), i.set(n, l));
    if (l.has(t)) return l;
    for (l.set(t, null), n = n.getElementsByTagName(t), i = 0; i < n.length; i++) {
      var c = n[i];
      if (!(c[Wl] || c[ye] || t === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = c.getAttribute(e) || "";
        f = t + f;
        var m = l.get(f);
        m ? m.push(c) : l.set(f, [c]);
      }
    }
    return l;
  }
  function Bm(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Gg(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function Um(t) {
    return !(t.type === "stylesheet" && !(t.state.loading & 3));
  }
  var $r = null;
  function Xg() {
  }
  function Qg(t, e, n) {
    if ($r === null) throw Error(o(475));
    var l = $r;
    if (e.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && !(e.state.loading & 4)) {
      if (e.instance === null) {
        var i = Bl(n.href), c = t.querySelector(
          Ur(i)
        );
        if (c) {
          t = c._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = mu.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = c, ie(c);
          return;
        }
        c = t.ownerDocument || t, n = Dm(n), (i = Ie.get(i)) && Pc(n, i), c = c.createElement("link"), ie(c);
        var f = c;
        f._p = new Promise(function(m, b) {
          f.onload = m, f.onerror = b;
        }), me(c, "link", n), e.instance = c;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && !(e.state.loading & 3) && (l.count++, e = mu.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  function Kg() {
    if ($r === null) throw Error(o(475));
    var t = $r;
    return t.stylesheets && t.count === 0 && ts(t, t.stylesheets), 0 < t.count ? function(e) {
      var n = setTimeout(function() {
        if (t.stylesheets && ts(t, t.stylesheets), t.unsuspend) {
          var l = t.unsuspend;
          t.unsuspend = null, l();
        }
      }, 6e4);
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(n);
      };
    } : null;
  }
  function mu() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) ts(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var pu = null;
  function ts(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, pu = /* @__PURE__ */ new Map(), e.forEach(Zg, t), pu = null, mu.call(t));
  }
  function Zg(t, e) {
    if (!(e.state.loading & 4)) {
      var n = pu.get(t);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), pu.set(t, n);
        for (var i = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), c = 0; c < i.length; c++) {
          var f = i[c];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), l = f);
        }
        l && n.set(null, l);
      }
      i = e.instance, f = i.getAttribute("data-precedence"), c = n.get(f) || l, c === l && n.set(null, i), n.set(f, i), this.count++, l = mu.bind(this), i.addEventListener("load", l), i.addEventListener("error", l), c ? c.parentNode.insertBefore(i, c.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(i, t.firstChild)), e.state.loading |= 4;
    }
  }
  var jr = {
    $$typeof: w,
    Provider: null,
    Consumer: null,
    _currentValue: yt,
    _currentValue2: yt,
    _threadCount: 0
  };
  function Jg(t, e, n, l, i, c, f, m) {
    this.tag = 1, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = eo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = eo(0), this.hiddenUpdates = eo(null), this.identifierPrefix = l, this.onUncaughtError = i, this.onCaughtError = c, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Hm(t, e, n, l, i, c, f, m, b, E, $, G) {
    return t = new Jg(
      t,
      e,
      n,
      f,
      m,
      b,
      E,
      G
    ), e = 1, c === !0 && (e |= 24), c = Fe(3, null, null, e), t.current = c, c.stateNode = t, e = wo(), e.refCount++, t.pooledCache = e, e.refCount++, c.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: e
    }, dc(c), t;
  }
  function $m(t) {
    return t ? (t = hl, t) : hl;
  }
  function jm(t, e, n, l, i, c) {
    i = $m(i), l.context === null ? l.context = i : l.pendingContext = i, l = sa(e), l.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (l.callback = c), n = fa(t, l, e), n !== null && (Ce(n, t, e), Tr(n, t, e));
  }
  function km(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function es(t, e) {
    km(t, e), (t = t.alternate) && km(t, e);
  }
  function Lm(t) {
    if (t.tag === 13) {
      var e = aa(t, 67108864);
      e !== null && Ce(e, t, 67108864), es(t, 67108864);
    }
  }
  var yu = !0;
  function Wg(t, e, n, l) {
    var i = L.T;
    L.T = null;
    var c = I.p;
    try {
      I.p = 2, ns(t, e, n, l);
    } finally {
      I.p = c, L.T = i;
    }
  }
  function Fg(t, e, n, l) {
    var i = L.T;
    L.T = null;
    var c = I.p;
    try {
      I.p = 8, ns(t, e, n, l);
    } finally {
      I.p = c, L.T = i;
    }
  }
  function ns(t, e, n, l) {
    if (yu) {
      var i = as(l);
      if (i === null)
        Gc(
          t,
          e,
          l,
          gu,
          n
        ), Ym(t, l);
      else if (Ig(
        i,
        t,
        e,
        n,
        l
      ))
        l.stopPropagation();
      else if (Ym(t, l), e & 4 && -1 < Pg.indexOf(t)) {
        for (; i !== null; ) {
          var c = nl(i);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                  var f = Oa(c.pendingLanes);
                  if (f !== 0) {
                    var m = c;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; f; ) {
                      var b = 1 << 31 - we(f);
                      m.entanglements[1] |= b, f &= ~b;
                    }
                    En(c), !(Xt & 6) && (tu = ze() + 500, wr(0));
                  }
                }
                break;
              case 13:
                m = aa(c, 2), m !== null && Ce(m, c, 2), au(), es(c, 2);
            }
          if (c = as(l), c === null && Gc(
            t,
            e,
            l,
            gu,
            n
          ), c === i) break;
          i = c;
        }
        i !== null && l.stopPropagation();
      } else
        Gc(
          t,
          e,
          l,
          null,
          n
        );
    }
  }
  function as(t) {
    return t = oo(t), ls(t);
  }
  var gu = null;
  function ls(t) {
    if (gu = null, t = Ma(t), t !== null) {
      var e = et(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = ft(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return gu = t, null;
  }
  function qm(t) {
    switch (t) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (di()) {
          case Se:
            return 2;
          case Yt:
            return 8;
          case fe:
          case qe:
            return 32;
          case tl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var rs = !1, va = null, ba = null, Sa = null, kr = /* @__PURE__ */ new Map(), Lr = /* @__PURE__ */ new Map(), Ta = [], Pg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ym(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        va = null;
        break;
      case "dragenter":
      case "dragleave":
        ba = null;
        break;
      case "mouseover":
      case "mouseout":
        Sa = null;
        break;
      case "pointerover":
      case "pointerout":
        kr.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Lr.delete(e.pointerId);
    }
  }
  function qr(t, e, n, l, i, c) {
    return t === null || t.nativeEvent !== c ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: c,
      targetContainers: [i]
    }, e !== null && (e = nl(e), e !== null && Lm(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, i !== null && e.indexOf(i) === -1 && e.push(i), t);
  }
  function Ig(t, e, n, l, i) {
    switch (e) {
      case "focusin":
        return va = qr(
          va,
          t,
          e,
          n,
          l,
          i
        ), !0;
      case "dragenter":
        return ba = qr(
          ba,
          t,
          e,
          n,
          l,
          i
        ), !0;
      case "mouseover":
        return Sa = qr(
          Sa,
          t,
          e,
          n,
          l,
          i
        ), !0;
      case "pointerover":
        var c = i.pointerId;
        return kr.set(
          c,
          qr(
            kr.get(c) || null,
            t,
            e,
            n,
            l,
            i
          )
        ), !0;
      case "gotpointercapture":
        return c = i.pointerId, Lr.set(
          c,
          qr(
            Lr.get(c) || null,
            t,
            e,
            n,
            l,
            i
          )
        ), !0;
    }
    return !1;
  }
  function Vm(t) {
    var e = Ma(t.target);
    if (e !== null) {
      var n = et(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = ft(n), e !== null) {
            t.blockedOn = e, K0(t.priority, function() {
              if (n.tag === 13) {
                var l = $e(), i = aa(n, l);
                i !== null && Ce(i, n, l), es(n, l);
              }
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
  function vu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = as(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        uo = l, n.target.dispatchEvent(l), uo = null;
      } else
        return e = nl(n), e !== null && Lm(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function Gm(t, e, n) {
    vu(t) && n.delete(e);
  }
  function tv() {
    rs = !1, va !== null && vu(va) && (va = null), ba !== null && vu(ba) && (ba = null), Sa !== null && vu(Sa) && (Sa = null), kr.forEach(Gm), Lr.forEach(Gm);
  }
  function bu(t, e) {
    t.blockedOn === e && (t.blockedOn = null, rs || (rs = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      tv
    )));
  }
  var Su = null;
  function Xm(t) {
    Su !== t && (Su = t, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        Su === t && (Su = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], l = t[e + 1], i = t[e + 2];
          if (typeof l != "function") {
            if (ls(l || n) === null)
              continue;
            break;
          }
          var c = nl(n);
          c !== null && (t.splice(e, 3), e -= 3, Zo(
            c,
            {
              pending: !0,
              data: i,
              method: n.method,
              action: l
            },
            l,
            i
          ));
        }
      }
    ));
  }
  function Yr(t) {
    function e(b) {
      return bu(b, t);
    }
    va !== null && bu(va, t), ba !== null && bu(ba, t), Sa !== null && bu(Sa, t), kr.forEach(e), Lr.forEach(e);
    for (var n = 0; n < Ta.length; n++) {
      var l = Ta[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < Ta.length && (n = Ta[0], n.blockedOn === null); )
      Vm(n), n.blockedOn === null && Ta.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var i = n[l], c = n[l + 1], f = i[xe] || null;
        if (typeof c == "function")
          f || Xm(n);
        else if (f) {
          var m = null;
          if (c && c.hasAttribute("formAction")) {
            if (i = c, f = c[xe] || null)
              m = f.formAction;
            else if (ls(i) !== null) continue;
          } else m = f.action;
          typeof m == "function" ? n[l + 1] = m : (n.splice(l, 3), l -= 3), Xm(n);
        }
      }
  }
  function is(t) {
    this._internalRoot = t;
  }
  Tu.prototype.render = is.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(o(409));
    var n = e.current, l = $e();
    jm(n, l, t, e, null, null);
  }, Tu.prototype.unmount = is.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      t.tag === 0 && zl(), jm(t.current, 2, null, t, null, null), au(), e[el] = null;
    }
  };
  function Tu(t) {
    this._internalRoot = t;
  }
  Tu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = bf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Ta.length && e !== 0 && e < Ta[n].priority; n++) ;
      Ta.splice(n, 0, t), n === 0 && Vm(t);
    }
  };
  var Qm = r.version;
  if (Qm !== "19.0.0")
    throw Error(
      o(
        527,
        Qm,
        "19.0.0"
      )
    );
  I.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
    return t = Y(e), t = t !== null ? nt(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var ev = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: L,
    findFiberByHostInstance: Ma,
    reconcilerVersion: "19.0.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cu.isDisabled && Cu.supportsFiber)
      try {
        Kl = Cu.inject(
          ev
        ), De = Cu;
      } catch {
      }
  }
  return Gr.createRoot = function(t, e) {
    if (!s(t)) throw Error(o(299));
    var n = !1, l = "", i = ch, c = sh, f = fh, m = null;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (i = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (m = e.unstable_transitionCallbacks)), e = Hm(
      t,
      1,
      !1,
      null,
      null,
      n,
      l,
      i,
      c,
      f,
      m,
      null
    ), t[el] = e.current, Vc(
      t.nodeType === 8 ? t.parentNode : t
    ), new is(e);
  }, Gr.hydrateRoot = function(t, e, n) {
    if (!s(t)) throw Error(o(299));
    var l = !1, i = "", c = ch, f = sh, m = fh, b = null, E = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (b = n.unstable_transitionCallbacks), n.formState !== void 0 && (E = n.formState)), e = Hm(
      t,
      1,
      !0,
      e,
      n ?? null,
      l,
      i,
      c,
      f,
      m,
      b,
      E
    ), e.context = $m(null), n = e.current, l = $e(), i = sa(l), i.callback = null, fa(n, i, l), e.current.lanes = l, Jl(e, l), En(e), t[el] = e.current, Vc(t), new Tu(e);
  }, Gr.version = "19.0.0", Gr;
}
var np;
function hv() {
  if (np) return os.exports;
  np = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), os.exports = dv(), os.exports;
}
var mv = hv();
const pv = 30, LT = {
  electricity: {
    unit: "kgCO2e/kWh",
    value: 0.4,
    min: 0.2,
    max: 0.6
  }
};
function yv(a) {
  let r = a;
  return () => {
    r = r + 1831565813 | 0;
    let u = Math.imul(r ^ r >>> 15, 1 | r);
    return u = u + Math.imul(u ^ u >>> 7, 61 | u) ^ u, ((u ^ u >>> 14) >>> 0) / 4294967296;
  };
}
const gv = [
  // Gate auxiliary power: aircraft APU/ground-power use on stands. Pier B stands have fixed power available.
  { categoryId: "gate-aux-power", zoneId: "PIER-B", perDay: 14, opHours: [1, 2.2], idleShare: [0.4, 0.7], rate: 60, energyType: "electricity", alternativeAvailable: !0, safetyCritical: !1, missingEvery: 37, derivedEvery: 9 },
  { categoryId: "gate-aux-power", zoneId: "PIER-C", perDay: 8, opHours: [0.8, 1.7], idleShare: [0.05, 0.2], rate: 60, energyType: "electricity", alternativeAvailable: !0, safetyCritical: !1, missingEvery: 41, derivedEvery: 9 },
  { categoryId: "terminal-hvac", zoneId: "ZONE-A3", perDay: 1, opHours: [16, 20], idleShare: [0.05, 0.15], rate: 90, energyType: "electricity", alternativeAvailable: !0, safetyCritical: !1, missingEvery: 11, derivedEvery: 4 },
  { categoryId: "terminal-hvac", zoneId: "ZONE-A1", perDay: 1, opHours: [20, 24], idleShare: [0, 0.05], rate: 260, energyType: "electricity", alternativeAvailable: !1, safetyCritical: !1, missingEvery: 0, derivedEvery: 5 },
  { categoryId: "ground-vehicles", zoneId: "APRON-EAST", perDay: 6, opHours: [3, 5], idleShare: [0.15, 0.3], rate: 4.5, energyType: "diesel", alternativeAvailable: !0, safetyCritical: !1, missingEvery: 29, derivedEvery: 6 },
  { categoryId: "ground-vehicles", zoneId: "APRON-EMERG", perDay: 2, opHours: [1, 3], idleShare: [0.3, 0.6], rate: 6, energyType: "diesel", alternativeAvailable: !0, safetyCritical: !0, missingEvery: 0, derivedEvery: 5 },
  { categoryId: "terminal-lighting", zoneId: "ZONE-A3", perDay: 1, opHours: [16, 19], idleShare: [0.2, 0.4], rate: 35, energyType: "electricity", alternativeAvailable: !0, safetyCritical: !1, missingEvery: 17, derivedEvery: 3 },
  { categoryId: "terminal-lighting", zoneId: "EXIT-PATHS", perDay: 1, opHours: [24, 24], idleShare: [0.9, 1], rate: 12, energyType: "electricity", alternativeAvailable: !0, safetyCritical: !0, missingEvery: 0, derivedEvery: 0 },
  { categoryId: "passenger-transport", zoneId: "SHUTTLE-LOOP", perDay: 4, opHours: [5, 8], idleShare: [0.05, 0.15], rate: 5.5, energyType: "diesel", alternativeAvailable: !1, safetyCritical: !1, missingEvery: 0, derivedEvery: 7 }
], ap = (a) => Math.round(a * 100) / 100;
function vv(a = 2310) {
  const r = yv(a), u = [];
  let o = 0;
  for (const s of gv)
    for (let d = 0; d < pv; d++)
      for (let h = 0; h < s.perDay; h++) {
        o++;
        const p = s.opHours[0] + r() * (s.opHours[1] - s.opHours[0]), v = s.idleShare[0] + r() * (s.idleShare[1] - s.idleShare[0]), y = s.missingEvery > 0 && o % s.missingEvery === 0, T = s.derivedEvery > 0 && o % s.derivedEvery === 0;
        u.push({
          recordId: `R-${String(o).padStart(5, "0")}`,
          day: d,
          categoryId: s.categoryId,
          zoneId: s.zoneId,
          operatingHours: y ? null : ap(p),
          idleHours: y ? null : ap(p * v),
          rate: s.rate,
          rateUnit: s.energyType === "electricity" ? "kWh/h" : "L/h",
          energyType: s.energyType,
          alternativeAvailable: s.alternativeAvailable,
          safetyCritical: s.safetyCritical,
          quality: y ? "missing" : T ? "derived" : "measured"
        });
      }
  return u;
}
vv();
const bv = 1, Sv = {
  analysisStarted: "acp.v1.analysis-started",
  analysisCompleted: "acp.v1.analysis-completed",
  analysisFailed: "acp.v1.analysis-failed",
  recommendationSelected: "acp.v1.recommendation-selected"
};
function Tv(a, r, u) {
  a.dispatchEvent(new CustomEvent(r, { detail: u, bubbles: !0, composed: !0 }));
}
var B = Vs();
const ql = /* @__PURE__ */ lv(B), As = /* @__PURE__ */ av({
  __proto__: null,
  default: ql
}, [B]), ei = {
  black: "#000",
  white: "#fff"
}, Hl = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, $l = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, jl = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, kl = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Ll = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Xr = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Cv = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function Fa(a, ...r) {
  const u = new URL(`https://mui.com/production-error/?code=${a}`);
  return r.forEach((o) => u.searchParams.append("args[]", o)), `Minified MUI error #${a}; visit ${u} for the full message.`;
}
const Pn = "$$material";
function wu() {
  return wu = Object.assign ? Object.assign.bind() : function(a) {
    for (var r = 1; r < arguments.length; r++) {
      var u = arguments[r];
      for (var o in u) ({}).hasOwnProperty.call(u, o) && (a[o] = u[o]);
    }
    return a;
  }, wu.apply(null, arguments);
}
function Ev(a) {
  if (a.sheet)
    return a.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === a)
      return document.styleSheets[r];
}
function Av(a) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", a.key), a.nonce !== void 0 && r.setAttribute("nonce", a.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var xv = /* @__PURE__ */ function() {
  function a(u) {
    var o = this;
    this._insertTag = function(s) {
      var d;
      o.tags.length === 0 ? o.insertionPoint ? d = o.insertionPoint.nextSibling : o.prepend ? d = o.container.firstChild : d = o.before : d = o.tags[o.tags.length - 1].nextSibling, o.container.insertBefore(s, d), o.tags.push(s);
    }, this.isSpeedy = u.speedy === void 0 ? !0 : u.speedy, this.tags = [], this.ctr = 0, this.nonce = u.nonce, this.key = u.key, this.container = u.container, this.prepend = u.prepend, this.insertionPoint = u.insertionPoint, this.before = null;
  }
  var r = a.prototype;
  return r.hydrate = function(o) {
    o.forEach(this._insertTag);
  }, r.insert = function(o) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Av(this));
    var s = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var d = Ev(s);
      try {
        d.insertRule(o, d.cssRules.length);
      } catch {
      }
    } else
      s.appendChild(document.createTextNode(o));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(o) {
      var s;
      return (s = o.parentNode) == null ? void 0 : s.removeChild(o);
    }), this.tags = [], this.ctr = 0;
  }, a;
}(), be = "-ms-", Nu = "-moz-", Rt = "-webkit-", Wp = "comm", Gs = "rule", Xs = "decl", Ov = "@import", Fp = "@keyframes", Mv = "@layer", Rv = Math.abs, ju = String.fromCharCode, _v = Object.assign;
function zv(a, r) {
  return pe(a, 0) ^ 45 ? (((r << 2 ^ pe(a, 0)) << 2 ^ pe(a, 1)) << 2 ^ pe(a, 2)) << 2 ^ pe(a, 3) : 0;
}
function Pp(a) {
  return a.trim();
}
function Dv(a, r) {
  return (a = r.exec(a)) ? a[0] : a;
}
function _t(a, r, u) {
  return a.replace(r, u);
}
function xs(a, r) {
  return a.indexOf(r);
}
function pe(a, r) {
  return a.charCodeAt(r) | 0;
}
function ni(a, r, u) {
  return a.slice(r, u);
}
function xn(a) {
  return a.length;
}
function Qs(a) {
  return a.length;
}
function Eu(a, r) {
  return r.push(a), a;
}
function wv(a, r) {
  return a.map(r).join("");
}
var ku = 1, Gl = 1, Ip = 0, Re = 0, ne = 0, Xl = "";
function Lu(a, r, u, o, s, d, h) {
  return { value: a, root: r, parent: u, type: o, props: s, children: d, line: ku, column: Gl, length: h, return: "" };
}
function Qr(a, r) {
  return _v(Lu("", null, null, "", null, null, 0), a, { length: -a.length }, r);
}
function Nv() {
  return ne;
}
function Bv() {
  return ne = Re > 0 ? pe(Xl, --Re) : 0, Gl--, ne === 10 && (Gl = 1, ku--), ne;
}
function ke() {
  return ne = Re < Ip ? pe(Xl, Re++) : 0, Gl++, ne === 10 && (Gl = 1, ku++), ne;
}
function Rn() {
  return pe(Xl, Re);
}
function Ou() {
  return Re;
}
function ri(a, r) {
  return ni(Xl, a, r);
}
function ai(a) {
  switch (a) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function t0(a) {
  return ku = Gl = 1, Ip = xn(Xl = a), Re = 0, [];
}
function e0(a) {
  return Xl = "", a;
}
function Mu(a) {
  return Pp(ri(Re - 1, Os(a === 91 ? a + 2 : a === 40 ? a + 1 : a)));
}
function Uv(a) {
  for (; (ne = Rn()) && ne < 33; )
    ke();
  return ai(a) > 2 || ai(ne) > 3 ? "" : " ";
}
function Hv(a, r) {
  for (; --r && ke() && !(ne < 48 || ne > 102 || ne > 57 && ne < 65 || ne > 70 && ne < 97); )
    ;
  return ri(a, Ou() + (r < 6 && Rn() == 32 && ke() == 32));
}
function Os(a) {
  for (; ke(); )
    switch (ne) {
      // ] ) " '
      case a:
        return Re;
      // " '
      case 34:
      case 39:
        a !== 34 && a !== 39 && Os(ne);
        break;
      // (
      case 40:
        a === 41 && Os(a);
        break;
      // \
      case 92:
        ke();
        break;
    }
  return Re;
}
function $v(a, r) {
  for (; ke() && a + ne !== 57; )
    if (a + ne === 84 && Rn() === 47)
      break;
  return "/*" + ri(r, Re - 1) + "*" + ju(a === 47 ? a : ke());
}
function jv(a) {
  for (; !ai(Rn()); )
    ke();
  return ri(a, Re);
}
function kv(a) {
  return e0(Ru("", null, null, null, [""], a = t0(a), 0, [0], a));
}
function Ru(a, r, u, o, s, d, h, p, v) {
  for (var y = 0, T = 0, x = h, R = 0, w = 0, M = 0, A = 1, H = 1, K = 1, J = 0, F = "", V = s, z = d, j = o, P = F; H; )
    switch (M = J, J = ke()) {
      // (
      case 40:
        if (M != 108 && pe(P, x - 1) == 58) {
          xs(P += _t(Mu(J), "&", "&\f"), "&\f") != -1 && (K = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        P += Mu(J);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        P += Uv(M);
        break;
      // \
      case 92:
        P += Hv(Ou() - 1, 7);
        continue;
      // /
      case 47:
        switch (Rn()) {
          case 42:
          case 47:
            Eu(Lv($v(ke(), Ou()), r, u), v);
            break;
          default:
            P += "/";
        }
        break;
      // {
      case 123 * A:
        p[y++] = xn(P) * K;
      // } ; \0
      case 125 * A:
      case 59:
      case 0:
        switch (J) {
          // \0 }
          case 0:
          case 125:
            H = 0;
          // ;
          case 59 + T:
            K == -1 && (P = _t(P, /\f/g, "")), w > 0 && xn(P) - x && Eu(w > 32 ? rp(P + ";", o, u, x - 1) : rp(_t(P, " ", "") + ";", o, u, x - 2), v);
            break;
          // @ ;
          case 59:
            P += ";";
          // { rule/at-rule
          default:
            if (Eu(j = lp(P, r, u, y, T, s, p, F, V = [], z = [], x), d), J === 123)
              if (T === 0)
                Ru(P, r, j, j, V, d, x, p, z);
              else
                switch (R === 99 && pe(P, 3) === 110 ? 100 : R) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ru(a, j, j, o && Eu(lp(a, j, j, 0, 0, s, p, F, s, V = [], x), z), s, z, x, p, o ? V : z);
                    break;
                  default:
                    Ru(P, j, j, j, [""], z, 0, p, z);
                }
        }
        y = T = w = 0, A = K = 1, F = P = "", x = h;
        break;
      // :
      case 58:
        x = 1 + xn(P), w = M;
      default:
        if (A < 1) {
          if (J == 123)
            --A;
          else if (J == 125 && A++ == 0 && Bv() == 125)
            continue;
        }
        switch (P += ju(J), J * A) {
          // &
          case 38:
            K = T > 0 ? 1 : (P += "\f", -1);
            break;
          // ,
          case 44:
            p[y++] = (xn(P) - 1) * K, K = 1;
            break;
          // @
          case 64:
            Rn() === 45 && (P += Mu(ke())), R = Rn(), T = x = xn(F = P += jv(Ou())), J++;
            break;
          // -
          case 45:
            M === 45 && xn(P) == 2 && (A = 0);
        }
    }
  return d;
}
function lp(a, r, u, o, s, d, h, p, v, y, T) {
  for (var x = s - 1, R = s === 0 ? d : [""], w = Qs(R), M = 0, A = 0, H = 0; M < o; ++M)
    for (var K = 0, J = ni(a, x + 1, x = Rv(A = h[M])), F = a; K < w; ++K)
      (F = Pp(A > 0 ? R[K] + " " + J : _t(J, /&\f/g, R[K]))) && (v[H++] = F);
  return Lu(a, r, u, s === 0 ? Gs : p, v, y, T);
}
function Lv(a, r, u) {
  return Lu(a, r, u, Wp, ju(Nv()), ni(a, 2, -2), 0);
}
function rp(a, r, u, o) {
  return Lu(a, r, u, Xs, ni(a, 0, o), ni(a, o + 1, -1), o);
}
function Yl(a, r) {
  for (var u = "", o = Qs(a), s = 0; s < o; s++)
    u += r(a[s], s, a, r) || "";
  return u;
}
function qv(a, r, u, o) {
  switch (a.type) {
    case Mv:
      if (a.children.length) break;
    case Ov:
    case Xs:
      return a.return = a.return || a.value;
    case Wp:
      return "";
    case Fp:
      return a.return = a.value + "{" + Yl(a.children, o) + "}";
    case Gs:
      a.value = a.props.join(",");
  }
  return xn(u = Yl(a.children, o)) ? a.return = a.value + "{" + u + "}" : "";
}
function Yv(a) {
  var r = Qs(a);
  return function(u, o, s, d) {
    for (var h = "", p = 0; p < r; p++)
      h += a[p](u, o, s, d) || "";
    return h;
  };
}
function Vv(a) {
  return function(r) {
    r.root || (r = r.return) && a(r);
  };
}
function n0(a) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(u) {
    return r[u] === void 0 && (r[u] = a(u)), r[u];
  };
}
var Gv = function(r, u, o) {
  for (var s = 0, d = 0; s = d, d = Rn(), s === 38 && d === 12 && (u[o] = 1), !ai(d); )
    ke();
  return ri(r, Re);
}, Xv = function(r, u) {
  var o = -1, s = 44;
  do
    switch (ai(s)) {
      case 0:
        s === 38 && Rn() === 12 && (u[o] = 1), r[o] += Gv(Re - 1, u, o);
        break;
      case 2:
        r[o] += Mu(s);
        break;
      case 4:
        if (s === 44) {
          r[++o] = Rn() === 58 ? "&\f" : "", u[o] = r[o].length;
          break;
        }
      // fallthrough
      default:
        r[o] += ju(s);
    }
  while (s = ke());
  return r;
}, Qv = function(r, u) {
  return e0(Xv(t0(r), u));
}, ip = /* @__PURE__ */ new WeakMap(), Kv = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var u = r.value, o = r.parent, s = r.column === o.column && r.line === o.line; o.type !== "rule"; )
      if (o = o.parent, !o) return;
    if (!(r.props.length === 1 && u.charCodeAt(0) !== 58 && !ip.get(o)) && !s) {
      ip.set(r, !0);
      for (var d = [], h = Qv(u, d), p = o.props, v = 0, y = 0; v < h.length; v++)
        for (var T = 0; T < p.length; T++, y++)
          r.props[y] = d[v] ? h[v].replace(/&\f/g, p[T]) : p[T] + " " + h[v];
    }
  }
}, Zv = function(r) {
  if (r.type === "decl") {
    var u = r.value;
    // charcode for l
    u.charCodeAt(0) === 108 && // charcode for b
    u.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function a0(a, r) {
  switch (zv(a, r)) {
    // color-adjust
    case 5103:
      return Rt + "print-" + a + a;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Rt + a + a;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Rt + a + Nu + a + be + a + a;
    // flex, flex-direction
    case 6828:
    case 4268:
      return Rt + a + be + a + a;
    // order
    case 6165:
      return Rt + a + be + "flex-" + a + a;
    // align-items
    case 5187:
      return Rt + a + _t(a, /(\w+).+(:[^]+)/, Rt + "box-$1$2" + be + "flex-$1$2") + a;
    // align-self
    case 5443:
      return Rt + a + be + "flex-item-" + _t(a, /flex-|-self/, "") + a;
    // align-content
    case 4675:
      return Rt + a + be + "flex-line-pack" + _t(a, /align-content|flex-|-self/, "") + a;
    // flex-shrink
    case 5548:
      return Rt + a + be + _t(a, "shrink", "negative") + a;
    // flex-basis
    case 5292:
      return Rt + a + be + _t(a, "basis", "preferred-size") + a;
    // flex-grow
    case 6060:
      return Rt + "box-" + _t(a, "-grow", "") + Rt + a + be + _t(a, "grow", "positive") + a;
    // transition
    case 4554:
      return Rt + _t(a, /([^-])(transform)/g, "$1" + Rt + "$2") + a;
    // cursor
    case 6187:
      return _t(_t(_t(a, /(zoom-|grab)/, Rt + "$1"), /(image-set)/, Rt + "$1"), a, "") + a;
    // background, background-image
    case 5495:
    case 3959:
      return _t(a, /(image-set\([^]*)/, Rt + "$1$`$1");
    // justify-content
    case 4968:
      return _t(_t(a, /(.+:)(flex-)?(.*)/, Rt + "box-pack:$3" + be + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Rt + a + a;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return _t(a, /(.+)-inline(.+)/, Rt + "$1$2") + a;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (xn(a) - 1 - r > 6) switch (pe(a, r + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (pe(a, r + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return _t(a, /(.+:)(.+)-([^]+)/, "$1" + Rt + "$2-$3$1" + Nu + (pe(a, r + 3) == 108 ? "$3" : "$2-$3")) + a;
        // (s)tretch
        case 115:
          return ~xs(a, "stretch") ? a0(_t(a, "stretch", "fill-available"), r) + a : a;
      }
      break;
    // position: sticky
    case 4949:
      if (pe(a, r + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (pe(a, xn(a) - 3 - (~xs(a, "!important") && 10))) {
        // stic(k)y
        case 107:
          return _t(a, ":", ":" + Rt) + a;
        // (inline-)?fl(e)x
        case 101:
          return _t(a, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Rt + (pe(a, 14) === 45 ? "inline-" : "") + "box$3$1" + Rt + "$2$3$1" + be + "$2box$3") + a;
      }
      break;
    // writing-mode
    case 5936:
      switch (pe(a, r + 11)) {
        // vertical-l(r)
        case 114:
          return Rt + a + be + _t(a, /[svh]\w+-[tblr]{2}/, "tb") + a;
        // vertical-r(l)
        case 108:
          return Rt + a + be + _t(a, /[svh]\w+-[tblr]{2}/, "tb-rl") + a;
        // horizontal(-)tb
        case 45:
          return Rt + a + be + _t(a, /[svh]\w+-[tblr]{2}/, "lr") + a;
      }
      return Rt + a + be + a + a;
  }
  return a;
}
var Jv = function(r, u, o, s) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case Xs:
      r.return = a0(r.value, r.length);
      break;
    case Fp:
      return Yl([Qr(r, {
        value: _t(r.value, "@", "@" + Rt)
      })], s);
    case Gs:
      if (r.length) return wv(r.props, function(d) {
        switch (Dv(d, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Yl([Qr(r, {
              props: [_t(d, /:(read-\w+)/, ":" + Nu + "$1")]
            })], s);
          // :placeholder
          case "::placeholder":
            return Yl([Qr(r, {
              props: [_t(d, /:(plac\w+)/, ":" + Rt + "input-$1")]
            }), Qr(r, {
              props: [_t(d, /:(plac\w+)/, ":" + Nu + "$1")]
            }), Qr(r, {
              props: [_t(d, /:(plac\w+)/, be + "input-$1")]
            })], s);
        }
        return "";
      });
  }
}, Wv = [Jv], Fv = function(r) {
  var u = r.key;
  if (u === "css") {
    var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(o, function(A) {
      var H = A.getAttribute("data-emotion");
      H.indexOf(" ") !== -1 && (document.head.appendChild(A), A.setAttribute("data-s", ""));
    });
  }
  var s = r.stylisPlugins || Wv, d = {}, h, p = [];
  h = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + u + ' "]'),
    function(A) {
      for (var H = A.getAttribute("data-emotion").split(" "), K = 1; K < H.length; K++)
        d[H[K]] = !0;
      p.push(A);
    }
  );
  var v, y = [Kv, Zv];
  {
    var T, x = [qv, Vv(function(A) {
      T.insert(A);
    })], R = Yv(y.concat(s, x)), w = function(H) {
      return Yl(kv(H), R);
    };
    v = function(H, K, J, F) {
      T = J, w(H ? H + "{" + K.styles + "}" : K.styles), F && (M.inserted[K.name] = !0);
    };
  }
  var M = {
    key: u,
    sheet: new xv({
      key: u,
      container: h,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: d,
    registered: {},
    insert: v
  };
  return M.sheet.hydrate(p), M;
}, hs = { exports: {} }, zt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var up;
function Pv() {
  if (up) return zt;
  up = 1;
  var a = typeof Symbol == "function" && Symbol.for, r = a ? Symbol.for("react.element") : 60103, u = a ? Symbol.for("react.portal") : 60106, o = a ? Symbol.for("react.fragment") : 60107, s = a ? Symbol.for("react.strict_mode") : 60108, d = a ? Symbol.for("react.profiler") : 60114, h = a ? Symbol.for("react.provider") : 60109, p = a ? Symbol.for("react.context") : 60110, v = a ? Symbol.for("react.async_mode") : 60111, y = a ? Symbol.for("react.concurrent_mode") : 60111, T = a ? Symbol.for("react.forward_ref") : 60112, x = a ? Symbol.for("react.suspense") : 60113, R = a ? Symbol.for("react.suspense_list") : 60120, w = a ? Symbol.for("react.memo") : 60115, M = a ? Symbol.for("react.lazy") : 60116, A = a ? Symbol.for("react.block") : 60121, H = a ? Symbol.for("react.fundamental") : 60117, K = a ? Symbol.for("react.responder") : 60118, J = a ? Symbol.for("react.scope") : 60119;
  function F(z) {
    if (typeof z == "object" && z !== null) {
      var j = z.$$typeof;
      switch (j) {
        case r:
          switch (z = z.type, z) {
            case v:
            case y:
            case o:
            case d:
            case s:
            case x:
              return z;
            default:
              switch (z = z && z.$$typeof, z) {
                case p:
                case T:
                case M:
                case w:
                case h:
                  return z;
                default:
                  return j;
              }
          }
        case u:
          return j;
      }
    }
  }
  function V(z) {
    return F(z) === y;
  }
  return zt.AsyncMode = v, zt.ConcurrentMode = y, zt.ContextConsumer = p, zt.ContextProvider = h, zt.Element = r, zt.ForwardRef = T, zt.Fragment = o, zt.Lazy = M, zt.Memo = w, zt.Portal = u, zt.Profiler = d, zt.StrictMode = s, zt.Suspense = x, zt.isAsyncMode = function(z) {
    return V(z) || F(z) === v;
  }, zt.isConcurrentMode = V, zt.isContextConsumer = function(z) {
    return F(z) === p;
  }, zt.isContextProvider = function(z) {
    return F(z) === h;
  }, zt.isElement = function(z) {
    return typeof z == "object" && z !== null && z.$$typeof === r;
  }, zt.isForwardRef = function(z) {
    return F(z) === T;
  }, zt.isFragment = function(z) {
    return F(z) === o;
  }, zt.isLazy = function(z) {
    return F(z) === M;
  }, zt.isMemo = function(z) {
    return F(z) === w;
  }, zt.isPortal = function(z) {
    return F(z) === u;
  }, zt.isProfiler = function(z) {
    return F(z) === d;
  }, zt.isStrictMode = function(z) {
    return F(z) === s;
  }, zt.isSuspense = function(z) {
    return F(z) === x;
  }, zt.isValidElementType = function(z) {
    return typeof z == "string" || typeof z == "function" || z === o || z === y || z === d || z === s || z === x || z === R || typeof z == "object" && z !== null && (z.$$typeof === M || z.$$typeof === w || z.$$typeof === h || z.$$typeof === p || z.$$typeof === T || z.$$typeof === H || z.$$typeof === K || z.$$typeof === J || z.$$typeof === A);
  }, zt.typeOf = F, zt;
}
var op;
function Iv() {
  return op || (op = 1, hs.exports = Pv()), hs.exports;
}
var ms, cp;
function t1() {
  if (cp) return ms;
  cp = 1;
  var a = Iv(), r = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, u = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, o = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, s = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, d = {};
  d[a.ForwardRef] = o, d[a.Memo] = s;
  function h(M) {
    return a.isMemo(M) ? s : d[M.$$typeof] || r;
  }
  var p = Object.defineProperty, v = Object.getOwnPropertyNames, y = Object.getOwnPropertySymbols, T = Object.getOwnPropertyDescriptor, x = Object.getPrototypeOf, R = Object.prototype;
  function w(M, A, H) {
    if (typeof A != "string") {
      if (R) {
        var K = x(A);
        K && K !== R && w(M, K, H);
      }
      var J = v(A);
      y && (J = J.concat(y(A)));
      for (var F = h(M), V = h(A), z = 0; z < J.length; ++z) {
        var j = J[z];
        if (!u[j] && !(H && H[j]) && !(V && V[j]) && !(F && F[j])) {
          var P = T(A, j);
          try {
            p(M, j, P);
          } catch {
          }
        }
      }
    }
    return M;
  }
  return ms = w, ms;
}
t1();
var e1 = !0;
function l0(a, r, u) {
  var o = "";
  return u.split(" ").forEach(function(s) {
    a[s] !== void 0 ? r.push(a[s] + ";") : s && (o += s + " ");
  }), o;
}
var Ks = function(r, u, o) {
  var s = r.key + "-" + u.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (o === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  e1 === !1) && r.registered[s] === void 0 && (r.registered[s] = u.styles);
}, Zs = function(r, u, o) {
  Ks(r, u, o);
  var s = r.key + "-" + u.name;
  if (r.inserted[u.name] === void 0) {
    var d = u;
    do
      r.insert(u === d ? "." + s : "", d, r.sheet, !0), d = d.next;
    while (d !== void 0);
  }
};
function n1(a) {
  for (var r = 0, u, o = 0, s = a.length; s >= 4; ++o, s -= 4)
    u = a.charCodeAt(o) & 255 | (a.charCodeAt(++o) & 255) << 8 | (a.charCodeAt(++o) & 255) << 16 | (a.charCodeAt(++o) & 255) << 24, u = /* Math.imul(k, m): */
    (u & 65535) * 1540483477 + ((u >>> 16) * 59797 << 16), u ^= /* k >>> r: */
    u >>> 24, r = /* Math.imul(k, m): */
    (u & 65535) * 1540483477 + ((u >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (s) {
    case 3:
      r ^= (a.charCodeAt(o + 2) & 255) << 16;
    case 2:
      r ^= (a.charCodeAt(o + 1) & 255) << 8;
    case 1:
      r ^= a.charCodeAt(o) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var a1 = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, l1 = /[A-Z]|^ms/g, r1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, r0 = function(r) {
  return r.charCodeAt(1) === 45;
}, sp = function(r) {
  return r != null && typeof r != "boolean";
}, ps = /* @__PURE__ */ n0(function(a) {
  return r0(a) ? a : a.replace(l1, "-$&").toLowerCase();
}), fp = function(r, u) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof u == "string")
        return u.replace(r1, function(o, s, d) {
          return On = {
            name: s,
            styles: d,
            next: On
          }, s;
        });
  }
  return a1[r] !== 1 && !r0(r) && typeof u == "number" && u !== 0 ? u + "px" : u;
};
function li(a, r, u) {
  if (u == null)
    return "";
  var o = u;
  if (o.__emotion_styles !== void 0)
    return o;
  switch (typeof u) {
    case "boolean":
      return "";
    case "object": {
      var s = u;
      if (s.anim === 1)
        return On = {
          name: s.name,
          styles: s.styles,
          next: On
        }, s.name;
      var d = u;
      if (d.styles !== void 0) {
        var h = d.next;
        if (h !== void 0)
          for (; h !== void 0; )
            On = {
              name: h.name,
              styles: h.styles,
              next: On
            }, h = h.next;
        var p = d.styles + ";";
        return p;
      }
      return i1(a, r, u);
    }
    case "function": {
      if (a !== void 0) {
        var v = On, y = u(a);
        return On = v, li(a, r, y);
      }
      break;
    }
  }
  var T = u;
  if (r == null)
    return T;
  var x = r[T];
  return x !== void 0 ? x : T;
}
function i1(a, r, u) {
  var o = "";
  if (Array.isArray(u))
    for (var s = 0; s < u.length; s++)
      o += li(a, r, u[s]) + ";";
  else
    for (var d in u) {
      var h = u[d];
      if (typeof h != "object") {
        var p = h;
        r != null && r[p] !== void 0 ? o += d + "{" + r[p] + "}" : sp(p) && (o += ps(d) + ":" + fp(d, p) + ";");
      } else if (Array.isArray(h) && typeof h[0] == "string" && (r == null || r[h[0]] === void 0))
        for (var v = 0; v < h.length; v++)
          sp(h[v]) && (o += ps(d) + ":" + fp(d, h[v]) + ";");
      else {
        var y = li(a, r, h);
        switch (d) {
          case "animation":
          case "animationName": {
            o += ps(d) + ":" + y + ";";
            break;
          }
          default:
            o += d + "{" + y + "}";
        }
      }
    }
  return o;
}
var dp = /label:\s*([^\s;{]+)\s*(;|$)/g, On;
function ii(a, r, u) {
  if (a.length === 1 && typeof a[0] == "object" && a[0] !== null && a[0].styles !== void 0)
    return a[0];
  var o = !0, s = "";
  On = void 0;
  var d = a[0];
  if (d == null || d.raw === void 0)
    o = !1, s += li(u, r, d);
  else {
    var h = d;
    s += h[0];
  }
  for (var p = 1; p < a.length; p++)
    if (s += li(u, r, a[p]), o) {
      var v = d;
      s += v[p];
    }
  dp.lastIndex = 0;
  for (var y = "", T; (T = dp.exec(s)) !== null; )
    y += "-" + T[1];
  var x = n1(s) + y;
  return {
    name: x,
    styles: s,
    next: On
  };
}
var u1 = function(r) {
  return r();
}, i0 = As.useInsertionEffect ? As.useInsertionEffect : !1, u0 = i0 || u1, hp = i0 || B.useLayoutEffect, o0 = /* @__PURE__ */ B.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Fv({
    key: "css"
  }) : null
);
o0.Provider;
var Js = function(r) {
  return /* @__PURE__ */ B.forwardRef(function(u, o) {
    var s = B.useContext(o0);
    return r(u, s, o);
  });
}, ui = /* @__PURE__ */ B.createContext({}), Ws = {}.hasOwnProperty, Ms = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", o1 = function(r, u) {
  var o = {};
  for (var s in u)
    Ws.call(u, s) && (o[s] = u[s]);
  return o[Ms] = r, o;
}, c1 = function(r) {
  var u = r.cache, o = r.serialized, s = r.isStringTag;
  return Ks(u, o, s), u0(function() {
    return Zs(u, o, s);
  }), null;
}, s1 = /* @__PURE__ */ Js(function(a, r, u) {
  var o = a.css;
  typeof o == "string" && r.registered[o] !== void 0 && (o = r.registered[o]);
  var s = a[Ms], d = [o], h = "";
  typeof a.className == "string" ? h = l0(r.registered, d, a.className) : a.className != null && (h = a.className + " ");
  var p = ii(d, void 0, B.useContext(ui));
  h += r.key + "-" + p.name;
  var v = {};
  for (var y in a)
    Ws.call(a, y) && y !== "css" && y !== Ms && (v[y] = a[y]);
  return v.className = h, u && (v.ref = u), /* @__PURE__ */ B.createElement(B.Fragment, null, /* @__PURE__ */ B.createElement(c1, {
    cache: r,
    serialized: p,
    isStringTag: typeof s == "string"
  }), /* @__PURE__ */ B.createElement(s, v));
}), f1 = s1, mp = function(r, u) {
  var o = arguments;
  if (u == null || !Ws.call(u, "css"))
    return B.createElement.apply(void 0, o);
  var s = o.length, d = new Array(s);
  d[0] = f1, d[1] = o1(r, u);
  for (var h = 2; h < s; h++)
    d[h] = o[h];
  return B.createElement.apply(null, d);
};
(function(a) {
  var r;
  r || (r = a.JSX || (a.JSX = {}));
})(mp || (mp = {}));
var d1 = /* @__PURE__ */ Js(function(a, r) {
  var u = a.styles, o = ii([u], void 0, B.useContext(ui)), s = B.useRef();
  return hp(function() {
    var d = r.key + "-global", h = new r.sheet.constructor({
      key: d,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy
    }), p = !1, v = document.querySelector('style[data-emotion="' + d + " " + o.name + '"]');
    return r.sheet.tags.length && (h.before = r.sheet.tags[0]), v !== null && (p = !0, v.setAttribute("data-emotion", d), h.hydrate([v])), s.current = [h, p], function() {
      h.flush();
    };
  }, [r]), hp(function() {
    var d = s.current, h = d[0], p = d[1];
    if (p) {
      d[1] = !1;
      return;
    }
    if (o.next !== void 0 && Zs(r, o.next, !0), h.tags.length) {
      var v = h.tags[h.tags.length - 1].nextElementSibling;
      h.before = v, h.flush();
    }
    r.insert("", o, h, !1);
  }, [r, o.name]), null;
});
function oi() {
  for (var a = arguments.length, r = new Array(a), u = 0; u < a; u++)
    r[u] = arguments[u];
  return ii(r);
}
function Ia() {
  var a = oi.apply(void 0, arguments), r = "animation-" + a.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + a.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var h1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, m1 = /* @__PURE__ */ n0(
  function(a) {
    return h1.test(a) || a.charCodeAt(0) === 111 && a.charCodeAt(1) === 110 && a.charCodeAt(2) < 91;
  }
  /* Z+1 */
), p1 = m1, y1 = function(r) {
  return r !== "theme";
}, pp = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? p1 : y1;
}, yp = function(r, u, o) {
  var s;
  if (u) {
    var d = u.shouldForwardProp;
    s = r.__emotion_forwardProp && d ? function(h) {
      return r.__emotion_forwardProp(h) && d(h);
    } : d;
  }
  return typeof s != "function" && o && (s = r.__emotion_forwardProp), s;
}, g1 = function(r) {
  var u = r.cache, o = r.serialized, s = r.isStringTag;
  return Ks(u, o, s), u0(function() {
    return Zs(u, o, s);
  }), null;
}, v1 = function a(r, u) {
  var o = r.__emotion_real === r, s = o && r.__emotion_base || r, d, h;
  u !== void 0 && (d = u.label, h = u.target);
  var p = yp(r, u, o), v = p || pp(s), y = !v("as");
  return function() {
    var T = arguments, x = o && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (d !== void 0 && x.push("label:" + d + ";"), T[0] == null || T[0].raw === void 0)
      x.push.apply(x, T);
    else {
      var R = T[0];
      x.push(R[0]);
      for (var w = T.length, M = 1; M < w; M++)
        x.push(T[M], R[M]);
    }
    var A = Js(function(H, K, J) {
      var F = y && H.as || s, V = "", z = [], j = H;
      if (H.theme == null) {
        j = {};
        for (var P in H)
          j[P] = H[P];
        j.theme = B.useContext(ui);
      }
      typeof H.className == "string" ? V = l0(K.registered, z, H.className) : H.className != null && (V = H.className + " ");
      var at = ii(x.concat(z), K.registered, j);
      V += K.key + "-" + at.name, h !== void 0 && (V += " " + h);
      var L = y && p === void 0 ? pp(F) : v, Q = {};
      for (var tt in H)
        y && tt === "as" || L(tt) && (Q[tt] = H[tt]);
      return Q.className = V, J && (Q.ref = J), /* @__PURE__ */ B.createElement(B.Fragment, null, /* @__PURE__ */ B.createElement(g1, {
        cache: K,
        serialized: at,
        isStringTag: typeof F == "string"
      }), /* @__PURE__ */ B.createElement(F, Q));
    });
    return A.displayName = d !== void 0 ? d : "Styled(" + (typeof s == "string" ? s : s.displayName || s.name || "Component") + ")", A.defaultProps = r.defaultProps, A.__emotion_real = A, A.__emotion_base = s, A.__emotion_styles = x, A.__emotion_forwardProp = p, Object.defineProperty(A, "toString", {
      value: function() {
        return "." + h;
      }
    }), A.withComponent = function(H, K) {
      var J = a(H, wu({}, u, K, {
        shouldForwardProp: yp(A, K, !0)
      }));
      return J.apply(void 0, x);
    }, A;
  };
}, b1 = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Rs = v1.bind(null);
b1.forEach(function(a) {
  Rs[a] = Rs(a);
});
function S1(a) {
  return a == null || Object.keys(a).length === 0;
}
function c0(a) {
  const {
    styles: r,
    defaultTheme: u = {}
  } = a, o = typeof r == "function" ? (s) => r(S1(s) ? u : s) : r;
  return /* @__PURE__ */ Z.jsx(d1, {
    styles: o
  });
}
function T1(a, r) {
  return Rs(a, r);
}
function C1(a, r) {
  Array.isArray(a.__emotion_styles) && (a.__emotion_styles = r(a.__emotion_styles));
}
const gp = [];
function Aa(a) {
  return gp[0] = a, ii(gp);
}
var ys = { exports: {} }, Ht = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vp;
function E1() {
  if (vp) return Ht;
  vp = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), h = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), R = Symbol.for("react.view_transition"), w = Symbol.for("react.client.reference");
  function M(A) {
    if (typeof A == "object" && A !== null) {
      var H = A.$$typeof;
      switch (H) {
        case a:
          switch (A = A.type, A) {
            case u:
            case s:
            case o:
            case v:
            case y:
            case R:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case h:
                case p:
                case x:
                case T:
                  return A;
                case d:
                  return A;
                default:
                  return H;
              }
          }
        case r:
          return H;
      }
    }
  }
  return Ht.ContextConsumer = d, Ht.ContextProvider = h, Ht.Element = a, Ht.ForwardRef = p, Ht.Fragment = u, Ht.Lazy = x, Ht.Memo = T, Ht.Portal = r, Ht.Profiler = s, Ht.StrictMode = o, Ht.Suspense = v, Ht.SuspenseList = y, Ht.isContextConsumer = function(A) {
    return M(A) === d;
  }, Ht.isContextProvider = function(A) {
    return M(A) === h;
  }, Ht.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === a;
  }, Ht.isForwardRef = function(A) {
    return M(A) === p;
  }, Ht.isFragment = function(A) {
    return M(A) === u;
  }, Ht.isLazy = function(A) {
    return M(A) === x;
  }, Ht.isMemo = function(A) {
    return M(A) === T;
  }, Ht.isPortal = function(A) {
    return M(A) === r;
  }, Ht.isProfiler = function(A) {
    return M(A) === s;
  }, Ht.isStrictMode = function(A) {
    return M(A) === o;
  }, Ht.isSuspense = function(A) {
    return M(A) === v;
  }, Ht.isSuspenseList = function(A) {
    return M(A) === y;
  }, Ht.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === u || A === s || A === o || A === v || A === y || A === R || typeof A == "object" && A !== null && (A.$$typeof === x || A.$$typeof === T || A.$$typeof === h || A.$$typeof === d || A.$$typeof === p || A.$$typeof === w || A.getModuleId !== void 0);
  }, Ht.typeOf = M, Ht;
}
var bp;
function A1() {
  return bp || (bp = 1, ys.exports = /* @__PURE__ */ E1()), ys.exports;
}
var s0 = /* @__PURE__ */ A1();
function Mn(a) {
  if (typeof a != "object" || a === null)
    return !1;
  const r = Object.getPrototypeOf(a);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in a) && !(Symbol.iterator in a);
}
function f0(a) {
  if (/* @__PURE__ */ B.isValidElement(a) || s0.isValidElementType(a) || !Mn(a))
    return a;
  const r = {};
  return Object.keys(a).forEach((u) => {
    r[u] = f0(a[u]);
  }), r;
}
function Le(a, r, u = {
  clone: !0
}) {
  const o = u.clone ? {
    ...a
  } : a;
  return Mn(a) && Mn(r) && Object.keys(r).forEach((s) => {
    /* @__PURE__ */ B.isValidElement(r[s]) || s0.isValidElementType(r[s]) ? o[s] = r[s] : Mn(r[s]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(a, s) && Mn(a[s]) ? o[s] = Le(a[s], r[s], u) : u.clone ? o[s] = Mn(r[s]) ? f0(r[s]) : r[s] : o[s] = r[s];
  }), o;
}
const x1 = (a) => {
  const r = Object.keys(a).map((u) => ({
    key: u,
    val: a[u]
  })) || [];
  return r.sort((u, o) => u.val - o.val), r.reduce((u, o) => ({
    ...u,
    [o.key]: o.val
  }), {});
};
function O1(a) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: u = "px",
    step: o = 5,
    ...s
  } = a, d = x1(r), h = Object.keys(d);
  function p(R) {
    return `@media (min-width:${typeof r[R] == "number" ? r[R] : R}${u})`;
  }
  function v(R) {
    return `@media (max-width:${(typeof r[R] == "number" ? r[R] : R) - o / 100}${u})`;
  }
  function y(R, w) {
    const M = h.indexOf(w);
    return `@media (min-width:${typeof r[R] == "number" ? r[R] : R}${u}) and (max-width:${(M !== -1 && typeof r[h[M]] == "number" ? r[h[M]] : w) - o / 100}${u})`;
  }
  function T(R) {
    return h.indexOf(R) + 1 < h.length ? y(R, h[h.indexOf(R) + 1]) : p(R);
  }
  function x(R) {
    const w = h.indexOf(R);
    return w === 0 ? p(h[1]) : w === h.length - 1 ? v(h[w]) : y(R, h[h.indexOf(R) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: h,
    values: d,
    up: p,
    down: v,
    between: y,
    only: T,
    not: x,
    unit: u,
    ...s
  };
}
function Sp(a, r) {
  if (!a.containerQueries)
    return r;
  const u = Object.keys(r).filter((o) => o.startsWith("@container")).sort((o, s) => {
    const d = /min-width:\s*([0-9.]+)/;
    return +(o.match(d)?.[1] || 0) - +(s.match(d)?.[1] || 0);
  });
  return u.length ? u.reduce((o, s) => {
    const d = r[s];
    return delete o[s], o[s] = d, o;
  }, {
    ...r
  }) : r;
}
function M1(a, r) {
  return r === "@" || r.startsWith("@") && (a.some((u) => r.startsWith(`@${u}`)) || !!r.match(/^@\d/));
}
function R1(a, r) {
  const u = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!u)
    return null;
  const [, o, s] = u, d = Number.isNaN(+o) ? o || 0 : +o;
  return a.containerQueries(s).up(d);
}
function _1(a) {
  const r = (d, h) => d.replace("@media", h ? `@container ${h}` : "@container");
  function u(d, h) {
    d.up = (...p) => r(a.breakpoints.up(...p), h), d.down = (...p) => r(a.breakpoints.down(...p), h), d.between = (...p) => r(a.breakpoints.between(...p), h), d.only = (...p) => r(a.breakpoints.only(...p), h), d.not = (...p) => {
      const v = r(a.breakpoints.not(...p), h);
      return v.includes("not all and") ? v.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : v;
    };
  }
  const o = {}, s = (d) => (u(o, d), o);
  return u(s), {
    ...a,
    containerQueries: s
  };
}
const z1 = {
  borderRadius: 4
};
function Ir(a, r) {
  return r ? Le(a, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : a;
}
const qu = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Tp = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (a) => `@media (min-width:${qu[a]}px)`
}, D1 = {
  containerQueries: (a) => ({
    up: (r) => {
      let u = typeof r == "number" ? r : qu[r] || r;
      return typeof u == "number" && (u = `${u}px`), a ? `@container ${a} (min-width:${u})` : `@container (min-width:${u})`;
    }
  })
};
function In(a, r, u) {
  const o = a.theme || {};
  if (Array.isArray(r)) {
    const d = o.breakpoints || Tp;
    return r.reduce((h, p, v) => (h[d.up(d.keys[v])] = u(r[v]), h), {});
  }
  if (typeof r == "object") {
    const d = o.breakpoints || Tp;
    return Object.keys(r).reduce((h, p) => {
      if (M1(d.keys, p)) {
        const v = R1(o.containerQueries ? o : D1, p);
        v && (h[v] = u(r[p], p));
      } else if (Object.keys(d.values || qu).includes(p)) {
        const v = d.up(p);
        h[v] = u(r[p], p);
      } else {
        const v = p;
        h[v] = r[v];
      }
      return h;
    }, {});
  }
  return u(r);
}
function w1(a = {}) {
  return a.keys?.reduce((u, o) => {
    const s = a.up(o);
    return u[s] = {}, u;
  }, {}) || {};
}
function Cp(a, r) {
  return a.reduce((u, o) => {
    const s = u[o];
    return (!s || Object.keys(s).length === 0) && delete u[o], u;
  }, r);
}
function ht(a) {
  if (typeof a != "string")
    throw new Error(Fa(7));
  return a.charAt(0).toUpperCase() + a.slice(1);
}
function Yu(a, r, u = !0) {
  if (!r || typeof r != "string")
    return null;
  if (a && a.vars && u) {
    const o = `vars.${r}`.split(".").reduce((s, d) => s && s[d] ? s[d] : null, a);
    if (o != null)
      return o;
  }
  return r.split(".").reduce((o, s) => o && o[s] != null ? o[s] : null, a);
}
function Bu(a, r, u, o = u) {
  let s;
  return typeof a == "function" ? s = a(u) : Array.isArray(a) ? s = a[u] || o : s = Yu(a, u) || o, r && (s = r(s, o, a)), s;
}
function Pt(a) {
  const {
    prop: r,
    cssProperty: u = a.prop,
    themeKey: o,
    transform: s
  } = a, d = (h) => {
    if (h[r] == null)
      return null;
    const p = h[r], v = h.theme, y = Yu(v, o) || {};
    return In(h, p, (x) => {
      let R = Bu(y, s, x);
      return x === R && typeof x == "string" && (R = Bu(y, s, `${r}${x === "default" ? "" : ht(x)}`, x)), u === !1 ? R : {
        [u]: R
      };
    });
  };
  return d.propTypes = {}, d.filterProps = [r], d;
}
function N1(a) {
  const r = {};
  return (u) => (r[u] === void 0 && (r[u] = a(u)), r[u]);
}
const B1 = {
  m: "margin",
  p: "padding"
}, U1 = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ep = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, H1 = N1((a) => {
  if (a.length > 2)
    if (Ep[a])
      a = Ep[a];
    else
      return [a];
  const [r, u] = a.split(""), o = B1[r], s = U1[u] || "";
  return Array.isArray(s) ? s.map((d) => o + d) : [o + s];
}), Fs = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ps = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Fs, ...Ps];
function ci(a, r, u, o) {
  const s = Yu(a, r, !0) ?? u;
  return typeof s == "number" || typeof s == "string" ? (d) => typeof d == "string" ? d : typeof s == "string" ? s.startsWith("var(") && d === 0 ? 0 : s.startsWith("var(") && d === 1 ? s : `calc(${d} * ${s})` : s * d : Array.isArray(s) ? (d) => {
    if (typeof d == "string")
      return d;
    const h = Math.abs(d), p = s[h];
    return d >= 0 ? p : typeof p == "number" ? -p : typeof p == "string" && p.startsWith("var(") ? `calc(-1 * ${p})` : `-${p}`;
  } : typeof s == "function" ? s : () => {
  };
}
function Is(a) {
  return ci(a, "spacing", 8);
}
function si(a, r) {
  return typeof r == "string" || r == null ? r : a(r);
}
function $1(a, r) {
  return (u) => a.reduce((o, s) => (o[s] = si(r, u), o), {});
}
function j1(a, r, u, o) {
  if (!r.includes(u))
    return null;
  const s = H1(u), d = $1(s, o), h = a[u];
  return In(a, h, d);
}
function d0(a, r) {
  const u = Is(a.theme);
  return Object.keys(a).map((o) => j1(a, r, o, u)).reduce(Ir, {});
}
function Jt(a) {
  return d0(a, Fs);
}
Jt.propTypes = {};
Jt.filterProps = Fs;
function Wt(a) {
  return d0(a, Ps);
}
Wt.propTypes = {};
Wt.filterProps = Ps;
function h0(a = 8, r = Is({
  spacing: a
})) {
  if (a.mui)
    return a;
  const u = (...o) => (o.length === 0 ? [1] : o).map((d) => {
    const h = r(d);
    return typeof h == "number" ? `${h}px` : h;
  }).join(" ");
  return u.mui = !0, u;
}
function Vu(...a) {
  const r = a.reduce((o, s) => (s.filterProps.forEach((d) => {
    o[d] = s;
  }), o), {}), u = (o) => Object.keys(o).reduce((s, d) => r[d] ? Ir(s, r[d](o)) : s, {});
  return u.propTypes = {}, u.filterProps = a.reduce((o, s) => o.concat(s.filterProps), []), u;
}
function en(a) {
  return typeof a != "number" ? a : `${a}px solid`;
}
function an(a, r) {
  return Pt({
    prop: a,
    themeKey: "borders",
    transform: r
  });
}
const k1 = an("border", en), L1 = an("borderTop", en), q1 = an("borderRight", en), Y1 = an("borderBottom", en), V1 = an("borderLeft", en), G1 = an("borderColor"), X1 = an("borderTopColor"), Q1 = an("borderRightColor"), K1 = an("borderBottomColor"), Z1 = an("borderLeftColor"), J1 = an("outline", en), W1 = an("outlineColor"), Gu = (a) => {
  if (a.borderRadius !== void 0 && a.borderRadius !== null) {
    const r = ci(a.theme, "shape.borderRadius", 4), u = (o) => ({
      borderRadius: si(r, o)
    });
    return In(a, a.borderRadius, u);
  }
  return null;
};
Gu.propTypes = {};
Gu.filterProps = ["borderRadius"];
Vu(k1, L1, q1, Y1, V1, G1, X1, Q1, K1, Z1, Gu, J1, W1);
const Xu = (a) => {
  if (a.gap !== void 0 && a.gap !== null) {
    const r = ci(a.theme, "spacing", 8), u = (o) => ({
      gap: si(r, o)
    });
    return In(a, a.gap, u);
  }
  return null;
};
Xu.propTypes = {};
Xu.filterProps = ["gap"];
const Qu = (a) => {
  if (a.columnGap !== void 0 && a.columnGap !== null) {
    const r = ci(a.theme, "spacing", 8), u = (o) => ({
      columnGap: si(r, o)
    });
    return In(a, a.columnGap, u);
  }
  return null;
};
Qu.propTypes = {};
Qu.filterProps = ["columnGap"];
const Ku = (a) => {
  if (a.rowGap !== void 0 && a.rowGap !== null) {
    const r = ci(a.theme, "spacing", 8), u = (o) => ({
      rowGap: si(r, o)
    });
    return In(a, a.rowGap, u);
  }
  return null;
};
Ku.propTypes = {};
Ku.filterProps = ["rowGap"];
const F1 = Pt({
  prop: "gridColumn"
}), P1 = Pt({
  prop: "gridRow"
}), I1 = Pt({
  prop: "gridAutoFlow"
}), tb = Pt({
  prop: "gridAutoColumns"
}), eb = Pt({
  prop: "gridAutoRows"
}), nb = Pt({
  prop: "gridTemplateColumns"
}), ab = Pt({
  prop: "gridTemplateRows"
}), lb = Pt({
  prop: "gridTemplateAreas"
}), rb = Pt({
  prop: "gridArea"
});
Vu(Xu, Qu, Ku, F1, P1, I1, tb, eb, nb, ab, lb, rb);
function Vl(a, r) {
  return r === "grey" ? r : a;
}
const ib = Pt({
  prop: "color",
  themeKey: "palette",
  transform: Vl
}), ub = Pt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Vl
}), ob = Pt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Vl
});
Vu(ib, ub, ob);
function je(a) {
  return a <= 1 && a !== 0 ? `${a * 100}%` : a;
}
const cb = Pt({
  prop: "width",
  transform: je
}), tf = (a) => {
  if (a.maxWidth !== void 0 && a.maxWidth !== null) {
    const r = (u) => {
      const o = a.theme?.breakpoints?.values?.[u] || qu[u];
      return o ? a.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${o}${a.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: je(u)
      };
    };
    return In(a, a.maxWidth, r);
  }
  return null;
};
tf.filterProps = ["maxWidth"];
const sb = Pt({
  prop: "minWidth",
  transform: je
}), fb = Pt({
  prop: "height",
  transform: je
}), db = Pt({
  prop: "maxHeight",
  transform: je
}), hb = Pt({
  prop: "minHeight",
  transform: je
});
Pt({
  prop: "size",
  cssProperty: "width",
  transform: je
});
Pt({
  prop: "size",
  cssProperty: "height",
  transform: je
});
const mb = Pt({
  prop: "boxSizing"
});
Vu(cb, tf, sb, fb, db, hb, mb);
const fi = {
  // borders
  border: {
    themeKey: "borders",
    transform: en
  },
  borderTop: {
    themeKey: "borders",
    transform: en
  },
  borderRight: {
    themeKey: "borders",
    transform: en
  },
  borderBottom: {
    themeKey: "borders",
    transform: en
  },
  borderLeft: {
    themeKey: "borders",
    transform: en
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: en
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Gu
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Vl
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Vl
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Vl
  },
  // spacing
  p: {
    style: Wt
  },
  pt: {
    style: Wt
  },
  pr: {
    style: Wt
  },
  pb: {
    style: Wt
  },
  pl: {
    style: Wt
  },
  px: {
    style: Wt
  },
  py: {
    style: Wt
  },
  padding: {
    style: Wt
  },
  paddingTop: {
    style: Wt
  },
  paddingRight: {
    style: Wt
  },
  paddingBottom: {
    style: Wt
  },
  paddingLeft: {
    style: Wt
  },
  paddingX: {
    style: Wt
  },
  paddingY: {
    style: Wt
  },
  paddingInline: {
    style: Wt
  },
  paddingInlineStart: {
    style: Wt
  },
  paddingInlineEnd: {
    style: Wt
  },
  paddingBlock: {
    style: Wt
  },
  paddingBlockStart: {
    style: Wt
  },
  paddingBlockEnd: {
    style: Wt
  },
  m: {
    style: Jt
  },
  mt: {
    style: Jt
  },
  mr: {
    style: Jt
  },
  mb: {
    style: Jt
  },
  ml: {
    style: Jt
  },
  mx: {
    style: Jt
  },
  my: {
    style: Jt
  },
  margin: {
    style: Jt
  },
  marginTop: {
    style: Jt
  },
  marginRight: {
    style: Jt
  },
  marginBottom: {
    style: Jt
  },
  marginLeft: {
    style: Jt
  },
  marginX: {
    style: Jt
  },
  marginY: {
    style: Jt
  },
  marginInline: {
    style: Jt
  },
  marginInlineStart: {
    style: Jt
  },
  marginInlineEnd: {
    style: Jt
  },
  marginBlock: {
    style: Jt
  },
  marginBlockStart: {
    style: Jt
  },
  marginBlockEnd: {
    style: Jt
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (a) => ({
      "@media print": {
        display: a
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Xu
  },
  rowGap: {
    style: Ku
  },
  columnGap: {
    style: Qu
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: je
  },
  maxWidth: {
    style: tf
  },
  minWidth: {
    transform: je
  },
  height: {
    transform: je
  },
  maxHeight: {
    transform: je
  },
  minHeight: {
    transform: je
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function pb(...a) {
  const r = a.reduce((o, s) => o.concat(Object.keys(s)), []), u = new Set(r);
  return a.every((o) => u.size === Object.keys(o).length);
}
function yb(a, r) {
  return typeof a == "function" ? a(r) : a;
}
function gb() {
  function a(u, o, s, d) {
    const h = {
      [u]: o,
      theme: s
    }, p = d[u];
    if (!p)
      return {
        [u]: o
      };
    const {
      cssProperty: v = u,
      themeKey: y,
      transform: T,
      style: x
    } = p;
    if (o == null)
      return null;
    if (y === "typography" && o === "inherit")
      return {
        [u]: o
      };
    const R = Yu(s, y) || {};
    return x ? x(h) : In(h, o, (M) => {
      let A = Bu(R, T, M);
      return M === A && typeof M == "string" && (A = Bu(R, T, `${u}${M === "default" ? "" : ht(M)}`, M)), v === !1 ? A : {
        [v]: A
      };
    });
  }
  function r(u) {
    const {
      sx: o,
      theme: s = {},
      nested: d
    } = u || {};
    if (!o)
      return null;
    const h = s.unstable_sxConfig ?? fi;
    function p(v) {
      let y = v;
      if (typeof v == "function")
        y = v(s);
      else if (typeof v != "object")
        return v;
      if (!y)
        return null;
      const T = w1(s.breakpoints), x = Object.keys(T);
      let R = T;
      return Object.keys(y).forEach((w) => {
        const M = yb(y[w], s);
        if (M != null)
          if (typeof M == "object")
            if (h[w])
              R = Ir(R, a(w, M, s, h));
            else {
              const A = In({
                theme: s
              }, M, (H) => ({
                [w]: H
              }));
              pb(A, M) ? R[w] = r({
                sx: M,
                theme: s,
                nested: !0
              }) : R = Ir(R, A);
            }
          else
            R = Ir(R, a(w, M, s, h));
      }), !d && s.modularCssLayers ? {
        "@layer sx": Sp(s, Cp(x, R))
      } : Sp(s, Cp(x, R));
    }
    return Array.isArray(o) ? o.map(p) : p(o);
  }
  return r;
}
const Pa = gb();
Pa.filterProps = ["sx"];
function vb(a, r) {
  const u = this;
  if (u.vars) {
    if (!u.colorSchemes?.[a] || typeof u.getColorSchemeSelector != "function")
      return {};
    let o = u.getColorSchemeSelector(a);
    return o === "&" ? r : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: r
    });
  }
  return u.palette.mode === a ? r : {};
}
function ef(a = {}, ...r) {
  const {
    breakpoints: u = {},
    palette: o = {},
    spacing: s,
    shape: d = {},
    ...h
  } = a, p = O1(u), v = h0(s);
  let y = Le({
    breakpoints: p,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...o
    },
    spacing: v,
    shape: {
      ...z1,
      ...d
    }
  }, h);
  return y = _1(y), y.applyStyles = vb, y = r.reduce((T, x) => Le(T, x), y), y.unstable_sxConfig = {
    ...fi,
    ...h?.unstable_sxConfig
  }, y.unstable_sx = function(x) {
    return Pa({
      sx: x,
      theme: this
    });
  }, y;
}
function bb(a) {
  return Object.keys(a).length === 0;
}
function nf(a = null) {
  const r = B.useContext(ui);
  return !r || bb(r) ? a : r;
}
const Sb = ef();
function m0(a = Sb) {
  return nf(a);
}
function gs(a) {
  const r = Aa(a);
  return a !== r && r.styles ? (r.styles.match(/^@layer\s+[^{]*$/) || (r.styles = `@layer global{${r.styles}}`), r) : a;
}
function p0({
  styles: a,
  themeId: r,
  defaultTheme: u = {}
}) {
  const o = m0(u), s = r && o[r] || o;
  let d = typeof a == "function" ? a(s) : a;
  return s.modularCssLayers && (Array.isArray(d) ? d = d.map((h) => gs(typeof h == "function" ? h(s) : h)) : d = gs(d)), /* @__PURE__ */ Z.jsx(c0, {
    styles: d
  });
}
const Tb = (a) => {
  const r = {
    systemProps: {},
    otherProps: {}
  }, u = a?.theme?.unstable_sxConfig ?? fi;
  return Object.keys(a).forEach((o) => {
    u[o] ? r.systemProps[o] = a[o] : r.otherProps[o] = a[o];
  }), r;
};
function Cb(a) {
  const {
    sx: r,
    ...u
  } = a, {
    systemProps: o,
    otherProps: s
  } = Tb(u);
  let d;
  return Array.isArray(r) ? d = [o, ...r] : typeof r == "function" ? d = (...h) => {
    const p = r(...h);
    return Mn(p) ? {
      ...o,
      ...p
    } : o;
  } : d = {
    ...o,
    ...r
  }, {
    ...s,
    sx: d
  };
}
const Ap = (a) => a, Eb = () => {
  let a = Ap;
  return {
    configure(r) {
      a = r;
    },
    generate(r) {
      return a(r);
    },
    reset() {
      a = Ap;
    }
  };
}, Ab = Eb();
function y0(a) {
  var r, u, o = "";
  if (typeof a == "string" || typeof a == "number") o += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var s = a.length;
    for (r = 0; r < s; r++) a[r] && (u = y0(a[r])) && (o && (o += " "), o += u);
  } else for (u in a) a[u] && (o && (o += " "), o += u);
  return o;
}
function qt() {
  for (var a, r, u = 0, o = "", s = arguments.length; u < s; u++) (a = arguments[u]) && (r = y0(a)) && (o && (o += " "), o += r);
  return o;
}
const xb = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function pn(a, r, u = "Mui") {
  const o = xb[r];
  return o ? `${u}-${o}` : `${Ab.generate(a)}-${r}`;
}
function yn(a, r, u = "Mui") {
  const o = {};
  return r.forEach((s) => {
    o[s] = pn(a, s, u);
  }), o;
}
function g0(a) {
  const {
    variants: r,
    ...u
  } = a, o = {
    variants: r,
    style: Aa(u),
    isProcessed: !0
  };
  return o.style === u || r && r.forEach((s) => {
    typeof s.style != "function" && (s.style = Aa(s.style));
  }), o;
}
const Ob = ef();
function vs(a) {
  return a !== "ownerState" && a !== "theme" && a !== "sx" && a !== "as";
}
function Ja(a, r) {
  return r && a && typeof a == "object" && a.styles && !a.styles.startsWith("@layer") && (a.styles = `@layer ${r}{${String(a.styles)}}`), a;
}
function Mb(a) {
  return a ? (r, u) => u[a] : null;
}
function Rb(a, r, u) {
  a.theme = Db(a.theme) ? u : a.theme[r] || a.theme;
}
function _u(a, r, u) {
  const o = typeof r == "function" ? r(a) : r;
  if (Array.isArray(o))
    return o.flatMap((s) => _u(a, s, u));
  if (Array.isArray(o?.variants)) {
    let s;
    if (o.isProcessed)
      s = u ? Ja(o.style, u) : o.style;
    else {
      const {
        variants: d,
        ...h
      } = o;
      s = u ? Ja(Aa(h), u) : h;
    }
    return v0(a, o.variants, [s], u);
  }
  return o?.isProcessed ? u ? Ja(Aa(o.style), u) : o.style : u ? Ja(Aa(o), u) : o;
}
function v0(a, r, u = [], o = void 0) {
  let s;
  t: for (let d = 0; d < r.length; d += 1) {
    const h = r[d];
    if (typeof h.props == "function") {
      if (s ??= {
        ...a,
        ...a.ownerState,
        ownerState: a.ownerState
      }, !h.props(s))
        continue;
    } else
      for (const p in h.props)
        if (a[p] !== h.props[p] && a.ownerState?.[p] !== h.props[p])
          continue t;
    typeof h.style == "function" ? (s ??= {
      ...a,
      ...a.ownerState,
      ownerState: a.ownerState
    }, u.push(o ? Ja(Aa(h.style(s)), o) : h.style(s))) : u.push(o ? Ja(Aa(h.style), o) : h.style);
  }
  return u;
}
function _b(a = {}) {
  const {
    themeId: r,
    defaultTheme: u = Ob,
    rootShouldForwardProp: o = vs,
    slotShouldForwardProp: s = vs
  } = a;
  function d(p) {
    Rb(p, r, u);
  }
  return (p, v = {}) => {
    C1(p, (j) => j.filter((P) => P !== Pa));
    const {
      name: y,
      slot: T,
      skipVariantsResolver: x,
      skipSx: R,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: w = Mb(Nb(T)),
      ...M
    } = v, A = y && y.startsWith("Mui") || T ? "components" : "custom", H = x !== void 0 ? x : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      T && T !== "Root" && T !== "root" || !1
    ), K = R || !1;
    let J = vs;
    T === "Root" || T === "root" ? J = o : T ? J = s : wb(p) && (J = void 0);
    const F = T1(p, {
      shouldForwardProp: J,
      label: zb(),
      ...M
    }), V = (j) => {
      if (j.__emotion_real === j)
        return j;
      if (typeof j == "function")
        return function(at) {
          return _u(at, j, at.theme.modularCssLayers ? A : void 0);
        };
      if (Mn(j)) {
        const P = g0(j);
        return function(L) {
          return P.variants ? _u(L, P, L.theme.modularCssLayers ? A : void 0) : L.theme.modularCssLayers ? Ja(P.style, A) : P.style;
        };
      }
      return j;
    }, z = (...j) => {
      const P = [], at = j.map(V), L = [];
      if (P.push(d), y && w && L.push(function(W) {
        const lt = W.theme.components?.[y]?.styleOverrides;
        if (!lt)
          return null;
        const k = {};
        for (const rt in lt)
          k[rt] = _u(W, lt[rt], W.theme.modularCssLayers ? "theme" : void 0);
        return w(W, k);
      }), y && !H && L.push(function(W) {
        const lt = W.theme?.components?.[y]?.variants;
        return lt ? v0(W, lt, [], W.theme.modularCssLayers ? "theme" : void 0) : null;
      }), K || L.push(Pa), Array.isArray(at[0])) {
        const g = at.shift(), W = new Array(P.length).fill(""), X = new Array(L.length).fill("");
        let lt;
        lt = [...W, ...g, ...X], lt.raw = [...W, ...g.raw, ...X], P.unshift(lt);
      }
      const Q = [...P, ...at, ...L], tt = F(...Q);
      return p.muiName && (tt.muiName = p.muiName), tt;
    };
    return F.withConfig && (z.withConfig = F.withConfig), z;
  };
}
function zb(a, r) {
  return void 0;
}
function Db(a) {
  for (const r in a)
    return !1;
  return !0;
}
function wb(a) {
  return typeof a == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  a.charCodeAt(0) > 96;
}
function Nb(a) {
  return a && a.charAt(0).toLowerCase() + a.slice(1);
}
function _s(a, r, u = !1) {
  const o = {
    ...r
  };
  for (const s in a)
    if (Object.prototype.hasOwnProperty.call(a, s)) {
      const d = s;
      if (d === "components" || d === "slots")
        o[d] = {
          ...a[d],
          ...o[d]
        };
      else if (d === "componentsProps" || d === "slotProps") {
        const h = a[d], p = r[d];
        if (!p)
          o[d] = h || {};
        else if (!h)
          o[d] = p;
        else {
          o[d] = {
            ...p
          };
          for (const v in h)
            if (Object.prototype.hasOwnProperty.call(h, v)) {
              const y = v;
              o[d][y] = _s(h[y], p[y], u);
            }
        }
      } else d === "className" && u && r.className ? o.className = qt(a?.className, r?.className) : d === "style" && u && r.style ? o.style = {
        ...a?.style,
        ...r?.style
      } : o[d] === void 0 && (o[d] = a[d]);
    }
  return o;
}
const af = typeof window < "u" ? B.useLayoutEffect : B.useEffect;
function Bb(a, r = Number.MIN_SAFE_INTEGER, u = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(a, u));
}
function lf(a, r = 0, u = 1) {
  return Bb(a, r, u);
}
function Ub(a) {
  a = a.slice(1);
  const r = new RegExp(`.{1,${a.length >= 6 ? 2 : 1}}`, "g");
  let u = a.match(r);
  return u && u[0].length === 1 && (u = u.map((o) => o + o)), u ? `rgb${u.length === 4 ? "a" : ""}(${u.map((o, s) => s < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function xa(a) {
  if (a.type)
    return a;
  if (a.charAt(0) === "#")
    return xa(Ub(a));
  const r = a.indexOf("("), u = a.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(u))
    throw new Error(Fa(9, a));
  let o = a.substring(r + 1, a.length - 1), s;
  if (u === "color") {
    if (o = o.split(" "), s = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(s))
      throw new Error(Fa(10, s));
  } else
    o = o.split(",");
  return o = o.map((d) => parseFloat(d)), {
    type: u,
    values: o,
    colorSpace: s
  };
}
const Hb = (a) => {
  const r = xa(a);
  return r.values.slice(0, 3).map((u, o) => r.type.includes("hsl") && o !== 0 ? `${u}%` : u).join(" ");
}, Fr = (a, r) => {
  try {
    return Hb(a);
  } catch {
    return a;
  }
};
function Zu(a) {
  const {
    type: r,
    colorSpace: u
  } = a;
  let {
    values: o
  } = a;
  return r.includes("rgb") ? o = o.map((s, d) => d < 3 ? parseInt(s, 10) : s) : r.includes("hsl") && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), r.includes("color") ? o = `${u} ${o.join(" ")}` : o = `${o.join(", ")}`, `${r}(${o})`;
}
function b0(a) {
  a = xa(a);
  const {
    values: r
  } = a, u = r[0], o = r[1] / 100, s = r[2] / 100, d = o * Math.min(s, 1 - s), h = (y, T = (y + u / 30) % 12) => s - d * Math.max(Math.min(T - 3, 9 - T, 1), -1);
  let p = "rgb";
  const v = [Math.round(h(0) * 255), Math.round(h(8) * 255), Math.round(h(4) * 255)];
  return a.type === "hsla" && (p += "a", v.push(r[3])), Zu({
    type: p,
    values: v
  });
}
function zs(a) {
  a = xa(a);
  let r = a.type === "hsl" || a.type === "hsla" ? xa(b0(a)).values : a.values;
  return r = r.map((u) => (a.type !== "color" && (u /= 255), u <= 0.03928 ? u / 12.92 : ((u + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function $b(a, r) {
  const u = zs(a), o = zs(r);
  return (Math.max(u, o) + 0.05) / (Math.min(u, o) + 0.05);
}
function Uu(a, r) {
  return a = xa(a), r = lf(r), (a.type === "rgb" || a.type === "hsl") && (a.type += "a"), a.type === "color" ? a.values[3] = `/${r}` : a.values[3] = r, Zu(a);
}
function Za(a, r, u) {
  try {
    return Uu(a, r);
  } catch {
    return a;
  }
}
function Ju(a, r) {
  if (a = xa(a), r = lf(r), a.type.includes("hsl"))
    a.values[2] *= 1 - r;
  else if (a.type.includes("rgb") || a.type.includes("color"))
    for (let u = 0; u < 3; u += 1)
      a.values[u] *= 1 - r;
  return Zu(a);
}
function Dt(a, r, u) {
  try {
    return Ju(a, r);
  } catch {
    return a;
  }
}
function Wu(a, r) {
  if (a = xa(a), r = lf(r), a.type.includes("hsl"))
    a.values[2] += (100 - a.values[2]) * r;
  else if (a.type.includes("rgb"))
    for (let u = 0; u < 3; u += 1)
      a.values[u] += (255 - a.values[u]) * r;
  else if (a.type.includes("color"))
    for (let u = 0; u < 3; u += 1)
      a.values[u] += (1 - a.values[u]) * r;
  return Zu(a);
}
function wt(a, r, u) {
  try {
    return Wu(a, r);
  } catch {
    return a;
  }
}
function jb(a, r = 0.15) {
  return zs(a) > 0.5 ? Ju(a, r) : Wu(a, r);
}
function Au(a, r, u) {
  try {
    return jb(a, r);
  } catch {
    return a;
  }
}
const S0 = /* @__PURE__ */ B.createContext(null);
function rf() {
  return B.useContext(S0);
}
const kb = typeof Symbol == "function" && Symbol.for, Lb = kb ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function qb(a, r) {
  return typeof r == "function" ? r(a) : {
    ...a,
    ...r
  };
}
function Yb(a) {
  const {
    children: r,
    theme: u
  } = a, o = rf(), s = B.useMemo(() => {
    const d = o === null ? {
      ...u
    } : qb(o, u);
    return d != null && (d[Lb] = o !== null), d;
  }, [u, o]);
  return /* @__PURE__ */ Z.jsx(S0.Provider, {
    value: s,
    children: r
  });
}
const T0 = /* @__PURE__ */ B.createContext();
function Vb({
  value: a,
  ...r
}) {
  return /* @__PURE__ */ Z.jsx(T0.Provider, {
    value: a ?? !0,
    ...r
  });
}
const qT = () => B.useContext(T0) ?? !1, C0 = /* @__PURE__ */ B.createContext(void 0);
function Gb({
  value: a,
  children: r
}) {
  return /* @__PURE__ */ Z.jsx(C0.Provider, {
    value: a,
    children: r
  });
}
function Xb(a) {
  const {
    theme: r,
    name: u,
    props: o
  } = a;
  if (!r || !r.components || !r.components[u])
    return o;
  const s = r.components[u];
  return s.defaultProps ? _s(s.defaultProps, o, r.components.mergeClassNameAndStyle) : !s.styleOverrides && !s.variants ? _s(s, o, r.components.mergeClassNameAndStyle) : o;
}
function Qb({
  props: a,
  name: r
}) {
  const u = B.useContext(C0);
  return Xb({
    props: a,
    name: r,
    theme: {
      components: u
    }
  });
}
let xp = 0;
function Kb(a) {
  const [r, u] = B.useState(a), o = a || r;
  return B.useEffect(() => {
    r == null && (xp += 1, u(`mui-${xp}`));
  }, [r]), o;
}
const Zb = {
  ...As
}, Op = Zb.useId;
function E0(a) {
  if (Op !== void 0) {
    const r = Op();
    return a ?? r;
  }
  return Kb(a);
}
function Jb(a) {
  const r = nf(), u = E0() || "", {
    modularCssLayers: o
  } = a;
  let s = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !o || r !== null ? s = "" : typeof o == "string" ? s = o.replace(/mui(?!\.)/g, s) : s = `@layer ${s};`, af(() => {
    const d = document.querySelector("head");
    if (!d)
      return;
    const h = d.firstChild;
    if (s) {
      if (h && h.hasAttribute?.("data-mui-layer-order") && h.getAttribute("data-mui-layer-order") === u)
        return;
      const p = document.createElement("style");
      p.setAttribute("data-mui-layer-order", u), p.textContent = s, d.prepend(p);
    } else
      d.querySelector(`style[data-mui-layer-order="${u}"]`)?.remove();
  }, [s, u]), s ? /* @__PURE__ */ Z.jsx(p0, {
    styles: s
  }) : null;
}
const Mp = {};
function Rp(a, r, u, o = !1) {
  return B.useMemo(() => {
    const s = a && r[a] || r;
    if (typeof u == "function") {
      const d = u(s), h = a ? {
        ...r,
        [a]: d
      } : d;
      return o ? () => h : h;
    }
    return a ? {
      ...r,
      [a]: u
    } : {
      ...r,
      ...u
    };
  }, [a, r, u, o]);
}
function A0(a) {
  const {
    children: r,
    theme: u,
    themeId: o
  } = a, s = nf(Mp), d = rf() || Mp, h = Rp(o, s, u), p = Rp(o, d, u, !0), v = (o ? h[o] : h).direction === "rtl", y = Jb(h);
  return /* @__PURE__ */ Z.jsx(Yb, {
    theme: p,
    children: /* @__PURE__ */ Z.jsx(ui.Provider, {
      value: h,
      children: /* @__PURE__ */ Z.jsx(Vb, {
        value: v,
        children: /* @__PURE__ */ Z.jsxs(Gb, {
          value: o ? h[o].components : h.components,
          children: [y, r]
        })
      })
    })
  });
}
const _p = {
  theme: void 0
};
function Wb(a) {
  let r, u;
  return function(s) {
    let d = r;
    return (d === void 0 || s.theme !== u) && (_p.theme = s.theme, d = g0(a(_p)), r = d, u = s.theme), d;
  };
}
const uf = "mode", of = "color-scheme", Fb = "data-color-scheme";
function Pb(a) {
  const {
    defaultMode: r = "system",
    defaultLightColorScheme: u = "light",
    defaultDarkColorScheme: o = "dark",
    modeStorageKey: s = uf,
    colorSchemeStorageKey: d = of,
    attribute: h = Fb,
    colorSchemeNode: p = "document.documentElement",
    nonce: v
  } = a || {};
  let y = "", T = h;
  if (h === "class" && (T = ".%s"), h === "data" && (T = "[data-%s]"), T.startsWith(".")) {
    const R = T.substring(1);
    y += `${p}.classList.remove('${R}'.replace('%s', light), '${R}'.replace('%s', dark));
      ${p}.classList.add('${R}'.replace('%s', colorScheme));`;
  }
  const x = T.match(/\[([^[\]]+)\]/);
  if (x) {
    const [R, w] = x[1].split("=");
    w || (y += `${p}.removeAttribute('${R}'.replace('%s', light));
      ${p}.removeAttribute('${R}'.replace('%s', dark));`), y += `
      ${p}.setAttribute('${R}'.replace('%s', colorScheme), ${w ? `${w}.replace('%s', colorScheme)` : '""'});`;
  } else T !== ".%s" && (y += `${p}.setAttribute('${T}', colorScheme);`);
  return /* @__PURE__ */ Z.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? v : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${s}') || '${r}';
  const dark = localStorage.getItem('${d}-dark') || '${o}';
  const light = localStorage.getItem('${d}-light') || '${u}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${y}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function Ib() {
}
const tS = ({
  key: a,
  storageWindow: r
}) => (!r && typeof window < "u" && (r = window), {
  get(u) {
    if (typeof window > "u")
      return;
    if (!r)
      return u;
    let o;
    try {
      o = r.localStorage.getItem(a);
    } catch {
    }
    return o || u;
  },
  set: (u) => {
    if (r)
      try {
        r.localStorage.setItem(a, u);
      } catch {
      }
  },
  subscribe: (u) => {
    if (!r)
      return Ib;
    const o = (s) => {
      const d = s.newValue;
      s.key === a && u(d);
    };
    return r.addEventListener("storage", o), () => {
      r.removeEventListener("storage", o);
    };
  }
});
function bs() {
}
function zp(a) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && a === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function x0(a, r) {
  if (a.mode === "light" || a.mode === "system" && a.systemMode === "light")
    return r("light");
  if (a.mode === "dark" || a.mode === "system" && a.systemMode === "dark")
    return r("dark");
}
function eS(a) {
  return x0(a, (r) => {
    if (r === "light")
      return a.lightColorScheme;
    if (r === "dark")
      return a.darkColorScheme;
  });
}
function nS(a) {
  const {
    defaultMode: r = "light",
    defaultLightColorScheme: u,
    defaultDarkColorScheme: o,
    supportedColorSchemes: s = [],
    modeStorageKey: d = uf,
    colorSchemeStorageKey: h = of,
    storageWindow: p = typeof window > "u" ? void 0 : window,
    storageManager: v = tS,
    noSsr: y = !1
  } = a, T = s.join(","), x = s.length > 1, R = B.useMemo(() => v?.({
    key: d,
    storageWindow: p
  }), [v, d, p]), w = B.useMemo(() => v?.({
    key: `${h}-light`,
    storageWindow: p
  }), [v, h, p]), M = B.useMemo(() => v?.({
    key: `${h}-dark`,
    storageWindow: p
  }), [v, h, p]), [A, H] = B.useState(() => {
    const at = R?.get(r) || r, L = w?.get(u) || u, Q = M?.get(o) || o;
    return {
      mode: at,
      systemMode: zp(at),
      lightColorScheme: L,
      darkColorScheme: Q
    };
  }), [K, J] = B.useState(y || !x);
  B.useEffect(() => {
    J(!0);
  }, []);
  const F = eS(A), V = B.useCallback((at) => {
    H((L) => {
      if (at === L.mode)
        return L;
      const Q = at ?? r;
      return R?.set(Q), {
        ...L,
        mode: Q,
        systemMode: zp(Q)
      };
    });
  }, [R, r]), z = B.useCallback((at) => {
    at ? typeof at == "string" ? at && !T.includes(at) ? console.error(`\`${at}\` does not exist in \`theme.colorSchemes\`.`) : H((L) => {
      const Q = {
        ...L
      };
      return x0(L, (tt) => {
        tt === "light" && (w?.set(at), Q.lightColorScheme = at), tt === "dark" && (M?.set(at), Q.darkColorScheme = at);
      }), Q;
    }) : H((L) => {
      const Q = {
        ...L
      }, tt = at.light === null ? u : at.light, g = at.dark === null ? o : at.dark;
      return tt && (T.includes(tt) ? (Q.lightColorScheme = tt, w?.set(tt)) : console.error(`\`${tt}\` does not exist in \`theme.colorSchemes\`.`)), g && (T.includes(g) ? (Q.darkColorScheme = g, M?.set(g)) : console.error(`\`${g}\` does not exist in \`theme.colorSchemes\`.`)), Q;
    }) : H((L) => (w?.set(u), M?.set(o), {
      ...L,
      lightColorScheme: u,
      darkColorScheme: o
    }));
  }, [T, w, M, u, o]), j = B.useCallback((at) => {
    A.mode === "system" && H((L) => {
      const Q = at?.matches ? "dark" : "light";
      return L.systemMode === Q ? L : {
        ...L,
        systemMode: Q
      };
    });
  }, [A.mode]), P = B.useRef(j);
  return P.current = j, B.useEffect(() => {
    if (typeof window.matchMedia != "function" || !x)
      return;
    const at = (...Q) => P.current(...Q), L = window.matchMedia("(prefers-color-scheme: dark)");
    return L.addListener(at), at(L), () => {
      L.removeListener(at);
    };
  }, [x]), B.useEffect(() => {
    if (x) {
      const at = R?.subscribe((tt) => {
        (!tt || ["light", "dark", "system"].includes(tt)) && V(tt || r);
      }) || bs, L = w?.subscribe((tt) => {
        (!tt || T.match(tt)) && z({
          light: tt
        });
      }) || bs, Q = M?.subscribe((tt) => {
        (!tt || T.match(tt)) && z({
          dark: tt
        });
      }) || bs;
      return () => {
        at(), L(), Q();
      };
    }
  }, [z, V, T, r, p, x, R, w, M]), {
    ...A,
    mode: K ? A.mode : void 0,
    systemMode: K ? A.systemMode : void 0,
    colorScheme: K ? F : void 0,
    setMode: V,
    setColorScheme: z
  };
}
const aS = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function lS(a) {
  const {
    themeId: r,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: u = {},
    modeStorageKey: o = uf,
    colorSchemeStorageKey: s = of,
    disableTransitionOnChange: d = !1,
    defaultColorScheme: h,
    resolveTheme: p
  } = a, v = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  }, y = /* @__PURE__ */ B.createContext(void 0), T = () => B.useContext(y) || v, x = {}, R = {};
  function w(K) {
    const {
      children: J,
      theme: F,
      modeStorageKey: V = o,
      colorSchemeStorageKey: z = s,
      disableTransitionOnChange: j = d,
      storageManager: P,
      storageWindow: at = typeof window > "u" ? void 0 : window,
      documentNode: L = typeof document > "u" ? void 0 : document,
      colorSchemeNode: Q = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: tt = !1,
      disableStyleSheetGeneration: g = !1,
      defaultMode: W = "system",
      forceThemeRerender: X = !1,
      noSsr: lt
    } = K, k = B.useRef(!1), rt = rf(), et = B.useContext(y), ft = !!et && !tt, S = B.useMemo(() => F || (typeof u == "function" ? u() : u), [F]), Y = S[r], nt = Y || S, {
      colorSchemes: it = x,
      components: I = R,
      cssVarPrefix: yt
    } = nt, ut = Object.keys(it).filter((Se) => !!it[Se]).join(","), xt = B.useMemo(() => ut.split(","), [ut]), Ct = typeof h == "string" ? h : h.light, Lt = typeof h == "string" ? h : h.dark, Nt = it[Ct] && it[Lt] ? W : it[nt.defaultColorScheme]?.palette?.mode || nt.palette?.mode, {
      mode: Ee,
      setMode: gn,
      systemMode: _e,
      lightColorScheme: rn,
      darkColorScheme: zn,
      colorScheme: vn,
      setColorScheme: un
    } = nS({
      supportedColorSchemes: xt,
      defaultLightColorScheme: Ct,
      defaultDarkColorScheme: Lt,
      modeStorageKey: V,
      colorSchemeStorageKey: z,
      defaultMode: Nt,
      storageManager: P,
      storageWindow: at,
      noSsr: lt
    });
    let Ae = Ee, se = vn;
    ft && (Ae = et.mode, se = et.colorScheme);
    let on = se || nt.defaultColorScheme;
    nt.vars && !X && (on = nt.defaultColorScheme);
    const Dn = B.useMemo(() => {
      const Se = nt.generateThemeVars?.() || nt.vars, Yt = {
        ...nt,
        components: I,
        colorSchemes: it,
        cssVarPrefix: yt,
        vars: Se
      };
      if (typeof Yt.generateSpacing == "function" && (Yt.spacing = Yt.generateSpacing()), on) {
        const fe = it[on];
        fe && typeof fe == "object" && Object.keys(fe).forEach((qe) => {
          fe[qe] && typeof fe[qe] == "object" ? Yt[qe] = {
            ...Yt[qe],
            ...fe[qe]
          } : Yt[qe] = fe[qe];
        });
      }
      return p ? p(Yt) : Yt;
    }, [nt, on, I, it, yt]), mt = nt.colorSchemeSelector;
    af(() => {
      if (se && Q && mt && mt !== "media") {
        const Se = mt;
        let Yt = mt;
        if (Se === "class" && (Yt = ".%s"), Se === "data" && (Yt = "[data-%s]"), Se?.startsWith("data-") && !Se.includes("%s") && (Yt = `[${Se}="%s"]`), Yt.startsWith("."))
          Q.classList.remove(...xt.map((fe) => Yt.substring(1).replace("%s", fe))), Q.classList.add(Yt.substring(1).replace("%s", se));
        else {
          const fe = Yt.replace("%s", se).match(/\[([^\]]+)\]/);
          if (fe) {
            const [qe, tl] = fe[1].split("=");
            tl || xt.forEach((to) => {
              Q.removeAttribute(qe.replace(se, to));
            }), Q.setAttribute(qe, tl ? tl.replace(/"|'/g, "") : "");
          } else
            Q.setAttribute(Yt, se);
        }
      }
    }, [se, mt, Q, xt]), B.useEffect(() => {
      let Se;
      if (j && k.current && L) {
        const Yt = L.createElement("style");
        Yt.appendChild(L.createTextNode(aS)), L.head.appendChild(Yt), window.getComputedStyle(L.body), Se = setTimeout(() => {
          L.head.removeChild(Yt);
        }, 1);
      }
      return () => {
        clearTimeout(Se);
      };
    }, [se, j, L]), B.useEffect(() => (k.current = !0, () => {
      k.current = !1;
    }), []);
    const Iu = B.useMemo(() => ({
      allColorSchemes: xt,
      colorScheme: se,
      darkColorScheme: zn,
      lightColorScheme: rn,
      mode: Ae,
      setColorScheme: un,
      setMode: gn,
      systemMode: _e
    }), [xt, se, zn, rn, Ae, un, gn, _e, Dn.colorSchemeSelector]);
    let ze = !0;
    (g || nt.cssVariables === !1 || ft && rt?.cssVarPrefix === yt) && (ze = !1);
    const di = /* @__PURE__ */ Z.jsxs(B.Fragment, {
      children: [/* @__PURE__ */ Z.jsx(A0, {
        themeId: Y ? r : void 0,
        theme: Dn,
        children: J
      }), ze && /* @__PURE__ */ Z.jsx(c0, {
        styles: Dn.generateStyleSheets?.() || []
      })]
    });
    return ft ? di : /* @__PURE__ */ Z.jsx(y.Provider, {
      value: Iu,
      children: di
    });
  }
  const M = typeof h == "string" ? h : h.light, A = typeof h == "string" ? h : h.dark;
  return {
    CssVarsProvider: w,
    useColorScheme: T,
    getInitColorSchemeScript: (K) => Pb({
      colorSchemeStorageKey: s,
      defaultLightColorScheme: M,
      defaultDarkColorScheme: A,
      modeStorageKey: o,
      ...K
    })
  };
}
function rS(a = "") {
  function r(...o) {
    if (!o.length)
      return "";
    const s = o[0];
    return typeof s == "string" && !s.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${a ? `${a}-` : ""}${s}${r(...o.slice(1))})` : `, ${s}`;
  }
  return (o, ...s) => `var(--${a ? `${a}-` : ""}${o}${r(...s)})`;
}
const Dp = (a, r, u, o = []) => {
  let s = a;
  r.forEach((d, h) => {
    h === r.length - 1 ? Array.isArray(s) ? s[Number(d)] = u : s && typeof s == "object" && (s[d] = u) : s && typeof s == "object" && (s[d] || (s[d] = o.includes(d) ? [] : {}), s = s[d]);
  });
}, iS = (a, r, u) => {
  function o(s, d = [], h = []) {
    Object.entries(s).forEach(([p, v]) => {
      (!u || u && !u([...d, p])) && v != null && (typeof v == "object" && Object.keys(v).length > 0 ? o(v, [...d, p], Array.isArray(v) ? [...h, p] : h) : r([...d, p], v, h));
    });
  }
  o(a);
}, uS = (a, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) => a.includes(o)) || a[a.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function Ss(a, r) {
  const {
    prefix: u,
    shouldSkipGeneratingVar: o
  } = r || {}, s = {}, d = {}, h = {};
  return iS(
    a,
    (p, v, y) => {
      if ((typeof v == "string" || typeof v == "number") && (!o || !o(p, v))) {
        const T = `--${u ? `${u}-` : ""}${p.join("-")}`, x = uS(p, v);
        Object.assign(s, {
          [T]: x
        }), Dp(d, p, `var(${T})`, y), Dp(h, p, `var(${T}, ${x})`, y);
      }
    },
    (p) => p[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: s,
    vars: d,
    varsWithDefaults: h
  };
}
function oS(a, r = {}) {
  const {
    getSelector: u = K,
    disableCssColorScheme: o,
    colorSchemeSelector: s,
    enableContrastVars: d
  } = r, {
    colorSchemes: h = {},
    components: p,
    defaultColorScheme: v = "light",
    ...y
  } = a, {
    vars: T,
    css: x,
    varsWithDefaults: R
  } = Ss(y, r);
  let w = R;
  const M = {}, {
    [v]: A,
    ...H
  } = h;
  if (Object.entries(H || {}).forEach(([V, z]) => {
    const {
      vars: j,
      css: P,
      varsWithDefaults: at
    } = Ss(z, r);
    w = Le(w, at), M[V] = {
      css: P,
      vars: j
    };
  }), A) {
    const {
      css: V,
      vars: z,
      varsWithDefaults: j
    } = Ss(A, r);
    w = Le(w, j), M[v] = {
      css: V,
      vars: z
    };
  }
  function K(V, z) {
    let j = s;
    if (s === "class" && (j = ".%s"), s === "data" && (j = "[data-%s]"), s?.startsWith("data-") && !s.includes("%s") && (j = `[${s}="%s"]`), V) {
      if (j === "media")
        return a.defaultColorScheme === V ? ":root" : {
          [`@media (prefers-color-scheme: ${h[V]?.palette?.mode || V})`]: {
            ":root": z
          }
        };
      if (j)
        return a.defaultColorScheme === V ? `:root, ${j.replace("%s", String(V))}` : j.replace("%s", String(V));
    }
    return ":root";
  }
  return {
    vars: w,
    generateThemeVars: () => {
      let V = {
        ...T
      };
      return Object.entries(M).forEach(([, {
        vars: z
      }]) => {
        V = Le(V, z);
      }), V;
    },
    generateStyleSheets: () => {
      const V = [], z = a.defaultColorScheme || "light";
      function j(L, Q) {
        Object.keys(Q).length && V.push(typeof L == "string" ? {
          [L]: {
            ...Q
          }
        } : L);
      }
      j(u(void 0, {
        ...x
      }), x);
      const {
        [z]: P,
        ...at
      } = M;
      if (P) {
        const {
          css: L
        } = P, Q = h[z]?.palette?.mode, tt = !o && Q ? {
          colorScheme: Q,
          ...L
        } : {
          ...L
        };
        j(u(z, {
          ...tt
        }), tt);
      }
      return Object.entries(at).forEach(([L, {
        css: Q
      }]) => {
        const tt = h[L]?.palette?.mode, g = !o && tt ? {
          colorScheme: tt,
          ...Q
        } : {
          ...Q
        };
        j(u(L, {
          ...g
        }), g);
      }), d && V.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), V;
    }
  };
}
function cS(a) {
  return function(u) {
    return a === "media" ? `@media (prefers-color-scheme: ${u})` : a ? a.startsWith("data-") && !a.includes("%s") ? `[${a}="${u}"] &` : a === "class" ? `.${u} &` : a === "data" ? `[data-${u}] &` : `${a.replace("%s", u)} &` : "&";
  };
}
function _n(a, r, u = void 0) {
  const o = {};
  for (const s in a) {
    const d = a[s];
    let h = "", p = !0;
    for (let v = 0; v < d.length; v += 1) {
      const y = d[v];
      y && (h += (p === !0 ? "" : " ") + r(y), p = !1, u && u[y] && (h += " " + u[y]));
    }
    o[s] = h;
  }
  return o;
}
function O0() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: ei.white,
      default: ei.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const M0 = O0();
function R0() {
  return {
    text: {
      primary: ei.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: ei.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Ds = R0();
function wp(a, r, u, o) {
  const s = o.light || o, d = o.dark || o * 1.5;
  a[r] || (a.hasOwnProperty(u) ? a[r] = a[u] : r === "light" ? a.light = Wu(a.main, s) : r === "dark" && (a.dark = Ju(a.main, d)));
}
function Np(a, r, u, o, s) {
  const d = s.light || s, h = s.dark || s * 1.5;
  r[u] || (r.hasOwnProperty(o) ? r[u] = r[o] : u === "light" ? r.light = `color-mix(in ${a}, ${r.main}, #fff ${(d * 100).toFixed(0)}%)` : u === "dark" && (r.dark = `color-mix(in ${a}, ${r.main}, #000 ${(h * 100).toFixed(0)}%)`));
}
function sS(a = "light") {
  return a === "dark" ? {
    main: jl[200],
    light: jl[50],
    dark: jl[400]
  } : {
    main: jl[700],
    light: jl[400],
    dark: jl[800]
  };
}
function fS(a = "light") {
  return a === "dark" ? {
    main: $l[200],
    light: $l[50],
    dark: $l[400]
  } : {
    main: $l[500],
    light: $l[300],
    dark: $l[700]
  };
}
function dS(a = "light") {
  return a === "dark" ? {
    main: Hl[500],
    light: Hl[300],
    dark: Hl[700]
  } : {
    main: Hl[700],
    light: Hl[400],
    dark: Hl[800]
  };
}
function hS(a = "light") {
  return a === "dark" ? {
    main: kl[400],
    light: kl[300],
    dark: kl[700]
  } : {
    main: kl[700],
    light: kl[500],
    dark: kl[900]
  };
}
function mS(a = "light") {
  return a === "dark" ? {
    main: Ll[400],
    light: Ll[300],
    dark: Ll[700]
  } : {
    main: Ll[800],
    light: Ll[500],
    dark: Ll[900]
  };
}
function pS(a = "light") {
  return a === "dark" ? {
    main: Xr[400],
    light: Xr[300],
    dark: Xr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Xr[500],
    dark: Xr[900]
  };
}
function yS(a) {
  return `oklch(from ${a} var(--__l) 0 h / var(--__a))`;
}
function cf(a) {
  const {
    mode: r = "light",
    contrastThreshold: u = 3,
    tonalOffset: o = 0.2,
    colorSpace: s,
    ...d
  } = a, h = a.primary || sS(r), p = a.secondary || fS(r), v = a.error || dS(r), y = a.info || hS(r), T = a.success || mS(r), x = a.warning || pS(r);
  function R(H) {
    return s ? yS(H) : $b(H, Ds.text.primary) >= u ? Ds.text.primary : M0.text.primary;
  }
  const w = ({
    color: H,
    name: K,
    mainShade: J = 500,
    lightShade: F = 300,
    darkShade: V = 700
  }) => {
    if (H = {
      ...H
    }, !H.main && H[J] && (H.main = H[J]), !H.hasOwnProperty("main"))
      throw new Error(Fa(11, K ? ` (${K})` : "", J));
    if (typeof H.main != "string")
      throw new Error(Fa(12, K ? ` (${K})` : "", JSON.stringify(H.main)));
    return s ? (Np(s, H, "light", F, o), Np(s, H, "dark", V, o)) : (wp(H, "light", F, o), wp(H, "dark", V, o)), H.contrastText || (H.contrastText = R(H.main)), H;
  };
  let M;
  return r === "light" ? M = O0() : r === "dark" && (M = R0()), Le({
    // A collection of common colors.
    common: {
      ...ei
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: w({
      color: h,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: w({
      color: p,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: w({
      color: v,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: w({
      color: x,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: w({
      color: y,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: w({
      color: T,
      name: "success"
    }),
    // The grey colors.
    grey: Cv,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: u,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: R,
    // Generate a rich color object.
    augmentColor: w,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: o,
    // The light and dark mode object.
    ...M
  }, d);
}
function gS(a) {
  const r = {};
  return Object.entries(a).forEach((o) => {
    const [s, d] = o;
    typeof d == "object" && (r[s] = `${d.fontStyle ? `${d.fontStyle} ` : ""}${d.fontVariant ? `${d.fontVariant} ` : ""}${d.fontWeight ? `${d.fontWeight} ` : ""}${d.fontStretch ? `${d.fontStretch} ` : ""}${d.fontSize || ""}${d.lineHeight ? `/${d.lineHeight} ` : ""}${d.fontFamily || ""}`);
  }), r;
}
function vS(a, r) {
  return {
    toolbar: {
      minHeight: 56,
      [a.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [a.up("sm")]: {
        minHeight: 64
      }
    },
    ...r
  };
}
function bS(a) {
  return Math.round(a * 1e5) / 1e5;
}
const Bp = {
  textTransform: "uppercase"
}, Up = '"Roboto", "Helvetica", "Arial", sans-serif';
function _0(a, r) {
  const {
    fontFamily: u = Up,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: d = 400,
    fontWeightMedium: h = 500,
    fontWeightBold: p = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: v = 16,
    // Apply the CSS properties to all the variants.
    allVariants: y,
    pxToRem: T,
    ...x
  } = typeof r == "function" ? r(a) : r, R = o / 14, w = T || ((H) => `${H / v * R}rem`), M = (H, K, J, F, V) => ({
    fontFamily: u,
    fontWeight: H,
    fontSize: w(K),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: J,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...u === Up ? {
      letterSpacing: `${bS(F / K)}em`
    } : {},
    ...V,
    ...y
  }), A = {
    h1: M(s, 96, 1.167, -1.5),
    h2: M(s, 60, 1.2, -0.5),
    h3: M(d, 48, 1.167, 0),
    h4: M(d, 34, 1.235, 0.25),
    h5: M(d, 24, 1.334, 0),
    h6: M(h, 20, 1.6, 0.15),
    subtitle1: M(d, 16, 1.75, 0.15),
    subtitle2: M(h, 14, 1.57, 0.1),
    body1: M(d, 16, 1.5, 0.15),
    body2: M(d, 14, 1.43, 0.15),
    button: M(h, 14, 1.75, 0.4, Bp),
    caption: M(d, 12, 1.66, 0.4),
    overline: M(d, 12, 2.66, 1, Bp),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Le({
    htmlFontSize: v,
    pxToRem: w,
    fontFamily: u,
    fontSize: o,
    fontWeightLight: s,
    fontWeightRegular: d,
    fontWeightMedium: h,
    fontWeightBold: p,
    ...A
  }, x, {
    clone: !1
    // No need to clone deep
  });
}
const SS = 0.2, TS = 0.14, CS = 0.12;
function Vt(...a) {
  return [`${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px rgba(0,0,0,${SS})`, `${a[4]}px ${a[5]}px ${a[6]}px ${a[7]}px rgba(0,0,0,${TS})`, `${a[8]}px ${a[9]}px ${a[10]}px ${a[11]}px rgba(0,0,0,${CS})`].join(",");
}
const ES = ["none", Vt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Vt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Vt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Vt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Vt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Vt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Vt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Vt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Vt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Vt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Vt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Vt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Vt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Vt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Vt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Vt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Vt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Vt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Vt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Vt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Vt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Vt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Vt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Vt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], AS = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, xS = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Hp(a) {
  return `${Math.round(a)}ms`;
}
function OS(a) {
  if (!a)
    return 0;
  const r = a / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function MS(a) {
  const r = {
    ...AS,
    ...a.easing
  }, u = {
    ...xS,
    ...a.duration
  };
  return {
    getAutoHeightDuration: OS,
    create: (s = ["all"], d = {}) => {
      const {
        duration: h = u.standard,
        easing: p = r.easeInOut,
        delay: v = 0,
        ...y
      } = d;
      return (Array.isArray(s) ? s : [s]).map((T) => `${T} ${typeof h == "string" ? h : Hp(h)} ${p} ${typeof v == "string" ? v : Hp(v)}`).join(",");
    },
    ...a,
    easing: r,
    duration: u
  };
}
const RS = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function _S(a) {
  return Mn(a) || typeof a > "u" || typeof a == "string" || typeof a == "boolean" || typeof a == "number" || Array.isArray(a);
}
function z0(a = {}) {
  const r = {
    ...a
  };
  function u(o) {
    const s = Object.entries(o);
    for (let d = 0; d < s.length; d++) {
      const [h, p] = s[d];
      !_S(p) || h.startsWith("unstable_") ? delete o[h] : Mn(p) && (o[h] = {
        ...p
      }, u(o[h]));
    }
  }
  return u(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function $p(a) {
  return typeof a == "number" ? `${(a * 100).toFixed(0)}%` : `calc((${a}) * 100%)`;
}
const zS = (a) => {
  if (!Number.isNaN(+a))
    return +a;
  const r = a.match(/\d*\.?\d+/g);
  if (!r)
    return 0;
  let u = 0;
  for (let o = 0; o < r.length; o += 1)
    u += +r[o];
  return u;
};
function DS(a) {
  Object.assign(a, {
    alpha(r, u) {
      const o = this || a;
      return o.colorSpace ? `oklch(from ${r} l c h / ${typeof u == "string" ? `calc(${u})` : u})` : o.vars ? `rgba(${r.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof u == "string" ? `calc(${u})` : u})` : Uu(r, zS(u));
    },
    lighten(r, u) {
      const o = this || a;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${r}, #fff ${$p(u)})` : Wu(r, u);
    },
    darken(r, u) {
      const o = this || a;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${r}, #000 ${$p(u)})` : Ju(r, u);
    }
  });
}
function ws(a = {}, ...r) {
  const {
    breakpoints: u,
    mixins: o = {},
    spacing: s,
    palette: d = {},
    transitions: h = {},
    typography: p = {},
    shape: v,
    colorSpace: y,
    ...T
  } = a;
  if (a.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  a.generateThemeVars === void 0)
    throw new Error(Fa(20));
  const x = cf({
    ...d,
    colorSpace: y
  }), R = ef(a);
  let w = Le(R, {
    mixins: vS(R.breakpoints, o),
    palette: x,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ES.slice(),
    typography: _0(x, p),
    transitions: MS(h),
    zIndex: {
      ...RS
    }
  });
  return w = Le(w, T), w = r.reduce((M, A) => Le(M, A), w), w.unstable_sxConfig = {
    ...fi,
    ...T?.unstable_sxConfig
  }, w.unstable_sx = function(A) {
    return Pa({
      sx: A,
      theme: this
    });
  }, w.toRuntimeSource = z0, DS(w), w;
}
function Ns(a) {
  let r;
  return a < 1 ? r = 5.11916 * a ** 2 : r = 4.5 * Math.log(a + 1) + 2, Math.round(r * 10) / 1e3;
}
const wS = [...Array(25)].map((a, r) => {
  if (r === 0)
    return "none";
  const u = Ns(r);
  return `linear-gradient(rgba(255 255 255 / ${u}), rgba(255 255 255 / ${u}))`;
});
function D0(a) {
  return {
    inputPlaceholder: a === "dark" ? 0.5 : 0.42,
    inputUnderline: a === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: a === "dark" ? 0.2 : 0.12,
    switchTrack: a === "dark" ? 0.3 : 0.38
  };
}
function w0(a) {
  return a === "dark" ? wS : [];
}
function NS(a) {
  const {
    palette: r = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: u,
    overlays: o,
    colorSpace: s,
    ...d
  } = a, h = cf({
    ...r,
    colorSpace: s
  });
  return {
    palette: h,
    opacity: {
      ...D0(h.mode),
      ...u
    },
    overlays: o || w0(h.mode),
    ...d
  };
}
function BS(a) {
  return !!a[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!a[0].match(/sxConfig$/) || // ends with sxConfig
  a[0] === "palette" && !!a[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const US = (a) => [...[...Array(25)].map((r, u) => `--${a ? `${a}-` : ""}overlays-${u}`), `--${a ? `${a}-` : ""}palette-AppBar-darkBg`, `--${a ? `${a}-` : ""}palette-AppBar-darkColor`], HS = (a) => (r, u) => {
  const o = a.rootSelector || ":root", s = a.colorSchemeSelector;
  let d = s;
  if (s === "class" && (d = ".%s"), s === "data" && (d = "[data-%s]"), s?.startsWith("data-") && !s.includes("%s") && (d = `[${s}="%s"]`), a.defaultColorScheme === r) {
    if (r === "dark") {
      const h = {};
      return US(a.cssVarPrefix).forEach((p) => {
        h[p] = u[p], delete u[p];
      }), d === "media" ? {
        [o]: u,
        "@media (prefers-color-scheme: dark)": {
          [o]: h
        }
      } : d ? {
        [d.replace("%s", r)]: h,
        [`${o}, ${d.replace("%s", r)}`]: u
      } : {
        [o]: {
          ...u,
          ...h
        }
      };
    }
    if (d && d !== "media")
      return `${o}, ${d.replace("%s", String(r))}`;
  } else if (r) {
    if (d === "media")
      return {
        [`@media (prefers-color-scheme: ${String(r)})`]: {
          [o]: u
        }
      };
    if (d)
      return d.replace("%s", String(r));
  }
  return o;
};
function $S(a, r) {
  r.forEach((u) => {
    a[u] || (a[u] = {});
  });
}
function N(a, r, u) {
  !a[r] && u && (a[r] = u);
}
function Pr(a) {
  return typeof a != "string" || !a.startsWith("hsl") ? a : b0(a);
}
function Jn(a, r) {
  `${r}Channel` in a || (a[`${r}Channel`] = Fr(Pr(a[r])));
}
function jS(a) {
  return typeof a == "number" ? `${a}px` : typeof a == "string" || typeof a == "function" || Array.isArray(a) ? a : "8px";
}
const An = (a) => {
  try {
    return a();
  } catch {
  }
}, kS = (a = "mui") => rS(a);
function Ts(a, r, u, o, s) {
  if (!u)
    return;
  u = u === !0 ? {} : u;
  const d = s === "dark" ? "dark" : "light";
  if (!o) {
    r[s] = NS({
      ...u,
      palette: {
        mode: d,
        ...u?.palette
      },
      colorSpace: a
    });
    return;
  }
  const {
    palette: h,
    ...p
  } = ws({
    ...o,
    palette: {
      mode: d,
      ...u?.palette
    },
    colorSpace: a
  });
  return r[s] = {
    ...u,
    palette: h,
    opacity: {
      ...D0(d),
      ...u?.opacity
    },
    overlays: u?.overlays || w0(d)
  }, p;
}
function LS(a = {}, ...r) {
  const {
    colorSchemes: u = {
      light: !0
    },
    defaultColorScheme: o,
    disableCssColorScheme: s = !1,
    cssVarPrefix: d = "mui",
    nativeColor: h = !1,
    shouldSkipGeneratingVar: p = BS,
    colorSchemeSelector: v = u.light && u.dark ? "media" : void 0,
    rootSelector: y = ":root",
    ...T
  } = a, x = Object.keys(u)[0], R = o || (u.light && x !== "light" ? "light" : x), w = kS(d), {
    [R]: M,
    light: A,
    dark: H,
    ...K
  } = u, J = {
    ...K
  };
  let F = M;
  if ((R === "dark" && !("dark" in u) || R === "light" && !("light" in u)) && (F = !0), !F)
    throw new Error(Fa(21, R));
  let V;
  h && (V = "oklch");
  const z = Ts(V, J, F, T, R);
  A && !J.light && Ts(V, J, A, void 0, "light"), H && !J.dark && Ts(V, J, H, void 0, "dark");
  let j = {
    defaultColorScheme: R,
    ...z,
    cssVarPrefix: d,
    colorSchemeSelector: v,
    rootSelector: y,
    getCssVar: w,
    colorSchemes: J,
    font: {
      ...gS(z.typography),
      ...z.font
    },
    spacing: jS(T.spacing)
  };
  Object.keys(j.colorSchemes).forEach((tt) => {
    const g = j.colorSchemes[tt].palette, W = (lt) => {
      const k = lt.split("-"), rt = k[1], et = k[2];
      return w(lt, g[rt][et]);
    };
    g.mode === "light" && (N(g.common, "background", "#fff"), N(g.common, "onBackground", "#000")), g.mode === "dark" && (N(g.common, "background", "#000"), N(g.common, "onBackground", "#fff"));
    function X(lt, k, rt) {
      if (V) {
        let et;
        return lt === Za && (et = `transparent ${((1 - rt) * 100).toFixed(0)}%`), lt === Dt && (et = `#000 ${(rt * 100).toFixed(0)}%`), lt === wt && (et = `#fff ${(rt * 100).toFixed(0)}%`), `color-mix(in ${V}, ${k}, ${et})`;
      }
      return lt(k, rt);
    }
    if ($S(g, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), g.mode === "light") {
      N(g.Alert, "errorColor", X(Dt, g.error.light, 0.6)), N(g.Alert, "infoColor", X(Dt, g.info.light, 0.6)), N(g.Alert, "successColor", X(Dt, g.success.light, 0.6)), N(g.Alert, "warningColor", X(Dt, g.warning.light, 0.6)), N(g.Alert, "errorFilledBg", W("palette-error-main")), N(g.Alert, "infoFilledBg", W("palette-info-main")), N(g.Alert, "successFilledBg", W("palette-success-main")), N(g.Alert, "warningFilledBg", W("palette-warning-main")), N(g.Alert, "errorFilledColor", An(() => g.getContrastText(g.error.main))), N(g.Alert, "infoFilledColor", An(() => g.getContrastText(g.info.main))), N(g.Alert, "successFilledColor", An(() => g.getContrastText(g.success.main))), N(g.Alert, "warningFilledColor", An(() => g.getContrastText(g.warning.main))), N(g.Alert, "errorStandardBg", X(wt, g.error.light, 0.9)), N(g.Alert, "infoStandardBg", X(wt, g.info.light, 0.9)), N(g.Alert, "successStandardBg", X(wt, g.success.light, 0.9)), N(g.Alert, "warningStandardBg", X(wt, g.warning.light, 0.9)), N(g.Alert, "errorIconColor", W("palette-error-main")), N(g.Alert, "infoIconColor", W("palette-info-main")), N(g.Alert, "successIconColor", W("palette-success-main")), N(g.Alert, "warningIconColor", W("palette-warning-main")), N(g.AppBar, "defaultBg", W("palette-grey-100")), N(g.Avatar, "defaultBg", W("palette-grey-400")), N(g.Button, "inheritContainedBg", W("palette-grey-300")), N(g.Button, "inheritContainedHoverBg", W("palette-grey-A100")), N(g.Chip, "defaultBorder", W("palette-grey-400")), N(g.Chip, "defaultAvatarColor", W("palette-grey-700")), N(g.Chip, "defaultIconColor", W("palette-grey-700")), N(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), N(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), N(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), N(g.LinearProgress, "primaryBg", X(wt, g.primary.main, 0.62)), N(g.LinearProgress, "secondaryBg", X(wt, g.secondary.main, 0.62)), N(g.LinearProgress, "errorBg", X(wt, g.error.main, 0.62)), N(g.LinearProgress, "infoBg", X(wt, g.info.main, 0.62)), N(g.LinearProgress, "successBg", X(wt, g.success.main, 0.62)), N(g.LinearProgress, "warningBg", X(wt, g.warning.main, 0.62)), N(g.Skeleton, "bg", V ? X(Za, g.text.primary, 0.11) : `rgba(${W("palette-text-primaryChannel")} / 0.11)`), N(g.Slider, "primaryTrack", X(wt, g.primary.main, 0.62)), N(g.Slider, "secondaryTrack", X(wt, g.secondary.main, 0.62)), N(g.Slider, "errorTrack", X(wt, g.error.main, 0.62)), N(g.Slider, "infoTrack", X(wt, g.info.main, 0.62)), N(g.Slider, "successTrack", X(wt, g.success.main, 0.62)), N(g.Slider, "warningTrack", X(wt, g.warning.main, 0.62));
      const lt = V ? X(Dt, g.background.default, 0.6825) : Au(g.background.default, 0.8);
      N(g.SnackbarContent, "bg", lt), N(g.SnackbarContent, "color", An(() => V ? Ds.text.primary : g.getContrastText(lt))), N(g.SpeedDialAction, "fabHoverBg", Au(g.background.paper, 0.15)), N(g.StepConnector, "border", W("palette-grey-400")), N(g.StepContent, "border", W("palette-grey-400")), N(g.Switch, "defaultColor", W("palette-common-white")), N(g.Switch, "defaultDisabledColor", W("palette-grey-100")), N(g.Switch, "primaryDisabledColor", X(wt, g.primary.main, 0.62)), N(g.Switch, "secondaryDisabledColor", X(wt, g.secondary.main, 0.62)), N(g.Switch, "errorDisabledColor", X(wt, g.error.main, 0.62)), N(g.Switch, "infoDisabledColor", X(wt, g.info.main, 0.62)), N(g.Switch, "successDisabledColor", X(wt, g.success.main, 0.62)), N(g.Switch, "warningDisabledColor", X(wt, g.warning.main, 0.62)), N(g.TableCell, "border", X(wt, X(Za, g.divider, 1), 0.88)), N(g.Tooltip, "bg", X(Za, g.grey[700], 0.92));
    }
    if (g.mode === "dark") {
      N(g.Alert, "errorColor", X(wt, g.error.light, 0.6)), N(g.Alert, "infoColor", X(wt, g.info.light, 0.6)), N(g.Alert, "successColor", X(wt, g.success.light, 0.6)), N(g.Alert, "warningColor", X(wt, g.warning.light, 0.6)), N(g.Alert, "errorFilledBg", W("palette-error-dark")), N(g.Alert, "infoFilledBg", W("palette-info-dark")), N(g.Alert, "successFilledBg", W("palette-success-dark")), N(g.Alert, "warningFilledBg", W("palette-warning-dark")), N(g.Alert, "errorFilledColor", An(() => g.getContrastText(g.error.dark))), N(g.Alert, "infoFilledColor", An(() => g.getContrastText(g.info.dark))), N(g.Alert, "successFilledColor", An(() => g.getContrastText(g.success.dark))), N(g.Alert, "warningFilledColor", An(() => g.getContrastText(g.warning.dark))), N(g.Alert, "errorStandardBg", X(Dt, g.error.light, 0.9)), N(g.Alert, "infoStandardBg", X(Dt, g.info.light, 0.9)), N(g.Alert, "successStandardBg", X(Dt, g.success.light, 0.9)), N(g.Alert, "warningStandardBg", X(Dt, g.warning.light, 0.9)), N(g.Alert, "errorIconColor", W("palette-error-main")), N(g.Alert, "infoIconColor", W("palette-info-main")), N(g.Alert, "successIconColor", W("palette-success-main")), N(g.Alert, "warningIconColor", W("palette-warning-main")), N(g.AppBar, "defaultBg", W("palette-grey-900")), N(g.AppBar, "darkBg", W("palette-background-paper")), N(g.AppBar, "darkColor", W("palette-text-primary")), N(g.Avatar, "defaultBg", W("palette-grey-600")), N(g.Button, "inheritContainedBg", W("palette-grey-800")), N(g.Button, "inheritContainedHoverBg", W("palette-grey-700")), N(g.Chip, "defaultBorder", W("palette-grey-700")), N(g.Chip, "defaultAvatarColor", W("palette-grey-300")), N(g.Chip, "defaultIconColor", W("palette-grey-300")), N(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), N(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), N(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), N(g.LinearProgress, "primaryBg", X(Dt, g.primary.main, 0.5)), N(g.LinearProgress, "secondaryBg", X(Dt, g.secondary.main, 0.5)), N(g.LinearProgress, "errorBg", X(Dt, g.error.main, 0.5)), N(g.LinearProgress, "infoBg", X(Dt, g.info.main, 0.5)), N(g.LinearProgress, "successBg", X(Dt, g.success.main, 0.5)), N(g.LinearProgress, "warningBg", X(Dt, g.warning.main, 0.5)), N(g.Skeleton, "bg", V ? X(Za, g.text.primary, 0.13) : `rgba(${W("palette-text-primaryChannel")} / 0.13)`), N(g.Slider, "primaryTrack", X(Dt, g.primary.main, 0.5)), N(g.Slider, "secondaryTrack", X(Dt, g.secondary.main, 0.5)), N(g.Slider, "errorTrack", X(Dt, g.error.main, 0.5)), N(g.Slider, "infoTrack", X(Dt, g.info.main, 0.5)), N(g.Slider, "successTrack", X(Dt, g.success.main, 0.5)), N(g.Slider, "warningTrack", X(Dt, g.warning.main, 0.5));
      const lt = V ? X(wt, g.background.default, 0.985) : Au(g.background.default, 0.98);
      N(g.SnackbarContent, "bg", lt), N(g.SnackbarContent, "color", An(() => V ? M0.text.primary : g.getContrastText(lt))), N(g.SpeedDialAction, "fabHoverBg", Au(g.background.paper, 0.15)), N(g.StepConnector, "border", W("palette-grey-600")), N(g.StepContent, "border", W("palette-grey-600")), N(g.Switch, "defaultColor", W("palette-grey-300")), N(g.Switch, "defaultDisabledColor", W("palette-grey-600")), N(g.Switch, "primaryDisabledColor", X(Dt, g.primary.main, 0.55)), N(g.Switch, "secondaryDisabledColor", X(Dt, g.secondary.main, 0.55)), N(g.Switch, "errorDisabledColor", X(Dt, g.error.main, 0.55)), N(g.Switch, "infoDisabledColor", X(Dt, g.info.main, 0.55)), N(g.Switch, "successDisabledColor", X(Dt, g.success.main, 0.55)), N(g.Switch, "warningDisabledColor", X(Dt, g.warning.main, 0.55)), N(g.TableCell, "border", X(Dt, X(Za, g.divider, 1), 0.68)), N(g.Tooltip, "bg", X(Za, g.grey[700], 0.92));
    }
    Jn(g.background, "default"), Jn(g.background, "paper"), Jn(g.common, "background"), Jn(g.common, "onBackground"), Jn(g, "divider"), Object.keys(g).forEach((lt) => {
      const k = g[lt];
      lt !== "tonalOffset" && k && typeof k == "object" && (k.main && N(g[lt], "mainChannel", Fr(Pr(k.main))), k.light && N(g[lt], "lightChannel", Fr(Pr(k.light))), k.dark && N(g[lt], "darkChannel", Fr(Pr(k.dark))), k.contrastText && N(g[lt], "contrastTextChannel", Fr(Pr(k.contrastText))), lt === "text" && (Jn(g[lt], "primary"), Jn(g[lt], "secondary")), lt === "action" && (k.active && Jn(g[lt], "active"), k.selected && Jn(g[lt], "selected")));
    });
  }), j = r.reduce((tt, g) => Le(tt, g), j);
  const P = {
    prefix: d,
    disableCssColorScheme: s,
    shouldSkipGeneratingVar: p,
    getSelector: HS(j),
    enableContrastVars: h
  }, {
    vars: at,
    generateThemeVars: L,
    generateStyleSheets: Q
  } = oS(j, P);
  return j.vars = at, Object.entries(j.colorSchemes[j.defaultColorScheme]).forEach(([tt, g]) => {
    j[tt] = g;
  }), j.generateThemeVars = L, j.generateStyleSheets = Q, j.generateSpacing = function() {
    return h0(T.spacing, Is(this));
  }, j.getColorSchemeSelector = cS(v), j.spacing = j.generateSpacing(), j.shouldSkipGeneratingVar = p, j.unstable_sxConfig = {
    ...fi,
    ...T?.unstable_sxConfig
  }, j.unstable_sx = function(g) {
    return Pa({
      sx: g,
      theme: this
    });
  }, j.toRuntimeSource = z0, j;
}
function jp(a, r, u) {
  a.colorSchemes && u && (a.colorSchemes[r] = {
    ...u !== !0 && u,
    palette: cf({
      ...u === !0 ? {} : u.palette,
      mode: r
    })
    // cast type to skip module augmentation test
  });
}
function ti(a = {}, ...r) {
  const {
    palette: u,
    cssVariables: o = !1,
    colorSchemes: s = u ? void 0 : {
      light: !0
    },
    defaultColorScheme: d = u?.mode,
    ...h
  } = a, p = d || "light", v = s?.[p], y = {
    ...s,
    ...u ? {
      [p]: {
        ...typeof v != "boolean" && v,
        palette: u
      }
    } : void 0
  };
  if (o === !1) {
    if (!("colorSchemes" in a))
      return ws(a, ...r);
    let T = u;
    "palette" in a || y[p] && (y[p] !== !0 ? T = y[p].palette : p === "dark" && (T = {
      mode: "dark"
    }));
    const x = ws({
      ...a,
      palette: T
    }, ...r);
    return x.defaultColorScheme = p, x.colorSchemes = y, x.palette.mode === "light" && (x.colorSchemes.light = {
      ...y.light !== !0 && y.light,
      palette: x.palette
    }, jp(x, "dark", y.dark)), x.palette.mode === "dark" && (x.colorSchemes.dark = {
      ...y.dark !== !0 && y.dark,
      palette: x.palette
    }, jp(x, "light", y.light)), x;
  }
  return !u && !("light" in y) && p === "light" && (y.light = !0), LS({
    ...h,
    colorSchemes: y,
    defaultColorScheme: p,
    ...typeof o != "boolean" && o
  }, ...r);
}
function qS(a) {
  return String(a).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function YS(a) {
  return parseFloat(a);
}
const sf = ti();
function VS() {
  const a = m0(sf);
  return a[Pn] || a;
}
function GS(a) {
  return a !== "ownerState" && a !== "theme" && a !== "sx" && a !== "as";
}
const XS = (a) => GS(a) && a !== "classes", ae = _b({
  themeId: Pn,
  defaultTheme: sf,
  rootShouldForwardProp: XS
});
function QS({
  theme: a,
  ...r
}) {
  const u = Pn in a ? a[Pn] : void 0;
  return /* @__PURE__ */ Z.jsx(A0, {
    ...r,
    themeId: u ? Pn : void 0,
    theme: u || a
  });
}
const xu = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: KS
} = lS({
  themeId: Pn,
  // @ts-ignore ignore module augmentation tests
  theme: () => ti({
    cssVariables: !0
  }),
  colorSchemeStorageKey: xu.colorSchemeStorageKey,
  modeStorageKey: xu.modeStorageKey,
  defaultColorScheme: {
    light: xu.defaultLightColorScheme,
    dark: xu.defaultDarkColorScheme
  },
  resolveTheme: (a) => {
    const r = {
      ...a,
      typography: _0(a.palette, a.typography)
    };
    return r.unstable_sx = function(o) {
      return Pa({
        sx: o,
        theme: this
      });
    }, r;
  }
}), ZS = KS;
function JS({
  theme: a,
  ...r
}) {
  const u = B.useMemo(() => {
    if (typeof a == "function")
      return a;
    const o = Pn in a ? a[Pn] : a;
    return "colorSchemes" in o ? null : "vars" in o ? a : {
      ...a,
      vars: null
    };
  }, [a]);
  return u ? /* @__PURE__ */ Z.jsx(QS, {
    theme: u,
    ...r
  }) : /* @__PURE__ */ Z.jsx(ZS, {
    theme: a,
    ...r
  });
}
function WS(a) {
  return /* @__PURE__ */ Z.jsx(p0, {
    ...a,
    defaultTheme: sf,
    themeId: Pn
  });
}
function N0(a) {
  return function(u) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ Z.jsx(WS, {
        styles: typeof a == "function" ? (o) => a({
          theme: o,
          ...u
        }) : a
      })
    );
  };
}
function FS() {
  return Cb;
}
const nn = Wb;
function ln(a) {
  return Qb(a);
}
function PS(a) {
  return pn("MuiSvgIcon", a);
}
yn("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const IS = (a) => {
  const {
    color: r,
    fontSize: u,
    classes: o
  } = a, s = {
    root: ["root", r !== "inherit" && `color${ht(r)}`, `fontSize${ht(u)}`]
  };
  return _n(s, PS, o);
}, t2 = ae("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: u
    } = a;
    return [r.root, u.color !== "inherit" && r[`color${ht(u.color)}`], r[`fontSize${ht(u.fontSize)}`]];
  }
})(nn(({
  theme: a
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  display: "inline-block",
  flexShrink: 0,
  transition: a.transitions?.create?.("fill", {
    duration: (a.vars ?? a).transitions?.duration?.shorter
  }),
  variants: [
    {
      props: (r) => !r.hasSvgAsChild,
      style: {
        // the <svg> will define the property that has `currentColor`
        // for example heroicons uses fill="none" and stroke="currentColor"
        fill: "currentColor"
      }
    },
    {
      props: {
        fontSize: "inherit"
      },
      style: {
        fontSize: "inherit"
      }
    },
    {
      props: {
        fontSize: "small"
      },
      style: {
        fontSize: a.typography?.pxToRem?.(20) || "1.25rem"
      }
    },
    {
      props: {
        fontSize: "medium"
      },
      style: {
        fontSize: a.typography?.pxToRem?.(24) || "1.5rem"
      }
    },
    {
      props: {
        fontSize: "large"
      },
      style: {
        fontSize: a.typography?.pxToRem?.(35) || "2.1875rem"
      }
    },
    // TODO v5 deprecate color prop, v6 remove for sx
    ...Object.entries((a.vars ?? a).palette).filter(([, r]) => r && r.main).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        color: (a.vars ?? a).palette?.[r]?.main
      }
    })),
    {
      props: {
        color: "action"
      },
      style: {
        color: (a.vars ?? a).palette?.action?.active
      }
    },
    {
      props: {
        color: "disabled"
      },
      style: {
        color: (a.vars ?? a).palette?.action?.disabled
      }
    },
    {
      props: {
        color: "inherit"
      },
      style: {
        color: void 0
      }
    }
  ]
}))), Bs = /* @__PURE__ */ B.forwardRef(function(r, u) {
  const o = ln({
    props: r,
    name: "MuiSvgIcon"
  }), {
    children: s,
    className: d,
    color: h = "inherit",
    component: p = "svg",
    fontSize: v = "medium",
    htmlColor: y,
    inheritViewBox: T = !1,
    titleAccess: x,
    viewBox: R = "0 0 24 24",
    ...w
  } = o, M = /* @__PURE__ */ B.isValidElement(s) && s.type === "svg", A = {
    ...o,
    color: h,
    component: p,
    fontSize: v,
    instanceFontSize: r.fontSize,
    inheritViewBox: T,
    viewBox: R,
    hasSvgAsChild: M
  }, H = {};
  T || (H.viewBox = R);
  const K = IS(A);
  return /* @__PURE__ */ Z.jsxs(t2, {
    as: p,
    className: qt(K.root, d),
    focusable: "false",
    color: y,
    "aria-hidden": x ? void 0 : !0,
    role: x ? "img" : void 0,
    ref: u,
    ...H,
    ...w,
    ...M && s.props,
    ownerState: A,
    children: [M ? s.props.children : s, x ? /* @__PURE__ */ Z.jsx("title", {
      children: x
    }) : null]
  });
});
Bs.muiName = "SvgIcon";
function Ql(a, r) {
  function u(o, s) {
    return /* @__PURE__ */ Z.jsx(Bs, {
      "data-testid": void 0,
      ref: s,
      ...o,
      children: a
    });
  }
  return u.muiName = Bs.muiName, /* @__PURE__ */ B.memo(/* @__PURE__ */ B.forwardRef(u));
}
function zu(a) {
  const r = B.useRef(a);
  return af(() => {
    r.current = a;
  }), B.useRef((...u) => (
    // @ts-expect-error hide `this`
    (0, r.current)(...u)
  )).current;
}
function Hu(...a) {
  const r = B.useRef(void 0), u = B.useCallback((o) => {
    const s = a.map((d) => {
      if (d == null)
        return null;
      if (typeof d == "function") {
        const h = d, p = h(o);
        return typeof p == "function" ? p : () => {
          h(null);
        };
      }
      return d.current = o, () => {
        d.current = null;
      };
    });
    return () => {
      s.forEach((d) => d?.());
    };
  }, a);
  return B.useMemo(() => a.every((o) => o == null) ? null : (o) => {
    r.current && (r.current(), r.current = void 0), o != null && (r.current = u(o));
  }, a);
}
function e2(a, r) {
  if (a == null) return {};
  var u = {};
  for (var o in a) if ({}.hasOwnProperty.call(a, o)) {
    if (r.indexOf(o) !== -1) continue;
    u[o] = a[o];
  }
  return u;
}
function Us(a, r) {
  return Us = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, o) {
    return u.__proto__ = o, u;
  }, Us(a, r);
}
function n2(a, r) {
  a.prototype = Object.create(r.prototype), a.prototype.constructor = a, Us(a, r);
}
const kp = ql.createContext(null);
function a2(a) {
  if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function ff(a, r) {
  var u = function(d) {
    return r && B.isValidElement(d) ? r(d) : d;
  }, o = /* @__PURE__ */ Object.create(null);
  return a && B.Children.map(a, function(s) {
    return s;
  }).forEach(function(s) {
    o[s.key] = u(s);
  }), o;
}
function l2(a, r) {
  a = a || {}, r = r || {};
  function u(T) {
    return T in r ? r[T] : a[T];
  }
  var o = /* @__PURE__ */ Object.create(null), s = [];
  for (var d in a)
    d in r ? s.length && (o[d] = s, s = []) : s.push(d);
  var h, p = {};
  for (var v in r) {
    if (o[v])
      for (h = 0; h < o[v].length; h++) {
        var y = o[v][h];
        p[o[v][h]] = u(y);
      }
    p[v] = u(v);
  }
  for (h = 0; h < s.length; h++)
    p[s[h]] = u(s[h]);
  return p;
}
function Wa(a, r, u) {
  return u[r] != null ? u[r] : a.props[r];
}
function r2(a, r) {
  return ff(a.children, function(u) {
    return B.cloneElement(u, {
      onExited: r.bind(null, u),
      in: !0,
      appear: Wa(u, "appear", a),
      enter: Wa(u, "enter", a),
      exit: Wa(u, "exit", a)
    });
  });
}
function i2(a, r, u) {
  var o = ff(a.children), s = l2(r, o);
  return Object.keys(s).forEach(function(d) {
    var h = s[d];
    if (B.isValidElement(h)) {
      var p = d in r, v = d in o, y = r[d], T = B.isValidElement(y) && !y.props.in;
      v && (!p || T) ? s[d] = B.cloneElement(h, {
        onExited: u.bind(null, h),
        in: !0,
        exit: Wa(h, "exit", a),
        enter: Wa(h, "enter", a)
      }) : !v && p && !T ? s[d] = B.cloneElement(h, {
        in: !1
      }) : v && p && B.isValidElement(y) && (s[d] = B.cloneElement(h, {
        onExited: u.bind(null, h),
        in: y.props.in,
        exit: Wa(h, "exit", a),
        enter: Wa(h, "enter", a)
      }));
    }
  }), s;
}
var u2 = Object.values || function(a) {
  return Object.keys(a).map(function(r) {
    return a[r];
  });
}, o2 = {
  component: "div",
  childFactory: function(r) {
    return r;
  }
}, df = /* @__PURE__ */ function(a) {
  n2(r, a);
  function r(o, s) {
    var d;
    d = a.call(this, o, s) || this;
    var h = d.handleExited.bind(a2(d));
    return d.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: h,
      firstRender: !0
    }, d;
  }
  var u = r.prototype;
  return u.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, u.componentWillUnmount = function() {
    this.mounted = !1;
  }, r.getDerivedStateFromProps = function(s, d) {
    var h = d.children, p = d.handleExited, v = d.firstRender;
    return {
      children: v ? r2(s, p) : i2(s, h, p),
      firstRender: !1
    };
  }, u.handleExited = function(s, d) {
    var h = ff(this.props.children);
    s.key in h || (s.props.onExited && s.props.onExited(d), this.mounted && this.setState(function(p) {
      var v = wu({}, p.children);
      return delete v[s.key], {
        children: v
      };
    }));
  }, u.render = function() {
    var s = this.props, d = s.component, h = s.childFactory, p = e2(s, ["component", "childFactory"]), v = this.state.contextValue, y = u2(this.state.children).map(h);
    return delete p.appear, delete p.enter, delete p.exit, d === null ? /* @__PURE__ */ ql.createElement(kp.Provider, {
      value: v
    }, y) : /* @__PURE__ */ ql.createElement(kp.Provider, {
      value: v
    }, /* @__PURE__ */ ql.createElement(d, p, y));
  }, r;
}(ql.Component);
df.propTypes = {};
df.defaultProps = o2;
const Lp = {};
function B0(a, r) {
  const u = B.useRef(Lp);
  return u.current === Lp && (u.current = a(r)), u;
}
const c2 = [];
function s2(a) {
  B.useEffect(a, c2);
}
class hf {
  static create() {
    return new hf();
  }
  currentId = null;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(r, u) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, u();
    }, r);
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
  };
  disposeEffect = () => this.clear;
}
function f2() {
  const a = B0(hf.create).current;
  return s2(a.disposeEffect), a;
}
function d2(a) {
  return pn("MuiPaper", a);
}
yn("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const h2 = (a) => {
  const {
    square: r,
    elevation: u,
    variant: o,
    classes: s
  } = a, d = {
    root: ["root", o, !r && "rounded", o === "elevation" && `elevation${u}`]
  };
  return _n(d, d2, s);
}, m2 = ae("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: u
    } = a;
    return [r.root, r[u.variant], !u.square && r.rounded, u.variant === "elevation" && r[`elevation${u.elevation}`]];
  }
})(nn(({
  theme: a
}) => ({
  backgroundColor: (a.vars || a).palette.background.paper,
  color: (a.vars || a).palette.text.primary,
  transition: a.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: r
    }) => !r.square,
    style: {
      borderRadius: a.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(a.vars || a).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), p2 = /* @__PURE__ */ B.forwardRef(function(r, u) {
  const o = ln({
    props: r,
    name: "MuiPaper"
  }), s = VS(), {
    className: d,
    component: h = "div",
    elevation: p = 1,
    square: v = !1,
    variant: y = "elevation",
    ...T
  } = o, x = {
    ...o,
    component: h,
    elevation: p,
    square: v,
    variant: y
  }, R = h2(x);
  return /* @__PURE__ */ Z.jsx(m2, {
    as: h,
    ownerState: x,
    className: qt(R.root, d),
    ref: u,
    ...T,
    style: {
      ...y === "elevation" && {
        "--Paper-shadow": (s.vars || s).shadows[p],
        ...s.vars && {
          "--Paper-overlay": s.vars.overlays?.[p]
        },
        ...!s.vars && s.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Uu("#fff", Ns(p))}, ${Uu("#fff", Ns(p))})`
        }
      },
      ...T.style
    }
  });
});
function y2(a) {
  return typeof a == "string";
}
function g2(a, r, u) {
  return a === void 0 || y2(a) ? r : {
    ...r,
    ownerState: {
      ...r.ownerState,
      ...u
    }
  };
}
function v2(a, r, u) {
  return typeof a == "function" ? a(r, u) : a;
}
function b2(a, r = []) {
  if (a === void 0)
    return {};
  const u = {};
  return Object.keys(a).filter((o) => o.match(/^on[A-Z]/) && typeof a[o] == "function" && !r.includes(o)).forEach((o) => {
    u[o] = a[o];
  }), u;
}
function qp(a) {
  if (a === void 0)
    return {};
  const r = {};
  return Object.keys(a).filter((u) => !(u.match(/^on[A-Z]/) && typeof a[u] == "function")).forEach((u) => {
    r[u] = a[u];
  }), r;
}
function S2(a) {
  const {
    getSlotProps: r,
    additionalProps: u,
    externalSlotProps: o,
    externalForwardedProps: s,
    className: d
  } = a;
  if (!r) {
    const w = qt(u?.className, d, s?.className, o?.className), M = {
      ...u?.style,
      ...s?.style,
      ...o?.style
    }, A = {
      ...u,
      ...s,
      ...o
    };
    return w.length > 0 && (A.className = w), Object.keys(M).length > 0 && (A.style = M), {
      props: A,
      internalRef: void 0
    };
  }
  const h = b2({
    ...s,
    ...o
  }), p = qp(o), v = qp(s), y = r(h), T = qt(y?.className, u?.className, d, s?.className, o?.className), x = {
    ...y?.style,
    ...u?.style,
    ...s?.style,
    ...o?.style
  }, R = {
    ...y,
    ...u,
    ...v,
    ...p
  };
  return T.length > 0 && (R.className = T), Object.keys(x).length > 0 && (R.style = x), {
    props: R,
    internalRef: y.ref
  };
}
function Ea(a, r) {
  const {
    className: u,
    elementType: o,
    ownerState: s,
    externalForwardedProps: d,
    internalForwardedProps: h,
    shouldForwardComponentProp: p = !1,
    ...v
  } = r, {
    component: y,
    slots: T = {
      [a]: void 0
    },
    slotProps: x = {
      [a]: void 0
    },
    ...R
  } = d, w = T[a] || o, M = v2(x[a], s), {
    props: {
      component: A,
      ...H
    },
    internalRef: K
  } = S2({
    className: u,
    ...v,
    externalForwardedProps: a === "root" ? R : void 0,
    externalSlotProps: M
  }), J = Hu(K, M?.ref, r.ref), F = a === "root" ? A || y : A, V = g2(w, {
    ...a === "root" && !y && !T[a] && h,
    ...a !== "root" && !T[a] && h,
    ...H,
    ...F && !p && {
      as: F
    },
    ...F && p && {
      component: F
    },
    ref: J
  }, s);
  return [w, V];
}
function Yp(a) {
  try {
    return a.matches(":focus-visible");
  } catch {
  }
  return !1;
}
class $u {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new $u();
  }
  static use() {
    const r = B0($u.create).current, [u, o] = B.useState(!1);
    return r.shouldMount = u, r.setShouldMount = o, B.useEffect(r.mountEffect, [u]), r;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = C2(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  mountEffect = () => {
    this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
  };
  /* Ripple API */
  start(...r) {
    this.mount().then(() => this.ref.current?.start(...r));
  }
  stop(...r) {
    this.mount().then(() => this.ref.current?.stop(...r));
  }
  pulsate(...r) {
    this.mount().then(() => this.ref.current?.pulsate(...r));
  }
}
function T2() {
  return $u.use();
}
function C2() {
  let a, r;
  const u = new Promise((o, s) => {
    a = o, r = s;
  });
  return u.resolve = a, u.reject = r, u;
}
function E2(a) {
  const {
    className: r,
    classes: u,
    pulsate: o = !1,
    rippleX: s,
    rippleY: d,
    rippleSize: h,
    in: p,
    onExited: v,
    timeout: y
  } = a, [T, x] = B.useState(!1), R = qt(r, u.ripple, u.rippleVisible, o && u.ripplePulsate), w = {
    width: h,
    height: h,
    top: -(h / 2) + d,
    left: -(h / 2) + s
  }, M = qt(u.child, T && u.childLeaving, o && u.childPulsate);
  return !p && !T && x(!0), B.useEffect(() => {
    if (!p && v != null) {
      const A = setTimeout(v, y);
      return () => {
        clearTimeout(A);
      };
    }
  }, [v, p, y]), /* @__PURE__ */ Z.jsx("span", {
    className: R,
    style: w,
    children: /* @__PURE__ */ Z.jsx("span", {
      className: M
    })
  });
}
const tn = yn("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Hs = 550, A2 = 80, x2 = Ia`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, O2 = Ia`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, M2 = Ia`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, R2 = ae("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), _2 = ae(E2, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${tn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${x2};
    animation-duration: ${Hs}ms;
    animation-timing-function: ${({
  theme: a
}) => a.transitions.easing.easeInOut};
  }

  &.${tn.ripplePulsate} {
    animation-duration: ${({
  theme: a
}) => a.transitions.duration.shorter}ms;
  }

  & .${tn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${tn.childLeaving} {
    opacity: 0;
    animation-name: ${O2};
    animation-duration: ${Hs}ms;
    animation-timing-function: ${({
  theme: a
}) => a.transitions.easing.easeInOut};
  }

  & .${tn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${M2};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: a
}) => a.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, z2 = /* @__PURE__ */ B.forwardRef(function(r, u) {
  const o = ln({
    props: r,
    name: "MuiTouchRipple"
  }), {
    center: s = !1,
    classes: d = {},
    className: h,
    ...p
  } = o, [v, y] = B.useState([]), T = B.useRef(0), x = B.useRef(null);
  B.useEffect(() => {
    x.current && (x.current(), x.current = null);
  }, [v]);
  const R = B.useRef(!1), w = f2(), M = B.useRef(null), A = B.useRef(null), H = B.useCallback((V) => {
    const {
      pulsate: z,
      rippleX: j,
      rippleY: P,
      rippleSize: at,
      cb: L
    } = V;
    y((Q) => [...Q, /* @__PURE__ */ Z.jsx(_2, {
      classes: {
        ripple: qt(d.ripple, tn.ripple),
        rippleVisible: qt(d.rippleVisible, tn.rippleVisible),
        ripplePulsate: qt(d.ripplePulsate, tn.ripplePulsate),
        child: qt(d.child, tn.child),
        childLeaving: qt(d.childLeaving, tn.childLeaving),
        childPulsate: qt(d.childPulsate, tn.childPulsate)
      },
      timeout: Hs,
      pulsate: z,
      rippleX: j,
      rippleY: P,
      rippleSize: at
    }, T.current)]), T.current += 1, x.current = L;
  }, [d]), K = B.useCallback((V = {}, z = {}, j = () => {
  }) => {
    const {
      pulsate: P = !1,
      center: at = s || z.pulsate,
      fakeElement: L = !1
      // For test purposes
    } = z;
    if (V?.type === "mousedown" && R.current) {
      R.current = !1;
      return;
    }
    V?.type === "touchstart" && (R.current = !0);
    const Q = L ? null : A.current, tt = Q ? Q.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let g, W, X;
    if (at || V === void 0 || V.clientX === 0 && V.clientY === 0 || !V.clientX && !V.touches)
      g = Math.round(tt.width / 2), W = Math.round(tt.height / 2);
    else {
      const {
        clientX: lt,
        clientY: k
      } = V.touches && V.touches.length > 0 ? V.touches[0] : V;
      g = Math.round(lt - tt.left), W = Math.round(k - tt.top);
    }
    if (at)
      X = Math.sqrt((2 * tt.width ** 2 + tt.height ** 2) / 3), X % 2 === 0 && (X += 1);
    else {
      const lt = Math.max(Math.abs((Q ? Q.clientWidth : 0) - g), g) * 2 + 2, k = Math.max(Math.abs((Q ? Q.clientHeight : 0) - W), W) * 2 + 2;
      X = Math.sqrt(lt ** 2 + k ** 2);
    }
    V?.touches ? M.current === null && (M.current = () => {
      H({
        pulsate: P,
        rippleX: g,
        rippleY: W,
        rippleSize: X,
        cb: j
      });
    }, w.start(A2, () => {
      M.current && (M.current(), M.current = null);
    })) : H({
      pulsate: P,
      rippleX: g,
      rippleY: W,
      rippleSize: X,
      cb: j
    });
  }, [s, H, w]), J = B.useCallback(() => {
    K({}, {
      pulsate: !0
    });
  }, [K]), F = B.useCallback((V, z) => {
    if (w.clear(), V?.type === "touchend" && M.current) {
      M.current(), M.current = null, w.start(0, () => {
        F(V, z);
      });
      return;
    }
    M.current = null, y((j) => j.length > 0 ? j.slice(1) : j), x.current = z;
  }, [w]);
  return B.useImperativeHandle(u, () => ({
    pulsate: J,
    start: K,
    stop: F
  }), [J, K, F]), /* @__PURE__ */ Z.jsx(R2, {
    className: qt(tn.root, d.root, h),
    ref: A,
    ...p,
    children: /* @__PURE__ */ Z.jsx(df, {
      component: null,
      exit: !0,
      children: v
    })
  });
});
function D2(a) {
  return pn("MuiButtonBase", a);
}
const w2 = yn("MuiButtonBase", ["root", "disabled", "focusVisible"]), N2 = (a) => {
  const {
    disabled: r,
    focusVisible: u,
    focusVisibleClassName: o,
    classes: s
  } = a, h = _n({
    root: ["root", r && "disabled", u && "focusVisible"]
  }, D2, s);
  return u && o && (h.root += ` ${o}`), h;
}, B2 = ae("button", {
  name: "MuiButtonBase",
  slot: "Root"
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${w2.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), $s = /* @__PURE__ */ B.forwardRef(function(r, u) {
  const o = ln({
    props: r,
    name: "MuiButtonBase"
  }), {
    action: s,
    centerRipple: d = !1,
    children: h,
    className: p,
    component: v = "button",
    disabled: y = !1,
    disableRipple: T = !1,
    disableTouchRipple: x = !1,
    focusRipple: R = !1,
    focusVisibleClassName: w,
    LinkComponent: M = "a",
    onBlur: A,
    onClick: H,
    onContextMenu: K,
    onDragLeave: J,
    onFocus: F,
    onFocusVisible: V,
    onKeyDown: z,
    onKeyUp: j,
    onMouseDown: P,
    onMouseLeave: at,
    onMouseUp: L,
    onTouchEnd: Q,
    onTouchMove: tt,
    onTouchStart: g,
    tabIndex: W = 0,
    TouchRippleProps: X,
    touchRippleRef: lt,
    type: k,
    ...rt
  } = o, et = B.useRef(null), ft = T2(), S = Hu(ft.ref, lt), [Y, nt] = B.useState(!1);
  y && Y && nt(!1), B.useImperativeHandle(s, () => ({
    focusVisible: () => {
      nt(!0), et.current.focus();
    }
  }), []);
  const it = ft.shouldMount && !T && !y;
  B.useEffect(() => {
    Y && R && !T && ft.pulsate();
  }, [T, R, Y, ft]);
  const I = Wn(ft, "start", P, x), yt = Wn(ft, "stop", K, x), ut = Wn(ft, "stop", J, x), xt = Wn(ft, "stop", L, x), Ct = Wn(ft, "stop", (mt) => {
    Y && mt.preventDefault(), at && at(mt);
  }, x), Lt = Wn(ft, "start", g, x), Nt = Wn(ft, "stop", Q, x), Ee = Wn(ft, "stop", tt, x), gn = Wn(ft, "stop", (mt) => {
    Yp(mt.target) || nt(!1), A && A(mt);
  }, !1), _e = zu((mt) => {
    et.current || (et.current = mt.currentTarget), Yp(mt.target) && (nt(!0), V && V(mt)), F && F(mt);
  }), rn = () => {
    const mt = et.current;
    return v && v !== "button" && !(mt.tagName === "A" && mt.href);
  }, zn = zu((mt) => {
    R && !mt.repeat && Y && mt.key === " " && ft.stop(mt, () => {
      ft.start(mt);
    }), mt.target === mt.currentTarget && rn() && mt.key === " " && mt.preventDefault(), z && z(mt), mt.target === mt.currentTarget && rn() && mt.key === "Enter" && !y && (mt.preventDefault(), H && H(mt));
  }), vn = zu((mt) => {
    R && mt.key === " " && Y && !mt.defaultPrevented && ft.stop(mt, () => {
      ft.pulsate(mt);
    }), j && j(mt), H && mt.target === mt.currentTarget && rn() && mt.key === " " && !mt.defaultPrevented && H(mt);
  });
  let un = v;
  un === "button" && (rt.href || rt.to) && (un = M);
  const Ae = {};
  un === "button" ? (Ae.type = k === void 0 ? "button" : k, Ae.disabled = y) : (!rt.href && !rt.to && (Ae.role = "button"), y && (Ae["aria-disabled"] = y));
  const se = Hu(u, et), on = {
    ...o,
    centerRipple: d,
    component: v,
    disabled: y,
    disableRipple: T,
    disableTouchRipple: x,
    focusRipple: R,
    tabIndex: W,
    focusVisible: Y
  }, Dn = N2(on);
  return /* @__PURE__ */ Z.jsxs(B2, {
    as: un,
    className: qt(Dn.root, p),
    ownerState: on,
    onBlur: gn,
    onClick: H,
    onContextMenu: yt,
    onFocus: _e,
    onKeyDown: zn,
    onKeyUp: vn,
    onMouseDown: I,
    onMouseLeave: Ct,
    onMouseUp: xt,
    onDragLeave: ut,
    onTouchEnd: Nt,
    onTouchMove: Ee,
    onTouchStart: Lt,
    ref: se,
    tabIndex: y ? -1 : W,
    type: k,
    ...Ae,
    ...rt,
    children: [h, it ? /* @__PURE__ */ Z.jsx(z2, {
      ref: S,
      center: d,
      ...X
    }) : null]
  });
});
function Wn(a, r, u, o = !1) {
  return zu((s) => (u && u(s), o || a[r](s), !0));
}
function U2(a) {
  return typeof a.main == "string";
}
function H2(a, r = []) {
  if (!U2(a))
    return !1;
  for (const u of r)
    if (!a.hasOwnProperty(u) || typeof a[u] != "string")
      return !1;
  return !0;
}
function mn(a = []) {
  return ([, r]) => r && H2(r, a);
}
function $2(a) {
  return pn("MuiAlert", a);
}
const Vp = yn("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);
function j2(a) {
  return pn("MuiCircularProgress", a);
}
yn("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const hn = 44, js = Ia`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, ks = Ia`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, k2 = typeof js != "string" ? oi`
        animation: ${js} 1.4s linear infinite;
      ` : null, L2 = typeof ks != "string" ? oi`
        animation: ${ks} 1.4s ease-in-out infinite;
      ` : null, q2 = (a) => {
  const {
    classes: r,
    variant: u,
    color: o,
    disableShrink: s
  } = a, d = {
    root: ["root", u, `color${ht(o)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", `circle${ht(u)}`, s && "circleDisableShrink"]
  };
  return _n(d, j2, r);
}, Y2 = ae("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: u
    } = a;
    return [r.root, r[u.variant], r[`color${ht(u.color)}`]];
  }
})(nn(({
  theme: a
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: a.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: k2 || {
      animation: `${js} 1.4s linear infinite`
    }
  }, ...Object.entries(a.palette).filter(mn()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      color: (a.vars || a).palette[r].main
    }
  }))]
}))), V2 = ae("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), G2 = ae("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (a, r) => {
    const {
      ownerState: u
    } = a;
    return [r.circle, r[`circle${ht(u.variant)}`], u.disableShrink && r.circleDisableShrink];
  }
})(nn(({
  theme: a
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: a.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: r
    }) => r.variant === "indeterminate" && !r.disableShrink,
    style: L2 || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${ks} 1.4s ease-in-out infinite`
    }
  }]
}))), X2 = ae("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(nn(({
  theme: a
}) => ({
  stroke: "currentColor",
  opacity: (a.vars || a).palette.action.activatedOpacity
}))), Q2 = /* @__PURE__ */ B.forwardRef(function(r, u) {
  const o = ln({
    props: r,
    name: "MuiCircularProgress"
  }), {
    className: s,
    color: d = "primary",
    disableShrink: h = !1,
    enableTrackSlot: p = !1,
    size: v = 40,
    style: y,
    thickness: T = 3.6,
    value: x = 0,
    variant: R = "indeterminate",
    ...w
  } = o, M = {
    ...o,
    color: d,
    disableShrink: h,
    size: v,
    thickness: T,
    value: x,
    variant: R,
    enableTrackSlot: p
  }, A = q2(M), H = {}, K = {}, J = {};
  if (R === "determinate") {
    const F = 2 * Math.PI * ((hn - T) / 2);
    H.strokeDasharray = F.toFixed(3), J["aria-valuenow"] = Math.round(x), H.strokeDashoffset = `${((100 - x) / 100 * F).toFixed(3)}px`, K.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ Z.jsx(Y2, {
    className: qt(A.root, s),
    style: {
      width: v,
      height: v,
      ...K,
      ...y
    },
    ownerState: M,
    ref: u,
    role: "progressbar",
    ...J,
    ...w,
    children: /* @__PURE__ */ Z.jsxs(V2, {
      className: A.svg,
      ownerState: M,
      viewBox: `${hn / 2} ${hn / 2} ${hn} ${hn}`,
      children: [p ? /* @__PURE__ */ Z.jsx(X2, {
        className: A.track,
        ownerState: M,
        cx: hn,
        cy: hn,
        r: (hn - T) / 2,
        fill: "none",
        strokeWidth: T,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ Z.jsx(G2, {
        className: A.circle,
        style: H,
        ownerState: M,
        cx: hn,
        cy: hn,
        r: (hn - T) / 2,
        fill: "none",
        strokeWidth: T
      })]
    })
  });
});
function K2(a) {
  return pn("MuiIconButton", a);
}
const Gp = yn("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), Z2 = (a) => {
  const {
    classes: r,
    disabled: u,
    color: o,
    edge: s,
    size: d,
    loading: h
  } = a, p = {
    root: ["root", h && "loading", u && "disabled", o !== "default" && `color${ht(o)}`, s && `edge${ht(s)}`, `size${ht(d)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return _n(p, K2, r);
}, J2 = ae($s, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: u
    } = a;
    return [r.root, u.loading && r.loading, u.color !== "default" && r[`color${ht(u.color)}`], u.edge && r[`edge${ht(u.edge)}`], r[`size${ht(u.size)}`]];
  }
})(nn(({
  theme: a
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: a.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (a.vars || a).palette.action.active,
  transition: a.transitions.create("background-color", {
    duration: a.transitions.duration.shortest
  }),
  variants: [{
    props: (r) => !r.disableRipple,
    style: {
      "--IconButton-hoverBg": a.alpha((a.vars || a).palette.action.active, (a.vars || a).palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), nn(({
  theme: a
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(a.palette).filter(mn()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      color: (a.vars || a).palette[r].main
    }
  })), ...Object.entries(a.palette).filter(mn()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      "--IconButton-hoverBg": a.alpha((a.vars || a).palette[r].main, (a.vars || a).palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: a.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: a.typography.pxToRem(28)
    }
  }],
  [`&.${Gp.disabled}`]: {
    backgroundColor: "transparent",
    color: (a.vars || a).palette.action.disabled
  },
  [`&.${Gp.loading}`]: {
    color: "transparent"
  }
}))), W2 = ae("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator"
})(({
  theme: a
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (a.vars || a).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), F2 = /* @__PURE__ */ B.forwardRef(function(r, u) {
  const o = ln({
    props: r,
    name: "MuiIconButton"
  }), {
    edge: s = !1,
    children: d,
    className: h,
    color: p = "default",
    disabled: v = !1,
    disableFocusRipple: y = !1,
    size: T = "medium",
    id: x,
    loading: R = null,
    loadingIndicator: w,
    ...M
  } = o, A = E0(x), H = w ?? /* @__PURE__ */ Z.jsx(Q2, {
    "aria-labelledby": A,
    color: "inherit",
    size: 16
  }), K = {
    ...o,
    edge: s,
    color: p,
    disabled: v,
    disableFocusRipple: y,
    loading: R,
    loadingIndicator: H,
    size: T
  }, J = Z2(K);
  return /* @__PURE__ */ Z.jsxs(J2, {
    id: R ? A : x,
    className: qt(J.root, h),
    centerRipple: !0,
    focusRipple: !y,
    disabled: v || R,
    ref: u,
    ...M,
    ownerState: K,
    children: [typeof R == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ Z.jsx("span", {
      className: J.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ Z.jsx(W2, {
        className: J.loadingIndicator,
        ownerState: K,
        children: R && H
      })
    }), d]
  });
}), P2 = Ql(/* @__PURE__ */ Z.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
})), I2 = Ql(/* @__PURE__ */ Z.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
})), tT = Ql(/* @__PURE__ */ Z.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
})), eT = Ql(/* @__PURE__ */ Z.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
})), nT = Ql(/* @__PURE__ */ Z.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), aT = (a) => {
  const {
    variant: r,
    color: u,
    severity: o,
    classes: s
  } = a, d = {
    root: ["root", `color${ht(u || o)}`, `${r}${ht(u || o)}`, `${r}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return _n(d, $2, s);
}, lT = ae(p2, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: u
    } = a;
    return [r.root, r[u.variant], r[`${u.variant}${ht(u.color || u.severity)}`]];
  }
})(nn(({
  theme: a
}) => {
  const r = a.palette.mode === "light" ? a.darken : a.lighten, u = a.palette.mode === "light" ? a.lighten : a.darken;
  return {
    ...a.typography.body2,
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(a.palette).filter(mn(["light"])).map(([o]) => ({
      props: {
        colorSeverity: o,
        variant: "standard"
      },
      style: {
        color: a.vars ? a.vars.palette.Alert[`${o}Color`] : r(a.palette[o].light, 0.6),
        backgroundColor: a.vars ? a.vars.palette.Alert[`${o}StandardBg`] : u(a.palette[o].light, 0.9),
        [`& .${Vp.icon}`]: a.vars ? {
          color: a.vars.palette.Alert[`${o}IconColor`]
        } : {
          color: a.palette[o].main
        }
      }
    })), ...Object.entries(a.palette).filter(mn(["light"])).map(([o]) => ({
      props: {
        colorSeverity: o,
        variant: "outlined"
      },
      style: {
        color: a.vars ? a.vars.palette.Alert[`${o}Color`] : r(a.palette[o].light, 0.6),
        border: `1px solid ${(a.vars || a).palette[o].light}`,
        [`& .${Vp.icon}`]: a.vars ? {
          color: a.vars.palette.Alert[`${o}IconColor`]
        } : {
          color: a.palette[o].main
        }
      }
    })), ...Object.entries(a.palette).filter(mn(["dark"])).map(([o]) => ({
      props: {
        colorSeverity: o,
        variant: "filled"
      },
      style: {
        fontWeight: a.typography.fontWeightMedium,
        ...a.vars ? {
          color: a.vars.palette.Alert[`${o}FilledColor`],
          backgroundColor: a.vars.palette.Alert[`${o}FilledBg`]
        } : {
          backgroundColor: a.palette.mode === "dark" ? a.palette[o].dark : a.palette[o].main,
          color: a.palette.getContrastText(a.palette[o].main)
        }
      }
    }))]
  };
})), rT = ae("div", {
  name: "MuiAlert",
  slot: "Icon"
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), iT = ae("div", {
  name: "MuiAlert",
  slot: "Message"
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), uT = ae("div", {
  name: "MuiAlert",
  slot: "Action"
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), Xp = {
  success: /* @__PURE__ */ Z.jsx(P2, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ Z.jsx(I2, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ Z.jsx(tT, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ Z.jsx(eT, {
    fontSize: "inherit"
  })
}, Fu = /* @__PURE__ */ B.forwardRef(function(r, u) {
  const o = ln({
    props: r,
    name: "MuiAlert"
  }), {
    action: s,
    children: d,
    className: h,
    closeText: p = "Close",
    color: v,
    components: y = {},
    componentsProps: T = {},
    icon: x,
    iconMapping: R = Xp,
    onClose: w,
    role: M = "alert",
    severity: A = "success",
    slotProps: H = {},
    slots: K = {},
    variant: J = "standard",
    ...F
  } = o, V = {
    ...o,
    color: v,
    severity: A,
    variant: J,
    colorSeverity: v || A
  }, z = aT(V), j = {
    slots: {
      closeButton: y.CloseButton,
      closeIcon: y.CloseIcon,
      ...K
    },
    slotProps: {
      ...T,
      ...H
    }
  }, [P, at] = Ea("root", {
    ref: u,
    shouldForwardComponentProp: !0,
    className: qt(z.root, h),
    elementType: lT,
    externalForwardedProps: {
      ...j,
      ...F
    },
    ownerState: V,
    additionalProps: {
      role: M,
      elevation: 0
    }
  }), [L, Q] = Ea("icon", {
    className: z.icon,
    elementType: rT,
    externalForwardedProps: j,
    ownerState: V
  }), [tt, g] = Ea("message", {
    className: z.message,
    elementType: iT,
    externalForwardedProps: j,
    ownerState: V
  }), [W, X] = Ea("action", {
    className: z.action,
    elementType: uT,
    externalForwardedProps: j,
    ownerState: V
  }), [lt, k] = Ea("closeButton", {
    elementType: F2,
    externalForwardedProps: j,
    ownerState: V
  }), [rt, et] = Ea("closeIcon", {
    elementType: nT,
    externalForwardedProps: j,
    ownerState: V
  });
  return /* @__PURE__ */ Z.jsxs(P, {
    ...at,
    children: [x !== !1 ? /* @__PURE__ */ Z.jsx(L, {
      ...Q,
      children: x || R[A] || Xp[A]
    }) : null, /* @__PURE__ */ Z.jsx(tt, {
      ...g,
      children: d
    }), s != null ? /* @__PURE__ */ Z.jsx(W, {
      ...X,
      children: s
    }) : null, s == null && w ? /* @__PURE__ */ Z.jsx(W, {
      ...X,
      children: /* @__PURE__ */ Z.jsx(lt, {
        size: "small",
        "aria-label": p,
        title: p,
        color: "inherit",
        onClick: w,
        ...k,
        children: /* @__PURE__ */ Z.jsx(rt, {
          fontSize: "small",
          ...et
        })
      })
    }) : null]
  });
});
function oT(a) {
  return pn("MuiTypography", a);
}
yn("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const cT = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, sT = FS(), fT = (a) => {
  const {
    align: r,
    gutterBottom: u,
    noWrap: o,
    paragraph: s,
    variant: d,
    classes: h
  } = a, p = {
    root: ["root", d, a.align !== "inherit" && `align${ht(r)}`, u && "gutterBottom", o && "noWrap", s && "paragraph"]
  };
  return _n(p, oT, h);
}, dT = ae("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: u
    } = a;
    return [r.root, u.variant && r[u.variant], u.align !== "inherit" && r[`align${ht(u.align)}`], u.noWrap && r.noWrap, u.gutterBottom && r.gutterBottom, u.paragraph && r.paragraph];
  }
})(nn(({
  theme: a
}) => ({
  margin: 0,
  variants: [{
    props: {
      variant: "inherit"
    },
    style: {
      // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
      font: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  }, ...Object.entries(a.typography).filter(([r, u]) => r !== "inherit" && u && typeof u == "object").map(([r, u]) => ({
    props: {
      variant: r
    },
    style: u
  })), ...Object.entries(a.palette).filter(mn()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      color: (a.vars || a).palette[r].main
    }
  })), ...Object.entries(a.palette?.text || {}).filter(([, r]) => typeof r == "string").map(([r]) => ({
    props: {
      color: `text${ht(r)}`
    },
    style: {
      color: (a.vars || a).palette.text[r]
    }
  })), {
    props: ({
      ownerState: r
    }) => r.align !== "inherit",
    style: {
      textAlign: "var(--Typography-textAlign)"
    }
  }, {
    props: ({
      ownerState: r
    }) => r.noWrap,
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, {
    props: ({
      ownerState: r
    }) => r.gutterBottom,
    style: {
      marginBottom: "0.35em"
    }
  }, {
    props: ({
      ownerState: r
    }) => r.paragraph,
    style: {
      marginBottom: 16
    }
  }]
}))), Qp = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, U0 = /* @__PURE__ */ B.forwardRef(function(r, u) {
  const {
    color: o,
    ...s
  } = ln({
    props: r,
    name: "MuiTypography"
  }), d = !cT[o], h = sT({
    ...s,
    ...d && {
      color: o
    }
  }), {
    align: p = "inherit",
    className: v,
    component: y,
    gutterBottom: T = !1,
    noWrap: x = !1,
    paragraph: R = !1,
    variant: w = "body1",
    variantMapping: M = Qp,
    ...A
  } = h, H = {
    ...h,
    align: p,
    color: o,
    className: v,
    component: y,
    gutterBottom: T,
    noWrap: x,
    paragraph: R,
    variant: w,
    variantMapping: M
  }, K = y || (R ? "p" : M[w] || Qp[w]) || "span", J = fT(H);
  return /* @__PURE__ */ Z.jsx(dT, {
    as: K,
    ref: u,
    className: qt(J.root, v),
    ...A,
    ownerState: H,
    style: {
      ...p !== "inherit" && {
        "--Typography-textAlign": p
      },
      ...A.style
    }
  });
});
function hT(a) {
  return pn("MuiAlertTitle", a);
}
yn("MuiAlertTitle", ["root"]);
const mT = (a) => {
  const {
    classes: r
  } = a;
  return _n({
    root: ["root"]
  }, hT, r);
}, pT = ae(U0, {
  name: "MuiAlertTitle",
  slot: "Root"
})(nn(({
  theme: a
}) => ({
  fontWeight: a.typography.fontWeightMedium,
  marginTop: -2
}))), Pu = /* @__PURE__ */ B.forwardRef(function(r, u) {
  const o = ln({
    props: r,
    name: "MuiAlertTitle"
  }), {
    className: s,
    ...d
  } = o, h = o, p = mT(h);
  return /* @__PURE__ */ Z.jsx(pT, {
    gutterBottom: !0,
    component: "div",
    ownerState: h,
    ref: u,
    className: qt(p.root, s),
    ...d
  });
}), yT = Ql(/* @__PURE__ */ Z.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}));
function gT(a) {
  return pn("MuiChip", a);
}
const Tt = yn("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), vT = (a) => {
  const {
    classes: r,
    disabled: u,
    size: o,
    color: s,
    iconColor: d,
    onDelete: h,
    clickable: p,
    variant: v
  } = a, y = {
    root: ["root", v, u && "disabled", `size${ht(o)}`, `color${ht(s)}`, p && "clickable", p && `clickableColor${ht(s)}`, h && "deletable", h && `deletableColor${ht(s)}`, `${v}${ht(s)}`],
    label: ["label", `label${ht(o)}`],
    avatar: ["avatar", `avatar${ht(o)}`, `avatarColor${ht(s)}`],
    icon: ["icon", `icon${ht(o)}`, `iconColor${ht(d)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${ht(o)}`, `deleteIconColor${ht(s)}`, `deleteIcon${ht(v)}Color${ht(s)}`]
  };
  return _n(y, gT, r);
}, bT = ae("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: u
    } = a, {
      color: o,
      iconColor: s,
      clickable: d,
      onDelete: h,
      size: p,
      variant: v
    } = u;
    return [{
      [`& .${Tt.avatar}`]: r.avatar
    }, {
      [`& .${Tt.avatar}`]: r[`avatar${ht(p)}`]
    }, {
      [`& .${Tt.avatar}`]: r[`avatarColor${ht(o)}`]
    }, {
      [`& .${Tt.icon}`]: r.icon
    }, {
      [`& .${Tt.icon}`]: r[`icon${ht(p)}`]
    }, {
      [`& .${Tt.icon}`]: r[`iconColor${ht(s)}`]
    }, {
      [`& .${Tt.deleteIcon}`]: r.deleteIcon
    }, {
      [`& .${Tt.deleteIcon}`]: r[`deleteIcon${ht(p)}`]
    }, {
      [`& .${Tt.deleteIcon}`]: r[`deleteIconColor${ht(o)}`]
    }, {
      [`& .${Tt.deleteIcon}`]: r[`deleteIcon${ht(v)}Color${ht(o)}`]
    }, r.root, r[`size${ht(p)}`], r[`color${ht(o)}`], d && r.clickable, d && o !== "default" && r[`clickableColor${ht(o)})`], h && r.deletable, h && o !== "default" && r[`deletableColor${ht(o)}`], r[v], r[`${v}${ht(o)}`]];
  }
})(nn(({
  theme: a
}) => {
  const r = a.palette.mode === "light" ? a.palette.grey[700] : a.palette.grey[300];
  return {
    maxWidth: "100%",
    fontFamily: a.typography.fontFamily,
    fontSize: a.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    lineHeight: 1.5,
    color: (a.vars || a).palette.text.primary,
    backgroundColor: (a.vars || a).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: a.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${Tt.disabled}`]: {
      opacity: (a.vars || a).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${Tt.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: a.vars ? a.vars.palette.Chip.defaultAvatarColor : r,
      fontSize: a.typography.pxToRem(12)
    },
    [`& .${Tt.avatarColorPrimary}`]: {
      color: (a.vars || a).palette.primary.contrastText,
      backgroundColor: (a.vars || a).palette.primary.dark
    },
    [`& .${Tt.avatarColorSecondary}`]: {
      color: (a.vars || a).palette.secondary.contrastText,
      backgroundColor: (a.vars || a).palette.secondary.dark
    },
    [`& .${Tt.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: a.typography.pxToRem(10)
    },
    [`& .${Tt.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${Tt.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: a.alpha((a.vars || a).palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: a.alpha((a.vars || a).palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${Tt.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${Tt.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(a.palette).filter(mn(["contrastText"])).map(([u]) => ({
      props: {
        color: u
      },
      style: {
        backgroundColor: (a.vars || a).palette[u].main,
        color: (a.vars || a).palette[u].contrastText,
        [`& .${Tt.deleteIcon}`]: {
          color: a.alpha((a.vars || a).palette[u].contrastText, 0.7),
          "&:hover, &:active": {
            color: (a.vars || a).palette[u].contrastText
          }
        }
      }
    })), {
      props: (u) => u.iconColor === u.color,
      style: {
        [`& .${Tt.icon}`]: {
          color: a.vars ? a.vars.palette.Chip.defaultIconColor : r
        }
      }
    }, {
      props: (u) => u.iconColor === u.color && u.color !== "default",
      style: {
        [`& .${Tt.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${Tt.focusVisible}`]: {
          backgroundColor: a.alpha((a.vars || a).palette.action.selected, `${(a.vars || a).palette.action.selectedOpacity} + ${(a.vars || a).palette.action.focusOpacity}`)
        }
      }
    }, ...Object.entries(a.palette).filter(mn(["dark"])).map(([u]) => ({
      props: {
        color: u,
        onDelete: !0
      },
      style: {
        [`&.${Tt.focusVisible}`]: {
          background: (a.vars || a).palette[u].dark
        }
      }
    })), {
      props: {
        clickable: !0
      },
      style: {
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: a.alpha((a.vars || a).palette.action.selected, `${(a.vars || a).palette.action.selectedOpacity} + ${(a.vars || a).palette.action.hoverOpacity}`)
        },
        [`&.${Tt.focusVisible}`]: {
          backgroundColor: a.alpha((a.vars || a).palette.action.selected, `${(a.vars || a).palette.action.selectedOpacity} + ${(a.vars || a).palette.action.focusOpacity}`)
        },
        "&:active": {
          boxShadow: (a.vars || a).shadows[1]
        }
      }
    }, ...Object.entries(a.palette).filter(mn(["dark"])).map(([u]) => ({
      props: {
        color: u,
        clickable: !0
      },
      style: {
        [`&:hover, &.${Tt.focusVisible}`]: {
          backgroundColor: (a.vars || a).palette[u].dark
        }
      }
    })), {
      props: {
        variant: "outlined"
      },
      style: {
        backgroundColor: "transparent",
        border: a.vars ? `1px solid ${a.vars.palette.Chip.defaultBorder}` : `1px solid ${a.palette.mode === "light" ? a.palette.grey[400] : a.palette.grey[700]}`,
        [`&.${Tt.clickable}:hover`]: {
          backgroundColor: (a.vars || a).palette.action.hover
        },
        [`&.${Tt.focusVisible}`]: {
          backgroundColor: (a.vars || a).palette.action.focus
        },
        [`& .${Tt.avatar}`]: {
          marginLeft: 4
        },
        [`& .${Tt.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${Tt.icon}`]: {
          marginLeft: 4
        },
        [`& .${Tt.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${Tt.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${Tt.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(a.palette).filter(mn()).map(([u]) => ({
      props: {
        variant: "outlined",
        color: u
      },
      style: {
        color: (a.vars || a).palette[u].main,
        border: `1px solid ${a.alpha((a.vars || a).palette[u].main, 0.7)}`,
        [`&.${Tt.clickable}:hover`]: {
          backgroundColor: a.alpha((a.vars || a).palette[u].main, (a.vars || a).palette.action.hoverOpacity)
        },
        [`&.${Tt.focusVisible}`]: {
          backgroundColor: a.alpha((a.vars || a).palette[u].main, (a.vars || a).palette.action.focusOpacity)
        },
        [`& .${Tt.deleteIcon}`]: {
          color: a.alpha((a.vars || a).palette[u].main, 0.7),
          "&:hover, &:active": {
            color: (a.vars || a).palette[u].main
          }
        }
      }
    }))]
  };
})), ST = ae("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (a, r) => {
    const {
      ownerState: u
    } = a, {
      size: o
    } = u;
    return [r.label, r[`label${ht(o)}`]];
  }
})({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      variant: "outlined"
    },
    style: {
      paddingLeft: 11,
      paddingRight: 11
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      paddingLeft: 8,
      paddingRight: 8
    }
  }, {
    props: {
      size: "small",
      variant: "outlined"
    },
    style: {
      paddingLeft: 7,
      paddingRight: 7
    }
  }]
});
function Kp(a) {
  return a.key === "Backspace" || a.key === "Delete";
}
const H0 = /* @__PURE__ */ B.forwardRef(function(r, u) {
  const o = ln({
    props: r,
    name: "MuiChip"
  }), {
    avatar: s,
    className: d,
    clickable: h,
    color: p = "default",
    component: v,
    deleteIcon: y,
    disabled: T = !1,
    icon: x,
    label: R,
    onClick: w,
    onDelete: M,
    onKeyDown: A,
    onKeyUp: H,
    size: K = "medium",
    variant: J = "filled",
    tabIndex: F,
    skipFocusWhenDisabled: V = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    slots: z = {},
    slotProps: j = {},
    ...P
  } = o, at = B.useRef(null), L = Hu(at, u), Q = (ut) => {
    ut.stopPropagation(), M && M(ut);
  }, tt = (ut) => {
    ut.currentTarget === ut.target && Kp(ut) && ut.preventDefault(), A && A(ut);
  }, g = (ut) => {
    ut.currentTarget === ut.target && M && Kp(ut) && M(ut), H && H(ut);
  }, W = h !== !1 && w ? !0 : h, X = W || M ? $s : v || "div", lt = {
    ...o,
    component: X,
    disabled: T,
    size: K,
    color: p,
    iconColor: /* @__PURE__ */ B.isValidElement(x) && x.props.color || p,
    onDelete: !!M,
    clickable: W,
    variant: J
  }, k = vT(lt), rt = X === $s ? {
    component: v || "div",
    focusVisibleClassName: k.focusVisible,
    ...M && {
      disableRipple: !0
    }
  } : {};
  let et = null;
  M && (et = y && /* @__PURE__ */ B.isValidElement(y) ? /* @__PURE__ */ B.cloneElement(y, {
    className: qt(y.props.className, k.deleteIcon),
    onClick: Q
  }) : /* @__PURE__ */ Z.jsx(yT, {
    className: k.deleteIcon,
    onClick: Q
  }));
  let ft = null;
  s && /* @__PURE__ */ B.isValidElement(s) && (ft = /* @__PURE__ */ B.cloneElement(s, {
    className: qt(k.avatar, s.props.className)
  }));
  let S = null;
  x && /* @__PURE__ */ B.isValidElement(x) && (S = /* @__PURE__ */ B.cloneElement(x, {
    className: qt(k.icon, x.props.className)
  }));
  const Y = {
    slots: z,
    slotProps: j
  }, [nt, it] = Ea("root", {
    elementType: bT,
    externalForwardedProps: {
      ...Y,
      ...P
    },
    ownerState: lt,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: L,
    className: qt(k.root, d),
    additionalProps: {
      disabled: W && T ? !0 : void 0,
      tabIndex: V && T ? -1 : F,
      ...rt
    },
    getSlotProps: (ut) => ({
      ...ut,
      onClick: (xt) => {
        ut.onClick?.(xt), w?.(xt);
      },
      onKeyDown: (xt) => {
        ut.onKeyDown?.(xt), tt(xt);
      },
      onKeyUp: (xt) => {
        ut.onKeyUp?.(xt), g(xt);
      }
    })
  }), [I, yt] = Ea("label", {
    elementType: ST,
    externalForwardedProps: Y,
    ownerState: lt,
    className: k.label
  });
  return /* @__PURE__ */ Z.jsxs(nt, {
    as: X,
    ...it,
    children: [ft || S, /* @__PURE__ */ Z.jsx(I, {
      ...yt,
      children: R
    }), et]
  });
}), Ls = typeof N0({}) == "function", TT = (a, r) => ({
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box",
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: "100%",
  // When used under CssVarsProvider, colorScheme should not be applied dynamically because it will generate the stylesheet twice for server-rendered applications.
  ...r && !a.vars && {
    colorScheme: a.palette.mode
  }
}), CT = (a) => ({
  color: (a.vars || a).palette.text.primary,
  ...a.typography.body1,
  backgroundColor: (a.vars || a).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (a.vars || a).palette.common.white
  }
}), $0 = (a, r = !1) => {
  const u = {};
  r && a.colorSchemes && typeof a.getColorSchemeSelector == "function" && Object.entries(a.colorSchemes).forEach(([d, h]) => {
    const p = a.getColorSchemeSelector(d);
    p.startsWith("@") ? u[p] = {
      ":root": {
        colorScheme: h.palette?.mode
      }
    } : u[p.replace(/\s*&/, "")] = {
      colorScheme: h.palette?.mode
    };
  });
  let o = {
    html: TT(a, r),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: a.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...CT(a),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (a.vars || a).palette.background.default
      }
    },
    ...u
  };
  const s = a.components?.MuiCssBaseline?.styleOverrides;
  return s && (o = [o, s]), o;
}, Du = "mui-ecs", ET = (a) => {
  const r = $0(a, !1), u = Array.isArray(r) ? r[0] : r;
  return !a.vars && u && (u.html[`:root:has(${Du})`] = {
    colorScheme: a.palette.mode
  }), a.colorSchemes && Object.entries(a.colorSchemes).forEach(([o, s]) => {
    const d = a.getColorSchemeSelector(o);
    d.startsWith("@") ? u[d] = {
      [`:root:not(:has(.${Du}))`]: {
        colorScheme: s.palette?.mode
      }
    } : u[d.replace(/\s*&/, "")] = {
      [`&:not(:has(.${Du}))`]: {
        colorScheme: s.palette?.mode
      }
    };
  }), r;
}, AT = N0(Ls ? ({
  theme: a,
  enableColorScheme: r
}) => $0(a, r) : ({
  theme: a
}) => ET(a));
function xT(a) {
  const r = ln({
    props: a,
    name: "MuiCssBaseline"
  }), {
    children: u,
    enableColorScheme: o = !1
  } = r;
  return /* @__PURE__ */ Z.jsxs(B.Fragment, {
    children: [Ls && /* @__PURE__ */ Z.jsx(AT, {
      enableColorScheme: o
    }), !Ls && !o && /* @__PURE__ */ Z.jsx("span", {
      className: Du,
      style: {
        display: "none"
      }
    }), u]
  });
}
function OT(a) {
  return pn("MuiSkeleton", a);
}
yn("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);
const MT = (a) => {
  const {
    classes: r,
    variant: u,
    animation: o,
    hasChildren: s,
    width: d,
    height: h
  } = a;
  return _n({
    root: ["root", u, o, s && "withChildren", s && !d && "fitContent", s && !h && "heightAuto"]
  }, OT, r);
}, qs = Ia`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`, Ys = Ia`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`, RT = typeof qs != "string" ? oi`
        animation: ${qs} 2s ease-in-out 0.5s infinite;
      ` : null, _T = typeof Ys != "string" ? oi`
        &::after {
          animation: ${Ys} 2s linear 0.5s infinite;
        }
      ` : null, zT = ae("span", {
  name: "MuiSkeleton",
  slot: "Root",
  overridesResolver: (a, r) => {
    const {
      ownerState: u
    } = a;
    return [r.root, r[u.variant], u.animation !== !1 && r[u.animation], u.hasChildren && r.withChildren, u.hasChildren && !u.width && r.fitContent, u.hasChildren && !u.height && r.heightAuto];
  }
})(nn(({
  theme: a
}) => {
  const r = qS(a.shape.borderRadius) || "px", u = YS(a.shape.borderRadius);
  return {
    display: "block",
    // Create a "on paper" color with sufficient contrast retaining the color
    backgroundColor: a.vars ? a.vars.palette.Skeleton.bg : a.alpha(a.palette.text.primary, a.palette.mode === "light" ? 0.11 : 0.13),
    height: "1.2em",
    variants: [{
      props: {
        variant: "text"
      },
      style: {
        marginTop: 0,
        marginBottom: 0,
        height: "auto",
        transformOrigin: "0 55%",
        transform: "scale(1, 0.60)",
        borderRadius: `${u}${r}/${Math.round(u / 0.6 * 10) / 10}${r}`,
        "&:empty:before": {
          content: '"\\00a0"'
        }
      }
    }, {
      props: {
        variant: "circular"
      },
      style: {
        borderRadius: "50%"
      }
    }, {
      props: {
        variant: "rounded"
      },
      style: {
        borderRadius: (a.vars || a).shape.borderRadius
      }
    }, {
      props: ({
        ownerState: o
      }) => o.hasChildren,
      style: {
        "& > *": {
          visibility: "hidden"
        }
      }
    }, {
      props: ({
        ownerState: o
      }) => o.hasChildren && !o.width,
      style: {
        maxWidth: "fit-content"
      }
    }, {
      props: ({
        ownerState: o
      }) => o.hasChildren && !o.height,
      style: {
        height: "auto"
      }
    }, {
      props: {
        animation: "pulse"
      },
      style: RT || {
        animation: `${qs} 2s ease-in-out 0.5s infinite`
      }
    }, {
      props: {
        animation: "wave"
      },
      style: {
        position: "relative",
        overflow: "hidden",
        /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
        "&::after": {
          background: `linear-gradient(
                90deg,
                transparent,
                ${(a.vars || a).palette.action.hover},
                transparent
              )`,
          content: '""',
          position: "absolute",
          transform: "translateX(-100%)",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0
        }
      }
    }, {
      props: {
        animation: "wave"
      },
      style: _T || {
        "&::after": {
          animation: `${Ys} 2s linear 0.5s infinite`
        }
      }
    }]
  };
})), Cs = /* @__PURE__ */ B.forwardRef(function(r, u) {
  const o = ln({
    props: r,
    name: "MuiSkeleton"
  }), {
    animation: s = "pulse",
    className: d,
    component: h = "span",
    height: p,
    style: v,
    variant: y = "text",
    width: T,
    ...x
  } = o, R = {
    ...o,
    animation: s,
    component: h,
    variant: y,
    hasChildren: !!x.children
  }, w = MT(R);
  return /* @__PURE__ */ Z.jsx(zT, {
    as: h,
    ref: u,
    className: qt(w.root, d),
    ownerState: R,
    ...x,
    style: {
      width: T,
      height: p,
      ...v
    }
  });
}), j0 = B.createContext(null);
function YT() {
  const a = B.useContext(j0);
  if (!a) throw new Error("RemoteContext missing");
  return a;
}
const DT = (a) => (r, u) => Tv(a, r, u);
class wT extends B.Component {
  state = { failed: !1 };
  static getDerivedStateFromError() {
    return { failed: !0 };
  }
  componentDidCatch(r, u) {
    this.props.onError?.(r);
  }
  render() {
    return this.state.failed ? /* @__PURE__ */ Z.jsxs(Fu, { severity: "error", role: "alert", children: [
      /* @__PURE__ */ Z.jsx(Pu, { children: "This view could not be displayed." }),
      "Please refresh the page. If the problem continues, contact the support team."
    ] }) : this.props.children;
  }
}
const NT = "No safe recommendation can be generated from the available data.";
function BT({ label: a = "Loading" }) {
  return /* @__PURE__ */ Z.jsx("div", { role: "status", "aria-busy": "true", "aria-label": a, children: /* @__PURE__ */ Z.jsxs("div", { style: { display: "grid", gap: 12 }, children: [
    /* @__PURE__ */ Z.jsx(Cs, { variant: "text", width: "45%", height: 40 }),
    /* @__PURE__ */ Z.jsx(Cs, { variant: "rounded", height: 112 }),
    /* @__PURE__ */ Z.jsx(Cs, { variant: "rounded", height: 112 })
  ] }) });
}
const Zp = {
  TIMEOUT: "The data service took too long to respond. Please try again.",
  NETWORK: "The data service is currently unreachable. Please try again later.",
  INVALID_DATA: "The data received could not be validated, so it is not shown.",
  SERVER: "The data service reported a problem. Please try again later."
};
function VT({ code: a }) {
  return /* @__PURE__ */ Z.jsxs(Fu, { severity: "error", role: "alert", children: [
    /* @__PURE__ */ Z.jsx(Pu, { children: "Unable to load data" }),
    Zp[a] ?? Zp.NETWORK
  ] });
}
function GT() {
  return /* @__PURE__ */ Z.jsxs(Fu, { severity: "info", role: "status", children: [
    /* @__PURE__ */ Z.jsx(Pu, { children: NT }),
    "Safety eligibility or evidence strength could not be established. Operational and safety procedures take precedence."
  ] });
}
function XT() {
  return /* @__PURE__ */ Z.jsx(H0, { variant: "outlined", color: "info", size: "small", label: "Synthetic data" });
}
function QT({ text: a }) {
  return /* @__PURE__ */ Z.jsxs(Fu, { severity: "warning", role: "note", children: [
    /* @__PURE__ */ Z.jsx(Pu, { children: "Advisory only" }),
    /* @__PURE__ */ Z.jsx(U0, { component: "span", children: a })
  ] });
}
function KT({ kind: a }) {
  const r = a === "measured" ? "success" : a === "derived" ? "primary" : "warning";
  return /* @__PURE__ */ Z.jsx(H0, { variant: "outlined", color: r, size: "small", label: a === "simulated" ? "Simulated estimate" : a === "derived" ? "Derived" : "Measured" });
}
class Kr extends Error {
  constructor(r, u) {
    super(r), this.code = r, this.correlationId = u, this.name = "ApiFailure";
  }
}
const k0 = () => crypto.randomUUID(), Fn = (a) => typeof a == "object" && a !== null, Zr = (a) => typeof a == "number" && Number.isFinite(a), Jr = {
  overview: (a) => Fn(a) && Zr(a.totalKgCO2e) && Array.isArray(a.categories) && Fn(a.quality) && Fn(a.meta),
  analysis: (a) => Fn(a) && Array.isArray(a.candidates) && "hotspot" in a && Fn(a.audit),
  recommendation: (a) => Fn(a) && "recommendation" in a && Fn(a.audit),
  simulation: (a) => Fn(a) && Zr(a.baselineKgCO2e) && Zr(a.simulatedKgCO2e) && Zr(a.reductionKgCO2e) && Zr(a.reductionPct),
  methodology: (a) => Fn(a) && Array.isArray(a.formulas) && Array.isArray(a.fields)
};
async function Wr(a, r, u) {
  const o = u.correlationId ?? k0(), s = new AbortController(), d = setTimeout(() => s.abort("timeout"), u.timeoutMs ?? 8e3), h = () => s.abort("caller");
  u.signal?.addEventListener("abort", h);
  try {
    const p = { "X-Correlation-ID": o, Accept: "application/json" };
    u.method === "POST" && (p["Content-Type"] = "application/json", p["X-Requested-With"] = "acp");
    const v = await fetch(`${a}${r}`, {
      method: u.method ?? "GET",
      headers: p,
      credentials: "include",
      signal: s.signal,
      body: u.body === void 0 ? void 0 : JSON.stringify(u.body)
    });
    if (!v.ok) throw new Kr(v.status >= 500 ? "SERVER" : "INVALID_DATA", o);
    const y = await v.json();
    if (!u.guard(y)) throw new Kr("INVALID_DATA", o);
    return y;
  } catch (p) {
    throw p instanceof Kr || u.signal?.aborted ? p : s.signal.aborted ? new Kr("TIMEOUT", o) : new Kr(p instanceof SyntaxError ? "INVALID_DATA" : "NETWORK", o);
  } finally {
    clearTimeout(d), u.signal?.removeEventListener("abort", h);
  }
}
const ZT = {
  overview: (a, r, u) => Wr(a, `/api/v1/emissions/overview?periodDays=${encodeURIComponent(r)}`, { guard: Jr.overview, signal: u }),
  analysis: (a, r, u) => Wr(a, "/api/v1/hotspots/analysis", { guard: Jr.analysis, signal: u, correlationId: r }),
  recommendation: (a, r) => Wr(a, "/api/v1/recommendations/current", { guard: Jr.recommendation, signal: r }),
  simulate: (a, r, u) => Wr(a, "/api/v1/simulations", { method: "POST", body: r, guard: Jr.simulation, signal: u }),
  methodology: (a, r) => Wr(a, "/api/v1/methodology", { guard: Jr.methodology, signal: r })
}, UT = B.lazy(() => import("./OverviewView-BqALsoha.js")), HT = B.lazy(() => import("./HotspotView-CvMwq1eN.js")), $T = B.lazy(() => import("./MethodologyView-Cc2y46ID.js")), Jp = {
  light: ti({ palette: { mode: "light", primary: { main: "#0f6cbd" } } }),
  dark: ti({ palette: { mode: "dark", primary: { main: "#479ef5" } } }),
  "high-contrast": ti({
    palette: {
      mode: "dark",
      primary: { main: "#ffff00", contrastText: "#000000" },
      background: { default: "#000000", paper: "#000000" },
      text: { primary: "#ffffff", secondary: "#ffffff" },
      divider: "#ffffff"
    },
    components: {
      MuiPaper: { styleOverrides: { root: { border: "1px solid #ffffff" } } },
      MuiButton: { styleOverrides: { root: { border: "2px solid currentColor" } } }
    }
  })
};
function jT({ props: a, eventTarget: r }) {
  const u = DT(r);
  return /* @__PURE__ */ Z.jsxs(JS, { theme: Jp[a.theme] ?? Jp.light, children: [
    /* @__PURE__ */ Z.jsx(xT, {}),
    /* @__PURE__ */ Z.jsx(j0.Provider, { value: { props: a, publish: u }, children: /* @__PURE__ */ Z.jsx(
      wT,
      {
        onError: () => u(Sv.analysisFailed, { v: 1, correlationId: k0(), code: "INVALID_DATA" }),
        children: /* @__PURE__ */ Z.jsxs(B.Suspense, { fallback: /* @__PURE__ */ Z.jsx(BT, {}), children: [
          a.view === "overview" && /* @__PURE__ */ Z.jsx(UT, {}),
          a.view === "hotspot" && /* @__PURE__ */ Z.jsx(HT, {}),
          a.view === "methodology" && /* @__PURE__ */ Z.jsx($T, {})
        ] })
      },
      a.view
    ) })
  ] });
}
const JT = bv, Es = /* @__PURE__ */ new WeakMap();
function WT(a, r) {
  const u = Es.get(a);
  if (u)
    return u.update(r), u;
  let o = mv.createRoot(a);
  const s = (h) => o?.render(/* @__PURE__ */ Z.jsx(jT, { props: h, eventTarget: a }));
  s(r);
  const d = {
    update: (h) => s(h),
    unmount: () => {
      o && (o.unmount(), o = null, Es.delete(a));
    }
  };
  return Es.set(a, d), d;
}
export {
  g2 as $,
  Bb as A,
  $s as B,
  H0 as C,
  pv as D,
  VT as E,
  af as F,
  Yp as G,
  y2 as H,
  GS as I,
  QT as J,
  KT as K,
  BT as L,
  kT as M,
  LT as N,
  k0 as O,
  p2 as P,
  Sv as Q,
  ql as R,
  XT as S,
  U0 as T,
  GT as U,
  fv as V,
  e2 as W,
  kp as X,
  v2 as Y,
  S2 as Z,
  n2 as _,
  yn as a,
  f2 as a0,
  hf as a1,
  JT as a2,
  WT as a3,
  qT as b,
  qt as c,
  ht as d,
  _n as e,
  oi as f,
  pn as g,
  mn as h,
  YT as i,
  Z as j,
  Ia as k,
  ZT as l,
  nn as m,
  lv as n,
  VS as o,
  Hu as p,
  Ea as q,
  B as r,
  ae as s,
  _s as t,
  ln as u,
  E0 as v,
  Q2 as w,
  XS as x,
  zu as y,
  b2 as z
};
