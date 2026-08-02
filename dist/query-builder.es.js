var No = Object.defineProperty;
var Po = (e, t, n) => t in e ? No(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var At = (e, t, n) => Po(e, typeof t != "symbol" ? t + "" : t, n);
import { jsx as E, jsxs as ee } from "react/jsx-runtime";
import * as _ from "react";
import ct, { useState as xe, useEffect as pt, useMemo as Ze, useRef as cn } from "react";
import $o from "@emotion/styled";
import { ThemeContext as ko } from "@emotion/react";
import { Box as se, Button as Lt, Radio as _o, Typography as ue, ToggleButtonGroup as Io, ToggleButton as qn, Tooltip as et, IconButton as ze, Stack as Do, Select as Hn, MenuItem as Nt, TextField as Mo, OutlinedInput as Bo, InputAdornment as Fo, Popper as Lo, List as jo, ListItem as zo, ListItemButton as Vo, Dialog as Uo, DialogTitle as Wo, DialogContent as Go, Divider as at, Chip as Ge, DialogActions as Yo } from "@mui/material";
import { Add as Kn, Close as jr } from "@mui/icons-material";
import * as qo from "react-dom";
import Pt from "react-dom";
function Ho(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $t = { exports: {} }, kt = { exports: {} }, J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qn;
function Ko() {
  if (Qn) return J;
  Qn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
  function S(b) {
    if (typeof b == "object" && b !== null) {
      var D = b.$$typeof;
      switch (D) {
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
                case h:
                case y:
                case g:
                case s:
                  return b;
                default:
                  return D;
              }
          }
        case n:
          return D;
      }
    }
  }
  function T(b) {
    return S(b) === f;
  }
  return J.AsyncMode = d, J.ConcurrentMode = f, J.ContextConsumer = a, J.ContextProvider = s, J.Element = t, J.ForwardRef = h, J.Fragment = r, J.Lazy = y, J.Memo = g, J.Portal = n, J.Profiler = i, J.StrictMode = o, J.Suspense = p, J.isAsyncMode = function(b) {
    return T(b) || S(b) === d;
  }, J.isConcurrentMode = T, J.isContextConsumer = function(b) {
    return S(b) === a;
  }, J.isContextProvider = function(b) {
    return S(b) === s;
  }, J.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, J.isForwardRef = function(b) {
    return S(b) === h;
  }, J.isFragment = function(b) {
    return S(b) === r;
  }, J.isLazy = function(b) {
    return S(b) === y;
  }, J.isMemo = function(b) {
    return S(b) === g;
  }, J.isPortal = function(b) {
    return S(b) === n;
  }, J.isProfiler = function(b) {
    return S(b) === i;
  }, J.isStrictMode = function(b) {
    return S(b) === o;
  }, J.isSuspense = function(b) {
    return S(b) === p;
  }, J.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === f || b === i || b === o || b === p || b === m || typeof b == "object" && b !== null && (b.$$typeof === y || b.$$typeof === g || b.$$typeof === s || b.$$typeof === a || b.$$typeof === h || b.$$typeof === x || b.$$typeof === O || b.$$typeof === N || b.$$typeof === c);
  }, J.typeOf = S, J;
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
var Xn;
function Qo() {
  return Xn || (Xn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
    function S(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === r || w === f || w === i || w === o || w === p || w === m || typeof w == "object" && w !== null && (w.$$typeof === y || w.$$typeof === g || w.$$typeof === s || w.$$typeof === a || w.$$typeof === h || w.$$typeof === x || w.$$typeof === O || w.$$typeof === N || w.$$typeof === c);
    }
    function T(w) {
      if (typeof w == "object" && w !== null) {
        var ae = w.$$typeof;
        switch (ae) {
          case t:
            var ge = w.type;
            switch (ge) {
              case d:
              case f:
              case r:
              case i:
              case o:
              case p:
                return ge;
              default:
                var be = ge && ge.$$typeof;
                switch (be) {
                  case a:
                  case h:
                  case y:
                  case g:
                  case s:
                    return be;
                  default:
                    return ae;
                }
            }
          case n:
            return ae;
        }
      }
    }
    var b = d, D = f, F = a, K = s, G = t, u = h, R = r, M = y, L = g, k = n, A = i, I = o, U = p, re = !1;
    function me(w) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C(w) || T(w) === d;
    }
    function C(w) {
      return T(w) === f;
    }
    function P(w) {
      return T(w) === a;
    }
    function Y(w) {
      return T(w) === s;
    }
    function j(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function $(w) {
      return T(w) === h;
    }
    function W(w) {
      return T(w) === r;
    }
    function z(w) {
      return T(w) === y;
    }
    function q(w) {
      return T(w) === g;
    }
    function Q(w) {
      return T(w) === n;
    }
    function X(w) {
      return T(w) === i;
    }
    function B(w) {
      return T(w) === o;
    }
    function H(w) {
      return T(w) === p;
    }
    Z.AsyncMode = b, Z.ConcurrentMode = D, Z.ContextConsumer = F, Z.ContextProvider = K, Z.Element = G, Z.ForwardRef = u, Z.Fragment = R, Z.Lazy = M, Z.Memo = L, Z.Portal = k, Z.Profiler = A, Z.StrictMode = I, Z.Suspense = U, Z.isAsyncMode = me, Z.isConcurrentMode = C, Z.isContextConsumer = P, Z.isContextProvider = Y, Z.isElement = j, Z.isForwardRef = $, Z.isFragment = W, Z.isLazy = z, Z.isMemo = q, Z.isPortal = Q, Z.isProfiler = X, Z.isStrictMode = B, Z.isSuspense = H, Z.isValidElementType = S, Z.typeOf = T;
  }()), Z;
}
var Jn;
function zr() {
  return Jn || (Jn = 1, process.env.NODE_ENV === "production" ? kt.exports = Ko() : kt.exports = Qo()), kt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var un, Zn;
function Xo() {
  if (Zn) return un;
  Zn = 1;
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
      var d = Object.getOwnPropertyNames(s).map(function(h) {
        return s[h];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        f[h] = h;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return un = o() ? Object.assign : function(i, s) {
    for (var a, d = r(i), f, h = 1; h < arguments.length; h++) {
      a = Object(arguments[h]);
      for (var p in a)
        t.call(a, p) && (d[p] = a[p]);
      if (e) {
        f = e(a);
        for (var m = 0; m < f.length; m++)
          n.call(a, f[m]) && (d[f[m]] = a[f[m]]);
      }
    }
    return d;
  }, un;
}
var fn, er;
function In() {
  if (er) return fn;
  er = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return fn = e, fn;
}
var dn, tr;
function Vr() {
  return tr || (tr = 1, dn = Function.call.bind(Object.prototype.hasOwnProperty)), dn;
}
var pn, nr;
function Jo() {
  if (nr) return pn;
  nr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ In(), n = {}, r = /* @__PURE__ */ Vr();
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
      for (var h in i)
        if (r(i, h)) {
          var p;
          try {
            if (typeof i[h] != "function") {
              var m = Error(
                (d || "React class") + ": " + a + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            p = i[h](s, h, d, a, null, t);
          } catch (y) {
            p = y;
          }
          if (p && !(p instanceof Error) && e(
            (d || "React class") + ": type specification of " + a + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
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
  }, pn = o, pn;
}
var mn, rr;
function Zo() {
  if (rr) return mn;
  rr = 1;
  var e = zr(), t = Xo(), n = /* @__PURE__ */ In(), r = /* @__PURE__ */ Vr(), o = /* @__PURE__ */ Jo(), i = function() {
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
  return mn = function(a, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function p(C) {
      var P = C && (f && C[f] || C[h]);
      if (typeof P == "function")
        return P;
    }
    var m = "<<anonymous>>", g = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: N(),
      arrayOf: S,
      element: T(),
      elementType: b(),
      instanceOf: D,
      node: u(),
      objectOf: K,
      oneOf: F,
      oneOfType: G,
      shape: M,
      exact: L
    };
    function y(C, P) {
      return C === P ? C !== 0 || 1 / C === 1 / P : C !== C && P !== P;
    }
    function c(C, P) {
      this.message = C, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    c.prototype = Error.prototype;
    function x(C) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, Y = 0;
      function j(W, z, q, Q, X, B, H) {
        if (Q = Q || m, B = B || q, H !== n) {
          if (d) {
            var w = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw w.name = "Invariant Violation", w;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ae = Q + ":" + q;
            !P[ae] && // Avoid spamming the console because they are often not actionable except for lib authors
            Y < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + B + "` prop on `" + Q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[ae] = !0, Y++);
          }
        }
        return z[q] == null ? W ? z[q] === null ? new c("The " + X + " `" + B + "` is marked as required " + ("in `" + Q + "`, but its value is `null`.")) : new c("The " + X + " `" + B + "` is marked as required in " + ("`" + Q + "`, but its value is `undefined`.")) : null : C(z, q, Q, X, B);
      }
      var $ = j.bind(null, !1);
      return $.isRequired = j.bind(null, !0), $;
    }
    function O(C) {
      function P(Y, j, $, W, z, q) {
        var Q = Y[j], X = I(Q);
        if (X !== C) {
          var B = U(Q);
          return new c(
            "Invalid " + W + " `" + z + "` of type " + ("`" + B + "` supplied to `" + $ + "`, expected ") + ("`" + C + "`."),
            { expectedType: C }
          );
        }
        return null;
      }
      return x(P);
    }
    function N() {
      return x(s);
    }
    function S(C) {
      function P(Y, j, $, W, z) {
        if (typeof C != "function")
          return new c("Property `" + z + "` of component `" + $ + "` has invalid PropType notation inside arrayOf.");
        var q = Y[j];
        if (!Array.isArray(q)) {
          var Q = I(q);
          return new c("Invalid " + W + " `" + z + "` of type " + ("`" + Q + "` supplied to `" + $ + "`, expected an array."));
        }
        for (var X = 0; X < q.length; X++) {
          var B = C(q, X, $, W, z + "[" + X + "]", n);
          if (B instanceof Error)
            return B;
        }
        return null;
      }
      return x(P);
    }
    function T() {
      function C(P, Y, j, $, W) {
        var z = P[Y];
        if (!a(z)) {
          var q = I(z);
          return new c("Invalid " + $ + " `" + W + "` of type " + ("`" + q + "` supplied to `" + j + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(C);
    }
    function b() {
      function C(P, Y, j, $, W) {
        var z = P[Y];
        if (!e.isValidElementType(z)) {
          var q = I(z);
          return new c("Invalid " + $ + " `" + W + "` of type " + ("`" + q + "` supplied to `" + j + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(C);
    }
    function D(C) {
      function P(Y, j, $, W, z) {
        if (!(Y[j] instanceof C)) {
          var q = C.name || m, Q = me(Y[j]);
          return new c("Invalid " + W + " `" + z + "` of type " + ("`" + Q + "` supplied to `" + $ + "`, expected ") + ("instance of `" + q + "`."));
        }
        return null;
      }
      return x(P);
    }
    function F(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function P(Y, j, $, W, z) {
        for (var q = Y[j], Q = 0; Q < C.length; Q++)
          if (y(q, C[Q]))
            return null;
        var X = JSON.stringify(C, function(H, w) {
          var ae = U(w);
          return ae === "symbol" ? String(w) : w;
        });
        return new c("Invalid " + W + " `" + z + "` of value `" + String(q) + "` " + ("supplied to `" + $ + "`, expected one of " + X + "."));
      }
      return x(P);
    }
    function K(C) {
      function P(Y, j, $, W, z) {
        if (typeof C != "function")
          return new c("Property `" + z + "` of component `" + $ + "` has invalid PropType notation inside objectOf.");
        var q = Y[j], Q = I(q);
        if (Q !== "object")
          return new c("Invalid " + W + " `" + z + "` of type " + ("`" + Q + "` supplied to `" + $ + "`, expected an object."));
        for (var X in q)
          if (r(q, X)) {
            var B = C(q, X, $, W, z + "." + X, n);
            if (B instanceof Error)
              return B;
          }
        return null;
      }
      return x(P);
    }
    function G(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var P = 0; P < C.length; P++) {
        var Y = C[P];
        if (typeof Y != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + re(Y) + " at index " + P + "."
          ), s;
      }
      function j($, W, z, q, Q) {
        for (var X = [], B = 0; B < C.length; B++) {
          var H = C[B], w = H($, W, z, q, Q, n);
          if (w == null)
            return null;
          w.data && r(w.data, "expectedType") && X.push(w.data.expectedType);
        }
        var ae = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new c("Invalid " + q + " `" + Q + "` supplied to " + ("`" + z + "`" + ae + "."));
      }
      return x(j);
    }
    function u() {
      function C(P, Y, j, $, W) {
        return k(P[Y]) ? null : new c("Invalid " + $ + " `" + W + "` supplied to " + ("`" + j + "`, expected a ReactNode."));
      }
      return x(C);
    }
    function R(C, P, Y, j, $) {
      return new c(
        (C || "React class") + ": " + P + " type `" + Y + "." + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + $ + "`."
      );
    }
    function M(C) {
      function P(Y, j, $, W, z) {
        var q = Y[j], Q = I(q);
        if (Q !== "object")
          return new c("Invalid " + W + " `" + z + "` of type `" + Q + "` " + ("supplied to `" + $ + "`, expected `object`."));
        for (var X in C) {
          var B = C[X];
          if (typeof B != "function")
            return R($, W, z, X, U(B));
          var H = B(q, X, $, W, z + "." + X, n);
          if (H)
            return H;
        }
        return null;
      }
      return x(P);
    }
    function L(C) {
      function P(Y, j, $, W, z) {
        var q = Y[j], Q = I(q);
        if (Q !== "object")
          return new c("Invalid " + W + " `" + z + "` of type `" + Q + "` " + ("supplied to `" + $ + "`, expected `object`."));
        var X = t({}, Y[j], C);
        for (var B in X) {
          var H = C[B];
          if (r(C, B) && typeof H != "function")
            return R($, W, z, B, U(H));
          if (!H)
            return new c(
              "Invalid " + W + " `" + z + "` key `" + B + "` supplied to `" + $ + "`.\nBad object: " + JSON.stringify(Y[j], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  ")
            );
          var w = H(q, B, $, W, z + "." + B, n);
          if (w)
            return w;
        }
        return null;
      }
      return x(P);
    }
    function k(C) {
      switch (typeof C) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !C;
        case "object":
          if (Array.isArray(C))
            return C.every(k);
          if (C === null || a(C))
            return !0;
          var P = p(C);
          if (P) {
            var Y = P.call(C), j;
            if (P !== C.entries) {
              for (; !(j = Y.next()).done; )
                if (!k(j.value))
                  return !1;
            } else
              for (; !(j = Y.next()).done; ) {
                var $ = j.value;
                if ($ && !k($[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function A(C, P) {
      return C === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function I(C) {
      var P = typeof C;
      return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : A(P, C) ? "symbol" : P;
    }
    function U(C) {
      if (typeof C > "u" || C === null)
        return "" + C;
      var P = I(C);
      if (P === "object") {
        if (C instanceof Date)
          return "date";
        if (C instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function re(C) {
      var P = U(C);
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
    function me(C) {
      return !C.constructor || !C.constructor.name ? m : C.constructor.name;
    }
    return g.checkPropTypes = o, g.resetWarningCache = o.resetWarningCache, g.PropTypes = g, g;
  }, mn;
}
var hn, or;
function ei() {
  if (or) return hn;
  or = 1;
  var e = /* @__PURE__ */ In();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, hn = function() {
    function r(s, a, d, f, h, p) {
      if (p !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
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
  }, hn;
}
var ir;
function ti() {
  if (ir) return $t.exports;
  if (ir = 1, process.env.NODE_ENV !== "production") {
    var e = zr(), t = !0;
    $t.exports = /* @__PURE__ */ Zo()(e.isElement, t);
  } else
    $t.exports = /* @__PURE__ */ ei()();
  return $t.exports;
}
var ni = /* @__PURE__ */ ti();
const l = /* @__PURE__ */ Ho(ni);
function Ur(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ur(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ae() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ur(e)) && (r && (r += " "), r += t);
  return r;
}
function yt(e, t, n = void 0) {
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
function jt(e, t, n, r, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const ri = l.oneOfType([l.func, l.object]);
function bt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function oi(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function ii(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof i == "function" && !oi(i) && (a = "Did you accidentally provide a plain function component instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const si = bt(l.elementType, ii);
function ai(e) {
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
function Wr(e, t, n, r) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const i = ai(o);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Gr(e, t, ...n) {
  return e[t] === void 0 ? null : Wr(e, t, ...n);
}
function Tn() {
  return null;
}
Gr.isRequired = Wr;
Tn.isRequired = Tn;
const Yr = process.env.NODE_ENV === "production" ? Tn : Gr;
function li(e) {
  return typeof e == "string";
}
function Ie(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
function Ve(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ie(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var _t = { exports: {} }, te = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr;
function ci() {
  if (sr) return te;
  sr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), g = Symbol.for("react.client.reference");
  function y(c) {
    if (typeof c == "object" && c !== null) {
      var x = c.$$typeof;
      switch (x) {
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
                case h:
                  return c;
                case i:
                  return c;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return te.ContextConsumer = i, te.ContextProvider = s, te.Element = e, te.ForwardRef = a, te.Fragment = n, te.Lazy = p, te.Memo = h, te.Portal = t, te.Profiler = o, te.StrictMode = r, te.Suspense = d, te.SuspenseList = f, te.isContextConsumer = function(c) {
    return y(c) === i;
  }, te.isContextProvider = function(c) {
    return y(c) === s;
  }, te.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === e;
  }, te.isForwardRef = function(c) {
    return y(c) === a;
  }, te.isFragment = function(c) {
    return y(c) === n;
  }, te.isLazy = function(c) {
    return y(c) === p;
  }, te.isMemo = function(c) {
    return y(c) === h;
  }, te.isPortal = function(c) {
    return y(c) === t;
  }, te.isProfiler = function(c) {
    return y(c) === o;
  }, te.isStrictMode = function(c) {
    return y(c) === r;
  }, te.isSuspense = function(c) {
    return y(c) === d;
  }, te.isSuspenseList = function(c) {
    return y(c) === f;
  }, te.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === n || c === o || c === r || c === d || c === f || c === m || typeof c == "object" && c !== null && (c.$$typeof === p || c.$$typeof === h || c.$$typeof === s || c.$$typeof === i || c.$$typeof === a || c.$$typeof === g || c.getModuleId !== void 0);
  }, te.typeOf = y, te;
}
var ne = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ar;
function ui() {
  return ar || (ar = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c) {
      if (typeof c == "object" && c !== null) {
        var x = c.$$typeof;
        switch (x) {
          case t:
            switch (c = c.type, c) {
              case r:
              case i:
              case o:
              case f:
              case h:
                return c;
              default:
                switch (c = c && c.$$typeof, c) {
                  case a:
                  case d:
                  case m:
                  case p:
                    return c;
                  case s:
                    return c;
                  default:
                    return x;
                }
            }
          case n:
            return x;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = Symbol.for("react.client.reference");
    ne.ContextConsumer = s, ne.ContextProvider = a, ne.Element = t, ne.ForwardRef = d, ne.Fragment = r, ne.Lazy = m, ne.Memo = p, ne.Portal = n, ne.Profiler = i, ne.StrictMode = o, ne.Suspense = f, ne.SuspenseList = h, ne.isContextConsumer = function(c) {
      return e(c) === s;
    }, ne.isContextProvider = function(c) {
      return e(c) === a;
    }, ne.isElement = function(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }, ne.isForwardRef = function(c) {
      return e(c) === d;
    }, ne.isFragment = function(c) {
      return e(c) === r;
    }, ne.isLazy = function(c) {
      return e(c) === m;
    }, ne.isMemo = function(c) {
      return e(c) === p;
    }, ne.isPortal = function(c) {
      return e(c) === n;
    }, ne.isProfiler = function(c) {
      return e(c) === i;
    }, ne.isStrictMode = function(c) {
      return e(c) === o;
    }, ne.isSuspense = function(c) {
      return e(c) === f;
    }, ne.isSuspenseList = function(c) {
      return e(c) === h;
    }, ne.isValidElementType = function(c) {
      return typeof c == "string" || typeof c == "function" || c === r || c === i || c === o || c === f || c === h || c === g || typeof c == "object" && c !== null && (c.$$typeof === m || c.$$typeof === p || c.$$typeof === a || c.$$typeof === s || c.$$typeof === d || c.$$typeof === y || c.getModuleId !== void 0);
    }, ne.typeOf = e;
  }()), ne;
}
var lr;
function fi() {
  return lr || (lr = 1, process.env.NODE_ENV === "production" ? _t.exports = /* @__PURE__ */ ci() : _t.exports = /* @__PURE__ */ ui()), _t.exports;
}
var zt = /* @__PURE__ */ fi();
function Re(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function qr(e) {
  if (/* @__PURE__ */ _.isValidElement(e) || zt.isValidElementType(e) || !Re(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = qr(e[n]);
  }), t;
}
function Ee(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return Re(e) && Re(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ _.isValidElement(t[o]) || zt.isValidElementType(t[o]) ? r[o] = t[o] : Re(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Re(e[o]) ? r[o] = Ee(e[o], t[o], n) : n.clone ? r[o] = Re(t[o]) ? qr(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
function mt(e, t) {
  return t ? Ee(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Me = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.string, l.object, l.array]) : {};
function di(e, t) {
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
function pi(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function mi(e, t) {
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
function hi(e) {
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
const Kt = {
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
}, cr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Kt[e]}px)`
}, gi = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Kt[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Ne(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || cr;
    return t.reduce((s, a, d) => (s[i.up(i.keys[d])] = n(t[d]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || cr;
    return Object.keys(t).reduce((s, a) => {
      if (pi(i.keys, a)) {
        const d = mi(r.containerQueries ? r : gi, a);
        d && (s[d] = n(t[a], a));
      } else if (Object.keys(i.values || Kt).includes(a)) {
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
function yi(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function bi(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Qt(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Vt(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Qt(e, n) || r, t && (o = t(o, r, e)), o;
}
function he(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], d = s.theme, f = Qt(d, r) || {};
    return Ne(s, a, (p) => {
      let m = Vt(f, o, p);
      return p === m && typeof p == "string" && (m = Vt(f, o, `${t}${p === "default" ? "" : Ve(p)}`, p)), n === !1 ? m : {
        [n]: m
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Me
  } : {}, i.filterProps = [t], i;
}
function vi(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Ei = {
  m: "margin",
  p: "padding"
}, xi = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ur = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Si = vi((e) => {
  if (e.length > 2)
    if (ur[e])
      e = ur[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Ei[t], o = xi[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Xt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Jt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Ti = [...Xt, ...Jt];
function vt(e, t, n, r) {
  const o = Qt(e, t, !0) ?? n;
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
function Dn(e) {
  return vt(e, "spacing", 8, "spacing");
}
function Et(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Ci(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Et(t, n), r), {});
}
function wi(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const o = Si(n), i = Ci(o, r), s = e[n];
  return Ne(e, s, i);
}
function Hr(e, t) {
  const n = Dn(e.theme);
  return Object.keys(e).map((r) => wi(e, t, r, n)).reduce(mt, {});
}
function de(e) {
  return Hr(e, Xt);
}
de.propTypes = process.env.NODE_ENV !== "production" ? Xt.reduce((e, t) => (e[t] = Me, e), {}) : {};
de.filterProps = Xt;
function pe(e) {
  return Hr(e, Jt);
}
pe.propTypes = process.env.NODE_ENV !== "production" ? Jt.reduce((e, t) => (e[t] = Me, e), {}) : {};
pe.filterProps = Jt;
process.env.NODE_ENV !== "production" && Ti.reduce((e, t) => (e[t] = Me, e), {});
function Zt(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? mt(o, t[i](r)) : o, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, o) => Object.assign(r, o.propTypes), {}) : {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Se(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Te(e, t) {
  return he({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Oi = Te("border", Se), Ri = Te("borderTop", Se), Ai = Te("borderRight", Se), Ni = Te("borderBottom", Se), Pi = Te("borderLeft", Se), $i = Te("borderColor"), ki = Te("borderTopColor"), _i = Te("borderRightColor"), Ii = Te("borderBottomColor"), Di = Te("borderLeftColor"), Mi = Te("outline", Se), Bi = Te("outlineColor"), en = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = vt(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: Et(t, r)
    });
    return Ne(e, e.borderRadius, n);
  }
  return null;
};
en.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Me
} : {};
en.filterProps = ["borderRadius"];
Zt(Oi, Ri, Ai, Ni, Pi, $i, ki, _i, Ii, Di, en, Mi, Bi);
const tn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = vt(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: Et(t, r)
    });
    return Ne(e, e.gap, n);
  }
  return null;
};
tn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Me
} : {};
tn.filterProps = ["gap"];
const nn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = vt(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: Et(t, r)
    });
    return Ne(e, e.columnGap, n);
  }
  return null;
};
nn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Me
} : {};
nn.filterProps = ["columnGap"];
const rn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = vt(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: Et(t, r)
    });
    return Ne(e, e.rowGap, n);
  }
  return null;
};
rn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Me
} : {};
rn.filterProps = ["rowGap"];
const Fi = he({
  prop: "gridColumn"
}), Li = he({
  prop: "gridRow"
}), ji = he({
  prop: "gridAutoFlow"
}), zi = he({
  prop: "gridAutoColumns"
}), Vi = he({
  prop: "gridAutoRows"
}), Ui = he({
  prop: "gridTemplateColumns"
}), Wi = he({
  prop: "gridTemplateRows"
}), Gi = he({
  prop: "gridTemplateAreas"
}), Yi = he({
  prop: "gridArea"
});
Zt(tn, nn, rn, Fi, Li, ji, zi, Vi, Ui, Wi, Gi, Yi);
function tt(e, t) {
  return t === "grey" ? t : e;
}
const qi = he({
  prop: "color",
  themeKey: "palette",
  transform: tt
}), Hi = he({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: tt
}), Ki = he({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: tt
});
Zt(qi, Hi, Ki);
function ve(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Qi = he({
  prop: "width",
  transform: ve
}), Mn = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, a, d;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || Kt[n];
      return r ? ((d = (a = e.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : d.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: ve(n)
      };
    };
    return Ne(e, e.maxWidth, t);
  }
  return null;
};
Mn.filterProps = ["maxWidth"];
const Xi = he({
  prop: "minWidth",
  transform: ve
}), Ji = he({
  prop: "height",
  transform: ve
}), Zi = he({
  prop: "maxHeight",
  transform: ve
}), es = he({
  prop: "minHeight",
  transform: ve
});
he({
  prop: "size",
  cssProperty: "width",
  transform: ve
});
he({
  prop: "size",
  cssProperty: "height",
  transform: ve
});
const ts = he({
  prop: "boxSizing"
});
Zt(Qi, Mn, Xi, Ji, Zi, es, ts);
const on = {
  // borders
  border: {
    themeKey: "borders",
    transform: Se
  },
  borderTop: {
    themeKey: "borders",
    transform: Se
  },
  borderRight: {
    themeKey: "borders",
    transform: Se
  },
  borderBottom: {
    themeKey: "borders",
    transform: Se
  },
  borderLeft: {
    themeKey: "borders",
    transform: Se
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
    transform: Se
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: en
  },
  // palette
  color: {
    themeKey: "palette",
    transform: tt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: tt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: tt
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
    style: tn
  },
  rowGap: {
    style: rn
  },
  columnGap: {
    style: nn
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
    style: Mn
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
function ns(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function rs(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function os() {
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
      transform: h,
      style: p
    } = a;
    if (r == null)
      return null;
    if (f === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const m = Qt(o, f) || {};
    return p ? p(s) : Ne(s, r, (y) => {
      let c = Vt(m, h, y);
      return y === c && typeof y == "string" && (c = Vt(m, h, `${n}${y === "default" ? "" : Ve(y)}`, y)), d === !1 ? c : {
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
    const i = o.unstable_sxConfig ?? on;
    function s(a) {
      let d = a;
      if (typeof a == "function")
        d = a(o);
      else if (typeof a != "object")
        return a;
      if (!d)
        return null;
      const f = yi(o.breakpoints), h = Object.keys(f);
      let p = f;
      return Object.keys(d).forEach((m) => {
        const g = rs(d[m], o);
        if (g != null)
          if (typeof g == "object")
            if (i[m])
              p = mt(p, e(m, g, o, i));
            else {
              const y = Ne({
                theme: o
              }, g, (c) => ({
                [m]: c
              }));
              ns(y, g) ? p[m] = t({
                sx: g,
                theme: o
              }) : p = mt(p, y);
            }
          else
            p = mt(p, e(m, g, o, i));
      }), di(o, bi(h, p));
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return t;
}
const nt = os();
nt.filterProps = ["sx"];
function is(e) {
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
var ss = {
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
function as(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var ls = /[A-Z]|^ms/g, cs = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Kr = function(t) {
  return t.charCodeAt(1) === 45;
}, fr = function(t) {
  return t != null && typeof t != "boolean";
}, gn = /* @__PURE__ */ as(function(e) {
  return Kr(e) ? e : e.replace(ls, "-$&").toLowerCase();
}), dr = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(cs, function(r, o, i) {
          return _e = {
            name: o,
            styles: i,
            next: _e
          }, o;
        });
  }
  return ss[t] !== 1 && !Kr(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Ut(e, t, n) {
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
      return us(e, t, n);
    }
  }
  var d = n;
  return d;
}
function us(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Ut(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        fr(a) && (r += gn(i) + ":" + dr(i, a) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && t == null)
        for (var d = 0; d < s.length; d++)
          fr(s[d]) && (r += gn(i) + ":" + dr(i, s[d]) + ";");
      else {
        var f = Ut(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += gn(i) + ":" + f + ";";
            break;
          }
          default:
            r += i + "{" + f + "}";
        }
      }
    }
  return r;
}
var pr = /label:\s*([^\s;{]+)\s*(;|$)/g, _e;
function fs(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  _e = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += Ut(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += Ut(n, t, e[a]), r) {
      var d = i;
      o += d[a];
    }
  pr.lastIndex = 0;
  for (var f = "", h; (h = pr.exec(o)) !== null; )
    f += "-" + h[1];
  var p = is(o) + f;
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
function ds(e, t) {
  const n = $o(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
function ps(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const mr = [];
function hr(e) {
  return mr[0] = e, fs(mr);
}
const ms = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function hs(e) {
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
  } = e, i = ms(t), s = Object.keys(i);
  function a(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n})`;
  }
  function d(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - r / 100}${n})`;
  }
  function f(m, g) {
    const y = s.indexOf(g);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n}) and (max-width:${(y !== -1 && typeof t[s[y]] == "number" ? t[s[y]] : g) - r / 100}${n})`;
  }
  function h(m) {
    return s.indexOf(m) + 1 < s.length ? f(m, s[s.indexOf(m) + 1]) : a(m);
  }
  function p(m) {
    const g = s.indexOf(m);
    return g === 0 ? a(s[1]) : g === s.length - 1 ? d(s[g]) : f(m, s[s.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: a,
    down: d,
    between: f,
    only: h,
    not: p,
    unit: n,
    ...o
  };
}
const gs = {
  borderRadius: 4
};
function Qr(e = 8, t = Dn({
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
function ys(e, t) {
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
function Bn(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, a = hs(n), d = Qr(o);
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
      ...gs,
      ...i
    }
  }, s);
  return f = hi(f), f.applyStyles = ys, f = t.reduce((h, p) => Ee(h, p), f), f.unstable_sxConfig = {
    ...on,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, f.unstable_sx = function(p) {
    return nt({
      sx: p,
      theme: this
    });
  }, f;
}
function bs(e) {
  return Object.keys(e).length === 0;
}
function vs(e = null) {
  const t = _.useContext(ko);
  return !t || bs(t) ? e : t;
}
const Es = Bn();
function xs(e = Es) {
  return vs(e);
}
const gr = (e) => e, Ss = () => {
  let e = gr;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = gr;
    }
  };
}, Ts = Ss(), Cs = {
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
function Ue(e, t, n = "Mui") {
  const r = Cs[t];
  return r ? `${n}-${r}` : `${Ts.generate(e)}-${t}`;
}
function xt(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = Ue(e, o, n);
  }), r;
}
function Xr(e, t = "") {
  return e.displayName || e.name || t;
}
function yr(e, t, n) {
  const r = Xr(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function ws(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Xr(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case zt.ForwardRef:
          return yr(e, e.render, "ForwardRef");
        case zt.Memo:
          return yr(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Jr(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: hr(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = hr(o.style));
  }), r;
}
const Os = Bn();
function yn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Rs(e) {
  return e ? (t, n) => n[e] : null;
}
function As(e, t, n) {
  e.theme = ks(e.theme) ? n : e.theme[t] || e.theme;
}
function Bt(e, t) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((r) => Bt(e, r));
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
    return Zr(e, n.variants, [r]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function Zr(e, t, n = []) {
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
function Ns(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Os,
    rootShouldForwardProp: r = yn,
    slotShouldForwardProp: o = yn
  } = e;
  function i(a) {
    As(a, t, n);
  }
  return (a, d = {}) => {
    ps(a, (b) => b.filter((D) => D !== nt));
    const {
      name: f,
      slot: h,
      skipVariantsResolver: p,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: g = Rs(eo(h)),
      ...y
    } = d, c = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      h && h !== "Root" && h !== "root" || !1
    ), x = m || !1;
    let O = yn;
    h === "Root" || h === "root" ? O = r : h ? O = o : _s(a) && (O = void 0);
    const N = ds(a, {
      shouldForwardProp: O,
      label: $s(f, h),
      ...y
    }), S = (b) => {
      if (typeof b == "function" && b.__emotion_real !== b)
        return function(F) {
          return Bt(F, b);
        };
      if (Re(b)) {
        const D = Jr(b);
        return D.variants ? function(K) {
          return Bt(K, D);
        } : D.style;
      }
      return b;
    }, T = (...b) => {
      const D = [], F = b.map(S), K = [];
      if (D.push(i), f && g && K.push(function(M) {
        var I, U;
        const k = (U = (I = M.theme.components) == null ? void 0 : I[f]) == null ? void 0 : U.styleOverrides;
        if (!k)
          return null;
        const A = {};
        for (const re in k)
          A[re] = Bt(M, k[re]);
        return g(M, A);
      }), f && !c && K.push(function(M) {
        var A, I;
        const L = M.theme, k = (I = (A = L == null ? void 0 : L.components) == null ? void 0 : A[f]) == null ? void 0 : I.variants;
        return k ? Zr(M, k) : null;
      }), x || K.push(nt), Array.isArray(F[0])) {
        const R = F.shift(), M = new Array(D.length).fill(""), L = new Array(K.length).fill("");
        let k;
        k = [...M, ...R, ...L], k.raw = [...M, ...R.raw, ...L], D.unshift(k);
      }
      const G = [...D, ...F, ...K], u = N(...G);
      return a.muiName && (u.muiName = a.muiName), process.env.NODE_ENV !== "production" && (u.displayName = Ps(f, h, a)), u;
    };
    return N.withConfig && (T.withConfig = N.withConfig), T;
  };
}
function Ps(e, t, n) {
  return e ? `${e}${Ve(t || "")}` : `Styled(${ws(n)})`;
}
function $s(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${eo(t || "Root")}`), n;
}
function ks(e) {
  for (const t in e)
    return !1;
  return !0;
}
function _s(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function eo(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Cn(e, t) {
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
              n[o][d] = Cn(i[d], s[d]);
            }
        }
      } else n[o] === void 0 && (n[o] = e[o]);
    }
  return n;
}
const wn = typeof window < "u" ? _.useLayoutEffect : _.useEffect;
function Is(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Fn(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Is(e, t, n);
}
function Ds(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function De(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return De(Ds(e));
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
const Ms = (e) => {
  const t = De(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, ut = (e, t) => {
  try {
    return Ms(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function sn(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function to(e) {
  e = De(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (f, h = (f + n / 30) % 12) => o - i * Math.max(Math.min(h - 3, 9 - h, 1), -1);
  let a = "rgb";
  const d = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", d.push(t[3])), sn({
    type: a,
    values: d
  });
}
function On(e) {
  e = De(e);
  let t = e.type === "hsl" || e.type === "hsla" ? De(to(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function br(e, t) {
  const n = On(e), r = On(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Rn(e, t) {
  return e = De(e), t = Fn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, sn(e);
}
function It(e, t, n) {
  try {
    return Rn(e, t);
  } catch {
    return e;
  }
}
function Ln(e, t) {
  if (e = De(e), t = Fn(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return sn(e);
}
function oe(e, t, n) {
  try {
    return Ln(e, t);
  } catch {
    return e;
  }
}
function jn(e, t) {
  if (e = De(e), t = Fn(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return sn(e);
}
function ie(e, t, n) {
  try {
    return jn(e, t);
  } catch {
    return e;
  }
}
function Bs(e, t = 0.15) {
  return On(e) > 0.5 ? Ln(e, t) : jn(e, t);
}
function Dt(e, t, n) {
  try {
    return Bs(e, t);
  } catch {
    return e;
  }
}
function Fs(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function no(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  const d = i.type;
  return typeof d == "function" && !Fs(d) && (a = "Did you accidentally use a plain function component for an element instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const St = bt(l.element, no);
St.isRequired = bt(l.element.isRequired, no);
const Ls = "exact-prop: ​";
function ro(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Ls]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function vr(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function js(e, t = 166) {
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
function Pe(e) {
  return e && e.ownerDocument || document;
}
function rt(e) {
  return Pe(e).defaultView || window;
}
function An(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Er(e) {
  const t = _.useRef(e);
  return wn(() => {
    t.current = e;
  }), _.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Be(...e) {
  return _.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      An(n, t);
    });
  }, e);
}
const xr = {};
function zs(e, t) {
  const n = _.useRef(xr);
  return n.current === xr && (n.current = e(t)), n;
}
const Vs = [];
function Us(e) {
  _.useEffect(e, Vs);
}
class zn {
  constructor() {
    At(this, "currentId", null);
    At(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    At(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new zn();
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
function Ws() {
  const e = zs(zn.create).current;
  return Us(e.disposeEffect), e;
}
function Gs(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function Ys(e) {
  return typeof e == "string";
}
function qs(e, t, n) {
  return e === void 0 || Ys(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function oo(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Sr(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Hs(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const g = Ae(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), y = {
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
  const s = oo({
    ...o,
    ...r
  }), a = Sr(r), d = Sr(o), f = t(s), h = Ae(f == null ? void 0 : f.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), p = {
    ...f == null ? void 0 : f.style,
    ...n == null ? void 0 : n.style,
    ...o == null ? void 0 : o.style,
    ...r == null ? void 0 : r.style
  }, m = {
    ...f,
    ...n,
    ...d,
    ...a
  };
  return h.length > 0 && (m.className = h), Object.keys(p).length > 0 && (m.style = p), {
    props: m,
    internalRef: f.ref
  };
}
function Ks(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function an(e) {
  var t;
  return parseInt(_.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const Qs = /* @__PURE__ */ _.createContext(void 0);
process.env.NODE_ENV !== "production" && (l.node, l.object);
function Xs(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? Cn(o.defaultProps, r) : !o.styleOverrides && !o.variants ? Cn(o, r) : r;
}
function Js({
  props: e,
  name: t
}) {
  const n = _.useContext(Qs);
  return Xs({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const Tr = {
  theme: void 0
};
function Zs(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (Tr.theme = o.theme, i = Jr(e(Tr)), t = i, n = o.theme), i;
  };
}
function ea(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const Cr = (e, t, n, r = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = n : o && typeof o == "object" && (o[i] = n) : o && typeof o == "object" && (o[i] || (o[i] = r.includes(i) ? [] : {}), o = o[i]);
  });
}, ta = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([a, d]) => {
      (!n || n && !n([...i, a])) && d != null && (typeof d == "object" && Object.keys(d).length > 0 ? r(d, [...i, a], Array.isArray(d) ? [...s, a] : s) : t([...i, a], d, s));
    });
  }
  r(e);
}, na = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function bn(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return ta(
    e,
    (a, d, f) => {
      if ((typeof d == "string" || typeof d == "number") && (!r || !r(a, d))) {
        const h = `--${n ? `${n}-` : ""}${a.join("-")}`, p = na(a, d);
        Object.assign(o, {
          [h]: p
        }), Cr(i, a, `var(${h})`, f), Cr(s, a, `var(${h}, ${p})`, f);
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
function ra(e, t = {}) {
  const {
    getSelector: n = x,
    disableCssColorScheme: r,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: s,
    defaultColorScheme: a = "light",
    ...d
  } = e, {
    vars: f,
    css: h,
    varsWithDefaults: p
  } = bn(d, t);
  let m = p;
  const g = {}, {
    [a]: y,
    ...c
  } = i;
  if (Object.entries(c || {}).forEach(([S, T]) => {
    const {
      vars: b,
      css: D,
      varsWithDefaults: F
    } = bn(T, t);
    m = Ee(m, F), g[S] = {
      css: D,
      vars: b
    };
  }), y) {
    const {
      css: S,
      vars: T,
      varsWithDefaults: b
    } = bn(y, t);
    m = Ee(m, b), g[a] = {
      css: S,
      vars: T
    };
  }
  function x(S, T) {
    var D, F;
    let b = o;
    if (o === "class" && (b = ".%s"), o === "data" && (b = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (b = `[${o}="%s"]`), S) {
      if (b === "media")
        return e.defaultColorScheme === S ? ":root" : {
          [`@media (prefers-color-scheme: ${((F = (D = i[S]) == null ? void 0 : D.palette) == null ? void 0 : F.mode) || S})`]: {
            ":root": T
          }
        };
      if (b)
        return e.defaultColorScheme === S ? `:root, ${b.replace("%s", String(S))}` : b.replace("%s", String(S));
    }
    return ":root";
  }
  return {
    vars: m,
    generateThemeVars: () => {
      let S = {
        ...f
      };
      return Object.entries(g).forEach(([, {
        vars: T
      }]) => {
        S = Ee(S, T);
      }), S;
    },
    generateStyleSheets: () => {
      var K, G;
      const S = [], T = e.defaultColorScheme || "light";
      function b(u, R) {
        Object.keys(R).length && S.push(typeof u == "string" ? {
          [u]: {
            ...R
          }
        } : u);
      }
      b(n(void 0, {
        ...h
      }), h);
      const {
        [T]: D,
        ...F
      } = g;
      if (D) {
        const {
          css: u
        } = D, R = (G = (K = i[T]) == null ? void 0 : K.palette) == null ? void 0 : G.mode, M = !r && R ? {
          colorScheme: R,
          ...u
        } : {
          ...u
        };
        b(n(T, {
          ...M
        }), M);
      }
      return Object.entries(F).forEach(([u, {
        css: R
      }]) => {
        var k, A;
        const M = (A = (k = i[u]) == null ? void 0 : k.palette) == null ? void 0 : A.mode, L = !r && M ? {
          colorScheme: M,
          ...R
        } : {
          ...R
        };
        b(n(u, {
          ...L
        }), L);
      }), S;
    }
  };
}
function oa(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const gt = {
  black: "#000",
  white: "#fff"
}, ia = {
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
}, Ye = {
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
}, lt = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, He = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Ke = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Qe = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function io() {
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
      paper: gt.white,
      default: gt.white
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
const sa = io();
function so() {
  return {
    text: {
      primary: gt.white,
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
      active: gt.white,
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
const wr = so();
function Or(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = jn(e.main, o) : t === "dark" && (e.dark = Ln(e.main, i)));
}
function aa(e = "light") {
  return e === "dark" ? {
    main: He[200],
    light: He[50],
    dark: He[400]
  } : {
    main: He[700],
    light: He[400],
    dark: He[800]
  };
}
function la(e = "light") {
  return e === "dark" ? {
    main: Ye[200],
    light: Ye[50],
    dark: Ye[400]
  } : {
    main: Ye[500],
    light: Ye[300],
    dark: Ye[700]
  };
}
function ca(e = "light") {
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
function ua(e = "light") {
  return e === "dark" ? {
    main: Ke[400],
    light: Ke[300],
    dark: Ke[700]
  } : {
    main: Ke[700],
    light: Ke[500],
    dark: Ke[900]
  };
}
function fa(e = "light") {
  return e === "dark" ? {
    main: Qe[400],
    light: Qe[300],
    dark: Qe[700]
  } : {
    main: Qe[800],
    light: Qe[500],
    dark: Qe[900]
  };
}
function da(e = "light") {
  return e === "dark" ? {
    main: lt[400],
    light: lt[300],
    dark: lt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: lt[500],
    dark: lt[900]
  };
}
function Vn(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...o
  } = e, i = e.primary || aa(t), s = e.secondary || la(t), a = e.error || ca(t), d = e.info || ua(t), f = e.success || fa(t), h = e.warning || da(t);
  function p(c) {
    const x = br(c, wr.text.primary) >= n ? wr.text.primary : sa.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const O = br(c, x);
      O < 3 && console.error([`MUI: The contrast ratio of ${O}:1 for ${x} on ${c}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return x;
  }
  const m = ({
    color: c,
    name: x,
    mainShade: O = 500,
    lightShade: N = 300,
    darkShade: S = 700
  }) => {
    if (c = {
      ...c
    }, !c.main && c[O] && (c.main = c[O]), !c.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${x ? ` (${x})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${O}\` property.` : Ie(11, x ? ` (${x})` : "", O));
    if (typeof c.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${x ? ` (${x})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(c.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ie(12, x ? ` (${x})` : "", JSON.stringify(c.main)));
    return Or(c, "light", N, r), Or(c, "dark", S, r), c.contrastText || (c.contrastText = p(c.main)), c;
  };
  let g;
  return t === "light" ? g = io() : t === "dark" && (g = so()), process.env.NODE_ENV !== "production" && (g || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ee({
    // A collection of common colors.
    common: {
      ...gt
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: m({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: m({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: m({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: h,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: d,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: ia,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: m,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...g
  }, o);
}
function pa(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function ma(e, t) {
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
function ha(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Rr = {
  textTransform: "uppercase"
}, Ar = '"Roboto", "Helvetica", "Arial", sans-serif';
function ga(e, t) {
  const {
    fontFamily: n = Ar,
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
    pxToRem: h,
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof r != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof d != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const m = r / 14, g = h || ((x) => `${x / d * m}rem`), y = (x, O, N, S, T) => ({
    fontFamily: n,
    fontWeight: x,
    fontSize: g(O),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: N,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Ar ? {
      letterSpacing: `${ha(S / O)}em`
    } : {},
    ...T,
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
    button: y(s, 14, 1.75, 0.4, Rr),
    caption: y(i, 12, 1.66, 0.4),
    overline: y(i, 12, 2.66, 1, Rr),
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
const ya = 0.2, ba = 0.14, va = 0.12;
function fe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ya})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ba})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${va})`].join(",");
}
const Ea = ["none", fe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), fe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), fe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), fe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), fe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), fe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), fe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), fe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), fe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), fe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), fe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), fe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), fe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), fe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), fe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), fe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), fe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), fe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), fe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), fe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), fe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), fe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), fe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), fe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], xa = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Sa = {
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
function Nr(e) {
  return `${Math.round(e)}ms`;
}
function Ta(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Ca(e) {
  const t = {
    ...xa,
    ...e.easing
  }, n = {
    ...Sa,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Ta,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: a = t.easeInOut,
        delay: d = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const h = (m) => typeof m == "string", p = (m) => !Number.isNaN(parseFloat(m));
        !h(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(s) && !h(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), h(a) || console.error('MUI: Argument "easing" must be a string.'), !p(d) && !h(d) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((h) => `${h} ${typeof s == "string" ? s : Nr(s)} ${a} ${typeof d == "string" ? d : Nr(d)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const wa = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Oa(e) {
  return Re(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function ao(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, a] = o[i];
      !Oa(a) || s.startsWith("unstable_") ? delete r[s] : Re(a) && (r[s] = {
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
function Nn(e = {}, ...t) {
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
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Ie(20));
  const h = Vn(i), p = Bn(e);
  let m = Ee(p, {
    mixins: ma(p.breakpoints, r),
    palette: h,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Ea.slice(),
    typography: ga(h, a),
    transitions: Ca(s),
    zIndex: {
      ...wa
    }
  });
  if (m = Ee(m, f), m = t.reduce((g, y) => Ee(g, y), m), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], y = (c, x) => {
      let O;
      for (O in c) {
        const N = c[O];
        if (g.includes(O) && Object.keys(N).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const S = Ue("", O);
            console.error([`MUI: The \`${x}\` component increases the CSS specificity of the \`${O}\` internal state.`, "You can not override it like this: ", JSON.stringify(c, null, 2), "", `Instead, you need to use the '&.${S}' syntax:`, JSON.stringify({
              root: {
                [`&.${S}`]: N
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          c[O] = {};
        }
      }
    };
    Object.keys(m.components).forEach((c) => {
      const x = m.components[c].styleOverrides;
      x && c.startsWith("Mui") && y(x, c);
    });
  }
  return m.unstable_sxConfig = {
    ...on,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, m.unstable_sx = function(y) {
    return nt({
      sx: y,
      theme: this
    });
  }, m.toRuntimeSource = ao, m;
}
function Pn(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Ra = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Pn(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function lo(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function co(e) {
  return e === "dark" ? Ra : [];
}
function Aa(e) {
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
      ...lo(i.mode),
      ...n
    },
    overlays: r || co(i.mode),
    ...o
  };
}
function Na(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Pa = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], $a = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Pa(e.cssVarPrefix).forEach((a) => {
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
function ka(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function v(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function ft(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : to(e);
}
function Oe(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = ut(ft(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function _a(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ce = (e) => {
  try {
    return e();
  } catch {
  }
}, Ia = (e = "mui") => ea(e);
function vn(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = Aa({
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
  } = Nn({
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
      ...lo(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || co(o)
  }, s;
}
function Da(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: s = Na,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: d = ":root",
    ...f
  } = e, h = Object.keys(n)[0], p = r || (n.light && h !== "light" ? "light" : h), m = Ia(i), {
    [p]: g,
    light: y,
    dark: c,
    ...x
  } = n, O = {
    ...x
  };
  let N = g;
  if ((p === "dark" && !("dark" in n) || p === "light" && !("light" in n)) && (N = !0), !N)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : Ie(21, p));
  const S = vn(O, N, f, p);
  y && !O.light && vn(O, y, void 0, "light"), c && !O.dark && vn(O, c, void 0, "dark");
  let T = {
    defaultColorScheme: p,
    ...S,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: d,
    getCssVar: m,
    colorSchemes: O,
    font: {
      ...pa(S.typography),
      ...S.font
    },
    spacing: _a(f.spacing)
  };
  Object.keys(T.colorSchemes).forEach((G) => {
    const u = T.colorSchemes[G].palette, R = (M) => {
      const L = M.split("-"), k = L[1], A = L[2];
      return m(M, u[k][A]);
    };
    if (u.mode === "light" && (v(u.common, "background", "#fff"), v(u.common, "onBackground", "#000")), u.mode === "dark" && (v(u.common, "background", "#000"), v(u.common, "onBackground", "#fff")), ka(u, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), u.mode === "light") {
      v(u.Alert, "errorColor", oe(u.error.light, 0.6)), v(u.Alert, "infoColor", oe(u.info.light, 0.6)), v(u.Alert, "successColor", oe(u.success.light, 0.6)), v(u.Alert, "warningColor", oe(u.warning.light, 0.6)), v(u.Alert, "errorFilledBg", R("palette-error-main")), v(u.Alert, "infoFilledBg", R("palette-info-main")), v(u.Alert, "successFilledBg", R("palette-success-main")), v(u.Alert, "warningFilledBg", R("palette-warning-main")), v(u.Alert, "errorFilledColor", Ce(() => u.getContrastText(u.error.main))), v(u.Alert, "infoFilledColor", Ce(() => u.getContrastText(u.info.main))), v(u.Alert, "successFilledColor", Ce(() => u.getContrastText(u.success.main))), v(u.Alert, "warningFilledColor", Ce(() => u.getContrastText(u.warning.main))), v(u.Alert, "errorStandardBg", ie(u.error.light, 0.9)), v(u.Alert, "infoStandardBg", ie(u.info.light, 0.9)), v(u.Alert, "successStandardBg", ie(u.success.light, 0.9)), v(u.Alert, "warningStandardBg", ie(u.warning.light, 0.9)), v(u.Alert, "errorIconColor", R("palette-error-main")), v(u.Alert, "infoIconColor", R("palette-info-main")), v(u.Alert, "successIconColor", R("palette-success-main")), v(u.Alert, "warningIconColor", R("palette-warning-main")), v(u.AppBar, "defaultBg", R("palette-grey-100")), v(u.Avatar, "defaultBg", R("palette-grey-400")), v(u.Button, "inheritContainedBg", R("palette-grey-300")), v(u.Button, "inheritContainedHoverBg", R("palette-grey-A100")), v(u.Chip, "defaultBorder", R("palette-grey-400")), v(u.Chip, "defaultAvatarColor", R("palette-grey-700")), v(u.Chip, "defaultIconColor", R("palette-grey-700")), v(u.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), v(u.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), v(u.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), v(u.LinearProgress, "primaryBg", ie(u.primary.main, 0.62)), v(u.LinearProgress, "secondaryBg", ie(u.secondary.main, 0.62)), v(u.LinearProgress, "errorBg", ie(u.error.main, 0.62)), v(u.LinearProgress, "infoBg", ie(u.info.main, 0.62)), v(u.LinearProgress, "successBg", ie(u.success.main, 0.62)), v(u.LinearProgress, "warningBg", ie(u.warning.main, 0.62)), v(u.Skeleton, "bg", `rgba(${R("palette-text-primaryChannel")} / 0.11)`), v(u.Slider, "primaryTrack", ie(u.primary.main, 0.62)), v(u.Slider, "secondaryTrack", ie(u.secondary.main, 0.62)), v(u.Slider, "errorTrack", ie(u.error.main, 0.62)), v(u.Slider, "infoTrack", ie(u.info.main, 0.62)), v(u.Slider, "successTrack", ie(u.success.main, 0.62)), v(u.Slider, "warningTrack", ie(u.warning.main, 0.62));
      const M = Dt(u.background.default, 0.8);
      v(u.SnackbarContent, "bg", M), v(u.SnackbarContent, "color", Ce(() => u.getContrastText(M))), v(u.SpeedDialAction, "fabHoverBg", Dt(u.background.paper, 0.15)), v(u.StepConnector, "border", R("palette-grey-400")), v(u.StepContent, "border", R("palette-grey-400")), v(u.Switch, "defaultColor", R("palette-common-white")), v(u.Switch, "defaultDisabledColor", R("palette-grey-100")), v(u.Switch, "primaryDisabledColor", ie(u.primary.main, 0.62)), v(u.Switch, "secondaryDisabledColor", ie(u.secondary.main, 0.62)), v(u.Switch, "errorDisabledColor", ie(u.error.main, 0.62)), v(u.Switch, "infoDisabledColor", ie(u.info.main, 0.62)), v(u.Switch, "successDisabledColor", ie(u.success.main, 0.62)), v(u.Switch, "warningDisabledColor", ie(u.warning.main, 0.62)), v(u.TableCell, "border", ie(It(u.divider, 1), 0.88)), v(u.Tooltip, "bg", It(u.grey[700], 0.92));
    }
    if (u.mode === "dark") {
      v(u.Alert, "errorColor", ie(u.error.light, 0.6)), v(u.Alert, "infoColor", ie(u.info.light, 0.6)), v(u.Alert, "successColor", ie(u.success.light, 0.6)), v(u.Alert, "warningColor", ie(u.warning.light, 0.6)), v(u.Alert, "errorFilledBg", R("palette-error-dark")), v(u.Alert, "infoFilledBg", R("palette-info-dark")), v(u.Alert, "successFilledBg", R("palette-success-dark")), v(u.Alert, "warningFilledBg", R("palette-warning-dark")), v(u.Alert, "errorFilledColor", Ce(() => u.getContrastText(u.error.dark))), v(u.Alert, "infoFilledColor", Ce(() => u.getContrastText(u.info.dark))), v(u.Alert, "successFilledColor", Ce(() => u.getContrastText(u.success.dark))), v(u.Alert, "warningFilledColor", Ce(() => u.getContrastText(u.warning.dark))), v(u.Alert, "errorStandardBg", oe(u.error.light, 0.9)), v(u.Alert, "infoStandardBg", oe(u.info.light, 0.9)), v(u.Alert, "successStandardBg", oe(u.success.light, 0.9)), v(u.Alert, "warningStandardBg", oe(u.warning.light, 0.9)), v(u.Alert, "errorIconColor", R("palette-error-main")), v(u.Alert, "infoIconColor", R("palette-info-main")), v(u.Alert, "successIconColor", R("palette-success-main")), v(u.Alert, "warningIconColor", R("palette-warning-main")), v(u.AppBar, "defaultBg", R("palette-grey-900")), v(u.AppBar, "darkBg", R("palette-background-paper")), v(u.AppBar, "darkColor", R("palette-text-primary")), v(u.Avatar, "defaultBg", R("palette-grey-600")), v(u.Button, "inheritContainedBg", R("palette-grey-800")), v(u.Button, "inheritContainedHoverBg", R("palette-grey-700")), v(u.Chip, "defaultBorder", R("palette-grey-700")), v(u.Chip, "defaultAvatarColor", R("palette-grey-300")), v(u.Chip, "defaultIconColor", R("palette-grey-300")), v(u.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), v(u.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), v(u.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), v(u.LinearProgress, "primaryBg", oe(u.primary.main, 0.5)), v(u.LinearProgress, "secondaryBg", oe(u.secondary.main, 0.5)), v(u.LinearProgress, "errorBg", oe(u.error.main, 0.5)), v(u.LinearProgress, "infoBg", oe(u.info.main, 0.5)), v(u.LinearProgress, "successBg", oe(u.success.main, 0.5)), v(u.LinearProgress, "warningBg", oe(u.warning.main, 0.5)), v(u.Skeleton, "bg", `rgba(${R("palette-text-primaryChannel")} / 0.13)`), v(u.Slider, "primaryTrack", oe(u.primary.main, 0.5)), v(u.Slider, "secondaryTrack", oe(u.secondary.main, 0.5)), v(u.Slider, "errorTrack", oe(u.error.main, 0.5)), v(u.Slider, "infoTrack", oe(u.info.main, 0.5)), v(u.Slider, "successTrack", oe(u.success.main, 0.5)), v(u.Slider, "warningTrack", oe(u.warning.main, 0.5));
      const M = Dt(u.background.default, 0.98);
      v(u.SnackbarContent, "bg", M), v(u.SnackbarContent, "color", Ce(() => u.getContrastText(M))), v(u.SpeedDialAction, "fabHoverBg", Dt(u.background.paper, 0.15)), v(u.StepConnector, "border", R("palette-grey-600")), v(u.StepContent, "border", R("palette-grey-600")), v(u.Switch, "defaultColor", R("palette-grey-300")), v(u.Switch, "defaultDisabledColor", R("palette-grey-600")), v(u.Switch, "primaryDisabledColor", oe(u.primary.main, 0.55)), v(u.Switch, "secondaryDisabledColor", oe(u.secondary.main, 0.55)), v(u.Switch, "errorDisabledColor", oe(u.error.main, 0.55)), v(u.Switch, "infoDisabledColor", oe(u.info.main, 0.55)), v(u.Switch, "successDisabledColor", oe(u.success.main, 0.55)), v(u.Switch, "warningDisabledColor", oe(u.warning.main, 0.55)), v(u.TableCell, "border", oe(It(u.divider, 1), 0.68)), v(u.Tooltip, "bg", It(u.grey[700], 0.92));
    }
    Oe(u.background, "default"), Oe(u.background, "paper"), Oe(u.common, "background"), Oe(u.common, "onBackground"), Oe(u, "divider"), Object.keys(u).forEach((M) => {
      const L = u[M];
      M !== "tonalOffset" && L && typeof L == "object" && (L.main && v(u[M], "mainChannel", ut(ft(L.main))), L.light && v(u[M], "lightChannel", ut(ft(L.light))), L.dark && v(u[M], "darkChannel", ut(ft(L.dark))), L.contrastText && v(u[M], "contrastTextChannel", ut(ft(L.contrastText))), M === "text" && (Oe(u[M], "primary"), Oe(u[M], "secondary")), M === "action" && (L.active && Oe(u[M], "active"), L.selected && Oe(u[M], "selected")));
    });
  }), T = t.reduce((G, u) => Ee(G, u), T);
  const b = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: $a(T)
  }, {
    vars: D,
    generateThemeVars: F,
    generateStyleSheets: K
  } = ra(T, b);
  return T.vars = D, Object.entries(T.colorSchemes[T.defaultColorScheme]).forEach(([G, u]) => {
    T[G] = u;
  }), T.generateThemeVars = F, T.generateStyleSheets = K, T.generateSpacing = function() {
    return Qr(f.spacing, Dn(this));
  }, T.getColorSchemeSelector = oa(a), T.spacing = T.generateSpacing(), T.shouldSkipGeneratingVar = s, T.unstable_sxConfig = {
    ...on,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, T.unstable_sx = function(u) {
    return nt({
      sx: u,
      theme: this
    });
  }, T.toRuntimeSource = ao, T;
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
function Ma(e = {}, ...t) {
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
      return Nn(e, ...t);
    let h = n;
    "palette" in e || f[a] && (f[a] !== !0 ? h = f[a].palette : a === "dark" && (h = {
      mode: "dark"
    }));
    const p = Nn({
      ...e,
      palette: h
    }, ...t);
    return p.defaultColorScheme = a, p.colorSchemes = f, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: p.palette
    }, Pr(p, "dark", f.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: p.palette
    }, Pr(p, "light", f.light)), p;
  }
  return !n && !("light" in f) && a === "light" && (f.light = !0), Da({
    ...s,
    colorSchemes: f,
    defaultColorScheme: a,
    ...typeof r != "boolean" && r
  }, ...t);
}
const uo = Ma(), fo = "$$material";
function ln() {
  const e = xs(uo);
  return process.env.NODE_ENV !== "production" && _.useDebugValue(e), e[fo] || e;
}
function Ba(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Fa = (e) => Ba(e) && e !== "classes", We = Ns({
  themeId: fo,
  defaultTheme: uo,
  rootShouldForwardProp: Fa
});
process.env.NODE_ENV !== "production" && (l.node, l.object.isRequired);
function Tt(e) {
  return Js(e);
}
function La(e, t) {
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
function ja(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, $n(e, t);
}
const $r = {
  disabled: !1
};
var za = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.shape({
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
const po = ct.createContext(null);
var Va = function(t) {
  return t.scrollTop;
}, dt = "unmounted", Le = "exited", je = "entering", Je = "entered", kn = "exiting", we = /* @__PURE__ */ function(e) {
  ja(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = o, a = s && !s.isMounting ? r.enter : r.appear, d;
    return i.appearStatus = null, r.in ? a ? (d = Le, i.appearStatus = je) : d = Je : r.unmountOnExit || r.mountOnEnter ? d = dt : d = Le, i.state = {
      status: d
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === dt ? {
      status: Le
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== je && s !== Je && (i = je) : (s === je || s === Je) && (i = kn);
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
          var s = this.props.nodeRef ? this.props.nodeRef.current : Pt.findDOMNode(this);
          s && Va(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Le && this.setState({
      status: dt
    });
  }, n.performEnter = function(o) {
    var i = this, s = this.props.enter, a = this.context ? this.context.isMounting : o, d = this.props.nodeRef ? [a] : [Pt.findDOMNode(this), a], f = d[0], h = d[1], p = this.getTimeouts(), m = a ? p.appear : p.enter;
    if (!o && !s || $r.disabled) {
      this.safeSetState({
        status: Je
      }, function() {
        i.props.onEntered(f);
      });
      return;
    }
    this.props.onEnter(f, h), this.safeSetState({
      status: je
    }, function() {
      i.props.onEntering(f, h), i.onTransitionEnd(m, function() {
        i.safeSetState({
          status: Je
        }, function() {
          i.props.onEntered(f, h);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), a = this.props.nodeRef ? void 0 : Pt.findDOMNode(this);
    if (!i || $r.disabled) {
      this.safeSetState({
        status: Le
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
          status: Le
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
    var s = this.props.nodeRef ? this.props.nodeRef.current : Pt.findDOMNode(this), a = o == null && !this.props.addEndListener;
    if (!s || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var d = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], f = d[0], h = d[1];
      this.props.addEndListener(f, h);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === dt)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var a = La(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ct.createElement(po.Provider, {
        value: null
      }, typeof s == "function" ? s(o, a) : ct.cloneElement(ct.Children.only(s), a))
    );
  }, t;
}(ct.Component);
we.contextType = po;
we.propTypes = process.env.NODE_ENV !== "production" ? {
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
    var n = za;
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
function Xe() {
}
we.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Xe,
  onEntering: Xe,
  onEntered: Xe,
  onExit: Xe,
  onExiting: Xe,
  onExited: Xe
};
we.UNMOUNTED = dt;
we.EXITED = Le;
we.ENTERING = je;
we.ENTERED = Je;
we.EXITING = kn;
const mo = (e) => e.scrollTop;
function Wt(e, t) {
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
function _n(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Ua = {
  entering: {
    opacity: 1,
    transform: _n(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, En = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Gt = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    easing: s,
    in: a,
    onEnter: d,
    onEntered: f,
    onEntering: h,
    onExit: p,
    onExited: m,
    onExiting: g,
    style: y,
    timeout: c = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = we,
    ...O
  } = t, N = Ws(), S = _.useRef(), T = ln(), b = _.useRef(null), D = Be(b, an(i), n), F = (A) => (I) => {
    if (A) {
      const U = b.current;
      I === void 0 ? A(U) : A(U, I);
    }
  }, K = F(h), G = F((A, I) => {
    mo(A);
    const {
      duration: U,
      delay: re,
      easing: me
    } = Wt({
      style: y,
      timeout: c,
      easing: s
    }, {
      mode: "enter"
    });
    let C;
    c === "auto" ? (C = T.transitions.getAutoHeightDuration(A.clientHeight), S.current = C) : C = U, A.style.transition = [T.transitions.create("opacity", {
      duration: C,
      delay: re
    }), T.transitions.create("transform", {
      duration: En ? C : C * 0.666,
      delay: re,
      easing: me
    })].join(","), d && d(A, I);
  }), u = F(f), R = F(g), M = F((A) => {
    const {
      duration: I,
      delay: U,
      easing: re
    } = Wt({
      style: y,
      timeout: c,
      easing: s
    }, {
      mode: "exit"
    });
    let me;
    c === "auto" ? (me = T.transitions.getAutoHeightDuration(A.clientHeight), S.current = me) : me = I, A.style.transition = [T.transitions.create("opacity", {
      duration: me,
      delay: U
    }), T.transitions.create("transform", {
      duration: En ? me : me * 0.666,
      delay: En ? U : U || me * 0.333,
      easing: re
    })].join(","), A.style.opacity = 0, A.style.transform = _n(0.75), p && p(A);
  }), L = F(m);
  return /* @__PURE__ */ E(x, {
    appear: o,
    in: a,
    nodeRef: b,
    onEnter: G,
    onEntered: u,
    onEntering: K,
    onExit: M,
    onExited: L,
    onExiting: R,
    addEndListener: (A) => {
      c === "auto" && N.start(S.current || 0, A), r && r(b.current, A);
    },
    timeout: c === "auto" ? null : c,
    ...O,
    children: (A, {
      ownerState: I,
      ...U
    }) => /* @__PURE__ */ _.cloneElement(i, {
      style: {
        opacity: 0,
        transform: _n(0.75),
        visibility: A === "exited" && !a ? "hidden" : void 0,
        ...Ua[A],
        ...y,
        ...i.props.style
      },
      ref: D,
      ...U
    })
  });
});
process.env.NODE_ENV !== "production" && (Gt.propTypes = {
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
  children: St.isRequired,
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
Gt && (Gt.muiSupportAuto = !0);
function Wa(e) {
  const t = Pe(e);
  return t.body === e ? rt(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function ht(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function kr(e) {
  return parseInt(rt(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Ga(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function _r(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = !i.includes(s), d = !Ga(s);
    a && d && ht(s, o);
  });
}
function xn(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function Ya(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Wa(r)) {
      const s = Gs(rt(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${kr(r) + s}px`;
      const a = Pe(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (d) => {
        n.push({
          value: d.style.paddingRight,
          property: "padding-right",
          el: d
        }), d.style.paddingRight = `${kr(d) + s}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = Pe(r).body;
    else {
      const s = r.parentElement, a = rt(r);
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
function qa(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Ha {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && ht(t.modalRef, !1);
    const o = qa(n);
    _r(n, t.mount, t.modalRef, o, !0);
    const i = xn(this.containers, (s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = xn(this.containers, (i) => i.modals.includes(t)), o = this.containers[r];
    o.restore || (o.restore = Ya(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = xn(this.containers, (s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && ht(t.modalRef, n), _r(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && ht(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Ka = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Qa(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Xa(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Ja(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Xa(e));
}
function Za(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Ka)).forEach((r, o) => {
    const i = Qa(r);
    i === -1 || !Ja(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function el() {
  return !0;
}
function Yt(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = Za,
    isEnabled: s = el,
    open: a
  } = e, d = _.useRef(!1), f = _.useRef(null), h = _.useRef(null), p = _.useRef(null), m = _.useRef(null), g = _.useRef(!1), y = _.useRef(null), c = Be(an(t), y), x = _.useRef(null);
  _.useEffect(() => {
    !a || !y.current || (g.current = !n);
  }, [n, a]), _.useEffect(() => {
    if (!a || !y.current)
      return;
    const S = Pe(y.current);
    return y.current.contains(S.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), g.current && y.current.focus()), () => {
      o || (p.current && p.current.focus && (d.current = !0, p.current.focus()), p.current = null);
    };
  }, [a]), _.useEffect(() => {
    if (!a || !y.current)
      return;
    const S = Pe(y.current), T = (F) => {
      x.current = F, !(r || !s() || F.key !== "Tab") && S.activeElement === y.current && F.shiftKey && (d.current = !0, h.current && h.current.focus());
    }, b = () => {
      var G, u;
      const F = y.current;
      if (F === null)
        return;
      if (!S.hasFocus() || !s() || d.current) {
        d.current = !1;
        return;
      }
      if (F.contains(S.activeElement) || r && S.activeElement !== f.current && S.activeElement !== h.current)
        return;
      if (S.activeElement !== m.current)
        m.current = null;
      else if (m.current !== null)
        return;
      if (!g.current)
        return;
      let K = [];
      if ((S.activeElement === f.current || S.activeElement === h.current) && (K = i(y.current)), K.length > 0) {
        const R = !!((G = x.current) != null && G.shiftKey && ((u = x.current) == null ? void 0 : u.key) === "Tab"), M = K[0], L = K[K.length - 1];
        typeof M != "string" && typeof L != "string" && (R ? L.focus() : M.focus());
      } else
        F.focus();
    };
    S.addEventListener("focusin", b), S.addEventListener("keydown", T, !0);
    const D = setInterval(() => {
      S.activeElement && S.activeElement.tagName === "BODY" && b();
    }, 50);
    return () => {
      clearInterval(D), S.removeEventListener("focusin", b), S.removeEventListener("keydown", T, !0);
    };
  }, [n, r, o, s, a, i]);
  const O = (S) => {
    p.current === null && (p.current = S.relatedTarget), g.current = !0, m.current = S.target;
    const T = t.props.onFocus;
    T && T(S);
  }, N = (S) => {
    p.current === null && (p.current = S.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ ee(_.Fragment, {
    children: [/* @__PURE__ */ E("div", {
      tabIndex: a ? 0 : -1,
      onFocus: N,
      ref: f,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ _.cloneElement(t, {
      ref: c,
      onFocus: O
    }), /* @__PURE__ */ E("div", {
      tabIndex: a ? 0 : -1,
      onFocus: N,
      ref: h,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Yt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: St,
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
process.env.NODE_ENV !== "production" && (Yt.propTypes = ro(Yt.propTypes));
function tl(e) {
  return typeof e == "function" ? e() : e;
}
const qt = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, a] = _.useState(null), d = Be(/* @__PURE__ */ _.isValidElement(r) ? an(r) : null, n);
  if (wn(() => {
    i || a(tl(o) || document.body);
  }, [o, i]), wn(() => {
    if (s && !i)
      return An(n, s), () => {
        An(n, null);
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
  return s && /* @__PURE__ */ qo.createPortal(r, s);
});
process.env.NODE_ENV !== "production" && (qt.propTypes = {
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
  container: l.oneOfType([jt, l.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: l.bool
});
process.env.NODE_ENV !== "production" && (qt.propTypes = ro(qt.propTypes));
const Un = Zs;
function ot(e, t) {
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
    slots: h = {
      [e]: void 0
    },
    slotProps: p = {
      [e]: void 0
    },
    ...m
  } = i, g = h[e] || r, y = Ks(p[e], o), {
    props: {
      component: c,
      ...x
    },
    internalRef: O
  } = Hs({
    className: n,
    ...d,
    externalForwardedProps: e === "root" ? m : void 0,
    externalSlotProps: y
  }), N = Be(O, y == null ? void 0 : y.ref, t.ref), S = e === "root" ? c || f : c, T = qs(g, {
    ...e === "root" && !f && !h[e] && s,
    ...e !== "root" && !h[e] && s,
    ...x,
    ...S && !a && {
      as: S
    },
    ...S && a && {
      component: S
    },
    ref: N
  }, o);
  return [g, T];
}
const nl = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, ho = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = ln(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: a,
    easing: d,
    in: f,
    onEnter: h,
    onEntered: p,
    onEntering: m,
    onExit: g,
    onExited: y,
    onExiting: c,
    style: x,
    timeout: O = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: N = we,
    ...S
  } = t, T = _.useRef(null), b = Be(T, an(a), n), D = (k) => (A) => {
    if (k) {
      const I = T.current;
      A === void 0 ? k(I) : k(I, A);
    }
  }, F = D(m), K = D((k, A) => {
    mo(k);
    const I = Wt({
      style: x,
      timeout: O,
      easing: d
    }, {
      mode: "enter"
    });
    k.style.webkitTransition = r.transitions.create("opacity", I), k.style.transition = r.transitions.create("opacity", I), h && h(k, A);
  }), G = D(p), u = D(c), R = D((k) => {
    const A = Wt({
      style: x,
      timeout: O,
      easing: d
    }, {
      mode: "exit"
    });
    k.style.webkitTransition = r.transitions.create("opacity", A), k.style.transition = r.transitions.create("opacity", A), g && g(k);
  }), M = D(y);
  return /* @__PURE__ */ E(N, {
    appear: s,
    in: f,
    nodeRef: T,
    onEnter: K,
    onEntered: G,
    onEntering: F,
    onExit: R,
    onExited: M,
    onExiting: u,
    addEndListener: (k) => {
      i && i(T.current, k);
    },
    timeout: O,
    ...S,
    children: (k, {
      ownerState: A,
      ...I
    }) => /* @__PURE__ */ _.cloneElement(a, {
      style: {
        opacity: 0,
        visibility: k === "exited" && !f ? "hidden" : void 0,
        ...nl[k],
        ...x,
        ...a.props.style
      },
      ref: b,
      ...I
    })
  });
});
process.env.NODE_ENV !== "production" && (ho.propTypes = {
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
  children: St.isRequired,
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
function rl(e) {
  return Ue("MuiBackdrop", e);
}
xt("MuiBackdrop", ["root", "invisible"]);
const ol = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return yt({
    root: ["root", n && "invisible"]
  }, rl, t);
}, il = We("div", {
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
}), go = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Tt({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: o,
    className: i,
    component: s = "div",
    invisible: a = !1,
    open: d,
    components: f = {},
    componentsProps: h = {},
    slotProps: p = {},
    slots: m = {},
    TransitionComponent: g,
    transitionDuration: y,
    ...c
  } = r, x = {
    ...r,
    component: s,
    invisible: a
  }, O = ol(x), N = {
    transition: g,
    root: f.Root,
    ...m
  }, S = {
    ...h,
    ...p
  }, T = {
    slots: N,
    slotProps: S
  }, [b, D] = ot("root", {
    elementType: il,
    externalForwardedProps: T,
    className: Ae(O.root, i),
    ownerState: x
  }), [F, K] = ot("transition", {
    elementType: ho,
    externalForwardedProps: T,
    ownerState: x
  });
  return /* @__PURE__ */ E(F, {
    in: d,
    timeout: y,
    ...c,
    ...K,
    children: /* @__PURE__ */ E(b, {
      "aria-hidden": !0,
      ...D,
      classes: O,
      ref: n,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (go.propTypes = {
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
function sl(e) {
  return typeof e == "function" ? e() : e;
}
function al(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Ir = () => {
}, Mt = new Ha();
function ll(e) {
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
    rootRef: h
  } = e, p = _.useRef({}), m = _.useRef(null), g = _.useRef(null), y = Be(g, h), [c, x] = _.useState(!f), O = al(a);
  let N = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (N = !1);
  const S = () => Pe(m.current), T = () => (p.current.modalRef = g.current, p.current.mount = m.current, p.current), b = () => {
    Mt.mount(T(), {
      disableScrollLock: r
    }), g.current && (g.current.scrollTop = 0);
  }, D = Er(() => {
    const A = sl(t) || S().body;
    Mt.add(T(), A), g.current && b();
  }), F = () => Mt.isTopModal(T()), K = Er((A) => {
    m.current = A, A && (f && F() ? b() : g.current && ht(g.current, N));
  }), G = _.useCallback(() => {
    Mt.remove(T(), N);
  }, [N]);
  _.useEffect(() => () => {
    G();
  }, [G]), _.useEffect(() => {
    f ? D() : (!O || !o) && G();
  }, [f, G, O, o, D]);
  const u = (A) => (I) => {
    var U;
    (U = A.onKeyDown) == null || U.call(A, I), !(I.key !== "Escape" || I.which === 229 || // Wait until IME is settled.
    !F()) && (n || (I.stopPropagation(), d && d(I, "escapeKeyDown")));
  }, R = (A) => (I) => {
    var U;
    (U = A.onClick) == null || U.call(A, I), I.target === I.currentTarget && d && d(I, "backdropClick");
  };
  return {
    getRootProps: (A = {}) => {
      const I = oo(e);
      delete I.onTransitionEnter, delete I.onTransitionExited;
      const U = {
        ...I,
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
        onKeyDown: u(U),
        ref: y
      };
    },
    getBackdropProps: (A = {}) => {
      const I = A;
      return {
        "aria-hidden": !0,
        ...I,
        onClick: R(I),
        open: f
      };
    },
    getTransitionProps: () => {
      const A = () => {
        x(!1), i && i();
      }, I = () => {
        x(!0), s && s(), o && G();
      };
      return {
        onEnter: vr(A, (a == null ? void 0 : a.props.onEnter) ?? Ir),
        onExited: vr(I, (a == null ? void 0 : a.props.onExited) ?? Ir)
      };
    },
    rootRef: y,
    portalRef: K,
    isTopModal: F,
    exited: c,
    hasTransition: O
  };
}
function cl(e) {
  return Ue("MuiModal", e);
}
xt("MuiModal", ["root", "hidden", "backdrop"]);
function ul(e) {
  return Ue("MuiSvgIcon", e);
}
xt("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const fl = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Ve(t)}`, `fontSize${Ve(n)}`]
  };
  return yt(o, ul, r);
}, dl = We("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${Ve(n.color)}`], t[`fontSize${Ve(n.fontSize)}`]];
  }
})(Un(({
  theme: e
}) => {
  var t, n, r, o, i, s, a, d, f, h, p, m, g, y;
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
          fontSize: ((h = (f = e.typography) == null ? void 0 : f.pxToRem) == null ? void 0 : h.call(f, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, c]) => c && c.main).map(([c]) => {
        var x, O;
        return {
          props: {
            color: c
          },
          style: {
            color: (O = (x = (e.vars ?? e).palette) == null ? void 0 : x[c]) == null ? void 0 : O.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (m = (p = (e.vars ?? e).palette) == null ? void 0 : p.action) == null ? void 0 : m.active
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
})), Ht = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Tt({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: a = "svg",
    fontSize: d = "medium",
    htmlColor: f,
    inheritViewBox: h = !1,
    titleAccess: p,
    viewBox: m = "0 0 24 24",
    ...g
  } = r, y = /* @__PURE__ */ _.isValidElement(o) && o.type === "svg", c = {
    ...r,
    color: s,
    component: a,
    fontSize: d,
    instanceFontSize: t.fontSize,
    inheritViewBox: h,
    viewBox: m,
    hasSvgAsChild: y
  }, x = {};
  h || (x.viewBox = m);
  const O = fl(c);
  return /* @__PURE__ */ ee(dl, {
    as: a,
    className: Ae(O.root, i),
    focusable: "false",
    color: f,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: n,
    ...x,
    ...g,
    ...y && o.props,
    ownerState: c,
    children: [y ? o.props.children : o, p ? /* @__PURE__ */ E("title", {
      children: p
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Ht.propTypes = {
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
Ht.muiName = "SvgIcon";
function Wn(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ E(Ht, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...r,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = Ht.muiName, /* @__PURE__ */ _.memo(/* @__PURE__ */ _.forwardRef(n));
}
const pl = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return yt({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, cl, r);
}, ml = We("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(Un(({
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
}))), hl = We(go, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), yo = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Tt({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: o = hl,
    BackdropProps: i,
    classes: s,
    className: a,
    closeAfterTransition: d = !1,
    children: f,
    container: h,
    component: p,
    components: m = {},
    componentsProps: g = {},
    disableAutoFocus: y = !1,
    disableEnforceFocus: c = !1,
    disableEscapeKeyDown: x = !1,
    disablePortal: O = !1,
    disableRestoreFocus: N = !1,
    disableScrollLock: S = !1,
    hideBackdrop: T = !1,
    keepMounted: b = !1,
    onBackdropClick: D,
    onClose: F,
    onTransitionEnter: K,
    onTransitionExited: G,
    open: u,
    slotProps: R = {},
    slots: M = {},
    // eslint-disable-next-line react/prop-types
    theme: L,
    ...k
  } = r, A = {
    ...r,
    closeAfterTransition: d,
    disableAutoFocus: y,
    disableEnforceFocus: c,
    disableEscapeKeyDown: x,
    disablePortal: O,
    disableRestoreFocus: N,
    disableScrollLock: S,
    hideBackdrop: T,
    keepMounted: b
  }, {
    getRootProps: I,
    getBackdropProps: U,
    getTransitionProps: re,
    portalRef: me,
    isTopModal: C,
    exited: P,
    hasTransition: Y
  } = ll({
    ...A,
    rootRef: n
  }), j = {
    ...A,
    exited: P
  }, $ = pl(j), W = {};
  if (f.props.tabIndex === void 0 && (W.tabIndex = "-1"), Y) {
    const {
      onEnter: w,
      onExited: ae
    } = re();
    W.onEnter = w, W.onExited = ae;
  }
  const z = {
    ...k,
    slots: {
      root: m.Root,
      backdrop: m.Backdrop,
      ...M
    },
    slotProps: {
      ...g,
      ...R
    }
  }, [q, Q] = ot("root", {
    elementType: ml,
    externalForwardedProps: z,
    getSlotProps: I,
    additionalProps: {
      ref: n,
      as: p
    },
    ownerState: j,
    className: Ae(a, $ == null ? void 0 : $.root, !j.open && j.exited && ($ == null ? void 0 : $.hidden))
  }), [X, B] = ot("backdrop", {
    elementType: o,
    externalForwardedProps: z,
    additionalProps: i,
    getSlotProps: (w) => U({
      ...w,
      onClick: (ae) => {
        D && D(ae), w != null && w.onClick && w.onClick(ae);
      }
    }),
    className: Ae(i == null ? void 0 : i.className, $ == null ? void 0 : $.backdrop),
    ownerState: j
  }), H = Be(i == null ? void 0 : i.ref, B.ref);
  return !b && !u && (!Y || P) ? null : /* @__PURE__ */ E(qt, {
    ref: me,
    container: h,
    disablePortal: O,
    children: /* @__PURE__ */ ee(q, {
      ...Q,
      children: [!T && o ? /* @__PURE__ */ E(X, {
        ...B,
        ref: H
      }) : null, /* @__PURE__ */ E(Yt, {
        disableEnforceFocus: c,
        disableAutoFocus: y,
        disableRestoreFocus: N,
        isEnabled: C,
        open: u,
        children: /* @__PURE__ */ _.cloneElement(f, W)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (yo.propTypes = {
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
  children: St.isRequired,
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
  container: l.oneOfType([jt, l.func]),
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
function gl(e) {
  return Ue("MuiPaper", e);
}
xt("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const yl = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return yt(i, gl, o);
}, bl = We("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(Un(({
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
}))), bo = /* @__PURE__ */ _.forwardRef(function(t, n) {
  var g;
  const r = Tt({
    props: t,
    name: "MuiPaper"
  }), o = ln(), {
    className: i,
    component: s = "div",
    elevation: a = 1,
    square: d = !1,
    variant: f = "elevation",
    ...h
  } = r, p = {
    ...r,
    component: s,
    elevation: a,
    square: d,
    variant: f
  }, m = yl(p);
  return process.env.NODE_ENV !== "production" && o.shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ E(bl, {
    as: s,
    ownerState: p,
    className: Ae(m.root, i),
    ref: n,
    ...h,
    style: {
      ...f === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[a],
        ...o.vars && {
          "--Paper-overlay": (g = o.vars.overlays) == null ? void 0 : g[a]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Rn("#fff", Pn(a))}, ${Rn("#fff", Pn(a))})`
        }
      },
      ...h.style
    }
  });
});
process.env.NODE_ENV !== "production" && (bo.propTypes = {
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
  elevation: bt(Yr, (e) => {
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
function vl(e) {
  return Ue("MuiPopover", e);
}
xt("MuiPopover", ["root", "paper"]);
function Dr(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Mr(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Br(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Ft(e) {
  return typeof e == "function" ? e() : e;
}
const El = (e) => {
  const {
    classes: t
  } = e;
  return yt({
    root: ["root"],
    paper: ["paper"]
  }, vl, t);
}, xl = We(yo, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Sl = We(bo, {
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
}), vo = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Tt({
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
    className: h,
    container: p,
    elevation: m = 8,
    marginThreshold: g = 16,
    open: y,
    PaperProps: c = {},
    slots: x = {},
    slotProps: O = {},
    transformOrigin: N = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: S = Gt,
    transitionDuration: T = "auto",
    TransitionProps: {
      onEntering: b,
      ...D
    } = {},
    disableScrollLock: F = !1,
    ...K
  } = r, G = (O == null ? void 0 : O.paper) ?? c, u = _.useRef(), R = {
    ...r,
    anchorOrigin: s,
    anchorReference: d,
    elevation: m,
    marginThreshold: g,
    externalPaperSlotProps: G,
    transformOrigin: N,
    TransitionComponent: S,
    transitionDuration: T,
    TransitionProps: D
  }, M = El(R), L = _.useCallback(() => {
    if (d === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (a || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), a;
    const B = Ft(i), H = B && B.nodeType === 1 ? B : Pe(u.current).body, w = H.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ae = H.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ae.top === 0 && ae.left === 0 && ae.right === 0 && ae.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: w.top + Dr(w, s.vertical),
      left: w.left + Mr(w, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, a, d]), k = _.useCallback((B) => ({
    vertical: Dr(B, N.vertical),
    horizontal: Mr(B, N.horizontal)
  }), [N.horizontal, N.vertical]), A = _.useCallback((B) => {
    const H = {
      width: B.offsetWidth,
      height: B.offsetHeight
    }, w = k(H);
    if (d === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Br(w)
      };
    const ae = L();
    let ge = ae.top - w.vertical, be = ae.left - w.horizontal;
    const st = ge + H.height, Ct = be + H.width, wt = rt(Ft(i)), Fe = wt.innerHeight - g, Ot = wt.innerWidth - g;
    if (g !== null && ge < g) {
      const ye = ge - g;
      ge -= ye, w.vertical += ye;
    } else if (g !== null && st > Fe) {
      const ye = st - Fe;
      ge -= ye, w.vertical += ye;
    }
    if (process.env.NODE_ENV !== "production" && H.height > Fe && H.height && Fe && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${H.height - Fe}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), g !== null && be < g) {
      const ye = be - g;
      be -= ye, w.horizontal += ye;
    } else if (Ct > Ot) {
      const ye = Ct - Ot;
      be -= ye, w.horizontal += ye;
    }
    return {
      top: `${Math.round(ge)}px`,
      left: `${Math.round(be)}px`,
      transformOrigin: Br(w)
    };
  }, [i, d, L, k, g]), [I, U] = _.useState(y), re = _.useCallback(() => {
    const B = u.current;
    if (!B)
      return;
    const H = A(B);
    H.top !== null && B.style.setProperty("top", H.top), H.left !== null && (B.style.left = H.left), B.style.transformOrigin = H.transformOrigin, U(!0);
  }, [A]);
  _.useEffect(() => (F && window.addEventListener("scroll", re), () => window.removeEventListener("scroll", re)), [i, F, re]);
  const me = (B, H) => {
    b && b(B, H), re();
  }, C = () => {
    U(!1);
  };
  _.useEffect(() => {
    y && re();
  }), _.useImperativeHandle(o, () => y ? {
    updatePosition: () => {
      re();
    }
  } : null, [y, re]), _.useEffect(() => {
    if (!y)
      return;
    const B = js(() => {
      re();
    }), H = rt(i);
    return H.addEventListener("resize", B), () => {
      B.clear(), H.removeEventListener("resize", B);
    };
  }, [i, y, re]);
  let P = T;
  T === "auto" && !S.muiSupportAuto && (P = void 0);
  const Y = p || (i ? Pe(Ft(i)).body : void 0), j = {
    slots: x,
    slotProps: {
      ...O,
      paper: G
    }
  }, [$, W] = ot("paper", {
    elementType: Sl,
    externalForwardedProps: j,
    additionalProps: {
      elevation: m,
      className: Ae(M.paper, G == null ? void 0 : G.className),
      style: I ? G.style : {
        ...G.style,
        opacity: 0
      }
    },
    ownerState: R
  }), [z, {
    slotProps: q,
    ...Q
  }] = ot("root", {
    elementType: xl,
    externalForwardedProps: j,
    additionalProps: {
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: Y,
      open: y
    },
    ownerState: R,
    className: Ae(M.root, h)
  }), X = Be(u, W.ref);
  return /* @__PURE__ */ E(z, {
    ...Q,
    ...!li(z) && {
      slotProps: q,
      disableScrollLock: F
    },
    ...K,
    ref: n,
    children: /* @__PURE__ */ E(S, {
      appear: !0,
      in: y,
      onEntering: me,
      onExited: C,
      timeout: P,
      ...D,
      children: /* @__PURE__ */ E($, {
        ...W,
        ref: X,
        children: f
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (vo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: ri,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: bt(l.oneOfType([jt, l.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Ft(e.anchorEl);
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
  container: l.oneOfType([jt, l.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: l.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Yr,
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
    component: si
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
const Tl = Wn(/* @__PURE__ */ E("path", {
  d: "M3 17v2h6v-2zM3 5v2h10V5zm10 16v-2h8v-2h-8v-2h-2v6zM7 9v2H3v2h4v2h2V9zm14 4v-2H11v2zm-6-4h2V7h4V5h-4V3h-2z"
}), "Tune"), Fr = ["IS NULL", "IS NOT NULL", "is_null", "is_not_null"], Cl = ["IS NULL", "IS NOT NULL", "NOT IN"];
function wl(e, t, n) {
  return [...t].sort((o, i) => i.length - o.length), Ol(e);
}
function Ol(e, t, n) {
  if (e = (e || "").trim(), !e) return { type: "group", combinator: "AND", not: !1, rules: [] };
  const r = Rl(e);
  return Al(r);
}
function Rl(e) {
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
function Al(e, t, n) {
  let r = 0;
  function o() {
    for (const f of Cl) {
      const h = f.split(" ");
      let p = !0;
      for (let m = 0; m < h.length; m++) {
        const g = r + m;
        if (g >= e.length || e[g].type !== "word" || e[g].value.toUpperCase() !== h[m]) {
          p = !1;
          break;
        }
      }
      if (p) return { op: f, wordCount: h.length };
    }
    return null;
  }
  function i() {
    const f = [], h = [];
    for (f.push(a()); r < e.length; ) {
      const g = e[r];
      if (g && g.type === "word" && (g.value.toUpperCase() === "AND" || g.value.toUpperCase() === "OR"))
        h.push(g.value.toUpperCase()), r++, f.push(a());
      else
        break;
    }
    if (f.length === 1) return f[0];
    const p = h[0] || "AND";
    return h.every((g) => g === p) ? { type: "group", combinator: p, not: !1, rules: f } : s(f, h);
  }
  function s(f, h) {
    const p = [];
    let m = [f[0]];
    for (let g = 0; g < h.length; g++)
      h[g] === "AND" ? m.push(f[g + 1]) : (m.length === 1 ? p.push(m[0]) : p.push({
        type: "group",
        combinator: "AND",
        not: !1,
        rules: m
      }), m = [f[g + 1]]);
    return m.length === 1 ? p.push(m[0]) : p.push({
      type: "group",
      combinator: "AND",
      not: !1,
      rules: m
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
        const x = a();
        return x.type === "group" ? { ...x, not: !0 } : { type: "group", combinator: "AND", not: !0, rules: [x] };
      }
    }
    if (f.type === "paren" && f.value === "(") {
      r++;
      const c = i();
      return r < e.length && e[r].type === "paren" && e[r].value === ")" && r++, c.type === "group" ? c : { type: "group", combinator: "AND", not: !1, rules: [c] };
    }
    const h = f.value;
    if (r++, r >= e.length)
      return { type: "rule", column: h, operator: "", value: "" };
    const p = o();
    let m;
    if (p)
      m = p.op, r += p.wordCount;
    else {
      const c = e[r];
      m = c ? c.value : "", r++;
    }
    if (it(m))
      return { type: "rule", column: h, operator: m, value: "" };
    if (r >= e.length)
      return { type: "rule", column: h, operator: m, value: "" };
    let g = "";
    const y = e[r];
    if (y && y.type === "word" && y.value.toUpperCase() !== "AND" && y.value.toUpperCase() !== "OR")
      g = y.value, r++;
    else if (y && y.type === "paren" && (m.toUpperCase() === "IN" || m.toUpperCase() === "NOT IN" || m === "in" || m === "not_in") && y.value === "(") {
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
    return { type: "rule", column: h, operator: m, value: g };
  }
  const d = i();
  return d.type === "rule" ? { type: "group", combinator: "AND", not: !1, rules: [d] } : d;
}
function it(e) {
  return Fr.includes(e) || Fr.includes(e.toUpperCase());
}
function Nl(e, t) {
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
    const h = f.trim();
    if (!h) continue;
    if (h.split(/\s+/).length < 2)
      return {
        isValid: !1,
        error: 'Incomplete condition. Expected: <column> <operator> <value> (e.g. name == "John").'
      };
  }
  return { isValid: !0, error: null };
}
function Pl(e, t, n, r) {
  if (!e) return [];
  const o = /"[^"]*"?|\[[^\]]*\]?|[()]|\s+|\S+/g, i = e.match(o) || [], s = t || [], a = n || [], d = (r || []).map((g) => g.toUpperCase()), f = a.filter((g) => g.includes(" ")), h = [];
  let p = "column", m = 0;
  for (; m < i.length; ) {
    const g = i[m];
    if (/^\s+$/.test(g)) {
      h.push({ type: "whitespace", text: g }), m++;
      continue;
    }
    if (g === "(" || g === ")") {
      h.push({ type: "paren", text: g }), g === "(" && (p = "column"), m++;
      continue;
    }
    if (g.toUpperCase() === "NOT" && p === "column") {
      h.push({ type: "logical", text: g }), m++;
      continue;
    }
    if (p === "operator") {
      let c = null;
      for (const x of f) {
        const O = x.split(" ");
        let N = m, S = !0;
        const T = [];
        for (const b of O) {
          for (; N < i.length && /^\s+$/.test(i[N]); )
            T.push(i[N]), N++;
          if (N >= i.length || i[N].toUpperCase() !== b.toUpperCase()) {
            S = !1;
            break;
          }
          T.push(i[N]), N++;
        }
        if (S) {
          c = { text: T.join(""), endIdx: N, op: x };
          break;
        }
      }
      if (c) {
        for (let x = m; x < c.endIdx; x++)
          /^\s+$/.test(i[x]) ? h.push({ type: "whitespace", text: i[x] }) : h.push({ type: "operator", text: i[x] });
        m = c.endIdx, it(c.op) ? p = "logical" : p = "value";
        continue;
      }
    }
    let y;
    p === "column" ? d.includes(g.toUpperCase()) ? (y = "logical", p = "column") : (y = s.includes(g) ? "column" : "customColumn", p = "operator") : p === "operator" ? (y = a.includes(g) ? "operator" : "unknownOperator", it(g) ? p = "logical" : p = "value") : p === "value" ? (y = "value", p = "logical") : d.includes(g.toUpperCase()) ? (y = "logical", p = "column") : y = "value", h.push({ type: y, text: g }), m++;
  }
  return h;
}
function Eo(e) {
  if (!e || e.type !== "group") return [];
  const t = [];
  for (const n of e.rules || [])
    n.type === "rule" ? t.push({
      column: n.column,
      operator: n.operator,
      value: n.value
    }) : n.type === "group" && t.push(...Eo(n));
  return t;
}
function xo(e) {
  if (!e || e.type !== "group") return "";
  const t = [];
  for (const r of e.rules || [])
    if (r.type === "rule" && r.column && r.operator)
      it(r.operator) ? t.push(`${r.column} ${r.operator}`) : t.push(`${r.column} ${r.operator} ${r.value}`);
    else if (r.type === "group") {
      const o = xo(r);
      o && t.push(`(${o})`);
    }
  const n = t.join(` ${e.combinator} `);
  return e.not ? `NOT (${n})` : n;
}
const Sn = {
  flex: { xs: "1 1 100%", sm: 1 },
  minWidth: 0
};
function So() {
  return { type: "rule", column: "", operator: "", value: "" };
}
function To(e = "AND") {
  return {
    type: "group",
    combinator: e,
    not: !1,
    rules: [So()]
  };
}
const $l = ({
  rule: e,
  index: t,
  columnsOperator: n,
  onChange: r,
  onDelete: o,
  sx: i = {}
}) => {
  var h;
  const { columnSelectSx: s, operatorSelectSx: a, valueInputSx: d, deleteButtonSx: f } = i;
  return /* @__PURE__ */ ee(
    se,
    {
      sx: {
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 1, sm: 1.5 },
        alignItems: { xs: "stretch", sm: "center" },
        py: 0.5
      },
      children: [
        /* @__PURE__ */ ee(
          Hn,
          {
            size: "small",
            value: e.column,
            onChange: (p) => r(t, "column", p.target.value),
            displayEmpty: !0,
            fullWidth: !0,
            sx: { ...Sn, ...s },
            children: [
              /* @__PURE__ */ E(Nt, { value: "", disabled: !0, children: "Select Column" }),
              Object.keys(n).map((p) => /* @__PURE__ */ E(Nt, { value: p, children: p }, p))
            ]
          }
        ),
        /* @__PURE__ */ ee(
          Hn,
          {
            size: "small",
            value: e.operator,
            onChange: (p) => r(t, "operator", p.target.value),
            displayEmpty: !0,
            disabled: !e.column,
            fullWidth: !0,
            sx: { ...Sn, ...a },
            children: [
              /* @__PURE__ */ E(Nt, { value: "", disabled: !0, children: "Select Operator" }),
              e.column && ((h = n[e.column]) == null ? void 0 : h.operators.map((p) => /* @__PURE__ */ E(Nt, { value: p, children: p }, p)))
            ]
          }
        ),
        !it(e.operator) && /* @__PURE__ */ E(
          Mo,
          {
            size: "small",
            value: e.value,
            onChange: (p) => r(t, "value", p.target.value),
            placeholder: "Enter value",
            fullWidth: !0,
            sx: { ...Sn, ...d }
          }
        ),
        /* @__PURE__ */ E(et, { title: "Delete Rule", children: /* @__PURE__ */ E(
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
            children: /* @__PURE__ */ E(jr, { fontSize: "small" })
          }
        ) })
      ]
    }
  );
}, Co = ({
  group: e,
  path: t,
  columnsOperator: n,
  onChange: r,
  onDelete: o,
  isRoot: i,
  sx: s = {}
}) => {
  const a = (c, x) => {
    x !== null && r(t, { ...e, combinator: x });
  }, d = () => {
    r(t, { ...e, not: !e.not });
  }, f = () => {
    r(t, { ...e, rules: [...e.rules, So()] });
  }, h = () => {
    r(t, { ...e, rules: [...e.rules, To()] });
  }, p = (c, x, O) => {
    const N = e.rules.map((S, T) => {
      if (T !== c) return S;
      const b = { ...S, [x]: O };
      return x === "operator" && it(O) && (b.value = ""), b;
    });
    r(t, { ...e, rules: N });
  }, m = (c) => {
    const x = e.rules.filter((O, N) => N !== c);
    r(t, { ...e, rules: x });
  }, g = (c, x) => {
    const O = c[c.length - 1], N = e.rules.map(
      (S, T) => T === O ? x : S
    );
    r(t, { ...e, rules: N });
  }, y = (c) => {
    const x = e.rules.filter((O, N) => N !== c);
    r(t, { ...e, rules: x });
  };
  return /* @__PURE__ */ ee(
    se,
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
        /* @__PURE__ */ ee(
          se,
          {
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 1.5,
              flexWrap: "wrap"
            },
            children: [
              /* @__PURE__ */ E(
                _o,
                {
                  checked: e.not,
                  onClick: d,
                  size: "small",
                  sx: { p: 0.5 }
                }
              ),
              /* @__PURE__ */ E(ue, { variant: "body2", sx: { fontWeight: 500, mr: 0.5 }, children: "NOT" }),
              /* @__PURE__ */ ee(
                Io,
                {
                  value: e.combinator,
                  exclusive: !0,
                  onChange: a,
                  size: "small",
                  sx: { height: 28 },
                  children: [
                    /* @__PURE__ */ E(
                      qn,
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
                    /* @__PURE__ */ E(
                      qn,
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
              /* @__PURE__ */ E(se, { sx: { flex: 1 } }),
              /* @__PURE__ */ E(et, { title: "Add Rule", children: /* @__PURE__ */ E(ze, { onClick: f, size: "small", color: "primary", children: /* @__PURE__ */ E(Kn, { fontSize: "small" }) }) }),
              /* @__PURE__ */ E(et, { title: "Add Group", children: /* @__PURE__ */ E(
                ze,
                {
                  onClick: h,
                  size: "small",
                  color: "primary",
                  sx: {
                    border: "1px solid",
                    borderColor: "primary.main",
                    borderRadius: "50%",
                    width: 28,
                    height: 28
                  },
                  children: /* @__PURE__ */ E(Kn, { fontSize: "small" })
                }
              ) }),
              !i && /* @__PURE__ */ E(et, { title: "Delete Group", children: /* @__PURE__ */ E(ze, { onClick: () => o(), color: "error", size: "small", children: /* @__PURE__ */ E(jr, { fontSize: "small" }) }) })
            ]
          }
        ),
        /* @__PURE__ */ E(Do, { spacing: 1, children: e.rules.map(
          (c, x) => c.type === "group" ? /* @__PURE__ */ E(
            Co,
            {
              group: c,
              path: [...t, x],
              columnsOperator: n,
              onChange: g,
              onDelete: () => y(x),
              isRoot: !1,
              sx: s
            },
            x
          ) : /* @__PURE__ */ E(
            $l,
            {
              rule: c,
              index: x,
              columnsOperator: n,
              onChange: p,
              onDelete: m,
              sx: s
            },
            x
          )
        ) })
      ]
    }
  );
}, kl = ({
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
  } = o, [h, p] = xe(
    () => r && r.type === "group" ? r : To("AND")
  );
  pt(() => {
    r && r.type === "group" && p(r);
  }, [r]);
  const m = (g, y) => {
    p(y);
  };
  return /* @__PURE__ */ ee(
    se,
    {
      sx: {
        width: "100%",
        padding: { xs: 1, sm: 2 },
        boxSizing: "border-box",
        ...i
      },
      children: [
        /* @__PURE__ */ E(
          Co,
          {
            group: h,
            path: [],
            columnsOperator: e,
            onChange: m,
            onDelete: () => {
            },
            isRoot: !0,
            sx: f
          }
        ),
        /* @__PURE__ */ ee(
          se,
          {
            sx: {
              display: "flex",
              justifyContent: "flex-end",
              gap: 1,
              mt: 2.5,
              ...s
            },
            children: [
              /* @__PURE__ */ E(
                Lt,
                {
                  variant: "contained",
                  color: "primary",
                  onClick: () => t(h),
                  sx: a,
                  children: "Search"
                }
              ),
              /* @__PURE__ */ E(Lt, { variant: "outlined", sx: d, children: "Cancel" })
            ]
          }
        )
      ]
    }
  );
}, _l = Wn(/* @__PURE__ */ E("path", {
  d: "M11 18h2v-2h-2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4"
}), "HelpOutline"), Il = Wn(/* @__PURE__ */ E("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), Dl = {
  column: "primary.main",
  customColumn: "info.main",
  operator: "error.main",
  unknownOperator: "text.disabled",
  logical: "secondary.main",
  paren: "warning.main",
  value: "text.primary"
}, Lr = {
  column: 400,
  customColumn: 400,
  operator: 600,
  unknownOperator: 400,
  logical: 600,
  paren: 700,
  value: 400
}, Ml = 'Type a query like: column operator value — e.g. name == "John"', Bl = ({ open: e, onClose: t, sx: n = {} }) => {
  const {
    dialog: r,
    title: o,
    closeButton: i,
    content: s,
    sectionTitle: a,
    body: d,
    codeBlock: f,
    exampleBlock: h,
    exampleLabel: p,
    list: m,
    listItem: g,
    chip: y,
    divider: c,
    actions: x,
    gotItButton: O,
    colorLegendItem: N,
    colorSwatch: S,
    warningText: T
  } = n;
  return /* @__PURE__ */ ee(
    Uo,
    {
      open: e,
      onClose: t,
      maxWidth: "md",
      fullWidth: !0,
      scroll: "paper",
      sx: r,
      children: [
        /* @__PURE__ */ ee(Wo, { sx: { pr: 6, ...o }, children: [
          "How to Use the Query Search",
          /* @__PURE__ */ E(
            ze,
            {
              onClick: t,
              size: "small",
              sx: { position: "absolute", right: 12, top: 12, ...i },
              "aria-label": "close",
              children: /* @__PURE__ */ E(Il, { fontSize: "small" })
            }
          )
        ] }),
        /* @__PURE__ */ ee(Go, { dividers: !0, sx: s, children: [
          /* @__PURE__ */ E(ue, { variant: "h6", gutterBottom: !0, sx: a, children: "Overview" }),
          /* @__PURE__ */ ee(ue, { variant: "body2", paragraph: !0, sx: d, children: [
            "The query search box lets you filter data using a simple, readable query language. Type your conditions directly into the search field and press ",
            /* @__PURE__ */ E("strong", { children: "Apply" }),
            " to run the query. Suggestions will appear as you type to guide you through valid columns, operators, and logical connectors."
          ] }),
          /* @__PURE__ */ E(at, { sx: { my: 2, ...c } }),
          /* @__PURE__ */ E(ue, { variant: "h6", gutterBottom: !0, sx: a, children: "Basic Syntax" }),
          /* @__PURE__ */ E(ue, { variant: "body2", paragraph: !0, sx: d, children: "Every condition follows this pattern:" }),
          /* @__PURE__ */ E(
            se,
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
                ...f
              },
              children: "column  operator  value"
            }
          ),
          /* @__PURE__ */ E(ue, { variant: "body2", paragraph: !0, sx: d, children: "Each part is separated by a single space:" }),
          /* @__PURE__ */ ee(se, { component: "ul", sx: { mt: 0, mb: 2, pl: 3, ...m }, children: [
            /* @__PURE__ */ ee(
              ue,
              {
                component: "li",
                variant: "body2",
                gutterBottom: !0,
                sx: g,
                children: [
                  /* @__PURE__ */ E("strong", { children: "column" }),
                  " — the field you want to filter on (e.g.",
                  " ",
                  /* @__PURE__ */ E(
                    Ge,
                    {
                      label: "name",
                      size: "small",
                      sx: { fontFamily: "monospace", ...y }
                    }
                  ),
                  ",",
                  " ",
                  /* @__PURE__ */ E(
                    Ge,
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
            /* @__PURE__ */ ee(
              ue,
              {
                component: "li",
                variant: "body2",
                gutterBottom: !0,
                sx: g,
                children: [
                  /* @__PURE__ */ E("strong", { children: "operator" }),
                  " — the comparison to apply (e.g.",
                  " ",
                  /* @__PURE__ */ E(
                    Ge,
                    {
                      label: "==",
                      size: "small",
                      sx: { fontFamily: "monospace", ...y }
                    }
                  ),
                  ",",
                  " ",
                  /* @__PURE__ */ E(
                    Ge,
                    {
                      label: "contains",
                      size: "small",
                      sx: { fontFamily: "monospace", ...y }
                    }
                  ),
                  ",",
                  " ",
                  /* @__PURE__ */ E(
                    Ge,
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
            /* @__PURE__ */ ee(
              ue,
              {
                component: "li",
                variant: "body2",
                gutterBottom: !0,
                sx: g,
                children: [
                  /* @__PURE__ */ E("strong", { children: "value" }),
                  " — what you are comparing against. Wrap values that contain spaces in double quotes:",
                  " ",
                  /* @__PURE__ */ E(
                    Ge,
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
          /* @__PURE__ */ E(at, { sx: { my: 2, ...c } }),
          /* @__PURE__ */ E(ue, { variant: "h6", gutterBottom: !0, sx: a, children: "Combining Conditions" }),
          /* @__PURE__ */ ee(ue, { variant: "body2", paragraph: !0, sx: d, children: [
            "Use ",
            /* @__PURE__ */ E("strong", { children: "AND" }),
            " or ",
            /* @__PURE__ */ E("strong", { children: "OR" }),
            " (uppercase) to join multiple conditions:"
          ] }),
          /* @__PURE__ */ E(
            se,
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
                ...f
              },
              children: `condition1 AND condition2 AND condition3
condition1 OR  condition2`
            }
          ),
          /* @__PURE__ */ E(ue, { variant: "h6", gutterBottom: !0, sx: a, children: "Grouping with Parentheses" }),
          /* @__PURE__ */ ee(ue, { variant: "body2", paragraph: !0, sx: d, children: [
            "You can mix ",
            /* @__PURE__ */ E("strong", { children: "AND" }),
            " and ",
            /* @__PURE__ */ E("strong", { children: "OR" }),
            " in the same query by using parentheses ",
            /* @__PURE__ */ E("strong", { children: "( )" }),
            " to group conditions:"
          ] }),
          /* @__PURE__ */ E(
            se,
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
                ...f
              },
              children: `name == "John" AND (status == active OR status == pending)
(price > 100 AND price < 500) OR category == sale`
            }
          ),
          /* @__PURE__ */ ee(ue, { variant: "body2", paragraph: !0, sx: d, children: [
            "Without parentheses, ",
            /* @__PURE__ */ E("strong", { children: "AND" }),
            " binds tighter than",
            " ",
            /* @__PURE__ */ E("strong", { children: "OR" }),
            ":"
          ] }),
          /* @__PURE__ */ E(
            se,
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
                ...f
              },
              children: `a = 1 OR b = 2 AND c = 3
// is the same as: a = 1 OR (b = 2 AND c = 3)`
            }
          ),
          /* @__PURE__ */ E(ue, { variant: "h6", gutterBottom: !0, sx: a, children: "NOT (Negation)" }),
          /* @__PURE__ */ ee(ue, { variant: "body2", paragraph: !0, sx: d, children: [
            "Prefix a group with ",
            /* @__PURE__ */ E("strong", { children: "NOT" }),
            " to negate it:"
          ] }),
          /* @__PURE__ */ E(
            se,
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
                ...f
              },
              children: "NOT (status == inactive OR status == deleted)"
            }
          ),
          /* @__PURE__ */ E(at, { sx: { my: 2, ...c } }),
          /* @__PURE__ */ E(ue, { variant: "h6", gutterBottom: !0, sx: a, children: "Examples" }),
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
          ].map(({ label: b, code: D }) => /* @__PURE__ */ ee(se, { mb: 1.5, children: [
            /* @__PURE__ */ E(
              ue,
              {
                variant: "caption",
                sx: {
                  color: "text.secondary",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                  ...p
                },
                children: b
              }
            ),
            /* @__PURE__ */ E(
              se,
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
                  ...h
                },
                children: D
              }
            )
          ] }, b)),
          /* @__PURE__ */ E(at, { sx: { my: 2, ...c } }),
          /* @__PURE__ */ E(ue, { variant: "h6", gutterBottom: !0, sx: a, children: "Tips" }),
          /* @__PURE__ */ E(se, { component: "ul", sx: { mt: 0, mb: 1, pl: 3, ...m }, children: [
            "Start typing a column name and select it from the suggestion list.",
            "After picking a column, the suggestion list will show valid operators for that column.",
            "After entering a value, AND / OR will appear in the suggestion list.",
            "Use parentheses ( ) to group conditions when mixing AND and OR.",
            "Prefix a group with NOT to negate it — e.g. NOT (status == deleted).",
            'Wrap multi-word values in double quotes — e.g. "John Doe".',
            "AND has higher precedence than OR. Use parentheses to override.",
            "Syntax errors are highlighted in the text box. Hover the input to see the specific error.",
            "You can also build queries visually using the filter panel (click the tune icon)."
          ].map((b) => /* @__PURE__ */ E(
            ue,
            {
              component: "li",
              variant: "body2",
              gutterBottom: !0,
              sx: g,
              children: b
            },
            b
          )) }),
          /* @__PURE__ */ E(at, { sx: { my: 2, ...c } }),
          /* @__PURE__ */ E(ue, { variant: "h6", gutterBottom: !0, sx: a, children: "Syntax Highlighting" }),
          /* @__PURE__ */ E(ue, { variant: "body2", paragraph: !0, sx: d, children: "As you type, each part of the query is colorized to help you spot mistakes at a glance:" }),
          /* @__PURE__ */ E(se, { component: "ul", sx: { mt: 0, mb: 1, pl: 3, ...m }, children: [
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
          ].map(({ color: b, label: D, desc: F }) => /* @__PURE__ */ ee(
            ue,
            {
              component: "li",
              variant: "body2",
              gutterBottom: !0,
              sx: N,
              children: [
                /* @__PURE__ */ E(
                  se,
                  {
                    component: "span",
                    sx: {
                      display: "inline-block",
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      bgcolor: b,
                      mr: 1,
                      verticalAlign: "middle",
                      ...S
                    }
                  }
                ),
                /* @__PURE__ */ E(se, { component: "strong", sx: { color: b }, children: D }),
                " ",
                "— ",
                F
              ]
            },
            D
          )) })
        ] }),
        /* @__PURE__ */ E(Yo, { sx: x, children: /* @__PURE__ */ E(
          Lt,
          {
            onClick: t,
            variant: "contained",
            disableElevation: !0,
            sx: O,
            children: "Got it"
          }
        ) })
      ]
    }
  );
}, Fl = ({
  columnsOperator: e,
  onSuggestionClick: t,
  defaultOperators: n,
  onApplyClicked: r,
  queryText: o,
  relatedOperators: i,
  placeholder: s = "",
  endAdornment: a,
  sx: d = {},
  ...f
}) => {
  const {
    root: h,
    inputRow: p,
    inputWrapper: m,
    highlightOverlay: g,
    input: y,
    applyButton: c,
    helpButton: x,
    helpTooltip: O,
    adornmentBox: N,
    errorTooltip: S,
    hintTooltip: T,
    popper: b,
    suggestionsBox: D,
    suggestionsList: F,
    suggestionItem: K,
    suggestionText: G,
    tokenColors: u,
    tokenFontWeights: R,
    helpModal: M
  } = d, L = Ze(
    () => ({ ...Dl, ...u || {} }),
    [u]
  ), k = Ze(
    () => ({
      ...Lr,
      ...R || {}
    }),
    [R]
  ), A = ln(), I = (V) => {
    if (!V || V === "inherit") return "inherit";
    const le = V.split(".");
    let ce = A.palette;
    for (const $e of le)
      if (ce = ce == null ? void 0 : ce[$e], ce === void 0) return V;
    return typeof ce == "string" ? ce : V;
  }, U = Ze(() => {
    const V = {};
    for (const le of Object.keys(L))
      V[le] = I(L[le]);
    return V;
  }, [L, A]), [re, me] = xe(null), [C, P] = xe([]), [Y, j] = xe([]), [$, W] = xe(""), [z, q] = xe(!0), [Q, X] = xe(null), [B, H] = xe(!1), [w, ae] = xe(0), ge = cn(), be = cn(null), st = cn(null);
  pt(() => {
    o != null && W(o);
  }, [o]), pt(() => {
    const V = Object.keys(e), le = Array.from(
      /* @__PURE__ */ new Set([
        ...V.flatMap((Ao) => {
          var Yn;
          return ((Yn = e[Ao]) == null ? void 0 : Yn.operators) || [];
        }),
        ...i || []
      ])
    ), ce = $.trim().split(/\s+/).filter(Boolean), $e = ce[ce.length - 1] || "", Rt = ce[ce.length - 2] || "", Ro = !Rt || n.includes(Rt);
    let ke;
    !$.trim() || n.includes($e) || $e === "(" ? ke = V : V.includes($e) ? ke = e[$e].operators : Ro ? ke = le : (V.includes(Rt) && e[Rt].operators.includes($e) || le.includes($e), ke = n), P(ke), j(ke);
    const Gn = Nl($);
    q(Gn.isValid), X(Gn.error);
  }, [$, e, n, i]), pt(() => {
    const V = st.current;
    if (!V || typeof ResizeObserver > "u") return;
    const le = () => ae(V.offsetWidth || 0);
    le();
    const ce = new ResizeObserver(le);
    return ce.observe(V), () => ce.disconnect();
  }, [a, $, z]);
  const Ct = (V) => {
    const le = V.target.value;
    W(le), j(
      C.filter(
        (ce) => ce.toLowerCase().includes(le.toLowerCase())
      )
    ), me(ge.current);
  }, wt = (V) => {
    be.current && (be.current.scrollLeft = V.target.scrollLeft);
  }, Fe = Ze(
    () => Pl(
      $,
      Object.keys(e || {}),
      Array.from(
        /* @__PURE__ */ new Set([
          ...Object.values(e || {}).flatMap(
            (V) => (V == null ? void 0 : V.operators) || []
          ),
          ...i || []
        ])
      ),
      n || []
    ),
    [$, e, i, n]
  ), Ot = (V) => {
    W((le) => {
      const ce = le.trimEnd();
      return ce ? `${ce} ${V} ` : `${V} `;
    }), t == null || t(V), setTimeout(() => {
      const le = ge.current;
      if (le) {
        const ce = le.value.length;
        le.setSelectionRange(ce, ce), le.focus();
      }
    }, 0);
  }, ye = !!$ && !z && !!Q, wo = ye ? Q : $ ? "" : Ml, Oo = ye ? void 0 : $ ? !1 : void 0;
  return /* @__PURE__ */ ee(se, { width: "100%", sx: h, children: [
    /* @__PURE__ */ E(se, { display: "flex", sx: p, children: /* @__PURE__ */ ee(
      se,
      {
        sx: { position: "relative", flex: 1, minWidth: 0, ...m },
        children: [
          /* @__PURE__ */ E(
            se,
            {
              ref: be,
              "aria-hidden": "true",
              sx: {
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                // Stop short of the endAdornment block (help icon + Apply button
                // + any caller-provided adornment) so colored tokens never paint
                // behind the buttons when the query overflows horizontally.
                right: `${w}px`,
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
                ...g
              },
              children: Fe.map(
                (V, le) => V.type === "whitespace" ? /* @__PURE__ */ E("span", { children: V.text }, le) : /* @__PURE__ */ E(
                  "span",
                  {
                    style: {
                      color: U[V.type] || "inherit",
                      fontWeight: k[V.type] ?? Lr[V.type] ?? 400
                    },
                    children: V.text
                  },
                  le
                )
              )
            }
          ),
          /* @__PURE__ */ E(
            et,
            {
              title: wo,
              open: Oo,
              placement: "top-start",
              arrow: !0,
              componentsProps: {
                tooltip: {
                  sx: ye ? {
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
                    ...T
                  }
                },
                arrow: {
                  sx: ye ? {
                    color: "error.main",
                    ...(S == null ? void 0 : S.bgcolor) && {
                      color: S.bgcolor
                    }
                  } : {
                    color: "info.dark",
                    ...(T == null ? void 0 : T.bgcolor) && {
                      color: T.bgcolor
                    }
                  }
                }
              },
              children: /* @__PURE__ */ E(
                Bo,
                {
                  ...f,
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
                      caretColor: (V) => V.palette.text.primary,
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
                    ...y
                  },
                  inputRef: ge,
                  inputProps: { onScroll: wt },
                  value: $,
                  onChange: Ct,
                  onFocus: () => me(ge.current),
                  onBlur: () => setTimeout(() => me(null), 100),
                  error: $ ? !z : !1,
                  endAdornment: /* @__PURE__ */ E(Fo, { position: "end", children: /* @__PURE__ */ ee(
                    se,
                    {
                      ref: st,
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        ...N
                      },
                      children: [
                        /* @__PURE__ */ E(
                          et,
                          {
                            title: "Query syntax help",
                            placement: "top",
                            sx: O,
                            children: /* @__PURE__ */ E(
                              ze,
                              {
                                onClick: () => H(!0),
                                "aria-label": "Query syntax help",
                                size: "small",
                                edge: a ? !1 : "end",
                                onMouseDown: (V) => V.preventDefault(),
                                sx: x,
                                children: /* @__PURE__ */ E(_l, { fontSize: "small" })
                              }
                            )
                          }
                        ),
                        a,
                        /* @__PURE__ */ E(
                          Lt,
                          {
                            disabled: !$ || !z,
                            onClick: () => r($),
                            onMouseDown: (V) => V.preventDefault(),
                            size: "small",
                            sx: c,
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
    /* @__PURE__ */ E(
      Lo,
      {
        open: !!re,
        anchorEl: re,
        placement: "bottom-start",
        sx: { zIndex: 1300, ...b },
        children: /* @__PURE__ */ E(
          se,
          {
            sx: {
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              width: "300px",
              zIndex: 1300,
              ...D
            },
            children: /* @__PURE__ */ E(jo, { dense: !0, sx: F, children: Y.map((V, le) => /* @__PURE__ */ E(zo, { disablePadding: !0, children: /* @__PURE__ */ E(
              Vo,
              {
                onMouseDown: (ce) => ce.preventDefault(),
                onClick: () => Ot(V),
                sx: K,
                children: /* @__PURE__ */ E(ue, { variant: "body2", sx: G, children: V })
              }
            ) }, le)) })
          }
        )
      }
    ),
    /* @__PURE__ */ E(
      Bl,
      {
        open: B,
        onClose: () => H(!1),
        sx: M
      }
    )
  ] });
};
function ql({
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
    textBox: d,
    iconButton: f,
    popover: h,
    popoverPaper: p,
    popoverContent: m,
    title: g,
    queryForm: y
  } = i, [c, x] = xe(null), [O, N] = xe(null), [S, T] = xe(e);
  pt(() => {
    T(e);
  }, [e]);
  const b = Ze(
    () => Array.from(
      /* @__PURE__ */ new Set([
        ...Object.values(e).flatMap((k) => (k == null ? void 0 : k.operators) || []),
        ...n || []
      ])
    ),
    [e, n]
  ), D = (k) => {
    x(k.currentTarget);
  }, F = () => {
    x(null);
  }, K = (k) => {
    const A = Eo(k), I = {};
    A.forEach((U) => {
      U.column && !S[U.column] && !I[U.column] && (I[U.column] = { operators: b });
    }), Object.keys(I).length && T((U) => ({ ...U, ...I }));
  }, G = (k) => {
    const A = wl(k, b);
    K(A), N(A), r && r(A);
  }, u = (k) => {
    K(k), N(k), F(), r && r(k);
  }, R = Ze(
    () => O ? xo(O) : "",
    [O]
  ), M = !!c, L = M ? "simple-popover" : void 0;
  return /* @__PURE__ */ ee(se, { sx: s, children: [
    /* @__PURE__ */ E(
      se,
      {
        display: "flex",
        alignItems: "center",
        marginBottom: "16px",
        width: "100%",
        sx: a,
        children: /* @__PURE__ */ E(
          Fl,
          {
            columnsOperator: S,
            defaultOperators: t,
            onApplyClicked: G,
            queryText: R,
            relatedOperators: n,
            placeholder: o,
            sx: d,
            endAdornment: /* @__PURE__ */ E(
              ze,
              {
                "aria-describedby": L,
                onClick: D,
                size: "small",
                onMouseDown: (k) => k.preventDefault(),
                sx: f,
                children: /* @__PURE__ */ E(Tl, { fontSize: "small" })
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ E(
      vo,
      {
        id: L,
        open: M,
        anchorEl: c,
        onClose: F,
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
              ...p
            }
          }
        },
        sx: { ...h },
        children: /* @__PURE__ */ ee(se, { sx: { padding: { xs: 1.5, sm: 2 }, ...m }, children: [
          /* @__PURE__ */ E(ue, { variant: "h6", sx: g, children: "Query Builder" }),
          /* @__PURE__ */ E(
            kl,
            {
              columnsOperator: S,
              handleApplyFilters: u,
              defaultOperators: t,
              groupTree: O,
              sx: y
            }
          )
        ] })
      }
    )
  ] });
}
export {
  ql as default
};
