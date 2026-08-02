var Do = Object.defineProperty;
var Mo = (e, t, n) => t in e ? Do(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var _t = (e, t, n) => Mo(e, typeof t != "symbol" ? t + "" : t, n);
import { jsx as x, jsxs as re, Fragment as Bo } from "react/jsx-runtime";
import * as _ from "react";
import dt, { useState as Se, useEffect as gt, useMemo as tt, useRef as hn } from "react";
import Lo from "@emotion/styled";
import { ThemeContext as Fo } from "@emotion/react";
import { Box as le, Button as Wt, Radio as jo, Typography as ue, ToggleButtonGroup as Vo, ToggleButton as Zn, Tooltip as nt, IconButton as ze, Stack as zo, Select as er, MenuItem as It, TextField as Uo, OutlinedInput as Wo, InputAdornment as Go, Popper as Yo, List as qo, ListItem as Ho, ListItemButton as Ko, Dialog as Qo, DialogTitle as Xo, DialogContent as Jo, Divider as ut, Chip as qe, DialogActions as Zo } from "@mui/material";
import { Add as tr, Close as Yr } from "@mui/icons-material";
import * as ei from "react-dom";
import Dt from "react-dom";
function ti(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mt = { exports: {} }, Bt = { exports: {} }, te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nr;
function ni() {
  if (nr) return te;
  nr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
  function T(b) {
    if (typeof b == "object" && b !== null) {
      var $ = b.$$typeof;
      switch ($) {
        case t:
          switch (b = b.type, b) {
            case d:
            case f:
            case r:
            case i:
            case o:
            case p:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case a:
                case m:
                case y:
                case g:
                case s:
                  return b;
                default:
                  return $;
              }
          }
        case n:
          return $;
      }
    }
  }
  function S(b) {
    return T(b) === f;
  }
  return te.AsyncMode = d, te.ConcurrentMode = f, te.ContextConsumer = a, te.ContextProvider = s, te.Element = t, te.ForwardRef = m, te.Fragment = r, te.Lazy = y, te.Memo = g, te.Portal = n, te.Profiler = i, te.StrictMode = o, te.Suspense = p, te.isAsyncMode = function(b) {
    return S(b) || T(b) === d;
  }, te.isConcurrentMode = S, te.isContextConsumer = function(b) {
    return T(b) === a;
  }, te.isContextProvider = function(b) {
    return T(b) === s;
  }, te.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, te.isForwardRef = function(b) {
    return T(b) === m;
  }, te.isFragment = function(b) {
    return T(b) === r;
  }, te.isLazy = function(b) {
    return T(b) === y;
  }, te.isMemo = function(b) {
    return T(b) === g;
  }, te.isPortal = function(b) {
    return T(b) === n;
  }, te.isProfiler = function(b) {
    return T(b) === i;
  }, te.isStrictMode = function(b) {
    return T(b) === o;
  }, te.isSuspense = function(b) {
    return T(b) === p;
  }, te.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === f || b === i || b === o || b === p || b === h || typeof b == "object" && b !== null && (b.$$typeof === y || b.$$typeof === g || b.$$typeof === s || b.$$typeof === a || b.$$typeof === m || b.$$typeof === E || b.$$typeof === O || b.$$typeof === N || b.$$typeof === c);
  }, te.typeOf = T, te;
}
var ne = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rr;
function ri() {
  return rr || (rr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
    function T(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === r || w === f || w === i || w === o || w === p || w === h || typeof w == "object" && w !== null && (w.$$typeof === y || w.$$typeof === g || w.$$typeof === s || w.$$typeof === a || w.$$typeof === m || w.$$typeof === E || w.$$typeof === O || w.$$typeof === N || w.$$typeof === c);
    }
    function S(w) {
      if (typeof w == "object" && w !== null) {
        var ce = w.$$typeof;
        switch (ce) {
          case t:
            var ye = w.type;
            switch (ye) {
              case d:
              case f:
              case r:
              case i:
              case o:
              case p:
                return ye;
              default:
                var ge = ye && ye.$$typeof;
                switch (ge) {
                  case a:
                  case m:
                  case y:
                  case g:
                  case s:
                    return ge;
                  default:
                    return ce;
                }
            }
          case n:
            return ce;
        }
      }
    }
    var b = d, $ = f, M = a, H = s, G = t, u = m, A = r, I = y, z = g, F = n, R = i, k = o, Y = p, Z = !1;
    function he(w) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C(w) || S(w) === d;
    }
    function C(w) {
      return S(w) === f;
    }
    function P(w) {
      return S(w) === a;
    }
    function q(w) {
      return S(w) === s;
    }
    function j(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function B(w) {
      return S(w) === m;
    }
    function L(w) {
      return S(w) === r;
    }
    function V(w) {
      return S(w) === y;
    }
    function W(w) {
      return S(w) === g;
    }
    function X(w) {
      return S(w) === n;
    }
    function J(w) {
      return S(w) === i;
    }
    function D(w) {
      return S(w) === o;
    }
    function Q(w) {
      return S(w) === p;
    }
    ne.AsyncMode = b, ne.ConcurrentMode = $, ne.ContextConsumer = M, ne.ContextProvider = H, ne.Element = G, ne.ForwardRef = u, ne.Fragment = A, ne.Lazy = I, ne.Memo = z, ne.Portal = F, ne.Profiler = R, ne.StrictMode = k, ne.Suspense = Y, ne.isAsyncMode = he, ne.isConcurrentMode = C, ne.isContextConsumer = P, ne.isContextProvider = q, ne.isElement = j, ne.isForwardRef = B, ne.isFragment = L, ne.isLazy = V, ne.isMemo = W, ne.isPortal = X, ne.isProfiler = J, ne.isStrictMode = D, ne.isSuspense = Q, ne.isValidElementType = T, ne.typeOf = S;
  }()), ne;
}
var or;
function qr() {
  return or || (or = 1, process.env.NODE_ENV === "production" ? Bt.exports = ni() : Bt.exports = ri()), Bt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var gn, ir;
function oi() {
  if (ir) return gn;
  ir = 1;
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
      var d = Object.getOwnPropertyNames(s).map(function(m) {
        return s[m];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        f[m] = m;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return gn = o() ? Object.assign : function(i, s) {
    for (var a, d = r(i), f, m = 1; m < arguments.length; m++) {
      a = Object(arguments[m]);
      for (var p in a)
        t.call(a, p) && (d[p] = a[p]);
      if (e) {
        f = e(a);
        for (var h = 0; h < f.length; h++)
          n.call(a, f[h]) && (d[f[h]] = a[f[h]]);
      }
    }
    return d;
  }, gn;
}
var yn, sr;
function jn() {
  if (sr) return yn;
  sr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return yn = e, yn;
}
var bn, ar;
function Hr() {
  return ar || (ar = 1, bn = Function.call.bind(Object.prototype.hasOwnProperty)), bn;
}
var vn, lr;
function ii() {
  if (lr) return vn;
  lr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ jn(), n = {}, r = /* @__PURE__ */ Hr();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, a, d, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in i)
        if (r(i, m)) {
          var p;
          try {
            if (typeof i[m] != "function") {
              var h = Error(
                (d || "React class") + ": " + a + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            p = i[m](s, m, d, a, null, t);
          } catch (y) {
            p = y;
          }
          if (p && !(p instanceof Error) && e(
            (d || "React class") + ": type specification of " + a + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in n)) {
            n[p.message] = !0;
            var g = f ? f() : "";
            e(
              "Failed " + a + " type: " + p.message + (g ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, vn = o, vn;
}
var En, cr;
function si() {
  if (cr) return En;
  cr = 1;
  var e = qr(), t = oi(), n = /* @__PURE__ */ jn(), r = /* @__PURE__ */ Hr(), o = /* @__PURE__ */ ii(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(a) {
    var d = "Warning: " + a;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return En = function(a, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function p(C) {
      var P = C && (f && C[f] || C[m]);
      if (typeof P == "function")
        return P;
    }
    var h = "<<anonymous>>", g = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: N(),
      arrayOf: T,
      element: S(),
      elementType: b(),
      instanceOf: $,
      node: u(),
      objectOf: H,
      oneOf: M,
      oneOfType: G,
      shape: I,
      exact: z
    };
    function y(C, P) {
      return C === P ? C !== 0 || 1 / C === 1 / P : C !== C && P !== P;
    }
    function c(C, P) {
      this.message = C, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    c.prototype = Error.prototype;
    function E(C) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, q = 0;
      function j(L, V, W, X, J, D, Q) {
        if (X = X || h, D = D || W, Q !== n) {
          if (d) {
            var w = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw w.name = "Invariant Violation", w;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ce = X + ":" + W;
            !P[ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            q < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + D + "` prop on `" + X + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[ce] = !0, q++);
          }
        }
        return V[W] == null ? L ? V[W] === null ? new c("The " + J + " `" + D + "` is marked as required " + ("in `" + X + "`, but its value is `null`.")) : new c("The " + J + " `" + D + "` is marked as required in " + ("`" + X + "`, but its value is `undefined`.")) : null : C(V, W, X, J, D);
      }
      var B = j.bind(null, !1);
      return B.isRequired = j.bind(null, !0), B;
    }
    function O(C) {
      function P(q, j, B, L, V, W) {
        var X = q[j], J = k(X);
        if (J !== C) {
          var D = Y(X);
          return new c(
            "Invalid " + L + " `" + V + "` of type " + ("`" + D + "` supplied to `" + B + "`, expected ") + ("`" + C + "`."),
            { expectedType: C }
          );
        }
        return null;
      }
      return E(P);
    }
    function N() {
      return E(s);
    }
    function T(C) {
      function P(q, j, B, L, V) {
        if (typeof C != "function")
          return new c("Property `" + V + "` of component `" + B + "` has invalid PropType notation inside arrayOf.");
        var W = q[j];
        if (!Array.isArray(W)) {
          var X = k(W);
          return new c("Invalid " + L + " `" + V + "` of type " + ("`" + X + "` supplied to `" + B + "`, expected an array."));
        }
        for (var J = 0; J < W.length; J++) {
          var D = C(W, J, B, L, V + "[" + J + "]", n);
          if (D instanceof Error)
            return D;
        }
        return null;
      }
      return E(P);
    }
    function S() {
      function C(P, q, j, B, L) {
        var V = P[q];
        if (!a(V)) {
          var W = k(V);
          return new c("Invalid " + B + " `" + L + "` of type " + ("`" + W + "` supplied to `" + j + "`, expected a single ReactElement."));
        }
        return null;
      }
      return E(C);
    }
    function b() {
      function C(P, q, j, B, L) {
        var V = P[q];
        if (!e.isValidElementType(V)) {
          var W = k(V);
          return new c("Invalid " + B + " `" + L + "` of type " + ("`" + W + "` supplied to `" + j + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return E(C);
    }
    function $(C) {
      function P(q, j, B, L, V) {
        if (!(q[j] instanceof C)) {
          var W = C.name || h, X = he(q[j]);
          return new c("Invalid " + L + " `" + V + "` of type " + ("`" + X + "` supplied to `" + B + "`, expected ") + ("instance of `" + W + "`."));
        }
        return null;
      }
      return E(P);
    }
    function M(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function P(q, j, B, L, V) {
        for (var W = q[j], X = 0; X < C.length; X++)
          if (y(W, C[X]))
            return null;
        var J = JSON.stringify(C, function(Q, w) {
          var ce = Y(w);
          return ce === "symbol" ? String(w) : w;
        });
        return new c("Invalid " + L + " `" + V + "` of value `" + String(W) + "` " + ("supplied to `" + B + "`, expected one of " + J + "."));
      }
      return E(P);
    }
    function H(C) {
      function P(q, j, B, L, V) {
        if (typeof C != "function")
          return new c("Property `" + V + "` of component `" + B + "` has invalid PropType notation inside objectOf.");
        var W = q[j], X = k(W);
        if (X !== "object")
          return new c("Invalid " + L + " `" + V + "` of type " + ("`" + X + "` supplied to `" + B + "`, expected an object."));
        for (var J in W)
          if (r(W, J)) {
            var D = C(W, J, B, L, V + "." + J, n);
            if (D instanceof Error)
              return D;
          }
        return null;
      }
      return E(P);
    }
    function G(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var P = 0; P < C.length; P++) {
        var q = C[P];
        if (typeof q != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Z(q) + " at index " + P + "."
          ), s;
      }
      function j(B, L, V, W, X) {
        for (var J = [], D = 0; D < C.length; D++) {
          var Q = C[D], w = Q(B, L, V, W, X, n);
          if (w == null)
            return null;
          w.data && r(w.data, "expectedType") && J.push(w.data.expectedType);
        }
        var ce = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new c("Invalid " + W + " `" + X + "` supplied to " + ("`" + V + "`" + ce + "."));
      }
      return E(j);
    }
    function u() {
      function C(P, q, j, B, L) {
        return F(P[q]) ? null : new c("Invalid " + B + " `" + L + "` supplied to " + ("`" + j + "`, expected a ReactNode."));
      }
      return E(C);
    }
    function A(C, P, q, j, B) {
      return new c(
        (C || "React class") + ": " + P + " type `" + q + "." + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + B + "`."
      );
    }
    function I(C) {
      function P(q, j, B, L, V) {
        var W = q[j], X = k(W);
        if (X !== "object")
          return new c("Invalid " + L + " `" + V + "` of type `" + X + "` " + ("supplied to `" + B + "`, expected `object`."));
        for (var J in C) {
          var D = C[J];
          if (typeof D != "function")
            return A(B, L, V, J, Y(D));
          var Q = D(W, J, B, L, V + "." + J, n);
          if (Q)
            return Q;
        }
        return null;
      }
      return E(P);
    }
    function z(C) {
      function P(q, j, B, L, V) {
        var W = q[j], X = k(W);
        if (X !== "object")
          return new c("Invalid " + L + " `" + V + "` of type `" + X + "` " + ("supplied to `" + B + "`, expected `object`."));
        var J = t({}, q[j], C);
        for (var D in J) {
          var Q = C[D];
          if (r(C, D) && typeof Q != "function")
            return A(B, L, V, D, Y(Q));
          if (!Q)
            return new c(
              "Invalid " + L + " `" + V + "` key `" + D + "` supplied to `" + B + "`.\nBad object: " + JSON.stringify(q[j], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  ")
            );
          var w = Q(W, D, B, L, V + "." + D, n);
          if (w)
            return w;
        }
        return null;
      }
      return E(P);
    }
    function F(C) {
      switch (typeof C) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !C;
        case "object":
          if (Array.isArray(C))
            return C.every(F);
          if (C === null || a(C))
            return !0;
          var P = p(C);
          if (P) {
            var q = P.call(C), j;
            if (P !== C.entries) {
              for (; !(j = q.next()).done; )
                if (!F(j.value))
                  return !1;
            } else
              for (; !(j = q.next()).done; ) {
                var B = j.value;
                if (B && !F(B[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function R(C, P) {
      return C === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function k(C) {
      var P = typeof C;
      return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : R(P, C) ? "symbol" : P;
    }
    function Y(C) {
      if (typeof C > "u" || C === null)
        return "" + C;
      var P = k(C);
      if (P === "object") {
        if (C instanceof Date)
          return "date";
        if (C instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function Z(C) {
      var P = Y(C);
      switch (P) {
        case "array":
        case "object":
          return "an " + P;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + P;
        default:
          return P;
      }
    }
    function he(C) {
      return !C.constructor || !C.constructor.name ? h : C.constructor.name;
    }
    return g.checkPropTypes = o, g.resetWarningCache = o.resetWarningCache, g.PropTypes = g, g;
  }, En;
}
var xn, ur;
function ai() {
  if (ur) return xn;
  ur = 1;
  var e = /* @__PURE__ */ jn();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, xn = function() {
    function r(s, a, d, f, m, p) {
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
  }, xn;
}
var fr;
function li() {
  if (fr) return Mt.exports;
  if (fr = 1, process.env.NODE_ENV !== "production") {
    var e = qr(), t = !0;
    Mt.exports = /* @__PURE__ */ si()(e.isElement, t);
  } else
    Mt.exports = /* @__PURE__ */ ai()();
  return Mt.exports;
}
var ci = /* @__PURE__ */ li();
const l = /* @__PURE__ */ ti(ci);
function Kr(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Kr(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Pe() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Kr(e)) && (r && (r += " "), r += t);
  return r;
}
function Et(e, t, n = void 0) {
  const r = {};
  for (const o in e) {
    const i = e[o];
    let s = "", a = !0;
    for (let d = 0; d < i.length; d += 1) {
      const f = i[d];
      f && (s += (a === !0 ? "" : " ") + t(f), a = !1, n && n[f] && (s += " " + n[f]));
    }
    r[o] = s;
  }
  return r;
}
function Gt(e, t, n, r, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const ui = l.oneOfType([l.func, l.object]);
function xt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function fi(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function di(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof i == "function" && !fi(i) && (a = "Did you accidentally provide a plain function component instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const pi = xt(l.elementType, di);
function mi(e) {
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
function Qr(e, t, n, r) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const i = mi(o);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Xr(e, t, ...n) {
  return e[t] === void 0 ? null : Qr(e, t, ...n);
}
function Nn() {
  return null;
}
Xr.isRequired = Qr;
Nn.isRequired = Nn;
const Jr = process.env.NODE_ENV === "production" ? Nn : Xr;
function hi(e) {
  return typeof e == "string";
}
function De(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
function Ue(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : De(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var Lt = { exports: {} }, oe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dr;
function gi() {
  if (dr) return oe;
  dr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), g = Symbol.for("react.client.reference");
  function y(c) {
    if (typeof c == "object" && c !== null) {
      var E = c.$$typeof;
      switch (E) {
        case e:
          switch (c = c.type, c) {
            case n:
            case o:
            case r:
            case d:
            case f:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case s:
                case a:
                case p:
                case m:
                  return c;
                case i:
                  return c;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return oe.ContextConsumer = i, oe.ContextProvider = s, oe.Element = e, oe.ForwardRef = a, oe.Fragment = n, oe.Lazy = p, oe.Memo = m, oe.Portal = t, oe.Profiler = o, oe.StrictMode = r, oe.Suspense = d, oe.SuspenseList = f, oe.isContextConsumer = function(c) {
    return y(c) === i;
  }, oe.isContextProvider = function(c) {
    return y(c) === s;
  }, oe.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === e;
  }, oe.isForwardRef = function(c) {
    return y(c) === a;
  }, oe.isFragment = function(c) {
    return y(c) === n;
  }, oe.isLazy = function(c) {
    return y(c) === p;
  }, oe.isMemo = function(c) {
    return y(c) === m;
  }, oe.isPortal = function(c) {
    return y(c) === t;
  }, oe.isProfiler = function(c) {
    return y(c) === o;
  }, oe.isStrictMode = function(c) {
    return y(c) === r;
  }, oe.isSuspense = function(c) {
    return y(c) === d;
  }, oe.isSuspenseList = function(c) {
    return y(c) === f;
  }, oe.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === n || c === o || c === r || c === d || c === f || c === h || typeof c == "object" && c !== null && (c.$$typeof === p || c.$$typeof === m || c.$$typeof === s || c.$$typeof === i || c.$$typeof === a || c.$$typeof === g || c.getModuleId !== void 0);
  }, oe.typeOf = y, oe;
}
var ie = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pr;
function yi() {
  return pr || (pr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c) {
      if (typeof c == "object" && c !== null) {
        var E = c.$$typeof;
        switch (E) {
          case t:
            switch (c = c.type, c) {
              case r:
              case i:
              case o:
              case f:
              case m:
                return c;
              default:
                switch (c = c && c.$$typeof, c) {
                  case a:
                  case d:
                  case h:
                  case p:
                    return c;
                  case s:
                    return c;
                  default:
                    return E;
                }
            }
          case n:
            return E;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = Symbol.for("react.client.reference");
    ie.ContextConsumer = s, ie.ContextProvider = a, ie.Element = t, ie.ForwardRef = d, ie.Fragment = r, ie.Lazy = h, ie.Memo = p, ie.Portal = n, ie.Profiler = i, ie.StrictMode = o, ie.Suspense = f, ie.SuspenseList = m, ie.isContextConsumer = function(c) {
      return e(c) === s;
    }, ie.isContextProvider = function(c) {
      return e(c) === a;
    }, ie.isElement = function(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }, ie.isForwardRef = function(c) {
      return e(c) === d;
    }, ie.isFragment = function(c) {
      return e(c) === r;
    }, ie.isLazy = function(c) {
      return e(c) === h;
    }, ie.isMemo = function(c) {
      return e(c) === p;
    }, ie.isPortal = function(c) {
      return e(c) === n;
    }, ie.isProfiler = function(c) {
      return e(c) === i;
    }, ie.isStrictMode = function(c) {
      return e(c) === o;
    }, ie.isSuspense = function(c) {
      return e(c) === f;
    }, ie.isSuspenseList = function(c) {
      return e(c) === m;
    }, ie.isValidElementType = function(c) {
      return typeof c == "string" || typeof c == "function" || c === r || c === i || c === o || c === f || c === m || c === g || typeof c == "object" && c !== null && (c.$$typeof === h || c.$$typeof === p || c.$$typeof === a || c.$$typeof === s || c.$$typeof === d || c.$$typeof === y || c.getModuleId !== void 0);
    }, ie.typeOf = e;
  }()), ie;
}
var mr;
function bi() {
  return mr || (mr = 1, process.env.NODE_ENV === "production" ? Lt.exports = /* @__PURE__ */ gi() : Lt.exports = /* @__PURE__ */ yi()), Lt.exports;
}
var Yt = /* @__PURE__ */ bi();
function Ne(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Zr(e) {
  if (/* @__PURE__ */ _.isValidElement(e) || Yt.isValidElementType(e) || !Ne(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Zr(e[n]);
  }), t;
}
function Ee(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return Ne(e) && Ne(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ _.isValidElement(t[o]) || Yt.isValidElementType(t[o]) ? r[o] = t[o] : Ne(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ne(e[o]) ? r[o] = Ee(e[o], t[o], n) : n.clone ? r[o] = Ne(t[o]) ? Zr(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
function yt(e, t) {
  return t ? Ee(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Be = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.string, l.object, l.array]) : {};
function vi(e, t) {
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
function Ei(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function xi(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : De(18, `(${t})`));
    return null;
  }
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function Si(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function n(i, s) {
    i.up = (...a) => t(e.breakpoints.up(...a), s), i.down = (...a) => t(e.breakpoints.down(...a), s), i.between = (...a) => t(e.breakpoints.between(...a), s), i.only = (...a) => t(e.breakpoints.only(...a), s), i.not = (...a) => {
      const d = t(e.breakpoints.not(...a), s);
      return d.includes("not all and") ? d.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : d;
    };
  }
  const r = {}, o = (i) => (n(r, i), r);
  return n(o), {
    ...e,
    containerQueries: o
  };
}
const en = {
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
}, hr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${en[e]}px)`
}, Ti = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : en[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function $e(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || hr;
    return t.reduce((s, a, d) => (s[i.up(i.keys[d])] = n(t[d]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || hr;
    return Object.keys(t).reduce((s, a) => {
      if (Ei(i.keys, a)) {
        const d = xi(r.containerQueries ? r : Ti, a);
        d && (s[d] = n(t[a], a));
      } else if (Object.keys(i.values || en).includes(a)) {
        const d = i.up(a);
        s[d] = n(t[a], a);
      } else {
        const d = a;
        s[d] = t[d];
      }
      return s;
    }, {});
  }
  return n(t);
}
function Ci(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function wi(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function tn(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function qt(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = tn(e, n) || r, t && (o = t(o, r, e)), o;
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
    const a = s[t], d = s.theme, f = tn(d, r) || {};
    return $e(s, a, (p) => {
      let h = qt(f, o, p);
      return p === h && typeof p == "string" && (h = qt(f, o, `${t}${p === "default" ? "" : Ue(p)}`, p)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Be
  } : {}, i.filterProps = [t], i;
}
function Oi(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Ri = {
  m: "margin",
  p: "padding"
}, Ai = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, gr = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ni = Oi((e) => {
  if (e.length > 2)
    if (gr[e])
      e = gr[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Ri[t], o = Ai[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), nn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], rn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Pi = [...nn, ...rn];
function St(e, t, n, r) {
  const o = tn(e, t, !0) ?? n;
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
function Vn(e) {
  return St(e, "spacing", 8, "spacing");
}
function Tt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function $i(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Tt(t, n), r), {});
}
function ki(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const o = Ni(n), i = $i(o, r), s = e[n];
  return $e(e, s, i);
}
function eo(e, t) {
  const n = Vn(e.theme);
  return Object.keys(e).map((r) => ki(e, t, r, n)).reduce(yt, {});
}
function de(e) {
  return eo(e, nn);
}
de.propTypes = process.env.NODE_ENV !== "production" ? nn.reduce((e, t) => (e[t] = Be, e), {}) : {};
de.filterProps = nn;
function pe(e) {
  return eo(e, rn);
}
pe.propTypes = process.env.NODE_ENV !== "production" ? rn.reduce((e, t) => (e[t] = Be, e), {}) : {};
pe.filterProps = rn;
process.env.NODE_ENV !== "production" && Pi.reduce((e, t) => (e[t] = Be, e), {});
function on(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? yt(o, t[i](r)) : o, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, o) => Object.assign(r, o.propTypes), {}) : {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Te(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ce(e, t) {
  return me({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const _i = Ce("border", Te), Ii = Ce("borderTop", Te), Di = Ce("borderRight", Te), Mi = Ce("borderBottom", Te), Bi = Ce("borderLeft", Te), Li = Ce("borderColor"), Fi = Ce("borderTopColor"), ji = Ce("borderRightColor"), Vi = Ce("borderBottomColor"), zi = Ce("borderLeftColor"), Ui = Ce("outline", Te), Wi = Ce("outlineColor"), sn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = St(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: Tt(t, r)
    });
    return $e(e, e.borderRadius, n);
  }
  return null;
};
sn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Be
} : {};
sn.filterProps = ["borderRadius"];
on(_i, Ii, Di, Mi, Bi, Li, Fi, ji, Vi, zi, sn, Ui, Wi);
const an = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = St(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: Tt(t, r)
    });
    return $e(e, e.gap, n);
  }
  return null;
};
an.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Be
} : {};
an.filterProps = ["gap"];
const ln = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = St(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: Tt(t, r)
    });
    return $e(e, e.columnGap, n);
  }
  return null;
};
ln.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Be
} : {};
ln.filterProps = ["columnGap"];
const cn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = St(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: Tt(t, r)
    });
    return $e(e, e.rowGap, n);
  }
  return null;
};
cn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Be
} : {};
cn.filterProps = ["rowGap"];
const Gi = me({
  prop: "gridColumn"
}), Yi = me({
  prop: "gridRow"
}), qi = me({
  prop: "gridAutoFlow"
}), Hi = me({
  prop: "gridAutoColumns"
}), Ki = me({
  prop: "gridAutoRows"
}), Qi = me({
  prop: "gridTemplateColumns"
}), Xi = me({
  prop: "gridTemplateRows"
}), Ji = me({
  prop: "gridTemplateAreas"
}), Zi = me({
  prop: "gridArea"
});
on(an, ln, cn, Gi, Yi, qi, Hi, Ki, Qi, Xi, Ji, Zi);
function rt(e, t) {
  return t === "grey" ? t : e;
}
const es = me({
  prop: "color",
  themeKey: "palette",
  transform: rt
}), ts = me({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: rt
}), ns = me({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: rt
});
on(es, ts, ns);
function ve(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const rs = me({
  prop: "width",
  transform: ve
}), zn = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, a, d;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || en[n];
      return r ? ((d = (a = e.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : d.unit) !== "px" ? {
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
zn.filterProps = ["maxWidth"];
const os = me({
  prop: "minWidth",
  transform: ve
}), is = me({
  prop: "height",
  transform: ve
}), ss = me({
  prop: "maxHeight",
  transform: ve
}), as = me({
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
const ls = me({
  prop: "boxSizing"
});
on(rs, zn, os, is, ss, as, ls);
const un = {
  // borders
  border: {
    themeKey: "borders",
    transform: Te
  },
  borderTop: {
    themeKey: "borders",
    transform: Te
  },
  borderRight: {
    themeKey: "borders",
    transform: Te
  },
  borderBottom: {
    themeKey: "borders",
    transform: Te
  },
  borderLeft: {
    themeKey: "borders",
    transform: Te
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
    transform: Te
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: sn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: rt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: rt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: rt
  },
  // spacing
  p: {
    style: pe
  },
  pt: {
    style: pe
  },
  pr: {
    style: pe
  },
  pb: {
    style: pe
  },
  pl: {
    style: pe
  },
  px: {
    style: pe
  },
  py: {
    style: pe
  },
  padding: {
    style: pe
  },
  paddingTop: {
    style: pe
  },
  paddingRight: {
    style: pe
  },
  paddingBottom: {
    style: pe
  },
  paddingLeft: {
    style: pe
  },
  paddingX: {
    style: pe
  },
  paddingY: {
    style: pe
  },
  paddingInline: {
    style: pe
  },
  paddingInlineStart: {
    style: pe
  },
  paddingInlineEnd: {
    style: pe
  },
  paddingBlock: {
    style: pe
  },
  paddingBlockStart: {
    style: pe
  },
  paddingBlockEnd: {
    style: pe
  },
  m: {
    style: de
  },
  mt: {
    style: de
  },
  mr: {
    style: de
  },
  mb: {
    style: de
  },
  ml: {
    style: de
  },
  mx: {
    style: de
  },
  my: {
    style: de
  },
  margin: {
    style: de
  },
  marginTop: {
    style: de
  },
  marginRight: {
    style: de
  },
  marginBottom: {
    style: de
  },
  marginLeft: {
    style: de
  },
  marginX: {
    style: de
  },
  marginY: {
    style: de
  },
  marginInline: {
    style: de
  },
  marginInlineStart: {
    style: de
  },
  marginInlineEnd: {
    style: de
  },
  marginBlock: {
    style: de
  },
  marginBlockStart: {
    style: de
  },
  marginBlockEnd: {
    style: de
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
    style: an
  },
  rowGap: {
    style: cn
  },
  columnGap: {
    style: ln
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
    style: zn
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
function cs(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function us(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fs() {
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
      cssProperty: d = n,
      themeKey: f,
      transform: m,
      style: p
    } = a;
    if (r == null)
      return null;
    if (f === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const h = tn(o, f) || {};
    return p ? p(s) : $e(s, r, (y) => {
      let c = qt(h, m, y);
      return y === c && typeof y == "string" && (c = qt(h, m, `${n}${y === "default" ? "" : Ue(y)}`, y)), d === !1 ? c : {
        [d]: c
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
    const i = o.unstable_sxConfig ?? un;
    function s(a) {
      let d = a;
      if (typeof a == "function")
        d = a(o);
      else if (typeof a != "object")
        return a;
      if (!d)
        return null;
      const f = Ci(o.breakpoints), m = Object.keys(f);
      let p = f;
      return Object.keys(d).forEach((h) => {
        const g = us(d[h], o);
        if (g != null)
          if (typeof g == "object")
            if (i[h])
              p = yt(p, e(h, g, o, i));
            else {
              const y = $e({
                theme: o
              }, g, (c) => ({
                [h]: c
              }));
              cs(y, g) ? p[h] = t({
                sx: g,
                theme: o
              }) : p = yt(p, y);
            }
          else
            p = yt(p, e(h, g, o, i));
      }), vi(o, wi(m, p));
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return t;
}
const ot = fs();
ot.filterProps = ["sx"];
function ds(e) {
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
var ps = {
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
function ms(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var hs = /[A-Z]|^ms/g, gs = /_EMO_([^_]+?)_([^]*?)_EMO_/g, to = function(t) {
  return t.charCodeAt(1) === 45;
}, yr = function(t) {
  return t != null && typeof t != "boolean";
}, Sn = /* @__PURE__ */ ms(function(e) {
  return to(e) ? e : e.replace(hs, "-$&").toLowerCase();
}), br = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(gs, function(r, o, i) {
          return Ie = {
            name: o,
            styles: i,
            next: Ie
          }, o;
        });
  }
  return ps[t] !== 1 && !to(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Ht(e, t, n) {
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
        return Ie = {
          name: o.name,
          styles: o.styles,
          next: Ie
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Ie = {
              name: s.name,
              styles: s.styles,
              next: Ie
            }, s = s.next;
        var a = i.styles + ";";
        return a;
      }
      return ys(e, t, n);
    }
  }
  var d = n;
  return d;
}
function ys(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Ht(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        yr(a) && (r += Sn(i) + ":" + br(i, a) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && t == null)
        for (var d = 0; d < s.length; d++)
          yr(s[d]) && (r += Sn(i) + ":" + br(i, s[d]) + ";");
      else {
        var f = Ht(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Sn(i) + ":" + f + ";";
            break;
          }
          default:
            r += i + "{" + f + "}";
        }
      }
    }
  return r;
}
var vr = /label:\s*([^\s;{]+)\s*(;|$)/g, Ie;
function bs(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  Ie = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += Ht(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += Ht(n, t, e[a]), r) {
      var d = i;
      o += d[a];
    }
  vr.lastIndex = 0;
  for (var f = "", m; (m = vr.exec(o)) !== null; )
    f += "-" + m[1];
  var p = ds(o) + f;
  return {
    name: p,
    styles: o,
    next: Ie
  };
}
/**
 * @mui/styled-engine v6.4.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function vs(e, t) {
  const n = Lo(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
function Es(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Er = [];
function xr(e) {
  return Er[0] = e, bs(Er);
}
const xs = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function Ss(e) {
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
  } = e, i = xs(t), s = Object.keys(i);
  function a(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function d(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${n})`;
  }
  function f(h, g) {
    const y = s.indexOf(g);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(y !== -1 && typeof t[s[y]] == "number" ? t[s[y]] : g) - r / 100}${n})`;
  }
  function m(h) {
    return s.indexOf(h) + 1 < s.length ? f(h, s[s.indexOf(h) + 1]) : a(h);
  }
  function p(h) {
    const g = s.indexOf(h);
    return g === 0 ? a(s[1]) : g === s.length - 1 ? d(s[g]) : f(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: a,
    down: d,
    between: f,
    only: m,
    not: p,
    unit: n,
    ...o
  };
}
const Ts = {
  borderRadius: 4
};
function no(e = 8, t = Vn({
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
function Cs(e, t) {
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
function Un(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, a = Ss(n), d = no(o);
  let f = Ee({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...r
    },
    spacing: d,
    shape: {
      ...Ts,
      ...i
    }
  }, s);
  return f = Si(f), f.applyStyles = Cs, f = t.reduce((m, p) => Ee(m, p), f), f.unstable_sxConfig = {
    ...un,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, f.unstable_sx = function(p) {
    return ot({
      sx: p,
      theme: this
    });
  }, f;
}
function ws(e) {
  return Object.keys(e).length === 0;
}
function Os(e = null) {
  const t = _.useContext(Fo);
  return !t || ws(t) ? e : t;
}
const Rs = Un();
function As(e = Rs) {
  return Os(e);
}
const Sr = (e) => e, Ns = () => {
  let e = Sr;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Sr;
    }
  };
}, Ps = Ns(), $s = {
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
function We(e, t, n = "Mui") {
  const r = $s[t];
  return r ? `${n}-${r}` : `${Ps.generate(e)}-${t}`;
}
function Ct(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = We(e, o, n);
  }), r;
}
function ro(e, t = "") {
  return e.displayName || e.name || t;
}
function Tr(e, t, n) {
  const r = ro(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function ks(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ro(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Yt.ForwardRef:
          return Tr(e, e.render, "ForwardRef");
        case Yt.Memo:
          return Tr(e, e.type, "memo");
        default:
          return;
      }
  }
}
function oo(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: xr(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = xr(o.style));
  }), r;
}
const _s = Un();
function Tn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Is(e) {
  return e ? (t, n) => n[e] : null;
}
function Ds(e, t, n) {
  e.theme = Fs(e.theme) ? n : e.theme[t] || e.theme;
}
function zt(e, t) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((r) => zt(e, r));
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
    return io(e, n.variants, [r]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function io(e, t, n = []) {
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
function Ms(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = _s,
    rootShouldForwardProp: r = Tn,
    slotShouldForwardProp: o = Tn
  } = e;
  function i(a) {
    Ds(a, t, n);
  }
  return (a, d = {}) => {
    Es(a, (b) => b.filter(($) => $ !== ot));
    const {
      name: f,
      slot: m,
      skipVariantsResolver: p,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: g = Is(so(m)),
      ...y
    } = d, c = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      m && m !== "Root" && m !== "root" || !1
    ), E = h || !1;
    let O = Tn;
    m === "Root" || m === "root" ? O = r : m ? O = o : js(a) && (O = void 0);
    const N = vs(a, {
      shouldForwardProp: O,
      label: Ls(f, m),
      ...y
    }), T = (b) => {
      if (typeof b == "function" && b.__emotion_real !== b)
        return function(M) {
          return zt(M, b);
        };
      if (Ne(b)) {
        const $ = oo(b);
        return $.variants ? function(H) {
          return zt(H, $);
        } : $.style;
      }
      return b;
    }, S = (...b) => {
      const $ = [], M = b.map(T), H = [];
      if ($.push(i), f && g && H.push(function(I) {
        var k, Y;
        const F = (Y = (k = I.theme.components) == null ? void 0 : k[f]) == null ? void 0 : Y.styleOverrides;
        if (!F)
          return null;
        const R = {};
        for (const Z in F)
          R[Z] = zt(I, F[Z]);
        return g(I, R);
      }), f && !c && H.push(function(I) {
        var R, k;
        const z = I.theme, F = (k = (R = z == null ? void 0 : z.components) == null ? void 0 : R[f]) == null ? void 0 : k.variants;
        return F ? io(I, F) : null;
      }), E || H.push(ot), Array.isArray(M[0])) {
        const A = M.shift(), I = new Array($.length).fill(""), z = new Array(H.length).fill("");
        let F;
        F = [...I, ...A, ...z], F.raw = [...I, ...A.raw, ...z], $.unshift(F);
      }
      const G = [...$, ...M, ...H], u = N(...G);
      return a.muiName && (u.muiName = a.muiName), process.env.NODE_ENV !== "production" && (u.displayName = Bs(f, m, a)), u;
    };
    return N.withConfig && (S.withConfig = N.withConfig), S;
  };
}
function Bs(e, t, n) {
  return e ? `${e}${Ue(t || "")}` : `Styled(${ks(n)})`;
}
function Ls(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${so(t || "Root")}`), n;
}
function Fs(e) {
  for (const t in e)
    return !1;
  return !0;
}
function js(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function so(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Pn(e, t) {
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
              const d = a;
              n[o][d] = Pn(i[d], s[d]);
            }
        }
      } else n[o] === void 0 && (n[o] = e[o]);
    }
  return n;
}
const $n = typeof window < "u" ? _.useLayoutEffect : _.useEffect;
function Vs(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Wn(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Vs(e, t, n);
}
function zs(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Me(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Me(zs(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : De(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : De(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const Us = (e) => {
  const t = Me(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, pt = (e, t) => {
  try {
    return Us(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function fn(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function ao(e) {
  e = Me(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (f, m = (f + n / 30) % 12) => o - i * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let a = "rgb";
  const d = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", d.push(t[3])), fn({
    type: a,
    values: d
  });
}
function kn(e) {
  e = Me(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Me(ao(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Cr(e, t) {
  const n = kn(e), r = kn(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function _n(e, t) {
  return e = Me(e), t = Wn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, fn(e);
}
function Ft(e, t, n) {
  try {
    return _n(e, t);
  } catch {
    return e;
  }
}
function Gn(e, t) {
  if (e = Me(e), t = Wn(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return fn(e);
}
function se(e, t, n) {
  try {
    return Gn(e, t);
  } catch {
    return e;
  }
}
function Yn(e, t) {
  if (e = Me(e), t = Wn(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return fn(e);
}
function ae(e, t, n) {
  try {
    return Yn(e, t);
  } catch {
    return e;
  }
}
function Ws(e, t = 0.15) {
  return kn(e) > 0.5 ? Gn(e, t) : Yn(e, t);
}
function jt(e, t, n) {
  try {
    return Ws(e, t);
  } catch {
    return e;
  }
}
function Gs(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function lo(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  const d = i.type;
  return typeof d == "function" && !Gs(d) && (a = "Did you accidentally use a plain function component for an element instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const wt = xt(l.element, lo);
wt.isRequired = xt(l.element.isRequired, lo);
const Ys = "exact-prop: ​";
function co(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Ys]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function wr(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function qs(e, t = 166) {
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
function it(e) {
  return ke(e).defaultView || window;
}
function In(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Or(e) {
  const t = _.useRef(e);
  return $n(() => {
    t.current = e;
  }), _.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Le(...e) {
  return _.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      In(n, t);
    });
  }, e);
}
const Rr = {};
function Hs(e, t) {
  const n = _.useRef(Rr);
  return n.current === Rr && (n.current = e(t)), n;
}
const Ks = [];
function Qs(e) {
  _.useEffect(e, Ks);
}
class qn {
  constructor() {
    _t(this, "currentId", null);
    _t(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    _t(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new qn();
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
function Xs() {
  const e = Hs(qn.create).current;
  return Qs(e.disposeEffect), e;
}
function Js(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function Zs(e) {
  return typeof e == "string";
}
function ea(e, t, n) {
  return e === void 0 || Zs(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function uo(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Ar(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function ta(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const g = Pe(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), y = {
      ...n == null ? void 0 : n.style,
      ...o == null ? void 0 : o.style,
      ...r == null ? void 0 : r.style
    }, c = {
      ...n,
      ...o,
      ...r
    };
    return g.length > 0 && (c.className = g), Object.keys(y).length > 0 && (c.style = y), {
      props: c,
      internalRef: void 0
    };
  }
  const s = uo({
    ...o,
    ...r
  }), a = Ar(r), d = Ar(o), f = t(s), m = Pe(f == null ? void 0 : f.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), p = {
    ...f == null ? void 0 : f.style,
    ...n == null ? void 0 : n.style,
    ...o == null ? void 0 : o.style,
    ...r == null ? void 0 : r.style
  }, h = {
    ...f,
    ...n,
    ...d,
    ...a
  };
  return m.length > 0 && (h.className = m), Object.keys(p).length > 0 && (h.style = p), {
    props: h,
    internalRef: f.ref
  };
}
function na(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function dn(e) {
  var t;
  return parseInt(_.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const ra = /* @__PURE__ */ _.createContext(void 0);
process.env.NODE_ENV !== "production" && (l.node, l.object);
function oa(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? Pn(o.defaultProps, r) : !o.styleOverrides && !o.variants ? Pn(o, r) : r;
}
function ia({
  props: e,
  name: t
}) {
  const n = _.useContext(ra);
  return oa({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const Nr = {
  theme: void 0
};
function sa(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (Nr.theme = o.theme, i = oo(e(Nr)), t = i, n = o.theme), i;
  };
}
function aa(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const Pr = (e, t, n, r = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = n : o && typeof o == "object" && (o[i] = n) : o && typeof o == "object" && (o[i] || (o[i] = r.includes(i) ? [] : {}), o = o[i]);
  });
}, la = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([a, d]) => {
      (!n || n && !n([...i, a])) && d != null && (typeof d == "object" && Object.keys(d).length > 0 ? r(d, [...i, a], Array.isArray(d) ? [...s, a] : s) : t([...i, a], d, s));
    });
  }
  r(e);
}, ca = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Cn(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return la(
    e,
    (a, d, f) => {
      if ((typeof d == "string" || typeof d == "number") && (!r || !r(a, d))) {
        const m = `--${n ? `${n}-` : ""}${a.join("-")}`, p = ca(a, d);
        Object.assign(o, {
          [m]: p
        }), Pr(i, a, `var(${m})`, f), Pr(s, a, `var(${m}, ${p})`, f);
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
function ua(e, t = {}) {
  const {
    getSelector: n = E,
    disableCssColorScheme: r,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: s,
    defaultColorScheme: a = "light",
    ...d
  } = e, {
    vars: f,
    css: m,
    varsWithDefaults: p
  } = Cn(d, t);
  let h = p;
  const g = {}, {
    [a]: y,
    ...c
  } = i;
  if (Object.entries(c || {}).forEach(([T, S]) => {
    const {
      vars: b,
      css: $,
      varsWithDefaults: M
    } = Cn(S, t);
    h = Ee(h, M), g[T] = {
      css: $,
      vars: b
    };
  }), y) {
    const {
      css: T,
      vars: S,
      varsWithDefaults: b
    } = Cn(y, t);
    h = Ee(h, b), g[a] = {
      css: T,
      vars: S
    };
  }
  function E(T, S) {
    var $, M;
    let b = o;
    if (o === "class" && (b = ".%s"), o === "data" && (b = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (b = `[${o}="%s"]`), T) {
      if (b === "media")
        return e.defaultColorScheme === T ? ":root" : {
          [`@media (prefers-color-scheme: ${((M = ($ = i[T]) == null ? void 0 : $.palette) == null ? void 0 : M.mode) || T})`]: {
            ":root": S
          }
        };
      if (b)
        return e.defaultColorScheme === T ? `:root, ${b.replace("%s", String(T))}` : b.replace("%s", String(T));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let T = {
        ...f
      };
      return Object.entries(g).forEach(([, {
        vars: S
      }]) => {
        T = Ee(T, S);
      }), T;
    },
    generateStyleSheets: () => {
      var H, G;
      const T = [], S = e.defaultColorScheme || "light";
      function b(u, A) {
        Object.keys(A).length && T.push(typeof u == "string" ? {
          [u]: {
            ...A
          }
        } : u);
      }
      b(n(void 0, {
        ...m
      }), m);
      const {
        [S]: $,
        ...M
      } = g;
      if ($) {
        const {
          css: u
        } = $, A = (G = (H = i[S]) == null ? void 0 : H.palette) == null ? void 0 : G.mode, I = !r && A ? {
          colorScheme: A,
          ...u
        } : {
          ...u
        };
        b(n(S, {
          ...I
        }), I);
      }
      return Object.entries(M).forEach(([u, {
        css: A
      }]) => {
        var F, R;
        const I = (R = (F = i[u]) == null ? void 0 : F.palette) == null ? void 0 : R.mode, z = !r && I ? {
          colorScheme: I,
          ...A
        } : {
          ...A
        };
        b(n(u, {
          ...z
        }), z);
      }), T;
    }
  };
}
function fa(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const vt = {
  black: "#000",
  white: "#fff"
}, da = {
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
}, He = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Ke = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, ft = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Qe = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Xe = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Je = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function fo() {
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
      paper: vt.white,
      default: vt.white
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
const pa = fo();
function po() {
  return {
    text: {
      primary: vt.white,
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
      active: vt.white,
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
const $r = po();
function kr(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Yn(e.main, o) : t === "dark" && (e.dark = Gn(e.main, i)));
}
function ma(e = "light") {
  return e === "dark" ? {
    main: Qe[200],
    light: Qe[50],
    dark: Qe[400]
  } : {
    main: Qe[700],
    light: Qe[400],
    dark: Qe[800]
  };
}
function ha(e = "light") {
  return e === "dark" ? {
    main: He[200],
    light: He[50],
    dark: He[400]
  } : {
    main: He[500],
    light: He[300],
    dark: He[700]
  };
}
function ga(e = "light") {
  return e === "dark" ? {
    main: Ke[500],
    light: Ke[300],
    dark: Ke[700]
  } : {
    main: Ke[700],
    light: Ke[400],
    dark: Ke[800]
  };
}
function ya(e = "light") {
  return e === "dark" ? {
    main: Xe[400],
    light: Xe[300],
    dark: Xe[700]
  } : {
    main: Xe[700],
    light: Xe[500],
    dark: Xe[900]
  };
}
function ba(e = "light") {
  return e === "dark" ? {
    main: Je[400],
    light: Je[300],
    dark: Je[700]
  } : {
    main: Je[800],
    light: Je[500],
    dark: Je[900]
  };
}
function va(e = "light") {
  return e === "dark" ? {
    main: ft[400],
    light: ft[300],
    dark: ft[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: ft[500],
    dark: ft[900]
  };
}
function Hn(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...o
  } = e, i = e.primary || ma(t), s = e.secondary || ha(t), a = e.error || ga(t), d = e.info || ya(t), f = e.success || ba(t), m = e.warning || va(t);
  function p(c) {
    const E = Cr(c, $r.text.primary) >= n ? $r.text.primary : pa.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const O = Cr(c, E);
      O < 3 && console.error([`MUI: The contrast ratio of ${O}:1 for ${E} on ${c}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return E;
  }
  const h = ({
    color: c,
    name: E,
    mainShade: O = 500,
    lightShade: N = 300,
    darkShade: T = 700
  }) => {
    if (c = {
      ...c
    }, !c.main && c[O] && (c.main = c[O]), !c.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${O}\` property.` : De(11, E ? ` (${E})` : "", O));
    if (typeof c.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(c.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : De(12, E ? ` (${E})` : "", JSON.stringify(c.main)));
    return kr(c, "light", N, r), kr(c, "dark", T, r), c.contrastText || (c.contrastText = p(c.main)), c;
  };
  let g;
  return t === "light" ? g = fo() : t === "dark" && (g = po()), process.env.NODE_ENV !== "production" && (g || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ee({
    // A collection of common colors.
    common: {
      ...vt
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
      color: d,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: da,
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
    ...g
  }, o);
}
function Ea(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function xa(e, t) {
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
function Sa(e) {
  return Math.round(e * 1e5) / 1e5;
}
const _r = {
  textTransform: "uppercase"
}, Ir = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ta(e, t) {
  const {
    fontFamily: n = Ir,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: d = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: m,
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof r != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof d != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = r / 14, g = m || ((E) => `${E / d * h}rem`), y = (E, O, N, T, S) => ({
    fontFamily: n,
    fontWeight: E,
    fontSize: g(O),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: N,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Ir ? {
      letterSpacing: `${Sa(T / O)}em`
    } : {},
    ...S,
    ...f
  }), c = {
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
    button: y(s, 14, 1.75, 0.4, _r),
    caption: y(i, 12, 1.66, 0.4),
    overline: y(i, 12, 2.66, 1, _r),
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
    htmlFontSize: d,
    pxToRem: g,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: a,
    ...c
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const Ca = 0.2, wa = 0.14, Oa = 0.12;
function fe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ca})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${wa})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Oa})`].join(",");
}
const Ra = ["none", fe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), fe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), fe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), fe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), fe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), fe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), fe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), fe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), fe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), fe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), fe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), fe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), fe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), fe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), fe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), fe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), fe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), fe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), fe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), fe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), fe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), fe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), fe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), fe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Aa = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Na = {
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
function Dr(e) {
  return `${Math.round(e)}ms`;
}
function Pa(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function $a(e) {
  const t = {
    ...Aa,
    ...e.easing
  }, n = {
    ...Na,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Pa,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: a = t.easeInOut,
        delay: d = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const m = (h) => typeof h == "string", p = (h) => !Number.isNaN(parseFloat(h));
        !m(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(s) && !m(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), m(a) || console.error('MUI: Argument "easing" must be a string.'), !p(d) && !m(d) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((m) => `${m} ${typeof s == "string" ? s : Dr(s)} ${a} ${typeof d == "string" ? d : Dr(d)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const ka = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function _a(e) {
  return Ne(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function mo(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, a] = o[i];
      !_a(a) || s.startsWith("unstable_") ? delete r[s] : Ne(a) && (r[s] = {
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
function Dn(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: a = {},
    shape: d,
    ...f
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : De(20));
  const m = Hn(i), p = Un(e);
  let h = Ee(p, {
    mixins: xa(p.breakpoints, r),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Ra.slice(),
    typography: Ta(m, a),
    transitions: $a(s),
    zIndex: {
      ...ka
    }
  });
  if (h = Ee(h, f), h = t.reduce((g, y) => Ee(g, y), h), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], y = (c, E) => {
      let O;
      for (O in c) {
        const N = c[O];
        if (g.includes(O) && Object.keys(N).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const T = We("", O);
            console.error([`MUI: The \`${E}\` component increases the CSS specificity of the \`${O}\` internal state.`, "You can not override it like this: ", JSON.stringify(c, null, 2), "", `Instead, you need to use the '&.${T}' syntax:`, JSON.stringify({
              root: {
                [`&.${T}`]: N
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          c[O] = {};
        }
      }
    };
    Object.keys(h.components).forEach((c) => {
      const E = h.components[c].styleOverrides;
      E && c.startsWith("Mui") && y(E, c);
    });
  }
  return h.unstable_sxConfig = {
    ...un,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, h.unstable_sx = function(y) {
    return ot({
      sx: y,
      theme: this
    });
  }, h.toRuntimeSource = mo, h;
}
function Mn(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Ia = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Mn(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function ho(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function go(e) {
  return e === "dark" ? Ia : [];
}
function Da(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    ...o
  } = e, i = Hn(t);
  return {
    palette: i,
    opacity: {
      ...ho(i.mode),
      ...n
    },
    overlays: r || go(i.mode),
    ...o
  };
}
function Ma(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Ba = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], La = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Ba(e.cssVarPrefix).forEach((a) => {
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
function Fa(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function v(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function mt(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : ao(e);
}
function Ae(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = pt(mt(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function ja(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Oe = (e) => {
  try {
    return e();
  } catch {
  }
}, Va = (e = "mui") => aa(e);
function wn(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = Da({
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
  } = Dn({
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
      ...ho(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || go(o)
  }, s;
}
function za(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: s = Ma,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: d = ":root",
    ...f
  } = e, m = Object.keys(n)[0], p = r || (n.light && m !== "light" ? "light" : m), h = Va(i), {
    [p]: g,
    light: y,
    dark: c,
    ...E
  } = n, O = {
    ...E
  };
  let N = g;
  if ((p === "dark" && !("dark" in n) || p === "light" && !("light" in n)) && (N = !0), !N)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : De(21, p));
  const T = wn(O, N, f, p);
  y && !O.light && wn(O, y, void 0, "light"), c && !O.dark && wn(O, c, void 0, "dark");
  let S = {
    defaultColorScheme: p,
    ...T,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: d,
    getCssVar: h,
    colorSchemes: O,
    font: {
      ...Ea(T.typography),
      ...T.font
    },
    spacing: ja(f.spacing)
  };
  Object.keys(S.colorSchemes).forEach((G) => {
    const u = S.colorSchemes[G].palette, A = (I) => {
      const z = I.split("-"), F = z[1], R = z[2];
      return h(I, u[F][R]);
    };
    if (u.mode === "light" && (v(u.common, "background", "#fff"), v(u.common, "onBackground", "#000")), u.mode === "dark" && (v(u.common, "background", "#000"), v(u.common, "onBackground", "#fff")), Fa(u, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), u.mode === "light") {
      v(u.Alert, "errorColor", se(u.error.light, 0.6)), v(u.Alert, "infoColor", se(u.info.light, 0.6)), v(u.Alert, "successColor", se(u.success.light, 0.6)), v(u.Alert, "warningColor", se(u.warning.light, 0.6)), v(u.Alert, "errorFilledBg", A("palette-error-main")), v(u.Alert, "infoFilledBg", A("palette-info-main")), v(u.Alert, "successFilledBg", A("palette-success-main")), v(u.Alert, "warningFilledBg", A("palette-warning-main")), v(u.Alert, "errorFilledColor", Oe(() => u.getContrastText(u.error.main))), v(u.Alert, "infoFilledColor", Oe(() => u.getContrastText(u.info.main))), v(u.Alert, "successFilledColor", Oe(() => u.getContrastText(u.success.main))), v(u.Alert, "warningFilledColor", Oe(() => u.getContrastText(u.warning.main))), v(u.Alert, "errorStandardBg", ae(u.error.light, 0.9)), v(u.Alert, "infoStandardBg", ae(u.info.light, 0.9)), v(u.Alert, "successStandardBg", ae(u.success.light, 0.9)), v(u.Alert, "warningStandardBg", ae(u.warning.light, 0.9)), v(u.Alert, "errorIconColor", A("palette-error-main")), v(u.Alert, "infoIconColor", A("palette-info-main")), v(u.Alert, "successIconColor", A("palette-success-main")), v(u.Alert, "warningIconColor", A("palette-warning-main")), v(u.AppBar, "defaultBg", A("palette-grey-100")), v(u.Avatar, "defaultBg", A("palette-grey-400")), v(u.Button, "inheritContainedBg", A("palette-grey-300")), v(u.Button, "inheritContainedHoverBg", A("palette-grey-A100")), v(u.Chip, "defaultBorder", A("palette-grey-400")), v(u.Chip, "defaultAvatarColor", A("palette-grey-700")), v(u.Chip, "defaultIconColor", A("palette-grey-700")), v(u.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), v(u.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), v(u.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), v(u.LinearProgress, "primaryBg", ae(u.primary.main, 0.62)), v(u.LinearProgress, "secondaryBg", ae(u.secondary.main, 0.62)), v(u.LinearProgress, "errorBg", ae(u.error.main, 0.62)), v(u.LinearProgress, "infoBg", ae(u.info.main, 0.62)), v(u.LinearProgress, "successBg", ae(u.success.main, 0.62)), v(u.LinearProgress, "warningBg", ae(u.warning.main, 0.62)), v(u.Skeleton, "bg", `rgba(${A("palette-text-primaryChannel")} / 0.11)`), v(u.Slider, "primaryTrack", ae(u.primary.main, 0.62)), v(u.Slider, "secondaryTrack", ae(u.secondary.main, 0.62)), v(u.Slider, "errorTrack", ae(u.error.main, 0.62)), v(u.Slider, "infoTrack", ae(u.info.main, 0.62)), v(u.Slider, "successTrack", ae(u.success.main, 0.62)), v(u.Slider, "warningTrack", ae(u.warning.main, 0.62));
      const I = jt(u.background.default, 0.8);
      v(u.SnackbarContent, "bg", I), v(u.SnackbarContent, "color", Oe(() => u.getContrastText(I))), v(u.SpeedDialAction, "fabHoverBg", jt(u.background.paper, 0.15)), v(u.StepConnector, "border", A("palette-grey-400")), v(u.StepContent, "border", A("palette-grey-400")), v(u.Switch, "defaultColor", A("palette-common-white")), v(u.Switch, "defaultDisabledColor", A("palette-grey-100")), v(u.Switch, "primaryDisabledColor", ae(u.primary.main, 0.62)), v(u.Switch, "secondaryDisabledColor", ae(u.secondary.main, 0.62)), v(u.Switch, "errorDisabledColor", ae(u.error.main, 0.62)), v(u.Switch, "infoDisabledColor", ae(u.info.main, 0.62)), v(u.Switch, "successDisabledColor", ae(u.success.main, 0.62)), v(u.Switch, "warningDisabledColor", ae(u.warning.main, 0.62)), v(u.TableCell, "border", ae(Ft(u.divider, 1), 0.88)), v(u.Tooltip, "bg", Ft(u.grey[700], 0.92));
    }
    if (u.mode === "dark") {
      v(u.Alert, "errorColor", ae(u.error.light, 0.6)), v(u.Alert, "infoColor", ae(u.info.light, 0.6)), v(u.Alert, "successColor", ae(u.success.light, 0.6)), v(u.Alert, "warningColor", ae(u.warning.light, 0.6)), v(u.Alert, "errorFilledBg", A("palette-error-dark")), v(u.Alert, "infoFilledBg", A("palette-info-dark")), v(u.Alert, "successFilledBg", A("palette-success-dark")), v(u.Alert, "warningFilledBg", A("palette-warning-dark")), v(u.Alert, "errorFilledColor", Oe(() => u.getContrastText(u.error.dark))), v(u.Alert, "infoFilledColor", Oe(() => u.getContrastText(u.info.dark))), v(u.Alert, "successFilledColor", Oe(() => u.getContrastText(u.success.dark))), v(u.Alert, "warningFilledColor", Oe(() => u.getContrastText(u.warning.dark))), v(u.Alert, "errorStandardBg", se(u.error.light, 0.9)), v(u.Alert, "infoStandardBg", se(u.info.light, 0.9)), v(u.Alert, "successStandardBg", se(u.success.light, 0.9)), v(u.Alert, "warningStandardBg", se(u.warning.light, 0.9)), v(u.Alert, "errorIconColor", A("palette-error-main")), v(u.Alert, "infoIconColor", A("palette-info-main")), v(u.Alert, "successIconColor", A("palette-success-main")), v(u.Alert, "warningIconColor", A("palette-warning-main")), v(u.AppBar, "defaultBg", A("palette-grey-900")), v(u.AppBar, "darkBg", A("palette-background-paper")), v(u.AppBar, "darkColor", A("palette-text-primary")), v(u.Avatar, "defaultBg", A("palette-grey-600")), v(u.Button, "inheritContainedBg", A("palette-grey-800")), v(u.Button, "inheritContainedHoverBg", A("palette-grey-700")), v(u.Chip, "defaultBorder", A("palette-grey-700")), v(u.Chip, "defaultAvatarColor", A("palette-grey-300")), v(u.Chip, "defaultIconColor", A("palette-grey-300")), v(u.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), v(u.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), v(u.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), v(u.LinearProgress, "primaryBg", se(u.primary.main, 0.5)), v(u.LinearProgress, "secondaryBg", se(u.secondary.main, 0.5)), v(u.LinearProgress, "errorBg", se(u.error.main, 0.5)), v(u.LinearProgress, "infoBg", se(u.info.main, 0.5)), v(u.LinearProgress, "successBg", se(u.success.main, 0.5)), v(u.LinearProgress, "warningBg", se(u.warning.main, 0.5)), v(u.Skeleton, "bg", `rgba(${A("palette-text-primaryChannel")} / 0.13)`), v(u.Slider, "primaryTrack", se(u.primary.main, 0.5)), v(u.Slider, "secondaryTrack", se(u.secondary.main, 0.5)), v(u.Slider, "errorTrack", se(u.error.main, 0.5)), v(u.Slider, "infoTrack", se(u.info.main, 0.5)), v(u.Slider, "successTrack", se(u.success.main, 0.5)), v(u.Slider, "warningTrack", se(u.warning.main, 0.5));
      const I = jt(u.background.default, 0.98);
      v(u.SnackbarContent, "bg", I), v(u.SnackbarContent, "color", Oe(() => u.getContrastText(I))), v(u.SpeedDialAction, "fabHoverBg", jt(u.background.paper, 0.15)), v(u.StepConnector, "border", A("palette-grey-600")), v(u.StepContent, "border", A("palette-grey-600")), v(u.Switch, "defaultColor", A("palette-grey-300")), v(u.Switch, "defaultDisabledColor", A("palette-grey-600")), v(u.Switch, "primaryDisabledColor", se(u.primary.main, 0.55)), v(u.Switch, "secondaryDisabledColor", se(u.secondary.main, 0.55)), v(u.Switch, "errorDisabledColor", se(u.error.main, 0.55)), v(u.Switch, "infoDisabledColor", se(u.info.main, 0.55)), v(u.Switch, "successDisabledColor", se(u.success.main, 0.55)), v(u.Switch, "warningDisabledColor", se(u.warning.main, 0.55)), v(u.TableCell, "border", se(Ft(u.divider, 1), 0.68)), v(u.Tooltip, "bg", Ft(u.grey[700], 0.92));
    }
    Ae(u.background, "default"), Ae(u.background, "paper"), Ae(u.common, "background"), Ae(u.common, "onBackground"), Ae(u, "divider"), Object.keys(u).forEach((I) => {
      const z = u[I];
      I !== "tonalOffset" && z && typeof z == "object" && (z.main && v(u[I], "mainChannel", pt(mt(z.main))), z.light && v(u[I], "lightChannel", pt(mt(z.light))), z.dark && v(u[I], "darkChannel", pt(mt(z.dark))), z.contrastText && v(u[I], "contrastTextChannel", pt(mt(z.contrastText))), I === "text" && (Ae(u[I], "primary"), Ae(u[I], "secondary")), I === "action" && (z.active && Ae(u[I], "active"), z.selected && Ae(u[I], "selected")));
    });
  }), S = t.reduce((G, u) => Ee(G, u), S);
  const b = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: La(S)
  }, {
    vars: $,
    generateThemeVars: M,
    generateStyleSheets: H
  } = ua(S, b);
  return S.vars = $, Object.entries(S.colorSchemes[S.defaultColorScheme]).forEach(([G, u]) => {
    S[G] = u;
  }), S.generateThemeVars = M, S.generateStyleSheets = H, S.generateSpacing = function() {
    return no(f.spacing, Vn(this));
  }, S.getColorSchemeSelector = fa(a), S.spacing = S.generateSpacing(), S.shouldSkipGeneratingVar = s, S.unstable_sxConfig = {
    ...un,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, S.unstable_sx = function(u) {
    return ot({
      sx: u,
      theme: this
    });
  }, S.toRuntimeSource = mo, S;
}
function Mr(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Hn({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Ua(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: o = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = n == null ? void 0 : n.mode,
    ...s
  } = e, a = i || "light", d = o == null ? void 0 : o[a], f = {
    ...o,
    ...n ? {
      [a]: {
        ...typeof d != "boolean" && d,
        palette: n
      }
    } : void 0
  };
  if (r === !1) {
    if (!("colorSchemes" in e))
      return Dn(e, ...t);
    let m = n;
    "palette" in e || f[a] && (f[a] !== !0 ? m = f[a].palette : a === "dark" && (m = {
      mode: "dark"
    }));
    const p = Dn({
      ...e,
      palette: m
    }, ...t);
    return p.defaultColorScheme = a, p.colorSchemes = f, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: p.palette
    }, Mr(p, "dark", f.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: p.palette
    }, Mr(p, "light", f.light)), p;
  }
  return !n && !("light" in f) && a === "light" && (f.light = !0), za({
    ...s,
    colorSchemes: f,
    defaultColorScheme: a,
    ...typeof r != "boolean" && r
  }, ...t);
}
const yo = Ua(), bo = "$$material";
function pn() {
  const e = As(yo);
  return process.env.NODE_ENV !== "production" && _.useDebugValue(e), e[bo] || e;
}
function Wa(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ga = (e) => Wa(e) && e !== "classes", Ge = Ms({
  themeId: bo,
  defaultTheme: yo,
  rootShouldForwardProp: Ga
});
process.env.NODE_ENV !== "production" && (l.node, l.object.isRequired);
function Ot(e) {
  return ia(e);
}
function Ya(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Bn(e, t) {
  return Bn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Bn(e, t);
}
function qa(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Bn(e, t);
}
const Br = {
  disabled: !1
};
var Ha = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.shape({
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
const vo = dt.createContext(null);
var Ka = function(t) {
  return t.scrollTop;
}, ht = "unmounted", je = "exited", Ve = "entering", et = "entered", Ln = "exiting", Re = /* @__PURE__ */ function(e) {
  qa(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = o, a = s && !s.isMounting ? r.enter : r.appear, d;
    return i.appearStatus = null, r.in ? a ? (d = je, i.appearStatus = Ve) : d = et : r.unmountOnExit || r.mountOnEnter ? d = ht : d = je, i.state = {
      status: d
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === ht ? {
      status: je
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Ve && s !== et && (i = Ve) : (s === Ve || s === et) && (i = Ln);
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
      if (this.cancelNextCallback(), i === Ve) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Dt.findDOMNode(this);
          s && Ka(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === je && this.setState({
      status: ht
    });
  }, n.performEnter = function(o) {
    var i = this, s = this.props.enter, a = this.context ? this.context.isMounting : o, d = this.props.nodeRef ? [a] : [Dt.findDOMNode(this), a], f = d[0], m = d[1], p = this.getTimeouts(), h = a ? p.appear : p.enter;
    if (!o && !s || Br.disabled) {
      this.safeSetState({
        status: et
      }, function() {
        i.props.onEntered(f);
      });
      return;
    }
    this.props.onEnter(f, m), this.safeSetState({
      status: Ve
    }, function() {
      i.props.onEntering(f, m), i.onTransitionEnd(h, function() {
        i.safeSetState({
          status: et
        }, function() {
          i.props.onEntered(f, m);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), a = this.props.nodeRef ? void 0 : Dt.findDOMNode(this);
    if (!i || Br.disabled) {
      this.safeSetState({
        status: je
      }, function() {
        o.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: Ln
    }, function() {
      o.props.onExiting(a), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: je
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
    var s = this.props.nodeRef ? this.props.nodeRef.current : Dt.findDOMNode(this), a = o == null && !this.props.addEndListener;
    if (!s || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var d = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], f = d[0], m = d[1];
      this.props.addEndListener(f, m);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === ht)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var a = Ya(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ dt.createElement(vo.Provider, {
        value: null
      }, typeof s == "function" ? s(o, a) : dt.cloneElement(dt.Children.only(s), a))
    );
  }, t;
}(dt.Component);
Re.contextType = vo;
Re.propTypes = process.env.NODE_ENV !== "production" ? {
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
    var n = Ha;
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
function Ze() {
}
Re.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ze,
  onEntering: Ze,
  onEntered: Ze,
  onExit: Ze,
  onExiting: Ze,
  onExited: Ze
};
Re.UNMOUNTED = ht;
Re.EXITED = je;
Re.ENTERING = Ve;
Re.ENTERED = et;
Re.EXITING = Ln;
const Eo = (e) => e.scrollTop;
function Kt(e, t) {
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
function Fn(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Qa = {
  entering: {
    opacity: 1,
    transform: Fn(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, On = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Qt = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    easing: s,
    in: a,
    onEnter: d,
    onEntered: f,
    onEntering: m,
    onExit: p,
    onExited: h,
    onExiting: g,
    style: y,
    timeout: c = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: E = Re,
    ...O
  } = t, N = Xs(), T = _.useRef(), S = pn(), b = _.useRef(null), $ = Le(b, dn(i), n), M = (R) => (k) => {
    if (R) {
      const Y = b.current;
      k === void 0 ? R(Y) : R(Y, k);
    }
  }, H = M(m), G = M((R, k) => {
    Eo(R);
    const {
      duration: Y,
      delay: Z,
      easing: he
    } = Kt({
      style: y,
      timeout: c,
      easing: s
    }, {
      mode: "enter"
    });
    let C;
    c === "auto" ? (C = S.transitions.getAutoHeightDuration(R.clientHeight), T.current = C) : C = Y, R.style.transition = [S.transitions.create("opacity", {
      duration: C,
      delay: Z
    }), S.transitions.create("transform", {
      duration: On ? C : C * 0.666,
      delay: Z,
      easing: he
    })].join(","), d && d(R, k);
  }), u = M(f), A = M(g), I = M((R) => {
    const {
      duration: k,
      delay: Y,
      easing: Z
    } = Kt({
      style: y,
      timeout: c,
      easing: s
    }, {
      mode: "exit"
    });
    let he;
    c === "auto" ? (he = S.transitions.getAutoHeightDuration(R.clientHeight), T.current = he) : he = k, R.style.transition = [S.transitions.create("opacity", {
      duration: he,
      delay: Y
    }), S.transitions.create("transform", {
      duration: On ? he : he * 0.666,
      delay: On ? Y : Y || he * 0.333,
      easing: Z
    })].join(","), R.style.opacity = 0, R.style.transform = Fn(0.75), p && p(R);
  }), z = M(h);
  return /* @__PURE__ */ x(E, {
    appear: o,
    in: a,
    nodeRef: b,
    onEnter: G,
    onEntered: u,
    onEntering: H,
    onExit: I,
    onExited: z,
    onExiting: A,
    addEndListener: (R) => {
      c === "auto" && N.start(T.current || 0, R), r && r(b.current, R);
    },
    timeout: c === "auto" ? null : c,
    ...O,
    children: (R, {
      ownerState: k,
      ...Y
    }) => /* @__PURE__ */ _.cloneElement(i, {
      style: {
        opacity: 0,
        transform: Fn(0.75),
        visibility: R === "exited" && !a ? "hidden" : void 0,
        ...Qa[R],
        ...y,
        ...i.props.style
      },
      ref: $,
      ...Y
    })
  });
});
process.env.NODE_ENV !== "production" && (Qt.propTypes = {
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
  children: wt.isRequired,
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
Qt && (Qt.muiSupportAuto = !0);
function Xa(e) {
  const t = ke(e);
  return t.body === e ? it(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function bt(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Lr(e) {
  return parseInt(it(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Ja(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Fr(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = !i.includes(s), d = !Ja(s);
    a && d && bt(s, o);
  });
}
function Rn(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function Za(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Xa(r)) {
      const s = Js(it(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Lr(r) + s}px`;
      const a = ke(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (d) => {
        n.push({
          value: d.style.paddingRight,
          property: "padding-right",
          el: d
        }), d.style.paddingRight = `${Lr(d) + s}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = ke(r).body;
    else {
      const s = r.parentElement, a = it(r);
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
function el(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class tl {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && bt(t.modalRef, !1);
    const o = el(n);
    Fr(n, t.mount, t.modalRef, o, !0);
    const i = Rn(this.containers, (s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = Rn(this.containers, (i) => i.modals.includes(t)), o = this.containers[r];
    o.restore || (o.restore = Za(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = Rn(this.containers, (s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && bt(t.modalRef, n), Fr(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && bt(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const nl = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function rl(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function ol(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function il(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || ol(e));
}
function sl(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(nl)).forEach((r, o) => {
    const i = rl(r);
    i === -1 || !il(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function al() {
  return !0;
}
function Xt(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = sl,
    isEnabled: s = al,
    open: a
  } = e, d = _.useRef(!1), f = _.useRef(null), m = _.useRef(null), p = _.useRef(null), h = _.useRef(null), g = _.useRef(!1), y = _.useRef(null), c = Le(dn(t), y), E = _.useRef(null);
  _.useEffect(() => {
    !a || !y.current || (g.current = !n);
  }, [n, a]), _.useEffect(() => {
    if (!a || !y.current)
      return;
    const T = ke(y.current);
    return y.current.contains(T.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), g.current && y.current.focus()), () => {
      o || (p.current && p.current.focus && (d.current = !0, p.current.focus()), p.current = null);
    };
  }, [a]), _.useEffect(() => {
    if (!a || !y.current)
      return;
    const T = ke(y.current), S = (M) => {
      E.current = M, !(r || !s() || M.key !== "Tab") && T.activeElement === y.current && M.shiftKey && (d.current = !0, m.current && m.current.focus());
    }, b = () => {
      var G, u;
      const M = y.current;
      if (M === null)
        return;
      if (!T.hasFocus() || !s() || d.current) {
        d.current = !1;
        return;
      }
      if (M.contains(T.activeElement) || r && T.activeElement !== f.current && T.activeElement !== m.current)
        return;
      if (T.activeElement !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!g.current)
        return;
      let H = [];
      if ((T.activeElement === f.current || T.activeElement === m.current) && (H = i(y.current)), H.length > 0) {
        const A = !!((G = E.current) != null && G.shiftKey && ((u = E.current) == null ? void 0 : u.key) === "Tab"), I = H[0], z = H[H.length - 1];
        typeof I != "string" && typeof z != "string" && (A ? z.focus() : I.focus());
      } else
        M.focus();
    };
    T.addEventListener("focusin", b), T.addEventListener("keydown", S, !0);
    const $ = setInterval(() => {
      T.activeElement && T.activeElement.tagName === "BODY" && b();
    }, 50);
    return () => {
      clearInterval($), T.removeEventListener("focusin", b), T.removeEventListener("keydown", S, !0);
    };
  }, [n, r, o, s, a, i]);
  const O = (T) => {
    p.current === null && (p.current = T.relatedTarget), g.current = !0, h.current = T.target;
    const S = t.props.onFocus;
    S && S(T);
  }, N = (T) => {
    p.current === null && (p.current = T.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ re(_.Fragment, {
    children: [/* @__PURE__ */ x("div", {
      tabIndex: a ? 0 : -1,
      onFocus: N,
      ref: f,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ _.cloneElement(t, {
      ref: c,
      onFocus: O
    }), /* @__PURE__ */ x("div", {
      tabIndex: a ? 0 : -1,
      onFocus: N,
      ref: m,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Xt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: wt,
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
process.env.NODE_ENV !== "production" && (Xt.propTypes = co(Xt.propTypes));
function ll(e) {
  return typeof e == "function" ? e() : e;
}
const Jt = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, a] = _.useState(null), d = Le(/* @__PURE__ */ _.isValidElement(r) ? dn(r) : null, n);
  if ($n(() => {
    i || a(ll(o) || document.body);
  }, [o, i]), $n(() => {
    if (s && !i)
      return In(n, s), () => {
        In(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ _.isValidElement(r)) {
      const f = {
        ref: d
      };
      return /* @__PURE__ */ _.cloneElement(r, f);
    }
    return r;
  }
  return s && /* @__PURE__ */ ei.createPortal(r, s);
});
process.env.NODE_ENV !== "production" && (Jt.propTypes = {
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
  container: l.oneOfType([Gt, l.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: l.bool
});
process.env.NODE_ENV !== "production" && (Jt.propTypes = co(Jt.propTypes));
const Kn = sa;
function st(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: o,
    externalForwardedProps: i,
    internalForwardedProps: s,
    shouldForwardComponentProp: a = !1,
    ...d
  } = t, {
    component: f,
    slots: m = {
      [e]: void 0
    },
    slotProps: p = {
      [e]: void 0
    },
    ...h
  } = i, g = m[e] || r, y = na(p[e], o), {
    props: {
      component: c,
      ...E
    },
    internalRef: O
  } = ta({
    className: n,
    ...d,
    externalForwardedProps: e === "root" ? h : void 0,
    externalSlotProps: y
  }), N = Le(O, y == null ? void 0 : y.ref, t.ref), T = e === "root" ? c || f : c, S = ea(g, {
    ...e === "root" && !f && !m[e] && s,
    ...e !== "root" && !m[e] && s,
    ...E,
    ...T && !a && {
      as: T
    },
    ...T && a && {
      component: T
    },
    ref: N
  }, o);
  return [g, S];
}
const cl = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, xo = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = pn(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: a,
    easing: d,
    in: f,
    onEnter: m,
    onEntered: p,
    onEntering: h,
    onExit: g,
    onExited: y,
    onExiting: c,
    style: E,
    timeout: O = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: N = Re,
    ...T
  } = t, S = _.useRef(null), b = Le(S, dn(a), n), $ = (F) => (R) => {
    if (F) {
      const k = S.current;
      R === void 0 ? F(k) : F(k, R);
    }
  }, M = $(h), H = $((F, R) => {
    Eo(F);
    const k = Kt({
      style: E,
      timeout: O,
      easing: d
    }, {
      mode: "enter"
    });
    F.style.webkitTransition = r.transitions.create("opacity", k), F.style.transition = r.transitions.create("opacity", k), m && m(F, R);
  }), G = $(p), u = $(c), A = $((F) => {
    const R = Kt({
      style: E,
      timeout: O,
      easing: d
    }, {
      mode: "exit"
    });
    F.style.webkitTransition = r.transitions.create("opacity", R), F.style.transition = r.transitions.create("opacity", R), g && g(F);
  }), I = $(y);
  return /* @__PURE__ */ x(N, {
    appear: s,
    in: f,
    nodeRef: S,
    onEnter: H,
    onEntered: G,
    onEntering: M,
    onExit: A,
    onExited: I,
    onExiting: u,
    addEndListener: (F) => {
      i && i(S.current, F);
    },
    timeout: O,
    ...T,
    children: (F, {
      ownerState: R,
      ...k
    }) => /* @__PURE__ */ _.cloneElement(a, {
      style: {
        opacity: 0,
        visibility: F === "exited" && !f ? "hidden" : void 0,
        ...cl[F],
        ...E,
        ...a.props.style
      },
      ref: b,
      ...k
    })
  });
});
process.env.NODE_ENV !== "production" && (xo.propTypes = {
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
  children: wt.isRequired,
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
function ul(e) {
  return We("MuiBackdrop", e);
}
Ct("MuiBackdrop", ["root", "invisible"]);
const fl = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return Et({
    root: ["root", n && "invisible"]
  }, ul, t);
}, dl = Ge("div", {
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
}), So = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ot({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: o,
    className: i,
    component: s = "div",
    invisible: a = !1,
    open: d,
    components: f = {},
    componentsProps: m = {},
    slotProps: p = {},
    slots: h = {},
    TransitionComponent: g,
    transitionDuration: y,
    ...c
  } = r, E = {
    ...r,
    component: s,
    invisible: a
  }, O = fl(E), N = {
    transition: g,
    root: f.Root,
    ...h
  }, T = {
    ...m,
    ...p
  }, S = {
    slots: N,
    slotProps: T
  }, [b, $] = st("root", {
    elementType: dl,
    externalForwardedProps: S,
    className: Pe(O.root, i),
    ownerState: E
  }), [M, H] = st("transition", {
    elementType: xo,
    externalForwardedProps: S,
    ownerState: E
  });
  return /* @__PURE__ */ x(M, {
    in: d,
    timeout: y,
    ...c,
    ...H,
    children: /* @__PURE__ */ x(b, {
      "aria-hidden": !0,
      ...$,
      classes: O,
      ref: n,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (So.propTypes = {
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
function pl(e) {
  return typeof e == "function" ? e() : e;
}
function ml(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const jr = () => {
}, Vt = new tl();
function hl(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    closeAfterTransition: o = !1,
    onTransitionEnter: i,
    onTransitionExited: s,
    children: a,
    onClose: d,
    open: f,
    rootRef: m
  } = e, p = _.useRef({}), h = _.useRef(null), g = _.useRef(null), y = Le(g, m), [c, E] = _.useState(!f), O = ml(a);
  let N = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (N = !1);
  const T = () => ke(h.current), S = () => (p.current.modalRef = g.current, p.current.mount = h.current, p.current), b = () => {
    Vt.mount(S(), {
      disableScrollLock: r
    }), g.current && (g.current.scrollTop = 0);
  }, $ = Or(() => {
    const R = pl(t) || T().body;
    Vt.add(S(), R), g.current && b();
  }), M = () => Vt.isTopModal(S()), H = Or((R) => {
    h.current = R, R && (f && M() ? b() : g.current && bt(g.current, N));
  }), G = _.useCallback(() => {
    Vt.remove(S(), N);
  }, [N]);
  _.useEffect(() => () => {
    G();
  }, [G]), _.useEffect(() => {
    f ? $() : (!O || !o) && G();
  }, [f, G, O, o, $]);
  const u = (R) => (k) => {
    var Y;
    (Y = R.onKeyDown) == null || Y.call(R, k), !(k.key !== "Escape" || k.which === 229 || // Wait until IME is settled.
    !M()) && (n || (k.stopPropagation(), d && d(k, "escapeKeyDown")));
  }, A = (R) => (k) => {
    var Y;
    (Y = R.onClick) == null || Y.call(R, k), k.target === k.currentTarget && d && d(k, "backdropClick");
  };
  return {
    getRootProps: (R = {}) => {
      const k = uo(e);
      delete k.onTransitionEnter, delete k.onTransitionExited;
      const Y = {
        ...k,
        ...R
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...Y,
        onKeyDown: u(Y),
        ref: y
      };
    },
    getBackdropProps: (R = {}) => {
      const k = R;
      return {
        "aria-hidden": !0,
        ...k,
        onClick: A(k),
        open: f
      };
    },
    getTransitionProps: () => {
      const R = () => {
        E(!1), i && i();
      }, k = () => {
        E(!0), s && s(), o && G();
      };
      return {
        onEnter: wr(R, (a == null ? void 0 : a.props.onEnter) ?? jr),
        onExited: wr(k, (a == null ? void 0 : a.props.onExited) ?? jr)
      };
    },
    rootRef: y,
    portalRef: H,
    isTopModal: M,
    exited: c,
    hasTransition: O
  };
}
function gl(e) {
  return We("MuiModal", e);
}
Ct("MuiModal", ["root", "hidden", "backdrop"]);
function yl(e) {
  return We("MuiSvgIcon", e);
}
Ct("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const bl = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Ue(t)}`, `fontSize${Ue(n)}`]
  };
  return Et(o, yl, r);
}, vl = Ge("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${Ue(n.color)}`], t[`fontSize${Ue(n.fontSize)}`]];
  }
})(Kn(({
  theme: e
}) => {
  var t, n, r, o, i, s, a, d, f, m, p, h, g, y;
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
        props: (c) => !c.hasSvgAsChild,
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
          fontSize: ((d = (a = e.typography) == null ? void 0 : a.pxToRem) == null ? void 0 : d.call(a, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((m = (f = e.typography) == null ? void 0 : f.pxToRem) == null ? void 0 : m.call(f, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, c]) => c && c.main).map(([c]) => {
        var E, O;
        return {
          props: {
            color: c
          },
          style: {
            color: (O = (E = (e.vars ?? e).palette) == null ? void 0 : E[c]) == null ? void 0 : O.main
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
          color: (y = (g = (e.vars ?? e).palette) == null ? void 0 : g.action) == null ? void 0 : y.disabled
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
})), Zt = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ot({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: a = "svg",
    fontSize: d = "medium",
    htmlColor: f,
    inheritViewBox: m = !1,
    titleAccess: p,
    viewBox: h = "0 0 24 24",
    ...g
  } = r, y = /* @__PURE__ */ _.isValidElement(o) && o.type === "svg", c = {
    ...r,
    color: s,
    component: a,
    fontSize: d,
    instanceFontSize: t.fontSize,
    inheritViewBox: m,
    viewBox: h,
    hasSvgAsChild: y
  }, E = {};
  m || (E.viewBox = h);
  const O = bl(c);
  return /* @__PURE__ */ re(vl, {
    as: a,
    className: Pe(O.root, i),
    focusable: "false",
    color: f,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: n,
    ...E,
    ...g,
    ...y && o.props,
    ownerState: c,
    children: [y ? o.props.children : o, p ? /* @__PURE__ */ x("title", {
      children: p
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Zt.propTypes = {
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
Zt.muiName = "SvgIcon";
function Qn(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ x(Zt, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...r,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = Zt.muiName, /* @__PURE__ */ _.memo(/* @__PURE__ */ _.forwardRef(n));
}
const El = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return Et({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, gl, r);
}, xl = Ge("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(Kn(({
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
}))), Sl = Ge(So, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), To = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ot({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: o = Sl,
    BackdropProps: i,
    classes: s,
    className: a,
    closeAfterTransition: d = !1,
    children: f,
    container: m,
    component: p,
    components: h = {},
    componentsProps: g = {},
    disableAutoFocus: y = !1,
    disableEnforceFocus: c = !1,
    disableEscapeKeyDown: E = !1,
    disablePortal: O = !1,
    disableRestoreFocus: N = !1,
    disableScrollLock: T = !1,
    hideBackdrop: S = !1,
    keepMounted: b = !1,
    onBackdropClick: $,
    onClose: M,
    onTransitionEnter: H,
    onTransitionExited: G,
    open: u,
    slotProps: A = {},
    slots: I = {},
    // eslint-disable-next-line react/prop-types
    theme: z,
    ...F
  } = r, R = {
    ...r,
    closeAfterTransition: d,
    disableAutoFocus: y,
    disableEnforceFocus: c,
    disableEscapeKeyDown: E,
    disablePortal: O,
    disableRestoreFocus: N,
    disableScrollLock: T,
    hideBackdrop: S,
    keepMounted: b
  }, {
    getRootProps: k,
    getBackdropProps: Y,
    getTransitionProps: Z,
    portalRef: he,
    isTopModal: C,
    exited: P,
    hasTransition: q
  } = hl({
    ...R,
    rootRef: n
  }), j = {
    ...R,
    exited: P
  }, B = El(j), L = {};
  if (f.props.tabIndex === void 0 && (L.tabIndex = "-1"), q) {
    const {
      onEnter: w,
      onExited: ce
    } = Z();
    L.onEnter = w, L.onExited = ce;
  }
  const V = {
    ...F,
    slots: {
      root: h.Root,
      backdrop: h.Backdrop,
      ...I
    },
    slotProps: {
      ...g,
      ...A
    }
  }, [W, X] = st("root", {
    elementType: xl,
    externalForwardedProps: V,
    getSlotProps: k,
    additionalProps: {
      ref: n,
      as: p
    },
    ownerState: j,
    className: Pe(a, B == null ? void 0 : B.root, !j.open && j.exited && (B == null ? void 0 : B.hidden))
  }), [J, D] = st("backdrop", {
    elementType: o,
    externalForwardedProps: V,
    additionalProps: i,
    getSlotProps: (w) => Y({
      ...w,
      onClick: (ce) => {
        $ && $(ce), w != null && w.onClick && w.onClick(ce);
      }
    }),
    className: Pe(i == null ? void 0 : i.className, B == null ? void 0 : B.backdrop),
    ownerState: j
  }), Q = Le(i == null ? void 0 : i.ref, D.ref);
  return !b && !u && (!q || P) ? null : /* @__PURE__ */ x(Jt, {
    ref: he,
    container: m,
    disablePortal: O,
    children: /* @__PURE__ */ re(W, {
      ...X,
      children: [!S && o ? /* @__PURE__ */ x(J, {
        ...D,
        ref: Q
      }) : null, /* @__PURE__ */ x(Xt, {
        disableEnforceFocus: c,
        disableAutoFocus: y,
        disableRestoreFocus: N,
        isEnabled: C,
        open: u,
        children: /* @__PURE__ */ _.cloneElement(f, L)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (To.propTypes = {
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
  children: wt.isRequired,
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
  container: l.oneOfType([Gt, l.func]),
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
function Tl(e) {
  return We("MuiPaper", e);
}
Ct("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Cl = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return Et(i, Tl, o);
}, wl = Ge("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(Kn(({
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
}))), Co = /* @__PURE__ */ _.forwardRef(function(t, n) {
  var g;
  const r = Ot({
    props: t,
    name: "MuiPaper"
  }), o = pn(), {
    className: i,
    component: s = "div",
    elevation: a = 1,
    square: d = !1,
    variant: f = "elevation",
    ...m
  } = r, p = {
    ...r,
    component: s,
    elevation: a,
    square: d,
    variant: f
  }, h = Cl(p);
  return process.env.NODE_ENV !== "production" && o.shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ x(wl, {
    as: s,
    ownerState: p,
    className: Pe(h.root, i),
    ref: n,
    ...m,
    style: {
      ...f === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[a],
        ...o.vars && {
          "--Paper-overlay": (g = o.vars.overlays) == null ? void 0 : g[a]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${_n("#fff", Mn(a))}, ${_n("#fff", Mn(a))})`
        }
      },
      ...m.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Co.propTypes = {
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
  elevation: xt(Jr, (e) => {
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
function Ol(e) {
  return We("MuiPopover", e);
}
Ct("MuiPopover", ["root", "paper"]);
function Vr(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function zr(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Ur(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Ut(e) {
  return typeof e == "function" ? e() : e;
}
const Rl = (e) => {
  const {
    classes: t
  } = e;
  return Et({
    root: ["root"],
    paper: ["paper"]
  }, Ol, t);
}, Al = Ge(To, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Nl = Ge(Co, {
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
}), wo = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ot({
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
    anchorReference: d = "anchorEl",
    children: f,
    className: m,
    container: p,
    elevation: h = 8,
    marginThreshold: g = 16,
    open: y,
    PaperProps: c = {},
    slots: E = {},
    slotProps: O = {},
    transformOrigin: N = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: T = Qt,
    transitionDuration: S = "auto",
    TransitionProps: {
      onEntering: b,
      ...$
    } = {},
    disableScrollLock: M = !1,
    ...H
  } = r, G = (O == null ? void 0 : O.paper) ?? c, u = _.useRef(), A = {
    ...r,
    anchorOrigin: s,
    anchorReference: d,
    elevation: h,
    marginThreshold: g,
    externalPaperSlotProps: G,
    transformOrigin: N,
    TransitionComponent: T,
    transitionDuration: S,
    TransitionProps: $
  }, I = Rl(A), z = _.useCallback(() => {
    if (d === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (a || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), a;
    const D = Ut(i), Q = D && D.nodeType === 1 ? D : ke(u.current).body, w = Q.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ce = Q.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ce.top === 0 && ce.left === 0 && ce.right === 0 && ce.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: w.top + Vr(w, s.vertical),
      left: w.left + zr(w, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, a, d]), F = _.useCallback((D) => ({
    vertical: Vr(D, N.vertical),
    horizontal: zr(D, N.horizontal)
  }), [N.horizontal, N.vertical]), R = _.useCallback((D) => {
    const Q = {
      width: D.offsetWidth,
      height: D.offsetHeight
    }, w = F(Q);
    if (d === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Ur(w)
      };
    const ce = z();
    let ye = ce.top - w.vertical, ge = ce.left - w.horizontal;
    const Ye = ye + Q.height, lt = ge + Q.width, Rt = it(Ut(i)), Fe = Rt.innerHeight - g, At = Rt.innerWidth - g;
    if (g !== null && ye < g) {
      const be = ye - g;
      ye -= be, w.vertical += be;
    } else if (g !== null && Ye > Fe) {
      const be = Ye - Fe;
      ye -= be, w.vertical += be;
    }
    if (process.env.NODE_ENV !== "production" && Q.height > Fe && Q.height && Fe && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${Q.height - Fe}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), g !== null && ge < g) {
      const be = ge - g;
      ge -= be, w.horizontal += be;
    } else if (lt > At) {
      const be = lt - At;
      ge -= be, w.horizontal += be;
    }
    return {
      top: `${Math.round(ye)}px`,
      left: `${Math.round(ge)}px`,
      transformOrigin: Ur(w)
    };
  }, [i, d, z, F, g]), [k, Y] = _.useState(y), Z = _.useCallback(() => {
    const D = u.current;
    if (!D)
      return;
    const Q = R(D);
    Q.top !== null && D.style.setProperty("top", Q.top), Q.left !== null && (D.style.left = Q.left), D.style.transformOrigin = Q.transformOrigin, Y(!0);
  }, [R]);
  _.useEffect(() => (M && window.addEventListener("scroll", Z), () => window.removeEventListener("scroll", Z)), [i, M, Z]);
  const he = (D, Q) => {
    b && b(D, Q), Z();
  }, C = () => {
    Y(!1);
  };
  _.useEffect(() => {
    y && Z();
  }), _.useImperativeHandle(o, () => y ? {
    updatePosition: () => {
      Z();
    }
  } : null, [y, Z]), _.useEffect(() => {
    if (!y)
      return;
    const D = qs(() => {
      Z();
    }), Q = it(i);
    return Q.addEventListener("resize", D), () => {
      D.clear(), Q.removeEventListener("resize", D);
    };
  }, [i, y, Z]);
  let P = S;
  S === "auto" && !T.muiSupportAuto && (P = void 0);
  const q = p || (i ? ke(Ut(i)).body : void 0), j = {
    slots: E,
    slotProps: {
      ...O,
      paper: G
    }
  }, [B, L] = st("paper", {
    elementType: Nl,
    externalForwardedProps: j,
    additionalProps: {
      elevation: h,
      className: Pe(I.paper, G == null ? void 0 : G.className),
      style: k ? G.style : {
        ...G.style,
        opacity: 0
      }
    },
    ownerState: A
  }), [V, {
    slotProps: W,
    ...X
  }] = st("root", {
    elementType: Al,
    externalForwardedProps: j,
    additionalProps: {
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: q,
      open: y
    },
    ownerState: A,
    className: Pe(I.root, m)
  }), J = Le(u, L.ref);
  return /* @__PURE__ */ x(V, {
    ...X,
    ...!hi(V) && {
      slotProps: W,
      disableScrollLock: M
    },
    ...H,
    ref: n,
    children: /* @__PURE__ */ x(T, {
      appear: !0,
      in: y,
      onEntering: he,
      onExited: C,
      timeout: P,
      ...$,
      children: /* @__PURE__ */ x(B, {
        ...L,
        ref: J,
        children: f
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (wo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: ui,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: xt(l.oneOfType([Gt, l.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Ut(e.anchorEl);
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
  container: l.oneOfType([Gt, l.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: l.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Jr,
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
    component: pi
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
const Pl = Qn(/* @__PURE__ */ x("path", {
  d: "M3 17v2h6v-2zM3 5v2h10V5zm10 16v-2h8v-2h-8v-2h-2v6zM7 9v2H3v2h4v2h2V9zm14 4v-2H11v2zm-6-4h2V7h4V5h-4V3h-2z"
}), "Tune"), Wr = ["IS NULL", "IS NOT NULL", "is_null", "is_not_null"], $l = [
  "IS NOT NULL",
  "IS NULL",
  "NOT IN",
  "starts with",
  "ends with"
];
function kl(e, t, n) {
  return [...t].sort((o, i) => i.length - o.length), _l(e);
}
function _l(e, t, n) {
  if (e = (e || "").trim(), !e) return { type: "group", combinator: "AND", not: !1, rules: [] };
  const r = Il(e);
  return Dl(r);
}
function Il(e) {
  const t = [];
  let n = 0;
  for (; n < e.length; ) {
    if (e[n] === " " || e[n] === "	") {
      n++;
      continue;
    }
    if (e[n] === "(")
      t.push({ type: "paren", value: "(" }), n++;
    else if (e[n] === ")")
      t.push({ type: "paren", value: ")" }), n++;
    else if (e[n] === '"') {
      let r = n + 1;
      for (; r < e.length && e[r] !== '"'; ) r++;
      t.push({ type: "word", value: e.slice(n, r + 1) }), n = r + 1;
    } else if (e[n] === "[") {
      let r = n + 1, o = 1;
      for (; r < e.length && o > 0; )
        e[r] === "[" ? o++ : e[r] === "]" && o--, o > 0 && r++;
      t.push({ type: "word", value: e.slice(n, r + 1) }), n = r + 1;
    } else {
      let r = n;
      for (; r < e.length && e[r] !== " " && e[r] !== "	" && e[r] !== "(" && e[r] !== ")" && e[r] !== "["; )
        r++;
      t.push({ type: "word", value: e.slice(n, r) }), n = r;
    }
  }
  return t;
}
function Dl(e, t, n) {
  let r = 0;
  function o() {
    for (const f of $l) {
      const m = f.split(" ");
      let p = !0;
      for (let h = 0; h < m.length; h++) {
        const g = r + h;
        if (g >= e.length || e[g].type !== "word" || e[g].value.toUpperCase() !== m[h].toUpperCase()) {
          p = !1;
          break;
        }
      }
      if (p) return { op: f, wordCount: m.length };
    }
    return null;
  }
  function i() {
    const f = [], m = [];
    for (f.push(a()); r < e.length; ) {
      const g = e[r];
      if (g && g.type === "word" && (g.value.toUpperCase() === "AND" || g.value.toUpperCase() === "OR"))
        m.push(g.value.toUpperCase()), r++, f.push(a());
      else
        break;
    }
    if (f.length === 1) return f[0];
    const p = m[0] || "AND";
    return m.every((g) => g === p) ? { type: "group", combinator: p, not: !1, rules: f } : s(f, m);
  }
  function s(f, m) {
    const p = [];
    let h = [f[0]];
    for (let g = 0; g < m.length; g++)
      m[g] === "AND" ? h.push(f[g + 1]) : (h.length === 1 ? p.push(h[0]) : p.push({
        type: "group",
        combinator: "AND",
        not: !1,
        rules: h
      }), h = [f[g + 1]]);
    return h.length === 1 ? p.push(h[0]) : p.push({
      type: "group",
      combinator: "AND",
      not: !1,
      rules: h
    }), { type: "group", combinator: "OR", not: !1, rules: p };
  }
  function a() {
    if (r >= e.length)
      return { type: "rule", column: "", operator: "", value: "" };
    const f = e[r];
    if (f.type === "word" && f.value.toUpperCase() === "NOT") {
      const c = e[r + 1];
      if (!(c && c.type === "word" && c.value.toUpperCase() === "IN")) {
        r++;
        const E = a();
        return E.type === "group" ? { ...E, not: !0 } : { type: "group", combinator: "AND", not: !0, rules: [E] };
      }
    }
    if (f.type === "paren" && f.value === "(") {
      r++;
      const c = i();
      return r < e.length && e[r].type === "paren" && e[r].value === ")" && r++, c.type === "group" ? c : { type: "group", combinator: "AND", not: !1, rules: [c] };
    }
    const m = f.value;
    if (r++, r >= e.length)
      return { type: "rule", column: m, operator: "", value: "" };
    const p = o();
    let h;
    if (p)
      h = p.op, r += p.wordCount;
    else {
      const c = e[r];
      h = c ? c.value : "", r++;
    }
    if (at(h))
      return { type: "rule", column: m, operator: h, value: "" };
    if (r >= e.length)
      return { type: "rule", column: m, operator: h, value: "" };
    let g = "";
    const y = e[r];
    if (y && y.type === "word" && y.value.toUpperCase() !== "AND" && y.value.toUpperCase() !== "OR")
      g = y.value, r++;
    else if (y && y.type === "paren" && (h.toUpperCase() === "IN" || h.toUpperCase() === "NOT IN" || h === "in" || h === "not_in") && y.value === "(") {
      let c = "(";
      for (r++; r < e.length; ) {
        if (e[r].type === "paren" && e[r].value === ")") {
          c += ")", r++;
          break;
        }
        c += e[r].value, r++;
      }
      g = c;
    }
    return { type: "rule", column: m, operator: h, value: g };
  }
  const d = i();
  return d.type === "rule" ? { type: "group", combinator: "AND", not: !1, rules: [d] } : d;
}
function at(e) {
  return Wr.includes(e) || Wr.includes(e.toUpperCase());
}
function Ml(e, t) {
  if (e = (e || "").trim(), !e)
    return { isValid: !0, error: null };
  let n = 0;
  for (const f of e)
    if (f === "(" && n++, f === ")" && n--, n < 0)
      return {
        isValid: !1,
        error: "Unmatched closing parenthesis `)`. Check your grouping."
      };
  if (n > 0)
    return {
      isValid: !1,
      error: "Unclosed opening parenthesis `(`. Add the matching `)` to close the group."
    };
  let r = 0;
  for (const f of e)
    if (f === "[" && r++, f === "]" && r--, r < 0)
      return {
        isValid: !1,
        error: "Unmatched closing bracket `]`."
      };
  if (r > 0)
    return {
      isValid: !1,
      error: "Unclosed bracket `[`. Add the matching `]`."
    };
  if ((e.match(/"/g) || []).length % 2 !== 0)
    return {
      isValid: !1,
      error: 'Unclosed quoted value. Make sure every `"` has a matching `"`.'
    };
  if (/\b(AND|OR)\s*$/i.test(e))
    return {
      isValid: !1,
      error: "Query ends with AND/OR. Add another condition after it."
    };
  const s = e.replace(/^\s*\(\s*/, "");
  if (/^\s*(AND|OR)\b/i.test(s))
    return {
      isValid: !1,
      error: "Query starts with AND/OR. Add a condition before it."
    };
  if (/\(\s*\)/.test(
    e.replace(/\b(?:in|IN|NOT\s+IN|not_in)\s*\([^)]*\)/g, "")
  ))
    return {
      isValid: !1,
      error: "Empty parentheses `()` found. Add conditions inside the group."
    };
  const d = e.replace(/[()[\]]/g, " ").split(/\s+(?:AND|OR)\s+/i);
  for (const f of d) {
    const m = f.trim();
    if (!m) continue;
    if (m.split(/\s+/).length < 2)
      return {
        isValid: !1,
        error: 'Incomplete condition. Expected: <column> <operator> <value> (e.g. name == "John").'
      };
  }
  return { isValid: !0, error: null };
}
function Bl(e, t, n, r) {
  if (!e) return [];
  const o = /"[^"]*"?|\[[^\]]*\]?|[()]|\s+|[^\s()]+/g, i = e.match(o) || [], s = t || [], a = n || [], d = (r || []).map((g) => g.toUpperCase()), f = a.filter((g) => g.includes(" ")), m = [];
  let p = "column", h = 0;
  for (; h < i.length; ) {
    const g = i[h];
    if (/^\s+$/.test(g)) {
      m.push({ type: "whitespace", text: g }), h++;
      continue;
    }
    if (g === "(" || g === ")") {
      m.push({ type: "paren", text: g }), g === "(" ? p === "value" ? p = "listValue" : p = "column" : g === ")" && p === "listValue" && (p = "logical"), h++;
      continue;
    }
    if (g.toUpperCase() === "NOT" && p === "column") {
      m.push({ type: "logical", text: g }), h++;
      continue;
    }
    if (p === "operator") {
      let c = null;
      for (const E of f) {
        const O = E.split(" ");
        let N = h, T = !0;
        const S = [];
        for (const b of O) {
          for (; N < i.length && /^\s+$/.test(i[N]); )
            S.push(i[N]), N++;
          if (N >= i.length || i[N].toUpperCase() !== b.toUpperCase()) {
            T = !1;
            break;
          }
          S.push(i[N]), N++;
        }
        if (T) {
          c = { text: S.join(""), endIdx: N, op: E };
          break;
        }
      }
      if (c) {
        for (let E = h; E < c.endIdx; E++)
          /^\s+$/.test(i[E]) ? m.push({ type: "whitespace", text: i[E] }) : m.push({ type: "operator", text: i[E] });
        h = c.endIdx, at(c.op) ? p = "logical" : p = "value";
        continue;
      }
    }
    let y;
    p === "column" ? d.includes(g.toUpperCase()) ? (y = "logical", p = "column") : (y = s.includes(g) ? "column" : "customColumn", p = "operator") : p === "operator" ? (y = a.includes(g) ? "operator" : "unknownOperator", at(g) ? p = "logical" : p = "value") : p === "value" ? (y = "value", p = "logical") : p === "listValue" ? y = "value" : d.includes(g.toUpperCase()) ? (y = "logical", p = "column") : y = "value", m.push({ type: y, text: g }), h++;
  }
  return m;
}
function Oo(e) {
  if (!e || e.type !== "group") return [];
  const t = [];
  for (const n of e.rules || [])
    n.type === "rule" ? t.push({
      column: n.column,
      operator: n.operator,
      value: n.value
    }) : n.type === "group" && t.push(...Oo(n));
  return t;
}
function Ro(e) {
  if (!e || e.type !== "group") return "";
  const t = [];
  for (const r of e.rules || [])
    if (r.type === "rule" && r.column && r.operator)
      at(r.operator) ? t.push(`${r.column} ${r.operator}`) : t.push(`${r.column} ${r.operator} ${r.value}`);
    else if (r.type === "group") {
      const o = Ro(r);
      o && t.push(`(${o})`);
    }
  const n = t.join(` ${e.combinator} `);
  return e.not ? `NOT (${n})` : n;
}
const An = {
  flex: { xs: "1 1 100%", sm: 1 },
  minWidth: 0
};
function Ao() {
  return { type: "rule", column: "", operator: "", value: "" };
}
function No(e = "AND") {
  return {
    type: "group",
    combinator: e,
    not: !1,
    rules: [Ao()]
  };
}
const Ll = ({
  rule: e,
  index: t,
  columnsOperator: n,
  onChange: r,
  onDelete: o,
  sx: i = {}
}) => {
  var m;
  const { columnSelectSx: s, operatorSelectSx: a, valueInputSx: d, deleteButtonSx: f } = i;
  return /* @__PURE__ */ re(
    le,
    {
      sx: {
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 1, sm: 1.5 },
        alignItems: { xs: "stretch", sm: "center" },
        py: 0.5
      },
      children: [
        /* @__PURE__ */ re(
          er,
          {
            size: "small",
            value: e.column,
            onChange: (p) => r(t, "column", p.target.value),
            displayEmpty: !0,
            fullWidth: !0,
            sx: { ...An, ...s },
            children: [
              /* @__PURE__ */ x(It, { value: "", disabled: !0, children: "Select Column" }),
              Object.keys(n).map((p) => /* @__PURE__ */ x(It, { value: p, children: p }, p))
            ]
          }
        ),
        /* @__PURE__ */ re(
          er,
          {
            size: "small",
            value: e.operator,
            onChange: (p) => r(t, "operator", p.target.value),
            displayEmpty: !0,
            disabled: !e.column,
            fullWidth: !0,
            sx: { ...An, ...a },
            children: [
              /* @__PURE__ */ x(It, { value: "", disabled: !0, children: "Select Operator" }),
              e.column && ((m = n[e.column]) == null ? void 0 : m.operators.map((p) => /* @__PURE__ */ x(It, { value: p, children: p }, p)))
            ]
          }
        ),
        !at(e.operator) && /* @__PURE__ */ x(
          Uo,
          {
            size: "small",
            value: e.value,
            onChange: (p) => r(t, "value", p.target.value),
            placeholder: "Enter value",
            fullWidth: !0,
            sx: { ...An, ...d }
          }
        ),
        /* @__PURE__ */ x(nt, { title: "Delete Rule", children: /* @__PURE__ */ x(
          ze,
          {
            onClick: () => o(t),
            color: "error",
            size: "small",
            sx: {
              alignSelf: { xs: "flex-end", sm: "center" },
              flex: { sm: "0 0 auto" },
              ...f
            },
            children: /* @__PURE__ */ x(Yr, { fontSize: "small" })
          }
        ) })
      ]
    }
  );
}, Po = ({
  group: e,
  path: t,
  columnsOperator: n,
  onChange: r,
  onDelete: o,
  isRoot: i,
  sx: s = {}
}) => {
  const a = (c, E) => {
    E !== null && r(t, { ...e, combinator: E });
  }, d = () => {
    r(t, { ...e, not: !e.not });
  }, f = () => {
    r(t, { ...e, rules: [...e.rules, Ao()] });
  }, m = () => {
    r(t, { ...e, rules: [...e.rules, No()] });
  }, p = (c, E, O) => {
    const N = e.rules.map((T, S) => {
      if (S !== c) return T;
      const b = { ...T, [E]: O };
      return E === "operator" && at(O) && (b.value = ""), b;
    });
    r(t, { ...e, rules: N });
  }, h = (c) => {
    const E = e.rules.filter((O, N) => N !== c);
    r(t, { ...e, rules: E });
  }, g = (c, E) => {
    const O = c[c.length - 1], N = e.rules.map(
      (T, S) => S === O ? E : T
    );
    r(t, { ...e, rules: N });
  }, y = (c) => {
    const E = e.rules.filter((O, N) => N !== c);
    r(t, { ...e, rules: E });
  };
  return /* @__PURE__ */ re(
    le,
    {
      sx: {
        border: i ? "none" : "1px solid",
        borderColor: "divider",
        borderRadius: 1,
        p: i ? 0 : 1.5,
        ml: i ? 0 : 2,
        mb: 1,
        bgcolor: i ? "transparent" : "action.hover"
      },
      children: [
        /* @__PURE__ */ re(
          le,
          {
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 1.5,
              flexWrap: "wrap"
            },
            children: [
              /* @__PURE__ */ x(
                jo,
                {
                  checked: e.not,
                  onClick: d,
                  size: "small",
                  sx: { p: 0.5 }
                }
              ),
              /* @__PURE__ */ x(ue, { variant: "body2", sx: { fontWeight: 500, mr: 0.5 }, children: "NOT" }),
              /* @__PURE__ */ re(
                Vo,
                {
                  value: e.combinator,
                  exclusive: !0,
                  onChange: a,
                  size: "small",
                  sx: { height: 28 },
                  children: [
                    /* @__PURE__ */ x(
                      Zn,
                      {
                        value: "AND",
                        sx: {
                          px: 1.5,
                          py: 0,
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          "&.Mui-selected": {
                            bgcolor: "primary.main",
                            color: "primary.contrastText",
                            "&:hover": { bgcolor: "primary.dark" }
                          }
                        },
                        children: "AND"
                      }
                    ),
                    /* @__PURE__ */ x(
                      Zn,
                      {
                        value: "OR",
                        sx: {
                          px: 1.5,
                          py: 0,
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          "&.Mui-selected": {
                            bgcolor: "primary.main",
                            color: "primary.contrastText",
                            "&:hover": { bgcolor: "primary.dark" }
                          }
                        },
                        children: "OR"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ x(le, { sx: { flex: 1 } }),
              /* @__PURE__ */ x(nt, { title: "Add Rule", children: /* @__PURE__ */ x(ze, { onClick: f, size: "small", color: "primary", children: /* @__PURE__ */ x(tr, { fontSize: "small" }) }) }),
              /* @__PURE__ */ x(nt, { title: "Add Group", children: /* @__PURE__ */ x(
                ze,
                {
                  onClick: m,
                  size: "small",
                  color: "primary",
                  sx: {
                    border: "1px solid",
                    borderColor: "primary.main",
                    borderRadius: "50%",
                    width: 28,
                    height: 28
                  },
                  children: /* @__PURE__ */ x(tr, { fontSize: "small" })
                }
              ) }),
              !i && /* @__PURE__ */ x(nt, { title: "Delete Group", children: /* @__PURE__ */ x(ze, { onClick: () => o(), color: "error", size: "small", children: /* @__PURE__ */ x(Yr, { fontSize: "small" }) }) })
            ]
          }
        ),
        /* @__PURE__ */ x(zo, { spacing: 1, children: e.rules.map(
          (c, E) => c.type === "group" ? /* @__PURE__ */ x(
            Po,
            {
              group: c,
              path: [...t, E],
              columnsOperator: n,
              onChange: g,
              onDelete: () => y(E),
              isRoot: !1,
              sx: s
            },
            E
          ) : /* @__PURE__ */ x(
            Ll,
            {
              rule: c,
              index: E,
              columnsOperator: n,
              onChange: p,
              onDelete: h,
              sx: s
            },
            E
          )
        ) })
      ]
    }
  );
}, Fl = ({
  columnsOperator: e,
  handleApplyFilters: t,
  defaultOperators: n,
  groupTree: r,
  sx: o = {}
}) => {
  const {
    root: i,
    actions: s,
    applyButton: a,
    cancelButton: d,
    ...f
  } = o, [m, p] = Se(
    () => r && r.type === "group" ? r : No("AND")
  );
  gt(() => {
    r && r.type === "group" && p(r);
  }, [r]);
  const h = (g, y) => {
    p(y);
  };
  return /* @__PURE__ */ re(
    le,
    {
      sx: {
        width: "100%",
        padding: { xs: 1, sm: 2 },
        boxSizing: "border-box",
        ...i
      },
      children: [
        /* @__PURE__ */ x(
          Po,
          {
            group: m,
            path: [],
            columnsOperator: e,
            onChange: h,
            onDelete: () => {
            },
            isRoot: !0,
            sx: f
          }
        ),
        /* @__PURE__ */ re(
          le,
          {
            sx: {
              display: "flex",
              justifyContent: "flex-end",
              gap: 1,
              mt: 2.5,
              ...s
            },
            children: [
              /* @__PURE__ */ x(
                Wt,
                {
                  variant: "contained",
                  color: "primary",
                  onClick: () => t(m),
                  sx: a,
                  children: "Search"
                }
              ),
              /* @__PURE__ */ x(Wt, { variant: "outlined", sx: d, children: "Cancel" })
            ]
          }
        )
      ]
    }
  );
}, jl = Qn(/* @__PURE__ */ x("path", {
  d: "M11 18h2v-2h-2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4"
}), "HelpOutline"), Vl = Qn(/* @__PURE__ */ x("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), zl = {
  column: "primary.main",
  customColumn: "info.main",
  operator: "error.main",
  unknownOperator: "text.disabled",
  logical: "secondary.main",
  paren: "warning.main",
  value: "text.primary"
}, Gr = {
  column: 400,
  customColumn: 400,
  operator: 600,
  unknownOperator: 400,
  logical: 600,
  paren: 700,
  value: 400
}, Ul = 'Type a query like: column operator value — e.g. name == "John"', Wl = ({ open: e, onClose: t, helpContent: n, sx: r = {} }) => {
  const {
    dialog: o,
    title: i,
    closeButton: s,
    content: a,
    sectionTitle: d,
    body: f,
    codeBlock: m,
    exampleBlock: p,
    exampleLabel: h,
    list: g,
    listItem: y,
    chip: c,
    divider: E,
    actions: O,
    gotItButton: N,
    colorLegendItem: T,
    colorSwatch: S,
    warningText: b
  } = r;
  return /* @__PURE__ */ re(
    Qo,
    {
      open: e,
      onClose: t,
      maxWidth: "md",
      fullWidth: !0,
      scroll: "paper",
      sx: o,
      children: [
        /* @__PURE__ */ re(Xo, { sx: { pr: 6, ...i }, children: [
          "How to Use the Query Search",
          /* @__PURE__ */ x(
            ze,
            {
              onClick: t,
              size: "small",
              sx: { position: "absolute", right: 12, top: 12, ...s },
              "aria-label": "close",
              children: /* @__PURE__ */ x(Vl, { fontSize: "small" })
            }
          )
        ] }),
        /* @__PURE__ */ x(Jo, { dividers: !0, sx: a, children: n || /* @__PURE__ */ re(Bo, { children: [
          /* @__PURE__ */ x(ue, { variant: "h6", gutterBottom: !0, sx: d, children: "Overview" }),
          /* @__PURE__ */ re(ue, { variant: "body2", paragraph: !0, sx: f, children: [
            "The query search box lets you filter data using a simple, readable query language. Type your conditions directly into the search field and press ",
            /* @__PURE__ */ x("strong", { children: "Apply" }),
            " to run the query. Suggestions will appear as you type to guide you through valid columns, operators, and logical connectors."
          ] }),
          /* @__PURE__ */ x(ut, { sx: { my: 2, ...E } }),
          /* @__PURE__ */ x(ue, { variant: "h6", gutterBottom: !0, sx: d, children: "Basic Syntax" }),
          /* @__PURE__ */ x(ue, { variant: "body2", paragraph: !0, sx: f, children: "Every condition follows this pattern:" }),
          /* @__PURE__ */ x(
            le,
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
                ...m
              },
              children: "column  operator  value"
            }
          ),
          /* @__PURE__ */ x(ue, { variant: "body2", paragraph: !0, sx: f, children: "Each part is separated by a single space:" }),
          /* @__PURE__ */ re(le, { component: "ul", sx: { mt: 0, mb: 2, pl: 3, ...g }, children: [
            /* @__PURE__ */ re(
              ue,
              {
                component: "li",
                variant: "body2",
                gutterBottom: !0,
                sx: y,
                children: [
                  /* @__PURE__ */ x("strong", { children: "column" }),
                  " — the field you want to filter on (e.g.",
                  " ",
                  /* @__PURE__ */ x(
                    qe,
                    {
                      label: "name",
                      size: "small",
                      sx: { fontFamily: "monospace", ...c }
                    }
                  ),
                  ",",
                  " ",
                  /* @__PURE__ */ x(
                    qe,
                    {
                      label: "duration",
                      size: "small",
                      sx: { fontFamily: "monospace", ...c }
                    }
                  ),
                  ")."
                ]
              }
            ),
            /* @__PURE__ */ re(
              ue,
              {
                component: "li",
                variant: "body2",
                gutterBottom: !0,
                sx: y,
                children: [
                  /* @__PURE__ */ x("strong", { children: "operator" }),
                  " — the comparison to apply (e.g.",
                  " ",
                  /* @__PURE__ */ x(
                    qe,
                    {
                      label: "==",
                      size: "small",
                      sx: { fontFamily: "monospace", ...c }
                    }
                  ),
                  ",",
                  " ",
                  /* @__PURE__ */ x(
                    qe,
                    {
                      label: "contains",
                      size: "small",
                      sx: { fontFamily: "monospace", ...c }
                    }
                  ),
                  ",",
                  " ",
                  /* @__PURE__ */ x(
                    qe,
                    {
                      label: ">",
                      size: "small",
                      sx: { fontFamily: "monospace", ...c }
                    }
                  ),
                  ")."
                ]
              }
            ),
            /* @__PURE__ */ re(
              ue,
              {
                component: "li",
                variant: "body2",
                gutterBottom: !0,
                sx: y,
                children: [
                  /* @__PURE__ */ x("strong", { children: "value" }),
                  " — what you are comparing against. Wrap values that contain spaces in double quotes:",
                  " ",
                  /* @__PURE__ */ x(
                    qe,
                    {
                      label: '"John Doe"',
                      size: "small",
                      sx: { fontFamily: "monospace", ...c }
                    }
                  ),
                  "."
                ]
              }
            )
          ] }),
          /* @__PURE__ */ x(ut, { sx: { my: 2, ...E } }),
          /* @__PURE__ */ x(ue, { variant: "h6", gutterBottom: !0, sx: d, children: "Combining Conditions" }),
          /* @__PURE__ */ re(ue, { variant: "body2", paragraph: !0, sx: f, children: [
            "Use ",
            /* @__PURE__ */ x("strong", { children: "AND" }),
            " or ",
            /* @__PURE__ */ x("strong", { children: "OR" }),
            " (uppercase) to join multiple conditions:"
          ] }),
          /* @__PURE__ */ x(
            le,
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
                ...m
              },
              children: `condition1 AND condition2 AND condition3
condition1 OR  condition2`
            }
          ),
          /* @__PURE__ */ x(ue, { variant: "h6", gutterBottom: !0, sx: d, children: "Grouping with Parentheses" }),
          /* @__PURE__ */ re(ue, { variant: "body2", paragraph: !0, sx: f, children: [
            "You can mix ",
            /* @__PURE__ */ x("strong", { children: "AND" }),
            " and ",
            /* @__PURE__ */ x("strong", { children: "OR" }),
            " in the same query by using parentheses ",
            /* @__PURE__ */ x("strong", { children: "( )" }),
            " to group conditions:"
          ] }),
          /* @__PURE__ */ x(
            le,
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
                ...m
              },
              children: `name == "John" AND (status == active OR status == pending)
(price > 100 AND price < 500) OR category == sale`
            }
          ),
          /* @__PURE__ */ re(ue, { variant: "body2", paragraph: !0, sx: f, children: [
            "Without parentheses, ",
            /* @__PURE__ */ x("strong", { children: "AND" }),
            " binds tighter than",
            " ",
            /* @__PURE__ */ x("strong", { children: "OR" }),
            ":"
          ] }),
          /* @__PURE__ */ x(
            le,
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
                ...m
              },
              children: `a = 1 OR b = 2 AND c = 3
// is the same as: a = 1 OR (b = 2 AND c = 3)`
            }
          ),
          /* @__PURE__ */ x(ue, { variant: "h6", gutterBottom: !0, sx: d, children: "NOT (Negation)" }),
          /* @__PURE__ */ re(ue, { variant: "body2", paragraph: !0, sx: f, children: [
            "Prefix a group with ",
            /* @__PURE__ */ x("strong", { children: "NOT" }),
            " to negate it:"
          ] }),
          /* @__PURE__ */ x(
            le,
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
                ...m
              },
              children: "NOT (status == inactive OR status == deleted)"
            }
          ),
          /* @__PURE__ */ x(ut, { sx: { my: 2, ...E } }),
          /* @__PURE__ */ x(ue, { variant: "h6", gutterBottom: !0, sx: d, children: "Examples" }),
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
              label: "Mixed AND/OR with grouping",
              code: 'name == "Alice" AND (status == active OR status == pending)'
            },
            {
              label: "Nested groups",
              code: "(price > 100 AND price < 500) OR (category == sale AND stock > 0)"
            },
            {
              label: "NOT negation",
              code: "NOT (status == deleted OR status == archived)"
            }
          ].map(({ label: $, code: M }) => /* @__PURE__ */ re(le, { mb: 1.5, children: [
            /* @__PURE__ */ x(
              ue,
              {
                variant: "caption",
                sx: {
                  color: "text.secondary",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                  ...h
                },
                children: $
              }
            ),
            /* @__PURE__ */ x(
              le,
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
                  ...p
                },
                children: M
              }
            )
          ] }, $)),
          /* @__PURE__ */ x(ut, { sx: { my: 2, ...E } }),
          /* @__PURE__ */ x(ue, { variant: "h6", gutterBottom: !0, sx: d, children: "Tips" }),
          /* @__PURE__ */ x(le, { component: "ul", sx: { mt: 0, mb: 1, pl: 3, ...g }, children: [
            "Start typing a column name and select it from the suggestion list.",
            "After picking a column, the suggestion list will show valid operators for that column.",
            "After entering a value, AND / OR will appear in the suggestion list.",
            "Use parentheses ( ) to group conditions when mixing AND and OR.",
            "Prefix a group with NOT to negate it — e.g. NOT (status == deleted).",
            'Wrap multi-word values in double quotes — e.g. "John Doe".',
            "AND has higher precedence than OR. Use parentheses to override.",
            "Syntax errors are highlighted in the text box. Hover the input to see the specific error.",
            "You can also build queries visually using the filter panel (click the tune icon)."
          ].map(($) => /* @__PURE__ */ x(
            ue,
            {
              component: "li",
              variant: "body2",
              gutterBottom: !0,
              sx: y,
              children: $
            },
            $
          )) }),
          /* @__PURE__ */ x(ut, { sx: { my: 2, ...E } }),
          /* @__PURE__ */ x(ue, { variant: "h6", gutterBottom: !0, sx: d, children: "Syntax Highlighting" }),
          /* @__PURE__ */ x(ue, { variant: "body2", paragraph: !0, sx: f, children: "As you type, each part of the query is colorized to help you spot mistakes at a glance:" }),
          /* @__PURE__ */ x(le, { component: "ul", sx: { mt: 0, mb: 1, pl: 3, ...g }, children: [
            { color: "primary.main", label: "Blue", desc: "Known column" },
            {
              color: "info.main",
              label: "Light blue",
              desc: "Custom / unknown column"
            },
            { color: "error.main", label: "Red", desc: "Valid operator" },
            {
              color: "text.disabled",
              label: "Grey",
              desc: "Unrecognized operator (still typing)"
            },
            {
              color: "secondary.main",
              label: "Purple",
              desc: "Logical connector — AND / OR / NOT"
            },
            {
              color: "warning.main",
              label: "Orange",
              desc: "Parentheses ( )"
            },
            { color: "text.primary", label: "Default", desc: "Value" }
          ].map(({ color: $, label: M, desc: H }) => /* @__PURE__ */ re(
            ue,
            {
              component: "li",
              variant: "body2",
              gutterBottom: !0,
              sx: T,
              children: [
                /* @__PURE__ */ x(
                  le,
                  {
                    component: "span",
                    sx: {
                      display: "inline-block",
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      bgcolor: $,
                      mr: 1,
                      verticalAlign: "middle",
                      ...S
                    }
                  }
                ),
                /* @__PURE__ */ x(le, { component: "strong", sx: { color: $ }, children: M }),
                " ",
                "— ",
                H
              ]
            },
            M
          )) })
        ] }) }),
        /* @__PURE__ */ x(Zo, { sx: O, children: /* @__PURE__ */ x(
          Wt,
          {
            onClick: t,
            variant: "contained",
            disableElevation: !0,
            sx: N,
            children: "Got it"
          }
        ) })
      ]
    }
  );
}, Gl = ({
  columnsOperator: e,
  onSuggestionClick: t,
  defaultOperators: n,
  onApplyClicked: r,
  queryText: o,
  relatedOperators: i,
  placeholder: s = "",
  endAdornment: a,
  helpContent: d,
  sx: f = {},
  ...m
}) => {
  const {
    root: p,
    inputRow: h,
    inputWrapper: g,
    highlightOverlay: y,
    input: c,
    applyButton: E,
    helpButton: O,
    helpTooltip: N,
    adornmentBox: T,
    errorTooltip: S,
    hintTooltip: b,
    popper: $,
    suggestionsBox: M,
    suggestionsList: H,
    suggestionItem: G,
    suggestionText: u,
    tokenColors: A,
    tokenFontWeights: I,
    helpModal: z
  } = f, F = tt(
    () => ({ ...zl, ...A || {} }),
    [A]
  ), R = tt(
    () => ({
      ...Gr,
      ...I || {}
    }),
    [I]
  ), k = pn(), Y = (U) => {
    if (!U || U === "inherit") return "inherit";
    const ee = U.split(".");
    let K = k.palette;
    for (const _e of ee)
      if (K = K == null ? void 0 : K[_e], K === void 0) return U;
    return typeof K == "string" ? K : U;
  }, Z = tt(() => {
    const U = {};
    for (const ee of Object.keys(F))
      U[ee] = Y(F[ee]);
    return U;
  }, [F, k]), [he, C] = Se(null), [P, q] = Se([]), [j, B] = Se([]), [L, V] = Se(""), [W, X] = Se(!0), [J, D] = Se(null), [Q, w] = Se(!1), [ce, ye] = Se(0), ge = hn(), Ye = hn(null), lt = hn(null);
  gt(() => {
    o != null && V(o);
  }, [o]), gt(() => {
    const U = Object.keys(e), ee = Array.from(
      /* @__PURE__ */ new Set([
        ...U.flatMap((xe) => {
          var mn;
          return ((mn = e[xe]) == null ? void 0 : mn.operators) || [];
        }),
        ...i || []
      ])
    ), K = L.trim().split(/\s+/).filter(Boolean), _e = K[K.length - 1] || "", Pt = K[K.length - 2] || "", $t = K.length >= 2 ? `${K[K.length - 2]} ${K[K.length - 1]}` : "", kt = K.length >= 3 ? `${K[K.length - 3]} ${K[K.length - 2]} ${K[K.length - 1]}` : "", _o = ee.some(
      (xe) => xe.toUpperCase() === kt.toUpperCase()
    ) || ee.some(
      (xe) => xe.toUpperCase() === $t.toUpperCase()
    ), Xn = kt && ee.some(
      (xe) => xe.toUpperCase() === kt.toUpperCase()
    ) ? K[K.length - 4] || "" : $t && ee.some(
      (xe) => xe.toUpperCase() === $t.toUpperCase()
    ) && K[K.length - 3] || "", Io = !Pt || n.includes(Pt);
    let we;
    if (!L.trim() || n.includes(_e) || _e === "(")
      we = U;
    else if (_o) {
      const xe = ee.find(
        (ct) => ct.toUpperCase() === kt.toUpperCase()
      ) || ee.find(
        (ct) => ct.toUpperCase() === $t.toUpperCase()
      );
      xe && ["IS NULL", "IS NOT NULL", "is_null", "is_not_null"].some((ct) => ct.toUpperCase() === xe.toUpperCase()), we = n;
    } else U.includes(_e) ? we = e[_e].operators : Io ? we = ee : (U.includes(Pt) && e[Pt].operators.includes(_e) || ee.includes(_e) || Xn && U.includes(Xn), we = n);
    q(we), B(we);
    const Jn = Ml(L);
    X(Jn.isValid), D(Jn.error);
  }, [L, e, n, i]), gt(() => {
    const U = lt.current;
    if (!U || typeof ResizeObserver > "u") return;
    const ee = () => ye(U.offsetWidth || 0);
    ee();
    const K = new ResizeObserver(ee);
    return K.observe(U), () => K.disconnect();
  }, [a, L, W]);
  const Rt = (U) => {
    const ee = U.target.value;
    V(ee), B(
      P.filter(
        (K) => K.toLowerCase().includes(ee.toLowerCase())
      )
    ), C(ge.current);
  }, Fe = (U) => {
    Ye.current && (Ye.current.scrollLeft = U.target.scrollLeft);
  }, At = tt(
    () => Bl(
      L,
      Object.keys(e || {}),
      Array.from(
        /* @__PURE__ */ new Set([
          ...Object.values(e || {}).flatMap(
            (U) => (U == null ? void 0 : U.operators) || []
          ),
          ...i || []
        ])
      ),
      n || []
    ),
    [L, e, i, n]
  ), be = (U) => {
    V((ee) => {
      const K = ee.trimEnd();
      return K ? `${K} ${U} ` : `${U} `;
    }), t == null || t(U), setTimeout(() => {
      const ee = ge.current;
      if (ee) {
        const K = ee.value.length;
        ee.setSelectionRange(K, K), ee.focus();
      }
    }, 0);
  }, Nt = !!L && !W && !!J, $o = Nt ? J : L ? "" : Ul, ko = Nt ? void 0 : L ? !1 : void 0;
  return /* @__PURE__ */ re(le, { width: "100%", sx: p, children: [
    /* @__PURE__ */ x(le, { display: "flex", sx: h, children: /* @__PURE__ */ re(
      le,
      {
        sx: { position: "relative", flex: 1, minWidth: 0, ...g },
        children: [
          /* @__PURE__ */ x(
            le,
            {
              ref: Ye,
              "aria-hidden": "true",
              sx: {
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                // Stop short of the endAdornment block (help icon + Apply button
                // + any caller-provided adornment) so colored tokens never paint
                // behind the buttons when the query overflows horizontally.
                right: `${ce}px`,
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
              children: At.map(
                (U, ee) => U.type === "whitespace" ? /* @__PURE__ */ x("span", { children: U.text }, ee) : /* @__PURE__ */ x(
                  "span",
                  {
                    style: {
                      color: Z[U.type] || "inherit",
                      fontWeight: R[U.type] ?? Gr[U.type] ?? 400
                    },
                    children: U.text
                  },
                  ee
                )
              )
            }
          ),
          /* @__PURE__ */ x(
            nt,
            {
              title: $o,
              open: ko,
              placement: "top-start",
              arrow: !0,
              componentsProps: {
                tooltip: {
                  sx: Nt ? {
                    bgcolor: "error.main",
                    color: "error.contrastText",
                    fontSize: "0.75rem",
                    maxWidth: 360,
                    ...S
                  } : {
                    bgcolor: "info.dark",
                    color: "common.white",
                    fontSize: "0.75rem",
                    maxWidth: 360,
                    ...b
                  }
                },
                arrow: {
                  sx: Nt ? {
                    color: "error.main",
                    ...(S == null ? void 0 : S.bgcolor) && {
                      color: S.bgcolor
                    }
                  } : {
                    color: "info.dark",
                    ...(b == null ? void 0 : b.bgcolor) && {
                      color: b.bgcolor
                    }
                  }
                }
              },
              children: /* @__PURE__ */ x(
                Wo,
                {
                  ...m,
                  placeholder: s,
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
                      caretColor: (U) => U.palette.text.primary,
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
                    ...c
                  },
                  inputRef: ge,
                  inputProps: { onScroll: Fe },
                  value: L,
                  onChange: Rt,
                  onFocus: () => C(ge.current),
                  onBlur: () => setTimeout(() => C(null), 100),
                  error: L ? !W : !1,
                  endAdornment: /* @__PURE__ */ x(Go, { position: "end", children: /* @__PURE__ */ re(
                    le,
                    {
                      ref: lt,
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        ...T
                      },
                      children: [
                        /* @__PURE__ */ x(
                          nt,
                          {
                            title: "Query syntax help",
                            placement: "top",
                            sx: N,
                            children: /* @__PURE__ */ x(
                              ze,
                              {
                                onClick: () => w(!0),
                                "aria-label": "Query syntax help",
                                size: "small",
                                edge: a ? !1 : "end",
                                onMouseDown: (U) => U.preventDefault(),
                                sx: O,
                                children: /* @__PURE__ */ x(jl, { fontSize: "small" })
                              }
                            )
                          }
                        ),
                        a,
                        /* @__PURE__ */ x(
                          Wt,
                          {
                            disabled: !L || !W,
                            onClick: () => r(L),
                            onMouseDown: (U) => U.preventDefault(),
                            size: "small",
                            sx: E,
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
        ]
      }
    ) }),
    /* @__PURE__ */ x(
      Yo,
      {
        open: !!he,
        anchorEl: he,
        placement: "bottom-start",
        sx: { zIndex: 1300, ...$ },
        children: /* @__PURE__ */ x(
          le,
          {
            sx: {
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              width: "300px",
              zIndex: 1300,
              ...M
            },
            children: /* @__PURE__ */ x(qo, { dense: !0, sx: H, children: j.map((U, ee) => /* @__PURE__ */ x(Ho, { disablePadding: !0, children: /* @__PURE__ */ x(
              Ko,
              {
                onMouseDown: (K) => K.preventDefault(),
                onClick: () => be(U),
                sx: G,
                children: /* @__PURE__ */ x(ue, { variant: "body2", sx: u, children: U })
              }
            ) }, ee)) })
          }
        )
      }
    ),
    /* @__PURE__ */ x(
      Wl,
      {
        open: Q,
        onClose: () => w(!1),
        helpContent: d,
        sx: z
      }
    )
  ] });
};
function ec({
  columnsOperator: e = {},
  defaultOperators: t = [],
  relatedOperators: n = [],
  handleApply: r,
  placeholder: o = "",
  helpContent: i,
  sx: s = {}
}) {
  const {
    root: a,
    textBoxContainer: d,
    textBox: f,
    iconButton: m,
    popover: p,
    popoverPaper: h,
    popoverContent: g,
    title: y,
    queryForm: c
  } = s, [E, O] = Se(null), [N, T] = Se(null), [S, b] = Se(e);
  gt(() => {
    b(e);
  }, [e]);
  const $ = tt(
    () => Array.from(
      /* @__PURE__ */ new Set([
        ...Object.values(e).flatMap((R) => (R == null ? void 0 : R.operators) || []),
        ...n || []
      ])
    ),
    [e, n]
  ), M = (R) => {
    O(R.currentTarget);
  }, H = () => {
    O(null);
  }, G = (R) => {
    const k = Oo(R), Y = {};
    k.forEach((Z) => {
      Z.column && !S[Z.column] && !Y[Z.column] && (Y[Z.column] = { operators: $ });
    }), Object.keys(Y).length && b((Z) => ({ ...Z, ...Y }));
  }, u = (R) => {
    const k = kl(R, $);
    G(k), T(k), r && r(k);
  }, A = (R) => {
    G(R), T(R), H(), r && r(R);
  }, I = tt(
    () => N ? Ro(N) : "",
    [N]
  ), z = !!E, F = z ? "simple-popover" : void 0;
  return /* @__PURE__ */ re(le, { sx: a, children: [
    /* @__PURE__ */ x(
      le,
      {
        display: "flex",
        alignItems: "center",
        marginBottom: "16px",
        width: "100%",
        sx: d,
        children: /* @__PURE__ */ x(
          Gl,
          {
            columnsOperator: S,
            defaultOperators: t,
            onApplyClicked: u,
            queryText: I,
            relatedOperators: n,
            placeholder: o,
            helpContent: i,
            sx: f,
            endAdornment: /* @__PURE__ */ x(
              ze,
              {
                "aria-describedby": F,
                onClick: M,
                size: "small",
                onMouseDown: (R) => R.preventDefault(),
                sx: m,
                children: /* @__PURE__ */ x(Pl, { fontSize: "small" })
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ x(
      wo,
      {
        id: F,
        open: z,
        anchorEl: E,
        onClose: H,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left"
        },
        slotProps: {
          paper: {
            sx: {
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
              ...h
            }
          }
        },
        sx: { ...p },
        children: /* @__PURE__ */ re(le, { sx: { padding: { xs: 1.5, sm: 2 }, ...g }, children: [
          /* @__PURE__ */ x(ue, { variant: "h6", sx: y, children: "Query Builder" }),
          /* @__PURE__ */ x(
            Fl,
            {
              columnsOperator: S,
              handleApplyFilters: A,
              defaultOperators: t,
              groupTree: N,
              sx: c
            }
          )
        ] })
      }
    )
  ] });
}
export {
  ec as default
};
