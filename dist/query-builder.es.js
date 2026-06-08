var vo = Object.defineProperty;
var Eo = (e, t, n) => t in e ? vo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var wt = (e, t, n) => Eo(e, typeof t != "symbol" ? t + "" : t, n);
import { jsx as C, jsxs as ae } from "react/jsx-runtime";
import * as _ from "react";
import st, { useState as ye, useEffect as Xe, useMemo as _t, useRef as sn } from "react";
import xo from "@emotion/styled";
import { ThemeContext as So } from "@emotion/react";
import { Box as pe, Typography as de, Select as an, MenuItem as rt, Stack as To, TextField as Co, Tooltip as xn, IconButton as Yt, Button as Mt, OutlinedInput as wo, InputAdornment as Oo, Popper as Ro, List as Po, ListItem as Ao, ListItemButton as $o, Dialog as ko, DialogTitle as No, DialogContent as _o, Divider as ot, Chip as We, DialogActions as Io } from "@mui/material";
import { Delete as Do, Add as Mo } from "@mui/icons-material";
import * as Bo from "react-dom";
import Ot from "react-dom";
function Fo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Rt = { exports: {} }, Pt = { exports: {} }, J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gn;
function jo() {
  if (Gn) return J;
  Gn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
  function x(g) {
    if (typeof g == "object" && g !== null) {
      var I = g.$$typeof;
      switch (I) {
        case t:
          switch (g = g.type, g) {
            case f:
            case d:
            case r:
            case i:
            case o:
            case p:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case a:
                case m:
                case y:
                case b:
                case s:
                  return g;
                default:
                  return I;
              }
          }
        case n:
          return I;
      }
    }
  }
  function E(g) {
    return x(g) === d;
  }
  return J.AsyncMode = f, J.ConcurrentMode = d, J.ContextConsumer = a, J.ContextProvider = s, J.Element = t, J.ForwardRef = m, J.Fragment = r, J.Lazy = y, J.Memo = b, J.Portal = n, J.Profiler = i, J.StrictMode = o, J.Suspense = p, J.isAsyncMode = function(g) {
    return E(g) || x(g) === f;
  }, J.isConcurrentMode = E, J.isContextConsumer = function(g) {
    return x(g) === a;
  }, J.isContextProvider = function(g) {
    return x(g) === s;
  }, J.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, J.isForwardRef = function(g) {
    return x(g) === m;
  }, J.isFragment = function(g) {
    return x(g) === r;
  }, J.isLazy = function(g) {
    return x(g) === y;
  }, J.isMemo = function(g) {
    return x(g) === b;
  }, J.isPortal = function(g) {
    return x(g) === n;
  }, J.isProfiler = function(g) {
    return x(g) === i;
  }, J.isStrictMode = function(g) {
    return x(g) === o;
  }, J.isSuspense = function(g) {
    return x(g) === p;
  }, J.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === d || g === i || g === o || g === p || g === h || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === b || g.$$typeof === s || g.$$typeof === a || g.$$typeof === m || g.$$typeof === O || g.$$typeof === R || g.$$typeof === F || g.$$typeof === u);
  }, J.typeOf = x, J;
}
var Z = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn;
function Lo() {
  return Kn || (Kn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
    function x(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === r || w === d || w === i || w === o || w === p || w === h || typeof w == "object" && w !== null && (w.$$typeof === y || w.$$typeof === b || w.$$typeof === s || w.$$typeof === a || w.$$typeof === m || w.$$typeof === O || w.$$typeof === R || w.$$typeof === F || w.$$typeof === u);
    }
    function E(w) {
      if (typeof w == "object" && w !== null) {
        var oe = w.$$typeof;
        switch (oe) {
          case t:
            var ge = w.type;
            switch (ge) {
              case f:
              case d:
              case r:
              case i:
              case o:
              case p:
                return ge;
              default:
                var Te = ge && ge.$$typeof;
                switch (Te) {
                  case a:
                  case m:
                  case y:
                  case b:
                  case s:
                    return Te;
                  default:
                    return oe;
                }
            }
          case n:
            return oe;
        }
      }
    }
    var g = f, I = d, M = a, H = s, W = t, c = m, S = r, k = y, L = b, P = n, A = i, N = o, U = p, ee = !1;
    function te(w) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T(w) || E(w) === f;
    }
    function T(w) {
      return E(w) === d;
    }
    function $(w) {
      return E(w) === a;
    }
    function j(w) {
      return E(w) === s;
    }
    function V(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function B(w) {
      return E(w) === m;
    }
    function q(w) {
      return E(w) === r;
    }
    function z(w) {
      return E(w) === y;
    }
    function Y(w) {
      return E(w) === b;
    }
    function K(w) {
      return E(w) === n;
    }
    function X(w) {
      return E(w) === i;
    }
    function D(w) {
      return E(w) === o;
    }
    function G(w) {
      return E(w) === p;
    }
    Z.AsyncMode = g, Z.ConcurrentMode = I, Z.ContextConsumer = M, Z.ContextProvider = H, Z.Element = W, Z.ForwardRef = c, Z.Fragment = S, Z.Lazy = k, Z.Memo = L, Z.Portal = P, Z.Profiler = A, Z.StrictMode = N, Z.Suspense = U, Z.isAsyncMode = te, Z.isConcurrentMode = T, Z.isContextConsumer = $, Z.isContextProvider = j, Z.isElement = V, Z.isForwardRef = B, Z.isFragment = q, Z.isLazy = z, Z.isMemo = Y, Z.isPortal = K, Z.isProfiler = X, Z.isStrictMode = D, Z.isSuspense = G, Z.isValidElementType = x, Z.typeOf = E;
  }()), Z;
}
var Qn;
function Br() {
  return Qn || (Qn = 1, process.env.NODE_ENV === "production" ? Pt.exports = jo() : Pt.exports = Lo()), Pt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ln, Xn;
function Vo() {
  if (Xn) return ln;
  Xn = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, a = 0; a < 10; a++)
        s["_" + String.fromCharCode(a)] = a;
      var f = Object.getOwnPropertyNames(s).map(function(m) {
        return s[m];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        d[m] = m;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ln = o() ? Object.assign : function(i, s) {
    for (var a, f = r(i), d, m = 1; m < arguments.length; m++) {
      a = Object(arguments[m]);
      for (var p in a)
        t.call(a, p) && (f[p] = a[p]);
      if (e) {
        d = e(a);
        for (var h = 0; h < d.length; h++)
          n.call(a, d[h]) && (f[d[h]] = a[d[h]]);
      }
    }
    return f;
  }, ln;
}
var cn, Jn;
function _n() {
  if (Jn) return cn;
  Jn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return cn = e, cn;
}
var un, Zn;
function Fr() {
  return Zn || (Zn = 1, un = Function.call.bind(Object.prototype.hasOwnProperty)), un;
}
var fn, er;
function zo() {
  if (er) return fn;
  er = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ _n(), n = {}, r = /* @__PURE__ */ Fr();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, a, f, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in i)
        if (r(i, m)) {
          var p;
          try {
            if (typeof i[m] != "function") {
              var h = Error(
                (f || "React class") + ": " + a + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            p = i[m](s, m, f, a, null, t);
          } catch (y) {
            p = y;
          }
          if (p && !(p instanceof Error) && e(
            (f || "React class") + ": type specification of " + a + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in n)) {
            n[p.message] = !0;
            var b = d ? d() : "";
            e(
              "Failed " + a + " type: " + p.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, fn = o, fn;
}
var dn, tr;
function Wo() {
  if (tr) return dn;
  tr = 1;
  var e = Br(), t = Vo(), n = /* @__PURE__ */ _n(), r = /* @__PURE__ */ Fr(), o = /* @__PURE__ */ zo(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(a) {
    var f = "Warning: " + a;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return dn = function(a, f) {
    var d = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function p(T) {
      var $ = T && (d && T[d] || T[m]);
      if (typeof $ == "function")
        return $;
    }
    var h = "<<anonymous>>", b = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: F(),
      arrayOf: x,
      element: E(),
      elementType: g(),
      instanceOf: I,
      node: c(),
      objectOf: H,
      oneOf: M,
      oneOfType: W,
      shape: k,
      exact: L
    };
    function y(T, $) {
      return T === $ ? T !== 0 || 1 / T === 1 / $ : T !== T && $ !== $;
    }
    function u(T, $) {
      this.message = T, this.data = $ && typeof $ == "object" ? $ : {}, this.stack = "";
    }
    u.prototype = Error.prototype;
    function O(T) {
      if (process.env.NODE_ENV !== "production")
        var $ = {}, j = 0;
      function V(q, z, Y, K, X, D, G) {
        if (K = K || h, D = D || Y, G !== n) {
          if (f) {
            var w = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw w.name = "Invariant Violation", w;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var oe = K + ":" + Y;
            !$[oe] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + D + "` prop on `" + K + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), $[oe] = !0, j++);
          }
        }
        return z[Y] == null ? q ? z[Y] === null ? new u("The " + X + " `" + D + "` is marked as required " + ("in `" + K + "`, but its value is `null`.")) : new u("The " + X + " `" + D + "` is marked as required in " + ("`" + K + "`, but its value is `undefined`.")) : null : T(z, Y, K, X, D);
      }
      var B = V.bind(null, !1);
      return B.isRequired = V.bind(null, !0), B;
    }
    function R(T) {
      function $(j, V, B, q, z, Y) {
        var K = j[V], X = N(K);
        if (X !== T) {
          var D = U(K);
          return new u(
            "Invalid " + q + " `" + z + "` of type " + ("`" + D + "` supplied to `" + B + "`, expected ") + ("`" + T + "`."),
            { expectedType: T }
          );
        }
        return null;
      }
      return O($);
    }
    function F() {
      return O(s);
    }
    function x(T) {
      function $(j, V, B, q, z) {
        if (typeof T != "function")
          return new u("Property `" + z + "` of component `" + B + "` has invalid PropType notation inside arrayOf.");
        var Y = j[V];
        if (!Array.isArray(Y)) {
          var K = N(Y);
          return new u("Invalid " + q + " `" + z + "` of type " + ("`" + K + "` supplied to `" + B + "`, expected an array."));
        }
        for (var X = 0; X < Y.length; X++) {
          var D = T(Y, X, B, q, z + "[" + X + "]", n);
          if (D instanceof Error)
            return D;
        }
        return null;
      }
      return O($);
    }
    function E() {
      function T($, j, V, B, q) {
        var z = $[j];
        if (!a(z)) {
          var Y = N(z);
          return new u("Invalid " + B + " `" + q + "` of type " + ("`" + Y + "` supplied to `" + V + "`, expected a single ReactElement."));
        }
        return null;
      }
      return O(T);
    }
    function g() {
      function T($, j, V, B, q) {
        var z = $[j];
        if (!e.isValidElementType(z)) {
          var Y = N(z);
          return new u("Invalid " + B + " `" + q + "` of type " + ("`" + Y + "` supplied to `" + V + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return O(T);
    }
    function I(T) {
      function $(j, V, B, q, z) {
        if (!(j[V] instanceof T)) {
          var Y = T.name || h, K = te(j[V]);
          return new u("Invalid " + q + " `" + z + "` of type " + ("`" + K + "` supplied to `" + B + "`, expected ") + ("instance of `" + Y + "`."));
        }
        return null;
      }
      return O($);
    }
    function M(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function $(j, V, B, q, z) {
        for (var Y = j[V], K = 0; K < T.length; K++)
          if (y(Y, T[K]))
            return null;
        var X = JSON.stringify(T, function(G, w) {
          var oe = U(w);
          return oe === "symbol" ? String(w) : w;
        });
        return new u("Invalid " + q + " `" + z + "` of value `" + String(Y) + "` " + ("supplied to `" + B + "`, expected one of " + X + "."));
      }
      return O($);
    }
    function H(T) {
      function $(j, V, B, q, z) {
        if (typeof T != "function")
          return new u("Property `" + z + "` of component `" + B + "` has invalid PropType notation inside objectOf.");
        var Y = j[V], K = N(Y);
        if (K !== "object")
          return new u("Invalid " + q + " `" + z + "` of type " + ("`" + K + "` supplied to `" + B + "`, expected an object."));
        for (var X in Y)
          if (r(Y, X)) {
            var D = T(Y, X, B, q, z + "." + X, n);
            if (D instanceof Error)
              return D;
          }
        return null;
      }
      return O($);
    }
    function W(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var $ = 0; $ < T.length; $++) {
        var j = T[$];
        if (typeof j != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(j) + " at index " + $ + "."
          ), s;
      }
      function V(B, q, z, Y, K) {
        for (var X = [], D = 0; D < T.length; D++) {
          var G = T[D], w = G(B, q, z, Y, K, n);
          if (w == null)
            return null;
          w.data && r(w.data, "expectedType") && X.push(w.data.expectedType);
        }
        var oe = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new u("Invalid " + Y + " `" + K + "` supplied to " + ("`" + z + "`" + oe + "."));
      }
      return O(V);
    }
    function c() {
      function T($, j, V, B, q) {
        return P($[j]) ? null : new u("Invalid " + B + " `" + q + "` supplied to " + ("`" + V + "`, expected a ReactNode."));
      }
      return O(T);
    }
    function S(T, $, j, V, B) {
      return new u(
        (T || "React class") + ": " + $ + " type `" + j + "." + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + B + "`."
      );
    }
    function k(T) {
      function $(j, V, B, q, z) {
        var Y = j[V], K = N(Y);
        if (K !== "object")
          return new u("Invalid " + q + " `" + z + "` of type `" + K + "` " + ("supplied to `" + B + "`, expected `object`."));
        for (var X in T) {
          var D = T[X];
          if (typeof D != "function")
            return S(B, q, z, X, U(D));
          var G = D(Y, X, B, q, z + "." + X, n);
          if (G)
            return G;
        }
        return null;
      }
      return O($);
    }
    function L(T) {
      function $(j, V, B, q, z) {
        var Y = j[V], K = N(Y);
        if (K !== "object")
          return new u("Invalid " + q + " `" + z + "` of type `" + K + "` " + ("supplied to `" + B + "`, expected `object`."));
        var X = t({}, j[V], T);
        for (var D in X) {
          var G = T[D];
          if (r(T, D) && typeof G != "function")
            return S(B, q, z, D, U(G));
          if (!G)
            return new u(
              "Invalid " + q + " `" + z + "` key `" + D + "` supplied to `" + B + "`.\nBad object: " + JSON.stringify(j[V], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(T), null, "  ")
            );
          var w = G(Y, D, B, q, z + "." + D, n);
          if (w)
            return w;
        }
        return null;
      }
      return O($);
    }
    function P(T) {
      switch (typeof T) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !T;
        case "object":
          if (Array.isArray(T))
            return T.every(P);
          if (T === null || a(T))
            return !0;
          var $ = p(T);
          if ($) {
            var j = $.call(T), V;
            if ($ !== T.entries) {
              for (; !(V = j.next()).done; )
                if (!P(V.value))
                  return !1;
            } else
              for (; !(V = j.next()).done; ) {
                var B = V.value;
                if (B && !P(B[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function A(T, $) {
      return T === "symbol" ? !0 : $ ? $["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && $ instanceof Symbol : !1;
    }
    function N(T) {
      var $ = typeof T;
      return Array.isArray(T) ? "array" : T instanceof RegExp ? "object" : A($, T) ? "symbol" : $;
    }
    function U(T) {
      if (typeof T > "u" || T === null)
        return "" + T;
      var $ = N(T);
      if ($ === "object") {
        if (T instanceof Date)
          return "date";
        if (T instanceof RegExp)
          return "regexp";
      }
      return $;
    }
    function ee(T) {
      var $ = U(T);
      switch ($) {
        case "array":
        case "object":
          return "an " + $;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + $;
        default:
          return $;
      }
    }
    function te(T) {
      return !T.constructor || !T.constructor.name ? h : T.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, dn;
}
var pn, nr;
function Uo() {
  if (nr) return pn;
  nr = 1;
  var e = /* @__PURE__ */ _n();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, pn = function() {
    function r(s, a, f, d, m, p) {
      if (p !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, pn;
}
var rr;
function qo() {
  if (rr) return Rt.exports;
  if (rr = 1, process.env.NODE_ENV !== "production") {
    var e = Br(), t = !0;
    Rt.exports = /* @__PURE__ */ Wo()(e.isElement, t);
  } else
    Rt.exports = /* @__PURE__ */ Uo()();
  return Rt.exports;
}
var Yo = /* @__PURE__ */ qo();
const l = /* @__PURE__ */ Fo(Yo);
function jr(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = jr(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ae() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = jr(e)) && (r && (r += " "), r += t);
  return r;
}
function pt(e, t, n = void 0) {
  const r = {};
  for (const o in e) {
    const i = e[o];
    let s = "", a = !0;
    for (let f = 0; f < i.length; f += 1) {
      const d = i[f];
      d && (s += (a === !0 ? "" : " ") + t(d), a = !1, n && n[d] && (s += " " + n[d]));
    }
    r[o] = s;
  }
  return r;
}
function Bt(e, t, n, r, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const Ho = l.oneOfType([l.func, l.object]);
function mt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function Go(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ko(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof i == "function" && !Go(i) && (a = "Did you accidentally provide a plain function component instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Qo = mt(l.elementType, Ko);
function Xo(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function Lr(e, t, n, r) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const i = Xo(o);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Vr(e, t, ...n) {
  return e[t] === void 0 ? null : Lr(e, t, ...n);
}
function Sn() {
  return null;
}
Vr.isRequired = Lr;
Sn.isRequired = Sn;
const zr = process.env.NODE_ENV === "production" ? Sn : Vr;
function Jo(e) {
  return typeof e == "string";
}
function Ie(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
function Le(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ie(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var At = { exports: {} }, ne = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or;
function Zo() {
  if (or) return ne;
  or = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), b = Symbol.for("react.client.reference");
  function y(u) {
    if (typeof u == "object" && u !== null) {
      var O = u.$$typeof;
      switch (O) {
        case e:
          switch (u = u.type, u) {
            case n:
            case o:
            case r:
            case f:
            case d:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case s:
                case a:
                case p:
                case m:
                  return u;
                case i:
                  return u;
                default:
                  return O;
              }
          }
        case t:
          return O;
      }
    }
  }
  return ne.ContextConsumer = i, ne.ContextProvider = s, ne.Element = e, ne.ForwardRef = a, ne.Fragment = n, ne.Lazy = p, ne.Memo = m, ne.Portal = t, ne.Profiler = o, ne.StrictMode = r, ne.Suspense = f, ne.SuspenseList = d, ne.isContextConsumer = function(u) {
    return y(u) === i;
  }, ne.isContextProvider = function(u) {
    return y(u) === s;
  }, ne.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, ne.isForwardRef = function(u) {
    return y(u) === a;
  }, ne.isFragment = function(u) {
    return y(u) === n;
  }, ne.isLazy = function(u) {
    return y(u) === p;
  }, ne.isMemo = function(u) {
    return y(u) === m;
  }, ne.isPortal = function(u) {
    return y(u) === t;
  }, ne.isProfiler = function(u) {
    return y(u) === o;
  }, ne.isStrictMode = function(u) {
    return y(u) === r;
  }, ne.isSuspense = function(u) {
    return y(u) === f;
  }, ne.isSuspenseList = function(u) {
    return y(u) === d;
  }, ne.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === o || u === r || u === f || u === d || u === h || typeof u == "object" && u !== null && (u.$$typeof === p || u.$$typeof === m || u.$$typeof === s || u.$$typeof === i || u.$$typeof === a || u.$$typeof === b || u.getModuleId !== void 0);
  }, ne.typeOf = y, ne;
}
var re = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir;
function ei() {
  return ir || (ir = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (typeof u == "object" && u !== null) {
        var O = u.$$typeof;
        switch (O) {
          case t:
            switch (u = u.type, u) {
              case r:
              case i:
              case o:
              case d:
              case m:
                return u;
              default:
                switch (u = u && u.$$typeof, u) {
                  case a:
                  case f:
                  case h:
                  case p:
                    return u;
                  case s:
                    return u;
                  default:
                    return O;
                }
            }
          case n:
            return O;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), y = Symbol.for("react.client.reference");
    re.ContextConsumer = s, re.ContextProvider = a, re.Element = t, re.ForwardRef = f, re.Fragment = r, re.Lazy = h, re.Memo = p, re.Portal = n, re.Profiler = i, re.StrictMode = o, re.Suspense = d, re.SuspenseList = m, re.isContextConsumer = function(u) {
      return e(u) === s;
    }, re.isContextProvider = function(u) {
      return e(u) === a;
    }, re.isElement = function(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }, re.isForwardRef = function(u) {
      return e(u) === f;
    }, re.isFragment = function(u) {
      return e(u) === r;
    }, re.isLazy = function(u) {
      return e(u) === h;
    }, re.isMemo = function(u) {
      return e(u) === p;
    }, re.isPortal = function(u) {
      return e(u) === n;
    }, re.isProfiler = function(u) {
      return e(u) === i;
    }, re.isStrictMode = function(u) {
      return e(u) === o;
    }, re.isSuspense = function(u) {
      return e(u) === d;
    }, re.isSuspenseList = function(u) {
      return e(u) === m;
    }, re.isValidElementType = function(u) {
      return typeof u == "string" || typeof u == "function" || u === r || u === i || u === o || u === d || u === m || u === b || typeof u == "object" && u !== null && (u.$$typeof === h || u.$$typeof === p || u.$$typeof === a || u.$$typeof === s || u.$$typeof === f || u.$$typeof === y || u.getModuleId !== void 0);
    }, re.typeOf = e;
  }()), re;
}
var sr;
function ti() {
  return sr || (sr = 1, process.env.NODE_ENV === "production" ? At.exports = /* @__PURE__ */ Zo() : At.exports = /* @__PURE__ */ ei()), At.exports;
}
var Ft = /* @__PURE__ */ ti();
function Pe(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Wr(e) {
  if (/* @__PURE__ */ _.isValidElement(e) || Ft.isValidElementType(e) || !Pe(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Wr(e[n]);
  }), t;
}
function Ee(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return Pe(e) && Pe(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ _.isValidElement(t[o]) || Ft.isValidElementType(t[o]) ? r[o] = t[o] : Pe(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Pe(e[o]) ? r[o] = Ee(e[o], t[o], n) : n.clone ? r[o] = Pe(t[o]) ? Wr(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
function ut(e, t) {
  return t ? Ee(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Me = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.string, l.object, l.array]) : {};
function ni(e, t) {
  if (!e.containerQueries)
    return t;
  const n = Object.keys(t).filter((r) => r.startsWith("@container")).sort((r, o) => {
    var s, a;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((s = r.match(i)) == null ? void 0 : s[1]) || 0) - +(((a = o.match(i)) == null ? void 0 : a[1]) || 0);
  });
  return n.length ? n.reduce((r, o) => {
    const i = t[o];
    return delete r[o], r[o] = i, r;
  }, {
    ...t
  }) : t;
}
function ri(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function oi(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Ie(18, `(${t})`));
    return null;
  }
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function ii(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function n(i, s) {
    i.up = (...a) => t(e.breakpoints.up(...a), s), i.down = (...a) => t(e.breakpoints.down(...a), s), i.between = (...a) => t(e.breakpoints.between(...a), s), i.only = (...a) => t(e.breakpoints.only(...a), s), i.not = (...a) => {
      const f = t(e.breakpoints.not(...a), s);
      return f.includes("not all and") ? f.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : f;
    };
  }
  const r = {}, o = (i) => (n(r, i), r);
  return n(o), {
    ...e,
    containerQueries: o
  };
}
const Ht = {
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
}, ar = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Ht[e]}px)`
}, si = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Ht[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function $e(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || ar;
    return t.reduce((s, a, f) => (s[i.up(i.keys[f])] = n(t[f]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || ar;
    return Object.keys(t).reduce((s, a) => {
      if (ri(i.keys, a)) {
        const f = oi(r.containerQueries ? r : si, a);
        f && (s[f] = n(t[a], a));
      } else if (Object.keys(i.values || Ht).includes(a)) {
        const f = i.up(a);
        s[f] = n(t[a], a);
      } else {
        const f = a;
        s[f] = t[f];
      }
      return s;
    }, {});
  }
  return n(t);
}
function ai(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function li(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Gt(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function jt(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Gt(e, n) || r, t && (o = t(o, r, e)), o;
}
function me(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], f = s.theme, d = Gt(f, r) || {};
    return $e(s, a, (p) => {
      let h = jt(d, o, p);
      return p === h && typeof p == "string" && (h = jt(d, o, `${t}${p === "default" ? "" : Le(p)}`, p)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Me
  } : {}, i.filterProps = [t], i;
}
function ci(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const ui = {
  m: "margin",
  p: "padding"
}, fi = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, lr = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, di = ci((e) => {
  if (e.length > 2)
    if (lr[e])
      e = lr[e];
    else
      return [e];
  const [t, n] = e.split(""), r = ui[t], o = fi[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Kt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Qt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], pi = [...Kt, ...Qt];
function ht(e, t, n, r) {
  const o = Gt(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const a = o[s];
    return i >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function In(e) {
  return ht(e, "spacing", 8, "spacing");
}
function gt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function mi(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = gt(t, n), r), {});
}
function hi(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const o = di(n), i = mi(o, r), s = e[n];
  return $e(e, s, i);
}
function Ur(e, t) {
  const n = In(e.theme);
  return Object.keys(e).map((r) => hi(e, t, r, n)).reduce(ut, {});
}
function ce(e) {
  return Ur(e, Kt);
}
ce.propTypes = process.env.NODE_ENV !== "production" ? Kt.reduce((e, t) => (e[t] = Me, e), {}) : {};
ce.filterProps = Kt;
function ue(e) {
  return Ur(e, Qt);
}
ue.propTypes = process.env.NODE_ENV !== "production" ? Qt.reduce((e, t) => (e[t] = Me, e), {}) : {};
ue.filterProps = Qt;
process.env.NODE_ENV !== "production" && pi.reduce((e, t) => (e[t] = Me, e), {});
function Xt(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? ut(o, t[i](r)) : o, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, o) => Object.assign(r, o.propTypes), {}) : {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function xe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Se(e, t) {
  return me({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const gi = Se("border", xe), yi = Se("borderTop", xe), bi = Se("borderRight", xe), vi = Se("borderBottom", xe), Ei = Se("borderLeft", xe), xi = Se("borderColor"), Si = Se("borderTopColor"), Ti = Se("borderRightColor"), Ci = Se("borderBottomColor"), wi = Se("borderLeftColor"), Oi = Se("outline", xe), Ri = Se("outlineColor"), Jt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ht(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: gt(t, r)
    });
    return $e(e, e.borderRadius, n);
  }
  return null;
};
Jt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Me
} : {};
Jt.filterProps = ["borderRadius"];
Xt(gi, yi, bi, vi, Ei, xi, Si, Ti, Ci, wi, Jt, Oi, Ri);
const Zt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ht(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: gt(t, r)
    });
    return $e(e, e.gap, n);
  }
  return null;
};
Zt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Me
} : {};
Zt.filterProps = ["gap"];
const en = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ht(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: gt(t, r)
    });
    return $e(e, e.columnGap, n);
  }
  return null;
};
en.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Me
} : {};
en.filterProps = ["columnGap"];
const tn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ht(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: gt(t, r)
    });
    return $e(e, e.rowGap, n);
  }
  return null;
};
tn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Me
} : {};
tn.filterProps = ["rowGap"];
const Pi = me({
  prop: "gridColumn"
}), Ai = me({
  prop: "gridRow"
}), $i = me({
  prop: "gridAutoFlow"
}), ki = me({
  prop: "gridAutoColumns"
}), Ni = me({
  prop: "gridAutoRows"
}), _i = me({
  prop: "gridTemplateColumns"
}), Ii = me({
  prop: "gridTemplateRows"
}), Di = me({
  prop: "gridTemplateAreas"
}), Mi = me({
  prop: "gridArea"
});
Xt(Zt, en, tn, Pi, Ai, $i, ki, Ni, _i, Ii, Di, Mi);
function Je(e, t) {
  return t === "grey" ? t : e;
}
const Bi = me({
  prop: "color",
  themeKey: "palette",
  transform: Je
}), Fi = me({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Je
}), ji = me({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Je
});
Xt(Bi, Fi, ji);
function ve(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Li = me({
  prop: "width",
  transform: ve
}), Dn = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, a, f;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || Ht[n];
      return r ? ((f = (a = e.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : f.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: ve(n)
      };
    };
    return $e(e, e.maxWidth, t);
  }
  return null;
};
Dn.filterProps = ["maxWidth"];
const Vi = me({
  prop: "minWidth",
  transform: ve
}), zi = me({
  prop: "height",
  transform: ve
}), Wi = me({
  prop: "maxHeight",
  transform: ve
}), Ui = me({
  prop: "minHeight",
  transform: ve
});
me({
  prop: "size",
  cssProperty: "width",
  transform: ve
});
me({
  prop: "size",
  cssProperty: "height",
  transform: ve
});
const qi = me({
  prop: "boxSizing"
});
Xt(Li, Dn, Vi, zi, Wi, Ui, qi);
const nn = {
  // borders
  border: {
    themeKey: "borders",
    transform: xe
  },
  borderTop: {
    themeKey: "borders",
    transform: xe
  },
  borderRight: {
    themeKey: "borders",
    transform: xe
  },
  borderBottom: {
    themeKey: "borders",
    transform: xe
  },
  borderLeft: {
    themeKey: "borders",
    transform: xe
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
    transform: xe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Jt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Je
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Je
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Je
  },
  // spacing
  p: {
    style: ue
  },
  pt: {
    style: ue
  },
  pr: {
    style: ue
  },
  pb: {
    style: ue
  },
  pl: {
    style: ue
  },
  px: {
    style: ue
  },
  py: {
    style: ue
  },
  padding: {
    style: ue
  },
  paddingTop: {
    style: ue
  },
  paddingRight: {
    style: ue
  },
  paddingBottom: {
    style: ue
  },
  paddingLeft: {
    style: ue
  },
  paddingX: {
    style: ue
  },
  paddingY: {
    style: ue
  },
  paddingInline: {
    style: ue
  },
  paddingInlineStart: {
    style: ue
  },
  paddingInlineEnd: {
    style: ue
  },
  paddingBlock: {
    style: ue
  },
  paddingBlockStart: {
    style: ue
  },
  paddingBlockEnd: {
    style: ue
  },
  m: {
    style: ce
  },
  mt: {
    style: ce
  },
  mr: {
    style: ce
  },
  mb: {
    style: ce
  },
  ml: {
    style: ce
  },
  mx: {
    style: ce
  },
  my: {
    style: ce
  },
  margin: {
    style: ce
  },
  marginTop: {
    style: ce
  },
  marginRight: {
    style: ce
  },
  marginBottom: {
    style: ce
  },
  marginLeft: {
    style: ce
  },
  marginX: {
    style: ce
  },
  marginY: {
    style: ce
  },
  marginInline: {
    style: ce
  },
  marginInlineStart: {
    style: ce
  },
  marginInlineEnd: {
    style: ce
  },
  marginBlock: {
    style: ce
  },
  marginBlockStart: {
    style: ce
  },
  marginBlockEnd: {
    style: ce
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
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
    style: Zt
  },
  rowGap: {
    style: tn
  },
  columnGap: {
    style: en
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
    transform: ve
  },
  maxWidth: {
    style: Dn
  },
  minWidth: {
    transform: ve
  },
  height: {
    transform: ve
  },
  maxHeight: {
    transform: ve
  },
  minHeight: {
    transform: ve
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
function Yi(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Hi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Gi() {
  function e(n, r, o, i) {
    const s = {
      [n]: r,
      theme: o
    }, a = i[n];
    if (!a)
      return {
        [n]: r
      };
    const {
      cssProperty: f = n,
      themeKey: d,
      transform: m,
      style: p
    } = a;
    if (r == null)
      return null;
    if (d === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const h = Gt(o, d) || {};
    return p ? p(s) : $e(s, r, (y) => {
      let u = jt(h, m, y);
      return y === u && typeof y == "string" && (u = jt(h, m, `${n}${y === "default" ? "" : Le(y)}`, y)), f === !1 ? u : {
        [f]: u
      };
    });
  }
  function t(n) {
    const {
      sx: r,
      theme: o = {}
    } = n || {};
    if (!r)
      return null;
    const i = o.unstable_sxConfig ?? nn;
    function s(a) {
      let f = a;
      if (typeof a == "function")
        f = a(o);
      else if (typeof a != "object")
        return a;
      if (!f)
        return null;
      const d = ai(o.breakpoints), m = Object.keys(d);
      let p = d;
      return Object.keys(f).forEach((h) => {
        const b = Hi(f[h], o);
        if (b != null)
          if (typeof b == "object")
            if (i[h])
              p = ut(p, e(h, b, o, i));
            else {
              const y = $e({
                theme: o
              }, b, (u) => ({
                [h]: u
              }));
              Yi(y, b) ? p[h] = t({
                sx: b,
                theme: o
              }) : p = ut(p, y);
            }
          else
            p = ut(p, e(h, b, o, i));
      }), ni(o, li(m, p));
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return t;
}
const Ze = Gi();
Ze.filterProps = ["sx"];
function Ki(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Qi = {
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
};
function Xi(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Ji = /[A-Z]|^ms/g, Zi = /_EMO_([^_]+?)_([^]*?)_EMO_/g, qr = function(t) {
  return t.charCodeAt(1) === 45;
}, cr = function(t) {
  return t != null && typeof t != "boolean";
}, mn = /* @__PURE__ */ Xi(function(e) {
  return qr(e) ? e : e.replace(Ji, "-$&").toLowerCase();
}), ur = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Zi, function(r, o, i) {
          return _e = {
            name: o,
            styles: i,
            next: _e
          }, o;
        });
  }
  return Qi[t] !== 1 && !qr(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Lt(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1)
        return _e = {
          name: o.name,
          styles: o.styles,
          next: _e
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            _e = {
              name: s.name,
              styles: s.styles,
              next: _e
            }, s = s.next;
        var a = i.styles + ";";
        return a;
      }
      return es(e, t, n);
    }
  }
  var f = n;
  return f;
}
function es(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Lt(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        cr(a) && (r += mn(i) + ":" + ur(i, a) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && t == null)
        for (var f = 0; f < s.length; f++)
          cr(s[f]) && (r += mn(i) + ":" + ur(i, s[f]) + ";");
      else {
        var d = Lt(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += mn(i) + ":" + d + ";";
            break;
          }
          default:
            r += i + "{" + d + "}";
        }
      }
    }
  return r;
}
var fr = /label:\s*([^\s;{]+)\s*(;|$)/g, _e;
function ts(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  _e = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += Lt(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += Lt(n, t, e[a]), r) {
      var f = i;
      o += f[a];
    }
  fr.lastIndex = 0;
  for (var d = "", m; (m = fr.exec(o)) !== null; )
    d += "-" + m[1];
  var p = Ki(o) + d;
  return {
    name: p,
    styles: o,
    next: _e
  };
}
/**
 * @mui/styled-engine v6.4.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function ns(e, t) {
  const n = xo(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
function rs(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const dr = [];
function pr(e) {
  return dr[0] = e, ts(dr);
}
const os = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function is(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
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
    unit: n = "px",
    step: r = 5,
    ...o
  } = e, i = os(t), s = Object.keys(i);
  function a(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function f(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${n})`;
  }
  function d(h, b) {
    const y = s.indexOf(b);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(y !== -1 && typeof t[s[y]] == "number" ? t[s[y]] : b) - r / 100}${n})`;
  }
  function m(h) {
    return s.indexOf(h) + 1 < s.length ? d(h, s[s.indexOf(h) + 1]) : a(h);
  }
  function p(h) {
    const b = s.indexOf(h);
    return b === 0 ? a(s[1]) : b === s.length - 1 ? f(s[b]) : d(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: a,
    down: f,
    between: d,
    only: m,
    not: p,
    unit: n,
    ...o
  };
}
const ss = {
  borderRadius: 4
};
function Yr(e = 8, t = In({
  spacing: e
})) {
  if (e.mui)
    return e;
  const n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return n.mui = !0, n;
}
function as(e, t) {
  var r;
  const n = this;
  if (n.vars) {
    if (!((r = n.colorSchemes) != null && r[e]) || typeof n.getColorSchemeSelector != "function")
      return {};
    let o = n.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return n.palette.mode === e ? t : {};
}
function Mn(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, a = is(n), f = Yr(o);
  let d = Ee({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...r
    },
    spacing: f,
    shape: {
      ...ss,
      ...i
    }
  }, s);
  return d = ii(d), d.applyStyles = as, d = t.reduce((m, p) => Ee(m, p), d), d.unstable_sxConfig = {
    ...nn,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, d.unstable_sx = function(p) {
    return Ze({
      sx: p,
      theme: this
    });
  }, d;
}
function ls(e) {
  return Object.keys(e).length === 0;
}
function cs(e = null) {
  const t = _.useContext(So);
  return !t || ls(t) ? e : t;
}
const us = Mn();
function fs(e = us) {
  return cs(e);
}
const mr = (e) => e, ds = () => {
  let e = mr;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = mr;
    }
  };
}, ps = ds(), ms = {
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
function Ve(e, t, n = "Mui") {
  const r = ms[t];
  return r ? `${n}-${r}` : `${ps.generate(e)}-${t}`;
}
function yt(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = Ve(e, o, n);
  }), r;
}
function Hr(e, t = "") {
  return e.displayName || e.name || t;
}
function hr(e, t, n) {
  const r = Hr(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function hs(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Hr(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ft.ForwardRef:
          return hr(e, e.render, "ForwardRef");
        case Ft.Memo:
          return hr(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Gr(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: pr(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = pr(o.style));
  }), r;
}
const gs = Mn();
function hn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function ys(e) {
  return e ? (t, n) => n[e] : null;
}
function bs(e, t, n) {
  e.theme = Ss(e.theme) ? n : e.theme[t] || e.theme;
}
function It(e, t) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((r) => It(e, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let r;
    if (n.isProcessed)
      r = n.style;
    else {
      const {
        variants: o,
        ...i
      } = n;
      r = i;
    }
    return Kr(e, n.variants, [r]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function Kr(e, t, n = []) {
  var o;
  let r;
  e: for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (typeof s.props == "function") {
      if (r ?? (r = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !s.props(r))
        continue;
    } else
      for (const a in s.props)
        if (e[a] !== s.props[a] && ((o = e.ownerState) == null ? void 0 : o[a]) !== s.props[a])
          continue e;
    typeof s.style == "function" ? (r ?? (r = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), n.push(s.style(r))) : n.push(s.style);
  }
  return n;
}
function vs(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = gs,
    rootShouldForwardProp: r = hn,
    slotShouldForwardProp: o = hn
  } = e;
  function i(a) {
    bs(a, t, n);
  }
  return (a, f = {}) => {
    rs(a, (g) => g.filter((I) => I !== Ze));
    const {
      name: d,
      slot: m,
      skipVariantsResolver: p,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: b = ys(Qr(m)),
      ...y
    } = f, u = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      m && m !== "Root" && m !== "root" || !1
    ), O = h || !1;
    let R = hn;
    m === "Root" || m === "root" ? R = r : m ? R = o : Ts(a) && (R = void 0);
    const F = ns(a, {
      shouldForwardProp: R,
      label: xs(d, m),
      ...y
    }), x = (g) => {
      if (typeof g == "function" && g.__emotion_real !== g)
        return function(M) {
          return It(M, g);
        };
      if (Pe(g)) {
        const I = Gr(g);
        return I.variants ? function(H) {
          return It(H, I);
        } : I.style;
      }
      return g;
    }, E = (...g) => {
      const I = [], M = g.map(x), H = [];
      if (I.push(i), d && b && H.push(function(k) {
        var N, U;
        const P = (U = (N = k.theme.components) == null ? void 0 : N[d]) == null ? void 0 : U.styleOverrides;
        if (!P)
          return null;
        const A = {};
        for (const ee in P)
          A[ee] = It(k, P[ee]);
        return b(k, A);
      }), d && !u && H.push(function(k) {
        var A, N;
        const L = k.theme, P = (N = (A = L == null ? void 0 : L.components) == null ? void 0 : A[d]) == null ? void 0 : N.variants;
        return P ? Kr(k, P) : null;
      }), O || H.push(Ze), Array.isArray(M[0])) {
        const S = M.shift(), k = new Array(I.length).fill(""), L = new Array(H.length).fill("");
        let P;
        P = [...k, ...S, ...L], P.raw = [...k, ...S.raw, ...L], I.unshift(P);
      }
      const W = [...I, ...M, ...H], c = F(...W);
      return a.muiName && (c.muiName = a.muiName), process.env.NODE_ENV !== "production" && (c.displayName = Es(d, m, a)), c;
    };
    return F.withConfig && (E.withConfig = F.withConfig), E;
  };
}
function Es(e, t, n) {
  return e ? `${e}${Le(t || "")}` : `Styled(${hs(n)})`;
}
function xs(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${Qr(t || "Root")}`), n;
}
function Ss(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Ts(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Qr(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Tn(e, t) {
  const n = {
    ...t
  };
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      const o = r;
      if (o === "components" || o === "slots")
        n[o] = {
          ...e[o],
          ...n[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], s = t[o];
        if (!s)
          n[o] = i || {};
        else if (!i)
          n[o] = s;
        else {
          n[o] = {
            ...s
          };
          for (const a in i)
            if (Object.prototype.hasOwnProperty.call(i, a)) {
              const f = a;
              n[o][f] = Tn(i[f], s[f]);
            }
        }
      } else n[o] === void 0 && (n[o] = e[o]);
    }
  return n;
}
const Cn = typeof window < "u" ? _.useLayoutEffect : _.useEffect;
function Cs(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Bn(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Cs(e, t, n);
}
function ws(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function De(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return De(ws(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ie(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ie(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const Os = (e) => {
  const t = De(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, at = (e, t) => {
  try {
    return Os(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function rn(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Xr(e) {
  e = De(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (d, m = (d + n / 30) % 12) => o - i * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let a = "rgb";
  const f = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", f.push(t[3])), rn({
    type: a,
    values: f
  });
}
function wn(e) {
  e = De(e);
  let t = e.type === "hsl" || e.type === "hsla" ? De(Xr(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function gr(e, t) {
  const n = wn(e), r = wn(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function On(e, t) {
  return e = De(e), t = Bn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, rn(e);
}
function $t(e, t, n) {
  try {
    return On(e, t);
  } catch {
    return e;
  }
}
function Fn(e, t) {
  if (e = De(e), t = Bn(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return rn(e);
}
function ie(e, t, n) {
  try {
    return Fn(e, t);
  } catch {
    return e;
  }
}
function jn(e, t) {
  if (e = De(e), t = Bn(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return rn(e);
}
function se(e, t, n) {
  try {
    return jn(e, t);
  } catch {
    return e;
  }
}
function Rs(e, t = 0.15) {
  return wn(e) > 0.5 ? Fn(e, t) : jn(e, t);
}
function kt(e, t, n) {
  try {
    return Rs(e, t);
  } catch {
    return e;
  }
}
function Ps(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Jr(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  const f = i.type;
  return typeof f == "function" && !Ps(f) && (a = "Did you accidentally use a plain function component for an element instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const bt = mt(l.element, Jr);
bt.isRequired = mt(l.element.isRequired, Jr);
const As = "exact-prop: ​";
function Zr(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [As]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function yr(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function $s(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), n = setTimeout(i, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function ke(e) {
  return e && e.ownerDocument || document;
}
function et(e) {
  return ke(e).defaultView || window;
}
function Rn(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function br(e) {
  const t = _.useRef(e);
  return Cn(() => {
    t.current = e;
  }), _.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Be(...e) {
  return _.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Rn(n, t);
    });
  }, e);
}
const vr = {};
function ks(e, t) {
  const n = _.useRef(vr);
  return n.current === vr && (n.current = e(t)), n;
}
const Ns = [];
function _s(e) {
  _.useEffect(e, Ns);
}
class Ln {
  constructor() {
    wt(this, "currentId", null);
    wt(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    wt(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Ln();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function Is() {
  const e = ks(Ln.create).current;
  return _s(e.disposeEffect), e;
}
function Ds(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function Ms(e) {
  return typeof e == "string";
}
function Bs(e, t, n) {
  return e === void 0 || Ms(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function eo(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Er(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Fs(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const b = Ae(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), y = {
      ...n == null ? void 0 : n.style,
      ...o == null ? void 0 : o.style,
      ...r == null ? void 0 : r.style
    }, u = {
      ...n,
      ...o,
      ...r
    };
    return b.length > 0 && (u.className = b), Object.keys(y).length > 0 && (u.style = y), {
      props: u,
      internalRef: void 0
    };
  }
  const s = eo({
    ...o,
    ...r
  }), a = Er(r), f = Er(o), d = t(s), m = Ae(d == null ? void 0 : d.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), p = {
    ...d == null ? void 0 : d.style,
    ...n == null ? void 0 : n.style,
    ...o == null ? void 0 : o.style,
    ...r == null ? void 0 : r.style
  }, h = {
    ...d,
    ...n,
    ...f,
    ...a
  };
  return m.length > 0 && (h.className = m), Object.keys(p).length > 0 && (h.style = p), {
    props: h,
    internalRef: d.ref
  };
}
function js(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function on(e) {
  var t;
  return parseInt(_.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const Ls = /* @__PURE__ */ _.createContext(void 0);
process.env.NODE_ENV !== "production" && (l.node, l.object);
function Vs(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? Tn(o.defaultProps, r) : !o.styleOverrides && !o.variants ? Tn(o, r) : r;
}
function zs({
  props: e,
  name: t
}) {
  const n = _.useContext(Ls);
  return Vs({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const xr = {
  theme: void 0
};
function Ws(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (xr.theme = o.theme, i = Gr(e(xr)), t = i, n = o.theme), i;
  };
}
function Us(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const Sr = (e, t, n, r = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = n : o && typeof o == "object" && (o[i] = n) : o && typeof o == "object" && (o[i] || (o[i] = r.includes(i) ? [] : {}), o = o[i]);
  });
}, qs = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([a, f]) => {
      (!n || n && !n([...i, a])) && f != null && (typeof f == "object" && Object.keys(f).length > 0 ? r(f, [...i, a], Array.isArray(f) ? [...s, a] : s) : t([...i, a], f, s));
    });
  }
  r(e);
}, Ys = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function gn(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return qs(
    e,
    (a, f, d) => {
      if ((typeof f == "string" || typeof f == "number") && (!r || !r(a, f))) {
        const m = `--${n ? `${n}-` : ""}${a.join("-")}`, p = Ys(a, f);
        Object.assign(o, {
          [m]: p
        }), Sr(i, a, `var(${m})`, d), Sr(s, a, `var(${m}, ${p})`, d);
      }
    },
    (a) => a[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function Hs(e, t = {}) {
  const {
    getSelector: n = O,
    disableCssColorScheme: r,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: s,
    defaultColorScheme: a = "light",
    ...f
  } = e, {
    vars: d,
    css: m,
    varsWithDefaults: p
  } = gn(f, t);
  let h = p;
  const b = {}, {
    [a]: y,
    ...u
  } = i;
  if (Object.entries(u || {}).forEach(([x, E]) => {
    const {
      vars: g,
      css: I,
      varsWithDefaults: M
    } = gn(E, t);
    h = Ee(h, M), b[x] = {
      css: I,
      vars: g
    };
  }), y) {
    const {
      css: x,
      vars: E,
      varsWithDefaults: g
    } = gn(y, t);
    h = Ee(h, g), b[a] = {
      css: x,
      vars: E
    };
  }
  function O(x, E) {
    var I, M;
    let g = o;
    if (o === "class" && (g = ".%s"), o === "data" && (g = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (g = `[${o}="%s"]`), x) {
      if (g === "media")
        return e.defaultColorScheme === x ? ":root" : {
          [`@media (prefers-color-scheme: ${((M = (I = i[x]) == null ? void 0 : I.palette) == null ? void 0 : M.mode) || x})`]: {
            ":root": E
          }
        };
      if (g)
        return e.defaultColorScheme === x ? `:root, ${g.replace("%s", String(x))}` : g.replace("%s", String(x));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let x = {
        ...d
      };
      return Object.entries(b).forEach(([, {
        vars: E
      }]) => {
        x = Ee(x, E);
      }), x;
    },
    generateStyleSheets: () => {
      var H, W;
      const x = [], E = e.defaultColorScheme || "light";
      function g(c, S) {
        Object.keys(S).length && x.push(typeof c == "string" ? {
          [c]: {
            ...S
          }
        } : c);
      }
      g(n(void 0, {
        ...m
      }), m);
      const {
        [E]: I,
        ...M
      } = b;
      if (I) {
        const {
          css: c
        } = I, S = (W = (H = i[E]) == null ? void 0 : H.palette) == null ? void 0 : W.mode, k = !r && S ? {
          colorScheme: S,
          ...c
        } : {
          ...c
        };
        g(n(E, {
          ...k
        }), k);
      }
      return Object.entries(M).forEach(([c, {
        css: S
      }]) => {
        var P, A;
        const k = (A = (P = i[c]) == null ? void 0 : P.palette) == null ? void 0 : A.mode, L = !r && k ? {
          colorScheme: k,
          ...S
        } : {
          ...S
        };
        g(n(c, {
          ...L
        }), L);
      }), x;
    }
  };
}
function Gs(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const dt = {
  black: "#000",
  white: "#fff"
}, Ks = {
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
}, Ue = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, qe = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, it = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Ye = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, He = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Ge = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function to() {
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
      paper: dt.white,
      default: dt.white
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
const Qs = to();
function no() {
  return {
    text: {
      primary: dt.white,
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
      active: dt.white,
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
const Tr = no();
function Cr(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = jn(e.main, o) : t === "dark" && (e.dark = Fn(e.main, i)));
}
function Xs(e = "light") {
  return e === "dark" ? {
    main: Ye[200],
    light: Ye[50],
    dark: Ye[400]
  } : {
    main: Ye[700],
    light: Ye[400],
    dark: Ye[800]
  };
}
function Js(e = "light") {
  return e === "dark" ? {
    main: Ue[200],
    light: Ue[50],
    dark: Ue[400]
  } : {
    main: Ue[500],
    light: Ue[300],
    dark: Ue[700]
  };
}
function Zs(e = "light") {
  return e === "dark" ? {
    main: qe[500],
    light: qe[300],
    dark: qe[700]
  } : {
    main: qe[700],
    light: qe[400],
    dark: qe[800]
  };
}
function ea(e = "light") {
  return e === "dark" ? {
    main: He[400],
    light: He[300],
    dark: He[700]
  } : {
    main: He[700],
    light: He[500],
    dark: He[900]
  };
}
function ta(e = "light") {
  return e === "dark" ? {
    main: Ge[400],
    light: Ge[300],
    dark: Ge[700]
  } : {
    main: Ge[800],
    light: Ge[500],
    dark: Ge[900]
  };
}
function na(e = "light") {
  return e === "dark" ? {
    main: it[400],
    light: it[300],
    dark: it[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: it[500],
    dark: it[900]
  };
}
function Vn(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...o
  } = e, i = e.primary || Xs(t), s = e.secondary || Js(t), a = e.error || Zs(t), f = e.info || ea(t), d = e.success || ta(t), m = e.warning || na(t);
  function p(u) {
    const O = gr(u, Tr.text.primary) >= n ? Tr.text.primary : Qs.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const R = gr(u, O);
      R < 3 && console.error([`MUI: The contrast ratio of ${R}:1 for ${O} on ${u}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return O;
  }
  const h = ({
    color: u,
    name: O,
    mainShade: R = 500,
    lightShade: F = 300,
    darkShade: x = 700
  }) => {
    if (u = {
      ...u
    }, !u.main && u[R] && (u.main = u[R]), !u.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${O ? ` (${O})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${R}\` property.` : Ie(11, O ? ` (${O})` : "", R));
    if (typeof u.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${O ? ` (${O})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(u.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ie(12, O ? ` (${O})` : "", JSON.stringify(u.main)));
    return Cr(u, "light", F, r), Cr(u, "dark", x, r), u.contrastText || (u.contrastText = p(u.main)), u;
  };
  let b;
  return t === "light" ? b = to() : t === "dark" && (b = no()), process.env.NODE_ENV !== "production" && (b || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ee({
    // A collection of common colors.
    common: {
      ...dt
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: Ks,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...b
  }, o);
}
function ra(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function oa(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function ia(e) {
  return Math.round(e * 1e5) / 1e5;
}
const wr = {
  textTransform: "uppercase"
}, Or = '"Roboto", "Helvetica", "Arial", sans-serif';
function sa(e, t) {
  const {
    fontFamily: n = Or,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: m,
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof r != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = r / 14, b = m || ((O) => `${O / f * h}rem`), y = (O, R, F, x, E) => ({
    fontFamily: n,
    fontWeight: O,
    fontSize: b(R),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: F,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Or ? {
      letterSpacing: `${ia(x / R)}em`
    } : {},
    ...E,
    ...d
  }), u = {
    h1: y(o, 96, 1.167, -1.5),
    h2: y(o, 60, 1.2, -0.5),
    h3: y(i, 48, 1.167, 0),
    h4: y(i, 34, 1.235, 0.25),
    h5: y(i, 24, 1.334, 0),
    h6: y(s, 20, 1.6, 0.15),
    subtitle1: y(i, 16, 1.75, 0.15),
    subtitle2: y(s, 14, 1.57, 0.1),
    body1: y(i, 16, 1.5, 0.15),
    body2: y(i, 14, 1.43, 0.15),
    button: y(s, 14, 1.75, 0.4, wr),
    caption: y(i, 12, 1.66, 0.4),
    overline: y(i, 12, 2.66, 1, wr),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ee({
    htmlFontSize: f,
    pxToRem: b,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: a,
    ...u
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const aa = 0.2, la = 0.14, ca = 0.12;
function le(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${aa})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${la})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ca})`].join(",");
}
const ua = ["none", le(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), le(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), le(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), le(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), le(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), le(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), le(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), le(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), le(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), le(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), le(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), le(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), le(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), le(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), le(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), le(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), le(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), le(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), le(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), le(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), le(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), le(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), le(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), le(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], fa = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, da = {
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
function Rr(e) {
  return `${Math.round(e)}ms`;
}
function pa(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function ma(e) {
  const t = {
    ...fa,
    ...e.easing
  }, n = {
    ...da,
    ...e.duration
  };
  return {
    getAutoHeightDuration: pa,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: a = t.easeInOut,
        delay: f = 0,
        ...d
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const m = (h) => typeof h == "string", p = (h) => !Number.isNaN(parseFloat(h));
        !m(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(s) && !m(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), m(a) || console.error('MUI: Argument "easing" must be a string.'), !p(f) && !m(f) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((m) => `${m} ${typeof s == "string" ? s : Rr(s)} ${a} ${typeof f == "string" ? f : Rr(f)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const ha = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function ga(e) {
  return Pe(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function ro(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, a] = o[i];
      !ga(a) || s.startsWith("unstable_") ? delete r[s] : Pe(a) && (r[s] = {
        ...a
      }, n(r[s]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Pn(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: a = {},
    shape: f,
    ...d
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Ie(20));
  const m = Vn(i), p = Mn(e);
  let h = Ee(p, {
    mixins: oa(p.breakpoints, r),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ua.slice(),
    typography: sa(m, a),
    transitions: ma(s),
    zIndex: {
      ...ha
    }
  });
  if (h = Ee(h, d), h = t.reduce((b, y) => Ee(b, y), h), process.env.NODE_ENV !== "production") {
    const b = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], y = (u, O) => {
      let R;
      for (R in u) {
        const F = u[R];
        if (b.includes(R) && Object.keys(F).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const x = Ve("", R);
            console.error([`MUI: The \`${O}\` component increases the CSS specificity of the \`${R}\` internal state.`, "You can not override it like this: ", JSON.stringify(u, null, 2), "", `Instead, you need to use the '&.${x}' syntax:`, JSON.stringify({
              root: {
                [`&.${x}`]: F
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          u[R] = {};
        }
      }
    };
    Object.keys(h.components).forEach((u) => {
      const O = h.components[u].styleOverrides;
      O && u.startsWith("Mui") && y(O, u);
    });
  }
  return h.unstable_sxConfig = {
    ...nn,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, h.unstable_sx = function(y) {
    return Ze({
      sx: y,
      theme: this
    });
  }, h.toRuntimeSource = ro, h;
}
function An(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const ya = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = An(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function oo(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function io(e) {
  return e === "dark" ? ya : [];
}
function ba(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    ...o
  } = e, i = Vn(t);
  return {
    palette: i,
    opacity: {
      ...oo(i.mode),
      ...n
    },
    overlays: r || io(i.mode),
    ...o
  };
}
function va(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Ea = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], xa = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Ea(e.cssVarPrefix).forEach((a) => {
        s[a] = n[a], delete n[a];
      }), i === "media" ? {
        [r]: n,
        "@media (prefers-color-scheme: dark)": {
          [r]: s
        }
      } : i ? {
        [i.replace("%s", t)]: s,
        [`${r}, ${i.replace("%s", t)}`]: n
      } : {
        [r]: {
          ...n,
          ...s
        }
      };
    }
    if (i && i !== "media")
      return `${r}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [r]: n
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return r;
};
function Sa(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function v(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function lt(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Xr(e);
}
function Re(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = at(lt(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Ta(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const we = (e) => {
  try {
    return e();
  } catch {
  }
}, Ca = (e = "mui") => Us(e);
function yn(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = ba({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...s
  } = Pn({
    ...n,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[r] = {
    ...t,
    palette: i,
    opacity: {
      ...oo(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || io(o)
  }, s;
}
function wa(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: s = va,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...d
  } = e, m = Object.keys(n)[0], p = r || (n.light && m !== "light" ? "light" : m), h = Ca(i), {
    [p]: b,
    light: y,
    dark: u,
    ...O
  } = n, R = {
    ...O
  };
  let F = b;
  if ((p === "dark" && !("dark" in n) || p === "light" && !("light" in n)) && (F = !0), !F)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : Ie(21, p));
  const x = yn(R, F, d, p);
  y && !R.light && yn(R, y, void 0, "light"), u && !R.dark && yn(R, u, void 0, "dark");
  let E = {
    defaultColorScheme: p,
    ...x,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: f,
    getCssVar: h,
    colorSchemes: R,
    font: {
      ...ra(x.typography),
      ...x.font
    },
    spacing: Ta(d.spacing)
  };
  Object.keys(E.colorSchemes).forEach((W) => {
    const c = E.colorSchemes[W].palette, S = (k) => {
      const L = k.split("-"), P = L[1], A = L[2];
      return h(k, c[P][A]);
    };
    if (c.mode === "light" && (v(c.common, "background", "#fff"), v(c.common, "onBackground", "#000")), c.mode === "dark" && (v(c.common, "background", "#000"), v(c.common, "onBackground", "#fff")), Sa(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      v(c.Alert, "errorColor", ie(c.error.light, 0.6)), v(c.Alert, "infoColor", ie(c.info.light, 0.6)), v(c.Alert, "successColor", ie(c.success.light, 0.6)), v(c.Alert, "warningColor", ie(c.warning.light, 0.6)), v(c.Alert, "errorFilledBg", S("palette-error-main")), v(c.Alert, "infoFilledBg", S("palette-info-main")), v(c.Alert, "successFilledBg", S("palette-success-main")), v(c.Alert, "warningFilledBg", S("palette-warning-main")), v(c.Alert, "errorFilledColor", we(() => c.getContrastText(c.error.main))), v(c.Alert, "infoFilledColor", we(() => c.getContrastText(c.info.main))), v(c.Alert, "successFilledColor", we(() => c.getContrastText(c.success.main))), v(c.Alert, "warningFilledColor", we(() => c.getContrastText(c.warning.main))), v(c.Alert, "errorStandardBg", se(c.error.light, 0.9)), v(c.Alert, "infoStandardBg", se(c.info.light, 0.9)), v(c.Alert, "successStandardBg", se(c.success.light, 0.9)), v(c.Alert, "warningStandardBg", se(c.warning.light, 0.9)), v(c.Alert, "errorIconColor", S("palette-error-main")), v(c.Alert, "infoIconColor", S("palette-info-main")), v(c.Alert, "successIconColor", S("palette-success-main")), v(c.Alert, "warningIconColor", S("palette-warning-main")), v(c.AppBar, "defaultBg", S("palette-grey-100")), v(c.Avatar, "defaultBg", S("palette-grey-400")), v(c.Button, "inheritContainedBg", S("palette-grey-300")), v(c.Button, "inheritContainedHoverBg", S("palette-grey-A100")), v(c.Chip, "defaultBorder", S("palette-grey-400")), v(c.Chip, "defaultAvatarColor", S("palette-grey-700")), v(c.Chip, "defaultIconColor", S("palette-grey-700")), v(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), v(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), v(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), v(c.LinearProgress, "primaryBg", se(c.primary.main, 0.62)), v(c.LinearProgress, "secondaryBg", se(c.secondary.main, 0.62)), v(c.LinearProgress, "errorBg", se(c.error.main, 0.62)), v(c.LinearProgress, "infoBg", se(c.info.main, 0.62)), v(c.LinearProgress, "successBg", se(c.success.main, 0.62)), v(c.LinearProgress, "warningBg", se(c.warning.main, 0.62)), v(c.Skeleton, "bg", `rgba(${S("palette-text-primaryChannel")} / 0.11)`), v(c.Slider, "primaryTrack", se(c.primary.main, 0.62)), v(c.Slider, "secondaryTrack", se(c.secondary.main, 0.62)), v(c.Slider, "errorTrack", se(c.error.main, 0.62)), v(c.Slider, "infoTrack", se(c.info.main, 0.62)), v(c.Slider, "successTrack", se(c.success.main, 0.62)), v(c.Slider, "warningTrack", se(c.warning.main, 0.62));
      const k = kt(c.background.default, 0.8);
      v(c.SnackbarContent, "bg", k), v(c.SnackbarContent, "color", we(() => c.getContrastText(k))), v(c.SpeedDialAction, "fabHoverBg", kt(c.background.paper, 0.15)), v(c.StepConnector, "border", S("palette-grey-400")), v(c.StepContent, "border", S("palette-grey-400")), v(c.Switch, "defaultColor", S("palette-common-white")), v(c.Switch, "defaultDisabledColor", S("palette-grey-100")), v(c.Switch, "primaryDisabledColor", se(c.primary.main, 0.62)), v(c.Switch, "secondaryDisabledColor", se(c.secondary.main, 0.62)), v(c.Switch, "errorDisabledColor", se(c.error.main, 0.62)), v(c.Switch, "infoDisabledColor", se(c.info.main, 0.62)), v(c.Switch, "successDisabledColor", se(c.success.main, 0.62)), v(c.Switch, "warningDisabledColor", se(c.warning.main, 0.62)), v(c.TableCell, "border", se($t(c.divider, 1), 0.88)), v(c.Tooltip, "bg", $t(c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      v(c.Alert, "errorColor", se(c.error.light, 0.6)), v(c.Alert, "infoColor", se(c.info.light, 0.6)), v(c.Alert, "successColor", se(c.success.light, 0.6)), v(c.Alert, "warningColor", se(c.warning.light, 0.6)), v(c.Alert, "errorFilledBg", S("palette-error-dark")), v(c.Alert, "infoFilledBg", S("palette-info-dark")), v(c.Alert, "successFilledBg", S("palette-success-dark")), v(c.Alert, "warningFilledBg", S("palette-warning-dark")), v(c.Alert, "errorFilledColor", we(() => c.getContrastText(c.error.dark))), v(c.Alert, "infoFilledColor", we(() => c.getContrastText(c.info.dark))), v(c.Alert, "successFilledColor", we(() => c.getContrastText(c.success.dark))), v(c.Alert, "warningFilledColor", we(() => c.getContrastText(c.warning.dark))), v(c.Alert, "errorStandardBg", ie(c.error.light, 0.9)), v(c.Alert, "infoStandardBg", ie(c.info.light, 0.9)), v(c.Alert, "successStandardBg", ie(c.success.light, 0.9)), v(c.Alert, "warningStandardBg", ie(c.warning.light, 0.9)), v(c.Alert, "errorIconColor", S("palette-error-main")), v(c.Alert, "infoIconColor", S("palette-info-main")), v(c.Alert, "successIconColor", S("palette-success-main")), v(c.Alert, "warningIconColor", S("palette-warning-main")), v(c.AppBar, "defaultBg", S("palette-grey-900")), v(c.AppBar, "darkBg", S("palette-background-paper")), v(c.AppBar, "darkColor", S("palette-text-primary")), v(c.Avatar, "defaultBg", S("palette-grey-600")), v(c.Button, "inheritContainedBg", S("palette-grey-800")), v(c.Button, "inheritContainedHoverBg", S("palette-grey-700")), v(c.Chip, "defaultBorder", S("palette-grey-700")), v(c.Chip, "defaultAvatarColor", S("palette-grey-300")), v(c.Chip, "defaultIconColor", S("palette-grey-300")), v(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), v(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), v(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), v(c.LinearProgress, "primaryBg", ie(c.primary.main, 0.5)), v(c.LinearProgress, "secondaryBg", ie(c.secondary.main, 0.5)), v(c.LinearProgress, "errorBg", ie(c.error.main, 0.5)), v(c.LinearProgress, "infoBg", ie(c.info.main, 0.5)), v(c.LinearProgress, "successBg", ie(c.success.main, 0.5)), v(c.LinearProgress, "warningBg", ie(c.warning.main, 0.5)), v(c.Skeleton, "bg", `rgba(${S("palette-text-primaryChannel")} / 0.13)`), v(c.Slider, "primaryTrack", ie(c.primary.main, 0.5)), v(c.Slider, "secondaryTrack", ie(c.secondary.main, 0.5)), v(c.Slider, "errorTrack", ie(c.error.main, 0.5)), v(c.Slider, "infoTrack", ie(c.info.main, 0.5)), v(c.Slider, "successTrack", ie(c.success.main, 0.5)), v(c.Slider, "warningTrack", ie(c.warning.main, 0.5));
      const k = kt(c.background.default, 0.98);
      v(c.SnackbarContent, "bg", k), v(c.SnackbarContent, "color", we(() => c.getContrastText(k))), v(c.SpeedDialAction, "fabHoverBg", kt(c.background.paper, 0.15)), v(c.StepConnector, "border", S("palette-grey-600")), v(c.StepContent, "border", S("palette-grey-600")), v(c.Switch, "defaultColor", S("palette-grey-300")), v(c.Switch, "defaultDisabledColor", S("palette-grey-600")), v(c.Switch, "primaryDisabledColor", ie(c.primary.main, 0.55)), v(c.Switch, "secondaryDisabledColor", ie(c.secondary.main, 0.55)), v(c.Switch, "errorDisabledColor", ie(c.error.main, 0.55)), v(c.Switch, "infoDisabledColor", ie(c.info.main, 0.55)), v(c.Switch, "successDisabledColor", ie(c.success.main, 0.55)), v(c.Switch, "warningDisabledColor", ie(c.warning.main, 0.55)), v(c.TableCell, "border", ie($t(c.divider, 1), 0.68)), v(c.Tooltip, "bg", $t(c.grey[700], 0.92));
    }
    Re(c.background, "default"), Re(c.background, "paper"), Re(c.common, "background"), Re(c.common, "onBackground"), Re(c, "divider"), Object.keys(c).forEach((k) => {
      const L = c[k];
      k !== "tonalOffset" && L && typeof L == "object" && (L.main && v(c[k], "mainChannel", at(lt(L.main))), L.light && v(c[k], "lightChannel", at(lt(L.light))), L.dark && v(c[k], "darkChannel", at(lt(L.dark))), L.contrastText && v(c[k], "contrastTextChannel", at(lt(L.contrastText))), k === "text" && (Re(c[k], "primary"), Re(c[k], "secondary")), k === "action" && (L.active && Re(c[k], "active"), L.selected && Re(c[k], "selected")));
    });
  }), E = t.reduce((W, c) => Ee(W, c), E);
  const g = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: xa(E)
  }, {
    vars: I,
    generateThemeVars: M,
    generateStyleSheets: H
  } = Hs(E, g);
  return E.vars = I, Object.entries(E.colorSchemes[E.defaultColorScheme]).forEach(([W, c]) => {
    E[W] = c;
  }), E.generateThemeVars = M, E.generateStyleSheets = H, E.generateSpacing = function() {
    return Yr(d.spacing, In(this));
  }, E.getColorSchemeSelector = Gs(a), E.spacing = E.generateSpacing(), E.shouldSkipGeneratingVar = s, E.unstable_sxConfig = {
    ...nn,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, E.unstable_sx = function(c) {
    return Ze({
      sx: c,
      theme: this
    });
  }, E.toRuntimeSource = ro, E;
}
function Pr(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Vn({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Oa(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: o = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = n == null ? void 0 : n.mode,
    ...s
  } = e, a = i || "light", f = o == null ? void 0 : o[a], d = {
    ...o,
    ...n ? {
      [a]: {
        ...typeof f != "boolean" && f,
        palette: n
      }
    } : void 0
  };
  if (r === !1) {
    if (!("colorSchemes" in e))
      return Pn(e, ...t);
    let m = n;
    "palette" in e || d[a] && (d[a] !== !0 ? m = d[a].palette : a === "dark" && (m = {
      mode: "dark"
    }));
    const p = Pn({
      ...e,
      palette: m
    }, ...t);
    return p.defaultColorScheme = a, p.colorSchemes = d, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: p.palette
    }, Pr(p, "dark", d.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: p.palette
    }, Pr(p, "light", d.light)), p;
  }
  return !n && !("light" in d) && a === "light" && (d.light = !0), wa({
    ...s,
    colorSchemes: d,
    defaultColorScheme: a,
    ...typeof r != "boolean" && r
  }, ...t);
}
const so = Oa(), ao = "$$material";
function zn() {
  const e = fs(so);
  return process.env.NODE_ENV !== "production" && _.useDebugValue(e), e[ao] || e;
}
function Ra(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Pa = (e) => Ra(e) && e !== "classes", ze = vs({
  themeId: ao,
  defaultTheme: so,
  rootShouldForwardProp: Pa
});
process.env.NODE_ENV !== "production" && (l.node, l.object.isRequired);
function vt(e) {
  return zs(e);
}
function Aa(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function $n(e, t) {
  return $n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, $n(e, t);
}
function $a(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, $n(e, t);
}
const Ar = {
  disabled: !1
};
var ka = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.shape({
  enter: l.number,
  exit: l.number,
  appear: l.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && l.oneOfType([l.string, l.shape({
  enter: l.string,
  exit: l.string,
  active: l.string
}), l.shape({
  enter: l.string,
  enterDone: l.string,
  enterActive: l.string,
  exit: l.string,
  exitDone: l.string,
  exitActive: l.string
})]);
const lo = st.createContext(null);
var Na = function(t) {
  return t.scrollTop;
}, ct = "unmounted", Fe = "exited", je = "entering", Qe = "entered", kn = "exiting", Oe = /* @__PURE__ */ function(e) {
  $a(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = o, a = s && !s.isMounting ? r.enter : r.appear, f;
    return i.appearStatus = null, r.in ? a ? (f = Fe, i.appearStatus = je) : f = Qe : r.unmountOnExit || r.mountOnEnter ? f = ct : f = Fe, i.state = {
      status: f
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === ct ? {
      status: Fe
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== je && s !== Qe && (i = je) : (s === je || s === Qe) && (i = kn);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, i, s, a;
    return i = s = a = o, o != null && typeof o != "number" && (i = o.exit, s = o.enter, a = o.appear !== void 0 ? o.appear : s), {
      exit: i,
      enter: s,
      appear: a
    };
  }, n.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === je) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Ot.findDOMNode(this);
          s && Na(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Fe && this.setState({
      status: ct
    });
  }, n.performEnter = function(o) {
    var i = this, s = this.props.enter, a = this.context ? this.context.isMounting : o, f = this.props.nodeRef ? [a] : [Ot.findDOMNode(this), a], d = f[0], m = f[1], p = this.getTimeouts(), h = a ? p.appear : p.enter;
    if (!o && !s || Ar.disabled) {
      this.safeSetState({
        status: Qe
      }, function() {
        i.props.onEntered(d);
      });
      return;
    }
    this.props.onEnter(d, m), this.safeSetState({
      status: je
    }, function() {
      i.props.onEntering(d, m), i.onTransitionEnd(h, function() {
        i.safeSetState({
          status: Qe
        }, function() {
          i.props.onEntered(d, m);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), a = this.props.nodeRef ? void 0 : Ot.findDOMNode(this);
    if (!i || Ar.disabled) {
      this.safeSetState({
        status: Fe
      }, function() {
        o.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: kn
    }, function() {
      o.props.onExiting(a), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: Fe
        }, function() {
          o.props.onExited(a);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, n.setNextCallback = function(o) {
    var i = this, s = !0;
    return this.nextCallback = function(a) {
      s && (s = !1, i.nextCallback = null, o(a));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var s = this.props.nodeRef ? this.props.nodeRef.current : Ot.findDOMNode(this), a = o == null && !this.props.addEndListener;
    if (!s || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var f = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], d = f[0], m = f[1];
      this.props.addEndListener(d, m);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === ct)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var a = Aa(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ st.createElement(lo.Provider, {
        value: null
      }, typeof s == "function" ? s(o, a) : st.cloneElement(st.Children.only(s), a))
    );
  }, t;
}(st.Component);
Oe.contextType = lo;
Oe.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: l.shape({
    current: typeof Element > "u" ? l.any : function(e, t, n, r, o, i) {
      var s = e[t];
      return l.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, n, r, o, i);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: l.oneOfType([l.func.isRequired, l.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: l.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: l.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: l.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: l.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: l.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: l.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = ka;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      o[i - 1] = arguments[i];
    return n.apply(void 0, [t].concat(o));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: l.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: l.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: l.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: l.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: l.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: l.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: l.func
} : {};
function Ke() {
}
Oe.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ke,
  onEntering: Ke,
  onEntered: Ke,
  onExit: Ke,
  onExiting: Ke,
  onExited: Ke
};
Oe.UNMOUNTED = ct;
Oe.EXITED = Fe;
Oe.ENTERING = je;
Oe.ENTERED = Qe;
Oe.EXITING = kn;
const co = (e) => e.scrollTop;
function Vt(e, t) {
  const {
    timeout: n,
    easing: r,
    style: o = {}
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function Nn(e) {
  return `scale(${e}, ${e ** 2})`;
}
const _a = {
  entering: {
    opacity: 1,
    transform: Nn(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, bn = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), zt = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    easing: s,
    in: a,
    onEnter: f,
    onEntered: d,
    onEntering: m,
    onExit: p,
    onExited: h,
    onExiting: b,
    style: y,
    timeout: u = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: O = Oe,
    ...R
  } = t, F = Is(), x = _.useRef(), E = zn(), g = _.useRef(null), I = Be(g, on(i), n), M = (A) => (N) => {
    if (A) {
      const U = g.current;
      N === void 0 ? A(U) : A(U, N);
    }
  }, H = M(m), W = M((A, N) => {
    co(A);
    const {
      duration: U,
      delay: ee,
      easing: te
    } = Vt({
      style: y,
      timeout: u,
      easing: s
    }, {
      mode: "enter"
    });
    let T;
    u === "auto" ? (T = E.transitions.getAutoHeightDuration(A.clientHeight), x.current = T) : T = U, A.style.transition = [E.transitions.create("opacity", {
      duration: T,
      delay: ee
    }), E.transitions.create("transform", {
      duration: bn ? T : T * 0.666,
      delay: ee,
      easing: te
    })].join(","), f && f(A, N);
  }), c = M(d), S = M(b), k = M((A) => {
    const {
      duration: N,
      delay: U,
      easing: ee
    } = Vt({
      style: y,
      timeout: u,
      easing: s
    }, {
      mode: "exit"
    });
    let te;
    u === "auto" ? (te = E.transitions.getAutoHeightDuration(A.clientHeight), x.current = te) : te = N, A.style.transition = [E.transitions.create("opacity", {
      duration: te,
      delay: U
    }), E.transitions.create("transform", {
      duration: bn ? te : te * 0.666,
      delay: bn ? U : U || te * 0.333,
      easing: ee
    })].join(","), A.style.opacity = 0, A.style.transform = Nn(0.75), p && p(A);
  }), L = M(h);
  return /* @__PURE__ */ C(O, {
    appear: o,
    in: a,
    nodeRef: g,
    onEnter: W,
    onEntered: c,
    onEntering: H,
    onExit: k,
    onExited: L,
    onExiting: S,
    addEndListener: (A) => {
      u === "auto" && F.start(x.current || 0, A), r && r(g.current, A);
    },
    timeout: u === "auto" ? null : u,
    ...R,
    children: (A, {
      ownerState: N,
      ...U
    }) => /* @__PURE__ */ _.cloneElement(i, {
      style: {
        opacity: 0,
        transform: Nn(0.75),
        visibility: A === "exited" && !a ? "hidden" : void 0,
        ..._a[A],
        ...y,
        ...i.props.style
      },
      ref: I,
      ...U
    })
  });
});
process.env.NODE_ENV !== "production" && (zt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: l.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: l.bool,
  /**
   * A single child content element.
   */
  children: bt.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: l.oneOfType([l.shape({
    enter: l.string,
    exit: l.string
  }), l.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: l.bool,
  /**
   * @ignore
   */
  onEnter: l.func,
  /**
   * @ignore
   */
  onEntered: l.func,
  /**
   * @ignore
   */
  onEntering: l.func,
  /**
   * @ignore
   */
  onExit: l.func,
  /**
   * @ignore
   */
  onExited: l.func,
  /**
   * @ignore
   */
  onExiting: l.func,
  /**
   * @ignore
   */
  style: l.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: l.oneOfType([l.oneOf(["auto"]), l.number, l.shape({
    appear: l.number,
    enter: l.number,
    exit: l.number
  })])
});
zt && (zt.muiSupportAuto = !0);
function Ia(e) {
  const t = ke(e);
  return t.body === e ? et(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function ft(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function $r(e) {
  return parseInt(et(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Da(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function kr(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = !i.includes(s), f = !Da(s);
    a && f && ft(s, o);
  });
}
function vn(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function Ma(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Ia(r)) {
      const s = Ds(et(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${$r(r) + s}px`;
      const a = ke(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (f) => {
        n.push({
          value: f.style.paddingRight,
          property: "padding-right",
          el: f
        }), f.style.paddingRight = `${$r(f) + s}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = ke(r).body;
    else {
      const s = r.parentElement, a = et(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && a.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    n.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: i,
      el: s,
      property: a
    }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function Ba(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Fa {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && ft(t.modalRef, !1);
    const o = Ba(n);
    kr(n, t.mount, t.modalRef, o, !0);
    const i = vn(this.containers, (s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = vn(this.containers, (i) => i.modals.includes(t)), o = this.containers[r];
    o.restore || (o.restore = Ma(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = vn(this.containers, (s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && ft(t.modalRef, n), kr(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && ft(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const ja = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function La(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Va(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function za(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Va(e));
}
function Wa(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(ja)).forEach((r, o) => {
    const i = La(r);
    i === -1 || !za(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function Ua() {
  return !0;
}
function Wt(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = Wa,
    isEnabled: s = Ua,
    open: a
  } = e, f = _.useRef(!1), d = _.useRef(null), m = _.useRef(null), p = _.useRef(null), h = _.useRef(null), b = _.useRef(!1), y = _.useRef(null), u = Be(on(t), y), O = _.useRef(null);
  _.useEffect(() => {
    !a || !y.current || (b.current = !n);
  }, [n, a]), _.useEffect(() => {
    if (!a || !y.current)
      return;
    const x = ke(y.current);
    return y.current.contains(x.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), b.current && y.current.focus()), () => {
      o || (p.current && p.current.focus && (f.current = !0, p.current.focus()), p.current = null);
    };
  }, [a]), _.useEffect(() => {
    if (!a || !y.current)
      return;
    const x = ke(y.current), E = (M) => {
      O.current = M, !(r || !s() || M.key !== "Tab") && x.activeElement === y.current && M.shiftKey && (f.current = !0, m.current && m.current.focus());
    }, g = () => {
      var W, c;
      const M = y.current;
      if (M === null)
        return;
      if (!x.hasFocus() || !s() || f.current) {
        f.current = !1;
        return;
      }
      if (M.contains(x.activeElement) || r && x.activeElement !== d.current && x.activeElement !== m.current)
        return;
      if (x.activeElement !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!b.current)
        return;
      let H = [];
      if ((x.activeElement === d.current || x.activeElement === m.current) && (H = i(y.current)), H.length > 0) {
        const S = !!((W = O.current) != null && W.shiftKey && ((c = O.current) == null ? void 0 : c.key) === "Tab"), k = H[0], L = H[H.length - 1];
        typeof k != "string" && typeof L != "string" && (S ? L.focus() : k.focus());
      } else
        M.focus();
    };
    x.addEventListener("focusin", g), x.addEventListener("keydown", E, !0);
    const I = setInterval(() => {
      x.activeElement && x.activeElement.tagName === "BODY" && g();
    }, 50);
    return () => {
      clearInterval(I), x.removeEventListener("focusin", g), x.removeEventListener("keydown", E, !0);
    };
  }, [n, r, o, s, a, i]);
  const R = (x) => {
    p.current === null && (p.current = x.relatedTarget), b.current = !0, h.current = x.target;
    const E = t.props.onFocus;
    E && E(x);
  }, F = (x) => {
    p.current === null && (p.current = x.relatedTarget), b.current = !0;
  };
  return /* @__PURE__ */ ae(_.Fragment, {
    children: [/* @__PURE__ */ C("div", {
      tabIndex: a ? 0 : -1,
      onFocus: F,
      ref: d,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ _.cloneElement(t, {
      ref: u,
      onFocus: R
    }), /* @__PURE__ */ C("div", {
      tabIndex: a ? 0 : -1,
      onFocus: F,
      ref: m,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Wt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: bt,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: l.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: l.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: l.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: l.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: l.func,
  /**
   * If `true`, focus is locked.
   */
  open: l.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Wt.propTypes = Zr(Wt.propTypes));
function qa(e) {
  return typeof e == "function" ? e() : e;
}
const Ut = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, a] = _.useState(null), f = Be(/* @__PURE__ */ _.isValidElement(r) ? on(r) : null, n);
  if (Cn(() => {
    i || a(qa(o) || document.body);
  }, [o, i]), Cn(() => {
    if (s && !i)
      return Rn(n, s), () => {
        Rn(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ _.isValidElement(r)) {
      const d = {
        ref: f
      };
      return /* @__PURE__ */ _.cloneElement(r, d);
    }
    return r;
  }
  return s && /* @__PURE__ */ Bo.createPortal(r, s);
});
process.env.NODE_ENV !== "production" && (Ut.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: l.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: l.oneOfType([Bt, l.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: l.bool
});
process.env.NODE_ENV !== "production" && (Ut.propTypes = Zr(Ut.propTypes));
const Wn = Ws;
function tt(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: o,
    externalForwardedProps: i,
    internalForwardedProps: s,
    shouldForwardComponentProp: a = !1,
    ...f
  } = t, {
    component: d,
    slots: m = {
      [e]: void 0
    },
    slotProps: p = {
      [e]: void 0
    },
    ...h
  } = i, b = m[e] || r, y = js(p[e], o), {
    props: {
      component: u,
      ...O
    },
    internalRef: R
  } = Fs({
    className: n,
    ...f,
    externalForwardedProps: e === "root" ? h : void 0,
    externalSlotProps: y
  }), F = Be(R, y == null ? void 0 : y.ref, t.ref), x = e === "root" ? u || d : u, E = Bs(b, {
    ...e === "root" && !d && !m[e] && s,
    ...e !== "root" && !m[e] && s,
    ...O,
    ...x && !a && {
      as: x
    },
    ...x && a && {
      component: x
    },
    ref: F
  }, o);
  return [b, E];
}
const Ya = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, uo = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = zn(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: a,
    easing: f,
    in: d,
    onEnter: m,
    onEntered: p,
    onEntering: h,
    onExit: b,
    onExited: y,
    onExiting: u,
    style: O,
    timeout: R = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: F = Oe,
    ...x
  } = t, E = _.useRef(null), g = Be(E, on(a), n), I = (P) => (A) => {
    if (P) {
      const N = E.current;
      A === void 0 ? P(N) : P(N, A);
    }
  }, M = I(h), H = I((P, A) => {
    co(P);
    const N = Vt({
      style: O,
      timeout: R,
      easing: f
    }, {
      mode: "enter"
    });
    P.style.webkitTransition = r.transitions.create("opacity", N), P.style.transition = r.transitions.create("opacity", N), m && m(P, A);
  }), W = I(p), c = I(u), S = I((P) => {
    const A = Vt({
      style: O,
      timeout: R,
      easing: f
    }, {
      mode: "exit"
    });
    P.style.webkitTransition = r.transitions.create("opacity", A), P.style.transition = r.transitions.create("opacity", A), b && b(P);
  }), k = I(y);
  return /* @__PURE__ */ C(F, {
    appear: s,
    in: d,
    nodeRef: E,
    onEnter: H,
    onEntered: W,
    onEntering: M,
    onExit: S,
    onExited: k,
    onExiting: c,
    addEndListener: (P) => {
      i && i(E.current, P);
    },
    timeout: R,
    ...x,
    children: (P, {
      ownerState: A,
      ...N
    }) => /* @__PURE__ */ _.cloneElement(a, {
      style: {
        opacity: 0,
        visibility: P === "exited" && !d ? "hidden" : void 0,
        ...Ya[P],
        ...O,
        ...a.props.style
      },
      ref: g,
      ...N
    })
  });
});
process.env.NODE_ENV !== "production" && (uo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: l.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: l.bool,
  /**
   * A single child content element.
   */
  children: bt.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: l.oneOfType([l.shape({
    enter: l.string,
    exit: l.string
  }), l.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: l.bool,
  /**
   * @ignore
   */
  onEnter: l.func,
  /**
   * @ignore
   */
  onEntered: l.func,
  /**
   * @ignore
   */
  onEntering: l.func,
  /**
   * @ignore
   */
  onExit: l.func,
  /**
   * @ignore
   */
  onExited: l.func,
  /**
   * @ignore
   */
  onExiting: l.func,
  /**
   * @ignore
   */
  style: l.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: l.oneOfType([l.number, l.shape({
    appear: l.number,
    enter: l.number,
    exit: l.number
  })])
});
function Ha(e) {
  return Ve("MuiBackdrop", e);
}
yt("MuiBackdrop", ["root", "invisible"]);
const Ga = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return pt({
    root: ["root", n && "invisible"]
  }, Ha, t);
}, Ka = ze("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), fo = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = vt({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: o,
    className: i,
    component: s = "div",
    invisible: a = !1,
    open: f,
    components: d = {},
    componentsProps: m = {},
    slotProps: p = {},
    slots: h = {},
    TransitionComponent: b,
    transitionDuration: y,
    ...u
  } = r, O = {
    ...r,
    component: s,
    invisible: a
  }, R = Ga(O), F = {
    transition: b,
    root: d.Root,
    ...h
  }, x = {
    ...m,
    ...p
  }, E = {
    slots: F,
    slotProps: x
  }, [g, I] = tt("root", {
    elementType: Ka,
    externalForwardedProps: E,
    className: Ae(R.root, i),
    ownerState: O
  }), [M, H] = tt("transition", {
    elementType: uo,
    externalForwardedProps: E,
    ownerState: O
  });
  return /* @__PURE__ */ C(M, {
    in: f,
    timeout: y,
    ...u,
    ...H,
    children: /* @__PURE__ */ C(g, {
      "aria-hidden": !0,
      ...I,
      classes: R,
      ref: n,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (fo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: l.shape({
    Root: l.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: l.shape({
    root: l.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: l.bool,
  /**
   * If `true`, the component is shown.
   */
  open: l.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: l.shape({
    root: l.oneOfType([l.func, l.object]),
    transition: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: l.shape({
    root: l.elementType,
    transition: l.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: l.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: l.oneOfType([l.number, l.shape({
    appear: l.number,
    enter: l.number,
    exit: l.number
  })])
});
function Qa(e) {
  return typeof e == "function" ? e() : e;
}
function Xa(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Nr = () => {
}, Nt = new Fa();
function Ja(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    closeAfterTransition: o = !1,
    onTransitionEnter: i,
    onTransitionExited: s,
    children: a,
    onClose: f,
    open: d,
    rootRef: m
  } = e, p = _.useRef({}), h = _.useRef(null), b = _.useRef(null), y = Be(b, m), [u, O] = _.useState(!d), R = Xa(a);
  let F = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (F = !1);
  const x = () => ke(h.current), E = () => (p.current.modalRef = b.current, p.current.mount = h.current, p.current), g = () => {
    Nt.mount(E(), {
      disableScrollLock: r
    }), b.current && (b.current.scrollTop = 0);
  }, I = br(() => {
    const A = Qa(t) || x().body;
    Nt.add(E(), A), b.current && g();
  }), M = () => Nt.isTopModal(E()), H = br((A) => {
    h.current = A, A && (d && M() ? g() : b.current && ft(b.current, F));
  }), W = _.useCallback(() => {
    Nt.remove(E(), F);
  }, [F]);
  _.useEffect(() => () => {
    W();
  }, [W]), _.useEffect(() => {
    d ? I() : (!R || !o) && W();
  }, [d, W, R, o, I]);
  const c = (A) => (N) => {
    var U;
    (U = A.onKeyDown) == null || U.call(A, N), !(N.key !== "Escape" || N.which === 229 || // Wait until IME is settled.
    !M()) && (n || (N.stopPropagation(), f && f(N, "escapeKeyDown")));
  }, S = (A) => (N) => {
    var U;
    (U = A.onClick) == null || U.call(A, N), N.target === N.currentTarget && f && f(N, "backdropClick");
  };
  return {
    getRootProps: (A = {}) => {
      const N = eo(e);
      delete N.onTransitionEnter, delete N.onTransitionExited;
      const U = {
        ...N,
        ...A
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...U,
        onKeyDown: c(U),
        ref: y
      };
    },
    getBackdropProps: (A = {}) => {
      const N = A;
      return {
        "aria-hidden": !0,
        ...N,
        onClick: S(N),
        open: d
      };
    },
    getTransitionProps: () => {
      const A = () => {
        O(!1), i && i();
      }, N = () => {
        O(!0), s && s(), o && W();
      };
      return {
        onEnter: yr(A, (a == null ? void 0 : a.props.onEnter) ?? Nr),
        onExited: yr(N, (a == null ? void 0 : a.props.onExited) ?? Nr)
      };
    },
    rootRef: y,
    portalRef: H,
    isTopModal: M,
    exited: u,
    hasTransition: R
  };
}
function Za(e) {
  return Ve("MuiModal", e);
}
yt("MuiModal", ["root", "hidden", "backdrop"]);
function el(e) {
  return Ve("MuiSvgIcon", e);
}
yt("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const tl = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Le(t)}`, `fontSize${Le(n)}`]
  };
  return pt(o, el, r);
}, nl = ze("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${Le(n.color)}`], t[`fontSize${Le(n.fontSize)}`]];
  }
})(Wn(({
  theme: e
}) => {
  var t, n, r, o, i, s, a, f, d, m, p, h, b, y;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : o.call(t, "fill", {
      duration: (r = (n = (e.vars ?? e).transitions) == null ? void 0 : n.duration) == null ? void 0 : r.shorter
    }),
    variants: [
      {
        props: (u) => !u.hasSvgAsChild,
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
          fontSize: ((s = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : s.call(i, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((f = (a = e.typography) == null ? void 0 : a.pxToRem) == null ? void 0 : f.call(a, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((m = (d = e.typography) == null ? void 0 : d.pxToRem) == null ? void 0 : m.call(d, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, u]) => u && u.main).map(([u]) => {
        var O, R;
        return {
          props: {
            color: u
          },
          style: {
            color: (R = (O = (e.vars ?? e).palette) == null ? void 0 : O[u]) == null ? void 0 : R.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (h = (p = (e.vars ?? e).palette) == null ? void 0 : p.action) == null ? void 0 : h.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (y = (b = (e.vars ?? e).palette) == null ? void 0 : b.action) == null ? void 0 : y.disabled
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
  };
})), qt = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = vt({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: a = "svg",
    fontSize: f = "medium",
    htmlColor: d,
    inheritViewBox: m = !1,
    titleAccess: p,
    viewBox: h = "0 0 24 24",
    ...b
  } = r, y = /* @__PURE__ */ _.isValidElement(o) && o.type === "svg", u = {
    ...r,
    color: s,
    component: a,
    fontSize: f,
    instanceFontSize: t.fontSize,
    inheritViewBox: m,
    viewBox: h,
    hasSvgAsChild: y
  }, O = {};
  m || (O.viewBox = h);
  const R = tl(u);
  return /* @__PURE__ */ ae(nl, {
    as: a,
    className: Ae(R.root, i),
    focusable: "false",
    color: d,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: n,
    ...O,
    ...b,
    ...y && o.props,
    ownerState: u,
    children: [y ? o.props.children : o, p ? /* @__PURE__ */ C("title", {
      children: p
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (qt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: l.oneOfType([l.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: l.oneOfType([l.oneOf(["inherit", "large", "medium", "small"]), l.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: l.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: l.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: l.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: l.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: l.string
});
qt.muiName = "SvgIcon";
function Un(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ C(qt, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...r,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = qt.muiName, /* @__PURE__ */ _.memo(/* @__PURE__ */ _.forwardRef(n));
}
const rl = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return pt({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, Za, r);
}, ol = ze("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(Wn(({
  theme: e
}) => ({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: t
    }) => !t.open && t.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), il = ze(fo, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), po = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = vt({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: o = il,
    BackdropProps: i,
    classes: s,
    className: a,
    closeAfterTransition: f = !1,
    children: d,
    container: m,
    component: p,
    components: h = {},
    componentsProps: b = {},
    disableAutoFocus: y = !1,
    disableEnforceFocus: u = !1,
    disableEscapeKeyDown: O = !1,
    disablePortal: R = !1,
    disableRestoreFocus: F = !1,
    disableScrollLock: x = !1,
    hideBackdrop: E = !1,
    keepMounted: g = !1,
    onBackdropClick: I,
    onClose: M,
    onTransitionEnter: H,
    onTransitionExited: W,
    open: c,
    slotProps: S = {},
    slots: k = {},
    // eslint-disable-next-line react/prop-types
    theme: L,
    ...P
  } = r, A = {
    ...r,
    closeAfterTransition: f,
    disableAutoFocus: y,
    disableEnforceFocus: u,
    disableEscapeKeyDown: O,
    disablePortal: R,
    disableRestoreFocus: F,
    disableScrollLock: x,
    hideBackdrop: E,
    keepMounted: g
  }, {
    getRootProps: N,
    getBackdropProps: U,
    getTransitionProps: ee,
    portalRef: te,
    isTopModal: T,
    exited: $,
    hasTransition: j
  } = Ja({
    ...A,
    rootRef: n
  }), V = {
    ...A,
    exited: $
  }, B = rl(V), q = {};
  if (d.props.tabIndex === void 0 && (q.tabIndex = "-1"), j) {
    const {
      onEnter: w,
      onExited: oe
    } = ee();
    q.onEnter = w, q.onExited = oe;
  }
  const z = {
    ...P,
    slots: {
      root: h.Root,
      backdrop: h.Backdrop,
      ...k
    },
    slotProps: {
      ...b,
      ...S
    }
  }, [Y, K] = tt("root", {
    elementType: ol,
    externalForwardedProps: z,
    getSlotProps: N,
    additionalProps: {
      ref: n,
      as: p
    },
    ownerState: V,
    className: Ae(a, B == null ? void 0 : B.root, !V.open && V.exited && (B == null ? void 0 : B.hidden))
  }), [X, D] = tt("backdrop", {
    elementType: o,
    externalForwardedProps: z,
    additionalProps: i,
    getSlotProps: (w) => U({
      ...w,
      onClick: (oe) => {
        I && I(oe), w != null && w.onClick && w.onClick(oe);
      }
    }),
    className: Ae(i == null ? void 0 : i.className, B == null ? void 0 : B.backdrop),
    ownerState: V
  }), G = Be(i == null ? void 0 : i.ref, D.ref);
  return !g && !c && (!j || $) ? null : /* @__PURE__ */ C(Ut, {
    ref: te,
    container: m,
    disablePortal: R,
    children: /* @__PURE__ */ ae(Y, {
      ...K,
      children: [!E && o ? /* @__PURE__ */ C(X, {
        ...D,
        ref: G
      }) : null, /* @__PURE__ */ C(Wt, {
        disableEnforceFocus: u,
        disableAutoFocus: y,
        disableRestoreFocus: F,
        isEnabled: T,
        open: c,
        children: /* @__PURE__ */ _.cloneElement(d, q)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (po.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: l.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: l.object,
  /**
   * A single child content element.
   */
  children: bt.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: l.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: l.shape({
    Backdrop: l.elementType,
    Root: l.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: l.shape({
    backdrop: l.oneOfType([l.func, l.object]),
    root: l.oneOfType([l.func, l.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: l.oneOfType([Bt, l.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: l.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: l.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: l.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: l.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: l.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: l.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: l.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: l.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: l.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: l.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: l.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: l.func,
  /**
   * If `true`, the component is shown.
   */
  open: l.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: l.shape({
    backdrop: l.oneOfType([l.func, l.object]),
    root: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: l.shape({
    backdrop: l.elementType,
    root: l.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
function sl(e) {
  return Ve("MuiPaper", e);
}
yt("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const al = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return pt(i, sl, o);
}, ll = ze("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(Wn(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
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
}))), mo = /* @__PURE__ */ _.forwardRef(function(t, n) {
  var b;
  const r = vt({
    props: t,
    name: "MuiPaper"
  }), o = zn(), {
    className: i,
    component: s = "div",
    elevation: a = 1,
    square: f = !1,
    variant: d = "elevation",
    ...m
  } = r, p = {
    ...r,
    component: s,
    elevation: a,
    square: f,
    variant: d
  }, h = al(p);
  return process.env.NODE_ENV !== "production" && o.shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ C(ll, {
    as: s,
    ownerState: p,
    className: Ae(h.root, i),
    ref: n,
    ...m,
    style: {
      ...d === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[a],
        ...o.vars && {
          "--Paper-overlay": (b = o.vars.overlays) == null ? void 0 : b[a]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${On("#fff", An(a))}, ${On("#fff", An(a))})`
        }
      },
      ...m.style
    }
  });
});
process.env.NODE_ENV !== "production" && (mo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: mt(zr, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: l.bool,
  /**
   * @ignore
   */
  style: l.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: l.oneOfType([l.oneOf(["elevation", "outlined"]), l.string])
});
function cl(e) {
  return Ve("MuiPopover", e);
}
yt("MuiPopover", ["root", "paper"]);
function _r(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Ir(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Dr(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Dt(e) {
  return typeof e == "function" ? e() : e;
}
const ul = (e) => {
  const {
    classes: t
  } = e;
  return pt({
    root: ["root"],
    paper: ["paper"]
  }, cl, t);
}, fl = ze(po, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), dl = ze(mo, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), ho = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = vt({
    props: t,
    name: "MuiPopover"
  }), {
    action: o,
    anchorEl: i,
    anchorOrigin: s = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: a,
    anchorReference: f = "anchorEl",
    children: d,
    className: m,
    container: p,
    elevation: h = 8,
    marginThreshold: b = 16,
    open: y,
    PaperProps: u = {},
    slots: O = {},
    slotProps: R = {},
    transformOrigin: F = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: x = zt,
    transitionDuration: E = "auto",
    TransitionProps: {
      onEntering: g,
      ...I
    } = {},
    disableScrollLock: M = !1,
    ...H
  } = r, W = (R == null ? void 0 : R.paper) ?? u, c = _.useRef(), S = {
    ...r,
    anchorOrigin: s,
    anchorReference: f,
    elevation: h,
    marginThreshold: b,
    externalPaperSlotProps: W,
    transformOrigin: F,
    TransitionComponent: x,
    transitionDuration: E,
    TransitionProps: I
  }, k = ul(S), L = _.useCallback(() => {
    if (f === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (a || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), a;
    const D = Dt(i), G = D && D.nodeType === 1 ? D : ke(c.current).body, w = G.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const oe = G.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && oe.top === 0 && oe.left === 0 && oe.right === 0 && oe.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: w.top + _r(w, s.vertical),
      left: w.left + Ir(w, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, a, f]), P = _.useCallback((D) => ({
    vertical: _r(D, F.vertical),
    horizontal: Ir(D, F.horizontal)
  }), [F.horizontal, F.vertical]), A = _.useCallback((D) => {
    const G = {
      width: D.offsetWidth,
      height: D.offsetHeight
    }, w = P(G);
    if (f === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Dr(w)
      };
    const oe = L();
    let ge = oe.top - w.vertical, Te = oe.left - w.horizontal;
    const Et = ge + G.height, xt = Te + G.width, St = et(Dt(i)), Ce = St.innerHeight - b, Tt = St.innerWidth - b;
    if (b !== null && ge < b) {
      const be = ge - b;
      ge -= be, w.vertical += be;
    } else if (b !== null && Et > Ce) {
      const be = Et - Ce;
      ge -= be, w.vertical += be;
    }
    if (process.env.NODE_ENV !== "production" && G.height > Ce && G.height && Ce && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${G.height - Ce}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), b !== null && Te < b) {
      const be = Te - b;
      Te -= be, w.horizontal += be;
    } else if (xt > Tt) {
      const be = xt - Tt;
      Te -= be, w.horizontal += be;
    }
    return {
      top: `${Math.round(ge)}px`,
      left: `${Math.round(Te)}px`,
      transformOrigin: Dr(w)
    };
  }, [i, f, L, P, b]), [N, U] = _.useState(y), ee = _.useCallback(() => {
    const D = c.current;
    if (!D)
      return;
    const G = A(D);
    G.top !== null && D.style.setProperty("top", G.top), G.left !== null && (D.style.left = G.left), D.style.transformOrigin = G.transformOrigin, U(!0);
  }, [A]);
  _.useEffect(() => (M && window.addEventListener("scroll", ee), () => window.removeEventListener("scroll", ee)), [i, M, ee]);
  const te = (D, G) => {
    g && g(D, G), ee();
  }, T = () => {
    U(!1);
  };
  _.useEffect(() => {
    y && ee();
  }), _.useImperativeHandle(o, () => y ? {
    updatePosition: () => {
      ee();
    }
  } : null, [y, ee]), _.useEffect(() => {
    if (!y)
      return;
    const D = $s(() => {
      ee();
    }), G = et(i);
    return G.addEventListener("resize", D), () => {
      D.clear(), G.removeEventListener("resize", D);
    };
  }, [i, y, ee]);
  let $ = E;
  E === "auto" && !x.muiSupportAuto && ($ = void 0);
  const j = p || (i ? ke(Dt(i)).body : void 0), V = {
    slots: O,
    slotProps: {
      ...R,
      paper: W
    }
  }, [B, q] = tt("paper", {
    elementType: dl,
    externalForwardedProps: V,
    additionalProps: {
      elevation: h,
      className: Ae(k.paper, W == null ? void 0 : W.className),
      style: N ? W.style : {
        ...W.style,
        opacity: 0
      }
    },
    ownerState: S
  }), [z, {
    slotProps: Y,
    ...K
  }] = tt("root", {
    elementType: fl,
    externalForwardedProps: V,
    additionalProps: {
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: j,
      open: y
    },
    ownerState: S,
    className: Ae(k.root, m)
  }), X = Be(c, q.ref);
  return /* @__PURE__ */ C(z, {
    ...K,
    ...!Jo(z) && {
      slotProps: Y,
      disableScrollLock: M
    },
    ...H,
    ref: n,
    children: /* @__PURE__ */ C(x, {
      appear: !0,
      in: y,
      onEntering: te,
      onExited: T,
      timeout: $,
      ...I,
      children: /* @__PURE__ */ C(B, {
        ...q,
        ref: X,
        children: d
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (ho.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Ho,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: mt(l.oneOfType([Bt, l.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Dt(e.anchorEl);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: l.shape({
    horizontal: l.oneOfType([l.oneOf(["center", "left", "right"]), l.number]).isRequired,
    vertical: l.oneOfType([l.oneOf(["bottom", "center", "top"]), l.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: l.shape({
    left: l.number.isRequired,
    top: l.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: l.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slotProps.root.slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slotProps.root.slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: l.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.root.slotProps.backdrop` instead.
   */
  BackdropProps: l.object,
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: l.oneOfType([Bt, l.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: l.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: zr,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: l.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: l.func,
  /**
   * If `true`, the component is shown.
   */
  open: l.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: l.shape({
    component: Qo
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: l.shape({
    paper: l.oneOfType([l.func, l.object]),
    root: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: l.shape({
    paper: l.elementType,
    root: l.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: l.shape({
    horizontal: l.oneOfType([l.oneOf(["center", "left", "right"]), l.number]).isRequired,
    vertical: l.oneOfType([l.oneOf(["bottom", "center", "top"]), l.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: l.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: l.oneOfType([l.oneOf(["auto"]), l.number, l.shape({
    appear: l.number,
    enter: l.number,
    exit: l.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: l.object
});
const pl = Un(/* @__PURE__ */ C("path", {
  d: "M3 17v2h6v-2zM3 5v2h10V5zm10 16v-2h8v-2h-8v-2h-2v6zM7 9v2H3v2h4v2h2V9zm14 4v-2H11v2zm-6-4h2V7h4V5h-4V3h-2z"
}), "Tune"), En = {
  flex: { xs: "1 1 100%", sm: 1 },
  minWidth: 0
}, ml = ({
  columnsOperator: e,
  handleApplyFilters: t,
  defaultOperators: n,
  defaultValues: r,
  defaultOperator: o,
  sx: i = {}
}) => {
  const {
    root: s,
    header: a,
    headerLabel: f,
    globalOperatorSelect: d,
    rowsStack: m,
    row: p,
    columnSelect: h,
    operatorSelect: b,
    valueInput: y,
    deleteButton: u,
    deleteTooltip: O,
    actions: R,
    addButton: F,
    applyButton: x
  } = i, [E, g] = ye([
    { column: "", operator: "", value: "" }
  ]), [I, M] = ye("AND"), H = () => {
    g((S) => [...S, { column: "", operator: "", value: "" }]);
  }, W = (S) => {
    g((k) => k.filter((L, P) => P !== S));
  }, c = (S, k, L) => {
    g(
      (P) => P.map(
        (A, N) => N === S ? { ...A, [k]: L } : A
      )
    );
  };
  return Xe(() => {
    r && Array.isArray(r) && r.length && g(r);
  }, [r]), Xe(() => {
    M(o);
  }, [o]), /* @__PURE__ */ ae(
    pe,
    {
      sx: {
        // Fill whatever width the parent popover paper gives us. The paper
        // itself enforces sensible mobile/desktop caps in index.jsx, so we
        // don't add a second cap here — that's what was previously squeezing
        // the fields to ~200px each on wide screens.
        width: "100%",
        padding: { xs: 1, sm: 2 },
        boxSizing: "border-box",
        ...s
      },
      children: [
        /* @__PURE__ */ ae(
          pe,
          {
            sx: {
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1,
              mb: 2,
              ...a
            },
            children: [
              /* @__PURE__ */ C(de, { variant: "body1", sx: f, children: "Combine queries with:" }),
              /* @__PURE__ */ C(
                an,
                {
                  size: "small",
                  value: I,
                  onChange: (S) => M(S.target.value),
                  sx: { minWidth: 120, ...d },
                  children: n.map((S) => /* @__PURE__ */ C(rt, { value: S, children: S }, S))
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ C(To, { spacing: 1.5, sx: m, children: E.map((S, k) => {
          var L;
          return /* @__PURE__ */ ae(
            pe,
            {
              sx: {
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 1, sm: 1.5 },
                alignItems: { xs: "stretch", sm: "center" },
                py: 0.5,
                borderBottom: { xs: 1, sm: 0 },
                borderColor: "divider",
                ...p
              },
              children: [
                /* @__PURE__ */ ae(
                  an,
                  {
                    size: "small",
                    value: S.column,
                    onChange: (P) => c(k, "column", P.target.value),
                    displayEmpty: !0,
                    fullWidth: !0,
                    sx: { ...En, ...h },
                    children: [
                      /* @__PURE__ */ C(rt, { value: "", disabled: !0, children: "Select Column" }),
                      Object.keys(e).map((P) => /* @__PURE__ */ C(rt, { value: P, children: P }, P))
                    ]
                  }
                ),
                /* @__PURE__ */ ae(
                  an,
                  {
                    size: "small",
                    value: S.operator,
                    onChange: (P) => c(k, "operator", P.target.value),
                    displayEmpty: !0,
                    disabled: !S.column,
                    fullWidth: !0,
                    sx: { ...En, ...b },
                    children: [
                      /* @__PURE__ */ C(rt, { value: "", disabled: !0, children: "Select Operator" }),
                      S.column && ((L = e[S.column]) == null ? void 0 : L.operators.map((P) => /* @__PURE__ */ C(rt, { value: P, children: P }, P)))
                    ]
                  }
                ),
                /* @__PURE__ */ C(
                  Co,
                  {
                    size: "small",
                    value: S.value,
                    onChange: (P) => c(k, "value", P.target.value),
                    placeholder: "Enter value",
                    fullWidth: !0,
                    sx: { ...En, ...y }
                  }
                ),
                /* @__PURE__ */ C(xn, { title: "Delete Query", sx: O, children: /* @__PURE__ */ C(
                  Yt,
                  {
                    onClick: () => W(k),
                    color: "error",
                    size: "small",
                    sx: {
                      // On mobile, anchor the trash icon to the right of the
                      // stacked column so it doesn't take a full row of its own.
                      alignSelf: { xs: "flex-end", sm: "center" },
                      flex: { sm: "0 0 auto" },
                      ...u
                    },
                    children: /* @__PURE__ */ C(Do, {})
                  }
                ) })
              ]
            },
            k
          );
        }) }),
        /* @__PURE__ */ ae(
          pe,
          {
            sx: {
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              mt: 2.5,
              ...R
            },
            children: [
              /* @__PURE__ */ C(
                Mt,
                {
                  startIcon: /* @__PURE__ */ C(Mo, {}),
                  onClick: H,
                  sx: { flex: { xs: "1 1 100%", sm: "0 0 auto" }, ...F },
                  children: "Add Query"
                }
              ),
              /* @__PURE__ */ C(
                Mt,
                {
                  variant: "contained",
                  color: "primary",
                  onClick: () => t(I, E),
                  sx: { flex: { xs: "1 1 100%", sm: "0 0 auto" }, ...x },
                  children: "Apply Filters"
                }
              )
            ]
          }
        )
      ]
    }
  );
}, hl = Un(/* @__PURE__ */ C("path", {
  d: "M11 18h2v-2h-2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4"
}), "HelpOutline"), gl = Un(/* @__PURE__ */ C("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
function yl(e, t, n) {
  const r = [], o = e.split(/\s+AND\s+|\s+OR\s+/i), i = [...t].sort((s, a) => a.length - s.length);
  return o.forEach((s) => {
    const a = s.trim();
    if (!a) return;
    let f = n.find((p) => a.startsWith(p + " ")), d, m;
    if (f)
      d = i.find(
        (p) => a.slice(f.length).trim().startsWith(p)
      ), d && (m = a.slice(f.length).trim().slice(d.length).trim());
    else {
      const p = a.indexOf(" ");
      if (p === -1) return;
      f = a.slice(0, p);
      const h = a.slice(p + 1).trim();
      d = i.find((b) => h.startsWith(b)), d && (m = h.slice(d.length).trim());
    }
    f && d && m !== void 0 && r.push({ column: f, operator: d, value: m });
  }), r;
}
function bl(e, t) {
  return e.map((n) => `${n.column} ${n.operator} ${n.value}`).join(` ${t} `);
}
const vl = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function El(e, t) {
  if (e = (e || "").trim(), !e)
    return { isValid: !0, error: null };
  if (!t.test(e))
    return e.split(/\s+/).length < 3 ? {
      isValid: !1,
      error: 'Incomplete query. Expected: <column> <operator> <value> (e.g. name == "John").'
    } : /\b(AND|OR)\s*$/i.test(e) ? {
      isValid: !1,
      error: "Query ends with AND/OR. Add another `<column> <operator> <value>` clause after it."
    } : (e.match(/"/g) || []).length % 2 !== 0 ? {
      isValid: !1,
      error: 'Unclosed quoted value. Make sure every `"` has a matching `"`.'
    } : {
      isValid: !1,
      error: "Invalid query syntax. Expected format: `<column> <operator> <value> [AND|OR <column> <operator> <value>]`."
    };
  const n = e.match(/\b(AND|OR)\b/gi);
  return n && new Set(n).size > 1 ? {
    isValid: !1,
    error: "Cannot mix AND and OR in the same query. Use only one logical operator throughout."
  } : { isValid: !0, error: null };
}
function xl(e, t, n, r) {
  if (!e) return [];
  const o = /"[^"]*"?|\s+|\S+/g, i = e.match(o) || [], s = t || [], a = n || [], f = (r || []).map((p) => p.toUpperCase()), d = [];
  let m = "column";
  for (const p of i) {
    if (/^\s+$/.test(p)) {
      d.push({ type: "whitespace", text: p });
      continue;
    }
    let h;
    m === "column" ? (h = s.includes(p) ? "column" : "customColumn", m = "operator") : m === "operator" ? (h = a.includes(p) ? "operator" : "unknownOperator", m = "value") : m === "value" ? (h = "value", m = "logical") : f.includes(p.toUpperCase()) ? (h = "logical", m = "column") : h = "value", d.push({ type: h, text: p });
  }
  return d;
}
const Sl = {
  column: "#1976d2",
  // blue   – known column
  customColumn: "#0288d1",
  // light blue – custom/unknown column
  operator: "#d32f2f",
  // red    – related operator
  unknownOperator: "#9e9e9e",
  // grey   – not (yet) a valid operator
  logical: "#7b1fa2",
  // purple – AND / OR
  value: "inherit"
}, Mr = {
  column: 400,
  customColumn: 400,
  operator: 600,
  unknownOperator: 400,
  logical: 600,
  value: 400
}, Tl = 'Type a query like: column operator value — e.g. name == "John"', Cl = ({ open: e, onClose: t, sx: n = {} }) => {
  const {
    dialog: r,
    title: o,
    closeButton: i,
    content: s,
    sectionTitle: a,
    body: f,
    codeBlock: d,
    exampleBlock: m,
    exampleLabel: p,
    list: h,
    listItem: b,
    chip: y,
    divider: u,
    actions: O,
    gotItButton: R,
    colorLegendItem: F,
    colorSwatch: x,
    warningText: E
  } = n;
  return /* @__PURE__ */ ae(
    ko,
    {
      open: e,
      onClose: t,
      maxWidth: "md",
      fullWidth: !0,
      scroll: "paper",
      sx: r,
      children: [
        /* @__PURE__ */ ae(No, { sx: { pr: 6, ...o }, children: [
          "How to Use the Query Search",
          /* @__PURE__ */ C(
            Yt,
            {
              onClick: t,
              size: "small",
              sx: { position: "absolute", right: 12, top: 12, ...i },
              "aria-label": "close",
              children: /* @__PURE__ */ C(gl, { fontSize: "small" })
            }
          )
        ] }),
        /* @__PURE__ */ ae(_o, { dividers: !0, sx: s, children: [
          /* @__PURE__ */ C(de, { variant: "h6", gutterBottom: !0, sx: a, children: "Overview" }),
          /* @__PURE__ */ ae(de, { variant: "body2", paragraph: !0, sx: f, children: [
            "The query search box lets you filter data using a simple, readable query language. Type your conditions directly into the search field and press ",
            /* @__PURE__ */ C("strong", { children: "Apply" }),
            " to run the query. Suggestions will appear as you type to guide you through valid columns, operators, and logical connectors."
          ] }),
          /* @__PURE__ */ C(ot, { sx: { my: 2, ...u } }),
          /* @__PURE__ */ C(de, { variant: "h6", gutterBottom: !0, sx: a, children: "Basic Syntax" }),
          /* @__PURE__ */ C(de, { variant: "body2", paragraph: !0, sx: f, children: "Every condition follows this pattern:" }),
          /* @__PURE__ */ C(
            pe,
            {
              component: "pre",
              sx: {
                bgcolor: "grey.100",
                borderLeft: 4,
                borderColor: "primary.main",
                px: 2,
                py: 1.5,
                borderRadius: 1,
                overflowX: "auto",
                mb: 2,
                fontFamily: "monospace",
                fontSize: "0.875rem",
                ...d
              },
              children: "column  operator  value"
            }
          ),
          /* @__PURE__ */ C(de, { variant: "body2", paragraph: !0, sx: f, children: "Each part is separated by a single space:" }),
          /* @__PURE__ */ ae(pe, { component: "ul", sx: { mt: 0, mb: 2, pl: 3, ...h }, children: [
            /* @__PURE__ */ ae(
              de,
              {
                component: "li",
                variant: "body2",
                gutterBottom: !0,
                sx: b,
                children: [
                  /* @__PURE__ */ C("strong", { children: "column" }),
                  " — the field you want to filter on (e.g.",
                  " ",
                  /* @__PURE__ */ C(
                    We,
                    {
                      label: "name",
                      size: "small",
                      sx: { fontFamily: "monospace", ...y }
                    }
                  ),
                  ",",
                  " ",
                  /* @__PURE__ */ C(
                    We,
                    {
                      label: "duration",
                      size: "small",
                      sx: { fontFamily: "monospace", ...y }
                    }
                  ),
                  ")."
                ]
              }
            ),
            /* @__PURE__ */ ae(
              de,
              {
                component: "li",
                variant: "body2",
                gutterBottom: !0,
                sx: b,
                children: [
                  /* @__PURE__ */ C("strong", { children: "operator" }),
                  " — the comparison to apply (e.g.",
                  " ",
                  /* @__PURE__ */ C(
                    We,
                    {
                      label: "==",
                      size: "small",
                      sx: { fontFamily: "monospace", ...y }
                    }
                  ),
                  ",",
                  " ",
                  /* @__PURE__ */ C(
                    We,
                    {
                      label: "contains",
                      size: "small",
                      sx: { fontFamily: "monospace", ...y }
                    }
                  ),
                  ",",
                  " ",
                  /* @__PURE__ */ C(
                    We,
                    {
                      label: ">",
                      size: "small",
                      sx: { fontFamily: "monospace", ...y }
                    }
                  ),
                  ")."
                ]
              }
            ),
            /* @__PURE__ */ ae(
              de,
              {
                component: "li",
                variant: "body2",
                gutterBottom: !0,
                sx: b,
                children: [
                  /* @__PURE__ */ C("strong", { children: "value" }),
                  " — what you are comparing against. Wrap values that contain spaces in double quotes:",
                  " ",
                  /* @__PURE__ */ C(
                    We,
                    {
                      label: '"John Doe"',
                      size: "small",
                      sx: { fontFamily: "monospace", ...y }
                    }
                  ),
                  "."
                ]
              }
            )
          ] }),
          /* @__PURE__ */ C(ot, { sx: { my: 2, ...u } }),
          /* @__PURE__ */ C(de, { variant: "h6", gutterBottom: !0, sx: a, children: "Combining Conditions" }),
          /* @__PURE__ */ ae(de, { variant: "body2", paragraph: !0, sx: f, children: [
            "Use ",
            /* @__PURE__ */ C("strong", { children: "AND" }),
            " or ",
            /* @__PURE__ */ C("strong", { children: "OR" }),
            " (uppercase) to join multiple conditions:"
          ] }),
          /* @__PURE__ */ C(
            pe,
            {
              component: "pre",
              sx: {
                bgcolor: "grey.100",
                borderLeft: 4,
                borderColor: "primary.main",
                px: 2,
                py: 1.5,
                borderRadius: 1,
                overflowX: "auto",
                mb: 2,
                fontFamily: "monospace",
                fontSize: "0.875rem",
                ...d
              },
              children: `condition1 AND condition2 AND condition3
condition1 OR  condition2`
            }
          ),
          /* @__PURE__ */ ae(
            de,
            {
              variant: "body2",
              sx: { color: "error.main", ...E },
              paragraph: !0,
              children: [
                "⚠ You cannot mix ",
                /* @__PURE__ */ C("strong", { children: "AND" }),
                " and ",
                /* @__PURE__ */ C("strong", { children: "OR" }),
                " in the same query. Pick one logical operator and use it consistently."
              ]
            }
          ),
          /* @__PURE__ */ C(ot, { sx: { my: 2, ...u } }),
          /* @__PURE__ */ C(de, { variant: "h6", gutterBottom: !0, sx: a, children: "Examples" }),
          [
            {
              label: "Exact match",
              code: 'name == "Alice"'
            },
            {
              label: "Contains substring",
              code: 'name contains "ali"'
            },
            {
              label: "Numeric comparison",
              code: "duration > 30"
            },
            {
              label: "Multiple conditions (AND)",
              code: 'name == "Alice" AND duration > 30'
            },
            {
              label: "Multiple conditions (OR)",
              code: "status == active OR status == pending"
            },
            {
              label: "Date range",
              code: "created_at after 2024-01-01 AND created_at before 2024-12-31"
            }
          ].map(({ label: g, code: I }) => /* @__PURE__ */ ae(pe, { mb: 1.5, children: [
            /* @__PURE__ */ C(
              de,
              {
                variant: "caption",
                sx: {
                  color: "text.secondary",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                  ...p
                },
                children: g
              }
            ),
            /* @__PURE__ */ C(
              pe,
              {
                component: "pre",
                sx: {
                  bgcolor: "grey.50",
                  border: 1,
                  borderColor: "divider",
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                  overflowX: "auto",
                  mt: 0.5,
                  fontFamily: "monospace",
                  fontSize: "0.875rem",
                  ...m
                },
                children: I
              }
            )
          ] }, g)),
          /* @__PURE__ */ C(ot, { sx: { my: 2, ...u } }),
          /* @__PURE__ */ C(de, { variant: "h6", gutterBottom: !0, sx: a, children: "Tips" }),
          /* @__PURE__ */ C(pe, { component: "ul", sx: { mt: 0, mb: 1, pl: 3, ...h }, children: [
            "Start typing a column name and select it from the suggestion list.",
            "After picking a column, the suggestion list will show valid operators for that column.",
            "After entering a value, AND / OR will appear in the suggestion list.",
            'Wrap multi-word values in double quotes — e.g. "John Doe".',
            "Syntax errors are highlighted in the text box. Hover the input to see the specific error.",
            "You can also build queries using the advanced filter panel (click the ⊟ icon)."
          ].map((g) => /* @__PURE__ */ C(
            de,
            {
              component: "li",
              variant: "body2",
              gutterBottom: !0,
              sx: b,
              children: g
            },
            g
          )) }),
          /* @__PURE__ */ C(ot, { sx: { my: 2, ...u } }),
          /* @__PURE__ */ C(de, { variant: "h6", gutterBottom: !0, sx: a, children: "Syntax Highlighting" }),
          /* @__PURE__ */ C(de, { variant: "body2", paragraph: !0, sx: f, children: "As you type, each part of the query is colorized to help you spot mistakes at a glance:" }),
          /* @__PURE__ */ C(pe, { component: "ul", sx: { mt: 0, mb: 1, pl: 3, ...h }, children: [
            { color: "#1976d2", label: "Blue", desc: "Known column" },
            {
              color: "#0288d1",
              label: "Light blue",
              desc: "Custom / unknown column"
            },
            { color: "#d32f2f", label: "Red", desc: "Valid operator" },
            {
              color: "#9e9e9e",
              label: "Grey",
              desc: "Unrecognized operator (still typing)"
            },
            {
              color: "#7b1fa2",
              label: "Purple",
              desc: "Logical connector — AND / OR"
            },
            { color: "inherit", label: "Default", desc: "Value" }
          ].map(({ color: g, label: I, desc: M }) => /* @__PURE__ */ ae(
            de,
            {
              component: "li",
              variant: "body2",
              gutterBottom: !0,
              sx: F,
              children: [
                /* @__PURE__ */ C(
                  pe,
                  {
                    component: "span",
                    sx: {
                      display: "inline-block",
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      bgcolor: g === "inherit" ? "text.primary" : g,
                      mr: 1,
                      verticalAlign: "middle",
                      ...x
                    }
                  }
                ),
                /* @__PURE__ */ C(
                  "strong",
                  {
                    style: { color: g === "inherit" ? void 0 : g },
                    children: I
                  }
                ),
                " ",
                "— ",
                M
              ]
            },
            I
          )) })
        ] }),
        /* @__PURE__ */ C(Io, { sx: O, children: /* @__PURE__ */ C(
          Mt,
          {
            onClick: t,
            variant: "contained",
            disableElevation: !0,
            sx: R,
            children: "Got it"
          }
        ) })
      ]
    }
  );
}, wl = ({
  columnsOperator: e,
  onSuggestionClick: t,
  defaultOperators: n,
  onApplyClicked: r,
  defaultValues: o,
  defaultOperator: i,
  relatedOperators: s,
  placeholder: a = "",
  endAdornment: f,
  sx: d = {},
  ...m
}) => {
  const {
    root: p,
    inputRow: h,
    inputWrapper: b,
    highlightOverlay: y,
    input: u,
    applyButton: O,
    helpButton: R,
    helpTooltip: F,
    adornmentBox: x,
    errorTooltip: E,
    hintTooltip: g,
    popper: I,
    suggestionsBox: M,
    suggestionsList: H,
    suggestionItem: W,
    suggestionText: c,
    tokenColors: S,
    tokenFontWeights: k,
    helpModal: L
  } = d, P = _t(
    () => ({ ...Sl, ...S || {} }),
    [S]
  ), A = _t(
    () => ({
      ...Mr,
      ...k || {}
    }),
    [k]
  ), [N, U] = ye(null), [ee, te] = ye([]), [T, $] = ye([]), [j, V] = ye(""), [B, q] = ye(!0), [z, Y] = ye(null), [K, X] = ye(!1), [D, G] = ye(0), w = sn(), oe = sn(null), ge = sn(null);
  Xe(() => {
    if (o && Array.isArray(o) && o.length && i) {
      const Q = bl(o, i);
      V(Q);
    }
  }, [i, o]), Xe(() => {
    const Q = Object.keys(e), fe = Array.from(
      /* @__PURE__ */ new Set([
        ...Q.flatMap((bo) => {
          var Hn;
          return ((Hn = e[bo]) == null ? void 0 : Hn.operators) || [];
        }),
        ...s || []
      ])
    ), he = j.trim().split(/\s+/).filter(Boolean), nt = he[he.length - 1] || "", Ct = he[he.length - 2] || "", go = !Ct || n.includes(Ct);
    let Ne;
    !j.trim() || n.includes(nt) ? Ne = Q : Q.includes(nt) ? Ne = e[nt].operators : go ? Ne = fe : (Q.includes(Ct) && e[Ct].operators.includes(nt) || fe.includes(nt), Ne = n), te(Ne), $(Ne);
    const qn = fe.map(vl).join("|"), yo = new RegExp(
      `^(\\S+)\\s+(${qn})\\s+(".+?"|\\S+)(?:\\s+(AND|OR)\\s+(\\S+)\\s+(${qn})\\s+(".+?"|\\S+))*$`,
      "i"
    ), Yn = El(j, yo);
    q(Yn.isValid), Y(Yn.error);
  }, [j, e, n, s]), Xe(() => {
    const Q = ge.current;
    if (!Q || typeof ResizeObserver > "u") return;
    const fe = () => G(Q.offsetWidth || 0);
    fe();
    const he = new ResizeObserver(fe);
    return he.observe(Q), () => he.disconnect();
  }, [f, j, B]);
  const Te = (Q) => {
    const fe = Q.target.value;
    V(fe), $(
      ee.filter(
        (he) => he.toLowerCase().includes(fe.toLowerCase())
      )
    ), U(w.current);
  }, Et = (Q) => {
    oe.current && (oe.current.scrollLeft = Q.target.scrollLeft);
  }, xt = _t(
    () => xl(
      j,
      Object.keys(e || {}),
      Array.from(
        /* @__PURE__ */ new Set([
          ...Object.values(e || {}).flatMap(
            (Q) => (Q == null ? void 0 : Q.operators) || []
          ),
          ...s || []
        ])
      ),
      n || []
    ),
    [j, e, s, n]
  ), St = (Q) => {
    V((fe) => {
      const he = fe.trimEnd();
      return he ? `${he} ${Q} ` : `${Q} `;
    }), t == null || t(Q), setTimeout(() => {
      const fe = w.current;
      if (fe) {
        const he = fe.value.length;
        fe.setSelectionRange(he, he), fe.focus();
      }
    }, 0);
  }, Ce = !!j && !B && !!z, Tt = Ce ? z : j ? "" : Tl, be = Ce ? void 0 : j ? !1 : void 0;
  return /* @__PURE__ */ ae(pe, { width: "100%", sx: p, children: [
    /* @__PURE__ */ C(pe, { display: "flex", sx: h, children: /* @__PURE__ */ ae(pe, { sx: { position: "relative", flex: 1, minWidth: 0, ...b }, children: [
      /* @__PURE__ */ C(
        pe,
        {
          ref: oe,
          "aria-hidden": "true",
          sx: {
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            // Stop short of the endAdornment block (help icon + Apply button
            // + any caller-provided adornment) so colored tokens never paint
            // behind the buttons when the query overflows horizontally.
            right: `${D}px`,
            padding: "16.5px 14px",
            // matches default OutlinedInput padding
            fontFamily: "inherit",
            fontSize: "1rem",
            lineHeight: "1.4375em",
            // MUI OutlinedInput default
            whiteSpace: "pre",
            // Must be scrollable so `scrollLeft` syncs with the real input,
            // but the scrollbar should stay invisible to users.
            overflow: "auto",
            scrollbarWidth: "none",
            // Firefox
            "&::-webkit-scrollbar": { display: "none" },
            // Chrome / Safari
            pointerEvents: "none",
            color: "transparent",
            borderRadius: "4px",
            ...y
          },
          children: xt.map(
            (Q, fe) => Q.type === "whitespace" ? /* @__PURE__ */ C("span", { children: Q.text }, fe) : /* @__PURE__ */ C(
              "span",
              {
                style: {
                  color: P[Q.type] || "inherit",
                  fontWeight: A[Q.type] ?? Mr[Q.type] ?? 400
                },
                children: Q.text
              },
              fe
            )
          )
        }
      ),
      /* @__PURE__ */ C(
        xn,
        {
          title: Tt,
          open: be,
          placement: "top-start",
          arrow: !0,
          componentsProps: {
            tooltip: {
              sx: Ce ? {
                bgcolor: "error.main",
                color: "error.contrastText",
                fontSize: "0.75rem",
                maxWidth: 360,
                ...E
              } : {
                bgcolor: "info.dark",
                color: "common.white",
                fontSize: "0.75rem",
                maxWidth: 360,
                ...g
              }
            },
            arrow: {
              sx: Ce ? { color: "error.main", ...(E == null ? void 0 : E.bgcolor) && { color: E.bgcolor } } : { color: "info.dark", ...(g == null ? void 0 : g.bgcolor) && { color: g.bgcolor } }
            }
          },
          children: /* @__PURE__ */ C(
            wo,
            {
              ...m,
              placeholder: a,
              sx: {
                width: "100%",
                backgroundColor: "transparent",
                "& .MuiOutlinedInput-input": {
                  // Make the real text invisible so only the colored mirror
                  // shows through. `caret-color` must be a concrete color (not
                  // `currentColor`, which would resolve to `transparent` here
                  // and hide the cursor). We pick the theme's primary text color
                  // so the caret stays visible in both light and dark themes.
                  color: "transparent",
                  caretColor: (Q) => Q.palette.text.primary,
                  "&::placeholder": {
                    color: "text.secondary",
                    opacity: 0.7
                  }
                },
                // Keep the trailing adornment (icons + Apply button) flush to
                // the right edge of the input without extra horizontal padding.
                "& .MuiInputAdornment-positionEnd": {
                  marginLeft: 0
                },
                ...u
              },
              inputRef: w,
              inputProps: { onScroll: Et },
              value: j,
              onChange: Te,
              onFocus: () => U(w.current),
              onBlur: () => setTimeout(() => U(null), 100),
              error: j ? !B : !1,
              endAdornment: /* @__PURE__ */ C(Oo, { position: "end", children: /* @__PURE__ */ ae(
                pe,
                {
                  ref: ge,
                  sx: {
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    ...x
                  },
                  children: [
                    /* @__PURE__ */ C(
                      xn,
                      {
                        title: "Query syntax help",
                        placement: "top",
                        sx: F,
                        children: /* @__PURE__ */ C(
                          Yt,
                          {
                            onClick: () => X(!0),
                            "aria-label": "Query syntax help",
                            size: "small",
                            edge: f ? !1 : "end",
                            onMouseDown: (Q) => Q.preventDefault(),
                            sx: R,
                            children: /* @__PURE__ */ C(hl, { fontSize: "small" })
                          }
                        )
                      }
                    ),
                    f,
                    /* @__PURE__ */ C(
                      Mt,
                      {
                        disabled: !j || !B,
                        onClick: () => r(j),
                        onMouseDown: (Q) => Q.preventDefault(),
                        size: "small",
                        sx: O,
                        children: "Apply"
                      }
                    )
                  ]
                }
              ) })
            }
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ C(
      Ro,
      {
        open: !!N,
        anchorEl: N,
        placement: "bottom-start",
        sx: { zIndex: 1300, ...I },
        children: /* @__PURE__ */ C(
          pe,
          {
            sx: {
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              width: "300px",
              zIndex: 1300,
              ...M
            },
            children: /* @__PURE__ */ C(Po, { dense: !0, sx: H, children: T.map((Q, fe) => /* @__PURE__ */ C(Ao, { disablePadding: !0, children: /* @__PURE__ */ C(
              $o,
              {
                onMouseDown: (he) => he.preventDefault(),
                onClick: () => St(Q),
                sx: W,
                children: /* @__PURE__ */ C(de, { variant: "body2", sx: c, children: Q })
              }
            ) }, fe)) })
          }
        )
      }
    ),
    /* @__PURE__ */ C(
      Cl,
      {
        open: K,
        onClose: () => X(!1),
        sx: L
      }
    )
  ] });
};
function Il({
  columnsOperator: e = {},
  defaultOperators: t = [],
  relatedOperators: n = [],
  handleApply: r,
  placeholder: o = "",
  sx: i = {}
}) {
  const {
    root: s,
    textBoxContainer: a,
    textBox: f,
    iconButton: d,
    popover: m,
    popoverPaper: p,
    popoverContent: h,
    title: b,
    queryForm: y
  } = i, [u, O] = ye(null), [R, F] = ye([]), [x, E] = ye("AND"), [g, I] = ye(
    e
  );
  Xe(() => {
    I(e);
  }, [e]);
  const M = _t(
    () => Array.from(
      /* @__PURE__ */ new Set([
        ...Object.values(e).flatMap(
          (P) => (P == null ? void 0 : P.operators) || []
        ),
        ...n || []
      ])
    ),
    [e, n]
  ), H = (P) => {
    O(P.currentTarget);
  }, W = () => {
    O(null);
  }, c = (P) => {
    const A = Object.keys(g), N = yl(P, M, A), U = {};
    N.forEach((te) => {
      te.column && !g[te.column] && !U[te.column] && (U[te.column] = { operators: M });
    }), Object.keys(U).length && I((te) => ({ ...te, ...U }));
    const ee = t.find((te) => P.includes(` ${te} `)) || null;
    F(N), r && r(N, ee);
  }, S = (P, A) => {
    E(P), F(A), r && r(A, P);
  }, k = !!u, L = k ? "simple-popover" : void 0;
  return /* @__PURE__ */ ae(pe, { sx: s, children: [
    /* @__PURE__ */ C(
      pe,
      {
        display: "flex",
        alignItems: "center",
        marginBottom: "16px",
        width: "100%",
        sx: a,
        children: /* @__PURE__ */ C(
          wl,
          {
            columnsOperator: g,
            defaultOperators: t,
            onApplyClicked: c,
            defaultValues: R,
            defaultOperator: x,
            relatedOperators: n,
            placeholder: o,
            sx: f,
            endAdornment: /* @__PURE__ */ C(
              Yt,
              {
                "aria-describedby": L,
                onClick: H,
                size: "small",
                onMouseDown: (P) => P.preventDefault(),
                sx: d,
                children: /* @__PURE__ */ C(pl, { fontSize: "small" })
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ C(
      ho,
      {
        id: L,
        open: k,
        anchorEl: u,
        onClose: W,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left"
        },
        slotProps: {
          paper: {
            sx: {
              // Mobile: hug the viewport with a 16px gutter on each side.
              // Tablet/desktop: ask for an explicit `width` (not just a cap)
              // so the paper actually expands to give the three row controls
              // (Column / Operator / Value) generous, equal space instead of
              // collapsing around its content.
              width: {
                xs: "calc(100vw - 32px)",
                sm: 720,
                md: 880,
                lg: 1040
              },
              maxWidth: "calc(100vw - 32px)",
              maxHeight: "calc(100vh - 96px)",
              overflowY: "auto",
              boxSizing: "border-box",
              ...p
            }
          }
        },
        sx: { ...m },
        children: /* @__PURE__ */ ae(pe, { sx: { padding: { xs: 1.5, sm: 2 }, ...h }, children: [
          /* @__PURE__ */ C(de, { variant: "h6", sx: b, children: "Query Builder" }),
          /* @__PURE__ */ C(
            ml,
            {
              columnsOperator: g,
              handleApplyFilters: S,
              defaultOperators: t,
              defaultValues: R,
              defaultOperator: x,
              sx: y
            }
          )
        ] })
      }
    )
  ] });
}
export {
  Il as default
};
