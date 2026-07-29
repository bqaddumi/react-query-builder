var Ro = Object.defineProperty;
var Ao = (e, t, n) => t in e ? Ro(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Rt = (e, t, n) => Ao(e, typeof t != "symbol" ? t + "" : t, n);
import { jsx as E, jsxs as ee } from "react/jsx-runtime";
import * as k from "react";
import lt, { useState as xe, useEffect as dt, useMemo as Ze, useRef as ln } from "react";
import Po from "@emotion/styled";
import { ThemeContext as No } from "@emotion/react";
import { Box as se, Button as Ft, Radio as $o, Typography as ue, ToggleButtonGroup as ko, ToggleButton as Yn, Tooltip as et, IconButton as ze, Stack as _o, Select as qn, MenuItem as At, TextField as Io, OutlinedInput as Do, InputAdornment as Mo, Popper as Bo, List as Fo, ListItem as jo, ListItemButton as Lo, Dialog as zo, DialogTitle as Vo, DialogContent as Wo, Divider as st, Chip as Ge, DialogActions as Uo } from "@mui/material";
import { Add as Hn, Close as Fr } from "@mui/icons-material";
import * as Go from "react-dom";
import Pt from "react-dom";
function Yo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nt = { exports: {} }, $t = { exports: {} }, J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn;
function qo() {
  if (Kn) return J;
  Kn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
  function x(b) {
    if (typeof b == "object" && b !== null) {
      var D = b.$$typeof;
      switch (D) {
        case t:
          switch (b = b.type, b) {
            case f:
            case d:
            case r:
            case i:
            case o:
            case p:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case a:
                case m:
                case g:
                case y:
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
  function S(b) {
    return x(b) === d;
  }
  return J.AsyncMode = f, J.ConcurrentMode = d, J.ContextConsumer = a, J.ContextProvider = s, J.Element = t, J.ForwardRef = m, J.Fragment = r, J.Lazy = g, J.Memo = y, J.Portal = n, J.Profiler = i, J.StrictMode = o, J.Suspense = p, J.isAsyncMode = function(b) {
    return S(b) || x(b) === f;
  }, J.isConcurrentMode = S, J.isContextConsumer = function(b) {
    return x(b) === a;
  }, J.isContextProvider = function(b) {
    return x(b) === s;
  }, J.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, J.isForwardRef = function(b) {
    return x(b) === m;
  }, J.isFragment = function(b) {
    return x(b) === r;
  }, J.isLazy = function(b) {
    return x(b) === g;
  }, J.isMemo = function(b) {
    return x(b) === y;
  }, J.isPortal = function(b) {
    return x(b) === n;
  }, J.isProfiler = function(b) {
    return x(b) === i;
  }, J.isStrictMode = function(b) {
    return x(b) === o;
  }, J.isSuspense = function(b) {
    return x(b) === p;
  }, J.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === d || b === i || b === o || b === p || b === h || typeof b == "object" && b !== null && (b.$$typeof === g || b.$$typeof === y || b.$$typeof === s || b.$$typeof === a || b.$$typeof === m || b.$$typeof === T || b.$$typeof === O || b.$$typeof === I || b.$$typeof === u);
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
var Qn;
function Ho() {
  return Qn || (Qn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
    function x(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === r || w === d || w === i || w === o || w === p || w === h || typeof w == "object" && w !== null && (w.$$typeof === g || w.$$typeof === y || w.$$typeof === s || w.$$typeof === a || w.$$typeof === m || w.$$typeof === T || w.$$typeof === O || w.$$typeof === I || w.$$typeof === u);
    }
    function S(w) {
      if (typeof w == "object" && w !== null) {
        var ae = w.$$typeof;
        switch (ae) {
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
                var be = ge && ge.$$typeof;
                switch (be) {
                  case a:
                  case m:
                  case g:
                  case y:
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
    var b = f, D = d, F = a, K = s, G = t, c = m, R = r, M = g, j = y, $ = n, A = i, _ = o, W = p, re = !1;
    function me(w) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C(w) || S(w) === f;
    }
    function C(w) {
      return S(w) === d;
    }
    function P(w) {
      return S(w) === a;
    }
    function Y(w) {
      return S(w) === s;
    }
    function L(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function N(w) {
      return S(w) === m;
    }
    function U(w) {
      return S(w) === r;
    }
    function z(w) {
      return S(w) === g;
    }
    function q(w) {
      return S(w) === y;
    }
    function Q(w) {
      return S(w) === n;
    }
    function X(w) {
      return S(w) === i;
    }
    function B(w) {
      return S(w) === o;
    }
    function H(w) {
      return S(w) === p;
    }
    Z.AsyncMode = b, Z.ConcurrentMode = D, Z.ContextConsumer = F, Z.ContextProvider = K, Z.Element = G, Z.ForwardRef = c, Z.Fragment = R, Z.Lazy = M, Z.Memo = j, Z.Portal = $, Z.Profiler = A, Z.StrictMode = _, Z.Suspense = W, Z.isAsyncMode = me, Z.isConcurrentMode = C, Z.isContextConsumer = P, Z.isContextProvider = Y, Z.isElement = L, Z.isForwardRef = N, Z.isFragment = U, Z.isLazy = z, Z.isMemo = q, Z.isPortal = Q, Z.isProfiler = X, Z.isStrictMode = B, Z.isSuspense = H, Z.isValidElementType = x, Z.typeOf = S;
  }()), Z;
}
var Xn;
function jr() {
  return Xn || (Xn = 1, process.env.NODE_ENV === "production" ? $t.exports = qo() : $t.exports = Ho()), $t.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var cn, Jn;
function Ko() {
  if (Jn) return cn;
  Jn = 1;
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
  return cn = o() ? Object.assign : function(i, s) {
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
  }, cn;
}
var un, Zn;
function _n() {
  if (Zn) return un;
  Zn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return un = e, un;
}
var fn, er;
function Lr() {
  return er || (er = 1, fn = Function.call.bind(Object.prototype.hasOwnProperty)), fn;
}
var dn, tr;
function Qo() {
  if (tr) return dn;
  tr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ _n(), n = {}, r = /* @__PURE__ */ Lr();
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
          } catch (g) {
            p = g;
          }
          if (p && !(p instanceof Error) && e(
            (f || "React class") + ": type specification of " + a + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in n)) {
            n[p.message] = !0;
            var y = d ? d() : "";
            e(
              "Failed " + a + " type: " + p.message + (y ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, dn = o, dn;
}
var pn, nr;
function Xo() {
  if (nr) return pn;
  nr = 1;
  var e = jr(), t = Ko(), n = /* @__PURE__ */ _n(), r = /* @__PURE__ */ Lr(), o = /* @__PURE__ */ Qo(), i = function() {
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
  return pn = function(a, f) {
    var d = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function p(C) {
      var P = C && (d && C[d] || C[m]);
      if (typeof P == "function")
        return P;
    }
    var h = "<<anonymous>>", y = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: I(),
      arrayOf: x,
      element: S(),
      elementType: b(),
      instanceOf: D,
      node: c(),
      objectOf: K,
      oneOf: F,
      oneOfType: G,
      shape: M,
      exact: j
    };
    function g(C, P) {
      return C === P ? C !== 0 || 1 / C === 1 / P : C !== C && P !== P;
    }
    function u(C, P) {
      this.message = C, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    u.prototype = Error.prototype;
    function T(C) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, Y = 0;
      function L(U, z, q, Q, X, B, H) {
        if (Q = Q || h, B = B || q, H !== n) {
          if (f) {
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
        return z[q] == null ? U ? z[q] === null ? new u("The " + X + " `" + B + "` is marked as required " + ("in `" + Q + "`, but its value is `null`.")) : new u("The " + X + " `" + B + "` is marked as required in " + ("`" + Q + "`, but its value is `undefined`.")) : null : C(z, q, Q, X, B);
      }
      var N = L.bind(null, !1);
      return N.isRequired = L.bind(null, !0), N;
    }
    function O(C) {
      function P(Y, L, N, U, z, q) {
        var Q = Y[L], X = _(Q);
        if (X !== C) {
          var B = W(Q);
          return new u(
            "Invalid " + U + " `" + z + "` of type " + ("`" + B + "` supplied to `" + N + "`, expected ") + ("`" + C + "`."),
            { expectedType: C }
          );
        }
        return null;
      }
      return T(P);
    }
    function I() {
      return T(s);
    }
    function x(C) {
      function P(Y, L, N, U, z) {
        if (typeof C != "function")
          return new u("Property `" + z + "` of component `" + N + "` has invalid PropType notation inside arrayOf.");
        var q = Y[L];
        if (!Array.isArray(q)) {
          var Q = _(q);
          return new u("Invalid " + U + " `" + z + "` of type " + ("`" + Q + "` supplied to `" + N + "`, expected an array."));
        }
        for (var X = 0; X < q.length; X++) {
          var B = C(q, X, N, U, z + "[" + X + "]", n);
          if (B instanceof Error)
            return B;
        }
        return null;
      }
      return T(P);
    }
    function S() {
      function C(P, Y, L, N, U) {
        var z = P[Y];
        if (!a(z)) {
          var q = _(z);
          return new u("Invalid " + N + " `" + U + "` of type " + ("`" + q + "` supplied to `" + L + "`, expected a single ReactElement."));
        }
        return null;
      }
      return T(C);
    }
    function b() {
      function C(P, Y, L, N, U) {
        var z = P[Y];
        if (!e.isValidElementType(z)) {
          var q = _(z);
          return new u("Invalid " + N + " `" + U + "` of type " + ("`" + q + "` supplied to `" + L + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return T(C);
    }
    function D(C) {
      function P(Y, L, N, U, z) {
        if (!(Y[L] instanceof C)) {
          var q = C.name || h, Q = me(Y[L]);
          return new u("Invalid " + U + " `" + z + "` of type " + ("`" + Q + "` supplied to `" + N + "`, expected ") + ("instance of `" + q + "`."));
        }
        return null;
      }
      return T(P);
    }
    function F(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function P(Y, L, N, U, z) {
        for (var q = Y[L], Q = 0; Q < C.length; Q++)
          if (g(q, C[Q]))
            return null;
        var X = JSON.stringify(C, function(H, w) {
          var ae = W(w);
          return ae === "symbol" ? String(w) : w;
        });
        return new u("Invalid " + U + " `" + z + "` of value `" + String(q) + "` " + ("supplied to `" + N + "`, expected one of " + X + "."));
      }
      return T(P);
    }
    function K(C) {
      function P(Y, L, N, U, z) {
        if (typeof C != "function")
          return new u("Property `" + z + "` of component `" + N + "` has invalid PropType notation inside objectOf.");
        var q = Y[L], Q = _(q);
        if (Q !== "object")
          return new u("Invalid " + U + " `" + z + "` of type " + ("`" + Q + "` supplied to `" + N + "`, expected an object."));
        for (var X in q)
          if (r(q, X)) {
            var B = C(q, X, N, U, z + "." + X, n);
            if (B instanceof Error)
              return B;
          }
        return null;
      }
      return T(P);
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
      function L(N, U, z, q, Q) {
        for (var X = [], B = 0; B < C.length; B++) {
          var H = C[B], w = H(N, U, z, q, Q, n);
          if (w == null)
            return null;
          w.data && r(w.data, "expectedType") && X.push(w.data.expectedType);
        }
        var ae = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new u("Invalid " + q + " `" + Q + "` supplied to " + ("`" + z + "`" + ae + "."));
      }
      return T(L);
    }
    function c() {
      function C(P, Y, L, N, U) {
        return $(P[Y]) ? null : new u("Invalid " + N + " `" + U + "` supplied to " + ("`" + L + "`, expected a ReactNode."));
      }
      return T(C);
    }
    function R(C, P, Y, L, N) {
      return new u(
        (C || "React class") + ": " + P + " type `" + Y + "." + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + N + "`."
      );
    }
    function M(C) {
      function P(Y, L, N, U, z) {
        var q = Y[L], Q = _(q);
        if (Q !== "object")
          return new u("Invalid " + U + " `" + z + "` of type `" + Q + "` " + ("supplied to `" + N + "`, expected `object`."));
        for (var X in C) {
          var B = C[X];
          if (typeof B != "function")
            return R(N, U, z, X, W(B));
          var H = B(q, X, N, U, z + "." + X, n);
          if (H)
            return H;
        }
        return null;
      }
      return T(P);
    }
    function j(C) {
      function P(Y, L, N, U, z) {
        var q = Y[L], Q = _(q);
        if (Q !== "object")
          return new u("Invalid " + U + " `" + z + "` of type `" + Q + "` " + ("supplied to `" + N + "`, expected `object`."));
        var X = t({}, Y[L], C);
        for (var B in X) {
          var H = C[B];
          if (r(C, B) && typeof H != "function")
            return R(N, U, z, B, W(H));
          if (!H)
            return new u(
              "Invalid " + U + " `" + z + "` key `" + B + "` supplied to `" + N + "`.\nBad object: " + JSON.stringify(Y[L], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  ")
            );
          var w = H(q, B, N, U, z + "." + B, n);
          if (w)
            return w;
        }
        return null;
      }
      return T(P);
    }
    function $(C) {
      switch (typeof C) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !C;
        case "object":
          if (Array.isArray(C))
            return C.every($);
          if (C === null || a(C))
            return !0;
          var P = p(C);
          if (P) {
            var Y = P.call(C), L;
            if (P !== C.entries) {
              for (; !(L = Y.next()).done; )
                if (!$(L.value))
                  return !1;
            } else
              for (; !(L = Y.next()).done; ) {
                var N = L.value;
                if (N && !$(N[1]))
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
    function _(C) {
      var P = typeof C;
      return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : A(P, C) ? "symbol" : P;
    }
    function W(C) {
      if (typeof C > "u" || C === null)
        return "" + C;
      var P = _(C);
      if (P === "object") {
        if (C instanceof Date)
          return "date";
        if (C instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function re(C) {
      var P = W(C);
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
      return !C.constructor || !C.constructor.name ? h : C.constructor.name;
    }
    return y.checkPropTypes = o, y.resetWarningCache = o.resetWarningCache, y.PropTypes = y, y;
  }, pn;
}
var mn, rr;
function Jo() {
  if (rr) return mn;
  rr = 1;
  var e = /* @__PURE__ */ _n();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, mn = function() {
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
  }, mn;
}
var or;
function Zo() {
  if (or) return Nt.exports;
  if (or = 1, process.env.NODE_ENV !== "production") {
    var e = jr(), t = !0;
    Nt.exports = /* @__PURE__ */ Xo()(e.isElement, t);
  } else
    Nt.exports = /* @__PURE__ */ Jo()();
  return Nt.exports;
}
var ei = /* @__PURE__ */ Zo();
const l = /* @__PURE__ */ Yo(ei);
function zr(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = zr(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ae() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = zr(e)) && (r && (r += " "), r += t);
  return r;
}
function gt(e, t, n = void 0) {
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
function jt(e, t, n, r, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const ti = l.oneOfType([l.func, l.object]);
function yt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function ni(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function ri(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof i == "function" && !ni(i) && (a = "Did you accidentally provide a plain function component instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const oi = yt(l.elementType, ri);
function ii(e) {
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
function Vr(e, t, n, r) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const i = ii(o);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Wr(e, t, ...n) {
  return e[t] === void 0 ? null : Vr(e, t, ...n);
}
function Sn() {
  return null;
}
Wr.isRequired = Vr;
Sn.isRequired = Sn;
const Ur = process.env.NODE_ENV === "production" ? Sn : Wr;
function si(e) {
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
var kt = { exports: {} }, te = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir;
function ai() {
  if (ir) return te;
  ir = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y = Symbol.for("react.client.reference");
  function g(u) {
    if (typeof u == "object" && u !== null) {
      var T = u.$$typeof;
      switch (T) {
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
                  return T;
              }
          }
        case t:
          return T;
      }
    }
  }
  return te.ContextConsumer = i, te.ContextProvider = s, te.Element = e, te.ForwardRef = a, te.Fragment = n, te.Lazy = p, te.Memo = m, te.Portal = t, te.Profiler = o, te.StrictMode = r, te.Suspense = f, te.SuspenseList = d, te.isContextConsumer = function(u) {
    return g(u) === i;
  }, te.isContextProvider = function(u) {
    return g(u) === s;
  }, te.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, te.isForwardRef = function(u) {
    return g(u) === a;
  }, te.isFragment = function(u) {
    return g(u) === n;
  }, te.isLazy = function(u) {
    return g(u) === p;
  }, te.isMemo = function(u) {
    return g(u) === m;
  }, te.isPortal = function(u) {
    return g(u) === t;
  }, te.isProfiler = function(u) {
    return g(u) === o;
  }, te.isStrictMode = function(u) {
    return g(u) === r;
  }, te.isSuspense = function(u) {
    return g(u) === f;
  }, te.isSuspenseList = function(u) {
    return g(u) === d;
  }, te.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === o || u === r || u === f || u === d || u === h || typeof u == "object" && u !== null && (u.$$typeof === p || u.$$typeof === m || u.$$typeof === s || u.$$typeof === i || u.$$typeof === a || u.$$typeof === y || u.getModuleId !== void 0);
  }, te.typeOf = g, te;
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
var sr;
function li() {
  return sr || (sr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (typeof u == "object" && u !== null) {
        var T = u.$$typeof;
        switch (T) {
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
                    return T;
                }
            }
          case n:
            return T;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g = Symbol.for("react.client.reference");
    ne.ContextConsumer = s, ne.ContextProvider = a, ne.Element = t, ne.ForwardRef = f, ne.Fragment = r, ne.Lazy = h, ne.Memo = p, ne.Portal = n, ne.Profiler = i, ne.StrictMode = o, ne.Suspense = d, ne.SuspenseList = m, ne.isContextConsumer = function(u) {
      return e(u) === s;
    }, ne.isContextProvider = function(u) {
      return e(u) === a;
    }, ne.isElement = function(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }, ne.isForwardRef = function(u) {
      return e(u) === f;
    }, ne.isFragment = function(u) {
      return e(u) === r;
    }, ne.isLazy = function(u) {
      return e(u) === h;
    }, ne.isMemo = function(u) {
      return e(u) === p;
    }, ne.isPortal = function(u) {
      return e(u) === n;
    }, ne.isProfiler = function(u) {
      return e(u) === i;
    }, ne.isStrictMode = function(u) {
      return e(u) === o;
    }, ne.isSuspense = function(u) {
      return e(u) === d;
    }, ne.isSuspenseList = function(u) {
      return e(u) === m;
    }, ne.isValidElementType = function(u) {
      return typeof u == "string" || typeof u == "function" || u === r || u === i || u === o || u === d || u === m || u === y || typeof u == "object" && u !== null && (u.$$typeof === h || u.$$typeof === p || u.$$typeof === a || u.$$typeof === s || u.$$typeof === f || u.$$typeof === g || u.getModuleId !== void 0);
    }, ne.typeOf = e;
  }()), ne;
}
var ar;
function ci() {
  return ar || (ar = 1, process.env.NODE_ENV === "production" ? kt.exports = /* @__PURE__ */ ai() : kt.exports = /* @__PURE__ */ li()), kt.exports;
}
var Lt = /* @__PURE__ */ ci();
function Re(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Gr(e) {
  if (/* @__PURE__ */ k.isValidElement(e) || Lt.isValidElementType(e) || !Re(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Gr(e[n]);
  }), t;
}
function Ee(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return Re(e) && Re(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ k.isValidElement(t[o]) || Lt.isValidElementType(t[o]) ? r[o] = t[o] : Re(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Re(e[o]) ? r[o] = Ee(e[o], t[o], n) : n.clone ? r[o] = Re(t[o]) ? Gr(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
function pt(e, t) {
  return t ? Ee(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Me = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.string, l.object, l.array]) : {};
function ui(e, t) {
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
function fi(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function di(e, t) {
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
function pi(e) {
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
}, lr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Ht[e]}px)`
}, mi = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Ht[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Pe(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || lr;
    return t.reduce((s, a, f) => (s[i.up(i.keys[f])] = n(t[f]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || lr;
    return Object.keys(t).reduce((s, a) => {
      if (fi(i.keys, a)) {
        const f = di(r.containerQueries ? r : mi, a);
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
function hi(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function gi(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Kt(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function zt(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Kt(e, n) || r, t && (o = t(o, r, e)), o;
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
    const a = s[t], f = s.theme, d = Kt(f, r) || {};
    return Pe(s, a, (p) => {
      let h = zt(d, o, p);
      return p === h && typeof p == "string" && (h = zt(d, o, `${t}${p === "default" ? "" : Ve(p)}`, p)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Me
  } : {}, i.filterProps = [t], i;
}
function yi(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const bi = {
  m: "margin",
  p: "padding"
}, vi = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, cr = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ei = yi((e) => {
  if (e.length > 2)
    if (cr[e])
      e = cr[e];
    else
      return [e];
  const [t, n] = e.split(""), r = bi[t], o = vi[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Qt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Xt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], xi = [...Qt, ...Xt];
function bt(e, t, n, r) {
  const o = Kt(e, t, !0) ?? n;
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
  return bt(e, "spacing", 8, "spacing");
}
function vt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Si(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = vt(t, n), r), {});
}
function Ti(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const o = Ei(n), i = Si(o, r), s = e[n];
  return Pe(e, s, i);
}
function Yr(e, t) {
  const n = In(e.theme);
  return Object.keys(e).map((r) => Ti(e, t, r, n)).reduce(pt, {});
}
function de(e) {
  return Yr(e, Qt);
}
de.propTypes = process.env.NODE_ENV !== "production" ? Qt.reduce((e, t) => (e[t] = Me, e), {}) : {};
de.filterProps = Qt;
function pe(e) {
  return Yr(e, Xt);
}
pe.propTypes = process.env.NODE_ENV !== "production" ? Xt.reduce((e, t) => (e[t] = Me, e), {}) : {};
pe.filterProps = Xt;
process.env.NODE_ENV !== "production" && xi.reduce((e, t) => (e[t] = Me, e), {});
function Jt(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? pt(o, t[i](r)) : o, {});
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
const Ci = Te("border", Se), wi = Te("borderTop", Se), Oi = Te("borderRight", Se), Ri = Te("borderBottom", Se), Ai = Te("borderLeft", Se), Pi = Te("borderColor"), Ni = Te("borderTopColor"), $i = Te("borderRightColor"), ki = Te("borderBottomColor"), _i = Te("borderLeftColor"), Ii = Te("outline", Se), Di = Te("outlineColor"), Zt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = bt(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: vt(t, r)
    });
    return Pe(e, e.borderRadius, n);
  }
  return null;
};
Zt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Me
} : {};
Zt.filterProps = ["borderRadius"];
Jt(Ci, wi, Oi, Ri, Ai, Pi, Ni, $i, ki, _i, Zt, Ii, Di);
const en = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = bt(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: vt(t, r)
    });
    return Pe(e, e.gap, n);
  }
  return null;
};
en.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Me
} : {};
en.filterProps = ["gap"];
const tn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = bt(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: vt(t, r)
    });
    return Pe(e, e.columnGap, n);
  }
  return null;
};
tn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Me
} : {};
tn.filterProps = ["columnGap"];
const nn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = bt(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: vt(t, r)
    });
    return Pe(e, e.rowGap, n);
  }
  return null;
};
nn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Me
} : {};
nn.filterProps = ["rowGap"];
const Mi = he({
  prop: "gridColumn"
}), Bi = he({
  prop: "gridRow"
}), Fi = he({
  prop: "gridAutoFlow"
}), ji = he({
  prop: "gridAutoColumns"
}), Li = he({
  prop: "gridAutoRows"
}), zi = he({
  prop: "gridTemplateColumns"
}), Vi = he({
  prop: "gridTemplateRows"
}), Wi = he({
  prop: "gridTemplateAreas"
}), Ui = he({
  prop: "gridArea"
});
Jt(en, tn, nn, Mi, Bi, Fi, ji, Li, zi, Vi, Wi, Ui);
function tt(e, t) {
  return t === "grey" ? t : e;
}
const Gi = he({
  prop: "color",
  themeKey: "palette",
  transform: tt
}), Yi = he({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: tt
}), qi = he({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: tt
});
Jt(Gi, Yi, qi);
function ve(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Hi = he({
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
    return Pe(e, e.maxWidth, t);
  }
  return null;
};
Dn.filterProps = ["maxWidth"];
const Ki = he({
  prop: "minWidth",
  transform: ve
}), Qi = he({
  prop: "height",
  transform: ve
}), Xi = he({
  prop: "maxHeight",
  transform: ve
}), Ji = he({
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
const Zi = he({
  prop: "boxSizing"
});
Jt(Hi, Dn, Ki, Qi, Xi, Ji, Zi);
const rn = {
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
    style: Zt
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
    style: en
  },
  rowGap: {
    style: nn
  },
  columnGap: {
    style: tn
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
function es(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function ts(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ns() {
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
    const h = Kt(o, d) || {};
    return p ? p(s) : Pe(s, r, (g) => {
      let u = zt(h, m, g);
      return g === u && typeof g == "string" && (u = zt(h, m, `${n}${g === "default" ? "" : Ve(g)}`, g)), f === !1 ? u : {
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
    const i = o.unstable_sxConfig ?? rn;
    function s(a) {
      let f = a;
      if (typeof a == "function")
        f = a(o);
      else if (typeof a != "object")
        return a;
      if (!f)
        return null;
      const d = hi(o.breakpoints), m = Object.keys(d);
      let p = d;
      return Object.keys(f).forEach((h) => {
        const y = ts(f[h], o);
        if (y != null)
          if (typeof y == "object")
            if (i[h])
              p = pt(p, e(h, y, o, i));
            else {
              const g = Pe({
                theme: o
              }, y, (u) => ({
                [h]: u
              }));
              es(g, y) ? p[h] = t({
                sx: y,
                theme: o
              }) : p = pt(p, g);
            }
          else
            p = pt(p, e(h, y, o, i));
      }), ui(o, gi(m, p));
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return t;
}
const nt = ns();
nt.filterProps = ["sx"];
function rs(e) {
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
var os = {
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
function is(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var ss = /[A-Z]|^ms/g, as = /_EMO_([^_]+?)_([^]*?)_EMO_/g, qr = function(t) {
  return t.charCodeAt(1) === 45;
}, ur = function(t) {
  return t != null && typeof t != "boolean";
}, hn = /* @__PURE__ */ is(function(e) {
  return qr(e) ? e : e.replace(ss, "-$&").toLowerCase();
}), fr = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(as, function(r, o, i) {
          return _e = {
            name: o,
            styles: i,
            next: _e
          }, o;
        });
  }
  return os[t] !== 1 && !qr(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Vt(e, t, n) {
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
      return ls(e, t, n);
    }
  }
  var f = n;
  return f;
}
function ls(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Vt(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        ur(a) && (r += hn(i) + ":" + fr(i, a) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && t == null)
        for (var f = 0; f < s.length; f++)
          ur(s[f]) && (r += hn(i) + ":" + fr(i, s[f]) + ";");
      else {
        var d = Vt(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += hn(i) + ":" + d + ";";
            break;
          }
          default:
            r += i + "{" + d + "}";
        }
      }
    }
  return r;
}
var dr = /label:\s*([^\s;{]+)\s*(;|$)/g, _e;
function cs(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  _e = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += Vt(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += Vt(n, t, e[a]), r) {
      var f = i;
      o += f[a];
    }
  dr.lastIndex = 0;
  for (var d = "", m; (m = dr.exec(o)) !== null; )
    d += "-" + m[1];
  var p = rs(o) + d;
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
function us(e, t) {
  const n = Po(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
function fs(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const pr = [];
function mr(e) {
  return pr[0] = e, cs(pr);
}
const ds = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function ps(e) {
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
  } = e, i = ds(t), s = Object.keys(i);
  function a(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function f(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${n})`;
  }
  function d(h, y) {
    const g = s.indexOf(y);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(g !== -1 && typeof t[s[g]] == "number" ? t[s[g]] : y) - r / 100}${n})`;
  }
  function m(h) {
    return s.indexOf(h) + 1 < s.length ? d(h, s[s.indexOf(h) + 1]) : a(h);
  }
  function p(h) {
    const y = s.indexOf(h);
    return y === 0 ? a(s[1]) : y === s.length - 1 ? f(s[y]) : d(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
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
const ms = {
  borderRadius: 4
};
function Hr(e = 8, t = In({
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
function hs(e, t) {
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
  } = e, a = ps(n), f = Hr(o);
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
      ...ms,
      ...i
    }
  }, s);
  return d = pi(d), d.applyStyles = hs, d = t.reduce((m, p) => Ee(m, p), d), d.unstable_sxConfig = {
    ...rn,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, d.unstable_sx = function(p) {
    return nt({
      sx: p,
      theme: this
    });
  }, d;
}
function gs(e) {
  return Object.keys(e).length === 0;
}
function ys(e = null) {
  const t = k.useContext(No);
  return !t || gs(t) ? e : t;
}
const bs = Mn();
function vs(e = bs) {
  return ys(e);
}
const hr = (e) => e, Es = () => {
  let e = hr;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = hr;
    }
  };
}, xs = Es(), Ss = {
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
  const r = Ss[t];
  return r ? `${n}-${r}` : `${xs.generate(e)}-${t}`;
}
function Et(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = We(e, o, n);
  }), r;
}
function Kr(e, t = "") {
  return e.displayName || e.name || t;
}
function gr(e, t, n) {
  const r = Kr(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function Ts(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Kr(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Lt.ForwardRef:
          return gr(e, e.render, "ForwardRef");
        case Lt.Memo:
          return gr(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Qr(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: mr(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = mr(o.style));
  }), r;
}
const Cs = Mn();
function gn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function ws(e) {
  return e ? (t, n) => n[e] : null;
}
function Os(e, t, n) {
  e.theme = Ns(e.theme) ? n : e.theme[t] || e.theme;
}
function Mt(e, t) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((r) => Mt(e, r));
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
    return Xr(e, n.variants, [r]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function Xr(e, t, n = []) {
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
function Rs(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Cs,
    rootShouldForwardProp: r = gn,
    slotShouldForwardProp: o = gn
  } = e;
  function i(a) {
    Os(a, t, n);
  }
  return (a, f = {}) => {
    fs(a, (b) => b.filter((D) => D !== nt));
    const {
      name: d,
      slot: m,
      skipVariantsResolver: p,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: y = ws(Jr(m)),
      ...g
    } = f, u = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      m && m !== "Root" && m !== "root" || !1
    ), T = h || !1;
    let O = gn;
    m === "Root" || m === "root" ? O = r : m ? O = o : $s(a) && (O = void 0);
    const I = us(a, {
      shouldForwardProp: O,
      label: Ps(d, m),
      ...g
    }), x = (b) => {
      if (typeof b == "function" && b.__emotion_real !== b)
        return function(F) {
          return Mt(F, b);
        };
      if (Re(b)) {
        const D = Qr(b);
        return D.variants ? function(K) {
          return Mt(K, D);
        } : D.style;
      }
      return b;
    }, S = (...b) => {
      const D = [], F = b.map(x), K = [];
      if (D.push(i), d && y && K.push(function(M) {
        var _, W;
        const $ = (W = (_ = M.theme.components) == null ? void 0 : _[d]) == null ? void 0 : W.styleOverrides;
        if (!$)
          return null;
        const A = {};
        for (const re in $)
          A[re] = Mt(M, $[re]);
        return y(M, A);
      }), d && !u && K.push(function(M) {
        var A, _;
        const j = M.theme, $ = (_ = (A = j == null ? void 0 : j.components) == null ? void 0 : A[d]) == null ? void 0 : _.variants;
        return $ ? Xr(M, $) : null;
      }), T || K.push(nt), Array.isArray(F[0])) {
        const R = F.shift(), M = new Array(D.length).fill(""), j = new Array(K.length).fill("");
        let $;
        $ = [...M, ...R, ...j], $.raw = [...M, ...R.raw, ...j], D.unshift($);
      }
      const G = [...D, ...F, ...K], c = I(...G);
      return a.muiName && (c.muiName = a.muiName), process.env.NODE_ENV !== "production" && (c.displayName = As(d, m, a)), c;
    };
    return I.withConfig && (S.withConfig = I.withConfig), S;
  };
}
function As(e, t, n) {
  return e ? `${e}${Ve(t || "")}` : `Styled(${Ts(n)})`;
}
function Ps(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${Jr(t || "Root")}`), n;
}
function Ns(e) {
  for (const t in e)
    return !1;
  return !0;
}
function $s(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Jr(e) {
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
const Cn = typeof window < "u" ? k.useLayoutEffect : k.useEffect;
function ks(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Bn(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), ks(e, t, n);
}
function _s(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function De(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return De(_s(e));
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
const Is = (e) => {
  const t = De(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, ct = (e, t) => {
  try {
    return Is(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function on(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Zr(e) {
  e = De(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (d, m = (d + n / 30) % 12) => o - i * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let a = "rgb";
  const f = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", f.push(t[3])), on({
    type: a,
    values: f
  });
}
function wn(e) {
  e = De(e);
  let t = e.type === "hsl" || e.type === "hsla" ? De(Zr(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function yr(e, t) {
  const n = wn(e), r = wn(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function On(e, t) {
  return e = De(e), t = Bn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, on(e);
}
function _t(e, t, n) {
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
  return on(e);
}
function oe(e, t, n) {
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
  return on(e);
}
function ie(e, t, n) {
  try {
    return jn(e, t);
  } catch {
    return e;
  }
}
function Ds(e, t = 0.15) {
  return wn(e) > 0.5 ? Fn(e, t) : jn(e, t);
}
function It(e, t, n) {
  try {
    return Ds(e, t);
  } catch {
    return e;
  }
}
function Ms(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function eo(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  const f = i.type;
  return typeof f == "function" && !Ms(f) && (a = "Did you accidentally use a plain function component for an element instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const xt = yt(l.element, eo);
xt.isRequired = yt(l.element.isRequired, eo);
const Bs = "exact-prop: ​";
function to(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Bs]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function br(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function Fs(e, t = 166) {
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
function Ne(e) {
  return e && e.ownerDocument || document;
}
function rt(e) {
  return Ne(e).defaultView || window;
}
function Rn(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function vr(e) {
  const t = k.useRef(e);
  return Cn(() => {
    t.current = e;
  }), k.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Be(...e) {
  return k.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Rn(n, t);
    });
  }, e);
}
const Er = {};
function js(e, t) {
  const n = k.useRef(Er);
  return n.current === Er && (n.current = e(t)), n;
}
const Ls = [];
function zs(e) {
  k.useEffect(e, Ls);
}
class Ln {
  constructor() {
    Rt(this, "currentId", null);
    Rt(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Rt(this, "disposeEffect", () => this.clear);
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
function Vs() {
  const e = js(Ln.create).current;
  return zs(e.disposeEffect), e;
}
function Ws(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function Us(e) {
  return typeof e == "string";
}
function Gs(e, t, n) {
  return e === void 0 || Us(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function no(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function xr(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Ys(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const y = Ae(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), g = {
      ...n == null ? void 0 : n.style,
      ...o == null ? void 0 : o.style,
      ...r == null ? void 0 : r.style
    }, u = {
      ...n,
      ...o,
      ...r
    };
    return y.length > 0 && (u.className = y), Object.keys(g).length > 0 && (u.style = g), {
      props: u,
      internalRef: void 0
    };
  }
  const s = no({
    ...o,
    ...r
  }), a = xr(r), f = xr(o), d = t(s), m = Ae(d == null ? void 0 : d.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), p = {
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
function qs(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function sn(e) {
  var t;
  return parseInt(k.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const Hs = /* @__PURE__ */ k.createContext(void 0);
process.env.NODE_ENV !== "production" && (l.node, l.object);
function Ks(e) {
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
function Qs({
  props: e,
  name: t
}) {
  const n = k.useContext(Hs);
  return Ks({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const Sr = {
  theme: void 0
};
function Xs(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (Sr.theme = o.theme, i = Qr(e(Sr)), t = i, n = o.theme), i;
  };
}
function Js(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const Tr = (e, t, n, r = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = n : o && typeof o == "object" && (o[i] = n) : o && typeof o == "object" && (o[i] || (o[i] = r.includes(i) ? [] : {}), o = o[i]);
  });
}, Zs = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([a, f]) => {
      (!n || n && !n([...i, a])) && f != null && (typeof f == "object" && Object.keys(f).length > 0 ? r(f, [...i, a], Array.isArray(f) ? [...s, a] : s) : t([...i, a], f, s));
    });
  }
  r(e);
}, ea = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function yn(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return Zs(
    e,
    (a, f, d) => {
      if ((typeof f == "string" || typeof f == "number") && (!r || !r(a, f))) {
        const m = `--${n ? `${n}-` : ""}${a.join("-")}`, p = ea(a, f);
        Object.assign(o, {
          [m]: p
        }), Tr(i, a, `var(${m})`, d), Tr(s, a, `var(${m}, ${p})`, d);
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
function ta(e, t = {}) {
  const {
    getSelector: n = T,
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
  } = yn(f, t);
  let h = p;
  const y = {}, {
    [a]: g,
    ...u
  } = i;
  if (Object.entries(u || {}).forEach(([x, S]) => {
    const {
      vars: b,
      css: D,
      varsWithDefaults: F
    } = yn(S, t);
    h = Ee(h, F), y[x] = {
      css: D,
      vars: b
    };
  }), g) {
    const {
      css: x,
      vars: S,
      varsWithDefaults: b
    } = yn(g, t);
    h = Ee(h, b), y[a] = {
      css: x,
      vars: S
    };
  }
  function T(x, S) {
    var D, F;
    let b = o;
    if (o === "class" && (b = ".%s"), o === "data" && (b = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (b = `[${o}="%s"]`), x) {
      if (b === "media")
        return e.defaultColorScheme === x ? ":root" : {
          [`@media (prefers-color-scheme: ${((F = (D = i[x]) == null ? void 0 : D.palette) == null ? void 0 : F.mode) || x})`]: {
            ":root": S
          }
        };
      if (b)
        return e.defaultColorScheme === x ? `:root, ${b.replace("%s", String(x))}` : b.replace("%s", String(x));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let x = {
        ...d
      };
      return Object.entries(y).forEach(([, {
        vars: S
      }]) => {
        x = Ee(x, S);
      }), x;
    },
    generateStyleSheets: () => {
      var K, G;
      const x = [], S = e.defaultColorScheme || "light";
      function b(c, R) {
        Object.keys(R).length && x.push(typeof c == "string" ? {
          [c]: {
            ...R
          }
        } : c);
      }
      b(n(void 0, {
        ...m
      }), m);
      const {
        [S]: D,
        ...F
      } = y;
      if (D) {
        const {
          css: c
        } = D, R = (G = (K = i[S]) == null ? void 0 : K.palette) == null ? void 0 : G.mode, M = !r && R ? {
          colorScheme: R,
          ...c
        } : {
          ...c
        };
        b(n(S, {
          ...M
        }), M);
      }
      return Object.entries(F).forEach(([c, {
        css: R
      }]) => {
        var $, A;
        const M = (A = ($ = i[c]) == null ? void 0 : $.palette) == null ? void 0 : A.mode, j = !r && M ? {
          colorScheme: M,
          ...R
        } : {
          ...R
        };
        b(n(c, {
          ...j
        }), j);
      }), x;
    }
  };
}
function na(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const ht = {
  black: "#000",
  white: "#fff"
}, ra = {
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
}, at = {
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
function ro() {
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
      paper: ht.white,
      default: ht.white
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
const oa = ro();
function oo() {
  return {
    text: {
      primary: ht.white,
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
      active: ht.white,
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
const Cr = oo();
function wr(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = jn(e.main, o) : t === "dark" && (e.dark = Fn(e.main, i)));
}
function ia(e = "light") {
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
function sa(e = "light") {
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
function aa(e = "light") {
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
function la(e = "light") {
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
function ca(e = "light") {
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
function ua(e = "light") {
  return e === "dark" ? {
    main: at[400],
    light: at[300],
    dark: at[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: at[500],
    dark: at[900]
  };
}
function zn(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...o
  } = e, i = e.primary || ia(t), s = e.secondary || sa(t), a = e.error || aa(t), f = e.info || la(t), d = e.success || ca(t), m = e.warning || ua(t);
  function p(u) {
    const T = yr(u, Cr.text.primary) >= n ? Cr.text.primary : oa.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const O = yr(u, T);
      O < 3 && console.error([`MUI: The contrast ratio of ${O}:1 for ${T} on ${u}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return T;
  }
  const h = ({
    color: u,
    name: T,
    mainShade: O = 500,
    lightShade: I = 300,
    darkShade: x = 700
  }) => {
    if (u = {
      ...u
    }, !u.main && u[O] && (u.main = u[O]), !u.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${T ? ` (${T})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${O}\` property.` : Ie(11, T ? ` (${T})` : "", O));
    if (typeof u.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${T ? ` (${T})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(u.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ie(12, T ? ` (${T})` : "", JSON.stringify(u.main)));
    return wr(u, "light", I, r), wr(u, "dark", x, r), u.contrastText || (u.contrastText = p(u.main)), u;
  };
  let y;
  return t === "light" ? y = ro() : t === "dark" && (y = oo()), process.env.NODE_ENV !== "production" && (y || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ee({
    // A collection of common colors.
    common: {
      ...ht
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
    grey: ra,
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
    ...y
  }, o);
}
function fa(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function da(e, t) {
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
function pa(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Or = {
  textTransform: "uppercase"
}, Rr = '"Roboto", "Helvetica", "Arial", sans-serif';
function ma(e, t) {
  const {
    fontFamily: n = Rr,
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
  const h = r / 14, y = m || ((T) => `${T / f * h}rem`), g = (T, O, I, x, S) => ({
    fontFamily: n,
    fontWeight: T,
    fontSize: y(O),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: I,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Rr ? {
      letterSpacing: `${pa(x / O)}em`
    } : {},
    ...S,
    ...d
  }), u = {
    h1: g(o, 96, 1.167, -1.5),
    h2: g(o, 60, 1.2, -0.5),
    h3: g(i, 48, 1.167, 0),
    h4: g(i, 34, 1.235, 0.25),
    h5: g(i, 24, 1.334, 0),
    h6: g(s, 20, 1.6, 0.15),
    subtitle1: g(i, 16, 1.75, 0.15),
    subtitle2: g(s, 14, 1.57, 0.1),
    body1: g(i, 16, 1.5, 0.15),
    body2: g(i, 14, 1.43, 0.15),
    button: g(s, 14, 1.75, 0.4, Or),
    caption: g(i, 12, 1.66, 0.4),
    overline: g(i, 12, 2.66, 1, Or),
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
    pxToRem: y,
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
const ha = 0.2, ga = 0.14, ya = 0.12;
function fe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ha})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ga})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ya})`].join(",");
}
const ba = ["none", fe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), fe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), fe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), fe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), fe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), fe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), fe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), fe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), fe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), fe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), fe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), fe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), fe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), fe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), fe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), fe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), fe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), fe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), fe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), fe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), fe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), fe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), fe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), fe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], va = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ea = {
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
function Ar(e) {
  return `${Math.round(e)}ms`;
}
function xa(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Sa(e) {
  const t = {
    ...va,
    ...e.easing
  }, n = {
    ...Ea,
    ...e.duration
  };
  return {
    getAutoHeightDuration: xa,
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
      return (Array.isArray(o) ? o : [o]).map((m) => `${m} ${typeof s == "string" ? s : Ar(s)} ${a} ${typeof f == "string" ? f : Ar(f)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const Ta = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Ca(e) {
  return Re(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function io(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, a] = o[i];
      !Ca(a) || s.startsWith("unstable_") ? delete r[s] : Re(a) && (r[s] = {
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
function An(e = {}, ...t) {
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
  const m = zn(i), p = Mn(e);
  let h = Ee(p, {
    mixins: da(p.breakpoints, r),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ba.slice(),
    typography: ma(m, a),
    transitions: Sa(s),
    zIndex: {
      ...Ta
    }
  });
  if (h = Ee(h, d), h = t.reduce((y, g) => Ee(y, g), h), process.env.NODE_ENV !== "production") {
    const y = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], g = (u, T) => {
      let O;
      for (O in u) {
        const I = u[O];
        if (y.includes(O) && Object.keys(I).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const x = We("", O);
            console.error([`MUI: The \`${T}\` component increases the CSS specificity of the \`${O}\` internal state.`, "You can not override it like this: ", JSON.stringify(u, null, 2), "", `Instead, you need to use the '&.${x}' syntax:`, JSON.stringify({
              root: {
                [`&.${x}`]: I
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          u[O] = {};
        }
      }
    };
    Object.keys(h.components).forEach((u) => {
      const T = h.components[u].styleOverrides;
      T && u.startsWith("Mui") && g(T, u);
    });
  }
  return h.unstable_sxConfig = {
    ...rn,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, h.unstable_sx = function(g) {
    return nt({
      sx: g,
      theme: this
    });
  }, h.toRuntimeSource = io, h;
}
function Pn(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const wa = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Pn(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function so(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function ao(e) {
  return e === "dark" ? wa : [];
}
function Oa(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    ...o
  } = e, i = zn(t);
  return {
    palette: i,
    opacity: {
      ...so(i.mode),
      ...n
    },
    overlays: r || ao(i.mode),
    ...o
  };
}
function Ra(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Aa = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Pa = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Aa(e.cssVarPrefix).forEach((a) => {
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
function Na(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function v(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function ut(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Zr(e);
}
function Oe(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = ct(ut(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function $a(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ce = (e) => {
  try {
    return e();
  } catch {
  }
}, ka = (e = "mui") => Js(e);
function bn(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = Oa({
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
  } = An({
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
      ...so(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || ao(o)
  }, s;
}
function _a(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: s = Ra,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...d
  } = e, m = Object.keys(n)[0], p = r || (n.light && m !== "light" ? "light" : m), h = ka(i), {
    [p]: y,
    light: g,
    dark: u,
    ...T
  } = n, O = {
    ...T
  };
  let I = y;
  if ((p === "dark" && !("dark" in n) || p === "light" && !("light" in n)) && (I = !0), !I)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : Ie(21, p));
  const x = bn(O, I, d, p);
  g && !O.light && bn(O, g, void 0, "light"), u && !O.dark && bn(O, u, void 0, "dark");
  let S = {
    defaultColorScheme: p,
    ...x,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: f,
    getCssVar: h,
    colorSchemes: O,
    font: {
      ...fa(x.typography),
      ...x.font
    },
    spacing: $a(d.spacing)
  };
  Object.keys(S.colorSchemes).forEach((G) => {
    const c = S.colorSchemes[G].palette, R = (M) => {
      const j = M.split("-"), $ = j[1], A = j[2];
      return h(M, c[$][A]);
    };
    if (c.mode === "light" && (v(c.common, "background", "#fff"), v(c.common, "onBackground", "#000")), c.mode === "dark" && (v(c.common, "background", "#000"), v(c.common, "onBackground", "#fff")), Na(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      v(c.Alert, "errorColor", oe(c.error.light, 0.6)), v(c.Alert, "infoColor", oe(c.info.light, 0.6)), v(c.Alert, "successColor", oe(c.success.light, 0.6)), v(c.Alert, "warningColor", oe(c.warning.light, 0.6)), v(c.Alert, "errorFilledBg", R("palette-error-main")), v(c.Alert, "infoFilledBg", R("palette-info-main")), v(c.Alert, "successFilledBg", R("palette-success-main")), v(c.Alert, "warningFilledBg", R("palette-warning-main")), v(c.Alert, "errorFilledColor", Ce(() => c.getContrastText(c.error.main))), v(c.Alert, "infoFilledColor", Ce(() => c.getContrastText(c.info.main))), v(c.Alert, "successFilledColor", Ce(() => c.getContrastText(c.success.main))), v(c.Alert, "warningFilledColor", Ce(() => c.getContrastText(c.warning.main))), v(c.Alert, "errorStandardBg", ie(c.error.light, 0.9)), v(c.Alert, "infoStandardBg", ie(c.info.light, 0.9)), v(c.Alert, "successStandardBg", ie(c.success.light, 0.9)), v(c.Alert, "warningStandardBg", ie(c.warning.light, 0.9)), v(c.Alert, "errorIconColor", R("palette-error-main")), v(c.Alert, "infoIconColor", R("palette-info-main")), v(c.Alert, "successIconColor", R("palette-success-main")), v(c.Alert, "warningIconColor", R("palette-warning-main")), v(c.AppBar, "defaultBg", R("palette-grey-100")), v(c.Avatar, "defaultBg", R("palette-grey-400")), v(c.Button, "inheritContainedBg", R("palette-grey-300")), v(c.Button, "inheritContainedHoverBg", R("palette-grey-A100")), v(c.Chip, "defaultBorder", R("palette-grey-400")), v(c.Chip, "defaultAvatarColor", R("palette-grey-700")), v(c.Chip, "defaultIconColor", R("palette-grey-700")), v(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), v(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), v(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), v(c.LinearProgress, "primaryBg", ie(c.primary.main, 0.62)), v(c.LinearProgress, "secondaryBg", ie(c.secondary.main, 0.62)), v(c.LinearProgress, "errorBg", ie(c.error.main, 0.62)), v(c.LinearProgress, "infoBg", ie(c.info.main, 0.62)), v(c.LinearProgress, "successBg", ie(c.success.main, 0.62)), v(c.LinearProgress, "warningBg", ie(c.warning.main, 0.62)), v(c.Skeleton, "bg", `rgba(${R("palette-text-primaryChannel")} / 0.11)`), v(c.Slider, "primaryTrack", ie(c.primary.main, 0.62)), v(c.Slider, "secondaryTrack", ie(c.secondary.main, 0.62)), v(c.Slider, "errorTrack", ie(c.error.main, 0.62)), v(c.Slider, "infoTrack", ie(c.info.main, 0.62)), v(c.Slider, "successTrack", ie(c.success.main, 0.62)), v(c.Slider, "warningTrack", ie(c.warning.main, 0.62));
      const M = It(c.background.default, 0.8);
      v(c.SnackbarContent, "bg", M), v(c.SnackbarContent, "color", Ce(() => c.getContrastText(M))), v(c.SpeedDialAction, "fabHoverBg", It(c.background.paper, 0.15)), v(c.StepConnector, "border", R("palette-grey-400")), v(c.StepContent, "border", R("palette-grey-400")), v(c.Switch, "defaultColor", R("palette-common-white")), v(c.Switch, "defaultDisabledColor", R("palette-grey-100")), v(c.Switch, "primaryDisabledColor", ie(c.primary.main, 0.62)), v(c.Switch, "secondaryDisabledColor", ie(c.secondary.main, 0.62)), v(c.Switch, "errorDisabledColor", ie(c.error.main, 0.62)), v(c.Switch, "infoDisabledColor", ie(c.info.main, 0.62)), v(c.Switch, "successDisabledColor", ie(c.success.main, 0.62)), v(c.Switch, "warningDisabledColor", ie(c.warning.main, 0.62)), v(c.TableCell, "border", ie(_t(c.divider, 1), 0.88)), v(c.Tooltip, "bg", _t(c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      v(c.Alert, "errorColor", ie(c.error.light, 0.6)), v(c.Alert, "infoColor", ie(c.info.light, 0.6)), v(c.Alert, "successColor", ie(c.success.light, 0.6)), v(c.Alert, "warningColor", ie(c.warning.light, 0.6)), v(c.Alert, "errorFilledBg", R("palette-error-dark")), v(c.Alert, "infoFilledBg", R("palette-info-dark")), v(c.Alert, "successFilledBg", R("palette-success-dark")), v(c.Alert, "warningFilledBg", R("palette-warning-dark")), v(c.Alert, "errorFilledColor", Ce(() => c.getContrastText(c.error.dark))), v(c.Alert, "infoFilledColor", Ce(() => c.getContrastText(c.info.dark))), v(c.Alert, "successFilledColor", Ce(() => c.getContrastText(c.success.dark))), v(c.Alert, "warningFilledColor", Ce(() => c.getContrastText(c.warning.dark))), v(c.Alert, "errorStandardBg", oe(c.error.light, 0.9)), v(c.Alert, "infoStandardBg", oe(c.info.light, 0.9)), v(c.Alert, "successStandardBg", oe(c.success.light, 0.9)), v(c.Alert, "warningStandardBg", oe(c.warning.light, 0.9)), v(c.Alert, "errorIconColor", R("palette-error-main")), v(c.Alert, "infoIconColor", R("palette-info-main")), v(c.Alert, "successIconColor", R("palette-success-main")), v(c.Alert, "warningIconColor", R("palette-warning-main")), v(c.AppBar, "defaultBg", R("palette-grey-900")), v(c.AppBar, "darkBg", R("palette-background-paper")), v(c.AppBar, "darkColor", R("palette-text-primary")), v(c.Avatar, "defaultBg", R("palette-grey-600")), v(c.Button, "inheritContainedBg", R("palette-grey-800")), v(c.Button, "inheritContainedHoverBg", R("palette-grey-700")), v(c.Chip, "defaultBorder", R("palette-grey-700")), v(c.Chip, "defaultAvatarColor", R("palette-grey-300")), v(c.Chip, "defaultIconColor", R("palette-grey-300")), v(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), v(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), v(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), v(c.LinearProgress, "primaryBg", oe(c.primary.main, 0.5)), v(c.LinearProgress, "secondaryBg", oe(c.secondary.main, 0.5)), v(c.LinearProgress, "errorBg", oe(c.error.main, 0.5)), v(c.LinearProgress, "infoBg", oe(c.info.main, 0.5)), v(c.LinearProgress, "successBg", oe(c.success.main, 0.5)), v(c.LinearProgress, "warningBg", oe(c.warning.main, 0.5)), v(c.Skeleton, "bg", `rgba(${R("palette-text-primaryChannel")} / 0.13)`), v(c.Slider, "primaryTrack", oe(c.primary.main, 0.5)), v(c.Slider, "secondaryTrack", oe(c.secondary.main, 0.5)), v(c.Slider, "errorTrack", oe(c.error.main, 0.5)), v(c.Slider, "infoTrack", oe(c.info.main, 0.5)), v(c.Slider, "successTrack", oe(c.success.main, 0.5)), v(c.Slider, "warningTrack", oe(c.warning.main, 0.5));
      const M = It(c.background.default, 0.98);
      v(c.SnackbarContent, "bg", M), v(c.SnackbarContent, "color", Ce(() => c.getContrastText(M))), v(c.SpeedDialAction, "fabHoverBg", It(c.background.paper, 0.15)), v(c.StepConnector, "border", R("palette-grey-600")), v(c.StepContent, "border", R("palette-grey-600")), v(c.Switch, "defaultColor", R("palette-grey-300")), v(c.Switch, "defaultDisabledColor", R("palette-grey-600")), v(c.Switch, "primaryDisabledColor", oe(c.primary.main, 0.55)), v(c.Switch, "secondaryDisabledColor", oe(c.secondary.main, 0.55)), v(c.Switch, "errorDisabledColor", oe(c.error.main, 0.55)), v(c.Switch, "infoDisabledColor", oe(c.info.main, 0.55)), v(c.Switch, "successDisabledColor", oe(c.success.main, 0.55)), v(c.Switch, "warningDisabledColor", oe(c.warning.main, 0.55)), v(c.TableCell, "border", oe(_t(c.divider, 1), 0.68)), v(c.Tooltip, "bg", _t(c.grey[700], 0.92));
    }
    Oe(c.background, "default"), Oe(c.background, "paper"), Oe(c.common, "background"), Oe(c.common, "onBackground"), Oe(c, "divider"), Object.keys(c).forEach((M) => {
      const j = c[M];
      M !== "tonalOffset" && j && typeof j == "object" && (j.main && v(c[M], "mainChannel", ct(ut(j.main))), j.light && v(c[M], "lightChannel", ct(ut(j.light))), j.dark && v(c[M], "darkChannel", ct(ut(j.dark))), j.contrastText && v(c[M], "contrastTextChannel", ct(ut(j.contrastText))), M === "text" && (Oe(c[M], "primary"), Oe(c[M], "secondary")), M === "action" && (j.active && Oe(c[M], "active"), j.selected && Oe(c[M], "selected")));
    });
  }), S = t.reduce((G, c) => Ee(G, c), S);
  const b = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: Pa(S)
  }, {
    vars: D,
    generateThemeVars: F,
    generateStyleSheets: K
  } = ta(S, b);
  return S.vars = D, Object.entries(S.colorSchemes[S.defaultColorScheme]).forEach(([G, c]) => {
    S[G] = c;
  }), S.generateThemeVars = F, S.generateStyleSheets = K, S.generateSpacing = function() {
    return Hr(d.spacing, In(this));
  }, S.getColorSchemeSelector = na(a), S.spacing = S.generateSpacing(), S.shouldSkipGeneratingVar = s, S.unstable_sxConfig = {
    ...rn,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, S.unstable_sx = function(c) {
    return nt({
      sx: c,
      theme: this
    });
  }, S.toRuntimeSource = io, S;
}
function Pr(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: zn({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Ia(e = {}, ...t) {
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
      return An(e, ...t);
    let m = n;
    "palette" in e || d[a] && (d[a] !== !0 ? m = d[a].palette : a === "dark" && (m = {
      mode: "dark"
    }));
    const p = An({
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
  return !n && !("light" in d) && a === "light" && (d.light = !0), _a({
    ...s,
    colorSchemes: d,
    defaultColorScheme: a,
    ...typeof r != "boolean" && r
  }, ...t);
}
const lo = Ia(), co = "$$material";
function an() {
  const e = vs(lo);
  return process.env.NODE_ENV !== "production" && k.useDebugValue(e), e[co] || e;
}
function Da(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ma = (e) => Da(e) && e !== "classes", Ue = Rs({
  themeId: co,
  defaultTheme: lo,
  rootShouldForwardProp: Ma
});
process.env.NODE_ENV !== "production" && (l.node, l.object.isRequired);
function St(e) {
  return Qs(e);
}
function Ba(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Nn(e, t) {
  return Nn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Nn(e, t);
}
function Fa(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Nn(e, t);
}
const Nr = {
  disabled: !1
};
var ja = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.shape({
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
const uo = lt.createContext(null);
var La = function(t) {
  return t.scrollTop;
}, ft = "unmounted", je = "exited", Le = "entering", Je = "entered", $n = "exiting", we = /* @__PURE__ */ function(e) {
  Fa(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = o, a = s && !s.isMounting ? r.enter : r.appear, f;
    return i.appearStatus = null, r.in ? a ? (f = je, i.appearStatus = Le) : f = Je : r.unmountOnExit || r.mountOnEnter ? f = ft : f = je, i.state = {
      status: f
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === ft ? {
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
      this.props.in ? s !== Le && s !== Je && (i = Le) : (s === Le || s === Je) && (i = $n);
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
      if (this.cancelNextCallback(), i === Le) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Pt.findDOMNode(this);
          s && La(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === je && this.setState({
      status: ft
    });
  }, n.performEnter = function(o) {
    var i = this, s = this.props.enter, a = this.context ? this.context.isMounting : o, f = this.props.nodeRef ? [a] : [Pt.findDOMNode(this), a], d = f[0], m = f[1], p = this.getTimeouts(), h = a ? p.appear : p.enter;
    if (!o && !s || Nr.disabled) {
      this.safeSetState({
        status: Je
      }, function() {
        i.props.onEntered(d);
      });
      return;
    }
    this.props.onEnter(d, m), this.safeSetState({
      status: Le
    }, function() {
      i.props.onEntering(d, m), i.onTransitionEnd(h, function() {
        i.safeSetState({
          status: Je
        }, function() {
          i.props.onEntered(d, m);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), a = this.props.nodeRef ? void 0 : Pt.findDOMNode(this);
    if (!i || Nr.disabled) {
      this.safeSetState({
        status: je
      }, function() {
        o.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: $n
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
    var s = this.props.nodeRef ? this.props.nodeRef.current : Pt.findDOMNode(this), a = o == null && !this.props.addEndListener;
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
    if (o === ft)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var a = Ba(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ lt.createElement(uo.Provider, {
        value: null
      }, typeof s == "function" ? s(o, a) : lt.cloneElement(lt.Children.only(s), a))
    );
  }, t;
}(lt.Component);
we.contextType = uo;
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
    var n = ja;
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
we.UNMOUNTED = ft;
we.EXITED = je;
we.ENTERING = Le;
we.ENTERED = Je;
we.EXITING = $n;
const fo = (e) => e.scrollTop;
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
function kn(e) {
  return `scale(${e}, ${e ** 2})`;
}
const za = {
  entering: {
    opacity: 1,
    transform: kn(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, vn = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Ut = /* @__PURE__ */ k.forwardRef(function(t, n) {
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
    onExiting: y,
    style: g,
    timeout: u = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: T = we,
    ...O
  } = t, I = Vs(), x = k.useRef(), S = an(), b = k.useRef(null), D = Be(b, sn(i), n), F = (A) => (_) => {
    if (A) {
      const W = b.current;
      _ === void 0 ? A(W) : A(W, _);
    }
  }, K = F(m), G = F((A, _) => {
    fo(A);
    const {
      duration: W,
      delay: re,
      easing: me
    } = Wt({
      style: g,
      timeout: u,
      easing: s
    }, {
      mode: "enter"
    });
    let C;
    u === "auto" ? (C = S.transitions.getAutoHeightDuration(A.clientHeight), x.current = C) : C = W, A.style.transition = [S.transitions.create("opacity", {
      duration: C,
      delay: re
    }), S.transitions.create("transform", {
      duration: vn ? C : C * 0.666,
      delay: re,
      easing: me
    })].join(","), f && f(A, _);
  }), c = F(d), R = F(y), M = F((A) => {
    const {
      duration: _,
      delay: W,
      easing: re
    } = Wt({
      style: g,
      timeout: u,
      easing: s
    }, {
      mode: "exit"
    });
    let me;
    u === "auto" ? (me = S.transitions.getAutoHeightDuration(A.clientHeight), x.current = me) : me = _, A.style.transition = [S.transitions.create("opacity", {
      duration: me,
      delay: W
    }), S.transitions.create("transform", {
      duration: vn ? me : me * 0.666,
      delay: vn ? W : W || me * 0.333,
      easing: re
    })].join(","), A.style.opacity = 0, A.style.transform = kn(0.75), p && p(A);
  }), j = F(h);
  return /* @__PURE__ */ E(T, {
    appear: o,
    in: a,
    nodeRef: b,
    onEnter: G,
    onEntered: c,
    onEntering: K,
    onExit: M,
    onExited: j,
    onExiting: R,
    addEndListener: (A) => {
      u === "auto" && I.start(x.current || 0, A), r && r(b.current, A);
    },
    timeout: u === "auto" ? null : u,
    ...O,
    children: (A, {
      ownerState: _,
      ...W
    }) => /* @__PURE__ */ k.cloneElement(i, {
      style: {
        opacity: 0,
        transform: kn(0.75),
        visibility: A === "exited" && !a ? "hidden" : void 0,
        ...za[A],
        ...g,
        ...i.props.style
      },
      ref: D,
      ...W
    })
  });
});
process.env.NODE_ENV !== "production" && (Ut.propTypes = {
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
  children: xt.isRequired,
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
Ut && (Ut.muiSupportAuto = !0);
function Va(e) {
  const t = Ne(e);
  return t.body === e ? rt(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function mt(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function $r(e) {
  return parseInt(rt(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Wa(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function kr(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = !i.includes(s), f = !Wa(s);
    a && f && mt(s, o);
  });
}
function En(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function Ua(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Va(r)) {
      const s = Ws(rt(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${$r(r) + s}px`;
      const a = Ne(r).querySelectorAll(".mui-fixed");
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
      i = Ne(r).body;
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
function Ga(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Ya {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && mt(t.modalRef, !1);
    const o = Ga(n);
    kr(n, t.mount, t.modalRef, o, !0);
    const i = En(this.containers, (s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = En(this.containers, (i) => i.modals.includes(t)), o = this.containers[r];
    o.restore || (o.restore = Ua(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = En(this.containers, (s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && mt(t.modalRef, n), kr(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && mt(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const qa = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Ha(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Ka(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Qa(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Ka(e));
}
function Xa(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(qa)).forEach((r, o) => {
    const i = Ha(r);
    i === -1 || !Qa(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function Ja() {
  return !0;
}
function Gt(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = Xa,
    isEnabled: s = Ja,
    open: a
  } = e, f = k.useRef(!1), d = k.useRef(null), m = k.useRef(null), p = k.useRef(null), h = k.useRef(null), y = k.useRef(!1), g = k.useRef(null), u = Be(sn(t), g), T = k.useRef(null);
  k.useEffect(() => {
    !a || !g.current || (y.current = !n);
  }, [n, a]), k.useEffect(() => {
    if (!a || !g.current)
      return;
    const x = Ne(g.current);
    return g.current.contains(x.activeElement) || (g.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), g.current.setAttribute("tabIndex", "-1")), y.current && g.current.focus()), () => {
      o || (p.current && p.current.focus && (f.current = !0, p.current.focus()), p.current = null);
    };
  }, [a]), k.useEffect(() => {
    if (!a || !g.current)
      return;
    const x = Ne(g.current), S = (F) => {
      T.current = F, !(r || !s() || F.key !== "Tab") && x.activeElement === g.current && F.shiftKey && (f.current = !0, m.current && m.current.focus());
    }, b = () => {
      var G, c;
      const F = g.current;
      if (F === null)
        return;
      if (!x.hasFocus() || !s() || f.current) {
        f.current = !1;
        return;
      }
      if (F.contains(x.activeElement) || r && x.activeElement !== d.current && x.activeElement !== m.current)
        return;
      if (x.activeElement !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!y.current)
        return;
      let K = [];
      if ((x.activeElement === d.current || x.activeElement === m.current) && (K = i(g.current)), K.length > 0) {
        const R = !!((G = T.current) != null && G.shiftKey && ((c = T.current) == null ? void 0 : c.key) === "Tab"), M = K[0], j = K[K.length - 1];
        typeof M != "string" && typeof j != "string" && (R ? j.focus() : M.focus());
      } else
        F.focus();
    };
    x.addEventListener("focusin", b), x.addEventListener("keydown", S, !0);
    const D = setInterval(() => {
      x.activeElement && x.activeElement.tagName === "BODY" && b();
    }, 50);
    return () => {
      clearInterval(D), x.removeEventListener("focusin", b), x.removeEventListener("keydown", S, !0);
    };
  }, [n, r, o, s, a, i]);
  const O = (x) => {
    p.current === null && (p.current = x.relatedTarget), y.current = !0, h.current = x.target;
    const S = t.props.onFocus;
    S && S(x);
  }, I = (x) => {
    p.current === null && (p.current = x.relatedTarget), y.current = !0;
  };
  return /* @__PURE__ */ ee(k.Fragment, {
    children: [/* @__PURE__ */ E("div", {
      tabIndex: a ? 0 : -1,
      onFocus: I,
      ref: d,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ k.cloneElement(t, {
      ref: u,
      onFocus: O
    }), /* @__PURE__ */ E("div", {
      tabIndex: a ? 0 : -1,
      onFocus: I,
      ref: m,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Gt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: xt,
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
process.env.NODE_ENV !== "production" && (Gt.propTypes = to(Gt.propTypes));
function Za(e) {
  return typeof e == "function" ? e() : e;
}
const Yt = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, a] = k.useState(null), f = Be(/* @__PURE__ */ k.isValidElement(r) ? sn(r) : null, n);
  if (Cn(() => {
    i || a(Za(o) || document.body);
  }, [o, i]), Cn(() => {
    if (s && !i)
      return Rn(n, s), () => {
        Rn(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ k.isValidElement(r)) {
      const d = {
        ref: f
      };
      return /* @__PURE__ */ k.cloneElement(r, d);
    }
    return r;
  }
  return s && /* @__PURE__ */ Go.createPortal(r, s);
});
process.env.NODE_ENV !== "production" && (Yt.propTypes = {
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
process.env.NODE_ENV !== "production" && (Yt.propTypes = to(Yt.propTypes));
const Vn = Xs;
function ot(e, t) {
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
  } = i, y = m[e] || r, g = qs(p[e], o), {
    props: {
      component: u,
      ...T
    },
    internalRef: O
  } = Ys({
    className: n,
    ...f,
    externalForwardedProps: e === "root" ? h : void 0,
    externalSlotProps: g
  }), I = Be(O, g == null ? void 0 : g.ref, t.ref), x = e === "root" ? u || d : u, S = Gs(y, {
    ...e === "root" && !d && !m[e] && s,
    ...e !== "root" && !m[e] && s,
    ...T,
    ...x && !a && {
      as: x
    },
    ...x && a && {
      component: x
    },
    ref: I
  }, o);
  return [y, S];
}
const el = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, po = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = an(), o = {
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
    onExit: y,
    onExited: g,
    onExiting: u,
    style: T,
    timeout: O = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: I = we,
    ...x
  } = t, S = k.useRef(null), b = Be(S, sn(a), n), D = ($) => (A) => {
    if ($) {
      const _ = S.current;
      A === void 0 ? $(_) : $(_, A);
    }
  }, F = D(h), K = D(($, A) => {
    fo($);
    const _ = Wt({
      style: T,
      timeout: O,
      easing: f
    }, {
      mode: "enter"
    });
    $.style.webkitTransition = r.transitions.create("opacity", _), $.style.transition = r.transitions.create("opacity", _), m && m($, A);
  }), G = D(p), c = D(u), R = D(($) => {
    const A = Wt({
      style: T,
      timeout: O,
      easing: f
    }, {
      mode: "exit"
    });
    $.style.webkitTransition = r.transitions.create("opacity", A), $.style.transition = r.transitions.create("opacity", A), y && y($);
  }), M = D(g);
  return /* @__PURE__ */ E(I, {
    appear: s,
    in: d,
    nodeRef: S,
    onEnter: K,
    onEntered: G,
    onEntering: F,
    onExit: R,
    onExited: M,
    onExiting: c,
    addEndListener: ($) => {
      i && i(S.current, $);
    },
    timeout: O,
    ...x,
    children: ($, {
      ownerState: A,
      ..._
    }) => /* @__PURE__ */ k.cloneElement(a, {
      style: {
        opacity: 0,
        visibility: $ === "exited" && !d ? "hidden" : void 0,
        ...el[$],
        ...T,
        ...a.props.style
      },
      ref: b,
      ..._
    })
  });
});
process.env.NODE_ENV !== "production" && (po.propTypes = {
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
  children: xt.isRequired,
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
function tl(e) {
  return We("MuiBackdrop", e);
}
Et("MuiBackdrop", ["root", "invisible"]);
const nl = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return gt({
    root: ["root", n && "invisible"]
  }, tl, t);
}, rl = Ue("div", {
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
}), mo = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = St({
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
    TransitionComponent: y,
    transitionDuration: g,
    ...u
  } = r, T = {
    ...r,
    component: s,
    invisible: a
  }, O = nl(T), I = {
    transition: y,
    root: d.Root,
    ...h
  }, x = {
    ...m,
    ...p
  }, S = {
    slots: I,
    slotProps: x
  }, [b, D] = ot("root", {
    elementType: rl,
    externalForwardedProps: S,
    className: Ae(O.root, i),
    ownerState: T
  }), [F, K] = ot("transition", {
    elementType: po,
    externalForwardedProps: S,
    ownerState: T
  });
  return /* @__PURE__ */ E(F, {
    in: f,
    timeout: g,
    ...u,
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
function ol(e) {
  return typeof e == "function" ? e() : e;
}
function il(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const _r = () => {
}, Dt = new Ya();
function sl(e) {
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
  } = e, p = k.useRef({}), h = k.useRef(null), y = k.useRef(null), g = Be(y, m), [u, T] = k.useState(!d), O = il(a);
  let I = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (I = !1);
  const x = () => Ne(h.current), S = () => (p.current.modalRef = y.current, p.current.mount = h.current, p.current), b = () => {
    Dt.mount(S(), {
      disableScrollLock: r
    }), y.current && (y.current.scrollTop = 0);
  }, D = vr(() => {
    const A = ol(t) || x().body;
    Dt.add(S(), A), y.current && b();
  }), F = () => Dt.isTopModal(S()), K = vr((A) => {
    h.current = A, A && (d && F() ? b() : y.current && mt(y.current, I));
  }), G = k.useCallback(() => {
    Dt.remove(S(), I);
  }, [I]);
  k.useEffect(() => () => {
    G();
  }, [G]), k.useEffect(() => {
    d ? D() : (!O || !o) && G();
  }, [d, G, O, o, D]);
  const c = (A) => (_) => {
    var W;
    (W = A.onKeyDown) == null || W.call(A, _), !(_.key !== "Escape" || _.which === 229 || // Wait until IME is settled.
    !F()) && (n || (_.stopPropagation(), f && f(_, "escapeKeyDown")));
  }, R = (A) => (_) => {
    var W;
    (W = A.onClick) == null || W.call(A, _), _.target === _.currentTarget && f && f(_, "backdropClick");
  };
  return {
    getRootProps: (A = {}) => {
      const _ = no(e);
      delete _.onTransitionEnter, delete _.onTransitionExited;
      const W = {
        ..._,
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
        ...W,
        onKeyDown: c(W),
        ref: g
      };
    },
    getBackdropProps: (A = {}) => {
      const _ = A;
      return {
        "aria-hidden": !0,
        ..._,
        onClick: R(_),
        open: d
      };
    },
    getTransitionProps: () => {
      const A = () => {
        T(!1), i && i();
      }, _ = () => {
        T(!0), s && s(), o && G();
      };
      return {
        onEnter: br(A, (a == null ? void 0 : a.props.onEnter) ?? _r),
        onExited: br(_, (a == null ? void 0 : a.props.onExited) ?? _r)
      };
    },
    rootRef: g,
    portalRef: K,
    isTopModal: F,
    exited: u,
    hasTransition: O
  };
}
function al(e) {
  return We("MuiModal", e);
}
Et("MuiModal", ["root", "hidden", "backdrop"]);
function ll(e) {
  return We("MuiSvgIcon", e);
}
Et("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const cl = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Ve(t)}`, `fontSize${Ve(n)}`]
  };
  return gt(o, ll, r);
}, ul = Ue("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${Ve(n.color)}`], t[`fontSize${Ve(n.fontSize)}`]];
  }
})(Vn(({
  theme: e
}) => {
  var t, n, r, o, i, s, a, f, d, m, p, h, y, g;
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
        var T, O;
        return {
          props: {
            color: u
          },
          style: {
            color: (O = (T = (e.vars ?? e).palette) == null ? void 0 : T[u]) == null ? void 0 : O.main
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
          color: (g = (y = (e.vars ?? e).palette) == null ? void 0 : y.action) == null ? void 0 : g.disabled
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
})), qt = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = St({
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
    ...y
  } = r, g = /* @__PURE__ */ k.isValidElement(o) && o.type === "svg", u = {
    ...r,
    color: s,
    component: a,
    fontSize: f,
    instanceFontSize: t.fontSize,
    inheritViewBox: m,
    viewBox: h,
    hasSvgAsChild: g
  }, T = {};
  m || (T.viewBox = h);
  const O = cl(u);
  return /* @__PURE__ */ ee(ul, {
    as: a,
    className: Ae(O.root, i),
    focusable: "false",
    color: d,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: n,
    ...T,
    ...y,
    ...g && o.props,
    ownerState: u,
    children: [g ? o.props.children : o, p ? /* @__PURE__ */ E("title", {
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
function Wn(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ E(qt, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...r,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = qt.muiName, /* @__PURE__ */ k.memo(/* @__PURE__ */ k.forwardRef(n));
}
const fl = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return gt({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, al, r);
}, dl = Ue("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(Vn(({
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
}))), pl = Ue(mo, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), ho = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = St({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: o = pl,
    BackdropProps: i,
    classes: s,
    className: a,
    closeAfterTransition: f = !1,
    children: d,
    container: m,
    component: p,
    components: h = {},
    componentsProps: y = {},
    disableAutoFocus: g = !1,
    disableEnforceFocus: u = !1,
    disableEscapeKeyDown: T = !1,
    disablePortal: O = !1,
    disableRestoreFocus: I = !1,
    disableScrollLock: x = !1,
    hideBackdrop: S = !1,
    keepMounted: b = !1,
    onBackdropClick: D,
    onClose: F,
    onTransitionEnter: K,
    onTransitionExited: G,
    open: c,
    slotProps: R = {},
    slots: M = {},
    // eslint-disable-next-line react/prop-types
    theme: j,
    ...$
  } = r, A = {
    ...r,
    closeAfterTransition: f,
    disableAutoFocus: g,
    disableEnforceFocus: u,
    disableEscapeKeyDown: T,
    disablePortal: O,
    disableRestoreFocus: I,
    disableScrollLock: x,
    hideBackdrop: S,
    keepMounted: b
  }, {
    getRootProps: _,
    getBackdropProps: W,
    getTransitionProps: re,
    portalRef: me,
    isTopModal: C,
    exited: P,
    hasTransition: Y
  } = sl({
    ...A,
    rootRef: n
  }), L = {
    ...A,
    exited: P
  }, N = fl(L), U = {};
  if (d.props.tabIndex === void 0 && (U.tabIndex = "-1"), Y) {
    const {
      onEnter: w,
      onExited: ae
    } = re();
    U.onEnter = w, U.onExited = ae;
  }
  const z = {
    ...$,
    slots: {
      root: h.Root,
      backdrop: h.Backdrop,
      ...M
    },
    slotProps: {
      ...y,
      ...R
    }
  }, [q, Q] = ot("root", {
    elementType: dl,
    externalForwardedProps: z,
    getSlotProps: _,
    additionalProps: {
      ref: n,
      as: p
    },
    ownerState: L,
    className: Ae(a, N == null ? void 0 : N.root, !L.open && L.exited && (N == null ? void 0 : N.hidden))
  }), [X, B] = ot("backdrop", {
    elementType: o,
    externalForwardedProps: z,
    additionalProps: i,
    getSlotProps: (w) => W({
      ...w,
      onClick: (ae) => {
        D && D(ae), w != null && w.onClick && w.onClick(ae);
      }
    }),
    className: Ae(i == null ? void 0 : i.className, N == null ? void 0 : N.backdrop),
    ownerState: L
  }), H = Be(i == null ? void 0 : i.ref, B.ref);
  return !b && !c && (!Y || P) ? null : /* @__PURE__ */ E(Yt, {
    ref: me,
    container: m,
    disablePortal: O,
    children: /* @__PURE__ */ ee(q, {
      ...Q,
      children: [!S && o ? /* @__PURE__ */ E(X, {
        ...B,
        ref: H
      }) : null, /* @__PURE__ */ E(Gt, {
        disableEnforceFocus: u,
        disableAutoFocus: g,
        disableRestoreFocus: I,
        isEnabled: C,
        open: c,
        children: /* @__PURE__ */ k.cloneElement(d, U)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (ho.propTypes = {
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
  children: xt.isRequired,
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
function ml(e) {
  return We("MuiPaper", e);
}
Et("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const hl = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return gt(i, ml, o);
}, gl = Ue("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(Vn(({
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
}))), go = /* @__PURE__ */ k.forwardRef(function(t, n) {
  var y;
  const r = St({
    props: t,
    name: "MuiPaper"
  }), o = an(), {
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
  }, h = hl(p);
  return process.env.NODE_ENV !== "production" && o.shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ E(gl, {
    as: s,
    ownerState: p,
    className: Ae(h.root, i),
    ref: n,
    ...m,
    style: {
      ...d === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[a],
        ...o.vars && {
          "--Paper-overlay": (y = o.vars.overlays) == null ? void 0 : y[a]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${On("#fff", Pn(a))}, ${On("#fff", Pn(a))})`
        }
      },
      ...m.style
    }
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
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: yt(Ur, (e) => {
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
function yl(e) {
  return We("MuiPopover", e);
}
Et("MuiPopover", ["root", "paper"]);
function Ir(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Dr(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Mr(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Bt(e) {
  return typeof e == "function" ? e() : e;
}
const bl = (e) => {
  const {
    classes: t
  } = e;
  return gt({
    root: ["root"],
    paper: ["paper"]
  }, yl, t);
}, vl = Ue(ho, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), El = Ue(go, {
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
}), yo = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = St({
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
    marginThreshold: y = 16,
    open: g,
    PaperProps: u = {},
    slots: T = {},
    slotProps: O = {},
    transformOrigin: I = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: x = Ut,
    transitionDuration: S = "auto",
    TransitionProps: {
      onEntering: b,
      ...D
    } = {},
    disableScrollLock: F = !1,
    ...K
  } = r, G = (O == null ? void 0 : O.paper) ?? u, c = k.useRef(), R = {
    ...r,
    anchorOrigin: s,
    anchorReference: f,
    elevation: h,
    marginThreshold: y,
    externalPaperSlotProps: G,
    transformOrigin: I,
    TransitionComponent: x,
    transitionDuration: S,
    TransitionProps: D
  }, M = bl(R), j = k.useCallback(() => {
    if (f === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (a || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), a;
    const B = Bt(i), H = B && B.nodeType === 1 ? B : Ne(c.current).body, w = H.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ae = H.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ae.top === 0 && ae.left === 0 && ae.right === 0 && ae.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: w.top + Ir(w, s.vertical),
      left: w.left + Dr(w, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, a, f]), $ = k.useCallback((B) => ({
    vertical: Ir(B, I.vertical),
    horizontal: Dr(B, I.horizontal)
  }), [I.horizontal, I.vertical]), A = k.useCallback((B) => {
    const H = {
      width: B.offsetWidth,
      height: B.offsetHeight
    }, w = $(H);
    if (f === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Mr(w)
      };
    const ae = j();
    let ge = ae.top - w.vertical, be = ae.left - w.horizontal;
    const it = ge + H.height, Tt = be + H.width, Ct = rt(Bt(i)), Fe = Ct.innerHeight - y, wt = Ct.innerWidth - y;
    if (y !== null && ge < y) {
      const ye = ge - y;
      ge -= ye, w.vertical += ye;
    } else if (y !== null && it > Fe) {
      const ye = it - Fe;
      ge -= ye, w.vertical += ye;
    }
    if (process.env.NODE_ENV !== "production" && H.height > Fe && H.height && Fe && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${H.height - Fe}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), y !== null && be < y) {
      const ye = be - y;
      be -= ye, w.horizontal += ye;
    } else if (Tt > wt) {
      const ye = Tt - wt;
      be -= ye, w.horizontal += ye;
    }
    return {
      top: `${Math.round(ge)}px`,
      left: `${Math.round(be)}px`,
      transformOrigin: Mr(w)
    };
  }, [i, f, j, $, y]), [_, W] = k.useState(g), re = k.useCallback(() => {
    const B = c.current;
    if (!B)
      return;
    const H = A(B);
    H.top !== null && B.style.setProperty("top", H.top), H.left !== null && (B.style.left = H.left), B.style.transformOrigin = H.transformOrigin, W(!0);
  }, [A]);
  k.useEffect(() => (F && window.addEventListener("scroll", re), () => window.removeEventListener("scroll", re)), [i, F, re]);
  const me = (B, H) => {
    b && b(B, H), re();
  }, C = () => {
    W(!1);
  };
  k.useEffect(() => {
    g && re();
  }), k.useImperativeHandle(o, () => g ? {
    updatePosition: () => {
      re();
    }
  } : null, [g, re]), k.useEffect(() => {
    if (!g)
      return;
    const B = Fs(() => {
      re();
    }), H = rt(i);
    return H.addEventListener("resize", B), () => {
      B.clear(), H.removeEventListener("resize", B);
    };
  }, [i, g, re]);
  let P = S;
  S === "auto" && !x.muiSupportAuto && (P = void 0);
  const Y = p || (i ? Ne(Bt(i)).body : void 0), L = {
    slots: T,
    slotProps: {
      ...O,
      paper: G
    }
  }, [N, U] = ot("paper", {
    elementType: El,
    externalForwardedProps: L,
    additionalProps: {
      elevation: h,
      className: Ae(M.paper, G == null ? void 0 : G.className),
      style: _ ? G.style : {
        ...G.style,
        opacity: 0
      }
    },
    ownerState: R
  }), [z, {
    slotProps: q,
    ...Q
  }] = ot("root", {
    elementType: vl,
    externalForwardedProps: L,
    additionalProps: {
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: Y,
      open: g
    },
    ownerState: R,
    className: Ae(M.root, m)
  }), X = Be(c, U.ref);
  return /* @__PURE__ */ E(z, {
    ...Q,
    ...!si(z) && {
      slotProps: q,
      disableScrollLock: F
    },
    ...K,
    ref: n,
    children: /* @__PURE__ */ E(x, {
      appear: !0,
      in: g,
      onEntering: me,
      onExited: C,
      timeout: P,
      ...D,
      children: /* @__PURE__ */ E(N, {
        ...U,
        ref: X,
        children: d
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (yo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: ti,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: yt(l.oneOfType([jt, l.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Bt(e.anchorEl);
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
  elevation: Ur,
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
    component: oi
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
const xl = Wn(/* @__PURE__ */ E("path", {
  d: "M3 17v2h6v-2zM3 5v2h10V5zm10 16v-2h8v-2h-8v-2h-2v6zM7 9v2H3v2h4v2h2V9zm14 4v-2H11v2zm-6-4h2V7h4V5h-4V3h-2z"
}), "Tune"), xn = {
  flex: { xs: "1 1 100%", sm: 1 },
  minWidth: 0
};
function bo() {
  return { type: "rule", column: "", operator: "", value: "" };
}
function vo(e = "AND") {
  return {
    type: "group",
    combinator: e,
    not: !1,
    rules: [bo()]
  };
}
const Sl = ({ rule: e, index: t, columnsOperator: n, onChange: r, onDelete: o, sx: i = {} }) => {
  var m;
  const { columnSelectSx: s, operatorSelectSx: a, valueInputSx: f, deleteButtonSx: d } = i;
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
          qn,
          {
            size: "small",
            value: e.column,
            onChange: (p) => r(t, "column", p.target.value),
            displayEmpty: !0,
            fullWidth: !0,
            sx: { ...xn, ...s },
            children: [
              /* @__PURE__ */ E(At, { value: "", disabled: !0, children: "Select Column" }),
              Object.keys(n).map((p) => /* @__PURE__ */ E(At, { value: p, children: p }, p))
            ]
          }
        ),
        /* @__PURE__ */ ee(
          qn,
          {
            size: "small",
            value: e.operator,
            onChange: (p) => r(t, "operator", p.target.value),
            displayEmpty: !0,
            disabled: !e.column,
            fullWidth: !0,
            sx: { ...xn, ...a },
            children: [
              /* @__PURE__ */ E(At, { value: "", disabled: !0, children: "Select Operator" }),
              e.column && ((m = n[e.column]) == null ? void 0 : m.operators.map((p) => /* @__PURE__ */ E(At, { value: p, children: p }, p)))
            ]
          }
        ),
        /* @__PURE__ */ E(
          Io,
          {
            size: "small",
            value: e.value,
            onChange: (p) => r(t, "value", p.target.value),
            placeholder: "Enter value",
            fullWidth: !0,
            sx: { ...xn, ...f }
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
              ...d
            },
            children: /* @__PURE__ */ E(Fr, { fontSize: "small" })
          }
        ) })
      ]
    }
  );
}, Eo = ({ group: e, path: t, columnsOperator: n, onChange: r, onDelete: o, isRoot: i, sx: s = {} }) => {
  const a = (u, T) => {
    T !== null && r(t, { ...e, combinator: T });
  }, f = () => {
    r(t, { ...e, not: !e.not });
  }, d = () => {
    r(t, { ...e, rules: [...e.rules, bo()] });
  }, m = () => {
    r(t, { ...e, rules: [...e.rules, vo()] });
  }, p = (u, T, O) => {
    const I = e.rules.map(
      (x, S) => S === u ? { ...x, [T]: O } : x
    );
    r(t, { ...e, rules: I });
  }, h = (u) => {
    const T = e.rules.filter((O, I) => I !== u);
    r(t, { ...e, rules: T });
  }, y = (u, T) => {
    const O = u[u.length - 1], I = e.rules.map((x, S) => S === O ? T : x);
    r(t, { ...e, rules: I });
  }, g = (u) => {
    const T = e.rules.filter((O, I) => I !== u);
    r(t, { ...e, rules: T });
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
                $o,
                {
                  checked: e.not,
                  onClick: f,
                  size: "small",
                  sx: { p: 0.5 }
                }
              ),
              /* @__PURE__ */ E(ue, { variant: "body2", sx: { fontWeight: 500, mr: 0.5 }, children: "NOT" }),
              /* @__PURE__ */ ee(
                ko,
                {
                  value: e.combinator,
                  exclusive: !0,
                  onChange: a,
                  size: "small",
                  sx: { height: 28 },
                  children: [
                    /* @__PURE__ */ E(
                      Yn,
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
                      Yn,
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
              /* @__PURE__ */ E(et, { title: "Add Rule", children: /* @__PURE__ */ E(ze, { onClick: d, size: "small", color: "primary", children: /* @__PURE__ */ E(Hn, { fontSize: "small" }) }) }),
              /* @__PURE__ */ E(et, { title: "Add Group", children: /* @__PURE__ */ E(
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
                  children: /* @__PURE__ */ E(Hn, { fontSize: "small" })
                }
              ) }),
              !i && /* @__PURE__ */ E(et, { title: "Delete Group", children: /* @__PURE__ */ E(
                ze,
                {
                  onClick: () => o(),
                  color: "error",
                  size: "small",
                  children: /* @__PURE__ */ E(Fr, { fontSize: "small" })
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ E(_o, { spacing: 1, children: e.rules.map(
          (u, T) => u.type === "group" ? /* @__PURE__ */ E(
            Eo,
            {
              group: u,
              path: [...t, T],
              columnsOperator: n,
              onChange: y,
              onDelete: () => g(T),
              isRoot: !1,
              sx: s
            },
            T
          ) : /* @__PURE__ */ E(
            Sl,
            {
              rule: u,
              index: T,
              columnsOperator: n,
              onChange: p,
              onDelete: h,
              sx: s
            },
            T
          )
        ) })
      ]
    }
  );
}, Tl = ({
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
    cancelButton: f,
    ...d
  } = o, [m, p] = xe(
    () => r && r.type === "group" ? r : vo("AND")
  );
  dt(() => {
    r && r.type === "group" && p(r);
  }, [r]);
  const h = (y, g) => {
    p(g);
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
          Eo,
          {
            group: m,
            path: [],
            columnsOperator: e,
            onChange: h,
            onDelete: () => {
            },
            isRoot: !0,
            sx: d
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
                Ft,
                {
                  variant: "contained",
                  color: "primary",
                  onClick: () => t(m),
                  sx: a,
                  children: "Search"
                }
              ),
              /* @__PURE__ */ E(
                Ft,
                {
                  variant: "outlined",
                  sx: f,
                  children: "Cancel"
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Cl = Wn(/* @__PURE__ */ E("path", {
  d: "M11 18h2v-2h-2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4"
}), "HelpOutline"), wl = Wn(/* @__PURE__ */ E("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
function Ol(e, t, n) {
  return [...t].sort((o, i) => i.length - o.length), Rl(e);
}
function Rl(e, t, n) {
  if (e = (e || "").trim(), !e) return { type: "group", combinator: "AND", not: !1, rules: [] };
  const r = Al(e);
  return Pl(r);
}
function Al(e) {
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
    } else {
      let r = n;
      for (; r < e.length && e[r] !== " " && e[r] !== "	" && e[r] !== "(" && e[r] !== ")"; ) r++;
      t.push({ type: "word", value: e.slice(n, r) }), n = r;
    }
  }
  return t;
}
function Pl(e, t, n) {
  let r = 0;
  function o() {
    const f = [], d = [];
    for (f.push(s()); r < e.length; ) {
      const h = e[r];
      if (h && h.type === "word" && (h.value.toUpperCase() === "AND" || h.value.toUpperCase() === "OR"))
        d.push(h.value.toUpperCase()), r++, f.push(s());
      else
        break;
    }
    if (f.length === 1) return f[0];
    const m = d[0] || "AND";
    return d.every((h) => h === m) ? { type: "group", combinator: m, not: !1, rules: f } : i(f, d);
  }
  function i(f, d) {
    const m = [];
    let p = [f[0]];
    for (let h = 0; h < d.length; h++)
      d[h] === "AND" ? p.push(f[h + 1]) : (p.length === 1 ? m.push(p[0]) : m.push({ type: "group", combinator: "AND", not: !1, rules: p }), p = [f[h + 1]]);
    return p.length === 1 ? m.push(p[0]) : m.push({ type: "group", combinator: "AND", not: !1, rules: p }), { type: "group", combinator: "OR", not: !1, rules: m };
  }
  function s() {
    if (r >= e.length)
      return { type: "rule", column: "", operator: "", value: "" };
    const f = e[r];
    if (f.type === "word" && f.value.toUpperCase() === "NOT") {
      r++;
      const g = s();
      return g.type === "group" ? { ...g, not: !0 } : { type: "group", combinator: "AND", not: !0, rules: [g] };
    }
    if (f.type === "paren" && f.value === "(") {
      r++;
      const g = o();
      return r < e.length && e[r].type === "paren" && e[r].value === ")" && r++, g.type === "group" ? g : { type: "group", combinator: "AND", not: !1, rules: [g] };
    }
    const d = f.value;
    if (r++, r >= e.length)
      return { type: "rule", column: d, operator: "", value: "" };
    const m = e[r], p = m ? m.value : "";
    if (r++, r >= e.length)
      return { type: "rule", column: d, operator: p, value: "" };
    let h = "";
    const y = e[r];
    return y && y.type === "word" && y.value.toUpperCase() !== "AND" && y.value.toUpperCase() !== "OR" ? (h = y.value, r++) : y && y.type, { type: "rule", column: d, operator: p, value: h };
  }
  const a = o();
  return a.type === "rule" ? { type: "group", combinator: "AND", not: !1, rules: [a] } : a;
}
function Nl(e, t) {
  if (e = (e || "").trim(), !e)
    return { isValid: !0, error: null };
  let n = 0;
  for (const f of e)
    if (f === "(" && n++, f === ")" && n--, n < 0)
      return { isValid: !1, error: "Unmatched closing parenthesis `)`. Check your grouping." };
  if (n > 0)
    return { isValid: !1, error: "Unclosed opening parenthesis `(`. Add the matching `)` to close the group." };
  if ((e.match(/"/g) || []).length % 2 !== 0)
    return { isValid: !1, error: 'Unclosed quoted value. Make sure every `"` has a matching `"`.' };
  if (/\b(AND|OR)\s*$/i.test(e))
    return { isValid: !1, error: "Query ends with AND/OR. Add another condition after it." };
  const i = e.replace(/^\s*\(\s*/, "");
  if (/^\s*(AND|OR)\b/i.test(i))
    return { isValid: !1, error: "Query starts with AND/OR. Add a condition before it." };
  if (/\(\s*\)/.test(e))
    return { isValid: !1, error: "Empty parentheses `()` found. Add conditions inside the group." };
  const a = e.replace(/[()]/g, " ").split(/\s+(?:AND|OR)\s+/i);
  for (const f of a) {
    const d = f.trim();
    if (!d) continue;
    const m = d.split(/\s+/);
    if (m.length < 3 && !/^".*"$/.test(m[m.length - 1]) && m.length < 2)
      return {
        isValid: !1,
        error: 'Incomplete condition. Expected: <column> <operator> <value> (e.g. name == "John").'
      };
  }
  return { isValid: !0, error: null };
}
function $l(e, t, n, r) {
  if (!e) return [];
  const o = /"[^"]*"?|[()]|\s+|\S+/g, i = e.match(o) || [], s = t || [], a = n || [], f = (r || []).map((p) => p.toUpperCase()), d = [];
  let m = "column";
  for (const p of i) {
    if (/^\s+$/.test(p)) {
      d.push({ type: "whitespace", text: p });
      continue;
    }
    if (p === "(" || p === ")") {
      d.push({ type: "paren", text: p }), p === "(" && (m = "column");
      continue;
    }
    if (p.toUpperCase() === "NOT" && m === "column") {
      d.push({ type: "logical", text: p });
      continue;
    }
    let h;
    m === "column" ? f.includes(p.toUpperCase()) ? (h = "logical", m = "column") : (h = s.includes(p) ? "column" : "customColumn", m = "operator") : m === "operator" ? (h = a.includes(p) ? "operator" : "unknownOperator", m = "value") : m === "value" ? (h = "value", m = "logical") : f.includes(p.toUpperCase()) ? (h = "logical", m = "column") : h = "value", d.push({ type: h, text: p });
  }
  return d;
}
function xo(e) {
  if (!e || e.type !== "group") return [];
  const t = [];
  for (const n of e.rules || [])
    n.type === "rule" ? t.push({ column: n.column, operator: n.operator, value: n.value }) : n.type === "group" && t.push(...xo(n));
  return t;
}
function So(e) {
  if (!e || e.type !== "group") return "";
  const t = [];
  for (const r of e.rules || [])
    if (r.type === "rule" && r.column && r.operator)
      t.push(`${r.column} ${r.operator} ${r.value}`);
    else if (r.type === "group") {
      const o = So(r);
      o && t.push(`(${o})`);
    }
  const n = t.join(` ${e.combinator} `);
  return e.not ? `NOT (${n})` : n;
}
const kl = {
  column: "primary.main",
  customColumn: "info.main",
  operator: "error.main",
  unknownOperator: "text.disabled",
  logical: "secondary.main",
  paren: "warning.main",
  value: "text.primary"
}, Br = {
  column: 400,
  customColumn: 400,
  operator: 600,
  unknownOperator: 400,
  logical: 600,
  paren: 700,
  value: 400
}, _l = 'Type a query like: column operator value — e.g. name == "John"', Il = ({ open: e, onClose: t, sx: n = {} }) => {
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
    listItem: y,
    chip: g,
    divider: u,
    actions: T,
    gotItButton: O,
    colorLegendItem: I,
    colorSwatch: x,
    warningText: S
  } = n;
  return /* @__PURE__ */ ee(
    zo,
    {
      open: e,
      onClose: t,
      maxWidth: "md",
      fullWidth: !0,
      scroll: "paper",
      sx: r,
      children: [
        /* @__PURE__ */ ee(Vo, { sx: { pr: 6, ...o }, children: [
          "How to Use the Query Search",
          /* @__PURE__ */ E(
            ze,
            {
              onClick: t,
              size: "small",
              sx: { position: "absolute", right: 12, top: 12, ...i },
              "aria-label": "close",
              children: /* @__PURE__ */ E(wl, { fontSize: "small" })
            }
          )
        ] }),
        /* @__PURE__ */ ee(Wo, { dividers: !0, sx: s, children: [
          /* @__PURE__ */ E(ue, { variant: "h6", gutterBottom: !0, sx: a, children: "Overview" }),
          /* @__PURE__ */ ee(ue, { variant: "body2", paragraph: !0, sx: f, children: [
            "The query search box lets you filter data using a simple, readable query language. Type your conditions directly into the search field and press ",
            /* @__PURE__ */ E("strong", { children: "Apply" }),
            " to run the query. Suggestions will appear as you type to guide you through valid columns, operators, and logical connectors."
          ] }),
          /* @__PURE__ */ E(st, { sx: { my: 2, ...u } }),
          /* @__PURE__ */ E(ue, { variant: "h6", gutterBottom: !0, sx: a, children: "Basic Syntax" }),
          /* @__PURE__ */ E(ue, { variant: "body2", paragraph: !0, sx: f, children: "Every condition follows this pattern:" }),
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
                ...d
              },
              children: "column  operator  value"
            }
          ),
          /* @__PURE__ */ E(ue, { variant: "body2", paragraph: !0, sx: f, children: "Each part is separated by a single space:" }),
          /* @__PURE__ */ ee(se, { component: "ul", sx: { mt: 0, mb: 2, pl: 3, ...h }, children: [
            /* @__PURE__ */ ee(
              ue,
              {
                component: "li",
                variant: "body2",
                gutterBottom: !0,
                sx: y,
                children: [
                  /* @__PURE__ */ E("strong", { children: "column" }),
                  " — the field you want to filter on (e.g.",
                  " ",
                  /* @__PURE__ */ E(
                    Ge,
                    {
                      label: "name",
                      size: "small",
                      sx: { fontFamily: "monospace", ...g }
                    }
                  ),
                  ",",
                  " ",
                  /* @__PURE__ */ E(
                    Ge,
                    {
                      label: "duration",
                      size: "small",
                      sx: { fontFamily: "monospace", ...g }
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
                sx: y,
                children: [
                  /* @__PURE__ */ E("strong", { children: "operator" }),
                  " — the comparison to apply (e.g.",
                  " ",
                  /* @__PURE__ */ E(
                    Ge,
                    {
                      label: "==",
                      size: "small",
                      sx: { fontFamily: "monospace", ...g }
                    }
                  ),
                  ",",
                  " ",
                  /* @__PURE__ */ E(
                    Ge,
                    {
                      label: "contains",
                      size: "small",
                      sx: { fontFamily: "monospace", ...g }
                    }
                  ),
                  ",",
                  " ",
                  /* @__PURE__ */ E(
                    Ge,
                    {
                      label: ">",
                      size: "small",
                      sx: { fontFamily: "monospace", ...g }
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
                sx: y,
                children: [
                  /* @__PURE__ */ E("strong", { children: "value" }),
                  " — what you are comparing against. Wrap values that contain spaces in double quotes:",
                  " ",
                  /* @__PURE__ */ E(
                    Ge,
                    {
                      label: '"John Doe"',
                      size: "small",
                      sx: { fontFamily: "monospace", ...g }
                    }
                  ),
                  "."
                ]
              }
            )
          ] }),
          /* @__PURE__ */ E(st, { sx: { my: 2, ...u } }),
          /* @__PURE__ */ E(ue, { variant: "h6", gutterBottom: !0, sx: a, children: "Combining Conditions" }),
          /* @__PURE__ */ ee(ue, { variant: "body2", paragraph: !0, sx: f, children: [
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
                ...d
              },
              children: `condition1 AND condition2 AND condition3
condition1 OR  condition2`
            }
          ),
          /* @__PURE__ */ E(ue, { variant: "h6", gutterBottom: !0, sx: a, children: "Grouping with Parentheses" }),
          /* @__PURE__ */ ee(ue, { variant: "body2", paragraph: !0, sx: f, children: [
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
                ...d
              },
              children: `name == "John" AND (status == active OR status == pending)
(price > 100 AND price < 500) OR category == sale`
            }
          ),
          /* @__PURE__ */ ee(ue, { variant: "body2", paragraph: !0, sx: f, children: [
            "Without parentheses, ",
            /* @__PURE__ */ E("strong", { children: "AND" }),
            " binds tighter than ",
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
                ...d
              },
              children: `a = 1 OR b = 2 AND c = 3
// is the same as: a = 1 OR (b = 2 AND c = 3)`
            }
          ),
          /* @__PURE__ */ E(ue, { variant: "h6", gutterBottom: !0, sx: a, children: "NOT (Negation)" }),
          /* @__PURE__ */ ee(ue, { variant: "body2", paragraph: !0, sx: f, children: [
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
                ...d
              },
              children: "NOT (status == inactive OR status == deleted)"
            }
          ),
          /* @__PURE__ */ E(st, { sx: { my: 2, ...u } }),
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
                  ...m
                },
                children: D
              }
            )
          ] }, b)),
          /* @__PURE__ */ E(st, { sx: { my: 2, ...u } }),
          /* @__PURE__ */ E(ue, { variant: "h6", gutterBottom: !0, sx: a, children: "Tips" }),
          /* @__PURE__ */ E(se, { component: "ul", sx: { mt: 0, mb: 1, pl: 3, ...h }, children: [
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
              sx: y,
              children: b
            },
            b
          )) }),
          /* @__PURE__ */ E(st, { sx: { my: 2, ...u } }),
          /* @__PURE__ */ E(ue, { variant: "h6", gutterBottom: !0, sx: a, children: "Syntax Highlighting" }),
          /* @__PURE__ */ E(ue, { variant: "body2", paragraph: !0, sx: f, children: "As you type, each part of the query is colorized to help you spot mistakes at a glance:" }),
          /* @__PURE__ */ E(se, { component: "ul", sx: { mt: 0, mb: 1, pl: 3, ...h }, children: [
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
              sx: I,
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
                      ...x
                    }
                  }
                ),
                /* @__PURE__ */ E(
                  se,
                  {
                    component: "strong",
                    sx: { color: b },
                    children: D
                  }
                ),
                " ",
                "— ",
                F
              ]
            },
            D
          )) })
        ] }),
        /* @__PURE__ */ E(Uo, { sx: T, children: /* @__PURE__ */ E(
          Ft,
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
}, Dl = ({
  columnsOperator: e,
  onSuggestionClick: t,
  defaultOperators: n,
  onApplyClicked: r,
  queryText: o,
  relatedOperators: i,
  placeholder: s = "",
  endAdornment: a,
  sx: f = {},
  ...d
}) => {
  const {
    root: m,
    inputRow: p,
    inputWrapper: h,
    highlightOverlay: y,
    input: g,
    applyButton: u,
    helpButton: T,
    helpTooltip: O,
    adornmentBox: I,
    errorTooltip: x,
    hintTooltip: S,
    popper: b,
    suggestionsBox: D,
    suggestionsList: F,
    suggestionItem: K,
    suggestionText: G,
    tokenColors: c,
    tokenFontWeights: R,
    helpModal: M
  } = f, j = Ze(
    () => ({ ...kl, ...c || {} }),
    [c]
  ), $ = Ze(
    () => ({
      ...Br,
      ...R || {}
    }),
    [R]
  ), A = an(), _ = (V) => {
    if (!V || V === "inherit") return "inherit";
    const le = V.split(".");
    let ce = A.palette;
    for (const $e of le)
      if (ce = ce == null ? void 0 : ce[$e], ce === void 0) return V;
    return typeof ce == "string" ? ce : V;
  }, W = Ze(
    () => {
      const V = {};
      for (const le of Object.keys(j))
        V[le] = _(j[le]);
      return V;
    },
    [j, A]
  ), [re, me] = xe(null), [C, P] = xe([]), [Y, L] = xe([]), [N, U] = xe(""), [z, q] = xe(!0), [Q, X] = xe(null), [B, H] = xe(!1), [w, ae] = xe(0), ge = ln(), be = ln(null), it = ln(null);
  dt(() => {
    o != null && U(o);
  }, [o]), dt(() => {
    const V = Object.keys(e), le = Array.from(
      /* @__PURE__ */ new Set([
        ...V.flatMap((Oo) => {
          var Gn;
          return ((Gn = e[Oo]) == null ? void 0 : Gn.operators) || [];
        }),
        ...i || []
      ])
    ), ce = N.trim().split(/\s+/).filter(Boolean), $e = ce[ce.length - 1] || "", Ot = ce[ce.length - 2] || "", wo = !Ot || n.includes(Ot);
    let ke;
    !N.trim() || n.includes($e) || $e === "(" ? ke = V : V.includes($e) ? ke = e[$e].operators : wo ? ke = le : (V.includes(Ot) && e[Ot].operators.includes($e) || le.includes($e), ke = n), P(ke), L(ke);
    const Un = Nl(N);
    q(Un.isValid), X(Un.error);
  }, [N, e, n, i]), dt(() => {
    const V = it.current;
    if (!V || typeof ResizeObserver > "u") return;
    const le = () => ae(V.offsetWidth || 0);
    le();
    const ce = new ResizeObserver(le);
    return ce.observe(V), () => ce.disconnect();
  }, [a, N, z]);
  const Tt = (V) => {
    const le = V.target.value;
    U(le), L(
      C.filter(
        (ce) => ce.toLowerCase().includes(le.toLowerCase())
      )
    ), me(ge.current);
  }, Ct = (V) => {
    be.current && (be.current.scrollLeft = V.target.scrollLeft);
  }, Fe = Ze(
    () => $l(
      N,
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
    [N, e, i, n]
  ), wt = (V) => {
    U((le) => {
      const ce = le.trimEnd();
      return ce ? `${ce} ${V} ` : `${V} `;
    }), t == null || t(V), setTimeout(() => {
      const le = ge.current;
      if (le) {
        const ce = le.value.length;
        le.setSelectionRange(ce, ce), le.focus();
      }
    }, 0);
  }, ye = !!N && !z && !!Q, To = ye ? Q : N ? "" : _l, Co = ye ? void 0 : N ? !1 : void 0;
  return /* @__PURE__ */ ee(se, { width: "100%", sx: m, children: [
    /* @__PURE__ */ E(se, { display: "flex", sx: p, children: /* @__PURE__ */ ee(se, { sx: { position: "relative", flex: 1, minWidth: 0, ...h }, children: [
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
            ...y
          },
          children: Fe.map(
            (V, le) => V.type === "whitespace" ? /* @__PURE__ */ E("span", { children: V.text }, le) : /* @__PURE__ */ E(
              "span",
              {
                style: {
                  color: W[V.type] || "inherit",
                  fontWeight: $[V.type] ?? Br[V.type] ?? 400
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
          title: To,
          open: Co,
          placement: "top-start",
          arrow: !0,
          componentsProps: {
            tooltip: {
              sx: ye ? {
                bgcolor: "error.main",
                color: "error.contrastText",
                fontSize: "0.75rem",
                maxWidth: 360,
                ...x
              } : {
                bgcolor: "info.dark",
                color: "common.white",
                fontSize: "0.75rem",
                maxWidth: 360,
                ...S
              }
            },
            arrow: {
              sx: ye ? { color: "error.main", ...(x == null ? void 0 : x.bgcolor) && { color: x.bgcolor } } : { color: "info.dark", ...(S == null ? void 0 : S.bgcolor) && { color: S.bgcolor } }
            }
          },
          children: /* @__PURE__ */ E(
            Do,
            {
              ...d,
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
                ...g
              },
              inputRef: ge,
              inputProps: { onScroll: Ct },
              value: N,
              onChange: Tt,
              onFocus: () => me(ge.current),
              onBlur: () => setTimeout(() => me(null), 100),
              error: N ? !z : !1,
              endAdornment: /* @__PURE__ */ E(Mo, { position: "end", children: /* @__PURE__ */ ee(
                se,
                {
                  ref: it,
                  sx: {
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    ...I
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
                            sx: T,
                            children: /* @__PURE__ */ E(Cl, { fontSize: "small" })
                          }
                        )
                      }
                    ),
                    a,
                    /* @__PURE__ */ E(
                      Ft,
                      {
                        disabled: !N || !z,
                        onClick: () => r(N),
                        onMouseDown: (V) => V.preventDefault(),
                        size: "small",
                        sx: u,
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
    /* @__PURE__ */ E(
      Bo,
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
            children: /* @__PURE__ */ E(Fo, { dense: !0, sx: F, children: Y.map((V, le) => /* @__PURE__ */ E(jo, { disablePadding: !0, children: /* @__PURE__ */ E(
              Lo,
              {
                onMouseDown: (ce) => ce.preventDefault(),
                onClick: () => wt(V),
                sx: K,
                children: /* @__PURE__ */ E(ue, { variant: "body2", sx: G, children: V })
              }
            ) }, le)) })
          }
        )
      }
    ),
    /* @__PURE__ */ E(
      Il,
      {
        open: B,
        onClose: () => H(!1),
        sx: M
      }
    )
  ] });
};
function Ul({
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
    title: y,
    queryForm: g
  } = i, [u, T] = xe(null), [O, I] = xe(null), [x, S] = xe(
    e
  );
  dt(() => {
    S(e);
  }, [e]);
  const b = Ze(
    () => Array.from(
      /* @__PURE__ */ new Set([
        ...Object.values(e).flatMap(
          ($) => ($ == null ? void 0 : $.operators) || []
        ),
        ...n || []
      ])
    ),
    [e, n]
  ), D = ($) => {
    T($.currentTarget);
  }, F = () => {
    T(null);
  }, K = ($) => {
    const A = xo($), _ = {};
    A.forEach((W) => {
      W.column && !x[W.column] && !_[W.column] && (_[W.column] = { operators: b });
    }), Object.keys(_).length && S((W) => ({ ...W, ..._ }));
  }, G = ($) => {
    const A = Ol($, b);
    K(A), I(A), r && r(A);
  }, c = ($) => {
    K($), I($), F(), r && r($);
  }, R = Ze(
    () => O ? So(O) : "",
    [O]
  ), M = !!u, j = M ? "simple-popover" : void 0;
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
          Dl,
          {
            columnsOperator: x,
            defaultOperators: t,
            onApplyClicked: G,
            queryText: R,
            relatedOperators: n,
            placeholder: o,
            sx: f,
            endAdornment: /* @__PURE__ */ E(
              ze,
              {
                "aria-describedby": j,
                onClick: D,
                size: "small",
                onMouseDown: ($) => $.preventDefault(),
                sx: d,
                children: /* @__PURE__ */ E(xl, { fontSize: "small" })
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ E(
      yo,
      {
        id: j,
        open: M,
        anchorEl: u,
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
        sx: { ...m },
        children: /* @__PURE__ */ ee(se, { sx: { padding: { xs: 1.5, sm: 2 }, ...h }, children: [
          /* @__PURE__ */ E(ue, { variant: "h6", sx: y, children: "Query Builder" }),
          /* @__PURE__ */ E(
            Tl,
            {
              columnsOperator: x,
              handleApplyFilters: c,
              defaultOperators: t,
              groupTree: O,
              sx: g
            }
          )
        ] })
      }
    )
  ] });
}
export {
  Ul as default
};
